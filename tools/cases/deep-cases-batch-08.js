// ============================================================================
// deep-cases-batch-08.js — NCMHCE deep cases, batch 08 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). On the
// reserved id block ncmhce-D140+, adding second cases in the largest-target
// categories with diagnoses not yet covered by any deep case:
//   ncmhce-D140  Agoraphobia (Anxiety)
//   ncmhce-D141  Cannabis Use Disorder, Moderate (Substance)
//   ncmhce-D142  Antisocial Personality Disorder (Personality)
//   ncmhce-D143  Adjustment Disorder, with Mixed Anxiety and Depressed Mood (Trauma)
//   ncmhce-D144  Premenstrual Dysphoric Disorder (Depressive)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-08.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-08');console.log(validateExamDepthSet(CASES))"
//
// Standalone deliverable for SME review. Do NOT auto-import — importing into the
// live DB is a separate, human-run step.
// ============================================================================

const O = (id, text, weight, ex) => ({
  id,
  text,
  isCorrect: weight === 3,
  weight,
  rationale: ex.r,
  explanation: { approach: ex.approach, rationale: ex.why, keyIndicators: ex.keys, commonMistake: ex.mistake },
});
const Q = (id, domain, question, evidenceRef, options) => ({ id, domain, question, evidenceRef, options });

