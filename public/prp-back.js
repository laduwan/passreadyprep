/* Back control for pages that are a dead end without browser chrome.
 *
 * The iOS and Android apps run the site without a toolbar, so a page reached
 * from somewhere else needs its own way back. Mark the link in the HTML with
 * a sensible fallback target:
 *
 *   <a class="backlink" data-prp-back href="/landing.html">&larr; Back</a>
 *
 * The href in the markup is what works with JavaScript off. This script only
 * improves it: when the referring page is one of ours, back goes there
 * instead, so "Back" returns where the visitor actually came from.
 */
(function () {
  var links = document.querySelectorAll('[data-prp-back]');
  if (!links.length) return;

  var from = '';
  try {
    // Same-origin referrers only: never bounce a visitor off to another site,
    // and never loop back to the page they are already on.
    if (document.referrer && new URL(document.referrer).origin === location.origin) {
      var u = new URL(document.referrer);
      if (u.pathname + u.search !== location.pathname + location.search) from = u.pathname + u.search + u.hash;
    }
  } catch (e) { from = ''; }

  for (var i = 0; i < links.length; i++) {
    if (from) links[i].setAttribute('href', from);
    links[i].addEventListener('click', function (e) {
      // With real history behind us, go back so the previous page is restored
      // with its scroll position and form state rather than reloaded.
      if (from && history.length > 1) { e.preventDefault(); history.back(); }
    });
  }
})();
