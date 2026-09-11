const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middleware/auth');
const User = require('../models/User');
const Announcement = require('../models/Announcement');
const { segmentFilter } = require('../utils/segments');

// Member side of in-app announcements. public/announcement-modal.js calls
// these on page load for signed-in members only.
const router = express.Router();
router.use(requireAuth);

// GET /api/announcements/active — live announcements this member hasn't
// dismissed and whose audience they belong to. Newest first, max 3.
router.get('/active', async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('announcementsDismissed').lean();
    if (!user) return res.json({ announcements: [] });

    const now = new Date();
    const live = await Announcement.find({
      active: true,
      startsAt: { $lte: now },
      $or: [{ endsAt: null }, { endsAt: { $exists: false } }, { endsAt: { $gt: now } }],
      _id: { $nin: user.announcementsDismissed || [] },
    })
      .sort({ createdAt: -1 })
      .limit(10)
      .select('title message ctaLabel ctaUrl segment createdAt')
      .lean();

    // Check segment membership against the same rules the email broadcast
    // uses — one lookup per distinct segment, not per announcement.
    const memberOf = {};
    for (const seg of [...new Set(live.map((a) => a.segment || 'all'))]) {
      memberOf[seg] = seg === 'all'
        ? true
        : !!(await User.exists({ _id: req.userId, ...segmentFilter(seg) }));
    }

    const announcements = live
      .filter((a) => memberOf[a.segment || 'all'])
      .slice(0, 3)
      .map(({ segment, ...a }) => a);

    return res.json({ announcements });
  } catch (err) {
    console.error('announcements active error', err);
    return res.status(500).json({ error: 'Could not load announcements' });
  }
});

// POST /api/announcements/:id/dismiss — never show this one to me again
router.post('/:id/dismiss', async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ error: 'Bad id' });
    await User.updateOne(
      { _id: req.userId },
      { $addToSet: { announcementsDismissed: new mongoose.Types.ObjectId(req.params.id) } }
    );
    return res.json({ ok: true });
  } catch (err) {
    console.error('announcement dismiss error', err);
    return res.status(500).json({ error: 'Could not dismiss' });
  }
});

module.exports = router;
