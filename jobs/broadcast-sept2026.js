#!/usr/bin/env node
/**
 * One-time broadcast: September 2026 feature drop announcement.
 *
 * Usage:
 *   node jobs/broadcast-sept2026.js              # dry run (logs, doesn't send)
 *   node jobs/broadcast-sept2026.js --send       # actually sends via Brevo
 *
 * Targets every registered user. Respects digestOptOut. Skips anyone
 * who already received this broadcast (tracked via a one-time flag on
 * the user doc so re-runs are safe).
 *
 * Requires MONGO_URI and BREVO_API_KEY in .env (or Render env vars).
 */

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const { sendMail } = require('../utils/mailer');

const DRY_RUN = !process.argv.includes('--send');
const BROADCAST_KEY = 'sept2026_features'; // idempotency key
const BATCH_DELAY_MS = 200; // 200ms between sends (Brevo rate limit friendly)

const SUBJECT = "Your study plan just got smarter — here's what's new";

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
    We just shipped a batch of upgrades that make PassReady Prep feel less like a question bank and more like a personal study coach. Here's what's new:
  </div>

  <!-- Feature 1 -->
  <div style="margin-bottom:20px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">📊 Performance Analytics</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">
      See your accuracy by domain, by diagnostic category, and by difficulty — with 7-day trends and a 30-day activity chart. Your weakest areas are called out so you know exactly where to focus.
    </div>
  </div>

  <!-- Feature 2 -->
  <div style="margin-bottom:20px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">🎯 Smart Case Recommendations</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">
      The case list now shows "Recommended for you" cases targeting your weakest domains. No more guessing which case to do next.
    </div>
  </div>

  <!-- Feature 3 -->
  <div style="margin-bottom:20px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">📅 Exam-Date Pacing</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">
      Set your NCMHCE date and get a personalized 3-phase study plan with daily targets and an on-track indicator. New users get this during signup — but you can set yours from the Dashboard now.
    </div>
  </div>

  <!-- Feature 4 -->
  <div style="margin-bottom:20px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">🔍 Category Filters</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">
      Filter the case list by diagnostic category — Trauma, Anxiety, Substance, Personality, and more. Stack it with the difficulty filter to drill exactly where you need it.
    </div>
  </div>

  <!-- Feature 5 -->
  <div style="margin-bottom:20px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">☁️ Cross-Device Sync</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">
      Flashcard progress and study history now sync across devices when you're signed in. Start on your laptop, pick up on your phone.
    </div>
  </div>

  <!-- Feature 6 -->
  <div style="margin-bottom:24px;">
    <div style="font-size:15px;font-weight:700;color:#34D399;margin-bottom:4px;">📬 Weekly Digest</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.5;">
      Every Monday you'll get a summary of your week — cases completed, accuracy, and your focus area for the week ahead.
    </div>
  </div>

  <div style="text-align:center;margin-top:24px;">
    <a href="https://passreadyprep.com/study" style="display:inline-block;background:#34D399;color:#0F172A;font-weight:700;padding:14px 32px;border-radius:12px;text-decoration:none;font-size:16px;">
      See what's new →
    </a>
  </div>

  <div style="color:#64748B;font-size:13px;text-align:center;margin-top:20px;line-height:1.5;">
    All of this is live now — no update needed.<br>Just open PassReady Prep and start practicing.
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

  // Find all users who haven't received this broadcast and haven't opted out
  const users = await User.find({
    'prefs.digestOptOut': { $ne: true },
    [`broadcastsSent.${BROADCAST_KEY}`]: { $exists: false },
  }).select('email name');

  console.log(`${DRY_RUN ? '[DRY RUN] ' : ''}Found ${users.length} users to email.`);

  let sent = 0, failed = 0;
  for (const user of users) {
    const firstName = (user.name || '').split(' ')[0] || 'there';
    const html = buildEmail(firstName);

    if (DRY_RUN) {
      console.log(`  [dry] Would send to ${user.email} (${firstName})`);
      sent++;
      continue;
    }

    try {
      const result = await sendMail({ to: user.email, subject: SUBJECT, html });
      if (result.ok) {
        // Mark as sent (idempotency)
        await User.updateOne(
          { _id: user._id },
          { $set: { [`broadcastsSent.${BROADCAST_KEY}`]: new Date() } }
        );
        sent++;
        console.log(`  ✓ ${user.email}`);
      } else {
        failed++;
        console.log(`  ✗ ${user.email}: ${result.error || result.status}`);
      }
    } catch (err) {
      failed++;
      console.log(`  ✗ ${user.email}: ${err.message}`);
    }

    // Rate limit
    if (!DRY_RUN) await new Promise((r) => setTimeout(r, BATCH_DELAY_MS));
  }

  console.log(`\nDone. Sent: ${sent}, Failed: ${failed}`);
  await mongoose.disconnect();
}

run().catch((err) => { console.error(err); process.exit(1); });
