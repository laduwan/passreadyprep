// ============================================================================
// reviewRoundTrip.js — the SME review plumbing shared by fix-distractors.js
// (distractor repairs) and rewrite-questions.js (whole-question rewrites):
//
//   - the decision sheet (CSV) reviewers fill in Excel / Sheets
//   - reading it back (approve / weight_override / text_override / stem_override)
//   - review-note composition that never clobbers a human's note
//   - the write path: $set only the repaired question paths, status handling,
//     needsWork cleared only when the whole case passes the gate afterward
//
// Pure functions except writeRepairs (which takes the model as a parameter).
// ============================================================================

const { checkCaseQuality } = require('./qualityGate');

const AUTO_NOTE_PREFIX = 'Auto-repair:';
const TIER_LABEL = { 3: 'KEY (3)', 0: 'near-miss (0)', '-1': 'novice error (-1)', '-2': 'harmful error (-2)' };

// One row per option. fix-distractors writes 3 rows per question (distractors
// only); rewrite-questions writes 4 (the key is new too). stem columns are
// filled by rewrite-questions and left blank by fix-distractors.
const CSV_HEADER = ['case_id', 'title', 'q', 'question_id', 'option_id', 'proposed_weight', 'proposed_tier', 'proposed_text', 'proposed_commonMistake', 'approve', 'weight_override', 'text_override', 'comment', 'proposed_stem', 'stem_override'];

function csvCell(v) {
  const s = v == null ? '' : String(v);
  return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
function toCsv(rows) { return rows.map((r) => r.map(csvCell).join(',')).join('\r\n') + '\r\n'; }

// Minimal RFC 4180 reader: quoted fields, doubled quotes, embedded newlines.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let inQ = false;
  const s = String(text).replace(/^﻿/, '');
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (inQ) {
      if (ch === '"') { if (s[i + 1] === '"') { cell += '"'; i++; } else inQ = false; }
      else cell += ch;
    } else if (ch === '"') inQ = true;
    else if (ch === ',') { row.push(cell); cell = ''; }
    else if (ch === '\r') { /* handled by \n */ }
    else if (ch === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
    else cell += ch;
  }
  if (cell.length || row.length) { row.push(cell); rows.push(row); }
  return rows.filter((r) => r.some((c) => c.trim() !== ''));
}

// Read a filled review sheet ->
//   { "<case>|<qi>": { rejected, stem, overrides: { optId: { weight, text } } } }
// Any N/no/reject/x in `approve` on any row rejects the whole question.
function readReviewSheet(text) {
  const rows = parseCsv(text);
  if (!rows.length) return {};
  const header = rows[0].map((h) => h.trim());
  const col = (name) => header.indexOf(name);
  const need = ['case_id', 'q', 'option_id', 'approve', 'weight_override', 'text_override'];
  const missing = need.filter((n) => col(n) < 0);
  if (missing.length) throw new Error('review sheet is missing column(s): ' + missing.join(', '));
  const stemCol = col('stem_override');
  const out = {};
  rows.slice(1).forEach((r) => {
    const key = r[col('case_id')] + '|' + (parseInt(r[col('q')], 10) - 1);
    const entry = out[key] = out[key] || { rejected: false, stem: null, overrides: {} };
    if (/^\s*(n|no|reject|rejected|x)\s*$/i.test(r[col('approve')] || '')) entry.rejected = true;
    const w = (r[col('weight_override')] || '').trim();
    const t = (r[col('text_override')] || '').trim();
    if (w !== '' || t !== '') {
      const o = entry.overrides[r[col('option_id')]] = entry.overrides[r[col('option_id')]] || {};
      if (w !== '') o.weight = Number(w);
      if (t !== '') o.text = t;
    }
    if (stemCol >= 0 && (r[stemCol] || '').trim() && !entry.stem) entry.stem = r[stemCol].trim();
  });
  return out;
}

// Keep any human-written review note; replace only our own earlier auto line.
function composeNote(existing, autoLine) {
  const kept = String(existing || '').split('\n').filter((l) => l.trim() && !l.startsWith(AUTO_NOTE_PREFIX));
  return kept.concat(autoLine).join('\n');
}

const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Persist repaired questions. `touched` entries: { _id, externalId, reviewNote,
// caseObj (with repaired questions already in place), repairedQis }.
// $set only the repaired question paths, so a concurrent edit to the
// narrative, references, or any other question is never clobbered.
async function writeRepairs(ContentItem, touched, { keepStatus, verb = 'rewrote distractors on' } = {}) {
  let saved = 0;
  for (const entry of touched) {
    const remaining = checkCaseQuality(entry.caseObj).errors;
    const qList = entry.repairedQis.map((qi) => 'q' + (qi + 1)).join(', ');
    const autoLine = remaining.length
      ? `${AUTO_NOTE_PREFIX} ${verb} ${qList}; ${remaining.length} gate issue(s) remain — needs manual review.`
      : `${AUTO_NOTE_PREFIX} ${verb} ${qList}; case now passes the quality gate${keepStatus ? '.' : ' — please re-review before publishing.'}`;
    const set = { needsWork: remaining.length > 0, reviewNote: composeNote(entry.reviewNote, autoLine) };
    if (!keepStatus) set.status = 'sme_review';
    entry.repairedQis.forEach((qi) => { set['caseSim.questions.' + qi] = entry.caseObj.questions[qi]; });
    await ContentItem.updateOne({ _id: entry._id }, { $set: set });
    saved += 1;
    console.log('  saved ' + entry.externalId + ' (' + qList + ')' + (remaining.length ? ' — still needsWork: ' + remaining.length + ' issue(s) left' : ''));
  }
  console.log('Saved ' + saved + ' case(s)' + (keepStatus ? ' (status unchanged).' : ', set to sme_review for re-review.'));
  return saved;
}

// Load case_sim docs as work entries. `from` mode loads all statuses because
// the proposals file decides which cases matter.
async function loadLiveCases(Exam, ContentItem, { explicit, all, from } = {}) {
  const exam = await Exam.findOne({ key: 'ncmhce' });
  const filter = { format: 'case_sim' };
  if (exam) filter.examId = exam._id;
  if (explicit) filter.externalId = { $in: explicit };
  else if (!all && !from) filter.status = 'published';
  const docs = await ContentItem.find(filter).select('externalId status reviewNote caseSim').lean();
  return docs.map((d) => {
    const c = Object.assign({}, d.caseSim || {});
    c.id = c.id || d.externalId;
    c.questions = (c.questions || []).slice();
    return { _id: d._id, externalId: d.externalId, status: d.status, reviewNote: d.reviewNote, caseObj: c, items: [], repairedQis: [] };
  });
}

module.exports = { AUTO_NOTE_PREFIX, TIER_LABEL, CSV_HEADER, toCsv, parseCsv, readReviewSheet, composeNote, esc, writeRepairs, loadLiveCases };
