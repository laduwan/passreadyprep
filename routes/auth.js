const express = require('express');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const requireAuth = require('../middleware/auth');
const { sendMail } = require('../utils/mailer');

const router = express.Router();

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
  return {
    id: user._id,
    email: user.email,
    name: user.name,
    prefs: user.prefs,
    subscription: user.subscription,
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
    const { email, password, name, termsAccepted } = req.body || {};
    if (!email || !password)
      return res.status(400).json({ error: 'Email and password are required' });
    if (password.length < 8)
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    if (!termsAccepted)
      return res.status(400).json({ error: 'You must agree to the Terms of Service and Privacy Policy to create an account' });

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing)
      return res.status(409).json({ error: 'An account with that email already exists' });

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({
      email, passwordHash, name,
      termsAcceptedAt: new Date(),
      termsVersion: 'june-2026',
    });

    return res.status(201).json({ token: signToken(user), user: publicUser(user) });
  } catch (err) {
    console.error('register error', err);
    return res.status(500).json({ error: 'Something went wrong creating your account' });
  }
});

// POST /api/auth/login — sign in
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password)
      return res.status(400).json({ error: 'Email and password are required' });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(401).json({ error: 'Email or password is incorrect' });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: 'Email or password is incorrect' });

    // Bump session version — invalidates any tokens issued before this login.
    // Anyone sharing credentials gets kicked out the moment the real user signs in.
    user.sessionVersion = (user.sessionVersion || 0) + 1;
    await user.save();

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
    if (!a || typeof a !== 'object')
      return res.status(400).json({ error: 'No preferences provided' });

    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: 'Account not found' });

    if (!user.prefs) user.prefs = {};
    if (!user.prefs.accessibility) user.prefs.accessibility = {};
    if (typeof a.highContrast === 'boolean') user.prefs.accessibility.highContrast = a.highContrast;
    if (typeof a.dyslexiaFont === 'boolean') user.prefs.accessibility.dyslexiaFont = a.dyslexiaFont;
    if (typeof a.reducedMotion === 'boolean') user.prefs.accessibility.reducedMotion = a.reducedMotion;
    user.markModified('prefs.accessibility');
    await user.save();

    return res.json({ user: publicUser(user) });
  } catch (err) {
    console.error('prefs update error', err);
    return res.status(500).json({ error: 'Could not save preferences' });
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

    return res.json({ ok: true, message: 'Your password has been reset. You can now sign in.' });
  } catch (err) {
    console.error('reset-password error', err);
    return res.status(500).json({ error: 'Could not reset your password. Please try again.' });
  }
});

module.exports = router;
