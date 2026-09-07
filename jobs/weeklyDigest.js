/**
 * Weekly Study Digest
 *
 * Sends a personalized email to active users each Monday summarizing their
 * past-week performance: cases completed, accuracy, weak domains, and a
 * recommended focus for the coming week.
 *
 * Uses the same Brevo transactional email as trial reminders (no new deps).
 * Only emails users who:
 *   - Have an active paid subscription or are within their trial
 *   - Completed at least 1 case in the past 14 days (engaged)
 *   - Haven't unsubscribed from digests (User.prefs.digestOptOut !== true)
 *
 * Runs once/day via setInterval; only fires emails on Mondays (server time).
 * Set WEEKLY_DIGEST_DISABLE=1 to skip without a code change.
 *
 * Started from server.js: require('./jobs/weeklyDigest').start();
 */

const User = require('../models/User');
const Attempt = require('../models/Attempt');
const ContentItem = require('../models/ContentItem');
const { sendMail } = require('../utils/mailer');
const { trialEndFor } = require('../utils/trial');

const LOG = '[WeeklyDigest]';
const DAY_MS = 24 * 60 * 60 * 1000;
const CHECK_INTERVAL_MS = 12 * 60 * 60 * 1000; // every 12 hours
const FIRST_RUN_DELAY_MS = 90_000; // 90s after boot

const DOMAIN_LABELS = {
  counseling: 'Counseling',
  intake: 'Assessment & Diagnosis',
  treatment: 'Treatment Planning',
  ethics: 'Ethics',
  core: 'Core Attributes',
};

async function sendDigests() {
  const now = new Date();
  // Only send on Mondays (0=Sun, 1=Mon)
  if (now.getUTCDay() !== 1) {
    console.log(`${LOG} Not Monday (UTC day=${now.getUTCDay()}), skipping.`);
    return { sent: 0, skipped: 'not_monday' };
  }

  // Only send between 10:00–22:00 UTC to avoid duplicate windows
  if (now.getUTCHours() < 10 || now.getUTCHours() >= 22) {
    return { sent: 0, skipped: 'outside_window' };
  }

  const weekAgo = new Date(now - 7 * DAY_MS);
  const twoWeeksAgo = new Date(now - 14 * DAY_MS);

  // Find users with recent activity
  const recentAttempts = await Attempt.aggregate([
    { $match: { completedAt: { $gte: twoWeeksAgo } } },
    { $group: { _id: '$userId' } },
  ]);
  const activeUserIds = recentAttempts.map((a) => a._id);
  if (activeUserIds.length === 0) {
    console.log(`${LOG} No active users in last 14 days.`);
    return { sent: 0 };
  }

  // Load those users
  const users = await User.find({
    _id: { $in: activeUserIds },
    'prefs.digestOptOut': { $ne: true },
    // Already sent this week? Check weeklyDigestSentAt
  }).select('email name subscription createdAt trialEndsAt weeklyDigestSentAt');

  let sent = 0;
  for (const user of users) {
    try {
      // Skip if already sent this week
      if (user.weeklyDigestSentAt && user.weeklyDigestSentAt > weekAgo) continue;

      // Check access: paid or within trial
      const sub = user.subscription || {};
      const tier = sub.tier || 'free';
      const trialEnd = trialEndFor(user);
      const hasPaidAccess = ['monthly', 'pass3', 'guarantee'].includes(tier) &&
        sub.currentPeriodEnd && sub.currentPeriodEnd > now;
      const hasTrialAccess = trialEnd && trialEnd > now;
      if (!hasPaidAccess && !hasTrialAccess) continue;

      // Compute this user's weekly stats
      const weekAttempts = await Attempt.find({
        userId: user._id,
        completedAt: { $gte: weekAgo },
      }).lean();

      if (weekAttempts.length === 0) continue;

      // Aggregate domain performance
      const domains = {};
      let totalCorrect = 0, totalQs = 0;
      for (const att of weekAttempts) {
        if (att.domainBreakdown && typeof att.domainBreakdown === 'object') {
          for (const [d, score] of Object.entries(att.domainBreakdown)) {
            if (!domains[d]) domains[d] = { scores: [] };
            domains[d].scores.push(typeof score === 'number' ? score : 0);
          }
        }
        const responses = att.responses || [];
        totalCorrect += responses.filter((r) => r.correct).length;
        totalQs += responses.length;
      }

      const accuracy = totalQs > 0 ? Math.round((totalCorrect / totalQs) * 100) : 0;

      // Find weakest domain
      let weakest = null;
      let weakestScore = 100;
      for (const [d, data] of Object.entries(domains)) {
        const avg = data.scores.length ? Math.round(data.scores.reduce((s, v) => s + v, 0) / data.scores.length * 100) : 0;
        if (avg < weakestScore) { weakestScore = avg; weakest = d; }
      }

      // Get categories practiced
      const caseIds = weekAttempts.map((a) => a.contentItemId).filter(Boolean);
      const items = caseIds.length > 0
        ? await ContentItem.find({ _id: { $in: caseIds } }).select('category').lean()
        : [];
      const cats = [...new Set(items.map((i) => i.category).filter(Boolean))];

      // Build email
      const firstName = (user.name || '').split(' ')[0] || 'there';
      const weakLabel = weakest ? (DOMAIN_LABELS[weakest] || weakest) : null;

      const html = buildDigestEmail({
        firstName,
        casesThisWeek: weekAttempts.length,
        accuracy,
        weakLabel,
        weakestScore,
        categories: cats.slice(0, 5),
      });

      await sendMail({
        to: user.email,
        subject: `Your week in PassReady: ${weekAttempts.length} case${weekAttempts.length === 1 ? '' : 's'}, ${accuracy}% accuracy`,
        html,
      });

      // Mark sent
      await User.updateOne({ _id: user._id }, { $set: { weeklyDigestSentAt: now } });
      sent++;
    } catch (err) {
      console.error(`${LOG} Error for user ${user._id}:`, err.message);
    }
  }

  console.log(`${LOG} Sent ${sent} digest emails.`);
  return { sent };
}

