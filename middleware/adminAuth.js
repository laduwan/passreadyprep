// Gate for admin-only actions (reviewing and publishing cases).
// Set ADMIN_TOKEN in your environment; the review page sends it as a header.
module.exports = function requireAdmin(req, res, next) {
  if (!process.env.ADMIN_TOKEN) {
    return res.status(500).json({ error: 'Admin access is not configured on the server' });
  }
  const token = req.headers['x-admin-token'];
  if (!token || token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Invalid admin token' });
  }
  next();
};
