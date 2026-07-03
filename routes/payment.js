/**
 * routes/payment.js
 *
 * Stripe payment integration for PassReady Prep.
 * Handles checkout session creation and webhook processing.
 *
 * Tiers:
 *   free       — default, no payment required
 *   monthly    — $29/mo recurring (Stripe subscription)
 *   pass3      — $79 one-time, 3 months access
 *   guarantee  — $149 one-time, access until passing
 *
 * ENV vars required (add to .env and Render dashboard):
 *   STRIPE_SECRET_KEY       — sk_live_xxx  (or sk_test_xxx for dev)
 *   STRIPE_WEBHOOK_SECRET   — whsec_xxx  (from Stripe dashboard → Webhooks)
 *   STRIPE_PRICE_MONTHLY    — price_xxx  (monthly $29 recurring price ID)
 *   STRIPE_PRICE_PASS3      — price_xxx  (3-month $79 one-time price ID)
 *   STRIPE_PRICE_GUARANTEE  — price_xxx  ($149 one-time price ID)
 *   CLIENT_URL              — https://passreadyprep-server.onrender.com (no trailing slash)
 */

const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const User = require('../models/User');
const requireAuth = require('../middleware/auth');

// Lazy init: construct the Stripe client on first use, not at module load.
// Building it at require-time meant a missing STRIPE_SECRET_KEY crashed the
// ENTIRE server at boot — taking down study, login, and progress with it.
// Now only an actual payment call fails (cleanly) when the key is unset.
let _stripe = null;
function getStripe(){
  if(!_stripe){
    if(!process.env.STRIPE_SECRET_KEY){
      throw new Error('Stripe is not configured (STRIPE_SECRET_KEY missing).');
    }
    _stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  }
  return _stripe;
}

// ── Tier config ──────────────────────────────────────────────────────────────
// Maps the tier name the frontend sends to the Stripe price ID and access rules.
const TIERS = {
  monthly: {
    priceId: () => process.env.STRIPE_PRICE_MONTHLY,
    mode: 'subscription',
    tierName: 'monthly',
    // access expires when Stripe says subscription ends
  },
  pass3: {
    priceId: () => process.env.STRIPE_PRICE_PASS3,
    mode: 'payment',
    tierName: 'pass3',
    accessDays: 90, // 3 months from purchase
  },
  guarantee: {
    priceId: () => process.env.STRIPE_PRICE_GUARANTEE,
    mode: 'payment',
    tierName: 'guarantee',
    // Access is unlimited — no re-payment ever.
    // After 6 months the account requires a candidate verification checkpoint:
    // they submit an exam date (scheduled) or a score report (taken).
    // This isn't a payment gate — it's proof that one real person is using
    // one account to prepare for one NCMHCE. Extensions are free and unlimited.
    accessDays: 180,
  },
  guide: {
    priceId: () => process.env.STRIPE_PRICE_GUIDE,
    mode: 'payment',
    tierName: 'guide',
    entitlementOnly: true, // one-time PRODUCT (the study guide), NOT an access tier.
  },
};

