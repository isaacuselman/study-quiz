import { DIM, GREEN, RED, YELLOW, ORANGE, CYAN, CARD, BORDER, btn, wrap } from "../styles/theme";
import { isGraduated } from "../utils/sm2";
import { questionById } from "../data/questions";

export default function ReviewList({ reviewItems, onQuiz, onBack, onClear }) {
  const items = reviewItems.map(r => {
    const full = questionById.get(r.questionId);
    return { ...r, q: full?.q || r.questionId, options: full?.options || [], answer: full?.answer ?? 0 };
  });

  const grouped = {};
  items.forEach(m => { const s = m.source || "Unknown"; if (!grouped[s]) grouped[s] = []; grouped[s].push(m); });
  const sources = Object.keys(grouped).sort();
  const now = Date.now();

  const daysUntil = (ts) => { const d = Math.ceil((ts - now) / 86400000); return d <= 0 ? "now" : `in ${d}d`; };
  const getLabel = (m) => {
    if (isGraduated(m)) return { text: "\u2713 Graduated", color: GREEN };
    if (m.nextReviewAt <= now) return { text: `Due now \u2014 interval ${m.interval}d`, color: ORANGE };
    return { text: `Next review ${daysUntil(m.nextReviewAt)} \u2014 interval ${m.interval}d`, color: DIM };
  };

  const dueNow = reviewItems.filter(r => !isGraduated(r) && r.nextReviewAt <= now);
  const notGraduated = reviewItems.filter(r => !isGraduated(r));

  return (
    <div style={wrap}>
      <div style={{ maxWidth: 560, width: "100%" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: DIM, cursor: "pointer", fontFamily: "inherit", fontSize: 13, marginBottom: 20, padding: 0 }}>&larr; Back to quiz</button>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>Review Queue</h1>
        <p style={{ color: DIM, fontSize: 13, margin: "0 0 24px" }}>{reviewItems.length} question{reviewItems.length !== 1 ? "s" : ""} in spaced review</p>

        {reviewItems.length === 0 ? (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 32, textAlign: "center" }}>
            <p style={{ color: DIM, fontSize: 14, margin: 0 }}>No items in review yet.</p>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
              {dueNow.length > 0 && (
                <button onClick={() => onQuiz(dueNow, "Scheduled Review \u2014 Due Now")} style={btn(ORANGE)}>
                  Review {dueNow.length} due now
                </button>
              )}
              {notGraduated.length > 0 && (
                <button onClick={() => onQuiz(notGraduated, "All Active Reviews")} style={btn(CYAN)}>
                  Review all {notGraduated.length} active
                </button>
              )}
              <button onClick={() => onQuiz(reviewItems, "Full Review \u2014 Everything")} style={btn(YELLOW)}>
                Re-quiz everything ({reviewItems.length})
              </button>
            </div>

            {sources.map(src => (
              <div key={src} style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <p style={{ fontSize: 11, color: ORANGE, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, margin: 0 }}>
                    {src} &mdash; {grouped[src].length} item{grouped[src].length !== 1 ? "s" : ""}
                  </p>
                  <button onClick={() => onQuiz(grouped[src].map(g => reviewItems.find(r => r.questionId === g.questionId)).filter(Boolean), `Review: ${src}`)} style={{ ...btn(ORANGE, true), fontSize: 11 }}>
                    Quiz these
                  </button>
                </div>
                {grouped[src].map((m, i) => {
                  const rl = getLabel(m);
                  return (
                    <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16, marginBottom: 8 }}>
                      <p style={{ color: "#fff", fontSize: 14, margin: "0 0 10px", lineHeight: 1.5 }}>{m.q}</p>
                      {m.yourAnswer != null && <p style={{ color: RED, fontSize: 12, margin: "0 0 4px" }}>Your answer: {m.options[m.yourAnswer]}</p>}
                      <p style={{ color: GREEN, fontSize: 12, margin: "0 0 6px" }}>Correct: {m.options[m.answer]}</p>
                      <p style={{ color: rl.color, fontSize: 11, margin: 0, fontWeight: 600 }}>{rl.text}</p>
                    </div>
                  );
                })}
              </div>
            ))}

            <button onClick={onClear} style={{ background: "none", border: `1px solid ${BORDER}`, color: DIM, borderRadius: 6, padding: "8px 20px", cursor: "pointer", fontFamily: "inherit", fontSize: 12, marginTop: 8 }}>
              Clear all review items
            </button>
          </>
        )}
      </div>
    </div>
  );
}
