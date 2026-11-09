// Keeps the links in the YouTube upload sheets consistent and tracked.
// For every sheet in sheets/ and strategy/:
//   1. Bare https://passreadyprep.com links get that video's campaign tag.
//   2. The Gumroad link for The Complete NCMHCE Study Guide becomes the site's
//      own study-guide page (sold through Stripe), tagged the same way.
//   3. A bare https://www.passreadyprep.com/study-guide.html link gets tagged.
//   4. "🆓 Free NCMHCE study guide" points at the free sample PDF on Drive; a
//      sheet that has the 📖 guide line but no 🆓 line gets one above it.
// Campaign names come from the sheet:
//   case sheets   (Case: ncmhce-D241:mini)        → d241-mini
//   full parts    (Case: ncmhce-D106:full-part1)  → d106-part1
//   practice      (Case: ncmhce-G036:q1)          → g036-q1, medium short
//   strategy      (01-format-2026-sheet.txt)      → format-2026
// Safe to re-run: links already in their final form are left alone.
// Usage: node tools/youtube/tag-links.js            (from the repo folder)
const fs = require('fs');
const path = require('path');

const root = process.argv[2] || __dirname;
const SITE = 'https://www.passreadyprep.com';
const FREE_SAMPLE = 'https://drive.google.com/file/d/1YSecA9d39DRVKdrfpHOKO1jw2Ipfq9ZT/view?usp=sharing';
const BARE_HOME = /https:\/\/passreadyprep\.com(?![\w/.?#-])/g;
const GUMROAD = /https:\/\/kekethelpc\.gumroad\.com\/l\/frktch(?![\w/?#-])/g;
const BARE_GUIDE = /https:\/\/(?:www\.)?passreadyprep\.com\/study-guide\.html(?![\w?#-])/g;
const FREE_LINE = /^🆓 Free NCMHCE study guide:.*$/m;
const GUIDE_LINE = /^📖 The Complete NCMHCE Study Guide.*$/m;

function campaignFor(file, text) {
  const m = text.match(/^Case:\s*ncmhce-([A-Z]\d+):(\S+)/m);
  if (m) {
    const kind = m[2].toLowerCase().replace(/^full-/, '');
    return { campaign: `${m[1].toLowerCase()}-${kind}`, medium: /^q\d/.test(kind) ? 'short' : 'video' };
  }
  return { campaign: path.basename(file, '.txt').replace(/^\d+-/, '').replace(/-sheet$/, '').toLowerCase(), medium: 'video' };
}

const totals = { home: 0, gumroad: 0, guide: 0, freeAdded: 0, freeFixed: 0, sheets: 0 };
const seen = new Map();
for (const sub of ['sheets', 'strategy']) {
  const dir = path.join(root, sub);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith('.txt')).sort()) {
    const file = path.join(dir, f);
    const before = fs.readFileSync(file, 'utf8');
    const { campaign, medium } = campaignFor(f, before);
    if (!/^[a-z0-9-]+$/.test(campaign)) throw new Error(`odd campaign "${campaign}" from ${f}`);
    if (seen.has(campaign)) throw new Error(`campaign "${campaign}" used by both ${seen.get(campaign)} and ${f}`);
    seen.set(campaign, f);
    const tag = `utm_source=youtube&utm_medium=${medium}&utm_campaign=${campaign}`;
    let text = before;
    const count = (re) => (text.match(re) || []).length;
    totals.home += count(BARE_HOME);
    text = text.replace(BARE_HOME, `${SITE}/?${tag}`);
    totals.gumroad += count(GUMROAD);
    text = text.replace(GUMROAD, `${SITE}/study-guide.html?${tag}`);
    totals.guide += count(BARE_GUIDE);
    text = text.replace(BARE_GUIDE, `${SITE}/study-guide.html?${tag}`);
    const freeLine = `🆓 Free NCMHCE study guide: ${FREE_SAMPLE}`;
    const existing = text.match(FREE_LINE);
    if (existing) {
      if (existing[0] !== freeLine) { text = text.replace(FREE_LINE, freeLine); totals.freeFixed++; }
    } else if (GUIDE_LINE.test(text)) {
      text = text.replace(GUIDE_LINE, (line) => `${freeLine}\n${line}`);
      totals.freeAdded++;
    }
    if (text !== before) { fs.writeFileSync(file, text); totals.sheets++; }
  }
}
console.log(`sheets checked: ${seen.size}, changed: ${totals.sheets}`);
console.log(`homepage links tagged: ${totals.home}, Gumroad links moved to the site: ${totals.gumroad}, guide links tagged: ${totals.guide}`);
console.log(`free-sample line added: ${totals.freeAdded}, pointed at the sample: ${totals.freeFixed}`);
