const express = require('express');
const crypto = require('crypto');
const PageView = require('../models/PageView');
const User = require('../models/User');
const ActivityEvent = require('../models/ActivityEvent');
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

// Campaign tags (utm_source / utm_medium / utm_campaign) are kept as short,
// lower-case labels: letters, digits, space, dash, underscore and dot. Anything
// else is dropped so a crafted link can't write arbitrary text into the log.
function utmValue(raw) {
  if (typeof raw !== 'string' || !raw) return '';
  return raw.trim().toLowerCase().replace(/[^a-z0-9 _.-]/g, '').slice(0, 80);
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
    const utm = body.utm && typeof body.utm === 'object' ? body.utm : {};
    await PageView.create({
      path,
      referrerHost: referrerHost(body.referrer),
      day,
      visitorHash: visitorHash(req, day),
      utmSource: utmValue(utm.source),
      utmMedium: utmValue(utm.medium),
      utmCampaign: utmValue(utm.campaign),
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

    const [perDay, topPages, topReferrers, topCampaigns] = await Promise.all([
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
      // Tagged links: one row per source / medium / campaign, with views and
      // distinct visitor-days, so each YouTube video or ad can be compared.
      PageView.aggregate([
        { $match: { ...range, utmSource: { $nin: ['', null] } } },
        { $group: {
          _id: { source: '$utmSource', medium: { $ifNull: ['$utmMedium', ''] }, campaign: { $ifNull: ['$utmCampaign', ''] } },
          views: { $sum: 1 },
          visitors: { $addToSet: '$visitorHash' },
        } },
        { $project: { views: 1, visitors: { $size: '$visitors' } } },
        { $sort: { views: -1 } },
        { $limit: 30 },
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
      topCampaigns: topCampaigns.map((r) => ({ source: r._id.source, medium: r._id.medium, campaign: r._id.campaign, views: r.views, visitors: r.visitors })),
    });
  } catch (err) {
    console.error('visit stats error', err);
    return res.status(500).json({ error: 'Could not load visit stats' });
  }
});

// ============================================
// ADMIN — the funnel: visitors → study → register → checkout → sign-ups → payments
// ============================================
// GET /api/visits/funnel?days=30 → per day, how many distinct visitors reached
// each step, plus accounts created and payments taken that day. Visitors are
// counted once per day (the hash is day-scoped). Sign-ups leave out admin-made
// and guest accounts; payments leave out the $1 admin test and App Store
// sandbox transactions (those are logged as payment.sandbox).
const FUNNEL_STEPS = { landing: '/', study: '/study', nce: '/nce.html', register: '/register.html', checkout: '/checkout.html' };

router.get('/funnel', requireAdmin, async (req, res) => {
  try {
    const days = Math.min(Math.max(parseInt(req.query.days, 10) || 30, 1), 90);
    const to = utcDay();
    const from = new Date(Date.now() - (days - 1) * 86400 * 1000).toISOString().slice(0, 10);
    const fromDate = new Date(from + 'T00:00:00Z');
    const dayOf = { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } };

    const stepSums = {};
    for (const [step, path] of Object.entries(FUNNEL_STEPS)) {
      stepSums[step] = { $sum: { $cond: [{ $in: [path, '$paths'] }, 1, 0] } };
    }

    const [perDay, signups, payments] = await Promise.all([
      PageView.aggregate([
        { $match: { day: { $gte: from, $lte: to } } },
        { $group: { _id: { day: '$day', visitor: '$visitorHash' }, paths: { $addToSet: '$path' } } },
        { $group: { _id: '$_id.day', visitors: { $sum: 1 }, ...stepSums } },
      ]),
      User.aggregate([
        { $match: { createdAt: { $gte: fromDate }, role: 'user', isGuest: { $ne: true }, termsVersion: { $ne: 'admin-created' } } },
        { $group: { _id: dayOf, n: { $sum: 1 } } },
      ]),
      ActivityEvent.aggregate([
        { $match: { type: 'payment.succeeded', createdAt: { $gte: fromDate }, 'meta.tier': { $ne: 'test' }, 'meta.environment': { $ne: 'Sandbox' } } },
        { $group: { _id: dayOf, n: { $sum: 1 } } },
      ]),
    ]);

    const byDay = new Map(perDay.map((r) => [r._id, r]));
    const signupsByDay = new Map(signups.map((r) => [r._id, r.n]));
    const paymentsByDay = new Map(payments.map((r) => [r._id, r.n]));
    const start = new Date(to + 'T00:00:00Z');
    const daily = [];
    const totals = { visitors: 0, landing: 0, study: 0, nce: 0, register: 0, checkout: 0, signups: 0, payments: 0 };
    for (let i = days - 1; i >= 0; i--) {
      const day = new Date(start.getTime() - i * 86400 * 1000).toISOString().slice(0, 10);
      const row = byDay.get(day) || {};
      const d = { day, visitors: row.visitors || 0, signups: signupsByDay.get(day) || 0, payments: paymentsByDay.get(day) || 0 };
      for (const step of Object.keys(FUNNEL_STEPS)) d[step] = row[step] || 0;
      for (const k of Object.keys(totals)) totals[k] += d[k];
      daily.push(d);
    }

    return res.json({ days, from, to, steps: FUNNEL_STEPS, totals, daily });
  } catch (err) {
    console.error('visit funnel error', err);
    return res.status(500).json({ error: 'Could not load the funnel' });
  }
});

module.exports = router;
