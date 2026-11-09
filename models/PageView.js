const mongoose = require('mongoose');
const { Schema } = mongoose;

// One anonymous pageview. Deliberately holds nothing that identifies a person:
// no raw IP, no user id, no cookie, no user-agent string. `visitorHash` is a
// salted hash of (IP + user-agent + the day), so it can group a single day's
// hits into a rough "unique visitor" count but cannot be linked across days
// or back to anyone. Set VISIT_HASH_SALT in the environment to make it
// unguessable — without it, a built-in fallback salt is used.
const PageViewSchema = new Schema(
  {
    path: { type: String, required: true, maxlength: 200 }, // pathname only — no query string
    referrerHost: { type: String, default: '' },            // hostname only — no full referring URL
    day: { type: String, required: true },                  // YYYY-MM-DD (UTC)
    visitorHash: { type: String, required: true },          // day-salted, one-way, non-reversible
    // Campaign tags from the link that brought the visitor (?utm_source=…),
    // so a YouTube video, a newsletter or an ad can each get its own link and
    // its own numbers. Campaign-level labels only, nothing about the person.
    utmSource: { type: String, default: '', maxlength: 80 },
    utmMedium: { type: String, default: '', maxlength: 80 },
    utmCampaign: { type: String, default: '', maxlength: 80 },
  },
  { timestamps: true }
);

// The stats endpoint slices by day, then by path/referrer within a day range.
PageViewSchema.index({ day: 1, path: 1 });
PageViewSchema.index({ day: 1, utmSource: 1 });
PageViewSchema.index({ day: 1, visitorHash: 1 });
PageViewSchema.index({ createdAt: -1 });

// Optional auto-expiry, same opt-in shape as ActivityEvent: set VISIT_TTL_DAYS
// to a positive number to have old pageviews deleted automatically; leave it
// unset to keep them indefinitely.
const ttlDays = parseInt(process.env.VISIT_TTL_DAYS || '0', 10);
if (ttlDays > 0) {
  PageViewSchema.index({ createdAt: 1 }, { expireAfterSeconds: ttlDays * 86400 });
}

module.exports = mongoose.model('PageView', PageViewSchema);
