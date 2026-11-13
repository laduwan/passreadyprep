/**
 * routes/inboundSms.js
 * Inbound SMS from Twilio — the opt-out path for the A2P 10DLC campaign.
 *
 * WHAT TWILIO ALREADY DOES, AND WHY THIS STILL EXISTS.
 * Twilio handles STOP itself for US and Canadian numbers: the moment a member
 * texts STOP, Twilio blocks every further message to that number and answers
 * with its own confirmation. That block is held at Twilio, not here, and it is
 * the one that actually protects the member — it works even if this route is
 * broken or the server is down.
 *
 * So this route is not the opt-out mechanism; it is how our DATABASE learns
 * about it. Without it, User.smsOptedIn stays true for someone who has opted
 * out, every scheduled job keeps queueing texts to them, and each one comes
 * back as Twilio error 21610. Those rejections count against the campaign's
 * error rate, which is exactly what carriers look at. Keeping the flag in sync
 * means we stop asking.
 *
 * Because Twilio sends its own confirmation, this route replies with an EMPTY
 * TwiML document by default — replying here as well would send the member two
 * texts for one STOP. Set SMS_WEBHOOK_REPLY=1 only if Twilio's automatic
 * opt-out handling has been turned off for the sender.
 *
 * Setup — Twilio Console, on the Messaging Service (or the phone number)
 * that carries the PassReady Prep campaign:
 *   "A message comes in"  →  Webhook, HTTP POST
 *   URL: https://www.passreadyprep.com/api/sms/webhook
 *
 * ENV vars:
 *   TWILIO_AUTH_TOKEN  — required. The request signature is checked against
 *                        it; without it every request is refused, because an
 *                        unauthenticated endpoint here would let anyone opt
 *                        any phone number in or out.
 *   SMS_WEBHOOK_URL    — optional. The exact URL registered in the Twilio
 *                        console. Twilio signs that URL, and behind Render's
 *                        proxy we cannot always reconstruct it (the proxy
 *                        terminates TLS, so the inbound request looks like
 *                        http). Set this if signature checks fail.
 *   SMS_WEBHOOK_REPLY  — optional, '1' to answer with our own text. See above.
 *
 * The body arrives form-encoded, so server.js registers express.urlencoded()
 * for this path.
 */

const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const User = require('../models/User');
const { logActivity } = require('../utils/activity');
const { phoneVariants } = require('../utils/sms');

const LOG = '[inbound-sms]';

// The keyword sets. These mirror the Messaging Service's Opt-Out Management
// settings, but the two lists are NOT symmetrical, because getting them wrong
// fails in opposite directions.
//
// OPT_OUT may be a SUPERSET of what Twilio acts on. If we treat a word as a
// STOP that Twilio does not, we stop sending to someone who meant to leave —
// which is the error worth making.
//
// OPT_IN must be a SUBSET of Twilio's opt-in keywords. Twilio's block is the
// one that actually governs delivery, so if we re-subscribe someone it still
// has blocked, every later send is rejected (error 21610) and that error rate
// is what carriers measure. 'yes' was here and is not one of Twilio's
// (Start / Unstop): it is also far too common a reply to mean "resubscribe
// me". If you add a word here, add it in the console first.
const OPT_OUT = new Set(['stop', 'stopall', 'unsubscribe', 'cancel', 'end', 'quit', 'stop all', 'revoke', 'optout', 'opt-out']);
const OPT_IN = new Set(['start', 'unstop']);
const HELP = new Set(['help', 'info']);

const HELP_TEXT =
  'PassReady Prep exam-prep alerts. Help: support@passreadyprep.com. '
  + 'Msg freq varies. Msg&data rates may apply. Reply STOP to cancel.';

// Twilio can deliver the same message twice on a retry. Remember recent
// MessageSids so one STOP is not logged as two.
const SEEN_MAX = 500;
const seen = new Set();
function alreadySeen(sid) {
  if (!sid) return false;
  if (seen.has(sid)) return true;
  seen.add(sid);
  if (seen.size > SEEN_MAX) seen.delete(seen.values().next().value);
  return false;
}

/**
 * Twilio's request signature, verified by hand so this adds no dependency
 * (the same choice routes/inboundEmail.js makes for Svix).
 *
 * Twilio builds the signed string by taking the full request URL and then,
 * for each POST parameter in alphabetical order by name, appending the name
 * followed by its value — no separators. That string is HMAC-SHA1'd with the
 * account's auth token and base64-encoded.
 *
 * The URL has to match the one Twilio requested byte for byte. Behind a TLS
 * terminating proxy the scheme is lost, so each candidate URL is checked in
 * turn; a candidate only passes by producing the right HMAC, so trying
 * several costs nothing in security.
 */
function signedPayload(url, params) {
  return Object.keys(params).sort().reduce((acc, key) => acc + key + params[key], url);
}

