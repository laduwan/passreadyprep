# App Review — v1.0 (build 4), companion-app resubmission

PassReady Prep is resubmitted as a **companion to the web service**: nothing is
sold in the app. This file has, in order: what changed in the code, the App
Store Connect work to do by hand before resubmitting, the text to paste into the
App Review reply, and the device-test / screen-recording checklist.

Earlier builds offered Apple In-App Purchase (build 2/3). That path is kept in
the repo as the fallback — `AppReview_Reply_v1.0_build2.md`,
`client/native/native-iap.js`, `client/ios/App/App/StoreKitPlugin.swift`,
`routes/applePayment.js` — but it is **not bundled** in this build.

---

## Why this build

Build 3 added Apple In-App Purchase to answer guideline 3.1.1. If App Review
still prefers the app not transact at all, the supported alternative for a
**reader / companion app** is to sell nothing in the app and let the person use
what they bought on the web. This build does exactly that, and also keeps the
two fixes from build 3 (visible account deletion; corrected no-tracking privacy
answers).

| Item | What the app does now |
|---|---|
| Payments (3.1.1) | **No purchase of any kind in the app.** No price, plan, trial, "subscribe", "upgrade" or checkout is shown anywhere. No link opens a purchase page or the website's pricing. The app does not even hand pricing off to Safari. |
| Reader / companion (3.1.3(a)) | Plans are bought on passreadyprep.com. Signing in unlocks what the account already has. Free sign-up and a free sample case work in the app. |
| Account deletion (5.1.1(v)) | Unchanged from build 3 and still in place: dashboard header **Account** → **Delete my account…** → password → confirm → done (also at the dashboard footer). Server-side hard delete, immediate and permanent. |
| Tracking (5.1.2(i)) | Unchanged: the app does not track, has no ad SDK and no analytics tag in the bundle. The App Privacy answers must read "No" for tracking on every data type (below). |

---

## What changed in the code

All changes are in the iOS bundle layer and the shared static pages; the website
is unaffected (web `npm run build` is untouched).

- **`client/scripts/build-ios.mjs`** — the iOS bundler:
  - No longer bundles `checkout.html` or `purchase.html`, and no longer injects
    `native-iap.js`.
  - Strips every block wrapped in `<!-- prp-web-only --> … <!-- /prp-web-only -->`
    from each bundled page (pricing sections, plan buttons, price/trial copy).
  - Fails the build if any bundled page still shows price, trial, "subscribe",
    "upgrade", "pricing", "checkout" or "in-app purchase" in its visible text.
    This guard is why the pivot can't silently regress.
- **`client/native/native-shim.js`** — in the app:
  - Intercepts `/api/payment/create-checkout-session` and `/api/payment/portal`
    and answers them locally with a neutral notice; they never reach Stripe.
  - Blocks taps to `/checkout.html`, `/purchase.html`, `/nce-study-guide.html`,
    `/book.html` and any `#pricing` anchor, showing the same neutral notice and
    staying on the page. The US external-purchase Safari hand-off is gone.
- **`client/native/native-iap.js`**, **`StoreKitPlugin.swift`**,
  **`AppViewController.swift`** — the StoreKit plugin is no longer registered and
  the IAP layer is not loaded. Both are kept, with comments, as the fallback.
- **Static pages** (`public/landing.html`, `public/index.html`, `public/nce.html`,
  `public/exam.html`, `public/games.html`, `public/guarantee.html`,
  `public/account.html`, `public/delete-account.html`, `public/tool-gate.js`,
  `client/public/study-guide.html`, `client/public/assess-next.html`) — price,
  plan and trial copy is either wrapped as web-only or branched on
  `window.PRP_NATIVE` so that in the app:
  - a free account sees it is free, with sign-up but no plan/trial/price;
  - a tool the account can't use says it is "not included in your account", with
    no "subscribe" and no button;
  - a paying subscriber sees a plain line — "Your subscription is managed on
    passreadyprep.com" — with no link;
  - the study-guide tile shows only for someone who already owns it (download),
    without a price.
- **`client/ios/App/App.xcodeproj/project.pbxproj`** — build number 3 → **4**
  (version stays 1.0).

Verify after building (`cd client && npm run build:ios`): the build's own
copy-guard must pass, and `dist/` must contain no `checkout.html`,
`purchase.html` or `native-iap.js`.

---

## App Store Connect — do before resubmitting

### A. App Privacy (5.1.2(i)) — Account Holder or Admin only

App → **App Privacy → Edit**. For every data type declared (Name, Email Address,
User ID, Product Interaction, and any others), open it and set **"Is this data
used for tracking purposes?" → No**. Keep them **linked to the user**, purpose
**App Functionality** (Product Interaction may also be Analytics). Keep
**Purchases → Purchase History** (App Functionality) — the app reads plan status
to know what the account may use, even though it takes no payment. Then
**Publish**. Full table in `AppStore_Listing_iOS.md` §3. This is the five-minute
fix to do first.

