import { useState, useEffect } from "react";
import { TEXT, DIM, GREEN, RED, YELLOW, ORANGE, CYAN, CARD, BORDER, btn, wrap } from "../styles/theme";

export default function QuizEngine({ questions, onFinish, label }) {
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState([]);

  const lock = () => {
    if (sel === null || locked) return;
    setLocked(true);
    if (sel === questions[cur].answer) setScore(s => s + 1);
    else setMisses(m => [...m, { ...questions[cur], yourAnswer: sel }]);
  };
  const next = () => {
    if (cur + 1 >= questions.length) { onFinish(score, misses); return; }
    setCur(c => c + 1); setSel(null); setLocked(false);
  };

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;
      if (!locked && key >= "1" && key <= "4") {
        const idx = parseInt(key) - 1;
        if (idx < questions[cur].options.length) setSel(idx);
      } else if (key === " " || key === "Enter") {
        e.preventDefault();
        if (locked) next();
        else if (sel !== null) lock();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const q = questions[cur];

  return (
    <div style={wrap}>
      <div style={{ maxWidth: 560, width: "100%" }}>
        {label && <p style={{ fontSize: 11, color: ORANGE, margin: "0 0 16px", letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>{label}</p>}
        <div style={{ display: "flex", gap: 3, marginBottom: 32 }}>
          {questions.map((_, i) => <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i < cur ? GREEN : i === cur ? YELLOW : "#2a2a35" }} />)}
        </div>
        <p style={{ fontSize: 12, color: DIM, margin: "0 0 12px", letterSpacing: 1 }}>{cur + 1} / {questions.length}</p>
        <h2 style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.6, margin: "0 0 28px", color: "#fff" }}>{q.q}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {q.options.map((opt, i) => {
            let bg = CARD, border = `1px solid ${BORDER}`, tc = TEXT;
            if (locked) {
              if (i === q.answer) { bg = "rgba(34,197,94,0.2)"; border = `2px solid ${GREEN}`; tc = "#fff"; }
              else if (i === sel && i !== q.answer) { bg = "rgba(239,68,68,0.2)"; border = `2px solid ${RED}`; tc = "#fff"; }
            } else if (i === sel) { border = `2px solid ${YELLOW}`; }
            return (
              <button key={i} onClick={() => !locked && setSel(i)} style={{
                padding: "14px 16px", background: bg, border, borderRadius: 8, color: tc,
                fontSize: 14, textAlign: "left", cursor: locked ? "default" : "pointer",
                fontFamily: "inherit", lineHeight: 1.5, transition: "all 0.15s",
              }}>
                <span style={{ color: DIM, marginRight: 12, fontWeight: 700 }}>{String.fromCharCode(65 + i)}</span>{opt}
              </button>
            );
          })}
        </div>
        {locked && q.explanation && (
          <div style={{ marginTop: 16, padding: 16, background: "rgba(6,182,212,0.1)", border: `1px solid ${CYAN}`, borderRadius: 8 }}>
            <p style={{ color: CYAN, fontSize: 11, fontWeight: 700, margin: "0 0 6px", letterSpacing: 1, textTransform: "uppercase" }}>Explanation</p>
            <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{q.explanation}</p>
          </div>
        )}
        {sel !== null && !locked && <button onClick={lock} style={{ marginTop: 24, ...btn(YELLOW) }}>Lock In</button>}
        {locked && <button onClick={next} style={{ marginTop: 24, ...btn(YELLOW) }}>{cur + 1 >= questions.length ? "See Results" : "Next \u2192"}</button>}
        <p style={{ fontSize: 10, color: "#555", marginTop: 16, margin: locked || sel !== null ? "8px 0 0" : "16px 0 0" }}>1-4 to select · space to confirm/advance</p>
      </div>
    </div>
  );
}
