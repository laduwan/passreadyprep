const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Gatekeeper. Reads the Bearer token, confirms it's valid, and verifies
// the session version matches the database. The version is bumped by a
// password reset or an admin "sign out everywhere", so tokens from before that
// moment are rejected. An ordinary sign-in on another device does not bump it:
// a member can be signed in on their phone and laptop at the same time.
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

  // Check session version against the database. A password reset or an admin
  // reset bumped it, so this token is stale — reject it.
  try {
    const user = await User.findById(payload.sub).select('sessionVersion');
    if (!user) return res.status(401).json({ error: 'Account not found' });

    if (user.sessionVersion !== payload.sv) {
      return res.status(401).json({
        error: 'Your session is no longer valid. Please sign in again.',
        code: 'SESSION_INVALIDATED',
      });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Could not verify session' });
  }

  req.userId = payload.sub;
  next();
};
