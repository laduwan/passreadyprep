// ============================================================================
// Activity tracking + admin alerts.
//
// logActivity(...) records an event and — for important ones — emails/texts the
// admin. It is best-effort: it never throws and never blocks the request it was
// called from, so tracking can't break the app.
//
// Env vars:
//   ADMIN_ALERT_EMAIL     — where alerts go (falls back to MAIL_FROM_EMAIL)
//   ADMIN_ALERT_SMS_TO    — optional phone in intl format (e.g. 15551234567) for SMS alerts;
//                           comma-separate several numbers to text more than one recipient
//   ADMIN_ALERT_SMS_EVENTS — comma list of event types that also send SMS. Unset =
//                            SMS follows email. Set = only these types text, so a
//                            signup can text you without errors paging your phone.
//                            Note: user.registered, payment.succeeded, and
//                            payment.failed ALWAYS text (never throttled, never
//                            scoped out) — see NEVER_THROTTLE / SMS_ALWAYS below.
//   ADMIN_ALERT_EVENTS    — comma list of event types to alert on (overrides the default set)
//   ADMIN_ALERT_DISABLE   — set to 1 to silence all alerts (events are still logged)
//   ADMIN_ALERT_THROTTLE_MIN — minutes between alerts of the same kind (default 10)
//   ACTIVITY_TTL_DAYS     — optional auto-expiry for the event log (see model)
//
// Errors (severity 'error') always alert. Everything is always visible in the
// admin panel regardless of alert settings.
// ============================================================================

const ActivityEvent = require('../models/ActivityEvent');
const User = require('../models/User');
const { sendMail, sendSms } = require('./mailer');

const DEFAULT_NOTIFY_TYPES = [
  'user.registered',
  'payment.succeeded',
  'payment.failed',
  'password.reset_completed',
];

function notifyTypes() {
  if (process.env.ADMIN_ALERT_EVENTS) {
    return process.env.ADMIN_ALERT_EVENTS.split(',').map((s) => s.trim()).filter(Boolean);
  }
  return DEFAULT_NOTIFY_TYPES;
}

// ── simple in-memory throttle so an error storm can't flood the inbox ──
const THROTTLE_MS = (parseInt(process.env.ADMIN_ALERT_THROTTLE_MIN || '10', 10) || 10) * 60000;
const lastSent = new Map(); // key -> { ts, suppressed }

// Business events we never want collapsed by the throttle: every signup and
// every payment should page the admin, even if several land back-to-back.
// Errors still throttle (an error storm must not flood the inbox).
const NEVER_THROTTLE = new Set([
  'user.registered',
  'payment.succeeded',
  'payment.failed',
]);

function throttleGate(key, type) {
  if (NEVER_THROTTLE.has(type)) return { send: true, suppressed: 0 };
  const now = Date.now();
  const rec = lastSent.get(key);
  if (!rec || now - rec.ts >= THROTTLE_MS) {
    const suppressed = rec ? rec.suppressed : 0;
    lastSent.set(key, { ts: now, suppressed: 0 });
    return { send: true, suppressed };
  }
  rec.suppressed = (rec.suppressed || 0) + 1;
  return { send: false, suppressed: rec.suppressed };
}

function decideNotify(ev) {
  if (process.env.ADMIN_ALERT_DISABLE === '1') return false;
  if (typeof ev.notify === 'boolean') return ev.notify;
  if (ev.severity === 'error') return true;
  return notifyTypes().includes(ev.type);
}

// SMS can be scoped to a subset of event types via ADMIN_ALERT_SMS_EVENTS
// (comma list). When unset, SMS follows email: any event that emails also
// texts (unchanged behavior). When set, only the listed types text — so you
// can get an SMS for a new signup without being paged by every server error.
// Email is never affected by this. Errors text only if their type is listed
// (http.error, server.error, server.unhandledRejection, server.uncaughtException).
function smsTypes() {
  if (process.env.ADMIN_ALERT_SMS_EVENTS) {
    const list = process.env.ADMIN_ALERT_SMS_EVENTS.split(',').map((s) => s.trim()).filter(Boolean);
    return list.length ? list : null; // set-but-empty (e.g. whitespace) → treat as unset
  }
  return null;
}

// Signups and payments always text (ADMIN_ALERT_SMS_TO permitting), regardless
// of what ADMIN_ALERT_SMS_EVENTS is scoped to. Everything else obeys the scope.
const SMS_ALWAYS = new Set([
  'user.registered',
  'payment.succeeded',
  'payment.failed',
]);

