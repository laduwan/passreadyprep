// deep-cases-2027-batch-06.js — NCMHCE deep cases, 2027 NCMHCE specification; hand-authored; validate with check2027.js
//
// ncmhce-D945 · plan 5 · Personality · medium · adult — Obsessive-Compulsive Personality Disorder (F60.5)
// ncmhce-D946 · plan 6 · Bipolar · medium · adult — Bipolar II Disorder (F31.81)
// ncmhce-D947 · plan 7 · Bipolar · easy · adult — Cyclothymic Disorder (F34.0)
// ncmhce-D948 · plan 8 · Bipolar · hard · adult — Bipolar I Disorder, Current Episode Depressed, Moderate (F31.32)
// ncmhce-D949 · plan 9 · Neurodevelopmental · medium · adult — Autism Spectrum Disorder (F84.0)
//
// Standalone deliverable for SME review. Do NOT auto-import.

const O = (id, text, weight, ex) => ({
  id,
  text,
  isCorrect: weight === 3,
  weight,
  rationale: ex.r,
  explanation: { approach: ex.approach, rationale: ex.why, keyIndicators: ex.keys, commonMistake: ex.mistake },
});
const Q = (id, domain, section, question, evidenceRef, options) => ({ id, domain, section, question, evidenceRef, options });

