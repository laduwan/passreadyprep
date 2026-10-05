// ============================================================================
// NCE access rules — separate from the NCMHCE paywall in routes/content.js.
//
// NCE is billed on its own (User.nceAccess), and its free trial starts the
// first time the account opens NCE study rather than at signup, so a long-time
// NCMHCE member who adds NCE still gets a fair trial.
//
// Levels (same vocabulary the NCMHCE side uses):
//   'free'    — no token: teaser only
//   'trial'   — within NCE_TRIAL_DAYS of the account's first NCE visit
//   'expired' — trial over, no active NCE plan
//   'paid'    — active nce_* plan
//   'gated'   — NCE Pass Guarantee past its 6-month check-in, score report not
//               yet approved (same rule as the NCMHCE guarantee)
// ============================================================================

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { TRIAL_DAYS } = require('./trial');

const NCE_TRIAL_DAYS = Math.max(1, parseInt(process.env.NCE_TRIAL_DAYS || String(TRIAL_DAYS), 10) || TRIAL_DAYS);
const DAY = 24 * 60 * 60 * 1000;

function nceTrialEnd(user) {
  const a = (user && user.nceAccess) || {};
  if (!a.trialStartedAt) return null;
  const standard = new Date(new Date(a.trialStartedAt).getTime() + NCE_TRIAL_DAYS * DAY);
  // An admin-granted account trial (User.trialEndsAt) also covers NCE.
  const granted = user.trialEndsAt ? new Date(user.trialEndsAt) : null;
  return granted && granted > standard ? granted : standard;
}

function nceLevel(user, now = new Date()) {
  const a = (user && user.nceAccess) || {};
  const tier = a.tier || 'free';
  const end = a.currentPeriodEnd ? new Date(a.currentPeriodEnd) : null;
  if (tier === 'nce_guarantee' && end && end <= now) {
    const sr = (a.scoreReport && a.scoreReport.status) || 'none';
    // An approved extension moves currentPeriodEnd 3 months out; once that
    // lapses the check-in is due again (same rule as routes/content.js).
    return sr === 'passed' ? 'paid' : 'gated';
  }
  if (tier !== 'free' && (!end || end > now)) return 'paid';
  const trialEnd = nceTrialEnd(user);
  return trialEnd && trialEnd > now ? 'trial' : 'expired';
}

// Middleware: attaches req.nceAccessLevel (+ req.userId, req.nceUser when signed
// in). Starts the NCE trial clock on the first signed-in visit.
async function resolveNceAccess(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) { req.nceAccessLevel = 'free'; return next(); }

  let payload;
  try { payload = jwt.verify(token, process.env.JWT_SECRET); }
  catch (_) { req.nceAccessLevel = 'free'; return next(); }

  try {
    const user = await User.findById(payload.sub).select('nceAccess nceExamDate trialEndsAt sessionVersion');
    if (!user) { req.nceAccessLevel = 'free'; return next(); }
    if (user.sessionVersion != null && user.sessionVersion !== payload.sv) {
      return res.status(401).json({
        error: 'Session invalidated — your account was signed in on another device. Please sign in again.',
        code: 'SESSION_INVALIDATED',
      });
    }
    if (!user.nceAccess || !user.nceAccess.trialStartedAt) {
      const startedAt = new Date();
      await User.updateOne(
        { _id: user._id, 'nceAccess.trialStartedAt': { $exists: false } },
        { $set: { 'nceAccess.trialStartedAt': startedAt } }
      );
      user.nceAccess = Object.assign({}, user.nceAccess && user.nceAccess.toObject ? user.nceAccess.toObject() : user.nceAccess, { trialStartedAt: startedAt });
    }
    req.userId = payload.sub;
    req.nceUser = user;
    req.nceAccessLevel = nceLevel(user);
    req.nceTrialEndsAt = nceTrialEnd(user);
    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = { NCE_TRIAL_DAYS, nceTrialEnd, nceLevel, resolveNceAccess };
