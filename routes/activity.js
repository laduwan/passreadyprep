const express = require('express');
const requireAuth = require('../middleware/auth');
const StudyActivity = require('../models/StudyActivity');

const router = express.Router();

// Everything here requires being signed in.
router.use(requireAuth);

// The study surfaces the tracker knows about. Anything else is folded into
// 'other' so a stray client can't invent unbounded map keys.
const KNOWN_TOOLS = [
  'cases', 'exam', 'flashcards', 'dsm', 'decision-trees',
  'next-best-step', 'study-guide', 'podcast', 'skills', 'other',
];

// Heartbeats arrive about once a minute; allow some slack for a flush that
// covers a backgrounded tab, but cap it so one bad ping can't add hours.
const MAX_PING_SECONDS = 5 * 60;

const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;

function utcDay(offsetDays = 0) {
  const d = new Date(Date.now() + offsetDays * 86400 * 1000);
  return d.toISOString().slice(0, 10);
}

// Accept the client's own local date so streaks match the learner's clock —
// but only if it's a real date within a day of server time (timezones span
// UTC-12..UTC+14). Anything else falls back to the server's UTC day.
function sanitizeDay(day) {
  if (typeof day !== 'string' || !DAY_RE.test(day)) return utcDay();
  const plausible = [utcDay(-1), utcDay(), utcDay(1)];
  return plausible.includes(day) ? day : utcDay();
}

// POST /api/activity/ping — heartbeat from a study page.
// Body: { tool, seconds, day } — seconds of engaged time since the last ping.
router.post('/ping', async (req, res) => {
  try {
    const body = req.body || {};
    const tool = KNOWN_TOOLS.includes(body.tool) ? body.tool : 'other';
    const seconds = Math.min(Math.max(Math.round(Number(body.seconds) || 0), 0), MAX_PING_SECONDS);
    if (seconds <= 0) return res.json({ ok: true, recorded: 0 });
    const day = sanitizeDay(body.day);

    await StudyActivity.updateOne(
      { userId: req.userId, day },
      { $inc: { seconds, [`byTool.${tool}`]: seconds, pings: 1 } },
      { upsert: true }
    );
    return res.json({ ok: true, recorded: seconds });
  } catch (err) {
    console.error('activity ping error', err);
    return res.status(500).json({ error: 'Could not record activity' });
  }
});

// GET /api/activity/summary?days=30&today=YYYY-MM-DD
// Everything the streak widget needs in one call: today's time, a daily series
// for the last N days, per-tool totals, and current/longest streaks.
router.get('/summary', async (req, res) => {
  try {
    const days = Math.min(Math.max(parseInt(req.query.days, 10) || 30, 7), 90);
    const today = sanitizeDay(req.query.today);

    // One doc per active day, so even a year of history is a tiny read.
    const rows = await StudyActivity.find({ userId: req.userId })
      .select('day seconds byTool')
      .sort({ day: 1 })
      .lean();

    const byDay = new Map(rows.map((r) => [r.day, r]));

    // Daily series for the chart: the last `days` days ending today, zeros included.
    const start = new Date(today + 'T00:00:00Z');
    const daily = [];
    for (let i = days - 1; i >= 0; i--) {
      const day = new Date(start.getTime() - i * 86400 * 1000).toISOString().slice(0, 10);
      daily.push({ day, seconds: (byDay.get(day) || {}).seconds || 0 });
    }

    // Per-tool totals across all history.
    const byTool = {};
    let totalSeconds = 0;
    for (const r of rows) {
      totalSeconds += r.seconds || 0;
      for (const [tool, secs] of Object.entries(r.byTool || {})) {
        byTool[tool] = (byTool[tool] || 0) + (secs || 0);
      }
    }

    // Streaks. A day counts if it has any recorded time. The current streak is
    // anchored at today, but an empty today doesn't break it — you haven't
    // missed a day until the day is over.
    const activeDays = new Set(rows.filter((r) => (r.seconds || 0) > 0).map((r) => r.day));
    const dayBefore = (d) => new Date(new Date(d + 'T00:00:00Z').getTime() - 86400 * 1000)
      .toISOString().slice(0, 10);

    let currentStreak = 0;
    let cursor = activeDays.has(today) ? today : dayBefore(today);
    while (activeDays.has(cursor)) {
      currentStreak += 1;
      cursor = dayBefore(cursor);
    }

    let longestStreak = 0;
    let run = 0;
    let prev = null;
    for (const day of [...activeDays].sort()) {
      run = prev !== null && dayBefore(day) === prev ? run + 1 : 1;
      if (run > longestStreak) longestStreak = run;
      prev = day;
    }

    return res.json({
      today,
      todaySeconds: (byDay.get(today) || {}).seconds || 0,
      totalSeconds,
      activeDayCount: activeDays.size,
      currentStreak,
      longestStreak,
      daily,
      byTool,
    });
  } catch (err) {
    console.error('activity summary error', err);
    return res.status(500).json({ error: 'Could not load activity' });
  }
});

module.exports = router;
