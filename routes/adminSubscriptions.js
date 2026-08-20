const express = require('express');
const User = require('../models/User');
const Attempt = require('../models/Attempt');
const adminOrAdminUser = require('../middleware/adminOrAdminUser');
const { logActivity } = require('../utils/activity');

const router = express.Router();
router.use(adminOrAdminUser);

let _stripe = null;
function getStripe() {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) throw new Error('Stripe not configured');
    const Stripe = require('stripe');
    _stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  }
  return _stripe;
}

const TIER_PRICES = { monthly: 29, pass3: 79, guarantee: 149 }; // USD, matches TIERS config in payment.js

// GET /api/admin-subscriptions?q=&tier=&status=&limit=50
router.get('/', async (req, res) => {
  try {
    const { q, tier, status } = req.query;
    const filter = {};
    if (q) filter.email = { $regex: q, $options: 'i' };
    if (tier) filter['subscription.tier'] = tier;
    if (status) filter['subscription.status'] = status;
    const limit = Math.min(parseInt(req.query.limit, 10) || 50, 200);

    const users = await User.find(filter)
      .select('email name subscription createdAt')
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    res.json({ users, count: users.length });
  } catch (err) {
    console.error('admin-subscriptions list error', err);
    res.status(500).json({ error: 'Could not load subscribers' });
  }
});

// GET /api/admin-subscriptions/revenue — MRR estimate + last-30d gross from Stripe
router.get('/revenue', async (req, res) => {
  try {
    const activeMonthly = await User.countDocuments({ 'subscription.tier': 'monthly', 'subscription.status': 'active' });
    const pastDue = await User.countDocuments({ 'subscription.status': 'past_due' });
    const byTier = {};
    for (const t of Object.keys(TIER_PRICES)) {
      byTier[t] = await User.countDocuments({ 'subscription.tier': t, 'subscription.status': { $in: ['active', 'canceled'] } });
    }
    const mrrEstimate = activeMonthly * TIER_PRICES.monthly;

    let last30dGross = null;
    try {
      const stripe = getStripe();
      const since = Math.floor((Date.now() - 30 * 24 * 60 * 60 * 1000) / 1000);
      const charges = await stripe.charges.list({ created: { gte: since }, limit: 100 });
      last30dGross = charges.data
        .filter(c => c.paid && !c.refunded)
        .reduce((sum, c) => sum + c.amount, 0) / 100;
    } catch (e) {
      console.error('revenue: stripe charges list failed', e.message);
    }

    res.json({ mrrEstimate, activeMonthlyCount: activeMonthly, pastDueCount: pastDue, byTier, last30dGross });
  } catch (err) {
    console.error('admin-subscriptions revenue error', err);
    res.status(500).json({ error: 'Could not compute revenue' });
  }
});

// GET /api/admin-subscriptions/:userId — full detail
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select('-passwordHash').lean();
    if (!user) return res.status(404).json({ error: 'User not found' });
    const attemptCount = await Attempt.countDocuments({ userId: user._id });
    res.json({ user, attemptCount });
  } catch (err) {
    console.error('admin-subscriptions detail error', err);
    res.status(500).json({ error: 'Could not load subscriber' });
  }
});

// PUT /api/admin-subscriptions/:userId/tier — manual comp/override, no Stripe call
// Body: { tier, status, currentPeriodEnd (optional ISO date or null for never-expires) }
router.put('/:userId/tier', async (req, res) => {
  try {
    const { tier, status, currentPeriodEnd } = req.body || {};
    if (!tier) return res.status(400).json({ error: 'tier is required' });

    const update = { 'subscription.tier': tier };
    if (status) update['subscription.status'] = status;
    if (currentPeriodEnd !== undefined) {
      update['subscription.currentPeriodEnd'] = currentPeriodEnd ? new Date(currentPeriodEnd) : null;
    }

    const user = await User.findByIdAndUpdate(req.params.userId, update, { new: true }).select('email subscription');
    if (!user) return res.status(404).json({ error: 'User not found' });

    logActivity({ type: 'admin.tier_changed', severity: 'info', userId: user._id, email: user.email, message: `Admin manually set tier to ${tier}`, meta: { tier, status, currentPeriodEnd }, req });
    res.json({ ok: true, user });
  } catch (err) {
    console.error('admin-subscriptions tier update error', err);
    res.status(500).json({ error: 'Could not update tier' });
  }
});

// POST /api/admin-subscriptions/:userId/cancel — cancels the Stripe subscription
// Body: { immediate: boolean } — default false (cancels at period end)
router.post('/:userId/cancel', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const stripe = getStripe();
    let subId = user.subscription.stripeSubscriptionId;

    // Fallback for subscriptions created before this field existed —
    // look it up live by customer ID instead of requiring a data migration.
    if (!subId && user.subscription.stripeCustomerId) {
      const subs = await stripe.subscriptions.list({ customer: user.subscription.stripeCustomerId, status: 'active', limit: 1 });
      if (subs.data[0]) subId = subs.data[0].id;
    }
    if (!subId) return res.status(400).json({ error: 'No active Stripe subscription found for this user' });

    const immediate = !!req.body?.immediate;
    if (immediate) {
      await stripe.subscriptions.cancel(subId);
      user.subscription.status = 'canceled';
    } else {
      await stripe.subscriptions.update(subId, { cancel_at_period_end: true });
    }
    await user.save();

    logActivity({ type: 'admin.subscription_canceled', severity: 'info', userId: user._id, email: user.email, message: `Admin canceled subscription (${immediate ? 'immediate' : 'at period end'})`, req });
    res.json({ ok: true, immediate });
  } catch (err) {
    console.error('admin-subscriptions cancel error', err);
    res.status(500).json({ error: 'Could not cancel subscription' });
  }
});

