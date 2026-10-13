// deep-cases-2027-batch-11.js — 2027 NCMHCE deep cases (batch 11)
// ncmhce-D970 · ncmhce-D971 · ncmhce-D972 · ncmhce-D973 · ncmhce-D974
// 2027 NCMHCE specification; hand-authored; validate with check2027.js
//
// D970 · plan 0 · Dissociative · medium · adult — Depersonalization/Derealization Disorder (F48.1)
// D971 · plan 1 · Dissociative · hard · adult — Dissociative Amnesia (F44.0)
// D972 · plan 2 · Sleep · medium · adult — Nightmare Disorder (F51.5)
// D973 · plan 3 · Sleep · medium · adult — Hypersomnolence Disorder (F51.11)
// D974 · plan 4 · Sexual-Gender · medium · couple_family — Female Sexual Interest/Arousal Disorder (F52.22)
//
// Standalone deliverable for SME review. Do NOT auto-import.

const O = (id, text, weight, r, approach, why, keys, mistake) => ({
  id,
  text,
  isCorrect: weight === 3,
  weight,
  rationale: r,
  explanation: { approach, rationale: why, keyIndicators: keys, commonMistake: mistake },
});
const Q = (n, domain, section, question, evidenceRef, options) => ({ id: 'q' + n, domain, section, question, evidenceRef, options });

// ============================================================================
// D970 — Depersonalization/Derealization Disorder (F48.1) — plan 0 — medium
// ============================================================================
const D970 = {
  id: 'ncmhce-D970',
  title: 'The world went flat after one gummy and never came back',
  category: 'Dissociative',
  difficulty: 'medium',
  plan: 0,
  population: 'adult',
  primaryDiagnosis: { name: 'Depersonalization/Derealization Disorder', code: 'F48.1' },
  diagnosis: { name: 'Depersonalization/Derealization Disorder', code: 'F48.1' },
  differentialOptions: [
    { id: 'do1', name: 'Panic Disorder', isCorrect: false },
    { id: 'do2', name: 'Depersonalization/Derealization Disorder', isCorrect: true },
    { id: 'do3', name: 'Cannabis-Induced Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Illness Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      "Anjali Raman, a 27-year-old Tamil American pharmacy technician in Columbus, Ohio, self-refers to an outpatient counseling practice. Seven months ago, " +
      "at a friend's bachelorette weekend, she ate a cannabis gummy of unknown strength, her first cannabis use in years, and within an hour had a panic " +
      "attack with a racing heart, nausea, and an overwhelming sense that nothing was real; an emergency department visit found no medical problem. The panic " +
      "attacks stopped after the first month, but since that night she has felt almost constantly as if she is watching herself from behind her own head, " +
      "her hands do not feel like hers, and the world looks 'flat, like a movie set.' She says, 'I know it's me and I know the world is real; it just doesn't " +
      "feel that way.' She has used no cannabis or other drugs since the episode, drinks one or two glasses of wine a month, and her primary care physician " +
      "(PCP) found normal bloodwork and thyroid studies. She spends an hour or more a day checking mirrors and searching online whether she is 'becoming " +
      "schizophrenic,' has stopped driving at night, and has missed four shifts. Near the end of the intake she says, almost in passing, 'If this is " +
      "permanent, I don't know what I'd do.' Her counselor, Daniel, an LPC two years past licensure, treats panic disorder often but has never treated " +
      "depersonalization and has had no training in it. Daniel also notices that, as a longtime supporter of cannabis legalization, he felt an urge to " +
      "reassure her that 'one gummy can't do this.'",
    session1:
      "At the second session Anjali completes the Cambridge Depersonalization Scale, which shows a high symptom burden. A C-SSRS screen finds passive wishes " +
      "to 'not wake up' on bad days but no intent, plan, preparatory behavior, or past attempts, and she completes a written safety plan with the counselor that includes limiting her access to stockpiled medication. " +
      "She ranks her problems: the unreal feeling, the hours of mirror checking and online searching, missed work, and avoiding night driving. She wants the " +
      "feeling 'gone by next month.' Six weeks ago her PCP started sertraline 50 mg; Anjali says it causes morning nausea, has not changed the unreal feeling, " +
      "and she has been skipping doses without telling the PCP. She signs a release allowing the counselor to communicate with the PCP and agrees to weekly " +
      "in-person sessions.",
    session2:
      "By the fifth session Anjali has cut her checking to about 30 minutes a day. In session she says the room is 'going flat' while her heart races and asks " +
      "for something she can do in the moment. Later she says, frustrated, 'You keep telling me to notice my breathing; you don't get how scary this is,' and " +
      "falls silent. She asks whether the unreal feeling means her brain is damaged. She also tells Daniel she will spend six weeks at a corporate training in " +
      "another state and wants to continue by video from her hotel; that state and Ohio are both Counseling Compact member states, and Daniel holds no " +
      "license or Compact privilege to practice there. The same week, the practice owner adopts an AI note-taking tool that records sessions and drafts progress " +
      "notes, and asks every counselor to begin using it with all clients this week.",
  },
  diagnosticRationale:
    "Anjali has persistent depersonalization (detachment from her body and self, observing herself from outside) and derealization (the world appears flat " +
    "and unreal) with intact reality testing, causing marked distress and missed work. Although the first episode occurred during cannabis intoxication, " +
    "symptoms have persisted for seven months of verified abstinence, so they are not attributable to the physiological effects of a substance; panic " +
    "attacks stopped after the first month and do not account for the continuous symptoms, and her health worry is secondary to the dissociative " +
    "experience. Medical workup is unremarkable. Depersonalization/derealization disorder (F48.1; ICD-11 6B66) is the best fit.",
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Depersonalization/derealization disorder Criteria A–E: persistent episodes, intact reality testing, distress or impairment, not attributable to a substance or another disorder; onset may follow substance use' },
    { id: 'R2', source: 'C-SSRS', detail: 'Direct screening of passive and active ideation, intent, plan, and behavior after a hopeless statement' },
    { id: 'R3', source: 'Stanley-Brown SPI', detail: 'Collaborative written safety plan in place of a no-suicide contract' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'C.2.a boundaries of competence; C.2.b new specialty areas of practice; A.4.b personal values; A.2 informed consent; Section H distance counseling and technology' },
    { id: 'R5', source: 'Counseling Compact', detail: 'Practice occurs where the client is located at the time of service; that state\'s license or, once issued, a Compact privilege to practice is required there' },
    { id: 'R6', source: 'HIPAA', detail: 'Business associate safeguards for vendors handling PHI; disclosures to treating providers' },
    { id: 'R7', source: 'Corey (Theory & Practice)', detail: 'Cognitive behavioral conceptualization: catastrophic appraisal, safety behaviors, and attention-shifting skills' },
    { id: 'R8', source: 'Wiger (Documentation)', detail: 'Documenting client-reported medication effects and adherence; SMART objectives' },
    { id: 'R9', source: 'NBCC 2027 Spec', detail: 'Work tasks: AI tools in practice, license portability, therapeutic ruptures, documenting self-reported medication effects' },
  ],
  questions: [
    // ---------------- intake (profdev, profdev, assess, assess, assess) ----------------
    Q(1, 'profdev', 'intake', 'Which action best addresses Daniel’s competence to treat Anjali’s presenting problem?', ['R4', 'R9'], [
      O('a', 'Refer Anjali to another counselor at intake because he has not treated depersonalization or trained in it.', 0,
        'Referral is acceptable but premature', 'Immediate referral', 'Referral protects the client but is not required when a counselor with adjacent skills can gain competence through consultation and training while treating', ['adjacent panic expertise', 'consultation is available'], 'Assuming any gap in experience requires immediate referral instead of supervised skill development'),
      O('b', 'Arrange ongoing consultation with a clinician skilled in dissociation while he completes focused DPDR training.', 3,
        'Build competence with consultation', 'Supervised development of a new specialty area', 'The ACA Code allows counselors to practice in new areas only after appropriate education and while taking steps, such as consultation, to ensure competent work', ['never treated depersonalization', 'no training in it'], 'Treating with no added support, or referring out when competence can be built responsibly'),
      O('c', 'Treat her with his usual panic disorder protocol, since her symptoms began with a panic attack seven months ago.', -1,
        'Wrong framework for current symptoms', 'Panic protocol by default', 'Her panic attacks stopped after the first month; her current problem is continuous depersonalization, which needs its own conceptualization', ['panic attacks stopped after first month', 'constant unreal feeling'], 'Treating the onset event instead of the disorder that persists now'),
      O('d', 'Begin treatment without consultation, reasoning that anxiety skills transfer and he can learn the rest as he goes.', -2,
        'Practicing outside competence', 'Unsupported expansion of scope', 'Starting a new specialty area with no training or consultation violates boundaries of competence and risks harm to the client', ['no training in DPDR'], 'Equating general anxiety skill with competence in a dissociative disorder'),
    ]),
    Q(2, 'profdev', 'intake', 'How should Daniel handle his urge to reassure Anjali that one gummy could not cause her symptoms?', ['R4'], [
      O('a', 'Tell her cannabis is harmless and her symptoms must come from another cause, so she can stop blaming herself.', -2,
        'Imposes counselor values as fact', 'Reassurance from personal belief', 'Presenting a personal belief as clinical fact misinforms her and dismisses her own account of the onset', ['onset during cannabis intoxication'], 'Letting a personal value override the client’s experience and the evidence'),
      O('b', 'Share his support for legalization so she understands his view and can decide whether to keep working with him.', -1,
        'Self-disclosure that serves the counselor', 'Values disclosure', 'Disclosing his political views shifts the focus to him and can pressure her, without clinical benefit', ['his urge came from his own views'], 'Mistaking transparency about personal values for good practice'),
      O('c', 'Avoid discussing cannabis with her at all so that his personal opinion cannot shape the course of treatment.', 0,
        'Avoidance loses relevant data', 'Topic avoidance', 'Avoiding the topic keeps his bias out but leaves out clinically relevant substance history and the meaning she gives the onset', ['onset tied to cannabis', 'rule-out depends on use history'], 'Managing bias by avoiding the topic instead of examining the bias'),
      O('d', 'Recognize the reaction as his own belief, keep it out of session, and explore it in supervision or consultation.', 3,
        'Self-reflection and bracketing', 'Bracket personal values', 'Counselors are aware of their own values and avoid imposing them; supervision helps him notice how the belief could bias assessment', ['urge to reassure', 'longtime legalization supporter'], 'Acting on the reaction or ignoring it rather than examining it'),
    ]),
    Q(3, 'assess', 'intake', 'Which finding most directly supports DPDR rather than a substance-induced condition?', ['R1'], [
      O('a', 'Her symptoms have continued for seven months while she has used no cannabis or other drugs since the episode.', 3,
        'Persistence beyond substance effects', 'Apply Criterion D', 'Symptoms that persist long after the substance has cleared, with abstinence, are not attributable to its physiological effects; DSM-5-TR notes DPDR onset may follow drug use', ['seven months', 'no cannabis since'], 'Treating the substance trigger as if it settles the diagnosis'),
      O('b', 'Her emergency department workup that night found no medical problem to explain her racing heart and nausea.', 0,
        'Relevant but not the discriminator', 'Medical rule-out', 'The normal ED workup helps exclude a medical cause but says nothing about whether the substance explains her continuing symptoms', ['ED found no medical problem'], 'Confusing the medical rule-out with the substance rule-out'),
      O('c', 'Her symptoms started with a panic attack, which shows that anxiety rather than cannabis is driving the problem.', -1,
        'Misreads the panic history', 'Panic attribution', 'The panic attacks stopped months ago; starting with panic does not establish that symptoms are independent of the substance', ['panic stopped after first month'], 'Using the onset event to explain a later, continuous condition'),
      O('d', 'Her cannabis exposure means the condition should be coded as substance-induced however long it has lasted.', -2,
        'Reverses the criterion', 'Exposure equals cause', 'Substance-induced disorders require symptoms tied to intoxication or withdrawal; persistence after months of abstinence points away from that', ['seven months abstinent'], 'Assuming any substance exposure makes the disorder substance-induced'),
    ]),
    Q(4, 'assess', 'intake', 'What best distinguishes Anjali’s experience from a psychotic process?', ['R1'], [
      O('a', 'Her symptoms began suddenly after one identifiable event rather than developing gradually over many months.', 0,
        'Onset pattern is not decisive', 'Onset framing', 'Acute onset after a trigger can occur in either condition; the defining discriminator is whether reality testing is intact', ['sudden onset'], 'Relying on onset pattern instead of reality testing'),
      O('b', 'Her normal bloodwork and thyroid studies rule out the medical causes that usually underlie psychotic symptoms.', -1,
        'Medical findings do not address psychosis', 'Lab-based reasoning', 'Normal labs do not distinguish dissociation from a primary psychotic disorder, which is usually not detectable on bloodwork', ['normal labs'], 'Assuming psychosis is a lab-detectable medical problem'),
      O('c', 'She says she feels unreal yet states clearly that she knows it is her and that the world is real.', 3,
        'Intact reality testing', 'Apply Criterion B', 'In DPDR, reality testing remains intact; she recognizes the experiences as subjective, unlike a delusional belief', ['I know it is me', 'I know the world is real'], 'Mistaking strange experiences for loss of reality testing'),
      O('d', 'Her fear of becoming schizophrenic shows good insight, so further screening for psychosis is unnecessary.', -2,
        'Skips screening', 'Insight equals screening', 'Fear of a disorder is not evidence against it; psychotic symptoms still need to be asked about directly', ['searching whether she is schizophrenic'], 'Letting a reassuring impression replace direct screening'),
    ]),
    Q(5, 'assess', 'intake', 'How should Daniel respond when Anjali says she does not know what she would do if this is permanent?', ['R2', 'R3'], [
      O('a', 'Ask directly about suicidal thoughts and complete a structured risk screen before the intake ends today.', 3,
        'Direct structured screening now', 'Clarify an ambiguous hopeless statement', 'An ambiguous statement of hopelessness warrants direct questions about ideation, intent, and plan using a structured screen before she leaves', ['If this is permanent', 'missed shifts and distress'], 'Treating the remark as a figure of speech without asking'),
      O('b', 'Note the comment and plan to revisit it next session once rapport and trust are better established with her.', 0,
        'Delays a needed screen', 'Wait for rapport', 'Rapport matters, but an unclear risk statement should be clarified the same day; delay could miss active ideation', ['said near the end of intake'], 'Postponing risk assessment for relationship-building'),
      O('c', 'Reassure her that depersonalization usually improves with treatment so that her hopelessness begins to ease.', -1,
        'Reassurance without assessment', 'Premature reassurance', 'Hope is useful, but reassurance does not tell the counselor whether she is at risk', ['hopeless statement'], 'Substituting reassurance for assessment'),
      O('d', 'Ask her to promise she will not harm herself before she leaves today, and then bring the intake to a close.', -2,
        'No-suicide contract', 'Verbal no-harm contract', 'No-suicide contracts are not supported by evidence and can replace real assessment and safety planning', ['ambiguous risk statement'], 'Believing a promise is a safety intervention'),
    ]),
    // ---------------- session1 (planning, planning, indirect) ----------------
    Q(6, 'planning', 'session1', 'Which treatment focus should the counselor prioritize in Anjali’s initial plan?', ['R7', 'R1'], [
      O('a', 'Relaxation training and sleep hygiene to lower general arousal before addressing her beliefs about symptoms.', 0,
        'Helpful but indirect', 'Arousal reduction first', 'Lowering arousal can help, but her checking and catastrophic beliefs are what keep the symptoms in focus and should be targeted directly', ['hour a day checking'], 'Sequencing general skills ahead of the maintaining factors'),
      O('b', 'CBT that targets her catastrophic reading of the symptoms and cuts back the mirror checking and searching.', 3,
        'Target the maintaining cycle', 'Cognitive behavioral treatment of DPDR', 'Catastrophic appraisal and checking keep attention fixed on the symptoms; CBT that targets both is the best-supported counseling approach', ['fears schizophrenia', 'mirror checking and online searching'], 'Ignoring the beliefs and safety behaviors that maintain the symptoms'),
      O('c', 'Trauma-focused processing of the panic episode as a traumatic event, using a detailed trauma narrative.', -1,
        'Wrong framework', 'Trauma protocol', 'A frightening panic episode is not a Criterion A trauma, and narrative processing does not target the maintaining factors', ['panic during intoxication'], 'Treating a feared experience as trauma requiring exposure work'),
      O('d', 'Tell her to stop the sertraline and rely on counseling alone, since the medication has not helped yet.', -2,
        'Medication advice outside scope', 'Directing medication changes', 'Advising a client to stop a prescribed medication is outside counselor scope and could cause harm', ['PCP prescribed sertraline'], 'Giving medication direction instead of coordinating with the prescriber'),
    ]),
    Q(7, 'planning', 'session1', 'Which goal best meets SMART criteria for Anjali’s treatment plan?', ['R8', 'R7'], [
      O('a', 'Anjali will understand her depersonalization better and feel less anxious about it as treatment continues.', -1,
        'Vague and unmeasurable', 'General goal', 'The goal names no behavior, measure, or time frame', ['no measure', 'no timeline'], 'Writing an aim instead of a measurable objective'),
      O('b', 'Anjali will avoid night driving and other triggers until her symptoms fully resolve in the coming months.', -2,
        'Reinforces avoidance', 'Avoidance as a goal', 'Building avoidance into the plan strengthens the fear cycle and narrows her functioning', ['stopped driving at night'], 'Treating avoidance as protection rather than a maintaining factor'),
      O('c', 'Within eight weeks, report that the unreal feeling is gone and that she feels like herself most days.', 0,
        'Time-bound but not attainable', 'Symptom elimination goal', 'The goal reflects her wish but is not realistic in eight weeks and targets the feeling rather than what she can change', ['wants it gone by next month'], 'Adopting the client’s urgent wish as the objective'),
      O('d', 'Within eight weeks, cut mirror checking and symptom searching from over an hour to under 15 minutes a day.', 3,
        'Specific, measurable, timed', 'SMART objective', 'The goal names a behavior, a baseline, a target, and a time frame tied to a maintaining factor', ['hour or more a day', 'checking and searching'], 'Writing goals around feelings rather than measurable behavior'),
    ]),
    Q(8, 'indirect', 'session1', 'How should the counselor handle what Anjali reports about her sertraline?', ['R8', 'R6'], [
      O('a', 'Document her report and encourage her to raise the nausea at her next scheduled visit with the PCP.', 0,
        'Leaves the prescriber uninformed', 'Client-only reporting', 'Encouraging her to tell the PCP is reasonable, but with a release in place the skipped doses warrant direct coordination', ['release signed', 'skipping doses'], 'Relying on the client alone when coordination is authorized'),
      O('b', 'Advise her to take the full dose every day, since antidepressants need more time to show their benefit.', -1,
        'Medication advice', 'Adherence coaching', 'Directing dosing is the prescriber’s role; the counselor should report the side effects and adherence instead', ['morning nausea'], 'Stepping into the prescriber’s role'),
      O('c', 'Document her reported side effects and skipped doses, and share them with the PCP under her signed release.', 3,
        'Document and coordinate', 'Record self-reported medication effects', 'Recording what she reports and informing the prescriber with consent keeps her care coordinated and safe', ['nausea', 'skipped doses', 'release to PCP'], 'Keeping medication concerns inside the counseling record'),
      O('d', 'Suggest she take the sertraline at night to reduce the nausea, and record the change in her chart.', -2,
        'Changing a medication regimen', 'Counselor-directed dose change', 'Altering when a medication is taken is a prescribing decision outside counselor scope', ['PCP is prescriber'], 'Treating a timing change as minor advice rather than a prescribing decision'),
    ]),
    // ---------------- session2 (interventions x3, legal x2) ----------------
    Q(9, 'interventions', 'session2', 'The room is going flat for Anjali in session and she asks what she can do in the moment. What is the best response?', ['R7'], [
      O('a', 'Guide her through slow breathing until her heart rate settles and the flat feeling starts to fade.', 0,
        'Useful but framed as removal', 'Breathing to remove the symptom', 'Breathing can lower arousal, but promising the feeling will fade sets up struggle with it', ['racing heart'], 'Framing coping skills as ways to make the symptom stop'),
      O('b', 'Teach a grounding skill, such as naming things she sees, to shift attention without fighting the feeling.', 3,
        'Grounding as attention shifting', 'Present-focused grounding', 'Grounding directs attention outward and reduces self-monitoring; framing it as acceptance rather than control avoids feeding the fear cycle', ['asks for something in the moment', 'checking pattern'], 'Using grounding as a way to force the feeling away'),
      O('c', 'Encourage her to check her reflection to confirm she looks normal, which may reassure her it is harmless.', -1,
        'Reinforces checking', 'Reassurance seeking', 'Mirror checking is one of her maintaining behaviors; prompting it strengthens the cycle', ['checks mirrors daily'], 'Mistaking a safety behavior for a coping skill'),
      O('d', 'Recommend she ask her PCP for a benzodiazepine to take whenever the flat feeling begins during her day.', -2,
        'Specific medication recommendation', 'Medication as coping', 'Recommending a specific controlled medication is outside scope and teaches escape rather than skill', ['already on sertraline'], 'Suggesting medication to a client instead of coordinating with the prescriber'),
    ]),
    Q(10, 'interventions', 'session2', 'How should the counselor respond to Anjali’s frustration about the breathing skills?', ['R9', 'R7'], [
      O('a', 'Explain again why attention-shifting skills help depersonalization so that she can see the rationale.', 0,
        'Explains rather than repairs', 'Re-explaining the rationale', 'The rationale may help later, but leading with it can feel like another instance of not being understood', ['you don’t get it'], 'Answering a rupture with more teaching'),
      O('b', 'Move to a new topic for the rest of the session so her frustration has time to settle on its own.', -1,
        'Avoids the rupture', 'Topic change', 'Changing the subject leaves the rupture unaddressed and can deepen withdrawal', ['falls silent'], 'Treating a rupture as something to wait out'),
      O('c', 'Acknowledge missing how frightening this is, ask what has not helped, and adjust the approach together.', 3,
        'Repair the rupture', 'Rupture repair and client feedback', 'Openly acknowledging the miss and asking for feedback repairs the alliance and improves fit', ['frustrated', 'falls silent'], 'Defending the intervention instead of exploring the rupture'),
      O('d', 'Suggest that if counseling does not feel helpful, she may want to look for a different counselor.', -2,
        'Premature exit', 'Referral during rupture', 'Suggesting she leave in response to frustration risks abandonment and ignores a repairable rupture', ['progress already made'], 'Treating client frustration as a reason to end services'),
    ]),
    Q(11, 'interventions', 'session2', 'Anjali asks whether the unreal feeling means her brain is damaged. Which psychoeducation is most accurate?', ['R1', 'R7'], [
      O('a', 'Explain that the feeling suggests an early psychotic process, so she should watch closely for voices or paranoia.', -2,
        'Inaccurate and alarming', 'Psychosis framing', 'Her reality testing is intact; suggesting psychosis is inaccurate and increases fear and checking', ['knows it is her'], 'Confusing depersonalization with psychosis'),
      O('b', 'Explain that depersonalization is a common protective response to intense anxiety that lasts when feared.', 3,
        'Accurate, normalizing model', 'Psychoeducation on DPDR', 'Describing depersonalization as a protective response maintained by fear and monitoring is accurate and supports the treatment rationale', ['began during panic', 'checking and searching'], 'Offering false certainty or frightening explanations'),
      O('c', 'Explain that cannabis can cause lasting brain changes, so the feeling may take many years to resolve.', -1,
        'Unsupported and discouraging', 'Damage framing', 'There is no evidence of brain damage here, and this message deepens hopelessness', ['normal workup'], 'Presenting speculation as fact'),
      O('d', 'Explain that her brain is not damaged and that the feeling should pass as her anxiety goes down.', 0,
        'Partly accurate, overpromises', 'Simple reassurance', 'The reassurance is reasonable, but promising resolution and omitting the role of monitoring misses the treatment rationale', ['seven months duration'], 'Offering reassurance without a usable model'),
    ]),
    Q(12, 'legal', 'session2', 'What must Daniel do before continuing video sessions while Anjali is in the other state?', ['R5', 'R4'], [
      O('a', 'Pause sessions for six weeks and resume in person when she returns, giving her crisis resources meanwhile.', 0,
        'Lawful but disrupts care', 'Pause services', 'Pausing is lawful but interrupts treatment when a compliant option may be available', ['both states are Compact members'], 'Choosing disruption over a lawful way to continue'),
      O('b', 'Obtain that state\'s license or a Compact privilege first, then update her emergency plan for the hotel.', 3,
        'Practice where the client is located', 'License portability', 'Telehealth occurs where the client is located; he needs that state\'s license or, where available, a Compact privilege before continuing, and the emergency plan must fit her new location', ['no license or privilege there', 'six weeks in another state'], 'Assuming a home-state license covers clients wherever they travel'),
      O('c', 'Continue sessions as planned, since both states are Compact members and his Ohio license is enough.', -1,
        'Misreads the Compact', 'Membership equals authorization', 'Compact membership does not authorize practice by itself; he needs that state\'s license or a Compact privilege first', ['no license or privilege there'], 'Confusing state membership with individual authorization'),
      O('d', 'Continue sessions but record her location as Ohio so the visits are documented and billed as in-state.', -2,
        'Falsified records', 'Misstating location', 'Recording a false location falsifies the record and claims and conceals unauthorized practice', ['hotel in another state'], 'Treating documentation as a workaround for licensure'),
    ]),
    Q(13, 'legal', 'session2', 'How should Daniel proceed with the AI note-taking tool the practice owner wants used this week?', ['R6', 'R4', 'R9'], [
      O('a', 'Begin using the tool this week as directed, since the practice policy covers the decision for all clients.', -1,
        'Skips client consent', 'Policy as consent', 'A practice decision does not replace each client’s informed consent to recording and AI processing', ['records sessions'], 'Treating an employer directive as client consent'),
      O('b', 'Record sessions on his personal phone and paste transcripts into a free chatbot to draft progress notes.', -2,
        'Unsecured PHI disclosure', 'Consumer AI with PHI', 'Personal devices and free chatbots lack safeguards and agreements to protect PHI', ['session content is PHI'], 'Assuming any AI tool is acceptable for clinical notes'),
      O('c', 'Use the tool only after he reviews and corrects each AI-drafted note before signing it in the record.', 0,
        'Good practice but incomplete', 'Clinician review', 'Reviewing drafts is necessary, but it does not address her consent or the vendor’s safeguards', ['records sessions'], 'Focusing on note accuracy and overlooking consent'),
      O('d', 'Explain the tool to Anjali, obtain her informed consent, and confirm the vendor safeguards PHI before use.', 3,
        'Consent plus safeguards', 'Informed consent for AI tools', 'Clients must understand and agree to recording and AI processing, and the vendor must protect PHI under a business associate agreement', ['records sessions', 'drafts notes'], 'Adopting technology before consent and security are in place'),
    ]),
  ],
};

