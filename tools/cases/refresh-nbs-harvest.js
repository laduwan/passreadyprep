#!/usr/bin/env node
// ============================================================================
// refresh-nbs-harvest.js — rebuild the "Next Best Step" drill pool from the
// CURRENT published bank.
//
// The drill (routes/nbs.js) serves questions from cases flagged `nbsHarvest`.
// Those are retired duplicates (status 'draft'), and their questions froze at
// the moment they were retired — while their published counterparts kept
// getting repaired (rewrite-questions.js, rebalance-key-length.js,
// fix-distractors.js). Left alone, the drill drifts to older, lower-quality
// text than the bank students actually sit.
//
// For each flagged case this tool locates its published counterpart —
// by recorded lineage (`caseSim.harvestedFrom`, written by a previous run of
// this tool) or, failing that, by matching title + primary diagnosis — and
// copies the counterpart's CURRENT `caseSim.questions` and
// `caseSim.references` onto the harvest record. The harvest case keeps its
// own externalId, status and `nbsHarvest` flag; only the drilled content is
// refreshed. Before each write the previous questions/references are saved to
// the `nbsrefreshaudit` collection, so a refresh is reversible.
//
// Always DRY by default. Nothing is written unless you pass --apply.
//
//   node tools/cases/refresh-nbs-harvest.js                          (plan: all flagged cases)
//   node tools/cases/refresh-nbs-harvest.js --ids ncmhce-G139,ncmhce-G140  (plan a subset)
//   node tools/cases/refresh-nbs-harvest.js --apply                  (refresh them)
// MONGO_URI from env / .env.
// ============================================================================

require('dotenv').config();
const mongoose = require('mongoose');
const ContentItem = require('../../models/ContentItem');
const { caseToNbsItems } = require('../../utils/nbsItems');

const APPLY = process.argv.includes('--apply');
const idi = process.argv.indexOf('--ids');
const EXPLICIT = idi >= 0
  ? (process.argv[idi + 1] || '').split(',').map((s) => s.trim()).filter(Boolean)
  : null;

