// ============================================================================
// seedLib.js — shared loader + checker for the hand-authored NCE seed bank
// (tools/nce/seed/*.js). Seed questions are written directly (no API calls)
// and imported with tools/nce/import-nce.js.
//
// Each seed file exports an array of items:
//   { id: 'nce-s-eth-001', domain, cacrep, topic, difficulty,
//     stem, options: [{ id:'a'..'d', text, isCorrect, rationale }],
//     rationale, references: [{ source, detail }],
//     reviewNote?: 'what a reviewer should double-check' }
//
// Every item must pass utils/nceGate.js (the same gate the admin generator
// uses), plus seed-level checks: unique ids, ids carry the nce-s- prefix, and
// no near-duplicate stems anywhere in the seed bank.
// ============================================================================

const fs = require('fs');
const path = require('path');
const { checkNceItem } = require('../../utils/nceGate');
const { NCE_SOURCES } = require('../../utils/nceExam');

const SEED_DIR = path.join(__dirname, 'seed');

function seedFiles() {
  return fs.readdirSync(SEED_DIR).filter((f) => f.endsWith('.js')).sort().map((f) => path.join(SEED_DIR, f));
}

// Seed item → NceItem document shape.
function toDoc(it) {
  return {
    externalId: it.id,
    domain: it.domain,
    cacrep: it.cacrep,
    topic: it.topic,
    difficulty: it.difficulty || 'medium',
    stem: String(it.stem || '').trim(),
    options: (it.options || []).map((o) => ({ id: o.id, text: String(o.text || '').trim(), isCorrect: o.isCorrect === true, rationale: String(o.rationale || '').trim() })),
    rationale: String(it.rationale || '').trim(),
    references: (it.references || []).map((r, j) => ({ id: 'R' + (j + 1), source: r.source, detail: r.detail })),
    status: 'sme_review',
    reviewNote: it.reviewNote ? String(it.reviewNote).trim() : undefined,
    generatedBy: 'hand-authored seed',
  };
}

function loadSeed(files = seedFiles()) {
  const out = [];
  files.forEach((f) => {
    delete require.cache[require.resolve(f)];
    const arr = require(f);
    (Array.isArray(arr) ? arr : []).forEach((it) => out.push({ file: path.basename(f), item: it, doc: toDoc(it) }));
  });
  return out;
}

// Returns { ok, errors: [{file,id,errors}], keyDist, perDomain, count }
function checkSeed(entries, { allEntries = entries } = {}) {
  const problems = [];
  const seen = new Set();
  const corpus = [];
  // Duplicates are checked against the whole seed bank, earlier files first.
  allEntries.forEach((e) => { if (!entries.includes(e)) corpus.push({ externalId: e.doc.externalId, stem: e.doc.stem }); });
  const keyDist = { a: 0, b: 0, c: 0, d: 0 };
  const perDomain = {};
  entries.forEach((e) => {
    const d = e.doc;
    const errs = [];
    if (!/^nce-s-[a-z]+-\d{3}$/.test(d.externalId || '')) errs.push(`id "${d.externalId}" must look like nce-s-<domain>-001`);
    if (seen.has(d.externalId)) errs.push('duplicate id'); seen.add(d.externalId);
    if (!['easy', 'medium', 'hard'].includes(d.difficulty)) errs.push('difficulty must be easy|medium|hard');
    if (!d.cacrep) errs.push('cacrep tag is required');
    if (!d.topic) errs.push('topic is required');
    const v = checkNceItem(d, { corpusStems: corpus, allowedSources: NCE_SOURCES });
    errs.push(...v.errors);
    if (errs.length) problems.push({ file: e.file, id: d.externalId, errors: errs });
    corpus.push({ externalId: d.externalId, stem: d.stem });
    const k = (d.options.find((o) => o.isCorrect) || {}).id; if (keyDist[k] != null) keyDist[k]++;
    perDomain[d.domain] = (perDomain[d.domain] || 0) + 1;
  });
  return { ok: problems.length === 0, problems, keyDist, perDomain, count: entries.length };
}

module.exports = { SEED_DIR, seedFiles, loadSeed, checkSeed, toDoc };
