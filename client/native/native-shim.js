/* PassReady Prep native shim (Capacitor iOS, local bundle).
 * No-op in a normal browser. Loaded FIRST in <head> of every bundled page by
 * scripts/build-ios.mjs so it runs before any page code calls fetch('/api/...'). */
(function () {
  var native = false;
  try {
    native = location.protocol === 'capacitor:' ||
      !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  } catch (e) {}
  if (!native) return;

  var ORIGIN = 'https://passreadyprep.com';
  window.PRP_NATIVE = true;

  // Relative API calls go to the live server (the bundle has no backend).
  var origFetch = window.fetch;
  if (typeof origFetch === 'function') {
    window.fetch = function (input, init) {
      if (typeof input === 'string' && input.indexOf('/api') === 0) {
        input = ORIGIN + input;
      }
      return origFetch.call(this, input, init);
    };
  }

  // visit-beacon.js uses sendBeacon, which bypasses fetch.
  if (navigator.sendBeacon) {
    var origBeacon = navigator.sendBeacon;
    navigator.sendBeacon = function (url, data) {
      if (typeof url === 'string' && url.indexOf('/api') === 0) url = ORIGIN + url;
      return origBeacon.call(navigator, url, data);
    };
  }

  // Pages that live only on the web are opened absolutely. iOS Capacitor cancels
  // top-level navigation to a non-app host and hands it to the system browser.
  var EXTERNAL = ['/checkout.html', '/book.html', '/policies.html', '/privacy.html',
                  '/landing.html', '/score-report.html', '/accessibility.html'];
  var FLAG = 'prp_checkout_opened';

  document.addEventListener('click', function (e) {
    var el = e.target;
    while (el && el.nodeType === 1 && el.tagName !== 'A') el = el.parentNode;
    if (!el || el.tagName !== 'A' || !el.getAttribute('href')) return;
    var u;
    try { u = new URL(el.getAttribute('href'), location.href); } catch (err) { return; }
    if (u.origin !== location.origin) return;
    if (EXTERNAL.indexOf(u.pathname) === -1) return;
    e.preventDefault();
    if (u.pathname === '/checkout.html') {
      try { sessionStorage.setItem(FLAG, '1'); } catch (err) {}
    }
    window.location.href = ORIGIN + u.pathname + u.search + u.hash;
  }, true);

  // Coming back from checkout: reload so the unlocked subscription state is picked up.
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState !== 'visible') return;
    var opened = false;
    try { opened = sessionStorage.getItem(FLAG) === '1'; } catch (err) {}
    if (!opened) return;
    try { sessionStorage.removeItem(FLAG); } catch (err) {}
    location.reload();
  });
})();
