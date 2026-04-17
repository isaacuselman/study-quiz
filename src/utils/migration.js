import { LECTURE_REGISTRY } from "../data/questions";

const API_URL = '/api/quiz-data';

// Legacy localStorage keys (for one-time migration to file-based storage)
const V2_KEY = "cs50-quiz-data-v2";
const V3_KEY = "cs50-quiz-data-v3";
const V4_KEY = "cs50-quiz-data-v4";

const EMPTY_DATA = { schemaVersion: 4, reviewItems: [], questionHistory: {}, quizDates: [] };

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

  return { schemaVersion: 3, reviewItems, questionHistory: {}, quizDates: [] };
}

function migrateV3ToV4(v3Data) {
  const textToId = buildTextToIdMap();

  const reviewItems = v3Data.reviewItems
    .map(r => {
      const id = textToId.get(r.questionId);
      if (!id) return null;
      return { ...r, questionId: id };
    })
    .filter(Boolean);

  const questionHistory = {};
  for (const [text, entry] of Object.entries(v3Data.questionHistory || {})) {
    const id = textToId.get(text);
    if (id) questionHistory[id] = entry;
  }

  return { schemaVersion: 4, reviewItems, questionHistory, quizDates: v3Data.quizDates || [] };
}

// Migrate any legacy localStorage data, save to file API, then clear localStorage
function migrateFromLocalStorage() {
  try {
    // Check v4 localStorage first
    const v4Raw = localStorage.getItem(V4_KEY);
    if (v4Raw) {
      const data = JSON.parse(v4Raw);
      if (data.schemaVersion === 4 && (data.reviewItems.length > 0 || Object.keys(data.questionHistory).length > 0)) {
        return data;
      }
    }

    // Check v3
    const v3Raw = localStorage.getItem(V3_KEY);
    if (v3Raw) {
      const v3Data = JSON.parse(v3Raw);
      return migrateV3ToV4(v3Data.schemaVersion === 3 ? v3Data : migrateV2ToV3(v3Data));
    }

    // Check v2
    const v2Raw = localStorage.getItem(V2_KEY);
    if (v2Raw) {
      const v2Data = JSON.parse(v2Raw);
      return migrateV3ToV4(migrateV2ToV3(v2Data));
    }
  } catch (e) {
    console.error("localStorage migration error:", e);
  }
  return null;
}

function clearLocalStorage() {
  try {
    localStorage.removeItem(V2_KEY);
    localStorage.removeItem(V3_KEY);
    localStorage.removeItem(V4_KEY);
  } catch (e) { /* ignore */ }
}

export async function loadData() {
  try {
    const res = await fetch(API_URL);
    if (res.ok) {
      const data = await res.json();
      if (data.schemaVersion === 4 && (data.reviewItems.length > 0 || Object.keys(data.questionHistory).length > 0 || data.quizDates.length > 0)) {
        return data;
      }
    }
  } catch (e) {
    console.error("Failed to load from API:", e);
  }

  // File was empty or missing — check localStorage for legacy data
  const legacy = migrateFromLocalStorage();
  if (legacy) {
    await saveData(legacy);
    clearLocalStorage();
    return legacy;
  }

  return EMPTY_DATA;
}

export async function saveData(data) {
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.error("Failed to save quiz data:", e);
  }
}
