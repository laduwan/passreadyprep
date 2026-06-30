// ============================================================================
// deep-cases-batch-12.js — NCMHCE deep cases, batch 12 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). On the
// reserved id block ncmhce-D160+, adding distinct diagnoses not yet covered:
//   ncmhce-D160  Brief Psychotic Disorder (Psychotic)
//   ncmhce-D161  Conduct Disorder, Adolescent-Onset Type (Disruptive)
//   ncmhce-D162  Trichotillomania (OCD-Related)
//   ncmhce-D163  Tobacco Use Disorder, Moderate (Substance)
//   ncmhce-D164  Bipolar I Disorder, Current Episode Depressed (Bipolar)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-12.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-12');console.log(validateExamDepthSet(CASES))"
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
// D160 — Brief Psychotic Disorder (F23) — Psychotic — hard
// ============================================================================
const D160 = {
  id: 'ncmhce-D160',
  title: 'Sudden psychosis after an acute stressor, then recovery',
  category: 'Psychotic',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Brief Psychotic Disorder', code: 'F23' },
  diagnosis: { name: 'Brief Psychotic Disorder', code: 'F23' },
  differentialOptions: [
    { id: 'do1', name: 'Brief Psychotic Disorder', isCorrect: true },
    { id: 'do2', name: 'Schizophreniform Disorder', isCorrect: false },
    { id: 'do3', name: 'Schizophrenia', isCorrect: false },
    { id: 'do4', name: 'Substance-Induced Psychotic Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Aisha Haddad, a 26-year-old nurse, is referred after a sudden onset of delusions and disorganized speech that began days after a severe ' +
      'car accident. The symptoms appeared abruptly in someone with no prior psychiatric history and have already lasted just under two weeks.',
    session1:
      'Her psychotic symptoms came on within two weeks of a marked stressor and have not yet persisted a full month. A medical and toxicology ' +
      'workup was unremarkable, she denies substance use, and between episodes she shows a full return toward her usual level of functioning.',
    session2:
      'She is frightened and confused by what happened and worried it means she "is losing her mind permanently." Her family is supportive and ' +
      'present, and she is beginning to reconstitute, though she remains shaken and asks what this means for her ability to return to work.',
  },
  diagnosticRationale:
    'The sudden onset of one or more positive psychotic symptoms lasting at least a day but less than one month, with eventual full return to ' +
    'premorbid functioning, following a marked stressor and not attributable to a substance or medical condition, meets DSM-5-TR criteria for ' +
    'brief psychotic disorder—distinct from schizophreniform disorder, schizophrenia, and a substance-induced psychotic disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Brief psychotic disorder: 1+ positive symptom, 1 day to <1 month, full return to function, not substance/medical' },
    { id: 'R2', source: 'NICE guidelines', detail: 'First-episode psychosis: antipsychotic medication and psychological support within coordinated early-intervention care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening during and after an acute psychotic episode' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'B.2. and C.2.: coordination of care, danger exceptions, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance and supportive, recovery-oriented engagement' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a brief psychotic disorder diagnosis?', ['R1'], [
      O('a', 'A sudden onset of positive psychotic symptoms lasting at least a day but under a month, with return to function', 3,
        { r: 'Sudden onset, under a month, returns to baseline', approach: 'Confirm the core criteria', why: 'Brief psychotic disorder requires sudden positive symptoms lasting 1 day to under a month with a return to baseline', keys: ['abrupt onset after the accident', 'just under two weeks'], mistake: 'Diagnosing without confirming the duration and the return toward baseline' }),
      O('b', 'That she can identify the single childhood event she believes first made her vulnerable to psychosis', -1,
        { r: 'A remote precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a remote trigger as the diagnostic test' }),
      O('c', 'That her symptoms have grown a little more intense over the past few days than they were the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The duration window, not a recent uptick, defines it', keys: ['duration window'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Brief psychotic disorder is defined by psychotic symptoms, not mood criteria', keys: ['psychotic-spectrum diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from schizophreniform disorder?', ['R1'], [
      O('a', 'Her symptoms are resolving within a month, short of the one-to-six-month duration that schizophreniform requires', 3,
        { r: 'Under a month versus one to six months', approach: 'Contrast the duration windows', why: 'Schizophreniform lasts one to six months; her episode is resolving within a month', keys: ['under two weeks', 'returning to baseline'], mistake: 'Overlooking the shorter duration that distinguishes the two' }),
      O('b', 'The fact that she has experienced delusions and disorganized speech during this acute episode of her illness', -1,
        { r: 'Positive symptoms occur in both', approach: 'Symptom-presence framing', why: 'Delusions and disorganization occur in both; the duration differs', keys: ['shared feature'], mistake: 'Using positive symptoms to differentiate' }),
      O('c', 'The fear and confusion that she feels about what has been happening to her during this difficult time', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress occurs in both; the duration differs', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her symptoms felt a little worse during the most stressful days right after the accident occurred', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from schizophrenia?', ['R1'], [
      O('a', 'Her onset is acute and time-limited with a return to baseline, not the persistent course and decline of schizophrenia', 3,
        { r: 'Time-limited with recovery versus persistent decline', approach: 'Contrast course and outcome', why: 'Schizophrenia involves a persistent course with functional decline; her episode is acute and resolving', keys: ['no prior history', 'returning toward usual function'], mistake: 'Treating a brief, resolving episode as schizophrenia' }),
      O('b', 'The fact that she has had delusions and some disorganized thinking during this current period of illness', -1,
        { r: 'Psychosis occurs in both', approach: 'Psychosis framing', why: 'Psychotic symptoms occur in both; the course differs', keys: ['shared feature'], mistake: 'Using psychosis to differentiate' }),
      O('c', 'The trouble she has had making full sense of things while she has been acutely unwell over these days', -1,
        { r: 'Acute confusion occurs in both', approach: 'Confusion framing', why: 'Acute confusion can occur in both; the course differs', keys: ['shared experience'], mistake: 'Reading confusion as decisive' }),
      O('d', 'The way her symptoms have been a bit worse in the evenings than they are earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'What is the most important condition to exclude before confirming the diagnosis?', ['R1'], [
      O('a', 'A substance- or medical-induced psychosis, which her unremarkable workup and denial of use make less likely but worth confirming', 3,
        { r: 'Exclude substance and medical causes', approach: 'Rule out organic and substance causes', why: 'Substances and medical conditions can produce acute psychosis and must be excluded', keys: ['unremarkable workup', 'denies substance use'], mistake: 'Skipping the substance and medical rule-out' }),
      O('b', 'A previously undetected specific phobia that might better account for her fear and disorganized thinking', -1,
        { r: 'Phobia does not explain psychosis', approach: 'Phobia framing', why: 'A phobia does not account for delusions and disorganization', keys: ['psychotic features'], mistake: 'Reducing psychosis to a phobia' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of all of her psychotic symptoms', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurodevelopmental disorder that could explain why the symptoms came on so suddenly after the accident', 0,
        { r: 'Neurodevelopmental framing is implausible', approach: 'Developmental framing', why: 'The acute stress-linked onset fits brief psychotic disorder', keys: ['acute onset'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'intake', 'During and after an acute psychotic episode, what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment of current ideation, intent, plan, and protective factors now', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Acute psychotic episodes carry elevated risk, so current risk is assessed directly', keys: ['frightened and shaken', 'acute episode'], mistake: 'Failing to assess current suicide risk during and after the episode' }),
      O('b', 'Assume the risk is negligible because she is beginning to reconstitute and her family is present and supportive', -2,
        { r: 'Assuming low risk is unsafe', approach: 'Dismissal framing', why: 'Reconstitution and support do not remove the need for structured assessment', keys: ['ongoing risk factors'], mistake: 'Dismissing risk on reassurance' }),
      O('c', 'Defer any risk assessment until the psychosis has fully resolved and she has been stable for several months', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after the psychosis resolves', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on her return-to-work questions for now and plan to return to safety later at some point', -1,
        { r: 'Sequencing safety behind work questions is unsafe', approach: 'Single-issue framing', why: 'Work questions matter, but current safety is assessed now', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation?', ['R2'], [
      O('a', 'Coordinate an urgent psychiatric evaluation for medication alongside supportive psychological care and monitoring', 3,
        { r: 'Psychiatric eval plus supportive care', approach: 'Apply the guideline within scope', why: 'Acute psychosis warrants psychiatric evaluation for medication with supportive care and monitoring', keys: ['acute psychotic episode', 'frightened client'], mistake: 'Offering counseling alone for an acute psychotic episode' }),
      O('b', 'Begin intensive insight-oriented therapy to help her uncover the deeper meaning of the delusions she experienced', -1,
        { r: 'Insight-only is not first-line', approach: 'Depth-work framing', why: 'Psychiatric evaluation and supportive care come first', keys: ['acute episode'], mistake: 'Prioritizing insight over indicated care' }),
      O('c', 'Start her on an antipsychotic medication yourself and arrange to monitor her response and side effects over the weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or monitor antipsychotics', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Reassure her that nothing further is needed and that she can simply return to her nursing shifts immediately tomorrow', -2,
        { r: 'Premature clearance is unsafe', approach: 'Minimize framing', why: 'An acute episode warrants evaluation and monitoring before any return to high-stakes work', keys: ['recent psychosis'], mistake: 'Clearing her prematurely without evaluation' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor address her fear that she is "losing her mind permanently"?', ['R5'], [
      O('a', 'Provide accurate psychoeducation about the often time-limited course while supporting her through the uncertainty', 3,
        { r: 'Accurate psychoeducation and support', approach: 'Inform and support', why: 'Honest psychoeducation about the frequently time-limited course reduces catastrophic fear while validating uncertainty', keys: ['fears losing her mind', 'returning to baseline'], mistake: 'Either guaranteeing an outcome or amplifying her catastrophic fear' }),
      O('b', 'Tell her with certainty that this will never, ever happen again and that her recovery is now completely guaranteed', -1,
        { r: 'False certainty is misleading', approach: 'Overpromise framing', why: 'Guaranteeing an outcome is not honest and can erode trust if symptoms recur', keys: ['honest framing'], mistake: 'Offering a guarantee you cannot make' }),
      O('c', 'Agree that she is probably developing a permanent, lifelong psychotic illness so that she prepares for the worst', -2,
        { r: 'Catastrophizing is harmful', approach: 'Catastrophize framing', why: 'Endorsing a worst-case prognosis is inaccurate and harmful', keys: ['often time-limited'], mistake: 'Amplifying a catastrophic, unsupported prognosis' }),
      O('d', 'Avoid the topic of prognosis entirely so that the sessions never touch on her fears about the future at all', -1,
        { r: 'Avoidance leaves the fear unaddressed', approach: 'Avoidant framing', why: 'Her fears about the future are central to address, not avoid', keys: ['engage the fear'], mistake: 'Sidestepping a key concern' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor handle her question about returning to work?', ['R4'], [
      O('a', 'Coordinate with her treatment team and employer process so that any return is guided by appropriate clinical input', 3,
        { r: 'Coordinate a clinically guided return', approach: 'Coordinate within scope', why: 'A safe return after acute psychosis is guided by the treatment team and appropriate workplace processes', keys: ['nurse', 'recent acute episode'], mistake: 'Clearing or barring her from work unilaterally without coordination' }),
      O('b', 'Tell her to return to her full nursing duties right away, since she is feeling a bit better than she did last week', -2,
        { r: 'Unilateral clearance is unsafe', approach: 'Premature-clearance framing', why: 'A high-stakes return is clinically guided, not based on feeling somewhat better', keys: ['clinical guidance'], mistake: 'Clearing her unilaterally and prematurely' }),
      O('c', 'Tell her she can never return to nursing again and should plan to change careers entirely because of this episode', -2,
        { r: 'A permanent bar is unwarranted', approach: 'Catastrophize framing', why: 'A single resolving episode does not warrant a permanent career bar', keys: ['often time-limited'], mistake: 'Imposing an unwarranted, catastrophic restriction' }),
      O('d', 'Tell her the decision is entirely up to her alone and that no clinical input is needed before she goes back to work', -1,
        { r: 'No clinical input understates the need', approach: 'Hands-off framing', why: 'A clinically informed, coordinated decision is appropriate after acute psychosis', keys: ['coordinated decision'], mistake: 'Omitting needed clinical coordination' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the psychiatrist and other providers?', ['R4'], [
      O('a', 'Obtain her informed consent and a release, then collaborate with the team and share what is needed for her care', 3,
        { r: 'Consent and release before coordinating', approach: 'Secure consent first', why: 'Coordination requires a valid release before sharing protected information', keys: ['multiple providers', 'acute episode'], mistake: 'Coordinating before obtaining consent' }),
      O('b', 'Share her full history with everyone involved right away, since coordinating her care is plainly in her interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Avoid contacting the psychiatrist at all so that her counseling stays completely separate from her medical care', -1,
        { r: 'No coordination undercuts team care', approach: 'Siloed-care framing', why: 'Consented coordination benefits care here', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Release her complete record to every provider so they each hold the full picture of all of her treatment', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure is consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
    Q('q10', 'counseling', 'Aisha tearfully says she is ashamed and feels broken by what happened. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with empathy, normalize that acute stress can trigger such episodes, and reinforce her recovery and strengths', 3,
        { r: 'Empathize, normalize, reinforce recovery', approach: 'Reduce shame and instill hope', why: 'Empathic normalizing and reinforcing her recovery counters shame without minimizing her experience', keys: ['ashamed and feels broken', 'reconstituting'], mistake: 'Either minimizing the experience or reinforcing the shame' }),
      O('b', 'Tell her she has no reason at all to feel ashamed and that she should simply put the whole episode behind her now', -1,
        { r: 'Dismissing the shame invalidates her', approach: 'Minimize framing', why: 'Telling her to just move on invalidates the feeling and the alliance', keys: ['validate then support'], mistake: 'Minimizing a central feeling' }),
      O('c', 'Agree that the episode probably does mean something is permanently broken in her so she can begin to accept it', -2,
        { r: 'Endorsing brokenness is harmful', approach: 'Catastrophize framing', why: 'Reinforcing a sense of permanent brokenness deepens shame and hopelessness', keys: ['recovery-oriented'], mistake: 'Validating a harmful self-belief' }),
      O('d', 'Change the subject to something lighter so that she does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'Her shame can be engaged and supported, not avoided', keys: ['engage the distress'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Aisha during her recovery?', ['R5'], [
      O('a', 'Support stabilization, coping, and her support network while monitoring for any return of symptoms', 3,
        { r: 'Stabilization, coping, and monitoring', approach: 'Recovery-oriented support', why: 'Supporting coping and the support network while monitoring for recurrence fits the recovery phase', keys: ['supportive family', 'reconstituting'], mistake: 'Pushing intensive depth work before stabilization is consolidated' }),
      O('b', 'Press her to relive and analyze the accident and the psychosis in vivid detail in each of the early sessions', -1,
        { r: 'Premature reliving can destabilize', approach: 'Reliving framing', why: 'Detailed reliving before stabilization can be destabilizing', keys: ['stabilization first'], mistake: 'Forcing intensive processing too early' }),
      O('c', 'Focus the sessions mainly on cataloguing the content of every delusion she had in exhaustive detail each week', -1,
        { r: 'Dwelling on delusional content is not the work', approach: 'Content-focus framing', why: 'Elaborating delusional content is not the recovery-phase priority', keys: ['recovery focus'], mistake: 'Centering the work on the psychotic content' }),
      O('d', 'Tell her counseling cannot help unless she first agrees to take medication exactly as the psychiatrist directs', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Supportive recovery work proceeds alongside coordinated medication decisions', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'During recovery Aisha makes a specific, credible threat to harm an identifiable person. The most appropriate action is to:', ['R4'], [
      O('a', 'Assess the risk and follow duty-to-protect obligations, which may require warning or other protective steps', 3,
        { r: 'Assess and act on duty to protect', approach: 'Apply duty-to-protect', why: 'A serious, specific, identifiable threat triggers assessment and protective duties', keys: ['specific threat', 'identifiable person'], mistake: 'Treating an identifiable threat as fully confidential' }),
      O('b', 'Keep the threat entirely confidential, since everything shared in counseling must always stay completely private', -2,
        { r: 'Confidentiality yields to a serious threat', approach: 'Absolutist framing', why: 'A serious, identifiable threat can require disclosure', keys: ['identifiable target'], mistake: 'Treating confidentiality as absolute when there is danger' }),
      O('c', 'Wait to see whether she repeats the threat at the next session before assessing the risk or taking any action', -2,
        { r: 'Delaying assessment is unsafe', approach: 'Wait-and-see framing', why: 'An identifiable threat requires prompt assessment', keys: ['active threat'], mistake: 'Postponing an urgent risk assessment' }),
      O('d', 'Notify the police and the person at once without first assessing the seriousness or following the proper protective process', -1,
        { r: 'Act on assessed risk, not reflexively', approach: 'Reflexive-disclosure framing', why: 'Protective steps follow a careful risk assessment', keys: ['proportionate response'], mistake: 'Disclosing before assessing the risk' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited experience with acute psychosis. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and coordinate with a treatment team, referring for the components beyond your competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; acute psychosis is managed within a coordinated team', keys: ['limited psychosis experience', 'acute episode'], mistake: 'Managing acute psychosis alone without competence' }),
      O('b', 'Continue managing the entire case alone to preserve the continuity of the relationship built with her', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell her the episode is not serious enough to need psychiatric care and keep seeing her for supportive talks only', -2,
        { r: 'Minimizing the episode fails the client', approach: 'Downplay framing', why: 'An acute psychotic episode warrants psychiatric coordination', keys: ['acute episode'], mistake: 'Underestimating the need for specialist care' }),
      O('d', 'Transfer her at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D161 — Conduct Disorder, Adolescent-Onset Type (F91.2) — Disruptive — hard
// ============================================================================
const D161 = {
  id: 'ncmhce-D161',
  title: 'An adolescent with a pattern of rule violations and aggression',
  category: 'Disruptive',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Conduct Disorder, Adolescent-Onset Type', code: 'F91.2' },
  diagnosis: { name: 'Conduct Disorder, Adolescent-Onset Type', code: 'F91.2' },
  differentialOptions: [
    { id: 'do1', name: 'Conduct Disorder, Adolescent-Onset Type', isCorrect: true },
    { id: 'do2', name: 'Oppositional Defiant Disorder', isCorrect: false },
    { id: 'do3', name: 'Intermittent Explosive Disorder', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Disturbance of Conduct', isCorrect: false },
  ],
  narrative: {
    intake:
      'Tyrone Booker, a 15-year-old, is referred by juvenile court after a pattern of serious rule violations over the past year, including ' +
      'theft, staying out all night, school truancy, and aggression toward peers that began after age ten with no significant problems before then.',
    session1:
      'His behavior violates the basic rights of others and major age-appropriate norms and goes well beyond ordinary teenage defiance or ' +
      'argumentativeness. The pattern emerged in adolescence rather than early childhood, and the aggression is part of a broader pattern of conduct violations.',
    session2:
      'His mother is overwhelmed and feels she has lost control, and his school is considering expulsion. He minimizes the behavior, has fallen ' +
      'in with an older peer group, and at a low moment admitted he sometimes feels there is no point to anything, without current plan or intent.',
  },
  diagnosticRationale:
    'A repetitive and persistent pattern of behavior violating the basic rights of others or major age-appropriate societal norms—aggression, ' +
    'theft, serious rule violations—over twelve months with onset after age ten meets DSM-5-TR criteria for conduct disorder, adolescent-onset ' +
    'type, distinct from oppositional defiant disorder, the isolated outbursts of intermittent explosive disorder, and a stressor-bound adjustment disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Conduct disorder: repetitive pattern violating others’ rights or norms over 12 months; adolescent-onset after age 10' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Conduct problems: evidence-based parenting and family/multisystemic intervention within coordinated care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Developmentally appropriate suicide-risk screening given comorbidity and impairment' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.5., and C.2.: welfare of minor clients, confidentiality limits, mandated reporting, and competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance with the adolescent and family and collaborative goal setting' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a conduct disorder diagnosis?', ['R1'], [
      O('a', 'A repetitive 12-month pattern of violating others’ rights or major norms, with onset after age ten', 3,
        { r: 'Repetitive rights/norms violations over a year', approach: 'Confirm the core criteria', why: 'Conduct disorder requires a repetitive pattern of rights/norms violations over 12 months; adolescent-onset is after age 10', keys: ['theft, truancy, aggression', 'began after age ten'], mistake: 'Diagnosing from isolated incidents rather than the repetitive pattern' }),
      O('b', 'That his mother can name the single event she believes first set off all of his behavior problems', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his behavior has grown a little worse over the past few days than it was the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The 12-month pattern, not a recent uptick, is required', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Conduct disorder is defined by the behavior pattern, not mood criteria', keys: ['behavior-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from oppositional defiant disorder?', ['R1'], [
      O('a', 'His behavior violates others’ basic rights and major norms, beyond the defiance and argumentativeness of ODD', 3,
        { r: 'Rights/norms violations beyond defiance', approach: 'Contrast severity of the behavior', why: 'ODD involves defiance and argumentativeness; conduct disorder violates others’ rights and major norms', keys: ['theft and aggression', 'serious rule violations'], mistake: 'Treating rights-violating conduct as mere oppositionality' }),
      O('b', 'The fact that he often argues with adults and resists the rules and expectations that they place on him', -1,
        { r: 'Defiance occurs in both', approach: 'Defiance framing', why: 'Argumentative defiance occurs in both; the rights violations differ', keys: ['shared feature'], mistake: 'Using defiance to differentiate' }),
      O('c', 'The irritability and the conflict with authority figures that he tends to show at home and at school', -1,
        { r: 'Irritability occurs in both', approach: 'Irritability framing', why: 'Conflict with authority appears in both; the severity differs', keys: ['shared affect'], mistake: 'Reading irritability as decisive' }),
      O('d', 'The way his behavior tends to be a bit worse on school days than it is on the weekends at home', 0,
        { r: 'Setting-based variation is nonspecific', approach: 'Setting framing', why: 'Day-to-day variation does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a setting effect' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from intermittent explosive disorder?', ['R1'], [
      O('a', 'His aggression is part of a broad pattern of rule violations, not isolated impulsive outbursts without other conduct problems', 3,
        { r: 'Broad conduct pattern versus isolated outbursts', approach: 'Contrast pattern breadth', why: 'IED is confined to impulsive aggressive outbursts; conduct disorder spans theft, truancy, and rights violations', keys: ['theft and truancy alongside aggression'], mistake: 'Reducing a broad conduct pattern to isolated outbursts' }),
      O('b', 'The fact that he sometimes becomes aggressive toward his peers when he is angry or provoked by them', -1,
        { r: 'Aggression occurs in both', approach: 'Aggression framing', why: 'Aggression occurs in both; the breadth of the pattern differs', keys: ['shared feature'], mistake: 'Using aggression to differentiate' }),
      O('c', 'The trouble he has controlling his temper during the moments when he feels he has been wronged', -1,
        { r: 'Poor temper control is nonspecific', approach: 'Temper framing', why: 'Difficulty with temper appears in both; the pattern differs', keys: ['shared difficulty'], mistake: 'Reading temper control as decisive' }),
      O('d', 'The way his aggressive outbursts tend to happen a bit more often around the busy end of the school term than they do during the calmer stretches of the year', 0,
        { r: 'Timing is nonspecific', approach: 'Timing framing', why: 'A seasonal pattern does not differentiate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a calendar effect' }),
    ]),
    Q('q4', 'core', 'What is most useful to gather to support the assessment?', ['R3'], [
      O('a', 'Collateral from home, school, and court records about the pattern, severity, and onset of the behaviors', 3,
        { r: 'Multi-source collateral on pattern and onset', approach: 'Gather multi-informant data', why: 'Conduct disorder assessment relies on collateral across settings to establish the pattern, severity, and onset', keys: ['court referral', 'school considering expulsion'], mistake: 'Relying on the adolescent’s self-report alone' }),
      O('b', 'A detailed family pedigree going back several generations to find relatives who also broke rules as teenagers', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not establish the behavior pattern across settings', keys: ['criteria-relevant data'], mistake: 'Gathering data that does not inform the diagnosis' }),
      O('c', 'Whether his behavior can be traced to one specific incident that fully explains the entire pattern over the year', -1,
        { r: 'A single incident is not the target', approach: 'Origin-hunting framing', why: 'The diagnosis rests on the repetitive pattern, not a single incident', keys: ['repetitive pattern'], mistake: 'Hunting for an origin instead of the pattern' }),
      O('d', 'His favorite music and games so that the sessions can be arranged around the activities he most enjoys', 0,
        { r: 'Interests are secondary', approach: 'Preference framing', why: 'Useful for rapport but not what supports the diagnosis', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over assessment' }),
    ]),
    Q('q5', 'intake', 'Given his remark that there is "no point to anything," what is the most important step?', ['R3'], [
      O('a', 'Conduct a developmentally appropriate suicide-risk assessment and screen for co-occurring depression and substance use', 3,
        { r: 'Risk assessment and comorbidity screen', approach: 'Assess risk and comorbidity', why: 'Conduct disorder often co-occurs with depression and substance use, and the remark warrants risk assessment', keys: ['no point to anything', 'fell in with older peers'], mistake: 'Focusing on behavior while missing risk and comorbidity' }),
      O('b', 'Assume the remark was just teenage drama because he minimizes his behavior and denies any current plan', -2,
        { r: 'Dismissing the remark is unsafe', approach: 'Dismissal framing', why: 'A statement of hopelessness still requires structured assessment', keys: ['ongoing risk factors'], mistake: 'Dismissing risk on assumption' }),
      O('c', 'Defer any risk assessment until his conduct problems are resolved and his behavior has been stable for months', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after the behavior settles', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on the court requirements for now and plan to return to any safety questions at a later date', -1,
        { r: 'Sequencing safety behind court needs is unsafe', approach: 'Single-issue framing', why: 'Court matters do not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Tyrone?', ['R2'], [
      O('a', 'Evidence-based family and multisystemic intervention engaging home, school, and community supports', 3,
        { r: 'Family and multisystemic intervention', approach: 'Apply the guideline', why: 'Conduct disorder responds best to family and multisystemic approaches engaging the systems around the youth', keys: ['overwhelmed parent', 'court and school involved'], mistake: 'Treating the adolescent individually without engaging the family and systems' }),
      O('b', 'Brief individual insight sessions with the adolescent alone, with no family, school, or system involvement at all', -1,
        { r: 'Individual-only work omits the systems', approach: 'Individual-only framing', why: 'Family and systems are central to conduct-disorder treatment', keys: ['systemic involvement'], mistake: 'Excluding the systems around the youth' }),
      O('c', 'Recommending strict, escalating punishment as the central strategy to bring his behavior under control quickly', -2,
        { r: 'Harsh punishment alone is ineffective', approach: 'Punishment-first framing', why: 'Escalating punishment alone tends to be ineffective and can worsen outcomes', keys: ['evidence-based intervention'], mistake: 'Relying on punishment instead of evidence-based intervention' }),
      O('d', 'Starting him on a medication that you will select and adjust to control his behavior over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor work with his mother in the plan?', ['R2'], [
      O('a', 'Coach evidence-based parenting and consistent limits while supporting an overwhelmed caregiver who feels she has lost control', 3,
        { r: 'Parenting skills plus caregiver support', approach: 'Build parenting skills and support', why: 'Evidence-based parenting with consistent limits, plus support for a depleted parent, is central to the plan', keys: ['mother is overwhelmed', 'feels she has lost control'], mistake: 'Coaching skills without supporting the burned-out caregiver' }),
      O('b', 'Tell her the situation is hopeless and that there is really nothing useful she can do at home to change his behavior', -2,
        { r: 'Hopeless framing abandons the parent', approach: 'Hopelessness framing', why: 'Parenting strategies are an effective lever; a hopeless stance undermines the work', keys: ['parent-mediated change'], mistake: 'Communicating hopelessness to the caregiver' }),
      O('c', 'Advise her to give in to his demands during conflicts so that the immediate confrontations end as quickly as possible', -2,
        { r: 'Capitulation reinforces the behavior', approach: 'Capitulation framing', why: 'Giving in reinforces the conduct problems', keys: ['consistent limits'], mistake: 'Coaching a strategy that reinforces the behavior' }),
      O('d', 'Place the entire blame on her parenting and imply the situation reflects a basic failure on her part as a mother', -1,
        { r: 'Blaming the parent is counter-therapeutic', approach: 'Blame framing', why: 'A blaming stance undermines engagement and the alliance', keys: ['collaborative stance'], mistake: 'Shaming the caregiver rather than equipping her' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor coordinate with the court and school?', ['R4'], [
      O('a', 'Clarify the limits of confidentiality given the court involvement and coordinate, with consent, on a shared plan', 3,
        { r: 'Clarify mandated-client limits and coordinate', approach: 'Define confidentiality limits and coordinate', why: 'Court-involved minors require clarity on confidentiality limits and consented coordination across systems', keys: ['court referral', 'school involvement'], mistake: 'Ignoring the confidentiality limits and coordination needs of a mandated case' }),
      O('b', 'Share everything about the sessions with the court and school freely, since they are clearly entitled to it all anyway', -2,
        { r: 'Unlimited disclosure ignores limits', approach: 'Over-disclosure framing', why: 'Disclosure is governed by consent, mandates, and minimum-necessary limits even in court cases', keys: ['minimum necessary'], mistake: 'Over-disclosing without regard to limits' }),
      O('c', 'Promise the adolescent complete confidentiality and share nothing with the court or school under any circumstances', -1,
        { r: 'Absolute confidentiality ignores the mandate', approach: 'Absolute-secrecy framing', why: 'A court-involved case has defined reporting requirements that limit confidentiality', keys: ['mandated context'], mistake: 'Promising confidentiality the context does not allow' }),
      O('d', 'Avoid any contact with the court and school so that the counseling stays entirely separate from the legal process', -1,
        { r: 'No coordination undercuts the plan', approach: 'Siloed framing', why: 'Consented, appropriate coordination supports the multisystemic plan', keys: ['integrated plan'], mistake: 'Refusing appropriate coordination' }),
    ]),
    Q('q9', 'treatment', 'How should progress be tracked across the systems involved?', ['R5'], [
      O('a', 'Use measurement-based tracking of the target behaviors, school engagement, and risk across home and community', 3,
        { r: 'Measurement-based, cross-system tracking', approach: 'Monitor outcomes across systems', why: 'Tracking the target behaviors, school engagement, and risk across systems steers the multisystemic plan', keys: ['behaviors across settings', 'systemic plan'], mistake: 'Proceeding without tracking outcomes across the systems' }),
      O('b', 'Rely only on whether his mother happens to mention that things at home feel a little calmer than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions from one setting', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how he behaves during the session itself and base every decision solely on what you see in the room', -1,
        { r: 'In-room behavior is too narrow', approach: 'Single-setting framing', why: 'The cross-system pattern requires data from home, school, and community', keys: ['multi-system monitoring'], mistake: 'Measuring only one setting' }),
      O('d', 'Wait until the end of the court order to review whether his behavior has changed at all since intake', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the plan', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q10', 'counseling', 'Tyrone is guarded and dismissive, saying counseling is pointless and forced on him. The most therapeutic response is to:', ['R5'], [
      O('a', 'Acknowledge the coercion he feels, avoid a power struggle, and look for goals he himself actually cares about', 3,
        { r: 'Acknowledge coercion and find his goals', approach: 'Engage a mandated, guarded adolescent', why: 'Acknowledging the mandate while finding his own goals engages a coerced, guarded youth without a power struggle', keys: ['court-mandated', 'guarded and dismissive'], mistake: 'Getting into a power struggle or lecturing him into compliance' }),
      O('b', 'Warn him sharply that if he does not cooperate fully he will certainly end up incarcerated for a very long time', -1,
        { r: 'Fear-based pressure raises resistance', approach: 'Scare-tactic framing', why: 'Threats tend to entrench resistance in a mandated adolescent', keys: ['engagement matters'], mistake: 'Using fear rather than engagement' }),
      O('c', 'Agree that counseling is pointless and simply end the sessions early since he does not want to be there anyway', -1,
        { r: 'Giving up forecloses engagement', approach: 'Give-up framing', why: 'His resistance is workable; abandoning engagement is not indicated', keys: ['find his goals'], mistake: 'Disengaging instead of working with resistance' }),
      O('d', 'Insist that he change his attitude and show respect before any of the counseling work can begin with him', -1,
        { r: 'Demanding attitude change first stalls engagement', approach: 'Precondition framing', why: 'Engagement is built, not demanded as a precondition', keys: ['build rapport first'], mistake: 'Setting compliance as a precondition' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best build a working alliance with Tyrone?', ['R5'], [
      O('a', 'Be consistent, non-judgmental, and transparent about limits, while connecting the work to outcomes he values', 3,
        { r: 'Consistency, transparency, and his own goals', approach: 'Build trust on his terms', why: 'A consistent, transparent stance tied to his own goals builds an alliance with a guarded adolescent', keys: ['minimizes behavior', 'mandated client'], mistake: 'Aligning only with the authorities and against the youth' }),
      O('b', 'Side fully with the court and school and make clear in every session that you are there to enforce their rules', -1,
        { r: 'Pure enforcement alignment blocks alliance', approach: 'Enforcer framing', why: 'Being only an enforcer prevents a working alliance with the youth', keys: ['dual role clarity'], mistake: 'Positioning solely against the client' }),
      O('c', 'Focus the sessions mainly on reviewing each of his rule violations in exhaustive detail every single week', -1,
        { r: 'Cataloguing violations is not alliance-building', approach: 'Catalogue framing', why: 'Rehashing violations does not build the alliance or his motivation', keys: ['goal focus'], mistake: 'Centering sessions on enumerating violations' }),
      O('d', 'Tell him there is no hope for him unless he immediately and completely changes everything about his behavior', -2,
        { r: 'Hopeless ultimatum undermines engagement', approach: 'Hopelessness framing', why: 'A hopeless ultimatum erodes any chance of alliance and motivation', keys: ['instill hope'], mistake: 'Communicating hopelessness to the youth' }),
    ]),
    Q('q12', 'ethics', 'Tyrone discloses a specific, credible plan to seriously harm an identifiable peer. The most appropriate action is to:', ['R4'], [
      O('a', 'Assess the risk and follow duty-to-protect obligations, which may require warning or other protective steps', 3,
        { r: 'Assess and act on duty to protect', approach: 'Apply duty-to-protect', why: 'A serious, specific, identifiable threat triggers assessment and protective duties even with a minor', keys: ['specific plan', 'identifiable peer'], mistake: 'Treating an identifiable threat as fully confidential' }),
      O('b', 'Keep the threat entirely confidential, since a minor’s disclosures in counseling must always stay completely private', -2,
        { r: 'Confidentiality yields to a serious threat', approach: 'Absolutist framing', why: 'A serious, identifiable threat can require disclosure regardless of age', keys: ['identifiable target'], mistake: 'Treating confidentiality as absolute when there is danger' }),
      O('c', 'Wait to see whether he repeats the threat next session before assessing the risk or taking any action at all', -2,
        { r: 'Delaying assessment is unsafe', approach: 'Wait-and-see framing', why: 'An identifiable threat requires prompt assessment', keys: ['active threat'], mistake: 'Postponing an urgent risk assessment' }),
      O('d', 'Notify the peer and the police at once without first assessing the seriousness or following the proper protective process', -1,
        { r: 'Act on assessed risk, not reflexively', approach: 'Reflexive-disclosure framing', why: 'Protective steps follow a careful risk assessment', keys: ['proportionate response'], mistake: 'Disclosing before assessing the risk' }),
    ]),
    Q('q13', 'ethics', 'The court asks the counselor to recommend whether Tyrone should be detained. The most ethical response is to:', ['R4'], [
      O('a', 'Clarify your treating role and its limits, providing only information appropriate to that role rather than a forensic recommendation', 3,
        { r: 'Stay within the treating role', approach: 'Distinguish treatment from forensic evaluation', why: 'A treating counselor avoids forensic detention recommendations that exceed the role and competence', keys: ['court request', 'treating relationship'], mistake: 'Offering a forensic detention opinion from the treating role' }),
      O('b', 'Make a firm detention recommendation right away, since the court has asked and clearly wants a definitive answer', -2,
        { r: 'A forensic recommendation exceeds the role', approach: 'Please-the-court framing', why: 'Issuing a detention recommendation exceeds the treating role and competence', keys: ['role boundaries'], mistake: 'Overstepping into a forensic opinion' }),
      O('c', 'Refuse to provide the court with any information at all, including what is appropriate to share about treatment', -1,
        { r: 'Blanket refusal ignores legitimate process', approach: 'Stonewall framing', why: 'Role-appropriate information can be shared within the limits, rather than refusing everything', keys: ['appropriate disclosure'], mistake: 'Declining all legitimate, role-appropriate communication' }),
      O('d', 'Recommend whatever outcome you personally believe will scare him into behaving, regardless of the clinical picture', -2,
        { r: 'Recommending to scare him is improper', approach: 'Coercion framing', why: 'Basing a recommendation on intimidation rather than clinical reality is unethical', keys: ['clinical integrity'], mistake: 'Letting a punitive motive drive a recommendation' }),
    ]),
  ],
};

// ============================================================================
// D162 — Trichotillomania (F63.3) — OCD-Related — medium
// ============================================================================
const D162 = {
  id: 'ncmhce-D162',
  title: 'Recurrent hair-pulling with shame and noticeable hair loss',
  category: 'OCD-Related',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Trichotillomania', code: 'F63.3' },
  diagnosis: { name: 'Trichotillomania', code: 'F63.3' },
  differentialOptions: [
    { id: 'do1', name: 'Trichotillomania', isCorrect: true },
    { id: 'do2', name: 'Obsessive-Compulsive Disorder', isCorrect: false },
    { id: 'do3', name: 'Body Dysmorphic Disorder', isCorrect: false },
    { id: 'do4', name: 'Excoriation Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Hannah Cohen, a 22-year-old student, seeks help for recurrent hair-pulling that has left noticeable bald patches. She has tried many ' +
      'times to stop or cut back and cannot, and she feels intense shame and hides the hair loss with scarves and careful styling.',
    session1:
      'The pulling is not driven by intrusive obsessions or by a belief that her appearance is defective; it often happens automatically or to ' +
      'relieve tension, with relief or gratification afterward. She targets her hair specifically rather than picking at her skin, and the urge builds before she pulls.',
    session2:
      'She is otherwise functioning, denies skin-picking as a separate problem, and is distressed about the visible hair loss and the impact on ' +
      'her social life. She is motivated to learn to manage the urges and has begun avoiding situations where the bald patches might be noticed.',
  },
  diagnosticRationale:
    'Recurrent pulling out of one’s hair resulting in hair loss, with repeated attempts to stop and clinically significant distress, not better ' +
    'explained by another disorder, meets DSM-5-TR criteria for trichotillomania—distinct from OCD’s obsession-driven compulsions, body ' +
    'dysmorphic disorder’s appearance preoccupation, and excoriation (skin-picking) disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Trichotillomania: recurrent hair-pulling with hair loss, repeated attempts to stop, clinically significant distress' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Body-focused repetitive behaviors: habit reversal training and behavioral intervention within coordinated care' },
    { id: 'R3', source: 'Barlow PCT', detail: 'Functional analysis of urges and antecedents and competing-response training' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, informed consent, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance, collaborative goal setting, and the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a trichotillomania diagnosis?', ['R1'], [
      O('a', 'Recurrent hair-pulling that results in hair loss, with repeated unsuccessful attempts to stop and real distress', 3,
        { r: 'Recurrent pulling, hair loss, failed cutbacks', approach: 'Confirm the core criteria', why: 'Trichotillomania requires recurrent pulling with hair loss, repeated attempts to stop, and distress', keys: ['noticeable bald patches', 'cannot stop despite trying'], mistake: 'Diagnosing without confirming the recurrent pulling, hair loss, and failed attempts' }),
      O('b', 'That she can identify the single stressful event she believes first caused her to start pulling her hair', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her pulling has grown a little more frequent over the past few days than it was the week just before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A recurrent pattern, not a recent uptick, is required', keys: ['recurrent pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Trichotillomania is a body-focused repetitive behavior, not a mood episode', keys: ['behavior-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from obsessive-compulsive disorder?', ['R1'], [
      O('a', 'The pulling is not driven by intrusive obsessions and is often automatic or tension-relieving, unlike OCD’s obsession-driven rituals', 3,
        { r: 'Not obsession-driven; tension-relieving', approach: 'Contrast the driver of the behavior', why: 'OCD compulsions are driven by intrusive obsessions; her pulling is automatic or tension-relieving without obsessions', keys: ['no intrusive obsessions', 'relief after pulling'], mistake: 'Reading body-focused pulling as an OCD compulsion' }),
      O('b', 'The fact that she repeats a behavior over and over even though she is trying hard to stop herself from doing it', -1,
        { r: 'Repetitive behavior occurs in both', approach: 'Repetition framing', why: 'Repetitive behavior occurs in both; the driver differs', keys: ['shared feature'], mistake: 'Using repetition to differentiate' }),
      O('c', 'The distress and the shame that she feels about the behavior and its visible effects on her appearance', -1,
        { r: 'Distress occurs in both', approach: 'Distress framing', why: 'Distress occurs in both; the behavioral driver differs', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her pulling tends to be a little worse during the busiest and most stressful weeks of her semester', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from body dysmorphic disorder?', ['R1'], [
      O('a', 'Her pulling is not driven by a belief that her appearance is defective, which is the core of body dysmorphic disorder', 3,
        { r: 'No appearance-defect belief driving it', approach: 'Contrast the underlying motive', why: 'BDD is driven by a perceived appearance defect; her pulling is not, even though it affects appearance', keys: ['not driven by a defect belief', 'automatic or tension-relieving'], mistake: 'Confusing the appearance impact of pulling with BDD’s defect preoccupation' }),
      O('b', 'The fact that she is unhappy about how the hair loss looks and tries to cover the bald patches from view', -1,
        { r: 'Appearance distress occurs in both', approach: 'Appearance framing', why: 'Distress about appearance can occur in both; the driver differs', keys: ['shared feature'], mistake: 'Using appearance distress to differentiate' }),
      O('c', 'The way she avoids certain social situations where other people might notice the effects on her hair', -1,
        { r: 'Avoidance occurs in both', approach: 'Avoidance framing', why: 'Avoidance occurs in both; the underlying motive differs', keys: ['shared avoidance'], mistake: 'Reading avoidance as decisive' }),
      O('d', 'The way she feels a little more self-conscious in the evenings than she does earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from excoriation disorder?', ['R1'], [
      O('a', 'She targets her hair specifically, rather than recurrently picking at her skin as in excoriation disorder', 3,
        { r: 'Hair-pulling versus skin-picking', approach: 'Contrast the target behavior', why: 'Excoriation disorder involves skin-picking; trichotillomania involves hair-pulling', keys: ['targets hair', 'denies skin-picking'], mistake: 'Conflating hair-pulling with skin-picking' }),
      O('b', 'The fact that she performs a recurrent body-focused behavior that she has real trouble stopping on her own', -1,
        { r: 'Body-focused behavior occurs in both', approach: 'Behavior framing', why: 'A body-focused repetitive behavior occurs in both; the target differs', keys: ['shared feature'], mistake: 'Using the behavior class to differentiate' }),
      O('c', 'The tension she feels building beforehand and the sense of relief that follows once she has done it', -1,
        { r: 'The urge-relief cycle occurs in both', approach: 'Urge framing', why: 'The build-and-relief cycle occurs in both; the target differs', keys: ['shared cycle'], mistake: 'Reading the urge cycle as decisive' }),
      O('d', 'The way the behavior tends to increase a little on the days when she has had less sleep the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'More of the behavior after poor sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q5', 'intake', 'What is most useful to assess to inform a behavioral treatment plan?', ['R3'], [
      O('a', 'The antecedents, settings, and the automatic-versus-focused pattern of her pulling and the urges that precede it', 3,
        { r: 'Functional analysis of antecedents and urges', approach: 'Map the behavior’s function', why: 'Habit reversal depends on a functional analysis of antecedents, settings, and the urge pattern', keys: ['automatic or tension-relieving', 'urge builds before pulling'], mistake: 'Starting treatment without a functional analysis of the behavior' }),
      O('b', 'A detailed family pedigree going back several generations to find relatives who also pulled their hair', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not inform the behavioral plan', keys: ['plan-relevant data'], mistake: 'Gathering data that does not inform treatment' }),
      O('c', 'Whether the pulling can be traced to one specific childhood memory that fully explains all of it today', -1,
        { r: 'A single memory is not the target', approach: 'Origin-hunting framing', why: 'Treatment targets current antecedents and urges, not a single origin', keys: ['present maintenance'], mistake: 'Hunting for an origin instead of the maintaining factors' }),
      O('d', 'Her general personality style and broad preferences so the sessions can be matched to how she likes to work', 0,
        { r: 'Style preferences are secondary', approach: 'Preference framing', why: 'Useful but not what a behavioral plan hinges on', keys: ['secondary factor'], mistake: 'Prioritizing style over the functional analysis' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Hannah?', ['R2'], [
      O('a', 'Habit reversal training with competing-response and stimulus-control strategies for the pulling', 3,
        { r: 'Habit reversal training', approach: 'Apply the guideline', why: 'Habit reversal training is the first-line behavioral treatment for trichotillomania', keys: ['urge builds before pulling', 'wants to manage the urges'], mistake: 'Defaulting to open-ended talk therapy instead of habit reversal' }),
      O('b', 'Long-term insight-oriented therapy to uncover the unconscious meaning of the hair-pulling before any behavioral work', -1,
        { r: 'Insight-first is not first-line', approach: 'Depth-work framing', why: 'Behavioral treatment is the evidence-based first-line approach', keys: ['behavioral intervention'], mistake: 'Prioritizing insight over the indicated behavioral work' }),
      O('c', 'Telling her to simply use more willpower and stop pulling on her own, since it is just a matter of self-control', -2,
        { r: 'Willpower-only advice ignores the disorder', approach: 'Willpower framing', why: 'Framing a body-focused repetitive behavior as mere willpower disregards the evidence', keys: ['repeated failed attempts'], mistake: 'Reducing the disorder to willpower' }),
      O('d', 'Starting her on a medication that you will select and adjust to reduce the urges over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'What is the central behavioral strategy to teach her?', ['R3'], [
      O('a', 'A competing response she can use when the urge arises, paired with awareness training and stimulus control', 3,
        { r: 'Competing response plus awareness and stimulus control', approach: 'Teach the core habit-reversal skills', why: 'A competing response with awareness and stimulus control is the core of habit reversal training', keys: ['urge builds before pulling', 'often automatic'], mistake: 'Omitting the competing response that is central to the treatment' }),
      O('b', 'Encouraging her to pull only in a controlled way at set times so that she stays in charge of when it happens', -2,
        { r: 'Scheduling the behavior maintains it', approach: 'Controlled-pulling framing', why: 'Encouraging continued pulling reinforces the behavior rather than reducing it', keys: ['reduce the behavior'], mistake: 'Endorsing the behavior the treatment aims to reduce' }),
      O('c', 'Telling her to wait until she feels no urge at all before she tries to use any of the strategies she has learned', -1,
        { r: 'Waiting for no urge stalls the work', approach: 'Wait-for-calm framing', why: 'The competing response is used when the urge arises, not after it disappears', keys: ['use the skill with the urge'], mistake: 'Setting an unattainable precondition' }),
      O('d', 'Focusing only on covering the bald patches better so that the visible effects of the pulling are less noticeable', -1,
        { r: 'Concealment is not the treatment', approach: 'Concealment framing', why: 'Hiding the effects does not address the pulling behavior itself', keys: ['behavior change'], mistake: 'Treating concealment as the intervention' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track pulling frequency, urges, use of the competing response, and distress over time to guide the plan', 3,
        { r: 'Measurement-based tracking of behavior and skills', approach: 'Monitor the relevant outcomes', why: 'Tracking pulling, urges, competing-response use, and distress steers the habit-reversal plan', keys: ['urges and pulling', 'wants to manage them'], mistake: 'Proceeding without tracking the target behavior and skills' }),
      O('b', 'Rely only on whether she happens to say in session that the pulling feels a little more under control lately', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how well the bald patches are hidden and base every decision solely on how visible they are', -1,
        { r: 'Concealment is the wrong metric', approach: 'Wrong-metric framing', why: 'The behavior and urges are the outcome, not how well the effects are concealed', keys: ['behavior focus'], mistake: 'Measuring concealment instead of the behavior' }),
      O('d', 'Wait until the end of treatment to review whether her pulling has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor handle any medication question she raises?', ['R4'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation while continuing the habit-reversal work within your scope', 3,
        { r: 'Refer for prescribing, keep doing therapy', approach: 'Coordinate within scope', why: 'Medication questions are referred to a prescriber while the counselor continues behavioral treatment', keys: ['asks about medication', 'scope limits'], mistake: 'Advising on specific medication outside scope' }),
      O('b', 'Recommend a specific medication and dose for her to begin taking before her next set of exams this term', -2,
        { r: 'Recommending a drug and dose exceeds scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not recommend specific drugs or doses', keys: ['no prescriptive authority'], mistake: 'Making a prescribing recommendation' }),
      O('c', 'Tell her that medication never helps with hair-pulling and that she should refuse it if it is ever offered', -1,
        { r: 'Blanket refusal advice overreaches', approach: 'Anti-medication framing', why: 'The prescriber and client weigh medication; the counselor does not forbid it', keys: ['shared decision'], mistake: 'Directing a medical decision' }),
      O('d', 'Ignore the medication question and simply redirect her back to the behavioral tasks every time she raises it', -1,
        { r: 'Dismissing the question is unhelpful', approach: 'Avoidant framing', why: 'A referral, not avoidance, is the appropriate response', keys: ['coordinated care'], mistake: 'Failing to address a legitimate question' }),
    ]),
    Q('q10', 'counseling', 'Hannah expresses deep shame and says she feels disgusting because of the pulling. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with empathy, normalize the behavior as a treatable condition, and separate her worth from the behavior', 3,
        { r: 'Empathize, normalize, and de-shame', approach: 'Reduce shame and instill hope', why: 'Empathic normalizing that separates her worth from the behavior reduces shame and supports engagement', keys: ['intense shame', 'feels disgusting'], mistake: 'Either minimizing the distress or reinforcing the shame' }),
      O('b', 'Tell her she has nothing to feel ashamed about and that she should simply stop letting it bother her so much', -1,
        { r: 'Dismissing the shame invalidates her', approach: 'Minimize framing', why: 'Telling her to just stop feeling ashamed invalidates the emotion and the alliance', keys: ['validate then support'], mistake: 'Minimizing a central feeling' }),
      O('c', 'Agree that the behavior is indeed shameful so that she feels motivated to work hard at stopping it right away', -2,
        { r: 'Endorsing the shame is harmful', approach: 'Shame-as-motivation framing', why: 'Reinforcing shame is counter-therapeutic and tends to worsen the behavior', keys: ['de-shame'], mistake: 'Using shame as a motivator' }),
      O('d', 'Change the subject to something more positive so that she does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'Her shame can be engaged and supported, not avoided', keys: ['engage the distress'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Hannah’s engagement in the behavioral work?', ['R5'], [
      O('a', 'Collaborate on realistic, graded goals tied to her wish to manage the urges, reinforcing each small success', 3,
        { r: 'Collaborative, graded goals with reinforcement', approach: 'Anchor the work in her goal', why: 'Graded, collaborative goals tied to her own motivation and reinforced successes sustain engagement', keys: ['motivated to manage the urges', 'repeated failed attempts'], mistake: 'Imposing rigid all-or-nothing demands that set her up for discouragement' }),
      O('b', 'Insist she stop all pulling immediately and completely and treat any lapse as a total and unforgivable failure', -1,
        { r: 'All-or-nothing framing backfires', approach: 'All-or-nothing framing', why: 'Punitive, all-or-nothing expectations undermine engagement and relapse-prevention', keys: ['lapse versus relapse'], mistake: 'Setting up an all-or-nothing trap' }),
      O('c', 'Focus the sessions mainly on cataloguing every hair she has pulled in exhaustive detail every single week', -1,
        { r: 'Cataloguing is not the work', approach: 'Catalogue framing', why: 'Exhaustive logging without skill-building does not advance the work', keys: ['skill focus'], mistake: 'Centering sessions on enumerating the behavior' }),
      O('d', 'Tell her counseling cannot help her unless she first agrees to take medication exactly as a prescriber directs', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Behavioral treatment can proceed alongside any coordinated medication decision', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Hannah asks the counselor to keep the diagnosis out of any record her parents could access. The most appropriate action is to:', ['R4'], [
      O('a', 'Clarify confidentiality and the limits of any release, sharing only what she consents to and what is needed', 3,
        { r: 'Honor consent and minimum-necessary disclosure', approach: 'Apply consent and minimum necessary', why: 'As an adult client, her records are governed by her informed consent and minimum-necessary disclosure', keys: ['adult client', 'wants diagnosis withheld from parents'], mistake: 'Disclosing to family without her consent' }),
      O('b', 'Send her records to her parents anyway, since they are her family and clearly have a right to know everything', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Family-entitlement framing', why: 'An adult client’s records are not disclosed to family without consent', keys: ['no release'], mistake: 'Disclosing to family without consent' }),
      O('c', 'Falsify the record to remove the diagnosis entirely so that there is no chance her parents could ever see it', -2,
        { r: 'Falsifying records is unethical', approach: 'Falsify framing', why: 'Altering the clinical record to hide a diagnosis violates professional honesty', keys: ['accurate records'], mistake: 'Falsifying documentation' }),
      O('d', 'Refuse to discuss the confidentiality question at all and simply change the subject whenever she raises it', -1,
        { r: 'Avoiding the issue is unhelpful', approach: 'Avoidant framing', why: 'Confidentiality should be explained, not avoided', keys: ['transparent limits'], mistake: 'Sidestepping a needed conversation' }),
    ]),
    Q('q13', 'ethics', 'Hannah asks whether the counselor is trained in habit reversal for hair-pulling. The most ethical response is to:', ['R4'], [
      O('a', 'Answer honestly about your competence and seek consultation or refer for any components beyond your training', 3,
        { r: 'Practice within competence', approach: 'Be transparent about competence', why: 'ACA C.2. requires practicing within competence and consulting or referring as needed', keys: ['client asks about training', 'specific behavioral method'], mistake: 'Overstating competence to retain the client' }),
      O('b', 'Assure her you can handle anything at all and that there is no need for her to ask about your training again', -2,
        { r: 'Overstating competence is unethical', approach: 'Overclaim framing', why: 'Misrepresenting competence violates the ethics code', keys: ['honest representation'], mistake: 'Claiming competence you cannot support' }),
      O('c', 'Tell her the question is inappropriate and that clients should not ask their counselors about their qualifications', -2,
        { r: 'Dismissing the question is wrong', approach: 'Dismissive framing', why: 'Clients are entitled to ask about competence and credentials', keys: ['client autonomy'], mistake: 'Shutting down a legitimate question' }),
      O('d', 'Transfer her to someone else at once without explanation rather than discuss your training or arrange a handoff', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'An honest conversation, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the client instead of answering honestly' }),
    ]),
  ],
};

// ============================================================================
// D163 — Tobacco Use Disorder, Moderate (F17.200) — Substance — medium
// ============================================================================
const D163 = {
  id: 'ncmhce-D163',
  title: 'Ambivalence about quitting nicotine despite health worries',
  category: 'Substance',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Tobacco Use Disorder, Moderate', code: 'F17.200' },
  diagnosis: { name: 'Tobacco Use Disorder, Moderate', code: 'F17.200' },
  differentialOptions: [
    { id: 'do1', name: 'Tobacco Use Disorder, Moderate', isCorrect: true },
    { id: 'do2', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Cannabis Use Disorder', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
  ],
  narrative: {
    intake:
      'Walter Reyes, a 49-year-old contractor, is referred by his physician after a worrying checkup. He has smoked for years, with clear ' +
      'tolerance and withdrawal when he tries to cut down, several failed quit attempts, and continued use despite a cough and his doctor’s warnings.',
    session1:
      'He meets a moderate number of criteria for the disorder: strong cravings, time spent on the habit, and use despite health problems. His ' +
      'difficulties center specifically on tobacco rather than on cannabis or another substance, and his worry is about his smoking and health rather than free-floating.',
    session2:
      'He is ambivalent—genuinely worried about his health but doubtful he can quit after past failures, and he uses cigarettes to manage stress ' +
      'on the job. He denies a separate anxiety disorder and is open to talking about his options, though not yet committed to setting a quit date.',
  },
  diagnosticRationale:
    'A problematic pattern of tobacco use with tolerance, withdrawal on cutting down, unsuccessful efforts to quit, craving, and continued use ' +
    'despite physical problems, meeting a moderate number of criteria, fits DSM-5-TR tobacco use disorder, moderate—distinct from a primary ' +
    'anxiety disorder, a cannabis use disorder, and a stressor-bound adjustment disorder with anxiety.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Tobacco use disorder: tolerance, withdrawal, craving, failed quit attempts, use despite harm; moderate = 4–5 criteria' },
    { id: 'R2', source: 'Miller & Rollnick (MI)', detail: 'Motivational interviewing for ambivalence about quitting and building change talk' },
    { id: 'R3', source: 'Transtheoretical Model', detail: 'Stage-matched intervention and relapse-prevention planning across stages of change' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, autonomy, coordination of care, and competence' },
    { id: 'R5', source: 'SAMHSA TIP 35', detail: 'Enhancing motivation for change in substance use treatment' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a tobacco use disorder diagnosis?', ['R1'], [
      O('a', 'A problematic pattern with tolerance, withdrawal, craving, and continued use despite harm at a moderate criteria count', 3,
        { r: 'Tolerance, withdrawal, craving, use despite harm', approach: 'Confirm the core criteria', why: 'Tobacco use disorder is defined by the count of criteria such as tolerance, withdrawal, craving, and use despite harm', keys: ['tolerance and withdrawal', 'use despite cough and warnings'], mistake: 'Diagnosing from amount smoked rather than the criteria met' }),
      O('b', 'That he can identify the single stressful event he believes first caused him to start smoking years ago', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his smoking has increased a little over the past few days compared with the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The criteria pattern, not a recent uptick, is what matters', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Tobacco use disorder is defined by the use pattern, not mood criteria', keys: ['use-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from a primary anxiety disorder?', ['R1'], [
      O('a', 'His difficulties center on tobacco use and its criteria, not on pervasive anxiety as the primary problem', 3,
        { r: 'Use-disorder pattern, not primary anxiety', approach: 'Contrast the central problem', why: 'A primary anxiety disorder centers on anxiety; his presentation centers on the tobacco-use criteria', keys: ['tolerance, withdrawal, craving', 'denies a separate anxiety disorder'], mistake: 'Reframing a substance-use pattern as a primary anxiety disorder' }),
      O('b', 'The fact that he feels some stress and tension that he tries to manage by smoking cigarettes during the workday', -1,
        { r: 'Stress can occur in both', approach: 'Stress framing', why: 'Stress and tension can occur in both; the central problem differs', keys: ['shared feature'], mistake: 'Using stress to differentiate' }),
      O('c', 'The discomfort and the irritability that he feels when he goes for a while without having a cigarette', -1,
        { r: 'Discomfort is nonspecific', approach: 'Discomfort framing', why: 'His discomfort reflects withdrawal, not a primary anxiety disorder', keys: ['withdrawal-related'], mistake: 'Reading withdrawal discomfort as primary anxiety' }),
      O('d', 'The way his urge to smoke tends to be a little stronger during the busiest and most stressful weeks on the job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Stronger cravings under stress do not establish a primary anxiety disorder', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from a cannabis use disorder?', ['R1'], [
      O('a', 'His use disorder centers specifically on tobacco, not on cannabis or another substance', 3,
        { r: 'Tobacco-specific use disorder', approach: 'Contrast the substance involved', why: 'The disorder is defined by the specific substance; his criteria are met for tobacco', keys: ['difficulties center on tobacco'], mistake: 'Conflating one substance use disorder with another' }),
      O('b', 'The fact that he keeps using a substance even though it is clearly causing him real problems with his health', -1,
        { r: 'Use despite harm occurs in both', approach: 'Harm framing', why: 'Use despite harm occurs across substance use disorders; the substance differs', keys: ['shared feature'], mistake: 'Using the harm pattern to differentiate the substance' }),
      O('c', 'The cravings he experiences and the difficulty he has cutting down when he decides he wants to try', -1,
        { r: 'Cravings occur in both', approach: 'Craving framing', why: 'Cravings occur across use disorders; the substance differs', keys: ['shared craving'], mistake: 'Reading cravings as decisive about the substance' }),
      O('d', 'The way his use tends to be a little heavier during the busiest and most demanding stretches at work', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Heavier use under stress does not identify the substance', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'What is most useful to assess to guide a stage-matched plan?', ['R3'], [
      O('a', 'His readiness to change and his ambivalence, including the reasons for and against quitting that he holds', 3,
        { r: 'Readiness and ambivalence', approach: 'Assess stage of change', why: 'A stage-matched plan depends on his readiness and the ambivalence he is weighing', keys: ['worried but doubtful', 'not yet ready to set a quit date'], mistake: 'Pushing action steps before assessing readiness' }),
      O('b', 'A detailed family pedigree going back several generations to find relatives who also smoked for many years', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not guide the stage-matched plan', keys: ['plan-relevant data'], mistake: 'Gathering data that does not inform treatment' }),
      O('c', 'Whether his smoking can be traced to one specific event that fully explains why he still smokes today', -1,
        { r: 'A single event is not the target', approach: 'Origin-hunting framing', why: 'Treatment targets current readiness and ambivalence, not a single origin', keys: ['present motivation'], mistake: 'Hunting for an origin instead of readiness' }),
      O('d', 'His general hobbies and preferences so that the sessions can be arranged around the topics he most enjoys', 0,
        { r: 'Preferences are secondary', approach: 'Preference framing', why: 'Useful for rapport but not what the plan hinges on', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over readiness' }),
    ]),
    Q('q5', 'intake', 'What is most important to coordinate regarding his medical care?', ['R4'], [
      O('a', 'Coordinate with his physician about cessation support and any pharmacotherapy while you provide the behavioral work', 3,
        { r: 'Coordinate cessation support with the physician', approach: 'Partner with medical care', why: 'Tobacco cessation is supported by coordinating medical pharmacotherapy with the counselor’s behavioral work', keys: ['physician referral', 'worrying checkup'], mistake: 'Working in isolation from the physician on a medical cessation issue' }),
      O('b', 'Recommend a specific nicotine-replacement product and dose for him to start yourself before his next appointment', -2,
        { r: 'Recommending a product and dose exceeds scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not recommend specific products or doses', keys: ['no prescriptive authority'], mistake: 'Making a pharmacotherapy recommendation' }),
      O('c', 'A previously undetected primary psychotic disorder that might better account for his continued smoking', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could explain why he keeps smoking despite his doctor’s warnings', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'Continued use despite harm fits the use disorder, not decline', keys: ['use-focused'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line approach given his ambivalence?', ['R2'], [
      O('a', 'Use motivational interviewing to explore ambivalence and build his own change talk before action steps', 3,
        { r: 'Motivational interviewing first', approach: 'Match the intervention to his stage', why: 'For an ambivalent client, motivational interviewing builds intrinsic motivation before action planning', keys: ['ambivalent', 'not yet ready to set a quit date'], mistake: 'Pushing a quit plan before resolving ambivalence' }),
      O('b', 'Insist that he set a quit date today and begin complete abstinence immediately, regardless of his readiness', -1,
        { r: 'Action steps precede readiness here', approach: 'Premature-action framing', why: 'Demanding action before readiness tends to raise resistance', keys: ['stage mismatch'], mistake: 'Imposing action on an ambivalent client' }),
      O('c', 'Tell him to simply use more willpower and quit on his own, since stopping smoking is just a matter of self-control', -2,
        { r: 'Willpower-only advice ignores the disorder', approach: 'Willpower framing', why: 'Framing a use disorder as mere willpower disregards the evidence and his repeated failed attempts', keys: ['several failed quit attempts'], mistake: 'Reducing the disorder to willpower' }),
      O('d', 'Start him on a cessation medication that you will select and adjust over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor respond to his doubt that he can quit after past failures?', ['R5'], [
      O('a', 'Build self-efficacy by reframing past attempts as learning and reinforcing his confidence in small steps', 3,
        { r: 'Build self-efficacy from past attempts', approach: 'Strengthen confidence', why: 'Reframing past quit attempts as learning and reinforcing confidence supports the change process', keys: ['doubtful after failures', 'genuinely worried'], mistake: 'Letting his discouragement go unaddressed or confirming that he cannot change' }),
      O('b', 'Agree that he has probably failed too many times to succeed now and that quitting is likely beyond his reach', -2,
        { r: 'Confirming hopelessness is harmful', approach: 'Hopelessness framing', why: 'Reinforcing that he cannot change undermines motivation and self-efficacy', keys: ['build confidence'], mistake: 'Validating a hopeless self-belief' }),
      O('c', 'List in detail all the terrible things that will happen to him if he fails to quit smoking right away', -1,
        { r: 'Fear-based lecturing raises resistance', approach: 'Scare-tactic framing', why: 'Heavy fear appeals tend to entrench resistance and ambivalence', keys: ['evoke, do not impose'], mistake: 'Using fear rather than building motivation' }),
      O('d', 'Avoid the topic of his doubts entirely so that the sessions never touch on his past failures at all', -1,
        { r: 'Avoiding the doubt misses the work', approach: 'Avoidant framing', why: 'His self-efficacy doubts are central to address, not avoid', keys: ['engage the doubt'], mistake: 'Sidestepping a key barrier' }),
    ]),
    Q('q8', 'treatment', 'How should relapse and stress-related smoking be addressed in the plan?', ['R3'], [
      O('a', 'Develop relapse-prevention and coping strategies for the work stress that currently triggers his smoking', 3,
        { r: 'Relapse prevention and coping for triggers', approach: 'Plan for high-risk triggers', why: 'Relapse-prevention and coping strategies for his stress triggers support durable change', keys: ['smokes to manage job stress', 'high-risk triggers'], mistake: 'Ignoring the stress triggers that maintain the behavior' }),
      O('b', 'Treat any single slip as a complete and total failure that means the entire effort to quit has been wasted', -1,
        { r: 'All-or-nothing framing backfires', approach: 'All-or-nothing framing', why: 'Treating a lapse as total failure undermines relapse-prevention', keys: ['lapse versus relapse'], mistake: 'Setting up an all-or-nothing trap' }),
      O('c', 'Advise him to keep smoking during stressful weeks and only try to quit during the calmer stretches at work', -2,
        { r: 'Endorsing stress smoking maintains it', approach: 'Permission framing', why: 'Encouraging continued stress-driven smoking reinforces the behavior', keys: ['coping alternatives'], mistake: 'Endorsing the behavior the plan aims to change' }),
      O('d', 'Focus only on his physical cravings and leave the stress triggers and coping skills out of the plan entirely', -1,
        { r: 'Ignoring triggers narrows the plan', approach: 'Single-factor framing', why: 'Stress triggers and coping are central, not just physical cravings', keys: ['trigger-focused planning'], mistake: 'Omitting the key behavioral targets' }),
    ]),
    Q('q9', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track readiness, smoking levels, cravings, and use of coping skills over time to guide the stage-matched plan', 3,
        { r: 'Measurement-based tracking of readiness and use', approach: 'Monitor the relevant outcomes', why: 'Tracking readiness, smoking, cravings, and coping steers the stage-matched plan', keys: ['ambivalent', 'stress-driven smoking'], mistake: 'Proceeding without tracking readiness and the target behavior' }),
      O('b', 'Rely only on whether he happens to say in session that he is smoking a little less than he was before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the single number of cigarettes per day and base every decision solely on that one figure', -1,
        { r: 'A single number is too narrow', approach: 'Single-metric framing', why: 'Readiness, cravings, and coping all inform the plan, not a daily count alone', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one number' }),
      O('d', 'Wait until the end of treatment to review whether his smoking has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the plan', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q10', 'counseling', 'Walter says he is not sure he even wants to quit and resists the idea of a quit date. The most therapeutic response is to:', ['R2'], [
      O('a', 'Roll with the resistance, explore both sides of his ambivalence, and support his autonomy over the decision', 3,
        { r: 'Roll with resistance; support autonomy', approach: 'Use MI to work with ambivalence', why: 'Rolling with resistance and supporting his autonomy keeps an ambivalent client engaged', keys: ['not sure he wants to quit', 'resists a quit date'], mistake: 'Arguing for change and triggering more resistance' }),
      O('b', 'Tell him firmly that he must quit now and press him to commit to a quit date before he leaves the session', -1,
        { r: 'Pressuring raises resistance', approach: 'Confrontation framing', why: 'Pushing for commitment against his readiness tends to entrench resistance', keys: ['autonomy support'], mistake: 'Imposing change on an ambivalent client' }),
      O('c', 'Agree that there is no real reason for him to quit and drop the subject of his smoking from the work entirely', -1,
        { r: 'Dropping it forecloses the work', approach: 'Give-up framing', why: 'His ambivalence is workable; abandoning the topic is not indicated', keys: ['explore ambivalence'], mistake: 'Disengaging from the change conversation' }),
      O('d', 'Warn him that he will certainly die soon if he does not quit immediately so that the fear motivates him', -1,
        { r: 'Fear-based pressure backfires', approach: 'Scare-tactic framing', why: 'Heavy fear appeals tend to increase resistance rather than motivation', keys: ['evoke, do not impose'], mistake: 'Using fear rather than evoking motivation' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best strengthen Walter’s motivation to change?', ['R5'], [
      O('a', 'Evoke his own reasons and values for change and reinforce his confidence in manageable next steps', 3,
        { r: 'Evoke change talk and build confidence', approach: 'Build intrinsic motivation', why: 'Eliciting his own reasons and reinforcing confidence builds durable motivation to change', keys: ['worried about his health', 'doubtful he can quit'], mistake: 'Lecturing him on why he must quit instead of evoking his own motivation' }),
      O('b', 'Tell him repeatedly that his reasons do not matter and that he should simply do exactly as you and his doctor say', -2,
        { r: 'Dismissing his reasons undercuts motivation', approach: 'Authoritarian framing', why: 'Ignoring his values and autonomy erodes intrinsic motivation', keys: ['autonomy support'], mistake: 'Overriding the client’s autonomy' }),
      O('c', 'Focus the sessions mainly on detailing every health consequence of smoking in exhaustive detail every week', -1,
        { r: 'Lecturing on consequences raises resistance', approach: 'Lecture framing', why: 'Repeated consequence lectures tend to entrench ambivalence', keys: ['evoke, do not impose'], mistake: 'Imposing information rather than evoking motivation' }),
      O('d', 'Tell him counseling cannot help him at all unless he first agrees to start a cessation medication right away', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Behavioral work can proceed alongside any coordinated medication decision', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Walter says he is not ready to quit and asks the counselor to respect that for now. The most appropriate action is to:', ['R4'], [
      O('a', 'Respect his autonomy, continue to engage him, and keep the door open to change without coercion', 3,
        { r: 'Respect autonomy and keep engaging', approach: 'Honor autonomy within the work', why: 'Respecting his autonomy while staying engaged honors self-determination and supports eventual change', keys: ['asks that you respect his choice', 'ambivalent'], mistake: 'Coercing change against his stated autonomy' }),
      O('b', 'Discharge him from counseling immediately, since he is not ready to commit to quitting smoking right now', -1,
        { r: 'Discharging the ambivalent client is premature', approach: 'Premature-discharge framing', why: 'Ambivalence is workable; discharge for not being ready is not indicated', keys: ['continued engagement'], mistake: 'Abandoning the client over ambivalence' }),
      O('c', 'Override his wishes and contact his family to pressure him into quitting against what he has clearly asked for', -2,
        { r: 'Coercing via family violates autonomy and confidentiality', approach: 'Coercion framing', why: 'Pressuring him through family overrides autonomy and may breach confidentiality', keys: ['autonomy and confidentiality'], mistake: 'Coercing the client against his stated wishes' }),
      O('d', 'Tell him that respecting his choice means you can no longer discuss his smoking with him in any way at all', -1,
        { r: 'Refusing to discuss it forecloses the work', approach: 'All-or-nothing framing', why: 'Respecting autonomy still allows continued, non-coercive engagement about smoking', keys: ['ongoing engagement'], mistake: 'Treating respect for autonomy as ending the conversation' }),
    ]),
    Q('q13', 'ethics', 'Walter asks whether the counselor is competent to help with tobacco cessation. The most ethical response is to:', ['R4'], [
      O('a', 'Answer honestly about your competence and seek consultation or refer for any components beyond your training', 3,
        { r: 'Practice within competence', approach: 'Be transparent about competence', why: 'ACA C.2. requires practicing within competence and consulting or referring as needed', keys: ['client asks about competence', 'cessation focus'], mistake: 'Overstating competence to retain the client' }),
      O('b', 'Assure him you can handle anything at all and that there is no need for him to ask about your training again', -2,
        { r: 'Overstating competence is unethical', approach: 'Overclaim framing', why: 'Misrepresenting competence violates the ethics code', keys: ['honest representation'], mistake: 'Claiming competence you cannot support' }),
      O('c', 'Tell him the question is inappropriate and that clients should not ask their counselors about their qualifications', -2,
        { r: 'Dismissing the question is wrong', approach: 'Dismissive framing', why: 'Clients are entitled to ask about competence and credentials', keys: ['client autonomy'], mistake: 'Shutting down a legitimate question' }),
      O('d', 'Transfer him to someone else at once without explanation rather than discuss your training or arrange a handoff', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'An honest conversation, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the client instead of answering honestly' }),
    ]),
  ],
};

// ============================================================================
// D164 — Bipolar I Disorder, Current Episode Depressed (F31.31) — Bipolar — hard
// ============================================================================
const D164 = {
  id: 'ncmhce-D164',
  title: 'A depressive episode in someone with a clear past manic episode',
  category: 'Bipolar',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Bipolar I Disorder, Current Episode Depressed', code: 'F31.31' },
  diagnosis: { name: 'Bipolar I Disorder, Current Episode Depressed', code: 'F31.31' },
  differentialOptions: [
    { id: 'do1', name: 'Bipolar I Disorder, Current Episode Depressed', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do3', name: 'Bipolar II Disorder', isCorrect: false },
    { id: 'do4', name: 'Persistent Depressive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Daniel Osei, a 35-year-old musician, presents with several weeks of low mood, anhedonia, hypersomnia, and poor concentration. Two years ' +
      'ago he had a clearly documented manic episode with a week of elevated mood, grandiosity, and little need for sleep that led to a hospitalization.',
    session1:
      'His current episode is depressive, but the prior full manic episode establishes a bipolar I course rather than a unipolar one. He is not ' +
      'currently manic or hypomanic, and the past episode reached the full duration and severity of mania, not the milder threshold of hypomania.',
    session2:
      'He stopped his medication months ago because he "felt fine," and he now feels hopeless about his music and has had passing thoughts that ' +
      'he would be better off dead, without current plan or intent. He is worried an antidepressant alone last time seemed to make him "speed up."',
  },
  diagnosticRationale:
    'A current major depressive episode in an individual with a history of at least one full manic episode establishes bipolar I disorder, ' +
    'current episode depressed, rather than a unipolar depressive disorder—distinct from major depressive disorder and persistent depressive ' +
    'disorder, which lack a manic history, and bipolar II, in which the lifetime high reaches only hypomania.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Bipolar I: history of a full manic episode; specify current episode depressed when criteria for a major depressive episode are met' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Bipolar depression: mood-stabilizing pharmacotherapy and psychological intervention; caution with antidepressant monotherapy' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk in bipolar depression' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, coordination of care, and practicing within competence' },
    { id: 'R5', source: 'IPSRT', detail: 'Interpersonal and social rhythm therapy: stabilizing routines and supporting adherence in bipolar disorder' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a bipolar I, current episode depressed, diagnosis?', ['R1'], [
      O('a', 'A history of at least one full manic episode together with a current major depressive episode', 3,
        { r: 'Past full mania plus current depression', approach: 'Confirm the core criteria', why: 'Bipolar I requires a history of a full manic episode; the current depressive episode specifies the present state', keys: ['documented manic episode two years ago', 'current depressive episode'], mistake: 'Diagnosing unipolar depression by overlooking the prior manic episode' }),
      O('b', 'That he can identify the single stressful event he believes first set off his current low mood', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his low mood has deepened a little over the past few days compared with the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The lifetime course, not a recent dip, defines bipolar I', keys: ['longitudinal course'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently shows the exact number of neurocognitive deficits required for a major neurocognitive disorder', 0,
        { r: 'Cognitive count does not define it', approach: 'Neurocognitive framing', why: 'Bipolar I is defined by mood-episode history, not cognitive criteria', keys: ['mood-episode diagnosis'], mistake: 'Applying neurocognitive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from major depressive disorder?', ['R1'], [
      O('a', 'The documented history of a full manic episode, which establishes a bipolar rather than a unipolar course', 3,
        { r: 'Past full mania establishes bipolar course', approach: 'Contrast on the manic history', why: 'A full manic episode in the history makes this bipolar I, not unipolar major depression', keys: ['week of mania with hospitalization'], mistake: 'Treating current depression as unipolar despite a manic history' }),
      O('b', 'The fact that he is currently experiencing low mood, loss of interest, and trouble with his concentration', -1,
        { r: 'Depressive symptoms occur in both', approach: 'Depression framing', why: 'Current depressive symptoms occur in both; the manic history differs', keys: ['shared feature'], mistake: 'Using current depression to differentiate' }),
      O('c', 'The hopelessness he feels and the trouble he is having engaging with his music during this period', -1,
        { r: 'Hopelessness is nonspecific', approach: 'Hopelessness framing', why: 'Hopelessness occurs in both; the manic history differs', keys: ['shared affect'], mistake: 'Reading hopelessness as decisive' }),
      O('d', 'The way his mood tends to dip a little more in the mornings than it does later during the day', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Diurnal variation occurs in depression broadly and does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from bipolar II disorder?', ['R1'], [
      O('a', 'His past high reached a full manic episode, beyond the hypomania that defines the lifetime high in bipolar II', 3,
        { r: 'Full mania versus hypomania', approach: 'Contrast the severity of the past high', why: 'Bipolar II’s lifetime high reaches only hypomania; his prior episode met full manic severity and duration', keys: ['full manic episode', 'hospitalization'], mistake: 'Misclassifying a full manic history as bipolar II' }),
      O('b', 'The fact that he has had distinct periods of both elevated and depressed mood at different points in his life', -1,
        { r: 'Mood episodes occur in both', approach: 'Episode framing', why: 'Both involve mood episodes; the severity of the high differs', keys: ['shared feature'], mistake: 'Using the presence of mood episodes to differentiate' }),
      O('c', 'The current low mood and reduced energy that he is struggling with during this present episode', -1,
        { r: 'Current depression occurs in both', approach: 'Depression framing', why: 'A depressive episode occurs in both; the manic severity differs', keys: ['shared depression'], mistake: 'Reading current depression as decisive' }),
      O('d', 'The way his sleep tends to be more broken on the noisier nights when he has late gigs scheduled', 0,
        { r: 'Situational sleep change is nonspecific', approach: 'Environment framing', why: 'Situational poor sleep does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q4', 'core', 'What is the most important condition to exclude before confirming the diagnosis?', ['R1'], [
      O('a', 'A substance- or medical-induced mood disturbance that could mimic the mood episodes and must be ruled out', 3,
        { r: 'Exclude substance and medical causes', approach: 'Rule out organic and substance causes', why: 'Substances and medical conditions can mimic mood episodes and must be excluded', keys: ['rule out organic causes'], mistake: 'Skipping the substance and medical rule-out' }),
      O('b', 'A previously undetected specific phobia that might better account for his low mood and poor concentration', -1,
        { r: 'Phobia does not explain a mood episode', approach: 'Phobia framing', why: 'A phobia does not account for a major depressive episode', keys: ['mood-episode picture'], mistake: 'Reducing a mood episode to a phobia' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of both his manic and depressive episodes', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurodevelopmental disorder that could explain why his past manic episode was so severe', 0,
        { r: 'Neurodevelopmental framing is implausible', approach: 'Developmental framing', why: 'The episodic adult course fits bipolar I', keys: ['adult episodic course'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'intake', 'Given his thought that he would be "better off dead," what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment of current ideation, intent, plan, and protective factors now', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Bipolar depression carries elevated suicide risk, so current risk is assessed directly', keys: ['better off dead', 'hopeless about his music'], mistake: 'Failing to assess current suicide risk' }),
      O('b', 'Assume the risk has passed because he denies a current plan and says the thought only comes when he is low', -2,
        { r: 'Assuming risk passed is unsafe', approach: 'Dismissal framing', why: 'Passive ideation in bipolar depression still requires structured current assessment', keys: ['ongoing risk factors'], mistake: 'Dismissing risk on reassurance' }),
      O('c', 'Defer any risk assessment until his mood has improved and he has been stable for several months at least', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after the mood improves', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on his career worries for now and plan to return to any safety questions at a later date', -1,
        { r: 'Sequencing safety behind career worries is unsafe', approach: 'Single-issue framing', why: 'Career worries do not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation?', ['R2'], [
      O('a', 'Coordinate psychiatric care for mood-stabilizing treatment with psychotherapy, given the bipolar course', 3,
        { r: 'Mood-stabilizing care plus psychotherapy', approach: 'Apply the guideline within scope', why: 'Bipolar depression is treated with mood-stabilizing pharmacotherapy and psychotherapy within a coordinated team', keys: ['bipolar I course', 'stopped medication'], mistake: 'Treating it like unipolar depression and missing the bipolar-specific care' }),
      O('b', 'Recommend that he begin an antidepressant on its own, since his current episode is clearly a depressive one', -2,
        { r: 'Antidepressant monotherapy risks a switch', approach: 'Monotherapy framing', why: 'Antidepressant monotherapy in bipolar disorder risks a manic switch and is cautioned against', keys: ['antidepressant alone made him speed up'], mistake: 'Recommending antidepressant monotherapy in a bipolar course' }),
      O('c', 'Start him on a mood-stabilizing medication yourself and arrange to monitor his levels over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or monitor medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Recommend weekly supportive talks on their own as the complete treatment for his current depressive episode', -1,
        { r: 'Talks alone are insufficient', approach: 'Counseling-only framing', why: 'Bipolar depression warrants coordinated pharmacotherapy, not talk alone', keys: ['under-treatment'], mistake: 'Omitting medication coordination' }),
    ]),
    Q('q7', 'treatment', 'Given that he stopped his medication, what should the plan emphasize?', ['R5'], [
      O('a', 'Collaborative work on adherence and the reasons he stopped, supporting consistent, coordinated medication management', 3,
        { r: 'Adherence support and exploring why he stopped', approach: 'Target the adherence barriers', why: 'Relapse risk is high after stopping; collaborative adherence work and exploring his reasons are central', keys: ['stopped because he felt fine', 'relapsed into depression'], mistake: 'Ignoring the adherence issue that drove the relapse' }),
      O('b', 'Tell him that since he felt fine off medication he was probably right to stop and can manage without it now', -2,
        { r: 'Endorsing discontinuation is unsafe', approach: 'Validate-stopping framing', why: 'Feeling fine reflects stability on treatment, not a cure; endorsing stopping is unsafe', keys: ['continuity of treatment'], mistake: 'Validating an unsafe discontinuation' }),
      O('c', 'Tell him medication adherence is purely a medical issue that has no place in the counseling work at all', -1,
        { r: 'Adherence is a legitimate counseling focus', approach: 'Hands-off framing', why: 'Adherence is a collaborative, within-scope focus, coordinated with the prescriber', keys: ['shared focus'], mistake: 'Excluding an important treatment target' }),
      O('d', 'Advise him to restart medication only if and when he happens to feel a full manic episode coming on again', -2,
        { r: 'Reactive-only use worsens the course', approach: 'Reactive-use framing', why: 'Advising medication only at the next mania is unsafe and worsens outcomes', keys: ['maintenance treatment'], mistake: 'Recommending an unsafe, reactive medication pattern' }),
    ]),
    Q('q8', 'treatment', 'What psychosocial focus is most helpful alongside medication in his bipolar care?', ['R5'], [
      O('a', 'Stabilizing daily and sleep routines and psychoeducation about early warning signs of mood episodes', 3,
        { r: 'Rhythm stabilization and relapse psychoeducation', approach: 'Support rhythms and early-warning awareness', why: 'Stabilizing routines and recognizing early warning signs support relapse prevention in bipolar disorder', keys: ['musician with irregular schedule', 'history of mania and depression'], mistake: 'Providing support without rhythm stabilization or relapse-warning education' }),
      O('b', 'Encouraging him to keep an irregular schedule and pull all-nighters when his music is going well at the time', -2,
        { r: 'Rhythm disruption can trigger episodes', approach: 'Disrupt-rhythm framing', why: 'Sleep loss and irregular routines can trigger mood episodes in bipolar disorder', keys: ['rhythm stability'], mistake: 'Encouraging behavior that destabilizes mood' }),
      O('c', 'Focusing only on his current low mood and leaving any discussion of future manic episodes out of the plan entirely', -1,
        { r: 'Ignoring the manic pole is incomplete', approach: 'Half-the-picture framing', why: 'Bipolar care addresses both poles and relapse warning signs, not just the current depression', keys: ['both poles'], mistake: 'Planning for only one side of the illness' }),
      O('d', 'Telling him that as long as he takes medication there is no need to address routines, sleep, or warning signs at all', -1,
        { r: 'Medication alone is not the whole plan', approach: 'Medication-only framing', why: 'Psychosocial rhythm and relapse work complement medication in bipolar care', keys: ['combined care'], mistake: 'Treating medication as sufficient on its own' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the prescriber given his concern about the antidepressant?', ['R4'], [
      O('a', 'With his consent, share his history and concern about the prior "speed up" so the prescriber can weigh it', 3,
        { r: 'Share relevant history with consent', approach: 'Coordinate with consent', why: 'Communicating his prior apparent activation, with consent, informs safer prescribing decisions', keys: ['antidepressant alone made him speed up', 'bipolar course'], mistake: 'Withholding history relevant to safe prescribing, or sharing it without consent' }),
      O('b', 'Tell him to simply hide his bipolar history from the prescriber so he can get the antidepressant he wants', -2,
        { r: 'Concealing history endangers care', approach: 'Conceal-history framing', why: 'Hiding a manic history risks unsafe antidepressant monotherapy', keys: ['safe prescribing'], mistake: 'Encouraging concealment of safety-relevant history' }),
      O('c', 'Adjust his medication plan yourself based on his concern rather than involving the prescriber in the decision', -2,
        { r: 'Adjusting medication exceeds scope', approach: 'Self-adjust framing', why: 'Counselors do not adjust medication; the prescriber makes those decisions', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Avoid contacting the prescriber at all so that his counseling stays entirely separate from his medical care', -1,
        { r: 'No coordination undercuts safe care', approach: 'Siloed framing', why: 'Consented coordination supports safer prescribing here', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Daniel says he feels hopeless about his music and his future. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with empathy, monitor safety, and frame the hopelessness as a symptom of a treatable depressive episode', 3,
        { r: 'Empathize, monitor safety, reframe hopelessness', approach: 'Meet the hopelessness and instill hope', why: 'Empathizing while reframing hopelessness as a treatable symptom and monitoring safety supports him', keys: ['hopeless about his music', 'passing thoughts of being better off dead'], mistake: 'Either minimizing the hopelessness or failing to monitor safety' }),
      O('b', 'Agree that his music career is probably over and that his outlook is as bleak as it currently feels to him', -2,
        { r: 'Endorsing hopelessness is harmful', approach: 'Catastrophize framing', why: 'Confirming a bleak outlook deepens hopelessness and risk', keys: ['instill hope'], mistake: 'Validating a hopeless, depression-driven belief' }),
      O('c', 'Tell him he simply needs to think positively and that there is no real reason for him to feel hopeless at all', -1,
        { r: 'Dismissing the feeling invalidates him', approach: 'Minimize framing', why: 'Telling him to just think positively invalidates the feeling and the alliance', keys: ['validate then reframe'], mistake: 'Minimizing a central feeling' }),
      O('d', 'Change the subject to a lighter topic so that he does not have to dwell on the difficult feelings during the session', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'His hopelessness must be engaged and his safety monitored, not avoided', keys: ['engage and monitor'], mistake: 'Sidestepping a critical clinical moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Daniel’s engagement given his bipolar course?', ['R5'], [
      O('a', 'Build a collaborative alliance, normalize the long-term nature of the work, and anchor it in goals he values', 3,
        { r: 'Collaborative alliance and valued goals', approach: 'Frame the work realistically and collaboratively', why: 'A collaborative alliance tied to his own goals and a realistic long-term frame sustains engagement', keys: ['stopped medication when he felt fine', 'values his music'], mistake: 'Implying a quick fix that sets him up for another premature discontinuation' }),
      O('b', 'Promise him that a few sessions will permanently resolve his bipolar disorder and end all future episodes', -1,
        { r: 'Promising a cure is misleading', approach: 'Quick-fix framing', why: 'Overpromising sets up disappointment and undermines trust and adherence', keys: ['realistic expectations'], mistake: 'Setting an unrealistic expectation' }),
      O('c', 'Focus the sessions mainly on cataloguing every past mood episode in exhaustive detail every single week', -1,
        { r: 'Cataloguing episodes is not the work', approach: 'Catalogue framing', why: 'Exhaustive history logging without direction does not advance the valued-goals work', keys: ['goal focus'], mistake: 'Centering sessions on enumerating episodes' }),
      O('d', 'Tell him counseling cannot help him at all unless he first agrees to take medication exactly as the prescriber directs', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Psychotherapy can proceed alongside coordinated medication decisions', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Daniel’s passive thoughts of being better off dead intensify into active ideation with a developing plan. The most appropriate action is to:', ['R3'], [
      O('a', 'Complete a structured risk assessment and collaborative safety planning, escalating the level of care as indicated', 3,
        { r: 'Assess and safety-plan, escalate as needed', approach: 'Apply risk assessment and safety planning', why: 'Emerging active ideation with a plan requires structured assessment, safety planning, and escalation as indicated', keys: ['active ideation with a developing plan', 'bipolar depression'], mistake: 'Treating worsening, active ideation as no different from the earlier passive thoughts' }),
      O('b', 'Ask him to sign a no-suicide contract promising not to act, and treat that promise as the safety plan', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'Contract framing', why: 'No-suicide contracts do not ensure safety and are not a substitute for assessment and safety planning', keys: ['safety planning, not contracts'], mistake: 'Relying on a no-suicide contract' }),
      O('c', 'Wait until the next scheduled session to see whether the ideation passes before taking any further action', -2,
        { r: 'Delaying with active ideation is unsafe', approach: 'Wait-and-see framing', why: 'Active ideation with a developing plan requires prompt action, not waiting', keys: ['active risk'], mistake: 'Postponing action on escalating risk' }),
      O('d', 'Immediately hospitalize him regardless of the assessed level of risk or his own preferences and input', -1,
        { r: 'Match level of care to assessed risk', approach: 'Reflexive-hospitalization framing', why: 'Disposition follows a careful risk assessment and collaboration, not a reflex', keys: ['stratified decision'], mistake: 'Hospitalizing reflexively without assessment' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited experience with bipolar disorder. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and coordinate with a prescriber and team, referring for components beyond your competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; bipolar disorder is managed within a coordinated team', keys: ['limited bipolar experience', 'needs coordinated care'], mistake: 'Managing complex bipolar disorder alone without competence' }),
      O('b', 'Continue managing the entire case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell him his condition is not serious enough to need a prescriber and keep seeing him for supportive talks only', -2,
        { r: 'Minimizing the illness fails the client', approach: 'Downplay framing', why: 'Bipolar I with current depression and risk warrants coordinated, prescriber-involved care', keys: ['serious illness'], mistake: 'Underestimating the need for coordinated care' }),
      O('d', 'Transfer him at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

module.exports = { CASES: [D160, D161, D162, D163, D164] };
