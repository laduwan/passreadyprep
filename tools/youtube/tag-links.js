// Rewrites every bare https://passreadyprep.com link in the YouTube upload
// sheets to a tagged link carrying that video's own campaign name, so the
// admin Visits → Campaigns table can show each video's visitors.
//   case sheets   (Case: ncmhce-D241:mini)        → campaign d241-mini
//   full parts    (Case: ncmhce-D106:full-part1)  → campaign d106-part1
//   practice      (Case: ncmhce-G036:q1)          → campaign g036-q1, medium short
//   strategy      (01-format-2026-sheet.txt)      → campaign format-2026
// Safe to re-run: only bare links are rewritten, tagged ones are left alone.
// Usage: node tools/youtube/tag-links.js            (from the repo folder)
const fs = require('fs');
const path = require('path');
const root = process.argv[2] || __dirname;
const BARE = /https:\/\/passreadyprep\.com(?![\w/.?#-])/g;
const report = [];
for (const sub of ['sheets', 'strategy']) {
  const dir = path.join(root, sub);
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith('.txt')).sort()) {
    const file = path.join(dir, f);
    const text = fs.readFileSync(file, 'utf8');
    const m = text.match(/^Case:\s*ncmhce-([A-Z]\d+):(\S+)/m);
    let campaign, medium;
    if (m) {
      const code = m[1].toLowerCase();
      const kind = m[2].toLowerCase().replace(/^full-/, '');
      campaign = `${code}-${kind}`;
      medium = /^q\d/.test(kind) ? 'short' : 'video';
    } else {
      campaign = f.replace(/\.txt$/, '').replace(/^\d+-/, '').replace(/-sheet$/, '').toLowerCase();
      medium = 'video';
    }
    if (!/^[a-z0-9-]+$/.test(campaign)) throw new Error(`odd campaign "${campaign}" from ${f}`);
    const url = `https://www.passreadyprep.com/?utm_source=youtube&utm_medium=${medium}&utm_campaign=${campaign}`;
    const n = (text.match(BARE) || []).length;
    fs.writeFileSync(file, text.replace(BARE, url));
    report.push({ file: `${sub}/${f}`, campaign, medium, links: n });
  }
}
const camps = report.map((r) => r.campaign);
const dupes = camps.filter((c, i) => camps.indexOf(c) !== i);
console.log(`sheets: ${report.length}, links tagged: ${report.reduce((s, r) => s + r.links, 0)}`);
console.log(`by medium: video ${report.filter((r) => r.medium === 'video').length}, short ${report.filter((r) => r.medium === 'short').length}`);
console.log(`sheets with no link: ${report.filter((r) => !r.links).map((r) => r.file).join(', ') || 'none'}`);
console.log(`duplicate campaigns: ${dupes.length ? dupes.join(', ') : 'none'}`);
console.log('sample:', report.slice(0, 3).concat(report.slice(-3)).map((r) => `${r.file} → ${r.campaign} (${r.medium}, ${r.links})`).join('\n        '));
