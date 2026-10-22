const express = require('express');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const requireAuth = require('../middleware/auth');
const { sendMail } = require('../utils/mailer');
const { logActivity } = require('../utils/activity');

const router = express.Router();

// ═══════════════════════════════════════════
// IN-MEMORY RATE LIMITER — 8 registration attempts / IP / hour
// ═══════════════════════════════════════════
const registerRateLimitStore = new Map();
const REGISTER_HOURLY_LIMIT = 8;

function checkRegisterRateLimit(ip) {
  const hourBucket = Math.floor(Date.now() / (60 * 60 * 1000));
  const key = `${ip}:${hourBucket}`;
  if (registerRateLimitStore.size > 10000) registerRateLimitStore.clear();
  const count = registerRateLimitStore.get(key) || 0;
  if (count >= REGISTER_HOURLY_LIMIT) return false;
  registerRateLimitStore.set(key, count + 1);
  return true;
}

// Guest accounts (iOS app — see isGuest in models/User.js) get a placeholder
// address on this reserved domain. utils/mailer.js never sends to it.
const GUEST_EMAIL_DOMAIN = 'guest.passreadyprep.invalid';

// POST /api/auth/guest is called once per device, on the first purchase or
// restore, so it gets its own small allowance per IP per hour.
const guestRateLimitStore = new Map();
const GUEST_HOURLY_LIMIT = 10;

function checkGuestRateLimit(ip) {
  const hourBucket = Math.floor(Date.now() / (60 * 60 * 1000));
  const key = `${ip}:${hourBucket}`;
  if (guestRateLimitStore.size > 10000) guestRateLimitStore.clear();
  const count = guestRateLimitStore.get(key) || 0;
  if (count >= GUEST_HOURLY_LIMIT) return false;
  guestRateLimitStore.set(key, count + 1);
  return true;
}

// The guest account behind a request's Bearer token, or null (no token, a
// stale token, or a normal account).
async function guestFromRequest(req) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return null;
  let payload;
  try { payload = jwt.verify(token, process.env.JWT_SECRET); } catch (_) { return null; }
  const user = await User.findById(payload.sub);
  if (!user || !user.isGuest || user.sessionVersion !== payload.sv) return null;
  return user;
}

