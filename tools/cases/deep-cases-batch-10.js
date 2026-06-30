// ============================================================================
// deep-cases-batch-10.js — NCMHCE deep cases, batch 10 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). On the
// reserved id block ncmhce-D150+, adding distinct high-yield diagnoses not yet
// covered by any deep case:
//   ncmhce-D150  Specific Phobia (Anxiety)
//   ncmhce-D151  Schizoaffective Disorder, Bipolar Type (Psychotic)
//   ncmhce-D152  Obsessive-Compulsive Personality Disorder (Personality)
//   ncmhce-D153  Gambling Disorder (Substance)
//   ncmhce-D154  Disruptive Mood Dysregulation Disorder (Depressive)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-10.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-10');console.log(validateExamDepthSet(CASES))"
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
// D150 — Specific Phobia (F40.218) — Anxiety — medium
// ============================================================================
const D150 = {
  id: 'ncmhce-D150',
  title: 'Intense fear of flying that is now blocking a career step',
  category: 'Anxiety',
  difficulty: 'medium',
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
      'Nadia Osei, a 29-year-old graphic designer, seeks help because an intense fear of flying is keeping her from a promotion that requires ' +
      'occasional travel. For years she has avoided planes, and even thinking about booking a flight brings immediate, overwhelming dread.',
    session1:
      'Her fear is cued specifically by air travel; she has no unexpected panic attacks in other settings and moves freely by car, train, and ' +
      'through crowds and open spaces. She recognizes the fear is out of proportion but cannot talk herself out of it, and she always avoids flying.',
    session2:
      'When she imagines being on a plane she has a racing heart, sweating, and a sense of doom, all of which resolve once the trip is cancelled. ' +
      'Her worry is confined to flying rather than spread across many life domains, and she is motivated to be able to fly for her career.',
  },
  diagnosticRationale:
    'A marked, persistent, and out-of-proportion fear cued by a specific situation (air travel) that is actively avoided and causes clinically ' +
    'significant impairment meets DSM-5-TR criteria for situational specific phobia, distinct from panic disorder with its unexpected attacks, ' +
    'agoraphobia with fear across multiple situations, and the free-floating, multi-domain worry of generalized anxiety disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Specific phobia: marked fear cued by a specific object/situation, active avoidance, out of proportion, 6+ months' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Anxiety: graded in vivo exposure as the first-line psychological treatment for specific phobia' },
    { id: 'R3', source: 'Barlow PCT', detail: 'Exposure principles, fear hierarchy, and dropping safety behaviors' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, informed consent, and scope of practice' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance, collaborative goal setting, and the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a specific phobia diagnosis?', ['R1'], [
      O('a', 'A marked fear cued specifically by flying, with active avoidance and impairment that is out of proportion to actual danger', 3,
        { r: 'Cued fear, avoidance, out of proportion', approach: 'Confirm the core criteria', why: 'Specific phobia requires a cued, out-of-proportion fear with avoidance and impairment', keys: ['fear cued by air travel', 'always avoids flying'], mistake: 'Diagnosing a phobia without confirming cue, avoidance, and impairment' }),
      O('b', 'That she can name the single past event she believes first caused her to become so frightened of air travel', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her fear has grown noticeably stronger over the past several days than it was the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A persistent pattern, not a recent uptick, is required', keys: ['persistent fear'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Specific phobia is an anxiety condition, not a mood episode', keys: ['anxiety-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from panic disorder?', ['R1'], [
      O('a', 'Her fear is reliably cued by flying and she has no unexpected attacks in other unrelated situations', 3,
        { r: 'Cued, not unexpected, attacks', approach: 'Contrast cued versus uncued', why: 'Panic disorder involves recurrent unexpected attacks; her fear is situationally cued', keys: ['cued by air travel', 'no attacks elsewhere'], mistake: 'Calling a cued situational fear panic disorder' }),
      O('b', 'The fact that she experiences a racing heart, sweating, and a real sense of doom whenever she imagines being on the plane', -1,
        { r: 'Physical surge occurs in both', approach: 'Symptom-surge framing', why: 'Autonomic surges occur in both; the cue is what differs', keys: ['shared feature'], mistake: 'Using physical symptoms to differentiate' }),
      O('c', 'The strong urge that she feels to avoid the situation that is frightening to her whenever she possibly can', -1,
        { r: 'Avoidance occurs in both', approach: 'Avoidance framing', why: 'Avoidance is shared; the cued pattern differs', keys: ['shared avoidance'], mistake: 'Using avoidance alone to differentiate' }),
      O('d', 'The way her anxiety tends to feel a little worse during the busiest and most demanding weeks at her design job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from agoraphobia?', ['R1'], [
      O('a', 'Her fear is confined to flying, not spread across several situations like crowds, transit, or open spaces', 3,
        { r: 'Single situation versus multiple', approach: 'Contrast the breadth of feared situations', why: 'Agoraphobia involves fear across multiple situations; hers is confined to flying', keys: ['moves freely by car, train, crowds'], mistake: 'Calling a single-situation phobia agoraphobia' }),
      O('b', 'The fact that she goes well out of her way to avoid the particular situation that reliably frightens and distresses her', -1,
        { r: 'Avoidance occurs in both', approach: 'Avoidance framing', why: 'Avoidance is shared; the number of feared situations differs', keys: ['shared feature'], mistake: 'Using avoidance to differentiate' }),
      O('c', 'The anxious physical feelings that come over her body when she is confronted with the thing that she fears', -1,
        { r: 'Physical anxiety occurs in both', approach: 'Symptom framing', why: 'Bodily anxiety is shared; the breadth of cues differs', keys: ['shared arousal'], mistake: 'Reading arousal as decisive' }),
      O('d', 'The way her distress tends to ease somewhat on the weekends when her overall schedule is a good deal less hectic', 0,
        { r: 'Schedule effects are nonspecific', approach: 'Schedule framing', why: 'A lighter schedule does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading a schedule effect' }),
    ]),
    Q('q4', 'core', 'What is most useful to assess to inform an exposure-based plan?', ['R3'], [
      O('a', 'A graded hierarchy of flying-related situations and the safety behaviors she uses to manage her fear', 3,
        { r: 'Hierarchy and safety behaviors', approach: 'Map the fear structure', why: 'Exposure planning depends on a graded hierarchy and the safety behaviors that maintain fear', keys: ['avoids flying', 'imagining the plane cues fear'], mistake: 'Starting exposure without mapping the hierarchy' }),
      O('b', 'A detailed family history going back several generations to determine which relatives also disliked or avoided flying', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not guide the exposure plan', keys: ['plan-relevant data'], mistake: 'Gathering data that does not inform treatment' }),
      O('c', 'Whether her fear can be traced to one specific childhood memory that fully explains why she avoids planes today', -1,
        { r: 'A single memory is not the target', approach: 'Origin-hunting framing', why: 'Exposure targets current avoidance, not a single origin', keys: ['present maintenance'], mistake: 'Hunting for an origin instead of the maintaining factors' }),
      O('d', 'Her general personality style and broad preferences so the sessions can be matched to the way she likes to work', 0,
        { r: 'Style preferences are secondary', approach: 'Preference framing', why: 'Useful but not what an exposure plan hinges on', keys: ['secondary factor'], mistake: 'Prioritizing style over the fear structure' }),
    ]),
    Q('q5', 'intake', 'What co-occurring issue is most important to screen for given her avoidance?', ['R1'], [
      O('a', 'Whether the avoidance has spread or driven low mood or other anxiety that would broaden the treatment plan', 3,
        { r: 'Screen for spread and comorbidity', approach: 'Assess breadth and comorbidity', why: 'Long-standing avoidance can generalize or co-occur with mood and other anxiety, shaping the plan', keys: ['years of avoidance', 'career impact'], mistake: 'Treating the phobia in isolation without screening for spread' }),
      O('b', 'An undetected primary psychotic disorder that might better explain why she becomes so frightened about flying', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A primary neurocognitive decline that could account for why she keeps cancelling the flights that she books', -1,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'Avoidance is fear-driven, not a memory problem', keys: ['fear-driven avoidance'], mistake: 'Pursuing an improbable rule-out' }),
      O('d', 'A possible eating disorder that could be the single underlying cause of all of her anxiety about traveling', 0,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Nadia?', ['R2'], [
      O('a', 'Graded in vivo exposure to flying-related cues, building from a hierarchy while she drops safety behaviors', 3,
        { r: 'Graded in vivo exposure', approach: 'Apply the guideline', why: 'NICE supports graded in vivo exposure as first-line for specific phobia', keys: ['cued fear', 'wants to be able to fly'], mistake: 'Choosing open-ended talk therapy over exposure' }),
      O('b', 'Long-term insight-oriented therapy to uncover the unconscious meaning behind her fear before any exposure begins', -1,
        { r: 'Insight-first is not first-line', approach: 'Depth-work framing', why: 'Exposure is the evidence-based first-line approach', keys: ['exposure indicated'], mistake: 'Prioritizing insight over exposure' }),
      O('c', 'Advising her to keep avoiding air travel and to simply build her career around roles that never call for flying anywhere', -2,
        { r: 'Endorsing avoidance maintains the phobia', approach: 'Avoidance-endorsing framing', why: 'Reinforcing avoidance maintains the fear and is counter-therapeutic', keys: ['avoidance maintains fear'], mistake: 'Encouraging the avoidance that sustains the phobia' }),
      O('d', 'Beginning a benzodiazepine before each flight that you will prescribe and titrate so she can travel without distress', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or titrate medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor handle the safety behaviors she uses during exposure?', ['R3'], [
      O('a', 'Help her gradually drop safety behaviors so that new, corrective learning about the feared situation can occur', 3,
        { r: 'Fade safety behaviors', approach: 'Remove maintaining factors', why: 'Safety behaviors block disconfirmation; fading them strengthens new learning', keys: ['safety behaviors maintain fear'], mistake: 'Leaving safety behaviors in place during exposure' }),
      O('b', 'Encourage her to keep relying on every one of her usual safety behaviors so the exposures never feel too distressing to her', -2,
        { r: 'Retaining safety behaviors blocks learning', approach: 'Comfort-first framing', why: 'Keeping safety behaviors prevents the corrective learning exposure depends on', keys: ['blocked disconfirmation'], mistake: 'Preserving the behaviors that maintain the fear' }),
      O('c', 'Move immediately to boarding a long flight without any graded steps so she learns to cope with the worst case at once', -1,
        { r: 'Skipping the hierarchy is not indicated', approach: 'Flooding-first framing', why: 'A graded approach is the standard first-line structure here', keys: ['graded hierarchy'], mistake: 'Abandoning the graded structure' }),
      O('d', 'Tell her to wait until she no longer feels any anxiety at all before she attempts any of the planned exposure steps', -1,
        { r: 'Waiting for zero anxiety stalls exposure', approach: 'Wait-for-calm framing', why: 'Exposure proceeds with manageable anxiety, not its absence', keys: ['approach despite anxiety'], mistake: 'Setting an unattainable precondition' }),
    ]),
    Q('q8', 'treatment', 'How should progress in the exposure work be tracked?', ['R5'], [
      O('a', 'Use collaborative, measurement-based tracking of fear ratings and completed steps to guide the pace of the work', 3,
        { r: 'Measurement-based, collaborative tracking', approach: 'Track outcomes to steer the plan', why: 'Tracking fear ratings and completed steps guides pacing and demonstrates progress', keys: ['fear hierarchy', 'graded steps'], mistake: 'Proceeding without tracking outcomes' }),
      O('b', 'Rely only on whether she happens to mention during sessions that the flying situation feels a bit easier than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only her general satisfaction with the counseling relationship rather than her actual progress through the exposures', -1,
        { r: 'Alliance is not the outcome measure', approach: 'Satisfaction-only framing', why: 'Satisfaction matters but is not the exposure outcome', keys: ['outcome focus'], mistake: 'Measuring the wrong variable' }),
      O('d', 'Wait until the very end of treatment to review whether anything at all has changed since the first appointment', -1,
        { r: 'End-only review misses pacing data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the pace', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'What is the most appropriate counselor action regarding any medication question she raises?', ['R4'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation while continuing the exposure work within your own scope', 3,
        { r: 'Refer for prescribing, keep doing therapy', approach: 'Coordinate within scope', why: 'Medication questions are referred to a prescriber while the counselor continues exposure', keys: ['exposure is first-line', 'scope limits'], mistake: 'Advising on medication outside scope' }),
      O('b', 'Recommend a specific anti-anxiety medication and dose for her to start taking before each of her upcoming work flights', -2,
        { r: 'Recommending a drug and dose exceeds scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not recommend specific drugs or doses', keys: ['no prescriptive authority'], mistake: 'Making a prescribing recommendation' }),
      O('c', 'Tell her that medication of any kind would completely undermine her therapy and that she should refuse it if it is offered', -1,
        { r: 'Blanket refusal advice overreaches', approach: 'Anti-medication framing', why: 'The prescriber and client weigh medication; the counselor does not forbid it', keys: ['shared decision'], mistake: 'Directing a medical decision' }),
      O('d', 'Ignore the medication question entirely and simply redirect her back to the exposure tasks every time that she brings it up', -1,
        { r: 'Dismissing the question is unhelpful', approach: 'Avoidant framing', why: 'A referral, not avoidance, is the appropriate response', keys: ['coordinated care'], mistake: 'Failing to address a legitimate question' }),
    ]),
    Q('q10', 'counseling', 'Nadia hesitates before her first real exposure step, saying she is too anxious. The most therapeutic response is to:', ['R5'], [
      O('a', 'Validate the anxiety and collaboratively choose a slightly smaller step she can approach rather than avoid', 3,
        { r: 'Validate and right-size the step', approach: 'Support approach over avoidance', why: 'Validating while keeping her approaching, at a manageable step, sustains exposure', keys: ['hesitation before the step'], mistake: 'Letting her avoid or pushing a step that is too big' }),
      O('b', 'Tell her to skip the exposure for today and simply try again some other week when she is feeling far less anxious overall', -1,
        { r: 'Allowing avoidance undercuts progress', approach: 'Avoidance-permitting framing', why: 'Avoiding the step reinforces the fear', keys: ['approach matters'], mistake: 'Permitting avoidance at the key moment' }),
      O('c', 'Insist that she complete the originally planned step exactly as written, regardless of how distressed she is feeling right now', -1,
        { r: 'Rigid pushing can rupture the alliance', approach: 'Rigid framing', why: 'Right-sizing the step is better than forcing the original one', keys: ['collaborative pacing'], mistake: 'Ignoring her distress and the alliance' }),
      O('d', 'Reassure her at length that nothing bad will happen so that she does not have to feel any of the anxiety during the step', -1,
        { r: 'Heavy reassurance functions as a safety behavior', approach: 'Reassurance framing', why: 'Excessive reassurance can become a safety behavior that blocks learning', keys: ['corrective learning'], mistake: 'Providing reassurance that undermines exposure' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Nadia between sessions?', ['R3'], [
      O('a', 'Agree on graded between-session practice she can do on her own, with a simple record of fear ratings to review', 3,
        { r: 'Structured between-session practice', approach: 'Extend exposure beyond the room', why: 'Self-directed graded practice with tracking consolidates gains between sessions', keys: ['graded steps', 'wants to fly for work'], mistake: 'Limiting all exposure to the session hour' }),
      O('b', 'Encourage her to steer clear of anything flying-related until the next appointment so she does not get overwhelmed at home', -2,
        { r: 'Between-session avoidance maintains fear', approach: 'Avoidance-homework framing', why: 'Avoiding cues between sessions reinforces the phobia', keys: ['avoidance maintains fear'], mistake: 'Assigning avoidance as homework' }),
      O('c', 'Suggest she book the most demanding long-haul flight she can find this week to push herself as hard as possible right away', -1,
        { r: 'Skipping the hierarchy is not indicated', approach: 'Overreach framing', why: 'Between-session practice should be graded, not a leap to the hardest step', keys: ['graded practice'], mistake: 'Assigning a step far beyond the hierarchy' }),
      O('d', 'Tell her not to do anything at all on her own and to leave every part of the exposure work strictly for the session room', -1,
        { r: 'No practice slows progress', approach: 'Session-only framing', why: 'Generalization benefits from supported home practice', keys: ['between-session gains'], mistake: 'Forgoing useful home practice' }),
    ]),
    Q('q12', 'ethics', 'Before starting exposure, the most important ethical step is to:', ['R4'], [
      O('a', 'Provide informed consent that explains the exposure rationale, the expected temporary distress, and the alternatives', 3,
        { r: 'Informed consent for exposure', approach: 'Secure informed consent', why: 'Exposure involves planned distress, so its rationale, risks, and alternatives must be consented', keys: ['planned distress', 'client autonomy'], mistake: 'Beginning exposure without informed consent' }),
      O('b', 'Have her sign a general intake form once and assume that single signature covers every later part of the treatment', -1,
        { r: 'A one-time form is not specific consent', approach: 'Blanket-form framing', why: 'Exposure warrants specific, ongoing informed consent', keys: ['method-specific consent'], mistake: 'Treating a generic form as full consent' }),
      O('c', 'Keep the details of the exposure plan to yourself so that she does not worry about it in advance of the first step', -2,
        { r: 'Withholding the plan violates consent', approach: 'Withhold-rationale framing', why: 'Concealing the plan undermines informed, autonomous consent', keys: ['transparency'], mistake: 'Hiding the treatment rationale from the client' }),
      O('d', 'Ask another client who completed exposure to reassure her about it instead of reviewing the consent details yourself', -2,
        { r: 'Using another client breaches confidentiality', approach: 'Peer-proxy framing', why: 'Bringing in another client breaches confidentiality and skips consent', keys: ['confidentiality'], mistake: 'Outsourcing consent and breaching privacy' }),
    ]),
    Q('q13', 'ethics', 'Nadia asks whether you have the training to deliver exposure therapy. The most ethical response is to:', ['R4'], [
      O('a', 'Answer honestly about your competence and seek consultation or refer for any components beyond your training', 3,
        { r: 'Practice within competence', approach: 'Be transparent about competence', why: 'ACA C.2. requires practicing within competence and consulting or referring as needed', keys: ['client asks about training', 'evidence-based method'], mistake: 'Overstating competence to retain the client' }),
      O('b', 'Assure her you can handle anything at all and that there is no need for her to ask about your training or background again', -2,
        { r: 'Overstating competence is unethical', approach: 'Overclaim framing', why: 'Misrepresenting competence violates the ethics code', keys: ['honest representation'], mistake: 'Claiming competence you cannot support' }),
      O('c', 'Tell her the question is inappropriate and that clients should not ask their counselors about their qualifications at all', -2,
        { r: 'Dismissing the question is wrong', approach: 'Dismissive framing', why: 'Clients are entitled to ask about competence and credentials', keys: ['client autonomy'], mistake: 'Shutting down a legitimate question' }),
      O('d', 'Transfer her to someone else at once without explanation rather than discuss your training or arrange a coordinated handoff', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'An honest conversation, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the client instead of answering honestly' }),
    ]),
  ],
};

// ============================================================================
// D151 — Schizoaffective Disorder, Bipolar Type (F25.0) — Psychotic — hard
// ============================================================================
const D151 = {
  id: 'ncmhce-D151',
  title: 'Psychosis that persists between mood episodes',
  category: 'Psychotic',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Schizoaffective Disorder, Bipolar Type', code: 'F25.0' },
  diagnosis: { name: 'Schizoaffective Disorder, Bipolar Type', code: 'F25.0' },
  differentialOptions: [
    { id: 'do1', name: 'Schizoaffective Disorder, Bipolar Type', isCorrect: true },
    { id: 'do2', name: 'Schizophrenia', isCorrect: false },
    { id: 'do3', name: 'Bipolar I Disorder, with Psychotic Features', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, with Psychotic Features', isCorrect: false },
  ],
  narrative: {
    intake:
      'Marcus Bell, a 34-year-old former rideshare driver, is referred after a hospitalization. Over the past two years he has had episodes of ' +
      'elevated, expansive mood with little sleep and grandiose plans, as well as periods of persecutory delusions and auditory hallucinations.',
    session1:
      'Records and his account show at least two weeks of delusions and hallucinations occurring while his mood was stable and neither high nor ' +
      'low. Mood episodes—both manic and depressive—have been present for the majority of the illness, and substance and medical causes were excluded.',
    session2:
      'Currently his mood is euthymic but he still hears critical voices and remains guarded. He is taking medication intermittently, has lost ' +
      'housing stability, and at one low point had fleeting thoughts that life was not worth living, without current plan or intent.',
  },
  diagnosticRationale:
    'An uninterrupted period of illness with a major mood episode concurrent with active-phase psychotic symptoms, at least two weeks of ' +
    'delusions or hallucinations in the absence of a major mood episode, and mood episodes present for the majority of the illness meets DSM-5-TR ' +
    'criteria for schizoaffective disorder, bipolar type—distinct from schizophrenia, bipolar I with psychotic features, and psychotic depression.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Schizoaffective disorder: 2+ weeks of psychosis without a mood episode; mood episodes present majority of illness' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Psychosis and bipolar: combined pharmacotherapy and psychosocial intervention within coordinated care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk across psychotic and mood illness' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'B.2. and C.2.: coordination of care, danger exceptions, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance and recovery-oriented, supportive engagement' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a schizoaffective disorder diagnosis?', ['R1'], [
      O('a', 'At least two weeks of psychosis without a mood episode, with mood episodes present for most of the illness', 3,
        { r: 'Psychosis without mood plus mood majority', approach: 'Confirm the core criteria', why: 'Schizoaffective disorder requires both the 2-week psychosis-without-mood period and mood episodes for most of the course', keys: ['two weeks of psychosis while euthymic', 'mood episodes most of the illness'], mistake: 'Diagnosing without confirming both the timing criteria' }),
      O('b', 'That he can identify the single stressful event he believes first set off his very first hospitalization', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his symptoms have grown a little more intense over the past few days than they were the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The longitudinal pattern, not a recent uptick, defines it', keys: ['longitudinal course'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently shows the exact number of neurocognitive deficits required to diagnose a major neurocognitive disorder', 0,
        { r: 'Cognitive count does not define it', approach: 'Neurocognitive framing', why: 'Schizoaffective disorder is defined by mood and psychotic criteria', keys: ['psychotic-mood diagnosis'], mistake: 'Applying neurocognitive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from schizophrenia?', ['R1'], [
      O('a', 'Mood episodes have been present for the majority of his illness rather than being brief or only incidental', 3,
        { r: 'Mood episodes predominate the course', approach: 'Contrast the mood burden', why: 'In schizophrenia mood episodes are brief relative to the psychosis; here they predominate', keys: ['manic and depressive episodes most of the illness'], mistake: 'Overlooking the predominance of mood episodes' }),
      O('b', 'The fact that he has experienced persecutory delusions and hears critical auditory hallucinations during parts of his illness', -1,
        { r: 'Psychosis occurs in both', approach: 'Psychosis-presence framing', why: 'Delusions and hallucinations occur in both; the mood burden differs', keys: ['shared feature'], mistake: 'Using psychosis to differentiate' }),
      O('c', 'The guardedness and the mistrust that he shows toward other people during the times when he is feeling unwell', -1,
        { r: 'Guardedness occurs in both', approach: 'Guardedness framing', why: 'Suspiciousness is shared across both conditions', keys: ['shared affect'], mistake: 'Reading guardedness as decisive' }),
      O('d', 'The way his symptoms have tended to worsen around the most stressful and disruptive periods in his living situation', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from bipolar I disorder with psychotic features?', ['R1'], [
      O('a', 'He has had psychosis for two or more weeks while his mood was stable, not only during mood episodes', 3,
        { r: 'Psychosis outside of mood episodes', approach: 'Contrast where psychosis occurs', why: 'In bipolar I, psychosis is confined to mood episodes; here it persists between them', keys: ['psychosis while euthymic'], mistake: 'Missing the psychosis that occurs outside mood episodes' }),
      O('b', 'The fact that he has gone through clear periods of elevated, expansive mood with reduced sleep and grandiose plans', -1,
        { r: 'Manic episodes occur in both', approach: 'Mania-presence framing', why: 'Manic episodes occur in both; the standalone psychosis differs', keys: ['shared feature'], mistake: 'Using mania to differentiate' }),
      O('c', 'The grandiose thoughts and the ambitious plans that he tends to form when his mood is running high', -1,
        { r: 'Grandiosity occurs in both', approach: 'Grandiosity framing', why: 'Grandiosity appears in both during elevated mood', keys: ['shared content'], mistake: 'Reading grandiosity as decisive' }),
      O('d', 'The way his sleep tends to be more broken during the noisier and more crowded nights at the places where he has stayed', 0,
        { r: 'Environmental sleep disruption is nonspecific', approach: 'Environment framing', why: 'Situational poor sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q4', 'core', 'What is the most important condition to exclude before confirming the diagnosis?', ['R1'], [
      O('a', 'A substance- or medical-induced cause, which the records indicate were already assessed and excluded', 3,
        { r: 'Exclude substance and medical causes', approach: 'Rule out organic and substance causes', why: 'Substances and medical conditions can produce mood and psychotic symptoms and must be excluded', keys: ['substance and medical causes excluded'], mistake: 'Skipping the substance and medical rule-out' }),
      O('b', 'A previously undetected specific phobia that might better account for his guardedness around other people', -1,
        { r: 'Phobia does not explain psychosis', approach: 'Phobia framing', why: 'A phobia does not account for delusions and hallucinations', keys: ['psychotic features'], mistake: 'Reducing psychosis to a phobia' }),
      O('c', 'A long-standing eating disorder that could be the sole and complete explanation for his mood and psychotic symptoms', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurodevelopmental disorder that could explain why his plans during high periods are so ambitious', 0,
        { r: 'Neurodevelopmental framing is implausible', approach: 'Developmental framing', why: 'The episodic adult course fits schizoaffective disorder', keys: ['adult episodic course'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'intake', 'Given his fleeting thoughts that life was not worth living, what is the most important assessment step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment of current ideation, intent, plan, and protective factors now', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Elevated risk across psychotic and mood illness warrants structured assessment of current risk', keys: ['fleeting thoughts life not worth living', 'unstable housing'], mistake: 'Failing to assess current suicide risk' }),
      O('b', 'Assume the risk has fully passed because he says the thoughts were only fleeting and he denies any plan right now', -2,
        { r: 'Assuming risk passed is unsafe', approach: 'Dismissal framing', why: 'Past ideation still requires structured current assessment', keys: ['ongoing risk factors'], mistake: 'Dismissing risk on reassurance' }),
      O('c', 'Defer any risk assessment until his psychotic symptoms have fully resolved and his mood has been stable for several months', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after symptoms resolve', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on his housing situation for now and plan to return to any questions about his safety at a much later date', -1,
        { r: 'Deferring safety to address housing first', approach: 'Single-issue framing', why: 'Housing matters, but current safety is assessed now', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation?', ['R2'], [
      O('a', 'Coordinate combined pharmacotherapy and psychosocial support within a treatment team and your counseling role', 3,
        { r: 'Combined meds and psychosocial care', approach: 'Apply the guideline within scope', why: 'Schizoaffective disorder is managed with combined medication and psychosocial care in a team', keys: ['psychosis and mood episodes', 'intermittent medication'], mistake: 'Offering counseling alone for schizoaffective disorder' }),
      O('b', 'Begin intensive insight-oriented therapy alone to help him uncover the deeper meaning of his hallucinations before anything else', -1,
        { r: 'Insight-only is not first-line', approach: 'Depth-work framing', why: 'Coordinated medication and psychosocial care come first', keys: ['combined care'], mistake: 'Prioritizing insight over indicated care' }),
      O('c', 'Adjust his antipsychotic and mood-stabilizer doses yourself and monitor his blood levels over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or monitor psychiatric medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Recommend a course of weekly supportive talks on their own as the complete treatment for his condition going forward', -1,
        { r: 'Talks alone are insufficient', approach: 'Counseling-only framing', why: 'Schizoaffective disorder warrants combined care, not talk alone', keys: ['under-treatment'], mistake: 'Omitting medication coordination' }),
    ]),
    Q('q7', 'treatment', 'Given his intermittent medication use, what should the plan emphasize?', ['R5'], [
      O('a', 'Collaborative work on engagement and adherence, addressing the barriers that interrupt his medication and care', 3,
        { r: 'Engagement and adherence support', approach: 'Target the adherence barriers', why: 'Recovery depends on engagement and addressing the barriers to consistent medication', keys: ['taking medication intermittently', 'unstable housing'], mistake: 'Ignoring the adherence and engagement barriers' }),
      O('b', 'Tell him that if he will not take his medication exactly as directed there is no point in continuing any counseling at all', -2,
        { r: 'Ultimatums rupture engagement', approach: 'Ultimatum framing', why: 'Conditioning care on perfect adherence drives disengagement', keys: ['engagement matters'], mistake: 'Making care contingent on adherence' }),
      O('c', 'Leave all decisions about his medication entirely to him without ever raising adherence as a topic in the counseling work', -1,
        { r: 'Never raising adherence neglects a key issue', approach: 'Hands-off framing', why: 'Adherence is a legitimate, collaborative focus within scope', keys: ['shared focus'], mistake: 'Avoiding an important treatment target' }),
      O('d', 'Advise him to stop the medication during good stretches and only restart it whenever his symptoms happen to come back', -2,
        { r: 'Encouraging stop-start worsens course', approach: 'Intermittent-use framing', why: 'Advising self-directed stopping is unsafe and worsens outcomes', keys: ['continuity of treatment'], mistake: 'Recommending an unsafe medication pattern' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor address his unstable housing within the plan?', ['R2'], [
      O('a', 'Coordinate case management and community resources for housing as part of recovery-oriented, wraparound support', 3,
        { r: 'Coordinate housing and community resources', approach: 'Integrate psychosocial needs', why: 'Stable housing supports recovery and is addressed through coordinated community resources', keys: ['lost housing stability'], mistake: 'Treating symptoms while ignoring housing instability' }),
      O('b', 'Treat his housing situation as completely unrelated to his mental health and leave it out of the plan entirely', -1,
        { r: 'Housing is part of recovery', approach: 'Siloed framing', why: 'Social determinants like housing are integral to recovery planning', keys: ['psychosocial determinants'], mistake: 'Ignoring a key recovery factor' }),
      O('c', 'Personally guarantee a lease and advance him the rent yourself so that his housing problem is resolved immediately', -2,
        { r: 'Financial entanglement crosses boundaries', approach: 'Boundary-crossing framing', why: 'Lending money or co-signing creates a harmful dual relationship', keys: ['professional boundaries'], mistake: 'Crossing financial boundaries with a client' }),
      O('d', 'Tell him to sort out his own housing entirely before he returns, since counseling cannot start until his life is stable', -2,
        { r: 'Withholding care is inappropriate', approach: 'Precondition framing', why: 'Care is not withheld pending a stable life situation', keys: ['access to care'], mistake: 'Setting stability as a precondition for treatment' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with his prescriber and the hospital team?', ['R4'], [
      O('a', 'Obtain his informed consent and a release, then collaborate with the team and share what is needed for his care', 3,
        { r: 'Consent and release before coordinating', approach: 'Secure consent first', why: 'Coordination requires a valid release before sharing protected information', keys: ['multiple providers', 'recent hospitalization'], mistake: 'Coordinating before obtaining consent' }),
      O('b', 'Share his full history with everyone involved right away, since coordinating his care is plainly in his best interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Avoid contacting the prescriber or the hospital at all so that his counseling stays completely separate from his other care', -1,
        { r: 'No coordination undercuts team care', approach: 'Siloed-care framing', why: 'Consented coordination benefits care here', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Release every detail of his record to all parties so they each hold the complete picture of everything in his treatment', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure is consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
    Q('q10', 'counseling', 'During a session Marcus says the voices are mocking him right now. The most therapeutic response is to:', ['R5'], [
      O('a', 'Acknowledge how distressing the voices are and stay supportive, without confirming or arguing about their reality', 3,
        { r: 'Validate distress, stay neutral on content', approach: 'Support without colluding or confronting', why: 'A supportive stance that neither validates nor disputes the voices preserves the alliance', keys: ['hears critical voices', 'guarded'], mistake: 'Either agreeing the voices are real or flatly arguing they are not' }),
      O('b', 'Insist firmly and repeatedly that the voices are not real until he finally agrees that there is nothing there at all', -2,
        { r: 'Confronting the psychosis ruptures the alliance', approach: 'Confront framing', why: 'Arguing about reality tends to entrench distress and damage trust', keys: ['fragile alliance'], mistake: 'Disputing the hallucination to manage it' }),
      O('c', 'Agree with him that the voices are real people who are truly speaking to him so that he feels you are on his side', -2,
        { r: 'Colluding reinforces the symptom', approach: 'Collude framing', why: 'Agreeing reinforces the psychotic experience', keys: ['reality testing'], mistake: 'Validating the hallucination to keep rapport' }),
      O('d', 'Change the subject immediately so the conversation never touches anything that might upset or provoke him further', -1,
        { r: 'Total avoidance misses an opening', approach: 'Avoidant framing', why: 'His distress can be engaged supportively rather than sidestepped', keys: ['engage the distress'], mistake: 'Sidestepping the relevant material' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best build engagement given his guardedness?', ['R5'], [
      O('a', 'Move at his pace, be transparent and consistent, and work toward concrete goals he chooses and values', 3,
        { r: 'Pace, transparency, and shared goals', approach: 'Build trust on his terms', why: 'A consistent, transparent, goal-focused stance builds the alliance with a guarded client', keys: ['guarded', 'recovery-oriented'], mistake: 'Pushing for disclosure faster than the alliance allows' }),
      O('b', 'Press him to disclose all of his most private experiences in the very first sessions to speed the work along quickly', -1,
        { r: 'Pressured disclosure ruptures trust', approach: 'Push-disclosure framing', why: 'Forcing early disclosure undermines a fragile alliance', keys: ['paced engagement'], mistake: 'Demanding disclosure too fast' }),
      O('c', 'Focus the sessions mainly on collecting ever more detail about the content of the voices he hears each week', -1,
        { r: 'Dwelling on content can reinforce it', approach: 'Content-focus framing', why: 'Elaborating the hallucination content is not the therapeutic priority', keys: ['symptom focus'], mistake: 'Centering the work on psychotic content' }),
      O('d', 'Tell him counseling can do nothing for him unless he first agrees to take his medication exactly as prescribed', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Supportive engagement proceeds alongside coordinating medical care', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Marcus discloses a specific, credible plan to harm an identifiable person. The most appropriate action is to:', ['R4'], [
      O('a', 'Assess the risk and follow duty-to-protect obligations, which may require warning or other protective steps', 3,
        { r: 'Assess and act on duty to protect', approach: 'Apply duty-to-protect', why: 'A serious, specific, identifiable threat triggers assessment and protective duties', keys: ['specific plan', 'identifiable person'], mistake: 'Treating an identifiable threat as fully confidential' }),
      O('b', 'Keep the threat entirely confidential, since everything shared in counseling must always stay completely private', -2,
        { r: 'Confidentiality yields to a serious threat', approach: 'Absolutist framing', why: 'A serious, identifiable threat can require disclosure', keys: ['identifiable target'], mistake: 'Treating confidentiality as absolute when there is danger' }),
      O('c', 'Wait to see whether he repeats the threat at the next appointment before assessing the risk or taking any action', -2,
        { r: 'Delaying assessment is unsafe', approach: 'Wait-and-see framing', why: 'An identifiable threat requires prompt assessment', keys: ['active threat'], mistake: 'Postponing an urgent risk assessment' }),
      O('d', 'Notify the police and the person at once without first assessing the seriousness or following the proper protective process', -1,
        { r: 'Act on assessed risk, not reflexively', approach: 'Reflexive-disclosure framing', why: 'Protective steps follow a careful risk assessment', keys: ['proportionate response'], mistake: 'Disclosing before assessing the risk' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited experience with serious psychotic illness. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and work within a treatment team, referring for the components beyond your competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; schizoaffective disorder is managed within a team', keys: ['limited psychosis experience', 'needs coordinated care'], mistake: 'Managing serious psychotic illness alone without competence' }),
      O('b', 'Continue managing the entire case alone to preserve the continuity of the relationship he has built with you', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell him his illness is not serious enough to need a team and keep seeing him for supportive talks only', -2,
        { r: 'Minimizing the illness fails the client', approach: 'Downplay framing', why: 'Schizoaffective disorder warrants coordinated, specialist-informed care', keys: ['serious illness'], mistake: 'Underestimating the need for team care' }),
      O('d', 'Transfer him at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D152 — Obsessive-Compulsive Personality Disorder (F60.5) — Personality — hard
// ============================================================================
const D152 = {
  id: 'ncmhce-D152',
  title: 'Perfectionism and rigidity that strain work and family',
  category: 'Personality',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Obsessive-Compulsive Personality Disorder', code: 'F60.5' },
  diagnosis: { name: 'Obsessive-Compulsive Personality Disorder', code: 'F60.5' },
  differentialOptions: [
    { id: 'do1', name: 'Obsessive-Compulsive Personality Disorder', isCorrect: true },
    { id: 'do2', name: 'Obsessive-Compulsive Disorder', isCorrect: false },
    { id: 'do3', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Narcissistic Personality Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Eleanor Whitfield, a 45-year-old attorney, comes in at her partner’s urging. She describes a lifelong pattern of perfectionism, ' +
      'preoccupation with rules and order, and difficulty delegating because others will not meet her exacting standards for the work.',
    session1:
      'She works to the point of neglecting leisure and relationships, is rigid about morals and procedures, and struggles to discard worn-out ' +
      'items. She does not see these traits as symptoms; they feel like simply who she is, though they create real friction at home and at work.',
    session2:
      'She denies the intrusive, unwanted obsessions and ritual compulsions of OCD; her perfectionism is ego-syntonic and pervasive across ' +
      'settings. She is reserved and controlled rather than grandiose, and she came mainly because her partner threatened to leave over the strain.',
  },
  diagnosticRationale:
    'A pervasive pattern of preoccupation with orderliness, perfectionism, and mental and interpersonal control at the expense of flexibility ' +
    'and openness, beginning by early adulthood and present across contexts, meets DSM-5-TR criteria for obsessive-compulsive personality ' +
    'disorder—distinct from the ego-dystonic obsessions and compulsions of OCD, the worry of GAD, and the grandiosity of narcissistic PD.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'OCPD: pervasive preoccupation with order, perfectionism, and control at the expense of flexibility, by early adulthood' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Approach selection, the working alliance, and addressing rigidity in personality-focused work' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when depressive symptoms or relationship crisis co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, autonomy, and practicing within competence' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Clinical decision-making and measurement-based care across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to support an OCPD diagnosis?', ['R1'], [
      O('a', 'A pervasive, early-adulthood pattern of perfectionism and control across settings at the expense of flexibility', 3,
        { r: 'Pervasive, early-onset trait pattern', approach: 'Confirm the trait pattern', why: 'OCPD requires a pervasive, enduring pattern of perfectionism and control beginning by early adulthood', keys: ['lifelong perfectionism', 'pervasive across settings'], mistake: 'Diagnosing from a single situation rather than a pervasive pattern' }),
      O('b', 'That she can name the single past event she believes first made her so focused on order and on her standards', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['pattern-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her rigidity has grown a bit more noticeable over the past few days than it was the week just before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A pervasive, enduring pattern is required', keys: ['enduring pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define OCPD', approach: 'Mood-criteria framing', why: 'OCPD is a personality pattern, not a mood episode', keys: ['personality pattern'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from obsessive-compulsive disorder?', ['R1'], [
      O('a', 'Her perfectionism is ego-syntonic and trait-like, without the intrusive obsessions and ritual compulsions seen in OCD', 3,
        { r: 'Ego-syntonic traits, no obsessions or compulsions', approach: 'Contrast ego-syntonic traits with OCD symptoms', why: 'OCD involves ego-dystonic obsessions and compulsions; OCPD is an ego-syntonic trait pattern', keys: ['denies intrusive obsessions', 'traits feel like who she is'], mistake: 'Confusing trait perfectionism with the symptoms of OCD' }),
      O('b', 'The fact that she keeps very high standards for herself and tends to be quite orderly and careful about her work', -1,
        { r: 'High standards appear in both', approach: 'High-standards framing', why: 'Orderliness can appear in both; the ego-syntonic, trait quality differs', keys: ['shared feature'], mistake: 'Using high standards to differentiate' }),
      O('c', 'The discomfort that she feels when things around her are not arranged in the particular way that she prefers', -1,
        { r: 'Discomfort with disorder occurs in both', approach: 'Discomfort framing', why: 'Both can dislike disorder; the symptom structure differs', keys: ['shared discomfort'], mistake: 'Reading discomfort as decisive' }),
      O('d', 'The way her need for control tends to feel stronger during the busiest and most demanding weeks at her firm', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from narcissistic personality disorder?', ['R1'], [
      O('a', 'Her control centers on order and standards rather than on grandiosity, admiration-seeking, and entitlement', 3,
        { r: 'Order and standards versus grandiosity', approach: 'Contrast the core motive', why: 'Narcissistic PD centers on grandiosity and admiration; OCPD centers on order and control', keys: ['reserved and controlled, not grandiose'], mistake: 'Confusing perfectionistic control with narcissistic grandiosity' }),
      O('b', 'The fact that she can be difficult to work alongside and that her standards strain some of her closest relationships', -1,
        { r: 'Interpersonal friction occurs in both', approach: 'Friction framing', why: 'Relationship strain occurs in both; the core motive differs', keys: ['shared feature'], mistake: 'Using interpersonal friction to differentiate' }),
      O('c', 'The firmness with which she holds to her own particular views about the proper way that things ought to be done', -1,
        { r: 'Firm views occur in both', approach: 'Firmness framing', why: 'Holding firm views appears in both; the motive differs', keys: ['shared rigidity'], mistake: 'Reading firmness as decisive' }),
      O('d', 'The way her irritability tends to be a bit worse in the evenings than it is earlier on during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'What is most useful to assess given that she came at her partner’s urging?', ['R2'], [
      O('a', 'Her own motivation and goals for change, and how ego-syntonic the traits feel, to gauge engagement and direction', 3,
        { r: 'Motivation and ego-syntonicity', approach: 'Assess readiness and self-view', why: 'Engagement in personality-focused work depends on her own motivation and how ego-syntonic the traits feel', keys: ['came at partner’s urging', 'traits feel like who she is'], mistake: 'Assuming readiness without assessing her own goals' }),
      O('b', 'A detailed audit of her household finances and filing systems to confirm just how orderly she truly is at home', -1,
        { r: 'A trait audit is not the priority', approach: 'Trait-audit framing', why: 'It does not inform engagement or the direction of work', keys: ['plan-relevant data'], mistake: 'Cataloguing traits instead of assessing motivation' }),
      O('c', 'Whether her rigidity can be traced to a single childhood rule that fully explains all of her current behavior', -1,
        { r: 'A single origin is not the target', approach: 'Origin-hunting framing', why: 'The work targets current patterns and motivation, not a single origin', keys: ['present patterns'], mistake: 'Hunting for an origin instead of readiness' }),
      O('d', 'Her general aesthetic preferences and tastes so that the office and the sessions can be arranged to her liking', 0,
        { r: 'Preferences are secondary', approach: 'Preference framing', why: 'Useful rapport detail but not what engagement hinges on', keys: ['secondary factor'], mistake: 'Prioritizing preferences over motivation' }),
    ]),
    Q('q5', 'intake', 'What co-occurring issue is most important to screen for given the relationship crisis?', ['R3'], [
      O('a', 'Depression and suicide risk, since relationship strain and rigidity can drive low mood that warrants screening', 3,
        { r: 'Screen depression and suicide risk', approach: 'Assess comorbidity and risk', why: 'A relationship crisis with longstanding rigidity can precipitate depression and elevated risk', keys: ['partner threatened to leave', 'real friction at home'], mistake: 'Addressing the traits without screening mood and risk' }),
      O('b', 'A previously undetected primary psychotic disorder that might account for her preoccupation with order and rules', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of her perfectionism and her control', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could explain why she works such long hours at her law firm lately', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'The lifelong trait pattern fits OCPD, not decline', keys: ['lifelong pattern'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment framework for Eleanor?', ['R2'], [
      O('a', 'Psychotherapy focused on flexibility and the alliance, working with her values toward goals she chooses to pursue', 3,
        { r: 'Psychotherapy targeting flexibility', approach: 'Apply a personality-focused approach', why: 'OCPD is addressed in psychotherapy that builds flexibility within a strong, collaborative alliance', keys: ['rigidity strains relationships', 'wants to keep her relationship'], mistake: 'Treating OCPD as if it were an acute symptom to be removed' }),
      O('b', 'A brief, manualized protocol aimed only at eliminating intrusive obsessions and ritual compulsions as quickly as possible', -1,
        { r: 'OCD protocol does not fit OCPD', approach: 'Misapplied-protocol framing', why: 'She has no obsessions or compulsions; an OCD protocol is not indicated', keys: ['no OCD symptoms'], mistake: 'Applying an OCD treatment to a personality pattern' }),
      O('c', 'Telling her plainly that personality traits cannot change and that she should simply expect her partner to adjust instead', -2,
        { r: 'Dismissing change is counter-therapeutic', approach: 'Therapeutic-nihilism framing', why: 'Personality-focused work can build flexibility; dismissing change abandons the client', keys: ['change is possible'], mistake: 'Foreclosing change and shifting blame to the partner' }),
      O('d', 'Starting her on a medication that you will select and adjust to reduce her perfectionism over the coming months', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor handle her difficulty delegating and her control in the work itself?', ['R2'], [
      O('a', 'Use the alliance to gently experiment with flexibility and tolerating imperfection in small, collaborative steps', 3,
        { r: 'Experiment with flexibility collaboratively', approach: 'Build flexibility gradually', why: 'Graded experiments with imperfection and delegation, within the alliance, address the core rigidity', keys: ['difficulty delegating', 'exacting standards'], mistake: 'Confronting the control head-on without building the alliance' }),
      O('b', 'Match her rigidity by running the sessions to a strict, fixed agenda that can never be altered for any reason at all', -1,
        { r: 'Mirroring rigidity reinforces it', approach: 'Rigid-structure framing', why: 'An inflexible structure reinforces the very pattern being treated', keys: ['flexibility is the target'], mistake: 'Reinforcing the rigidity in the room' }),
      O('c', 'Insist that she immediately stop all of her perfectionistic behaviors at home and at work before the next session', -1,
        { r: 'Demanding sudden change backfires', approach: 'Ultimatum framing', why: 'Abrupt demands ignore the graded, alliance-based nature of the work', keys: ['graded change'], mistake: 'Pushing for total change at once' }),
      O('d', 'Avoid the topic of control entirely so that the sessions never touch on anything that might feel challenging to her', -1,
        { r: 'Total avoidance misses the target', approach: 'Avoidant framing', why: 'The control pattern is the focus and is engaged, not sidestepped', keys: ['engage the pattern'], mistake: 'Avoiding the central clinical issue' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked in this personality-focused work?', ['R5'], [
      O('a', 'Track collaboratively chosen indicators of flexibility and relationship functioning over time to guide the work', 3,
        { r: 'Measurement-based, collaborative tracking', approach: 'Measure functioning over time', why: 'Tracking flexibility and relationship functioning guides a longer-term, personality-focused course', keys: ['relationship strain', 'rigidity across settings'], mistake: 'Proceeding without any way to gauge change' }),
      O('b', 'Rely only on whether she happens to remark in session that things at home feel a little smoother than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how neat and well organized her paperwork and intake forms happen to be at each appointment', -1,
        { r: 'Tidiness is not the outcome', approach: 'Wrong-metric framing', why: 'Orderliness is the trait, not the treatment outcome', keys: ['functioning focus'], mistake: 'Measuring the wrong variable' }),
      O('d', 'Wait until the very last session to decide whether anything has changed at all since the first appointment', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer a longer course', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor handle her partner’s wish to be involved in the treatment?', ['R4'], [
      O('a', 'Clarify who the client is, obtain her consent, and consider couples or family work only with appropriate agreements', 3,
        { r: 'Clarify client and consent before involving others', approach: 'Define roles and consent', why: 'Involving the partner requires clarity about the client and her informed consent', keys: ['partner urged her to come', 'relationship focus'], mistake: 'Involving the partner without consent or role clarity' }),
      O('b', 'Bring the partner into every individual session right away without first discussing it or obtaining her consent at all', -2,
        { r: 'Involving the partner without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'The partner cannot be included without her informed consent', keys: ['no consent'], mistake: 'Disregarding consent and confidentiality' }),
      O('c', 'Take the partner’s account as the definitive version of the problem and base the entire plan on what the partner reports', -1,
        { r: 'Deferring to the partner displaces the client', approach: 'Third-party framing', why: 'The client’s own perspective and goals anchor the work', keys: ['client-centered'], mistake: 'Letting a third party define the treatment' }),
      O('d', 'Refuse any contact with the partner under all circumstances, even where she requests and consents to joint sessions', -1,
        { r: 'Blanket refusal ignores her wishes', approach: 'Absolute-refusal framing', why: 'Consented couples work can be appropriate when she chooses it', keys: ['client choice'], mistake: 'Ruling out a consented, indicated option' }),
    ]),
    Q('q10', 'counseling', 'Eleanor criticizes the counseling as "inefficient" and not rigorous enough. The most therapeutic response is to:', ['R2'], [
      O('a', 'Explore the reaction with curiosity and use it to understand her standards, while preserving the collaborative alliance', 3,
        { r: 'Explore the reaction, protect the alliance', approach: 'Work with the transference of her standards', why: 'Her critique reflects the very standards being treated and can be explored within the alliance', keys: ['exacting standards', 'critical of imperfection'], mistake: 'Becoming defensive or simply complying with her demand for more rigor' }),
      O('b', 'Apologize and immediately restructure the entire treatment to meet her demand for maximum efficiency and rigor', -1,
        { r: 'Capitulating reinforces the rigidity', approach: 'Comply framing', why: 'Reorganizing to satisfy her standards reinforces the pattern being treated', keys: ['flexibility is the goal'], mistake: 'Accommodating the rigidity rather than exploring it' }),
      O('c', 'Defend your approach firmly and explain in detail why her judgment about the counseling is simply mistaken here', -1,
        { r: 'Defensiveness ruptures the alliance', approach: 'Defensive framing', why: 'Arguing about who is right damages the working relationship', keys: ['collaborative stance'], mistake: 'Turning the moment into a debate' }),
      O('d', 'Let the criticism pass without comment and quietly move on so that the session never becomes uncomfortable for either of you', -1,
        { r: 'Ignoring it misses clinical material', approach: 'Avoidant framing', why: 'The reaction is useful material to engage, not avoid', keys: ['engage the moment'], mistake: 'Sidestepping a meaningful interaction' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Eleanor’s engagement given the traits are ego-syntonic?', ['R2'], [
      O('a', 'Anchor the work in goals she values, such as saving her relationship, linking flexibility to outcomes she wants', 3,
        { r: 'Anchor in her own valued goals', approach: 'Connect change to her values', why: 'Linking flexibility to outcomes she cares about engages a client whose traits feel ego-syntonic', keys: ['ego-syntonic traits', 'wants to keep her partner'], mistake: 'Framing the traits as defects she must simply renounce' }),
      O('b', 'Insist that she first accept that her personality is fundamentally disordered before any real work can begin with her', -1,
        { r: 'Demanding a deficit self-label stalls engagement', approach: 'Label-first framing', why: 'Requiring her to renounce her self-view blocks engagement', keys: ['ego-syntonic'], mistake: 'Setting an insight precondition' }),
      O('c', 'Focus the sessions mainly on cataloguing every example of her perfectionism in exhaustive detail each week', -1,
        { r: 'Cataloguing traits is not therapeutic', approach: 'Trait-focus framing', why: 'Listing traits does not advance the valued-goals work', keys: ['goal focus'], mistake: 'Centering the work on enumerating traits' }),
      O('d', 'Tell her that counseling cannot help her at all unless she is first willing to give up her career entirely', -2,
        { r: 'An extreme ultimatum is inappropriate', approach: 'Ultimatum framing', why: 'Demanding she abandon her career is neither indicated nor ethical', keys: ['proportionate goals'], mistake: 'Imposing an extreme and unwarranted condition' }),
    ]),
    Q('q12', 'ethics', 'Eleanor wants the counselor to send a letter to her partner stating she has "fixed" her issues. The most appropriate action is to:', ['R4'], [
      O('a', 'Decline to misrepresent her progress and discuss honest, accurate ways to communicate with her partner instead', 3,
        { r: 'Do not misrepresent; offer accurate options', approach: 'Maintain honesty in records and statements', why: 'The counselor cannot certify a false claim and instead supports honest communication', keys: ['wants a letter saying she is fixed', 'early in treatment'], mistake: 'Writing an inaccurate letter to satisfy the client' }),
      O('b', 'Write the letter exactly as she requests, since keeping the client satisfied is what matters most in the relationship', -2,
        { r: 'Falsifying a statement is unethical', approach: 'Please-the-client framing', why: 'Issuing a knowingly inaccurate letter violates honesty in professional statements', keys: ['accurate representation'], mistake: 'Misrepresenting progress in writing' }),
      O('c', 'Refuse any communication with the partner at all and decline to discuss the request any further with the client', -1,
        { r: 'Flat refusal forecloses helpful options', approach: 'Stonewall framing', why: 'Honest, consented communication can be explored rather than refused outright', keys: ['consented options'], mistake: 'Shutting down a workable, ethical alternative' }),
      O('d', 'Have her draft whatever letter she wants and simply sign it for her without reviewing what it actually claims', -2,
        { r: 'Signing an unreviewed claim is unethical', approach: 'Rubber-stamp framing', why: 'Signing a statement without verifying accuracy violates professional honesty', keys: ['professional honesty'], mistake: 'Endorsing a claim you have not verified' }),
    ]),
    Q('q13', 'ethics', 'Eleanor questions whether the counselor is competent to treat someone as accomplished as she is. The most ethical response is to:', ['R4'], [
      O('a', 'Respond honestly about your competence and seek consultation or refer for anything beyond your training', 3,
        { r: 'Practice within competence', approach: 'Be transparent about competence', why: 'ACA C.2. requires honest representation of competence and consultation or referral as needed', keys: ['client questions competence', 'personality-focused work'], mistake: 'Overstating competence to retain a demanding client' }),
      O('b', 'Assure her you are unquestionably the best counselor available and that she need never doubt your expertise at all', -2,
        { r: 'Grandiose overclaiming is unethical', approach: 'Overclaim framing', why: 'Misrepresenting competence violates the ethics code', keys: ['honest representation'], mistake: 'Claiming competence you cannot support' }),
      O('c', 'Tell her the question is insulting and that she has no standing to ask about your training or your qualifications', -2,
        { r: 'Dismissing the question is wrong', approach: 'Dismissive framing', why: 'Clients may ask about competence and credentials', keys: ['client autonomy'], mistake: 'Shutting down a legitimate question' }),
      O('d', 'Transfer her elsewhere at once without explanation rather than discuss your training or arrange a coordinated handoff', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'An honest conversation, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the client instead of answering honestly' }),
    ]),
  ],
};

// ============================================================================
// D153 — Gambling Disorder (F63.0) — Substance — hard
// ============================================================================
const D153 = {
  id: 'ncmhce-D153',
  title: 'Chasing losses to the brink of losing everything',
  category: 'Substance',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Gambling Disorder', code: 'F63.0' },
  diagnosis: { name: 'Gambling Disorder', code: 'F63.0' },
  differentialOptions: [
    { id: 'do1', name: 'Gambling Disorder', isCorrect: true },
    { id: 'do2', name: 'Bipolar I Disorder, Manic Episode', isCorrect: false },
    { id: 'do3', name: 'Alcohol Use Disorder, Moderate', isCorrect: false },
    { id: 'do4', name: 'Antisocial Personality Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Derek Nwosu, a 41-year-old warehouse supervisor, comes in after his partner discovered hidden debts. For over a year he has been ' +
      'preoccupied with sports betting, needing larger wagers for the same excitement and returning the next day to win back what he lost.',
    session1:
      'He has tried repeatedly to cut back and failed, lies to his family about the extent of it, has jeopardized his job, and borrowed money ' +
      'to cover losses. The gambling occurs across stable and low moods alike, not only during any period of elevated, expansive mood or energy.',
    session2:
      'He feels intense shame and hopelessness about the debt, drinks socially but not heavily, and denies a pattern of exploiting others. At ' +
      'his lowest he has thought that his family would be better off without him, with no current plan, which raises a clear concern about risk.',
  },
  diagnosticRationale:
    'Persistent, recurrent problematic gambling—preoccupation, tolerance, chasing losses, repeated failed attempts to cut back, lying, and ' +
    'jeopardizing relationships and work—over twelve months with clinically significant distress meets DSM-5-TR criteria for gambling disorder, ' +
    'distinct from gambling confined to a manic episode, a primary alcohol use disorder, and the pervasive exploitation of antisocial PD.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Gambling disorder: persistent problematic gambling with preoccupation, tolerance, chasing, and failed cutback attempts' },
    { id: 'R2', source: 'Miller & Rollnick (MI)', detail: 'Motivational interviewing for ambivalence and engagement in behavioral addiction' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given the elevated suicide risk in gambling disorder' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, confidentiality, and practicing within competence' },
    { id: 'R5', source: 'Transtheoretical Model', detail: 'Stage-matched intervention and relapse-prevention planning across change' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a gambling disorder diagnosis?', ['R1'], [
      O('a', 'Persistent problematic gambling with preoccupation, chasing losses, and repeated failed attempts to cut back', 3,
        { r: 'Preoccupation, chasing, failed cutbacks', approach: 'Confirm the core criteria', why: 'Gambling disorder requires a persistent pattern with features such as chasing and failed cutback attempts', keys: ['preoccupied with betting', 'returns to win back losses'], mistake: 'Diagnosing from heavy gambling without confirming the full pattern' }),
      O('b', 'That he can name the single stressful event he believes first set off his problems with sports betting', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his betting has grown a little heavier over the past few days than it was the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The 12-month persistent pattern is what matters', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Gambling disorder is defined by the gambling pattern, not mood criteria', keys: ['behavior-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from gambling during a manic episode?', ['R1'], [
      O('a', 'His gambling persists across stable and low moods, not only during periods of elevated, expansive mood and energy', 3,
        { r: 'Gambling outside of elevated mood', approach: 'Contrast where the behavior occurs', why: 'Manic gambling is confined to mood episodes; his persists across stable and low moods', keys: ['gambling across stable and low moods'], mistake: 'Attributing persistent gambling to mania' }),
      O('b', 'The fact that he places larger and larger bets and pursues the strong excitement that the wagering gives him', -1,
        { r: 'Risk-taking excitement occurs in both', approach: 'Excitement framing', why: 'Pursuit of excitement occurs in both; the mood context differs', keys: ['shared feature'], mistake: 'Using excitement-seeking to differentiate' }),
      O('c', 'The poor judgment about money that he shows when he keeps returning to bet despite mounting and serious losses', -1,
        { r: 'Poor money judgment occurs in both', approach: 'Judgment framing', why: 'Impaired financial judgment appears in both', keys: ['shared content'], mistake: 'Reading poor judgment as decisive' }),
      O('d', 'The way his betting tends to pick up during the busiest and most stressful stretches at the warehouse', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from antisocial personality disorder?', ['R1'], [
      O('a', 'His lying serves the gambling and he feels shame, rather than a pervasive lifelong pattern of exploiting others', 3,
        { r: 'Gambling-driven deceit with remorse, not pervasive exploitation', approach: 'Contrast motive and pervasiveness', why: 'Antisocial PD is pervasive exploitation without remorse; his deceit serves the gambling and brings shame', keys: ['lies about the gambling', 'feels intense shame'], mistake: 'Misreading addiction-driven lying as antisocial personality' }),
      O('b', 'The fact that he has at times been dishonest with his family about how much money he has actually been losing', -1,
        { r: 'Deceit can occur in both', approach: 'Deceit framing', why: 'Lying can occur in both; the motive and pervasiveness differ', keys: ['shared feature'], mistake: 'Using deceit alone to differentiate' }),
      O('c', 'The trouble he has run into at work and at home as a direct result of the consequences of his behavior', -1,
        { r: 'Functional fallout occurs in both', approach: 'Consequence framing', why: 'Impairment occurs in both; the underlying pattern differs', keys: ['shared consequences'], mistake: 'Reading consequences as decisive' }),
      O('d', 'The way his behavior tends to worsen a bit more around payday than during the rest of the working month', 0,
        { r: 'Payday timing is nonspecific', approach: 'Timing framing', why: 'A payday pattern does not differentiate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a calendar effect' }),
    ]),
    Q('q4', 'core', 'What co-occurring problem is most important to assess given his presentation?', ['R1'], [
      O('a', 'Co-occurring depression and any substance use, since both commonly accompany gambling disorder and shape the plan', 3,
        { r: 'Screen depression and substance use', approach: 'Assess comorbidity', why: 'Depression and substance use frequently co-occur with gambling disorder and alter the plan', keys: ['shame and hopelessness', 'drinks socially'], mistake: 'Treating the gambling without screening mood and substances' }),
      O('b', 'A previously undetected primary psychotic disorder that might better explain his preoccupation with sports betting', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of all of his gambling behavior', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why he keeps forgetting how much money he has wagered', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'The pattern fits gambling disorder, not memory loss', keys: ['behavior-focused'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'intake', 'Given his thought that his family would be better off without him, what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment of current ideation, intent, plan, and protective factors now', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Gambling disorder carries elevated suicide risk, so current risk is assessed directly', keys: ['family better off without him', 'intense shame and debt'], mistake: 'Failing to assess current suicide risk' }),
      O('b', 'Assume the risk has passed because he denies any current plan and says the thought only comes at his lowest points', -2,
        { r: 'Assuming risk passed is unsafe', approach: 'Dismissal framing', why: 'Passive ideation still requires structured current assessment', keys: ['ongoing risk factors'], mistake: 'Dismissing risk on reassurance' }),
      O('c', 'Defer any risk assessment until the debt is resolved and his finances have been stable for several months at least', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after the debt is resolved', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on a budgeting plan for the debt and plan to return to any safety questions at a much later date', -1,
        { r: 'Sequencing safety behind budgeting is unsafe', approach: 'Single-issue framing', why: 'Finances matter, but current safety is assessed now', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment approach for Derek?', ['R2'], [
      O('a', 'Engage his ambivalence with motivational interviewing and structured psychotherapy for the gambling within scope', 3,
        { r: 'MI plus structured psychotherapy', approach: 'Apply evidence-based behavioral treatment', why: 'Motivational interviewing and structured psychotherapy are first-line for gambling disorder', keys: ['tried to cut back and failed', 'came after debts discovered'], mistake: 'Offering only vague support without an evidence-based approach' }),
      O('b', 'Tell him to simply use more willpower and stop betting on his own, since the solution is just a matter of self-control', -2,
        { r: 'Willpower-only advice ignores the disorder', approach: 'Willpower framing', why: 'Framing an addiction as mere willpower disregards the evidence and the disorder', keys: ['repeated failed attempts'], mistake: 'Reducing a behavioral addiction to willpower' }),
      O('c', 'Start him on a medication that you will choose and adjust to reduce his urges to gamble over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Encourage him to keep betting but only with much smaller amounts so that he can win the lost money back more safely', -2,
        { r: 'Endorsing continued gambling worsens it', approach: 'Controlled-loss framing', why: 'Encouraging continued chasing reinforces the disorder', keys: ['chasing losses'], mistake: 'Endorsing the very behavior that maintains the disorder' }),
    ]),
    Q('q7', 'treatment', 'What community resource is most appropriate to integrate into his plan?', ['R5'], [
      O('a', 'A peer support program for gambling alongside counseling, with relapse-prevention planning around his triggers', 3,
        { r: 'Peer support plus relapse prevention', approach: 'Add mutual-help and relapse prevention', why: 'Peer support and relapse-prevention planning complement counseling for gambling disorder', keys: ['high-risk triggers', 'wants to stop'], mistake: 'Relying on willpower without support or relapse planning' }),
      O('b', 'A short, generic stress-management class with no specific focus on gambling, triggers, or relapse prevention at all', -1,
        { r: 'Generic class misses the target', approach: 'Nonspecific-resource framing', why: 'A general class does not address the gambling-specific risks', keys: ['gambling-specific support'], mistake: 'Choosing a resource that does not fit the problem' }),
      O('c', 'A high-stakes investing group so he can channel his interest in risk into the financial markets going forward instead', -2,
        { r: 'Substituting another risk channel is harmful', approach: 'Risk-substitution framing', why: 'Redirecting to speculative risk replicates the gambling pattern', keys: ['risk substitution'], mistake: 'Swapping one harmful risk behavior for another' }),
      O('d', 'No outside resources at all, keeping everything inside the weekly sessions so that nothing distracts from the counseling', -1,
        { r: 'Excluding support narrows the plan', approach: 'Siloed framing', why: 'Mutual-help support strengthens outcomes alongside counseling', keys: ['coordinated support'], mistake: 'Omitting helpful community resources' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor address the financial harm and his partner’s involvement?', ['R4'], [
      O('a', 'Support a referral for financial counseling and, with his consent, consider involving his partner appropriately', 3,
        { r: 'Refer for financial help; involve partner with consent', approach: 'Coordinate within scope and consent', why: 'Financial counseling is referred out, and partner involvement proceeds only with his consent', keys: ['hidden debts', 'partner discovered them'], mistake: 'Acting as his financial advisor or involving the partner without consent' }),
      O('b', 'Take over managing his money and his repayment plan yourself so that his finances are brought under control quickly', -2,
        { r: 'Managing his money crosses boundaries', approach: 'Boundary-crossing framing', why: 'Handling a client’s finances creates a harmful dual relationship outside scope', keys: ['professional boundaries'], mistake: 'Stepping outside the counseling role' }),
      O('c', 'Contact his partner directly with the details of his debts right away, since the partner clearly needs to know everything', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'Contacting the partner requires his informed consent', keys: ['no release'], mistake: 'Disclosing to a third party without consent' }),
      O('d', 'Treat the debt as entirely outside the scope of counseling and never raise the financial harm in the work at all', -1,
        { r: 'Ignoring the harm neglects a key driver', approach: 'Siloed framing', why: 'The financial harm is central and addressed through referral and planning', keys: ['integrated planning'], mistake: 'Overlooking a core consequence of the disorder' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor track progress and risk over the course of treatment?', ['R5'], [
      O('a', 'Use measurement-based tracking of gambling behavior, urges, mood, and risk to guide and adjust the plan', 3,
        { r: 'Measurement-based tracking of behavior and risk', approach: 'Monitor outcomes and safety', why: 'Tracking gambling, urges, mood, and risk steers the plan and catches deterioration', keys: ['elevated suicide risk', 'relapse potential'], mistake: 'Proceeding without monitoring behavior and risk' }),
      O('b', 'Rely only on whether he happens to say in session that the betting feels a little more under control lately', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the running total of how much money he has lost and base every decision solely on that one figure', -1,
        { r: 'A single figure is too narrow', approach: 'Single-metric framing', why: 'Behavior, urges, mood, and risk all inform the plan, not losses alone', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one number' }),
      O('d', 'Wait until the end of treatment to review whether his gambling and his mood have changed at all since intake', -1,
        { r: 'End-only review misses risk shifts', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to catch changes in risk', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q10', 'counseling', 'Derek says he feels too ashamed to continue and is thinking of quitting counseling. The most therapeutic response is to:', ['R2'], [
      O('a', 'Respond with empathy and a nonjudgmental stance, exploring the shame and his ambivalence about staying in treatment', 3,
        { r: 'Empathic, nonjudgmental exploration of shame', approach: 'Roll with resistance and reduce shame', why: 'Meeting shame nonjudgmentally and exploring ambivalence keeps him engaged', keys: ['intense shame', 'thinking of quitting'], mistake: 'Confronting or shaming him, which deepens disengagement' }),
      O('b', 'Warn him that if he leaves now he will certainly lose his family and his job, so that fear keeps him in treatment', -2,
        { r: 'Fear and shame tactics backfire', approach: 'Scare-tactic framing', why: 'Shaming, fear-based pressure tends to drive disengagement', keys: ['engagement matters'], mistake: 'Using fear to coerce continued attendance' }),
      O('c', 'Agree that he probably is not ready and let him stop, without exploring the shame or his reasons for wanting to leave', -1,
        { r: 'Premature agreement misses ambivalence', approach: 'Give-up framing', why: 'His ambivalence is worth exploring before concluding he should stop', keys: ['explore ambivalence'], mistake: 'Letting him disengage without exploration' }),
      O('d', 'Tell him his feelings of shame are not really justified and that he should simply set them aside and move forward', -1,
        { r: 'Dismissing the shame invalidates him', approach: 'Minimize framing', why: 'Dismissing the emotion undermines the alliance', keys: ['validate then explore'], mistake: 'Minimizing a central feeling' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best strengthen Derek’s motivation to change?', ['R2'], [
      O('a', 'Evoke his own reasons and values for change and support his confidence in small, achievable next steps', 3,
        { r: 'Evoke change talk and build confidence', approach: 'Use MI to build intrinsic motivation', why: 'Eliciting his own reasons and reinforcing confidence builds durable motivation', keys: ['ambivalent', 'wants to protect his family'], mistake: 'Lecturing him on why he must change instead of evoking his own motivation' }),
      O('b', 'List in detail all the terrible things that will happen to him if he fails to stop gambling immediately and completely', -1,
        { r: 'Righting-reflex lecturing raises resistance', approach: 'Confrontation framing', why: 'Arguing the case for change tends to entrench ambivalence', keys: ['evoke, do not impose'], mistake: 'Imposing motivation rather than evoking it' }),
      O('c', 'Insist he sign a strict no-gambling contract on the spot, treating any future slip as a complete and total failure', -1,
        { r: 'Rigid contracting and all-or-nothing framing backfire', approach: 'Contract framing', why: 'Punitive, all-or-nothing framing undermines relapse-prevention and motivation', keys: ['lapse versus relapse'], mistake: 'Setting up an all-or-nothing trap' }),
      O('d', 'Tell him his values are irrelevant and that he should just follow your plan exactly without questioning any of it', -2,
        { r: 'Dismissing his values undercuts motivation', approach: 'Authoritarian framing', why: 'Ignoring his values and autonomy erodes intrinsic motivation', keys: ['autonomy support'], mistake: 'Overriding the client’s autonomy' }),
    ]),
    Q('q12', 'ethics', 'Derek asks the counselor to lend him money to cover an urgent debt payment. The most appropriate action is to:', ['R4'], [
      O('a', 'Decline the loan to maintain professional boundaries and redirect him to appropriate financial and support resources', 3,
        { r: 'Decline and redirect to resources', approach: 'Maintain boundaries; coordinate help', why: 'Lending money creates a harmful dual relationship; appropriate help comes through referrals', keys: ['urgent debt', 'asks counselor for money'], mistake: 'Lending money and creating a financial dual relationship' }),
      O('b', 'Lend him the money this one time, since helping him through the immediate crisis is clearly in his best interest', -2,
        { r: 'Lending money crosses a clear boundary', approach: 'Rescue framing', why: 'A financial dual relationship harms the work regardless of intent', keys: ['professional boundaries'], mistake: 'Crossing a financial boundary to rescue the client' }),
      O('c', 'Co-sign a loan for him with a lender so that he can secure the funds he needs to make the payment right away', -2,
        { r: 'Co-signing is a financial entanglement', approach: 'Guarantor framing', why: 'Co-signing creates the same harmful dual relationship', keys: ['financial entanglement'], mistake: 'Becoming financially entangled with a client' }),
      O('d', 'Tell him the request is offensive and end the session, declining to discuss any financial resources with him at all', -1,
        { r: 'A punitive refusal abandons the need', approach: 'Punitive framing', why: 'The boundary is held while still redirecting him to legitimate help', keys: ['redirect to resources'], mistake: 'Refusing without offering an appropriate alternative' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in behavioral addictions. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and additional training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; behavioral-addiction care may need consultation, training, or referral', keys: ['limited addiction training', 'high-risk presentation'], mistake: 'Managing a complex addiction alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship he has built with you', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell him his gambling is not really serious enough to need any specialized help and continue with general talks only', -2,
        { r: 'Minimizing the disorder fails the client', approach: 'Downplay framing', why: 'A high-risk gambling disorder warrants competent, specialized care', keys: ['serious, high-risk'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer him at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D154 — Disruptive Mood Dysregulation Disorder (F34.81) — Depressive — hard
// ============================================================================
const D154 = {
  id: 'ncmhce-D154',
  title: 'Severe, recurrent outbursts and a persistently irritable child',
  category: 'Depressive',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Disruptive Mood Dysregulation Disorder', code: 'F34.81' },
  diagnosis: { name: 'Disruptive Mood Dysregulation Disorder', code: 'F34.81' },
  differentialOptions: [
    { id: 'do1', name: 'Disruptive Mood Dysregulation Disorder', isCorrect: true },
    { id: 'do2', name: 'Oppositional Defiant Disorder', isCorrect: false },
    { id: 'do3', name: 'Bipolar I Disorder', isCorrect: false },
    { id: 'do4', name: 'Intermittent Explosive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Jayden Carter, a 9-year-old boy, is brought by his mother for severe temper outbursts that erupt several times a week at home and at ' +
      'school. The outbursts are grossly out of proportion to the situation, and between them he is described as persistently irritable and angry.',
    session1:
      'The pattern began before age ten, has lasted well over a year without a symptom-free stretch of three or more months, and shows up in ' +
      'more than one setting. There are no distinct periods of elevated, expansive mood or decreased need for sleep that would point to mania.',
    session2:
      'His mother is exhausted and worried about his future, and his teachers report frequent conflict. He is not cruel to animals or deceitful ' +
      'in the way conduct problems present, and his irritability is persistent rather than confined to brief, isolated explosive episodes.',
  },
  diagnosticRationale:
    'Severe recurrent temper outbursts grossly out of proportion to provocation, occurring three or more times weekly with persistently ' +
    'irritable or angry mood between them, present for twelve or more months across settings with onset before age ten, meets DSM-5-TR criteria ' +
    'for disruptive mood dysregulation disorder—distinct from ODD, bipolar disorder’s distinct episodes, and the isolated outbursts of IED.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'DMDD: severe outbursts 3+/week with persistent irritability between them, 12+ months, onset before age 10, 2+ settings' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Childhood irritability and conduct difficulties: parent training and evidence-based psychotherapy within coordinated care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Developmentally appropriate suicide-risk screening when irritability and impairment are severe' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.5., and C.2.: welfare of minor clients, parental consent, confidentiality, and competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance with the child and family and collaborative goal setting' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a DMDD diagnosis?', ['R1'], [
      O('a', 'Severe outbursts several times a week with persistent irritability between them, across settings, for a year or more', 3,
        { r: 'Frequent severe outbursts plus persistent irritability', approach: 'Confirm the core criteria', why: 'DMDD requires frequent severe outbursts and persistent between-outburst irritability across settings over 12+ months', keys: ['outbursts several times a week', 'persistently irritable between them'], mistake: 'Diagnosing from outbursts alone without the persistent irritable mood and duration' }),
      O('b', 'That his mother can name the single event she believes first set off all of his trouble with his temper', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his outbursts have grown a little more frequent over the past few days than they were the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The 12-month pattern, not a recent uptick, is required', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete manic episode at this point in time', 0,
        { r: 'Manic count does not define DMDD', approach: 'Mania-criteria framing', why: 'DMDD is defined by chronic irritability and outbursts, not a manic episode', keys: ['no distinct mania'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from oppositional defiant disorder?', ['R1'], [
      O('a', 'The severity of the outbursts and the persistent irritable mood between them go beyond the defiance seen in ODD', 3,
        { r: 'Severe outbursts and persistent mood, not just defiance', approach: 'Contrast severity and mood', why: 'DMDD adds severe outbursts and persistent irritable mood beyond the oppositional behavior of ODD', keys: ['grossly out of proportion outbursts', 'persistent irritability'], mistake: 'Treating severe, mood-laden outbursts as simple oppositionality' }),
      O('b', 'The fact that he frequently argues with adults and resists going along with the rules and requests that they give him', -1,
        { r: 'Oppositional behavior occurs in both', approach: 'Defiance framing', why: 'Argumentative, rule-resisting behavior appears in both; severity and mood differ', keys: ['shared feature'], mistake: 'Using defiance to differentiate' }),
      O('c', 'The irritability and the short temper that he shows toward the adults around him at home and in his classroom', -1,
        { r: 'Irritability occurs in both', approach: 'Irritability framing', why: 'Irritability appears in both; its persistence and severity differ', keys: ['shared affect'], mistake: 'Reading irritability as decisive' }),
      O('d', 'The way his behavior tends to be a bit worse on school days than it is on the weekends when he is at home', 0,
        { r: 'Setting-based variation is nonspecific', approach: 'Setting framing', why: 'Day-to-day variation does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a school-versus-home effect' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from bipolar disorder?', ['R1'], [
      O('a', 'His irritability is chronic, without the distinct episodes of elevated mood and decreased sleep that define mania', 3,
        { r: 'Chronic irritability, not distinct manic episodes', approach: 'Contrast chronic versus episodic', why: 'Bipolar disorder requires distinct manic episodes; DMDD is chronic irritability without them', keys: ['no elevated mood or decreased sleep'], mistake: 'Mislabeling chronic irritability as pediatric bipolar disorder' }),
      O('b', 'The fact that he has real difficulty managing his strong feelings and his behavior when he becomes upset about something', -1,
        { r: 'Emotional dysregulation occurs in both', approach: 'Dysregulation framing', why: 'Difficulty managing emotion occurs in both; the episodic course differs', keys: ['shared feature'], mistake: 'Using dysregulation to differentiate' }),
      O('c', 'The irritable and angry mood that he displays during the times when his behavior is at its most difficult', -1,
        { r: 'Irritable mood occurs in both', approach: 'Mood framing', why: 'Irritable mood appears in both; the distinct episodes differ', keys: ['shared affect'], mistake: 'Reading irritability as decisive' }),
      O('d', 'The way his sleep tends to be more broken on the nights right before a big test or event at his school', 0,
        { r: 'Situational sleep change is nonspecific', approach: 'Sleep framing', why: 'Stress-related poor sleep does not point to mania', keys: ['nonspecific factor'], mistake: 'Over-reading situational sleep loss as mania' }),
    ]),
    Q('q4', 'core', 'What is most useful to gather to confirm the cross-setting pattern?', ['R1'], [
      O('a', 'Collateral information from school and home about the frequency, severity, and context of the outbursts', 3,
        { r: 'Cross-setting collateral information', approach: 'Gather multi-informant data', why: 'DMDD requires symptoms in two or more settings, so school and home collateral are essential', keys: ['outbursts at home and school', 'teachers report conflict'], mistake: 'Relying on a single setting or a single informant' }),
      O('b', 'A detailed family pedigree going back several generations to determine which relatives also had a quick temper', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not establish the cross-setting pattern', keys: ['criteria-relevant data'], mistake: 'Gathering data that does not confirm the criteria' }),
      O('c', 'Whether his temper can be traced to one specific incident at school that fully explains all of his current behavior', -1,
        { r: 'A single incident is not the target', approach: 'Origin-hunting framing', why: 'The diagnosis rests on the cross-setting pattern, not a single incident', keys: ['pattern across settings'], mistake: 'Hunting for an origin instead of confirming the pattern' }),
      O('d', 'His general interests and hobbies so that the sessions can be arranged around the activities he most enjoys', 0,
        { r: 'Interests are secondary', approach: 'Preference framing', why: 'Useful for rapport but not what confirms the criteria', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over the criteria' }),
    ]),
    Q('q5', 'intake', 'What is most important to screen for given the severity of his irritability and impairment?', ['R3'], [
      O('a', 'Co-occurring depression, anxiety, and ADHD, plus developmentally appropriate screening for any safety concerns', 3,
        { r: 'Screen comorbidity and safety', approach: 'Assess comorbidity and risk', why: 'DMDD commonly co-occurs with depression, anxiety, and ADHD, and severe impairment warrants safety screening', keys: ['severe, chronic irritability', 'impairment across settings'], mistake: 'Diagnosing DMDD without screening for common comorbidity and safety' }),
      O('b', 'A previously undetected primary psychotic disorder that might better explain his temper outbursts at school', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of all of his irritability and outbursts', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could explain why he has so much conflict with his teachers lately', 0,
        { r: 'Cognitive decline is implausible in a child', approach: 'Neurocognitive framing', why: 'The chronic irritability fits DMDD, not decline', keys: ['developmental pattern'], mistake: 'Pursuing an implausible rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Jayden?', ['R2'], [
      O('a', 'Parent management training plus evidence-based psychotherapy for the child, coordinated across home and school', 3,
        { r: 'Parent training plus child psychotherapy', approach: 'Apply the guideline', why: 'Parent training and evidence-based child psychotherapy, coordinated with school, are first-line for DMDD', keys: ['outbursts at home and school', 'exhausted parent'], mistake: 'Treating the child alone without engaging the parents and school' }),
      O('b', 'Brief individual talk sessions with the child alone, with no parent or school involvement of any kind in the plan', -1,
        { r: 'Child-only work omits key systems', approach: 'Child-only framing', why: 'Parents and school are central to DMDD treatment', keys: ['cross-setting pattern'], mistake: 'Excluding the systems around the child' }),
      O('c', 'Starting him on a medication that you will select and adjust to control his outbursts over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication; any medication question is referred', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Recommending strict, escalating punishment at home as the main strategy for bringing his outbursts under control', -2,
        { r: 'Harsh punishment can worsen irritability', approach: 'Punishment-first framing', why: 'Escalating punishment tends to worsen irritability rather than treat it', keys: ['evidence-based parenting'], mistake: 'Advising a harmful, non-evidence-based strategy' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor work with the parents in the plan?', ['R2'], [
      O('a', 'Teach evidence-based parenting skills for the outbursts and irritability while supporting the exhausted caregiver', 3,
        { r: 'Skills plus caregiver support', approach: 'Build parenting skills and support', why: 'Parent management training teaches skills for the outbursts while supporting a depleted caregiver', keys: ['mother is exhausted', 'frequent conflict'], mistake: 'Coaching skills without supporting the burned-out parent' }),
      O('b', 'Tell the parents the problem is entirely the child’s and that there is nothing useful for them to change at home', -1,
        { r: 'Excluding the parents misses the lever', approach: 'Child-blame framing', why: 'Parenting strategies are a core, effective component of DMDD treatment', keys: ['parent-mediated change'], mistake: 'Dismissing the parental role' }),
      O('c', 'Advise the parents to give in to whatever he demands during an outburst so that the conflict ends as fast as possible', -2,
        { r: 'Reinforcing outbursts strengthens them', approach: 'Capitulation framing', why: 'Giving in during outbursts reinforces them and worsens the pattern', keys: ['avoid reinforcing outbursts'], mistake: 'Coaching a strategy that reinforces the behavior' }),
      O('d', 'Place the entire responsibility on the parents and imply the situation reflects a basic failure of their parenting', -1,
        { r: 'Blaming the parents is counter-therapeutic', approach: 'Blame framing', why: 'A blaming stance undermines engagement and the alliance', keys: ['collaborative stance'], mistake: 'Shaming the caregivers rather than equipping them' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor coordinate with the school?', ['R4'], [
      O('a', 'With the parents’ consent and a release, collaborate with the school on consistent, cross-setting supports', 3,
        { r: 'Consent and release before school coordination', approach: 'Coordinate with consent', why: 'School coordination requires parental consent and a release before sharing information', keys: ['symptoms at school', 'teacher conflict'], mistake: 'Contacting the school without parental consent' }),
      O('b', 'Contact his teachers directly with his clinical details right away, since the school plainly needs all of the information', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before sharing with the school', keys: ['no release'], mistake: 'Disclosing to the school without consent' }),
      O('c', 'Avoid contacting the school at all so that his counseling stays entirely separate from anything happening at school', -1,
        { r: 'No coordination undercuts cross-setting care', approach: 'Siloed framing', why: 'Consented school coordination supports the cross-setting plan', keys: ['integrated supports'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Send the school his full clinical record so that every staff member has complete information about his treatment', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure should be consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
    Q('q9', 'treatment', 'How should progress be tracked across the home and school components of the plan?', ['R2'], [
      O('a', 'Use measurement-based tracking of outburst frequency, irritability, and functioning across both settings', 3,
        { r: 'Measurement-based, cross-setting tracking', approach: 'Monitor outcomes across settings', why: 'Tracking outburst frequency, irritability, and functioning at home and school steers the coordinated plan', keys: ['outbursts across settings', 'cross-setting supports'], mistake: 'Proceeding without tracking outcomes across the settings' }),
      O('b', 'Rely only on whether his mother happens to mention that things at home feel a little calmer than they were before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions from one setting', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how he behaves during the session itself and base every decision solely on what you see in the room', -1,
        { r: 'In-room behavior is too narrow', approach: 'Single-setting framing', why: 'The cross-setting pattern requires data from home and school, not the session alone', keys: ['multi-setting monitoring'], mistake: 'Measuring only one setting' }),
      O('d', 'Wait until the end of treatment to review whether his outbursts and mood have changed at all since intake', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to adjust the plan over time', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q10', 'counseling', 'Jayden has a severe outburst during a session and his mother looks defeated. The most therapeutic response is to:', ['R5'], [
      O('a', 'Stay calm, help de-escalate the moment, and model and coach a supportive response the parent can use', 3,
        { r: 'De-escalate and model a response', approach: 'Use the moment to teach', why: 'A calm, modeled de-escalation both manages the moment and builds the parent’s skills', keys: ['outburst in session', 'defeated parent'], mistake: 'Reacting harshly or letting the moment escalate' }),
      O('b', 'Reprimand the child sharply in front of his mother so that he learns at once that the behavior will not be tolerated', -2,
        { r: 'Harsh reprimand escalates and shames', approach: 'Punitive framing', why: 'A sharp public reprimand tends to escalate the outburst and shame the child', keys: ['de-escalation'], mistake: 'Escalating rather than de-escalating' }),
      O('c', 'End the session immediately and send them home rather than addressing the outburst with them in the room together', -1,
        { r: 'Ending abruptly misses a teaching moment', approach: 'Escape framing', why: 'The moment can be used to de-escalate and coach rather than avoided', keys: ['in-room coaching'], mistake: 'Avoiding a valuable clinical moment' }),
      O('d', 'Tell the mother she simply must be firmer and let her handle the outburst entirely on her own without any guidance', -1,
        { r: 'Withholding support abandons the parent', approach: 'Hands-off framing', why: 'Modeling and coaching support the parent rather than leaving her alone', keys: ['caregiver support'], mistake: 'Failing to support and coach the parent' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best engage Jayden himself in the work?', ['R5'], [
      O('a', 'Build rapport at his developmental level and teach simple, concrete skills for noticing and managing anger', 3,
        { r: 'Developmentally matched rapport and skills', approach: 'Engage the child age-appropriately', why: 'Developmentally appropriate rapport and concrete coping skills engage a 9-year-old in the work', keys: ['9-year-old', 'difficulty managing anger'], mistake: 'Using abstract, adult-oriented methods a child cannot engage with' }),
      O('b', 'Talk with him mainly in abstract, adult terms about the underlying causes of his irritable temperament each week', -1,
        { r: 'Abstract methods do not fit a child', approach: 'Adult-framing', why: 'A young child engages better with concrete, developmentally matched skills', keys: ['developmental fit'], mistake: 'Pitching the work above his developmental level' }),
      O('c', 'Focus the sessions mainly on reviewing in detail every outburst he has had since the last appointment', -1,
        { r: 'Dwelling on outbursts is not skill-building', approach: 'Incident-review framing', why: 'Rehashing outbursts does not teach the coping skills he needs', keys: ['skill focus'], mistake: 'Centering sessions on cataloguing incidents' }),
      O('d', 'Tell him that he must simply stop having outbursts and behave well before any of the counseling work can begin', -1,
        { r: 'Demanding change first stalls engagement', approach: 'Precondition framing', why: 'Engagement and skill-building precede, not follow, behavior change', keys: ['skills come first'], mistake: 'Setting good behavior as a precondition' }),
    ]),
    Q('q12', 'ethics', 'Jayden tells the counselor a secret and asks that it never be shared with his mother. The most appropriate action is to:', ['R4'], [
      O('a', 'Explain confidentiality and its limits in age-appropriate terms and clarify what must be shared to keep him safe', 3,
        { r: 'Explain confidentiality and its limits to a minor', approach: 'Balance the minor’s trust and parental role', why: 'With minors, the counselor clarifies confidentiality and the limits that protect the child', keys: ['minor client', 'asks to keep a secret'], mistake: 'Promising absolute secrecy a minor’s counselor cannot guarantee' }),
      O('b', 'Promise him that you will never tell his mother anything at all, no matter what he discloses to you in the sessions', -2,
        { r: 'Absolute secrecy promise is unsafe', approach: 'Absolute-secrecy framing', why: 'A blanket promise ignores safety limits and parental rights with minors', keys: ['safety limits'], mistake: 'Guaranteeing confidentiality you cannot ethically keep' }),
      O('c', 'Tell his mother every detail of whatever he shares right away, since she is the parent and is entitled to know it all', -2,
        { r: 'Disclosing everything erodes the child’s trust', approach: 'Full-disclosure framing', why: 'Sharing everything regardless of relevance undermines the therapeutic relationship with the child', keys: ['developmentally appropriate sharing'], mistake: 'Over-disclosing and breaking the child’s trust' }),
      O('d', 'Refuse to discuss confidentiality with him at all and simply change the subject whenever he raises the topic again', -1,
        { r: 'Avoiding the issue leaves him confused', approach: 'Avoidant framing', why: 'Confidentiality should be explained, not avoided', keys: ['transparent limits'], mistake: 'Sidestepping a needed conversation' }),
    ]),
    Q('q13', 'ethics', 'The mother asks the counselor to put in writing that Jayden is "not bipolar" for a custody matter. The most ethical response is to:', ['R4'], [
      O('a', 'Decline to write a statement beyond your role and the evaluation, and clarify what you can appropriately document', 3,
        { r: 'Stay within role; document only what is supported', approach: 'Limit statements to your competence and role', why: 'The counselor avoids forensic conclusions beyond the clinical role and documents only what is supported', keys: ['custody matter', 'request for a definitive written ruling'], mistake: 'Issuing a forensic or definitive statement beyond the treating role' }),
      O('b', 'Write exactly the statement she requests, since keeping the parent satisfied is what matters most for the work to continue', -2,
        { r: 'A pressured forensic statement is inappropriate', approach: 'Please-the-parent framing', why: 'Issuing a definitive forensic claim under pressure exceeds the treating role and competence', keys: ['role boundaries'], mistake: 'Overstepping into a forensic opinion' }),
      O('c', 'Take the mother’s side in the custody dispute and advocate for her position in any letter or report that is requested', -2,
        { r: 'Taking a side compromises objectivity', approach: 'Advocacy framing', why: 'Aligning with one party in a custody dispute compromises objectivity and the child’s welfare', keys: ['child’s welfare'], mistake: 'Becoming an advocate in a legal dispute' }),
      O('d', 'Refuse to provide any documentation whatsoever and decline to explain to her what records can appropriately be released', -1,
        { r: 'Flat refusal without explanation is unhelpful', approach: 'Stonewall framing', why: 'The counselor can clarify what is appropriate to document rather than refuse outright', keys: ['appropriate documentation'], mistake: 'Declining without clarifying the appropriate options' }),
    ]),
  ],
};

module.exports = { CASES: [D150, D151, D152, D153, D154] };
