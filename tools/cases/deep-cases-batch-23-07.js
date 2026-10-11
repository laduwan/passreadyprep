// deep-cases-batch-23-07.js — NCMHCE deep case: Worry that outgrew the workplace (focus: Racism/discrimination/oppression)
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Id block D901–D910 reserved
// for the Oct 2026 Areas-of-Clinical-Focus fill (live DB generator was at D314).
//
// ncmhce-D907 · Anxiety · medium · adult · Generalized Anxiety Disorder (F41.1)
// Medium complications: (1) the differential turns on separating a realistic
// response to workplace discrimination from worry that has generalized and
// become excessive; (2) a prior police traffic stop needs a racial-trauma /
// PTSD rule-out. Standalone deliverable for SME review. Do NOT auto-import.

const O = (id, text, weight, ex) => ({
  id,
  text,
  isCorrect: weight === 3,
  weight,
  rationale: ex.r,
  explanation: { approach: ex.approach, rationale: ex.why, keyIndicators: ex.keys, commonMistake: ex.mistake },
});
const Q = (id, domain, question, evidenceRef, options) => ({ id, domain, question, evidenceRef, options });

const D907 = {
  id: 'ncmhce-D907',
  title: 'Worry that outgrew the workplace: an engineer facing repeated microaggressions',
  category: 'Anxiety',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Generalized Anxiety Disorder', code: 'F41.1' },
  diagnosis: { name: 'Generalized Anxiety Disorder', code: 'F41.1' },
  differentialOptions: [
    { id: 'do1', name: 'Generalized Anxiety Disorder', isCorrect: true },
    { id: 'do2', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
    { id: 'do3', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do4', name: 'Paranoid Personality Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Terrence Bell, a 34-year-old Black American controls engineer at an aerospace components manufacturer outside Atlanta, self-refers to ' +
      'Dana Kowalski, LPC, a 41-year-old White counselor in a suburban group practice. He grew up in Macon, was the first in his family to finish ' +
      'college, and is married to Aisha, a pediatric nurse; they have a 4-year-old daughter and attend an AME church. For about ten months he has ' +
      'worried most days and cannot shut it off: being passed over twice for a lead-engineer role, his performance reviews, the mortgage, his ' +
      'widowed mother\'s diabetes, and his daughter\'s safety at preschool. He reports neck and jaw tension, restlessness, irritability with Aisha, ' +
      'poor concentration, and trouble falling asleep most nights. He describes repeated microaggressions: being asked if he was "the IT guy," ' +
      'being called "so articulate," and a manager labeling his direct feedback "aggressive." He chose not to use the company EAP because he is ' +
      'unsure it is separate from HR. In the first session Dana names their racial difference and asks how being Black shapes his experience at work.',
    session1:
      'Terrence says he had wondered whether a White counselor "would get it." He describes a design review in which his proposed fix was ignored ' +
      'until a White colleague restated it and was credited, then asks, "Am I just being paranoid?" He also recalls a traffic stop four years ago ' +
      'in which an officer drew a weapon on him. He tenses when he sees patrol cars but denies nightmares, flashbacks, avoidance of driving, or ' +
      'ongoing hypervigilance. His GAD-7 score is 15. On the C-SSRS screen he denies suicidal ideation, intent, or any history of attempts. ' +
      'Strengths include his church community, an NSBE alumni network of Black engineers, and a close cousin he talks with weekly.',
    session2:
      'Terrence notes that the worry started at work but now he lies awake rehearsing worst cases about money, his mother, his daughter, and even ' +
      'weekend plans, and he checks work email at 2 a.m. He is deciding whether to file a formal complaint and asks Dana to write HR a letter ' +
      'stating that discrimination caused his anxiety. While he talks, Dana notices an urge to suggest his manager "may not have meant it that ' +
      'way," and she recognizes the urge as something to examine in consultation rather than act on.',
  },
  diagnosticRationale:
    'Excessive, hard-to-control worry across multiple domains (work, finances, his mother\'s health, his daughter\'s safety, daily plans) more ' +
    'days than not for about ten months, with muscle tension, restlessness, irritability, poor concentration, and sleep-onset insomnia, meets ' +
    'DSM-5-TR criteria for generalized anxiety disorder. His concerns about workplace discrimination are realistic appraisals of real events and ' +
    'are not themselves the pathology; the diagnosis rests on worry that has generalized well beyond that context and become uncontrollable. ' +
    'Because full criteria for another disorder are met, adjustment disorder is not given. Reactions to the traffic stop are subthreshold for PTSD, ' +
    'and his race-related vigilance reflects lived experience rather than the pervasive, unfounded distrust of paranoid personality disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'GAD criteria A–F; adjustment disorder exclusion when another disorder is met; PTSD Criterion A (threatened death) and B–E clusters; Cultural Formulation' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Generalised anxiety disorder (CG113): stepped care, individual CBT as high-intensity psychological intervention, routine outcome monitoring' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening at intake regardless of presenting disorder' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.4.b personal values; A.7.a–b advocacy and consent before advocating for an identifiable client; A.11.b values-based referral; C.2.a multicultural competence; E.5.b–c cultural sensitivity and historical prejudice in diagnosis' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Multicultural perspective on CBT and the alliance: broaching, cultural humility and cultural opportunities (MCO), culturally adapted cognitive work, social justice and advocacy (MSJCC)' },
    { id: 'R6', source: 'Hays (Assessment)', detail: 'Culturally responsive assessment, assessment of race-based stress and trauma, GAD-7 and measurement-based progress monitoring' },
  ],
  questions: [
    // ---------------- Assessment & Conceptualization (5) ----------------
    Q('q1', 'intake', 'At the first session, what is the most appropriate way for Dana to address race and cultural identity with Terrence?', ['R5', 'R4'], [
      O('a', 'Wait to discuss race until Terrence raises it himself, so the counselor does not impose the topic on him', -1,
        { r: 'Waiting shifts the burden to the client', approach: 'Client-initiated framing', why: 'Leaving race for the client to raise puts the burden on him and can signal the topic is unwelcome, especially across a racial difference', keys: ['White counselor, Black client', 'race-related work stress'], mistake: 'Treating silence about race as neutral rather than as a message to the client' }),
      O('b', 'Broach race and her own identity early, inviting him to share how being Black shapes his stress at work', 3,
        { r: 'Broach race and identity early', approach: 'Broach openly and invite', why: 'Broaching race and the counselor\'s own identity early signals that cultural context is welcome and strengthens the alliance, a core multicultural competence', keys: ['microaggressions at work', 'racial difference in the dyad'], mistake: 'Avoiding race out of discomfort, or raising it only as a checkbox' }),
      O('c', 'Add an item on race to the intake paperwork and return to it later only if it seems clinically relevant', 0,
        { r: 'Paperwork does not equal broaching', approach: 'Form-based framing', why: 'Recording race is reasonable but does not open a conversation about how identity shapes his concerns, which is already clearly relevant', keys: ['race central to presenting concern'], mistake: 'Confusing demographic data collection with broaching' }),
      O('d', 'Tell him she is colorblind and treats every client the same, so race will not affect their work together', -2,
        { r: 'Colorblind stance invalidates', approach: 'Colorblind framing', why: 'A colorblind stance dismisses his lived experience of racism and undermines trust; it runs against multicultural competence', keys: ['discrimination is the context'], mistake: 'Believing that ignoring race is the same as being unbiased' }),
    ]),
    Q('q2', 'core', 'Which finding most supports generalized anxiety disorder rather than a proportionate response to discrimination?', ['R1'], [
      O('a', 'His worry has spread past work to money, his mother, and his daughter, feels hard to control, and spans ten months', 3,
        { r: 'Generalized, uncontrollable, chronic worry', approach: 'Confirm the GAD pattern', why: 'GAD requires excessive, hard-to-control worry about multiple domains more days than not for six months; his worry now extends far beyond the discriminatory events', keys: ['worry about money, mother, daughter, plans', 'ten months', 'cannot shut it off'], mistake: 'Locating the disorder in his reaction to racism rather than in worry that has generalized' }),
      O('b', 'He reports that microaggressions at work are frequent, and he believes he was passed over because of race', -1,
        { r: 'Realistic concerns are not the criterion', approach: 'Stressor framing', why: 'Frequent microaggressions describe his environment, not the excessive generalized worry that defines GAD', keys: ['describes context, not pathology'], mistake: 'Using the stressor itself as diagnostic evidence' }),
      O('c', 'He scores 15 on the GAD-7, which places his self-reported anxiety symptoms at the cutoff for the severe range of the scale', 0,
        { r: 'A screener supports but does not diagnose', approach: 'Screening-score framing', why: 'A GAD-7 of 15 is consistent with GAD but a screening score does not establish the criteria or separate GAD from a proportionate stress response', keys: ['screening, not diagnosis'], mistake: 'Treating a screening cutoff as the diagnostic discriminator' }),
      O('d', 'He reads his manager\'s feedback as racially biased, which suggests a pattern of suspicious misreading', -2,
        { r: 'Pathologizes a realistic appraisal', approach: 'Suspicion framing', why: 'Treating his perception of bias as misreading pathologizes a plausible appraisal and repeats a historical diagnostic prejudice', keys: ['"aggressive" label is a known stereotype'], mistake: 'Pathologizing a realistic response to discrimination' }),
    ]),
    Q('q3', 'core', 'Terrence believes he was passed over because of race. For diagnostic purposes, this belief is best understood as:', ['R1', 'R4'], [
      O('a', 'Evidence of pervasive distrust consistent with paranoid personality disorder, given his suspicion of coworkers', -2,
        { r: 'Misapplies a personality diagnosis', approach: 'Personality-pathology framing', why: 'Paranoid personality disorder requires pervasive, unfounded distrust across contexts; a grounded appraisal of workplace bias is not that, and the misattribution reflects a known historical prejudice', keys: ['close ties to church, cousin, NSBE', 'grounded in specific events'], mistake: 'Reading realistic vigilance about racism as paranoia' }),
      O('b', 'A cognitive distortion to target first in CBT, since unproven attributions of bias tend to maintain his worry', -1,
        { r: 'Labels a plausible appraisal a distortion', approach: 'Distortion framing', why: 'Calling a plausible race-related appraisal a distortion invalidates him; CBT targets the excessive, generalized worry, not his reading of real events', keys: ['repeated, specific incidents'], mistake: 'Applying standard restructuring without cultural adaptation' }),
      O('c', 'A belief to set aside, since the counselor\'s role is the anxiety and not judging events at his workplace', 0,
        { r: 'Neutral but incomplete', approach: 'Bracketing framing', why: 'Not adjudicating events is right, but setting the belief aside misses that his appraisal is plausible and that it is distinct from the generalized worry', keys: ['context matters to formulation'], mistake: 'Ignoring cultural context in case conceptualization' }),
      O('d', 'A plausible appraisal grounded in real experiences, and distinct from the excessive worry that defines GAD', 3,
        { r: 'Plausible appraisal, separate from GAD', approach: 'Contextualize without pathologizing', why: 'His appraisal fits repeated, specific experiences; the GAD diagnosis rests on worry that has become excessive and generalized, consistent with avoiding historical prejudice in diagnosis', keys: ['credit taken in design review', '"aggressive" label', 'worry now spans many domains'], mistake: 'Either pathologizing his perception of racism or letting it obscure the generalized worry' }),
    ]),
    Q('q4', 'intake', 'Given the traffic stop four years ago in which an officer drew a weapon, what is the most appropriate assessment step?', ['R1', 'R6'], [
      O('a', 'Note the traffic stop in his history and revisit it later if trauma symptoms emerge as treatment goes on', 0,
        { r: 'Documenting is not assessing', approach: 'Defer framing', why: 'Recording the event is appropriate but leaves PTSD and racial trauma unassessed when the history already warrants screening', keys: ['weapon drawn', 'tenses at patrol cars'], mistake: 'Deferring a rule-out the history already calls for' }),
      O('b', 'Begin trauma-focused processing of the stop now, since racial trauma likely explains all of his anxiety', -2,
        { r: 'Treats before assessing', approach: 'Premature trauma-processing framing', why: 'Starting trauma processing without assessment assumes a diagnosis he does not meet and bypasses the generalized worry that is driving impairment', keys: ['denies intrusions and avoidance'], mistake: 'Choosing an intervention before the assessment supports it' }),
      O('c', 'Assess racial stress and trauma, screening the stop for intrusion, avoidance, and arousal per PTSD criteria', 3,
        { r: 'Assess racial trauma and rule out PTSD', approach: 'Structured trauma rule-out', why: 'A drawn weapon can meet Criterion A; the counselor screens for intrusion, avoidance, cognition/mood, and arousal changes and also assesses cumulative race-based stress', keys: ['threatened death at the stop', 'cumulative microaggressions'], mistake: 'Skipping a trauma screen or assuming the event explains everything' }),
      O('d', 'Skip the topic, since a traffic stop with no physical injury does not count as a traumatic event under DSM-5-TR', -1,
        { r: 'Misreads Criterion A', approach: 'Criterion-A dismissal framing', why: 'Exposure to threatened death qualifies under Criterion A even without injury, so the event cannot be dismissed on that basis', keys: ['weapon drawn on him'], mistake: 'Believing physical injury is required for Criterion A' }),
    ]),
    Q('q5', 'intake', 'Terrence presents as anxious rather than depressed. How should Dana address suicide risk at this stage?', ['R3'], [
      O('a', 'Screen directly with a structured tool such as the C-SSRS and document the result, as with any intake', 3,
        { r: 'Structured screen for every client', approach: 'Screen directly and document', why: 'Suicide risk is screened with a structured tool at intake regardless of the presenting disorder, and the result is documented', keys: ['insomnia and chronic distress', 'standard intake practice'], mistake: 'Skipping a structured screen because the picture looks purely anxious' }),
      O('b', 'Have him sign an agreement promising not to harm himself, then move on to his concerns about work', -2,
        { r: 'No-suicide contracts are not supported', approach: 'Contract framing', why: 'No-suicide contracts lack evidence and can create false reassurance; structured assessment and, when indicated, collaborative safety planning are the standard', keys: ['assessment, not contracts'], mistake: 'Substituting a no-harm contract for assessment' }),
      O('c', 'Defer risk questions until trust grows, since asking early may feel intrusive across a racial difference', -1,
        { r: 'Delaying safety is unsafe', approach: 'Rapport-first framing', why: 'Concern for rapport does not justify deferring risk screening; asking directly and respectfully can itself build trust', keys: ['safety screening at intake'], mistake: 'Letting cultural discomfort delay safety assessment' }),
      O('d', 'Ask one open question about how he is coping and probe further only if he mentions feeling hopeless', 0,
        { r: 'Indirect probing can miss risk', approach: 'Open-question framing', why: 'An open coping question is useful but does not replace direct, structured inquiry about ideation, intent, and history', keys: ['direct questions needed'], mistake: 'Relying on the client to volunteer risk' }),
    ]),

    // ---------------- Treatment Planning (4) ----------------
    Q('q6', 'treatment', 'Which treatment approach is most appropriate for Terrence?', ['R2', 'R5'], [
      O('a', 'Focus on relaxation and sleep hygiene alone, since the worry is a fair reaction to conditions at work', -1,
        { r: 'Under-treats a diagnosed disorder', approach: 'Symptom-only framing', why: 'Validating his context does not mean leaving generalized, uncontrollable worry untreated; GAD warrants evidence-based psychotherapy', keys: ['worry spans many domains', 'GAD-7 of 15'], mistake: 'Letting validation of racism replace treatment of GAD' }),
      O('b', 'Advise him to leave his job, since removing the main stressor is the fastest route to easing his anxiety', -2,
        { r: 'Directive and imposes a choice', approach: 'Remove-the-stressor framing', why: 'Directing a major life decision overrides his autonomy, and his worry has already generalized beyond work, so leaving would not treat GAD', keys: ['client is weighing his own options'], mistake: 'Imposing the counselor\'s solution and misreading the disorder as purely situational' }),
      O('c', 'Offer CBT for GAD adapted to validate racial stress, target generalized worry, and draw on his supports', 3,
        { r: 'Culturally adapted CBT for GAD', approach: 'Evidence-based care, culturally adapted', why: 'CBT is first-line for GAD; adapting it to name racial stress as real, target excessive generalized worry, and build on church, family, and NSBE supports fits both the evidence and his context', keys: ['realistic discrimination', 'generalized worry', 'strong community supports'], mistake: 'Delivering CBT that ignores racism, or validating racism without treating GAD' }),
      O('d', 'Offer standard manualized CBT for GAD and address discrimination only if it comes up in session', 0,
        { r: 'Right modality, missing adaptation', approach: 'Unadapted protocol framing', why: 'CBT is the right modality, but leaving racism out of the plan ignores the context that shapes his worry and risks invalidating him', keys: ['discrimination is central'], mistake: 'Assuming an unadapted protocol fits every client' }),
    ]),
    Q('q7', 'treatment', 'During cognitive restructuring, how should Dana handle Terrence\'s thoughts about his workplace?', ['R5', 'R2'], [
      O('a', 'Start with worry exposure and scheduled worry periods, leaving his thoughts about work for later sessions', 0,
        { r: 'Useful tools, avoids the core material', approach: 'Sequencing framing', why: 'Worry periods are valid GAD tools, but postponing his work-related thoughts sidesteps the material most tied to his distress', keys: ['work is where the worry began'], mistake: 'Avoiding race-related content by deferring it' }),
      O('b', 'Separate accurate appraisals of bias from catastrophic leaps, like "we will lose the house," and test those', 3,
        { r: 'Validate the appraisal, test the catastrophe', approach: 'Culturally adapted restructuring', why: 'Adapted CBT treats his reading of bias as accurate while testing the catastrophic, generalized predictions that drive GAD', keys: ['realistic bias', 'catastrophic money and family worries'], mistake: 'Treating every work-related thought as a distortion, or none of them' }),
      O('c', 'Challenge his race-related attributions as unproven until he can show clear evidence of discrimination', -2,
        { r: 'Invalidates and re-traumatizes', approach: 'Burden-of-proof framing', why: 'Demanding proof of discrimination invalidates his experience, damages the alliance, and pathologizes a realistic response', keys: ['repeated specific incidents'], mistake: 'Using restructuring to dispute the reality of racism' }),
      O('d', 'Avoid restructuring work thoughts at all and focus only on worries about money, his mother, and his child', -1,
        { r: 'Leaves a major worry domain untouched', approach: 'Avoidance framing', why: 'His work worries include catastrophic predictions that can be tested respectfully; avoiding them leaves part of the GAD untreated', keys: ['2 a.m. email checking'], mistake: 'Over-correcting into avoidance of race-related material' }),
    ]),
    Q('q8', 'treatment', 'Terrence says he feels powerless at work. Which goal best fits the MSJCC and the ACA Advocacy Competencies?', ['R5', 'R4'], [
      O('a', 'Teach him to manage reactions to microaggressions so he stays calm, without examining the workplace context', -1,
        { r: 'Individualizes a systemic problem', approach: 'Coping-only framing', why: 'Coping skills alone place the problem inside him and ignore the systemic context the MSJCC asks counselors to address', keys: ['repeated workplace bias'], mistake: 'Framing adaptation to oppression as the whole goal' }),
      O('b', 'Contact his employer to report the discrimination on his behalf, since advocacy is an ethical duty', -2,
        { r: 'Advocacy without consent or client voice', approach: 'Unilateral advocacy framing', why: 'Advocating for an identifiable client requires his consent, and acting for him bypasses the empowerment the competencies prioritize', keys: ['he is deciding whether to file'], mistake: 'Advocating on the client\'s behalf without consent' }),
      O('c', 'Refer him to an employment attorney and keep counseling focused strictly on his anxiety symptoms', 0,
        { r: 'Useful referral, narrow role', approach: 'Refer-and-narrow framing', why: 'A legal resource may help, but limiting counseling to symptoms misses client-level empowerment work that fits his goals', keys: ['wants to feel less powerless'], mistake: 'Treating advocacy as entirely outside the counselor\'s role' }),
      O('d', 'Build self-advocacy skills and map his options, such as documenting incidents and using his NSBE network', 3,
        { r: 'Client-level empowerment', approach: 'Empowerment and self-advocacy', why: 'The client/student empowerment level of the ACA Advocacy Competencies and the MSJCC call for helping him identify barriers, build self-advocacy skills, and use his own resources', keys: ['NSBE network', 'deciding about a complaint'], mistake: 'Either ignoring systemic barriers or taking over the client\'s choices' }),
    ]),
    Q('q9', 'treatment', 'How should Dana monitor Terrence\'s progress over the course of treatment?', ['R2', 'R6'], [
      O('a', 'Track the GAD-7, sleep, and his own goals every few sessions, review them with him, and adjust the plan', 3,
        { r: 'Measurement-based, collaborative review', approach: 'Measure, review, adjust', why: 'Routine outcome monitoring with a validated measure plus his self-defined goals, reviewed together, guides adjustments to the plan', keys: ['GAD-7 of 15 at baseline', 'sleep-onset insomnia'], mistake: 'Measuring only at the start and end, or not at all' }),
      O('b', 'Use his reports of fewer incidents at work as the main sign that the treatment is working for him', -1,
        { r: 'Measures the environment, not GAD', approach: 'Incident-count framing', why: 'Microaggressions depend on his workplace, not on his anxiety, so their frequency does not track treatment response', keys: ['external stressor'], mistake: 'Confusing changes in the environment with clinical outcome' }),
      O('c', 'Give the GAD-7 at intake and again at discharge to compare his scores before and after treatment', 0,
        { r: 'Too infrequent to guide care', approach: 'Pre-post framing', why: 'A pre-post comparison shows outcome but cannot guide adjustments during treatment', keys: ['ongoing monitoring'], mistake: 'Using measurement only to evaluate, not to steer, treatment' }),
      O('d', 'Judge progress by whether he stops attributing workplace events to race, as a sign of reduced worry', -2,
        { r: 'Pathologizes perception of racism', approach: 'Attribution-change framing', why: 'Treating less attribution to race as improvement frames his realistic appraisal as a symptom and could push him to doubt real discrimination', keys: ['realistic appraisal'], mistake: 'Defining recovery as no longer naming racism' }),
    ]),

    // ---------------- Counseling & Ethics (4) ----------------
    Q('q10', 'counseling', 'Terrence says, "I wondered whether a White counselor would get it." The most therapeutic response is to:', ['R5'], [
      O('a', 'Reassure him that she has worked with many Black clients and has completed extensive diversity training', -1,
        { r: 'Defends rather than explores', approach: 'Credential-reassurance framing', why: 'Citing experience centers the counselor and closes the topic instead of using it as a cultural opportunity', keys: ['client testing safety'], mistake: 'Responding to a cultural opening with self-defense' }),
      O('b', 'Tell him that race should not matter in counseling and that she is here to focus on his anxiety', -2,
        { r: 'Dismisses a cultural opportunity', approach: 'Minimizing framing', why: 'Saying race should not matter dismisses his concern, ruptures trust, and runs counter to cultural humility', keys: ['racism is central to his distress'], mistake: 'Minimizing race when the client raises it' }),
      O('c', 'Thank him for naming it, admit she may not fully know his experience, and invite him to say more', 3,
        { r: 'Cultural humility in the moment', approach: 'Seize the cultural opportunity', why: 'Within the Multicultural Orientation framework, welcoming the concern with humility and curiosity uses a cultural opportunity and deepens the alliance', keys: ['explicit cross-racial concern', 'early alliance'], mistake: 'Missing or defending against a cultural opportunity' }),
      O('d', 'Offer to transfer him to a Black counselor in the practice, in case he would feel more comfortable', 0,
        { r: 'Premature before exploring', approach: 'Match-offer framing', why: 'A match can be offered if he wants one, but leading with transfer skips exploring what he needs and can feel like avoidance', keys: ['concern not yet explored'], mistake: 'Resolving the moment by exiting it' }),
    ]),
    Q('q11', 'counseling', 'About the design review, Terrence asks, "Am I just being paranoid?" The most therapeutic response is to:', ['R5', 'R1'], [
      O('a', 'Explore the evidence for and against bias in that meeting so he can weigh whether his read is accurate', 0,
        { r: 'Neutral but puts his reality on trial', approach: 'Evidence-weighing framing', why: 'Collaborative inquiry is reasonable, but making his perception of bias the first thing to test can feel invalidating', keys: ['repeated pattern of incidents'], mistake: 'Treating a plausible appraisal as the target of disputation' }),
      O('b', 'Reassure him that his colleague likely restated the idea by accident and did not intend any slight', -1,
        { r: 'Minimizes the microaggression', approach: 'Benign-intent framing', why: 'Assuming good intent dismisses impact and models the very minimization he faces at work', keys: ['credit given to colleague'], mistake: 'Prioritizing intent over impact' }),
      O('c', 'Suggest his reaction may reflect a pattern of mistrust worth examining as part of his anxiety treatment', -2,
        { r: 'Pathologizes his response', approach: 'Mistrust framing', why: 'Framing his response as mistrust pathologizes a realistic reaction and can confirm his fear that the counselor will not get it', keys: ['asks if he is paranoid'], mistake: 'Locating racism\'s effects in the client\'s personality' }),
      O('d', 'Validate that being overlooked like this is real and common, then explore how the worry spreads from it', 3,
        { r: 'Validate, then trace generalization', approach: 'Validate and link to GAD', why: 'Affirming that the experience is real counters self-doubt, and exploring how the worry spreads to other domains targets the GAD', keys: ['self-doubt', 'worry spreads to home'], mistake: 'Either adjudicating the event or stopping at validation' }),
    ]),
    Q('q12', 'ethics', 'Dana notices an urge to suggest Terrence\'s manager "may not have meant it that way." The most appropriate action is to:', ['R4'], [
      O('a', 'Share the thought with Terrence as gentle balance, since offering alternative views is part of CBT', -1,
        { r: 'Acts on unexamined bias', approach: 'Balance framing', why: 'Voicing the urge as balance imposes her perspective and risks minimizing his experience before she examines where it comes from', keys: ['urge arises during his account'], mistake: 'Mistaking a personal reaction for a therapeutic technique' }),
      O('b', 'Examine the reaction as possible bias, seek consultation, and keep her values from steering his choices', 3,
        { r: 'Self-examine and consult', approach: 'Reflect, consult, protect autonomy', why: 'The ACA Code asks counselors to be aware of and avoid imposing their own values and to seek consultation to maintain multicultural competence', keys: ['counselor\'s own identity', 'client weighing a complaint'], mistake: 'Acting on, or ignoring, an unexamined reaction' }),
      O('c', 'Refer Terrence out promptly, since a counselor who notices bias in herself cannot treat him ethically', -2,
        { r: 'Values-based referral harms the client', approach: 'Refer-out framing', why: 'Noticing bias calls for self-work and consultation, not referral; referring based on the counselor\'s own values or discomfort is discouraged', keys: ['alliance forming'], mistake: 'Treating self-awareness of bias as grounds for referral' }),
      O('d', 'Set the reaction aside and resolve to stay neutral, watching whether it comes up again in later sessions', 0,
        { r: 'Monitoring without examination', approach: 'Self-monitoring framing', why: 'Not acting on the urge is right, but monitoring alone skips the reflection and consultation that address its source', keys: ['possible bias'], mistake: 'Assuming neutrality is achieved by willpower' }),
    ]),
    Q('q13', 'ethics', 'Terrence asks Dana to write HR a letter stating that discrimination caused his anxiety. The best response is to:', ['R4'], [
      O('a', 'Explore his goals, explain what she can attest to, and with written consent share only what is needed', 3,
        { r: 'Explore, clarify role, consent, minimum necessary', approach: 'Advocate within role and consent', why: 'She can document his symptoms, diagnosis, and treatment with written consent, but cannot attest that discrimination occurred; consent precedes any advocacy for an identifiable client', keys: ['considering a formal complaint', 'avoided EAP over HR concerns'], mistake: 'Either overstating what a counselor can attest to or refusing to support him' }),
      O('b', 'Write the letter as he asked, since advocating for clients who face oppression is an ethical duty', -2,
        { r: 'Exceeds role and evidence', approach: 'Write-as-requested framing', why: 'A counselor cannot establish that discrimination caused his anxiety; attesting to it exceeds her role and evidence and can harm his case', keys: ['causation not established'], mistake: 'Confusing advocacy with attesting to facts outside her knowledge' }),
      O('c', 'Decline, explaining that counselors stay out of workplace matters and should not take sides in disputes', -1,
        { r: 'Withdraws legitimate support', approach: 'Hands-off framing', why: 'Counselors may advocate at individual and institutional levels with consent; a blanket refusal abandons support he is entitled to', keys: ['seeking support with HR'], mistake: 'Treating any advocacy as taking sides' }),
      O('d', 'Suggest he consult an employment attorney first, then revisit whether a letter would help his case', 0,
        { r: 'Reasonable but skips exploration', approach: 'Refer-first framing', why: 'Legal advice can help, but the counselor first explores his goals and clarifies what she can and cannot provide', keys: ['decision still forming'], mistake: 'Deferring entirely to another professional before clarifying her own role' }),
    ]),
  ],
};

module.exports = { CASES: [D907] };