// Makes the signed token a new account/sign-in hands back to the browser.
// Embeds sessionVersion (sv) so the middleware can detect stale sessions.
function signToken(user) {
  return jwt.sign(
    { sub: user._id.toString(), sv: user.sessionVersion },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
}

// Only the safe fields — never send the password hash to the browser.
function publicUser(user) {
  const nce = user.nceAccess || {};
  return {
    id: user._id,
    email: user.isGuest ? '' : user.email,
    isGuest: !!user.isGuest,
    name: user.name,
    examDate: user.examDate || null,
    prefs: user.prefs,
    subscription: user.subscription,
    // NCE plan summary (billed separately — see models/User.js), so the
    // account page can show and manage both plans without a second call.
    nceAccess: {
      tier: nce.tier || 'free',
      status: nce.status || 'active',
      source: nce.source || null,
      currentPeriodEnd: nce.currentPeriodEnd || null,
      cancelAtPeriodEnd: !!nce.cancelAtPeriodEnd,
    },
    guidePurchasedAt: user.guidePurchasedAt || null,
  };
}

// SHA-256 of a reset token. We only ever store this hash, never the raw token.
function hashToken(raw) {
  return crypto.createHash('sha256').update(raw).digest('hex');
}

// Best base URL for building links in emails: prefer an explicit APP_URL,
// otherwise fall back to the request's host (https on Render).
function baseUrl(req) {
  if (process.env.APP_URL) return process.env.APP_URL.replace(/\/+$/, '');
  const host = req.get('host');
  return host ? 'https://' + host : '';
}

// POST /api/auth/register — create an account
router.post('/register', async (req, res) => {
  try {
    const { email, password, name, termsAccepted, website, phone, smsOptedIn } = req.body || {};

    // Honeypot: "website" is a hidden field real users never see or fill.
    // Bots that auto-fill every input populate it, so we quietly pretend to
    // succeed without creating an account or sending anything.
    if (website) {
      return res.status(201).json({
        token: 'noop',
        user: { id: null, email, name, prefs: {}, subscription: {} },
      });
    }

    const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown';
    if (!checkRegisterRateLimit(ip)) {
      return res.status(429).json({ error: 'Too many attempts. Please try again in a bit.' });
    }

    if (!email || !password)
      return res.status(400).json({ error: 'Email and password are required' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return res.status(400).json({ error: 'Please enter a valid email address' });
    if (password.length < 8)
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    if (!termsAccepted)
      return res.status(400).json({ error: 'You must agree to the Terms of Service and Privacy Policy to create an account' });

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing)
      return res.status(409).json({ error: 'An account with that email already exists' });

    const passwordHash = await bcrypt.hash(password, 12);
    // SMS opt-in is only recorded when the user both ticks the box AND provides
    // a phone number — no number or no consent means we store neither, matching
    // the carrier rule that consent cannot be pre-checked or implied.
    const normalizedPhone = typeof phone === 'string' ? phone.replace(/[^\d+]/g, '').slice(0, 20) : '';
    const opted = smsOptedIn === true && normalizedPhone.length >= 10;
    const profile = {
      email, passwordHash, name,
      termsAcceptedAt: new Date(),
      termsVersion: 'june-2026',
      phone: opted ? normalizedPhone : null,
      smsOptedIn: opted,
      smsOptedInAt: opted ? new Date() : undefined,
    };

    // Signing up from the iOS app while using a guest account: that account
    // becomes the real one, so anything bought as a guest stays with it.
    // createdAt restarts so the free trial runs from now (utils/trial.js).
    const guest = await guestFromRequest(req);
    if (guest) {
      // Straight to the collection: Mongoose treats createdAt as immutable.
      const fields = { ...profile, email: email.toLowerCase().trim(), isGuest: false, createdAt: new Date(), updatedAt: new Date() };
      Object.keys(fields).forEach((k) => fields[k] === undefined && delete fields[k]);
      await User.collection.updateOne({ _id: guest._id }, { $set: fields });
      const user = await User.findById(guest._id);
      logActivity({ type: 'user.registered', severity: 'info', email: user.email, userId: user._id, message: 'New account created (from an app guest account)', req });
      return res.status(201).json({ token: signToken(user), user: publicUser(user) });
    }

    const user = await User.create({
      email, passwordHash, name,
      termsAcceptedAt: new Date(),
      termsVersion: 'june-2026',
      phone: opted ? normalizedPhone : null,
      smsOptedIn: opted,
      smsOptedInAt: opted ? new Date() : undefined,
    });

    logActivity({ type: 'user.registered', severity: 'info', email: user.email, userId: user._id, message: 'New account created', req });
    return res.status(201).json({ token: signToken(user), user: publicUser(user) });
  } catch (err) {
    console.error('register error', err);
    return res.status(500).json({ error: 'Something went wrong creating your account' });
  }
});

// POST /api/auth/guest — a guest account for the iOS app (App Store guideline
// 5.1.1(v): buying must not require registration). native-iap.js calls this
// on the first purchase or restore when nobody is signed in, keeps the token
// on the device, and the purchase is recorded against this account. No
// personal information is asked for or stored. Registering later from the
// app upgrades this same account (see /register above).
router.post('/guest', async (req, res) => {
  try {
    const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown';
    if (!checkGuestRateLimit(ip)) {
      return res.status(429).json({ error: 'Too many attempts. Please try again in a bit.' });
    }
    const id = crypto.randomBytes(12).toString('hex');
    const passwordHash = await bcrypt.hash(crypto.randomBytes(32).toString('hex'), 12);
    const user = await User.create({ email: `guest-${id}@${GUEST_EMAIL_DOMAIN}`, passwordHash, isGuest: true });
    logActivity({ type: 'user.guest_created', severity: 'info', userId: user._id, message: 'Guest account created in the iOS app (purchase without sign-up)', req });
    return res.status(201).json({ token: signToken(user), user: publicUser(user) });
  } catch (err) {
    console.error('guest account error', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

// POST /api/auth/login — sign in
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password)
      return res.status(400).json({ error: 'Email and password are required' });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      logActivity({ type: 'user.login_failed', severity: 'warn', email: (email || '').toLowerCase(), message: 'No account for that email', req });
      return res.status(401).json({ error: 'Email or password is incorrect' });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      logActivity({ type: 'user.login_failed', severity: 'warn', email: user.email, userId: user._id, message: 'Wrong password', req });
      return res.status(401).json({ error: 'Email or password is incorrect' });
    }

    // Bump session version — invalidates any tokens issued before this login.
    // Anyone sharing credentials gets kicked out the moment the real user signs in.
    user.sessionVersion = (user.sessionVersion || 0) + 1;
    await user.save();

    logActivity({ type: 'user.login', severity: 'info', email: user.email, userId: user._id, message: 'Signed in', req });
    return res.json({ token: signToken(user), user: publicUser(user) });
  } catch (err) {
    console.error('login error', err);
    return res.status(500).json({ error: 'Something went wrong signing you in' });
  }
});

// GET /api/auth/me — confirm who's signed in
router.get('/me', requireAuth, async (req, res) => {
  const user = await User.findById(req.userId);
  if (!user) return res.status(404).json({ error: 'Account not found' });
  return res.json({ user: publicUser(user) });
});

// PATCH /api/auth/prefs — save the signed-in user's accessibility preferences.
// Only the three fields the User model defines are accepted; anything else is
// ignored. Saving prefs never touches sessionVersion, so the token stays valid.
router.patch('/prefs', requireAuth, async (req, res) => {
  try {
    const a = req.body && req.body.accessibility;
    const v = req.body && req.body.voice;
    const hasA = !!a && typeof a === 'object';
    const hasV = !!v && typeof v === 'object';
    if (!hasA && !hasV)
      return res.status(400).json({ error: 'No preferences provided' });

    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'Account not found' });

    if (!user.prefs) user.prefs = {};
    if (hasA) {
      if (!user.prefs.accessibility) user.prefs.accessibility = {};
      if (typeof a.highContrast === 'boolean') user.prefs.accessibility.highContrast = a.highContrast;
      if (typeof a.dyslexiaFont === 'boolean') user.prefs.accessibility.dyslexiaFont = a.dyslexiaFont;
      if (typeof a.reducedMotion === 'boolean') user.prefs.accessibility.reducedMotion = a.reducedMotion;
      user.markModified('prefs.accessibility');
    }
    // Read-aloud speed (a11y.js widget). Clamped to 0.5–2.
    if (hasV && typeof v.speed === 'number' && Number.isFinite(v.speed)) {
      if (!user.prefs.voice) user.prefs.voice = {};
      user.prefs.voice.speed = Math.min(2, Math.max(0.5, v.speed));
      user.markModified('prefs.voice');
    }
    await user.save();

    return res.json({ user: publicUser(user) });
  } catch (err) {
    console.error('prefs update error', err);
    return res.status(500).json({ error: 'Could not save preferences' });
  }
});