// ============================================================================
// D971 — Dissociative Amnesia (F44.0) — plan 1 — hard
// ============================================================================
const D971 = {
  id: 'ncmhce-D971',
  title: 'Two missing hours and a trial on the calendar',
  category: 'Dissociative',
  difficulty: 'hard',
  plan: 1,
  population: 'adult',
  primaryDiagnosis: { name: 'Dissociative Amnesia', code: 'F44.0' },
  diagnosis: { name: 'Dissociative Amnesia', code: 'F44.0' },
  differentialOptions: [
    { id: 'do1', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do2', name: 'Mild Neurocognitive Disorder Due to Traumatic Brain Injury', isCorrect: false },
    { id: 'do3', name: 'Dissociative Amnesia', isCorrect: true },
    { id: 'do4', name: 'Acute Stress Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      "Teresa 'Tess' Nakamura-Ruiz, a 33-year-old Japanese and Mexican American veterinary technician in Albuquerque, is referred by a hospital social " +
      "worker four months after a home-invasion robbery. She remembers opening her apartment door to a man holding a package and, after that, nothing " +
      "until she was sitting in the back of an ambulance about two hours later. The EMT run sheet she brings documents that during that gap she was alert, " +
      "oriented, answering questions, and giving police a description; the emergency department found bruised wrists, no head injury or loss of " +
      "consciousness, a normal neurological exam, and a negative toxicology screen. She has no prior memory problems and recalls the rest of her life " +
      "clearly. Since the robbery she startles at knocks, wakes from nightmares she cannot recall, and has missed 11 workdays. A suspect has been arrested and " +
      "charged; she mentions that the detective 'said counseling might help me remember his face so I can pick him out.' She describes herself as 'not " +
      "depressed, just tired,' and adds that she now keeps her late father's revolver, loaded, on her nightstand 'for protection, though some mornings I'd " +
      "honestly rather not wake up.' Her counselor, Renata, an LPC, was burglarized herself last year and notices a surge of anger toward the suspect and a " +
      "wish to help 'get him convicted.' Renata has treated trauma for years but has never had a client involved in an active criminal case.",
    session1:
      "At the second session a C-SSRS shows passive wishes to be dead several mornings a week, with no plan, intent, or past attempts. Tess completes a " +
      "safety plan and agrees to have her brother store the revolver at his home; he confirms by phone that he has it. Her PCL-5 score is in the clinically " +
      "significant range. A victim advocate from the district attorney's office has called to offer court accompaniment and help applying for state victim " +
      "compensation to cover counseling costs; Tess wants the advocate's help and signs a release limited to scheduling and compensation paperwork. Tess says " +
      "her main goal is 'to get the memory back before trial' and asks whether hypnosis could help; she also wants to stop jumping at every knock and return " +
      "to full-time work.",
    session2:
      "Two weeks later Renata receives a subpoena from the defense attorney requesting Tess's complete counseling records. In session Tess says an image keeps " +
      "flashing in her mind, 'a green jacket,' and asks, 'He was wearing green, right? Did I say that before?' Moments later her gaze goes blank and she does " +
      "not respond to her name for about 20 seconds. The next week the prosecutor calls asking Renata to testify as an expert that Tess's amnesia is genuine. " +
      "At the following session Tess says, frustrated, 'You're supposed to help me remember and you won't. What's the point?'",
  },
  diagnosticRationale:
    "Tess cannot recall a bounded period of autobiographical information surrounding a traumatic event (localized amnesia), with clinically significant " +
    "distress and missed work. The decisive rule-outs are documented: EMTs recorded that she was alert, oriented, and conversing during the period she " +
    "cannot recall, and the ED found no head injury, no loss of consciousness, a normal neurological exam, and negative toxicology, so the gap is not " +
    "attributable to a substance, traumatic brain injury, or another neurological condition. Her startle, nightmares, and clinically significant PCL-5 " +
    "warrant ongoing trauma assessment and treatment of trauma symptoms, but the amnesia itself is the focus of the given diagnosis. Dissociative amnesia " +
    "(F44.0) fits.",
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Dissociative amnesia: inability to recall autobiographical information of a traumatic nature; not attributable to a substance, neurological condition, or TBI; localized amnesia; differential with PTSD and neurocognitive disorder' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured assessment of passive death wishes, intent, plan, and behavior' },
    { id: 'R3', source: 'Stanley-Brown SPI', detail: 'Safety plan including lethal-means counseling and storage of firearms outside the home' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'E.13.c client evaluation prohibited (forensic role); B.2.d court-ordered disclosure; B.2.e minimal disclosure; C.2.a competence; counselor values and countertransference' },
    { id: 'R5', source: 'State law', detail: 'Subpoena versus court order, privilege assertion, and production of mental health records in criminal proceedings' },
    { id: 'R6', source: 'VA/DoD CPG', detail: 'PTSD guideline: trauma-focused psychotherapies (CPT, PE) for posttraumatic symptoms' },
    { id: 'R7', source: 'HIPAA', detail: 'Authorization scope and minimum necessary disclosures to third parties' },
    { id: 'R8', source: 'Hays (Assessment)', detail: 'Standardized trauma measures; open, non-leading interviewing' },
    { id: 'R9', source: 'NBCC 2027 Spec', detail: 'Work tasks: obligations of court proceedings, collaboration with non-clinical stakeholders, therapeutic ruptures, vicarious trauma' },
  ],
  questions: [
    // ---------------- intake (assess x3, profdev x2) ----------------
    Q(1, 'assess', 'intake', 'Which finding most strongly supports dissociative amnesia over amnesia from a head injury or a substance?', ['R1'], [
      O('a', 'Her memory for the rest of her life is intact, so the gap is limited to the period around the robbery.', 0,
        'Supports localized pattern only', 'Pattern of loss', 'A bounded gap fits localized amnesia but could also follow a brief head injury or intoxication; it does not rule them out', ['remembers rest of life'], 'Using the pattern of loss in place of the rule-outs'),
      O('b', 'Her nightmares and startle at knocks show that trauma, not an injury, is the source of the memory gap.', -1,
        'Trauma symptoms do not exclude injury', 'Symptom inference', 'Trauma symptoms can coexist with a head injury or drugging; they do not establish the cause of the gap', ['startles at knocks'], 'Treating trauma symptoms as proof of a dissociative cause'),
      O('c', 'The EMT documented that she was alert and giving police a description during the time she cannot recall.', 3,
        'Behavior intact during the gap', 'Apply Criterion D', 'Coherent, oriented behavior during the forgotten period, plus no head injury and negative toxicology, points away from TBI or a substance', ['alert and oriented', 'no head injury', 'negative tox'], 'Overlooking the documented behavior during the gap'),
      O('d', 'Her inability to remember suggests she may be avoiding the memory on purpose, which points to malingering.', -2,
        'Accusatory and unsupported', 'Malingering assumption', 'Nothing suggests feigning, and the label could harm her as a crime victim and her care', ['documented ED findings'], 'Assuming amnesia in a legal context is feigned'),
    ]),
    Q(2, 'assess', 'intake', 'Which risk-related action is most important at this intake?', ['R2', 'R3'], [
      O('a', 'Complete a structured suicide risk screen focused on her ideation, plan, and intent before she leaves today.', 0,
        'Screens but omits means', 'Ideation-only screen', 'Screening is correct, but leaving out the loaded revolver at her bedside misses the most urgent factor', ['loaded revolver on nightstand'], 'Assessing ideation without asking about lethal means'),
      O('b', 'Accept her statement that she is not depressed and keeps the revolver for protection, and continue the intake.', -1,
        'Accepts reassurance', 'Taking reassurance at face value', 'Her reassurance is followed by a passive death wish; accepting it skips assessment', ['rather not wake up'], 'Missing a safety disclosure embedded in reassurance'),
      O('c', 'Have her agree in writing not to harm herself before she leaves, then schedule her next visit in two weeks.', -2,
        'No-suicide contract', 'Written no-harm contract', 'Contracts are not protective and replace real assessment and lethal-means counseling', ['firearm access', 'passive death wish'], 'Treating a signed promise as a safety plan'),
      O('d', 'Complete a structured risk assessment exploring her passive death wish and access to the loaded revolver.', 3,
        'Assess ideation and means', 'Risk assessment with lethal means', 'A passive death wish plus a loaded firearm at the bedside calls for structured assessment and lethal-means counseling now', ['loaded revolver', 'rather not wake up'], 'Overlooking a disclosure buried in reassurance'),
    ]),
    Q(3, 'assess', 'intake', 'Given the pending criminal case, how should Renata gather information about the robbery?', ['R8', 'R1'], [
      O('a', 'Defer all questions about the robbery until the criminal case ends, focusing only on her current functioning.', 0,
        'Overly cautious', 'Avoid the event', 'Caution about the case is reasonable, but trauma symptoms still need to be assessed now', ['startle', 'nightmares'], 'Letting the legal case stop needed assessment'),
      O('b', 'Use open, non-leading questions and a standardized PTSD measure, recording her words as she says them.', 3,
        'Non-leading, standardized assessment', 'Forensically careful clinical assessment', 'Open questions and validated measures assess symptoms without introducing details that could alter memory or testimony', ['pending trial', 'memory gap'], 'Asking questions that supply details she has not reported'),
      O('c', 'Ask specific questions about the man’s appearance and clothing to help her fill in the gaps in her memory.', -1,
        'Leading questions', 'Detail-probing interview', 'Specific probes about the perpetrator can suggest details and contaminate later testimony', ['pending identification'], 'Treating the interview as an investigation'),
      O('d', 'Use guided imagery to walk her back through opening the door so the missing period can come back in session.', -2,
        'Suggestive memory recovery', 'Imagery-based retrieval', 'Guided imagery for lost memories increases false-memory risk and can harm her case', ['detective hopes she will remember'], 'Pursuing memory recovery as an assessment goal'),
    ]),
    Q(4, 'profdev', 'intake', 'What is the best way for Renata to handle her anger toward the suspect and wish to help convict him?', ['R4', 'R9'], [
      O('a', 'Refer Tess to another counselor at once, since any personal reaction to a case makes her unsuitable for it.', 0,
        'Overcorrects', 'Immediate transfer', 'Strong reactions call for examination and supervision first; transfer is needed only if they cannot be managed', ['experienced trauma counselor'], 'Assuming countertransference automatically requires referral'),
      O('b', 'Disclose her own burglary to Tess to build rapport and show she knows what it is like to be a victim.', -1,
        'Self-disclosure for counselor needs', 'Rapport through disclosure', 'The disclosure would center Renata’s experience and blur the treatment focus', ['her own burglary'], 'Using self-disclosure to process the counselor’s feelings'),
      O('c', 'Recognize the reaction as linked to her own burglary and process it in supervision so it does not guide care.', 3,
        'Self-awareness and supervision', 'Manage countertransference', 'Naming the source of the reaction and using supervision keeps her focused on Tess’s welfare rather than the prosecution', ['burglarized last year', 'wish to get him convicted'], 'Acting on the reaction instead of examining it'),
      O('d', 'Use her reaction as motivation to help Tess recall details the prosecution may need to convict the suspect.', -2,
        'Role confusion with harm', 'Advocacy for prosecution', 'Pursuing details for the prosecution abandons the treating role and risks suggestion and harm', ['wish to help convict'], 'Letting a personal agenda shape clinical work'),
    ]),
    Q(5, 'profdev', 'intake', 'Renata has never had a client in an active criminal case. What is the most appropriate step?', ['R4', 'R9'], [
      O('a', 'Read the ethics code sections on court involvement on her own and proceed without further consultation.', 0,
        'Helpful but limited', 'Self-study only', 'Reading the code helps, but the legal and memory issues here call for consultation with someone experienced', ['first criminal case'], 'Relying on self-study for a complex new area'),
      O('b', 'Ask the detective how counseling usually fits into a criminal case so she understands what is expected of her.', -1,
        'Wrong source of guidance', 'Law enforcement guidance', 'The detective’s interests differ from the client’s; guidance on her duties should come from professional sources', ['detective hopes she remembers'], 'Taking role guidance from a party to the case'),
      O('c', 'Agree to serve as both treating counselor and evaluator so that Tess does not have to see another professional.', -2,
        'Dual role', 'Combined treating and forensic role', 'Serving as both treating counselor and evaluator is a conflicting dual role', ['pending trial'], 'Thinking convenience justifies combining roles'),
      O('d', 'Consult a colleague experienced with trauma clients in court cases about records, memory, and her role.', 3,
        'Seek specialized consultation', 'Consultation for a new practice area', 'Consultation helps her handle records requests, avoid suggestion, and stay in the treating role', ['active criminal case', 'detective contact'], 'Proceeding without consultation in an unfamiliar legal context'),
    ]),
    // ---------------- session1 (indirect, planning, planning) ----------------
    Q(6, 'indirect', 'session1', 'How should Renata collaborate with the victim advocate from the district attorney’s office?', ['R7', 'R9'], [
      O('a', 'Let Tess handle all contact with the advocate herself, so that Renata stays fully separate from the case.', 0,
        'Limits useful collaboration', 'No contact', 'Distance from the case is understandable, but Tess authorized limited coordination that would help her', ['release signed', 'wants advocate’s help'], 'Withholding authorized support out of caution'),
      O('b', 'Share only the scheduling and compensation details covered by her release and coordinate on court support.', 3,
        'Collaborate within the release', 'Non-clinical stakeholder collaboration', 'Working with the advocate within the release’s scope supports her access to compensation and court support while protecting clinical content', ['release limited to scheduling and compensation'], 'Sharing beyond what the client authorized'),
      O('c', 'Send the advocate a copy of the intake summary so that the office has the background it needs for her claim.', -1,
        'Exceeds authorization', 'Over-disclosure', 'The intake summary contains clinical information outside the release and could reach the prosecution', ['release scope'], 'Assuming a release covers whatever seems helpful'),
      O('d', 'Give the advocate updates on what Tess remembers in sessions so the prosecution can prepare for trial.', -2,
        'Unauthorized disclosure', 'Reporting memory content', 'Sharing memory content violates confidentiality and could affect her testimony', ['memory gap', 'pending trial'], 'Treating the advocate as part of the treatment team'),
    ]),
    Q(7, 'planning', 'session1', 'Which plan best reflects Tess’s needs at this point?', ['R6', 'R1'], [
      O('a', 'Target her trauma symptoms and return to work with an evidence-based trauma therapy, not memory recovery.', 3,
        'Treat symptoms, not the gap', 'Evidence-based trauma treatment', 'Trauma-focused therapy addresses startle, nightmares, and missed work; recovering the memory is neither required nor safe as a goal', ['PCL-5 elevated', 'missed 11 workdays'], 'Making memory recovery the treatment target'),
      O('b', 'Spend early sessions on stabilization skills, then decide on trauma therapy after the trial is over.', 0,
        'Delays effective care', 'Wait for trial', 'Stabilization is reasonable, but delaying trauma treatment until an uncertain trial date prolongs impairment', ['impairment now'], 'Letting the legal timeline dictate treatment'),
      O('c', 'Set recovery of the missing two hours as the primary goal, since she says it matters most to her right now.', -1,
        'Unsafe goal', 'Client-stated goal adopted as is', 'Adopting memory recovery as the goal invites suggestive techniques and unrealistic expectations', ['get the memory back before trial'], 'Adopting a client’s goal without assessing its risks'),
      O('d', 'Focus sessions on rehearsing her account of the robbery so her testimony will be consistent at trial.', -2,
        'Witness coaching', 'Testimony preparation', 'Rehearsing testimony is not treatment, blurs roles, and can shape her memory', ['pending trial'], 'Confusing support for court with preparing testimony'),
    ]),
    Q(8, 'planning', 'session1', 'Tess asks whether hypnosis could help her remember. What is the best response?', ['R1', 'R4', 'R5'], [
      O('a', 'Offer a referral to a certified hypnotherapist, since hypnosis is outside Renata’s own training.', -1,
        'Refers to a contraindicated method', 'Referral for hypnosis', 'Referral outsources a contraindicated approach rather than explaining its risks', ['pending trial'], 'Treating a contraindication as a competence issue'),
      O('b', 'Agree to try hypnosis once, since recovering the memory before trial would ease her distress the most.', -2,
        'Contraindicated technique', 'Hypnotic memory retrieval', 'Hypnosis can create confident false memories and may affect the admissibility of her testimony', ['identification pending'], 'Assuming recovered memories are accurate'),
      O('c', 'Explain that hypnosis can create false memories and affect her testimony, so it is not part of the plan.', 3,
        'Name the contraindication', 'Assess contraindications', 'Explaining the risk of memory distortion and legal consequences lets her make an informed choice and protects her case', ['asks about hypnosis', 'trial pending'], 'Not recognizing hypnosis as contraindicated here'),
      O('d', 'Tell her the decision belongs to her attorney and the prosecutor, and revisit it after she asks them.', 0,
        'Defers clinical judgment', 'Defer to legal actors', 'Legal input matters, but the counselor must still explain the clinical contraindication', ['asks about hypnosis'], 'Handing a clinical decision to legal actors'),
    ]),
    // ---------------- session2 (legal, interventions, interventions, legal, interventions) ----------------
    Q(9, 'legal', 'session2', 'How should Renata respond to the defense attorney’s subpoena for Tess’s complete records?', ['R5', 'R4', 'R7'], [
      O('a', 'Send the full records promptly, since a subpoena is a legal order that must be obeyed within its deadline.', -1,
        'Over-discloses', 'Automatic compliance', 'A subpoena is not necessarily a court order; producing records without asserting privilege may waive her rights', ['subpoena from defense'], 'Treating a subpoena as equal to a court order'),
      O('b', 'Notify Tess, consult an attorney or her liability carrier, and release records only as a court order requires.', 3,
        'Protect privilege, follow the law', 'Respond to legal process', 'Counselors notify the client, seek legal guidance, assert privilege, and disclose only what a court orders, limited to the minimum', ['subpoena', 'pending trial'], 'Either ignoring or over-complying with a subpoena'),
      O('c', 'Notify Tess and assert privilege in writing, then wait to see whether the defense seeks a court order.', 0,
        'Right direction, no legal consult', 'Privilege assertion only', 'Notifying and asserting privilege is appropriate, but she should get legal guidance on deadlines and procedures', ['subpoena deadline'], 'Handling legal process without legal advice'),
      O('d', 'Remove the sensitive notes about the robbery from the file before responding so they cannot be used.', -2,
        'Altering records', 'Record tampering', 'Altering records in response to legal process is unethical and may be illegal', ['subpoena'], 'Protecting the client by destroying records'),
    ]),
    Q(10, 'interventions', 'session2', 'Tess describes a green jacket and asks whether she has said that before. What is the best response?', ['R1', 'R8'], [
      O('a', 'Ask her to close her eyes and describe more about the jacket while the image is still fresh in her mind.', -1,
        'Probing invites suggestion', 'Memory elaboration', 'Pushing for detail on a fragment increases the risk of constructing details', ['pending identification'], 'Treating a fragment as something to develop'),
      O('b', 'Tell her that memories of the robbery cannot be discussed in session while the criminal case is pending.', 0,
        'Overly restrictive', 'Topic ban', 'Avoiding suggestion does not require refusing to hear what she experiences', ['image keeps flashing'], 'Confusing non-suggestive listening with silence'),
      O('c', 'Reflect that an image of a green jacket is coming up and note her words, without confirming or adding detail.', 3,
        'Neutral reflection', 'Non-suggestive response', 'Reflecting without confirming avoids shaping her memory and her verbatim words are documented', ['asks for confirmation', 'trial pending'], 'Confirming or adding details to a memory fragment'),
      O('d', 'Confirm that she has mentioned green clothing before, since that consistency will strengthen her account.', -2,
        'Supplies false confirmation', 'Confirming details', 'She has not reported this before; confirming invents corroboration and could taint testimony', ['did I say that before'], 'Offering false confirmation to reassure'),
    ]),
    Q(11, 'interventions', 'session2', 'Tess’s gaze goes blank and she does not respond to her name for about 20 seconds. What should Renata do?', ['R1', 'R6'], [
      O('a', 'Say her name calmly and orient her to the room, the date, and her feet on the floor until she returns.', 3,
        'Grounding to the present', 'Crisis grounding for dissociation', 'Calm orienting cues help her return to the present and reduce the episode', ['blank gaze', 'unresponsive to name'], 'Continuing trauma content during dissociation'),
      O('b', 'Wait quietly until she comes back on her own, then gently ask what she noticed during the blank period.', 0,
        'Passive approach', 'Wait it out', 'Waiting may work, but active grounding is safer and shortens the episode', ['20 seconds unresponsive'], 'Missing the chance to ground her'),
      O('c', 'Keep discussing the green jacket in case the dissociation means the memory is about to come back.', -1,
        'Deepens dissociation', 'Push through', 'Continuing trauma content during dissociation can intensify it and invites suggestion', ['green jacket fragment'], 'Treating dissociation as a doorway to memory'),
      O('d', 'Use the blank episode as a chance to suggest robbery details that may help the memory come back.', -2,
        'Suggestion during dissociation', 'Implanting details', 'Suggesting details during an altered state risks false memory and harms her case', ['pending trial'], 'Exploiting an altered state for memory work'),
    ]),
    Q(12, 'legal', 'session2', 'The prosecutor asks Renata to testify as an expert that Tess’s amnesia is genuine. How should she respond?', ['R4', 'R5'], [
      O('a', 'Ask Tess whether she wants Renata to testify as an expert and follow Tess’s preference on the request.', 0,
        'Client wishes do not resolve the role', 'Client choice', 'Including Tess matters, but her preference does not make the dual role appropriate', ['treating counselor'], 'Treating a role conflict as a consent question'),
      O('b', 'Refuse any involvement in the case, including factual testimony, even if a court orders her to appear.', -1,
        'Defies legal process', 'Refuse all testimony', 'A treating counselor may be compelled to give factual testimony; refusing a court order is not an option', ['court proceedings'], 'Confusing role boundaries with immunity'),
      O('c', 'Agree to testify that the amnesia is genuine, since her clinical work gives her the best view of Tess.', -2,
        'Dual role', 'Forensic opinion on own client', 'Treating counselors do not evaluate their own clients for forensic purposes', ['treating relationship'], 'Believing familiarity qualifies a counselor as an evaluator'),
      O('d', 'Decline the expert role and explain that as Tess’s treating counselor she can offer only factual testimony.', 3,
        'Keep the treating role', 'Separate forensic and treating roles', 'The ACA Code prohibits forensic evaluation of current clients; a treating counselor may provide factual testimony if compelled', ['prosecutor request'], 'Accepting a forensic role with a current client'),
    ]),
    Q(13, 'interventions', 'session2', 'Tess is frustrated that Renata will not help her remember. What is the best response?', ['R9', 'R6'], [
      O('a', 'Explain again the risks of memory recovery methods so that she fully understands the reasons for the treatment plan.', 0,
        'Explains rather than repairs', 'Re-explain rationale', 'The rationale matters, but leading with it may leave her feeling unheard', ['what’s the point'], 'Answering a rupture with more explanation'),
      O('b', 'Validate her frustration, revisit why memory recovery is not the goal, and ask what would make sessions useful.', 3,
        'Rupture repair', 'Repair the alliance', 'Validating her frustration and inviting feedback repairs the rupture while keeping the plan safe', ['frustrated', 'questions the point'], 'Defending the plan without addressing the rupture'),
      O('c', 'Point out that her frustration may be displaced anger toward the suspect and explore that instead.', -1,
        'Premature interpretation', 'Interpret the rupture', 'Interpreting her frustration dismisses a legitimate concern about the treatment', ['frustration at counselor'], 'Interpreting away a rupture'),
      O('d', 'Agree to spend part of each session trying to bring back the memory so she stays engaged in counseling.', -2,
        'Unsafe concession', 'Memory work to keep engagement', 'Memory recovery attempts risk false memories and could harm her case', ['pending trial'], 'Trading safety for engagement'),
    ]),
  ],
};

