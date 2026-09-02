/**
 * Trial Reminder Emails
 *
 * PassReady Prep's free trial is short (TRIAL_DAYS, default 3), and until now
 * it was purely reactive — a user only found out it had ended when they hit a
 * gated case and got a 402 from routes/content.js. This job proactively emails
 * accounts before and after that happens, so people don't just go quiet and
 * churn without ever seeing a call to action.
 *
 * Two emails, each sent at most once per account (tracked in
 * User.trialEmailsSent so re-runs don't duplicate):
 *   - 'ending_soon' — trial ends within the next ~24 hours
 *   - 'ended'       — trial ended within the last ENDED_WINDOW_DAYS, and the
 *                     account is still on the free tier (anyone who upgraded
 *                     is never a candidate)
 *
 * The 'ended' look-back window matters: without it, the very first run after
 * deploy would email every free-tier account that has ever lapsed, including
 * signups from months ago. The window keeps this to people whose trial just
 * ended, which is also the only moment the email is useful.
 *
 * Runs on a plain setInterval rather than adding a cron dependency — this
 * matches utils/mailer.js's "add no dependencies" approach. The service runs on
 * Render's always-on starter plan, so an in-process interval is reliable here
 * (unlike a free-tier service that sleeps). Checking hourly gives the ~24-hour
 * "ending soon" window enough slack to fire reliably without needing exact
 * midnight timing.
 *
 * Started from server.js: require('./jobs/trialReminders').start();
 * Set TRIAL_REMINDERS_DISABLE=1 to turn the sending off without a code change.
 */

const User = require('../models/User');
const { sendMail } = require('../utils/mailer');
const { logActivity } = require('../utils/activity');
const { TRIAL_DAYS, trialEndFor } = require('../utils/trial');

const LOG = '[TrialReminders]';
const DAY_MS = 24 * 60 * 60 * 1000;

const CHECK_INTERVAL_MS = 60 * 60 * 1000;   // hourly
const FIRST_RUN_DELAY_MS = 30 * 1000;       // let the Mongo connection settle after boot
const ENDING_SOON_WINDOW_MS = DAY_MS;       // "ends within 24h"
const ENDED_WINDOW_MS = 7 * DAY_MS;         // only email about a trial that ended recently
const MAX_PER_RUN = 200;                    // a sane ceiling on one hour's sending

const APP_URL = (process.env.APP_URL || 'https://www.passreadyprep.com').replace(/\/+$/, '');

function firstName(user) {
  return (user.name || '').trim().split(/\s+/)[0] || 'there';
}

function ctaButton() {
  return `
        <div style="text-align:center;margin:30px 0;">
          <a href="${APP_URL}/checkout.html"
             style="display:inline-block;background:#0F172A;color:#fff;padding:14px 28px;text-decoration:none;border-radius:8px;font-weight:600;">
            Choose a plan
          </a>
        </div>`;
}

function endingSoonEmail(user, trialEnd) {
  const friendlyDate = trialEnd.toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric',
  });
  const name = firstName(user);
  return {
    subject: 'Your PassReady Prep trial ends tomorrow',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color:#0F172A;margin-top:0;">Your trial ends tomorrow, ${name}</h2>
        <p style="color:#4a4a4a;line-height:1.6;">
          Your PassReady Prep free trial ends <strong>${friendlyDate}</strong>. Pick a plan now to keep
          full access to all 270+ cases, flashcards, decision trees, and the DSM-5-TR reference.
        </p>${ctaButton()}
        <p style="color:#888;font-size:12px;text-align:center;">PassReady Prep</p>
      </div>
    `,
    text: `Your trial ends tomorrow, ${name}. Your PassReady Prep free trial ends ${friendlyDate}. Pick a plan to keep full access: ${APP_URL}/checkout.html`,
  };
}

function endedEmail(user) {
  const name = firstName(user);
  return {
    subject: 'Your PassReady Prep trial has ended',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color:#0F172A;margin-top:0;">Trial ended, ${name}</h2>
        <p style="color:#4a4a4a;line-height:1.6;">
          Your free trial of PassReady Prep has ended. Your account and progress are saved — pick a plan
          to pick up right where you left off.
        </p>${ctaButton()}
        <p style="color:#888;font-size:13px;text-align:center;">Have feedback about your trial? Just reply to this email.</p>
      </div>
    `,
    text: `Your free trial of PassReady Prep has ended, ${name}. Your account and progress are saved — pick a plan to keep studying: ${APP_URL}/checkout.html`,
  };
}

