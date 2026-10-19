#!/usr/bin/env python3
"""Make a YouTube thumbnail (1280x720 JPEG) for every upload sheet.

    python3 tools/youtube/make-thumbnails.py

Reads tools/youtube/sheets/*.txt (full cases and minis; practice-question
Shorts only with --include-practice) and writes tools/youtube/thumbnails/<key>.jpg
(e.g. D140-P2.jpg, D241.jpg, G036-q1.jpg), in the same look as the video
opening frames: mint background, green accent bar, navy text, category pill.
Titles that the sheets cut off ("…") use TITLE_OVERRIDES from config.js.

Then upload them with: node tools/youtube/youtube.js thumbs --yes

Needs Pillow (python3 -m pip install pillow) and the Inter font; without
Inter it falls back to DejaVu Sans, which works but looks plainer.
"""
import json
import os
import re
import subprocess
import sys

from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
SHEETS = os.path.join(HERE, 'sheets')
OUT = os.path.join(HERE, 'thumbnails')

W, H = 1280, 720
BG_TOP, BG_BOTTOM = (234, 247, 241), (219, 241, 232)
GREEN = (18, 155, 107)
GREEN_SOFT = (206, 234, 223)
NAVY = (27, 45, 64)
MUTED = (120, 140, 145)
NET = (184, 222, 206)

FONT_DIRS = ['/usr/share/fonts/opentype/inter', os.path.expanduser('~/Library/Fonts'), '/Library/Fonts']
FALLBACK = {'Bold': 'DejaVuSans-Bold.ttf', 'ExtraBold': 'DejaVuSans-Bold.ttf', 'SemiBold': 'DejaVuSans-Bold.ttf', 'Medium': 'DejaVuSans.ttf'}

# Tags on every sheet; whatever is left over is the clinical category.
GENERIC_TAGS = {'ncmhce', 'ncmhce practice', 'ncmhce prep', 'counselor exam', 'lpc exam', 'passready prep',
                'passreadyprep.com', '@passreadyprep', 'ncmhce case study', 'case walkthrough', 'ncmhce shorts'}


def font(weight, size):
    for d in FONT_DIRS:
        for name in (f'Inter-{weight}.otf', f'Inter-{weight}.ttf'):
            p = os.path.join(d, name)
            if os.path.exists(p):
                return ImageFont.truetype(p, size)
    for d in ('/usr/share/fonts/truetype/dejavu', '/Library/Fonts', os.path.expanduser('~/Library/Fonts')):
        p = os.path.join(d, FALLBACK[weight])
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default(size)


def title_overrides():
    """TITLE_OVERRIDES from config.js, via node (same source youtube.js uses)."""
    try:
        out = subprocess.run(['node', '-e', 'console.log(JSON.stringify(require(process.argv[1]).TITLE_OVERRIDES))',
                              os.path.join(HERE, 'config.js')], capture_output=True, text=True, check=True).stdout
        return json.loads(out)
    except Exception:
        return {}


def read_sheet(path):
    lines = open(path, encoding='utf-8').read().replace('\r', '').split('\n')
    get = lambda prefix: next((l[len(prefix):].strip() for l in lines if l.startswith(prefix)), '')
    ti = next(i for i, l in enumerate(lines) if l.startswith('TITLE'))
    title = next(l.strip() for l in lines[ti + 1:] if l.strip())
    case = get('Case:').split()[0]
    code = re.search(r'\b([DG]\d{3})\b', case).group(1)
    part = re.search(r'part(\d)', case, re.I)
    q = re.search(r'\bq(\d+)', case, re.I)
    kind = 'full' if 'full' in case.lower() else 'mini' if 'mini' in case.lower() else 'practice'
    key = code + (f'-P{part.group(1)}' if kind == 'full' and part else f'-q{q.group(1)}' if kind == 'practice' and q else '')
    playlist = get('Playlist:')
    category = playlist.split(': ', 1)[1] if ': ' in playlist else ''
    if not category:
        # Practice sheets carry the category as tags; "Crisis, Risk, and Safety" arrives split
        # by its own commas, so join what's left after removing the generic tags.
        category = ', '.join(t.strip() for t in get('Tags:').split(',') if t.strip() and t.strip().lower() not in GENERIC_TAGS)
    return {'key': key, 'kind': kind, 'title': title, 'category': category, 'part': part.group(1) if part else None}


def wrap(draw, text, fnt, width, max_lines):
    words, lines, cur = text.split(), [], ''
    for w in words:
        trial = (cur + ' ' + w).strip()
        if draw.textlength(trial, font=fnt) <= width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines if len(lines) <= max_lines else None


def fit(draw, text, weight, width, max_lines, sizes):
    """Largest font size from `sizes` at which `text` wraps into `max_lines`."""
    for s in sizes:
        f = font(weight, s)
        lines = wrap(draw, text, f, width, max_lines)
        if lines:
            return f, lines, s
    f = font(weight, sizes[-1])
    lines = wrap(draw, text, f, width, 99)[:max_lines]
    lines[-1] = lines[-1].rstrip('.,;:') + '…'
    return f, lines, sizes[-1]


