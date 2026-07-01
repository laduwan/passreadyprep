// ============================================================================
// deep-cases-batch-14.js — NCMHCE deep cases, batch 14 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). On the
// reserved id block ncmhce-D170+, adding distinct diagnoses not yet covered by
// any deep case (checked against all deep-format cases + the exemplar):
//   ncmhce-D170  Separation Anxiety Disorder (Anxiety)
//   ncmhce-D171  Dissociative Amnesia (Dissociative)
//   ncmhce-D172  Functional Neurological Symptom Disorder (Somatic)
//   ncmhce-D173  Intermittent Explosive Disorder (Disruptive)
//   ncmhce-D174  Major Neurocognitive Disorder due to Vascular Disease (Neurocognitive)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-14.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-14');console.log(validateExamDepthSet(CASES))"
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
// D170 — Separation Anxiety Disorder (F93.0) — Anxiety — medium
// ============================================================================
const D170 = {
  id: 'ncmhce-D170',
  title: 'A child’s intense distress at separating from a parent',
  category: 'Anxiety',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Separation Anxiety Disorder', code: 'F93.0' },
  diagnosis: { name: 'Separation Anxiety Disorder', code: 'F93.0' },
  differentialOptions: [
    { id: 'do1', name: 'Separation Anxiety Disorder', isCorrect: true },
    { id: 'do2', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Specific Phobia', isCorrect: false },
    { id: 'do4', name: 'Social Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Sophia Alvarez, an 8-year-old, is referred by her school for weeks of intense distress whenever she must separate from her mother. She ' +
      'refuses to go to school, has frequent stomachaches on school mornings, and worries that something terrible will happen to her mother while apart.',
    session1:
      'Her fear centers specifically on separation from her attachment figure rather than on many worries or a single feared object, and it has ' +
      'lasted well over the four-week threshold for a child. She sleeps in her parents’ room and has nightmares about being separated from her family.',
    session2:
      'Away from her mother she is tearful and clingy, and she pleads not to be left at school or at friends’ homes. Her parents are exhausted and ' +
      'unsure whether to keep her home, and she is otherwise developmentally on track and wants to feel brave enough to go to school like her friends.',
  },
  diagnosticRationale:
    'Developmentally excessive fear concerning separation from attachment figures—school refusal, worry about harm befalling a parent, somatic ' +
    'complaints, and reluctance to sleep away—persisting beyond four weeks in a child with clinically significant distress, meets DSM-5-TR ' +
    'criteria for separation anxiety disorder, distinct from generalized anxiety disorder, specific phobia, and social anxiety disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Separation anxiety disorder: excessive fear of separation from attachment figures; 4+ weeks in children' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Childhood anxiety: cognitive behavioral therapy with graded exposure and parent involvement' },
    { id: 'R3', source: 'Barlow PCT', detail: 'Exposure principles, fear hierarchy, and reducing accommodation and safety behaviors' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.5., and C.2.: welfare of minor clients, parental consent, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance with the child and family and collaborative goal setting' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a separation anxiety disorder diagnosis?', ['R1'], [
      O('a', 'Excessive fear of separation from her attachment figure lasting over four weeks with real impairment', 3,
        { r: 'Separation-focused fear beyond four weeks', approach: 'Confirm the core criteria', why: 'Separation anxiety disorder requires developmentally excessive separation fear lasting 4+ weeks in a child with impairment', keys: ['refuses school', 'worries harm will come to her mother'], mistake: 'Diagnosing without confirming the separation focus, duration, and impairment' }),
      O('b', 'That her parents can pinpoint the one specific event they are convinced first set off all of her separation fears', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her distress has grown a little more noticeable over the past few days than it was the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A persistent pattern beyond four weeks, not a recent uptick, is required', keys: ['persistent pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Separation anxiety disorder is an anxiety condition, not a mood episode', keys: ['anxiety-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from generalized anxiety disorder?', ['R1'], [
      O('a', 'Her fear centers specifically on separation, not on many different worries spread across areas of life', 3,
        { r: 'Separation-focused, not multi-domain worry', approach: 'Contrast the focus of the fear', why: 'GAD involves worry across many domains; her fear is focused specifically on separation from her attachment figure', keys: ['fear centers on separation', 'worries about her mother'], mistake: 'Calling a focused separation fear generalized anxiety' }),
      O('b', 'The fact that she feels quite anxious and worried, and that this distress clearly interferes with her daily routine', -1,
        { r: 'Anxious distress occurs in both', approach: 'Distress framing', why: 'Anxious distress occurs in both; the focus of the fear differs', keys: ['shared feature'], mistake: 'Using anxious distress to differentiate' }),
      O('c', 'The stomachaches and other physical complaints that she experiences on the mornings before school', -1,
        { r: 'Somatic complaints occur in both', approach: 'Somatic framing', why: 'Somatic complaints occur in both; the focus differs', keys: ['shared somatic'], mistake: 'Reading somatic complaints as decisive' }),
      O('d', 'The way her worry tends to be a little worse during the busiest and most demanding weeks of her school term', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from a specific phobia?', ['R1'], [
      O('a', 'Her fear is of separation from her attachment figure, not of a specific object or situation like a phobia', 3,
        { r: 'Separation fear versus a specific object', approach: 'Contrast the feared stimulus', why: 'Specific phobia is cued by a particular object or situation; her fear is of separation from an attachment figure', keys: ['fear of being apart from her mother'], mistake: 'Reading separation fear as a specific phobia of school' }),
      O('b', 'The fact that she becomes very frightened and does whatever she can to avoid the situations that upset her most', -1,
        { r: 'Fear and avoidance occur in both', approach: 'Avoidance framing', why: 'Fear and avoidance occur in both; the feared stimulus differs', keys: ['shared feature'], mistake: 'Using avoidance to differentiate' }),
      O('c', 'The physical signs of anxiety that appear in her body when she is faced with the thing she is afraid of', -1,
        { r: 'Physical anxiety occurs in both', approach: 'Symptom framing', why: 'Bodily anxiety occurs in both; the feared stimulus differs', keys: ['shared arousal'], mistake: 'Reading arousal as decisive' }),
      O('d', 'The way her distress tends to ease a little on the weekends when she does not have to go to school at all', 0,
        { r: 'Schedule effects are nonspecific', approach: 'Schedule framing', why: 'A lighter schedule does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading a schedule effect' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from social anxiety disorder?', ['R1'], [
      O('a', 'Her distress is about being apart from her parent, not about being judged or embarrassed in social situations', 3,
        { r: 'Separation fear, not fear of social judgment', approach: 'Contrast the source of the fear', why: 'Social anxiety disorder centers on fear of negative evaluation; her fear is about separation, not social judgment', keys: ['fear of separation', 'not fear of embarrassment'], mistake: 'Reading separation distress as social anxiety' }),
      O('b', 'The fact that she becomes distressed and would rather avoid going to school and to some other places as well', -1,
        { r: 'School avoidance occurs in both', approach: 'Avoidance framing', why: 'School avoidance occurs in both; the underlying fear differs', keys: ['shared feature'], mistake: 'Using avoidance to differentiate' }),
      O('c', 'The clinginess and the tearfulness that she shows when she is faced with a situation she finds distressing', -1,
        { r: 'Distress signals are nonspecific', approach: 'Distress framing', why: 'Distress signals occur in both; the underlying fear differs', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her worry tends to feel a little worse on the busier and noisier days in her classroom', 0,
        { r: 'Environmental effects are nonspecific', approach: 'Environment framing', why: 'A noisier room does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q5', 'intake', 'What is most important to assess about the family’s response to her anxiety?', ['R3'], [
      O('a', 'How the parents accommodate the anxiety, since accommodation and avoidance can maintain and worsen it over time', 3,
        { r: 'Assess parental accommodation', approach: 'Map the maintaining factors', why: 'Parental accommodation and avoidance maintain separation anxiety, so they must be assessed to plan treatment', keys: ['sleeps in parents’ room', 'parents unsure whether to keep her home'], mistake: 'Assessing the child without assessing the family accommodation that maintains the anxiety' }),
      O('b', 'A previously undetected primary psychotic disorder that might somehow better explain her worry about her mother', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of her school-morning stomachaches', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why she has trouble staying at school during the day', 0,
        { r: 'Cognitive decline is implausible in a child', approach: 'Neurocognitive framing', why: 'The separation-anxiety pattern fits the diagnosis, not decline', keys: ['developmental pattern'], mistake: 'Pursuing an implausible rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Sophia?', ['R2'], [
      O('a', 'Child-focused CBT with graded exposure to separation and parent involvement to reduce accommodation', 3,
        { r: 'CBT with graded exposure and parent involvement', approach: 'Apply the guideline', why: 'Childhood anxiety responds to CBT with graded exposure and parent involvement to reduce accommodation', keys: ['school refusal', 'wants to be brave enough for school'], mistake: 'Choosing open-ended play with no exposure or parent component' }),
      O('b', 'Advising the parents to keep her home from school until she outgrows the fear entirely on her own in time', -2,
        { r: 'Endorsing avoidance maintains the anxiety', approach: 'Avoidance-endorsing framing', why: 'Keeping her home reinforces avoidance and worsens separation anxiety', keys: ['avoidance maintains fear'], mistake: 'Recommending the avoidance that sustains the disorder' }),
      O('c', 'Long-term insight-oriented play therapy alone to uncover the hidden meaning of her fear before any exposure begins', -1,
        { r: 'Insight-only is not first-line', approach: 'Depth-work framing', why: 'CBT with graded exposure is the evidence-based first-line approach', keys: ['exposure indicated'], mistake: 'Prioritizing insight over exposure' }),
      O('d', 'Starting her on an anti-anxiety medication that you will select and adjust yourself over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor work with the parents in the plan?', ['R2'], [
      O('a', 'Coach the parents to reduce accommodation and support graded separations while staying warm and reassuring', 3,
        { r: 'Reduce accommodation, support graded steps', approach: 'Equip the parents to change the pattern', why: 'Coaching parents to reduce accommodation and support graded separations is central to treating separation anxiety', keys: ['sleeps in parents’ room', 'pleads not to be left'], mistake: 'Leaving accommodation in place while working only with the child' }),
      O('b', 'Tell the parents to force an abrupt, complete separation right away with no graded steps so she gets used to it fast', -1,
        { r: 'Abrupt flooding is not the graded approach', approach: 'Flooding framing', why: 'A graded, supported approach is the standard, not an abrupt forced separation', keys: ['graded exposure'], mistake: 'Abandoning the graded structure' }),
      O('c', 'Advise the parents to give in whenever she becomes upset so that the immediate distress ends as quickly as possible', -2,
        { r: 'Giving in reinforces the anxiety', approach: 'Capitulation framing', why: 'Giving in to distress reinforces the avoidance and worsens the anxiety', keys: ['reduce accommodation'], mistake: 'Coaching a response that reinforces the fear' }),
      O('d', 'Place the entire responsibility on the parents and imply their parenting is the sole reason she is anxious at all', -1,
        { r: 'Blaming the parents is counter-therapeutic', approach: 'Blame framing', why: 'A blaming stance undermines engagement and the alliance', keys: ['collaborative stance'], mistake: 'Shaming the parents rather than equipping them' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track separation distress, school attendance, and accommodation over time to guide the graded plan', 3,
        { r: 'Measurement-based tracking of the target behaviors', approach: 'Monitor the relevant outcomes', why: 'Tracking separation distress, attendance, and accommodation steers the graded-exposure plan', keys: ['school refusal', 'family accommodation'], mistake: 'Proceeding without tracking the target behaviors' }),
      O('b', 'Rely only on whether her mother happens to mention in passing that mornings feel a little easier than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how she behaves during the session itself and base every decision solely on what you see in the room', -1,
        { r: 'In-room behavior is too narrow', approach: 'Single-setting framing', why: 'Separation happens at home and school, not in the session alone', keys: ['home and school'], mistake: 'Measuring only the session' }),
      O('d', 'Wait until the end of the school year to review whether her attendance has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the school regarding her attendance?', ['R4'], [
      O('a', 'With the parents’ consent and a release, coordinate a graded return-to-school plan with the school team', 3,
        { r: 'Consent and release before school coordination', approach: 'Coordinate with consent', why: 'A graded return-to-school plan requires parental consent and coordination with the school', keys: ['school refusal', 'school referral'], mistake: 'Contacting the school without parental consent' }),
      O('b', 'Contact the school directly with her clinical details right away, since the school plainly needs all of the information', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before sharing with the school', keys: ['no release'], mistake: 'Disclosing without consent' }),
      O('c', 'Recommend the parents simply withdraw her from school entirely so that the daily separation conflict is avoided', -2,
        { r: 'Withdrawal reinforces avoidance', approach: 'Withdrawal framing', why: 'Withdrawing her from school reinforces avoidance and harms her development', keys: ['graded return'], mistake: 'Endorsing harmful avoidance' }),
      O('d', 'Avoid contacting the school at all so that her counseling stays entirely separate from anything happening at school', -1,
        { r: 'No coordination undercuts the plan', approach: 'Siloed framing', why: 'Consented coordination is central to a graded return-to-school plan', keys: ['integrated plan'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Sophia clings and cries at the start of a session, afraid her mother will leave. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond warmly, help her feel safe, and use a small, manageable step toward tolerating the brief separation', 3,
        { r: 'Warmth plus a small tolerable step', approach: 'Support approach over avoidance', why: 'Warm reassurance paired with a small, manageable separation step supports graded progress', keys: ['clings and cries', 'afraid her mother will leave'], mistake: 'Either forcing an abrupt separation or letting her avoid it entirely' }),
      O('b', 'Tell her firmly to stop crying and separate from her mother at once, regardless of how frightened she feels right now', -1,
        { r: 'Forcing an abrupt separation overwhelms her', approach: 'Force framing', why: 'A harsh, abrupt separation overwhelms a young, anxious child', keys: ['graded steps'], mistake: 'Forcing rather than grading the separation' }),
      O('c', 'Let her keep her mother in the room for the entire session so that she does not have to feel any distress at all', -1,
        { r: 'Total accommodation maintains the fear', approach: 'Accommodation framing', why: 'Fully accommodating avoidance reinforces the separation anxiety', keys: ['graded exposure'], mistake: 'Accommodating rather than gently building tolerance' }),
      O('d', 'End the session and reschedule rather than working with her distress about the separation in the room together', -1,
        { r: 'Ending abruptly misses the opportunity', approach: 'Escape framing', why: 'The moment can be used to build tolerance rather than avoided', keys: ['in-room practice'], mistake: 'Avoiding a valuable clinical moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best engage Sophia in the work given her age?', ['R5'], [
      O('a', 'Use developmentally appropriate, playful methods to build coping skills and confidence for brief separations', 3,
        { r: 'Developmentally matched, playful coping work', approach: 'Engage the child age-appropriately', why: 'Playful, developmentally appropriate coping work engages an 8-year-old and builds confidence for separation', keys: ['8-year-old', 'wants to be brave'], mistake: 'Using abstract, adult-oriented methods a young child cannot engage with' }),
      O('b', 'Talk with her mainly in abstract, adult terms about the underlying psychology of why she fears being apart', -1,
        { r: 'Abstract methods do not fit a child', approach: 'Adult-framing', why: 'A young child engages through concrete, playful methods', keys: ['developmental fit'], mistake: 'Pitching the work above her developmental level' }),
      O('c', 'Focus the sessions mainly on reviewing every separation that upset her in exhaustive detail every single week', -1,
        { r: 'Cataloguing upsets is not skill-building', approach: 'Incident-review framing', why: 'Rehashing every upset does not teach the coping skills she needs', keys: ['skill focus'], mistake: 'Centering sessions on cataloguing distress' }),
      O('d', 'Tell her she must stop being afraid and go to school on her own before any of the counseling work can begin', -1,
        { r: 'Demanding change first stalls engagement', approach: 'Precondition framing', why: 'Engagement and skill-building precede, not follow, the behavior change', keys: ['skills come first'], mistake: 'Setting brave behavior as a precondition' }),
    ]),
    Q('q12', 'ethics', 'Sophia tells the counselor a worry and begs that it not be shared with her mother. The most appropriate action is to:', ['R4'], [
      O('a', 'Explain confidentiality and its limits in age-appropriate terms and clarify what must be shared to keep her safe', 3,
        { r: 'Explain confidentiality and its limits to a minor', approach: 'Balance the minor’s trust and the parental role', why: 'With minors, the counselor clarifies confidentiality and the limits that protect the child', keys: ['minor client', 'begs to keep a worry secret'], mistake: 'Promising a minor’s counselor cannot ethically guarantee absolute secrecy' }),
      O('b', 'Promise her that you will never tell her mother anything at all, no matter what she happens to share with you', -2,
        { r: 'Absolute secrecy promise is unsafe', approach: 'Absolute-secrecy framing', why: 'A blanket promise ignores safety limits and parental rights with minors', keys: ['safety limits'], mistake: 'Guaranteeing confidentiality you cannot ethically keep' }),
      O('c', 'Tell her mother every single detail of whatever she shares right away, since the parent is entitled to know it all', -2,
        { r: 'Disclosing everything erodes the child’s trust', approach: 'Full-disclosure framing', why: 'Sharing everything regardless of relevance undermines the therapeutic relationship with the child', keys: ['developmentally appropriate sharing'], mistake: 'Over-disclosing and breaking the child’s trust' }),
      O('d', 'Refuse to discuss confidentiality with her at all and simply change the subject whenever she raises the topic again', -1,
        { r: 'Avoiding the issue leaves her confused', approach: 'Avoidant framing', why: 'Confidentiality should be explained, not avoided', keys: ['transparent limits'], mistake: 'Sidestepping a needed conversation' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in childhood anxiety treatment. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; childhood anxiety treatment may need consultation, training, or referral', keys: ['limited childhood-anxiety training', 'evidence-based method'], mistake: 'Delivering specialized child treatment without the required competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with the child and family', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell the parents the anxiety is not serious enough to need specialized help and continue with general support only', -2,
        { r: 'Minimizing the problem fails the child', approach: 'Downplay framing', why: 'Impairing childhood anxiety warrants competent, specialized care', keys: ['real impairment'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer the family at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the family without coordination' }),
    ]),
  ],
};

// ============================================================================
// D171 — Dissociative Amnesia (F44.0) — Dissociative — hard
// ============================================================================
const D171 = {
  id: 'ncmhce-D171',
  title: 'A gap in memory for a traumatic period with no medical cause',
  category: 'Dissociative',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Dissociative Amnesia', code: 'F44.0' },
  diagnosis: { name: 'Dissociative Amnesia', code: 'F44.0' },
  differentialOptions: [
    { id: 'do1', name: 'Dissociative Amnesia', isCorrect: true },
    { id: 'do2', name: 'Post-Traumatic Stress Disorder', isCorrect: false },
    { id: 'do3', name: 'Major Neurocognitive Disorder', isCorrect: false },
    { id: 'do4', name: 'Dissociative Identity Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Daniel Brooks, a 40-year-old veteran, seeks help after realizing he cannot recall a several-week period surrounding a traumatic assault. ' +
      'The gap is for autobiographical memory of a stressful time and is far more extensive than ordinary forgetting, and it distresses him greatly.',
    session1:
      'His general memory and cognition are otherwise intact, and a medical and neurological workup was unremarkable, arguing against a ' +
      'neurocognitive cause. He does not describe distinct identity states or lost time in the way dissociative identity disorder presents.',
    session2:
      'He has some intrusive images but the central problem he raises is the inability to remember, not a full trauma-symptom picture, and the ' +
      'amnesia is not due to substances. He feels ashamed and disoriented by the gap and at a low point said he sometimes feels life is hopeless, without plan or intent.',
  },
  diagnosticRationale:
    'An inability to recall important autobiographical information, usually of a traumatic or stressful nature, that is too extensive to be ' +
    'ordinary forgetting, not attributable to a substance or a neurological or medical condition and not better explained by another disorder, ' +
    'meets DSM-5-TR criteria for dissociative amnesia, distinct from PTSD, a major neurocognitive disorder, and dissociative identity disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Dissociative amnesia: inability to recall autobiographical information beyond ordinary forgetting; not substance/medical' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Phase-oriented, stabilization-first approach and the working alliance in trauma work' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk in trauma and dissociative disorders' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'B.2. and C.2.: coordination of care, danger exceptions, and practicing within competence' },
    { id: 'R5', source: 'Hays (Assessment)', detail: 'Culturally and developmentally informed assessment and coordinating collateral and medical information' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a dissociative amnesia diagnosis?', ['R1'], [
      O('a', 'An inability to recall important autobiographical information that is too extensive to be ordinary forgetting', 3,
        { r: 'Autobiographical amnesia beyond ordinary forgetting', approach: 'Confirm the core criteria', why: 'Dissociative amnesia requires an inability to recall autobiographical information beyond ordinary forgetting', keys: ['cannot recall a several-week period', 'far beyond ordinary forgetting'], mistake: 'Diagnosing without confirming the extent of the memory gap' }),
      O('b', 'That he can pinpoint the single event he is convinced first caused all of his current difficulty with his memory', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his memory gap has grown a little more noticeable over the past few days than it was the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The nature and extent of the amnesia, not a recent uptick, defines it', keys: ['nature of the amnesia'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete manic episode at this point in time', 0,
        { r: 'Manic count does not define it', approach: 'Mania-criteria framing', why: 'Dissociative amnesia is a dissociative condition, not a manic episode', keys: ['dissociation-focused diagnosis'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from PTSD?', ['R1'], [
      O('a', 'The central problem is the extensive memory gap itself, not the full re-experiencing and hyperarousal picture of PTSD', 3,
        { r: 'Amnesia as the central problem, not full PTSD', approach: 'Contrast the central feature', why: 'PTSD centers on re-experiencing and hyperarousal; his central problem is the extensive dissociative amnesia', keys: ['inability to remember is the main issue', 'some intrusive images'], mistake: 'Folding a primary dissociative amnesia into a PTSD picture' }),
      O('b', 'The fact that he has experienced a serious traumatic event that continues to affect him in his daily life', -1,
        { r: 'Trauma history underlies both', approach: 'History framing', why: 'A trauma history underlies both; the central feature differs', keys: ['shared feature'], mistake: 'Using the trauma history to differentiate' }),
      O('c', 'The intrusive images that sometimes come to him and the distress that he feels when they do', -1,
        { r: 'Intrusions occur in both', approach: 'Intrusion framing', why: 'Intrusive images can occur in both; the central feature differs', keys: ['shared intrusions'], mistake: 'Reading intrusions as decisive' }),
      O('d', 'The way his symptoms tend to feel a little worse during the most stressful and demanding weeks of his life', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from a major neurocognitive disorder?', ['R1'], [
      O('a', 'His general memory and cognition are otherwise intact with an unremarkable medical workup, unlike neurocognitive decline', 3,
        { r: 'Intact general cognition versus decline', approach: 'Contrast focal amnesia with global decline', why: 'A neurocognitive disorder involves global cognitive decline; his general cognition is intact with a focal autobiographical gap', keys: ['general memory intact', 'unremarkable workup'], mistake: 'Reading a focal dissociative gap as a neurocognitive decline' }),
      O('b', 'The fact that he has clear difficulty recalling certain information from a particular period of his life', -1,
        { r: 'Memory difficulty occurs in both', approach: 'Memory framing', why: 'Memory difficulty occurs in both; the pattern and cognition differ', keys: ['shared feature'], mistake: 'Using memory difficulty to differentiate' }),
      O('c', 'The distress and the disorientation that he feels about the gap in his memory that he has noticed', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress can occur in both; the cognitive picture differs', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way his recall seems a little worse on the days when he has slept poorly the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse recall after poor sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from dissociative identity disorder?', ['R1'], [
      O('a', 'He has an amnesia gap without the distinct identity states and discontinuity of self that define dissociative identity disorder', 3,
        { r: 'Amnesia without distinct identity states', approach: 'Contrast against identity disruption', why: 'DID requires distinct identity states with self-discontinuity; he has amnesia without those states', keys: ['no distinct identity states', 'no lost time between selves'], mistake: 'Reading isolated amnesia as dissociative identity disorder' }),
      O('b', 'The fact that he experiences a genuine dissociative disturbance that is connected in some way to a difficult and traumatic period in his earlier life and continues to affect him now', -1,
        { r: 'Dissociation underlies both', approach: 'Dissociation framing', why: 'Dissociation underlies both; the identity states differ', keys: ['shared feature'], mistake: 'Using dissociation to differentiate' }),
      O('c', 'The trouble he has piecing together what happened during the period that he cannot fully remember', -1,
        { r: 'Memory gaps occur in both', approach: 'Gap framing', why: 'Memory gaps occur in both; the identity states differ', keys: ['shared gap'], mistake: 'Reading a memory gap as decisive' }),
      O('d', 'The way his distress about the gap tends to feel a bit worse in the evenings than earlier in the day', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q5', 'intake', 'Given his remark that life sometimes feels hopeless, what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment of current ideation, intent, plan, and protective factors now', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Trauma and dissociative disorders carry elevated risk, so current risk is assessed directly', keys: ['life feels hopeless', 'ashamed and disoriented'], mistake: 'Failing to assess current suicide risk' }),
      O('b', 'Assume the risk has passed because he denies a current plan and frames the hopeless feeling as only occasional', -2,
        { r: 'Assuming risk passed is unsafe', approach: 'Dismissal framing', why: 'Passive ideation still requires structured current assessment', keys: ['ongoing risk factors'], mistake: 'Dismissing risk on reassurance' }),
      O('c', 'Defer any risk assessment until his memory has fully returned and he has been stable for several months at least', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after the amnesia resolves', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on trying to recover the missing memories for now and return to any safety questions at a later date', -1,
        { r: 'Memory recovery before safety is unsafe', approach: 'Recovery-first framing', why: 'Safety is assessed now; memory recovery is not the first step', keys: ['safety first'], mistake: 'Sequencing safety behind memory work' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Daniel?', ['R2'], [
      O('a', 'A phase-oriented, stabilization-first approach focused on safety and coping before any trauma or memory work', 3,
        { r: 'Phase-oriented, stabilization first', approach: 'Apply the stabilization-first model', why: 'Trauma-related dissociation is treated with safety and stabilization before trauma or memory processing', keys: ['ashamed and disoriented', 'trauma history'], mistake: 'Diving into memory recovery before establishing safety and stabilization' }),
      O('b', 'Aggressive memory-recovery techniques in the first sessions to force the missing memories back as fast as possible', -2,
        { r: 'Forced memory recovery is unsafe', approach: 'Memory-recovery framing', why: 'Aggressive memory recovery before stabilization can be harmful and can distort memory', keys: ['stabilization first'], mistake: 'Prioritizing memory recovery over stabilization' }),
      O('c', 'Insisting he recount the traumatic assault in vivid detail immediately so that the work can move quickly', -2,
        { r: 'Premature trauma processing destabilizes', approach: 'Flooding framing', why: 'Deep trauma processing before stabilization can be destabilizing', keys: ['stabilization first'], mistake: 'Processing trauma before the client is stabilized' }),
      O('d', 'Starting him on a medication that you will select and adjust to restore his memory over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'What should the early phase of treatment prioritize?', ['R2'], [
      O('a', 'Safety, grounding skills, and psychoeducation about dissociation before any memory or trauma processing', 3,
        { r: 'Safety, grounding, and psychoeducation first', approach: 'Build the stabilization foundation', why: 'Grounding, safety, and psychoeducation are the foundation that precedes memory or trauma work', keys: ['disoriented by the gap', 'ashamed'], mistake: 'Skipping stabilization and grounding work' }),
      O('b', 'Pushing him to recover as many of the missing memories as possible as quickly as he can in each early session', -1,
        { r: 'Memory recovery is premature here', approach: 'Memory-recovery framing', why: 'Aggressive memory recovery before stability can be harmful', keys: ['stability before processing'], mistake: 'Prioritizing memory recovery over stabilization' }),
      O('c', 'Interpreting for him exactly what must have happened during the missing period so he can fill in the gap right away', -2,
        { r: 'Suggesting content risks false memory', approach: 'Suggestion framing', why: 'Telling him what happened risks implanting distorted or false memories', keys: ['avoid suggestion'], mistake: 'Suggesting memory content to the client' }),
      O('d', 'Leaving safety planning aside for now and focusing only on the details of the traumatic event itself', -1,
        { r: 'Deferring safety is inappropriate', approach: 'Event-first framing', why: 'Safety and grounding come before focusing on the event', keys: ['safety first'], mistake: 'Sequencing safety behind exploration' }),
    ]),
    Q('q8', 'treatment', 'How should progress and safety be tracked over the course of treatment?', ['R5'], [
      O('a', 'Use measurement-based tracking of dissociation, functioning, and risk to guide pacing and catch deterioration', 3,
        { r: 'Measurement-based tracking of symptoms and risk', approach: 'Monitor outcomes and safety', why: 'Tracking dissociation, functioning, and risk steers pacing and catches deterioration', keys: ['elevated risk', 'dissociative amnesia'], mistake: 'Proceeding without monitoring symptoms and risk' }),
      O('b', 'Rely only on whether he happens to mention in session that he feels a little more grounded than he did before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how much of the missing memory has returned and base every decision solely on that one thing', -1,
        { r: 'Recovered-memory count is too narrow', approach: 'Single-metric framing', why: 'Functioning, dissociation, and risk all inform pacing, not recovered memory alone', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one variable' }),
      O('d', 'Wait until the end of treatment to review whether his dissociation and risk have changed at all since intake', -1,
        { r: 'End-only review misses risk shifts', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to catch changes in risk', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate care given the trauma history and complexity?', ['R4'], [
      O('a', 'With his consent, coordinate with a trauma-informed team and any medical providers to support safe treatment', 3,
        { r: 'Coordinate with a trauma-informed team', approach: 'Coordinate within scope and consent', why: 'Complex dissociative and trauma care benefits from coordinated, trauma-informed providers with consent', keys: ['veteran with trauma', 'medical workup involved'], mistake: 'Managing complex dissociative trauma in isolation' }),
      O('b', 'Share his full history with any provider who asks, since coordinating his care is plainly in his interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Avoid involving any other providers so that his counseling stays entirely separate from the rest of his care', -1,
        { r: 'No coordination undercuts complex care', approach: 'Siloed framing', why: 'Consented coordination supports safety in complex care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Release his complete record to every provider so they each hold the full picture of all of his treatment', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure is consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
    Q('q10', 'counseling', 'Daniel becomes distressed and ashamed that he "should" be able to remember. The most therapeutic response is to:', ['R5'], [
      O('a', 'Normalize the amnesia as a recognized response to trauma and reduce his shame while supporting stabilization', 3,
        { r: 'Normalize and de-shame the amnesia', approach: 'Validate and psychoeducate', why: 'Normalizing dissociative amnesia as a trauma response reduces shame and supports the alliance', keys: ['ashamed he cannot remember', 'trauma history'], mistake: 'Either implying he is at fault or pressuring him to force the memories back' }),
      O('b', 'Tell him he simply needs to try harder to remember and that the memories will come back if he concentrates enough', -2,
        { r: 'Try-harder framing is inaccurate and shaming', approach: 'Effort framing', why: 'Dissociative amnesia is not a matter of effort; this deepens shame', keys: ['de-shame'], mistake: 'Implying the amnesia reflects insufficient effort' }),
      O('c', 'Tell him what you assume happened during the missing period so he does not have to feel the gap any longer', -2,
        { r: 'Suggesting content risks false memory', approach: 'Suggestion framing', why: 'Supplying content risks implanting distorted memories', keys: ['avoid suggestion'], mistake: 'Suggesting memory content to the client' }),
      O('d', 'Change the subject to something lighter so that he does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'His shame can be engaged and supported, not avoided', keys: ['engage the distress'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Daniel through the uncertainty of the memory gap?', ['R2'], [
      O('a', 'Focus on present-day functioning and coping, letting memory return at its own pace within a safe, paced approach', 3,
        { r: 'Present-focused coping, memory at its own pace', approach: 'Support function without forcing recall', why: 'Supporting present functioning and letting memory return naturally, within a paced approach, is safer than forcing recall', keys: ['distressed by the gap', 'stabilization phase'], mistake: 'Making forced memory recovery the goal of the work' }),
      O('b', 'Press him to keep trying to reconstruct the missing weeks in vivid detail in each and every session going forward', -1,
        { r: 'Pressured reconstruction can destabilize', approach: 'Push-recall framing', why: 'Pressured memory reconstruction can destabilize and distort memory', keys: ['paced approach'], mistake: 'Forcing recall before stabilization' }),
      O('c', 'Focus the sessions mainly on speculating about what might have happened during the gap in exhaustive detail', -1,
        { r: 'Speculation risks false memory', approach: 'Speculation framing', why: 'Speculating about the content risks implanting distorted memories', keys: ['avoid suggestion'], mistake: 'Encouraging speculation about the gap' }),
      O('d', 'Tell him counseling cannot help him at all unless he first recovers the missing memories on his own', -1,
        { r: 'Conditioning care on recall is inappropriate', approach: 'Conditioning framing', why: 'Supportive, present-focused work proceeds without requiring memory recovery first', keys: ['engagement matters'], mistake: 'Making help contingent on recovering memory' }),
    ]),
    Q('q12', 'ethics', 'A lawyer asks the counselor to use techniques to recover Daniel’s memories for a legal case. The most appropriate action is to:', ['R4'], [
      O('a', 'Decline suggestive memory-recovery for legal purposes and clarify your treating role and its limits', 3,
        { r: 'Decline suggestive recovery; stay within role', approach: 'Avoid contaminating memory and role', why: 'The counselor avoids suggestive memory-recovery that could distort memory and exceeds the treating role', keys: ['lawyer requests memory recovery', 'legal case'], mistake: 'Using suggestive techniques that risk implanting or distorting memories' }),
      O('b', 'Use strong suggestive and hypnotic techniques to recover the memories so the legal case can proceed quickly', -2,
        { r: 'Suggestive recovery risks false memory', approach: 'Suggestion framing', why: 'Suggestive recovery for legal use risks distorted memory and is inappropriate', keys: ['memory integrity'], mistake: 'Using techniques that risk false memory' }),
      O('c', 'Take the lawyer’s side and advocate for the client’s legal position in any report or statement that is requested', -2,
        { r: 'Advocacy compromises objectivity', approach: 'Advocacy framing', why: 'Aligning with a legal position compromises objectivity and the treating role', keys: ['role boundaries'], mistake: 'Becoming an advocate in a legal matter' }),
      O('d', 'Refuse to communicate with the client or the lawyer about the matter at all, declining even to clarify your role', -1,
        { r: 'Blanket refusal is unhelpful', approach: 'Stonewall framing', why: 'The counselor can clarify the treating role and its limits rather than refuse all communication', keys: ['clarify the role'], mistake: 'Declining to clarify the appropriate boundaries' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in dissociative disorders. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; dissociative-disorder care may need consultation, training, or referral', keys: ['limited dissociative training', 'complex, high-risk case'], mistake: 'Managing a complex dissociative case alone without competence' }),
      O('b', 'Continue managing the entire case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell him the amnesia is not serious enough to need specialized care and continue with general talks only', -2,
        { r: 'Minimizing the problem fails the client', approach: 'Downplay framing', why: 'A complex, high-risk dissociative presentation warrants competent, specialized care', keys: ['high-risk case'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer him at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D172 — Functional Neurological Symptom Disorder (F44.4) — Somatic — hard
// ============================================================================
const D172 = {
  id: 'ncmhce-D172',
  title: 'Neurological symptoms with no neurological cause found',
  category: 'Somatic',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Functional Neurological Symptom Disorder', code: 'F44.4' },
  diagnosis: { name: 'Functional Neurological Symptom Disorder', code: 'F44.4' },
  differentialOptions: [
    { id: 'do1', name: 'Functional Neurological Symptom Disorder', isCorrect: true },
    { id: 'do2', name: 'Somatic Symptom Disorder', isCorrect: false },
    { id: 'do3', name: 'Illness Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Factitious Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Grace Adeyemi, a 30-year-old teacher, is referred by neurology for episodes of weakness in her right arm and non-epileptic seizure-like ' +
      'events. A thorough neurological workup, including imaging and EEG, found no neurological disease that accounts for the symptoms.',
    session1:
      'Examination shows features incompatible with recognized neurological conditions, and the symptoms are altered voluntary motor and sensory ' +
      'function without a medical explanation. The symptoms are not intentionally produced, and there is no evidence she is feigning them for any gain.',
    session2:
      'She is frightened and frustrated at being told "nothing is wrong," and she worries she is not being believed. Her symptoms began around a ' +
      'period of significant stress, she is otherwise engaged and wants to get better, and at a low point she felt briefly that life was too much, without plan or intent.',
  },
  diagnosticRationale:
    'One or more symptoms of altered voluntary motor or sensory function, with clinical findings providing evidence of incompatibility between ' +
    'the symptoms and recognized neurological conditions, not better explained by another disorder and not intentionally produced, meets DSM-5-TR ' +
    'criteria for functional neurological symptom disorder, distinct from somatic symptom disorder, illness anxiety disorder, and factitious disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Functional neurological symptom disorder: altered motor/sensory function incompatible with neurological disease; not feigned' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Functional neurological disorder: multidisciplinary care, physical rehabilitation, and psychological therapy' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when distress and hopelessness co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, coordination of care, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance, validation, and collaborative goal setting' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a functional neurological symptom disorder diagnosis?', ['R1'], [
      O('a', 'Altered motor or sensory function with clinical evidence of incompatibility with recognized neurological disease', 3,
        { r: 'Altered function incompatible with neurological disease', approach: 'Confirm the core criteria', why: 'The diagnosis requires altered motor/sensory function with positive clinical evidence of incompatibility with neurological disease', keys: ['features incompatible with known conditions', 'unremarkable neurological workup'], mistake: 'Treating it as a diagnosis of exclusion rather than confirming the positive incompatibility signs' }),
      O('b', 'That she can identify the single stressful event she is convinced first triggered every one of her physical symptoms', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria, though stress often accompanies onset', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her symptoms have grown a little more intense over the past few days than they were the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The incompatibility findings, not a recent uptick, define it', keys: ['clinical findings'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'The disorder is defined by the neurological-symptom findings, not mood criteria', keys: ['symptom-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from somatic symptom disorder?', ['R1'], [
      O('a', 'She has neurological-type symptoms with positive signs of incompatibility, not distress centered on general bodily symptoms', 3,
        { r: 'Incompatible neurological signs, not general somatic distress', approach: 'Contrast the symptom type and findings', why: 'Somatic symptom disorder centers on distress about general somatic symptoms; hers are neurological-type with incompatibility findings', keys: ['non-epileptic events', 'features incompatible with neurology'], mistake: 'Folding functional neurological signs into a general somatic symptom picture' }),
      O('b', 'The fact that she has distressing physical symptoms that are having a real impact on her ability to function', -1,
        { r: 'Distressing symptoms occur in both', approach: 'Symptom framing', why: 'Distressing physical symptoms occur in both; the incompatibility findings differ', keys: ['shared feature'], mistake: 'Using distressing symptoms to differentiate' }),
      O('c', 'The worry and the frustration that she feels about her physical health and about not being believed', -1,
        { r: 'Health distress is nonspecific', approach: 'Distress framing', why: 'Health-related distress occurs in both; the findings differ', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her symptoms tend to feel a little worse during the busiest and most stressful weeks of her teaching term', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from illness anxiety disorder?', ['R1'], [
      O('a', 'She has actual altered neurological function, not a preoccupation with having an illness in the relative absence of symptoms', 3,
        { r: 'Real altered function, not illness preoccupation', approach: 'Contrast function versus preoccupation', why: 'Illness anxiety disorder centers on fear of illness with minimal symptoms; she has genuine altered neurological function', keys: ['arm weakness and non-epileptic events', 'not mainly a fear of being ill'], mistake: 'Reading functional symptoms as mere illness preoccupation' }),
      O('b', 'The fact that she feels genuinely worried and frightened about what might be happening inside her body and about what all of this could ultimately mean for her physical health', -1,
        { r: 'Health worry occurs in both', approach: 'Worry framing', why: 'Health worry occurs in both; the presence of altered function differs', keys: ['shared feature'], mistake: 'Using health worry to differentiate' }),
      O('c', 'The distress she feels about her symptoms and about how they are affecting her day-to-day life', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress occurs in both; the altered function differs', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her symptoms tend to be a little worse on the busier and more demanding days at her school', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening on busy days does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from factitious disorder?', ['R1'], [
      O('a', 'Her symptoms are not intentionally produced and there is no evidence of feigning, unlike the deliberate deception of factitious disorder', 3,
        { r: 'Not intentionally produced or feigned', approach: 'Contrast on intentionality', why: 'Factitious disorder involves intentional falsification; her symptoms are genuine and not intentionally produced', keys: ['not intentionally produced', 'no evidence of feigning'], mistake: 'Assuming functional symptoms are feigned' }),
      O('b', 'The fact that she presents with distressing physical symptoms that have led to a thorough medical evaluation and, in the end, to a referral onward for further specialist assessment and care', -1,
        { r: 'Medical presentation occurs in both', approach: 'Presentation framing', why: 'A medical presentation can occur in both; intentionality differs', keys: ['shared feature'], mistake: 'Using the medical presentation to differentiate' }),
      O('c', 'The impact her symptoms have had on her work and her daily functioning over recent weeks', -1,
        { r: 'Functional impact occurs in both', approach: 'Impact framing', why: 'Functional impact can occur in both; intentionality differs', keys: ['shared impact'], mistake: 'Reading impact as decisive' }),
      O('d', 'The way her symptoms seem a little worse on the days when she has slept poorly the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse symptoms after poor sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q5', 'intake', 'What is most important to coordinate given the neurology referral?', ['R4'], [
      O('a', 'Coordinate with neurology and a multidisciplinary team so care is integrated and the diagnosis is communicated well', 3,
        { r: 'Coordinate multidisciplinary care', approach: 'Partner across disciplines', why: 'Functional neurological disorder is managed by an integrated team, so coordination with neurology is essential', keys: ['neurology referral', 'multidisciplinary care'], mistake: 'Working in isolation from the neurology and medical team' }),
      O('b', 'Order additional neurological tests yourself to be completely certain that no disease has been missed by the team', -2,
        { r: 'Ordering tests exceeds counselor scope', approach: 'Order-test framing', why: 'Counselors do not order tests, and repeat testing can reinforce illness behavior', keys: ['scope limit'], mistake: 'Acting outside scope and reinforcing the cycle' }),
      O('c', 'A previously undetected primary psychotic disorder that might better account for her neurological-type symptoms', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why her arm becomes weak during her episodes', 0,
        { r: 'Cognitive decline is not indicated here', approach: 'Neurocognitive framing', why: 'The functional pattern fits FND, not a neurocognitive decline', keys: ['functional pattern'], mistake: 'Pursuing an unsupported rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Grace?', ['R2'], [
      O('a', 'Multidisciplinary care combining physical rehabilitation with psychological therapy within a coordinated team', 3,
        { r: 'Multidisciplinary rehab plus psychological therapy', approach: 'Apply the guideline', why: 'Functional neurological disorder is treated with combined physical rehabilitation and psychological therapy in a team', keys: ['arm weakness', 'wants to get better'], mistake: 'Offering psychological therapy in isolation with no rehabilitation or coordination' }),
      O('b', 'Telling her the symptoms are "all in her head" and that she simply needs to will herself to stop having them', -2,
        { r: 'Dismissive framing harms and is inaccurate', approach: 'All-in-your-head framing', why: 'Telling her the symptoms are imaginary is inaccurate, invalidating, and counter-therapeutic', keys: ['validate the symptoms'], mistake: 'Dismissing genuine functional symptoms' }),
      O('c', 'Repeated medical testing each visit to reassure her that no neurological disease has been missed by the team', -1,
        { r: 'Repeated testing reinforces illness behavior', approach: 'Reassurance-testing framing', why: 'Repeated testing tends to reinforce illness behavior rather than treat the disorder', keys: ['coordinated diagnosis'], mistake: 'Feeding a reassurance-testing cycle' }),
      O('d', 'Starting her on a medication that you will select and adjust to resolve her symptoms over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor frame the diagnosis with Grace?', ['R5'], [
      O('a', 'Validate that the symptoms are real and explain the functional diagnosis as genuine and treatable, not imagined', 3,
        { r: 'Validate the symptoms as real and treatable', approach: 'Provide a validating, accurate explanation', why: 'A validating, accurate explanation that the symptoms are real and treatable supports engagement and recovery', keys: ['frustrated at being told nothing is wrong', 'worries she is not believed'], mistake: 'Framing the symptoms as imaginary or as the client’s fault' }),
      O('b', 'Tell her the symptoms are not real and that she is essentially making them up without realizing it herself', -2,
        { r: 'Calling the symptoms unreal is invalidating', approach: 'Invalidation framing', why: 'Telling her the symptoms are not real is inaccurate and ruptures the alliance', keys: ['symptoms are genuine'], mistake: 'Invalidating genuine functional symptoms' }),
      O('c', 'Avoid naming the diagnosis at all so that she does not have to think about the psychological aspect of her symptoms', -1,
        { r: 'Avoiding the diagnosis undermines engagement', approach: 'Avoidant framing', why: 'A clear, validating explanation of the diagnosis supports engagement', keys: ['transparent explanation'], mistake: 'Withholding the diagnosis and its rationale' }),
      O('d', 'Tell her the symptoms will simply go away on their own and that no treatment or explanation is really needed', -1,
        { r: 'Minimizing misses the treatment need', approach: 'Minimize framing', why: 'The disorder warrants explanation and coordinated treatment, not passive waiting', keys: ['treatable disorder'], mistake: 'Dismissing the need for treatment' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track symptom frequency, function, distress, and rehabilitation goals over time to guide the coordinated plan', 3,
        { r: 'Measurement-based tracking of symptoms and function', approach: 'Monitor the relevant outcomes', why: 'Tracking symptoms, function, distress, and rehab goals steers the multidisciplinary plan', keys: ['non-epileptic events', 'wants to function again'], mistake: 'Proceeding without tracking the relevant outcomes' }),
      O('b', 'Rely only on whether she happens to mention in session that she feels a little better than she did before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the number of medical tests she has had and base every decision solely on that one figure', -1,
        { r: 'Test count is the wrong metric', approach: 'Wrong-metric framing', why: 'Symptoms, function, and distress are the outcomes, not the number of tests', keys: ['function focus'], mistake: 'Measuring the wrong variable' }),
      O('d', 'Wait until the end of treatment to review whether her symptoms have changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the medical and rehabilitation team?', ['R4'], [
      O('a', 'With her consent and a release, coordinate a shared plan with neurology, rehabilitation, and any prescriber', 3,
        { r: 'Coordinate with consent across the team', approach: 'Coordinate within consent and scope', why: 'Integrated FND care depends on consented coordination across neurology, rehab, and the counselor', keys: ['neurology referral', 'multidisciplinary care'], mistake: 'Working in isolation, or sharing without consent' }),
      O('b', 'Share her full history with everyone involved right away, since coordinating her care is plainly in her interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Avoid contacting the medical team at all so that her counseling stays entirely separate from her medical care', -1,
        { r: 'No coordination undercuts integrated care', approach: 'Siloed framing', why: 'Consented coordination is central to FND care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Release her complete record to every provider so they each hold the full picture of all of her treatment', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure is consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
    Q('q10', 'counseling', 'Grace is upset and says the doctors think she is "faking it." The most therapeutic response is to:', ['R5'], [
      O('a', 'Validate that her symptoms are real and not intentionally produced, and reinforce that the disorder is genuine and treatable', 3,
        { r: 'Validate as real and not feigned', approach: 'Counter the feigning fear with validation', why: 'Validating that her symptoms are genuine and not feigned counters her fear and supports the alliance', keys: ['worries she is not believed', 'not intentionally produced'], mistake: 'Either agreeing she is faking or dismissing her distress' }),
      O('b', 'Tell her that the doctors are probably right and that she is likely producing the symptoms on purpose after all', -2,
        { r: 'Accusing her of feigning is wrong and harmful', approach: 'Accusation framing', why: 'Accusing her of feigning is inaccurate and ruptures the alliance', keys: ['symptoms are genuine'], mistake: 'Endorsing an accusation of feigning' }),
      O('c', 'Tell her not to worry about what the doctors think and simply move on without addressing her feeling at all', -1,
        { r: 'Dismissing the feeling invalidates her', approach: 'Minimize framing', why: 'Telling her not to worry dismisses a central, valid concern', keys: ['validate then support'], mistake: 'Minimizing a central feeling' }),
      O('d', 'Change the subject to something more positive so that she does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'Her feeling can be engaged and validated, not avoided', keys: ['engage the feeling'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Grace’s engagement and recovery?', ['R5'], [
      O('a', 'Build a collaborative alliance around her own recovery goals, linking coping and rehabilitation to what she values', 3,
        { r: 'Collaborative, values-linked recovery goals', approach: 'Anchor the work in her goals', why: 'A collaborative alliance tied to her own recovery goals and the rehab plan sustains engagement', keys: ['engaged and wants to get better', 'stress-linked onset'], mistake: 'Framing the disorder as her fault, which undermines engagement' }),
      O('b', 'Insist she accept that the symptoms are purely psychological before any of the rehabilitation work can begin', -1,
        { r: 'Demanding a psychological label first stalls engagement', approach: 'Label-first framing', why: 'Requiring her to fully endorse a psychological cause first can block engagement', keys: ['collaborative framing'], mistake: 'Setting an insight precondition' }),
      O('c', 'Focus the sessions mainly on cataloguing every physical symptom she has in exhaustive detail every single week', -1,
        { r: 'Cataloguing symptoms is not the work', approach: 'Catalogue framing', why: 'Exhaustive symptom logging can reinforce illness focus rather than recovery', keys: ['recovery focus'], mistake: 'Centering sessions on enumerating symptoms' }),
      O('d', 'Tell her counseling cannot help her at all unless she first completes every part of the medical workup again', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Psychological work proceeds alongside the coordinated medical and rehab plan', keys: ['engagement matters'], mistake: 'Making counseling contingent on more testing' }),
    ]),
    Q('q12', 'ethics', 'Grace asks the counselor to document that her symptoms are "caused entirely by her employer’s stress" for a claim. The most appropriate action is to:', ['R4'], [
      O('a', 'Document only what the assessment supports and clarify what your role can and cannot appropriately attest to', 3,
        { r: 'Document only what is supported; clarify role', approach: 'Limit statements to your competence and role', why: 'The counselor documents only what the assessment supports and avoids causal or forensic claims beyond the role', keys: ['requests a definitive causal statement', 'insurance/legal claim'], mistake: 'Issuing an unsupported causal or forensic conclusion' }),
      O('b', 'Write exactly the causal statement she requests, since keeping the client satisfied is what matters most here', -2,
        { r: 'An unsupported causal claim is inappropriate', approach: 'Please-the-client framing', why: 'Attesting to a definitive cause beyond the assessment exceeds the role and competence', keys: ['accurate documentation'], mistake: 'Overstating a causal conclusion' }),
      O('c', 'Take her side in the dispute with her employer and advocate for her claim in any report that is requested', -2,
        { r: 'Advocacy compromises objectivity', approach: 'Advocacy framing', why: 'Aligning with one side of a claim compromises objectivity and the treating role', keys: ['role boundaries'], mistake: 'Becoming an advocate in a claim' }),
      O('d', 'Refuse to provide any documentation at all and decline to explain what could appropriately be documented for her', -1,
        { r: 'Flat refusal forecloses helpful options', approach: 'Stonewall framing', why: 'Accurate, role-appropriate documentation can be provided rather than refused outright', keys: ['appropriate documentation'], mistake: 'Declining without clarifying the appropriate options' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in functional neurological disorders. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and coordinate or refer for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; FND care may need consultation, training, or referral within a team', keys: ['limited FND training', 'multidisciplinary case'], mistake: 'Managing a complex FND case alone without competence' }),
      O('b', 'Continue managing the entire case alone to preserve the continuity of the relationship built with her', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell her the symptoms are not serious enough to need a coordinated team and continue with general talks only', -2,
        { r: 'Minimizing the disorder fails the client', approach: 'Downplay framing', why: 'FND warrants competent, coordinated, multidisciplinary care', keys: ['multidisciplinary need'], mistake: 'Underestimating the need for coordinated care' }),
      O('d', 'Transfer her at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D173 — Intermittent Explosive Disorder (F63.81) — Disruptive — hard
// ============================================================================
const D173 = {
  id: 'ncmhce-D173',
  title: 'Recurrent impulsive aggressive outbursts out of proportion',
  category: 'Disruptive',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Intermittent Explosive Disorder', code: 'F63.81' },
  diagnosis: { name: 'Intermittent Explosive Disorder', code: 'F63.81' },
  differentialOptions: [
    { id: 'do1', name: 'Intermittent Explosive Disorder', isCorrect: true },
    { id: 'do2', name: 'Antisocial Personality Disorder', isCorrect: false },
    { id: 'do3', name: 'Bipolar I Disorder', isCorrect: false },
    { id: 'do4', name: 'Oppositional Defiant Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Marcus Bell, a 28-year-old warehouse worker, is referred after a road-rage incident. He describes recurrent, impulsive verbal and physical ' +
      'outbursts that are grossly out of proportion to the provocation, followed by genuine remorse and embarrassment once the anger passes.',
    session1:
      'The outbursts are impulsive and anger-based rather than premeditated for gain, and they occur between periods of relatively normal mood. ' +
      'They are not confined to a manic episode, and there is no pervasive pattern of deceit or exploitation of others beyond the aggression itself.',
    session2:
      'The outbursts have cost him relationships and a prior job, and he feels ashamed and worried he will "hurt someone." He denies premeditation ' +
      'and wants to learn to control the anger, and at a low point he thought he would be better off gone, without current plan or intent.',
  },
  diagnosticRationale:
    'Recurrent behavioral outbursts representing a failure to control aggressive impulses, grossly out of proportion to provocation, not ' +
    'premeditated and not committed for a tangible objective, causing distress or impairment, meets DSM-5-TR criteria for intermittent explosive ' +
    'disorder, distinct from antisocial personality disorder, aggression confined to bipolar mania, and oppositional defiant disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Intermittent explosive disorder: recurrent impulsive aggressive outbursts out of proportion, not premeditated or for gain' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Anger and aggression: cognitive behavioral anger management and coordinated care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening and assessment of risk to others' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'B.2. and C.2.: duty to protect, danger exceptions, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance and collaborative goal setting in anger-focused work' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an intermittent explosive disorder diagnosis?', ['R1'], [
      O('a', 'Recurrent impulsive aggressive outbursts grossly out of proportion to provocation and not premeditated for gain', 3,
        { r: 'Recurrent impulsive outbursts out of proportion', approach: 'Confirm the core criteria', why: 'IED requires recurrent, impulsive aggressive outbursts out of proportion to provocation and not premeditated for gain', keys: ['outbursts out of proportion', 'remorse afterward'], mistake: 'Diagnosing without confirming the impulsive, disproportionate, non-premeditated pattern' }),
      O('b', 'That he can pinpoint the one specific event he is convinced first caused all of his current problems with anger', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his outbursts have grown a little more frequent over the past few days than they were the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The recurrent pattern, not a recent uptick, is required', keys: ['recurrent pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete manic episode at this point in time', 0,
        { r: 'Manic count does not define it', approach: 'Mania-criteria framing', why: 'IED is an impulse-control disorder, not a manic episode', keys: ['impulse-control diagnosis'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from antisocial personality disorder?', ['R1'], [
      O('a', 'His aggression is impulsive with genuine remorse, not part of a pervasive pattern of exploiting or deceiving others', 3,
        { r: 'Impulsive with remorse, not pervasive exploitation', approach: 'Contrast motive and pervasiveness', why: 'Antisocial PD involves pervasive exploitation without remorse; his aggression is impulsive with genuine remorse', keys: ['genuine remorse afterward', 'no pervasive deceit or exploitation'], mistake: 'Misreading remorseful impulsive aggression as antisocial personality' }),
      O('b', 'The fact that he sometimes becomes aggressive and gets into conflict with the people around him when provoked', -1,
        { r: 'Aggression occurs in both', approach: 'Aggression framing', why: 'Aggression occurs in both; the motive and pervasiveness differ', keys: ['shared feature'], mistake: 'Using aggression to differentiate' }),
      O('c', 'The trouble he has controlling his temper during the moments when he feels that he has been wronged', -1,
        { r: 'Poor temper control is nonspecific', approach: 'Temper framing', why: 'Difficulty with temper appears in both; the pattern differs', keys: ['shared difficulty'], mistake: 'Reading temper control as decisive' }),
      O('d', 'The way his outbursts tend to be a little worse during the busiest and most stressful weeks at his job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from bipolar I disorder?', ['R1'], [
      O('a', 'His outbursts occur between periods of normal mood, not only during distinct manic episodes with other manic symptoms', 3,
        { r: 'Outbursts outside of manic episodes', approach: 'Contrast where the aggression occurs', why: 'In bipolar I, aggression is tied to manic episodes; his outbursts occur between periods of normal mood', keys: ['outbursts between normal-mood periods', 'not confined to mania'], mistake: 'Attributing standalone impulsive outbursts to bipolar mania' }),
      O('b', 'The fact that he has episodes in which his behavior becomes difficult for him and others to manage', -1,
        { r: 'Difficult episodes occur in both', approach: 'Episode framing', why: 'Difficult behavioral episodes occur in both; the mood context differs', keys: ['shared feature'], mistake: 'Using difficult episodes to differentiate' }),
      O('c', 'The irritability and the anger that he shows during the times when his behavior is at its most difficult', -1,
        { r: 'Irritability is nonspecific', approach: 'Irritability framing', why: 'Irritability appears in both; the mood context differs', keys: ['shared affect'], mistake: 'Reading irritability as decisive' }),
      O('d', 'The way his sleep tends to be more broken on the nights right before a demanding shift at the warehouse', 0,
        { r: 'Situational sleep change is nonspecific', approach: 'Sleep framing', why: 'Situational poor sleep does not point to mania', keys: ['nonspecific factor'], mistake: 'Over-reading situational sleep loss as mania' }),
    ]),
    Q('q4', 'core', 'What is most important to assess about the aggression itself?', ['R3'], [
      O('a', 'The frequency, severity, triggers, and any risk to others, since safety and target patterns shape the plan', 3,
        { r: 'Assess severity, triggers, and risk to others', approach: 'Assess the aggression and its risk', why: 'IED assessment maps frequency, severity, triggers, and risk to others to plan safe, effective treatment', keys: ['road-rage incident', 'worried he will hurt someone'], mistake: 'Assessing the anger without assessing severity, triggers, and risk to others' }),
      O('b', 'A detailed family pedigree going back several generations to find relatives who also had a quick temper', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not establish the aggression pattern or risk', keys: ['plan-relevant data'], mistake: 'Gathering data that does not inform treatment' }),
      O('c', 'Whether his anger can be traced to one specific childhood memory that fully explains all of his outbursts now', -1,
        { r: 'A single memory is not the target', approach: 'Origin-hunting framing', why: 'Treatment targets current triggers and control, not a single origin', keys: ['present triggers'], mistake: 'Hunting for an origin instead of the pattern and risk' }),
      O('d', 'His general hobbies and preferences so that the sessions can be arranged around the activities he most enjoys', 0,
        { r: 'Preferences are secondary', approach: 'Preference framing', why: 'Useful for rapport but not what the plan hinges on', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over the assessment' }),
    ]),
    Q('q5', 'intake', 'Given his thought that he would be better off gone, what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment and also assess any risk to others, addressing both now', 3,
        { r: 'Assess risk to self and others now', approach: 'Screen risk in both directions', why: 'IED involves aggression, and his remark warrants assessing risk to self and to others now', keys: ['better off gone', 'worried he will hurt someone'], mistake: 'Assessing only one channel of risk or deferring assessment' }),
      O('b', 'Assume the risk has passed because he denies a current plan and expresses remorse after his outbursts', -2,
        { r: 'Assuming risk passed is unsafe', approach: 'Dismissal framing', why: 'Passive ideation and aggression still require structured current assessment', keys: ['ongoing risk factors'], mistake: 'Dismissing risk on reassurance' }),
      O('c', 'Defer any risk assessment until his anger is under control and he has been stable for several months at least', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after the anger settles', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on anger-management techniques for now and return to any safety questions at a much later date', -1,
        { r: 'Sequencing safety behind techniques is unsafe', approach: 'Single-issue framing', why: 'Anger techniques do not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Marcus?', ['R2'], [
      O('a', 'Cognitive behavioral anger management targeting triggers, arousal, and impulse control, with skills practice', 3,
        { r: 'CBT-based anger management', approach: 'Apply the guideline', why: 'CBT-based anger management targeting triggers, arousal, and impulse control is first-line for IED', keys: ['impulsive outbursts', 'wants to control the anger'], mistake: 'Offering vague support without structured anger-management skills' }),
      O('b', 'Telling him to simply use more willpower and stop the outbursts on his own since it is just about self-control', -2,
        { r: 'Willpower-only advice ignores the disorder', approach: 'Willpower framing', why: 'Framing IED as mere willpower disregards the evidence and the impulse-control difficulty', keys: ['impulse-control difficulty'], mistake: 'Reducing the disorder to willpower' }),
      O('c', 'Encouraging him to vent his anger as forcefully as possible so that the built-up tension is fully released each time', -2,
        { r: 'Catharsis venting worsens aggression', approach: 'Venting framing', why: 'Encouraging forceful venting tends to reinforce, not reduce, aggression', keys: ['arousal regulation'], mistake: 'Recommending catharsis that worsens the pattern' }),
      O('d', 'Starting him on a medication that you will select and adjust to control the outbursts over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'What core skills should the anger-management work emphasize?', ['R2'], [
      O('a', 'Early-warning cue recognition, arousal reduction, and impulse-delay strategies practiced before real triggers', 3,
        { r: 'Cue recognition, arousal reduction, impulse delay', approach: 'Teach the core anger-control skills', why: 'Recognizing early cues, reducing arousal, and delaying impulses are the core skills for IED', keys: ['impulsive outbursts', 'genuine remorse after'], mistake: 'Skipping the concrete impulse-control skills that treatment depends on' }),
      O('b', 'Encouraging him to avoid every situation that could ever possibly provoke him for the rest of his life', -1,
        { r: 'Total avoidance is not the treatment', approach: 'Avoidance framing', why: 'Blanket avoidance is impractical and does not build impulse control', keys: ['skill-building'], mistake: 'Substituting avoidance for skills' }),
      O('c', 'Practicing forceful expression of his anger in session so that he becomes more comfortable letting it all out', -2,
        { r: 'Rehearsing venting worsens aggression', approach: 'Venting-rehearsal framing', why: 'Rehearsing forceful venting reinforces the aggressive pattern', keys: ['arousal regulation'], mistake: 'Reinforcing the behavior the treatment targets' }),
      O('d', 'Focusing only on discussing the causes of his anger without ever practicing any concrete coping skills at all', -1,
        { r: 'Insight without skills is insufficient', approach: 'Insight-only framing', why: 'Concrete skills, not discussion alone, drive change in IED', keys: ['skills practice'], mistake: 'Talking about anger without building skills' }),
    ]),
    Q('q8', 'treatment', 'How should progress and safety be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track outburst frequency and severity, triggers, skill use, and risk over time to guide the plan', 3,
        { r: 'Measurement-based tracking of outbursts and risk', approach: 'Monitor outcomes and safety', why: 'Tracking outburst frequency, severity, skill use, and risk steers the plan and catches escalation', keys: ['risk to others', 'impulsive outbursts'], mistake: 'Proceeding without tracking the outbursts and risk' }),
      O('b', 'Rely only on whether he happens to say in session that he feels a little calmer than he did before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the single most severe outburst and base every decision solely on that one incident alone', -1,
        { r: 'A single incident is too narrow', approach: 'Single-incident framing', why: 'Frequency, triggers, skill use, and risk all inform the plan, not one incident', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one incident' }),
      O('d', 'Wait until the end of treatment to review whether his outbursts have changed at all since the first session', -1,
        { r: 'End-only review misses risk shifts', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to catch changes in risk', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor handle any medication question he raises?', ['R4'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation while continuing the anger-management work within scope', 3,
        { r: 'Refer for prescribing, keep doing therapy', approach: 'Coordinate within scope', why: 'Medication questions are referred to a prescriber while the counselor continues anger-management work', keys: ['asks about medication', 'scope limits'], mistake: 'Advising on specific medication outside scope' }),
      O('b', 'Recommend a specific medication and dose for him to begin taking before his next stressful shift at work', -2,
        { r: 'Recommending a drug and dose exceeds scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not recommend specific drugs or doses', keys: ['no prescriptive authority'], mistake: 'Making a prescribing recommendation' }),
      O('c', 'Tell him that medication never helps with anger and that he should refuse it if it is ever offered to him', -1,
        { r: 'Blanket refusal advice overreaches', approach: 'Anti-medication framing', why: 'The prescriber and client weigh medication; the counselor does not forbid it', keys: ['shared decision'], mistake: 'Directing a medical decision' }),
      O('d', 'Ignore the medication question and simply redirect him back to the anger skills every time he raises it', -1,
        { r: 'Dismissing the question is unhelpful', approach: 'Avoidant framing', why: 'A referral, not avoidance, is the appropriate response', keys: ['coordinated care'], mistake: 'Failing to address a legitimate question' }),
    ]),
    Q('q10', 'counseling', 'Marcus becomes angry in session when the counselor gently challenges him. The most therapeutic response is to:', ['R5'], [
      O('a', 'Stay calm, model regulation, and use the moment to practice recognizing and de-escalating his rising anger', 3,
        { r: 'Model regulation and practice de-escalation', approach: 'Use the moment to build skills', why: 'A calm, regulated response that turns the moment into de-escalation practice models and teaches control', keys: ['angry when challenged', 'wants to control it'], mistake: 'Reacting with alarm or escalating the confrontation' }),
      O('b', 'Match his anger and confront him forcefully so that he learns he cannot intimidate you in the session', -2,
        { r: 'Matching anger escalates the conflict', approach: 'Confront framing', why: 'Escalating in kind reinforces aggression and ruptures the alliance', keys: ['de-escalation'], mistake: 'Escalating rather than de-escalating' }),
      O('c', 'End the session immediately and ask him to leave rather than working with the rising anger in the room', -1,
        { r: 'Ending abruptly misses a teaching moment', approach: 'Escape framing', why: 'The moment can be used to practice de-escalation rather than avoided', keys: ['in-room practice'], mistake: 'Avoiding a valuable clinical moment' }),
      O('d', 'Back down entirely and avoid ever challenging him again so that he never becomes upset during a session', -1,
        { r: 'Total avoidance undermines the work', approach: 'Avoidant framing', why: 'The work involves engaging his anger skillfully, not avoiding all challenge', keys: ['engage the anger'], mistake: 'Avoiding necessary therapeutic work' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best strengthen Marcus’s engagement and motivation?', ['R5'], [
      O('a', 'Anchor the work in his own goals, such as saving relationships and his job, and reinforce his remorse and effort', 3,
        { r: 'Anchor in his goals, reinforce effort', approach: 'Build motivation from his values', why: 'Linking the work to his own goals and reinforcing his remorse and effort builds motivation', keys: ['outbursts cost relationships and a job', 'genuine remorse'], mistake: 'Shaming him for the outbursts, which undermines engagement' }),
      O('b', 'Warn him that he is beyond help and that he will inevitably end up in serious legal trouble no matter what', -2,
        { r: 'Hopeless framing undermines engagement', approach: 'Hopelessness framing', why: 'A hopeless message erodes motivation and the alliance', keys: ['instill hope'], mistake: 'Communicating hopelessness to the client' }),
      O('c', 'Focus the sessions mainly on reviewing each of his past outbursts in exhaustive detail every single week', -1,
        { r: 'Cataloguing outbursts is not skill-building', approach: 'Catalogue framing', why: 'Rehashing outbursts does not build the skills or motivation he needs', keys: ['skill focus'], mistake: 'Centering sessions on enumerating outbursts' }),
      O('d', 'Tell him counseling cannot help him at all unless he first agrees to take medication exactly as a prescriber directs', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Anger-management work can proceed alongside any coordinated medication decision', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Marcus makes a specific, credible threat to seriously harm an identifiable coworker. The most appropriate action is to:', ['R4'], [
      O('a', 'Assess the risk and follow duty-to-protect obligations, which may require warning or other protective steps', 3,
        { r: 'Assess and act on duty to protect', approach: 'Apply duty-to-protect', why: 'A serious, specific, identifiable threat triggers assessment and protective duties', keys: ['specific threat', 'identifiable coworker'], mistake: 'Treating an identifiable threat as fully confidential' }),
      O('b', 'Keep the threat entirely confidential, since everything shared in counseling must always stay completely private', -2,
        { r: 'Confidentiality yields to a serious threat', approach: 'Absolutist framing', why: 'A serious, identifiable threat can require disclosure', keys: ['identifiable target'], mistake: 'Treating confidentiality as absolute when there is danger' }),
      O('c', 'Wait to see whether he repeats the threat at the next session before assessing the risk or taking any action', -2,
        { r: 'Delaying assessment is unsafe', approach: 'Wait-and-see framing', why: 'An identifiable threat requires prompt assessment', keys: ['active threat'], mistake: 'Postponing an urgent risk assessment' }),
      O('d', 'Notify the coworker and the police at once without first assessing the seriousness or following the proper protective process', -1,
        { r: 'Act on assessed risk, not reflexively', approach: 'Reflexive-disclosure framing', why: 'Protective steps follow a careful risk assessment', keys: ['proportionate response'], mistake: 'Disclosing before assessing the risk' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in aggression and violence risk. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; aggression and violence-risk work may need consultation, training, or referral', keys: ['limited violence-risk training', 'risk to others'], mistake: 'Managing significant violence risk alone without competence' }),
      O('b', 'Continue managing the entire case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell him his outbursts are not serious enough to need specialized help and continue with general talks only', -2,
        { r: 'Minimizing the risk fails the client and others', approach: 'Downplay framing', why: 'Recurrent aggression with risk to others warrants competent, specialized care', keys: ['risk to others'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer him at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D174 — Major Neurocognitive Disorder due to Vascular Disease (F01.50) — Neurocognitive — hard
// ============================================================================
const D174 = {
  id: 'ncmhce-D174',
  title: 'Stepwise cognitive decline after strokes with safety concerns',
  category: 'Neurocognitive',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Major Neurocognitive Disorder due to Vascular Disease', code: 'F01.50' },
  diagnosis: { name: 'Major Neurocognitive Disorder due to Vascular Disease', code: 'F01.50' },
  differentialOptions: [
    { id: 'do1', name: 'Major Neurocognitive Disorder due to Vascular Disease', isCorrect: true },
    { id: 'do2', name: "Major Neurocognitive Disorder due to Alzheimer's Disease", isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do4', name: 'Delirium', isCorrect: false },
  ],
  narrative: {
    intake:
      'Walter Nkemelu, a 72-year-old retired driver, is brought by his daughter for cognitive decline. Over two years his memory, planning, and ' +
      'processing speed have worsened in a stepwise pattern following two documented strokes, with clear declines after each vascular event.',
    session1:
      'His decline is significant enough to interfere with independence and is linked temporally to the cerebrovascular events, with prominent ' +
      'slowing and executive difficulty. His attention is stable rather than acutely fluctuating, which argues against a superimposed delirium.',
    session2:
      'His daughter is overwhelmed by caregiving and worried about his safety at home, including his medication and whether he can still drive. He ' +
      'has good and bad days, is frustrated by his losses, and at a low moment said he feels like a burden, without current plan or intent.',
  },
  diagnosticRationale:
    'Significant cognitive decline from a prior level in one or more domains that interferes with independence, temporally related to ' +
    'cerebrovascular events with a stepwise course and prominent processing-speed and executive deficits, meets DSM-5-TR criteria for major ' +
    'vascular neurocognitive disorder, distinct from Alzheimer’s-type decline, depression, and an acute, fluctuating delirium.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Major vascular NCD: significant decline interfering with independence, linked to cerebrovascular disease, often stepwise' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Dementia: caregiver support, safety planning, and coordinated medical and psychosocial care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when depressive symptoms and hopelessness co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: client welfare, safety, decision-making capacity, and competence' },
    { id: 'R5', source: 'Hays (Assessment)', detail: 'Coordinating cognitive and medical evaluation and interpreting the course of decline' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a vascular neurocognitive disorder diagnosis?', ['R1'], [
      O('a', 'Significant cognitive decline interfering with independence, temporally linked to cerebrovascular events', 3,
        { r: 'Significant decline linked to cerebrovascular events', approach: 'Confirm the core criteria', why: 'Major vascular NCD requires significant decline interfering with independence, temporally linked to cerebrovascular disease', keys: ['stepwise decline after two strokes', 'interferes with independence'], mistake: 'Diagnosing without confirming the decline and its temporal link to the vascular events' }),
      O('b', 'That his daughter can pinpoint the single event she is convinced first caused all of his cognitive difficulties', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'The vascular course, not a single subjective trigger, defines it', keys: ['criteria-based diagnosis'], mistake: 'Using a subjective trigger as the diagnostic test' }),
      O('c', 'That his memory has slipped a little further over the past few days than it had the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The longitudinal, stepwise course, not a recent dip, defines it', keys: ['stepwise course'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete manic episode at this point in time', 0,
        { r: 'Manic count does not define it', approach: 'Mania-criteria framing', why: 'Vascular NCD is defined by cognitive decline, not manic criteria', keys: ['cognitive-decline diagnosis'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from Alzheimer’s-type neurocognitive disorder?', ['R1'], [
      O('a', 'His decline is stepwise and tied to documented strokes, not the gradual, insidious progression typical of Alzheimer’s', 3,
        { r: 'Stepwise, stroke-linked versus gradual', approach: 'Contrast the course of decline', why: 'Alzheimer’s decline is gradual and insidious; his is stepwise and temporally linked to strokes', keys: ['stepwise decline', 'declines after each stroke'], mistake: 'Overlooking the stepwise, vascular course that distinguishes the two' }),
      O('b', 'The fact that he has shown a clear decline in his memory and thinking over the past couple of years', -1,
        { r: 'Cognitive decline occurs in both', approach: 'Decline framing', why: 'Cognitive decline occurs in both; the course and cause differ', keys: ['shared feature'], mistake: 'Using decline to differentiate' }),
      O('c', 'The frustration and the distress that he feels about the losses in his memory and his abilities', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress can occur in both; the course differs', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way his thinking seems a little sharper on the days when he has slept well the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Better thinking after good sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from major depressive disorder?', ['R1'], [
      O('a', 'His deficits reflect genuine, stroke-linked cognitive decline, not cognitive slowing that lifts when mood improves', 3,
        { r: 'Genuine decline versus mood-driven slowing', approach: 'Contrast organic decline with depressive slowing', why: 'Depression can slow cognition reversibly; his deficits are genuine, stroke-linked decline', keys: ['stepwise decline after strokes', 'interferes with independence'], mistake: 'Attributing a stroke-linked decline entirely to depression' }),
      O('b', 'The fact that he has been feeling low and discouraged about the losses he has experienced over recent months', -1,
        { r: 'Low mood is nonspecific', approach: 'Mood framing', why: 'Low mood can accompany both; the organic decline differs', keys: ['shared feature'], mistake: 'Using low mood to differentiate' }),
      O('c', 'The trouble he has with his memory and concentration that he notices during his day-to-day life', -1,
        { r: 'Cognitive complaints occur in both', approach: 'Cognition framing', why: 'Cognitive complaints occur in both; the underlying cause differs', keys: ['shared complaint'], mistake: 'Reading cognitive complaints as decisive' }),
      O('d', 'The way his mood tends to dip a little more in the evenings than it does earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from delirium?', ['R1'], [
      O('a', 'His attention is stable rather than acutely fluctuating, unlike the disturbed, waxing-and-waning attention of delirium', 3,
        { r: 'Stable attention versus acute fluctuation', approach: 'Contrast the attention pattern and course', why: 'Delirium involves acutely disturbed, fluctuating attention; his attention is stable over a chronic course', keys: ['attention stable, not acutely fluctuating', 'chronic course'], mistake: 'Missing that a stable, chronic course argues against delirium' }),
      O('b', 'The fact that he has clear difficulty with his memory and his thinking that others around him have noticed', -1,
        { r: 'Cognitive impairment occurs in both', approach: 'Impairment framing', why: 'Cognitive impairment occurs in both; the attention pattern and course differ', keys: ['shared feature'], mistake: 'Using cognitive impairment to differentiate' }),
      O('c', 'The good days and bad days that he experiences with his thinking and his functioning over time', -1,
        { r: 'Day-to-day variation is nonspecific', approach: 'Variation framing', why: 'Some day-to-day variation occurs in both; the acute fluctuation of delirium differs', keys: ['shared variation'], mistake: 'Reading ordinary variation as delirium' }),
      O('d', 'The way his thinking seems a little slower on the days when he is more tired than he is on his more rested days', 0,
        { r: 'Fatigue effects are nonspecific', approach: 'Fatigue framing', why: 'Slower thinking when tired does not indicate delirium', keys: ['nonspecific factor'], mistake: 'Over-reading a fatigue effect' }),
    ]),
    Q('q5', 'intake', 'What is most important to address given his daughter’s safety concerns?', ['R4'], [
      O('a', 'Home safety, medication management, and driving, coordinating capacity evaluation and appropriate supports', 3,
        { r: 'Address safety, medication, and driving', approach: 'Assess safety and coordinate capacity', why: 'Cognitive decline raises safety, medication, and driving concerns that require coordinated evaluation and supports', keys: ['safety at home', 'medication and driving concerns'], mistake: 'Focusing on the cognitive complaints while ignoring the real safety and capacity concerns' }),
      O('b', 'A previously undetected primary psychotic disorder that might better account for his cognitive difficulties', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of his memory and thinking problems', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'A specific phobia that might explain why he is reluctant to drive as often as he used to before', 0,
        { r: 'Phobia is not the issue here', approach: 'Phobia framing', why: 'His driving concern reflects cognitive decline and safety, not a phobia', keys: ['safety-focused'], mistake: 'Misattributing a safety issue to a phobia' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate counselor role in his care?', ['R2'], [
      O('a', 'Provide caregiver support and safety planning while coordinating medical and cognitive care within a team', 3,
        { r: 'Caregiver support, safety planning, coordination', approach: 'Define the counselor role', why: 'The counselor supports the caregiver, helps with safety planning, and coordinates medical and cognitive care', keys: ['overwhelmed daughter', 'safety concerns'], mistake: 'Attempting to treat or reverse the cognitive decline yourself instead of coordinating and supporting' }),
      O('b', 'Telling the family the decline can be fully reversed with counseling alone if he simply works hard enough at it', -2,
        { r: 'Promising reversal is false and harmful', approach: 'False-hope framing', why: 'Vascular NCD is not reversed by counseling; promising this is inaccurate and harmful', keys: ['coordinated care'], mistake: 'Offering false hope of reversal' }),
      O('c', 'Focusing only on cognitive drills with him and leaving his safety, caregiver, and medical needs out of the plan', -1,
        { r: 'Drills-only misses the core needs', approach: 'Narrow-focus framing', why: 'Caregiver support, safety, and coordination are central, not cognitive drills alone', keys: ['comprehensive plan'], mistake: 'Narrowing to drills and missing the main needs' }),
      O('d', 'Starting him on a medication that you will select and adjust to slow the decline over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor support his overwhelmed daughter?', ['R2'], [
      O('a', 'Provide caregiver psychoeducation, support, and respite resources while coordinating the broader care plan', 3,
        { r: 'Caregiver support and respite resources', approach: 'Support the caregiver', why: 'Caregiver psychoeducation, support, and respite resources are central to dementia care and sustain the caregiver', keys: ['overwhelmed by caregiving', 'worried about safety'], mistake: 'Focusing only on the client while leaving the burdened caregiver unsupported' }),
      O('b', 'Tell the daughter that caregiving is simply her duty and that she should not need any outside help or support', -2,
        { r: 'Dismissing caregiver needs is harmful', approach: 'Duty-only framing', why: 'Dismissing caregiver strain risks burnout and harms both her and the client', keys: ['caregiver support'], mistake: 'Ignoring caregiver strain' }),
      O('c', 'Advise the daughter to place him in a facility immediately regardless of his needs, wishes, or the options available', -1,
        { r: 'A reflexive placement decision is premature', approach: 'Reflexive-placement framing', why: 'Placement decisions follow careful assessment of needs, wishes, and options', keys: ['stratified decision'], mistake: 'Recommending placement reflexively' }),
      O('d', 'Focus only on the client and decline to involve or support the daughter in the plan in any way at all', -1,
        { r: 'Excluding the caregiver misses a key support', approach: 'Exclusion framing', why: 'The caregiver is central to the plan and to the client’s safety', keys: ['caregiver-inclusive'], mistake: 'Leaving the caregiver out of the plan' }),
    ]),
    Q('q8', 'treatment', 'How should the driving-safety concern be handled?', ['R4'], [
      O('a', 'Coordinate a formal driving-capacity evaluation and follow the applicable safety and reporting requirements', 3,
        { r: 'Coordinate a capacity evaluation and follow requirements', approach: 'Address safety through proper channels', why: 'Driving safety with cognitive decline is handled through a formal capacity evaluation and applicable requirements', keys: ['whether he can still drive', 'safety concern'], mistake: 'Either ignoring the driving risk or unilaterally revoking his driving without evaluation' }),
      O('b', 'Tell him he can keep driving as he always has, since he still has some good days with his thinking and memory', -2,
        { r: 'Ignoring the risk is unsafe', approach: 'Minimize framing', why: 'Cognitive decline with safety concerns requires evaluation, not reassurance to keep driving', keys: ['safety evaluation'], mistake: 'Dismissing a genuine safety risk' }),
      O('c', 'Personally forbid him from ever driving again on the spot without any evaluation or appropriate process at all', -1,
        { r: 'Unilateral revocation skips due process', approach: 'Unilateral framing', why: 'Driving decisions follow a formal evaluation and applicable process, not a unilateral counselor decree', keys: ['proper channels'], mistake: 'Acting unilaterally without evaluation' }),
      O('d', 'Leave the driving question entirely to the family and treat it as having nothing to do with the counseling at all', -1,
        { r: 'Ignoring the issue neglects safety', approach: 'Hands-off framing', why: 'The safety concern is addressed through coordination, not simply deferred', keys: ['coordinated safety'], mistake: 'Neglecting a safety issue within the plan' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate care given his decision-making capacity concerns?', ['R4'], [
      O('a', 'With appropriate consent, coordinate capacity evaluation and involve a surrogate or supports as legally appropriate', 3,
        { r: 'Coordinate capacity evaluation and surrogate as appropriate', approach: 'Address capacity within consent and law', why: 'Diminished capacity requires coordinated evaluation and legally appropriate surrogate involvement with proper consent', keys: ['medication and safety decisions', 'cognitive decline'], mistake: 'Ignoring capacity or overriding it without the appropriate process' }),
      O('b', 'Assume he has no capacity for any decision at all and simply defer every choice entirely to his daughter', -1,
        { r: 'Assuming global incapacity is inappropriate', approach: 'Global-incapacity framing', why: 'Capacity is decision-specific and assessed, not globally assumed', keys: ['decision-specific capacity'], mistake: 'Presuming complete incapacity' }),
      O('c', 'Share his full clinical record with anyone in the family who asks, since they are clearly entitled to it anyway', -2,
        { r: 'Disclosing without consideration over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure follows consent and minimum-necessary limits even with family', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate' }),
      O('d', 'Avoid the topic of capacity entirely so that his care can proceed without ever addressing the legal questions', -1,
        { r: 'Avoiding capacity neglects a key issue', approach: 'Avoidant framing', why: 'Capacity and surrogate questions are central to safe care and must be addressed', keys: ['address capacity'], mistake: 'Sidestepping a critical legal-clinical issue' }),
    ]),
    Q('q10', 'counseling', 'Walter becomes tearful and says he feels like a burden to his daughter. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with empathy, monitor safety, and validate his worth and feelings while supporting his dignity', 3,
        { r: 'Empathize, monitor safety, support dignity', approach: 'Meet the distress and protect dignity', why: 'Empathizing, monitoring safety, and affirming his worth supports a distressed client with decline', keys: ['feels like a burden', 'frustrated by his losses'], mistake: 'Either minimizing the feeling or failing to monitor his safety' }),
      O('b', 'Agree that he probably is a significant burden now so that he can begin to accept his new situation realistically', -2,
        { r: 'Endorsing the burden belief is harmful', approach: 'Catastrophize framing', why: 'Confirming he is a burden deepens hopelessness and risk', keys: ['support dignity'], mistake: 'Validating a harmful self-belief' }),
      O('c', 'Tell him he simply should not feel that way and that there is no reason at all for him to be upset about it', -1,
        { r: 'Dismissing the feeling invalidates him', approach: 'Minimize framing', why: 'Telling him not to feel that way dismisses a valid emotion', keys: ['validate then support'], mistake: 'Minimizing a central feeling' }),
      O('d', 'Change the subject to something lighter so that he does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'His feelings can be engaged and his safety monitored, not avoided', keys: ['engage and monitor'], mistake: 'Sidestepping a critical moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Walter given his fluctuating abilities?', ['R5'], [
      O('a', 'Adapt communication to his current abilities, preserve his autonomy where possible, and support his strengths', 3,
        { r: 'Adapt to abilities, preserve autonomy and strengths', approach: 'Person-centered, strengths-based support', why: 'Adapting communication and preserving autonomy and strengths supports dignity with a fluctuating course', keys: ['good and bad days', 'frustrated by losses'], mistake: 'Talking past him or removing autonomy he still has' }),
      O('b', 'Speak only to his daughter and about him as though he were not present or able to participate at all', -2,
        { r: 'Talking past him undermines dignity', approach: 'Exclusion framing', why: 'Ignoring him in the room undermines his dignity and autonomy', keys: ['include the client'], mistake: 'Excluding the client from his own care' }),
      O('c', 'Focus the sessions mainly on repeatedly testing his memory in detail every single week to track the decline', -1,
        { r: 'Repeated testing is not the counseling role', approach: 'Testing-focus framing', why: 'Repeated memory testing is not the supportive counseling role and can distress him', keys: ['support focus'], mistake: 'Turning sessions into repeated testing' }),
      O('d', 'Tell him there is little point in counseling given his decline and focus only on planning for the end of his care', -1,
        { r: 'Writing off the work is inappropriate', approach: 'Nihilism framing', why: 'Supportive, person-centered work has real value despite the decline', keys: ['meaningful support'], mistake: 'Dismissing the value of the counseling' }),
    ]),
    Q('q12', 'ethics', 'His daughter asks the counselor to make all of Walter’s decisions for him now. The most appropriate action is to:', ['R4'], [
      O('a', 'Support a proper capacity evaluation and involve him in decisions to the extent he is able, using surrogates as legally appropriate', 3,
        { r: 'Assess capacity; include him as able; use surrogates lawfully', approach: 'Respect autonomy within capacity and law', why: 'Capacity is decision-specific; he is included as able, with lawful surrogate involvement where needed', keys: ['request to take over all decisions', 'fluctuating capacity'], mistake: 'Stripping his autonomy wholesale rather than assessing decision-specific capacity' }),
      O('b', 'Agree to have the daughter make every decision for him immediately, regardless of what he can still decide himself', -2,
        { r: 'Removing all autonomy is inappropriate', approach: 'Global-surrogate framing', why: 'Handing all decisions to a surrogate without capacity assessment violates his autonomy', keys: ['decision-specific capacity'], mistake: 'Removing autonomy without proper assessment' }),
      O('c', 'Insist he continue to make every decision entirely on his own regardless of any genuine safety or capacity concerns', -1,
        { r: 'Ignoring real capacity concerns is unsafe', approach: 'Absolute-autonomy framing', why: 'Genuine capacity and safety concerns are assessed, not ignored', keys: ['assess capacity'], mistake: 'Disregarding real capacity and safety concerns' }),
      O('d', 'Refuse to engage with the capacity question at all and decline to help the family navigate it in any way', -1,
        { r: 'Avoiding the issue is unhelpful', approach: 'Avoidant framing', why: 'The counselor helps coordinate a proper capacity process rather than refusing to engage', keys: ['coordinate the process'], mistake: 'Declining to help with a central issue' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in neurocognitive disorders and capacity issues. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and coordinate medical, cognitive, and legal evaluation, referring for components beyond your competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; NCD and capacity issues are managed with coordinated evaluation and referral', keys: ['limited NCD training', 'capacity and safety issues'], mistake: 'Managing complex NCD and capacity questions alone without competence' }),
      O('b', 'Continue managing the entire case alone to preserve the continuity of the relationship built with the family', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell the family his decline is not serious enough to need medical or legal input and continue with general talks only', -2,
        { r: 'Minimizing the problem fails the client', approach: 'Downplay framing', why: 'Vascular NCD with safety and capacity concerns warrants competent, coordinated care', keys: ['safety and capacity'], mistake: 'Underestimating the need for coordinated care' }),
      O('d', 'Transfer the family at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the family without coordination' }),
    ]),
  ],
};

module.exports = { CASES: [D170, D171, D172, D173, D174] };
