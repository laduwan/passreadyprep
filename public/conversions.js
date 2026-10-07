/**
 * PassReady Prep — GA4 / Google Ads conversion events.
 * Injected by server.js next to the Google tag, so it only loads when
 * GA_MEASUREMENT_ID is set. Mark sign_up and purchase as key events in GA4,
 * then import them into Google Ads as conversions.
 *
 *   sign_up  — register.html leaves a prp_signup_pending flag before it
 *              redirects; the next page reports it once.
 *   purchase — Stripe returns to the success page with ?session_id=. The
 *              amount is read from /api/payment/session/:id (Stripe's real
 *              charge, after promo codes); test purchases are skipped. Each
 *              session is reported once, and transaction_id lets GA4 dedupe.
 *
 * Fails silently and can never block or break the page.
 */
(function () {
  if (/^\/(admin|review)/i.test(location.pathname)) return;
  if (typeof window.gtag !== 'function') return;

  var SIGNUP_KEY = 'prp_signup_pending';
  var DONE_KEY = 'prp_tracked_purchases';
  var SIGNUP_MAX_AGE = 24 * 60 * 60 * 1000; // an old, stale flag is not a sign-up

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  function del(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } }

  var pending = get(SIGNUP_KEY);
  if (pending) {
    del(SIGNUP_KEY);
    if (Date.now() - Number(pending) < SIGNUP_MAX_AGE) gtag('event', 'sign_up', { method: 'email' });
  }

  var sid = new URLSearchParams(location.search).get('session_id');
  var token = get('prp_token');
  if (!sid || !/^cs_/.test(sid) || !token) return;

  var done = [];
  try { done = JSON.parse(get(DONE_KEY) || '[]'); } catch (e) { done = []; }
  if (!Array.isArray(done)) done = [];
  if (done.indexOf(sid) !== -1) return;

  fetch('/api/payment/session/' + encodeURIComponent(sid), {
    headers: { Authorization: 'Bearer ' + token },
  })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (s) {
      if (!s || !s.complete || s.test) return;
      gtag('event', 'purchase', {
        transaction_id: s.id,
        value: s.value,
        currency: s.currency,
        items: [{ item_id: s.tier, item_name: s.tier, price: s.value, quantity: 1 }],
      });
      done.push(sid);
      set(DONE_KEY, JSON.stringify(done.slice(-20)));
    })
    .catch(function () { /* analytics must never surface an error */ });
})();
