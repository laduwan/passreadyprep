// ============================================================================
// deep-cases-batch-03.js — NCMHCE deep cases, batch 03 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis is GIVEN; items test clinical decision-making across the three
// derived sections (Assessment -> Planning -> Process). Diagnoses fill the
// largest remaining blueprint gaps WITHOUT overlapping batch-01 (D102-D104) or
// batch-02 (D105-D109):
//   ncmhce-D110  Persistent Depressive Disorder (Depressive)
//   ncmhce-D111  Social Anxiety Disorder (Anxiety)
//   ncmhce-D112  Bipolar I Disorder, Current Episode Manic (Bipolar)
//   ncmhce-D113  Schizophrenia (Psychotic)
//   ncmhce-D114  Anorexia Nervosa, Restricting Type (Eating)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-03.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-03');console.log(validateExamDepthSet(CASES))"
//
// Standalone deliverable for SME review. Do NOT auto-import — importing into the
// live DB is a separate, human-run step.
// ============================================================================

// --- tiny builders so every option/question carries the full schema ---------
// O(id, text, weight, { r, approach, why, keys, mistake })
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
// D110 — Persistent Depressive Disorder (F34.1) — Depressive — medium
// ============================================================================
const D110 = {
  id: 'ncmhce-D110',
  title: 'Years of low-grade depression that feels like “just who I am”',
  category: 'Depressive',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Persistent Depressive Disorder', code: 'F34.1' },
  diagnosis: { name: 'Persistent Depressive Disorder', code: 'F34.1' },
  differentialOptions: [
    { id: 'do1', name: 'Persistent Depressive Disorder', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Cyclothymic Disorder', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
  ],
  narrative: {
    intake:
      'Robert Nguyen, a 45-year-old accountant, presents reporting that he has felt low and joyless “for as long as I can remember,” ' +
      'with at least four years of most-days depressed mood, low energy, poor self-esteem, and difficulty making decisions.',
    session1:
      'He describes never feeling truly well for more than a week or two at a time and says he has come to assume this is simply his ' +
      'personality. He denies any sustained period of elevated mood, decreased need for sleep, or unusual energy or grandiosity.',
    session2:
      'He reports occasional passive thoughts that life is not worth the effort, without plan or intent, and a deep pessimism that ' +
      'treatment could change anything. His work is adequate but he has withdrawn socially and feels chronically hopeless.',
  },
  diagnosticRationale:
    'Depressed mood for most of the day, more days than not, for at least two years, accompanied by low energy, poor self-esteem, ' +
    'and impaired concentration, with no symptom-free interval longer than two months and no history of mania or hypomania, meets ' +
    'DSM-5-TR criteria for persistent depressive disorder rather than a discrete major depressive episode or a cyclothymic pattern.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Persistent depressive disorder: depressed mood most days for 2+ years plus 2 of 6 symptoms' },
    { id: 'R2', source: 'APA CPG', detail: 'Depression guideline: CBT and interpersonal therapy as first-line psychotherapies' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured screening of ideation severity, intent, plan, and behavior' },
    { id: 'R4', source: 'VA/DoD CPG', detail: 'Measurement-based stepped care for chronic depressive presentations' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1. and B.1.: client welfare, informed consent, and confidentiality limits' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a persistent depressive disorder diagnosis?', ['R1'], [
      O('a', 'That depressed mood has been present most of the day, more days than not, for at least two years without long remission', 3,
        { r: 'Chronic 2-year course anchors PDD', approach: 'Confirm the duration criterion', why: 'DSM-5-TR requires 2+ years of most-days depressed mood', keys: ['four years of low mood', 'never well for long'], mistake: 'Diagnosing PDD from a recent low period' }),
      O('b', 'That he can name the specific recent life event that he believes first set off this long-standing low mood of his', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the PDD criteria', keys: ['chronic, not event-bound'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his depressive symptoms have clearly grown more severe over the past couple of weeks than they were before', -1,
        { r: 'Recent worsening is not the criterion', approach: 'Recent-change framing', why: 'A short worsening does not establish chronicity', keys: ['stable chronic course'], mistake: 'Confusing a recent flare with PDD' }),
      O('d', 'That he meets the full count of symptoms required for a discrete major depressive episode at this point in time', 0,
        { r: 'Full MDD count is not required for PDD', approach: 'Episode-count framing', why: 'PDD needs fewer symptoms over a longer course', keys: ['chronic low-grade pattern'], mistake: 'Requiring an MDD episode to diagnose PDD' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes his presentation from a single major depressive episode?', ['R1'], [
      O('a', 'The chronic, low-grade course lasting years rather than a discrete episode with a clearer onset and offset', 3,
        { r: 'Chronicity separates PDD from MDD', approach: 'Contrast course and chronicity', why: 'PDD is chronic; a major depressive episode is discrete', keys: ['for as long as he can remember'], mistake: 'Treating chronic low mood as an MDD episode' }),
      O('b', 'The fact that he experiences low energy and difficulty concentrating on most days during the workweek', -1,
        { r: 'These symptoms occur in both', approach: 'Symptom-presence framing', why: 'Low energy and poor focus appear in both', keys: ['shared symptoms'], mistake: 'Using shared symptoms to differentiate' }),
      O('c', 'The presence of poor self-esteem and a generally pessimistic outlook that he describes about himself and his future', -1,
        { r: 'Low self-esteem occurs in both', approach: 'Cognition framing', why: 'Negative self-view is nonspecific between them', keys: ['shared cognition'], mistake: 'Reading self-esteem as decisive' }),
      O('d', 'The way his mood tends to dip a bit further on stressful days at the office than on his quieter days', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Mood reactivity does not separate the two', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'Before settling on a unipolar chronic depression diagnosis, what must the counselor rule out?', ['R1'], [
      O('a', 'Any history of hypomanic periods with elevated mood and decreased need for sleep that would point toward a cyclothymic pattern', 3,
        { r: 'Screen for hypomania and cyclothymia', approach: 'Rule out bipolar-spectrum', why: 'Hypomanic periods would change the diagnosis', keys: ['denies elevated mood', 'no decreased sleep need'], mistake: 'Skipping the bipolar-spectrum screen' }),
      O('b', 'Whether he has ever had a single panic attack with a racing heart and a fear of losing control of himself', -1,
        { r: 'Panic is a different rule-out', approach: 'Anxiety framing', why: 'Panic does not change the mood differential', keys: ['no panic reported'], mistake: 'Confusing comorbidity with the differential' }),
      O('c', 'Whether his difficulty concentrating reflects a long-standing attention-deficit pattern dating back to his childhood', -1,
        { r: 'ADHD is a low-priority rule-out here', approach: 'Neurodevelopmental framing', why: 'The mood picture is primary', keys: ['mood-driven inattention'], mistake: 'Chasing ADHD before the mood history' }),
      O('d', 'Whether his pessimism has reached a fixed, unshakeable, clearly delusional level of conviction about his future', 0,
        { r: 'Psychosis screen is secondary here', approach: 'Psychosis framing', why: 'No psychotic features are described', keys: ['pessimism without delusion'], mistake: 'Over-reading pessimism as psychosis' }),
    ]),
    Q('q4', 'core', 'Given his passive thoughts that life is not worth the effort, the most appropriate step is to:', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment to clarify ideation, intent, and plan, recognizing chronic depression raises risk', 3,
        { r: 'Assess elevated chronic-depression risk', approach: 'Screen risk with structure', why: 'Chronic depression carries elevated suicide risk', keys: ['passive ideation', 'chronic hopelessness'], mistake: 'Treating chronic ideation as not needing assessment' }),
      O('b', 'Reassure him that thoughts like these are simply part of his long-standing depression and will pass like they always have', -2,
        { r: 'Normalizing away ideation is unsafe', approach: 'Minimize as usual', why: 'It forecloses needed risk assessment', keys: ['unassessed ideation'], mistake: 'Dismissing ideation as routine' }),
      O('c', 'Ask him to sign a brief written promise that he will stay safe and reach out if the thoughts get any worse this week', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk or assess it', keys: ['needs safety planning'], mistake: 'Substituting a contract for assessment' }),
      O('d', 'Defer the topic until later sessions so that the discussion of his mood does not deepen his sense of hopelessness today', -1,
        { r: 'Deferring risk assessment is unsafe', approach: 'Delay for comfort', why: 'Risk is assessed at disclosure, not later', keys: ['active disclosure'], mistake: 'Postponing a safety assessment' }),
    ]),
    Q('q5', 'intake', 'What additional information is most important to avoid misattributing his chronic low mood?', ['R1'], [
      O('a', 'A review of medications, substance use, and medical conditions such as hypothyroidism that can mimic chronic depression', 3,
        { r: 'Rule out medical and substance causes', approach: 'Screen organic contributors', why: 'DSM-5-TR requires excluding medical and substance causes', keys: ['no medical review yet'], mistake: 'Skipping the organic rule-out' }),
      O('b', 'A detailed reconstruction of every romantic relationship he has had so the counselor can map his attachment history', 0,
        { r: 'Exhaustive relationship history is low yield', approach: 'Attachment-mapping framing', why: 'It does not exclude organic mimics', keys: ['no urgent relational data'], mistake: 'Prioritizing depth history over rule-outs' }),
      O('c', 'A full list of every hobby he has lost interest in so the counselor can document the complete extent of his anhedonia', -1,
        { r: 'Cataloging hobbies is low yield', approach: 'Interest-inventory framing', why: 'It does not change the differential', keys: ['known anhedonia'], mistake: 'Collecting low-yield detail' }),
      O('d', 'A precise account of his exact income and spending so the counselor can gauge how much financial stress he is under', -1,
        { r: 'Financial detail is not the priority', approach: 'Financial-stress framing', why: 'It does not exclude medical causes', keys: ['planning data'], mistake: 'Confusing context with rule-outs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line, within-scope treatment recommendation?', ['R2'], [
      O('a', 'Offer evidence-based psychotherapy such as cognitive behavioral therapy or interpersonal therapy for chronic depression', 3,
        { r: 'First-line psychotherapy fits scope', approach: 'Match guideline to scope', why: 'APA CPG supports CBT and IPT for depression', keys: ['chronic course', 'counselor scope'], mistake: 'Defaulting to medication advice' }),
      O('b', 'Recommend that he begin a daily antidepressant right away and increase the dose himself over the next several weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or titrate', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('c', 'Suggest he simply wait and see whether his mood lifts on its own now that he has finally talked about it with someone', -1,
        { r: 'Watchful waiting under-treats chronic PDD', approach: 'Watchful waiting', why: 'A chronic disorder warrants active treatment', keys: ['years of impairment'], mistake: 'Delaying indicated care' }),
      O('d', 'Encourage him to rely mainly on a new exercise and sleep routine instead of engaging in any formal course of therapy', -1,
        { r: 'Lifestyle alone is insufficient first-line', approach: 'Lifestyle substitution', why: 'Adjuncts do not replace first-line therapy', keys: ['chronic symptoms'], mistake: 'Offering adjuncts as the primary plan' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor track whether the chronic depression is responding to treatment?', ['R4'], [
      O('a', 'Re-administer a validated symptom measure such as the PHQ-9 at intervals to guide measurement-based care decisions', 3,
        { r: 'Measurement-based care guides decisions', approach: 'Use repeated measures', why: 'VA/DoD CPG endorses measurement-based care', keys: ['need objective tracking'], mistake: 'Relying on impressions alone' }),
      O('b', 'Ask him at each visit whether he subjectively feels that things are going a little better than they were before', -1,
        { r: 'Global impressions are unreliable', approach: 'Informal check-in', why: 'It lacks a standardized benchmark', keys: ['no objective anchor'], mistake: 'Trusting unstandardized self-report' }),
      O('c', 'Wait until the agreed course of therapy is over and then evaluate his overall response in one single review', -1,
        { r: 'End-only review misses non-response', approach: 'Terminal evaluation', why: 'It prevents timely plan adjustment', keys: ['need interim data'], mistake: 'Skipping interim monitoring' }),
      O('d', 'Track mainly whether he keeps attending sessions and completes the between-session assignments he is given each week', 0,
        { r: 'Engagement is necessary but not sufficient', approach: 'Adherence proxy', why: 'Attendance does not measure symptoms', keys: ['process vs outcome'], mistake: 'Mistaking adherence for outcome' }),
    ]),
    Q('q8', 'treatment', 'Robert asks whether medication could help. What is the most appropriate counselor action?', ['R5'], [
      O('a', 'Provide general information and coordinate a referral to a prescriber for a medication evaluation with his consent', 3,
        { r: 'Refer and coordinate within scope', approach: 'Coordinate care', why: 'Counselors refer rather than prescribe', keys: ['interest in meds', 'chronic depression'], mistake: 'Giving specific medication advice' }),
      O('b', 'Tell him which specific antidepressant usually works best for people with the kind of long-standing low mood he describes', -2,
        { r: 'Naming a drug exceeds scope', approach: 'Prescriptive advice', why: 'Counselors do not select medications', keys: ['no prescriptive authority'], mistake: 'Overstepping professional scope' }),
      O('c', 'Advise him that medication is probably unnecessary as long as he keeps coming to therapy and doing the work each week', -1,
        { r: 'Discouraging meds overreaches', approach: 'Discourage medication', why: 'The decision belongs with a prescriber', keys: ['client autonomy'], mistake: 'Steering a medical decision' }),
      O('d', 'Suggest he look into antidepressants himself online and bring whichever one he prefers to a future appointment with you', -1,
        { r: 'Outsourcing to self-research is poor care', approach: 'Defer to self-research', why: 'It abandons proper coordination', keys: ['needs professional evaluation'], mistake: 'Replacing referral with self-directed search' }),
    ]),
    Q('q9', 'treatment', 'A central treatment target given the chronicity of his depression would most appropriately be:', ['R2'], [
      O('a', 'The entrenched belief that this is simply his fixed personality, paired with graded re-engagement in valued activity', 3,
        { r: 'Target chronic hopeless self-view and activity', approach: 'Address chronic cognition and behavior', why: 'Chronic PDD is maintained by hopeless identity beliefs and withdrawal', keys: ['this is just who I am', 'social withdrawal'], mistake: 'Treating only acute symptoms' }),
      O('b', 'A detailed reconstruction of the earliest childhood memory he can recall as the single key to unlocking his depression', 0,
        { r: 'Single-memory focus is not the priority', approach: 'Origins-only framing', why: 'Change-focused work outperforms it for PDD', keys: ['symptom maintenance'], mistake: 'Prioritizing origins over maintaining factors' }),
      O('c', 'Helping him accept that, given how long this has lasted, lasting change is probably not a realistic goal for him to hold', -2,
        { r: 'Endorsing hopelessness is countertherapeutic', approach: 'Concede chronicity', why: 'It reinforces the hopelessness driving PDD', keys: ['therapeutic pessimism'], mistake: 'Adopting the client’s hopeless stance' }),
      O('d', 'Focusing primarily on relaxation skills so that he feels physically calmer during his most stressful days at the office', -1,
        { r: 'Relaxation alone misses the core', approach: 'Arousal-only framing', why: 'It does not address the chronic cognitive pattern', keys: ['core beliefs untreated'], mistake: 'Treating arousal while ignoring cognition' }),
    ]),
    Q('q10', 'counseling', 'Robert says he doubts therapy can change something that has defined his whole life. Best response?', ['R2'], [
      O('a', 'Validate how entrenched it feels and collaboratively test the belief by setting one small, achievable goal to start', 3,
        { r: 'Validate, then test the belief behaviorally', approach: 'Instill hope collaboratively', why: 'Small successes counter entrenched hopelessness', keys: ['lifelong hopelessness'], mistake: 'Arguing him out of hopelessness' }),
      O('b', 'Promise him confidently that therapy is certain to change everything as long as he fully commits to the entire process', -1,
        { r: 'Overpromising risks credibility', approach: 'Guarantee outcomes', why: 'Unrealistic guarantees can backfire', keys: ['skeptical client'], mistake: 'Making promises you cannot keep' }),
      O('c', 'Accept his view that lasting change is unlikely and refocus the work on simply helping him cope with daily life as it is', -2,
        { r: 'Agreeing confirms the hopelessness', approach: 'Concede hopelessness', why: 'It abandons a treatable target', keys: ['therapeutic pessimism'], mistake: 'Adopting the client’s hopeless stance' }),
      O('d', 'Explain the research on chronic depression treatment outcomes in detail to convince him on the evidence that change is possible', -1,
        { r: 'Lecturing rarely shifts hopelessness', approach: 'Didactic persuasion', why: 'Experiential evidence works better here', keys: ['emotional reasoning'], mistake: 'Substituting data for experience' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best address Robert’s belief that his depression is simply his personality?', ['R2'], [
      O('a', 'Offer psychoeducation that persistent depression is a treatable condition, not a fixed trait, while validating the experience', 3,
        { r: 'Reframe trait as treatable condition', approach: 'Normalize and reframe', why: 'Framing PDD as treatable counters the trait belief', keys: ['identifies depression as personality'], mistake: 'Either lecturing or only sympathizing' }),
      O('b', 'Agree that after this many years it has effectively become part of who he is and help him make peace with that reality', -2,
        { r: 'Endorsing the trait belief deepens it', approach: 'Validate the distortion', why: 'It reinforces the hopeless identity', keys: ['fixed-trait belief'], mistake: 'Colluding with the identity belief' }),
      O('c', 'Firmly challenge the belief as irrational and lay out the logical evidence that it is not actually part of his personality', -1,
        { r: 'Premature disputation feels invalidating', approach: 'Confront the cognition', why: 'It can rupture the alliance early', keys: ['fragile self-view'], mistake: 'Disputing before validating' }),
      O('d', 'Redirect away from the belief entirely and refocus the session on planning practical goals for the upcoming week ahead', -1,
        { r: 'Avoidance leaves the belief intact', approach: 'Topic redirection', why: 'It bypasses a core treatment target', keys: ['unaddressed cognition'], mistake: 'Avoiding emotionally central material' }),
    ]),
    Q('q12', 'ethics', 'When reviewing informed consent, what must the counselor be sure Robert understands?', ['R5'], [
      O('a', 'The limits of confidentiality, including when imminent risk of serious harm to self or others must be acted upon', 3,
        { r: 'Disclose confidentiality limits up front', approach: 'Clarify consent and limits', why: 'ACA B.1. requires explaining confidentiality limits', keys: ['passive ideation present'], mistake: 'Omitting the limits of confidentiality' }),
      O('b', 'That everything he shares in their sessions will be kept in complete confidence no matter what he tells the counselor', -2,
        { r: 'Absolute confidentiality is inaccurate', approach: 'Overpromise privacy', why: 'It misstates legal and ethical limits', keys: ['safety exceptions exist'], mistake: 'Guaranteeing unconditional secrecy' }),
      O('c', 'That the counselor will personally decide which specific treatment goals he ought to work toward over the course of care', -1,
        { r: 'Goals are collaborative, not imposed', approach: 'Clinician-set goals', why: 'Consent includes collaborative goal-setting', keys: ['client autonomy'], mistake: 'Removing the client from planning' }),
      O('d', 'That he must commit to finishing the full recommended course of therapy now that he has agreed to begin the work today', -1,
        { r: 'Clients may withdraw consent', approach: 'Mandate completion', why: 'Consent is ongoing and revocable', keys: ['right to refuse'], mistake: 'Treating consent as binding' }),
    ]),
    Q('q13', 'ethics', 'Robert says he is embarrassed and asks the counselor not to record his depression in any records. Best response?', ['R5'], [
      O('a', 'Explain that accurate clinical documentation is required and discuss how records are protected and who may access them', 3,
        { r: 'Keep honest records; explain protections', approach: 'Maintain accurate documentation', why: 'Ethical practice requires accurate records he is told about', keys: ['embarrassment', 'requests omission'], mistake: 'Falsifying or omitting clinical information' }),
      O('b', 'Agree to leave the depression out of the chart entirely so that he feels more comfortable being open and honest with you', -2,
        { r: 'Omitting the diagnosis falsifies the record', approach: 'Omit to comfort', why: 'A deliberately incomplete record is misleading', keys: ['record integrity'], mistake: 'Falsifying records to reassure' }),
      O('c', 'Tell him that he has no say at all in what goes into his record and move on without addressing his embarrassment further', -1,
        { r: 'Dismissing his concern harms rapport', approach: 'Authoritarian framing', why: 'His concern deserves a respectful explanation', keys: ['client dignity'], mistake: 'Ignoring the client’s concern' }),
      O('d', 'Offer to keep a private, separate set of unofficial notes about his depression outside of his formal clinical record', -2,
        { r: 'Shadow records are improper', approach: 'Off-the-record notes', why: 'Parallel secret records violate documentation standards', keys: ['single accurate record'], mistake: 'Keeping hidden duplicate notes' }),
    ]),
  ],
};

// ============================================================================
// D111 — Social Anxiety Disorder (F40.10) — Anxiety — medium
// ============================================================================
const D111 = {
  id: 'ncmhce-D111',
  title: 'Dread of being judged that shrinks her world',
  category: 'Anxiety',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Social Anxiety Disorder', code: 'F40.10' },
  diagnosis: { name: 'Social Anxiety Disorder', code: 'F40.10' },
  differentialOptions: [
    { id: 'do1', name: 'Social Anxiety Disorder', isCorrect: true },
    { id: 'do2', name: 'Panic Disorder', isCorrect: false },
    { id: 'do3', name: 'Avoidant Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Generalized Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Sofia Reyes, a 24-year-old junior associate, presents with an intense, long-standing fear of being judged or embarrassed in ' +
      'social and performance situations such as meetings, presentations, and even speaking up among coworkers she knows well.',
    session1:
      'She blushes, sweats, and rehearses what to say for hours, fearing others will see her as foolish; she has turned down a ' +
      'promotion that required presenting and avoids work lunches. The fear has been present for over a year and is clearly impairing.',
    session2:
      'She recognizes the fear is out of proportion but cannot shake it, and she relies on sitting silently and gripping her notes to ' +
      'get through meetings. She denies unexpected panic attacks at rest and denies pervasive worry across unrelated life domains.',
  },
  diagnosticRationale:
    'Marked, persistent fear of social or performance situations in which she may be scrutinized, lasting more than six months, with ' +
    'recognition that the fear is excessive, avoidance and endured distress, and clear impairment, meets DSM-5-TR criteria for social ' +
    'anxiety disorder. The fear is cued by scrutiny rather than uncued panic, situational rather than pervasive, and not a lifelong trait pattern alone.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Social anxiety disorder: fear of scrutiny in social/performance situations, 6+ months, impairing' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Social anxiety disorder: individual CBT with exposure as first-line treatment' },
    { id: 'R3', source: 'APA CPG', detail: 'Anxiety guideline supporting cognitive-behavioral therapy with exposure' },
    { id: 'R4', source: 'Hays (Assessment)', detail: 'Selecting and interpreting standardized anxiety measures and clinical interview' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, scope of practice, and informed consent' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a social anxiety disorder diagnosis?', ['R1'], [
      O('a', 'That the fear centers on being scrutinized or judged in social or performance situations and has lasted six months or more', 3,
        { r: 'Fear of scrutiny plus duration anchors it', approach: 'Confirm the core criterion', why: 'DSM-5-TR requires fear of scrutiny lasting 6+ months', keys: ['fear of being judged', 'over a year'], mistake: 'Diagnosing from ordinary shyness' }),
      O('b', 'That she experiences sudden, unexpected surges of intense fear that come on even when she is alone and at rest', -1,
        { r: 'Uncued surges point to panic disorder', approach: 'Panic framing', why: 'Social anxiety fear is cued by scrutiny', keys: ['denies uncued attacks'], mistake: 'Confusing social anxiety with panic' }),
      O('c', 'That she worries excessively and uncontrollably across many unrelated areas of her life more days than not', -1,
        { r: 'Diffuse worry points to GAD', approach: 'Generalized-worry framing', why: 'Her fear is situational, not pervasive', keys: ['denies pervasive worry'], mistake: 'Reframing social anxiety as GAD' }),
      O('d', 'That her blushing and sweating during meetings are severe enough that coworkers have actually commented on them to her', 0,
        { r: 'Symptom visibility is not the criterion', approach: 'Visibility framing', why: 'Whether others notice is not diagnostic', keys: ['feared visibility'], mistake: 'Using observability as the test' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from panic disorder?', ['R1'], [
      O('a', 'Her fear is consistently triggered by social scrutiny rather than arising as unexpected attacks with no situational cue', 3,
        { r: 'Cued by scrutiny versus uncued attacks', approach: 'Contrast the trigger pattern', why: 'Social anxiety is cued; panic includes uncued attacks', keys: ['fear tied to being judged'], mistake: 'Treating cued social fear as panic' }),
      O('b', 'The physical symptoms she has, such as a racing heart, blushing, and sweating, when she is in the feared situations', -1,
        { r: 'Physical arousal occurs in both', approach: 'Somatic framing', why: 'Autonomic symptoms do not separate them', keys: ['shared arousal'], mistake: 'Using somatic symptoms to differentiate' }),
      O('c', 'The fact that she anticipates and worries about upcoming meetings for hours or even days before they actually happen', -1,
        { r: 'Anticipatory worry occurs in both', approach: 'Anticipation framing', why: 'Both involve anticipatory anxiety', keys: ['shared anticipation'], mistake: 'Reading anticipation as decisive' }),
      O('d', 'The way she generally feels more anxious later in the workday than she tends to feel earlier in the morning hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the disorders', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from avoidant personality disorder?', ['R1'], [
      O('a', 'Her fear is focused on performance and social-scrutiny situations rather than a pervasive, lifelong pattern across all relationships', 3,
        { r: 'Situational fear versus pervasive trait pattern', approach: 'Contrast scope and pervasiveness', why: 'AvPD is a pervasive lifelong pattern of inadequacy and avoidance', keys: ['situation-focused fear', 'functions with known coworkers otherwise'], mistake: 'Forcing situational anxiety into a personality diagnosis' }),
      O('b', 'The fact that she tends to avoid the specific situations that she finds the most frightening and uncomfortable to face', -1,
        { r: 'Avoidance appears in both', approach: 'Avoidance framing', why: 'Both involve avoidance; pervasiveness differs', keys: ['shared avoidance'], mistake: 'Using avoidance alone to differentiate' }),
      O('c', 'Her belief during feared situations that other people will end up viewing her as foolish or socially inadequate', -1,
        { r: 'Fear of negative evaluation occurs in both', approach: 'Appraisal framing', why: 'Both share fear of negative evaluation', keys: ['shared cognition'], mistake: 'Reading the appraisal as decisive' }),
      O('d', 'The distress and discomfort she clearly experiences whenever she is required to speak in front of a group of people', 0,
        { r: 'Performance distress is nonspecific', approach: 'Distress framing', why: 'Distress in performance is common to both', keys: ['shared distress'], mistake: 'Using distress to differentiate' }),
    ]),
    Q('q4', 'intake', 'What specifier is most important to assess to complete her diagnostic picture?', ['R1'], [
      O('a', 'Whether her fear is limited to performance situations such as public speaking, which carries a performance-only specifier', 3,
        { r: 'Assess the performance-only specifier', approach: 'Clarify the scope of fear', why: 'DSM-5-TR includes a performance-only specifier', keys: ['fears presentations', 'turned down a promotion'], mistake: 'Missing a clinically relevant specifier' }),
      O('b', 'Whether her fear is mainly driven by a persistent preoccupation with having a serious undiagnosed medical illness', -1,
        { r: 'Illness preoccupation is a different focus', approach: 'Illness-anxiety framing', why: 'Her fear is social, not illness-based', keys: ['social-scrutiny focus'], mistake: 'Reframing social anxiety as illness anxiety' }),
      O('c', 'Whether she has experienced clear stretches of elevated mood and reduced need for sleep lasting several days at a time', -1,
        { r: 'Hypomania screen is low yield here', approach: 'Mood-episode framing', why: 'Nothing suggests a bipolar pattern', keys: ['anxiety-focused picture'], mistake: 'Chasing an unsupported rule-out' }),
      O('d', 'Whether her symptoms are generally worse on the days when she has had more caffeine than she usually tends to drink', 0,
        { r: 'Caffeine effect is not central', approach: 'Substance framing', why: 'It does not change the formulation', keys: ['nonspecific factor'], mistake: 'Over-reading a minor contributor' }),
    ]),
    Q('q5', 'intake', 'What medical or substance-related contributor is most appropriate to screen for?', ['R1'], [
      O('a', 'Caffeine and stimulant use and conditions such as hyperthyroidism, which can amplify autonomic anxiety symptoms', 3,
        { r: 'Screen physiologic amplifiers', approach: 'Screen organic contributors', why: 'DSM-5-TR requires excluding medical and substance causes', keys: ['blushing and sweating'], mistake: 'Skipping the medical rule-out' }),
      O('b', 'A previously undetected, slowly progressive neurocognitive decline that could explain her difficulty in meetings', -1,
        { r: 'Cognitive decline is implausible here', approach: 'Neurocognitive framing', why: 'Her profile and age fit anxiety', keys: ['anxiety-driven difficulty'], mistake: 'Pursuing an improbable rule-out' }),
      O('c', 'A long-standing pattern of restricting food that could be contributing to her physical symptoms during meetings', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging primary psychotic process that might account for her belief that coworkers are scrutinizing her closely', 0,
        { r: 'Realistic fear of judgment is not psychosis', approach: 'Psychosis framing', why: 'Her appraisal is anxious, not delusional', keys: ['reality testing intact'], mistake: 'Over-reading social fear as psychosis' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line psychotherapy recommendation?', ['R2'], [
      O('a', 'Cognitive behavioral therapy with graded exposure to feared social and performance situations and cognitive restructuring', 3,
        { r: 'CBT with social exposure is first-line', approach: 'Apply the guideline', why: 'NICE and APA CPG support CBT with exposure for social anxiety', keys: ['avoids meetings and lunches'], mistake: 'Choosing an unsupported approach' }),
      O('b', 'Long-term supportive counseling that gives her a comfortable space to talk about how stressful work has become for her', -1,
        { r: 'Unstructured support underperforms CBT', approach: 'Supportive-only therapy', why: 'It lacks the exposure component that treats social anxiety', keys: ['needs exposure'], mistake: 'Defaulting to nondirective support' }),
      O('c', 'Coaching her to keep avoiding presentations until she naturally feels confident enough to take them on without much fear', -2,
        { r: 'Sanctioning avoidance maintains the disorder', approach: 'Accommodate avoidance', why: 'Avoidance prevents corrective learning', keys: ['turned down a promotion'], mistake: 'Reinforcing avoidance as coping' }),
      O('d', 'A primarily insight-oriented exploration of her early family relationships as the main route to easing her social fear', 0,
        { r: 'Insight work is not first-line here', approach: 'Depth exploration', why: 'Evidence favors exposure-based CBT', keys: ['symptom-focused need'], mistake: 'Prioritizing origins over exposure' }),
    ]),
    Q('q7', 'treatment', 'Sofia sits silently and grips her notes to get through meetings. How should the plan address these behaviors?', ['R3'], [
      O('a', 'Identify them as safety behaviors and gradually drop them so she can learn the feared judgment does not actually occur', 3,
        { r: 'Fade safety behaviors during exposure', approach: 'Eliminate safety behaviors', why: 'Safety behaviors prevent disconfirming the feared outcome', keys: ['sits silently', 'grips her notes'], mistake: 'Leaving safety behaviors in place' }),
      O('b', 'Encourage her to keep relying on whatever small habits help her get through the meeting so that she can keep attending them', -1,
        { r: 'Preserving the habits maintains the fear', approach: 'Accommodate safety behaviors', why: 'They block the corrective learning of exposure', keys: ['safety behavior'], mistake: 'Reinforcing safety behaviors' }),
      O('c', 'Treat these behaviors as harmless personal preferences that have nothing to do with the maintenance of her social anxiety', -1,
        { r: 'They are not harmless in social anxiety', approach: 'Minimize the behaviors', why: 'They actively maintain the anxiety cycle', keys: ['maintaining factor'], mistake: 'Overlooking safety behaviors' }),
      O('d', 'Replace them with a longer and more elaborate set of preparation rituals she can run through before each upcoming meeting', -2,
        { r: 'New rituals are still avoidance', approach: 'Swap one ritual for another', why: 'It substitutes one safety behavior for another', keys: ['avoidance persists'], mistake: 'Trading rituals rather than dropping them' }),
    ]),
    Q('q8', 'treatment', 'A core cognitive target in her treatment would most appropriately be:', ['R3'], [
      O('a', 'Her prediction that others will judge her harshly, tested against what actually happens during planned social exposures', 3,
        { r: 'Test the negative-evaluation prediction', approach: 'Target the maintaining belief', why: 'Disconfirming feared judgment reduces social anxiety', keys: ['fears being seen as foolish'], mistake: 'Treating only the physical symptoms' }),
      O('b', 'Helping her prepare detailed scripts for every possible thing she might be asked so she is never caught off guard at all', -1,
        { r: 'Over-preparation is a safety behavior', approach: 'Exhaustive scripting', why: 'It reinforces the need to avoid spontaneity', keys: ['rehearses for hours'], mistake: 'Accommodating the anxiety process' }),
      O('c', 'Teaching her to monitor her blushing and sweating closely so she can catch the earliest signs that others might notice', -1,
        { r: 'Self-focused monitoring worsens anxiety', approach: 'Self-monitoring', why: 'Heightened self-focus increases social anxiety', keys: ['self-focused attention'], mistake: 'Encouraging symptom monitoring' }),
      O('d', 'Encouraging her to steer clear of any high-pressure social situations until her confidence has had time to build naturally', -2,
        { r: 'Avoiding situations entrenches the fear', approach: 'Activity avoidance', why: 'It prevents the exposure that treats the disorder', keys: ['avoids feared settings'], mistake: 'Sanctioning avoidance' }),
    ]),
    Q('q9', 'treatment', 'Sofia asks whether medication might help. The most appropriate counselor action is to:', ['R5'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation while continuing exposure-based therapy within her own scope', 3,
        { r: 'Refer and coordinate within scope', approach: 'Coordinate care', why: 'Counselors refer for medication rather than prescribe', keys: ['asks about medication'], mistake: 'Giving prescriptive advice' }),
      O('b', 'Recommend the specific medication that tends to calm social anxiety the most for people with her particular symptom profile', -2,
        { r: 'Naming a drug exceeds scope', approach: 'Prescriptive advice', why: 'Medication selection is outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping professional limits' }),
      O('c', 'Advise her to take an as-needed sedative right before any meeting that she expects is going to be especially stressful for her', -2,
        { r: 'PRN sedation can become a safety behavior', approach: 'Endorse PRN sedation', why: 'As-needed use can undermine exposure and carries risk', keys: ['safety behavior risk'], mistake: 'Recommending a specific PRN strategy' }),
      O('d', 'Discourage medication and tell her she should be able to manage her social anxiety entirely through the therapy techniques', -1,
        { r: 'Discouraging meds overreaches', approach: 'Discourage medication', why: 'The decision belongs with a prescriber', keys: ['client autonomy'], mistake: 'Steering a medical decision' }),
    ]),
    Q('q10', 'counseling', 'During an in-session role-play, Sofia freezes and says she cannot do it. The most therapeutic response is to:', ['R3'], [
      O('a', 'Break the task into a smaller, more manageable step and coach her through it so she experiences a tolerable success', 3,
        { r: 'Grade the exposure to a tolerable step', approach: 'Titrate the difficulty', why: 'A graded step keeps exposure within tolerance and builds mastery', keys: ['freezes in role-play'], mistake: 'Either pushing too hard or abandoning the task' }),
      O('b', 'End the role-play right away and reassure her that she does not have to do anything that makes her feel uncomfortable', -1,
        { r: 'Abandoning the task reinforces avoidance', approach: 'Escape the discomfort', why: 'Stopping teaches that escape was necessary', keys: ['avoidance trap'], mistake: 'Reinforcing escape from discomfort' }),
      O('c', 'Insist that she push all the way through the hardest version of the exercise right now so she proves she can handle it', -1,
        { r: 'Flooding past tolerance can backfire', approach: 'Force the hardest step', why: 'Exceeding tolerance can heighten fear', keys: ['outside tolerance'], mistake: 'Skipping graded pacing' }),
      O('d', 'Tell her that her fear is unfounded and that there is really no logical reason for her to feel so nervous about a role-play', -1,
        { r: 'Dismissing the fear invalidates her', approach: 'Rational dismissal', why: 'It overlooks the experiential nature of the fear', keys: ['emotional reasoning'], mistake: 'Arguing rather than guiding exposure' }),
    ]),
    Q('q11', 'counseling', 'Sofia worries that needing help with this means she is fundamentally weak. Best response?', ['R3'], [
      O('a', 'Validate the feeling and reframe seeking treatment as a courageous, active step toward a treatable, common condition', 3,
        { r: 'Validate then reframe help-seeking', approach: 'Normalize and reframe', why: 'Reframing reduces shame and supports engagement', keys: ['shame about needing help'], mistake: 'Either dismissing or reinforcing the belief' }),
      O('b', 'Agree that most people really do handle this kind of thing on their own and commend her for finally coming in for help', -2,
        { r: 'Endorsing weakness deepens shame', approach: 'Confirm the belief', why: 'It reinforces the stigma she fears', keys: ['self-stigma'], mistake: 'Colluding with the self-judgment' }),
      O('c', 'Move quickly past the comment and steer the session back toward reviewing the exposure hierarchy she has been building', -1,
        { r: 'Bypassing the belief misses a target', approach: 'Redirect to task', why: 'Self-stigma is clinically relevant', keys: ['unaddressed cognition'], mistake: 'Avoiding emotionally salient material' }),
      O('d', 'Give her detailed statistics on how many millions of adults experience social anxiety each year across the whole country', -1,
        { r: 'Facts alone rarely shift shame', approach: 'Statistical persuasion', why: 'Validation works better than data here', keys: ['emotional reasoning'], mistake: 'Answering emotion with numbers' }),
    ]),
    Q('q12', 'ethics', 'Sofia’s manager calls asking why she declined the promotion and whether she is “having mental health problems.” Best response?', ['R5'], [
      O('a', 'Decline to confirm or deny without a valid release and explain that disclosure requires her written consent', 3,
        { r: 'Protect confidentiality without a release', approach: 'Uphold confidentiality', why: 'ACA protects information absent valid consent', keys: ['employer inquiry', 'no release'], mistake: 'Disclosing to an employer without consent' }),
      O('b', 'Confirm that she is being treated for anxiety, since the manager seems genuinely concerned and is only trying to support her', -2,
        { r: 'Confirming breaches confidentiality', approach: 'Assume good intent permits it', why: 'Concern does not authorize disclosure', keys: ['no valid release'], mistake: 'Disclosing without authorization' }),
      O('c', 'Share just enough general information about her treatment so that the manager can make reasonable accommodations for her at work', -2,
        { r: 'Disclosing for accommodations still needs consent', approach: 'Soft disclosure', why: 'Only a valid release permits disclosure', keys: ['confidentiality'], mistake: 'Leaking details under the guise of helping' }),
      O('d', 'Refuse to speak with the manager at all and hang up without explaining anything about confidentiality or the process', -1,
        { r: 'Abrupt refusal misses a teachable moment', approach: 'Flat refusal', why: 'The rationale can be explained appropriately', keys: ['professional courtesy'], mistake: 'Being needlessly obstructive' }),
    ]),
    Q('q13', 'ethics', 'As exposure-based work is planned, what does informed consent most importantly require here?', ['R5'], [
      O('a', 'Explaining the rationale, the temporary anxiety exposure can provoke, and that her participation remains voluntary', 3,
        { r: 'Disclose rationale, discomfort, and choice', approach: 'Obtain informed consent', why: 'Consent requires explaining the approach and its risks', keys: ['exposure planned', 'fears judgment'], mistake: 'Starting exposure without informed consent' }),
      O('b', 'Assuring her in advance that the exposure exercises will be completely comfortable and will never make her feel any anxiety', -2,
        { r: 'Misrepresenting exposure is dishonest', approach: 'Downplay the method', why: 'Exposure deliberately provokes manageable anxiety', keys: ['accurate disclosure'], mistake: 'Misstating what the treatment involves' }),
      O('c', 'Having her agree up front that she will complete every exposure she is assigned no matter how distressing it turns out to be', -1,
        { r: 'Consent is voluntary and revocable', approach: 'Mandate completion', why: 'She retains the right to pause or decline', keys: ['voluntary participation'], mistake: 'Treating consent as a binding commitment' }),
      O('d', 'Waiting to explain the method until after the first exposure exercise so that her anticipatory anxiety does not build up', -1,
        { r: 'Withholding the method violates consent', approach: 'Delay disclosure', why: 'Consent must precede the intervention', keys: ['informed choice'], mistake: 'Intervening before explaining' }),
    ]),
  ],
};

// ============================================================================
// D112 — Bipolar I Disorder, Current Episode Manic (F31.13) — Bipolar — hard
// ============================================================================
const D112 = {
  id: 'ncmhce-D112',
  title: 'A week of soaring energy, big plans, and little sleep',
  category: 'Bipolar',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Bipolar I Disorder, Current Episode Manic', code: 'F31.13' },
  diagnosis: { name: 'Bipolar I Disorder, Current Episode Manic', code: 'F31.13' },
  differentialOptions: [
    { id: 'do1', name: 'Bipolar I Disorder, Current Episode Manic', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Schizoaffective Disorder, Bipolar Type', isCorrect: false },
    { id: 'do4', name: 'Stimulant Intoxication', isCorrect: false },
  ],
  narrative: {
    intake:
      'Darnell Carter, a 30-year-old entrepreneur, is brought in by his sister, who reports that for the past week he has barely slept, ' +
      'talks rapidly, and has launched several grand business schemes, maxing out credit cards and approaching strangers with big plans.',
    session1:
      'Darnell is energized and irritable when questioned, insisting he feels “the best ever” and needs little sleep. His speech is hard ' +
      'to interrupt, his thoughts race, and his sister notes a similar but milder episode last year followed by months of deep depression.',
    session2:
      'He denies drug use, and a recent screen was negative; he has no fixed delusions but is grandiose about his abilities. His risky ' +
      'spending and driving worry his family, and he minimizes any concern, saying everyone else simply cannot keep up with him.',
  },
  diagnosticRationale:
    'A distinct period of abnormally elevated, expansive, and irritable mood with increased energy lasting at least one week, plus ' +
    'decreased need for sleep, pressured speech, flight of ideas, grandiosity, and excessive risky activity causing marked impairment, ' +
    'meets DSM-5-TR criteria for a manic episode and Bipolar I Disorder, with a negative substance screen ruling out a stimulant cause.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Manic episode: 1+ week of elevated/irritable mood and energy plus 3+ symptoms with marked impairment' },
    { id: 'R2', source: 'VA/DoD CPG', detail: 'Bipolar disorder: urgent pharmacologic management of acute mania and risk reduction' },
    { id: 'R3', source: 'IPSRT', detail: 'Interpersonal and social rhythm therapy to stabilize sleep-wake rhythms in maintenance' },
    { id: 'R4', source: 'C-SSRS', detail: 'Structured suicide-risk screening across mood states' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: welfare, danger exceptions to confidentiality, and scope of practice' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to establish a manic episode?', ['R1'], [
      O('a', 'A distinct week or more of elevated or irritable mood with increased energy plus several associated manic symptoms', 3,
        { r: 'Duration, mood, energy, and symptoms anchor mania', approach: 'Confirm the episode criteria', why: 'DSM-5-TR requires 1+ week of elevated/irritable mood with energy and 3+ symptoms', keys: ['barely sleeping for a week', 'grandiose schemes'], mistake: 'Diagnosing mania from a single day of high energy' }),
      O('b', 'That he can identify the specific stressful event that he believes is responsible for how he has been acting this week', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the manic-episode criteria', keys: ['episode-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his elevated mood has clearly been more intense over the past day or two than it was earlier in the week', -1,
        { r: 'Recent intensity is not the criterion', approach: 'Recent-change framing', why: 'The full one-week episode is what matters', keys: ['week-long episode'], mistake: 'Confusing a brief peak with the episode' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define mania', approach: 'Wrong-pole framing', why: 'A manic episode, not a depressive one, is present', keys: ['current mania'], mistake: 'Applying depressive criteria to mania' }),
    ]),
    Q('q2', 'core', 'Which finding most strongly supports Bipolar I rather than a major depressive disorder?', ['R1'], [
      O('a', 'The current manic episode itself, since a single lifetime manic episode establishes a Bipolar I diagnosis', 3,
        { r: 'One manic episode defines Bipolar I', approach: 'Apply the diagnostic rule', why: 'A single manic episode is sufficient for Bipolar I', keys: ['current mania', 'prior milder episode'], mistake: 'Calling it depression because of past low periods' }),
      O('b', 'The fact that his sister recalls a period of deep depression that lasted for several months after last year’s episode', -1,
        { r: 'Past depression alone does not decide it', approach: 'Depression-history framing', why: 'It is the manic episode that establishes Bipolar I', keys: ['mania is decisive'], mistake: 'Letting the depressive history drive the diagnosis' }),
      O('c', 'The irritability and short temper that he displays whenever his family members try to question his recent behavior', -1,
        { r: 'Irritability occurs across disorders', approach: 'Symptom-presence framing', why: 'Irritability is nonspecific', keys: ['shared feature'], mistake: 'Using irritability to differentiate' }),
      O('d', 'The trouble he has concentrating and staying on one topic during the conversation in the counselor’s office today', 0,
        { r: 'Poor focus is nonspecific', approach: 'Cognitive framing', why: 'Concentration problems occur in both poles', keys: ['nonspecific symptom'], mistake: 'Reading inattention as decisive' }),
    ]),
    Q('q3', 'core', 'Given his presentation, what is the most important condition to rule out?', ['R1'], [
      O('a', 'A substance-induced manic picture, which his negative drug screen and denial of use make less likely but worth confirming', 3,
        { r: 'Exclude a substance-induced cause', approach: 'Rule out substances', why: 'Stimulants can mimic mania and must be excluded', keys: ['negative screen', 'denies use'], mistake: 'Skipping the substance rule-out' }),
      O('b', 'A primary anxiety disorder that could be producing his restlessness and his difficulty sitting still during the session', -1,
        { r: 'Anxiety does not explain the syndrome', approach: 'Anxiety framing', why: 'The full manic syndrome is not anxiety', keys: ['manic syndrome'], mistake: 'Reducing mania to anxiety' }),
      O('c', 'A long-standing personality pattern that could account for why he tends to be so confident and ambitious in his business', -1,
        { r: 'Trait confidence is not the rule-out', approach: 'Personality framing', why: 'A discrete episode differs from a trait', keys: ['episodic change'], mistake: 'Attributing an episode to personality' }),
      O('d', 'A neurocognitive decline that might explain the poor judgment he has shown in his recent spending and driving decisions', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'The acute manic picture fits better', keys: ['acute onset'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q4', 'core', 'How should the counselor weigh his grandiosity in the differential?', ['R1'], [
      O('a', 'As mood-congruent grandiosity within the manic episode rather than the fixed delusions seen in a psychotic disorder', 3,
        { r: 'Mood-congruent grandiosity fits mania', approach: 'Place grandiosity in the episode', why: 'Manic grandiosity is mood-congruent, not a fixed delusion', keys: ['grandiose about abilities', 'no fixed delusions'], mistake: 'Reading manic grandiosity as schizophrenia' }),
      O('b', 'As clear evidence of a primary psychotic disorder, since any grandiosity at all means that psychosis is the main problem', -2,
        { r: 'Grandiosity alone is not psychosis', approach: 'Over-read psychosis', why: 'Grandiosity occurs within mania without psychosis', keys: ['no fixed delusions'], mistake: 'Equating grandiosity with a psychotic disorder' }),
      O('c', 'As an ordinary, healthy level of entrepreneurial confidence that does not require any particular clinical attention at all', -2,
        { r: 'Minimizing impairing grandiosity is unsafe', approach: 'Normalize the symptom', why: 'His grandiosity is driving harmful risk-taking', keys: ['risky spending'], mistake: 'Dismissing a clinically significant symptom' }),
      O('d', 'As a defensive personality style he uses to cope whenever his family members start to criticize the choices he has made', -1,
        { r: 'It is a manic symptom, not a defense', approach: 'Defense framing', why: 'The grandiosity is part of the manic syndrome', keys: ['episodic grandiosity'], mistake: 'Reframing a symptom as a coping style' }),
    ]),
    Q('q5', 'intake', 'Given his risky behavior and irritability, what safety assessment is most important now?', ['R4'], [
      O('a', 'Assess danger to self and others, including suicide risk and the impulsive, high-risk behaviors he is currently engaging in', 3,
        { r: 'Assess risk across mood states', approach: 'Screen safety comprehensively', why: 'Mania carries elevated risk from impulsivity and shifting mood', keys: ['risky spending and driving', 'irritability'], mistake: 'Overlooking risk during an elevated mood' }),
      O('b', 'Focus only on whether he currently has a specific, detailed plan to end his own life and disregard the other risks for now', -1,
        { r: 'Narrow suicide-only focus misses risk', approach: 'Plan-only framing', why: 'Manic risk includes impulsive harm beyond suicide plans', keys: ['impulsive behaviors'], mistake: 'Assessing only one channel of risk' }),
      O('c', 'Defer any safety assessment until his mood has settled, since he is clearly far too elevated to answer the questions reliably', -2,
        { r: 'Deferring risk assessment is unsafe', approach: 'Delay for stability', why: 'Acute risk is assessed now, not later', keys: ['active risk'], mistake: 'Postponing an urgent safety assessment' }),
      O('d', 'Rely on his own reassurance that he feels great and is in full control, since he knows his own situation best of all', -2,
        { r: 'Manic self-report alone is unreliable here', approach: 'Defer to his reassurance', why: 'Impaired insight makes self-report insufficient', keys: ['minimizes concern'], mistake: 'Accepting reassurance without assessment' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate immediate treatment-planning priority?', ['R2'], [
      O('a', 'Coordinate an urgent psychiatric evaluation for pharmacologic management of the acute mania and to address safety', 3,
        { r: 'Urgent psychiatric/medication evaluation', approach: 'Prioritize acute stabilization', why: 'Acute mania requires prompt pharmacologic management', keys: ['acute manic episode', 'high-risk behavior'], mistake: 'Offering outpatient psychotherapy as the primary acute treatment' }),
      O('b', 'Begin weekly insight-oriented psychotherapy to help him understand the deeper roots of his recent grand business schemes', -1,
        { r: 'Insight work is not the acute priority', approach: 'Depth-work framing', why: 'Acute mania needs stabilization before such work', keys: ['acute episode'], mistake: 'Prioritizing insight during acute mania' }),
      O('c', 'Start him on a mood-stabilizing medication yourself and arrange to monitor his blood levels over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or manage levels', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Reassure the family that the episode will most likely pass on its own and simply schedule a routine follow-up in a month', -2,
        { r: 'Watchful waiting is unsafe in acute mania', approach: 'Watchful waiting', why: 'Untreated mania with risky behavior is dangerous', keys: ['active risk'], mistake: 'Delaying urgent care' }),
    ]),
    Q('q7', 'treatment', 'Once he is stabilized, which approach best supports relapse prevention?', ['R3'], [
      O('a', 'Interpersonal and social rhythm therapy to regularize his sleep-wake and daily routines and detect early warning signs', 3,
        { r: 'IPSRT stabilizes rhythms in maintenance', approach: 'Apply maintenance therapy', why: 'Regularizing social rhythms reduces bipolar relapse', keys: ['decreased need for sleep', 'rhythm disruption'], mistake: 'Ignoring sleep and routine in maintenance' }),
      O('b', 'A primarily cathartic approach focused on fully expressing the strong emotions that build up during his elevated periods', -1,
        { r: 'Catharsis is not the maintenance target', approach: 'Catharsis framing', why: 'Rhythm stability matters more for relapse prevention', keys: ['rhythm focus'], mistake: 'Choosing an approach without bipolar evidence' }),
      O('c', 'Encouraging him to push himself to stay highly productive and busy so that he does not slip back into a depressive low', -2,
        { r: 'Overactivity can trigger relapse', approach: 'Overdrive framing', why: 'Pushing activity can destabilize rhythms and mood', keys: ['rhythm disruption risk'], mistake: 'Promoting overactivity in bipolar care' }),
      O('d', 'A long course of exposure therapy aimed at reducing his anxiety about having another manic episode in the future', -1,
        { r: 'Exposure is not the indicated approach', approach: 'Exposure framing', why: 'It does not target rhythm stability or early signs', keys: ['mismatch to need'], mistake: 'Applying an unmatched protocol' }),
    ]),
    Q('q8', 'treatment', 'Darnell asks the counselor what mood stabilizer dose he should request. The most appropriate action is to:', ['R5'], [
      O('a', 'Explain that dosing is the prescriber’s decision and offer, with consent, to coordinate his questions and progress with them', 3,
        { r: 'Defer dosing; coordinate with consent', approach: 'Respect scope and coordinate', why: 'Medication dosing is outside counselor scope', keys: ['asks about dose', 'scope limit'], mistake: 'Advising on a specific medication dose' }),
      O('b', 'Suggest a typical starting dose that tends to work for most people who are in the middle of an acute manic episode like his', -2,
        { r: 'Naming a dose exceeds scope', approach: 'Prescriptive advice', why: 'Counselors do not recommend doses', keys: ['no prescriptive authority'], mistake: 'Overstepping into medication management' }),
      O('c', 'Tell him to ask for the lowest possible dose so that the medication will not slow him down or dampen his current productivity', -2,
        { r: 'Directing dosing is unsafe and out of scope', approach: 'Minimize-dose advice', why: 'Dose decisions require medical evaluation', keys: ['safety risk'], mistake: 'Giving specific pharmacologic direction' }),
      O('d', 'Say that medication dosing has nothing to do with counseling and decline to help him prepare for the conversation in any way', -1,
        { r: 'Refusing to coordinate abandons the need', approach: 'Flat refusal', why: 'Helping him frame questions is appropriate', keys: ['care coordination'], mistake: 'Declining to support communication with the prescriber' }),
    ]),
    Q('q9', 'counseling', 'Darnell insists nothing is wrong and that his family is overreacting. The most therapeutic stance is to:', ['R5'], [
      O('a', 'Engage him respectfully, find shared goals such as protecting his business, and link safety steps to what he values', 3,
        { r: 'Engage via shared goals despite low insight', approach: 'Build collaboration on his terms', why: 'Linking care to his goals improves engagement when insight is limited', keys: ['minimizes concern', 'values his ventures'], mistake: 'Arguing with him to force insight' }),
      O('b', 'Confront him directly with all the evidence that he is manic until he is finally forced to admit that something is wrong', -1,
        { r: 'Confrontation raises resistance', approach: 'Confront for insight', why: 'Direct confrontation tends to deepen denial', keys: ['low insight'], mistake: 'Using confrontation to force acceptance' }),
      O('c', 'Agree with him that his family is overreacting so that he feels understood and stays willing to keep working with you', -2,
        { r: 'Colluding ignores real risk', approach: 'Side with the denial', why: 'It abandons the genuine safety concern', keys: ['active risk'], mistake: 'Validating the denial to keep rapport' }),
      O('d', 'Avoid the disagreement entirely and redirect the conversation to neutral topics until he becomes more open to discussing it', -1,
        { r: 'Avoiding the issue forfeits engagement', approach: 'Topic avoidance', why: 'It misses the chance to link safety to his values', keys: ['unaddressed risk'], mistake: 'Sidestepping the central concern' }),
    ]),
    Q('q10', 'counseling', 'How can the counselor best involve Darnell’s family during this acute period?', ['R3'], [
      O('a', 'With his consent, provide psychoeducation about warning signs and engage the family in supporting the safety plan', 3,
        { r: 'Consented family psychoeducation and support', approach: 'Engage family with consent', why: 'Family involvement aids early detection and safety', keys: ['sister brought him in', 'prior episode'], mistake: 'Excluding family or sharing without consent' }),
      O('b', 'Share the full details of his sessions with the family right away so they can take charge of managing all of his behavior', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Over-disclose to family', why: 'Disclosure requires his informed consent', keys: ['no release'], mistake: 'Sharing clinical details without consent' }),
      O('c', 'Decline any family involvement at all and tell them this is entirely a private matter between you and the client alone', -1,
        { r: 'Excluding family forgoes useful support', approach: 'Blanket exclusion', why: 'Consented family involvement is valuable in bipolar care', keys: ['support system'], mistake: 'Refusing collateral that could help' }),
      O('d', 'Encourage the family to take over his finances and his major business decisions for him without first discussing it with him', -1,
        { r: 'Acting without his input oversteps', approach: 'Bypass the client', why: 'Decisions should involve him and respect his rights', keys: ['client autonomy'], mistake: 'Arranging control behind the client’s back' }),
    ]),
    Q('q11', 'ethics', 'Darnell’s grandiose driving and spending raise safety concerns. When does confidentiality most clearly yield?', ['R5'], [
      O('a', 'When there is a serious, foreseeable risk of harm to him or others, disclosure may be required to protect safety', 3,
        { r: 'Danger threshold can require disclosure', approach: 'Apply the harm exception', why: 'ACA permits disclosure to protect from serious, foreseeable harm', keys: ['risky driving', 'impulsive behavior'], mistake: 'Treating confidentiality as absolute when risk is serious' }),
      O('b', 'Whenever a family member simply asks for information, since concerned relatives are entitled to know how he is doing', -2,
        { r: 'Family requests do not override confidentiality', approach: 'Family-request framing', why: 'Concern alone does not authorize disclosure', keys: ['no valid basis'], mistake: 'Disclosing on a relative’s request alone' }),
      O('c', 'Never, because what a client shares in counseling must always remain completely confidential under all possible circumstances', -2,
        { r: 'Absolute confidentiality is inaccurate', approach: 'Absolutist framing', why: 'Confidentiality has safety-based limits', keys: ['danger exception exists'], mistake: 'Denying any limit to confidentiality' }),
      O('d', 'Whenever the counselor personally feels that disclosing the information would probably be in the client’s own best interest', -1,
        { r: 'A vague best-interest test is too loose', approach: 'Paternalistic framing', why: 'Disclosure rests on a defined harm threshold', keys: ['threshold-based'], mistake: 'Using personal judgment instead of the standard' }),
    ]),
    Q('q12', 'ethics', 'Given his current state, what is the most appropriate way to handle informed consent and decision-making?', ['R5'], [
      O('a', 'Assess his capacity to make decisions, involve him as fully as possible, and document consent and any capacity concerns', 3,
        { r: 'Assess capacity; maximize his involvement', approach: 'Address capacity and consent', why: 'Acute mania can impair capacity, which must be assessed, not assumed', keys: ['impaired insight', 'acute episode'], mistake: 'Either ignoring capacity or dismissing his voice entirely' }),
      O('b', 'Assume he completely lacks capacity and make all of the treatment decisions for him without involving him in the process', -2,
        { r: 'Presuming total incapacity overreaches', approach: 'Presume incapacity', why: 'Capacity is assessed and decisions involve him', keys: ['client rights'], mistake: 'Stripping the client of all input' }),
      O('c', 'Assume he has full capacity and proceed exactly as usual without giving his current manic state any particular consideration', -1,
        { r: 'Ignoring the manic state is unsafe', approach: 'Ignore the episode', why: 'Acute mania can affect decision-making capacity', keys: ['acute mania'], mistake: 'Overlooking capacity concerns' }),
      O('d', 'Postpone the entire consent discussion until the episode fully resolves, even though treatment needs to begin right away', -1,
        { r: 'Delaying consent stalls urgent care', approach: 'Defer consent entirely', why: 'Consent can be addressed now with capacity assessment', keys: ['urgent need'], mistake: 'Postponing consent when care is urgent' }),
    ]),
    Q('q13', 'ethics', 'Darnell wants the counselor to coordinate with the psychiatrist and his sister. What must come first?', ['R5'], [
      O('a', 'Obtain his specific, informed consent for each party before sharing any of his protected health information', 3,
        { r: 'Get a valid release for each party', approach: 'Secure informed consent first', why: 'Disclosure requires a valid release for each recipient', keys: ['multiple parties', 'protected information'], mistake: 'Coordinating before obtaining consent' }),
      O('b', 'Begin coordinating with both parties immediately, since he has already said in session that he wants you to work with them', -2,
        { r: 'Verbal interest is not a valid release', approach: 'Assume consent', why: 'Each disclosure needs a specific informed release', keys: ['no signed release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Share freely with the psychiatrist without a release because both of you are treating providers working on the same case', -1,
        { r: 'Coordination still requires consent', approach: 'Assume a treatment exception', why: 'A valid release is still needed to share information', keys: ['consent required'], mistake: 'Assuming shared care waives consent' }),
      O('d', 'Coordinate only with his sister for now and decide about the psychiatrist later without discussing the matter with him', -1,
        { r: 'Each disclosure is his informed choice', approach: 'Selective unilateral disclosure', why: 'The client decides each release, not the counselor alone', keys: ['client autonomy'], mistake: 'Making release decisions for the client' }),
    ]),
  ],
};

// ============================================================================
// D113 — Schizophrenia (F20.9) — Psychotic — hard
// ============================================================================
const D113 = {
  id: 'ncmhce-D113',
  title: 'Voices and growing suspicion in a college student',
  category: 'Psychotic',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Schizophrenia', code: 'F20.9' },
  diagnosis: { name: 'Schizophrenia', code: 'F20.9' },
  differentialOptions: [
    { id: 'do1', name: 'Schizophrenia', isCorrect: true },
    { id: 'do2', name: 'Schizoaffective Disorder, Bipolar Type', isCorrect: false },
    { id: 'do3', name: 'Brief Psychotic Disorder', isCorrect: false },
    { id: 'do4', name: 'Substance-Induced Psychotic Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Aaliyah Brooks, a 23-year-old college student, is referred after eight months of declining function. She reports hearing voices ' +
      'commenting on her actions, believes classmates are conspiring against her, and her speech at times becomes hard to follow.',
    session1:
      'Her grades have collapsed and she has withdrawn from friends, stopped attending most classes, and shows flattened affect and ' +
      'little motivation. The hallucinations and suspicion have been present nearly continuously for months rather than only briefly.',
    session2:
      'She denies sustained periods of elevated or depressed mood driving the symptoms, and a recent toxicology screen was negative. ' +
      'She is frightened by the voices, has limited insight that she is ill, and at times wonders whether life is worth continuing.',
  },
  diagnosticRationale:
    'Two or more active-phase symptoms—auditory hallucinations, persecutory delusions, and disorganized speech—with negative symptoms ' +
    'and marked functional decline persisting for at least six months, in the absence of a sustained mood episode and with a negative ' +
    'toxicology screen, meet DSM-5-TR criteria for schizophrenia rather than schizoaffective, brief psychotic, or substance-induced psychosis.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Schizophrenia: 2+ active-phase symptoms for 1 month, continuous signs 6 months, functional decline' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Psychosis and schizophrenia: antipsychotic medication, CBT for psychosis, and family intervention' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk in early psychosis' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: welfare, danger exceptions, and scope of practice' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Selecting a supportive, reality-based therapeutic approach and the working alliance' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a schizophrenia diagnosis?', ['R1'], [
      O('a', 'Two or more active-phase symptoms with continuous signs of disturbance and functional decline lasting at least six months', 3,
        { r: 'Symptom count, duration, and decline anchor it', approach: 'Confirm the full criteria', why: 'DSM-5-TR requires 2+ symptoms with 6 months of disturbance and decline', keys: ['eight months', 'grades collapsed'], mistake: 'Diagnosing schizophrenia from brief symptoms' }),
      O('b', 'That she can name the specific stressful event on campus that she believes first triggered all of these experiences', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['duration-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her hallucinations have become noticeably more intense over the past few days than they were a week ago', -1,
        { r: 'Recent intensity is not the criterion', approach: 'Recent-change framing', why: 'The six-month course is what matters', keys: ['months-long course'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Schizophrenia is defined by psychotic, not mood, criteria', keys: ['psychotic features'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes her presentation from schizoaffective disorder?', ['R1'], [
      O('a', 'Her psychotic symptoms are present without a sustained mood episode driving them across most of the illness course', 3,
        { r: 'Psychosis without sustained mood episodes', approach: 'Contrast with mood involvement', why: 'Schizoaffective requires concurrent mood episodes; she lacks them', keys: ['denies sustained mood episodes'], mistake: 'Calling it schizoaffective without mood episodes' }),
      O('b', 'The fact that she experiences auditory hallucinations of voices that comment on what she is doing throughout the day', -1,
        { r: 'Hallucinations occur in both', approach: 'Symptom-presence framing', why: 'Hallucinations are shared; mood involvement differs', keys: ['shared symptom'], mistake: 'Using hallucinations to differentiate' }),
      O('c', 'The persecutory belief that her classmates have been conspiring and working against her over the past several months', -1,
        { r: 'Delusions occur in both', approach: 'Delusion framing', why: 'Persecutory delusions appear in both disorders', keys: ['shared delusion'], mistake: 'Reading the delusion as decisive' }),
      O('d', 'The way her symptoms seem somewhat worse during the high-stress weeks of midterm and final examinations on campus', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from brief psychotic disorder?', ['R1'], [
      O('a', 'Her symptoms have persisted nearly continuously for months rather than resolving within the one-month brief-disorder window', 3,
        { r: 'Duration beyond one month rules out brief', approach: 'Apply the duration boundary', why: 'Brief psychotic disorder resolves within one month', keys: ['eight months of symptoms'], mistake: 'Diagnosing brief psychotic disorder outside its window' }),
      O('b', 'The fact that she has clearly experienced delusions and hallucinations during the course of her current illness', -1,
        { r: 'Both can involve these symptoms', approach: 'Symptom-presence framing', why: 'Both share psychotic symptoms; duration differs', keys: ['shared symptoms'], mistake: 'Using symptom type to differentiate' }),
      O('c', 'The significant distress and the fear that the frightening voices have clearly been causing her over recent months', -1,
        { r: 'Distress occurs in both', approach: 'Distress framing', why: 'Distress is nonspecific between them', keys: ['shared distress'], mistake: 'Reading distress as decisive' }),
      O('d', 'The trouble she has had keeping up with her coursework and her assignments since these experiences first began', 0,
        { r: 'Functional decline occurs in both', approach: 'Function framing', why: 'Decline does not separate the two by itself', keys: ['shared impairment'], mistake: 'Using decline alone to differentiate' }),
    ]),
    Q('q4', 'intake', 'What is the most important condition to rule out before confirming the diagnosis?', ['R1'], [
      O('a', 'A substance- or medication-induced psychosis, which her negative toxicology screen makes less likely but worth confirming', 3,
        { r: 'Exclude a substance-induced cause', approach: 'Rule out substances and medical causes', why: 'Substances and medical conditions can cause psychosis', keys: ['negative screen'], mistake: 'Skipping the substance and medical rule-out' }),
      O('b', 'A primary anxiety disorder that could be producing her suspicion that classmates are working against her on campus', -1,
        { r: 'Anxiety does not explain the psychosis', approach: 'Anxiety framing', why: 'The psychotic syndrome is not anxiety', keys: ['psychotic features'], mistake: 'Reducing psychosis to anxiety' }),
      O('c', 'A long-standing personality pattern that could account for why she has become so withdrawn and distrustful of others', -1,
        { r: 'Trait withdrawal is not the rule-out', approach: 'Personality framing', why: 'The active psychotic symptoms are primary', keys: ['active symptoms'], mistake: 'Attributing psychosis to personality' }),
      O('d', 'An eating disorder that might explain both her social withdrawal and the decline in her academic performance this year', 0,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
    ]),
    Q('q5', 'core', 'Given her statement that she wonders whether life is worth continuing, the most appropriate step is to:', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment, recognizing that suicide risk is elevated in early psychosis', 3,
        { r: 'Assess elevated risk in early psychosis', approach: 'Screen risk with structure', why: 'Suicide risk is high in early psychotic illness', keys: ['wonders if life is worth it', 'frightened by voices'], mistake: 'Overlooking risk amid psychotic symptoms' }),
      O('b', 'Treat the comment as a fleeting and ultimately harmless part of the distress that her frightening voices are causing her', -2,
        { r: 'Minimizing the ideation is unsafe', approach: 'Minimize as distress', why: 'It forecloses needed risk assessment', keys: ['unassessed ideation'], mistake: 'Dismissing the ideation' }),
      O('c', 'Move ahead with planning psychiatric referral first, assuming that treating the psychosis will resolve the thoughts on its own', -1,
        { r: 'Risk must be assessed before this', approach: 'Treatment-first framing', why: 'Safety assessment precedes referral planning', keys: ['active disclosure'], mistake: 'Sequencing referral ahead of safety' }),
      O('d', 'Ask her to sign a brief written promise that she will stay safe and call the clinic if the thoughts get worse this week', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk or assess it', keys: ['needs safety planning'], mistake: 'Substituting a contract for assessment' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation?', ['R2'], [
      O('a', 'Coordinate an urgent psychiatric evaluation for antipsychotic medication alongside psychosocial treatment and support', 3,
        { r: 'Antipsychotic eval plus psychosocial care', approach: 'Apply the guideline within scope', why: 'NICE establishes antipsychotics plus psychosocial care as first-line', keys: ['active psychosis', 'functional decline'], mistake: 'Offering counseling alone for schizophrenia' }),
      O('b', 'Begin intensive insight-oriented psychotherapy to help her uncover the deeper meaning behind the voices she has been hearing', -1,
        { r: 'Insight-only is not first-line', approach: 'Depth-work framing', why: 'Medication and psychosocial care come first', keys: ['active symptoms'], mistake: 'Prioritizing insight over indicated care' }),
      O('c', 'Start her on an antipsychotic medication yourself and arrange to monitor her response and side effects over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or monitor antipsychotics', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Recommend a course of weekly supportive counseling on its own as the complete treatment for her psychotic symptoms', -1,
        { r: 'Counseling alone is insufficient', approach: 'Counseling-only plan', why: 'Schizophrenia warrants medication plus psychosocial care', keys: ['under-treatment'], mistake: 'Omitting medication coordination' }),
    ]),
    Q('q7', 'treatment', 'Which psychosocial component is most appropriate to include in her plan?', ['R2'], [
      O('a', 'Cognitive behavioral therapy for psychosis and family psychoeducation to support coping and reduce relapse risk', 3,
        { r: 'CBT for psychosis plus family work', approach: 'Add evidence-based psychosocial care', why: 'NICE supports CBTp and family intervention alongside medication', keys: ['withdrawn from friends', 'family support'], mistake: 'Relying on medication with no psychosocial care' }),
      O('b', 'A primarily confrontational approach that repeatedly challenges her delusional beliefs until she finally rejects them as false', -2,
        { r: 'Confronting delusions can rupture alliance', approach: 'Confront the delusion', why: 'Direct confrontation tends to increase distress and mistrust', keys: ['persecutory beliefs'], mistake: 'Arguing the client out of delusions' }),
      O('c', 'An immediate, intensive exposure protocol aimed at the situations on campus that she has increasingly been avoiding lately', -1,
        { r: 'Exposure is not the indicated approach', approach: 'Exposure framing', why: 'It does not match the needs of active psychosis', keys: ['mismatch to need'], mistake: 'Applying an unmatched protocol' }),
      O('d', 'A long course of psychodynamic exploration of her early childhood as the primary route to resolving her current psychosis', -1,
        { r: 'Depth-only work is not first-line', approach: 'Depth-only framing', why: 'Evidence favors CBTp and family intervention', keys: ['active symptoms'], mistake: 'Prioritizing origins over indicated care' }),
    ]),
    Q('q8', 'treatment', 'What additional support is most appropriate to coordinate given her functional decline?', ['R2'], [
      O('a', 'Case management and supported education or employment services to help her re-engage with her studies and daily roles', 3,
        { r: 'Coordinate functional supports', approach: 'Address functional recovery', why: 'Supported education/employment aids recovery in psychosis', keys: ['grades collapsed', 'stopped attending'], mistake: 'Ignoring functional and role recovery' }),
      O('b', 'A recommendation that she withdraw from school indefinitely and simply rest at home until all of her symptoms fully resolve', -1,
        { r: 'Reflexive withdrawal can worsen function', approach: 'Disengagement framing', why: 'Supported engagement is generally preferable to total withdrawal', keys: ['role recovery'], mistake: 'Defaulting to complete disengagement' }),
      O('c', 'Detailed academic tutoring focused only on raising her grades, without addressing the symptoms driving the decline', -1,
        { r: 'Tutoring alone misses the cause', approach: 'Tutoring-only framing', why: 'Function depends on treating the underlying illness', keys: ['symptom-driven decline'], mistake: 'Treating the grades without the illness' }),
      O('d', 'A strict daily schedule of demanding tasks designed to push her to return to her full prior workload as quickly as possible', -1,
        { r: 'Overload can overwhelm her', approach: 'Push-hard framing', why: 'Graded, supported re-engagement is preferable', keys: ['needs graded support'], mistake: 'Demanding too much too soon' }),
    ]),
    Q('q9', 'counseling', 'During sessions Aaliyah is guarded and suspicious of the counselor. The most therapeutic stance is to:', ['R5'], [
      O('a', 'Build a steady, trustworthy alliance with consistency and transparency, going at a pace she can tolerate', 3,
        { r: 'Prioritize a trustworthy, paced alliance', approach: 'Build the working alliance', why: 'A reliable, transparent stance fosters trust with paranoia', keys: ['guarded', 'persecutory beliefs'], mistake: 'Pushing for disclosure faster than she can tolerate' }),
      O('b', 'Press her to explain her suspicions in full detail right away so that you can immediately correct the inaccurate beliefs', -1,
        { r: 'Pressing too fast can deepen mistrust', approach: 'Push for disclosure', why: 'Demanding detail can heighten suspicion', keys: ['fragile trust'], mistake: 'Moving faster than the alliance allows' }),
      O('c', 'Reassure her repeatedly that her classmates would never conspire against her and that her fears are completely unfounded', -1,
        { r: 'Flat reassurance rarely shifts delusions', approach: 'Reassure away the belief', why: 'Reassurance can feel dismissive and entrench mistrust', keys: ['delusional belief'], mistake: 'Arguing against the belief directly' }),
      O('d', 'Go along with her belief that the classmates are conspiring so that she feels understood and keeps coming to her sessions', -2,
        { r: 'Colluding with delusions is harmful', approach: 'Endorse the delusion', why: 'Agreeing reinforces the delusional belief', keys: ['reality testing'], mistake: 'Validating a delusion to keep rapport' }),
    ]),
    Q('q10', 'counseling', 'When Aaliyah describes the voices, the most therapeutic response is to:', ['R5'], [
      O('a', 'Acknowledge how distressing and real they feel to her without confirming or arguing about their objective accuracy', 3,
        { r: 'Validate the distress, stay neutral on content', approach: 'Empathize without colluding or confronting', why: 'Validating distress while staying neutral preserves trust and reality testing', keys: ['frightened by the voices'], mistake: 'Either confirming or flatly disputing the voices' }),
      O('b', 'Tell her plainly and repeatedly that the voices are simply not real and that she needs to stop paying any attention to them', -1,
        { r: 'Bluntly disputing can rupture trust', approach: 'Dismiss the experience', why: 'Flat denial of her experience can feel invalidating', keys: ['fragile alliance'], mistake: 'Confronting the symptom dismissively' }),
      O('c', 'Ask her detailed questions about exactly what the voices are instructing her to do so you can follow all of their commands', -2,
        { r: 'Treating commands as instructions is unsafe', approach: 'Act on the content', why: 'Engaging command content as directives is inappropriate', keys: ['command hallucinations'], mistake: 'Colluding with hallucination content' }),
      O('d', 'Agree with her that the voices are probably other real people somehow speaking to her from somewhere else nearby on campus', -2,
        { r: 'Endorsing the explanation reinforces the belief', approach: 'Confirm the misattribution', why: 'Agreeing entrenches the psychotic interpretation', keys: ['reality testing'], mistake: 'Validating a delusional explanation' }),
    ]),
    Q('q11', 'ethics', 'A voice reportedly tells Aaliyah to harm a specific classmate she names. The most appropriate action is to:', ['R4'], [
      O('a', 'Assess the risk carefully and follow duty-to-protect obligations, which may require warning or protective steps', 3,
        { r: 'Assess and act on duty to protect', approach: 'Apply duty-to-protect', why: 'A specific threat triggers assessment and protective duties', keys: ['command to harm', 'named target'], mistake: 'Treating an identifiable threat as fully confidential' }),
      O('b', 'Keep the disclosure entirely confidential, since anything she shares in counseling must always remain private no matter what', -2,
        { r: 'Confidentiality yields to a serious threat', approach: 'Absolutist framing', why: 'A serious, identifiable threat can require disclosure', keys: ['identifiable target'], mistake: 'Treating confidentiality as absolute when there is danger' }),
      O('c', 'Wait to see whether she mentions the same threat again at the next session before taking any action or assessing the risk', -2,
        { r: 'Delaying assessment of a threat is unsafe', approach: 'Wait-and-see framing', why: 'An identifiable threat requires prompt assessment', keys: ['active threat'], mistake: 'Postponing an urgent risk assessment' }),
      O('d', 'Immediately notify the classmate and the police without first assessing the seriousness or imminence of the actual risk', -1,
        { r: 'Act on assessed risk, not reflexively', approach: 'Reflexive disclosure', why: 'Protective steps follow a careful risk assessment', keys: ['proportionate response'], mistake: 'Disclosing before assessing the risk' }),
    ]),
    Q('q12', 'ethics', 'Aaliyah’s parents call asking for full details of her treatment. She is 23. Best response?', ['R4'], [
      O('a', 'Decline to disclose without her consent and, with her permission, explore appropriate, helpful family involvement', 3,
        { r: 'Protect confidentiality; pursue consented involvement', approach: 'Uphold consent and invite collaboration', why: 'As an adult, her information is protected absent a valid release', keys: ['adult client', 'no release'], mistake: 'Disclosing to parents without consent' }),
      O('b', 'Share the full details with her parents, since family members are clearly going to be central to supporting her recovery', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Over-disclose to family', why: 'Adult-client information requires her consent', keys: ['no valid release'], mistake: 'Sharing clinical details without authorization' }),
      O('c', 'Refuse any contact with the parents at all and tell them you cannot even acknowledge whether she is a client of yours', -1,
        { r: 'Total refusal forgoes consented collaboration', approach: 'Blanket refusal', why: 'With consent, family involvement can be valuable', keys: ['potential support'], mistake: 'Refusing collaboration that could help' }),
      O('d', 'Give the parents a general update on how she is doing while leaving out the most sensitive specific clinical details of her care', -2,
        { r: 'A general update is still a disclosure', approach: 'Soft disclosure', why: 'Only a valid release permits disclosure', keys: ['confidentiality'], mistake: 'Leaking information under the guise of an update' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in psychosis care. What is the most ethical course of action?', ['R4'], [
      O('a', 'Seek consultation and coordinate with a treatment team, referring for the components beyond his demonstrated competence', 3,
        { r: 'Consult, coordinate, and refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; psychosis care is team-based', keys: ['limited psychosis training', 'needs psychiatric care'], mistake: 'Managing complex psychosis alone without competence' }),
      O('b', 'Continue to manage all aspects of her care alone in order to preserve the continuity of the relationship he has built with her', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell her the symptoms are not serious enough to need a psychiatric referral and keep seeing her for supportive talks only', -2,
        { r: 'Minimizing the illness fails the client', approach: 'Downplay the severity', why: 'Active psychosis warrants psychiatric coordination', keys: ['active psychosis'], mistake: 'Underestimating the need for specialist care' }),
      O('d', 'Transfer her immediately to another provider with no explanation, consultation, or coordinated plan for the transition of care', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D114 — Anorexia Nervosa, Restricting Type (F50.01) — Eating — hard
// ============================================================================
const D114 = {
  id: 'ncmhce-D114',
  title: 'Restricting and a terror of weight gain in a young dancer',
  category: 'Eating',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Anorexia Nervosa, Restricting Type', code: 'F50.01' },
  diagnosis: { name: 'Anorexia Nervosa, Restricting Type', code: 'F50.01' },
  differentialOptions: [
    { id: 'do1', name: 'Anorexia Nervosa, Restricting Type', isCorrect: true },
    { id: 'do2', name: 'Bulimia Nervosa', isCorrect: false },
    { id: 'do3', name: 'Avoidant/Restrictive Food Intake Disorder', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
  ],
  narrative: {
    intake:
      'Hannah Schmidt, a 19-year-old ballet dancer, is referred by her studio after marked weight loss. She severely restricts her ' +
      'eating, follows rigid food rules, exercises intensely, and is intensely afraid of gaining weight despite being significantly underweight.',
    session1:
      'She sees herself as “too big” despite a clearly low body weight, weighs herself many times daily, and denies that anything is ' +
      'wrong. She reports feeling cold, fatigued, and lightheaded, and her menstrual periods have stopped over the past several months.',
    session2:
      'She does not binge or purge and restricts intake through fasting and exercise. She is ambivalent about treatment and fears that ' +
      'it means being “forced to get fat,” yet she is frightened by her recent dizziness and her family’s worry about her health.',
  },
  diagnosticRationale:
    'Persistent restriction of energy intake leading to significantly low body weight, an intense fear of gaining weight, and a ' +
    'disturbance in how her body weight is experienced with denial of the seriousness of her low weight, without binge-eating or ' +
    'purging, meets DSM-5-TR criteria for anorexia nervosa, restricting type, distinct from bulimia, ARFID, and a primary depressive disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Anorexia nervosa: restriction, significantly low weight, fear of weight gain, body-image disturbance' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Eating disorders: eating-disorder-focused psychotherapy with medical monitoring as a team' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk in anorexia nervosa' },
    { id: 'R4', source: 'Hays (Assessment)', detail: 'Clinical assessment procedures and coordinating medical evaluation' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: welfare, danger exceptions, and scope of practice' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an anorexia nervosa diagnosis?', ['R1'], [
      O('a', 'Restriction leading to significantly low weight with an intense fear of weight gain and a disturbed experience of her body', 3,
        { r: 'Restriction, low weight, fear, and body image', approach: 'Confirm the core criteria', why: 'DSM-5-TR requires low weight, fear of gain, and body-image disturbance', keys: ['marked weight loss', 'sees herself as too big'], mistake: 'Diagnosing from low weight alone' }),
      O('b', 'That she can identify the specific comment or event that she believes first caused her to start restricting her eating', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her low mood and loss of interest have been present nearly every day for at least the past two consecutive weeks', -1,
        { r: 'That threshold describes MDD, not anorexia', approach: 'Depression framing', why: 'Anorexia centers on eating and body image', keys: ['eating-focused picture'], mistake: 'Applying MDD criteria to an eating disorder' }),
      O('d', 'That her weight has fallen more sharply in the past week than it had over the previous several weeks before that', 0,
        { r: 'Rate of recent loss is not the criterion', approach: 'Recent-change framing', why: 'The criteria rest on the overall picture, not a one-week rate', keys: ['overall low weight'], mistake: 'Reading a recent rate as the criterion' }),
    ]),
    Q('q2', 'core', 'Which feature distinguishes her presentation from bulimia nervosa?', ['R1'], [
      O('a', 'She restricts through fasting and exercise without the recurrent binge-eating and compensatory purging seen in bulimia', 3,
        { r: 'Restriction without binge-purge cycles', approach: 'Contrast restriction with binge-purge', why: 'Bulimia involves recurrent binge-eating and purging', keys: ['no binge or purge', 'restricts and exercises'], mistake: 'Confusing restriction with a binge-purge pattern' }),
      O('b', 'The intense fear of gaining weight that clearly shapes the eating decisions she makes throughout each and every day', -1,
        { r: 'Fear of weight gain occurs in both', approach: 'Fear framing', why: 'Both disorders involve fear of weight gain', keys: ['shared fear'], mistake: 'Using the shared fear to differentiate' }),
      O('c', 'The strong dissatisfaction and distress that she experiences about the shape and the size of her own body', -1,
        { r: 'Body-image disturbance occurs in both', approach: 'Body-image framing', why: 'Body dissatisfaction is shared', keys: ['shared disturbance'], mistake: 'Reading body image as decisive' }),
      O('d', 'The way her eating tends to become even more restrictive during the especially busy weeks of her dance performances', 0,
        { r: 'Stress-linked change is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not separate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from avoidant/restrictive food intake disorder (ARFID)?', ['R1'], [
      O('a', 'Her restriction is driven by fear of weight gain and body-image disturbance, which are absent in ARFID', 3,
        { r: 'Weight/shape concern separates AN from ARFID', approach: 'Contrast the motivation for restriction', why: 'ARFID restriction is not driven by weight or shape concern', keys: ['fear of gaining weight', 'sees herself as too big'], mistake: 'Calling weight-driven restriction ARFID' }),
      O('b', 'The fact that her restricted eating has led to a significantly low body weight over the past several months of dieting', -1,
        { r: 'Low weight can occur in both', approach: 'Low-weight framing', why: 'Both can produce low weight; the driver differs', keys: ['shared low weight'], mistake: 'Using low weight to differentiate' }),
      O('c', 'The rigid rules and rituals that she follows around what she will allow herself to eat and when she will eat it', -1,
        { r: 'Rigid eating patterns occur in both', approach: 'Ritual framing', why: 'Both can involve rigid eating patterns', keys: ['shared rigidity'], mistake: 'Reading rituals as decisive' }),
      O('d', 'The physical consequences she now reports, such as feeling cold, fatigued, and lightheaded much of the time lately', 0,
        { r: 'Physical effects of restriction occur in both', approach: 'Physical-sign framing', why: 'Malnutrition effects are nonspecific', keys: ['shared physical signs'], mistake: 'Using physical signs to differentiate' }),
    ]),
    Q('q4', 'intake', 'Given her dizziness, amenorrhea, and significantly low weight, what is the most important first step?', ['R4'], [
      O('a', 'Coordinate an urgent medical evaluation, since anorexia carries serious medical risks that require monitoring and clearance', 3,
        { r: 'Medical safety is the first priority', approach: 'Prioritize medical evaluation', why: 'Anorexia has high medical risk requiring monitoring', keys: ['dizziness', 'amenorrhea', 'low weight'], mistake: 'Beginning psychotherapy without a medical workup' }),
      O('b', 'Begin weekly cognitive therapy for her body-image concerns and defer any medical evaluation until therapy is well underway', -2,
        { r: 'Deferring medical care is dangerous', approach: 'Therapy-first framing', why: 'Medical instability must be assessed before proceeding', keys: ['medical risk'], mistake: 'Postponing essential medical evaluation' }),
      O('c', 'Order laboratory tests and an electrocardiogram yourself so that you can personally evaluate her current medical stability', -1,
        { r: 'Ordering tests exceeds counselor scope', approach: 'Order medical tests', why: 'Counselors coordinate but do not order labs', keys: ['scope limit'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Accept her reassurance that she feels basically fine and proceed without arranging any medical evaluation for the time being', -2,
        { r: 'Relying on her reassurance is unsafe', approach: 'Defer to her reassurance', why: 'Denial of severity is part of the disorder', keys: ['denies a problem'], mistake: 'Skipping a medical workup on her say-so' }),
    ]),
    Q('q5', 'intake', 'Given the seriousness of her condition, what additional risk assessment is most important?', ['R3'], [
      O('a', 'A structured suicide-risk assessment, recognizing that anorexia nervosa carries elevated suicide risk', 3,
        { r: 'Assess elevated suicide risk', approach: 'Screen risk with structure', why: 'Anorexia carries elevated suicide mortality', keys: ['serious illness', 'ambivalence and distress'], mistake: 'Assessing the eating disorder without screening risk' }),
      O('b', 'A detailed inventory of her exact daily caloric intake so the counselor can calculate precisely how restricted her diet is', -1,
        { r: 'Calorie counting is not the priority', approach: 'Intake-tally framing', why: 'Risk and medical safety come first', keys: ['safety first'], mistake: 'Prioritizing calorie detail over risk' }),
      O('c', 'A complete reconstruction of her family’s eating habits across at least the past three generations of her family history', 0,
        { r: 'Exhaustive family history is low yield now', approach: 'Family-history framing', why: 'It does not address immediate risk', keys: ['no urgent yield'], mistake: 'Prioritizing depth history over risk' }),
      O('d', 'A precise log of every exercise session she completes so the counselor can quantify exactly how much she is over-exercising', -1,
        { r: 'Exercise logging is secondary now', approach: 'Activity-tally framing', why: 'It does not address suicide or medical risk', keys: ['risk first'], mistake: 'Confusing monitoring data with risk assessment' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment framework for Hannah?', ['R2'], [
      O('a', 'A coordinated team approach with eating-disorder-focused psychotherapy and ongoing medical and nutritional monitoring', 3,
        { r: 'Team-based care with medical monitoring', approach: 'Apply the guideline', why: 'NICE supports team-based eating-disorder care with medical oversight', keys: ['significantly low weight', 'medical risk'], mistake: 'Providing solo psychotherapy without a team' }),
      O('b', 'Solo outpatient counseling focused only on her self-esteem, without any medical monitoring or nutritional involvement at all', -2,
        { r: 'Solo care without monitoring is unsafe', approach: 'Counseling-only framing', why: 'Medical monitoring is essential in anorexia', keys: ['medical risk'], mistake: 'Omitting medical oversight' }),
      O('c', 'A primarily insight-oriented exploration of her childhood as the single main route to resolving her restrictive eating', -1,
        { r: 'Insight-only is not first-line', approach: 'Depth-only framing', why: 'Eating-disorder-focused care is indicated', keys: ['symptom-focused need'], mistake: 'Prioritizing origins over indicated care' }),
      O('d', 'A strict behavioral contract that withholds all therapy sessions on any week that she fails to gain a set amount of weight', -1,
        { r: 'Punitive contingencies can harm engagement', approach: 'Punitive-contract framing', why: 'Coercive contingencies are not the indicated model', keys: ['engagement risk'], mistake: 'Using punishment to force weight gain' }),
    ]),
    Q('q7', 'treatment', 'What is the counselor’s appropriate role regarding her weight restoration?', ['R5'], [
      O('a', 'Support the medically supervised plan and address the eating-disorder cognitions, leaving refeeding to the medical team', 3,
        { r: 'Support medical plan; treat cognitions', approach: 'Stay in role within the team', why: 'Refeeding is medically managed; counselors address cognitions', keys: ['team-based care', 'body-image disturbance'], mistake: 'Managing refeeding outside the medical team' }),
      O('b', 'Personally set her specific daily calorie and weight-gain targets and adjust them yourself each week based on her progress', -2,
        { r: 'Setting medical targets exceeds scope', approach: 'Manage refeeding', why: 'Calorie and weight targets are medically managed', keys: ['scope limit'], mistake: 'Taking on medical management' }),
      O('c', 'Avoid the topic of weight and eating entirely and focus only on unrelated stressors so she does not feel any pressure at all', -1,
        { r: 'Avoiding the core leaves it untreated', approach: 'Avoidant framing', why: 'Eating and body cognitions are central targets', keys: ['core symptoms'], mistake: 'Sidestepping the central work' }),
      O('d', 'Tell her she simply needs to eat more and frame the entire problem as a straightforward matter of willpower and discipline', -2,
        { r: 'Willpower framing is inaccurate and harmful', approach: 'Willpower framing', why: 'Anorexia is not a matter of willpower', keys: ['clinical disorder'], mistake: 'Moralizing about eating' }),
    ]),
    Q('q8', 'treatment', 'A central psychotherapeutic target in her treatment would most appropriately be:', ['R2'], [
      O('a', 'The over-evaluation of weight and shape that drives her restriction, addressed with eating-disorder-focused methods', 3,
        { r: 'Target over-evaluation of weight and shape', approach: 'Address the maintaining cognition', why: 'Over-evaluation of weight and shape maintains anorexia', keys: ['sees herself as too big', 'rigid food rules'], mistake: 'Treating only the weight number, not the cognition' }),
      O('b', 'Helping her design an even more detailed and structured set of food rules so that she feels more in control of her eating', -2,
        { r: 'More rules reinforce the disorder', approach: 'Elaborate the rules', why: 'Rigid rules maintain the restriction', keys: ['rigid food rules'], mistake: 'Reinforcing the disordered control' }),
      O('c', 'Teaching her to weigh herself even more frequently so she can closely monitor and stay fully aware of any change in her weight', -2,
        { r: 'Frequent weighing fuels the disorder', approach: 'Body-checking', why: 'Repeated weighing reinforces the over-evaluation', keys: ['weighs many times daily'], mistake: 'Encouraging body-checking' }),
      O('d', 'Focusing mainly on relaxation skills so that she feels calmer at mealtimes without addressing her beliefs about her body', -1,
        { r: 'Relaxation alone misses the core', approach: 'Arousal-only framing', why: 'It does not address the maintaining cognition', keys: ['core belief untreated'], mistake: 'Treating arousal while ignoring cognition' }),
    ]),
    Q('q9', 'counseling', 'Hannah is ambivalent and fears treatment means being “forced to get fat.” The most therapeutic response is to:', ['R2'], [
      O('a', 'Validate the fear, explore her ambivalence, and connect treatment to goals she values such as dancing and feeling less dizzy', 3,
        { r: 'Validate fear; link care to her values', approach: 'Engage ambivalence collaboratively', why: 'Connecting care to her goals builds engagement despite fear', keys: ['fears getting fat', 'frightened by dizziness'], mistake: 'Either dismissing the fear or coercing compliance' }),
      O('b', 'Tell her firmly that she has no choice in the matter and that she simply must gain weight whether she likes it or not', -1,
        { r: 'Coercive framing damages engagement', approach: 'Coerce compliance', why: 'Coercion tends to increase resistance', keys: ['ambivalence'], mistake: 'Forcing the goal before engaging' }),
      O('c', 'Agree to set the goal of weight gain aside entirely for now so that she stays comfortable and keeps coming to her sessions', -2,
        { r: 'Dropping the core goal is unsafe', approach: 'Concede the avoidance', why: 'Her medical risk makes this unsafe to set aside', keys: ['medical risk'], mistake: 'Abandoning a safety-critical goal' }),
      O('d', 'Provide her with detailed nutritional facts and statistics to logically convince her that weight gain is necessary for health', -1,
        { r: 'Facts alone rarely resolve ambivalence', approach: 'Didactic persuasion', why: 'Evoking her own motivation works better', keys: ['emotional reasoning'], mistake: 'Substituting information for engagement' }),
    ]),
    Q('q10', 'counseling', 'Hannah minimizes her symptoms and says her family is overreacting. The most therapeutic stance is to:', ['R2'], [
      O('a', 'Engage her respectfully, validate her autonomy, and gently link the medical findings to the goals she cares about', 3,
        { r: 'Engage and link findings to her goals', approach: 'Build collaboration despite denial', why: 'Linking objective findings to her values aids engagement', keys: ['denies a problem', 'values dancing'], mistake: 'Arguing with her to force insight' }),
      O('b', 'Confront her with all the evidence that she is seriously ill until she finally admits that her situation is dangerous', -1,
        { r: 'Confrontation raises resistance', approach: 'Confront for insight', why: 'Direct confrontation tends to deepen denial', keys: ['low insight'], mistake: 'Using confrontation to force acceptance' }),
      O('c', 'Agree with her that her family is overreacting so that she feels supported and stays engaged in the work with you', -2,
        { r: 'Colluding ignores real medical risk', approach: 'Side with the denial', why: 'It abandons the genuine safety concern', keys: ['medical risk'], mistake: 'Validating denial to keep rapport' }),
      O('d', 'Avoid the disagreement entirely and steer the conversation toward neutral topics until she is more willing to discuss it', -1,
        { r: 'Avoiding the issue forfeits engagement', approach: 'Topic avoidance', why: 'It misses the chance to link findings to her values', keys: ['unaddressed risk'], mistake: 'Sidestepping the central concern' }),
    ]),
    Q('q11', 'ethics', 'If Hannah’s medical status becomes life-threatening and she refuses care, the most appropriate consideration is:', ['R5'], [
      O('a', 'That imminent risk to life can justify protective steps, including involving medical providers despite her refusal', 3,
        { r: 'Imminent danger can justify protective action', approach: 'Apply the harm exception', why: 'Serious, imminent medical risk can warrant protective steps', keys: ['life-threatening status', 'refuses care'], mistake: 'Treating autonomy as absolute when life is at risk' }),
      O('b', 'That her refusal must always be honored without exception, since competent adults can decline any care for any reason', -2,
        { r: 'Autonomy is not absolute at imminent risk', approach: 'Absolutist autonomy', why: 'Imminent life threat can override under safety duties', keys: ['imminent danger'], mistake: 'Treating refusal as absolute despite danger' }),
      O('c', 'That the counselor should keep the deterioration confidential to preserve her trust and avoid upsetting her any further', -2,
        { r: 'Concealing danger is unsafe', approach: 'Preserve secrecy', why: 'Imminent medical risk requires protective action', keys: ['safety duty'], mistake: 'Prioritizing secrecy over safety' }),
      O('d', 'That the counselor should personally take over decisions about her medical care without involving the medical team at all', -1,
        { r: 'Counselors coordinate, not direct medical care', approach: 'Override the team', why: 'Medical decisions belong with the medical providers', keys: ['scope limit'], mistake: 'Acting outside the counselor role' }),
    ]),
    Q('q12', 'ethics', 'The counselor has limited training in eating-disorder treatment. The most ethical course of action is to:', ['R5'], [
      O('a', 'Seek consultation and coordinate with or refer to clinicians and a team competent in eating-disorder care', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; anorexia needs specialized team care', keys: ['limited eating-disorder training', 'high medical risk'], mistake: 'Managing high-risk anorexia alone without competence' }),
      O('b', 'Continue treating her entirely on his own to preserve the continuity of the relationship he has already established with her', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Reassure her that her condition is not serious enough to require any specialized care and keep seeing her for supportive talks', -2,
        { r: 'Minimizing the illness fails the client', approach: 'Downplay the severity', why: 'Anorexia carries serious medical risk', keys: ['medical risk'], mistake: 'Underestimating the need for specialist care' }),
      O('d', 'Transfer her immediately to another provider with no explanation, consultation, or coordinated plan for her transition of care', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
    Q('q13', 'ethics', 'Hannah, an adult, asks that her studio and her parents not be told anything about her treatment. Best response?', ['R5'], [
      O('a', 'Honor her confidentiality as an adult while clarifying the limited situations, such as imminent danger, that could require disclosure', 3,
        { r: 'Protect confidentiality; state its limits', approach: 'Uphold confidentiality and explain limits', why: 'As an adult she controls disclosure, except safety-based limits', keys: ['adult client', 'requests privacy'], mistake: 'Either disclosing without consent or promising absolute secrecy' }),
      O('b', 'Promise her that nothing whatsoever will ever be disclosed to anyone under any circumstances throughout her entire treatment', -2,
        { r: 'Absolute confidentiality is inaccurate', approach: 'Overpromise privacy', why: 'Safety-based limits to confidentiality exist', keys: ['danger exception'], mistake: 'Guaranteeing unconditional secrecy' }),
      O('c', 'Inform her studio and her parents anyway, since they referred her and clearly have a legitimate interest in her recovery', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Disclose to referrers', why: 'A referral does not authorize disclosure', keys: ['no valid release'], mistake: 'Disclosing to those who referred her' }),
      O('d', 'Tell her that because the studio referred her, the studio is automatically entitled to regular updates on how she is doing', -2,
        { r: 'Referral does not entitle a third party to information', approach: 'Referrer-entitlement framing', why: 'Only a valid release permits disclosure', keys: ['confidentiality'], mistake: 'Assuming referrers are owed updates' }),
    ]),
  ],
};

module.exports = { CASES: [D110, D111, D112, D113, D114] };