// ── POST /api/payment/create-checkout-session ─────────────────────────────────
// Creates a Stripe Checkout session and returns the URL to redirect to.
// The frontend redirects the browser; no payment details ever touch your server.
router.post('/create-checkout-session', requireAuth, async (req, res) => {
  try {
    const { tier, guaranteeTermsAccepted } = req.body;

    if (!TIERS[tier]) {
      return res.status(400).json({ error: 'Invalid tier' });
    }

    // Pass Guarantee requires explicit acknowledgment of the check-in terms
    if (tier === 'guarantee' && !guaranteeTermsAccepted) {
      return res.status(400).json({
        error: 'You must acknowledge the Pass Guarantee candidate verification terms to proceed',
        code: 'GUARANTEE_TERMS_REQUIRED',
      });
    }

    const tierConfig = TIERS[tier];
    const priceId = tierConfig.priceId();

    if (!priceId) {
      return res.status(500).json({ error: `Price ID for tier "${tier}" is not configured` });
    }

    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Retrieve or create Stripe customer so we can pre-fill their email
    let customerId = user.subscription?.stripeCustomerId;
    if (!customerId) {
      const customer = await getStripe().customers.create({
        email: user.email,
        name: user.name || undefined,
        metadata: { userId: user._id.toString() },
      });
      customerId = customer.id;
      user.subscription.stripeCustomerId = customerId;
      await user.save();
    }

    // Record guarantee terms acceptance timestamp
    if (tier === 'guarantee' && !user.guaranteeTermsAcceptedAt) {
      await User.findByIdAndUpdate(req.userId, {
        guaranteeTermsAcceptedAt: new Date(),
      });
    }

    const sessionParams = {
      customer: customerId,
      mode: tierConfig.mode,
      line_items: [{ price: priceId, quantity: 1 }],
      // Show a promo-code field at checkout so ebook readers can redeem
      // PASSREADY10 (and any future codes). The coupon + promotion code
      // themselves live in the Stripe dashboard, not in this repo.
      allow_promotion_codes: true,
      success_url: `${process.env.CLIENT_URL}/payment-success.html?tier=${tier}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/landing.html#pricing`,
      metadata: {
        userId: user._id.toString(),
        tier,
      },
    };

    // For subscriptions, attach metadata to the subscription too
    if (tierConfig.mode === 'subscription') {
      sessionParams.subscription_data = {
        metadata: { userId: user._id.toString(), tier },
      };
    }

    // For one-time payments, embed metadata in payment_intent
    if (tierConfig.mode === 'payment') {
      sessionParams.payment_intent_data = {
        metadata: { userId: user._id.toString(), tier },
      };
    }

    // The guide isn't app access — send the buyer back to the guide page,
    // which flips to a download button once the webhook grants the entitlement.
    if (tier === 'guide') {
      sessionParams.success_url = `${process.env.CLIENT_URL}/study-guide.html?purchase=success`;
      sessionParams.cancel_url = `${process.env.CLIENT_URL}/study-guide.html`;
    }

    const session = await getStripe().checkout.sessions.create(sessionParams);
    res.json({ url: session.url });

  } catch (err) {
    console.error('create-checkout-session error:', err);
    res.status(500).json({ error: 'Could not create checkout session' });
  }
});

// ── GET /api/payment/status ───────────────────────────────────────────────────
// Returns the current user's subscription tier and expiry.
// The frontend uses this to show/hide gated content.
router.get('/status', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('subscription');
    if (!user) return res.status(404).json({ error: 'User not found' });

    const sub = user.subscription || {};
    const now = new Date();
    const expired = sub.currentPeriodEnd && sub.currentPeriodEnd < now;

    res.json({
      tier: expired ? 'free' : (sub.tier || 'free'),
      status: sub.status || 'active',
      currentPeriodEnd: sub.currentPeriodEnd || null,
      expired: !!expired,
    });
  } catch (err) {
    console.error('payment status error:', err);
    res.status(500).json({ error: 'Could not retrieve subscription status' });
  }
});

