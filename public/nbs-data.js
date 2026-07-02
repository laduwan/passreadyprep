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
];
if (typeof module !== 'undefined' && module.exports) { module.exports = { NBS_ITEMS }; }