function decideSms(doc) {
  if (SMS_ALWAYS.has(doc.type)) return true;
  const list = smsTypes();
  if (!list) return true; // not configured → text whatever we email (back-compat)
  return list.includes(doc.type);
}

// ── Alert card: event catalogue ─────────────────────────────────────────────
// One entry per event type the app logs. `label`/`emoji` head the email card and
// the SMS; `tone` colours the header accent; `tab` is the admin-dashboard tab
// the "View in Admin Panel" button opens (admin-dashboard.html#<tab>).
// Unknown types fall back to 🔔 + the type turned into words, tab "overview".
const EVENT_CONFIG = {
  // Accounts
  'user.registered':           { emoji: '🎉', label: 'New Registration',        tone: 'ok',    tab: 'subscribers' },
  'user.guest_created':        { emoji: '👤', label: 'Guest Account Created',   tone: 'info',  tab: 'subscribers' },
  'user.login':                { emoji: '🔓', label: 'User Login',              tone: 'info',  tab: 'subscribers' },
  'user.login_failed':         { emoji: '🔒', label: 'Login Failed',            tone: 'warn',  tab: 'subscribers' },
  'user.account_deleted':      { emoji: '🗑️', label: 'Account Deleted',         tone: 'warn',  tab: 'subscribers' },
  'user.delete_failed':        { emoji: '⚠️', label: 'Account Deletion Failed', tone: 'error', tab: 'subscribers' },
  'user.unsubscribed':         { emoji: '📭', label: 'Email Unsubscribed',      tone: 'info',  tab: 'subscribers' },
  'password.reset_requested':  { emoji: '🔑', label: 'Password Reset Requested', tone: 'info', tab: 'users' },
  'password.reset_completed':  { emoji: '🔑', label: 'Password Reset',          tone: 'info',  tab: 'users' },
  // Billing
  'payment.succeeded':         { emoji: '💳', label: 'Payment Received',        tone: 'ok',    tab: 'subscribers' },
  'payment.failed':            { emoji: '❌', label: 'Payment Failed',          tone: 'error', tab: 'subscribers' },
  'subscription.canceled':     { emoji: '⚠️', label: 'Subscription Canceled',   tone: 'warn',  tab: 'subscribers' },
  'subscription.past_due':     { emoji: '⚠️', label: 'Payment Past Due',        tone: 'warn',  tab: 'subscribers' },
  'apple.notification':        { emoji: '🍎', label: 'App Store Notification',  tone: 'info',  tab: 'subscribers' },
  'guarantee.score_report_submitted': { emoji: '📄', label: 'Score Report Submitted', tone: 'info', tab: 'guarantee' },
  // Content & jobs
  'blog.auto_draft_ready':     { emoji: '📝', label: 'Blog Draft Ready',        tone: 'ok',    tab: 'blog' },
  'blog.auto_draft_failed':    { emoji: '⚠️', label: 'Blog Draft Failed',       tone: 'warn',  tab: 'blog' },
  'email.received':            { emoji: '📨', label: 'Inbound Email',           tone: 'info',  tab: 'overview' },
  'trial.reminders_run':       { emoji: '⏰', label: 'Trial Reminders Sent',    tone: 'info',  tab: 'subscribers' },
  // Errors
  'http.error':                { emoji: '🚨', label: 'Server Error',            tone: 'error', tab: 'overview' },
  'server.error':              { emoji: '🚨', label: 'Server Error',            tone: 'error', tab: 'overview' },
  'server.unhandledRejection': { emoji: '🚨', label: 'Server Error',            tone: 'error', tab: 'overview' },
  'server.uncaughtException':  { emoji: '🚨', label: 'Server Error',            tone: 'error', tab: 'overview' },
  // Admin actions
  'admin.user_created':        { emoji: '🛠️', label: 'Admin Action: User Created',        tone: 'info', tab: 'overview' },
  'admin.user_deleted':        { emoji: '🛠️', label: 'Admin Action: User Deleted',        tone: 'info', tab: 'overview' },
  'admin.password_reset':      { emoji: '🛠️', label: 'Admin Action: Password Reset',      tone: 'info', tab: 'overview' },
  'admin.progress_reset':      { emoji: '🛠️', label: 'Admin Action: Progress Reset',      tone: 'info', tab: 'overview' },
  'admin.tier_changed':        { emoji: '🛠️', label: 'Admin Action: Tier Changed',        tone: 'info', tab: 'overview' },
  'admin.refund_issued':       { emoji: '🛠️', label: 'Admin Action: Refund Issued',       tone: 'info', tab: 'overview' },
  'admin.subscription_canceled': { emoji: '🛠️', label: 'Admin Action: Subscription Canceled', tone: 'info', tab: 'overview' },
  'admin.trial_granted':       { emoji: '🛠️', label: 'Admin Action: Trial Granted',       tone: 'info', tab: 'overview' },
  'admin.trial_cleared':       { emoji: '🛠️', label: 'Admin Action: Trial Cleared',       tone: 'info', tab: 'overview' },
  'admin.email_sent':          { emoji: '🛠️', label: 'Admin Action: Email Sent',          tone: 'info', tab: 'overview' },
  'admin.blog_published':      { emoji: '🛠️', label: 'Admin Action: Blog Published',      tone: 'info', tab: 'overview' },
  'admin.blog_deleted':        { emoji: '🛠️', label: 'Admin Action: Blog Deleted',        tone: 'info', tab: 'overview' },
  'admin.test_alert':          { emoji: '🛠️', label: 'Admin Action: Test Alert',          tone: 'info', tab: 'overview' },
};

