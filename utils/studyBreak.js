// utils/studyBreak.js — the fast study break: a few questions from the
// member's weakest area, sent by text or email at a time they chose.
//
// The member picks the exam, which days, what time (their own clock), how
// many questions (3–5) and the channel. jobs/studyBreaks.js checks every few
// minutes who is due and calls sendBreak(). The message is one line plus a
// link to break.html, which shows the questions and records the answers as
// an attempt in mode 'break', so they move the domain scores and readiness
// but never count as a completed case.
//
// Everything that decides *what* to send lives here, so the scheduled job,
// the "send one now" button and any later channel (a reply-by-text version,
// for instance) share one session shape and one scorer. What differs by exam
// (access, the summary, the bank, the attempt's tally shape, where to
// practise) comes from utils/examProducts.js, so every exam product sold,
// now or later, gets study breaks from the same code.
const crypto = require('crypto');
const Attempt = require('../models/Attempt');
const StudyBreak = require('../models/StudyBreak');
const User = require('../models/User');
const { NCMHCE_DOMAIN_LABELS } = require('./progressSummary');
const { examProduct, isExamKey, soldExamProducts, knowledgeBank, NCMHCE_TOPICS_BY_DOMAIN } = require('./examProducts');
const { sendMail, sendSms } = require('./mailer');

const COUNTS = [3, 4, 5];
const DEFAULT_DAYS = [1, 2, 3, 4, 5];           // Mon–Fri; 0 = Sunday
const EARLIEST = '07:00';                        // no texts outside these local hours
const LATEST = '21:00';
const SEND_WINDOW_MIN = 60;                      // a break still goes out up to an hour late (a missed tick, a restart)
const LINK_TTL_MS = 3 * 24 * 60 * 60 * 1000;     // how long the link in the message works
const TEST_COOLDOWN_MS = 10 * 60 * 1000;         // "send one now" at most every 10 minutes

// ── Preferences ──────────────────────────────────────────────────────────
const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;
function minutesOf(hhmm) { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; }

function validTimezone(tz) {
  if (typeof tz !== 'string' || !tz || tz.length > 64) return false;
  try { new Intl.DateTimeFormat('en-US', { timeZone: tz }); return true; } catch (e) { return false; }
}

function defaultPrefs(user) {
  const canSms = !!(user && user.phone && user.smsOptedIn);
  const first = soldExamProducts()[0];
  return { enabled: false, exam: first ? first.key : 'ncmhce', channel: canSms ? 'sms' : 'email', time: '12:00', days: DEFAULT_DAYS.slice(), count: 5, timezone: null };
}

// Returns { value } or { error }. Keeps nothing the member did not send.
function validatePrefs(body, { canSms }) {
  const b = body || {};
  const v = {};
  v.enabled = !!b.enabled;
  // No exam given means the first product on sale; a key that is not a
  // product on sale is refused.
  const product = b.exam == null || b.exam === '' ? soldExamProducts()[0] : examProduct(b.exam);
  if (!product || !product.sold) return { error: 'Pick an exam.' };
  v.exam = product.key;
  v.channel = b.channel === 'sms' ? 'sms' : 'email';
  if (v.channel === 'sms' && !canSms) return { error: 'Add a mobile number and opt in to texts on your account first, or choose email.' };
  if (!TIME_RE.test(String(b.time || ''))) return { error: 'Pick a time.' };
  v.time = b.time;
  if (minutesOf(v.time) < minutesOf(EARLIEST) || minutesOf(v.time) > minutesOf(LATEST)) {
    return { error: `Breaks go out between ${EARLIEST} and ${LATEST} your time.` };
  }
  const days = Array.isArray(b.days) ? [...new Set(b.days.map(Number))].filter((d) => Number.isInteger(d) && d >= 0 && d <= 6).sort() : [];
  if (!days.length) return { error: 'Pick at least one day.' };
  v.days = days;
  v.count = COUNTS.includes(Number(b.count)) ? Number(b.count) : 5;
  if (!validTimezone(b.timezone)) return { error: 'Your browser did not report a time zone; try again.' };
  v.timezone = b.timezone;
  return { value: v };
}

// ── Schedule ─────────────────────────────────────────────────────────────
const WEEKDAYS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

