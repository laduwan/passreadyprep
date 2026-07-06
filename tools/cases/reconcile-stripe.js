/*
 * reconcile-stripe.js — find (and optionally fix) purchases that were paid in
 * Stripe but never fulfilled in Mongo because the webhook endpoint was down.
 *
 * WHY THIS EXISTS
 *   The Stripe webhook was pointed at the bare root (https://api.passreadyprep.com/)
 *   instead of /api/payment/webhook, so every event since the first failure
 *   returned 404 and no user tier / guide entitlement was written. This script
 *   walks completed Stripe Checkout sessions in that window and compares each
 *   one against the user's live DB state, applying the SAME grant the webhook
 *   (routes/payment.js) would have applied.
 *
 * SAFETY
 *   - DRY RUN by default. It only reads and reports. Nothing is written unless
 *     you pass --apply.
 *   - Idempotent. Applying twice sets the same fields to the same values, so
 *     re-running is safe. It never touches Stripe (no charges, no refunds) —
 *     it only reads Stripe and writes the local User documents.
 *   - Conservative. A session is called UNFULFILLED only when the user is still
 *     on 'free' (access tiers) or is missing the guide entitlement. If the user
 *     already sits on a DIFFERENT paid tier, it's flagged REVIEW, not force-changed.
 *
 * NOTE ON THE FASTER FIX
 *   Once the Dashboard URL is corrected you can also just resend the failed
 *   events from the endpoint's event log — the webhook is idempotent. This
 *   script is the verify-and-backstop path for anything outside the resend
 *   window, or when you'd rather confirm against the DB than trust the replay.
 *
 * USAGE
 *   node tools/reconcile-stripe.js                       # dry run, default window
 *   node tools/reconcile-stripe.js --apply               # write the missed grants
 *   node tools/reconcile-stripe.js --since 2026-07-01T00:00:00Z
 *   node tools/reconcile-stripe.js --apply --limit 50
 *
 * Requires the same env the server uses: STRIPE_SECRET_KEY and MONGO_URI.
 */

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

// First webhook failure per Stripe's email: 2026-07-02 20:01:39 UTC.
// We look a little before it to be safe.
const DEFAULT_SINCE = '2026-07-02T20:00:00Z';

// ── Tier config — mirror of routes/payment.js TIERS. Keep in sync. ────────────
// accessDays here drives the same currentPeriodEnd math the webhook does.
const TIERS = {
  monthly:   { mode: 'subscription', entitlementOnly: false },
  pass3:     { mode: 'payment', accessDays: 90,  entitlementOnly: false },
  guarantee: { mode: 'payment', accessDays: 180, entitlementOnly: false },
  guide:     { mode: 'payment', entitlementOnly: true },
};

// ── tiny arg parser ───────────────────────────────────────────────────────────
function parseArgs(argv) {
  const args = { apply: false, since: DEFAULT_SINCE, limit: 0 };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--apply') args.apply = true;
    else if (a === '--since') args.since = argv[++i];
    else if (a === '--limit') args.limit = parseInt(argv[++i], 10) || 0;
  }
  return args;
}

function fmtMoney(cents, currency) {
  if (cents == null) return '—';
  return `${(cents / 100).toFixed(2)} ${(currency || '').toUpperCase()}`.trim();
}

