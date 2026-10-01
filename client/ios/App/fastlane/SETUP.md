# fastlane — PassReady Prep iOS

Run everything from `client/ios/App`.

## One-time setup (on the Mac)

1. Install: `brew install fastlane`
2. App Store Connect → **Users and Access → Integrations → App Store Connect API** →
   **Generate API Key** (role **App Manager**). Note the **Key ID** and **Issuer ID**,
   download the `.p8` (you can only download it once).
3. Keep the key outside the repo:
   ```
   mkdir -p ~/.appstoreconnect
   mv ~/Downloads/AuthKey_*.p8 ~/.appstoreconnect/AuthKey.p8
   chmod 600 ~/.appstoreconnect/AuthKey.p8
   ```
4. `cp fastlane/.env.example fastlane/.env` and fill it in. `.env` is gitignored.

## Commands

| Command | What it does |
|---|---|
| `fastlane metadata` | Uploads description, keywords, subtitle, URLs, review notes + demo account, and any screenshots in `fastlane/screenshots/en-US/`. Does not submit. |
| `fastlane beta` | `npm run build:ios` + `cap sync`, builds the app with the next build number, uploads to TestFlight. |
| `fastlane release` | `beta` then `metadata`. |

## Editing the listing

Text lives in `fastlane/metadata/` (one file per field). Limits: subtitle 30,
promotional text 170, keywords 100, description 4000 characters.

## Screenshots

Save 6.9" iPhone simulator screenshots (⌘S) into `fastlane/screenshots/en-US/`.
Files sort by name, so prefix them `1_`, `2_`, … When the folder has images,
`fastlane metadata` replaces the screenshots in App Store Connect with them.

## Still done by hand in App Store Connect

App Privacy answers, age rating, price/availability (US only), and pressing
**Submit for Review**. See `docs/AppStore_Listing_iOS.md`.
