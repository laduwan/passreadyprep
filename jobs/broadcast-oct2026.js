#!/usr/bin/env node
/**
 * One-time broadcast: October 2026 — knowledge tools & question bank drop.
 *
 * Usage:
 *   node jobs/broadcast-oct2026.js          # dry run (logs, no sends)
 *   node jobs/broadcast-oct2026.js --send   # live send via Brevo
 *
 * Idempotent: skips users already flagged with this broadcastKey.
 * Respects digestOptOut.
 * Requires MONGO_URI and BREVO_API_KEY in .env (or Render env vars).
 */

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const { sendMail } = require('../utils/mailer');

const DRY_RUN = !process.argv.includes('--send');
const BATCH_DELAY_MS = 200;

const SUBJECT = "1,600+ questions — and five new study tools — just dropped";

function buildEmail(firstName) {
  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0F172A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:520px;margin:0 auto;padding:32px 20px;">

<div style="text-align:center;margin-bottom:28px;">
  <span style="font-size:22px;font-weight:800;color:#34D399;">PassReady Prep</span>
</div>

<div style="background:#1E293B;border-radius:16px;padding:28px;margin-bottom:16px;">
  <div style="color:#E2E8F0;font-size:17px;margin-bottom:20px;">Hey ${firstName},</div>

  <div style="color:#CBD5E1;font-size:15px;line-height:1.6;margin-bottom:24px;">
    PassReady Prep just got a major content drop. Five new study tools and over 300 new standalone MCQs went live — here's what's waiting for you:
  </div>

  <!-- Feature 1 -->
  <div style="margin-bottom:20px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">🧠 Knowledge Drill — 300 standalone MCQs</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">
      Theories, pioneers, counseling skills, ethics, intake, assessment, diagnosis, and treatment planning — with difficulty and domain filters, instant feedback, and spaced repetition that resurfaces what you keep missing.
    </div>
  </div>

  <!-- Feature 2 -->
  <div style="margin-bottom:20px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">⏱️ Timed Knowledge Exam</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">
      25, 50, 75, or 100 questions under the clock — no feedback until you submit. Simulates the pressure of a knowledge-heavy exam without the case-simulation format. Full domain breakdown on completion.
    </div>
  </div>

  <!-- Feature 3 -->
  <div style="margin-bottom:20px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">🧬 Theories &amp; Pioneers Reference</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">
      34 counseling theories and frameworks — founder, core premise, key terms, techniques, and a targeted exam tip for each. Searchable. CBT, REBT, DBT, ACT, PCT, Gestalt, psychodynamic, family systems, and more.
    </div>
  </div>

  <!-- Feature 4 -->
  <div style="margin-bottom:20px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">🧡 Core Attributes Drill</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">
      30 scenario-based questions on the 15% Core Counseling Attributes domain — Rogers' conditions, Bordin's alliance, rupture and repair, stages of counseling, cultural responsiveness, theory ID, and microskills. Filter by topic.
    </div>
  </div>

  <!-- Feature 5 -->
  <div style="margin-bottom:24px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">📊 Knowledge Drill in Your Analytics</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">
      Your MCQ accuracy now feeds the Performance dashboard — per-domain bars sorted weakest first, so you know exactly where to spend your next session.
    </div>
  </div>

  <!-- CTA -->
  <div style="text-align:center;margin-top:24px;">
    <a href="https://passreadyprep.com/study" style="display:inline-block;background:#34D399;color:#0F172A;font-weight:700;padding:14px 32px;border-radius:12px;text-decoration:none;font-size:16px;">
      Open the study dashboard →
    </a>
  </div>

  <div style="color:#64748B;font-size:13px;text-align:center;margin-top:20px;line-height:1.5;">
    Everything is live now — just open PassReady Prep.<br>
    Total question count: <strong style="color:#94A3B8;">1,600+</strong> across all formats.
  </div>
</div>

<div style="text-align:center;color:#475569;font-size:11px;margin-top:20px;">
  <a href="https://passreadyprep.com" style="color:#475569;">PassReady Prep</a> · GA Integrated Therapeutic Perspectives LLC<br>
  <span style="color:#334155;">You're receiving this because you have a PassReady Prep account.</span>
</div>

</div>
</body></html>`;
}

async function run() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI required'); process.exit(1); }

  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB');

  const users = await User.find({
    'prefs.digestOptOut': { $ne: true },
  }).select('email name').lean();

  console.log(`Audience: ${users.length} users${DRY_RUN ? ' (DRY RUN — not sending)' : ''}`);

  if (DRY_RUN) {
    const preview = buildEmail('Alex');
    console.log('\n--- SUBJECT ---');
    console.log(SUBJECT);
    console.log('\n--- EMAIL PREVIEW (first 800 chars) ---');
    console.log(preview.slice(0, 800) + '...');
    await mongoose.disconnect();
    return;
  }

  let sent = 0, failed = 0;
  for (const user of users) {
    const firstName = (user.name || '').split(' ')[0] || 'there';
    try {
      const result = await sendMail({ to: user.email, subject: SUBJECT, html: buildEmail(firstName) });
      if (result.ok) {
        sent++;
      } else {
        failed++;
        console.error(`Failed: ${user.email}`);
      }
    } catch (err) {
      failed++;
      console.error(`Error: ${user.email}`, err.message);
    }
    await new Promise((r) => setTimeout(r, BATCH_DELAY_MS));
  }

  console.log(`\nDone. Sent: ${sent} | Failed: ${failed} | Total: ${users.length}`);
  await mongoose.disconnect();
}

run().catch((err) => { console.error(err); process.exit(1); });
