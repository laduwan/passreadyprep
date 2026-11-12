// One sent study break: the questions it carried, how it was sent, and what
// the member answered. The link in the text or email carries `linkToken`, a
// random credential that names this document, so the page works without a
// sign-in and nothing but this one session can be opened with it.
//
// `items` keep the keyed answers and rationales server-side; the session
// route strips them until the member has answered.
const mongoose = require('mongoose');
const { Schema } = mongoose;

const OptionSchema = new Schema({ id: String, text: String }, { _id: false });

const ItemSchema = new Schema(
  {
    id: String,                 // the bank item's id (NceItem.externalId or a knowledge-bank id)
    stem: String,
    options: [OptionSchema],
    correct: String,            // option id
    rationale: Schema.Types.Mixed, // { optionId: why it is right / wrong }
    explanation: String,        // the item's teaching note, if it has one
  },
  { _id: false }
);

const StudyBreakSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    // The credential in the link: 16 random URL-safe characters, unguessable,
    // good for LINK_TTL_MS after sentAt (utils/studyBreak.js). Short enough
    // that the whole text stays near one carrier segment.
    linkToken: { type: String, unique: true, sparse: true },
    exam: { type: String, enum: ['ncmhce', 'nce'], required: true },
    domain: { type: String, required: true },     // the weakest domain the questions were drawn from
    domainLabel: { type: String, required: true },
    count: { type: Number, required: true },
    channel: { type: String, enum: ['sms', 'email'], required: true },
    test: { type: Boolean, default: false },      // sent from the "send one now" button, not the schedule
    items: { type: [ItemSchema], default: [] },

    sentAt: { type: Date, default: Date.now },
    sendResult: Schema.Types.Mixed,               // what the SMS / mail provider answered

    answeredAt: Date,
    answers: Schema.Types.Mixed,                  // { itemId: optionId }
    correct: Number,
    score: Number,                                // percent
    attemptId: { type: Schema.Types.ObjectId, ref: 'Attempt' },
  },
  { timestamps: true }
);

StudyBreakSchema.index({ userId: 1, sentAt: -1 });

module.exports = mongoose.model('StudyBreak', StudyBreakSchema);
