// ============================================================================
// deep-cases-batch-13.js — NCMHCE deep cases, batch 13 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). On the
// reserved id block ncmhce-D165+, adding distinct diagnoses not yet covered:
//   ncmhce-D165  Schizophreniform Disorder (Psychotic)
//   ncmhce-D166  Schizotypal Personality Disorder (Personality)
//   ncmhce-D167  Hoarding Disorder (OCD-Related)
//   ncmhce-D168  Sedative, Hypnotic, or Anxiolytic Use Disorder (Substance)
//   ncmhce-D169  Tourette’s Disorder (Neurodevelopmental)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-13.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-13');console.log(validateExamDepthSet(CASES))"
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
// D165 — Schizophreniform Disorder (F20.81) — Psychotic — hard
// ============================================================================
const D165 = {
  id: 'ncmhce-D165',
  title: 'Psychotic symptoms lasting more than a month but under six',
  category: 'Psychotic',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Schizophreniform Disorder', code: 'F20.81' },
  diagnosis: { name: 'Schizophreniform Disorder', code: 'F20.81' },
  differentialOptions: [
    { id: 'do1', name: 'Schizophreniform Disorder', isCorrect: true },
    { id: 'do2', name: 'Brief Psychotic Disorder', isCorrect: false },
    { id: 'do3', name: 'Schizophrenia', isCorrect: false },
    { id: 'do4', name: 'Substance-Induced Psychotic Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Jordan Mensah, a 21-year-old college student, is referred after about two months of delusions, auditory hallucinations, and disorganized ' +
      'speech. The symptoms emerged over a few weeks, and there was no clear major mood episode running alongside the psychotic symptoms.',
    session1:
      'His symptoms have now lasted more than a month but less than six, so the full duration of schizophrenia has not been reached. A medical ' +
      'and toxicology workup was unremarkable and he denies substance use, and there is no concurrent mood episode that would point to a mood disorder.',
    session2:
      'He is frightened and his studies have suffered, and his family is anxious about what this means long term. He has had passing thoughts ' +
      'that life feels hopeless, without current plan or intent, and he is unsure whether he can return to campus this term.',
  },
  diagnosticRationale:
    'Active-phase psychotic symptoms—delusions, hallucinations, and disorganized speech—lasting at least one month but less than six, without a ' +
    'concurrent major mood episode and not attributable to a substance or medical condition, meet DSM-5-TR criteria for schizophreniform ' +
    'disorder, distinct from brief psychotic disorder, schizophrenia, and a substance-induced psychotic disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Schizophreniform disorder: schizophrenia-like symptoms lasting 1 to <6 months; no required functional decline' },
    { id: 'R2', source: 'NICE guidelines', detail: 'First-episode psychosis: antipsychotic medication and psychological support within early-intervention care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening during and after a psychotic episode' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'B.2. and C.2.: coordination of care, danger exceptions, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance and supportive, recovery-oriented engagement' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a schizophreniform disorder diagnosis?', ['R1'], [
      O('a', 'Active psychotic symptoms lasting at least a month but under six, without a concurrent major mood episode', 3,
        { r: 'One to six months, no concurrent mood episode', approach: 'Confirm the core criteria', why: 'Schizophreniform disorder requires schizophrenia-like symptoms for 1 to under 6 months without a concurrent mood episode', keys: ['about two months of symptoms', 'no concurrent mood episode'], mistake: 'Diagnosing without confirming the duration window and the absence of a mood episode' }),
      O('b', 'That he can identify the single stressful event he believes first set off his psychotic symptoms', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his symptoms have grown a little more intense over the past few days than the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The duration window, not a recent uptick, defines it', keys: ['duration window'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Schizophreniform disorder is defined by psychotic symptoms, not mood criteria', keys: ['psychotic-spectrum diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from brief psychotic disorder?', ['R1'], [
      O('a', 'His symptoms have already lasted more than a month, beyond the under-a-month window of brief psychotic disorder', 3,
        { r: 'Over a month versus under a month', approach: 'Contrast the duration windows', why: 'Brief psychotic disorder resolves within a month; his symptoms have lasted longer', keys: ['more than a month', 'about two months'], mistake: 'Overlooking the longer duration that distinguishes the two' }),
      O('b', 'The fact that he has experienced delusions and auditory hallucinations during this episode of his illness', -1,
        { r: 'Positive symptoms occur in both', approach: 'Symptom-presence framing', why: 'Delusions and hallucinations occur in both; the duration differs', keys: ['shared feature'], mistake: 'Using positive symptoms to differentiate' }),
      O('c', 'The fear and the disorganization that he has shown during this difficult and frightening period', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress occurs in both; the duration differs', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way his symptoms felt a little worse during the most stressful weeks of his college term', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from schizophrenia?', ['R1'], [
      O('a', 'His symptoms have not yet reached the six-month duration that a schizophrenia diagnosis requires', 3,
        { r: 'Under six months versus six or more', approach: 'Contrast the duration threshold', why: 'Schizophrenia requires six months of disturbance; his episode is shorter', keys: ['less than six months', 'first episode'], mistake: 'Diagnosing schizophrenia before the six-month threshold is met' }),
      O('b', 'The fact that he has had delusions and some disorganized speech during this current period of illness', -1,
        { r: 'Psychosis occurs in both', approach: 'Psychosis framing', why: 'Psychotic symptoms occur in both; the duration differs', keys: ['shared feature'], mistake: 'Using psychosis to differentiate' }),
      O('c', 'The trouble he has had making sense of things while he has been acutely unwell over these weeks', -1,
        { r: 'Acute disorganization occurs in both', approach: 'Disorganization framing', why: 'Disorganization occurs in both; the duration differs', keys: ['shared experience'], mistake: 'Reading disorganization as decisive' }),
      O('d', 'The way his symptoms have been a bit worse in the evenings than they are earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'What is the most important condition to exclude before confirming the diagnosis?', ['R1'], [
      O('a', 'A substance- or medical-induced psychosis, which his unremarkable workup and denial of use make less likely but worth confirming', 3,
        { r: 'Exclude substance and medical causes', approach: 'Rule out organic and substance causes', why: 'Substances and medical conditions can produce psychosis and must be excluded', keys: ['unremarkable workup', 'denies substance use'], mistake: 'Skipping the substance and medical rule-out' }),
      O('b', 'A previously undetected specific phobia that might better account for his fear and disorganized thinking', -1,
        { r: 'Phobia does not explain psychosis', approach: 'Phobia framing', why: 'A phobia does not account for delusions and disorganization', keys: ['psychotic features'], mistake: 'Reducing psychosis to a phobia' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of all of his psychotic symptoms', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurodevelopmental disorder that could explain why his studies have started to suffer this term', 0,
        { r: 'Neurodevelopmental framing is implausible', approach: 'Developmental framing', why: 'The acute psychotic onset fits schizophreniform disorder', keys: ['acute onset'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'intake', 'During and after a psychotic episode, what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment of current ideation, intent, plan, and protective factors now', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Psychotic episodes carry elevated risk, so current risk is assessed directly', keys: ['life feels hopeless', 'frightened'], mistake: 'Failing to assess current suicide risk' }),
      O('b', 'Assume the risk is negligible because he denies a current plan and his family is anxious but present', -2,
        { r: 'Assuming low risk is unsafe', approach: 'Dismissal framing', why: 'Passive ideation still requires structured current assessment', keys: ['ongoing risk factors'], mistake: 'Dismissing risk on reassurance' }),
      O('c', 'Defer any risk assessment until the psychosis has fully resolved and he has been stable for several months', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after the psychosis resolves', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on his questions about returning to campus and return to safety questions later at some point', -1,
        { r: 'Sequencing safety behind campus questions is unsafe', approach: 'Single-issue framing', why: 'Campus questions do not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation?', ['R2'], [
      O('a', 'Coordinate psychiatric evaluation for medication with psychological support and early-intervention care', 3,
        { r: 'Psychiatric eval plus psychological support', approach: 'Apply the guideline within scope', why: 'First-episode psychosis warrants psychiatric evaluation for medication with psychological support', keys: ['first episode', 'frightened student'], mistake: 'Offering counseling alone for a first psychotic episode' }),
      O('b', 'Begin intensive insight-oriented therapy alone to help him uncover the deeper meaning of his delusions', -1,
        { r: 'Insight-only is not first-line', approach: 'Depth-work framing', why: 'Psychiatric evaluation and supportive care come first', keys: ['first episode'], mistake: 'Prioritizing insight over indicated care' }),
      O('c', 'Start him on an antipsychotic medication yourself and arrange to monitor his response over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or monitor antipsychotics', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Reassure him that the symptoms will simply pass on their own and that no further evaluation is needed at all', -2,
        { r: 'Minimizing a first episode is unsafe', approach: 'Minimize framing', why: 'A first psychotic episode warrants evaluation and coordinated care', keys: ['first episode'], mistake: 'Failing to arrange indicated evaluation' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor address his fear about what the diagnosis means long term?', ['R5'], [
      O('a', 'Provide accurate, hopeful psychoeducation about the provisional nature of the diagnosis while supporting him', 3,
        { r: 'Accurate, hopeful psychoeducation', approach: 'Inform and support', why: 'Honest psychoeducation about the provisional course supports him without false certainty', keys: ['fears the long-term meaning', 'first episode'], mistake: 'Either guaranteeing an outcome or amplifying a catastrophic prognosis' }),
      O('b', 'Tell him with certainty that he definitely has schizophrenia and will need lifelong treatment from now on', -2,
        { r: 'Premature certainty is inaccurate', approach: 'Premature-label framing', why: 'The diagnosis is provisional before six months; asserting schizophrenia is inaccurate', keys: ['provisional diagnosis'], mistake: 'Asserting a premature, definitive prognosis' }),
      O('c', 'Tell him with certainty that this will never happen again and that there is nothing further to worry about at all', -1,
        { r: 'False reassurance is misleading', approach: 'Overpromise framing', why: 'Guaranteeing it will not recur is not honest', keys: ['honest framing'], mistake: 'Offering a guarantee you cannot make' }),
      O('d', 'Avoid the topic of prognosis entirely so that the sessions never touch on his fears about the future at all', -1,
        { r: 'Avoidance leaves the fear unaddressed', approach: 'Avoidant framing', why: 'His fears about the future are central to address, not avoid', keys: ['engage the fear'], mistake: 'Sidestepping a key concern' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor handle his question about returning to campus?', ['R4'], [
      O('a', 'Coordinate with his treatment team and the school’s process so any return is guided by appropriate clinical input', 3,
        { r: 'Coordinate a clinically guided return', approach: 'Coordinate within scope', why: 'A return after acute psychosis is guided by the treatment team and the school’s support process', keys: ['studies have suffered', 'first episode'], mistake: 'Clearing or barring him from campus unilaterally without coordination' }),
      O('b', 'Tell him to return to a full course load right away, since he is feeling a little better than last week', -2,
        { r: 'Unilateral clearance is premature', approach: 'Premature-clearance framing', why: 'A return is clinically guided, not based on feeling somewhat better', keys: ['clinical guidance'], mistake: 'Clearing him unilaterally and prematurely' }),
      O('c', 'Tell him he can never return to college again and should give up on his degree because of this episode', -2,
        { r: 'A permanent bar is unwarranted', approach: 'Catastrophize framing', why: 'A first episode does not warrant a permanent academic bar', keys: ['recovery-oriented'], mistake: 'Imposing an unwarranted, catastrophic restriction' }),
      O('d', 'Tell him the decision is entirely his alone and that no clinical input is needed before he returns to campus', -1,
        { r: 'No clinical input understates the need', approach: 'Hands-off framing', why: 'A clinically informed, coordinated decision is appropriate after acute psychosis', keys: ['coordinated decision'], mistake: 'Omitting needed clinical coordination' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the psychiatrist and other providers?', ['R4'], [
      O('a', 'Obtain his informed consent and a release, then collaborate with the team and share what is needed for his care', 3,
        { r: 'Consent and release before coordinating', approach: 'Secure consent first', why: 'Coordination requires a valid release before sharing protected information', keys: ['multiple providers', 'first episode'], mistake: 'Coordinating before obtaining consent' }),
      O('b', 'Share his full history with everyone involved right away, since coordinating his care is plainly in his interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Avoid contacting the psychiatrist at all so that his counseling stays completely separate from his medical care', -1,
        { r: 'No coordination undercuts team care', approach: 'Siloed-care framing', why: 'Consented coordination benefits care here', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Release his complete record to every provider so they each hold the full picture of all of his treatment', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure is consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
    Q('q10', 'counseling', 'Jordan says he is terrified he is "going crazy" and will lose everything. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with empathy, instill realistic hope about recovery, and support him through the uncertainty', 3,
        { r: 'Empathize and instill realistic hope', approach: 'Reduce fear and support recovery', why: 'Empathic, hopeful support counters catastrophic fear without minimizing his experience', keys: ['terrified of going crazy', 'first episode'], mistake: 'Either minimizing the fear or amplifying the catastrophic outlook' }),
      O('b', 'Agree that he is probably going to lose everything so that he can begin to accept his new reality now', -2,
        { r: 'Endorsing catastrophe is harmful', approach: 'Catastrophize framing', why: 'Reinforcing a catastrophic outlook deepens hopelessness and risk', keys: ['recovery-oriented'], mistake: 'Validating a catastrophic belief' }),
      O('c', 'Tell him he has no reason at all to be afraid and that he should simply put the whole thing out of his mind', -1,
        { r: 'Dismissing the fear invalidates him', approach: 'Minimize framing', why: 'Telling him to just stop worrying invalidates the fear and the alliance', keys: ['validate then support'], mistake: 'Minimizing a central feeling' }),
      O('d', 'Change the subject to something lighter so that he does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'His fear can be engaged and supported, not avoided', keys: ['engage the distress'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Jordan during recovery?', ['R5'], [
      O('a', 'Support stabilization, coping, and his support network while monitoring for any change in symptoms', 3,
        { r: 'Stabilization, coping, and monitoring', approach: 'Recovery-oriented support', why: 'Supporting coping and the support network while monitoring symptoms fits the recovery phase', keys: ['anxious family', 'first episode'], mistake: 'Pushing intensive depth work before stabilization is consolidated' }),
      O('b', 'Press him to relive and analyze the psychotic experiences in vivid detail in each of the early sessions', -1,
        { r: 'Premature reliving can destabilize', approach: 'Reliving framing', why: 'Detailed reliving before stabilization can be destabilizing', keys: ['stabilization first'], mistake: 'Forcing intensive processing too early' }),
      O('c', 'Focus the sessions mainly on cataloguing the content of every delusion in exhaustive detail each week', -1,
        { r: 'Dwelling on content is not the work', approach: 'Content-focus framing', why: 'Elaborating delusional content is not the recovery-phase priority', keys: ['recovery focus'], mistake: 'Centering the work on the psychotic content' }),
      O('d', 'Tell him counseling cannot help unless he first agrees to take medication exactly as the psychiatrist directs', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Supportive recovery work proceeds alongside coordinated medication decisions', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Jordan makes a specific, credible threat to harm an identifiable person during a session. The most appropriate action is to:', ['R4'], [
      O('a', 'Assess the risk and follow duty-to-protect obligations, which may require warning or other protective steps', 3,
        { r: 'Assess and act on duty to protect', approach: 'Apply duty-to-protect', why: 'A serious, specific, identifiable threat triggers assessment and protective duties', keys: ['specific threat', 'identifiable person'], mistake: 'Treating an identifiable threat as fully confidential' }),
      O('b', 'Keep the threat entirely confidential, since everything shared in counseling must always stay completely private', -2,
        { r: 'Confidentiality yields to a serious threat', approach: 'Absolutist framing', why: 'A serious, identifiable threat can require disclosure', keys: ['identifiable target'], mistake: 'Treating confidentiality as absolute when there is danger' }),
      O('c', 'Wait to see whether he repeats the threat at the next session before assessing the risk or taking any action', -2,
        { r: 'Delaying assessment is unsafe', approach: 'Wait-and-see framing', why: 'An identifiable threat requires prompt assessment', keys: ['active threat'], mistake: 'Postponing an urgent risk assessment' }),
      O('d', 'Notify the police and the person at once without first assessing the seriousness or following the proper protective process', -1,
        { r: 'Act on assessed risk, not reflexively', approach: 'Reflexive-disclosure framing', why: 'Protective steps follow a careful risk assessment', keys: ['proportionate response'], mistake: 'Disclosing before assessing the risk' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited experience with first-episode psychosis. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and coordinate with a treatment team, referring for the components beyond your competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; first-episode psychosis is managed within a coordinated team', keys: ['limited psychosis experience', 'first episode'], mistake: 'Managing first-episode psychosis alone without competence' }),
      O('b', 'Continue managing the entire case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell him the episode is not serious enough to need psychiatric care and keep seeing him for supportive talks only', -2,
        { r: 'Minimizing the episode fails the client', approach: 'Downplay framing', why: 'A first psychotic episode warrants psychiatric coordination', keys: ['first episode'], mistake: 'Underestimating the need for specialist care' }),
      O('d', 'Transfer him at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D166 — Schizotypal Personality Disorder (F21) — Personality — hard
// ============================================================================
const D166 = {
  id: 'ncmhce-D166',
  title: 'Lifelong eccentricity, odd beliefs, and social discomfort',
  category: 'Personality',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Schizotypal Personality Disorder', code: 'F21' },
  diagnosis: { name: 'Schizotypal Personality Disorder', code: 'F21' },
  differentialOptions: [
    { id: 'do1', name: 'Schizotypal Personality Disorder', isCorrect: true },
    { id: 'do2', name: 'Schizophrenia', isCorrect: false },
    { id: 'do3', name: 'Schizoid Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Autism Spectrum Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Felix Donnelly, a 34-year-old night-shift stocker, is referred after a primary-care visit. He describes a lifelong pattern of odd beliefs, ' +
      'magical thinking, unusual perceptual experiences, and acute social anxiety that does not ease with familiarity, leaving him largely isolated.',
    session1:
      'He has ideas of reference and eccentric speech but no frank, sustained psychosis; his reality testing is largely intact even when his ' +
      'beliefs are odd. The pattern is pervasive and enduring since early adulthood, present across settings rather than limited to a few situations.',
    session2:
      'He wants connection but finds people unnerving and reads hidden meanings into ordinary events, and his social anxiety stems from suspiciousness ' +
      'rather than fear of embarrassment. He has had passing thoughts that life is pointless, without current plan or intent, and feels lonely.',
  },
  diagnosticRationale:
    'A pervasive pattern of social and interpersonal deficits with acute discomfort and reduced capacity for close relationships, plus cognitive ' +
    'and perceptual distortions and eccentricities of behavior, beginning by early adulthood, meets DSM-5-TR criteria for schizotypal personality ' +
    'disorder, distinct from the sustained psychosis of schizophrenia, the detachment of schizoid PD, and the social-communication deficits of autism.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Schizotypal PD: pervasive social deficits, cognitive-perceptual distortions, and eccentricity by early adulthood; reality testing largely intact' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Approach selection, the working alliance, and graded interpersonal work in personality-focused care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when isolation and hopelessness co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, autonomy, and practicing within competence' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Clinical decision-making and measurement-based care across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to support a schizotypal personality disorder diagnosis?', ['R1'], [
      O('a', 'A pervasive, early-adulthood pattern of cognitive-perceptual distortions, eccentricity, and acute social discomfort', 3,
        { r: 'Pervasive distortions and eccentricity from early adulthood', approach: 'Confirm the trait pattern', why: 'Schizotypal PD requires a pervasive, enduring pattern of cognitive-perceptual distortions and eccentricity by early adulthood', keys: ['lifelong odd beliefs', 'pervasive across settings'], mistake: 'Diagnosing from a single odd belief rather than the pervasive pattern' }),
      O('b', 'That he can name the single past event he believes first made him feel so uneasy around other people', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['pattern-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his odd beliefs have become a little stronger over the past few days than they were the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A pervasive, enduring pattern is required', keys: ['enduring pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Schizotypal PD is a personality pattern, not a mood episode', keys: ['personality pattern'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from schizophrenia?', ['R1'], [
      O('a', 'His reality testing is largely intact without sustained psychosis, unlike the active-phase symptoms of schizophrenia', 3,
        { r: 'Largely intact reality testing, no sustained psychosis', approach: 'Contrast on sustained psychosis', why: 'Schizophrenia involves sustained active-phase psychosis; his odd beliefs occur with largely intact reality testing', keys: ['no frank, sustained psychosis', 'reality testing largely intact'], mistake: 'Reading eccentric beliefs as a sustained psychotic disorder' }),
      O('b', 'The fact that he holds some odd beliefs and reads hidden meanings into the ordinary events around him', -1,
        { r: 'Odd beliefs can occur in both', approach: 'Belief framing', why: 'Odd ideation can occur in both; the sustained psychosis differs', keys: ['shared feature'], mistake: 'Using odd beliefs to differentiate' }),
      O('c', 'The unusual perceptual experiences that he sometimes notices during his day-to-day life', -1,
        { r: 'Perceptual oddities occur in both', approach: 'Perception framing', why: 'Perceptual distortions can occur in both; the level differs', keys: ['shared experience'], mistake: 'Reading perceptual oddities as decisive' }),
      O('d', 'The way his discomfort tends to feel a bit worse during the busiest and most crowded nights at his job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening in crowds does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from schizoid personality disorder?', ['R1'], [
      O('a', 'He has cognitive-perceptual distortions and wants connection but feels acute discomfort, unlike the detached indifference of schizoid PD', 3,
        { r: 'Distortions and desire for connection versus detachment', approach: 'Contrast the cognitive features and motive', why: 'Schizoid PD is detached and indifferent to relationships; he has perceptual distortions and wants connection but feels discomfort', keys: ['wants connection', 'magical thinking and ideas of reference'], mistake: 'Confusing anxious, distortion-laden isolation with indifferent detachment' }),
      O('b', 'The fact that he spends a great deal of his time alone and tends to have only fairly limited day-to-day contact with the various people around him', -1,
        { r: 'Social isolation occurs in both', approach: 'Isolation framing', why: 'Social isolation occurs in both; the cognitive features and motive differ', keys: ['shared feature'], mistake: 'Using isolation to differentiate' }),
      O('c', 'The discomfort that he feels in social situations and his tendency to keep his distance from others', -1,
        { r: 'Social distance occurs in both', approach: 'Distance framing', why: 'Social distance occurs in both; the underlying features differ', keys: ['shared distance'], mistake: 'Reading social distance as decisive' }),
      O('d', 'The way his mood tends to dip a little more in the evenings than it does earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from autism spectrum disorder?', ['R1'], [
      O('a', 'His social anxiety stems from suspiciousness and odd beliefs, not the early social-communication deficits that define autism', 3,
        { r: 'Suspiciousness-driven, not social-communication deficits', approach: 'Contrast the source of the social difficulty', why: 'Autism involves early social-communication deficits; his social difficulty stems from suspiciousness and cognitive distortions', keys: ['social anxiety from suspiciousness', 'ideas of reference'], mistake: 'Reading suspiciousness-driven social difficulty as autistic social-communication deficits' }),
      O('b', 'The fact that he has long had real difficulty forming close and comfortable relationships with other people', -1,
        { r: 'Social difficulty occurs in both', approach: 'Social-difficulty framing', why: 'Difficulty with relationships occurs in both; the source differs', keys: ['shared feature'], mistake: 'Using social difficulty to differentiate' }),
      O('c', 'The way he can seem eccentric and a little different from others in how he comes across socially', -1,
        { r: 'Apparent eccentricity occurs in both', approach: 'Eccentricity framing', why: 'Apparent eccentricity can occur in both; the underlying features differ', keys: ['shared appearance'], mistake: 'Reading eccentricity as decisive' }),
      O('d', 'The way his discomfort tends to be a little worse on the busier and more crowded shifts at his job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening on busy shifts does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q5', 'intake', 'Given his thought that life is pointless, what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment of current ideation, intent, plan, and protective factors now', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Isolation and hopelessness warrant structured assessment of current risk', keys: ['life is pointless', 'largely isolated and lonely'], mistake: 'Failing to assess current suicide risk' }),
      O('b', 'Assume the risk has passed because he denies a current plan and says the thought only comes when he is lonely', -2,
        { r: 'Assuming risk passed is unsafe', approach: 'Dismissal framing', why: 'Passive ideation still requires structured current assessment', keys: ['ongoing risk factors'], mistake: 'Dismissing risk on reassurance' }),
      O('c', 'Defer any risk assessment until his social functioning improves and he has been stable for several months', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after functioning improves', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on building his social skills for now and return to any safety questions at a much later date', -1,
        { r: 'Sequencing safety behind skills is unsafe', approach: 'Single-issue framing', why: 'Skill-building does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment framework for Felix?', ['R2'], [
      O('a', 'Supportive, structured psychotherapy building the alliance and graded social skills, coordinating care as needed', 3,
        { r: 'Supportive, structured psychotherapy with graded social work', approach: 'Apply a personality-focused, supportive approach', why: 'Schizotypal PD is addressed with supportive, structured therapy that builds the alliance and graded interpersonal skills', keys: ['wants connection', 'acute social discomfort'], mistake: 'Pushing intensive, anxiety-provoking interpersonal work before a stable alliance' }),
      O('b', 'Intensive confrontation of his odd beliefs to force him to abandon them quickly in the early sessions', -2,
        { r: 'Confronting the beliefs ruptures the alliance', approach: 'Confront framing', why: 'Aggressively confronting his beliefs damages trust and is counter-therapeutic', keys: ['build the alliance'], mistake: 'Arguing him out of his beliefs early' }),
      O('c', 'Telling him personality cannot change and that he should simply accept a life of isolation from now on', -2,
        { r: 'Therapeutic nihilism abandons the client', approach: 'Nihilism framing', why: 'Supportive work can improve functioning; dismissing change abandons the client', keys: ['change is possible'], mistake: 'Foreclosing change' }),
      O('d', 'Starting him on a medication that you will select and adjust to reduce his odd beliefs over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor handle his odd beliefs and ideas of reference in the work?', ['R2'], [
      O('a', 'Stay supportive and neither endorse nor argue against the beliefs, focusing on his goals and the alliance', 3,
        { r: 'Neither collude nor confront the beliefs', approach: 'Stay supportive and neutral on content', why: 'A supportive stance that avoids colluding or arguing preserves the alliance with a suspicious client', keys: ['ideas of reference', 'suspiciousness'], mistake: 'Either agreeing with or directly disputing the odd beliefs' }),
      O('b', 'Repeatedly challenge each odd belief with evidence until he finally admits that none of them are true', -2,
        { r: 'Confronting the beliefs entrenches them', approach: 'Confront framing', why: 'Direct confrontation tends to entrench beliefs and damage trust', keys: ['suspiciousness'], mistake: 'Arguing the client out of the beliefs' }),
      O('c', 'Agree with him that his interpretations of hidden meanings are most likely correct so he feels understood', -2,
        { r: 'Colluding reinforces the distortions', approach: 'Collude framing', why: 'Agreeing reinforces the cognitive distortions', keys: ['reality testing'], mistake: 'Validating distortions to keep rapport' }),
      O('d', 'Avoid the topic of his beliefs entirely so that the sessions never touch on anything that might unsettle him', -1,
        { r: 'Total avoidance misses material', approach: 'Avoidant framing', why: 'The work engages his goals and distress without colluding or confronting', keys: ['engage the goals'], mistake: 'Sidestepping the relevant material' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked in this personality-focused work?', ['R5'], [
      O('a', 'Track social functioning, distress, and engagement over time to guide a longer-term, supportive course', 3,
        { r: 'Measurement-based tracking of functioning and engagement', approach: 'Measure functioning over time', why: 'Tracking social functioning, distress, and engagement steers a longer-term, supportive course', keys: ['largely isolated', 'wants connection'], mistake: 'Proceeding without a way to gauge change' }),
      O('b', 'Rely only on whether he happens to remark in session that he feels a little less anxious than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how unusual his beliefs sound at each session and base every decision solely on that impression', -1,
        { r: 'Belief unusualness is the wrong metric', approach: 'Wrong-metric framing', why: 'Functioning and engagement are the outcomes, not how odd the beliefs sound', keys: ['functioning focus'], mistake: 'Measuring the wrong variable' }),
      O('d', 'Wait until the very last session to decide whether anything has changed at all since the first appointment', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer a longer course', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor handle any medication question he raises?', ['R4'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation while continuing the supportive psychotherapy within scope', 3,
        { r: 'Refer for prescribing, keep doing therapy', approach: 'Coordinate within scope', why: 'Medication questions are referred to a prescriber while the counselor continues supportive therapy', keys: ['asks about medication', 'scope limits'], mistake: 'Advising on specific medication outside scope' }),
      O('b', 'Recommend a specific medication and dose for him to begin taking before his next primary-care visit', -2,
        { r: 'Recommending a drug and dose exceeds scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not recommend specific drugs or doses', keys: ['no prescriptive authority'], mistake: 'Making a prescribing recommendation' }),
      O('c', 'Tell him that medication never helps with personality patterns and that he should refuse it if it is offered', -1,
        { r: 'Blanket refusal advice overreaches', approach: 'Anti-medication framing', why: 'The prescriber and client weigh medication; the counselor does not forbid it', keys: ['shared decision'], mistake: 'Directing a medical decision' }),
      O('d', 'Ignore the medication question and simply redirect him back to the social-skills work every time he raises it', -1,
        { r: 'Dismissing the question is unhelpful', approach: 'Avoidant framing', why: 'A referral, not avoidance, is the appropriate response', keys: ['coordinated care'], mistake: 'Failing to address a legitimate question' }),
    ]),
    Q('q10', 'counseling', 'Felix grows guarded, suspecting the counselor is "reading into" his words. The most therapeutic response is to:', ['R2'], [
      O('a', 'Acknowledge his discomfort calmly, be transparent about your intent, and let trust build at his pace', 3,
        { r: 'Acknowledge, be transparent, build trust', approach: 'Defuse suspiciousness with transparency', why: 'Calm acknowledgment and transparency help a suspicious client build trust without confrontation', keys: ['suspiciousness', 'ideas of reference'], mistake: 'Becoming defensive or dismissing his suspicion outright' }),
      O('b', 'Insist firmly that he is wrong to be suspicious and that he simply needs to trust you from now on', -1,
        { r: 'Demanding trust raises suspicion', approach: 'Demand-trust framing', why: 'Insisting he trust you tends to increase guardedness', keys: ['build trust gradually'], mistake: 'Pressuring rather than building trust' }),
      O('c', 'Agree that you probably are hiding something so that he feels validated and stays in the session with you', -2,
        { r: 'Colluding reinforces the suspicion', approach: 'Collude framing', why: 'Confirming a false suspicion reinforces the distortion', keys: ['reality testing'], mistake: 'Validating the suspicion to keep rapport' }),
      O('d', 'End the session early to give him space rather than addressing his suspicion with him in the room', -1,
        { r: 'Avoiding the moment misses an opening', approach: 'Escape framing', why: 'His suspicion can be engaged supportively in the room', keys: ['engage the moment'], mistake: 'Sidestepping the interaction' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best engage Felix given his social discomfort and desire for connection?', ['R2'], [
      O('a', 'Move at a tolerable pace toward concrete, valued social goals he chooses, reinforcing each small success', 3,
        { r: 'Paced, graded work toward his own goals', approach: 'Build connection on his terms', why: 'Graded steps toward his own valued social goals, reinforced, engage a discomfort-prone client', keys: ['wants connection', 'finds people unnerving'], mistake: 'Pushing intensive social exposure faster than the alliance allows' }),
      O('b', 'Insist that he immediately join group activities and force himself into crowded social settings each week', -1,
        { r: 'Forcing exposure overwhelms him', approach: 'Force-exposure framing', why: 'Pushing intense social exposure too fast overwhelms a discomfort-prone client', keys: ['graded pacing'], mistake: 'Overwhelming him with exposure' }),
      O('c', 'Focus the sessions mainly on cataloguing his unusual beliefs in exhaustive detail every single week', -1,
        { r: 'Cataloguing beliefs is not the work', approach: 'Catalogue framing', why: 'Enumerating beliefs does not advance the valued social goals', keys: ['goal focus'], mistake: 'Centering the work on the beliefs' }),
      O('d', 'Tell him counseling cannot help him at all unless he first agrees to give up his odd beliefs entirely', -1,
        { r: 'Demanding he renounce beliefs stalls engagement', approach: 'Precondition framing', why: 'Requiring he abandon his beliefs first blocks engagement', keys: ['engage despite beliefs'], mistake: 'Setting an insight precondition' }),
    ]),
    Q('q12', 'ethics', 'Felix asks the counselor to keep his diagnosis out of records his employer could access. The most appropriate action is to:', ['R4'], [
      O('a', 'Clarify confidentiality and the limits of any release, sharing only what he consents to and what is needed', 3,
        { r: 'Honor consent and minimum-necessary disclosure', approach: 'Apply consent and minimum necessary', why: 'Disclosures to third parties are governed by his informed consent and minimum-necessary limits', keys: ['wants diagnosis withheld from employer', 'adult client'], mistake: 'Disclosing more than he consents to or than is necessary' }),
      O('b', 'Send his full clinical record, including the diagnosis, to his employer right away since they may need it anyway', -2,
        { r: 'Sending everything ignores consent', approach: 'Over-disclosure framing', why: 'Third-party disclosure requires consent and minimum-necessary limits', keys: ['minimum necessary'], mistake: 'Over-disclosing without consent' }),
      O('c', 'Falsify the record to remove the diagnosis entirely so that there is no chance his employer could ever see it', -2,
        { r: 'Falsifying records is unethical', approach: 'Falsify framing', why: 'Altering the clinical record to hide a diagnosis violates professional honesty', keys: ['accurate records'], mistake: 'Falsifying documentation' }),
      O('d', 'Refuse to discuss the confidentiality question at all and simply change the subject whenever he raises it', -1,
        { r: 'Avoiding the issue is unhelpful', approach: 'Avoidant framing', why: 'Confidentiality should be explained, not avoided', keys: ['transparent limits'], mistake: 'Sidestepping a needed conversation' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in personality disorders with cognitive-perceptual features. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; complex personality work may need consultation, training, or referral', keys: ['limited training', 'complex presentation'], mistake: 'Managing a complex case alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell him his difficulties are not serious enough to need specialized help and continue with general talks only', -2,
        { r: 'Minimizing the difficulty fails the client', approach: 'Downplay framing', why: 'A complex presentation with risk warrants competent, specialized care', keys: ['complex case'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer him at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D167 — Hoarding Disorder (F42.3) — OCD-Related — medium
// ============================================================================
const D167 = {
  id: 'ncmhce-D167',
  title: 'Clutter that has overtaken a home and strained a family',
  category: 'OCD-Related',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Hoarding Disorder', code: 'F42.3' },
  diagnosis: { name: 'Hoarding Disorder', code: 'F42.3' },
  differentialOptions: [
    { id: 'do1', name: 'Hoarding Disorder', isCorrect: true },
    { id: 'do2', name: 'Obsessive-Compulsive Disorder', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do4', name: 'Obsessive-Compulsive Personality Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Margaret Lewis, a 58-year-old retired clerk, is referred after a family intervention. She has persistent difficulty discarding possessions ' +
      'regardless of value, and the accumulation has filled her living spaces to the point that rooms can no longer be used as intended.',
    session1:
      'The saving is driven by a perceived need to keep items and distress at the thought of discarding them, not by intrusive obsessions she is ' +
      'trying to neutralize. The clutter is the result of intentional saving and difficulty parting with things, and her insight into the problem is limited.',
    session2:
      'Her family is worried about safety and sanitation, and access to parts of the home is blocked. She feels deeply attached to her belongings, ' +
      'is embarrassed and defensive, and at a low moment said she sometimes feels life is not worth living, without current plan or intent.',
  },
  diagnosticRationale:
    'Persistent difficulty discarding possessions due to a perceived need to save them and distress associated with discarding, resulting in ' +
    'accumulation that congests living areas and compromises their use, with clinically significant distress or impairment, meets DSM-5-TR ' +
    'criteria for hoarding disorder, distinct from OCD’s obsession-driven behavior, depression, and the perfectionistic control of OCPD.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Hoarding disorder: persistent difficulty discarding due to perceived need to save; accumulation congests living areas' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Hoarding disorder: cognitive behavioral therapy targeting acquiring, saving, and discarding within coordinated care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when distress and hopelessness co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: client welfare, safety, autonomy, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance, collaborative goal setting, and the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a hoarding disorder diagnosis?', ['R1'], [
      O('a', 'Persistent difficulty discarding due to a perceived need to save, with accumulation that congests living areas', 3,
        { r: 'Difficulty discarding plus congesting accumulation', approach: 'Confirm the core criteria', why: 'Hoarding disorder requires persistent difficulty discarding due to a perceived need to save, congesting living areas', keys: ['cannot use rooms as intended', 'distress at discarding'], mistake: 'Diagnosing from clutter alone without the perceived need to save and the impairment' }),
      O('b', 'That she can name the single stressful event she believes first caused her to start saving so many things', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That the clutter has grown a little worse over the past few days than it was the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A persistent pattern, not a recent uptick, is required', keys: ['persistent pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Hoarding disorder is defined by the saving behavior, not mood criteria', keys: ['behavior-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from obsessive-compulsive disorder?', ['R1'], [
      O('a', 'The saving is driven by a perceived need to keep items, not by intrusive obsessions she is trying to neutralize', 3,
        { r: 'Perceived need to save, not obsession-driven', approach: 'Contrast the driver of the behavior', why: 'OCD saving is obsession-driven and neutralizing; hoarding saving reflects a perceived need to keep items', keys: ['perceived need to save', 'no intrusive obsessions'], mistake: 'Reading hoarding as an OCD compulsion' }),
      O('b', 'The fact that she holds onto a great many possessions and finds it very hard to let go of any of them', -1,
        { r: 'Saving behavior occurs in both', approach: 'Saving framing', why: 'Saving can occur in both; the driver differs', keys: ['shared feature'], mistake: 'Using saving to differentiate' }),
      O('c', 'The distress that she feels at the thought of getting rid of the things she has accumulated over the years', -1,
        { r: 'Discard distress occurs in both', approach: 'Distress framing', why: 'Distress at discarding can occur in both; the driver differs', keys: ['shared distress'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her saving tends to feel a bit more intense during the busiest and most stressful weeks of her life', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from major depressive disorder?', ['R1'], [
      O('a', 'The saving reflects an intentional perceived need to keep items, not the passive neglect of clutter seen in depression', 3,
        { r: 'Intentional saving versus passive neglect', approach: 'Contrast intentional saving with depressive neglect', why: 'Depressive clutter reflects passive neglect; her clutter reflects intentional saving and difficulty discarding', keys: ['intentional saving', 'attached to belongings'], mistake: 'Reading intentional hoarding as passive depressive neglect' }),
      O('b', 'The fact that she has been feeling low and discouraged about the state of her home and her situation', -1,
        { r: 'Low mood is nonspecific', approach: 'Mood framing', why: 'Low mood can accompany both; the saving behavior differs', keys: ['shared feature'], mistake: 'Using low mood to differentiate' }),
      O('c', 'The trouble she has keeping her living space in order and functioning the way it once did before', -1,
        { r: 'Disordered space occurs in both', approach: 'Disorder framing', why: 'A disordered home can occur in both; the mechanism differs', keys: ['shared appearance'], mistake: 'Reading clutter alone as decisive' }),
      O('d', 'The way her mood tends to dip a little more in the evenings than it does earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from obsessive-compulsive personality disorder?', ['R1'], [
      O('a', 'Her core problem is difficulty discarding and accumulation, not a pervasive trait of perfectionistic control over order', 3,
        { r: 'Discarding difficulty versus perfectionistic control', approach: 'Contrast the core feature', why: 'OCPD centers on perfectionistic control and order; her core problem is difficulty discarding and accumulation', keys: ['cannot discard', 'congested living areas'], mistake: 'Confusing accumulation with the orderliness control of OCPD' }),
      O('b', 'The fact that she holds onto items and has strong feelings about her own possessions and how they are handled', -1,
        { r: 'Attachment to possessions can occur in both', approach: 'Possession framing', why: 'Some attachment to possessions can occur in both; the core feature differs', keys: ['shared feature'], mistake: 'Using attachment to possessions to differentiate' }),
      O('c', 'The way she becomes defensive when others comment on how she keeps and manages her own things', -1,
        { r: 'Defensiveness is nonspecific', approach: 'Defensiveness framing', why: 'Defensiveness can occur in both; the core feature differs', keys: ['shared reaction'], mistake: 'Reading defensiveness as decisive' }),
      O('d', 'The way the problem tends to feel a bit worse during the busier and more stressful seasons of the year', 0,
        { r: 'Seasonal variation is nonspecific', approach: 'Seasonal framing', why: 'Seasonal variation does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a seasonal effect' }),
    ]),
    Q('q5', 'intake', 'What is most important to assess given her family’s safety concerns?', ['R4'], [
      O('a', 'Home safety and sanitation risks, including blocked exits and any hazards, coordinating with appropriate resources', 3,
        { r: 'Assess home safety and coordinate', approach: 'Screen safety and coordinate', why: 'Hoarding can create real safety and sanitation hazards that must be assessed and coordinated with appropriate resources', keys: ['blocked access', 'safety and sanitation concerns'], mistake: 'Addressing the behavior without assessing the safety hazards' }),
      O('b', 'A previously undetected primary psychotic disorder that might better account for her attachment to her possessions', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of all of her saving behavior', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could explain why she keeps acquiring more and more possessions', 0,
        { r: 'Cognitive decline is not the priority here', approach: 'Neurocognitive framing', why: 'The saving pattern fits hoarding disorder; safety is the priority', keys: ['behavior-focused'], mistake: 'Pursuing a lower-priority rule-out over safety' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Margaret?', ['R2'], [
      O('a', 'Cognitive behavioral therapy targeting acquiring, saving, and discarding, with motivational and skills components', 3,
        { r: 'CBT for hoarding', approach: 'Apply the guideline', why: 'CBT targeting acquiring, saving, and discarding is the evidence-based first-line treatment for hoarding disorder', keys: ['difficulty discarding', 'congested home'], mistake: 'Defaulting to a forced clean-out instead of evidence-based CBT' }),
      O('b', 'Arranging a forced clean-out of the home over her objection so that the clutter is removed all at once', -2,
        { r: 'Forced clean-outs are counter-therapeutic', approach: 'Forced-removal framing', why: 'Forced discarding over her objection tends to be traumatic and does not change the behavior', keys: ['collaborative, client-led work'], mistake: 'Imposing a forced clean-out' }),
      O('c', 'Telling her to simply throw everything out herself and use more willpower, since it is just a matter of self-control', -2,
        { r: 'Willpower-only advice ignores the disorder', approach: 'Willpower framing', why: 'Framing hoarding as mere willpower disregards the evidence and the disorder', keys: ['limited insight'], mistake: 'Reducing the disorder to willpower' }),
      O('d', 'Starting her on a medication that you will select and adjust to reduce her saving over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor handle her limited insight and ambivalence about change?', ['R2'], [
      O('a', 'Use motivational and collaborative methods to build her own goals for safety and function before discarding work', 3,
        { r: 'Build motivation and collaborate before discarding', approach: 'Engage ambivalence collaboratively', why: 'With limited insight, motivational, collaborative work builds her own goals before discarding tasks', keys: ['limited insight', 'embarrassed and defensive'], mistake: 'Forcing discarding before building motivation and the alliance' }),
      O('b', 'Confront her firmly with how unacceptable the clutter is until she agrees to start throwing things out today', -2,
        { r: 'Confrontation entrenches resistance', approach: 'Confront framing', why: 'Shaming confrontation tends to entrench resistance and rupture the alliance', keys: ['build motivation'], mistake: 'Confronting rather than engaging' }),
      O('c', 'Wait passively until she develops full insight on her own before doing any work with her at all', -1,
        { r: 'Passive waiting stalls the work', approach: 'Wait-for-insight framing', why: 'Motivational work can proceed without waiting for full insight', keys: ['active engagement'], mistake: 'Setting full insight as a precondition' }),
      O('d', 'Agree with her that the clutter is fine and that there is really no need for any change in her home at all', -1,
        { r: 'Endorsing the status quo ignores safety', approach: 'Collude framing', why: 'Endorsing the clutter ignores the genuine safety concerns', keys: ['safety matters'], mistake: 'Colluding against needed change' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track clutter, acquiring, discarding, function, and safety over time to guide the collaborative plan', 3,
        { r: 'Measurement-based tracking of the target behaviors and safety', approach: 'Monitor the relevant outcomes', why: 'Tracking clutter, acquiring, discarding, function, and safety steers the CBT plan', keys: ['congested rooms', 'safety concerns'], mistake: 'Proceeding without tracking the target behaviors and safety' }),
      O('b', 'Rely only on whether she happens to say in session that the house feels a little tidier than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the number of bags of items removed and base every decision solely on that one figure', -1,
        { r: 'Bags removed is too narrow', approach: 'Single-metric framing', why: 'Acquiring, discarding, function, and safety all inform the plan, not volume removed alone', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one number' }),
      O('d', 'Wait until the end of treatment to review whether the clutter has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the family and community resources?', ['R4'], [
      O('a', 'With her consent, coordinate family support and community resources for safety while keeping her in the lead', 3,
        { r: 'Coordinate with consent, client-led', approach: 'Coordinate within consent and autonomy', why: 'Family and community coordination for safety proceeds with her consent and keeps her autonomy central', keys: ['family intervention', 'safety concerns'], mistake: 'Coordinating over her objection or sidelining her autonomy' }),
      O('b', 'Direct the family to clear the home themselves whenever she is out so the clutter is removed without conflict', -2,
        { r: 'Covert removal is harmful and disrespectful', approach: 'Covert-removal framing', why: 'Removing items behind her back is traumatic and undermines the work and her autonomy', keys: ['client-led work'], mistake: 'Arranging covert forced removal' }),
      O('c', 'Share her clinical details with the whole family freely, since they are clearly entitled to know everything anyway', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Over-disclosure framing', why: 'Family disclosure requires her consent and minimum-necessary limits', keys: ['no release'], mistake: 'Disclosing to family without consent' }),
      O('d', 'Avoid involving the family or any resources at all so that her counseling stays entirely separate from her home life', -1,
        { r: 'No coordination undercuts safety', approach: 'Siloed framing', why: 'Consented coordination supports safety and the plan', keys: ['integrated support'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Margaret becomes tearful and defensive, saying her things are part of who she is. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with empathy for the attachment, validate the feeling, and explore her values without forcing discarding', 3,
        { r: 'Empathize with the attachment, do not force', approach: 'Validate then explore values', why: 'Empathizing with the attachment while exploring her values preserves the alliance and supports change', keys: ['deeply attached', 'embarrassed and defensive'], mistake: 'Dismissing the attachment or pushing discarding in the moment' }),
      O('b', 'Tell her the attachment is irrational and that she simply needs to accept that the items must all go now', -1,
        { r: 'Dismissing the attachment invalidates her', approach: 'Dismiss framing', why: 'Calling the attachment irrational damages the alliance', keys: ['validate then explore'], mistake: 'Invalidating a central feeling' }),
      O('c', 'Agree that the possessions truly define who she is so that she does not have to feel any pressure to change', -2,
        { r: 'Endorsing the belief blocks change', approach: 'Collude framing', why: 'Reinforcing that the items define her undermines the safety goals', keys: ['safety and function'], mistake: 'Colluding against needed change' }),
      O('d', 'Change the subject to something more pleasant so that she does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'Her attachment and feelings can be engaged, not avoided', keys: ['engage the feeling'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Margaret’s engagement in the discarding work?', ['R5'], [
      O('a', 'Collaborate on graded, achievable discarding goals tied to her values, reinforcing autonomy and small wins', 3,
        { r: 'Graded, values-tied, autonomy-supporting goals', approach: 'Anchor the work in her values and autonomy', why: 'Graded discarding tied to her own values and autonomy, with reinforced small wins, sustains engagement', keys: ['limited insight', 'wants to stay in control'], mistake: 'Imposing rapid, large-scale discarding that overwhelms her' }),
      O('b', 'Insist she discard a large portion of her belongings immediately and treat any hesitation as a refusal to change', -1,
        { r: 'Forcing rapid discarding backfires', approach: 'Force framing', why: 'Demanding rapid, large-scale discarding overwhelms her and ruptures the alliance', keys: ['graded approach'], mistake: 'Pushing too far too fast' }),
      O('c', 'Focus the sessions mainly on cataloguing every item in her home in exhaustive detail every single week', -1,
        { r: 'Cataloguing items is not the work', approach: 'Catalogue framing', why: 'Exhaustive inventorying without graded action does not advance the work', keys: ['action focus'], mistake: 'Centering sessions on enumerating items' }),
      O('d', 'Tell her counseling cannot help her at all unless she first agrees to empty the entire home this month', -2,
        { r: 'An extreme ultimatum is inappropriate', approach: 'Ultimatum framing', why: 'Demanding she empty the home at once is neither indicated nor collaborative', keys: ['graded, client-led'], mistake: 'Imposing an extreme condition' }),
    ]),
    Q('q12', 'ethics', 'The family pressures the counselor to override Margaret and authorize clearing the home against her wishes. The most appropriate action is to:', ['R4'], [
      O('a', 'Respect her autonomy and decision-making while addressing genuine safety risks through appropriate channels', 3,
        { r: 'Respect autonomy; address safety appropriately', why: 'Her autonomy is respected while genuine safety risks are handled through appropriate, lawful channels', approach: 'Balance autonomy and safety', keys: ['family pressure', 'safety concerns'], mistake: 'Overriding a capable adult’s autonomy at family insistence' }),
      O('b', 'Authorize the family to clear the home immediately against her wishes, since they only want what is best for her', -2,
        { r: 'Overriding autonomy is inappropriate', approach: 'Override framing', why: 'Overriding a capable adult’s decision violates her autonomy', keys: ['client autonomy'], mistake: 'Overriding the client at family insistence' }),
      O('c', 'Side entirely with the family and pressure her to comply with whatever they have decided about her home', -1,
        { r: 'Siding against the client breaks the alliance', approach: 'Take-sides framing', why: 'Aligning against the client undermines the alliance and her autonomy', keys: ['client-centered'], mistake: 'Abandoning the client’s perspective' }),
      O('d', 'Refuse to address the safety concerns at all, treating them as entirely outside the scope of the counseling', -1,
        { r: 'Ignoring real safety risk is inappropriate', approach: 'Ignore-safety framing', why: 'Genuine safety risks are addressed through appropriate channels, not ignored', keys: ['safety matters'], mistake: 'Disregarding a legitimate safety concern' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in hoarding-specific treatment. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; hoarding-specific care may need consultation, training, or referral', keys: ['limited hoarding training', 'safety-relevant case'], mistake: 'Managing a complex hoarding case alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with her', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell her the clutter is not serious enough to need specialized help and continue with general talks only', -2,
        { r: 'Minimizing the problem fails the client', approach: 'Downplay framing', why: 'A safety-relevant hoarding case warrants competent, specialized care', keys: ['safety concerns'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer her at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D168 — Sedative, Hypnotic, or Anxiolytic Use Disorder (F13.20) — Substance — hard
// ============================================================================
const D168 = {
  id: 'ncmhce-D168',
  title: 'Escalating benzodiazepine use and a dangerous withdrawal risk',
  category: 'Substance',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Sedative Use Disorder', code: 'F13.20' },
  diagnosis: { name: 'Sedative Use Disorder', code: 'F13.20' },
  differentialOptions: [
    { id: 'do1', name: 'Sedative Use Disorder', isCorrect: true },
    { id: 'do2', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Alcohol Use Disorder', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Robert Hayes, a 52-year-old accountant, is referred after his physician grew concerned about his benzodiazepine use. Over two years his ' +
      'use has escalated well beyond what was prescribed, with tolerance, failed attempts to cut down, and withdrawal symptoms when he runs low.',
    session1:
      'He meets several criteria for the disorder: strong cravings, time spent obtaining the medication, and continued use despite problems. His ' +
      'difficulties center specifically on sedatives rather than alcohol, and the picture is a use disorder rather than a primary anxiety disorder.',
    session2:
      'He is frightened because the last time he abruptly stopped he had tremors and felt his "heart racing," and he worries about seizures. He ' +
      'feels ashamed, low, and at one point thought he would be better off not waking up, without current plan or intent, and wants help to stop safely.',
  },
  diagnosticRationale:
    'A problematic pattern of sedative use with tolerance, withdrawal, craving, unsuccessful efforts to cut down, time spent obtaining the drug, ' +
    'and continued use despite problems, meeting several criteria, fits DSM-5-TR sedative use disorder—distinct from a primary anxiety disorder, ' +
    'an alcohol use disorder, and major depressive disorder, and notable for a potentially dangerous medically managed withdrawal.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Sedative use disorder: tolerance, withdrawal, craving, failed cutdown, time obtaining, use despite problems' },
    { id: 'R2', source: 'ASAM Criteria', detail: 'Level-of-care decisions and medically supervised withdrawal for sedative dependence' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk in sedative use disorder' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, coordination of care, and practicing within competence' },
    { id: 'R5', source: 'SAMHSA TIP 45', detail: 'Detoxification and substance abuse treatment: safe withdrawal management and care coordination' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a sedative use disorder diagnosis?', ['R1'], [
      O('a', 'A problematic pattern with tolerance, withdrawal, craving, and continued use despite problems at the required criteria count', 3,
        { r: 'Tolerance, withdrawal, craving, use despite problems', approach: 'Confirm the core criteria', why: 'Sedative use disorder is defined by the count of criteria such as tolerance, withdrawal, craving, and use despite problems', keys: ['escalated use', 'withdrawal when he runs low'], mistake: 'Diagnosing from the amount used rather than the criteria met' }),
      O('b', 'That he can identify the single stressful event he believes first caused him to start taking the medication', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his use has increased a little over the past few days compared with the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The criteria pattern, not a recent uptick, is what matters', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Sedative use disorder is defined by the use pattern, not mood criteria', keys: ['use-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from a primary anxiety disorder?', ['R1'], [
      O('a', 'His difficulties center on the sedative-use criteria, not on anxiety as the primary, standalone problem', 3,
        { r: 'Use-disorder pattern, not primary anxiety', approach: 'Contrast the central problem', why: 'A primary anxiety disorder centers on anxiety; his presentation centers on the sedative-use criteria', keys: ['tolerance, withdrawal, craving', 'use despite problems'], mistake: 'Reframing a substance-use pattern as a primary anxiety disorder' }),
      O('b', 'The fact that he feels anxious and on edge at times, especially when his supply of the medication runs low', -1,
        { r: 'Anxiety in withdrawal is nonspecific', approach: 'Anxiety framing', why: 'His anxiety partly reflects withdrawal, not a primary anxiety disorder', keys: ['withdrawal-related'], mistake: 'Reading withdrawal anxiety as primary anxiety' }),
      O('c', 'The tension and the restlessness that he experiences during the day while he is using the medication', -1,
        { r: 'Tension is nonspecific', approach: 'Tension framing', why: 'Tension can occur in both; the central problem differs', keys: ['shared feature'], mistake: 'Reading tension as decisive' }),
      O('d', 'The way his urge to use tends to be a little stronger during the busiest and most stressful weeks at work', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Stronger cravings under stress do not establish a primary anxiety disorder', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from an alcohol use disorder?', ['R1'], [
      O('a', 'His use disorder centers specifically on sedatives, not on alcohol or another substance', 3,
        { r: 'Sedative-specific use disorder', approach: 'Contrast the substance involved', why: 'The disorder is defined by the specific substance; his criteria are met for sedatives', keys: ['difficulties center on sedatives'], mistake: 'Conflating one substance use disorder with another' }),
      O('b', 'The fact that he keeps using a substance even though it is clearly causing him real problems in his life', -1,
        { r: 'Use despite harm occurs in both', approach: 'Harm framing', why: 'Use despite harm occurs across use disorders; the substance differs', keys: ['shared feature'], mistake: 'Using the harm pattern to differentiate the substance' }),
      O('c', 'The withdrawal symptoms that he experiences and the difficulty he has when he tries to cut back', -1,
        { r: 'Withdrawal occurs in both', approach: 'Withdrawal framing', why: 'Withdrawal occurs in both; the substance differs', keys: ['shared withdrawal'], mistake: 'Reading withdrawal as decisive about the substance' }),
      O('d', 'The way his use tends to be a little heavier during the busiest and most demanding stretches at work', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Heavier use under stress does not identify the substance', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'What is the most important safety consideration to assess in his case?', ['R2'], [
      O('a', 'His withdrawal risk, since abrupt sedative cessation can be dangerous and may require medically supervised withdrawal', 3,
        { r: 'Assess dangerous withdrawal risk', approach: 'Prioritize the medical withdrawal risk', why: 'Sedative withdrawal can be medically dangerous, so withdrawal risk and the need for supervised detox are assessed', keys: ['tremors and racing heart when stopping', 'worries about seizures'], mistake: 'Overlooking the potentially dangerous withdrawal and recommending he just stop' }),
      O('b', 'A previously undetected primary psychotic disorder that might better account for his escalating sedative use', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of all of his sedative use', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why he keeps taking more than was prescribed', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'Escalating use despite harm fits the use disorder, not decline', keys: ['use-focused'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'intake', 'Given his thought that he would be better off not waking up, what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment of current ideation, intent, plan, and protective factors now', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Sedative use disorder carries elevated suicide risk, so current risk is assessed directly', keys: ['better off not waking up', 'shame and low mood'], mistake: 'Failing to assess current suicide risk' }),
      O('b', 'Assume the risk has passed because he denies a current plan and frames the thought as only a passing one', -2,
        { r: 'Assuming risk passed is unsafe', approach: 'Dismissal framing', why: 'Passive ideation still requires structured current assessment', keys: ['ongoing risk factors'], mistake: 'Dismissing risk on reassurance' }),
      O('c', 'Defer any risk assessment until his substance use is resolved and he has been stable for several months', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after the substance use resolves', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on a plan to reduce his medication for now and return to any safety questions at a later date', -1,
        { r: 'Sequencing safety behind tapering is unsafe', approach: 'Single-issue framing', why: 'The taper plan does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line step given the withdrawal risk?', ['R2'], [
      O('a', 'Coordinate a medically supervised withdrawal and the right level of care before or alongside the counseling work', 3,
        { r: 'Medically supervised withdrawal first', approach: 'Apply level-of-care criteria', why: 'Potentially dangerous sedative withdrawal requires a medically supervised taper and appropriate level of care', keys: ['tremors and racing heart', 'seizure concern'], mistake: 'Advising him to stop on his own without medical supervision' }),
      O('b', 'Advise him to stop the medication abruptly on his own this week so that he can be free of it as soon as possible', -2,
        { r: 'Abrupt cessation can be dangerous', approach: 'Cold-turkey framing', why: 'Abrupt sedative cessation can cause dangerous withdrawal including seizures', keys: ['medical supervision'], mistake: 'Recommending unsupervised abrupt cessation' }),
      O('c', 'Design and manage a tapering schedule of his medication yourself and adjust the doses over the coming weeks', -2,
        { r: 'Managing a taper is outside scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not design or adjust medication tapers; that is the prescriber’s role', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Reassure him that sedative withdrawal is never dangerous and that he can simply taper himself whenever he likes', -2,
        { r: 'Minimizing the risk is unsafe', approach: 'Minimize framing', why: 'Sedative withdrawal can be dangerous and warrants medical supervision', keys: ['withdrawal risk'], mistake: 'Downplaying a genuine medical risk' }),
    ]),
    Q('q7', 'treatment', 'What is the most appropriate counseling role alongside the medical withdrawal?', ['R5'], [
      O('a', 'Provide motivational and relapse-prevention counseling and coordinate with the medical team within your scope', 3,
        { r: 'Counseling and coordination within scope', approach: 'Define the counselor role', why: 'The counselor provides motivational and relapse-prevention work and coordinates with the medical team', keys: ['wants help to stop safely', 'medical withdrawal needed'], mistake: 'Either managing the medical taper or providing no structured counseling role' }),
      O('b', 'Step back entirely and provide no counseling at all until the medical withdrawal is completely finished', -1,
        { r: 'No counseling role understates the work', approach: 'Hands-off framing', why: 'Counseling and coordination proceed alongside, not only after, the medical withdrawal', keys: ['concurrent counseling'], mistake: 'Withholding the counseling role unnecessarily' }),
      O('c', 'Take over the medical management of his withdrawal so that the care all stays within the counseling relationship', -2,
        { r: 'Taking over medical care exceeds scope', approach: 'Overreach framing', why: 'Managing withdrawal is the medical team’s role, not the counselor’s', keys: ['scope limits'], mistake: 'Assuming a medical role outside scope' }),
      O('d', 'Tell him that counseling is all he needs and that the medical involvement can simply be skipped entirely', -2,
        { r: 'Skipping medical care is unsafe', approach: 'Counseling-only framing', why: 'The dangerous withdrawal requires medical involvement, not counseling alone', keys: ['medical supervision'], mistake: 'Omitting necessary medical care' }),
    ]),
    Q('q8', 'treatment', 'How should relapse and his underlying anxiety be addressed in the longer-term plan?', ['R5'], [
      O('a', 'Build relapse-prevention skills and coordinate non-sedative coping and treatment for the underlying anxiety', 3,
        { r: 'Relapse prevention and non-sedative anxiety coping', approach: 'Plan for triggers and underlying anxiety', why: 'Durable change includes relapse prevention and coordinated, non-sedative approaches to his underlying anxiety', keys: ['used sedatives to cope', 'high-risk triggers'], mistake: 'Treating the use disorder while ignoring the anxiety that drives it' }),
      O('b', 'Advise him to keep some benzodiazepines on hand to use whenever his anxiety flares so he does not relapse worse', -2,
        { r: 'Keeping the drug undermines recovery', approach: 'Permission framing', why: 'Encouraging continued sedative use for anxiety undermines recovery', keys: ['non-sedative coping'], mistake: 'Endorsing the substance the plan aims to address' }),
      O('c', 'Treat any single slip as a complete and total failure that means the entire recovery effort has been wasted', -1,
        { r: 'All-or-nothing framing backfires', approach: 'All-or-nothing framing', why: 'Treating a lapse as total failure undermines relapse-prevention', keys: ['lapse versus relapse'], mistake: 'Setting up an all-or-nothing trap' }),
      O('d', 'Focus only on the physical withdrawal and leave the underlying anxiety entirely out of the longer-term plan', -1,
        { r: 'Ignoring the anxiety narrows the plan', approach: 'Single-factor framing', why: 'The underlying anxiety is central to relapse prevention, not just the withdrawal', keys: ['address the driver'], mistake: 'Omitting a key maintaining factor' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the prescriber and medical team?', ['R4'], [
      O('a', 'With his consent and a release, coordinate the taper and care plan and share what is needed for safe treatment', 3,
        { r: 'Coordinate with consent for safe care', approach: 'Coordinate within consent and scope', why: 'Safe withdrawal depends on consented coordination with the prescriber and medical team', keys: ['physician involved', 'dangerous withdrawal'], mistake: 'Working in isolation from the medical team, or sharing without consent' }),
      O('b', 'Share his full history with everyone involved right away, since coordinating his care is plainly in his interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Adjust his taper schedule yourself based on how he reports feeling rather than involving the prescriber', -2,
        { r: 'Adjusting the taper exceeds scope', approach: 'Self-adjust framing', why: 'Counselors do not adjust medication tapers; the prescriber does', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Avoid contacting the prescriber at all so that his counseling stays entirely separate from his medical care', -1,
        { r: 'No coordination undercuts safe care', approach: 'Siloed framing', why: 'Consented coordination supports safe withdrawal here', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Robert is frightened and ashamed and says he doubts he can ever stop. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with empathy, reduce shame, and build self-efficacy while reinforcing the safe path to stopping', 3,
        { r: 'Empathize, de-shame, build self-efficacy', approach: 'Reduce shame and build confidence', why: 'Empathic, de-shaming work that builds confidence in the safe path supports his motivation to stop', keys: ['frightened and ashamed', 'doubts he can stop'], mistake: 'Either shaming him or confirming that he cannot change' }),
      O('b', 'Agree that he has probably used too long to stop now and that quitting is likely beyond his reach', -2,
        { r: 'Confirming hopelessness is harmful', approach: 'Hopelessness framing', why: 'Reinforcing that he cannot change undermines motivation and self-efficacy', keys: ['build confidence'], mistake: 'Validating a hopeless self-belief' }),
      O('c', 'List in detail all the terrible things that will happen to him if he fails to stop using right away', -1,
        { r: 'Fear-based lecturing raises resistance', approach: 'Scare-tactic framing', why: 'Heavy fear appeals tend to entrench resistance and shame', keys: ['evoke, do not impose'], mistake: 'Using fear rather than building motivation' }),
      O('d', 'Avoid his fears and doubts entirely so that the sessions never touch on his shame or his past use at all', -1,
        { r: 'Avoiding the doubt misses the work', approach: 'Avoidant framing', why: 'His shame and self-efficacy doubts are central to address, not avoid', keys: ['engage the doubt'], mistake: 'Sidestepping a key barrier' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best strengthen Robert’s motivation and engagement?', ['R5'], [
      O('a', 'Evoke his own reasons and values for change and reinforce his confidence in the safe, supported next steps', 3,
        { r: 'Evoke change talk and build confidence', approach: 'Build intrinsic motivation', why: 'Eliciting his own reasons and reinforcing confidence in the supported plan builds durable motivation', keys: ['wants to stop safely', 'doubts himself'], mistake: 'Lecturing him on why he must stop instead of evoking his own motivation' }),
      O('b', 'Tell him his reasons do not matter and that he should just follow the plan exactly without questioning it', -2,
        { r: 'Dismissing his reasons undercuts motivation', approach: 'Authoritarian framing', why: 'Ignoring his values and autonomy erodes intrinsic motivation', keys: ['autonomy support'], mistake: 'Overriding the client’s autonomy' }),
      O('c', 'Focus the sessions mainly on detailing every harm of sedatives in exhaustive detail every single week', -1,
        { r: 'Lecturing on harms raises resistance', approach: 'Lecture framing', why: 'Repeated harm lectures tend to entrench resistance', keys: ['evoke, do not impose'], mistake: 'Imposing information rather than evoking motivation' }),
      O('d', 'Tell him counseling cannot help him unless he first completes the entire medical withdrawal on his own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Counseling proceeds alongside the coordinated medical withdrawal', keys: ['concurrent care'], mistake: 'Making counseling contingent on completing withdrawal first' }),
    ]),
    Q('q12', 'ethics', 'Robert asks the counselor to help him get an early refill so he does not run out before the taper. The most appropriate action is to:', ['R4'], [
      O('a', 'Decline to facilitate the refill and instead coordinate with the prescriber on a safe, supervised plan', 3,
        { r: 'Do not facilitate; coordinate with the prescriber', approach: 'Stay within scope and coordinate', why: 'The counselor does not facilitate medication access but coordinates a safe plan with the prescriber', keys: ['asks help getting a refill', 'taper underway'], mistake: 'Helping him obtain more medication outside the prescriber’s plan' }),
      O('b', 'Call the pharmacy yourself and arrange an early refill so that he does not have to go without the medication', -2,
        { r: 'Arranging a refill exceeds scope', approach: 'Facilitate-access framing', why: 'Arranging medication access is outside the counselor’s role and may undermine the taper', keys: ['scope limits'], mistake: 'Facilitating medication access outside scope' }),
      O('c', 'Encourage him to see several different doctors so that he can get the extra medication he feels he needs', -2,
        { r: 'Encouraging diversion is unethical', approach: 'Doctor-shopping framing', why: 'Encouraging him to obtain extra medication from multiple prescribers is unethical and unsafe', keys: ['safe, coordinated care'], mistake: 'Facilitating diversion or doctor-shopping' }),
      O('d', 'Refuse to discuss the medication issue at all and simply change the subject whenever he brings it up', -1,
        { r: 'Avoiding the issue is unhelpful', approach: 'Avoidant framing', why: 'The concern is addressed by coordinating with the prescriber, not by avoidance', keys: ['coordinate the concern'], mistake: 'Failing to address a legitimate concern' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in substance withdrawal management. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and coordinate medically supervised care, referring for components beyond your competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; dangerous withdrawal is managed with medical coordination and appropriate referral', keys: ['limited withdrawal training', 'dangerous withdrawal'], mistake: 'Managing a dangerous withdrawal alone without competence' }),
      O('b', 'Continue managing the entire case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell him his use is not serious enough to need medical care and continue with supportive talks only', -2,
        { r: 'Minimizing the risk fails the client', approach: 'Downplay framing', why: 'A dangerous sedative withdrawal warrants medically supervised, specialized care', keys: ['withdrawal risk'], mistake: 'Underestimating the need for medical care' }),
      O('d', 'Transfer him at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D169 — Tourette’s Disorder (F95.2) — Neurodevelopmental — medium
// ============================================================================
const D169 = {
  id: 'ncmhce-D169',
  title: 'Childhood motor and vocal tics with social and school impact',
  category: 'Neurodevelopmental',
  difficulty: 'medium',
  primaryDiagnosis: { name: "Tourette’s Disorder", code: 'F95.2' },
  diagnosis: { name: "Tourette’s Disorder", code: 'F95.2' },
  differentialOptions: [
    { id: 'do1', name: "Tourette’s Disorder", isCorrect: true },
    { id: 'do2', name: 'Persistent (Chronic) Motor or Vocal Tic Disorder', isCorrect: false },
    { id: 'do3', name: 'Obsessive-Compulsive Disorder', isCorrect: false },
    { id: 'do4', name: 'Functional Neurological Symptom Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Eli Foster, an 11-year-old, is referred for involuntary movements and sounds. Since age seven he has had multiple motor tics—blinking, ' +
      'head jerks, shoulder shrugs—and at least one vocal tic, such as throat-clearing and grunting, occurring many times a day on most days.',
    session1:
      'Both motor and vocal tics have been present for more than a year, which fits Tourette’s rather than a tic disorder limited to one type. ' +
      'The tics are not driven by intrusive obsessions, and they are involuntary movements rather than a functional neurological symptom pattern.',
    session2:
      'He feels embarrassed and is being teased at school, and he has begun avoiding class participation. His parents worry about his self-esteem, ' +
      'and he says he sometimes feels bad about himself, without any current thoughts of self-harm, and wishes the tics would just stop.',
  },
  diagnosticRationale:
    'Multiple motor tics and at least one vocal tic, present for more than a year since before age 18 with onset in childhood, not attributable ' +
    'to another condition, meet DSM-5-TR criteria for Tourette’s disorder—distinct from a persistent tic disorder limited to one type, the ' +
    'obsession-driven compulsions of OCD, and a functional neurological symptom disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: "Tourette's disorder: multiple motor tics and 1+ vocal tic for >1 year, onset before age 18" },
    { id: 'R2', source: 'NICE guidelines', detail: 'Tic disorders: behavioral intervention (habit reversal/CBIT) and coordinated care; psychoeducation and school support' },
    { id: 'R3', source: 'C-SSRS', detail: 'Developmentally appropriate screening when teasing and low self-esteem affect a child' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.5., and C.2.: welfare of minor clients, consent, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance with the child and family and collaborative goal setting' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a Tourette’s disorder diagnosis?', ['R1'], [
      O('a', 'Multiple motor tics and at least one vocal tic present for more than a year with childhood onset', 3,
        { r: 'Multiple motor plus a vocal tic over a year', approach: 'Confirm the core criteria', why: 'Tourette’s requires multiple motor tics and at least one vocal tic for over a year with onset before age 18', keys: ['blinking, head jerks, shrugs', 'throat-clearing and grunting'], mistake: 'Diagnosing without confirming both motor and vocal tics over the required duration' }),
      O('b', 'That his parents can name the single event they believe first caused his tics to begin', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his tics have grown a little more frequent over the past few days than they were the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'Tics wax and wane; the year-long pattern, not a recent uptick, is required', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Tourette’s is a tic disorder, not a mood episode', keys: ['tic-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from a persistent motor or vocal tic disorder?', ['R1'], [
      O('a', 'He has both multiple motor tics and a vocal tic, not tics limited to only one of the two types', 3,
        { r: 'Both motor and vocal tics, not one type', approach: 'Contrast the tic types present', why: 'A persistent tic disorder is limited to motor or vocal tics; Tourette’s requires both types', keys: ['multiple motor tics', 'at least one vocal tic'], mistake: 'Missing that both tic types are required for Tourette’s' }),
      O('b', 'The fact that he has involuntary movements and sounds that he repeats many times during most days', -1,
        { r: 'Tics occur in both', approach: 'Tic-presence framing', why: 'Tics occur in both; the combination of types differs', keys: ['shared feature'], mistake: 'Using the presence of tics to differentiate' }),
      O('c', 'The embarrassment and the self-consciousness that he feels about the tics he cannot fully control', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress can accompany both; the tic types differ', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way his tics tend to be a little worse during the busiest and most stressful weeks at his school', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Tics worsening under stress occurs broadly and does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from obsessive-compulsive disorder?', ['R1'], [
      O('a', 'His tics are involuntary movements and sounds, not compulsions performed to neutralize intrusive obsessions', 3,
        { r: 'Involuntary tics, not obsession-driven compulsions', approach: 'Contrast tics with compulsions', why: 'OCD compulsions are driven by intrusive obsessions; his tics are involuntary and not obsession-driven', keys: ['involuntary tics', 'not driven by obsessions'], mistake: 'Reading involuntary tics as OCD compulsions' }),
      O('b', 'The fact that he repeats certain movements and sounds again and again throughout much of his day', -1,
        { r: 'Repetition occurs in both', approach: 'Repetition framing', why: 'Repetitive behavior occurs in both; the driver differs', keys: ['shared feature'], mistake: 'Using repetition to differentiate' }),
      O('c', 'The discomfort and the urge he sometimes feels building before a tic happens during his day', -1,
        { r: 'A premonitory urge is not an obsession', approach: 'Urge framing', why: 'A premonitory urge precedes tics but is not an OCD obsession', keys: ['premonitory urge'], mistake: 'Equating a premonitory urge with an obsession' }),
      O('d', 'The way his tics tend to be a little worse on the days when he has had less sleep the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'More tics after poor sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q4', 'core', 'What co-occurring condition is most important to screen for given his presentation?', ['R1'], [
      O('a', 'Co-occurring ADHD, OCD, and anxiety, which commonly accompany Tourette’s and shape the plan', 3,
        { r: 'Screen ADHD, OCD, and anxiety', approach: 'Assess common comorbidity', why: 'Tourette’s commonly co-occurs with ADHD, OCD, and anxiety, which shape the treatment plan', keys: ['school and social impact', 'tic disorder'], mistake: 'Treating the tics without screening for the common comorbidities' }),
      O('b', 'A previously undetected primary psychotic disorder that might better account for his involuntary movements', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of all of his tics', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could explain why his tics have continued over the past few years', 0,
        { r: 'Cognitive decline is implausible in a child', approach: 'Neurocognitive framing', why: 'The childhood tic pattern fits Tourette’s, not decline', keys: ['developmental pattern'], mistake: 'Pursuing an implausible rule-out' }),
    ]),
    Q('q5', 'intake', 'Given the teasing and his remark that he feels bad about himself, what is most important to assess?', ['R3'], [
      O('a', 'The emotional impact on his self-esteem and mood, with developmentally appropriate screening for safety', 3,
        { r: 'Assess self-esteem, mood, and safety', approach: 'Assess emotional impact and safety', why: 'Teasing and low self-esteem warrant assessing the emotional impact and developmentally appropriate safety screening', keys: ['teased at school', 'feels bad about himself'], mistake: 'Addressing the tics while ignoring the emotional and self-esteem impact' }),
      O('b', 'A previously undetected primary psychotic disorder that might better account for his low self-esteem', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of his low mood and tics', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why he is avoiding participating in his class', 0,
        { r: 'Cognitive decline is implausible in a child', approach: 'Neurocognitive framing', why: 'Avoidance is driven by teasing and embarrassment, not decline', keys: ['developmental pattern'], mistake: 'Pursuing an implausible rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Eli?', ['R2'], [
      O('a', 'Behavioral intervention for tics with psychoeducation and school support, coordinated with the family', 3,
        { r: 'Behavioral tic intervention plus school support', approach: 'Apply the guideline', why: 'Behavioral intervention for tics with psychoeducation and school support is first-line for Tourette’s', keys: ['tics with school impact', 'teasing'], mistake: 'Defaulting to medication or doing nothing instead of behavioral intervention and support' }),
      O('b', 'Telling him to simply suppress all of his tics through willpower whenever he is in class or around others', -2,
        { r: 'Willful suppression alone is not the treatment', approach: 'Suppression framing', why: 'Demanding constant willful suppression is not the evidence-based intervention and increases distress', keys: ['behavioral intervention'], mistake: 'Reducing treatment to willful suppression' }),
      O('c', 'Starting him on a medication that you will select and adjust to reduce his tics over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication; any medication question is referred', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Telling the parents the tics are nothing to address and that he will simply grow out of them on his own', -1,
        { r: 'Dismissing the impact misses the need', approach: 'Dismiss framing', why: 'The tics and their impact warrant intervention and support, not dismissal', keys: ['real impairment'], mistake: 'Dismissing a presentation that warrants support' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor address the teasing and school impact?', ['R2'], [
      O('a', 'Provide psychoeducation and coordinate school supports and anti-bullying measures to protect his participation', 3,
        { r: 'Psychoeducation and school supports', approach: 'Coordinate protective school supports', why: 'Psychoeducation and coordinated school supports address teasing and protect his participation', keys: ['teased at school', 'avoiding participation'], mistake: 'Treating the tics while leaving the school environment unaddressed' }),
      O('b', 'Tell him to just ignore the teasing and that he should not let what other children say bother him at all', -1,
        { r: 'Telling him to ignore it is insufficient', approach: 'Dismiss framing', why: 'Coordinated supports, not just telling him to ignore it, address the teasing', keys: ['active support'], mistake: 'Minimizing the impact of the teasing' }),
      O('c', 'Advise his parents to keep him out of school until the tics stop so that the teasing simply cannot happen', -2,
        { r: 'Withdrawal from school is harmful', approach: 'Avoidance framing', why: 'Keeping him out of school reinforces avoidance and harms his development', keys: ['support participation'], mistake: 'Endorsing harmful avoidance' }),
      O('d', 'Focus only on reducing the tics and leave the teasing and school environment entirely out of the plan', -1,
        { r: 'Ignoring the environment narrows the plan', approach: 'Single-factor framing', why: 'The school environment and teasing are central, not just the tics', keys: ['environment matters'], mistake: 'Omitting a key part of the plan' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track tic frequency, distress, school participation, and self-esteem over time to guide the plan', 3,
        { r: 'Measurement-based tracking of tics and function', approach: 'Monitor the relevant outcomes', why: 'Tracking tics, distress, participation, and self-esteem steers the behavioral and support plan', keys: ['avoiding participation', 'self-esteem concerns'], mistake: 'Proceeding without tracking the relevant outcomes' }),
      O('b', 'Rely only on whether his parents happen to mention that he seems a little happier at home lately', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the raw number of tics per minute and base every decision solely on that one figure', -1,
        { r: 'Tic count alone is too narrow', approach: 'Single-metric framing', why: 'Distress, participation, and self-esteem also inform the plan, not a tic count alone', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one number' }),
      O('d', 'Wait until the end of treatment to review whether anything has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the school and any medical providers?', ['R4'], [
      O('a', 'With the parents’ consent and a release, coordinate school supports and any medical care for the tics', 3,
        { r: 'Consent and release before coordinating', approach: 'Coordinate with consent', why: 'School and medical coordination for a minor requires parental consent and a release', keys: ['school impact', 'possible medical involvement'], mistake: 'Contacting the school or providers without parental consent' }),
      O('b', 'Contact the school and providers directly with his clinical details right away since they will need the information', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before sharing with the school or providers', keys: ['no release'], mistake: 'Disclosing without consent' }),
      O('c', 'Avoid contacting the school or any providers at all so that his counseling stays entirely separate from them', -1,
        { r: 'No coordination undercuts support', approach: 'Siloed framing', why: 'Consented coordination is central to securing school and medical support', keys: ['integrated supports'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Send his full clinical record to the school so that every staff member has complete information about his care', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure should be consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
    Q('q10', 'counseling', 'Eli says he hates his tics and wishes he were "normal like everyone else." The most therapeutic response is to:', ['R5'], [
      O('a', 'Validate his feelings, provide age-appropriate psychoeducation, and build self-acceptance and coping', 3,
        { r: 'Validate, psychoeducate, and build self-acceptance', approach: 'Support self-acceptance and coping', why: 'Validating his feelings while building understanding and self-acceptance supports a teased, self-conscious child', keys: ['hates his tics', 'wishes he were normal'], mistake: 'Either minimizing his feelings or reinforcing that the tics make him abnormal' }),
      O('b', 'Tell him he just needs to try harder to control the tics so that he can be like the other children', -2,
        { r: 'Blaming effort is harmful and inaccurate', approach: 'Try-harder framing', why: 'Tics are involuntary; implying effort would fix them deepens shame', keys: ['involuntary tics'], mistake: 'Implying the tics reflect insufficient effort' }),
      O('c', 'Agree that the tics do make him quite different from everyone else so that he learns to accept that reality', -1,
        { r: 'Reinforcing otherness is unhelpful', approach: 'Otherness framing', why: 'Emphasizing how different he is deepens shame rather than building acceptance', keys: ['self-acceptance'], mistake: 'Reinforcing a sense of being abnormal' }),
      O('d', 'Change the subject to something more fun so that he does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'His feelings can be engaged and supported, not avoided', keys: ['engage the feeling'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best engage Eli given his age and embarrassment?', ['R5'], [
      O('a', 'Use developmentally appropriate, strengths-based methods that build coping and confidence at his level', 3,
        { r: 'Developmentally matched, strengths-based engagement', approach: 'Engage the child age-appropriately', why: 'Strengths-based, developmentally appropriate work engages a self-conscious 11-year-old and builds confidence', keys: ['11-year-old', 'embarrassed about tics'], mistake: 'Using abstract, adult-oriented methods that a child cannot engage with' }),
      O('b', 'Talk with him mainly in abstract, adult terms about the neurology of why his tics occur each week', -1,
        { r: 'Abstract methods do not fit a child', approach: 'Adult-framing', why: 'A child engages through concrete, strengths-based methods', keys: ['developmental fit'], mistake: 'Pitching the work above his developmental level' }),
      O('c', 'Focus the sessions mainly on counting and reviewing each of his tics in exhaustive detail every week', -1,
        { r: 'Cataloguing tics is not the work', approach: 'Catalogue framing', why: 'Counting tics in detail does not build the coping and confidence he needs', keys: ['support focus'], mistake: 'Centering sessions on enumerating tics' }),
      O('d', 'Tell him he must stop his tics before any of the counseling work to help his confidence can begin', -1,
        { r: 'Demanding tic cessation first stalls engagement', approach: 'Precondition framing', why: 'Confidence work proceeds now, not after the involuntary tics stop', keys: ['support comes first'], mistake: 'Setting tic cessation as a precondition' }),
    ]),
    Q('q12', 'ethics', 'Eli’s parents ask the counselor to write that his tics are "fully under control" for a school activity he wants to join. The most appropriate action is to:', ['R4'], [
      O('a', 'Decline to misrepresent his status and clarify what the assessment and your role can accurately support', 3,
        { r: 'Do not misrepresent; document accurately', approach: 'Maintain honesty in records', why: 'The counselor documents only what is accurate and within role, declining to misstate his status', keys: ['request to overstate control', 'school activity'], mistake: 'Writing an inaccurate statement to satisfy the parents' }),
      O('b', 'Write the statement exactly as they request, since keeping the parents satisfied is what matters most here', -2,
        { r: 'Falsifying a statement is unethical', approach: 'Please-the-parents framing', why: 'An inaccurate statement violates professional honesty', keys: ['accurate representation'], mistake: 'Misrepresenting the child’s status' }),
      O('c', 'Take the parents’ side and advocate for the claim in any letter, regardless of what the assessment shows', -2,
        { r: 'Advocacy over accuracy is improper', approach: 'Advocacy framing', why: 'Statements reflect the data, not a predetermined claim', keys: ['data-based reporting'], mistake: 'Letting advocacy override accuracy' }),
      O('d', 'Refuse to provide any documentation at all and decline to explain what could appropriately be reported about him', -1,
        { r: 'Flat refusal forecloses helpful options', approach: 'Stonewall framing', why: 'Accurate, role-appropriate documentation can be provided rather than refused', keys: ['appropriate documentation'], mistake: 'Declining without clarifying the appropriate options' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in behavioral tic interventions. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; specialized tic intervention may need consultation, training, or referral', keys: ['limited tic-intervention training', 'specialized method'], mistake: 'Delivering a specialized intervention without the required competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with the family', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell the parents the tics are not serious enough to need specialized help and continue with general support only', -2,
        { r: 'Minimizing the need misleads care', approach: 'Downplay framing', why: 'The tics and their impact warrant competent, specialized care where indicated', keys: ['real impairment'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer the family at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the family without coordination' }),
    ]),
  ],
};

module.exports = { CASES: [D165, D166, D167, D168, D169] };
