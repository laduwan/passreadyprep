/**
 * Copyright (c) 2026 CounselorReady, a subsidiary of Ga Integrated Therapeutic Perspectives, LLC.
 * All rights reserved. Proprietary and confidential.
 *
 * NCMHCE Case routes — admin review surface for generated practice simulations.
 *
 *   GET    /api/ncmhce-cases                 list (filter by ?status=, ?contentArea=)
 *   GET    /api/ncmhce-cases/stats           counts by status + last generated
 *   GET    /api/ncmhce-cases/:id             one full case
 *   PATCH  /api/ncmhce-cases/:id/publish     draft -> published
 *   PATCH  /api/ncmhce-cases/:id/archive     -> archived
 *   POST   /api/ncmhce-cases/generate        run the generator once, on demand
 *
 * All endpoints require an authenticated admin.
 */

const express = require('express');
const NcmhceCase = require('../models/NcmhceCase');
const { runNcmhceCaseGen } = require('../jobs/ncmhceCaseGen');
const requireAdmin = require('../middleware/adminAuth');

const router = express.Router();
router.use(requireAdmin);

// List (lightweight projection for an admin table).
router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.contentArea) filter.contentArea = req.query.contentArea;

    const cases = await NcmhceCase.find(filter)
      .select('caseId title status difficulty contentArea diagnosis.primary validation.passed validation.flags createdAt publishedAt')
      .sort({ createdAt: -1 })
      .limit(Math.min(parseInt(req.query.limit, 10) || 100, 500))
      .lean();

    res.json({ count: cases.length, cases });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Quick status snapshot.
router.get('/stats', async (req, res) => {
  try {
    const [draft, published, archived, latest] = await Promise.all([
      NcmhceCase.countDocuments({ status: 'draft' }),
      NcmhceCase.countDocuments({ status: 'published' }),
      NcmhceCase.countDocuments({ status: 'archived' }),
      NcmhceCase.findOne().select('caseId title createdAt validation.passed').sort({ createdAt: -1 }).lean()
    ]);
    res.json({ total: draft + published + archived, draft, published, archived, latest });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Full case.
router.get('/:id', async (req, res) => {
  try {
    const doc = await NcmhceCase.findById(req.params.id).lean();
    if (!doc) return res.status(404).json({ error: 'Case not found' });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Publish a draft.
router.patch('/:id/publish', async (req, res) => {
  try {
    const doc = await NcmhceCase.findByIdAndUpdate(
      req.params.id,
      { status: 'published', publishedAt: new Date() },
      { new: true }
    );
    if (!doc) return res.status(404).json({ error: 'Case not found' });
    res.json({ ok: true, caseId: doc.caseId, status: doc.status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Archive.
router.patch('/:id/archive', async (req, res) => {
  try {
    const doc = await NcmhceCase.findByIdAndUpdate(req.params.id, { status: 'archived' }, { new: true });
    if (!doc) return res.status(404).json({ error: 'Case not found' });
    res.json({ ok: true, caseId: doc.caseId, status: doc.status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Manually trigger one generation run.
router.post('/generate', async (req, res) => {
  try {
    const stats = await runNcmhceCaseGen();
    if (stats.error) return res.status(502).json({ ok: false, ...stats });
    res.json({ ok: true, ...stats });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
