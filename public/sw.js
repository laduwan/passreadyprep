// Minimal service worker for PassReady Prep.
// Purpose: satisfy PWA installability (Chrome/PWABuilder require a fetch
// handler). Network-first passthrough with a cache fallback when offline.
const CACHE = 'passready-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
