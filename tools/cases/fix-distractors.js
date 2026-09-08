#!/usr/bin/env node
// ============================================================================
// fix-distractors.js — AI-assisted repair of LIVE questions that fail
// qualityGate.js (structural parity, absolute language, thin novice-trap
// mistakes). Only rewrites the 3 non-correct options (weight 0/-1/-2) of a
// question; the keyed answer (weight 3) is never touched.
//
// This is a targeted "distractor rewrite" pass, not a case regenerator — it
// leaves the narrative, diagnosis, references, and the correct answer alone,
// and only asks the model to fix what the gate actually flagged.
//
// Only questions with a fixable *quality* issue are repaired. A question with
// a *structural* problem (wrong weight set, an empty option) is skipped and
// left for a human — the correct answer can't be inferred from broken data.
//
// Three-stage safety: DEFAULT is a free, read-only plan (no API calls). Add
// --generate to call the API and show proposed rewrites (still no DB write).
// Add --apply to write, after every rewrite re-passes qualityGate.js. A
// repaired case is set back to sme_review for a human to re-check before it
// goes live again, even if it was previously published.
//
//   node tools/cases/fix-distractors.js                      (plan only, free)
//   node tools/cases/fix-distractors.js --generate            (show rewrites)
//   node tools/cases/fix-distractors.js --generate --count 10 (more per run)
//   node tools/cases/fix-distractors.js --ids D012,D045 --generate
//   node tools/cases/fix-distractors.js --apply                (write + re-review)
// MONGO_URI / ANTHROPIC_API_KEY from env / .env, same as generate-deep.js.
// ============================================================================

require('dotenv').config();
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const { validateCase } = require('./caseSchema');
const { checkQuestionQuality, ITEM_CONSTRUCTION_RULES, STRUCTURAL_PARITY_CHECK } = require('./qualityGate');

function flag(n, d) { const i = process.argv.indexOf('--' + n); return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : d; }
const COUNT = parseInt(flag('count', '5'), 10);
const GENERATE = process.argv.includes('--generate') || process.argv.includes('--apply');
const APPLY = process.argv.includes('--apply');
const idi = process.argv.indexOf('--ids');
const EXPLICIT = idi >= 0 ? (process.argv[idi + 1] || '').split(',').map((s) => s.trim()).filter(Boolean) : null;
const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

// A question's weight set must already be exactly {3,0,-1,-2} with non-empty
// text on every option before a rewrite is safe to attempt — anything else is
// a data-integrity problem, not a wording problem, and needs a human.
function isRewriteSafe(q) {
  const opts = (q && q.options) || [];
  if (opts.length !== 4) return false;
  const weights = opts.map((o) => o && o.weight).sort((a, b) => b - a);
  if (weights.join(',') !== '3,0,-1,-2') return false;
  return opts.every((o) => o && typeof o.text === 'string' && o.text.trim().length > 0);
}

function buildRepairPrompt(caseTitle, question, correct, distractors, reasons) {
  const distractorBlock = distractors.map((o) =>
    `  weight ${o.weight} (id "${o.id}"): "${o.text}"\n    current commonMistake: "${(o.explanation && o.explanation.commonMistake) || ''}"`
  ).join('\n');

  return `You are an expert psychometrician and NCMHCE item writer, doing a targeted repair pass on ONE existing question. Do not change the clinical scenario, the diagnosis, or the correct answer — only rewrite the 3 incorrect options so the item passes the construction rules below.

CASE: "${caseTitle}"
QUESTION: "${question.question}"

CORRECT ANSWER (weight 3, id "${correct.id}" — do not change): "${correct.text}"

CURRENT DISTRACTORS (weight 0 = near-miss, -1 = common novice error, -2 = harmful error):
${distractorBlock}

WHY THIS ITEM WAS FLAGGED:
${reasons.map((r) => '  - ' + r).join('\n')}

${ITEM_CONSTRUCTION_RULES}

${STRUCTURAL_PARITY_CHECK}

Rewrite the 3 distractors (weight 0, -1, -2) to fix the flagged problems while keeping each one's assigned weight and clinical intent. Return ONE JSON object only (no markdown, no prose), shaped exactly like this:
{
  "options": [
    { "id": "<same id as the weight-0 distractor above>", "weight": 0, "text": "...", "rationale": "one-line label (8+ chars)",
      "explanation": { "approach": "8+ chars", "rationale": "full sentence", "keyIndicators": ["...", "..."], "commonMistake": "20+ chars naming the exact reasoning flaw" } },
    { "id": "<same id as the weight--1 distractor above>", "weight": -1, "text": "...", "rationale": "...", "explanation": { "approach": "...", "rationale": "...", "keyIndicators": ["..."], "commonMistake": "..." } },
    { "id": "<same id as the weight--2 distractor above>", "weight": -2, "text": "...", "rationale": "...", "explanation": { "approach": "...", "rationale": "...", "keyIndicators": ["..."], "commonMistake": "..." } }
  ]
}
Output ONLY the JSON object.`;
}

