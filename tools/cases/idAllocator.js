#!/usr/bin/env node
// ============================================================================
// idAllocator.js — one shared, batch-aware ID allocator for NCMHCE cases.
//
// WHY THIS EXISTS
// The deep-case batch files (deep-cases-batch-*.js) hardcode fixed D-ids
// (D101..D189). Every minter that computed "next id" from the live DB alone —
// generate-deep.js, adminGenerate.js, add-ethics-deep.js — was blind to any
// batch id not yet imported, so it would hand out an id a batch file already
// owns (e.g. D168 = Substance) and a later import would silently clobber one of
// the two. This module reserves BOTH the DB ids AND the file-hardcoded ids, so
// allocation always lands above everything that exists anywhere. One place,
// one rule.
//
// Files are TEXT-scanned (not require()'d) so this has zero side effects even
// though some neighbouring files open DB connections at load time.
//
// API
//   fileReservedIds()                       -> Set of ncmhce-* ids hardcoded in the batch files
//   allocate(existingIds, count, opts)      -> [id, ...]  (count collision-free ids)
//   next(existingIds, opts)                 -> id         (convenience for count = 1)
//
//   existingIds : iterable of externalIds currently in the DB
//   opts.prefix : 'D' (default) | 'G' | 'M' | ...
//   opts.floor  : starting number floor (default 100)
//   opts.pad    : zero-pad width (default 0 = none; e.g. 3 for G031)
//   opts.reserveFiles : scan the batch files too (default true)
// ============================================================================

const fs = require('fs');
const path = require('path');

// Every ncmhce-* id hardcoded in a deep-case source file, imported or not.
function fileReservedIds() {
  const ids = new Set();
  let files;
  try { files = fs.readdirSync(__dirname); } catch (e) { return ids; }
  const isDataFile = (f) => /^deep-cases-batch-.*\.js$/.test(f) || /^exemplar-deep-.*\.js$/.test(f);
  const re = /\bid:\s*['"](ncmhce-[A-Za-z0-9]+)['"]/g;
  for (const f of files) {
    if (!isDataFile(f)) continue;
    let text;
    try { text = fs.readFileSync(path.join(__dirname, f), 'utf8'); } catch (e) { continue; }
    let m;
    while ((m = re.exec(text))) ids.add(m[1]);
  }
  return ids;
}

// Allocate `count` collision-free ids for a prefix, above the max of every id
// taken anywhere — the ids you pass in (from the DB) UNION the ids hardcoded in
// the batch files. Skips any specific id already taken, so gaps never get reused.
function allocate(existingIds, count, opts) {
  opts = opts || {};
  const prefix = opts.prefix || 'D';
  const floor = opts.floor != null ? opts.floor : 100;
  const pad = opts.pad || 0;

  const taken = new Set(existingIds || []);
  if (opts.reserveFiles !== false) fileReservedIds().forEach((id) => taken.add(id));

  const make = (n) => 'ncmhce-' + prefix + (pad ? String(n).padStart(pad, '0') : String(n));
  const re = new RegExp('^ncmhce-' + prefix + '0*(\\d+)$');
  let max = floor;
  taken.forEach((id) => { const m = re.exec(id || ''); if (m) max = Math.max(max, parseInt(m[1], 10)); });

  const out = [];
  const n = count || 1;
  for (let i = 0; i < n; i++) {
    do { max += 1; } while (taken.has(make(max)));
    const id = make(max);
    taken.add(id);
    out.push(id);
  }
  return out;
}

function next(existingIds, opts) { return allocate(existingIds, 1, opts)[0]; }

module.exports = { fileReservedIds, allocate, next };
