const express = require('express');
const { resolveAccess } = require('./content');
const EXAM_1 = require('../data/practice-exam-1.json');

const router = express.Router();

// The printed excerpt of NCMHCE Practice Exam 1 explains cases 1-4
// (questions 1-48) in full and sends readers to /practice-exams/1 for the rest.
// Answers 1-48 are already public in the excerpt, so everyone gets them.
// Answers 49-132 unlock for accounts in their free trial or on a paid plan;
// after the trial they are a subscriber benefit like the rest of the site.
const PUBLIC_THROUGH = 48;

function keyFor(item) {
  return { n: item.n, answer: item.answer, rationale: item.rationale, whyNot: item.whyNot };
}

// GET /api/practice-exams/1 — questions for every item, plus the key the
// caller may see.
router.get('/1', resolveAccess, (req, res) => {
  res.set('Cache-Control', 'no-store');
  const unlocked = req.accessLevel === 'trial' || req.accessLevel === 'paid';
  res.json({
    title: EXAM_1.title,
    domains: EXAM_1.domains,
    cases: EXAM_1.cases,
    items: EXAM_1.items.map((i) => ({
      n: i.n, case: i.case, section: i.section, domain: i.domain, question: i.question, options: i.options,
    })),
    key: EXAM_1.items.filter((i) => unlocked || i.n <= PUBLIC_THROUGH).map(keyFor),
    unlocked,
    publicThrough: PUBLIC_THROUGH,
    accessLevel: req.accessLevel,
    trialEndsAt: req.trialEndsAt || null,
  });
});

module.exports = router;
