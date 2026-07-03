const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const requireAuth = require('../middleware/auth');

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

module.exports = router;
