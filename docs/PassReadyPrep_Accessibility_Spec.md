# PassReady Prep — Accessibility-First Spec

Accessibility is a **founding requirement**, not a later feature. This defines what
"accessible from Phase 1" concretely means, so it's designed in from the first
screen. The mission: a clinician can study and answer **however they work** —
speaking, typing, tapping, or with a screen reader — and no one is locked out.

---

## The standard to hit

- **WCAG 2.2, Level AA** — the recognized benchmark for web accessibility. This is
  the target for every screen. (AAA where it's cheap to reach, e.g., higher
  contrast.)
- **Section 508 + ADA** — conforming to WCAG AA is also what satisfies U.S.
  Section 508 and the ADA expectations institutions are held to. This is what
  unlocks the buyers who *pay for accessible tools* (university disability
  services, vocational rehab, accommodation budgets).
- **VPAT** — eventually produce a Voluntary Product Accessibility Template (the
  conformance document institutions ask for before purchasing). Build to AA now so
  that document is honest later.

---

## The core principle: multiple equivalent paths

**Voice-first for those who need it — never voice-only.** Every task must be doable
by *each* of: voice, keyboard, touch, and screen reader. Voice is *added* access,
not *required* access. The fastest way to fail disabled users is to make any one
modality the only path — voice-only locks out deaf and hard-of-hearing users;
mouse-only locks out motor- and vision-impaired users.

---

## The access toolkit (what the platform must provide)

- **Speak-to-answer (voice input).** Students can speak their choice and reasoning
  anywhere an answer is given — not just in the examiner. The flagship access
  feature for mobility, motor, and vision limitations.
- **Read-aloud (text-to-speech).** Every case, question, option, and piece of
  feedback can be read aloud, with play / pause / replay and adjustable speed.
- **Captions + live transcript.** The voice examiner conversation always shows a
  synchronized text transcript, and read-aloud audio always has its source text.
  This is what keeps voice features usable by deaf and hard-of-hearing users.
- **Keyboard-complete.** Every action works with keyboard alone — Tab/Shift-Tab to
  move, Enter/Space to act, arrow keys for option lists, visible focus, no traps,
  documented shortcuts. No mouse-only or hover-only interactions.
- **Screen-reader support.** Semantic HTML and ARIA labels throughout; dynamic
  changes (the examiner's reply, score updates, "correct/incorrect") announced via
  live regions so they're spoken, not silently rendered. Test on VoiceOver, NVDA,
  and TalkBack.
- **Adjustable timing.** The timed-exam mode offers extended time, pause, and a
  fully untimed practice option — mirroring the real exam accommodations
  (e.g., 1.5×/2× time) your users already qualify for. Never a hard, unchangeable
  countdown.
- **Visual flexibility.** High-contrast mode, resizable/large text without breaking
  layout, a dyslexia-friendly font option, and a reduced-motion setting. (These map
  to the `prefs.accessibility` fields already in the data model.)
- **Motor-friendly targets.** Large tap targets, generous spacing, no precise
  gestures or timing required.

---

## WCAG mapped to the platform (POUR, in plain terms)

- **Perceivable** — read-aloud, transcripts/captions, AA color contrast, resizable
  text, no information conveyed by color alone (e.g., "correct" never shown by
  green *only* — also a checkmark/word).
- **Operable** — full keyboard + voice operation, adjustable/optional time limits,
  visible focus, skip-to-content links.
- **Understandable** — plain language, consistent navigation, errors clearly named
  with a suggested fix, nothing changes unexpectedly.
- **Robust** — valid semantic markup + ARIA so current and future assistive tech
  works.

---

## Gotchas in *your* content (flag these now)

- **Drag-based question types.** The case bank's `cardSort`, `sequencing`, and
  `matching` interactions, and the Decision Trees, are drag-heavy. Each needs a
  **non-drag alternative** — move-by-keyboard, tap-to-place, or speak-the-order —
  or it's unusable for motor- and screen-reader users. Design the alternative
  alongside the drag version, not after.
- **Timed exam.** See adjustable timing above — the default timer must be
  overridable.
- **Audio without text.** Any audio the examiner produces must have its transcript;
  any text it reads aloud is already text. No audio-only dead ends.

---

## What "accessible from Phase 1" means (baseline checklist)

Ships from day one, non-negotiable:

1. Semantic, screen-reader-friendly markup on every screen (headings, labels, ARIA).
2. Full keyboard operability — nothing requires a mouse.
3. Read-aloud on cases and questions (browser voice is fine to start).
4. Speak-to-answer for choosing and explaining an answer.
5. Live transcript wherever there's audio.
6. AA color contrast, resizable text, high-contrast + dyslexia-font + reduced-motion
   toggles.
7. Adjustable/optional timing in any timed mode.
8. Non-drag alternative for every drag interaction.

Deferred to later phases (enhancements, not foundations): the full 90-min
conversational examiner, premium TTS voices, advanced adaptive features.

---

## Testing (do this continuously, not at the end)

- **Automated:** run axe (or similar) in the build so regressions are caught early.
- **Manual:** keyboard-only pass and a screen-reader pass (VoiceOver + NVDA) on
  every new screen.
- **Real users:** co-test with physically challenged clinicians — the community
  you're building this for. Their feedback catches what tools can't, and it's the
  strongest possible proof for your positioning and for institutional buyers.

---

## Why this is also your strategy

Accessible-first isn't only the right thing — it's your moat. AATBS and the dated
competitors are desktop-heavy and inaccessible; "built to be used by every
clinician, however they work" is a position they can't quickly copy, and AA/508
conformance is the key that opens institutional and accommodation-funded buyers a
generic competitor can't reach.
