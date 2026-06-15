const express = require('express');
const requireAuth = require('../middleware/auth');
const Attempt = require('../models/Attempt');

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

module.exports = router;
