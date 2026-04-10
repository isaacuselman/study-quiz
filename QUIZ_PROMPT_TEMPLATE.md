# Quiz Question Generation Prompt

Use this prompt with any LLM to generate quiz questions from a lecture transcript.

## Instructions

Paste the following prompt, then paste the lecture transcript after it.

---

**Prompt:**

Generate multiple-choice quiz questions from the following lecture transcript. Output a single JavaScript object in this exact format:

```javascript
{
  course: "COURSE_NAME",
  title: "COURSE_NAME Week N: Topic",
  questions: [
    {
      q: "Question text?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: 0,  // 0-based index of the correct option
      explanation: "Optional: why this answer is correct"
    },
    // ... more questions
  ]
}
```

Guidelines:
- Generate 30-40 questions per lecture
- Mix conceptual understanding questions with applied/practical ones
- Avoid trivia (exact syntax minutiae, specific line numbers from examples)
- Focus on "why" and "how" over "what" — test understanding, not memorization
- All four options should be plausible; avoid obviously wrong distractors
- **IMPORTANT: Keep all four options similar in length.** Do NOT make the correct answer consistently longer or more detailed than the distractors. If the correct answer needs to be a full sentence, make the wrong answers full sentences too. A test-taker should not be able to guess the answer by picking the longest option.
- Add `explanation` for non-obvious answers to help learning
- Group related questions with inline comments (e.g., `// Topic name`)
- The `answer` field is a 0-based index into the `options` array
- Vary which index (0-3) is correct — don't default to the same position

After generating, paste the object into the appropriate course file in `src/data/`.

---

**Transcript:**

[Paste transcript here]
