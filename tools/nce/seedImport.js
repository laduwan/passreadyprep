// ============================================================================
// seedImport.js — load the hand-authored NCE seed bank into MongoDB (no API).
// Shared by the CLI (tools/nce/import-nce.js) and the admin button
// (POST /api/admin/nce/import-seed). Expects an open mongoose connection.
//
// Inserts seed items that aren't in the bank yet, as `sme_review`. With
// `update`, also refreshes the text of seed items still in review. Published
// and retired items are never touched. A seed item that near-duplicates a
// non-seed item already in the bank (e.g. a generator item) is skipped.
// ============================================================================

const NceItem = require('../../models/NceItem');
const { findDuplicate } = require('../../utils/nceGate');
const { loadSeed, checkSeed } = require('./seedLib');

async function importSeed({ write = false, update = false } = {}) {
  const entries = loadSeed();
  const check = checkSeed(entries);
  if (!check.ok) return { ok: false, problems: check.problems, seedCount: entries.length };

  const existing = await NceItem.find({}).select('externalId status stem').lean();
  const byId = new Map(existing.map((d) => [d.externalId, d]));
  const others = existing.filter((d) => !d.externalId.startsWith('nce-s-')).map((d) => ({ externalId: d.externalId, stem: d.stem }));

  const insert = []; const refresh = []; const unchanged = []; const duplicates = [];
  entries.forEach(({ doc }) => {
    const cur = byId.get(doc.externalId);
    if (!cur) {
      const dup = findDuplicate(doc.stem, others);
      if (dup) duplicates.push({ id: doc.externalId, against: dup.against }); else insert.push(doc);
    } else if (update && cur.status === 'sme_review') refresh.push(doc);
    else unchanged.push(doc.externalId);
  });

  if (write) {
    if (insert.length) await NceItem.insertMany(insert, { ordered: false });
    for (const doc of refresh) {
      const { status, ...fields } = doc;
      // A note resolved in the seed file must also clear in the database.
      const update = { $set: {} };
      Object.entries(fields).forEach(([k, v]) => { if (v !== undefined) update.$set[k] = v; });
      if (!fields.reviewNote) update.$unset = { reviewNote: 1 };
      await NceItem.updateOne({ externalId: doc.externalId, status: 'sme_review' }, update);
    }
  }
  return {
    ok: true, written: write, seedCount: entries.length,
    inserted: insert.length, refreshed: refresh.length, unchanged: unchanged.length, duplicates,
    perDomain: check.perDomain,
  };
}

module.exports = { importSeed };
