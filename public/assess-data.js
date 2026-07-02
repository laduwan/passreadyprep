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
];
if (typeof module !== 'undefined' && module.exports) { module.exports = { ASSESS_ITEMS }; }
