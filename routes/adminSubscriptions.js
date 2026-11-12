const express = require('express');
const User = require('../models/User');
const Attempt = require('../models/Attempt');
const AppleTransaction = require('../models/AppleTransaction');
const adminOrAdminUser = require('../middleware/adminOrAdminUser');
const { logActivity } = require('../utils/activity');
const { trialEndFor } = require('../utils/trial');
const { nceTrialEnd } = require('../utils/nceAccess');
const { appleSandboxUserIds } = require('../utils/appleSandbox');

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

const TIER_PRICES = { monthly: 29, pass3: 79, pass6: 119, guarantee: 249 }; // USD, matches TIERS config in payment.js
// NCE plans live on User.nceAccess, billed separately from NCMHCE (payment.js).
const NCE_TIER_PRICES = { nce_monthly: 24.99, nce_pass3: 59.99, nce_pass6: 89, nce_guarantee: null };

// A paid plan on each product line. NCMHCE is User.subscription, NCE is
// User.nceAccess. Same rule as the paywalls: any tier but 'free' is paid.
const PAID_NCMHCE = { 'subscription.tier': { $nin: ['free', null] } };
const PAID_NCE = { 'nceAccess.tier': { $nin: ['free', null] } };

// Adds effectiveStatus (NCMHCE), nceStatus and products (paid lines) to a user.
function withPlanStatus(u, now = new Date()) {
  const tier = u.subscription && u.subscription.tier;
  const status = u.subscription && u.subscription.status;
  let effectiveStatus;
  if (tier && tier !== 'free') {
    effectiveStatus = status || 'active';
  } else if (!u.trialStartedAt && !u.isGuest) {
    // The standard trial only starts on the first case, so "never opened a
    // case" is its own state rather than an active or expired trial.
    effectiveStatus = 'not started';
  } else {
    effectiveStatus = trialEndFor(u) > now ? 'trial' : 'expired';
  }
  // NCE trial only starts on the first NCE visit, so "never opened NCE"
  // is its own state rather than an expired trial.
  const nce = u.nceAccess || {};
  let nceStatus;
  if (nce.tier && nce.tier !== 'free') nceStatus = nce.status || 'active';
  else if (!nce.trialStartedAt) nceStatus = 'none';
  else nceStatus = nceTrialEnd(u) > now ? 'trial' : 'expired';

  const products = [];
  if (tier && tier !== 'free') products.push('NCMHCE');
  if (nce.tier && nce.tier !== 'free') products.push('NCE');
  return Object.assign({}, u, { effectiveStatus, nceStatus, products });
}

// GET /api/admin-subscriptions?q=&product=&tier=&status=&limit=50
// product: ncmhce | nce | both (paid on that line). tier/status read the NCE
// plan for an nce_* tier (or product=nce with no tier), else the NCMHCE plan.
router.get('/', async (req, res) => {
  try {
    const { q, tier, status, product } = req.query;
    const filter = {};
    if (q) filter.email = { $regex: q, $options: 'i' };
    if (product === 'ncmhce') Object.assign(filter, PAID_NCMHCE);
    if (product === 'nce') Object.assign(filter, PAID_NCE);
    if (product === 'both') filter.$and = [PAID_NCMHCE, PAID_NCE];
    const plan = (tier ? /^nce_/.test(tier) : product === 'nce') ? 'nceAccess' : 'subscription';
    if (tier) filter[plan + '.tier'] = tier;
    if (status) filter[plan + '.status'] = status;
    const limit = Math.min(parseInt(req.query.limit, 10) || 50, 200);

    const users = await User.find(filter)
      .select('email name isGuest subscription nceAccess guidePurchasedAt guideNcePurchasedAt createdAt trialStartedAt trialEndsAt')
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    const now = new Date();
    const tests = new Set((await appleSandboxUserIds()).map(String));
    const usersWithStatus = users.map(u => Object.assign(withPlanStatus(u, now), { appleSandbox: tests.has(String(u._id)) }));
    res.json({ users: usersWithStatus, count: usersWithStatus.length });
  } catch (err) {
    console.error('admin-subscriptions list error', err);
    res.status(500).json({ error: 'Could not load subscribers' });
  }
});