// ── POST /api/payment/webhook ─────────────────────────────────────────────────
// Stripe calls this endpoint when payments complete or subscriptions change.
// CRITICAL: Must use express.raw() body parser (configured in server.js).
// This is where user tiers are actually updated in the database.
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = getStripe().webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {

      // ── One-time payment completed (pass3 or guarantee) ──────────────────
      case 'checkout.session.completed': {
        const session = event.data.object;
        if (session.mode !== 'payment') break; // subscriptions handled below

        const userId = session.metadata?.userId;
        const tier = session.metadata?.tier;
        if (!userId || !tier || !TIERS[tier]) break;

        const tierConfig = TIERS[tier];

        // One-time PRODUCT (e.g. the study guide): grant an entitlement, never a tier.
        if (tierConfig.entitlementOnly) {
          await User.findByIdAndUpdate(userId, {
            guidePurchasedAt: new Date(),
            guideOrderId: session.id,
          });
          console.log(`✓ One-time product: user ${userId} → entitlement "${tier}"`);
          break;
        }

        const accessDays = tierConfig.accessDays;
        const periodEnd = accessDays
          ? new Date(Date.now() + accessDays * 24 * 60 * 60 * 1000)
          : null; // null = never expires (guarantee tier)

        await User.findByIdAndUpdate(userId, {
          'subscription.tier': tier,
          'subscription.status': 'active',
          'subscription.currentPeriodEnd': periodEnd,
        });

        console.log(`✓ One-time payment: user ${userId} → tier "${tier}", expires ${periodEnd || 'never'}`);
        break;
      }

      // ── Monthly subscription activated ────────────────────────────────────
      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const sub = event.data.object;
        const userId = sub.metadata?.userId;
        if (!userId) break;

        await User.findByIdAndUpdate(userId, {
          'subscription.tier': 'monthly',
          'subscription.status': sub.status, // 'active', 'past_due', etc.
          'subscription.currentPeriodEnd': new Date(sub.current_period_end * 1000),
        });

        console.log(`✓ Subscription ${event.type}: user ${userId}, status ${sub.status}`);
        break;
      }

      // ── Monthly subscription cancelled ────────────────────────────────────
      case 'customer.subscription.deleted': {
        const sub = event.data.object;
        const userId = sub.metadata?.userId;
        if (!userId) break;

        // Don't immediately drop to free — let them use through period end
        await User.findByIdAndUpdate(userId, {
          'subscription.status': 'canceled',
          'subscription.currentPeriodEnd': new Date(sub.current_period_end * 1000),
        });

        console.log(`✓ Subscription cancelled: user ${userId}`);
        break;
      }

      // ── Payment failed (monthly) ──────────────────────────────────────────
      case 'invoice.payment_failed': {
        const invoice = event.data.object;
        const customerId = invoice.customer;
        const user = await User.findOne({ 'subscription.stripeCustomerId': customerId });
        if (!user) break;

        await User.findByIdAndUpdate(user._id, {
          'subscription.status': 'past_due',
        });

        console.log(`✓ Payment failed: user ${user._id}`);
        break;
      }

      default:
        // Unhandled event — safe to ignore
        break;
    }

    res.json({ received: true });

  } catch (err) {
    console.error('Webhook handler error:', err);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// ── POST /api/payment/score-report ───────────────────────────────────────────
// User submits their score report after sitting the exam.
// Puts the guarantee gate into 'pending' state for admin review.
// Accepts: { examDate, result: 'pass'|'fail', notes (optional) }
// In production, add file upload (multer) for the actual PDF score report.
router.post('/score-report', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (user.subscription.tier !== 'guarantee') {
      return res.status(403).json({ error: 'Score report only applies to the Pass Guarantee tier' });
    }

    const { examDate, result, notes } = req.body || {};

    if (!examDate || !['pass', 'fail', 'scheduled'].includes(result)) {
      return res.status(400).json({ error: 'examDate and result (pass|fail|scheduled) are required' });
    }

    user.subscription.scoreReport = {
      status: 'pending',
      submittedAt: new Date(),
      examDate: new Date(examDate),
      result,
      notes: notes || '',
      extensionCount: user.subscription.scoreReport?.extensionCount || 0,
    };
    await user.save();

    res.json({ ok: true, message: 'Score report submitted — we\'ll review and extend your access within 1 business day.' });
  } catch (err) {
    console.error('score-report submit error:', err);
    res.status(500).json({ error: 'Could not submit score report' });
  }
});

