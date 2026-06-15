# PassReady Prep — Platform Data Model (v1)

Exam-agnostic foundation for a multi-exam study platform. NCMHCE ships first;
NCE, ASWB, EPPP, LMFT, and BCBA slot in later with **no rebuild**. Accounts and
cross-device progress are in from day one. Voice is a first-class capability, not
a bolt-on.

Stack assumption: MongoDB (Mongoose) + Node/Express + React, same tools as
CounselorReady. Snippets below are Mongoose-flavored.

---

## Design principles

1. **`Exam` is a first-class entity.** Everything (content, blueprint, sources,
   progress, billing) hangs off an exam. Adding an exam = adding a row + its
   blueprint and reference library, not a new codebase.
2. **Content is polymorphic by `format`.** NCMHCE is case-simulation format; NCE,
   EPPP, and ASWB are knowledge-MCQ. One `ContentItem` collection holds both via a
   discriminated payload. New formats extend the enum, not the schema.
3. **Documentary evidence travels with every item**, every format (the
   `references` + per-question evidence you already built).
4. **Claude stays the brain.** Voice providers are ears and mouth only; reasoning,
   grading, and the evidence layer remain Claude-side (see Voice Architecture).
5. **Progress is server-side** (Mongo), so a learner picks up across devices.

---

## Core entities

### Exam
```js
const ExamSchema = new Schema({
  key:        { type: String, unique: true },   // 'ncmhce', 'nce', 'aswb', 'eppp', 'lmft'
  name:       String,                            // 'National Clinical Mental Health Counseling Exam'
  profession: String,                            // 'counseling', 'social-work', 'psychology', 'mft'
  board:      String,                            // 'NBCC', 'ASWB', 'ASPPB', 'AMFTRB'
  formatsSupported: [String],                    // ['case_sim'] | ['mcq'] | ['case_sim','mcq']
  domainWeights: Schema.Types.Mixed,             // { counseling:0.4, intake:0.2, treatment:0.2, ethics:0.1, core:0.1 }
  blueprintId:        { type: ObjectId, ref: 'Blueprint' },
  referenceLibraryId: { type: ObjectId, ref: 'ReferenceLibrary' },
  voice: {
    readAloud:    { type: Boolean, default: true },   // TTS narration available
    examinerMode: { type: Boolean, default: false },  // conversational voice tutor available
  },
  status:     { type: String, enum: ['live', 'coming_soon'], default: 'coming_soon' },
});
```

### Blueprint (per exam) — generalizes your current `blueprint.js`
```js
const BlueprintSchema = new Schema({
  examId: { type: ObjectId, ref: 'Exam' },
  totalTarget: Number,                           // 200 for NCMHCE
  categories: [{
    name: String, target: Number,
    difficulty: { easy: Number, medium: Number, hard: Number },
    diagnoses: [{ name: String, code: String }], // or 'topics' for MCQ exams
  }],
});
```

### ReferenceLibrary (per exam) — generalizes your `references.js`
```js
const ReferenceLibrarySchema = new Schema({
  examId: { type: ObjectId, ref: 'Exam' },
  sources: [{ key: String, tier: String, body: String, citation: String, use: String }],
});
```

### ContentItem — the polymorphic unit of practice
```js
const ContentItemSchema = new Schema({
  examId:     { type: ObjectId, ref: 'Exam', index: true },
  format:     { type: String, enum: ['case_sim', 'mcq', 'cluster'], index: true },
  externalId: String,                            // 'ncmhce-G031' from the pipeline
  title: String, category: String,
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'] },

  // documentary evidence — ALL formats
  references: [{ id: String, source: String, detail: String }],

  // voice/audio cache — ALL formats
  audio: {
    narrationVoiceId: String,
    narrationUrl: String,                        // cached TTS of the vignette/stem
    provider: String,                            // 'cartesia' | 'elevenlabs' | 'openai' | 'browser'
    generatedAt: Date,
  },

  // review gate
  status:     { type: String, enum: ['draft', 'sme_review', 'published'], default: 'draft' },
  reviewedBy: { name: String, credential: String, date: Date },

  // format-specific payloads (exactly one present)
  caseSim: Schema.Types.Mixed,   // the NCMHCE dual-mode case (narrative, diagnosis, questions[], evidenceRef)
  mcq:     Schema.Types.Mixed,   // { stem, options[], correctId, rationale, evidenceRef, domain }
});
```
The NCMHCE pipeline output drops straight into `caseSim`. A future NCE/EPPP item
is the same record with `format: 'mcq'` and an `mcq` payload — same evidence,
same audio, same review gate.

