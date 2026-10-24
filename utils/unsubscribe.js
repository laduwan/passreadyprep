// One-click email unsubscribe links for marketing email (broadcasts, win-back).
//
// The link carries the user id and an HMAC of it, so it works without signing
// in and can't be forged to unsubscribe someone else. The link opens a
// confirm page (GET) whose button POSTs back, so mail scanners that prefetch
// links don't unsubscribe anyone. Confirming sets User.prefs.digestOptOut, the
// same flag every broadcast and digest already respects. Signed with UNSUBSCRIBE_SECRET, falling back to JWT_SECRET.

const crypto = require('crypto');

const BASE_URL = process.env.CLIENT_URL || 'https://passreadyprep.com';

function secret() {
  const s = process.env.UNSUBSCRIBE_SECRET || process.env.JWT_SECRET;
  if (!s) throw new Error('UNSUBSCRIBE_SECRET or JWT_SECRET must be set');
  return s;
}

function unsubscribeToken(userId) {
  return crypto.createHmac('sha256', secret()).update('unsub:' + String(userId)).digest('hex').slice(0, 32);
}

function verifyUnsubscribeToken(userId, token) {
  if (!userId || typeof token !== 'string' || token.length !== 32) return false;
  const expected = Buffer.from(unsubscribeToken(userId));
  const given = Buffer.from(token);
  return expected.length === given.length && crypto.timingSafeEqual(expected, given);
}

function unsubscribeUrl(userId) {
  return `${BASE_URL}/api/auth/unsubscribe?u=${encodeURIComponent(String(userId))}&t=${unsubscribeToken(userId)}`;
}

module.exports = { unsubscribeToken, verifyUnsubscribeToken, unsubscribeUrl };