async function callAnthropic(prompt) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': API_KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: MODEL, max_tokens: 4000, messages: [{ role: 'user', content: prompt }] }),
  });
  if (!res.ok) throw new Error('API ' + res.status + ': ' + (await res.text()).slice(0, 200));
  const j = await res.json();
  return (j.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
}
function parseJson(text) { let t = text.trim(); const a = t.indexOf('{'), b = t.lastIndexOf('}'); if (a > 0 || b < t.length - 1) t = t.slice(a, b + 1); return JSON.parse(t); }

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  const exam = await Exam.findOne({ key: 'ncmhce' });
  const filter = { format: 'case_sim' };
  if (exam) filter.examId = exam._id;
  if (EXPLICIT) filter.externalId = { $in: EXPLICIT };

  const docs = await ContentItem.find(filter).select('externalId status caseSim').lean();

  // Collect every failing, rewrite-safe question across all cases.
  const targets = [];
  const skipped = [];
  docs.forEach((d) => {
    const c = Object.assign({}, d.caseSim || {});
    c.id = c.id || d.externalId;
    (c.questions || []).forEach((q, qi) => {
      const reasons = checkQuestionQuality(q, `q${qi + 1}`);
      if (!reasons.length) return;
      if (!isRewriteSafe(q)) { skipped.push({ id: d.externalId, qi, reasons }); return; }
      targets.push({ docId: d.externalId, status: d.status, caseTitle: c.title, caseObj: c, qi, question: q, reasons });
    });
  });

  console.log(targets.length + ' rewrite-safe question(s) flagged, ' + skipped.length + ' skipped (need manual review: broken weight set or empty option).\n');
  skipped.forEach((s) => console.log('  SKIP ' + s.id + ' q' + (s.qi + 1) + ': ' + s.reasons.join(' | ')));
  if (skipped.length) console.log('');

  if (!GENERATE) {
    console.log(targets.length + ' candidate(s) for repair:');
    targets.forEach((t) => console.log('  ' + t.docId + ' q' + (t.qi + 1) + ' [' + t.status + ']: ' + t.reasons.join(' | ')));
    console.log('\nPlan only — no API calls made. Re-run with --generate to see proposed rewrites, or --apply to write them.');
    await mongoose.disconnect();
    return;
  }
  if (!API_KEY) { console.error('\nANTHROPIC_API_KEY not set.'); process.exit(1); }

  const batch = targets.slice(0, COUNT);
  console.log('Repairing ' + batch.length + ' of ' + targets.length + ' flagged question(s) (--count ' + COUNT + ')...\n');

  const byCase = {};
  let fixed = 0;

  for (const t of batch) {
    const opts = t.question.options;
    const correct = opts.find((o) => o.isCorrect);
    const distractors = opts.filter((o) => !o.isCorrect);
    console.log('  ' + t.docId + ' q' + (t.qi + 1) + '...');
    try {
      const prompt = buildRepairPrompt(t.caseTitle, t.question, correct, distractors, t.reasons);
      const rewritten = parseJson(await callAnthropic(prompt));
      const byWeight = {};
      (rewritten.options || []).forEach((o) => { byWeight[o.weight] = o; });

      const newOptions = opts.map((o) => {
        if (o.isCorrect) return o;
        const r = byWeight[o.weight];
        if (!r) return o;
        return Object.assign({}, o, { text: r.text, rationale: r.rationale, explanation: r.explanation });
      });
      const candidate = Object.assign({}, t.question, { options: newOptions });
      const stillFailing = checkQuestionQuality(candidate, `q${t.qi + 1}`);
      if (stillFailing.length) { console.log('    STILL FAILS after rewrite: ' + stillFailing.join(' | ') + ' — left unchanged'); continue; }

      console.log('    OK — rewrote ' + distractors.length + ' distractor(s)');
      newOptions.forEach((o) => { if (!o.isCorrect) console.log('      [' + o.weight + '] ' + o.text); });

      byCase[t.docId] = byCase[t.docId] || t.caseObj;
      byCase[t.docId].questions[t.qi] = candidate;
      fixed += 1;
    } catch (e) {
      console.log('    ERROR: ' + e.message.slice(0, 150));
    }
  }

  console.log('\n' + fixed + ' question(s) repaired across ' + Object.keys(byCase).length + ' case(s).');

  if (!APPLY) {
    console.log('Dry run — nothing written. Re-run with --apply to save these and send the case(s) back to sme_review.');
    await mongoose.disconnect();
    return;
  }

  let saved = 0;
  for (const [externalId, caseObj] of Object.entries(byCase)) {
    const schemaResult = validateCase(caseObj);
    if (!schemaResult.ok) {
      console.log('  SKIP WRITE ' + externalId + ' — fails caseSchema after rewrite: ' + schemaResult.errors.slice(0, 3).join(' | '));
      continue;
    }
    await ContentItem.updateOne(
      { externalId },
      { $set: { caseSim: caseObj, status: 'sme_review', needsWork: false, reviewNote: 'Auto-repaired distractors (fix-distractors.js) — please re-review before publishing.' } }
    );
    saved += 1;
  }
  console.log('Saved ' + saved + ' case(s), set to sme_review for re-review.');
  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
