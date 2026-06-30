// ============================================================================
// deep-cases-batch-11.js — NCMHCE deep cases, batch 11 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). On the
// reserved id block ncmhce-D155+, filling under-covered categories (Trauma,
// Bipolar, Dissociative, Somatic) with distinct diagnoses not yet covered:
//   ncmhce-D155  Reactive Attachment Disorder (Trauma)
//   ncmhce-D156  Cyclothymic Disorder (Bipolar)
//   ncmhce-D157  Specific Learning Disorder (Neurodevelopmental)
//   ncmhce-D158  Dissociative Identity Disorder (Dissociative)
//   ncmhce-D159  Illness Anxiety Disorder (Somatic)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-11.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-11');console.log(validateExamDepthSet(CASES))"
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
// D155 — Reactive Attachment Disorder (F94.1) — Trauma — hard
// ============================================================================
const D155 = {
  id: 'ncmhce-D155',
  title: 'A withdrawn foster child who does not seek comfort',
  category: 'Trauma',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Reactive Attachment Disorder', code: 'F94.1' },
  diagnosis: { name: 'Reactive Attachment Disorder', code: 'F94.1' },
  differentialOptions: [
    { id: 'do1', name: 'Reactive Attachment Disorder', isCorrect: true },
    { id: 'do2', name: 'Autism Spectrum Disorder', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do4', name: 'Disinhibited Social Engagement Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Mateo Reyes, a 6-year-old in his third foster placement, is referred by his foster mother. She reports that he rarely seeks or responds ' +
      'to comfort when distressed, seldom shows positive emotion, and remains emotionally withdrawn even when she offers warmth and care.',
    session1:
      'His history includes documented early neglect and repeated changes in caregivers before age two. He has the developmental capacity to ' +
      'form attachments, shows reciprocal social communication and a typical range of interests, and does not approach unfamiliar adults indiscriminately.',
    session2:
      'When upset he becomes still and shuts down rather than reaching for his caregiver, and he shows little of the social-emotional reciprocity ' +
      'a secure child would. His foster mother is committed but discouraged, and wonders whether she is doing something wrong with him.',
  },
  diagnosticRationale:
    'A consistent pattern of emotionally withdrawn behavior toward caregivers, rarely seeking or responding to comfort, with limited positive ' +
    'affect and a history of insufficient care (neglect and repeated caregiver changes) in a child with the developmental capacity to attach, ' +
    'meets DSM-5-TR criteria for reactive attachment disorder—distinct from autism spectrum disorder, depression, and disinhibited social engagement disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'RAD: emotionally withdrawn behavior toward caregivers, limited comfort-seeking, history of insufficient care, developmental capacity to attach' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Attachment difficulties: caregiver-focused, relationship-based intervention within coordinated care' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Developmentally and culturally informed assessment and coordinating collateral information' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.5., and C.2.: welfare of minor clients, consent, mandated reporting, and competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance with the child and caregiver and collaborative goal setting' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a reactive attachment disorder diagnosis?', ['R1'], [
      O('a', 'A pattern of withdrawn, limited comfort-seeking toward caregivers with a history of insufficient early care', 3,
        { r: 'Withdrawn pattern plus insufficient care', approach: 'Confirm the core criteria', why: 'RAD requires emotionally withdrawn behavior toward caregivers plus a history of insufficient care', keys: ['rarely seeks comfort', 'early neglect and caregiver changes'], mistake: 'Diagnosing RAD without confirming both the behavior and the care history' }),
      O('b', 'That his foster mother can name the single event she believes first caused him to become so withdrawn', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his withdrawal has grown a little more noticeable over the past few days than it was the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A consistent pattern, not a recent uptick, is required', keys: ['consistent pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define RAD', approach: 'Mood-criteria framing', why: 'RAD is an attachment-trauma condition, not a mood episode', keys: ['attachment-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from autism spectrum disorder?', ['R1'], [
      O('a', 'He shows reciprocal social communication and typical interests, with the capacity to attach, unlike the social-communication deficits of ASD', 3,
        { r: 'Intact reciprocity and capacity to attach', approach: 'Contrast social-communication capacity', why: 'ASD involves pervasive social-communication deficits; he has the capacity to attach and relate reciprocally', keys: ['reciprocal social communication', 'typical range of interests'], mistake: 'Reading attachment withdrawal as autistic social-communication deficits' }),
      O('b', 'The fact that he tends to keep very much to himself and does not reach out to the adults around him for connection or much comfort when he is feeling upset, distressed, or overwhelmed', -1,
        { r: 'Social withdrawal occurs in both', approach: 'Withdrawal framing', why: 'Apparent social withdrawal can appear in both; the underlying capacity differs', keys: ['shared feature'], mistake: 'Using withdrawal to differentiate' }),
      O('c', 'The limited positive emotion and the flat way that he often responds to the people who are caring for him', -1,
        { r: 'Reduced positive affect occurs in both', approach: 'Affect framing', why: 'Limited positive affect can appear in both; the social-communication picture differs', keys: ['shared affect'], mistake: 'Reading flat affect as decisive' }),
      O('d', 'The way his behavior tends to be a little harder to manage on the busier and more disrupted days at his home', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening on disrupted days does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from disinhibited social engagement disorder?', ['R1'], [
      O('a', 'He is withdrawn and does not approach unfamiliar adults, rather than showing the indiscriminate over-familiarity of DSED', 3,
        { r: 'Withdrawn, not indiscriminately familiar', approach: 'Contrast the social approach pattern', why: 'DSED involves indiscriminate approach to strangers; RAD involves withdrawal and limited comfort-seeking', keys: ['does not approach unfamiliar adults', 'emotionally withdrawn'], mistake: 'Confusing withdrawn RAD with the over-familiarity of DSED' }),
      O('b', 'The fact that his early history includes neglect and repeated changes in the adults who were caring for him', -1,
        { r: 'Insufficient care underlies both', approach: 'History framing', why: 'Both can follow insufficient care; the social pattern differs', keys: ['shared feature'], mistake: 'Using the care history to differentiate' }),
      O('c', 'The trouble he has forming a warm, easy connection with the foster parent who is currently looking after him', -1,
        { r: 'Disturbed attachment underlies both', approach: 'Attachment framing', why: 'Disturbed attachment underlies both; the behavioral expression differs', keys: ['shared disturbance'], mistake: 'Reading attachment trouble as decisive' }),
      O('d', 'The way his mood seems to dip a bit more in the evenings than it does earlier on during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'What is most useful to gather to support the assessment?', ['R3'], [
      O('a', 'Developmental history and collateral from caregivers and records about his early care and current relationships', 3,
        { r: 'Developmental history and collateral', approach: 'Gather multi-source developmental data', why: 'RAD assessment depends on developmental history and collateral about early care and current attachment', keys: ['third placement', 'documented early neglect'], mistake: 'Assessing the child without developmental history and collateral' }),
      O('b', 'A detailed family pedigree going back several generations to find other relatives who were also shy as children', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not establish the care history or attachment pattern', keys: ['criteria-relevant data'], mistake: 'Gathering data that does not inform the diagnosis' }),
      O('c', 'Whether his withdrawal can be traced to one specific incident that fully explains all of his current behavior', -1,
        { r: 'A single incident is not the target', approach: 'Origin-hunting framing', why: 'The pattern rests on cumulative care history, not a single incident', keys: ['cumulative history'], mistake: 'Hunting for an origin instead of the developmental picture' }),
      O('d', 'His favorite games and characters so that the sessions can be arranged around the activities he most enjoys', 0,
        { r: 'Interests are secondary', approach: 'Preference framing', why: 'Useful for rapport but not what supports the diagnosis', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over the assessment' }),
    ]),
    Q('q5', 'intake', 'What is most important to clarify about his caregiving environment during assessment?', ['R4'], [
      O('a', 'Whether his current and past care has been adequate and safe, screening for ongoing neglect or maltreatment', 3,
        { r: 'Screen current safety and adequacy of care', approach: 'Assess the caregiving environment and safety', why: 'RAD follows insufficient care, so current safety and any ongoing maltreatment must be clarified', keys: ['history of neglect', 'multiple placements'], mistake: 'Assessing the child without clarifying the safety of the caregiving environment' }),
      O('b', 'A previously undetected primary psychotic disorder that might better explain his emotional withdrawal at home', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of his withdrawal and his flat affect', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why he seems so quiet and unresponsive with his foster mother', 0,
        { r: 'Cognitive decline is implausible in a child', approach: 'Neurocognitive framing', why: 'The attachment-trauma picture fits RAD, not decline', keys: ['developmental pattern'], mistake: 'Pursuing an implausible rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Mateo?', ['R2'], [
      O('a', 'Caregiver-focused, relationship-based intervention that strengthens a stable, sensitive bond with his foster mother', 3,
        { r: 'Caregiver-focused, relationship-based work', approach: 'Apply the guideline', why: 'RAD is treated through caregiver-focused, relationship-based intervention that builds a sensitive, stable bond', keys: ['committed foster mother', 'withdrawn from comfort'], mistake: 'Treating the child individually without centering the caregiving relationship' }),
      O('b', 'Brief individual play sessions with the child alone, with no involvement of his foster mother in the treatment at all', -1,
        { r: 'Child-only work omits the caregiver', approach: 'Child-only framing', why: 'The caregiving relationship is central to RAD treatment', keys: ['caregiver-centered'], mistake: 'Excluding the caregiver from the work' }),
      O('c', 'A coercive "holding" or forced-attachment technique to compel him to accept comfort and bond with his caregiver', -2,
        { r: 'Coercive attachment techniques are harmful', approach: 'Coercion framing', why: 'Coercive holding therapies are unsafe and contraindicated', keys: ['evidence-based, non-coercive care'], mistake: 'Using a discredited, harmful technique' }),
      O('d', 'Starting him on a medication that you will select and adjust to improve his mood and attachment over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor work with the foster mother in the plan?', ['R5'], [
      O('a', 'Coach sensitive, consistent, responsive caregiving and support her so she can keep offering warmth despite his withdrawal', 3,
        { r: 'Coach responsive caregiving and support her', approach: 'Build caregiver sensitivity and resilience', why: 'Coaching sensitive, consistent responsiveness while supporting the discouraged caregiver is central to RAD care', keys: ['offers warmth', 'discouraged caregiver'], mistake: 'Coaching technique without supporting the caregiver’s own discouragement' }),
      O('b', 'Tell her to wait for him to come to her first and to hold back her warmth until he starts seeking comfort on his own', -2,
        { r: 'Withholding warmth is counter-therapeutic', approach: 'Withdraw-warmth framing', why: 'Sensitive, consistent warmth is the intervention, not something to withhold', keys: ['consistent responsiveness'], mistake: 'Advising the caregiver to withdraw warmth' }),
      O('c', 'Reassure her that nothing needs to change at home and that he will simply grow out of the pattern on his own in time', -1,
        { r: 'Passive waiting misses the intervention', approach: 'Wait-it-out framing', why: 'Relationship-based intervention, not passive waiting, addresses RAD', keys: ['active intervention'], mistake: 'Telling the caregiver no change is needed' }),
      O('d', 'Place the blame for his withdrawal on her parenting and imply she is the reason he is not bonding with her', -2,
        { r: 'Blaming the caregiver is harmful', approach: 'Blame framing', why: 'His pattern stems from earlier insufficient care, not her current parenting; blame undermines the work', keys: ['committed caregiver'], mistake: 'Blaming the current caregiver for an earlier history' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked in this relationship-based work?', ['R5'], [
      O('a', 'Track collaboratively chosen indicators of comfort-seeking, positive affect, and caregiver-child interaction over time', 3,
        { r: 'Track attachment indicators over time', approach: 'Measure relationship change', why: 'Tracking comfort-seeking, positive affect, and interaction quality steers the relationship-based work', keys: ['rarely seeks comfort', 'limited positive emotion'], mistake: 'Proceeding without tracking the attachment-relevant indicators' }),
      O('b', 'Rely only on whether his foster mother happens to mention that he seems a little easier than he was before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how he behaves during the session itself and base every decision solely on what you see in the room', -1,
        { r: 'In-room behavior is too narrow', approach: 'Single-setting framing', why: 'Home interaction with the caregiver is where the key change occurs', keys: ['home interaction'], mistake: 'Measuring only the session' }),
      O('d', 'Wait until the very end of treatment to review whether his attachment behavior has changed at all since intake', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the child welfare system and other providers?', ['R4'], [
      O('a', 'With appropriate consent and releases, collaborate with the caseworker and team to support stability and continuity of care', 3,
        { r: 'Coordinate with consent for stability', approach: 'Coordinate within the system', why: 'Stability and continuity for a foster child depend on consented coordination with the child welfare team', keys: ['third placement', 'system involvement'], mistake: 'Working in isolation from the child welfare team' }),
      O('b', 'Share all of his clinical details with anyone in the system who asks, since the agency is plainly entitled to everything', -2,
        { r: 'Sharing without consideration over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure follows consent and is limited to what is needed, even within a system', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate' }),
      O('c', 'Avoid contacting the caseworker or agency at all so that his counseling stays entirely separate from his placement', -1,
        { r: 'No coordination undercuts stability', approach: 'Siloed framing', why: 'Consented coordination supports placement stability and care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Defer entirely to the agency on all clinical decisions and simply carry out whatever the caseworker instructs without question', -1,
        { r: 'Abdicating clinical judgment is inappropriate', approach: 'Defer-entirely framing', why: 'The counselor collaborates while retaining independent clinical judgment', keys: ['clinical responsibility'], mistake: 'Surrendering clinical judgment to the system' }),
    ]),
    Q('q10', 'counseling', 'During a session Mateo shuts down and turns away when his foster mother offers comfort. The most therapeutic response is to:', ['R5'], [
      O('a', 'Coach the foster mother to stay calm, present, and gently available without forcing closeness on him', 3,
        { r: 'Coach patient, non-forcing availability', approach: 'Support attuned, non-coercive responsiveness', why: 'Modeling calm, available, non-forcing responsiveness builds safety for a withdrawn child', keys: ['turns away from comfort'], mistake: 'Pushing the child to accept comfort or having the caregiver withdraw' }),
      O('b', 'Direct the foster mother to physically hold him in place until he stops resisting and accepts the comfort she is offering', -2,
        { r: 'Forcing contact is harmful and coercive', approach: 'Coercion framing', why: 'Forcing physical closeness is unsafe and contraindicated in attachment work', keys: ['non-coercive care'], mistake: 'Coaching a coercive, harmful response' }),
      O('c', 'Tell the foster mother to step back and withdraw her attention entirely so that he learns to manage his feelings alone', -1,
        { r: 'Withdrawing attention misses the moment', approach: 'Withdrawal framing', why: 'Calm availability, not withdrawal, supports a withdrawn child', keys: ['stay available'], mistake: 'Coaching the caregiver to disengage' }),
      O('d', 'End the session immediately and send them home rather than working with the moment in the room together', -1,
        { r: 'Ending abruptly misses a teaching moment', approach: 'Escape framing', why: 'The moment can be used to coach attuned responsiveness', keys: ['in-room coaching'], mistake: 'Avoiding a valuable clinical moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best engage Mateo himself in the work?', ['R5'], [
      O('a', 'Build safety and predictability at his developmental level through play, following his lead at a pace he can tolerate', 3,
        { r: 'Developmentally matched, play-based safety', approach: 'Engage the child age-appropriately', why: 'Predictable, play-based engagement that follows his lead builds safety for a young, withdrawn child', keys: ['6-year-old', 'shuts down when distressed'], mistake: 'Using abstract, adult-oriented methods a young child cannot engage with' }),
      O('b', 'Talk with him mainly in abstract, adult terms about the early neglect and why it has affected his ability to trust', -1,
        { r: 'Abstract methods do not fit a child', approach: 'Adult-framing', why: 'A young child engages through play and predictability, not abstract discussion', keys: ['developmental fit'], mistake: 'Pitching the work above his developmental level' }),
      O('c', 'Push him to make eye contact and accept hugs in each session so that he gets used to closeness as quickly as possible', -2,
        { r: 'Pushing closeness is coercive', approach: 'Force-closeness framing', why: 'Forcing intimacy overrides his pace and is contraindicated', keys: ['child-led pacing'], mistake: 'Forcing closeness rather than building safety' }),
      O('d', 'Tell him he must start showing his feelings and seeking comfort before any of the counseling work can really begin', -1,
        { r: 'Demanding change first stalls engagement', approach: 'Precondition framing', why: 'Safety and engagement precede, not follow, behavior change', keys: ['safety first'], mistake: 'Setting behavior change as a precondition' }),
    ]),
    Q('q12', 'ethics', 'During the work, the foster mother reports signs suggesting possible abuse in a prior setting. The most appropriate action is to:', ['R4'], [
      O('a', 'Follow mandated-reporting duties and make the required report, then continue to support the child within the team', 3,
        { r: 'Comply with mandated reporting', approach: 'Apply mandated-reporting law', why: 'Suspected child abuse triggers a mandated report regardless of the therapeutic relationship', keys: ['signs of possible abuse', 'minor client'], mistake: 'Treating suspected abuse as confidential rather than reportable' }),
      O('b', 'Keep the information confidential, since everything shared in counseling must always remain completely private', -2,
        { r: 'Confidentiality yields to mandated reporting', approach: 'Absolutist framing', why: 'Mandated-reporting law overrides confidentiality for suspected child abuse', keys: ['reporting duty'], mistake: 'Treating confidentiality as absolute' }),
      O('c', 'Wait to see whether more evidence emerges over the next several sessions before deciding whether to make any report', -2,
        { r: 'Delaying a required report is improper', approach: 'Wait-and-see framing', why: 'A reasonable suspicion triggers a timely report, not a wait for certainty', keys: ['reasonable suspicion'], mistake: 'Postponing a mandated report' }),
      O('d', 'Investigate the allegation yourself and reach your own conclusion before involving the proper authorities in the matter', -1,
        { r: 'Investigating is not the counselor’s role', approach: 'Self-investigation framing', why: 'The counselor reports the suspicion; investigation is for the proper authorities', keys: ['report, do not investigate'], mistake: 'Taking on an investigative role instead of reporting' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in early childhood attachment trauma. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; attachment-trauma care may need consultation, training, or referral', keys: ['limited attachment training', 'complex presentation'], mistake: 'Managing complex attachment trauma alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with the child and caregiver', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell the foster mother the difficulties are not serious enough to need specialized help and continue with general support only', -2,
        { r: 'Minimizing the problem fails the child', approach: 'Downplay framing', why: 'A complex attachment presentation warrants competent, specialized care', keys: ['complex trauma'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer the child at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the case without coordination' }),
    ]),
  ],
};

// ============================================================================
// D156 — Cyclothymic Disorder (F34.0) — Bipolar — hard
// ============================================================================
const D156 = {
  id: 'ncmhce-D156',
  title: 'Years of mood ups and downs that never reach full episodes',
  category: 'Bipolar',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Cyclothymic Disorder', code: 'F34.0' },
  diagnosis: { name: 'Cyclothymic Disorder', code: 'F34.0' },
  differentialOptions: [
    { id: 'do1', name: 'Cyclothymic Disorder', isCorrect: true },
    { id: 'do2', name: 'Bipolar II Disorder', isCorrect: false },
    { id: 'do3', name: 'Borderline Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Priya Nair, a 27-year-old graduate student, describes more than two years of frequent mood swings. She has stretches of elevated energy ' +
      'and confidence and other stretches of low mood and fatigue, neither of which has ever fully met the threshold for a manic or major depressive episode.',
    session1:
      'Over these two years she has not been free of symptoms for more than a month or two at a time. The mood shifts are not tied to a consistent ' +
      'interpersonal trigger and unfold over days to weeks rather than within hours, and her sense of self and her relationships are stable between them.',
    session2:
      'A medical and substance review was unremarkable. The swings interfere with her studies and leave her unsure which version of herself to ' +
      'trust, but she denies discrete episodes of clearly elevated, expansive mood with the impairment that would mark a hypomanic or manic episode.',
  },
  diagnosticRationale:
    'Numerous periods of hypomanic-like and depressive-like symptoms over at least two years, never meeting full criteria for a hypomanic, ' +
    'manic, or major depressive episode, without a symptom-free interval longer than two months, meets DSM-5-TR criteria for cyclothymic ' +
    'disorder—distinct from bipolar II, the rapid affective instability of borderline personality disorder, and major depressive disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Cyclothymic disorder: 2+ years of subthreshold hypomanic and depressive symptoms, no symptom-free interval beyond 2 months' },
    { id: 'R2', source: 'IPSRT', detail: 'Interpersonal and social rhythm therapy: stabilizing daily rhythms and routines in mood disorders' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening across the course of a mood disorder' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, coordination of care, and practicing within competence' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Clinical decision-making and measurement-based care across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a cyclothymic disorder diagnosis?', ['R1'], [
      O('a', 'Two or more years of subthreshold mood swings with no symptom-free stretch longer than about two months', 3,
        { r: 'Two years of subthreshold swings, no long remission', approach: 'Confirm the core criteria', why: 'Cyclothymia requires 2+ years of subthreshold highs and lows without a remission beyond two months', keys: ['two years of mood swings', 'not symptom-free more than a month or two'], mistake: 'Diagnosing cyclothymia without confirming the duration and persistence' }),
      O('b', 'That she can identify the single stressful event she believes first set off her pattern of mood swings', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her swings have become a little more frequent over the past few days than they were the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The two-year pattern, not a recent uptick, is required', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Full-episode count would point elsewhere', approach: 'Full-episode framing', why: 'Cyclothymia is defined by subthreshold symptoms, not a full episode', keys: ['subthreshold pattern'], mistake: 'Applying full-episode criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from bipolar II disorder?', ['R1'], [
      O('a', 'Her highs and lows have stayed subthreshold, never reaching a full hypomanic or major depressive episode', 3,
        { r: 'Subthreshold, never a full episode', approach: 'Contrast against full episodes', why: 'Bipolar II requires a full hypomanic and a major depressive episode; her symptoms remain subthreshold', keys: ['never met threshold for an episode'], mistake: 'Calling subthreshold cycling bipolar II' }),
      O('b', 'The fact that she goes through stretches of higher energy and confidence at some times and lower mood at others', -1,
        { r: 'Mood cycling occurs in both', approach: 'Cycling framing', why: 'Cycling between highs and lows occurs in both; the severity threshold differs', keys: ['shared feature'], mistake: 'Using cycling to differentiate' }),
      O('c', 'The way her mood swings interfere with her ability to keep up with her graduate studies and her work', -1,
        { r: 'Impairment occurs in both', approach: 'Impairment framing', why: 'Functional impact occurs in both; the episode threshold differs', keys: ['shared impairment'], mistake: 'Reading impairment as decisive' }),
      O('d', 'The way her energy tends to be a little higher during the lighter and less demanding weeks of her semester', 0,
        { r: 'Schedule effects are nonspecific', approach: 'Schedule framing', why: 'A lighter schedule does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading a schedule effect' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from borderline personality disorder?', ['R1'], [
      O('a', 'Her mood shifts unfold over days to weeks with a stable sense of self, not the rapid, interpersonally triggered instability of BPD', 3,
        { r: 'Slow shifts, stable self versus rapid reactivity', approach: 'Contrast tempo and self-stability', why: 'BPD involves rapid, interpersonally reactive affective shifts and identity disturbance; her shifts are slower with a stable self', keys: ['shifts over days to weeks', 'stable sense of self'], mistake: 'Confusing slow mood cycling with rapid affective instability' }),
      O('b', 'The fact that her mood goes up and down and changes quite noticeably from one period of time to another over the course of her weeks and months', -1,
        { r: 'Mood variability occurs in both', approach: 'Variability framing', why: 'Mood variability occurs in both; tempo and self-stability differ', keys: ['shared feature'], mistake: 'Using variability to differentiate' }),
      O('c', 'The difficulty she has knowing which version of herself she can trust during the different mood states', -1,
        { r: 'Subjective uncertainty is nonspecific', approach: 'Uncertainty framing', why: 'Some self-uncertainty can occur in both; the identity disturbance of BPD differs', keys: ['shared experience'], mistake: 'Reading uncertainty as decisive' }),
      O('d', 'The way her mood tends to be a little lower in the evenings than it is earlier on during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'What is the most important condition to exclude before confirming the diagnosis?', ['R1'], [
      O('a', 'A substance- or medical-induced mood disturbance, which her unremarkable review makes less likely but worth confirming', 3,
        { r: 'Exclude substance and medical causes', approach: 'Rule out organic and substance causes', why: 'Substances and medical conditions can drive mood swings and must be excluded', keys: ['unremarkable medical and substance review'], mistake: 'Skipping the substance and medical rule-out' }),
      O('b', 'A previously undetected specific phobia that might better account for the swings in her mood and energy', -1,
        { r: 'Phobia does not explain mood cycling', approach: 'Phobia framing', why: 'A phobia does not account for sustained mood cycling', keys: ['mood-cycling picture'], mistake: 'Reducing mood cycling to a phobia' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of all of her mood swings', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurodevelopmental disorder that could explain why she feels so confident during her higher periods', 0,
        { r: 'Neurodevelopmental framing is implausible', approach: 'Developmental framing', why: 'The two-year mood pattern fits cyclothymia', keys: ['mood-focused course'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'intake', 'What is most important to screen for across the course of her mood disorder?', ['R3'], [
      O('a', 'Suicide risk and any escalation toward a full mood episode, monitoring across both the high and low periods', 3,
        { r: 'Screen risk and watch for escalation', approach: 'Assess risk and trajectory', why: 'Mood disorders carry elevated risk and can escalate, so risk and trajectory are screened across states', keys: ['low mood and fatigue periods', 'studies disrupted'], mistake: 'Tracking mood without screening risk and escalation' }),
      O('b', 'A previously undetected primary psychotic disorder that might better explain her elevated, confident periods', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of her fluctuating energy levels', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could explain why she feels unsure which version of herself to trust', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'Her experience fits mood cycling, not decline', keys: ['mood-focused'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Priya?', ['R2'], [
      O('a', 'Psychotherapy that stabilizes daily routines and rhythms, with psychoeducation about her mood pattern and triggers', 3,
        { r: 'Rhythm-stabilizing psychotherapy and psychoeducation', approach: 'Apply a rhythm-focused approach', why: 'Stabilizing daily rhythms and routines, with psychoeducation, fits the chronic subthreshold cycling of cyclothymia', keys: ['mood swings over days to weeks', 'disrupted routines'], mistake: 'Offering open-ended support without a rhythm-stabilizing structure' }),
      O('b', 'A brief protocol aimed only at her low periods, ignoring the high periods and the overall cycling pattern entirely', -1,
        { r: 'Depression-only focus misses the cycling', approach: 'Half-the-picture framing', why: 'Cyclothymia involves both poles and an overall pattern, not just the lows', keys: ['both poles'], mistake: 'Treating only one side of the cycling' }),
      O('c', 'Starting her on a mood-stabilizing medication that you will select and titrate over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or titrate medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Encouraging her to lean into the high periods and stay up working through them since that is when she feels most productive', -2,
        { r: 'Amplifying highs destabilizes rhythms', approach: 'Amplify-the-high framing', why: 'Encouraging sleep loss and rhythm disruption can worsen mood cycling', keys: ['rhythm stability'], mistake: 'Advising behavior that destabilizes mood' }),
    ]),
    Q('q7', 'treatment', 'What lifestyle target is most important to emphasize given her presentation?', ['R2'], [
      O('a', 'Consistent sleep, activity, and daily routines, since rhythm disruption can amplify her mood swings', 3,
        { r: 'Stabilize sleep and daily rhythms', approach: 'Target the social rhythms', why: 'Regular sleep and routines reduce the rhythm disruption that amplifies mood cycling', keys: ['mood swings disrupt studies', 'days-to-weeks cycling'], mistake: 'Overlooking the role of sleep and routine in mood stability' }),
      O('b', 'Eliminating all structure and routine so that she is free to follow whatever her mood happens to dictate each day', -2,
        { r: 'Removing routine destabilizes mood', approach: 'Remove-structure framing', why: 'Losing routine tends to worsen mood instability', keys: ['rhythm stability'], mistake: 'Advising the opposite of what stabilizes mood' }),
      O('c', 'A demanding new exercise regimen pursued only during her high periods and dropped entirely during her low periods', -1,
        { r: 'Inconsistent, pole-driven routines do not stabilize', approach: 'Inconsistent-routine framing', why: 'Routines tied to mood state reinforce instability rather than stability', keys: ['consistent routine'], mistake: 'Building a routine that tracks the mood swings' }),
      O('d', 'Focusing only on her diet and leaving sleep, activity, and daily routine entirely out of the plan for now', -1,
        { r: 'Diet-only misses the key target', approach: 'Single-factor framing', why: 'Sleep and routine are central rhythm targets, not diet alone', keys: ['rhythm focus'], mistake: 'Narrowing to one factor and missing the main target' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Use a daily mood-and-routine chart with periodic measures to monitor cycling, function, and risk over time', 3,
        { r: 'Mood-and-routine charting plus measures', approach: 'Measurement-based monitoring', why: 'Charting mood and routine with periodic measures captures the cycling and steers the plan', keys: ['subthreshold cycling', 'rhythm focus'], mistake: 'Proceeding without systematic mood and routine tracking' }),
      O('b', 'Rely only on whether she happens to say in session that her mood feels a little steadier than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how she feels on the single day of each appointment and ignore the pattern across the weeks between visits', -1,
        { r: 'Single-day snapshots miss the cycling', approach: 'Snapshot framing', why: 'The between-visit pattern is what matters in a cycling disorder', keys: ['between-visit pattern'], mistake: 'Measuring isolated snapshots' }),
      O('d', 'Wait until the end of treatment to review whether her mood pattern has changed at all since intake', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor handle her questions about medication?', ['R4'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation while continuing the rhythm-focused psychotherapy within scope', 3,
        { r: 'Refer for prescribing, keep doing therapy', approach: 'Coordinate within scope', why: 'Medication questions are referred to a prescriber while the counselor continues psychotherapy', keys: ['asks about medication', 'scope limits'], mistake: 'Advising on specific medication outside scope' }),
      O('b', 'Recommend a specific mood-stabilizer and dose for her to begin taking before her next set of exams', -2,
        { r: 'Recommending a drug and dose exceeds scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not recommend specific drugs or doses', keys: ['no prescriptive authority'], mistake: 'Making a prescribing recommendation' }),
      O('c', 'Tell her that medication would certainly ruin her creativity and that she should refuse it if it is ever offered', -1,
        { r: 'Blanket refusal advice overreaches', approach: 'Anti-medication framing', why: 'The prescriber and client weigh medication; the counselor does not forbid it', keys: ['shared decision'], mistake: 'Directing a medical decision' }),
      O('d', 'Ignore the medication question and simply redirect her back to the routine charting every time she raises it', -1,
        { r: 'Dismissing the question is unhelpful', approach: 'Avoidant framing', why: 'A referral, not avoidance, is the appropriate response', keys: ['coordinated care'], mistake: 'Failing to address a legitimate question' }),
    ]),
    Q('q10', 'counseling', 'During a high period Priya says she feels great and wants to stop treatment. The most therapeutic response is to:', ['R5'], [
      O('a', 'Explore the wish nonjudgmentally and use psychoeducation to connect the highs to the broader cycling pattern', 3,
        { r: 'Explore and psychoeducate about the pattern', why: 'Linking the current high to the overall cycling helps her see why ongoing work matters', approach: 'Engage ambivalence with psychoeducation', keys: ['feels great in a high period', 'wants to stop'], mistake: 'Either simply agreeing she is done or dismissing how good she feels' }),
      O('b', 'Agree that she is clearly cured now and end treatment, since she reports feeling so well during this current stretch', -2,
        { r: 'Ending in a high ignores the cycling', approach: 'Premature-termination framing', why: 'A subthreshold high is part of the cycle, not a cure', keys: ['cycling continues'], mistake: 'Ending treatment based on a transient high' }),
      O('c', 'Warn her sharply that she will inevitably crash and that stopping now would be a serious and irreversible mistake', -1,
        { r: 'Fear-based pressure undermines the alliance', approach: 'Scare-tactic framing', why: 'Heavy-handed warnings tend to provoke disengagement', keys: ['collaborative stance'], mistake: 'Using fear rather than collaborative exploration' }),
      O('d', 'Let the topic pass without comment and simply continue the session as though she had not raised stopping at all', -1,
        { r: 'Ignoring it misses key material', approach: 'Avoidant framing', why: 'Her ambivalence is important material to engage', keys: ['engage ambivalence'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Priya’s engagement given the chronic, fluctuating course?', ['R5'], [
      O('a', 'Normalize the long-term nature of the work and anchor it in goals she values across both her high and low periods', 3,
        { r: 'Normalize the course and anchor in values', approach: 'Frame the work realistically and collaboratively', why: 'Framing cyclothymia as a long-term, manageable pattern tied to her goals sustains engagement', keys: ['chronic cycling', 'unsure which self to trust'], mistake: 'Implying a quick fix that sets her up for discouragement' }),
      O('b', 'Promise her that a few weeks of treatment will permanently end the mood swings for good and resolve everything', -1,
        { r: 'Promising a quick cure is misleading', approach: 'Quick-fix framing', why: 'Overpromising sets up disappointment and undermines trust', keys: ['realistic expectations'], mistake: 'Setting an unrealistic expectation' }),
      O('c', 'Focus the sessions mainly on cataloguing each individual mood shift in exhaustive detail every single week', -1,
        { r: 'Cataloguing shifts is not the work', approach: 'Catalogue framing', why: 'Endless logging without direction does not advance the valued-goals work', keys: ['goal focus'], mistake: 'Centering sessions on enumerating shifts' }),
      O('d', 'Tell her counseling cannot help unless she first agrees to take medication exactly as a prescriber directs', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Psychotherapy can proceed alongside any coordinated medication decision', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Priya asks the counselor to leave her diagnosis out of records shared with her university for accommodations. The most appropriate action is to:', ['R4'], [
      O('a', 'Discuss confidentiality and the limits of any release, sharing only what she consents to and what is needed', 3,
        { r: 'Honor consent and minimum-necessary disclosure', approach: 'Apply consent and minimum necessary', why: 'Disclosures to third parties are governed by her informed consent and limited to what is needed', keys: ['wants diagnosis withheld', 'accommodation request'], mistake: 'Disclosing more than she consents to or than is necessary' }),
      O('b', 'Send her full clinical record, including the diagnosis, to the university right away since they will need everything anyway', -2,
        { r: 'Sending everything ignores consent', approach: 'Over-disclosure framing', why: 'Third-party disclosure requires consent and minimum-necessary limits', keys: ['minimum necessary'], mistake: 'Over-disclosing without consent' }),
      O('c', 'Write whatever the university prefers to see, even if it is not accurate, so that her accommodations are approved quickly', -2,
        { r: 'Falsifying documentation is unethical', approach: 'Falsify framing', why: 'Inaccurate documentation violates professional honesty', keys: ['accurate records'], mistake: 'Misrepresenting information in records' }),
      O('d', 'Refuse to provide any documentation at all and decline to discuss what could appropriately be shared with the university', -1,
        { r: 'Flat refusal forecloses a workable option', approach: 'Stonewall framing', why: 'Consented, minimum-necessary documentation can be provided rather than refused', keys: ['consented options'], mistake: 'Declining without exploring an appropriate disclosure' }),
    ]),
    Q('q13', 'ethics', 'The counselor is unsure whether the presentation has crossed into bipolar II. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and reassess against the criteria, coordinating referral if the picture exceeds your competence', 3,
        { r: 'Consult and reassess within competence', approach: 'Practice within competence', why: 'Diagnostic uncertainty calls for consultation, reassessment, and coordinated referral as needed', keys: ['subthreshold versus full episode', 'diagnostic uncertainty'], mistake: 'Settling diagnostic uncertainty alone without consultation' }),
      O('b', 'Keep the original diagnosis fixed and never revisit it, regardless of any new information that emerges over time', -2,
        { r: 'Refusing to reassess is poor practice', approach: 'Fixed-diagnosis framing', why: 'Diagnoses are revisited as new information emerges', keys: ['ongoing assessment'], mistake: 'Treating the diagnosis as immutable' }),
      O('c', 'Tell her the distinction does not matter at all and that there is no need to clarify which disorder she has', -2,
        { r: 'Dismissing the distinction misleads care', approach: 'Downplay framing', why: 'The distinction can change the plan and risk monitoring and does matter', keys: ['accurate diagnosis'], mistake: 'Minimizing a clinically meaningful distinction' }),
      O('d', 'Transfer her at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D157 — Specific Learning Disorder (F81.0) — Neurodevelopmental — medium
// ============================================================================
const D157 = {
  id: 'ncmhce-D157',
  title: 'A bright child whose reading falls far below expectation',
  category: 'Neurodevelopmental',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Specific Learning Disorder', code: 'F81.0' },
  diagnosis: { name: 'Specific Learning Disorder', code: 'F81.0' },
  differentialOptions: [
    { id: 'do1', name: 'Specific Learning Disorder', isCorrect: true },
    { id: 'do2', name: 'Attention-Deficit/Hyperactivity Disorder, Inattentive', isCorrect: false },
    { id: 'do3', name: 'Intellectual Developmental Disorder, Mild', isCorrect: false },
    { id: 'do4', name: 'Generalized Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Sofia Alvarez, a 9-year-old, is referred by her parents and teacher for persistent reading difficulties. Despite targeted help, her ' +
      'word reading and comprehension remain well below what is expected for her age, and she is increasingly avoidant and discouraged about school.',
    session1:
      'Her difficulties are specific to reading and have persisted for more than six months despite intervention. Her general reasoning and ' +
      'problem-solving are age-appropriate, she sustains attention in non-reading tasks, and there is no vision, hearing, or schooling deficit to explain it.',
    session2:
      'She is articulate and curious in conversation, which contrasts sharply with her struggle to decode text. She has begun saying she is ' +
      '"dumb" and dreads being asked to read aloud, and her parents worry the gap is starting to affect her confidence and her mood.',
  },
  diagnosticRationale:
    'Persistent difficulties in reading accuracy and comprehension that are well below age expectations and interfere with school, lasting more ' +
    'than six months despite targeted intervention and not better explained by intellectual disability, sensory deficits, or inadequate ' +
    'instruction, meet DSM-5-TR criteria for specific learning disorder—distinct from inattentive ADHD, mild intellectual disability, and GAD.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Specific learning disorder: skill well below age, 6+ months despite intervention, not explained by ID, sensory, or instruction' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Coordinating psychoeducational evaluation and interpreting skill discrepancies' },
    { id: 'R3', source: 'NICE guidelines', detail: 'Learning difficulties: educational support, accommodations, and coordinated care' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.5., and C.2.: welfare of minor clients, consent, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance with the child and family and collaborative goal setting' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a specific learning disorder diagnosis?', ['R1'], [
      O('a', 'Reading skill well below age expectations that has persisted over six months despite targeted intervention', 3,
        { r: 'Below-age skill persisting despite help', approach: 'Confirm the core criteria', why: 'SLD requires a skill well below age expectations persisting 6+ months despite targeted intervention', keys: ['reading below expectation', 'persists despite help'], mistake: 'Diagnosing SLD without confirming persistence despite intervention' }),
      O('b', 'That her parents can name the single event they believe first caused her to fall behind in her reading', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her reading has slipped a little further over the past few days than it had the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A persistent 6-month pattern, not a recent dip, is required', keys: ['persistent pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define SLD', approach: 'Mood-criteria framing', why: 'SLD is a learning condition, not a mood episode', keys: ['learning-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from inattentive ADHD?', ['R1'], [
      O('a', 'Her difficulty is specific to reading skill, not a broad inattention that shows up across many different tasks', 3,
        { r: 'Reading-specific deficit, not broad inattention', approach: 'Contrast specific skill versus pervasive attention', why: 'Inattentive ADHD shows pervasive inattention across tasks; her deficit is specific to reading', keys: ['sustains attention in non-reading tasks', 'difficulty specific to reading'], mistake: 'Reading a specific skill deficit as a global attention problem' }),
      O('b', 'The fact that she finds schoolwork frustrating and would often rather avoid the tasks that she finds the hardest', -1,
        { r: 'Task avoidance occurs in both', approach: 'Avoidance framing', why: 'Avoiding hard tasks occurs in both; the specificity differs', keys: ['shared feature'], mistake: 'Using avoidance to differentiate' }),
      O('c', 'The discouragement and the low confidence that she shows about her performance at school these days', -1,
        { r: 'Discouragement occurs in both', approach: 'Affect framing', why: 'Discouragement can accompany both; the skill specificity differs', keys: ['shared affect'], mistake: 'Reading discouragement as decisive' }),
      O('d', 'The way her focus tends to be a little better on the calmer and less noisy days in her classroom', 0,
        { r: 'Environmental effects are nonspecific', approach: 'Environment framing', why: 'A quieter room does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from mild intellectual disability?', ['R1'], [
      O('a', 'Her general reasoning and problem-solving are age-appropriate, unlike the broad cognitive limits of intellectual disability', 3,
        { r: 'Intact general reasoning versus broad limits', approach: 'Contrast specific versus global ability', why: 'Intellectual disability involves broad deficits; her reasoning is age-appropriate with an isolated reading deficit', keys: ['age-appropriate reasoning', 'articulate and curious'], mistake: 'Reading an isolated skill deficit as a global intellectual limit' }),
      O('b', 'The fact that she is currently performing below grade level in her reading at school this year', -1,
        { r: 'Below-grade performance occurs in both', approach: 'Performance framing', why: 'Below-grade performance can occur in both; the breadth of ability differs', keys: ['shared feature'], mistake: 'Using performance to differentiate' }),
      O('c', 'The frustration she shows and the help that she clearly needs to keep up with the rest of her class', -1,
        { r: 'Need for support occurs in both', approach: 'Support framing', why: 'Both may need support; the cognitive profile differs', keys: ['shared need'], mistake: 'Reading need for help as decisive' }),
      O('d', 'The way her work tends to be a little better on the days when she has had a good night of sleep beforehand', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Better work after good sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q4', 'core', 'What is most useful to coordinate to support the assessment?', ['R2'], [
      O('a', 'A psychoeducational evaluation and school records that document the skill discrepancy and the response to intervention', 3,
        { r: 'Psychoeducational evaluation and school records', approach: 'Coordinate formal evaluation', why: 'SLD assessment relies on psychoeducational testing and documented response to intervention', keys: ['below-expectation reading', 'targeted help already tried'], mistake: 'Concluding SLD without coordinating formal evaluation' }),
      O('b', 'A detailed family pedigree going back several generations to find relatives who also disliked reading as children', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not document the skill discrepancy', keys: ['criteria-relevant data'], mistake: 'Gathering data that does not inform the diagnosis' }),
      O('c', 'Whether her reading trouble can be traced to one specific bad school year that fully explains all of it', -1,
        { r: 'A single year is not the target', approach: 'Origin-hunting framing', why: 'The diagnosis rests on the documented skill pattern, not a single year', keys: ['documented pattern'], mistake: 'Hunting for an origin instead of evaluation data' }),
      O('d', 'Her favorite books and hobbies so that the sessions can be arranged around the topics she most enjoys', 0,
        { r: 'Interests are secondary', approach: 'Preference framing', why: 'Useful for rapport but not what supports the diagnosis', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over evaluation' }),
    ]),
    Q('q5', 'intake', 'What co-occurring issue is most important to screen for given her remarks about being "dumb"?', ['R1'], [
      O('a', 'Emerging anxiety and low mood related to the academic struggle, which commonly accompany learning disorders', 3,
        { r: 'Screen anxiety and mood related to the struggle', approach: 'Assess emotional impact and comorbidity', why: 'Learning disorders commonly co-occur with anxiety and low mood as confidence erodes', keys: ['says she is dumb', 'dreads reading aloud'], mistake: 'Addressing the reading skill without screening the emotional impact' }),
      O('b', 'A previously undetected primary psychotic disorder that might better explain her trouble with reading at school', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of her reading difficulties', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why her reading is below where it is expected to be', 0,
        { r: 'Cognitive decline is implausible in a child', approach: 'Neurocognitive framing', why: 'The developmental skill pattern fits SLD, not decline', keys: ['developmental pattern'], mistake: 'Pursuing an implausible rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate counselor role in supporting Sofia?', ['R3'], [
      O('a', 'Coordinate educational support and accommodations with the school while addressing the emotional impact in counseling', 3,
        { r: 'Coordinate school support; address the emotional impact', approach: 'Define the counselor role', why: 'The counselor coordinates educational accommodations and addresses the confidence and mood effects, within scope', keys: ['needs reading support', 'confidence affected'], mistake: 'Trying to remediate the reading skill yourself instead of coordinating and supporting' }),
      O('b', 'Personally deliver intensive reading remediation lessons yourself as the central component of her treatment plan', -1,
        { r: 'Reading remediation is the educator’s role', approach: 'Out-of-role framing', why: 'Specialized reading instruction is delivered by educators, not counselors', keys: ['coordinate, not remediate'], mistake: 'Taking on a role outside counseling scope' }),
      O('c', 'Tell her parents to simply have her read more at home and assume the problem will resolve on its own with practice', -2,
        { r: 'More practice alone is not the treatment', approach: 'Just-practice framing', why: 'SLD needs structured support and accommodations, not unguided extra practice', keys: ['targeted support'], mistake: 'Dismissing the need for structured support' }),
      O('d', 'Start her on a medication that you will select and adjust to improve her reading over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication, and medication does not treat SLD reading skill', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor address the emotional impact of her struggles?', ['R5'], [
      O('a', 'Build her confidence and coping, reframing the difficulty as a specific, workable challenge rather than a defect', 3,
        { r: 'Build confidence and reframe the difficulty', approach: 'Address self-concept and coping', why: 'Counseling can rebuild confidence and reframe SLD as a specific challenge that has supports', keys: ['says she is dumb', 'discouraged about school'], mistake: 'Focusing only on the skill while ignoring her eroding self-concept' }),
      O('b', 'Tell her she just needs to try harder and that her difficulties will disappear if she simply puts in more effort', -2,
        { r: 'Effort-blaming is harmful and inaccurate', approach: 'Try-harder framing', why: 'SLD is not a matter of effort; this framing deepens shame', keys: ['skill-based difficulty'], mistake: 'Implying the problem is insufficient effort' }),
      O('c', 'Avoid discussing her feelings about school entirely so that the sessions never touch on anything that upsets her', -1,
        { r: 'Avoiding her feelings misses the work', approach: 'Avoidant framing', why: 'Her self-concept and feelings are central to address, not avoid', keys: ['engage the feelings'], mistake: 'Sidestepping the emotional impact' }),
      O('d', 'Focus the sessions mainly on testing her reading repeatedly so you can see exactly how far behind she really is', -1,
        { r: 'Repeated testing is not counseling', approach: 'Testing-focus framing', why: 'Repeated skill testing is not the counseling role and can heighten shame', keys: ['support focus'], mistake: 'Turning sessions into skill testing' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked in the counseling work?', ['R5'], [
      O('a', 'Track confidence, school avoidance, mood, and the use of accommodations over time to guide the support plan', 3,
        { r: 'Track confidence, avoidance, mood, accommodations', approach: 'Measure the counseling-relevant outcomes', why: 'Tracking confidence, avoidance, mood, and accommodation use guides the counselor’s support role', keys: ['avoidant about school', 'confidence affected'], mistake: 'Proceeding without tracking the counseling-relevant outcomes' }),
      O('b', 'Track only her raw reading scores and base every counseling decision solely on whether those numbers improve', -1,
        { r: 'Reading scores are the educator’s metric', approach: 'Wrong-metric framing', why: 'Counseling tracks confidence and function; reading scores belong to the educational plan', keys: ['counseling outcomes'], mistake: 'Measuring a metric outside the counseling role' }),
      O('c', 'Rely only on whether her parents happen to mention that she seems a little happier about school lately', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('d', 'Wait until the end of the school year to review whether anything has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the support', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the school regarding accommodations?', ['R4'], [
      O('a', 'With the parents’ consent and a release, collaborate with the school team on appropriate accommodations and supports', 3,
        { r: 'Consent and release before school coordination', approach: 'Coordinate with consent', why: 'School coordination for accommodations requires parental consent and a release', keys: ['teacher referral', 'needs accommodations'], mistake: 'Contacting the school without parental consent' }),
      O('b', 'Contact the school directly with her clinical details right away, since the school plainly needs all of the information', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before sharing with the school', keys: ['no release'], mistake: 'Disclosing to the school without consent' }),
      O('c', 'Avoid contacting the school entirely so that her counseling stays completely separate from anything academic', -1,
        { r: 'No coordination undercuts the support', approach: 'Siloed framing', why: 'Consented coordination is central to securing accommodations', keys: ['integrated supports'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Send the school her full clinical record so that every staff member has complete information about her counseling', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure should be consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
    Q('q10', 'counseling', 'Sofia tearfully says she hates reading aloud and wants to give up on school. The most therapeutic response is to:', ['R5'], [
      O('a', 'Validate how hard it feels, normalize the difficulty, and connect her to the supports that can make it manageable', 3,
        { r: 'Validate, normalize, and connect to support', approach: 'Meet the distress and instill hope', why: 'Validating her distress while linking her to supports counters hopelessness without dismissing the difficulty', keys: ['hates reading aloud', 'wants to give up'], mistake: 'Either minimizing the difficulty or agreeing that giving up is reasonable' }),
      O('b', 'Tell her that reading is simply not that important and that she should not let it bother her so much going forward', -1,
        { r: 'Minimizing the difficulty invalidates her', approach: 'Minimize framing', why: 'Dismissing the difficulty undermines the alliance and the real need for support', keys: ['validate then support'], mistake: 'Minimizing a genuine struggle' }),
      O('c', 'Agree that school may not be for her and that giving up could be a reasonable choice given how hard it has become', -2,
        { r: 'Endorsing giving up is harmful', approach: 'Give-up framing', why: 'Reinforcing hopelessness is counter-therapeutic and harmful', keys: ['instill hope'], mistake: 'Validating the wish to give up' }),
      O('d', 'Change the subject to something more cheerful so that she does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'Her feelings can be engaged and supported, not avoided', keys: ['engage the distress'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best engage Sofia given her age and discouragement?', ['R5'], [
      O('a', 'Use developmentally appropriate, strengths-based methods that highlight what she does well and build on it', 3,
        { r: 'Developmentally matched, strengths-based engagement', approach: 'Engage the child age-appropriately', why: 'Strengths-based, developmentally appropriate work engages a discouraged 9-year-old and rebuilds confidence', keys: ['9-year-old', 'articulate and curious'], mistake: 'Using deficit-focused, adult-oriented methods that deepen discouragement' }),
      O('b', 'Talk with her mainly in abstract, adult terms about the neuropsychology of why her reading is impaired', -1,
        { r: 'Abstract methods do not fit a child', approach: 'Adult-framing', why: 'A young child engages through concrete, strengths-based methods', keys: ['developmental fit'], mistake: 'Pitching the work above her developmental level' }),
      O('c', 'Focus the sessions mainly on drilling the reading skills she struggles with most until she finally improves', -1,
        { r: 'Skill drilling is not the counseling role', approach: 'Drill framing', why: 'Skill remediation belongs to the educational plan, not counseling sessions', keys: ['support focus'], mistake: 'Taking on educational drilling in counseling' }),
      O('d', 'Tell her she must improve her reading before any of the counseling work to help her confidence can begin', -1,
        { r: 'Demanding improvement first stalls engagement', approach: 'Precondition framing', why: 'Confidence work proceeds now, not after the reading improves', keys: ['support comes first'], mistake: 'Setting skill improvement as a precondition' }),
    ]),
    Q('q12', 'ethics', 'Sofia’s parents ask the counselor to label her as "gifted" in a report to qualify for a program. The most appropriate action is to:', ['R4'], [
      O('a', 'Decline to misrepresent her profile and clarify what the assessment and your role can accurately support', 3,
        { r: 'Do not misrepresent; document accurately', approach: 'Maintain honesty in records', why: 'The counselor documents only what is accurate and within role, declining to mislabel', keys: ['request to label her gifted', 'program qualification'], mistake: 'Issuing an inaccurate label to satisfy the parents' }),
      O('b', 'Write the label exactly as they request, since keeping the parents satisfied is what matters most for the work', -2,
        { r: 'Falsifying a report is unethical', approach: 'Please-the-parents framing', why: 'An inaccurate report violates professional honesty', keys: ['accurate representation'], mistake: 'Misrepresenting the child’s profile' }),
      O('c', 'Take the parents’ side and advocate for the label in any report, regardless of what the evaluation actually shows', -2,
        { r: 'Advocacy over accuracy is improper', approach: 'Advocacy framing', why: 'Reports reflect the data, not a predetermined label', keys: ['data-based reporting'], mistake: 'Letting advocacy override accuracy' }),
      O('d', 'Refuse to provide any documentation at all and decline to explain what could appropriately be reported about her', -1,
        { r: 'Flat refusal forecloses helpful options', approach: 'Stonewall framing', why: 'Accurate, role-appropriate documentation can be provided rather than refused', keys: ['appropriate documentation'], mistake: 'Declining without clarifying the appropriate options' }),
    ]),
    Q('q13', 'ethics', 'The counselor lacks training in psychoeducational assessment. The most ethical course of action is to:', ['R4'], [
      O('a', 'Refer the formal evaluation to a qualified professional and stay within your supportive counseling role', 3,
        { r: 'Refer evaluation; stay within role', approach: 'Practice within competence', why: 'Psychoeducational testing requires specific competence; the counselor refers and supports within role', keys: ['no assessment training', 'evaluation needed'], mistake: 'Conducting a formal evaluation without the required competence' }),
      O('b', 'Conduct and interpret the psychoeducational testing yourself to keep everything within the counseling relationship', -2,
        { r: 'Testing without competence is unethical', approach: 'Overreach framing', why: 'Performing assessment beyond your competence violates the ethics code', keys: ['competence limits'], mistake: 'Acting outside demonstrated competence' }),
      O('c', 'Tell the parents the evaluation is unnecessary and that her difficulties will simply resolve with a bit more time', -2,
        { r: 'Minimizing the need misleads care', approach: 'Downplay framing', why: 'A documented evaluation is needed and should not be discouraged', keys: ['evaluation indicated'], mistake: 'Discouraging an indicated evaluation' }),
      O('d', 'Transfer the family at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the family without coordination' }),
    ]),
  ],
};

// ============================================================================
// D158 — Dissociative Identity Disorder (F44.81) — Dissociative — hard
// ============================================================================
const D158 = {
  id: 'ncmhce-D158',
  title: 'Lost time and distinct identity states after chronic trauma',
  category: 'Dissociative',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Dissociative Identity Disorder', code: 'F44.81' },
  diagnosis: { name: 'Dissociative Identity Disorder', code: 'F44.81' },
  differentialOptions: [
    { id: 'do1', name: 'Dissociative Identity Disorder', isCorrect: true },
    { id: 'do2', name: 'Post-Traumatic Stress Disorder', isCorrect: false },
    { id: 'do3', name: 'Borderline Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Bipolar I Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Grace Okafor, a 33-year-old librarian, seeks help for recurrent gaps in memory and a sense of being "not herself." She reports finding ' +
      'items she does not remember buying and being told of things she said and did that she has no recollection of doing at all.',
    session1:
      'She describes distinct shifts in her sense of identity, with marked changes in her behavior, voice, and preferences that others have ' +
      'noticed, along with recurrent gaps in recall for everyday events that go well beyond ordinary forgetting. She has a history of chronic childhood trauma.',
    session2:
      'The experiences are not part of a culturally sanctioned practice and are not due to substances or a medical condition. She feels ashamed ' +
      'and frightened, has periods of low mood, and has had passing thoughts that she would be better off gone, without current plan or intent.',
  },
  diagnosticRationale:
    'A disruption of identity involving two or more distinct personality states with marked discontinuity in sense of self and agency, recurrent ' +
    'gaps in recall beyond ordinary forgetting, clinically significant distress, not part of a cultural practice and not due to substances or a ' +
    'medical condition, meets DSM-5-TR criteria for dissociative identity disorder—distinct from PTSD, borderline personality disorder, and bipolar I.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'DID: 2+ distinct identity states with discontinuity of self/agency, recurrent amnesia, not cultural, not substance/medical' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Phase-oriented, stabilization-first approach and the working alliance in trauma work' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk in dissociative and trauma disorders' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'B.2. and C.2.: danger exceptions, coordination of care, and practicing within competence' },
    { id: 'R5', source: 'Hays (Assessment)', detail: 'Culturally informed assessment distinguishing dissociation from sanctioned practices' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a dissociative identity disorder diagnosis?', ['R1'], [
      O('a', 'Distinct identity states with discontinuity of self and recurrent amnesia beyond ordinary forgetting', 3,
        { r: 'Distinct states plus recurrent amnesia', approach: 'Confirm the core criteria', why: 'DID requires two or more distinct identity states with self-discontinuity and recurrent amnesia', keys: ['distinct shifts in identity', 'gaps in recall beyond forgetting'], mistake: 'Diagnosing DID without confirming both the identity disruption and the amnesia' }),
      O('b', 'That she can identify the single stressful event she believes first set off her memory gaps', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the diagnostic criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her memory gaps have grown a little more frequent over the past few days than the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A recurrent pattern, not a recent uptick, is required', keys: ['recurrent pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count does not define DID', approach: 'Mania-criteria framing', why: 'DID is a dissociative condition, not a manic episode', keys: ['dissociation-focused diagnosis'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from PTSD?', ['R1'], [
      O('a', 'The presence of distinct identity states with discontinuity of self and agency, beyond PTSD’s symptom clusters', 3,
        { r: 'Distinct identity states beyond PTSD', approach: 'Contrast identity disruption with PTSD symptoms', why: 'PTSD lacks the distinct identity states and self-discontinuity that define DID', keys: ['distinct identity states', 'others notice the shifts'], mistake: 'Treating identity disruption as ordinary PTSD dissociation' }),
      O('b', 'The fact that she has a documented history of chronic and repeated trauma during her childhood years', -1,
        { r: 'Trauma history underlies both', approach: 'History framing', why: 'A trauma history underlies both; the identity disruption differs', keys: ['shared feature'], mistake: 'Using the trauma history to differentiate' }),
      O('c', 'The dissociative moments and the feeling of being detached that she experiences at difficult times', -1,
        { r: 'Dissociation occurs in both', approach: 'Dissociation framing', why: 'Dissociative experiences occur in both; the distinct identity states differ', keys: ['shared dissociation'], mistake: 'Reading dissociation as decisive' }),
      O('d', 'The way her symptoms tend to feel a little worse during the most stressful and demanding weeks at her job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from borderline personality disorder?', ['R1'], [
      O('a', 'Her identity discontinuity comes with recurrent amnesia for events, beyond the unstable self-image of BPD', 3,
        { r: 'Amnesia and distinct states beyond unstable self-image', approach: 'Contrast amnesia and discrete states', why: 'BPD involves an unstable self-image without the recurrent amnesia and distinct states of DID', keys: ['amnesia for everyday events', 'distinct identity states'], mistake: 'Confusing an unstable self-image with distinct amnesic identity states' }),
      O('b', 'The fact that her sense of who she is can feel unstable and can shift at different times in her life', -1,
        { r: 'Identity instability occurs in both', approach: 'Instability framing', why: 'Identity instability occurs in both; the amnesia and distinct states differ', keys: ['shared feature'], mistake: 'Using identity instability to differentiate' }),
      O('c', 'The shame and the fear that she feels about the experiences she has been having lately', -1,
        { r: 'Shame and fear are nonspecific', approach: 'Affect framing', why: 'Distressing affect occurs in both; the dissociative features differ', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her mood tends to dip a little more in the evenings than it does earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'What is most important to clarify to rule out alternative explanations?', ['R5'], [
      O('a', 'That the experiences are not a culturally sanctioned practice and not due to substances or a medical condition', 3,
        { r: 'Exclude cultural, substance, and medical causes', approach: 'Apply the exclusion criteria', why: 'DID requires excluding culturally sanctioned practices and substance or medical causes', keys: ['not a cultural practice', 'not substance or medical'], mistake: 'Skipping the cultural, substance, and medical exclusions' }),
      O('b', 'A previously undetected specific phobia that might better account for her gaps in memory and identity', -1,
        { r: 'Phobia does not explain dissociation', approach: 'Phobia framing', why: 'A phobia does not account for identity disruption and amnesia', keys: ['dissociative picture'], mistake: 'Reducing dissociation to a phobia' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of all of her dissociative experiences', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurodevelopmental disorder that could explain why others notice changes in her behavior', 0,
        { r: 'Neurodevelopmental framing is implausible', approach: 'Developmental framing', why: 'The adult-onset dissociative pattern fits DID', keys: ['adult dissociative course'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'intake', 'Given her passing thoughts of being "better off gone," what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment of current ideation, intent, plan, and protective factors now', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Dissociative and trauma disorders carry elevated risk, so current risk is assessed directly', keys: ['better off gone', 'chronic trauma history'], mistake: 'Failing to assess current suicide risk' }),
      O('b', 'Assume the risk has passed because she denies a current plan and says the thoughts only come at her lowest points', -2,
        { r: 'Assuming risk passed is unsafe', approach: 'Dismissal framing', why: 'Passive ideation still requires structured current assessment', keys: ['ongoing risk factors'], mistake: 'Dismissing risk on reassurance' }),
      O('c', 'Defer any risk assessment until her dissociative symptoms have fully resolved and she feels more like herself', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after symptoms resolve', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on exploring the childhood trauma in depth and return to any safety questions at a later date', -1,
        { r: 'Trauma processing before safety is unsafe', approach: 'Depth-first framing', why: 'Safety is assessed now; deep trauma processing is not the first step', keys: ['safety first'], mistake: 'Sequencing safety behind trauma exploration' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Grace?', ['R2'], [
      O('a', 'A phase-oriented, stabilization-first approach focused on safety and coping before any trauma processing', 3,
        { r: 'Phase-oriented, stabilization first', approach: 'Apply the stabilization-first model', why: 'DID care begins with safety and stabilization before trauma processing', keys: ['recurrent amnesia', 'shame and fear'], mistake: 'Diving into trauma processing before establishing safety and stabilization' }),
      O('b', 'Immediate, intensive recovery and reliving of all the childhood trauma memories in the very first sessions', -2,
        { r: 'Premature trauma processing destabilizes', approach: 'Flooding framing', why: 'Deep trauma work before stabilization can be destabilizing and unsafe', keys: ['stabilization first'], mistake: 'Processing trauma before the client is stabilized' }),
      O('c', 'A focus only on eliminating the separate identity states as quickly as possible without any stabilization work first', -1,
        { r: 'Eliminating states is not the first goal', approach: 'Suppress-states framing', why: 'Early work is stabilization and safety, not forcibly removing identity states', keys: ['safety and coping first'], mistake: 'Targeting the states before stabilization' }),
      O('d', 'Starting her on a medication that you will select and adjust to suppress the dissociation over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'What should the early phase of treatment prioritize?', ['R2'], [
      O('a', 'Safety, grounding skills, and building internal stability and daily functioning before any trauma processing', 3,
        { r: 'Safety, grounding, and stability first', approach: 'Build the stabilization foundation', why: 'Grounding and stability are the foundation that must precede trauma processing in DID', keys: ['lost time', 'frightened'], mistake: 'Skipping stabilization and grounding work' }),
      O('b', 'Encouraging her to deliberately switch between identity states in session to demonstrate them for assessment', -2,
        { r: 'Eliciting switches is destabilizing', approach: 'Elicit-switching framing', why: 'Deliberately provoking switches is destabilizing and not therapeutic', keys: ['stabilization first'], mistake: 'Provoking dissociation rather than stabilizing it' }),
      O('c', 'Pushing her to recover as many forgotten memories as possible as fast as she can in each early session', -1,
        { r: 'Memory recovery is premature here', approach: 'Memory-recovery framing', why: 'Aggressive memory recovery before stability can be harmful', keys: ['stability before processing'], mistake: 'Prioritizing memory recovery over stabilization' }),
      O('d', 'Leaving safety planning aside for now and focusing only on understanding the origins of each identity state', -1,
        { r: 'Deferring safety is inappropriate', approach: 'Origins-first framing', why: 'Safety and grounding come before exploring origins', keys: ['safety first'], mistake: 'Sequencing safety behind exploration' }),
    ]),
    Q('q8', 'treatment', 'How should progress and safety be tracked over the course of treatment?', ['R5'], [
      O('a', 'Use measurement-based tracking of dissociation, functioning, and risk to guide pacing and catch deterioration', 3,
        { r: 'Measurement-based tracking of symptoms and risk', approach: 'Monitor outcomes and safety', why: 'Tracking dissociation, functioning, and risk steers pacing and catches deterioration in DID', keys: ['elevated risk', 'recurrent amnesia'], mistake: 'Proceeding without monitoring symptoms and risk' }),
      O('b', 'Rely only on whether she happens to say in session that she feels a little more present than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the number of distinct identity states and base every decision solely on that single count', -1,
        { r: 'A single count is too narrow', approach: 'Single-metric framing', why: 'Functioning, dissociation, and risk all inform pacing, not a state count', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one number' }),
      O('d', 'Wait until the end of treatment to review whether her dissociation and risk have changed at all since intake', -1,
        { r: 'End-only review misses risk shifts', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to catch changes in risk', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate care given the complexity of the presentation?', ['R4'], [
      O('a', 'With her consent, coordinate with a trauma-informed team and any prescriber to support safety and stabilization', 3,
        { r: 'Coordinate with a trauma-informed team', approach: 'Coordinate within scope and consent', why: 'Complex DID care benefits from a coordinated, trauma-informed team with the client’s consent', keys: ['complex presentation', 'elevated risk'], mistake: 'Managing complex DID in isolation' }),
      O('b', 'Share her full history with any provider who asks, since coordinating her care is plainly in her interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Avoid involving any other providers so that her counseling stays entirely separate from the rest of her care', -1,
        { r: 'No coordination undercuts complex care', approach: 'Siloed framing', why: 'Consented coordination supports safety in complex care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Release her complete record to every provider so they each hold the full picture of all of her treatment', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure is consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
    Q('q10', 'counseling', 'During a session Grace appears to shift into a different identity state and seems disoriented. The most therapeutic response is to:', ['R2'], [
      O('a', 'Stay calm and use grounding to help her reorient to the present and re-establish safety in the room', 3,
        { r: 'Calm grounding and reorientation', approach: 'Ground and reorient to the present', why: 'Calm grounding helps reorient and re-establish safety during a dissociative shift', keys: ['appears disoriented', 'shift in identity state'], mistake: 'Reacting with alarm or pressing for more dissociation' }),
      O('b', 'Encourage the shift and probe the new state with detailed questions to learn as much about it as possible right now', -2,
        { r: 'Probing the state is destabilizing', approach: 'Probe-the-state framing', why: 'Encouraging and probing the switch can deepen destabilization', keys: ['grounding first'], mistake: 'Amplifying the dissociation rather than grounding it' }),
      O('c', 'Tell her firmly to snap out of it at once and to simply stop the behavior she is showing right now', -1,
        { r: 'Demanding she stop is invalidating', approach: 'Command framing', why: 'Commanding her to stop is invalidating and ineffective for dissociation', keys: ['supportive grounding'], mistake: 'Dismissing the dissociative experience' }),
      O('d', 'End the session immediately and send her out of the room rather than helping her reorient with you there', -1,
        { r: 'Abrupt ending leaves her unsafe', approach: 'Escape framing', why: 'Helping her reorient safely is preferable to an abrupt ending', keys: ['re-establish safety'], mistake: 'Ending abruptly instead of grounding her' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best build safety and trust in the work with Grace?', ['R2'], [
      O('a', 'Move at a paced, predictable rhythm, be transparent, and prioritize stabilization and the alliance over speed', 3,
        { r: 'Paced, predictable, alliance-first work', approach: 'Build trust through pacing and transparency', why: 'A paced, transparent, stabilization-first stance builds safety with a frightened, traumatized client', keys: ['frightened and ashamed', 'chronic trauma'], mistake: 'Pushing for rapid trauma disclosure that overwhelms a fragile alliance' }),
      O('b', 'Press her to recount the details of her childhood trauma quickly so the real work can get underway sooner', -2,
        { r: 'Pressured disclosure destabilizes', approach: 'Push-disclosure framing', why: 'Forcing rapid trauma disclosure undermines safety and stabilization', keys: ['stabilization first'], mistake: 'Demanding disclosure before safety is built' }),
      O('c', 'Focus the sessions mainly on cataloguing every identity state and its characteristics in exhaustive detail each week', -1,
        { r: 'Cataloguing states is not the priority', approach: 'Catalogue framing', why: 'Enumerating states is not the stabilization work that builds safety', keys: ['stabilization focus'], mistake: 'Centering the work on enumerating states' }),
      O('d', 'Tell her counseling cannot help her unless she first agrees to take medication exactly as a prescriber directs', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Supportive stabilization proceeds alongside any coordinated medication', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Grace discloses current abuse by someone who has access to a dependent child. The most appropriate action is to:', ['R4'], [
      O('a', 'Follow mandated-reporting duties for the child’s safety while continuing to support Grace within the team', 3,
        { r: 'Comply with mandated reporting', approach: 'Apply mandated-reporting law', why: 'A dependent child at risk triggers a mandated report regardless of the therapeutic relationship', keys: ['abuse with access to a child', 'reporting duty'], mistake: 'Treating a child-safety disclosure as fully confidential' }),
      O('b', 'Keep the disclosure entirely confidential, since everything shared in counseling must always stay completely private', -2,
        { r: 'Confidentiality yields to child safety', approach: 'Absolutist framing', why: 'Mandated-reporting law overrides confidentiality when a child is at risk', keys: ['reporting duty'], mistake: 'Treating confidentiality as absolute' }),
      O('c', 'Wait to see whether she repeats the disclosure at the next session before deciding whether to make any report', -2,
        { r: 'Delaying a required report is improper', approach: 'Wait-and-see framing', why: 'A reasonable suspicion of child abuse triggers a timely report', keys: ['reasonable suspicion'], mistake: 'Postponing a mandated report' }),
      O('d', 'Investigate the allegation yourself and reach your own conclusion before involving the proper authorities at all', -1,
        { r: 'Investigating is not the counselor’s role', approach: 'Self-investigation framing', why: 'The counselor reports; investigation is for the proper authorities', keys: ['report, do not investigate'], mistake: 'Taking on an investigative role instead of reporting' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in complex dissociative disorders. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; complex DID care may need consultation, training, or referral', keys: ['limited dissociative-disorder training', 'complex, high-risk case'], mistake: 'Managing complex DID alone without competence' }),
      O('b', 'Continue managing the entire case alone to preserve the continuity of the relationship built with her', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell her the dissociation is not serious enough to need specialized care and continue with general talks only', -2,
        { r: 'Minimizing the illness fails the client', approach: 'Downplay framing', why: 'Complex, high-risk DID warrants competent, specialized care', keys: ['serious, high-risk'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer her at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D159 — Illness Anxiety Disorder (F45.21) — Somatic — medium
// ============================================================================
const D159 = {
  id: 'ncmhce-D159',
  title: 'Relentless fear of serious illness despite reassuring tests',
  category: 'Somatic',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Illness Anxiety Disorder', code: 'F45.21' },
  diagnosis: { name: 'Illness Anxiety Disorder', code: 'F45.21' },
  differentialOptions: [
    { id: 'do1', name: 'Illness Anxiety Disorder', isCorrect: true },
    { id: 'do2', name: 'Somatic Symptom Disorder', isCorrect: false },
    { id: 'do3', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Obsessive-Compulsive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'David Kim, a 38-year-old teacher, presents with months of intense preoccupation with having a serious, undiagnosed illness. He checks ' +
      'his body repeatedly, researches symptoms for hours, and seeks frequent reassurance, yet remains convinced something is seriously wrong.',
    session1:
      'His bodily sensations are mild or absent, and the distress is driven by the fear of being sick rather than by the symptoms themselves. ' +
      'Repeated medical workups have been reassuring, but the relief lasts only briefly before the worry about a serious illness returns again.',
    session2:
      'His worry is focused specifically on having a serious disease rather than spread across many areas of life, and he does not have the ' +
      'recurrent intrusive obsessions and ritualized compulsions across multiple themes that define OCD. He is exhausted and wants to feel at ease in his body again.',
  },
  diagnosticRationale:
    'A preoccupation with having or acquiring a serious illness, with minimal or no somatic symptoms, high health anxiety, and excessive ' +
    'illness-related behaviors such as body-checking and reassurance-seeking persisting despite reassuring evaluation, meets DSM-5-TR criteria ' +
    'for illness anxiety disorder—distinct from somatic symptom disorder, the multi-domain worry of GAD, and the broad obsessions of OCD.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Illness anxiety disorder: preoccupation with serious illness, minimal somatic symptoms, excessive checking/reassurance' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Health anxiety: CBT targeting checking, reassurance-seeking, and catastrophic illness beliefs' },
    { id: 'R3', source: 'Barlow PCT', detail: 'Exposure and response prevention principles and reducing safety behaviors' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, coordination of care, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance, collaborative goal setting, and the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an illness anxiety disorder diagnosis?', ['R1'], [
      O('a', 'Preoccupation with serious illness with minimal somatic symptoms and excessive checking or reassurance-seeking', 3,
        { r: 'Illness preoccupation with minimal symptoms', approach: 'Confirm the core criteria', why: 'Illness anxiety disorder requires illness preoccupation with minimal somatic symptoms and excessive illness behaviors', keys: ['convinced something is wrong', 'mild or absent sensations'], mistake: 'Diagnosing without confirming the minimal-symptom, high-anxiety pattern' }),
      O('b', 'That he can identify the single stressful event he believes first set off his fear of being seriously ill', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his worry has grown a little more intense over the past few days than it was the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A persistent pattern, not a recent uptick, is required', keys: ['persistent pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Illness anxiety disorder is an anxiety-spectrum condition, not a mood episode', keys: ['anxiety-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from somatic symptom disorder?', ['R1'], [
      O('a', 'His somatic symptoms are minimal and the distress is driven by the fear of illness, not by the symptoms themselves', 3,
        { r: 'Minimal symptoms; fear-driven distress', approach: 'Contrast symptom burden with illness fear', why: 'Somatic symptom disorder centers on distressing somatic symptoms; here symptoms are minimal and fear drives the distress', keys: ['mild or absent sensations', 'fear of being sick'], mistake: 'Calling fear-driven, minimal-symptom presentation somatic symptom disorder' }),
      O('b', 'The fact that he worries a great deal about his physical health and what might be happening inside his body', -1,
        { r: 'Health worry occurs in both', approach: 'Health-worry framing', why: 'Health worry occurs in both; the symptom burden differs', keys: ['shared feature'], mistake: 'Using health worry to differentiate' }),
      O('c', 'The way he keeps returning to doctors and seeking out further tests and evaluations of his physical condition', -1,
        { r: 'Care-seeking occurs in both', approach: 'Care-seeking framing', why: 'Frequent care-seeking occurs in both; the symptom burden differs', keys: ['shared behavior'], mistake: 'Reading care-seeking as decisive' }),
      O('d', 'The way his worry tends to be a little worse during the busiest and most stressful weeks of his teaching term', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from generalized anxiety disorder?', ['R1'], [
      O('a', 'His worry is focused specifically on having a serious illness, not spread broadly across many areas of life', 3,
        { r: 'Illness-focused, not multi-domain worry', approach: 'Contrast the focus of the worry', why: 'GAD involves worry across many domains; his is focused specifically on serious illness', keys: ['worry focused on disease', 'not spread across life areas'], mistake: 'Calling a focused illness preoccupation generalized anxiety' }),
      O('b', 'The fact that he feels anxious and on edge much of the time and finds it hard to settle his worry down', -1,
        { r: 'Anxious arousal occurs in both', approach: 'Arousal framing', why: 'Anxious arousal occurs in both; the focus of the worry differs', keys: ['shared feature'], mistake: 'Using anxious arousal to differentiate' }),
      O('c', 'The trouble he has relaxing and the way the worry seems to follow him through much of his day', -1,
        { r: 'Persistent worry occurs in both', approach: 'Persistence framing', why: 'Persistent worry occurs in both; the focus differs', keys: ['shared persistence'], mistake: 'Reading persistence as decisive' }),
      O('d', 'The way his worry tends to ease a little on the weekends when his overall schedule is a good deal lighter', 0,
        { r: 'Schedule effects are nonspecific', approach: 'Schedule framing', why: 'A lighter schedule does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading a schedule effect' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from obsessive-compulsive disorder?', ['R1'], [
      O('a', 'His preoccupation centers on health, without the recurrent intrusive obsessions and rituals across multiple themes seen in OCD', 3,
        { r: 'Health focus without broad obsessions and rituals', approach: 'Contrast focused health anxiety with OCD', why: 'OCD involves intrusive obsessions and compulsions across varied themes; his is a focused health preoccupation', keys: ['focused on serious illness', 'no broad obsessions or rituals'], mistake: 'Reading focused health anxiety as OCD' }),
      O('b', 'The fact that he checks his body and repeats certain behaviors in an effort to ease his fears about his health', -1,
        { r: 'Repetitive checking can occur in both', approach: 'Checking framing', why: 'Repetitive checking can occur in both; the breadth of themes differs', keys: ['shared feature'], mistake: 'Using checking alone to differentiate' }),
      O('c', 'The relief he feels for a short time after he checks or gets reassurance before the worry comes back again', -1,
        { r: 'Brief relief occurs in both', approach: 'Relief framing', why: 'Brief relief after a safety behavior occurs in both; the focus differs', keys: ['shared cycle'], mistake: 'Reading the relief cycle as decisive' }),
      O('d', 'The way his checking tends to increase a little on the days when he has had less sleep the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'More checking after poor sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q5', 'intake', 'What is most important to coordinate regarding his medical care during assessment?', ['R4'], [
      O('a', 'Coordinate with his physician to avoid unnecessary repeat testing while ensuring genuine concerns are addressed', 3,
        { r: 'Coordinate to limit unneeded testing', approach: 'Partner with medical care', why: 'Coordinated care limits reassurance-driven repeat testing while keeping genuine medical concerns covered', keys: ['repeated reassuring workups', 'frequent reassurance-seeking'], mistake: 'Working in isolation while he pursues endless repeat testing' }),
      O('b', 'Order a comprehensive new battery of medical tests yourself to settle the question of whether he is truly ill', -2,
        { r: 'Ordering tests exceeds counselor scope', approach: 'Order-test framing', why: 'Counselors do not order medical tests, and more testing feeds the cycle', keys: ['scope limit'], mistake: 'Acting outside scope and reinforcing the cycle' }),
      O('c', 'A previously undetected primary psychotic disorder that might better explain his conviction that he is seriously ill', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'His belief is anxiety-driven, not a fixed delusion', keys: ['anxiety-driven worry'], mistake: 'Pursuing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why he keeps researching his symptoms for hours', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'The health-anxiety pattern fits illness anxiety disorder', keys: ['anxiety-focused'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for David?', ['R2'], [
      O('a', 'Cognitive behavioral therapy targeting catastrophic illness beliefs, checking, and reassurance-seeking', 3,
        { r: 'CBT for health anxiety', approach: 'Apply the guideline', why: 'NICE supports CBT targeting illness beliefs and the checking and reassurance behaviors in health anxiety', keys: ['body-checking', 'reassurance-seeking'], mistake: 'Providing repeated reassurance instead of evidence-based CBT' }),
      O('b', 'Providing detailed, repeated medical reassurance each session until he finally feels fully convinced he is healthy', -2,
        { r: 'Reassurance maintains the cycle', approach: 'Reassurance framing', why: 'Repeated reassurance reinforces the health-anxiety cycle rather than treating it', keys: ['reassurance maintains anxiety'], mistake: 'Feeding the reassurance-seeking that maintains the disorder' }),
      O('c', 'Starting him on an anti-anxiety medication that you will select and adjust over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Encouraging him to keep researching his symptoms thoroughly so that he can rule out every possible illness himself', -2,
        { r: 'Encouraging checking worsens it', approach: 'Checking-endorsing framing', why: 'Encouraging symptom research reinforces the checking behavior', keys: ['checking maintains anxiety'], mistake: 'Endorsing the behavior that maintains the disorder' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor handle his reassurance-seeking and body-checking?', ['R3'], [
      O('a', 'Help him gradually reduce checking and reassurance-seeking so new learning about his health fears can occur', 3,
        { r: 'Reduce the safety behaviors', approach: 'Response prevention', why: 'Reducing checking and reassurance-seeking allows the corrective learning that treats health anxiety', keys: ['repeated checking', 'frequent reassurance'], mistake: 'Leaving the maintaining safety behaviors in place' }),
      O('b', 'Provide the reassurance he asks for whenever he is anxious so that he can feel calm and settled in the session', -2,
        { r: 'Giving reassurance maintains the cycle', approach: 'Reassurance framing', why: 'Providing reassurance reinforces the very behavior that maintains the disorder', keys: ['reassurance maintains anxiety'], mistake: 'Reinforcing reassurance-seeking' }),
      O('c', 'Tell him to research his symptoms even more thoroughly so that he can fully satisfy himself that he is not sick', -2,
        { r: 'More checking entrenches the fear', approach: 'Encourage-checking framing', why: 'Encouraging more checking entrenches the health anxiety', keys: ['checking maintains anxiety'], mistake: 'Amplifying the maintaining behavior' }),
      O('d', 'Tell him to wait until he no longer feels any anxiety at all before he tries to cut back on any of the checking', -1,
        { r: 'Waiting for zero anxiety stalls the work', approach: 'Wait-for-calm framing', why: 'Response prevention proceeds with manageable anxiety, not its absence', keys: ['approach despite anxiety'], mistake: 'Setting an unattainable precondition' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track health-anxiety severity, checking, reassurance-seeking, and functioning over time to guide the plan', 3,
        { r: 'Measurement-based tracking of the target behaviors', approach: 'Monitor the relevant outcomes', why: 'Tracking anxiety severity and the checking and reassurance behaviors steers the CBT plan', keys: ['checking and reassurance', 'exhausted by the worry'], mistake: 'Proceeding without tracking the target behaviors' }),
      O('b', 'Rely only on whether he happens to say in session that he feels a little less worried about his health lately', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the number of medical appointments he attends and base every decision solely on that one figure', -1,
        { r: 'Appointment count is too narrow', approach: 'Single-metric framing', why: 'Anxiety, checking, reassurance, and function all inform the plan, not visit counts alone', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one number' }),
      O('d', 'Wait until the end of treatment to review whether his health anxiety has changed at all since intake', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor handle his questions about medication?', ['R4'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation while continuing the CBT work within your scope', 3,
        { r: 'Refer for prescribing, keep doing therapy', approach: 'Coordinate within scope', why: 'Medication questions are referred to a prescriber while the counselor continues CBT', keys: ['asks about medication', 'scope limits'], mistake: 'Advising on specific medication outside scope' }),
      O('b', 'Recommend a specific anti-anxiety medication and dose for him to begin taking before his next medical appointment', -2,
        { r: 'Recommending a drug and dose exceeds scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not recommend specific drugs or doses', keys: ['no prescriptive authority'], mistake: 'Making a prescribing recommendation' }),
      O('c', 'Tell him that medication will certainly make everything worse and that he should refuse it if it is ever offered', -1,
        { r: 'Blanket refusal advice overreaches', approach: 'Anti-medication framing', why: 'The prescriber and client weigh medication; the counselor does not forbid it', keys: ['shared decision'], mistake: 'Directing a medical decision' }),
      O('d', 'Ignore the medication question and simply redirect him back to the CBT tasks every time that he raises it', -1,
        { r: 'Dismissing the question is unhelpful', approach: 'Avoidant framing', why: 'A referral, not avoidance, is the appropriate response', keys: ['coordinated care'], mistake: 'Failing to address a legitimate question' }),
    ]),
    Q('q10', 'counseling', 'David anxiously asks the counselor to confirm he is not seriously ill. The most therapeutic response is to:', ['R3'], [
      O('a', 'Empathize with the fear and gently decline to provide reassurance, redirecting to the skills that address it', 3,
        { r: 'Empathize but withhold reassurance', approach: 'Validate the fear, not the safety behavior', why: 'Empathizing while declining reassurance and redirecting to skills addresses the maintaining cycle', keys: ['seeks reassurance', 'relief is brief'], mistake: 'Providing the reassurance he requests, which maintains the cycle' }),
      O('b', 'Reassure him firmly that he is perfectly healthy so that he can relax and feel settled for the rest of the session', -2,
        { r: 'Reassurance maintains the cycle', approach: 'Reassurance framing', why: 'Confirming he is healthy reinforces the reassurance-seeking behavior', keys: ['reassurance maintains anxiety'], mistake: 'Giving the reassurance that perpetuates the disorder' }),
      O('c', 'Tell him his fears are irrational and that he simply needs to stop worrying about his health from now on', -1,
        { r: 'Dismissing the fear invalidates him', approach: 'Dismiss framing', why: 'Telling him to just stop worrying invalidates the fear and damages the alliance', keys: ['validate then redirect'], mistake: 'Invalidating the client’s fear' }),
      O('d', 'Avoid the question entirely and quickly change the subject so the session never touches on his health fears at all', -1,
        { r: 'Avoiding the moment misses the work', approach: 'Avoidant framing', why: 'The fear can be engaged and redirected, not avoided', keys: ['engage and redirect'], mistake: 'Sidestepping a key therapeutic moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support David’s engagement in response prevention?', ['R5'], [
      O('a', 'Collaboratively agree on graded reductions in checking and reassurance, framed around his goal of feeling at ease', 3,
        { r: 'Collaborative, graded response prevention', approach: 'Anchor the work in his goal', why: 'Graded, collaborative reduction of safety behaviors tied to his own goal sustains engagement', keys: ['wants to feel at ease in his body', 'exhausted by the worry'], mistake: 'Imposing abrupt behavior change without collaboration or a valued goal' }),
      O('b', 'Insist he stop all checking and reassurance-seeking immediately and completely from the very first session onward', -1,
        { r: 'Abrupt total cessation is not graded', approach: 'All-at-once framing', why: 'Response prevention is typically graded and collaborative, not abrupt and total', keys: ['graded approach'], mistake: 'Demanding total change at once' }),
      O('c', 'Focus the sessions mainly on reviewing each symptom he has researched in exhaustive detail every single week', -1,
        { r: 'Reviewing symptoms feeds the checking', approach: 'Symptom-review framing', why: 'Detailed symptom review reinforces the checking behavior', keys: ['reduce checking'], mistake: 'Centering sessions on the maintaining behavior' }),
      O('d', 'Tell him counseling cannot help him unless he first agrees to take medication exactly as a prescriber directs', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'CBT can proceed alongside any coordinated medication decision', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'David wants the counselor to contact his physician to demand more testing on his behalf. The most appropriate action is to:', ['R4'], [
      O('a', 'Clarify your role, and with his consent coordinate with the physician without advocating for unnecessary testing', 3,
        { r: 'Coordinate with consent, not demand testing', approach: 'Stay within role and coordinate appropriately', why: 'The counselor coordinates with consent but does not pressure the physician for reassurance-driven testing', keys: ['demands more testing', 'reassuring workups'], mistake: 'Advocating for the unnecessary testing that feeds the cycle' }),
      O('b', 'Call the physician and insist on a full new battery of tests, since that is plainly what the client wants done', -2,
        { r: 'Demanding testing reinforces the cycle', approach: 'Advocate-testing framing', why: 'Pressuring for unnecessary testing reinforces the health-anxiety cycle', keys: ['reassurance-driven testing'], mistake: 'Pushing for testing that maintains the disorder' }),
      O('c', 'Contact the physician with his full clinical details right away without obtaining his consent or a release first', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'Contacting the physician requires his informed consent and a release', keys: ['no release'], mistake: 'Disclosing to a third party without consent' }),
      O('d', 'Refuse any contact with the physician at all and decline to discuss coordinating his care in any form', -1,
        { r: 'Flat refusal forecloses helpful coordination', approach: 'Stonewall framing', why: 'Consented, appropriate coordination can occur rather than a blanket refusal', keys: ['consented coordination'], mistake: 'Declining all coordination outright' }),
    ]),
    Q('q13', 'ethics', 'David asks whether the counselor has the training to deliver CBT for health anxiety. The most ethical response is to:', ['R4'], [
      O('a', 'Answer honestly about your competence and seek consultation or refer for any components beyond your training', 3,
        { r: 'Practice within competence', approach: 'Be transparent about competence', why: 'ACA C.2. requires practicing within competence and consulting or referring as needed', keys: ['client asks about training', 'evidence-based method'], mistake: 'Overstating competence to retain the client' }),
      O('b', 'Assure him you can handle anything at all and that there is no need for him to ask about your training again', -2,
        { r: 'Overstating competence is unethical', approach: 'Overclaim framing', why: 'Misrepresenting competence violates the ethics code', keys: ['honest representation'], mistake: 'Claiming competence you cannot support' }),
      O('c', 'Tell him the question is inappropriate and that clients should not ask their counselors about their qualifications', -2,
        { r: 'Dismissing the question is wrong', approach: 'Dismissive framing', why: 'Clients are entitled to ask about competence and credentials', keys: ['client autonomy'], mistake: 'Shutting down a legitimate question' }),
      O('d', 'Transfer him to someone else at once without explanation rather than discuss your training or arrange a handoff', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'An honest conversation, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the client instead of answering honestly' }),
    ]),
  ],
};

module.exports = { CASES: [D155, D156, D157, D158, D159] };
