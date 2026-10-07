/**
 * routes/inboundEmail.js
 * Inbound email via Resend Receiving (https://resend.com/docs/dashboard/receiving).
 *
 * Any mail sent to an address on PRP's receiving domain is accepted by Resend,
 * which POSTs an `email.received` event here. The event only carries metadata
 * (from / to / subject / attachment names) — the body has to be fetched from
 * Resend's Received emails API — so this route:
 *   1. verifies the webhook signature (Resend signs with Svix),
 *   2. answers 200 straight away so Resend doesn't retry a slow handler,
 *   3. logs an `email.received` activity event (visible in the admin panel),
 *   4. fetches the full message and forwards it to the inbox through the
 *      existing Brevo mailer, with Reply-To set to the original sender.
 *
 * Setup — Resend Dashboard → Webhooks → Add Webhook:
 *   URL:   https://www.passreadyprep.com/api/inbound-email/webhook
 *   Event: email.received
 * then copy that webhook's signing secret into RESEND_WEBHOOK_SECRET.
 *
 * ENV vars:
 *   RESEND_WEBHOOK_SECRET   — whsec_xxx, the signing secret of the webhook above.
 *                             Required: without it every request is refused.
 *   RESEND_INBOUND_API_KEY  — re_xxx, an API key on the Resend account that owns
 *                             PRP's receiving domain (used to fetch the body).
 *                             Kept separate from RESEND_API_KEY, which is
 *                             CounselorReady's key for the cross-promo job.
 *                             If unset, the forward carries metadata only.
 *   INBOUND_FORWARD_TO      — where received mail is forwarded. Defaults to
 *                             ADMIN_ALERT_EMAIL, then MAIL_FROM_EMAIL.
 *
 * The raw request body is needed for the signature check, so server.js
 * registers express.raw() for this path BEFORE express.json().
 */

const express = require('express');
const crypto = require('crypto');
const sanitizeHtml = require('sanitize-html');
const router = express.Router();
const { sendMail } = require('../utils/mailer');
const { logActivity } = require('../utils/activity');

const RESEND_RECEIVED_ENDPOINT = 'https://api.resend.com/emails/receiving/';
const TOLERANCE_SECONDS = 5 * 60; // reject replays older/newer than 5 minutes

// Resend (Svix) retries until it gets a 2xx, and may redeliver the same
// message. Remember recent message ids so a retry doesn't forward twice.
const SEEN_MAX = 500;
const seen = new Set();
function alreadySeen(id) {
  if (!id) return false;
  if (seen.has(id)) return true;
  seen.add(id);
  if (seen.size > SEEN_MAX) seen.delete(seen.values().next().value);
  return false;
}

// Svix signature check, done by hand so it adds no dependency.
// Signed content is `${svix-id}.${svix-timestamp}.${rawBody}`, HMAC-SHA256
// keyed with the base64 part of the whsec_ secret. The svix-signature header
// is a space-separated list of `v1,<base64sig>` entries (more than one during
// secret rotation); any match passes.
function verifySignature(rawBody, headers, secret) {
  const id = headers['svix-id'];
  const timestamp = headers['svix-timestamp'];
  const sigHeader = headers['svix-signature'];
  if (!id || !timestamp || !sigHeader) throw new Error('missing svix headers');

  const ts = parseInt(timestamp, 10);
  if (!Number.isFinite(ts) || Math.abs(Date.now() / 1000 - ts) > TOLERANCE_SECONDS) {
    throw new Error('timestamp outside tolerance');
  }

  const key = Buffer.from(String(secret).replace(/^whsec_/, ''), 'base64');
  const expected = crypto
    .createHmac('sha256', key)
    .update(`${id}.${timestamp}.${rawBody.toString('utf8')}`)
    .digest();

  const ok = String(sigHeader).split(' ').some((part) => {
    const [version, sig] = part.split(',');
    if (version !== 'v1' || !sig) return false;
    const given = Buffer.from(sig, 'base64');
    return given.length === expected.length && crypto.timingSafeEqual(given, expected);
  });
  if (!ok) throw new Error('signature mismatch');
}

