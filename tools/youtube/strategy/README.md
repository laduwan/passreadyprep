# Strategy videos (top-of-funnel)

Two scripted videos that catch candidates searching "how hard is the NCMHCE" /
"NCMHCE format" before they study by diagnosis:

1. `01-format-2026` — NCMHCE Exam Format Explained (2026)
2. `02-study-plan-2026` — How I'd Study for the NCMHCE in 2026

Each has a word-for-word script (`-script.md`), an upload sheet (`-sheet.txt`)
and two thumbnail options: `thumbnail-*.jpg` (presenter photo + title — use these) or `strategy-*.jpg` (flat brand cards, for A/B tests).

Two ways to publish:
- **Before the API audit is approved**: upload in Studio, paste the sheet's
  title and description, set the thumbnail, tick the altered-content
  disclosure, make the playlist. (API uploads are locked Private until then.)
- **After the audit**: one command does all of it (title, description, tags,
  thumbnail, playlist, synthetic-media disclosure, public visibility):
  `node tools/youtube/youtube.js upload tools/youtube/strategy/video --sheets tools/youtube/strategy --yes`
  The sheets' `Thumbnail:`, `Synthetic:` and `Visibility:` lines drive it.

Either way: end screens and pinned comments are Studio-only — link the format
video from the study-plan video, and pin a comment on each.

Keep the priority ladder as a tease — one rung on camera, the full ladder
stays inside the product. In January, refresh both titles to 2027 and re-shoot
the format video's 2027 section once NBCC's new outline applies.