// ============================================================================
// D140 — Agoraphobia (F40.00) — Anxiety — hard
// ============================================================================
const D140 = {
  id: 'ncmhce-D140',
  title: 'Shrinking world from fear of being unable to escape',
  category: 'Anxiety',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Agoraphobia', code: 'F40.00' },
  diagnosis: { name: 'Agoraphobia', code: 'F40.00' },
  differentialOptions: [
    { id: 'do1', name: 'Agoraphobia', isCorrect: true },
    { id: 'do2', name: 'Panic Disorder', isCorrect: false },
    { id: 'do3', name: 'Social Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Specific Phobia, Situational', isCorrect: false },
  ],
  narrative: {
    intake:
      'Nora Bishop, a 38-year-old bookkeeper, presents with about a year of intense fear and avoidance of public transportation, crowded ' +
      'stores, and being far from home alone, because she fears she could not escape or get help if she became overwhelmed with symptoms.',
    songless: '',
    session1:
      'She now avoids buses, large stores, and open parking lots, and she will only leave home if her sister comes along. The fear is present ' +
      'across several different situations rather than one specific place, and it has steadily narrowed where she is willing to go.',
    session2:
      'She is becoming increasingly housebound, has declined invitations and errands, and feels ashamed and trapped. She fears the symptoms ' +
      'themselves and what others would think if she "fell apart" in public, though her core dread is being unable to get out or get help.',
  },
  diagnosticRationale:
    'Marked fear or anxiety about two or more agoraphobic situations—public transportation, open spaces, enclosed places, crowds or lines, ' +
    'and being outside the home alone—because escape might be difficult or help unavailable if panic-like symptoms occur, with active ' +
    'avoidance lasting more than six months and significant impairment, meets DSM-5-TR criteria for agoraphobia, distinct from panic disorder, social anxiety, or a specific phobia.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Agoraphobia: fear/avoidance of 2+ situations due to escape/help concerns, 6+ months, with impairment' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Agoraphobia and panic: CBT with graded in-vivo exposure as first-line treatment' },
    { id: 'R3', source: 'APA CPG', detail: 'Anxiety guideline supporting exposure-based cognitive-behavioral therapy' },
    { id: 'R4', source: 'C-SSRS', detail: 'Structured screening of ideation severity, intent, and plan' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, scope of practice, and informed consent' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an agoraphobia diagnosis?', ['R1'], [
      O('a', 'Fear or avoidance of two or more agoraphobic situations because escape or help could be difficult, lasting six months or more', 3,
        { r: 'Multiple situations plus escape/help concern', approach: 'Confirm the core criteria', why: 'DSM-5-TR requires fear of 2+ situations tied to escape/help, lasting 6+ months', keys: ['buses, crowds, far from home', 'fears being unable to escape'], mistake: 'Diagnosing agoraphobia from one feared situation' }),
      O('b', 'That she can identify the single stressful event she believes first triggered her avoidance of leaving her home', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her avoidance has become noticeably worse over the past few days compared with how it was the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The persistent 6-month pattern is what matters', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Agoraphobia is defined by situational fear and avoidance', keys: ['anxiety-based diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from social anxiety disorder?', ['R1'], [
      O('a', 'Her core dread is being unable to escape or get help, not being scrutinized or negatively judged by other people', 3,
        { r: 'Escape concern versus fear of scrutiny', approach: 'Contrast the core fear', why: 'Social anxiety centers on scrutiny; agoraphobia centers on escape and help', keys: ['fears being unable to get out or get help'], mistake: 'Calling escape-focused fear social anxiety' }),
      O('b', 'The fact that she does feel some worry about what other people would think if she became visibly distressed while out in public', -1,
        { r: 'Some social concern can occur in both', approach: 'Social-concern framing', why: 'A secondary social worry does not make this social anxiety', keys: ['secondary worry'], mistake: 'Using a secondary social worry to differentiate' }),
      O('c', 'The fact that she avoids several different places that she finds frightening rather than only a single specific one', -1,
        { r: 'Multi-situation avoidance is nonspecific here', approach: 'Avoidance-breadth framing', why: 'Breadth of avoidance does not separate it from social anxiety', keys: ['shared avoidance'], mistake: 'Reading avoidance breadth as decisive' }),
      O('d', 'The way her anxiety tends to be a bit worse during the busiest and most crowded shopping times of the week', 0,
        { r: 'Crowd-linked timing is nonspecific', approach: 'Situation-timing framing', why: 'Timing does not separate the disorders', keys: ['nonspecific timing'], mistake: 'Over-reading a situational pattern' }),
    ]),
    Q('q3', 'core', 'How should the counselor weigh a possible co-occurring panic disorder?', ['R1'], [
      O('a', 'Panic disorder can co-occur and is assessed separately, since agoraphobia can be diagnosed with or without panic disorder', 3,
        { r: 'Assess panic as a separable comorbidity', approach: 'Distinguish and assess both', why: 'Agoraphobia and panic disorder are separate diagnoses that often co-occur', keys: ['fears panic-like symptoms'], mistake: 'Assuming agoraphobia cannot stand on its own' }),
      O('b', 'Agoraphobia can be ruled out entirely if she has ever had even a single panic attack at any point in the past', -1,
        { r: 'Past panic does not rule out agoraphobia', approach: 'Either-or framing', why: 'The two can coexist; one does not exclude the other', keys: ['comorbidity possible'], mistake: 'Treating the diagnoses as mutually exclusive' }),
      O('c', 'The presence of any anxiety symptoms at all in feared situations means the correct diagnosis must be panic disorder instead', -1,
        { r: 'Anxiety symptoms do not equal panic disorder', approach: 'Symptom-presence framing', why: 'Anxiety in situations is expected in agoraphobia', keys: ['situational anxiety'], mistake: 'Reclassifying agoraphobia as panic disorder' }),
      O('d', 'Whether her anxiety symptoms are clearly more severe today than they were earlier in this same assessment week', 0,
        { r: 'A severity trend is not the question', approach: 'Severity-trend framing', why: 'The issue is comorbidity, not a recent trend', keys: ['assessment focus'], mistake: 'Reframing the question as a severity trend' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from a situational specific phobia?', ['R1'], [
      O('a', 'Her fear spans multiple agoraphobic situations tied to escape, not a single specific object or situation', 3,
        { r: 'Multiple escape-linked situations versus one cue', approach: 'Contrast breadth and theme', why: 'Specific phobia is a single cue; agoraphobia spans multiple escape-linked situations', keys: ['buses, crowds, far from home'], mistake: 'Forcing multi-situation agoraphobia into a single phobia' }),
      O('b', 'The fact that she becomes anxious and wants to leave the situation as soon as she starts to feel trapped or overwhelmed there', -1,
        { r: 'Wanting to escape occurs in both', approach: 'Escape-urge framing', why: 'An urge to leave occurs in both; breadth and theme differ', keys: ['shared feature'], mistake: 'Using the escape urge to differentiate' }),
      O('c', 'The intense physical anxiety response that she experiences, including a racing heart, when she is in the feared places', -1,
        { r: 'The fear response is shared', approach: 'Fear-response framing', why: 'Both produce an acute fear response', keys: ['shared arousal'], mistake: 'Reading the fear response as decisive' }),
      O('d', 'The way her avoidance tends to be a little stronger on rainy days when getting around feels harder than usual', 0,
        { r: 'Weather-linked variation is nonspecific', approach: 'Situational-variation framing', why: 'It does not separate the disorders', keys: ['nonspecific factor'], mistake: 'Over-reading a situational variation' }),
    ]),
    Q('q5', 'intake', 'What is most important to assess to capture the functional severity of her agoraphobia?', ['R1'], [
      O('a', 'The extent of her avoidance and reliance on a companion, including how close she is to becoming fully housebound', 3,
        { r: 'Assess avoidance breadth and housebound severity', approach: 'Gauge functional impairment', why: 'Avoidance extent and companion reliance define functional severity in agoraphobia', keys: ['only leaves with her sister', 'increasingly housebound'], mistake: 'Missing the functional impact of the avoidance' }),
      O('b', 'A detailed reconstruction of every place she has ever felt anxious across her entire adult life up to this point', -1,
        { r: 'Exhaustive history is low yield', approach: 'Inventory framing', why: 'It does not capture current functional severity', keys: ['current function'], mistake: 'Collecting low-yield detail' }),
      O('c', 'Whether she has a fixed and persistent belief that she has a serious undiagnosed medical illness despite reassurance', -1,
        { r: 'Illness preoccupation is a different focus', approach: 'Illness-anxiety framing', why: 'Her fear is escape-focused, not a disease conviction', keys: ['escape-focused fear'], mistake: 'Reframing agoraphobia as illness anxiety' }),
      O('d', 'Whether her symptoms are generally a bit worse in the evenings than they are earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not central', approach: 'Time-of-day framing', why: 'Timing does not change the formulation', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation?', ['R2'], [
      O('a', 'Cognitive behavioral therapy with graded in-vivo exposure to the avoided agoraphobic situations', 3,
        { r: 'CBT with graded in-vivo exposure', approach: 'Apply the guideline', why: 'NICE and APA CPG support exposure-based CBT for agoraphobia', keys: ['avoids buses, stores, open spaces'], mistake: 'Defaulting to support without exposure' }),
      O('b', 'Long-term supportive counseling that gives her a calm space to talk about how isolating her situation has become for her', -1,
        { r: 'Unstructured support underperforms exposure', approach: 'Supportive-only framing', why: 'It lacks the exposure that treats agoraphobia', keys: ['needs exposure'], mistake: 'Defaulting to nondirective support' }),
      O('c', 'Encouraging her to keep avoiding the situations that frighten her until she naturally feels ready to face them on her own', -2,
        { r: 'Sanctioning avoidance maintains the disorder', approach: 'Accommodate avoidance', why: 'Avoidance prevents corrective learning', keys: ['increasingly housebound'], mistake: 'Reinforcing avoidance as coping' }),
      O('d', 'A primarily insight-oriented exploration of her childhood as the central route to easing her current avoidance', 0,
        { r: 'Insight work is not first-line here', approach: 'Depth-only framing', why: 'Evidence favors exposure-based CBT', keys: ['symptom-focused need'], mistake: 'Prioritizing origins over exposure' }),
    ]),
    Q('q7', 'treatment', 'Nora will only leave home accompanied by her sister. How should the plan address this?', ['R2'], [
      O('a', 'Identify the companion as a safety behavior and gradually fade it so she learns she can cope without the accompaniment', 3,
        { r: 'Fade the safety-companion behavior', approach: 'Eliminate the safety behavior', why: 'Safety companions prevent the corrective learning of exposure', keys: ['only leaves with her sister'], mistake: 'Leaving the safety behavior in place' }),
      O('b', 'Encourage her to keep bringing her sister along on every outing so that she is able to keep getting out of the house at all', -1,
        { r: 'Preserving the companion maintains the fear', approach: 'Accommodate the companion', why: 'It blocks the corrective learning of exposure', keys: ['safety behavior'], mistake: 'Reinforcing the safety behavior' }),
      O('c', 'Treat the reliance on her sister as a harmless personal preference that has nothing to do with maintaining her agoraphobia', -1,
        { r: 'It is not harmless in agoraphobia', approach: 'Minimize framing', why: 'It actively maintains the avoidance', keys: ['maintaining factor'], mistake: 'Overlooking a safety behavior' }),
      O('d', 'Replace her sister with a longer list of items she must carry for reassurance before she is willing to leave the house', -2,
        { r: 'New safety props are still avoidance', approach: 'Swap-one-prop framing', why: 'It substitutes one safety behavior for another', keys: ['avoidance persists'], mistake: 'Trading props rather than fading them' }),
    ]),
    Q('q8', 'treatment', 'Nora asks whether medication might help. The most appropriate counselor action is to:', ['R5'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation while continuing exposure-based therapy within her own scope', 3,
        { r: 'Refer and coordinate within scope', approach: 'Coordinate care', why: 'Counselors refer for medication rather than prescribe', keys: ['asks about medication'], mistake: 'Giving prescriptive advice' }),
      O('b', 'Recommend the specific anti-anxiety medication and dose that tends to work best for people with her particular symptom profile', -2,
        { r: 'Naming a drug and dose exceeds scope', approach: 'Prescriptive advice', why: 'Medication selection is outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping professional limits' }),
      O('c', 'Advise her to keep an as-needed sedative on hand to take right before she attempts any outing that she expects to be difficult', -2,
        { r: 'PRN sedation can become a safety behavior', approach: 'Endorse-PRN framing', why: 'As-needed use can undermine exposure and carries risk', keys: ['safety behavior risk'], mistake: 'Recommending a specific PRN strategy' }),
      O('d', 'Discourage any medication and tell her she should be able to overcome the agoraphobia with the therapy techniques alone', -1,
        { r: 'Discouraging meds overreaches', approach: 'Discourage medication', why: 'The decision belongs with a prescriber', keys: ['client autonomy'], mistake: 'Steering a medical decision' }),
    ]),
    Q('q9', 'treatment', 'How should the exposure work be structured for Nora?', ['R2'], [
      O('a', 'Build a graded hierarchy of feared situations and work up it collaboratively at a pace she can tolerate without escaping', 3,
        { r: 'Graded hierarchy at a tolerable pace', approach: 'Structure graded exposure', why: 'A collaborative hierarchy supports sustained, effective exposure', keys: ['multiple feared situations'], mistake: 'Flooding her with the hardest situation first' }),
      O('b', 'Send her directly into the most frightening situation she can imagine right away so that she confronts the worst of it at once', -1,
        { r: 'Flooding past tolerance can backfire', approach: 'Flooding framing', why: 'Exposure should be graded, not abrupt and maximal', keys: ['outside tolerance'], mistake: 'Skipping the graded hierarchy' }),
      O('c', 'Wait until she reports feeling no anxiety at all before she attempts even the easiest situation on her avoidance list', -2,
        { r: 'Waiting for zero anxiety reverses the logic', approach: 'Anxiety-free-first framing', why: 'Exposure proceeds with manageable anxiety, not its absence', keys: ['avoidance persists'], mistake: 'Letting anxiety gate the work' }),
      O('d', 'Have her only imagine the feared situations in session and avoid any actual in-vivo practice between the appointments', -1,
        { r: 'Imaginal-only underperforms in-vivo here', approach: 'Imaginal-only framing', why: 'In-vivo exposure is central for agoraphobia', keys: ['real-world avoidance'], mistake: 'Omitting in-vivo practice' }),
    ]),
    Q('q10', 'counseling', 'During an exposure outing Nora has a strong urge to flee a crowded store. The most therapeutic response is to:', ['R2'], [
      O('a', 'Coach her to stay and let the anxiety crest and fall rather than escaping, so she learns she can cope and get help if needed', 3,
        { r: 'Stay until anxiety subsides', approach: 'Model nonavoidant coping', why: 'Remaining until anxiety falls disconfirms the catastrophe and builds mastery', keys: ['urge to flee', 'fears being trapped'], mistake: 'Letting her escape at the peak of anxiety' }),
      O('b', 'Have her leave the store immediately so that she can avoid feeling any more anxiety than she is already feeling right now', -1,
        { r: 'Escaping at the peak reinforces avoidance', approach: 'Facilitate-escape framing', why: 'Leaving teaches that escape was necessary', keys: ['avoidance trap'], mistake: 'Reinforcing escape behavior' }),
      O('c', 'Direct her to call her sister to come and get her so that she does not have to manage the situation entirely on her own', -1,
        { r: 'Summoning the companion is a safety behavior', approach: 'Companion-rescue framing', why: 'It restores the safety behavior being faded', keys: ['safety behavior'], mistake: 'Reinstating the companion mid-exposure' }),
      O('d', 'Reassure her over and over that nothing bad is going to happen so that she feels calm enough to remain in the store', -1,
        { r: 'Repeated reassurance is itself a safety behavior', approach: 'Reassurance framing', why: 'It can undermine the new learning of exposure', keys: ['reassurance dependence'], mistake: 'Reinforcing reassurance-seeking' }),
    ]),
    Q('q11', 'counseling', 'Nora feels ashamed and says her avoidance means she is weak. Best response?', ['R3'], [
      O('a', 'Validate the feeling and reframe seeking treatment as a courageous step toward a common, treatable condition', 3,
        { r: 'Validate then reframe help-seeking', approach: 'Normalize and reframe', why: 'Reframing reduces shame and supports engagement', keys: ['ashamed and trapped'], mistake: 'Either dismissing or reinforcing the belief' }),
      O('b', 'Agree that most people manage to get out and about on their own and commend her for finally coming in for some help', -2,
        { r: 'Endorsing weakness deepens shame', approach: 'Confirm-the-belief framing', why: 'It reinforces the stigma she fears', keys: ['self-stigma'], mistake: 'Colluding with the self-judgment' }),
      O('c', 'Move past the comment quickly and steer the session back to reviewing the exposure hierarchy she has been building', -1,
        { r: 'Bypassing the belief misses a target', approach: 'Redirect-to-task framing', why: 'Self-stigma is clinically relevant', keys: ['unaddressed cognition'], mistake: 'Avoiding emotionally salient material' }),
      O('d', 'Give her detailed statistics on how many adults experience agoraphobia each year across the entire country', -1,
        { r: 'Facts alone rarely shift shame', approach: 'Statistical persuasion', why: 'Validation works better than data here', keys: ['emotional reasoning'], mistake: 'Answering emotion with numbers' }),
    ]),
    Q('q12', 'ethics', 'Nora’s employer asks the counselor to confirm why she has been unable to come to the office. Best response?', ['R5'], [
      O('a', 'Decline to confirm or deny without a valid release and explain that disclosure requires her written consent', 3,
        { r: 'Protect confidentiality without a release', approach: 'Uphold confidentiality', why: 'ACA protects information absent valid consent', keys: ['employer inquiry', 'no release'], mistake: 'Disclosing to an employer without consent' }),
      O('b', 'Confirm that she has agoraphobia, since the employer is clearly already aware she has been struggling to leave her home', -2,
        { r: 'Confirming breaches confidentiality', approach: 'Assume-awareness framing', why: 'Prior awareness does not authorize disclosure', keys: ['no valid release'], mistake: 'Disclosing without authorization' }),
      O('c', 'Share a general summary of her condition so the employer can decide what accommodations might be reasonable for her', -2,
        { r: 'Disclosing for accommodations still needs consent', approach: 'Soft disclosure', why: 'Only a valid release permits disclosure', keys: ['confidentiality'], mistake: 'Leaking details under the guise of helping' }),
      O('d', 'Refuse to speak with the employer at all and hang up without explaining anything about confidentiality or the process', -1,
        { r: 'Abrupt refusal misses a teachable moment', approach: 'Flat refusal', why: 'The rationale can be explained appropriately', keys: ['professional courtesy'], mistake: 'Being needlessly obstructive' }),
    ]),
    Q('q13', 'ethics', 'As in-vivo exposure is planned, what does informed consent most importantly require here?', ['R5'], [
      O('a', 'Explaining the rationale, the temporary anxiety exposure can provoke, and that her participation remains voluntary', 3,
        { r: 'Disclose rationale, discomfort, and choice', approach: 'Obtain informed consent', why: 'Consent requires explaining the approach and its risks', keys: ['exposure planned', 'fears being trapped'], mistake: 'Starting exposure without informed consent' }),
      O('b', 'Assuring her in advance that the exposure outings will be completely comfortable and will never provoke any anxiety at all', -2,
        { r: 'Misrepresenting exposure is dishonest', approach: 'Downplay framing', why: 'Exposure deliberately provokes manageable anxiety', keys: ['accurate disclosure'], mistake: 'Misstating what the treatment involves' }),
      O('c', 'Having her agree up front that she will complete every exposure outing assigned no matter how distressing it turns out to be', -1,
        { r: 'Consent is voluntary and revocable', approach: 'Mandate-completion framing', why: 'She retains the right to pause or decline', keys: ['voluntary participation'], mistake: 'Treating consent as a binding commitment' }),
      O('d', 'Waiting to explain the exposure plan until after the first outing so that her anticipatory anxiety does not build up first', -1,
        { r: 'Withholding the method violates consent', approach: 'Delay-disclosure framing', why: 'Consent must precede the intervention', keys: ['informed choice'], mistake: 'Intervening before explaining' }),
    ]),
  ],
};
delete D140.narrative.songless;

// ============================================================================
// D141 — Cannabis Use Disorder, Moderate (F12.20) — Substance — medium
// ============================================================================
const D141 = {
  id: 'ncmhce-D141',
  title: 'Daily cannabis use and slipping responsibilities',
  category: 'Substance',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Cannabis Use Disorder, Moderate', code: 'F12.20' },
  diagnosis: { name: 'Cannabis Use Disorder, Moderate', code: 'F12.20' },
  differentialOptions: [
    { id: 'do1', name: 'Cannabis Use Disorder, Moderate', isCorrect: true },
    { id: 'do2', name: 'Alcohol Use Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Stimulant Use Disorder (Cocaine)', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
  ],
  narrative: {
    intake:
      'Marcus Reed, a 25-year-old delivery driver, presents at his partner’s urging. He uses cannabis daily, reports needing more to get the ' +
      'same effect, has tried to cut back several times without success, and has missed shifts and commitments because of his use.',
    session1:
      'He identifies about four to five criteria over the past year, including cravings, tolerance, failed cut-down attempts, and continued ' +
      'use despite conflict at home. When he stops for a day or two he becomes irritable and restless and has trouble sleeping and eating.',
    session2:
      'He is ambivalent—he sees some downsides yet doubts cannabis is really a problem—and says he uses it to relax and to cope with low ' +
      'mood. He denies other drug use beyond occasional alcohol and is unsure whether he wants to cut down or stop entirely.',
  },
  diagnosticRationale:
    'A problematic pattern of cannabis use meeting roughly four to five DSM-5-TR criteria over twelve months—craving, tolerance, unsuccessful ' +
    'efforts to cut down, and continued use despite interpersonal problems—indicates a moderate cannabis use disorder. The irritability, ' +
    'restlessness, and sleep and appetite disturbance on stopping reflect cannabis withdrawal within the disorder, distinct from alcohol, stimulant, or a primary depressive disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Cannabis use disorder criteria and severity: 2-3 mild, 4-5 moderate, 6+ severe over 12 months' },
    { id: 'R2', source: 'ASAM Criteria', detail: 'Multidimensional assessment matching to the least intensive safe level of care' },
    { id: 'R3', source: 'SAMHSA TIP 35', detail: 'Motivational, stage-matched approaches to enhance readiness for change' },
    { id: 'R4', source: 'Miller & Rollnick (MI)', detail: 'Roll with resistance, develop discrepancy, and evoke change talk' },
    { id: 'R5', source: 'Transtheoretical Model', detail: 'Stages of change guiding stage-matched intervention' },
    { id: 'R6', source: 'ACA Code of Ethics', detail: 'B.1.: heightened confidentiality of substance-use information and scope of practice' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to confirm a moderate cannabis use disorder?', ['R1'], [
      O('a', 'The number of DSM-5-TR criteria he meets over twelve months, since four to five place severity in the moderate range', 3,
        { r: 'Criterion count sets severity', approach: 'Apply the severity threshold', why: 'DSM-5-TR grades cannabis use disorder by criterion count', keys: ['craving', 'tolerance and failed cut-down'], mistake: 'Estimating severity by amount used alone' }),
      O('b', 'The exact quantity of cannabis he uses each week so that you can calculate precisely how dependent he has become on it', -1,
        { r: 'Quantity alone does not set the diagnosis', approach: 'Quantity framing', why: 'Severity rests on criteria, not amount used', keys: ['criteria-based'], mistake: 'Equating quantity with severity' }),
      O('c', 'Whether he first started using cannabis socially with friends rather than alone to cope with stress or difficult emotions', 0,
        { r: 'Reason for onset is not the criterion', approach: 'Origin framing', why: 'How use began is not a diagnostic criterion', keys: ['onset story'], mistake: 'Using the onset story to diagnose' }),
      O('d', 'Whether anyone else in his immediate family has previously struggled with cannabis or another substance-related condition', -1,
        { r: 'Family history is risk, not diagnosis', approach: 'Heredity framing', why: 'History informs risk, not current criteria', keys: ['no family data'], mistake: 'Using family history to diagnose' }),
    ]),
    Q('q2', 'core', 'How should the counselor understand his irritability and sleep problems when he stops for a day or two?', ['R1'], [
      O('a', 'As cannabis withdrawal, a recognized syndrome that is part of his use disorder rather than a separate primary problem', 3,
        { r: 'Withdrawal within the use disorder', approach: 'Place withdrawal in the disorder', why: 'Cannabis withdrawal is a recognized syndrome counting within the use disorder', keys: ['irritable and restless on stopping', 'sleep and appetite disturbance'], mistake: 'Treating withdrawal as a separate diagnosis' }),
      O('b', 'As clear evidence that he has a separate, independent primary anxiety disorder that happens to flare when he stops using', -1,
        { r: 'The timing ties it to cessation', approach: 'Independent-anxiety framing', why: 'Onset on stopping points to withdrawal, not a primary disorder', keys: ['onset on stopping'], mistake: 'Mislabeling withdrawal as a primary anxiety disorder' }),
      O('c', 'As a sign that he has simply been using cannabis for too many years in a row without ever taking any meaningful break', -1,
        { r: 'Duration is not what defines withdrawal', approach: 'Duration framing', why: 'Withdrawal is defined by the cessation syndrome', keys: ['cessation symptoms'], mistake: 'Equating withdrawal with chronicity' }),
      O('d', 'As an indication that he must immediately be admitted for inpatient detoxification before anything else can be considered', 0,
        { r: 'Level of care follows assessment', approach: 'Reflexive-admission framing', why: 'Placement should follow a multidimensional assessment', keys: ['needs assessment first'], mistake: 'Jumping to a level of care prematurely' }),
    ]),
    Q('q3', 'intake', 'What co-occurring issue is most important to screen for to inform his plan?', ['R1'], [
      O('a', 'A co-occurring depressive disorder, since he reports using cannabis to cope with low mood, which shapes the plan', 3,
        { r: 'Screen for co-occurring depression', approach: 'Assess comorbidity', why: 'Mood symptoms commonly co-occur and influence sequencing', keys: ['uses to cope with low mood'], mistake: 'Treating the use disorder without screening mood' }),
      O('b', 'A previously undetected primary psychotic disorder that might better account for his conflict at home and missed shifts', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be contributing to both his appetite changes and his disrupted daily routine', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'Appetite change here reflects withdrawal, not an eating disorder', keys: ['no eating concerns'], mistake: 'Inventing an unsupported comorbidity' }),
      O('d', 'An emerging neurocognitive decline that could explain why he keeps forgetting his shifts and his commitments lately', 0,
        { r: 'Cognitive decline is premature here', approach: 'Neurocognitive framing', why: 'Substance effects are a simpler explanation', keys: ['substance-linked'], mistake: 'Over-attributing to cognitive decline' }),
    ]),
    Q('q4', 'core', 'How should the counselor understand Marcus’s back-and-forth about whether to change?', ['R5'], [
      O('a', 'As normal ambivalence consistent with the contemplation stage rather than a lack of genuine motivation to change', 3,
        { r: 'Frame ambivalence as a stage', approach: 'Stage the readiness', why: 'The Transtheoretical Model frames this as contemplation', keys: ['sees downsides yet doubts it is a problem'], mistake: 'Reading ambivalence as resistance or denial' }),
      O('b', 'As clear proof that he is firmly in denial and is not yet truly ready to engage in any meaningful treatment at all', -2,
        { r: 'Labeling denial misreads the stage', approach: 'Denial framing', why: 'Ambivalence is expected, not denial', keys: ['contemplation'], mistake: 'Pathologizing normal ambivalence' }),
      O('c', 'As evidence that he is already firmly in the action stage and is therefore ready to commit to complete abstinence today', -1,
        { r: 'Overestimating readiness misfires', approach: 'Over-staging framing', why: 'He has not resolved his ambivalence yet', keys: ['still deciding'], mistake: 'Pushing action prematurely' }),
      O('d', 'As proof that an untreated underlying medical condition, rather than the cannabis itself, is the real core of the problem', -1,
        { r: 'Premature reattribution is an error', approach: 'Reattribution framing', why: 'Ambivalence does not establish a medical primary cause', keys: ['no medical basis indicated'], mistake: 'Explaining away the substance problem' }),
    ]),
    Q('q5', 'intake', 'What is most important to assess regarding his pattern of use and consequences?', ['R1'], [
      O('a', 'How his use affects his work, relationships, and responsibilities, mapping the specific criteria and impairment present', 3,
        { r: 'Map criteria and functional consequences', approach: 'Assess impairment and criteria', why: 'Functional consequences and criteria define the disorder and guide care', keys: ['missed shifts', 'conflict at home'], mistake: 'Counting use without assessing impairment' }),
      O('b', 'The precise brand and potency of the cannabis products he uses so that you can document exactly what he has been taking', -1,
        { r: 'Product detail is low yield', approach: 'Product-detail framing', why: 'It does not establish the disorder or guide care', keys: ['criteria-based'], mistake: 'Collecting irrelevant detail' }),
      O('c', 'A full reconstruction of every place he has ever bought cannabis so that you understand his complete purchasing history', -1,
        { r: 'Purchasing history is low yield', approach: 'History framing', why: 'It does not inform the diagnosis or plan', keys: ['low yield'], mistake: 'Collecting low-yield detail' }),
      O('d', 'Whether his use is clearly heavier today than it was earlier in this same week of assessment sessions with you', 0,
        { r: 'A recent trend is not the key data', approach: 'Recent-change framing', why: 'The pattern of criteria and impairment is what matters', keys: ['pattern over time'], mistake: 'Focusing on a short-term trend' }),
    ]),
    Q('q6', 'treatment', 'Given his ambivalence, what is the most appropriate primary counseling approach?', ['R3'], [
      O('a', 'Motivational interviewing to explore his ambivalence and strengthen his own reasons for change at his current stage', 3,
        { r: 'MI fits his ambivalence and stage', approach: 'Match method to readiness', why: 'TIP 35 endorses MI for ambivalent clients', keys: ['contemplation', 'mixed feelings'], mistake: 'Pushing action before readiness' }),
      O('b', 'A firm, direct confrontation about the damage his cannabis use is causing so that he finally faces the full reality of it', -2,
        { r: 'Confrontation raises resistance', approach: 'Confrontational framing', why: 'Confrontation tends to harden ambivalence', keys: ['ambivalent client'], mistake: 'Using confrontation to force insight' }),
      O('c', 'A structured relapse-prevention program built entirely around his committing right now to a firm quit date for abstinence', -1,
        { r: 'Action-stage tools precede his readiness', approach: 'Action-first framing', why: 'He has not yet resolved his ambivalence', keys: ['not in action stage'], mistake: 'Applying action tools too early' }),
      O('d', 'Primarily educational lectures detailing the harms of cannabis so that the facts alone convince him to stop using it', -1,
        { r: 'Education alone rarely resolves ambivalence', approach: 'Didactic framing', why: 'Evoking his own motivation works better', keys: ['needs change talk'], mistake: 'Relying on information to motivate' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor determine his appropriate level of care?', ['R2'], [
      O('a', 'Use a multidimensional assessment of his withdrawal, environment, and readiness to match him to the least intensive safe setting', 3,
        { r: 'Use multidimensional placement', approach: 'Apply level-of-care criteria', why: 'ASAM matches care level across multiple dimensions', keys: ['mild withdrawal', 'ambivalence'], mistake: 'Defaulting to one fixed program' }),
      O('b', 'Automatically refer him to the most intensive residential program available so that he is kept away from cannabis entirely', -1,
        { r: 'Maximal care ignores placement criteria', approach: 'Top-intensity framing', why: 'Level of care should match assessed need', keys: ['individualized placement'], mistake: 'Over-placing without assessment' }),
      O('c', 'Recommend only a single monthly check-in, assuming that minimal contact will be enough to address his cannabis use', -1,
        { r: 'Under-placement ignores his needs', approach: 'Minimal-care framing', why: 'Moderate use disorder may need more than minimal contact', keys: ['moderate severity'], mistake: 'Under-treating a moderate presentation' }),
      O('d', 'Let him choose whichever program has the most convenient schedule regardless of his clinical needs or his readiness', 0,
        { r: 'Preference cannot override clinical need', approach: 'Convenience framing', why: 'Placement must reflect assessed need', keys: ['shared decision input'], mistake: 'Letting convenience drive placement' }),
    ]),
    Q('q8', 'treatment', 'What is the most appropriate first-line treatment recommendation for his cannabis use disorder?', ['R3'], [
      O('a', 'Evidence-based behavioral treatment such as CBT and motivational enhancement, since no medication is approved for cannabis use disorder', 3,
        { r: 'Behavioral treatment is first-line here', approach: 'Apply the evidence base', why: 'No FDA-approved medication exists; behavioral treatments are first-line', keys: ['moderate cannabis use disorder'], mistake: 'Waiting for or expecting a medication cure' }),
      O('b', 'A referral to start an anti-craving medication for cannabis right away as the single most important step in his treatment', -1,
        { r: 'No approved medication exists for it', approach: 'Medication-first framing', why: 'There is no FDA-approved medication for cannabis use disorder', keys: ['behavioral first-line'], mistake: 'Overstating a pharmacologic option that does not exist' }),
      O('c', 'A recommendation that he simply use willpower to stay away from cannabis, since behavioral treatment is rarely truly necessary', -2,
        { r: 'Willpower framing is inaccurate', approach: 'Willpower framing', why: 'It dismisses effective behavioral treatment', keys: ['clinical disorder'], mistake: 'Moralizing instead of treating' }),
      O('d', 'A primarily insight-oriented exploration of his early childhood as the central route to resolving his cannabis use', 0,
        { r: 'Insight-only is not first-line here', approach: 'Depth-only framing', why: 'Behavioral treatments are the indicated approach', keys: ['symptom-focused need'], mistake: 'Prioritizing origins over behavioral treatment' }),
    ]),
    Q('q9', 'counseling', 'Marcus says, “I could stop any time; it’s really not a big deal.” The MI-consistent response is to:', ['R4'], [
      O('a', 'Reflect his statement and explore both sides of his ambivalence without arguing against him about how serious it is', 3,
        { r: 'Roll with resistance; explore ambivalence', approach: 'Reflect rather than argue', why: 'Rolling with resistance avoids taking the change side for him', keys: ['minimizes the problem'], mistake: 'Arguing him into agreement' }),
      O('b', 'Point out all the evidence that proves his cannabis use is in fact a serious problem that he needs to address right now', -2,
        { r: 'Arguing the change side raises resistance', approach: 'Righting-reflex framing', why: 'Marshaling evidence tends to evoke counter-arguments', keys: ['discord risk'], mistake: 'Taking up the change side of the argument' }),
      O('c', 'Agree fully that his cannabis use is not a problem so that he feels supported and stays comfortable working with you', -1,
        { r: 'Colluding with minimization is unhelpful', approach: 'Concede-the-minimization framing', why: 'Agreeing abandons the clinical concern', keys: ['minimization endorsed'], mistake: 'Siding with the status quo to please him' }),
      O('d', 'Quickly change the subject to avoid any disagreement with him about exactly how serious his cannabis use really is', -1,
        { r: 'Avoiding the moment wastes an opening', approach: 'Topic-avoidance framing', why: 'It loses a key motivational opening', keys: ['missed opening'], mistake: 'Avoiding the topic to dodge conflict' }),
    ]),
    Q('q10', 'counseling', 'Marcus returns to daily use after a week of cutting back and is discouraged. The most therapeutic response is to:', ['R3'], [
      O('a', 'Frame the return to use as common in change, explore what it taught him, and revisit the plan without shaming him', 3,
        { r: 'Treat the lapse as learning', approach: 'Normalize and problem-solve', why: 'Lapses are common and informative in behavior change', keys: ['discouraged after a slip'], mistake: 'Treating a lapse as total failure' }),
      O('b', 'Warn him seriously that another slip like this one will likely undo all of his progress and prove he cannot really do this', -2,
        { r: 'Catastrophizing deepens shame', approach: 'Threat framing', why: 'It feeds the abstinence-violation effect', keys: ['shame spiral'], mistake: 'Amplifying shame after a lapse' }),
      O('c', 'Recommend that he immediately step up to a far more restrictive level of care since the current plan has obviously failed', -1,
        { r: 'One lapse does not mandate escalation', approach: 'Reflexive-escalation framing', why: 'A single lapse is not treatment failure', keys: ['expected setback'], mistake: 'Over-escalating after one slip' }),
      O('d', 'Reassure him that the slip really does not matter at all and encourage him to simply forget about it and move on quickly', -1,
        { r: 'Dismissing the lapse skips learning', approach: 'Minimize-the-lapse framing', why: 'Exploring the lapse yields useful data', keys: ['learning opportunity'], mistake: 'Glossing over a teachable moment' }),
    ]),
    Q('q11', 'ethics', 'Marcus’s employer requests his substance-use treatment records after the missed shifts. Best response?', ['R6'], [
      O('a', 'Decline to release records without a valid release and explain that substance-use information has heightened confidentiality protections', 3,
        { r: 'SUD records get heightened protection', approach: 'Apply heightened confidentiality', why: 'Substance-use treatment information carries enhanced protection', keys: ['employer request', 'no release'], mistake: 'Releasing SUD records without proper consent' }),
      O('b', 'Send the records to the employer promptly so that the employer can decide how best to handle his recent missed work shifts', -2,
        { r: 'Releasing without consent breaches confidentiality', approach: 'Disclose-to-employer framing', why: 'Disclosing protected records without authorization is a breach', keys: ['no authorization'], mistake: 'Releasing records on request alone' }),
      O('c', 'Share only his diagnosis with the employer, since a single diagnostic label seems like a relatively harmless detail to provide', -2,
        { r: 'A diagnosis is protected information', approach: 'Partial-disclosure framing', why: 'Even a diagnosis requires authorization to disclose', keys: ['confidentiality'], mistake: 'Sharing a diagnosis as if harmless' }),
      O('d', 'Forward the employer’s request to Marcus and avoid documenting in the record that the request was ever received at all', -1,
        { r: 'The request should be documented', approach: 'Redirect-without-documenting framing', why: 'The request and response should be documented', keys: ['record integrity'], mistake: 'Failing to document a records request' }),
    ]),
    Q('q12', 'ethics', 'Marcus asks whether there is a medication that will take away his cravings for cannabis. Best response?', ['R6'], [
      O('a', 'Explain honestly that no medication is approved for cannabis use disorder and coordinate medical evaluation for related concerns', 3,
        { r: 'State the evidence honestly; coordinate care', approach: 'Give accurate information within scope', why: 'No FDA-approved medication exists; behavioral treatment is the mainstay', keys: ['asks about a craving medication'], mistake: 'Implying a medication cure that does not exist' }),
      O('b', 'Recommend a specific medication and dose that he should ask his physician to prescribe to take away his cravings', -2,
        { r: 'Naming a drug and dose exceeds scope', approach: 'Prescriptive advice', why: 'Counselors do not recommend medications or doses', keys: ['no prescriptive authority'], mistake: 'Overstepping into medication management' }),
      O('c', 'Assure him that a reliable anti-cannabis medication exists and that starting it will be the single most important part of treatment', -2,
        { r: 'Overstating a nonexistent option is dishonest', approach: 'Overstate-the-option framing', why: 'There is no approved medication for cannabis use disorder', keys: ['accurate information'], mistake: 'Promising a treatment that does not exist' }),
      O('d', 'Tell him medication questions have nothing to do with counseling and decline to discuss anything related to his health concerns', -1,
        { r: 'Refusing to coordinate abandons the need', approach: 'Flat refusal', why: 'Coordinating medical evaluation is appropriate', keys: ['care coordination'], mistake: 'Declining to help with a legitimate concern' }),
    ]),
    Q('q13', 'ethics', 'Marcus asks the counselor to coordinate with his physician and his partner. What must come first?', ['R6'], [
      O('a', 'Obtain his specific, informed consent and release for each party before sharing any of his protected information', 3,
        { r: 'Get a valid release for each party', approach: 'Secure informed consent first', why: 'Disclosure of SUD information requires a valid release for each recipient', keys: ['multiple parties', 'protected information'], mistake: 'Coordinating before obtaining consent' }),
      O('b', 'Begin coordinating with both parties right away, since he has already told you in session that he wants you to work with them', -2,
        { r: 'Verbal interest is not a valid release', approach: 'Assume-consent framing', why: 'Each disclosure needs a specific written release', keys: ['no signed release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Coordinate freely with his physician without a release because both of you are providers working on the same case together', -1,
        { r: 'Coordination still requires consent', approach: 'Treatment-exception framing', why: 'A valid release is still needed to share information', keys: ['consent required'], mistake: 'Assuming shared care waives consent' }),
      O('d', 'Coordinate only with his partner for now and decide about the physician later without discussing the matter with him', -1,
        { r: 'Each disclosure is his informed choice', approach: 'Selective-disclosure framing', why: 'The client decides each release, not the counselor alone', keys: ['client autonomy'], mistake: 'Making release decisions for the client' }),
    ]),
  ],
};

// ============================================================================
// D142 — Antisocial Personality Disorder (F60.2) — Personality — hard
// ============================================================================
const D142 = {
  id: 'ncmhce-D142',
  title: 'Court-mandated counseling amid a pattern of disregard for others',
  category: 'Personality',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Antisocial Personality Disorder', code: 'F60.2' },
  diagnosis: { name: 'Antisocial Personality Disorder', code: 'F60.2' },
  differentialOptions: [
    { id: 'do1', name: 'Antisocial Personality Disorder', isCorrect: true },
    { id: 'do2', name: 'Narcissistic Personality Disorder', isCorrect: false },
    { id: 'do3', name: 'Conduct Disorder, Adolescent-Onset Type', isCorrect: false },
    { id: 'do4', name: 'Intermittent Explosive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Derek Lang, a 35-year-old man, attends counseling mandated by his probation. He presents a long-standing pattern of disregard for ' +
      'others’ rights—repeated deceit, impulsivity, aggression, and irresponsibility—and shows little remorse for the harm he has caused.',
    session1:
      'History reveals conduct problems before age 15, including truancy, fighting, and rule-breaking, continuing into a pattern of unlawful ' +
      'and exploitative behavior as an adult. He is currently over 18, and the pattern is pervasive across work, relationships, and the law.',
    session2:
      'He is charming and minimizes his behavior, blames others, and tries to get the counselor to bend the rules and sign off early. He ' +
      'admits occasional heavy alcohol use and at one point hints, with a smile, that someone who crossed him "had it coming."',
  },
  diagnosticRationale:
    'A pervasive pattern since age 15 of disregard for and violation of the rights of others—deceitfulness, impulsivity, irritability and ' +
    'aggressiveness, reckless disregard for safety, irresponsibility, and lack of remorse—in a person at least 18 with evidence of conduct ' +
    'disorder before age 15 meets DSM-5-TR criteria for antisocial personality disorder, distinct from narcissistic personality disorder, conduct disorder, or intermittent explosive disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'ASPD: pervasive disregard for others’ rights since age 15; 18+; evidence of conduct disorder before 15' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Approach selection, structure, and managing the alliance with personality pathology' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured risk screening; risk to self and others is assessed and acted upon' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'B.1., B.2., and C.2.: confidentiality limits, duty to protect, mandated-client roles, and competence' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Clinical decision-making and coordinated care across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to support an antisocial personality disorder diagnosis?', ['R1'], [
      O('a', 'A pervasive pattern of disregard for others’ rights since age 15, in a person 18 or older with conduct disorder before age 15', 3,
        { r: 'Pervasive disregard, age, and conduct-disorder history', approach: 'Confirm the diagnostic pattern', why: 'DSM-5-TR requires the pattern since 15, age 18+, and conduct disorder before 15', keys: ['conduct problems before 15', 'adult unlawful, exploitative pattern'], mistake: 'Diagnosing ASPD without the childhood conduct-disorder history' }),
      O('b', 'That he can identify the single life event he believes first caused him to start behaving in this particular way', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['pattern-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his behavior has clearly become more severe over the past week than it was during the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A pervasive, enduring pattern is required', keys: ['enduring pattern'], mistake: 'Confusing a recent change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define ASPD', approach: 'Mood-criteria framing', why: 'ASPD is a personality pattern, not a mood episode', keys: ['personality pattern'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from narcissistic personality disorder?', ['R1'], [
      O('a', 'His core pattern is disregard for others’ rights and deceit for gain, not a need for admiration with fragile self-esteem', 3,
        { r: 'Disregard/deceit versus admiration/fragility', approach: 'Contrast the core motivation', why: 'ASPD centers on disregard and deceit; NPD on admiration and fragile esteem', keys: ['repeated deceit', 'lack of remorse'], mistake: 'Conflating exploitation with a need for admiration' }),
      O('b', 'The fact that he can be charming and persuasive and uses those qualities to get other people to do what he wants from them', -1,
        { r: 'Charm and manipulation occur in both', approach: 'Charm framing', why: 'Superficial charm can appear in both; the motivation differs', keys: ['shared feature'], mistake: 'Using charm to differentiate' }),
      O('c', 'The irritability and the anger that he displays when his demands are not met or when others get in his way', -1,
        { r: 'Anger is nonspecific', approach: 'Anger framing', why: 'Irritability occurs in both', keys: ['shared affect'], mistake: 'Reading anger as decisive' }),
      O('d', 'The high level of confidence that he projects about his own abilities during his conversations with the counselor', 0,
        { r: 'Confidence is nonspecific', approach: 'Confidence framing', why: 'Projected confidence does not separate the disorders', keys: ['nonspecific trait'], mistake: 'Using confidence to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from conduct disorder?', ['R1'], [
      O('a', 'He is an adult over 18, so the enduring adult pattern is diagnosed as antisocial personality disorder rather than conduct disorder', 3,
        { r: 'Adult age shifts the diagnosis', approach: 'Apply the age criterion', why: 'Conduct disorder is for those under 18; ASPD applies to the adult pattern', keys: ['currently over 18', 'conduct problems before 15'], mistake: 'Diagnosing conduct disorder in an adult' }),
      O('b', 'The fact that he showed truancy, fighting, and rule-breaking behaviors during his earlier adolescent years before age 15', -1,
        { r: 'Childhood conduct problems support, not differentiate', approach: 'History framing', why: 'Conduct-disorder history is a criterion for ASPD, not what separates them', keys: ['conduct-disorder history'], mistake: 'Using the childhood history to differentiate' }),
      O('c', 'The deceit and the rule-breaking that he continues to display in his interactions with others as part of his daily life', -1,
        { r: 'These behaviors occur in both', approach: 'Symptom-presence framing', why: 'Rule-breaking is shared; age is the differentiator', keys: ['shared behavior'], mistake: 'Reading shared behavior as decisive' }),
      O('d', 'The way his behavior tends to be worse during the most stressful and high-pressure periods of his life', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'What is most important to assess given his heavy alcohol use?', ['R1'], [
      O('a', 'Whether a co-occurring substance use disorder is contributing to his behavior and needs to be addressed in the plan', 3,
        { r: 'Assess co-occurring substance use', approach: 'Screen comorbidity', why: 'Substance use commonly co-occurs and shapes treatment and risk', keys: ['occasional heavy alcohol use'], mistake: 'Assessing the personality pattern in isolation' }),
      O('b', 'A previously undetected primary psychotic disorder that might better account for his disregard for the rights of others', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be contributing to both his impulsivity and his irritability with other people', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported comorbidity' }),
      O('d', 'An emerging neurocognitive decline that could explain why he keeps getting into legal and interpersonal trouble lately', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'The lifelong pattern fits ASPD, not decline', keys: ['lifelong pattern'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'intake', 'His comment that someone "had it coming" is most important to address by:', ['R3'], [
      O('a', 'Assessing carefully for any specific threat or risk to an identifiable person and following duty-to-protect obligations as indicated', 3,
        { r: 'Assess threat and duty to protect', approach: 'Screen risk to others', why: 'A hint of harm to others requires careful risk assessment and possible protective duties', keys: ['"had it coming" comment', 'aggression history'], mistake: 'Letting an ambiguous threat pass without assessment' }),
      O('b', 'Ignoring the comment entirely, since clients often make dramatic statements that they do not really mean anything by at all', -2,
        { r: 'Dismissing a possible threat is unsafe', approach: 'Dismiss framing', why: 'Possible threats to others must be assessed, not ignored', keys: ['unassessed threat'], mistake: 'Overlooking a potential risk to others' }),
      O('c', 'Immediately reporting him to the police and his probation officer without first assessing the seriousness of the comment', -1,
        { r: 'Act on assessed risk, not reflexively', approach: 'Reflexive-report framing', why: 'Protective steps follow a careful risk assessment', keys: ['proportionate response'], mistake: 'Escalating before assessing the risk' }),
      O('d', 'Focusing only on building rapport so that he keeps talking, and revisiting the comment at some later point in treatment', -1,
        { r: 'Deferring a possible threat is unsafe', approach: 'Rapport-only framing', why: 'A possible threat is assessed now, not deferred', keys: ['active concern'], mistake: 'Postponing a needed risk assessment' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment-planning expectation for him?', ['R2'], [
      O('a', 'Realistic, structured goals focused on reducing harmful behavior and managing comorbidity, with clear limits and consequences', 3,
        { r: 'Realistic, structured, behavior-focused goals', approach: 'Set achievable, structured goals', why: 'ASPD treatment targets behavior and comorbidity within a firm structure', keys: ['mandated client', 'substance use'], mistake: 'Expecting a rapid personality transformation' }),
      O('b', 'A brief, time-limited intervention aimed at quickly and permanently changing his core personality structure within a few sessions', -1,
        { r: 'Brief work cannot remake the structure', approach: 'Quick-fix framing', why: 'Personality change is gradual, not brief', keys: ['enduring pattern'], mistake: 'Setting an unrealistic, rapid goal' }),
      O('c', 'A warm, unstructured supportive approach that mainly offers him a nonjudgmental space to talk about whatever he wishes', -1,
        { r: 'Unstructured support invites manipulation', approach: 'Unstructured-support framing', why: 'A clear structure is needed with this presentation', keys: ['needs structure'], mistake: 'Leaving the work without a firm frame' }),
      O('d', 'Mostly going along with his requests so that he stays cooperative and continues to attend his mandated sessions with you', -2,
        { r: 'Going along invites manipulation', approach: 'Appease framing', why: 'Accommodating manipulation undermines the treatment frame', keys: ['secondary gain'], mistake: 'Bending the frame to keep him cooperative' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor structure the treatment frame given his manipulation and secondary gain?', ['R4'], [
      O('a', 'Establish clear, consistent boundaries and limits, applied predictably, and be transparent about the mandated reporting relationship', 3,
        { r: 'Clear, consistent boundaries and transparency', approach: 'Set a firm, transparent frame', why: 'A consistent frame and transparency manage manipulation and the mandated context', keys: ['tries to get rules bent', 'probation-mandated'], mistake: 'Leaving the frame vague and negotiable' }),
      O('b', 'Agree to bend the rules and sign off early when he asks, since keeping him cooperative is the most important thing here', -2,
        { r: 'Bending the rules rewards manipulation', approach: 'Accommodate framing', why: 'It reinforces manipulation and compromises integrity', keys: ['secondary gain'], mistake: 'Caving to manipulation' }),
      O('c', 'Set unusually harsh and punitive rules from the outset to make sure he clearly understands exactly who is in charge here', -1,
        { r: 'Punitive rigidity invites power struggles', approach: 'Authoritarian framing', why: 'A harsh stance can provoke conflict without building the frame', keys: ['power struggle risk'], mistake: 'Using rigidity to dominate' }),
      O('d', 'Avoid setting any clear boundaries early on so that the relationship does not feel adversarial before trust is built', -1,
        { r: 'No boundaries invites manipulation', approach: 'Boundary-free framing', why: 'A clear frame is essential with this presentation', keys: ['frame stability'], mistake: 'Deferring all limits indefinitely' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor handle coordination with his probation officer?', ['R4'], [
      O('a', 'Clarify at the outset what will be shared with probation and the limits of confidentiality in this mandated arrangement', 3,
        { r: 'Clarify mandated-reporting expectations up front', approach: 'Define the mandated frame', why: 'Mandated clients need clear, up-front clarity on what is shared with the referring authority', keys: ['probation-mandated', 'reporting relationship'], mistake: 'Leaving the reporting expectations undefined' }),
      O('b', 'Share whatever the probation officer asks for at any time, since a mandated client has no confidentiality protections at all', -1,
        { r: 'Mandated clients still have some protections', approach: 'No-confidentiality framing', why: 'Even mandated clients retain protections within defined limits', keys: ['defined limits'], mistake: 'Disregarding confidentiality entirely' }),
      O('c', 'Refuse to share anything at all with probation, treating the case exactly as you would a fully voluntary, private client', -1,
        { r: 'Refusing ignores the mandated arrangement', approach: 'Absolute-confidentiality framing', why: 'The mandated arrangement defines specific reporting', keys: ['mandated context'], mistake: 'Ignoring the terms of the mandate' }),
      O('d', 'Decide case by case in the moment what to share with probation without ever explaining the arrangement to the client', -2,
        { r: 'Undisclosed ad hoc sharing undermines consent', approach: 'Ad-hoc framing', why: 'The client must be told the reporting terms up front', keys: ['informed consent'], mistake: 'Sharing without clarifying the frame to the client' }),
    ]),
    Q('q9', 'counseling', 'Derek is charming and tries to get the counselor to bend a rule “just this once.” The most therapeutic response is to:', ['R2'], [
      O('a', 'Maintain the boundary calmly and consistently while keeping the relationship respectful and non-adversarial', 3,
        { r: 'Hold the boundary calmly and consistently', approach: 'Maintain a steady frame', why: 'Consistent, respectful limit-holding resists manipulation', keys: ['tries to bend the rules', 'charming'], mistake: 'Either caving or becoming hostile' }),
      O('b', 'Make an exception just this one time, since granting a small favor will help build rapport and keep him engaged in treatment', -2,
        { r: 'Granting the favor rewards manipulation', approach: 'Exception framing', why: 'It reinforces the manipulation and erodes the frame', keys: ['secondary gain'], mistake: 'Bending the boundary to build rapport' }),
      O('c', 'Respond with sharp criticism of his attempt to manipulate you so that he understands that you see exactly what he is doing', -1,
        { r: 'Hostility invites a power struggle', approach: 'Confrontational framing', why: 'A harsh tone can provoke conflict without holding the frame', keys: ['power struggle risk'], mistake: 'Reacting with hostility' }),
      O('d', 'Avoid giving him a clear answer about the rule so that you do not have to risk a confrontation with him in the session', -1,
        { r: 'Vagueness invites repeated testing', approach: 'Evade framing', why: 'A clear, consistent boundary is needed', keys: ['frame stability'], mistake: 'Leaving the boundary ambiguous' }),
    ]),
    Q('q10', 'counseling', 'The counselor notices feeling intimidated and also strangely charmed by Derek. The most appropriate step is to:', ['R4'], [
      O('a', 'Seek consultation or supervision to manage the countertransference and protect the integrity of the treatment', 3,
        { r: 'Use consultation for countertransference', approach: 'Seek consultation', why: 'ACA supports consultation to manage reactions and maintain competence', keys: ['feeling intimidated and charmed'], mistake: 'Letting the reaction silently shape care' }),
      O('b', 'Act on the intimidation by quietly relaxing the rules so that the sessions feel less tense and confrontational for you', -2,
        { r: 'Acting on intimidation rewards manipulation', approach: 'Cave framing', why: 'Letting the reaction loosen the frame compromises treatment', keys: ['frame erosion'], mistake: 'Letting your reaction erode the boundaries' }),
      O('c', 'Disclose your discomfort openly to Derek in session so that he fully understands the effect he is having on you', -1,
        { r: 'Burdening the client is inappropriate', approach: 'Over-disclosure framing', why: 'Self-disclosure here serves the clinician, not the client', keys: ['client welfare'], mistake: 'Shifting your reaction onto the client' }),
      O('d', 'Begin the process of transferring him to another provider right away, since your reactions mean you can no longer be effective', -1,
        { r: 'Premature transfer is not the first step', approach: 'Reflexive-transfer framing', why: 'Consultation should precede any transfer', keys: ['continuity of care'], mistake: 'Transferring instead of addressing the reaction' }),
    ]),
    Q('q11', 'ethics', 'In this mandated arrangement, how should the counselor handle confidentiality with Derek?', ['R4'], [
      O('a', 'Explain clearly at the outset what is and is not confidential and what will be reported to probation, within the mandate’s terms', 3,
        { r: 'Clarify confidentiality and reporting up front', approach: 'Define confidentiality in the mandate', why: 'Mandated clients must be told the confidentiality and reporting terms at the outset', keys: ['mandated client', 'reporting relationship'], mistake: 'Leaving confidentiality terms unclear' }),
      O('b', 'Promise him that nothing he says will ever be shared with probation so that he feels free to be completely open with you', -2,
        { r: 'Absolute confidentiality is inaccurate here', approach: 'Overpromise framing', why: 'The mandate defines specific reporting that cannot be promised away', keys: ['reporting obligations'], mistake: 'Guaranteeing secrecy the mandate does not allow' }),
      O('c', 'Tell him he has no confidentiality at all and that everything he says will automatically be reported directly to probation', -1,
        { r: 'Overstating the limits is inaccurate', approach: 'No-confidentiality framing', why: 'Not everything is reported; the limits are defined', keys: ['defined limits'], mistake: 'Misstating the scope of reporting' }),
      O('d', 'Avoid discussing confidentiality at all so that the issue does not complicate the start of his mandated treatment', -1,
        { r: 'Skipping the discussion undermines consent', approach: 'Evade framing', why: 'Confidentiality terms are part of informed consent', keys: ['informed consent'], mistake: 'Failing to set expectations' }),
    ]),
    Q('q12', 'ethics', 'Derek makes a clear, specific threat against an identifiable former associate during a session. The most appropriate action is to:', ['R3'], [
      O('a', 'Assess the risk and follow duty-to-protect obligations, which may require warning or other protective steps', 3,
        { r: 'Assess and act on duty to protect', approach: 'Apply duty-to-protect', why: 'A serious, specific, identifiable threat triggers assessment and protective duties', keys: ['specific threat', 'identifiable target'], mistake: 'Treating an identifiable threat as fully confidential' }),
      O('b', 'Keep the threat entirely confidential, since anything a client shares in counseling must always remain completely private', -2,
        { r: 'Confidentiality yields to a serious threat', approach: 'Absolutist framing', why: 'A serious, identifiable threat can require disclosure', keys: ['identifiable target'], mistake: 'Treating confidentiality as absolute when there is danger' }),
      O('c', 'Wait to see whether he mentions the same threat again at the next session before taking any action or assessing the risk', -2,
        { r: 'Delaying assessment of a threat is unsafe', approach: 'Wait-and-see framing', why: 'An identifiable threat requires prompt assessment', keys: ['active threat'], mistake: 'Postponing an urgent risk assessment' }),
      O('d', 'Confront the former associate yourself to warn them before assessing the seriousness or following the proper protective process', -1,
        { r: 'Acting outside the process is inappropriate', approach: 'Self-action framing', why: 'Protective steps follow assessment and proper channels', keys: ['proper process'], mistake: 'Bypassing the proper protective process' }),
    ]),
    Q('q13', 'ethics', 'Derek asks the counselor to write the court a letter stating he has “fully completed treatment and is no longer any risk.” Best response?', ['R4'], [
      O('a', 'Provide accurate documentation of his actual participation and progress, with consent, without overstating completion or risk', 3,
        { r: 'Document accurately; do not overstate', approach: 'Maintain honest, in-scope records', why: 'Counselors document accurately and do not certify conclusions the record cannot support', keys: ['wants a favorable letter'], mistake: 'Overstating completion or risk to help the client' }),
      O('b', 'Write the letter exactly as he wants it so that he gets a favorable outcome with the court and stays cooperative with you', -2,
        { r: 'Misrepresentation is unethical', approach: 'Misrepresent-to-help framing', why: 'It falsifies the record and is unethical', keys: ['accuracy required'], mistake: 'Falsifying documentation to benefit the client' }),
      O('c', 'Refuse to provide any documentation at all and tell him that nothing about his treatment can ever be shared with the court', -1,
        { r: 'A blanket refusal overstates the limit', approach: 'Flat-refusal framing', why: 'Accurate documentation with consent is permissible', keys: ['consent process'], mistake: 'Withholding even appropriate documentation' }),
      O('d', 'State in the letter that he is no longer any risk based mainly on his own assurance that he has changed his behavior', -2,
        { r: 'Certifying no risk on his say-so is unsupportable', approach: 'Unsupported-certification framing', why: 'You cannot certify a conclusion the record does not support', keys: ['not supportable'], mistake: 'Issuing conclusions you cannot substantiate' }),
    ]),
  ],
};

// ============================================================================
// D143 — Adjustment Disorder, with Mixed Anxiety and Depressed Mood (F43.23)
//        — Trauma — medium
// ============================================================================
const D143 = {
  id: 'ncmhce-D143',
  title: 'Anxiety and low mood after a divorce and a job loss',
  category: 'Trauma',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Adjustment Disorder, with Mixed Anxiety and Depressed Mood', code: 'F43.23' },
  diagnosis: { name: 'Adjustment Disorder, with Mixed Anxiety and Depressed Mood', code: 'F43.23' },
  differentialOptions: [
    { id: 'do1', name: 'Adjustment Disorder, with Mixed Anxiety and Depressed Mood', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Posttraumatic Stress Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Priya Anand, a 40-year-old marketing manager, presents two months after a divorce and a layoff with a mix of anxiety and low mood, ' +
      'worry about the future, tearfulness, and trouble sleeping that began within weeks of these stressors and feels out of proportion to her usual coping.',
    session1:
      'Her distress and the impairment in her work search and daily functioning clearly exceed what she would expect of herself, but she does ' +
      'not meet the full criteria for a major depressive episode or for generalized anxiety, and there was no event involving threatened death or serious injury.',
    session2:
      'She has supportive friends and no prior psychiatric history, denies suicidal intent, and is motivated to cope better. She expects the ' +
      'distress to ease as she adjusts, and she wants help managing the anxiety and low mood while she rebuilds her life after the changes.',
  },
  diagnosticRationale:
    'Emotional symptoms of both anxiety and depressed mood developing within three months of identifiable stressors (divorce and job loss), ' +
    'with distress out of proportion to the stressors and significant impairment, that do not meet criteria for another disorder and are not ' +
    'normal bereavement, meet DSM-5-TR criteria for adjustment disorder with mixed anxiety and depressed mood, distinct from MDD, GAD, or PTSD.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Adjustment disorder: emotional/behavioral symptoms within 3 months of a stressor, out of proportion, not another disorder' },
    { id: 'R2', source: 'APA CPG', detail: 'Stress and depressive symptoms: problem-focused and cognitive-behavioral psychotherapy' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when distress is significant' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, scope of practice, and informed consent' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Measurement-based care and clinical decision-making across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an adjustment disorder diagnosis?', ['R1'], [
      O('a', 'That her symptoms began within three months of identifiable stressors and cause distress out of proportion with impairment', 3,
        { r: 'Onset after a stressor, out of proportion, impairing', approach: 'Confirm the core criteria', why: 'Adjustment disorder requires onset within 3 months of a stressor with disproportionate distress and impairment', keys: ['within weeks of divorce and layoff', 'out of proportion'], mistake: 'Diagnosing adjustment disorder without tying it to the stressor and impairment' }),
      O('b', 'That she experienced an event involving actual or threatened death or serious injury that set off her current symptoms', -1,
        { r: 'A Criterion-A trauma points to PTSD instead', approach: 'Trauma-exposure framing', why: 'Adjustment disorder does not require a Criterion-A trauma', keys: ['no threatened death or injury'], mistake: 'Requiring a qualifying trauma for adjustment disorder' }),
      O('c', 'That her symptoms have become noticeably worse over the past few days compared with how they were the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The onset after the stressor and impairment are what matter', keys: ['stressor-linked onset'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she meets the full symptom count required for a discrete major depressive episode at this point in time', 0,
        { r: 'Meeting full MDD criteria would change the diagnosis', approach: 'Full-criteria framing', why: 'Adjustment disorder applies when another disorder’s full criteria are not met', keys: ['does not meet full MDD'], mistake: 'Applying full MDD criteria to an adjustment picture' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from major depressive disorder?', ['R1'], [
      O('a', 'Her symptoms do not meet the full criteria for a major depressive episode despite the stressor-linked distress', 3,
        { r: 'Subthreshold for a full depressive episode', approach: 'Apply the full-criteria test', why: 'MDD requires the full episode criteria, which she does not meet', keys: ['does not meet full MDD'], mistake: 'Calling a subthreshold reaction major depression' }),
      O('b', 'The fact that she feels persistently sad and tearful and has had trouble sleeping since the divorce and the layoff', -1,
        { r: 'Sadness and sleep problems occur in both', approach: 'Symptom-presence framing', why: 'These symptoms are shared; the full-criteria threshold differs', keys: ['shared symptoms'], mistake: 'Using shared symptoms to differentiate' }),
      O('c', 'The worry about her future and her finances that she experiences as she searches for a new job and rebuilds her life', -1,
        { r: 'Worry occurs in both', approach: 'Worry framing', why: 'Worry is nonspecific between them', keys: ['shared worry'], mistake: 'Reading worry as decisive' }),
      O('d', 'The way her mood tends to dip a little more on the days when her job search is going especially poorly for her', 0,
        { r: 'Reactivity is nonspecific', approach: 'Reactivity framing', why: 'Mood reactivity does not separate the two', keys: ['nonspecific reactivity'], mistake: 'Using reactivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from generalized anxiety disorder?', ['R1'], [
      O('a', 'Her anxiety arose in response to specific recent stressors rather than being a chronic, free-floating worry across many domains', 3,
        { r: 'Stressor-linked versus chronic diffuse worry', approach: 'Contrast onset and chronicity', why: 'GAD is chronic, pervasive worry; her anxiety is a stressor-linked reaction', keys: ['anxiety since the divorce and layoff'], mistake: 'Calling a stressor-linked reaction generalized anxiety' }),
      O('b', 'The fact that she feels anxious and on edge much of the time as she copes with the major changes in her life right now', -1,
        { r: 'Feeling anxious occurs in both', approach: 'Anxiety-presence framing', why: 'Anxiety is shared; onset and chronicity differ', keys: ['shared feature'], mistake: 'Using anxious feelings to differentiate' }),
      O('c', 'The trouble she has sleeping and the difficulty concentrating that she experiences as she searches for a new job', -1,
        { r: 'Sleep and concentration problems occur in both', approach: 'Somatic framing', why: 'These features are nonspecific between them', keys: ['shared symptoms'], mistake: 'Reading shared symptoms as decisive' }),
      O('d', 'The way her anxiety tends to be a little worse during the most stressful weeks of her ongoing job search', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from posttraumatic stress disorder?', ['R1'], [
      O('a', 'She did not experience a qualifying traumatic exposure and lacks the trauma-specific intrusion and avoidance symptoms of PTSD', 3,
        { r: 'No qualifying trauma or PTSD symptom profile', approach: 'Apply the trauma criterion', why: 'PTSD requires a qualifying trauma and specific symptoms she does not have', keys: ['no threatened death or injury'], mistake: 'Diagnosing PTSD without a qualifying trauma' }),
      O('b', 'The fact that she has felt distressed and has struggled to cope in the weeks since these major life changes happened to her', -1,
        { r: 'General distress fits both', approach: 'Distress framing', why: 'Difficulty coping after a stressor occurs in both', keys: ['shared distress'], mistake: 'Using general distress to decide' }),
      O('c', 'The trouble she has sleeping and the worry about the future that she has experienced since the divorce and layoff', -1,
        { r: 'Sleep and worry occur in both', approach: 'Symptom framing', why: 'These features are nonspecific between them', keys: ['shared symptoms'], mistake: 'Reading shared symptoms as decisive' }),
      O('d', 'The way her symptoms tend to feel worse on the days when she is reminded of her former marriage and her former job', 0,
        { r: 'Reminder-linked distress is nonspecific', approach: 'Cue framing', why: 'Distress around reminders does not establish PTSD', keys: ['nonspecific reactivity'], mistake: 'Reading reminder reactivity as PTSD' }),
    ]),
    Q('q5', 'intake', 'Given her significant distress, what risk assessment is most important to complete?', ['R3'], [
      O('a', 'A structured suicide-risk assessment, since significant distress warrants screening even when intent is initially denied', 3,
        { r: 'Assess suicide risk with structure', approach: 'Screen risk directly', why: 'Significant distress warrants structured risk screening regardless of an initial denial', keys: ['significant distress', 'denies intent'], mistake: 'Skipping risk screening because intent is denied' }),
      O('b', 'A detailed reconstruction of her entire marriage so the counselor can fully understand the history of the relationship', -1,
        { r: 'Exhaustive relationship history is low yield', approach: 'History framing', why: 'It does not address the priority risk screening', keys: ['risk first'], mistake: 'Prioritizing depth history over risk' }),
      O('c', 'A precise log of how many job applications she submits each week so the counselor can quantify her search activity', -1,
        { r: 'Application logging is low yield', approach: 'Quantification framing', why: 'It does not address suicide risk', keys: ['risk unassessed'], mistake: 'Collecting low-yield detail' }),
      O('d', 'A complete inventory of every coping strategy she has ever used so the counselor can rule each of those out one by one', -1,
        { r: 'Coping inventory is secondary now', approach: 'Coping-inventory framing', why: 'It does not address the risk assessment', keys: ['planning data'], mistake: 'Confusing planning data with risk screening' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation?', ['R2'], [
      O('a', 'Time-limited, problem-focused psychotherapy such as cognitive-behavioral and supportive work to build coping and problem-solving', 3,
        { r: 'Problem-focused, time-limited psychotherapy', approach: 'Match approach to the disorder', why: 'Problem-focused, coping-oriented psychotherapy fits adjustment disorder', keys: ['rebuilding after divorce and layoff'], mistake: 'Defaulting to long-term medication for an adjustment reaction' }),
      O('b', 'Immediately recommending a daily antidepressant as the primary treatment for her anxiety and low mood after the stressors', -1,
        { r: 'Medication-first is not indicated here', approach: 'Medication-first framing', why: 'Psychotherapy is first-line for adjustment disorder', keys: ['psychotherapy first-line'], mistake: 'Defaulting to medication as the primary plan' }),
      O('c', 'Open-ended, indefinite supportive counseling with no particular structure, focus, or time frame for the work', -1,
        { r: 'Unstructured, indefinite support is suboptimal', approach: 'Unstructured framing', why: 'Time-limited, focused work fits an adjustment reaction', keys: ['focused need'], mistake: 'Defaulting to indefinite, unfocused support' }),
      O('d', 'A primarily insight-oriented exploration of her childhood as the central route to relieving her current distress', 0,
        { r: 'Insight-only is not the indicated focus', approach: 'Depth-only framing', why: 'Problem-focused coping work fits better', keys: ['current stressors'], mistake: 'Prioritizing origins over present coping' }),
    ]),
    Q('q7', 'treatment', 'A central, appropriate treatment target given her situation would be:', ['R2'], [
      O('a', 'Building coping and problem-solving skills to manage the anxiety and low mood as she adjusts to the life changes', 3,
        { r: 'Coping and problem-solving for adjustment', approach: 'Target coping and adjustment', why: 'Coping and problem-solving skills fit an adjustment reaction to identifiable stressors', keys: ['rebuilding her life', 'job search'], mistake: 'Treating the reaction as a fixed disorder rather than building coping' }),
      O('b', 'Encouraging her to avoid the situations that remind her of the divorce and the job loss until the distress fully passes', -2,
        { r: 'Avoidance impedes adjustment', approach: 'Avoidance framing', why: 'Avoidance can prolong distress and impede coping', keys: ['needs to re-engage'], mistake: 'Sanctioning avoidance as coping' }),
      O('c', 'A detailed reconstruction of her earliest attachment relationships as the main route to easing her current symptoms', 0,
        { r: 'Depth work is not the indicated focus', approach: 'Origins framing', why: 'Coping-focused work fits the adjustment picture', keys: ['present-focused need'], mistake: 'Prioritizing origins over present coping' }),
      O('d', 'Focusing mainly on relaxation skills so she feels calmer without addressing the problems she is actually facing', -1,
        { r: 'Relaxation alone misses the problem-solving', approach: 'Arousal-only framing', why: 'It does not address the stressors driving the distress', keys: ['problem-solving needed'], mistake: 'Treating arousal while ignoring the stressors' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor frame the course and monitoring of her treatment?', ['R5'], [
      O('a', 'As time-limited work, monitoring her symptoms and watching whether they resolve as she adjusts or progress to another disorder', 3,
        { r: 'Time-limited with monitoring for progression', approach: 'Track the course over time', why: 'Adjustment disorder is expected to resolve; monitoring catches progression to another disorder', keys: ['expects distress to ease', 'within months of the stressor'], mistake: 'Failing to monitor for resolution or progression' }),
      O('b', 'As open-ended, indefinite treatment with no expectation that her symptoms will resolve as she adjusts to the changes', -1,
        { r: 'Indefinite framing fits the picture poorly', approach: 'Indefinite framing', why: 'Adjustment disorder is generally time-limited', keys: ['expected resolution'], mistake: 'Treating it as a chronic, indefinite condition' }),
      O('c', 'As a one-time evaluation, deciding now that no follow-up monitoring of her symptoms will be needed going forward', -2,
        { r: 'No monitoring misses progression', approach: 'No-follow-up framing', why: 'Monitoring is needed to catch progression or non-resolution', keys: ['needs monitoring'], mistake: 'Omitting follow-up monitoring' }),
      O('d', 'As contingent mainly on whether she keeps attending her sessions, treating attendance as the main indicator of progress', 0,
        { r: 'Attendance is not an outcome measure', approach: 'Adherence proxy', why: 'Attendance does not measure symptom change', keys: ['process vs outcome'], mistake: 'Mistaking attendance for outcome' }),
    ]),
    Q('q9', 'treatment', 'Priya asks whether she needs medication. The most appropriate counselor action is to:', ['R4'], [
      O('a', 'Discuss that psychotherapy is first-line and, if she wishes to consider medication, coordinate a prescriber referral with her consent', 3,
        { r: 'Lead with psychotherapy; refer if she wishes', approach: 'Coordinate within scope', why: 'Counselors recommend first-line psychotherapy and refer medication decisions to a prescriber', keys: ['asks about medication'], mistake: 'Giving specific medication advice' }),
      O('b', 'Tell her which specific antidepressant and dose she should ask her physician to start for her anxiety and low mood', -2,
        { r: 'Naming a drug and dose exceeds scope', approach: 'Prescriptive advice', why: 'Medication selection is outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping professional limits' }),
      O('c', 'Tell her she definitely needs to start medication right away, since that is clearly the most important step for her recovery', -1,
        { r: 'Overstating the need oversteps', approach: 'Medication-push framing', why: 'Psychotherapy is first-line; the decision belongs with a prescriber and her', keys: ['client autonomy'], mistake: 'Steering a medical decision' }),
      O('d', 'Tell her medication is entirely outside the counseling role and decline to discuss her question about it any further', -1,
        { r: 'Refusing to engage abandons the question', approach: 'Flat refusal', why: 'Discussing options and coordinating referral is appropriate', keys: ['care coordination'], mistake: 'Declining to engage a relevant question' }),
    ]),
    Q('q10', 'counseling', 'Priya says she feels weak for not handling the divorce and layoff better. The most therapeutic response is to:', ['R2'], [
      O('a', 'Validate how hard the changes are and normalize her reaction while building on her existing strengths and supports', 3,
        { r: 'Validate and normalize; build on strengths', approach: 'Normalize and reframe', why: 'Validating and normalizing the reaction reduces self-blame and supports coping', keys: ['feels weak', 'supportive friends'], mistake: 'Either dismissing the feeling or reinforcing the self-judgment' }),
      O('b', 'Agree that she probably should be coping much better by now and encourage her to simply push through the distress on her own', -2,
        { r: 'Endorsing self-blame deepens distress', approach: 'Validate-the-distortion framing', why: 'It reinforces the self-critical belief', keys: ['self-blame'], mistake: 'Colluding with the self-judgment' }),
      O('c', 'Tell her quickly that she has nothing to feel bad about and that she should simply put the divorce and layoff behind her', -1,
        { r: 'Premature reassurance can invalidate', approach: 'Dismissive-reassurance framing', why: 'It skips the validation and coping work she needs', keys: ['feeling dismissed'], mistake: 'Reassuring without processing' }),
      O('d', 'Provide detailed statistics on how stressful divorce and job loss are to logically prove she should not feel weak', -1,
        { r: 'Facts alone rarely shift the feeling', approach: 'Statistical persuasion', why: 'Validation works better than data here', keys: ['emotional reasoning'], mistake: 'Answering emotion with numbers' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best mobilize Priya’s existing resources?', ['R2'], [
      O('a', 'Help her draw on her supportive friends and her strengths and build a concrete plan for the practical challenges she faces', 3,
        { r: 'Mobilize supports and strengths with a plan', approach: 'Build on existing resources', why: 'Engaging supports and strengths fits a resilient client adjusting to stressors', keys: ['supportive friends', 'motivated to cope'], mistake: 'Overlooking the resources she already has' }),
      O('b', 'Encourage her to handle the entire situation entirely on her own so that she proves to herself that she is fully independent', -1,
        { r: 'Isolating her undercuts coping', approach: 'Self-reliance framing', why: 'Mobilizing support strengthens coping', keys: ['has supports'], mistake: 'Discouraging the support she has' }),
      O('c', 'Focus the work mainly on cataloging everything that has gone wrong so that she fully grasps the severity of her situation', -1,
        { r: 'A problem-only focus can deepen distress', approach: 'Deficit-focus framing', why: 'A strengths-and-coping focus fits better', keys: ['strengths-based'], mistake: 'Centering only on problems' }),
      O('d', 'Tell her to wait passively for the distress to pass on its own without taking any active steps to address the stressors', -1,
        { r: 'Passive waiting forgoes active coping', approach: 'Wait-it-out framing', why: 'Active coping and problem-solving are indicated', keys: ['active coping'], mistake: 'Encouraging passivity' }),
    ]),
    Q('q12', 'ethics', 'Priya’s former employer calls asking how she is coping after the layoff. Best response?', ['R4'], [
      O('a', 'Decline to confirm or deny that she is a client without a valid release and explain that disclosure requires her written consent', 3,
        { r: 'Protect confidentiality without a release', approach: 'Uphold confidentiality', why: 'ACA protects information absent valid consent', keys: ['third-party inquiry', 'no release'], mistake: 'Disclosing to a third party without consent' }),
      O('b', 'Share how she is doing, since the former employer seems genuinely concerned and is only trying to be supportive toward her', -2,
        { r: 'Concern does not authorize disclosure', approach: 'Good-intent framing', why: 'Disclosure requires consent regardless of intent', keys: ['no valid release'], mistake: 'Disclosing without authorization' }),
      O('c', 'Give a brief, general update on her progress so the former employer can decide whether to offer her any further assistance', -2,
        { r: 'A general update is still a disclosure', approach: 'Soft disclosure', why: 'Only a valid release permits disclosure', keys: ['confidentiality'], mistake: 'Leaking details under the guise of an update' }),
      O('d', 'Refuse to speak with the caller at all and hang up without explaining anything about confidentiality or the process', -1,
        { r: 'Abrupt refusal misses a teachable moment', approach: 'Flat refusal', why: 'The rationale can be explained appropriately', keys: ['professional courtesy'], mistake: 'Being needlessly obstructive' }),
    ]),
    Q('q13', 'ethics', 'If Priya’s symptoms worsen and she later meets full criteria for major depression, the most appropriate step is to:', ['R4'], [
      O('a', 'Reassess and update the diagnosis and plan, coordinating a medication evaluation if indicated, with her consent', 3,
        { r: 'Reassess and update the diagnosis and plan', approach: 'Revise as the picture changes', why: 'A changed clinical picture warrants reassessment and an updated plan', keys: ['symptoms worsen', 'meets full MDD criteria'], mistake: 'Continuing the original plan unchanged as the picture changes' }),
      O('b', 'Continue treating it as an adjustment disorder unchanged, since that was the diagnosis she was originally given at intake', -1,
        { r: 'Ignoring the changed picture is an error', approach: 'Stay-the-course framing', why: 'The diagnosis should be updated as criteria are met', keys: ['changed picture'], mistake: 'Failing to revise the diagnosis' }),
      O('c', 'Tell her the worsening is simply part of normal adjustment and that no change to her diagnosis or plan is needed at all', -1,
        { r: 'Over-normalizing misses a real change', approach: 'Over-normalize framing', why: 'Meeting full criteria warrants a diagnostic update', keys: ['meets full criteria'], mistake: 'Normalizing a clinically meaningful change' }),
      O('d', 'Terminate the counseling relationship at once and tell her to seek an entirely new provider on her own without any help', -2,
        { r: 'Abrupt termination is inappropriate', approach: 'Abandonment framing', why: 'Care is reassessed and adjusted, not abruptly ended', keys: ['continuity of care'], mistake: 'Abandoning rather than updating care' }),
    ]),
  ],
};

// ============================================================================
// D144 — Premenstrual Dysphoric Disorder (F32.81) — Depressive — medium
// ============================================================================
const D144 = {
  id: 'ncmhce-D144',
  title: 'Severe premenstrual mood symptoms that lift after menses',
  category: 'Depressive',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Premenstrual Dysphoric Disorder', code: 'F32.81' },
  diagnosis: { name: 'Premenstrual Dysphoric Disorder', code: 'F32.81' },
  differentialOptions: [
    { id: 'do1', name: 'Premenstrual Dysphoric Disorder', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Bipolar II Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Renata Silva, a 33-year-old paralegal, presents with several months of severe mood symptoms in the week before her period—marked ' +
      'irritability, mood swings, depressed mood, anxiety, and being easily overwhelmed—that interfere with her work and her relationships.',
    session1:
      'She reports the symptoms reliably begin in the week before menses and clearly improve within a few days after her period starts, with ' +
      'a symptom-free stretch afterward. Between episodes she feels like her usual self, which she contrasts with how she feels premenstrually.',
    session2:
      'She has no prior manic or hypomanic episodes and no persistent low mood across the whole month, and she is frustrated at being told it ' +
      'is "just PMS." She is willing to track her symptoms and wants help managing the distress and the impact on her work and family.',
  },
  diagnosticRationale:
    'A cyclical pattern of marked affective lability, irritability, depressed mood, and anxiety in the final week before menses that improves ' +
    'within a few days after onset and is minimal in the week after menses, with significant impairment, meets DSM-5-TR criteria for ' +
    'premenstrual dysphoric disorder—confirmed by prospective daily ratings—distinct from major depression, generalized anxiety, or bipolar II disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'PMDD: luteal-phase affective symptoms that remit after menses, with impairment, confirmed by prospective ratings' },
    { id: 'R2', source: 'APA CPG', detail: 'Depressive and related symptoms: cognitive-behavioral therapy and lifestyle approaches' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Prospective daily symptom rating across cycles to confirm the diagnosis' },
    { id: 'R4', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk in the luteal phase' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, scope of practice, and coordination of care' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a premenstrual dysphoric disorder diagnosis?', ['R1'], [
      O('a', 'A cyclical pattern of affective symptoms in the week before menses that clearly improves within a few days after onset, with impairment', 3,
        { r: 'Luteal-phase symptoms that remit after menses', approach: 'Confirm the cyclical pattern', why: 'PMDD requires luteal-phase symptoms that remit after menses with impairment', keys: ['symptoms the week before menses', 'improve after the period starts'], mistake: 'Diagnosing PMDD without the cyclical, remitting pattern' }),
      O('b', 'That she can identify the single stressful event she believes first triggered her premenstrual mood symptoms', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her symptoms have become noticeably worse over the past two or three days compared with the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The cyclical, cycle-linked pattern is what matters', keys: ['cyclical pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she meets the full symptom count required for a discrete major depressive episode present across the entire month', 0,
        { r: 'Month-long depression points elsewhere', approach: 'Persistent-mood framing', why: 'Persistent month-long depression would suggest a depressive disorder, not PMDD', keys: ['symptom-free after menses'], mistake: 'Applying a persistent-depression frame to a cyclical pattern' }),
    ]),
    Q('q2', 'core', 'Which assessment step is essential to confirm the diagnosis?', ['R3'], [
      O('a', 'Prospective daily symptom ratings across at least two menstrual cycles to confirm the cyclical, luteal-phase pattern', 3,
        { r: 'Prospective daily ratings over 2+ cycles', approach: 'Require prospective confirmation', why: 'DSM-5-TR requires prospective daily ratings over at least two cycles to confirm PMDD', keys: ['willing to track symptoms'], mistake: 'Confirming PMDD on retrospective report alone' }),
      O('b', 'A single retrospective interview in which she recalls how she has generally felt before her periods over the past year', -1,
        { r: 'Retrospective recall is insufficient', approach: 'Retrospective framing', why: 'Retrospective report alone does not confirm PMDD', keys: ['needs prospective data'], mistake: 'Relying on retrospective recall to confirm' }),
      O('c', 'Ordering hormone laboratory panels yourself to confirm the diagnosis before beginning any treatment planning with her', -1,
        { r: 'Ordering labs exceeds scope and is not the test', approach: 'Order-test framing', why: 'PMDD is confirmed by prospective ratings, and counselors do not order labs', keys: ['scope limit'], mistake: 'Acting outside scope and using the wrong test' }),
      O('d', 'A detailed reconstruction of her childhood experiences around menstruation to find the origin of her symptoms', 0,
        { r: 'Origins history is low yield here', approach: 'Origins framing', why: 'It does not confirm the cyclical pattern', keys: ['present pattern'], mistake: 'Prioritizing origins over prospective confirmation' }),
    ]),
    Q('q3', 'core', 'Which feature best distinguishes her presentation from major depressive disorder?', ['R1'], [
      O('a', 'Her symptoms are confined to the luteal phase and remit after menses, rather than persisting throughout the whole month', 3,
        { r: 'Cyclical, remitting versus persistent', approach: 'Contrast the timing', why: 'MDD is persistent; PMDD symptoms remit after menses', keys: ['symptom-free after menses', 'usual self between episodes'], mistake: 'Calling a cyclical, remitting pattern major depression' }),
      O('b', 'The fact that she experiences depressed mood and tearfulness during the difficult days right before her period begins', -1,
        { r: 'Depressed mood occurs in both', approach: 'Symptom-presence framing', why: 'Depressed mood is shared; the timing differs', keys: ['shared symptom'], mistake: 'Using depressed mood to differentiate' }),
      O('c', 'The irritability and the feeling of being easily overwhelmed that she experiences during her premenstrual days', -1,
        { r: 'Irritability is nonspecific', approach: 'Irritability framing', why: 'Irritability occurs in both', keys: ['shared affect'], mistake: 'Reading irritability as decisive' }),
      O('d', 'The way her symptoms tend to be a bit worse during the most stressful and demanding weeks at her law firm', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'How should the counselor address a possible premenstrual exacerbation of another disorder?', ['R1'], [
      O('a', 'Check whether her symptoms are absent after menses, since persistence across the cycle would suggest exacerbation of another disorder', 3,
        { r: 'Confirm the symptom-free interval', approach: 'Distinguish PMDD from exacerbation', why: 'A symptom-free post-menstrual interval distinguishes PMDD from premenstrual worsening of another disorder', keys: ['symptom-free after menses'], mistake: 'Missing a year-round disorder that worsens premenstrually' }),
      O('b', 'Assume that because her symptoms worsen premenstrually the diagnosis must be PMDD regardless of how she feels the rest of the month', -1,
        { r: 'Premenstrual worsening alone is not PMDD', approach: 'Worsening-equals-PMDD framing', why: 'Another disorder can also worsen premenstrually', keys: ['need the symptom-free interval'], mistake: 'Equating premenstrual worsening with PMDD' }),
      O('c', 'Whether her symptoms are clearly more severe today than they were earlier in this same week of assessment sessions', 0,
        { r: 'A recent trend is not the question', approach: 'Severity-trend framing', why: 'The issue is the cyclical pattern, not a recent trend', keys: ['assessment focus'], mistake: 'Reframing the question as a severity trend' }),
      O('d', 'Whether anyone in her family has also had premenstrual mood symptoms across the past several generations of her family', -1,
        { r: 'Family history is not the differentiator', approach: 'Heredity framing', why: 'It does not distinguish PMDD from exacerbation', keys: ['nonspecific factor'], mistake: 'Using family history to differentiate' }),
    ]),
    Q('q5', 'intake', 'Given the luteal-phase symptoms, what risk assessment is most important?', ['R4'], [
      O('a', 'A structured suicide-risk assessment, recognizing that suicide risk can be elevated during the luteal phase', 3,
        { r: 'Assess elevated luteal-phase risk', approach: 'Screen risk with structure', why: 'PMDD can elevate suicide risk in the luteal phase, warranting structured screening', keys: ['severe premenstrual distress', 'feeling overwhelmed'], mistake: 'Overlooking elevated risk in the luteal phase' }),
      O('b', 'A precise log of how many hours she sleeps each night so the counselor can quantify the full extent of her insomnia', -1,
        { r: 'Sleep logging is secondary to risk', approach: 'Quantification framing', why: 'It does not address suicide risk', keys: ['safety first'], mistake: 'Confusing monitoring detail with risk assessment' }),
      O('c', 'A complete reconstruction of every relationship conflict she has had so the counselor can document each one in detail', -1,
        { r: 'Exhaustive conflict history is low yield', approach: 'History framing', why: 'It does not address the priority risk screening', keys: ['risk first'], mistake: 'Collecting low-yield detail' }),
      O('d', 'A detailed inventory of her exact diet during her premenstrual days so the counselor can quantify her eating patterns', -1,
        { r: 'Diet logging is secondary now', approach: 'Diet-inventory framing', why: 'It does not address suicide risk', keys: ['risk first'], mistake: 'Prioritizing low-yield detail over risk' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line, within-scope treatment recommendation?', ['R2'], [
      O('a', 'Offer evidence-based psychotherapy such as cognitive-behavioral therapy and lifestyle strategies for the premenstrual symptoms', 3,
        { r: 'CBT and lifestyle strategies within scope', approach: 'Match guideline to scope', why: 'CBT and lifestyle approaches are appropriate, in-scope first-line care for PMDD', keys: ['willing to engage', 'work and family impact'], mistake: 'Defaulting to prescribing medication' }),
      O('b', 'Recommend that she begin a daily antidepressant immediately and adjust the dose herself over the next several weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or titrate', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('c', 'Tell her that since the symptoms come and go with her cycle there is really nothing that needs to be treated at all here', -2,
        { r: 'Dismissing impairing PMDD is an error', approach: 'Normalize-away framing', why: 'Impairing PMDD warrants treatment', keys: ['functional impairment'], mistake: 'Mistaking PMDD for something not worth treating' }),
      O('d', 'Encourage her to rely mainly on rest during her premenstrual days instead of engaging in any formal course of therapy', -1,
        { r: 'Lifestyle alone is insufficient first-line', approach: 'Lifestyle-substitution framing', why: 'Adjuncts do not replace evidence-based therapy', keys: ['impairing symptoms'], mistake: 'Offering adjuncts as the primary plan' }),
    ]),
    Q('q7', 'treatment', 'She asks about medication options. The most appropriate counselor action is to:', ['R5'], [
      O('a', 'Coordinate a referral to a prescriber, who can consider options such as an SSRI given continuously or in the luteal phase, with her consent', 3,
        { r: 'Refer and coordinate within scope', approach: 'Coordinate care', why: 'Counselors refer for medication decisions rather than prescribe', keys: ['asks about medication'], mistake: 'Giving prescriptive advice' }),
      O('b', 'Tell her the specific antidepressant and exact dosing schedule she should ask her physician to start for her symptoms', -2,
        { r: 'Naming a drug and dose exceeds scope', approach: 'Prescriptive advice', why: 'Medication selection is outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping professional limits' }),
      O('c', 'Discourage any medication and tell her she should manage the premenstrual symptoms through lifestyle changes alone', -1,
        { r: 'Discouraging meds overreaches', approach: 'Discourage medication', why: 'The decision belongs with a prescriber and her', keys: ['client autonomy'], mistake: 'Steering a medical decision' }),
      O('d', 'Suggest she research medications for premenstrual symptoms herself and bring whichever she prefers to a future appointment', -1,
        { r: 'Outsourcing to self-research is poor care', approach: 'Self-research framing', why: 'It abandons proper coordination', keys: ['needs professional evaluation'], mistake: 'Replacing referral with self-directed search' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor monitor her treatment response over time?', ['R3'], [
      O('a', 'Continue the prospective daily symptom ratings to track the cyclical pattern and the response to treatment across cycles', 3,
        { r: 'Use prospective ratings for measurement-based care', approach: 'Track outcomes across cycles', why: 'Continued daily ratings track the cyclical pattern and treatment response', keys: ['need objective tracking'], mistake: 'Relying on impressions alone' }),
      O('b', 'Ask her each week whether she subjectively feels that things are generally going better than they were before', -1,
        { r: 'Global impressions are unreliable', approach: 'Informal-check-in framing', why: 'It lacks the cycle-linked detail needed for PMDD', keys: ['no objective anchor'], mistake: 'Trusting unstandardized self-report' }),
      O('c', 'Wait until several months of treatment have passed and then evaluate her overall response in one single review', -2,
        { r: 'End-only review misses cycle-level change', approach: 'Terminal-evaluation framing', why: 'It prevents timely, cycle-linked adjustment', keys: ['need interim data'], mistake: 'Skipping interim monitoring' }),
      O('d', 'Track mainly whether she attends her sessions and treat consistent attendance as the main sign that she is improving', 0,
        { r: 'Attendance is not an outcome measure', approach: 'Adherence proxy', why: 'Attendance does not measure symptom change', keys: ['process vs outcome'], mistake: 'Mistaking adherence for outcome' }),
    ]),
    Q('q9', 'counseling', 'Renata is frustrated at being told her symptoms are “just PMS.” The most therapeutic response is to:', ['R2'], [
      O('a', 'Validate her experience and provide psychoeducation that PMDD is a recognized, impairing, and treatable condition distinct from mild PMS', 3,
        { r: 'Validate and distinguish PMDD from PMS', approach: 'Validate and educate', why: 'Recognizing PMDD as a real, treatable condition validates her and supports engagement', keys: ['frustrated at "just PMS"', 'impairing symptoms'], mistake: 'Minimizing her symptoms as ordinary PMS' }),
      O('b', 'Agree that it really is just normal PMS and reassure her that most women simply learn to cope with it on their own over time', -2,
        { r: 'Minimizing the disorder invalidates her', approach: 'Minimize framing', why: 'It dismisses an impairing, treatable condition', keys: ['functional impairment'], mistake: 'Dismissing PMDD as ordinary PMS' }),
      O('c', 'Tell her quickly that her symptoms are nothing to worry about and that she should simply try to push through the difficult days', -1,
        { r: 'Dismissive reassurance forgoes treatment', approach: 'Dismissive-reassurance framing', why: 'It bypasses the validation and care she needs', keys: ['feeling dismissed'], mistake: 'Reassuring instead of treating' }),
      O('d', 'Provide detailed statistics on how common premenstrual symptoms are to logically prove that she should not be so frustrated', -1,
        { r: 'Facts alone rarely shift the frustration', approach: 'Statistical persuasion', why: 'Validation works better than data here', keys: ['emotional reasoning'], mistake: 'Answering emotion with numbers' }),
    ]),
    Q('q10', 'counseling', 'Renata says the irritable, low premenstrual days make her feel like a bad partner and parent. Best response?', ['R2'], [
      O('a', 'Validate her distress and reframe the symptoms as a treatable, cyclical condition rather than a reflection of her character', 3,
        { r: 'Validate and reframe the self-blame', approach: 'Normalize and reframe', why: 'Framing the symptoms as a treatable condition counters self-blame', keys: ['feels like a bad partner and parent'], mistake: 'Either dismissing the guilt or confirming the self-judgment' }),
      O('b', 'Agree that her behavior on those days really does make her a worse partner and parent and that she needs to try harder', -2,
        { r: 'Endorsing self-blame deepens distress', approach: 'Validate-the-distortion framing', why: 'It reinforces the self-critical belief', keys: ['self-blame'], mistake: 'Colluding with the self-judgment' }),
      O('c', 'Tell her quickly that she is a wonderful partner and parent and that she has nothing at all to feel guilty about here', -1,
        { r: 'Premature reassurance can invalidate', approach: 'Dismissive-reassurance framing', why: 'It skips the validation and reframing she needs', keys: ['guilt dismissed'], mistake: 'Reassuring without processing' }),
      O('d', 'Steer the conversation away from the guilt so that the session does not become too distressing for her on that topic', -1,
        { r: 'Avoiding the guilt leaves it intact', approach: 'Topic-avoidance framing', why: 'The guilt is a relevant treatment target', keys: ['avoided cognition'], mistake: 'Sidestepping emotionally central material' }),
    ]),
    Q('q11', 'counseling', 'What practical strategy is most appropriate to plan around her predictable luteal-phase symptoms?', ['R2'], [
      O('a', 'Use the predictable timing to plan coping skills, supports, and lighter demands during the high-symptom premenstrual window', 3,
        { r: 'Plan coping around the predictable window', why: 'Anticipatory planning leverages the predictable cyclical pattern of PMDD', approach: 'Plan for the high-symptom window', keys: ['symptoms the week before menses'], mistake: 'Ignoring the predictability that allows anticipatory planning' }),
      O('b', 'Advise her to schedule her most demanding and high-stakes commitments specifically for her premenstrual days each month', -2,
        { r: 'Front-loading demands worsens the impact', approach: 'Overload framing', why: 'Scheduling heavy demands into the symptom window worsens the impact', keys: ['high-symptom window'], mistake: 'Increasing demands during the worst window' }),
      O('c', 'Tell her there is no way to anticipate the symptoms and that she should simply react to them as they happen each cycle', -1,
        { r: 'The pattern is predictable and plannable', approach: 'Unpredictable framing', why: 'The cyclical timing allows anticipatory planning', keys: ['predictable timing'], mistake: 'Forgoing anticipatory planning' }),
      O('d', 'Encourage her to withdraw completely from work and family during her premenstrual days each and every month', -1,
        { r: 'Complete withdrawal is excessive', approach: 'Withdrawal framing', why: 'Graded planning is preferable to total withdrawal', keys: ['graded planning'], mistake: 'Recommending complete withdrawal' }),
    ]),
    Q('q12', 'ethics', 'Renata asks the counselor to write to her employer to excuse her from work entirely during her premenstrual week each month. Best response?', ['R5'], [
      O('a', 'Explain you can document treatment accurately with her consent but cannot certify a blanket excuse beyond what the clinical picture supports', 3,
        { r: 'Document accurately; do not overstate', approach: 'Maintain honest, in-scope records', why: 'Counselors document accurately and do not certify conclusions the record cannot support', keys: ['wants a monthly work excuse'], mistake: 'Issuing a blanket excuse the picture does not support' }),
      O('b', 'Write the blanket monthly excuse exactly as she requests it, since supporting her clearly serves her overall best interest', -2,
        { r: 'Overstating exceeds the record', approach: 'Overstate framing', why: 'Beneficence cannot justify unsupported certification', keys: ['accuracy required'], mistake: 'Certifying more than the record supports' }),
      O('c', 'Refuse to provide any documentation of any kind and tell her that nothing about her treatment can ever be shared with her employer', -1,
        { r: 'A blanket refusal overstates the limit', approach: 'Flat-refusal framing', why: 'Accurate documentation with consent is permissible', keys: ['consent process'], mistake: 'Withholding even appropriate documentation' }),
      O('d', 'Send a letter to her employer describing her diagnosis and symptoms before discussing it with her or obtaining her consent', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Disclose-without-consent framing', why: 'Release of information requires her informed consent', keys: ['no release'], mistake: 'Sharing records without authorization' }),
    ]),
    Q('q13', 'ethics', 'How should the counselor coordinate with Renata’s gynecologist about her care?', ['R5'], [
      O('a', 'Obtain her informed consent and release before communicating with the gynecologist, then collaborate on a shared plan', 3,
        { r: 'Consent and release before coordinating', approach: 'Secure consent first', why: 'Coordination requires a valid release of information', keys: ['cross-provider coordination', 'protected information'], mistake: 'Contacting the provider before obtaining consent' }),
      O('b', 'Contact the gynecologist right away to align the plan, since coordinating her care is clearly in her own best interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Avoid any contact with the gynecologist at all so that her counseling remains entirely separate from her medical care', -1,
        { r: 'No coordination undercuts collaborative care', approach: 'Siloed-care framing', why: 'Consented coordination benefits PMDD care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Share her full counseling record with the gynecologist so that the provider has complete information about all of her treatment', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure should be consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
  ],
};

module.exports = { CASES: [D140, D141, D142, D143, D144] };
