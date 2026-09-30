# PassReady Prep — App Store submission drafts (iOS, US storefront)

Paste-ready text for App Store Connect. Character limits are Apple's; counts
were checked when this was written. Launch plan: **United States only**, free
download, full access purchased on passreadyprep.com (US-storefront external
purchase link).

---

## 1. App information

| Field | Value |
|---|---|
| Name (30) | PassReady Prep |
| Subtitle (30) | NCMHCE Practice & Case Sims |
| Bundle ID | com.gaitp.passreadyprep |
| Primary category | Education |
| Secondary category | Medical *(optional; leave blank if unsure)* |
| Price | Free |
| Availability | United States only |
| Support URL | https://www.passreadyprep.com/policies.html#contact |
| Marketing URL | https://www.passreadyprep.com/ |
| Privacy Policy URL | https://www.passreadyprep.com/privacy.html |

### Promotional text (170)

Know you're ready before you sit for the NCMHCE. Clinical case simulations scored the way the exam scores you, plus a readiness number that tracks where you stand.

### Keywords (100, comma-separated, no spaces)

ncmhce,counseling,lpc,lmhc,licensure,exam,prep,clinical,case,simulation,dsm,flashcards,therapist

### Description (4000)

Know you're ready before you sit for the NCMHCE.

PassReady Prep helps counselors preparing for the NCMHCE (the clinical mental health counseling licensure exam for LPCs and LMHCs) practice with realistic cases in the current exam format, get scored with weighted answers, and see exactly where they stand.

CLINICAL CASE SIMULATIONS
• 270+ NCMHCE-style cases: read the intake and follow-up sessions, then make the clinical calls across every exam domain
• Weighted scoring from −2 to +3, so a confident-but-wrong decision costs you the way it would on exam day
• Evidence-based feedback after each question, or held to the end in exam mode
• AI debrief that walks through your reasoning after each case

TIMED MOCK EXAM
• Full-length, blueprint-weighted mock exams under the clock
• Domain-by-domain breakdown and complete answer review

KNOW WHERE YOU STAND
• A readiness score weighted by how heavily each domain counts on the exam
• A study plan built around your exam date and your weakest domains
• Progress syncs to your account, so you can switch between phone and web

MORE WAYS TO STUDY
• Intake interview simulator — practice the clinical interview by voice or text
• Microskills responder for counseling responses
• 250+ spaced-repetition flashcards and a knowledge drill
• Clinical decision trees for tricky differentials
• DSM-5-TR quick reference with 90+ diagnoses
• Next Best Step and What to Assess Next drills, theories and pioneers, and a clinical podcast

PASS GUARANTEE
Eligible plans include the PassReady pass guarantee. See passreadyprep.com for full terms.

GETTING STARTED
Download free and try sample cases. Create an account to start a free trial of the full library. Full access is available by subscription or one-time pass, purchased on passreadyprep.com.

PassReady Prep is an independent study tool. It is not affiliated with, endorsed by, or sponsored by the National Board for Certified Counselors (NBCC). NCMHCE is a trademark of NBCC. Simulations are for exam preparation only and are not clinical advice.

Terms: https://www.passreadyprep.com/policies.html#terms
Privacy: https://www.passreadyprep.com/privacy.html

---

## 2. Age rating questionnaire (suggested answers)

Answer honestly for the content; these are the likely-relevant items:

| Question | Suggested answer | Why |
|---|---|---|
| Medical/Treatment Information | Frequent/Intense | The whole app is clinical mental-health case material |
| Mature/Suggestive Themes | Infrequent/Mild | Vignettes reference suicide risk, abuse, substance use in a clinical context |
| Violence, sexual content, profanity, gambling, horror | None | — |
| Unrestricted web access | No | The app only opens its own pages; other sites open in Safari |
| User-generated content shared with others | No | Answers are private to the user |

Your privacy policy says the service is not for anyone under 18. Apple will
compute the rating; if it comes out below 17+, that's fine — the policy still
governs account creation.

---

## 3. App Privacy ("nutrition label")

**Tracking:** No. The app does not track users across other companies' apps or
websites and has no advertising SDKs. (No App Tracking Transparency prompt needed.)

Data types to declare — all **linked to the user**, **not used for tracking**:

| Apple category → type | Purposes | What it is |
|---|---|---|
| Contact Info → Email Address | App Functionality | Account sign-in, password reset, account email (Brevo) |
| Contact Info → Name | App Functionality | Optional name on registration |
| Identifiers → User ID | App Functionality | Account ID tying progress to the account |
| Purchases → Purchase History | App Functionality | Plan/tier and subscription status (payments processed by Stripe on the website) |
| User Content → Other User Content | App Functionality | Case answers, typed/spoken responses in the intake and microskills tools (sent to Anthropic to generate feedback), feedback/suggestions |
| Usage Data → Product Interaction | App Functionality, Analytics | Study activity, streaks, attempts, flashcard progress |

**Do not declare:**
- **Payment Info** — card details are entered on Stripe's page on the website, never in the app.
- **Audio Data** — speech in the intake simulator is converted to text by the
  system speech service; the app sends only the text. *(Re-check if that
  feature ever uploads audio.)*
- **Location, Contacts, Health, Photos, Browsing History, Diagnostics** — not collected.

Anonymous page-view counting (salted hash, no raw IPs, not linked to the
account) does not need to be declared as linked data.

**Third parties that process data** (for your reference; Apple doesn't ask for names):
Anthropic (AI feedback), ElevenLabs (voice for text replies), Stripe (payments,
website), Brevo (email), Google Translate (only when the translate widget is used),
MongoDB Atlas / Render (hosting).

---

## 4. App Review information

**Sign-in required:** Yes — provide a demo account.
- Username: *(create a dedicated review account with full paid access, e.g. appreview@passreadyprep.com)*
- Password: *(enter in App Store Connect only — do not commit it anywhere)*

**Notes for the reviewer (paste):**

PassReady Prep is an NCMHCE (counseling licensure exam) study app. The demo
account above has full access.

How to review:
1. Launch the app → tap "Start studying" to open the study dashboard.
2. Open any case simulation, the timed mock exam, flashcards, decision trees, and
   the intake interview simulator (uses the microphone and speech recognition;
   typing also works).
3. Account deletion: Start studying → scroll to the bottom of the dashboard →
   "Delete account". Monthly subscribers can cancel from "Manage subscription"
   in the same place.

Purchases: This build is distributed on the United States storefront only.
Subscriptions and passes are purchased on our website via an external link, as
permitted for US storefront apps; no in-app purchase is offered. Users who
already have an account can sign in to access what they purchased.

AI features: Case, intake and microskills feedback is generated with Anthropic's
API from the user's answers. Content is for exam preparation, not clinical advice.

Contact: support@passreadyprep.com

---

## 5. Before you press Submit

- [ ] Demo account created and verified to have full access on production
- [ ] Stripe Customer Portal enabled (Manage subscription works)
- [ ] Build uploaded from Xcode (version 1.0, build 1) and tested via TestFlight on a real iPhone, including the intake mic
- [ ] Screenshots: at least 3 for the 6.9" iPhone size (landing, a case question, results/readiness). ⌘S in the Simulator saves one.
- [ ] Availability set to United States only
- [ ] Privacy policy URL loads, and mentions account deletion (it does: "If you delete your account…")
