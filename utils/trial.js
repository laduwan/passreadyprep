// ============================================================================
// Free-trial rules — shared by the content paywall (routes/content.js) and the
// trial reminder emails (jobs/trialReminders.js) so both agree on exactly when
// an account's trial ends.
//
// The free trial now starts in Stripe Checkout with a card on file: the member
// picks a recurring plan, Stripe opens the subscription in 'trialing' status
// for TRIAL_DAYS, and charges the card when the trial ends unless they cancel.
// That trial is read from User.subscription (utils/access.js), not from the
// dates here. What this file still decides:
//   - the legacy no-card trial, for accounts whose clock started on their
//     first case before card-up-front trials shipped (User.trialStartedAt),
//   - an admin-granted trial (User.trialEndsAt: review swaps, comps),
//   - TRIAL_DAYS, which is also the length of the Stripe trial.
// An account with neither has no trial: it is 'expired' until it starts one
// through checkout, and nothing starts a clock on its first case any more.
// ============================================================================

// TRIAL_DAYS in the environment overrides it without a code deploy.
const TRIAL_DAYS = Math.max(1, parseInt(process.env.TRIAL_DAYS || '7', 10) || 7);

// When this account's no-card trial ends (legacy clock or admin grant,
// whichever is later). An account that never started one gets the epoch, so
// it reads as expired. Guest accounts (iOS app, see models/User.js) exist to
// hold a purchase and never get a trial.
function trialEndFor(user) {
  if (user.isGuest) return new Date(0);
  const granted = user.trialEndsAt ? new Date(user.trialEndsAt) : null;
  const standard = user.trialStartedAt
    ? new Date(new Date(user.trialStartedAt).getTime() + TRIAL_DAYS * 24 * 60 * 60 * 1000)
    : new Date(0);
  return granted && granted > standard ? granted : standard;
}

function trialLevel(user) {
  return trialEndFor(user) > new Date() ? 'trial' : 'expired';
}

module.exports = { TRIAL_DAYS, trialEndFor, trialLevel };
