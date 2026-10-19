# YouTube channel tidy-up

`youtube.js` fixes titles, Part 1 / Part 2 links, playlists and duplicate copies
across the whole channel in one run, so you don't have to edit each video in
YouTube Studio.

You still **upload** in Studio: drag in a batch of files and let them process.
Then run the script. (Videos uploaded through the API by an unreviewed Google
project are locked to Private by YouTube, so the script only edits videos, it
doesn't upload them.)

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
