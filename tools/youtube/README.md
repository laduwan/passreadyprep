# YouTube channel tidy-up

`youtube.js` fixes titles, Part 1 / Part 2 links, playlists and duplicate copies
across the whole channel in one run, so you don't have to edit each video in
YouTube Studio.

You still **upload** in Studio: drag in a batch of files and let them process.
Then run the script. (Videos uploaded through the API by an unreviewed Google
project are locked to Private by YouTube, so the script only edits videos, it
doesn't upload them.)

## Status (as of 2026-10-21)

**Done:** every uploaded video has its sheet's title, description (with
chapters) and tags; Part 1 / Part 2 links on full cases; all 22 uploaded full
cases and minis public with thumbnails; practice Shorts scheduled one a day at
7 pm through Dec 5; duplicate copies unlisted; videos sorted into playlists.

**Still open:**
1. Minis D257, D249, D250, D230, D242, D240 (sheets 23–28) are not uploaded yet.
   Sheets and thumbnails are ready; after uploading, run the four steps below.
2. `sheets/02-D106-full-part2.txt` has a broken description (a lone `[`, and the
   "Part 2 of 2 … The case:" paragraph is missing). Fix the sheet, then run `fix`.
3. Quiz posts (15, three per NCMHCE content area) are on a copy-paste page; post
   each one after its video is public.
4. Videos whose audio language is `zxx` in Studio are handled (the script leaves
   that field out); YouTube's uploads list misses some private videos, so the
   script also searches the channel.

**Every new batch:** upload in Studio, add the sheets to `tools/youtube/sheets/`, then

```
node tools/youtube/youtube.js fix --sheets tools/youtube/sheets --yes
python3 tools/youtube/make-thumbnails.py
node tools/youtube/youtube.js thumbs --yes
node tools/youtube/youtube.js publish --yes
```

## Uploading by API (after the audit)

`youtube.js upload` can upload a folder of videos with titles/descriptions/tags
from the sheets — but ONLY use it once Google approves the project's YouTube API
audit. Until then, API uploads are permanently locked to Private (Studio uploads
are not), which is why the normal flow uploads in Studio.

One-time: apply for the audit with the Google account that owns the
`PassReady YouTube` Cloud project — search "YouTube API Services - Audit and
Quota Extension Form", describe it as a private CLI managing the owner's own
channel. Approval usually takes days to a few weeks.

Then, instead of dragging files into Studio:

```
node tools/youtube/youtube.js upload ~/Videos/next-batch --sheets tools/youtube/sheets
node tools/youtube/youtube.js upload ~/Videos/next-batch --sheets tools/youtube/sheets --yes
```

Each upload costs 1,600 quota (about 6/day on the default 10,000). Case videos
arrive Private; run `fix`, `thumbs`, `publish` as usual afterwards. Files
already on the channel are skipped, so re-runs are safe.

Sheets without a `Case:` line (the strategy videos) are "named sheets":
matched to a video file by name, and their `Thumbnail:`, `Synthetic: yes` and
`Visibility: public` lines are applied in the same run — no fix/thumbs pass
needed.

## Title scheme (since 2026-10-28)

Titles lead with the diagnosis so the videos rank for what candidates search
("panic disorder NCMHCE"), with the hook after it:

- Full cases: `<Diagnosis> NCMHCE Case Walkthrough — Full Case, Part N | <hook>`
- Minis: `<Diagnosis> NCMHCE Mini Case: <story title>`
- Practice Shorts: `<Diagnosis> NCMHCE Practice: <question> | <vignette>` (vignette dropped if over 100 chars)

The first description line is a keyword hook; the passreadyprep.com link sits
right under it. Diagnosis is also in the tags. To apply any later edits, run
`fix` as usual.

## What it does

- Finds each video by the case code in its **file name**, e.g. `06 D140 P2 · …`
  (`P1`/`P2` = full case, `mini` = mini walkthrough, `q3` = practice question).
  Keep naming files that way.
- Sets the title. Wording comes from `config.js`, which you can edit.
- Puts `▶ Part 1` / `▶ Part 2` links at the top of both parts' descriptions.
  The rest of your description is not touched.
- Adds each video to its playlist in series order, even if you uploaded it out of order.
- Lists extra copies, hidden parts and missing parts.

Nothing changes on YouTube until you add `--yes`.

## One-time setup (about 15 minutes)

### 1. Make a Google key for the script

