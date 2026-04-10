export function calculateSM2(item, quality) {
  // quality: 0 = incorrect, 4 = correct
  let { easeFactor, interval, repetitions } = item;

  if (quality >= 3) {
    // Correct
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
  } else {
    // Incorrect — reset
    repetitions = 0;
    interval = 1;
  }

  // SM-2 ease factor adjustment
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  const nextReviewAt = Date.now() + interval * 86400000;

  return { easeFactor, interval, repetitions, nextReviewAt };
}

export function isGraduated(item, thresholdDays = 60) {
  return item.interval >= thresholdDays;
}

export function newReviewItem(question, source, yourAnswer) {
  return {
    questionId: question.id,
    source,
    yourAnswer,
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReviewAt: Date.now() + 86400000,
    missedAt: Date.now(),
    lastReviewedAt: null,
  };
}
