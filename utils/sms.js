/**
 * Customer SMS — the single guarded path to a member's phone.
 *
 * utils/mailer.js's sendSms() is the raw transport and knows nothing about
 * consent; it is used for ADMIN_ALERT_SMS_TO, which is our own number. Anything
 * aimed at a MEMBER must go through sendUserSms() here instead, because this is
 * the only place that checks consent before sending.
 *
 *   Never call mailer's sendSms() directly with a member's number.
 *
 * Why that matters beyond politeness: the A2P 10DLC campaign was approved on a
 * description that promises consent is collected at registration and that STOP
 * works. Texting someone who never ticked the box, or who replied STOP, is the
 * thing that gets a campaign suspended — and Twilio rejects the message anyway
 * (error 21610), so the only result is an error rate the carrier can see.
 *
 * PHONE NUMBER SHAPE. Sign-ups since this file landed store E.164
 * ("+15551234567", routes/auth.js). Older rows hold whatever the user typed
 * with punctuation stripped ("5551234567"), and Twilio's inbound webhook always
 * reports E.164. phoneVariants() exists so a number can be found whichever way
 * it was stored — a mismatch here fails SILENTLY, which in an opt-out path is
 * the worst kind of bug there is.
 */
const { sendSms } = require('./mailer');

const LOG = '[sms]';

/** Digits only, no country code, for comparing two differently-formatted numbers. */
function digitsOf(raw) {
  const d = String(raw == null ? '' : raw).replace(/\D/g, '');
  // A US number stored as 11 digits starting 1 is the same as the 10-digit form.
  return d.length === 11 && d.startsWith('1') ? d.slice(1) : d;
}

/** E.164 for sending. Assumes +1 when no country code is given (US/CA market). */
function toE164(raw) {
  const s = String(raw == null ? '' : raw).trim();
  if (s.startsWith('+')) return '+' + s.slice(1).replace(/\D/g, '');
  const d = s.replace(/\D/g, '');
  if (!d) return '';
  if (d.length === 10) return '+1' + d;
  if (d.length === 11 && d.startsWith('1')) return '+' + d;
  return '+' + d;
}

/**
 * Every spelling of one number that might be sitting in User.phone, for an
 * exact-match `{ phone: { $in: phoneVariants(from) } }` lookup. Exact match
 * rather than a regex so the query can use an index and so a 7-digit suffix
 * can never match the wrong member.
 */
function phoneVariants(raw) {
  const d = digitsOf(raw);
  if (!d) return [];
  const out = new Set([d, '+' + d]);
  if (d.length === 10) {        // US/CA: the four shapes we have ever stored
    out.add('1' + d);
    out.add('+1' + d);
  }
  return [...out];
}

/**
 * May we text this member? Every condition is a reason a carrier would say no.
 * Keep this the only definition — no route should assemble its own.
 */
function canText(user) {
  if (!user) return false;
  if (user.smsOptedIn !== true) return false;   // never opted in, or opted out
  if (user.smsOptedOutAt) return false;         // replied STOP
  return !!toE164(user.phone);
}

/**
 * Send one message to a member. Returns { sent, reason } and NEVER throws —
 * a failed text must not break a signup, a payment webhook or a nightly job.
 *
 * `type` is for the log only, so a bounce can be traced to whatever sent it.
 */
async function sendUserSms(user, text, { type = 'unspecified' } = {}) {
  if (!canText(user)) {
    return { sent: false, reason: user && user.smsOptedOutAt ? 'opted out' : 'no consent or no number' };
  }
  const to = toE164(user.phone);
  try {
    const res = await sendSms({ to, text });
    if (!res || res.ok === false) {
      console.warn(`${LOG} ${type} not delivered to user ${user._id}:`, res && (res.error || res.message || res.status));
      return { sent: false, reason: (res && (res.message || res.error || res.status)) || 'send failed' };
    }
    return { sent: true, dev: !!res.dev };
  } catch (err) {
    console.error(`${LOG} ${type} send threw for user ${user._id}:`, err.message);
    return { sent: false, reason: err.message };
  }
}

/**
 * The message templates. Kept in one place so the text the carrier approved
 * and the text we actually send stay the same thing.
 *
 * RULES — `node tools/sms/check-templates.js` checks all four:
 *   - name the brand, so nobody gets an unidentified text
 *   - carry "STOP" (the opt-in confirmation carries HELP too, as required)
 *   - stay inside GSM-7: one curly quote or em dash drops the segment size
 *     from 160 characters to 70 and can split a message in two
 *   - fit one segment, and use no link shortener — shared shortener domains
 *     are a spam signal that gets campaigns filtered. Full domain always.
 *
 * These are the samples registered with the campaign. Changing one means
 * updating the campaign too.
 */
const TEMPLATES = {
  // Sent once, immediately after someone ticks the consent box at sign-up.
  // Carriers want all of: brand, confirmation, frequency, rates, HELP, STOP.
  optInConfirm: () =>
    "PassReady Prep: You're subscribed to trial, billing & exam-prep alerts. "
    + 'Msg freq varies. Msg&data rates may apply. Reply HELP for help, STOP to cancel.',

  trialEndingSoon: () =>
    'PassReady Prep: your free trial ends in 1 day. Your progress is saved. '
    + 'Pick a plan: passreadyprep.com/checkout.html Reply STOP to opt out.',

  paymentFailed: () =>
    "PassReady Prep: we couldn't take payment for your plan. Update your card at "
    + 'passreadyprep.com/account.html to keep access. Reply STOP to opt out.',

  examApproaching: (days) =>
    `PassReady Prep: your exam is ${days} days away. Pick up your study plan at `
    + 'passreadyprep.com/study Reply STOP to opt out.',
};

module.exports = { sendUserSms, canText, toE164, digitsOf, phoneVariants, TEMPLATES };
