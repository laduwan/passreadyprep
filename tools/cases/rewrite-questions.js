#!/usr/bin/env node
// ============================================================================
// rewrite-questions.js — rewrite EVERY question of a case to the clinical
// exam standard, from scratch, while keeping what is already good.
//
// KEPT (never sent for rewriting): the narrative (intake / session1 /
// session2), the diagnosis, the diagnostic rationale, the references, the
// NUMBER of questions, and each question's domain and clinical decision point
// (the old stem and key are passed to the model as the content-area anchor:
// "write a fresh item that tests this same decision"). So a 5-question case
// stays 5 questions on the same five topics; a 13-question case stays 13.
//
// REWRITTEN: the stem, all four options (designed together, so structural
// parity is built in instead of retro-fitted), their tiers (exactly one
// 3 / 0 / -1 / -2), rationale + explanation per option, and the evidenceRef.
//
// Why whole questions rather than distractor repair (fix-distractors.js):
// when the key is fixed and was written long, every distractor has to be
// padded to match it. Designing all four together lets the model write a
// tight key and parallel distractors, which is what the exam standard asks.
//
// One API call per case; a question that fails the gate gets one retry
// (same prompt, that question only, with the failure reasons). Every
// accepted question must pass qualityGate.js, cite only the case's own
// references, and add no new caseSchema.js error.
//
// Three-stage safety, same as fix-distractors.js:
//   node tools/cases/rewrite-questions.js                      (plan: cases + counts)
//   node tools/cases/rewrite-questions.js --generate --ids ncmhce-D160   (print rewrites)
//   node tools/cases/rewrite-questions.js --generate --count 30 --save tools/cases/review/rw1
//       -> rw1.json (exact proposals), rw1.html (review doc: old vs new per
//          question), rw1.csv (4 rows per question; reviewers fill approve /
//          weight_override / text_override / stem_override / comment)
//   node tools/cases/rewrite-questions.js --from tools/cases/review/rw1.json --review tools/cases/review/rw1.csv
//   node tools/cases/rewrite-questions.js --from ... --review ... --apply --keep-status
//
//   --all           include sme_review/draft cases (default: published only)
//   --count N       cases per run (default 5)   --skip N  skip the first N
//   --flagged-only  rewrite only questions that currently fail the gate
//                   (default: every question, per the exam-standard mandate)
// MONGO_URI / ANTHROPIC_API_KEY from env / .env.
// ============================================================================

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const { validateCase } = require('./caseSchema');
const { checkQuestionQuality, classifyReason, ITEM_CONSTRUCTION_RULES, STRUCTURAL_PARITY_CHECK } = require('./qualityGate');
const { callAnthropic, extractJson, MODEL } = require('./anthropic');
const { TIER_LABEL, CSV_HEADER, toCsv, readReviewSheet, esc, writeRepairs, loadLiveCases } = require('./reviewRoundTrip');

function flag(n, d) { const i = process.argv.indexOf('--' + n); return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : d; }
const COUNT = parseInt(flag('count', '5'), 10);
const SKIP = parseInt(flag('skip', '0'), 10);
const ALL = process.argv.includes('--all');
const APPLY = process.argv.includes('--apply');
const KEEP_STATUS = process.argv.includes('--keep-status');
const FLAGGED_ONLY = process.argv.includes('--flagged-only');
const SAVE = flag('save', null);
const FROM = flag('from', null);
const REVIEW = flag('review', null);
const GENERATE = !FROM && (process.argv.includes('--generate') || APPLY || !!SAVE);
const idi = process.argv.indexOf('--ids');
const EXPLICIT = idi >= 0 ? (process.argv[idi + 1] || '').split(',').map((s) => s.trim()).filter(Boolean) : null;

const ALL_WEIGHTS = '3,0,-1,-2';

// ---------------------------------------------------------------------------
// Prompt
// ---------------------------------------------------------------------------

