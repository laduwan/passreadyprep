// ============================================================================
// NCE access rules — separate from the NCMHCE paywall in routes/content.js.
//
// NCE is billed on its own (User.nceAccess). Its free trial starts in Stripe
// Checkout with a card on file, like the NCMHCE one (utils/trial.js): the
// member picks an NCE plan, the subscription opens in 'trialing' status for
// NCE_TRIAL_DAYS and bills when the trial ends unless they cancel. Legacy
// no-card trials (nceAccess.trialStartedAt, which used to start on the first
// NCE visit) run out on their own clock, and an
// admin-granted account trial (User.trialEndsAt) covers NCE too.
//
// Levels (same vocabulary the NCMHCE side uses):
//   'free'    — no token: teaser only
//   'trial'   — Stripe trial, legacy trial or admin grant still running
//   'expired' — no running trial and no active NCE plan (a new account until
//               it starts its trial; nceTrialEligible says whether it can)
//   'paid'    — active nce_* plan
//   'gated'   — NCE Pass Guarantee past its 6-month check-in, score report not
//               yet approved (same rule as the NCMHCE guarantee)
// ============================================================================

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { TRIAL_DAYS } = require('./trial');

const NCE_TRIAL_DAYS = Math.max(1, parseInt(process.env.NCE_TRIAL_DAYS || String(TRIAL_DAYS), 10) || TRIAL_DAYS);
const DAY = 24 * 60 * 60 * 1000;

const NCE_RECURRING_TIERS = ['nce_monthly', 'nce_pass3', 'nce_pass6'];

function cardTrialing(a) {
  return NCE_RECURRING_TIERS.includes(a.tier) && a.status === 'trialing'
    && a.currentPeriodEnd && new Date(a.currentPeriodEnd) > new Date();
}

// When this account's NCE trial ends: the Stripe trial's end while one is
// running, otherwise the later of the legacy clock and an admin grant. Null
// when there is none. Guests get no trial (utils/trial.js).
function nceTrialEnd(user) {
  const a = (user && user.nceAccess) || {};
  if (!user || user.isGuest) return null;
  if (cardTrialing(a)) return new Date(a.currentPeriodEnd);
  const standard = a.trialStartedAt ? new Date(new Date(a.trialStartedAt).getTime() + NCE_TRIAL_DAYS * DAY) : null;
  const granted = user.trialEndsAt ? new Date(user.trialEndsAt) : null;
  if (granted && (!standard || granted > standard)) return granted;
  return standard;
}

function nceLevel(user, now = new Date()) {
  const a = (user && user.nceAccess) || {};
  const tier = a.tier || 'free';
  const end = a.currentPeriodEnd ? new Date(a.currentPeriodEnd) : null;
  if (tier === 'nce_guarantee' && end && end <= now) {
    const sr = (a.scoreReport && a.scoreReport.status) || 'none';
    // A 'pending' report (unsuccessful result or retest appointment uploaded,
    // awaiting admin review) counts as a completed check-in: access resumes
    // immediately instead of locking members out while admin review runs.
    // An approved extension moves currentPeriodEnd 3 months out; once that
    // lapses the check-in is due again (same rule as routes/content.js).
    return (sr === 'passed' || sr === 'pending') ? 'paid' : 'gated';
  }
  // A recurring plan inside its Stripe free trial is a trial, not a paid plan:
  // routes/payment.js moves currentPeriodEnd to "now" if the card is declined
  // when the trial ends, so a failed conversion reads as expired here.
  if (tier !== 'free' && (!end || end > now)) return a.status === 'trialing' ? 'trial' : 'paid';
  const trialEnd = nceTrialEnd(user);
  return trialEnd && trialEnd > now ? 'trial' : 'expired';
}

// Can this account start the card-up-front NCE free trial? One per account:
// never for a guest, never once an NCE plan has been on the account, never
// after a Stripe trial (trialUsedAt) or the legacy no-card trial
// (trialStartedAt), and not while a trial is running.
function nceTrialEligible(user, now = new Date()) {
  if (!user || user.isGuest) return false;
  const a = user.nceAccess || {};
  if (a.tier && a.tier !== 'free') return false;
  if (a.trialUsedAt || a.trialStartedAt) return false;
  return nceLevel(user, now) === 'expired';
}

// Middleware: attaches req.nceAccessLevel (+ req.userId, req.nceUser when signed
// in). Nothing starts a trial here any more: that happens in Stripe Checkout.
async function resolveNceAccess(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) { req.nceAccessLevel = 'free'; return next(); }

  let payload;
  try { payload = jwt.verify(token, process.env.JWT_SECRET); }
  catch (_) { req.nceAccessLevel = 'free'; return next(); }

  try {
    const user = await User.findById(payload.sub).select('nceAccess nceExamDate trialEndsAt sessionVersion isGuest');
    if (!user) { req.nceAccessLevel = 'free'; return next(); }
    if (user.sessionVersion != null && user.sessionVersion !== payload.sv) {
      return res.status(401).json({
        error: 'Session invalidated — your account was signed in on another device. Please sign in again.',
        code: 'SESSION_INVALIDATED',
      });
    }
    req.userId = payload.sub;
    req.nceUser = user;
    req.nceAccessLevel = nceLevel(user);
    req.nceTrialEndsAt = req.nceAccessLevel === 'trial' ? nceTrialEnd(user) : null;
    req.nceCardTrial = req.nceAccessLevel === 'trial' && cardTrialing(user.nceAccess || {});
    req.nceTrialEligible = nceTrialEligible(user);
    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = { NCE_TRIAL_DAYS, NCE_RECURRING_TIERS, nceTrialEnd, nceLevel, nceTrialEligible, cardTrialing, resolveNceAccess };
