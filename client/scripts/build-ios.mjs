// Builds the web bundle and adds the vanilla pages + native shim for Capacitor iOS.
// Web `npm run build` is untouched; this only runs via `npm run build:ios`.
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const pub = path.resolve(root, '..', 'public');

const PAGES = ['register.html', 'forgot-password.html', 'reset-password.html', 'skills.html', 'exam.html'];
const NEVER = new Set(['checkout.html', 'book.html']);
const ASSET_EXT = /\.(js|css|json|png|jpe?g|gif|svg|webp|ico|mp3|mp4|woff2?|ttf|otf|webmanifest)$/i;
const SHIM_TAG = '<script src="/native-shim.js"></script>';

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
const queue = [...PAGES];
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

// Shim goes first in <head> of index.html and every copied HTML file.
fs.copyFileSync(path.join(root, 'native', 'native-shim.js'), path.join(dist, 'native-shim.js'));
const htmls = ['index.html', ...[...copied].filter((f) => f.endsWith('.html'))];
for (const rel of htmls) {
  const f = path.join(dist, rel);
  let html = fs.readFileSync(f, 'utf8');
  if (html.includes(SHIM_TAG)) continue;
  const next = html.replace(/<head[^>]*>/i, (m) => `${m}\n${SHIM_TAG}`);
  if (next === html) throw new Error(`No <head> in ${rel}`);
  fs.writeFileSync(f, next);
}

console.log('\nBundled into dist (besides the Vite output):');
for (const f of [...copied].sort()) console.log('  ' + f);
console.log('  native-shim.js');
