const express = require('express');
const requireAuth = require('../middleware/auth');
const Attempt = require('../models/Attempt');
const User = require('../models/User');
const { getNceExam } = require('../utils/nceExam');
const bp = require('../utils/nceBlueprint');
const { computeNceReadiness } = require('../utils/nceReadiness');
const { computeNcmhceReadiness, DOMAIN_WEIGHTS } = require('../utils/ncmhceReadiness');

const router = express.Router();

const { summarize } = require('../utils/progressSummary');

// Everything here requires being signed in.
router.use(requireAuth);

// POST /api/progress — save a finished attempt
router.post('/', async (req, res) => {
  try {
    const {
      examId,
      contentItemId,
      externalId,
      mode,
      responses,
      score,
      domainBreakdown,
      voiceUsed,
      startedAt,
      completedAt,
    } = req.body || {};

    if (!examId) return res.status(400).json({ error: 'examId is required' });

    const attempt = await Attempt.create({
      userId: req.userId,
      examId,
      contentItemId,
      externalId,
      mode,
      responses,
      score,
      domainBreakdown,
      voiceUsed,
      startedAt,
      completedAt: completedAt || new Date(),
    });

    return res.status(201).json({ attempt });
  } catch (err) {
    console.error('save progress error', err);
    return res.status(500).json({ error: 'Could not save your progress' });
  }
});

// GET /api/progress?examId=... — this person's saved attempts
router.get('/', async (req, res) => {
  try {
    const filter = { userId: req.userId };
    if (req.query.examId) filter.examId = req.query.examId;

    const attempts = await Attempt.find(filter).sort({ createdAt: -1 }).limit(200);
    return res.json({ attempts });
  } catch (err) {
    console.error('fetch progress error', err);
    return res.status(500).json({ error: 'Could not load your progress' });
  }
});

// GET /api/progress/summary?exam=ncmhce|nce
// The three numbers the trial-ended screen shows: work completed, the
// readiness score and how long until the exam. It reads the same attempt
// records and the same readiness functions the dashboards use, so the paywall
// can never quote a number the study pages disagree with, and it comes from
// the account rather than this browser — someone whose trial ended on their
// phone still sees their progress on a laptop.
// The numbers live in utils/progressSummary.js, shared with the study-break
// job, so no two readers of an account's progress can disagree.
router.get('/summary', async (req, res) => {
  const exam = req.query.exam === 'nce' ? 'nce' : 'ncmhce';
  try {
    return res.json(await summarize(req.userId, exam));
  } catch (err) {
    console.error('progress summary error', err);
    return res.status(500).json({ error: 'Could not load your progress summary' });
  }
});

module.exports = router;