// ── GET /api/payment/score-report-status ─────────────────────────────────────
// Returns the user's current gate state so the frontend knows what to show.
router.get('/score-report-status', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('subscription');
    if (!user) return res.status(404).json({ error: 'User not found' });

    const sub = user.subscription;
    const now = new Date();
    const expired = sub.currentPeriodEnd && sub.currentPeriodEnd < now;
    const sr = sub.scoreReport || {};

    res.json({
      tier: sub.tier,
      expired: !!expired,
      currentPeriodEnd: sub.currentPeriodEnd,
      scoreReport: {
        status: sr.status || 'none',       // none | pending | approved_extension | passed
        submittedAt: sr.submittedAt || null,
        extensionCount: sr.extensionCount || 0,
      },
      // The key flag: is the gate currently blocking access?
      gated: sub.tier === 'guarantee' && !!expired && !['approved_extension', 'passed'].includes(sr.status),
    });
  } catch (err) {
    console.error('score-report-status error:', err);
    res.status(500).json({ error: 'Could not retrieve status' });
  }
});

// ── POST /api/payment/score-report/:userId/review  (admin only) ───────────────
// Admin approves a submitted score report.
// action: 'extend' (failed → add 90 days) | 'pass' (passed → close out + trigger CE)
// Protected by admin token check — add your admin middleware here.
router.post('/score-report/:userId/review', requireAuth, async (req, res) => {
  try {
    // Simple admin check — replace with your real admin middleware
    const reviewer = await User.findById(req.userId);
    if (!reviewer || reviewer.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ error: 'Admin only' });
    }

    const { action, notes } = req.body || {};
    if (!['extend', 'pass'].includes(action)) {
      return res.status(400).json({ error: 'action must be "extend" or "pass"' });
    }

    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const sr = user.subscription.scoreReport;
    if (sr.status !== 'pending') {
      return res.status(400).json({ error: 'No pending score report to review' });
    }

    if (action === 'extend') {
      // Failed — extend access by 90 days from today
      const newEnd = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);
      user.subscription.currentPeriodEnd = newEnd;
      user.subscription.scoreReport.status = 'approved_extension';
      user.subscription.scoreReport.extensionCount = (sr.extensionCount || 0) + 1;
      user.subscription.scoreReport.reviewedAt = new Date();
      user.subscription.scoreReport.notes = notes || '';
      // Reset to 'none' so they can submit again after the next attempt
      // (set a timeout or let them re-submit when ready)
      await user.save();
      return res.json({
        ok: true,
        message: `Access extended 90 days (extension #${user.subscription.scoreReport.extensionCount}). New expiry: ${newEnd.toDateString()}`,
      });
    }

    if (action === 'pass') {
      // Passed — mark as passed, close out access, trigger CE benefit
      user.subscription.scoreReport.status = 'passed';
      user.subscription.scoreReport.reviewedAt = new Date();
      user.subscription.scoreReport.notes = notes || '';
      // Keep currentPeriodEnd as-is (they don't need more prep time)
      await user.save();

      // TODO: trigger free CE course on CounselorReady
      // e.g. send an email or POST to counselorready.com/api/grant-free-course
      console.log(`🎉 PASSED: user ${user._id} (${user.email}) — trigger CounselorReady CE benefit`);

      return res.json({ ok: true, message: `Marked as passed. CE benefit trigger logged for ${user.email}.` });
    }
  } catch (err) {
    console.error('score-report review error:', err);
    res.status(500).json({ error: 'Could not process review' });
  }
});

// ── GET /api/payment/pending-score-reports  (admin only) ─────────────────────
// Lists all users with a pending score report for the admin review queue.
router.get('/pending-score-reports', requireAuth, async (req, res) => {
  try {
    const reviewer = await User.findById(req.userId);
    if (!reviewer || reviewer.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ error: 'Admin only' });
    }

    const pending = await User.find({ 'subscription.scoreReport.status': 'pending' })
      .select('email name subscription.scoreReport subscription.currentPeriodEnd subscription.tier')
      .sort({ 'subscription.scoreReport.submittedAt': 1 });

    res.json({ count: pending.length, users: pending });
  } catch (err) {
    console.error('pending-score-reports error:', err);
    res.status(500).json({ error: 'Could not load pending reports' });
  }
});

module.exports = router;
