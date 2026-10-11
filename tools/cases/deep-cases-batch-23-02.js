// deep-cases-batch-23-02.js — NCMHCE deep case: Excluded and mocked online, now avoiding school and peers (focus: Bullying)
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
// D902 — Social Anxiety Disorder (F40.10) — Anxiety — easy — focus: Bullying
// ============================================================================
const D902 = {
  id: 'ncmhce-D902',
  title: 'Excluded and mocked online, now avoiding school and peers',
  category: 'Anxiety',
  difficulty: 'easy',
  primaryDiagnosis: { name: 'Social Anxiety Disorder', code: 'F40.10' },
  diagnosis: { name: 'Social Anxiety Disorder', code: 'F40.10' },
  differentialOptions: [
    { id: 'do1', name: 'Social Anxiety Disorder', isCorrect: true },
    { id: 'do2', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Panic Disorder', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
  ],
  narrative: {
    intake:
      'Nadia Haddad, a 13-year-old Lebanese American eighth grader at a public middle school, is brought to an outpatient community counseling ' +
      'clinic by her mother, Rima, a pharmacy technician. For about ten months a group of classmates has excluded Nadia at lunch, mocked her in a ' +
      'class group chat, and shared an edited photo of her. Over the past eight months she has become intensely afraid of being judged or ' +
      'embarrassed by peers: she eats lunch alone in the library, will not answer questions in class, left every group chat, and has missed nine ' +
      'school days this semester with stomachaches on school mornings that ease once she is allowed to stay home. Her grades have slipped from ' +
      'mostly A\'s to B\'s and C\'s. Rima says Nadia was talkative and involved in art club in elementary school.',
    session1:
      'Nadia says she is sure other students are watching her and will laugh if she blushes or says something "stupid." Her fear shows up in ' +
      'class, at lunch, on the bus, and online, and she rehearses what to say before speaking. She is relaxed and chatty with her cousins and ' +
      'one longtime neighborhood friend. She denies unexpected panic attacks, and outside social situations she reports little worry about ' +
      'grades, health, or family. On a structured screener she denies any thoughts of suicide, wishes to be dead, or self-harm, now or in the ' +
      'past, and Rima reports no warning signs. Nadia and Rima consent, and sign a release, for the counselor to speak with the school counselor.',
    session2:
      'The counselor and Nadia build a fear-and-avoidance ladder that starts with saying hello to her neighborhood friend at school and works ' +
      'toward eating lunch in the cafeteria. Nadia asks quietly whether the bullying is her fault "because I\'m weird." She brings screenshots ' +
      'of the group-chat messages. Rima, angry, asks the counselor to call the other girls\' parents and wants to know everything Nadia says in ' +
      'session. The school counselor has begun an anti-bullying response and offered a plan for a gradual return to full attendance.',
  },
  diagnosticRationale:
    'Marked, persistent fear of scrutiny and negative evaluation by peers across multiple social situations (class participation, lunch, the ' +
    'bus, online), with avoidance and distress lasting more than six months and clear academic and social impairment, fits social anxiety ' +
    'disorder; DSM-5-TR requires that in children the anxiety occur in peer settings, not only with adults. The worry is confined to social ' +
    'evaluation (not generalized anxiety disorder), there are no unexpected panic attacks (not panic disorder), and full criteria for a ' +
    'specific anxiety disorder are met, so adjustment disorder is not used. Bullying is the context for onset, not a reason to withhold the ' +
    'diagnosis or to locate the problem in the child.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Social anxiety disorder: fear of scrutiny and negative evaluation; in children, anxiety must occur in peer settings; persistent, typically 6+ months; differential from GAD, panic disorder, adjustment disorder' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Social anxiety disorder (CG159): individual CBT focused on social anxiety for children and young people, with parental involvement' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening, pediatric/screener version' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Cognitive-behavioral therapy: graduated exposure hierarchy, cognitive restructuring, and the working alliance' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.2.d. consent with minors; B.1.d. explaining limits of confidentiality; B.5.a./B.5.b. responsibility to minor clients and to parents; B.1.c. respect for confidentiality: disclose only with consent or legal/ethical justification' },
    { id: 'R6', source: 'Hays (Assessment)', detail: 'Multi-informant child assessment: client, parent, and school reports with standardized rating scales' },
    { id: 'R7', source: 'Wiger (Documentation)', detail: 'Objective, behaviorally specific documentation of client report, observations, and risk screening' },
  ],
  questions: [
    // ---------------- Assessment & Conceptualization (5) ----------------
    Q('q1', 'intake', 'Which finding is most important to confirm to support social anxiety disorder for Nadia?', ['R1'], [
      O('a', 'That her social fear began right after a specific bullying incident she can recall in detail', 0,
        { r: 'Onset context helps but is not a criterion', approach: 'Trigger-first framing', why: 'Knowing the bullying context aids conceptualization, but DSM-5-TR defines social anxiety disorder by the fear, avoidance, duration, and impairment, not by a datable trigger', keys: ['bullying preceded onset', 'trigger is context'], mistake: 'Treating a clear precipitant as if it were the diagnostic criterion' }),
      O('b', 'Marked fear of peer scrutiny across social situations, with avoidance and impairment for 6+ months', 3,
        { r: 'Fear of peer evaluation, avoidance, 6+ months', approach: 'Confirm the core criteria', why: 'Social anxiety disorder requires marked fear of scrutiny in social situations, in peer settings for children, with avoidance, distress, impairment, and persistence typically of six months or more', keys: ['fear of being laughed at', 'avoids lunch and class participation', 'eight months of symptoms'], mistake: 'Diagnosing from shyness or one stressor without confirming fear, avoidance, duration, and impairment' }),
      O('c', 'That she has had several unexpected surges of intense fear that peaked within a few minutes', -1,
        { r: 'Unexpected attacks point to panic disorder', approach: 'Panic framework', why: 'Recurrent unexpected panic attacks define panic disorder; Nadia denies them and her fear is cued by social evaluation', keys: ['denies unexpected attacks', 'fear is socially cued'], mistake: 'Applying panic disorder criteria to a socially cued fear' }),
      O('d', 'That her fear appears mainly with teachers and other adults rather than in settings with peers', -2,
        { r: 'Reverses the child peer-setting requirement', approach: 'Adult-setting framing', why: 'DSM-5-TR specifies that in children the anxiety must occur in peer settings and not only during interactions with adults; this reverses the criterion', keys: ['fear centers on classmates', 'peer-setting requirement'], mistake: 'Reversing the child-specific criterion that anxiety must occur with peers' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes Nadia\'s presentation from generalized anxiety disorder?', ['R1'], [
      O('a', 'She reports frequent stomachaches and poor concentration on school mornings during the week', -1,
        { r: 'Somatic symptoms are nonspecific', approach: 'Symptom-count framing', why: 'Stomachaches and poor concentration occur in many anxiety disorders and do not separate social anxiety from GAD', keys: ['shared physical symptoms'], mistake: 'Using nonspecific somatic symptoms to differentiate anxiety disorders' }),
      O('b', 'She feels anxious on most days of the week and has trouble relaxing when she gets home', 0,
        { r: 'Frequency of anxiety does not discriminate', approach: 'Frequency framing', why: 'Anxiety on most days can fit either disorder; the content of the fear is the discriminator', keys: ['daily anxiety is shared'], mistake: 'Relying on how often she is anxious rather than what she fears' }),
      O('c', 'Her fear is limited to being judged or embarrassed socially, not worry across many life areas', 3,
        { r: 'Fear confined to social evaluation', approach: 'Contrast the focus of the fear', why: 'GAD involves excessive worry across multiple domains; Nadia\'s fear is confined to negative evaluation in social situations', keys: ['little worry about grades, health, family', 'fear centers on peers laughing'], mistake: 'Calling any persistent anxiety GAD without checking its content' }),
      O('d', 'The bullying explains her anxiety, so a separate anxiety diagnosis is not clinically needed', -2,
        { r: 'A stressor does not cancel a met diagnosis', approach: 'Explain-away framing', why: 'When full criteria are met, a precipitating stressor does not remove the diagnosis, and withholding it can deny her indicated treatment', keys: ['criteria met', 'eight months of impairment'], mistake: 'Explaining away a met diagnosis because the cause seems obvious' }),
    ]),
    Q('q3', 'core', 'Why is adjustment disorder with anxiety not the best diagnosis for Nadia?', ['R1'], [
      O('a', 'Her symptoms meet full criteria for a specific anxiety disorder, which takes precedence', 3,
        { r: 'Full criteria for another disorder are met', approach: 'Apply the adjustment-disorder exclusion', why: 'Adjustment disorder is not diagnosed when the disturbance meets criteria for another specific mental disorder; Nadia meets criteria for social anxiety disorder', keys: ['peer-evaluation fear', 'avoidance and impairment over 6 months'], mistake: 'Defaulting to adjustment disorder whenever a stressor is identifiable' }),
      O('b', 'Adjustment disorders apply only to adults and are not diagnosed in middle-school students', -2,
        { r: 'Adjustment disorder applies across ages', approach: 'Age-restriction framing', why: 'Adjustment disorder can be diagnosed at any age; the reason it does not fit is that full social anxiety criteria are met', keys: ['no age restriction'], mistake: 'Inventing an age restriction that does not exist' }),
      O('c', 'Peer bullying is too common in middle school to count as a significant stressor for her', -1,
        { r: 'Bullying can be a significant stressor', approach: 'Minimizing framing', why: 'Bullying is a real, identifiable stressor; minimizing it is inaccurate and the actual reason is that full criteria for another disorder are met', keys: ['ten months of bullying'], mistake: 'Minimizing bullying as a normal part of adolescence' }),
      O('d', 'Her symptoms have lasted over six months, which is longer than adjustment disorder allows', 0,
        { r: 'The six-month limit runs from the stressor ending', approach: 'Duration framing', why: 'Adjustment symptoms must not persist more than six months after the stressor or its consequences end; the bullying is ongoing, so duration is not the decisive reason', keys: ['bullying is ongoing', 'full criteria met'], mistake: 'Misapplying the six-month limit, which counts from the end of the stressor' }),
    ]),
    Q('q4', 'intake', 'Given the ongoing bullying, what safety step is most appropriate at intake?', ['R3'], [
      O('a', 'Skip risk questions, because asking a young teen about suicide might plant the idea', -1,
        { r: 'Asking about suicide does not plant the idea', approach: 'Avoidance framing', why: 'Direct suicide inquiry does not increase risk, and bullied youth warrant screening; skipping it misses a critical safety step', keys: ['bullied youth', 'screening is standard'], mistake: 'Believing that asking about suicide raises risk' }),
      O('b', 'Ask her mother about warning signs today and plan to screen Nadia herself next session', 0,
        { r: 'Collateral helps, but direct screening is not deferred', approach: 'Collateral-first framing', why: 'Parent input is useful, but parents often do not know about a teen\'s suicidal thoughts; the youth is screened directly at intake rather than a session later', keys: ['Nadia can answer for herself', 'collateral is supplemental'], mistake: 'Deferring direct youth screening behind parent report' }),
      O('c', 'Have Nadia agree in writing that she will not harm herself before starting treatment', -2,
        { r: 'No-harm contracts are not recommended', approach: 'Contract framing', why: 'No-suicide contracts are not evidence-based and can give false reassurance; structured screening and, when indicated, collaborative safety planning are used instead', keys: ['contracts are not a safety intervention'], mistake: 'Relying on a no-harm contract in place of screening' }),
      O('d', 'Screen Nadia directly with a structured tool for suicidal thoughts and self-harm', 3,
        { r: 'Direct, structured suicide and self-harm screening', approach: 'Screen the youth directly', why: 'Bullying, including cyberbullying, is associated with elevated suicide and self-harm risk in youth, so direct structured screening such as the C-SSRS is standard practice', keys: ['ongoing cyberbullying', 'school avoidance'], mistake: 'Assuming an anxious, polite teen is not at risk and skipping direct screening' }),
    ]),
    Q('q5', 'intake', 'What additional assessment step would most strengthen the picture of Nadia\'s functioning?', ['R6'], [
      O('a', 'Interview each of the students who bullied her to verify that Nadia\'s account is accurate', -2,
        { r: 'Investigating other minors is outside the role', approach: 'Investigator framing', why: 'Counselors do not investigate or interview other minors; that belongs to the school, and it would breach Nadia\'s confidentiality', keys: ['other students are not clients', 'school handles discipline'], mistake: 'Acting as investigator and disclosing the client\'s treatment' }),
      O('b', 'With consent, gather school input and parent and youth rating scales on social anxiety', 3,
        { r: 'Consented multi-informant assessment', approach: 'Use multiple informants and measures', why: 'Child assessment draws on youth, parent, and school reports plus standardized measures, which also gives a baseline for tracking progress', keys: ['release signed for school', 'attendance and grade changes'], mistake: 'Relying on a single informant with no standardized baseline' }),
      O('c', 'Rely on Nadia\'s self-report alone, since teens are the best judges of their own feelings', -1,
        { r: 'Single-informant assessment is incomplete', approach: 'Self-report-only framing', why: 'Youth report is essential but parent and school data add attendance, behavior, and context that strengthen the picture', keys: ['school-based impairment'], mistake: 'Treating one informant as sufficient for a child assessment' }),
      O('d', 'Order a full IQ and achievement battery first to see if a learning issue explains her grades', 0,
        { r: 'Testing is premature without learning concerns', approach: 'Rule-out-first framing', why: 'Her grades fell after the social fear began and she was a strong student before; a broad cognitive battery is not the next step', keys: ['grades fell with avoidance', 'prior strong performance'], mistake: 'Ordering broad testing before using indicated, targeted measures' }),
    ]),

    // ---------------- Treatment Planning (4) ----------------
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment for Nadia?', ['R2'], [
      O('a', 'Individual CBT focused on social anxiety, with graduated exposure and parent involvement', 3,
        { r: 'Social-anxiety-focused CBT with exposure and parents', approach: 'Match to the guideline', why: 'For children and young people with social anxiety disorder, guidelines recommend individual CBT focused on social anxiety, including exposure, with parents or carers involved', keys: ['13 years old', 'avoidance of peer situations'], mistake: 'Choosing supportive or nondirective talk alone for a disorder with an established CBT protocol' }),
      O('b', 'Weekly supportive talk sessions so she can process the bullying before facing any fears', 0,
        { r: 'Support alone delays the active ingredient', approach: 'Process-first framing', why: 'Support builds the alliance, but exposure-based CBT is the effective treatment; waiting to address avoidance lets it entrench', keys: ['avoidance is growing', 'missed school days'], mistake: 'Sequencing exposure behind open-ended processing' }),
      O('c', 'Approve homeschooling so she is fully protected from peers while she recovers from it', -1,
        { r: 'Removing all peer contact reinforces avoidance', approach: 'Avoidance-accommodation framing', why: 'Full withdrawal from school accommodates the fear and maintains social anxiety; safety is addressed through the school\'s anti-bullying response and a graded return', keys: ['avoidance maintains anxiety'], mistake: 'Confusing protection from bullying with accommodating anxious avoidance' }),
      O('d', 'Recommend a specific anti-anxiety medication and starting dose for her mother to request', -2,
        { r: 'Recommending medication and dose is outside scope', approach: 'Prescriber framing', why: 'Counselors do not select medications or doses; if indicated, a referral to a prescriber is coordinated', keys: ['counselor scope'], mistake: 'Acting outside scope by directing medication' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor structure exposure work with Nadia?', ['R4'], [
      O('a', 'Begin with eating lunch in the cafeteria so the hardest step is finished and out of the way', -1,
        { r: 'Starting at the top risks overwhelm and dropout', approach: 'Flooding framing', why: 'Graduated exposure with a youth starts with manageable steps; starting at the top of the ladder risks overwhelm, escape, and a reinforced fear', keys: ['hierarchy already built', '13-year-old'], mistake: 'Jumping to the top of the hierarchy instead of grading exposure' }),
      O('b', 'Wait to start exposure until Nadia reports that she no longer feels anxious around peers', 0,
        { r: 'Exposure is how the anxiety reduces', approach: 'Readiness framing', why: 'Waiting for anxiety to disappear first reverses the mechanism; exposure is what reduces it', keys: ['avoidance maintains fear'], mistake: 'Treating symptom relief as a precondition for exposure' }),
      O('c', 'Have her confront the girls who bullied her as an exposure task to build her confidence', -2,
        { r: 'Exposure must not place her in real harm', approach: 'Confrontation framing', why: 'Exposure targets feared but safe situations; deliberately facing active aggressors risks real harm and is not a valid exposure task', keys: ['ongoing bullying', 'exposure must be safe'], mistake: 'Confusing exposure to feared situations with exposure to actual danger' }),
      O('d', 'Move up her fear ladder step by step, repeating each task until her anxiety comes down', 3,
        { r: 'Graduated, repeated exposure up the hierarchy', approach: 'Graduated exposure', why: 'CBT for social anxiety uses a collaboratively built hierarchy, repeating each step until anxiety and avoidance decrease before advancing', keys: ['ladder from greeting a friend to cafeteria lunch'], mistake: 'Skipping steps or stopping exposures before anxiety comes down' }),
    ]),
    Q('q8', 'treatment', 'With the release signed, how should the counselor coordinate with the school?', ['R5'], [
      O('a', 'Send the full clinical record so the school has every detail it needs to discipline the girls', -2,
        { r: 'Sharing the full record exceeds what is needed', approach: 'Full-disclosure framing', why: 'Even with a release, only information needed for the purpose is shared; discipline is the school\'s process, not a reason to release the full record', keys: ['release is for coordination', 'minimum necessary'], mistake: 'Treating a release as permission to share everything' }),
      O('b', 'Avoid school contact so treatment stays fully separate from any anti-bullying process', -1,
        { r: 'Declining consented coordination undercuts care', approach: 'Siloed framing', why: 'A consented partnership with the school supports her safety, attendance, and exposure plan', keys: ['release signed', 'school offered a return plan'], mistake: 'Refusing helpful, consented coordination' }),
      O('c', 'Share relevant information and align a graded return to class with the school\'s safety plan', 3,
        { r: 'Consented, limited sharing and a joint return plan', approach: 'Coordinate within consent', why: 'With consent, the counselor shares what is relevant and aligns a graded return to full attendance with the school\'s anti-bullying and safety response', keys: ['school anti-bullying response', 'nine missed days'], mistake: 'Either sharing too much or not coordinating a return plan at all' }),
      O('d', 'Ask the school to excuse her from all class presentations and group work for the year', 0,
        { r: 'Blanket excusal accommodates avoidance', approach: 'Accommodation framing', why: 'Short-term, graded supports can help, but year-long excusal from participation removes exposure opportunities and maintains the anxiety', keys: ['avoids class participation'], mistake: 'Building avoidance into the school plan' }),
    ]),
    Q('q9', 'treatment', 'What is the most helpful role for Nadia\'s mother in the treatment plan?', ['R2'], [
      O('a', 'Let Nadia stay home on any morning she has a stomachache until the bullying fully stops', -1,
        { r: 'Allowing absence on demand reinforces avoidance', approach: 'Accommodation framing', why: 'Stomachaches that ease once she can stay home suggest anxious avoidance; allowing absence reinforces it and delays the graded return', keys: ['stomachaches ease at home', 'nine missed days'], mistake: 'Accommodating anxious avoidance as if it were protection' }),
      O('b', 'Learn to coach brave behavior, praise practice steps, and reduce accommodation of avoidance', 3,
        { r: 'Parent as exposure coach', approach: 'Involve the parent in CBT', why: 'Parent involvement in youth CBT teaches parents to support practice, reinforce approach, and gradually reduce accommodation', keys: ['engaged mother', 'school avoidance'], mistake: 'Leaving the parent out or casting the parent as the cause of the anxiety' }),
      O('c', 'Remain outside the sessions so that Nadia can build independence from her family on her own', 0,
        { r: 'Excluding the parent forgoes a key support', approach: 'Independence framing', why: 'Some individual time supports autonomy, but guidelines for youth social anxiety involve parents in the plan', keys: ['13 years old', 'mother is engaged'], mistake: 'Equating teen autonomy with no parent involvement' }),
      O('d', 'Take away Nadia\'s phone permanently so that she cannot be bullied online any more at all', -2,
        { r: 'Punitive removal can feel like blaming the target', approach: 'Punitive framing', why: 'Permanent phone removal can feel like punishment for being bullied, cut her off from supportive peers, and discourage future disclosure; online safety is planned collaboratively', keys: ['risk of blaming the target', 'disclosure matters'], mistake: 'Responding to cyberbullying in a way that punishes the target' }),
    ]),

    // ---------------- Counseling & Ethics (4) ----------------
    Q('q10', 'counseling', 'Nadia asks quietly whether the bullying is her fault "because I\'m weird." The most therapeutic response is to:', ['R4'], [
      O('a', 'Explore what she could change about herself so that the other girls will stop targeting her', -2,
        { r: 'This places blame on the target', approach: 'Self-change framing', why: 'Framing the solution as changing herself implies she caused the bullying and deepens self-blame', keys: ['asks if it is her fault', 'self-blame'], mistake: 'Blaming the target of bullying' }),
      O('b', 'Reassure her quickly that she is not weird, and then move straight on to the next agenda item', 0,
        { r: 'Reassurance alone skips the belief', approach: 'Quick-reassurance framing', why: 'Reassurance is kind but leaves the self-blaming belief unexplored and untested', keys: ['self-blaming belief'], mistake: 'Reassuring instead of exploring and testing the belief' }),
      O('c', 'Point out that most kids get teased at her age, so she should try not to take it so personally', -1,
        { r: 'Minimizing invalidates her experience', approach: 'Normalizing-away framing', why: 'Minimizing bullying invalidates her and can discourage further disclosure', keys: ['ten months of exclusion'], mistake: 'Minimizing bullying as ordinary teasing' }),
      O('d', 'Validate her hurt, say the bullying is not her fault, and gently examine the "weird" belief', 3,
        { r: 'Validate, affirm it is not her fault, test the belief', approach: 'Validate and restructure', why: 'Bullying is the responsibility of those who bully; validating her and gently examining the self-critical belief supports both the alliance and cognitive restructuring', keys: ['asks if it is her fault', 'calls herself weird'], mistake: 'Either implying she caused it or skipping past the self-blaming belief' }),
    ]),
    Q('q11', 'counseling', 'During a practice step, Nadia wants to stop greeting her friend because her face feels hot. The counselor should:', ['R4'], [
      O('a', 'Encourage her to stay with the step, notice the feeling peak and fall, and praise her effort', 3,
        { r: 'Stay in the exposure; reinforce effort', approach: 'Support completion of the exposure', why: 'Staying in the situation lets anxiety come down and disconfirms feared outcomes; praising effort builds willingness for the next step', keys: ['blushing fear', 'first rung of the ladder'], mistake: 'Ending the exposure at peak anxiety, which reinforces escape' }),
      O('b', 'Stop the step right away and return to it only after she feels completely calm again', -1,
        { r: 'Escaping at peak anxiety reinforces fear', approach: 'Escape framing', why: 'Leaving at peak anxiety teaches that escape is what brings relief', keys: ['avoidance maintains anxiety'], mistake: 'Allowing escape at the height of anxiety' }),
      O('c', 'Tell her that her face is not red at all, so there is nothing for her to worry about here', 0,
        { r: 'Reassurance can become a safety behavior', approach: 'Reassurance framing', why: 'Reassurance may help briefly but can become a safety behavior that keeps the feared belief untested', keys: ['reassurance-seeking'], mistake: 'Offering reassurance instead of letting the exposure work' }),
      O('d', 'Have her jump straight to a cafeteria lunch so the greeting step will feel easy afterward', -2,
        { r: 'Jumping up the ladder risks overwhelm', approach: 'Escalation framing', why: 'Skipping to the hardest item during a moment of distress risks overwhelm, dropout, and a strengthened fear', keys: ['graduated hierarchy'], mistake: 'Escalating instead of grading exposure' }),
    ]),
    Q('q12', 'ethics', 'Rima wants to know everything Nadia says in session. The most appropriate response is to:', ['R5'], [
      O('a', 'Tell Rima that as Nadia\'s parent she is legally owed a full report of everything said', -1,
        { r: 'Full disclosure undermines the minor\'s trust', approach: 'Parent-rights-only framing', why: 'Parents have legal rights, but counselors balance them with the minor\'s confidentiality and therapeutic needs, set expectations up front, and share within those limits', keys: ['13-year-old client', 'trust needed for disclosure'], mistake: 'Treating parental rights as erasing the minor\'s confidentiality' }),
      O('b', 'Refuse to tell Rima anything about treatment, since Nadia\'s privacy outweighs all else', 0,
        { r: 'Shutting the parent out is not balanced', approach: 'Youth-rights-only framing', why: 'Excluding the parent ignores her legitimate role and her part in the plan; limits are set jointly instead', keys: ['engaged mother', 'parent involvement in CBT'], mistake: 'Ignoring the parent\'s role and rights' }),
      O('c', 'Meet jointly to set what will be shared, including progress and any safety concerns', 3,
        { r: 'Jointly set confidentiality limits', approach: 'Balance minor and parent rights', why: 'With minors, the counselor explains the limits of confidentiality and agrees with youth and parent on what is shared, such as progress and safety concerns, while keeping session content private', keys: ['13-year-old client', 'mother wants full access'], mistake: 'Choosing either full disclosure or total exclusion' }),
      O('d', 'Quietly give Rima session details later without telling Nadia, to avoid any conflict', -2,
        { r: 'Secret disclosure breaches trust and ethics', approach: 'Covert-disclosure framing', why: 'Sharing without telling the client violates the agreed limits and can rupture the alliance', keys: ['no agreement to share'], mistake: 'Disclosing secretly behind the client\'s back' }),
    ]),
    Q('q13', 'ethics', 'Nadia shares the group-chat screenshots, and Rima asks the counselor to call the other girls\' parents. The counselor should:', ['R7', 'R5'], [
      O('a', 'Call the other parents as Rima asked, since protecting Nadia from bullying comes first', -2,
        { r: 'Contacting other families breaches confidentiality', approach: 'Advocate-by-contact framing', why: 'Calling other families discloses Nadia\'s treatment and steps outside the counselor role; the school\'s anti-bullying process handles peer conduct', keys: ['no consent to contact them', 'school process active'], mistake: 'Breaching confidentiality while acting outside the counselor role' }),
      O('b', 'Document her report objectively and direct the peer concerns through the school\'s process', 3,
        { r: 'Objective record; route peer conduct to school', approach: 'Document and use the right channel', why: 'Objective, specific documentation records the bullying and her response, and peer conduct is addressed through the school\'s anti-bullying process with consent', keys: ['screenshots shared', 'school response underway'], mistake: 'Either intervening directly with other families or leaving the disclosure undocumented' }),
      O('c', 'File a child abuse report naming the girls who sent the messages in the group chat', -1,
        { r: 'Peer bullying is not generally reportable abuse', approach: 'Over-reporting framing', why: 'Peer bullying is generally addressed through the school, not child-protective reporting, unless a specific reportable situation exists under state law', keys: ['peer conduct', 'school process'], mistake: 'Treating peer bullying as caregiver abuse' }),
      O('d', 'Note only that Nadia "seems upset about friends" so the record stays brief and private', 0,
        { r: 'Vague notes lose clinically relevant facts', approach: 'Vague-record framing', why: 'Brevity is fine, but omitting the bullying leaves the record inaccurate and unhelpful for care and risk monitoring', keys: ['specific disclosure'], mistake: 'Writing a vague record that omits key facts' }),
    ]),
  ],
};

module.exports = { CASES: [D902] };
