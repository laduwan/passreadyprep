/**
 * Fast study breaks
 *
 * Every few minutes, finds the members whose study break is due — the day
 * and time they chose, on their own clock — and sends each one a text or
 * email with a link to a few questions from their weakest area
 * (utils/studyBreak.js decides what to send and does the sending).
 *
 * A member is due once per local day, within an hour of their chosen time,
 * so a missed tick or a restart catches up without ever sending twice. Only
 * accounts with access to the chosen exam get one: a lapsed trial or an
 * expired plan is skipped, and starts again when access does.
 *
 * Runs on a plain setInterval in-process, like the other jobs here.
 * STUDY_BREAKS_DISABLE=1 turns it off without a deploy.
 */
const User = require('../models/User');
const { accessFor } = require('../utils/access');
const { nceLevel } = require('../utils/nceAccess');
const { isDue, sendBreak } = require('../utils/studyBreak');

const LOG = '[studyBreaks]';
const CHECK_INTERVAL_MS = 5 * 60 * 1000;
const FIRST_RUN_DELAY_MS = 45 * 1000;   // let the Mongo connection settle after boot
const HAS_ACCESS = new Set(['trial', 'paid']);

let running = false;

async function runStudyBreaks({ now = new Date() } = {}) {
  if (running) return { skipped: 'running' };
  running = true;
  const out = { due: 0, sent: 0, noAccess: 0, failed: 0 };
  try {
    const users = await User.find({ 'studyBreak.enabled': true })
      .select('email phone smsOptedIn isGuest subscription trialStartedAt trialEndsAt nceAccess nceExamDate examDate studyBreak')
      .lean();
    for (const user of users) {
      const pref = user.studyBreak || {};
      if (!isDue(pref, now)) continue;
      out.due += 1;
      const level = pref.exam === 'nce' ? nceLevel(user, now) : accessFor(user, now).accessLevel;
      if (!HAS_ACCESS.has(level)) { out.noAccess += 1; continue; }
      try {
        const r = await sendBreak(user, { now });
        if (r.sendResult && r.sendResult.ok === false) out.failed += 1; else out.sent += 1;
      } catch (err) {
        out.failed += 1;
        console.error(`${LOG} send failed for ${user._id}:`, err.message);
      }
    }
    if (out.due) console.log(`${LOG} due ${out.due}, sent ${out.sent}, no access ${out.noAccess}, failed ${out.failed}`);
  } catch (err) {
    console.error(`${LOG} run error:`, err);
  } finally {
    running = false;
  }
  return out;
}

let intervalHandle = null;

function start() {
  if (intervalHandle) return;
  if (process.env.STUDY_BREAKS_DISABLE === '1') {
    console.log(`${LOG} Disabled (STUDY_BREAKS_DISABLE=1)`);
    return;
  }
  setTimeout(() => runStudyBreaks(), FIRST_RUN_DELAY_MS).unref();
  intervalHandle = setInterval(runStudyBreaks, CHECK_INTERVAL_MS);
  console.log(`${LOG} Scheduled (every ${CHECK_INTERVAL_MS / 60000} min)`);
}

module.exports = { start, runStudyBreaks, CHECK_INTERVAL_MS };
