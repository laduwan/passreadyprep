// Audience segments shared by the email broadcast (routes/adminBroadcast.js)
// and in-app announcements (routes/announcements.js), so a segment name means
// the same set of accounts in both places.
//
// segmentFilter() is the pure audience rule. It deliberately does NOT include
// the email opt-out (prefs.digestOptOut) — that only applies to email, and is
// added by the broadcast route. An opted-out member still sees in-app notices.
function segmentFilter(segment) {
  switch (segment) {
    case 'paid':
      return { 'subscription.tier': { $in: ['monthly', 'pass3', 'guarantee'] } };
    case 'trial':
      return { 'subscription.tier': 'free', trialEndsAt: { $gte: new Date() } };
    case 'expired':
      return { 'subscription.tier': 'free', $or: [
        { trialEndsAt: { $lt: new Date() } },
        { trialEndsAt: { $exists: false } },
      ]};
    case 'all':
    default:
      return {};
  }
}

module.exports = { segmentFilter };
