/**
 * Quality Digest — Biweekly item quality and IRR report for PassReady Prep.
 *
 * Every other Monday at 5 AM ET, samples published NCMHCE cases and runs:
 *   - Validity check: does each question test the correct Priority Ladder rung
 *     with the correct weight assignments?
 *   - IRR check: do N independent AI calls agree on the weight assignments
 *     (blind — no stored weights shown)?
 *
 * Emails a summary to ADMIN_ALERT_EMAIL via Brevo.
 *
 * Biweekly logic: fires every Monday; checks whether the current ISO week
 * number is even. Week parity is stable and doesn't drift.
 *
 * Env vars:
 *   ANTHROPIC_API_KEY    — required (same key as debrief/tutor)
 *   ADMIN_ALERT_EMAIL    — recipient (falls back to MAIL_FROM_EMAIL)
 *   BREVO_API_KEY        — required for actual send
 *   QUALITY_DIGEST_DISABLE=1  — skip without a code change
 *   QUALITY_SAMPLE_SIZE  — questions per run (default 15)
 *   IRR_SAMPLE_SIZE      — questions for IRR check (default 10)
 *   IRR_RATERS           — independent calls per question (default 3)
 *
 * Started from server.js: require('./jobs/qualityDigest').start();
 */

const ContentItem = require('../models/ContentItem');
const Exam = require('../models/Exam');
const { sendMail } = require('../utils/mailer');

const LOG = '[QualityDigest]';
const DAY_MS = 24 * 60 * 60 * 1000;
const CHECK_INTERVAL_MS = 12 * 60 * 60 * 1000; // check every 12h
const FIRST_RUN_DELAY_MS = 120_000;             // 2 min after boot

const QUALITY_SAMPLE = parseInt(process.env.QUALITY_SAMPLE_SIZE || '15', 10);
const IRR_SAMPLE     = parseInt(process.env.IRR_SAMPLE_SIZE || '10', 10);
const IRR_RATERS     = parseInt(process.env.IRR_RATERS || '3', 10);

let intervalHandle = null;

// ── Week parity — biweekly gate ───────────────────────────────────────────────
// ISO week number since epoch. Even weeks = send.
function isEvenWeek() {
  const weekMs = 7 * DAY_MS;
  return Math.floor(Date.now() / weekMs) % 2 === 0;
}

// ── Anthropic call (no streaming — short responses only) ──────────────────────
async function callAI(prompt, maxTokens = 500) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error('ANTHROPIC_API_KEY not set');
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: maxTokens,
      messages: [{ role: 'user', content: prompt }] }),
  });
  if (!r.ok) throw new Error('Anthropic ' + r.status);
  const d = await r.json();
  return (d.content || []).filter(b => b.type === 'text').map(b => b.text).join('').trim();
}

