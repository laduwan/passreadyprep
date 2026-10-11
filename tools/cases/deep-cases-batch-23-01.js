// deep-cases-batch-23-01.js — NCMHCE deep case: A DNA match reopens an adopted teen's questions (focus: Adoption issues)
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Id block D901–D910 reserved
// for the Oct 2026 Areas-of-Clinical-Focus fill (live DB generator was at D314).
//
// ncmhce-D901 · Trauma · medium · adolescent (15)
// Adjustment Disorder, with Mixed Anxiety and Depressed Mood (F43.23)
// Complications (medium): a differential needing a discriminator (subthreshold
// for a major depressive episode) and a sequencing decision (pacing a minor's
// birth-family contact as a family decision).
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
const Q = (id, domain, question, evidenceRef, options) => ({ id, domain, question, evidenceRef, options });

const D901 = {
  id: 'ncmhce-D901',
  title: 'A DNA match reopens an adopted teen’s questions about where he came from',
  category: 'Trauma',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Adjustment Disorder, with Mixed Anxiety and Depressed Mood', code: 'F43.23' },
  diagnosis: { name: 'Adjustment Disorder, with Mixed Anxiety and Depressed Mood', code: 'F43.23' },
  differentialOptions: [
    { id: 'do1', name: 'Major Depressive Disorder, Single Episode, Moderate', isCorrect: false },
    { id: 'do2', name: 'Adjustment Disorder, with Mixed Anxiety and Depressed Mood', isCorrect: true },
    { id: 'do3', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Posttraumatic Stress Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Elijah Brandt, a 15-year-old Black American 10th grader, is brought to a suburban outpatient counseling practice by his adoptive parents, Karen ' +
      '(a white pediatric nurse) and Tom (a white civil engineer). Elijah was placed with them at two days old through a closed domestic agency adoption. ' +
      'Eight weeks ago a consumer DNA kit, a 15th-birthday gift, matched him with a probable paternal half-sister, Danielle, 19, who messaged him; the same ' +
      'week his biology class assigned a family-pedigree project. Karen cried, said she was “not ready,” asked him not to reply, and added parental controls ' +
      'to his phone. Since then Elijah has been sad and tearful most evenings, irritable at home, worried about “whether my birth mom even wanted me,” and ' +
      'takes about an hour to fall asleep. His grades have slipped from B-pluses to Cs. He still plays JV basketball and enjoys it, his appetite is unchanged, ' +
      'and he has no prior mental health history. Both parents consent to treatment and Elijah assents; at intake the counselor reviews with the family how ' +
      'confidentiality will work with a minor, including its limits.',
    session1:
      'Seen alone, Elijah says he knows only that his birth mother “was young and couldn’t take care of me”; he recently learned his parents have a ' +
      'non-identifying letter from the agency that they have never shown him. He says, “My mom acts like if I want to know where I came from, I don’t love ' +
      'her.” He is the only Black player on his team, teammates joke that he is “basically white,” and his parents have told him “we don’t see color.” His low ' +
      'mood and worry rise and fall with the conflict over the DNA match. He reports fewer than five depressive symptoms, keeps his interest in basketball and ' +
      'friends, and has no flashbacks or trauma-related avoidance. A structured suicide-risk screen is negative: no ideation, intent, plan, or self-harm.',
    session2:
      'In a parent session held with Elijah’s agreement, Karen tearfully says she is afraid of “losing him” to his birth family and feels guilty about the ' +
      'letter; Tom prefers to “let it blow over.” Neither has talked with Elijah about race beyond reassurance. Elijah wants to answer Danielle now. Two days ' +
      'later Karen calls the counselor asking exactly what Elijah has said about the half-sister. The counselor plans brief, problem-focused counseling with ' +
      'conjoint family sessions.',
  },
  diagnosticRationale:
    'Emotional symptoms (depressed mood, tearfulness, worry, irritability, initial insomnia) began within three months of an identifiable stressor—the DNA ' +
    'match and the family conflict over birth-family contact—and cause marked distress and a decline in school functioning. He does not meet criteria for ' +
    'a major depressive episode (fewer than five symptoms, interest preserved), his worry is stressor-bound and of weeks’ duration rather than six months of ' +
    'generalized worry, and there is no Criterion A traumatic exposure or intrusion/avoidance cluster. Adjustment disorder with mixed anxiety and depressed ' +
    'mood best fits; adoption-related identity questions and ambiguous loss are the developmental context, not the disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Adjustment disorders: onset within 3 months of a stressor; distress out of proportion or impairment; not another disorder; resolves within 6 months of stressor end; F43.23 specifier' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured suicide-risk screening, including with adolescents presenting after a family stressor' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Culturally responsive intake: developmental, family, and identity history gathered from multiple informants' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Brief problem-focused and family systems approaches; multicultural counseling and identity development' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.2.d. assent of minors; B.5.a.–B.5.b. confidentiality of minor clients and responsibility to parents; C.2.a.–C.2.b. competence and new specialty areas' },
  ],
  questions: [
    // ---------------- Assessment & Conceptualization (5) ----------------
    Q('q1', 'intake', 'Which finding most directly supports the given adjustment disorder diagnosis?', ['R1'], [
      O('a', 'His sadness and worry are understandable reactions to adoption, so no diagnosis applies while he explores his origins.', -1,
        { r: 'Normalizing does not erase impairment', approach: 'Normalization framing', why: 'Identity questions are expected in adoptees, but his symptoms cause marked distress and a functional decline, which is what the diagnosis captures', keys: ['grades fell to Cs', 'tearful most evenings'], mistake: 'Treating adoption-related distress as automatically non-clinical and overlooking documented impairment' }),
      O('b', 'His symptoms began within three months of the DNA match and family conflict and have lowered his school functioning.', 3,
        { r: 'Stressor-linked onset with impairment', approach: 'Confirm the core criteria', why: 'Adjustment disorder requires emotional or behavioral symptoms beginning within three months of an identifiable stressor, with marked distress or significant impairment', keys: ['onset after DNA match eight weeks ago', 'grades slipped from B-pluses to Cs'], mistake: 'Diagnosing from the symptom list without tying onset to the stressor and documenting impairment' }),
      O('c', 'His history shows a long-standing pattern of insecure attachment to his adoptive parents dating back to early childhood.', -2,
        { r: 'No evidence; pathologizes adoption', approach: 'Attachment-pathology framing', why: 'Nothing in the history shows an attachment disturbance; assuming one because he is adopted is an unsupported and stigmatizing inference', keys: ['placed at two days old', 'no prior mental health history'], mistake: 'Assuming adoption implies attachment pathology without evidence' }),
      O('d', 'His symptoms have lasted at least eight weeks, which is long enough to rule out an ordinary stress reaction in a teenager.', 0,
        { r: 'Duration alone is not the criterion', approach: 'Duration framing', why: 'There is no minimum duration for adjustment disorder; the defining features are timing relative to the stressor plus distress or impairment', keys: ['stressor-linked onset'], mistake: 'Using a duration threshold that belongs to other diagnoses' }),
    ]),
    Q('q2', 'core', 'What best distinguishes Elijah’s presentation from a major depressive episode?', ['R1'], [
      O('a', 'He is only 15, and adolescents usually show irritability instead of the sad mood needed for a depressive episode.', -1,
        { r: 'Misstates the adolescent criterion', approach: 'Age framing', why: 'Irritable mood can substitute for depressed mood in youth; it does not rule out depression, and Elijah also reports sadness', keys: ['sad and tearful most evenings'], mistake: 'Reversing the adolescent irritability provision' }),
      O('b', 'His sleep problem is limited to trouble falling asleep, so the sleep criterion for depression is not met at all.', 0,
        { r: 'One symptom is not the discriminator', approach: 'Single-symptom framing', why: 'Initial insomnia can count toward a depressive episode; the decisive point is the overall symptom count and preserved interest', keys: ['takes an hour to fall asleep'], mistake: 'Hinging the differential on one symptom rather than the full criterion set' }),
      O('c', 'His sadness began after a clear stressor, and a depressive episode cannot be diagnosed once a trigger is identified.', -2,
        { r: 'A trigger does not exclude depression', approach: 'Trigger-excludes framing', why: 'Major depression is diagnosed whenever full criteria are met, stressor or not; this reasoning would miss real depressive episodes', keys: ['criteria-based differential'], mistake: 'Believing an identifiable stressor rules out a major depressive episode' }),
      O('d', 'He has fewer than five depressive symptoms and still enjoys basketball and friends, so full criteria are not met.', 3,
        { r: 'Subthreshold count, interest preserved', approach: 'Apply the threshold', why: 'A major depressive episode needs five or more symptoms including depressed mood or anhedonia; his presentation is subthreshold with interest intact', keys: ['enjoys JV basketball', 'appetite unchanged'], mistake: 'Labeling any stressor-linked sadness as major depression without counting criteria' }),
    ]),
    Q('q3', 'core', 'Which conceptualization of Elijah’s distress is most adoption-competent?', ['R4'], [
      O('a', 'The DNA match reopened normal identity questions and ambiguous loss, intensified by family conflict over his search.', 3,
        { r: 'Normative identity work and ambiguous loss', approach: 'Developmental, adoption-informed lens', why: 'Adolescent adoptees commonly revisit identity and loss; a birth-family discovery can reopen an ambiguous loss, and conflict at home amplifies distress', keys: ['“whether my birth mom even wanted me”', 'mother asked him not to reply'], mistake: 'Seeing either pathology or nothing at all, instead of a normative process under strain' }),
      O('b', 'Interest in his birth family most likely reflects anger at his adoptive parents that he cannot yet express directly.', -1,
        { r: 'Search is not displaced anger', approach: 'Hidden-anger framing', why: 'Curiosity about origins is normative and can coexist with love for adoptive parents; recasting it as anger misreads the material', keys: ['wants to know where he came from'], mistake: 'Interpreting search interest as rejection of the adoptive family' }),
      O('c', 'Because he was placed at birth, adoption is unlikely to matter, and race should stay secondary to typical teen stress.', -2,
        { r: 'Dismisses adoption and race', approach: 'Colorblind framing', why: 'Placement at birth does not erase the loss of birth family or the realities of growing up Black in a white family and community', keys: ['only Black player on his team', '“we don’t see color”'], mistake: 'Discounting adoption and racial identity as irrelevant to the presenting problem' }),
      O('d', 'His distress is mainly a school stress reaction set off by the pedigree project, with the DNA match a minor detail.', 0,
        { r: 'Underweights the main stressor', approach: 'School-stress framing', why: 'The project matters, but the DNA match and the family conflict it set off are the central stressor', keys: ['symptoms track the DNA conflict'], mistake: 'Focusing on the most visible trigger instead of the central one' }),
    ]),
    Q('q4', 'intake', 'What additional history is most important to gather to understand the adoption context?', ['R3'], [
      O('a', 'A detailed record of every genetic match on the DNA site, so the counselor can map out his biological relatives.', -2,
        { r: 'Investigation exceeds the counselor role', approach: 'Genealogist framing', why: 'Mapping biological relatives is not a counseling task and could push a minor toward contact before the family is ready', keys: ['minor client', 'family conflict over contact'], mistake: 'Taking on a search role instead of assessing the client' }),
      O('b', 'His full developmental milestones, which mainly matter here to rule out an early prenatal exposure as the main cause.', -1,
        { r: 'Milestones are not the focus here', approach: 'Prenatal-exposure framing', why: 'Some developmental history is routine, but nothing suggests a neurodevelopmental cause; the gap is the family adoption narrative', keys: ['no prior history', 'stressor-linked onset'], mistake: 'Assuming adoptees need an etiology workup instead of an adoption-context history' }),
      O('c', 'What Elijah knows of his adoption story, what his parents know, and how openly adoption has been discussed at home.', 3,
        { r: 'Adoption narrative and family communication', approach: 'Multi-informant adoption history', why: 'An adoption-competent intake learns the adoptee’s story, what each parent holds (such as the unshared agency letter), and how open family communication has been', keys: ['unshared non-identifying letter', 'closed domestic adoption'], mistake: 'Skipping the family adoption narrative that drives the conflict' }),
      O('d', 'Only Elijah’s own account, since his parents’ views on the adoption could bias how the counselor reads the case.', 0,
        { r: 'Too narrow an informant base', approach: 'Single-informant framing', why: 'With a minor, parents are key informants and hold facts he lacks; his account matters but is not enough alone', keys: ['parents hold the agency letter'], mistake: 'Excluding parents as informants in an adolescent assessment' }),
    ]),
    Q('q5', 'intake', 'How should suicide risk be handled at this stage of Elijah’s assessment?', ['R2'], [
      O('a', 'Defer risk questions until rapport is stronger, since asking a teen early about suicide may plant the idea in his mind.', -1,
        { r: 'Asking does not induce risk', approach: 'Defer framing', why: 'Asking directly about suicide does not increase risk; deferring screening in a distressed adolescent is unsafe', keys: ['tearful most evenings', 'family conflict'], mistake: 'Believing that asking about suicide plants the idea' }),
      O('b', 'Screen with a structured tool, document the negative result, and rescreen if his mood or the family conflict worsens.', 3,
        { r: 'Structured screen, document, rescreen', approach: 'Screen and monitor', why: 'Adolescents with adjustment disorder warrant structured screening; a negative screen is documented and repeated if the picture changes', keys: ['negative structured screen', 'ongoing stressor'], mistake: 'Treating a single negative screen as permanent clearance' }),
      O('c', 'Ask one general question about whether he feels safe and use a structured tool only if his answer raises concern.', 0,
        { r: 'A single question is too thin', approach: 'Gatekeeper-question framing', why: 'Asking directly is right, but one global question misses ideation a structured screen would capture', keys: ['distressed adolescent'], mistake: 'Relying on one vague safety question instead of a structured screen' }),
      O('d', 'Have him sign an agreement not to harm himself, then focus the rest of the session on his adoption questions.', -2,
        { r: 'Contracts are not a safety intervention', approach: 'No-harm contract framing', why: 'No-suicide contracts lack evidence and do not replace screening or safety planning; here a structured screen is what is needed', keys: ['structured screening'], mistake: 'Relying on a no-harm contract instead of structured assessment' }),
    ]),

    // ---------------- Treatment Planning (4) ----------------
    Q('q6', 'treatment', 'Which initial treatment plan best fits Elijah’s diagnosis and situation?', ['R4'], [
      O('a', 'Long-term trauma-focused therapy for adoption trauma, since early relinquishment is a traumatic event for every adoptee.', 0,
        { r: 'Overreaches the presentation', approach: 'Adoption-as-trauma framing', why: 'Relinquishment is a real loss, but he shows no trauma-related symptoms; a brief, problem-focused approach fits an adjustment disorder', keys: ['no flashbacks or avoidance'], mistake: 'Applying a trauma protocol to a stressor-linked adjustment reaction' }),
      O('b', 'Refer first for a medication evaluation and hold counseling until his mood and sleep are under better control.', -1,
        { r: 'Psychotherapy is first-line here', approach: 'Medication-first framing', why: 'Adjustment disorder is treated primarily with brief psychotherapy; holding counseling for a medication evaluation delays the indicated care', keys: ['mild-to-moderate, stressor-linked'], mistake: 'Sequencing medication ahead of the indicated psychotherapy' }),
      O('c', 'Brief problem-focused counseling on coping and identity, plus conjoint sessions to improve adoption talk at home.', 3,
        { r: 'Brief problem-focused plus family work', approach: 'Match to diagnosis and system', why: 'Brief counseling builds coping and space for identity and loss; conjoint sessions target the family conflict that maintains the distress', keys: ['conflict over the DNA match', 'unshared agency letter'], mistake: 'Treating the teen in isolation from the family conflict driving symptoms' }),
      O('d', 'Work only with his parents on limit-setting around phone use until Elijah agrees to drop contact with his half-sister.', -2,
        { r: 'Excludes the client; coerces outcome', approach: 'Parent-only control framing', why: 'Sidelining the identified client and making care contingent on giving up his search is coercive and ignores his assent and needs', keys: ['Elijah assents to treatment'], mistake: 'Using treatment to enforce one family member’s preferred outcome' }),
    ]),
    Q('q7', 'treatment', 'Elijah wants to answer Danielle now; Karen wants all contact stopped. How should the counselor sequence this?', ['R4', 'R5'], [
      O('a', 'Treat contact as a family decision: explore each person’s hopes and fears, then help them plan a paced, supported first step.', 3,
        { r: 'Paced, family-supported plan', approach: 'Facilitate a shared decision', why: 'With a minor, birth-family contact goes best when planned with parental support; the counselor facilitates rather than decides, honoring his voice and their concerns', keys: ['Elijah wants to reply', 'Karen afraid of losing him'], mistake: 'Taking a side instead of helping the family plan contact together' }),
      O('b', 'Encourage Elijah to reply privately now, since Danielle is an adult and his right to know his origins outweighs his parents’ fears.', -2,
        { r: 'Covert contact undermines the family', approach: 'Secret-contact framing', why: 'Encouraging a minor to bypass his guardians invites unsupported contact and deeper family rupture, and oversteps the counselor role', keys: ['minor client', 'parental controls in place'], mistake: 'Advocating covert action that circumvents parents of a minor' }),
      O('c', 'Support his parents’ ban until he turns 18, since contact with birth relatives tends to destabilize teens who were adopted.', -1,
        { r: 'Blanket postponement ignores his needs', approach: 'Wait-until-18 framing', why: 'There is no basis to assume contact harms adoptees; a blanket ban can deepen secrecy and his sense that origins are forbidden', keys: ['identity questions active now'], mistake: 'Equating birth-family contact with risk' }),
      O('d', 'Set the contact question aside for now and return to it after his mood and sleep have improved in counseling.', 0,
        { r: 'Delay leaves the stressor unaddressed', approach: 'Symptoms-first framing', why: 'The contact conflict is the active stressor; postponing it leaves the driver of symptoms in place', keys: ['symptoms track the conflict'], mistake: 'Deferring the central stressor until symptoms improve' }),
    ]),
    Q('q8', 'treatment', 'How should progress be monitored for Elijah’s adjustment disorder?', ['R1'], [
      O('a', 'Use his self-report of feeling better at the start of each session as the main signal that treatment can end.', -1,
        { r: 'Unstructured report is too thin', approach: 'Check-in framing', why: 'A single global check-in misses function and course; measurable goals give a clearer picture', keys: ['grades, sleep, conflict'], mistake: 'Relying on an informal mood check instead of defined outcomes' }),
      O('b', 'Continue weekly sessions at the same pace until the family has fully resolved the question of birth-family contact.', 0,
        { r: 'Ties discharge to the wrong outcome', approach: 'Resolve-everything framing', why: 'Contact questions may evolve for years; progress is judged by his symptoms and functioning, not by settling every adoption issue', keys: ['brief treatment model'], mistake: 'Linking treatment length to resolving lifelong adoption questions' }),
      O('c', 'Assume symptoms will clear on their own within six months and reassess only if his parents report new problems.', -2,
        { r: 'Passive waiting is unsafe', approach: 'Wait-and-see framing', why: 'Expected course does not replace monitoring; worsening mood or emerging risk could go unseen', keys: ['rescreen if worsening'], mistake: 'Treating the expected course as a reason not to monitor' }),
      O('d', 'Track measurable goals for sleep, grades, and home conflict, and reassess the diagnosis if symptoms persist.', 3,
        { r: 'Measurable goals; reassess if persistent', approach: 'Measure and reassess', why: 'Adjustment disorder is expected to resolve within six months of the stressor ending; tracking functional goals shows whether it is, and persistence prompts re-diagnosis', keys: ['initial insomnia', 'grades slipped'], mistake: 'Not revisiting the diagnosis if symptoms persist or escalate' }),
    ]),
    Q('q9', 'treatment', 'How should the plan address Karen and Tom’s role as adoptive parents?', ['R4', 'R5'], [
      O('a', 'Have the parents join every individual session so they hear firsthand what Elijah is feeling about his birth family.', -1,
        { r: 'Removes his private space', approach: 'Full-transparency framing', why: 'An adolescent needs a confidential space for identity work; constant parent presence undermines it', keys: ['seen alone in session 1'], mistake: 'Confusing family involvement with eliminating the teen’s private sessions' }),
      O('b', 'Offer parent sessions on their fears and loss, education that search is not rejection, and racial socialization.', 3,
        { r: 'Support the adoptive parents directly', approach: 'Whole-triad support', why: 'Adoptive parents carry their own grief and fear; addressing it, plus guidance on search and race, helps them support his identity work', keys: ['Karen afraid of losing him', '“we don’t see color”'], mistake: 'Treating the parents only as informants rather than members of the triad' }),
      O('c', 'Refer the parents to their own therapist and keep them out of Elijah’s treatment so his sessions stay neutral.', 0,
        { r: 'Separate support is not enough here', approach: 'Outside-referral framing', why: 'Their own therapy may help, but the family system is central to his distress and belongs in the plan', keys: ['conflict at home drives symptoms'], mistake: 'Excluding parents whose behavior maintains the stressor' }),
      O('d', 'Advise the parents to share no further adoption information for now, so that Elijah has time to settle down first.', -2,
        { r: 'Withholding fuels secrecy and loss', approach: 'Withhold framing', why: 'Openness in adoption communication supports identity; withholding the letter and facts deepens mistrust and ambiguous loss', keys: ['unshared agency letter'], mistake: 'Advising secrecy about an adoptee’s own history' }),
    ]),

    // ---------------- Counseling & Ethics (4) ----------------
    Q('q10', 'counseling', 'Elijah says, “My mom acts like if I want to know where I came from, I don’t love her.” The most therapeutic response is:', ['R4'], [
      O('a', '“Your mom loves you and will understand in time, so try not to worry too much about how she is reacting right now.”', -1,
        { r: 'Reassurance closes the topic', approach: 'Reassurance framing', why: 'Premature reassurance dismisses his bind and skips exploring the loyalty conflict', keys: ['loyalty conflict'], mistake: 'Soothing instead of reflecting the client’s dilemma' }),
      O('b', '“It sounds like you are angry with your mom for adopting you, and wanting your birth family is a way to show it.”', 0,
        { r: 'Premature interpretation', approach: 'Interpretive framing', why: 'An unfounded interpretation of anger can feel accusatory; reflection fits his statement better', keys: ['wants to know origins'], mistake: 'Offering a speculative interpretation before reflecting' }),
      O('c', '“You sound caught: you love your mom and want to know your story, and she seems to hear it as one or the other.”', 3,
        { r: 'Reflects the both-and bind', approach: 'Reflect the loyalty conflict', why: 'Naming that he can love his adoptive family and want his origins validates the core adoptee loyalty bind', keys: ['fears hurting his mother', 'wants his story'], mistake: 'Missing the both-and nature of the adoptee’s loyalty conflict' }),
      O('d', '“Your mom is being unfair; you should keep talking to Danielle without telling her, since it is your story to know.”', -2,
        { r: 'Takes sides and urges secrecy', approach: 'Alliance-with-teen framing', why: 'Siding against the parent and urging covert contact triangulates the counselor and harms the family', keys: ['minor client', 'family treatment'], mistake: 'Joining the client against his parent and encouraging secrecy' }),
    ]),
    Q('q11', 'counseling', 'Elijah says teammates call him “basically white” and his parents say “we don’t see color.” The counselor should:', ['R4'], [
      O('a', 'Keep the focus on adoption, since race is a separate issue that can be taken up once the family conflict settles.', 0,
        { r: 'Splits race from adoption', approach: 'Sequence-away framing', why: 'For a transracial adoptee, race and adoption identity are intertwined; deferring race leaves part of his identity work out', keys: ['only Black player on his team'], mistake: 'Treating racial identity as separate from adoption identity' }),
      O('b', 'Refer him to a Black counselor, since a counselor of a different race cannot help him explore his racial identity.', -1,
        { r: 'Reflexive referral is not competence', approach: 'Match-or-refer framing', why: 'Client preference for a matched counselor is honored when raised, but multicultural competence, not automatic referral, is the standard', keys: ['no stated preference'], mistake: 'Assuming racial matching is required instead of building competence' }),
      O('c', 'Tell him his parents are right that color should not matter and help him let the team jokes roll off of him.', -2,
        { r: 'Colorblind stance invalidates him', approach: 'Colorblind framing', why: 'Endorsing colorblindness dismisses real racial experiences and undercuts his racial identity development', keys: ['“basically white” comments'], mistake: 'Validating colorblindness over the client’s lived experience' }),
      O('d', 'Explore what these comments mean to him, validate his experience, and support links to Black peers and mentors.', 3,
        { r: 'Explore, validate, connect', approach: 'Support racial identity development', why: 'Transracial adoptees benefit from naming racial experiences and having same-race community connections; the counselor follows his lead', keys: ['teammate comments', 'no racial socialization at home'], mistake: 'Minimizing racial identity in a transracial adoptee' }),
    ]),
    Q('q12', 'ethics', 'Karen calls and asks exactly what Elijah has said about his half-sister. The most appropriate response is to:', ['R5'], [
      O('a', 'Acknowledge her worry, revisit the confidentiality plan set at intake, and offer a family session to discuss it.', 3,
        { r: 'Honor the agreement; bring it to the family', approach: 'Balance minor confidentiality and parent rights', why: 'Counselors protect a minor’s confidences within the agreed limits while respecting parents’ role, and route the topic into a joint conversation', keys: ['confidentiality reviewed at intake', 'Karen’s fear of losing him'], mistake: 'Either disclosing details unilaterally or shutting the parent out' }),
      O('b', 'Share what Elijah has said about Danielle, since parents of a minor hold the legal right to the content of his sessions.', -1,
        { r: 'Disregards the agreed limits', approach: 'Parent-rights framing', why: 'Parents’ rights are real, but disclosing specifics without first using the intake agreement and his input damages trust and treatment', keys: ['assent and agreed limits'], mistake: 'Treating parental rights as a reason to bypass the confidentiality plan' }),
      O('c', 'Decline to speak with her, explaining that everything Elijah says in counseling is confidential from his parents.', 0,
        { r: 'Overstates confidentiality', approach: 'Stonewall framing', why: 'Parents have a legitimate role and confidentiality with minors has limits; refusing contact damages the alliance with the family', keys: ['parents consented to treatment'], mistake: 'Promising a minor more confidentiality than exists' }),
      O('d', 'Tell her that Elijah has not mentioned his half-sister at all, so she will stop worrying while treatment continues.', -2,
        { r: 'Deceiving a parent is unethical', approach: 'False-reassurance framing', why: 'Lying to a guardian violates honesty and trust and can collapse treatment when discovered', keys: ['honesty with parents'], mistake: 'Using deception to manage a parent’s anxiety' }),
    ]),
    Q('q13', 'ethics', 'The counselor has had little adoption-specific training. What is the most appropriate course of action?', ['R5'], [
      O('a', 'Transfer Elijah to an adoption specialist right away, since continuing without that training would be unethical.', -1,
        { r: 'Abrupt transfer is premature', approach: 'Refer-out framing', why: 'Competence gaps can often be closed through consultation and training; an abrupt transfer disrupts a working alliance', keys: ['alliance established'], mistake: 'Treating any training gap as requiring immediate referral' }),
      O('b', 'Rely on general counseling skills, since adoption issues are similar to any other family stress a teen goes through.', -2,
        { r: 'Ignores a competence gap', approach: 'Generalist framing', why: 'Adoption carries specific dynamics (loss, identity, the triad, search) that require informed practice', keys: ['transracial adoption', 'birth-family search'], mistake: 'Assuming general skills cover specialized adoption issues' }),
      O('c', 'Seek consultation and adoption-competence training while continuing care, and refer if that proves insufficient.', 3,
        { r: 'Consult and train; refer if needed', approach: 'Build competence responsibly', why: 'When practicing in an area new to them, counselors obtain training and consultation to ensure competent work, and refer if they cannot', keys: ['adoption focus of care', 'little adoption-specific training'], mistake: 'Either ignoring the gap or abandoning the client' }),
      O('d', 'Ask Karen and Tom to research adoption resources and bring what they find, since they know Elijah’s story best.', 0,
        { r: 'Shifts competence onto the family', approach: 'Delegate framing', why: 'Family resources can help, but the counselor remains responsible for building their own competence', keys: ['counselor responsibility'], mistake: 'Delegating professional development to clients' }),
    ]),
  ],
};

module.exports = { CASES: [D901] };
