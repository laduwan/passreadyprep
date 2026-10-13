/**
 * routes/applePayment.js — App Store In-App Purchase (iOS app).
 *
 * The website sells plans through Stripe (routes/payment.js). The iOS app must
 * sell the same plans through Apple's In-App Purchase (App Store guideline
 * 3.1.1), so it uses StoreKit 2 (client/ios/App/App/StoreKitPlugin.swift →
 * client/native/native-iap.js) and sends every signed transaction here:
 *
 *   GET  /api/payment/apple/products       — what is on sale (tier ↔ product ID)
 *   POST /api/payment/apple/prepare        — pre-purchase checks (terms, config),
 *                                            returns the product ID + account token
 *   POST /api/payment/apple/verify         — one signed transaction → grant access
 *   POST /api/payment/apple/restore        — the device's current entitlements →
 *                                            grant each (Restore Purchases, launch sync)
 *   POST /api/payment/apple/notifications  — App Store Server Notifications V2
 *                                            (renewals, cancellations, refunds)
 *
 * Grants follow the Stripe webhook exactly (same TIERS table): one-time passes
 * extend the current period, the guarantee opens its 6-month check-in window,
 * the guide sets guidePurchasedAt, subscriptions mirror Apple's expiry date.
 * Every transaction is recorded in models/AppleTransaction.js so StoreKit's
 * re-deliveries (restore, relaunch, unfinished transactions) never grant twice,
 * and so a purchase stays tied to the account that first claimed it.
 *
 * Setup is documented in docs/AppReview_Reply_v1.0_build2.md.
 */

const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const User = require('../models/User');
const AppleTransaction = require('../models/AppleTransaction');
const requireAuth = require('../middleware/auth');
const { logActivity } = require('../utils/activity');
const apple = require('../utils/appleIap');
const { TIERS } = require('./payment');
const { publicUser } = require('./auth');

const DAY = 24 * 60 * 60 * 1000;
const MAX_RESTORE = 25;

const date = (ms) => (typeof ms === 'number' && ms > 0 ? new Date(ms) : null);
const planPath = (cfg) => (cfg.exam === 'nce' ? 'nceAccess' : 'subscription');
const guaranteeTierFor = (cfg) => (cfg.exam === 'nce' ? 'nce_guarantee' : 'guarantee');

// An account already on the guarantee for this exam keeps it: a stale monthly
// or pass transaction (restore, relaunch) must never replace a better plan.
function hasActiveGuarantee(plan, cfg) {
  return plan && plan.tier === guaranteeTierFor(cfg) && plan.status !== 'canceled';
}

