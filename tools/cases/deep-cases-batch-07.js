// ============================================================================
// deep-cases-batch-07.js — NCMHCE deep cases, batch 07 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). On the
// reserved id block ncmhce-D135+, filling previously untouched gaps:
//   ncmhce-D135  Major Neurocognitive Disorder due to Alzheimer’s Disease (Neurocognitive)
//   ncmhce-D136  Insomnia Disorder, Chronic (Sleep)
//   ncmhce-D137  Gender Dysphoria in Adolescents/Adults (Sexual-Gender)
//   ncmhce-D138  Bipolar II Disorder (Bipolar)
//   ncmhce-D139  Bulimia Nervosa (Eating)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-07.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-07');console.log(validateExamDepthSet(CASES))"
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
// D135 — Major Neurocognitive Disorder due to Alzheimer’s Disease (F02.80)
//        — Neurocognitive — hard
// ============================================================================
const D135 = {
  id: 'ncmhce-D135',
  title: 'Progressive memory loss and lost independence in an older adult',
  category: 'Neurocognitive',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Major Neurocognitive Disorder due to Alzheimer’s Disease', code: 'F02.80' },
  diagnosis: { name: 'Major Neurocognitive Disorder due to Alzheimer’s Disease', code: 'F02.80' },
  differentialOptions: [
    { id: 'do1', name: 'Major Neurocognitive Disorder due to Alzheimer’s Disease', isCorrect: true },
    { id: 'do2', name: 'Delirium', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do4', name: 'Mild Neurocognitive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Margaret Cole, a 78-year-old retired librarian, is brought by her daughter for two years of gradually worsening memory loss. ' +
      'She repeats questions, gets lost on familiar routes, has trouble managing her finances, and increasingly needs help with daily tasks.',
    session1:
      'Her daughter reports a slow, steady decline rather than a sudden change, with clear attention most of the time and no fluctuating ' +
      'confusion. Margaret is aware that something is wrong and is frustrated and at times tearful about losing her independence.',
    session2:
      'A recent medical workup is underway, and there is no evidence of an acute illness, fever, or new medication causing the change. ' +
      'The daughter worries about safety with driving, the stove, and medications, and feels exhausted and unsure how to help her mother.',
  },
  diagnosticRationale:
    'A significant, insidious, and progressive decline from a prior level in memory and at least one other cognitive domain that interferes ' +
    'with independence in everyday activities, occurring with clear consciousness and not better explained by delirium or another disorder, ' +
    'is consistent with major neurocognitive disorder due to Alzheimer’s disease, distinct from delirium, a depressive disorder, or mild NCD.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Major NCD: significant cognitive decline interfering with independence; Alzheimer’s features insidious, progressive course' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Cognitive screening (e.g., MoCA/MMSE), collateral history, and coordinating medical evaluation' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when distress or depression is present' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., A.2., and B.5.: welfare, informed consent, capacity, and surrogate decision-making' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Clinical decision-making and coordinated, measurement-based care across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a major neurocognitive disorder diagnosis?', ['R1'], [
      O('a', 'A significant decline from her prior level in two or more cognitive domains that interferes with her everyday independence', 3,
        { r: 'Significant decline interfering with independence', approach: 'Confirm the core criteria', why: 'Major NCD requires significant decline interfering with independent function', keys: ['lost on familiar routes', 'needs help with daily tasks'], mistake: 'Diagnosing major NCD from minor forgetfulness' }),
      O('b', 'That she can identify the single stressful event she believes first triggered the memory problems she has been having', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['insidious decline'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her memory has worsened over the past day or two more sharply than it did earlier in the same week', -1,
        { r: 'A sudden change suggests delirium', approach: 'Acute-change framing', why: 'A sharp daily change points toward delirium, not Alzheimer’s NCD', keys: ['gradual decline'], mistake: 'Confusing an acute change with progressive NCD' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define NCD', approach: 'Mood-criteria framing', why: 'Major NCD is defined by cognitive decline, not mood criteria', keys: ['cognitive decline'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes her presentation from delirium?', ['R1'], [
      O('a', 'Her decline is gradual with clear attention, rather than an acute, fluctuating disturbance of attention and awareness', 3,
        { r: 'Gradual, clear attention versus acute fluctuation', approach: 'Contrast course and attention', why: 'Delirium is acute and fluctuating with impaired attention; Alzheimer’s NCD is gradual', keys: ['slow steady decline', 'clear attention most of the time'], mistake: 'Confusing progressive NCD with delirium' }),
      O('b', 'The fact that she has clear trouble with her memory and forgets recent conversations and information across most days now', -1,
        { r: 'Memory problems occur in both', approach: 'Memory framing', why: 'Memory impairment is shared; course and attention differ', keys: ['shared symptom'], mistake: 'Using memory problems to differentiate' }),
      O('c', 'The way she becomes more confused and disoriented during the busiest and most overstimulating times for the family at home', -1,
        { r: 'Stress-linked confusion is nonspecific', approach: 'Stress framing', why: 'Situational confusion does not separate the two', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
      O('d', 'The fact that she is older and has several chronic medical conditions that are common among adults of her particular age', 0,
        { r: 'Age alone is not the differentiator', approach: 'Demographic framing', why: 'Age does not separate delirium from NCD', keys: ['nonspecific factor'], mistake: 'Reading age as diagnostic' }),
    ]),
    Q('q3', 'core', 'How should the counselor weigh a possible depressive contribution to her cognitive problems?', ['R1'], [
      O('a', 'Screen for depression, since depression can impair cognition and may coexist with or mimic a neurocognitive disorder', 3,
        { r: 'Screen depression as a contributor or mimic', approach: 'Assess depression alongside cognition', why: 'Depression can impair cognition (pseudodementia) and coexist with NCD', keys: ['frustrated and tearful', 'aware of decline'], mistake: 'Ignoring a treatable depressive contribution' }),
      O('b', 'Assume her sadness is simply a normal and expected reaction to aging that has no bearing on her thinking or memory at all', -1,
        { r: 'Dismissing depression misses a contributor', approach: 'Normalize-away framing', why: 'Depression can meaningfully affect cognition', keys: ['mood symptoms present'], mistake: 'Overlooking a treatable contribution' }),
      O('c', 'Conclude that because she is sad her cognitive decline must be entirely due to depression and not to any neurocognitive disorder', -1,
        { r: 'Over-attributing to depression is premature', approach: 'Single-cause framing', why: 'The progressive course also points to NCD; both can be present', keys: ['progressive decline'], mistake: 'Forcing one explanation prematurely' }),
      O('d', 'Whether her sadness is clearly more intense today than it was earlier in this same week of assessment sessions', 0,
        { r: 'A mood trend is not the question', approach: 'Severity-trend framing', why: 'The issue is whether depression contributes, not a recent trend', keys: ['assessment focus'], mistake: 'Reframing the question as a mood trend' }),
    ]),
    Q('q4', 'intake', 'What is the most appropriate counselor action regarding the diagnostic workup?', ['R2'], [
      O('a', 'Use cognitive screening and collateral history and coordinate a medical and neurological evaluation rather than diagnosing alone', 3,
        { r: 'Screen and coordinate the medical workup', approach: 'Coordinate within scope', why: 'Determining the medical cause of NCD requires medical evaluation the counselor coordinates', keys: ['medical workup underway'], mistake: 'Diagnosing the medical etiology without a medical evaluation' }),
      O('b', 'Order brain imaging and laboratory tests yourself so that you can personally confirm the Alzheimer’s diagnosis before treatment', -2,
        { r: 'Ordering tests exceeds counselor scope', approach: 'Order tests framing', why: 'Counselors coordinate but do not order these tests', keys: ['scope limit'], mistake: 'Acting outside scope of practice' }),
      O('c', 'Tell the family it is simply normal aging and that there is no real need for any further medical evaluation at this point', -2,
        { r: 'Dismissing the decline is unsafe', approach: 'Normalize-away framing', why: 'Significant decline warrants medical evaluation', keys: ['functional decline'], mistake: 'Mistaking major NCD for normal aging' }),
      O('d', 'Base the diagnosis only on how Margaret presents during the session, without collateral history or any medical evaluation', -1,
        { r: 'One observation is insufficient', approach: 'Single-snapshot framing', why: 'Collateral and medical data are needed', keys: ['needs collateral'], mistake: 'Diagnosing from one in-session sample' }),
    ]),
    Q('q5', 'intake', 'Given the daughter’s concerns, what safety assessment is most important?', ['R4'], [
      O('a', 'Assess safety risks such as driving, the stove, wandering, and medication management given her decline and impaired judgment', 3,
        { r: 'Assess functional safety risks', approach: 'Screen everyday safety', why: 'Major NCD raises safety risks that must be assessed and managed', keys: ['gets lost', 'concerns about driving and the stove'], mistake: 'Overlooking everyday safety risks' }),
      O('b', 'Focus only on whether she currently has a specific plan to harm herself and disregard the broader safety concerns for now', -1,
        { r: 'Narrow focus misses key NCD risks', approach: 'Plan-only framing', why: 'NCD safety extends beyond suicide-plan questions', keys: ['functional risks'], mistake: 'Assessing only one channel of risk' }),
      O('c', 'Defer any safety assessment until the medical workup is fully complete, even though the daughter is worried about it now', -1,
        { r: 'Deferring safety review is unsafe', approach: 'Delay framing', why: 'Functional safety can be assessed now', keys: ['active concern'], mistake: 'Postponing a needed safety assessment' }),
      O('d', 'Rely on Margaret’s own assurance that she is managing fine, since she knows her own daily routine better than anyone else', -2,
        { r: 'Impaired insight makes self-report insufficient', approach: 'Defer to her reassurance', why: 'Cognitive impairment limits the reliability of self-report here', keys: ['impaired judgment'], mistake: 'Accepting reassurance without assessment' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment-planning priority for Margaret and her family?', ['R5'], [
      O('a', 'Coordinate medical care and build a plan of caregiver support, safety measures, and structured non-pharmacologic approaches', 3,
        { r: 'Coordinated care plus caregiver and safety support', approach: 'Build a coordinated supportive plan', why: 'NCD care centers on coordination, caregiver support, safety, and structure', keys: ['exhausted caregiver', 'safety concerns'], mistake: 'Offering individual insight therapy alone as the plan' }),
      O('b', 'Begin intensive insight-oriented psychotherapy to help her recover the specific memories that she has been losing over time', -2,
        { r: 'Insight therapy cannot reverse NCD', approach: 'Memory-recovery framing', why: 'Lost function in progressive NCD is not restored by insight work', keys: ['progressive decline'], mistake: 'Setting an unrealistic restorative goal' }),
      O('c', 'Start her on a cognitive-enhancing medication yourself and monitor her response and dosing over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or monitor these medications', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Recommend that the family wait and simply monitor her decline for several more months before arranging any support at all', -1,
        { r: 'Passive waiting delays needed support', approach: 'Watchful-waiting framing', why: 'Caregiver support and safety planning are needed now', keys: ['active needs'], mistake: 'Delaying indicated support' }),
    ]),
    Q('q7', 'treatment', 'Which non-pharmacologic element is most appropriate to include in her care?', ['R5'], [
      O('a', 'Structured routines, environmental cues, and orientation supports that reduce confusion and support her remaining abilities', 3,
        { r: 'Structure, cues, and orientation supports', approach: 'Support remaining function', why: 'Routine and environmental supports reduce confusion in NCD', keys: ['repeats questions', 'gets lost'], mistake: 'Relying on effortful new learning' }),
      O('b', 'An intensive daily memory-training program designed to push her to fully restore the abilities she has been losing recently', -1,
        { r: 'Restoring lost function is unrealistic', approach: 'Restorative-training framing', why: 'Progressive NCD function is supported, not restored', keys: ['progressive decline'], mistake: 'Setting an unrealistic restorative goal' }),
      O('c', 'A recommendation that the family frequently quiz her on dates and facts to keep her mind as sharp as they possibly can', -1,
        { r: 'Quizzing can increase frustration', approach: 'Testing framing', why: 'Repeated testing can heighten distress without restoring function', keys: ['frustration'], mistake: 'Using testing as an intervention' }),
      O('d', 'A plan to frequently change her environment and routine so that she is constantly challenged and never becomes too bored', -2,
        { r: 'Constant change worsens confusion', approach: 'Novelty framing', why: 'Frequent change increases disorientation in NCD', keys: ['needs consistency'], mistake: 'Introducing destabilizing novelty' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor best support the exhausted daughter?', ['R5'], [
      O('a', 'Provide caregiver psychoeducation and connect her with respite and support resources to reduce caregiver burden', 3,
        { r: 'Caregiver education and respite support', approach: 'Address caregiver burden', why: 'Caregiver support and respite are central to NCD care', keys: ['feels exhausted', 'unsure how to help'], mistake: 'Focusing only on the client and ignoring the caregiver' }),
      O('b', 'Advise the daughter to manage every aspect of her mother’s care entirely on her own to keep things consistent for her mother', -1,
        { r: 'Sole caregiving fuels burnout', approach: 'Self-reliance framing', why: 'Unsupported caregiving worsens burden and risk', keys: ['caregiver exhaustion'], mistake: 'Discouraging needed support and respite' }),
      O('c', 'Tell the daughter that caregiver stress is not really within the focus of counseling and redirect to the client’s symptoms only', -1,
        { r: 'Dismissing caregiver needs is a missed target', approach: 'Client-only framing', why: 'Caregiver support is integral to NCD care', keys: ['caregiver burden'], mistake: 'Excluding the caregiver from the plan' }),
      O('d', 'Encourage the daughter to avoid telling her mother anything about the diagnosis so that her mother never feels any distress', -1,
        { r: 'Concealment undermines autonomy', approach: 'Concealment framing', why: 'Honest, sensitive disclosure generally respects the client’s rights', keys: ['client dignity'], mistake: 'Defaulting to concealment' }),
    ]),
    Q('q9', 'counseling', 'Margaret becomes tearful about losing her independence. The most therapeutic response is to:', ['R3'], [
      O('a', 'Validate her grief and preserve her dignity and personhood while supporting the abilities and choices she still retains', 3,
        { r: 'Validate grief; preserve dignity and choice', approach: 'Person-centered, dignity-preserving support', why: 'Supporting personhood and remaining agency is central to NCD care', keys: ['tearful about lost independence', 'aware of decline'], mistake: 'Talking past her or treating her as incapable' }),
      O('b', 'Reassure her quickly that everything is completely fine and that she has absolutely nothing at all to feel upset about today', -1,
        { r: 'Dismissive reassurance invalidates her grief', approach: 'Dismissive reassurance', why: 'It overrides a real and understandable grief', keys: ['grief dismissed'], mistake: 'Minimizing her experience' }),
      O('c', 'Speak mainly to her daughter about Margaret’s care while Margaret is present, since her daughter can answer more reliably', -2,
        { r: 'Talking past her undermines dignity', approach: 'Bypass-the-client framing', why: 'It disregards her personhood and remaining capacity', keys: ['client dignity'], mistake: 'Excluding the client from her own care conversation' }),
      O('d', 'Provide her with detailed statistics about the typical progression of Alzheimer’s disease to prepare her for what is coming', -1,
        { r: 'Heavy prognosis data is not what she needs now', approach: 'Didactic framing', why: 'Validation and support fit better than a prognosis lecture', keys: ['emotional need'], mistake: 'Answering distress with statistics' }),
    ]),
    Q('q10', 'counseling', 'As her memory worsens, how should the counselor adapt the work?', ['R5'], [
      O('a', 'Use simple, concrete communication, shorter sessions, and supportive engagement adapted to her current cognitive abilities', 3,
        { r: 'Adapt communication to her abilities', approach: 'Match the method to her cognition', why: 'Simplified, concrete, supportive engagement fits her current capacity', keys: ['memory decline', 'repeats questions'], mistake: 'Using complex, insight-heavy methods she cannot use' }),
      O('b', 'Continue using the same complex, insight-oriented techniques you would use with any cognitively unimpaired adult client', -1,
        { r: 'Unadapted insight work does not fit', approach: 'No-adaptation framing', why: 'The method must be adapted to her cognition', keys: ['cognitive impairment'], mistake: 'Failing to adapt the approach' }),
      O('c', 'Assign her detailed written homework to complete independently between sessions to keep her actively working on her own', -1,
        { r: 'Independent homework exceeds her capacity', approach: 'Independent-task framing', why: 'Complex independent tasks are not feasible here', keys: ['needs support'], mistake: 'Assigning tasks beyond her current ability' }),
      O('d', 'Reduce contact with her and work mainly through her daughter, since Margaret can no longer benefit from any direct engagement', -2,
        { r: 'Writing her off disregards personhood', approach: 'Bypass framing', why: 'She can still benefit from adapted, direct engagement', keys: ['retained personhood'], mistake: 'Prematurely excluding the client' }),
    ]),
    Q('q11', 'ethics', 'Margaret’s capacity to make some decisions is now in question. The most appropriate approach is to:', ['R4'], [
      O('a', 'Assess her capacity for specific decisions, involve her to the fullest extent possible, and engage surrogates as appropriate', 3,
        { r: 'Decision-specific capacity; involve her and surrogates', approach: 'Address capacity and surrogate roles', why: 'Capacity is decision-specific; she is involved as able with surrogates as needed', keys: ['questionable capacity', 'family involved'], mistake: 'Either ignoring capacity or removing her voice entirely' }),
      O('b', 'Assume she completely lacks capacity for all decisions and have her daughter decide everything without involving Margaret at all', -2,
        { r: 'Global incapacity assumption overreaches', approach: 'Presume incapacity', why: 'Capacity is decision-specific and she is involved as able', keys: ['client rights'], mistake: 'Stripping the client of all input' }),
      O('c', 'Assume she has full capacity for every decision and proceed exactly as usual without considering her cognitive impairment at all', -1,
        { r: 'Ignoring impairment is unsafe', approach: 'Ignore the impairment', why: 'Her cognitive decline can affect specific decisions', keys: ['cognitive impairment'], mistake: 'Overlooking capacity concerns' }),
      O('d', 'Postpone all decisions indefinitely until her capacity is perfectly clear, even though some decisions need to be made now', -1,
        { r: 'Indefinite delay is impractical and unsafe', approach: 'Defer-everything framing', why: 'Decisions can proceed with capacity assessment and supports', keys: ['timely decisions needed'], mistake: 'Stalling necessary decisions' }),
    ]),
    Q('q12', 'ethics', 'How should the counselor handle information-sharing among Margaret and her family?', ['R4'], [
      O('a', 'Clarify consent and confidentiality, respecting Margaret’s wishes and capacity while engaging family with appropriate authorization', 3,
        { r: 'Clarify consent within capacity and authorization', approach: 'Protect confidentiality and involve family appropriately', why: 'Family involvement proceeds with consent or proper surrogate authorization', keys: ['family involved', 'capacity in question'], mistake: 'Either freely sharing or excluding family without considering consent and capacity' }),
      O('b', 'Share all information freely with every family member, since family clearly needs to know everything to be able to help her', -2,
        { r: 'Free sharing ignores consent', approach: 'Over-disclosure framing', why: 'Disclosure requires consent or proper authorization', keys: ['no blanket authorization'], mistake: 'Disclosing without proper authorization' }),
      O('c', 'Refuse to involve any family at all, treating everything as fully confidential exactly as with an unimpaired, independent adult', -1,
        { r: 'Blanket exclusion is impractical here', approach: 'Absolute-confidentiality framing', why: 'Appropriate family involvement is part of NCD care', keys: ['caregiver role'], mistake: 'Refusing appropriate, authorized involvement' }),
      O('d', 'Let the daughter decide on her own what Margaret should and should not be told about her own diagnosis and her care', -1,
        { r: 'The client’s own rights still matter', approach: 'Surrogate-overreach framing', why: 'Margaret retains rights to information within her capacity', keys: ['client dignity'], mistake: 'Ceding the client’s rights to a family member' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in geriatric neurocognitive care. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and coordinate with a geriatric or medical team, or refer for the components beyond his competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; NCD care is team-based', keys: ['limited geriatric training', 'medical complexity'], mistake: 'Managing complex NCD alone without competence' }),
      O('b', 'Continue managing the entire case alone to preserve the continuity of the relationship he has built with the family', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell the family the situation is not serious enough to involve any medical or geriatric specialists and continue supportive talks', -2,
        { r: 'Minimizing the case fails the family', approach: 'Downplay the severity', why: 'Major NCD warrants coordinated medical involvement', keys: ['medical complexity'], mistake: 'Underestimating the need for specialist care' }),
      O('d', 'Transfer the family at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the family without coordination' }),
    ]),
  ],
};

// ============================================================================
// D136 — Insomnia Disorder, Chronic (F51.01) — Sleep — medium
// ============================================================================
const D136 = {
  id: 'ncmhce-D136',
  title: 'Months of broken sleep and exhausting days',
  category: 'Sleep',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Insomnia Disorder, Chronic', code: 'F51.01' },
  diagnosis: { name: 'Insomnia Disorder, Chronic', code: 'F51.01' },
  differentialOptions: [
    { id: 'do1', name: 'Insomnia Disorder, Chronic', isCorrect: true },
    { id: 'do2', name: 'Obstructive Sleep Apnea', isCorrect: false },
    { id: 'do3', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
  ],
  narrative: {
    intake:
      'Hank Whitfield, a 50-year-old accountant, presents with about five months of difficulty falling and staying asleep at least four ' +
      'nights a week despite a regular schedule and adequate time in bed. He feels exhausted, irritable, and foggy at work during the day.',
    session1:
      'He lies awake for an hour or more, watches the clock, and worries about not sleeping; he then naps and uses caffeine to get through ' +
      'the day. He denies loud snoring, witnessed pauses in breathing, or gasping awake, and his partner has not noticed these signs.',
    session2:
      'He says the sleep problem is his main concern and is not driven by pervasive daytime worry across many areas or by persistent low ' +
      'mood and anhedonia. He has begun spending long stretches in bed trying to force sleep, which seems to make the nights worse.',
  },
  diagnosticRationale:
    'Dissatisfaction with sleep quantity or quality with difficulty initiating and maintaining sleep, occurring at least three nights a week ' +
    'for more than three months despite adequate opportunity, and causing daytime impairment, meets DSM-5-TR criteria for chronic insomnia ' +
    'disorder rather than a breathing-related sleep disorder, generalized anxiety, or a depressive disorder accounting for the picture.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Insomnia disorder: difficulty with sleep 3+ nights/week for 3+ months with daytime impairment, adequate opportunity' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Insomnia: cognitive behavioral therapy for insomnia (CBT-I) as first-line treatment' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Use of a sleep diary and screening for sleep apnea and contributing factors' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, scope of practice, and coordination of care' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Measurement-based care and clinical decision-making across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a chronic insomnia disorder diagnosis?', ['R1'], [
      O('a', 'Difficulty with sleep at least three nights a week for over three months, with daytime impairment despite adequate opportunity', 3,
        { r: 'Frequency, duration, opportunity, and impairment', approach: 'Confirm the core criteria', why: 'DSM-5-TR requires the frequency, 3-month duration, adequate opportunity, and daytime impairment', keys: ['five months', 'four nights a week', 'adequate time in bed'], mistake: 'Diagnosing chronic insomnia from a brief sleepless stretch' }),
      O('b', 'That he can identify the single stressful event he believes first triggered his current difficulty with sleeping at night', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his sleep has become noticeably worse over the past two or three nights compared with how it was the week before', -1,
        { r: 'A few bad nights is not chronic insomnia', approach: 'Recent-change framing', why: 'The 3-month pattern is what matters', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he has very little opportunity to sleep because of a demanding work schedule that keeps him up late most nights', 0,
        { r: 'Inadequate opportunity argues against the diagnosis', approach: 'Opportunity framing', why: 'Insomnia disorder requires adequate sleep opportunity', keys: ['has adequate opportunity'], mistake: 'Diagnosing insomnia when opportunity is inadequate' }),
    ]),
    Q('q2', 'core', 'Which finding is most important to screen for before settling on the diagnosis?', ['R3'], [
      O('a', 'Signs of obstructive sleep apnea, such as loud snoring, witnessed breathing pauses, or gasping awake, which warrant referral', 3,
        { r: 'Screen for sleep apnea and refer if present', approach: 'Rule out a breathing-related disorder', why: 'Sleep apnea can mimic insomnia and needs medical evaluation', keys: ['denies snoring and witnessed pauses'], mistake: 'Skipping the sleep-apnea screen' }),
      O('b', 'The fact that he feels tired, irritable, and foggy during the day after his nights of poor and broken sleep at home', -1,
        { r: 'Daytime fatigue is nonspecific', approach: 'Daytime-symptom framing', why: 'Daytime impairment occurs across sleep problems', keys: ['shared symptom'], mistake: 'Using daytime fatigue to differentiate' }),
      O('c', 'Whether he tends to feel more tired on the busiest and most demanding workdays than on his quieter days at the office', -1,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Fatigue varying with workload is not diagnostic', keys: ['nonspecific reactivity'], mistake: 'Reading stress sensitivity as decisive' }),
      O('d', 'Whether his sleep problems are generally a little worse during the colder and darker months of the winter season', 0,
        { r: 'Seasonal variation is not the priority screen', approach: 'Seasonal framing', why: 'It does not address the key apnea rule-out', keys: ['nonspecific factor'], mistake: 'Pursuing a low-yield factor' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from generalized anxiety disorder?', ['R1'], [
      O('a', 'Sleep is his primary concern rather than excessive, uncontrollable worry spanning many areas of his daily life', 3,
        { r: 'Sleep-focused versus diffuse worry', approach: 'Contrast the focus', why: 'GAD features pervasive multi-domain worry; his concern centers on sleep', keys: ['sleep is the main concern', 'denies pervasive worry'], mistake: 'Calling sleep-focused distress generalized anxiety' }),
      O('b', 'The fact that he lies awake worrying about not being able to fall asleep and about how tired he will be the following day', -1,
        { r: 'Sleep-related worry occurs in insomnia itself', approach: 'Worry-presence framing', why: 'Worry about sleep is part of insomnia, not what separates it from GAD', keys: ['sleep-specific worry'], mistake: 'Using sleep worry to differentiate' }),
      O('c', 'The irritability and the trouble concentrating that he experiences during many of his ordinary days at the office', -1,
        { r: 'Irritability and poor focus occur in both', approach: 'Symptom-presence framing', why: 'These features are nonspecific between them', keys: ['shared symptoms'], mistake: 'Reading shared symptoms as decisive' }),
      O('d', 'The way his sleep tends to be a bit worse during the busiest and most stressful weeks of his accounting calendar', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from a depressive disorder?', ['R1'], [
      O('a', 'His main problem is the sleep disturbance itself rather than pervasive low mood, anhedonia, and the other depressive symptoms', 3,
        { r: 'Sleep-centered versus a depressive syndrome', approach: 'Contrast the core picture', why: 'A depressive disorder involves pervasive mood and anhedonia beyond sleep', keys: ['denies persistent low mood and anhedonia'], mistake: 'Diagnosing depression from insomnia alone' }),
      O('b', 'The fact that he feels tired and low in energy during the day after sleeping poorly through most of the night', -1,
        { r: 'Low energy occurs in both', approach: 'Energy framing', why: 'Daytime fatigue is nonspecific between them', keys: ['shared symptom'], mistake: 'Using fatigue to differentiate' }),
      O('c', 'The irritability and frustration that he expresses about how poorly he has been sleeping over the past several months', -1,
        { r: 'Irritability is nonspecific', approach: 'Irritability framing', why: 'Irritability occurs in both', keys: ['shared affect'], mistake: 'Reading irritability as decisive' }),
      O('d', 'The way his mood and energy seem somewhat lower in the early mornings than later in the afternoon and evening hours', 0,
        { r: 'Diurnal variation is not diagnostic', approach: 'Time-of-day framing', why: 'Diurnal pattern does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q5', 'intake', 'What assessment tool best informs the evaluation and the treatment plan?', ['R3'], [
      O('a', 'A daily sleep diary tracking bedtime, sleep onset, awakenings, rise time, and daytime functioning over a couple of weeks', 3,
        { r: 'Use a sleep diary baseline', approach: 'Gather structured sleep data', why: 'A sleep diary establishes the pattern and guides CBT-I', keys: ['need objective sleep data'], mistake: 'Planning treatment without a sleep baseline' }),
      O('b', 'A single global question asking him to estimate how well he generally thinks he sleeps on an average sort of night', -1,
        { r: 'A global estimate is imprecise', approach: 'Global-estimate framing', why: 'It lacks the night-by-night detail CBT-I needs', keys: ['no detailed data'], mistake: 'Relying on a vague global rating' }),
      O('c', 'Ordering an overnight polysomnography sleep study yourself to confirm the diagnosis before beginning any treatment planning', -1,
        { r: 'Ordering a sleep study exceeds scope', approach: 'Order-test framing', why: 'Counselors coordinate but do not order sleep studies', keys: ['scope limit'], mistake: 'Acting outside scope of practice' }),
      O('d', 'A detailed reconstruction of his childhood sleep habits across his earliest years to find the origin of the problem', 0,
        { r: 'Early-history detail is low yield here', approach: 'Origins framing', why: 'It does not inform the current treatment plan', keys: ['present pattern'], mistake: 'Prioritizing origins over current data' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation?', ['R2'], [
      O('a', 'Cognitive behavioral therapy for insomnia, including stimulus control, sleep restriction, and cognitive work on sleep beliefs', 3,
        { r: 'CBT-I is first-line for chronic insomnia', approach: 'Apply the guideline', why: 'NICE establishes CBT-I as first-line for chronic insomnia', keys: ['chronic insomnia', 'clock-watching and effortful sleep'], mistake: 'Defaulting to long-term hypnotic medication' }),
      O('b', 'A referral to begin a nightly sleeping medication indefinitely, framed as the single most important part of his treatment', -1,
        { r: 'Long-term hypnotics are not first-line', approach: 'Medication-first framing', why: 'CBT-I is preferred over indefinite hypnotic use', keys: ['behavioral first-line'], mistake: 'Defaulting to standing hypnotics' }),
      O('c', 'General advice to simply relax more and to try harder to fall asleep each night without any structured behavioral protocol', -2,
        { r: 'Trying harder to sleep worsens insomnia', approach: 'Effort framing', why: 'Effortful sleep increases arousal and maintains insomnia', keys: ['forcing sleep'], mistake: 'Advising the client to try to sleep harder' }),
      O('d', 'A primarily insight-oriented exploration of his early childhood as the central route to resolving his current sleep problems', 0,
        { r: 'Insight-only is not first-line here', approach: 'Depth-only framing', why: 'CBT-I is the indicated, effective approach', keys: ['symptom-focused need'], mistake: 'Prioritizing origins over CBT-I' }),
    ]),
    Q('q7', 'treatment', 'He spends long stretches in bed trying to force sleep. Which CBT-I component most directly addresses this?', ['R2'], [
      O('a', 'Stimulus control and sleep restriction, which strengthen the bed–sleep association and consolidate his time asleep', 3,
        { r: 'Stimulus control and sleep restriction', approach: 'Target the maintaining behavior', why: 'These components reverse the conditioned wakefulness from long time in bed', keys: ['long stretches in bed', 'clock-watching'], mistake: 'Leaving extended time-in-bed in place' }),
      O('b', 'Advising him to go to bed much earlier and to stay in bed longer so that he has more total opportunity to fall asleep', -2,
        { r: 'More time in bed worsens insomnia', approach: 'Extend-time-in-bed framing', why: 'It deepens the conditioned wakefulness that maintains insomnia', keys: ['effortful sleep'], mistake: 'Increasing time in bed' }),
      O('c', 'Encouraging him to remain in bed and keep trying to fall asleep no matter how long he ends up lying awake during the night', -2,
        { r: 'Lying awake in bed reinforces the cycle', approach: 'Stay-in-bed framing', why: 'It strengthens the bed–wakefulness association', keys: ['conditioned arousal'], mistake: 'Reinforcing the maintaining behavior' }),
      O('d', 'Recommending that he take a long daytime nap whenever he feels tired so that he can make up for the lost nighttime sleep', -1,
        { r: 'Long naps undermine night sleep', approach: 'Napping framing', why: 'Daytime napping reduces nighttime sleep drive', keys: ['naps to cope'], mistake: 'Encouraging compensatory napping' }),
    ]),
    Q('q8', 'treatment', 'Hank asks whether he should use sleeping pills. The most appropriate counselor action is to:', ['R4'], [
      O('a', 'Recommend CBT-I as first-line and, if he wants to consider medication, coordinate a referral to a prescriber with his consent', 3,
        { r: 'Lead with CBT-I; refer for medication questions', approach: 'Coordinate within scope', why: 'Counselors recommend CBT-I and refer medication decisions to a prescriber', keys: ['asks about sleeping pills'], mistake: 'Giving specific medication advice' }),
      O('b', 'Tell him which specific sleeping medication and dose he should ask his physician to prescribe for him at his next appointment', -2,
        { r: 'Naming a drug and dose exceeds scope', approach: 'Prescriptive advice', why: 'Medication selection is outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping professional limits' }),
      O('c', 'Reassure him that nightly over-the-counter sleep aids are perfectly safe to rely on indefinitely for his chronic insomnia', -2,
        { r: 'Endorsing indefinite sleep aids is inappropriate', approach: 'Endorse-OTC framing', why: 'It is outside scope and not the indicated first-line care', keys: ['scope and safety'], mistake: 'Advising long-term reliance on sleep aids' }),
      O('d', 'Discourage any medication entirely and tell him he must manage his insomnia through willpower and discipline alone', -1,
        { r: 'Discouraging meds overreaches', approach: 'Willpower framing', why: 'The decision belongs with a prescriber after CBT-I is offered', keys: ['client autonomy'], mistake: 'Steering a medical decision' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor monitor his response to CBT-I over time?', ['R5'], [
      O('a', 'Review the ongoing sleep diary at intervals to track sleep efficiency and daytime functioning and adjust the plan', 3,
        { r: 'Use the sleep diary for measurement-based care', approach: 'Track outcomes with the diary', why: 'The sleep diary provides objective tracking to guide CBT-I', keys: ['need objective tracking'], mistake: 'Relying on impressions alone' }),
      O('b', 'Ask him each week whether he subjectively feels that his sleep is generally going better than it was before', -1,
        { r: 'Global impressions are unreliable', approach: 'Informal check-in', why: 'It lacks a standardized benchmark', keys: ['no objective anchor'], mistake: 'Trusting unstandardized self-report' }),
      O('c', 'Wait until the agreed course of CBT-I is fully over and then evaluate his overall response in one single review', -2,
        { r: 'End-only review misses non-response', approach: 'Terminal-evaluation framing', why: 'It prevents timely adjustment of the plan', keys: ['need interim data'], mistake: 'Skipping interim monitoring' }),
      O('d', 'Track mainly whether he attends his sessions and treat consistent attendance as the main sign that he is improving', 0,
        { r: 'Attendance is not an outcome measure', approach: 'Adherence proxy', why: 'Attendance does not measure sleep change', keys: ['process vs outcome'], mistake: 'Mistaking adherence for outcome' }),
    ]),
    Q('q10', 'counseling', 'Hank says he is convinced one bad night will ruin his entire next day. The most therapeutic response is to:', ['R2'], [
      O('a', 'Address the catastrophic sleep beliefs with cognitive work, since such beliefs heighten arousal and maintain the insomnia', 3,
        { r: 'Target catastrophic sleep beliefs', approach: 'Cognitive work on sleep beliefs', why: 'Catastrophic beliefs about sleep increase arousal and maintain insomnia', keys: ['one bad night will ruin the day'], mistake: 'Leaving the maintaining beliefs unaddressed' }),
      O('b', 'Agree that a single poor night really will likely ruin his day and help him plan how to clear his schedule for those days', -2,
        { r: 'Endorsing the belief feeds arousal', approach: 'Validate the catastrophe', why: 'It reinforces the catastrophic belief that maintains insomnia', keys: ['catastrophic belief'], mistake: 'Confirming the maintaining belief' }),
      O('c', 'Reassure him repeatedly that he will definitely sleep well tonight so that he can stop worrying about it before bed', -1,
        { r: 'Reassurance feeds the sleep-effort cycle', approach: 'Reassurance framing', why: 'It reinforces reassurance-seeking and sleep effort', keys: ['reassurance dependence'], mistake: 'Providing reassurance that maintains arousal' }),
      O('d', 'Explain in technical detail the neuroscience of sleep architecture to convince him on scientific grounds not to worry', -1,
        { r: 'Lecturing rarely shifts the belief', approach: 'Didactic framing', why: 'Cognitive restructuring works better than a lecture', keys: ['emotional reasoning'], mistake: 'Substituting facts for cognitive work' }),
    ]),
    Q('q11', 'counseling', 'What psychoeducation is most useful to offer Hank early in treatment?', ['R2'], [
      O('a', 'Explain how clock-watching, daytime napping, and effortful sleep maintain insomnia and how CBT-I targets that cycle', 3,
        { r: 'Teach the insomnia-maintaining cycle', approach: 'Explain the maintaining model', why: 'Understanding the cycle motivates the CBT-I components', keys: ['clock-watching', 'naps and forcing sleep'], mistake: 'Teaching techniques without the rationale' }),
      O('b', 'Tell him the most important thing is simply to relax and not to think about his sleep at all from this point forward', -1,
        { r: 'Not-thinking-about-it is unhelpful advice', approach: 'Vague-relaxation framing', why: 'It offers no mechanism or skill', keys: ['needs a model'], mistake: 'Giving platitudes instead of education' }),
      O('c', 'Give him an extensive packet on sleep neuroscience and ask him to study it thoroughly before the next appointment', 0,
        { r: 'A heavy reading load is not the priority', approach: 'Information-overload framing', why: 'A focused, tailored explanation works better', keys: ['focused education'], mistake: 'Overloading instead of explaining' }),
      O('d', 'Reassure him that most people with insomnia eventually sleep fine again, so there is really nothing for him to address now', -1,
        { r: 'Dismissive reassurance forgoes treatment', approach: 'Reassurance framing', why: 'It bypasses the active treatment he needs', keys: ['needs CBT-I'], mistake: 'Reassuring instead of treating' }),
    ]),
    Q('q12', 'ethics', 'Hank reveals he has been taking a friend’s prescription sedative to sleep and asks the counselor to keep it off the record. Best response?', ['R4'], [
      O('a', 'Address the safety risk of using another person’s prescription and document accurately rather than omitting it from the record', 3,
        { r: 'Address the safety risk; document honestly', approach: 'Maintain safety and accurate records', why: 'Using another person’s prescription is a safety concern that must be addressed and recorded', keys: ['friend’s sedative', 'asks to hide it'], mistake: 'Agreeing to leave a safety-relevant fact out of the record' }),
      O('b', 'Agree to leave the sedative use out of the record entirely so that he feels comfortable continuing to be open with you', -2,
        { r: 'Omitting a safety fact falsifies the record', approach: 'Omit-to-comfort framing', why: 'A deliberately incomplete record is improper', keys: ['record integrity'], mistake: 'Falsifying records to reassure' }),
      O('c', 'Tell him this is none of your concern as a counselor and simply move on without addressing the borrowed-medication use at all', -1,
        { r: 'Ignoring the risk is poor care', approach: 'Not-my-concern framing', why: 'The safety risk is clinically relevant and within your role to address', keys: ['safety risk'], mistake: 'Sidestepping a relevant safety issue' }),
      O('d', 'Report him immediately to the authorities for the borrowed medication before discussing the safety concern with him at all', -1,
        { r: 'Reflexive reporting is disproportionate here', approach: 'Over-react framing', why: 'The clinical step is to address safety, not reflexively report', keys: ['proportionate response'], mistake: 'Escalating before addressing it clinically' }),
    ]),
    Q('q13', 'ethics', 'His employer asks the counselor whether his sleep problems make him unsafe to work. Best response?', ['R4'], [
      O('a', 'Decline to disclose without a valid release and clarify the limits of what a treating counselor can appropriately attest to', 3,
        { r: 'Protect confidentiality; clarify role limits', approach: 'Uphold confidentiality and role boundaries', why: 'Disclosure requires consent and fitness opinions may exceed the treating role', keys: ['employer inquiry', 'no release'], mistake: 'Disclosing or issuing a fitness opinion without consent or competence' }),
      O('b', 'Tell the employer he is perfectly safe to work so that he does not get into any trouble at his job over his sleep problems', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Disclose-to-help framing', why: 'It discloses without consent and asserts a conclusion beyond the role', keys: ['no release'], mistake: 'Issuing an unconsented, out-of-role opinion' }),
      O('c', 'Share a general summary of his sleep treatment so the employer can decide for themselves whether he is fit to work', -2,
        { r: 'A general summary is still a disclosure', approach: 'Soft disclosure', why: 'Only a valid release permits disclosure', keys: ['confidentiality'], mistake: 'Leaking details under the guise of helping' }),
      O('d', 'Refuse to engage with the employer at all and hang up without explaining anything about confidentiality or the process', -1,
        { r: 'Abrupt refusal misses a teachable moment', approach: 'Flat refusal', why: 'The confidentiality rationale can be explained appropriately', keys: ['professional courtesy'], mistake: 'Being needlessly obstructive' }),
    ]),
  ],
};

// ============================================================================
// D137 — Gender Dysphoria in Adolescents/Adults (F64.0) — Sexual-Gender — hard
// ============================================================================
const D137 = {
  id: 'ncmhce-D137',
  title: 'Distress over gender incongruence and seeking affirming support',
  category: 'Sexual-Gender',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Gender Dysphoria in Adolescents/Adults', code: 'F64.0' },
  diagnosis: { name: 'Gender Dysphoria in Adolescents/Adults', code: 'F64.0' },
  differentialOptions: [
    { id: 'do1', name: 'Gender Dysphoria in Adolescents/Adults', isCorrect: true },
    { id: 'do2', name: 'Body Dysmorphic Disorder', isCorrect: false },
    { id: 'do3', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
  ],
  narrative: {
    intake:
      'Sam Rivera, a 19-year-old college student who is transgender, presents with about a year of marked distress arising from a strong, ' +
      'persistent incongruence between their experienced gender and their sex assigned at birth, with a deep desire to be seen as their true self.',
    session1:
      'Sam describes significant discomfort with certain physical characteristics and with being misgendered, along with depressed mood and ' +
      'anxiety that worsen around family who reject their identity. Sam is clear and consistent about their gender and seeks affirming support.',
    session2:
      'Sam reports passive thoughts that life is not worth living when the rejection and misgendering are at their worst, without current plan ' +
      'or intent. Sam asks about steps toward affirming care and is worried a counselor will try to talk them out of who they are.',
  },
  diagnosticRationale:
    'A marked incongruence between experienced and assigned gender lasting at least six months, with a strong desire to be one’s experienced ' +
    'gender and to be rid of incongruent characteristics, accompanied by clinically significant distress, meets DSM-5-TR criteria for gender ' +
    'dysphoria. The distress reflects incongruence and minority stress, not a body-image delusion, and the gender identity itself is not a disorder to be changed.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Gender dysphoria: marked incongruence for 6+ months with clinically significant distress or impairment' },
    { id: 'R2', source: 'ACA Code of Ethics', detail: 'A.4.b., A.11.b., and C.2.: nondiscrimination, prohibition of values-based referral, and competence' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Culturally responsive, affirmative assessment and attention to minority stress' },
    { id: 'R4', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk amid rejection and minority stress' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Client-centered, affirmative approach and the working alliance' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a gender dysphoria diagnosis?', ['R1'], [
      O('a', 'A marked incongruence between experienced and assigned gender for at least six months with clinically significant distress', 3,
        { r: 'Incongruence, duration, and distress', approach: 'Confirm the core criteria', why: 'DSM-5-TR requires marked incongruence for 6+ months with significant distress', keys: ['about a year of distress', 'persistent incongruence'], mistake: 'Treating gender identity itself as the disorder' }),
      O('b', 'That Sam can identify the single life event they believe first caused them to feel this way about their gender', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That Sam’s feelings about their gender have grown noticeably stronger over the past week than the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The persistent 6-month pattern is what matters', keys: ['persistent incongruence'], mistake: 'Confusing a recent change with the criteria' }),
      O('d', 'That Sam currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Gender dysphoria is defined by incongruence and distress, not mood criteria', keys: ['incongruence-based diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes Sam’s presentation from body dysmorphic disorder?', ['R1'], [
      O('a', 'Their distress arises from gender incongruence and being misgendered, not from a preoccupation with a perceived bodily defect', 3,
        { r: 'Gender incongruence versus a perceived defect', approach: 'Contrast the source of distress', why: 'BDD centers on a perceived appearance defect; Sam’s distress is gender incongruence', keys: ['distress from incongruence and misgendering'], mistake: 'Reframing gender incongruence as a body-image disorder' }),
      O('b', 'The fact that Sam reports significant discomfort with certain physical characteristics of their own body and appearance', -1,
        { r: 'Body discomfort alone does not separate them', approach: 'Body-discomfort framing', why: 'Discomfort with the body can occur in both; the basis differs', keys: ['shared feature'], mistake: 'Using body discomfort to differentiate' }),
      O('c', 'The depressed mood and the anxiety that Sam experiences, especially when around family members who reject them', -1,
        { r: 'Mood and anxiety are nonspecific', approach: 'Mood framing', why: 'These features occur across conditions', keys: ['shared symptoms'], mistake: 'Reading mood as decisive' }),
      O('d', 'The way Sam’s distress tends to be worse during the most stressful weeks of the college academic semester', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How should the counselor understand Sam’s depressed mood and anxiety in the formulation?', ['R3'], [
      O('a', 'Largely as distress linked to incongruence and minority stress such as rejection and misgendering, while still assessing for comorbidity', 3,
        { r: 'Incongruence and minority stress, plus comorbidity', approach: 'Locate the distress in context', why: 'Much of the distress reflects incongruence and minority stress, with comorbidity assessed too', keys: ['worse around rejecting family', 'misgendering'], mistake: 'Treating the mood symptoms as unrelated to minority stress' }),
      O('b', 'As proof that Sam’s gender identity itself is the underlying disorder that the counseling should work to change', -2,
        { r: 'Identity is not a disorder to change', approach: 'Pathologize-identity framing', why: 'The identity itself is not a disorder; attempts to change it are unethical', keys: ['affirmative stance required'], mistake: 'Targeting the identity rather than the distress' }),
      O('c', 'As an entirely separate primary depressive disorder that has no connection at all to Sam’s gender-related experiences', -1,
        { r: 'Disconnecting the mood from context is inaccurate', approach: 'Unrelated-disorder framing', why: 'The distress is closely tied to incongruence and minority stress', keys: ['contextual distress'], mistake: 'Ignoring the minority-stress context' }),
      O('d', 'As a passing reaction that requires no particular attention because it will resolve once the semester is over', -1,
        { r: 'Dismissing the distress is an error', approach: 'Normalize-away framing', why: 'The distress is significant and warrants attention', keys: ['significant distress'], mistake: 'Minimizing clinically significant distress' }),
    ]),
    Q('q4', 'intake', 'Given Sam’s passive thoughts that life is not worth living, the most appropriate step is to:', ['R4'], [
      O('a', 'Conduct a structured suicide-risk assessment, recognizing that rejection and minority stress elevate suicide risk', 3,
        { r: 'Assess elevated risk with structure', approach: 'Screen risk directly', why: 'Minority stress and rejection elevate suicide risk and warrant structured screening', keys: ['passive ideation', 'rejection by family'], mistake: 'Overlooking elevated suicide risk' }),
      O('b', 'Treat the comment as an understandable reaction to family conflict that does not require any structured assessment of risk', -2,
        { r: 'Minimizing the ideation is unsafe', approach: 'Minimize framing', why: 'It forecloses needed risk assessment', keys: ['unassessed ideation'], mistake: 'Dismissing the ideation' }),
      O('c', 'Move ahead with planning affirming-care referrals first, assuming the thoughts will resolve once that process is underway', -1,
        { r: 'Risk must be assessed before this', approach: 'Treatment-first framing', why: 'Safety assessment precedes referral planning', keys: ['active disclosure'], mistake: 'Sequencing referral ahead of safety' }),
      O('d', 'Ask Sam to sign a brief written promise to stay safe and to reach out if the thoughts get worse over the coming week', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk or assess it', keys: ['needs safety planning'], mistake: 'Substituting a contract for assessment' }),
    ]),
    Q('q5', 'core', 'What is most important for the counselor to convey in the assessment itself?', ['R5'], [
      O('a', 'Affirmation of Sam’s identity using their name and pronouns, establishing safety and trust as the foundation of the work', 3,
        { r: 'Affirm identity; build safety and trust', approach: 'Use an affirmative, client-centered stance', why: 'Affirmation and correct name/pronouns establish the alliance and safety', keys: ['fears being talked out of who they are', 'seeks affirming support'], mistake: 'Questioning or trying to change the identity' }),
      O('b', 'A careful effort to help Sam consider whether their gender identity might just be a passing phase they will likely grow out of', -2,
        { r: 'Casting doubt on the identity is harmful', approach: 'Doubt-the-identity framing', why: 'It undermines safety and veers toward non-affirming practice', keys: ['consistent identity'], mistake: 'Treating the identity as something to talk them out of' }),
      O('c', 'A neutral stance that deliberately avoids using any name or pronouns at all so as not to take a position on Sam’s identity', -1,
        { r: 'Withholding affirmation is non-affirming', approach: 'False-neutrality framing', why: 'Affirmation, not avoidance, builds the alliance here', keys: ['needs affirmation'], mistake: 'Mistaking avoidance for neutrality' }),
      O('d', 'A primary focus on Sam’s family’s concerns and objections so that the counselor fully understands the family’s perspective first', -1,
        { r: 'Centering the family displaces the client', approach: 'Family-centered framing', why: 'The client and their safety come first in the assessment', keys: ['client-centered'], mistake: 'Prioritizing the family over the client' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate overall treatment approach?', ['R5'], [
      O('a', 'Affirmative, client-centered support that addresses distress and minority stress and follows Sam’s own goals for their care', 3,
        { r: 'Affirmative, client-centered, goal-driven care', approach: 'Apply an affirmative model', why: 'Affirmative care addresses distress and minority stress per the client’s goals', keys: ['seeks affirming support', 'family rejection'], mistake: 'Imposing the counselor’s goals on the client’s identity' }),
      O('b', 'Reparative or conversion-oriented therapy aimed at helping Sam become comfortable with their sex assigned at birth', -2,
        { r: 'Conversion therapy is unethical and harmful', approach: 'Conversion framing', why: 'Conversion/reparative therapy is unethical and causes harm', keys: ['prohibited practice'], mistake: 'Attempting to change the client’s gender identity' }),
      O('c', 'A primary focus on persuading Sam to delay any consideration of their identity until they are significantly older and more settled', -1,
        { r: 'Gatekeeping by persuasion is non-affirming', approach: 'Delay-by-persuasion framing', why: 'It is non-affirming and not the counselor’s role to impose', keys: ['client autonomy'], mistake: 'Pressuring the client to defer their identity' }),
      O('d', 'Open-ended supportive talk that avoids the gender concerns entirely so that the sessions never become emotionally charged', -1,
        { r: 'Avoiding the central issue underserves Sam', approach: 'Avoidant-support framing', why: 'The gender-related distress is the central, valid focus', keys: ['avoided core issue'], mistake: 'Sidestepping the client’s presenting concern' }),
    ]),
    Q('q7', 'treatment', 'Sam asks about steps toward gender-affirming medical care. The most appropriate counselor action is to:', ['R2'], [
      O('a', 'Provide information and coordinate referrals to qualified gender-affirming providers in line with Sam’s goals and consent', 3,
        { r: 'Coordinate affirming-care referrals within scope', approach: 'Coordinate care', why: 'Counselors coordinate and refer for gender-affirming medical care', keys: ['asks about affirming care'], mistake: 'Acting as a gatekeeper or prescribing' }),
      O('b', 'Tell Sam exactly which hormones and doses to request so that the medical process moves along as quickly as possible for them', -2,
        { r: 'Naming hormones and doses exceeds scope', approach: 'Prescriptive advice', why: 'Medical and dosing decisions are outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping into medical management' }),
      O('c', 'Discourage Sam from pursuing any affirming medical care and recommend that they simply wait several more years before deciding', -2,
        { r: 'Discouraging affirming care is non-affirming', approach: 'Gatekeeping framing', why: 'Steering the client away from affirming care is inappropriate', keys: ['client autonomy'], mistake: 'Obstructing the client’s affirming-care goals' }),
      O('d', 'Tell Sam that affirming medical care is entirely outside the counseling role and decline to help with any of it at all', -1,
        { r: 'Refusing to coordinate abandons the need', approach: 'Flat refusal', why: 'Coordinating referrals with consent is appropriate', keys: ['care coordination'], mistake: 'Declining to support the client’s goals' }),
    ]),
    Q('q8', 'treatment', 'A central, appropriate treatment target given Sam’s context would be:', ['R3'], [
      O('a', 'Coping with minority stress and rejection, building support, and reducing the distress tied to misgendering and family conflict', 3,
        { r: 'Target minority stress and build support', approach: 'Address minority stress', why: 'Minority-stress coping and support reduce the distress in gender dysphoria', keys: ['family rejection', 'misgendering'], mistake: 'Targeting the identity instead of the minority stress' }),
      O('b', 'Helping Sam gradually accept their sex assigned at birth so that the incongruence and the related distress simply go away', -2,
        { r: 'This is conversion-oriented and harmful', approach: 'Acceptance-of-birth-sex framing', why: 'Aiming to change the identity is unethical and harmful', keys: ['prohibited target'], mistake: 'Reframing the goal as changing the identity' }),
      O('c', 'Focusing mainly on convincing Sam’s family to change their views so that the family conflict resolves before anything else', -1,
        { r: 'Changing the family is not the primary target', approach: 'Family-change framing', why: 'The client’s coping and support are the appropriate focus', keys: ['client-centered'], mistake: 'Making family change the central goal' }),
      O('d', 'A primarily insight-oriented exploration of Sam’s early childhood as the central route to relieving their current distress', 0,
        { r: 'Insight-only is not the indicated focus', approach: 'Depth-only framing', why: 'Affirmative, minority-stress-focused work fits better', keys: ['contextual distress'], mistake: 'Prioritizing origins over affirming support' }),
    ]),
    Q('q9', 'counseling', 'How should the counselor use language with Sam throughout the work?', ['R5'], [
      O('a', 'Consistently use Sam’s chosen name and pronouns and follow their lead on language about their identity and body', 3,
        { r: 'Use chosen name and pronouns consistently', approach: 'Affirm through language', why: 'Correct name and pronouns are foundational to affirmative care', keys: ['being misgendered is distressing'], mistake: 'Misgendering or using the wrong name' }),
      O('b', 'Use whichever name and pronouns Sam’s family prefers so as to avoid taking sides in the family’s ongoing conflict', -2,
        { r: 'Deferring to family misgenders the client', approach: 'Family-preference framing', why: 'It misgenders the client and undermines affirmation', keys: ['client affirmation'], mistake: 'Letting family preference override the client’s identity' }),
      O('c', 'Avoid using any name or pronouns at all so that the counselor does not appear to be endorsing one position over another', -1,
        { r: 'Avoidance withholds affirmation', approach: 'False-neutrality framing', why: 'Affirmation, not avoidance, is appropriate', keys: ['needs affirmation'], mistake: 'Mistaking avoidance for neutrality' }),
      O('d', 'Use Sam’s chosen name only during sessions but revert to their birth name in the written record to keep the record consistent', -2,
        { r: 'Misgendering the record is non-affirming and can be unsafe', approach: 'Inconsistent-record framing', why: 'Records should reflect the client’s identity within applicable standards', keys: ['record affirmation'], mistake: 'Misgendering the client in documentation' }),
    ]),
    Q('q10', 'counseling', 'Sam’s parents pressure the counselor to “help our child stop this.” The most appropriate response is to:', ['R2'], [
      O('a', 'Explain that affirming, ethical practice does not try to change a client’s gender identity, and engage the family supportively within consent', 3,
        { r: 'Decline conversion; engage family ethically', approach: 'Hold the affirmative, ethical line', why: 'Ethical practice does not attempt to change identity and engages family appropriately', keys: ['family pressure to change Sam'], mistake: 'Agreeing to a conversion-oriented goal' }),
      O('b', 'Agree to work on helping Sam give up their gender identity, since supporting the parents’ wishes will reduce the family conflict', -2,
        { r: 'Agreeing to conversion is unethical', approach: 'Appease-the-parents framing', why: 'It commits to a prohibited, harmful goal', keys: ['prohibited practice'], mistake: 'Adopting a conversion goal to placate family' }),
      O('c', 'Tell the parents you will secretly try to steer Sam away from their identity while appearing to provide affirming support', -2,
        { r: 'Covert non-affirming practice is deceptive and harmful', approach: 'Covert framing', why: 'It is deceptive, harmful, and unethical', keys: ['integrity and harm'], mistake: 'Practicing deceptively against the client’s welfare' }),
      O('d', 'Refuse to speak with the parents at all and decline any family involvement even when Sam might want appropriate support', -1,
        { r: 'Blanket exclusion forgoes useful support', approach: 'Blanket-exclusion framing', why: 'Consented, supportive family work can help', keys: ['potential support'], mistake: 'Refusing all family involvement reflexively' }),
    ]),
    Q('q11', 'ethics', 'The counselor personally feels uncomfortable with gender-identity issues and considers referring Sam out. The most ethical action is to:', ['R2'], [
      O('a', 'Build competence through training and consultation rather than referring solely because of the counselor’s personal values', 3,
        { r: 'Gain competence; no values-based referral', approach: 'Address competence, not values', why: 'ACA prohibits referral based solely on the counselor’s values and requires competence', keys: ['personal discomfort', 'client needs affirming care'], mistake: 'Referring out to avoid serving the client’s identity' }),
      O('b', 'Refer Sam to another counselor specifically because working with gender-identity issues conflicts with the counselor’s own beliefs', -2,
        { r: 'Values-based referral is prohibited', approach: 'Values-referral framing', why: 'ACA prohibits referral based solely on personal values', keys: ['prohibited referral'], mistake: 'Abandoning the client over personal values' }),
      O('c', 'Continue seeing Sam but subtly express the counselor’s personal discomfort so that Sam understands the counselor’s perspective', -2,
        { r: 'Imposing personal values harms the client', approach: 'Impose-values framing', why: 'Expressing disapproval undermines the client’s welfare', keys: ['client welfare'], mistake: 'Letting personal values shape the work' }),
      O('d', 'Tell Sam that the counselor cannot really help with these particular issues and end the counseling relationship right away', -1,
        { r: 'Abandoning the client is inappropriate', approach: 'Abandonment framing', why: 'Competence is built or a coordinated transfer arranged, not abrupt termination', keys: ['continuity of care'], mistake: 'Dropping the client abruptly' }),
    ]),
    Q('q12', 'ethics', 'Sam asks the counselor not to disclose their gender identity to anyone, including school or family. Best response?', ['R5'], [
      O('a', 'Honor confidentiality and Sam’s control over disclosure, recognizing that outing them could cause serious harm, within legal limits', 3,
        { r: 'Protect confidentiality and control over disclosure', approach: 'Uphold confidentiality and safety', why: 'Outing can cause serious harm; the client controls disclosure within limits', keys: ['requests nondisclosure', 'family rejection'], mistake: 'Disclosing the client’s identity without consent' }),
      O('b', 'Tell Sam’s family about their gender identity anyway, since the family clearly has a right to know about their own child', -2,
        { r: 'Disclosing without consent can cause serious harm', approach: 'Family-right framing', why: 'Outing the client without consent is a breach that can be dangerous', keys: ['no consent'], mistake: 'Outing the client to family' }),
      O('c', 'Share the information with the school so they can provide support, even though Sam asked the counselor not to disclose it', -2,
        { r: 'Disclosing despite the request is a breach', approach: 'Soft-disclosure framing', why: 'Only consent or a legal requirement permits disclosure', keys: ['confidentiality'], mistake: 'Disclosing against the client’s wishes' }),
      O('d', 'Avoid discussing confidentiality and disclosure at all so that Sam does not become any more anxious than they already are', -1,
        { r: 'Dodging the issue undermines consent', approach: 'Evade framing', why: 'Confidentiality expectations are part of informed consent', keys: ['informed consent'], mistake: 'Failing to clarify confidentiality' }),
    ]),
    Q('q13', 'ethics', 'How should the counselor ensure they are practicing competently and ethically with Sam?', ['R2'], [
      O('a', 'Pursue training, supervision, and consultation in affirmative care and apply current professional standards to the work', 3,
        { r: 'Build and apply affirmative-care competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence, built through training and consultation', keys: ['affirmative care needed'], mistake: 'Practicing without the needed competence' }),
      O('b', 'Rely entirely on personal intuition and general counseling skills without seeking any specific training in affirmative care', -1,
        { r: 'General skills alone may be insufficient', approach: 'Intuition framing', why: 'Affirmative care requires specific competence', keys: ['specialized competence'], mistake: 'Assuming general skills are sufficient' }),
      O('c', 'Ask Sam to educate the counselor fully about all transgender issues so the counselor does not have to seek training elsewhere', -1,
        { r: 'Burdening the client is inappropriate', approach: 'Client-as-teacher framing', why: 'It is the counselor’s responsibility to gain competence', keys: ['counselor responsibility'], mistake: 'Placing the education burden on the client' }),
      O('d', 'Proceed without any particular preparation, on the assumption that affirmative care is simply the same as any other counseling', -1,
        { r: 'Assuming no preparation is needed is an error', approach: 'No-preparation framing', why: 'Affirmative care has specific competencies and standards', keys: ['specialized competence'], mistake: 'Overlooking the need for preparation' }),
    ]),
  ],
};

// ============================================================================
// D138 — Bipolar II Disorder (F31.81) — Bipolar — hard
// ============================================================================
const D138 = {
  id: 'ncmhce-D138',
  title: 'Recurrent depression with overlooked periods of elevated energy',
  category: 'Bipolar',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Bipolar II Disorder', code: 'F31.81' },
  diagnosis: { name: 'Bipolar II Disorder', code: 'F31.81' },
  differentialOptions: [
    { id: 'do1', name: 'Bipolar II Disorder', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Bipolar I Disorder, Current Episode Manic', isCorrect: false },
    { id: 'do4', name: 'Cyclothymic Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Elena Ortiz, a 34-year-old nurse, presents seeking help for recurrent depression. She describes several depressive episodes over the ' +
      'years and currently low mood, anhedonia, and poor sleep, and she came in mainly to ask about restarting an antidepressant.',
    session1:
      'On careful history she recalls distinct multi-day periods of unusually elevated, energized mood with decreased need for sleep, rapid ' +
      'thoughts, and heightened productivity that others noticed, without psychosis or hospitalization and not severe enough to be full mania.',
    session2:
      'She had not connected those “great” stretches to her mood problems and worries something is wrong with her. She denies sustained ' +
      'symptom-free intervals being only mild, and she denies any past episode requiring hospitalization or causing severe functional breakdown.',
  },
  diagnosticRationale:
    'A history of at least one major depressive episode and at least one hypomanic episode—a distinct period of elevated, energized mood with ' +
    'associated symptoms lasting several days, without psychosis or marked impairment requiring hospitalization—meets DSM-5-TR criteria for ' +
    'bipolar II disorder, distinct from unipolar depression, the full mania of bipolar I, and the milder, non-episodic course of cyclothymia.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Bipolar II: at least one hypomanic episode and one major depressive episode, no full manic episode' },
    { id: 'R2', source: 'VA/DoD CPG', detail: 'Bipolar disorder: pharmacologic management and caution with antidepressant monotherapy' },
    { id: 'R3', source: 'IPSRT', detail: 'Interpersonal and social rhythm therapy to stabilize sleep-wake rhythms and prevent relapse' },
    { id: 'R4', source: 'C-SSRS', detail: 'Structured suicide-risk screening, important in bipolar depression' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, scope of practice, and coordination of care' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to support a bipolar II diagnosis?', ['R1'], [
      O('a', 'A history of at least one hypomanic episode in addition to her major depressive episodes, with no full manic episode', 3,
        { r: 'Hypomania plus depression defines bipolar II', approach: 'Confirm the episode history', why: 'Bipolar II requires a hypomanic episode and a major depressive episode without full mania', keys: ['elevated, energized multi-day periods', 'recurrent depression'], mistake: 'Diagnosing unipolar depression by missing the hypomania' }),
      O('b', 'That she can identify the single stressful event she believes first triggered her recurring problems with her mood', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['episode-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her current depressive symptoms are clearly more severe today than they were earlier in this same week', -1,
        { r: 'Current severity is not the criterion', approach: 'Severity-trend framing', why: 'The episode history, not a recent trend, defines bipolar II', keys: ['episode history'], mistake: 'Requiring worsening to diagnose' }),
      O('d', 'That she currently meets the full symptom count required for a discrete manic episode at this point in time', 0,
        { r: 'Full mania would indicate bipolar I', approach: 'Wrong-pole framing', why: 'Bipolar II is defined by hypomania, not full mania', keys: ['no full mania'], mistake: 'Applying manic-episode criteria to bipolar II' }),
    ]),
    Q('q2', 'core', 'Which feature most clearly distinguishes her presentation from unipolar major depression?', ['R1'], [
      O('a', 'Her history of distinct hypomanic episodes, which unipolar depression does not include', 3,
        { r: 'Presence of hypomanic episodes', approach: 'Detect the hypomania', why: 'Hypomanic episodes distinguish bipolar II from unipolar depression', keys: ['multi-day elevated, energized periods'], mistake: 'Missing the hypomania and calling it unipolar' }),
      O('b', 'The fact that she has experienced several separate episodes of depressed mood and anhedonia over the course of years', -1,
        { r: 'Recurrent depression occurs in both', approach: 'Recurrence framing', why: 'Recurrent depression alone does not separate them', keys: ['shared feature'], mistake: 'Using recurrent depression to differentiate' }),
      O('c', 'The poor sleep and the low energy that she is experiencing during her current depressive episode right now', -1,
        { r: 'These symptoms occur in both', approach: 'Symptom-presence framing', why: 'Sleep and energy problems are nonspecific', keys: ['shared symptoms'], mistake: 'Reading shared symptoms as decisive' }),
      O('d', 'The way her mood seems to dip somewhat more in the darker winter months than during the brighter summer months', 0,
        { r: 'Seasonal variation is not the differentiator', approach: 'Seasonal framing', why: 'A seasonal pattern does not separate the two', keys: ['nonspecific pattern'], mistake: 'Using seasonality to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from bipolar I disorder?', ['R1'], [
      O('a', 'Her elevated periods are hypomanic—without psychosis, hospitalization, or the severe impairment of a full manic episode', 3,
        { r: 'Hypomania versus full mania', approach: 'Contrast severity of elevation', why: 'Bipolar I requires a full manic episode, which she has not had', keys: ['no psychosis or hospitalization', 'not severe enough for mania'], mistake: 'Calling hypomania a full manic episode' }),
      O('b', 'The fact that during her elevated periods she felt more energetic and needed noticeably less sleep than she usually does', -1,
        { r: 'These features occur in both hypomania and mania', approach: 'Symptom-presence framing', why: 'Decreased sleep need occurs in both; severity differs', keys: ['shared feature'], mistake: 'Using shared features to differentiate' }),
      O('c', 'The recurrent depressive episodes that she has experienced over the years between her elevated periods', -1,
        { r: 'Depression occurs in both bipolar types', approach: 'Depression framing', why: 'Depressive episodes do not separate bipolar I from II', keys: ['shared feature'], mistake: 'Reading depression as decisive' }),
      O('d', 'The way her symptoms tend to be a bit worse during the busiest and most stressful stretches at the hospital', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from cyclothymic disorder?', ['R1'], [
      O('a', 'She has had full major depressive episodes rather than only the milder, fluctuating mood symptoms of cyclothymia', 3,
        { r: 'Full episodes versus subthreshold fluctuation', approach: 'Contrast episode severity', why: 'Cyclothymia involves subthreshold symptoms, not full major depressive episodes', keys: ['full depressive episodes', 'denies only-mild symptoms'], mistake: 'Calling full episodes a cyclothymic pattern' }),
      O('b', 'The fact that her mood has shifted up and down at various points over the course of several years of her life', -1,
        { r: 'Mood variability occurs in both', approach: 'Variability framing', why: 'Mood shifts are shared; episode severity differs', keys: ['shared feature'], mistake: 'Using mood variability to differentiate' }),
      O('c', 'The elevated, energized periods that she has experienced at several points across the past few years', -1,
        { r: 'Elevated periods occur in both', approach: 'Elevation framing', why: 'Both involve elevated periods; severity differs', keys: ['shared feature'], mistake: 'Reading elevation as decisive' }),
      O('d', 'The way her difficulties tend to feel worse during the most stressful and demanding weeks at her job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q5', 'intake', 'Given her current depressive episode, what risk assessment is most important?', ['R4'], [
      O('a', 'A structured suicide-risk assessment, recognizing that suicide risk is elevated in bipolar depression', 3,
        { r: 'Assess elevated bipolar-depression risk', approach: 'Screen risk with structure', why: 'Bipolar depression carries elevated suicide risk warranting structured screening', keys: ['low mood and anhedonia', 'recurrent depression'], mistake: 'Overlooking elevated suicide risk in bipolar depression' }),
      O('b', 'A detailed reconstruction of every job she has held so the counselor can fully map her complete occupational history', -1,
        { r: 'Exhaustive work history is low yield', approach: 'Vocational-cataloging framing', why: 'It does not address the priority risk assessment', keys: ['risk first'], mistake: 'Collecting low-yield detail' }),
      O('c', 'A precise log of how many hours she sleeps each night so the counselor can quantify the full extent of her insomnia', -1,
        { r: 'Sleep logging is secondary to risk', approach: 'Quantification framing', why: 'It does not address suicide risk', keys: ['safety first'], mistake: 'Confusing monitoring detail with risk assessment' }),
      O('d', 'A complete list of every antidepressant she has ever tried so the counselor can document her full medication history', 0,
        { r: 'Medication history is useful but secondary now', approach: 'History framing', why: 'Risk assessment takes priority at this point', keys: ['risk first'], mistake: 'Prioritizing history over the safety assessment' }),
    ]),
    Q('q6', 'treatment', 'Elena asks the counselor to support her starting an antidepressant on its own. The most appropriate action is to:', ['R2'], [
      O('a', 'Coordinate a psychiatric evaluation and share that antidepressant monotherapy is a concern in bipolar II, given the diagnosis', 3,
        { r: 'Refer; flag antidepressant-monotherapy caution', approach: 'Coordinate care within scope', why: 'Antidepressant monotherapy can be problematic in bipolar II and warrants prescriber evaluation', keys: ['wants an antidepressant alone', 'bipolar II'], mistake: 'Endorsing antidepressant monotherapy or prescribing' }),
      O('b', 'Tell her which specific antidepressant and dose she should ask her physician to start for her depressive symptoms', -2,
        { r: 'Naming a drug and dose exceeds scope', approach: 'Prescriptive advice', why: 'Medication selection is outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping into medication management' }),
      O('c', 'Reassure her that an antidepressant by itself is the clearly correct treatment and encourage her to start one right away', -2,
        { r: 'Endorsing monotherapy ignores the diagnosis', approach: 'Monotherapy-endorsement framing', why: 'It overlooks the bipolar-II caution and exceeds scope', keys: ['bipolar II caution'], mistake: 'Endorsing a potentially destabilizing plan' }),
      O('d', 'Tell her medication is entirely outside the counseling role and decline to discuss her question about it any further', -1,
        { r: 'Refusing to engage abandons the issue', approach: 'Flat refusal', why: 'Coordinating and sharing relevant concerns is appropriate', keys: ['care coordination'], mistake: 'Declining to coordinate a relevant medical issue' }),
    ]),
    Q('q7', 'treatment', 'Once she is stabilized, which psychotherapy best supports relapse prevention?', ['R3'], [
      O('a', 'Interpersonal and social rhythm therapy to regularize her sleep-wake routines and help her detect early warning signs', 3,
        { r: 'IPSRT for rhythm stability and early detection', approach: 'Apply maintenance therapy', why: 'Regularizing social rhythms reduces relapse in bipolar disorder', keys: ['decreased need for sleep in hypomania', 'shift-work disruption'], mistake: 'Ignoring sleep and routine in maintenance' }),
      O('b', 'A primarily cathartic approach focused on fully venting the strong emotions that build up during her low periods', -1,
        { r: 'Catharsis is not the maintenance target', approach: 'Catharsis framing', why: 'Rhythm stability matters more for relapse prevention', keys: ['rhythm focus'], mistake: 'Choosing an approach without bipolar evidence' }),
      O('c', 'Encouraging her to push herself to stay extremely productive and busy so that she does not slip back into a depressive low', -2,
        { r: 'Overdrive can trigger relapse', approach: 'Overdrive framing', why: 'Pushing activity can destabilize rhythms and mood', keys: ['rhythm disruption risk'], mistake: 'Promoting overactivity in bipolar care' }),
      O('d', 'A long course of exposure therapy aimed at reducing her anxiety about possibly having another mood episode in the future', -1,
        { r: 'Exposure is not the indicated approach', approach: 'Exposure framing', why: 'It does not target rhythm stability or early detection', keys: ['mismatch to need'], mistake: 'Applying an unmatched protocol' }),
    ]),
    Q('q8', 'treatment', 'What is most important to build into her ongoing plan?', ['R3'], [
      O('a', 'Mood and sleep monitoring with early-warning-sign tracking so emerging hypomania or depression can be caught and managed', 3,
        { r: 'Monitor mood, sleep, and early warning signs', approach: 'Use measurement-based monitoring', why: 'Tracking mood and sleep helps catch episodes early in bipolar II', keys: ['recurrent episodes', 'sleep changes'], mistake: 'Treating the current episode without ongoing monitoring' }),
      O('b', 'Tracking only her depressive symptoms while disregarding any signs of elevated or energized mood going forward', -1,
        { r: 'Ignoring elevation misses hypomania', approach: 'Depression-only framing', why: 'Monitoring must include the elevated pole', keys: ['hypomania matters'], mistake: 'Monitoring only one pole' }),
      O('c', 'Waiting until her next routine visit in several months to reassess her mood rather than monitoring it in the meantime', -1,
        { r: 'A long monitoring gap risks missed episodes', approach: 'Delayed-monitoring framing', why: 'Closer monitoring is warranted in bipolar II', keys: ['interim risk'], mistake: 'Leaving a long gap without monitoring' }),
      O('d', 'Tracking mainly whether she attends her sessions and treating attendance as the main sign that she is doing well', 0,
        { r: 'Attendance is not an outcome measure', approach: 'Adherence proxy', why: 'Attendance does not measure mood change', keys: ['process vs outcome'], mistake: 'Mistaking adherence for outcome' }),
    ]),
    Q('q9', 'counseling', 'Elena is surprised and worried to learn her “great” periods may have been hypomania. Best response?', ['R3'], [
      O('a', 'Validate her reaction and provide psychoeducation about hypomania and bipolar II as understandable and manageable with treatment', 3,
        { r: 'Validate and psychoeducate about bipolar II', approach: 'Normalize and explain', why: 'Understanding hypomania and bipolar II reduces fear and supports engagement', keys: ['did not connect the periods', 'worried something is wrong'], mistake: 'Either alarming her or dismissing the new information' }),
      O('b', 'Tell her that this means she has a severe, lifelong mental illness that will almost certainly only get worse over time', -2,
        { r: 'A grim, inaccurate framing deepens fear', approach: 'Catastrophize framing', why: 'It is inaccurate and undermines engagement', keys: ['manageable condition'], mistake: 'Catastrophizing the diagnosis' }),
      O('c', 'Reassure her quickly that the hypomania is nothing to be concerned about and that it does not really change anything at all', -1,
        { r: 'Minimizing misrepresents the diagnosis', approach: 'Minimize framing', why: 'Hypomania is clinically meaningful and changes the plan', keys: ['diagnostic significance'], mistake: 'Downplaying a meaningful finding' }),
      O('d', 'Explain the detailed neurobiology of bipolar disorder at length to convince her on technical grounds not to worry about it', -1,
        { r: 'Lecturing rarely addresses the worry', approach: 'Didactic framing', why: 'Validation and tailored psychoeducation work better', keys: ['emotional reasoning'], mistake: 'Substituting dense facts for engagement' }),
    ]),
    Q('q10', 'counseling', 'How can the counselor best help Elena recognize early signs of a hypomanic episode?', ['R3'], [
      O('a', 'Collaboratively identify her personal early warning signs, such as reduced sleep need and racing thoughts, and a plan to respond', 3,
        { r: 'Identify personal early warning signs and a plan', approach: 'Build a relapse-detection plan', why: 'Personalized warning signs and a response plan support early intervention', keys: ['decreased sleep need', 'rapid thoughts'], mistake: 'Leaving her without a way to detect early episodes' }),
      O('b', 'Tell her not to worry about watching for any warning signs and to simply wait until a full episode is clearly underway', -1,
        { r: 'Waiting for a full episode misses early intervention', approach: 'Wait-and-see framing', why: 'Early detection allows earlier, more effective response', keys: ['early intervention'], mistake: 'Forgoing early warning-sign monitoring' }),
      O('c', 'Advise her to treat any happy or productive day as a warning sign of hypomania so that she stays especially vigilant', -1,
        { r: 'Over-pathologizing normal good days is unhelpful', approach: 'Over-vigilance framing', why: 'Normal positive mood is not the same as hypomania', keys: ['accurate detection'], mistake: 'Pathologizing ordinary good days' }),
      O('d', 'Have her rely entirely on her family to notice any warning signs for her so that she does not have to monitor herself at all', -1,
        { r: 'Outsourcing all monitoring is insufficient', approach: 'Outsource framing', why: 'Self-monitoring, with support, is part of the plan', keys: ['self-monitoring'], mistake: 'Removing the client from her own monitoring' }),
    ]),
    Q('q11', 'ethics', 'Elena’s primary care provider calls to coordinate her care. What must come first?', ['R5'], [
      O('a', 'Obtain her informed consent and release before sharing any clinical information with the primary care provider', 3,
        { r: 'Get a valid release before coordinating', approach: 'Secure consent first', why: 'Coordination requires a valid release of information', keys: ['provider coordination', 'protected information'], mistake: 'Disclosing before obtaining consent' }),
      O('b', 'Share the relevant clinical information right away, since coordinating with her physician is clearly in her own best interest', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume consent', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Refuse to coordinate with the physician at all so that her counseling remains entirely separate from her medical care', -1,
        { r: 'No coordination undercuts integrated care', approach: 'Siloed-care framing', why: 'Consented coordination benefits bipolar care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Share only her diagnosis with the physician without a release, since a diagnosis alone seems like a harmless detail to provide', -2,
        { r: 'A diagnosis is protected information', approach: 'Partial-disclosure framing', why: 'Even a diagnosis requires authorization to disclose', keys: ['confidentiality'], mistake: 'Disclosing a diagnosis without consent' }),
    ]),
    Q('q12', 'ethics', 'Elena asks the counselor what mood-stabilizer dose she should request. The most appropriate response is to:', ['R5'], [
      O('a', 'Explain that dosing is the prescriber’s decision and offer, with consent, to coordinate her questions and progress with them', 3,
        { r: 'Defer dosing; coordinate with consent', approach: 'Respect scope and coordinate', why: 'Medication dosing is outside counselor scope', keys: ['asks about dose', 'scope limit'], mistake: 'Advising on a specific medication dose' }),
      O('b', 'Suggest a typical starting dose that tends to work for most people who have bipolar II disorder like hers does', -2,
        { r: 'Naming a dose exceeds scope', approach: 'Prescriptive advice', why: 'Counselors do not recommend doses', keys: ['no prescriptive authority'], mistake: 'Overstepping into medication management' }),
      O('c', 'Tell her to ask for the highest dose available so that her mood is sure to stay completely stable going forward', -2,
        { r: 'Directing dosing is unsafe and out of scope', approach: 'Maximize-dose framing', why: 'Dose decisions require medical evaluation', keys: ['safety risk'], mistake: 'Giving specific pharmacologic direction' }),
      O('d', 'Say medication dosing has nothing to do with counseling and decline to help her prepare for the conversation in any way', -1,
        { r: 'Refusing to help abandons the need', approach: 'Flat refusal', why: 'Helping her frame questions is appropriate', keys: ['care coordination'], mistake: 'Declining to support communication with the prescriber' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in bipolar disorder. The most ethical course of action is to:', ['R5'], [
      O('a', 'Seek consultation and coordinate with a prescriber and team, or refer for the components beyond his demonstrated competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; bipolar care is coordinated and may exceed his scope', keys: ['limited bipolar training', 'medication needs'], mistake: 'Managing complex bipolar care alone without competence' }),
      O('b', 'Continue to manage all of her care alone to preserve the continuity of the relationship he has built with her', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell her that her bipolar disorder is not serious enough to require any psychiatric involvement and continue supportive talks only', -2,
        { r: 'Minimizing the condition fails the client', approach: 'Downplay framing', why: 'Bipolar II warrants psychiatric coordination', keys: ['needs coordination'], mistake: 'Underestimating the need for coordinated care' }),
      O('d', 'Transfer her at once to another provider with no explanation, consultation, or coordinated plan for the transition of care', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D139 — Bulimia Nervosa (F50.2) — Eating — hard
// ============================================================================
const D139 = {
  id: 'ncmhce-D139',
  title: 'Secret binge-purge cycles and intense shame',
  category: 'Eating',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Bulimia Nervosa', code: 'F50.2' },
  diagnosis: { name: 'Bulimia Nervosa', code: 'F50.2' },
  differentialOptions: [
    { id: 'do1', name: 'Bulimia Nervosa', isCorrect: true },
    { id: 'do2', name: 'Binge-Eating Disorder', isCorrect: false },
    { id: 'do3', name: 'Anorexia Nervosa, Restricting Type', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
  ],
  narrative: {
    intake:
      'Chloe Bennett, a 22-year-old graduate student, presents with several months of secret episodes of eating large amounts of food with ' +
      'a sense of loss of control, followed by self-induced vomiting. The cycles happen at least weekly and leave her ashamed and exhausted.',
    session1:
      'She is at a roughly normal body weight and describes self-worth that is heavily tied to her shape and weight. She uses vomiting to ' +
      'compensate after binges and denies prolonged restriction to a significantly low weight, which keeps her out of the anorexia weight range.',
    session2:
      'She reports dental sensitivity, occasional dizziness, and fluctuating mood, and she is frightened by the secrecy and the loss of ' +
      'control. She is ambivalent about treatment, fearing she will be made to gain weight or give up control over her eating entirely.',
  },
  diagnosticRationale:
    'Recurrent binge eating with a sense of loss of control, accompanied by recurrent inappropriate compensatory behavior (self-induced ' +
    'vomiting) occurring at least weekly for three months, with self-evaluation unduly influenced by shape and weight and without the ' +
    'significantly low weight of anorexia, meets DSM-5-TR criteria for bulimia nervosa, distinct from binge-eating disorder and anorexia.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Bulimia nervosa: recurrent binge eating and compensatory behavior weekly for 3 months; self-evaluation tied to shape/weight' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Eating disorders: eating-disorder-focused CBT with medical monitoring as a team' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk in eating disorders' },
    { id: 'R4', source: 'Hays (Assessment)', detail: 'Clinical assessment and coordinating medical evaluation, including electrolytes' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: welfare, danger exceptions, and scope of practice' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a bulimia nervosa diagnosis?', ['R1'], [
      O('a', 'Recurrent binges with loss of control plus compensatory behavior at least weekly for three months, with self-worth tied to shape', 3,
        { r: 'Binges, compensation, frequency, and overvaluation', approach: 'Confirm the core criteria', why: 'DSM-5-TR requires binges and weekly compensation for 3 months with shape/weight overvaluation', keys: ['weekly binge-purge', 'self-worth tied to shape'], mistake: 'Diagnosing from occasional overeating alone' }),
      O('b', 'That she can identify the single stressful event she believes first triggered her binge-and-purge episodes', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her episodes have become more frequent over the past week than they were the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The 3-month weekly pattern is what matters', keys: ['established pattern'], mistake: 'Confusing a recent uptick with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Bulimia is defined by eating and compensatory behavior, not mood criteria', keys: ['eating-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes her presentation from binge-eating disorder?', ['R1'], [
      O('a', 'She uses recurrent compensatory behavior such as self-induced vomiting, which binge-eating disorder does not include', 3,
        { r: 'Presence of compensatory behavior', approach: 'Contrast by compensation', why: 'Binge-eating disorder lacks the regular compensatory behavior bulimia has', keys: ['self-induced vomiting after binges'], mistake: 'Overlooking compensation and calling it binge-eating disorder' }),
      O('b', 'The fact that she eats large amounts of food with a clear sense of loss of control during her binge episodes', -1,
        { r: 'Binges occur in both', approach: 'Binge-presence framing', why: 'Binge eating with loss of control occurs in both', keys: ['shared feature'], mistake: 'Using binges to differentiate' }),
      O('c', 'The shame and the distress that she experiences after each of her binge episodes', -1,
        { r: 'Post-binge distress occurs in both', approach: 'Distress framing', why: 'Distress after binges is shared', keys: ['shared distress'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her episodes tend to be worse during the most stressful weeks of her graduate program', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from anorexia nervosa?', ['R1'], [
      O('a', 'She is at a roughly normal body weight rather than the significantly low weight required for anorexia nervosa', 3,
        { r: 'Normal weight versus significantly low weight', approach: 'Contrast by weight status', why: 'Anorexia requires significantly low weight, which she does not have', keys: ['roughly normal weight', 'denies significantly low weight'], mistake: 'Overlooking weight status in the differential' }),
      O('b', 'The fact that her self-worth is heavily influenced by her shape and her weight, much as she has described to you', -1,
        { r: 'Overvaluation occurs in both', approach: 'Overvaluation framing', why: 'Shape/weight overvaluation is shared between them', keys: ['shared feature'], mistake: 'Using overvaluation to differentiate' }),
      O('c', 'The intense fear and the distress that she experiences around the topic of her eating and her body', -1,
        { r: 'Distress about eating occurs in both', approach: 'Distress framing', why: 'Distress about eating and body is shared', keys: ['shared distress'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her eating tends to become more disordered during the busiest and most stressful weeks of her semester', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'intake', 'Given her vomiting, dizziness, and dental sensitivity, what is the most important first step?', ['R4'], [
      O('a', 'Coordinate an urgent medical evaluation, since purging can cause electrolyte disturbances and other dangerous medical complications', 3,
        { r: 'Medical safety is the first priority', approach: 'Prioritize medical evaluation', why: 'Purging risks electrolyte and cardiac complications requiring medical evaluation', keys: ['vomiting', 'dizziness and dental sensitivity'], mistake: 'Beginning psychotherapy without a medical workup' }),
      O('b', 'Begin weekly cognitive therapy for her body-image concerns and defer any medical evaluation until therapy is well underway', -2,
        { r: 'Deferring medical care is dangerous', approach: 'Therapy-first framing', why: 'Medical stability must be assessed before proceeding', keys: ['medical risk'], mistake: 'Postponing essential medical evaluation' }),
      O('c', 'Order laboratory tests and an electrocardiogram yourself so that you can personally evaluate her medical stability before treatment', -1,
        { r: 'Ordering tests exceeds counselor scope', approach: 'Order-test framing', why: 'Counselors coordinate but do not order labs', keys: ['scope limit'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Accept her reassurance that she feels basically fine and proceed without arranging any medical evaluation for the time being', -2,
        { r: 'Relying on her reassurance is unsafe', approach: 'Defer-to-reassurance framing', why: 'Purging carries hidden medical risk regardless of how she feels', keys: ['minimizes risk'], mistake: 'Skipping a medical workup on her say-so' }),
    ]),
    Q('q5', 'intake', 'Given the seriousness of her condition, what additional risk assessment is most important?', ['R3'], [
      O('a', 'A structured suicide-risk assessment, recognizing that suicide risk is elevated in eating disorders', 3,
        { r: 'Assess elevated suicide risk', approach: 'Screen risk with structure', why: 'Eating disorders carry elevated suicide risk warranting structured screening', keys: ['fluctuating mood', 'shame and exhaustion'], mistake: 'Assessing the eating disorder without screening risk' }),
      O('b', 'A precise count of the exact calories she consumes during a typical binge so the counselor can quantify each episode', -1,
        { r: 'Calorie counting is not the priority', approach: 'Calorie-tally framing', why: 'Risk and medical safety come first', keys: ['safety first'], mistake: 'Prioritizing calorie detail over risk' }),
      O('c', 'A complete reconstruction of her family’s eating habits across at least three prior generations of her family history', 0,
        { r: 'Exhaustive family history is low yield now', approach: 'Family-history framing', why: 'It does not address immediate risk', keys: ['no urgent yield'], mistake: 'Prioritizing depth history over risk' }),
      O('d', 'A detailed log of every time she exercises so the counselor can quantify exactly how much compensatory activity she does', -1,
        { r: 'Activity logging is secondary now', approach: 'Activity-tally framing', why: 'It does not address suicide or medical risk', keys: ['risk first'], mistake: 'Confusing monitoring data with risk assessment' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment framework for Chloe?', ['R2'], [
      O('a', 'Eating-disorder-focused cognitive behavioral therapy within a team that includes medical monitoring', 3,
        { r: 'CBT-ED within a monitored team', approach: 'Apply the guideline', why: 'NICE supports eating-disorder-focused CBT with medical monitoring for bulimia', keys: ['weekly binge-purge', 'medical risk'], mistake: 'Providing solo therapy without medical monitoring' }),
      O('b', 'Solo outpatient counseling focused only on her self-esteem, with no medical monitoring or coordination of any kind', -2,
        { r: 'Solo care without monitoring is unsafe', approach: 'Counseling-only framing', why: 'Medical monitoring is essential given purging', keys: ['medical risk'], mistake: 'Omitting medical oversight' }),
      O('c', 'A primarily insight-oriented exploration of her childhood as the single main route to resolving her binge-purge behavior', -1,
        { r: 'Insight-only is not first-line', approach: 'Depth-only framing', why: 'Eating-disorder-focused CBT is indicated', keys: ['symptom-focused need'], mistake: 'Prioritizing origins over indicated care' }),
      O('d', 'A strict behavioral contract that withholds all sessions on any week that she has a binge-purge episode', -1,
        { r: 'Punitive contingencies harm engagement', approach: 'Punitive-contract framing', why: 'Coercive contingencies are not the indicated model', keys: ['engagement risk'], mistake: 'Using punishment to force change' }),
    ]),
    Q('q7', 'treatment', 'A central target in eating-disorder-focused CBT for her would be:', ['R2'], [
      O('a', 'Interrupting the binge-purge cycle by establishing regular eating and reducing the dietary restraint that drives binges', 3,
        { r: 'Regular eating to interrupt the cycle', approach: 'Target the binge-purge mechanism', why: 'Regular eating and reduced restraint break the binge-purge cycle', keys: ['weekly binge-purge', 'loss of control'], mistake: 'Targeting only the purging without addressing restraint' }),
      O('b', 'Helping her design a stricter daily diet with tighter food rules so that she feels more in control of her eating', -2,
        { r: 'More restriction fuels binges', approach: 'Restriction framing', why: 'Increased restraint tends to trigger more binges', keys: ['dietary restraint'], mistake: 'Reinforcing the restraint that drives binges' }),
      O('c', 'Teaching her a more efficient compensatory routine so that her purging takes up less of her time after each binge', -2,
        { r: 'Optimizing compensation reinforces the disorder', approach: 'Optimize-purging framing', why: 'It accommodates rather than reduces compensation', keys: ['compensation maintained'], mistake: 'Making the compensatory behavior more efficient' }),
      O('d', 'Focusing mainly on relaxation skills so that she feels calmer without addressing her eating patterns or beliefs', -1,
        { r: 'Relaxation alone misses the core', approach: 'Arousal-only framing', why: 'It does not address the binge-purge mechanism', keys: ['core pattern untreated'], mistake: 'Treating arousal while ignoring eating' }),
    ]),
    Q('q8', 'treatment', 'How should care with her medical providers be structured?', ['R4'], [
      O('a', 'Coordinate ongoing medical monitoring, including electrolytes, as part of a team while she engages in psychotherapy', 3,
        { r: 'Ongoing medical monitoring within a team', approach: 'Structure team-based monitoring', why: 'Purging requires ongoing medical monitoring alongside therapy', keys: ['vomiting', 'dizziness'], mistake: 'Treating without medical monitoring' }),
      O('b', 'Personally manage her medical monitoring and electrolyte checks yourself so the care stays within the counseling relationship', -2,
        { r: 'Medical monitoring exceeds counselor scope', approach: 'Self-manage-medical framing', why: 'Medical monitoring belongs with medical providers', keys: ['scope limit'], mistake: 'Taking on medical management' }),
      O('c', 'Avoid involving any medical providers so that her care remains entirely private and contained within counseling alone', -2,
        { r: 'No medical involvement is unsafe', approach: 'Siloed-care framing', why: 'Medical monitoring is essential given purging', keys: ['medical risk'], mistake: 'Omitting necessary medical involvement' }),
      O('d', 'Coordinate with medical providers only if she develops an obvious medical emergency, and not before that point', -1,
        { r: 'Waiting for an emergency is unsafe', approach: 'Reactive-only framing', why: 'Proactive monitoring is needed, not just emergency response', keys: ['ongoing risk'], mistake: 'Delaying monitoring until a crisis' }),
    ]),
    Q('q9', 'counseling', 'Chloe is deeply ashamed about the secrecy of her behavior. The most therapeutic response is to:', ['R2'], [
      O('a', 'Respond with a nonjudgmental, validating stance that reduces shame and supports her engaging openly in treatment', 3,
        { r: 'Reduce shame with a nonjudgmental stance', approach: 'Validate and destigmatize', why: 'Reducing shame supports disclosure and engagement in eating-disorder treatment', keys: ['ashamed of the secrecy', 'frightened by loss of control'], mistake: 'Reacting with judgment or alarm that deepens shame' }),
      O('b', 'Express clear disapproval of the purging so that she fully understands just how harmful and serious the behavior really is', -2,
        { r: 'Disapproval deepens shame and secrecy', approach: 'Disapproval framing', why: 'Shaming responses worsen secrecy and disengagement', keys: ['shame spiral'], mistake: 'Using disapproval to motivate change' }),
      O('c', 'Reassure her quickly that the behavior is not really a big deal and that she should simply try to stop doing it on her own', -1,
        { r: 'Minimizing the disorder is inaccurate', approach: 'Minimize framing', why: 'Bulimia is a serious disorder requiring treatment', keys: ['clinical seriousness'], mistake: 'Downplaying a serious condition' }),
      O('d', 'Provide detailed statistics on how common eating disorders are to logically prove to her that she should not feel ashamed', -1,
        { r: 'Facts alone rarely shift shame', approach: 'Statistical persuasion', why: 'A validating stance works better than data here', keys: ['emotional reasoning'], mistake: 'Answering shame with numbers' }),
    ]),
    Q('q10', 'counseling', 'Chloe is ambivalent, fearing treatment means losing all control over her eating. The most therapeutic response is to:', ['R2'], [
      O('a', 'Validate the fear, explore her ambivalence, and connect treatment to goals she values such as relief from the exhausting cycle', 3,
        { r: 'Validate fear; link care to her values', approach: 'Engage ambivalence collaboratively', why: 'Connecting treatment to her goals builds engagement despite fear', keys: ['fears losing control', 'exhausted by the cycle'], mistake: 'Either dismissing the fear or coercing compliance' }),
      O('b', 'Tell her firmly that she has no real choice and that she simply must stop the binge-purge behavior immediately, like it or not', -1,
        { r: 'Coercion increases resistance', approach: 'Coerce framing', why: 'Coercion tends to harden ambivalence', keys: ['ambivalence'], mistake: 'Forcing the goal before engaging' }),
      O('c', 'Agree to set the goal of changing her eating aside entirely for now so that she stays comfortable and keeps coming in', -2,
        { r: 'Dropping the core goal is unsafe', approach: 'Concede-the-avoidance framing', why: 'Her medical risk makes this unsafe to set aside', keys: ['medical risk'], mistake: 'Abandoning a safety-critical goal' }),
      O('d', 'Provide detailed nutritional facts to logically convince her that her current eating pattern is medically unsustainable', -1,
        { r: 'Facts alone rarely resolve ambivalence', approach: 'Didactic framing', why: 'Evoking her own motivation works better', keys: ['emotional reasoning'], mistake: 'Substituting information for engagement' }),
    ]),
    Q('q11', 'ethics', 'If Chloe’s purging leads to a dangerous electrolyte imbalance and she refuses medical care, the most appropriate consideration is:', ['R5'], [
      O('a', 'That serious, imminent medical risk can justify protective steps, including urgently involving medical providers despite her refusal', 3,
        { r: 'Imminent danger can justify protective action', approach: 'Apply the harm exception', why: 'Serious, imminent medical risk can warrant protective steps', keys: ['dangerous electrolyte imbalance', 'refuses care'], mistake: 'Treating autonomy as absolute when life is at risk' }),
      O('b', 'That her refusal must always be honored without exception, since competent adults may decline any medical care for any reason', -2,
        { r: 'Autonomy is not absolute at imminent risk', approach: 'Absolutist-autonomy framing', why: 'Imminent medical risk can override under safety duties', keys: ['imminent danger'], mistake: 'Treating refusal as absolute despite danger' }),
      O('c', 'That the counselor should keep the deterioration confidential to preserve her trust and avoid upsetting her further', -2,
        { r: 'Concealing danger is unsafe', approach: 'Preserve-secrecy framing', why: 'Imminent medical risk requires protective action', keys: ['safety duty'], mistake: 'Prioritizing secrecy over safety' }),
      O('d', 'That the counselor should personally take over decisions about her medical care without involving the medical team at all', -1,
        { r: 'Counselors coordinate, not direct medical care', approach: 'Override-the-team framing', why: 'Medical decisions belong with medical providers', keys: ['scope limit'], mistake: 'Acting outside the counselor role' }),
    ]),
    Q('q12', 'ethics', 'Chloe asks the counselor to keep her eating disorder secret from her parents, who help pay her tuition. She is a competent adult. Best response?', ['R5'], [
      O('a', 'Honor her confidentiality as a competent adult while clarifying the limited situations, such as imminent danger, that could require disclosure', 3,
        { r: 'Protect confidentiality; state its limits', approach: 'Uphold confidentiality and explain limits', why: 'As a competent adult she controls disclosure, except safety-based limits', keys: ['competent adult', 'requests privacy'], mistake: 'Either disclosing without consent or promising absolute secrecy' }),
      O('b', 'Inform her parents anyway, since they are paying her tuition and therefore have a right to know about her health condition', -2,
        { r: 'Paying tuition does not authorize disclosure', approach: 'Payer-right framing', why: 'Payment does not grant a right to her protected information', keys: ['no valid release'], mistake: 'Disclosing to parents without consent' }),
      O('c', 'Promise her that nothing whatsoever will ever be disclosed to anyone under any circumstances throughout her entire treatment', -2,
        { r: 'Absolute confidentiality is inaccurate', approach: 'Overpromise framing', why: 'Safety-based limits to confidentiality exist', keys: ['danger exception'], mistake: 'Guaranteeing unconditional secrecy' }),
      O('d', 'Tell her that because her parents pay her tuition the parents are automatically entitled to regular updates on her treatment', -2,
        { r: 'Payment does not entitle third parties to information', approach: 'Payer-entitlement framing', why: 'Only a valid release permits disclosure', keys: ['confidentiality'], mistake: 'Assuming payers are owed updates' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in eating-disorder treatment. The most ethical course of action is to:', ['R5'], [
      O('a', 'Seek consultation and coordinate with or refer to clinicians and a team competent in eating-disorder care', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; bulimia needs specialized, monitored team care', keys: ['limited eating-disorder training', 'medical risk'], mistake: 'Managing a high-risk eating disorder alone without competence' }),
      O('b', 'Continue treating her entirely on his own to preserve the continuity of the relationship he has already established with her', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Reassure her that her condition is not serious enough to require any specialized care and keep seeing her for supportive talks', -2,
        { r: 'Minimizing the illness fails the client', approach: 'Downplay framing', why: 'Bulimia carries serious medical risk', keys: ['medical risk'], mistake: 'Underestimating the need for specialist care' }),
      O('d', 'Transfer her immediately to another provider with no explanation, consultation, or coordinated plan for her transition of care', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

module.exports = { CASES: [D135, D136, D137, D138, D139] };
