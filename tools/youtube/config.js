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
  // Kept in sync with the rewritten sheets (diagnosis-first titles).
  'D150-P1': 'Specific Phobia NCMHCE Case Walkthrough — Full Case, Part 1 | Fear of Flying Blocks a Career Step',
  'D150-P2': 'Specific Phobia NCMHCE Case Walkthrough — Full Case, Part 2 | Fear of Flying Blocks a Career Step',
  'G111-q3': 'Borderline Personality Disorder NCMHCE Practice: What do you assess NEXT?',
  'G183-q3': 'Schizophrenia NCMHCE Practice: What do you assess NEXT?',
  'D264-q1': 'Gender Dysphoria NCMHCE Practice: What do you do FIRST? | A Hotshot Firefighter and an Online Vial',
  'G179-q3': 'Alcohol Use Disorder NCMHCE Practice: What do you do FIRST?',
  'G134-q5': 'Major Depressive Disorder NCMHCE Practice: What\'s the best formulation?',
  'G037-q1': 'PTSD NCMHCE Practice: What do you assess NEXT? | Combat Veteran with Posttraumatic Stress',
  'G102-q3': 'Major Depressive Disorder NCMHCE Practice: What do you do FIRST? | Hopelessness in an Older Adult',
  'G125-q3': 'Major Depressive Disorder NCMHCE Practice: What do you assess NEXT?',
  'D248-q1': 'Hypersomnolence Disorder NCMHCE Practice: What do you do FIRST? | Night Shifts and Drowsy Driving',
  'D215-q1': 'Acute Stress Disorder NCMHCE Practice: What do you do FIRST? | A Train Operator in Acute Crisis',
  'G185-q3': 'Suicide Risk Assessment NCMHCE Practice: What do you do FIRST? | A College Student\'s Hidden Crisis',
};

module.exports = { PLAYLISTS, FULL_CASE_SUBJECTS, TITLE_OVERRIDES };
