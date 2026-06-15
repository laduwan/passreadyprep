const mongoose = require('mongoose');
const { Schema } = mongoose;

// One saved practice attempt for one case/question set.
// This is "the lockbox" — what lets someone close the app and pick up later,
// on any device, with their history intact.
const AttemptSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    examId: { type: Schema.Types.ObjectId, ref: 'Exam', required: true, index: true },
    contentItemId: { type: Schema.Types.ObjectId, ref: 'ContentItem' },
    externalId: String, // e.g. 'ncmhce-G031'

    mode: { type: String, enum: ['study', 'timed'], default: 'study' },

    responses: [
      {
        questionId: String,
        selectedOptionId: String,
        correct: Boolean,
        weight: Number,
      },
    ],

    score: Number,
    domainBreakdown: Schema.Types.Mixed, // { counseling: 0.8, intake: 0.6, ... }
    voiceUsed: { type: Boolean, default: false },

    startedAt: Date,
    completedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Attempt', AttemptSchema);
