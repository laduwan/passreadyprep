const mongoose = require('mongoose');
const { Schema } = mongoose;

// One rollup per user per calendar day of *study* activity — how long they
// actually spent in each tool (cases, flashcards, DSM browser, ...). This is
// the learner-facing counterpart to ActivityEvent (which logs ops events like
// signups and errors). Days use the learner's own local date ('YYYY-MM-DD')
// so streaks line up with their clock, not the server's.
const StudyActivitySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    day: { type: String, required: true }, // 'YYYY-MM-DD' in the learner's timezone
    seconds: { type: Number, default: 0 }, // total engaged seconds that day
    byTool: { type: Map, of: Number, default: {} }, // e.g. { flashcards: 300, dsm: 120 }
    pings: { type: Number, default: 0 }, // heartbeats received (sanity metric)
  },
  { timestamps: true }
);

StudyActivitySchema.index({ userId: 1, day: 1 }, { unique: true });
StudyActivitySchema.index({ updatedAt: -1 });

module.exports = mongoose.model('StudyActivity', StudyActivitySchema);