// Narrows the scan to accounts whose trial could plausibly be inside either
// window. An account's effective trial end is the LATER of its granted
// trialEndsAt and (createdAt + TRIAL_DAYS), so if that end is in range then at
// least one of the two dates is in range — which makes this $or a superset of
// the accounts we want. Each candidate is still checked exactly below.
function candidateFilter(now) {
  const standardOffsetMs = TRIAL_DAYS * DAY_MS;
  const earliestEnd = new Date(now.getTime() - ENDED_WINDOW_MS);
  const latestEnd = new Date(now.getTime() + ENDING_SOON_WINDOW_MS);
  return {
    'subscription.tier': 'free',
    role: 'user',
    $or: [
      {
        createdAt: {
          $gte: new Date(earliestEnd.getTime() - standardOffsetMs),
          $lte: new Date(latestEnd.getTime() - standardOffsetMs),
        },
      },
      { trialEndsAt: { $gte: earliestEnd, $lte: latestEnd } },
    ],
  };
}

async function checkAndSendTrialReminders() {
  const now = new Date();
  const stats = { checked: 0, endingSoonSent: 0, endedSent: 0, errors: 0 };

  if (process.env.TRIAL_REMINDERS_DISABLE === '1') return stats;

  try {
    // Only free-tier accounts are trial candidates — anyone on a paid tier has
    // already converted and shouldn't get "your trial ended" copy.
    const candidates = await User.find(candidateFilter(now))
      .select('email name createdAt trialEndsAt trialEmailsSent')
      .limit(MAX_PER_RUN);

    stats.checked = candidates.length;

    for (const user of candidates) {
      try {
        const sent = user.trialEmailsSent || [];
        const trialEnd = trialEndFor(user);
        const msLeft = trialEnd - now;

        let kind = null;
        if (!sent.includes('ending_soon') && msLeft > 0 && msLeft <= ENDING_SOON_WINDOW_MS) {
          kind = 'ending_soon';
        } else if (!sent.includes('ended') && msLeft <= 0 && -msLeft <= ENDED_WINDOW_MS) {
          kind = 'ended';
        }
        if (!kind) continue;

        const { subject, html, text } = kind === 'ending_soon'
          ? endingSoonEmail(user, trialEnd)
          : endedEmail(user);

        // Mark first, then send: a duplicate email is worse for the recipient
        // than a missed one, so if the process dies mid-send we err toward not
        // re-sending on the next run.
        await User.updateOne({ _id: user._id }, { $addToSet: { trialEmailsSent: kind } });
        await sendMail({ to: user.email, subject, html, text });

        if (kind === 'ending_soon') stats.endingSoonSent++;
        else stats.endedSent++;
      } catch (userErr) {
        stats.errors++;
        console.error(`${LOG} Failed for user ${user._id}:`, userErr.message);
      }
    }
  } catch (err) {
    stats.errors++;
    console.error(`${LOG} Top-level error:`, err.message);
  }

  if (stats.endingSoonSent || stats.endedSent || stats.errors) {
    console.log(`${LOG} checked=${stats.checked} endingSoon=${stats.endingSoonSent} ended=${stats.endedSent} errors=${stats.errors}`);
    logActivity({
      type: 'trial.reminders_run',
      severity: stats.errors ? 'warn' : 'info',
      message: `Trial reminders: ${stats.endingSoonSent} ending-soon, ${stats.endedSent} ended`,
      meta: stats,
    });
  }

  return stats;
}

let intervalHandle = null;

function start() {
  if (intervalHandle) return; // already running
  if (process.env.TRIAL_REMINDERS_DISABLE === '1') {
    console.log(`${LOG} Disabled (TRIAL_REMINDERS_DISABLE=1)`);
    return;
  }
  // Run once shortly after boot, then on the regular interval.
  setTimeout(() => checkAndSendTrialReminders(), FIRST_RUN_DELAY_MS).unref();
  intervalHandle = setInterval(checkAndSendTrialReminders, CHECK_INTERVAL_MS);
  console.log(`${LOG} Scheduled (hourly)`);
}

module.exports = { start, checkAndSendTrialReminders };
