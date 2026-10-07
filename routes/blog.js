// Public blog + dynamic sitemap — full server-rendered HTML/XML responses.
//
//   GET /blog            published posts, newest first, 10 per page (?page=N)
//   GET /blog/:slug      one published post; drafts and unknown slugs 404
//   GET /sitemap.xml     www-https content pages + /blog + every published post,
//                        each with a <lastmod>
//
// Mounted from server.js BEFORE express.static so these routes win over any
// file in public/. `sendPage` is server.js's HTML sender, so blog pages get the
// same serve-time injections (a11y, translate, PWA, visit beacon) as every
// other page.
const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');
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
  '/practice-exams/1',
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
  '/assess-next-case.html',
  '/core-attributes-quiz.html',
  '/theory.html',
  '/games.html',
  '/nce.html',
  '/policies.html',
  '/accessibility.html',
];

// <lastmod> for the static pages = the page file's last git commit date
// (YYYY-MM-DD), falling back to the file's mtime if git is unavailable.
// Files only change on deploy, which restarts the process, so the lookup runs
// once per process and is cached.
const ROOT = path.join(__dirname, '..');
const PAGE_FILES = {
  '/': 'public/landing.html',
  '/study': 'public/index.html',
  '/practice-exams/1': 'public/practice-exam-1.html',
};
const pageFile = p => PAGE_FILES[p] || 'public' + p;

function fileLastmod(rel) {
  return new Promise(resolve => {
    execFile('git', ['log', '-1', '--format=%cs', '--', rel], { cwd: ROOT, timeout: 5000 }, (err, out) => {
      const d = err ? '' : String(out).trim();
      if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return resolve(d);
      fs.stat(path.join(ROOT, rel), (e, st) => resolve(e ? null : st.mtime.toISOString().slice(0, 10)));
    });
  });
}

let staticLastmods = null;
function getStaticLastmods() {
  if (!staticLastmods) {
    // utils/blogRender.js stands in for /blog when no post is published yet.
    const files = STATIC_PAGES.map(pageFile).concat('utils/blogRender.js');
    staticLastmods = Promise.all(files.map(fileLastmod)).then(dates => {
      const map = {};
      files.forEach((f, i) => { map[f] = dates[i]; });
      return map;
    });
  }
  return staticLastmods;
}

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

    const fileDates = await getStaticLastmods();
    const lastmod = d => new Date(d).toISOString().slice(0, 10);
    const lastmodTag = d => (d ? `<lastmod>${d}</lastmod>` : '');
    const urls = STATIC_PAGES.map(p => `  <url><loc>${xmlEsc(SITE + p)}</loc>${lastmodTag(fileDates[pageFile(p)])}</url>`);
    const newest = posts.reduce((m, p) => {
      const t = new Date(p.updatedAt || p.publishedAt).getTime();
      return t > m ? t : m;
    }, 0);
    urls.push(`  <url><loc>${xmlEsc(SITE + '/blog')}</loc>${lastmodTag(newest ? lastmod(newest) : fileDates['utils/blogRender.js'])}</url>`);
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
