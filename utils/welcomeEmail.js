// ============================================================================
// Welcome email — sent once, right after an account is created (routes/auth.js).
//
// Until now the first email anyone received from PassReady Prep was "your
// trial ends tomorrow". This one lands while the sign-up is still on screen:
// what the free trial includes and when it ends, the one thing to do first
// (work a case), and a nudge to add an exam date when they skipped it, since
// the study plan and the exam-date emails all hang off that date.
//
// It is about the account they just made, so it is transactional and carries
// no unsubscribe link (the scheduled nudges in jobs/nudgeEmails.js do). It
// never blocks or fails a sign-up: the caller does not await it, and every
// error is logged and swallowed here.
// ============================================================================

const { sendMail } = require('./mailer');
const { TRIAL_DAYS, trialEndFor } = require('./trial');

const DAY = 24 * 60 * 60 * 1000;
const SITE = (process.env.APP_URL || 'https://www.passreadyprep.com').replace(/\/+$/, '');

const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmtDate = (d) => new Date(d).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
const firstName = (user) => (user.name || '').trim().split(/\s+/)[0] || 'there';

const P = (html, extra = '') => `<div style="color:#CBD5E1;font-size:15px;line-height:1.6;margin-bottom:16px;${extra}">${html}</div>`;
const button = (href, label) => `<a href="${href}" style="display:inline-block;background:#34D399;color:#0F172A;padding:14px 28px;font-weight:700;border-radius:12px;text-decoration:none;font-size:16px;margin:6px 4px;">${label} &rarr;</a>`;
const step = (n, title, body) => `
  <div style="display:flex;gap:12px;margin-bottom:16px;">
    <div style="flex:0 0 28px;height:28px;border-radius:50%;background:rgba(52,211,153,.15);color:#34D399;font-weight:800;text-align:center;line-height:28px;font-size:14px;">${n}</div>
    <div><div style="font-size:15px;font-weight:700;color:#E2E8F0;margin-bottom:3px;">${title}</div><div style="color:#94A3B8;font-size:14px;line-height:1.5;">${body}</div></div>
  </div>`;

// The exam-date step reads differently when they gave one at sign-up.
function examDateStep(user, now) {
  if (user.examDate) {
    const when = new Date(user.examDate);
    const weeks = Math.max(1, Math.round((when.getTime() - now) / (7 * DAY)));
    const text = when.getTime() > now
      ? `Your exam is on <strong style="color:#E2E8F0;">${esc(fmtDate(when))}</strong>, about ${weeks} week${weeks === 1 ? '' : 's'} away. One case a day between now and then is roughly ${Math.min(weeks * 7, 60)} cases, and your dashboard turns that into a day-by-day plan built around your weakest domains.`
      : `Your exam date is on file. Set a new one in your dashboard whenever your next sitting is booked, and the study plan will pace itself to it.`;
    return step(2, 'Your plan is keyed to your exam date', text);
  }
  return step(2, 'Add your exam date', `Open the <strong style="color:#E2E8F0;">Study plan</strong> card on your dashboard and set the date. Everything paces itself to it: daily case targets, when to sit the timed mock, and a check-in after the exam.`);
}

function welcomeEmail(user) {
  const now = Date.now();
  const trialEnd = trialEndFor(user);
  const name = firstName(user);
  const subject = 'Welcome to PassReady Prep: your free trial has started';
  const preheader = `${TRIAL_DAYS} days of full access, ending ${fmtDate(trialEnd)}. Start with one case.`;
  const html = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0F172A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;">${esc(preheader)}</div>
<div style="max-width:520px;margin:0 auto;padding:32px 20px;">
<div style="text-align:center;margin-bottom:28px;"><span style="font-size:22px;font-weight:800;color:#34D399;">PassReady Prep</span></div>
<div style="background:#1E293B;border-radius:16px;padding:28px;margin-bottom:16px;">
  <div style="color:#E2E8F0;font-size:17px;margin-bottom:20px;">Hi ${esc(name)},</div>
  ${P(`Your account is ready, and your free trial runs until <strong style="color:#E2E8F0;">${esc(fmtDate(trialEnd))}</strong>: ${TRIAL_DAYS} days of full access to every NCMHCE study tool. All 290+ case simulations, the timed mock exam, the AI debrief with Dr. Claire Moreau, flashcards, decision trees and the DSM-5-TR reference.`)}
  ${step(1, 'Work your first case', 'Read the intake, make the clinical calls across each domain, and see how every decision scores from -2 to +3. One case takes about 20 minutes.')}
  ${examDateStep(user, now)}
  ${step(3, 'Sit a timed mock when readiness holds above 60%', 'The full-length exam runs under the real 225-minute clock with the break after case 5, so the real day feels familiar.')}
  <div style="text-align:center;margin:22px 0 8px;">${button(SITE + '/study', 'Start your first case')}</div>
  <div style="color:#64748B;font-size:13px;text-align:center;margin-top:18px;line-height:1.5;">
    Taking the NCE as well? Your separate NCE trial starts the first time you open <a href="${SITE}/nce.html" style="color:#34D399;">NCE practice</a>.<br>
    After the trial, plans start at $29 a month, and the Pass Guarantee is one payment with access until you pass. <a href="${SITE}/landing.html#pricing" style="color:#34D399;">See plans</a>.<br>
    Stuck on anything? Just reply to this email.
  </div>
</div>
<div style="text-align:center;color:#475569;font-size:11px;margin-top:20px;line-height:1.6;">
  <a href="${SITE}" style="color:#475569;">PassReady Prep</a> · GA Integrated Therapeutic Perspectives LLC<br>
  <span style="color:#334155;">You are getting this because you just created a PassReady Prep account.</span>
</div>
</div></body></html>`;
  const text = [
    `Hi ${name},`,
    '',
    `Your account is ready, and your free trial runs until ${fmtDate(trialEnd)}: ${TRIAL_DAYS} days of full access to every NCMHCE study tool.`,
    '',
    `1. Work your first case: ${SITE}/study`,
    user.examDate ? `2. Your study plan is keyed to your exam date (${fmtDate(user.examDate)}).` : '2. Add your exam date on the Study plan card so everything paces itself to it.',
    '3. Sit a timed mock exam when your readiness holds above 60%.',
    '',
    `Taking the NCE as well? Your NCE trial starts the first time you open ${SITE}/nce.html`,
    'Stuck on anything? Just reply to this email.',
  ].join('\n');
  return { subject, html, text };
}

// Fire-and-forget from the register route. Resolves either way.
async function sendWelcomeEmail(user) {
  try {
    if (!user || !user.email || user.isGuest) return { ok: true, skipped: 'no address' };
    const { subject, html, text } = welcomeEmail(user);
    return await sendMail({ to: user.email, subject, html, text, replyTo: process.env.MAIL_REPLY_TO || undefined });
  } catch (err) {
    console.error('[welcomeEmail] failed:', err.message);
    return { ok: false, error: err.message };
  }
}

module.exports = { sendWelcomeEmail, welcomeEmail };
