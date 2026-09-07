const mongoose = require('mongoose');

// One document per user. Mirrors the localStorage `prp_history` array so
// analytics and readiness data persist across devices.
// `t` is epoch-ms of the last write, used for last-write-wins merge.

const studyHistorySyncSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    entries: { type: [mongoose.Schema.Types.Mixed], default: [] },
    t: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('StudyHistorySync', studyHistorySyncSchema);
