// ============================================================================
// batchApply.js — apply a stored review batch (models/ReviewBatch.js) to the
// live cases. Shared by the CLI (tools/cases/rewrite-questions.js --from NAME)
// and the admin button (POST /api/admin/review-batches/:name/apply) so both
// use exactly the same rules. Expects an open mongoose connection.
//
// Rules (unchanged from the CLI):
//   • the uploaded decision sheet decides each question; with no sheet, every
//     proposal counts as approved
//   • a question whose live text changed since the batch was generated is
//     skipped (stale), never overwritten
//   • each accepted question must pass the item quality gate, cite the case's
//     own references, and add no new schema errors
//   • only the accepted question paths are written ($set caseSim.questions.N)
// ============================================================================

const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const ReviewBatch = require('../../models/ReviewBatch');
const { validateCase } = require('./caseSchema');
const { checkQuestionQuality } = require('./qualityGate');
const { readReviewSheet, writeRepairs, loadLiveCases, loadBatch } = require('./reviewRoundTrip');

const ALL_WEIGHTS = '3,0,-1,-2';

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

// Plan (write=false) or apply (write=true) a stored batch.
// Returns { name, accepted, rejected:[{tag,reason}], stale:[tag], missing:[id], cases, written, alreadyApplied }.
async function applyStoredBatch(name, { write = false, keepStatus = true } = {}) {
  const batch = await loadBatch(ReviewBatch, name);
  if (!batch) { const e = new Error('Batch not found'); e.status = 404; throw e; }
  if (!batch.proposals || !Array.isArray(batch.proposals.cases)) { const e = new Error('That batch has no proposals'); e.status = 400; throw e; }
  const review = batch.reviewCsv ? readReviewSheet(batch.reviewCsv) : null;
  const ids = batch.proposals.cases.map((p) => p.externalId);
  const entries = await loadLiveCases(Exam, ContentItem, { explicit: ids, from: true });
  const byId = {};
  entries.forEach((e) => { byId[e.externalId] = e; });

  let accepted = 0;
  const rejected = []; const stale = []; const missing = [];
  for (const p of batch.proposals.cases) {
    const entry = byId[p.externalId];
    if (!entry) { missing.push(p.externalId); continue; }
    for (const q of p.questions) {
      const tag = p.externalId + ' q' + (q.qi + 1);
      const liveQ = entry.caseObj.questions[q.qi];
      if (!liveMatchesProposal(liveQ, q)) { stale.push(tag); continue; }
      const r = review && review[p.externalId + '|' + q.qi];
      if (r && r.rejected) { rejected.push({ tag, reason: 'rejected on the review sheet' }); continue; }
      const applied = applyQuestionOverrides(q.after, r);
      if (typeof applied === 'string') { rejected.push({ tag, reason: applied }); continue; }
      const candidate = Object.assign({}, liveQ, applied.question, { id: liveQ.id, domain: liveQ.domain });
      const why = rejectReasons(entry.caseObj, q.qi, candidate);
      if (why) { rejected.push({ tag, reason: why.join(' | ') }); continue; }
      entry.caseObj.questions[q.qi] = candidate;
      entry.repairedQis.push(q.qi);
      accepted += 1;
    }
  }
  const touched = entries.filter((e) => e.repairedQis.length);
  if (write && touched.length) {
    await writeRepairs(ContentItem, touched, { keepStatus, verb: 'rewrote questions' });
    await ReviewBatch.updateOne({ _id: batch._id }, { $set: { appliedAt: new Date() } });
  }
  return {
    name, usedSheet: !!review, accepted, rejected, stale, missing,
    cases: touched.length, written: !!(write && touched.length),
    alreadyApplied: batch.appliedAt || null,
  };
}

module.exports = { ALL_WEIGHTS, newSchemaErrors, rejectReasons, applyQuestionOverrides, liveMatchesProposal, applyStoredBatch };
