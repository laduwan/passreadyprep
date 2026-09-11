const express = require('express');
const mongoose = require('mongoose');
const requireAdmin = require('../middleware/adminOrAdminUser');
const User = require('../models/User');
const Announcement = require('../models/Announcement');
const { sendMail } = require('../utils/mailer');
const { segmentFilter } = require('../utils/segments');
const { logActivity } = require('../utils/activity');

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
// Body: { subject, html, segment, broadcastKey, emails? }
// broadcastKey is used for idempotency — users who already received this key are skipped.
// segment 'emails' targets only the registered accounts listed in `emails`.
router.post('/send', async (req, res) => {
  try {
    const { subject, html, segment, broadcastKey } = req.body || {};
    if (!subject || !html) return res.status(400).json({ error: 'subject and html required' });
    if (!broadcastKey) return res.status(400).json({ error: 'broadcastKey required for idempotency' });

    let filter;
    let listed = null;
    if (segment === 'emails') {
      listed = normalizeEmails(req.body.emails);
      if (listed.length === 0) return res.status(400).json({ error: 'Add at least one email address' });
      if (listed.length > 500) return res.status(400).json({ error: 'Limit is 500 addresses per send' });
      filter = { 'prefs.digestOptOut': { $ne: true }, email: { $in: listed } };
    } else {
      filter = buildFilter(segment || 'all');
    }
    // Exclude users who already received this broadcast
    filter[`broadcastsSent.${broadcastKey}`] = { $exists: false };

    const users = await User.find(filter).select('email name').lean();

    // For a pasted list, report addresses that aren't accounts (or opted out /
    // already received this key) so a typo doesn't vanish silently.
    let skipped = [];
    if (listed) {
      const hit = new Set(users.map((u) => u.email));
      skipped = listed.filter((e) => !hit.has(e));
    }

    if (users.length === 0) return res.json({ sent: 0, failed: 0, total: 0, skipped });

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

    return res.json({ sent, failed, total: users.length, skipped });
  } catch (err) {
    console.error('broadcast send error', err);
    return res.status(500).json({ error: 'Broadcast failed' });
  }
});

// POST /api/admin/broadcast/direct — one-to-one email to a single member
// (support replies, account notices). Plain-text message, wrapped in the
// PassReady email frame server-side. Not a marketing send, so it does not
// check the digest opt-out and needs no broadcast key.
// Body: { userId, subject, message }
router.post('/direct', async (req, res) => {
  try {
    const { userId, subject, message } = req.body || {};
    if (!mongoose.isValidObjectId(userId)) return res.status(400).json({ error: 'Valid userId required' });
    const subj = String(subject || '').trim();
    const msg = String(message || '').trim();
    if (!subj || !msg) return res.status(400).json({ error: 'Subject and message are required' });
    if (subj.length > 200) return res.status(400).json({ error: 'Subject is too long' });
    if (msg.length > 10000) return res.status(400).json({ error: 'Message is too long' });

    const user = await User.findById(userId).select('email name').lean();
    if (!user) return res.status(404).json({ error: 'User not found' });

    const firstName = (user.name || '').split(' ')[0] || 'there';
    const html = directEmailHtml(msg.replace(/\{\{firstName\}\}/g, firstName));
    const text = msg.replace(/\{\{firstName\}\}/g, firstName);
    const result = await sendMail({ to: user.email, subject: subj, html, text });
    if (!result.ok) return res.status(502).json({ error: 'Email provider rejected the send' });

    logActivity({ type: 'admin.email_sent', severity: 'info', userId: user._id, email: user.email, message: `Admin emailed: ${subj}`, req });
    return res.json({ ok: true, to: user.email });
  } catch (err) {
    console.error('broadcast direct error', err);
    return res.status(500).json({ error: 'Could not send email' });
  }
});

// ── In-app announcements (member pop-up) ─────────────────────────────

// GET /api/admin/broadcast/announcements — newest first, with dismiss counts
router.get('/announcements', async (req, res) => {
  try {
    const list = await Announcement.find().sort({ createdAt: -1 }).limit(50).lean();
    const withCounts = await Promise.all(list.map(async (a) => ({
      ...a,
      dismissedCount: await User.countDocuments({ announcementsDismissed: a._id }),
    })));
    return res.json({ announcements: withCounts });
  } catch (err) {
    console.error('announcements list error', err);
    return res.status(500).json({ error: 'Could not load announcements' });
  }
});

