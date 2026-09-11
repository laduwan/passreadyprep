const express = require('express');
const User = require('../models/User');
const adminOrAdminUser = require('../middleware/adminOrAdminUser');

const router = express.Router();
router.use(adminOrAdminUser);

// GET /api/admin-users — list current admins
router.get('/', async (req, res) => {
  try {
    const admins = await User.find({ role: 'admin' }).select('email name createdAt').lean();
    res.json({ admins });
  } catch (err) {
    console.error('list admins error', err);
    res.status(500).json({ error: 'Could not load admins' });
  }
});

// PUT /api/admin-users/role — promote or demote by email
// Body: { email, role: 'admin' | 'user' }
router.put('/role', async (req, res) => {
  try {
    const { email, role } = req.body || {};
    if (!email || !['admin', 'user'].includes(role)) {
      return res.status(400).json({ error: 'email and a valid role are required' });
    }
    const user = await User.findOneAndUpdate(
      { email: email.toLowerCase() },
      { role },
      { new: true }
    ).select('email name role');
    if (!user) return res.status(404).json({ error: 'No account with that email' });
    res.json({ ok: true, user });
  } catch (err) {
    console.error('set admin role error', err);
    res.status(500).json({ error: 'Could not update role' });
  }
});

// GET /api/admin-users/book-receipts — list book-purchase receipts pending review
router.get('/book-receipts', async (req, res) => {
  try {
    const users = await User.find({ 'bookAccess.status': 'pending' })
      .select('email name bookAccess')
      .sort({ 'bookAccess.submittedAt': 1 })
      .lean();
    res.json({ users });
  } catch (err) {
    console.error('list book receipts error', err);
    res.status(500).json({ error: 'Could not load book receipts' });
  }
});

// PUT /api/admin-users/book-receipt — approve or reject a book-purchase receipt
// Body: { email, action: 'approve' | 'reject', note? }
router.put('/book-receipt', async (req, res) => {
  try {
    const { email, action, note } = req.body || {};
    if (!email || !['approve', 'reject'].includes(action)) {
      return res.status(400).json({ error: 'email and a valid action are required' });
    }
    const status = action === 'approve' ? 'approved' : 'rejected';
    const user = await User.findOneAndUpdate(
      { email: email.toLowerCase() },
      {
        $set: {
          'bookAccess.status': status,
          'bookAccess.reviewedAt': new Date(),
          'bookAccess.adminNote': note || null,
        },
      },
      { new: true }
    ).select('email name bookAccess');
    if (!user) return res.status(404).json({ error: 'No account with that email' });
    res.json({ ok: true, user });
  } catch (err) {
    console.error('review book receipt error', err);
    res.status(500).json({ error: 'Could not update book access' });
  }
});

module.exports = router;