function short(id) { return id ? id.slice(0, 20) : '—'; }

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('STRIPE_SECRET_KEY is not set. Add it to your .env first.');
    process.exit(1);
  }
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is not set. Add it to your .env first.');
    process.exit(1);
  }

  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  const sinceTs = Math.floor(new Date(args.since).getTime() / 1000);
  if (!sinceTs || Number.isNaN(sinceTs)) {
    console.error(`Bad --since value: "${args.since}". Use an ISO date.`);
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)');
  console.log(args.apply
    ? '*** APPLY MODE — missed grants WILL be written to the database ***'
    : '--- DRY RUN — no writes. Re-run with --apply to fulfill. ---');
  console.log(`Window: sessions created since ${new Date(sinceTs * 1000).toISOString()}\n`);

  const rows = [];
  const summary = { ok: 0, unfulfilled: 0, review: 0, notfound: 0, skipped: 0, applied: 0, errors: 0 };
  let scanned = 0;

  // Walk completed Checkout sessions in the window (auto-paginates).
  for await (const session of stripe.checkout.sessions.list({
    created: { gte: sinceTs },
    limit: 100,
  })) {
    if (args.limit && scanned >= args.limit) break;
    scanned++;

    // Only fully completed, paid sessions can have been fulfilled.
    if (session.status !== 'complete') { summary.skipped++; continue; }
    if (session.payment_status && session.payment_status === 'unpaid') { summary.skipped++; continue; }

    const tier = session.metadata && session.metadata.tier;
    const metaUserId = session.metadata && session.metadata.userId;

    // Not one of our tiers → likely a different product/account (e.g. CounselorReady). Skip.
    if (!tier || !TIERS[tier]) { summary.skipped++; continue; }

    // Resolve the user: prefer metadata.userId, fall back to the Stripe customer.
    let user = null;
    try {
      if (metaUserId && mongoose.isValidObjectId(metaUserId)) user = await User.findById(metaUserId);
      if (!user && session.customer) {
        user = await User.findOne({ 'subscription.stripeCustomerId': session.customer });
      }
    } catch (e) { /* fall through to not-found handling */ }

    const base = {
      session: short(session.id),
      created: new Date(session.created * 1000).toISOString().replace('.000Z', 'Z'),
      email: (session.customer_details && session.customer_details.email) || (user && user.email) || '—',
      tier,
      amount: fmtMoney(session.amount_total, session.currency),
    };

    if (!user) {
      rows.push({ ...base, dbState: 'no matching user', verdict: 'USER-NOT-FOUND', action: '' });
      summary.notfound++;
      continue;
    }

    const cfg = TIERS[tier];
    const sub = user.subscription || {};
    let verdict, dbState, action = '';

    try {
      if (cfg.entitlementOnly) {
        // Guide purchase — fulfilled iff the entitlement flag is set.
        const fulfilled = !!user.guidePurchasedAt;
        dbState = fulfilled ? `guide @ ${user.guidePurchasedAt.toISOString().slice(0, 10)}` : 'no guide entitlement';
        if (fulfilled) { verdict = 'OK'; summary.ok++; }
        else {
          verdict = 'UNFULFILLED'; summary.unfulfilled++;
          if (args.apply) {
            await User.findByIdAndUpdate(user._id, {
              guidePurchasedAt: new Date(session.created * 1000),
              guideOrderId: session.id,
            });
            action = 'granted guide entitlement'; summary.applied++;
          }
        }
      } else if (cfg.mode === 'subscription') {
        // Monthly — fulfilled by customer.subscription.* in the webhook.
        dbState = `tier=${sub.tier || 'free'} status=${sub.status || '—'}`;
        if (sub.tier === 'monthly') { verdict = 'OK'; summary.ok++; }
        else if (sub.tier && sub.tier !== 'free') { verdict = 'REVIEW'; summary.review++; }
        else {
          verdict = 'UNFULFILLED'; summary.unfulfilled++;
          if (args.apply) {
            let periodEnd = null, status = 'active';
            if (session.subscription) {
              const s = await stripe.subscriptions.retrieve(session.subscription);
              status = s.status;
              if (s.current_period_end) periodEnd = new Date(s.current_period_end * 1000);
            }
            await User.findByIdAndUpdate(user._id, {
              'subscription.tier': 'monthly',
              'subscription.status': status,
              ...(periodEnd ? { 'subscription.currentPeriodEnd': periodEnd } : {}),
            });
            action = `set monthly (${status})`; summary.applied++;
          }
        }
      } else {
        // One-time access tier — pass3 / guarantee.
        dbState = `tier=${sub.tier || 'free'}`;
        if (sub.tier === tier) { verdict = 'OK'; summary.ok++; }
        else if (sub.tier && sub.tier !== 'free') { verdict = 'REVIEW'; summary.review++; }
        else {
          verdict = 'UNFULFILLED'; summary.unfulfilled++;
          if (args.apply) {
            // Clock starts at the purchase time (not now), so a backfilled buyer
            // isn't shorted the days the outage cost them.
            const periodEnd = cfg.accessDays
              ? new Date(session.created * 1000 + cfg.accessDays * 24 * 60 * 60 * 1000)
              : null; // guarantee w/o accessDays would be null; guarantee has 180 here
            await User.findByIdAndUpdate(user._id, {
              'subscription.tier': tier,
              'subscription.status': 'active',
              'subscription.currentPeriodEnd': periodEnd,
            });
            action = `set ${tier}, expires ${periodEnd ? periodEnd.toISOString().slice(0, 10) : 'never'}`;
            summary.applied++;
          }
        }
      }
    } catch (e) {
      verdict = 'ERROR'; dbState = e.message; summary.errors++;
    }

    rows.push({ ...base, dbState, verdict, action });
  }

  // ── report (flat, scannable) ───────────────────────────────────────────────
  const order = { ERROR: 0, 'USER-NOT-FOUND': 1, UNFULFILLED: 2, REVIEW: 3, OK: 4 };
  rows.sort((a, b) => (order[a.verdict] ?? 9) - (order[b.verdict] ?? 9));

  const H = ['VERDICT', 'TIER', 'AMOUNT', 'CREATED', 'EMAIL', 'DB STATE', 'ACTION'];
  const widths = [14, 9, 14, 20, 28, 30, 34];
  const line = (c) => c.map((v, i) => String(v ?? '').padEnd(widths[i]).slice(0, widths[i])).join(' ');
  console.log(line(H));
  console.log(widths.map((w) => '-'.repeat(w)).join(' '));
  for (const r of rows) {
    console.log(line([r.verdict, r.tier, r.amount, r.created, r.email, r.dbState, r.action]));
  }

  console.log('\n── summary ──────────────────────────────────────────');
  console.log(`  scanned completed sessions : ${scanned}`);
  console.log(`  already fulfilled (OK)     : ${summary.ok}`);
  console.log(`  UNFULFILLED                : ${summary.unfulfilled}${args.apply ? '' : '  (run --apply to fix)'}`);
  console.log(`  REVIEW (on a different tier): ${summary.review}`);
  console.log(`  user not found             : ${summary.notfound}  (likely a different product/account)`);
  console.log(`  skipped (incomplete/other) : ${summary.skipped}`);
  console.log(`  errors                     : ${summary.errors}`);
  if (args.apply) console.log(`  >>> grants written         : ${summary.applied} <<<`);
  console.log('');

  await mongoose.disconnect();
}

main().catch((err) => {
  console.error('reconcile-stripe failed:', err);
  process.exit(1);
});
