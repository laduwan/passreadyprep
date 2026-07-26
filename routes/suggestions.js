const express = require('express');
const jwt = require('jsonwebtoken');
const Suggestion = require('../models/Suggestion');
const User = require('../models/User');
const requireAdmin = require('../middleware/adminAuth');
const { sendMail } = require('../utils/mailer');

const router = express.Router();

const VALID_PLATFORMS = ['counselorready', 'passreadyprep', 'gaitp'];
const VALID_CATEGORIES = ['bug', 'feature-request', 'content', 'billing', 'other'];

// ═══════════════════════════════════════════
// IN-MEMORY RATE LIMITER — 10 submissions / IP / day
// ═══════════════════════════════════════════
const rateLimitStore = new Map();
const DAILY_LIMIT = 10;

function checkRateLimit(ip) {
  const key = `${ip}:${new Date().toISOString().split('T')[0]}`;
  if (rateLimitStore.size > 10000) rateLimitStore.clear();
  const count = rateLimitStore.get(key) || 0;
  if (count >= DAILY_LIMIT) return false;
  rateLimitStore.set(key, count + 1);
  return true;
}

// Resolves the logged-in user if a valid token is present; never blocks
// anonymous submissions.
async function optionalAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return next();

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.sub).select('email name');
    if (user) req.suggestUser = user;
  } catch (err) {
    // invalid/expired token — treat as anonymous, don't error
  }
  next();
}

// ============================================
// PUBLIC — submit a suggestion
// ============================================
router.post('/', optionalAuth, async (req, res) => {
  try {
    if (!checkRateLimit(req.ip)) {
      return res.status(429).json({ error: 'Too many submissions today. Please try again tomorrow.' });
    }

    const { message, category, platform, name, email, pageUrl } = req.body || {};

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'A message is required.' });
    }
    if (message.length > 4000) {
      return res.status(400).json({ error: 'Message is too long.' });
    }

    const suggestion = await Suggestion.create({
      message: message.trim(),
      category: VALID_CATEGORIES.includes(category) ? category : 'other',
      platform: VALID_PLATFORMS.includes(platform) ? platform : 'passreadyprep',
      userId: req.suggestUser?._id || null,
      name: (name || req.suggestUser?.name || '').trim().slice(0, 200),
      email: (email || req.suggestUser?.email || '').trim().slice(0, 200),
      pageUrl: (pageUrl || req.headers.referer || '').slice(0, 500),
      userAgent: (req.headers['user-agent'] || '').slice(0, 300),
    });

    const adminEmail = process.env.ADMIN_ALERT_EMAIL || process.env.MAIL_FROM_EMAIL;
    if (adminEmail) {
      const text =
        `New suggestion submitted — PassReady Prep\n\n` +
        `Category: ${suggestion.category}\n` +
        (suggestion.name ? `Name: ${suggestion.name}\n` : '') +
        (suggestion.email ? `Email: ${suggestion.email}\n` : '') +
        `Page: ${suggestion.pageUrl || 'n/a'}\n\n` +
        `Message:\n${suggestion.message}\n`;

      sendMail({ to: adminEmail, subject: `[Suggestion] PassReady Prep — ${suggestion.category}`, text })
        .then(result => {
          if (result.ok && !result.dev) {
            Suggestion.updateOne({ _id: suggestion._id }, { emailSent: true }).catch(() => {});
          }
        })
        .catch(() => {});
    }

    res.status(201).json({ success: true });
  } catch (error) {
    console.error('Error saving suggestion:', error);
    res.status(500).json({ error: 'Failed to submit suggestion.' });
  }
});

// ============================================
// ADMIN — review submissions (reuses the same x-admin-token gate as /review.html)
// ============================================
router.get('/', requireAdmin, async (req, res) => {
  try {
    const { platform, status, page = 1, limit = 50 } = req.query;
    const query = {};
    if (platform && VALID_PLATFORMS.includes(platform)) query.platform = platform;
    if (status) query.status = status;

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 50));

    const [suggestions, total, counts] = await Promise.all([
      Suggestion.find(query).sort({ createdAt: -1 }).skip((pageNum - 1) * limitNum).limit(limitNum),
      Suggestion.countDocuments(query),
      Suggestion.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]),
    ]);

    res.json({
      success: true,
      suggestions,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
      counts: counts.reduce((acc, c) => ({ ...acc, [c._id]: c.count }), {}),
    });
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    res.status(500).json({ error: 'Failed to fetch suggestions.' });
  }
});

router.patch('/:id', requireAdmin, async (req, res) => {
  try {
    const { status, adminNote } = req.body || {};
    const update = {};
    if (status) update.status = status;
    if (typeof adminNote === 'string') update.adminNote = adminNote;

    const suggestion = await Suggestion.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!suggestion) return res.status(404).json({ error: 'Suggestion not found.' });

    res.json({ success: true, suggestion });
  } catch (error) {
    console.error('Error updating suggestion:', error);
    res.status(500).json({ error: 'Failed to update suggestion.' });
  }
});

router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const suggestion = await Suggestion.findByIdAndDelete(req.params.id);
    if (!suggestion) return res.status(404).json({ error: 'Suggestion not found.' });
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting suggestion:', error);
    res.status(500).json({ error: 'Failed to delete suggestion.' });
  }
});

module.exports = router;
