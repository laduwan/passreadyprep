// PassReady Prep — Service Worker
// Cache strategy:
//   - API calls (/api/*): always network, never cache
//   - Everything else: cache-first with network fallback
//
// Update CACHE_NAME when assets change to bust old cache.

const CACHE_NAME = 'prp-v1';

const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// ── Install: pre-cache core assets ──────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: remove stale caches ───────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first for assets, pass-through for API ─────────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Never intercept API calls — always go to the network.
  if (url.pathname.startsWith('/api/')) return;

  // For everything else: serve from cache if available, otherwise fetch and
  // cache the response for next time.
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        if (
          !response ||
          response.status !== 200 ||
          response.type !== 'basic'
        ) {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      });
    })
  );
});
