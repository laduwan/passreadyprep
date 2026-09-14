// assess-data.js — item bank for the "What to Assess Next" drill.
// Assessment/administration selection: one vignette, four options for what to
// administer, screen, gather, or rule out next (exactly one correct). Feedback
// on why it fits and why the others are premature/wrong-tool/wrong-sequence,
// plus the deciding rule and a source. Same schema as nbs-data.js / dx-data.js.
// Instruments and sequencing mirror the ebook's "Assessment Tools in Context"
// sections, the Assessment Compendium, and the decision-tree assessment steps.
const ASSESS_ITEMS = [
  { id:'as1', cat:'Safety', scenario:'A client mentions, for the first time, that "some days I don\u2019t see the point of going on." What should you do next?',
    options:[
      { t:'Administer a structured suicide-risk assessment (C-SSRS / Columbia)', ok:true, why:'A disclosure of possible ideation calls for structured risk assessment before anything else.' },
      { t:'Give the PHQ-9 and score the depression', why:'A depression screen does not characterize acute suicide risk (plan, intent, means).' },
      { t:'Move straight to building a safety plan', why:'The safety plan comes after you assess the level of risk, not before.' },
      { t:'Note it and continue with the session agenda', why:'Deferring assessment of possible suicidality is unsafe.' },
    ], rule:'Possible suicidality \u2192 structured risk assessment (C-SSRS) first; the safety plan follows.', ref:'C-SSRS / suicide-risk tree' },

  { id:'as2', cat:'Substance', scenario:'A client who drinks heavily every day reports tremor and sweating whenever he cuts back since yesterday. What do you assess next?',
    options:[
      { t:'Assess withdrawal severity (CIWA-Ar) and arrange medical evaluation', ok:true, why:'Emerging withdrawal signs require severity assessment and medical management.' },
      { t:'Administer the AUDIT to screen for a use disorder', why:'AUDIT screens for the disorder; it does not gauge the acute medical danger of withdrawal.' },
      { t:'Administer the PHQ-9 for depression', why:'A mood screen misses the medical emergency in front of you.' },
      { t:'Do motivational interviewing about cutting down', why:'MI does not address the acute physiological risk of alcohol withdrawal.' },
    ], rule:'Signs of alcohol/benzo withdrawal \u2192 CIWA-Ar + medical evaluation, not a screening questionnaire.', ref:'CIWA / withdrawal tree' },

  { id:'as3', cat:'Neurocognitive', scenario:'A 72-year-old is brought in with confusion that began two days ago, fluctuates through the day, and impairs attention. What is the priority assessment?',
    options:[
      { t:'Refer for medical work-up (labs, medication review) to rule out delirium', ok:true, why:'Acute, fluctuating, inattentive presentation is delirium until proven otherwise \u2014 a medical work-up comes first.' },
      { t:'Administer the MoCA and diagnose a neurocognitive disorder', why:'Cognitive testing during a possible delirium can\u2019t establish a dementia diagnosis.' },
      { t:'Administer the PHQ-9 for depression', why:'This misreads an acute medical state as depression.' },
      { t:'Complete a mental status exam and reassure the family', why:'An MSE alone doesn\u2019t address the underlying medical emergency.' },
    ], rule:'Acute + fluctuating + inattention \u2192 medical work-up to rule out delirium before cognitive testing.', ref:'Neurocognitive assessment' },

  { id:'as4', cat:'Mood', scenario:'A depressed adult asks to begin treatment for depression. Before you plan treatment, what should you assess?',
    options:[
      { t:'Screen for a history of hypomania/mania (e.g., MDQ)', ok:true, why:'Screening for bipolarity before treating depression prevents a manic switch and changes the plan.' },
      { t:'Administer the PHQ-9 and begin CBT', why:'Severity scoring skips the crucial bipolar screen that determines the safe plan.' },
      { t:'Administer the GAD-7 for anxiety', why:'Relevant later, but it doesn\u2019t address the bipolar-vs-unipolar question first.' },
      { t:'Refer for an antidepressant right away', why:'Endorsing an antidepressant before screening for hypomania risks destabilization.' },
    ], rule:'Screen for hypomania before treating depression (bipolar screen first).', ref:'Mood assessment sequencing' },

  { id:'as5', cat:'Psychotic', scenario:'A young adult presents with new-onset hallucinations and disorganized thinking. What is the first assessment step?',
    options:[
      { t:'Obtain a medical and substance work-up (labs, tox screen) to rule out organic causes', ok:true, why:'Substance and medical causes must be excluded before diagnosing a primary psychotic disorder.' },
      { t:'Administer a personality inventory', why:'Personality testing is irrelevant and premature in acute psychosis.' },
      { t:'Diagnose schizophrenia and begin CBTp', why:'Duration and medical rule-outs are not established; this is premature.' },
      { t:'Administer the PHQ-9', why:'A depression screen doesn\u2019t address the psychotic presentation or its medical causes.' },
    ], rule:'New psychosis \u2192 rule out substances/medical causes before a primary psychotic diagnosis.', ref:'Psychotic spectrum assessment' },

  { id:'as6', cat:'Eating', scenario:'A 17-year-old with restrictive eating is at a very low body weight and reports dizziness. What should you assess first?',
    options:[
      { t:'Obtain vital signs, orthostatic BP/HR, and labs (medical assessment)', ok:true, why:'Medical stability is assessed before any psychological assessment or treatment in low-weight eating disorders.' },
      { t:'Administer the EDE-Q and begin CBT-E', why:'Starting the psychological work skips the medical safety assessment.' },
      { t:'Administer the SCOFF and schedule weekly sessions', why:'A brief screen doesn\u2019t capture the acute medical risk her weight and symptoms signal.' },
      { t:'Give a body-image questionnaire', why:'Body-image data is secondary to medical safety here.' },
    ], rule:'Low-weight eating disorder \u2192 vitals, orthostatics, and labs before psychosocial assessment.', ref:'Eating disorder assessment' },

  { id:'as7', cat:'Neurodevelopmental', scenario:'A 28-year-old reports trouble focusing and wonders if he has ADHD. What assessment approach fits best?',
    options:[
      { t:'Gather developmental/childhood history and collateral, plus rating scales', ok:true, why:'ADHD requires evidence of childhood onset across settings \u2014 self-report alone is insufficient.' },
      { t:'Administer a self-report ADHD checklist and diagnose from it', why:'Self-report alone can\u2019t establish childhood onset or rule out mimics.' },
      { t:'Refer for a stimulant trial to see if it helps', why:'A medication trial is not a diagnostic assessment.' },
      { t:'Administer the PHQ-9 and stop there', why:'Screening for depression doesn\u2019t assess the ADHD question.' },
    ], rule:'Adult ADHD \u2192 childhood-onset evidence + collateral + rating scales, not self-report alone.', ref:'ADHD assessment' },

  { id:'as8', cat:'Neurodevelopmental', scenario:'Parents report their 8-year-old is inattentive and disruptive. What is the best assessment strategy?',
    options:[
      { t:'Collect multi-informant ratings across settings (parent and teacher, e.g., Vanderbilt)', ok:true, why:'Child behavioral assessment requires cross-setting, multi-informant data.' },
      { t:'Rely on the child\u2019s self-report of symptoms', why:'Young children are poor sole reporters of their own behavior.' },
      { t:'Base the assessment on a single office observation', why:'One setting can\u2019t establish the cross-situational pattern required.' },
      { t:'Administer an adult depression scale to the child', why:'Wrong instrument and wrong target.' },
    ], rule:'Child behavior \u2192 multi-informant, cross-setting rating scales.', ref:'Child assessment' },

  { id:'as9', cat:'Trauma', scenario:'A client has a Criterion-A trauma history and you\u2019ve established current safety. What do you administer to assess PTSD?',
    options:[
      { t:'A validated PTSD measure (PCL-5 self-report; CAPS-5 clinician interview for diagnosis)', ok:true, why:'Validated trauma measures assess PTSD; CAPS-5 is the clinician-administered gold standard.' },
      { t:'Begin exposure therapy immediately', why:'Treatment is not assessment, and exposure before assessment/stabilization is premature.' },
      { t:'Administer the GAD-7', why:'A generalized-anxiety scale doesn\u2019t assess PTSD.' },
      { t:'Administer the MMSE', why:'A cognitive screen is unrelated to trauma symptom assessment.' },
    ], rule:'PTSD \u2192 validated measure (PCL-5 / CAPS-5); CAPS-5 is clinician-administered.', ref:'Trauma assessment tools' },

  { id:'as10', cat:'Anxiety', scenario:'A 40-year-old has a first-ever episode of racing heart, chest tightness, and terror. Before diagnosing panic, what should you assess?',
    options:[
      { t:'Rule out medical causes (thyroid, cardiac, caffeine/substances)', ok:true, why:'Medical mimics of panic must be excluded before a first-time panic diagnosis.' },
      { t:'Diagnose panic disorder and start CBT', why:'Diagnosing before ruling out medical causes is premature.' },
      { t:'Administer the PDSS and proceed to treatment', why:'A severity scale assumes the diagnosis you haven\u2019t yet confirmed.' },
      { t:'Refer for a standing benzodiazepine', why:'This is a treatment step, and the wrong one, not an assessment.' },
    ], rule:'First-presentation panic \u2192 rule out medical/substance mimics before diagnosing.', ref:'Anxiety assessment' },

  { id:'as11', cat:'Assessment skills', scenario:'You want to track a depressed client\u2019s symptom severity across sessions in routine outpatient care. Best tool?',
    options:[
      { t:'PHQ-9 (brief self-report) administered at intervals', ok:true, why:'The PHQ-9 is a practical self-report measure well-suited to repeated monitoring.' },
      { t:'HAM-D at every session', why:'The HAM-D is clinician-administered, longer, and used mainly in research/inpatient settings.' },
      { t:'Informal check-in only, no measure', why:'Measurement-based care outperforms impressions for tracking change.' },
      { t:'MoCA each session', why:'A cognitive screen doesn\u2019t track depression severity.' },
    ], rule:'PHQ-9 = brief self-report for monitoring; HAM-D is clinician-rated (know the difference).', ref:'Depression measures' },

  { id:'as12', cat:'Neurocognitive', scenario:'You want to screen for mild cognitive impairment in an older adult with subtle memory complaints. Best instrument?',
    options:[
      { t:'MoCA (more sensitive to mild impairment)', ok:true, why:'The MoCA detects mild cognitive impairment that the MMSE often misses.' },
      { t:'MMSE only', why:'The MMSE is less sensitive to mild impairment and executive dysfunction.' },
      { t:'PHQ-9', why:'A depression screen doesn\u2019t assess cognition (though pseudodementia is worth ruling out).' },
      { t:'No screening \u2014 reassure and monitor', why:'Subtle complaints warrant an objective screen, not reassurance alone.' },
    ], rule:'For mild impairment, the MoCA is more sensitive than the MMSE.', ref:'Cognitive screening' },

  { id:'as13', cat:'Substance', scenario:'During intake, a client\u2019s answers suggest possible problem drinking, but there\u2019s no acute withdrawal. What do you administer?',
    options:[
      { t:'A brief screening tool (AUDIT, or CAGE/DAST as appropriate)', ok:true, why:'AUDIT/CAGE/DAST are the screening instruments for use problems.' },
      { t:'CIWA-Ar', why:'CIWA measures acute withdrawal severity, not screening for a use problem.' },
      { t:'Diagnose a use disorder without counting criteria', why:'Diagnosis requires assessing DSM-5 criteria, not a hunch.' },
      { t:'PHQ-9', why:'A mood screen doesn\u2019t assess the substance question.' },
    ], rule:'Screen substance use with AUDIT/CAGE/DAST; CIWA is for acute withdrawal, not screening.', ref:'Substance screening' },

  { id:'as14', cat:'Assessment skills', scenario:'It\u2019s the first session with a new client. Before any standardized tools, what grounds your assessment?',
    options:[
      { t:'A clinical interview with a mental status exam (MSE)', ok:true, why:'The interview + MSE are the structured foundation that guides which tools to use.' },
      { t:'Immediately hand the client a battery of questionnaires', why:'Instruments follow the clinical picture; leading with a battery is premature.' },
      { t:'Diagnose from the intake paperwork alone', why:'Forms don\u2019t substitute for a clinical assessment.' },
      { t:'Skip assessment and start an intervention', why:'Intervening before assessment is not appropriate.' },
    ], rule:'The clinical interview + MSE ground assessment and point to the right instruments.', ref:'MSE / intake' },

  { id:'as15', cat:'Mood', scenario:'A client became tearful and withdrawn after a parent\u2019s recent death. What is the appropriate assessment focus?',
    options:[
      { t:'Assess the time course, functional impairment, and specific depressive features (worthlessness, SI)', ok:true, why:'Distinguishing normal grief from MDD depends on course, function, and specific symptoms.' },
      { t:'Diagnose MDD and start medication', why:'Grief and MDD overlap; diagnosing without assessing the distinguishing features is premature.' },
      { t:'Administer the PHQ-9 and treat by the score', why:'A score alone can\u2019t separate grief from a major depressive episode.' },
      { t:'Assume it will pass and defer assessment', why:'Some bereaved clients do develop MDD; assessment is warranted.' },
    ], rule:'Grief vs MDD \u2192 assess course, function, and specific depressive symptoms, not just a score.', ref:'Mood differential assessment' },

  { id:'as16', cat:'Ethics & scope', scenario:'A cognitively impaired adult\u2019s ability to consent to treatment is unclear, and no guardian is in place. What do you do?',
    options:[
      { t:'Obtain a formal capacity evaluation before proceeding', ok:true, why:'When capacity is unclear and no proxy exists, a formal evaluation protects the client and clinician.' },
      { t:'Proceed with treatment and document that he seemed to understand', why:'An informal impression is insufficient when capacity is genuinely in question.' },
      { t:'Have a family member sign, without any evaluation', why:'A relative isn\u2019t automatically a legal decision-maker.' },
      { t:'Defer all care indefinitely', why:'Delay isn\u2019t the answer; assess capacity and involve the client to the extent possible.' },
    ], rule:'Unclear capacity, no proxy \u2192 formal capacity evaluation before consent-dependent treatment.', ref:'Informed consent / capacity' },

  { id:'as17', cat:'Ethics & scope', scenario:'A teen makes an ambiguous comment that could indicate abuse. What is the appropriate assessment step?',
    options:[
      { t:'Gently clarify the disclosure enough to determine reasonable suspicion', ok:true, why:'You assess to the threshold of reasonable suspicion \u2014 the trigger for reporting.' },
      { t:'Conduct a detailed forensic interview of the child yourself', why:'Investigating is the agency\u2019s role, not the counselor\u2019s.' },
      { t:'Investigate the family before deciding anything', why:'You don\u2019t investigate; you report on reasonable suspicion.' },
      { t:'Wait for clear proof before assessing further', why:'The threshold is suspicion, not proof.' },
    ], rule:'Assess only to the point of reasonable suspicion \u2014 you don\u2019t investigate or wait for proof.', ref:'Mandated reporting' },

  { id:'as18', cat:'Assessment skills', scenario:'You need records from a client\u2019s previous provider to inform your assessment. What comes first?',
    options:[
      { t:'Obtain a signed release of information before requesting records', ok:true, why:'Collateral records require the client\u2019s written consent (ROI) first.' },
      { t:'Call the prior provider and ask for the chart', why:'Contacting collaterals without consent breaches confidentiality.' },
      { t:'Proceed without the records and don\u2019t ask', why:'Useful collateral is worth obtaining \u2014 with consent.' },
      { t:'Have the client verbally okay it and skip the form', why:'A documented, signed release is the standard.' },
    ], rule:'Collateral/records \u2192 signed release of information first.', ref:'Consent / records' },

  { id:'as19', cat:'Anxiety', scenario:'You want a brief measure to track a client\u2019s generalized anxiety severity over time. Best tool?',
    options:[
      { t:'GAD-7', ok:true, why:'The GAD-7 is the brief self-report measure for generalized anxiety severity.' },
      { t:'PHQ-9', why:'The PHQ-9 tracks depression, not anxiety severity.' },
      { t:'PDSS', why:'The Panic Disorder Severity Scale is specific to panic, not generalized anxiety.' },
      { t:'No measure \u2014 clinical impression only', why:'A brief validated measure tracks change better than impression alone.' },
    ], rule:'GAD-7 for generalized-anxiety severity; PHQ-9 is for depression; PDSS for panic.', ref:'Anxiety measures' },

  { id:'as20', cat:'Safety', scenario:'You have completed a structured suicide-risk assessment and the client is at moderate risk but can stay safe with support. What next?',
    options:[
      { t:'Collaboratively build a safety plan (Stanley-Brown) with means restriction', ok:true, why:'After risk is assessed, the collaborative safety plan and means restriction are the next steps.' },
      { t:'Have the client sign a no-suicide contract', why:'No-suicide contracts are not evidence-based; use a safety plan.' },
      { t:'Re-administer the C-SSRS repeatedly instead of intervening', why:'You\u2019ve assessed the risk; now act on it.' },
      { t:'End the session with routine follow-up only', why:'Moderate risk warrants an active safety plan, not routine follow-up alone.' },
    ], rule:'After risk assessment \u2192 collaborative safety plan (Stanley-Brown) + means restriction; never a contract.', ref:'Stanley-Brown SPI' },

  { id:'as21', cat:'Eating', scenario:'During a routine intake you want to briefly screen for a possible eating disorder. Best tool?',
    options:[
      { t:'SCOFF (brief eating-disorder screen)', ok:true, why:'SCOFF is the short screening instrument for eating disorders.' },
      { t:'A full Eating Disorder Examination interview on the spot', why:'The EDE is a detailed diagnostic interview, not a brief screen.' },
      { t:'PHQ-9', why:'A depression screen doesn\u2019t screen for eating disorders.' },
      { t:'No screening', why:'A brief screen is appropriate when there\u2019s any concern.' },
    ], rule:'SCOFF is the brief eating-disorder screen.', ref:'Eating disorder screening' },

  { id:'as22', cat:'Psychotic', scenario:'A stabilized client on antipsychotics still hears occasional commenting voices. What assessment is most useful now?',
    options:[
      { t:'Assess the client\u2019s relationship to the voices (distress, beliefs, coping) to guide CBTp', ok:true, why:'Residual voices are addressed by assessing the person\u2019s response to them, informing CBT for psychosis.' },
      { t:'Re-run a tox screen assuming relapse', why:'Persistent residual symptoms in a stable client don\u2019t imply substance relapse.' },
      { t:'Administer the MMSE', why:'A cognitive screen doesn\u2019t address residual voices.' },
      { t:'Conclude treatment has failed', why:'Residual symptoms are common; assessment guides coping, not a failure verdict.' },
    ], rule:'Residual psychosis \u2192 assess the relationship to symptoms to target CBTp coping.', ref:'CBT for psychosis' },

  { id:'as23', cat:'Trauma', scenario:'A client discloses distress after an event that does not meet Criterion A, with symptoms below threshold. What is the appropriate assessment posture?',
    options:[
      { t:'Assess functioning and monitor over time, reassessing if symptoms intensify', ok:true, why:'Sub-threshold, non-Criterion-A distress is monitored with reassessment, not immediately labeled.' },
      { t:'Administer the CAPS-5 and diagnose PTSD', why:'Without a Criterion-A event, PTSD does not apply.' },
      { t:'Begin trauma processing right away', why:'Processing is treatment, not assessment, and premature here.' },
      { t:'Dismiss it as not clinically relevant', why:'Distress warrants assessment and monitoring even when sub-threshold.' },
    ], rule:'Sub-threshold/non-Criterion-A distress \u2192 assess function and monitor, reassess over time.', ref:'Trauma assessment' },

  { id:'as24', cat:'Substance', scenario:'A client in early alcohol detox needs monitoring. Which tool tracks their withdrawal over time?',
    options:[
      { t:'CIWA-Ar, administered serially', ok:true, why:'The CIWA-Ar quantifies and tracks alcohol-withdrawal severity to guide management.' },
      { t:'AUDIT, repeated daily', why:'AUDIT screens for a use disorder; it doesn\u2019t track acute withdrawal.' },
      { t:'PHQ-9', why:'A mood measure doesn\u2019t track withdrawal.' },
      { t:'MoCA', why:'A cognitive screen doesn\u2019t track withdrawal severity.' },
    ], rule:'CIWA-Ar tracks alcohol-withdrawal severity; AUDIT is a use-disorder screen.', ref:'Withdrawal monitoring' },

  { id:'as25', cat:'Mood', scenario:'A client screens positive on a bipolar screen (past hypomania likely). Before making treatment decisions, what next?',
    options:[
      { t:'Refer for a diagnostic evaluation to confirm bipolarity and coordinate care', ok:true, why:'A positive screen prompts a fuller diagnostic evaluation before a plan is set.' },
      { t:'Start an antidepressant to relieve the current depression', why:'Antidepressant monotherapy before confirming/stabilizing risks a manic switch.' },
      { t:'Ignore the screen and treat as unipolar', why:'Disregarding a positive bipolar screen risks the exact error it exists to prevent.' },
      { t:'Re-administer the same screen repeatedly', why:'You\u2019ve screened positive; the next step is fuller evaluation, not re-screening.' },
    ], rule:'Positive bipolar screen \u2192 diagnostic evaluation before treatment; don\u2019t start antidepressant monotherapy.', ref:'Mood assessment sequencing' },

  { id:'as26', cat:'Assessment skills', scenario:'A client\u2019s presentation includes odd experiences you want to place in cultural context before assessing pathology. What helps most?',
    options:[
      { t:'Use the DSM-5-TR Cultural Formulation Interview', ok:true, why:'The CFI structures assessment of cultural context to avoid over- or under-pathologizing.' },
      { t:'Diagnose from the surface presentation alone', why:'Skipping cultural context risks mislabeling normative experiences as pathology.' },
      { t:'Assume everything is cultural and diagnose nothing', why:'Over-attributing to culture can miss genuine pathology.' },
      { t:'Administer a personality inventory', why:'A trait inventory doesn\u2019t address the cultural-context question.' },
    ], rule:'Use the Cultural Formulation Interview to weigh cultural context in assessment.', ref:'Cultural assessment' },

// ---- Assess-next items 27-41 (added batch 2) ----

  ,{ id:'as27', cat:'Safety', scenario:'A client discloses passive suicidal ideation but says they would "never actually do it" because of their children. The counselor should next:',
    options:[
      { t:'Conduct a full structured risk assessment to evaluate ideation, plan, intent, means, and protective factors', ok:true, why:'Protective factors are relevant but do not eliminate assessment; plan, intent, and means must still be evaluated.' },
      { t:'Accept the protective factor as sufficient and move on', why:'Trap: protective factors reduce risk but never eliminate the need for full assessment.' },
      { t:'Schedule a follow-up in two weeks to monitor', why:'An SI disclosure requires full assessment before the session ends, not monitoring at distance.' },
      { t:'Immediately hospitalize due to the SI disclosure', why:'Passive SI without plan or intent typically does not warrant hospitalization; but full assessment comes first.' },
    ], rule:'Any SI disclosure → full structured risk assessment; protective factors inform but do not replace it.', ref:'Suicide risk assessment' },

  { id:'as28', cat:'Safety', scenario:'A client with known PTSD is referred after a traumatic incident two days ago. They are acutely distressed and struggling to function. What do you assess first?',
    options:[
      { t:'Safety, stabilization, and acute functional capacity before any trauma exploration', ok:true, why:'Acute trauma within 48–72 hours: safety and stabilization. Trauma processing is contraindicated in the acute period.' },
      { t:'Full PTSD symptom checklist (PCL-5)', why:'PCL-5 requires 30 days post-trauma; symptoms at 48 hours are expected acute stress, not PTSD.' },
      { t:'Dive into the trauma narrative to facilitate processing', why:'Trauma processing in the acute phase increases risk of ASD/PTSD rather than reducing it.' },
      { t:'Refer to EMDR immediately', why:'EMDR is contraindicated in the acute phase; stabilization comes first.' },
    ], rule:'Acute trauma (< 72 hrs) → safety and stabilization first; no trauma processing or PCL-5 yet.', ref:'Acute trauma / Psychological First Aid' },

  { id:'as29', cat:'Intake', scenario:'A new client arrives appearing disheveled, speaking rapidly, and making grand statements about being chosen to solve climate change. What do you assess first?',
    options:[
      { t:'Mental Status Examination to characterize appearance, speech, thought process, thought content, and insight', ok:true, why:'Potential psychotic or manic presentation requires an MSE before any other assessment or formulation.' },
      { t:'Depression screening (PHQ-9)', why:'The presentation suggests elevated mood or psychosis, not depression; PHQ-9 is the wrong tool here.' },
      { t:'Trauma history to understand the beliefs in context', why:'Cultural and trauma context are relevant but the MSE characterizes the acute presentation first.' },
      { t:'Substance use history to rule out intoxication', why:'Substance screening is important but follows the MSE; you need to characterize what you are observing first.' },
    ], rule:'Possible psychosis or mania → MSE first; characterize the presentation before screening for cause.', ref:'MSE / psychosis evaluation' },

  { id:'as30', cat:'Intake', scenario:'A 16-year-old is brought in by a parent for "attitude problems." The teen refuses to talk in front of the parent. How do you structure the intake?',
    options:[
      { t:'Meet separately with the teen first after explaining confidentiality and its limits, then meet with the parent', ok:true, why:'Adolescent engagement requires private time; explains confidentiality to both; gathers data from both.' },
      { t:'See only the parent to get the full history before meeting the teen', why:'Trap: excluding the adolescent from their own intake damages alliance from the first contact.' },
      { t:'Conduct the full intake with both present — parents have the right to all information', why:'Minors in therapy retain confidentiality rights within age and safety limits; this structure silences the teen.' },
      { t:'Decline to see the teen until they agree to talk in front of the parent', why:'Coercive pre-conditions fail to engage the actual client.' },
    ], rule:'Adolescent intake → structure separate teen time with confidentiality discussion; also meet with parent.', ref:'Adolescent intake structure' },

  { id:'as31', cat:'Intake', scenario:'During the first session, a client discloses they have previously attempted suicide twice. What do you assess next?',
    options:[
      { t:'Detailed history of each attempt (method, intent, circumstances, rescue) and current ideation and means access', ok:true, why:'Prior attempts are the strongest predictor of future suicide. Detailed attempt history is required for accurate risk stratification.' },
      { t:'Administer the PHQ-9 and score for depression severity', why:'PHQ-9 is a depression screen; it does not characterize prior attempt history or current suicide risk.' },
      { t:'Note the history and proceed with the standard intake', why:'Trap: treating prior attempts as background data rather than primary risk information is a clinical error.' },
      { t:'Immediately initiate hospitalization paperwork', why:'Prior history alone does not mandate hospitalization; current assessment drives level-of-care decisions.' },
    ], rule:'Prior attempt disclosure → detailed attempt history (method, intent, rescue) + current ideation/means; this is the highest-risk clinical indicator.', ref:'Suicide risk / attempt history' },

  { id:'as32', cat:'Ethics & scope', scenario:'A supervisee tells you they have been seeing clients independently without supervision for the past month due to "scheduling issues." What do you assess first?',
    options:[
      { t:'Whether any clients were harmed and whether the supervisee has the competence level for the cases they carried', ok:true, why:'Client welfare is the primary concern; the scope violation must be assessed for harm before any administrative response.' },
      { t:'The supervisee\'s schedule and why supervision was missed', why:'Scheduling is secondary; client safety is the immediate concern.' },
      { t:'Whether to terminate the supervisory relationship', why:'Terminating supervision does not protect clients currently at risk.' },
      { t:'File a licensing board complaint immediately', why:'A licensing board complaint may follow but the first obligation is to assess client welfare right now.' },
    ], rule:'Supervisee practicing without supervision → assess client welfare first; administrative and licensing responses come after.', ref:'Supervisor liability / client protection' },

  { id:'as33', cat:'Ethics & scope', scenario:'A managed care company requests your client\'s full therapy notes to approve continued sessions. What is the appropriate response?',
    options:[
      { t:'Release only the minimum information necessary for utilization review — typically a treatment summary, not the full psychotherapy notes', ok:true, why:'HIPAA: psychotherapy notes (process notes) have heightened protection; minimum necessary standard applies to all disclosures.' },
      { t:'Release the full file — they are paying for the treatment', why:'Trap: payer status does not override HIPAA minimum necessary or psychotherapy note protections.' },
      { t:'Refuse all disclosure to protect client privacy', why:'Total refusal jeopardizes coverage and is not required; minimum necessary disclosure is permitted and appropriate.' },
      { t:'Ask the client to send the records themselves', why:'Having the client transmit their own clinical records is not standard practice and may not satisfy the insurer.' },
    ], rule:'Insurer requests records → minimum necessary disclosure; psychotherapy notes require separate authorization; do not release the full file.', ref:'HIPAA minimum necessary / psychotherapy notes' },

  { id:'as34', cat:'Ethics & scope', scenario:'A client presents with a possible traumatic brain injury following an accident and is describing significant cognitive changes. What is the first step?',
    options:[
      { t:'Refer for neuropsychological evaluation and medical assessment before proceeding with psychotherapy', ok:true, why:'Cognitive changes post-injury require medical/neuropsychological evaluation to characterize deficits and rule out treatable causes before psychotherapy begins.' },
      { t:'Administer the MoCA in session to screen for cognitive impairment', why:'MoCA is a brief screen, not a diagnostic tool for TBI; specialized neuropsychological evaluation is needed.' },
      { t:'Begin trauma-focused therapy for the accident', why:'Beginning trauma processing before characterizing cognitive deficits post-TBI is premature and could be contraindicated.' },
      { t:'Diagnose adjustment disorder and begin CBT', why:'Attributing cognitive changes to emotional adjustment without ruling out neurological cause is a diagnostic error.' },
    ], rule:'Post-accident cognitive changes → medical/neuropsychological evaluation before psychotherapy; do not attribute to emotional causes without ruling out organic etiology.', ref:'TBI assessment / medical referral' },

  { id:'as35', cat:'Mood', scenario:'A client reporting depression also mentions significant weight gain, cold intolerance, fatigue, and constipation over the past 6 months. Next assessment step?',
    options:[
      { t:'Refer for thyroid function testing before treating as primary depression', ok:true, why:'Hypothyroidism produces a complete depressive syndrome. Medical causes must be ruled out before diagnosing MDD.' },
      { t:'Begin CBT for depression immediately', why:'Treating a potential hypothyroid depression with CBT alone while the medical cause is untreated is clinically insufficient.' },
      { t:'Administer the PHQ-9 and treat per the score', why:'PHQ-9 measures depressive symptoms but does not distinguish medical from primary psychiatric causes.' },
      { t:'Diagnose MDD with vegetative features and refer for antidepressants', why:'Trap: antidepressants may be ineffective and medical cause remains unaddressed.' },
    ], rule:'Depression + somatic symptoms (weight gain, cold intolerance, fatigue, constipation) → rule out hypothyroidism before treating as primary MDD.', ref:'Medical causes of depression' },

  { id:'as36', cat:'Mood', scenario:'A client being treated for MDD tells you they feel better since starting antidepressants but now has 4 days of barely sleeping, unusual energy, and is spending money impulsively. What do you assess next?',
    options:[
      { t:'Screen for a manic/hypomanic switch and contact the prescriber urgently', ok:true, why:'Antidepressant-induced hypomania/mania is a known adverse event in undetected bipolar disorder. Urgent prescriber contact is required.' },
      { t:'Celebrate the improvement in mood and energy', why:'Trap: the symptom cluster (decreased sleep, energy, impulsivity) after antidepressant initiation is a red flag, not improvement.' },
      { t:'Continue current treatment — the energy may normalize', why:'Waiting when a possible manic switch is occurring delays necessary clinical action.' },
      { t:'Reduce the therapy session frequency since the client is improving', why:'Reducing contact when a potential adverse medication event is occurring is clinically dangerous.' },
    ], rule:'Decreased sleep + energy + impulsivity after antidepressant initiation → screen for manic switch; contact prescriber urgently.', ref:'Bipolar misdiagnosis / antidepressant-induced mania' },

  { id:'as37', cat:'Neurodevelopmental', scenario:'A parent reports their 10-year-old has dramatic, episodic behavioral outbursts daily that don\'t fit the child\'s baseline and began 6 months ago after a strep infection. What do you assess next?',
    options:[
      { t:'Ask about medical history and refer for pediatric evaluation to rule out PANDAS/PANS before a behavioral diagnosis', ok:true, why:'Sudden onset OCD-like or behavioral symptoms post-strep in a child may indicate PANDAS — a medical (not primarily psychiatric) condition requiring pediatric evaluation.' },
      { t:'Diagnose ODD and begin parent management training', why:'Trap: diagnosing a sudden-onset, episodic behavioral change without ruling out medical etiology is premature.' },
      { t:'Screen for ADHD using Conners scales', why:'ADHD is developmental (onset before 12, chronic, not episodic); this presentation is acute-onset and episodic.' },
      { t:'Assess for trauma that might explain the behavior change', why:'Trauma history is worth assessing but does not explain the sudden post-infection onset; medical workup is the first step.' },
    ], rule:'Sudden behavioral onset post-strep in a child → consider PANDAS/PANS; refer for pediatric evaluation before behavioral diagnosis.', ref:'PANDAS / medical causes in children' },

  { id:'as38', cat:'Neurocognitive', scenario:'A 78-year-old client has a 2-year history of gradual memory decline, word-finding difficulty, and is now repeating questions. What do you assess next?',
    options:[
      { t:'Administer a cognitive screening tool (MoCA or MMSE) and refer for neuropsychological evaluation and medical work-up', ok:true, why:'Gradual progressive cognitive decline in an older adult requires structured screening and specialist referral to characterize type, severity, and reversible causes.' },
      { t:'Diagnose Alzheimer\'s Disease and begin supportive therapy', why:'Counselors do not diagnose neurocognitive disorders without neuropsychological evaluation; treatable causes must be ruled out.' },
      { t:'Administer a depression screen — this could be pseudodementia', why:'Pseudodementia is a valid consideration but 2 years of progressive decline is more likely neurocognitive than depressive; cognitive evaluation comes first.' },
      { t:'Ask the family to observe and report back — diagnosis is premature', why:'Two-year progressive decline is sufficient to warrant structured assessment now rather than continued observation.' },
    ], rule:'2-year progressive cognitive decline in older adult → structured cognitive screen + specialist referral; do not diagnose or defer without evaluation.', ref:'Neurocognitive disorder assessment' },

  { id:'as39', cat:'Substance', scenario:'A client in an opioid treatment program on methadone presents to their counseling session slurring words and appearing sedated. Next assessment step?',
    options:[
      { t:'Assess for overdose risk and contact medical staff immediately — do not conduct the session', ok:true, why:'Sedation and slurring in a methadone patient may indicate overdose or polysubstance interaction — a medical emergency that takes priority over counseling.' },
      { t:'Conduct the session and document the observation for the prescriber', why:'Trap: conducting a session when overdose risk is present delays life-saving intervention.' },
      { t:'Administer a brief substance use screener', why:'Screening is not appropriate when the client may be in acute medical danger.' },
      { t:'End the session and reschedule', why:'Rescheduling leaves the client potentially in medical danger without any intervention.' },
    ], rule:'Sedated/slurring client on methadone → possible overdose; medical staff immediately before any clinical activity.', ref:'Opioid overdose recognition' },

  { id:'as40', cat:'Assessment skills', scenario:'A counselor has been using the same standardized tool for all clients regardless of their cultural background. What is the primary psychometric concern?',
    options:[
      { t:'Cultural bias — the normative sample may not represent the client\'s group, producing invalid comparisons', ok:true, why:'An instrument normed on a population that doesn\'t represent the client produces scores compared to the wrong reference group — inflating apparent pathology.' },
      { t:'Test-retest reliability — different clients will score differently on different days', why:'Test-retest reliability is a property of the instrument itself, not affected by cultural group alone.' },
      { t:'Construct validity — the tool may be measuring different constructs altogether', why:'Construct validity is relevant but the primary concern when applying across cultures is the normative reference group (cultural bias).' },
      { t:'Inter-rater reliability — different counselors will score the tool differently', why:'Inter-rater reliability concerns examiner agreement, not cultural applicability.' },
    ], rule:'Using standardized tools across cultural groups → primary concern is cultural bias in the normative sample; check whether the client\'s group is represented.', ref:'Cultural bias in assessment' },

  { id:'as41', cat:'Assessment skills', scenario:'A counselor completes an intake and notes three possible diagnoses that could explain the client\'s presentation. What is the correct next step?',
    options:[
      { t:'Conduct differential diagnosis: use additional history, screening tools, and collateral information to rule in or rule out each option', ok:true, why:'Differential diagnosis is the systematic process of distinguishing between competing diagnostic possibilities using evidence — not guessing or defaulting to the most common.' },
      { t:'Pick the most common of the three diagnoses as a starting point', why:'Frequency does not determine accuracy; each diagnosis must be evaluated against the evidence.' },
      { t:'List all three as diagnoses and begin treating each simultaneously', why:'Multiple untested diagnoses driving simultaneous treatment creates disorganized, ineffective care.' },
      { t:'Refer to a psychiatrist since multiple diagnoses exceed counselor scope', why:'Differential diagnosis is within counselor scope; refer when medical evaluation is needed to distinguish, not to avoid the diagnostic process.' },
    ], rule:'Multiple possible diagnoses → conduct differential diagnosis; evaluate each against history, screening tools, and collateral — do not default to frequency or refer to avoid the work.', ref:'Differential diagnosis process' },
];
if (typeof module !== 'undefined' && module.exports) { module.exports = { ASSESS_ITEMS }; }
