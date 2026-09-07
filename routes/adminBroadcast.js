const express = require('express');
const requireAdmin = require('../middleware/adminOrAdminUser');
const User = require('../models/User');
const { sendMail } = require('../utils/mailer');

const router = express.Router();
router.use(requireAdmin);

// GET /api/admin/broadcast/audience — count recipients for a given filter
router.get('/audience', async (req, res) => {
  try {
    const filter = buildFilter(req.query.segment || 'all');
    const count = await User.countDocuments(filter);
    return res.json({ count });
  } catch (err) {
    console.error('broadcast audience error', err);
    return res.status(500).json({ error: 'Could not count audience' });
  }
});

// POST /api/admin/broadcast/send — send a message to the filtered segment
// Body: { subject, html, segment, broadcastKey }
// broadcastKey is used for idempotency — users who already received this key are skipped.
router.post('/send', async (req, res) => {
  try {
    const { subject, html, segment, broadcastKey } = req.body || {};
    if (!subject || !html) return res.status(400).json({ error: 'subject and html required' });
    if (!broadcastKey) return res.status(400).json({ error: 'broadcastKey required for idempotency' });

    const filter = buildFilter(segment || 'all');
    // Exclude users who already received this broadcast
    filter[`broadcastsSent.${broadcastKey}`] = { $exists: false };

    const users = await User.find(filter).select('email name').lean();
    if (users.length === 0) return res.json({ sent: 0, failed: 0, total: 0 });

    let sent = 0, failed = 0;
    for (const user of users) {
      try {
        const firstName = (user.name || '').split(' ')[0] || 'there';
        const personalHtml = html.replace(/\{\{firstName\}\}/g, firstName);
        const result = await sendMail({ to: user.email, subject, html: personalHtml });
        if (result.ok) {
          await User.updateOne(
            { _id: user._id },
            { $set: { [`broadcastsSent.${broadcastKey}`]: new Date() } }
          );
          sent++;
        } else {
          failed++;
        }
      } catch {
        failed++;
      }
      // Brevo rate limit: small delay between sends
      await new Promise((r) => setTimeout(r, 200));
    }

    return res.json({ sent, failed, total: users.length });
  } catch (err) {
    console.error('broadcast send error', err);
    return res.status(500).json({ error: 'Broadcast failed' });
  }
});

function buildFilter(segment) {
  const base = { 'prefs.digestOptOut': { $ne: true } };
  switch (segment) {
    case 'paid':
      return { ...base, 'subscription.tier': { $in: ['monthly', 'pass3', 'guarantee'] } };
    case 'trial':
      return { ...base, 'subscription.tier': 'free', trialEndsAt: { $gte: new Date() } };
    case 'expired':
      return { ...base, 'subscription.tier': 'free', $or: [
        { trialEndsAt: { $lt: new Date() } },
        { trialEndsAt: { $exists: false } },
      ]};
    case 'all':
    default:
      return base;
  }
}

module.exports = router;
