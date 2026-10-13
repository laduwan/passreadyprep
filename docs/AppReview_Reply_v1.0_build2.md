# App Review — v1.0 (build 2) rejection, October 13 2026

Submission 7d0c6aab-ef50-4eec-ae52-1f39d592755d was rejected on three
guidelines. This file has, in order: what changed in the code, the App Store
Connect work that must be done by hand before resubmitting, the text to paste
into the App Review reply, and the screen-recording checklist.

---

## What the rejection said, and what changed

| Guideline | Finding | Fix in this build |
|---|---|---|
| 3.1.1 Payments — In-App Purchase | Plans and the study guide are sold outside the app and not offered through In-App Purchase. | Every plan is now sold in the app through Apple In-App Purchase (StoreKit 2). The website keeps Stripe. See "In-App Purchase" below. |
| 5.1.1(v) Account deletion | The reviewer could not find account deletion. | It existed (dashboard footer → Delete account) but was easy to miss on an iPad. There is now an **Account** button in the dashboard header; the Account page has **Delete my account…** in its own red section, plus Manage subscription, Restore purchases and Log out. The dashboard footer link stays. Deletion no longer requires an Apple-billed subscription to be cancelled first (Apple does not allow that); the page tells the person to cancel it in Settings and offers the Apple subscription sheet. |
| 5.1.2(i) App Tracking Transparency | The App Privacy answers say the app collects Name, Email, User ID, Contact Info and Product Interaction **for tracking**, but the app shows no ATT prompt. | The app does not track. The iOS build has no advertising SDK and no Google tag (server.js injects the Google tag only on served web pages; the app is a local bundle — `client/scripts/build-ios.mjs` never adds it). The App Privacy answers in App Store Connect were wrong and must be corrected (below). No ATT prompt is added, because adding one for an app that does not track is itself a rejection reason. |

---

## In-App Purchase — how it works now

- Native: `client/ios/App/App/StoreKitPlugin.swift` (StoreKit 2), registered by
  `AppViewController.swift`. No third-party SDK.
- Web layer in the app: `client/native/native-iap.js` (loaded on every bundled
  page after `native-shim.js`). In the app, every "buy" path lands on
  `public/purchase.html`, which buys through StoreKit and shows the App Store
  price, the plan's terms, Terms/Privacy/EULA links and **Restore purchases**.
  `checkout.html` (Stripe) forwards to it inside the app and is never shown.
- Server: `routes/applePayment.js` verifies each signed transaction with Apple's
  root certificates (`utils/appleIap.js`, `@apple/app-store-server-library`)
  and grants the plan with the same rules as the Stripe webhook. Renewals,
  cancellations and refunds arrive through App Store Server Notifications.
- People who bought on the website still sign in and get what they bought
  (guideline 3.1.3(b)); nothing in the app links to the website to buy.

### Product IDs (must match exactly)

Prefix = bundle ID `com.gaitp.passreadyprep` (env `APPLE_IAP_PRODUCT_PREFIX`).

| Product ID | Type in App Store Connect | Plan | Suggested price (USD) |
|---|---|---|---|
| `com.gaitp.passreadyprep.ncmhce.monthly` | Auto-Renewable Subscription (1 month) | NCMHCE Monthly | $29.99 |
| `com.gaitp.passreadyprep.ncmhce.pass3` | Non-Renewing Subscription | NCMHCE 3-Month Pass (90 days) | $79.99 |
| `com.gaitp.passreadyprep.ncmhce.guarantee` | Non-Consumable | NCMHCE Pass Guarantee | $149.99 |
| `com.gaitp.passreadyprep.guide` | Non-Consumable | The Complete NCMHCE Study Guide (digital) | $24.99 |
| `com.gaitp.passreadyprep.nce.monthly` | Auto-Renewable Subscription (1 month) | NCE Monthly | $24.99 |
| `com.gaitp.passreadyprep.nce.pass3` | Non-Renewing Subscription | NCE 3-Month Pass (90 days) | $59.99 |
| `com.gaitp.passreadyprep.nce.pass6` | Non-Renewing Subscription | NCE 6-Month Pass (180 days) | $89.99 |
| `com.gaitp.passreadyprep.nce.guarantee` | Non-Consumable | NCE Pass Guarantee — only on sale once `STRIPE_PRICE_NCE_GUARANTEE` (or `APPLE_IAP_OFFER_NCE_GUARANTEE=1`) is set | — |

Apple's price tiers end in .99, so the in-app prices differ slightly from the
website; the app shows the App Store price everywhere (`data-iap-tier`).
The two monthly subscriptions go in **separate subscription groups**
(NCMHCE and NCE are billed independently on the website too).

---

## App Store Connect — do before resubmitting

### A. In-App Purchases (3.1.1)

1. App → **Monetization → In-App Purchases** → create the four non-subscription
   products above (two Non-Consumable, two Non-Renewing… see table), with
   display name, description and a review screenshot each.
2. **Subscriptions** → group "NCMHCE" → `…ncmhce.monthly`; group "NCE" →
   `…nce.monthly`. Duration 1 month. Add localization and review screenshot.
