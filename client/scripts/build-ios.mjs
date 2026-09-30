// Builds the web bundle and adds the vanilla pages + native shim for Capacitor iOS.
// Web `npm run build` is untouched; this only runs via `npm run build:ios`.
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const pub = path.resolve(root, '..', 'public');

// Entry pages copied from ../public. Anything they reference (scripts, data,
// media) is followed recursively. The landing page is the app's start screen,
// like / on the web (native-shim.js sends / there).
const PAGES = [
  'landing.html',
  'register.html', 'forgot-password.html', 'reset-password.html', 'skills.html', 'exam.html',
  'guarantee.html', 'intake.html', 'flashcards.html', 'decision-trees.html', 'dsm.html',
  'timed-knowledge-exam.html', 'knowledge-drill.html', 'next-best-step.html',
  'core-attributes-quiz.html', 'theory.html', 'podcast.html', 'assess-next-case.html',
  'delete-account.html',
];
// Pages the shim opens on passreadyprep.com instead (keep in sync with EXTERNAL in native-shim.js).
const EXTERNAL = new Set(['checkout.html', 'book.html', 'policies.html', 'privacy.html',
  'score-report.html', 'accessibility.html']);
const ASSET_EXT = /\.(js|css|json|pdf|png|jpe?g|gif|svg|webp|ico|mp3|mp4|m4a|woff2?|ttf|otf|webmanifest)$/i;
const SHIM_TAG = '<script src="/native-shim.js"></script>';

// Same tags server.js injectA11y() adds at serve time, minus the PWA manifest /
// service worker (not wanted inside the native app). Keep in sync with server.js.
const INJECTED = ['session-guard.js', 'a11y.css', 'translate.css', 'a11y.js', 'translate.js', 'visit-beacon.js', 'announcement-modal.js'];
const INJECT_HEAD =
  '<script src="/session-guard.js"></script>' +
  '<link rel="stylesheet" href="/a11y.css">' +
  '<link rel="stylesheet" href="/translate.css">' +
  '<script src="/a11y.js" defer></script>' +
  '<script src="/translate.js" defer></script>' +
  '<script src="/visit-beacon.js" defer></script>' +
  '<script src="/announcement-modal.js" defer></script>';
const INJECT_SKIP = '<a href="#" class="a11y-skip-link" data-a11y-skip>Skip to main content</a>';

execSync('npx vite build', { cwd: root, stdio: 'inherit' });

// The study page: on the web /study serves public/index.html (server.js), not
// client/index.html. In the app every extension-less path (/study) loads
// index.html, so it must be the same page the website shows.
fs.copyFileSync(path.join(pub, 'index.html'), path.join(dist, 'index.html'));

// Every quoted local path in a file that resolves to an existing public asset.
function refsIn(text) {
  const out = new Set();
  for (const m of text.matchAll(/["'(]\s*\/?([A-Za-z0-9_\-./]+?)(?:[?#][^"')]*)?\s*["')]/g)) {
    const rel = m[1];
    if (!ASSET_EXT.test(rel) || rel.includes('..')) continue;
    const abs = path.join(pub, rel);
    if (fs.existsSync(abs) && fs.statSync(abs).isFile()) out.add(rel);
  }
  return out;
}

const htmlIn = (dir) => fs.readdirSync(dir).filter((f) => f.endsWith('.html'));

// Partner-portal pages and host redirect rules come along from client/public but
// are not part of the app; nothing in it links to them.
for (const f of fs.readdirSync(dist)) {
  if (/^partner-.*\.html$/.test(f) || f === '_redirects') fs.rmSync(path.join(dist, f));
}

// Pages Vite already put in dist (client/index.html + client/public/*.html) are
// the versions the web server serves first, so they are kept, not overwritten.
const scanned = new Set();
const copied = new Set();
const queue = [...htmlIn(dist), ...PAGES, ...INJECTED];
while (queue.length) {
  const rel = queue.shift();
  if (scanned.has(rel)) continue;
  scanned.add(rel);
  const dest = path.join(dist, rel);
  if (!fs.existsSync(dest)) {
    const src = path.join(pub, rel);
    if (!fs.existsSync(src)) throw new Error(`Missing public/${rel}`);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    copied.add(rel);
  }
  if (/\.(html|js|css)$/i.test(rel)) {
    for (const r of refsIn(fs.readFileSync(dest, 'utf8'))) if (!scanned.has(r)) queue.push(r);
  }
}

// Shim goes first in <head> of every HTML file in dist; the serve-time widgets
// go where server.js puts them.
fs.copyFileSync(path.join(root, 'native', 'native-shim.js'), path.join(dist, 'native-shim.js'));
for (const rel of htmlIn(dist)) {
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
for (const rel of scanned) {
  if (!/\.(html|js)$/i.test(rel)) continue;
  for (const m of fs.readFileSync(path.join(dist, rel), 'utf8').matchAll(/["'`]\/([A-Za-z0-9_\-/]+\.html)/g)) {
    const page = m[1];
    if (EXTERNAL.has(page) || fs.existsSync(path.join(dist, page))) continue;
    missing.add(`${page} (linked from ${rel})`);
  }
}
if (missing.size) throw new Error('Unbundled pages linked from the app:\n  ' + [...missing].join('\n  '));

// App icon: the website's graduation cap (public/icons), redrawn at the 1024px
// Apple needs (native/AppIcon.svg is the source). Applied once `cap add ios` exists.
const iconSet = path.join(root, 'ios', 'App', 'App', 'Assets.xcassets', 'AppIcon.appiconset');
if (fs.existsSync(iconSet)) {
  fs.copyFileSync(path.join(root, 'native', 'AppIcon-1024.png'), path.join(iconSet, 'AppIcon-512@2x.png'));
  console.log('\nApp icon updated in ios/App.');
}
// Launch screen: same cap on the site's navy (native/Splash.svg is the source).
const splashSet = path.join(root, 'ios', 'App', 'App', 'Assets.xcassets', 'Splash.imageset');
if (fs.existsSync(splashSet)) {
  for (const f of ['splash-2732x2732.png', 'splash-2732x2732-1.png', 'splash-2732x2732-2.png']) {
    fs.copyFileSync(path.join(root, 'native', 'Splash-2732.png'), path.join(splashSet, f));
  }
  console.log('Launch screen updated in ios/App.');
}

console.log('\nCopied into dist from ../public:');
for (const f of [...copied].sort()) console.log('  ' + f);
console.log('  native-shim.js');
