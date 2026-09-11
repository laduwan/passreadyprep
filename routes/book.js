const express = require('express');
const router = express.Router();
const User = require('../models/User');
const requireAuth = require('../middleware/auth');

// ── GET /api/book/status ─────────────────────────────────────────────────────
// Returns the current book-access status for the signed-in user.
router.get('/status', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('bookAccess');
    if (!user) return res.status(404).json({ error: 'User not found' });
    return res.json({ bookAccess: user.bookAccess || { status: 'none' } });
  } catch (err) {
    console.error('book status error:', err);
    return res.status(500).json({ error: 'Could not check book access' });
  }
});

// ── POST /api/book/submit-receipt ────────────────────────────────────────────
// Accepts a receipt image (base64 data URI, max ~5 MB) and sets the user's
// bookAccess to 'pending' for admin review.
// (server.js registers a larger express.json() limit for this path — the
// default 100kb app-wide limit would reject a ~6.7 MB base64 receipt photo.)
router.post('/submit-receipt', requireAuth, async (req, res) => {
  try {
    const { receiptImage } = req.body;
    if (!receiptImage || typeof receiptImage !== 'string') {
      return res.status(400).json({ error: 'Receipt image is required' });
    }

    // Basic size check — base64 of a 5 MB image is ~6.7 MB string
    if (receiptImage.length > 7_000_000) {
      return res.status(400).json({ error: 'Image too large — please use a smaller photo (under 5 MB)' });
    }

    const user = await User.findById(req.userId).select('bookAccess');
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Don't allow re-submission if already approved
    if (user.bookAccess?.status === 'approved') {
      return res.json({ message: 'Your book access is already active', bookAccess: user.bookAccess });
    }

    user.bookAccess = {
      status: 'pending',
      receiptUrl: receiptImage,
      submittedAt: new Date(),
      reviewedAt: null,
      adminNote: null,
    };
    await user.save();

    return res.json({ message: 'Receipt submitted — you will have access within 24 hours', bookAccess: { status: 'pending' } });
  } catch (err) {
    console.error('submit receipt error:', err);
    return res.status(500).json({ error: 'Could not submit receipt' });
  }
});

// ── The 4 book-bonus case IDs ────────────────────────────────────────────────
// These match cases from the printed study guide's practice exams.
// Update these IDs to match whichever 4 cases you want to offer.
const BOOK_CASE_IDS = [
  'case21',   // Opioid Use Disorder
  'case22',   // Dissociative Identity Disorder
  'case25',   // Insomnia Disorder
  'case30',   // Schizoaffective Disorder
];

router.BOOK_CASE_IDS = BOOK_CASE_IDS;

module.exports = router;
