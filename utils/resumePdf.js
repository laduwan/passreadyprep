// Builds a clean, single-column résumé PDF with pdf-lib (already a dependency,
// used by routes/guide.js). Standard Helvetica only, so no font files ship.
// Text the standard fonts can't encode (emoji, some symbols) is replaced with
// '?' instead of crashing the render.
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

const PAGE_W = 612, PAGE_H = 792;          // US Letter, points
const MARGIN = 54;                          // 0.75 in
const BODY = 10.5, LINE = 14;
const INK = rgb(0.1, 0.1, 0.12), SOFT = rgb(0.35, 0.37, 0.4), RULE = rgb(0.75, 0.77, 0.8);

function makeSafe(font) {
  const cache = new Map();
  return (s) => Array.from(String(s == null ? '' : s).replace(/\r/g, '')).map((ch) => {
    if (ch === '\n' || ch === '\t') return ' ';
    if (cache.has(ch)) return cache.get(ch);
    let out = ch;
    try { font.widthOfTextAtSize(ch, 10); } catch (e) { out = '?'; }
    cache.set(ch, out);
    return out;
  }).join('');
}

function wrap(text, font, size, width) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let line = '';
  words.forEach((w) => {
    const test = line ? line + ' ' + w : w;
    if (font.widthOfTextAtSize(test, size) <= width) { line = test; return; }
    if (line) lines.push(line);
    // A single word wider than the column is hard-broken.
    while (font.widthOfTextAtSize(w, size) > width) {
      let i = w.length;
      while (i > 1 && font.widthOfTextAtSize(w.slice(0, i), size) > width) i--;
      lines.push(w.slice(0, i)); w = w.slice(i);
    }
    line = w;
  });
  if (line) lines.push(line);
  return lines;
}

// r: sanitized résumé fields (see routes/resume.js readResume)
async function buildResumePdf(r) {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const safe = makeSafe(font);
  pdf.setTitle(safe(r.name ? r.name + ' - Resume' : 'Resume'));
  pdf.setAuthor(safe(r.name || ''));

  let page = pdf.addPage([PAGE_W, PAGE_H]);
  let y = PAGE_H - MARGIN;
  const width = PAGE_W - MARGIN * 2;

  const ensure = (h) => { if (y - h < MARGIN) { page = pdf.addPage([PAGE_W, PAGE_H]); y = PAGE_H - MARGIN; } };
  const text = (s, opts = {}) => {
    const f = opts.bold ? bold : font, size = opts.size || BODY, x = MARGIN + (opts.indent || 0);
    wrap(safe(s), f, size, width - (opts.indent || 0)).forEach((ln, i) => {
      ensure(opts.lh || LINE);
      page.drawText(ln, { x: i && opts.hang ? x + opts.hang : x, y: y - size, size, font: f, color: opts.color || INK });
      y -= opts.lh || LINE;
    });
  };
  const bullet = (s) => {
    const lines = wrap(safe(s), font, BODY, width - 14);
    lines.forEach((ln, i) => {
      ensure(LINE);
      if (i === 0) page.drawText('-', { x: MARGIN + 2, y: y - BODY, size: BODY, font, color: INK });
      page.drawText(ln, { x: MARGIN + 14, y: y - BODY, size: BODY, font, color: INK });
      y -= LINE;
    });
  };
  const section = (title) => {
    ensure(34);
    y -= 10;
    page.drawText(safe(title.toUpperCase()), { x: MARGIN, y: y - 10, size: 10, font: bold, color: SOFT });
    y -= 15;
    page.drawLine({ start: { x: MARGIN, y }, end: { x: PAGE_W - MARGIN, y }, thickness: 0.6, color: RULE });
    y -= 7;
  };

  // Header
  text([r.name, r.credentials].filter(Boolean).join(', ') || 'Your Name', { bold: true, size: 20, lh: 26 });
  const contact = [r.location, r.email, r.phone, r.link].filter(Boolean).join('  |  ');
  if (contact) text(contact, { color: SOFT, size: 10 });

  if (r.summary) { section('Professional Summary'); text(r.summary); }
  if (r.strengths.length) { section('Clinical Strengths'); r.strengths.forEach(bullet); }
  if (r.licensure.length) { section('Licensure & Certification'); r.licensure.forEach(bullet); }

  if (r.experience.length) {
    section('Clinical & Professional Experience');
    r.experience.forEach((e, i) => {
      if (i) y -= 4;
      text([e.title, e.org].filter(Boolean).join(', '), { bold: true });
      const meta = [e.location, e.dates].filter(Boolean).join('  |  ');
      if (meta) text(meta, { color: SOFT, size: 9.5 });
      e.bullets.forEach(bullet);
    });
  }

  if (r.education.length) {
    section('Education');
    r.education.forEach((e) => {
      text([e.degree, e.school].filter(Boolean).join(', '), { bold: true });
      if (e.year) text(e.year, { color: SOFT, size: 9.5 });
    });
  }

  return Buffer.from(await pdf.save());
}

module.exports = { buildResumePdf };
