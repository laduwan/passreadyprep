// ============================================================================
// Mailer — transactional email via Resend (https://resend.com/docs/api-reference),
// with Brevo kept as a fallback during the switch-over. SMS goes via Twilio when
// its credentials are set, otherwise Brevo. Uses global fetch (Node 18+), so it
// adds no dependencies.
//
// Configure with environment variables:
//   PRP_RESEND_API_KEY — PRP's Resend API key (re_xxx). When set, all email goes
//                        through Resend. Named apart from RESEND_API_KEY, which
//                        is CounselorReady's key (jobs/broadcast-prp-crosspromo.js).
//                        routes/inboundEmail.js uses this key too.
//   BREVO_API_KEY      — used for email only while PRP_RESEND_API_KEY is unset,
//                        and for SMS only while Twilio is not configured.
//   TWILIO_ACCOUNT_SID + TWILIO_AUTH_TOKEN, plus TWILIO_FROM or
//                        TWILIO_MESSAGING_SERVICE_SID — when set, all SMS goes
//                        through Twilio (see sendSms below).
//   MAIL_FROM_EMAIL    — the sender address, on a domain verified in Resend,
//                        e.g. noreply@passreadyprep.com
//   MAIL_FROM_NAME     — display name, e.g. "PassReady Prep"
//
// sendMail also takes an optional replyTo address (used by the inbound-email
// forward so replying reaches the original sender).
//
// If neither key is set, sendMail logs the message to the server console
// instead of sending — so password reset works end-to-end in development and
// you can copy the link from the logs while you finish DNS/domain verification.
// ============================================================================

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const BREVO_ENDPOINT = 'https://api.brevo.com/v3/smtp/email';
const BREVO_SMS_ENDPOINT = 'https://api.brevo.com/v3/transactionalSMS/sms';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function sendMail({ to, subject, html, text, replyTo }) {
  // Guest accounts (iOS app) have a placeholder address that cannot receive
  // mail; skip it here so no job or route ever sends to one.
  if (typeof to === 'string' && to.toLowerCase().endsWith('@guest.passreadyprep.invalid')) {
    return { ok: true, skipped: 'guest' };
  }
  const fromEmail = process.env.MAIL_FROM_EMAIL || 'noreply@passreadyprep.com';
  const fromName = process.env.MAIL_FROM_NAME || 'PassReady Prep';
  const resendKey = process.env.PRP_RESEND_API_KEY;
  const brevoKey = process.env.BREVO_API_KEY;

  // Dev / not-yet-configured fallback: don't fail, just log so the flow works.
  if (!resendKey && !brevoKey) {
    console.log('[mailer] PRP_RESEND_API_KEY not set — email NOT sent. Details:');
    console.log('[mailer]   to:', to);
    console.log('[mailer]   subject:', subject);
    console.log('[mailer]   body:\n' + (text || html || ''));
    return { ok: true, dev: true };
  }

  if (typeof fetch !== 'function') {
    console.error('[mailer] global fetch is unavailable (needs Node 18+). Email not sent.');
    return { ok: false, error: 'fetch unavailable' };
  }

  return resendKey
    ? sendViaResend({ apiKey: resendKey, fromEmail, fromName, to, subject, html, text, replyTo })
    : sendViaBrevo({ apiKey: brevoKey, fromEmail, fromName, to, subject, html, text, replyTo });
}

async function sendViaResend({ apiKey, fromEmail, fromName, to, subject, html, text, replyTo }) {
  const body = JSON.stringify({
    from: `${fromName} <${fromEmail}>`,
    to: [to],
    subject,
    html,
    text,
    ...(replyTo ? { reply_to: replyTo } : {}),
  });

  // Resend rate-limits per team (429). The broadcast loops pace sends at ~5/s,
  // which can exceed the default limit — so wait out a 429 and retry, rather
  // than dropping that recipient.
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(RESEND_ENDPOINT, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body,
      });

      if (res.status === 429 && attempt < 2) {
        const wait = parseFloat(res.headers.get('retry-after')) || 1;
        await sleep(Math.min(wait, 10) * 1000);
        continue;
      }
      if (!res.ok) {
        const detail = await res.text().catch(() => '');
        console.error('[mailer] Resend error', res.status, detail.slice(0, 300));
        return { ok: false, status: res.status };
      }
      return { ok: true };
    } catch (err) {
      console.error('[mailer] send failed:', err.message);
      return { ok: false, error: err.message };
    }
  }
  return { ok: false, status: 429 };
}

