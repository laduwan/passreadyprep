// routes/guide.js — gated delivery of the purchased NCMHCE Study Guide.
// Access model: the user must own the entitlement (user.guidePurchasedAt, set by
// the Stripe webhook on a `guide` purchase). Delivery is a short-lived signed link
// that streams a PER-BUYER WATERMARKED copy of the master PDF — so any leaked file
// is traceable to the purchaser, and the link itself expires and can't be shared.
//
// Env:
//   GUIDE_PDF_PATH  — absolute path to the master PDF (default: <root>/assets/ncmhce-study-guide.pdf)
//   JWT_SECRET      — same secret used by auth (already set)
const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { PDFDocument, StandardFonts, rgb, degrees } = require('pdf-lib');
const requireAuth = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

const MASTER = process.env.GUIDE_PDF_PATH || path.join(__dirname, '..', 'assets', 'ncmhce-study-guide.pdf');
const LINK_TTL = 300; // seconds a download link is valid

// GET /api/guide/status — does the signed-in user own the guide?
router.get('/status', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('guidePurchasedAt');
    res.json({ owned: !!(user && user.guidePurchasedAt), available: fs.existsSync(MASTER) });
  } catch (e) {
    res.status(500).json({ error: 'status check failed' });
  }
});

// GET /api/guide/link — mint a short-lived, single-purpose download URL
router.get('/link', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('guidePurchasedAt');
    if (!user || !user.guidePurchasedAt) return res.status(403).json({ error: 'Guide not purchased' });
    const token = jwt.sign(
      { sub: String(req.userId), purpose: 'guide-download' },
      process.env.JWT_SECRET,
      { expiresIn: LINK_TTL }
    );
    res.json({ url: `/api/guide/file?t=${encodeURIComponent(token)}`, expiresIn: LINK_TTL });
  } catch (e) {
    res.status(500).json({ error: 'could not create download link' });
  }
});

// GET /api/guide/file?t=… — verify the link, watermark per-buyer, stream the PDF
router.get('/file', async (req, res) => {
  let payload;
  try {
    payload = jwt.verify(String(req.query.t || ''), process.env.JWT_SECRET);
  } catch (e) {
    return res.status(403).send('This download link has expired. Please generate a new one.');
  }
  try {
    if (payload.purpose !== 'guide-download') return res.status(403).send('Invalid link.');
    const user = await User.findById(payload.sub).select('email guidePurchasedAt guideOrderId');
    if (!user || !user.guidePurchasedAt) return res.status(403).send('Guide not purchased.');
    if (!fs.existsSync(MASTER)) return res.status(503).send('The study guide file is not available yet.');

    const pdf = await PDFDocument.load(fs.readFileSync(MASTER));
    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const email = user.email || 'licensed user';
    const footer = `Licensed to ${email}  \u00b7  order ${user.guideOrderId || ''}  \u00b7  \u00a9 GA Integrated Therapeutic Perspectives LLC \u2014 not for redistribution`;

    pdf.getPages().forEach((p) => {
      const { width, height } = p.getSize();
      // faint diagonal buyer watermark across each page
      p.drawText(email, {
        x: width / 2 - Math.min(width * 0.35, email.length * 8),
        y: height / 2 - 20,
        size: 28, font, color: rgb(0.92, 0.92, 0.92),
        rotate: degrees(45), opacity: 0.45,
      });
      // per-page license footer
      p.drawText(footer.length > 130 ? footer.slice(0, 127) + '\u2026' : footer, {
        x: 22, y: 12, size: 6.5, font, color: rgb(0.5, 0.5, 0.5),
      });
    });

    const out = await pdf.save();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="NCMHCE-Study-Guide.pdf"');
    res.setHeader('Cache-Control', 'no-store');
    res.send(Buffer.from(out));
  } catch (e) {
    console.error('guide file error:', e);
    res.status(500).send('Could not prepare the guide. Please try again.');
  }
});

module.exports = router;
