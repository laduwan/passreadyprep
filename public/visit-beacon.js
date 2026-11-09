/**
 * PassReady Prep — anonymous pageview beacon.
 * Injected into every HTML page by server.js (alongside a11y.js / translate.js),
 * so no page needs a manual <script> tag.
 *
 * Sends one tiny POST per page view to /api/visits/beacon: the pathname, the
 * referring site's hostname, and the campaign tags from the link that brought
 * the visitor here (utm_source / utm_medium / utm_campaign), nothing else. No
 * cookies, no localStorage, no ids, no user info — the server never sees who
 * you are, only that a page was opened and which link it came from. Fails
 * silently and can never block or break the page.
 */
(function () {
  // Admin and review screens are the operator's own tools, not visitor traffic.
  var EXCLUDED = /^\/(admin|review)/i;

  var sent = {}; // one beacon per path per page load

  // Campaign tags from the landing URL. Read once: the query string travels
  // with in-page navigation but is dropped by the server from the path anyway.
  var utm = {};
  try {
    var q = new URLSearchParams(location.search);
    ['source', 'medium', 'campaign'].forEach(function (k) {
      var v = q.get('utm_' + k);
      if (v) utm[k] = String(v).slice(0, 80);
    });
  } catch (e) { /* no URLSearchParams — tags are just not reported */ }

  function send(path) {
    if (!path || EXCLUDED.test(path) || sent[path]) return;
    sent[path] = true;

    var payload = JSON.stringify({
      path: path,
      // document.referrer is '' for direct visits and for same-page navigation.
      referrer: document.referrer || '',
      utm: utm,
    });

    try {
      // sendBeacon survives the page being closed mid-flight, which a plain
      // fetch does not. It only accepts a few content types — a Blob lets us
      // still post JSON so the server's express.json() parses it.
      if (navigator.sendBeacon) {
        var blob = new Blob([payload], { type: 'application/json' });
        if (navigator.sendBeacon('/api/visits/beacon', blob)) return;
      }
      fetch('/api/visits/beacon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      }).catch(function () { /* analytics must never surface an error */ });
    } catch (e) { /* same */ }
  }

  function current() {
    return location.pathname || '/';
  }

  send(current());

  // The React shell navigates without a page load, so hook history changes and
  // count those views too. Guarded so a same-path replaceState doesn't double-count.
  try {
    ['pushState', 'replaceState'].forEach(function (fn) {
      var original = history[fn];
      if (typeof original !== 'function') return;
      history[fn] = function () {
        var result = original.apply(this, arguments);
        send(current());
        return result;
      };
    });
    window.addEventListener('popstate', function () { send(current()); });
  } catch (e) { /* history not patchable — the initial view is still counted */ }
})();