function buildRewritePrompt(caseObj, items) {
  const refs = (caseObj.references || []).map((r) => `  ${r.id}: ${r.source} — ${r.detail}`).join('\n');
  const blocks = items.map(({ qi, question, reasons }) => {
    const key = (question.options || []).find((o) => o.isCorrect) || {};
    const ids = (question.options || []).map((o) => o.id).join(', ');
    return `--- Q${qi + 1} (domain: ${question.domain}; option ids to use: ${ids}) ---
  CONTENT AREA (the clinical decision this item must still test — write a FRESH item on it, do not copy):
    old stem: "${question.question}"
    old key:  "${key.text || ''}"${reasons && reasons.length ? `\n  YOUR PREVIOUS ATTEMPT FAILED VALIDATION:\n${reasons.map((r) => '    - ' + r).join('\n')}` : ''}`;
  }).join('\n\n');

  return `You are an expert psychometrician and NCMHCE item writer. Rewrite ${items.length} question(s) of ONE existing clinical simulation to the clinical exam standard. The case narrative, diagnosis, and references are FIXED and given below; each question keeps its domain and its clinical decision point, but the stem, all four options, their tiers, the explanations, and the evidence citations are written fresh.

CASE: "${caseObj.title}"
DIAGNOSIS (given to the candidate): "${(caseObj.diagnosis && caseObj.diagnosis.name) || (caseObj.primaryDiagnosis && caseObj.primaryDiagnosis.name) || ''}"
INTAKE: "${(caseObj.narrative && caseObj.narrative.intake) || ''}"
SESSION 1: "${(caseObj.narrative && caseObj.narrative.session1) || ''}"
SESSION 2: "${(caseObj.narrative && caseObj.narrative.session2) || ''}"
DIAGNOSTIC RATIONALE: "${caseObj.diagnosticRationale || ''}"
REFERENCES (cite by id in evidenceRef; use ONLY these ids):
${refs}

${blocks}

${ITEM_CONSTRUCTION_RULES}

${STRUCTURAL_PARITY_CHECK}

DESIGN THE FOUR OPTIONS TOGETHER. Write the key first, tightly (no padding, no extra qualifiers that a distractor would not carry), then write three distractors of the same length, grammar, and specificity. Aim for all four within about 10% of each other in character count, typically 80–140 characters each; the key must NOT be the longest — make at least one distractor a few words longer than the key. Put the key at a different option id on different questions — never always the first.

STEMS: specific to this client and this moment in the narrative (use the client's name and the session detail), 12+ characters, a single clear question. Do not reuse the old stem's wording.

EVIDENCE: "evidenceRef" lists 1–2 reference ids from the list above that ground the key.

Return ONE JSON object only (no markdown, no prose), one entry per question, "q" echoing the question number:
{
  "questions": [
    { "q": ${items[0].qi + 1},
      "question": "...",
      "evidenceRef": ["R1"],
      "options": [
        { "id": "<one of the option ids>", "weight": 3,  "text": "...", "rationale": "one-line label (8+ chars)", "explanation": { "approach": "8+ chars", "rationale": "full sentence", "keyIndicators": ["...", "..."], "commonMistake": "20+ chars: why a candidate would wrongly pick a distractor over this key" } },
        { "id": "...", "weight": 0,  "text": "...", "rationale": "...", "explanation": { "approach": "...", "rationale": "...", "keyIndicators": ["..."], "commonMistake": "20+ chars naming the exact reasoning flaw" } },
        { "id": "...", "weight": -1, "text": "...", "rationale": "...", "explanation": { "approach": "...", "rationale": "...", "keyIndicators": ["..."], "commonMistake": "..." } },
        { "id": "...", "weight": -2, "text": "...", "rationale": "...", "explanation": { "approach": "...", "rationale": "...", "keyIndicators": ["..."], "commonMistake": "..." } }
      ] }
  ]
}
Output ONLY the JSON object.`;
}

// ---------------------------------------------------------------------------
// Reply -> candidate question, and validation
// ---------------------------------------------------------------------------

// Build a candidate from a reply entry, keeping the old question's id and
// domain and its option ids. Returns { candidate } or { error }.
function normalizeReply(oldQ, r) {
  if (!r || typeof r !== 'object') return { error: 'no reply' };
  const oldIds = (oldQ.options || []).map((o) => String(o.id)).sort();
  const got = Array.isArray(r.options) ? r.options.filter((o) => o && o.id != null) : [];
  const gotIds = got.map((o) => String(o.id)).sort();
  if (gotIds.join('|') !== oldIds.join('|')) return { error: 'option ids do not match (got ' + gotIds.join(',') + ', need ' + oldIds.join(',') + ')' };
  const weights = got.map((o) => Number(o.weight)).sort((a, b) => b - a).join(',');
  if (weights !== ALL_WEIGHTS) return { error: 'weights [' + weights + '] must be exactly [3,0,-1,-2]' };
  if (typeof r.question !== 'string' || r.question.trim().length < 12) return { error: 'stem missing or too short' };
  const byId = {};
  got.forEach((o) => { byId[String(o.id)] = o; });
  const options = (oldQ.options || []).map((o) => {
    const n = byId[String(o.id)];
    const w = Number(n.weight);
    return { id: o.id, text: String(n.text || '').trim(), isCorrect: w === 3, weight: w, rationale: String(n.rationale || '').trim(), explanation: n.explanation || {} };
  });
  const evidenceRef = Array.isArray(r.evidenceRef) ? r.evidenceRef.map(String) : [];
  return { candidate: Object.assign({}, oldQ, { question: r.question.trim(), evidenceRef, options }) };
}

