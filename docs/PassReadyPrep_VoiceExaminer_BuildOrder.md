# PassReady Prep — Voice Examiner & Build Order

Two things: (1) exactly how the spoken "examiner" conversation works, and (2) the
order to build the platform so voice never blocks your launch.

**Core assumption:** the assessment stays multiple-choice underneath (that's what
the real NCMHCE is). The student answers by voice and talks through their
reasoning; the examiner *coaches* by voice. Scoring comes from the option they
pick (your existing weighted, evidence-cited system). The spoken reasoning drives
the coaching, not the score. If you instead want fully open oral answers with no
options, the conversation flow changes substantially.

---

## Part 1 — How the examiner conversation works

Three steps repeat under the hood: **app listens → Claude thinks & grades → app
talks back.** Claude is always the brain; the voice services are just ears and
mouth.

### Flow for one case

1. **Orient.** Examiner greets and reads the intake aloud, sets the scene.
   *"Here's your client, Marcus, 29. He's come in after three ER visits with chest
   tightness and a racing heart, all cardiac workups negative. Ready?"*

2. **Per question (×5):**
   - **Examiner asks** — reads the question and the four options aloud.
   - **Student speaks** — their pick **and** (encouraged) why.
     *"I'd go with B, exposure therapy, because the avoidance is the real problem."*
   - **Claude evaluates** — maps the spoken pick to the option id (→ the weighted
     score), and reads the reasoning for coaching cues.
   - **Examiner coaches** — short, conversational, grounded in the case's evidence:
     - *Correct:* affirm + reinforce *why*, citing the source.
       *"Right. First-line for panic is exposure, per the practice guidelines — and
       you nailed why: the avoidance is what maintains it."*
     - *Incorrect:* nudge first, then reveal + name the trap.
       *"Hmm — walk me through why not the medication-only option? ... Here's the
       thing: that one skips the exposure learning, which is the common miss. The
       keyed answer is B."*

3. **Debrief.** After five: the examiner reports the score (from the structured
   weights), names the strongest and weakest domain (from the domain breakdown),
   and gives one or two study pointers tied to the cited sources. Save the session.

### What Claude gets and returns each turn (keeps grading honest)

Claude is handed, per question: the case, the current stem + 4 options, the
**keyed answer with its explanation and source**, the distractor explanations
(including the common mistake), and the student's transcribed answer.

Claude returns: (a) the **selected option id** → feeds your normal scoring, and
(b) the **examiner's spoken line** → goes to text-to-speech. Because the feedback
is generated *from the evidence layer*, the spoken coaching stays as sourced and
accurate as the written rationales — voice doesn't loosen the rigor.

### Conversation rules that make it feel real
- Keep examiner turns short (1–3 sentences); let the student interrupt.
- If speech isn't caught or the student is silent, re-prompt once, then offer to
  tap. **Tap-to-answer is always available** as a fallback.
- Read-aloud is the *same* engine — examiner mode includes reading the case/
  questions aloud, so you get plain read-aloud for free.

---

## Part 2 — Build order (voice never blocks launch)

Each phase ships something real. Voice rides on top of a stable base.

### Phase 0 — Foundations
Repo, Render static site + one Node service, MongoDB, **accounts/auth**, Stripe,
and the data model. The skeleton everything hangs on.

### Phase 1 — Core app, no voice  *(this is already launchable)*
Import the NCMHCE cases (pipeline output → `ContentItem`), the case player with
**tap-to-answer**, study + timed modes, progress/weak-area analytics, and the
**text** AI debrief (Claude, written). You could sell this on its own.

### Phase 2 — Read-aloud
Add spoken narration of cases and questions. Start on the browser's built-in voice
(free) to validate, then upgrade the voice provider. Accessibility win, and it's
the same voice you'll reuse next.

### Phase 3 — Conversational examiner  *(the differentiator)*
Add the listening step (speech-to-text) and the turn loop above, with spoken
coaching. **Meter voice minutes against subscription tier** so costs stay
predictable. This lands on a base that's already earning.

### Why this order
- A voice glitch can't delay your launch — the product is live at Phase 1.
- Read-aloud (Phase 2) is a cheap stepping stone that de-risks the hard part.
- The examiner (Phase 3) reuses the same voice + the same Claude grading you
  already have, so it's an add-on, not a rebuild.

---

## What to watch (the honest hard parts)
- **Latency/turn-taking** — the back-and-forth must feel natural; budget time to
  tune pauses and interruptions. This is the real engineering, not the AI.
- **Voice cost** — real-time voice is per-minute; cap it by tier and cache the
  read-aloud audio so you synthesize each case once.
- **Fallbacks everywhere** — mic denied, noisy room, accent misreads: tap-to-answer
  always works, so a voice failure degrades gracefully instead of blocking study.