// ============================================================================
// D972 — Nightmare Disorder (F51.5) — plan 2 — medium
// ============================================================================
const D972 = {
  id: 'ncmhce-D972',
  title: 'A teacher who stopped sleeping after resettlement',
  category: 'Sleep',
  difficulty: 'medium',
  plan: 2,
  population: 'adult',
  primaryDiagnosis: { name: 'Nightmare Disorder', code: 'F51.5' },
  diagnosis: { name: 'Nightmare Disorder', code: 'F51.5' },
  differentialOptions: [
    { id: 'do1', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do2', name: 'Sleep Terror Disorder', isCorrect: false },
    { id: 'do3', name: 'Insomnia Disorder', isCorrect: false },
    { id: 'do4', name: 'Nightmare Disorder', isCorrect: true },
  ],
  narrative: {
    intake:
      "Hamid Rahimi, a 46-year-old Hazara man from Afghanistan who taught secondary-school mathematics before fleeing, was resettled with his wife and three " +
      "children in Sacramento 14 months ago and now works rotating day and night shifts at a distribution warehouse. His refugee health clinic physician " +
      "refers him for 'bad dreams.' He speaks Dari and limited English; when he arrives, his 16-year-old daughter, Zahra, offers to interpret. Through a " +
      "professional telephone interpreter the clinic arranges instead, Hamid describes vivid, frightening dreams four or five nights a week for nine months: " +
      "being chased through flooded streets, searching for a lost child, his house collapsing. He wakes fully alert, remembers the dreams clearly, and is too " +
      "afraid to fall back asleep. He is exhausted at work and has begun delaying sleep. He witnessed violence before leaving Afghanistan but says he does not " +
      "avoid talking about it and does not feel 'on guard' during the day. His counselor, Claire, has worked mostly with U.S.-born adults and knows little " +
      "about Hazara history or Afghan culture. Her caseload has recently filled with newly arrived refugee clients, and she has noticed intrusive images from " +
      "clients' stories at night and a growing dread of Monday mornings.",
    session1:
      "At the second session, with a remote professional interpreter, Hamid's PCL-5 score is below the clinical cutoff; he endorses no persistent avoidance " +
      "and no negative changes in mood or thinking, and a suicide risk screen is negative. He asks that future interpreters not be from the local Afghan " +
      "community, worried that his private struggles would become known at the mosque. He mentions that his resettlement caseworker, Ms. Okoro, has offered to " +
      "ask his employer about moving him to steady day shifts but needs 'a letter from the clinic.' Hamid wants to sleep through the night and stay alert at " +
      "work.",
    session2:
      "Hamid joins the third session by video from home after a shift change. Clinic policy permits only its HIPAA-compliant telehealth platform, but his " +
      "cousin suggests they 'just use WhatsApp.' He chooses a recurring dream of searching for his son in flooded streets to work on. He shares that he recites " +
      "verses from the Qur'an before sleep and believes prayer protects him, and asks whether this 'counts' in treatment. Later the clinic manager mentions a " +
      "free AI translation app that could 'replace interpreters and save money' and asks counselors to try it. Claire also realizes that her notes from the " +
      "first two sessions do not record who interpreted or how.",
  },
  diagnosticRationale:
    "Hamid has repeated, well-remembered, extended dysphoric dreams involving threats to survival and safety, with rapid full alertness on waking, causing " +
    "distress, sleep avoidance, and impaired work functioning over nine months. Full alertness and clear recall distinguish nightmares from sleep terrors. " +
    "Despite trauma exposure, his PCL-5 is subthreshold and he lacks persistent avoidance and negative alterations in cognition and mood, so PTSD does not " +
    "adequately explain the dreams. No substance or medical explanation is identified by his referring physician. Nightmare disorder (F51.5) fits; trauma " +
    "symptoms should be re-screened over time.",
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Nightmare disorder: repeated well-remembered dysphoric dreams, rapid orientation on awakening, distress or impairment, not better explained by another disorder; differential with sleep terror disorder and PTSD' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Culturally and linguistically appropriate assessment; use of qualified interpreters; validated trauma screening (PCL-5)' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'A.2.c developmental and cultural sensitivity, including qualified interpreters; C.2.a competence; counselor impairment and self-care; multicultural competence' },
    { id: 'R4', source: 'AASM Position Paper (Nightmare Disorder)', detail: 'Imagery rehearsal therapy recommended for nightmare disorder in adults; medication options are physician-managed' },
    { id: 'R5', source: 'HIPAA', detail: 'Telehealth platforms under a business associate agreement; authorization and minimum necessary disclosure' },
    { id: 'R6', source: 'Wiger (Documentation)', detail: 'Late entries clearly dated and labeled; documenting interpreter use' },
    { id: 'R7', source: 'Corey (Theory & Practice)', detail: 'Integrating client worldview and spirituality into counseling' },
    { id: 'R8', source: 'NBCC 2027 Spec', detail: 'Work tasks: translation services, vicarious trauma, AI tools, telemental health platforms, non-clinical stakeholders' },
  ],
  questions: [
    // ---------------- intake (assess, profdev, assess, profdev, assess) ----------------
    Q(1, 'assess', 'intake', 'How should Claire obtain Hamid’s informed consent for counseling?', ['R2', 'R3'], [
      O('a', 'Have Zahra interpret the consent discussion, since Hamid trusts her and she is already present with him.', -2,
        'Minor family interpreter', 'Family interpreting', 'Using a minor child to interpret clinical and trauma-related content risks errors, harms the child, and compromises his privacy', ['Zahra is 16'], 'Choosing convenience over a qualified interpreter'),
      O('b', 'Review consent in simple English with gestures, since Hamid understands some English and wants to begin.', -1,
        'Inadequate comprehension', 'Limited-English consent', 'Limited English is not enough for informed consent to treatment and its limits', ['limited English'], 'Assuming partial English means informed consent'),
      O('c', 'Give Hamid a translated Dari consent form to sign at home and answer questions at the next session.', 0,
        'Helpful but incomplete', 'Written translation only', 'A translated form helps but does not confirm understanding before treatment begins', ['literacy and questions unknown'], 'Treating a signature as understanding'),
      O('d', 'Review consent through the professional interpreter and have Hamid explain it back in his own words.', 3,
        'Interpreter plus teach-back', 'Informed consent in preferred language', 'Consent through a qualified interpreter with teach-back confirms he understands services, limits, and confidentiality', ['speaks Dari', 'professional interpreter available'], 'Relying on family members or partial English'),
    ]),
    Q(2, 'profdev', 'intake', 'Which step best addresses Claire’s limited knowledge of Hamid’s culture and history?', ['R3', 'R8'], [
      O('a', 'Read about Afghan history on her own and rely on the interpreter to explain cultural practices in session.', 0,
        'Partial and shifts role', 'Self-study and interpreter as broker', 'Reading helps, but interpreters are not cultural consultants and Hamid is the expert on his own experience', ['interpreter role'], 'Using the interpreter as a cultural consultant'),
      O('b', 'Seek training and consultation on Hazara and Afghan refugee experiences while asking Hamid what matters.', 3,
        'Build cultural competence', 'Training and cultural humility', 'Training and consultation plus curiosity about his own experience builds competence without stereotyping', ['knows little about Hazara history'], 'Assuming general skills are enough across cultures'),
      O('c', 'Treat Hamid the same way as any other client, since a culture-neutral approach helps avoid bias.', -1,
        'Culture-blind approach', 'Color-blind counseling', 'Ignoring culture overlooks how displacement, faith, and history shape his experience', ['refugee', 'Hazara'], 'Mistaking neutrality for fairness'),
      O('d', 'Transfer Hamid to a counselor who shares his background, since only a matching counselor can help him.', -2,
        'Assumes matching is required', 'Ethnic matching', 'Transferring without his input denies service and assumes a matched counselor is what he wants', ['no client input'], 'Assuming only matched counselors can help'),
    ]),
    Q(3, 'assess', 'intake', 'Which approach to trauma assessment is most appropriate at this stage?', ['R2', 'R1'], [
      O('a', 'Screen for trauma exposure and PTSD symptoms with a validated measure, through the interpreter, at his pace.', 3,
        'Validated, paced screening', 'Trauma screening', 'A validated screen through a qualified interpreter assesses PTSD without forcing a detailed account', ['witnessed violence', 'nightmares'], 'Skipping screening or demanding a detailed narrative'),
      O('b', 'Postpone trauma questions until the nightmares improve, since screening could make his sleep worse.', 0,
        'Delays a needed rule-out', 'Defer screening', 'Screening is needed to rule out PTSD before settling on the diagnosis and plan', ['trauma exposure'], 'Assuming screening itself is harmful'),
      O('c', 'Ask Hamid for a detailed account of the violence he witnessed so that the nightmares can be traced to a cause.', -1,
        'Premature trauma narrative', 'Detailed trauma interview', 'A detailed account at intake is not needed and can be distressing', ['first session'], 'Equating assessment with a full trauma story'),
      O('d', 'Skip trauma screening, since he says he does not avoid the topic or feel on guard during the day.', -2,
        'Misses a rule-out', 'Self-report as screen', 'Two denials do not cover the PTSD clusters; a structured screen is still needed', ['witnessed violence'], 'Treating brief denials as a full screen'),
    ]),
    Q(4, 'profdev', 'intake', 'What should Claire do about her intrusive images at night and dread of Monday mornings?', ['R3', 'R8'], [
      O('a', 'Increase exercise and sleep routines on her own and monitor whether the images fade over the next month.', 0,
        'Self-care alone', 'Personal self-care', 'Self-care helps, but signs of vicarious trauma also call for supervision and caseload review', ['intrusive images', 'dread'], 'Treating vicarious trauma as only a self-care issue'),
      O('b', 'Limit how much detail clients share about their experiences so that she hears fewer distressing stories.', -1,
        'Shifts burden to clients', 'Restricting disclosure', 'Limiting clients’ disclosures protects her at the cost of their care', ['refugee caseload'], 'Managing her distress through client avoidance'),
      O('c', 'Recognize signs of vicarious trauma, raise them in supervision, and adjust her caseload and self-care.', 3,
        'Assess and address vicarious trauma', 'Counselor self-awareness', 'Intrusive images and dread suggest vicarious trauma; supervision and caseload changes prevent impairment', ['intrusive images', 'caseload filled'], 'Ignoring early signs of impairment'),
      O('d', 'Keep the reactions to herself and see more clients, since busier weeks leave less time to dwell on them.', -2,
        'Risks impairment', 'Work through it', 'Taking on more while symptomatic increases the risk of impaired practice', ['dread of Mondays'], 'Ignoring warning signs of impairment'),
    ]),
    Q(5, 'assess', 'intake', 'Which finding best supports the given diagnosis of nightmare disorder over sleep terror disorder?', ['R1'], [
      O('a', 'His dreams happen four or five nights a week and have continued for more than nine months now.', 0,
        'Frequency is not the discriminator', 'Frequency and duration', 'Frequency supports clinical significance but does not distinguish nightmares from sleep terrors', ['four or five nights'], 'Using frequency as the differential feature'),
      O('b', 'He wakes fully alert with clear recall of the dream and is too afraid to fall back asleep afterward.', 3,
        'Alert with recall', 'Apply nightmare criteria', 'Rapid full alertness and clear recall distinguish nightmares from sleep terrors, which involve partial arousal and little recall', ['wakes fully alert', 'remembers clearly'], 'Confusing nightmares with sleep terrors'),
      O('c', 'His dreams involve threats to his safety and his family, which is the hallmark of sleep terror disorder.', -1,
        'Misstates sleep terrors', 'Content-based reasoning', 'Threatening content fits nightmares; sleep terrors have little dream recall', ['dream content'], 'Using content rather than arousal features'),
      O('d', 'His exposure to violence shows the dreams are PTSD, so no separate sleep diagnosis needs to be considered.', -2,
        'Premature PTSD assumption', 'Exposure equals PTSD', 'Exposure alone does not establish PTSD; he denies key symptoms and has not been screened', ['denies avoidance'], 'Assuming trauma exposure means PTSD'),
    ]),
    // ---------------- session1 (indirect, indirect, planning) ----------------
    Q(6, 'indirect', 'session1', 'How should Claire arrange interpretation for Hamid’s ongoing sessions?', ['R2', 'R8'], [
      O('a', 'Use the same clinic interpreter every session for continuity, after asking if Hamid knows him.', 0,
        'Continuity, but ignores his request', 'Consistent local interpreter', 'Continuity helps, but he asked for someone outside the local community', ['worried about the mosque'], 'Prioritizing convenience over the client’s privacy concern'),
      O('b', 'Hold sessions in English using a phone translation app, so that no other person learns of his private struggles.', -1,
        'Inaccurate communication', 'App-based interpretation', 'Consumer apps are unreliable for clinical conversations and may not protect PHI', ['limited English'], 'Trading accuracy for privacy'),
      O('c', 'Ask Zahra to interpret going forward, since she is not part of the mosque community he is worried about.', -2,
        'Minor as interpreter', 'Family interpreter', 'Using his daughter exposes her to his trauma-related content and compromises care', ['Zahra is 16'], 'Treating a family member as a neutral interpreter'),
      O('d', 'Book a qualified remote interpreter from outside the local community and confirm their confidentiality duties.', 3,
        'Qualified, private interpretation', 'Secure translation services', 'A qualified remote interpreter from outside his community honors his privacy concern and preferred language', ['asked for non-local interpreter', 'speaks Dari'], 'Ignoring a client’s privacy concern about interpreters'),
    ]),
    Q(7, 'indirect', 'session1', 'How should Claire respond to Ms. Okoro’s request for a letter supporting a shift change?', ['R5', 'R8'], [
      O('a', 'Ask the referring physician to write the letter, since the employer asked for something from the clinic.', 0,
        'Passes the task along', 'Redirect request', 'The physician could help, but Claire can support the request directly with consent', ['caseworker request'], 'Avoiding collaboration that the client wants'),
      O('b', 'With Hamid’s written consent, give Ms. Okoro a brief letter supporting day shifts without clinical details.', 3,
        'Authorized, minimum necessary', 'Collaborate with non-clinical stakeholders', 'With written consent, a brief letter supports his goal while disclosing only what is necessary', ['caseworker offer', 'rotating shifts'], 'Sharing more than needed or refusing to help'),
      O('c', 'Send Ms. Okoro the intake and screening results so she can explain his needs to the employer in detail.', -1,
        'Over-disclosure', 'Full records to caseworker', 'Screening results and intake details exceed what is needed for a schedule request', ['minimum necessary'], 'Assuming more detail helps'),
      O('d', 'Call the employer directly to explain his nightmares, since a shift change will help his sleep the most.', -2,
        'Unauthorized disclosure', 'Direct employer contact', 'Contacting the employer without his consent breaches confidentiality', ['no release to employer'], 'Advocating without authorization'),
    ]),
    Q(8, 'planning', 'session1', 'Which initial treatment plan is most appropriate for Hamid?', ['R4', 'R1'], [
      O('a', 'Sleep hygiene education and relaxation training first, adding nightmare-focused work if dreams persist.', 0,
        'Helpful, not first-line', 'Stepwise general sleep care', 'General sleep care helps but does not target the nightmares themselves', ['four or five nights a week'], 'Starting with nonspecific care when a targeted option exists'),
      O('b', 'Prolonged exposure therapy, since revisiting the violence he witnessed will resolve the nightmares at their source.', -1,
        'Wrong target', 'PTSD protocol', 'He does not meet PTSD criteria; exposure to the trauma memory is not the indicated treatment', ['PCL-5 below cutoff'], 'Applying a PTSD protocol to nightmare disorder'),
      O('c', 'Imagery rehearsal therapy with sleep scheduling, plus a referral to his physician to review medication options.', 3,
        'Targeted first-line treatment', 'Imagery rehearsal therapy', 'IRT directly targets nightmares, and physician review addresses adjunct medication within scope', ['nightmare disorder', 'refugee clinic physician'], 'Missing the targeted, evidence-based option'),
      O('d', 'Suggest he take an over-the-counter sleep aid each night until the nightmares stop on their own.', -2,
        'Medication advice outside scope', 'OTC sleep aid', 'Recommending medication is outside counselor scope and does not treat nightmares', ['counselor scope'], 'Offering medication advice'),
    ]),
    // ---------------- session2 (legal, interventions, interventions, legal, legal) ----------------
    Q(9, 'legal', 'session2', 'How should Claire handle the cousin’s suggestion to hold the video session on WhatsApp?', ['R5', 'R8'], [
      O('a', 'Use WhatsApp as his cousin suggests, since the app is encrypted and Hamid already knows how to use it.', -1,
        'Noncompliant platform', 'Consumer app', 'Encryption alone does not meet clinic policy or HIPAA requirements for a business associate agreement', ['clinic policy'], 'Equating encryption with compliance'),
      O('b', 'Let his cousin interpret over WhatsApp this session so that Hamid does not wait for the platform setup.', -2,
        'Untrained interpreter and noncompliant platform', 'Family interpreting on consumer app', 'This combines an unqualified interpreter with a noncompliant platform', ['professional interpreter used'], 'Choosing convenience over privacy and accuracy'),
      O('c', 'Switch to a phone call with the interpreter on a three-way line if the video link will not connect today.', 0,
        'Reasonable backup', 'Telephone fallback', 'A phone fallback may be acceptable, but the first step is to help him join the approved platform', ['video by default'], 'Abandoning the approved platform too quickly'),
      O('d', 'Continue on the clinic’s HIPAA-compliant platform with the interpreter joined, helping Hamid connect.', 3,
        'Compliant platform', 'Telemental health compliance', 'Using the approved platform follows clinic policy and protects his information', ['clinic policy', 'interpreter needed'], 'Moving to a consumer app for convenience'),
    ]),
    Q(10, 'interventions', 'session2', 'Hamid chooses the dream of searching for his son in flooded streets. What is the core step of imagery rehearsal therapy?', ['R4'], [
      O('a', 'Have him write down each dream in the morning in detail so he can notice patterns across the week.', 0,
        'Monitoring, not treatment', 'Dream logging', 'Logging is useful data but is not the active ingredient of IRT', ['chose target dream'], 'Confusing monitoring with intervention'),
      O('b', 'Have him change the dream into a new version he chooses and rehearse that imagery for a few minutes daily.', 3,
        'Rescript and rehearse', 'Imagery rehearsal therapy', 'IRT has the client change the nightmare and rehearse the new version while awake', ['recurring dream', 'chose a target'], 'Retelling the trauma instead of rescripting the dream'),
      O('c', 'Have him retell the dream in vivid detail several times in session until his distress begins to fall.', -1,
        'Exposure framework', 'Repeated retelling', 'Repeated retelling is an exposure approach, not IRT', ['dream content'], 'Applying exposure rather than rescripting'),
      O('d', 'Tell him to avoid thinking about the dream during the day, since rehearsing it may bring it back.', -2,
        'Thought suppression', 'Avoidance', 'Suppression tends to increase intrusions and contradicts the treatment model', ['avoiding sleep already'], 'Recommending avoidance as treatment'),
    ]),
    Q(11, 'interventions', 'session2', 'Hamid asks whether his prayer before sleep counts in treatment. What is the best response?', ['R7', 'R3'], [
      O('a', 'Explore what the prayer means to him and invite him to use it as a calming step before his rehearsal.', 3,
        'Integrate his worldview', 'Culturally responsive integration', 'Exploring meaning and integrating prayer honors his worldview and supports the plan', ['recites Qur’an before sleep', 'asks if it counts'], 'Dismissing or replacing a client’s faith practice'),
      O('b', 'Tell him prayer is a personal matter and keep treatment focused on the imagery rehearsal steps.', 0,
        'Misses a resource', 'Keep faith separate', 'This respects privacy but misses a meaningful resource he raised', ['he raised it'], 'Treating spirituality as off-limits'),
      O('c', 'Suggest he replace the prayer with progressive muscle relaxation, which has stronger research support.', -1,
        'Disregards his values', 'Replace with technique', 'Replacing his practice dismisses his values without clinical need', ['prayer is meaningful'], 'Ranking technique over worldview'),
      O('d', 'Tell him relying on prayer may keep the nightmares going, since it is a form of avoidance.', -2,
        'Pathologizes faith', 'Faith as avoidance', 'There is no basis to call his prayer avoidance; this imposes values', ['prayer is calming'], 'Imposing counselor values on spirituality'),
    ]),
    Q(12, 'legal', 'session2', 'How should Claire respond to the manager’s request to try the AI translation app?', ['R5', 'R8', 'R3'], [
      O('a', 'Start using the app in place of the interpreter, since the manager approved it and it will save the clinic time.', -2,
        'Replaces qualified interpreter', 'Unvetted AI translation', 'An unvetted app risks errors and PHI exposure in clinical sessions', ['interpreter needed'], 'Following cost-saving directives over client welfare'),
      O('b', 'Try the app in Hamid’s next session, then compare its accuracy with the interpreter to report back.', -1,
        'Experiments on a client', 'Trial use with client', 'Testing an unvetted tool in a live session exposes him to risk', ['live session'], 'Piloting technology on clients'),
      O('c', 'Decline to use the app in sessions until it is vetted for accuracy and HIPAA safeguards, keeping interpreters.', 3,
        'Vet before use', 'Responsible AI use', 'AI tools must be vetted for accuracy and privacy before clinical use; qualified interpreters remain the standard', ['free AI app', 'PHI'], 'Adopting AI before vetting'),
      O('d', 'Use the app only for scheduling messages and keep the professional interpreter for all sessions.', 0,
        'Limited but still unvetted', 'Partial use', 'Scheduling messages still contain PHI, and the app has not been vetted', ['scheduling contains PHI'], 'Assuming low-stakes use is risk-free'),
    ]),
    Q(13, 'legal', 'session2', 'Claire’s notes from the first two sessions do not record interpreter use. What should she do?', ['R6', 'R3'], [
      O('a', 'Note the interpreter details in today’s progress note and start recording them in future sessions.', 0,
        'Fixes forward only', 'Prospective correction', 'Future notes will be complete, but the earlier records remain incomplete', ['first two sessions'], 'Leaving known gaps in the record'),
      O('b', 'Add a dated late entry noting the interpreter, language, and modality for each, without altering originals.', 3,
        'Proper late entry', 'Correct documentation', 'A labeled, dated late entry corrects the record transparently', ['notes missing interpreter details'], 'Altering original entries'),
      O('c', 'Leave the earlier notes as written, since interpreter details are not part of the clinical record.', -1,
        'Misjudges documentation', 'Omit interpreter details', 'Interpreter use affects consent and accuracy and belongs in the record', ['consent via interpreter'], 'Undervaluing documentation of interpretation'),
      O('d', 'Revise the earlier notes to add the interpreter details as if they had been recorded at the time of each session.', -2,
        'Falsifies records', 'Backdating', 'Changing notes to appear contemporaneous falsifies the record', ['earlier notes'], 'Backdating to fix an omission'),
    ]),
  ],
};