// POST /api/admin-subscriptions/:userId/refund — refunds the latest charge
// Body: { amount (optional, in dollars — omit for full refund), reason (optional) }
router.post('/:userId/refund', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const stripe = getStripe();
    let paymentIntentId = user.subscription.lastPaymentIntentId;

    // Fallback for purchases made before this field existed — find the
    // most recent charge for this customer directly from Stripe.
    let chargeId = null;
    if (paymentIntentId) {
      const pi = await stripe.paymentIntents.retrieve(paymentIntentId);
      chargeId = pi.latest_charge;
    } else if (user.subscription.stripeCustomerId) {
      const charges = await stripe.charges.list({ customer: user.subscription.stripeCustomerId, limit: 1 });
      if (charges.data[0]) chargeId = charges.data[0].id;
    }
    if (!chargeId) return res.status(400).json({ error: 'No charge found to refund for this user' });

    const refundParams = { charge: chargeId };
    if (req.body?.amount) refundParams.amount = Math.round(Number(req.body.amount) * 100);
    if (req.body?.reason) refundParams.reason = 'requested_by_customer';

    const refund = await stripe.refunds.create(refundParams);

    logActivity({ type: 'admin.refund_issued', severity: 'warn', userId: user._id, email: user.email, message: `Admin issued refund`, meta: { amount: refund.amount / 100, refundId: refund.id }, req });
    res.json({ ok: true, refund: { id: refund.id, amount: refund.amount / 100, status: refund.status } });
  } catch (err) {
    console.error('admin-subscriptions refund error', err);
    res.status(500).json({ error: 'Could not process refund' });
  }
});

// POST /api/admin-subscriptions/ — manually create an account (comp signup,
// support-created account, etc). Body: { email, name, password, tier }
router.post('/', async (req, res) => {
  try {
    const bcrypt = require('bcryptjs');
    const { email, name, password, tier } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: 'email and password are required' });
    if (password.length < 8) return res.status(400).json({ error: 'Password must be at least 8 characters' });

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) return res.status(409).json({ error: 'An account with that email already exists' });

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({
      email, passwordHash, name,
      termsAcceptedAt: new Date(),
      termsVersion: 'admin-created',
      'subscription.tier': tier || 'free',
    });

    logActivity({ type: 'admin.user_created', severity: 'info', userId: user._id, email: user.email, message: 'Admin manually created account', req });
    res.status(201).json({ ok: true, user: { id: user._id, email: user.email, name: user.name, subscription: user.subscription } });
  } catch (err) {
    console.error('admin-subscriptions create error', err);
    res.status(500).json({ error: 'Could not create account' });
  }
});

// DELETE /api/admin-subscriptions/:userId — permanently delete an account
// and their study data. Does NOT touch ActivityEvent (kept as an audit
// trail even after account deletion) or cancel any live Stripe
// subscription first — caller should cancel via /:userId/cancel first if
// the subscription is still active.
router.delete('/:userId', async (req, res) => {
  try {
    const Attempt = require('../models/Attempt');
    const StudyActivity = require('../models/StudyActivity');

    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const email = user.email;
    await Attempt.deleteMany({ userId: user._id });
    await StudyActivity.deleteMany({ userId: user._id });
    await User.findByIdAndDelete(user._id);

    logActivity({ type: 'admin.user_deleted', severity: 'warn', email, message: `Admin deleted account ${email}`, req });
    res.json({ ok: true });
  } catch (err) {
    console.error('admin-subscriptions delete error', err);
    res.status(500).json({ error: 'Could not delete account' });
  }
});

// POST /api/admin-subscriptions/:userId/reset-progress — clears server-side
// study history (case attempts, study-time/streak data) but leaves the
// account, login, and subscription/billing untouched. NOTE: flashcard
// spaced-repetition state and the readiness-history ring live in the
// learner's own browser localStorage — this endpoint cannot reach those.
router.post('/:userId/reset-progress', async (req, res) => {
  try {
    const Attempt = require('../models/Attempt');
    const StudyActivity = require('../models/StudyActivity');

    const user = await User.findById(req.params.userId).select('email');
    if (!user) return res.status(404).json({ error: 'User not found' });

    const attemptResult = await Attempt.deleteMany({ userId: user._id });
    const activityResult = await StudyActivity.deleteMany({ userId: user._id });

    logActivity({ type: 'admin.progress_reset', severity: 'info', userId: user._id, email: user.email, message: 'Admin reset study progress', meta: { attemptsDeleted: attemptResult.deletedCount, studyDaysDeleted: activityResult.deletedCount }, req });
    res.json({ ok: true, attemptsDeleted: attemptResult.deletedCount, studyDaysDeleted: activityResult.deletedCount });
  } catch (err) {
    console.error('admin-subscriptions reset-progress error', err);
    res.status(500).json({ error: 'Could not reset progress' });
  }
});

module.exports = router;
