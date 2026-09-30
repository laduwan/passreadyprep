// Builds the web bundle and adds the vanilla pages + native shim for Capacitor iOS.
// Web `npm run build` is untouched; this only runs via `npm run build:ios`.
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const pub = path.resolve(root, '..', 'public');

const PAGES = [
  'register.html', 'forgot-password.html', 'reset-password.html', 'skills.html', 'exam.html',
  // Study tools linked from the app's index.html.
  'guarantee.html', 'intake.html', 'flashcards.html', 'decision-trees.html', 'dsm.html',
];
const NEVER = new Set(['checkout.html', 'book.html']);
// Pages the shim opens on passreadyprep.com instead (keep in sync with EXTERNAL in native-shim.js).
const EXTERNAL = new Set(['checkout.html', 'book.html', 'policies.html', 'privacy.html',
  'landing.html', 'score-report.html', 'accessibility.html']);
const ASSET_EXT = /\.(js|css|json|pdf|png|jpe?g|gif|svg|webp|ico|mp3|mp4|woff2?|ttf|otf|webmanifest)$/i;
const SHIM_TAG = '<script src="/native-shim.js"></script>';

// Same tags server.js injectA11y() adds at serve time, minus the PWA manifest /
// service worker (not wanted inside the native app). Keep in sync with server.js.
const INJECTED = ['a11y.css', 'translate.css', 'a11y.js', 'translate.js', 'visit-beacon.js', 'announcement-modal.js'];
const INJECT_HEAD =
  '<link rel="stylesheet" href="/a11y.css">' +
  '<link rel="stylesheet" href="/translate.css">' +
  '<script src="/a11y.js" defer></script>' +
  '<script src="/translate.js" defer></script>' +
  '<script src="/visit-beacon.js" defer></script>' +
  '<script src="/announcement-modal.js" defer></script>';
const INJECT_SKIP = '<a href="#" class="a11y-skip-link" data-a11y-skip>Skip to main content</a>';

execSync('npx vite build', { cwd: root, stdio: 'inherit' });

// Every quoted local path in a file that resolves to an existing public asset.
function refsIn(text) {
  const out = new Set();
  for (const m of text.matchAll(/["'(]\s*\/?([A-Za-z0-9_\-./]+?)(?:[?#][^"')]*)?\s*["')]/g)) {
    const rel = m[1];
    if (!ASSET_EXT.test(rel) || rel.includes('..')) continue;
    if (NEVER.has(rel)) continue;
    const abs = path.join(pub, rel);
    if (fs.existsSync(abs) && fs.statSync(abs).isFile()) out.add(rel);
  }
  return out;
}

const copied = new Set();
// Also follow what the Vite-built index.html references from ../public.
const queue = [...PAGES, ...INJECTED, ...refsIn(fs.readFileSync(path.join(dist, 'index.html'), 'utf8'))];
while (queue.length) {
  const rel = queue.shift();
  if (copied.has(rel)) continue;
  const src = path.join(pub, rel);
  if (!fs.existsSync(src)) throw new Error(`Missing public/${rel}`);
  copied.add(rel);
  const dest = path.join(dist, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  if (/\.(html|js|css)$/i.test(rel)) {
    for (const r of refsIn(fs.readFileSync(src, 'utf8'))) if (!copied.has(r)) queue.push(r);
  }
}

// Shim goes first in <head> of index.html and every copied HTML file; the
// serve-time widgets go where server.js puts them.
fs.copyFileSync(path.join(root, 'native', 'native-shim.js'), path.join(dist, 'native-shim.js'));
const htmls = ['index.html', ...[...copied].filter((f) => f.endsWith('.html'))];
for (const rel of htmls) {
  const f = path.join(dist, rel);
  let html = fs.readFileSync(f, 'utf8');
  if (html.includes(SHIM_TAG)) continue;
  html = html.replace(/<head[^>]*>/i, (m) => `${m}\n${SHIM_TAG}`);
  if (!html.includes(SHIM_TAG)) throw new Error(`No <head> in ${rel}`);
  if (!html.includes('/a11y.js')) {
    html = html.includes('</head>') ? html.replace('</head>', INJECT_HEAD + '</head>') : INJECT_HEAD + html;
    html = html.replace(/(<body[^>]*>)/i, '$1' + INJECT_SKIP);
  }
  fs.writeFileSync(f, html);
}

// Any local page a bundled file links to must be bundled or opened on the web.
const missing = new Set();
for (const rel of ['index.html', ...copied]) {
  if (!/\.(html|js)$/i.test(rel)) continue;
  for (const m of fs.readFileSync(path.join(dist, rel), 'utf8').matchAll(/["'`]\/([A-Za-z0-9_\-/]+\.html)/g)) {
    const page = m[1];
    if (page === 'index.html' || copied.has(page) || EXTERNAL.has(page)) continue;
    missing.add(`${page} (linked from ${rel})`);
  }
}
if (missing.size) throw new Error('Unbundled pages linked from the app:\n  ' + [...missing].join('\n  '));

console.log('\nBundled into dist (besides the Vite output):');
for (const f of [...copied].sort()) console.log('  ' + f);
console.log('  native-shim.js');
