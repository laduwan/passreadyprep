require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const activity = require('./utils/activity');

const app = express();

// Allow the browser frontend to talk to this server, and read JSON bodies.
// The Stripe webhook needs the raw request body to verify its signature,
// so it must be registered BEFORE express.json() consumes the body.
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));
app.use('/api/payment/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());

// Watch every response and record 5xx failures as error events (see utils/activity).
app.use(activity.monitor);

// A simple heartbeat so you can confirm the server is alive.
app.get('/api/health', (req, res) =>
  res.json({ ok: true, service: 'passreadyprep', time: new Date().toISOString() })
);

// The front door (accounts + login) and the lockbox (saved progress).
app.use('/api/auth', require('./routes/auth'));
app.use('/api/payment', require('./routes/payment'));
app.use('/api/progress', require('./routes/progress'));
app.use('/api/content', require('./routes/content'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/admin/generate', require('./routes/adminGenerate'));
app.use('/api/debrief', require('./routes/debrief'));
app.use('/api/skills', require('./routes/skills'));
app.use('/api/intake', require('./routes/intake'));
app.use('/api/guide', require('./routes/guide'));

// ── Accessibility + translation widget injection ────────────────────
// Every HTML page gets the shared accessibility widget (a11y.css + a11y.js),
// the translation widget (translate.css + translate.js), and a "skip to main
// content" link, injected at serve time. This means the ~18 static pages and
// the React shell don't each need a manual <script> edit. Only HTML is touched
// — JS, CSS, images, data files, and the API pass through untouched via
// express.static / the API routers.
const A11Y_HEAD =
  '<link rel="stylesheet" href="/a11y.css">' +
  '<link rel="stylesheet" href="/translate.css">' +
  '<script src="/a11y.js" defer></script>' +
  '<script src="/translate.js" defer></script>';
const A11Y_SKIP = '<a href="#" class="a11y-skip-link" data-a11y-skip>Skip to main content</a>';

// PWA head tags, injected the same serve-time way as the a11y widget so every
// static page and the React shell advertise the web app manifest + register the
// service worker (needed to install as an app / package for Google Play as a TWA).
const PWA_HEAD =
  '<link rel="manifest" href="/manifest.webmanifest">' +
  '<meta name="theme-color" content="#1E3A5F">' +
  '<link rel="apple-touch-icon" href="/icons/icon-192.png">' +
  '<script>if("serviceWorker" in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js");});}</script>';

function injectA11y(html) {
  if (typeof html !== 'string') return html;
  if (html.indexOf('/a11y.js') !== -1) return html; // already present — don't double up
  let out = html;
  out = out.indexOf('</head>') !== -1 ? out.replace('</head>', A11Y_HEAD + PWA_HEAD + '</head>') : (A11Y_HEAD + PWA_HEAD + out);
  if (/<body[^>]*>/i.test(out)) out = out.replace(/(<body[^>]*>)/i, '$1' + A11Y_SKIP);
  return out;
}

function sendHtml(res, filePath) {
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) return res.status(404).type('txt').send('Not found');
    res.type('html').send(injectA11y(html));
  });
}

// Explicit page routes — must come BEFORE express.static so the landing page
// wins at / instead of public/index.html.
app.get('/', (_req, res) => sendHtml(res, path.join(__dirname, 'public', 'landing.html')));
app.get('/study', (_req, res) => sendHtml(res, path.join(__dirname, 'public', 'index.html')));
app.get('/skills', (_req, res) => sendHtml(res, path.join(__dirname, 'public', 'skills.html')));

// Digital Asset Links for the Android TWA (Google Play). express.static ignores
// dotfiles by default, so /.well-known/* would 404 and fall through to the SPA
// (returning HTML, not JSON) — serve this file explicitly and as JSON.
app.get('/.well-known/assetlinks.json', (_req, res) => {
  res.type('application/json');
  res.sendFile(path.join(__dirname, 'public', '.well-known', 'assetlinks.json'));
});

// Any other .html(.htm) request: read the file ourselves (client/dist first,
// then public — matching the static-serving priority below) so the widget is
// injected. Anything not found falls through to the handlers below.
app.get(/\.html?$/i, (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  let rel;
  try { rel = decodeURIComponent(req.path).replace(/^\/+/, ''); }
  catch (e) { return next(); }
  if (!rel || rel.indexOf('..') !== -1) return next(); // no path traversal
  const bases = [path.join(__dirname, 'client/dist'), path.join(__dirname, 'public')];
  let found = null;
  for (const base of bases) {
    const p = path.join(base, rel);
    try { if (p.startsWith(base) && fs.existsSync(p) && fs.statSync(p).isFile()) { found = p; break; } }
    catch (e) { /* keep looking */ }
  }
  if (!found) return next();
  return sendHtml(res, found);
});

// Serve the React SPA (built by Vite to client/dist/) and legacy static pages
// from /public. React app takes priority; /public has admin/review pages,
// standalone tools, data files, and a11y.css / a11y.js.
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.static('public'));

// SPA fallback — any non-API, non-file route serves the React app's index.html
// (with the accessibility widget injected).
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  const spaIndex = path.join(__dirname, 'client/dist/index.html');
  if (fs.existsSync(spaIndex)) return sendHtml(res, spaIndex);
  next();
});

// Final error handler — records thrown/next(err) errors, then responds 500.
app.use(activity.errorHandler);

const PORT = process.env.PORT || 4000;

async function start() {
  activity.installProcessHandlers();
  if (!process.env.MONGO_URI) {
    console.warn('MONGO_URI is not set — add it to your .env before using accounts for real.');
  } else {
    try {
      await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('MongoDB connection failed:', err.message);
    }
  }

  app.listen(PORT, () => console.log(`PassReady Prep API listening on port ${PORT}`));
}

start();
