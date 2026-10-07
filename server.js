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
// CLIENT_ORIGIN may be a comma-separated list. When set, the iOS app's origin
// (capacitor://localhost) is always allowed too. Unset keeps the open '*' default.
const corsOrigin = process.env.CLIENT_ORIGIN
  ? [...process.env.CLIENT_ORIGIN.split(',').map((o) => o.trim()).filter(Boolean), 'capacitor://localhost']
  : '*';
app.use(cors({ origin: corsOrigin }));
app.use('/api/payment/webhook', express.raw({ type: 'application/json' }));
// Score-report check-ins carry the member's score letter as a data URI (~5 MB).
app.use('/api/payment/score-report', express.json({ limit: '8mb' }));
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
app.use('/api/activity', require('./routes/activity'));
app.use('/api/content', require('./routes/content'));
app.use('/api/book', require('./routes/book'));
app.use('/api/practice-exams', require('./routes/practiceExams'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/admin-users', require('./routes/adminUsers'));
app.use('/api/admin-subscriptions', require('./routes/adminSubscriptions'));
app.use('/api/admin/generate', require('./routes/adminGenerate'));
app.use('/api/admin/course',  require('./routes/adminCourse'));
app.use('/api/admin/broadcast', require('./routes/adminBroadcast'));
app.use('/api/admin/nce', require('./routes/adminNce'));
app.use('/api/ncmhce-cases',  require('./routes/ncmhceCases'));
app.use('/api/debrief', require('./routes/debrief'));
app.use('/api/skills', require('./routes/skills'));
app.use('/api/nbs', require('./routes/nbs'));
app.use('/api/core-tutor', require('./routes/coreTutor'));
app.use('/api/assess-next', require('./routes/assessNext'));
app.use('/api/intake', require('./routes/intake'));
app.use('/api/guide', require('./routes/guide'));
app.use('/api/suggestions', require('./routes/suggestions'));
app.use('/api/flashcard-progress', require('./routes/flashcardProgress'));
app.use('/api/study-history', require('./routes/studyHistory'));
app.use('/api/visits', require('./routes/visits'));
app.use('/api/announcements', require('./routes/announcements'));
app.use('/api/nce', require('./routes/nce'));
app.use('/api/admin/blog', require('./routes/adminBlog'));
app.use('/api/resume', require('./routes/resume'));

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

// Anonymous pageview beacon, injected the same serve-time way so every static
// page and the React shell report traffic without 20 hand-edited <script> tags.
// The script itself skips /admin* and /review* — those are operator screens,
// not visitor traffic.
const VISIT_HEAD = '<script src="/visit-beacon.js" defer></script>';

// Google tag, injected the same serve-time way. Off until GA_MEASUREMENT_ID
// (GA4, G-XXXXXXX) and/or GOOGLE_ADS_ID (Google Ads, AW-123456789) is set; skips
// the /admin* and /review* operator screens, like the visit beacon. Only
// well-formed IDs are ever written into the page.
// conversions.js rides along with it and reports sign_up / purchase events —
// to GA4 as events, and to Google Ads as conversions when the matching
// conversion label (from the Ads conversion action's tag setup) is set.
const GA_ID = /^G-[A-Z0-9]{4,20}$/.test(process.env.GA_MEASUREMENT_ID || '') ? process.env.GA_MEASUREMENT_ID : '';
const ADS_ID = /^AW-[0-9]{6,15}$/.test(process.env.GOOGLE_ADS_ID || '') ? process.env.GOOGLE_ADS_ID : '';
const adsLabel = (v) => (ADS_ID && /^[A-Za-z0-9_-]{4,40}$/.test(v || '') ? ADS_ID + '/' + v : '');
const ADS_SEND_TO = {
  signup: adsLabel(process.env.GOOGLE_ADS_SIGNUP_LABEL),
  purchase: adsLabel(process.env.GOOGLE_ADS_PURCHASE_LABEL),
};
const TAG_IDS = [GA_ID, ADS_ID].filter(Boolean);
const GA_HEAD = TAG_IDS.length
  ? '<script>(function(){var p=location.pathname;if(/^\\/(admin|review)/.test(p))return;' +
    'var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id=' + TAG_IDS[0] + '";' +
    'document.head.appendChild(s);window.dataLayer=window.dataLayer||[];' +
    'window.gtag=function(){dataLayer.push(arguments);};gtag("js",new Date());' +
    TAG_IDS.map((id) => 'gtag("config","' + id + '");').join('') +
    'window.PRP_ADS=' + JSON.stringify(ADS_SEND_TO) + ';})();</script>' +
    '<script src="/conversions.js" defer></script>'
  : '';

// Member announcement pop-up, injected the same serve-time way. The script
// only does anything when a member is signed in (prp_token present), and skips
// admin/review screens and the sign-in/checkout flow.
const ANNOUNCE_HEAD = '<script src="/announcement-modal.js" defer></script>';

// Signed-out banner: when another device signs in, API calls here return 401
// SESSION_INVALIDATED; this shows one clear "sign in again" banner instead of
// raw page errors. Not deferred — it wraps fetch before page scripts run.
const SESSION_HEAD = '<script src="/session-guard.js"></script>';

// PWA head tags, injected the same serve-time way as the a11y widget so every
// static page and the React shell advertise the web app manifest + register the
// service worker (needed to install as an app / package for Google Play as a TWA).
const PWA_HEAD =
  '<link rel="manifest" href="/manifest.webmanifest">' +
  '<meta name="theme-color" content="#0F172A">' +
  '<link rel="apple-touch-icon" href="/icons/icon-192.png">' +
  '<script>if("serviceWorker" in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js");});}</script>';

function injectA11y(html) {
  if (typeof html !== 'string') return html;
  if (html.indexOf('/a11y.js') !== -1) return html; // already present — don't double up
  let out = html;
  out = out.indexOf('</head>') !== -1 ? out.replace('</head>', SESSION_HEAD + A11Y_HEAD + PWA_HEAD + VISIT_HEAD + GA_HEAD + ANNOUNCE_HEAD + '</head>') : (SESSION_HEAD + A11Y_HEAD + PWA_HEAD + VISIT_HEAD + GA_HEAD + ANNOUNCE_HEAD + out);
  if (/<body[^>]*>/i.test(out)) out = out.replace(/(<body[^>]*>)/i, '$1' + A11Y_SKIP);
  return out;
}

function sendHtml(res, filePath) {
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) return res.status(404).type('txt').send('Not found');
    res.type('html').send(injectA11y(html));
  });
}

