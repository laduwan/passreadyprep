// Server-side rendering for the public blog (/blog, /blog/:slug).
//
// Markdown → HTML goes through `marked`, then `sanitize-html` with an explicit
// allow-list, so nothing an editor types (raw <script>, on* handlers,
// javascript: links, iframes, styles) reaches the page. The admin Preview
// button calls the same renderMarkdown(), so what Ke previews is exactly what
// the public page will show.
//
// Page chrome (CSS variables, header, footer, .btn / .feat / .guar / .eyebrow)
// is copied from public/landing.html so blog pages look native. If the landing
// page's header/footer markup changes, mirror it here.
const { marked } = require('marked');
const sanitizeHtml = require('sanitize-html');

const SITE = 'https://www.passreadyprep.com';
const OG_IMAGE = SITE + '/og.png';

const SANITIZE = {
  allowedTags: [
    'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'br', 'hr', 'blockquote', 'pre', 'code',
    'ul', 'ol', 'li', 'strong', 'em', 'b', 'i', 'del', 's', 'a', 'img',
    'table', 'thead', 'tbody', 'tr', 'th', 'td', 'sup', 'sub',
  ],
  allowedAttributes: {
    a: ['href', 'title', 'rel', 'target'],
    img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
    th: ['align'], td: ['align'],
    code: ['class'],
  },
  allowedClasses: { code: [/^language-[a-z0-9-]+$/] },
  allowedSchemes: ['http', 'https', 'mailto'],
  allowedSchemesByTag: { img: ['http', 'https'] },
  allowProtocolRelative: false,
  transformTags: {
    // A markdown "# Heading" would compete with the page's own <h1> title.
    h1: 'h2',
    a: (tagName, attribs) => {
      const href = attribs.href || '';
      const external = /^https?:\/\//i.test(href) && !/^https?:\/\/(www\.)?passreadyprep\.com(\/|$)/i.test(href);
      const out = { href };
      if (attribs.title) out.title = attribs.title;
      if (external) { out.target = '_blank'; out.rel = 'noopener noreferrer'; }
      return { tagName: 'a', attribs: out };
    },
    img: (tagName, attribs) => ({ tagName: 'img', attribs: Object.assign({}, attribs, { loading: 'lazy' }) }),
  },
};

function renderMarkdown(md) {
  const raw = marked.parse(String(md || ''), { gfm: true, breaks: false, async: false });
  return sanitizeHtml(raw, SANITIZE);
}

