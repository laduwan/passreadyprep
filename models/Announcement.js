const mongoose = require('mongoose');
const { Schema } = mongoose;

// In-app announcement — shown to signed-in members as a one-time pop-up the
// next time they open any member page (see public/announcement-modal.js).
// A member who dismisses it gets its _id added to User.announcementsDismissed,
// so each announcement appears once per person, not on every visit.
//
// segment reuses the same audience buckets as the email broadcast
// (utils/segments.js) so "paid" means the same thing in both places.
const AnnouncementSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 120 },
    message: { type: String, required: true, trim: true, maxlength: 2000 }, // plain text; newlines kept
    ctaLabel: { type: String, trim: true, maxlength: 40 },
    ctaUrl: { type: String, trim: true, maxlength: 500 },                    // https://… or /path only
    segment: { type: String, enum: ['all', 'paid', 'trial', 'expired'], default: 'all' },
    active: { type: Boolean, default: true },
    startsAt: { type: Date, default: Date.now },
    endsAt: Date,                                                            // optional auto-expiry
    createdBy: { type: String, trim: true },
  },
  { timestamps: true }
);

AnnouncementSchema.index({ active: 1, startsAt: 1, endsAt: 1 });

module.exports = mongoose.model('Announcement', AnnouncementSchema);
