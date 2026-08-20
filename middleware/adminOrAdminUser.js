const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Accepts EITHER the legacy shared ADMIN_TOKEN (x-admin-token header) OR a
// Bearer JWT belonging to a signed-in user with role 'admin'. This lets
// existing admin pages keep working with the token while real per-person
// admin accounts roll out alongside it.
module.exports = async function adminOrAdminUser(req, res, next) {
  const legacyToken = req.headers['x-admin-token'];
  if (process.env.ADMIN_TOKEN && legacyToken === process.env.ADMIN_TOKEN) {
    return next();
  }

  const header = req.headers.authorization || '';
  const jwtToken = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (jwtToken) {
    try {
      const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);
      const user = await User.findById(payload.sub).select('role sessionVersion');
      if (user && user.role === 'admin' && user.sessionVersion === payload.sv) {
        req.userId = payload.sub;
        return next();
      }
    } catch (err) {
      // fall through to reject below
    }
  }

  return res.status(401).json({ error: 'Admin access required' });
};
