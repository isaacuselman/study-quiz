import { LECTURE_REGISTRY } from "../data/questions";

const V2_KEY = "cs50-quiz-data-v2";
const V3_KEY = "cs50-quiz-data-v3";
const V4_KEY = "cs50-quiz-data-v4";

export { V4_KEY as STORAGE_KEY };

// Build a map: question text → question id (for v3→v4 migration)
function buildTextToIdMap() {
  const map = new Map();
  for (const lec of LECTURE_REGISTRY) {
    for (const q of lec.questions) {
      if (q.id) map.set(q.q, q.id);
    }
  }
  return map;
}

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

function migrateV3ToV4(v3Data) {
  const textToId = buildTextToIdMap();

  // Migrate reviewItems: questionId was question text, now it's the id
  const reviewItems = v3Data.reviewItems
    .map(r => {
      const id = textToId.get(r.questionId);
      if (!id) return null; // question no longer exists
      return { ...r, questionId: id };
    })
    .filter(Boolean);

  // Migrate questionHistory: keys were question text, now they're ids
  const questionHistory = {};
  for (const [text, entry] of Object.entries(v3Data.questionHistory || {})) {
    const id = textToId.get(text);
    if (id) questionHistory[id] = entry;
  }

  return {
    schemaVersion: 4,
    reviewItems,
    questionHistory,
    quizDates: v3Data.quizDates || [],
  };
}

export function loadData() {
  try {
    // Check v4 first
    const v4Raw = localStorage.getItem(V4_KEY);
    if (v4Raw) {
      const data = JSON.parse(v4Raw);
      if (data.schemaVersion === 4) return data;
    }

    // Check v3 and migrate
    const v3Raw = localStorage.getItem(V3_KEY);
    if (v3Raw) {
      const v3Data = JSON.parse(v3Raw);
      const v4Data = migrateV3ToV4(v3Data.schemaVersion === 3 ? v3Data : migrateV2ToV3(v3Data));
      localStorage.setItem(V4_KEY, JSON.stringify(v4Data));
      return v4Data;
    }

    // Check v2 and migrate through v3→v4
    const v2Raw = localStorage.getItem(V2_KEY);
    if (v2Raw) {
      const v2Data = JSON.parse(v2Raw);
      const v3Data = migrateV2ToV3(v2Data);
      const v4Data = migrateV3ToV4(v3Data);
      localStorage.setItem(V4_KEY, JSON.stringify(v4Data));
      return v4Data;
    }
  } catch (e) {
    console.error("Migration error:", e);
  }

  return { schemaVersion: 4, reviewItems: [], questionHistory: {}, quizDates: [] };
}

export function saveData(data) {
  try {
    localStorage.setItem(V4_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Save error:", e);
  }
}