// ============================================================================
// D973 — Hypersomnolence Disorder (F51.11) — plan 3 — medium
// ============================================================================
const D973 = {
  id: 'ncmhce-D973',
  title: 'Nine hours in the sleeper berth and still on the rumble strip',
  category: 'Sleep',
  difficulty: 'medium',
  plan: 3,
  population: 'adult',
  primaryDiagnosis: { name: 'Hypersomnolence Disorder', code: 'F51.11' },
  diagnosis: { name: 'Hypersomnolence Disorder', code: 'F51.11' },
  differentialOptions: [
    { id: 'do1', name: 'Hypersomnolence Disorder', isCorrect: true },
    { id: 'do2', name: 'Obstructive Sleep Apnea Hypopnea', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do4', name: 'Narcolepsy', isCorrect: false },
  ],
  narrative: {
    intake:
      "Denise Boudreaux, a 52-year-old Black Creole woman from Lafayette, Louisiana, drives long-haul freight in a husband-and-wife team with Leon, 55. Her " +
      "primary care nurse practitioner, who documented normal thyroid studies and blood counts and mildly elevated blood pressure, refers her for 'fatigue, " +
      "maybe depression.' For seven months Denise has slept nine to ten hours a day in the sleeper berth, yet wakes groggy, takes up to an hour to feel clear, " +
      "and needs one or two long naps that do not refresh her. She denies low mood or loss of interest and says, 'I love the road; I'm just always sleepy.' " +
      "Her PHQ-9 is 4. She mentions with a laugh that Leon 'says I rattle the whole cab' and that she has gained about 30 pounds since starting team " +
      "driving. Twice last month she drifted onto the rumble strip during her solo shift before Leon took over. Her counselor, Kevin, an LPC whose practice " +
      "focuses on mood and anxiety, has had no training in sleep disorders. Kevin's father was killed eight years ago by a commercial driver who fell asleep " +
      "at the wheel, and he felt his jaw tighten as Denise described the rumble strip.",
    session1:
      "Leon joins the second session with Denise's consent. He describes loud snoring most nights and says that at times she 'stops breathing, then gasps.' " +
      "Denise reports morning headaches and has never had a sleep study. Her Epworth Sleepiness Scale score is 16. She says her priority is 'figuring out " +
      "what's wrong without losing my CDL,' and she worries about money because the couple is paid by the mile. Denise signs releases for her nurse " +
      "practitioner and a sleep medicine clinic, and one for the carrier's driver manager limited to 'scheduling and home-time requests.' Leon is scheduled " +
      "for knee surgery in five weeks, which would leave Denise driving solo. A few days later the driver manager calls Kevin asking whether Denise is 'fit " +
      "to drive.'",
    session2:
      "Three weeks later an overnight sleep study shows no sleep apnea (apnea-hypopnea index 3), and a next-day nap study shows a mean sleep latency of 6 " +
      "minutes without REM-onset naps. The sleep physician diagnoses hypersomnolence, starts a wake-promoting medication, and advises no driving until her " +
      "sleepiness is controlled. Denise is ashamed: 'My mama would say I'm just lazy.' She says that once Leon has surgery she will 'drink more energy " +
      "drinks' and drive solo, because they cannot afford to lose the income. She has also begun joining telehealth sessions from truck stops in different " +
      "states along her route; Kevin is licensed only in Louisiana.",
  },
  diagnosticRationale:
    "Denise reports excessive sleepiness despite a main sleep period of more than seven hours, with prolonged unrefreshing sleep of nine to ten hours, " +
    "unrefreshing naps, and marked sleep inertia, at least three times a week for seven months, with distress and dangerous impairment in driving. Snoring, " +
    "witnessed apneas, weight gain, morning headaches, and hypertension made obstructive sleep apnea the essential rule-out; polysomnography (AHI 3) " +
    "excluded it, and the MSLT (mean latency 6 minutes, no SOREMPs) is consistent with hypersomnolence without narcolepsy. Depression is not supported " +
    "(PHQ-9 of 4, interest preserved). Hypersomnolence disorder (F51.11) fits, managed medically by the sleep physician with counseling support.",
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Hypersomnolence disorder: excessive sleepiness despite 7+ hours of sleep with prolonged unrefreshing sleep, naps, or sleep inertia, 3+ times weekly for 3+ months; not better explained by another sleep-wake disorder such as obstructive sleep apnea or narcolepsy' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Selecting screening instruments that match the presenting problem (e.g., Epworth Sleepiness Scale for daytime sleepiness)' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'C.2.a competence and consultation; counselor values and countertransference; B.2.a serious and foreseeable harm; B.6 records; informed consent for releases' },
    { id: 'R4', source: 'State law', detail: 'State rules on disclosure to protect third parties and reporting of impaired drivers vary by jurisdiction' },
    { id: 'R5', source: 'Counseling Compact', detail: 'Practice occurs where the client is located; privilege to practice required in member states' },
    { id: 'R6', source: 'HIPAA', detail: 'Authorization scope and minimum necessary disclosure to employers and other providers' },
    { id: 'R7', source: 'Corey (Theory & Practice)', detail: 'Psychoeducation, cognitive and motivational approaches to shame and ambivalence' },
    { id: 'R8', source: 'Wiger (Documentation)', detail: 'SMART objectives and documentation of risk discussions and consultation' },
    { id: 'R9', source: 'NBCC 2027 Spec', detail: 'Work tasks: collaboration with treatment providers and non-clinical stakeholders, license portability, client advocacy' },
  ],
  questions: [
    // ---------------- intake (profdev, assess, profdev, assess) ----------------
    Q(1, 'profdev', 'intake', 'Which step best addresses Kevin’s lack of training in sleep disorders?', ['R3', 'R9'], [
      O('a', 'Consult a colleague versed in behavioral sleep medicine and get training while coordinating with her providers.', 3,
        'Consultation and training', 'Build competence safely', 'Consultation and training, while medical providers lead diagnosis, keep his work within competence', ['no sleep training', 'medical rule-outs needed'], 'Practicing in a new area without support'),
      O('b', 'Refer Denise out at intake to a sleep psychologist, since sleep disorders fall outside his practice focus.', 0,
        'Premature referral', 'Immediate referral', 'Referral is acceptable but not necessary when consultation and medical coordination are available', ['adjacent skills'], 'Assuming any gap requires referral'),
      O('c', 'Treat her sleepiness as a mood problem, since the referral note mentions possible depression and fatigue.', -1,
        'Wrong framework', 'Mood-based treatment', 'Her PHQ-9 is 4 and interest is preserved; treating depression misses the sleep disorder', ['PHQ-9 of 4'], 'Anchoring on the referral question'),
      O('d', 'Use sleep restriction therapy from his insomnia handouts, since most sleep problems share the same core treatments.', -2,
        'Dangerous intervention', 'Insomnia protocol for sleepiness', 'Sleep restriction increases daytime sleepiness and could raise crash risk in a driver', ['drifted onto rumble strip'], 'Applying an insomnia protocol to hypersomnolence'),
    ]),
    Q(2, 'assess', 'intake', 'Which screening instrument best fits Denise’s main complaint?', ['R2', 'R1'], [
      O('a', 'A two-week sleep diary of her sleep times, naps, and alertness, reviewed together at the next session.', 0,
        'Useful but not a screen', 'Sleep diary', 'A diary adds pattern data, but a standardized sleepiness measure screens the main complaint now', ['always sleepy'], 'Choosing monitoring over a validated screen'),
      O('b', 'The Insomnia Severity Index, to measure how much trouble she has falling asleep and staying asleep.', -1,
        'Wrong construct', 'Insomnia screen', 'She sleeps long hours; her problem is sleepiness, not insomnia', ['sleeps nine to ten hours'], 'Confusing sleepiness with insomnia'),
      O('c', 'The Epworth Sleepiness Scale, to measure how likely she is to doze in everyday situations, such as driving.', 3,
        'Matches the complaint', 'Daytime sleepiness screen', 'The Epworth directly measures daytime sleepiness, her core complaint and a driving safety concern', ['always sleepy', 'rumble strip'], 'Selecting an instrument that does not match the complaint'),
      O('d', 'Repeat the PHQ-9 in two weeks, since her fatigue is most likely an early sign of an emerging depression.', -2,
        'Misdirects assessment', 'Depression focus', 'Repeating a depression screen ignores clear sleepiness and safety risk', ['PHQ-9 of 4', 'denies low mood'], 'Anchoring on depression despite contrary data'),
    ]),
    Q(3, 'profdev', 'intake', 'How should Kevin handle his reaction to Denise’s drowsy driving?', ['R3'], [
      O('a', 'Set the reaction aside for now and see whether it affects his work with Denise over the next few sessions.', 0,
        'Passive monitoring', 'Wait and see', 'Noticing is a start, but a reaction tied to his father’s death warrants supervision now', ['jaw tightened'], 'Waiting for bias to show before addressing it'),
      O('b', 'Share his father’s story with Denise to show her how serious drowsy driving can be for other families.', -1,
        'Self-disclosure for counselor needs', 'Personal disclosure', 'Disclosing his loss shifts focus to him and may shame her', ['her shame'], 'Using personal loss to motivate a client'),
      O('c', 'Insist that Denise stop driving for good, since his own loss shows how dangerous drowsy driving can be.', -2,
        'Countertransference drives care', 'Directive based on personal loss', 'A directive driven by his loss overrides her autonomy and the medical evaluation', ['no evaluation yet'], 'Acting on countertransference'),
      O('d', 'Acknowledge the link to his father’s death, take it to supervision, and assess whether he can stay objective.', 3,
        'Self-reflection and supervision', 'Assess suitability', 'Recognizing the reaction and using supervision helps him decide whether he can serve her well', ['father killed by drowsy driver'], 'Ignoring a strong personal reaction'),
    ]),
    Q(4, 'assess', 'intake', 'Which risk assessment is most important at this intake?', ['R1', 'R3'], [
      O('a', 'Complete a standard suicide risk screen, since fatigue and a possible depression referral raise concern.', 0,
        'Reasonable but not the main risk', 'Routine suicide screen', 'Suicide screening is good practice, but the most pressing risk here is to her and others on the road', ['denies low mood', 'rumble strip'], 'Defaulting to routine screening over the presenting risk'),
      O('b', 'Ask Leon to keep a log of her drowsy episodes, since she may underreport them out of concern for her job.', -1,
        'Collateral without consent', 'Partner log', 'Collateral may help later with consent, but it does not replace assessing her directly now', ['Leon not present'], 'Seeking collateral before assessing the client'),
      O('c', 'Treat the rumble strip events as resolved, since Leon took over the driving each time they happened.', -2,
        'Misses ongoing risk', 'Minimize risk', 'Two near misses signal ongoing danger to her and the public', ['twice last month'], 'Treating near misses as resolved'),
      O('d', 'Assess how often she has dozed while driving, any near misses, and her plans to drive solo in coming weeks.', 3,
        'Risk to self and others', 'Driving safety assessment', 'Drowsy driving is the main risk; frequency, near misses, and upcoming plans guide the safety response', ['rumble strip twice', 'solo shifts'], 'Overlooking risk to others'),
    ]),
    // ---------------- session1 (planning, indirect, planning, indirect) ----------------
    Q(5, 'planning', 'session1', 'Which priority should come first in Denise’s treatment plan?', ['R1', 'R9'], [
      O('a', 'A nap and sleep schedule to reduce her daytime sleepiness while she waits for a sleep study date.', 0,
        'Supportive, not first', 'Behavioral sleep plan', 'Scheduling may help, but evaluation and driving safety come first', ['witnessed apneas'], 'Sequencing behavioral steps before medical rule-out'),
      O('b', 'Cognitive therapy for her worry about losing her CDL, since anxiety may be fragmenting her sleep.', -1,
        'Wrong target', 'Anxiety focus', 'Worry is understandable but does not explain snoring, gasping, and sleepiness', ['stops breathing then gasps'], 'Treating a symptom of worry as the cause'),
      O('c', 'A prompt sleep medicine evaluation for sleep apnea and other causes, with a plan to avoid drowsy driving.', 3,
        'Rule out and protect', 'Prioritize medical evaluation and safety', 'Snoring, witnessed apneas, and headaches require sleep evaluation; avoiding drowsy driving protects her and others', ['gasps', 'Epworth 16', 'rumble strip'], 'Treating sleepiness before ruling out apnea'),
      O('d', 'Coaching on caffeine and energy drinks during shifts so she can keep driving while the cause is found.', -2,
        'Unsafe stopgap', 'Stimulant coaching', 'Encouraging continued driving while severely sleepy endangers her and the public', ['Epworth 16'], 'Prioritizing income over safety'),
    ]),
    Q(6, 'indirect', 'session1', 'How should Kevin coordinate with the sleep medicine clinic?', ['R6', 'R9'], [
      O('a', 'Send a summary with Leon’s observed snoring and gasping, her Epworth score, and her drowsy driving events.', 3,
        'Relevant, authorized summary', 'Collaborate with treatment providers', 'A focused summary under her release gives the physician the observations needed to evaluate apnea', ['release signed', 'witnessed apneas'], 'Sending too little or too much'),
      O('b', 'Ask Denise to tell the sleep clinic about the snoring herself, since she can describe her symptoms best.', 0,
        'Misses collateral data', 'Client self-report only', 'She cannot observe her own apneas; Leon’s observations are key', ['Leon observed'], 'Relying on the client for observations she cannot make'),
      O('c', 'Send the sleep clinic Kevin’s full progress notes so that the physician has every detail he has gathered.', -1,
        'Exceeds minimum necessary', 'Full records', 'Full notes include material the physician does not need', ['minimum necessary'], 'Assuming more information is better'),
      O('d', 'Hold off contacting the clinic until the counselor confirms a diagnosis, to avoid sending an unclear picture.', -2,
        'Delays urgent evaluation', 'Wait for certainty', 'The counselor cannot rule out apnea; delay leaves a sleepy driver unevaluated', ['driving risk'], 'Treating medical rule-out as the counselor’s job'),
    ]),
    Q(7, 'planning', 'session1', 'Which goal best meets SMART criteria for Denise at this stage?', ['R8'], [
      O('a', 'Within three weeks, lower her Epworth score below 10 by using scheduled naps and earlier bedtimes while on the road.', 0,
        'Not attainable before evaluation', 'Symptom target', 'The goal is measurable but unrealistic before the cause is found and treated', ['no sleep study yet'], 'Setting outcomes that depend on unknown causes'),
      O('b', 'Within three weeks, complete a sleep study and log her sleep, naps, and any drowsy driving daily until results.', 3,
        'Specific and achievable', 'SMART objective', 'The goal names concrete actions, a time frame, and measurable tracking', ['needs sleep study', 'driving risk'], 'Writing vague goals'),
      O('c', 'Denise will feel more rested and safer behind the wheel as her sleep improves in the coming months.', -1,
        'Vague, unmeasurable aim', 'General aim', 'No measure, behavior, or deadline', ['no measure'], 'Confusing aims with objectives'),
      O('d', 'Denise will keep driving her usual solo shifts and track whether her sleepiness gets better on its own.', -2,
        'Unsafe goal', 'Continue risk', 'The goal endorses continued drowsy driving', ['rumble strip'], 'Building risk into the plan'),
    ]),
    Q(8, 'indirect', 'session1', 'The driver manager asks Kevin whether Denise is fit to drive. How should he respond?', ['R6', 'R3'], [
      O('a', 'Confirm that Denise is in counseling but decline to say more until she signs a broader release.', 0,
        'Partial overreach', 'Confirm treatment only', 'Confirming more than scheduling may exceed the release; the safer step is to cite its limits', ['release limited'], 'Assuming confirming treatment is harmless'),
      O('b', 'Tell the manager that her medical evaluation is underway, since that supports her scheduling needs.', -1,
        'Exceeds release', 'Partial disclosure', 'Medical status is outside a release limited to scheduling', ['scheduling only'], 'Stretching the release'),
      O('c', 'Share her Epworth score and drowsy driving events, since the manager has a safety interest in driving.', -2,
        'Unauthorized disclosure', 'Disclose clinical data', 'Sharing clinical data with an employer without authorization breaches confidentiality', ['no release for fitness'], 'Assuming safety interest overrides consent'),
      O('d', 'Explain that the release covers only scheduling and home-time requests and decline to discuss fitness.', 3,
        'Honor the release', 'Stay within authorization', 'Disclosure is limited to what the release covers', ['release limited to scheduling'], 'Exceeding a release'),
    ]),
    // ---------------- session2 (interventions x3, legal x2) ----------------
    Q(9, 'interventions', 'session2', 'How should Kevin respond to Denise’s belief that she is just lazy?', ['R7', 'R1'], [
      O('a', 'Reassure her that she is clearly a hard worker and move on to planning for the weeks ahead.', 0,
        'Reassures without exploring', 'Quick reassurance', 'Reassurance is kind but leaves the shame and its roots unexplored', ['my mama would say'], 'Moving past shame too quickly'),
      O('b', 'Point out that her thinking is a cognitive distortion and assign a thought record so she can challenge it.', -1,
        'Premature technique', 'Labeling distortion', 'Labeling first can feel dismissive without psychoeducation or exploration', ['ashamed'], 'Applying technique before understanding'),
      O('c', 'Explain that hypersomnolence is a medical sleep disorder, not a flaw, and explore her mother’s words.', 3,
        'Psychoeducation and exploration', 'Address shame with education', 'Accurate psychoeducation counters shame, and exploring family messages honors her context', ['just lazy', 'new diagnosis'], 'Leaving shame unaddressed'),
      O('d', 'Agree that more effort may help and encourage her to push through the sleepiness on her shifts.', -2,
        'Reinforces shame and risk', 'Effort framing', 'This validates a false belief and endangers her on the road', ['advised not to drive'], 'Treating a medical disorder as a willpower issue'),
    ]),
    Q(10, 'interventions', 'session2', 'Which skill is most appropriate to build with Denise now?', ['R1', 'R7'], [
      O('a', 'Practice relaxation before sleep to deepen her rest, so that she feels more refreshed in the mornings.', 0,
        'Not targeted', 'Relaxation', 'Relaxation is harmless but does not address hypersomnolence', ['prolonged sleep'], 'Treating sleepiness like insomnia'),
      O('b', 'Cut her time in bed to eight hours, since extra sleep can make people groggier during the day.', -1,
        'Wrong model', 'Sleep curtailment', 'Restricting sleep is not indicated and may worsen sleepiness', ['hypersomnolence'], 'Applying insomnia logic'),
      O('c', 'Use energy drinks and loud music on solo shifts so she can stay alert until the medication works.', -2,
        'Unsafe coping advice', 'Stimulant workaround', 'This encourages driving against medical advice', ['advised no driving'], 'Endorsing unsafe coping'),
      O('d', 'Keep a regular sleep-wake schedule and planned naps, and track sleepiness to share with her physician.', 3,
        'Supports medical care', 'Behavioral self-management', 'Regular schedules, planned naps, and tracking support treatment and medication adjustment', ['new medication', 'sleep physician'], 'Ignoring coordination with medical care'),
    ]),
    Q(11, 'interventions', 'session2', 'Denise plans to drive solo to protect their income. Which response best supports her in advocating for her needs?', ['R7', 'R9'], [
      O('a', 'Give her information on short-term disability benefits and leave it to her to decide whether to apply.', 0,
        'Informative but passive', 'Resource handoff', 'Information helps, but she needs support planning how to raise her needs', ['income worry'], 'Stopping at information'),
      O('b', 'Explore her concerns and help her plan how to ask the carrier for a local or delayed route during treatment.', 3,
        'Empower self-advocacy', 'Support client advocacy', 'Exploring her concerns and rehearsing a request supports her autonomy and safety', ['income worry', 'advised not to drive'], 'Taking over or ignoring the problem'),
      O('c', 'Tell her Kevin will contact the carrier to arrange medical leave so that she does not have to do it.', -1,
        'Takes over and exceeds release', 'Counselor advocacy', 'This removes her agency and exceeds the release', ['release limited'], 'Advocating for rather than with'),
      O('d', 'Support her plan to drive solo with energy drinks, since respecting her choices protects the alliance.', -2,
        'Colludes with risk', 'Autonomy over safety', 'Endorsing unsafe driving ignores risk to her and others', ['physician advised no driving'], 'Mistaking collusion for respect'),
    ]),
    Q(12, 'legal', 'session2', 'Denise still plans to drive solo against her physician’s advice. What is the most appropriate course of action?', ['R3', 'R4', 'R8'], [
      O('a', 'Report her right away to the state licensing agency to suspend her CDL, without telling or consulting anyone.', -1,
        'Over-restrictive, skips steps', 'Immediate report', 'Reporting without discussion or consultation may breach confidentiality where not permitted and damages trust', ['state law varies'], 'Jumping to disclosure without process'),
      O('b', 'Address the risk directly, consult and review state law on disclosure to protect others, and document it.', 3,
        'Direct, consulted, documented', 'Serious and foreseeable harm', 'Addressing the risk with her, consulting, and checking state law guides any protective disclosure', ['solo driving against advice', 'public safety'], 'Ignoring or overreacting to third-party risk'),
      O('c', 'Encourage her to talk with her sleep physician, who can address fitness to drive, and revisit it next session.', 0,
        'Reasonable but delays', 'Defer to physician', 'Physician involvement is appropriate, but the counselor also has duties to address and consult', ['surgery in five weeks'], 'Delegating the risk entirely'),
      O('d', 'Document that the risk was discussed and treat further action as her decision, since she is an adult.', -2,
        'Misses safety duty', 'Autonomy only', 'Foreseeable risk to the public calls for more than documentation', ['energy drinks', 'solo driving'], 'Missing a safety step'),
    ]),
    Q(13, 'legal', 'session2', 'What must Kevin do about Denise joining sessions from truck stops in other states?', ['R5', 'R3'], [
      O('a', 'Confirm her location at the start of each session and update the emergency contact plan for that area.', 0,
        'Necessary but incomplete', 'Location and emergency plan', 'These steps are required but do not address whether he may practice there', ['licensed only in Louisiana'], 'Overlooking licensure'),
      O('b', 'Continue sessions wherever she is, since his Louisiana license covers any client who lives in Louisiana.', -1,
        'Misunderstands jurisdiction', 'Residence-based licensure', 'Practice occurs where the client is located during the session', ['different states'], 'Assuming residence controls jurisdiction'),
      O('c', 'Record each session as delivered in Louisiana, since that is her home address and billing location.', -2,
        'Falsifies location', 'Inaccurate records', 'Recording a false location misrepresents where services occurred', ['truck stops'], 'Using documentation to avoid licensure rules'),
      O('d', 'Confirm her location each session and see her only where he holds a license or Compact privilege.', 3,
        'Licensure follows the client', 'License portability', 'He may only provide services where he is authorized, and he confirms location every session', ['out-of-state truck stops'], 'Ignoring where the client is located'),
    ]),
  ],
};

