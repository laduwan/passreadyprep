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
 *   test       — $1.00 one-time, admin-only live-payment smoke test (grants nothing)
 *   nce_monthly / nce_pass3 / nce_pass6 — NCE plans, written to User.nceAccess
 *   nce_guarantee — NCE Pass Guarantee, same rules as `guarantee`, written to
 *                   User.nceAccess. Off until STRIPE_PRICE_NCE_GUARANTEE is set.
 *
 * ENV vars required (add to .env and Render dashboard):
 *   STRIPE_SECRET_KEY       — sk_live_xxx  (or sk_test_xxx for dev)
 *   STRIPE_WEBHOOK_SECRET   — whsec_xxx  (from Stripe dashboard → Webhooks)
 *   STRIPE_PRICE_MONTHLY    — price_xxx  (monthly $29 recurring price ID)
 *   STRIPE_PRICE_PASS3      — price_xxx  (3-month $79 one-time price ID)
 *   STRIPE_PRICE_GUARANTEE  — price_xxx  ($149 one-time price ID)
 *   STRIPE_PRICE_NCE_MONTHLY — price_xxx (NCE monthly $24.99 recurring)
 *   STRIPE_PRICE_NCE_PASS3   — price_xxx (NCE 3-month $59 one-time)
 *   STRIPE_PRICE_NCE_PASS6   — price_xxx (NCE 6-month $89 one-time)
 *   STRIPE_PRICE_NCE_GUARANTEE — price_xxx (NCE Pass Guarantee one-time; optional)
 *   CLIENT_URL              — https://passreadyprep-server.onrender.com (no trailing slash)
 */

const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const User = require('../models/User');
const requireAuth = require('../middleware/auth');
const { logActivity } = require('../utils/activity');
const Attempt = require('../models/Attempt');
const { getNceExam } = require('../utils/nceExam');
const { cleanDomainScores, buildRetakePlan } = require('../utils/retakePlan');

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