// Full message (html / text / headers) from Resend's Received emails API.
// Returns null when no key is configured or the call fails — the caller still
// forwards the metadata so nothing is silently lost.
async function fetchReceivedEmail(emailId) {
  const apiKey = process.env.RESEND_INBOUND_API_KEY;
  if (!apiKey || !emailId) return null;
  try {
    const res = await fetch(RESEND_RECEIVED_ENDPOINT + encodeURIComponent(emailId), {
      headers: { Authorization: `Bearer ${apiKey}`, accept: 'application/json' },
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('[inbound-email] Resend fetch error', res.status, detail.slice(0, 300));
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error('[inbound-email] Resend fetch failed:', err.message);
    return null;
  }
}

function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/[&<>"]/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

// "Jane Doe <jane@x.com>" → "jane@x.com"; plain addresses pass through.
function bareAddress(from) {
  const m = String(from || '').match(/<([^>]+)>/);
  const addr = (m ? m[1] : String(from || '')).trim();
  return /^[^\s@]+@[^\s@]+$/.test(addr) ? addr : '';
}

async function handleReceived(data) {
  const to = Array.isArray(data.to) ? data.to : [];
  const attachments = Array.isArray(data.attachments) ? data.attachments : [];

  await logActivity({
    type: 'email.received',
    message: `${data.from || 'unknown sender'} → ${to.join(', ')}: ${data.subject || '(no subject)'}`,
    email: bareAddress(data.from) || undefined,
    path: '/api/inbound-email/webhook',
    meta: { emailId: data.email_id, to, subject: data.subject, attachments: attachments.length },
  });

  const forwardTo = process.env.INBOUND_FORWARD_TO || process.env.ADMIN_ALERT_EMAIL || process.env.MAIL_FROM_EMAIL;
  if (!forwardTo) return;

  const full = await fetchReceivedEmail(data.email_id);
  const header = [
    `From: ${data.from || ''}`,
    `To: ${to.join(', ')}`,
    Array.isArray(data.cc) && data.cc.length ? `Cc: ${data.cc.join(', ')}` : null,
    `Subject: ${data.subject || '(no subject)'}`,
    attachments.length
      ? `Attachments: ${attachments.map((a) => a.filename || a.id).join(', ')} (open in the Resend dashboard)`
      : null,
  ].filter(Boolean).join('\n');

  const bodyText = full && full.text ? full.text : '';
  const bodyHtml = full && full.html
    ? sanitizeHtml(full.html, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
        allowedSchemesByTag: { img: ['http', 'https', 'data'] },
      })
    : '';
  const missing = full ? '' : '\n\n(Body not fetched — set RESEND_INBOUND_API_KEY, or open the email in the Resend dashboard.)';

  const text = `${header}\n\n${bodyText}${missing}`;
  const html =
    '<pre style="font:13px/1.5 ui-monospace,Menlo,Consolas,monospace;white-space:pre-wrap;color:#475569">' +
    escapeHtml(header) + '</pre><hr>' +
    (bodyHtml || '<pre style="white-space:pre-wrap">' + escapeHtml(bodyText + missing) + '</pre>');

  await sendMail({
    to: forwardTo,
    subject: `[PRP inbox] ${data.subject || '(no subject)'}`,
    html,
    text,
    replyTo: bareAddress(data.from) || undefined,
  });
}

// ── POST /api/inbound-email/webhook ─────────────────────────────────────────
router.post('/webhook', async (req, res) => {
  const secret = process.env.RESEND_WEBHOOK_SECRET;
  if (!secret) {
    console.error('[inbound-email] RESEND_WEBHOOK_SECRET not set — refusing webhook.');
    return res.status(503).json({ error: 'Inbound email not configured' });
  }

  const raw = Buffer.isBuffer(req.body) ? req.body : Buffer.from('');
  try {
    verifySignature(raw, req.headers, secret);
  } catch (err) {
    console.error('[inbound-email] signature verification failed:', err.message);
    return res.status(400).json({ error: 'Invalid signature' });
  }

  let event;
  try {
    event = JSON.parse(raw.toString('utf8'));
  } catch (err) {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  // Acknowledge first: the body fetch + forward can take a few seconds, and
  // Resend retries anything that doesn't answer 2xx promptly.
  res.json({ received: true });

  if (!event || event.type !== 'email.received' || !event.data) return;
  if (alreadySeen(event.data.email_id || req.headers['svix-id'])) return;

  handleReceived(event.data).catch((err) =>
    console.error('[inbound-email] processing failed:', err.message));
});

module.exports = router;
