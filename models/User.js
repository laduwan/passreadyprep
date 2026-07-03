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

    // Incremented on every login. Embedded in the JWT so any session using
    // an older version is rejected immediately — effectively one active
    // session per account, which blocks credential sharing.
    sessionVersion: { type: Number, default: 0 },

    // Policy acceptance — legal record of when and what version the user agreed to.
    termsAcceptedAt: Date,
    termsVersion: { type: String },          // e.g. 'june-2026'
    guaranteeTermsAcceptedAt: Date,          // set only for Pass Guarantee purchasers

    // Study-guide ebook — one-time purchase entitlement (separate from the
    // subscription; owning the guide never unlocks the app).
    guidePurchasedAt: Date,                  // set by the Stripe webhook on purchase
    guideOrderId: String,                    // Stripe payment intent / session id, for support

    subscription: {
      tier: { type: String, default: 'free' },      // free | monthly | pass3 | guarantee
      status: { type: String, default: 'active' },  // active | past_due | canceled
      stripeCustomerId: String,
      currentPeriodEnd: Date,

      // Score report gate — only used for the 'guarantee' tier.
      // When currentPeriodEnd passes, access is blocked until a score report
      // is submitted and admin approves an extension (failed) or closes out (passed).
      scoreReport: {
        status: {
          type: String,
          enum: ['none', 'pending', 'approved_extension', 'passed'],
          default: 'none',
        },
        submittedAt: Date,
        reviewedAt: Date,
        examDate: Date,
        result: String,             // 'pass' | 'fail' — as reported
        notes: String,              // admin notes on review
        extensionCount: { type: Number, default: 0 },
      },
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
