#!/usr/bin/env node
// ============================================================================
// export-nce.js — a printable hard copy of the NCE question bank (MongoDB).
//
//   node tools/banks/export-nce.js                 # items in review (default)
//   node tools/banks/export-nce.js --status=published
//   node tools/banks/export-nce.js --status=all    # everything except retired
//   node tools/banks/export-nce.js --from-seed     # the hand-authored seed files
//                                                  # (tools/nce/seed), no database
//   node tools/banks/export-nce.js --from-seed --files=ethics-2,intake-2 --out=nce-question-bank-batch2
//        # only some seed files, written to docs/<out>.{html,md}
//
// Emits docs/nce-question-bank.html (print to PDF from any browser) and
// docs/nce-question-bank.md. Needs MONGO_URI (reads .env) unless --from-seed.
// Read-only.
// The same copy is one click away in Admin → NCE Questions → Print for review.
// ============================================================================

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const NceItem = require('../../models/NceItem');
const { renderHtml, renderMarkdown, exportFilter } = require('../../utils/nceExport');

const arg = (process.argv.find((a) => a.startsWith('--status=')) || '').split('=')[1];
const status = ['sme_review', 'published', 'all'].includes(arg) ? arg : 'sme_review';

const opt = (name) => (process.argv.find((a) => a.startsWith(`--${name}=`)) || '').split('=')[1] || '';
const OUT = (opt('out') || 'nce-question-bank').replace(/[^a-zA-Z0-9_-]/g, '');

function write(items, label) {
  const root = path.resolve(__dirname, '..', '..');
  fs.mkdirSync(path.join(root, 'docs'), { recursive: true });
  fs.writeFileSync(path.join(root, `docs/${OUT}.html`), renderHtml(items, { status: label }));
  fs.writeFileSync(path.join(root, `docs/${OUT}.md`), renderMarkdown(items, { status: label }));
  console.log(`wrote docs/${OUT}.html and .md — ${items.length} items (${label})`);
}

(async () => {
  if (process.argv.includes('--from-seed')) {
    const { loadSeed, seedFiles } = require('../nce/seedLib');
    const only = opt('files').split(',').map((f) => f.trim().replace(/\.js$/, '')).filter(Boolean);
    const files = only.length ? seedFiles().filter((f) => only.includes(path.basename(f, '.js'))) : seedFiles();
    if (only.length && files.length !== only.length) { console.error('unknown seed file in --files'); process.exit(1); }
    write(loadSeed(files).map((e) => e.doc), 'sme_review');
    return;
  }
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  write(await NceItem.find(exportFilter(status)).lean(), status);
  await mongoose.disconnect();
})().catch((e) => { console.error(e); process.exit(1); });