// The wall clock in the member's time zone: weekday (0–6), minutes since
// midnight, and the calendar day as YYYY-MM-DD (the key for "sent today").
function localParts(now, timezone) {
  let fmt;
  const opts = { weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
  try { fmt = new Intl.DateTimeFormat('en-US', { timeZone: timezone, ...opts }); }
  catch (e) { fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', ...opts }); }
  const p = {};
  fmt.formatToParts(now).forEach((x) => { p[x.type] = x.value; });
  const hour = p.hour === '24' ? 0 : Number(p.hour);   // some engines print midnight as 24
  return { weekday: WEEKDAYS[p.weekday], minutes: hour * 60 + Number(p.minute), day: `${p.year}-${p.month}-${p.day}` };
}

// Due when: enabled, today is one of the chosen days, the local time is at
// or past the chosen time but less than SEND_WINDOW_MIN after it, and nothing
// has gone out today. The window lets a missed tick catch up without ever
// sending twice or sending hours late.
function isDue(pref, now = new Date()) {
  if (!pref || !pref.enabled || !pref.time || !pref.timezone) return false;
  const days = Array.isArray(pref.days) && pref.days.length ? pref.days : DEFAULT_DAYS;
  const lp = localParts(now, pref.timezone);
  if (!days.includes(lp.weekday)) return false;
  const t = minutesOf(pref.time);
  if (lp.minutes < t || lp.minutes >= t + SEND_WINDOW_MIN) return false;
  return pref.lastSentDay !== lp.day;
}

// ── Picking the questions ────────────────────────────────────────────────
function shuffle(a) { const x = a.slice(); for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [x[i], x[j]] = [x[j], x[i]]; } return x; }

// The lowest-scoring domain that has a score; before any work, the heaviest
// domain (the summary lists domains heaviest first).
function weakestDomain(summary) {
  const ds = (summary && summary.domains) || [];
  const scored = ds.filter((d) => d.score != null);
  if (scored.length) return scored.slice().sort((a, b) => a.score - b.score)[0];
  return ds[0] || null;
}

// Each product draws from its own bank (utils/examProducts.js).
async function pickItems(exam, domain, count, user) {
  const product = examProduct(exam);
  if (!product) return [];
  return product.pickItems(domain, count, user);
}

// ── Building and sending one break ───────────────────────────────────────
function linkBase() { return (process.env.CLIENT_URL || 'https://www.passreadyprep.com').replace(/\/+$/, ''); }

// The link's credential. A random 16-character token stored on the session
// rather than a signed token in the URL: equally unguessable (96 bits), and a
// quarter of the length, which keeps the text to about one carrier segment.
function newLinkToken() { return crypto.randomBytes(12).toString('base64url'); }
const TOKEN_RE = /^[A-Za-z0-9_-]{16}$/;

// The session a link opens, or null when the token is malformed, unknown or
// older than LINK_TTL_MS.
async function findSessionByToken(token, now = new Date()) {
  const t = String(token || '');
  if (!TOKEN_RE.test(t)) return null;
  const session = await StudyBreak.findOne({ linkToken: t });
  if (!session) return null;
  if (now.getTime() - new Date(session.sentAt).getTime() > LINK_TTL_MS) return null;
  return session;
}

function smsText(session, link) {
  // Brand first (carrier guidance), the domain by name, the link, and the
  // opt-out word routes/sms.js honours. About one segment for most domain
  // labels; well under the sender's 300-character cap for all of them.
  return `PassReady Prep study break: ${session.count} ${session.domainLabel} questions. ${link} Reply STOP to end.`;
}

function emailHtml(session, link, examName) {
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  return `<div style="font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0f172a">
  <p style="font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#047857;margin:0 0 8px">Fast study break · ${esc(examName)}</p>
  <h1 style="font-size:22px;margin:0 0 12px">${esc(session.count)} quick ${esc(session.domainLabel)} questions</h1>
  <p style="font-size:15px;line-height:1.6;margin:0 0 20px">That is your weakest area right now. Work them in a few minutes; your answers count toward your readiness score.</p>
  <p style="margin:0 0 24px"><a href="${esc(link)}" style="display:inline-block;background:#10b981;color:#0f172a;font-weight:600;padding:12px 18px;text-decoration:none">Start the break →</a></p>
  <p style="font-size:12px;color:#64748b;line-height:1.5;margin:0">You chose this in your dashboard settings, where you can change the days, the time or turn it off.</p>
</div>`;
}

// Builds the session for one member and sends it. `test` sends regardless of
// the schedule and does not mark the day as done.
async function sendBreak(user, { now = new Date(), test = false, channel } = {}) {
  const pref = user.studyBreak || {};
  const product = examProduct(pref.exam) || soldExamProducts()[0];
  if (!product) throw new Error('No exam products');
  const exam = product.key;
  const count = COUNTS.includes(Number(pref.count)) ? Number(pref.count) : 5;
  const canSms = !!(user.phone && user.smsOptedIn);
  const via = (channel || pref.channel) === 'sms' && canSms ? 'sms' : 'email';

  const summary = await product.summarize(user._id);
  const weakest = weakestDomain(summary);
  if (!weakest) throw new Error('No domains to draw from');
  const items = await pickItems(exam, weakest.key, count, user);
  if (!items.length) throw new Error(`No ${exam} questions available for ${weakest.key}`);

  const session = await StudyBreak.create({
    userId: user._id, exam, domain: weakest.key, domainLabel: weakest.label || NCMHCE_DOMAIN_LABELS[weakest.key] || weakest.key,
    count: items.length, channel: via, test, items, sentAt: now, linkToken: newLinkToken(),
  });
  const link = `${linkBase()}/break.html?t=${session.linkToken}`;
  const examName = product.name;

  let sendResult;
  if (via === 'sms') {
    sendResult = await sendSms({ to: user.phone, text: smsText(session, link) });
  } else {
    sendResult = await sendMail({
      to: user.email,
      subject: `Your study break: ${items.length} quick ${session.domainLabel} questions`,
      html: emailHtml(session, link, examName),
      text: `${items.length} quick ${session.domainLabel} questions, your weakest area right now: ${link}`,
      replyTo: process.env.MAIL_REPLY_TO || undefined,
    });
  }
  session.sendResult = sendResult && typeof sendResult === 'object' ? { ok: !!sendResult.ok, dev: !!sendResult.dev, error: sendResult.error || null } : { ok: !!sendResult };
  await session.save();

  const set = test ? { 'studyBreak.lastTestAt': now } : { 'studyBreak.lastSentDay': localParts(now, pref.timezone).day };
  await User.updateOne({ _id: user._id }, { $set: set });

  return { session, link, channel: via, sendResult: session.sendResult };
}

// ── Answering ────────────────────────────────────────────────────────────
// Scores the member's picks and records them as one attempt in mode 'break',
// so the domain scores and readiness move while the case count does not.
function scoreSession(session, answers) {
  const a = answers && typeof answers === 'object' ? answers : {};
  let correct = 0;
  const results = session.items.map((item) => {
    const selected = typeof a[item.id] === 'string' ? a[item.id] : null;
    const ok = !!selected && selected === item.correct;
    if (ok) correct += 1;
    return {
      id: item.id, selected, correct: item.correct, ok,
      yourRationale: selected ? (item.rationale && item.rationale[selected]) || '' : '',
      keyRationale: (item.rationale && item.rationale[item.correct]) || '',
      explanation: item.explanation || '',
    };
  });
  const total = session.items.length;
  return { correct, total, score: total ? Math.round((correct / total) * 100) : 0, results };
}

async function recordAttempt(session, scored, now = new Date()) {
  const product = examProduct(session.exam);
  if (!product) return null;
  const ex = await product.examDoc().catch(() => null);
  const examId = ex && ex._id;
  if (!examId) return null;
  // Each product's readiness reads its own tally shape per domain.
  const domainBreakdown = { [session.domain]: product.breakdown(scored.correct, scored.total) };
  const attempt = await Attempt.create({
    userId: session.userId,
    examId,
    externalId: `break-${session._id}`,
    mode: 'break',
    responses: scored.results.map((r) => ({ questionId: r.id, selectedOptionId: r.selected, correct: r.ok })),
    score: scored.score,
    domainBreakdown,
    startedAt: session.sentAt,
    completedAt: now,
  });
  return attempt._id;
}

module.exports = {
  COUNTS, DEFAULT_DAYS, EARLIEST, LATEST, SEND_WINDOW_MIN, TEST_COOLDOWN_MS, LINK_TTL_MS, NCMHCE_TOPICS_BY_DOMAIN,
  knowledgeBank, defaultPrefs, validatePrefs, localParts, isDue,
  weakestDomain, pickItems, newLinkToken, findSessionByToken, smsText, emailHtml, sendBreak, scoreSession, recordAttempt,
  isExamKey,
};
