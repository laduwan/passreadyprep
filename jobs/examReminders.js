/**
 * Exam-date reminder texts.
 *
 * The third of the three message types members consent to at sign-up (the
 * other two live in jobs/trialReminders.js and routes/payment.js). This one is
 * the reason most people tick the box: they tell us their exam date during
 * onboarding, and a nudge a fortnight out is when a study plan can still be
 * changed.
 *
 * Two texts per exam date, no more:
 *   14 days out  — enough runway to actually do something differently
 *    3 days out  — review, logistics, show up
 *
 * Both NCMHCE (User.examDate) and NCE (User.nceExamDate) are covered; someone
 * sitting both exams gets reminders for each. Keyed by exam, window AND the
 * date itself in User.smsSent, so moving an exam date earns a fresh pair of
 * reminders while re-running the job never repeats one.
 *
 * SEND HOUR. This is the only one of the three that fires on a clock rather
 * than in response to something the member just did, so it is the only one
 * that could land at 4am. We do not store anyone's timezone, so it sends at
 * SMS_SEND_HOUR_UTC (default 18 = 1pm Eastern, 10am Pacific, 8am Hawaii) —
 * inside the 8am-9pm local window the TCPA requires everywhere in the US.
 * Do not lower this default without working out what it means in Hawaii.
 *
 * Consent is never checked here: utils/sms.js owns that, and canText() is the
 * only definition. Paid and free accounts both get these — an exam reminder is
 * not a sales pitch, and a paying member has more reason to want it.
 *
 * Runs on a plain setInterval, like jobs/trialReminders.js and
 * jobs/nudgeEmails.js, so it adds no cron dependency.
 * Started from server.js: require('./jobs/examReminders').start();
 * Set EXAM_REMINDERS_DISABLE=1 to turn it off without a deploy.
 */

const User = require('../models/User');
const { logActivity } = require('../utils/activity');
const { sendUserSms, canText, TEMPLATES } = require('../utils/sms');

const LOG = '[ExamReminders]';
const DAY_MS = 24 * 60 * 60 * 1000;

const CHECK_INTERVAL_MS = 60 * 60 * 1000;    // hourly; one hour of it sends
const FIRST_RUN_DELAY_MS = 150 * 1000;       // after the other two jobs settle
const MAX_PER_RUN = 200;
const PACE_MS = 250;

// Days before the exam that earn a text. Ordered soonest-first so that an
// account somehow due both only gets the more urgent one.
const WINDOWS = [3, 14];

const SEND_HOUR_UTC = Math.min(23, Math.max(0, parseInt(process.env.SMS_SEND_HOUR_UTC || '18', 10) || 0));

const isoDay = (d) => new Date(d).toISOString().slice(0, 10);

// The two exam dates an account can hold.
const EXAMS = [
  { exam: 'ncmhce', field: 'examDate' },
  { exam: 'nce', field: 'nceExamDate' },
];

/**
 * Which window this date falls in, or null.
 *
 * The job checks hourly but sends in one hour of the day, so each window is a
 * whole calendar day wide: "14 days out" means the exam is between 13 and 14
 * days away. A window narrower than the 24 hours between send hours could be
 * stepped over entirely and the text would never go.
 */
function windowFor(examAt, now) {
  const msAway = new Date(examAt).getTime() - now.getTime();
  if (msAway <= 0) return null;                      // today or past: nothing to send
  const daysAway = msAway / DAY_MS;
  for (const days of WINDOWS) {
    if (daysAway > days - 1 && daysAway <= days) return days;
  }
  return null;
}

// `force` skips the send-hour gate, for a one-off run from a script.
async function runExamReminders({ force = false } = {}) {
  const stats = { checked: 0, sent: 0, skipped: 0, errors: 0 };
  if (process.env.EXAM_REMINDERS_DISABLE === '1') return stats;

  const now = new Date();
  if (!force && now.getUTCHours() !== SEND_HOUR_UTC) return stats;

  try {
    // Only accounts that could be due something: opted in, with a number, and
    // with at least one exam date inside the widest window. The per-account
    // checks below are still what decides.
    const horizon = new Date(now.getTime() + Math.max(...WINDOWS) * DAY_MS);
    const candidates = await User.find({
      role: 'user',
      isGuest: { $ne: true },
      smsOptedIn: true,
      smsOptedOutAt: null,
      phone: { $ne: null },
      $or: [
        { examDate: { $gt: now, $lte: horizon } },
        { nceExamDate: { $gt: now, $lte: horizon } },
      ],
    })
      .select('email phone smsOptedIn smsOptedOutAt smsSent examDate nceExamDate')
      .limit(MAX_PER_RUN);

    stats.checked = candidates.length;

    for (const user of candidates) {
      try {
        if (!canText(user)) { stats.skipped++; continue; }

        for (const { exam, field } of EXAMS) {
          const examAt = user[field];
          if (!examAt) continue;
          const days = windowFor(examAt, now);
          if (!days) continue;

          const key = `exam_${exam}_${days}_${isoDay(examAt)}`;
          if ((user.smsSent || {})[key]) continue;

          // Marked before sending, as the trial and billing texts are: a
          // duplicate text costs money and irritates, a missed one does not.
          await User.updateOne({ _id: user._id }, { $set: { [`smsSent.${key}`]: new Date() } });
          const res = await sendUserSms(user, TEMPLATES.examApproaching(days), { type: key });
          if (res.sent) stats.sent++;
          else stats.errors++;

          await new Promise((r) => setTimeout(r, PACE_MS));
          break; // one text per account per run, even if both exams are due
        }
      } catch (userErr) {
        stats.errors++;
        console.error(`${LOG} failed for user ${user._id}:`, userErr.message);
      }
    }
  } catch (err) {
    stats.errors++;
    console.error(`${LOG} top-level error:`, err.message);
  }

  if (stats.sent || stats.errors) {
    console.log(`${LOG} checked=${stats.checked} sent=${stats.sent} skipped=${stats.skipped} errors=${stats.errors}`);
    logActivity({
      type: 'sms.exam_reminders_run',
      severity: stats.errors ? 'warn' : 'info',
      message: `Exam reminder texts: ${stats.sent} sent`,
      meta: stats,
    });
  }

  return stats;
}

let intervalHandle = null;

function start() {
  if (intervalHandle) return;
  if (process.env.EXAM_REMINDERS_DISABLE === '1') {
    console.log(`${LOG} Disabled (EXAM_REMINDERS_DISABLE=1)`);
    return;
  }
  setTimeout(() => runExamReminders(), FIRST_RUN_DELAY_MS).unref();
  intervalHandle = setInterval(runExamReminders, CHECK_INTERVAL_MS);
  console.log(`${LOG} Scheduled (hourly, sends at ${SEND_HOUR_UTC}:00 UTC)`);
}

module.exports = { start, runExamReminders, windowFor };
