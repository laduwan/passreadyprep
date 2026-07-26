const mongoose = require('mongoose');
const { Schema } = mongoose;

// A suggestion-box submission from the persistent widget. Shared shape with
// CounselorReady's Suggestion model, scoped to this app's own database.
const SuggestionSchema = new Schema(
  {
    message: { type: String, required: true, trim: true, maxlength: 4000 },

    category: {
      type: String,
      enum: ['bug', 'feature-request', 'content', 'billing', 'other'],
      default: 'other',
    },

    platform: {
      type: String,
      enum: ['counselorready', 'passreadyprep', 'gaitp'],
      required: true,
      default: 'passreadyprep',
    },

    userId: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    name: { type: String, trim: true },
    email: { type: String, trim: true },

    pageUrl: String,
    userAgent: String,

    status: {
      type: String,
      enum: ['new', 'reviewed', 'in-progress', 'done', 'dismissed'],
      default: 'new',
    },
    adminNote: { type: String, trim: true },

    emailSent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

SuggestionSchema.index({ platform: 1, status: 1, createdAt: -1 });

module.exports = mongoose.model('Suggestion', SuggestionSchema);
