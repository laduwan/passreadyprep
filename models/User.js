const mongoose = require('mongoose');
const { Schema } = mongoose;

// One account. Holds login info, which exams they're studying, their plan,
// and their preferences (including the accessibility + voice settings).
const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    name: { type: String, trim: true },
    profession: { type: String }, // e.g. 'counseling'

    examsEnrolled: [{ type: Schema.Types.ObjectId, ref: 'Exam' }],

    subscription: {
      tier: { type: String, default: 'free' },
      status: { type: String, default: 'active' },
      stripeCustomerId: String,
      currentPeriodEnd: Date,
    },

    prefs: {
      voice: {
        enabled: { type: Boolean, default: false },
        voiceId: String,
        autoPlay: { type: Boolean, default: false },
        speed: { type: Number, default: 1 },
      },
      accessibility: {
        highContrast: { type: Boolean, default: false },
        dyslexiaFont: { type: Boolean, default: false },
        reducedMotion: { type: Boolean, default: false },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
