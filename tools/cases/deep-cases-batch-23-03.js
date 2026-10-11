// deep-cases-batch-23-03.js — NCMHCE deep case: Facing a terminal diagnosis and the hospice decision (focus: Terminal illness / end-of-life issues)
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
// D903 — Adjustment Disorder, with Depressed Mood (F43.21) — Trauma — medium
// ============================================================================
const D903 = {
  id: 'ncmhce-D903',
  title: 'Facing a terminal diagnosis and the hospice decision',
  category: 'Trauma',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Adjustment Disorder, with Depressed Mood', code: 'F43.21' },
  diagnosis: { name: 'Adjustment Disorder, with Depressed Mood', code: 'F43.21' },
  differentialOptions: [
    { id: 'do1', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder, Single Episode, Moderate', isCorrect: false },
    { id: 'do3', name: 'Depressive Disorder Due to Another Medical Condition', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Mixed Anxiety and Depressed Mood', isCorrect: false },
  ],
  narrative: {
    intake:
      'Loretta Simmons, a 58-year-old African American retired middle-school music teacher and church choir director, is referred to an outpatient ' +
      'counseling practice by her oncology nurse navigator. Six weeks ago she was diagnosed with colon cancer metastatic to the liver; her oncologist ' +
      'estimates six to twelve months. Within two weeks of the diagnosis she became tearful most days, sad, and preoccupied with "what I leave behind." ' +
      'She has stopped attending choir rehearsal because she "can\'t sing without crying," though she still looks forward to Sunday dinners with her ' +
      'daughter Tanya and two grandchildren and laughs easily when they visit. Fatigue, reduced appetite, and broken sleep began with her chemotherapy ' +
      'and liver involvement. She denies feeling worthless, denies any prior depressive episode, and reports no substance use. She has been married to ' +
      'Calvin for 34 years; her son Marcus lives in Atlanta. Her Baptist faith is central to her, and she describes herself as "not a worrier."',
    session1:
      'Loretta says quietly, "Some days I wish the Lord would just hurry this up." On direct inquiry she describes a wish not to linger in pain and not ' +
      'to become "a burden Calvin has to carry," denies any intent or plan to end her life, and says her faith would not allow it. She keeps prescribed ' +
      'opioid pain medication at home, and her pain has been poorly controlled this week. Her palliative care team has raised enrolling in hospice. ' +
      'She fears hospice means "giving up," and Marcus has told her he wants her to "keep fighting" with more treatment. She wants to write letters ' +
      'to her grandchildren and record herself singing the hymns she taught them, but says she does not know where to begin.',
    session2:
      'Loretta reports her pain is better after a medication change by her palliative physician and she has begun the letters. Marcus phoned the ' +
      'counselor\'s office asking to "get the real story" about his mother and wanting the counselor to talk her out of hospice; Loretta has not signed ' +
      'a release for him. She then asks the counselor whether she should look into medical aid in dying, which she read about in another state; her ' +
      'own state does not authorize it. The counselor, whose father died of cancer last year, notices an urge to steer away from Loretta\'s talk of dying.',
  },
  diagnosticRationale:
    'Clinically significant sadness, tearfulness, and withdrawal from choir that began within three months of an identifiable stressor (a terminal ' +
    'cancer diagnosis), with preserved capacity for pleasure, no worthlessness, and neurovegetative symptoms better accounted for by cancer and its ' +
    'treatment, best fit adjustment disorder with depressed mood. Full major depressive episode criteria are not met, the mood is a psychological ' +
    'response to the diagnosis rather than a direct physiological effect of the illness, and anxiety is not a prominent feature. Her passive wish ' +
    'for a hastened death is assessed as a distinct construct from active suicidal ideation and monitored over time.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Adjustment disorders: onset within 3 months of a stressor, marked distress or impairment, not another disorder; depressed mood subtype' },
    { id: 'R2', source: 'DSM-5-TR', detail: 'Major depressive episode and depressive disorder due to another medical condition: criteria and differential in medical illness' },
    { id: 'R3', source: 'C-SSRS', detail: 'Wish to be dead versus active ideation, method, intent, plan, and behavior screening' },
    { id: 'R4', source: 'Stanley-Brown SPI', detail: 'Collaborative safety plan: warning signs, coping, supports, professionals, and lethal-means safety' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.9. end-of-life care (A.9.a quality of care, A.9.b competence/choice/referral); B.2.b. end-of-life confidentiality' },
    { id: 'R6', source: 'ACA Code of Ethics', detail: 'B.1.c. respect for confidentiality; B.6. records and releases; A.4.b. personal values; C.2.g. impairment' },
    { id: 'R7', source: 'Corey (Theory & Practice)', detail: 'Existential therapy: meaning, death anxiety, freedom and responsibility; therapist self-awareness' },
    { id: 'R8', source: 'State law', detail: 'Medical aid in dying is authorized only in some U.S. jurisdictions; eligibility and counselor role vary by statute' },
    { id: 'R9', source: 'Hays (Assessment)', detail: 'Assessing depression in medically ill clients: weighting cognitive-affective over somatic symptoms' },
  ],
  questions: [
    // ---------------- Assessment & Conceptualization (5) ----------------
    Q('q1', 'intake', 'At intake, which finding most directly supports adjustment disorder with depressed mood for Loretta?', ['R1'], [
      O('a', 'Depressed mood and tearfulness that began within weeks of her terminal diagnosis and now impair her choir role', 3,
        { r: 'Onset within 3 months of the stressor with impairment', approach: 'Anchor the diagnosis to the stressor criteria', why: 'Adjustment disorder requires emotional symptoms emerging within three months of an identifiable stressor with marked distress or functional impairment, which her timeline and choir withdrawal show', keys: ['symptoms began within two weeks of diagnosis', 'stopped attending choir rehearsal'], mistake: 'Treating any sadness in cancer as normative without checking onset and impairment' }),
      O('b', 'Fatigue, reduced appetite, and broken sleep present nearly every day since she started her chemotherapy cycles', -1,
        { r: 'Somatic symptoms are confounded by cancer', approach: 'Symptom-count framing', why: 'These began with chemotherapy and liver involvement, so they do not establish a mood syndrome of any kind', keys: ['onset tied to chemotherapy'], mistake: 'Counting illness-driven somatic symptoms as evidence of the mood diagnosis' }),
      O('c', 'Her report that she has been a calm person all her life and has no earlier history of depression or anxiety', 0,
        { r: 'Helpful history, not the defining criterion', approach: 'History framing', why: 'No prior episodes makes a recurrent mood disorder less likely, but the stressor-linked onset and impairment define the diagnosis', keys: ['no prior episodes'], mistake: 'Relying on a rule-out history instead of the positive criteria' }),
      O('d', 'Her statement that some days she wishes God would hurry up and end all of her suffering from this cancer', -2,
        { r: 'A hastened-death wish is a safety finding, not a criterion', approach: 'Risk-as-diagnosis framing', why: 'A wish for hastened death is assessed for safety in its own right; it is not a diagnostic criterion for adjustment disorder', keys: ['requires separate risk assessment'], mistake: 'Folding a safety disclosure into diagnosis and skipping the risk assessment it requires' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes Loretta\'s presentation from a major depressive episode in a medically ill client?', ['R2', 'R9'], [
      O('a', 'Her fatigue, poor appetite, and broken sleep, which together satisfy most of the neurovegetative criteria', -2,
        { r: 'Counting confounded symptoms inflates MDD', approach: 'Inclusive symptom counting', why: 'These somatic symptoms are attributable to cancer and chemotherapy, so counting them toward MDD overdiagnoses depression in medical illness', keys: ['symptoms began with chemotherapy'], mistake: 'Inclusive counting of illness-driven somatic symptoms toward a major depressive episode' }),
      O('b', 'She keeps her capacity for joy with her grandchildren and denies worthlessness, the cognitive core of MDD', 3,
        { r: 'Preserved pleasure and no worthlessness', approach: 'Weight cognitive-affective symptoms in medical illness', why: 'When somatic symptoms are confounded by illness, anhedonia, worthlessness, and pervasive mood carry the differential; she enjoys her grandchildren and denies worthlessness', keys: ['laughs easily with grandchildren', 'denies feeling worthless'], mistake: 'Equating a sad, ill client with a major depressive episode' }),
      O('c', 'The fact that her sadness is an understandable reaction to a diagnosis that would upset almost anyone', 0,
        { r: 'Understandability alone does not exclude MDD', approach: 'Normalizing framing', why: 'MDD can occur in response to a stressor; the absence of the cognitive-affective core is the discriminator, not whether the reaction is understandable', keys: ['understandable is not exclusionary'], mistake: 'Ruling out MDD because the cause of the sadness is obvious' }),
      O('d', 'Her tearfulness on most days, which shows the mood disturbance is milder than a full depressive episode', -1,
        { r: 'Tearfulness is shared and not a severity marker', approach: 'Severity framing', why: 'Tearfulness occurs in both conditions and says little about which one is present', keys: ['shared feature'], mistake: 'Using a shared symptom as the discriminator' }),
    ]),
    Q('q3', 'core', 'Why is depressive disorder due to another medical condition the less fitting diagnosis for Loretta?', ['R2'], [
      O('a', 'Because cancer can only cause mood symptoms after it has spread directly to the brain or the spinal cord', -1,
        { r: 'Medically caused mood is not limited to CNS spread', approach: 'Mechanism misconception', why: 'Medical conditions and treatments can affect mood through many pathways; the question is evidence of a direct physiological effect', keys: ['many physiological pathways'], mistake: 'Holding a narrow, inaccurate model of medically caused depression' }),
      O('b', 'Because a counselor may not consider medical diagnoses and must leave that decision to her oncologist', -2,
        { r: 'Counselors consider medical rule-outs', approach: 'Scope avoidance', why: 'Counselors weigh medical contributors and coordinate with physicians; avoiding the differential leaves a rule-out unexamined', keys: ['coordinate, do not ignore'], mistake: 'Treating medical differentials as outside the counselor\'s concern' }),
      O('c', 'Her mood reads as a psychological response to the meaning of the diagnosis, not a direct effect of the illness', 3,
        { r: 'Psychological reaction, not direct pathophysiology', approach: 'Apply the due-to-medical-condition criterion', why: 'That diagnosis requires evidence the mood is a direct physiological consequence of the condition; her sadness centers on legacy and loss after learning the prognosis', keys: ['preoccupied with what she leaves behind', 'onset after the news, not a physiological change'], mistake: 'Assuming any depressed mood in a cancer patient is caused by the cancer itself' }),
      O('d', 'Because her sadness started within two weeks of learning the diagnosis rather than many months later', 0,
        { r: 'Timing helps but is not the criterion', approach: 'Timing framing', why: 'Timing is consistent with a reaction, but the decisive question is whether there is evidence of a direct physiological mechanism', keys: ['timing supportive only'], mistake: 'Using timing alone in place of the physiological-mechanism criterion' }),
    ]),
    Q('q4', 'intake', 'Loretta says, "Some days I wish the Lord would just hurry this up." What should the counselor do next?', ['R3'], [
      O('a', 'Reassure her that wishing for an end is a normal part of dying, then move on to her legacy letters today', -2,
        { r: 'Normalizing without assessing misses risk', approach: 'Normalize and move on', why: 'A wish for hastened death can be normative or can mark suicidal risk; it must be assessed, not assumed benign', keys: ['access to opioids', 'uncontrolled pain'], mistake: 'Assuming a terminally ill client\'s death wish needs no risk assessment' }),
      O('b', 'Arrange an immediate emergency evaluation, since any wish to die in a medical patient signals imminent danger', 0,
        { r: 'Escalating without assessment is premature', approach: 'Automatic escalation', why: 'Level of care follows a structured assessment of ideation, intent, plan, and behavior, not the statement alone', keys: ['assess before escalating'], mistake: 'Equating any death wish with imminent suicide risk' }),
      O('c', 'Note the statement in her chart and plan to revisit it if she raises the topic again in a later session', -1,
        { r: 'Documenting without assessing delays safety', approach: 'Defer framing', why: 'The statement warrants assessment in the moment; waiting for her to raise it again leaves risk unknown', keys: ['assess now'], mistake: 'Sequencing assessment behind the client\'s willingness to repeat a disclosure' }),
      O('d', 'Ask directly about passive versus active ideation, intent, plan, and access to means using a structured screen', 3,
        { r: 'Structured, direct suicide-risk assessment', approach: 'Distinguish desire for hastened death from suicidality', why: 'The C-SSRS separates a wish to be dead from active ideation, method, intent, and plan, and her home opioids make means access essential to ask about', keys: ['wish to not linger', 'opioids at home'], mistake: 'Either dismissing or overreacting to the statement without structured assessment' }),
    ]),
    Q('q5', 'core', 'After assessment, which factor most warrants ongoing monitoring of Loretta\'s wish for a hastened death?', ['R3', 'R4'], [
      O('a', 'Her strong Baptist faith, which shows that her wish to die does not reflect any real or lasting risk', -2,
        { r: 'A protective factor does not erase risk', approach: 'Protective-factor dismissal', why: 'Faith is protective, but it does not cancel risk factors or remove the need to monitor them', keys: ['risk factors still present'], mistake: 'Treating one protective factor as proof of safety' }),
      O('b', 'Her sense of being a burden to Calvin, alongside poorly controlled pain and opioid medication at home', 3,
        { r: 'Burdensomeness, uncontrolled pain, means access', approach: 'Identify modifiable drivers and means access', why: 'Perceived burdensomeness and uncontrolled pain drive hastened-death wishes and are modifiable, and home opioids are lethal-means access', keys: ['"a burden Calvin has to carry"', 'pain poorly controlled', 'opioids at home'], mistake: 'Overlooking the modifiable drivers and means access behind a passive wish' }),
      O('c', 'Her sadness at missing choir rehearsal, which is the clearest sign her depression is growing worse', -1,
        { r: 'Choir withdrawal is not the key risk marker', approach: 'Mood-severity framing', why: 'The withdrawal reflects impairment but is not the risk factor that most shapes her hastened-death wish', keys: ['impairment, not risk driver'], mistake: 'Tracking the mood symptom instead of the risk drivers' }),
      O('d', 'Her son\'s wish that she keep fighting, since family disagreement is the main source of her current risk', 0,
        { r: 'A relevant stressor, but not the primary driver', approach: 'Family-conflict framing', why: 'Family disagreement adds strain, but burdensomeness, pain, and means access are the stronger, more modifiable risk factors', keys: ['secondary stressor'], mistake: 'Prioritizing a secondary stressor over the core risk drivers' }),
    ]),

    // ---------------- Treatment Planning (4) ----------------
    Q('q6', 'treatment', 'What should be the central focus of Loretta\'s counseling plan?', ['R7', 'R1'], [
      O('a', 'Meaning-centered and dignity-focused work on legacy, faith, and family, with support for coping with her illness', 3,
        { r: 'Meaning, dignity, and legacy work', approach: 'Match the plan to an end-of-life adjustment reaction', why: 'Existential and dignity-focused approaches address meaning, legacy, and death anxiety, which are the center of her distress, while supporting coping', keys: ['wants letters and hymn recordings', 'preoccupied with what she leaves behind'], mistake: 'Applying a standard depression protocol that ignores the existential content' }),
      O('b', 'A full CBT protocol for major depression aimed at disputing her negative thoughts about her poor prognosis', -1,
        { r: 'Disputing a realistic prognosis misfits', approach: 'Wrong-framework CBT', why: 'Her thoughts about dying are realistic; disputing them invalidates her and misapplies an MDD protocol', keys: ['realistic, not distorted'], mistake: 'Treating accurate appraisals of a terminal illness as cognitive distortions' }),
      O('c', 'Weekly exposure to reminders of her diagnosis so that her thoughts of dying lose their emotional charge', -2,
        { r: 'An exposure protocol is the wrong model', approach: 'Trauma-exposure framing', why: 'Exposure is not indicated for an adjustment reaction to an ongoing terminal illness and can heighten distress', keys: ['not a trauma-memory target'], mistake: 'Using a PTSD exposure framework for an end-of-life adjustment' }),
      O('d', 'Supportive listening sessions that let her vent feelings while avoiding structured legacy or meaning work', 0,
        { r: 'Supportive but underpowered', approach: 'Supportive-only framing', why: 'Support helps, but she has named legacy goals that structured meaning and dignity work can directly serve', keys: ['she asked for help beginning letters'], mistake: 'Stopping at support when the client has named meaning-making goals' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor address safety in Loretta\'s plan?', ['R4', 'R3'], [
      O('a', 'Ask her to sign a written agreement promising that she will not harm herself before her next appointment', -2,
        { r: 'No-suicide contracts are not effective care', approach: 'Contract framing', why: 'No-suicide contracts lack evidence and can give false reassurance; collaborative safety planning is the standard', keys: ['use a safety plan'], mistake: 'Substituting a no-harm contract for a safety plan' }),
      O('b', 'Since her risk is low, leave safety out of the written plan and revisit it only if her mood gets worse', -1,
        { r: 'Low risk still warrants a plan and monitoring', approach: 'Defer framing', why: 'Passive ideation with means access and pain warrants a written plan and ongoing reassessment', keys: ['opioids at home', 'pain fluctuates'], mistake: 'Treating low current risk as no need for planning' }),
      O('c', 'Build a collaborative safety plan with her, including warning signs, supports, and safe storage of her opioids', 3,
        { r: 'Collaborative safety plan with means safety', approach: 'Apply the Safety Planning Intervention', why: 'A collaborative plan with warning signs, coping, supports, professional contacts, and lethal-means safety fits passive ideation with home opioids', keys: ['opioids at home', 'Calvin as support'], mistake: 'Relying on a contract or skipping means safety' }),
      O('d', 'Ask Calvin to take over all of her medications at once, without first discussing the step with Loretta', 0,
        { r: 'Means safety is right, but not imposed', approach: 'Unilateral means restriction', why: 'Means safety belongs in the plan, but it is arranged collaboratively and with her consent to respect her autonomy', keys: ['collaboration and consent'], mistake: 'Imposing means restriction rather than planning it with the client' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor coordinate with Loretta\'s palliative care team?', ['R5', 'R6'], [
      O('a', 'Wait to contact the team until Loretta decides about hospice, so counseling stays separate from her medical care', -1,
        { r: 'Siloed care misses a key driver', approach: 'Siloed framing', why: 'Uncontrolled pain is driving her hastened-death wish, so consented coordination now serves her welfare', keys: ['pain poorly controlled'], mistake: 'Keeping counseling separate when coordination is clinically needed' }),
      O('b', 'With her written release, share what is relevant, including how uncontrolled pain is shaping her wish to die', 3,
        { r: 'Consented, relevant coordination', approach: 'Coordinate within consent and scope', why: 'A release allows sharing the information the team needs; pain control directly affects her distress and hastened-death wish', keys: ['palliative team involved', 'pain drives the wish'], mistake: 'Either sharing without consent or not coordinating at all' }),
      O('c', 'Send the team her full counseling record right away, since everyone involved is part of her treatment', -2,
        { r: 'Disclosure exceeds consent and need', approach: 'Assume-consent framing', why: 'Disclosure follows her authorization and is limited to what the team needs, not the full record', keys: ['release and minimum necessary'], mistake: 'Over-disclosing on the theory that coordination justifies it' }),
      O('d', 'Encourage Loretta to report her pain to the palliative team herself, without any direct counselor contact', 0,
        { r: 'Empowering, but leaves coordination undone', approach: 'Client-only relay', why: 'Encouraging her self-advocacy helps, but with a release the counselor can also share how pain is shaping her distress and hastened-death wish', keys: ['pain drives the wish', 'release available'], mistake: 'Relying solely on the client to relay clinically important information' }),
    ]),
    Q('q9', 'treatment', 'Loretta is torn about hospice and her son opposes it. What best fits the counselor\'s role in the plan?', ['R5', 'R7'], [
      O('a', 'Encourage her to enroll in hospice soon, since comfort care is plainly the better path at this stage', -1,
        { r: 'Steering the decision overrides autonomy', approach: 'Advocacy framing', why: 'The counselor supports her informed decision rather than choosing for her', keys: ['her decision'], mistake: 'Imposing the counselor\'s view of the right end-of-life choice' }),
      O('b', 'Defer the hospice question to her family and her doctors, since medical choices are outside counseling', -2,
        { r: 'Abandoning the decision process', approach: 'Scope avoidance', why: 'Helping clients engage in informed end-of-life decision-making is part of the counselor\'s role', keys: ['A.9.a informed decision-making'], mistake: 'Withdrawing from a central concern the client brought' }),
      O('c', 'Support Marcus\'s wish that she keep fighting, since family unity matters most during a terminal illness', 0,
        { r: 'Family matters, but her values lead', approach: 'Family-first framing', why: 'Family views are explored, but the decision rests on her values and informed choice', keys: ['client autonomy'], mistake: 'Elevating a family member\'s preference over the client\'s own values' }),
      O('d', 'Explore her values and fears about hospice, and if she wishes, help her prepare to discuss it with family', 3,
        { r: 'Values-based, informed decision support', approach: 'Support informed end-of-life decision-making', why: 'Exploring what hospice means to her and supporting family communication respects autonomy and fosters informed decision-making', keys: ['fears hospice means giving up', 'son opposes'], mistake: 'Either steering her choice or leaving her alone with it' }),
    ]),

    // ---------------- Counseling & Ethics (4) ----------------
    Q('q10', 'counseling', 'Loretta asks, "Why would God let this happen to me when I still have so much to give?" The best response is to:', ['R7', 'R5'], [
      O('a', 'Share your own views on suffering and faith so she has a fresh perspective to consider this week', -1,
        { r: 'Imposing the counselor\'s beliefs', approach: 'Self-disclosure framing', why: 'Offering personal religious views risks imposing values and shifting focus away from her meaning-making', keys: ['her faith, her meaning'], mistake: 'Answering a spiritual question with the counselor\'s own beliefs' }),
      O('b', 'Steer the talk back to coping skills, since spiritual questions are best left to her pastor alone', 0,
        { r: 'Clergy may help, but avoiding the topic misses it', approach: 'Redirect framing', why: 'Offering pastoral support can help, but the counselor can still explore the spiritual meaning she is raising', keys: ['spiritual distress is clinical material'], mistake: 'Treating spiritual distress as outside counseling' }),
      O('c', 'Reflect the loss beneath the question, explore what her faith offers her, and offer to involve her pastor', 3,
        { r: 'Explore meaning within her faith', approach: 'Existential and culturally responsive response', why: 'Reflecting the loss and exploring her own spiritual framework supports meaning-making, and involving her pastor honors her values', keys: ['central Baptist faith', '"so much to give"'], mistake: 'Either imposing beliefs or sidestepping the spiritual question' }),
      O('d', 'Point out that the question has no answer and urge her to focus on the practical tasks still ahead', -2,
        { r: 'Shutting down meaning-making', approach: 'Dismiss framing', why: 'Dismissing her question invalidates her spiritual distress and undercuts the existential work at the center of her plan', keys: ['meaning-making is the work'], mistake: 'Closing off the existential material the client brings' }),
    ]),
    Q('q11', 'counseling', 'The counselor, whose father died of cancer last year, notices an urge to steer away from Loretta\'s talk of dying. What is the best action?', ['R6', 'R7'], [
      O('a', 'Seek supervision or consultation about the reaction while keeping Loretta\'s talk of dying central in session', 3,
        { r: 'Address countertransference through supervision', approach: 'Monitor self and consult', why: 'Recognizing death anxiety and grief and taking it to supervision protects the work and keeps the client\'s agenda central', keys: ['father died of cancer last year', 'urge to avoid death talk'], mistake: 'Letting unexamined countertransference shape the session' }),
      O('b', 'Disclose her father\'s death to Loretta in detail so the two of them can grieve their losses together', -1,
        { r: 'Self-disclosure shifts the focus', approach: 'Mutual-grief framing', why: 'Detailed disclosure of the counselor\'s loss centers the counselor\'s needs and burdens the client', keys: ['client-centered focus'], mistake: 'Using self-disclosure to manage the counselor\'s own grief' }),
      O('c', 'Refer Loretta to another counselor at once, since any personal reaction makes the counselor unfit to help', 0,
        { r: 'Referral may be needed later, not reflexively', approach: 'Reflexive referral', why: 'A reaction alone does not require transfer; supervision comes first, with referral if the reaction impairs the work', keys: ['consult before transferring'], mistake: 'Transferring care before trying supervision and self-monitoring' }),
      O('d', 'Gently move sessions toward lighter coping topics, which will also protect Loretta from further distress', -2,
        { r: 'Avoidance serves the counselor, not the client', approach: 'Avoidant framing', why: 'Steering away from death talk acts out countertransference and denies her the work she came for', keys: ['she wants to talk about dying'], mistake: 'Rationalizing the counselor\'s avoidance as protecting the client' }),
    ]),
    Q('q12', 'ethics', 'Marcus calls asking for "the real story" about his mother and wants the counselor to talk her out of hospice. What is most appropriate?', ['R6'], [
      O('a', 'Explain her prognosis and treatment goals to him, since he is her son and is worried about his mother', -2,
        { r: 'Disclosure without authorization breaches confidentiality', approach: 'Family-entitlement framing', why: 'Family status does not authorize disclosure; she has not signed a release', keys: ['no release for Marcus'], mistake: 'Disclosing to a family member without client authorization' }),
      O('b', 'Agree to raise his concerns with her strongly, since his view should carry weight in her final choice', -1,
        { r: 'Acting as the son\'s advocate compromises the role', approach: 'Third-party agent framing', why: 'The counselor does not advocate a family member\'s position to the client', keys: ['client autonomy'], mistake: 'Becoming an agent for a third party\'s agenda' }),
      O('c', 'Hang up as soon as he mentions his mother, since any contact with family breaks her confidentiality', 0,
        { r: 'Protects confidentiality, but needlessly abrupt', approach: 'Overcorrection framing', why: 'Confidentiality is kept, but the counselor can listen and explain policy without disclosing anything', keys: ['listen without disclosing'], mistake: 'Confusing receiving information with disclosing it' }),
      O('d', 'Without confirming she is a client, explain release limits, and later tell Loretta that he called', 3,
        { r: 'Protect confidentiality; inform the client', approach: 'Respect confidentiality without release', why: 'Without authorization the counselor cannot confirm or share anything, and informing Loretta lets her decide about involving him', keys: ['no signed release', 'son opposes hospice'], mistake: 'Either disclosing to family or handling the call without telling the client' }),
    ]),
    Q('q13', 'ethics', 'Loretta asks whether she should look into medical aid in dying, which her state does not authorize. What is the most appropriate response?', ['R5', 'R8', 'R3'], [
      O('a', 'Tell her that her faith clearly forbids it and that she should put the idea out of her mind entirely', -1,
        { r: 'Imposing values closes the conversation', approach: 'Values-imposition framing', why: 'Pronouncing on her faith imposes the counselor\'s view and shuts down exploration of what is behind the question', keys: ['explore, do not pronounce'], mistake: 'Answering with a moral or religious verdict' }),
      O('b', 'Explore what is prompting the question, stay neutral on the option, and continue assessing her safety', 3,
        { r: 'Explore, stay neutral, reassess risk', approach: 'Counselor role in end-of-life options', why: 'The counselor explores the meaning of the request without advocacy, notes that legal availability varies by state, consults as needed, and keeps assessing risk', keys: ['her state does not authorize it', 'prior wish for hastened death'], mistake: 'Either advocating for or against the option rather than exploring it' }),
      O('c', 'Share information on how to qualify in a state that permits it so that she can make a fully informed choice', -2,
        { r: 'Facilitating access is advocacy', approach: 'Facilitation framing', why: 'Steering her toward access in another jurisdiction moves from exploration into advocacy and bypasses risk assessment', keys: ['no advocacy', 'state-law variation'], mistake: 'Treating counselor neutrality as an obligation to facilitate the option' }),
      O('d', 'Explain that the topic is outside counseling and refer her back to her oncologist for any discussion of it', 0,
        { r: 'Medical questions go to physicians, but exploration is counseling', approach: 'Scope deflection', why: 'Eligibility is a medical-legal matter, but exploring her reasons and values is within the counselor\'s role', keys: ['A.9 end-of-life care'], mistake: 'Deflecting an end-of-life concern the counselor is positioned to explore' }),
    ]),
  ],
};

module.exports = { CASES: [D903] };