// Applies one verified transaction to the account. Idempotent: the same
// transaction can be sent any number of times. Returns a small summary.
async function applyTransaction(user, tx, opts = {}) {
  const entry = apple.entryForProductId(tx.productId);
  const cfg = entry && TIERS[entry.tier];
  if (!entry || !cfg) return { productId: tx.productId, action: 'skipped', reason: 'unknown_product' };

  const transactionId = String(tx.transactionId);
  const originalId = String(tx.originalTransactionId || tx.transactionId);
  const base = { tier: entry.tier, productId: tx.productId, transactionId };

  // One Apple purchase belongs to one PassReady account.
  const owner = await AppleTransaction.findOne({ originalTransactionId: originalId }).select('userId');
  if (owner && String(owner.userId) !== String(user._id)) {
    if (await User.exists({ _id: owner.userId })) {
      throw new apple.VerifyError(
        'This purchase is already linked to a different PassReady Prep account. Sign in to that account to use it.',
        'owned_by_other', 409
      );
    }
    // The owning account was deleted outside the normal flow: release it.
    await AppleTransaction.deleteMany({ originalTransactionId: originalId });
  }

  let record = await AppleTransaction.findOne({ transactionId });
  const alreadyApplied = !!record;
  if (!record) {
    try {
      record = await AppleTransaction.create({
        transactionId, originalTransactionId: originalId, userId: user._id,
        productId: tx.productId, tier: entry.tier, type: tx.type, environment: tx.environment,
        purchaseDate: date(tx.purchaseDate), expiresDate: date(tx.expiresDate),
        appAccountToken: tx.appAccountToken,
      });
    } catch (err) {
      if (err && err.code === 11000) return { ...base, action: 'already' }; // raced with itself
      throw err;
    }
  }

  if (tx.revocationDate) {
    await revokeTransaction(user, entry, cfg, record);
    return { ...base, action: 'revoked' };
  }

  const now = new Date();
  const update = {};

  // ── Study guide: an entitlement, never a tier ──
  if (cfg.entitlementOnly) {
    if (!user.guidePurchasedAt) {
      update.guidePurchasedAt = date(tx.purchaseDate) || now;
      update.guideOrderId = 'apple:' + transactionId;
      await User.findByIdAndUpdate(user._id, update);
      logActivity({ type: 'payment.succeeded', severity: 'info', userId: user._id, email: user.email, message: `One-time product purchased: ${entry.tier} (App Store)`, meta: { tier: entry.tier, source: 'apple', transactionId, environment: tx.environment } });
      return { ...base, action: 'granted' };
    }
    return { ...base, action: 'already' };
  }

  const path = planPath(cfg);
  const plan = (user[path] && typeof user[path].toObject === 'function') ? user[path].toObject() : (user[path] || {});
  const set = (k, v) => { update[`${path}.${k}`] = v; };
  const stamp = () => {
    set('source', 'apple');
    set('appleOriginalTransactionId', originalId);
    set('appleProductId', tx.productId);
    set('lastPaymentIntentId', 'apple:' + transactionId);
  };
  let expires = null;

  // ── Auto-renewable subscription (monthly) ──
  if (cfg.mode === 'subscription') {
    expires = date(tx.expiresDate);
    const active = !!(expires && expires > now);
    const samePlan = plan.source === 'apple' && plan.tier === cfg.tierName;
    if (hasActiveGuarantee(plan, cfg)) return { ...base, action: 'skipped', reason: 'higher_plan' };
    if (!active && !samePlan) return { ...base, action: 'skipped', reason: 'expired' };
    set('tier', cfg.tierName);
    set('status', active ? 'active' : 'canceled');
    if (expires) set('currentPeriodEnd', expires);
    if (!alreadyApplied) set('cancelAtPeriodEnd', false); // a fresh charge means it is renewing
    if (typeof opts.autoRenewStatus === 'number') set('cancelAtPeriodEnd', opts.autoRenewStatus === 0);
    stamp();
    await User.findByIdAndUpdate(user._id, update);
    if (!alreadyApplied) {
      logActivity({ type: 'payment.succeeded', severity: 'info', userId: user._id, email: user.email, message: `${cfg.exam === 'nce' ? 'NCE m' : 'M'}onthly subscription ${opts.viaNotification ? 'renewed' : 'started'} (App Store)`, meta: { tier: entry.tier, source: 'apple', transactionId, expires, environment: tx.environment } });
    }
    return { ...base, action: alreadyApplied ? 'already' : 'granted', expires };
  }

  // ── Pass Guarantee ──
  if (cfg.guarantee) {
    if (alreadyApplied) return { ...base, action: 'already' };
    expires = new Date(now.getTime() + cfg.accessDays * DAY); // 6-month check-in window, as the webhook
    set('tier', cfg.tierName);
    set('status', 'active');
    set('currentPeriodEnd', expires);
    set('cancelAtPeriodEnd', false);
    stamp();
    if (!user.guaranteeTermsAcceptedAt) update.guaranteeTermsAcceptedAt = now;
    await User.findByIdAndUpdate(user._id, update);
    logActivity({ type: 'payment.succeeded', severity: 'info', userId: user._id, email: user.email, message: `Purchased ${entry.tier} (App Store)`, meta: { tier: entry.tier, source: 'apple', transactionId, expires, environment: tx.environment } });
    return { ...base, action: 'granted', expires };
  }

  // ── One-time pass (pass3, nce_pass3, nce_pass6): extend, never shorten ──
  if (alreadyApplied) return { ...base, action: 'already' };
  if (hasActiveGuarantee(plan, cfg)) return { ...base, action: 'skipped', reason: 'higher_plan' };
  const cur = plan.currentPeriodEnd ? new Date(plan.currentPeriodEnd) : null;
  const from = cur && cur > now ? cur.getTime() : now.getTime();
  expires = new Date(from + cfg.accessDays * DAY);
  set('tier', cfg.tierName);
  set('status', 'active');
  set('currentPeriodEnd', expires);
  set('cancelAtPeriodEnd', false);
  stamp();
  await User.findByIdAndUpdate(user._id, update);
  logActivity({ type: 'payment.succeeded', severity: 'info', userId: user._id, email: user.email, message: `Purchased ${entry.tier} (App Store)`, meta: { tier: entry.tier, source: 'apple', transactionId, expires, environment: tx.environment } });
  return { ...base, action: 'granted', expires };
}