def background(img):
    d = ImageDraw.Draw(img)
    for y in range(H):
        t = y / (H - 1)
        d.line([(0, y), (W, y)], fill=tuple(round(a + (b - a) * t) for a, b in zip(BG_TOP, BG_BOTTOM)))
    # The network motif from the opening frames, in two corners.
    for ox, oy, sx in ((0, 0, 1), (W, 0, -1)):
        pts = [(ox + sx * x, oy + y) for x, y in ((14, 22), (110, 8), (150, 78), (78, 100), (52, 55), (6, 120))]
        for a, b in ((0, 1), (1, 2), (2, 3), (3, 4), (4, 0), (4, 1), (3, 5), (5, 0)):
            d.line([pts[a], pts[b]], fill=NET, width=2)
        for p in pts:
            d.ellipse([p[0] - 5, p[1] - 5, p[0] + 5, p[1] + 5], fill=NET)


def pill(d, x, y, text, fnt, fill, outline, color):
    tw = d.textlength(text, font=fnt)
    asc, desc = fnt.getmetrics()
    h = asc + desc + 18
    d.rounded_rectangle([x, y, x + tw + 40, y + h], radius=h // 2, fill=fill, outline=outline, width=3)
    d.text((x + 20, y + 9), text, font=fnt, fill=color)
    return x + tw + 40


def draw_lines(d, x, y, lines, fnt, color, gap=1.12, highlight=None):
    size = fnt.size
    for line in lines:
        cx = x
        for i, word in enumerate(line.split(' ')):
            token = word + (' ' if i < len(line.split(' ')) - 1 else '')
            hot = highlight and re.sub(r'[^A-Z]', '', word) in highlight
            d.text((cx, y), token, font=fnt, fill=GREEN if hot else color)
            cx += d.textlength(token, font=fnt)
        y += round(size * gap)
    return y


def make(sheet, overrides):
    title = overrides.get(sheet['key']) if '…' in sheet['title'] else None
    title = (title or sheet['title']).replace('꞉', ':')
    img = Image.new('RGB', (W, H))
    background(img)
    d = ImageDraw.Draw(img)
    left, right = 96, W - 96
    width = right - left - 40

    # Top row: category pill + format label.
    label = {'full': 'FULL CASE WALKTHROUGH', 'mini': 'CASE WALKTHROUGH · MINI', 'practice': 'PRACTICE QUESTION'}[sheet['kind']]
    x = left
    if sheet['category']:
        cat = sheet['category'].upper()
        lf = font('Bold', 28)
        # Long categories: smaller pill, and drop the format label if it still won't fit.
        cf = font('Bold', 28 if d.textlength(cat, font=lf) + d.textlength(label, font=lf) < width - 80 else 24)
        x = pill(d, left, 70, cat, cf, GREEN_SOFT, GREEN, GREEN) + 22
        if x + d.textlength(label, font=lf) > right:
            label = ''
    d.text((x, 80), label, font=font('Bold', 28), fill=MUTED)

    # Main text, beside a green accent bar.
    top = 170
    if sheet['kind'] == 'practice':
        m = re.match(r'NCMHCE Practice:\s*(.+?)\s*\|\s*(.+)$', title)
        question, topic = (m.group(1), m.group(2)) if m else (title, '')
        fq, ql, _ = fit(d, question, 'ExtraBold', width, 2, range(118, 70, -4))
        y = draw_lines(d, left + 40, top, ql, fq, NAVY, highlight={'FIRST', 'NEXT'})
        ft, tl, _ = fit(d, topic, 'SemiBold', width, 3, range(56, 34, -2))
        end = draw_lines(d, left + 40, y + 24, tl, ft, NAVY, gap=1.22)
    else:
        subject = re.sub(r'^NCMHCE (Full Case Walkthrough|Case Walkthrough \(Mini\)):\s*', '', title)
        subject = re.sub(r'\s*\(Part \d of \d\)\s*$', '', subject)
        subject = subject[:1].upper() + subject[1:]
        fs, sl, size = fit(d, subject, 'ExtraBold', width, 3, range(96, 60, -4))
        if size == 64 and len(sl) == 3 and sl[-1].endswith('…'):
            fs, sl, _ = fit(d, subject, 'ExtraBold', width, 4, range(64, 52, -4))
        end = draw_lines(d, left + 40, top, sl, fs, NAVY, gap=1.16)
    d.rectangle([left, top + 8, left + 9, end - 10], fill=GREEN)

    # Bottom row: part badge (full cases) and brand.
    if sheet['kind'] == 'full' and sheet['part']:
        pill(d, left, H - 120, f"PART {sheet['part']} OF 2", font('ExtraBold', 34), GREEN, GREEN, (255, 255, 255))
    brand = 'PassReady Prep  ·  NCMHCE'
    fb = font('Bold', 32)
    d.text((right - d.textlength(brand, font=fb), H - 108), brand, font=fb, fill=NAVY)
    return img


def main():
    os.makedirs(OUT, exist_ok=True)
    overrides = title_overrides()
    names = sorted(n for n in os.listdir(SHEETS) if n.endswith('.txt'))
    args = sys.argv[1:]
    # Practice questions are Shorts, where YouTube shows a frame from the video
    # instead of a custom thumbnail; skip them unless asked.
    include_practice = '--include-practice' in args
    only = {a for a in args if not a.startswith('--')}
    made = 0
    for n in names:
        s = read_sheet(os.path.join(SHEETS, n))
        if only and s['key'] not in only:
            continue
        if s['kind'] == 'practice' and not include_practice and not only:
            continue
        make(s, overrides).save(os.path.join(OUT, s['key'] + '.jpg'), quality=88, optimize=True)
        made += 1
    print(f'{made} thumbnails written to {os.path.relpath(OUT)}')


if __name__ == '__main__':
    main()
