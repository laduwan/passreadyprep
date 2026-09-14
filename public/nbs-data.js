// nbs-data.js — item bank for the "Next Best Step" drill.
// Each item: one clinical scenario, four options (exactly one correct = the next best
// step; the rest are the traps the NCMHCE plants, including the tempting generic answer),
// per-option feedback (why), a takeaway rule/contraindication, and a source tag.
// Options are shuffled at render time, so `ok` position is not a cue.
const NBS_ITEMS = [
  { id:'nbs1', cat:'Depressive', scenario:'A client with moderate MDD discloses passive suicidal ideation ("sometimes I wish I just wouldn\u2019t wake up") but no plan or intent. What is the next best step?',
    options:[
      { t:'Safety plan, increase session frequency, and start behavioral activation', ok:true, why:'Address the SI first, then engage an activating, low-demand intervention.' },
      { t:'Begin the full cognitive-restructuring CBT protocol', why:'Trap: launching the full protocol without first addressing the SI.' },
      { t:'Teach a relaxation exercise and reassess next month', why:'Relaxation is not a stand-alone treatment and a month is too long with active SI.' },
      { t:'Refer out because SI is present', why:'Passive SI without plan/intent is within scope to manage; reflexive referral abandons the client.' },
    ], rule:'MDD + passive SI \u2192 safety plan + increased contact + behavioral activation before a full CBT protocol.', ref:'ACA / risk-first sequencing' },

  { id:'nbs2', cat:'Anxiety', scenario:'A client with GAD understands the rationale for exposure but says, "I can\u2019t do exposure \u2014 it\u2019s too much." Next best step?',
    options:[
      { t:'Validate the fear and psychoeducate on how avoidance maintains anxiety', ok:true, why:'Meet resistance with validation + the mechanism, which builds willingness.' },
      { t:'Switch the plan to relaxation training only', why:'Trap: relaxation is adjunctive, not a substitute for cognitive work and exposure.' },
      { t:'Terminate since the client won\u2019t engage in treatment', why:'Premature termination; ambivalence is workable, not a reason to end care.' },
      { t:'Proceed with the most-feared exposure to prove it\u2019s survivable', why:'Flooding without buy-in ruptures the alliance; exposure is graded and collaborative.' },
    ], rule:'Refusal of exposure \u2192 validate + psychoeducate on avoidance; don\u2019t retreat to relaxation-only or terminate.', ref:'CBT for GAD' },

  { id:'nbs3', cat:'Trauma', scenario:'A client has PTSD and a co-occurring alcohol use disorder. They are not in acute withdrawal. What is the best treatment approach?',
    options:[
      { t:'Integrated, concurrent treatment of PTSD and the SUD (e.g., COPE)', ok:true, why:'Concurrent treatment outperforms sequential for comorbid PTSD + SUD.' },
      { t:'Require sobriety first and delay trauma work indefinitely', why:'Trap: the outdated "get sober first" model; indefinite delay is exam-punished.' },
      { t:'Begin prolonged exposure and ignore the drinking', why:'Ignoring the SUD undertreats a driver of symptoms and relapse.' },
      { t:'Refer out because the case is too complex for counseling', why:'Comorbidity is common and treatable in scope with an integrated model.' },
    ], rule:'PTSD + SUD (not acute withdrawal) \u2192 integrated/concurrent treatment; only acute withdrawal justifies stabilizing that first.', ref:'COPE / integrated care' },

  { id:'nbs4', cat:'Personality', scenario:'A client with BPD reports a recent episode of cutting. In session, what is the first step?',
    options:[
      { t:'Conduct a behavioral chain analysis of the self-harm episode', ok:true, why:'Identify the trigger and function before selecting a replacement skill.' },
      { t:'Immediately teach a distress-tolerance skill (e.g., TIPP)', why:'Trap: skill-before-analysis; without the chain you don\u2019t know what to replace.' },
      { t:'Arrange hospitalization for the self-harm', why:'NSSI is not automatically suicidal; assess function before escalating care.' },
      { t:'Have the client sign a no-harm contract', why:'No-harm contracts are not evidence-based; use safety planning instead.' },
    ], rule:'BPD + self-harm \u2192 chain analysis first, then the replacement skill.', ref:'DBT sequencing' },

  { id:'nbs5', cat:'Personality', scenario:'A client with BPD calls the crisis line for the third time this week, distressed after a breakup. You have a crisis plan on file. Next best step?',
    options:[
      { t:'Follow the pre-established crisis plan', ok:true, why:'Consistency with the agreed plan avoids reinforcing crisis-driven contact.' },
      { t:'Call back immediately and extend a long unscheduled session', why:'Trap: immediate, extended responses can reinforce crisis behavior.' },
      { t:'Tell the client not to call the line again', why:'Punitive and unsafe; the plan should route, not forbid, help-seeking.' },
      { t:'Ignore the call to avoid reinforcing it', why:'Ignoring risk is unsafe; the plan structures a measured response.' },
    ], rule:'BPD crisis contact \u2192 follow the crisis plan; don\u2019t improvise reinforcing responses.', ref:'DBT / crisis planning' },

  { id:'nbs6', cat:'Substance', scenario:'A client mandated after a DUI says, "I don\u2019t really have a problem \u2014 I can handle my drinking." Next best step?',
    options:[
      { t:'Use motivational interviewing to explore ambivalence (OARS)', ok:true, why:'Precontemplation calls for MI, not action-stage interventions.' },
      { t:'Refer to an abstinence-based group and assign coping skills', why:'Trap: action-stage tools for a precontemplative client are premature.' },
      { t:'Confront the denial directly to break through it', why:'Confrontation increases resistance and is exam-punished.' },
      { t:'Require abstinence as a condition of continuing treatment', why:'Coercive contingencies at precontemplation drive dropout.' },
    ], rule:'Precontemplation \u2192 MI only; match action-stage tools to Preparation/Action.', ref:'Stages of change / MI' },

  { id:'nbs7', cat:'Bipolar', scenario:'A client with Bipolar II presents in an acute depressive episode and wants to start intensive therapy. Next best step?',
    options:[
      { t:'Refer for mood stabilization first, then add IPSRT/CBT as adjunct', ok:true, why:'Stabilize the mood episode before intensive psychotherapy.' },
      { t:'Begin an intensive CBT protocol now', why:'Trap: starting intensive therapy while actively cycling risks destabilization.' },
      { t:'Support a request for antidepressant monotherapy', why:'Antidepressant monotherapy risks a manic switch; outside scope to endorse.' },
      { t:'Start trauma processing to address the depression', why:'Processing during an active mood episode is destabilizing and premature.' },
    ], rule:'Bipolar depression \u2192 refer for stabilization first; therapy is adjunctive; never endorse antidepressant monotherapy.', ref:'Sequencing / scope' },

  { id:'nbs8', cat:'Eating', scenario:'A 19-year-old with anorexia has a BMI of 15.5, heart rate 46, and reports dizziness on standing. Next best step?',
    options:[
      { t:'Pause psychosocial treatment and facilitate medical stabilization/hospitalization', ok:true, why:'These vitals are medical red flags that override outpatient therapy.' },
      { t:'Begin CBT-E for the eating disorder', why:'Trap: starting psychotherapy while medically unstable.' },
      { t:'Begin family-based treatment (FBT)', why:'FBT still requires medical stability first at these vitals.' },
      { t:'Continue weekly outpatient monitoring', why:'Monitoring is insufficient for orthostasis + bradycardia; this needs medical care now.' },
    ], rule:'Anorexia with BMI <18.5 (esp. <16), HR <50, or orthostasis \u2192 medical stabilization before any psychosocial treatment.', ref:'ED medical thresholds' },

  { id:'nbs9', cat:'Neurocognitive', scenario:'An older adult is brought in with confusion that started over two days, fluctuates through the day, and includes poor attention. Next best step?',
    options:[
      { t:'Rule out delirium and refer for urgent medical work-up', ok:true, why:'Acute + fluctuating + inattention = delirium, a medical emergency, until proven otherwise.' },
      { t:'Diagnose major depressive disorder and start therapy', why:'Trap: mislabeling an acute medical state as depression.' },
      { t:'Diagnose dementia and begin caregiver counseling', why:'Dementia is insidious and stable; the acute, fluctuating course points to delirium.' },
      { t:'Treat it as an adjustment reaction to aging', why:'Minimizes a reversible medical emergency.' },
    ], rule:'Acute, fluctuating confusion with inattention \u2192 rule out delirium / medical referral first.', ref:'Delirium vs dementia' },

  { id:'nbs10', cat:'Psychotic', scenario:'A client is acutely psychotic with active paranoid delusions and disorganized thinking. Next best step in your role?',
    options:[
      { t:'Facilitate psychiatric referral for stabilization and build a calm alliance', ok:true, why:'Medication/stabilization is foundational; the counselor supports and coordinates.' },
      { t:'Begin exposure therapy for the paranoia', why:'Trap: exposure is contraindicated in active psychosis.' },
      { t:'Directly challenge and dispute the delusions', why:'Confrontation damages alliance; don\u2019t argue delusions in acute psychosis.' },
      { t:'Start insight-oriented, uncovering psychotherapy', why:'Uncovering work is destabilizing during active psychosis.' },
    ], rule:'Active psychosis \u2192 refer for stabilization + alliance; no exposure, no confrontation, no uncovering work.', ref:'Psychosis management' },

  { id:'nbs11', cat:'Crisis', scenario:'A client endorses suicidal ideation with a plan. What is the correct first action?',
    options:[
      { t:'Structured risk assessment (C-SSRS) \u2192 collaborative safety plan \u2192 means restriction \u2192 level of care', ok:true, why:'Assess, then match the response to the risk with a safety plan and means restriction.' },
      { t:'Have the client sign a no-suicide contract', why:'Trap: no-suicide contracts are not evidence-based.' },
      { t:'Reassure the client and schedule a routine visit next week', why:'Under-response to a plan-level disclosure.' },
      { t:'Call 911 immediately without any assessment', why:'Over-triage without assessment erodes trust and may be unwarranted; assess first.' },
    ], rule:'SI with plan \u2192 structured assessment + safety plan + means restriction + level-of-care; never a contract.', ref:'C-SSRS / Stanley-Brown' },

  { id:'nbs12', cat:'Disruptive', scenario:'A 15-year-old with conduct disorder is referred for aggression and theft. Which approach has the best evidence?',
    options:[
      { t:'Multisystemic Therapy or Functional Family Therapy engaging the family and prosocial peers', ok:true, why:'Family/system interventions have the strongest evidence for CD.' },
      { t:'Group therapy with other antisocial adolescents', why:'Trap: grouping antisocial youth is iatrogenic (deviancy training).' },
      { t:'A boot-camp / "scared straight" program', why:'These worsen outcomes and are not supported.' },
      { t:'Individual insight-oriented therapy alone', why:'Insight-only individual work underperforms family/system models for CD.' },
    ], rule:'Conduct disorder \u2192 MST/FFT + family; avoid grouping antisocial youth and punitive programs.', ref:'MST / FFT evidence' },

  { id:'nbs13', cat:'OCD-Related', scenario:'A client has OCD with contamination obsessions and washing compulsions. First-line treatment?',
    options:[
      { t:'Exposure and Response Prevention (ERP), with SSRI referral if warranted', ok:true, why:'ERP is first-line; response prevention is the active ingredient.' },
      { t:'Provide repeated reassurance that they are safe', why:'Trap: reassurance is a compulsion-equivalent that maintains OCD.' },
      { t:'Supportive talk therapy about the content of the obsessions', why:'Discussing content without response prevention doesn\u2019t treat OCD.' },
      { t:'Help the client arrange their environment to avoid triggers', why:'Accommodation/avoidance reinforces the disorder.' },
    ], rule:'OCD \u2192 ERP (not reassurance, not accommodation).', ref:'ERP for OCD' },

  { id:'nbs14', cat:'Sleep', scenario:'A client with Bipolar I disorder also has chronic insomnia. You are planning CBT-I. What is the key caution?',
    options:[
      { t:'Avoid sleep restriction (mania risk); use other CBT-I components and coordinate care', ok:true, why:'Sleep restriction can precipitate mania in Bipolar I.' },
      { t:'Apply standard sleep restriction as usual', why:'Trap: sleep restriction is contraindicated in Bipolar I.' },
      { t:'Prescribe a long-term hypnotic as the plan', why:'Counselors don\u2019t prescribe, and chronic hypnotics aren\u2019t the plan.' },
      { t:'Tell the client to simply spend more time in bed', why:'This worsens conditioned arousal and is not CBT-I.' },
    ], rule:'CBT-I sleep restriction is contraindicated in Bipolar I (mania) and seizure disorders.', ref:'CBT-I contraindications' },

  { id:'nbs15', cat:'Somatic', scenario:'A client with Somatic Symptom Disorder requests yet another round of medical tests for reassurance. Next best step?',
    options:[
      { t:'Coordinate one medical home with scheduled (not symptom-triggered) visits and provide CBT', ok:true, why:'Regular visits + CBT reduce reassurance-seeking and reinforce functioning.' },
      { t:'Facilitate additional medical testing to reassure them', why:'Trap: more testing feeds reassurance-seeking and maintains the disorder.' },
      { t:'Tell the client the symptoms are "all in your head"', why:'Invalidating and inaccurate; symptoms are experienced as real.' },
      { t:'Refer the client to a new specialist each visit', why:'Doctor-shopping reinforces illness behavior.' },
    ], rule:'SSD \u2192 single medical home + scheduled visits + CBT; don\u2019t reinforce testing/reassurance.', ref:'SSD management' },

  { id:'nbs16', cat:'Dissociative', scenario:'A client with dissociative identity disorder and extensive trauma wants to "process the memories" in the first month. Next best step?',
    options:[
      { t:'Prioritize safety and stabilization and build internal communication before any processing', ok:true, why:'Phase-oriented care: stabilize before trauma processing.' },
      { t:'Begin trauma processing of the memories now', why:'Trap: premature processing destabilizes and retraumatizes.' },
      { t:'Use hypnosis to recover additional memories', why:'Memory-recovery work is contraindicated and risks false memories.' },
      { t:'Treat the parts as psychotic hallucinations with antipsychotic referral', why:'DID parts are internal, not psychosis; this misframes treatment.' },
    ], rule:'DID \u2192 stabilize first (phase-oriented); no premature processing or memory-recovery hypnosis.', ref:'Phase-oriented DID care' },

  { id:'nbs17', cat:'Ethics', scenario:'In session, a client makes a specific, credible threat to seriously harm a named person whose location they know. Next best step?',
    options:[
      { t:'Take reasonable protective steps \u2014 which may include warning/notifying per law \u2014 disclosing only what\u2019s necessary', ok:true, why:'A serious, foreseeable threat to an identifiable person triggers the duty to protect.' },
      { t:'Keep the disclosure fully confidential no matter what', why:'Trap: confidentiality is not absolute when a duty to protect is triggered.' },
      { t:'Wait to see whether they raise it again next session', why:'Delay on an imminent, identifiable threat is unsafe.' },
      { t:'Drive to the victim and disclose the full clinical record', why:'Over-disclosure beyond what protection requires breaches confidentiality.' },
    ], rule:'Serious, foreseeable threat to an identifiable person \u2192 duty to protect (warn/notify) with minimum necessary disclosure.', ref:'ACA / duty to protect' },

  { id:'nbs18', cat:'Ethics', scenario:'A 14-year-old client discloses bruises from a caregiver "getting physical." You cannot be certain it was abuse. Next best step?',
    options:[
      { t:'File a mandated report of suspected child abuse per state law', ok:true, why:'The threshold is reasonable suspicion, not proof.' },
      { t:'Keep it confidential because the client asked you to', why:'Trap: a minor\u2019s request cannot waive the reporting duty.' },
      { t:'Investigate the family yourself before deciding', why:'Investigation is the agency\u2019s role, not a precondition to report.' },
      { t:'Wait until you are certain abuse occurred', why:'Requiring certainty violates the reasonable-suspicion standard.' },
    ], rule:'Suspected child abuse \u2192 report on reasonable suspicion; you don\u2019t investigate or wait for proof.', ref:'Mandated reporting' },

  { id:'nbs19', cat:'Depressive', scenario:'A depressed client mentions a past period of several days with little need for sleep, racing thoughts, and unusually high energy. They ask you to support starting an antidepressant. Next best step?',
    options:[
      { t:'Screen for a bipolar history and refer for evaluation before endorsing any antidepressant plan', ok:true, why:'A possible hypomanic episode changes the whole plan (manic-switch risk).' },
      { t:'Support antidepressant monotherapy to relieve the depression', why:'Trap: antidepressant monotherapy with a hypomania history risks a manic switch.' },
      { t:'Begin CBT and ignore the past episode', why:'Ignoring a possible hypomanic episode misses a critical differential.' },
      { t:'Tell them medication questions aren\u2019t your concern', why:'Coordination and screening are within the counselor\u2019s role.' },
    ], rule:'Screen for hypomania before any antidepressant plan; a positive screen \u2192 refer, don\u2019t endorse monotherapy.', ref:'Bipolar screening / scope' },

  { id:'nbs20', cat:'Anxiety', scenario:'A client with panic disorder asks whether they should just avoid the places where attacks happen and take a benzodiazepine daily. Next best step?',
    options:[
      { t:'CBT with interoceptive and situational exposure; explain why daily benzodiazepines undercut recovery', ok:true, why:'Exposure is first-line; standing benzodiazepines and avoidance maintain panic.' },
      { t:'Agree that avoiding triggers is a reasonable plan', why:'Trap: sanctioning avoidance accelerates agoraphobia.' },
      { t:'Endorse a daily as-needed benzodiazepine as the main treatment', why:'Standing benzodiazepines risk dependence and block exposure learning.' },
      { t:'Offer relaxation training as the sole intervention', why:'Relaxation alone doesn\u2019t extinguish the fear-of-fear cycle.' },
    ], rule:'Panic \u2192 exposure-based CBT; don\u2019t endorse avoidance or standing benzodiazepines.', ref:'Panic Control Treatment' },

  { id:'nbs21', cat:'Substance', scenario:'A client with severe alcohol use disorder reports tremor, sweating, and rising anxiety since cutting down yesterday. Next best step?',
    options:[
      { t:'Facilitate medical evaluation/management for withdrawal before behavioral treatment', ok:true, why:'Alcohol withdrawal can be dangerous; medical stabilization comes first.' },
      { t:'Start CBT relapse-prevention skills this session', why:'Trap: behavioral work before medically managing acute withdrawal.' },
      { t:'Do motivational interviewing and schedule next week', why:'MI doesn\u2019t address the medical risk of acute withdrawal.' },
      { t:'Refer to a 12-step meeting tonight', why:'Peer support doesn\u2019t manage the medical danger of withdrawal.' },
    ], rule:'Acute alcohol/benzo withdrawal \u2192 medical management first; then behavioral treatment.', ref:'Withdrawal safety' },

  { id:'nbs22', cat:'Scope', scenario:'A client asks you directly, "Which is better for me \u2014 sertraline or venlafaxine?" Next best step?',
    options:[
      { t:'Provide psychoeducation on combined treatment and refer to a prescriber for the medication decision', ok:true, why:'Selecting agents is outside counselor scope; educate and refer.' },
      { t:'Recommend sertraline since it\u2019s well tolerated', why:'Trap: naming a specific agent exceeds scope.' },
      { t:'Tell them medication is none of your concern', why:'Disengaging abandons a relevant clinical issue you can coordinate.' },
      { t:'Advise them to avoid medication and stick to therapy', why:'Discouraging indicated medication is outside scope and may harm.' },
    ], rule:'Counselors educate and refer for medication; they don\u2019t name or rank specific agents.', ref:'Scope of practice' },

  { id:'nbs23', cat:'Trauma', scenario:'A client with PTSD is motivated to process their trauma but is currently having active suicidal urges and feels unsafe. Next best step?',
    options:[
      { t:'Stabilize safety first (assessment + safety plan), then move to trauma processing', ok:true, why:'Stabilization precedes exposure/processing when acutely unsafe.' },
      { t:'Begin prolonged exposure this session while motivation is high', why:'Trap: processing during acute suicidality without stabilization is unsafe.' },
      { t:'Tell the client trauma work is off the table for good', why:'Overcorrection; processing is appropriate once stabilized.' },
      { t:'Refer out because trauma plus suicidality is unmanageable', why:'This is manageable in scope with proper sequencing.' },
    ], rule:'PTSD + acute suicidality \u2192 stabilize first, then process; don\u2019t start exposure while unsafe.', ref:'Phase-based trauma care' },

  { id:'nbs24', cat:'Neurodevelopmental', scenario:'Parents bring a 9-year-old with clear ADHD symptoms causing academic failure. Which plan best fits?',
    options:[
      { t:'Coordinate a medication referral, behavioral strategies, and school accommodations (IEP/504)', ok:true, why:'ADHD care is multimodal and addresses the school system, not just the child.' },
      { t:'Provide individual play therapy as the sole intervention', why:'Trap: insight/play alone underserves a skills/behavior and systems problem.' },
      { t:'Advise the parents to avoid medication entirely', why:'Discouraging indicated medication is outside scope and not evidence-based.' },
      { t:'Focus only on the child and leave the school out', why:'Ignoring accommodations misses a key modifiable factor.' },
    ], rule:'ADHD \u2192 multimodal: medication referral + behavioral strategies + school accommodations.', ref:'ADHD multimodal care' },

  { id:'nbs25', cat:'Sexual-Gender', scenario:'A client reports erectile difficulties that began abruptly and are present in all situations. Next best step?',
    options:[
      { t:'Refer for a medical evaluation to rule out organic causes before psychological treatment', ok:true, why:'Global, abrupt onset suggests possible organic contributors to rule out first.' },
      { t:'Begin sensate focus and CBT right away', why:'Trap: skipping the medical work-up when an organic cause is plausible.' },
      { t:'Interpret it as unconscious conflict and start insight work', why:'Attributes to psychology without excluding medical causes.' },
      { t:'Reassure them it will resolve on its own', why:'Dismisses a symptom that warrants evaluation.' },
    ], rule:'Sexual dysfunction \u2192 rule out medical/organic causes first; then address relational/psychological factors.', ref:'Medical work-up first' },

  { id:'nbs26', cat:'Crisis', scenario:'A client shows you superficial scratches they made "to feel something," with no wish to die. Next best step?',
    options:[
      { t:'Screen to distinguish NSSI from suicidal intent and assess the behavior\u2019s function', ok:true, why:'NSSI and suicidality differ; assess intent and function before responding.' },
      { t:'Assume a suicide attempt and call emergency services', why:'Trap: over-escalating NSSI without assessing intent.' },
      { t:'Tell them to just stop doing it and move on', why:'Dismissive; misses function and shames the client.' },
      { t:'Reassure them it\u2019s a harmless phase and drop it', why:'Under-response; NSSI still warrants assessment and monitoring.' },
    ], rule:'NSSI \u2192 assess intent and function; don\u2019t assume suicidality or dismiss it.', ref:'NSSI vs suicidality' },

  { id:'nbs27', cat:'Eating', scenario:'An adolescent with anorexia is now medically stable after treatment. Which is the best next step for ongoing care?',
    options:[
      { t:'Family-Based Treatment (or CBT-E), with continued medical monitoring', ok:true, why:'Once stable, FBT (adolescents) / CBT-E is the evidence-based psychotherapy.' },
      { t:'Individual insight-oriented therapy alone', why:'Trap: insight-only underperforms structured ED treatment.' },
      { t:'Return to inpatient medical hospitalization', why:'Not indicated once medically stable.' },
      { t:'Hold off on any therapy until the client "wants" to change', why:'Waiting on motivation delays needed structured care.' },
    ], rule:'Medically stable adolescent anorexia \u2192 FBT/CBT-E with monitoring.', ref:'ED psychotherapy' },

  { id:'nbs28', cat:'Substance', scenario:'A client with severe opioid use disorder asks about Suboxone but worries it is "just trading one addiction for another." Next best step?',
    options:[
      { t:'Provide psychoeducation that MAT is evidence-based treatment and coordinate a referral', ok:true, why:'Address the stigma; MAT has the strongest evidence for OUD.' },
      { t:'Agree that MAT is just substituting one drug for another', why:'Trap: reinforces stigma and steers away from the best-evidence treatment.' },
      { t:'Insist they attempt abstinence-only treatment first', why:'Abstinence-only first increases overdose risk versus MAT.' },
      { t:'Require residential treatment before any medication', why:'Mandating residential is not required and delays effective care.' },
    ], rule:'OUD \u2192 support MAT (evidence-based) + counseling; don\u2019t reinforce "substitution" stigma.', ref:'MAT for OUD' },

// ---- NBS items 29-48 (added batch 2) ----

  ,{ id:'nbs29', cat:'Skills',
    scenario:'A client shares painful news and the counselor responds, "I hear that — you sound devastated and completely blindsided." The client says, "Exactly." What did the counselor do correctly first?',
    options:[
      { t:'Reflected the feeling before moving to any intervention', ok:true, why:'Accurate empathy communicated first builds alliance and earns the right to intervene.' },
      { t:'Asked a clarifying question to gather more facts', why:'Trap: facts-first before the client feels heard is premature.' },
      { t:'Validated and then immediately offered a reframe', why:'A reframe before full reflection minimizes the experience.' },
      { t:'Summarized the session content to close the topic', why:'A summary here would terminate exploration prematurely.' },
    ], rule:'Distress → reflect feeling first; gather facts and intervene only after the client feels heard.', ref:'Microskills hierarchy' },

  { id:'nbs30', cat:'Skills',
    scenario:'A client repeatedly answers questions with one word and looks at the floor. The counselor has tried open questions without success. Next best step?',
    options:[
      { t:'Name the observation tentatively and invite the client to help you understand', ok:true, why:'Naming the pattern without blame opens a door; it addresses the process directly.' },
      { t:'Switch to closed questions to get at least some data', why:'Trap: closed questions deepen withdrawal rather than opening it.' },
      { t:'Interpret the silence as resistance and confront it directly', why:'Labeling resistance early damages rapport before trust is established.' },
      { t:'End the session and reschedule for when the client is ready to talk', why:'Premature termination abandons a workable clinical moment.' },
    ], rule:'Client withdrawal → tentatively name what you observe and invite their perspective before shifting technique.', ref:'Alliance repair / immediacy' },

  { id:'nbs31', cat:'Ethics',
    scenario:'A counselor realizes mid-session that a new client is the estranged sibling of a current client. Next best step?',
    options:[
      { t:'Pause, disclose the potential conflict, and consult before proceeding', ok:true, why:'Dual-relationship risk requires disclosure and consultation; proceeding without addressing it is an ethical violation.' },
      { t:'Continue the session — both clients get equal treatment', why:'Trap: the conflict is real regardless of intent to treat equally.' },
      { t:'Immediately terminate one client without explanation', why:'Abrupt termination without transition constitutes abandonment.' },
      { t:'Tell the new client about the sibling\'s therapy', why:'Disclosing the other client\'s information violates confidentiality.' },
    ], rule:'Dual-relationship discovery mid-session → disclose, pause, consult; do not continue or terminate without a plan.', ref:'ACA A.5 / dual relationships' },

  { id:'nbs32', cat:'Ethics',
    scenario:'A client asks the counselor to write a letter exaggerating their symptoms to support a disability claim. Next best step?',
    options:[
      { t:'Decline to falsify the documentation; offer to write an accurate letter instead', ok:true, why:'Falsifying documentation is insurance fraud and an ethics violation; offer honest documentation as an alternative.' },
      { t:'Write the letter as requested — advocacy for the client is part of the role', why:'Trap: advocacy does not extend to fraud, regardless of good intent.' },
      { t:'Refuse any letter to avoid involvement in the claim', why:'Refusing all documentation is unnecessarily restrictive; an accurate letter is appropriate.' },
      { t:'Suggest the client ask their psychiatrist to write it instead', why:'Delegating to deflect doesn\'t resolve the ethical issue the counselor is facing.' },
    ], rule:'Request to falsify records → decline fraud; offer accurate documentation; do not simply refer away.', ref:'ACA C.6.b / documentation ethics' },

  { id:'nbs33', cat:'Trauma',
    scenario:'A client with PTSD begins flooding with trauma material in the second session before any stabilization work has been done. Next best step?',
    options:[
      { t:'Slow the pace, use grounding, and redirect to stabilization before any trauma processing', ok:true, why:'Phase-oriented trauma care: stabilization must precede processing. Flooding early without resources causes retraumatization.' },
      { t:'Allow the narrative to continue — the client is ready to process', why:'Trap: client willingness does not equal clinical readiness. Pacing is the counselor\'s responsibility.' },
      { t:'Redirect to a different topic entirely to avoid the trauma content', why:'Avoiding avoids the clinical opportunity; grounding and redirect is more skillful.' },
      { t:'Refer immediately for EMDR since trauma processing is needed', why:'Referral before stabilization shifts the problem but doesn\'t solve it.' },
    ], rule:'Trauma flooding before stabilization → ground, slow, redirect; never process before the client has coping resources.', ref:'Phase-oriented trauma care' },

  { id:'nbs34', cat:'Trauma',
    scenario:'A veteran client with PTSD refuses to discuss the trauma directly and says, "I just need to move on." Next best step?',
    options:[
      { t:'Respect the current position, explore functional goals, and build alliance before revisiting trauma processing', ok:true, why:'Forcing trauma processing without alliance or consent replicates the helplessness of trauma. Stabilization and goals first.' },
      { t:'Confront the avoidance directly — avoidance maintains PTSD', why:'Confrontation without alliance triggers defensive entrenchment, not engagement.' },
      { t:'Agree to never discuss the trauma and focus only on symptoms', why:'Over-accommodating avoidance removes any path to trauma resolution.' },
      { t:'Refer out because PTSD requires a trauma-focused specialist', why:'PTSD is within counselor scope; premature referral abandons a workable case.' },
    ], rule:'Client refusing trauma processing → honor current readiness; build alliance and functional goals; revisit when trust is established.', ref:'Trauma-informed care / client autonomy' },

  { id:'nbs35', cat:'Cultural',
    scenario:'A client from a collectivist background says their family disagrees with the counselor\'s recommendation that they live independently. Next best step?',
    options:[
      { t:'Explore what independence means within the client\'s cultural context before recommending it', ok:true, why:'Western individualism is not universally appropriate; explore cultural meaning before imposing a framework.' },
      { t:'Explain to the family why independence is clinically indicated', why:'Trap: imposing a culturally specific goal to family members doubles down on the error.' },
      { t:'Continue the goal — the client is the identified client, not the family', why:'Ignoring the cultural and systemic context undermines culturally competent care.' },
      { t:'Refer to a counselor from the same cultural background', why:'Deflecting responsibility does not resolve the immediate clinical error.' },
    ], rule:'Western goal conflicts with collectivist values → explore cultural meaning first; never impose independence as the default good.', ref:'Cultural competence / MSJCC' },

  { id:'nbs36', cat:'Cultural',
    scenario:'A client who is undocumented expresses fear about their status and asks whether therapy records could be used against them. Next best step?',
    options:[
      { t:'Explain confidentiality and its limits honestly, and clarify what a subpoena or law enforcement request would require', ok:true, why:'Clients have a right to accurate information about their records. Honest disclosure supports informed participation in therapy.' },
      { t:'Reassure them that records are totally private with no exceptions', why:'Trap: false assurance about absolute confidentiality is dishonest and may create harm if records are ever subpoenaed.' },
      { t:'Decline to discuss legal matters — refer to an attorney', why:'While legal referral may be part of the response, it does not resolve the client\'s immediate need for accurate information about their records.' },
      { t:'Avoid documenting anything to protect the client', why:'Failing to document appropriately creates liability and is not a sanctioned clinical response.' },
    ], rule:'Undocumented client asks about records → give accurate, honest information about confidentiality limits; do not falsely reassure.', ref:'ACA B.1 / informed consent' },

  { id:'nbs37', cat:'Depressive',
    scenario:'A client with MDD has responded well to CBT but tells you they have run out of medication and cannot afford to refill it. Next best step?',
    options:[
      { t:'Help the client access medication assistance (PAP, community health, sliding-scale psychiatry) while continuing therapy', ok:true, why:'Advocacy and resource navigation are within scope; abrupt medication discontinuation is a real clinical risk.' },
      { t:'Focus only on therapy — medication is the psychiatrist\'s domain', why:'Trap: dismissing an urgent practical barrier undermines effective care.' },
      { t:'Increase session frequency to compensate for the missing medication', why:'More therapy does not substitute for medication in moderate-severe MDD; this delays addressing the real issue.' },
      { t:'Discharge and refer to a community mental health center', why:'Discharging a stable client over an access barrier is unnecessarily disruptive.' },
    ], rule:'Client cannot afford medication → advocate for access (PAP, sliding scale); don\'t ignore a real clinical risk by staying in your lane too narrowly.', ref:'Advocacy / integrated care' },

  { id:'nbs38', cat:'Anxiety',
    scenario:'A client with social anxiety says their goal is to "feel less anxious at work." As written, this goal is not adequate for treatment planning. Next best step?',
    options:[
      { t:'Collaboratively restate it as a specific, measurable, behavioral goal', ok:true, why:'Vague goals cannot be tracked or evaluated. A SMART goal (e.g., "initiate one conversation with a coworker weekly") is actionable.' },
      { t:'Accept the goal and begin exposure without further refinement', why:'Proceeding with a vague goal means no way to measure progress or know when therapy is complete.' },
      { t:'Tell the client the goal is not good enough and ask them to try again', why:'Criticizing the client\'s goal damages alliance; collaborative refinement is more skillful.' },
      { t:'Set a symptom reduction goal based on GAD-7 scores instead', why:'While tracking GAD-7 is useful, replacing the client\'s own goal with a clinician measure is not collaborative goal-setting.' },
    ], rule:'Vague goal → collaboratively make it specific, measurable, behavioral, and time-bound before beginning treatment.', ref:'SMART goals / treatment planning' },

  { id:'nbs39', cat:'Personality',
    scenario:'A client with BPD calls between sessions in distress saying they are thinking about cutting. This is the third call this week. Next best step?',
    options:[
      { t:'Assess current safety, use DBT phone coaching skills, and address the between-session call pattern in the next session', ok:true, why:'DBT phone coaching is a legitimate component of treatment; assess safety then use skills; then address the pattern therapeutically, not punitively.' },
      { t:'Refuse the call to reinforce that between-session contact is not allowed', why:'Trap: refusing during a safety situation constitutes abandonment; the clinical response comes first.' },
      { t:'Hospitalize immediately since cutting is mentioned', why:'The mention of thinking about cutting requires safety assessment, not automatic hospitalization.' },
      { t:'Terminate treatment because the client is non-compliant with session boundaries', why:'Terminating a client in distress for boundary-testing behavior is abandonment and clinically harmful.' },
    ], rule:'BPD between-session crisis call → safety first, DBT skills; address the pattern in-session, not by refusing the call.', ref:'DBT phone coaching' },

  { id:'nbs40', cat:'Crisis',
    scenario:'After a client makes a credible threat to hurt a named coworker, the client leaves before the session ends. Next best step?',
    options:[
      { t:'Notify the identifiable potential victim and law enforcement per your state\'s duty-to-protect statute, and document all actions', ok:true, why:'Once the client has left, the counselor\'s duty to protect the third party is unchanged. Warn/notify per Tarasoff and state law.' },
      { t:'Wait until the next session to discuss the threat with the client', why:'Trap: waiting when a credible, specific threat was made delays legally required protective action.' },
      { t:'Call the client and ask them not to follow through', why:'Calling the client first is not the legal protective action the statute requires.' },
      { t:'Document the threat and take no action since it might not happen', why:'Reasonable belief of serious threat triggers the duty; probability of harm is not required to be certain.' },
    ], rule:'Credible specific threat + client has left → Tarasoff duty activates; warn identifiable victim and/or notify law enforcement now.', ref:'Tarasoff / duty to protect' },

  { id:'nbs41', cat:'Neurodevelopmental',
    scenario:'Parents bring a 7-year-old for "not listening" and failing to complete homework. The counselor suspects ADHD but also sees signs of anxiety. Next best step?',
    options:[
      { t:'Conduct a comprehensive evaluation including ADHD rating scales, anxiety screener, developmental history, and teacher report', ok:true, why:'ADHD and anxiety overlap significantly; differential diagnosis requires multiple informants and multiple instruments.' },
      { t:'Diagnose ADHD and recommend stimulant medication', why:'Trap: diagnosing and recommending medication without a full evaluation is premature and potentially harmful.' },
      { t:'Start anxiety treatment first since anxiety is easier to treat', why:'Sequencing without a diagnosis is guessing; a full evaluation guides the sequencing.' },
      { t:'Attribute the behavior to poor parenting and begin parent training', why:'Jumping to parenting intervention before ruling out a neurodevelopmental condition misses the primary driver.' },
    ], rule:'Inattention + possible anxiety in a child → comprehensive multi-informant evaluation first; do not diagnose from parent report alone.', ref:'ADHD/anxiety differential' },

  { id:'nbs42', cat:'Substance',
    scenario:'A client in early recovery from alcohol use disorder mentions they have been drinking NyQuil each night to sleep. Next best step?',
    options:[
      { t:'Identify the alcohol content in OTC cold medications as a relapse risk and explore non-alcohol sleep alternatives', ok:true, why:'Many OTC medications contain alcohol; this is a common relapse vector in early recovery. Address it directly and problem-solve.' },
      { t:'Tell the client NyQuil is fine since it\'s a medicine, not alcohol', why:'Trap: any alcohol intake in early recovery is clinically significant and potentially relapse-triggering.' },
      { t:'Refer to a sleep specialist without addressing the NyQuil', why:'Referring without addressing the immediate substance issue leaves a relapse risk unmanaged.' },
      { t:'Require the client to stop taking NyQuil or face discharge', why:'Ultimatums without psychoeducation and alternatives are coercive and clinically counterproductive.' },
    ], rule:'Early recovery + OTC alcohol-containing products → psychoeducate on alcohol content, explore non-alcohol alternatives; don\'t dismiss it.', ref:'Relapse prevention / recovery' },

  { id:'nbs43', cat:'Eating',
    scenario:'A client with bulimia nervosa describes a new pattern of fasting for 3 days after each binge-purge cycle. Next best step?',
    options:[
      { t:'Assess for medical complications, increase session frequency, and evaluate whether a higher level of care is indicated', ok:true, why:'Extended fasting after purging escalates medical risk (electrolytes, cardiac) and signals treatment intensification is needed.' },
      { t:'Continue the current plan and note the new pattern', why:'Trap: noting without responding to an escalating medical risk is inadequate.' },
      { t:'Focus cognitive work on the shame that drives fasting', why:'Cognitive work is part of treatment but medical safety is the first concern given extended fasting.' },
      { t:'Praise the client for reducing binge frequency', why:'Reframing fasting as progress ignores the medical danger and reinforces restriction.' },
    ], rule:'Escalating restriction in bulimia → medical risk assessment first; consider higher LOC; do not frame restriction as improvement.', ref:'Eating disorder level of care' },

  { id:'nbs44', cat:'Psychotic',
    scenario:'A client with schizophrenia, who has been stable on antipsychotics, reports they stopped their medication two weeks ago because "I feel fine." Next best step?',
    options:[
      { t:'Explore the decision without shaming, provide psychoeducation on discontinuation risk, and coordinate with the prescriber urgently', ok:true, why:'Non-adherence is the primary driver of relapse in schizophrenia. A non-judgmental response + urgent prescriber contact prevents a deterioration cycle.' },
      { t:'Tell them they must restart medication or you will hospitalize them', why:'Coercive ultimatum before exploring the decision and offering education damages alliance and is not the first step.' },
      { t:'Accept the decision since they feel fine and are competent', why:'Trap: feeling fine 2 weeks post-discontinuation is the prodromal window for relapse; not addressing it is clinically negligent.' },
      { t:'Discharge them to a psychiatrist and close the case', why:'Discharging at the moment of medication non-adherence removes the therapeutic relationship precisely when it is most needed.' },
    ], rule:'Medication non-adherence in schizophrenia → explore, psychoeducate, contact prescriber urgently; feeling fine ≠ safe to discontinue.', ref:'Schizophrenia relapse prevention' },

  { id:'nbs45', cat:'Sleep',
    scenario:'A client with chronic insomnia asks for a sleep aid prescription. As a counselor (not a prescriber), next best step?',
    options:[
      { t:'Introduce CBT-I (the evidence-based first-line treatment) and explain why it outperforms medication long-term', ok:true, why:'CBT-I has stronger long-term outcomes than sleep medications for chronic insomnia; counselors can and should offer it and explain why it is preferred.' },
      { t:'Refer to a physician for the prescription they requested without offering any counseling approach', why:'Trap: referring without offering CBT-I means the client gets medication but not the evidence-based counseling treatment.' },
      { t:'Tell the client their request is outside your scope and end the conversation', why:'Sleep treatment is within scope; CBT-I is a counseling intervention, not a prescription.' },
      { t:'Agree that medication is the best approach and support the referral', why:'Agreeing medication is best is clinically inaccurate for chronic insomnia; CBT-I is first-line.' },
    ], rule:'Chronic insomnia + prescription request → offer CBT-I first and explain the evidence; refer for medication evaluation only as augmentation.', ref:'CBT-I / insomnia first-line treatment' },

  { id:'nbs46', cat:'Bipolar',
    scenario:'A client with known Bipolar I returns saying they feel "amazing" — sleeping only 4 hours, started two businesses, and "everything is coming together." Next best step?',
    options:[
      { t:'Screen for manic/hypomanic episode; contact prescriber immediately; assess safety', ok:true, why:'Racing energy, decreased sleep, and grandiosity in a client with Bipolar I is a manic episode until proven otherwise. This is urgent.' },
      { t:'Validate the positive mood — the client has worked hard to feel good', why:'Trap: validating a manic episode as recovery delays urgent intervention.' },
      { t:'Increase therapy frequency to support the client\'s new ventures', why:'Supporting a manic episode\'s projects is clinically harmful; urgent prescriber contact is the priority.' },
      { t:'Wait and monitor — decreased sleep alone is not diagnostic', why:'Decreased sleep + grandiosity + elevated energy in Bipolar I history = urgent evaluation, not watchful waiting.' },
    ], rule:'Bipolar I + decreased sleep + grandiosity + elevated energy → presume mania; prescriber contact urgently; do not validate as wellness.', ref:'Mania recognition / Bipolar I' },

  { id:'nbs47', cat:'Scope',
    scenario:'A client asks the counselor to diagnose their adult child who has never been seen by the counselor, based on the client\'s description of the child\'s behavior. Next best step?',
    options:[
      { t:'Decline to diagnose the absent person; focus on the client\'s experience and relationship with the child', ok:true, why:'Diagnosing third parties who have never been assessed violates diagnostic integrity and professional ethics. Redirect to the client\'s own experience.' },
      { t:'Offer a tentative diagnosis to help the client understand the child better', why:'Trap: "tentative" diagnoses of absent third parties still cause harm and are outside ethical scope.' },
      { t:'Diagnose with a disclaimer that it\'s just your opinion', why:'Adding a disclaimer does not make a third-party diagnosis ethical or clinically sound.' },
      { t:'Refer the client to a psychiatrist who can give a better diagnosis of the child', why:'Delegating the same ethical violation to another professional does not resolve it.' },
    ], rule:'Request to diagnose an absent third party → decline; focus on the client\'s own experience of the relationship.', ref:'Diagnostic ethics / scope of practice' },

  { id:'nbs48', cat:'Skills',
    scenario:'During a session, a client\'s affect suddenly shifts from engaged to flat, and they give one-word answers mid-topic. The counselor notices feeling a subtle heaviness in the room. Next best step?',
    options:[
      { t:'Use immediacy — name what you notice in the room right now and invite the client to explore it', ok:true, why:'Immediacy brings the here-and-now shift into the open as therapeutic data. Continuing the agenda ignores a live clinical signal.' },
      { t:'Continue with the planned agenda — the client may just be tired', why:'Trap: ignoring an affect shift and blaming fatigue misses an alliance or trauma signal.' },
      { t:'Ask the client directly, "Are you angry at me?"', why:'A direct accusatory question escalates rather than opens; tentative naming is more skillful.' },
      { t:'Summarize the session and end early to give the client space', why:'Ending early avoids the relational moment rather than working with it.' },
    ], rule:'Mid-session affect shift → use immediacy; name the shift tentatively and invite exploration before continuing.', ref:'Immediacy / here-and-now' },
];
if (typeof module !== 'undefined' && module.exports) { module.exports = { NBS_ITEMS }; }
