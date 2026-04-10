import { DIM, GREEN, ORANGE, btn, wrap } from "../styles/theme";

export default function Results({ score, total, newMisses, totalMisses, onNewQuiz, onReview }) {
  const pct = Math.round((score / total) * 100);
  return (
    <div style={{ ...wrap, justifyContent: "center", paddingTop: 64 }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div style={{ fontSize: 64, marginBottom: 8 }}>{pct >= 80 ? "\ud83c\udf89" : pct >= 50 ? "\ud83d\udc4d" : "\ud83d\udcda"}</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 8px", color: "#fff" }}>{score}/{total}</h1>
        <p style={{ color: DIM, fontSize: 14, margin: "0 0 8px", lineHeight: 1.6 }}>
          {pct >= 80 ? "Solid \u2014 these fundamentals won't hold you back." : pct >= 50 ? "Decent. Review the misses before the next lecture." : "Revisit this material. Fundamentals compound."}
        </p>
        {newMisses > 0 && <p style={{ color: ORANGE, fontSize: 13, margin: "0 0 4px" }}>{newMisses} miss{newMisses !== 1 ? "es" : ""} added to spaced review</p>}
        {totalMisses > 0 && <p style={{ color: DIM, fontSize: 12, margin: "0 0 24px" }}>{totalMisses} total in review queue</p>}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={onNewQuiz} style={btn(GREEN)}>New Quiz</button>
          {totalMisses > 0 && <button onClick={onReview} style={btn(ORANGE)}>Review ({totalMisses})</button>}
        </div>
      </div>
    </div>
  );
}