// Errors validateCase reports with the candidate in place that it did not
// report before: regressions this rewrite introduced.
function newSchemaErrors(caseObj, qi, candidate) {
  const before = new Set(validateCase(caseObj).errors);
  const questions = caseObj.questions.slice();
  questions[qi] = candidate;
  return validateCase(Object.assign({}, caseObj, { questions })).errors.filter((e) => !before.has(e));
}

// null when the candidate is acceptable, else the reasons (string[]).
function rejectReasons(caseObj, qi, candidate) {
  const tag = 'q' + (qi + 1);
  const reasons = checkQuestionQuality(candidate, tag);
  const refIds = new Set((caseObj.references || []).map((r) => r && r.id).filter(Boolean));
  if (!candidate.evidenceRef.length) reasons.push(tag + ': evidenceRef is empty');
  candidate.evidenceRef.forEach((rid) => { if (refIds.size && !refIds.has(rid)) reasons.push(tag + ': evidenceRef "' + rid + '" is not a case reference id'); });
  newSchemaErrors(caseObj, qi, candidate).forEach((e) => reasons.push(e));
  return reasons.length ? reasons : null;
}

// ---------------------------------------------------------------------------
// Length pass — for questions that fail ONLY on length (ratio / key-longest)
// ---------------------------------------------------------------------------
// Models over-elaborate the key even when writing all four options together.
// A regeneration retry with no numbers is a coin flip; a text-only pass with
// exact per-option deltas is not. Because the key is freshly written here it
// may be SHORTENED, which is the better lever: cut the key's padding rather
// than pad three distractors.
//
// Plan: T = mean length of the three distractors. Every option must land in
// [T/1.1, T*1.1] (max/min ratio <= 1.21, under the gate's 1.25); the key must
// end at most T-2 and the currently-longest distractor at least T, so the
// key is never the longest.

const LENGTH_PASSES = 2;
const words = (s) => String(s || '').trim().split(/\s+/).filter(Boolean).length;

function isLengthOnly(reasons) {
  return reasons.length > 0 && reasons.every((r) => ['ratio', 'key-longest'].includes(classifyReason(r)));
}

function lengthPlan(candidate) {
  const opts = candidate.options;
  const key = opts.find((o) => o.isCorrect);
  const ds = opts.filter((o) => !o.isCorrect);
  const T = Math.round(ds.reduce((n, o) => n + o.text.length, 0) / ds.length);
  const lo = Math.ceil(T / 1.1);
  const hi = Math.floor(T * 1.1);
  const longestId = String(ds.reduce((a, b) => (b.text.length > a.text.length ? b : a)).id);
  const cpw = key.text.length / Math.max(1, words(key.text));
  const w = (n) => Math.max(1, Math.round(n / cpw));
  return opts.map((o) => {
    let min = lo, max = hi, role = 'distractor';
    if (o.isCorrect) { max = Math.max(lo, T - 2); role = 'key'; }
    else if (String(o.id) === longestId) { min = Math.max(lo, T); role = 'longest distractor'; }
    if (min > max) min = max;
    return { id: o.id, role, minChars: min, maxChars: max, minWords: w(min), maxWords: w(max) };
  });
}