3. Set prices (US storefront). Submit each product **with the app version**
   (first products must be attached to the version being reviewed: version
   page → In-App Purchases and Subscriptions → add them).
4. **Paid Apps agreement**: Agreements, Tax, and Banking → Paid Apps must be
   Active, with bank and tax forms done. Without it, products stay
   "Missing Metadata"/"Waiting" and StoreKit returns nothing.
5. App → **App Information → App Store Server Notifications**: set both
   Production and Sandbox URLs to
   `https://www.passreadyprep.com/api/payment/apple/notifications`, version 2.
6. Server environment (Render → Environment): `APPLE_APP_ID` = the app's
   numeric Apple ID (App Information → General Information). In-app purchases
   stay switched off ("temporarily unavailable" in the app) until this is set.
   Optional: run `node tools/apple/fetch-root-certs.js` and commit
   `certs/apple/*.cer` so the server never has to fetch Apple's roots itself.
7. **Sandbox tester** (Users and Access → Sandbox) for your own testing on a
   device signed into that sandbox Apple ID. App Review uses its own sandbox
   account; the server accepts sandbox transactions by default.
8. Xcode: no new capability is needed for StoreKit 2. `npm run build:ios`,
   `npx cap sync ios`, bump the build number, archive, upload.

### B. App Privacy (5.1.2(i)) — Account Holder or Admin only

App → **App Privacy → Edit**. For every data type currently declared
(Name, Email Address, Other Contact Info, User ID, Product Interaction), open
it and under "Is this data used for tracking purposes?" choose **No**. Keep
them **linked to the user**, purpose **App Functionality** (Product Interaction
also Analytics). Add **Purchases → Purchase History** (App Functionality, not
tracking) now that the app sells in-app. Leave "Other Contact Info" only if
something actually collects it — the app collects email and an optional name;
if nothing else, remove it. Then **Publish**. The exact answers are in
`docs/AppStore_Listing_iOS.md` §3.

### C. Review notes and demo account

`fastlane/metadata/review_information/notes.txt` is updated (`fastlane
metadata` uploads it, or paste it by hand). Make sure the demo account still
signs in on production and has full access.

---

## Reply to App Review (paste into App Store Connect)

Thank you for the review. We have addressed all three items in the new build (1.0, build 3) and updated App Store Connect.

**Guideline 3.1.1 — In-App Purchase**
All paid content is now available for purchase in the app through In-App Purchase. Every plan has a StoreKit product: NCMHCE Monthly (auto-renewable subscription), NCMHCE 3-Month Pass (non-renewing subscription), NCMHCE Pass Guarantee (non-consumable), The Complete NCMHCE Study Guide (non-consumable), and the NCE Monthly, NCE 3-Month Pass and NCE 6-Month Pass. The app no longer links out to purchase anywhere. Tapping any plan (Pricing on the start page, "See plans" on a locked study tool, "Choose" on the NCE page, or "Buy" on the study guide page) opens the in-app purchase screen with the App Store price, the plan's terms and a Restore Purchases button; the purchase sheet is Apple's. Purchases are verified server-side and unlock immediately. Customers who previously bought on our website can still sign in to access what they bought, as permitted by 3.1.3(b). The In-App Purchase products are submitted with this version.

**Guideline 5.1.1(v) — Account deletion**
In-app account deletion was already available (dashboard → bottom of the page → "Delete account") but it was easy to miss, so it is now also reachable from the "Account" button in the dashboard header: Start studying → sign in → Account (top right) → "Delete my account…" → enter password → confirm checkbox → "Delete my account" → confirmation screen. Deletion is immediate and permanent (account, study history and progress are erased); it does not require contacting us. A screen recording of the full flow on a physical device is attached and the path is in the review notes.

**Guideline 5.1.2(i) — App Tracking Transparency**
The app does not track users. It contains no advertising SDK, does not share data with data brokers, and does not link collected data with third-party data for advertising. The App Privacy information was answered incorrectly: the data types listed (name, email address, user ID, product interaction) are collected for app functionality only and are linked to the user, not used for tracking. We have corrected the App Privacy answers in App Store Connect so that no data type is marked as used for tracking, and added Purchase History (app functionality). Because the app does not track, it does not request App Tracking Transparency permission.

Demo account and step-by-step notes are in the App Review Information section. Thank you.

---

## Screen recording checklist (physical iPhone or iPad, 2–4 minutes)

Record with Control Center → Screen Recording. Start on the home screen.

1. Launch PassReady Prep → **Start studying** → **Sign in** → **Create account**
   with a throwaway email (e.g. review-oct@passreadyprep.com).
2. Open the start page → Pricing → tap **Get 3-month pass** → the in-app purchase
   screen → **Buy** → complete the sandbox purchase sheet → "Purchase confirmed".
   (On a device signed into a sandbox tester account. Alternatively show the
   study guide page → Buy.)
3. Tap **Restore purchases** once on the Account page (shows it exists).
4. Dashboard → **Account** (top right) → **Delete my account…** → enter the
   password → tick the confirmation → **Delete my account** → "Your account was
   deleted".
5. Sign in with the demo account to show paid content opens.

Attach the video in the reply and put the deletion path in the review notes.
