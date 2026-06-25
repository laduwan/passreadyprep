// ============================================================================
// examDepth.js — Phase 2 depth gate for 2022+ NCMHCE-grade cases.
//
// The base validator (caseSchema.validateCase) guarantees item *quality*.
// This gate adds case *depth*: a real exam case runs ~13 multiple-choice items
// unfolding across three sections, not the ~5 of the legacy bank. Use this to
// validate any NEW batch of deep cases to zero errors before import.
//
// Self-contained on purpose: it carries its own domain→section map so it works
// whether or not the SECTIONS export has landed in caseSchema yet.
//
// Usage:
//   const { validateExamDepthSet } = require('./examDepth');
//   const r = validateExamDepthSet(cases, { categories, allowedSources });
// ============================================================================

const { validateCase } = require('./caseSchema');

// Domain → section index (0 assessment, 1 planning, 2 process)
const SECTION_OF = { intake: 0, core: 0, treatment: 1, counseling: 2, ethics: 2 };
const SECTION_TITLES = ['Assessment & Conceptualization', 'Treatment Planning', 'Counseling & Ethics'];

const DEPTH = {
  minQuestions: 11,            // floor — exam cases run ~13 (≈10 scored + pilots)
  targetQuestions: 13,         // author to this
  minPerSection: [3, 2, 3],    // [assessment, planning, process]
};

// Validate one case for exam-grade depth (includes full base quality check).
function validateExamDepth(c, opts = {}) {
  const base = validateCase(c, Object.assign({ strictItemQuality: true }, opts));
  const errors = base.errors.slice();
  const warnings = base.warnings.slice();
  const tag = (c && c.id) || (c && c.title) || '<unknown>';
  const pre = `[${tag}] depth: `;

  const qs = (c && Array.isArray(c.questions)) ? c.questions : [];

  if (qs.length < DEPTH.minQuestions) {
    errors.push(pre + `needs ${DEPTH.minQuestions}+ questions (has ${qs.length}; target ${DEPTH.targetQuestions})`);
  } else if (qs.length < DEPTH.targetQuestions) {
    warnings.push(pre + `${qs.length} questions — exam cases target ${DEPTH.targetQuestions}`);
  }

  const counts = [0, 0, 0];
  qs.forEach((q) => { const s = SECTION_OF[q && q.domain]; if (s != null) counts[s]++; });
  counts.forEach((have, i) => {
    if (have < DEPTH.minPerSection[i]) {
      errors.push(pre + `section "${SECTION_TITLES[i]}" has ${have} item(s), needs ${DEPTH.minPerSection[i]}+`);
    }
  });

  return { ok: errors.length === 0, errors, warnings, sectionCounts: counts };
}

function validateExamDepthSet(cases, opts = {}) {
  const errors = [];
  const warnings = [];
  (cases || []).forEach((c) => {
    const r = validateExamDepth(c, opts);
    errors.push(...r.errors);
    warnings.push(...r.warnings);
  });
  return { ok: errors.length === 0, count: (cases || []).length, errors, warnings };
}

module.exports = { validateExamDepth, validateExamDepthSet, DEPTH, SECTION_OF, SECTION_TITLES };