// Titles and diagnosis labels drift in punctuation and quoting between copies
// ("Adolescents/Adults" vs "Adolescents and Adults"), so compare on letters
// and digits only.
function norm(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

// "…, Combined" and "…, Combined Presentation" are the same diagnosis; accept
// a prefix either way, but never an empty one.
function dxCompatible(a, b) {
  const na = norm(a), nb = norm(b);
  if (!na || !nb) return false;
  return na === nb || na.startsWith(nb) || nb.startsWith(na);
}

// bank: [{ externalId, title, dx }] for every published case_sim.
// Returns { pub: externalId, how } or { error }.
function findCounterpart(draft, bank) {
  const lineage = draft.caseSim && draft.caseSim.harvestedFrom;
  if (lineage) {
    const hit = bank.find((b) => b.externalId === lineage);
    if (hit) return { pub: hit.externalId, how: 'lineage' };
    return { error: 'recorded counterpart ' + lineage + ' is not in the published bank' };
  }

  const title = norm((draft.caseSim && draft.caseSim.title) || draft.title);
  const dx = (draft.caseSim && draft.caseSim.primaryDiagnosis && draft.caseSim.primaryDiagnosis.name) || '';
  if (!title) return { error: 'draft has no title to match on' };

  let hits = bank.filter((b) => norm(b.title) === title);
  if (hits.length > 1) hits = hits.filter((b) => dxCompatible(b.dx, dx));
  if (hits.length === 1) {
    if (!dxCompatible(hits[0].dx, dx)) {
      return { error: 'title matches ' + hits[0].externalId + ' but diagnoses differ ("' + dx + '" vs "' + hits[0].dx + '")' };
    }
    return { pub: hits[0].externalId, how: 'title+dx' };
  }
  if (hits.length > 1) return { error: 'title+diagnosis matches ' + hits.length + ' published cases: ' + hits.map((b) => b.externalId).join(', ') };

  const dxHits = bank.filter((b) => dxCompatible(b.dx, dx));
  if (dxHits.length === 1) return { pub: dxHits[0].externalId, how: 'dx-only' };
  return { error: 'no published counterpart (0 title matches, ' + dxHits.length + ' diagnosis matches)' };
}

// The refreshed record: counterpart's current questions + references, with
// lineage recorded so the next refresh needs no fuzzy matching. Deep-copied so
// nothing shares references with the source doc.
function buildRefresh(draft, pub) {
  const clone = (v) => JSON.parse(JSON.stringify(v));
  const questions = clone((pub.caseSim && pub.caseSim.questions) || []);
  const references = clone((pub.caseSim && pub.caseSim.references) || []);
  const refreshed = {
    externalId: draft.externalId,
    category: draft.category,
    caseSim: { questions, references },
  };
  const before = caseToNbsItems(draft).length;
  const after = caseToNbsItems(refreshed).length;
  const oldQ = JSON.stringify(((draft.caseSim || {}).questions) || []);
  return {
    questions,
    references,
    itemsBefore: before,
    itemsAfter: after,
    changed: oldQ !== JSON.stringify(questions),
  };
}

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  const filter = EXPLICIT
    ? { format: 'case_sim', nbsHarvest: true, externalId: { $in: EXPLICIT } }
    : { format: 'case_sim', nbsHarvest: true };
  const drafts = await ContentItem.find(filter)
    .select('externalId title category status caseSim')
    .lean();
  if (!drafts.length) {
    console.log(EXPLICIT ? 'None of those ids are flagged nbsHarvest.' : 'No case is flagged nbsHarvest.');
    await mongoose.disconnect();
    return;
  }

  // Light pass over the published bank for matching; full counterpart docs are
  // fetched only for the ids that matched.
  const bank = (await ContentItem.find({ format: 'case_sim', status: 'published' })
    .select('externalId caseSim.title caseSim.primaryDiagnosis.name')
    .lean())
    .map((d) => ({
      externalId: d.externalId,
      title: (d.caseSim && d.caseSim.title) || '',
      dx: (d.caseSim && d.caseSim.primaryDiagnosis && d.caseSim.primaryDiagnosis.name) || '',
    }));

  const plan = [];
  const problems = [];
  for (const draft of drafts) {
    const m = findCounterpart(draft, bank);
    if (m.error) { problems.push(draft.externalId + ': ' + m.error); continue; }
    plan.push({ draft, pubId: m.pub, how: m.how });
  }

  const pubDocs = await ContentItem.find({ externalId: { $in: plan.map((p) => p.pubId) }, status: 'published' })
    .select('externalId caseSim')
    .lean();
  const pubById = {};
  pubDocs.forEach((d) => { pubById[d.externalId] = d; });

  let stale = 0, current = 0;
  for (const p of plan) {
    const pub = pubById[p.pubId];
    if (!pub) { problems.push(p.draft.externalId + ': counterpart ' + p.pubId + ' disappeared between passes'); continue; }
    p.r = buildRefresh(p.draft, pub);
    if (p.r.changed) stale += 1; else current += 1;
    console.log('  ' + p.draft.externalId + '  <-  ' + p.pubId + '  [' + p.how + ']  '
      + (p.r.changed ? 'STALE' : 'up to date') + '  drill items ' + p.r.itemsBefore + ' -> ' + p.r.itemsAfter
      + '/' + p.r.questions.length);
    if (p.r.changed && p.r.itemsAfter === 0) {
      problems.push(p.draft.externalId + ': refreshed questions yield 0 drill items — counterpart ' + p.pubId + ' needs repair first');
    }
  }

  console.log('\n=== ' + plan.length + ' matched (' + stale + ' stale, ' + current + ' already current), '
    + problems.length + ' problem(s) ===');
  if (problems.length) {
    problems.forEach((e) => console.log('  ! ' + e));
    console.log('\nAborting — resolve the problems above (nothing was written).');
    await mongoose.disconnect();
    process.exit(1);
  }

  const work = plan.filter((p) => p.r.changed);
  if (!work.length) {
    console.log('Every harvest case already matches its published counterpart. Nothing to do.');
    await mongoose.disconnect();
    return;
  }

  if (!APPLY) {
    console.log('DRY RUN. Re-run with --apply to refresh ' + work.length + ' case(s) from the published bank.');
    await mongoose.disconnect();
    return;
  }

  const runId = 'nbsrefresh-' + new Date().toISOString().replace(/[:.]/g, '-');
  const audit = mongoose.connection.collection('nbsrefreshaudit');
  let written = 0;
  for (const p of work) {
    // Pre-image first, so the old content survives the overwrite.
    await audit.insertOne({
      runId,
      ts: new Date(),
      externalId: p.draft.externalId,
      refreshedFrom: p.pubId,
      before: {
        questions: ((p.draft.caseSim || {}).questions) || [],
        references: ((p.draft.caseSim || {}).references) || [],
        harvestedFrom: (p.draft.caseSim || {}).harvestedFrom || null,
      },
    });
    const r = await ContentItem.updateOne(
      { externalId: p.draft.externalId, nbsHarvest: true },
      {
        $set: {
          'caseSim.questions': p.r.questions,
          'caseSim.references': p.r.references,
          'caseSim.harvestedFrom': p.pubId,
          'caseSim.harvestRefreshedAt': new Date(),
        },
      }
    );
    if (r.matchedCount === 0) { console.error(p.draft.externalId + ': not found on write — skipped'); continue; }

    // Verify: re-read and confirm the doc now converts exactly like the plan.
    const doc = await ContentItem.findOne({ externalId: p.draft.externalId })
      .select('externalId category caseSim').lean();
    const n = caseToNbsItems(doc).length;
    if (!Array.isArray(doc.caseSim.questions) || n !== p.r.itemsAfter) {
      console.error(p.draft.externalId + ': post-write check FAILED (' + n + ' items, expected ' + p.r.itemsAfter + ').'
        + ' Pre-image is in nbsrefreshaudit runId=' + runId);
      await mongoose.disconnect();
      process.exit(1);
    }
    written += 1;
    console.log('  ' + p.draft.externalId + ': refreshed from ' + p.pubId + ' and verified (' + n + ' drill items)');
  }

  console.log('\nRefreshed ' + written + '/' + work.length + ' case(s). Audit trail: nbsrefreshaudit runId=' + runId);
  console.log('The drill caches for 5 minutes, so /next-best-step.html picks this up shortly.');
  await mongoose.disconnect();
}

module.exports = { norm, dxCompatible, findCounterpart, buildRefresh };
if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
