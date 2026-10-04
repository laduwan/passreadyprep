// Exam facts the blog auto-drafter (jobs/blogAutoDraft.js) is allowed to state.
// The drafter may use ONLY these for exam details; anything not listed here is
// left out of the post rather than guessed. Sourced from NBCC documents as of
// October 2026 — update this file (and SOURCES_AS_OF) when NBCC publishes
// changes. Percentages are deliberately not listed: the drafter's content check
// rejects them, so weights are described by rank instead.
const SOURCES_AS_OF = 'October 2026';

const SOURCES = [
  { label: 'NCMHCE Candidate Handbook', url: 'https://nbcc.org/assets/exam/handbooks/ncmhce.pdf' },
  { label: 'NCMHCE Content Outline', url: 'https://nbcc.org/assets/exam/ncmhce_content_outline.pdf' },
  { label: '2027 NCMHCE Exam Specifications', url: 'https://nbcc.org/assets/exam/NCMHCE_exam_spec_2027.pdf' },
  { label: 'NCE Candidate Handbook', url: 'https://nbcc.org/assets/exam/handbooks/nce.pdf' },
  { label: 'NCE Content Outline', url: 'https://nbcc.org/assets/exam/nce_content_outline.pdf' },
  { label: '2027 NCE Exam Specifications', url: 'https://www.nbcc.org/assets/exam/NCE_exam_spec_2027.pdf' },
  { label: 'CCE NCMHCE page', url: 'https://www.cce-global.org/assessmentsandexams/ncmhce' },
  { label: 'NCMHCE format comparison chart', url: 'https://www.nbcc.org/assets/exam/ncmhce_format_comparison_chart.pdf' },
];

const FACTS = [
  // NCMHCE — current format (tests before July 1, 2027)
  'The NCMHCE and NCE are developed by the National Board for Certified Counselors (NBCC) and delivered through Pearson, at a Pearson VUE test center or online through Pearson\'s remotely proctored OnVUE platform.',
  'The current NCMHCE has 11 case studies. Each is a narrative followed by 9 to 15 multiple-choice questions, in sections: an initial intake summary, then two counseling sessions. Each question has four options and one correct answer. The client\'s diagnosis is provided in the case.',
  'On the current NCMHCE, 10 cases are scored and 1 is unscored (used to gather statistics for future exams); 100 questions are scored in total.',
  'Each scored NCMHCE question counts for one score point.',
  'The current NCMHCE allows 225 minutes to answer the cases, with one scheduled 15-minute break after the fifth case. The total test session is 255 minutes (4 hours 15 minutes), including the nondisclosure agreement and tutorial.',
  'The NCMHCE is criterion-referenced. Its passing score is set by a panel of subject matter experts using the Angoff standard-setting method, and statistical equating adjusts the cut score for each exam form, so a raw percentage does not translate directly into pass or fail.',
  'The current NCMHCE content domains, from most to least heavily weighted: Counseling Skills and Interventions; Intake, Assessment, and Diagnosis; then Professional Practice and Ethics, Treatment Planning, and Core Counseling Attributes (equal weight). A sixth domain, Areas of Clinical Focus, is covered through the diagnoses and scenarios in the cases rather than by individual questions.',
  'Candidates get an unofficial score report when they finish testing, showing a preliminary pass/fail status and general feedback by content domain. Official scores are reported to the state licensing board automatically, within about 30 days after the monthly testing window closes, once the test session has been verified.',
  'After a failed attempt, a candidate may re-register right away but must wait 30 days from the test date to retest. For state licensure, the state board decides how many attempts are allowed.',
  'At a test center, candidates need two original, unexpired IDs: a government-issued primary ID with name, photo, and signature, and a secondary ID with name and signature. The name on the IDs must exactly match the registration name.',
  // NCMHCE — 2027 format
  'For tests on or after July 1, 2027, the NCMHCE has 10 case studies, reports a scaled score from 100 to 500 with 360 as the passing point, and uses a new set of content domains. A scaled score is not a percentage correct.',
  // NCE
  'The current NCE (tests before July 1, 2027) has 200 multiple-choice questions with four options each: 160 scored and 40 unscored field-test items, mixed in and indistinguishable. Each scored question counts for one point; the passing score is set by subject matter experts and equated across forms.',
  'The current NCE allows 3 hours 45 minutes (225 minutes) to answer, with a scheduled break after question 100; flagged or skipped questions in the first half must be handled before the break. The total NCE session is 255 minutes.',
  'The NCE content outline (2023) has six domains. From most to least heavily weighted: Counseling Skills and Interventions and Areas of Clinical Focus (nearly equal, together more than half the scored items), then Professional Practice and Ethics and Intake, Assessment, and Diagnosis (equal), then Treatment Planning, then Core Counseling Attributes. NCE items also reflect the eight original CACREP content areas (Professional Counseling Orientation and Ethical Practice; Social and Cultural Diversity; Human Growth and Development; Career Development; Counseling and Helping Relationships; Group Counseling and Group Work; Assessment and Testing; Research and Program Evaluation), but NBCC publishes no item counts per CACREP area.',
  'From July 1, 2027, the NCE has 170 questions with three options each (140 scored, 30 field-test), 225 minutes with an optional 15-minute break halfway, and new content domains.',
  'NCE score reports, official score reporting to state boards, the 30-day retest wait, and ID rules work the same way as described above for the NCMHCE.',
  // State rules
  'Which exam a counselor must take, and when they become eligible, is set by each state licensing board and varies by state and license level. Posts must send readers to their state board for this, never state a specific state\'s rule.',
];

module.exports = { FACTS, SOURCES, SOURCES_AS_OF };
