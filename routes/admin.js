const express = require('express');
const requireAdmin = require('../middleware/adminAuth');
const ContentItem = require('../models/ContentItem');

const router = express.Router();
router.use(requireAdmin);

// GET /api/admin/content?status=sme_review — list cases by status (default pending)
router.get('/content', async (req, res) => {
  try {
    const status = req.query.status || 'sme_review';
    const items = await ContentItem.find({ status })
      .select('externalId title category difficulty status needsWork')
      .sort({ category: 1, externalId: 1 });
    return res.json({ count: items.length, items });
  } catch (err) {
    console.error('admin list error', err);
    return res.status(500).json({ error: 'Could not load cases' });
  }
});

// GET /api/admin/content/:externalId — one full case, any status (for review)
router.get('/content/:externalId', async (req, res) => {
  try {
    const item = await ContentItem.findOne({ externalId: req.params.externalId });
    if (!item) return res.status(404).json({ error: 'Case not found' });
    return res.json({ item });
  } catch (err) {
    console.error('admin get error', err);
    return res.status(500).json({ error: 'Could not load that case' });
  }
});

// POST /api/admin/content/:externalId/publish — make it live to learners
router.post('/content/:externalId/publish', async (req, res) => {
  try {
    const reviewer = (req.body && req.body.reviewer) || 'admin';
    const item = await ContentItem.findOneAndUpdate(
      { externalId: req.params.externalId },
      { $set: { status: 'published', reviewedBy: { name: reviewer, date: new Date() } } },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: 'Case not found' });
    return res.json({ externalId: item.externalId, status: item.status });
  } catch (err) {
    console.error('admin publish error', err);
    return res.status(500).json({ error: 'Could not publish that case' });
  }
});

// POST /api/admin/content/:externalId/unpublish — send back to pending
router.post('/content/:externalId/unpublish', async (req, res) => {
  try {
    const item = await ContentItem.findOneAndUpdate(
      { externalId: req.params.externalId },
      { $set: { status: 'sme_review' } },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: 'Case not found' });
    return res.json({ externalId: item.externalId, status: item.status });
  } catch (err) {
    console.error('admin unpublish error', err);
    return res.status(500).json({ error: 'Could not update that case' });
  }
});

// POST /api/admin/content/:externalId/note — save a reviewer note (non-empty flags needs-work)
router.post('/content/:externalId/note', async (req, res) => {
  try {
    const note = req.body && typeof req.body.note === 'string' ? req.body.note : '';
    const item = await ContentItem.findOneAndUpdate(
      { externalId: req.params.externalId },
      { $set: { reviewNote: note, needsWork: note.trim().length > 0 } },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: 'Case not found' });
    return res.json({ externalId: item.externalId, reviewNote: item.reviewNote, needsWork: item.needsWork });
  } catch (err) {
    console.error('admin note error', err);
    return res.status(500).json({ error: 'Could not save the note' });
  }
});

module.exports = router;
