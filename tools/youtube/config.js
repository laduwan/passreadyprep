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
  // The upload sheets cut these titles off at "career st…".
  'D150-P1': 'NCMHCE Full Case Walkthrough: Intense fear of flying blocking a career step (Part 1 of 2)',
  'D150-P2': 'NCMHCE Full Case Walkthrough: Intense fear of flying blocking a career step (Part 2 of 2)',
  // The upload sheets cut these titles off ("…"); shortened to fit YouTube's 100 characters.
  'G111-q3': 'NCMHCE Practice: What do you assess NEXT? | BPD with Comorbid MDD in a Korean American Woman',
  'G183-q3': 'NCMHCE Practice: What do you assess NEXT? | Faith, Trust, and Disclosure in an Older Deacon',
  'D264-q1': 'NCMHCE Practice: What do you do FIRST? | A Hotshot Firefighter and an Online Vial',
  'G179-q3': 'NCMHCE Practice: What do you do FIRST? | Culturally Responsive Care: Older African American Woman',
  'G134-q5': "NCMHCE Practice: What's the best formulation? | Grief & Historical Trauma",
  'G037-q1': 'NCMHCE Practice: What do you assess NEXT? | Combat Veteran with PTSD',
  'G102-q3': 'NCMHCE Practice: What do you do FIRST? | Suicide Risk in an Older Adult',
  'G125-q3': "NCMHCE Practice: What do you assess NEXT? | Depression That Won't Lift",
  'D248-q1': 'NCMHCE Practice: What do you do FIRST? | Night Shifts & Drowsy Driving',
  'D215-q1': 'NCMHCE Practice: What do you do FIRST? | Train Operator After a Fatality',
  'G185-q3': 'NCMHCE Practice: What do you do FIRST? | College Student in Crisis',
};

module.exports = { PLAYLISTS, FULL_CASE_SUBJECTS, TITLE_OVERRIDES };