1. Go to <https://console.cloud.google.com/> and sign in with the Google account that owns the channel.
2. Top bar → project picker → **New project** → name it `PassReady YouTube` → Create. Make sure it's selected.
3. Search bar → **YouTube Data API v3** → **Enable**.
4. Left menu → **Google Auth Platform** (older screens call it *OAuth consent screen*) → **Get started**:
   - App name: `PassReady YouTube`, support email: yours → User type **External** → finish.
   - **Audience** → **Add users** → add your own Gmail address.
   - Still on **Audience**, click **Publish app** and confirm. (In "Testing" mode Google signs you out every 7 days.)
5. **Clients** → **Create client** → Application type **Desktop app** → Create → **Download JSON**.
6. In Terminal:
   ```
   mkdir -p ~/.passready-youtube
   mv ~/Downloads/client_secret_*.json ~/.passready-youtube/client_secret.json
   ```

### 2. Sign in

```
cd ~/passreadyprep          # wherever the repo lives on your Mac
node tools/youtube/youtube.js auth
```

A browser tab opens. Pick the account, and **pick the PassReady Prep channel** if
it asks which one. Google will say *"Google hasn't verified this app"*. That's
expected because it's your own app: click **Advanced → Go to PassReady YouTube**,
then **Continue**.

The key and sign-in are saved in `~/.passready-youtube/`, outside the repo.
They are never committed.

## Every time you upload a batch

```
node tools/youtube/youtube.js scan          # what's on the channel, what's missing
node tools/youtube/youtube.js fix           # preview every change
node tools/youtube/youtube.js fix --yes     # make the changes
```

### Using your upload sheets

The `.txt` upload sheets (TITLE / DESCRIPTION / Tags / Playlist / Case) live in
`tools/youtube/sheets/`, so `git pull` brings them to your Mac. Add new ones there. Each video then gets its
title, description (with chapters), tags and playlist straight from its sheet.
No copy-paste needed:

```
node tools/youtube/youtube.js fix --sheets tools/youtube/sheets
node tools/youtube/youtube.js fix --sheets tools/youtube/sheets --yes
```

Videos are matched by the `Case:` line, and playlists are ordered by `Upload order`.
A sheet with a cut-off title ("…") or a broken description line is reported, and
that part is skipped. Fix the sheet or add the title to `TITLE_OVERRIDES` in
`config.js`. Videos without a sheet use the rules in `config.js`.

Add `--visibility` to also make the main copy of each part **Public** and set
extra copies to **Unlisted**:

```
node tools/youtube/youtube.js fix --yes --visibility
```

`scan` also saves the full list to `tools/youtube/out/channel.csv`, which opens in Numbers.

No sign-in yet? You can still get the report from a Studio analytics export:

```
node tools/youtube/youtube.js report ~/Downloads/"Table data.csv"
```

## Publishing and scheduling

```
node tools/youtube/youtube.js publish                 # preview
node tools/youtube/youtube.js publish --yes           # do it
```

- Full cases and minis: the main copy goes **public** now.
- Practice Shorts that are private and not scheduled yet get **scheduled one a
  day at 7 pm** (your Mac's time zone), in series order, skipping days that
  already have one. Change with `--time 18:30` or `--per-day 2`.
- Public extra copies are set to **unlisted**.
- Videos YouTube refused to edit stay private; fix them in Studio first.

## Thumbnails

`tools/youtube/thumbnails/` has one 1280×720 thumbnail per full-case part and
mini, made from the upload sheets in the same look as the video opening frames.
Practice questions are Shorts, so they don't get one: YouTube shows a frame from
the video instead.

```
node tools/youtube/youtube.js thumbs          # preview
node tools/youtube/youtube.js thumbs --yes    # upload
```

Each upload uses 50 of the 10,000 daily units. Re-runs skip thumbnails already
uploaded. Custom thumbnails need a phone-verified channel (Studio → Settings →
Channel → Feature eligibility).

To remake them after adding or changing sheets (needs `python3 -m pip install pillow`):

```
python3 tools/youtube/make-thumbnails.py
```

## Changing titles

Edit `config.js`:

- `FULL_CASE_SUBJECTS`: the name used in a full case title, e.g. `D140: 'Agoraphobia'`
  gives `NCMHCE Full Case Walkthrough: Agoraphobia (Part 2 of 2)`.
- `TITLE_OVERRIDES`: an exact title for one video, e.g. `'G134-q5': '…'`.
- `PLAYLISTS`: playlist names.

Any video not listed there gets its title from its file name, with the code removed.

## Also set once in Studio

**Settings → Upload defaults**: paste your standard description and tags there.
Every new upload starts with them filled in, so the script only adds the part links.

## Limits

YouTube gives each Google project 10,000 units a day. Reading the channel costs
a few units, and each video edit or playlist add costs 50, so a normal batch is
well under the limit. If it runs out, run the same command the next day; it
skips what's already done.
