const express = require('express');
const ContentItem = require('../models/ContentItem');
const Exam = require('../models/Exam');
const User = require('../models/User');

const router = express.Router();

const FREE_CASE_LIMIT = 5;

// Middleware: resolves subscription tier and attaches req.accessLevel.
// 'free'  — no token, or expired paid tier
// 'paid'  — active monthly, pass3, or guarantee with valid access
// 'gated' — guarantee tier past 6 months, score report not yet approved
async function resolveAccess(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) { req.accessLevel = 'free'; return next(); }

  try {
    const jwt = require('jsonwebtoken');
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.sub;

    const user = await User.findById(req.userId).select('subscription');
    if (!user) { req.accessLevel = 'free'; return next(); }

    const sub = user.subscription || {};
    const tier = sub.tier || 'free';
    const now = new Date();
    const expired = sub.currentPeriodEnd && sub.currentPeriodEnd < now;

    // Guarantee tier gate: expired + no approved score report → blocked
    if (tier === 'guarantee' && expired) {
      const srStatus = sub.scoreReport?.status || 'none';
      if (!['approved_extension', 'passed'].includes(srStatus)) {
        req.accessLevel = 'gated';
        req.gateReason = srStatus === 'pending'
          ? 'score_report_pending'
          : 'score_report_required';
        return next();
      }
    }

    // Monthly / pass3: if expired, drop to free
    if (['monthly', 'pass3'].includes(tier) && expired) {
      req.accessLevel = 'free';
      return next();
    }

    req.accessLevel = tier === 'free' ? 'free' : 'paid';
    next();
  } catch (err) {
    req.accessLevel = 'free';
    next();
  }
}

// GET /api/content?exam=ncmhce — list published cases
router.get('/', resolveAccess, async (req, res) => {
  try {
    const filter = { status: 'published' };
    if (req.query.exam) {
      const exam = await Exam.findOne({ key: req.query.exam });
      if (!exam) return res.json({ count: 0, items: [], accessLevel: req.accessLevel });
      filter.examId = exam._id;
    }
    const items = await ContentItem.find(filter)
      .select('externalId title category difficulty format')
      .sort({ category: 1, externalId: 1 });

    const limited = req.accessLevel === 'free' ? items.slice(0, FREE_CASE_LIMIT) : items;
    return res.json({
      count: limited.length,
      total: items.length,
      items: limited,
      accessLevel: req.accessLevel,
      freeLimit: FREE_CASE_LIMIT,
    });
  } catch (err) {
    console.error('list content error', err);
    return res.status(500).json({ error: 'Could not load the case list' });
  }
});

// GET /api/content/:externalId — one full case
router.get('/:externalId', resolveAccess, async (req, res) => {
  try {
    // Hard gate: guarantee user past 6 months with no score report
    if (req.accessLevel === 'gated') {
      return res.status(402).json({
        error: 'Access gated',
        gateReason: req.gateReason,
        message: req.gateReason === 'score_report_pending'
          ? 'Your score report is under review. Access will be restored within 1 business day.'
          : 'Your 6-month access period has ended. Submit your score report to continue.',
      });
    }

    const item = await ContentItem.findOne({
      externalId: req.params.externalId,
      status: 'published',
    });
    if (!item) return res.status(404).json({ error: 'Case not found' });

    // Free users: enforce case limit
    if (req.accessLevel === 'free') {
      const freeCases = await ContentItem.find({ status: 'published' })
        .select('externalId')
        .sort({ category: 1, externalId: 1 })
        .limit(FREE_CASE_LIMIT);
      const freeIds = freeCases.map(c => c.externalId);
      if (!freeIds.includes(req.params.externalId)) {
        return res.status(402).json({
          error: 'Free limit reached',
          gateReason: 'upgrade_required',
          message: `Free access includes ${FREE_CASE_LIMIT} cases. Upgrade to unlock all 270+.`,
        });
      }
    }

    return res.json({ item });
  } catch (err) {
    console.error('get content error', err);
    return res.status(500).json({ error: 'Could not load that case' });
  }
});

module.exports = router;
