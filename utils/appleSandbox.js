// Accounts whose paid plan came only from Apple's sandbox: App Review,
// TestFlight or our own testing. Sandbox purchases are free, so these are
// tagged "Test (Apple sandbox)" in the admin pages and left out of the
// paid-member and revenue counts (routes/adminSubscriptions.js, routes/admin.js).
//
// A test account has at least one Sandbox transaction, no Production
// transaction, and no Stripe payment on either plan. Anyone who really paid,
// through the App Store or the website, is never counted as a test.
const AppleTransaction = require('../models/AppleTransaction');
const User = require('../models/User');

async function appleSandboxUserIds() {
  const [sandbox, production] = await Promise.all([
    AppleTransaction.distinct('userId', { environment: 'Sandbox' }),
    AppleTransaction.distinct('userId', { environment: 'Production' }),
  ]);
  const paidApple = new Set(production.map(String));
  const candidates = sandbox.filter((id) => !paidApple.has(String(id)));
  if (!candidates.length) return [];
  const paidStripe = await User.find({
    _id: { $in: candidates },
    // Stripe IDs only: App Store purchases also fill lastPaymentIntentId,
    // as 'apple:<transactionId>' (routes/applePayment.js).
    $or: [
      { 'subscription.lastPaymentIntentId': /^pi_/ },
      { 'subscription.stripeSubscriptionId': /^sub_/ },
      { 'nceAccess.lastPaymentIntentId': /^pi_/ },
      { 'nceAccess.stripeSubscriptionId': /^sub_/ },
    ],
  }).select('_id').lean();
  const stripeIds = new Set(paidStripe.map((u) => String(u._id)));
  return candidates.filter((id) => !stripeIds.has(String(id)));
}

module.exports = { appleSandboxUserIds };
