#!/usr/bin/env node
// ============================================================================
// fix-distractors.js — AI-assisted repair of LIVE questions that fail
// qualityGate.js. Rewrites (and re-tiers) the 3 non-correct options of each
// flagged question; the keyed answer (weight 3) is never touched.
//
// What the bank actually looks like (audit-quality.js on the live DB):
//   - nearly every question carries a weight set like [3,0,-1,-1] or
//     [3,-1,-2,-2] — the old spec allowed any weights from {0,-1,-2}; the
//     current spec requires exactly one 0 / -1 / -2. That is a RE-TIERING
//     job, not corrupted data: the model decides which distractor is the
//     near-miss, which the novice error, which the harmful one, rewriting
//     where the existing text does not fit its tier.
//   - the key is often the longest option (older cases), OR one distractor
//     is 3-6x longer than the rest (later cases, from the old "make an
//     incorrect option the longest" rule). Both are length cues; both are
//     fixed by bringing all three distractors to the key's length.
//
// One API call per CASE (all of its flagged questions in one prompt), so a
// full-bank pass is ~150 calls rather than ~2,000. Each returned question is
// validated on its own: it must re-pass qualityGate.js and introduce no new
// caseSchema.js error, or it is left unchanged and reported. A question the
// reply omits or mangles is simply still flagged on the next run.
//
// Only a question whose KEY is unambiguous is sent: exactly one weight-3
// option, which is the sole isCorrect, and no empty option text. Anything
// else is a data problem a rewrite cannot safely guess at — skipped.
//
// Three-stage safety: DEFAULT is a free, read-only plan (no API calls). Add
// --generate to call the API and show proposed rewrites (still no DB write).
// Add --apply to write. Writes $set only the repaired questions' paths, and
// by default set the case back to sme_review for a human re-check (pass
// --keep-status to leave published cases live). needsWork is cleared only
// when the whole case passes the gate afterward.
//
//   node tools/cases/fix-distractors.js                      (published only, plan)
//   node tools/cases/fix-distractors.js --all                 (include sme_review/draft)
//   node tools/cases/fix-distractors.js --generate            (show rewrites, 5 cases)
//   node tools/cases/fix-distractors.js --generate --count 20 (more cases per run)
//   node tools/cases/fix-distractors.js --ids D160,D163 --generate
//   node tools/cases/fix-distractors.js --apply --count 20    (write + send to sme_review)
//   node tools/cases/fix-distractors.js --apply --keep-status (write, stay published)
// MONGO_URI / ANTHROPIC_API_KEY from env / .env, same as generate-deep.js.
// ============================================================================

require('dotenv').config();
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const { validateCase } = require('./caseSchema');
const { checkQuestionQuality, checkCaseQuality, ITEM_CONSTRUCTION_RULES, STRUCTURAL_PARITY_CHECK } = require('./qualityGate');
const { callAnthropic, extractJson } = require('./anthropic');

function flag(n, d) { const i = process.argv.indexOf('--' + n); return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : d; }
const COUNT = parseInt(flag('count', '5'), 10);
const ALL = process.argv.includes('--all');
const GENERATE = process.argv.includes('--generate') || process.argv.includes('--apply');
const APPLY = process.argv.includes('--apply');
const KEEP_STATUS = process.argv.includes('--keep-status');
const idi = process.argv.indexOf('--ids');
const EXPLICIT = idi >= 0 ? (process.argv[idi + 1] || '').split(',').map((s) => s.trim()).filter(Boolean) : null;

const AUTO_NOTE_PREFIX = 'Auto-repair:';
const DISTRACTOR_WEIGHTS = '0,-1,-2';

// The key must be unambiguous: exactly one weight-3 option, and it is the
// sole isCorrect. Distractor weights are NOT checked — re-tiering them is
// the repair. Empty option text is a data problem, not a wording one.
function isRewriteSafe(q) {
  const opts = (q && q.options) || [];
  if (opts.length !== 4) return false;
  const keyed = opts.filter((o) => o && o.weight === 3);
  const correct = opts.filter((o) => o && o.isCorrect === true);
  if (keyed.length !== 1 || correct.length !== 1 || keyed[0] !== correct[0]) return false;
  return opts.every((o) => o && typeof o.text === 'string' && o.text.trim().length > 0);
}