function buildRewriteLengthPrompt(caseObj, retries) {
  const blocks = retries.map(({ it, candidate }) => {
    const plan = {};
    lengthPlan(candidate).forEach((p) => { plan[String(p.id)] = p; });
    const lines = candidate.options.map((o) => {
      const p = plan[String(o.id)];
      const n = o.text.length;
      let action;
      if (n < p.minChars) action = `TOO SHORT by ${p.minChars - n}+ characters — ADD about ${Math.max(1, p.minWords - words(o.text))}–${Math.max(2, p.maxWords - words(o.text))} words of plausible clinical detail`;
      else if (n > p.maxChars) action = `TOO LONG by ${n - p.maxChars}+ characters — CUT about ${Math.max(1, words(o.text) - p.maxWords)}–${Math.max(2, words(o.text) - p.minWords)} words` + (o.isCorrect ? ' (drop padding and redundant qualifiers; keep exactly what makes it the correct answer)' : '');
      else action = 'length is fine — return it UNCHANGED';
      return `    id "${o.id}" [${p.role}, weight ${o.weight}] (${n} chars / ${words(o.text)} words): "${o.text}"\n      ${action}. Target: ${p.minChars}–${p.maxChars} characters (about ${p.minWords}–${p.maxWords} words)`;
    }).join('\n');
    return `--- Q${it.qi + 1} ---\n  STEM (do not change): "${candidate.question}"\n  OPTIONS:\n${lines}`;
  }).join('\n\n');

  return `You are an NCMHCE item writer fixing ONLY the LENGTH of answer options on ${retries.length} question(s) from one case ("${caseObj.title}"). The clinical meaning, tier (weight), id, rationale and explanation of every option stay as they are; you only add or remove wording to hit the stated length. The KEY must end up shorter than the longest distractor. Count words first, then characters.

${blocks}

Return ONE JSON object only (no markdown, no prose), one entry per question, "q" echoing the question number, every option present with its ORIGINAL id and its new text. Return ONLY id and text per option — weight, rationale and explanation are kept from before and must not be re-sent:
{ "questions": [ { "q": ${retries[0].it.qi + 1}, "options": [ { "id": "...", "text": "..." }, { "id": "...", "text": "..." }, { "id": "...", "text": "..." }, { "id": "...", "text": "..." } ] } ] }
Output ONLY the JSON object.`;
}

// Text-only merge for all four options. Returns null unless the reply covers
// exactly the option ids with non-empty text.
function mergeTextOnly(candidate, replyOptions) {
  const ids = candidate.options.map((o) => String(o.id)).sort();
  const got = (replyOptions || []).filter((o) => o && o.id != null && typeof o.text === 'string' && o.text.trim().length > 0);
  if (got.map((o) => String(o.id)).sort().join('|') !== ids.join('|')) return null;
  const textById = {};
  got.forEach((o) => { textById[String(o.id)] = o.text.trim(); });
  return Object.assign({}, candidate, { options: candidate.options.map((o) => Object.assign({}, o, { text: textById[String(o.id)] })) });
}

// Numbers for the regeneration retry, so "key is the longest" comes with the
// lengths that caused it.
function lengthNote(candidate) {
  const key = candidate.options.find((o) => o.isCorrect);
  const ds = candidate.options.filter((o) => !o.isCorrect);
  return 'attempt lengths: key ' + key.text.length + ' chars; distractors ' + ds.map((o) => o.text.length).join(', ') + ' — the key must be shorter than at least one distractor and all four within a 1.25 ratio';
}

// ---------------------------------------------------------------------------
// Review round-trip pieces specific to whole-question rewrites
// ---------------------------------------------------------------------------

// 4 rows per question (the key is new too), stem carried on every row.
function proposalCsvRows(p, q) {
  return q.after.options.slice().sort((a, b) => b.weight - a.weight).map((o) => [
    p.externalId, p.title, q.qi + 1, q.questionId, o.id, o.weight, TIER_LABEL[o.weight] || o.weight,
    o.text, (o.explanation && o.explanation.commonMistake) || '', '', '', '', '', q.after.question, '',
  ]);
}

// Apply a reviewer's decisions to a proposed question: stem override, per-
// option weight/text overrides (the key may move: isCorrect follows weight 3).
// Returns { question } or an error string.
function applyQuestionOverrides(after, review) {
  const overrides = (review && review.overrides) || {};
  const options = after.options.map((o) => {
    const ov = overrides[String(o.id)];
    const next = Object.assign({}, o);
    if (ov && ov.weight != null) next.weight = ov.weight;
    if (ov && ov.text != null) next.text = ov.text;
    return next;
  });
  const ws = options.map((o) => Number(o.weight)).sort((a, b) => b - a).join(',');
  if (ws !== ALL_WEIGHTS) return 'weight overrides give [' + ws + '], must be exactly one each of 3, 0, -1, -2';
  options.forEach((o) => { o.weight = Number(o.weight); o.isCorrect = o.weight === 3; });
  const question = Object.assign({}, after, { options });
  if (review && review.stem) question.question = review.stem;
  return { question };
}