// ============================================================================
// D974 — Female Sexual Interest/Arousal Disorder (F52.22) — plan 4 — medium
// ============================================================================
const D974 = {
  id: 'ncmhce-D974',
  title: 'Keeping the marriage bed holy and finding desire again',
  category: 'Sexual-Gender',
  difficulty: 'medium',
  plan: 4,
  population: 'couple_family',
  primaryDiagnosis: { name: 'Female Sexual Interest/Arousal Disorder', code: 'F52.22' },
  diagnosis: { name: 'Female Sexual Interest/Arousal Disorder', code: 'F52.22' },
  differentialOptions: [
    { id: 'do1', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do2', name: 'Genito-Pelvic Pain/Penetration Disorder', isCorrect: false },
    { id: 'do3', name: 'Female Sexual Interest/Arousal Disorder', isCorrect: true },
    { id: 'do4', name: 'Sexual Dysfunction Due to Another Medical Condition', isCorrect: false },
  ],
  narrative: {
    intake:
      "Esther Okafor, 37, a middle-school math teacher, and her husband Daniel, 40, an IT project manager, are Nigerian American, married 11 years with two " +
      "children ages 7 and 4, and active members of a Pentecostal church in suburban Houston, where Daniel is a deacon. They seek couples counseling because " +
      "for about 14 months Esther has had little interest in sex, rarely has sexual thoughts, seldom initiates, and feels little arousal or pleasure when they " +
      "are intimate. She says she loves Daniel and is distressed: 'I feel broken.' Daniel feels rejected. He once suggested they watch explicit videos " +
      "together, which Esther believes is sinful; their pastor advised them to 'pray and keep the marriage bed holy.' Esther mentions fatigue, heavier " +
      "periods over the past year, and some vaginal dryness, and she has not seen her gynecologist in two years. The practice's couples consent form " +
      "describes a 'no secrets' policy for information shared individually. Their counselor, Amy, is not religious and privately views the church's teaching " +
      "on sexuality as restrictive; she has completed one graduate course in sexuality counseling but has no supervised sex therapy training.",
    session1:
      "Individual meetings find no coercion, threats, or violence; Esther says Daniel is gentle but she feels pressure 'because I know he's hurting,' and " +
      "Daniel says he feels 'like a roommate.' Esther's low desire began several months before the heavier periods. Neither reports depressed mood. The " +
      "couple wants goals 'that fit our faith' and asks that Pastor Adebayo, who has been counseling them informally, be kept informed. Both sign releases " +
      "for Esther's gynecologist and for the pastor, the latter limited to 'general progress and attendance.' They prefer to start with something that does " +
      "not involve explicit material.",
    session2:
      "The gynecologist finds mild iron-deficiency anemia, now being treated, and no other condition that explains the change in desire. The couple begins " +
      "sensate focus. In session Daniel says, 'I do everything right and she still pulls away,' and Esther goes quiet and turns away from him. Later Esther " +
      "asks, 'Is it a sin that I don't want him?' Two days afterward Daniel calls Amy alone and says he has been viewing explicit material online for months; " +
      "he asks her not to tell Esther. Daniel also asks whether Amy could 'list me with anxiety' so that his employer insurance will cover more sessions.",
  },
  diagnosticRationale:
    "For about 14 months Esther has had absent or reduced sexual interest, few sexual thoughts, rare initiation and low receptivity, and reduced arousal and " +
    "pleasure during sexual activity (at least three of the six indicators, for more than six months), with clinically significant distress. Individual " +
    "screening found no partner violence or coercion, she does not report depressed mood, and gynecologic evaluation found no medical condition that " +
    "explains the change (the treated anemia does not account for symptoms that began earlier). Relationship strain and religious meaning are important " +
    "context but do not fully explain the disturbance. Female sexual interest/arousal disorder (F52.22) fits.",
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Female sexual interest/arousal disorder: 3 of 6 indicators, 6+ months, distress; not better explained by a nonsexual mental disorder, relationship distress or partner violence, substance, or medical condition' },
    { id: 'R2', source: 'ACA Code of Ethics', detail: 'A.4.b personal values; B.4.b couples and family counseling confidentiality agreements; C.2.a competence; A.2 informed consent' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Individual screening for partner violence and coercion before conjoint work' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Couples and family systems approaches; sensate focus; integrating spirituality and client worldview' },
    { id: 'R5', source: 'HIPAA', detail: 'Authorization scope and minimum necessary disclosure to non-clinical parties and other providers' },
    { id: 'R6', source: 'Wiger (Documentation)', detail: 'Medical necessity documentation and accurate diagnosis for third-party reimbursement' },
    { id: 'R7', source: 'NBCC 2027 Spec', detail: 'Work tasks: couples/family counseling, collaboration with non-clinical stakeholders, billing and reimbursement documentation' },
  ],
  questions: [
    // ---------------- intake (assess, assess, profdev, profdev) ----------------
    Q(1, 'assess', 'intake', 'Which step is most important when obtaining consent for couples counseling with Esther and Daniel?', ['R2', 'R7'], [
      O('a', 'Have both partners sign the couples consent form and offer to answer questions as they come up later.', 0,
        'Signature without discussion', 'Form-based consent', 'Signatures matter, but the no-secrets policy should be discussed before it is relied on', ['no secrets policy'], 'Treating a signed form as understanding'),
      O('b', 'Review the no-secrets policy with both partners together and confirm each agrees before individual contact.', 3,
        'Explicit confidentiality agreement', 'Informed consent for couples work', 'Couples counseling requires clear agreements about how individually shared information is handled', ['no secrets policy', 'individual meetings planned'], 'Leaving confidentiality rules unclear in couples work'),
      O('c', 'Obtain consent from Esther alone, since she is the partner with the diagnosis and focus of treatment.', -1,
        'Excludes a participant', 'Single-partner consent', 'Both partners participate and must consent', ['couples counseling'], 'Treating the identified patient as the only client'),
      O('d', 'Start counseling now and review consent and confidentiality limits once the couple feels more settled.', -2,
        'No informed consent', 'Delay consent', 'Treatment should not begin before informed consent', ['first session'], 'Delaying consent for rapport'),
    ]),
    Q(2, 'assess', 'intake', 'Which assessment step is most important before conjoint work on sexual concerns begins?', ['R3', 'R1'], [
      O('a', 'Meet with each partner individually to screen for coercion or partner violence and other contributing factors.', 3,
        'Individual safety screening', 'Screen for partner violence', 'Individual screening is needed before conjoint sexual work and to rule out partner violence as an explanation', ['Daniel feels rejected', 'conjoint sexual work planned'], 'Starting couples sexual work without safety screening'),
      O('b', 'Complete a detailed joint sexual history covering desire, arousal, and pleasure with both partners present.', 0,
        'Useful but incomplete', 'Joint history', 'A joint history is useful but cannot reveal coercion a partner may not disclose in front of the other', ['joint format'], 'Assuming joint interviews capture safety concerns'),
      O('c', 'Ask the pastor for his view of the couple’s relationship, since he has known them both for many years.', -1,
        'Collateral without consent', 'Pastor as informant', 'Contacting the pastor without consent breaches confidentiality', ['no release yet'], 'Seeking collateral before consent'),
      O('d', 'Begin sensate focus right away, since their pastor’s advice suggests no safety concerns in the home.', -2,
        'Skips screening', 'Assume safety', 'No one has screened for coercion; pastoral advice is not a safety assessment', ['no individual screening yet'], 'Assuming safety without screening'),
    ]),
    Q(3, 'profdev', 'intake', 'How should Amy handle her private view of the church’s teaching on sexuality?', ['R2'], [
      O('a', 'Disclose that she is not religious so the couple can decide whether they want a counselor of their faith.', 0,
        'Transparent but unnecessary', 'Values disclosure', 'Disclosure may be appropriate if asked, but bracketing her view is the essential step', ['private view'], 'Treating disclosure as a substitute for bracketing'),
      O('b', 'Gently help Esther consider whether her religious beliefs are causing her low interest in sex.', -1,
        'Subtle value imposition', 'Challenge beliefs', 'Steering her toward questioning faith reflects Amy’s values, not her goals', ['wants goals that fit faith'], 'Imposing values under the guise of exploration'),
      O('c', 'Recognize the view as her own value, keep it out of treatment goals, and process it in supervision.', 3,
        'Bracket personal values', 'Self-reflection', 'Counselors avoid imposing values and seek supervision when values could affect care', ['views teaching as restrictive'], 'Letting values shape goals'),
      O('d', 'Encourage the couple to try the explicit videos, since many couples find them helpful for desire.', -2,
        'Overrides client values', 'Counselor-preferred intervention', 'This disregards Esther’s stated beliefs and imposes Amy’s values', ['believes it is sinful'], 'Recommending what violates client values'),
    ]),
    Q(4, 'profdev', 'intake', 'Which step best addresses Amy’s level of training for this case?', ['R2', 'R7'], [
      O('a', 'Refer the couple to a certified sex therapist at once, since she lacks supervised sex therapy training.', 0,
        'Acceptable but premature', 'Immediate referral', 'Referral is reasonable but not required when consultation can support competent care', ['some coursework'], 'Assuming any training gap requires referral'),
      O('b', 'Use the general couples approach she knows best and avoid detailed discussion of their sexual relationship.', -1,
        'Avoids the problem', 'Avoid sexual content', 'Avoiding the presenting problem leaves the core concern untreated', ['FSIAD'], 'Avoiding topics outside comfort'),
      O('c', 'Present herself as a sex therapist, since her graduate course gives her enough knowledge for this case.', -2,
        'Misrepresents credentials', 'Overstate competence', 'Misrepresenting qualifications is unethical', ['one course only'], 'Overstating competence'),
      O('d', 'Obtain consultation from a clinician trained in sex therapy and pursue focused training while treating.', 3,
        'Consultation and training', 'Develop competence', 'Consultation and training let her provide care competently', ['no supervised sex therapy training'], 'Practicing outside competence without support'),
    ]),
    // ---------------- session1 (planning, planning, indirect, indirect) ----------------
    Q(5, 'planning', 'session1', 'Which initial plan best fits the couple’s needs?', ['R1', 'R4'], [
      O('a', 'A gynecology referral to rule out medical contributors, with sensate focus and goals that fit their faith.', 3,
        'Medical rule-out plus treatment', 'Integrated plan', 'Medical evaluation addresses dryness, fatigue, and bleeding while sensate focus fits their values', ['vaginal dryness', 'heavier periods'], 'Skipping medical evaluation'),
      O('b', 'Sensate focus and communication work first, adding a medical referral if her desire has not improved.', 0,
        'Delays medical rule-out', 'Behavioral first', 'Physical symptoms warrant evaluation now, not later', ['no gynecology visit in two years'], 'Sequencing medical evaluation too late'),
      O('c', 'Individual cognitive therapy for Esther’s guilt about sex, with Daniel joining later in treatment.', -1,
        'Narrow focus', 'Individual focus', 'This splits a relational problem and frames faith as guilt', ['couple seeks help together'], 'Pathologizing faith-related values'),
      O('d', 'Have Daniel initiate intercourse on a set schedule to rebuild Esther’s desire through repetition.', -2,
        'Increases pressure', 'Scheduled intercourse', 'Pressure worsens desire problems and risks coercion', ['feels pressure'], 'Treating desire as habit'),
    ]),
    Q(6, 'planning', 'session1', 'How should Amy integrate the couple’s faith into the treatment plan?', ['R4', 'R2'], [
      O('a', 'Note their faith in the plan, keeping goals focused on desire and arousal as standard outcomes.', 0,
        'Acknowledges but does not integrate', 'Note only', 'Listing faith without shaping goals misses their request', ['goals that fit our faith'], 'Treating culture as a note rather than a guide'),
      O('b', 'Ask the pastor to set the treatment goals, since the couple wants goals that fit their faith.', -1,
        'Shifts responsibility', 'Pastor-led goals', 'The couple and counselor set goals together; the pastor has a limited release', ['release limited'], 'Outsourcing goal-setting'),
      O('c', 'Set a goal of easing Esther’s religious restrictions on sex, since these likely limit her desire.', -2,
        'Imposes values', 'Change beliefs', 'Targeting her faith imposes the counselor’s values', ['faith central'], 'Making faith the problem'),
      O('d', 'Ask how their faith shapes intimacy and write goals in their terms, such as closeness within marriage.', 3,
        'Values-congruent goals', 'Integrate culture', 'Goals in their own terms respect their faith and build engagement', ['goals that fit our faith'], 'Writing goals that ignore values'),
    ]),
    Q(7, 'indirect', 'session1', 'How should Amy coordinate with Esther’s gynecologist?', ['R5', 'R1'], [
      O('a', 'Ask Esther to share the gynecologist’s findings herself at the next session once the visit is done.', 0,
        'Passive coordination', 'Client relays findings', 'Esther can share findings, but direct coordination is authorized and more reliable', ['release signed'], 'Underusing an authorized release'),
      O('b', 'Send a brief summary of her symptoms and the medical questions, and ask for findings relevant to care.', 3,
        'Focused coordination', 'Collaborate with providers', 'A focused summary helps the physician evaluate contributors', ['dryness', 'fatigue'], 'Sending too much or too little'),
      O('c', 'Send the gynecologist the full couples record so the physician understands the relationship context.', -1,
        'Over-disclosure', 'Full record', 'The full record includes Daniel’s information and exceeds need', ['minimum necessary'], 'Assuming more is better'),
      O('d', 'Suggest the gynecologist prescribe a desire medication, since her symptoms fit the diagnosis.', -2,
        'Outside scope', 'Medication recommendation', 'Recommending prescriptions is outside counselor scope', ['physician role'], 'Directing medical care'),
    ]),
    Q(8, 'indirect', 'session1', 'Pastor Adebayo calls asking how the couple’s sexual relationship is going. How should Amy respond?', ['R5', 'R7'], [
      O('a', 'Decline to say anything and tell the pastor to speak with the couple directly for updates.', 0,
        'Overly restrictive', 'No disclosure', 'The release permits general progress and attendance', ['release signed'], 'Ignoring an authorized release'),
      O('b', 'Share that Esther’s desire is slowly improving, since the couple asked for the pastor to be kept informed.', -1,
        'Exceeds release', 'Clinical detail', 'Details about desire exceed general progress', ['release limited'], 'Stretching the release'),
      O('c', 'Share only general progress and attendance as the release allows, and invite the couple to share more.', 3,
        'Within release', 'Collaborate with non-clinical stakeholders', 'Limited disclosure honors both the release and the couple’s wishes', ['general progress and attendance'], 'Sharing beyond authorization'),
      O('d', 'Describe the sensate focus exercises so that the pastor can support and encourage them at church.', -2,
        'Unauthorized intimate details', 'Detailed disclosure', 'Sharing intimate treatment details breaches confidentiality', ['release limited'], 'Assuming a release covers everything'),
    ]),
    // ---------------- session2 (interventions x3, legal x2) ----------------
    Q(9, 'interventions', 'session2', 'Which instruction best fits the first stage of sensate focus?', ['R4'], [
      O('a', 'Schedule weekly intimate time and allow intercourse if both partners feel ready during the exercise.', 0,
        'Lacks the intercourse ban', 'Flexible intimacy', 'Allowing intercourse reintroduces performance demand', ['set aside intercourse'], 'Dropping the non-demand frame'),
      O('b', 'Begin with genital touch to rebuild arousal quickly, then move to non-genital touch as she relaxes.', -1,
        'Reverses sequence', 'Genital first', 'Sensate focus begins with non-genital touch', ['first stage'], 'Reversing the sequence'),
      O('c', 'Have Esther continue the touch exercises even when uncomfortable, so that she can work through it.', -2,
        'Coercive', 'Push through', 'Continuing despite discomfort undermines safety and consent', ['feels pressure'], 'Treating discomfort as resistance'),
      O('d', 'Take turns giving and receiving non-genital touch, attending to sensation with no goal of arousal.', 3,
        'Non-demand touch', 'Sensate focus stage one', 'Non-genital, non-demand touch reduces pressure and builds awareness', ['set aside intercourse'], 'Adding performance goals'),
    ]),
    Q(10, 'interventions', 'session2', 'Daniel says he does everything right and Esther still pulls away; she goes quiet and turns away. What is the best response?', ['R4'], [
      O('a', 'Teach both partners a speaker-listener technique and have them practice it at home this week.', 0,
        'Useful skill, poor timing', 'Communication skill', 'Skill-building helps, but the live cycle needs attention first', ['in-session withdrawal'], 'Moving to homework during a live cycle'),
      O('b', 'Slow the exchange, reflect Daniel’s hurt beneath the blame, and invite Esther to share what she feels.', 3,
        'Work with the cycle', 'Dynamic couples intervention', 'Slowing the cycle and reaching underlying emotion helps both partners feel heard', ['pursue-withdraw pattern'], 'Taking sides'),
      O('c', 'Ask Esther why she keeps pulling away when Daniel is doing so much to make things right for the two of them.', -1,
        'Blames Esther', 'Question the withdrawer', 'This sides with Daniel and intensifies her withdrawal', ['turns away'], 'Siding with one partner'),
      O('d', 'Agree with Daniel that Esther needs to engage more, since he is clearly putting in so much effort to change.', -2,
        'Reinforces pressure', 'Side with pursuer', 'This adds pressure and undermines the non-demand frame', ['feels pressure'], 'Colluding with pursuit'),
    ]),
    Q(11, 'interventions', 'session2', 'Esther asks whether it is a sin that she does not want Daniel. What is the best response?', ['R4', 'R2'], [
      O('a', 'Explore what her faith teaches about desire and intimacy and how she understands it, without a ruling.', 3,
        'Explore worldview', 'Culturally responsive exploration', 'Exploring her beliefs honors her faith without imposing a judgment', ['asks if it is a sin'], 'Answering a theological question for her'),
      O('b', 'Suggest she bring the question to Pastor Adebayo, since questions of sin belong to her faith leader.', 0,
        'Appropriate referral but premature', 'Refer to clergy', 'Clergy may help, but exploring her meaning first keeps her engaged', ['asked counselor'], 'Deflecting too quickly'),
      O('c', 'Reassure her that low desire is a medical issue and has nothing to do with sin or with her faith.', -1,
        'Dismisses her frame', 'Medicalize', 'This dismisses her religious meaning-making', ['faith central'], 'Overriding her worldview'),
      O('d', 'Tell her that her religious views are likely causing the problem and she should set them aside.', -2,
        'Imposes values', 'Faith as problem', 'This imposes the counselor’s values and harms the alliance', ['faith central'], 'Pathologizing faith'),
    ]),
    Q(12, 'legal', 'session2', 'Daniel calls alone, discloses months of viewing explicit material, and asks Amy not to tell Esther. What should Amy do?', ['R2'], [
      O('a', 'Tell Daniel that Amy will share his disclosure with Esther at the next joint session as the policy allows.', 0,
        'Policy-consistent but abrupt', 'Counselor disclosure', 'The policy permits sharing, but supporting Daniel to disclose is preferred', ['no secrets policy'], 'Disclosing without first supporting client disclosure'),
      O('b', 'Ask Daniel to stop viewing the material, and keep the disclosure private since it is not about Esther.', -1,
        'Breaks agreed policy', 'Selective secrecy', 'Keeping the secret contradicts the agreed no-secrets policy', ['no secrets policy'], 'Deciding what counts as relevant'),
      O('c', 'Remind Daniel of the no-secrets policy and support him in disclosing it to Esther in session within a set time.', 3,
        'Follow agreed policy', 'Couples confidentiality agreement', 'The agreed policy guides the response, and supporting his disclosure protects the work', ['no secrets policy', 'asks not to tell'], 'Keeping secrets in couples work'),
      O('d', 'Agree to keep his secret, since revealing it could end the marriage and that would harm both partners.', -2,
        'Colludes in secrecy', 'Keep secret', 'Keeping the secret violates the agreement and triangulates the counselor', ['no secrets policy'], 'Prioritizing short-term peace over integrity'),
    ]),
    Q(13, 'legal', 'session2', 'Daniel asks Amy to list him with anxiety so his insurance will cover more sessions. How should she bill?', ['R6', 'R7'], [
      O('a', 'Advise the couple to pay out of pocket, since sexual concerns are not usually covered by insurance plans.', -1,
        'Inaccurate assumption', 'Self-pay', 'Coverage depends on the plan; this assumption may deny her benefits', ['family coverage'], 'Assuming no coverage'),
      O('b', 'Ask the insurer whether conjoint sessions are covered under Esther’s diagnosis before billing them.', 0,
        'Reasonable step', 'Verify benefits', 'Verifying benefits is wise but does not address the request for a false diagnosis', ['request to list anxiety'], 'Not addressing the fraud request'),
      O('c', 'List anxiety for Daniel as he asks, since he does feel worried and more sessions would help the couple.', -2,
        'Insurance fraud', 'False diagnosis', 'Assigning an unsupported diagnosis for billing is fraud', ['no assessment of Daniel'], 'Rationalizing fraud'),
      O('d', 'Bill conjoint sessions under Esther’s diagnosis with documented medical necessity and decline his request.', 3,
        'Accurate billing', 'Documentation supports reimbursement', 'Claims must reflect accurate diagnoses supported by documentation', ['Esther’s diagnosis', 'conjoint sessions'], 'Fabricating diagnoses'),
    ]),
  ],
};

module.exports = { CASES: [D970, D971, D972, D973, D974] };
