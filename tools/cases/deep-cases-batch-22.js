// ============================================================================
// deep-cases-batch-22.js — NCMHCE deep cases, batch 22 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Four exam-deep clinical simulations (13 items each, sections [5,4,4]), all
// difficulty: hard. Second, distinct scenarios for already-covered Anxiety
// diagnoses, building toward the blueprint's per-category volume (duplication
// is a scenario problem, not a diagnosis problem — dedup.js). The diagnosis is
// GIVEN; items test clinical decision-making across the three derived sections
// (Assessment -> Planning -> Process). On id block D207+:
//   ncmhce-D207  Generalized Anxiety Disorder   (F41.1)
//   ncmhce-D208  Panic Disorder                 (F41.0)
//   ncmhce-D209  Social Anxiety Disorder        (F40.10)
//   ncmhce-D210  Specific Phobia                (F40.218)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-22.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-22');console.log(validateExamDepthSet(CASES))"
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
// D207 — Generalized Anxiety Disorder (F41.1) — Anxiety — hard
// ============================================================================
const D207 = {
  id: 'ncmhce-D207',
  title: 'Years of uncontrollable worry across health, money, and family',
  category: 'Anxiety',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Generalized Anxiety Disorder', code: 'F41.1' },
  diagnosis: { name: 'Generalized Anxiety Disorder', code: 'F41.1' },
  differentialOptions: [
    { id: 'do1', name: 'Generalized Anxiety Disorder', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Panic Disorder', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
  ],
  narrative: {
    intake:
      'Harold Nguyen, a 58-year-old, describes more than a year of excessive, hard-to-control worry across many areas—his health, finances, and his ' +
      'adult children—accompanied by restlessness, muscle tension, irritability, fatigue, and trouble sleeping, present more days than not.',
    session1:
      'His worry is diffuse and future-oriented across multiple domains rather than tied to discrete panic attacks or a single stressor, and it has ' +
      'been chronic and pervasive rather than a brief reaction. His mood is anxious rather than primarily depressed.',
    session2:
      'He denies discrete surges of peaking fear with physical symptoms and his worry long predates any recent event. The counselor screens his ' +
      'suicide risk, finds none, and plans evidence-based therapy for generalized anxiety with a medication referral offered.',
  },
  diagnosticRationale:
    'Excessive, difficult-to-control worry about multiple domains, present more days than not for at least six months, with associated restlessness, ' +
    'muscle tension, fatigue, irritability, and sleep disturbance, best fits generalized anxiety disorder, distinct from a primary depressive ' +
    'disorder, panic disorder, and a stressor-bound adjustment reaction.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'GAD: excessive worry more days than not for 6+ months across domains; restlessness, tension, fatigue, sleep' },
    { id: 'R2', source: 'NICE guidelines', detail: 'GAD: stepped care and evidence-based psychotherapy (CBT) as first-line' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Cognitive-behavioral approach, worry management, and the working alliance' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., C.2.: welfare, safety, coordination, and competence' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support generalized anxiety disorder?', ['R1'], [
      O('a', 'Excessive, hard-to-control worry across multiple domains, more days than not for at least six months, with associated symptoms', 3,
        { r: 'Chronic multi-domain worry with symptoms', approach: 'Confirm the core criteria', why: 'GAD requires excessive, hard-to-control worry across domains most days for six months with associated physical and cognitive symptoms', keys: ['worry about health, finances, family', 'restlessness, tension, poor sleep'], mistake: 'Diagnosing GAD without confirming the chronic, multi-domain, hard-to-control pattern' }),
      O('b', 'Mainly whether Harold is able to identify one single specific event somewhere in his past that he is personally quite convinced first started off the whole of his long-standing tendency to worry so much about things', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not the defining feature of GAD', keys: ['syndrome-based focus'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his worry has gotten a little worse over the past few days than earlier in the week', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The chronic, pervasive pattern, not the exact recent trajectory, defines GAD', keys: ['chronic pattern'], mistake: 'Confusing the recent course with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is an anxiety disorder, not a manic episode', keys: ['anxiety-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes this from a primary depressive disorder?', ['R1'], [
      O('a', 'The core disturbance is excessive future-oriented worry and tension, not pervasive depressed mood and anhedonia', 3,
        { r: 'Worry and tension, not depressed mood', approach: 'Contrast the core disturbance', why: 'Depression centers on depressed mood and anhedonia; his core disturbance is excessive future-oriented worry and tension', keys: ['worry across domains', 'anxious rather than depressed'], mistake: 'Reading anxious worry as a primary depressive disorder' }),
      O('b', 'The fact that Harold is quite clearly feeling really rather keyed-up and tense and on edge and generally worried about a good many different things across most of the various days of his week at the moment', -1,
        { r: 'Distress occurs in both', approach: 'Distress framing', why: 'Distress and tension can occur in both; the core disturbance differs', keys: ['shared feature'], mistake: 'Using general distress to differentiate' }),
      O('c', 'The fatigue and the poor sleep that he describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Fatigue and poor sleep occur in both; the core disturbance differs', keys: ['shared symptoms'], mistake: 'Reading nonspecific symptoms as decisive' }),
      O('d', 'The way his worry dips a little on the weekends when his schedule is lighter', 0,
        { r: 'Schedule effects are nonspecific', approach: 'Schedule framing', why: 'A lighter schedule does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading a schedule effect' }),
    ]),
    Q('q3', 'core', 'How does this differ from panic disorder?', ['R1'], [
      O('a', 'His anxiety is persistent, diffuse worry, not recurrent discrete surges of peaking fear with physical symptoms', 3,
        { r: 'Diffuse worry versus discrete panic surges', approach: 'Contrast the anxiety pattern', why: 'Panic disorder features recurrent discrete attacks of peaking fear; his is persistent, diffuse worry without such surges', keys: ['no discrete peaking attacks', 'chronic diffuse worry'], mistake: 'Reading generalized worry as panic disorder' }),
      O('b', 'The fact that across most of his days Harold really does spend a great deal of his time feeling genuinely anxious and worried and tense and generally on edge about quite a lot of the different things that are going on in his life', -1,
        { r: 'Anxiety occurs in both', approach: 'Anxiety framing', why: 'Anxiety occurs in both; the discrete-attack pattern is what differs', keys: ['shared feature'], mistake: 'Using anxiety itself to differentiate' }),
      O('c', 'The tension and the restlessness that he describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Tension and restlessness occur in both; the attack pattern differs', keys: ['shared symptoms'], mistake: 'Reading nonspecific symptoms as decisive' }),
      O('d', 'The way his worry feels a little worse on days he has slept poorly', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse worry after poor sleep does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q4', 'core', 'How does this differ from an adjustment disorder with anxiety?', ['R1'], [
      O('a', 'His worry is chronic and pervasive across domains and predates any recent stressor, not a time-limited reaction to one', 3,
        { r: 'Chronic, pervasive, predates any stressor', approach: 'Contrast chronicity with a stressor reaction', why: 'An adjustment disorder is a time-limited reaction to a recent stressor; his worry is chronic, pervasive, and predates any such event', keys: ['over a year of worry', 'predates recent events'], mistake: 'Attributing chronic, pervasive GAD to a recent stressor' }),
      O('b', 'The fact that there has very likely been at least some degree of ordinary stress and difficulty present here and there in his life across the recent stretch of months, as there tends to be for most people', -1,
        { r: 'Stress can be present in both', approach: 'Stressor framing', why: 'Stress can accompany both; the chronic pervasive pattern predating any stressor is what differs', keys: ['shared feature'], mistake: 'Using the presence of stress to differentiate' }),
      O('c', 'The worry and the tension that he feels about his current circumstances', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress occurs in both; the chronicity and breadth differ', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way his worry feels a little worse during especially busy weeks', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening during busy times does not distinguish the two', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q5', 'intake', 'What assessment step should not be skipped despite the anxious, non-suicidal picture?', ['R3'], [
      O('a', 'A structured suicide-risk assessment, since risk is screened even when anxiety, not depression, predominates', 3,
        { r: 'Structured suicide-risk assessment', approach: 'Screen risk directly', why: 'Suicide risk is screened as standard practice even when anxiety predominates', keys: ['chronic distress', 'sleep and irritability'], mistake: 'Skipping suicide-risk screening because the picture looks purely anxious' }),
      O('b', 'Mainly getting a very complete and exhaustive accounting of every worry he has ever had about his finances across the entire span of his adult life before turning at all to the question of his present safety', -2,
        { r: 'Deferring safety is unsafe', approach: 'History-first framing', why: 'An exhaustive worry inventory does not displace assessing current suicide risk', keys: ['safety first'], mistake: 'Sequencing safety behind background data' }),
      O('c', 'Assuming there is no risk because his problem is anxiety rather than depression', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'An anxious presentation does not rule out risk; structured screening is still done', keys: ['assess regardless'], mistake: 'Dismissing risk based on the presentation type' }),
      O('d', 'Focusing only on relaxation tips for now and returning to any safety questions much later', -1,
        { r: 'Sequencing safety behind tips is unsafe', approach: 'Single-issue framing', why: 'Relaxation guidance does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment approach?', ['R2'], [
      O('a', 'Offer evidence-based CBT for GAD (worry management, cognitive and relaxation strategies) and coordinate a medication referral', 3,
        { r: 'Evidence-based CBT plus medication referral', approach: 'Match to the guideline', why: 'GAD is treated first-line with evidence-based CBT and a coordinated medication referral for the client to consider', keys: ['chronic multi-domain worry', 'functional impact'], mistake: 'Offering only vague reassurance, or prescribing/directing medication outside scope' }),
      O('b', 'Simply telling Harold in a reassuring sort of way that he really just worries far too much about everything and that he should try his best to relax more and to stop thinking about all of it so much entirely on his own', -1,
        { r: 'Generic advice is not treatment', approach: 'Reassurance framing', why: '“Just relax and stop worrying” is not evidence-based care for GAD', keys: ['active treatment'], mistake: 'Substituting generic advice for treatment' }),
      O('c', 'Starting him on an anti-anxiety medication that you will select and adjust yourself over time', -2,
        { r: 'Prescribing is outside scope', approach: 'Prescribe framing', why: 'Counselors do not select or adjust medication; that is referred to a prescriber', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Focusing sessions only on his sleep and leaving the worry itself unaddressed', -1,
        { r: 'A narrow focus is inadequate', approach: 'Narrow-focus framing', why: 'Sleep alone does not treat GAD; the worry is addressed directly', keys: ['treat the worry'], mistake: 'Addressing only one symptom' }),
    ]),
    Q('q7', 'treatment', 'What core CBT strategy is most appropriate for his worry?', ['R4'], [
      O('a', 'Help him identify and test anxious predictions and build worry-management and problem-solving skills', 3,
        { r: 'Test predictions; build worry-management skills', approach: 'Apply cognitive-behavioral worry management', why: 'CBT for GAD helps him identify and test anxious predictions and build worry-management and problem-solving skills', keys: ['catastrophic predictions', 'hard-to-control worry'], mistake: 'Offering only passive listening without teaching worry-management skills' }),
      O('b', 'Simply advising Harold in a firm sort of way that from now on he really just needs to try as hard as he possibly can to completely stop and fully suppress every single anxious thought the very instant that it happens to enter his mind', -1,
        { r: 'Thought suppression backfires', approach: 'Suppression framing', why: 'Trying to suppress all anxious thoughts tends to backfire; skills-based worry management helps', keys: ['manage, not suppress'], mistake: 'Advising suppression instead of skills' }),
      O('c', 'Focusing the sessions mainly on cataloguing every worry of the week in exhaustive detail each time', -1,
        { r: 'Cataloguing worries is not the skill', approach: 'Catalogue framing', why: 'Listing every worry without skills does not reduce it', keys: ['skills-based work'], mistake: 'Centering sessions on the worry list' }),
      O('d', 'Telling him counseling cannot help unless he first stops worrying on his own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Managing the worry is the work, not a precondition for it', keys: ['engagement matters'], mistake: 'Making care contingent on symptom resolution' }),
    ]),
    Q('q8', 'treatment', 'How should progress be monitored over treatment?', ['R2'], [
      O('a', 'Track worry severity and functioning with a measurement-based approach and adjust the plan accordingly', 3,
        { r: 'Measurement-based monitoring', approach: 'Measure and adjust', why: 'GAD care uses measurement-based tracking of worry severity and functioning to guide adjustments', keys: ['measurable worry', 'chronic pattern'], mistake: 'Continuing indefinitely without tracking response or adjusting the plan' }),
      O('b', 'Simply assuming that so long as Harold keeps on coming to each of his weekly appointments the treatment must obviously be working perfectly well for him, without ever actually checking on his worry or his functioning in any structured or systematic way at all', -1,
        { r: 'Attendance is not outcome', approach: 'Attendance framing', why: 'Attendance does not measure response; structured tracking does', keys: ['measure outcomes'], mistake: 'Equating attendance with progress' }),
      O('c', 'Waiting many months before checking whether anything has changed at all', -1,
        { r: 'Infrequent review is inadequate', approach: 'Delay framing', why: 'Response is tracked regularly, not only after long gaps', keys: ['timely review'], mistake: 'Reviewing progress too infrequently' }),
      O('d', 'Judging progress only by how you personally feel about the sessions', -1,
        { r: 'Subjective impression is not measurement', approach: 'Subjective framing', why: 'Progress is judged by measured worry and functioning, not impression', keys: ['objective measures'], mistake: 'Relying on subjective impression' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate the medication referral?', ['R5'], [
      O('a', 'With his consent and a release, coordinate with the prescriber and share what is needed for collaborative care', 3,
        { r: 'Coordinate with consent', approach: 'Coordinate within consent and scope', why: 'Collaborative care depends on consented coordination with the prescriber', keys: ['medication referral', 'collaborative care'], mistake: 'Working in isolation, or sharing without consent' }),
      O('b', 'Simply going ahead and sending the prescriber the entire contents of Harold’s clinical record along with his whole personal history right away without first pausing to obtain his consent, on the general theory that coordinating his care is plainly in his interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Adjusting his medication dose yourself based on how he reports feeling week to week', -2,
        { r: 'Adjusting medication exceeds scope', approach: 'Self-adjust framing', why: 'Counselors do not adjust medication; the prescriber does', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Avoiding any contact with the prescriber so counseling stays entirely separate', -1,
        { r: 'No coordination undercuts care', approach: 'Siloed framing', why: 'Consented coordination supports collaborative care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Harold says he cannot stop worrying about his adult children and it keeps him up at night. The most therapeutic response is to:', ['R4'], [
      O('a', 'Validate the worry, explore the underlying fears, and collaboratively introduce a worry-management strategy', 3,
        { r: 'Validate, explore, introduce a strategy', approach: 'Engage the worry and build a skill', why: 'Validating the worry while exploring the underlying fears and introducing a worry-management strategy engages him and builds coping', keys: ['worry about his children', 'sleep disruption'], mistake: 'Either dismissing the worry or reassuring him without building any worry-management skill' }),
      O('b', 'Simply telling Harold in a very brisk and matter-of-fact way that his adult children are all perfectly fine and that there is really absolutely nothing at all for him to be worrying about, and then moving the conversation briskly along to another topic', -1,
        { r: 'Blanket reassurance misses the work', approach: 'Reassurance framing', why: 'Blanket reassurance does not address the worry process or build skills', keys: ['engage the worry'], mistake: 'Substituting reassurance for skill-building' }),
      O('c', 'Telling him his worry is irrational and he simply needs to stop it', -1,
        { r: 'Dismissing the worry invalidates him', approach: 'Dismiss framing', why: 'Calling the worry irrational and demanding he stop invalidates him and undermines the alliance', keys: ['validate then work'], mistake: 'Invalidating the worry' }),
      O('d', 'Changing the subject so he does not have to think about his worry', -1,
        { r: 'Avoidance misses the work', approach: 'Avoidant framing', why: 'The worry is engaged and worked with, not avoided', keys: ['engage the worry'], mistake: 'Sidestepping the clinical material' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Harold’s engagement and confidence?', ['R4'], [
      O('a', 'Build coping skills he can practice between sessions and reinforce small wins in managing worry', 3,
        { r: 'Practice skills; reinforce small wins', approach: 'Build competence and momentum', why: 'Building practicable coping skills and reinforcing small wins in managing worry supports engagement and confidence', keys: ['wants relief', 'hard-to-control worry'], mistake: 'Keeping the work abstract with no practicable skills or reinforcement of progress' }),
      O('b', 'Simply instructing Harold in a fairly firm and no-nonsense manner that he really just needs to decide to stop worrying so much about everything and to relax himself completely entirely through his own effort and willpower alone starting today', -1,
        { r: 'Willpower framing is unhelpful', approach: 'Toughen-up framing', why: '“Just decide to relax” misunderstands GAD and undermines the alliance', keys: ['skills-based work'], mistake: 'Demanding willpower instead of building skills' }),
      O('c', 'Focusing the sessions mainly on cataloguing every anxious moment of his week in exhaustive detail each time', -1,
        { r: 'Cataloguing is not skill-building', approach: 'Catalogue framing', why: 'Listing anxious moments does not build coping skills', keys: ['forward-focused skills'], mistake: 'Centering sessions on the worry list' }),
      O('d', 'Telling him counseling cannot help unless he first controls his worry on his own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Building control over worry is the work, not a precondition for it', keys: ['engagement matters'], mistake: 'Making care contingent on symptom control' }),
    ]),
    Q('q12', 'ethics', 'Harold asks the counselor to tell his adult children to reassure him whenever he worries. The most appropriate response is to:', ['R5'], [
      O('a', 'Explore the request, explain how reassurance-seeking can maintain worry, and keep involvement consented and clinically sound', 3,
        { r: 'Explore; note reassurance maintains worry; consent', approach: 'Weigh the clinical and ethical sides', why: 'Excessive reassurance-seeking can maintain worry, so the request is explored and any family involvement is consented and clinically appropriate', keys: ['wants family reassurance', 'reassurance maintains worry'], mistake: 'Either arranging family reassurance uncritically or dismissing the request without exploring it' }),
      O('b', 'Simply going ahead and directly contacting each of Harold’s adult children yourself to instruct them that they must now provide him with constant reassurance whenever he worries, entirely without discussing the clinical downside or obtaining his documented consent to that contact', -2,
        { r: 'Uncritical arrangement without consent is improper', approach: 'Assume-consent framing', why: 'Contacting family requires consent and should weigh that reassurance can maintain worry', keys: ['consent and clinical soundness'], mistake: 'Arranging contact without consent or clinical judgment' }),
      O('c', 'Refusing the request flatly without any explanation and simply changing the subject', -1,
        { r: 'A flat refusal without explanation is unhelpful', approach: 'Stonewall framing', why: 'The request is explored and explained, not simply refused', keys: ['explore and explain'], mistake: 'Refusing without engaging the request' }),
      O('d', 'Telling him reassurance from family will instantly cure his anxiety for good', -1,
        { r: 'Overpromising is inaccurate', approach: 'Overpromise framing', why: 'Family reassurance does not cure GAD and can maintain it', keys: ['accurate information'], mistake: 'Giving inaccurate expectations' }),
    ]),
    Q('q13', 'ethics', 'Harold worries that a diagnosis could affect his employment and asks the counselor to keep records vague. The most appropriate response is to:', ['R5'], [
      O('a', 'Explain accurate documentation and confidentiality, disclosing only with consent or a lawful exception', 3,
        { r: 'Accurate records; disclose only with consent/law', approach: 'Balance accurate records and confidentiality', why: 'Records are kept accurate while his information is protected and disclosed only with consent or a lawful exception', keys: ['fears employment impact', 'wants vague records'], mistake: 'Either falsifying or vaguening the record or breaching confidentiality to his employer' }),
      O('b', 'Simply agreeing to deliberately keep the clinical record as vague and incomplete and inaccurate as Harold would like it to be, specifically so that it will not accurately reflect his actual diagnosis or his treatment in case his employer should ever happen to see it', -2,
        { r: 'Falsifying records is improper', approach: 'Vague-records framing', why: 'Documentation is kept accurate; deliberately vaguening it to mislead is improper', keys: ['accurate documentation'], mistake: 'Compromising record accuracy' }),
      O('c', 'Telling him his employer will definitely be informed regardless of consent', -2,
        { r: 'Threatening disclosure is inaccurate and improper', approach: 'Breach framing', why: 'His information is disclosed only with consent or a lawful exception, not to the employer by default', keys: ['confidentiality protected'], mistake: 'Misstating confidentiality protections' }),
      O('d', 'Refusing to discuss documentation or confidentiality and changing the subject', -1,
        { r: 'Evasion undermines informed consent', approach: 'Evasion framing', why: 'Documentation and confidentiality are explained honestly, not evaded', keys: ['transparent limits'], mistake: 'Being evasive about records and confidentiality' }),
    ]),
  ],
};

// ============================================================================
// D208 — Panic Disorder (F41.0) — Anxiety — hard
// ============================================================================
const D208 = {
  id: 'ncmhce-D208',
  title: 'Recurrent panic attacks and repeated emergency visits',
  category: 'Anxiety',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Panic Disorder', code: 'F41.0' },
  diagnosis: { name: 'Panic Disorder', code: 'F41.0' },
  differentialOptions: [
    { id: 'do1', name: 'Panic Disorder', isCorrect: true },
    { id: 'do2', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Social Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Illness Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Bianca Rossi, a 34-year-old, reports recurrent, unexpected surges of intense fear that peak within minutes, with a pounding heart, shortness ' +
      'of breath, chest tightness, dizziness, and a fear of dying. She has had several emergency visits that ruled out a cardiac cause.',
    session1:
      'Her attacks are discrete, out-of-the-blue surges peaking within minutes, followed by persistent worry about further attacks and their meaning, ' +
      'consistent with panic disorder rather than continuous diffuse worry. Her fear centers on the attacks themselves, not social scrutiny.',
    session2:
      'She has begun avoiding places where an attack would be hard to escape and misinterprets bodily sensations as catastrophic. The counselor ' +
      'screens her suicide risk, finds none, and plans panic-focused CBT with interoceptive exposure and a medication referral offered.',
  },
  diagnosticRationale:
    'Recurrent, unexpected panic attacks peaking within minutes, followed by at least a month of persistent concern about further attacks or a ' +
    'maladaptive change in behavior, best fits panic disorder, distinct from generalized anxiety disorder, social anxiety disorder, and illness ' +
    'anxiety disorder, once medical causes are excluded.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Panic disorder: recurrent unexpected panic attacks peaking within minutes; 1+ month concern or behavior change' },
    { id: 'R2', source: 'Barlow PCT', detail: 'Panic control treatment: interoceptive exposure and cognitive restructuring for catastrophic misinterpretation' },
    { id: 'R3', source: 'NICE guidelines', detail: 'Panic disorder: CBT as first-line; stepped care' },
    { id: 'R4', source: 'C-SSRS', detail: 'Structured suicide-risk screening' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., C.2.: welfare, safety, coordination, and competence' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support panic disorder?', ['R1'], [
      O('a', 'Recurrent unexpected panic attacks peaking within minutes, with a month or more of concern or behavior change', 3,
        { r: 'Recurrent unexpected attacks plus concern', approach: 'Confirm the core criteria', why: 'Panic disorder requires recurrent unexpected attacks peaking within minutes plus a month or more of concern about attacks or behavior change', keys: ['out-of-the-blue surges', 'worry about further attacks'], mistake: 'Diagnosing panic disorder without confirming the unexpected, recurrent attacks and the persistent concern' }),
      O('b', 'Mainly whether Bianca is able to point to one single specific event somewhere in her past that she is personally quite convinced first triggered the very beginning of all of her difficulties with these attacks', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not the defining feature of panic disorder', keys: ['syndrome-based focus'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her attacks have gotten a little worse over the past few days than earlier in the week', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The recurrent unexpected pattern, not the exact recent trajectory, defines panic disorder', keys: ['recurrent pattern'], mistake: 'Confusing the recent course with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is an anxiety disorder, not a manic episode', keys: ['anxiety-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes this from generalized anxiety disorder?', ['R1'], [
      O('a', 'Her anxiety centers on discrete, unexpected attacks and fear of more, not continuous diffuse worry across domains', 3,
        { r: 'Discrete attacks versus diffuse worry', approach: 'Contrast the anxiety pattern', why: 'GAD is continuous diffuse worry; hers centers on discrete unexpected attacks and fear of more', keys: ['discrete peaking attacks', 'fear of the attacks'], mistake: 'Reading panic disorder as generalized worry' }),
      O('b', 'The fact that across a good many of her days Bianca really does spend a fair amount of her time feeling genuinely anxious and worried and on edge about various different things that are happening in her life', -1,
        { r: 'Anxiety occurs in both', approach: 'Anxiety framing', why: 'Anxiety occurs in both; the discrete-attack focus is what differs', keys: ['shared feature'], mistake: 'Using anxiety itself to differentiate' }),
      O('c', 'The restlessness and the poor sleep that she describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Restlessness and poor sleep occur in both; the attack pattern differs', keys: ['shared symptoms'], mistake: 'Reading nonspecific symptoms as decisive' }),
      O('d', 'The way her anxiety feels a little worse on especially busy days', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening on busy days does not distinguish the two', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does this differ from social anxiety disorder?', ['R1'], [
      O('a', 'Her attacks are unexpected and center on bodily catastrophe, not fear of scrutiny or embarrassment in social situations', 3,
        { r: 'Unexpected, body-focused, not social scrutiny', approach: 'Contrast the feared focus', why: 'Social anxiety centers on fear of scrutiny; her attacks are unexpected and center on catastrophic bodily sensations', keys: ['fear of dying', 'not fear of judgment'], mistake: 'Reading unexpected panic as social anxiety' }),
      O('b', 'The fact that Bianca really does quite understandably feel genuinely anxious and frightened and distressed during the course of these particular episodes when they happen to come on', -1,
        { r: 'Anxiety occurs in both', approach: 'Anxiety framing', why: 'Anxiety occurs in both; the feared focus is what differs', keys: ['shared feature'], mistake: 'Using anxiety itself to differentiate' }),
      O('c', 'The racing heart and the dizziness that she describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Physical symptoms occur in both; the feared focus differs', keys: ['shared symptoms'], mistake: 'Reading physical symptoms as decisive' }),
      O('d', 'The way her anxiety feels a little worse in warmer, stuffier rooms', 0,
        { r: 'Environmental effects are nonspecific', approach: 'Environment framing', why: 'A stuffy room does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q4', 'core', 'How does this differ from illness anxiety disorder?', ['R1'], [
      O('a', 'Her focus is fear during discrete attacks, not persistent preoccupation with having a serious undiagnosed disease between episodes', 3,
        { r: 'Attack-bound fear versus disease preoccupation', approach: 'Contrast the pattern of concern', why: 'Illness anxiety is a persistent preoccupation with having a disease; her fear is bound to discrete attacks, with cardiac causes excluded', keys: ['fear during attacks', 'cardiac workup negative'], mistake: 'Reading attack-bound fear as a persistent disease preoccupation' }),
      O('b', 'The fact that Bianca really does feel quite frightened and genuinely worried about what might physically be happening to her body during the time that one of these particular episodes is actually taking place', -1,
        { r: 'Bodily fear occurs in both', approach: 'Bodily-fear framing', why: 'Fear about the body can occur in both; the discrete-attack pattern is what differs', keys: ['shared feature'], mistake: 'Using bodily fear to differentiate' }),
      O('c', 'The chest tightness and the shortness of breath that she describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Physical symptoms occur in both; the pattern of concern differs', keys: ['shared symptoms'], mistake: 'Reading physical symptoms as decisive' }),
      O('d', 'The way her worry feels a little worse right after reading health news', 0,
        { r: 'Trigger sensitivity is nonspecific', approach: 'Trigger framing', why: 'Reacting to health news does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading a trigger effect' }),
    ]),
    Q('q5', 'intake', 'What assessment step should not be skipped despite the anxious, non-suicidal picture?', ['R4'], [
      O('a', 'A structured suicide-risk assessment, screened as standard even when panic predominates', 3,
        { r: 'Structured suicide-risk assessment', approach: 'Screen risk directly', why: 'Suicide risk is screened as standard practice even when panic predominates', keys: ['recurrent distress', 'growing avoidance'], mistake: 'Skipping suicide-risk screening because the picture looks purely anxious' }),
      O('b', 'Mainly getting a very complete and exhaustive account of every single one of her past emergency-room visits in fine detail across the years before turning at all to the question of her present safety', -2,
        { r: 'Deferring safety is unsafe', approach: 'History-first framing', why: 'An exhaustive ER-visit history does not displace assessing current suicide risk', keys: ['safety first'], mistake: 'Sequencing safety behind background data' }),
      O('c', 'Assuming there is no risk because her problem is panic rather than depression', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'A panic presentation does not rule out risk; structured screening is still done', keys: ['assess regardless'], mistake: 'Dismissing risk based on the presentation type' }),
      O('d', 'Focusing only on breathing tips for now and returning to any safety questions much later', -1,
        { r: 'Sequencing safety behind tips is unsafe', approach: 'Single-issue framing', why: 'Breathing guidance does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment approach?', ['R2'], [
      O('a', 'Offer panic-focused CBT with interoceptive exposure and cognitive restructuring and coordinate a medication referral', 3,
        { r: 'Panic-focused CBT plus medication referral', approach: 'Match to the guideline', why: 'Panic disorder is treated with panic-focused CBT (interoceptive exposure, cognitive restructuring) and a coordinated medication referral to consider', keys: ['catastrophic misinterpretation', 'avoidance emerging'], mistake: 'Offering only reassurance, or prescribing/directing medication outside scope' }),
      O('b', 'Simply advising Bianca in a reassuring sort of way that the attacks are really nothing at all to worry about and that she should just try her best to avoid any place or situation where one of them might possibly happen to come on', -2,
        { r: 'Encouraging avoidance maintains panic', approach: 'Avoidance framing', why: 'Advising avoidance maintains panic disorder rather than treating it', keys: ['reduce avoidance'], mistake: 'Reinforcing avoidance' }),
      O('c', 'Starting her on an anti-anxiety medication that you will select and adjust yourself over time', -2,
        { r: 'Prescribing is outside scope', approach: 'Prescribe framing', why: 'Counselors do not select or adjust medication; that is referred to a prescriber', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Focusing sessions only on her sleep and leaving the panic itself unaddressed', -1,
        { r: 'A narrow focus is inadequate', approach: 'Narrow-focus framing', why: 'Sleep alone does not treat panic disorder; the panic is addressed directly', keys: ['treat the panic'], mistake: 'Addressing only one symptom' }),
    ]),
    Q('q7', 'treatment', 'What core CBT strategy targets her catastrophic misinterpretation of bodily sensations?', ['R2'], [
      O('a', 'Interoceptive exposure paired with cognitive restructuring to recalibrate the meaning of bodily sensations', 3,
        { r: 'Interoceptive exposure and restructuring', approach: 'Target the misinterpretation', why: 'Interoceptive exposure plus cognitive restructuring directly recalibrates the catastrophic meaning she attaches to bodily sensations', keys: ['fear of bodily sensations', 'catastrophic predictions'], mistake: 'Offering only relaxation or reassurance without addressing the catastrophic misinterpretation' }),
      O('b', 'Simply advising Bianca in a firm sort of way that whenever she starts to notice any of the frightening physical sensations she should immediately do everything she possibly can to distract herself completely and to avoid ever paying them any attention at all', -1,
        { r: 'Distraction/avoidance maintains fear', approach: 'Distraction framing', why: 'Habitual distraction and avoidance of sensations maintain the fear rather than recalibrating it', keys: ['exposure, not avoidance'], mistake: 'Reinforcing avoidance of sensations' }),
      O('c', 'Focusing the sessions mainly on cataloguing every attack in exhaustive detail each time', -1,
        { r: 'Cataloguing attacks is not the intervention', approach: 'Catalogue framing', why: 'Rehearsing attacks without exposure does not recalibrate the fear', keys: ['active intervention'], mistake: 'Centering sessions on the attack log' }),
      O('d', 'Telling her counseling cannot help unless she first stops the attacks on her own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Treating the attacks is the work, not a precondition for it', keys: ['engagement matters'], mistake: 'Making care contingent on symptom resolution' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor address her emerging avoidance?', ['R3'], [
      O('a', 'Use graded in-vivo exposure to gradually re-enter avoided situations and prevent agoraphobic spread', 3,
        { r: 'Graded in-vivo exposure to avoided situations', approach: 'Reverse avoidance early', why: 'Graded in-vivo exposure to avoided situations reverses the avoidance and prevents agoraphobic spread', keys: ['avoiding hard-to-escape places', 'early avoidance'], mistake: 'Allowing or encouraging avoidance, which entrenches and expands it' }),
      O('b', 'Simply reassuring Bianca that it is perfectly fine and completely understandable for her to go right on avoiding every single one of the various places and situations where she feels that an attack might possibly come on, for as long as she likes', -2,
        { r: 'Sanctioning avoidance entrenches it', approach: 'Permission framing', why: 'Endorsing broad avoidance entrenches and expands it', keys: ['reduce avoidance'], mistake: 'Reinforcing avoidance' }),
      O('c', 'Pushing her into the most feared situation all at once with no graded plan', -1,
        { r: 'Flooding without a plan is inappropriate', approach: 'Flooding framing', why: 'Exposure is graded and collaborative, not an abrupt plunge into the worst situation', keys: ['graded exposure'], mistake: 'Skipping a graded hierarchy' }),
      O('d', 'Leaving avoidance entirely unaddressed in the plan', -1,
        { r: 'Ignoring avoidance is inadequate', approach: 'Ignore framing', why: 'Avoidance is central to panic maintenance and is addressed in the plan', keys: ['address avoidance'], mistake: 'Omitting avoidance from treatment' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with her medical providers?', ['R5'], [
      O('a', 'With her consent, coordinate so medical causes stay excluded and care is not duplicated, sharing what is needed', 3,
        { r: 'Coordinate with consent; avoid duplication', approach: 'Coordinate within consent and scope', why: 'With consent, coordination ensures medical causes remain excluded and care is not duplicated', keys: ['repeated ER visits', 'cardiac workup done'], mistake: 'Either coordinating without consent or ignoring the medical picture entirely' }),
      O('b', 'Simply telling Bianca in a confident and definitive way yourself that there is certainly nothing at all physically wrong with her and that she therefore never needs to see any medical provider again about any of these symptoms under any circumstances at all going forward', -2,
        { r: 'Ruling out medical causes exceeds scope', approach: 'Medical-clearance framing', why: 'Counselors do not provide medical clearance; that is the medical team’s role', keys: ['scope limits'], mistake: 'Overstepping into medical judgment' }),
      O('c', 'Forwarding her entire record to every provider without her consent', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('d', 'Avoiding any contact with her medical providers so counseling stays entirely separate', -1,
        { r: 'No coordination undercuts care', approach: 'Siloed framing', why: 'Consented coordination supports safe, non-duplicative care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Mid-session, Bianca feels an attack beginning and says she thinks she is dying. The most therapeutic response is to:', ['R2'], [
      O('a', 'Stay calm, coach her through the attack, and use it as an in-the-moment chance to test her catastrophic prediction', 3,
        { r: 'Coach through it; test the prediction', approach: 'Use the moment therapeutically', why: 'Calmly coaching her through the attack and testing the catastrophic prediction in the moment is a powerful, panic-focused intervention', keys: ['attack beginning in session', 'fear of dying'], mistake: 'Either reacting with alarm or ending the session instead of coaching her through the attack' }),
      O('b', 'Simply reacting with a good deal of visible alarm and concern yourself and then immediately calling for emergency medical services and cutting the session short, despite the fact that a full cardiac workup has very recently already excluded any medical cause', -1,
        { r: 'Overreacting reinforces catastrophe', approach: 'Alarm framing', why: 'Reacting with alarm and calling EMS after a negative workup reinforces the catastrophic belief', keys: ['coach, do not alarm'], mistake: 'Reinforcing the catastrophic interpretation' }),
      O('c', 'Telling her to just ignore it completely and carry on as if nothing is happening', -1,
        { r: 'Dismissing the moment misses the work', approach: 'Dismiss framing', why: 'The attack is coached through and used therapeutically, not dismissed', keys: ['engage the moment'], mistake: 'Missing a valuable in-session opportunity' }),
      O('d', 'Ending the session immediately so she can go home and recover', -1,
        { r: 'Ending abruptly wastes the opportunity', approach: 'Escape framing', why: 'The in-session attack is a therapeutic opportunity, not a reason to end early', keys: ['use the moment'], mistake: 'Avoiding a valuable opportunity' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Bianca’s confidence between sessions?', ['R2'], [
      O('a', 'Assign graded exposure and coping practice she can do between sessions and reinforce her successes', 3,
        { r: 'Between-session exposure and reinforced wins', approach: 'Build mastery through practice', why: 'Graded exposure and coping practice between sessions, with reinforced successes, builds her confidence and reduces avoidance', keys: ['wants her life back', 'emerging avoidance'], mistake: 'Keeping the work in-session only, with no between-session practice or reinforcement' }),
      O('b', 'Simply telling Bianca in a fairly firm and matter-of-fact way that she really just needs to force herself to completely stop being afraid of the attacks and to get back to absolutely all of her normal activities immediately entirely on her own through willpower alone', -1,
        { r: 'Willpower framing is unhelpful', approach: 'Toughen-up framing', why: '“Just stop being afraid” misunderstands panic and undermines the alliance', keys: ['graded practice'], mistake: 'Demanding willpower instead of graded practice' }),
      O('c', 'Focusing the sessions mainly on cataloguing every attack of the week in exhaustive detail each time', -1,
        { r: 'Cataloguing is not practice', approach: 'Catalogue framing', why: 'Listing attacks without practice does not build confidence', keys: ['forward-focused practice'], mistake: 'Centering sessions on the attack log' }),
      O('d', 'Telling her counseling cannot help unless she first stops all the attacks herself', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Reducing the attacks is the work, not a precondition for it', keys: ['engagement matters'], mistake: 'Making care contingent on symptom resolution' }),
    ]),
    Q('q12', 'ethics', 'Bianca asks the counselor to write that she is medically unable to work due to the attacks. The most appropriate response is to:', ['R5'], [
      O('a', 'Clarify your role and scope, document only what you can clinically support, and coordinate any medical determination appropriately', 3,
        { r: 'Stay within scope; document what you can support', approach: 'Practice within scope on documentation', why: 'The counselor documents only what is clinically supportable within scope and defers medical work-capacity determinations to appropriate providers', keys: ['requests a work-excuse note', 'medical determination'], mistake: 'Writing a medical work-incapacity statement outside the counselor’s scope or unsupported by the clinical picture' }),
      O('b', 'Simply going ahead and writing out exactly the sort of formal medical statement that Bianca has asked for, declaring in definite terms that she is entirely medically unable to work, even though that is really a medical determination that falls well outside of the counselor’s actual scope of practice', -2,
        { r: 'A medical determination exceeds scope', approach: 'Overreach framing', why: 'Medical work-capacity determinations are outside the counselor’s scope', keys: ['scope limits'], mistake: 'Documenting outside scope' }),
      O('c', 'Refusing to discuss documentation at all and simply changing the subject', -1,
        { r: 'Evasion is unhelpful', approach: 'Evasion framing', why: 'The counselor explains scope and what can be documented, rather than evading', keys: ['explain scope'], mistake: 'Being evasive about documentation' }),
      O('d', 'Writing whatever she wants as long as she keeps attending sessions', -2,
        { r: 'Documenting to please the client is improper', approach: 'Appease framing', why: 'Documentation reflects the clinical picture and scope, not what retains the client', keys: ['accurate documentation'], mistake: 'Compromising documentation integrity' }),
    ]),
    Q('q13', 'ethics', 'Bianca worries the counselor will think she is "crazy" and asks whether panic means she is losing her mind. The most appropriate response is to:', ['R4'], [
      O('a', 'Provide accurate psychoeducation that panic disorder is common and treatable and does not mean losing her mind', 3,
        { r: 'Accurate, destigmatizing psychoeducation', approach: 'Educate and destigmatize honestly', why: 'Accurate psychoeducation that panic disorder is common and treatable and is not “losing her mind” reduces stigma and supports engagement', keys: ['fears being “crazy”', 'wants understanding'], mistake: 'Either giving vague reassurance or failing to correct the frightening misconception with accurate information' }),
      O('b', 'Simply telling Bianca in a very quick and breezy sort of way that she should not worry herself about any of that at all, and then moving the conversation briskly along to another topic without ever actually giving her any real accurate information about what panic disorder is', -1,
        { r: 'Vague reassurance misses the chance', approach: 'Reassurance framing', why: 'Quick reassurance without accurate psychoeducation leaves the frightening misconception in place', keys: ['accurate information'], mistake: 'Substituting vague reassurance for psychoeducation' }),
      O('c', 'Agreeing that panic attacks are a sign of a serious loss of sanity', -2,
        { r: 'Confirming the fear is inaccurate and harmful', approach: 'Confirm-fear framing', why: 'Confirming the misconception is inaccurate and increases distress and stigma', keys: ['correct the misconception'], mistake: 'Reinforcing a harmful, inaccurate belief' }),
      O('d', 'Refusing to answer and telling her it does not matter what panic means', -1,
        { r: 'Dismissing the question is unhelpful', approach: 'Dismiss framing', why: 'Her question is answered with accurate information, not dismissed', keys: ['engage the question'], mistake: 'Dismissing a meaningful concern' }),
    ]),
  ],
};

// ============================================================================
// D209 — Social Anxiety Disorder (F40.10) — Anxiety — hard
// ============================================================================
const D209 = {
  id: 'ncmhce-D209',
  title: 'Fear of scrutiny that is stalling a career',
  category: 'Anxiety',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Social Anxiety Disorder', code: 'F40.10' },
  diagnosis: { name: 'Social Anxiety Disorder', code: 'F40.10' },
  differentialOptions: [
    { id: 'do1', name: 'Social Anxiety Disorder', isCorrect: true },
    { id: 'do2', name: 'Panic Disorder', isCorrect: false },
    { id: 'do3', name: 'Avoidant Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Autism Spectrum Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Dev Kapoor, a 27-year-old, describes intense fear of being judged or humiliated in meetings and presentations, with blushing, trembling, and a ' +
      'racing heart, leading him to avoid speaking up and to turn down a promotion that requires presenting.',
    session1:
      'His fear is specifically of scrutiny and negative evaluation in performance and social situations, out of proportion to any real threat, rather ' +
      'than unexpected attacks or a pervasive social-communication difficulty. He recognizes the fear as excessive.',
    session2:
      'He wants relationships and advancement and enjoys one-to-one contact with trusted people, arguing against a pervasive personality or ' +
      'developmental pattern. The counselor screens his suicide risk, finds none, and plans exposure-based CBT with a medication referral offered.',
  },
  diagnosticRationale:
    'Marked fear of social or performance situations involving possible scrutiny, out of proportion to the actual threat and leading to avoidance and ' +
    'impairment, best fits social anxiety disorder, distinct from panic disorder, avoidant personality disorder, and autism spectrum disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Social anxiety disorder: marked fear of scrutiny in social/performance situations; avoidance; out of proportion' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Social anxiety disorder: CBT with exposure as first-line' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Exposure-based cognitive-behavioral approach and the working alliance' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., C.2.: welfare, safety, coordination, and competence' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support social anxiety disorder?', ['R1'], [
      O('a', 'Marked fear of scrutiny in social or performance situations, out of proportion to the threat, with avoidance and impairment', 3,
        { r: 'Fear of scrutiny with avoidance and impairment', approach: 'Confirm the core criteria', why: 'Social anxiety disorder requires marked, disproportionate fear of scrutiny in social or performance situations, with avoidance and impairment', keys: ['fear of judgment in meetings', 'avoids presenting, turned down a promotion'], mistake: 'Diagnosing social anxiety without confirming the scrutiny-focused fear, avoidance, and impairment' }),
      O('b', 'Mainly whether Dev is able to identify one single specific past event that he is personally quite convinced was really the original underlying cause that first started off all of his difficulties with social situations', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not the defining feature of social anxiety disorder', keys: ['syndrome-based focus'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his anxiety has gotten a little worse over the past few days than earlier in the week', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The scrutiny-focused pattern, not the exact recent trajectory, defines the disorder', keys: ['scrutiny-focused pattern'], mistake: 'Confusing the recent course with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is an anxiety disorder, not a manic episode', keys: ['anxiety-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes this from panic disorder?', ['R1'], [
      O('a', 'His fear is cued by social scrutiny and evaluation, not unexpected out-of-the-blue attacks focused on bodily catastrophe', 3,
        { r: 'Scrutiny-cued, not unexpected attacks', approach: 'Contrast the trigger and focus', why: 'Panic disorder features unexpected attacks focused on bodily catastrophe; his fear is cued by social scrutiny and evaluation', keys: ['fear of judgment', 'cued by performance situations'], mistake: 'Reading scrutiny-cued anxiety as unexpected panic disorder' }),
      O('b', 'The fact that during these particular social and performance situations Dev really does quite genuinely feel very anxious and physically activated and generally distressed and uncomfortable in a fairly noticeable way', -1,
        { r: 'Anxiety occurs in both', approach: 'Anxiety framing', why: 'Anxiety and physical symptoms occur in both; the trigger and focus differ', keys: ['shared feature'], mistake: 'Using anxiety itself to differentiate' }),
      O('c', 'The blushing and the racing heart that he describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Physical symptoms occur in both; the trigger and focus differ', keys: ['shared symptoms'], mistake: 'Reading physical symptoms as decisive' }),
      O('d', 'The way his anxiety feels a little worse in warmer, crowded rooms', 0,
        { r: 'Environmental effects are nonspecific', approach: 'Environment framing', why: 'A crowded room does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q3', 'core', 'How does this differ from avoidant personality disorder?', ['R1'], [
      O('a', 'His difficulty is situation-focused anxiety he sees as excessive, not a pervasive lifelong pattern of feeling inadequate across all relationships', 3,
        { r: 'Situational anxiety versus a pervasive trait pattern', approach: 'Contrast focal anxiety with a trait pattern', why: 'Avoidant PD is a pervasive lifelong pattern of felt inadequacy; his is situation-focused anxiety he recognizes as excessive, and he enjoys trusted one-to-one contact', keys: ['enjoys trusted one-to-one contact', 'wants relationships and advancement'], mistake: 'Reframing focal social anxiety as a full personality disorder' }),
      O('b', 'The fact that Dev really does quite consistently tend to feel genuinely anxious and self-conscious and uncomfortable and on edge whenever he happens to find himself in these particular kinds of social or performance situations', -1,
        { r: 'Social anxiety occurs in both', approach: 'Anxiety framing', why: 'Social anxiety can occur in both; the pervasive trait pattern is what differs', keys: ['shared feature'], mistake: 'Using social anxiety itself to differentiate' }),
      O('c', 'The self-consciousness and the avoidance that he describes right now', -1,
        { r: 'These features are nonspecific', approach: 'Symptom framing', why: 'Self-consciousness and avoidance occur in both; the pervasiveness differs', keys: ['shared features'], mistake: 'Reading nonspecific features as decisive' }),
      O('d', 'The way his anxiety feels a little worse on days he has slept poorly', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse anxiety after poor sleep does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q4', 'core', 'How does this differ from autism spectrum disorder?', ['R1'], [
      O('a', 'He has intact social understanding and desire for connection with anxiety about evaluation, not a pervasive social-communication difference', 3,
        { r: 'Intact social skill with evaluation anxiety', approach: 'Contrast anxiety with a developmental pattern', why: 'Autism involves pervasive social-communication differences from early development; he has intact social understanding and desire for connection with anxiety about evaluation', keys: ['enjoys connection when comfortable', 'fear centers on evaluation'], mistake: 'Confusing evaluation-focused social anxiety with a pervasive developmental social-communication difference' }),
      O('b', 'The fact that Dev really does quite understandably tend to find a good many of these particular social and performance situations to be genuinely difficult and stressful and uncomfortable for him to have to get through', -1,
        { r: 'Social difficulty occurs in both', approach: 'Difficulty framing', why: 'Finding social situations hard can occur in both; the developmental pattern is what differs', keys: ['shared feature'], mistake: 'Using social difficulty to differentiate' }),
      O('c', 'The discomfort and the avoidance that he describes right now', -1,
        { r: 'These features are nonspecific', approach: 'Symptom framing', why: 'Discomfort and avoidance occur in both; the developmental history differs', keys: ['shared features'], mistake: 'Reading nonspecific features as decisive' }),
      O('d', 'The way his discomfort seems a little worse in louder environments', 0,
        { r: 'Environmental effects are nonspecific', approach: 'Environment framing', why: 'A louder room does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q5', 'intake', 'What assessment step should not be skipped despite the anxious, non-suicidal picture?', ['R3'], [
      O('a', 'A structured suicide-risk assessment, screened as standard even when social anxiety predominates', 3,
        { r: 'Structured suicide-risk assessment', approach: 'Screen risk directly', why: 'Suicide risk is screened as standard practice even when social anxiety predominates', keys: ['isolation and avoidance', 'career setbacks'], mistake: 'Skipping suicide-risk screening because the picture looks purely anxious' }),
      O('b', 'Mainly getting a very complete and exhaustive account of every socially awkward or embarrassing moment he can recall from across his entire school and work history before turning at all to the question of his present safety', -2,
        { r: 'Deferring safety is unsafe', approach: 'History-first framing', why: 'An exhaustive embarrassment history does not displace assessing current suicide risk', keys: ['safety first'], mistake: 'Sequencing safety behind background data' }),
      O('c', 'Assuming there is no risk because his problem is social anxiety rather than depression', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'A social-anxiety presentation does not rule out risk; structured screening is still done', keys: ['assess regardless'], mistake: 'Dismissing risk based on the presentation type' }),
      O('d', 'Focusing only on public-speaking tips for now and returning to any safety questions much later', -1,
        { r: 'Sequencing safety behind tips is unsafe', approach: 'Single-issue framing', why: 'Public-speaking tips do not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment approach?', ['R2'], [
      O('a', 'Offer exposure-based CBT for social anxiety and coordinate a medication referral for him to consider', 3,
        { r: 'Exposure-based CBT plus medication referral', approach: 'Match to the guideline', why: 'Social anxiety disorder is treated first-line with exposure-based CBT and a coordinated medication referral to consider', keys: ['scrutiny-focused fear', 'avoidance and impairment'], mistake: 'Offering only reassurance, or prescribing/directing medication outside scope' }),
      O('b', 'Simply advising Dev in a reassuring sort of way that he really just needs to avoid all of the various presentations and meetings and other performance situations that happen to make him feel so anxious, for as long as he possibly can manage to', -2,
        { r: 'Encouraging avoidance maintains it', approach: 'Avoidance framing', why: 'Advising avoidance maintains social anxiety rather than treating it', keys: ['reduce avoidance'], mistake: 'Reinforcing avoidance' }),
      O('c', 'Starting him on a medication that you will select and adjust yourself over time', -2,
        { r: 'Prescribing is outside scope', approach: 'Prescribe framing', why: 'Counselors do not select or adjust medication; that is referred to a prescriber', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Focusing sessions only on his sleep and leaving the social anxiety unaddressed', -1,
        { r: 'A narrow focus is inadequate', approach: 'Narrow-focus framing', why: 'Sleep alone does not treat social anxiety; the anxiety is addressed directly', keys: ['treat the anxiety'], mistake: 'Addressing only one symptom' }),
    ]),
    Q('q7', 'treatment', 'What core strategy best targets his avoidance and feared predictions?', ['R4'], [
      O('a', 'Graded exposure to feared social and performance situations paired with cognitive restructuring of evaluation fears', 3,
        { r: 'Graded exposure plus cognitive restructuring', approach: 'Target avoidance and beliefs', why: 'Graded exposure to feared situations plus cognitive restructuring of evaluation fears directly targets the maintaining avoidance and beliefs', keys: ['fear of negative evaluation', 'avoids speaking up'], mistake: 'Relying on relaxation or reassurance without graded exposure and cognitive work' }),
      O('b', 'Simply advising Dev in a firm sort of way that from now on he really just needs to keep himself completely away from every meeting and presentation and social gathering that might possibly make him feel anxious for as long as he can', -1,
        { r: 'Sanctioning avoidance maintains it', approach: 'Avoidance framing', why: 'Endorsing broad avoidance maintains social anxiety', keys: ['exposure, not avoidance'], mistake: 'Reinforcing avoidance' }),
      O('c', 'Focusing the sessions mainly on cataloguing every embarrassing moment in exhaustive detail each time', -1,
        { r: 'Cataloguing is not the intervention', approach: 'Catalogue framing', why: 'Rehearsing embarrassments without exposure does not reduce the fear', keys: ['active exposure'], mistake: 'Centering sessions on past embarrassment' }),
      O('d', 'Telling him counseling cannot help unless he first stops feeling anxious on his own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Reducing the anxiety is the work, not a precondition for it', keys: ['engagement matters'], mistake: 'Making care contingent on symptom resolution' }),
    ]),
    Q('q8', 'treatment', 'How should exposure be structured for him?', ['R2'], [
      O('a', 'Collaboratively build a graded hierarchy and work up it step by step, consolidating gains at each level', 3,
        { r: 'Collaborative graded hierarchy', approach: 'Grade the exposure', why: 'A collaboratively built graded hierarchy worked step by step, consolidating gains, is the appropriate exposure structure', keys: ['range of feared situations', 'wants to advance'], mistake: 'Either avoiding exposure or forcing the most feared situation first with no graded plan' }),
      O('b', 'Simply insisting that Dev must immediately give a major high-stakes presentation in front of the largest and most intimidating possible audience right away at the very first session, with no preparation and no graded hierarchy of smaller steps built up beforehand', -1,
        { r: 'Flooding without a plan is inappropriate', approach: 'Flooding framing', why: 'Exposure is graded and collaborative, not an abrupt plunge into the worst situation', keys: ['graded hierarchy'], mistake: 'Skipping a graded hierarchy' }),
      O('c', 'Leaving exposure out entirely and relying only on talking about the fear', -1,
        { r: 'Talk without exposure is insufficient', approach: 'Talk-only framing', why: 'Exposure is central to treating social anxiety, not talk alone', keys: ['include exposure'], mistake: 'Omitting exposure' }),
      O('d', 'Telling him to just avoid the situations until he feels ready on his own someday', -1,
        { r: 'Indefinite avoidance is counter-therapeutic', approach: 'Avoidance framing', why: 'Graded exposure builds readiness; indefinite avoidance maintains the fear', keys: ['graded exposure'], mistake: 'Endorsing avoidance' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate a medication referral if he wants one?', ['R5'], [
      O('a', 'With his consent and a release, coordinate with the prescriber and share what is needed for collaborative care', 3,
        { r: 'Coordinate with consent', approach: 'Coordinate within consent and scope', why: 'Collaborative care depends on consented coordination with the prescriber', keys: ['medication referral', 'collaborative care'], mistake: 'Working in isolation, or sharing without consent' }),
      O('b', 'Simply going ahead and forwarding the entire contents of Dev’s clinical record together with his whole personal history straight to the prescriber right away without first pausing to obtain his consent, on the general theory that coordinating his care is plainly in his interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Adjusting his medication dose yourself based on how he reports feeling week to week', -2,
        { r: 'Adjusting medication exceeds scope', approach: 'Self-adjust framing', why: 'Counselors do not adjust medication; the prescriber does', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Avoiding any contact with the prescriber so counseling stays entirely separate', -1,
        { r: 'No coordination undercuts care', approach: 'Siloed framing', why: 'Consented coordination supports collaborative care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Before an exposure, Dev says he will humiliate himself and everyone will see he is incompetent. The most therapeutic response is to:', ['R4'], [
      O('a', 'Validate the fear, examine the evidence for the prediction, and proceed with a manageable graded step', 3,
        { r: 'Validate, examine evidence, take a graded step', approach: 'Engage the belief and act', why: 'Validating the fear while examining the evidence for the catastrophic prediction and proceeding with a manageable step is core exposure-based work', keys: ['predicts humiliation', 'fear of looking incompetent'], mistake: 'Either canceling the exposure because he is afraid or dismissing his fear without examining the prediction' }),
      O('b', 'Simply agreeing to call off the planned exposure entirely for today, mainly because Dev is feeling quite anxious about it, and reassuring him that it is perfectly fine for him to keep on putting off every anxiety-provoking situation until some future point when he no longer feels any fear at all', -1,
        { r: 'Canceling reinforces avoidance', approach: 'Cancel framing', why: 'Canceling because he is afraid reinforces avoidance rather than building mastery', keys: ['proceed with a step'], mistake: 'Reinforcing avoidance by canceling' }),
      O('c', 'Telling him his fear is silly and he simply needs to get over it', -1,
        { r: 'Dismissing the fear invalidates him', approach: 'Dismiss framing', why: 'Calling the fear silly invalidates him and undermines the alliance', keys: ['validate then work'], mistake: 'Invalidating the fear' }),
      O('d', 'Changing the subject so he does not have to think about the exposure', -1,
        { r: 'Avoidance misses the work', approach: 'Avoidant framing', why: 'The fear is engaged and the exposure proceeds, not avoided', keys: ['engage the fear'], mistake: 'Sidestepping the therapeutic task' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Dev’s momentum toward his goals?', ['R4'], [
      O('a', 'Reinforce each successful step, link exposures to his valued goals, and build on gains progressively', 3,
        { r: 'Reinforce steps; link to values; build gains', approach: 'Build momentum through valued steps', why: 'Reinforcing each success, linking exposures to his valued goals, and building progressively sustains momentum', keys: ['wants the promotion', 'values advancement'], mistake: 'Failing to connect the work to his goals or to reinforce and build on his successes' }),
      O('b', 'Simply telling Dev in a fairly firm and matter-of-fact way that he really just needs to decide to stop caring at all about what anyone else thinks of him and to become completely confident in every social situation immediately entirely through willpower alone', -1,
        { r: 'Willpower framing is unhelpful', approach: 'Toughen-up framing', why: '“Just stop caring” misunderstands social anxiety and undermines the alliance', keys: ['graded, valued steps'], mistake: 'Demanding willpower instead of graded practice' }),
      O('c', 'Focusing the sessions mainly on cataloguing every social slip-up in exhaustive detail each time', -1,
        { r: 'Cataloguing is not momentum', approach: 'Catalogue framing', why: 'Listing slip-ups does not build momentum toward goals', keys: ['forward-focused steps'], mistake: 'Centering sessions on the slip-ups' }),
      O('d', 'Telling him counseling cannot help unless he first feels confident on his own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Building confidence is the work, not a precondition for it', keys: ['engagement matters'], mistake: 'Making care contingent on confidence' }),
    ]),
    Q('q12', 'ethics', 'Dev asks the counselor to attend a work meeting with him to help him get through it. The most appropriate response is to:', ['R5'], [
      O('a', 'Explore the request, maintain appropriate role boundaries, and build his in-vivo skills and supports instead', 3,
        { r: 'Hold role boundaries; build his own skills', approach: 'Keep the role clear and build capacity', why: 'Attending his work meeting would blur the counseling role, so the request is explored and his own in-vivo skills and supports are built instead', keys: ['wants counselor at a work meeting', 'role boundary'], mistake: 'Stepping outside the counseling role to accompany him rather than building his independent skills' }),
      O('b', 'Simply agreeing to go along and personally attend the actual work meeting together with Dev in person so as to help him get through it, without pausing to consider how doing that would blur the boundaries of the counseling role or foster his dependence rather than his independence', -2,
        { r: 'Attending blurs the role', approach: 'Role-blurring framing', why: 'Accompanying him to a work meeting blurs the counseling role and can foster dependence', keys: ['role boundaries'], mistake: 'Stepping outside the counseling role' }),
      O('c', 'Refusing the request flatly with no explanation and changing the subject', -1,
        { r: 'A flat refusal without explanation is unhelpful', approach: 'Stonewall framing', why: 'The request is explored and explained, and skills built, rather than simply refused', keys: ['explore and explain'], mistake: 'Refusing without engaging the request' }),
      O('d', 'Telling him he will never manage meetings without the counselor present', -2,
        { r: 'Fostering dependence is harmful', approach: 'Dependence framing', why: 'The aim is his independent capacity, not dependence on the counselor’s presence', keys: ['build independence'], mistake: 'Undermining his autonomy and capacity' }),
    ]),
    Q('q13', 'ethics', 'Dev worries that others might find out he is in counseling and asks how his privacy is protected. The most appropriate response is to:', ['R5'], [
      O('a', 'Explain confidentiality and its limits clearly, and disclose only with his consent or a lawful exception', 3,
        { r: 'Explain confidentiality and its limits', approach: 'Be transparent about confidentiality', why: 'The counselor clearly explains confidentiality and its limits, disclosing only with consent or a lawful exception', keys: ['fears others finding out', 'wants privacy'], mistake: 'Either promising absolute secrecy or being vague about how confidentiality and its limits work' }),
      O('b', 'Simply reassuring Dev in a very warm and confident sort of way that absolutely nothing he ever says or does in counseling will ever under any circumstance at all be shared with anyone else for any reason, without ever mentioning the standard limits such as safety exceptions', -2,
        { r: 'Absolute promises ignore limits', approach: 'Absolutist framing', why: 'Confidentiality has limits, such as safety exceptions, that are explained honestly', keys: ['honest limits'], mistake: 'Overpromising absolute confidentiality' }),
      O('c', 'Telling him his employer will likely be told regardless of consent', -2,
        { r: 'Misstating protections is improper', approach: 'Breach framing', why: 'His information is disclosed only with consent or a lawful exception, not to the employer by default', keys: ['confidentiality protected'], mistake: 'Misstating confidentiality protections' }),
      O('d', 'Refusing to discuss confidentiality and simply changing the subject', -1,
        { r: 'Evasion undermines transparency', approach: 'Evasion framing', why: 'Confidentiality and its limits are explained honestly, not evaded', keys: ['transparent limits'], mistake: 'Being evasive about confidentiality' }),
    ]),
  ],
};

// ============================================================================
// D210 — Specific Phobia (F40.218) — Anxiety — hard
// ============================================================================
const D210 = {
  id: 'ncmhce-D210',
  title: 'A phobia of enclosed spaces disrupting work and health care',
  category: 'Anxiety',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Specific Phobia', code: 'F40.218' },
  diagnosis: { name: 'Specific Phobia', code: 'F40.218' },
  differentialOptions: [
    { id: 'do1', name: 'Specific Phobia', isCorrect: true },
    { id: 'do2', name: 'Panic Disorder', isCorrect: false },
    { id: 'do3', name: 'Agoraphobia', isCorrect: false },
    { id: 'do4', name: 'Generalized Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Ruth Feldman, a 45-year-old, describes intense, immediate fear of enclosed spaces such as elevators, small rooms, and medical scanners, with a ' +
      'racing heart and an urge to flee. She takes the stairs many floors and recently could not complete a needed medical scan.',
    session1:
      'Her fear is circumscribed to a specific situation—enclosed spaces—triggered immediately on exposure and out of proportion to real danger, ' +
      'rather than unexpected attacks or a broad worry pattern. She recognizes the fear as excessive.',
    session2:
      'Her anxiety arises only with the specific trigger, not across many domains or many public situations, and only when enclosed spaces are ' +
      'anticipated or encountered. The counselor screens her suicide risk, finds none, and plans exposure-based CBT for the phobia.',
  },
  diagnosticRationale:
    'Marked, immediate fear of a specific situation (enclosed spaces) that is out of proportion to real danger and leads to avoidance and impairment, ' +
    'best fits specific phobia, distinct from panic disorder, agoraphobia, and generalized anxiety disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Specific phobia: marked fear cued by a specific object/situation; immediate; out of proportion; avoidance' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Anxiety disorders: exposure-based CBT as the evidence-based treatment' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Graded exposure and the working alliance' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., C.2.: welfare, safety, coordination, and competence' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a specific phobia?', ['R1'], [
      O('a', 'Marked, immediate fear cued by a specific situation, out of proportion to real danger, with avoidance and impairment', 3,
        { r: 'Immediate, circumscribed, disproportionate fear', approach: 'Confirm the core criteria', why: 'Specific phobia requires marked, immediate fear cued by a specific object or situation, out of proportion to danger, with avoidance and impairment', keys: ['fear of enclosed spaces', 'avoids elevators and scanners'], mistake: 'Diagnosing a phobia without confirming the immediate, circumscribed, disproportionate fear and avoidance' }),
      O('b', 'Mainly whether Ruth is able to identify one single specific past event that she is personally quite convinced was really the original underlying cause that first started off the whole of her fear of enclosed spaces', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not the defining feature of a specific phobia', keys: ['syndrome-based focus'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her fear has gotten a little worse over the past few days than earlier in the week', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The circumscribed, cued pattern, not the exact recent trajectory, defines the phobia', keys: ['cued pattern'], mistake: 'Confusing the recent course with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is an anxiety disorder, not a manic episode', keys: ['anxiety-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes this from panic disorder?', ['R1'], [
      O('a', 'Her fear is cued and immediate on encountering enclosed spaces, not unexpected out-of-the-blue attacks', 3,
        { r: 'Cued, situational — not unexpected attacks', approach: 'Contrast the trigger', why: 'Panic disorder features unexpected attacks; her fear is cued and immediate on encountering the specific situation', keys: ['fear cued by enclosed spaces', 'no out-of-the-blue attacks'], mistake: 'Reading cued situational fear as unexpected panic disorder' }),
      O('b', 'The fact that whenever Ruth actually does find herself confronted with one of these particular enclosed spaces she really does quite genuinely feel very frightened and physically activated and strongly distressed in a noticeable way', -1,
        { r: 'Fear occurs in both', approach: 'Fear framing', why: 'Intense fear and physical symptoms occur in both; the cued versus unexpected pattern differs', keys: ['shared feature'], mistake: 'Using fear itself to differentiate' }),
      O('c', 'The racing heart and the urge to flee that she describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Physical symptoms occur in both; the trigger pattern differs', keys: ['shared symptoms'], mistake: 'Reading physical symptoms as decisive' }),
      O('d', 'The way her fear feels a little worse in warmer rooms', 0,
        { r: 'Environmental effects are nonspecific', approach: 'Environment framing', why: 'A warmer room does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q3', 'core', 'How does this differ from agoraphobia?', ['R1'], [
      O('a', 'Her fear is limited to one specific situation, not fear across multiple situations where escape or help feels hard', 3,
        { r: 'Single specific situation versus multiple', approach: 'Contrast the breadth of situations', why: 'Agoraphobia involves fear across multiple situations where escape or help feels difficult; hers is limited to the specific situation of enclosed spaces', keys: ['only enclosed spaces', 'not multiple public situations'], mistake: 'Reading a circumscribed specific phobia as agoraphobia' }),
      O('b', 'The fact that Ruth really does quite consistently tend to feel genuinely anxious and frightened and eager to get away whenever she happens to find herself in the particular kind of situation that she is most afraid of', -1,
        { r: 'Situational fear occurs in both', approach: 'Situational framing', why: 'Situational fear and escape urges occur in both; the breadth of feared situations differs', keys: ['shared feature'], mistake: 'Using situational fear to differentiate' }),
      O('c', 'The urge to escape and the distress that she describes right now', -1,
        { r: 'These features are nonspecific', approach: 'Symptom framing', why: 'Escape urges and distress occur in both; the breadth differs', keys: ['shared features'], mistake: 'Reading nonspecific features as decisive' }),
      O('d', 'The way her fear feels a little worse on especially busy days', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening on busy days does not distinguish the two', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'How does this differ from generalized anxiety disorder?', ['R1'], [
      O('a', 'Her anxiety arises only with the specific trigger, not as excessive worry across many life domains', 3,
        { r: 'Cued, single-focus — not diffuse worry', approach: 'Contrast the breadth of anxiety', why: 'GAD is excessive worry across many domains; her anxiety arises only with the specific enclosed-space trigger', keys: ['anxiety only with the trigger', 'no multi-domain worry'], mistake: 'Reading a circumscribed phobia as generalized worry' }),
      O('b', 'The fact that Ruth really does quite understandably tend to feel genuinely anxious and worried and on edge and uncomfortable at the various times when the particular thing she is afraid of happens to come up in her life', -1,
        { r: 'Anxiety occurs in both', approach: 'Anxiety framing', why: 'Anxiety occurs in both; the breadth of the anxiety is what differs', keys: ['shared feature'], mistake: 'Using anxiety itself to differentiate' }),
      O('c', 'The physical tension and the distress that she describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Tension and distress occur in both; the breadth differs', keys: ['shared symptoms'], mistake: 'Reading nonspecific symptoms as decisive' }),
      O('d', 'The way her anxiety feels a little worse on days she has slept poorly', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse anxiety after poor sleep does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q5', 'intake', 'What assessment step should not be skipped despite the circumscribed, non-suicidal picture?', ['R3'], [
      O('a', 'A structured suicide-risk assessment, screened as standard even when a specific phobia predominates', 3,
        { r: 'Structured suicide-risk assessment', approach: 'Screen risk directly', why: 'Suicide risk is screened as standard practice even when a circumscribed phobia predominates', keys: ['missed needed medical care', 'functional impact'], mistake: 'Skipping suicide-risk screening because the presentation looks narrow and situational' }),
      O('b', 'Mainly getting a very complete and exhaustive account of every enclosed space she has ever felt uneasy in across the entire course of her life before turning at all to the question of her present safety', -2,
        { r: 'Deferring safety is unsafe', approach: 'History-first framing', why: 'An exhaustive situational history does not displace assessing current suicide risk', keys: ['safety first'], mistake: 'Sequencing safety behind background data' }),
      O('c', 'Assuming there is no risk because her problem is a specific phobia rather than depression', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'A phobia presentation does not rule out risk; structured screening is still done', keys: ['assess regardless'], mistake: 'Dismissing risk based on the presentation type' }),
      O('d', 'Focusing only on stair-climbing logistics for now and returning to any safety questions much later', -1,
        { r: 'Sequencing safety behind logistics is unsafe', approach: 'Single-issue framing', why: 'Logistics do not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment approach?', ['R2'], [
      O('a', 'Offer exposure-based CBT with a graded hierarchy toward enclosed spaces, coordinating any medical needs', 3,
        { r: 'Exposure-based CBT (graded hierarchy)', approach: 'Match to the evidence base', why: 'Specific phobia is treated first-line with exposure-based CBT using a graded hierarchy, coordinating any needed medical care', keys: ['circumscribed phobia', 'blocking a medical scan'], mistake: 'Offering only relaxation or reassurance, or recommending continued avoidance, instead of graded exposure' }),
      O('b', 'Simply advising Ruth in a reassuring sort of way that she really just needs to keep on avoiding every elevator and small room and scanner and other enclosed space that frightens her for as long as she possibly can manage to arrange her life around them', -2,
        { r: 'Encouraging avoidance maintains the phobia', approach: 'Avoidance framing', why: 'Advising avoidance maintains the phobia rather than treating it', keys: ['reduce avoidance'], mistake: 'Reinforcing avoidance' }),
      O('c', 'Starting her on a medication that you will select and adjust yourself over time', -2,
        { r: 'Prescribing is outside scope', approach: 'Prescribe framing', why: 'Counselors do not select or adjust medication; that is referred to a prescriber', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Focusing sessions only on her sleep and leaving the phobia unaddressed', -1,
        { r: 'A narrow focus is inadequate', approach: 'Narrow-focus framing', why: 'Sleep alone does not treat the phobia; the phobia is addressed directly', keys: ['treat the phobia'], mistake: 'Addressing only one symptom' }),
    ]),
    Q('q7', 'treatment', 'How should the exposure be structured for her?', ['R4'], [
      O('a', 'Collaboratively build a graded hierarchy and work up it step by step, consolidating gains at each level', 3,
        { r: 'Collaborative graded hierarchy', approach: 'Grade the exposure', why: 'A collaboratively built graded hierarchy worked step by step, consolidating gains, is the appropriate exposure structure for a phobia', keys: ['range of enclosed spaces', 'needs to tolerate a scanner'], mistake: 'Either avoiding exposure or forcing the most feared situation first with no graded plan' }),
      O('b', 'Simply insisting that Ruth must immediately shut herself inside the smallest, most tightly enclosed, and most frightening possible space for a very long stretch of time right away at the very first session, with no graded hierarchy of easier steps built up beforehand at all', -1,
        { r: 'Flooding without a plan is inappropriate', approach: 'Flooding framing', why: 'Exposure is graded and collaborative, not an abrupt plunge into the worst situation', keys: ['graded hierarchy'], mistake: 'Skipping a graded hierarchy' }),
      O('c', 'Focusing the sessions mainly on cataloguing every frightening enclosed space in exhaustive detail each time', -1,
        { r: 'Cataloguing is not exposure', approach: 'Catalogue framing', why: 'Listing feared spaces without exposure does not reduce the fear', keys: ['active exposure'], mistake: 'Centering sessions on the fear list' }),
      O('d', 'Telling her to just keep avoiding enclosed spaces until she feels ready someday', -1,
        { r: 'Indefinite avoidance is counter-therapeutic', approach: 'Avoidance framing', why: 'Graded exposure builds readiness; indefinite avoidance maintains the fear', keys: ['graded exposure'], mistake: 'Endorsing avoidance' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor coordinate with her medical care given the missed scan?', ['R5'], [
      O('a', 'With her consent, coordinate so the needed scan can be completed, possibly with graded exposure and reasonable accommodations', 3,
        { r: 'Coordinate to enable the needed care', approach: 'Coordinate within consent and scope', why: 'With consent, coordination helps her complete the needed scan, using graded exposure and reasonable accommodations', keys: ['could not complete the scan', 'needs the medical care'], mistake: 'Either ignoring the missed medical care or coordinating without her consent' }),
      O('b', 'Simply telling Ruth in a confident and definitive way yourself that the medical scan is really not all that important anyway and that she can safely go ahead and skip it entirely and avoid it indefinitely without any concern, which is a medical judgment outside the counselor’s scope', -2,
        { r: 'Advising against needed care exceeds scope', approach: 'Medical-advice framing', why: 'Whether she needs the scan is a medical judgment outside the counselor’s scope', keys: ['scope limits'], mistake: 'Overstepping into medical judgment' }),
      O('c', 'Forwarding her entire record to her medical providers without her consent', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('d', 'Avoiding any contact with her medical providers so counseling stays entirely separate', -1,
        { r: 'No coordination undercuts care', approach: 'Siloed framing', why: 'Consented coordination supports completing the needed medical care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q9', 'treatment', 'How should progress be monitored over the exposure treatment?', ['R2'], [
      O('a', 'Track fear ratings and avoidance across the hierarchy and adjust the pace and steps accordingly', 3,
        { r: 'Track fear and avoidance; adjust the plan', approach: 'Measure and adjust', why: 'Exposure treatment is guided by tracking fear ratings and avoidance across the hierarchy and adjusting the pace and steps', keys: ['graded hierarchy', 'measurable fear'], mistake: 'Proceeding without tracking fear and avoidance or adjusting the plan to her response' }),
      O('b', 'Simply assuming that so long as Ruth keeps on coming to each of her weekly appointments the exposure treatment must obviously be working perfectly well for her, without ever actually tracking her fear ratings or her avoidance in any structured way at all', -1,
        { r: 'Attendance is not outcome', approach: 'Attendance framing', why: 'Attendance does not measure exposure progress; structured tracking does', keys: ['measure outcomes'], mistake: 'Equating attendance with progress' }),
      O('c', 'Waiting many months before checking whether anything has changed at all', -1,
        { r: 'Infrequent review is inadequate', approach: 'Delay framing', why: 'Response is tracked regularly, not only after long gaps', keys: ['timely review'], mistake: 'Reviewing progress too infrequently' }),
      O('d', 'Judging progress only by how you personally feel about the sessions', -1,
        { r: 'Subjective impression is not measurement', approach: 'Subjective framing', why: 'Progress is judged by measured fear and avoidance, not impression', keys: ['objective measures'], mistake: 'Relying on subjective impression' }),
    ]),
    Q('q10', 'counseling', 'Facing an exposure step, Ruth freezes and says she cannot do it and needs to leave. The most therapeutic response is to:', ['R4'], [
      O('a', 'Stay calm and supportive, help her stay with a manageable step, and coach her through the anxiety curve', 3,
        { r: 'Support staying with a manageable step', approach: 'Coach through the anxiety', why: 'Staying calm and supportive while helping her remain with a manageable step and coaching her through the anxiety curve is core exposure work', keys: ['freezes at the step', 'urge to flee'], mistake: 'Either letting her escape immediately, reinforcing avoidance, or forcing a step far beyond her tolerance' }),
      O('b', 'Simply agreeing right away to let Ruth immediately leave and completely escape the situation the very moment she starts to feel frightened, and reassuring her that avoiding it entirely is perfectly fine and that she never needs to attempt any exposure step at all', -1,
        { r: 'Immediate escape reinforces avoidance', approach: 'Escape framing', why: 'Letting her escape at the first fear reinforces avoidance rather than building tolerance', keys: ['stay with a step'], mistake: 'Reinforcing avoidance by allowing escape' }),
      O('c', 'Forcing her to remain in a far more intense step than she can tolerate until she is overwhelmed', -2,
        { r: 'Overwhelming her is harmful', approach: 'Flooding framing', why: 'Exposure stays within tolerance; overwhelming her can be harmful and erode trust', keys: ['manageable step'], mistake: 'Pushing beyond tolerance' }),
      O('d', 'Telling her the fear is silly and she simply needs to get over it', -1,
        { r: 'Dismissing the fear invalidates her', approach: 'Dismiss framing', why: 'Calling the fear silly invalidates her and undermines the alliance', keys: ['validate then coach'], mistake: 'Invalidating the fear' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Ruth’s persistence toward her goals?', ['R4'], [
      O('a', 'Reinforce each step, connect exposures to completing her needed care, and build progressively on her gains', 3,
        { r: 'Reinforce steps; link to her goals; build gains', approach: 'Build persistence through valued steps', why: 'Reinforcing each step, linking exposures to completing her needed medical care, and building progressively supports her persistence', keys: ['needs to complete the scan', 'wants her freedom back'], mistake: 'Failing to connect the work to her goals or to reinforce and build on her progress' }),
      O('b', 'Simply telling Ruth in a fairly firm and matter-of-fact way that she really just needs to force herself to completely stop being afraid of enclosed spaces immediately and to get back into all of them at once entirely on her own through willpower alone', -1,
        { r: 'Willpower framing is unhelpful', approach: 'Toughen-up framing', why: '“Just stop being afraid” misunderstands phobia and undermines the alliance', keys: ['graded practice'], mistake: 'Demanding willpower instead of graded practice' }),
      O('c', 'Focusing the sessions mainly on cataloguing every frightening space in exhaustive detail each time', -1,
        { r: 'Cataloguing is not persistence', approach: 'Catalogue framing', why: 'Listing feared spaces does not build persistence', keys: ['forward-focused steps'], mistake: 'Centering sessions on the fear list' }),
      O('d', 'Telling her counseling cannot help unless she first conquers the fear on her own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Conquering the fear is the work, not a precondition for it', keys: ['engagement matters'], mistake: 'Making care contingent on symptom resolution' }),
    ]),
    Q('q12', 'ethics', 'Ruth asks the counselor to accompany her into the medical scanner to help her through it. The most appropriate response is to:', ['R5'], [
      O('a', 'Maintain appropriate role boundaries and coordinate exposure and accommodations with her medical team instead', 3,
        { r: 'Hold role boundaries; coordinate with the team', approach: 'Keep the role clear and coordinate', why: 'Personally accompanying her into the scanner would blur the counseling role, so exposure and reasonable accommodations are coordinated with her medical team instead', keys: ['wants counselor in the scanner room', 'role boundary'], mistake: 'Stepping outside the counseling role rather than coordinating exposure and accommodations with the medical team' }),
      O('b', 'Simply agreeing to personally go along and accompany Ruth right into the medical scanner room and the procedure itself to help her get through it, without pausing to consider how doing that would blur the boundaries of the counseling role or foster dependence rather than her own capacity', -2,
        { r: 'Accompanying blurs the role', approach: 'Role-blurring framing', why: 'Accompanying her into the procedure blurs the counseling role and can foster dependence', keys: ['role boundaries'], mistake: 'Stepping outside the counseling role' }),
      O('c', 'Refusing the request flatly with no explanation and changing the subject', -1,
        { r: 'A flat refusal without explanation is unhelpful', approach: 'Stonewall framing', why: 'The request is explored and alternatives coordinated, not simply refused', keys: ['explore and coordinate'], mistake: 'Refusing without engaging the request' }),
      O('d', 'Telling her she will never manage the scan without the counselor present', -2,
        { r: 'Fostering dependence is harmful', approach: 'Dependence framing', why: 'The aim is her independent capacity with support, not dependence on the counselor’s presence', keys: ['build independence'], mistake: 'Undermining her autonomy and capacity' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited experience delivering exposure therapy. The most ethical course of action is to:', ['R5'], [
      O('a', 'Seek training, supervision, or consultation, or refer, so exposure is delivered competently', 3,
        { r: 'Get supervision/training or refer for competence', approach: 'Practice within competence', why: 'ACA C.2. requires seeking training, supervision, or consultation, or referring, so exposure therapy is delivered competently', keys: ['limited exposure experience', 'wants effective care'], mistake: 'Delivering an unfamiliar, technique-specific treatment without training, supervision, or referral' }),
      O('b', 'Simply going ahead and attempting to deliver the full exposure-based treatment entirely on his or her own regardless of the limited experience, without ever obtaining any training or supervision or consultation and without considering referring her to someone more experienced', -2,
        { r: 'Practicing beyond competence is improper', approach: 'Overreach framing', why: 'Delivering an unfamiliar treatment without training, supervision, or referral exceeds competence', keys: ['competence first'], mistake: 'Practicing beyond competence' }),
      O('c', 'Telling Ruth the phobia is not serious enough to need any real treatment at all', -2,
        { r: 'Minimizing the impairment is a mistake', approach: 'Downplay framing', why: 'A phobia blocking needed medical care warrants competent treatment', keys: ['functional impairment'], mistake: 'Underestimating the impairment' }),
      O('d', 'Transferring the case at once with no explanation, coordination, or plan for the transition', -1,
        { r: 'Abrupt transfer mishandles care', approach: 'Uncoordinated handoff', why: 'Where a referral is needed it is coordinated with explanation and a plan, not done abruptly', keys: ['coordinated referral'], mistake: 'Dropping the client without a plan' }),
    ]),
  ],
};

module.exports = { CASES: [D207, D208, D209, D210] };
