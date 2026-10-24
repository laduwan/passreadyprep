#!/usr/bin/env node
/**
 * Win-back emails: members who studied and stopped, and new sign-ups who
 * never got going. Two audiences (--audience), each with its own broadcast key:
 *
 *   winback (default) — accounts older than NEW_ACCOUNT_DAYS whose most recent
 *     study is between --min-days (14) and --max-days (180) ago. Each person
 *     gets the NCMHCE or NCE version depending on which exam they studied last.
 *     If their exam date for that exam has already passed, they get a
 *     "how did it go?" check-in instead of "come back and study".
 *   new — accounts created in the last --max-days (30) with no paid plan whose
 *     last study (or sign-up, if they never studied) is at least --min-days (1)
 *     ago. One email that lets them pick NCMHCE or NCE: the site never recorded
 *     which exam someone signed up for, and some came looking for the NCE
 *     before it was live. Clicking through to NCE starts their NCE trial, which
 *     shows on the admin Subscribers page as "NCE trials started".
 *
 * Study is read from StudyActivity (time-on-tool heartbeats from the NCMHCE
 * study pages) and Attempt.completedAt (NCMHCE cases/exams, and NCE
 * practice/mock sets, whose externalId starts with 'nce-').
 *
 * Never emails: guests, admins, accounts made from the admin page (testers and
 * comps), test/demo addresses (TEST_EMAIL), anyone in --exclude or
 * MAIL_EXCLUDE_EMAILS, anyone opted out (prefs.digestOptOut), anyone who
 * already got this broadcast key, and anyone who has reported passing.
 *
 * Usage:
 *   node jobs/broadcast-winback.js                          # dry run: who + samples
 *   node jobs/broadcast-winback.js --audience=new           # dry run, new sign-ups
 *   node jobs/broadcast-winback.js --preview-dir=./preview  # also writes sample HTML
 *   node jobs/broadcast-winback.js --audience=new --send    # live send
 * Options: --min-days=N --max-days=N --product=ncmhce|nce --limit=N
 *          --exclude=a@x.com,b@y.com
 *          --key=... (defaults per audience; change it to send again later)
 *
 * Requires MONGO_URI and the mailer env (PRP_RESEND_API_KEY). --send also
 * requires MAIL_POSTAL_ADDRESS: commercial email must show a physical mailing
 * address (CAN-SPAM). Optional MAIL_REPLY_TO sets where "just reply" lands
 * (without it, replies to the sender address go through routes/inboundEmail.js).
 * Every email carries a one-click unsubscribe link (utils/unsubscribe.js).
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const User = require('../models/User');
const Attempt = require('../models/Attempt');
const StudyActivity = require('../models/StudyActivity');
const { sendMail } = require('../utils/mailer');
const { trialEndFor } = require('../utils/trial');
const { nceLevel, NCE_TRIAL_DAYS } = require('../utils/nceAccess');
const { unsubscribeUrl } = require('../utils/unsubscribe');

function arg(name, fallback) {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : fallback;
}

const AUDIENCE = arg('audience', 'winback') === 'new' ? 'new' : 'winback';
const DRY_RUN = !process.argv.includes('--send');
const MIN_DAYS = parseInt(arg('min-days', AUDIENCE === 'new' ? '1' : '14'), 10);
const MAX_DAYS = parseInt(arg('max-days', AUDIENCE === 'new' ? '30' : '180'), 10);
const ONLY_PRODUCT = arg('product', null);
const LIMIT = parseInt(arg('limit', '0'), 10) || 0;
const BROADCAST_KEY = arg('key', AUDIENCE === 'new' ? 'newsignup_2026_10' : 'winback_2026_10');
const PREVIEW_DIR = arg('preview-dir', null);
const BATCH_DELAY_MS = 200;
const DAY = 24 * 60 * 60 * 1000;
const NEW_ACCOUNT_DAYS = 30; // younger accounts belong to the 'new' audience
const SITE = process.env.CLIENT_URL || 'https://passreadyprep.com';

// Test, demo and reviewer addresses, plus the owner's other company domain.
const TEST_EMAIL = /^(demo|demo-trial|test|tester|reviewer|reveiwer)([@+._-]|$)|@counselorready\.com$/i;
const EXCLUDE = new Set(
  [arg('exclude', ''), process.env.MAIL_EXCLUDE_EMAILS || '']
    .join(',').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean)
);

const PRODUCTS = {
  ncmhce: {
    exam: 'NCMHCE',
    studyUrl: `${SITE}/study`,
    restart: 'Open one case and work it start to finish. One case is about 20 minutes, and it is the fastest way to get your clinical reasoning warm again.',
    cta: 'Start one case',
  },
  nce: {
    exam: 'NCE',
    studyUrl: `${SITE}/nce.html`,
    restart: 'Do one short practice set. Ten questions takes about 15 minutes, and your results show which content areas need you most right now.',
    cta: 'Start a practice set',
  },
};

const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmtDate = (d) => new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const P = (html, extra = '') => `<div style="color:#CBD5E1;font-size:15px;line-height:1.6;margin-bottom:16px;${extra}">${html}</div>`;
const button = (href, label, secondary) => `<a href="${href}" style="display:inline-block;${secondary
  ? 'background:transparent;color:#34D399;border:2px solid #34D399;padding:12px 26px;'
  : 'background:#34D399;color:#0F172A;padding:14px 28px;'}font-weight:700;border-radius:12px;text-decoration:none;font-size:16px;margin:6px 4px;">${label} &rarr;</a>`;

// The shared PassReady email frame: header, card, footer with address + unsubscribe.
function frame({ preheader, firstName, body, unsubUrl, postalAddress }) {
  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0F172A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;">${esc(preheader)}</div>
<div style="max-width:520px;margin:0 auto;padding:32px 20px;">

<div style="text-align:center;margin-bottom:28px;">
  <span style="font-size:22px;font-weight:800;color:#34D399;">PassReady Prep</span>
</div>

<div style="background:#1E293B;border-radius:16px;padding:28px;margin-bottom:16px;">
  <div style="color:#E2E8F0;font-size:17px;margin-bottom:20px;">Hi ${esc(firstName || 'there')},</div>
${body}
</div>

<div style="text-align:center;color:#475569;font-size:11px;margin-top:20px;line-height:1.6;">
  <a href="${SITE}" style="color:#475569;">PassReady Prep</a> · GA Integrated Therapeutic Perspectives LLC<br>
  ${esc(postalAddress || '[MAIL_POSTAL_ADDRESS]')}<br>
  <span style="color:#334155;">You are getting this because you have a PassReady Prep account.</span>
  <a href="${unsubUrl}" style="color:#475569;">Unsubscribe</a>
</div>

</div>
</body></html>`;
}

const footNote = (lines) => `
  <div style="color:#64748B;font-size:13px;text-align:center;margin-top:18px;line-height:1.5;">
    ${lines.join('<br>\n    ')}
  </div>`;

const accessLine = (hasAccess) => (hasAccess
  ? 'Your access is still active, so everything is open the moment you sign in.'
  : 'Your access has ended, so you will be asked to choose a plan when you sign back in.');

// kind 'winback': studied, then stopped.
function winbackEmail(ctx) {
  const p = PRODUCTS[ctx.product];
  const weeks = Math.max(2, Math.round(ctx.daysAway / 7));
  const gap = weeks <= 8 ? `${weeks} weeks` : `${Math.round(ctx.daysAway / 30)} months`;
  const now = Date.now();
  const examAhead = ctx.examDate && new Date(ctx.examDate).getTime() > now;
  const weeksToExam = examAhead ? Math.max(1, Math.round((new Date(ctx.examDate).getTime() - now) / (7 * DAY))) : null;
  const examLine = examAhead
    ? `Your ${p.exam} is on <strong style="color:#E2E8F0;">${esc(fmtDate(ctx.examDate))}</strong>, about ${weeksToExam} week${weeksToExam === 1 ? '' : 's'} away. A few short sessions a week from here still adds up to real readiness.`
    : `Whenever you are planning to sit for the ${p.exam}, steady short sessions beat a last-minute cram.`;

  return {
    subject: ctx.firstName ? `${ctx.firstName}, your ${p.exam} prep is right where you left it` : `Your ${p.exam} prep is right where you left it`,
    html: frame({ ...ctx, preheader: 'One focused session is all it takes to get back in rhythm.', body: `
  ${P(`It has been about ${gap} since your last ${p.exam} study session. That happens to almost everyone. Work gets busy, life gets loud, and prep slides down the list.`)}
  ${P('The good news: nothing is lost. Your progress, your scores and your weak spots are all saved, right where you left them.')}
  ${P(examLine, 'color:#94A3B8;font-size:14px;margin-bottom:20px;')}
  <div style="border-left:3px solid #34D399;padding:4px 0 4px 14px;margin-bottom:24px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">Your restart: one session, today</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">${p.restart}</div>
  </div>
  <div style="text-align:center;margin-top:8px;">${button(p.studyUrl, p.cta)}</div>
  ${footNote([accessLine(ctx.hasAccess), 'Questions or need a hand getting back on track? Just reply to this email.'])}` }),
  };
}

// kind 'checkin': their exam date has passed, so they may well have sat it.
function checkinEmail(ctx) {
  const p = PRODUCTS[ctx.product];
  return {
    subject: ctx.firstName ? `${ctx.firstName}, how did the ${p.exam} go?` : `How did the ${p.exam} go?`,
    html: frame({ ...ctx, preheader: 'Whatever happened, we would love to hear.', body: `
  ${P(`Your ${p.exam} date was <strong style="color:#E2E8F0;">${esc(fmtDate(ctx.examDate))}</strong>. We hope it went well, and we would love to hear how it turned out. Just reply to this email.`)}
  ${P('<strong style="color:#E2E8F0;">If you passed:</strong> congratulations! Reply and tell us. Hearing it is the best part of our week.')}
  ${P('<strong style="color:#E2E8F0;">If you are testing again, or your date moved:</strong> your progress, scores and weak spots are all saved. Start with the domains that cost you the most and build from there.', 'margin-bottom:22px;')}
  <div style="text-align:center;margin-top:8px;">${button(p.studyUrl, 'Plan my next attempt')}</div>
  ${footNote([accessLine(ctx.hasAccess)])}` }),
  };
}

// kind 'new': signed up, never really got going. Let them pick the exam.
function newSignupEmail(ctx) {
  const nceLine = ctx.nceTrialUnused
    ? `Your free ${NCE_TRIAL_DAYS}-day NCE trial has not started yet. It begins the first time you open NCE practice.`
    : null;
  const ncmhceLine = ctx.ncmhceTrialEnds
    ? `Your NCMHCE free trial runs until ${esc(fmtDate(ctx.ncmhceTrialEnds))}.`
    : null;
  return {
    subject: ctx.firstName ? `${ctx.firstName}, did you find what you were looking for?` : 'Did you find what you were looking for?',
    html: frame({ ...ctx, preheader: 'PassReady Prep covers the NCMHCE and the NCE. Pick yours.', body: `
  ${P('Thanks for creating a PassReady Prep account. It looks like you have not had a real chance to dig in yet, so here is a quick pointer.')}
  ${P('PassReady Prep now prepares you for <strong style="color:#E2E8F0;">both</strong> counseling licensure exams. If you signed up looking for NCE prep, it is ready now.')}
  <div style="margin-bottom:16px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">NCMHCE: the clinical simulation exam</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">Full clinical case simulations, flashcards, decision trees and a DSM-5-TR reference, with a readiness score across every domain.</div>
  </div>
  <div style="margin-bottom:22px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">NCE: the knowledge exam</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">Practice questions and full-length timed mock exams weighted to NBCC's six content domains, with your progress tracked by domain.</div>
  </div>
  <div style="text-align:center;margin-top:8px;">
    ${button(PRODUCTS.ncmhce.studyUrl, 'Study for the NCMHCE')}
    ${button(PRODUCTS.nce.studyUrl, 'Study for the NCE', true)}
  </div>
  ${footNote([nceLine, ncmhceLine, 'Not sure which exam you need? Reply and tell us where you are in licensure, and we will point you the right way.'].filter(Boolean))}` }),
  };
}

function emailFor(q) {
  if (q.kind === 'new') return newSignupEmail(q);
  if (q.kind === 'checkin') return checkinEmail(q);
  return winbackEmail(q);
}

// Latest study time per user, split by exam. Returns Map(userId → { ncmhce, nce, heartbeat }).
async function lastStudyByUser() {
  const out = new Map();
  const bump = (id, key, at) => {
    if (!at) return;
    const k = String(id);
    const row = out.get(k) || { ncmhce: null, nce: null, heartbeat: null };
    if (!row[key] || at > row[key]) row[key] = at;
    out.set(k, row);
  };
  const [beats, attempts] = await Promise.all([
    StudyActivity.aggregate([{ $group: { _id: '$userId', at: { $max: '$updatedAt' } } }]),
    Attempt.aggregate([
      { $match: { completedAt: { $ne: null } } },
      { $group: {
        _id: { userId: '$userId', nce: { $regexMatch: { input: { $ifNull: ['$externalId', ''] }, regex: /^nce-/ } } },
        at: { $max: '$completedAt' },
      } },
    ]),
  ]);
  beats.forEach((b) => bump(b._id, 'heartbeat', b.at));
  attempts.forEach((a) => bump(a._id.userId, a._id.nce ? 'nce' : 'ncmhce', a.at));
  return out;
}

const latest = (row) => [row.ncmhce, row.nce, row.heartbeat].filter(Boolean).reduce((a, b) => (b > a ? b : a), null);

// Which exam to write about: the one with the most recent attempt. With no
// attempts at all (heartbeats only), NCE only when that is the plan they pay for.
function pickProduct(row, user) {
  if (row.nce && (!row.ncmhce || row.nce > row.ncmhce)) return 'nce';
  if (row.ncmhce) return 'ncmhce';
  const ncePaid = user.nceAccess && user.nceAccess.tier && user.nceAccess.tier !== 'free';
  const ncmhcePaid = user.subscription && user.subscription.tier && user.subscription.tier !== 'free';
  return ncePaid && !ncmhcePaid ? 'nce' : 'ncmhce';
}

function hasAccess(product, user, now) {
  if (product === 'nce') return ['paid', 'trial'].includes(nceLevel(user, now));
  const sub = user.subscription || {};
  if (sub.tier && sub.tier !== 'free') return !sub.currentPeriodEnd || new Date(sub.currentPeriodEnd) > now || sub.tier === 'guarantee';
  return trialEndFor(user) > now;
}

// Why an account should never get marketing email, or null if it can.
function excludedReason(user) {
  const email = (user.email || '').toLowerCase();
  if (user.isGuest) return 'guest';
  if (user.role === 'admin') return 'admin';
  if (user.termsVersion === 'admin-created') return 'made by admin (tester/comp)';
  if (TEST_EMAIL.test(email)) return 'test/demo address';
  if (EXCLUDE.has(email)) return 'excluded by list';
  if (user.prefs && user.prefs.digestOptOut) return 'unsubscribed';
  if (user.broadcastsSent && user.broadcastsSent[BROADCAST_KEY]) return 'already sent this email';
  return null;
}

const isPaid = (plan) => !!(plan && plan.tier && plan.tier !== 'free');

// One queue entry per eligible account, or { skip: reason }.
function classify(user, row, now) {
  const reason = excludedReason(user);
  if (reason) return { skip: reason };
  const firstName = (user.name || '').trim().split(/\s+/)[0] || '';
  const ageDays = (now - new Date(user.createdAt)) / DAY;
  const last = row ? latest(row) : null;

  if (AUDIENCE === 'new') {
    if (ageDays > MAX_DAYS) return { skip: `account older than ${MAX_DAYS} days` };
    if (isPaid(user.subscription) || isPaid(user.nceAccess)) return { skip: 'has a paid plan' };
    const quietSince = last || new Date(user.createdAt);
    if (now - quietSince < MIN_DAYS * DAY) return { skip: `active in the last ${MIN_DAYS} day(s)` };
    const trialEnd = trialEndFor(user);
    return {
      kind: 'new', user, firstName,
      nceTrialUnused: !(user.nceAccess && user.nceAccess.trialStartedAt),
      ncmhceTrialEnds: trialEnd > now ? trialEnd : null,
      studied: last,
    };
  }

  if (ageDays <= NEW_ACCOUNT_DAYS) return { skip: 'new account (use --audience=new)' };
  if (!last) return { skip: 'never studied' };
  const daysAway = (now - last) / DAY;
  if (daysAway < MIN_DAYS) return { skip: `studied in the last ${MIN_DAYS} days` };
  if (daysAway > MAX_DAYS) return { skip: `last studied over ${MAX_DAYS} days ago` };
  const product = pickProduct(row, user);
  if (ONLY_PRODUCT && product !== ONLY_PRODUCT) return { skip: `studies ${product.toUpperCase()}` };
  const plan = product === 'nce' ? user.nceAccess : user.subscription;
  if (plan && plan.scoreReport && plan.scoreReport.status === 'passed') return { skip: 'reported passing' };
  const examDate = product === 'nce' ? user.nceExamDate : user.examDate;
  return {
    kind: examDate && new Date(examDate) < now ? 'checkin' : 'winback',
    user, product, firstName, examDate,
    daysAway: Math.round(daysAway),
    hasAccess: hasAccess(product, user, now),
    studied: last,
  };
}

const SAMPLE = {
  winback: { kind: 'winback', product: 'ncmhce', firstName: 'Alex', daysAway: 30, examDate: new Date(Date.now() + 60 * DAY), hasAccess: false },
  checkin: { kind: 'checkin', product: 'ncmhce', firstName: 'Alex', examDate: new Date(Date.now() - 10 * DAY), hasAccess: true },
  new: { kind: 'new', firstName: 'Alex', nceTrialUnused: true, ncmhceTrialEnds: null },
};

async function run() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI required'); process.exit(1); }
  const postalAddress = process.env.MAIL_POSTAL_ADDRESS;
  if (!DRY_RUN && !postalAddress) {
    console.error('MAIL_POSTAL_ADDRESS required for --send (CAN-SPAM: commercial email must include a physical mailing address).');
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB');

  const now = new Date();
  const lastStudy = await lastStudyByUser();
  const users = await User.find({})
    .select('email name role isGuest termsVersion prefs broadcastsSent subscription nceAccess examDate nceExamDate trialEndsAt createdAt')
    .sort({ createdAt: 1 })
    .lean();

  const queue = [];
  const skipped = [];
  for (const user of users) {
    const c = classify(user, lastStudy.get(String(user._id)), now);
    if (c.skip) skipped.push({ email: user.email, why: c.skip });
    else queue.push(c);
  }
  const toSend = LIMIT ? queue.slice(0, LIMIT) : queue;

  const window = AUDIENCE === 'new'
    ? `accounts up to ${MAX_DAYS} days old, quiet for ${MIN_DAYS}+ day(s)`
    : `last study ${MIN_DAYS}–${MAX_DAYS} days ago`;
  console.log(`\nAudience: ${AUDIENCE} · ${window} · key ${BROADCAST_KEY}${DRY_RUN ? ' · DRY RUN, nothing is sent' : ''}`);
  console.log(`\nWill email (${toSend.length}):`);
  toSend.forEach((q) => console.log(`  ${q.user.email.padEnd(40)} ${q.kind}${q.product ? ' ' + q.product.toUpperCase() : ''}` +
    ` · joined ${fmtDate(q.user.createdAt)} · last study ${q.studied ? fmtDate(q.studied) : 'never'}`));
  console.log(`\nSkipped (${skipped.length}):`);
  skipped.forEach((s) => console.log(`  ${String(s.email).padEnd(40)} ${s.why}`));

  if (DRY_RUN) {
    const kinds = AUDIENCE === 'new' ? ['new'] : ['winback', 'checkin'];
    for (const kind of kinds) {
      const s = toSend.find((q) => q.kind === kind) || { ...SAMPLE[kind], user: { _id: 'sample' } };
      const { subject, html } = emailFor({ ...s, unsubUrl: unsubscribeUrl(s.user._id), postalAddress });
      console.log(`\n--- ${kind.toUpperCase()} SUBJECT ---\n${subject}`);
      if (PREVIEW_DIR) {
        fs.mkdirSync(PREVIEW_DIR, { recursive: true });
        const file = path.join(PREVIEW_DIR, `email-${kind}.html`);
        fs.writeFileSync(file, html);
        console.log(`preview: ${file}`);
      }
    }
    await mongoose.disconnect();
    return;
  }

  let sent = 0, failed = 0;
  for (const q of toSend) {
    try {
      const { subject, html } = emailFor({ ...q, unsubUrl: unsubscribeUrl(q.user._id), postalAddress });
      const result = await sendMail({ to: q.user.email, subject, html, replyTo: process.env.MAIL_REPLY_TO || undefined });
      if (result.ok) {
        await User.updateOne({ _id: q.user._id }, { $set: { [`broadcastsSent.${BROADCAST_KEY}`]: new Date() } });
        sent++;
      } else {
        failed++;
        console.error(`Failed: ${q.user.email}`);
      }
    } catch (err) {
      failed++;
      console.error(`Error: ${q.user.email}`, err.message);
    }
    await new Promise((r) => setTimeout(r, BATCH_DELAY_MS));
  }

  console.log(`\nDone. Sent: ${sent} | Failed: ${failed} | Total: ${toSend.length}`);
  await mongoose.disconnect();
}

if (require.main === module) run().catch((err) => { console.error(err); process.exit(1); });

module.exports = { run, emailFor, pickProduct, classify, excludedReason };
