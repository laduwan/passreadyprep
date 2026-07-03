const mongoose = require('mongoose');
const { Schema } = mongoose;

// One tracked activity/event: signups, logins, password resets, payments, and
// errors. Kept deliberately generic (type + severity + meta) so new event kinds
// need no schema change.
const ActivityEventSchema = new Schema(
  {
    type: { type: String, required: true, index: true }, // e.g. 'user.registered'
    severity: { type: String, enum: ['info', 'warn', 'error'], default: 'info', index: true },
    message: String,
    email: { type: String, index: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    ip: String,
    path: String,
    meta: Schema.Types.Mixed,
    notified: { type: Boolean, default: false }, // whether an admin alert was sent
  },
  { timestamps: true }
);

ActivityEventSchema.index({ createdAt: -1 });

// Optional auto-expiry so the log can't grow forever. Set ACTIVITY_TTL_DAYS to
// a positive number to enable; leave unset to keep events indefinitely.
const ttlDays = parseInt(process.env.ACTIVITY_TTL_DAYS || '0', 10);
if (ttlDays > 0) {
  ActivityEventSchema.index({ createdAt: 1 }, { expireAfterSeconds: ttlDays * 86400 });
}

module.exports = mongoose.model('ActivityEvent', ActivityEventSchema);
