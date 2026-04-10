import { useState } from "react";
import { DIM, GREEN, ORANGE, CYAN, CARD, BORDER, wrap } from "../styles/theme";
import { COURSES, lecturesByCourse, lectures } from "../data/questions";
import { computeLectureStats, computeStreak } from "../utils/analytics";

export default function LecturePicker({ onPick, questionHistory, reviewItems, quizDates }) {
  const streak = computeStreak(quizDates);
  const [collapsed, setCollapsed] = useState({ "CS50": true });

  const toggle = (course) =>
    setCollapsed(prev => ({ ...prev, [course]: !prev[course] }));

  return (
    <div style={wrap}>
      <div style={{ maxWidth: 560, width: "100%" }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>Study Quiz</h1>
        <p style={{ color: DIM, fontSize: 13, margin: "0 0 16px" }}>Pick a lecture to quiz yourself on.</p>
        {streak > 0 && (
          <p style={{ color: ORANGE, fontSize: 13, fontWeight: 700, margin: "0 0 24px" }}>
            {streak} day{streak !== 1 ? "s" : ""} streak
          </p>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {COURSES.map(course => {
            const courseLectures = lecturesByCourse[course] || [];
            if (courseLectures.length === 0) return null;
            const isCollapsed = !!collapsed[course];
            const allCourseQs = courseLectures.flatMap(l => l.questions);
            const courseStats = computeLectureStats(allCourseQs, questionHistory, reviewItems);

            return (
              <div key={course}>
                <button
                  onClick={() => toggle(course)}
                  style={{
                    width: "100%", padding: "12px 16px", background: CARD,
                    border: `1px solid ${BORDER}`, borderRadius: 8,
                    color: "#fff", fontSize: 16, fontWeight: 700, textAlign: "left",
                    cursor: "pointer", fontFamily: "inherit", display: "flex",
                    alignItems: "center", justifyContent: "space-between",
                  }}
                >
                  <span>
                    {course}
                    <span style={{ fontSize: 11, color: DIM, fontWeight: 400, marginLeft: 10 }}>
                      {courseLectures.length} lecture{courseLectures.length !== 1 ? "s" : ""} &middot; {courseStats.total} questions
                    </span>
                  </span>
                  <span style={{ fontSize: 12, color: DIM, transition: "transform 0.2s", transform: isCollapsed ? "rotate(-90deg)" : "rotate(0)" }}>
                    ▼
                  </span>
                </button>

                {!isCollapsed && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10, paddingLeft: 12 }}>
                    {courseLectures.map(({ title }) => {
                      const stats = computeLectureStats(lectures[title], questionHistory, reviewItems);
                      return (
                        <button key={title} onClick={() => onPick(title)} style={{
                          padding: "16px 20px", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8,
                          color: "#fff", fontSize: 15, textAlign: "left", cursor: "pointer", fontFamily: "inherit", lineHeight: 1.4,
                        }}>
                          {title}
                          <span style={{ display: "block", fontSize: 11, color: DIM, marginTop: 4 }}>{stats.total} questions</span>
                          <div style={{ display: "flex", height: 6, borderRadius: 3, overflow: "hidden", background: BORDER, marginTop: 8 }}>
                            {stats.masteredPct > 0 && <div style={{ width: `${stats.masteredPct}%`, background: GREEN }} />}
                            {stats.inReviewPct > 0 && <div style={{ width: `${stats.inReviewPct}%`, background: ORANGE }} />}
                          </div>
                          {(stats.mastered > 0 || stats.inReview > 0) && (
                            <span style={{ display: "block", fontSize: 10, color: DIM, marginTop: 4 }}>
                              {stats.masteredPct}% mastered &middot; {stats.inReview} in review &middot; {stats.unseen} unseen
                            </span>
                          )}
                        </button>
                      );
                    })}
                    <button onClick={() => onPick(`__all_${course}__`)} style={{
                      padding: "16px 20px", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8,
                      color: CYAN, fontSize: 15, textAlign: "left", cursor: "pointer", fontFamily: "inherit",
                    }}>
                      All {course} combined
                      <span style={{ display: "block", fontSize: 11, color: DIM, marginTop: 4 }}>{courseStats.total} questions</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
