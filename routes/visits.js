const express = require('express');
const crypto = require('crypto');
const PageView = require('../models/PageView');
const requireAdmin = require('../middleware/adminOrAdminUser');

const router = express.Router();

// Pages that exist for the operator, not for visitors — never counted, even if
// a stale cached copy of the beacon script fires from one. The client script
// skips these too; this is the server-side half of the same rule.
const EXCLUDED_PATH_RE = /^\/(admin|review)/i;

// ═══════════════════════════════════════════
// IN-MEMORY RATE LIMITER — caps how much one client can write to the log.
// Same shape as the suggestions limiter: per IP, per hour, reset by clearing
// the map when it grows too large (a restart resets it too, which is fine —
// this exists to stop log flooding, not to be an exact quota).
// ═══════════════════════════════════════════
const rateLimitStore = new Map();
const HOURLY_LIMIT = 240;

function underRateLimit(ip) {
  const key = `${ip}:${new Date().toISOString().slice(0, 13)}`; // YYYY-MM-DDTHH
  if (rateLimitStore.size > 10000) rateLimitStore.clear();
  const count = rateLimitStore.get(key) || 0;
  if (count >= HOURLY_LIMIT) return false;
  rateLimitStore.set(key, count + 1);
  return true;
}

// Render (and any proxy in front of it) puts the real client address in
// X-Forwarded-For; req.ip would be the proxy's. `trust proxy` isn't set on the
// app, so read the first hop ourselves rather than changing a global that other
// routes already depend on.
function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string' && fwd.length) return fwd.split(',')[0].trim();
  return req.ip || req.socket?.remoteAddress || '';
}

function utcDay() {
  return new Date().toISOString().slice(0, 10);
}

// A one-way, day-scoped fingerprint. Including the day means the same visitor
// hashes differently tomorrow, so the log can count a day's uniques without
// ever building a profile that follows someone over time.
function visitorHash(req, day) {
  const salt = process.env.VISIT_HASH_SALT || 'passreadyprep-visit-salt';
  const ua = req.headers['user-agent'] || '';
  return crypto.createHash('sha256')
    .update(`${salt}|${day}|${clientIp(req)}|${ua}`)
    .digest('hex')
    .slice(0, 32);
}

// Keep only the pathname, lowercased and length-capped. Query strings can carry
// emails, reset tokens and Stripe session ids, so they're dropped rather than
// stored.
function normalizePath(raw) {
  if (typeof raw !== 'string' || !raw) return null;
  let p = raw.split('?')[0].split('#')[0].trim();
  if (!p.startsWith('/')) return null;
  if (p.length > 1) p = p.replace(/\/+$/, '') || '/';
  return p.toLowerCase().slice(0, 200);
}

// Referrers are reduced to a bare hostname — enough to see where traffic comes
// from, without keeping the full URL somebody arrived from.
function referrerHost(raw) {
  if (typeof raw !== 'string' || !raw) return '';
  try {
    const host = new URL(raw).hostname.toLowerCase();
    return host.slice(0, 120);
  } catch (err) {
    return '';
  }
}

// ============================================
// PUBLIC — record one pageview
// ============================================
// Fired by /visit-beacon.js via navigator.sendBeacon. Always answers 204 with
// no body: a tracking call must never surface an error to a visitor, and a
// beacon response is discarded by the browser anyway.
router.post('/beacon', async (req, res) => {
  res.status(204).end();

  try {
    const body = req.body || {};
    const path = normalizePath(body.path);
    if (!path || EXCLUDED_PATH_RE.test(path)) return;
    if (!underRateLimit(clientIp(req))) return;

    const day = utcDay();
    await PageView.create({
      path,
      referrerHost: referrerHost(body.referrer),
      day,
      visitorHash: visitorHash(req, day),
    });
  } catch (err) {
    // Never let analytics noise reach the visitor or the error log's alerting.
    console.warn('pageview beacon error:', err.message);
  }
});

// ============================================
// ADMIN — read the numbers (same gate as the rest of the admin API)
// ============================================
// GET /api/visits/stats?days=7 → totals, a daily series, top pages, top referrers.
router.get('/stats', requireAdmin, async (req, res) => {
  try {
    const days = Math.min(Math.max(parseInt(req.query.days, 10) || 7, 1), 90);

    const to = utcDay();
    const from = new Date(Date.now() - (days - 1) * 86400 * 1000).toISOString().slice(0, 10);
    const range = { day: { $gte: from, $lte: to } };

    const [perDay, topPages, topReferrers] = await Promise.all([
      // Two-stage group: collapse to one row per (day, visitor) first, so the
      // second stage can count both views and distinct visitors in one pass.
      PageView.aggregate([
        { $match: range },
        { $group: { _id: { day: '$day', visitor: '$visitorHash' }, views: { $sum: 1 } } },
        { $group: { _id: '$_id.day', views: { $sum: '$views' }, uniques: { $sum: 1 } } },
        { $sort: { _id: 1 } },
      ]),
      PageView.aggregate([
        { $match: range },
        { $group: { _id: '$path', views: { $sum: 1 } } },
        { $sort: { views: -1 } },
        { $limit: 20 },
      ]),
      PageView.aggregate([
        { $match: { ...range, referrerHost: { $ne: '' } } },
        { $group: { _id: '$referrerHost', views: { $sum: 1 } } },
        { $sort: { views: -1 } },
        { $limit: 20 },
      ]),
    ]);

    // Fill the gaps so the series is always `days` long, zeros included.
    const byDay = new Map(perDay.map((r) => [r._id, r]));
    const start = new Date(to + 'T00:00:00Z');
    const daily = [];
    for (let i = days - 1; i >= 0; i--) {
      const day = new Date(start.getTime() - i * 86400 * 1000).toISOString().slice(0, 10);
      const row = byDay.get(day);
      daily.push({ day, views: row ? row.views : 0, uniques: row ? row.uniques : 0 });
    }

    return res.json({
      days,
      from,
      to,
      totalViews: daily.reduce((sum, d) => sum + d.views, 0),
      // Uniques are per-day by design (the hash is day-scoped), so this is the
      // sum of daily uniques — someone who visits on three days counts three
      // times. It's a traffic measure, not a headcount of distinct people.
      uniqueVisitorDays: daily.reduce((sum, d) => sum + d.uniques, 0),
      daily,
      topPages: topPages.map((r) => ({ path: r._id, views: r.views })),
      topReferrers: topReferrers.map((r) => ({ host: r._id, views: r.views })),
    });
  } catch (err) {
    console.error('visit stats error', err);
    return res.status(500).json({ error: 'Could not load visit stats' });
  }
});

module.exports = router;
