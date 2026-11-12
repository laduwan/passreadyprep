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
//   'free'    — no account, or an account that is not on a plan and whose
//               trial has not started (see trialLevel)
//   'trial'   — on the standard or an admin-granted trial
//   'expired' — trial over, no active paid tier
//   'paid'    — active monthly, pass3, pass6 or guarantee
//   'gated'   — guarantee tier past its period with no check-in on file
//
// `user` needs: subscription, isGuest, trialStartedAt, trialEndsAt.
const { trialEndFor, trialLevel } = require('./trial');
const { isForfeited } = require('./guaranteeRules');

const FALLS_BACK_TO_TRIAL_CLOCK = ['monthly', 'pass3'];

function accessFor(user, now = new Date()) {
  const out = { accessLevel: 'free', gateReason: null, trialEndsAt: null, subscriptionTier: 'free', trialNotStarted: false };
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

  // The standard trial starts on the first case (utils/trial.js). An account
  // whose access rests on that clock but hasn't started it is flagged so the
  // single-case route can start it — only there, never from a list.
  out.trialNotStarted = !user.isGuest && !user.trialStartedAt;
  out.trialEndsAt = trialEndFor(user);

  // Monthly / pass3: if expired, fall back to the trial clock (long past → 'expired').
  if (FALLS_BACK_TO_TRIAL_CLOCK.includes(tier) && expired) {
    out.accessLevel = trialLevel(user);
    return out;
  }

  out.accessLevel = tier === 'free' ? trialLevel(user) : 'paid';
  // The plan behind that level, for features sold on one plan only.
  out.subscriptionTier = out.accessLevel === 'paid' ? tier : 'free';
  return out;
}

module.exports = { accessFor };
