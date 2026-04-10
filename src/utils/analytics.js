import { isGraduated } from "./sm2";

export function computeLectureStats(questions, questionHistory, reviewItems) {
  const total = questions.length;
  let mastered = 0, inReview = 0, unseen = 0;

  const reviewMap = new Map(reviewItems.map(r => [r.questionId, r]));

  for (const q of questions) {
    const key = q.id || q.q;
    const history = questionHistory[key];
    const review = reviewMap.get(key);

    if (!history || history.timesSeen === 0) {
      unseen++;
    } else if (review && !isGraduated(review)) {
      inReview++;
    } else if (history.timesCorrect >= 2 && (!review || isGraduated(review))) {
      mastered++;
    } else {
      inReview++;
    }
  }

  return {
    total,
    mastered,
    inReview,
    unseen,
    masteredPct: total ? Math.round((mastered / total) * 100) : 0,
    inReviewPct: total ? Math.round((inReview / total) * 100) : 0,
    unseenPct: total ? Math.round((unseen / total) * 100) : 0,
  };
}

export function computeStreak(quizDates) {
  if (!quizDates || quizDates.length === 0) return 0;

  const today = new Date().toISOString().slice(0, 10);
  const sorted = [...new Set(quizDates)].sort().reverse();

  // Streak must include today or yesterday to be active
  if (sorted[0] !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (sorted[0] !== yesterday) return 0;
  }

  let streak = 1;
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1]);
    const curr = new Date(sorted[i]);
    const diffDays = Math.round((prev - curr) / 86400000);
    if (diffDays === 1) streak++;
    else break;
  }
  return streak;
}
