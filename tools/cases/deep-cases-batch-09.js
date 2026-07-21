// ============================================================================
// deep-cases-batch-09.js — NCMHCE deep cases, batch 09 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). On the
// reserved id block ncmhce-D145+, adding distinct high-yield diagnoses not yet
// covered by any deep case:
//   ncmhce-D145  Delusional Disorder (Psychotic)
//   ncmhce-D146  Autism Spectrum Disorder (Neurodevelopmental)
//   ncmhce-D147  Body Dysmorphic Disorder (OCD-Related)
//   ncmhce-D148  Binge-Eating Disorder (Eating)
//   ncmhce-D149  Avoidant Personality Disorder (Personality)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-09.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-09');console.log(validateExamDepthSet(CASES))"
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
// D145 — Delusional Disorder (F22) — Psychotic — hard
// ============================================================================
const D145 = {
  id: 'ncmhce-D145',
  title: 'A fixed persecutory belief in an otherwise functioning man',
  category: 'Psychotic',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Delusional Disorder', code: 'F22' },
  diagnosis: { name: 'Delusional Disorder', code: 'F22' },
  differentialOptions: [
    { id: 'do1', name: 'Delusional Disorder', isCorrect: true },
    { id: 'do2', name: 'Schizophrenia', isCorrect: false },
    { id: 'do3', name: 'Paranoid Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
  ],
  narrative: {
    intake:
      'Harold Means, a 52-year-old accountant, is referred by his physician. For over four months he has been convinced that a neighbor is ' +
      'conspiring to poison his water supply, and he has installed locks and filters and confronted the neighbor, though there is no evidence.',
    session1:
      'Apart from this fixed belief he functions well at work and self-care, his speech is organized, and he shows no hallucinations, ' +
      'disorganized behavior, or negative symptoms. The belief is non-bizarre—plausible on its face—but held with unshakable conviction.',
    session2:
      'A recent medical and toxicology workup was unremarkable, and he denies substance use. He is angry that no one believes him and has ' +
      'hinted that he may "handle it himself" if the authorities will not act, which raises a concern about risk to the neighbor.',
  },
  diagnosticRationale:
    'The presence of one or more non-bizarre delusions for at least one month, without other active-phase psychotic symptoms and with ' +
    'functioning and behavior not markedly impaired apart from the delusion’s impact, meets DSM-5-TR criteria for delusional disorder, ' +
    'distinct from schizophrenia, the pervasive trait suspiciousness of paranoid personality disorder, and a mood disorder with psychotic features.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Delusional disorder: 1+ month of delusions without other active-phase symptoms; functioning not markedly impaired' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Psychosis: antipsychotic medication and psychological intervention within coordinated care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured risk screening; risk to self and others is assessed and acted upon' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'B.2. and C.2.: duty to protect, danger exceptions to confidentiality, and competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Building a working alliance and a supportive, reality-based approach' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a delusional disorder diagnosis?', ['R1'], [
      O('a', 'One or more delusions present for at least a month without other prominent active-phase psychotic symptoms', 3,
        { r: 'Delusions without other psychotic symptoms', approach: 'Confirm the core criteria', why: 'Delusional disorder requires delusions 1+ month without other active-phase symptoms', keys: ['four-month persecutory belief', 'no hallucinations or disorganization'], mistake: 'Diagnosing from a belief without confirming the full pattern' }),
      O('b', 'That he can identify the single stressful event he believes first triggered his concerns about his neighbor', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his belief has become noticeably more intense over the past few days than it was the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The 1-month persistence is what matters', keys: ['persistent belief'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Delusional disorder is defined by delusions, not mood criteria', keys: ['psychotic-spectrum diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes his presentation from schizophrenia?', ['R1'], [
      O('a', 'His functioning is otherwise preserved and he lacks the hallucinations, disorganization, and negative symptoms of schizophrenia', 3,
        { r: 'Preserved function; no other psychotic symptoms', approach: 'Contrast the broader symptom picture', why: 'Schizophrenia involves other active-phase symptoms and decline that he lacks', keys: ['functions well at work', 'no hallucinations or negative symptoms'], mistake: 'Calling an isolated delusion schizophrenia' }),
      O('b', 'The fact that he holds his belief about the neighbor with a very firm and unshakable degree of conviction over time', -1,
        { r: 'Conviction occurs in both', approach: 'Conviction framing', why: 'Firm conviction is shared; the broader picture differs', keys: ['shared feature'], mistake: 'Using conviction to differentiate' }),
      O('c', 'The suspicion and the mistrust that he feels toward the neighbor he believes is conspiring against him', -1,
        { r: 'Suspicion occurs in both', approach: 'Suspicion framing', why: 'Persecutory content appears in both', keys: ['shared content'], mistake: 'Reading suspicion as decisive' }),
      O('d', 'The way his distress about the situation tends to be worse during the most stressful weeks at his accounting job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from paranoid personality disorder?', ['R1'], [
      O('a', 'He holds a specific fixed delusion, rather than a pervasive lifelong trait of generalized suspiciousness without a fixed false belief', 3,
        { r: 'Fixed delusion versus pervasive trait suspiciousness', approach: 'Contrast a delusion with a trait pattern', why: 'Paranoid PD is pervasive trait suspiciousness without a fixed delusion', keys: ['specific fixed belief about poisoning'], mistake: 'Calling a fixed delusion a personality trait' }),
      O('b', 'The fact that he is mistrustful of the people around him and tends to interpret some of their actions as threatening to him', -1,
        { r: 'Mistrust occurs in both', approach: 'Mistrust framing', why: 'Mistrust is shared; the fixed delusion differs', keys: ['shared feature'], mistake: 'Using mistrust to differentiate' }),
      O('c', 'The anger and the frustration that he expresses when other people do not believe his account of what is happening', -1,
        { r: 'Anger is nonspecific', approach: 'Anger framing', why: 'Irritability occurs in both', keys: ['shared affect'], mistake: 'Reading anger as decisive' }),
      O('d', 'The way his concerns tend to feel more intense in the evenings than they do earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'What is the most important condition to rule out before confirming the diagnosis?', ['R1'], [
      O('a', 'A substance- or medical-induced cause, which his unremarkable workup and denial of substance use make less likely but worth confirming', 3,
        { r: 'Exclude substance and medical causes', approach: 'Rule out organic causes', why: 'Substances and medical conditions can produce delusions and must be excluded', keys: ['unremarkable workup', 'denies substance use'], mistake: 'Skipping the substance and medical rule-out' }),
      O('b', 'A previously undetected primary anxiety disorder that might better account for his vigilance about his neighbor and his home', -1,
        { r: 'Anxiety does not explain the delusion', approach: 'Anxiety framing', why: 'A fixed delusion is not an anxiety disorder', keys: ['fixed delusion'], mistake: 'Reducing a delusion to anxiety' }),
      O('c', 'A long-standing eating disorder that could be contributing to both his distress and his recent preoccupation with his water', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurodevelopmental disorder that could explain why he has become so focused on the actions of his neighbor', 0,
        { r: 'Neurodevelopmental framing is implausible here', approach: 'Developmental framing', why: 'The adult-onset fixed delusion fits delusional disorder', keys: ['adult onset'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'intake', 'Given his hint that he may "handle it himself," what is the most important assessment step?', ['R4'], [
      O('a', 'Assess risk to the neighbor and to himself, including intent and means, and prepare to act on duty-to-protect obligations', 3,
        { r: 'Assess risk to others and self', approach: 'Screen risk and duty to protect', why: 'A delusion-driven hint of harm requires careful risk assessment and possible protective duties', keys: ['"handle it himself"', 'named neighbor'], mistake: 'Letting a possible threat pass without assessment' }),
      O('b', 'Focus only on whether he has a specific plan to harm himself and disregard any risk to the neighbor for the time being', -1,
        { r: 'Narrow self-only focus misses risk to others', approach: 'Self-only framing', why: 'The risk here also extends to an identifiable other', keys: ['risk to the neighbor'], mistake: 'Assessing only one channel of risk' }),
      O('c', 'Defer any risk assessment until his delusion has resolved, since he is too distressed to answer the questions reliably now', -2,
        { r: 'Deferring risk assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after the delusion resolves', keys: ['active concern'], mistake: 'Postponing an urgent risk assessment' }),
      O('d', 'Rely on his assurance that he would never actually do anything, since he has not harmed anyone up to this point in time', -2,
        { r: 'Past nonviolence does not remove the need to assess', approach: 'Reassurance framing', why: 'A delusion-driven threat still requires assessment', keys: ['stated intent hint'], mistake: 'Accepting reassurance without assessment' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation?', ['R2'], [
      O('a', 'Coordinate an urgent psychiatric evaluation for antipsychotic medication alongside supportive psychological care', 3,
        { r: 'Psychiatric eval plus supportive care', approach: 'Apply the guideline within scope', why: 'NICE supports antipsychotic medication with psychological care for psychosis', keys: ['fixed delusion', 'risk concern'], mistake: 'Offering counseling alone for delusional disorder' }),
      O('b', 'Begin intensive insight-oriented therapy to help him uncover the deeper meaning behind his belief about the neighbor', -1,
        { r: 'Insight-only is not first-line', approach: 'Depth-work framing', why: 'Medication and supportive care come first', keys: ['fixed delusion'], mistake: 'Prioritizing insight over indicated care' }),
      O('c', 'Start him on an antipsychotic medication yourself and arrange to monitor his response and side effects over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or monitor antipsychotics', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Recommend a course of weekly supportive counseling on its own as the complete treatment for his fixed delusional belief', -1,
        { r: 'Counseling alone is insufficient', approach: 'Counseling-only framing', why: 'Delusional disorder warrants medication plus supportive care', keys: ['under-treatment'], mistake: 'Omitting medication coordination' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor approach his delusional belief in the work?', ['R5'], [
      O('a', 'Neither directly confirm nor argue against the belief, focusing on the alliance and the distress and goals he can engage with', 3,
        { r: 'Neither collude nor confront the delusion', approach: 'Stay supportive and neutral on content', why: 'A supportive stance that avoids colluding or arguing preserves the alliance', keys: ['fixed belief', 'angry no one believes him'], mistake: 'Either agreeing with or directly disputing the delusion' }),
      O('b', 'Repeatedly and firmly challenge the belief with evidence until he is finally forced to admit that it is not actually true', -2,
        { r: 'Confronting the delusion ruptures the alliance', approach: 'Confront the delusion', why: 'Direct confrontation tends to entrench the belief and damage trust', keys: ['unshakable conviction'], mistake: 'Arguing the client out of the delusion' }),
      O('c', 'Agree with him that the neighbor is most likely conspiring against him so that he feels understood and stays in treatment', -2,
        { r: 'Colluding reinforces the delusion', approach: 'Collude framing', why: 'Agreeing reinforces the delusional belief', keys: ['reality testing'], mistake: 'Validating a delusion to keep rapport' }),
      O('d', 'Avoid the topic of the neighbor entirely so that the sessions never touch on anything that might upset or provoke him', -1,
        { r: 'Total avoidance is not the approach', approach: 'Avoidant framing', why: 'The work engages his distress and goals without colluding or confronting', keys: ['engage the distress'], mistake: 'Sidestepping all of the relevant material' }),
    ]),
    Q('q8', 'treatment', 'Given the risk concern, what should the plan prioritize regarding the neighbor?', ['R3'], [
      O('a', 'Ongoing risk monitoring and a plan that addresses safety, including protective steps if the risk to the neighbor escalates', 3,
        { r: 'Monitor and plan for safety', approach: 'Integrate risk management', why: 'A delusion-driven threat to an identifiable person requires ongoing risk management', keys: ['hint of harm', 'identifiable neighbor'], mistake: 'Treating the delusion while ignoring the risk to others' }),
      O('b', 'No particular attention to the neighbor, since the client has not actually harmed anyone at any point so far', -2,
        { r: 'Ignoring the risk is unsafe', approach: 'No-monitoring framing', why: 'A stated hint of harm warrants ongoing monitoring', keys: ['active risk concern'], mistake: 'Overlooking a potential risk to others' }),
      O('c', 'Immediate involuntary hospitalization based solely on the presence of the delusion, regardless of the assessed level of risk', -1,
        { r: 'Match level of care to assessed risk', approach: 'Reflexive-hospitalization framing', why: 'Disposition follows a careful risk assessment', keys: ['stratified decision'], mistake: 'Hospitalizing reflexively without assessment' }),
      O('d', 'Encouraging him to confront the neighbor directly to resolve the conflict so that his distress about it finally settles down', -2,
        { r: 'Encouraging confrontation increases risk', approach: 'Confrontation framing', why: 'It could escalate the situation and the risk', keys: ['risk escalation'], mistake: 'Advising an action that raises risk' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor handle coordination with the psychiatrist and physician?', ['R4'], [
      O('a', 'Obtain his informed consent and release before sharing information, then collaborate as part of a coordinated team', 3,
        { r: 'Consent and release before coordinating', approach: 'Secure consent first', why: 'Coordination requires a valid release of information', keys: ['multiple providers', 'protected information'], mistake: 'Coordinating before obtaining consent' }),
      O('b', 'Share information with the other providers right away, since coordinating his care is clearly in his own best interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Avoid contacting the other providers at all so that his counseling remains entirely separate from his medical care', -1,
        { r: 'No coordination undercuts team care', approach: 'Siloed-care framing', why: 'Consented coordination benefits care here', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Share his full record with every provider so that they all have complete information about every aspect of his treatment', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure should be consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
    Q('q10', 'counseling', 'Harold becomes angry that the counselor has not confirmed his belief. The most therapeutic response is to:', ['R5'], [
      O('a', 'Empathize with how distressing and isolating it feels to not be believed, without endorsing or attacking the belief itself', 3,
        { r: 'Empathize with the distress, stay neutral on content', approach: 'Validate the feeling, not the delusion', why: 'Empathizing with his experience preserves the alliance without colluding', keys: ['angry no one believes him'], mistake: 'Either confirming or attacking the belief to manage his anger' }),
      O('b', 'Tell him plainly that the belief is false and that he simply needs to accept that the neighbor is not doing anything to him', -1,
        { r: 'Bluntly disputing entrenches the belief', approach: 'Dismiss framing', why: 'Flat denial can entrench the delusion and rupture trust', keys: ['fragile alliance'], mistake: 'Confronting the delusion to settle the conflict' }),
      O('c', 'Agree with him that he is right about the neighbor so that he calms down and is willing to continue working with you', -2,
        { r: 'Agreeing reinforces the delusion', approach: 'Collude framing', why: 'Validating the belief reinforces it', keys: ['reality testing'], mistake: 'Colluding to defuse the anger' }),
      O('d', 'End the session early to give him time to cool down rather than addressing his anger in the room with him at all', -1,
        { r: 'Avoiding the moment misses an opening', approach: 'Escape framing', why: 'His distress can be engaged supportively in the room', keys: ['avoided affect'], mistake: 'Sidestepping the emotion rather than working it' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best engage Harold given his limited insight into the belief?', ['R5'], [
      O('a', 'Build trust and work on shared, concrete goals such as reducing his stress and distress that he is willing to engage with', 3,
        { r: 'Engage via shared goals despite low insight', approach: 'Build collaboration on his terms', why: 'Working on goals he accepts engages him without requiring he abandon the belief first', keys: ['limited insight', 'high distress'], mistake: 'Requiring him to give up the belief before engaging' }),
      O('b', 'Insist that he first acknowledge that the belief is false before any other work in counseling can begin with him', -1,
        { r: 'Requiring insight first stalls engagement', approach: 'Insight-precondition framing', why: 'Demanding he renounce the belief blocks engagement', keys: ['fixed belief'], mistake: 'Setting insight as a precondition' }),
      O('c', 'Focus the sessions mainly on gathering more and more detail about the neighbor and the alleged conspiracy each week', -1,
        { r: 'Dwelling on the delusion can reinforce it', approach: 'Content-focus framing', why: 'Elaborating the delusion is not therapeutic', keys: ['delusion focus'], mistake: 'Centering the work on the delusional content' }),
      O('d', 'Tell him that there is nothing counseling can offer him unless he is first willing to take antipsychotic medication', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Supportive engagement can proceed alongside coordinating care', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Harold makes a specific, credible threat to harm the named neighbor during a session. The most appropriate action is to:', ['R4'], [
      O('a', 'Assess the risk and follow duty-to-protect obligations, which may require warning or other protective steps', 3,
        { r: 'Assess and act on duty to protect', approach: 'Apply duty-to-protect', why: 'A serious, specific, identifiable threat triggers assessment and protective duties', keys: ['specific threat', 'named neighbor'], mistake: 'Treating an identifiable threat as fully confidential' }),
      O('b', 'Keep the threat entirely confidential, since anything he shares in counseling must always remain completely private', -2,
        { r: 'Confidentiality yields to a serious threat', approach: 'Absolutist framing', why: 'A serious, identifiable threat can require disclosure', keys: ['identifiable target'], mistake: 'Treating confidentiality as absolute when there is danger' }),
      O('c', 'Wait to see whether he repeats the threat at the next session before taking any action or assessing the risk', -2,
        { r: 'Delaying assessment of a threat is unsafe', approach: 'Wait-and-see framing', why: 'An identifiable threat requires prompt assessment', keys: ['active threat'], mistake: 'Postponing an urgent risk assessment' }),
      O('d', 'Notify the neighbor and the police at once without first assessing the seriousness or following the proper protective process', -1,
        { r: 'Act on assessed risk, not reflexively', approach: 'Reflexive-disclosure framing', why: 'Protective steps follow a careful risk assessment', keys: ['proportionate response'], mistake: 'Disclosing before assessing the risk' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in psychosis care. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and coordinate with a treatment team, referring for the components beyond his demonstrated competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; delusional disorder is managed within a team', keys: ['limited psychosis training', 'needs psychiatric care'], mistake: 'Managing complex psychosis alone without competence' }),
      O('b', 'Continue managing the entire case alone to preserve the continuity of the relationship he has built with the client', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell the client his symptoms are not serious enough to need psychiatric care and keep seeing him for supportive talks only', -2,
        { r: 'Minimizing the illness fails the client', approach: 'Downplay framing', why: 'A fixed delusion with a risk concern warrants psychiatric coordination', keys: ['risk concern'], mistake: 'Underestimating the need for specialist care' }),
      O('d', 'Transfer the client at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D146 — Autism Spectrum Disorder (F84.0) — Neurodevelopmental — hard
// ============================================================================
const D146 = {
  id: 'ncmhce-D146',
  title: 'Social-communication differences and restricted interests in a child',
  category: 'Neurodevelopmental',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Autism Spectrum Disorder', code: 'F84.0' },
  diagnosis: { name: 'Autism Spectrum Disorder', code: 'F84.0' },
  differentialOptions: [
    { id: 'do1', name: 'Autism Spectrum Disorder', isCorrect: true },
    { id: 'do2', name: 'Social Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Attention-Deficit/Hyperactivity Disorder, Combined', isCorrect: false },
    { id: 'do4', name: 'Intellectual Developmental Disorder, Mild', isCorrect: false },
  ],
  narrative: {
    intake:
      'Liam Park, a 7-year-old boy, is brought by his parents for long-standing differences in social interaction. Since early childhood he ' +
      'has had limited eye contact and back-and-forth conversation, intense focus on train schedules, and distress at small changes in routine.',
    session1:
      'His teacher reports he plays alongside but not with peers, takes language literally, and lines up his toys repeatedly. The pattern has ' +
      'been present from his earliest years rather than emerging recently, and it is present at home and at school across many situations.',
    session2:
      'He is verbal and curious, and his parents are worried and want to understand how best to help him. There is no evidence of a sudden ' +
      'change, and his difficulties are not limited to unfamiliar social settings; they reflect a consistent, early-emerging pattern.',
  },
  diagnosticRationale:
    'Persistent deficits in social communication and social interaction across multiple contexts, together with restricted, repetitive ' +
    'patterns of behavior and interests, present from early development and causing impairment, are consistent with autism spectrum ' +
    'disorder, distinct from social anxiety disorder, attention-deficit/hyperactivity disorder, and an intellectual developmental disorder alone.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Autism spectrum disorder: social-communication deficits plus restricted/repetitive behaviors, early onset, impairment' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Autism: comprehensive assessment and evidence-based behavioral and educational support' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Multi-informant, developmental assessment and coordinating specialized evaluation' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.5., and C.2.: welfare, confidentiality with minors, and competence' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Clinical decision-making and coordinated care across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an autism spectrum disorder diagnosis?', ['R1'], [
      O('a', 'Persistent social-communication deficits and restricted, repetitive behaviors present from early development across contexts', 3,
        { r: 'Both domains, early onset, across contexts', approach: 'Confirm the core criteria', why: 'ASD requires social-communication deficits and restricted/repetitive behaviors with early onset', keys: ['limited eye contact and conversation', 'lines up toys, routine distress'], mistake: 'Diagnosing ASD from social difficulty alone' }),
      O('b', 'That the parents can identify the single event they believe first caused his social and behavioral differences', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his behavior has become noticeably different over the past few weeks compared with how it was before then', -1,
        { r: 'A recent change argues against ASD', approach: 'Recent-change framing', why: 'ASD is an early-emerging, persistent pattern', keys: ['present from earliest years'], mistake: 'Confusing a recent change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define ASD', approach: 'Mood-criteria framing', why: 'ASD is defined by developmental criteria', keys: ['developmental pattern'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from social anxiety disorder?', ['R1'], [
      O('a', 'His social differences are an early-emerging skills and interaction pattern, not a fear of being scrutinized or negatively judged', 3,
        { r: 'Developmental skills pattern versus fear of scrutiny', approach: 'Contrast the basis of the difficulty', why: 'Social anxiety is fear of scrutiny; ASD is an early social-communication difference', keys: ['literal language, plays alongside not with peers', 'early onset'], mistake: 'Mistaking early social-communication differences for social anxiety' }),
      O('b', 'The fact that he tends to be quiet and to keep to himself in many of the social situations he encounters during the day', -1,
        { r: 'Social withdrawal occurs in both', approach: 'Withdrawal framing', why: 'Reduced social engagement is shared; the basis differs', keys: ['shared feature'], mistake: 'Using social withdrawal to differentiate' }),
      O('c', 'The discomfort that he shows when he is asked to interact with peers and adults that he does not already know well', -1,
        { r: 'Discomfort with others occurs in both', approach: 'Discomfort framing', why: 'It is nonspecific between them', keys: ['shared discomfort'], mistake: 'Reading discomfort as decisive' }),
      O('d', 'The way his difficulties tend to be a bit worse on busy, overstimulating days than on calmer days at school', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening with overstimulation does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using reactivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from attention-deficit/hyperactivity disorder?', ['R1'], [
      O('a', 'His core difficulties are social-communication and restricted, repetitive patterns rather than primarily inattention and hyperactivity', 3,
        { r: 'Social-communication/repetitive versus inattention/hyperactivity', approach: 'Contrast the core domains', why: 'ADHD centers on inattention and hyperactivity; ASD on social-communication and repetitive behavior', keys: ['restricted interests, routine distress'], mistake: 'Collapsing ASD into ADHD' }),
      O('b', 'The fact that he can have trouble paying attention and staying on task during some of his activities at school each day', -1,
        { r: 'Attention difficulty can occur in both', approach: 'Attention framing', why: 'Inattention is nonspecific and can co-occur', keys: ['shared feature'], mistake: 'Using attention problems to differentiate' }),
      O('c', 'The high energy that he sometimes shows when he is deeply absorbed in his favorite topics and activities at home', -1,
        { r: 'High energy is nonspecific', approach: 'Energy framing', why: 'Absorption and energy do not separate the disorders', keys: ['shared feature'], mistake: 'Reading energy as decisive' }),
      O('d', 'The way his behavior tends to be a little more difficult during the busiest and most stressful weeks of the school year', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from an intellectual developmental disorder alone?', ['R1'], [
      O('a', 'He shows specific social-communication and repetitive-behavior differences rather than only a global delay in intellectual functioning', 3,
        { r: 'Specific ASD pattern versus global delay', approach: 'Contrast specific deficits with global delay', why: 'Intellectual disability alone is a global delay without the specific ASD social-communication pattern', keys: ['verbal and curious', 'specific social and repetitive features'], mistake: 'Attributing ASD features to global delay alone' }),
      O('b', 'The fact that he sometimes has trouble keeping up with the academic work that is expected of children of his age', -1,
        { r: 'Academic difficulty is nonspecific', approach: 'Academic framing', why: 'It can occur in both and is nonspecific', keys: ['shared feature'], mistake: 'Using academic difficulty to differentiate' }),
      O('c', 'The challenges he has with some everyday tasks that other children his age are able to manage more independently', -1,
        { r: 'Adaptive difficulty occurs in both', approach: 'Adaptive framing', why: 'It is nonspecific between them', keys: ['shared difficulty'], mistake: 'Reading adaptive difficulty as decisive' }),
      O('d', 'The way his difficulties tend to be a bit more noticeable in unfamiliar settings than in his familiar home environment', 0,
        { r: 'Setting-linked variation is nonspecific', approach: 'Setting framing', why: 'It does not separate the conditions', keys: ['nonspecific factor'], mistake: 'Over-reading a setting variation' }),
    ]),
    Q('q5', 'intake', 'What is the most appropriate counselor action regarding the diagnostic evaluation?', ['R3'], [
      O('a', 'Gather multi-informant, developmental history and coordinate a comprehensive specialized evaluation rather than diagnosing alone', 3,
        { r: 'Multi-informant history; coordinate specialized eval', approach: 'Coordinate within scope', why: 'ASD is confirmed via comprehensive, often specialized, multi-informant evaluation', keys: ['parent and teacher reports', 'developmental history'], mistake: 'Diagnosing ASD from a single source or session' }),
      O('b', 'Base the diagnosis only on how Liam behaves during the counseling session itself without other informants or history', -1,
        { r: 'One observation is insufficient', approach: 'Single-snapshot framing', why: 'Cross-setting, developmental data are needed', keys: ['needs collateral'], mistake: 'Diagnosing from one in-session sample' }),
      O('c', 'Order genetic and neuroimaging tests yourself to confirm the diagnosis before any treatment planning begins for him', -1,
        { r: 'Ordering such tests exceeds scope', approach: 'Order-test framing', why: 'Counselors coordinate but do not order these tests', keys: ['scope limit'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Rely only on the parents’ report and skip seeking any information from his teacher or his school about his functioning', -1,
        { r: 'A single informant is insufficient', approach: 'Single-informant framing', why: 'Cross-setting information strengthens the assessment', keys: ['needs cross-setting data'], mistake: 'Using only one informant' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment-planning priority?', ['R2'], [
      O('a', 'Coordinate a comprehensive evaluation and evidence-based behavioral, educational, and family supports tailored to his needs', 3,
        { r: 'Coordinated, individualized evidence-based supports', approach: 'Apply the guideline within scope', why: 'ASD care centers on coordinated, individualized behavioral and educational support', keys: ['early-emerging pattern', 'parents want help'], mistake: 'Offering insight-only individual therapy as the plan' }),
      O('b', 'Begin intensive insight-oriented play therapy alone aimed at resolving what is assumed to be underlying emotional conflict', -1,
        { r: 'Insight-only is not the indicated approach', approach: 'Depth-only framing', why: 'Behavioral, skills, and educational supports fit ASD', keys: ['skills-based need'], mistake: 'Prioritizing insight over skills and supports' }),
      O('c', 'Recommend medication as the primary treatment for his core social-communication and restricted, repetitive behaviors', -2,
        { r: 'No medication treats the core features', approach: 'Medication-first framing', why: 'Behavioral and educational supports are core; medication is not first-line for the core features', keys: ['core-feature treatment'], mistake: 'Defaulting to medication for the core features' }),
      O('d', 'Advise the parents to wait and see whether he simply grows out of the differences before arranging any support at all', -1,
        { r: 'Passive waiting delays needed support', approach: 'Watchful-waiting framing', why: 'Early support is beneficial and should not be delayed', keys: ['active needs'], mistake: 'Delaying indicated support' }),
    ]),
    Q('q7', 'treatment', 'A central, appropriate element of his plan would be:', ['R2'], [
      O('a', 'Building communication and social skills and supporting predictable routines, drawing on his strengths and interests', 3,
        { r: 'Skills, routines, and strengths-based support', approach: 'Support communication and structure', why: 'Skills-building and predictable routines fit ASD and leverage his strengths', keys: ['routine distress', 'intense interests'], mistake: 'Ignoring structure and strengths' }),
      O('b', 'Pushing him to give up his special interests and his routines entirely so that he becomes more flexible as quickly as possible', -2,
        { r: 'Forcing flexibility ignores his needs', approach: 'Eliminate-interests framing', why: 'Predictability and interests can be supports, not targets for elimination', keys: ['interests as strengths'], mistake: 'Stripping away supports that help him' }),
      O('c', 'Frequently changing his routine and environment so that he is constantly challenged to adapt to new and unfamiliar situations', -2,
        { r: 'Constant change increases distress', approach: 'Novelty framing', why: 'Frequent change can overwhelm and dysregulate him', keys: ['routine distress'], mistake: 'Introducing destabilizing novelty' }),
      O('d', 'Focusing mainly on academic tutoring while leaving his social-communication needs and supports unaddressed for now', -1,
        { r: 'Tutoring alone misses core needs', approach: 'Tutoring-only framing', why: 'Social-communication support is central to ASD care', keys: ['core needs'], mistake: 'Addressing academics while neglecting core supports' }),
    ]),
    Q('q8', 'treatment', 'How should the school be involved in his plan?', ['R3'], [
      O('a', 'With consent, coordinate with the school for supports and accommodations across the settings where he spends his time', 3,
        { r: 'Coordinate consented school supports', approach: 'Align supports across settings', why: 'Cross-setting coordination strengthens ASD support', keys: ['difficulties at school too'], mistake: 'Addressing home while ignoring school' }),
      O('b', 'Keep the school entirely out of the plan so that Liam’s counseling remains a completely private matter for the family', -1,
        { r: 'Excluding school forgoes useful supports', approach: 'Siloed framing', why: 'Coordinated, consented school involvement helps', keys: ['cross-setting needs'], mistake: 'Refusing helpful, consented coordination' }),
      O('c', 'Contact the school directly to share the details of his sessions without first obtaining the family’s informed consent', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Disclose-without-consent framing', why: 'Coordination requires a valid release', keys: ['no release'], mistake: 'Sharing information without authorization' }),
      O('d', 'Recommend that the school simply place him in a separate setting away from his peers to avoid any social difficulties', -1,
        { r: 'Reflexive segregation is not the goal', approach: 'Segregation framing', why: 'Supported, inclusive participation is generally preferable', keys: ['inclusion with support'], mistake: 'Defaulting to exclusion' }),
    ]),
    Q('q9', 'treatment', 'His parents ask whether medication will treat his autism. The most appropriate response is to:', ['R4'], [
      O('a', 'Explain that medication does not treat the core features and coordinate a prescriber referral only for specific co-occurring concerns', 3,
        { r: 'No core-feature medication; refer for specifics', approach: 'Coordinate within scope', why: 'Medication may target co-occurring symptoms, not the core ASD features', keys: ['asks about medication'], mistake: 'Implying medication treats the core features' }),
      O('b', 'Tell them the specific medication and dose to request that will treat his autism and resolve his social differences', -2,
        { r: 'Naming a drug and dose exceeds scope and misstates the evidence', approach: 'Prescriptive advice', why: 'It is outside scope and overstates what medication does', keys: ['no prescriptive authority'], mistake: 'Overstepping into medication management' }),
      O('c', 'Assure them that a reliable medication exists that will treat the autism itself if they start it as soon as possible', -2,
        { r: 'Overstating a nonexistent option is inaccurate', approach: 'Overstate framing', why: 'No medication treats the core ASD features', keys: ['accurate information'], mistake: 'Promising a treatment that does not exist' }),
      O('d', 'Tell them medication questions are entirely outside the counseling role and decline to discuss the topic with them at all', -1,
        { r: 'Refusing to engage abandons the question', approach: 'Flat refusal', why: 'Providing accurate information and coordinating is appropriate', keys: ['care coordination'], mistake: 'Declining to engage a relevant question' }),
    ]),
    Q('q10', 'counseling', 'How should the counselor engage Liam himself in the work?', ['R5'], [
      O('a', 'Use his interests and clear, concrete communication, adapting to his strengths and his sensory and social needs', 3,
        { r: 'Strengths-based, adapted engagement', approach: 'Adapt to his communication and needs', why: 'Engaging through interests with concrete communication fits ASD', keys: ['intense interest in trains', 'literal language'], mistake: 'Using abstract, neurotypical-expectation methods' }),
      O('b', 'Insist that he maintain eye contact and engage in extended small talk before any other work can begin in their sessions', -1,
        { r: 'Forcing neurotypical norms is not affirming', approach: 'Norm-enforcement framing', why: 'Demanding eye contact and small talk can distress him', keys: ['social-communication differences'], mistake: 'Imposing neurotypical expectations' }),
      O('c', 'Discourage his focus on trains and other special interests so that he learns to talk about more ordinary topics instead', -1,
        { r: 'Discouraging interests removes a strength', approach: 'Eliminate-interests framing', why: 'His interests are an engagement asset', keys: ['interests as strengths'], mistake: 'Suppressing a useful engagement avenue' }),
      O('d', 'Keep the sessions highly unstructured and unpredictable so that he becomes more comfortable with novelty and change', -1,
        { r: 'Unpredictability can dysregulate him', approach: 'Novelty framing', why: 'Predictable structure tends to help', keys: ['routine needs'], mistake: 'Removing the structure he benefits from' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support the parents?', ['R2'], [
      O('a', 'Provide psychoeducation and parent support, framing differences with respect and connecting them with appropriate services', 3,
        { r: 'Respectful psychoeducation and parent support', approach: 'Educate and connect to services', why: 'Parent education and service connection are central to ASD support', keys: ['worried parents', 'want to help'], mistake: 'Leaving the parents without education or resources' }),
      O('b', 'Emphasize how severe and limiting his condition is so that the parents fully grasp how difficult his future will be', -1,
        { r: 'A deficit-only framing is discouraging', approach: 'Deficit-emphasis framing', why: 'A balanced, strengths-aware framing serves the family better', keys: ['strengths-aware'], mistake: 'Centering only on limitations' }),
      O('c', 'Tell the parents that there is little they can do and that they should simply wait for him to grow out of the differences', -1,
        { r: 'Discouraging action forgoes support', approach: 'Passivity framing', why: 'Active, early support benefits the child', keys: ['active support'], mistake: 'Discouraging useful parent involvement' }),
      O('d', 'Provide detailed statistics on autism prevalence in place of practical guidance and connection to support services', -1,
        { r: 'Statistics are not the support they need', approach: 'Statistical framing', why: 'Practical guidance and services are more useful', keys: ['practical needs'], mistake: 'Substituting data for actionable support' }),
    ]),
    Q('q12', 'ethics', 'Because Liam is a minor, how should the counselor handle confidentiality with him and his parents?', ['R4'], [
      O('a', 'Clarify at the outset, in age-appropriate terms, what is shared with his parents and what stays private, within legal limits', 3,
        { r: 'Set minor-confidentiality expectations up front', approach: 'Clarify confidentiality with minors', why: 'ACA guidance calls for clarifying disclosure expectations with minors and guardians', keys: ['7-year-old client', 'parents involved'], mistake: 'Leaving confidentiality expectations undefined' }),
      O('b', 'Promise Liam that nothing he says will ever be shared with his parents under any circumstances throughout the treatment', -2,
        { r: 'Absolute secrecy from guardians is inappropriate', approach: 'Overpromise framing', why: 'Guardians of a young child are appropriately involved within limits', keys: ['guardian role'], mistake: 'Guaranteeing total secrecy from parents' }),
      O('c', 'Share everything automatically with the parents, since as a minor he has no privacy interests at all to be considered here', -1,
        { r: 'Minors retain some privacy interests', approach: 'No-privacy framing', why: 'Even minors have privacy interests respected within limits', keys: ['child dignity'], mistake: 'Disregarding the minor’s privacy entirely' }),
      O('d', 'Avoid discussing confidentiality with the family so that the issue does not complicate the start of his treatment', -1,
        { r: 'Skipping the discussion undermines consent', approach: 'Evade framing', why: 'Confidentiality expectations are part of informed consent', keys: ['informed consent'], mistake: 'Failing to set expectations' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in autism assessment and care. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, or refer to clinicians and a team competent in autism assessment and intervention', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; ASD assessment and care are specialized', keys: ['limited autism training'], mistake: 'Diagnosing and treating ASD without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship he has built with the family so far', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell the family the differences are not significant enough to need any specialized evaluation and continue supportive talks only', -2,
        { r: 'Minimizing the picture fails the family', approach: 'Downplay framing', why: 'An early-emerging, impairing pattern warrants specialized evaluation', keys: ['impairing pattern'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer the family at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the family without coordination' }),
    ]),
  ],
};

// ============================================================================
// D147 — Body Dysmorphic Disorder (F45.22) — OCD-Related — hard
// ============================================================================
const D147 = {
  id: 'ncmhce-D147',
  title: 'Hours lost to a perceived flaw others cannot see',
  category: 'OCD-Related',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Body Dysmorphic Disorder', code: 'F45.22' },
  diagnosis: { name: 'Body Dysmorphic Disorder', code: 'F45.22' },
  differentialOptions: [
    { id: 'do1', name: 'Body Dysmorphic Disorder', isCorrect: true },
    { id: 'do2', name: 'Obsessive-Compulsive Disorder', isCorrect: false },
    { id: 'do3', name: 'Anorexia Nervosa, Restricting Type', isCorrect: false },
    { id: 'do4', name: 'Social Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Maya Cohen, a 23-year-old student, presents with intense preoccupation that her skin and nose are disfigured, though others see no ' +
      'defect or only a slight one. She spends hours each day checking mirrors, camouflaging with makeup, and seeking reassurance about her looks.',
    session1:
      'The preoccupation causes severe distress and she has begun avoiding classes and social events and researching cosmetic surgery. She ' +
      'has little insight that her view of her appearance is distorted, and she is convinced a procedure is the only thing that will fix it.',
    session2:
      'She reports feeling hopeless and has had passing thoughts that she would be better off dead because of how she looks, without current ' +
      'plan or intent. Her concern is specifically with how her face appears, not with her weight or body shape or with fear of social judgment.',
  },
  diagnosticRationale:
    'Preoccupation with one or more perceived defects in appearance that are not observable or appear only slight to others, accompanied by ' +
    'repetitive behaviors (mirror checking, camouflaging, reassurance-seeking) and significant distress or impairment, meets DSM-5-TR criteria ' +
    'for body dysmorphic disorder, distinct from obsessive-compulsive disorder, an eating disorder centered on weight/shape, and social anxiety disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Body dysmorphic disorder: preoccupation with perceived appearance defects plus repetitive behaviors, with an insight specifier' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Body dysmorphic disorder: CBT with exposure and response prevention as first-line' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk in body dysmorphic disorder' },
    { id: 'R4', source: 'APA CPG', detail: 'Exposure-based cognitive-behavioral therapy for obsessive-compulsive and related disorders' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, scope of practice, and informed consent' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a body dysmorphic disorder diagnosis?', ['R1'], [
      O('a', 'Preoccupation with a perceived appearance defect that is not observable or slight, plus repetitive behaviors and distress', 3,
        { r: 'Perceived defect plus repetitive behaviors', approach: 'Confirm the core criteria', why: 'BDD requires preoccupation with a non-observable/slight defect plus repetitive behaviors and distress', keys: ['skin and nose preoccupation', 'mirror checking, camouflaging'], mistake: 'Diagnosing BDD from ordinary appearance concern' }),
      O('b', 'That she can identify the single event she believes first caused her to start worrying about her appearance', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her concern has become noticeably worse over the past few days compared with how it was the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The established preoccupation and behaviors are what matter', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define BDD', approach: 'Mood-criteria framing', why: 'BDD is defined by appearance preoccupation and behaviors', keys: ['appearance-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from an eating disorder?', ['R1'], [
      O('a', 'Her preoccupation is with a specific facial appearance defect, not with body weight, shape, or eating behavior', 3,
        { r: 'Facial-appearance focus versus weight/shape', approach: 'Contrast the focus of concern', why: 'Eating disorders center on weight/shape and eating; her concern is a perceived facial defect', keys: ['concern with face, not weight or shape'], mistake: 'Reframing appearance-defect preoccupation as an eating disorder' }),
      O('b', 'The fact that she is distressed about how she looks and spends a lot of time focused on her physical appearance each day', -1,
        { r: 'Appearance distress occurs in both', approach: 'Appearance framing', why: 'Both involve appearance concern; the focus differs', keys: ['shared feature'], mistake: 'Using appearance distress to differentiate' }),
      O('c', 'The avoidance of classes and social events that she has begun because of how she feels about the way she looks', -1,
        { r: 'Avoidance occurs in both', approach: 'Avoidance framing', why: 'Avoidance is shared and nonspecific', keys: ['shared avoidance'], mistake: 'Reading avoidance as decisive' }),
      O('d', 'The way her distress about her appearance tends to be worse during the most stressful weeks of her academic semester', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from obsessive-compulsive disorder?', ['R1'], [
      O('a', 'Her obsessions and repetitive behaviors center specifically on her perceived appearance rather than on broader OCD themes', 3,
        { r: 'Appearance-specific versus broader OCD themes', approach: 'Contrast the content focus', why: 'BDD is appearance-focused, whereas OCD spans varied themes such as contamination or harm', keys: ['appearance preoccupation', 'mirror checking'], mistake: 'Treating appearance-focused BDD as general OCD' }),
      O('b', 'The fact that she performs repetitive behaviors, such as checking, in an effort to reduce the distress that she feels', -1,
        { r: 'Repetitive behaviors occur in both', approach: 'Behavior framing', why: 'Repetitive behaviors are shared; the focus differs', keys: ['shared feature'], mistake: 'Using repetitive behaviors to differentiate' }),
      O('c', 'The distress and the anxiety that she experiences when she is unable to perform her usual checking or camouflaging', -1,
        { r: 'Distress on prevention occurs in both', approach: 'Distress framing', why: 'It is nonspecific between them', keys: ['shared distress'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her symptoms tend to be a bit worse in the evenings than they are earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'Given her hopelessness about her appearance, the most appropriate step is to:', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment, recognizing that suicide risk is elevated in body dysmorphic disorder', 3,
        { r: 'Assess elevated risk with structure', approach: 'Screen risk directly', why: 'BDD carries elevated suicide risk warranting structured screening', keys: ['better-off-dead thoughts', 'hopeless about appearance'], mistake: 'Overlooking elevated suicide risk' }),
      O('b', 'Treat the comment as an understandable reaction to feeling unattractive that does not require any structured assessment', -2,
        { r: 'Minimizing the ideation is unsafe', approach: 'Minimize framing', why: 'It forecloses needed risk assessment', keys: ['unassessed ideation'], mistake: 'Dismissing the ideation' }),
      O('c', 'Move ahead with planning exposure-based therapy first, assuming the thoughts will resolve once treatment is underway', -1,
        { r: 'Risk must be assessed before this', approach: 'Treatment-first framing', why: 'Safety assessment precedes treatment planning', keys: ['active disclosure'], mistake: 'Sequencing treatment ahead of safety' }),
      O('d', 'Ask her to sign a brief written promise to stay safe and reach out if the thoughts get worse over the coming week', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk or assess it', keys: ['needs safety planning'], mistake: 'Substituting a contract for assessment' }),
    ]),
    Q('q5', 'intake', 'What specifier is most important to assess to complete her diagnostic picture?', ['R1'], [
      O('a', 'Her level of insight into the appearance beliefs, since body dysmorphic disorder includes good, poor, and absent-insight specifiers', 3,
        { r: 'Assess the insight specifier', approach: 'Clarify level of insight', why: 'DSM-5-TR includes BDD insight specifiers that guide care and risk', keys: ['little insight', 'convinced surgery will fix it'], mistake: 'Missing a clinically important specifier' }),
      O('b', 'Whether she has ever experienced a panic attack with a racing heart and a fear of losing control in a public place', -1,
        { r: 'Panic is a different rule-out', approach: 'Panic framing', why: 'Panic does not bear on the BDD specifier', keys: ['no panic reported'], mistake: 'Confusing comorbidity with the specifier' }),
      O('c', 'Whether she has clear stretches of elevated mood and reduced need for sleep lasting several days at a time', -1,
        { r: 'Hypomania screen is low yield here', approach: 'Mood-episode framing', why: 'Nothing suggests a bipolar pattern', keys: ['BDD picture'], mistake: 'Chasing an unsupported rule-out' }),
      O('d', 'Whether her preoccupation tends to be a little worse in the mornings than later during the afternoon and evening', 0,
        { r: 'Diurnal pattern is not central', approach: 'Time-of-day framing', why: 'Timing does not change the formulation', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation?', ['R2'], [
      O('a', 'Cognitive behavioral therapy with exposure and response prevention tailored to body dysmorphic disorder', 3,
        { r: 'CBT with ERP for BDD', approach: 'Apply the guideline', why: 'NICE and APA CPG support CBT with ERP for BDD', keys: ['mirror checking, camouflaging, reassurance'], mistake: 'Choosing a non-exposure approach as primary' }),
      O('b', 'A referral to a cosmetic surgeon, since correcting the perceived defect is the most direct way to resolve her distress', -2,
        { r: 'Cosmetic procedures are not the treatment', approach: 'Surgical-fix framing', why: 'Cosmetic procedures generally do not relieve BDD and can worsen it', keys: ['seeking surgery'], mistake: 'Treating BDD with a cosmetic procedure' }),
      O('c', 'Open-ended supportive counseling that mainly gives her space to talk about how unhappy she is with her appearance', -1,
        { r: 'Unstructured support underperforms ERP', approach: 'Supportive-only framing', why: 'It lacks the exposure-and-response-prevention mechanism', keys: ['needs ERP'], mistake: 'Defaulting to nondirective support' }),
      O('d', 'A primarily insight-oriented exploration of her childhood as the central route to resolving her appearance preoccupation', 0,
        { r: 'Insight-only is not first-line here', approach: 'Depth-only framing', why: 'Evidence favors CBT with ERP', keys: ['symptom-focused need'], mistake: 'Prioritizing origins over ERP' }),
    ]),
    Q('q7', 'treatment', 'She is convinced cosmetic surgery is the only solution. How should the counselor respond?', ['R2'], [
      O('a', 'Provide psychoeducation that procedures rarely relieve body dysmorphic disorder and engage her in evidence-based treatment instead', 3,
        { r: 'Educate that surgery is not the fix; engage treatment', approach: 'Redirect to effective care', why: 'Cosmetic procedures generally do not relieve BDD; CBT/ERP is indicated', keys: ['convinced surgery will fix it', 'poor insight'], mistake: 'Supporting a cosmetic procedure as the solution' }),
      O('b', 'Encourage her to pursue the surgery she wants so that she can finally feel satisfied with how her appearance looks', -2,
        { r: 'Endorsing surgery can worsen BDD', approach: 'Endorse-surgery framing', why: 'Procedures generally do not relieve and can worsen BDD', keys: ['surgery not curative'], mistake: 'Steering her toward an ineffective, risky path' }),
      O('c', 'Refer her directly to a cosmetic surgeon so that a specialist can evaluate whether the procedure she wants is warranted', -1,
        { r: 'A surgical referral reinforces the misconception', approach: 'Refer-to-surgeon framing', why: 'It frames a procedure as the solution rather than treating BDD', keys: ['needs BDD treatment'], mistake: 'Routing to surgery instead of treatment' }),
      O('d', 'Avoid the topic of surgery entirely so that the sessions never touch on anything that might upset or discourage her', -1,
        { r: 'Avoiding the topic misses a key target', approach: 'Avoidant framing', why: 'The surgery-seeking belief is central to address', keys: ['avoided material'], mistake: 'Sidestepping a central clinical issue' }),
    ]),
    Q('q8', 'treatment', 'A central response-prevention target in her treatment would be:', ['R2'], [
      O('a', 'Reducing mirror checking, camouflaging, and reassurance-seeking so the anxiety can subside without those behaviors', 3,
        { r: 'Reduce the appearance-related rituals', approach: 'Target the maintaining behaviors', why: 'Checking, camouflaging, and reassurance maintain the BDD cycle', keys: ['hours of checking', 'reassurance-seeking'], mistake: 'Leaving the rituals in place' }),
      O('b', 'Helping her find more effective makeup and camouflaging techniques so that she feels more confident about her appearance', -2,
        { r: 'Optimizing camouflage reinforces the disorder', approach: 'Optimize-camouflage framing', why: 'It accommodates rather than reduces the rituals', keys: ['ritual reinforced'], mistake: 'Making the camouflaging more effective' }),
      O('c', 'Teaching her to check her appearance even more carefully so that she can be certain about exactly how she looks', -2,
        { r: 'More checking fuels the disorder', approach: 'Checking framing', why: 'Increased checking reinforces the preoccupation', keys: ['mirror checking'], mistake: 'Encouraging the maintaining behavior' }),
      O('d', 'Providing her with clear reassurance about her appearance whenever she asks so that she feels calmer during the session', -1,
        { r: 'Reassurance is itself a ritual', approach: 'Reassurance framing', why: 'Reassurance maintains the cycle', keys: ['reassurance-seeking'], mistake: 'Giving reassurance that feeds the cycle' }),
    ]),
    Q('q9', 'treatment', 'Maya asks whether medication could help. The most appropriate counselor action is to:', ['R5'], [
      O('a', 'Provide general information and coordinate a referral to a prescriber for evaluation with her consent, within scope', 3,
        { r: 'Refer and coordinate within scope', approach: 'Coordinate care', why: 'Counselors refer for medication rather than prescribe', keys: ['asks about medication'], mistake: 'Giving specific medication advice' }),
      O('b', 'Recommend the specific medication and dose that tends to work best for people with body dysmorphic concerns like hers', -2,
        { r: 'Naming a drug and dose exceeds scope', approach: 'Prescriptive advice', why: 'Medication selection is outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping professional limits' }),
      O('c', 'Tell her medication is unnecessary as long as she keeps doing the exposure work and stops thinking about her appearance', -1,
        { r: 'Discouraging meds overreaches', approach: 'Discourage medication', why: 'The decision belongs with a prescriber', keys: ['client autonomy'], mistake: 'Steering a medical decision' }),
      O('d', 'Suggest she research medications for body image herself and bring whichever she prefers to a future appointment with you', -1,
        { r: 'Outsourcing to self-research is poor care', approach: 'Self-research framing', why: 'It abandons proper coordination', keys: ['needs professional evaluation'], mistake: 'Replacing referral with self-directed search' }),
    ]),
    Q('q10', 'counseling', 'During a session Maya repeatedly asks the counselor to confirm that her skin looks fine. The best response is to:', ['R2'], [
      O('a', 'Gently name the reassurance-seeking as part of the disorder and help her practice tolerating the uncertainty rather than answering it', 3,
        { r: 'Name the pattern; build uncertainty tolerance', approach: 'Address rather than feed reassurance', why: 'Reassurance maintains the cycle; tolerating uncertainty treats it', keys: ['repeated reassurance-seeking'], mistake: 'Answering to relieve her distress in the moment' }),
      O('b', 'Provide her with a clear, confident answer each time so that she can leave the session feeling calm and reassured', -2,
        { r: 'Answering reinforces the cycle', approach: 'Reassure framing', why: 'Repeated reassurance maintains the disorder', keys: ['reassurance dependence'], mistake: 'Reinforcing the maintaining behavior' }),
      O('c', 'Tell her that her worries about her skin are irrational and that she should already know there is nothing wrong with it', -1,
        { r: 'Shaming language harms the alliance', approach: 'Dismissive framing', why: 'It invalidates her and damages rapport', keys: ['risk of rupture'], mistake: 'Invalidating instead of guiding' }),
      O('d', 'Change the subject quickly each time she seeks reassurance so that the appearance topic does not dominate the session', -1,
        { r: 'Avoiding the moment wastes an opportunity', approach: 'Topic-avoidance framing', why: 'The in-session reassurance-seeking is a treatment target', keys: ['missed target'], mistake: 'Avoiding rather than working the pattern' }),
    ]),
    Q('q11', 'counseling', 'Maya says her looks make her worthless. The most therapeutic response is to:', ['R2'], [
      O('a', 'Validate her pain and gently address the distorted appearance beliefs as treatable cognitions rather than facts about her worth', 3,
        { r: 'Validate, then address the distorted beliefs', approach: 'Validate and reframe the cognition', why: 'Framing the beliefs as treatable distortions counters the worthlessness conclusion', keys: ['looks make her worthless', 'poor insight'], mistake: 'Either confirming or coldly disputing the belief' }),
      O('b', 'Agree that her appearance is a serious problem and focus the work on helping her accept that she is unattractive', -2,
        { r: 'Endorsing the belief deepens it', approach: 'Validate-the-distortion framing', why: 'It reinforces the distorted appearance belief', keys: ['cognitive distortion'], mistake: 'Colluding with the distorted belief' }),
      O('c', 'Tell her quickly that she looks completely fine and that she has nothing whatsoever to worry about regarding her appearance', -1,
        { r: 'Flat reassurance feeds the cycle', approach: 'Reassurance framing', why: 'It reinforces reassurance-seeking', keys: ['reassurance dependence'], mistake: 'Providing reassurance that maintains the disorder' }),
      O('d', 'Steer the conversation away from her appearance entirely so that the session does not become too distressing for her', -1,
        { r: 'Avoidance leaves the belief intact', approach: 'Topic-avoidance framing', why: 'The appearance belief is a core treatment target', keys: ['avoided cognition'], mistake: 'Sidestepping emotionally central material' }),
    ]),
    Q('q12', 'ethics', 'Maya asks the counselor to write a letter supporting insurance coverage for cosmetic surgery for her nose. Best response?', ['R5'], [
      O('a', 'Explain you cannot endorse a procedure that is not indicated for her condition and offer to document the actual clinical picture with consent', 3,
        { r: 'Do not endorse a non-indicated procedure', approach: 'Maintain honest, in-scope records', why: 'Counselors document accurately and do not certify an unindicated procedure', keys: ['wants surgery support letter'], mistake: 'Endorsing a cosmetic procedure that is not indicated' }),
      O('b', 'Write the supportive letter exactly as she requests it, since helping her get the surgery she wants serves her best interest', -2,
        { r: 'Endorsing the surgery can worsen BDD', approach: 'Endorse-surgery framing', why: 'It supports an ineffective, potentially harmful path and misrepresents the picture', keys: ['surgery not indicated'], mistake: 'Certifying a non-indicated procedure' }),
      O('c', 'Refuse to provide any documentation at all and tell her that nothing about her treatment can ever be shared with anyone', -1,
        { r: 'A blanket refusal overstates the limit', approach: 'Flat-refusal framing', why: 'Accurate documentation with consent is permissible', keys: ['consent process'], mistake: 'Withholding even appropriate documentation' }),
      O('d', 'State in the letter that the surgery is medically necessary based mainly on how strongly she feels she needs it', -2,
        { r: 'Certifying necessity on her conviction is unsupportable', approach: 'Unsupported-certification framing', why: 'You cannot certify medical necessity the picture does not support', keys: ['not supportable'], mistake: 'Issuing conclusions you cannot substantiate' }),
    ]),
    Q('q13', 'ethics', 'As exposure and response prevention is planned, what does informed consent most importantly require here?', ['R5'], [
      O('a', 'Explaining the rationale, the temporary distress the exercises can provoke, and that her participation remains voluntary', 3,
        { r: 'Disclose rationale, distress, and choice', approach: 'Obtain informed consent', why: 'Consent requires explaining the approach and its risks', keys: ['ERP planned', 'severe distress'], mistake: 'Starting ERP without informed consent' }),
      O('b', 'Assuring her in advance that the exercises will be completely comfortable and will never provoke any distress at all', -2,
        { r: 'Misrepresenting ERP is dishonest', approach: 'Downplay framing', why: 'ERP deliberately provokes manageable distress', keys: ['accurate disclosure'], mistake: 'Misstating what the treatment involves' }),
      O('c', 'Having her agree up front that she will complete every exercise assigned no matter how distressing it turns out to be', -1,
        { r: 'Consent is voluntary and revocable', approach: 'Mandate-completion framing', why: 'She retains the right to pause or decline', keys: ['voluntary participation'], mistake: 'Treating consent as a binding commitment' }),
      O('d', 'Postponing any explanation of the exercises until after the first one so that her anticipatory anxiety does not build up', -1,
        { r: 'Withholding the method violates consent', approach: 'Delay-disclosure framing', why: 'Consent must precede the intervention', keys: ['informed choice'], mistake: 'Intervening before explaining' }),
    ]),
  ],
};

// ============================================================================
// D148 — Binge-Eating Disorder (F50.81) — Eating — medium
// ============================================================================
const D148 = {
  id: 'ncmhce-D148',
  title: 'Recurrent binges without compensatory behavior',
  category: 'Eating',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Binge-Eating Disorder', code: 'F50.81' },
  diagnosis: { name: 'Binge-Eating Disorder', code: 'F50.81' },
  differentialOptions: [
    { id: 'do1', name: 'Binge-Eating Disorder', isCorrect: true },
    { id: 'do2', name: 'Bulimia Nervosa', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do4', name: 'Anorexia Nervosa, Restricting Type', isCorrect: false },
  ],
  narrative: {
    intake:
      'Renee Walters, a 38-year-old nurse, presents with several months of recurrent episodes of eating unusually large amounts of food with ' +
      'a sense of loss of control, at least weekly. The episodes leave her feeling disgusted, guilty, and distressed, and she eats alone out of shame.',
    session1:
      'She eats rapidly and past fullness even when not physically hungry, and she does not vomit, fast, over-exercise, or use laxatives ' +
      'afterward. There is no regular compensatory behavior following the binges, which distinguishes her pattern from a binge-purge cycle.',
    session2:
      'She is at a higher body weight and reports low mood and shame about her eating, and she fears being judged or told simply to diet. She ' +
      'is motivated to get help and to understand why the binges happen and how to interrupt them rather than to pursue another restrictive diet.',
  },
  diagnosticRationale:
    'Recurrent binge eating with a sense of loss of control, occurring at least weekly for three months and associated with marked distress, ' +
    'in the absence of the regular inappropriate compensatory behaviors that define bulimia nervosa, meets DSM-5-TR criteria for binge-eating ' +
    'disorder, distinct from bulimia nervosa, a primary depressive disorder, and anorexia nervosa.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Binge-eating disorder: recurrent binges with loss of control, weekly for 3 months, marked distress, no regular compensation' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Eating disorders: eating-disorder-focused CBT with medical monitoring as a team' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk in eating disorders' },
    { id: 'R4', source: 'Hays (Assessment)', detail: 'Clinical assessment and coordinating medical evaluation' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, scope of practice, and coordination of care' },
    { id: 'R6', source: 'Corey (Theory & Practice)', detail: 'Working alliance, therapeutic stance, and client engagement across theoretical approaches' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a binge-eating disorder diagnosis?', ['R1'], [
      O('a', 'Recurrent binges with loss of control at least weekly for three months with marked distress and no regular compensatory behavior', 3,
        { r: 'Binges, loss of control, distress, no compensation', approach: 'Confirm the core criteria', why: 'BED requires recurrent binges with loss of control and distress, without regular compensation', keys: ['weekly binges', 'no vomiting, fasting, or over-exercise'], mistake: 'Diagnosing BED from occasional overeating' }),
      O('b', 'That she can identify the single stressful event she believes first triggered her binge-eating episodes', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her episodes have become more frequent over the past week than they were the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The 3-month weekly pattern is what matters', keys: ['established pattern'], mistake: 'Confusing a recent uptick with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define BED', approach: 'Mood-criteria framing', why: 'BED is defined by binge eating, not mood criteria', keys: ['eating-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from bulimia nervosa?', ['R1'], [
      O('a', 'She does not engage in the regular compensatory behaviors—such as vomiting or fasting—that define bulimia nervosa', 3,
        { r: 'Absence of regular compensatory behavior', approach: 'Contrast by compensation', why: 'Bulimia requires recurrent compensation; BED lacks it', keys: ['no vomiting, fasting, or over-exercise'], mistake: 'Overlooking the absence of compensation' }),
      O('b', 'The fact that she eats large amounts of food with a clear sense of loss of control during her binge episodes', -1,
        { r: 'Binges occur in both', approach: 'Binge-presence framing', why: 'Binge eating with loss of control occurs in both', keys: ['shared feature'], mistake: 'Using binges to differentiate' }),
      O('c', 'The shame and the distress that she experiences after each one of her binge-eating episodes', -1,
        { r: 'Post-binge distress occurs in both', approach: 'Distress framing', why: 'Distress after binges is shared', keys: ['shared distress'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her episodes tend to be worse during the most stressful weeks of her hospital work schedule', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from ordinary overeating?', ['R1'], [
      O('a', 'Her episodes involve a sense of loss of control and marked distress at a clinically significant frequency, not just occasional overindulgence', 3,
        { r: 'Loss of control and distress at threshold frequency', approach: 'Apply the clinical threshold', why: 'BED requires loss of control, distress, and the frequency threshold beyond ordinary overeating', keys: ['loss of control', 'weekly, distressing'], mistake: 'Calling clinically significant binges ordinary overeating' }),
      O('b', 'The fact that she sometimes eats somewhat more than she had originally planned to during ordinary meals and on the special celebratory occasions she happens to share with family and friends', -1,
        { r: 'Occasional overeating is not the disorder', approach: 'Occasional-overeating framing', why: 'It does not meet the loss-of-control and frequency threshold', keys: ['subthreshold'], mistake: 'Equating any overeating with BED' }),
      O('c', 'The enjoyment that she sometimes takes in eating larger portions of the foods that she particularly likes', -1,
        { r: 'Enjoyment is not the criterion', approach: 'Enjoyment framing', why: 'BED binges involve distress and loss of control, not the issue here', keys: ['nonspecific'], mistake: 'Reading ordinary enjoyment as BED' }),
      O('d', 'The way she tends to eat a bit more during the holidays and other celebratory times of the year', 0,
        { r: 'Seasonal overeating is nonspecific', approach: 'Seasonal framing', why: 'It does not establish the disorder', keys: ['nonspecific factor'], mistake: 'Over-reading seasonal overeating' }),
    ]),
    Q('q4', 'core', 'What co-occurring condition is most important to screen for given her presentation?', ['R3'], [
      O('a', 'Co-occurring depression and suicide risk, which commonly accompany binge-eating disorder and shape the plan', 3,
        { r: 'Screen depression and suicide risk', approach: 'Assess comorbidity and risk', why: 'Depression frequently co-occurs with BED and elevates risk', keys: ['low mood', 'shame'], mistake: 'Treating the eating pattern without screening mood and risk' }),
      O('b', 'A previously undetected primary psychotic disorder that might account for both her low mood and her shame about eating', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing anxiety disorder that could be the sole and complete explanation for all of her binge episodes', -1,
        { r: 'Anxiety alone is not the explanation', approach: 'Anxiety-only framing', why: 'It does not by itself account for the eating pattern', keys: ['eating-disorder picture'], mistake: 'Over-attributing to anxiety alone' }),
      O('d', 'An emerging neurocognitive decline that could explain why she keeps forgetting how much she has eaten lately', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'The binge pattern fits BED, not decline', keys: ['eating-focused'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'intake', 'What is the most appropriate counselor action regarding the medical aspects of her care?', ['R6'], [
      O('a', 'Coordinate a medical evaluation and ongoing monitoring as part of a team while she engages in psychotherapy', 3,
        { r: 'Coordinate medical evaluation and monitoring', approach: 'Partner with medical care', why: 'BED care includes coordinated medical evaluation and monitoring within a team', keys: ['higher weight', 'eating-disorder care'], mistake: 'Providing solo therapy without medical coordination' }),
      O('b', 'Order laboratory tests and a metabolic panel yourself so that you can personally evaluate her medical status before treatment', -1,
        { r: 'Ordering tests exceeds counselor scope', approach: 'Order-test framing', why: 'Counselors coordinate but do not order labs', keys: ['scope limit'], mistake: 'Acting outside scope of practice' }),
      O('c', 'Recommend that she begin a strict weight-loss diet right away as the primary intervention for her binge-eating disorder', -2,
        { r: 'Dieting can worsen the binge cycle', approach: 'Diet-first framing', why: 'Restrictive dieting tends to drive binges and is not the indicated treatment', keys: ['restraint drives binges'], mistake: 'Prescribing a diet as treatment' }),
      O('d', 'Avoid any involvement of medical providers so that her counseling remains entirely separate from her medical care', -1,
        { r: 'No coordination undercuts team care', approach: 'Siloed-care framing', why: 'Coordinated medical involvement is part of BED care', keys: ['team-based'], mistake: 'Refusing helpful coordination' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Renee?', ['R2'], [
      O('a', 'Eating-disorder-focused cognitive behavioral therapy, within a team that includes medical involvement as needed', 3,
        { r: 'CBT-ED within a coordinated team', approach: 'Apply the guideline', why: 'NICE supports eating-disorder-focused CBT for binge-eating disorder', keys: ['weekly binges', 'wants to interrupt them'], mistake: 'Defaulting to a weight-loss diet as the treatment' }),
      O('b', 'A structured, restrictive weight-loss diet as the primary treatment to reduce her eating and her body weight', -2,
        { r: 'Restrictive dieting fuels binges', approach: 'Diet-first framing', why: 'Dietary restraint tends to trigger more binges', keys: ['restraint drives binges'], mistake: 'Treating BED with a restrictive diet' }),
      O('c', 'Open-ended supportive counseling that mainly gives her space to talk about how guilty she feels after she binges', -1,
        { r: 'Unstructured support underperforms CBT-ED', approach: 'Supportive-only framing', why: 'It lacks the active CBT-ED mechanism', keys: ['needs CBT-ED'], mistake: 'Defaulting to nondirective support' }),
      O('d', 'A primarily insight-oriented exploration of her childhood as the central route to resolving her binge-eating behavior', 0,
        { r: 'Insight-only is not first-line here', approach: 'Depth-only framing', why: 'Eating-disorder-focused CBT is indicated', keys: ['symptom-focused need'], mistake: 'Prioritizing origins over CBT-ED' }),
    ]),
    Q('q7', 'treatment', 'A central target in eating-disorder-focused CBT for her would be:', ['R2'], [
      O('a', 'Establishing regular eating and reducing the dietary restraint and triggers that drive the binge episodes', 3,
        { r: 'Regular eating to interrupt the binge cycle', approach: 'Target the binge mechanism', why: 'Regular eating and reduced restraint break the binge cycle', keys: ['eats past fullness', 'wants to interrupt binges'], mistake: 'Adding restriction that fuels binges' }),
      O('b', 'Helping her design a stricter daily diet with tighter food rules so that she feels more in control of her eating', -2,
        { r: 'More restriction fuels binges', approach: 'Restriction framing', why: 'Increased restraint tends to trigger more binges', keys: ['restraint drives binges'], mistake: 'Reinforcing the restraint that drives binges' }),
      O('c', 'Encouraging her to skip meals during the day so that she is able to save up her calories for later in the evening', -2,
        { r: 'Meal-skipping drives binges', approach: 'Skip-meals framing', why: 'Restriction and hunger increase binge risk', keys: ['dietary restraint'], mistake: 'Promoting restriction that triggers binges' }),
      O('d', 'Focusing mainly on relaxation skills so she feels calmer without addressing her eating patterns or beliefs', -1,
        { r: 'Relaxation alone misses the core', approach: 'Arousal-only framing', why: 'It does not address the binge mechanism', keys: ['core pattern untreated'], mistake: 'Treating arousal while ignoring eating' }),
    ]),
    Q('q8', 'treatment', 'Renee asks whether medication could help. The most appropriate counselor action is to:', ['R5'], [
      O('a', 'Provide general information and coordinate a referral to a prescriber for evaluation with her consent, within scope', 3,
        { r: 'Refer and coordinate within scope', approach: 'Coordinate care', why: 'Counselors refer for medication rather than prescribe', keys: ['asks about medication'], mistake: 'Giving specific medication advice' }),
      O('b', 'Recommend the specific medication and dose that tends to work best for people with binge-eating disorder like hers', -2,
        { r: 'Naming a drug and dose exceeds scope', approach: 'Prescriptive advice', why: 'Medication selection is outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping professional limits' }),
      O('c', 'Recommend an over-the-counter appetite suppressant so that she can reduce how much she eats during her binge episodes', -2,
        { r: 'Recommending a suppressant is inappropriate and out of scope', approach: 'Suppressant framing', why: 'It is outside scope and not the indicated treatment', keys: ['scope and safety'], mistake: 'Advising an unsafe, out-of-scope product' }),
      O('d', 'Discourage any medication and tell her she should overcome the binge eating through willpower and discipline alone', -1,
        { r: 'Willpower framing is inaccurate', approach: 'Willpower framing', why: 'It dismisses evidence-based options and the decision belongs with a prescriber', keys: ['client autonomy'], mistake: 'Moralizing about a clinical disorder' }),
    ]),
    Q('q9', 'counseling', 'Renee is deeply ashamed and eats alone to hide her binges. The most therapeutic response is to:', ['R6'], [
      O('a', 'Respond with a nonjudgmental, validating stance that reduces shame and supports her engaging openly in treatment', 3,
        { r: 'Reduce shame with a nonjudgmental stance', approach: 'Validate and destigmatize', why: 'Reducing shame supports disclosure and engagement', keys: ['eats alone out of shame', 'fears being told to diet'], mistake: 'Responding with judgment or diet advice that deepens shame' }),
      O('b', 'Tell her plainly that she simply needs more self-control and that the solution is to eat less and exercise more', -2,
        { r: 'Moralizing deepens shame', approach: 'Willpower framing', why: 'It shames her and is not the indicated treatment', keys: ['shame spiral'], mistake: 'Reducing the disorder to willpower' }),
      O('c', 'Reassure her quickly that the binge eating is not really a big deal and that she should simply stop doing it on her own', -1,
        { r: 'Minimizing the disorder is inaccurate', approach: 'Minimize framing', why: 'BED is a treatable disorder, not a trivial habit', keys: ['clinical seriousness'], mistake: 'Downplaying a treatable condition' }),
      O('d', 'Provide detailed statistics on how common binge eating is to logically prove to her that she should not feel ashamed', -1,
        { r: 'Facts alone rarely shift shame', approach: 'Statistical persuasion', why: 'A validating stance works better than data here', keys: ['emotional reasoning'], mistake: 'Answering shame with numbers' }),
    ]),
    Q('q10', 'counseling', 'Renee fears the counselor will just put her on a diet. The most therapeutic response is to:', ['R6'], [
      O('a', 'Clarify that the focus is on interrupting the binge cycle and the distress, not on prescribing another restrictive diet', 3,
        { r: 'Reframe the aim away from dieting', approach: 'Reframe the treatment focus', why: 'Clarifying the non-diet, binge-focused aim builds trust and fits the evidence', keys: ['fears being told to diet', 'wants to understand the binges'], mistake: 'Confirming her fear by centering the plan on dieting' }),
      O('b', 'Reassure her that the very first step will be to put her on a strict calorie-controlled diet to get her eating under control', -2,
        { r: 'Centering a diet drives binges and her fear', approach: 'Diet-first framing', why: 'Restriction tends to worsen binges and undermines trust', keys: ['restraint drives binges'], mistake: 'Confirming the feared, counterproductive approach' }),
      O('c', 'Tell her that her weight is the real problem and that everything in treatment should be aimed at reducing it as fast as possible', -2,
        { r: 'Weight-centric framing increases shame', approach: 'Weight-focus framing', why: 'It deepens stigma and is not the indicated focus', keys: ['weight stigma'], mistake: 'Centering the work on weight loss' }),
      O('d', 'Avoid answering her concern and steer the conversation toward reviewing her eating log for the week instead', -1,
        { r: 'Bypassing the concern harms engagement', approach: 'Topic-avoidance framing', why: 'Her fear about the approach is central to engagement', keys: ['unaddressed concern'], mistake: 'Avoiding a key alliance issue' }),
    ]),
    Q('q11', 'ethics', 'Renee, distressed, mentions she sometimes feels life is not worth living because of her eating and her weight. Best step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment and respond to the risk, recognizing eating disorders can carry elevated risk', 3,
        { r: 'Assess risk directly', approach: 'Screen risk with structure', why: 'Eating disorders can elevate suicide risk warranting structured screening', keys: ['life not worth living', 'distress about eating'], mistake: 'Overlooking risk amid the eating focus' }),
      O('b', 'Reassure her that things will improve with treatment and that there is no real need to discuss those thoughts further', -2,
        { r: 'Minimizing the ideation is unsafe', approach: 'Minimize framing', why: 'It forecloses needed risk assessment', keys: ['unassessed ideation'], mistake: 'Dismissing the ideation' }),
      O('c', 'Continue with the planned CBT agenda, assuming the comment was just a passing expression of her frustration today', -1,
        { r: 'Risk must be assessed before continuing', approach: 'Agenda-first framing', why: 'Safety assessment takes priority over the planned agenda', keys: ['active disclosure'], mistake: 'Proceeding past a risk disclosure' }),
      O('d', 'Ask her to sign a brief promise to stay safe and to reach out to you if those thoughts get any worse this week', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk or assess it', keys: ['needs assessment'], mistake: 'Substituting a contract for assessment' }),
    ]),
    Q('q12', 'ethics', 'How should the counselor coordinate with Renee’s primary care provider about her care?', ['R5'], [
      O('a', 'Obtain her informed consent and release before communicating with the provider, then collaborate on a shared plan', 3,
        { r: 'Consent and release before coordinating', approach: 'Secure consent first', why: 'Coordination requires a valid release of information', keys: ['cross-provider coordination', 'protected information'], mistake: 'Contacting the provider before obtaining consent' }),
      O('b', 'Contact the provider right away to align the plan, since coordinating her care is clearly in her own best interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Avoid any contact with the provider so that her counseling remains entirely separate from her medical care', -1,
        { r: 'No coordination undercuts collaborative care', approach: 'Siloed-care framing', why: 'Consented coordination benefits BED care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Share her full counseling record with the provider so that they have complete information about all of her treatment', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure should be consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
    Q('q13', 'ethics', 'Renee asks the counselor to keep her eating disorder out of any records her insurer might see. Best response?', ['R5'], [
      O('a', 'Explain that accurate clinical documentation is required and discuss how records are protected and who may access them', 3,
        { r: 'Keep honest records; explain protections', approach: 'Maintain accurate documentation', why: 'Ethical practice requires accurate records, with privacy protections explained', keys: ['wants the diagnosis hidden'], mistake: 'Falsifying or omitting clinical information' }),
      O('b', 'Agree to leave the diagnosis out of the record entirely so that she feels more comfortable continuing in treatment with you', -2,
        { r: 'Omitting the diagnosis falsifies the record', approach: 'Omit-to-comfort framing', why: 'A deliberately incomplete record is improper', keys: ['record integrity'], mistake: 'Falsifying records to reassure' }),
      O('c', 'Tell her she has no say at all in what goes into her record and move on without addressing her privacy concern further', -1,
        { r: 'Dismissing her concern harms rapport', approach: 'Authoritarian framing', why: 'Her concern deserves a respectful explanation', keys: ['client dignity'], mistake: 'Ignoring the client’s concern' }),
      O('d', 'Offer to keep a private, separate set of unofficial notes about her eating disorder outside of her formal clinical record', -2,
        { r: 'Shadow records are improper', approach: 'Off-the-record-notes framing', why: 'Parallel secret records violate documentation standards', keys: ['single accurate record'], mistake: 'Keeping hidden duplicate notes' }),
    ]),
  ],
};

// ============================================================================
// D149 — Avoidant Personality Disorder (F60.6) — Personality — hard
// ============================================================================
const D149 = {
  id: 'ncmhce-D149',
  title: 'Lifelong social inhibition and a deep sense of inadequacy',
  category: 'Personality',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Avoidant Personality Disorder', code: 'F60.6' },
  diagnosis: { name: 'Avoidant Personality Disorder', code: 'F60.6' },
  differentialOptions: [
    { id: 'do1', name: 'Avoidant Personality Disorder', isCorrect: true },
    { id: 'do2', name: 'Social Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Schizoid Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Dependent Personality Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Owen Tran, a 31-year-old data analyst, presents with a lifelong pattern of social inhibition, deep feelings of inadequacy, and intense ' +
      'sensitivity to criticism. Since early adulthood he has avoided jobs and activities involving much interpersonal contact for fear of being shamed.',
    session1:
      'He longs for closeness but holds back in relationships unless he is certain of being liked, sees himself as inept and inferior, and is ' +
      'preoccupied with being criticized or rejected. The pattern is pervasive across work and relationships rather than limited to a few situations.',
    session2:
      'He reports low mood related to his isolation and loneliness, denies a lack of desire for relationships, and has had passing thoughts ' +
      'that life feels pointless, without plan or intent. He is motivated to change but fears the counselor, too, will eventually judge him.',
  },
  diagnosticRationale:
    'A pervasive pattern beginning by early adulthood of social inhibition, feelings of inadequacy, and hypersensitivity to negative ' +
    'evaluation—avoiding interpersonal occupational activities, restraint in relationships for fear of shame, and viewing oneself as inept—' +
    'meets DSM-5-TR criteria for avoidant personality disorder, distinct from social anxiety disorder, schizoid personality disorder, and dependent personality disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Avoidant personality disorder: pervasive social inhibition, inadequacy, and hypersensitivity to evaluation by early adulthood' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Approach selection, the working alliance, and graded interpersonal work' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when depressive symptoms co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, scope of practice, and coordination of care' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Clinical decision-making and measurement-based care across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to support an avoidant personality disorder diagnosis?', ['R1'], [
      O('a', 'A pervasive pattern since early adulthood of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation', 3,
        { r: 'Pervasive, early-adulthood trait pattern', approach: 'Confirm the trait pattern', why: 'AvPD requires a pervasive, enduring pattern beginning by early adulthood', keys: ['lifelong inhibition', 'sees himself as inept'], mistake: 'Diagnosing from a single situational reaction' }),
      O('b', 'That he can identify the single event he believes first caused him to start avoiding social and work situations', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['pattern-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his avoidance has become noticeably worse over the past few days compared with how it was the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A pervasive, enduring pattern is required', keys: ['enduring pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define AvPD', approach: 'Mood-criteria framing', why: 'AvPD is a personality pattern, not a mood episode', keys: ['personality pattern'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from social anxiety disorder?', ['R1'], [
      O('a', 'His difficulties are a pervasive, lifelong personality pattern with a core self-view of inadequacy, not a more circumscribed anxiety disorder', 3,
        { r: 'Pervasive trait pattern with inadequacy self-view', approach: 'Contrast pervasiveness and self-concept', why: 'AvPD is a pervasive pattern with an enduring sense of inadequacy beyond a circumscribed anxiety disorder', keys: ['pervasive across work and relationships', 'views self as inept'], mistake: 'Treating a pervasive personality pattern as social anxiety alone' }),
      O('b', 'The fact that he feels noticeably anxious and fears being judged or negatively evaluated in many of the everyday social and workplace situations that he routinely encounters during the course of his day', -1,
        { r: 'Fear of judgment occurs in both', approach: 'Fear framing', why: 'Fear of negative evaluation is shared; pervasiveness differs', keys: ['shared feature'], mistake: 'Using fear of judgment to differentiate' }),
      O('c', 'The avoidance of certain social and work situations that he finds especially uncomfortable and difficult to face', -1,
        { r: 'Avoidance occurs in both', approach: 'Avoidance framing', why: 'Avoidance is shared; pervasiveness differs', keys: ['shared avoidance'], mistake: 'Using avoidance alone to differentiate' }),
      O('d', 'The way his anxiety tends to be a bit worse during the busiest and most demanding weeks at his job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from schizoid personality disorder?', ['R1'], [
      O('a', 'He longs for closeness but avoids it for fear of rejection, rather than lacking the desire for relationships seen in schizoid PD', 3,
        { r: 'Desires closeness but fears rejection', approach: 'Contrast the wish for connection', why: 'Schizoid PD involves little desire for relationships; AvPD involves wanting closeness but fearing rejection', keys: ['longs for closeness but holds back'], mistake: 'Confusing fearful avoidance with a lack of desire' }),
      O('b', 'The fact that he tends to keep to himself and spends much of his time alone rather than with other people', -1,
        { r: 'Social isolation occurs in both', approach: 'Isolation framing', why: 'Both can appear socially isolated; the underlying desire differs', keys: ['shared feature'], mistake: 'Using isolation to differentiate' }),
      O('c', 'The discomfort that he experiences when he is around other people in social and work settings during the day', -1,
        { r: 'Discomfort is nonspecific', approach: 'Discomfort framing', why: 'It is nonspecific between them', keys: ['shared discomfort'], mistake: 'Reading discomfort as decisive' }),
      O('d', 'The way his difficulties tend to be a bit worse during the most stressful and demanding periods of his life', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'Given his passing thoughts that life feels pointless, the most appropriate step is to:', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment, since his depressive symptoms and isolation can elevate risk', 3,
        { r: 'Assess risk with structure', approach: 'Screen risk directly', why: 'Co-occurring depression and isolation warrant structured risk screening', keys: ['life feels pointless', 'isolation and loneliness'], mistake: 'Overlooking risk amid the personality focus' }),
      O('b', 'Treat the comment as an understandable reaction to loneliness that does not require any structured assessment of risk', -2,
        { r: 'Minimizing the ideation is unsafe', approach: 'Minimize framing', why: 'It forecloses needed risk assessment', keys: ['unassessed ideation'], mistake: 'Dismissing the ideation' }),
      O('c', 'Move ahead with exploring his personality patterns first, assuming the thoughts will fade as he becomes less isolated', -1,
        { r: 'Risk must be assessed before this', approach: 'Treatment-first framing', why: 'Safety assessment precedes pattern work', keys: ['active disclosure'], mistake: 'Sequencing exploration ahead of safety' }),
      O('d', 'Ask him to sign a brief written promise to stay safe and reach out if the thoughts get worse over the coming week', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk or assess it', keys: ['needs safety planning'], mistake: 'Substituting a contract for assessment' }),
    ]),
    Q('q5', 'intake', 'What co-occurring condition is most important to screen for given his history?', ['R1'], [
      O('a', 'A co-occurring depressive disorder, which commonly accompanies avoidant personality disorder and shapes the plan', 3,
        { r: 'Screen for co-occurring depression', approach: 'Assess comorbidity', why: 'Depression frequently co-occurs with AvPD and influences treatment', keys: ['low mood from isolation'], mistake: 'Assessing the personality pattern in isolation' }),
      O('b', 'A previously undetected primary psychotic disorder that might account for his social withdrawal and his sense of inadequacy', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be contributing to both his low mood and his social avoidance over the years', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported comorbidity' }),
      O('d', 'An emerging neurocognitive decline that could explain why he has become so withdrawn and self-critical lately', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'The lifelong pattern fits AvPD, not decline', keys: ['lifelong pattern'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment recommendation for him?', ['R2'], [
      O('a', 'Longer-term psychotherapy building interpersonal skills and addressing inadequacy beliefs, with graded social and occupational steps', 3,
        { r: 'Skills, beliefs, and graded interpersonal work', approach: 'Match approach to the pattern', why: 'AvPD treatment builds skills, addresses inadequacy beliefs, and uses graded exposure over time', keys: ['avoids interpersonal work', 'sees self as inept'], mistake: 'Expecting a rapid fix or offering support without structure' }),
      O('b', 'A brief, time-limited intervention aimed at quickly and permanently changing his core personality structure within a few sessions', -1,
        { r: 'Brief work cannot remake the structure', approach: 'Quick-fix framing', why: 'Personality change is gradual, not brief', keys: ['enduring pattern'], mistake: 'Setting an unrealistic, rapid goal' }),
      O('c', 'Encouraging him to keep avoiding the social and work situations that frighten him until he naturally feels ready for them', -2,
        { r: 'Sanctioning avoidance maintains the pattern', approach: 'Accommodate-avoidance framing', why: 'Avoidance maintains the inadequacy beliefs and the pattern', keys: ['avoidance maintains the pattern'], mistake: 'Reinforcing avoidance as coping' }),
      O('d', 'A primarily insight-only exploration of his childhood with no skills work or graded steps toward interpersonal engagement', 0,
        { r: 'Insight-only is not the indicated focus', approach: 'Depth-only framing', why: 'Skills and graded interpersonal work are central', keys: ['skills deficit'], mistake: 'Prioritizing insight over skills and exposure' }),
    ]),
    Q('q7', 'treatment', 'A central, appropriate treatment target for him would be:', ['R2'], [
      O('a', 'His core belief that he is inept and inferior, addressed alongside graded steps into feared social and occupational situations', 3,
        { r: 'Target inadequacy beliefs plus graded exposure', approach: 'Address the maintaining belief and avoidance', why: 'Inadequacy beliefs and avoidance maintain AvPD and are the change targets', keys: ['views self as inept', 'avoids interpersonal activities'], mistake: 'Treating surface anxiety while leaving the core belief and avoidance untouched' }),
      O('b', 'Helping him arrange his life so that he can avoid nearly all interpersonal contact and thereby avoid feeling any distress', -2,
        { r: 'Engineering avoidance entrenches the pattern', approach: 'Avoidance-engineering framing', why: 'It reinforces the avoidance that maintains AvPD', keys: ['avoidance maintains the pattern'], mistake: 'Building his life around avoidance' }),
      O('c', 'Encouraging him to wait until he feels fully confident before he attempts any feared social or occupational situations at all', -1,
        { r: 'Waiting on confidence reverses the logic', approach: 'Confidence-first framing', why: 'Graded approach builds, rather than waits for, confidence', keys: ['avoidance persists'], mistake: 'Letting felt confidence gate the work' }),
      O('d', 'Focusing mainly on relaxation skills so he feels calmer without addressing his beliefs or his avoidance', -1,
        { r: 'Relaxation alone misses the core', approach: 'Arousal-only framing', why: 'It does not address the maintaining belief or avoidance', keys: ['core belief untreated'], mistake: 'Treating arousal while ignoring the pattern' }),
    ]),
    Q('q8', 'treatment', 'How should graded interpersonal exposure be structured for him?', ['R2'], [
      O('a', 'Build a collaborative hierarchy of feared social and occupational situations and work up it at a tolerable pace', 3,
        { r: 'Graded hierarchy at a tolerable pace', approach: 'Structure graded exposure', why: 'A collaborative, graded hierarchy supports sustained interpersonal exposure', keys: ['fears shame and rejection'], mistake: 'Pushing him into the most feared situation at once' }),
      O('b', 'Have him take on the most intimidating social situation he can think of right away so that he confronts the worst of it at once', -1,
        { r: 'Flooding past tolerance can backfire', approach: 'Flooding framing', why: 'Exposure should be graded, not abrupt and maximal', keys: ['outside tolerance'], mistake: 'Skipping the graded hierarchy' }),
      O('c', 'Wait until he feels no fear at all before he attempts even the least challenging situation on his hierarchy', -2,
        { r: 'Waiting for zero fear reverses the logic', approach: 'Fear-free-first framing', why: 'Exposure proceeds with manageable anxiety, not its absence', keys: ['avoidance persists'], mistake: 'Letting fear gate the work' }),
      O('d', 'Keep all of the work to talking about feared situations in session without any real-world practice between appointments', -1,
        { r: 'In-session talk alone underperforms', approach: 'Talk-only framing', why: 'Real-world graded practice is central for AvPD', keys: ['real-world avoidance'], mistake: 'Omitting between-session practice' }),
    ]),
    Q('q9', 'treatment', 'Owen reports low mood and asks whether medication might help. The most appropriate counselor action is to:', ['R4'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation of his depressive symptoms, with his consent, while continuing therapy', 3,
        { r: 'Refer and coordinate within scope', approach: 'Coordinate care', why: 'Counselors refer for medication rather than prescribe', keys: ['co-occurring low mood'], mistake: 'Giving specific medication advice' }),
      O('b', 'Recommend the specific antidepressant and dose that tends to work best for people with his particular personality profile', -2,
        { r: 'Naming a drug and dose exceeds scope', approach: 'Prescriptive advice', why: 'Medication selection is outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping professional limits' }),
      O('c', 'Tell him medication will not help someone with his personality and that he simply needs to push himself to socialize more', -1,
        { r: 'Dismissing the option oversteps', approach: 'Dismiss-medication framing', why: 'His depressive symptoms warrant proper evaluation', keys: ['comorbid depression'], mistake: 'Writing off a treatable comorbidity' }),
      O('d', 'Tell him medication is entirely outside the counseling role and decline to discuss the topic with him any further', -1,
        { r: 'Refusing to engage abandons the question', approach: 'Flat refusal', why: 'Discussing options and coordinating referral is appropriate', keys: ['care coordination'], mistake: 'Declining to engage a relevant question' }),
    ]),
    Q('q10', 'counseling', 'Owen says he fears the counselor will eventually judge him as inept. The most therapeutic response is to:', ['R2'], [
      O('a', 'Acknowledge the fear, provide a consistent and accepting stance, and use the relationship itself as a place to test the belief', 3,
        { r: 'Acceptance and using the alliance to test the belief', approach: 'Build a corrective relationship', why: 'A consistent, accepting alliance lets him test the inadequacy belief in vivo', keys: ['fears the counselor will judge him', 'hypersensitive to rejection'], mistake: 'Dismissing the fear or reacting in a way that confirms it' }),
      O('b', 'Reassure him once that you will never judge him and then move on, treating the fear as fully resolved going forward', -1,
        { r: 'A single reassurance does not address the pattern', approach: 'One-and-done framing', why: 'The belief is worked with over time, not resolved by one reassurance', keys: ['enduring belief'], mistake: 'Treating the core fear as settled by a single statement' }),
      O('c', 'Point out that his fear is irrational and present logical evidence that you have given him no reason to expect judgment', -1,
        { r: 'Premature disputation can feel invalidating', approach: 'Confront framing', why: 'It can rupture a fragile alliance early', keys: ['hypersensitive to evaluation'], mistake: 'Disputing the fear before building trust' }),
      O('d', 'Avoid the topic of the therapeutic relationship entirely so that the sessions never touch on anything uncomfortable for him', -1,
        { r: 'Avoiding the relationship misses a key target', approach: 'Avoidant framing', why: 'The transference fear is central and workable material', keys: ['avoided material'], mistake: 'Sidestepping the alliance itself' }),
    ]),
    Q('q11', 'counseling', 'How should the counselor build the alliance given his hypersensitivity to criticism?', ['R2'], [
      O('a', 'Proceed at a pace he can tolerate with consistent acceptance and careful, nonjudgmental feedback that does not feel like rejection', 3,
        { r: 'Paced, accepting, nonjudgmental engagement', approach: 'Protect the fragile alliance', why: 'A paced, accepting stance fits his sensitivity to evaluation', keys: ['intense sensitivity to criticism'], mistake: 'Moving too fast or giving feedback that feels like rejection' }),
      O('b', 'Push him hard and challenge his avoidance bluntly from the outset so that he understands he must change quickly', -1,
        { r: 'Blunt pushing can feel like rejection', approach: 'Push-hard framing', why: 'It can rupture a fragile alliance', keys: ['hypersensitive client'], mistake: 'Moving faster than the alliance allows' }),
      O('c', 'Keep an emotionally distant, neutral stance and share no warmth so that he does not become too dependent on you', -1,
        { r: 'Cold distance impedes the alliance', approach: 'Detached framing', why: 'Warmth and acceptance are needed to engage him', keys: ['needs acceptance'], mistake: 'Withholding warmth defensively' }),
      O('d', 'Avoid giving him any feedback at all so that he never has any opportunity to feel criticized during the sessions', -1,
        { r: 'Withholding all feedback limits the work', approach: 'Feedback-avoidant framing', why: 'Careful, nonjudgmental feedback is part of the work', keys: ['growth requires feedback'], mistake: 'Eliminating feedback entirely' }),
    ]),
    Q('q12', 'ethics', 'Owen asks the counselor to keep his diagnosis out of any records his employer might be able to access. Best response?', ['R4'], [
      O('a', 'Explain how his records are protected and disclosed only with his consent or as required, while keeping documentation accurate', 3,
        { r: 'Protect records; document accurately', approach: 'Inform and protect confidentiality', why: 'Records are protected and shared only with consent or as required, and must be accurate', keys: ['fears employer access', 'privacy concern'], mistake: 'Either falsifying the record or breaching confidentiality' }),
      O('b', 'Reassure him by promising to leave the diagnosis out of his clinical record entirely so that his employer can never see it', -2,
        { r: 'Omitting the diagnosis falsifies the record', approach: 'Omit-to-reassure framing', why: 'A deliberately incomplete record is improper', keys: ['record integrity'], mistake: 'Falsifying records to reassure' }),
      O('c', 'Tell him his concern is unfounded and that no employer would ever be able to access his counseling records under any circumstances', -1,
        { r: 'A blanket assurance is inaccurate', approach: 'False-assurance framing', why: 'His concern deserves an accurate explanation of protections and limits', keys: ['client dignity'], mistake: 'Giving an inaccurate blanket assurance' }),
      O('d', 'Offer to keep a private, separate set of unofficial notes about his diagnosis outside of his formal clinical record', -2,
        { r: 'Shadow records are improper', approach: 'Off-the-record-notes framing', why: 'Parallel secret records violate documentation standards', keys: ['single accurate record'], mistake: 'Keeping hidden duplicate notes' }),
    ]),
    Q('q13', 'ethics', 'Owen, sensitive to rejection, becomes upset and says he wants to quit treatment after a single difficult session. Best response?', ['R2'], [
      O('a', 'Explore the rupture nonjudgmentally, validate his reaction, and use it to strengthen the alliance rather than ending abruptly', 3,
        { r: 'Repair the rupture rather than end abruptly', approach: 'Address the alliance rupture', why: 'Working through a rupture is therapeutic and fits his sensitivity to rejection', keys: ['upset after a hard session', 'hypersensitive to rejection'], mistake: 'Letting him drop out without addressing the rupture' }),
      O('b', 'Agree to end treatment right away, since respecting his wish to quit is the most important consideration here', -1,
        { r: 'Letting him flee enacts the avoidance', approach: 'Capitulate framing', why: 'It reinforces the avoidance and abandons the work', keys: ['avoidance pattern'], mistake: 'Allowing dropout without exploring it' }),
      O('c', 'Tell him that quitting now would prove that he simply cannot handle treatment and that he needs to push through it', -2,
        { r: 'Shaming language confirms his fears', approach: 'Shame framing', why: 'It enacts the rejection he fears and damages the alliance', keys: ['hypersensitive to criticism'], mistake: 'Using shame to keep him in treatment' }),
      O('d', 'Avoid discussing his wish to quit and simply proceed with the planned agenda as though nothing has happened at all', -1,
        { r: 'Ignoring the rupture misses a key moment', approach: 'Avoidant framing', why: 'The rupture is central and workable material', keys: ['unaddressed rupture'], mistake: 'Proceeding as if the rupture had not occurred' }),
    ]),
  ],
};

module.exports = { CASES: [D145, D146, D147, D148, D149] };
