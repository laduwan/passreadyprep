const express = require('express');
const ContentItem = require('../models/ContentItem');
const Exam = require('../models/Exam');
const User = require('../models/User');

const router = express.Router();

const FREE_CASE_LIMIT = 5;
const TRIAL_DAYS = 3;

// Middleware: resolves subscription tier and attaches req.accessLevel.
// 'free'    — no token (anonymous visitor): 5-case teaser
// 'trial'   — registered account within TRIAL_DAYS of signup: full access
// 'expired' — registered account past the trial with no active paid tier
// 'paid'    — active monthly, pass3, or guarantee with valid access
// 'gated'   — guarantee tier past 6 months, score report not yet approved
async function resolveAccess(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) { req.accessLevel = 'free'; return next(); }

  try {
    const jwt = require('jsonwebtoken');
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.sub;

    const user = await User.findById(req.userId).select('subscription createdAt');
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

    // Monthly / pass3: if expired, fall back to the trial clock (long past → 'expired')
    if (['monthly', 'pass3'].includes(tier) && expired) {
      req.accessLevel = trialLevel(user);
      return next();
    }

    req.accessLevel = tier === 'free' ? trialLevel(user) : 'paid';
    next();
  } catch (err) {
    req.accessLevel = 'free';
    next();
  }
}

// Registered accounts get full access for TRIAL_DAYS from signup, then hit the paywall.
function trialLevel(user) {
  const created = user.createdAt ? new Date(user.createdAt) : new Date(0);
  const trialEnd = new Date(created.getTime() + TRIAL_DAYS * 24 * 60 * 60 * 1000);
  return trialEnd > new Date() ? 'trial' : 'expired';
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

    const teaser = ['free', 'expired'].includes(req.accessLevel);
    const limited = teaser ? items.slice(0, FREE_CASE_LIMIT) : items;
    return res.json({
      count: limited.length,
      total: items.length,
      items: limited,
      accessLevel: req.accessLevel,
      freeLimit: FREE_CASE_LIMIT,
      trialDays: TRIAL_DAYS,
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

    // Trial over and no paid plan → paywall
    if (req.accessLevel === 'expired') {
      return res.status(402).json({
        error: 'Trial ended',
        gateReason: 'trial_expired',
        message: `Your ${TRIAL_DAYS}-day free trial has ended. Pick a plan to keep studying.`,
      });
    }

    const item = await ContentItem.findOne({
      externalId: req.params.externalId,
      status: 'published',
    });
    if (!item) return res.status(404).json({ error: 'Case not found' });

    // Anonymous visitors: enforce the teaser case limit
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
          message: `Free access includes ${FREE_CASE_LIMIT} cases. Create an account for a ${TRIAL_DAYS}-day trial of all 270+.`,
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
