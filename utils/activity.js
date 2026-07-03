// ============================================================================
// Activity tracking + admin alerts.
//
// logActivity(...) records an event and — for important ones — emails/texts the
// admin. It is best-effort: it never throws and never blocks the request it was
// called from, so tracking can't break the app.
//
// Env vars:
//   ADMIN_ALERT_EMAIL     — where alerts go (falls back to MAIL_FROM_EMAIL)
//   ADMIN_ALERT_SMS_TO    — optional phone in intl format (e.g. 15551234567) for SMS alerts
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

function throttleGate(key) {
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
  const gate = throttleGate(key);
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

  if (to) await sendMail({ to, subject, html, text });
  if (smsTo) await sendSms({ to: smsTo, text: subject + (doc.message ? ' — ' + doc.message : '') });

  if (saved) { try { saved.notified = true; await saved.save(); } catch (e) {} }
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
