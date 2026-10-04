// Public blog + dynamic sitemap — full server-rendered HTML/XML responses.
//
//   GET /blog            published posts, newest first, 10 per page (?page=N)
//   GET /blog/:slug      one published post; drafts and unknown slugs 404
//   GET /sitemap.xml     www-https content pages + /blog + every published post
//
// Mounted from server.js BEFORE express.static so these routes win over any
// file in public/. `sendPage` is server.js's HTML sender, so blog pages get the
// same serve-time injections (a11y, translate, PWA, visit beacon) as every
// other page.
const express = require('express');
const mongoose = require('mongoose');
const BlogPost = require('../models/BlogPost');
const { renderIndex, renderPost, renderNotFound, SITE } = require('../utils/blogRender');

const PER_PAGE = 10;

// Indexable content pages for the sitemap (canonical www-https paths). Never
// list a page that is noindexed. /book is left out on purpose: it is only the
// signed-in book-buyer receipt-upload flow, not standalone content.
const STATIC_PAGES = [
  '/',
  '/study',
  '/exam.html',
  '/flashcards.html',
  '/decision-trees.html',
  '/skills.html',
  '/dsm.html',
  '/guarantee.html',
  '/podcast.html',
  '/study-guide.html',
  '/intake.html',
  '/knowledge-drill.html',
  '/timed-knowledge-exam.html',
  '/next-best-step.html',
  '/assess-next.html',
  '/core-attributes-quiz.html',
  '/theory.html',
  '/nce.html',
  '/policies.html',
  '/accessibility.html',
];

function dbReady() {
  return mongoose.connection.readyState === 1;
}

function xmlEsc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]));
}

module.exports = function createBlogRouter({ sendPage }) {
  const router = express.Router();

  router.get('/blog', async (req, res, next) => {
    try {
      const raw = req.query.page;
      const pageNum = raw === undefined ? 1 : Number(raw);
      if (!Number.isInteger(pageNum) || pageNum < 1) return sendPage(res.status(404), renderNotFound());
      if (pageNum === 1 && raw !== undefined) return res.redirect(301, '/blog');

      let posts = [], total = 0;
      if (dbReady()) {
        const filter = { status: 'published' };
        [total, posts] = await Promise.all([
          BlogPost.countDocuments(filter),
          BlogPost.find(filter)
            .sort({ publishedAt: -1, _id: -1 })
            .skip((pageNum - 1) * PER_PAGE)
            .limit(PER_PAGE)
            .select('slug title excerpt metaDescription coverImageUrl publishedAt')
            .lean(),
        ]);
      }
      const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
      if (pageNum > totalPages) return sendPage(res.status(404), renderNotFound());
      res.set('Cache-Control', 'public, max-age=300');
      return sendPage(res, renderIndex({ posts, page: pageNum, totalPages }));
    } catch (err) {
      return next(err);
    }
  });

  router.get('/blog/', (_req, res) => res.redirect(301, '/blog'));

  router.get('/blog/:slug', async (req, res, next) => {
    try {
      const slug = String(req.params.slug || '');
      if (!BlogPost.SLUG_RE.test(slug) || !dbReady()) return sendPage(res.status(404), renderNotFound());
      const post = await BlogPost.findOne({ slug, status: 'published' }).lean();
      if (!post) return sendPage(res.status(404), renderNotFound());
      res.set('Cache-Control', 'public, max-age=300');
      return sendPage(res, renderPost(post));
    } catch (err) {
      return next(err);
    }
  });

  router.get('/sitemap.xml', async (_req, res) => {
    let posts = [];
    try {
      if (dbReady()) {
        posts = await BlogPost.find({ status: 'published' })
          .sort({ publishedAt: -1 })
          .select('slug updatedAt publishedAt')
          .lean();
      }
    } catch (err) {
      // A DB hiccup must not break the sitemap — fall back to the static pages.
      console.error('sitemap: could not load blog posts', err.message);
      posts = [];
    }

    const lastmod = d => new Date(d).toISOString().slice(0, 10);
    const urls = STATIC_PAGES.map(p => `  <url><loc>${xmlEsc(SITE + p)}</loc></url>`);
    const newest = posts.reduce((m, p) => {
      const t = new Date(p.updatedAt || p.publishedAt).getTime();
      return t > m ? t : m;
    }, 0);
    urls.push(`  <url><loc>${xmlEsc(SITE + '/blog')}</loc>${newest ? `<lastmod>${lastmod(newest)}</lastmod>` : ''}</url>`);
    posts.forEach(p => {
      urls.push(`  <url><loc>${xmlEsc(SITE + '/blog/' + p.slug)}</loc><lastmod>${lastmod(p.updatedAt || p.publishedAt)}</lastmod></url>`);
    });

    res.set('Cache-Control', 'public, max-age=3600');
    res.type('application/xml').send(
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
      urls.join('\n') + '\n</urlset>\n'
    );
  });

  return router;
};

module.exports.STATIC_PAGES = STATIC_PAGES;