// Refund / revoke: take back what this transaction granted (and only that).
async function revokeTransaction(user, entry, cfg, record) {
  if (record && !record.revokedAt) await AppleTransaction.updateOne({ _id: record._id }, { revokedAt: new Date() });
  const transactionId = record ? record.transactionId : null;
  const update = {};
  if (cfg.entitlementOnly) {
    if (transactionId && String(user.guideOrderId || '') === 'apple:' + transactionId) {
      update.$unset = { guidePurchasedAt: 1, guideOrderId: 1 };
    }
  } else {
    const path = planPath(cfg);
    const plan = user[path] || {};
    if (plan.source === 'apple' && plan.tier === cfg.tierName) {
      update[`${path}.status`] = 'canceled';
      update[`${path}.currentPeriodEnd`] = new Date();
      if (cfg.guarantee) update[`${path}.tier`] = 'free';
    }
  }
  if (Object.keys(update).length) await User.findByIdAndUpdate(user._id, update);
  logActivity({ type: 'subscription.canceled', severity: 'warn', userId: user._id, email: user.email, message: `App Store purchase refunded/revoked: ${entry.tier}`, meta: { tier: entry.tier, source: 'apple', transactionId } });
}

async function findUserForTransaction(tx) {
  const originalId = String(tx.originalTransactionId || tx.transactionId || '');
  if (originalId) {
    const rec = await AppleTransaction.findOne({ originalTransactionId: originalId }).select('userId');
    if (rec) {
      const u = await User.findById(rec.userId);
      if (u) return u;
    }
  }
  if (tx.appAccountToken) {
    const u = await User.findOne({ appleAccountToken: String(tx.appAccountToken).toLowerCase() });
    if (u) return u;
  }
  if (originalId) {
    return User.findOne({ $or: [
      { 'subscription.appleOriginalTransactionId': originalId },
      { 'nceAccess.appleOriginalTransactionId': originalId },
    ] });
  }
  return null;
}

function sendError(res, err, fallback) {
  if (err instanceof apple.VerifyError) {
    return res.status(err.status).json({ error: err.message, code: err.code });
  }
  console.error(fallback, err);
  return res.status(500).json({ error: fallback });
}

// ── GET /api/payment/apple/products ───────────────────────────────────────────
// What the app may put on sale. `enabled` is false until APPLE_APP_ID is set;
// the app then shows "temporarily unavailable" rather than selling something
// the server could not verify.
router.get('/products', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({ enabled: apple.isProductionConfigured(), bundleId: apple.BUNDLE_ID, products: apple.offeredProducts() });
});

// ── POST /api/payment/apple/prepare ───────────────────────────────────────────
// Same checks create-checkout-session makes before Stripe: the tier exists and
// is on sale, the guarantee's terms are acknowledged. Returns the product to
// buy and the account token to attach to the StoreKit purchase.
router.post('/prepare', requireAuth, async (req, res) => {
  try {
    if (!apple.isProductionConfigured()) {
      return res.status(503).json({ error: 'In-app purchases are temporarily unavailable. Please try again later.', code: 'not_configured' });
    }
    const { tier, guaranteeTermsAccepted } = req.body || {};
    const product = apple.offeredProducts().find((p) => p.tier === tier);
    const cfg = TIERS[tier];
    if (!product || !cfg) return res.status(400).json({ error: 'Invalid tier' });
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (cfg.guarantee && !guaranteeTermsAccepted && !user.guaranteeTermsAcceptedAt) {
      return res.status(400).json({ error: 'Please acknowledge the Pass Guarantee terms to continue.', code: 'guarantee_terms' });
    }
    const update = {};
    if (cfg.guarantee && !user.guaranteeTermsAcceptedAt) update.guaranteeTermsAcceptedAt = new Date();
    if (!user.appleAccountToken) update.appleAccountToken = crypto.randomUUID();
    if (Object.keys(update).length) await User.findByIdAndUpdate(user._id, update);

    res.json({
      productId: product.productId,
      kind: product.kind,
      appAccountToken: user.appleAccountToken || update.appleAccountToken,
    });
  } catch (err) {
    sendError(res, err, 'Could not prepare the purchase');
  }
});

