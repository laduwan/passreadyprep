# Writing NCE seed questions (no API)

NCE questions are hand-authored into `tools/nce/seed/*.js` (for example in a
Claude Code session on the subscription), checked with `tools/nce/check-nce.js`,
loaded with `tools/nce/import-nce.js` (status `sme_review`), printed for review,
and published from Admin → NCE Questions. The admin "Generate" button (paid API)
is optional.

## File format

```js
// tools/nce/seed/<domain>-<n>.js
module.exports = [
  {
    id: 'nce-s-eth-001',            // nce-s-<prefix>-NNN, unique, never reused
    domain: 'ethics',               // utils/nceBlueprint.js DOMAIN_KEYS
    cacrep: 'professional_orientation', // CACREP_KEYS
    topic: 'duty to warn and protect',  // a topic string from that domain's list
    difficulty: 'medium',           // easy | medium | hard
    stem: 'A client tells a counselor ... What should the counselor do FIRST?',
    options: [
      { id: 'a', text: '...', isCorrect: false, rationale: 'Why this is wrong.' },
      { id: 'b', text: '...', isCorrect: true,  rationale: 'Why this is right.' },
      { id: 'c', text: '...', isCorrect: false, rationale: '...' },
      { id: 'd', text: '...', isCorrect: false, rationale: '...' },
    ],
    rationale: 'Teaching explanation of the concept behind the key (2-4 sentences).',
    references: [{ source: 'ACA Code of Ethics', detail: 'B.2.a Serious and Foreseeable Harm' }],
  },
];
```

Id prefixes: `eth` ethics, `ass` intake, `clf` clinical_focus, `trt` treatment,
`cou` counseling, `cor` core.

## Rules the checker enforces (items failing any are rejected)

- Exactly 4 options, ids `a`,`b`,`c`,`d` in order, exactly one `isCorrect: true`.
- **Length parity:** longest option ÷ shortest option ≤ 1.25, measured in
  characters. The only exemption is when every option is under 40 characters.
- **Key not the longest:** if the correct option is the longest, it must be
  within 10% of the shortest. In practice, make a distractor the longest or keep
  all four nearly equal.
- No `always`, `never`, `absolutely`, `categorically`, `universally` in any
  distractor (whole words, any case).
- Every option has a `rationale`. The item has a `rationale`.
- 1–2 `references`, each `source` copied EXACTLY from the approved list in
  `utils/nceExam.js` (`NCE_SOURCES`), with a specific `detail` (code section,
  criterion, chapter concept).
- `cacrep`, `topic` and `difficulty` present. No near-duplicate stems across
  the whole seed bank.

## Quality rules (reviewers check these)

- Original items in NCE style; never copy real or published exam items.
- Factually exact: theorist ↔ theory, dates, test properties, ACA code sections,
  DSM-5-TR criteria. If unsure of a fact, write a different item.
- One clearly best answer. Distractors are plausible to a partly prepared
  candidate and wrong for a nameable reason.
- Stems under ~90 words; short scenarios welcome. Use FIRST/BEST/MOST sparingly
  and in capitals when used. No "all/none of the above", no "both A and B".
- Spread the key across a/b/c/d (no letter above ~35%), and spread difficulty
  (~30% easy, ~50% medium, ~20% hard).
- Inclusive, non-stereotyping client descriptions; vary age, culture, setting.

Run `node tools/nce/check-nce.js tools/nce/seed/<file>.js` until it exits clean.

## Evidence record (per question)

Every question can be pulled up by ID with its full backing: content, key and
per-option rationales, each reference resolved to a full citation
(`utils/nceSources.js`), today's quality-gate result, origin, SME sign-off and
the dated audit trail of every import, edit and status change.

- Admin → NCE Questions → **Look up a question's evidence record**, or the
  **Record** button on any question. Print or save as PDF.
- **All at once:** Admin → NCE Questions → **Print all records** (published,
  in review, or all), or `node tools/nce/item-record.js --all [--db]
  [--status=published] [--separate]` → `docs/records/nce-evidence-records.html`:
  an index, then one record per page (`--separate` also writes one file each).
- One question: `node tools/nce/item-record.js <id>` (seed files, no database)
  or `... <id> --db` (live record incl. audit trail) → `docs/records/<id>.html`.

New sources must be added to `utils/nceSources.js` with a full citation before
an item may cite them.