function verifyTwilioSignature(req, token) {
  const given = req.get('X-Twilio-Signature');
  if (!given) throw new Error('missing X-Twilio-Signature header');

  const params = req.body && typeof req.body === 'object' ? req.body : {};
  const host = req.get('host');
  const candidates = [
    process.env.SMS_WEBHOOK_URL,
    `https://${host}${req.originalUrl}`,
    `http://${host}${req.originalUrl}`,
  ].filter(Boolean);

  const givenBuf = Buffer.from(given, 'base64');
  const ok = candidates.some((url) => {
    const expected = crypto.createHmac('sha1', token).update(signedPayload(url, params)).digest();
    return givenBuf.length === expected.length && crypto.timingSafeEqual(givenBuf, expected);
  });
  if (!ok) throw new Error('signature mismatch');
}

/** First word of the message, lowercased and stripped of punctuation. */
function keywordOf(body) {
  const text = String(body == null ? '' : body).trim().toLowerCase();
  const cleaned = text.replace(/[^a-z\s-]/g, '').trim();
  if (OPT_OUT.has(cleaned) || OPT_IN.has(cleaned) || HELP.has(cleaned)) return cleaned;
  return cleaned.split(/\s+/)[0] || '';
}

function twiml(message) {
  return message
    ? `<?xml version="1.0" encoding="UTF-8"?><Response><Message>${message}</Message></Response>`
    : '<?xml version="1.0" encoding="UTF-8"?><Response></Response>';
}

/**
 * Apply an opt-out or opt-in to every account holding this number.
 *
 * updateMany, not updateOne: a couple sharing one mobile, or someone who made
 * a second account, must both go quiet on one STOP. Silencing only the first
 * match found would keep texting a number that has opted out.
 */
async function applyKeyword(from, optingOut) {
  const variants = phoneVariants(from);
  if (!variants.length) return { matched: 0 };

  const update = optingOut
    ? { $set: { smsOptedIn: false, smsOptedOutAt: new Date() } }
    // An inbound START is an explicit, logged consent from the handset, which
    // is exactly what a carrier wants to see. It only ever re-enables a number
    // that was already in our records; it cannot enrol a stranger.
    : { $set: { smsOptedIn: true, smsOptedInAt: new Date(), smsOptedOutAt: null } };

  const res = await User.updateMany({ phone: { $in: variants } }, update);
  return { matched: res.matchedCount != null ? res.matchedCount : res.n || 0 };
}

// ── POST /api/sms/webhook ───────────────────────────────────────────────────
router.post('/webhook', async (req, res) => {
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!token) {
    console.error(`${LOG} TWILIO_AUTH_TOKEN not set — refusing webhook.`);
    return res.status(503).type('text/xml').send(twiml());
  }

  try {
    verifyTwilioSignature(req, token);
  } catch (err) {
    console.error(`${LOG} signature verification failed:`, err.message);
    return res.status(403).type('text/xml').send(twiml());
  }

  const from = req.body.From || '';
  const keyword = keywordOf(req.body.Body);
  const sid = req.body.MessageSid || req.body.SmsMessageSid;

  const optingOut = OPT_OUT.has(keyword);
  const optingIn = OPT_IN.has(keyword);
  const askingHelp = HELP.has(keyword);

  // Answer before doing the database work: Twilio times the webhook out at
  // 15 seconds, and the reply body does not depend on the update's result.
  const ourReply = process.env.SMS_WEBHOOK_REPLY === '1' && askingHelp ? HELP_TEXT : '';
  res.type('text/xml').send(twiml(ourReply));

  if (alreadySeen(sid)) return;

  try {
    if (optingOut || optingIn) {
      const { matched } = await applyKeyword(from, optingOut);
      const action = optingOut ? 'opted out of' : 'opted back in to';
      console.log(`${LOG} ${from} ${action} SMS (${matched} account${matched === 1 ? '' : 's'} updated)`);
      await logActivity({
        type: optingOut ? 'sms.opt_out' : 'sms.opt_in',
        // An opt-out that matched no account means a number we hold is stored
        // in a shape phoneVariants() does not cover, and a real member will
        // keep being texted. That is worth seeing in the admin feed.
        severity: matched ? 'info' : 'warn',
        message: matched
          ? `${from} ${action} text messages (${matched} account${matched === 1 ? '' : 's'})`
          : `${from} ${action} text messages, but no account holds that number`,
        path: '/api/sms/webhook',
        meta: { keyword, matched },
      });
      return;
    }

    // Anything else: HELP, or a reply we do not act on. Logged, never ignored
    // silently — someone texting back is sometimes a real person needing help.
    await logActivity({
      type: askingHelp ? 'sms.help' : 'sms.inbound',
      severity: 'info',
      message: `${from}: ${String(req.body.Body || '').slice(0, 200)}`,
      path: '/api/sms/webhook',
      meta: { keyword },
    });
  } catch (err) {
    console.error(`${LOG} processing failed:`, err.message);
  }
});

module.exports = router;
