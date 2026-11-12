// Inbound SMS from Twilio. Point the number's (or messaging service's)
// "A message comes in" webhook at POST /api/sms/inbound.
//
// Twilio's messaging services handle STOP at the carrier level and will stop
// delivering on their own; this keeps the account in step, so a member who
// texted STOP is not still counted as opted in anywhere else, and so a study
// break set to text stops at once. START turns texts back on.
//
// Requests are checked against the X-Twilio-Signature header when
// TWILIO_AUTH_TOKEN is set (https://www.twilio.com/docs/usage/webhooks/webhooks-security).
const express = require('express');
const crypto = require('crypto');
const User = require('../models/User');

const router = express.Router();

const STOP_WORDS = /^(STOP|STOPALL|UNSUBSCRIBE|CANCEL|END|QUIT)$/;
const START_WORDS = /^(START|UNSTOP|YES)$/;

function publicUrl(req) {
  const base = (process.env.CLIENT_URL || 'https://www.passreadyprep.com').replace(/\/+$/, '');
  return base + req.originalUrl;
}

function signatureOk(req) {
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!token) return true;                         // nothing to check against during setup
  const given = req.get('X-Twilio-Signature') || '';
  const body = req.body || {};
  const data = publicUrl(req) + Object.keys(body).sort().map((k) => k + body[k]).join('');
  const expected = crypto.createHmac('sha1', token).update(data).digest('base64');
  const a = Buffer.from(given), b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

// Twilio sends E.164 ("+15551234567"); the account may hold the number with
// spaces or dashes. Match on the last ten digits.
async function usersWithNumber(from) {
  const digits = String(from || '').replace(/\D/g, '');
  const last10 = digits.slice(-10);
  if (last10.length < 10) return [];
  const candidates = await User.find({ phone: { $regex: last10.slice(-4) + '\\s*$' } }).select('phone').lean();
  return candidates.filter((u) => String(u.phone || '').replace(/\D/g, '').endsWith(last10)).map((u) => u._id);
}

router.post('/inbound', express.urlencoded({ extended: false }), async (req, res) => {
  try {
    if (!signatureOk(req)) return res.status(403).end();
    const body = String((req.body && req.body.Body) || '').trim().toUpperCase();
    const ids = await usersWithNumber(req.body && req.body.From);
    if (ids.length && STOP_WORDS.test(body)) {
      await User.updateMany({ _id: { $in: ids } }, { $set: { smsOptedIn: false, 'studyBreak.enabled': false } });
    } else if (ids.length && START_WORDS.test(body)) {
      await User.updateMany({ _id: { $in: ids } }, { $set: { smsOptedIn: true, smsOptedInAt: new Date() } });
    }
  } catch (err) {
    console.error('sms inbound error', err);
  }
  // Twilio expects TwiML; an empty response sends nothing back.
  res.type('text/xml').send('<?xml version="1.0" encoding="UTF-8"?><Response></Response>');
});

module.exports = router;