// Bucket a qualityGate message for the plan summary.
function classifyReason(msg) {
  if (/weights \[/.test(msg)) return 'weights';
  if (/longest option/.test(msg)) return 'key-longest';
  if (/length ratio/.test(msg)) return 'ratio';
  if (/absolute language/.test(msg)) return 'absolutes';
  if (/commonMistake/.test(msg)) return 'mistake';
  if (/empty option/.test(msg)) return 'empty';
  return 'other';
}

function buildCaseRepairPrompt(caseObj, items) {
  const blocks = items.map(({ qi, question, reasons }) => {
    const correct = question.options.find((o) => o.isCorrect);
    const distractors = question.options.filter((o) => !o.isCorrect);
    const dLines = distractors.map((o) =>
      `    id "${o.id}" (currently weight ${o.weight}, ${o.text.length} chars): "${o.text}"\n      current commonMistake: "${(o.explanation && o.explanation.commonMistake) || ''}"`
    ).join('\n');
    return `--- Q${qi + 1} (domain: ${question.domain}) ---
  QUESTION: "${question.question}"
  KEY (weight 3, id "${correct.id}", ${correct.text.length} chars — do not change): "${correct.text}"
  DISTRACTORS:
${dLines}
  FLAGGED FOR:
${reasons.map((r) => '    - ' + r).join('\n')}`;
  }).join('\n\n');

  return `You are an expert psychometrician and NCMHCE item writer, doing a targeted repair pass on ${items.length} question(s) from ONE existing case. Do not change the clinical scenario, the diagnosis, or any KEY (correct answer) — only rewrite and re-tier the 3 distractors of each question so the item passes the construction rules below.

CASE: "${caseObj.title}"
DIAGNOSIS (given): "${(caseObj.diagnosis && caseObj.diagnosis.name) || (caseObj.primaryDiagnosis && caseObj.primaryDiagnosis.name) || ''}"
INTAKE (for context only): "${String((caseObj.narrative && caseObj.narrative.intake) || '').slice(0, 900)}"

${blocks}

${ITEM_CONSTRUCTION_RULES}

${STRUCTURAL_PARITY_CHECK}

RE-TIERING: the current distractor weights are provisional and usually wrong (for example two -1s and no 0). For every question, assign the three distractors EXACTLY one weight 0, one weight -1, and one weight -2. Re-tier an existing distractor where its clinical content already fits the tier; otherwise rewrite it so it does. Every distractor keeps its ORIGINAL id.

LENGTH: each key is fixed at the character count shown. Every distractor must land close to its key's length — all four options within a 1.25 max/min ratio — and at least one distractor must be as long as or longer than the key. Never make one distractor much longer than the others.

Return ONE JSON object only (no markdown, no prose), shaped exactly like this — one entry per question above, "q" echoing the question number:
{
  "questions": [
    { "q": ${items[0].qi + 1}, "options": [
      { "id": "<original id>", "weight": 0,  "text": "...", "rationale": "one-line label (8+ chars)", "explanation": { "approach": "8+ chars", "rationale": "full sentence", "keyIndicators": ["...", "..."], "commonMistake": "20+ chars naming the exact reasoning flaw" } },
      { "id": "<original id>", "weight": -1, "text": "...", "rationale": "...", "explanation": { "approach": "...", "rationale": "...", "keyIndicators": ["..."], "commonMistake": "..." } },
      { "id": "<original id>", "weight": -2, "text": "...", "rationale": "...", "explanation": { "approach": "...", "rationale": "...", "keyIndicators": ["..."], "commonMistake": "..." } }
    ] }
  ]
}
Output ONLY the JSON object.`;
}

// Merge one returned question into a copy of the original: distractors are
// matched by id (weights are being reassigned, so id is the only stable key),
// and text / weight / rationale / explanation are replaced. Returns null when
// the reply does not cover exactly the original distractor ids with exactly
// the weights {0,-1,-2} — the caller leaves the question unchanged.
function mergeRewrite(question, replyOptions) {
  const distractorIds = question.options.filter((o) => !o.isCorrect).map((o) => String(o.id)).sort();
  const got = (replyOptions || []).filter((o) => o && o.id != null);
  const gotIds = got.map((o) => String(o.id)).sort();
  if (gotIds.join('|') !== distractorIds.join('|')) return null;
  if (got.map((o) => Number(o.weight)).sort((a, b) => b - a).join(',') !== DISTRACTOR_WEIGHTS) return null;
  const byId = {};
  got.forEach((o) => { byId[String(o.id)] = o; });
  const options = question.options.map((o) => {
    if (o.isCorrect) return o;
    const r = byId[String(o.id)];
    return Object.assign({}, o, { weight: Number(r.weight), text: r.text, rationale: r.rationale, explanation: r.explanation });
  });
  return Object.assign({}, question, { options });
}

// Errors validateCase reports on the case WITH the candidate question that it
// did not report before — i.e. regressions the rewrite itself introduced.
// Pre-existing, unrelated schema errors do not block a good distractor fix.
function newSchemaErrors(caseObj, qi, candidate) {
  const before = new Set(validateCase(caseObj).errors);
  const questions = caseObj.questions.slice();
  questions[qi] = candidate;
  return validateCase(Object.assign({}, caseObj, { questions })).errors.filter((e) => !before.has(e));
}

// Keep any human-written review note; replace only our own earlier auto line.
function composeNote(existing, autoLine) {
  const kept = String(existing || '').split('\n').filter((l) => l.trim() && !l.startsWith(AUTO_NOTE_PREFIX));
  return kept.concat(autoLine).join('\n');
}

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  const exam = await Exam.findOne({ key: 'ncmhce' });
  const filter = { format: 'case_sim' };
  if (exam) filter.examId = exam._id;
  if (EXPLICIT) filter.externalId = { $in: EXPLICIT };
  else if (!ALL) filter.status = 'published';

  const docs = await ContentItem.find(filter).select('externalId status reviewNote caseSim').lean();
  console.log('Loaded ' + docs.length + ' case(s) (' + (EXPLICIT ? 'explicit ids' : ALL ? 'all statuses' : 'published only') + ')\n');

  // One entry per case that has at least one flagged, rewrite-safe question.
  const cases = [];
  const skipped = [];
  const histogram = {};
  docs.forEach((d) => {
    const c = Object.assign({}, d.caseSim || {});
    c.id = c.id || d.externalId;
    c.questions = (c.questions || []).slice();
    const items = [];
    c.questions.forEach((q, qi) => {
      const reasons = checkQuestionQuality(q, `q${qi + 1}`);
      if (!reasons.length) return;
      reasons.forEach((r) => { const k = classifyReason(r); histogram[k] = (histogram[k] || 0) + 1; });
      if (!isRewriteSafe(q)) { skipped.push({ id: d.externalId, qi, reasons }); return; }
      items.push({ qi, question: q, reasons });
    });
    if (items.length) cases.push({ _id: d._id, externalId: d.externalId, status: d.status, reviewNote: d.reviewNote, caseObj: c, items, repairedQis: [] });
  });

  const flaggedQ = cases.reduce((n, e) => n + e.items.length, 0);
  console.log(cases.length + ' case(s) with ' + flaggedQ + ' rewrite-safe flagged question(s); ' + skipped.length + ' question(s) skipped (ambiguous key or empty option — manual review).');
  console.log('Failure mix across the bank: ' + Object.entries(histogram).sort((a, b) => b[1] - a[1]).map(([k, v]) => k + ' ' + v).join(' · ') + '\n');
  skipped.forEach((s) => console.log('  SKIP ' + s.id + ' q' + (s.qi + 1) + ': ' + s.reasons.join(' | ')));
  if (skipped.length) console.log('');

  if (!GENERATE) {
    cases.forEach((e) => {
      const mix = {};
      e.items.forEach((it) => it.reasons.forEach((r) => { const k = classifyReason(r); mix[k] = (mix[k] || 0) + 1; }));
      console.log('  ' + e.externalId + ' [' + e.status + '] ' + e.items.length + '/' + e.caseObj.questions.length + ' q flagged: ' +
        Object.entries(mix).map(([k, v]) => k + ' ' + v).join(' · '));
    });
    console.log('\nPlan only — no API calls made. --generate shows proposed rewrites (1 API call per case, --count ' + COUNT + '); --apply writes them.');
    await mongoose.disconnect();
    return;
  }
  if (!process.env.ANTHROPIC_API_KEY) { console.error('\nANTHROPIC_API_KEY not set.'); process.exit(1); }

  const batch = cases.slice(0, COUNT);
  console.log('Repairing ' + batch.length + ' of ' + cases.length + ' case(s) (--count ' + COUNT + ', one API call each)...\n');

  let fixed = 0;
  for (const entry of batch) {
    console.log('  ' + entry.externalId + ' (' + entry.items.length + ' question(s))...');
    let reply;
    try {
      reply = extractJson(await callAnthropic(buildCaseRepairPrompt(entry.caseObj, entry.items), { maxTokens: 12000 }));
    } catch (e) {
      console.log('    ERROR: ' + e.message.slice(0, 150));
      continue;
    }
    const byQ = {};
    (reply.questions || []).forEach((r) => { if (r && r.q != null) byQ[Number(r.q)] = r.options; });

    for (const it of entry.items) {
      const tag = 'q' + (it.qi + 1);
      const returned = byQ[it.qi + 1];
      if (!returned) { console.log('    ' + tag + ': not in reply — left unchanged'); continue; }
      const candidate = mergeRewrite(it.question, returned);
      if (!candidate) { console.log('    ' + tag + ': reply ids/weights do not match the distractor set — left unchanged'); continue; }
      const stillFailing = checkQuestionQuality(candidate, tag);
      if (stillFailing.length) { console.log('    ' + tag + ': STILL FAILS after rewrite: ' + stillFailing.join(' | ') + ' — left unchanged'); continue; }
      const regressions = newSchemaErrors(entry.caseObj, it.qi, candidate);
      if (regressions.length) { console.log('    ' + tag + ': REWRITE BREAKS SCHEMA: ' + regressions.slice(0, 3).join(' | ') + ' — left unchanged'); continue; }

      console.log('    ' + tag + ': OK');
      candidate.options.forEach((o) => { if (!o.isCorrect) console.log('      [' + (o.weight >= 0 ? ' ' : '') + o.weight + '] ' + o.text); });
      entry.caseObj.questions[it.qi] = candidate;
      entry.repairedQis.push(it.qi);
      fixed += 1;
    }
  }

  const touched = batch.filter((e) => e.repairedQis.length);
  console.log('\n' + fixed + ' question(s) repaired across ' + touched.length + ' case(s).');

  if (!APPLY) {
    console.log('Dry run — nothing written. Re-run with --apply to save these' + (KEEP_STATUS ? '.' : ' and send the case(s) back to sme_review.'));
    await mongoose.disconnect();
    return;
  }

  let saved = 0;
  for (const entry of touched) {
    const remaining = checkCaseQuality(entry.caseObj).errors;
    const qList = entry.repairedQis.map((qi) => 'q' + (qi + 1)).join(', ');
    const autoLine = remaining.length
      ? `${AUTO_NOTE_PREFIX} rewrote distractors on ${qList}; ${remaining.length} gate issue(s) remain — needs manual review.`
      : `${AUTO_NOTE_PREFIX} rewrote distractors on ${qList}; case now passes the quality gate — please re-review before publishing.`;

    // $set only the repaired question paths, so a concurrent edit to the
    // narrative, references, or any other question is never clobbered.
    const set = { needsWork: remaining.length > 0, reviewNote: composeNote(entry.reviewNote, autoLine) };
    if (!KEEP_STATUS) set.status = 'sme_review';
    entry.repairedQis.forEach((qi) => { set['caseSim.questions.' + qi] = entry.caseObj.questions[qi]; });
    await ContentItem.updateOne({ _id: entry._id }, { $set: set });
    saved += 1;
    console.log('  saved ' + entry.externalId + ' (' + qList + ')' + (remaining.length ? ' — still needsWork: ' + remaining.length + ' issue(s) left' : ''));
  }
  console.log('Saved ' + saved + ' case(s)' + (KEEP_STATUS ? ' (status unchanged).' : ', set to sme_review for re-review.'));
  await mongoose.disconnect();
}
if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });

module.exports = { isRewriteSafe, mergeRewrite, newSchemaErrors, composeNote, buildCaseRepairPrompt, classifyReason };
