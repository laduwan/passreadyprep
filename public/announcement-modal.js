/**
 * PassReady Prep — member announcement pop-up.
 * Injected into every HTML page by server.js (alongside a11y.js / visit-beacon.js),
 * so the React shell and every static member page get it with no manual tag.
 *
 * Only runs for signed-in members (prp_token in localStorage). Asks
 * /api/announcements/active for anything posted from Admin → Broadcast that
 * this member hasn't closed yet, and shows them one at a time. Closing one
 * ("Got it", the ✕, Esc, or the button link) marks it dismissed on the server,
 * so each announcement shows once per member — on whichever device they open
 * next. Fails silently: it can never block or break the page.
 */
(function () {
  // Operator screens and the sign-in / payment flow are no place for a pop-up.
  var EXCLUDED = /^\/(admin|review|checkout|register|forgot-password|reset-password)/i;
  if (EXCLUDED.test(location.pathname || '/')) return;
  try { if (window.top !== window.self) return; } catch (e) { return; } // not inside admin iframes

  var token;
  try { token = localStorage.getItem('prp_token'); } catch (e) { token = null; }
  if (!token) return;

  var queue = [];
  var lastFocus = null;
  var root = null;

  function safeUrl(u) {
    return /^https:\/\/[^\s]+$/i.test(u) || (/^\/[^\s]*$/.test(u) && u.indexOf('//') !== 0);
  }

  function dismiss(id) {
    try {
      fetch('/api/announcements/' + encodeURIComponent(id) + '/dismiss', {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + token },
        keepalive: true,
      }).catch(function () {});
    } catch (e) {}
  }

  function injectStyles() {
    if (document.getElementById('prp-ann-style')) return;
    var css =
      '.prp-ann-backdrop{position:fixed;inset:0;z-index:2147483000;background:rgba(2,6,23,.72);' +
        'display:flex;align-items:center;justify-content:center;padding:16px}' +
      '.prp-ann-card{position:relative;width:100%;max-width:440px;max-height:85vh;overflow:auto;' +
        'background:#1E293B;border:1px solid rgba(51,65,85,.9);border-radius:16px;padding:24px 22px 20px;' +
        'box-shadow:0 20px 50px rgba(0,0,0,.5);color:#E2E8F0;' +
        'font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;line-height:1.55}' +
      '.prp-ann-eyebrow{font-size:11.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#34D399;margin:0 0 6px}' +
      '.prp-ann-title{font-size:19px;font-weight:700;color:#F8FAFC;margin:0 32px 10px 0}' +
      '.prp-ann-msg{font-size:15px;color:#CBD5E1;white-space:pre-line;margin:0 0 20px}' +
      '.prp-ann-actions{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}' +
      '.prp-ann-btn{font:inherit;font-size:14px;font-weight:600;cursor:pointer;border-radius:10px;padding:10px 16px;' +
        'border:1px solid #475569;background:transparent;color:#F8FAFC;text-decoration:none;display:inline-block}' +
      '.prp-ann-btn.primary{background:#10B981;border-color:#10B981;color:#04120c}' +
      '.prp-ann-btn:focus-visible,.prp-ann-x:focus-visible{outline:2px solid #34D399;outline-offset:2px}' +
      '.prp-ann-x{position:absolute;top:12px;right:12px;width:32px;height:32px;border-radius:8px;border:none;' +
        'background:transparent;color:#94A3B8;font-size:20px;line-height:1;cursor:pointer}' +
      '.prp-ann-x:hover{color:#F8FAFC;background:rgba(148,163,184,.12)}' +
      '.prp-ann-count{font-size:12px;color:#64748B;margin-right:auto;align-self:center}';
    var style = document.createElement('style');
    style.id = 'prp-ann-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function close() {
    if (root && root.parentNode) root.parentNode.removeChild(root);
    root = null;
    document.removeEventListener('keydown', onKey, true);
    if (queue.length) { show(queue.shift()); return; }
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} }
  }

  function onKey(e) {
    if (!root) return;
    if (e.key === 'Escape') { e.preventDefault(); root.querySelector('[data-dismiss]').click(); return; }
    if (e.key === 'Tab') { // keep focus inside the dialog
      var f = root.querySelectorAll('button, a[href]');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  function show(a) {
    injectStyles();
    var remaining = queue.length;

    root = document.createElement('div');
    root.className = 'prp-ann-backdrop';

    var card = document.createElement('div');
    card.className = 'prp-ann-card';
    card.setAttribute('role', 'dialog');
    card.setAttribute('aria-modal', 'true');
    card.setAttribute('aria-labelledby', 'prp-ann-title');
    card.setAttribute('aria-describedby', 'prp-ann-msg');

    var x = document.createElement('button');
    x.className = 'prp-ann-x';
    x.type = 'button';
    x.setAttribute('aria-label', 'Close announcement');
    x.textContent = '✕';

    var eyebrow = document.createElement('p');
    eyebrow.className = 'prp-ann-eyebrow';
    eyebrow.textContent = "What's new";

    var title = document.createElement('h2');
    title.className = 'prp-ann-title';
    title.id = 'prp-ann-title';
    title.textContent = a.title || '';

    var msg = document.createElement('p');
    msg.className = 'prp-ann-msg';
    msg.id = 'prp-ann-msg';
    msg.textContent = a.message || '';

    var actions = document.createElement('div');
    actions.className = 'prp-ann-actions';

    if (remaining > 0) {
      var count = document.createElement('span');
      count.className = 'prp-ann-count';
      count.textContent = remaining + ' more';
      actions.appendChild(count);
    }

    var ok = document.createElement('button');
    ok.type = 'button';
    ok.setAttribute('data-dismiss', '');
    ok.className = 'prp-ann-btn' + (a.ctaUrl ? '' : ' primary');
    ok.textContent = remaining > 0 ? 'Next' : 'Got it';
    actions.appendChild(ok);

    if (a.ctaUrl && a.ctaLabel && safeUrl(a.ctaUrl)) {
      var cta = document.createElement('a');
      cta.className = 'prp-ann-btn primary';
      cta.href = a.ctaUrl;
      cta.textContent = a.ctaLabel;
      if (/^https:/i.test(a.ctaUrl) && a.ctaUrl.indexOf(location.origin) !== 0) {
        cta.target = '_blank';
        cta.rel = 'noopener';
      }
      cta.addEventListener('click', function () { dismiss(a._id); close(); });
      actions.appendChild(cta);
    }

    function done() { dismiss(a._id); close(); }
    ok.addEventListener('click', done);
    x.addEventListener('click', done);

    card.appendChild(x);
    card.appendChild(eyebrow);
    card.appendChild(title);
    card.appendChild(msg);
    card.appendChild(actions);
    root.appendChild(card);
    document.body.appendChild(root);

    document.addEventListener('keydown', onKey, true);
    ok.focus();
  }

  function load() {
    fetch('/api/announcements/active', { headers: { Authorization: 'Bearer ' + token } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || !d.announcements || !d.announcements.length) return;
        queue = d.announcements.slice();
        lastFocus = document.activeElement;
        show(queue.shift());
      })
      .catch(function () { /* never surface an error */ });
  }

  // Give the page (and the React shell) a moment to paint first.
  var started = false;
  function start() { if (started) return; started = true; setTimeout(load, 800); }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
