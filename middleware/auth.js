const jwt = require('jsonwebtoken');

// Gatekeeper. Put this in front of any route that needs the person to be signed in.
// It reads their token, confirms it's valid, and attaches their id to the request.
module.exports = function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) return res.status(401).json({ error: 'Not signed in' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.sub;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Session expired — please sign in again' });
  }
};