// ============================================================================
// D945 — Obsessive-Compulsive Personality Disorder (plan 5)
// ============================================================================
const D945 = {
  id: 'ncmhce-D945',
  title: 'A second-year resident who stays three hours past sign-out to rewrite his notes',
  category: 'Personality',
  difficulty: 'medium',
  plan: 5,
  population: 'adult',
  primaryDiagnosis: { name: 'Obsessive-Compulsive Personality Disorder', code: 'F60.5' },
  diagnosis: { name: 'Obsessive-Compulsive Personality Disorder', code: 'F60.5' },
  differentialOptions: [
    { id: 'do1', name: 'Obsessive-Compulsive Disorder', isCorrect: false },
    { id: 'do2', name: 'Obsessive-Compulsive Personality Disorder', isCorrect: true },
    { id: 'do3', name: 'Narcissistic Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Generalized Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      "Andrés Varela, MD, a 31-year-old first-generation Colombian American second-year internal medicine resident at an academic hospital, self-refers " +
      "to a private group counseling practice after his program director warned him that he routinely stays two to three hours past sign-out rewriting " +
      "progress notes, will not hand tasks to interns because they “do it wrong,” and has clashed with co-residents over his checklists. He says the " +
      "problem is “other people’s sloppiness.” Since high school he has run his life by detailed lists and rules; he missed a college deadline because he " +
      "kept redoing a lab report, keeps boxes of dried-out pens and torn, unwearable scrubs he “might need someday,” and ended a relationship over how the dishwasher was loaded. He " +
      "denies intrusive, unwanted thoughts or urges that he tries to neutralize; he checks his work “because that is the right standard” and does not see it " +
      "as excessive. This year he sleeps about five hours, feels “drained and cynical” about patients, and drinks two glasses of wine on weekends. Asked " +
      "whether he has ever wished he were dead, he pauses and says, “If I ever made a fatal error, I don’t know how I’d live with that.” In the first " +
      "minutes he points out two typos in the intake packet and that the session started two minutes late, and the counselor notices a flush of " +
      "defensiveness. During paperwork the counselor realizes that their spouse is a nurse manager at Andrés’s hospital, on a unit he does not rotate " +
      "through and with no role in evaluating residents.",
    session1:
      "Session 1 is held by video, with Andrés at home and his location confirmed. The structured suicide-risk screen completed at the end of intake was " +
      "negative for ideation, intent, plan, or preparatory behavior. His program director has emailed the counselor asking for “an assessment of whether " +
      "Dr. Varela is fit to continue”; Andrés’s signed release allows the counselor to confirm attendance only. Andrés names two goals: “finish my notes " +
      "within an hour of sign-out” and “get the interns to meet my standard.” He credits his thoroughness with getting him through medical school, and he " +
      "spends much of the hour describing, by name, two co-residents he considers incompetent. The counselor will write the progress note after the session.",
    session2:
      "Andrés opens session 2 by saying the homework worksheet had a typo he corrected and that he is “not sure this approach is rigorous enough”; his tone " +
      "is clipped. He agrees to test his belief that any note under an hour is “unsafe.” The practice has just adopted an AI note-taking tool that drafts " +
      "progress notes from session audio, and Andrés has not been told about it. He asks the counselor to bill his insurance under an adjustment disorder " +
      "code “so it looks temporary.” He also says he will spend next month on an away elective in another state and wants to keep meeting by video from " +
      "there; the counselor is licensed only in their home state and has not checked the other state’s licensure or Counseling Compact status.",
  },
  diagnosticRationale:
    "Andrés shows a pervasive pattern, traceable to adolescence, of preoccupation with details, rules, and lists to the point that the task's purpose is lost " +
    "(notes rewritten for hours), perfectionism that interferes with completion (the missed college deadline), reluctance to delegate unless others do things " +
    "his way, rigidity (ending a relationship over how the dishwasher was loaded), and an inability to discard worn-out objects with no " +
    "sentimental value (dried-out pens, torn scrubs). The pattern is ego-syntonic, and he denies intrusive obsessions or neutralizing " +
    "compulsions, which separates it from obsessive-compulsive disorder. His current exhaustion and cynicism fit occupational burnout layered on the " +
    "personality pattern rather than explaining it, because the traits long predate residency.",
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Obsessive-compulsive personality disorder: pervasive pattern of orderliness, perfectionism, and control beginning by early adulthood (4 of 8 criteria); differential from OCD (ego-dystonic obsessions and compulsions)' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured screening of suicidal ideation, intent, plan, and behavior when a client gives an indirect statement' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'Self-awareness and countertransference, conflicts of interest and multiple relationships, informed consent for technology, accurate diagnosis and billing, practicing within licensure jurisdiction' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Cognitive behavioral approaches to perfectionism and rigid rules; behavioral experiments; repairing the working alliance' },
    { id: 'R5', source: 'HIPAA', detail: 'Authorizations for release to third parties such as employers or training programs; minimum necessary standard' },
    { id: 'R6', source: 'Counseling Compact', detail: 'Practice occurs where the client is located; privilege to practice required in a member state other than the home state' },
    { id: 'R7', source: 'Wiger (Documentation)', detail: 'Objective, timely, behaviorally specific progress notes; reviewing drafts for accuracy; documentation that supports billed services' },
    { id: 'R8', source: 'Hays (Assessment)', detail: 'Differential assessment and integration of history across the life span' },
  ],
  questions: [
    // ---------------- intake ----------------
    Q('q1', 'profdev', 'intake', 'The counselor feels defensive after Andrés points out the typos and the late start. What is the most appropriate response?', ['R3', 'R4'], [
      O('a', 'Apologize for both errors and promise that all remaining forms and sessions will be fully error-free from now on.', 0,
        { r: 'Over-accommodates the rigid standard', approach: 'Appeasement framing', why: 'A brief acknowledgment is fine, but promising perfection colludes with the very standard that is impairing him and is not sustainable', keys: ['perfectionism is the presenting problem'], mistake: 'Soothing the client by adopting his standard instead of noticing and managing the counselor’s own reaction' }),
      O('b', 'Notice the reaction, answer him calmly without defending, and reflect on it later, taking it to supervision if it recurs.', 3,
        { r: 'Self-reflection and regulation', approach: 'Manage countertransference', why: 'Counselors monitor their own reactions so they do not act them out; a calm, non-defensive reply protects the alliance and supervision helps if the pattern persists', keys: ['flush of defensiveness', 'client critiques the counselor'], mistake: 'Either acting on the defensive feeling or ignoring it entirely' }),
      O('c', 'Tell him that pointing out small errors is part of his personality pattern and ask him to notice it as it happens.', -2,
        { r: 'Premature, defensive confrontation', approach: 'Label-the-pathology framing', why: 'Using a diagnostic interpretation to deflect criticism in the first minutes is the counselor acting out defensiveness and risks ending treatment', keys: ['first minutes of intake', 'no alliance yet'], mistake: 'Turning a countertransference reaction into an interpretation aimed at the client' }),
      O('d', 'Decide that this client is a poor personality fit for the counselor and arrange a transfer to a colleague after intake.', -1,
        { r: 'Discomfort is not unsuitability', approach: 'Refer-out framing', why: 'Mild irritation is expected material, not a reason to transfer; referring out because of the counselor’s feelings abandons the work prematurely', keys: ['no conflict of interest in the reaction'], mistake: 'Treating an ordinary countertransference reaction as grounds for referral' }),
    ]),
    Q('q2', 'assess', 'intake', 'Which finding best distinguishes Andrés’s presentation from obsessive-compulsive disorder?', ['R1', 'R8'], [
      O('a', 'His checking and rule-keeping take well over an hour a day, which is the threshold that separates OCD from OCPD.', -1,
        { r: 'Misapplies a time criterion', approach: 'Time-threshold framing', why: 'The one-hour marker is one way OCD symptoms show significance; it does not separate the two disorders, and OCPD traits can be very time-consuming', keys: ['hours spent rewriting notes'], mistake: 'Using time spent as the discriminator between OCD and OCPD' }),
      O('b', 'His pattern started in high school, long before residency, so the current job stress cannot account for these traits.', 0,
        { r: 'Rules out burnout, not OCD', approach: 'Onset framing', why: 'Early onset helps separate a personality pattern from burnout, but OCD can also begin in adolescence, so onset does not answer this question', keys: ['lists and rules since high school'], mistake: 'Answering a different differential than the one asked' }),
      O('c', 'His standards feel right and justified to him, and he reports no intrusive, unwanted thoughts that he tries to neutralize.', 3,
        { r: 'Ego-syntonic, no obsessions', approach: 'Apply the core discriminator', why: 'OCD requires intrusive, unwanted obsessions and compulsions aimed at reducing distress; OCPD traits are ego-syntonic and experienced as correct', keys: ['“that is the right standard”', 'denies intrusive thoughts'], mistake: 'Equating perfectionistic checking with OCD compulsions' }),
      O('d', 'OCD and OCPD sit on the same spectrum and are treated the same way, so separating them would not change the plan.', -2,
        { r: 'False equivalence changes treatment', approach: 'Same-spectrum framing', why: 'The disorders differ in criteria and treatment; exposure and response prevention targets obsessions he does not have, so conflating them misdirects care', keys: ['no obsessions or neutralizing'], mistake: 'Assuming the differential does not matter for treatment selection' }),
    ]),
    Q('q3', 'assess', 'intake', 'How should the counselor respond to Andrés’s comment about not knowing how he would live with a fatal error?', ['R2'], [
      O('a', 'Treat the comment as an expression of his perfectionism, note it in the record, and return to his work history.', -1,
        { r: 'Leaves an indirect statement unexplored', approach: 'Reframe-and-move-on framing', why: 'An ambiguous statement about not living with something needs direct follow-up; filing it as perfectionism leaves risk unknown', keys: ['pause before answering', 'physician with exhaustion'], mistake: 'Interpreting a possible risk statement instead of assessing it' }),
      O('b', 'Ask him to agree not to harm himself before the next session and then continue the intake as originally planned.', -2,
        { r: 'No-harm contracts are not assessment', approach: 'Contract framing', why: 'No-suicide contracts lack evidence and replace the assessment that is needed; they can also give false reassurance', keys: ['risk unknown'], mistake: 'Using a contract in place of a structured risk assessment' }),
      O('c', 'Ask a single question about whether he feels safe and move to a structured tool only if his answer sounds worrying.', 0,
        { r: 'One global question is too thin', approach: 'Gatekeeper-question framing', why: 'Asking is right, but a single global question misses ideation and behavior that a structured screen captures', keys: ['indirect statement'], mistake: 'Relying on one vague safety question' }),
      O('d', 'Ask him directly about suicidal thoughts and use a structured screen covering ideation, intent, plan, and behavior.', 3,
        { r: 'Direct, structured screening', approach: 'Assess risk directly', why: 'An indirect statement, exhaustion, and a high-risk profession warrant direct questions and a structured screen; asking does not increase risk', keys: ['“I don’t know how I’d live with that”', 'sleeping five hours'], mistake: 'Avoiding direct suicide questions with a high-functioning professional' }),
    ]),
    Q('q4', 'profdev', 'intake', 'The counselor’s spouse is a nurse manager at Andrés’s hospital. What should the counselor do?', ['R3'], [
      O('a', 'Ask their spouse informally how Andrés is regarded on the wards, to get a fuller picture of his work functioning.', -2,
        { r: 'Breaches confidentiality', approach: 'Back-channel framing', why: 'Disclosing that Andrés is a client and seeking information without consent is a confidentiality violation and creates a dual relationship', keys: ['spouse works at his hospital'], mistake: 'Gathering collateral through a personal relationship without consent' }),
      O('b', 'Weigh the overlap, discuss it openly with Andrés, consult as needed, and document the decision about continuing.', 3,
        { r: 'Assess suitability transparently', approach: 'Determine client-counselor suitability', why: 'A potential conflict is evaluated and discussed with the client; with no evaluative role and his informed agreement, care can continue with documentation', keys: ['spouse has no role evaluating residents', 'different unit'], mistake: 'Either hiding a potential conflict or treating any overlap as disqualifying' }),
      O('c', 'Proceed without mentioning it, since the spouse works on another unit and has no part in evaluating residents.', -1,
        { r: 'Withholds a relevant overlap', approach: 'Silent-continuation framing', why: 'Even a low-risk overlap belongs in the informed-consent conversation; Andrés may weigh it differently than the counselor does', keys: ['same hospital'], mistake: 'Deciding a conflict question alone without client input' }),
      O('d', 'Refer Andrés to another practice right away, since any connection to his hospital rules out working with him.', 0,
        { r: 'Over-cautious referral', approach: 'Automatic-referral framing', why: 'Referral is an option if the conflict is real or he prefers it, but an automatic transfer skips the assessment and his choice', keys: ['no evaluative overlap'], mistake: 'Treating every indirect connection as a disqualifying conflict' }),
    ]),
    // ---------------- session1 ----------------
    Q('q5', 'indirect', 'session1', 'How should the counselor respond to the program director’s email asking whether Andrés is fit to continue?', ['R5', 'R3'], [
      O('a', 'Send a brief summary of the diagnosis and plan, since it may help the program support him during residency.', -1,
        { r: 'Exceeds the signed release', approach: 'Helpful-disclosure framing', why: 'His release covers attendance only; sharing diagnosis or plan without authorization breaches confidentiality, however well meant', keys: ['release limited to attendance'], mistake: 'Disclosing beyond the scope of the authorization' }),
      O('b', 'Do not reply at all, since any contact with the training program would breach Andrés’s confidentiality as a client.', 0,
        { r: 'Ignores the authorization he gave', approach: 'Stonewall framing', why: 'Silence protects privacy but disregards his release and the working relationship with the program; a limited reply is permitted', keys: ['signed release exists'], mistake: 'Overstating confidentiality when the client has authorized limited contact' }),
      O('c', 'Provide the requested fitness opinion based on intake data, since the program has a legitimate patient-safety interest.', -2,
        { r: 'Forensic role and unauthorized disclosure', approach: 'Fitness-opinion framing', why: 'A treating counselor offering an unauthorized fitness-for-duty opinion mixes roles and discloses protected information', keys: ['release limited to attendance', 'treating role'], mistake: 'Taking an evaluative role for a third party while treating the client' }),
      O('d', 'Confirm attendance only, as his release allows, and note that the counselor does not give fitness-for-duty opinions.', 3,
        { r: 'Stay within the authorization', approach: 'Minimum necessary collaboration', why: 'Disclosure to a non-clinical stakeholder is limited to what the client authorized; a treating counselor also declines a fitness-for-duty role', keys: ['release: attendance only', 'program director request'], mistake: 'Answering the question asked rather than the question authorized' }),
    ]),
    Q('q6', 'planning', 'session1', 'Which initial treatment plan best fits Andrés’s diagnosis and goals?', ['R4', 'R1'], [
      O('a', 'CBT for perfectionism and rigid rules, with measurable goals for note time and sleep that use his conscientiousness.', 3,
        { r: 'Targeted CBT with measurable goals', approach: 'Match approach to presentation', why: 'Cognitive behavioral work on perfectionistic rules has support for OCPD traits; measurable goals tied to his own aims build engagement', keys: ['wants notes done within an hour', 'sleeps five hours'], mistake: 'Choosing an approach that ignores what the client himself wants to change' }),
      O('b', 'Exposure and response prevention aimed at his note checking, with a hierarchy of rituals to resist over several weeks.', -1,
        { r: 'OCD protocol for a personality pattern', approach: 'ERP framing', why: 'ERP targets anxiety-driven compulsions; his checking is value-driven and ego-syntonic, so a ritual-resistance protocol misfits', keys: ['no obsessions', 'checking feels right'], mistake: 'Applying an OCD protocol to OCPD traits' }),
      O('c', 'Long-term exploratory work on the childhood roots of his need for control, with work goals set aside for a later phase.', 0,
        { r: 'Defensible but mistimed', approach: 'Insight-first framing', why: 'Exploring origins can help later, but it postpones the impairing work problem he came in to address', keys: ['program director warning'], mistake: 'Sequencing insight work ahead of the impairing presenting problem' }),
      O('d', 'Burnout-focused stress management only, since personality patterns are fixed and are not a realistic target for change.', -2,
        { r: 'Fatalistic about personality', approach: 'Traits-are-fixed framing', why: 'Personality traits respond to treatment; declaring them unchangeable abandons the pattern driving his impairment', keys: ['pattern drives the work problem'], mistake: 'Treating a personality disorder diagnosis as untreatable' }),
    ]),
    Q('q7', 'indirect', 'session1', 'What should the counselor’s progress note for session 1 contain?', ['R7'], [
      O('a', 'Every detail he gave about the two co-residents, with their names, so the record shows the conflict exactly as he described it.', -1,
        { r: 'Records third-party detail as fact', approach: 'Verbatim framing', why: 'Naming co-residents and recording his characterizations adds third-party information the note does not need and could harm others if released', keys: ['named two co-residents'], mistake: 'Confusing completeness with recording everything the client says' }),
      O('b', 'Objective data, the risk screen result, interventions, his response, and the plan, without naming the co-residents.', 3,
        { r: 'Objective, relevant, minimal', approach: 'Standard progress note', why: 'A sound note records clinical data, risk findings, interventions, response, and plan, and leaves out identifying details about third parties', keys: ['negative risk screen', 'two stated goals'], mistake: 'Omitting risk data or overloading the note with third-party content' }),
      O('c', 'A short entry with no diagnosis and no risk screen result, to keep his record clean for future licensing questions.', -2,
        { r: 'Omission falsifies the record', approach: 'Protective-omission framing', why: 'Leaving out the diagnosis and risk screen makes the record inaccurate and leaves no trace of a safety assessment', keys: ['risk screen completed'], mistake: 'Altering clinical documentation to protect the client’s image' }),
      O('d', 'A complete clinical note written at the end of the week, once all of Andrés’s and other clients’ sessions can be batched.', 0,
        { r: 'Content fine, timing weak', approach: 'Batch-writing framing', why: 'Waiting days to write notes reduces accuracy; notes are best written during or soon after the session', keys: ['note written after the session'], mistake: 'Treating timeliness as optional in documentation' }),
    ]),
    Q('q8', 'planning', 'session1', 'Andrés wants to finish notes within an hour of sign-out and to get interns to meet his standard. How should goals be prioritized?', ['R4'], [
      O('a', 'Work on both goals equally, since both came from Andrés and honoring his own priorities builds collaboration.', 0,
        { r: 'Collaborative but unexamined', approach: 'Equal-weight framing', why: 'Honoring his words matters, but one goal is within his control and the other targets other people; that difference should shape priority', keys: ['goal about interns'], mistake: 'Accepting every stated goal without helping the client prioritize' }),
      O('b', 'Coach him on documenting intern errors and reporting them, so the program can see the real problem is the interns’ work.', -2,
        { r: 'Colludes with the impairing pattern', approach: 'Ally-against-others framing', why: 'Helping him build a case against interns reinforces the rigidity that brought him in and could harm colleagues and his standing', keys: ['refuses to delegate', 'clashes with co-residents'], mistake: 'Adopting the client’s externalizing frame as the treatment goal' }),
      O('c', 'Set both goals aside and focus first on the family history that shaped his standards before any work target.', -1,
        { r: 'Drops the client’s priorities', approach: 'Origins-first framing', why: 'Ignoring both goals in favor of history disregards what he wants and delays work on the impairment', keys: ['program director warning'], mistake: 'Replacing the client’s priorities with the counselor’s' }),
      O('d', 'Lead with the note-time goal he controls, and reframe the intern goal as learning to delegate with clear checkpoints.', 3,
        { r: 'Prioritize what he controls', approach: 'Help client prioritize', why: 'Goals within the client’s control come first; reframing the intern goal toward delegation keeps his concern while targeting his own behavior', keys: ['“finish notes within an hour”', 'will not delegate'], mistake: 'Setting goals that depend on changing other people' }),
    ]),
    // ---------------- session2 ----------------
    Q('q9', 'interventions', 'session2', 'Andrés says the worksheet had a typo and he is “not sure this approach is rigorous enough.” What is the best response?', ['R4'], [
      O('a', 'Thank him for the correction, acknowledge his doubt, and ask what would make the work feel rigorous and useful to him.', 3,
        { r: 'Non-defensive repair and feedback', approach: 'Address the rupture', why: 'Acknowledging the concern and asking for his feedback repairs strain and lets him shape the work, which strengthens the alliance', keys: ['clipped tone', '“not rigorous enough”'], mistake: 'Defending the method instead of exploring the client’s doubt' }),
      O('b', 'Tell him that one typo does not matter, the worksheet is still valid, and move straight into reviewing his homework.', -1,
        { r: 'Dismisses the rupture', approach: 'Move-past framing', why: 'Brushing aside his concern leaves the strain unaddressed and models the dismissiveness he fears from others', keys: ['clipped tone'], mistake: 'Ignoring rupture markers to stay on agenda' }),
      O('c', 'Point out that correcting the worksheet is a clear example of his personality pattern showing up again in session.', -2,
        { r: 'Weaponized interpretation', approach: 'Pathologize-the-feedback framing', why: 'Turning his feedback into evidence of his disorder is defensive and shaming and is likely to end treatment', keys: ['strained alliance'], mistake: 'Responding to criticism with a diagnostic interpretation' }),
      O('d', 'Reassure him and send several research articles showing that CBT for perfectionism is supported by solid evidence.', 0,
        { r: 'Intellectual answer to a relational strain', approach: 'Evidence-defense framing', why: 'Evidence may interest him, but it answers the content and skips the relational strain beneath it', keys: ['doubt about the approach'], mistake: 'Answering a rupture with information rather than exploration' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Which intervention best tests Andrés’s belief that any note written in under an hour is “unsafe”?', ['R4'], [
      O('a', 'Tell him to stop rereading his notes entirely for a week so that he learns firsthand that small errors do not matter.', -2,
        { r: 'Creates real patient-safety risk', approach: 'Flooding framing', why: 'Dropping all review in a medical record invites genuine errors; experiments must be safe and test a specific prediction', keys: ['clinical documentation for patients'], mistake: 'Designing an experiment that risks harm to third parties' }),
      O('b', 'Use a thought record to challenge his belief in session each week, without asking him to change how he writes notes.', 0,
        { r: 'Cognitive work without a test', approach: 'Thought-record framing', why: 'Cognitive restructuring helps, but beliefs like this shift most when a behavioral experiment provides real evidence', keys: ['testable prediction'], mistake: 'Staying with verbal disputation when a behavioral test is available' }),
      O('c', 'Plan a behavioral experiment: write some notes with a time limit, predict the outcome, and compare it with attending feedback.', 3,
        { r: 'Behavioral experiment', approach: 'Empirically supported intervention', why: 'A behavioral experiment tests a perfectionistic prediction against real-world feedback while keeping a reasonable review step', keys: ['belief: under an hour is unsafe', 'agrees to test it'], mistake: 'Challenging a belief verbally instead of testing it' }),
      O('d', 'Build an exposure hierarchy for his checking rituals, with response prevention practiced between each video session.', -1,
        { r: 'OCD protocol misapplied', approach: 'ERP framing', why: 'His review is not anxiety-neutralizing compulsion; an ERP hierarchy uses the wrong framework for an ego-syntonic trait', keys: ['no obsessions'], mistake: 'Treating OCPD traits as OCD rituals' }),
    ]),
    Q('q11', 'legal', 'session2', 'The practice has adopted an AI note-taker that drafts notes from session audio. How should it be handled with Andrés?', ['R3', 'R7'], [
      O('a', 'Use the tool without raising it, since the practice has a business associate agreement that covers the vendor.', -2,
        { r: 'No informed consent', approach: 'Contract-covers-it framing', why: 'A vendor agreement does not replace the client’s informed consent to having sessions recorded and processed by AI', keys: ['Andrés has not been told'], mistake: 'Treating vendor compliance as client consent' }),
      O('b', 'Explain the tool, get his informed consent or honor an opt-out, and review each AI draft for accuracy before signing.', 3,
        { r: 'Consent, choice, and review', approach: 'Ethical AI use', why: 'Clients are informed about recording and AI tools, may decline, and the counselor stays responsible for the accuracy of every signed note', keys: ['new AI note-taker', 'client not informed'], mistake: 'Either skipping consent or signing AI output unreviewed' }),
      O('c', 'Obtain his consent, then sign the AI drafts as written, since the vendor’s model is built for clinical notes.', -1,
        { r: 'Unreviewed AI notes', approach: 'Trust-the-tool framing', why: 'Consent is right, but the counselor remains accountable for note accuracy; AI drafts can contain errors or omissions', keys: ['counselor signs the note'], mistake: 'Delegating documentation accuracy to the software' }),
      O('d', 'Turn the tool off for Andrés without discussing it, since a physician is likely to be wary about his records.', 0,
        { r: 'Protective but skips the conversation', approach: 'Quiet opt-out framing', why: 'Not using the tool avoids harm, but deciding for him skips informing him about practice procedures he is entitled to know', keys: ['practice-wide adoption'], mistake: 'Making assumptions about client preferences instead of asking' }),
    ]),
    Q('q12', 'legal', 'session2', 'Andrés asks the counselor to bill under an adjustment disorder code “so it looks temporary.” What is the best response?', ['R3', 'R7'], [
      O('a', 'Bill an occupational-problem Z code instead, since it is less stigmatizing and still describes his work trouble.', -1,
        { r: 'Still misrepresents the diagnosis', approach: 'Softer-code framing', why: 'Substituting a code that does not reflect the assessed condition misstates the clinical picture and may not support the billed service', keys: ['assessed diagnosis is OCPD'], mistake: 'Choosing a billing code by how it looks rather than what was assessed' }),
      O('b', 'Bill the adjustment disorder code as he asks, since he is the client and it will not change how treatment is delivered.', -2,
        { r: 'Insurance fraud', approach: 'Client-request framing', why: 'Knowingly billing an inaccurate diagnosis is fraudulent and falsifies the record, whatever the client prefers', keys: ['request to look temporary'], mistake: 'Treating diagnostic coding as negotiable to please the client' }),
      O('c', 'Explain that codes must match the assessed diagnosis, and discuss his concerns, including the option of self-pay.', 3,
        { r: 'Accurate coding, address the worry', approach: 'Honest billing', why: 'Billing must reflect documented clinical findings; exploring his concern and options such as self-pay respects his autonomy honestly', keys: ['“so it looks temporary”', 'record concerns'], mistake: 'Either complying with a false code or refusing without discussing his concern' }),
      O('d', 'Bill the accurate code as planned and move on, since discussing billing could distract from the clinical work.', 0,
        { r: 'Accurate but dismissive', approach: 'Silent-compliance framing', why: 'Accurate coding is required, but skipping his concern leaves his fear about records unaddressed and his options unexplored', keys: ['concern about records'], mistake: 'Treating a billing question as separate from the therapeutic relationship' }),
    ]),
    Q('q13', 'legal', 'session2', 'Andrés wants to keep meeting by video during next month’s away elective in another state. What should the counselor do?', ['R6', 'R3'], [
      O('a', 'Continue as usual, since the counselor’s license applies wherever the counselor is sitting during the video session.', -1,
        { r: 'Wrong jurisdiction rule', approach: 'Counselor-location framing', why: 'Telehealth practice generally occurs where the client is located, so the other state’s rules apply', keys: ['client in another state'], mistake: 'Assuming licensure follows the counselor’s location' }),
      O('b', 'Pause sessions for the month and resume when he returns, without checking whether practice there could be allowed.', 0,
        { r: 'Safe but skips the check', approach: 'Pause framing', why: 'Pausing avoids unlicensed practice, but a privilege to practice or other option may exist and a month-long gap has costs', keys: ['month-long elective'], mistake: 'Defaulting to disruption without checking portability options' }),
      O('c', 'Continue sessions and record his home address as his location, since he will return there after the elective ends.', -2,
        { r: 'Falsified location, unlicensed practice', approach: 'Paper-over framing', why: 'Recording a false location misstates the record and conceals practice in a state where the counselor may not be authorized', keys: ['location confirmed each session'], mistake: 'Altering documentation to sidestep licensure law' }),
      O('d', 'Confirm where he will be, and verify licensure or a Compact privilege in that state before any video sessions from there.', 3,
        { r: 'Verify jurisdiction first', approach: 'License portability compliance', why: 'Before practicing across state lines, the counselor confirms the client’s location and holds a license or Compact privilege there', keys: ['licensed in one state', 'Compact status unchecked'], mistake: 'Assuming telehealth erases state licensure boundaries' }),
    ]),
  ],
};

// ============================================================================
// D946 — Bipolar II Disorder (plan 6)
// ============================================================================
const D946 = {
  id: 'ncmhce-D946',
  title: 'A doctoral student’s “depression” history hides the sprints her advisor noticed',
  category: 'Bipolar',
  difficulty: 'medium',
  plan: 6,
  population: 'adult',
  primaryDiagnosis: { name: 'Bipolar II Disorder', code: 'F31.81' },
  diagnosis: { name: 'Bipolar II Disorder', code: 'F31.81' },
  differentialOptions: [
    { id: 'do1', name: 'Major Depressive Disorder, Recurrent Episode, Moderate', isCorrect: false },
    { id: 'do2', name: 'Bipolar I Disorder', isCorrect: false },
    { id: 'do3', name: 'Bipolar II Disorder', isCorrect: true },
    { id: 'do4', name: 'Cyclothymic Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      "Aigerim Seitkali, a 27-year-old Kazakh international doctoral student in materials science, is referred to the university counseling center by the " +
      "student health nurse practitioner after scoring 17 on the PHQ-9. For five weeks she has felt low, slept 10 to 11 hours, missed lab meetings, felt " +
      "guilty, and struggled to concentrate. At 22, in Almaty, she was diagnosed with depression and took fluoxetine for two months: “I felt amazing, then " +
      "I stopped.” Asked about the opposite of depression, she describes three “sprints” in the past two years, each lasting five to seven days, when she " +
      "slept three to four hours without feeling tired, talked so fast that labmates teased her, started four side projects, and spent $1,400 of her " +
      "stipend on a 3D printer. Her advisor told her she seemed “like a different person.” She was never hospitalized, had no unusual beliefs or " +
      "perceptions, and kept attending lab. On the Mood Disorder Questionnaire she endorses nine items, clustered in the same period, causing a moderate " +
      "problem. She drinks wine rarely and uses no drugs. A structured risk screen finds passive thoughts two weeks ago that “it would be easier not to " +
      "wake up,” with no intent, plan, or past attempts and no firearm access. The counselor has scored the MDQ only once before and is unsure what a " +
      "positive screen does and does not establish, and learned interpersonal and social rhythm therapy (IPSRT) only in a single graduate lecture.",
    session1:
      "Aigerim signs a release for the nurse practitioner, who plans to restart an SSRI at a visit in five days; the earliest campus psychiatry appointment " +
      "is three weeks away. A safety plan was completed at intake. Her stated goal is to “sleep like a normal person”; her bedtime ranges from 10 p.m. to " +
      "4 a.m. and her wake time from 6 a.m. to noon. Her mother in Almaty, who speaks Kazakh and Russian and has limited English, wants to join a video " +
      "session to understand what is happening, and Aigerim offers to interpret for her herself.",
    session2:
      "Aigerim joins session 2 by video from a shared graduate office, with two labmates at nearby desks; she says “they’re wearing headphones.” She asks, " +
      "“So does this mean I’m going to go crazy, like people in movies?” Her experiments require overnight instrument runs twice a week. She has started " +
      "using a free sleep-tracking app on her smartwatch and wants to send the counselor her data; the app’s privacy policy says it shares data with " +
      "advertisers. She will spend four weeks of winter break in Almaty and asks to continue video sessions from there.",
  },
  diagnosticRationale:
    "Aigerim has a current major depressive episode and a history of at least one hypomanic episode: discrete periods of five to seven days with decreased " +
    "need for sleep, pressured speech, increased goal-directed activity, and impulsive spending, observable to others, without hospitalization, psychosis, " +
    "or marked impairment. That combination with no lifetime manic episode meets criteria for bipolar II disorder. Her positive MDQ is a screen that " +
    "supports, but does not establish, the diagnosis; the clinical history does. Her earlier euphoric response to fluoxetine is a further warning sign " +
    "that antidepressant monotherapy needs psychiatric review.",
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Bipolar II disorder: at least one hypomanic episode (4+ consecutive days, observable change, no marked impairment or psychosis) and at least one major depressive episode; no lifetime manic episode' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Screening instruments versus diagnostic assessment; counselor competence to select, score, and interpret instruments' },
    { id: 'R3', source: 'IPSRT', detail: 'Social rhythm regulation: stable wake time and daily routines; planning for rhythm disruptions' },
    { id: 'R4', source: 'NICE guidelines', detail: 'Bipolar disorder: specialist assessment when bipolar disorder is suspected; caution with antidepressant monotherapy' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'Competence and consultation, culturally appropriate services including interpreters, technology-assisted services, practicing within legal jurisdiction' },
    { id: 'R6', source: 'HIPAA', detail: 'Authorized disclosure for care coordination; privacy and security of client data shared through third-party apps' },
    { id: 'R7', source: 'Corey (Theory & Practice)', detail: 'Psychoeducation and collaborative goal setting' },
    { id: 'R8', source: 'C-SSRS', detail: 'Structured suicide-risk screening and monitoring' },
  ],
  questions: [
    // ---------------- intake ----------------
    Q('q1', 'assess', 'intake', 'Which intake finding most changes the diagnostic picture for Aigerim?', ['R1'], [
      O('a', 'Her PHQ-9 score of 17, which places her current depressive symptoms in the moderately severe range of the scale.', 0,
        { r: 'Confirms depression, not polarity', approach: 'Severity framing', why: 'The PHQ-9 score documents severity of the current episode but says nothing about whether the illness is unipolar or bipolar', keys: ['PHQ-9 of 17'], mistake: 'Treating a depression severity score as the key diagnostic data' }),
      O('b', 'Her five-to-seven-day sprints with little sleep, rapid speech, new projects, and spending that her advisor noticed.', 3,
        { r: 'Past hypomanic episodes', approach: 'Screen for prior hypomania', why: 'Distinct periods of decreased need for sleep, pressured speech, and increased activity observed by others point to hypomania and change the diagnosis from unipolar', keys: ['slept three to four hours without fatigue', '“like a different person”'], mistake: 'Reading productive high periods as ordinary good stretches' }),
      O('c', 'Her diagnosis of depression at age 22, which shows that her current episode is a recurrence of a unipolar illness.', -2,
        { r: 'Anchors on a prior label', approach: 'Prior-diagnosis framing', why: 'A previous depression label does not rule out bipolar disorder; anchoring on it risks antidepressant-only treatment of a bipolar illness', keys: ['hypomanic history', '“felt amazing” on fluoxetine'], mistake: 'Accepting an earlier diagnosis without screening for hypomania' }),
      O('d', 'Her hypersomnia and missed lab meetings, which suggest an atypical depression that should guide the medication choice.', -1,
        { r: 'Specifier detail, wrong focus', approach: 'Atypical-features framing', why: 'Hypersomnia can occur in bipolar depression too; focusing on an atypical specifier misses the polarity question that matters most', keys: ['sleeping 10 to 11 hours'], mistake: 'Refining the depression subtype before ruling out bipolarity' }),
    ]),
    Q('q2', 'profdev', 'intake', 'The counselor is unsure what Aigerim’s positive MDQ does and does not establish. What should the counselor do?', ['R2', 'R5'], [
      O('a', 'Tell Aigerim that the positive MDQ confirms bipolar disorder, since nine items were endorsed in the same period.', -1,
        { r: 'Screen treated as diagnosis', approach: 'Score-equals-diagnosis framing', why: 'The MDQ is a screening tool; a positive result calls for full evaluation and cannot by itself confirm a diagnosis', keys: ['positive screen'], mistake: 'Interpreting a screen beyond its validated purpose' }),
      O('b', 'Leave the MDQ out of the record and the referral, since the counselor is not yet confident interpreting it.', -2,
        { r: 'Discards safety-relevant data', approach: 'Bury-the-result framing', why: 'Omitting a positive bipolar screen hides information that bears directly on medication safety', keys: ['SSRI restart planned'], mistake: 'Hiding results because of the counselor’s own uncertainty' }),
      O('c', 'Review the MDQ’s scoring rules and limits, and consult a colleague before interpreting and sharing the result.', 3,
        { r: 'Build competence before interpreting', approach: 'Determine assessment competency', why: 'Counselors use instruments within their competence; reviewing the tool’s purpose and consulting ensures the screen is interpreted and communicated accurately', keys: ['scored the MDQ once', 'unsure what it establishes'], mistake: 'Either overinterpreting or discarding a screen the counselor does not fully understand' }),
      O('d', 'Send the completed MDQ to the psychiatry clinic and let them interpret it, without discussing it with Aigerim at all.', 0,
        { r: 'Reasonable handoff, skips the client', approach: 'Pass-it-on framing', why: 'Sharing with psychiatry is useful, but the counselor should understand the tool and discuss results with the client', keys: ['psychiatry in three weeks'], mistake: 'Outsourcing interpretation instead of building basic competence' }),
    ]),
    Q('q3', 'assess', 'intake', 'Which reasoning best supports bipolar II disorder over the alternatives?', ['R1'], [
      O('a', 'Her spending and side projects show manic episodes, so the history supports bipolar I disorder rather than bipolar II.', -1,
        { r: 'Hypomania misread as mania', approach: 'Mania framing', why: 'Mania requires marked impairment, hospitalization, or psychosis; her episodes lacked these and she kept functioning', keys: ['never hospitalized', 'kept attending lab'], mistake: 'Treating any spending or activity increase as mania' }),
      O('b', 'Her high periods were productive and positive, so they are not symptoms, and recurrent major depression fits best.', -2,
        { r: 'Misses hypomania entirely', approach: 'Productivity framing', why: 'Hypomania often feels good and productive; dismissing it leads to unipolar treatment that can destabilize mood', keys: ['advisor noticed the change'], mistake: 'Excluding pleasant episodes from the mood history' }),
      O('c', 'Her highs were brief and mild, and her lows are chronic, so cyclothymic disorder explains both sides of her pattern.', 0,
        { r: 'Thresholds already met', approach: 'Cyclothymia framing', why: 'Cyclothymia applies only when full hypomanic and depressive criteria are never met; she meets both', keys: ['five-to-seven-day episodes', 'current major depressive episode'], mistake: 'Choosing cyclothymia without checking episode thresholds' }),
      O('d', 'Her sprints lasted over four days, were seen by others, and had no psychosis or hospitalization, plus a current MDE.', 3,
        { r: 'Hypomania plus major depression', approach: 'Apply the criteria', why: 'Bipolar II requires at least one hypomanic episode and one major depressive episode with no manic episode; her history fits exactly', keys: ['five to seven days', 'no hospitalization or psychosis'], mistake: 'Not checking duration, observability, and severity limits of hypomania' }),
    ]),
    Q('q4', 'profdev', 'intake', 'The counselor learned IPSRT only in one lecture but sees it fits Aigerim. What is the best course of action?', ['R5', 'R3'], [
      O('a', 'Seek consultation and focused training in IPSRT, applying its principles carefully while that training is underway.', 3,
        { r: 'Build competence responsibly', approach: 'Consultation and training', why: 'Counselors expand into new approaches through training and consultation, applying them within the limits of developing competence', keys: ['single lecture on IPSRT', 'bipolar presentation'], mistake: 'Either practicing an unfamiliar modality without support or avoiding a fitting one' }),
      O('b', 'Use the full IPSRT protocol right away, since the counselor understands the main idea of keeping regular routines.', -1,
        { r: 'Overstates competence', approach: 'Learn-by-doing framing', why: 'Grasping the concept is not the same as competence in a structured protocol; practicing beyond training risks poor care', keys: ['one lecture'], mistake: 'Equating familiarity with competence' }),
      O('c', 'Avoid any routine or sleep work until the counselor completes a full certification program in the IPSRT method.', 0,
        { r: 'Over-cautious delay', approach: 'Wait-for-credential framing', why: 'Basic sleep and routine support is within general competence; waiting for a full certification delays useful care', keys: ['sleep goal'], mistake: 'Treating any partial competence as no competence' }),
      O('d', 'Transfer Aigerim to an outside bipolar specialist, since a counselor without IPSRT training should not treat her.', -2,
        { r: 'Abrupt transfer during risk', approach: 'Refer-out framing', why: 'Transferring a client with recent passive ideation and a three-week psychiatry wait disrupts care when continuity matters most', keys: ['passive thoughts two weeks ago'], mistake: 'Abandoning an established client because of a closable training gap' }),
    ]),
    // ---------------- session1 ----------------
    Q('q5', 'planning', 'session1', 'Which initial treatment plan best fits Aigerim right now?', ['R4', 'R3'], [
      O('a', 'Weekly CBT for depression while the nurse practitioner restarts the SSRI, revisiting bipolar questions if new highs appear.', -2,
        { r: 'Unipolar plan for a bipolar illness', approach: 'Wait-for-mania framing', why: 'Proceeding with antidepressant-only care after a positive history for hypomania risks mood destabilization; the time to act is now', keys: ['SSRI restart in five days', 'hypomanic history'], mistake: 'Waiting for a future high instead of acting on the existing history' }),
      O('b', 'Psychotherapy with safety monitoring and sleep regularity, plus a psychiatric evaluation as the priority referral.', 3,
        { r: 'Therapy, safety, psychiatric referral', approach: 'Sequence care to the diagnosis', why: 'Suspected bipolar II warrants specialist medication assessment, with counseling for safety, sleep, and routine regularity alongside it', keys: ['positive MDQ', 'psychiatry in three weeks'], mistake: 'Leaving medication decisions to a nonspecialist without flagging bipolar history' }),
      O('c', 'Defer counseling until psychiatry sees her in three weeks, since medication must be settled before therapy can help.', -1,
        { r: 'Leaves a gap in care', approach: 'Medication-first framing', why: 'Counseling, safety monitoring, and sleep work help now; waiting leaves a client with recent passive ideation without support', keys: ['recent passive ideation'], mistake: 'Treating medication as a prerequisite for counseling' }),
      O('d', 'Focus first on her academic stress and lab workload, adding mood-specific work after the semester settles down.', 0,
        { r: 'Context without the core', approach: 'Stress-first framing', why: 'Academic stress matters, but it is a context; the plan must address the bipolar picture and safety first', keys: ['missed lab meetings'], mistake: 'Prioritizing a stressor over the diagnosis it sits on' }),
    ]),
    Q('q6', 'indirect', 'session1', 'The nurse practitioner plans to restart an SSRI in five days. What should the counselor do under Aigerim’s release?', ['R6', 'R4'], [
      O('a', 'Wait for the psychiatry appointment to raise the bipolar question, since medication choice is outside counseling scope.', 0,
        { r: 'Right on scope, wrong on timing', approach: 'Defer-to-psychiatry framing', why: 'The counselor should not choose medication, but the prescriber needs the history before the SSRI visit, not three weeks later', keys: ['visit in five days'], mistake: 'Confusing staying in scope with withholding relevant clinical information' }),
      O('b', 'Advise Aigerim to decline the SSRI at her visit, since antidepressants are unsafe for people with bipolar disorder.', -2,
        { r: 'Medication advice beyond scope', approach: 'Counselor-prescribes framing', why: 'Directing a client to refuse medication is outside counselor scope; the prescriber makes that decision with the history in hand', keys: ['counselor scope'], mistake: 'Giving medication directives instead of coordinating with the prescriber' }),
      O('c', 'Share the MDQ, hypomanic history, and fluoxetine response with the nurse practitioner before the visit.', 3,
        { r: 'Coordinate before the visit', approach: 'Collaborate with prescriber', why: 'With consent, giving the prescriber the screen, the hypomanic history, and the prior medication response lets her make an informed decision', keys: ['signed release', '“felt amazing” on fluoxetine'], mistake: 'Not sharing safety-relevant history with the prescriber in time' }),
      O('d', 'Send the nurse practitioner the full counseling record, so she has every detail available for the medication decision.', -1,
        { r: 'More than is needed', approach: 'Send-everything framing', why: 'Coordination should share what is relevant to the decision; sending the full record exceeds what the purpose requires', keys: ['minimum necessary'], mistake: 'Equating thorough coordination with full-record release' }),
    ]),
    Q('q7', 'indirect', 'session1', 'Aigerim’s mother, who speaks Kazakh and Russian, wants to join a session. Aigerim offers to interpret. What should the counselor do?', ['R5'], [
      O('a', 'Accept Aigerim’s offer, since she is fluent in both languages and knows her own history better than an interpreter would.', -1,
        { r: 'Client as interpreter', approach: 'Family-interpreter framing', why: 'Having the client interpret burdens her, risks filtered or softened content, and compromises the session’s purpose', keys: ['family psychoeducation'], mistake: 'Using the client or family as interpreters to save effort' }),
      O('b', 'Arrange a qualified professional interpreter in the mother’s preferred language for the family session.', 3,
        { r: 'Professional interpreter', approach: 'Secure translation services', why: 'Qualified interpreters provide accurate, neutral communication and free the client to participate as herself', keys: ['mother has limited English', 'Aigerim offers to interpret'], mistake: 'Relying on a family member for interpretation in clinical work' }),
      O('c', 'Run the session in English and send the mother written materials afterward through an online translation tool.', -2,
        { r: 'Excludes the mother; unreliable', approach: 'Machine-translation framing', why: 'Conducting the session in a language she cannot follow defeats its purpose, and unverified machine translation of clinical content risks errors', keys: ['limited English'], mistake: 'Treating translation as an afterthought for family participants' }),
      O('d', 'Postpone the family session until the mother can find a bilingual relative who could attend the video call with her.', 0,
        { r: 'Delays and shifts the burden', approach: 'Delay framing', why: 'Waiting for a relative to interpret shifts the counselor’s responsibility to the family and still uses a nonprofessional', keys: ['mother wants to understand now'], mistake: 'Making the family responsible for language access' }),
    ]),
    Q('q8', 'planning', 'session1', 'Aigerim’s goal is to “sleep like a normal person.” Which goal is best written for her plan?', ['R3', 'R7'], [
      O('a', 'Aigerim will improve her sleep and feel more rested by the end of the semester, as measured by her own report.', 0,
        { r: 'Not specific or measurable', approach: 'Global-goal framing', why: 'The direction is right, but vague wording and an end-of-semester check give no way to track progress', keys: ['bedtime 10 p.m. to 4 a.m.'], mistake: 'Writing a goal that cannot be measured' }),
      O('b', 'Aigerim will sleep at least nine hours a night, every night, to recover from her depressive episode and fatigue.', -1,
        { r: 'Targets amount, not regularity', approach: 'More-sleep framing', why: 'More sleep is not the aim in bipolar disorder; regular timing is, and a rigid nightly target ignores her overnight runs', keys: ['sleeping 10 to 11 hours'], mistake: 'Treating sleep quantity rather than rhythm as the target' }),
      O('c', 'Aigerim will cut sleep to five hours on overnight-run days to keep up with her lab work and protect her standing.', -2,
        { r: 'Risks triggering hypomania', approach: 'Productivity framing', why: 'Planned sleep restriction is a known trigger for hypomania; a plan should protect sleep, not reduce it', keys: ['hypomanic history', 'overnight runs'], mistake: 'Building sleep loss into a bipolar treatment plan' }),
      O('d', 'Within four weeks, Aigerim will wake within 30 minutes of 8 a.m. on 6 of 7 days, tracked on a daily rhythm log.', 3,
        { r: 'SMART rhythm goal', approach: 'Write a SMART goal', why: 'A stable wake time is central to social rhythm regulation, and this goal is specific, measurable, attainable, realistic, and time-bound', keys: ['wake time 6 a.m. to noon', '“sleep like a normal person”'], mistake: 'Writing sleep goals that are vague or focus on hours alone' }),
    ]),
    // ---------------- session2 ----------------
    Q('q9', 'legal', 'session2', 'Aigerim joins by video from a shared office with labmates nearby “wearing headphones.” What should the counselor do?', ['R5', 'R6'], [
      O('a', 'Proceed, since the labmates are wearing headphones and moving would waste part of her limited session time.', -1,
        { r: 'Privacy not secured', approach: 'Assume-privacy framing', why: 'Headphones do not ensure privacy; others may hear or see, and she may censor herself', keys: ['two labmates nearby'], mistake: 'Accepting the client’s reassurance in place of a private setting' }),
      O('b', 'Pause, explain the privacy concern, and help her move to a private space or reschedule if none is available.', 3,
        { r: 'Secure privacy first', approach: 'Telemental health best practice', why: 'Telehealth sessions require a private client setting; the counselor addresses it before clinical content and offers alternatives', keys: ['shared graduate office', 'labmates at nearby desks'], mistake: 'Starting clinical work without a private client setting' }),
      O('c', 'Hold the session by text chat instead, so labmates cannot overhear any of the sensitive details she might share.', 0,
        { r: 'Workaround, still not private', approach: 'Switch-modality framing', why: 'Text reduces overhearing but labmates can still see her screen, and the modality change was not planned or consented to', keys: ['shared office'], mistake: 'Changing modality instead of securing a private space' }),
      O('d', 'Continue but keep to light topics, leaving risk check-ins and mood review for the next private session next week.', -2,
        { r: 'Skips risk monitoring', approach: 'Defer-sensitive-content framing', why: 'Deferring risk monitoring for a client with recent passive ideation leaves safety unchecked for a week', keys: ['recent passive ideation'], mistake: 'Dropping safety review to work around a privacy problem' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Aigerim asks, “So does this mean I’m going to go crazy, like people in movies?” What is the best response?', ['R7', 'R1'], [
      O('a', 'Tell her that bipolar II is milder than bipolar I, so there is little need to worry about serious problems later on.', -1,
        { r: 'Minimizing, inaccurate reassurance', approach: 'Reassurance framing', why: 'Bipolar II is not simply milder; depressive burden and suicide risk can be significant, and false reassurance undermines adherence', keys: ['recent passive ideation'], mistake: 'Calling bipolar II mild to calm the client' }),
      O('b', 'Ask what she has seen in movies, then explain what bipolar II involves and how treatment and routines help.', 3,
        { r: 'Explore, then accurate psychoeducation', approach: 'Provide psychoeducation', why: 'Exploring her fears first, then giving accurate, hopeful information, corrects stigma and supports engagement in treatment', keys: ['“like people in movies”'], mistake: 'Lecturing before learning what the client fears' }),
      O('c', 'Say the diagnosis is not final until psychiatry sees her, so there is no need to discuss what it means yet.', 0,
        { r: 'Avoids a real question', approach: 'Defer framing', why: 'Confirmation from psychiatry is pending, but her fear needs a response now, and the working picture can be discussed', keys: ['psychiatry in three weeks'], mistake: 'Withholding psychoeducation until diagnosis is final' }),
      O('d', 'Tell her that untreated bipolar disorder often leads to psychosis, so she must follow every recommendation exactly.', -2,
        { r: 'Fear-based and inaccurate', approach: 'Scare framing', why: 'Overstating psychosis risk to drive adherence is inaccurate and coercive, and it heightens shame and fear', keys: ['no psychosis history'], mistake: 'Using fear to motivate treatment adherence' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Aigerim’s experiments require overnight runs twice a week. Which intervention best fits?', ['R3'], [
      O('a', 'Plan anchor routines around run nights, such as fixed wake time and light exposure, and recovery steps after them.', 3,
        { r: 'Protect rhythms around disruptions', approach: 'Social rhythm regulation', why: 'IPSRT plans for unavoidable disruptions by keeping anchors stable and limiting their effect on daily rhythms', keys: ['overnight runs twice a week', 'variable wake time'], mistake: 'Ignoring predictable rhythm disruptions in the plan' }),
      O('b', 'Encourage her to drop the overnight runs from her research, since any disruption to sleep is too risky for her now.', -1,
        { r: 'Unrealistic, ignores her goals', approach: 'Eliminate-disruption framing', why: 'Asking her to abandon required research ignores her values and is not feasible; IPSRT plans around disruptions', keys: ['doctoral research'], mistake: 'Treating any sleep disruption as something to eliminate entirely' }),
      O('c', 'Suggest she stay up all night before runs so she can sleep late afterward and catch up on lost rest that week.', -2,
        { r: 'Deepens rhythm disruption', approach: 'Catch-up framing', why: 'All-nighters and late catch-up sleep widen rhythm swings and can trigger hypomania', keys: ['hypomanic history'], mistake: 'Recommending sleep loss and erratic catch-up for a bipolar client' }),
      O('d', 'Teach general sleep hygiene, such as limiting screens and caffeine, without changing anything around the run nights.', 0,
        { r: 'Helpful but generic', approach: 'Sleep-hygiene framing', why: 'Sleep hygiene supports sleep, but it does not address the scheduled disruptions that most threaten her rhythm', keys: ['run nights'], mistake: 'Using generic sleep tips where rhythm planning is needed' }),
    ]),
    Q('q12', 'legal', 'session2', 'Aigerim wants to send data from a free sleep app that shares data with advertisers. What should the counselor do?', ['R6', 'R5'], [
      O('a', 'Accept the data by personal email, since Aigerim chose the app and its data sharing is her own decision to make.', -1,
        { r: 'Unsecured channel', approach: 'Client-choice framing', why: 'Her app choice is hers, but the counselor still must receive data through secure channels and explain the risks', keys: ['shares data with advertisers'], mistake: 'Using personal email to receive client health data' }),
      O('b', 'Decline to look at any wearable data, since devices outside the practice are not part of acceptable clinical care.', 0,
        { r: 'Over-restrictive', approach: 'No-devices framing', why: 'Wearable data can usefully support rhythm work; the issue is privacy and secure transfer, not the tool itself', keys: ['sleep goal'], mistake: 'Rejecting useful technology instead of using it safely' }),
      O('c', 'Discuss the app’s data sharing, consider privacy-safer options, and receive any data through the secure portal.', 3,
        { r: 'Informed, secure use', approach: 'Technology-assisted tools', why: 'Counselors explain technology risks, help clients choose safer tools, and handle client data through secure, documented channels', keys: ['privacy policy shares data', 'wants to send data'], mistake: 'Ignoring third-party data risks in clinical technology' }),
      O('d', 'Ask her to post a screenshot of her sleep graph to the lab’s shared drive, where the counselor can view it easily.', -2,
        { r: 'Exposes health data', approach: 'Convenience framing', why: 'Placing health data where labmates can see it breaches her privacy and the counselor’s duty to protect records', keys: ['shared graduate office'], mistake: 'Choosing convenience over confidentiality' }),
    ]),
    Q('q13', 'legal', 'session2', 'Aigerim asks to continue video sessions from Almaty over winter break. What should the counselor do?', ['R5'], [
      O('a', 'Continue as usual, since she is a U.S. student and the counselor’s license covers students of the university.', -2,
        { r: 'Ignores jurisdiction', approach: 'Enrollment-equals-license framing', why: 'Practice generally occurs where the client is located; enrollment does not extend a U.S. license abroad', keys: ['four weeks in Almaty'], mistake: 'Assuming student status determines practice jurisdiction' }),
      O('b', 'End counseling for the break and resume in January, with no contact while she is out of the country.', -1,
        { r: 'Leaves her without a plan', approach: 'Hard-stop framing', why: 'A gap with no continuity plan leaves a client with recent passive ideation without supports or crisis resources', keys: ['recent passive ideation'], mistake: 'Pausing services without planning for continuity' }),
      O('c', 'Continue by text messages instead of video, since brief written check-ins do not count as sessions.', 0,
        { r: 'Still practice abroad', approach: 'Reclassify-the-contact framing', why: 'Clinical contact by text is still practice; changing modality does not resolve the jurisdiction question', keys: ['international location'], mistake: 'Believing a lighter modality avoids licensure rules' }),
      O('d', 'Check the law and center policy on practice abroad, and build a break plan with local crisis contacts.', 3,
        { r: 'Verify rules; plan continuity', approach: 'Jurisdiction compliance', why: 'The counselor confirms what law and policy allow abroad and, either way, prepares a continuity and crisis plan for the break', keys: ['winter break in Almaty', 'safety plan'], mistake: 'Either practicing abroad unchecked or leaving the client with no plan' }),
    ]),
  ],
};

// ============================================================================
// D947 — Cyclothymic Disorder (plan 7)
// ============================================================================
const D947 = {
  id: 'ncmhce-D947',
  title: 'A session bassist whose “up weeks” and “down weeks” keep costing him rehearsals',
  category: 'Bipolar',
  difficulty: 'easy',
  plan: 7,
  population: 'adult',
  primaryDiagnosis: { name: 'Cyclothymic Disorder', code: 'F34.0' },
  diagnosis: { name: 'Cyclothymic Disorder', code: 'F34.0' },
  differentialOptions: [
    { id: 'do1', name: 'Bipolar II Disorder', isCorrect: false },
    { id: 'do2', name: 'Persistent Depressive Disorder', isCorrect: false },
    { id: 'do3', name: 'Cyclothymic Disorder', isCorrect: true },
  ],
  narrative: {
    intake:
      "Teo Alvarado, a 33-year-old Puerto Rican freelance session bassist in Nashville, comes to a community counseling practice at the urging of his " +
      "partner, Dani. He is uninsured and pays on a sliding scale. For about four years he has cycled between “up” stretches of two or three days, when " +
      "he sleeps six hours and feels fine, talks more, writes songs, and books extra gigs, and “down” stretches of one to two weeks, when he sleeps ten " +
      "hours, cancels rehearsals, and is hard on himself. In the down stretches he still eats normally and plays every gig already booked; he counts three " +
      "low symptoms at most. His up stretches never last four days, he has never spent recklessly, and friends describe them as “fun Teo.” His longest " +
      "even stretch in four years was about a month. He drinks two beers at some gigs (AUDIT-C low) and uses no drugs, and he denies suicidal or homicidal " +
      "thoughts. He has not seen a doctor in three years. At the end of intake he offers the counselor two complimentary tickets to his album release show. " +
      "The counselor has read about mood charting and IPSRT but has not used either with a client.",
    session1:
      "Dani joins part of session 1 with Teo’s consent and asks how she can help without “policing” him. Teo agrees a medical checkup makes sense but has " +
      "no regular doctor and no insurance. He says he wants to “feel more even” and to stop canceling rehearsals, which has cost him two regular studio " +
      "clients; his wake time ranges from 7 a.m. to noon depending on gigs.",
    session2:
      "After two weeks of daily charting, Teo notices that his down stretches follow weeks with three or more late gigs. Labs at a sliding-scale clinic " +
      "were normal. He posted a public story tagging the practice, “shout-out to my therapist,” and has been texting photos of his mood chart to the " +
      "counselor’s work cell phone. Midway through the in-person session, the county’s tornado warning sirens begin to sound. Teo is excited about a " +
      "three-week tour offer and says he wants a rule for “not saying yes to everything” when he is up.",
  },
  diagnosticRationale:
    "For more than two years Teo has had numerous periods of hypomanic symptoms that never meet criteria for a hypomanic episode (two to three days, no " +
    "marked change noticed as problematic) and numerous depressive periods that never meet criteria for a major depressive episode (three symptoms at most), " +
    "without a symptom-free stretch longer than two months. The symptoms cause distress and work impairment (lost studio clients). Substance use is minimal " +
    "and a medical cause will be checked. This is a clear presentation of cyclothymic disorder.",
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Cyclothymic disorder: 2+ years of subthreshold hypomanic and depressive periods, not symptom-free more than 2 months, never meeting episode criteria; not due to a substance or medical condition such as hyperthyroidism' },
    { id: 'R2', source: 'IPSRT', detail: 'Mood and social rhythm charting; stabilizing wake time and routines; planning around rhythm disruptions' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'Boundaries and gifts, competence in new techniques, testimonials and social media, confidentiality of records and electronic communication' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Psychoeducation, collaborative goal setting, cognitive behavioral skill building' },
    { id: 'R5', source: 'HIPAA', detail: 'Safeguards for electronic communication and storage of protected health information' },
    { id: 'R6', source: 'Hays (Assessment)', detail: 'Ruling out medical and substance causes; collateral input from supports with consent' },
    { id: 'R7', source: 'State law', detail: 'Practice emergency preparedness procedures and duty of care to clients on site during an emergency' },
  ],
  questions: [
    // ---------------- intake ----------------
    Q('q1', 'profdev', 'intake', 'At the end of intake, Teo offers the counselor two complimentary tickets to his album release show. What should the counselor do?', ['R3'], [
      O('a', 'Accept the tickets but sit in the back, so the relationship stays professional while still honoring his kind gesture.', -1,
        { r: 'Creates an out-of-session contact', approach: 'Low-profile framing', why: 'Attending his show creates a social contact outside counseling at the very start of treatment, whatever the seating', keys: ['first session'], mistake: 'Thinking discretion removes a boundary concern' }),
      O('b', 'Thank him warmly, decline the tickets, and briefly explain how keeping roles clear protects the counseling work.', 3,
        { r: 'Warm, clear boundary', approach: 'Maintain appropriate boundaries', why: 'Declining kindly with a short explanation preserves the relationship and keeps roles clear at the outset of treatment', keys: ['complimentary tickets', 'end of intake'], mistake: 'Either accepting the gift or refusing it coldly' }),
      O('c', 'Accept the tickets and plan to discuss the show with him in session, since it could deepen rapport early in treatment.', -2,
        { r: 'Blurs roles from the start', approach: 'Rapport-through-gift framing', why: 'Using a personal social event to build rapport turns a boundary crossing into part of treatment and risks a dual relationship', keys: ['new client'], mistake: 'Treating boundary crossings as rapport-building tools' }),
      O('d', 'Decline the tickets without explanation and move on, since any discussion of gifts could make him feel embarrassed.', 0,
        { r: 'Right decision, thin delivery', approach: 'Silent-decline framing', why: 'Declining is appropriate, but without a brief explanation he may feel rejected and miss why boundaries help him', keys: ['kind gesture'], mistake: 'Setting a boundary without explaining it' }),
    ]),
    Q('q2', 'profdev', 'intake', 'The counselor has read about mood charting and IPSRT but has not used them with clients. What is the best step?', ['R3', 'R2'], [
      O('a', 'Wait to offer any charting until the counselor has used it with several other clients first, to build experience.', 0,
        { r: 'Circular delay', approach: 'Experience-first framing', why: 'Experience comes from supervised use; waiting for practice elsewhere delays a fitting, low-risk tool for this client', keys: ['fitting approach'], mistake: 'Treating any new technique as off-limits until mastered' }),
      O('b', 'Refer Teo to a bipolar specialty clinic, since a counselor new to these methods should not treat his mood cycling.', -1,
        { r: 'Unneeded referral', approach: 'Refer-out framing', why: 'Mood charting is learnable with study and consultation; an easy presentation does not require specialty referral', keys: ['uninsured', 'clear presentation'], mistake: 'Referring out over a closable training gap' }),
      O('c', 'Review training materials on mood charting and IPSRT and consult a colleague who uses them while starting the work.', 3,
        { r: 'Study and consult', approach: 'Develop knowledge of supported approaches', why: 'Counselors build competence in empirically supported approaches through study and consultation while applying them responsibly', keys: ['read about but not used', 'mood cycling'], mistake: 'Either practicing untrained or avoiding a well-matched approach' }),
      O('d', 'Make up a simple mood rating sheet on the spot and treat the approach as standard IPSRT in the treatment plan.', -2,
        { r: 'Misrepresents the intervention', approach: 'Improvise-and-label framing', why: 'Calling an improvised tool an established protocol misstates the treatment and skips competence-building', keys: ['no prior use'], mistake: 'Claiming a protocol the counselor has not learned' }),
    ]),
    Q('q3', 'assess', 'intake', 'Which finding best supports cyclothymic disorder rather than bipolar II disorder?', ['R1'], [
      O('a', 'His highs last two or three days and his lows have three symptoms at most, so neither meets full episode criteria.', 3,
        { r: 'Subthreshold on both poles', approach: 'Apply episode thresholds', why: 'Cyclothymia requires that hypomanic and depressive periods never meet full episode criteria over at least two years', keys: ['up stretches never four days', 'three low symptoms at most'], mistake: 'Diagnosing bipolar II without checking hypomania duration' }),
      O('b', 'His high periods feel enjoyable to him and to his friends, which shows they are part of his personality, not symptoms.', -1,
        { r: 'Mood symptoms can feel good', approach: 'Personality framing', why: 'Pleasant highs can still be hypomanic symptoms; enjoyment does not decide the diagnosis', keys: ['“fun Teo”'], mistake: 'Dismissing elevated periods because they feel good' }),
      O('c', 'His low periods last up to two weeks, which is long enough to count as major depressive episodes when they occur.', -2,
        { r: 'Duration is not the whole criterion', approach: 'Duration-only framing', why: 'A major depressive episode needs five symptoms for two weeks; with three symptoms, his lows are subthreshold', keys: ['three low symptoms at most'], mistake: 'Counting duration while ignoring symptom number' }),
      O('d', 'His pattern has lasted about four years, which is longer than the time needed to diagnose bipolar II disorder.', 0,
        { r: 'Duration fits but is not the discriminator', approach: 'Chronicity framing', why: 'The two-year course is required for cyclothymia, but it does not by itself separate it from bipolar II', keys: ['four years of cycling'], mistake: 'Using chronicity alone as the deciding factor' }),
    ]),
    Q('q4', 'assess', 'intake', 'Teo has not seen a doctor in three years. Which step best completes the diagnostic assessment?', ['R1', 'R6'], [
      O('a', 'Ask him to stop all alcohol for a month first, since even two beers could explain the whole pattern of his mood.', -1,
        { r: 'Overweights minimal use', approach: 'Substance-first framing', why: 'His use is low on screening and does not fit a four-year cycling pattern; abstinence trials are not the missing step', keys: ['AUDIT-C low'], mistake: 'Attributing a long-standing mood pattern to light drinking' }),
      O('b', 'Recommend a medical evaluation, including thyroid screening, to rule out a physical cause for his mood changes.', 3,
        { r: 'Medical rule-out', approach: 'Rule out medical causes', why: 'Cyclothymia is diagnosed only when a medical condition such as hyperthyroidism does not explain the symptoms', keys: ['no doctor in three years'], mistake: 'Skipping the medical rule-out in a mood diagnosis' }),
      O('c', 'Finalize the diagnosis now, since his history is clear and a medical visit would add cost for an uninsured client.', -2,
        { r: 'Skips a criterion', approach: 'Cost-avoidance framing', why: 'Cost matters, but omitting the medical rule-out leaves a diagnostic criterion unchecked; low-cost options exist', keys: ['uninsured'], mistake: 'Letting cost override a required diagnostic step' }),
      O('d', 'Give him a depression inventory to measure the severity of his low periods before moving on to treatment planning.', 0,
        { r: 'Useful but not the gap', approach: 'Severity-measure framing', why: 'A severity measure can help track change, but the missing piece for diagnosis is the medical rule-out', keys: ['three low symptoms at most'], mistake: 'Adding measures instead of filling the diagnostic gap' }),
    ]),
    // ---------------- session1 ----------------
    Q('q5', 'indirect', 'session1', 'Dani asks how she can help without “policing” Teo. With Teo’s consent, what is the best response?', ['R6', 'R4'], [
      O('a', 'Ask Dani to check Teo’s mood chart each night and remind him whenever he forgets an entry or seems to be getting up.', -1,
        { r: 'Becomes the policing she feared', approach: 'Monitor framing', why: 'Nightly checking places Dani in a monitoring role that strains the relationship and undercuts Teo’s ownership', keys: ['“without policing him”'], mistake: 'Recruiting a partner as an enforcer' }),
      O('b', 'Explain the cycling pattern and agree, with Teo, on early signs she may gently name and how to raise them.', 3,
        { r: 'Collaborative support role', approach: 'Collaborate with support system', why: 'Educating a partner and agreeing on how she shares observations supports early detection while keeping Teo in charge', keys: ['Dani asks how to help', 'Teo consents'], mistake: 'Either excluding the partner or giving her a control role' }),
      O('c', 'Suggest that Dani join every session from now on, so she can share her own view of each week as it happens.', 0,
        { r: 'Too much involvement', approach: 'Joint-sessions framing', why: 'Occasional joint sessions can help, but having her attend every session shifts individual treatment into couples work', keys: ['individual client'], mistake: 'Equating partner support with constant attendance' }),
      O('d', 'Tell Dani to step back fully, since his mood is his responsibility and her input could bias the treatment.', -2,
        { r: 'Discards a key support', approach: 'Exclude framing', why: 'Shutting out a willing, consented support removes a source of early warning and help', keys: ['Teo consents to her role'], mistake: 'Treating family input as interference' }),
    ]),
    Q('q6', 'indirect', 'session1', 'Teo needs a medical checkup but has no insurance or regular doctor. What should the counselor provide?', ['R6'], [
      O('a', 'The name of a private internist the counselor knows personally, who may agree to see Teo as a favor to the counselor.', -1,
        { r: 'Informal and unreliable', approach: 'Personal-favor framing', why: 'Relying on personal favors is not a sustainable referral and blurs professional relationships', keys: ['uninsured'], mistake: 'Using personal connections instead of a vetted resource list' }),
      O('b', 'A suggestion to go to the hospital emergency room, since it must see him whether or not he has health insurance.', -2,
        { r: 'Wrong level of care', approach: 'ER framing', why: 'Using an emergency room for a routine checkup is inappropriate and can leave him with large bills', keys: ['routine medical rule-out'], mistake: 'Directing nonurgent care to the emergency room' }),
      O('c', 'Current referrals to a sliding-scale community health clinic, plus resources for musicians who need low-cost care.', 3,
        { r: 'Updated, fitting referrals', approach: 'Maintain referral resources', why: 'An updated list matched to his finances and work helps him actually get the medical rule-out completed', keys: ['no insurance', 'freelance musician'], mistake: 'Offering referrals that do not fit the client’s means' }),
      O('d', 'Advice to search online for a low-cost clinic and report back next session about what he was able to find on his own.', 0,
        { r: 'Leaves him to navigate alone', approach: 'Self-search framing', why: 'Encouraging initiative is fine, but the counselor should supply current, vetted options', keys: ['no regular doctor'], mistake: 'Shifting resource-finding entirely onto the client' }),
    ]),
    Q('q7', 'planning', 'session1', 'Which initial treatment plan best fits Teo?', ['R2', 'R4'], [
      O('a', 'Psychoeducation, daily mood and rhythm charting, steadier routines, and CBT skills for managing up and down periods.', 3,
        { r: 'Matched first-line plan', approach: 'Develop an initial plan', why: 'Psychoeducation, charting, rhythm regulation, and skills fit cyclothymia and his goals, with referral available if symptoms escalate', keys: ['wants to feel more even', 'wake time varies widely'], mistake: 'Overlooking rhythm regulation in mood cycling' }),
      O('b', 'An immediate referral for mood-stabilizer treatment, with counseling postponed until medication has steadied his cycles.', -1,
        { r: 'Medication-first sequencing', approach: 'Medication-first framing', why: 'A psychiatric consult can be offered, but counseling is a reasonable first line and should not wait for medication', keys: ['mild presentation'], mistake: 'Making counseling contingent on medication' }),
      O('c', 'Weekly CBT for depression focused only on the down stretches, since those are when he cancels his rehearsals.', 0,
        { r: 'Half the pattern', approach: 'Low-only framing', why: 'The lows cause visible problems, but the up stretches feed them through overbooking; the plan should address both', keys: ['books extra gigs when up'], mistake: 'Treating cyclothymia as depression alone' }),
      O('d', 'Encourage him to use his up stretches to book as much work as possible, so he has income saved for the down weeks.', -2,
        { r: 'Feeds the cycle', approach: 'Ride-the-high framing', why: 'Maximizing activity in elevated periods worsens sleep loss and the crashes that follow', keys: ['downs follow busy weeks'], mistake: 'Reinforcing behavior that drives mood swings' }),
    ]),
    Q('q8', 'planning', 'session1', 'Teo wants to “feel more even.” Which goal is best written for his plan?', ['R2', 'R4'], [
      O('a', 'Teo will feel more even and stop canceling rehearsals by the end of treatment, as rated by Teo and Dani together.', 0,
        { r: 'Meaningful but not measurable', approach: 'Global-goal framing', why: 'It reflects his aim, but has no timeframe or measurable behavior to track progress', keys: ['“feel more even”'], mistake: 'Writing goals that cannot be measured' }),
      O('b', 'Teo will turn down any gig that ends after midnight for the next six months, to protect his sleep schedule.', -1,
        { r: 'Rigid and unrealistic', approach: 'Prohibition framing', why: 'A blanket ban ignores his livelihood and is unlikely to be kept; goals should be attainable', keys: ['freelance musician'], mistake: 'Setting goals that conflict with the client’s work' }),
      O('c', 'For four weeks, Teo will wake within one hour of 9 a.m. on 5 of 7 days and log mood daily on his chart.', 3,
        { r: 'SMART rhythm goal', approach: 'Write a SMART goal', why: 'A stable wake time with daily charting is specific, measurable, attainable, realistic, and time-bound, and targets rhythm', keys: ['wake time 7 a.m. to noon'], mistake: 'Writing vague or unrealistic mood goals' }),
      O('d', 'Teo will keep his mood at a steady 5 out of 10 every day, with no highs or lows, starting from this week on.', -2,
        { r: 'Pathologizes normal mood change', approach: 'Flat-mood framing', why: 'Aiming to eliminate all mood variation is unattainable and treats normal emotion as failure', keys: ['ordinary ups and downs'], mistake: 'Equating stability with no mood variation' }),
    ]),
    // ---------------- session2 ----------------
    Q('q9', 'legal', 'session2', 'Teo posted a public story tagging the practice, “shout-out to my therapist.” What should the counselor do?', ['R3'], [
      O('a', 'Share his post on the practice’s page, since he posted it publicly and freely chose to name the practice himself.', -2,
        { r: 'Uses a client as a testimonial', approach: 'Repost framing', why: 'Resharing confirms he is a client and uses his words as marketing, which breaches confidentiality and testimonial standards', keys: ['public story'], mistake: 'Treating a client’s public post as consent to marketing use' }),
      O('b', 'Leave the post alone, and in session discuss his choice and why the practice will not respond publicly.', 3,
        { r: 'No public reply; discuss privately', approach: 'Appropriate social media practice', why: 'Counselors do not acknowledge clients online or use their posts as testimonials, and they explore such posts with the client', keys: ['tagged the practice', 'public post'], mistake: 'Responding online in a way that confirms the relationship' }),
      O('c', 'Reply to the post with a short thank-you, which is kind and does not reveal any clinical details about his care.', -1,
        { r: 'Confirms the relationship', approach: 'Polite-reply framing', why: 'Any public reply confirms he is a client; courtesy does not remove the confidentiality issue', keys: ['public platform'], mistake: 'Thinking a brief reply is harmless if no details are shared' }),
      O('d', 'Ask him to delete the post right away, since clients may not mention their counselor on social media at all.', 0,
        { r: 'Overreaches his choices', approach: 'Delete framing', why: 'He may share his own care; the counselor’s duty is to avoid responding or using it, and to discuss it', keys: ['his own disclosure'], mistake: 'Controlling the client’s self-disclosure rather than the counselor’s conduct' }),
    ]),
    Q('q10', 'legal', 'session2', 'Teo has been texting photos of his mood chart to the counselor’s work cell phone. What should the counselor do?', ['R5', 'R3'], [
      O('a', 'Keep the photos on the phone as a backup record, since a work phone is already a professional device for the practice.', -1,
        { r: 'Records stored insecurely', approach: 'Phone-as-record framing', why: 'A phone gallery is not a secure clinical record; data should be moved into the record and removed from the device', keys: ['texted photos'], mistake: 'Treating a device as a records system' }),
      O('b', 'Reply to each text with feedback on the chart, since quick responses keep him engaged between his weekly sessions.', -2,
        { r: 'Unsecured clinical exchange', approach: 'Text-therapy framing', why: 'Providing clinical feedback by text extends care over an unsecured, undocumented channel without consent to that modality', keys: ['standard text messages'], mistake: 'Practicing by text without safeguards or agreement' }),
      O('c', 'Stop reading his texts and say nothing about it, so the problem resolves on its own without awkward discussion.', 0,
        { r: 'Avoids the conversation', approach: 'Ignore framing', why: 'Ignoring his texts leaves him unsure and leaves health data on the phone; the issue needs a clear conversation', keys: ['ongoing texts'], mistake: 'Avoiding a needed policy discussion' }),
      O('d', 'Explain the risks of texting, offer the secure portal instead, and move existing photos into the record securely.', 3,
        { r: 'Secure channel and record', approach: 'Secure records', why: 'Counselors explain risks of unsecured communication, provide secure options, and keep data in the protected record', keys: ['photos on work cell'], mistake: 'Leaving client data in unsecured messaging' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Teo notices his down stretches follow weeks with three or more late gigs. What is the best next step?', ['R2', 'R4'], [
      O('a', 'Reinforce the discovery and explain how disrupted sleep and routines can set off mood shifts, linking it to his own chart.', 3,
        { r: 'Psychoeducation from his own data', approach: 'Provide psychoeducation', why: 'Connecting his chart to how rhythm disruption affects mood builds insight and motivation for rhythm-protecting changes', keys: ['downs follow late-gig weeks'], mistake: 'Missing the chance to link the client’s own data to the model' }),
      O('b', 'Tell him the pattern is probably coincidence and that he should keep charting for several months before drawing conclusions.', -1,
        { r: 'Dismisses a valid pattern', approach: 'Wait-for-more-data framing', why: 'The link fits what is known about rhythm disruption; dismissing it discourages his engagement', keys: ['two weeks of charting'], mistake: 'Undercutting a client’s accurate self-observation' }),
      O('c', 'Advise him to stop playing late gigs altogether, since the chart proves they are what is causing his mood problems.', -2,
        { r: 'Overreaches; threatens income', approach: 'Eliminate framing', why: 'A short chart does not prove cause, and dropping late gigs threatens his livelihood when planning around them is possible', keys: ['freelance income'], mistake: 'Turning one observation into a sweeping directive' }),
      O('d', 'Note the pattern in his record and move on to the tour offer, since it is the most pressing decision he faces this week.', 0,
        { r: 'Misses a teaching moment', approach: 'Agenda-shift framing', why: 'The tour matters, but understanding this pattern first will help him decide about the tour', keys: ['tour offer'], mistake: 'Skipping psychoeducation for the next topic' }),
    ]),
    Q('q12', 'legal', 'session2', 'Tornado warning sirens sound midway through Teo’s in-person session. What should the counselor do?', ['R7'], [
      O('a', 'Finish the session quickly and let Teo decide whether to drive home now or stay, since he is an adult client.', -2,
        { r: 'Sends him into danger', approach: 'Client-decides framing', why: 'Leaving during an active warning exposes him to danger; the practice plan exists to guide everyone to shelter', keys: ['tornado warning sirens'], mistake: 'Ignoring the practice’s emergency procedures' }),
      O('b', 'Follow the practice’s emergency plan, guiding Teo to the designated shelter area and staying with him until it clears.', 3,
        { r: 'Activate the emergency plan', approach: 'Emergency preparedness', why: 'Practices keep emergency plans for incidents like severe weather; the counselor follows it and keeps the client safe', keys: ['sirens mid-session', 'in-person session'], mistake: 'Improvising or ignoring a known emergency procedure' }),
      O('c', 'Check a weather app first to judge how close the storm is before deciding whether moving to shelter is really necessary.', -1,
        { r: 'Delays protective action', approach: 'Verify-first framing', why: 'A warning calls for immediate shelter; delaying to judge the storm wastes critical time', keys: ['warning already issued'], mistake: 'Second-guessing an official warning' }),
      O('d', 'Continue the session in the office away from the windows, since moving would interrupt an important conversation.', 0,
        { r: 'Partial safety step', approach: 'Shelter-in-place framing', why: 'Moving from windows helps, but the practice’s designated shelter area is the planned, safer location', keys: ['practice plan'], mistake: 'Putting session continuity ahead of the emergency plan' }),
    ]),
    Q('q13', 'interventions', 'session2', 'Teo wants a rule for “not saying yes to everything” when he is up. Which intervention best fits?', ['R2', 'R4'], [
      O('a', 'Tell him to decline all new offers whenever he feels good, since good moods are when his judgment cannot be trusted.', -1,
        { r: 'Pathologizes all good moods', approach: 'Distrust-good-mood framing', why: 'Treating every good day as suspect is inaccurate and discouraging; the plan should target elevated periods', keys: ['up stretches are brief'], mistake: 'Teaching the client to distrust normal positive mood' }),
      O('b', 'Help him build a plan to wait 48 hours and check his chart and sleep before accepting new gigs during up periods.', 3,
        { r: 'Concrete self-management skill', approach: 'Facilitate skill development', why: 'A delay-and-check rule tied to his chart builds a practical skill for managing impulsive commitments while respecting his work', keys: ['wants a rule', 'books extra gigs when up'], mistake: 'Giving advice instead of building a usable skill' }),
      O('c', 'Have Dani approve every booking during up periods, so someone outside his mood makes the call about his work.', -2,
        { r: 'Hands control to his partner', approach: 'External-control framing', why: 'Handing his work decisions to Dani undermines autonomy and puts her in the policing role she wanted to avoid', keys: ['“without policing him”'], mistake: 'Replacing self-management with partner control' }),
      O('d', 'Encourage him to accept the tour and other offers, trusting that he will learn from the results of each decision.', 0,
        { r: 'Autonomy without support', approach: 'Learn-by-experience framing', why: 'Respecting his choice is right, but he asked for a skill; the counselor should help build one', keys: ['asked for a rule'], mistake: 'Missing a requested skill-building opportunity' }),
    ]),
  ],
};

// ============================================================================
// D948 — Bipolar I Disorder, Current Episode Depressed, Moderate (plan 8)
// ============================================================================
const D948 = {
  id: 'ncmhce-D948',
  title: 'A dispatcher calls her twenty-year-old hospitalization “just a breakdown” while a new SSRI keeps her up at night',
  category: 'Bipolar',
  difficulty: 'hard',
  plan: 8,
  population: 'adult',
  primaryDiagnosis: { name: 'Bipolar I Disorder, Current Episode Depressed, Moderate', code: 'F31.32' },
  diagnosis: { name: 'Bipolar I Disorder, Current Episode Depressed, Moderate', code: 'F31.32' },
  differentialOptions: [
    { id: 'do1', name: 'Major Depressive Disorder, Recurrent Episode, Moderate', isCorrect: false },
    { id: 'do2', name: 'Bipolar II Disorder', isCorrect: false },
    { id: 'do3', name: 'Bipolar I Disorder, Current Episode Depressed, Moderate', isCorrect: true },
    { id: 'do4', name: 'Substance/Medication-Induced Depressive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      "Corinne Baptiste, a 44-year-old Haitian American school transportation dispatcher, divorced with two teenagers (15 and 17) who live mainly with " +
      "her, comes to a community mental health clinic for six weeks of low mood, loss of interest, guilt, fatigue, poor concentration, and an eight-pound " +
      "weight loss. She is fluent in English and Haitian Creole and finds her church supportive. On the medication list she writes “sertraline 50 mg,” " +
      "started three weeks ago by a new primary care provider at a telehealth visit and increased to 100 mg five days ago. Asked about past treatment she " +
      "says, “At 24 I had a breakdown. I didn’t sleep for a week, I believed God chose me to lead, I was preaching on the highway. I was in the hospital " +
      "ten days and they gave me lithium. I stopped it after a year and I’ve been fine.” She did not tell her new provider because “that was twenty years " +
      "ago.” Later she says, “I would never do anything, I have my kids,” and a few minutes after, “I’ve been getting my papers in order, the life insurance, " +
      "the house, so things are simple for them.” She keeps her late father’s revolver in a locked box in her bedroom closet. The counselor, whose client " +
      "died by suicide four months ago, notices an urge to accept her reassurance and move on, and has rarely treated bipolar I disorder.",
    session1:
      "A structured screen at intake found a wish to be dead and active thoughts of suicide without a specific plan in the past month, preparatory behavior " +
      "(the insurance papers), and denied intent. She agreed to outpatient care with closer contact and signed a release for her primary care provider. In " +
      "session 1 she says that since the dose increase she sleeps three to four hours, “my mind won’t stop,” she paces at night and snaps at her kids, and " +
      "she feels “wired but still hopeless”; she denies elevated mood. Her brother, Jean-Robert, has agreed to help with her safety plan. The counselor’s " +
      "original plan was weekly CBT for depression.",
    session2:
      "After the counselor’s call, the provider held the dose increase and moved up a psychiatry appointment to four days from now. Corinne says, “Maybe I " +
      "should just stop all the pills, they’re making it worse.” She adds that in her family “bipolar” means “crazy,” and her mother believes her low mood " +
      "is a spiritual test best met with prayer. Jean-Robert has not yet taken the revolver: “He’s busy, and it’s locked anyway.” Her ex-husband has filed to " +
      "modify custody, and his attorney has sent the counselor a subpoena for all of her records. Her insurer requires documentation to authorize " +
      "twice-weekly sessions. Two days after session 2, she misses a scheduled video check-in and does not answer two calls; her telehealth consent lists " +
      "Jean-Robert as emergency contact and her home address as her usual location.",
  },
  diagnosticRationale:
    "Corinne's hospitalization at 24 for a week of no sleep, grandiose religious conviction, and disorganized public behavior, treated with lithium, is a " +
    "lifetime manic episode, which establishes bipolar I disorder regardless of the current episode. She now meets criteria for a major depressive episode " +
    "of moderate severity. Her recent insomnia, racing thoughts, and agitation after an antidepressant increase, without elevated mood, signal activation " +
    "and switch risk that need urgent prescriber review rather than a new diagnosis. The \"with mixed features\" specifier is not supported: it " +
    "requires at least three manic/hypomanic symptoms during the depressive episode, and DSM-5-TR excludes the overlapping symptoms insomnia, " +
    "psychomotor agitation, irritability, and distractibility, leaving racing thoughts alone; the symptoms also emerged only after the dose increase. " +
    "Her suicide risk is elevated: active ideation, preparatory behavior " +
    "framed as reassurance, and an accessible firearm.",
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Bipolar I disorder requires at least one lifetime manic episode; current episode depressed, moderate; mixed features specifier (3+ non-overlapping manic/hypomanic symptoms); antidepressant-emergent symptoms' },
    { id: 'R2', source: 'C-SSRS', detail: 'Ideation, intent, plan, and preparatory behavior; screening when reassurance and preparatory acts coexist' },
    { id: 'R3', source: 'Stanley-Brown SPI', detail: 'Safety plan steps including warning signs, coping, contacts, crisis lines, and making the environment safe (lethal means)' },
    { id: 'R4', source: 'VA/DoD CPG', detail: 'Bipolar disorder and suicide risk management: specialist medication management, lethal means counseling, increased contact during high risk' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'Competence and consultation, counselor impairment and self-care, culturally responsive practice, court-ordered disclosure, accurate records' },
    { id: 'R6', source: 'HIPAA', detail: 'Disclosure for treatment coordination; subpoenas without a court order or client authorization' },
    { id: 'R7', source: 'Wiger (Documentation)', detail: 'Documenting self-reported medication effects; documentation supporting medical necessity for level and frequency of care' },
    { id: 'R8', source: 'State law', detail: 'Privilege and response to subpoenas; welfare checks and emergency procedures for telehealth clients' },
  ],
  questions: [
    // ---------------- intake ----------------
    Q('q1', 'profdev', 'intake', 'The counselor, whose client died by suicide four months ago, notices an urge to accept Corinne’s reassurance. What is the best response?', ['R5', 'R2'], [
      O('a', 'Recognize the urge as a reaction to the loss, still assess her risk fully, and bring the reaction to supervision.', 3,
        { r: 'Name it, override it, get support', approach: 'Self-reflection and supervision', why: 'Counselors notice how their own trauma shapes judgment, complete the needed assessment despite it, and use supervision to process it', keys: ['client died by suicide four months ago', 'urge to move on'], mistake: 'Letting a personal reaction shape the risk assessment' }),
      O('b', 'Accept her statement about her kids for now, since pressing a new client too hard could damage early trust.', -2,
        { r: 'Acts out avoidance', approach: 'Protect-rapport framing', why: 'Taking reassurance at face value when preparatory behavior is present lets the counselor’s avoidance drive a missed risk', keys: ['papers in order', 'revolver at home'], mistake: 'Allowing countertransference to cut short a risk assessment' }),
      O('c', 'Transfer Corinne to a colleague, since a counselor who recently lost a client should not see anyone at risk.', -1,
        { r: 'Abandons at a risky moment', approach: 'Self-exclusion framing', why: 'A recent loss calls for supervision and self-monitoring, not automatic transfer of a client mid-intake', keys: ['intake in progress'], mistake: 'Treating any personal reaction as disqualifying' }),
      O('d', 'Push the reaction aside and keep working, planning to deal with it on personal time once the intake is finished.', 0,
        { r: 'Unexamined reaction', approach: 'Compartmentalize framing', why: 'Continuing the work is right, but ignoring a known reaction risks it shaping later decisions without support', keys: ['recent client suicide'], mistake: 'Assuming awareness alone is enough without reflection or supervision' }),
    ]),
    Q('q2', 'assess', 'intake', 'Which intake finding is decisive for Corinne’s diagnosis?', ['R1'], [
      O('a', 'Her six weeks of low mood, anhedonia, guilt, and weight loss, which establish a major depressive episode.', 0,
        { r: 'Needed but not decisive', approach: 'Current-episode framing', why: 'The current episode is required, but it does not determine polarity; the past manic episode does', keys: ['six weeks of symptoms'], mistake: 'Stopping at the current episode without weighing the history' }),
      O('b', 'Her poor sleep since the sertraline increase, which shows that the medication itself has caused a manic episode.', -1,
        { r: 'Misreads current activation', approach: 'Medication-mania framing', why: 'Insomnia and racing thoughts without elevated mood signal activation needing review, not a full manic episode', keys: ['denies elevated mood'], mistake: 'Basing the diagnosis on new activation rather than the documented history' }),
      O('c', 'Her week without sleep, belief God chose her to lead, and hospitalization at 24, which was a manic episode.', 3,
        { r: 'Lifetime manic episode', approach: 'Use all data for diagnosis', why: 'One lifetime manic episode establishes bipolar I disorder; her “breakdown” meets mania criteria with hospitalization', keys: ['hospital ten days', 'treated with lithium'], mistake: 'Accepting the client’s label “breakdown” instead of examining the episode' }),
      O('d', 'Her twenty years of stability after stopping lithium, which shows the early episode was situational and not bipolar.', -2,
        { r: 'Long remission does not erase mania', approach: 'Remission framing', why: 'Years of stability do not undo a past manic episode; this reasoning leads to antidepressant-only care for bipolar I', keys: ['now on sertraline only'], mistake: 'Treating remission as proof the earlier episode was not bipolar' }),
    ]),
    Q('q3', 'profdev', 'intake', 'The counselor has rarely treated bipolar I disorder and is unsure how to handle the antidepressant question. What should the counselor do?', ['R5', 'R4'], [
      O('a', 'Research bipolar medications and tell Corinne which mood stabilizer would be safer for her than sertraline.', -2,
        { r: 'Prescribing outside scope', approach: 'Counselor-as-prescriber framing', why: 'Recommending specific medications is outside counselor scope and could lead her to change treatment without a prescriber', keys: ['counselor scope'], mistake: 'Filling a knowledge gap by stepping outside scope' }),
      O('b', 'Consult a colleague experienced with bipolar disorder about coordinating with the prescriber while staying in scope.', 3,
        { r: 'Consult to act competently', approach: 'Seek consultation', why: 'Consultation fills a specific skill gap quickly and helps the counselor coordinate medication concerns without overstepping', keys: ['rarely treated bipolar I', 'antidepressant-only prescription'], mistake: 'Proceeding alone in an unfamiliar, high-risk situation' }),
      O('c', 'Leave all medication matters to the primary care provider, since the counselor’s role is limited to talk therapy.', -1,
        { r: 'Scope used as a reason to disengage', approach: 'Silo framing', why: 'Counselors do not prescribe but do share relevant history with prescribers; staying silent leaves a known risk unaddressed', keys: ['provider unaware of mania'], mistake: 'Confusing scope limits with no role in coordination' }),
      O('d', 'Sign up for a continuing education course on bipolar disorder next quarter and carry on with the current plan meanwhile.', 0,
        { r: 'Too slow for this case', approach: 'Future-training framing', why: 'Training is worthwhile, but this client needs informed coordination now, which consultation provides', keys: ['dose increased five days ago'], mistake: 'Addressing an urgent gap with a delayed solution' }),
    ]),
    Q('q4', 'assess', 'intake', 'Corinne says she would “never do anything” but has been getting her papers in order. What should the counselor do?', ['R2', 'R4'], [
      O('a', 'Accept her statement about her children as a strong protective factor and plan to revisit risk at a later session.', -1,
        { r: 'Misses preparatory behavior', approach: 'Protective-factor framing', why: 'Children can be protective, but putting affairs in order is a preparatory behavior that demands full assessment now', keys: ['life insurance, the house', 'revolver at home'], mistake: 'Letting a reassurance outweigh a preparatory act' }),
      O('b', 'Arrange an involuntary hospital hold right away, since putting papers in order means she is planning an attempt.', 0,
        { r: 'Acts before assessing', approach: 'Immediate-hold framing', why: 'The finding is serious, but level-of-care decisions follow a full assessment of ideation, intent, and plan', keys: ['risk not yet assessed'], mistake: 'Choosing a level of care before completing the assessment' }),
      O('c', 'Ask her to sign a no-suicide agreement covering the time until her next appointment and continue the intake.', -2,
        { r: 'Contract instead of assessment', approach: 'Contract framing', why: 'No-suicide contracts do not assess or reduce risk, give false reassurance, and leave the revolver and preparatory behavior unaddressed', keys: ['preparatory behavior', 'revolver at home'], mistake: 'Substituting a contract for assessment' }),
      O('d', 'Ask directly about suicidal thoughts, intent, plans, and preparation, including access to her father’s revolver.', 3,
        { r: 'Full structured assessment with means', approach: 'Assess risk to self', why: 'Preparatory acts alongside reassurance call for a direct, structured assessment that includes firearm access', keys: ['papers in order', 'revolver in closet'], mistake: 'Not asking about firearms when one is known to be present' }),
    ]),
    // ---------------- session1 ----------------
    Q('q5', 'planning', 'session1', 'Which safety plan best fits Corinne after the intake screen?', ['R3', 'R4'], [
      O('a', 'A written safety plan with warning signs, coping steps, contacts, crisis lines, and Jean-Robert storing the revolver.', 3,
        { r: 'Complete plan with lethal means', approach: 'Collaborative safety planning', why: 'An evidence-based safety plan includes making the environment safe; off-site firearm storage with a trusted person reduces lethality', keys: ['active ideation', 'revolver at home', 'brother willing to help'], mistake: 'Leaving lethal means out of the safety plan' }),
      O('b', 'A written safety plan with coping steps and crisis lines, leaving the revolver at home since it is already locked.', -1,
        { r: 'Lethal means not addressed', approach: 'Locked-is-enough framing', why: 'A locked firearm in the home is still accessible to her; off-site storage during high risk is the recommended step', keys: ['locked box in her closet'], mistake: 'Treating a locked home firearm as safely stored' }),
      O('c', 'A signed agreement not to harm herself before each session, with crisis line numbers written on the back of the form.', -2,
        { r: 'No-suicide contract', approach: 'Contract framing', why: 'Contracts are not effective safety interventions and leave the firearm and warning signs unaddressed', keys: ['preparatory behavior'], mistake: 'Relying on a contract instead of a safety plan' }),
      O('d', 'A recommendation for voluntary inpatient admission now, with the safety plan to be written after discharge.', 0,
        { r: 'Over-restrictive, defers planning', approach: 'Admit-first framing', why: 'She agreed to outpatient care and denies intent; admission can be discussed, but the safety plan is needed today', keys: ['denied intent', 'agreed to closer contact'], mistake: 'Deferring safety planning to a different level of care' }),
    ]),
    Q('q6', 'planning', 'session1', 'How should the counselor revise the original plan of weekly CBT for depression?', ['R4', 'R1'], [
      O('a', 'Keep weekly CBT for depression unchanged, since the primary care provider is already managing her medications.', 0,
        { r: 'Ignores new information', approach: 'Stay-the-course framing', why: 'The plan was built before the bipolar history and current risk were known; it needs revision', keys: ['bipolar I history', 'active ideation'], mistake: 'Not revising a plan after diagnosis and risk change' }),
      O('b', 'Advise Corinne to stop the sertraline on her own, then continue the original weekly CBT plan for her depression.', -2,
        { r: 'Medication direction beyond scope', approach: 'Counselor-directs-meds framing', why: 'Telling a client to stop medication is outside scope and risks discontinuation effects without prescriber oversight', keys: ['counselor scope'], mistake: 'Directing medication changes as a counselor' }),
      O('c', 'Add behavioral activation with evening social plans, so that she has more activity at night when she cannot sleep.', -1,
        { r: 'Worsens rhythm disruption', approach: 'Activation framing', why: 'Evening activation adds stimulation when sleep is already short and activation symptoms are present', keys: ['sleeping three to four hours'], mistake: 'Applying unipolar depression techniques without regard to bipolar risk' }),
      O('d', 'Add psychiatric referral for bipolar care, increase contact, keep the safety plan active, and add sleep stability work.', 3,
        { r: 'Plan matches diagnosis and risk', approach: 'Revise the treatment plan', why: 'Bipolar I with elevated risk calls for specialist medication management, closer contact, active safety planning, and rhythm stabilization', keys: ['lifetime mania', 'preparatory behavior'], mistake: 'Treating bipolar depression with a unipolar plan' }),
    ]),
    Q('q7', 'indirect', 'session1', 'Corinne reports sleeping three to four hours, racing thoughts, and pacing since the dose increase. What should the counselor do?', ['R7', 'R4'], [
      O('a', 'Encourage Corinne to call her provider herself about the new symptoms when she has a chance later this week.', 0,
        { r: 'Right idea, too passive', approach: 'Client-calls framing', why: 'Her own call is good, but with a release, bipolar history, and suicide risk, the counselor should also contact the provider promptly', keys: ['signed release', 'dose raised five days ago'], mistake: 'Leaving urgent coordination entirely to a distressed client' }),
      O('b', 'Document her self-reported effects with dates in her words, and contact the provider today under her release.', 3,
        { r: 'Document and coordinate now', approach: 'Document self-reported medication effects', why: 'Accurate notes of self-reported effects, shared promptly with the prescriber, let the prescriber act on activation and switch risk', keys: ['“wired but still hopeless”', 'provider unaware of mania history'], mistake: 'Recording side effects without getting them to the prescriber' }),
      O('c', 'Note the symptoms in the chart and plan to review them again next week to see whether they settle on their own.', -1,
        { r: 'Delay during switch risk', approach: 'Watchful-waiting framing', why: 'Waiting a week with activation symptoms, bipolar history, and suicide risk leaves a dangerous change unaddressed', keys: ['racing thoughts', 'active ideation'], mistake: 'Monitoring passively when urgent coordination is needed' }),
      O('d', 'Record the change as improved energy, a sign that the higher sertraline dose has started to lift her depression.', -2,
        { r: 'Mischaracterizes activation', approach: 'Improvement framing', why: 'Insomnia, racing thoughts, and agitation with ongoing hopelessness are warning signs, not improvement; mislabeling them is dangerous', keys: ['“wired but still hopeless”'], mistake: 'Recording activation as treatment response' }),
    ]),
    // ---------------- session2 ----------------
    Q('q8', 'interventions', 'session2', 'Corinne says, “Maybe I should just stop all the pills, they’re making it worse.” What is the best response?', ['R4', 'R1'], [
      O('a', 'Agree that stopping is reasonable, since the sertraline seems to be making her symptoms worse rather than better.', -2,
        { r: 'Endorses unsupervised stopping', approach: 'Agree-to-stop framing', why: 'Endorsing abrupt discontinuation without the prescriber is outside scope and may cause discontinuation effects', keys: ['psychiatry in four days'], mistake: 'Giving medication advice to validate frustration' }),
      O('b', 'Tell her she must keep taking the pills exactly as prescribed until the psychiatrist says otherwise.', -1,
        { r: 'Dismisses her concern', approach: 'Directive framing', why: 'Overriding her concern without exploring it damages trust and ignores that her concern is valid', keys: ['activation symptoms'], mistake: 'Responding to a valid concern with a command' }),
      O('c', 'Validate her concern, explain that changes go through her prescriber, and help her call before the appointment.', 3,
        { r: 'Validate and route to prescriber', approach: 'Psychoeducation within scope', why: 'Her concern is valid; the counselor supports her autonomy while directing medication decisions to the prescriber promptly', keys: ['“they’re making it worse”', 'psychiatry moved up'], mistake: 'Either endorsing unsupervised changes or dismissing her concern' }),
      O('d', 'Explore her feelings about medication in depth and leave the decision about stopping for her to make on her own.', 0,
        { r: 'Supportive but incomplete', approach: 'Explore-only framing', why: 'Exploring helps, but leaving her to stop alone omits the guidance that changes go through the prescriber', keys: ['psychiatry in four days'], mistake: 'Treating neutrality as appropriate when safety is involved' }),
    ]),
    Q('q9', 'interventions', 'session2', 'Corinne says “bipolar” means “crazy” in her family and her mother sees her low mood as a spiritual test. What should the counselor do?', ['R5'], [
      O('a', 'Explain that bipolar disorder is a medical condition and that spiritual views of mental illness are a barrier to recovery.', -1,
        { r: 'Dismisses her cultural frame', approach: 'Correct-the-belief framing', why: 'Dismissing her family’s spiritual understanding alienates her and ignores a real source of support', keys: ['supportive church'], mistake: 'Treating cultural beliefs as obstacles to remove' }),
      O('b', 'Avoid using the diagnosis with her for now and focus only on symptoms, so as not to upset her or her family.', 0,
        { r: 'Withholds needed information', approach: 'Avoid-the-label framing', why: 'Sensitivity is right, but avoiding the diagnosis entirely leaves her uninformed about her own care', keys: ['bipolar I diagnosis'], mistake: 'Sidestepping the diagnosis instead of exploring its meaning' }),
      O('c', 'Agree that prayer may be enough for now and suggest she pause treatment to see whether her faith carries her through.', -2,
        { r: 'Undermines care during risk', approach: 'Faith-instead framing', why: 'Suggesting she pause treatment during active suicide risk endangers her; faith can be integrated, not substituted', keys: ['active ideation'], mistake: 'Endorsing withdrawal from treatment to honor a belief' }),
      O('d', 'Explore what the label and the spiritual view mean to her, and how faith and treatment might work together for her.', 3,
        { r: 'Broach culture collaboratively', approach: 'Explore culture and worldview', why: 'Exploring the meaning of the diagnosis and integrating faith supports engagement and reduces stigma', keys: ['“bipolar” means “crazy”', 'spiritual test'], mistake: 'Either imposing a medical frame or abandoning it' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Jean-Robert has not taken the revolver yet: “He’s busy, and it’s locked anyway.” What should the counselor do?', ['R3', 'R4'], [
      O('a', 'Accept that the box is locked for now, and note in the record that the revolver will be moved when he has time.', -2,
        { r: 'Leaves lethal means in place', approach: 'Locked-is-enough framing', why: 'With active ideation, an accessible home firearm is a major risk; deferring removal leaves lethal means available', keys: ['active ideation', 'revolver still home'], mistake: 'Accepting delay in lethal means reduction' }),
      O('b', 'Revisit the plan with her now: explore her hesitation and set a specific day and time for the revolver to leave the home.', 3,
        { r: 'Concrete lethal means follow-through', approach: 'Lethal means counseling', why: 'Lethal means counseling works through barriers and sets a concrete, near-term plan for off-site storage', keys: ['“he’s busy”', 'safety plan includes revolver'], mistake: 'Leaving lethal means steps open-ended' }),
      O('c', 'Call the police and ask them to collect the revolver from her home today, without discussing it with her first.', -1,
        { r: 'Bypasses the client', approach: 'Unilateral-action framing', why: 'Acting without her undermines trust and the safety plan; collaborative removal through her chosen helper comes first', keys: ['brother agreed to help'], mistake: 'Taking coercive action before collaborative options' }),
      O('d', 'Remind her to keep the key or combination somewhere less convenient until her brother has time to come and get it.', 0,
        { r: 'Partial step only', approach: 'Harder-access framing', why: 'Making access harder helps a little, but off-site storage during high risk is the stronger, planned step', keys: ['revolver in her closet'], mistake: 'Settling for minor friction instead of removal' }),
    ]),
    Q('q11', 'legal', 'session2', 'The ex-husband’s attorney sends a subpoena for all of Corinne’s records. What should the counselor do?', ['R6', 'R8', 'R5'], [
      O('a', 'Send the full record to the attorney, since a subpoena is a legal order that must be followed right away.', -2,
        { r: 'Releases without authority', approach: 'Comply-immediately framing', why: 'An attorney’s subpoena is not a court order; releasing records without her authorization or an order breaches confidentiality', keys: ['attorney subpoena'], mistake: 'Treating a subpoena as a court order' }),
      O('b', 'Ignore the subpoena, since counseling records are privileged and do not have to be produced in custody cases.', -1,
        { r: 'Ignores legal obligations', approach: 'Ignore framing', why: 'A subpoena requires a response; ignoring it can bring sanctions, and privilege must be asserted properly', keys: ['custody proceeding'], mistake: 'Assuming privilege makes legal process irrelevant' }),
      O('c', 'Notify Corinne, get legal or board guidance, assert privilege, and release only with her consent or a court order.', 3,
        { r: 'Protect records through proper process', approach: 'Court proceeding obligations', why: 'Counselors inform the client, get legal guidance, and disclose only with valid authorization or a court order', keys: ['subpoena for all records', 'custody modification'], mistake: 'Either releasing records or ignoring the subpoena' }),
      O('d', 'Send a short summary instead of the full record, so the attorney gets enough to satisfy the request without details.', 0,
        { r: 'Still unauthorized disclosure', approach: 'Partial-release framing', why: 'A summary still discloses protected information without authorization or an order', keys: ['no client authorization'], mistake: 'Thinking less disclosure makes unauthorized disclosure acceptable' }),
    ]),
    Q('q12', 'legal', 'session2', 'Her insurer requires documentation to authorize twice-weekly sessions. What should the counselor submit?', ['R7'], [
      O('a', 'A request stating that Corinne prefers to come twice a week, since client preference is a valid reason for frequency.', -1,
        { r: 'Preference is not necessity', approach: 'Preference framing', why: 'Authorization rests on clinical need; preference alone does not establish medical necessity', keys: ['elevated risk'], mistake: 'Citing preference instead of clinical findings' }),
      O('b', 'Documentation of her diagnosis, current risk findings, safety plan, and how twice-weekly contact targets them.', 3,
        { r: 'Records that support necessity', approach: 'Support reimbursement with documentation', why: 'Requests must be supported by documentation linking diagnosis and risk to the frequency of care', keys: ['active ideation', 'preparatory behavior'], mistake: 'Submitting requests the clinical record does not support' }),
      O('c', 'Her full progress notes, including the custody dispute and family details, so the insurer has everything to review.', 0,
        { r: 'More than necessary', approach: 'Send-everything framing', why: 'Insurers need information that supports necessity, not unrelated personal details', keys: ['minimum necessary'], mistake: 'Over-disclosing to a payer' }),
      O('d', 'A request that describes a recent suicide attempt, so the insurer will approve the higher frequency of sessions.', -2,
        { r: 'Falsified claim', approach: 'Exaggeration framing', why: 'Describing an attempt that did not occur is fraud and falsifies the record', keys: ['no attempt history'], mistake: 'Misstating clinical facts to obtain authorization' }),
    ]),
    Q('q13', 'legal', 'session2', 'Corinne misses a scheduled video check-in and does not answer two calls. What should the counselor do?', ['R8', 'R4'], [
      O('a', 'Leave a voicemail asking her to call back and wait until her next scheduled session to follow up again.', -2,
        { r: 'Passive response to high risk', approach: 'Wait framing', why: 'With active ideation, a firearm still at home, and no contact, waiting days could be fatal', keys: ['revolver not removed', 'missed check-in'], mistake: 'Treating a missed contact as routine during high risk' }),
      O('b', 'Follow the telehealth emergency plan: call Jean-Robert, and request a welfare check if she stays unreachable.', 3,
        { r: 'Activate the emergency protocol', approach: 'Telemental health best practice', why: 'Emergency plans set at telehealth consent guide this step: reach the listed contact and request a welfare check if needed', keys: ['brother is emergency contact', 'home address on file'], mistake: 'Not using the emergency protocol when a high-risk client is unreachable' }),
      O('c', 'Send a text and an email asking her to reply, then try her cell again later in the day before doing anything else.', -1,
        { r: 'Too slow given risk', approach: 'Keep-trying framing', why: 'More messages delay protective action when the emergency contact can be reached now', keys: ['two unanswered calls'], mistake: 'Delaying escalation when risk is high' }),
      O('d', 'Call the psychiatrist’s office to ask whether she kept the appointment, then decide what to do based on their answer.', 0,
        { r: 'Indirect information first', approach: 'Check-another-provider framing', why: 'Coordination can help, but it delays the emergency plan that is designed for exactly this situation', keys: ['emergency contact listed'], mistake: 'Gathering information instead of acting on the protocol' }),
    ]),
  ],
};

// ============================================================================
// D949 — Autism Spectrum Disorder (plan 9)
// ============================================================================
const D949 = {
  id: 'ncmhce-D949',
  title: 'A data analyst seeks a late autism diagnosis after a return-to-office mandate',
  category: 'Neurodevelopmental',
  difficulty: 'medium',
  plan: 9,
  population: 'adult',
  primaryDiagnosis: { name: 'Autism Spectrum Disorder', code: 'F84.0' },
  diagnosis: { name: 'Autism Spectrum Disorder', code: 'F84.0' },
  differentialOptions: [
    { id: 'do1', name: 'Social Anxiety Disorder', isCorrect: false },
    { id: 'do2', name: 'Autism Spectrum Disorder', isCorrect: true },
    { id: 'do3', name: 'Schizoid Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Social (Pragmatic) Communication Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      "Sanaa Haddad, a 32-year-old Lebanese American data analyst at a regional insurance company, self-refers to a group counseling practice asking " +
      "whether she is autistic. Three months ago a return-to-office mandate moved her team to an open-plan floor under fluorescent lights. She leaves " +
      "meetings to sit in a bathroom stall “to reset,” and twice she has been unable to speak for about 20 minutes after a loud meeting. Her new manager " +
      "wrote that she “lacks engagement” and “avoids eye contact.” She has always preferred fixed routines, has been intensely interested in transit " +
      "timetables since childhood (she now builds transit datasets for fun), struggles in group conversation (“I don’t know when it’s my turn”), takes " +
      "idioms literally, and has two close friends. Clothing tags, buzzing lights, and crowds overwhelm her. She says, “I don’t fear people judging me; I " +
      "just can’t tell what they want,” and that she is “exhausted from acting normal.” She denies suicidal thoughts and substance use. Her mother, Hala, " +
      "who speaks Arabic and English, can describe her early childhood, and Sanaa is willing to sign a release. The counselor is not trained to administer " +
      "a standardized autism observation measure. After intake, the counselor’s draft note reads: “poor eye contact, odd prosody; goal: improve eye " +
      "contact and social skills.”",
    session1:
      "Six weeks later, a psychologist’s comprehensive evaluation, arranged through the counselor’s referral, confirms autism spectrum disorder without " +
      "accompanying intellectual or language impairment, requiring support (level 1) for social communication and level 1 for restricted, " +
      "repetitive behaviors. Sanaa wants to request workplace accommodations, including " +
      "noise-canceling headphones, a desk away from the fluorescent lights, and written meeting agendas, and signs a release allowing the counselor to " +
      "send a letter to HR. She asks what the diagnosis “means about me” and says she prefers “autistic person.” Her goals are to recover from “burnout” " +
      "and to have fewer shutdowns.",
    session2:
      "Sanaa says the waiting room TV and the overhead lights leave her drained before sessions start, and that scheduling by phone is hard for her. HR " +
      "says her manager “isn’t sure” accommodations are needed, and she asks whether the company can refuse. The practice’s EHR now lists ICD-11 codes, " +
      "and the biller asks which code to submit to her insurer. Midway through the session a fire alarm test in the next suite blares for a minute; Sanaa " +
      "covers her ears, rocks, and stops speaking. Afterward she wants to rehearse asking her manager for written agendas. Earlier, the counselor had " +
      "suggested practicing small talk at lunch as homework; Sanaa says flatly, “That’s what everyone wants, me to act less autistic.”",
  },
  diagnosticRationale:
    "Sanaa shows persistent differences in social communication and interaction (difficulty with conversational turn-taking, reading others’ intentions, " +
    "and literal interpretation) and restricted, repetitive patterns (fixed routines, an intense lifelong interest in transit timetables, and sensory " +
    "sensitivities), present since early childhood and causing significant impairment now that workplace demands exceed her capacity to mask. Her social " +
    "difficulty stems from not reading social cues rather than fear of negative evaluation, which separates it from social anxiety disorder, and the " +
    "restricted and repetitive features rule out social (pragmatic) communication disorder. A comprehensive evaluation confirmed the diagnosis.",
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Autism spectrum disorder: social communication deficits (A), restricted/repetitive behaviors including sensory reactivity (B), early developmental onset that may be masked (C), impairment (D); level of support; differential from social anxiety and SPCD' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Collateral developmental history; counselor competence for administering standardized instruments; referral for specialized evaluation' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'Competence, avoiding deficit-based bias, respecting client language preferences, accommodating clients with disabilities, consent for release' },
    { id: 'R4', source: 'State law', detail: 'Americans with Disabilities Act and state disability law: reasonable accommodation, interactive process, employer documentation requests' },
    { id: 'R5', source: 'ICD-10-CM', detail: 'F84.0 Autistic disorder; ICD-10-CM remains the HIPAA-required code set for U.S. claims' },
    { id: 'R6', source: 'ICD-11', detail: '6A02 Autism spectrum disorder, with qualifiers for intellectual development and functional language' },
    { id: 'R7', source: 'Corey (Theory & Practice)', detail: 'Client-centered and strengths-based approaches, role-play and skill rehearsal, repairing ruptures' },
    { id: 'R8', source: 'HIPAA', detail: 'Authorization and minimum necessary disclosure to employers' },
  ],
  questions: [
    // ---------------- intake ----------------
    Q('q1', 'assess', 'intake', 'Which additional information is most important for evaluating Sanaa’s question about autism?', ['R1', 'R2'], [
      O('a', 'A developmental history from her mother, with Sanaa’s consent, about early social, play, and sensory patterns.', 3,
        { r: 'Collateral early history', approach: 'Obtain collateral information', why: 'ASD requires symptoms from the early developmental period; a parent’s account helps establish this in an adult who has masked', keys: ['Hala can describe early childhood', 'willing to sign a release'], mistake: 'Relying only on adult self-report for a developmental diagnosis' }),
      O('b', 'A detailed history of her current manager’s feedback, since workplace conflict is the main cause of her stress now.', 0,
        { r: 'Context, not diagnostic data', approach: 'Workplace framing', why: 'Work context matters for planning, but it does not establish the early-onset pattern the diagnosis needs', keys: ['manager’s comments'], mistake: 'Focusing on the trigger rather than the developmental history' }),
      O('c', 'Her school grades and test scores, since strong academic performance would mean autism is unlikely to be present.', -2,
        { r: 'Rests on a false premise', approach: 'Achievement framing', why: 'Academic success does not rule out autism; using it to exclude the diagnosis is a common, harmful error', keys: ['data analyst'], mistake: 'Believing high achievement rules out autism' }),
      O('d', 'A screen for psychotic symptoms, since her literal thinking and intense interests may point to a thought disorder.', -1,
        { r: 'Misreads autistic traits', approach: 'Psychosis framing', why: 'Literal interpretation and focused interests are autistic features, not signs of psychosis; nothing suggests a thought disorder', keys: ['no unusual perceptions'], mistake: 'Pathologizing autistic traits as psychotic symptoms' }),
    ]),
    Q('q2', 'profdev', 'intake', 'The counselor is not trained to administer a standardized autism observation measure. What should the counselor do?', ['R2', 'R3'], [
      O('a', 'Administer the measure anyway using the manual, since following the written instructions closely should be enough.', -2,
        { r: 'Practices beyond competence', approach: 'Self-teach framing', why: 'Standardized observation measures require specific training; untrained use risks invalid results and a wrong diagnosis', keys: ['not trained'], mistake: 'Equating access to a manual with competence' }),
      O('b', 'Tell Sanaa that adult autism cannot be reliably diagnosed and focus treatment on her workplace stress instead.', -1,
        { r: 'Inaccurate and dismissive', approach: 'Dismiss framing', why: 'Adult autism can be diagnosed; dismissing her question denies her a valid evaluation', keys: ['seeking late diagnosis'], mistake: 'Believing autism cannot be diagnosed in adults' }),
      O('c', 'Refer her to a qualified evaluator for a full assessment, using only screens within the counselor’s training.', 3,
        { r: 'Refer for what is beyond competence', approach: 'Determine assessment competency', why: 'Counselors use instruments within their training and refer for specialized evaluation they cannot competently provide', keys: ['not trained in observation measure', 'diagnostic question'], mistake: 'Either overreaching competence or abandoning the diagnostic question' }),
      O('d', 'Make the diagnosis from the interview alone, since a thorough clinical history usually gives enough evidence for it.', 0,
        { r: 'Possible but less thorough', approach: 'Interview-only framing', why: 'Clinical diagnosis from history can be valid, but a complex adult presentation benefits from comprehensive evaluation', keys: ['masking history'], mistake: 'Skipping a comprehensive evaluation for a complex presentation' }),
    ]),
    Q('q3', 'assess', 'intake', 'Which finding best distinguishes Sanaa’s social difficulties from social anxiety disorder?', ['R1'], [
      O('a', 'She leaves meetings to sit alone in a bathroom stall, which shows avoidance of social situations that she fears.', -1,
        { r: 'Misreads sensory retreat', approach: 'Avoidance framing', why: 'Her retreat is to reset from sensory overload, not to escape fear of evaluation; avoidance alone does not discriminate', keys: ['“to reset”'], mistake: 'Treating any withdrawal as anxiety-based avoidance' }),
      O('b', 'She reports exhaustion from acting normal, which points to anxiety driving nearly all of her daily social effort at work.', 0,
        { r: 'Masking, not fear', approach: 'Exhaustion framing', why: 'Exhaustion from masking is common in autistic adults; it reflects effortful camouflaging rather than fear of judgment', keys: ['“exhausted from acting normal”'], mistake: 'Interpreting masking fatigue as anxiety' }),
      O('c', 'She cannot read what others want, not fear judgment, and has lifelong routines, focused interests, and sensory issues.', 3,
        { r: 'Cue-reading differences plus RRBs', approach: 'Differential diagnosis', why: 'Social anxiety is driven by fear of negative evaluation; her differences in reading cues plus restricted and repetitive features fit ASD', keys: ['“I don’t fear people judging me”', 'transit timetables since childhood'], mistake: 'Diagnosing social anxiety from social difficulty alone' }),
      O('d', 'Her manager’s comment on her eye contact, which is enough by itself to confirm autism rather than an anxiety disorder.', -2,
        { r: 'Single trait, second-hand', approach: 'Eye-contact framing', why: 'Eye contact alone does not confirm autism, and a manager’s comment is not a diagnostic observation', keys: ['manager’s note'], mistake: 'Diagnosing from one observed trait' }),
    ]),
    Q('q4', 'profdev', 'intake', 'The counselor’s draft note reads “poor eye contact, odd prosody; goal: improve eye contact and social skills.” What should the counselor do?', ['R3', 'R7'], [
      O('a', 'Keep the note as written, since eye contact and social skills are standard targets in most autism treatment plans.', -1,
        { r: 'Deficit lens unexamined', approach: 'Standard-target framing', why: 'Eye-contact goals set without the client reflect a deficit model and ignore her stated goals and the cost of masking', keys: ['“exhausted from acting normal”'], mistake: 'Assuming conformity goals are appropriate by default' }),
      O('b', 'Reflect on the deficit framing, revise it to neutral description, and seek training in neurodiversity-affirming care.', 3,
        { r: 'Self-reflection and training', approach: 'Practice self-reflection', why: 'Recognizing deficit-based bias and building affirming competence aligns care with the client’s goals and reduces harm', keys: ['draft note language', 'goal set without the client'], mistake: 'Leaving unexamined bias in documentation and goals' }),
      O('c', 'Remove all references to eye contact and prosody from the note, since recording autistic traits could stigmatize her.', 0,
        { r: 'Overcorrects documentation', approach: 'Omit framing', why: 'Neutral observations belong in the record; the problem is the deficit framing and the counselor-chosen goal', keys: ['mental status observations'], mistake: 'Confusing neutral description with stigma' }),
      O('d', 'Add the goal to her plan and tell her it will help her keep her job, since her manager raised the same concerns.', -2,
        { r: 'Imposes a masking goal', approach: 'Employer-aligned framing', why: 'Imposing a goal that increases masking, framed by job pressure, overrides her autonomy and may deepen burnout', keys: ['burnout', 'manager’s comments'], mistake: 'Adopting an employer’s preferences as treatment goals' }),
    ]),
    // ---------------- session1 ----------------
    Q('q5', 'indirect', 'session1', 'Sanaa signs a release for a letter to HR supporting her accommodation request. What should the letter contain?', ['R8', 'R4'], [
      O('a', 'Her full evaluation report, so HR can see every finding and fully understand why the accommodations are needed.', -2,
        { r: 'Over-discloses to employer', approach: 'Full-report framing', why: 'Employers need limited documentation; sending the full report exposes far more than the request requires', keys: ['release for a letter'], mistake: 'Sending clinical records to an employer' }),
      O('b', 'Her functional limitations and the accommodations requested, with the diagnosis named only as far as she agrees.', 3,
        { r: 'Minimum necessary, client-directed', approach: 'Collaborate with non-clinical stakeholders', why: 'Accommodation letters focus on functional limits and requested supports, sharing only what the client authorizes', keys: ['headphones, desk, written agendas', 'signed release'], mistake: 'Disclosing more than is needed for the purpose' }),
      O('c', 'A statement that Sanaa needs changes for health reasons, with no mention of her limitations or any specific requests.', -1,
        { r: 'Too vague to help', approach: 'Minimal framing', why: 'A letter without limitations or requests gives HR nothing to act on and can stall the process', keys: ['specific accommodations'], mistake: 'Confusing privacy with saying nothing useful' }),
      O('d', 'A recommendation that her manager attend a session, so the counselor can explain her needs to the manager directly.', 0,
        { r: 'Oversteps the release', approach: 'Bring-them-in framing', why: 'Inviting the manager exceeds the release and shifts her advocacy to the counselor', keys: ['release limited to HR letter'], mistake: 'Expanding collaboration beyond the client’s consent' }),
    ]),
    Q('q6', 'planning', 'session1', 'Which treatment plan best fits Sanaa’s goals and diagnosis?', ['R7', 'R3'], [
      O('a', 'Social skills training to reduce stimming and build eye contact, so she can fit in more easily at the office.', -2,
        { r: 'Conformity-focused plan', approach: 'Normalization framing', why: 'Training her to suppress autistic traits increases masking and burnout and ignores her stated goals', keys: ['burnout', '“acting normal”'], mistake: 'Targeting autistic traits instead of the client’s goals' }),
      O('b', 'CBT for social anxiety with graded exposure to office meetings, to reduce her avoidance of these work settings.', -1,
        { r: 'Wrong framework', approach: 'Anxiety-protocol framing', why: 'Her retreats are sensory resets, not fear-driven avoidance; exposure to overload could raise shutdowns', keys: ['sensory overload'], mistake: 'Applying an anxiety protocol to sensory needs' }),
      O('c', 'Burnout recovery, a sensory regulation plan, self-advocacy skills, and identity support, built around her goals.', 3,
        { r: 'Affirming, goal-based plan', approach: 'Integrate client goals and context', why: 'A neurodiversity-affirming plan targets her goals of burnout recovery and fewer shutdowns, with supports for self-advocacy', keys: ['fewer shutdowns', 'recover from burnout'], mistake: 'Writing a plan around others’ expectations' }),
      O('d', 'General stress management with relaxation exercises, adding autism-specific work only if her stress stays high.', 0,
        { r: 'Generic, misses specifics', approach: 'Generic framing', why: 'Stress skills can help, but they miss the sensory and self-advocacy needs that drive her shutdowns', keys: ['sensory triggers'], mistake: 'Using generic stress work for specific needs' }),
    ]),
    Q('q7', 'planning', 'session1', 'Sanaa asks what the diagnosis “means about me” and says she prefers “autistic person.” What should the counselor do?', ['R1', 'R3'], [
      O('a', 'Explain that person-first language is the professional standard and that the counselor will say “person with autism.”', -1,
        { r: 'Overrides her preference', approach: 'Professional-standard framing', why: 'Many autistic adults prefer identity-first language; the client’s preference guides usage', keys: ['prefers “autistic person”'], mistake: 'Imposing terminology against the client’s stated preference' }),
      O('b', 'Explain that autism means she will need lifelong support in most areas and should adjust her career expectations.', -2,
        { r: 'Inaccurate and harmful', approach: 'Deficit-prognosis framing', why: 'Level 1 support does not imply broad lifelong dependence; this is inaccurate and lowers her expectations', keys: ['data analyst', 'level 1'], mistake: 'Overgeneralizing support needs from a diagnosis' }),
      O('c', 'Tell her the diagnosis is only a label and that she should not let it change how she thinks about herself in any way.', 0,
        { r: 'Well-meant but dismissive', approach: 'Minimize-label framing', why: 'Reassurance is kind, but a late diagnosis often reshapes self-understanding meaningfully; that deserves exploration', keys: ['late diagnosis'], mistake: 'Minimizing what the diagnosis means to the client' }),
      O('d', 'Review the findings in plain terms, including strengths, support needs, and what level 1 means, using her language.', 3,
        { r: 'Collaborative diagnosis review', approach: 'Review diagnosis with client', why: 'Reviewing findings clearly and respectfully, with strengths and her preferred language, supports understanding and identity', keys: ['“means about me”', 'level 1 support'], mistake: 'Delivering the diagnosis without context or respect for her language' }),
    ]),
    // ---------------- session2 ----------------
    Q('q8', 'legal', 'session2', 'Sanaa says the waiting room TV and lights drain her and phone scheduling is hard. What should the counselor do?', ['R3', 'R4'], [
      O('a', 'Explain that the office setup is the same for all clients and suggest she wear sunglasses and earplugs to cope.', -1,
        { r: 'Shifts burden to the client', approach: 'Cope-with-it framing', why: 'Practices provide reasonable accommodations; placing all adjustment on her ignores that duty', keys: ['drained before sessions'], mistake: 'Treating uniform settings as fair to all clients' }),
      O('b', 'Ask her what would help, then adjust the lighting and waiting area and offer scheduling by text or email.', 3,
        { r: 'Provide accommodations', approach: 'Accommodate clients with disabilities', why: 'Asking about sensory and communication needs and adjusting the setting and scheduling provides adequate accommodation', keys: ['waiting room TV', 'phone scheduling is hard'], mistake: 'Not adapting the practice for a client with disabilities' }),
      O('c', 'Offer to move her to telehealth only, so the office environment and the phone are no longer a problem for her.', 0,
        { r: 'Reasonable option, but assumed', approach: 'Switch-modality framing', why: 'Telehealth may suit her, but deciding for her skips asking what she needs and adapting the office', keys: ['in-person care'], mistake: 'Solving for the client instead of with her' }),
      O('d', 'Tell her the practice cannot change its lights or phone system, so she may want to find another provider instead.', -2,
        { r: 'Denies accommodation', approach: 'Refuse framing', why: 'Refusing reasonable changes and steering her away is discriminatory and abandons care', keys: ['disability-related needs'], mistake: 'Refusing accommodations to a client with a disability' }),
    ]),
    Q('q9', 'legal', 'session2', 'Sanaa asks whether her company can refuse her accommodation request. What should the counselor do?', ['R4'], [
      O('a', 'Tell her the company must grant all her requests, since she now has a formal diagnosis from a qualified evaluator.', -2,
        { r: 'Inaccurate legal advice', approach: 'Guarantee framing', why: 'The ADA requires reasonable accommodation through an interactive process, not every request; overstating it misleads her', keys: ['manager “isn’t sure”'], mistake: 'Giving definitive legal advice outside scope' }),
      O('b', 'Tell her that employment law is outside counseling and that she should take up the question with HR on her own.', 0,
        { r: 'In scope but unhelpful', approach: 'Deflect framing', why: 'Legal advice is outside scope, but general information and referral are appropriate and helpful', keys: ['asks for help'], mistake: 'Declining to share basic information and resources' }),
      O('c', 'Share general information about reasonable accommodation under the ADA and refer her to JAN or an employment attorney.', 3,
        { r: 'General information and referral', approach: 'Adhere to relevant law', why: 'Counselors can share general information about disability rights and refer legal questions to qualified resources', keys: ['ADA', '“can they refuse”'], mistake: 'Either giving legal advice or giving no guidance' }),
      O('d', 'Call her manager to explain the ADA and urge approval, since the counselor can advocate more effectively than she can.', -1,
        { r: 'Oversteps role and release', approach: 'Counselor-advocate framing', why: 'Contacting her manager exceeds her release and takes over advocacy she can be supported to do', keys: ['release limited to HR letter'], mistake: 'Acting on the client’s behalf without consent' }),
    ]),
    Q('q10', 'legal', 'session2', 'The EHR now lists ICD-11 codes, and the biller asks which code to submit to Sanaa’s insurer. What is correct?', ['R5', 'R6'], [
      O('a', 'Submit ICD-11 code 6A02, since it is the newest version and insurers accept the most current diagnostic system.', -1,
        { r: 'Wrong code set for U.S. claims', approach: 'Newest-code framing', why: 'U.S. claims still require ICD-10-CM; an ICD-11 code is likely to be rejected', keys: ['insurer claim'], mistake: 'Assuming the newest code set is the billing standard' }),
      O('b', 'Submit ICD-10-CM F84.0, matching her documented diagnosis, and note ICD-11 6A02 in the record if it is useful.', 3,
        { r: 'Correct billing code set', approach: 'Billing compliance', why: 'ICD-10-CM is the required U.S. claims code set; ICD-11 can be used for clinical communication but not billing', keys: ['F84.0', 'EHR lists ICD-11'], mistake: 'Confusing clinical coding options with billing requirements' }),
      O('c', 'Submit both codes on the claim, so the insurer can choose whichever code set its system is able to process.', 0,
        { r: 'Creates claim errors', approach: 'Both-codes framing', why: 'Mixing code sets on a claim can cause rejection; claims use the required set only', keys: ['single code set on claims'], mistake: 'Hedging on code sets instead of knowing the requirement' }),
      O('d', 'Submit an anxiety code instead, since autism may not be covered and an anxiety code is more likely to be paid.', -2,
        { r: 'Billing fraud', approach: 'Coverage-driven framing', why: 'Billing a diagnosis that was not made to secure payment is fraudulent', keys: ['confirmed ASD'], mistake: 'Choosing codes for reimbursement rather than accuracy' }),
    ]),
    Q('q11', 'interventions', 'session2', 'During a fire alarm test, Sanaa covers her ears, rocks, and stops speaking. What should the counselor do?', ['R7', 'R1'], [
      O('a', 'Ask her to look at the counselor and describe what she is feeling, to keep her grounded and connected in the moment.', -1,
        { r: 'Adds demands during shutdown', approach: 'Engage framing', why: 'Requests for eye contact and speech add demands when she cannot process them', keys: ['stopped speaking'], mistake: 'Increasing demands during sensory overload' }),
      O('b', 'Lower stimulation, speak little and calmly, offer a quiet option without requiring speech, and give her time to recover.', 3,
        { r: 'Reduce input, allow recovery', approach: 'Crisis de-escalation adapted to need', why: 'During a shutdown, reducing sensory input and demands and allowing time supports recovery', keys: ['covers ears, rocks', 'stops speaking'], mistake: 'Treating a shutdown like an anxiety attack needing talk' }),
      O('c', 'Gently hold her hands to stop the rocking, since physical contact can calm a person who is overwhelmed by noise.', -2,
        { r: 'Unwanted touch, stops regulation', approach: 'Physical-calming framing', why: 'Touch without consent during overload can escalate distress, and rocking is self-regulation, not a problem', keys: ['rocking'], mistake: 'Stopping self-regulation with physical contact' }),
      O('d', 'Lead her through a breathing exercise out loud right away, so that she has a coping skill to use during the alarm.', 0,
        { r: 'Skill at the wrong moment', approach: 'Teach-now framing', why: 'Breathing skills can help later, but verbal coaching during a shutdown adds input', keys: ['alarm still sounding'], mistake: 'Teaching during overload instead of reducing input' }),
    ]),
    Q('q12', 'interventions', 'session2', 'Sanaa wants to rehearse asking her manager for written meeting agendas. Which intervention fits best?', ['R7'], [
      O('a', 'Role-play the request with her, using a short script she writes, and refine it based on how it feels to her.', 3,
        { r: 'Rehearsal and self-advocacy', approach: 'Support client advocacy', why: 'Role-play with a client-authored script builds self-advocacy skills and confidence for the real conversation', keys: ['wants to rehearse', 'written agendas'], mistake: 'Doing the advocacy for the client instead of building her skills' }),
      O('b', 'Write the email to her manager for her, since putting it in writing will be easier than asking face to face.', 0,
        { r: 'Helpful but takes over', approach: 'Do-it-for-her framing', why: 'Writing can suit her, but drafting it for her skips building the skill she asked to practice', keys: ['asked to rehearse'], mistake: 'Substituting the counselor’s work for client skill-building' }),
      O('c', 'Advise her to wait until HR finishes its process, since asking her manager directly could seem confrontational.', -1,
        { r: 'Discourages self-advocacy', approach: 'Wait framing', why: 'Asking for a simple support is reasonable; discouraging it undermines her autonomy', keys: ['her own goal'], mistake: 'Treating self-advocacy as confrontation' }),
      O('d', 'Coach her to present the request as a personal preference, so her manager does not learn she is autistic.', -2,
        { r: 'Steers her disclosure', approach: 'Conceal framing', why: 'Disclosure is her choice; steering her to hide it can weaken her accommodation rights', keys: ['accommodation process'], mistake: 'Making disclosure decisions for the client' }),
    ]),
    Q('q13', 'interventions', 'session2', 'Sanaa says, “That’s what everyone wants, me to act less autistic,” about the small-talk homework. What is the best response?', ['R7', 'R3'], [
      O('a', 'Explain that small talk is a useful skill at work and encourage her to try the homework once before judging it.', -1,
        { r: 'Defends the task', approach: 'Persuade framing', why: 'Defending the homework misses the rupture and repeats the pressure she described', keys: ['flat tone'], mistake: 'Defending the intervention instead of repairing the rupture' }),
      O('b', 'Drop the homework quietly and move on to the next topic, so that the moment does not turn into a conflict.', 0,
        { r: 'Avoids repair', approach: 'Avoid framing', why: 'Dropping the task helps, but not naming it leaves the rupture and her trust unaddressed', keys: ['rupture moment'], mistake: 'Avoiding discussion of the rupture' }),
      O('c', 'Tell her that her reaction shows how much autism is affecting her work, which is why the homework is needed.', -2,
        { r: 'Pathologizes her feedback', approach: 'Interpret-resistance framing', why: 'Framing valid feedback as symptoms is invalidating and likely to end treatment', keys: ['valid criticism'], mistake: 'Treating client feedback as pathology' }),
      O('d', 'Acknowledge she is right that it pushed masking, thank her, and invite her to reshape the homework with you.', 3,
        { r: 'Repair the rupture', approach: 'Monitor and resolve ruptures', why: 'Acknowledging the misstep and inviting collaboration repairs the alliance and realigns the work with her goals', keys: ['“act less autistic”', 'counselor-assigned homework'], mistake: 'Missing rupture markers in a flat statement' }),
    ]),
  ],
};

module.exports = { CASES: [D945, D946, D947, D948, D949] };