function buildDigestEmail({ firstName, casesThisWeek, accuracy, weakLabel, weakestScore, categories }) {
  const accColor = accuracy >= 70 ? '#34D399' : accuracy >= 50 ? '#FBBF24' : '#F87171';
  const catList = categories.length > 0
    ? categories.map((c) => `<span style="background:#1E293B;color:#94A3B8;padding:2px 8px;border-radius:12px;font-size:12px;margin-right:4px;">${c}</span>`).join('')
    : '';

  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#0F172A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:520px;margin:0 auto;padding:32px 20px;">

<div style="text-align:center;margin-bottom:24px;">
  <span style="font-size:20px;font-weight:800;color:#34D399;">PassReady Prep</span>
  <div style="color:#64748B;font-size:13px;margin-top:4px;">Your weekly study digest</div>
</div>

<div style="background:#1E293B;border-radius:16px;padding:24px;margin-bottom:16px;">
  <div style="color:#E2E8F0;font-size:16px;margin-bottom:16px;">Hey ${firstName} 👋</div>

  <div style="display:flex;gap:16px;text-align:center;margin-bottom:20px;">
    <div style="flex:1;background:#0F172A;border-radius:12px;padding:16px;">
      <div style="font-size:28px;font-weight:800;color:#FFFFFF;">${casesThisWeek}</div>
      <div style="color:#64748B;font-size:12px;">Cases</div>
    </div>
    <div style="flex:1;background:#0F172A;border-radius:12px;padding:16px;">
      <div style="font-size:28px;font-weight:800;color:${accColor};">${accuracy}%</div>
      <div style="color:#64748B;font-size:12px;">Accuracy</div>
    </div>
  </div>

  ${weakLabel ? `
  <div style="background:#FEF3C7;border-radius:12px;padding:12px 16px;margin-bottom:16px;">
    <div style="color:#92400E;font-size:13px;">
      <strong>Focus area:</strong> ${weakLabel} (${weakestScore}%). Spend extra time on ${weakLabel} cases this week.
    </div>
  </div>` : ''}

  ${catList ? `
  <div style="margin-bottom:16px;">
    <div style="color:#64748B;font-size:12px;margin-bottom:6px;">Categories practiced:</div>
    <div>${catList}</div>
  </div>` : ''}

  <div style="text-align:center;margin-top:20px;">
    <a href="https://passreadyprep.com/study" style="display:inline-block;background:#34D399;color:#0F172A;font-weight:700;padding:12px 28px;border-radius:12px;text-decoration:none;font-size:15px;">
      Keep practicing →
    </a>
  </div>
</div>

<div style="text-align:center;color:#475569;font-size:11px;margin-top:20px;">
  <a href="https://passreadyprep.com" style="color:#475569;">PassReady Prep</a> · GA Integrated Therapeutic Perspectives LLC<br>
  <span style="color:#334155;">To stop these emails, toggle digest off in your account settings.</span>
</div>

</div>
</body></html>`;
}

let intervalHandle = null;

function start() {
  if (intervalHandle) return;
  if (process.env.WEEKLY_DIGEST_DISABLE === '1') {
    console.log(`${LOG} Disabled (WEEKLY_DIGEST_DISABLE=1)`);
    return;
  }
  setTimeout(() => sendDigests().catch((e) => console.error(`${LOG} error:`, e.message)), FIRST_RUN_DELAY_MS).unref();
  intervalHandle = setInterval(() => sendDigests().catch((e) => console.error(`${LOG} error:`, e.message)), CHECK_INTERVAL_MS);
  console.log(`${LOG} Scheduled (checks every 12h, sends Mondays only)`);
}

module.exports = { start, sendDigests };
