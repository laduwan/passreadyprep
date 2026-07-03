// ============================================================================
// Mailer — transactional email via Brevo (https://developers.brevo.com).
// Uses global fetch (Node 18+), so it adds no dependencies.
//
// Configure with environment variables:
//   BREVO_API_KEY    — your Brevo API key (Settings → SMTP & API → API Keys)
//   MAIL_FROM_EMAIL  — the verified sender address, e.g. noreply@passreadyprep.com
//   MAIL_FROM_NAME   — display name, e.g. "PassReady Prep"
//
// If BREVO_API_KEY is not set, sendMail logs the message to the server console
// instead of sending — so password reset works end-to-end in development and
// you can copy the link from the logs while you finish DNS/domain verification.
// ============================================================================

const BREVO_ENDPOINT = 'https://api.brevo.com/v3/smtp/email';
const BREVO_SMS_ENDPOINT = 'https://api.brevo.com/v3/transactionalSMS/sms';

async function sendMail({ to, subject, html, text }) {
  const fromEmail = process.env.MAIL_FROM_EMAIL || 'noreply@passreadyprep.com';
  const fromName = process.env.MAIL_FROM_NAME || 'PassReady Prep';
  const apiKey = process.env.BREVO_API_KEY;

  // Dev / not-yet-configured fallback: don't fail, just log so the flow works.
  if (!apiKey) {
    console.log('[mailer] BREVO_API_KEY not set — email NOT sent. Details:');
    console.log('[mailer]   to:', to);
    console.log('[mailer]   subject:', subject);
    console.log('[mailer]   body:\n' + (text || html || ''));
    return { ok: true, dev: true };
  }

  if (typeof fetch !== 'function') {
    console.error('[mailer] global fetch is unavailable (needs Node 18+). Email not sent.');
    return { ok: false, error: 'fetch unavailable' };
  }

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

// Transactional SMS via Brevo. Requires SMS credits and a registered sender.
//   BREVO_API_KEY  — same key as email
//   SMS_SENDER     — up to 11 alphanumeric chars shown as the sender (default "PassReady")
// `to` must be international format without '+', e.g. 15551234567.
// If not configured, logs instead of sending (so nothing errors during setup).
async function sendSms({ to, text }) {
  const apiKey = process.env.BREVO_API_KEY;
  const sender = (process.env.SMS_SENDER || 'PassReady').slice(0, 11);

  if (!apiKey || !to) {
    console.log('[mailer] SMS not sent (missing BREVO_API_KEY or recipient). Would send to', to, ':', text);
    return { ok: true, dev: true };
  }
  if (typeof fetch !== 'function') {
    console.error('[mailer] global fetch unavailable (needs Node 18+). SMS not sent.');
    return { ok: false, error: 'fetch unavailable' };
  }
  try {
    const res = await fetch(BREVO_SMS_ENDPOINT, {
      method: 'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        type: 'transactional',
        sender,
        recipient: String(to),
        content: String(text || '').slice(0, 300),
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('[mailer] Brevo SMS error', res.status, detail.slice(0, 300));
      return { ok: false, status: res.status };
    }
    return { ok: true };
  } catch (err) {
    console.error('[mailer] SMS send failed:', err.message);
    return { ok: false, error: err.message };
  }
}
