/* ============================================================================
   PassReady Prep — Translation widget (translate.js)
   Loaded site-wide (injected by server.js). Adds a floating language selector
   (bottom-right) that translates the current page using Google's Website
   Translate element, and remembers the choice across pages via the `googtrans`
   cookie so it persists as the visitor moves through the multi-page site.
   Vanilla JS, no dependencies, degrades gracefully if the script can't load.
   ============================================================================ */
(function () {
  'use strict';
  if (window.__prpTranslateLoaded) return;
  window.__prpTranslateLoaded = true;

  // Source language of the site + the languages offered. Spanish is first
  // after the original because it's the most requested for this audience.
  var PAGE_LANG = 'en';
  var LANGS = [
    { code: 'en',    label: 'English (original)' },
    { code: 'es',    label: 'Español' },
    { code: 'fr',    label: 'Français' },
    { code: 'pt',    label: 'Português' },
    { code: 'ht',    label: 'Kreyòl ayisyen' },
    { code: 'zh-CN', label: '中文 (简体)' },
    { code: 'vi',    label: 'Tiếng Việt' },
    { code: 'tl',    label: 'Tagalog' },
    { code: 'ar',    label: 'العربية' },
    { code: 'ru',    label: 'Русский' },
    { code: 'ko',    label: '한국어' }
  ];
  var INCLUDED = LANGS.filter(function (l) { return l.code !== 'en'; })
    .map(function (l) { return l.code; }).join(',');

  // ---- cookie helpers -------------------------------------------------------
  function setCookie(name, value) {
    try {
      document.cookie = name + '=' + value + ';path=/;max-age=31536000';
      // also set on the registrable domain so it carries across any subdomains
      var host = location.hostname.replace(/^www\./, '');
      if (host.indexOf('.') !== -1) document.cookie = name + '=' + value + ';path=/;domain=.' + host + ';max-age=31536000';
    } catch (e) {}
  }
  function eraseCookie(name) {
    try {
      document.cookie = name + '=;path=/;max-age=0';
      var host = location.hostname.replace(/^www\./, '');
      if (host.indexOf('.') !== -1) document.cookie = name + '=;path=/;domain=.' + host + ';max-age=0';
    } catch (e) {}
  }
  function currentLang() {
    var m = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]+\/([^;]+)/);
    return m ? decodeURIComponent(m[1]) : 'en';
  }

  // ---- apply a language -----------------------------------------------------
  function setLang(lang) {
    if (!lang || lang === 'en') {
      eraseCookie('googtrans');
      location.reload(); // reloading clears Google's in-page translation
      return;
    }
    setCookie('googtrans', '/' + PAGE_LANG + '/' + lang);
    var combo = document.querySelector('.goog-te-combo');
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event('change'));
    } else {
      // element not ready yet — the cookie will be honoured on reload
      location.reload();
    }
  }

  // ---- build our control ----------------------------------------------------
  var select;
  function buildControl() {
    var box = document.createElement('div');
    box.className = 'prp-tr notranslate';
    box.setAttribute('translate', 'no');
    box.id = 'prp-translate';

    box.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/>' +
      '<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' +
      '<label for="prp-tr-select">Choose a language</label>';

    select = document.createElement('select');
    select.id = 'prp-tr-select';
    select.className = 'notranslate';
    LANGS.forEach(function (l) {
      var o = document.createElement('option');
      o.value = l.code; o.textContent = l.label;
      select.appendChild(o);
    });
    select.value = currentLang();
    select.addEventListener('change', function () { setLang(select.value); });
    box.appendChild(select);

    var attr = document.createElement('span');
    attr.className = 'prp-tr-attr';
    attr.textContent = 'via Google';
    box.appendChild(attr);

    document.body.appendChild(box);
  }

  // ---- load the Google element ---------------------------------------------
  function loadGoogle() {
    var host = document.createElement('div');
    host.id = 'google_translate_element';
    document.body.appendChild(host);

    window.googleTranslateElementInit = function () {
      try {
        new window.google.translate.TranslateElement({
          pageLanguage: PAGE_LANG,
          includedLanguages: INCLUDED,
          autoDisplay: false
        }, 'google_translate_element');
      } catch (e) {}
      // once ready, mirror any cookie-driven language into our select
      setTimeout(function () { if (select) select.value = currentLang(); }, 800);
    };

    var s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true;
    s.onerror = function () {
      // translation unavailable — hide the control rather than show a dead one
      var box = document.getElementById('prp-translate');
      if (box) box.setAttribute('data-unavailable', '1');
    };
    document.body.appendChild(s);
  }

  // ---- boot -----------------------------------------------------------------
  function init() { buildControl(); loadGoogle(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
