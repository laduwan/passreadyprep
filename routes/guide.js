// routes/guide.js — gated delivery of a purchased PassReady Prep study guide.
//
// Supports two SKUs today, selected by the ?sku= query parameter (default
// 'ncmhce' for back-compatibility with pre-NCE callers):
//
//   sku=ncmhce → NCMHCE 1E, entitlement User.guidePurchasedAt,
//                master PDF at assets/ncmhce-study-guide.pdf
//                (env override: GUIDE_PDF_PATH)
//   sku=nce    → NCE 1E ("The NCE Ownership Method"), entitlement
//                User.guideNcePurchasedAt, master PDF at
//                assets/nce-ownership-method.pdf
//                (env override: GUIDE_NCE_PDF_PATH)
//
// Access model is the same for both: the user must own the entitlement
// (set by the Stripe webhook on a one-time guide purchase, routes/payment.js).
// Delivery is a short-lived signed link that streams a PER-BUYER WATERMARKED
// copy of the master PDF — so any leaked file is traceable to the purchaser,
// and the link itself expires and can't be shared.
//
// Env:
//   GUIDE_PDF_PATH      — absolute path to the NCMHCE master PDF
//                         (default: <root>/assets/ncmhce-study-guide.pdf)
//   GUIDE_NCE_PDF_PATH  — absolute path to the NCE master PDF
//                         (default: <root>/assets/nce-ownership-method.pdf)
//   JWT_SECRET          — same secret used by auth (already set)
const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { PDFDocument, StandardFonts, rgb, degrees } = require('pdf-lib');
const requireAuth = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

const LINK_TTL = 300; // seconds a download link is valid

// SKU → { master PDF path, user entitlement field, order-id field,
//         pretty download filename, pretty title, token purpose }
const SKUS = {
  ncmhce: {
    master: process.env.GUIDE_PDF_PATH || path.join(__dirname, '..', 'assets', 'ncmhce-study-guide.pdf'),
    ownedField: 'guidePurchasedAt',
    orderField: 'guideOrderId',
    filename: 'NCMHCE-Study-Guide.pdf',
    title: 'NCMHCE Study Guide',
    purpose: 'guide-download',
  },
  nce: {
    master: process.env.GUIDE_NCE_PDF_PATH || path.join(__dirname, '..', 'assets', 'nce-ownership-method.pdf'),
    ownedField: 'guideNcePurchasedAt',
    orderField: 'guideNceOrderId',
    filename: 'NCE-Ownership-Method.pdf',
    title: 'The NCE Ownership Method',
    purpose: 'guide-download-nce',
  },
};

function resolveSku(req) {
  const raw = String(req.query.sku || 'ncmhce').toLowerCase();
  return SKUS[raw] ? raw : 'ncmhce';
}

// GET /api/guide/status?sku=ncmhce|nce — does the signed-in user own the guide?
router.get('/status', requireAuth, async (req, res) => {
  try {
    const skuKey = resolveSku(req);
    const sku = SKUS[skuKey];
    const user = await User.findById(req.userId).select(sku.ownedField);
    res.json({
      sku: skuKey,
      owned: !!(user && user[sku.ownedField]),
      available: fs.existsSync(sku.master),
    });
  } catch (e) {
    res.status(500).json({ error: 'status check failed' });
  }
});

// GET /api/guide/link?sku=ncmhce|nce — mint a short-lived, single-purpose download URL
router.get('/link', requireAuth, async (req, res) => {
  try {
    const skuKey = resolveSku(req);
    const sku = SKUS[skuKey];
    const user = await User.findById(req.userId).select(sku.ownedField);
    if (!user || !user[sku.ownedField]) return res.status(403).json({ error: 'Guide not purchased' });
    const token = jwt.sign(
      { sub: String(req.userId), purpose: sku.purpose, sku: skuKey },
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
    // Back-compat: tokens minted before the SKU field default to 'ncmhce'.
    const skuKey = SKUS[payload.sku] ? payload.sku : 'ncmhce';
    const sku = SKUS[skuKey];
    if (payload.purpose !== sku.purpose) return res.status(403).send('Invalid link.');

    const user = await User.findById(payload.sub).select(`email ${sku.ownedField} ${sku.orderField}`);
    if (!user || !user[sku.ownedField]) return res.status(403).send('Guide not purchased.');
    if (!fs.existsSync(sku.master)) return res.status(503).send('The study guide file is not available yet.');

    const pdf = await PDFDocument.load(fs.readFileSync(sku.master));
    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const email = user.email || 'licensed user';
    const footer = `Licensed to ${email}  ·  order ${user[sku.orderField] || ''}  ·  © GA Integrated Therapeutic Perspectives LLC — not for redistribution`;

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
      p.drawText(footer.length > 130 ? footer.slice(0, 127) + '…' : footer, {
        x: 22, y: 12, size: 6.5, font, color: rgb(0.5, 0.5, 0.5),
      });
    });

    const out = await pdf.save();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${sku.filename}"`);
    res.setHeader('Cache-Control', 'no-store');
    res.send(Buffer.from(out));
  } catch (e) {
    console.error('guide file error:', e);
    res.status(500).send('Could not prepare the guide. Please try again.');
  }
});

module.exports = router;
