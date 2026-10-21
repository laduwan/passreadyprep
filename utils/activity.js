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

  const when = new Date().toISOString();
  const extra = gate.suppressed > 0 ? `\n(+${gate.suppressed} more similar since the last alert)` : '';
  const subject = `[PassReady ${doc.severity.toUpperCase()}] ${doc.type}`;
  const lines = [
    `Type: ${doc.type}`,
    `Severity: ${doc.severity}`,
    doc.message ? `Message: ${doc.message}` : null,
    doc.email ? `User: ${doc.email}` : null,
    doc.path ? `Path: ${doc.path}` : null,
    doc.ip ? `IP: ${doc.ip}` : null,
    doc.meta ? `Details: ${safeJson(doc.meta)}` : null,
    `Time: ${when}`,
  ].filter(Boolean);
  const text = lines.join('\n') + extra;
  const html = '<pre style="font:13px/1.5 ui-monospace,Menlo,Consolas,monospace;white-space:pre-wrap">' +
    escapeHtml(text) + '</pre>';

  const results = [];
  if (to) results.push(await sendMail({ to, subject, html, text }));
  // ADMIN_ALERT_SMS_TO may be a comma list so a submission can text more than
  // one phone (e.g. the owner and the admin reviewing score reports).
  if (smsTo && decideSms(doc)) {
    const smsBody = subject + (doc.message ? ' — ' + doc.message : '');
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

module.exports = { logActivity, monitor, errorHandler, installProcessHandlers };
