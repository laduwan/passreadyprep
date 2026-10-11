// deep-cases-batch-23-09.js — NCMHCE deep case: Defiance toward a new stepfather a year into a remarriage (focus: Blended family issues / remarriage-recommitment)
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
// D909 — Oppositional Defiant Disorder (F91.3) — Disruptive — easy
// ============================================================================
const D909 = {
  id: 'ncmhce-D909',
  title: 'Defiance toward a new stepfather a year into a remarriage',
  category: 'Disruptive',
  difficulty: 'easy',
  primaryDiagnosis: { name: 'Oppositional Defiant Disorder', code: 'F91.3' },
  diagnosis: { name: 'Oppositional Defiant Disorder', code: 'F91.3' },
  differentialOptions: [
    { id: 'do1', name: 'Oppositional Defiant Disorder', isCorrect: true },
    { id: 'do2', name: 'Conduct Disorder, Adolescent-Onset Type', isCorrect: false },
    { id: 'do3', name: 'Adjustment Disorder, with Disturbance of Conduct', isCorrect: false },
    { id: 'do4', name: 'Disruptive Mood Dysregulation Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Imani Carter, a 14-year-old African American ninth grader, is brought to an outpatient counseling practice by her mother, Tasha Carter-Bell (39, ' +
      'a dental hygienist), and her stepfather, Marcus Bell (42, an HVAC technician), who married 13 months ago. Marcus made the first call and offered ' +
      'to sign the intake paperwork himself because Tasha works days. Imani\'s biological father, Andre Carter, lives two hours away; the parents share ' +
      'joint legal custody, Tasha has primary physical custody, and Imani visits Andre every other weekend. For about eight months, several times a ' +
      'week, Imani loses her temper, is touchy and resentful, argues with both adults, refuses chores and curfew, deliberately turns her music up when ' +
      'Marcus asks for quiet, and blames others for her mistakes. Her teachers describe her as respectful, she holds a B average and runs track, and ' +
      'Andre reports few problems at his house. There is no aggression toward people or animals, property destruction, stealing, running away, or ' +
      'truancy. Between conflicts her mood is unremarkable, temper episodes are verbal, and they began after age 13. A routine C-SSRS screen is ' +
      'negative, and she denies self-harm and substance use.',
    session1:
      'In a family session, Marcus describes taking Imani\'s phone and setting new curfews himself "so she knows who\'s in charge," and Tasha has been ' +
      'deferring to him to "show we\'re a team." Imani snaps, "You\'re not my dad." Alone with the counselor, she says her father jokes that she ' +
      'doesn\'t have to listen to Marcus, that she sometimes likes Marcus and then feels guilty, and that her mother has her pass schedule messages ' +
      'to Andre. The counselor joins with each member and notes a stepparent-led discipline pattern and a parental subsystem that is not yet unified.',
    session2:
      'The plan shifts limit-setting to Tasha while Marcus builds one-on-one time with Imani (he now drives her to track practice) and backs Tasha\'s ' +
      'rules. Both adults begin parent management training: specific praise, clear calm requests, and consistent, predictable consequences. The ' +
      'counselor offers psychoeducation that stepfamilies typically take years, not months, to feel like a family. Arguments are down modestly, and ' +
      'Imani asks what the counselor will tell her mother and Marcus about their individual conversations.',
  },
  diagnosticRationale:
    'An eight-month pattern of angry/irritable mood (loses temper, touchy, resentful), argumentative/defiant behavior (argues with adults, refuses ' +
    'requests, deliberately annoys, blames others), occurring at least weekly with non-sibling adults, best fits oppositional defiant disorder, mild ' +
    '(confined to one setting, home). It is distinct from conduct disorder (no aggression, destruction, theft, or serious rule violations), from ' +
    'adjustment disorder with disturbance of conduct (full criteria for a specific disorder are met for six months or more), and from disruptive mood ' +
    'dysregulation disorder (no severe recurrent outbursts across settings, no persistent irritability between them, onset after age 10).',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'ODD: 4+ symptoms from angry/irritable, argumentative/defiant, vindictive clusters; 6+ months; at least weekly for age 5+; with a non-sibling; severity by number of settings; differentials CD, adjustment disorder, DMDD' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Family systems therapy: structural family therapy (Minuchin) joining, subsystems, boundaries, coalitions; family life-cycle and remarried-family adjustment' },
    { id: 'R3', source: 'NICE guidelines', detail: 'Antisocial behaviour and conduct disorders in children and young people (CG158): parent- and family-focused interventions as first-line; medication not routine' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.2.d. inability to give consent (assent of minors, include family); A.8. multiple clients; B.4.b. couples and family counseling; B.5.b. responsibility to parents and legal guardians' },
    { id: 'R5', source: 'State law', detail: 'Consent to treat a minor rests with a parent or legal guardian per custody order; a stepparent lacks authority absent adoption or guardianship' },
    { id: 'R6', source: 'Hays (Assessment)', detail: 'Multi-informant, multi-setting assessment of child behavior, including collateral and standardized rating scales' },
    { id: 'R7', source: 'C-SSRS', detail: 'Routine structured suicide-risk screening at intake' },
  ],
  questions: [
    // ---------------- Assessment & Conceptualization (5) ----------------
    Q('q1', 'intake', 'What is most important to confirm to support a diagnosis of oppositional defiant disorder for Imani?', ['R1'], [
      O('a', 'At least four angry, defiant, or vindictive symptoms, weekly or more for six months, with someone other than a sibling', 3,
        { r: 'Symptom count, frequency, duration, and non-sibling target', approach: 'Confirm the core ODD criteria', why: 'DSM-5-TR requires four or more symptoms from the three clusters, at least weekly for six months in a youth this age, shown with at least one non-sibling', keys: ['eight months of temper and arguing', 'conflict with both adults', 'several times a week'], mistake: 'Diagnosing ODD from one bad stretch without checking symptom count, frequency, and duration' }),
      O('b', 'That the defiance began on a specific date tied to the wedding, since an identifiable trigger is what establishes the diagnosis', -1,
        { r: 'A trigger is not an ODD criterion', approach: 'Precipitant framing', why: 'ODD is defined by a persistent symptom pattern, not by an identifiable starting event', keys: ['pattern-based criteria'], mistake: 'Treating an onset trigger as the diagnostic test rather than the symptom pattern' }),
      O('c', 'That Imani is also showing the oppositional behavior at school and at her father\'s house before any diagnosis is given', 0,
        { r: 'Multiple settings set severity, not the diagnosis', approach: 'Pervasiveness framing', why: 'ODD may be confined to one setting; settings determine the severity specifier rather than whether the disorder is present', keys: ['home-only pattern'], mistake: 'Confusing the severity specifier with a requirement for the diagnosis' }),
      O('d', 'That she has engaged in aggression, property damage, or theft, since these are needed before a disruptive disorder is coded', -2,
        { r: 'This reverses the CD/ODD boundary', approach: 'Severity-escalation framing', why: 'Aggression, destruction, and theft are conduct disorder features; ODD specifically does not require them', keys: ['no aggression or theft'], mistake: 'Applying conduct disorder criteria as a gate for ODD, a criterion reversal' }),
    ]),
    Q('q2', 'core', 'Given that the behavior occurs at home with both adults but not at school or at her father\'s house, the severity specifier is:', ['R1'], [
      O('a', 'Moderate, because the symptoms appear with two different people in the home, her mother and her stepfather', -1,
        { r: 'Severity counts settings, not people', approach: 'Count-the-people framing', why: 'DSM-5-TR rates ODD severity by the number of settings, and both adults are in one setting, the home', keys: ['one setting'], mistake: 'Counting the number of adults involved instead of the number of settings' }),
      O('b', 'Severe, because the defiance happens several times a week and has lasted for well over six months', -2,
        { r: 'Frequency and duration do not set severity', approach: 'Intensity framing', why: 'Frequency and duration are diagnostic thresholds; severity is set by settings, and overrating it can drive overly restrictive care', keys: ['home-only pattern'], mistake: 'Using frequency as the severity metric and inflating the clinical picture' }),
      O('c', 'Mild, because the symptoms are confined to one setting, the home, even though they involve both adults', 3,
        { r: 'One setting equals mild', approach: 'Apply the setting-based specifier', why: 'DSM-5-TR rates ODD mild when symptoms are confined to one setting; school and her father\'s house are largely problem-free', keys: ['respectful at school', 'few problems at Andre\'s', 'conflict at home'], mistake: 'Basing severity on how intense or frequent the conflict feels rather than on settings' }),
      O('d', 'Unspecified until teacher rating scales are back, since severity cannot be judged from parent and youth report', 0,
        { r: 'Collateral helps, but the data already fit mild', approach: 'Defer-for-data framing', why: 'Collateral data are useful, and teacher report already describes her as respectful; the current picture supports mild', keys: ['teacher report available'], mistake: 'Withholding a supportable specifier while waiting for more data' }),
    ]),
    Q('q3', 'core', 'Which finding best distinguishes Imani\'s presentation from conduct disorder?', ['R1'], [
      O('a', 'Her behavior has lasted more than six months, which is longer than the time frame required for conduct disorder', -1,
        { r: 'Duration does not separate them', approach: 'Duration framing', why: 'Conduct disorder uses a 12-month window for its criteria; duration is not the discriminator here', keys: ['pattern content matters'], mistake: 'Using duration rather than the type of behavior to separate ODD from CD' }),
      O('b', 'She shows no aggression, property destruction, theft, or serious rule violations, only angry and defiant behavior', 3,
        { r: 'No CD-type behaviors', approach: 'Contrast the behavior type', why: 'Conduct disorder involves violating others\' rights or major norms; Imani\'s behavior is angry, argumentative, and defiant without those acts', keys: ['no aggression or theft', 'no running away or truancy'], mistake: 'Labeling a defiant adolescent as conduct disordered because the conflict is intense' }),
      O('c', 'She is still doing well academically and in track, so a conduct problem could not be the cause of the conflict', 0,
        { r: 'Good school functioning is supportive, not decisive', approach: 'Functioning framing', why: 'School success fits a home-confined pattern, but the defining contrast is the absence of CD-type behaviors', keys: ['B average', 'runs track'], mistake: 'Relying on a supportive finding instead of the defining criterion' }),
      O('d', 'Her defiance is aimed at her stepfather, so it is better explained as a family problem than as a mental disorder', -2,
        { r: 'Dismisses a diagnosable pattern', approach: 'Relational-only framing', why: 'Family context informs treatment but does not erase a pattern meeting ODD criteria with both adults', keys: ['conflict with mother too'], mistake: 'Dismissing criteria-level symptoms because they occur within a family context' }),
    ]),
    Q('q4', 'core', 'Why is adjustment disorder with disturbance of conduct not the best diagnosis here?', ['R1'], [
      O('a', 'Adjustment disorders apply only to stressors that are sudden and traumatic, and a remarriage is a planned family event', -1,
        { r: 'Misstates the adjustment disorder stressor', approach: 'Stressor-type framing', why: 'Adjustment disorders can follow any identifiable stressor, including a remarriage; the stressor type is not the problem', keys: ['identifiable stressor present'], mistake: 'Believing adjustment disorders require a traumatic stressor' }),
      O('b', 'The symptoms began about five months after the wedding, which is outside the window needed for an adjustment disorder', 0,
        { r: 'Onset timing is relevant but not decisive', approach: 'Onset-window framing', why: 'Onset beyond three months does argue against it, but the decisive point is that full ODD criteria are met', keys: ['onset months after wedding'], mistake: 'Relying on onset timing rather than the met criteria of a specific disorder' }),
      O('c', 'An adjustment disorder would require that she also have a depressed or anxious mood alongside the conduct problems', -2,
        { r: 'Misstates the subtype criteria', approach: 'Mixed-subtype framing', why: 'The disturbance-of-conduct subtype does not require mood symptoms; this reasoning misreads the criteria', keys: ['subtype definitions'], mistake: 'Confusing subtypes and requiring features the diagnosis does not need' }),
      O('d', 'Her symptoms meet full criteria for a specific disorder, ODD, over six months, so adjustment disorder is not used', 3,
        { r: 'A specific disorder\'s criteria are met', approach: 'Apply the exclusion rule', why: 'Adjustment disorder is not diagnosed when the disturbance meets criteria for another specific mental disorder, as Imani\'s does for ODD', keys: ['four-plus ODD symptoms', 'eight months'], mistake: 'Defaulting to adjustment disorder because a family stressor is present' }),
    ]),
    Q('q5', 'intake', 'What is the best way to complete the assessment of Imani\'s behavior?', ['R6', 'R7'], [
      O('a', 'Rely on the mother\'s and stepfather\'s account, since parents of a minor are the most reliable source of information', -1,
        { r: 'Single-informant data are incomplete', approach: 'Parent-only framing', why: 'Youth behavior assessment draws on multiple informants and settings; parent report alone can miss context such as loyalty binds', keys: ['multi-informant standard'], mistake: 'Treating parent report as sufficient for an adolescent assessment' }),
      O('b', 'Gather data from Imani alone, both adults, her father, and school, using rating scales and a routine risk screen', 3,
        { r: 'Multi-informant, multi-setting assessment', approach: 'Triangulate informants and settings', why: 'Multi-informant, multi-setting data confirm the pattern and the setting-based specifier, and routine risk screening is standard', keys: ['home-only pattern', 'father\'s and teacher reports', 'C-SSRS screen'], mistake: 'Relying on whoever brought the youth in rather than triangulating' }),
      O('c', 'Interview Imani alone in depth before speaking with any adults, so the family\'s views do not bias her account', 0,
        { r: 'Time alone matters, but not to the exclusion of others', approach: 'Youth-first framing', why: 'Individual time with an adolescent is important, but the assessment still integrates parent, father, and school input', keys: ['time alone with Imani'], mistake: 'Over-weighting one informant instead of integrating all of them' }),
      O('d', 'Ask Imani to describe her worst behavior in front of both adults so everyone hears the same account at once', -2,
        { r: 'Public confession risks shame and escalation', approach: 'Joint-disclosure framing', why: 'Pressing an oppositional teen to recount misbehavior before both adults invites shame, escalation, and loss of alliance', keys: ['fragile stepfamily alliance'], mistake: 'Using a confrontational joint format that damages engagement' }),
    ]),
    // ---------------- Treatment Planning (4) ----------------
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment approach for Imani and her family?', ['R3', 'R2'], [
      O('a', 'Parent management training for Tasha and Marcus, combined with family sessions addressing stepfamily roles', 3,
        { r: 'Parent- and family-focused treatment', approach: 'Match the guideline to the home-based pattern', why: 'Parent- and family-focused interventions are first-line for oppositional behavior, and family sessions target the stepfamily dynamics driving it', keys: ['home-confined defiance', 'stepparent-led discipline'], mistake: 'Treating the adolescent alone when the pattern lives in family interactions' }),
      O('b', 'Individual anger-management sessions for Imani, with the adults kept out of treatment so she feels it is hers', 0,
        { r: 'Helpful but incomplete', approach: 'Individual-only framing', why: 'Individual skills work can help, but excluding the adults leaves the family pattern that maintains the defiance untouched', keys: ['family-based pattern'], mistake: 'Placing the whole problem in the adolescent rather than the system' }),
      O('c', 'A referral for a medication evaluation as the first step, since medication is the main treatment for defiance', -1,
        { r: 'Medication is not first-line for ODD', approach: 'Medication-first framing', why: 'Guidelines do not recommend routine medication for oppositional behavior; psychosocial family treatment comes first', keys: ['no comorbidity'], mistake: 'Applying a medication-first model to a disruptive behavior disorder' }),
      O('d', 'A referral to a residential program to give the household a break and reset Imani\'s attitude toward rules', -2,
        { r: 'Unnecessarily restrictive', approach: 'Out-of-home framing', why: 'Mild, home-confined ODD with no safety concerns calls for outpatient family treatment, not removal from the home', keys: ['mild severity', 'no safety concerns'], mistake: 'Escalating to the most restrictive level of care without clinical need' }),
    ]),
    Q('q7', 'treatment', 'How should discipline roles be structured in this stepfamily early in treatment?', ['R2', 'R3'], [
      O('a', 'Marcus should take over discipline now and enforce stricter consequences, so Imani learns to accept his authority', -2,
        { r: 'Stepparent-led discipline escalates conflict', approach: 'Authority-first framing', why: 'Early stepparent-led discipline before a relationship exists tends to provoke resistance and loyalty conflict, worsening defiance', keys: ['"You\'re not my dad"', 'phone taken by Marcus'], mistake: 'Assuming a stepparent earns authority by enforcing it, which intensifies the cycle' }),
      O('b', 'Marcus should step back from household rules entirely and ignore rule-breaking, so he is not seen as the enemy', -1,
        { r: 'Disengagement undermines the couple', approach: 'Withdrawal framing', why: 'A fully disengaged stepparent weakens the parental unit; he should support Tasha\'s rules while building connection', keys: ['parental subsystem not unified'], mistake: 'Swinging from over-involvement to total disengagement' }),
      O('c', 'Tasha should lead limit-setting while Marcus builds a bond with Imani and backs up the rules Tasha sets', 3,
        { r: 'Biological parent leads discipline early', approach: 'Sequence stepparent authority behind the relationship', why: 'Early in a stepfamily, the biological parent leads discipline while the stepparent builds a relationship and supports her rules', keys: ['stepparent-led discipline', 'Marcus driving her to track'], mistake: 'Expecting a new stepparent to hold full disciplinary authority from the start' }),
      O('d', 'Both adults should share discipline equally from the start, presenting a united front on every consequence', 0,
        { r: 'United front is right; equal discipline is premature', approach: 'Equal-authority framing', why: 'A unified couple matters, but equal disciplinary roles before the stepparent-child bond forms tend to fuel resistance', keys: ['13-month-old marriage'], mistake: 'Getting the goal right but the stepfamily sequencing wrong' }),
    ]),
    Q('q8', 'treatment', 'Using structural family therapy, which treatment focus is most appropriate?', ['R2'], [
      O('a', 'Begin by having the family reenact their worst conflict in session, before any rapport has been built with each person', 0,
        { r: 'Enactment is structural, but sequencing is off', approach: 'Enactment-first framing', why: 'Enactments are a structural tool, but joining comes first so the family can tolerate the counselor unbalancing them', keys: ['early treatment'], mistake: 'Using a structural technique before joining with the family' }),
      O('b', 'Explore each adult\'s family-of-origin patterns across generations as the main focus, using a genogram each session', -1,
        { r: 'A different family model', approach: 'Intergenerational framing', why: 'Multigenerational exploration belongs to Bowenian work; the structural focus is on present subsystems and boundaries', keys: ['current structure'], mistake: 'Applying a Bowenian framework when the plan calls for structural work' }),
      O('c', 'Side with Imani against Marcus in early sessions so she trusts the counselor enough to engage in treatment', -2,
        { r: 'Creates a cross-generational coalition', approach: 'Coalition framing', why: 'Aligning with the child against a parent forms a cross-generational coalition, the very structure the therapy aims to dissolve', keys: ['parental subsystem not unified'], mistake: 'Building alliance with the teen by undermining the parental subsystem' }),
      O('d', 'Join with each member, then strengthen the Tasha-Marcus parental subsystem and clarify generational boundaries', 3,
        { r: 'Join, then restructure subsystems and boundaries', approach: 'Apply structural family therapy', why: 'Structural therapy joins with each member, then strengthens the parental subsystem and clarifies boundaries between adults and child', keys: ['Tasha deferring to Marcus', 'stepparent-led discipline'], mistake: 'Skipping joining or leaving the parental subsystem divided' }),
    ]),
    Q('q9', 'treatment', 'Tasha says she expected Imani to "come around" within a few months of the wedding. The best planning response is to:', ['R2'], [
      O('a', 'Agree that a year is long enough and that Imani\'s continued resistance means the remarriage may not be working', -2,
        { r: 'Pathologizes a normal stepfamily timeline', approach: 'Failure framing', why: 'Ongoing adjustment at one year is common; framing it as remarriage failure adds strain and is inaccurate', keys: ['13-month-old marriage'], mistake: 'Treating ordinary stepfamily development as evidence the family has failed' }),
      O('b', 'Offer psychoeducation that stepfamilies often take years to integrate, and set goals that fit that realistic pace', 3,
        { r: 'Realistic expectations of stepfamily development', approach: 'Normalize the timeline and align goals', why: 'Stepfamily integration commonly takes years; realistic expectations reduce pressure and support achievable treatment goals', keys: ['"come around" within months', 'modest early gains'], mistake: 'Leaving the instant-family expectation unaddressed so the family feels it is failing' }),
      O('c', 'Reassure her that once Imani has a diagnosis and treatment, the family should feel blended within a few weeks', -1,
        { r: 'Sets an unrealistic timeline', approach: 'Quick-fix framing', why: 'Treatment helps, but promising rapid blending repeats the unrealistic expectation driving frustration', keys: ['realistic pace'], mistake: 'Replacing one unrealistic timeline with another' }),
      O('d', 'Focus the plan only on Imani\'s behavior targets and set aside the adults\' expectations as outside the scope of care', 0,
        { r: 'Behavior goals matter, but expectations drive the system', approach: 'Narrow-target framing', why: 'Behavior targets are needed, yet adult expectations shape the family climate and belong in the plan', keys: ['family-based plan'], mistake: 'Ignoring how parental expectations maintain conflict' }),
    ]),
    // ---------------- Counseling & Ethics (4) ----------------
    Q('q10', 'counseling', 'Alone with the counselor, Imani says, "I sometimes like Marcus, but then I feel like I\'m betraying my dad." The most therapeutic response is to:', ['R2'], [
      O('a', 'Validate the loyalty bind and explain that caring about Marcus does not take anything away from her father', 3,
        { r: 'Name and normalize the loyalty conflict', approach: 'Validate and reframe the loyalty bind', why: 'Children in stepfamilies often feel caring for a stepparent betrays the other parent; validating this and freeing her to care for both reduces the bind', keys: ['guilt after liking Marcus', 'father\'s jokes'], mistake: 'Missing the loyalty conflict that fuels her defiance toward Marcus' }),
      O('b', 'Reassure her that Marcus is her real family now and that she should focus on building a bond with him instead', -1,
        { r: 'Asks her to choose, deepening the bind', approach: 'Replacement framing', why: 'Positioning Marcus as replacing her father intensifies the loyalty conflict rather than easing it', keys: ['both fathers matter'], mistake: 'Asking a child to transfer loyalty rather than hold both relationships' }),
      O('c', 'Tell her the counselor will ask her father to stop his comments so she no longer has to feel caught in the middle', -2,
        { r: 'Breaches her trust and acts without consent', approach: 'Rescuer framing', why: 'Contacting her father about a private disclosure without discussion breaks her trust and the confidentiality agreement', keys: ['individual time', 'confidentiality limits'], mistake: 'Acting on a teen\'s disclosure without her input or agreed limits' }),
      O('d', 'Shift to discussing her behavior at home, since her feelings about her father are a separate issue from the defiance', 0,
        { r: 'Behavior matters, but the feeling drives it', approach: 'Behavior-only framing', why: 'Her loyalty bind is directly tied to the defiance toward Marcus; redirecting misses the clinical opening', keys: ['loyalty-driven defiance'], mistake: 'Treating the loyalty conflict as unrelated to the oppositional behavior' }),
    ]),
    Q('q11', 'counseling', 'Imani complains that her mother has her pass schedule and money messages to her father. The most helpful counselor response is to:', ['R2'], [
      O('a', 'Suggest that Imani write her parents\' messages down carefully so she relays them accurately and avoids arguments', -1,
        { r: 'Keeps her in the messenger role', approach: 'Better-messenger framing', why: 'Improving her relaying keeps her in the middle of adult business, sustaining the loyalty strain', keys: ['messages to Andre'], mistake: 'Optimizing the triangulation instead of ending it' }),
      O('b', 'Encourage Imani to refuse to pass along messages and to tell both parents she is done helping them with logistics', 0,
        { r: 'Right goal, wrong person responsible', approach: 'Youth-boundary framing', why: 'She should not carry messages, but the adults, not the teen, are responsible for changing the pattern', keys: ['adult responsibility'], mistake: 'Placing the boundary work on the adolescent rather than the parents' }),
      O('c', 'Tell Imani her mother is wrong to involve her and that she should take her complaint straight to her father', -2,
        { r: 'Undermines a parent and deepens triangulation', approach: 'Take-sides framing', why: 'Criticizing her mother to the child and steering her to the other parent creates a coalition and widens the split', keys: ['loyalty conflict'], mistake: 'Aligning with the teen against a parent across households' }),
      O('d', 'With consent, coach Tasha and Andre to communicate directly so Imani is no longer the go-between for adult issues', 3,
        { r: 'Remove the child from the middle', approach: 'Detriangulate the coparenting', why: 'Direct coparent communication removes Imani from adult business and eases the loyalty bind between households', keys: ['messages to Andre', 'loyalty strain'], mistake: 'Leaving the child as the channel between parents' }),
    ]),
    Q('q12', 'ethics', 'At the first call, Marcus offers to sign the consent for Imani\'s treatment because Tasha works days. The most appropriate response is to:', ['R5', 'R4'], [
      O('a', 'Accept Marcus\'s signature, since he lives in the home and is acting in the role of a parent for Imani day to day', -2,
        { r: 'A stepparent lacks legal consent authority', approach: 'Household-role framing', why: 'Absent adoption or guardianship, a stepparent cannot consent to a minor\'s treatment; accepting it treats Imani without valid consent', keys: ['married 13 months', 'no adoption'], mistake: 'Equating a household role with legal authority to consent' }),
      O('b', 'Let Marcus sign now and have Tasha co-sign at a later visit once treatment is already well underway', -1,
        { r: 'Treatment begins without valid consent', approach: 'Consent-later framing', why: 'Valid consent is obtained before treatment begins, not ratified after services are underway', keys: ['consent before services'], mistake: 'Starting services and backfilling legal consent later' }),
      O('c', 'Explain that consent must come from a legal parent, arrange it with Tasha, and seek Imani\'s assent as well', 3,
        { r: 'Legal parent consents; minor assents', approach: 'Obtain valid consent and assent', why: 'Consent for a minor rests with a parent or guardian under state law and the custody order, and counselors also seek the minor\'s assent', keys: ['Tasha has custody', 'joint legal custody with Andre'], mistake: 'Accepting whichever adult is available rather than the legal parent' }),
      O('d', 'Obtain consent from Imani herself, since at 14 she is mature enough to decide about her own counseling', 0,
        { r: 'Assent matters, but she is not the consenting party here', approach: 'Minor-consent framing', why: 'Her assent is sought, but for a family-initiated case the legal parent consents unless state law grants the minor that right', keys: ['age 14', 'state law varies'], mistake: 'Treating assent as legal consent without checking state law' }),
    ]),
    Q('q13', 'ethics', 'Imani asks what the counselor will tell her mother and Marcus about their individual conversations. The most appropriate response is to:', ['R4', 'R5'], [
      O('a', 'Promise that nothing she says alone will be shared with any adult, so she feels safe being honest in sessions', -2,
        { r: 'Promises confidentiality that cannot be kept', approach: 'Total-secrecy framing', why: 'Parents hold legal rights for a minor and safety exceptions apply; an absolute promise misleads her and cannot be honored', keys: ['minor client', 'safety exceptions'], mistake: 'Guaranteeing confidentiality beyond legal and ethical limits' }),
      O('b', 'Review the limits agreed with the family: general progress is shared, details stay private unless safety requires', 3,
        { r: 'Clarify agreed limits for a minor', approach: 'Explain confidentiality and its limits', why: 'In family work with a minor, counselors clarify at the outset what is shared with parents and the safety exceptions, respecting the parents\' rights', keys: ['family and individual time', 'parents\' legal rights'], mistake: 'Leaving confidentiality limits vague in family work with a minor' }),
      O('c', 'Tell her that her mother can hear everything she says, since parents have a right to know all of a minor\'s sessions', -1,
        { r: 'Overstates disclosure and erodes trust', approach: 'Full-disclosure framing', why: 'Parents have rights, but counselors balance them with the minor\'s privacy through agreed limits rather than sharing everything', keys: ['adolescent privacy'], mistake: 'Treating parental rights as requiring disclosure of all session content' }),
      O('d', 'Tell her the counselor will decide case by case afterward what to share, depending on how sessions with her go', 0,
        { r: 'Judgment matters, but limits are set up front', approach: 'Ad hoc framing', why: 'Clinical judgment applies, but limits are agreed in advance so she can make informed choices about what to disclose', keys: ['informed consent'], mistake: 'Setting confidentiality rules after the fact instead of at the outset' }),
    ]),
  ],
};

module.exports = { CASES: [D909] };
