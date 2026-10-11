// deep-cases-batch-23-08.js — NCMHCE deep case: Always kind of down, now alone after the divorce (focus: Divorce)
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
// D908 — Persistent Depressive Disorder (F34.1) — Depressive — hard
// ============================================================================
const D908 = {
  id: 'ncmhce-D908',
  title: 'Always kind of down, now alone after the divorce',
  category: 'Depressive',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Persistent Depressive Disorder', code: 'F34.1' },
  diagnosis: { name: 'Persistent Depressive Disorder', code: 'F34.1' },
  differentialOptions: [
    { id: 'do1', name: 'Persistent Depressive Disorder', isCorrect: true },
    { id: 'do2', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do4', name: 'Alcohol Use Disorder, Mild', isCorrect: false },
  ],
  narrative: {
    intake:
      'Rafael Ortiz, a 47-year-old Puerto Rican man who works as a civil engineer for a county roads department, is referred by his employee ' +
      'assistance program to an outpatient counseling practice after his supervisor noticed he seemed "flat." He is eight months into a contested ' +
      'divorce after 19 years of marriage, has moved into a one-bedroom apartment alone, and sees his son (14) and daughter (10) every other ' +
      'weekend. He frames the visit around the divorce, then adds, "Honestly, I have always been kind of down. My ex used to say I was gray." ' +
      'On history, he describes depressed mood most days since his late twenties, low energy, early-morning waking, low self-esteem ("never the confident one"), and a sense ' +
      'that things will not get better, but he denies feeling worthless or guilty; he cannot recall a stretch of more than a few weeks when he felt well. He still enjoys fishing and time ' +
      'with his children, his appetite is unchanged, and he says his focus at work is "fine." He reports "a couple of beers at night."',
    session1:
      'Rafael is guarded and jokes when emotion comes close. He says the hardest part is "walking into an empty apartment on Sunday night" and ' +
      'that he no longer feels like a father "except on a schedule." Late in the session, while talking about weekends without the children, he ' +
      'mentions that weekends alone "go by in a blur," that he recently "finally updated the will so the kids are covered," and that he moved ' +
      'his late father\'s revolver from a closet shelf to his nightstand "since I live by myself now." He quickly adds, "Don\'t worry, I\'d never ' +
      'do anything. The kids need me." Asked directly, he acknowledges passive thoughts over the past month that the children "might be better ' +
      'off with the life insurance," denies a plan or intent, and agrees to keep talking. He says, "Men in my family handle things. Sitting here ' +
      'talking about feelings isn\'t really who I am."',
    session2:
      'Rafael returns having completed a written safety plan with the counselor and reports that his older brother is holding the revolver, ' +
      'with the ammunition kept separately; he has accepted a referral to his primary care physician for a medication evaluation. He admits that ' +
      'weekends alone mean five or six beers a night, spent at home watching television. He says handoffs with his ex-wife are so painful that he ' +
      'is thinking of skipping some weekends: "The kids are better off without me showing up like this." He also asks the counselor to write a ' +
      'letter to the family court stating he is a fit parent who should receive more custody time. Later that week, his ex-wife calls the ' +
      'practice, says she has heard Rafael is "not okay," and asks whether he is in counseling and whether the children are safe with him.',
  },
  diagnosticRationale:
    'Depressed mood for most of the day, more days than not, for well over two years (since his late twenties), with at least two associated ' +
    'symptoms (low energy, insomnia, low self-esteem, hopelessness) and no symptom-free period longer than two months, meets DSM-5-TR criteria for ' +
    'persistent depressive disorder. The low mood long predates the divorce, so an adjustment disorder does not account for it; current symptoms ' +
    '(depressed mood, early waking, fatigue, passive death thoughts) fall short of five criteria for a major depressive episode, with interest, ' +
    'appetite, and concentration preserved and worthlessness or guilt denied. Rising weekend drinking is assessed and addressed but does not explain a mood disorder that began ' +
    'decades earlier. The decisive clinical facts are buried: a firearm moved to the bedside, a recent will change, heavier drinking minimized, ' +
    'and the elevated suicide risk of a middle-aged man living alone after divorce.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Persistent depressive disorder: depressed mood most days 2+ years, 2+ associated symptoms, no symptom-free period >2 months; MDE and adjustment disorder criteria' },
    { id: 'R2', source: 'C-SSRS', detail: 'Direct inquiry into suicidal ideation, intent, plan, and preparatory behavior (e.g., making a will, acquiring or moving means)' },
    { id: 'R3', source: 'Stanley-Brown SPI', detail: 'Collaborative written safety plan: warning signs, coping, contacts, crisis lines, and making the environment safe (lethal means)' },
    { id: 'R4', source: 'VA/DoD CPG', detail: 'Assessment and Management of Patients at Risk for Suicide: risk factors (male, separated/divorced, firearm access, alcohol), lethal means safety counseling' },
    { id: 'R5', source: 'APA CPG', detail: 'Depression guideline: evidence-based psychotherapy (CBT, behavioral activation, IPT), with medication evaluation for chronic depression' },
    { id: 'R6', source: 'Miller & Rollnick (MI)', detail: 'Eliciting change talk and linking change to the client\'s own values; avoiding the righting reflex' },
    { id: 'R7', source: 'Hays (Assessment)', detail: 'Structured substance use assessment: quantity, frequency, context, and consequences' },
    { id: 'R8', source: 'Corey (Theory & Practice)', detail: 'Working alliance, gender-sensitive counseling with men, and respecting client values' },
    { id: 'R9', source: 'ACA Code of Ethics', detail: 'B.1.c. respect for confidentiality; B.2.a. serious and foreseeable harm; E.13. forensic evaluation (treating counselors do not evaluate their own clients for forensic purposes)' },
  ],
  questions: [
    // ---------------- Assessment & Conceptualization (5) ----------------
    Q('q1', 'core', 'Which finding best supports persistent depressive disorder over an adjustment disorder with depressed mood?', ['R1'], [
      O('a', 'His low mood worsened noticeably after he moved out, and he links nearly all of his current distress to the divorce itself', -1,
        { r: 'Attribution to the stressor is not the discriminator', approach: 'Stressor-attribution framing', why: 'Worsening after a stressor and the client\'s own attribution do not establish onset; the history shows low mood since his late twenties', keys: ['"always kind of down"', 'onset decades before the divorce'], mistake: 'Accepting the client\'s stressor narrative as the onset of the disorder' }),
      O('b', 'Low mood most days since his late twenties, with low energy and self-esteem, long predating the divorce and its stressors', 3,
        { r: 'Chronic low mood predating the stressor', approach: 'Establish duration and onset', why: 'PDD requires depressed mood most days for at least two years with two or more associated symptoms; his began decades before the divorce, which an adjustment disorder cannot explain', keys: ['since his late twenties', 'no well period longer than a few weeks', 'low energy, low self-esteem, hopelessness'], mistake: 'Anchoring on the divorce and missing the long-standing course' }),
      O('c', 'He reports low mood with poor sleep and fatigue for the past eight months, more days than not, since the case was filed', 0,
        { r: 'Right symptoms, wrong time frame', approach: 'Recent-symptom framing', why: 'Eight months of symptoms tied to the case fits an adjustment picture; the two-year course predating the divorce is what supports PDD', keys: ['eight months is under two years'], mistake: 'Measuring duration from the stressor instead of from the true onset' }),
      O('d', 'His symptoms will likely resolve once the divorce is final, so a stressor-related diagnosis can safely be assumed for now', -2,
        { r: 'Assuming resolution reverses the criteria', approach: 'Wait-and-see framing', why: 'A decades-long mood disorder will not lift with a court date; assuming a stressor diagnosis under-treats chronic depression in a man at elevated risk', keys: ['chronic course', 'elevated risk'], mistake: 'Assigning a time-limited diagnosis to a chronic disorder and under-treating it' }),
    ]),
    Q('q2', 'core', 'Why is major depressive disorder not the best primary diagnosis for Rafael at this time?', ['R1'], [
      O('a', 'DSM-5-TR does not allow major depressive disorder and persistent depressive disorder to be diagnosed in the same person', -1,
        { r: 'The two can co-occur', approach: 'Mutual-exclusion framing', why: 'DSM-5-TR allows full MDE criteria to be met within PDD and uses specifiers for it; the reason here is that he does not currently meet MDE criteria', keys: ['PDD specifiers for MDE'], mistake: 'Believing PDD and a major depressive episode are mutually exclusive' }),
      O('b', 'He functions at work and denies intent, which shows his depression is too mild to need a formal diagnosis right now', -2,
        { r: 'Functioning does not rule out a disorder', approach: 'Minimization framing', why: 'Preserved work function and denied intent do not erase a chronic depressive disorder or his risk; this reasoning drops both the diagnosis and the risk work', keys: ['"flat" at work', 'passive death thoughts'], mistake: 'Minimizing chronic depression because the client is still working' }),
      O('c', 'He reports only four of the nine MDE symptoms, with interest, appetite and focus intact, in a chronic low-grade course', 3,
        { r: 'Below MDE threshold; chronic low-grade course', approach: 'Count the MDE criteria', why: 'A major depressive episode needs five of nine symptoms over two weeks; he has depressed mood, early waking, fatigue and passive death thoughts, with anhedonia, appetite and concentration preserved, and he denies worthlessness or guilt (low self-esteem is a PDD symptom, not that MDE criterion)', keys: ['still enjoys fishing and his children', 'appetite unchanged', 'focus "fine"', 'denies worthlessness or guilt'], mistake: 'Calling any significant depression "major" without counting criteria' }),
      O('d', 'His low mood has lasted for many years, and that long duration by itself rules out a current major depressive episode', 0,
        { r: 'Chronicity alone does not rule out an MDE', approach: 'Chronicity framing', why: 'Duration points toward PDD, but an MDE can occur within it; the symptom count is what rules it out now', keys: ['duration supports PDD'], mistake: 'Using duration instead of the symptom count to exclude an MDE' }),
    ]),
    Q('q3', 'intake', 'Late in session 1, Rafael mentions moving his father\'s revolver to his nightstand and updating his will, then says, "I\'d never do anything—the kids need me." The best next step is to:', ['R2', 'R4'], [
      O('a', 'Ask directly about suicidal thoughts, intent and preparation, including why he changed the will, using the C-SSRS', 3,
        { r: 'Direct structured inquiry now', approach: 'Assess the buried disclosure', why: 'A firearm moved to the bedside and a recent will change can be preparatory behavior; reassurance does not replace a direct, structured assessment of ideation, intent, plan and preparation', keys: ['revolver now on nightstand', 'will "finally" updated', 'reassurance offered unprompted'], mistake: 'Letting a reassurance close the door on the disclosure that preceded it' }),
      O('b', 'Accept his reassurance, since his children are a strong protective factor, and return to the divorce material next week', -2,
        { r: 'Reassurance is not an assessment', approach: 'Protective-factor framing', why: 'Children are protective, but they do not offset firearm access, a will change and alcohol without direct inquiry; deferring is unsafe', keys: ['means at bedside', 'preparatory behavior'], mistake: 'Treating a protective factor as proof that risk is low' }),
      O('c', 'Note the firearm and will in his chart and plan a full suicide risk assessment at the start of the next session', -1,
        { r: 'Deferral leaves a loaded risk unaddressed', approach: 'Defer-to-next-session framing', why: 'The assessment is needed, but deferring it sends him home for a week with a firearm at the bedside and alcohol unassessed; that is a safety miss', keys: ['access to lethal means now'], mistake: 'Recognizing the risk but sequencing the assessment too late' }),
      O('d', 'Arrange an immediate involuntary hospital evaluation, since a firearm plus a will change means he is in acute danger', 0,
        { r: 'Right urgency, disposition before assessment', approach: 'Escalate-first framing', why: 'Level of care follows a risk assessment; he is cooperative, denies intent, and has not yet been assessed', keys: ['no assessment yet', 'engaged and cooperative'], mistake: 'Jumping to the most restrictive option before assessing' }),
    ]),
    Q('q4', 'intake', 'Rafael first describes "a couple of beers at night," then says weekends without the kids "go by in a blur." What should the counselor do?', ['R7', 'R4'], [
      O('a', 'Diagnose an alcohol use disorder now, since a blur on weekends confirms a clear pattern of dependence and lost control', -1,
        { r: 'Diagnosing before assessing', approach: 'Premature-diagnosis framing', why: 'A vague "blur" is a cue to assess quantity, frequency and consequences, not a basis for a diagnosis', keys: ['criteria not yet assessed'], mistake: 'Assigning a substance diagnosis from a single vague statement' }),
      O('b', 'Ask him to keep a drink log for the next month and wait for the log before discussing his alcohol use any further', 0,
        { r: 'Useful tool, too slow here', approach: 'Monitor-first framing', why: 'Self-monitoring helps, but alcohol interacts with firearm access now and needs specific inquiry in session', keys: ['firearm at home', 'weekends alone'], mistake: 'Delaying substance assessment that bears on current safety' }),
      O('c', 'Accept his account of a couple of beers, since moderate drinking is common and is unrelated to his level of suicide risk', -2,
        { r: 'Minimized use is a risk factor', approach: 'Take-at-face-value framing', why: 'Alcohol is a recognized suicide risk factor that lowers inhibition, especially with a firearm in the home; his own words suggest heavier use', keys: ['"blur" contradicts "a couple"', 'living alone'], mistake: 'Accepting a minimized report and ignoring alcohol as a risk factor' }),
      O('d', 'Gather specific quantity and frequency, especially on weekends alone, and note how drinking interacts with the firearm', 3,
        { r: 'Quantify use; link it to risk', approach: 'Structured substance inquiry', why: 'Specific quantity, frequency and context clarify use that he minimized, and alcohol plus firearm access raises acute risk', keys: ['"a couple" versus "a blur"', 'weekends alone', 'revolver at bedside'], mistake: 'Accepting the first, minimized description of use' }),
    ]),
    Q('q5', 'core', 'Which formulation best captures Rafael\'s current suicide risk?', ['R4', 'R2'], [
      O('a', 'Low: he denies intent, has no stated plan, and as a devoted father he has strong reasons for living that offset his overall risk', -2,
        { r: 'Denial and fatherhood do not make risk low', approach: 'Reassurance-based formulation', why: 'Denied intent and protective factors do not offset firearm access, heavier drinking, a will change and demographic risk', keys: ['revolver at bedside', 'will change', 'passive ideation'], mistake: 'Formulating risk from denial and protective factors alone' }),
      O('b', 'Elevated: a divorced middle-aged man living alone, with firearm access, rising alcohol use, hopelessness and a will change', 3,
        { r: 'Multiple interacting risk factors', approach: 'Integrate risk and warning signs', why: 'Middle-aged divorced men living alone carry elevated suicide risk, and firearm access, alcohol, hopelessness, passive ideation and possible preparatory behavior compound it', keys: ['divorced, living alone', 'firearm access', 'heavier drinking', 'will change'], mistake: 'Weighing each factor in isolation instead of together' }),
      O('c', 'Elevated mainly because chronic depression lasting many years is itself the strongest predictor of an eventual attempt', 0,
        { r: 'Right level, wrong drivers', approach: 'Diagnosis-driven formulation', why: 'Chronic depression contributes, but the acute, modifiable drivers here are means, alcohol and preparatory behavior', keys: ['modifiable factors drive the plan'], mistake: 'Locating risk in the diagnosis and missing the modifiable factors' }),
      O('d', 'Moderate, though the firearm is not relevant to his risk since he has owned it for years without any prior incident', -1,
        { r: 'Firearm access is central', approach: 'Discount-the-means framing', why: 'Firearm access is among the strongest risk factors for suicide death, and moving it to the bedside is a change, not the status quo', keys: ['moved from closet to nightstand'], mistake: 'Dismissing lethal means because of past ownership without incident' }),
    ]),
    // ---------------- Treatment Planning (4) ----------------
    Q('q6', 'treatment', 'Given this risk picture, what is the most appropriate immediate step in Rafael\'s treatment plan?', ['R3', 'R4'], [
      O('a', 'Have him sign a no-suicide contract promising to call before acting, then begin regular weekly treatment sessions', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'Contract framing', why: 'No-suicide contracts lack evidence and can create false reassurance; a collaborative safety plan is the standard', keys: ['safety plan, not contract'], mistake: 'Substituting a contract for a safety plan' }),
      O('b', 'Begin behavioral activation right away and develop a safety plan later, once his mood and engagement have improved', -1,
        { r: 'Defers safety with means at the bedside', approach: 'Treatment-first framing', why: 'Behavioral activation fits PDD, but safety planning comes first when means and warning signs are present', keys: ['firearm at bedside', 'passive ideation'], mistake: 'Sequencing safety planning behind symptom treatment' }),
      O('c', 'Build a written, collaborative safety plan with warning signs, coping steps, contacts and lethal means counseling', 3,
        { r: 'Collaborative safety plan with means safety', approach: 'Safety Planning Intervention', why: 'The Stanley-Brown plan covers warning signs, coping, social and professional contacts, crisis lines and making the environment safe', keys: ['passive ideation', 'firearm access', 'Sunday nights alone'], mistake: 'Treating the depression before addressing current safety' }),
      O('d', 'Refer him for inpatient admission today, since firearm access with depression requires a hospital level of care', 0,
        { r: 'Errs toward safety but over-restrictive', approach: 'Restrictive-default framing', why: 'He denies plan and intent and is engaged; outpatient safety planning with means counseling fits, with escalation if risk rises', keys: ['cooperative', 'no plan or intent'], mistake: 'Equating firearm access with a need for hospitalization' }),
    ]),
    Q('q7', 'treatment', 'Rafael agrees the revolver is a concern but says, "It was my dad\'s—I\'m not getting rid of it." The best approach is to:', ['R3', 'R4'], [
      O('a', 'Explore temporary off-site storage with his brother, ammunition kept apart, and confirm it is done at the next contact', 3,
        { r: 'Temporary off-site storage, verified', approach: 'Lethal means counseling', why: 'Means counseling respects ownership while reducing access during a high-risk period; temporary storage with a trusted person, separate ammunition and follow-up is the strongest option', keys: ['heirloom firearm', 'trusted brother', 'drinks alone on weekends'], mistake: 'Framing means safety as giving up the firearm for good' }),
      O('b', 'Recommend a cable lock on the revolver and suggest he keep it locked in the nightstand drawer while his mood is still low', 0,
        { r: 'Helpful but leaves access at the bedside', approach: 'Partial-measure framing', why: 'A lock adds a barrier, but a firearm at the bedside of a man who drinks alone is still close at hand; off-site storage is safer', keys: ['alcohol plus access'], mistake: 'Settling for a partial barrier when off-site storage is acceptable to him' }),
      O('c', 'Advise him to keep the revolver where it is but avoid drinking on any nights when he feels especially down and alone', -1,
        { r: 'Relies on judgment at the worst moment', approach: 'Behavioral-promise framing', why: 'Asking him to avoid drinking on bad nights relies on judgment when it is most impaired and leaves access unchanged', keys: ['weekend drinking', 'means at bedside'], mistake: 'Relying on in-the-moment restraint instead of reducing access' }),
      O('d', 'Tell him that treatment cannot continue unless he surrenders the revolver to police or sells it within the week', -2,
        { r: 'Ultimatums rupture care', approach: 'Coercive framing', why: 'Conditioning treatment on surrender risks losing an at-risk client and ignores the collaborative stance means counseling uses', keys: ['guarded engagement'], mistake: 'Making care contingent on an ultimatum and risking abandonment' }),
    ]),
    Q('q8', 'treatment', 'On non-custody weekends Rafael stays home, drinks, and watches television. Which treatment target best fits?', ['R5'], [
      O('a', 'Weekly insight-oriented exploration of how his early family life shaped his low mood, before any behavior change', 0,
        { r: 'Reasonable later, not the first target', approach: 'Insight-first framing', why: 'Exploring origins can help, but withdrawal and inactivity on those weekends are the active maintaining factors to target first', keys: ['withdrawn weekends'], mistake: 'Prioritizing insight over the behavior that maintains his mood' }),
      O('b', 'Grief processing of the divorce alone, expecting his mood to lift on its own once the court case is finally resolved', -1,
        { r: 'Treats PDD as an adjustment reaction', approach: 'Stressor-only framing', why: 'Grief work matters, but his depression predates the divorce and will not resolve with the case', keys: ['onset in late twenties'], mistake: 'Applying an adjustment framework to a chronic disorder' }),
      O('c', 'Recommending a specific antidepressant to his primary care doctor, since chronic depression responds best to medication', -2,
        { r: 'Outside counselor scope', approach: 'Prescribing framing', why: 'Counselors refer for medication evaluation; recommending a specific drug to a prescriber exceeds scope', keys: ['referral already made'], mistake: 'Acting outside scope by directing medication choice' }),
      O('d', 'Behavioral activation scheduling valued activities and social contact for those weekends, with mood tracked over time', 3,
        { r: 'Behavioral activation and social reconnection', approach: 'Target withdrawal directly', why: 'Behavioral activation is evidence-based for depression and targets the isolation and inactivity that fill his weekends alone; social contact also supports safety', keys: ['still enjoys fishing', 'brother is supportive', 'isolated weekends'], mistake: 'Leaving his weekend isolation unaddressed while working on other goals' }),
    ]),
    Q('q9', 'treatment', 'Rafael now reports five or six beers a night on weekends alone. How should his drinking be addressed in the plan?', ['R6', 'R4'], [
      O('a', 'Require full abstinence before the depression work begins, since counseling cannot help while he is still drinking', -1,
        { r: 'A precondition blocks care', approach: 'Abstinence-first framing', why: 'Co-occurring drinking is addressed within treatment; requiring abstinence first delays depression and safety work', keys: ['integrated care'], mistake: 'Making abstinence a precondition for treatment' }),
      O('b', 'Use motivational interviewing to link cutting back to his mood, safety and parenting, and track his use each session', 3,
        { r: 'Integrated MI with monitoring', approach: 'Address alcohol within the plan', why: 'MI ties change to his own values (being present for his children), and tracking use links it to mood and the safety plan', keys: ['five or six beers', 'values his kids', 'alcohol raises risk'], mistake: 'Treating the drinking as separate from the depression and risk' }),
      O('c', 'Refer him to a separate substance use program and pause the depression work until that program is fully completed', 0,
        { r: 'Referral may help; pausing does not', approach: 'Sequential-care framing', why: 'A specialty referral can be added if warranted, but pausing depression and safety care fragments treatment', keys: ['co-occurring needs'], mistake: 'Treating co-occurring problems in sequence rather than together' }),
      O('d', 'Leave the drinking alone for now, since a few beers help him sleep and raising it could hurt the new working alliance', -2,
        { r: 'Ignoring a risk factor', approach: 'Avoidant framing', why: 'Heavy drinking alone with recent firearm access is a risk factor and worsens mood and sleep; it is addressed, not avoided', keys: ['alcohol and suicide risk'], mistake: 'Avoiding a safety-relevant topic to protect rapport' }),
    ]),
    // ---------------- Counseling & Ethics (4) ----------------
    Q('q10', 'counseling', 'Rafael says, "Men in my family handle things. Sitting here talking about feelings isn\'t really who I am." The most helpful response is to:', ['R8', 'R6'], [
      O('a', 'Tell him these masculine norms are the root of his depression and that he will need to give them up to get better', -2,
        { r: 'Confronting his identity ruptures the alliance', approach: 'Confrontational framing', why: 'Attacking his values invites dropout in a man already ambivalent about help-seeking and at elevated risk', keys: ['guarded', 'ambivalent about counseling'], mistake: 'Pathologizing the client\'s identity instead of working with it' }),
      O('b', 'Encourage him to let himself cry and fully release his feelings during the session, since that is what real healing requires', -1,
        { r: 'Imposes an emotion-focused style', approach: 'Catharsis framing', why: 'Pushing emotional release mismatches his style; many men engage better through practical, goal-directed work', keys: ['jokes when emotion nears'], mistake: 'Assuming catharsis is required for change' }),
      O('c', 'Reflect his values of strength and providing, frame counseling as staying there for his kids, and keep the work practical', 3,
        { r: 'Align counseling with his values', approach: 'Gender-sensitive, values-based engagement', why: 'Reflecting his values and framing help-seeking as serving his role as a father, with action-oriented work, supports engagement', keys: ['"men in my family handle things"', 'children matter to him'], mistake: 'Either challenging his norms or ignoring them' }),
      O('d', 'Move quickly past his comment and start teaching coping skills, so the work feels practical rather than emotional', 0,
        { r: 'Practical, but skips the ambivalence', approach: 'Skills-first framing', why: 'A practical focus fits him, but skipping his stated ambivalence leaves a dropout risk unaddressed', keys: ['help-seeking ambivalence'], mistake: 'Bypassing ambivalence about counseling itself' }),
    ]),
    Q('q11', 'counseling', 'Rafael says handoffs are so painful he may skip some weekends: "The kids are better off without me showing up like this." The best response is to:', ['R2', 'R5'], [
      O('a', 'Explore the loss of his daily father role, revisit risk given "better off without me," and support keeping his weekends', 3,
        { r: 'Grief, risk check, and co-parenting stability', approach: 'Hear the burden statement', why: '"Better off without me" echoes his earlier passive ideation and calls for a risk check; consistent time with his children is protective for him and them', keys: ['"better off without me"', 'loss of daily father role', 'children as reasons for living'], mistake: 'Hearing only a scheduling problem and missing the burden statement' }),
      O('b', 'Agree that skipping a few weekends would ease his stress, since protecting his own mood should come first right now', -2,
        { r: 'Endorses withdrawal from a protective factor', approach: 'Stress-reduction framing', why: 'Skipping weekends removes his strongest protective factor and reinforces a burden belief tied to his suicidal thinking', keys: ['children as protective', 'burden belief'], mistake: 'Endorsing withdrawal from the relationships that protect him' }),
      O('c', 'Problem-solve the handoff logistics, such as a neutral exchange site, so that the transitions feel less painful for him each time', 0,
        { r: 'Helpful but incomplete', approach: 'Logistics framing', why: 'Easing handoffs can help, but the burden statement needs a risk check and his grief needs attention first', keys: ['"better off without me"'], mistake: 'Solving the logistics and skipping the risk signal' }),
      O('d', 'Suggest he ask his ex-wife about reconciling, since restoring the marriage would resolve his loss of family role', -1,
        { r: 'Imposes a goal and ignores the risk', approach: 'Directive-advice framing', why: 'Steering him toward reconciliation imposes a goal he has not chosen in a contested divorce and misses the burden statement', keys: ['contested divorce'], mistake: 'Offering advice in place of exploration' }),
    ]),
    Q('q12', 'ethics', 'Rafael asks the counselor to write a letter to the family court stating he is a fit parent who should receive more custody time. The most appropriate response is to:', ['R9'], [
      O('a', 'Decline any involvement and refer him to his attorney, without discussing what limited information could be shared', 0,
        { r: 'Correct boundary, incomplete response', approach: 'Decline-and-refer framing', why: 'Declining a fitness opinion is right, but he should hear why and what factual information can be released with consent', keys: ['informed consent about records'], mistake: 'Setting the boundary without explaining options' }),
      O('b', 'Write the letter supporting expanded custody, since the counselor knows him best and that advocacy supports his welfare', -2,
        { r: 'Forensic opinion from a treating counselor', approach: 'Advocacy framing', why: 'A treating counselor does not offer forensic opinions such as parental fitness about a client; this is a role conflict', keys: ['treating role', 'custody dispute'], mistake: 'Mixing treating and evaluative roles in a custody case' }),
      O('c', 'Write a letter detailing his diagnosis and progress and let the court decide what that means for his custody case', -1,
        { r: 'Over-discloses into a legal dispute', approach: 'Full-disclosure framing', why: 'Releasing diagnosis and clinical detail into a contested custody case goes beyond what is needed and may harm him', keys: ['minimum necessary', 'contested case'], mistake: 'Assuming clinical detail is harmless in court' }),
      O('d', 'Explain the treating role, decline a fitness opinion, and offer factual treatment information only with his consent', 3,
        { r: 'Clarify role; consented factual information', approach: 'Separate treating from forensic roles', why: 'Under ACA E.13, treating counselors do not evaluate their own clients for forensic purposes; factual information such as attendance may be shared with consent', keys: ['custody letter request', 'treating counselor'], mistake: 'Either writing a fitness opinion or refusing without explanation' }),
    ]),
    Q('q13', 'ethics', 'Rafael\'s ex-wife calls, says she heard he is "not okay," and asks whether he is in counseling and whether the children are safe with him. The counselor should:', ['R9', 'R4'], [
      O('a', 'Confirm he is a client and share his firearm and passive suicidal thoughts, since she has a right to protect the kids', -2,
        { r: 'Unauthorized disclosure', approach: 'Disclose-to-family framing', why: 'No release exists and no serious, foreseeable harm to others has been identified; sharing clinical details breaches confidentiality', keys: ['no release', 'firearm already stored with brother'], mistake: 'Disclosing without consent or a recognized exception' }),
      O('b', 'Neither confirm nor deny he is a client, offer crisis resources, then tell Rafael of the call and reassess his risk', 3,
        { r: 'Protect confidentiality; follow up on risk', approach: 'Confidentiality with a risk follow-up', why: 'Without consent the counselor cannot confirm treatment; offering crisis resources, telling Rafael and reassessing risk keeps him safe and confidential', keys: ['no release on file', 'third-party concern'], mistake: 'Either disclosing to the caller or ignoring the concern she raised' }),
      O('c', 'Confirm he is a client but reassure her he is doing fine, so she does not worry about the upcoming weekend visits', -1,
        { r: 'Confirming treatment is a disclosure', approach: 'Reassurance framing', why: 'Confirming he is a client discloses protected information, and reassuring her is inaccurate given his risk', keys: ['existence of treatment is confidential'], mistake: 'Treating confirmation of treatment as harmless' }),
      O('d', 'Decline to confirm anything and end the call quickly, without offering resources or raising the call with Rafael', 0,
        { r: 'Confidential but incomplete', approach: 'Minimal-response framing', why: 'Protecting confidentiality is correct, but the call is new risk information to raise with Rafael', keys: ['third-party concern'], mistake: 'Protecting confidentiality and dropping the safety follow-up' }),
    ]),
  ],
};

module.exports = { CASES: [D908] };
