// deep-cases-batch-23-05.js — NCMHCE deep case: Outbursts caught between two households after divorce (focus: Parenting/co-parenting conflicts (post-divorce))
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
// D905 — Adjustment Disorder, with Mixed Disturbance of Emotions and Conduct
// (F43.25) — Trauma — medium — couple_family
// ============================================================================
const D905 = {
  id: 'ncmhce-D905',
  title: 'Outbursts caught between two households after divorce',
  category: 'Trauma',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Adjustment Disorder, with Mixed Disturbance of Emotions and Conduct', code: 'F43.25' },
  diagnosis: { name: 'Adjustment Disorder, with Mixed Disturbance of Emotions and Conduct', code: 'F43.25' },
  differentialOptions: [
    { id: 'do1', name: 'Adjustment Disorder, with Mixed Disturbance of Emotions and Conduct', isCorrect: true },
    { id: 'do2', name: 'Oppositional Defiant Disorder', isCorrect: false },
    { id: 'do3', name: 'Disruptive Mood Dysregulation Disorder', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Single Episode, Mild', isCorrect: false },
  ],
  narrative: {
    intake:
      'Darius Whitfield, a 9-year-old African American fourth grader at a public elementary school, is referred to an outpatient counseling ' +
      'practice by his school counselor. Over the past three months he has shoved a classmate at recess, thrown his tablet, and walked out of ' +
      'class twice; at home he cries at bedtime, has stomachaches on custody-exchange days, and has said "it\'s my fault." His parents, Renee ' +
      '(37, a hospital pharmacy technician) and Marcus (39, a freight dispatcher), separated five months ago and finalized their divorce two ' +
      'months ago. Renee, who schedules the intake, says the parenting plan gives her primary physical custody and Marcus every other weekend ' +
      'plus Wednesday dinners, and she asks that Marcus "not be dragged into this." His third-grade teacher described him as easygoing and well ' +
      'liked, with no prior behavior concerns, and a pediatric visit last month for the stomachaches was unremarkable.',
    session1:
      'Before treatment begins, the counselor obtains the parenting plan, which grants joint legal custody, and reaches Marcus, who consents and ' +
      'wants to take part. In play, Darius draws a house split down the middle with himself standing on the line. He says each parent sends ' +
      'messages through him ("tell your dad the check is late," "ask your mom why you can\'t bring your bike") and that his blowups happen on ' +
      'Sunday-evening returns and after Wednesday dinners. He adds, "Sometimes I wish I could disappear so they\'d stop fighting." On direct, ' +
      'developmentally worded screening he denies thoughts of dying or hurting himself, any plan, or past self-harm, and talks eagerly about ' +
      'soccer and Minecraft with his cousins. Between blowups his mood is generally good, and there is no history of defiance before the separation ' +
      'and no exposure to violence.',
    session2:
      'In separate collateral sessions, each parent criticizes the other: Marcus says, "You can see what she\'s doing—you\'re on my side, right?" ' +
      'and Renee says Marcus "doesn\'t really care." Both admit arguing at exchanges in front of Darius, and they cannot discuss scheduling without ' +
      'it escalating. Marcus asks the counselor for a letter supporting more parenting time at an upcoming modification hearing. A week later the ' +
      'counselor receives a subpoena for Darius\'s records from Renee\'s attorney. In his next session Darius asks quietly, "Do I have to pick?"',
  },
  diagnosticRationale:
    'Emotional symptoms (tearfulness, guilt, somatic complaints) and conduct symptoms (aggression, property destruction, leaving class) began ' +
    'within three months of an identifiable stressor (the parental separation and ongoing interparental conflict), are out of proportion to an ' +
    'expected reaction and impair school and home functioning, and do not meet criteria for another disorder. The behavior has lasted under six ' +
    'months and has no prior history, ruling out oppositional defiant disorder; there is no chronic irritable mood between outbursts for 12 months, ' +
    'ruling out disruptive mood dysregulation disorder; and his mood is reactive and largely intact between episodes, without a full major ' +
    'depressive syndrome. Divorce is not a Criterion A traumatic event, so this sits within the stressor-related, not posttraumatic, disorders.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Adjustment disorders: onset within 3 months of stressor, mixed emotions/conduct specifier; ODD 6-month pattern; DMDD 12-month chronic irritability' },
    { id: 'R2', source: 'ACA Code of Ethics', detail: 'A.2.d. (minors and consent), B.5.b. (responsibility to parents and legal guardians), A.8. (multiple clients)' },
    { id: 'R3', source: 'State law', detail: 'Minor consent to treatment and parental access to records under joint legal custody; procedures for responding to subpoenas' },
    { id: 'R4', source: 'C-SSRS', detail: 'Structured suicide-risk screening, including the pediatric/cognitively impaired version for young children' },
    { id: 'R5', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning, with caregiver involvement for a minor' },
    { id: 'R6', source: 'Corey (Theory & Practice)', detail: 'Family systems: Bowen triangulation, structural boundaries, and child-centered approaches' },
    { id: 'R7', source: 'ACA Code of Ethics', detail: 'E.13.c. (client evaluation prohibited for forensic purposes), B.2.d. (court-ordered disclosure), B.2.e. (minimal disclosure)' },
    { id: 'R8', source: 'HIPAA', detail: 'Privacy Rule 45 CFR 164.512(e): disclosures for judicial proceedings; minimum necessary standard' },
  ],
  questions: [
    // ---------------- Assessment & Conceptualization (5) ----------------
    Q('q1', 'intake', 'Renee asks to start treatment without involving Marcus. What should the counselor do first?', ['R2', 'R3'], [
      O('a', 'Begin with Renee\'s consent as the primary physical custodian and plan to update Marcus once treatment is underway', 0,
        { r: 'Right instinct to proceed, wrong sequence', approach: 'Proceed-then-verify', why: 'A joint legal custodian can often consent alone, but authority is confirmed from the custody documents and state law before treating, not after', keys: ['joint legal custody unverified', 'father not yet informed'], mistake: 'Equating primary physical custody with sole authority to consent to a minor\'s treatment' }),
      O('b', 'Obtain and review the custody order and parenting plan to confirm who holds consent authority under state law', 3,
        { r: 'Verify legal authority before treating a minor', approach: 'Confirm consent authority from the documents', why: 'With divorced parents, the custody order and state law determine who may consent to a minor\'s treatment and what each parent may access; this is confirmed before services start', keys: ['recently finalized divorce', 'request to exclude the other parent'], mistake: 'Relying on one parent\'s description of the custody arrangement instead of the documents' }),
      O('c', 'Require both parents to attend the first session together before agreeing to provide any services to Darius', -1,
        { r: 'Joint attendance is not a consent requirement', approach: 'Joint-presence gatekeeping', why: 'Consent is a legal question answered by the documents; forcing high-conflict parents into one room delays care and exposes the child to conflict', keys: ['parents cannot talk without escalating'], mistake: 'Confusing joint attendance with valid informed consent' }),
      O('d', 'Honor Renee\'s request and keep Marcus uninformed, since she is the parent who brought Darius in for help', -2,
        { r: 'Excluding a legal custodian is improper', approach: 'Side with the scheduling parent', why: 'If Marcus shares legal custody, he has rights to information about and participation in his son\'s care; secretly excluding him also aligns the counselor with one side', keys: ['joint legal custody', 'loyalty conflict already present'], mistake: 'Letting the referring parent define the other parent\'s rights' }),
    ]),
    Q('q2', 'core', 'Which finding best supports adjustment disorder with mixed disturbance of emotions and conduct?', ['R1'], [
      O('a', 'His symptoms are triggered by family events, which shows the problem is situational and does not need a diagnosis', -1,
        { r: 'Situational does not mean subclinical', approach: 'Normalize the reaction', why: 'Adjustment disorder is the diagnosis for a stressor-linked reaction that is excessive or impairing; being situational does not remove it', keys: ['school impairment', 'out-of-proportion distress'], mistake: 'Treating stressor-linked symptoms as automatically normal' }),
      O('b', 'His sadness, guilt, and stomachaches began after the separation and are clearly distressing to him and his parents', 0,
        { r: 'Right timing, but only one symptom domain', approach: 'Anchor on the emotional symptoms', why: 'The stressor link supports an adjustment disorder, but the mixed specifier also requires a conduct disturbance; emotional symptoms alone would fit a different specifier', keys: ['aggression and property destruction'], mistake: 'Confirming the stressor link without checking both domains the specifier requires' }),
      O('c', 'His outbursts at school and home are frequent enough to be a pattern that will likely persist for years to come', -2,
        { r: 'Predicting chronicity misreads the diagnosis', approach: 'Assume a fixed disorder', why: 'Adjustment disorder is expected to resolve within six months once the stressor or its consequences end; forecasting years of conduct problems misframes it', keys: ['no prior history', 'recent onset'], mistake: 'Treating a stressor reaction as an enduring conduct pattern' }),
      O('d', 'Both emotional and conduct symptoms began within three months of the separation and impair him at school and home', 3,
        { r: 'Timed to the stressor, both domains, impairing', approach: 'Match onset, specifier, and impairment', why: 'DSM-5-TR requires onset within three months of an identifiable stressor with marked distress or impairment; the mixed specifier needs both emotional and conduct symptoms', keys: ['onset after separation', 'tearfulness plus aggression', 'school impairment'], mistake: 'Skipping the timing link or one of the two symptom domains' }),
    ]),
    Q('q3', 'core', 'Which finding best distinguishes this presentation from oppositional defiant disorder?', ['R1'], [
      O('a', 'The behaviors began after the separation and have lasted under six months, with no earlier pattern of defiance', 3,
        { r: 'Recent, stressor-linked, under six months', approach: 'Apply the duration discriminator', why: 'ODD requires a persistent pattern of angry, argumentative, or vindictive behavior for at least six months; his began recently and only after the stressor', keys: ['easygoing in third grade', 'three months of symptoms'], mistake: 'Diagnosing ODD from current aggression without checking duration and onset' }),
      O('b', 'He shoves peers and throws objects, a pattern of aggression that points to conduct disorder rather than ODD', -2,
        { r: 'Misreads the criteria and the discriminator', approach: 'Use severity of acts', why: 'Aggressive acts can occur in either picture, and treating them as evidence for a conduct-level disorder points toward a more serious, wrong diagnosis; the discriminator is duration and stressor-linked onset', keys: ['shared behavior', 'no prior history'], mistake: 'Importing conduct disorder criteria and using the type of behavior rather than its course to differentiate' }),
      O('c', 'His outbursts occur in two settings, home and school, rather than being limited to only one setting at a time', -1,
        { r: 'Multiple settings do not rule out ODD', approach: 'Setting count', why: 'ODD can appear in one or more settings; pervasiveness is a severity marker, not the discriminator here', keys: ['nonspecific feature'], mistake: 'Misremembering how settings function in the ODD criteria' }),
      O('d', 'He is willing to talk with the counselor in play, which suggests he is not truly oppositional with adults', 0,
        { r: 'Rapport is suggestive but not diagnostic', approach: 'Infer from engagement', why: 'Engagement in session is consistent with the picture but children with ODD can also engage; duration and onset are the criteria-based test', keys: ['engages in play'], mistake: 'Relying on in-session behavior instead of the criteria' }),
    ]),
    Q('q4', 'core', 'His blowups cluster after exchanges and after relaying messages. How is this best conceptualized?', ['R6'], [
      O('a', 'Darius is manipulating both parents to gain more control over the custody schedule and his own routines', -2,
        { r: 'Blames the child for the system\'s pattern', approach: 'Attribute intent to the child', why: 'Nothing indicates strategic manipulation; framing a 9-year-old\'s distress as manipulation shifts responsibility from the parents\' conflict to him', keys: ['he says it is his fault'], mistake: 'Reading a loyalty bind as manipulative behavior' }),
      O('b', 'The outbursts reflect poor limit setting in Marcus\'s home that does not carry over into Renee\'s home', -1,
        { r: 'Takes one parent\'s side of the story', approach: 'Locate the problem in one household', why: 'Blowups follow transitions in both directions and when he carries messages; locating the cause in one home echoes the parents\' blame', keys: ['Sunday returns and Wednesday dinners'], mistake: 'Adopting one parent\'s narrative as the formulation' }),
      O('c', 'Darius has been triangulated into his parents\' conflict, and the loyalty bind peaks at each exchange', 3,
        { r: 'Triangulation and a loyalty bind', approach: 'Family-systems formulation', why: 'Using the child as messenger draws him into the parental conflict (Bowen triangulation); exchanges force him to cross the line between two hostile households', keys: ['messages sent through him', 'house split with him on the line'], mistake: 'Treating the outbursts as an isolated child problem rather than a family-process pattern' }),
      O('d', 'Transitions are hard for most children, so the timing mainly reflects the disruption of moving between homes', 0,
        { r: 'True but incomplete', approach: 'Transition-stress framing', why: 'Transitions do add stress, but the messenger role and open conflict at exchanges are the maintaining factors the plan must address', keys: ['conflict at exchanges'], mistake: 'Stopping at a generic explanation that misses the interparental conflict' }),
    ]),
    Q('q5', 'intake', 'Darius says, "Sometimes I wish I could disappear so they\'d stop fighting." What is the best next step?', ['R4', 'R5', 'R2'], [
      O('a', 'Note it as a figure of speech that is common in children of divorce and plan to revisit it at a later session', -1,
        { r: 'Probably benign, but must be asked now', approach: 'Defer the screen', why: 'The statement may well be nonsuicidal, but that is determined by asking directly in the moment, not assumed and deferred', keys: ['wish to disappear', 'self-blame'], mistake: 'Deciding the meaning of a passive death wish without assessing it' }),
      O('b', 'Ask him directly, in age-appropriate words, about thoughts of dying or self-harm, using a structured screen', 3,
        { r: 'Direct, developmentally worded screening', approach: 'Assess risk now with a structured tool', why: 'Passive wishes to disappear warrant direct screening; asking does not increase risk, and the pediatric C-SSRS supports age-appropriate wording, with caregivers involved in any safety planning', keys: ['wish to disappear', 'says it is his fault'], mistake: 'Avoiding direct questions with a young child' }),
      O('c', 'Ask Renee after the session whether Darius has ever said anything like this at home before now', 0,
        { r: 'Collateral cannot replace asking the child', approach: 'Collateral-only check', why: 'Parent report is useful context but does not assess the child\'s current thoughts; he is asked directly first', keys: ['child is present and talking'], mistake: 'Substituting caregiver report for direct assessment' }),
      O('d', 'Have Darius sign a short written agreement promising that he will not hurt himself before he leaves today', -2,
        { r: 'No-harm contracts are not safety planning', approach: 'No-suicide contract', why: 'No-harm contracts lack evidence and can suppress disclosure; risk is assessed and, if indicated, a collaborative safety plan is built with caregivers', keys: ['assessment not yet done'], mistake: 'Using a promise in place of assessment and safety planning' }),
    ]),

    // ---------------- Treatment Planning (4) ----------------
    Q('q6', 'treatment', 'Which treatment structure best fits this family at the start of care?', ['R2', 'R6'], [
      O('a', 'Child-centered sessions with Darius plus separate collateral sessions with each parent focused on co-parenting', 3,
        { r: 'Child sessions plus separate parent collaterals', approach: 'Protect the child while working the system', why: 'With high conflict, separate collateral work lets each parent change co-parenting behavior without exposing Darius to fights, while his sessions build coping', keys: ['parents escalate together', 'child in a loyalty bind'], mistake: 'Either excluding the parents or bringing hostile parents together too early' }),
      O('b', 'Joint parent sessions with Renee and Marcus together each week from the outset to rebuild their communication', 0,
        { r: 'Reasonable goal, premature format', approach: 'Conjoint parent work first', why: 'Joint co-parenting sessions can help later, but at this level of conflict starting conjoint risks escalation and stalls progress; separate work comes first', keys: ['cannot discuss scheduling without escalating'], mistake: 'Starting conjoint work before conflict is contained' }),
      O('c', 'Individual play therapy with Darius only, keeping both parents out of treatment so sessions stay neutral', -1,
        { r: 'The maintaining factor sits with the parents', approach: 'Child-only treatment', why: 'The messenger role and exchange conflict maintain the symptoms; without parent work, child sessions cannot change them', keys: ['parents send messages through him'], mistake: 'Treating a family-process problem in the child alone' }),
      O('d', 'Sessions with Darius and Renee only, since she has primary physical custody and handles his daily routines', -2,
        { r: 'Excludes a legal custodian and takes a side', approach: 'Primary-household only', why: 'Marcus shares legal custody and consented to take part; excluding him violates his role and aligns the counselor with one parent', keys: ['joint legal custody', 'father wants to participate'], mistake: 'Aligning treatment with the primary physical custodian' }),
    ]),
    Q('q7', 'treatment', 'The parents cannot talk without escalating. Which co-parenting goal fits best for now?', ['R6'], [
      O('a', 'Cooperative co-parenting, with weekly phone calls in which they plan Darius\'s schedule and discipline together', 0,
        { r: 'Right ideal, wrong timing', approach: 'Aim straight for cooperation', why: 'Cooperative co-parenting is the long-term ideal, but parents who escalate on contact do better first with structured parallel co-parenting', keys: ['escalation on every contact'], mistake: 'Skipping parallel co-parenting as the step before cooperation' }),
      O('b', 'Keep Darius relaying schedule details for now, since he likes feeling included in the family\'s plans', -1,
        { r: 'Keeps the child in the triangle', approach: 'Preserve the messenger role', why: 'The messenger role is a core maintaining factor; removing it is a primary goal, regardless of how the child seems to feel about it', keys: ['blowups follow relayed messages'], mistake: 'Mistaking the child\'s compliance for comfort with the role' }),
      O('c', 'Advise them to reduce Marcus\'s visits until the conflict settles so Darius has fewer hard transitions', -2,
        { r: 'Custody advice is outside the treating role', approach: 'Recommend changing parenting time', why: 'Altering court-ordered parenting time is a legal matter, and cutting a father\'s contact harms the child\'s relationship with him', keys: ['court-ordered parenting plan'], mistake: 'Offering parenting-time recommendations as a treating counselor' }),
      O('d', 'Parallel co-parenting: brief, business-like written messages and set exchange routines that keep Darius out', 3,
        { r: 'Parallel co-parenting first', approach: 'Disengage and structure', why: 'Parallel co-parenting reduces direct contact through structured, written communication and predictable exchanges, removing the child from the middle while conflict cools', keys: ['messenger role', 'conflict at exchanges'], mistake: 'Pushing for close cooperation that the conflict level cannot support' }),
    ]),
    Q('q8', 'treatment', 'Which goals best fit Darius\'s individual sessions?', ['R6', 'R1'], [
      O('a', 'Explore in depth the details of his parents\' arguments so that he can come to understand who was really at fault', -2,
        { r: 'Deepens the loyalty bind', approach: 'Adjudicate the conflict', why: 'Inviting a child to assign blame between parents intensifies triangulation and his self-blame', keys: ['loyalty bind', 'self-blame'], mistake: 'Pulling the child further into the adult conflict' }),
      O('b', 'Focus mainly on behavior charts with consequences for each outburst in both homes and at school', -1,
        { r: 'Consequences alone miss the cause', approach: 'Behavioral control only', why: 'Behavior supports can help, but without addressing feelings and the loyalty bind they treat the symptom and not the stressor response', keys: ['emotional symptoms present'], mistake: 'Treating the conduct domain while ignoring the emotional one' }),
      O('c', 'Build feelings vocabulary and calming skills for exchange days, and teach that the divorce is not his fault', 3,
        { r: 'Coping skills plus correcting self-blame', approach: 'Child-centered, stressor-focused goals', why: 'Developmentally matched goals target both domains: naming and calming feelings around exchanges and correcting the guilt that he caused the divorce', keys: ['says it is his fault', 'blowups on exchange days'], mistake: 'Choosing goals that address only behavior or only feelings' }),
      O('d', 'Use open-ended nondirective play for several months before setting any specific goals or skills with him', 0,
        { r: 'Supportive, but too unstructured here', approach: 'Purely nondirective play', why: 'Child-centered play builds safety, but with impairing outbursts, specific coping and self-blame goals belong in the plan from the start', keys: ['school impairment'], mistake: 'Delaying measurable goals for a time-limited stressor reaction' }),
    ]),
    Q('q9', 'treatment', 'How should progress on the outbursts be monitored?', ['R2', 'R3'], [
      O('a', 'Rely on Renee\'s weekly report, since Darius spends most of his time in her home during the school week', -1,
        { r: 'Single-informant data is skewed', approach: 'One-household report', why: 'One parent\'s report misses the other home and school, and in a high-conflict divorce it risks taking sides', keys: ['blowups at both homes and school'], mistake: 'Treating one parent as the sole source of truth' }),
      O('b', 'With proper authorization, track brief behavior ratings from his teacher and both homes and adjust the plan', 3,
        { r: 'Multi-informant, authorized monitoring', approach: 'Measure across settings', why: 'Symptoms appear at school and in both homes, so ratings from each setting give a fair picture; contact with the school requires authorization from a parent with legal authority', keys: ['symptoms across settings', 'joint legal custody'], mistake: 'Monitoring from one setting, or contacting the school without authorization' }),
      O('c', 'Ask Darius each week whether things feel better, since he is the one experiencing the parents\' conflict', 0,
        { r: 'Useful but not sufficient', approach: 'Child self-report only', why: 'His view matters, but a 9-year-old in a loyalty bind may minimize; multi-informant ratings are more reliable', keys: ['loyalty bind'], mistake: 'Relying only on a young child\'s global self-report' }),
      O('d', 'Call his teacher directly for updates without asking either parent, since the school made the original referral', -2,
        { r: 'Disclosure without authorization', approach: 'Assume referral equals consent', why: 'A school referral does not authorize the counselor to share information; written authorization from a parent with legal authority is needed', keys: ['confidentiality of a minor client'], mistake: 'Treating the referral source as authorized to receive information' }),
    ]),

    // ---------------- Counseling & Ethics (4) ----------------
    Q('q10', 'counseling', 'Darius asks, "Do I have to pick?" What is the most therapeutic response?', ['R6'], [
      O('a', '"It sounds really hard to feel stuck in the middle. You don\'t have to pick—it\'s okay to love both your mom and dad."', 3,
        { r: 'Reflect the bind; give permission to love both', approach: 'Name the feeling and release the bind', why: 'Reflecting his feeling and explicitly giving permission to love both parents, without criticizing either, directly addresses the loyalty bind', keys: ['asks if he has to pick', 'house drawing with him on the line'], mistake: 'Answering the question without addressing the feeling, or criticizing a parent' }),
      O('b', '"That\'s something for your parents and the judge to decide, not you. Let\'s go back to the game we were playing."', -1,
        { r: 'Deflects the emotional bid', approach: 'Redirect away from the topic', why: 'He is asking about loyalty, not custody; redirecting leaves him alone with the bind', keys: ['emotional disclosure'], mistake: 'Avoiding the child\'s distress by changing the subject' }),
      O('c', '"Which parent do you feel safer with? You can tell me, and I can help make sure that the judge hears it."', -2,
        { r: 'Pushes him to choose and creates a forensic role', approach: 'Elicit a preference for court', why: 'This deepens the loyalty bind and turns therapy into evidence gathering, a role the treating counselor should not take', keys: ['custody hearing pending'], mistake: 'Collecting custody preferences from a child client' }),
      O('d', '"No, you don\'t. Grown-up problems aren\'t yours to fix. What do you think would help you feel less worried this week?"', 0,
        { r: 'Correct message, skips the feeling', approach: 'Reassure and problem-solve', why: 'The reassurance is accurate, but moving straight to solutions without reflecting how hard the bind feels misses the emotional work', keys: ['self-blame', 'loyalty bind'], mistake: 'Jumping to reassurance before validating the feeling' }),
    ]),
    Q('q11', 'counseling', 'In a collateral session, Marcus says, "You can see what she\'s doing—you\'re on my side, right?" What is the best response?', ['R2', 'R6'], [
      O('a', 'Agree that Renee seems to be undermining him, to strengthen the alliance before addressing his own co-parenting', -2,
        { r: 'Joins one side of the triangle', approach: 'Ally with the present parent', why: 'Siding with one parent recreates the triangle with the counselor in it and destroys neutrality with the other parent', keys: ['each parent wants the counselor on their side'], mistake: 'Trading neutrality for short-term rapport' }),
      O('b', 'Tell him that comments like that are inappropriate and that the session will end if he continues making them', -1,
        { r: 'Punitive and ruptures the alliance', approach: 'Confront and set ultimatum', why: 'His frustration is understandable; a threat shames him rather than clarifying the role and redirecting', keys: ['frustrated, engaged parent'], mistake: 'Responding to a bid for alliance with a punitive limit' }),
      O('c', 'Stay quiet about the question and move straight into teaching him parallel co-parenting strategies', 0,
        { r: 'Useful content, leaves the bid unanswered', approach: 'Skip to skills', why: 'The skills are right, but leaving his question unaddressed lets the misunderstanding about the counselor\'s role stand', keys: ['asks the counselor to take a side'], mistake: 'Ignoring a role question that will resurface later' }),
      O('d', 'Validate his frustration, restate the counselor\'s role as Darius\'s counselor for both parents, and refocus', 3,
        { r: 'Empathize, clarify role, redirect', approach: 'Hold a child-centered, neutral stance', why: 'Acknowledging his frustration while restating that the counselor works for Darius and supports both relationships keeps the alliance and stays out of the triangle', keys: ['request to take sides', 'counselor sees both parents'], mistake: 'Either siding with him or shutting him down' }),
    ]),
    Q('q12', 'ethics', 'Marcus asks for a letter supporting more parenting time at the modification hearing. What should the counselor do?', ['R7', 'R2'], [
      O('a', 'Write a short letter describing Darius\'s progress and noting that both parents are participating in his care', 0,
        { r: 'Factual, but bypasses the role conversation', approach: 'Neutral progress letter', why: 'A factual summary avoids a recommendation, but writing it for one side\'s hearing without clarifying the role and authorization invites misuse as advocacy', keys: ['letter is for litigation'], mistake: 'Assuming a factual letter is role-neutral when one parent requests it for court' }),
      O('b', 'Tell Marcus to have his attorney call the counselor so they can talk through his concerns about the current schedule', -1,
        { r: 'Invites litigation into treatment', approach: 'Open a channel to counsel', why: 'Discussing a minor client with a parent\'s attorney without authorization risks confidentiality and pulls the counselor toward an advocacy role', keys: ['high-conflict litigation'], mistake: 'Treating an attorney contact as a neutral step' }),
      O('c', 'Explain that parenting-time recommendations fall outside the treating role and belong to a custody evaluator', 3,
        { r: 'Treating role, not custody evaluator', approach: 'Clarify and hold the role', why: 'ACA E.13.c. bars evaluating current clients or their family members for forensic purposes; custody questions belong to a court-appointed evaluator', keys: ['request for a custody recommendation', 'current client'], mistake: 'Blending the treating and forensic roles' }),
      O('d', 'Write the letter supporting more time for Marcus, since Darius seems calmer after his weekends with his dad', -2,
        { r: 'Forensic opinion about a current client', approach: 'Advocate for one parent', why: 'A treating counselor recommending parenting time is a prohibited dual role and rests on data the counselor has not gathered as an evaluator', keys: ['current client', 'one parent\'s request'], mistake: 'Offering custody opinions from the treating role' }),
    ]),
    Q('q13', 'ethics', 'Renee\'s attorney sends a subpoena for Darius\'s records. What is the most appropriate response?', ['R7', 'R8', 'R3'], [
      O('a', 'Disregard it, because a subpoena issued by an attorney is not a court order and carries no legal weight', -1,
        { r: 'Ignoring a subpoena has consequences', approach: 'Treat it as optional', why: 'A subpoena requires a timely response even when it does not compel disclosure; ignoring it can lead to sanctions', keys: ['legal deadline'], mistake: 'Confusing "not a court order" with "can be ignored"' }),
      O('b', 'Respond on time, seek legal consultation, notify both parents, and assert privilege unless a court order applies', 3,
        { r: 'Respond, consult, notify, protect privilege', approach: 'Protect confidentiality through proper channels', why: 'Counselors respond to a subpoena without automatically complying, consult legally, inform the privilege holders, and disclose only with valid consent or a court order, as narrowly as possible (B.2.d., B.2.e.)', keys: ['litigation between parents', 'minor client'], mistake: 'Either releasing records on receipt or ignoring the subpoena' }),
      O('c', 'Contact Renee\'s attorney, explain that the records are confidential, and wait to see what happens next', 0,
        { r: 'Protective, but incomplete', approach: 'Informal objection', why: 'Declining to release is right, but skipping legal consultation, notice to both parents, and a formal response leaves the counselor and the record exposed', keys: ['both parents hold rights'], mistake: 'Handling a legal demand informally without notifying the privilege holders' }),
      O('d', 'Send Darius\'s complete record to the attorney, since Renee has primary physical custody and supports the request', -2,
        { r: 'Full release for one side\'s litigation', approach: 'Comply on one parent\'s say-so', why: 'Releasing the whole record ignores minimum necessary, the other legal custodian\'s rights, and privilege, and harms the child\'s treatment', keys: ['joint legal custody', 'minimum necessary'], mistake: 'Equating one parent\'s support with valid authorization' }),
    ]),
  ],
};

module.exports = { CASES: [D905] };
