// Starter blog drafts (data/blog-drafts/*.md), added on demand from
// Admin → Blog → "Add starter drafts" (POST /api/admin/blog/seed-drafts).
// They are always inserted as status 'draft' and never overwrite a post whose
// slug already exists, so deleting or editing one is safe.
//
// File format: a front-matter block, then the markdown body.
//   ---
//   title: ...
//   metaDescription: ...   (≤155 chars)
//   excerpt: ...
//   tags: a, b, c
//   ---
//   body…
//
// Placeholders like "[VERIFY: …]" mark exam facts Ke must confirm before
// publishing.
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'blog-drafts');

function parseDraft(slug, text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(text);
  if (!m) throw new Error(`blog draft ${slug}: missing front matter`);
  const meta = {};
  m[1].split(/\r?\n/).forEach(line => {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  });
  return {
    slug,
    title: meta.title,
    metaDescription: meta.metaDescription || '',
    excerpt: meta.excerpt || '',
    tags: (meta.tags || '').split(',').map(t => t.trim()).filter(Boolean),
    coverImageUrl: null,
    bodyMarkdown: m[2].trim() + '\n',
  };
}

function loadSeedDrafts() {
  return fs.readdirSync(DIR)
    .filter(f => f.endsWith('.md'))
    .sort()
    .map(f => parseDraft(f.replace(/\.md$/, ''), fs.readFileSync(path.join(DIR, f), 'utf8')));
}

module.exports = { loadSeedDrafts, parseDraft };
