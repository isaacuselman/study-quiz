// ╔══════════════════════════════════════════════════════════════════╗
// ║  LECTURE REGISTRY — index file                                  ║
// ║                                                                 ║
// ║  Questions are split by course:                                 ║
// ║    cs50-questions.js   — CS50 (Intro to CS)                     ║
// ║    cs50p-questions.js  — CS50P (Intro to Python)                ║
// ║                                                                 ║
// ║  Generate questions with QUIZ_PROMPT_TEMPLATE.md + any LLM      ║
// ║  then paste the object into the appropriate course file.        ║
// ╚══════════════════════════════════════════════════════════════════╝

import { CS50_LECTURES } from "./cs50-questions";
import { CS50P_LECTURES } from "./cs50p-questions";

export const LECTURE_REGISTRY = [...CS50P_LECTURES, ...CS50_LECTURES];

// Ordered list of course names (CS50P first since it's the active course)
export const COURSES = [...new Set(LECTURE_REGISTRY.map(l => l.course))];

// Lectures grouped by course name
export const lecturesByCourse = Object.groupBy(LECTURE_REGISTRY, l => l.course);

// Flat map: title → questions (used by App.jsx, ReviewList, etc.)
export const lectures = Object.fromEntries(
  LECTURE_REGISTRY.map(l => [l.title, l.questions])
);

// Flat map: id → question (for review item lookups)
export const questionById = new Map(
  LECTURE_REGISTRY.flatMap(l =>
    l.questions.map(q => [q.id, { ...q, source: l.title }])
  )
);

// Resolve which variant to show based on times seen
export function resolveVariant(question, timesSeen = 0) {
  const variants = question.variants;
  if (!variants || variants.length === 0) return question;
  // Variant 0 = base question, variants 1..N = alternatives
  const totalVariants = 1 + variants.length;
  const idx = timesSeen % totalVariants;
  if (idx === 0) return question;
  const v = variants[idx - 1];
  return { ...question, q: v.q, options: v.options, answer: v.answer };
}