function esc(str) {
  return String(str == null ? '' : str).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// JSON-LD goes inside <script>; escape "<" so a title can't close the tag.
function jsonLd(obj) {
  return '<script type="application/ld+json">' + JSON.stringify(obj).replace(/</g, '\\u003c') + '</script>';
}

// Only https:// URLs or site-relative /paths are allowed as a cover image.
function safeImageUrl(url) {
  const u = String(url || '').trim();
  if (/^https:\/\/[^\s"'<>]+$/i.test(u)) return u;
  if (/^\/[^\s"'<>\/][^\s"'<>]*$/.test(u)) return u;
  return null;
}

function absUrl(url) {
  return url && url.startsWith('/') ? SITE + url : url;
}

function fmtDate(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

const BRAND_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>';

// ── Styles: landing.html's variables, header, buttons, cards, footer ──────
// plus a small set of article-typography rules built from the same tokens.
const STYLE = `
  :root{
    --slate-900:#0F172A; --slate-800:#1E293B; --slate-700:#334155; --slate-600:#475569;
    --slate-500:#64748B; --slate-400:#94A3B8; --slate-300:#CBD5E1; --slate-200:#E2E8F0; --white:#F8FAFC;
    --emerald:#10B981; --emerald-400:#34D399;
    --blue-400:#60A5FA; --blue:#3B82F6;
    --amber-400:#FBBF24; --amber:#F59E0B;
    --red-400:#F87171; --red:#EF4444;
    --purple-400:#A78BFA; --purple:#8B5CF6;
    --sans:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    --r-xl:16px; --r-lg:12px; --r-md:10px;
    --card:rgba(30,41,59,.55); --card-border:rgba(51,65,85,.6);
  }
  *{box-sizing:border-box}
  html{-webkit-text-size-adjust:100%; scroll-behavior:smooth}
  @media (prefers-reduced-motion:reduce){ html{scroll-behavior:auto} }
  body{
    margin:0; min-height:100vh;
    background:linear-gradient(160deg,#0F172A 0%,#1E293B 50%,#0F172A 100%); background-attachment:fixed;
    color:var(--slate-200); font-family:var(--sans); font-size:16px; line-height:1.6;
  }
  a{color:var(--emerald-400)}
  .wrap{max-width:1040px; margin:0 auto; padding:0 20px}

  header.site{position:sticky; top:0; z-index:20; backdrop-filter:blur(10px);
    background:rgba(15,23,42,.72); border-bottom:1px solid rgba(51,65,85,.4)}
  .nav{display:flex; align-items:center; justify-content:space-between; gap:12px; padding:13px 0; max-width:1040px; margin:0 auto; padding-left:20px; padding-right:20px}
  .brand-wrap{display:flex; align-items:center; gap:11px; text-decoration:none; color:inherit}
  .brand-chip{width:38px; height:38px; border-radius:11px; background:rgba(16,185,129,.16); display:grid; place-items:center; flex:0 0 auto}
  .brand-chip svg{width:21px; height:21px; color:var(--emerald-400)}
  .brand{font-weight:700; font-size:18px; color:var(--white); letter-spacing:-.01em; line-height:1.1}
  .brand .prep{color:var(--emerald-400)}
  .brand small{display:block; font-weight:600; font-size:11px; color:var(--emerald-400); letter-spacing:.02em; margin-top:1px}
  .nav-links{display:flex; align-items:center; gap:22px}
  .nav-links a.navlink{color:var(--slate-300); text-decoration:none; font-weight:600; font-size:14.5px}
  .nav-links a.navlink:hover{color:var(--white)}
  @media (max-width:680px){ .nav-links a.navlink{display:none} }

  .btn{display:inline-flex; align-items:center; justify-content:center; gap:8px; cursor:pointer; font:inherit; font-weight:700;
    background:var(--emerald); color:#04261C; border:none; border-radius:var(--r-md); padding:12px 20px; font-size:15px; text-decoration:none; transition:background .15s, transform .12s}
  .btn:hover{background:var(--emerald-400); transform:translateY(-1px)}
  .btn.lg{padding:15px 28px; font-size:16px}
  .btn.ghost{background:transparent; color:var(--slate-200); border:1px solid var(--card-border)}
  .btn.ghost:hover{background:rgba(51,65,85,.4); color:var(--white)}

  .eyebrow{display:inline-flex; align-items:center; gap:8px; font-size:12px; font-weight:700; letter-spacing:.06em; text-transform:uppercase;
    color:var(--emerald-400); background:rgba(16,185,129,.14); border:1px solid rgba(16,185,129,.3); padding:6px 13px; border-radius:999px}
  .sec-head{max-width:620px; margin:0 auto 34px; text-align:center}
  .sec-head h1{font-size:clamp(28px,4.6vw,40px); color:var(--white); font-weight:800; letter-spacing:-.02em; line-height:1.15; margin:14px 0 10px}
  .sec-head p{color:var(--slate-400); font-size:16.5px; margin:0}
  .band{padding:60px 0}

  .feat-grid{display:grid; gap:16px; grid-template-columns:1fr}
  @media (min-width:640px){ .feat-grid{grid-template-columns:1fr 1fr} }
  .feat{background:var(--card); border:1px solid var(--card-border); border-radius:var(--r-xl); padding:22px 22px; transition:border-color .15s, transform .12s}
  .feat:hover{border-color:rgba(16,185,129,.45); transform:translateY(-2px)}
  .feat h2{font-size:17px; color:var(--white); font-weight:700; margin:0 0 7px; letter-spacing:-.01em}
  .feat h2 a{color:inherit; text-decoration:none}
  .feat p{color:var(--slate-400); font-size:14.5px; line-height:1.55; margin:0}
  .feat .meta{color:var(--slate-500); font-size:13px; margin:0 0 8px}
  .feat img{display:block; width:100%; height:auto; border-radius:var(--r-lg); margin-bottom:14px}

  .guar{background:linear-gradient(135deg,rgba(16,185,129,.14),rgba(59,130,246,.06));
    border:1px solid rgba(16,185,129,.32); border-radius:var(--r-xl); padding:40px 34px; text-align:center}
  .guar h2{font-size:clamp(24px,4vw,30px); color:var(--white); letter-spacing:-.02em; margin:0 0 6px}
  .guar p{color:var(--slate-300); max-width:600px; margin:0 auto 22px; font-size:16px}
  .hero-cta{display:flex; gap:12px; flex-wrap:wrap; justify-content:center}

  .crumbs{font-size:13.5px; color:var(--slate-500); margin:0 0 18px}
  .crumbs a{color:var(--slate-300); text-decoration:none}
  .crumbs a:hover{color:var(--emerald-400)}
  .article{max-width:720px; margin:0 auto}
  .article h1{font-size:clamp(30px,5vw,44px); line-height:1.12; letter-spacing:-.025em; color:var(--white); font-weight:800; margin:14px 0 12px}
  .article .meta{color:var(--slate-400); font-size:14px; margin:0 0 26px}
  .article .cover{display:block; width:100%; height:auto; border-radius:var(--r-xl); border:1px solid var(--card-border); margin:0 0 28px}
  .prose{color:var(--slate-300); font-size:17px; line-height:1.7}
  .prose h2{font-size:clamp(22px,3.6vw,28px); color:var(--white); letter-spacing:-.02em; line-height:1.2; margin:38px 0 12px}
  .prose h3{font-size:19px; color:var(--white); margin:28px 0 8px}
  .prose h4,.prose h5,.prose h6{font-size:16px; color:var(--slate-200); margin:22px 0 6px}
  .prose p{margin:0 0 18px}
  .prose ul,.prose ol{margin:0 0 18px; padding-left:24px}
  .prose li{margin:6px 0}
  .prose strong{color:var(--slate-200)}
  .prose blockquote{margin:0 0 18px; padding:14px 18px; background:var(--card); border-left:3px solid var(--emerald); border-radius:var(--r-md); color:var(--slate-300)}
  .prose code{background:rgba(51,65,85,.5); border-radius:6px; padding:1px 6px; font-size:.92em}
  .prose pre{background:rgba(15,23,42,.6); border:1px solid var(--card-border); border-radius:var(--r-lg); padding:14px; overflow-x:auto}
  .prose pre code{background:none; padding:0}
  .prose img{max-width:100%; height:auto; border-radius:var(--r-lg)}
  .prose hr{border:none; border-top:1px solid var(--card-border); margin:30px 0}
  .prose table{width:100%; border-collapse:collapse; margin:0 0 18px; font-size:15px; display:block; overflow-x:auto}
  .prose th,.prose td{border-bottom:1px solid var(--card-border); padding:8px 10px; text-align:left}
  .prose th{color:var(--slate-200)}
  .pager{display:flex; justify-content:space-between; gap:12px; margin-top:28px; flex-wrap:wrap}
  .empty{color:var(--slate-400); text-align:center}

  footer.site{border-top:1px solid rgba(51,65,85,.4); margin-top:24px; padding:36px 0 44px}
  .foot{display:grid; gap:26px; grid-template-columns:1fr}
  @media (min-width:720px){ .foot{grid-template-columns:1.4fr 1fr 1fr; gap:30px} }
  .foot-brand .brand{margin-top:10px}
  .foot-brand p{color:var(--slate-500); font-size:13.5px; margin:12px 0 0; max-width:300px; line-height:1.55}
  .foot-col h4{font-size:12px; letter-spacing:.06em; text-transform:uppercase; color:var(--slate-400); margin:0 0 12px; font-weight:700}
  .foot-col a{display:block; color:var(--slate-300); text-decoration:none; font-size:14.5px; margin:8px 0}
  .foot-col a:hover{color:var(--emerald-400)}
  .foot-legal{border-top:1px solid rgba(51,65,85,.4); margin-top:28px; padding-top:20px;
    display:flex; flex-wrap:wrap; gap:8px 16px; align-items:center; justify-content:space-between; color:var(--slate-500); font-size:13px}
  .foot-legal .prov{color:var(--slate-400)}
`;

// Same header as public/landing.html; the in-page anchors point back to /.
const HEADER = `<header class="site">
  <div class="nav">
    <a class="brand-wrap" href="/" aria-label="PassReady Prep home">
      <span class="brand-chip" aria-hidden="true">${BRAND_SVG}</span>
      <span class="brand">PassReady <span class="prep">Prep</span><small>NCMHCE clinical simulations</small></span>
    </a>
    <nav class="nav-links">
      <a class="navlink" href="/#features">Features</a>
      <a class="navlink" href="/#how">How it works</a>
      <a class="navlink" href="/#pricing">Pricing</a>
      <a class="navlink" href="/guarantee.html">Guarantee</a>
      <a class="navlink" href="/study-guide.html">Study guide</a>
      <a class="btn" href="/study">Start studying</a>
    </nav>
  </div>
</header>`;

// Same footer as public/landing.html (including its Blog link).
const FOOTER = `<footer class="site">
  <div class="wrap">
    <div class="foot">
      <div class="foot-brand">
        <a class="brand-wrap" href="/" aria-label="PassReady Prep home">
          <span class="brand-chip" aria-hidden="true">${BRAND_SVG}</span>
          <span class="brand">PassReady <span class="prep">Prep</span></span>
        </a>
        <p>NCMHCE practice cases and clinical simulations for the clinical mental health counseling licensure exam — showing you when you're ready to sit, backed by a guarantee.</p>
      </div>
      <div class="foot-col">
        <h4>Study</h4>
        <a href="/study">Case simulations</a>
        <a href="/exam.html">Timed mock exam</a>
        <a href="/timed-knowledge-exam.html">Timed knowledge exam</a>
        <a href="/knowledge-drill.html">Knowledge drill</a>
        <a href="/next-best-step.html">Next best step</a>
        <a href="/assess-next.html">What to assess next</a>
        <a href="/intake.html">Intake interview simulator</a>
        <a href="/decision-trees.html">Decision trees</a>
        <a href="/skills.html">Microskills responder</a>
        <a href="/core-attributes-quiz.html">Core attributes drill</a>
        <a href="/flashcards.html">Flashcards</a>
        <a href="/dsm.html">DSM-5-TR reference</a>
        <a href="/theory.html">Theories &amp; pioneers reference</a>
        <a href="/guarantee.html">Pass guarantee</a>
      </div>
      <div class="foot-col">
        <h4>More</h4>
        <a href="/#features">Features</a>
        <a href="/#how">How it works</a>
        <a href="/study-guide.html">Free study guide</a>
        <a href="/book">Study-guide bonuses</a>
        <a href="/podcast.html">Clinical podcast</a>
        <a href="/blog">Blog</a>
        <a href="/accessibility.html">Accessibility</a>
        <a href="https://www.counselorready.com" target="_blank" rel="noopener">CounselorReady (CE)</a>
      </div>
    </div>
    <div class="foot-legal">
      <span class="prov">GA Integrated Therapeutic Perspectives LLC</span>
      <span><a href="/policies.html" style="color:var(--slate-500)">Policies &amp; Terms</a> &nbsp;·&nbsp; © 2026 GA Integrated Therapeutic Perspectives LLC. All rights reserved.</span>
    </div>
  </div>
</footer>`;

const CTA = `<section class="guar" style="margin-top:40px">
  <h2>Put it into practice.</h2>
  <p>Work realistic NCMHCE clinical simulations under exam timing, then see exactly where you stand.</p>
  <div class="hero-cta">
    <a class="btn lg" href="/exam.html">Take the timed practice exam</a>
    <a class="btn lg ghost" href="/register.html">Create your account</a>
  </div>
</section>`;

// opts: { title, description, canonical, ogType, image, jsonLd: [objects], robots, body }
function page(opts) {
  const image = absUrl(opts.image) || OG_IMAGE;
  const head = [
    '<meta charset="utf-8" />',
    '<meta name="viewport" content="width=device-width, initial-scale=1" />',
    `<title>${esc(opts.title)}</title>`,
    `<meta name="description" content="${esc(opts.description)}">`,
    opts.canonical ? `<link rel="canonical" href="${esc(opts.canonical)}">` : '',
    opts.robots ? `<meta name="robots" content="${esc(opts.robots)}">` : '',
    `<meta property="og:type" content="${esc(opts.ogType || 'website')}">`,
    '<meta property="og:site_name" content="PassReady Prep">',
    `<meta property="og:title" content="${esc(opts.title)}">`,
    `<meta property="og:description" content="${esc(opts.description)}">`,
    opts.canonical ? `<meta property="og:url" content="${esc(opts.canonical)}">` : '',
    `<meta property="og:image" content="${esc(image)}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${esc(opts.title)}">`,
    `<meta name="twitter:description" content="${esc(opts.description)}">`,
    `<meta name="twitter:image" content="${esc(image)}">`,
    ...(opts.extraHead || []),
    ...(opts.jsonLd || []).map(jsonLd),
    `<style>${STYLE}</style>`,
  ].filter(Boolean).join('\n');
  return `<!doctype html>
<html lang="en">
<head>
${head}
</head>
<body>

${HEADER}

<main>
${opts.body}
</main>

${FOOTER}

<script src="/suggestion-widget.js"></script>
</body>
</html>`;
}

function blogIndexUrl(pageNum) {
  return SITE + '/blog' + (pageNum > 1 ? '?page=' + pageNum : '');
}

function renderIndex({ posts, page: pageNum, totalPages }) {
  const title = pageNum > 1 ? `NCMHCE Prep Blog — Page ${pageNum} | PassReady Prep` : 'NCMHCE Prep Blog | PassReady Prep';
  const description = pageNum > 1
    ? `NCMHCE study strategy and clinical reasoning articles from PassReady Prep, page ${pageNum}.`
    : 'NCMHCE study strategy, clinical case walkthroughs, and exam-prep guidance for counselors preparing for licensure, from PassReady Prep.';
  const canonical = blogIndexUrl(pageNum);

  const cards = posts.map(p => {
    const href = '/blog/' + encodeURIComponent(p.slug);
    const cover = safeImageUrl(p.coverImageUrl);
    return `<article class="feat">
      ${cover ? `<a href="${href}" tabindex="-1" aria-hidden="true"><img src="${esc(cover)}" alt="" loading="lazy"></a>` : ''}
      <p class="meta"><time datetime="${esc(new Date(p.publishedAt).toISOString())}">${esc(fmtDate(p.publishedAt))}</time></p>
      <h2><a href="${href}">${esc(p.title)}</a></h2>
      <p>${esc(p.excerpt || p.metaDescription || '')}</p>
    </article>`;
  }).join('\n');

  const prev = pageNum > 1 ? `<a class="btn ghost" href="${pageNum - 1 > 1 ? '/blog?page=' + (pageNum - 1) : '/blog'}" rel="prev">&larr; Newer posts</a>` : '<span></span>';
  const next = pageNum < totalPages ? `<a class="btn ghost" href="/blog?page=${pageNum + 1}" rel="next">Older posts &rarr;</a>` : '<span></span>';

  const extraHead = [];
  if (pageNum > 1) extraHead.push(`<link rel="prev" href="${esc(blogIndexUrl(pageNum - 1))}">`);
  if (pageNum < totalPages) extraHead.push(`<link rel="next" href="${esc(blogIndexUrl(pageNum + 1))}">`);

  const body = `<section class="wrap band">
  <div class="sec-head">
    <span class="eyebrow">Blog</span>
    <h1>NCMHCE prep, explained</h1>
    <p>Study strategy and clinical reasoning for counselors preparing for the NCMHCE.</p>
  </div>
  ${posts.length ? `<div class="feat-grid">${cards}</div>` : '<p class="empty">New articles are on the way. Check back soon.</p>'}
  ${totalPages > 1 ? `<nav class="pager" aria-label="Blog pages">${prev}${next}</nav>` : ''}
</section>`;

  return page({
    title, description, canonical, extraHead, body,
    jsonLd: [{
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'PassReady Prep Blog',
      url: canonical,
      publisher: { '@type': 'Organization', name: 'PassReady Prep', url: SITE + '/' },
    }],
  });
}

function renderPost(post) {
  const canonical = SITE + '/blog/' + post.slug;
  const cover = safeImageUrl(post.coverImageUrl);
  const description = post.metaDescription || post.excerpt || post.title;
  const published = post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined;
  const modified = new Date(post.updatedAt || post.publishedAt || Date.now()).toISOString();
  const tags = (post.tags || []).filter(Boolean);

  const body = `<div class="wrap band">
  <article class="article">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> &rsaquo; <a href="/blog">Blog</a> &rsaquo; <span>${esc(post.title)}</span></nav>
    ${tags.length ? `<span class="eyebrow">${esc(tags[0])}</span>` : ''}
    <h1>${esc(post.title)}</h1>
    <p class="meta">By ${esc(post.author)}${published ? ` &middot; <time datetime="${esc(published)}">${esc(fmtDate(post.publishedAt))}</time>` : ''}</p>
    ${cover ? `<img class="cover" src="${esc(cover)}" alt="">` : ''}
    <div class="prose">
${renderMarkdown(post.bodyMarkdown)}
    </div>
    ${CTA}
    <p class="crumbs" style="margin-top:28px"><a href="/blog">&larr; Back to all posts</a></p>
  </article>
</div>`;

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description,
    datePublished: published,
    dateModified: modified,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'PassReady Prep', url: SITE + '/' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    image: absUrl(cover) || OG_IMAGE,
  };
  if (tags.length) article.keywords = tags.join(', ');
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: SITE + '/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
    ],
  };

  return page({
    title: `${post.title} | PassReady Prep`,
    description,
    canonical,
    ogType: 'article',
    image: cover,
    extraHead: [
      published ? `<meta property="article:published_time" content="${esc(published)}">` : '',
      `<meta property="article:modified_time" content="${esc(modified)}">`,
    ],
    jsonLd: [article, breadcrumb],
    body,
  });
}

function renderNotFound() {
  return page({
    title: 'Post not found | PassReady Prep',
    description: 'This NCMHCE prep article could not be found.',
    robots: 'noindex,follow',
    body: `<section class="wrap band"><div class="sec-head">
    <span class="eyebrow">Blog</span>
    <h1>Post not found</h1>
    <p>That article doesn't exist or isn't published yet.</p>
  </div><p style="text-align:center"><a class="btn" href="/blog">Browse all posts</a></p></section>`,
  });
}

module.exports = { renderMarkdown, renderIndex, renderPost, renderNotFound, safeImageUrl, esc, SITE };
