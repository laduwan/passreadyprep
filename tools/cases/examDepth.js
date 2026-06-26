// ============================================================================
// examDepth.js — 2022+ NCMHCE "deep case" depth gate
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// The canonical schema validator (caseSchema.js) checks that a case is well
// FORMED. This gate checks that a case is exam-DEEP: it enforces the structural
// contract of the 2022+ clinical-simulation format on top of the schema.
//
// A real 2022+ case unfolds across three ordered sections and tests clinical
// decision-making (the diagnosis is GIVEN). Each scoring domain maps to one
// section (caseSchema.SECTIONS), so we derive the section from each item's
// `domain` — cases never carry a `section` field.
//
//   Assessment & Conceptualization : domains intake + core
//   Treatment Planning             : domain  treatment
//   Counseling & Ethics            : domains counseling + ethics
//
// Gate (errors — a batch is NOT done until these are zero):
//   1. >= 11 questions (the exam floor); target is 13.
//   2. Items appear in non-decreasing section order (Assessment -> Planning ->
//      Process). A planning item must not precede an assessment item, etc.
//   3. Per-section minimums [3, 2, 3] are met.
//   4. Every question has exactly one keyed answer (weight 3) and every
//      distractor weight is in {0, -1, -2}; no distractor carries weight 3.
//   5. Option-length cue (STRICT): the keyed answer may not be the longest /
//      most elaborated option. This is the warning caseSchema raises, promoted
//      to a hard error — the trap that fails batches.
//   6. Each question's evidenceRef[] is non-empty and cites only the case's own
//      reference ids.
//   7. differentialOptions has exactly one correct entry whose name matches the
//      given diagnosis.
//   8. Every references[].source is drawn from the approved library.
//
// Warnings (review nits — should also be zero for a clean batch):
//   - question count != 13 (target), or section distribution far from ~5/4/4.
// ============================================================================

const { SECTIONS, sectionIndexForDomain } = require('./caseSchema');
const { ALLOWED_SOURCES } = require('./references');

const QUESTION_FLOOR = 11;
const QUESTION_TARGET = 13;
const SECTION_MINIMUMS = [3, 2, 3];          // Assessment / Planning / Process
const SECTION_TARGET = [5, 4, 4];            // ~distribution the format expects
const VALID_WEIGHTS = [3, 0, -1, -2];

function isNonEmptyStr(s, min = 1) {
  return typeof s === 'string' && s.trim().length >= min;
}

// Detect a length cue: keyed answer is the longest, or much longer than the
// mean distractor. Mirrors caseSchema's heuristic so the two agree, but here it
// is fatal. Returns a message string, or null when balanced.
function lengthCue(question) {
  const opts = (question && question.options) || [];
  const correct = opts.filter((o) => o && o.isCorrect);
  if (correct.length !== 1 || typeof correct[0].text !== 'string') return null;
  const correctLen = correct[0].text.length;
  const dLens = opts.filter((o) => o && !o.isCorrect).map((o) => (o.text || '').length);
  if (!dLens.length) return null;
  const maxD = Math.max(...dLens);
  const meanD = dLens.reduce((a, b) => a + b, 0) / dLens.length;
  if (correctLen > maxD && correctLen >= meanD * 1.25) {
    return 'keyed answer is the longest option (length cue — lengthen a distractor)';
  }
  if (meanD > 0 && correctLen > meanD * 1.6) {
    return 'keyed answer much longer than distractors (length cue)';
  }
  return null;
}