async function sendViaBrevo({ apiKey, fromEmail, fromName, to, subject, html, text, replyTo }) {
  try {
    const res = await fetch(BREVO_ENDPOINT, {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        sender: { name: fromName, email: fromEmail },
        to: [{ email: to }],
        subject,
        htmlContent: html,
        textContent: text,
        ...(replyTo ? { replyTo: { email: replyTo } } : {}),
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('[mailer] Brevo error', res.status, detail.slice(0, 300));
      return { ok: false, status: res.status };
    }
    return { ok: true };
  } catch (err) {
    console.error('[mailer] send failed:', err.message);
    return { ok: false, error: err.message };
  }
}

module.exports = { sendMail, sendSms };

// Transactional SMS. Prefers Twilio when its credentials are set, with Brevo
// as a fallback (mirrors how email prefers Resend over Brevo).
//   Twilio: TWILIO_ACCOUNT_SID + TWILIO_AUTH_TOKEN, and a sender — either
//           TWILIO_FROM (an SMS-enabled number in E.164, e.g. +15551234567)
//           or TWILIO_MESSAGING_SERVICE_SID.
//   Brevo:  BREVO_API_KEY + SMS_SENDER (up to 11 chars, default "PassReady").
// `to` may be given with or without a leading '+': it is normalized to E.164
// for Twilio and stripped of any '+' for Brevo, so one ADMIN_ALERT_SMS_TO value
// works for either. If no provider is configured, logs instead of sending (so
// nothing errors during setup).
async function sendSms({ to, text }) {
  const twilioReady = !!(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN &&
    (process.env.TWILIO_FROM || process.env.TWILIO_MESSAGING_SERVICE_SID));
  const brevoKey = process.env.BREVO_API_KEY;

  if ((!twilioReady && !brevoKey) || !to) {
    console.log('[mailer] SMS not sent (no SMS provider configured or no recipient). Would send to', to, ':', text);
    return { ok: true, dev: true };
  }
  if (typeof fetch !== 'function') {
    console.error('[mailer] global fetch unavailable (needs Node 18+). SMS not sent.');
    return { ok: false, error: 'fetch unavailable' };
  }
  return twilioReady ? sendSmsViaTwilio({ to, text }) : sendSmsViaBrevo({ to, text });
}

// E.164: digits with a single leading '+'. Accepts "15551234567" or "+1555…".
function toE164(n) {
  const s = String(n == null ? '' : n).replace(/[^\d+]/g, '');
  return s.startsWith('+') ? s : '+' + s;
}

async function sendSmsViaTwilio({ to, text }) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const params = new URLSearchParams();
  params.set('To', toE164(to));
  if (process.env.TWILIO_FROM) params.set('From', process.env.TWILIO_FROM);
  else params.set('MessagingServiceSid', process.env.TWILIO_MESSAGING_SERVICE_SID);
  params.set('Body', String(text || '').slice(0, 300));
  try {
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${encodeURIComponent(sid)}/Messages.json`, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer.from(`${sid}:${token}`).toString('base64'),
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      body: params.toString(),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('[mailer] Twilio SMS error', res.status, detail.slice(0, 300));
      return { ok: false, status: res.status, provider: 'twilio', ...providerError(detail) };
    }
    return { ok: true, provider: 'twilio' };
  } catch (err) {
    console.error('[mailer] Twilio SMS send failed:', err.message);
    return { ok: false, provider: 'twilio', error: err.message };
  }
}

// Twilio and Brevo both answer a rejected send with JSON carrying a numeric
// code and a human message (e.g. Twilio 30034 "unregistered 10DLC number",
// 21211 "invalid To number", 20003 "authentication failed"). Surface those so
// the admin test-alert button can show the real reason, not just "failed".
function providerError(detail) {
  try {
    const j = JSON.parse(detail);
    return { code: j.code != null ? String(j.code) : undefined, message: j.message || undefined };
  } catch (e) {
    return { message: detail ? String(detail).slice(0, 200) : undefined };
  }
}

async function sendSmsViaBrevo({ to, text }) {
  const apiKey = process.env.BREVO_API_KEY;
  const sender = (process.env.SMS_SENDER || 'PassReady').slice(0, 11);
  try {
    const res = await fetch(BREVO_SMS_ENDPOINT, {
      method: 'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        type: 'transactional',
        sender,
        recipient: String(to).replace(/^\+/, ''), // Brevo wants no leading '+'
        content: String(text || '').slice(0, 300),
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('[mailer] Brevo SMS error', res.status, detail.slice(0, 300));
      return { ok: false, status: res.status, provider: 'brevo', ...providerError(detail) };
    }
    return { ok: true, provider: 'brevo' };
  } catch (err) {
    console.error('[mailer] SMS send failed:', err.message);
    return { ok: false, provider: 'brevo', error: err.message };
  }
}
