// ============================================================================
// Free-trial rules — shared by the content paywall (routes/content.js) and the
// trial reminder emails (jobs/trialReminders.js) so both agree on exactly when
// an account's trial ends.
// ============================================================================

// The standard free trial every registered account gets from signup.
// Individual accounts can be granted a longer one (see trialEndsAt on the
// User model); this is the default that applies to everyone else.
// TRIAL_DAYS in the environment overrides it without a code deploy.
const TRIAL_DAYS = Math.max(1, parseInt(process.env.TRIAL_DAYS || '3', 10) || 3);

// Registered accounts get full access for TRIAL_DAYS from signup, then hit the
// paywall — unless an admin granted this one account a longer trial, which wins
// for as long as it lasts and then falls back to the standard rule.
function trialEndFor(user) {
  const granted = user.trialEndsAt ? new Date(user.trialEndsAt) : null;
  const created = user.createdAt ? new Date(user.createdAt) : new Date(0);
  const standard = new Date(created.getTime() + TRIAL_DAYS * 24 * 60 * 60 * 1000);
  return granted && granted > standard ? granted : standard;
}

function trialLevel(user) {
  return trialEndFor(user) > new Date() ? 'trial' : 'expired';
}

module.exports = { TRIAL_DAYS, trialEndFor, trialLevel };
