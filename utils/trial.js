// ============================================================================
// Free-trial rules — shared by the content paywall (routes/content.js) and the
// trial reminder emails (jobs/trialReminders.js) so both agree on exactly when
// an account's trial ends.
// ============================================================================

// The standard free trial every registered account gets, counted from the
// first case it opens (User.trialStartedAt), not from signup.
// Individual accounts can be granted a longer one (see trialEndsAt on the
// User model); this is the default that applies to everyone else.
// TRIAL_DAYS in the environment overrides it without a code deploy.
const TRIAL_DAYS = Math.max(1, parseInt(process.env.TRIAL_DAYS || '7', 10) || 7);

// Registered accounts get full access for TRIAL_DAYS from the first case they
// open (trialStartedAt, set once by routes/content.js), then hit the paywall —
// unless an admin granted this one account a longer trial, which wins for as
// long as it lasts and then falls back to the standard rule.
//
// An account with no trialStartedAt hasn't started its trial yet. It counts as
// active (TRIAL_DAYS from now) so nothing is gated before the first case; the
// clock only begins when that case is opened.
function trialEndFor(user) {
  // Guest accounts (iOS app, see models/User.js) exist to hold a purchase, so
  // they get no free trial; registering turns one into a normal account whose
  // trial starts on its first case.
  if (user.isGuest) return new Date(0);
  const granted = user.trialEndsAt ? new Date(user.trialEndsAt) : null;
  const started = user.trialStartedAt ? new Date(user.trialStartedAt) : new Date();
  const standard = new Date(started.getTime() + TRIAL_DAYS * 24 * 60 * 60 * 1000);
  return granted && granted > standard ? granted : standard;
}

function trialLevel(user) {
  return trialEndFor(user) > new Date() ? 'trial' : 'expired';
}

module.exports = { TRIAL_DAYS, trialEndFor, trialLevel };
