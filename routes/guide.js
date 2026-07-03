/**
 * routes/guide.js
 *
 * The Complete NCMHCE Study Guide — one-time $25 purchase, delivered as a
 * per-buyer watermarked PDF. Purchase is handled by routes/payment.js
 * (tier "guide"); the webhook sets guidePurchasedAt / guideOrderId on the
 * user. This route only checks that entitlement and serves the file.
 *
 * The master PDF lives OUTSIDE the repo (it's the paid product):
 *   GUIDE_PDF_PATH — absolute path to the master PDF (env var), or the
 *   default assets/ncmhce-study-guide.pdf next to server.js.
 * Until the file exists, /status reports available:false and downloads
 * return a clean "not available yet" message.
 *
 * Endpoints (all JSON):
 *   GET /api/guide/status    — { owned, purchasedAt, available }   (auth)
 *   GET /api/guide/link      — { url } short-lived download link   (auth)
 *   GET /api/guide/download  — streams the watermarked PDF (?t= link token)
 */

const express = require('express');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const requireAuth = require('../middleware/auth');

const router = express.Router();

const GUIDE_PDF_PATH =
  process.env.GUIDE_PDF_PATH || path.join(__dirname, '..', 'assets', 'ncmhce-study-guide.pdf');

// Download links are personalized and expire quickly so they can't be shared.
const LINK_TTL_SECONDS = 10 * 60;

function guideAvailable() {
  try { return fs.existsSync(GUIDE_PDF_PATH); } catch { return false; }
}

// ── GET /api/guide/status ─────────────────────────────────────────────────────
// Does the signed-in user own the guide, and is the master PDF on disk yet?
router.get('/status', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('guidePurchasedAt');
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json({
      owned: !!user.guidePurchasedAt,
      purchasedAt: user.guidePurchasedAt || null,
      available: guideAvailable(),
    });
  } catch (err) {
    console.error('guide status error:', err);
    res.status(500).json({ error: 'Could not check your guide status' });
  }
});

// ── GET /api/guide/link ───────────────────────────────────────────────────────
// Mints a short-lived, single-user download URL. The frontend navigates the
// browser to it, so /download authenticates via the ?t= token, not a header.
router.get('/link', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('guidePurchasedAt');
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (!user.guidePurchasedAt) {
      return res.status(403).json({ error: 'You have not purchased the study guide yet.' });
    }
    if (!guideAvailable()) {
      return res.status(503).json({
        error: 'The study guide download isn\'t available yet — check back shortly, or contact support.',
      });
    }

    const token = jwt.sign(
      { sub: req.userId, purpose: 'guide-download' },
      process.env.JWT_SECRET,
      { expiresIn: LINK_TTL_SECONDS }
    );
    res.json({ url: `/api/guide/download?t=${token}`, expiresIn: LINK_TTL_SECONDS });
  } catch (err) {
    console.error('guide link error:', err);
    res.status(500).json({ error: 'Could not create the download link' });
  }
});

// ── GET /api/guide/download?t=… ───────────────────────────────────────────────
// Verifies the link token, stamps every page with the buyer's identity, and
// streams the PDF. pdf-lib is required lazily so a missing dependency can't
// take the whole server down at boot (same reasoning as Stripe in payment.js).
router.get('/download', async (req, res) => {
  try {
    let payload;
    try {
      payload = jwt.verify(String(req.query.t || ''), process.env.JWT_SECRET);
    } catch {
      return res.status(410).json({
        error: 'This download link has expired — generate a fresh one from the study guide page.',
      });
    }
    if (payload.purpose !== 'guide-download') {
      return res.status(401).json({ error: 'Invalid download link' });
    }

    const user = await User.findById(payload.sub).select('email guidePurchasedAt guideOrderId');
    if (!user || !user.guidePurchasedAt) {
      return res.status(403).json({ error: 'You have not purchased the study guide yet.' });
    }
    if (!guideAvailable()) {
      return res.status(503).json({
        error: 'The study guide download isn\'t available yet — check back shortly, or contact support.',
      });
    }

    const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
    const doc = await PDFDocument.load(fs.readFileSync(GUIDE_PDF_PATH));
    const font = await doc.embedFont(StandardFonts.Helvetica);
    const stamp = `Licensed to ${user.email} · Order ${user.guideOrderId || 'n/a'} · passreadyprep.com`;
    for (const page of doc.getPages()) {
      page.drawText(stamp, {
        x: 36,
        y: 14,
        size: 7.5,
        font,
        color: rgb(0.45, 0.5, 0.55),
      });
    }
    const bytes = await doc.save();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="ncmhce-study-guide.pdf"');
    res.send(Buffer.from(bytes));
  } catch (err) {
    console.error('guide download error:', err);
    res.status(500).json({ error: 'Could not prepare your download — please try again' });
  }
});

module.exports = router;
