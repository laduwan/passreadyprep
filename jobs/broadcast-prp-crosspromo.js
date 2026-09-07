#!/usr/bin/env node
/**
 * One-time cross-promo: PassReady Prep launch → CounselorReady users.
 *
 * CounselorReady (CR) is GAITP's CE platform for licensed counselors — the
 * same audience that supervises or knows pre-license candidates prepping for
 * the NCMHCE. This announces PassReady Prep to them as a "share with your
 * supervisees / colleagues" note, not a hard sell.
 *
 * CR is a separate application with its own database and its own transactional
 * mail provider (Resend, not the Brevo setup this repo's utils/mailer.js uses),
 * so this job takes its own connection and send path rather than reusing
 * models/User.js or utils/mailer.js — those are PassReady Prep's, and running
 * this against PRP's own database/users would be wrong. The schema below
 * mirrors only the fields this broadcast reads from CR's User collection;
 * verify field names against the CounselorReady codebase before relying on it
 * for anything beyond this one-off send.
 *
 * Usage:
 *   node jobs/broadcast-prp-crosspromo.js              # dry run (logs, doesn't send)
 *   node jobs/broadcast-prp-crosspromo.js --send        # actually sends via Resend
 *
 * Requires CR_MONGO_URI and RESEND_API_KEY in .env (or Render env vars).
 */

require('dotenv').config();
const mongoose = require('mongoose');

const DRY_RUN = !process.argv.includes('--send');
const BROADCAST_KEY = 'prp_sept2026_crosspromo'; // idempotency key
const BATCH_DELAY_MS = 250; // Resend rate limit friendly
const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const FROM = process.env.CR_MAIL_FROM || 'CounselorReady <noreply@counselorready.com>';
const SUBJECT = 'Know someone prepping for the NCMHCE? We built something for them.';

// Minimal, loosely-typed mirror of CR's User collection — just enough to read
// recipients and mark idempotency. `strict: false` so unknown CR-side fields
// on existing documents are left untouched by updateOne.
const CrUserSchema = new mongoose.Schema(
  {
    email: String,
    profile: { firstName: String },
    broadcastsSent: mongoose.Schema.Types.Mixed,
  },
  { strict: false, collection: 'users' }
);

function buildEmail(firstName) {
  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0F172A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:520px;margin:0 auto;padding:32px 20px;">

<div style="text-align:center;margin-bottom:28px;">
  <span style="font-size:20px;font-weight:800;color:#D4A855;">CounselorReady</span>
</div>

<div style="background:#1E293B;border-radius:16px;padding:28px;margin-bottom:16px;">
  <div style="color:#E2E8F0;font-size:16px;margin-bottom:18px;">Hey ${firstName},</div>

  <div style="color:#CBD5E1;font-size:15px;line-height:1.65;margin-bottom:20px;">
    If you supervise pre-license counselors or know someone preparing for the NCMHCE — we just launched <strong style="color:#34D399">PassReady Prep</strong>, a clinical case simulation platform built by the same team behind CounselorReady.
  </div>

  <div style="color:#CBD5E1;font-size:15px;line-height:1.65;margin-bottom:22px;">
    It's not a flashcard app. It's the closest thing to sitting in an exam room: realistic case vignettes, differential diagnosis, treatment planning questions scored by domain, and an AI clinical debrief after every case.
  </div>

  <div style="background:#0F172A;border-radius:14px;padding:20px;margin-bottom:20px;">
    <div style="font-size:14px;font-weight:700;color:#34D399;margin-bottom:12px;">What just shipped:</div>
    <div style="color:#94A3B8;font-size:14px;line-height:1.7;">
      📊 Performance analytics — accuracy by domain, category, and difficulty with trends<br>
      🎯 Adaptive recommendations — surfaces cases targeting weak areas<br>
      📅 Exam-date pacing — personalized 3-phase study plan from day one<br>
      🧠 AI clinical debrief — explains the reasoning behind each answer<br>
      ☁️ Cross-device sync — start on laptop, continue on phone<br>
      📬 Weekly progress digest — keeps candidates on track
    </div>
  </div>

  <div style="color:#CBD5E1;font-size:14px;line-height:1.6;margin-bottom:22px;">
    New users get a 14-day free trial. If they pass, they get a free CE course on CounselorReady. If they don't, they get extended access to keep practicing.
  </div>

  <div style="text-align:center;margin-top:20px;">
    <a href="https://passreadyprep.com" style="display:inline-block;background:#34D399;color:#0F172A;font-weight:700;padding:14px 28px;border-radius:12px;text-decoration:none;font-size:15px;">
      Check out PassReady Prep →
    </a>
  </div>

  <div style="color:#64748B;font-size:13px;text-align:center;margin-top:18px;line-height:1.5;">
    Feel free to share this with anyone preparing for their exam.<br>
    Built by GA Integrated Therapeutic Perspectives LLC — the same team and the same standards.
  </div>
</div>

<div style="text-align:center;color:#475569;font-size:11px;margin-top:20px;">
  <a href="https://counselorready.com" style="color:#475569;">CounselorReady</a> · NBCC ACEP Provider #7760<br>
  <span style="color:#334155;">GA Integrated Therapeutic Perspectives LLC</span>
</div>

</div>
</body></html>`;
}

// Resend send, via native fetch — same "no new dependency" approach as this
// repo's utils/mailer.js, since Resend's SDK isn't (and doesn't need to be) a
// dependency of this app.
async function sendViaResend({ to, subject, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, error: 'RESEND_API_KEY not set' };

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ from: FROM, to, subject, html }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      return { ok: false, error: `${res.status} ${detail.slice(0, 300)}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

async function run() {
  if (!process.env.CR_MONGO_URI) { console.error('CR_MONGO_URI required'); process.exit(1); }
  if (!process.env.RESEND_API_KEY && !DRY_RUN) { console.error('RESEND_API_KEY required for sending'); process.exit(1); }

  const conn = await mongoose.createConnection(process.env.CR_MONGO_URI).asPromise();
  console.log('Connected to CounselorReady MongoDB');
  const CrUser = conn.model('User', CrUserSchema);

  const users = await CrUser.find({
    [`broadcastsSent.${BROADCAST_KEY}`]: { $exists: false },
  }).select('email profile.firstName');

  console.log(`${DRY_RUN ? '[DRY RUN] ' : ''}Found ${users.length} users to email.`);

  let sent = 0, failed = 0;
  for (const user of users) {
    const firstName = user.profile?.firstName || 'there';
    const html = buildEmail(firstName);

    if (DRY_RUN) {
      console.log(`  [dry] Would send to ${user.email} (${firstName})`);
      sent++;
      continue;
    }

    const result = await sendViaResend({ to: user.email, subject: SUBJECT, html });
    if (result.ok) {
      await CrUser.updateOne(
        { _id: user._id },
        { $set: { [`broadcastsSent.${BROADCAST_KEY}`]: new Date() } }
      );
      sent++;
      console.log(`  ✓ ${user.email}`);
    } else {
      failed++;
      console.log(`  ✗ ${user.email}: ${result.error}`);
    }

    await new Promise((r) => setTimeout(r, BATCH_DELAY_MS));
  }

  console.log(`\nDone. Sent: ${sent}, Failed: ${failed}`);
  await conn.close();
}

run().catch((err) => { console.error(err); process.exit(1); });