// Has the live question changed since the proposal was made?
function liveMatchesProposal(liveQ, q) {
  if (!liveQ || !Array.isArray(liveQ.options)) return false;
  if (String(liveQ.id) !== String(q.questionId)) return false;
  if (liveQ.question !== q.before.question) return false;
  const liveIds = liveQ.options.map((o) => String(o.id)).sort().join('|');
  const propIds = q.before.options.map((o) => String(o.id)).sort().join('|');
  return liveIds === propIds;
}

function optionRows(options, cls) {
  return options.slice().sort((a, b) => b.weight - a.weight).map((o) =>
    `<li class="${cls} tier${o.weight}"><span class="w">${esc(TIER_LABEL[o.weight] || o.weight)}</span> <span class="id">${esc(o.id)}</span> ${esc(o.text)} <span class="len">(${(o.text || '').length})</span>` +
    (cls === 'after' ? `<div class="meta"><b>Why a candidate picks it:</b> ${esc(o.explanation && o.explanation.commonMistake)}<br><b>Rationale:</b> ${esc(o.explanation && o.explanation.rationale)}</div>` : '') + '</li>'
  ).join('\n');
}

function renderRewriteHtml(proposals) {
  const nQ = proposals.cases.reduce((n, c) => n + c.questions.length, 0);
  const caseHtml = proposals.cases.map((c) => {
    const qs = c.questions.map((q) => `<div class="q">
<h3>Q${q.qi + 1} <span class="domain">${esc(q.domain)}</span></h3>
<div class="cols">
  <div class="col before"><h4>Before</h4><p class="stem">${esc(q.before.question)}</p><ul>${optionRows(q.before.options, 'before')}</ul></div>
  <div class="col after"><h4>Proposed</h4><p class="stem">${esc(q.after.question)}</p><ul>${optionRows(q.after.options, 'after')}</ul><p class="ref">Evidence: ${esc(q.after.evidenceRef.join(', '))}</p></div>
</div>
<p class="review">approve ☐ &nbsp; tier changes: ______ &nbsp; comment: ______________________</p>
</div>`).join('\n');
    return `<section class="case">
<h2>${esc(c.externalId)} — ${esc(c.title)}</h2>
<p class="dx">${esc(c.dx)} · ${esc(c.difficulty || '')} · ${c.questions.length} of ${c.questionCount} question(s) rewritten</p>
${qs}
</section>`;
  }).join('\n');

  return `<!doctype html>
<html><head><meta charset="utf-8"><title>Question rewrite review — ${esc(proposals.cases.length)} case(s)</title>
<style>
body{font:14px/1.45 -apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#222;max-width:1200px;margin:24px auto;padding:0 16px}
h1{font-size:22px} h2{font-size:18px;margin:36px 0 4px;border-top:2px solid #333;padding-top:16px} h3{font-size:15px;margin:22px 0 4px} h4{margin:0 0 6px;font-size:12.5px;color:#666;text-transform:uppercase}
.dx,.domain,.meta,.ref,.review,.len{color:#666;font-size:12.5px} .domain{font-weight:normal;margin-left:8px} .len{color:#999}
.cols{display:flex;gap:16px} .col{flex:1;min-width:0} .col.before{color:#666} .col.after{border-left:3px solid #2e7d32;padding-left:12px}
.stem{font-weight:600} ul{list-style:none;padding:0;margin:0} li{padding:6px 8px;border:1px solid #ddd;margin-bottom:4px}
.w{font-family:monospace;font-size:12px;font-weight:700} .id{font-family:monospace;color:#888} li.tier3 .w{color:#2e7d32} li.tier0 .w{color:#1565c0} li.tier-1 .w{color:#ef6c00} li.tier-2 .w{color:#c62828}
.after li.tier3{background:#eef7ee}
.intro{background:#fffbe6;border:1px solid #e6d98a;padding:10px 14px;font-size:13px}
@media print{.case{page-break-before:always} h1+.intro{page-break-after:always}}
</style></head><body>
<h1>Question rewrite review — ${proposals.cases.length} case(s), ${nQ} question(s)</h1>
<div class="intro">
<p><b>What this is.</b> Every question below has been rewritten from scratch to the clinical exam standard: new stem, four options designed together for parity, tiers, explanations, and evidence citations. The case narrative, diagnosis, references, question count, and each question's content area are unchanged. The <b>Before</b> column is the current live item for comparison.</p>
<p><b>What to evaluate.</b> (1) Is the <b>key</b> the single best answer for this client at this point in the narrative, and clinically correct? (2) Is each distractor plausible and in the right tier: <b>near-miss (0)</b> defensible but not optimal, not penalized; <b>novice error (-1)</b> plausible wrong framework, mild penalty; <b>harmful error (-2)</b> unsafe, unethical, or fundamentally wrong, heavy penalty? (3) Are the four options parallel, with no clue to the key? (4) Does the stem test the same decision as before and read cleanly?</p>
<p><b>How to record decisions.</b> Use the companion spreadsheet (same name, <code>.csv</code>): four rows per question. <b>N</b> in <code>approve</code> rejects the question. <b>3</b>, <b>0</b>, <b>-1</b> or <b>-2</b> in <code>weight_override</code> re-tiers an option — the key may move, but the four must stay one of each. <code>text_override</code> replaces an option's wording; <code>stem_override</code> (any row of the question) replaces the stem. Blank = accept as proposed.</p>
<p class="meta">Generated ${esc(proposals.generatedAt)} · model ${esc(proposals.model)}</p>
</div>
${caseHtml}
</body></html>
`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function runFromProposals(entries) {
  const proposals = JSON.parse(fs.readFileSync(FROM, 'utf8'));
  const review = REVIEW ? readReviewSheet(fs.readFileSync(REVIEW, 'utf8')) : null;
  const byId = {};
  entries.forEach((e) => { byId[e.externalId] = e; });
  console.log('Loaded ' + proposals.cases.length + ' proposed case(s) from ' + FROM + (REVIEW ? ' with review sheet ' + REVIEW : ' (no review sheet — every proposal counts as approved)') + '\n');

  let accepted = 0, rejected = 0, stale = 0;
  for (const p of proposals.cases) {
    const entry = byId[p.externalId];
    if (!entry) { console.log('  ' + p.externalId + ': not in the database (or filtered out) — skipped'); continue; }
    for (const q of p.questions) {
      const tag = p.externalId + ' q' + (q.qi + 1);
      const liveQ = entry.caseObj.questions[q.qi];
      if (!liveMatchesProposal(liveQ, q)) { console.log('  ' + tag + ': live question changed since proposals were generated — skipped'); stale += 1; continue; }
      const r = review && review[p.externalId + '|' + q.qi];
      if (r && r.rejected) { console.log('  ' + tag + ': rejected by reviewer'); rejected += 1; continue; }
      const applied = applyQuestionOverrides(q.after, r);
      if (typeof applied === 'string') { console.log('  ' + tag + ': ' + applied + ' — skipped'); rejected += 1; continue; }
      const candidate = Object.assign({}, liveQ, applied.question, { id: liveQ.id, domain: liveQ.domain });
      const why = rejectReasons(entry.caseObj, q.qi, candidate);
      if (why) { console.log('  ' + tag + ': ' + why.join(' | ') + ' — skipped'); rejected += 1; continue; }
      const touched = r && (r.stem || Object.keys(r.overrides).length) ? ' (with reviewer overrides)' : '';
      console.log('  ' + tag + ': OK' + touched);
      entry.caseObj.questions[q.qi] = candidate;
      entry.repairedQis.push(q.qi);
      accepted += 1;
    }
  }
  const touched = entries.filter((e) => e.repairedQis.length);
  console.log('\n' + accepted + ' question(s) ready across ' + touched.length + ' case(s); ' + rejected + ' rejected/invalid, ' + stale + ' stale.');
  if (!APPLY) { console.log('Plan only — nothing written. Add --apply to save these' + (KEEP_STATUS ? '.' : ' (add --keep-status to leave published cases live).')); return; }
  await writeRepairs(ContentItem, touched, { keepStatus: KEEP_STATUS, verb: 'rewrote questions' });
}

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  if (SAVE && APPLY) { console.error('--save writes proposals for review instead of the database; drop --apply (apply later with --from).'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  const entries = await loadLiveCases(Exam, ContentItem, { explicit: EXPLICIT, all: ALL, from: FROM });
  if (FROM) { await runFromProposals(entries); await mongoose.disconnect(); return; }
  console.log('Loaded ' + entries.length + ' case(s) (' + (EXPLICIT ? 'explicit ids' : ALL ? 'all statuses' : 'published only') + ')\n');

  // Every question is an item unless --flagged-only.
  let flaggedQ = 0;
  entries.forEach((e) => {
    e.caseObj.questions.forEach((q, qi) => {
      const reasons = checkQuestionQuality(q, 'q' + (qi + 1));
      if (reasons.length) flaggedQ += 1;
      if (!FLAGGED_ONLY || reasons.length) e.items.push({ qi, question: q, flagged: reasons.length > 0 });
    });
  });
  const cases = entries.filter((e) => e.items.length);
  const totalQ = cases.reduce((n, e) => n + e.items.length, 0);
  console.log(cases.length + ' case(s), ' + totalQ + ' question(s) to rewrite' + (FLAGGED_ONLY ? ' (flagged only)' : '') + '; ' + flaggedQ + ' of them currently fail the gate.\n');

  if (!GENERATE) {
    cases.forEach((e) => console.log('  ' + e.externalId + ' [' + e.status + '] ' + e.items.length + ' q (' + e.items.filter((i) => i.flagged).length + ' flagged) — ' + (e.caseObj.title || '').slice(0, 50)));
    console.log('\nPlan only — no API calls made. --generate rewrites (1 API call per case, --count ' + COUNT + '); --save NAME writes proposals for review; --apply writes to the database.');
    await mongoose.disconnect();
    return;
  }
  if (!process.env.ANTHROPIC_API_KEY) { console.error('\nANTHROPIC_API_KEY not set.'); process.exit(1); }

  const batch = cases.slice(SKIP, SKIP + COUNT);
  if (!batch.length) { console.log('--skip ' + SKIP + ' is past the end of the ' + cases.length + ' case(s); nothing to do.'); await mongoose.disconnect(); return; }
  console.log('Rewriting ' + batch.length + ' of ' + cases.length + ' case(s) (' + (SKIP ? 'skipping the first ' + SKIP + ', ' : '') + '--count ' + COUNT + ', one API call each: ' + batch[0].externalId + ' … ' + batch[batch.length - 1].externalId + ')...\n');

  const proposals = { generatedAt: new Date().toISOString(), model: MODEL, mode: 'rewrite', cases: [] };
  let done = 0;
  for (const entry of batch) {
    console.log('  ' + entry.externalId + ' (' + entry.items.length + ' question(s))...');
    const proposed = [];
    const accept = (it, candidate, note) => {
      console.log('    q' + (it.qi + 1) + ': OK' + (note || ''));
      console.log('      ' + candidate.question);
      candidate.options.slice().sort((a, b) => b.weight - a.weight).forEach((o) => console.log('      [' + (o.weight >= 0 ? ' ' : '') + o.weight + '] ' + o.id + ': ' + o.text + '  (' + o.text.length + ')'));
      proposed.push({ qi: it.qi, questionId: it.question.id, domain: it.question.domain, before: { question: it.question.question, evidenceRef: it.question.evidenceRef || [], options: it.question.options }, after: { question: candidate.question, evidenceRef: candidate.evidenceRef, options: candidate.options } });
      if (!SAVE) { entry.caseObj.questions[it.qi] = candidate; entry.repairedQis.push(it.qi); }
      done += 1;
    };

    // Pass 1 generates every question; a question that fails for a reason
    // other than length is regenerated once (pass 2) with its reasons. Any
    // question that fails ONLY on length, from either pass, goes to the
    // text-only length passes instead of being regenerated.
    let lengthQueue = [];
    let pending = entry.items.map((it) => Object.assign({}, it));
    for (let pass = 1; pass <= 2 && pending.length; pass++) {
      if (pass > 1) console.log('    retry: ' + pending.length + ' question(s) — ' + pending.map((r) => 'q' + (r.qi + 1)).join(', '));
      let reply;
      try {
        reply = extractJson(await callAnthropic(buildRewritePrompt(entry.caseObj, pending), { maxTokens: 16000 }));
      } catch (e) {
        console.log('    ERROR: ' + e.message.slice(0, 150));
        break;
      }
      const byQ = {};
      (reply.questions || []).forEach((r) => { if (r && r.q != null) byQ[Number(r.q)] = r; });
      const next = [];
      for (const it of pending) {
        const tag = 'q' + (it.qi + 1);
        const n = normalizeReply(it.question, byQ[it.qi + 1]);
        if (n.error) { console.log('    ' + tag + ': ' + n.error); next.push(Object.assign({}, it, { reasons: [n.error] })); continue; }
        const why = rejectReasons(entry.caseObj, it.qi, n.candidate);
        if (!why) { accept(it, n.candidate, pass > 1 ? ' (after retry)' : ''); continue; }
        if (isLengthOnly(why)) { console.log('    ' + tag + ': off-length — ' + why.join(' | ')); lengthQueue.push({ it, candidate: n.candidate, reasons: why }); continue; }
        console.log('    ' + tag + ': ' + why.join(' | '));
        next.push(Object.assign({}, it, { reasons: why.concat(isLengthOnly(why.filter((r) => /longest|ratio/.test(r))) ? [lengthNote(n.candidate)] : []) }));
      }
      pending = next;
    }
    pending.forEach((it) => console.log('    q' + (it.qi + 1) + ': still failing after retry — left unchanged'));

    for (let lp = 1; lp <= LENGTH_PASSES && lengthQueue.length; lp++) {
      console.log('    length pass ' + lp + ': ' + lengthQueue.length + ' question(s) — ' + lengthQueue.map((r) => 'q' + (r.it.qi + 1)).join(', '));
      let reply2;
      try {
        reply2 = extractJson(await callAnthropic(buildRewriteLengthPrompt(entry.caseObj, lengthQueue), { maxTokens: 12000 }));
      } catch (e) {
        console.log('    ERROR (length pass): ' + e.message.slice(0, 150));
        break;
      }
      const byQ2 = {};
      (reply2.questions || []).forEach((r) => { if (r && r.q != null) byQ2[Number(r.q)] = r.options; });
      const next = [];
      for (const r of lengthQueue) {
        const tag = 'q' + (r.it.qi + 1);
        const cand2 = mergeTextOnly(r.candidate, byQ2[r.it.qi + 1]);
        if (!cand2) { console.log('    ' + tag + ': length pass reply unusable — left unchanged'); continue; }
        const why = rejectReasons(entry.caseObj, r.it.qi, cand2);
        if (!why) { accept(r.it, cand2, ' (after length pass ' + lp + ')'); continue; }
        if (isLengthOnly(why) && lp < LENGTH_PASSES) { next.push({ it: r.it, candidate: cand2, reasons: why }); continue; }
        console.log('    ' + tag + ': ' + why.join(' | ') + ' — left unchanged');
      }
      lengthQueue = next;
    }
    lengthQueue.forEach((r) => console.log('    q' + (r.it.qi + 1) + ': still off-length after ' + LENGTH_PASSES + ' passes — left unchanged'));

    if (proposed.length) {
      const c = entry.caseObj;
      proposals.cases.push({ externalId: entry.externalId, status: entry.status, title: c.title, dx: (c.diagnosis && c.diagnosis.name) || (c.primaryDiagnosis && c.primaryDiagnosis.name) || '', difficulty: c.difficulty, questionCount: c.questions.length, questions: proposed });
    }
  }

  console.log('\n' + done + ' question(s) rewritten across ' + proposals.cases.length + ' case(s).');

  if (SAVE) {
    fs.mkdirSync(path.dirname(path.resolve(SAVE)), { recursive: true });
    fs.writeFileSync(SAVE + '.json', JSON.stringify(proposals, null, 1));
    fs.writeFileSync(SAVE + '.html', renderRewriteHtml(proposals));
    const rows = [CSV_HEADER];
    proposals.cases.forEach((p) => p.questions.forEach((q) => rows.push(...proposalCsvRows(p, q))));
    fs.writeFileSync(SAVE + '.csv', toCsv(rows));
    console.log('Wrote ' + SAVE + '.json (proposals), ' + SAVE + '.html (review document), ' + SAVE + '.csv (review sheet, ' + (rows.length - 1) + ' option rows).');
    console.log('Nothing written to the database. After review: --from ' + SAVE + '.json --review ' + SAVE + '.csv [--apply --keep-status]');
    await mongoose.disconnect();
    return;
  }

  if (!APPLY) {
    console.log('Dry run — nothing written. Re-run with --apply to save these' + (KEEP_STATUS ? '.' : ' and send the case(s) back to sme_review.'));
    await mongoose.disconnect();
    return;
  }
  await writeRepairs(ContentItem, entries.filter((e) => e.repairedQis.length), { keepStatus: KEEP_STATUS, verb: 'rewrote questions' });
  await mongoose.disconnect();
}
if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });

module.exports = { buildRewritePrompt, normalizeReply, rejectReasons, applyQuestionOverrides, liveMatchesProposal, proposalCsvRows, renderRewriteHtml, isLengthOnly, lengthPlan, buildRewriteLengthPrompt, mergeTextOnly, lengthNote };