// Reads a subscription's current period end, working across Stripe API versions.
//
// Stripe's Basil release (API version 2025-03-31) REMOVED current_period_start /
// current_period_end from the Subscription object and moved them onto each
// subscription item. On newer API versions sub.current_period_end is undefined,
// which produced `new Date(NaN)` — an Invalid Date that Mongoose then rejected,
// throwing and turning every subscription webhook into a 500.
//
// Item-level is checked first (current versions), then the old top-level field
// (pre-Basil), so this keeps working whichever API version Stripe delivers.
// Returns a valid Date, or null when no usable value is present.
function subPeriodEnd(sub) {
  if (!sub) return null;
  const items = sub.items && Array.isArray(sub.items.data) ? sub.items.data : [];
  let raw = null;
  for (const item of items) {
    if (item && typeof item.current_period_end === 'number') {
      // If items ever bill on different cycles, keep the furthest-out date so
      // we never cut a paying user's access short.
      if (raw === null || item.current_period_end > raw) raw = item.current_period_end;
    }
  }
  if (raw === null && typeof sub.current_period_end === 'number') raw = sub.current_period_end;
  if (raw === null) return null;
  const d = new Date(raw * 1000);
  return isNaN(d.getTime()) ? null : d;
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
    guarantee: true,
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
  // ── NCE plans ── billed separately from NCMHCE: the webhook writes these to
  // User.nceAccess, never to User.subscription, so buying one exam can't grant
  // or overwrite the other. Prices live in Stripe (see .env price IDs).
  nce_monthly: {
    priceId: () => process.env.STRIPE_PRICE_NCE_MONTHLY,
    mode: 'subscription',
    tierName: 'nce_monthly',
    exam: 'nce',
  },
  nce_pass3: {
    priceId: () => process.env.STRIPE_PRICE_NCE_PASS3,
    mode: 'payment',
    tierName: 'nce_pass3',
    exam: 'nce',
    accessDays: 90,
  },
  nce_pass6: {
    priceId: () => process.env.STRIPE_PRICE_NCE_PASS6,
    mode: 'payment',
    tierName: 'nce_pass6',
    exam: 'nce',
    accessDays: 180,
  },
  // NCE Pass Guarantee: the same promise as `guarantee` above (no repayment,
  // a candidate check-in every 6 months, pass → free CE course, fail → free
  // extension), on User.nceAccess. Not offered until its price is configured.
  nce_guarantee: {
    priceId: () => process.env.STRIPE_PRICE_NCE_GUARANTEE,
    mode: 'payment',
    tierName: 'nce_guarantee',
    exam: 'nce',
    guarantee: true,
    accessDays: 180,
  },
  // $1.00 test purchase for verifying the live Stripe flow end to end
  // (checkout → webhook → activity log). Priced inline so it needs no
  // product/price in the Stripe dashboard. Admin-only, and the webhook
  // grants no tier or entitlement — refund it from the Stripe dashboard.
  test: {
    priceData: {
      currency: 'usd',
      unit_amount: 100, // $1.00
      product_data: { name: 'PassReady Prep — $1 test purchase' },
    },
    mode: 'payment',
    tierName: 'test',
    adminOnly: true,
    testOnly: true,
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
    if (TIERS[tier].guarantee && !guaranteeTermsAccepted) {
      return res.status(400).json({
        error: 'You must acknowledge the Pass Guarantee candidate verification terms to proceed',
        code: 'GUARANTEE_TERMS_REQUIRED',
      });
    }

    const tierConfig = TIERS[tier];
    const priceId = tierConfig.priceData ? null : tierConfig.priceId();

    if (!tierConfig.priceData && !priceId) {
      return res.status(500).json({ error: `Price ID for tier "${tier}" is not configured` });
    }

    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (tierConfig.adminOnly && user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin only' });
    }

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
    if (tierConfig.guarantee && !user.guaranteeTermsAcceptedAt) {
      await User.findByIdAndUpdate(req.userId, {
        guaranteeTermsAcceptedAt: new Date(),
      });
    }

    const sessionParams = {
      customer: customerId,
      mode: tierConfig.mode,
      line_items: [
        tierConfig.priceData
          ? { price_data: tierConfig.priceData, quantity: 1 }
          : { price: priceId, quantity: 1 },
      ],
      // Show a promo-code field at checkout so ebook readers can redeem
      // PASSREADY10 (and any future codes). The coupon + promotion code
      // themselves live in the Stripe dashboard, not in this repo.
      allow_promotion_codes: true,
      success_url: `${process.env.CLIENT_URL}/checkout.html?tier=${tier}&session_id={CHECKOUT_SESSION_ID}`,
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

    // NCE plans return to the NCE study page.
    if (tierConfig.exam === 'nce') {
      sessionParams.success_url = `${process.env.CLIENT_URL}/nce.html?purchase=success&tier=${tier}`;
      sessionParams.cancel_url = `${process.env.CLIENT_URL}/nce.html#pricing`;
    }

    // Test purchase returns to the checkout page's success view.
    if (tierConfig.testOnly) {
      sessionParams.allow_promotion_codes = false;
      sessionParams.success_url = `${process.env.CLIENT_URL}/checkout.html?tier=test&session_id={CHECKOUT_SESSION_ID}`;
      sessionParams.cancel_url = `${process.env.CLIENT_URL}/checkout.html?tier=test`;
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

// ── POST /api/payment/portal ──────────────────────────────────────────────────
// Opens Stripe's hosted Customer Portal for the signed-in user, where they can
// cancel their Monthly subscription or update their card themselves. Stripe
// reports changes back through the webhook below. Requires the portal to be
// enabled in the Stripe dashboard (Settings → Billing → Customer portal).
router.post('/portal', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('subscription');
    if (!user) return res.status(404).json({ error: 'User not found' });
    const customer = user.subscription && user.subscription.stripeCustomerId;
    if (!customer) return res.status(400).json({ error: 'No billing account found for this sign-in' });

    const base = process.env.APP_URL || process.env.CLIENT_URL;
    const session = await getStripe().billingPortal.sessions.create({
      customer,
      return_url: `${base}/study`,
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error('billing portal error:', err);
    res.status(500).json({ error: 'Could not open subscription management. Please try again or contact support.' });
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

        // $1 test purchase: log it, change nothing on the account.
        if (tierConfig.testOnly) {
          console.log(`✓ Test purchase: user ${userId}, session ${session.id}`);
          logActivity({ type: 'payment.succeeded', severity: 'info', userId, email: session.customer_details?.email, message: 'Test purchase ($1.00) — no access granted', meta: { tier, amount: session.amount_total, currency: session.currency, sessionId: session.id }, req });
          break;
        }

        // One-time PRODUCT (e.g. the study guide): grant an entitlement, never a tier.
        if (tierConfig.entitlementOnly) {
          await User.findByIdAndUpdate(userId, {
            guidePurchasedAt: new Date(),
            guideOrderId: session.id,
          });
          console.log(`✓ One-time product: user ${userId} → entitlement "${tier}"`);
          logActivity({ type: 'payment.succeeded', severity: 'info', userId, email: session.customer_details?.email, message: `One-time product purchased: ${tier}`, meta: { tier, amount: session.amount_total, currency: session.currency }, req });
          break;
        }

        // NCE one-time pass: extend from whichever is later, now or the end of
        // time already paid for, so buying early never loses days.
        if (tierConfig.exam === 'nce') {
          const u = await User.findById(userId).select('nceAccess');
          const cur = u && u.nceAccess && u.nceAccess.currentPeriodEnd;
          const from = cur && cur > new Date() ? cur.getTime() : Date.now();
          const nceEnd = new Date(from + tierConfig.accessDays * 24 * 60 * 60 * 1000);
          await User.findByIdAndUpdate(userId, {
            'nceAccess.tier': tier,
            'nceAccess.status': 'active',
            'nceAccess.currentPeriodEnd': nceEnd,
            'nceAccess.lastPaymentIntentId': session.payment_intent,
          });
          console.log(`✓ NCE one-time payment: user ${userId} → ${tier}, expires ${nceEnd}`);
          logActivity({ type: 'payment.succeeded', severity: 'info', userId, email: session.customer_details?.email, message: `Purchased ${tier}`, meta: { tier, expires: nceEnd, amount: session.amount_total, currency: session.currency }, req });
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
          'subscription.lastPaymentIntentId': session.payment_intent,
        });

        console.log(`✓ One-time payment: user ${userId} → tier "${tier}", expires ${periodEnd || 'never'}`);
        logActivity({ type: 'payment.succeeded', severity: 'info', userId, email: session.customer_details?.email, message: `Purchased ${tier}`, meta: { tier, expires: periodEnd, amount: session.amount_total, currency: session.currency }, req });
        break;
      }

      // ── Monthly subscription activated ────────────────────────────────────
      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const sub = event.data.object;
        const userId = sub.metadata?.userId;
        if (!userId) break;

        // NCE monthly lives on User.nceAccess — never touch the NCMHCE plan.
        if (TIERS[sub.metadata?.tier]?.exam === 'nce') {
          const nceUpdate = {
            'nceAccess.tier': sub.metadata.tier,
            'nceAccess.status': sub.status,
            'nceAccess.stripeSubscriptionId': sub.id,
            'nceAccess.cancelAtPeriodEnd': !!sub.cancel_at_period_end,
          };
          const ncePeriodEnd = subPeriodEnd(sub);
          if (ncePeriodEnd) nceUpdate['nceAccess.currentPeriodEnd'] = ncePeriodEnd;
          await User.findByIdAndUpdate(userId, nceUpdate);
          console.log(`✓ NCE subscription ${event.type}: user ${userId}, status ${sub.status}`);
          if (event.type === 'customer.subscription.created') {
            logActivity({ type: 'payment.succeeded', severity: 'info', userId, message: 'NCE monthly subscription started', meta: { status: sub.status }, req });
          } else if (sub.status === 'past_due') {
            logActivity({ type: 'subscription.past_due', severity: 'warn', userId, message: 'NCE monthly subscription is past due', meta: { status: sub.status }, req });
          }
          break;
        }

        const update = {
          'subscription.tier': 'monthly',
          'subscription.status': sub.status, // 'active', 'past_due', etc.
          'subscription.stripeSubscriptionId': sub.id,
          'subscription.cancelAtPeriodEnd': !!sub.cancel_at_period_end,
        };
        // Only write the date when Stripe actually gave us one — never
        // overwrite a good value with null, and never write an Invalid Date.
        const periodEnd = subPeriodEnd(sub);
        if (periodEnd) update['subscription.currentPeriodEnd'] = periodEnd;

        await User.findByIdAndUpdate(userId, update);

        console.log(`✓ Subscription ${event.type}: user ${userId}, status ${sub.status}`);
        if (event.type === 'customer.subscription.created') {
          logActivity({ type: 'payment.succeeded', severity: 'info', userId, message: 'Monthly subscription started', meta: { status: sub.status }, req });
        } else if (sub.status === 'past_due') {
          logActivity({ type: 'subscription.past_due', severity: 'warn', userId, message: 'Monthly subscription is past due', meta: { status: sub.status }, req });
        }
        break;
      }

      // ── Monthly subscription cancelled ────────────────────────────────────
      case 'customer.subscription.deleted': {
        const sub = event.data.object;
        const userId = sub.metadata?.userId;
        if (!userId) break;

        if (TIERS[sub.metadata?.tier]?.exam === 'nce') {
          const nceCancel = { 'nceAccess.status': 'canceled' };
          const nceCancelEnd = subPeriodEnd(sub);
          if (nceCancelEnd) nceCancel['nceAccess.currentPeriodEnd'] = nceCancelEnd;
          await User.findByIdAndUpdate(userId, nceCancel);
          console.log(`✓ NCE subscription cancelled: user ${userId}`);
          logActivity({ type: 'subscription.canceled', severity: 'info', userId, message: 'NCE monthly subscription cancelled', meta: { periodEnd: nceCancelEnd }, req });
          break;
        }

        // Don't immediately drop to free — let them use through period end
        const cancelUpdate = { 'subscription.status': 'canceled' };
        const cancelPeriodEnd = subPeriodEnd(sub);
        if (cancelPeriodEnd) cancelUpdate['subscription.currentPeriodEnd'] = cancelPeriodEnd;

        await User.findByIdAndUpdate(userId, cancelUpdate);

        console.log(`✓ Subscription cancelled: user ${userId}`);
        logActivity({ type: 'subscription.canceled', severity: 'info', userId, message: 'Monthly subscription cancelled', meta: { periodEnd: cancelPeriodEnd }, req });
        break;
      }

      // ── Payment failed (monthly) ──────────────────────────────────────────
      case 'invoice.payment_failed': {
        const invoice = event.data.object;
        const customerId = invoice.customer;
        const user = await User.findOne({ 'subscription.stripeCustomerId': customerId });
        if (!user) break;

        // A failed NCE renewal marks only the NCE plan past due. The invoice's
        // subscription id moved under parent.subscription_details in newer
        // Stripe API versions, so check both places.
        const invSubId = invoice.subscription || invoice.parent?.subscription_details?.subscription;
        if (invSubId && user.nceAccess?.stripeSubscriptionId === invSubId) {
          await User.findByIdAndUpdate(user._id, { 'nceAccess.status': 'past_due' });
          console.log(`✓ NCE payment failed: user ${user._id}`);
          logActivity({ type: 'payment.failed', severity: 'warn', userId: user._id, email: user.email, message: 'NCE monthly payment failed', meta: { customerId }, req });
          break;
        }

        await User.findByIdAndUpdate(user._id, {
          'subscription.status': 'past_due',
        });

        console.log(`✓ Payment failed: user ${user._id}`);
        logActivity({ type: 'payment.failed', severity: 'warn', userId: user._id, email: user.email, message: 'Monthly payment failed', meta: { customerId }, req });
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

// Which Pass Guarantee a score report belongs to: the NCMHCE guarantee lives
// on User.subscription, the NCE guarantee on User.nceAccess. Requests name the
// exam with `exam: 'nce'`; anything else means NCMHCE, as before.
function guaranteePlan(user, exam) {
  return exam === 'nce'
    ? { exam: 'nce', name: 'NCE', path: 'nceAccess', tier: 'nce_guarantee', plan: user.nceAccess || {} }
    : { exam: 'ncmhce', name: 'NCMHCE', path: 'subscription', tier: 'guarantee', plan: user.subscription || {} };
}

// ── POST /api/payment/score-report ───────────────────────────────────────────
// User submits a check-in or an exam result for their Pass Guarantee.
// Puts the guarantee into 'pending' state for admin review.
// Accepts: { examDate, result: 'pass'|'fail'|'scheduled', notes?, exam ('nce' | default NCMHCE),
//            letter (data URI, always required), domainScores? { key: { earned, possible } } }
// Every check-in comes with a document so it can be verified against the
// account (Pass Guarantee terms, policies.html#guarantee): the exam appointment
// confirmation for 'scheduled', the score letter for 'pass' / 'fail'. An
// approved 'scheduled' or 'fail' adds 3 months. A fail also needs the
// per-domain scores from the letter; they build the retake plan.
const LETTER_MAX = 7_000_000; // data-URI length, ~5 MB file
const LETTER_TYPES = /^data:(image\/(png|jpeg|webp|heic)|application\/pdf);base64,/;

router.post('/score-report', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const { examDate, result, notes, exam, letter, domainScores } = req.body || {};
    const g = guaranteePlan(user, exam);

    if (g.plan.tier !== g.tier) {
      return res.status(403).json({ error: `Score report only applies to the ${g.name} Pass Guarantee` });
    }

    if (!examDate || !['pass', 'fail', 'scheduled'].includes(result)) {
      return res.status(400).json({ error: 'examDate and result (pass|fail|scheduled) are required' });
    }

    const taken = result !== 'scheduled';
    if (typeof letter !== 'string' || !LETTER_TYPES.test(letter)) {
      return res.status(400).json({
        error: taken
          ? 'Attach your score letter (PDF or photo) to verify your result.'
          : 'Attach your exam appointment confirmation (PDF or photo).',
      });
    }
    if (letter.length > LETTER_MAX) {
      return res.status(400).json({ error: 'That file is too large. Please attach a file under 5 MB.' });
    }
    if (taken) {
      // A result is claimed within 14 days of the exam (Pass Guarantee terms).
      const days = (Date.now() - new Date(examDate).getTime()) / 86400000;
      if (!(days >= -1)) return res.status(400).json({ error: 'The exam date for a result can’t be in the future.' });
      if (days > 14) {
        return res.status(400).json({
          error: 'Results must be submitted within 14 days of the exam date. Contact support if you need help.',
          code: 'CLAIM_WINDOW_CLOSED',
        });
      }
    }

    const clean = cleanDomainScores(g.exam, domainScores);
    if (clean.error) return res.status(400).json({ error: clean.error });
    let retakePlan = null;
    if (result === 'fail') {
      if (Object.keys(clean.scores).length < 2) {
        return res.status(400).json({ error: 'Enter the domain scores from your letter so we can build your retake plan.' });
      }
      retakePlan = buildRetakePlan(g.exam, clean.scores, await practiceByDomain(user._id, g.exam));
    }

    // Keep the previous report (minus its letter) so each attempt stays on record.
    const prev = g.plan.scoreReport;
    if (prev && prev.status && prev.status !== 'none') {
      const { letter: _omit, ...rest } = typeof prev.toObject === 'function' ? prev.toObject() : prev;
      user.set(`${g.path}.scoreReportHistory`, [...(g.plan.scoreReportHistory || []), rest]);
    }

    user.set(`${g.path}.scoreReport`, {
      status: 'pending',
      submittedAt: new Date(),
      examDate: new Date(examDate),
      result,
      notes: notes || '',
      extensionCount: (prev && prev.extensionCount) || 0,
      letter,
      letterType: letter.slice(5, letter.indexOf(';')),
      domainScores: Object.keys(clean.scores).length ? clean.scores : undefined,
      retakePlan: retakePlan || undefined,
    });
    await user.save();

    res.json({
      ok: true,
      retakePlan,
      message: 'Score report submitted — we\'ll review it within 1 business day.',
    });
  } catch (err) {
    console.error('score-report submit error:', err);
    res.status(500).json({ error: 'Could not submit score report' });
  }
});

// Practice accuracy by domain from the member's PassReady attempts, in the
// shape utils/retakePlan.js expects: { key: { correct, total } }.
async function practiceByDomain(userId, exam) {
  const attempts = await Attempt.find({ userId }).select('examId domainBreakdown').limit(2000).lean();
  const nceExam = await getNceExam().catch(() => null);
  const isNce = (a) => nceExam && String(a.examId) === String(nceExam._id);
  const out = {};
  attempts.filter((a) => (exam === 'nce') === !!isNce(a)).forEach((a) => {
    Object.entries(a.domainBreakdown || {}).forEach(([k, v]) => {
      // NCMHCE attempts store { ok, total }; NCE attempts store { correct, total }.
      const c = +(v && (v.correct != null ? v.correct : v.ok)) || 0, t = +(v && v.total) || 0;
      out[k] = out[k] || { correct: 0, total: 0 };
      out[k].correct += c; out[k].total += t;
    });
  });
  return out;
}

// ── GET /api/payment/score-report-status?exam=nce ─────────────────────────────
// Returns the user's current gate state so the frontend knows what to show.
router.get('/score-report-status', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('subscription nceAccess');
    if (!user) return res.status(404).json({ error: 'User not found' });

    const g = guaranteePlan(user, req.query.exam);
    const sub = g.plan;
    const now = new Date();
    const expired = sub.currentPeriodEnd && sub.currentPeriodEnd < now;
    const sr = sub.scoreReport || {};

    res.json({
      exam: g.exam,
      tier: sub.tier,
      expired: !!expired,
      currentPeriodEnd: sub.currentPeriodEnd,
      scoreReport: {
        status: sr.status || 'none',       // none | pending | approved_extension | passed
        submittedAt: sr.submittedAt || null,
        extensionCount: sr.extensionCount || 0,
      },
      // The key flag: is the gate currently blocking access? An approved
      // extension only lasts until the new currentPeriodEnd.
      gated: sub.tier === g.tier && !!expired && sr.status !== 'passed',
      // Any guarantee holder can report a result (within 14 days of the exam),
      // not only one whose access is currently paused.
      eligible: sub.tier === g.tier && sr.status !== 'passed',
      lastResult: sr.result || null,
      examDate: sr.examDate || null,
      retakePlan: sr.retakePlan || null,
    });
  } catch (err) {
    console.error('score-report-status error:', err);
    res.status(500).json({ error: 'Could not retrieve status' });
  }
});

// ── GET /api/payment/score-reports  (admin only) ─────────────────────────────
// Pending Pass Guarantee check-ins for both exams, oldest first, without the
// documents (fetch each with the letter route below).
router.get('/score-reports', requireAuth, async (req, res) => {
  try {
    const reviewer = await User.findById(req.userId).select('role');
    if (!reviewer || reviewer.role !== 'admin') return res.status(403).json({ error: 'Admin only' });
    const users = await User.find({
      $or: [{ 'subscription.scoreReport.status': 'pending' }, { 'nceAccess.scoreReport.status': 'pending' }],
    }).select('email name subscription nceAccess').lean();
    const reports = [];
    users.forEach((u) => {
      [['ncmhce', u.subscription], ['nce', u.nceAccess]].forEach(([exam, plan]) => {
        const sr = plan && plan.scoreReport;
        if (!sr || sr.status !== 'pending') return;
        reports.push({
          userId: u._id, email: u.email, name: u.name, exam,
          result: sr.result, examDate: sr.examDate, submittedAt: sr.submittedAt, notes: sr.notes,
          letterType: sr.letterType || null, domainScores: sr.domainScores || null,
          retakePlan: sr.retakePlan || null, extensionCount: sr.extensionCount || 0,
          currentPeriodEnd: plan.currentPeriodEnd || null,
        });
      });
    });
    reports.sort((a, b) => new Date(a.submittedAt) - new Date(b.submittedAt));
    res.json({ reports });
  } catch (err) {
    console.error('score-reports list error:', err);
    res.status(500).json({ error: 'Could not load score reports' });
  }
});

// ── GET /api/payment/score-report/:userId/letter?exam=nce  (admin only) ───────
// The uploaded document (score letter or appointment confirmation) as a data URI.
router.get('/score-report/:userId/letter', requireAuth, async (req, res) => {
  try {
    const reviewer = await User.findById(req.userId).select('role');
    if (!reviewer || reviewer.role !== 'admin') return res.status(403).json({ error: 'Admin only' });
    const g = req.query.exam === 'nce' ? 'nceAccess' : 'subscription';
    const user = await User.findById(req.params.userId).select(`+${g}.scoreReport.letter`).lean();
    const sr = user && user[g] && user[g].scoreReport;
    if (!sr || !sr.letter) return res.status(404).json({ error: 'No document on file' });
    res.set('Cache-Control', 'no-store');
    res.json({ letter: sr.letter, letterType: sr.letterType || null });
  } catch (err) {
    console.error('score-report letter error:', err);
    res.status(500).json({ error: 'Could not load the document' });
  }
});

// ── POST /api/payment/score-report/:userId/review  (admin only) ───────────────
// Admin approves a submitted score report.
// action: 'extend' (failed → add 90 days) | 'pass' (passed → close out + trigger CE)
// exam: 'nce' for the NCE guarantee; anything else means NCMHCE.
router.post('/score-report/:userId/review', requireAuth, async (req, res) => {
  try {
    const reviewer = await User.findById(req.userId);
    if (!reviewer || reviewer.role !== 'admin') {
      return res.status(403).json({ error: 'Admin only' });
    }

    const { action, notes, exam } = req.body || {};
    if (!['extend', 'pass'].includes(action)) {
      return res.status(400).json({ error: 'action must be "extend" or "pass"' });
    }

    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const g = guaranteePlan(user, exam);
    const sr = g.plan.scoreReport || {};
    if (sr.status !== 'pending') {
      return res.status(400).json({ error: `No pending ${g.name} score report to review` });
    }

    if (action === 'extend') {
      // Failed — extend access by 90 days from today (never shortening a
      // period that already runs longer)
      const cur = g.plan.currentPeriodEnd ? new Date(g.plan.currentPeriodEnd).getTime() : 0;
      const newEnd = new Date(Math.max(Date.now() + 90 * 24 * 60 * 60 * 1000, cur));
      const count = (sr.extensionCount || 0) + 1;
      user.set(`${g.path}.currentPeriodEnd`, newEnd);
      user.set(`${g.path}.scoreReport.status`, 'approved_extension');
      user.set(`${g.path}.scoreReport.extensionCount`, count);
      user.set(`${g.path}.scoreReport.reviewedAt`, new Date());
      user.set(`${g.path}.scoreReport.notes`, notes || '');
      await user.save();
      return res.json({
        ok: true,
        message: `${g.name} access extended 90 days (extension #${count}). New expiry: ${newEnd.toDateString()}`,
      });
    }

    if (action === 'pass') {
      // Passed — mark as passed, close out access, trigger CE benefit
      user.set(`${g.path}.scoreReport.status`, 'passed');
      user.set(`${g.path}.scoreReport.reviewedAt`, new Date());
      user.set(`${g.path}.scoreReport.notes`, notes || '');
      // Keep currentPeriodEnd as-is (they don't need more prep time)
      await user.save();

      // Free CE benefit on CounselorReady is not yet automated (no grant
      // endpoint exists there yet) — email the admin so it's actioned
      // manually instead of getting lost in server logs.
      const { sendMail } = require('../utils/mailer');
      const adminEmail = process.env.ADMIN_ALERT_EMAIL || process.env.MAIL_FROM_EMAIL;
      sendMail({
        to: adminEmail,
        subject: `[PRP] ${g.name} passed — grant CE benefit for ${user.email}`,
        text: `${user.email} (user ${user._id}) just passed their ${g.name} score report review.\n\nManually grant their free CounselorReady CE course benefit.\n\nReviewed at: ${new Date().toISOString()}`,
      }).catch(err => console.error('CE benefit alert email failed:', err.message));
      console.log(`🎉 PASSED ${g.name}: user ${user._id} (${user.email}) — CE benefit alert emailed to ${adminEmail}`);

      return res.json({ ok: true, message: `Marked as passed. CE benefit trigger logged for ${user.email}.` });
    }
  } catch (err) {
    console.error('score-report review error:', err);
    res.status(500).json({ error: 'Could not process review' });
  }
});

// ── GET /api/payment/pending-score-reports  (admin only) ─────────────────────
// Lists all users with a pending score report, NCMHCE and NCE, for the admin
// review queue. Each entry carries `exam` — pass it back to the review route.
router.get('/pending-score-reports', requireAuth, async (req, res) => {
  try {
    const reviewer = await User.findById(req.userId);
    if (!reviewer || reviewer.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ error: 'Admin only' });
    }

    const docs = await User.find({ $or: [
      { 'subscription.scoreReport.status': 'pending' },
      { 'nceAccess.scoreReport.status': 'pending' },
    ] })
      .select('email name subscription.scoreReport subscription.currentPeriodEnd subscription.tier nceAccess.scoreReport nceAccess.currentPeriodEnd nceAccess.tier')
      .lean();

    const users = [];
    docs.forEach((u) => {
      ['ncmhce', 'nce'].forEach((exam) => {
        const g = guaranteePlan(u, exam);
        if (g.plan.scoreReport && g.plan.scoreReport.status === 'pending') {
          users.push(Object.assign({}, u, { exam: g.exam }));
        }
      });
    });
    users.sort((x, y) => {
      const sx = guaranteePlan(x, x.exam).plan.scoreReport.submittedAt || 0;
      const sy = guaranteePlan(y, y.exam).plan.scoreReport.submittedAt || 0;
      return new Date(sx) - new Date(sy);
    });

    res.json({ count: users.length, users });
  } catch (err) {
    console.error('pending-score-reports error:', err);
    res.status(500).json({ error: 'Could not load pending reports' });
  }
});

