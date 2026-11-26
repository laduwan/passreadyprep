/**
 * Trial Reminder Emails
 *
 * The free trial is short (TRIAL_DAYS, default 7) and starts in Stripe
 * Checkout with a card on file: when it ends the plan bills the card unless
 * the member cancelled. This job emails accounts around those moments, so
 * nobody is charged without warning and nobody who signed up quietly goes
 * dark without being told how to start.
 *
 * Emails, each sent at most once per account (tracked in User.trialEmailsSent
 * so re-runs don't duplicate):
 *   - 'start_trial'  — the account was created 20–48 hours ago and has no
 *                      trial or plan on it yet: a nudge to pick a plan and
 *                      start the free trial
 *   - 'ending_soon'  — a trial ends within the next ~24 hours. For a Stripe
 *                      trial (status 'trialing') the email names the plan,
 *                      the amount and the day the card is charged, and where
 *                      to cancel. For a legacy no-card trial or an admin grant
 *                      it asks them to pick a plan, as before.
 *   - 'ended'        — a legacy or granted trial ended within the last
 *                      ENDED_WINDOW_DAYS and the account is still on the free
 *                      tier. A Stripe trial never gets this: it converts (the
 *                      receipt comes from Stripe) or the card is declined (the
 *                      payment-failed text and Stripe's own emails cover it).
 *
 * 'ending_soon' ALSO sends a text, but only to accounts that opted in to SMS at
 * sign-up (utils/sms.js decides; this job never checks consent itself). It is
 * the only one that texts: it is the only one where the deadline is tomorrow
 * and acting today changes the outcome, and for a card trial it is the
 * pre-charge notice.
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
const { RECURRING_TIERS } = require('../utils/access');
const { NCE_RECURRING_TIERS } = require('../utils/nceAccess');
const { sendUserSms, canText, TEMPLATES } = require('../utils/sms');

const LOG = '[TrialReminders]';
const DAY_MS = 24 * 60 * 60 * 1000;

const CHECK_INTERVAL_MS = 60 * 60 * 1000;   // hourly
const FIRST_RUN_DELAY_MS = 30 * 1000;       // let the Mongo connection settle after boot
const ENDING_SOON_WINDOW_MS = DAY_MS;       // "ends within 24h"
const ENDED_WINDOW_MS = 7 * DAY_MS;         // only email about a trial that ended recently
const START_MIN_AGE_MS = 20 * 60 * 60 * 1000;    // 'start_trial' goes to accounts created 20–48h ago
const START_MAX_AGE_MS = 48 * 60 * 60 * 1000;
const MAX_PER_RUN = 200;                    // a sane ceiling on one hour's sending

const APP_URL = (process.env.APP_URL || 'https://www.passreadyprep.com').replace(/\/+$/, '');

function firstName(user) {
  return (user.name || '').trim().split(/\s+/)[0] || 'there';
}

function ctaButton(href = `${APP_URL}/checkout.html`, label = 'Choose a plan') {
  return `
        <div style="text-align:center;margin:30px 0;">
          <a href="${href}"
             style="display:inline-block;background:#0F172A;color:#fff;padding:14px 28px;text-decoration:none;border-radius:8px;font-weight:600;">
            ${label}
          </a>
        </div>`;
}

const PLAN_NAMES = {
  monthly: 'Monthly', pass3: '3-Month Pass', pass6: '6-Month Pass',
  nce_monthly: 'NCE Monthly', nce_pass3: 'NCE 3-Month Pass', nce_pass6: 'NCE 6-Month Pass',
};
const PLAN_MONTHS = { monthly: 1, pass3: 3, pass6: 6, nce_monthly: 1, nce_pass3: 3, nce_pass6: 6 };
function money(cents) { return '$' + (cents / 100).toFixed(cents % 100 ? 2 : 0); }
function friendly(d) { return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }); }

function startTrialEmail(user) {
  const name = firstName(user);
  return {
    subject: 'Your free trial is waiting',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color:#0F172A;margin-top:0;">Your free trial is waiting, ${name}</h2>
        <p style="color:#4a4a4a;line-height:1.6;">
          You created your PassReady Prep account but haven't started your ${TRIAL_DAYS}-day free trial yet.
          Pick a plan and you get full access to all 290+ cases, timed mock exams, flashcards, decision trees
          and the DSM-5-TR reference for ${TRIAL_DAYS} days. Your card isn't charged until the trial ends,
          and you can cancel before then from your account page.
        </p>${ctaButton(`${APP_URL}/pricing.html?exam=ncmhce&trial=1`, 'Start your free trial')}
        <p style="color:#888;font-size:12px;text-align:center;">PassReady Prep</p>
      </div>
    `,
    text: `Your free trial is waiting, ${name}. Pick a plan to start your ${TRIAL_DAYS}-day free trial of everything; your card isn't charged until it ends, and you can cancel before then. ${APP_URL}/pricing.html?exam=ncmhce&trial=1`,
  };
}

// Legacy no-card trial or admin grant: a plan still has to be picked.
function endingSoonEmail(user, trialEnd) {
  const friendlyDate = friendly(trialEnd);
  const name = firstName(user);
  return {
    subject: 'Your PassReady Prep trial ends tomorrow',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color:#0F172A;margin-top:0;">Your trial ends tomorrow, ${name}</h2>
        <p style="color:#4a4a4a;line-height:1.6;">
          Your PassReady Prep free trial ends <strong>${friendlyDate}</strong>. Pick a plan now to keep
          full access to all 290+ cases, flashcards, decision trees, and the DSM-5-TR reference.
        </p>${ctaButton()}
        <p style="color:#888;font-size:12px;text-align:center;">PassReady Prep</p>
      </div>
    `,
    text: `Your trial ends tomorrow, ${name}. Your PassReady Prep free trial ends ${friendlyDate}. Pick a plan to keep full access: ${APP_URL}/checkout.html`,
  };
}

// Stripe trial: the plan is chosen and bills tomorrow. This is the pre-charge
// notice, so it carries the plan, the amount, the date and how to cancel.
function cardTrialEndingSoonEmail(user, plan, trialEnd) {
  const name = firstName(user);
  const planName = PLAN_NAMES[plan.tier] || plan.tier;
  const months = PLAN_MONTHS[plan.tier] || 1;
  const amount = plan.planAmount ? money(plan.planAmount) : 'the plan price';
  const cadence = months === 1 ? 'every month' : `every ${months} months`;
  const friendlyDate = friendly(trialEnd);
  return {
    subject: `Your free trial ends tomorrow — ${planName} starts ${friendlyDate}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color:#0F172A;margin-top:0;">Your free trial ends tomorrow, ${name}</h2>
        <p style="color:#4a4a4a;line-height:1.6;">
          Your PassReady Prep free trial ends <strong>${friendlyDate}</strong>. On that day your
          <strong>${planName}</strong> starts and the card on file is charged <strong>${amount}</strong>,
          then ${amount} ${cadence} until you cancel. Nothing else changes: your progress, readiness
          score and study plan carry straight on.
        </p>
        <p style="color:#4a4a4a;line-height:1.6;">
          Not ready to continue? Cancel before ${friendlyDate} from <strong>Manage subscription</strong> on
          your account page and your card will not be charged.
        </p>${ctaButton(`${APP_URL}/account.html`, 'Manage my plan')}
        <p style="color:#888;font-size:12px;text-align:center;">PassReady Prep</p>
      </div>
    `,
    text: `Your free trial ends tomorrow, ${name}. On ${friendlyDate} your ${planName} starts and the card on file is charged ${amount}, then ${amount} ${cadence} until you cancel. To cancel before then, open Manage subscription on your account page: ${APP_URL}/account.html`,
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

// Narrows the scan to accounts that could plausibly be due one of the emails.
// Three shapes of account:
//   - a Stripe trial on either exam ending within the next day
//   - a legacy or granted no-card trial (free NCMHCE tier) whose effective end
//     — the LATER of trialEndsAt and trialStartedAt + TRIAL_DAYS — falls in
//     range, so at least one of those two dates does
//   - the 'start_trial' window: created 20–48h ago, free tier, no trial at all
// Each candidate is still checked exactly below. Guests (iOS placeholder
// accounts, models/User.js) never get any of these.
function candidateFilter(now) {
  const standardOffsetMs = TRIAL_DAYS * DAY_MS;
  const earliestEnd = new Date(now.getTime() - ENDED_WINDOW_MS);
  const latestEnd = new Date(now.getTime() + ENDING_SOON_WINDOW_MS);
  return {
    role: 'user',
    isGuest: { $ne: true },
    $or: [
      { 'subscription.status': 'trialing', 'subscription.currentPeriodEnd': { $gte: now, $lte: latestEnd } },
      { 'nceAccess.status': 'trialing', 'nceAccess.currentPeriodEnd': { $gte: now, $lte: latestEnd } },
      {
        'subscription.tier': 'free',
        trialStartedAt: {
          $gte: new Date(earliestEnd.getTime() - standardOffsetMs),
          $lte: new Date(latestEnd.getTime() - standardOffsetMs),
        },
      },
      { 'subscription.tier': 'free', trialEndsAt: { $gte: earliestEnd, $lte: latestEnd } },
      {
        'subscription.tier': 'free',
        trialStartedAt: null,
        trialEndsAt: null,
        'subscription.trialUsedAt': null,
        createdAt: {
          $gte: new Date(now.getTime() - START_MAX_AGE_MS),
          $lte: new Date(now.getTime() - START_MIN_AGE_MS),
        },
      },
    ],
  };
}

// The Stripe trial on this account that ends within the window, if any: the
// NCMHCE plan first, then the NCE plan. Each exam's trial is its own reminder
// key ('ending_soon' / 'ending_soon_nce') so having both does not silence one.
function cardTrialDue(user, now) {
  const checks = [
    ['subscription', RECURRING_TIERS, 'ending_soon'],
    ['nceAccess', NCE_RECURRING_TIERS, 'ending_soon_nce'],
  ];
  for (const [path, tiers, key] of checks) {
    const plan = user[path] || {};
    if (plan.status !== 'trialing' || !tiers.includes(plan.tier) || !plan.currentPeriodEnd) continue;
    const msLeft = new Date(plan.currentPeriodEnd) - now;
    if (msLeft > 0 && msLeft <= ENDING_SOON_WINDOW_MS) return { plan, key, end: new Date(plan.currentPeriodEnd) };
  }
  return null;
}

async function checkAndSendTrialReminders() {
  const now = new Date();
  const stats = { checked: 0, startTrialSent: 0, endingSoonSent: 0, endedSent: 0, smsSent: 0, errors: 0 };

  if (process.env.TRIAL_REMINDERS_DISABLE === '1') return stats;

  try {
    const candidates = await User.find(candidateFilter(now))
      .select('email name createdAt isGuest subscription nceAccess trialStartedAt trialEndsAt trialEmailsSent phone smsOptedIn smsOptedOutAt smsSent')
      .limit(MAX_PER_RUN);

    stats.checked = candidates.length;

    for (const user of candidates) {
      try {
        const sent = user.trialEmailsSent || [];
        const ageMs = now - new Date(user.createdAt);
        const sub = user.subscription || {};
        const onFreeTier = !sub.tier || sub.tier === 'free';

        let kind = null;
        let key = null;
        let mail = null;
        let smsTemplate = null;

        // Stripe trial billing tomorrow: the pre-charge notice, per exam.
        const card = cardTrialDue(user, now);
        if (card && !sent.includes(card.key)) {
          kind = 'ending_soon';
          key = card.key;
          mail = cardTrialEndingSoonEmail(user, card.plan, card.end);
          smsTemplate = TEMPLATES.cardTrialEndingSoon;
        } else if (onFreeTier) {
          // Legacy / granted no-card trial, or no trial at all.
          const trialEnd = trialEndFor(user);
          const hasTrial = trialEnd > new Date(0);
          const msLeft = trialEnd - now;
          if (!hasTrial && !sub.trialUsedAt) {
            if (!sent.includes('start_trial') && !sent.includes('first_case') && ageMs >= START_MIN_AGE_MS && ageMs <= START_MAX_AGE_MS) {
              kind = 'start_trial'; key = 'start_trial'; mail = startTrialEmail(user);
            }
          } else if (hasTrial && !sent.includes('ending_soon') && msLeft > 0 && msLeft <= ENDING_SOON_WINDOW_MS) {
            kind = 'ending_soon'; key = 'ending_soon'; mail = endingSoonEmail(user, trialEnd);
            smsTemplate = TEMPLATES.trialEndingSoon;
          } else if (hasTrial && !sent.includes('ended') && msLeft <= 0 && -msLeft <= ENDED_WINDOW_MS) {
            kind = 'ended'; key = 'ended'; mail = endedEmail(user);
          }
        }
        if (!kind) continue;

        // Mark first, then send: a duplicate email is worse for the recipient
        // than a missed one, so if the process dies mid-send we err toward not
        // re-sending on the next run.
        await User.updateOne({ _id: user._id }, { $addToSet: { trialEmailsSent: key } });
        await sendMail({ to: user.email, subject: mail.subject, html: mail.html, text: mail.text });

        // The one trial text, to members who opted in: the trial ends tomorrow
        // and there is something to do about it today (for a card trial, the
        // card is charged tomorrow). Deliberately only this one — the others
        // are not time-critical, and message frequency is what gets a 10DLC
        // campaign complained about. Marked before sending, like the email
        // above, because a duplicate text costs money and annoys where a
        // missed one does not. One text per account however many trials.
        if (kind === 'ending_soon' && smsTemplate && canText(user) && !(user.smsSent || {}).trial_ending_soon) {
          await User.updateOne({ _id: user._id }, { $set: { 'smsSent.trial_ending_soon': new Date() } });
          const sms = await sendUserSms(user, smsTemplate(), { type: 'trial_ending_soon' });
          if (sms.sent) stats.smsSent++;
        }

        if (kind === 'start_trial') stats.startTrialSent++;
        else if (kind === 'ending_soon') stats.endingSoonSent++;
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

  if (stats.startTrialSent || stats.endingSoonSent || stats.endedSent || stats.errors) {
    console.log(`${LOG} checked=${stats.checked} startTrial=${stats.startTrialSent} endingSoon=${stats.endingSoonSent} ended=${stats.endedSent} sms=${stats.smsSent} errors=${stats.errors}`);
    logActivity({
      type: 'trial.reminders_run',
      severity: stats.errors ? 'warn' : 'info',
      message: `Trial reminders: ${stats.startTrialSent} start-trial, ${stats.endingSoonSent} ending-soon, ${stats.endedSent} ended`,
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
