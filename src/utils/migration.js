const V2_KEY = "cs50-quiz-data-v2";
const V3_KEY = "cs50-quiz-data-v3";

export { V3_KEY as STORAGE_KEY };

function migrateV2ToV3(v2Data) {
  const misses = v2Data.misses || [];
  const reviewItems = misses.map(m => {
    const rc = m.reviewCount || 0;
    let interval, repetitions;
    if (rc === 0) { interval = 1; repetitions = 0; }
    else if (rc === 1) { interval = 6; repetitions = 1; }
    else { interval = 15; repetitions = 2; }

    const nextReviewAt = (m.nextReviewAt && m.nextReviewAt > Date.now())
      ? m.nextReviewAt
      : Date.now() + interval * 86400000;

    return {
      questionId: m.q,
      source: m.source || "Unknown",
      yourAnswer: m.yourAnswer,
      easeFactor: 2.5,
      interval,
      repetitions,
      nextReviewAt,
      missedAt: m.missedAt || Date.now(),
      lastReviewedAt: m.lastReviewedAt || null,
    };
  });

  return {
    schemaVersion: 3,
    reviewItems,
    questionHistory: {},
    quizDates: [],
  };
}

export function loadData() {
  try {
    const v3Raw = localStorage.getItem(V3_KEY);
    if (v3Raw) {
      const data = JSON.parse(v3Raw);
      if (data.schemaVersion === 3) return data;
    }

    const v2Raw = localStorage.getItem(V2_KEY);
    if (v2Raw) {
      const v2Data = JSON.parse(v2Raw);
      const v3Data = migrateV2ToV3(v2Data);
      localStorage.setItem(V3_KEY, JSON.stringify(v3Data));
      return v3Data;
    }
  } catch (e) {
    console.error("Migration error:", e);
  }

  return { schemaVersion: 3, reviewItems: [], questionHistory: {}, quizDates: [] };
}

export function saveData(data) {
  try {
    localStorage.setItem(V3_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Save error:", e);
  }
}
