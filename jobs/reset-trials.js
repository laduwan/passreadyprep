#!/usr/bin/env node
/**
 * One-off: start every non-paying account's free trial over, and tell them.
 *
 * Context: the standard trial went from 3 to 7 days and now runs from the
 * first case an account opens (User.trialStartedAt, utils/trial.js) rather
 * than from signup. Rather than let the longer trial land unevenly on people
 * mid-trial or just past it, this resets the clock for everyone who isn't on
 * a paid plan, so each of them gets the full 7 days from their next case.
 *
 * What a reset does to an account:
 *   - unsets trialStartedAt (NCMHCE) — the 7 days start at the next case
 *   - unsets nceAccess.trialStartedAt — the NCE trial restarts at the next
 *     NCE visit (skipped for accounts with a paid NCE plan)
 *   - clears trialEmailsSent so the "ends tomorrow" / "ended" reminders can
 *     go out again for the new trial (jobs/trialReminders.js)
 *   An admin-granted trialEndsAt is left alone; it still wins if it is later.
 *
 * Who is reset: role 'user', not a guest, and no active paid NCMHCE plan
 * (free tier, or a monthly/pass3 whose period has ended — those fall back to
 * the trial clock in routes/content.js). Guarantee members are never reset.
 *
 * Who is emailed: everyone reset, minus guests, admin-created accounts
 * (testers/comps), test/demo addresses, anyone in --exclude or
 * MAIL_EXCLUDE_EMAILS, anyone opted out (prefs.digestOptOut), and anyone
 * who already got this broadcast key. The reset itself still applies to
 * them; only the email is skipped.
 *
 * Usage:
 *   node jobs/reset-trials.js                         # dry run: who + sample email
 *   node jobs/reset-trials.js --preview-dir=./preview # also writes the sample HTML
 *   node jobs/reset-trials.js --send                  # reset + live send
 * Options: --limit=N --exclude=a@x.com,b@y.com --key=... (default trial_reset_2026_11)
 *
 * Requires MONGO_URI and the mailer env (PRP_RESEND_API_KEY). --send also
 * requires MAIL_POSTAL_ADDRESS (CAN-SPAM), same as jobs/broadcast-winback.js.
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const User = require('../models/User');
const { sendMail } = require('../utils/mailer');
const { TRIAL_DAYS } = require('../utils/trial');
const { unsubscribeUrl } = require('../utils/unsubscribe');
const { frame, button, P, esc, footNote, TEST_EMAIL } = require('./broadcast-winback');

function arg(name, fallback) {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : fallback;
}

const DRY_RUN = !process.argv.includes('--send');
const LIMIT = parseInt(arg('limit', '0'), 10) || 0;
const BROADCAST_KEY = arg('key', 'trial_reset_2026_11');
const PREVIEW_DIR = arg('preview-dir', null);
const BATCH_DELAY_MS = 200;
const SITE = process.env.CLIENT_URL || 'https://passreadyprep.com';

const EXCLUDE = new Set(
  [arg('exclude', ''), process.env.MAIL_EXCLUDE_EMAILS || '']
    .join(',').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean)
);

const isPaid = (plan) => !!(plan && plan.tier && plan.tier !== 'free');

// Active paid NCMHCE access, the same way routes/content.js sees it: any
// non-free tier whose period hasn't ended. Guarantee never lapses here.
function hasPaidNcmhce(user, now) {
  const sub = user.subscription || {};
  if (!isPaid(sub)) return false;
  if (sub.tier === 'guarantee') return true;
  return !sub.currentPeriodEnd || new Date(sub.currentPeriodEnd) > now;
}

// Why an account is not reset at all, or null.
function resetSkipReason(user, now) {
  if (user.role !== 'user') return 'admin';
  if (user.isGuest) return 'guest';
  if (hasPaidNcmhce(user, now)) return `paid NCMHCE plan (${user.subscription.tier})`;
  return null;
}

// Why a reset account still gets no email, or null.
function emailSkipReason(user) {
  const email = (user.email || '').toLowerCase();
  if (user.termsVersion === 'admin-created') return 'made by admin (tester/comp)';
  if (TEST_EMAIL.test(email)) return 'test/demo address';
  if (EXCLUDE.has(email)) return 'excluded by list';
  if (user.prefs && user.prefs.digestOptOut) return 'unsubscribed';
  if (user.broadcastsSent && user.broadcastsSent[BROADCAST_KEY]) return 'already sent this email';
  return null;
}

function resetUpdate(user) {
  const unset = { trialStartedAt: 1 };
  if (!isPaid(user.nceAccess)) unset['nceAccess.trialStartedAt'] = 1;
  return { $unset: unset, $set: { trialEmailsSent: [] } };
}

function emailFor({ firstName, unsubUrl, postalAddress }) {
  const subject = `Your PassReady Prep free trial starts over — ${TRIAL_DAYS} full days`;
  const preheader = `We made the free trial ${TRIAL_DAYS} days and reset yours. It starts the next time you open a case.`;
  const body = [
    P(`Good news: the PassReady Prep free trial is now <strong style="color:#E2E8F0;">${TRIAL_DAYS} days</strong> instead of 3, and we have reset yours so you get the full ${TRIAL_DAYS} days from scratch, even if your old trial had already ended.`),
    P(`The clock starts the <strong style="color:#E2E8F0;">next time you open a case</strong>, not today, so nothing is lost if you cannot study right now. Once you do, you have ${TRIAL_DAYS} days of full access: all 270+ NCMHCE cases in the 2022+ format, the timed mock exam, flashcards, decision trees, and the DSM-5-TR reference.`),
    P(`Studying for the NCE? That trial has been reset too, and it starts the next time you open NCE study.`),
    `<div style="text-align:center;margin:24px 0 8px;">${button(`${SITE}/study`, 'Open a case')}</div>`,
    footNote(['No card needed. When the trial ends you can pick a plan, or just keep your account.']),
  ].join('\n');
  return { subject, html: frame({ preheader, firstName, body, unsubUrl, postalAddress }) };
}

async function run() {
  const postalAddress = process.env.MAIL_POSTAL_ADDRESS;
  if (!DRY_RUN && !postalAddress) {
    console.error('MAIL_POSTAL_ADDRESS required for --send (CAN-SPAM: commercial email must include a physical mailing address).');
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB');

  const now = new Date();
  const users = await User.find({})
    .select('email name role isGuest termsVersion prefs broadcastsSent subscription nceAccess trialStartedAt trialEndsAt createdAt')
    .sort({ createdAt: 1 })
    .lean();

  const toReset = [];   // every account whose trial starts over
  const toEmail = [];   // the subset that also gets the email
  const notReset = [];
  const noEmail = [];
  for (const user of users) {
    const why = resetSkipReason(user, now);
    if (why) { notReset.push({ email: user.email, why }); continue; }
    toReset.push(user);
    const ewhy = emailSkipReason(user);
    if (ewhy) noEmail.push({ email: user.email, why: ewhy });
    else toEmail.push(user);
  }
  const resetList = LIMIT ? toReset.slice(0, LIMIT) : toReset;
  const emailList = LIMIT ? toEmail.filter((u) => resetList.includes(u)) : toEmail;

  console.log(`\nTrial reset to ${TRIAL_DAYS} days from the next case · key ${BROADCAST_KEY}${DRY_RUN ? ' · DRY RUN, nothing is changed or sent' : ''}`);
  console.log(`\nWill reset (${resetList.length}):`);
  resetList.forEach((u) => console.log(`  ${String(u.email).padEnd(40)} ${u.subscription && u.subscription.tier || 'free'}` +
    ` · trial ${u.trialStartedAt ? 'started ' + new Date(u.trialStartedAt).toISOString().slice(0, 10) : 'not started'}` +
    (emailList.includes(u) ? ' · email' : ' · no email')));
  console.log(`\nNot reset (${notReset.length}):`);
  notReset.forEach((s) => console.log(`  ${String(s.email).padEnd(40)} ${s.why}`));
  console.log(`\nReset but not emailed (${noEmail.length}):`);
  noEmail.forEach((s) => console.log(`  ${String(s.email).padEnd(40)} ${s.why}`));

  if (DRY_RUN) {
    const sample = emailList[0] || { _id: 'sample', name: 'Alex' };
    const { subject, html } = emailFor({ firstName: (sample.name || '').trim().split(/\s+/)[0], unsubUrl: unsubscribeUrl(sample._id), postalAddress });
    console.log(`\n--- SUBJECT ---\n${subject}`);
    if (PREVIEW_DIR) {
      fs.mkdirSync(PREVIEW_DIR, { recursive: true });
      const file = path.join(PREVIEW_DIR, 'email-trial-reset.html');
      fs.writeFileSync(file, html);
      console.log(`preview: ${file}`);
    }
    await mongoose.disconnect();
    return;
  }

  // Reset first, all at once, so nobody gets "your trial starts over" before
  // it actually has.
  let reset = 0;
  for (const u of resetList) {
    const r = await User.updateOne({ _id: u._id }, resetUpdate(u));
    if (r.matchedCount) reset++;
  }
  console.log(`\nReset ${reset} of ${resetList.length} accounts.`);

  let sent = 0, failed = 0;
  for (const u of emailList) {
    try {
      const { subject, html } = emailFor({ firstName: (u.name || '').trim().split(/\s+/)[0], unsubUrl: unsubscribeUrl(u._id), postalAddress });
      const result = await sendMail({ to: u.email, subject, html, replyTo: process.env.MAIL_REPLY_TO || undefined });
      if (result.ok) {
        await User.updateOne({ _id: u._id }, { $set: { [`broadcastsSent.${BROADCAST_KEY}`]: new Date() } });
        sent++;
      } else {
        failed++;
        console.error(`Failed: ${u.email}`);
      }
    } catch (err) {
      failed++;
      console.error(`Error: ${u.email}`, err.message);
    }
    await new Promise((r) => setTimeout(r, BATCH_DELAY_MS));
  }

  console.log(`\nDone. Reset: ${reset} | Sent: ${sent} | Failed: ${failed} | Emailable: ${emailList.length}`);
  await mongoose.disconnect();
}

if (require.main === module) run().catch((err) => { console.error(err); process.exit(1); });

module.exports = { run, emailFor, resetSkipReason, emailSkipReason, resetUpdate, hasPaidNcmhce };