// Public blog (/blog, /blog/:slug) and the dynamic /sitemap.xml — server-rendered
// by routes/blog.js, sent through the same widget injection as every other page.
// Registered before express.static so /sitemap.xml wins over public/sitemap.xml.
app.use(require('./routes/blog')({ sendPage: (res, html) => res.type('html').send(injectA11y(html)) }));

// Explicit page routes — must come BEFORE express.static so the landing page
// wins at / instead of public/index.html.
app.get('/', (_req, res) => sendHtml(res, path.join(__dirname, 'public', 'landing.html')));
app.get('/study', (_req, res) => sendHtml(res, path.join(__dirname, 'public', 'index.html')));
app.get('/skills', (_req, res) => sendHtml(res, path.join(__dirname, 'public', 'skills.html')));
app.get('/book', (_req, res) => sendHtml(res, path.join(__dirname, 'public', 'book.html')));
// The printed Practice Exam 1 excerpt sends readers here to unlock the rest of the key.
app.get('/practice-exams/1', (_req, res) => sendHtml(res, path.join(__dirname, 'public', 'practice-exam-1.html')));

// Digital Asset Links for the Android TWA (Google Play). express.static ignores
// dotfiles by default, so /.well-known/* would 404 and fall through to the SPA
// (returning HTML, not JSON) — serve this file explicitly and as JSON.
app.get('/.well-known/assetlinks.json', (_req, res) => {
  res.type('application/json');
  res.sendFile(path.join(__dirname, 'public', '.well-known', 'assetlinks.json'));
});

// /manifest.json — the conventional path installability checkers and crawlers
// probe by default. The <link rel="manifest"> tag points at manifest.webmanifest
// (its real filename), so this alias serves the same file at the expected path
// instead of falling through to the SPA/404.
app.get('/manifest.json', (_req, res) => {
  res.type('application/manifest+json');
  res.sendFile(path.join(__dirname, 'public', 'manifest.webmanifest'));
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
app.use(express.static(path.join(__dirname, 'public')));

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

  // Proactive trial "ending soon" / "ended" emails (hourly, in-process).
  require('./jobs/trialReminders').start();

  // Weekly study digest — sends Monday, 12h check cycle.
  require('./jobs/weeklyDigest').start();

  // Biweekly item quality + IRR digest — sends every other Monday.
  require('./jobs/qualityDigest').start();

  // Weekly blog auto-draft — saves one DRAFT post on Mondays for admin review.
  require('./jobs/blogAutoDraft').start();

  app.listen(PORT, () => console.log(`PassReady Prep API listening on port ${PORT}`));
}

start();
