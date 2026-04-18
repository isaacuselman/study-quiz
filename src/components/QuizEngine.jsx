import { useState, useEffect } from "react";
import { TEXT, DIM, GREEN, RED, YELLOW, ORANGE, CYAN, CARD, BORDER, btn, wrap } from "../styles/theme";

export default function QuizEngine({ questions, onFinish, onFlag, label }) {
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState([]);
  const [flagged, setFlagged] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [luckyGuesses, setLuckyGuesses] = useState([]);

  const q = questions[cur];
  const isCorrect = locked && sel === q.answer;
  const isLastQ = cur + 1 >= questions.length;

  const reveal = () => { if (!revealed) setRevealed(true); };

  const lock = () => {
    if (sel === null || locked) return;
    setLocked(true);
    if (sel === q.answer) setScore(s => s + 1);
    else setMisses(m => [...m, { ...q, yourAnswer: sel }]);
  };

  const advance = (luckyGuess = false) => {
    const updatedGuesses = luckyGuess ? [...luckyGuesses, q] : luckyGuesses;
    if (isLastQ) {
      onFinish(score, misses, updatedGuesses);
      return;
    }
    if (luckyGuess) setLuckyGuesses(updatedGuesses);
    setCur(c => c + 1);
    setSel(null);
    setLocked(false);
    setFlagged(false);
    setRevealed(false);
  };

  const flagForReview = () => {
    if (flagged) return;
    setFlagged(true);
    if (onFlag) onFlag(q);
  };

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;

      // Phase 1: retrieval — think first, then reveal
      if (!revealed) {
        if (key === " " || key === "Enter") { e.preventDefault(); reveal(); }
        return;
      }

      // Phase 2: select & lock
      if (!locked) {
        if (key >= "1" && key <= "4") {
          const idx = parseInt(key) - 1;
          if (idx < q.options.length) setSel(idx);
        } else if (key === "f" && onFlag) {
          flagForReview();
        } else if (key === " " || key === "Enter") {
          e.preventDefault();
          if (sel !== null) lock();
        }
        return;
      }

      // Phase 3: after answer — confidence (correct) or advance (wrong)
      if (key === " " || key === "Enter") {
        e.preventDefault();
        advance(false);
      } else if (isCorrect && key === "g") {
        e.preventDefault();
        advance(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <div style={wrap}>
      <div style={{ maxWidth: 560, width: "100%" }}>
        {label && <p style={{ fontSize: 11, color: ORANGE, margin: "0 0 16px", letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>{label}</p>}
        <div style={{ display: "flex", gap: 3, marginBottom: 32 }}>
          {questions.map((_, i) => <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i < cur ? GREEN : i === cur ? YELLOW : "#2a2a35" }} />)}
        </div>
        <p style={{ fontSize: 14, color: DIM, margin: "0 0 12px", letterSpacing: 1 }}>{cur + 1} / {questions.length}</p>
        <h2 style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.6, margin: "0 0 28px", color: "#fff" }}>{q.q}</h2>

        {/* Retrieval-first: think before seeing options */}
        {!revealed && (
          <div style={{ textAlign: "center", padding: "32px 0" }}>
            <p style={{ color: DIM, fontSize: 14, margin: "0 0 20px", fontStyle: "italic" }}>
              Think of the answer, then reveal the options
            </p>
            <button onClick={reveal} style={btn(YELLOW)}>Reveal Options</button>
          </div>
        )}

        {/* Options */}
        {revealed && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {q.options.map((opt, i) => {
              let bg = CARD, border = `1px solid ${BORDER}`, tc = TEXT;
              if (locked) {
                if (i === q.answer) { bg = "rgba(34,197,94,0.2)"; border = `2px solid ${GREEN}`; tc = "#fff"; }
                else if (i === sel && i !== q.answer) { bg = "rgba(239,68,68,0.2)"; border = `2px solid ${RED}`; tc = "#fff"; }
              } else if (i === sel) { border = `2px solid ${YELLOW}`; }
              return (
                <button key={i} onClick={() => !locked && setSel(i)} style={{
                  padding: "16px 18px", background: bg, border, borderRadius: 8, color: tc,
                  fontSize: 16, textAlign: "left", cursor: locked ? "default" : "pointer",
                  fontFamily: "inherit", lineHeight: 1.5, transition: "all 0.15s",
                }}>
                  <span style={{ color: DIM, marginRight: 12, fontWeight: 700 }}>{String.fromCharCode(65 + i)}</span>{opt}
                </button>
              );
            })}
          </div>
        )}

        {/* Explanation shown after answering */}
        {locked && q.explanation && (
          <div style={{ marginTop: 16, padding: 16, background: "rgba(6,182,212,0.1)", border: `1px solid ${CYAN}`, borderRadius: 8 }}>
            <p style={{ color: CYAN, fontSize: 11, fontWeight: 700, margin: "0 0 6px", letterSpacing: 1, textTransform: "uppercase" }}>Why?</p>
            <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{q.explanation}</p>
          </div>
        )}

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 24, flexWrap: "wrap" }}>
          {revealed && sel !== null && !locked && <button onClick={lock} style={btn(YELLOW)}>Lock In</button>}

          {locked && !isCorrect && (
            <button onClick={() => advance(false)} style={btn(YELLOW)}>{isLastQ ? "See Results" : "Next \u2192"}</button>
          )}

          {isCorrect && (
            <>
              <button onClick={() => advance(false)} style={btn(GREEN)}>Knew it \u2192</button>
              <button onClick={() => advance(true)} style={{
                padding: "12px 24px", background: "transparent", border: `1px solid ${ORANGE}`,
                borderRadius: 6, color: ORANGE, fontWeight: 700, fontSize: 14, cursor: "pointer",
                fontFamily: "inherit", transition: "all 0.15s",
              }}>Lucky guess</button>
            </>
          )}

          {revealed && !locked && onFlag && (
            <button onClick={flagForReview} style={{
              padding: "6px 16px", background: "transparent", border: `1px solid ${flagged ? ORANGE : BORDER}`,
              borderRadius: 6, color: flagged ? ORANGE : DIM, fontSize: 12, cursor: flagged ? "default" : "pointer",
              fontFamily: "inherit", fontWeight: 600, transition: "all 0.15s",
            }}>
              {flagged ? "Flagged" : "Flag for review"}
            </button>
          )}
        </div>

        <p style={{ fontSize: 11, color: "#555", marginTop: 8 }}>
          {!revealed
            ? "space to reveal options"
            : !locked
              ? `1-4 to select \u00b7 space to confirm${onFlag ? " \u00b7 f to flag" : ""}`
              : isCorrect
                ? "space = knew it \u00b7 g = lucky guess"
                : "space to continue"}
        </p>
      </div>
    </div>
  );
}
