/*
 * config.js — settings for tools/youtube/youtube.js
 *
 * Edit this file to change playlist names or the titles the script writes.
 * Nothing here is secret; the Google credentials live in ~/.passready-youtube/.
 */

// Which playlist each kind of video belongs in. Playlists that don't exist
// yet are created (public) the first time `fix --yes` runs.
const PLAYLISTS = {
  full: 'NCMHCE Full Case Walkthroughs',
  mini: 'NCMHCE Case Walkthrough Minis',
  practice: 'NCMHCE Practice Questions',
};

// Full case walkthroughs: the subject used in the title, by case code.
// Title becomes "NCMHCE Full Case Walkthrough: <subject> (Part N of 2)".
// A case not listed here keeps the subject taken from its file name.
const FULL_CASE_SUBJECTS = {
  D106: 'Panic Disorder',
  D111: 'Social Anxiety Disorder',
  D140: 'Agoraphobia',
  D150: 'Fear of Flying (Specific Phobia)',
  D170: 'Child Separation Anxiety',
};

// Exact titles for single videos, by key (case code + part, e.g. "D140-P2",
// or case code + question, e.g. "G134-q5"). These win over everything else.
const TITLE_OVERRIDES = {
  'G134-q5': "NCMHCE Practice: What's the Best Formulation? | Grief & Historical Trauma",
  'G037-q1': 'NCMHCE Practice: What Do You Assess NEXT? | Combat Veteran with PTSD',
  'G102-q3': 'NCMHCE Practice: What Do You Do FIRST? | Suicide Risk in an Older Adult',
  'G125-q3': "NCMHCE Practice: What Do You Assess NEXT? | Depression That Won't Lift",
  'D248-q1': 'NCMHCE Practice: What Do You Do FIRST? | Night Shifts & Drowsy Driving',
  'D215-q1': 'NCMHCE Practice: What Do You Do FIRST? | Train Operator After a Fatality',
  'G185-q3': 'NCMHCE Practice: What Do You Do FIRST? | College Student in Crisis',
};

module.exports = { PLAYLISTS, FULL_CASE_SUBJECTS, TITLE_OVERRIDES };