// PATCH /api/auth/exam-date — save the user's target NCMHCE exam date.
// Accepts { examDate: "YYYY-MM-DD" } or { examDate: null } to clear.
// Also syncs to localStorage key on the client side for the readiness module.
router.patch('/exam-date', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'Account not found' });

    const raw = req.body && req.body.examDate;
    if (raw === null || raw === '') {
      user.examDate = null;
    } else {
      const parsed = new Date(raw);
      if (isNaN(parsed.getTime())) return res.status(400).json({ error: 'Invalid date' });
      user.examDate = parsed;
    }
    await user.save();
    return res.json({ user: publicUser(user) });
  } catch (err) {
    console.error('exam-date update error', err);
    return res.status(500).json({ error: 'Could not save exam date' });
  }
});

// POST /api/auth/forgot-password — start a password reset.
// Always responds the same way whether or not the email exists, so the endpoint
// can't be used to discover which emails have accounts (no user enumeration).
router.post('/forgot-password', async (req, res) => {
  const generic = { ok: true, message: 'If an account exists for that email, a reset link is on its way.' };
  try {
    const email = ((req.body && req.body.email) || '').toLowerCase().trim();
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const user = await User.findOne({ email });
    if (user) {
      const rawToken = crypto.randomBytes(32).toString('hex');
      user.resetPasswordTokenHash = hashToken(rawToken);
      user.resetPasswordExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
      await user.save();
      logActivity({ type: 'password.reset_requested', severity: 'info', email: user.email, userId: user._id, message: 'Reset link requested', req });

      const link = baseUrl(req) + '/reset-password.html?token=' + rawToken;
      const text =
        'We received a request to reset your PassReady Prep password.\n\n' +
        'Reset it here (link expires in 1 hour):\n' + link + '\n\n' +
        "If you didn't request this, you can safely ignore this email — your password won't change.";
      const html =
        '<p>We received a request to reset your PassReady Prep password.</p>' +
        '<p><a href="' + link + '" style="display:inline-block;background:#10B981;color:#04261C;' +
        'font-weight:700;text-decoration:none;padding:11px 20px;border-radius:8px">Reset your password</a></p>' +
        '<p style="color:#475569;font-size:13px">This link expires in 1 hour. ' +
        "If you didn't request this, you can safely ignore this email — your password won't change.</p>" +
        '<p style="color:#94a3b8;font-size:12px">If the button doesn\'t work, paste this into your browser:<br>' + link + '</p>';

      await sendMail({ to: email, subject: 'Reset your PassReady Prep password', html, text });
    }

    return res.json(generic);
  } catch (err) {
    console.error('forgot-password error', err);
    // Still respond generically so errors don't leak whether the email exists.
    return res.json(generic);
  }
});