function validateExamDepth(c) {
  const e = [];
  const w = [];
  const tag = (c && c.id) || (c && c.title) || '<unknown>';
  const pre = `[${tag}] `;
  if (!c || typeof c !== 'object') return { ok: false, errors: ['case is not an object'], warnings: [] };

  const questions = Array.isArray(c.questions) ? c.questions : [];

  // 1. floor / target ------------------------------------------------------
  if (questions.length < QUESTION_FLOOR) {
    e.push(pre + `only ${questions.length} questions (floor is ${QUESTION_FLOOR}, target ${QUESTION_TARGET})`);
  } else if (questions.length !== QUESTION_TARGET) {
    w.push(pre + `${questions.length} questions (target is ${QUESTION_TARGET})`);
  }

  // 2 + 3. section order + per-section minimums ----------------------------
  const counts = SECTIONS.map(() => 0);
  let lastIdx = -1;
  let orderBroken = false;
  questions.forEach((q, qi) => {
    const si = sectionIndexForDomain(q && q.domain);
    counts[si] += 1;
    if (si < lastIdx && !orderBroken) {
      e.push(pre + `q[${qi}] (${q && q.domain}) breaks section order — ` +
        `${SECTIONS[si].title} item appears after a later-section item`);
      orderBroken = true;
    }
    lastIdx = Math.max(lastIdx, si);
  });
  SECTIONS.forEach((s, i) => {
    if (counts[i] < SECTION_MINIMUMS[i]) {
      e.push(pre + `section "${s.title}" has ${counts[i]} item(s); minimum is ${SECTION_MINIMUMS[i]}`);
    }
  });
  if (questions.length >= QUESTION_FLOOR) {
    const off = counts.some((c2, i) => Math.abs(c2 - SECTION_TARGET[i]) >= 2);
    if (off) w.push(pre + `section distribution [${counts.join('/')}] is far from target [${SECTION_TARGET.join('/')}]`);
  }

  // per-question checks ----------------------------------------------------
  const refIds = new Set((Array.isArray(c.references) ? c.references : []).map((r) => r && r.id).filter(Boolean));
  questions.forEach((q, qi) => {
    const qp = pre + `q[${qi}] `;
    const opts = (q && q.options) || [];

    // 4. scoring weights
    const correct = opts.filter((o) => o && o.isCorrect);
    if (correct.length !== 1) e.push(qp + `must have exactly one keyed answer (has ${correct.length})`);
    opts.forEach((o, oi) => {
      if (!VALID_WEIGHTS.includes(o && o.weight)) e.push(qp + `opt[${oi}] weight ${o && o.weight} not in {3,0,-1,-2}`);
      if (o && o.isCorrect && o.weight !== 3) e.push(qp + `opt[${oi}] keyed answer must have weight 3`);
      if (o && !o.isCorrect && o.weight === 3) e.push(qp + `opt[${oi}] distractor must not have weight 3`);
    });

    // 5. option-length cue (fatal here)
    const cue = lengthCue(q);
    if (cue) e.push(qp + cue);

    // 6. evidence references
    if (!Array.isArray(q && q.evidenceRef) || q.evidenceRef.length < 1) {
      e.push(qp + 'missing evidenceRef[]');
    } else if (refIds.size > 0) {
      q.evidenceRef.forEach((rid) => { if (!refIds.has(rid)) e.push(qp + `evidenceRef "${rid}" is not a case reference id`); });
    }
  });

  // 7. differential matches the given diagnosis ----------------------------
  const diffs = Array.isArray(c.differentialOptions) ? c.differentialOptions : [];
  const dcorrect = diffs.filter((o) => o && o.isCorrect);
  if (dcorrect.length !== 1) {
    e.push(pre + `differentialOptions needs exactly one correct (has ${dcorrect.length})`);
  } else if (c.diagnosis && c.diagnosis.name && dcorrect[0].name) {
    const key = c.diagnosis.name.split(',')[0].toLowerCase().slice(0, 12);
    if (!dcorrect[0].name.toLowerCase().includes(key)) {
      e.push(pre + `correct differential "${dcorrect[0].name}" does not match given diagnosis "${c.diagnosis.name}"`);
    }
  }

  // 8. approved sources ----------------------------------------------------
  (Array.isArray(c.references) ? c.references : []).forEach((r, i) => {
    if (r && r.source && !ALLOWED_SOURCES.includes(r.source)) {
      e.push(pre + `references[${i}].source "${r.source}" is not in the approved library`);
    }
    if (!isNonEmptyStr(r && r.detail, 6)) e.push(pre + `references[${i}].detail missing/short`);
  });

  return { ok: e.length === 0, errors: e, warnings: w };
}

function validateExamDepthSet(cases) {
  const errors = [];
  const warnings = [];
  (cases || []).forEach((c) => {
    const r = validateExamDepth(c);
    errors.push(...r.errors);
    warnings.push(...r.warnings);
  });
  return { ok: errors.length === 0, count: (cases || []).length, errors, warnings };
}

module.exports = {
  validateExamDepth,
  validateExamDepthSet,
  QUESTION_FLOOR,
  QUESTION_TARGET,
  SECTION_MINIMUMS,
  lengthCue,
};
