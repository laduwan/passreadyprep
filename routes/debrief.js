const express = require('express');
const requireAuth = require('../middleware/auth');

const router = express.Router();

// POST /api/debrief — placeholder for AI-powered case debrief generation
router.post('/', requireAuth, async (req, res) => {
  res.status(501).json({ error: 'Debrief endpoint not yet implemented.' });
});

module.exports = router;