// POST /api/admin/broadcast/announcements
// Body: { title, message, segment, ctaLabel?, ctaUrl?, endsAt? }
router.post('/announcements', async (req, res) => {
  try {
    const b = req.body || {};
    const title = String(b.title || '').trim();
    const message = String(b.message || '').trim();
    if (!title || !message) return res.status(400).json({ error: 'Title and message are required' });

    const ctaUrl = String(b.ctaUrl || '').trim();
    const ctaLabel = String(b.ctaLabel || '').trim();
    if (ctaUrl && !safeUrl(ctaUrl)) return res.status(400).json({ error: 'Button link must start with https:// or /' });
    if (ctaUrl && !ctaLabel) return res.status(400).json({ error: 'Add a button label for the link' });

    let endsAt;
    if (b.endsAt) {
      endsAt = new Date(b.endsAt);
      if (isNaN(endsAt)) return res.status(400).json({ error: 'Invalid end date' });
    }

    const createdBy = req.userId
      ? ((await User.findById(req.userId).select('email').lean()) || {}).email
      : 'admin-token';

    const ann = await Announcement.create({
      title, message,
      segment: ['all', 'paid', 'trial', 'expired'].includes(b.segment) ? b.segment : 'all',
      ctaLabel: ctaUrl ? ctaLabel : undefined,
      ctaUrl: ctaUrl || undefined,
      endsAt,
      createdBy,
    });
    return res.json({ ok: true, announcement: ann });
  } catch (err) {
    if (err.name === 'ValidationError') return res.status(400).json({ error: err.message });
    console.error('announcement create error', err);
    return res.status(500).json({ error: 'Could not post announcement' });
  }
});

// PATCH /api/admin/broadcast/announcements/:id — pause / resume
// Body: { active }
router.patch('/announcements/:id', async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ error: 'Bad id' });
    const ann = await Announcement.findByIdAndUpdate(
      req.params.id, { active: !!(req.body || {}).active }, { new: true }
    );
    if (!ann) return res.status(404).json({ error: 'Not found' });
    return res.json({ ok: true, announcement: ann });
  } catch (err) {
    console.error('announcement update error', err);
    return res.status(500).json({ error: 'Could not update announcement' });
  }
});

// DELETE /api/admin/broadcast/announcements/:id
router.delete('/announcements/:id', async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ error: 'Bad id' });
    const ann = await Announcement.findByIdAndDelete(req.params.id);
    if (!ann) return res.status(404).json({ error: 'Not found' });
    await User.updateMany({ announcementsDismissed: ann._id }, { $pull: { announcementsDismissed: ann._id } });
    return res.json({ ok: true });
  } catch (err) {
    console.error('announcement delete error', err);
    return res.status(500).json({ error: 'Could not delete announcement' });
  }
});

function buildFilter(segment) {
  return { 'prefs.digestOptOut': { $ne: true }, ...segmentFilter(segment) };
}

function normalizeEmails(input) {
  const raw = Array.isArray(input) ? input.join(',') : String(input || '');
  const seen = new Set();
  return raw.split(/[\s,;]+/)
    .map((e) => e.trim().toLowerCase())
    .filter((e) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e) && !seen.has(e) && seen.add(e));
}

function safeUrl(u) {
  return /^https:\/\/[^\s]+$/i.test(u) || (/^\/[^\s]*$/.test(u) && !u.startsWith('//'));
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Same dark frame as the broadcast emails (jobs/broadcast-sept2026.js).
function directEmailHtml(message) {
  const body = escapeHtml(message).replace(/\r?\n/g, '<br>');
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0F172A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:520px;margin:0 auto;padding:32px 20px;">
<div style="text-align:center;margin-bottom:28px;"><span style="font-size:22px;font-weight:800;color:#34D399;">PassReady Prep</span></div>
<div style="background:#1E293B;border-radius:16px;padding:28px;color:#CBD5E1;font-size:15px;line-height:1.6;">${body}</div>
<div style="text-align:center;color:#64748B;font-size:12px;margin-top:18px;">You're receiving this because you have a PassReady Prep account.</div>
</div></body></html>`;
}

module.exports = router;
