import { DIM, ORANGE, CARD, BORDER, btn } from "../styles/theme";

export default function TopBar({ backTo, dueCount, onDueQuiz, missCount, onReview }) {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", padding: "10px 20px", zIndex: 10, background: "rgba(11,11,15,0.9)", borderBottom: `1px solid ${BORDER}` }}>
      {backTo && <button onClick={backTo} style={{ background: "none", border: "none", color: DIM, cursor: "pointer", fontFamily: "inherit", fontSize: 13 }}>&larr; Back</button>}
      {!backTo && <div />}
      <div style={{ display: "flex", gap: 10 }}>
        {dueCount > 0 && (
          <button onClick={onDueQuiz} style={{ ...btn(ORANGE, true), position: "relative" }}>
            {dueCount} due
          </button>
        )}
        {missCount > 0 && (
          <button onClick={onReview} style={{ background: CARD, border: `1px solid ${BORDER}`, color: ORANGE, borderRadius: 20, padding: "6px 16px", cursor: "pointer", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 700 }}>
            Review ({missCount})
          </button>
        )}
      </div>
    </div>
  );
}
