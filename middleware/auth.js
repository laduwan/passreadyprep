const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Gatekeeper. Reads the Bearer token, confirms it's valid, and verifies
// the session version matches the database. If another device has logged in
// since this token was issued, the session version won't match and this
// request is rejected — effectively one active session per account.
module.exports = async function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) return res.status(401).json({ error: 'Not signed in' });

  let payload;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ error: 'Session expired — please sign in again' });
  }

  // Check session version against the database.
  // If someone else logged in on another device, their login bumped the version
  // and this token is now stale — reject it.
  try {
    const user = await User.findById(payload.sub).select('sessionVersion');
    if (!user) return res.status(401).json({ error: 'Account not found' });

    if (user.sessionVersion !== payload.sv) {
      return res.status(401).json({
        error: 'Session invalidated — your account was signed in on another device. Please sign in again.',
        code: 'SESSION_INVALIDATED',
      });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Could not verify session' });
  }

  req.userId = payload.sub;
  next();
};
