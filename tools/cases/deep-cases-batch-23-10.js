// deep-cases-batch-23-10.js — NCMHCE deep case: A teen's gender identity in a devout family (focus: Gender identity development + Religious values conflict)
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Id block D901–D910 reserved
// for the Oct 2026 Areas-of-Clinical-Focus fill (live DB generator was at D314).

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
// D910 — Gender Dysphoria in Adolescents/Adults (F64.0) — Sexual-Gender — hard
// ============================================================================
const D910 = {
  id: 'ncmhce-D910',
  title: 'A transgender teen, a devout family, and a request to change him',
  category: 'Sexual-Gender',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Gender Dysphoria in Adolescents/Adults', code: 'F64.0' },
  diagnosis: { name: 'Gender Dysphoria in Adolescents/Adults', code: 'F64.0' },
  differentialOptions: [
    { id: 'do1', name: 'Gender Dysphoria in Adolescents/Adults', isCorrect: true },
    { id: 'do2', name: 'Body Dysmorphic Disorder', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder, Single Episode, Moderate', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Mixed Anxiety and Depressed Mood', isCorrect: false },
  ],
  narrative: {
    intake:
      'Elias Morales, a 16-year-old Mexican American high school junior who was assigned female at birth (legal name Elena), is brought to an ' +
      'outpatient counseling practice by his parents. For about two years he has consistently identified as a boy, asked to be called Elias with ' +
      'he/him pronouns, and worn a chest binder daily, often for more than 10 hours, which leaves his ribs sore. He says he feels "wrong" in his ' +
      'body, is distressed by his chest and by menstruation, wants a deeper voice, and wants to be seen as a young man. His grades have fallen from ' +
      'As to Cs and he quit choir. His parents, Lucía and Rubén, are devout members of an evangelical congregation where Rubén is a deacon; they call ' +
      'him Elena and "she," and Lucía says, "We want you to help her accept who she really is." Alone with the counselor, Elias says he still prays ' +
      'but stopped attending youth group after a youth leader described "people like him" as living in sin. Asked about his mood, he says, ' +
      '"Honestly, some mornings it would be easier not to wake up, but I\'m fine, I\'m not going to do anything." Although it is August, he wears ' +
      'long sleeves, and when he pushes one up, several healed linear marks are visible on his forearm.',
    session1:
      'On structured risk assessment, Elias discloses that he cut his forearm about three weeks ago after an argument with his father, and that he ' +
      'has had passive wishes to be dead about weekly for two months. He denies a current plan, intent, or any prior attempt. His father keeps a ' +
      'handgun in a nightstand. He reports low mood, poor sleep, and isolation, but still enjoys drawing and gaming with a cousin who uses his name, ' +
      'and he names the teacher who sponsors his school\'s student alliance club as someone he trusts. He asks about testosterone and asks the ' +
      'counselor not to tell his parents about the cutting.',
    session2:
      'In a parent session, Lucía is tearful and says she fears both for his soul and for his safety at school. Rubén says their pastor recommended a ' +
      'residential summer "retreat" that "helps kids get free of gender confusion," that he has paid the deposit, and that he told Elias, "If ' +
      'counseling doesn\'t fix this, you\'re going." Afterward, as Elias leaves, he says quietly, "If they send me there, I\'m done." The counselor, ' +
      'who shares the family\'s broad faith tradition, notices her own discomfort with the conflict and considers how to proceed.',
  },
  diagnosticRationale:
    'A marked incongruence between Elias\'s experienced gender and his assigned gender lasting far longer than six months, shown by a strong desire to ' +
    'be rid of his primary and secondary sex characteristics, a desire for the characteristics and the recognition of another gender, and a firm ' +
    'conviction of that identity, together with clinically significant distress and decline in school and social functioning, meets DSM-5-TR ' +
    'criteria for gender dysphoria in adolescents. His distress centers on the incongruence itself rather than a perceived appearance flaw (body ' +
    'dysmorphic disorder); his depressive symptoms, self-harm, and passive death wish are compounded by family and faith-community rejection ' +
    '(minority stress) and are assessed and treated in their own right rather than read as the cause of his identity.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Gender dysphoria in adolescents and adults: 6+ months of marked incongruence, 2+ of 6 indicators, clinically significant distress or impairment; differential from body dysmorphic disorder' },
    { id: 'R2', source: 'ACA Code of Ethics', detail: 'A.4.b personal values; A.11.b values within termination and referral; C.5 nondiscrimination; C.7.c harmful practices (do not use techniques with substantial evidence of harm, even if requested)' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'A.2.d minors\' consent/assent; B.5.b responsibility to parents and legal guardians; B.2.a serious and foreseeable harm; A.1.a primary responsibility to client welfare' },
    { id: 'R4', source: 'C-SSRS', detail: 'Structured assessment of suicidal ideation, behavior, and non-suicidal self-injury history' },
    { id: 'R5', source: 'Stanley-Brown SPI', detail: 'Collaborative safety plan: warning signs, coping, social contacts, professional contacts, lethal-means safety' },
    { id: 'R6', source: 'Corey (Theory & Practice)', detail: 'Multicultural and family systems perspectives; integrating client spirituality; working alliance' },
    { id: 'R7', source: 'State law', detail: 'Jurisdiction-specific rules on minors\' consent to treatment, limits on identity-change efforts with minors, and access to medical care for minors' },
  ],
  questions: [
    // ---------------- Assessment & Conceptualization (5) ----------------
    Q('q1', 'intake', 'Which findings most directly support the given diagnosis for Elias?', ['R1'], [
      O('a', 'Two years of consistent male identity, distress with his chest and menses, and a decline in school and social life', 3,
        { r: 'Duration, indicators, and distress/impairment', approach: 'Confirm the core DSM-5-TR criteria', why: 'The diagnosis requires 6+ months of marked incongruence with at least two indicators plus clinically significant distress or impairment; Elias shows all three', keys: ['two years identifying as a boy', 'distress with chest and menstruation', 'grades fell, quit choir'], mistake: 'Diagnosing from identity alone without confirming distress or impairment' }),
      O('b', 'His interest in activities and clothing that his peers and family associate with boys more than with girls', -1,
        { r: 'Gender-role nonconformity is not the criterion', approach: 'Stereotype framing', why: 'Preferences for activities or clothing do not define gender dysphoria; experienced-assigned incongruence with distress does', keys: ['nonconformity is not a disorder'], mistake: 'Equating gender-nonconforming interests with gender dysphoria' }),
      O('c', 'His low mood, poor sleep, and withdrawal from choir, which suggest that his gender identity grew out of depression', -2,
        { r: 'Reverses cause and effect', approach: 'Depression-as-cause framing', why: 'His identity predates and is distinct from his depressive symptoms; treating identity as a depression symptom is a pathologizing error', keys: ['identity consistent for two years', 'depression assessed separately'], mistake: 'Treating a stable gender identity as a byproduct of depression' }),
      O('d', 'His statement that he feels "wrong" in his body, since a single strong statement of distress is enough to diagnose', 0,
        { r: 'Relevant but incomplete', approach: 'Single-indicator framing', why: 'Body-related distress is relevant, but the criteria also require duration, two or more indicators, and impairment', keys: ['one indicator of several'], mistake: 'Stopping at one indicator instead of confirming the full criteria' }),
    ]),
    Q('q2', 'core', 'What best distinguishes Elias\'s presentation from body dysmorphic disorder?', ['R1'], [
      O('a', 'His daily use of a chest binder, which shows that he is preoccupied with the way his chest appears to other people', -1,
        { r: 'Binding is consistent with gender dysphoria', approach: 'Behavior framing', why: 'Binding reflects a wish to align his body with his gender, not concern about a perceived defect', keys: ['binding serves gender alignment'], mistake: 'Reading a gender-affirming behavior as a BDD ritual' }),
      O('b', 'The amount of time he spends thinking about his body each day, which is the main factor that separates the two', 0,
        { r: 'Time spent is nonspecific', approach: 'Preoccupation-intensity framing', why: 'Both conditions can involve hours of body focus; the content of the distress is what discriminates', keys: ['content, not duration of focus'], mistake: 'Using intensity of preoccupation instead of its content' }),
      O('c', 'His distress stems from incongruence with his experienced gender, not from a belief that a body part is defective or ugly', 3,
        { r: 'Incongruence versus perceived defect', approach: 'Contrast the source of distress', why: 'DSM-5-TR distinguishes BDD (preoccupation with a perceived flaw) from gender dysphoria (distress from incongruence with experienced gender)', keys: ['wants to be seen as a young man', 'wants a deeper voice'], mistake: 'Labeling gender-related body distress as a perceived defect' }),
      O('d', 'His body concerns as a likely sign of BDD, so his identity should be set aside until the body focus is treated first', -2,
        { r: 'Misdiagnosis that defers his identity', approach: 'Rule-in-BDD framing', why: 'Misreading incongruence as BDD and deferring his identity invalidates him and delays appropriate care', keys: ['incongruence, not defect'], mistake: 'Recasting gender dysphoria as BDD to avoid addressing identity' }),
    ]),
    Q('q3', 'core', 'Which conceptualization best accounts for Elias\'s worsening mood and functioning?', ['R1', 'R6'], [
      O('a', 'His mood problems are best explained by normal adolescent moodiness that he is likely to grow out of over time', -1,
        { r: 'Minimizes clinically significant symptoms', approach: 'Normalizing framing', why: 'Self-harm, passive death wish, and academic decline are not typical adolescent moodiness', keys: ['self-harm', 'grades dropped'], mistake: 'Normalizing risk-relevant symptoms as ordinary adolescence' }),
      O('b', 'Incongruence distress plus minority stress from family and faith-community rejection, with mood assessed separately', 3,
        { r: 'Dysphoria plus minority stress', approach: 'Integrate identity distress and social stressors', why: 'Rejection, misgendering, and stigma add stress on top of incongruence distress; depressive symptoms are assessed and treated in their own right', keys: ['called Elena and "she"', 'youth leader said "living in sin"', 'left youth group'], mistake: 'Ignoring the role of rejection and stigma in his decline' }),
      O('c', 'His distress shows that being transgender is itself the core problem, so lowering his identity is the main clinical goal', -2,
        { r: 'Pathologizes identity; implies change efforts', approach: 'Identity-as-pathology framing', why: 'The clinical focus is distress and impairment, not changing gender identity; aiming to change identity is harmful', keys: ['identity is not the target'], mistake: 'Treating gender identity itself as the disorder to be eliminated' }),
      O('d', 'Incongruence distress alone, so that family conflict and the loss of his church community are outside the clinical focus', 0,
        { r: 'Right core, too narrow', approach: 'Incongruence-only framing', why: 'Incongruence is central, but excluding family and faith-community rejection misses key drivers of risk', keys: ['family rejection', 'faith-community loss'], mistake: 'Leaving social stressors out of the conceptualization' }),
    ]),
    Q('q4', 'intake', 'Elias says mornings would be "easier not to wake up" but that he is fine; healed cuts are visible. The best next step is to:', ['R4'], [
      O('a', 'Accept his reassurance that he is fine, note the comment, and plan to revisit his mood at a later appointment', -2,
        { r: 'Accepting reassurance misses risk', approach: 'Reassurance framing', why: 'A passive death wish plus visible self-injury requires assessment now, regardless of reassurance', keys: ['passive death wish', 'healed cuts'], mistake: 'Letting a reassurance close the door on a risk disclosure' }),
      O('b', 'Ask his parents to come back into the room so they can explain what they know about his recent mood and the marks', -1,
        { r: 'Wrong sequence and informant', approach: 'Collateral-first framing', why: 'Risk is assessed directly with the adolescent first; parents can be involved afterward as needed', keys: ['assess the client directly'], mistake: 'Replacing direct assessment with parent report' }),
      O('c', 'Gently name the marks and his comment, then ask about self-harm in general terms and return to it later in the hour', 0,
        { r: 'Right instinct, not structured enough', approach: 'Unstructured inquiry', why: 'Naming the concern is good, but a structured assessment of ideation, behavior, and self-harm is needed in this session', keys: ['needs structured assessment'], mistake: 'Deferring a structured risk assessment' }),
      O('d', 'Conduct a structured suicide-risk assessment now that covers ideation, intent, plan, means, and his self-harm history', 3,
        { r: 'Structured risk assessment now', approach: 'Assess risk directly and systematically', why: 'Indirect ideation plus evidence of self-injury calls for a structured assessment (e.g., C-SSRS) in the same session', keys: ['"easier not to wake up"', 'long sleeves in August', 'healed linear marks'], mistake: 'Taking the reassurance at face value' }),
    ]),
    Q('q5', 'intake', 'His parents use his legal name and "she" throughout intake. How should the counselor handle name and pronouns?', ['R2', 'R3'], [
      O('a', 'Ask Elias privately what name and pronouns he uses and where, use them in session, and clarify use around parents and records', 3,
        { r: 'Ask, use, and clarify contexts', approach: 'Affirm while protecting the client', why: 'Using his self-identified name and pronouns supports the alliance, and clarifying contexts protects him in front of parents and in records', keys: ['asked to be called Elias', 'parents use Elena and "she"'], mistake: 'Defaulting to the legal name, or using his name in ways he has not agreed to' }),
      O('b', 'Use his legal name and the pronouns his parents use, since they are his legal guardians and are paying for services', -2,
        { r: 'Misgendering harms the alliance', approach: 'Guardian-preference framing', why: 'Parental authority over treatment consent does not require misgendering the client in session', keys: ['client welfare first'], mistake: 'Confusing legal guardianship with how to address the client' }),
      O('c', 'Avoid using any name or pronoun for him in session so the counselor does not appear to be taking a side in the conflict', -1,
        { r: 'Avoidance reads as non-affirming', approach: 'Neutrality-by-avoidance', why: 'Avoiding his name is not neutral; it signals discomfort and weakens the alliance', keys: ['affirming stance'], mistake: 'Mistaking avoidance for neutrality' }),
      O('d', 'Use his chosen name and pronouns in all settings, including in front of his parents, without asking him about it first', 0,
        { r: 'Affirming but not client-directed', approach: 'Unilateral affirmation', why: 'Using his name is right, but how and where should follow his wishes to avoid unintended conflict', keys: ['ask about contexts'], mistake: 'Not checking with the client about contexts' }),
    ]),

    // ---------------- Treatment Planning (4) ----------------
    Q('q6', 'treatment', 'Lucía asks the counselor to "help her accept who she really is." Which treatment goal is most appropriate?', ['R2'], [
      O('a', 'Agree to explore whether Elias might come to accept his assigned sex over time, since the parents are requesting it', -2,
        { r: 'Identity-change goal is harmful', approach: 'Parent-directed change goal', why: 'Aiming to change gender identity is a conversion-type effort with substantial evidence of harm (ACA C.7.c), even if requested', keys: ['identity is not the target'], mistake: 'Adopting a change-oriented goal because a guardian asked for it' }),
      O('b', 'Decline an identity-change goal and set goals for safety, distress, coping, and family communication with Elias\'s input', 3,
        { r: 'Client-centered, non-directive goals', approach: 'Set goals on distress, safety, and family', why: 'Counselors do not pursue identity change; goals target safety, distress, coping, and family communication and are set collaboratively', keys: ['parents want change', 'passive death wish', 'family conflict'], mistake: 'Accepting the parents\' framing as the treatment goal' }),
      O('c', 'Set a goal for Elias to reach a firm and final decision on his gender identity before the start of the next school year', -1,
        { r: 'Imposes an artificial timeline', approach: 'Decision-deadline framing', why: 'Identity exploration is not forced onto a deadline; distress and safety are the clinical targets', keys: ['open exploration'], mistake: 'Imposing an outcome timeline on identity' }),
      O('d', 'Focus goals on his mood and sleep for now and avoid gender identity in sessions until the family conflict has cooled', 0,
        { r: 'Addresses symptoms, sidesteps the core', approach: 'Symptom-only framing', why: 'Mood and sleep matter, but avoiding identity leaves the central source of distress unaddressed', keys: ['dysphoria is central'], mistake: 'Avoiding the identity topic to keep the peace' }),
    ]),
    Q('q7', 'treatment', 'Which safety-planning step is most important given what Elias disclosed in session 1?', ['R5', 'R3'], [
      O('a', 'Have Elias sign an agreement that he will not harm himself and will call the counselor before acting on any urge', -2,
        { r: 'No-harm contracts are not effective', approach: 'Contract framing', why: 'No-suicide contracts lack evidence and can create false reassurance; a collaborative safety plan is used instead', keys: ['safety plan, not contract'], mistake: 'Using a no-suicide contract in place of a safety plan' }),
      O('b', 'Teach Elias several coping skills for urges to cut and review how well they worked at the next weekly appointment', -1,
        { r: 'Leaves the handgun unaddressed', approach: 'Coping-only framing', why: 'Coping skills are one element; the plan also needs supports, crisis contacts, and lethal-means safety', keys: ['handgun in the home'], mistake: 'Building coping skills while missing lethal-means safety' }),
      O('c', 'Build a collaborative safety plan with warning signs, coping, trusted supports, crisis lines, and securing the handgun', 3,
        { r: 'Full safety plan with means safety', approach: 'Stanley-Brown safety planning', why: 'A collaborative plan covers warning signs, coping, supportive contacts, crisis resources, and lethal-means safety for the firearm', keys: ['handgun in nightstand', 'trusted cousin and teacher', 'cutting after conflict'], mistake: 'Omitting lethal-means counseling about the firearm' }),
      O('d', 'Refer Elias for an inpatient admission today because he has a passive death wish and a recent episode of self-injury', 0,
        { r: 'Errs toward safety; level of care not indicated', approach: 'Over-escalation', why: 'He denies plan or intent and has supports; outpatient safety planning with means safety fits, with reassessment ongoing', keys: ['no plan or intent'], mistake: 'Escalating level of care without indicators that require it' }),
    ]),
    Q('q8', 'treatment', 'Elias asks about testosterone and mentions sore ribs from binding. What is the counselor\'s most appropriate role?', ['R2', 'R7'], [
      O('a', 'Tell him that hormones are the solution to his distress and that the counselor will help him find a way to start soon', -2,
        { r: 'Outside scope and directive', approach: 'Advocate-for-medication framing', why: 'Counselors do not recommend or arrange hormones; medical decisions belong to qualified prescribers with guardian consent', keys: ['medical scope'], mistake: 'Giving medical direction outside counselor scope' }),
      O('b', 'Explain that the counselor cannot discuss medical topics and redirect the session back to his mood and school stress', -1,
        { r: 'Dismissive of a legitimate concern', approach: 'Topic-avoidance', why: 'His questions and rib pain are legitimate; they are explored and referred, not shut down', keys: ['sore ribs from binding'], mistake: 'Dismissing medical questions instead of referring' }),
      O('c', 'Suggest that he bind for fewer hours each day and wait to raise testosterone until after he turns eighteen years old', 0,
        { r: 'Reasonable but advises instead of refers', approach: 'Counselor-advice framing', why: 'Binding safety and medical options are evaluated by a medical provider; the counselor explores and refers', keys: ['needs medical evaluation'], mistake: 'Giving medical guidance rather than coordinating a referral' }),
      O('d', 'Explore his questions, and with parental consent coordinate a referral to a medical provider for binding pain and options', 3,
        { r: 'Explore, then refer and coordinate', approach: 'Refer within scope', why: 'Counselors explore the client\'s questions and coordinate a medical referral with guardian consent; medical options and access vary by state law', keys: ['asks about testosterone', 'rib soreness from binding', 'minor needs guardian consent'], mistake: 'Either giving medical advice or ignoring the request' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor plan to involve Lucía and Rubén in treatment?', ['R6', 'R3'], [
      O('a', 'Offer parent sessions that respect their faith, explore their fears, and teach how rejection and acceptance affect risk', 3,
        { r: 'Respect faith; reduce rejecting behaviors', approach: 'Family work grounded in welfare', why: 'Respecting parents\' values while educating them on how rejecting versus supportive behaviors affect a teen\'s risk keeps them engaged without abandoning the client', keys: ['Lucía fears for his soul and safety', 'parents misgender him'], mistake: 'Either dismissing the parents\' faith or siding with them against the client' }),
      O('b', 'Hold joint family sessions right away so Elias can explain his identity to his parents and resolve the conflict quickly', 0,
        { r: 'Premature joint sessions', approach: 'Rapid-confrontation framing', why: 'Joint work may help later, but preparing parents first reduces the risk of a harmful, rejecting exchange', keys: ['high conflict', 'recent self-harm'], mistake: 'Moving to joint sessions before parents are prepared' }),
      O('c', 'Keep the parents out of treatment entirely, because their religious beliefs make any involvement harmful to Elias', -1,
        { r: 'Excludes key supports', approach: 'Exclusion framing', why: 'Parents are legal guardians and potential protective supports; excluding them undermines care', keys: ['parents are guardians'], mistake: 'Treating the parents\' faith as disqualifying' }),
      O('d', 'Ask the parents to agree that they will stop all church involvement while Elias is in counseling with the practice', -2,
        { r: 'Imposes counselor values on parents', approach: 'Values-imposition framing', why: 'Directing the family to abandon their faith imposes the counselor\'s values and ruptures the alliance (A.4.b)', keys: ['respect parents\' religion'], mistake: 'Imposing the counselor\'s values on the parents' }),
    ]),

    // ---------------- Counseling & Ethics (4) ----------------
    Q('q10', 'counseling', 'Elias says, "Maybe God made a mistake with me, or maybe I\'m the mistake." The most therapeutic response is to:', ['R6'], [
      O('a', 'Assure Elias that God does not make mistakes and that his family will come around if he gives them more time', -1,
        { r: 'Premature reassurance and theology', approach: 'Reassurance framing', why: 'Offering theological answers and predictions closes off his experience and is not the counselor\'s role', keys: ['explore, not reassure'], mistake: 'Answering a spiritual question with reassurance' }),
      O('b', 'Suggest he consider leaving religion behind, since his faith community has caused him so much pain and rejection', -2,
        { r: 'Imposes the counselor\'s view', approach: 'Values-imposition framing', why: 'Directing him away from his faith imposes values and ignores that he still prays and misses youth group', keys: ['still prays', 'misses youth group'], mistake: 'Imposing a secular view on a client who values faith' }),
      O('c', 'Reflect the pain in feeling like a mistake, check its link to his death wish, and explore what his faith means to him', 3,
        { r: 'Reflect, check risk, explore faith', approach: 'Empathic, risk-aware, client-led exploration', why: 'Reflecting his shame, checking its link to his passive death wish, and exploring his own spirituality respects his faith and keeps safety in view', keys: ['"I\'m the mistake"', 'still prays', 'passive death wish'], mistake: 'Missing the shame and risk content in a spiritual statement' }),
      O('d', 'Reflect that he feels rejected by his church and move on to coping skills for handling hurtful comments at school', 0,
        { r: 'Empathic but moves on too fast', approach: 'Reflect-and-redirect', why: 'Reflection helps, but shifting to skills skips the shame, risk, and spiritual meaning in his statement', keys: ['shame', 'risk content'], mistake: 'Redirecting before exploring the meaning of the statement' }),
    ]),
    Q('q11', 'ethics', 'The counselor shares the family\'s faith tradition and feels uneasy. What is the most appropriate ethical course?', ['R2'], [
      O('a', 'Refer Elias to another counselor, since her beliefs about gender identity differ from what affirming care requires', -2,
        { r: 'Values-based referral is prohibited', approach: 'Refer-on-values framing', why: 'ACA A.11.b bars referral based solely on the counselor\'s personal values; it also disrupts care for an at-risk teen', keys: ['at-risk client', 'values conflict'], mistake: 'Referring out because of personal values' }),
      O('b', 'Keep her personal values out of treatment, seek supervision on the reaction, and continue affirming and competent care', 3,
        { r: 'Bracket values and seek support', approach: 'Manage values ethically', why: 'ACA A.4.b directs counselors to avoid imposing values; supervision and consultation help her stay client-centered and competent', keys: ['shares faith tradition', 'feels discomfort'], mistake: 'Either imposing values or referring out to avoid discomfort' }),
      O('c', 'Share her own faith with Elias so he knows she understands his family and can help bridge the conflict between them', -1,
        { r: 'Self-disclosure that risks imposing', approach: 'Self-disclosure framing', why: 'Disclosing her beliefs centers the counselor and may signal alignment with the parents', keys: ['client-centered stance'], mistake: 'Using self-disclosure that may imply a values position' }),
      O('d', 'Continue treatment as usual, since a professional counselor should be able to set aside personal reactions on her own', 0,
        { r: 'Right aim, missing support', approach: 'Self-reliance framing', why: 'Continuing is right, but unexamined reactions can leak into care; consultation or supervision is the safeguard', keys: ['noticed discomfort'], mistake: 'Skipping supervision when a values reaction arises' }),
    ]),
    Q('q12', 'ethics', 'Rubén plans to send Elias to a "retreat" to end his "gender confusion," and Elias says, "I\'m done." The best response is to:', ['R2', 'R4', 'R7'], [
      O('a', 'Stay neutral on the retreat, since choosing faith-based programs for a minor is a family decision that is outside counseling', -2,
        { r: 'Neutrality ignores harm and risk', approach: 'Hands-off framing', why: 'Identity-change programs carry substantial evidence of harm, and Elias\'s statement signals acute risk that must be addressed', keys: ['"I\'m done"', 'identity-change retreat'], mistake: 'Treating a harmful program and a risk statement as outside counseling' }),
      O('b', 'Tell Rubén that the counselor will report the family to child protective services if they go ahead with the retreat', -1,
        { r: 'Premature threat; misstates the duty', approach: 'Threat framing', why: 'Enrollment alone is not automatically reportable; consulting state law and engaging the parents comes first', keys: ['consult state law'], mistake: 'Using a report threat in place of assessment and engagement' }),
      O('c', 'Explain to the parents that research links identity-change efforts to harm, then follow up with Elias at his next session', 0,
        { r: 'Right message, delayed risk check', approach: 'Education-first framing', why: 'Educating parents is right, but "I\'m done" requires risk reassessment now, not at the next session', keys: ['"I\'m done"'], mistake: 'Delaying reassessment after a new risk statement' }),
      O('d', 'Reassess Elias\'s risk now, update the safety plan, and tell his parents the evidence of harm from identity-change efforts', 3,
        { r: 'Reassess now; inform parents of harm', approach: 'Prioritize safety and C.7.c', why: 'His statement triggers immediate reassessment and plan updates; the counselor informs parents that identity-change efforts have evidence of harm and consults state law', keys: ['"I\'m done"', 'retreat deposit paid', 'recent self-harm'], mistake: 'Addressing the retreat without first reassessing acute risk' }),
    ]),
    Q('q13', 'ethics', 'Elias asks the counselor not to tell his parents about the cutting. The most appropriate response is to:', ['R3'], [
      O('a', 'Revisit confidentiality limits, explain that his parents need to know about the risk, and plan with him how to tell them', 3,
        { r: 'Honor limits; involve him in disclosure', approach: 'Balance safety and assent', why: 'Serious, foreseeable risk in a minor is shared with guardians (B.2.a, B.5.b); involving him in how it is shared, and limiting it to what safety needs, protects the alliance', keys: ['recent cutting', 'passive death wish', 'handgun at home'], mistake: 'Either keeping risk secret or disclosing everything without involving him' }),
      O('b', 'Agree to keep the cutting confidential, since telling his rejecting parents could damage trust and make things worse', -2,
        { r: 'Withholding risk from guardians', approach: 'Secret-keeping framing', why: 'Recent self-harm with a firearm in the home is serious, foreseeable risk that guardians must know to keep him safe', keys: ['firearm access', 'recent self-harm'], mistake: 'Promising confidentiality the counselor cannot ethically keep' }),
      O('c', 'Call his parents after the session and share all of his session content so they understand how serious things are', -1,
        { r: 'Overdisclosure without his input', approach: 'Full-disclosure framing', why: 'Only safety-relevant information is shared, and he is involved in how; sharing everything harms trust and privacy', keys: ['minimum necessary disclosure'], mistake: 'Disclosing more than safety requires and bypassing his assent' }),
      O('d', 'Tell him that you will think about it, then decide later whether the cutting is serious enough to share with them', 0,
        { r: 'Delays a clear answer', approach: 'Deferral framing', why: 'Transparency about limits is owed now; vagueness undermines informed consent and delays safety steps', keys: ['transparent limits'], mistake: 'Being vague about confidentiality limits' }),
    ]),
  ],
};

module.exports = { CASES: [D910] };