### User (accounts from day one)
```js
const UserSchema = new Schema({
  email: { type: String, unique: true }, passwordHash: String,
  name: String, profession: String,
  examsEnrolled: [{ type: ObjectId, ref: 'Exam' }],
  subscription: { tier: String, stripeCustomerId: String, status: String, currentPeriodEnd: Date },
  prefs: {
    voice: { enabled: Boolean, voiceId: String, autoPlay: Boolean, speed: Number },
    accessibility: { highContrast: Boolean, dyslexiaFont: Boolean },
  },
  createdAt: { type: Date, default: Date.now },
});
```

### Attempt + Progress (cross-device)
```js
const AttemptSchema = new Schema({
  userId: ObjectId, examId: ObjectId, contentItemId: ObjectId,
  mode: { type: String, enum: ['study', 'timed'] },
  responses: [{ questionId: String, selectedOptionId: String, correct: Boolean, weight: Number }],
  score: Number,
  domainBreakdown: Schema.Types.Mixed,           // { counseling: 0.8, intake: 0.6, ... }
  voiceUsed: Boolean,
  startedAt: Date, completedAt: Date,
});
// Progress = a rollup per (userId, examId): mastery by domain/category over time,
// drives the "weak areas" analytics and adaptive item selection.
```

### Subscription tiers
Stripe, gated per exam or platform-wide. (e.g., $29/mo single exam, bundle pricing
as exams are added.) `User.subscription` is the source of truth; Stripe webhook
keeps it current.

---

## Voice Architecture

Two distinct voice features, two different builds. Decide which you want for v1.

### Mode A — Read-aloud (TTS only)  *(low cost, fast)*
Narrate vignettes and questions for accessibility and audio study. Cache the audio
on the `ContentItem.audio` field so you pay for synthesis once per item, not per
play.
- **Start free:** the browser's built-in Web Speech API (SpeechSynthesis) — $0,
  good enough to ship and validate.
- **Upgrade for quality:** OpenAI TTS or Amazon Polly (simplest), or
  Cartesia / ElevenLabs Flash / Deepgram Aura for the most natural, low-latency
  voices. Swappable via `audio.provider`.

### Mode B — Conversational examiner (speech-to-speech)  *(richer, bigger build)*
The learner speaks; an AI examiner asks, probes, and debriefs by voice — which
mirrors how clinical reasoning is actually assessed. **Critical design choice:**
use a **chained pipeline**, not a unified speech-to-speech model, so Claude stays
the brain and keeps your evidence-cited grading:

```
mic audio → STT → Claude (reasoning + grading + evidence layer) → TTS → speaker
```
- **STT:** Deepgram Nova-3 (low-latency, cost) or ElevenLabs Scribe v2 Realtime.
- **Brain:** Claude (your existing grading + documentary-evidence prompts).
- **TTS:** Cartesia / ElevenLabs / Deepgram Aura (sub-200ms for natural turns).
- **Orchestration:** Pipecat or Vapi if you want turn-taking/interruption handled;
  or a simple request/response version first.

Avoid a single speech-to-speech API (e.g., a realtime model that does its own
reasoning) for the examiner — it would replace Claude's clinical judgment and your
citation rigor with the voice vendor's, which defeats the documentary-evidence
work.

### VoiceSession (only needed for Mode B)
```js
const VoiceSessionSchema = new Schema({
  userId: ObjectId, examId: ObjectId, contentItemId: ObjectId,
  turns: [{ role: { type: String, enum: ['learner', 'examiner'] }, text: String, audioUrl: String, ts: Date }],
  stt: String, tts: String, llm: String,         // provenance for audit
  startedAt: Date, endedAt: Date,
});
```

---

## How your existing work maps in

- `blueprint.js` → an `Exam` + its `Blueprint` document (NCMHCE).
- `references.js` → that exam's `ReferenceLibrary`.
- Each generated/seed case → a `ContentItem` with `format: 'case_sim'`, payload in
  `caseSim`, `references` copied up, `status` starting at `sme_review`.
- `validateCases.js` / `dedup.js` stay as the build-time gate before items are
  imported as `published`.
- The documentary-evidence manual governs the `status` → `published` review gate.

Adding exam #2 (say NCE) = new `Exam`, new `Blueprint`, new `ReferenceLibrary`, and
the generator pointed at an MCQ format. The platform code doesn't change.
