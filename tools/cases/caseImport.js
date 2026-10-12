// ============================================================================
// caseImport.js — load hand-authored deep cases into MongoDB from the admin
// panel (GET/POST /api/admin/generate/import-cases). Expects an open mongoose
// connection. No API calls.
//
// Two banks, each from its own batch files:
//   current NCMHCE (exam 'ncmhce')      ← tools/cases/deep-cases-batch-*.js (+ exemplar)
//   2027 NCMHCE   (exam 'ncmhce-2027')  ← tools/cases/deep-cases-2027-batch-*.js
//
// INSERT-ONLY. A case whose externalId already exists in its bank is never
// touched — its content, status and reviewer edits stay as they are. Only
// cases not in their bank yet are offered, and each is checked on its own
// against that bank's gates (current: depth + item quality, as in
// import-deep-cases.js; 2027: 2027 schema + 2027 depth + item quality). A
// failing case is reported and skipped; it never blocks the others. New cases
// land as `sme_review` — nothing is published.
//
// Every row carries `key` = '<examKey>|<externalId>' because D-ids are only
// unique within an exam. POST ids may be keys, or bare ids (current bank).
// ============================================================================

const fs = require('fs');
const path = require('path');
const ContentItem = require('../../models/ContentItem');
const Exam = require('../../models/Exam');
const { validateCase } = require('./caseSchema');
const { validateExamDepth } = require('./examDepth');
const { checkCaseQuality } = require('./qualityGate');
const { ALLOWED_SOURCES } = require('./references');
const bp = require('./blueprint');

const DIR = __dirname;

const BANKS = [
  {
    examKey: 'ncmhce', label: 'Current NCMHCE',
    files: () => {
      const out = [];
      if (fs.existsSync(path.join(DIR, 'exemplar-deep-mdd.js'))) out.push('exemplar-deep-mdd.js');
      fs.readdirSync(DIR).filter((f) => /^deep-cases-batch-.*\.js$/.test(f)).sort().forEach((f) => out.push(f));
      return out;
    },
    examDefaults: { name: 'National Clinical Mental Health Counseling Examination', status: 'live' },
    check: (c) => {
      const d = validateExamDepth(c, { categories: bp.CATEGORY_NAMES, allowedSources: ALLOWED_SOURCES });
      if (!d.ok) return d.errors || [];
      const q = checkCaseQuality(c);
      return q.ok ? [] : (q.errors || []).map((e) => 'quality: ' + e);
    },
  },
  {
    examKey: 'ncmhce-2027', label: '2027 NCMHCE',
    files: () => fs.readdirSync(DIR).filter((f) => /^deep-cases-2027-batch-.*\.js$/.test(f)).sort(),
    examDefaults: { name: 'NCMHCE (2027 specification)', status: 'coming_soon' },
    check: (c) => {
      const errors = [];
      const v = validateCase(c, { spec: '2027', categories: bp.CATEGORY_NAMES, allowedSources: ALLOWED_SOURCES, strictItemQuality: true });
      errors.push(...(v.errors || []).map((e) => 'schema: ' + e));
      const d = validateExamDepth(c, { spec: '2027' });
      errors.push(...(d.errors || []).map((e) => 'depth: ' + e));
      const q = checkCaseQuality(c);
      if (!q.ok) errors.push(...(q.errors || []).map((e) => 'quality: ' + e));
      return errors;
    },
  },
];

// Kept for callers of the original single-bank API.
function sourceFiles() { return BANKS[0].files(); }

function loadBank(bank) {
  const byId = new Map();
  const loadErrors = [];
  bank.files().forEach((f) => {
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

function loadCases() { return loadBank(BANKS[0]); }

async function getExam(bank, { create }) {
  const found = await Exam.findOne({ key: bank.examKey });
  if (found || !create) return found;
  const source = await Exam.findOne({ key: 'ncmhce' }).lean();
  return Exam.findOneAndUpdate(
    { key: bank.examKey },
    { $setOnInsert: Object.assign({ key: bank.examKey, profession: (source && source.profession) || 'counseling', board: 'NBCC', formatsSupported: ['case_sim'] }, bank.examDefaults) },
    { upsert: true, new: true }
  );
}

// write=false → preview only. ids (optional) limits a write to those cases
// ('<examKey>|<id>' keys, or bare ids meaning the current bank).
async function importCases({ write = false, ids = null } = {}) {
  const wanted = Array.isArray(ids) ? new Set(ids.map((x) => (String(x).includes('|') ? String(x) : 'ncmhce|' + x))) : null;
  const ready = []; const failed = []; const inserted = []; const loadErrors = [];
  let alreadyInBank = 0; let filesScanned = 0;

  for (const bank of BANKS) {
    const files = bank.files();
    filesScanned += files.length;
    if (!files.length) continue;
    const { entries, loadErrors: le } = loadBank(bank);
    loadErrors.push(...le);
    const exam = await getExam(bank, { create: write });
    const existing = exam
      ? new Set((await ContentItem.find({ examId: exam._id }).select('externalId').lean()).map((d) => d.externalId))
      : new Set();

    const bankReady = [];
    entries.forEach(({ file, c }) => {
      if (existing.has(c.id)) { alreadyInBank += 1; return; }
      const row = {
        key: bank.examKey + '|' + c.id, bank: bank.examKey, bankLabel: bank.label,
        id: c.id, title: c.title, category: c.category, difficulty: c.difficulty, file, questions: (c.questions || []).length,
      };
      const errors = bank.check(c);
      if (errors.length) failed.push(Object.assign(row, { errors: errors.slice(0, 8) }));
      else { ready.push(row); bankReady.push({ row, c }); }
    });

    if (write && exam) {
      for (const { row, c } of bankReady) {
        if (wanted && !wanted.has(row.key)) continue;
        // Insert-only: $setOnInsert with upsert never modifies an existing doc,
        // even if one appeared since the preview.
        const res = await ContentItem.updateOne(
          { examId: exam._id, externalId: c.id },
          { $setOnInsert: { examId: exam._id, format: 'case_sim', externalId: c.id, title: c.title, category: c.category, difficulty: c.difficulty, population: c.population || undefined, references: c.references || [], caseSim: c, status: 'sme_review' } },
          { upsert: true }
        );
        if (res.upsertedCount) inserted.push(row.key);
      }
    }
  }

  return { written: write, filesScanned, alreadyInBank, ready, failed, loadErrors, inserted };
}

module.exports = { importCases, loadCases, sourceFiles, BANKS };
