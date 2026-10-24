#!/usr/bin/env node
/**
 * Win-back email: members who studied, then stopped.
 *
 * "On hiatus" = their most recent study is between --min-days and --max-days
 * ago. Study is read from two places:
 *   - StudyActivity (time-on-tool heartbeats from the NCMHCE study pages)
 *   - Attempt.completedAt (NCMHCE cases/exams, and NCE practice/mock sets,
 *     whose externalId starts with 'nce-')
 * Each person gets the NCMHCE or NCE version depending on which exam they
 * studied last.
 *
 * Skips: guests, anyone opted out (prefs.digestOptOut), anyone who already
 * got this broadcast key, and anyone who has reported passing that exam.
 *
 * Usage:
 *   node jobs/broadcast-winback.js                         # dry run: counts + samples
 *   node jobs/broadcast-winback.js --preview-dir=./preview # also writes sample HTML
 *   node jobs/broadcast-winback.js --send                  # live send
 * Options: --min-days=14 --max-days=180 --product=ncmhce|nce --limit=N
 *          --key=winback_2026_10 (change it to send the same email again later)
 *
 * Requires MONGO_URI and the mailer env (PRP_RESEND_API_KEY). --send also
 * requires MAIL_POSTAL_ADDRESS: commercial email must show a physical mailing
 * address (CAN-SPAM). Optional MAIL_REPLY_TO sets where "just reply" lands
 * (without it, replies to the sender address go through routes/inboundEmail.js).
 * Every email carries a one-click unsubscribe link
 * (utils/unsubscribe.js).
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
const { nceLevel } = require('../utils/nceAccess');
const { unsubscribeUrl } = require('../utils/unsubscribe');

function arg(name, fallback) {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : fallback;
}

const DRY_RUN = !process.argv.includes('--send');
const MIN_DAYS = parseInt(arg('min-days', '14'), 10);
const MAX_DAYS = parseInt(arg('max-days', '180'), 10);
const ONLY_PRODUCT = arg('product', null);
const LIMIT = parseInt(arg('limit', '0'), 10) || 0;
const BROADCAST_KEY = arg('key', 'winback_2026_10');
const PREVIEW_DIR = arg('preview-dir', null);
const BATCH_DELAY_MS = 200;
const DAY = 24 * 60 * 60 * 1000;
const SITE = process.env.CLIENT_URL || 'https://passreadyprep.com';

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

function subjectFor(p, firstName) {
  return firstName
    ? `${firstName}, your ${p.exam} prep is right where you left it`
    : `Your ${p.exam} prep is right where you left it`;
}

// ctx: { product, firstName, daysAway, examDate, hasAccess, unsubUrl, postalAddress }
function buildEmail(ctx) {
  const p = PRODUCTS[ctx.product];
  const weeks = Math.max(2, Math.round(ctx.daysAway / 7));
  const gap = weeks <= 8 ? `${weeks} weeks` : `${Math.round(ctx.daysAway / 30)} months`;
  const now = Date.now();
  const examAhead = ctx.examDate && new Date(ctx.examDate).getTime() > now;
  const weeksToExam = examAhead ? Math.max(1, Math.round((new Date(ctx.examDate).getTime() - now) / (7 * DAY))) : null;

  const examLine = examAhead
    ? `Your ${p.exam} is on <strong style="color:#E2E8F0;">${esc(fmtDate(ctx.examDate))}</strong>, about ${weeksToExam} week${weeksToExam === 1 ? '' : 's'} away. A few short sessions a week from here still adds up to real readiness.`
    : `Whenever you are planning to sit for the ${p.exam}, steady short sessions beat a last-minute cram.`;

  const accessLine = ctx.hasAccess
    ? 'Your access is still active, so everything is open the moment you sign in.'
    : 'Your access has ended, so you will be asked to choose a plan when you sign back in.';

  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0F172A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;">One focused session is all it takes to get back in rhythm.</div>
<div style="max-width:520px;margin:0 auto;padding:32px 20px;">

<div style="text-align:center;margin-bottom:28px;">
  <span style="font-size:22px;font-weight:800;color:#34D399;">PassReady Prep</span>
</div>

<div style="background:#1E293B;border-radius:16px;padding:28px;margin-bottom:16px;">
  <div style="color:#E2E8F0;font-size:17px;margin-bottom:20px;">Hi ${esc(ctx.firstName || 'there')},</div>

  <div style="color:#CBD5E1;font-size:15px;line-height:1.6;margin-bottom:16px;">
    It has been about ${gap} since your last ${p.exam} study session. That happens to almost everyone. Work gets busy, life gets loud, and prep slides down the list.
  </div>

  <div style="color:#CBD5E1;font-size:15px;line-height:1.6;margin-bottom:16px;">
    The good news: nothing is lost. Your progress, your scores and your weak spots are all saved, right where you left them.
  </div>

  <div style="color:#94A3B8;font-size:14px;line-height:1.6;margin-bottom:20px;">
    ${examLine}
  </div>

  <div style="border-left:3px solid #34D399;padding:4px 0 4px 14px;margin-bottom:24px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">Your restart: one session, today</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">${p.restart}</div>
  </div>

  <div style="text-align:center;margin-top:8px;">
    <a href="${p.studyUrl}" style="display:inline-block;background:#34D399;color:#0F172A;font-weight:700;padding:14px 32px;border-radius:12px;text-decoration:none;font-size:16px;">
      ${p.cta} &rarr;
    </a>
  </div>

  <div style="color:#64748B;font-size:13px;text-align:center;margin-top:18px;line-height:1.5;">
    ${accessLine}<br>
    Questions or need a hand getting back on track? Just reply to this email.
  </div>
</div>

<div style="text-align:center;color:#475569;font-size:11px;margin-top:20px;line-height:1.6;">
  <a href="${SITE}" style="color:#475569;">PassReady Prep</a> · GA Integrated Therapeutic Perspectives LLC<br>
  ${esc(ctx.postalAddress || '[MAIL_POSTAL_ADDRESS]')}<br>
  <span style="color:#334155;">You are getting this because you have a PassReady Prep account.</span>
  <a href="${ctx.unsubUrl}" style="color:#475569;">Unsubscribe</a>
</div>

</div>
</body></html>`;
}

// Latest study time per user, split by exam. Returns Map(userId → { ncmhce, nce }).
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
  const newest = new Date(now - MIN_DAYS * DAY);
  const oldest = new Date(now - MAX_DAYS * DAY);
  const lastStudy = await lastStudyByUser();

  const ids = [];
  for (const [id, row] of lastStudy) {
    const last = [row.ncmhce, row.nce, row.heartbeat].filter(Boolean).reduce((a, b) => (b > a ? b : a));
    if (last <= newest && last >= oldest) ids.push(id);
  }

  const users = await User.find({
    _id: { $in: ids },
    isGuest: { $ne: true },
    'prefs.digestOptOut': { $ne: true },
    [`broadcastsSent.${BROADCAST_KEY}`]: { $exists: false },
  }).select('email name isGuest subscription nceAccess examDate nceExamDate trialEndsAt createdAt').lean();

  const queue = [];
  const counts = { ncmhce: 0, nce: 0, passed: 0 };
  for (const user of users) {
    const row = lastStudy.get(String(user._id));
    const product = pickProduct(row, user);
    if (ONLY_PRODUCT && product !== ONLY_PRODUCT) continue;
    const plan = product === 'nce' ? user.nceAccess : user.subscription;
    if (plan && plan.scoreReport && plan.scoreReport.status === 'passed') { counts.passed++; continue; }
    const last = [row.ncmhce, row.nce, row.heartbeat].filter(Boolean).reduce((a, b) => (b > a ? b : a));
    queue.push({
      user,
      product,
      firstName: (user.name || '').trim().split(/\s+/)[0] || '',
      daysAway: Math.round((now - last) / DAY),
      examDate: product === 'nce' ? user.nceExamDate : user.examDate,
      hasAccess: hasAccess(product, user, now),
    });
    counts[product]++;
  }
  const toSend = LIMIT ? queue.slice(0, LIMIT) : queue;

  console.log(`Window: last study ${MIN_DAYS}–${MAX_DAYS} days ago · key ${BROADCAST_KEY}`);
  console.log(`Audience: ${toSend.length} (NCMHCE ${counts.ncmhce}, NCE ${counts.nce}; skipped ${counts.passed} who passed)${DRY_RUN ? ' — DRY RUN, not sending' : ''}`);

  if (DRY_RUN) {
    const samples = ['ncmhce', 'nce'].map((product) => toSend.find((q) => q.product === product)
      || { product, firstName: 'Alex', daysAway: 30, examDate: new Date(now.getTime() + 60 * DAY), hasAccess: false, user: { _id: 'sample' } });
    for (const s of samples) {
      const html = buildEmail({ ...s, unsubUrl: unsubscribeUrl(s.user._id), postalAddress });
      console.log(`\n--- ${s.product.toUpperCase()} SUBJECT ---\n${subjectFor(PRODUCTS[s.product], s.firstName)}`);
      if (PREVIEW_DIR) {
        fs.mkdirSync(PREVIEW_DIR, { recursive: true });
        const file = path.join(PREVIEW_DIR, `winback-${s.product}.html`);
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
      const result = await sendMail({
        to: q.user.email,
        subject: subjectFor(PRODUCTS[q.product], q.firstName),
        html: buildEmail({ ...q, unsubUrl: unsubscribeUrl(q.user._id), postalAddress }),
        replyTo: process.env.MAIL_REPLY_TO || undefined,
      });
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

module.exports = { buildEmail, subjectFor, pickProduct };
