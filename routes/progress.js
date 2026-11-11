const express = require('express');
const requireAuth = require('../middleware/auth');
const Attempt = require('../models/Attempt');
const User = require('../models/User');
const { getNceExam } = require('../utils/nceExam');
const bp = require('../utils/nceBlueprint');
const { computeNceReadiness } = require('../utils/nceReadiness');
const { computeNcmhceReadiness } = require('../utils/ncmhceReadiness');

const router = express.Router();

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
router.get('/summary', async (req, res) => {
  const exam = req.query.exam === 'nce' ? 'nce' : 'ncmhce';
  try {
    const user = await User.findById(req.userId).select('examDate nceExamDate').lean();
    const examDate = user ? (exam === 'nce' ? user.nceExamDate : user.examDate) : null;
    const daysToExam = examDate
      ? Math.max(0, Math.ceil((new Date(examDate) - Date.now()) / 86400000))
      : null;

    const nceExam = await getNceExam().catch(() => null);

    if (exam === 'nce') {
      if (!nceExam) return res.json({ exam, completed: 0, readiness: null, daysToExam, unit: 'questions' });
      const blueprint = bp.blueprintFor('current');
      const attempts = await Attempt.find({ userId: req.userId, examId: nceExam._id })
        .sort({ createdAt: -1 }).limit(200)
        .select('mode score domainBreakdown completedAt responses').lean();
      const byDomain = {};
      blueprint.DOMAIN_KEYS.forEach((k) => { byDomain[k] = { correct: 0, total: 0 }; });
      let answered = 0;
      attempts.forEach((a) => {
        answered += (a.responses || []).length;
        Object.entries(a.domainBreakdown || {}).forEach(([k, v]) => {
          if (!byDomain[k]) return;
          byDomain[k].correct += v.correct || 0;
          byDomain[k].total += v.total || 0;
        });
      });
      const rd = computeNceReadiness(byDomain, attempts, blueprint);
      return res.json({ exam, completed: answered, readiness: rd ? rd.score : null, daysToExam, unit: 'questions' });
    }

    const attempts = await Attempt.find({ userId: req.userId }).sort({ createdAt: 1 }).limit(1000)
      .select('examId domainBreakdown').lean();
    const ncmhce = attempts.filter((a) => !(nceExam && String(a.examId) === String(nceExam._id)));
    const rd = computeNcmhceReadiness(ncmhce);
    return res.json({
      exam,
      completed: rd ? rd.cases : 0,
      readiness: rd ? rd.score : null,
      daysToExam,
      unit: 'cases',
    });
  } catch (err) {
    console.error('progress summary error', err);
    return res.status(500).json({ error: 'Could not load your progress summary' });
  }
});

module.exports = router;