// POST /api/auth/reset-password — complete a password reset.
// Looks the user up by the token's HASH and a non-expired window. On success,
// sets the new password and bumps sessionVersion (logging out every existing
// session, since the person resetting may not be the one currently signed in).
router.post('/reset-password', async (req, res) => {
  try {
    const { token, password } = req.body || {};
    if (!token || !password)
      return res.status(400).json({ error: 'A reset token and new password are required' });
    if (password.length < 8)
      return res.status(400).json({ error: 'Password must be at least 8 characters' });

    const user = await User.findOne({
      resetPasswordTokenHash: hashToken(String(token)),
      resetPasswordExpires: { $gt: new Date() },
    });
    if (!user)
      return res.status(400).json({ error: 'This reset link is invalid or has expired. Please request a new one.' });

    user.passwordHash = await bcrypt.hash(password, 12);
    user.resetPasswordTokenHash = null; // single-use: invalidate the link
    user.resetPasswordExpires = null;
    user.sessionVersion = (user.sessionVersion || 0) + 1; // sign out all sessions
    await user.save();

    logActivity({ type: 'password.reset_completed', severity: 'warn', email: user.email, userId: user._id, message: 'Password was reset', req });
    return res.json({ ok: true, message: 'Your password has been reset. You can now sign in.' });
  } catch (err) {
    console.error('reset-password error', err);
    return res.status(500).json({ error: 'Could not reset your password. Please try again.' });
  }
});

// DELETE /api/auth/account — the signed-in user permanently deletes their own
// account (App Store guideline 5.1.1(v) requires this in-app). Needs the
// current password. A still-renewing Monthly subscription blocks deletion
// (409) so nobody is billed after their account is gone; they cancel first.
// Study data is removed like the admin delete, plus the flashcard and
// study-history sync docs. Suggestions are kept but detached from the person;
// ActivityEvent is kept as the audit trail, as with the admin delete.
router.delete('/account', requireAuth, async (req, res) => {
  try {
    const { password } = req.body || {};
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'Account not found' });

    // A guest account has no password anyone knows; holding its token on the
    // device is the proof of ownership.
    if (!user.isGuest && !password) return res.status(400).json({ error: 'Enter your password to delete your account' });
    const ok = user.isGuest || await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      logActivity({ type: 'user.delete_failed', severity: 'warn', email: user.email, userId: user._id, message: 'Wrong password on account deletion', req });
      return res.status(401).json({ code: 'wrong_password', error: 'Password is incorrect' });
    }

    const sub = user.subscription || {};
    // Canceled-but-running subscriptions (cancelAtPeriodEnd) won't bill again.
    // A plan billed by Apple is not blocked: we cannot cancel it for them, and
    // App Store rules say deletion must not depend on it — the page tells them
    // to cancel it in their Apple ID settings (delete-account.html).
    if (sub.tier === 'monthly' && sub.source !== 'apple' && ['active', 'past_due'].includes(sub.status) && !sub.cancelAtPeriodEnd) {
      return res.status(409).json({
        code: 'active_subscription',
        error: 'Your Monthly subscription is still active. Cancel it first so you are not billed again, then delete your account.',
      });
    }

    const Attempt = require('../models/Attempt');
    const StudyActivity = require('../models/StudyActivity');
    const FlashcardProgress = require('../models/FlashcardProgress');
    const StudyHistorySync = require('../models/StudyHistorySync');
    const Suggestion = require('../models/Suggestion');
    const AppleTransaction = require('../models/AppleTransaction');

    const email = user.email;
    await Attempt.deleteMany({ userId: user._id });
    await StudyActivity.deleteMany({ userId: user._id });
    await FlashcardProgress.deleteMany({ userId: user._id });
    await StudyHistorySync.deleteMany({ userId: user._id });
    // Release any App Store purchases, so "Restore purchases" can bring them
    // onto a new account later (the purchase itself belongs to the Apple ID).
    await AppleTransaction.deleteMany({ userId: user._id });
    await Suggestion.updateMany({ userId: user._id }, { $set: { userId: null }, $unset: { email: 1 } });
    await User.findByIdAndDelete(user._id);

    logActivity({ type: 'user.account_deleted', severity: 'warn', email, message: 'User deleted their own account', req });
    return res.json({ ok: true });
  } catch (err) {
    console.error('account delete error', err);
    return res.status(500).json({ error: 'Could not delete your account' });
  }
});

module.exports = router;
module.exports.publicUser = publicUser; // shared with routes/applePayment.js
module.exports.GUEST_EMAIL_DOMAIN = GUEST_EMAIL_DOMAIN;
