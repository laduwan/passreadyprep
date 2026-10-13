const mongoose = require('mongoose');
const { Schema } = mongoose;

// One App Store transaction we have verified and applied to an account
// (see routes/applePayment.js). Two jobs:
//   1. Idempotency — StoreKit re-delivers transactions (restore, unfinished
//      transactions, app relaunch), so each one must only ever extend a pass
//      or unlock the guide once.
//   2. Ownership — originalTransactionId ties a subscription (and all its
//      renewals) to the first PassReady account that claimed it, so one Apple
//      ID cannot unlock several accounts. Server notifications (renewals,
//      refunds) find the account through this record too.
const AppleTransactionSchema = new Schema(
  {
    transactionId: { type: String, required: true, unique: true },
    originalTransactionId: { type: String, required: true, index: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    productId: { type: String, required: true },
    tier: { type: String, required: true },
    type: String,                 // Apple's product type string
    environment: String,          // 'Sandbox' | 'Production'
    purchaseDate: Date,
    expiresDate: Date,
    appAccountToken: String,
    revokedAt: Date,              // refund / revoke seen for this transaction
    appliedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('AppleTransaction', AppleTransactionSchema);