// ── POST /api/payment/apple/verify ────────────────────────────────────────────
// { jws } — StoreKit's signed transaction for a purchase just made (or an
// unfinished one re-delivered at launch). Grants access and returns the
// refreshed account, which the app stores as prp_user.
router.post('/verify', requireAuth, async (req, res) => {
  try {
    const { jws } = req.body || {};
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    const tx = await apple.verifyTransaction(jws);
    const result = await applyTransaction(user, tx);
    const fresh = await User.findById(req.userId);
    res.json({ ok: true, result, user: publicUser(fresh) });
  } catch (err) {
    sendError(res, err, 'Could not verify the purchase');
  }
});

// ── POST /api/payment/apple/restore ───────────────────────────────────────────
// { transactions: [jws, ...] } — the device's current entitlements. Each is
// verified and applied independently; one bad or foreign transaction does not
// block the rest. Nothing to restore is still a success.
router.post('/restore', requireAuth, async (req, res) => {
  try {
    let list = (req.body && req.body.transactions) || [];
    if (!Array.isArray(list)) return res.status(400).json({ error: 'transactions must be a list' });
    list = list.filter(apple.isJws).slice(0, MAX_RESTORE);
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const results = [];
    for (const jws of list) {
      try {
        const tx = await apple.verifyTransaction(jws);
        // Re-read so a pass bought twice extends from the first grant's end.
        const current = await User.findById(req.userId);
        results.push(await applyTransaction(current, tx, { viaRestore: true }));
      } catch (err) {
        if (err instanceof apple.VerifyError) results.push({ action: 'error', code: err.code, error: err.message });
        else throw err;
      }
    }
    const fresh = await User.findById(req.userId);
    res.json({ ok: true, results, user: publicUser(fresh) });
  } catch (err) {
    sendError(res, err, 'Could not restore purchases');
  }
});