function extractJson(raw) {
  const a = raw.indexOf('{'), b = raw.lastIndexOf('}');
  if (a === -1 || b === -1) throw new Error('no JSON in response');
  return JSON.parse(raw.slice(a, b + 1));
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

const FRAMEWORK = `
PRIORITY LADDER:
Rung 1: Imminent safety — suicidality, homicidality, abuse, danger — nothing else first.
Rung 2: Medical/substance rule-outs — organic causes? Rule out before diagnosing.
Rung 3: Stabilization — acute symptom relief, grounding, crisis reduction.
Rung 4: Alliance and validation — client must feel heard before any intervention.
Rung 5: Clarify the picture — assessment, history, collateral info.
Rung 6: Evidence-based treatment — right modality for the right diagnosis.
Rung 7: Ethics throughout — confidentiality, mandated reporting, competence.

WEIGHT GRADIENT (exactly one per question):
+3 KEY — clinically correct action for the highest-priority rung available.
0 Near-miss — right domain, wrong timing.
-1 Common error — novice sequencing or criterion mistake.
-2 Harmful error — risks welfare, violates ethics, scope violation.`.trim();

// ── Single-question validity check ────────────────────────────────────────────
async function validityCheck(doc, q, qi) {
  const cs = doc.caseSim || doc;
  const n = cs.narrative || {};
  const ctx = [n.intake, n.session1, n.session2].filter(Boolean).join(' ');
  const dx = cs.diagnosis || cs.primaryDiagnosis || {};
  const letters = 'ABCD';
  const opts = (q.options || []).map((o, i) => {
    const w = o.weight != null ? o.weight : (o.isCorrect ? 3 : '?');
    return `${letters[i]}. [w:${w}] ${o.text}`;
  }).join('\n');

  const prompt = `${FRAMEWORK}

CASE: ${ctx.slice(0, 600)}
${dx.name ? 'Working diagnosis: ' + dx.name : ''}

QUESTION: ${q.question || ''}
OPTIONS:
${opts}

Evaluate weight assignments. Return JSON only:
{"rungTested":1-7,"keyValid":true/false,"twoDefensible":true/false,"higherRungSkipped":true/false,"concerns":[]}`;

  const raw = await callAI(prompt, 300);
  return extractJson(raw);
}

// ── Single-question blind IRR rating ─────────────────────────────────────────
async function blindRate(doc, q, qi) {
  const cs = doc.caseSim || doc;
  const n = cs.narrative || {};
  const ctx = [n.intake, n.session1, n.session2].filter(Boolean).join(' ');
  const dx = cs.diagnosis || cs.primaryDiagnosis || {};
  const letters = 'ABCD';
  const opts = (q.options || []).map((o, i) => `${letters[i]}. ${o.text}`).join('\n');

  const prompt = `${FRAMEWORK}

Assign exactly one weight (+3, 0, -1, -2) to each option. All four weights used once.

CASE: ${ctx.slice(0, 600)}
${dx.name ? 'Working diagnosis: ' + dx.name : ''}

QUESTION: ${q.question || ''}
OPTIONS:
${opts}

Return JSON only (no prose): {"A":<w>,"B":<w>,"C":<w>,"D":<w>}`;

  const raw = await callAI(prompt, 100);
  const j = extractJson(raw);
  const vals = ['A', 'B', 'C', 'D'].map(k => j[k]);
  if (!vals.every(v => [-2, -1, 0, 3].includes(v)) || new Set(vals).size !== 4) return null;
  return j;
}

// ── Cohen's Kappa (pairwise, 4 option slots × 4 weight categories) ────────────
function kappa(a1, a2) {
  const keys = ['A', 'B', 'C', 'D'];
  const cats = [3, 0, -1, -2];
  const n = keys.length;
  const Po = keys.filter(k => a1[k] === a2[k]).length / n;
  const Pe = cats.reduce((s, c) => {
    const p1 = keys.filter(k => a1[k] === c).length / n;
    const p2 = keys.filter(k => a2[k] === c).length / n;
    return s + p1 * p2;
  }, 0);
  return Pe >= 1 ? 1 : (Po - Pe) / (1 - Pe);
}

// ── Sample questions from the published bank ──────────────────────────────────
async function sampleQuestions(n) {
  const exam = await Exam.findOne({ key: 'ncmhce' });
  const filter = { format: 'case_sim', status: 'published' };
  if (exam) filter.examId = exam._id;
  const docs = await ContentItem.find(filter).select('externalId caseSim').lean();
  const all = [];
  docs.forEach(doc => {
    const cs = doc.caseSim || doc;
    (cs.questions || []).forEach((q, qi) => {
      const opts = q.options || [];
      const vals = opts.map(o => o.weight != null ? o.weight : (o.isCorrect ? 3 : null));
      // Only include questions with a full clean weight set
      if (vals.includes(3) && vals.includes(0) && vals.includes(-1) && vals.includes(-2)) {
        all.push({ doc, q, qi, caseTag: doc.externalId || String(doc._id) });
      }
    });
  });
  return all.sort(() => Math.random() - 0.5).slice(0, n);
}

// ── Run the full digest ───────────────────────────────────────────────────────
async function runDigest() {
  const startedAt = Date.now();
  console.log(`${LOG} Starting quality digest run`);

  // ── Validity check ─────────────────────────────────────────────────────────
  const vSample = await sampleQuestions(QUALITY_SAMPLE);
  let vPass = 0, vTwoDefensible = 0, vHigherRung = 0;
  const vFlags = [];

  for (const { doc, q, qi, caseTag } of vSample) {
    try {
      const r = await validityCheck(doc, q, qi);
      const clean = r.keyValid && !r.twoDefensible && !r.higherRungSkipped &&
                    (r.concerns || []).length === 0;
      if (clean) vPass++;
      if (r.twoDefensible) vTwoDefensible++;
      if (r.higherRungSkipped) vHigherRung++;
      if (!clean) vFlags.push(`${caseTag} Q${qi + 1}: ${[
        !r.keyValid && 'KEY invalid',
        r.twoDefensible && 'two defensible',
        r.higherRungSkipped && 'higher rung skipped',
        ...(r.concerns || []),
      ].filter(Boolean).join(', ')}`);
      await sleep(800);
    } catch (e) {
      console.error(`${LOG} Validity error ${caseTag} Q${qi + 1}:`, e.message);
      await sleep(800);
    }
  }

  // ── IRR check ──────────────────────────────────────────────────────────────
  const iSample = await sampleQuestions(IRR_SAMPLE);
  let kappaSum = 0, kappaCount = 0, keyIdSum = 0;
  const iFlags = [];

  for (const { doc, q, qi, caseTag } of iSample) {
    const raterResults = [];
    for (let r = 0; r < IRR_RATERS; r++) {
      try {
        const result = await blindRate(doc, q, qi);
        raterResults.push(result);
        await sleep(600);
      } catch (e) {
        raterResults.push(null);
        await sleep(600);
      }
    }

    const valid = raterResults.filter(r => r !== null);
    if (valid.length < 2) continue;

    // Pairwise kappa
    const pairs = [];
    for (let i = 0; i < valid.length; i++)
      for (let j = i + 1; j < valid.length; j++)
        pairs.push(kappa(valid[i], valid[j]));
    const avgK = pairs.reduce((s, k) => s + k, 0) / pairs.length;

    // KEY identification rate
    const cs = doc.caseSim || doc;
    const opts = (cs.questions[qi] || {}).options || [];
    const storedKeyLetter = 'ABCD'[opts.findIndex(o => (o.weight != null ? o.weight : (o.isCorrect ? 3 : null)) === 3)];
    const keyIdRate = storedKeyLetter
      ? valid.filter(r => r[storedKeyLetter] === 3).length / valid.length
      : null;

    kappaSum += avgK;
    kappaCount++;
    if (keyIdRate !== null) keyIdSum += keyIdRate;

    if (avgK < 0.61) {
      iFlags.push(`${caseTag} Q${qi + 1}: κ=${avgK.toFixed(3)}${keyIdRate !== null ? ` keyId=${Math.round(keyIdRate*100)}%` : ''}`);
    }
  }

  const avgKappa = kappaCount ? kappaSum / kappaCount : null;
  const avgKeyId = kappaCount ? keyIdSum / kappaCount : null;
  const elapsedMin = Math.round((Date.now() - startedAt) / 60000);

  // ── Build email ────────────────────────────────────────────────────────────
  const vPct = vSample.length ? Math.round(vPass / vSample.length * 100) : 0;
  const kappaInterp = avgKappa == null ? 'N/A' :
    avgKappa >= 0.81 ? 'Almost perfect' :
    avgKappa >= 0.61 ? 'Substantial' :
    avgKappa >= 0.41 ? 'Moderate — review flagged items' : 'Fair/Poor — rewrites needed';

  const flagsHtml = (items) => items.length
    ? `<ul style="margin:8px 0;padding-left:20px;">${items.map(f => `<li style="color:#b91c1c;font-size:13px;">${f}</li>`).join('')}</ul>`
    : '<p style="color:#16a34a;font-size:13px;margin:4px 0;">No flags — all items within acceptable range.</p>';

  const html = `
<div style="max-width:640px;margin:0 auto;font-family:-apple-system,Arial,sans-serif;color:#1e293b;">
  <div style="background:#0f172a;padding:20px 24px;border-radius:8px 8px 0 0;">
    <h1 style="color:#34d399;font-size:20px;margin:0;">PassReady Prep — Biweekly Quality Digest</h1>
    <p style="color:#94a3b8;font-size:13px;margin:6px 0 0;">${new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})} · ${elapsedMin}min run</p>
  </div>
  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-top:none;padding:20px 24px;border-radius:0 0 8px 8px;">

    <h2 style="font-size:15px;color:#0f172a;margin:0 0 12px;">Content Validity Check</h2>
    <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:12px;">
      <tr><td style="padding:4px 0;color:#64748b;">Questions sampled</td><td style="font-weight:600;">${vSample.length}</td></tr>
      <tr><td style="padding:4px 0;color:#64748b;">Valid (all tiers correct)</td><td style="font-weight:600;color:${vPct>=80?'#16a34a':'#b91c1c'};">${vPass}/${vSample.length} (${vPct}%)</td></tr>
      <tr><td style="padding:4px 0;color:#64748b;">Two defensible options</td><td style="font-weight:600;">${vTwoDefensible}</td></tr>
      <tr><td style="padding:4px 0;color:#64748b;">Higher rung skipped</td><td style="font-weight:600;">${vHigherRung}</td></tr>
    </table>
    ${vFlags.length ? '<p style="font-size:13px;font-weight:600;color:#b91c1c;">Flagged items:</p>' + flagsHtml(vFlags) : flagsHtml([])}

    <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;">

    <h2 style="font-size:15px;color:#0f172a;margin:0 0 12px;">Inter-Rater Reliability (${IRR_RATERS} blind raters)</h2>
    <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:12px;">
      <tr><td style="padding:4px 0;color:#64748b;">Questions sampled</td><td style="font-weight:600;">${iSample.length}</td></tr>
      <tr><td style="padding:4px 0;color:#64748b;">Avg pairwise κ</td><td style="font-weight:600;color:${avgKappa!=null&&avgKappa>=0.61?'#16a34a':'#b91c1c'};">${avgKappa != null ? avgKappa.toFixed(3) : 'N/A'} — ${kappaInterp}</td></tr>
      <tr><td style="padding:4px 0;color:#64748b;">KEY identification rate</td><td style="font-weight:600;">${avgKeyId != null ? Math.round(avgKeyId*100)+'%' : 'N/A'}</td></tr>
      <tr><td style="padding:4px 0;color:#64748b;">Items below κ 0.61</td><td style="font-weight:600;">${iFlags.length}</td></tr>
    </table>
    ${iFlags.length ? '<p style="font-size:13px;font-weight:600;color:#b91c1c;">Low-agreement items (run fix-distractors.js --ids on these):</p>' + flagsHtml(iFlags) : flagsHtml([])}

    <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;">
    <p style="font-size:12px;color:#94a3b8;margin:0;">
      Next run: ~2 weeks. To run on demand: <code>node jobs/qualityDigest.js --now</code> on Render shell.<br>
      To suppress: set <code>QUALITY_DIGEST_DISABLE=1</code> in Render env vars.
    </p>
  </div>
</div>`;

  const to = process.env.ADMIN_ALERT_EMAIL || process.env.MAIL_FROM_EMAIL;
  if (!to) { console.log(`${LOG} No ADMIN_ALERT_EMAIL set — skipping email.`); return; }

  await sendMail({
    to,
    subject: `[PRP Quality] ${vPct}% valid · κ=${avgKappa != null ? avgKappa.toFixed(2) : 'N/A'} · ${new Date().toLocaleDateString('en-US',{month:'short',day:'numeric'})}`,
    html,
    text: `PassReady Prep Quality Digest\n\nValidity: ${vPass}/${vSample.length} (${vPct}%)\nAvg κ: ${avgKappa != null ? avgKappa.toFixed(3) : 'N/A'} (${kappaInterp})\nFlagged items: ${vFlags.length + iFlags.length}\n\nValidity flags:\n${vFlags.join('\n') || 'None'}\n\nIRR flags:\n${iFlags.join('\n') || 'None'}`,
  });

  console.log(`${LOG} Digest sent → ${to} (${elapsedMin}min, ${vSample.length + iSample.length} questions)`);
}

// ── Scheduler ─────────────────────────────────────────────────────────────────
async function tick() {
  const now = new Date();
  // Fire on Mondays (UTC day 1) of even weeks only
  if (now.getUTCDay() !== 1) return;
  if (!isEvenWeek()) return;
  await runDigest().catch(e => console.error(`${LOG} Digest error:`, e.message));
}

function start() {
  if (intervalHandle) return;
  if (process.env.QUALITY_DIGEST_DISABLE === '1') {
    console.log(`${LOG} Disabled (QUALITY_DIGEST_DISABLE=1).`);
    return;
  }
  // On-demand mode: node jobs/qualityDigest.js --now
  if (process.argv.includes('--now')) {
    runDigest().catch(e => { console.error(`${LOG} Error:`, e.message); process.exit(1); });
    return;
  }
  setTimeout(() => tick().catch(e => console.error(`${LOG} tick error:`, e.message)), FIRST_RUN_DELAY_MS).unref();
  intervalHandle = setInterval(() => tick().catch(e => console.error(`${LOG} tick error:`, e.message)), CHECK_INTERVAL_MS);
  console.log(`${LOG} Scheduled (checks every 12h, sends biweekly Mondays).`);
}

module.exports = { start, runDigest };
