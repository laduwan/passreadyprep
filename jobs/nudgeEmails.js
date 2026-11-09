/**
 * Nudge emails on a schedule.
 *
 * The new-sign-up check-in, the win-back and the post-exam check-in have been
 * sent by hand since October with jobs/broadcast-winback.js. Same audiences,
 * same templates, same exclusions (that file still owns them, and still works
 * from the command line); this job only adds the clock and the once-per-account
 * bookkeeping, the way jobs/trialReminders.js does for the trial emails.
 *
 * Every hour it checks whether the current UTC hour is the send hour
 * (NUDGE_SEND_HOUR_UTC, default 15 = 10am Eastern / 7am Pacific), and then:
 *   new      accounts 1 to 30 days old with no paid plan and nothing studied
 *            in the last day. "Did you find what you were looking for?" Once.
 *   winback  accounts older than 30 days whose last study was 14 to 180 days
 *            ago. "Your prep is right where you left it." Once.
 *   checkin  the same group when their exam date has passed. "How did it go?"
 *            Once per exam date, so a new date earns a new check-in.
 * One email per account per run. Sent keys live in User.broadcastsSent:
 * nudge_new, nudge_winback, nudge_checkin_<YYYY-MM-DD>.
 *
 * These are marketing emails, so each carries the one-click unsubscribe link
 * and the job needs MAIL_POSTAL_ADDRESS (CAN-SPAM). Without the address it
 * logs once and sends nothing. NUDGE_EMAILS_DISABLE=1 turns it off with no
 * deploy. Started from server.js: require('./jobs/nudgeEmails').start();
 */

const User = require('../models/User');
const { sendMail } = require('../utils/mailer');
const { logActivity } = require('../utils/activity');
const { unsubscribeUrl } = require('../utils/unsubscribe');
const winback = require('./broadcast-winback');

const LOG = '[NudgeEmails]';
const CHECK_INTERVAL_MS = 60 * 60 * 1000;   // hourly
const FIRST_RUN_DELAY_MS = 90 * 1000;       // after the Mongo connection and the trial job settle
const MAX_PER_RUN = 100;                    // a ceiling on one hour's sending
const PACE_MS = 250;                        // Resend rate limits per team

const SEND_HOUR_UTC = Math.min(23, Math.max(0, parseInt(process.env.NUDGE_SEND_HOUR_UTC || '15', 10) || 0));

// Same list the command-line script honours.
const EXCLUDE = new Set((process.env.MAIL_EXCLUDE_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean));

const isoDay = (d) => new Date(d).toISOString().slice(0, 10);

const AUDIENCES = [
  { audience: 'new', minDays: 1, maxDays: 30, keyFor: () => 'nudge_new' },
  { audience: 'winback', minDays: 14, maxDays: 180, keyFor: (q) => (q.kind === 'checkin' ? 'nudge_checkin_' + isoDay(q.examDate) : 'nudge_winback') },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let warnedNoAddress = false;

// `force` skips the send-hour gate (tests, or a one-off run from a script).
async function runNudgeEmails({ force = false } = {}) {
  const stats = { checked: 0, queued: 0, sent: { new: 0, winback: 0, checkin: 0 }, errors: 0 };
  if (process.env.NUDGE_EMAILS_DISABLE === '1') return stats;

  const now = new Date();
  if (!force && now.getUTCHours() !== SEND_HOUR_UTC) return stats;

  const postalAddress = process.env.MAIL_POSTAL_ADDRESS;
  if (!postalAddress) {
    if (!warnedNoAddress) {
      console.warn(`${LOG} MAIL_POSTAL_ADDRESS is not set, so no nudge emails go out (commercial email must show a mailing address).`);
      warnedNoAddress = true;
    }
    return stats;
  }

  try {
    const lastStudy = await winback.lastStudyByUser();
    const users = await User.find({ role: 'user', isGuest: { $ne: true } })
      .select('email name role isGuest termsVersion prefs broadcastsSent subscription nceAccess examDate nceExamDate trialEndsAt createdAt')
      .lean();
    stats.checked = users.length;

    const queue = [];
    for (const user of users) {
      const row = lastStudy.get(String(user._id));
      for (const a of AUDIENCES) {
        const c = winback.classify(user, row, now, { audience: a.audience, minDays: a.minDays, maxDays: a.maxDays, onlyProduct: null, key: null, exclude: EXCLUDE });
        if (c.skip) continue;
        const key = a.keyFor(c);
        if (user.broadcastsSent && user.broadcastsSent[key]) continue;
        queue.push({ ...c, key });
        break; // one email per account per run
      }
    }
    stats.queued = queue.length;

    for (const q of queue.slice(0, MAX_PER_RUN)) {
      try {
        // Mark first, then send: a duplicate is worse for the recipient than a
        // missed one, so a crash mid-send errs toward not re-sending.
        await User.updateOne({ _id: q.user._id }, { $set: { ['broadcastsSent.' + q.key]: now } });
        const { subject, html } = winback.emailFor({ ...q, unsubUrl: unsubscribeUrl(q.user._id), postalAddress });
        const result = await sendMail({ to: q.user.email, subject, html, replyTo: process.env.MAIL_REPLY_TO || undefined });
        if (result && result.ok) stats.sent[q.kind] = (stats.sent[q.kind] || 0) + 1;
        else { stats.errors++; console.error(`${LOG} send failed for user ${q.user._id}`); }
      } catch (err) {
        stats.errors++;
        console.error(`${LOG} failed for user ${q.user._id}:`, err.message);
      }
      await sleep(PACE_MS);
    }
  } catch (err) {
    stats.errors++;
    console.error(`${LOG} top-level error:`, err.message);
  }

  const total = stats.sent.new + stats.sent.winback + stats.sent.checkin;
  if (total || stats.errors) {
    console.log(`${LOG} checked=${stats.checked} new=${stats.sent.new} winback=${stats.sent.winback} checkin=${stats.sent.checkin} errors=${stats.errors}`);
    logActivity({
      type: 'nudge.emails_run',
      severity: stats.errors ? 'warn' : 'info',
      message: `Nudge emails: ${stats.sent.new} new sign-up, ${stats.sent.winback} win-back, ${stats.sent.checkin} check-in`,
      meta: stats,
    });
  }
  return stats;
}

let intervalHandle = null;

function start() {
  if (intervalHandle) return;
  if (process.env.NUDGE_EMAILS_DISABLE === '1') {
    console.log(`${LOG} Disabled (NUDGE_EMAILS_DISABLE=1)`);
    return;
  }
  setTimeout(() => runNudgeEmails(), FIRST_RUN_DELAY_MS).unref();
  intervalHandle = setInterval(runNudgeEmails, CHECK_INTERVAL_MS);
  console.log(`${LOG} Scheduled (hourly check, sends at ${String(SEND_HOUR_UTC).padStart(2, '0')}:00 UTC)`);
}

module.exports = { start, runNudgeEmails, AUDIENCES };