// ── GET /api/payment/plans?exam=nce ─────────────────────────────────────────
// Live prices for an exam's plans, read from Stripe using the price IDs in the
// environment, so pages show what Stripe will charge. A plan whose price ID is
// not set is left out — that is how the NCE Pass Guarantee stays hidden until
// STRIPE_PRICE_NCE_GUARANTEE exists. Cached for 10 minutes.
const PLAN_CACHE_MS = 10 * 60 * 1000;
const planCache = {};
router.get('/plans', async (req, res) => {
  const exam = req.query.exam === 'nce' ? 'nce' : 'ncmhce';
  const hit = planCache[exam];
  if (hit && Date.now() - hit.at < PLAN_CACHE_MS) return res.json(hit.body);
  try {
    const tiers = Object.keys(TIERS).filter((t) => {
      const c = TIERS[t];
      if (c.adminOnly || c.entitlementOnly || c.priceData) return false;
      return (c.exam || 'ncmhce') === exam && !!c.priceId();
    });
    const plans = await Promise.all(tiers.map(async (t) => {
      const price = await getStripe().prices.retrieve(TIERS[t].priceId());
      return {
        tier: t,
        amount: price.unit_amount,          // in cents
        currency: price.currency,
        interval: (price.recurring && price.recurring.interval) || null,
        guarantee: !!TIERS[t].guarantee,
        accessDays: TIERS[t].accessDays || null,
      };
    }));
    const body = { exam, plans };
    planCache[exam] = { at: Date.now(), body };
    res.json(body);
  } catch (err) {
    console.error('plans error:', err.message);
    res.status(502).json({ error: 'Could not load plan prices' });
  }
});

module.exports = router;
