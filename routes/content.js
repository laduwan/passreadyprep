const express = require('express');
const ContentItem = require('../models/ContentItem');
const Exam = require('../models/Exam');

const router = express.Router();

// GET /api/content?exam=ncmhce — list published cases (lightweight catalog)
router.get('/', async (req, res) => {
  try {
    const filter = { status: 'published' };
    if (req.query.exam) {
      const exam = await Exam.findOne({ key: req.query.exam });
      if (!exam) return res.json({ count: 0, items: [] });
      filter.examId = exam._id;
    }
    const items = await ContentItem.find(filter)
      .select('externalId title category difficulty format')
      .sort({ category: 1, externalId: 1 });
    return res.json({ count: items.length, items });
  } catch (err) {
    console.error('list content error', err);
    return res.status(500).json({ error: 'Could not load the case list' });
  }
});

// GET /api/content/:externalId — one full case
router.get('/:externalId', async (req, res) => {
  try {
    const item = await ContentItem.findOne({
      externalId: req.params.externalId,
      status: 'published',
    });
    if (!item) return res.status(404).json({ error: 'Case not found' });
    return res.json({ item });
  } catch (err) {
    console.error('get content error', err);
    return res.status(500).json({ error: 'Could not load that case' });
  }
});

module.exports = router;