// "user.login_failed" → "User login failed"
function typeToWords(type) {
  const words = String(type || 'event').replace(/[._-]+/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').trim().toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function eventConfig(type, severity) {
  const known = EVENT_CONFIG[type];
  if (known) return { type, ...known };
  const t = String(type || '');
  if (t.startsWith('server.') || t === 'http.error') return { type, emoji: '🚨', label: 'Server Error', tone: 'error', tab: 'overview' };
  if (t.startsWith('admin.')) return { type, emoji: '🛠️', label: 'Admin Action: ' + typeToWords(t.slice(6)), tone: 'info', tab: 'overview' };
  const tone = severity === 'error' ? 'error' : severity === 'warn' ? 'warn' : 'info';
  return { type, emoji: '🔔', label: typeToWords(t), tone, tab: 'overview' };
}

// Which channels an event reaches with no per-event preference saved — i.e.
// exactly today's behaviour (decideNotify + decideSms), so the settings table
// can show the real starting point and a missing pref key changes nothing.
// Events the code logs with severity 'error' (always alert) or an explicit
// notify flag, mirrored here so the defaults shown match what really sends.
const ERROR_TYPES = new Set(['http.error', 'server.error', 'server.unhandledRejection', 'server.uncaughtException']);
const NOTIFY_FLAG = { 'blog.auto_draft_ready': true, 'guarantee.score_report_submitted': true, 'admin.test_alert': false };
function effectiveDefaults(type) {
  const t = String(type || '');
  const severity = ERROR_TYPES.has(t) || t.startsWith('server.') ? 'error' : 'info';
  const email = decideNotify({ type: t, severity, notify: NOTIFY_FLAG[t] });
  const sms = email && !!process.env.ADMIN_ALERT_SMS_TO && decideSms({ type: t });
  return { email, sms };
}

// ── Per-event admin preferences (User.adminAlertPrefs on the admin account) ─
// Shape: { "<eventType>": { email: bool, sms: bool } }. A missing key means
// "today's behaviour". Cached for 60 s; a DB error falls back to the cached
// value or (with no cache) to "no prefs", so an error never changes who gets
// alerted and never throws.
const PREFS_TTL_MS = 60000;
let prefsCache = { ts: 0, value: null };

async function loadAlertPrefs() {
  const now = Date.now();
  if (prefsCache.value && now - prefsCache.ts < PREFS_TTL_MS) return prefsCache.value;
  try {
    const admin = await User.findOne({ role: 'admin' }).sort({ createdAt: 1 }).select('adminAlertPrefs').lean();
    const value = (admin && admin.adminAlertPrefs && typeof admin.adminAlertPrefs === 'object') ? admin.adminAlertPrefs : {};
    prefsCache = { ts: now, value };
    return value;
  } catch (e) {
    console.error('[activity] could not load alert prefs:', e.message);
    return prefsCache.value || {};
  }
}
function invalidateAlertPrefs() { prefsCache = { ts: 0, value: null }; }

// Applies the saved pref (if any) for one channel on top of the default
// decision. `undefined`/missing → keep the default; an explicit boolean wins.
function applyPref(prefs, type, channel, fallback) {
  const p = prefs && prefs[type];
  if (p && typeof p[channel] === 'boolean') return p[channel];
  return fallback;
}

// ── Alert card rendering ────────────────────────────────────────────────────
const APP_BASE = () => String(process.env.APP_URL || 'https://www.passreadyprep.com').replace(/\/+$/, '');
const CARD = {
  header: '#0F172A', accent: '#34D399', button: '#10B981', buttonText: '#04261C',
  text: '#1E293B', muted: '#64748B', page: '#F8FAFC', warn: '#B45309', error: '#B91C1C',
  border: '#E2E8F0', ok: '#10B981', info: '#34D399',
};
const TONE_COLOR = { ok: CARD.ok, info: CARD.info, warn: CARD.warn, error: CARD.error };

function formatEastern(d) {
  try {
    const s = new Date(d).toLocaleString('en-US', {
      timeZone: 'America/New_York', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: '2-digit',
    });
    return s + ' ET';
  } catch (e) { return new Date(d).toISOString(); }
}

function formatAmount(amount, currency) {
  if (amount == null || amount === '' || isNaN(Number(amount))) return null;
  const n = Number(amount) / 100;
  const cur = String(currency || 'usd').toUpperCase();
  const fixed = n.toFixed(2);
  return cur === 'USD' ? '$' + fixed : fixed + ' ' + cur;
}

function metaValue(v) {
  if (v == null) return '';
  if (v instanceof Date) return formatEastern(v);
  if (typeof v === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(v)) return formatEastern(v);
  if (Array.isArray(v)) return v.map(metaValue).join(', ');
  if (typeof v === 'object') return safeJson(v);
  return String(v);
}

// Rows for the card: label → value. Returns [[label, value], ...] with empty
// values dropped. Also used, line by line, for the plain-text part.
function alertRows(doc, when) {
  const meta = (doc.meta && typeof doc.meta === 'object') ? { ...doc.meta } : {};
  const rows = [];
  const take = (k) => { const v = meta[k]; delete meta[k]; return v; };

  rows.push(['Message', doc.message]);
  rows.push(['User', doc.email]);
  const tier = take('tier'); const plan = take('plan'); take('entitlement');
  rows.push(['Plan', [tier, plan].filter(Boolean).join(' / ')]);
  const amount = take('amount'); const currency = take('currency');
  if (amount != null && currency != null) rows.push(['Amount', formatAmount(amount, currency)]);
  else if (amount != null) rows.push(['Amount', metaValue(amount)]);
  const source = take('source');
  if (source) rows.push(['Source', source === 'apple' ? 'App Store' : source === 'stripe' ? 'Stripe' : metaValue(source)]);
  const environment = take('environment');
  if (environment) rows.push(['Environment', environment === 'Sandbox' ? 'Sandbox — test, no charge' : metaValue(environment)]);
  rows.push(['Path', doc.path]);
  rows.push(['IP', doc.ip]);
  const details = Object.keys(meta)
    .filter((k) => meta[k] != null && meta[k] !== '')
    .map((k) => `${k}: ${metaValue(meta[k])}`);
  if (details.length) rows.push(['Details', details.join('\n')]);
  rows.push(['Time', formatEastern(when)]);
  return rows.filter(([, v]) => v != null && String(v).trim() !== '');
}

// Builds subject + html + text + sms for one activity event. Pure: no I/O.
// `opts.suppressed` adds the "+N more similar since the last alert" line.
function buildAlertEmail(doc, opts = {}) {
  const when = opts.when || new Date();
  const cfg = eventConfig(doc.type, doc.severity);
  const rows = alertRows(doc, when);
  const suppressed = opts.suppressed > 0 ? `+${opts.suppressed} more similar since the last alert` : '';
  const link = `${APP_BASE()}/admin-dashboard.html#${cfg.tab}`;
  const accent = TONE_COLOR[cfg.tone] || CARD.accent;

  const summary = doc.email || (doc.message ? String(doc.message).replace(/\s+/g, ' ').trim() : '');
  let subject = `${cfg.emoji} ${cfg.label}` + (summary ? ` — ${summary}` : '');
  if (subject.length > 90) subject = subject.slice(0, 89).replace(/\s+\S*$/, '') + '…';

  const sms = `PassReady Prep: ${cfg.label}` +
    (doc.email ? ' — ' + doc.email : '') +
    (doc.message ? ' — ' + doc.message : '') +
    (suppressed ? ' (' + suppressed + ')' : '');

  const text = [
    `${cfg.emoji} ${cfg.label}`,
    '',
    ...rows.map(([k, v]) => `${k}: ${String(v).replace(/\n/g, '\n  ')}`),
    suppressed ? '' : null,
    suppressed || null,
    '',
    `View in Admin Panel: ${link}`,
    '',
    'PassReady Prep · GA Integrated Therapeutic Perspectives LLC',
  ].filter((l) => l !== null).join('\n');

  const rowHtml = rows.map(([k, v]) =>
    `<tr>` +
    `<td style="padding:8px 12px 8px 0;font:600 13px/1.45 system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${CARD.muted};vertical-align:top;white-space:nowrap;border-bottom:1px solid ${CARD.border}">${escapeHtml(k)}</td>` +
    `<td style="padding:8px 0;font:14px/1.45 system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${CARD.text};vertical-align:top;border-bottom:1px solid ${CARD.border};word-break:break-word">${escapeHtml(v).replace(/\n/g, '<br>')}</td>` +
    `</tr>`).join('');

  const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(cfg.label)}</title></head>
<body style="margin:0;padding:0;background:${CARD.page}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${CARD.page};padding:24px 12px">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:540px;background:#FFFFFF;border-radius:12px;overflow:hidden;border:1px solid ${CARD.border}">
  <tr><td style="background:${CARD.header};padding:18px 24px;border-top:4px solid ${accent}">
    <div style="font:700 18px/1.3 system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#FFFFFF">PassReady<span style="color:${CARD.accent}"> Prep</span> <span style="font-weight:500;color:#94A3B8">Admin Alert</span></div>
  </td></tr>
  <tr><td style="padding:22px 24px 6px">
    <div style="font:700 22px/1.3 system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${CARD.text}">${escapeHtml(cfg.emoji)} ${escapeHtml(cfg.label)}</div>
    <div style="font:13px/1.4 system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${CARD.muted};margin-top:4px"><code style="font:12px ui-monospace,Menlo,Consolas,monospace;color:${CARD.muted}">${escapeHtml(doc.type)}</code></div>
  </td></tr>
  <tr><td style="padding:10px 24px 0">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${rowHtml}</table>
    ${suppressed ? `<div style="font:13px/1.4 system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${CARD.warn};margin-top:10px">${escapeHtml(suppressed)}</div>` : ''}
  </td></tr>
  <tr><td style="padding:22px 24px 26px">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="background:${CARD.button};border-radius:9px">
      <a href="${escapeHtml(link)}" style="display:inline-block;padding:11px 18px;font:700 14px/1 system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${CARD.buttonText};text-decoration:none">View in Admin Panel →</a>
    </td></tr></table>
  </td></tr>
</table>
<div style="font:12px/1.5 system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${CARD.muted};margin-top:14px;text-align:center">PassReady Prep · GA Integrated Therapeutic Perspectives LLC</div>
</td></tr>
</table>
</body></html>`;

  return { subject, html, text, sms, link, config: cfg };
}

function safeJson(v) {
  try { return JSON.stringify(v); } catch (e) { return String(v); }
}
function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/[&<>"]/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
function clientIp(req) {
  if (!req) return undefined;
  const xf = req.headers && req.headers['x-forwarded-for'];
  if (xf) return String(xf).split(',')[0].trim();
  return (req.socket && req.socket.remoteAddress) || undefined;
}

async function logActivity(ev = {}) {
  const doc = {
    type: ev.type || 'event',
    severity: ['info', 'warn', 'error'].includes(ev.severity) ? ev.severity : 'info',
    message: ev.message,
    email: ev.email,
    userId: ev.userId,
    ip: ev.ip || clientIp(ev.req),
    path: ev.path || (ev.req && ev.req.originalUrl),
    meta: ev.meta,
  };

  let saved = null;
  try {
    saved = await ActivityEvent.create(doc);
  } catch (e) {
    console.error('[activity] could not save event:', e.message);
  }

  try {
    if (decideNotify({ type: doc.type, severity: doc.severity, notify: ev.notify })) {
      await notifyAdmin(doc, saved);
    }
  } catch (e) {
    console.error('[activity] notify failed:', e.message);
  }

  return saved;
}

async function notifyAdmin(doc, saved) {
  const to = process.env.ADMIN_ALERT_EMAIL || process.env.MAIL_FROM_EMAIL;
  const smsTo = process.env.ADMIN_ALERT_SMS_TO;
  if (!to && !smsTo) return; // nothing configured to send to

  // Throttle per (severity-scoped) type so repeats collapse into one alert.
  const key = (doc.severity === 'error' ? 'error:' : '') + doc.type;
  const gate = throttleGate(key, doc.type);
  if (!gate.send) return;

  // Per-event admin toggles (admin UI → Alert settings). A missing key keeps
  // today's behaviour; an explicit false turns that channel off, even for
  // signups/payments and even for severity 'error' events.
  const prefs = await loadAlertPrefs();
  const wantEmail = applyPref(prefs, doc.type, 'email', true);
  const wantSms = applyPref(prefs, doc.type, 'sms', decideSms(doc));
  if (!wantEmail && !wantSms) return;

  const { subject, html, text, sms: smsBody } = buildAlertEmail(doc, { suppressed: gate.suppressed });

  const results = [];
  if (to && wantEmail) results.push(await sendMail({ to, subject, html, text }));
  // ADMIN_ALERT_SMS_TO may be a comma list so a submission can text more than
  // one phone (e.g. the owner and the admin reviewing score reports).
  if (smsTo && wantSms) {
    const recipients = String(smsTo).split(',').map((n) => n.trim()).filter(Boolean);
    for (const recipient of recipients) {
      results.push(await sendSms({ to: recipient, text: smsBody }));
    }
  }

  // Only mark "alerted" when something actually went out — a rejected send or
  // no email key set (dev log-only mode) must not look like a sent alert.
  const delivered = results.some((r) => r && r.ok && !r.dev);
  if (!delivered) console.error('[activity] alert NOT delivered for', doc.type, '→', to || smsTo, safeJson(results));
  if (saved && delivered) { try { saved.notified = true; await saved.save(); } catch (e) {} }
}

// ── Express integration ────────────────────────────────────────────────────

// Logs any response that comes back 5xx as an error event. Catches the many
// routes that handle their own try/catch and return 500 directly (which never
// reach the error handler below).
function monitor(req, res, next) {
  res.on('finish', () => {
    try {
      if (res.statusCode >= 500 && !res.locals._activityLogged) {
        logActivity({
          type: 'http.error',
          severity: 'error',
          message: `${req.method} ${req.originalUrl} → ${res.statusCode}`,
          path: req.originalUrl,
          req,
        });
      }
    } catch (e) { /* never let logging break the response */ }
  });
  next();
}

// Final Express error handler — catches thrown errors and next(err) calls.
function errorHandler(err, req, res, next) {
  // Client errors Express/body-parser already tagged as 4xx (a malformed URL
  // like /%c0 from a scanner, a bad JSON body) aren't server faults: answer
  // with that status and don't log or alert.
  const status = err && (err.status || err.statusCode);
  if (status >= 400 && status < 500) {
    if (res.headersSent) return next(err);
    return res.status(status).json({ error: 'Bad request' });
  }
  try {
    res.locals._activityLogged = true; // avoid a duplicate from monitor()
    logActivity({
      type: 'server.error',
      severity: 'error',
      message: err && err.message ? err.message : 'Unknown error',
      path: req.originalUrl,
      req,
      meta: { stack: err && err.stack ? String(err.stack).split('\n').slice(0, 6).join('\n') : undefined },
    });
  } catch (e) { /* ignore */ }
  if (res.headersSent) return next(err);
  res.status(500).json({ error: 'Something went wrong' });
}

let processHandlersInstalled = false;
function installProcessHandlers() {
  if (processHandlersInstalled) return;
  processHandlersInstalled = true;
  process.on('unhandledRejection', (reason) => {
    console.error('[unhandledRejection]', reason);
    logActivity({
      type: 'server.unhandledRejection',
      severity: 'error',
      message: reason && reason.message ? reason.message : String(reason),
    });
  });
  process.on('uncaughtException', (err) => {
    console.error('[uncaughtException]', err);
    logActivity({
      type: 'server.uncaughtException',
      severity: 'error',
      message: err && err.message ? err.message : String(err),
      meta: { stack: err && err.stack ? String(err.stack).split('\n').slice(0, 6).join('\n') : undefined },
    });
    // Log-only: don't force-exit. If the process is truly wedged, Render restarts it.
  });
}

module.exports = {
  logActivity, monitor, errorHandler, installProcessHandlers,
  // Alert card + per-event settings (routes/admin.js alert-prefs endpoints, test alert)
  EVENT_CONFIG, eventConfig, effectiveDefaults, buildAlertEmail, invalidateAlertPrefs,
};
