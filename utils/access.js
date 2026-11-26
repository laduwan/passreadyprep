// utils/access.js — the account's NCMHCE access level as a pure function of
// the user document.
//
// routes/content.js (the case paywall) and jobs/studyBreaks.js (a background
// job with no request to resolve) both need the same answer to "does this
// account have access right now?". The rule lives here once; resolveAccess in
// routes/content.js calls it after it has verified the session, and the job
// calls it with the user document it loaded. Neither re-derives it.
//
// Levels:
//   'free'    — no account
//   'trial'   — a Stripe subscription in 'trialing' status (card on file, the
//               plan bills when the trial ends), a legacy no-card trial that
//               is still running, or an admin-granted trial
//   'expired' — registered account with no running trial and no active paid
//               tier; also the state of a brand-new account until it starts
//               its trial through checkout (trialEligible says whether it can)
//   'paid'    — active monthly, pass3, pass6 or guarantee
//   'gated'   — guarantee tier past its period with no check-in on file
//
// `user` needs: subscription, isGuest, trialStartedAt, trialEndsAt.
const { trialEndFor, trialLevel } = require('./trial');
const { isForfeited } = require('./guaranteeRules');

// The recurring NCMHCE plans: Stripe subscriptions (or App Store auto-renewals)
// that run to currentPeriodEnd and then either renew or lapse. Once lapsed,
// access falls back to the trial clock (long past → 'expired').
const RECURRING_TIERS = ['monthly', 'pass3', 'pass6'];

// Can this account start the card-up-front free trial for the NCMHCE?
// One trial per account: never for a guest, never once any plan has been on
// the account, never after a Stripe trial (trialUsedAt) or the legacy no-card
// trial (trialStartedAt), and not while an admin-granted trial is running.
function cardTrialEligible(user, now = new Date()) {
  if (!user || user.isGuest) return false;
  const sub = user.subscription || {};
  if (sub.tier && sub.tier !== 'free') return false;
  if (sub.trialUsedAt || user.trialStartedAt) return false;
  return !(trialEndFor(user) > now);
}

function accessFor(user, now = new Date()) {
  const out = { accessLevel: 'free', gateReason: null, trialEndsAt: null, subscriptionTier: 'free', cardTrial: false, trialEligible: false };
  if (!user) return out;

  const sub = user.subscription || {};
  const tier = sub.tier || 'free';
  const expired = !!(sub.currentPeriodEnd && new Date(sub.currentPeriodEnd) < now);

  // Guarantee tier gate: past the current period and no check-in on file →
  // blocked until the next check-in lands (an uploaded score letter or exam
  // appointment confirmation). A 'pending' report means the member has met
  // the check-in requirement — access resumes immediately while admin review
  // runs in the background; the member isn't held hostage to review latency.
  // An approved extension sets a new currentPeriodEnd 3 months out, so once
  // that lapses the gate returns. 'passed' never gates (nothing to gate).
  if (tier === 'guarantee' && expired) {
    const srStatus = (sub.scoreReport && sub.scoreReport.status) || 'none';
    const checkedIn = srStatus === 'pending' || srStatus === 'passed';
    if (!checkedIn) {
      out.accessLevel = 'gated';
      out.gateReason = isForfeited(sub.scoreReport, now) ? 'guarantee_forfeited' : 'score_report_required';
      return out;
    }
  }

  // A recurring plan still inside its Stripe free trial: full access, shown as
  // a trial that ends (and bills) at currentPeriodEnd. routes/payment.js moves
  // currentPeriodEnd to "now" if the card is declined when the trial ends, so
  // a failed conversion drops to 'expired' here without a special case.
  if (RECURRING_TIERS.includes(tier) && sub.status === 'trialing' && !expired) {
    out.accessLevel = 'trial';
    out.cardTrial = true;
    out.trialEndsAt = sub.currentPeriodEnd || null;
    return out;
  }

  out.trialEndsAt = trialEndFor(user);

  // A lapsed recurring plan falls back to the trial clock (long past → 'expired').
  if (RECURRING_TIERS.includes(tier) && expired) {
    out.accessLevel = trialLevel(user);
  } else {
    out.accessLevel = tier === 'free' ? trialLevel(user) : 'paid';
  }
  // The plan behind that level, for features sold on one plan only.
  out.subscriptionTier = out.accessLevel === 'paid' ? tier : 'free';
  if (out.accessLevel === 'expired') out.trialEligible = cardTrialEligible(user, now);
  if (out.accessLevel !== 'trial') out.trialEndsAt = out.trialEndsAt > new Date(0) ? out.trialEndsAt : null;
  return out;
}

module.exports = { accessFor, cardTrialEligible, RECURRING_TIERS };
