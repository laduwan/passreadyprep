// ============================================================================
// caseImport.js — load hand-authored deep cases (tools/cases/deep-cases-batch-*.js)
// into MongoDB from the admin panel (GET/POST /api/admin/generate/import-cases).
// Expects an open mongoose connection. No API calls.
//
// INSERT-ONLY. A case whose externalId already exists under the ncmhce exam is
// never touched — its content, status and reviewer edits stay as they are. Only
// cases that are not in the database yet are offered, and each one is checked
// on its own against the same gates as tools/cases/import-deep-cases.js (depth
// gate + item quality gate). A failing case is reported and skipped; it never
// blocks the others. New cases land as `sme_review` — nothing is published.
//
// Unlike import-deep-cases.js (which upserts every batch and aborts if any
// older case fails today's gate), this is safe to run against a live bank.
// ============================================================================

const fs = require('fs');
const path = require('path');
const ContentItem = require('../../models/ContentItem');
const Exam = require('../../models/Exam');
const { validateExamDepth } = require('./examDepth');
const { checkCaseQuality } = require('./qualityGate');
const { ALLOWED_SOURCES } = require('./references');
const bp = require('./blueprint');

const DIR = __dirname;

// Same discovery rule as import-deep-cases.js.
function sourceFiles() {
  const files = [];
  if (fs.existsSync(path.join(DIR, 'exemplar-deep-mdd.js'))) files.push('exemplar-deep-mdd.js');
  fs.readdirSync(DIR).filter((f) => /^deep-cases-batch-.*\.js$/.test(f)).sort().forEach((f) => files.push(f));
  return files;
}

function loadCases() {
  const byId = new Map();
  const loadErrors = [];
  sourceFiles().forEach((f) => {
    let cases = [];
    try {
      const full = path.join(DIR, f);
      delete require.cache[require.resolve(full)];
      const m = require(full);
      cases = m.CASES || m.GENERATED_CASES || [];
    } catch (e) { loadErrors.push({ file: f, error: e.message }); return; }
    cases.forEach((c) => { if (c && c.id && !byId.has(c.id)) byId.set(c.id, { file: f, c }); });
  });
  return { entries: [...byId.values()], loadErrors };
}

function checkCase(c) {
  const errors = [];
  const d = validateExamDepth(c, { categories: bp.CATEGORY_NAMES, allowedSources: ALLOWED_SOURCES });
  if (!d.ok) errors.push(...(d.errors || []));
  else {
    const q = checkCaseQuality(c);
    if (!q.ok) errors.push(...(q.errors || []).map((e) => 'quality: ' + e));
  }
  return errors;
}

async function getNcmhceExam() {
  return Exam.findOneAndUpdate(
    { key: 'ncmhce' },
    { $setOnInsert: { key: 'ncmhce', name: 'National Clinical Mental Health Counseling Examination', profession: 'counseling', board: 'NBCC', formatsSupported: ['case_sim'], status: 'live' } },
    { upsert: true, new: true }
  );
}

// write=false → preview only. ids (optional) limits a write to those cases.
async function importCases({ write = false, ids = null } = {}) {
  const exam = await getNcmhceExam();
  const { entries, loadErrors } = loadCases();
  const existing = new Set((await ContentItem.find({ examId: exam._id }).select('externalId').lean()).map((d) => d.externalId));

  const ready = []; const failed = [];
  entries.forEach(({ file, c }) => {
    if (existing.has(c.id)) return;
    const errors = checkCase(c);
    const row = { id: c.id, title: c.title, category: c.category, difficulty: c.difficulty, file, questions: (c.questions || []).length };
    if (errors.length) failed.push(Object.assign(row, { errors: errors.slice(0, 8) }));
    else ready.push(Object.assign(row, { _case: c }));
  });

  const wanted = Array.isArray(ids) ? new Set(ids.map(String)) : null;
  const inserted = [];
  if (write) {
    for (const r of ready) {
      if (wanted && !wanted.has(r.id)) continue;
      const c = r._case;
      // Insert-only: $setOnInsert with upsert never modifies an existing doc,
      // even if one appeared since the preview.
      const res = await ContentItem.updateOne(
        { examId: exam._id, externalId: c.id },
        { $setOnInsert: { examId: exam._id, format: 'case_sim', externalId: c.id, title: c.title, category: c.category, difficulty: c.difficulty, references: c.references || [], caseSim: c, status: 'sme_review' } },
        { upsert: true }
      );
      if (res.upsertedCount) inserted.push(c.id);
    }
  }

  return {
    written: write,
    filesScanned: sourceFiles().length,
    alreadyInBank: entries.filter(({ c }) => existing.has(c.id)).length,
    ready: ready.map(({ _case, ...r }) => r),
    failed,
    loadErrors,
    inserted,
  };
}

module.exports = { importCases, loadCases, sourceFiles };