// ── POST /api/payment/apple/notifications ─────────────────────────────────────
// App Store Server Notifications V2. Configure the URL in App Store Connect →
// App Information → App Store Server Notifications (production and sandbox):
//   https://www.passreadyprep.com/api/payment/apple/notifications
// The payload is signed by Apple, so no shared secret is needed. Apple retries
// on anything but 2xx, so unknown accounts and types are acknowledged and logged.
router.post('/notifications', async (req, res) => {
  let decoded;
  try {
    decoded = await apple.verifyNotification((req.body || {}).signedPayload);
  } catch (err) {
    if (err instanceof apple.VerifyError) {
      console.warn('apple notification rejected:', err.code, err.message);
      return res.status(err.status === 503 ? 503 : 400).json({ error: err.message, code: err.code });
    }
    console.error('apple notification error:', err);
    return res.status(500).json({ error: 'Notification processing failed' });
  }

  const type = decoded.notificationType;
  const subtype = decoded.subtype;
  const data = decoded.data || {};
  try {
    if (type === 'TEST') {
      logActivity({ type: 'apple.notification', severity: 'info', message: 'App Store test notification received', meta: { environment: data.environment } });
      return res.json({ ok: true });
    }
    if (!data.signedTransactionInfo) return res.json({ ok: true, ignored: type });

    const tx = await apple.verifyTransaction(data.signedTransactionInfo);
    let renewal = null;
    if (data.signedRenewalInfo) {
      try { renewal = await apple.verifyRenewalInfo(data.signedRenewalInfo); } catch (_) { renewal = null; }
    }
    const user = await findUserForTransaction(tx);
    if (!user) {
      console.warn(`apple notification ${type} for unknown account (product ${tx.productId}, original ${tx.originalTransactionId})`);
      return res.json({ ok: true, unmatched: true });
    }
    const entry = apple.entryForProductId(tx.productId);
    const cfg = entry && TIERS[entry.tier];
    if (!cfg) return res.json({ ok: true, ignored: 'unknown_product' });

    switch (type) {
      case 'REFUND':
      case 'REVOKE': {
        const record = await AppleTransaction.findOne({ transactionId: String(tx.transactionId) });
        await revokeTransaction(user, entry, cfg, record);
        break;
      }
      case 'CONSUMPTION_REQUEST':
      case 'PRICE_INCREASE':
      case 'PRICE_CHANGE':
      case 'REFUND_DECLINED':
      case 'RENEWAL_EXTENSION':
      case 'EXTERNAL_PURCHASE_TOKEN':
      case 'RESCIND_CONSENT':
      case 'METADATA_UPDATE':
      case 'MIGRATION':
        break; // nothing changes on the account
      default: {
        // SUBSCRIBED, DID_RENEW, DID_CHANGE_RENEWAL_STATUS/PREF, DID_FAIL_TO_RENEW,
        // EXPIRED, GRACE_PERIOD_EXPIRED, OFFER_REDEEMED, RENEWAL_EXTENDED,
        // REFUND_REVERSED, ONE_TIME_CHARGE — the transaction says what is true now.
        const autoRenewStatus = renewal && typeof renewal.autoRenewStatus === 'number' ? renewal.autoRenewStatus : undefined;
        await applyTransaction(user, tx, { viaNotification: true, autoRenewStatus });
        if (cfg.mode === 'subscription') {
          const path = planPath(cfg);
          const fresh = await User.findById(user._id).select(path);
          const plan = (fresh && fresh[path]) || {};
          if (plan.source === 'apple' && plan.tier === cfg.tierName) {
            const patch = {};
            if (type === 'DID_FAIL_TO_RENEW') {
              patch[`${path}.status`] = 'past_due';
              // Billing grace period: Apple keeps the subscriber active while it retries.
              const grace = renewal && date(renewal.gracePeriodExpiresDate);
              if (subtype === 'GRACE_PERIOD' && grace) patch[`${path}.currentPeriodEnd`] = grace;
              logActivity({ type: 'payment.failed', severity: 'warn', userId: user._id, email: user.email, message: `${cfg.exam === 'nce' ? 'NCE m' : 'M'}onthly renewal failed (App Store)`, meta: { source: 'apple', subtype } });
            } else if (type === 'EXPIRED' || type === 'GRACE_PERIOD_EXPIRED') {
              patch[`${path}.status`] = 'canceled';
              logActivity({ type: 'subscription.canceled', severity: 'info', userId: user._id, email: user.email, message: `${cfg.exam === 'nce' ? 'NCE m' : 'M'}onthly subscription expired (App Store)`, meta: { source: 'apple', subtype } });
            } else if (type === 'DID_CHANGE_RENEWAL_STATUS') {
              logActivity({ type: subtype === 'AUTO_RENEW_DISABLED' ? 'subscription.canceled' : 'apple.notification', severity: 'info', userId: user._id, email: user.email, message: `${cfg.exam === 'nce' ? 'NCE m' : 'M'}onthly auto-renew ${subtype === 'AUTO_RENEW_DISABLED' ? 'turned off — runs to period end' : 'turned on'} (App Store)`, meta: { source: 'apple', subtype } });
            }
            if (Object.keys(patch).length) await User.findByIdAndUpdate(user._id, patch);
          }
        }
      }
    }
    res.json({ ok: true });
  } catch (err) {
    if (err instanceof apple.VerifyError) {
      console.warn('apple notification not applied:', err.code, err.message);
      return res.json({ ok: true, notApplied: err.code });
    }
    console.error('apple notification handler error:', err);
    res.status(500).json({ error: 'Notification processing failed' });
  }
});

module.exports = router;
module.exports.applyTransaction = applyTransaction;
module.exports.revokeTransaction = revokeTransaction;
module.exports.findUserForTransaction = findUserForTransaction;
