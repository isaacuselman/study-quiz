export function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function shuffleQuestionOptions(question) {
  const indices = question.options.map((_, i) => i);
  const shuffledIndices = shuffleArray(indices);
  const newOptions = shuffledIndices.map(i => question.options[i]);
  const newAnswer = shuffledIndices.indexOf(question.answer);
  // _indexMap[shuffledIdx] = originalIdx
  const _indexMap = shuffledIndices;
  return { ...question, options: newOptions, answer: newAnswer, _indexMap };
}
