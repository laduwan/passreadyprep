#!/usr/bin/env python3
"""Generate WebVTT transcripts for the Clinical Podcast episodes.

Run once, locally (on the Mac mini), NOT on Render:

    python3 tools/captions/make-vtt.py <folder-of-m4a> public/transcripts

For every audio file in <folder-of-m4a> it writes <basename>.vtt into the
output folder, using faster-whisper (model "small.en", CPU, int8). Files
that already have a .vtt are skipped, so it is safe to re-run after new
episodes are added.

The basename must match the episode's `file` in public/podcast-data.js
(e.g. The_hidden_rules_of_clinical_diagnosis.m4a ->
The_hidden_rules_of_clinical_diagnosis.vtt): podcast.html loads
/transcripts/<basename>.vtt for each episode and hides the Transcript toggle
when there isn't one.

Commit the generated .vtt files to public/transcripts/ — they are small text
files and are served statically with the rest of public/. The audio itself
stays off the repo (see podcast-data.js).

Setup (one time):
    python3 -m pip install faster-whisper
"""
import os
import sys

AUDIO_EXTS = ('.m4a', '.mp3', '.wav', '.aac', '.ogg', '.flac')


def usage():
    print('Usage: python3 tools/captions/make-vtt.py <folder-of-m4a> public/transcripts', file=sys.stderr)
    sys.exit(2)


def stamp(seconds):
    ms = int(round(max(0.0, seconds) * 1000))
    h, ms = divmod(ms, 3600000)
    m, ms = divmod(ms, 60000)
    s, ms = divmod(ms, 1000)
    return '%02d:%02d:%02d.%03d' % (h, m, s, ms)


def main():
    if len(sys.argv) != 3:
        usage()
    src, out = sys.argv[1], sys.argv[2]
    if not os.path.isdir(src):
        print('Not a folder: %s' % src, file=sys.stderr)
        sys.exit(2)

    try:
        from faster_whisper import WhisperModel
    except ImportError:
        print('faster-whisper is not installed. Install it with:\n\n'
              '    python3 -m pip install faster-whisper\n\n'
              '(Use a virtualenv if your Python is externally managed:\n'
              '    python3 -m venv .venv && . .venv/bin/activate && pip install faster-whisper)',
              file=sys.stderr)
        sys.exit(1)

    os.makedirs(out, exist_ok=True)
    files = sorted(f for f in os.listdir(src) if f.lower().endswith(AUDIO_EXTS) and not f.startswith('.'))
    if not files:
        print('No audio files found in %s' % src)
        return

    todo = []
    for f in files:
        dest = os.path.join(out, os.path.splitext(f)[0] + '.vtt')
        if os.path.exists(dest):
            print('skip  %s (already has %s)' % (f, os.path.basename(dest)))
        else:
            todo.append((f, dest))
    if not todo:
        print('All %d file(s) already have transcripts.' % len(files))
        return

    print('Loading faster-whisper model small.en (cpu, int8)...')
    model = WhisperModel('small.en', device='cpu', compute_type='int8')

    for i, (f, dest) in enumerate(todo, 1):
        print('[%d/%d] %s' % (i, len(todo), f), flush=True)
        segments, _info = model.transcribe(os.path.join(src, f), vad_filter=True)
        lines = ['WEBVTT', '']
        n = 0
        for seg in segments:
            text = (seg.text or '').strip()
            if not text:
                continue
            n += 1
            lines += [str(n), '%s --> %s' % (stamp(seg.start), stamp(seg.end)), text, '']
        # Write to a temp file first so an interrupted run never leaves a
        # partial .vtt that would be skipped next time.
        tmp = dest + '.part'
        with open(tmp, 'w', encoding='utf-8') as fh:
            fh.write('\n'.join(lines))
        os.replace(tmp, dest)
        print('      wrote %s (%d cues)' % (dest, n))


if __name__ == '__main__':
    main()