// GET /api/admin-subscriptions/revenue — MRR + paid counts + last-30d gross.
// Only REAL, CURRENT, PAYING plans count. A plan is left out when it is:
//   - on an admin/owner account (role 'admin')
//   - a comp/tester plan with no billing behind it (no Stripe subscription or
//     payment, no App Store transaction)
//   - an App Store Sandbox purchase (only 'Production' transactions count)
//   - past its currentPeriodEnd (expired, even if status still says 'active')
// Last-30d gross counts live-mode Stripe charges only, net of refunds, and
// skips charges on admin accounts' Stripe customers.
router.get('/revenue', async (req, res) => {
  try {
    const now = new Date();
    const users = await User.find({ $or: [PAID_NCMHCE, PAID_NCE, { 'subscription.status': 'past_due' }, { 'nceAccess.status': 'past_due' }] })
      .select('role subscription nceAccess guidePurchasedAt guideNcePurchasedAt')
      .lean();

    // App Store purchases that were made in Production (not Sandbox/TestFlight).
    const appleIds = [];
    for (const u of users) {
      for (const p of [u.subscription, u.nceAccess]) {
        if (p && p.source === 'apple' && p.appleOriginalTransactionId) appleIds.push(p.appleOriginalTransactionId);
      }
    }
    const prodApple = new Set(
      appleIds.length
        ? await AppleTransaction.distinct('originalTransactionId', { originalTransactionId: { $in: appleIds }, environment: 'Production' })
        : []
    );

    // Is there real billing behind this plan?
    const isBilled = (p) => {
      if (!p || !p.tier || p.tier === 'free') return false;
      if (p.source === 'apple') return prodApple.has(p.appleOriginalTransactionId);
      return !!(p.stripeSubscriptionId || p.lastPaymentIntentId);
    };
    // Still inside the paid period?
    const isCurrent = (p) => !p.currentPeriodEnd || new Date(p.currentPeriodEnd) > now;
    const realPaid = (u, p) => u.role !== 'admin' && isBilled(p) && isCurrent(p);

    const ncmhce = users.filter(u => realPaid(u, u.subscription));
    const nce = users.filter(u => realPaid(u, u.nceAccess));
    const ncmhceIds = new Set(ncmhce.map(u => String(u._id)));
    const bothPaid = nce.filter(u => ncmhceIds.has(String(u._id))).length;

    const activeMonthly = ncmhce.filter(u => u.subscription.tier === 'monthly' && u.subscription.status === 'active').length;
    const activeNceMonthly = nce.filter(u => u.nceAccess.tier === 'nce_monthly' && u.nceAccess.status === 'active').length;
    const pastDue = users.filter(u => u.role !== 'admin' && (
      (u.subscription && u.subscription.status === 'past_due' && isBilled(u.subscription)) ||
      (u.nceAccess && u.nceAccess.status === 'past_due' && isBilled(u.nceAccess))
    )).length;

    const byTier = {};
    for (const t of Object.keys(TIER_PRICES)) {
      byTier[t] = ncmhce.filter(u => u.subscription.tier === t && ['active', 'canceled'].includes(u.subscription.status)).length;
    }
    const nceByTier = {};
    for (const t of Object.keys(NCE_TIER_PRICES)) {
      nceByTier[t] = nce.filter(u => u.nceAccess.tier === t && ['active', 'canceled'].includes(u.nceAccess.status)).length;
    }

    const ncmhceMrr = activeMonthly * TIER_PRICES.monthly;
    const nceMrr = Math.round(activeNceMonthly * NCE_TIER_PRICES.nce_monthly * 100) / 100;
    const mrrEstimate = Math.round((ncmhceMrr + nceMrr) * 100) / 100;

    // Guide sales and NCE trials are not billing-plan counts; admin accounts
    // and Apple sandbox test accounts (utils/appleSandbox.js) excluded.
    const testIds = await appleSandboxUserIds();
    const [ncmhceGuides, nceGuides, nceTrialsStarted] = await Promise.all([
      User.countDocuments({ role: { $ne: 'admin' }, _id: { $nin: testIds }, guidePurchasedAt: { $ne: null } }),
      User.countDocuments({ role: { $ne: 'admin' }, _id: { $nin: testIds }, guideNcePurchasedAt: { $ne: null } }),
      User.countDocuments({ role: { $ne: 'admin' }, 'nceAccess.trialStartedAt': { $ne: null } }),
    ]);
    const byProduct = {
      ncmhce: { paid: ncmhce.length, onlyThis: ncmhce.length - bothPaid, byTier, mrr: ncmhceMrr, guides: ncmhceGuides },
      nce: { paid: nce.length, onlyThis: nce.length - bothPaid, byTier: nceByTier, mrr: nceMrr, guides: nceGuides, trialsStarted: nceTrialsStarted },
      both: bothPaid,
    };

    let last30dGross = null;
    try {
      const stripe = getStripe();
      const admins = await User.find({ role: 'admin' }).select('subscription.stripeCustomerId').lean();
      const adminCustomers = new Set(admins.map(a => a.subscription && a.subscription.stripeCustomerId).filter(Boolean));
      const since = Math.floor((Date.now() - 30 * 24 * 60 * 60 * 1000) / 1000);
      const charges = await stripe.charges.list({ created: { gte: since }, limit: 100 }).autoPagingToArray({ limit: 1000 });
      last30dGross = charges
        .filter(c => c.livemode && c.paid && c.status === 'succeeded' && !adminCustomers.has(c.customer))
        .reduce((sum, c) => sum + (c.amount - (c.amount_refunded || 0)), 0) / 100;
    } catch (e) {
      console.error('revenue: stripe charges list failed', e.message);
    }

    res.json({ mrrEstimate, activeMonthlyCount: activeMonthly + activeNceMonthly, pastDueCount: pastDue, byTier, byProduct, last30dGross, appleSandboxTests: testIds.length });
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
    const appleSandbox = (await appleSandboxUserIds()).some((id) => String(id) === String(user._id));
    res.json({ user: Object.assign(withPlanStatus(user), { appleSandbox }), attemptCount });
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

// PUT /api/admin-subscriptions/:userId/trial — grant this one account a longer
// free trial than the standard TRIAL_DAYS (a review swap, a comp, a support
// gesture). Body: { days, note } — days counts from NOW, so a 14-day grant on
// day 30 gives a full 14 days, not 14 from signup. Send days: 0 or null to
// clear the grant and drop the account back to the standard trial.
router.put('/:userId/trial', async (req, res) => {
  try {
    const { days, note } = req.body || {};

    let trialEndsAt = null;
    if (days !== null && days !== undefined && days !== 0 && days !== '0') {
      const n = Number(days);
      if (!Number.isFinite(n) || n <= 0 || n > 365) {
        return res.status(400).json({ error: 'days must be a number between 1 and 365, or 0 to clear' });
      }
      trialEndsAt = new Date(Date.now() + n * 24 * 60 * 60 * 1000);
    }

    const update = { trialEndsAt };
    if (typeof note === 'string') update.trialNote = note.trim().slice(0, 300);
    if (!trialEndsAt) update.trialNote = '';
    // A newly granted/extended trial should be able to earn its own reminder
    // emails rather than being silently skipped as "already sent" from the
    // account's original trial window (see jobs/trialReminders.js).
    update.trialEmailsSent = [];

    const user = await User.findByIdAndUpdate(req.params.userId, update, { new: true })
      .select('email trialEndsAt trialNote');
    if (!user) return res.status(404).json({ error: 'User not found' });

    logActivity({
      type: trialEndsAt ? 'admin.trial_granted' : 'admin.trial_cleared',
      severity: 'info',
      userId: user._id,
      email: user.email,
      message: trialEndsAt
        ? `Admin granted a ${days}-day trial (until ${trialEndsAt.toISOString().slice(0, 10)})`
        : 'Admin cleared the granted trial',
      meta: { days: trialEndsAt ? Number(days) : 0, note: user.trialNote || '' },
      req,
    });
    res.json({ ok: true, user });
  } catch (err) {
    console.error('admin-subscriptions trial update error', err);
    res.status(500).json({ error: 'Could not update the trial' });
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

// POST /api/admin-subscriptions/:userId/reset-password — set a new password
// for an account directly, for the support case where the emailed reset link
// never arrives (spam filter, dead mailbox, typo'd address). Bumps
// sessionVersion so every existing session is signed out, and clears any
// outstanding reset-link token so an old email can't be replayed afterwards.
// Body: { password }
router.post('/:userId/reset-password', async (req, res) => {
  try {
    const bcrypt = require('bcryptjs');
    const { password } = req.body || {};
    if (!password) return res.status(400).json({ error: 'A new password is required' });
    if (password.length < 8) return res.status(400).json({ error: 'Password must be at least 8 characters' });

    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.passwordHash = await bcrypt.hash(password, 12);
    user.resetPasswordTokenHash = undefined;
    user.resetPasswordExpires = undefined;
    user.sessionVersion = (user.sessionVersion || 0) + 1; // sign out every device
    await user.save();

    logActivity({ type: 'admin.password_reset', severity: 'warn', userId: user._id, email: user.email, message: 'Admin set a new password for this account', req });
    res.json({ ok: true, email: user.email });
  } catch (err) {
    console.error('admin-subscriptions reset-password error', err);
    res.status(500).json({ error: 'Could not reset the password' });
  }
});

module.exports = router;
