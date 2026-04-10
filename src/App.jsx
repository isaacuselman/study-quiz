import { useState } from "react";
import { DIM, wrap } from "./styles/theme";
import { lectures, LECTURE_REGISTRY, questionById, resolveVariant } from "./data/questions";
import useQuizData from "./hooks/useQuizData";
import { calculateSM2, isGraduated, newReviewItem } from "./utils/sm2";
import { shuffleArray, shuffleQuestionOptions } from "./utils/shuffle";
import QuizEngine from "./components/QuizEngine";
import ReviewList from "./components/ReviewList";
import LecturePicker from "./components/LecturePicker";
import Results from "./components/Results";
import TopBar from "./components/TopBar";

export default function App() {
  const { loading, reviewItems, questionHistory, quizDates, persist } = useQuizData();
  const [view, setView] = useState("pick");
  const [quizQs, setQuizQs] = useState([]);
  const [reviewLbl, setReviewLbl] = useState("");
  const [lastScore, setLastScore] = useState(0);
  const [lastTotal, setLastTotal] = useState(0);
  const [lastNewMisses, setLastNewMisses] = useState(0);
  const [isReviewQuiz, setIsReviewQuiz] = useState(false);

  // Resolve variant based on how many times the student has seen this question
  const prepareQuestion = (q) => {
    const id = q.id;
    const history = questionHistory[id];
    const timesSeen = history ? history.timesSeen : 0;
    return resolveVariant(q, timesSeen);
  };

  const handlePickLecture = (name) => {
    const allMatch = name.match(/^__all_(.+)__$/);
    let qs;
    if (allMatch) {
      const course = allMatch[1];
      qs = LECTURE_REGISTRY
        .filter(l => l.course === course)
        .flatMap(l => l.questions.map(q => ({ ...q, source: l.title })));
    } else {
      qs = lectures[name].map(q => ({ ...q, source: name }));
    }
    qs = shuffleArray(qs).map(q => shuffleQuestionOptions(prepareQuestion(q)));
    setQuizQs(qs);
    setIsReviewQuiz(false);
    setView("quiz");
  };

  const handleFinish = (score, misses) => {
    setLastScore(score); setLastTotal(quizQs.length); setLastNewMisses(misses.length);

    const now = Date.now();
    const today = new Date().toISOString().slice(0, 10);
    const missedSet = new Set(misses.map(m => m.id));

    // Update question history — keyed by id
    const newHistory = { ...questionHistory };
    for (const q of quizQs) {
      const key = q.id;
      const wasCorrect = !missedSet.has(key);
      const existing = newHistory[key] || { timesSeen: 0, timesCorrect: 0, lastSeenAt: 0, source: q.source };
      newHistory[key] = {
        ...existing,
        timesSeen: existing.timesSeen + 1,
        timesCorrect: existing.timesCorrect + (wasCorrect ? 1 : 0),
        lastSeenAt: now,
        source: q.source,
      };
    }

    // Update quiz dates for streak
    const newDates = quizDates.includes(today) ? quizDates : [...quizDates, today];

    // Update review items with SM-2 — keyed by id
    let newReviewItems = [...reviewItems];
    const reviewMap = new Map(newReviewItems.map((r, i) => [r.questionId, i]));

    if (isReviewQuiz) {
      for (const q of quizQs) {
        const idx = reviewMap.get(q.id);
        if (idx === undefined) continue;
        const item = newReviewItems[idx];
        const quality = missedSet.has(q.id) ? 0 : 4;
        const updated = calculateSM2(item, quality);
        const miss = misses.find(m => m.id === q.id);
        newReviewItems[idx] = {
          ...item,
          ...updated,
          lastReviewedAt: now,
          ...(miss ? { yourAnswer: miss._indexMap ? miss._indexMap[miss.yourAnswer] : miss.yourAnswer } : {}),
        };
      }
      // Remove graduated items
      newReviewItems = newReviewItems.filter(r => !isGraduated(r));
    } else {
      // Normal quiz: correct answers that are in review get SM-2 update, misses get added/reset
      for (const q of quizQs) {
        const idx = reviewMap.get(q.id);
        if (missedSet.has(q.id)) {
          const miss = misses.find(m => m.id === q.id);
          const yourAnswer = miss._indexMap ? miss._indexMap[miss.yourAnswer] : miss.yourAnswer;
          if (idx !== undefined) {
            // Reset existing review item
            const item = newReviewItems[idx];
            const updated = calculateSM2(item, 0);
            newReviewItems[idx] = { ...item, ...updated, yourAnswer, lastReviewedAt: now };
          } else {
            // New miss
            newReviewItems.push(newReviewItem(q, q.source, yourAnswer));
          }
        } else if (idx !== undefined) {
          // Correct and was in review — advance
          const item = newReviewItems[idx];
          const updated = calculateSM2(item, 4);
          newReviewItems[idx] = { ...item, ...updated, lastReviewedAt: now };
        }
      }
      // Remove graduated items
      newReviewItems = newReviewItems.filter(r => !isGraduated(r));
    }

    persist({ reviewItems: newReviewItems, questionHistory: newHistory, quizDates: newDates });
    setView("results");
  };

  const handleFlag = (question) => {
    // Add to review queue without marking incorrect — keyed by id
    const existing = reviewItems.find(r => r.questionId === question.id);
    if (existing) return; // already in review
    const item = newReviewItem(question, question.source, null);
    item.flagged = true;
    persist({ reviewItems: [...reviewItems, item] });
  };

  const startReviewQuiz = (items, label) => {
    // Build quiz questions from review items, looking up by id
    const qs = items
      .map(item => questionById.get(item.questionId))
      .filter(Boolean)
      .map(q => prepareQuestion(q));
    setQuizQs(shuffleArray(qs).map(shuffleQuestionOptions));
    setReviewLbl(label);
    setIsReviewQuiz(true);
    setView("reviewQuiz");
  };

  if (loading) return <div style={{ ...wrap, justifyContent: "center" }}><p style={{ color: DIM }}>Loading...</p></div>;

  const dueNow = reviewItems.filter(r => !isGraduated(r) && r.nextReviewAt <= Date.now());

  const topBarProps = {
    dueCount: dueNow.length,
    onDueQuiz: () => startReviewQuiz(dueNow, "Scheduled Review"),
    missCount: reviewItems.length,
    onReview: () => setView("review"),
  };

  if (view === "review") {
    return (
      <>
        <TopBar backTo={() => setView("pick")} {...topBarProps} />
        <div style={{ paddingTop: 48 }}>
          <ReviewList
            reviewItems={reviewItems}
            onQuiz={startReviewQuiz}
            onBack={() => setView("pick")}
            onClear={() => persist({ reviewItems: [] })}
          />
        </div>
      </>
    );
  }

  if (view === "reviewQuiz") {
    return (
      <>
        <TopBar backTo={() => setView("review")} {...topBarProps} />
        <div style={{ paddingTop: 48 }}>
          <QuizEngine questions={quizQs} onFinish={handleFinish} label={reviewLbl} />
        </div>
      </>
    );
  }

  if (view === "results") {
    return (
      <>
        <TopBar {...topBarProps} />
        <div style={{ paddingTop: 48 }}>
          <Results score={lastScore} total={lastTotal} newMisses={lastNewMisses} totalMisses={reviewItems.length} onNewQuiz={() => setView("pick")} onReview={() => setView("review")} />
        </div>
      </>
    );
  }

  if (view === "quiz") {
    return (
      <>
        <TopBar backTo={() => setView("pick")} {...topBarProps} />
        <div style={{ paddingTop: 48 }}>
          <QuizEngine questions={quizQs} onFinish={handleFinish} onFlag={handleFlag} label={null} />
        </div>
      </>
    );
  }

  return (
    <>
      <TopBar {...topBarProps} />
      <div style={{ paddingTop: 48 }}>
        <LecturePicker
          onPick={handlePickLecture}
          questionHistory={questionHistory}
          reviewItems={reviewItems}
          quizDates={quizDates}
        />
      </div>
    </>
  );
}