### B. Remove price / buy language from the listing

The app sells nothing, so the metadata must not advertise prices or purchasing:

- **Description** — remove the "GETTING STARTED" paragraph's pricing ("monthly
  subscription, a one-time 3-month pass, or the one-time Pass Guarantee … renew
  automatically …"). Replace with a companion line, e.g.: *"Download free and
  try a sample case. Create a free account to save your progress. Plans are
  available at passreadyprep.com; sign in to use what you've purchased."* The
  updated draft is in `AppStore_Listing_iOS.md` §1.
- **Keywords** — no price or "buy"/"subscribe" terms (the current keyword set is
  fine).
- **Screenshots** — use shots of the case player, timed mock, readiness and
  flashcards. **No pricing screen, no "$", no "Subscribe"/"Buy" button** in any
  screenshot.
- **Promotional text** — no price (current text is fine).

### C. In-App Purchase products

None are needed for this build. If products were created for build 3, leave them
in the "Ready to Submit" / un-attached state — do **not** attach them to this
version. (Keep them for the fallback.)

### D. Review notes and demo account

`client/ios/App/fastlane/metadata/review_information/notes.txt` is updated for
the companion model. Confirm the demo account signs in on production with full
access, and keep a second throwaway account for the reviewer to create/delete.

### E. Build

Xcode: `cd client && npm run build:ios`, `npx cap sync ios`, confirm the build
number is 4, archive and upload. No StoreKit capability is required.

---

## Reply to App Review (paste into App Store Connect)

Thank you for the review. We have changed the app so that it does not offer any
purchases, and resubmitted (version 1.0, build 4).

**Guideline 3.1.1 — Payments**
PassReady Prep is now a companion to our web service. No purchase of any kind is
available in the app: it shows no prices, plans, free-trial offers, "subscribe"
or "upgrade" wording, and no checkout, and it does not link out to any page where
a purchase can be made. People purchase a plan on our website (passreadyprep.com)
and simply sign in to the app to use it, as permitted for reader/companion apps
under 3.1.3(a). Creating a free account and trying a sample case are available in
the app at no cost. A signed-in subscriber sees only a plain line stating that
their subscription is managed on passreadyprep.com, with no link.

**Guideline 5.1.1(v) — Account deletion**
Account deletion remains available in the app: Start studying → sign in →
"Account" (top right) → "Delete my account…" → enter password → confirm →
confirmation screen (also at the bottom of the dashboard). Deletion is immediate
and permanent and does not require contacting us. A screen recording of the full
flow on a physical device is attached and the path is in the review notes.

**Guideline 5.1.2(i) — App Tracking Transparency**
The app does not track users. It contains no advertising SDK and no analytics
tag, and does not link collected data with third-party data for advertising. We
have corrected the App Privacy answers so that no data type is marked as used for
tracking. Because the app does not track, it does not request App Tracking
Transparency permission.

Demo account and step-by-step notes are in the App Review Information section.
Thank you.

---

## Device test pass (physical iPhone, before uploading build 4)

Do this on a real device, not only the Simulator.

1. Fresh install → app launches to the start page (no purchase prompt).
2. **Create account** with a throwaway email → free sample case opens.
3. Sign in with the demo account (full access) → open a case, the timed mock,
   flashcards, decision trees, DSM reference, intake simulator.
4. Confirm **nowhere** in the app shows a price, a plan, "free trial",
   "subscribe"/"upgrade", or a checkout — dashboard, each study tool, the NCE
   page, the account page, a locked tool for a free/expired account.
5. Tap anything that used to lead to buying (there should be none; if any old
   link remains it must show the neutral notice and stay in the app — it must not
   open Safari).
6. **Account** (top right) → **Delete my account…** → delete the throwaway
   account → "Your account was deleted".
7. **Non-US storefront check:** sign the device into a non-US App Store account
   (or use a sandbox tester on another storefront) and confirm the app behaves
   the same and still shows no purchasing.
8. Sign back in with the demo account to confirm paid content still opens.

Record steps 1–6 with Control Center → Screen Recording (2–4 minutes, start on
the home screen) and attach the video to the reply.

---

## Fallback

If App Review still insists the app must sell its content through In-App
Purchase, the companion argument is exhausted. Restore the build-3 path:
re-register `StoreKitPlugin()` in `AppViewController.swift`, re-bundle
`purchase.html` and inject `native-iap.js` in `build-ios.mjs`, and follow
`AppReview_Reply_v1.0_build2.md` (StoreKit at the standard commission).
