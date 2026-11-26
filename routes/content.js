const express = require('express');
const ContentItem = require('../models/ContentItem');
const Exam = require('../models/Exam');
const User = require('../models/User');
const { TRIAL_DAYS, trialEndFor, trialLevel } = require('../utils/trial');
const { BOOK_CASE_IDS } = require('./book');
const { examKeyFor, outlineFor } = require('../utils/examVersion');
const { isForfeited } = require('../utils/guaranteeRules');
const { accessFor } = require('../utils/access');

const router = express.Router();

const FREE_CASE_LIMIT = 5;

// Middleware: resolves subscription tier and attaches req.accessLevel.
// 'free'    — no token (anonymous visitor): 5-case teaser
// 'trial'   — registered account on a running trial: a Stripe free trial
//             started in checkout with a card (req.cardTrial), a legacy
//             no-card trial, or an admin grant. Full access.
// 'expired' — registered account with no running trial and no active paid
//             tier, including a new account that has not started its trial
//             yet (req.trialEligible says it may): 5-case teaser
// 'paid'    — active monthly, pass3, pass6 or guarantee with valid access
// 'gated'   — guarantee tier past 6 months, score report not yet approved
async function resolveAccess(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) { req.accessLevel = 'free'; return next(); }

  try {
    const jwt = require('jsonwebtoken');
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.sub;

    const user = await User.findById(req.userId).select('subscription createdAt isGuest trialStartedAt trialEndsAt sessionVersion bookAccess.status examDate');
    if (!user) { req.accessLevel = 'free'; return next(); }

    req.bookAccess = user.bookAccess?.status || 'none';
    req.examDate = user.examDate || null;

    // Session-version gate: if another device logged in since this token
    // was issued, the sv in the JWT won't match the DB — reject the stale session.
    if (user.sessionVersion != null && user.sessionVersion !== payload.sv) {
      return res.status(401).json({
        error: 'Session invalidated — your account was signed in on another device. Please sign in again.',
        code: 'SESSION_INVALIDATED',
      });
    }

    // The access rule itself lives in utils/access.js, shared with the
    // background jobs that need the same answer without a request.
    const a = accessFor(user, new Date());
    req.accessLevel = a.accessLevel;
    if (a.gateReason) req.gateReason = a.gateReason;
    req.trialEndsAt = a.trialEndsAt || undefined;
    req.cardTrial = !!a.cardTrial;
    req.trialEligible = !!a.trialEligible;
    req.subscriptionTier = a.subscriptionTier;
    next();
  } catch (err) {
    req.accessLevel = 'free';
    next();
  }
}

// GET /api/content/access — the caller's NCMHCE access level, with no content.
// The static study-tool pages check it through public/tool-gate.js, so they
// follow the same trial / subscription rules as the case paywall. Registered
// before /:externalId so "access" is never read as a case id.
router.get('/access', resolveAccess, (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({
    accessLevel: req.accessLevel,
    tier: req.subscriptionTier || 'free',
    trialEndsAt: req.trialEndsAt || null,
    cardTrial: !!req.cardTrial,
    // A signed-in account with no trial behind it may start the card-up-front
    // free trial from the plan picker (one per account, utils/access.js).
    trialEligible: !!req.trialEligible,
    gateReason: req.gateReason || null,
  });
});

// GET /api/content?exam=ncmhce — list published cases
router.get('/', resolveAccess, async (req, res) => {
  try {
    const filter = { status: 'published' };
    let servedKey = null;
    let outlineFallback = false;

    if (req.query.exam) {
      if (req.query.exam === 'ncmhce') {
        const resolvedKey = examKeyFor(req.examDate || null);
        servedKey = resolvedKey;

        let exam = await Exam.findOne({ key: resolvedKey });

        if (resolvedKey === 'ncmhce-2027') {
          let zeroItems = false;
          if (exam) {
            const itemCount = await ContentItem.countDocuments({ examId: exam._id, status: 'published' });
            if (itemCount === 0) zeroItems = true;
          }
          if (!exam || zeroItems) {
            exam = await Exam.findOne({ key: 'ncmhce' });
            servedKey = 'ncmhce';
            outlineFallback = true;
          }
        }

        if (!exam) return res.json({ count: 0, items: [], accessLevel: req.accessLevel, outline: outlineFor(servedKey || 'ncmhce'), outlineFallback });
        filter.examId = exam._id;
      } else {
        const exam = await Exam.findOne({ key: req.query.exam });
        if (!exam) return res.json({ count: 0, items: [], accessLevel: req.accessLevel, outline: null, outlineFallback: false });
        filter.examId = exam._id;
      }
    }

    const items = await ContentItem.find(filter)
      .select('externalId title category difficulty format population')
      .sort({ category: 1, externalId: 1 });

    const teaser = ['free', 'expired'].includes(req.accessLevel);
    const limited = teaser ? items.slice(0, FREE_CASE_LIMIT) : items;
    return res.json({
      count: limited.length,
      total: items.length,
      items: limited,
      accessLevel: req.accessLevel,
      tier: req.subscriptionTier || 'free',
      freeLimit: FREE_CASE_LIMIT,
      trialDays: TRIAL_DAYS,
      // The end of THIS account's trial: the day a Stripe trial bills the
      // card, or an admin-granted extension.
      trialEndsAt: req.trialEndsAt || null,
      // True while the trial is a Stripe subscription with a card on file
      // (the plan is already chosen; the page offers to manage it, not to
      // pick one).
      cardTrial: !!req.cardTrial,
      // True for a signed-in account that may start the card-up-front free
      // trial from the plan picker (utils/access.js cardTrialEligible).
      trialEligible: !!req.trialEligible,
      outline: outlineFor(servedKey || req.query.exam || 'ncmhce'),
      outlineFallback,
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
          : req.gateReason === 'guarantee_forfeited'
          ? 'Your Pass Guarantee was forfeited: no new request was made within 90 days of your last exam. Pick a plan to keep studying.'
          : 'Your access period has ended. Upload your exam appointment or score letter to continue.',
      });
    }

    // Trial over and no paid plan → paywall, unless this is one of the 4
    // book-bonus cases and an admin has approved this account's purchase
    // receipt (see routes/book.js) — those stay accessible permanently.
    const bookCaseUnlocked = req.bookAccess === 'approved' && BOOK_CASE_IDS.includes(req.params.externalId);
    if (req.accessLevel === 'expired' && !bookCaseUnlocked) {
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
          message: `Free access includes ${FREE_CASE_LIMIT} cases. Create an account and start a ${TRIAL_DAYS}-day free trial of all 290+.`,
        });
      }
    }

    return res.json({ item });
  } catch (err) {
    console.error('get content error', err);
    return res.status(500).json({ error: 'Could not load that case' });
  }
});

// Shared with routes that apply the same NCMHCE trial/subscription rule.
router.resolveAccess = resolveAccess;

module.exports = router;
