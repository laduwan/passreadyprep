// Fast study break: preferences, the "send one now" button, and the session
// the link in a text or email opens.
//
//   GET  /api/study-break                 the signed-in member's settings (requireAuth)
//   PUT  /api/study-break                 save them (requireAuth)
//   POST /api/study-break/test            send one now, outside the schedule (requireAuth)
//   GET  /api/study-break/session?t=…     the questions for one sent break (token only)
//   POST /api/study-break/session/answers record the answers (token only)
//
// The session routes take the token from the link, not a sign-in: the member
// is on their phone, often signed out, and the token can open nothing but that
// one break (utils/studyBreak.js findSessionByToken: random, 3-day life).
const express = require('express');
const requireAuth = require('../middleware/auth');
const User = require('../models/User');
const sb = require('../utils/studyBreak');
const { examProduct, publicExamProducts, productUserFields } = require('../utils/examProducts');

const router = express.Router();

function publicPrefs(user) {
  const p = user.studyBreak && user.studyBreak.time ? user.studyBreak : sb.defaultPrefs(user);
  return {
    enabled: !!p.enabled, exam: sb.isExamKey(p.exam) ? p.exam : sb.defaultPrefs(user).exam, channel: p.channel || 'email', time: p.time,
    days: Array.isArray(p.days) && p.days.length ? p.days : sb.DEFAULT_DAYS, count: p.count || 5, timezone: p.timezone || null,
    lastSentDay: p.lastSentDay || null,
  };
}

router.get('/', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('email phone smsOptedIn studyBreak').lean();
    if (!user) return res.status(404).json({ error: 'Account not found' });
    res.set('Cache-Control', 'no-store');
    res.json({ prefs: publicPrefs(user), canSms: !!(user.phone && user.smsOptedIn), exams: publicExamProducts(), earliest: sb.EARLIEST, latest: sb.LATEST, counts: sb.COUNTS });
  } catch (err) {
    console.error('study-break get error', err);
    res.status(500).json({ error: 'Could not load your study break settings' });
  }
});

router.put('/', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('email phone smsOptedIn studyBreak');
    if (!user) return res.status(404).json({ error: 'Account not found' });
    const canSms = !!(user.phone && user.smsOptedIn);
    const v = sb.validatePrefs(req.body, { canSms });
    if (v.error) return res.status(400).json({ error: v.error });
    const prev = user.studyBreak || {};
    user.studyBreak = { ...v.value, lastSentDay: prev.lastSentDay || null, lastTestAt: prev.lastTestAt || null, updatedAt: new Date() };
    await user.save();
    res.json({ prefs: publicPrefs(user), canSms });
  } catch (err) {
    console.error('study-break save error', err);
    res.status(500).json({ error: 'Could not save your study break settings' });
  }
});

// Sends one break right now, by the saved channel (or ?channel=email to try
// the email version). Does not touch the schedule. Rate-limited so the
// button cannot run up the SMS bill.
router.post('/test', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select(['email', 'phone', 'smsOptedIn', 'studyBreak', ...productUserFields()].join(' ')).lean();
    if (!user) return res.status(404).json({ error: 'Account not found' });
    if (!user.studyBreak || !user.studyBreak.time) return res.status(400).json({ error: 'Save your study break settings first.' });
    const last = user.studyBreak.lastTestAt ? new Date(user.studyBreak.lastTestAt).getTime() : 0;
    if (Date.now() - last < sb.TEST_COOLDOWN_MS) return res.status(429).json({ error: 'A test break was sent a few minutes ago. Try again shortly.' });
    const channel = req.body && req.body.channel === 'email' ? 'email' : undefined;
    const out = await sb.sendBreak(user, { test: true, channel });
    res.json({ ok: true, channel: out.channel, link: out.link, sendResult: out.sendResult });
  } catch (err) {
    console.error('study-break test error', err);
    res.status(500).json({ error: err.message || 'Could not send a study break' });
  }
});

function loadSession(token) { return sb.findSessionByToken(token); }

function sessionView(session) {
  const product = examProduct(session.exam);
  return {
    exam: session.exam, examName: product ? product.name : session.exam.toUpperCase(),
    practiceHref: product ? product.practiceHref(session.domain) : '/dashboard.html',
    dashboardHref: product ? product.dashboardHref : '/dashboard.html',
    domain: session.domain, domainLabel: session.domainLabel, count: session.items.length,
    sentAt: session.sentAt, answered: !!session.answeredAt,
    items: session.items.map((i) => ({ id: i.id, stem: i.stem, options: i.options })),
  };
}

router.get('/session', async (req, res) => {
  try {
    const session = await loadSession(req.query.t);
    if (!session) return res.status(404).json({ error: 'This study break link has expired or is not valid.' });
    res.set('Cache-Control', 'no-store');
    const view = sessionView(session);
    if (session.answeredAt) view.results = sb.scoreSession(session, session.answers);
    res.json(view);
  } catch (err) {
    console.error('study-break session error', err);
    res.status(500).json({ error: 'Could not load this study break' });
  }
});

router.post('/session/answers', async (req, res) => {
  try {
    const session = await loadSession(req.body && req.body.t);
    if (!session) return res.status(404).json({ error: 'This study break link has expired or is not valid.' });
    if (session.answeredAt) return res.status(409).json({ error: 'Already answered', results: sb.scoreSession(session, session.answers) });
    const answers = req.body && req.body.answers && typeof req.body.answers === 'object' ? req.body.answers : {};
    const scored = sb.scoreSession(session, answers);
    const now = new Date();
    session.answers = answers;
    session.answeredAt = now;
    session.correct = scored.correct;
    session.score = scored.score;
    session.attemptId = await sb.recordAttempt(session, scored, now).catch((e) => { console.error('study-break attempt error', e); return null; });
    await session.save();
    res.json({ ok: true, results: scored });
  } catch (err) {
    console.error('study-break answers error', err);
    res.status(500).json({ error: 'Could not record your answers' });
  }
});

module.exports = router;
