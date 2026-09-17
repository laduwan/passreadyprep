// client/src/lib/assessNextCases.js
// Progressive "What to Assess Next" — 8-10 rounds per case, matching real NCMHCE pacing
// Each round: rationale + external resource links

const ASSESS_NEXT_CASES = [
  {
    id: 'an1',
    clientName: 'Maria',
    demographics: '28, Latina female',
    category: 'Trauma',
    difficulty: 'medium',
    intakeVignette: "Maria, 28, Latina female, presents to intake reporting 'feeling disconnected from everything' for the past 3 months. She was recently promoted at work but says she doesn't feel like she deserves it. She appears well-groomed but makes limited eye contact.",
    rounds: [
      {
        stage: 1, stageLabel: 'Safety Screening',
        prompt: 'Based on this intake presentation, what is your first clinical priority and why?',
        targetConcepts: ['safety screening', 'suicidal ideation assessment', 'homicidal ideation assessment', 'do not skip because she appears low-risk'],
        rationale: "Safety screening is always the first rung of the clinical priority ladder. 'Feeling disconnected from everything' could mask suicidal ideation, dissociation, or trauma. The exam rewards clinicians who screen for safety before exploring the presenting concern — even when a client appears put-together and low-risk.",
        resources: [
          { label: 'Columbia Suicide Severity Rating Scale (C-SSRS)', url: 'https://cssrs.columbia.edu/' },
          { label: 'SAMHSA — Screening Tools', url: 'https://www.samhsa.gov/find-help/national-helpline' }
        ],
        reveal: "Maria denies suicidal or homicidal ideation. She says she hasn't thought about hurting herself but admits 'I just don't care about much anymore.' She is willing to continue the assessment."
      },
      {
        stage: 2, stageLabel: 'Presenting Concern Exploration',
        prompt: "Safety screening is clear. What do you want to explore next about Maria's presenting concern?",
        targetConcepts: ['functional impairment', 'sleep appetite concentration energy', 'onset and timeline', 'what disconnected means to her', 'work functioning'],
        rationale: "After safety, establish the scope of impairment. 'Disconnected from everything' is vague — the clinician needs specifics: which domains of functioning are affected, how severely, and when this started. Timeline is critical because onset relative to a life event separates adjustment, trauma, and independent mood disorders. The PHQ-9 or similar measure can quantify severity.",
        resources: [
          { label: 'PHQ-9 — Patient Health Questionnaire', url: 'https://www.apa.org/depression-guideline/patient-health-questionnaire.pdf' },
          { label: 'NIMH — Depression', url: 'https://www.nimh.nih.gov/health/topics/depression' }
        ],
        reveal: "Maria reports sleeping 4-5 hours per night with frequent nightmares, low appetite with 8-pound weight loss, and difficulty concentrating at work. She has missed 3 days in the past month. The disconnection started about 3 months ago. She says: 'I used to be really driven. Now I just go through the motions.'"
      },
      {
        stage: 3, stageLabel: 'Substance and Medical Screening',
        prompt: "You have a picture of functional impairment. What must you rule out before attributing symptoms to a mental health diagnosis?",
        targetConcepts: ['substance use screening', 'medical rule-out', 'thyroid anemia', 'medication review', 'caffeine alcohol recreational drugs', 'the priority ladder medical and substance before diagnosis'],
        rationale: "The priority ladder's second rung: medical and substance rule-outs before diagnosing a mental health condition. Sleep disruption, weight loss, fatigue, and concentration problems can all be caused or worsened by alcohol, substance use, thyroid dysfunction, anemia, or medications. The exam penalizes jumping to a mood diagnosis without ruling out these contributions.",
        resources: [
          { label: 'AUDIT Screening Tool — WHO', url: 'https://www.who.int/publications/i/item/audit-the-alcohol-use-disorders-identification-test-guidelines-for-use-in-primary-health-care' },
          { label: 'SAMHSA — SBIRT', url: 'https://www.samhsa.gov/sbirt' }
        ],
        reveal: "Maria mentions drinking 'a couple glasses of wine' most nights 'to unwind.' She says it's new — started a few months ago. No recreational drugs. No current medications. No known medical conditions, but she hasn't seen a doctor recently. She says the wine helps her fall asleep: 'Without it my mind just races.'"
      },
      {
        stage: 4, stageLabel: 'Quantifying Risk',
        prompt: "Maria's casual mention of nightly wine is a clinical signal. What validated tools would you use, and what additional information do you need?",
        targetConcepts: ['AUDIT for alcohol', 'PHQ-9 for depression', 'timeline of drinking onset', 'quantity and frequency specifics', 'relationship between drinking and other symptoms', 'medical referral for labs'],
        rationale: "'A couple glasses' most nights is a clinical signal, not a throwaway detail — especially when it's a new pattern coinciding with other symptoms. The AUDIT quantifies alcohol risk objectively. The PHQ-9 establishes depressive severity as a baseline. Critically: the timeline of when drinking started relative to when other symptoms started helps determine whether alcohol is causing symptoms, coping with them, or both. A medical referral for baseline labs (CBC, thyroid, liver function) is warranted.",
        resources: [
          { label: 'NIAAA — Alcohol Screening', url: 'https://www.niaaa.nih.gov/alcohols-effects-health/alcohol-use-disorder/alcohol-screening' },
          { label: 'PHQ-9 Scoring Guide', url: 'https://www.apa.org/depression-guideline/patient-health-questionnaire.pdf' }
        ],
        reveal: "AUDIT score: 12 (hazardous use range). PHQ-9: 16 (moderately severe depression). Maria says the drinking started about 4 months ago — she pins it to 'after things got bad.' When asked what got bad, she says it was after a car accident she 'doesn't like to talk about.' She changes the subject when you gently inquire."
      },
      {
        stage: 5, stageLabel: 'History and Precipitant',
        prompt: "Maria referenced a car accident she doesn't want to discuss. How do you approach this clinically without pushing past her readiness?",
        targetConcepts: ['trauma-informed approach', 'do not force disclosure', 'note avoidance as clinical data', 'ask about timeline relative to symptoms', 'acknowledge her autonomy', 'gentle inquiry not interrogation'],
        rationale: "Avoidance of a topic IS clinical data — it's a potential PTSD symptom (Criterion C). The clinician's job is to note it, not force it. A trauma-informed approach honors the client's pacing while gathering enough timeline information to inform the differential. 'You don't have to tell me the details, but can you help me understand when it happened relative to when things changed for you?' respects autonomy while getting the critical diagnostic timeline. The exam rewards clinicians who recognize avoidance without steamrolling through it.",
        resources: [
          { label: 'SAMHSA — Trauma-Informed Care', url: 'https://www.samhsa.gov/trauma-informed-care' },
          { label: 'PCL-5 — PTSD Checklist', url: 'https://www.ptsd.va.gov/professional/assessment/adult-sr/ptsd-checklist.asp' }
        ],
        reveal: "Maria says the accident was about 4 months ago. She confirms: 'Everything started after that.' She's willing to say it was a serious car accident — a passenger in the other car was hospitalized. She doesn't want to say more today. She looks down and says: 'I just try not to think about it. The wine helps with that too.'"
      },
      {
        stage: 6, stageLabel: 'Trauma Screening',
        prompt: "The timeline points to the accident as precipitant. What specific trauma symptoms do you screen for, and what tools would you use?",
        targetConcepts: ['PCL-5 or similar trauma measure', 'PTSD symptom clusters — intrusion avoidance cognition arousal', 'nightmares as intrusion symptom', 'avoidance of accident discussion', 'hyperarousal indicators', 'dissociation screening', 'timeline confirms post-trauma onset'],
        rationale: "With a clear precipitating trauma and post-event symptom onset, PTSD screening is now the priority. The four DSM-5-TR PTSD symptom clusters must each be assessed: intrusion (nightmares — already reported), avoidance (won't discuss accident, may avoid driving), negative cognition/mood (disconnection, guilt, 'don't deserve' promotion), and arousal/reactivity (sleep disruption, hypervigilance, startle). The PCL-5 screens efficiently. The 'disconnection' she presented with may be a dissociative feature. The exam rewards pattern recognition: nightmares + avoidance + new-onset alcohol + post-event timeline = PTSD differential, not just depression.",
        resources: [
          { label: 'National Center for PTSD — PCL-5', url: 'https://www.ptsd.va.gov/professional/assessment/adult-sr/ptsd-checklist.asp' },
          { label: 'DSM-5-TR PTSD Criteria', url: 'https://www.ptsd.va.gov/professional/treat/essentials/dsm5_ptsd.asp' },
          { label: 'NIMH — PTSD', url: 'https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd' }
        ],
        reveal: "PCL-5 score: 52 (above clinical cutoff of 31). Maria has nightmares about the accident 3-4 times per week. She avoids driving on highways and takes side streets everywhere — adding 30 minutes to her commute. She startles at loud noises, especially car horns. She says: 'I feel like part of me is still in that car.' She hasn't told anyone how much the accident affected her."
      },
      {
        stage: 7, stageLabel: 'Differential Diagnosis',
        prompt: "You have a clear clinical picture. What are your differential diagnoses, and what evidence supports or rules out each?",
        targetConcepts: ['PTSD primary — meets all criteria', 'comorbid AUD', 'rule out MDD as primary — onset post-trauma favors PTSD', 'rule out adjustment disorder — exceeds threshold', 'consider dissociative subtype', 'alcohol maintaining symptoms'],
        rationale: "The differential narrows: (1) PTSD — meets Criterion A (car accident with serious injury to another), intrusion (nightmares, 'still in that car'), avoidance (highways, discussing accident), negative cognition/mood (disconnection, guilt about promotion/not deserving), arousal (sleep disruption, startle, hypervigilance). PCL-5 above cutoff. (2) MDD — PHQ-9 elevated, but depressive symptoms onset POST-trauma and overlap with PTSD Criterion D. When depression develops secondary to trauma, PTSD is typically primary. (3) Adjustment Disorder — ruled out because she meets full PTSD criteria (adjustment is a subthreshold diagnosis). (4) AUD — AUDIT indicates hazardous use; functionally connected to trauma (self-medication). (5) Dissociative subtype — 'part of me is still in that car' suggests depersonalization/derealization worth monitoring.",
        resources: [
          { label: 'VA/DoD PTSD Clinical Practice Guideline', url: 'https://www.healthquality.va.gov/guidelines/MH/ptsd/' },
          { label: 'APA — PTSD vs Depression Differential', url: 'https://www.apa.org/ptsd-guideline' },
          { label: 'DSM-5-TR — Adjustment Disorder', url: 'https://www.psychiatry.org/psychiatrists/practice/dsm' }
        ],
        reveal: "You share your clinical conceptualization with Maria. She seems relieved: 'So there's a reason I feel this way? I thought I was just falling apart.' She asks what treatment looks like and whether she needs to stop drinking first."
      },
      {
        stage: 8, stageLabel: 'Treatment Approach',
        prompt: "What is your working diagnosis and what evidence-based treatment approach do you recommend? How do you address Maria's question about whether she needs to stop drinking first?",
        targetConcepts: ['PTSD primary diagnosis', 'comorbid AUD', 'integrated treatment not sequential', 'first-line PTSD treatments CPT PE EMDR', 'do not require abstinence before trauma work', 'current evidence supports concurrent treatment', 'psychoeducation about trauma-substance connection'],
        rationale: "Working diagnosis: PTSD (F43.10) with comorbid Alcohol Use Disorder, mild-moderate. Current evidence (SAMHSA TIP 42, VA/DoD guidelines) supports integrated treatment — addressing PTSD and substance use concurrently, not the outdated sequential model that required sobriety first. Research shows concurrent treatment produces better outcomes for BOTH because the substance use is maintained by the untreated trauma. First-line PTSD treatments with strong evidence: CPT (Cognitive Processing Therapy), PE (Prolonged Exposure), and EMDR. Maria does not need to stop drinking before starting trauma work — but reducing use during treatment improves outcomes and should be addressed through harm reduction and MI.",
        resources: [
          { label: 'SAMHSA TIP 42 — Substance Use and Trauma', url: 'https://store.samhsa.gov/product/TIP-42-Substance-Use-Disorder-Treatment-for-People-With-Co-Occurring-Disorders/PEP20-02-01-004' },
          { label: 'APA — PTSD Treatments', url: 'https://www.apa.org/ptsd-guideline/treatments' },
          { label: 'NIDA — Comorbidity', url: 'https://nida.nih.gov/research-topics/comorbidity' }
        ],
        reveal: "Maria is relieved she doesn't have to 'quit cold turkey' before getting help. She's interested in CPT — the idea of understanding how the accident changed her thinking resonates with her. She says: 'I keep thinking it was my fault, even though the other driver ran the light.' She agrees to track her drinking between sessions. She asks: 'Should I tell my family what's going on?'"
      },
      {
        stage: 9, stageLabel: 'Treatment Planning Details',
        prompt: "Maria is asking about involving her family. What specific treatment plan do you develop, and how do you address her social support?",
        targetConcepts: ['structured treatment plan with CPT timeline', 'session frequency', 'harm reduction goals for alcohol', 'social support as protective factor', 'psychoeducation for family if she consents', 'safety plan given alcohol use', 'medication referral consideration SSRI', 'coordination with PCP for medical clearance'],
        rationale: "A complete treatment plan includes: (1) CPT typically runs 12 sessions, weekly. (2) Alcohol harm reduction — track use, reduce gradually, monitor with AUDIT periodically. If she can't reduce or symptoms worsen, reassess level of care. (3) Social support is a protective factor for both PTSD and AUD — encouraging family involvement (with her consent) strengthens outcomes. Psychoeducation for family helps them understand trauma responses rather than pathologizing her withdrawal. (4) Consider SSRI referral via psychiatry — sertraline and paroxetine are FDA-approved for PTSD and can support treatment. (5) Coordinate with PCP for medical clearance and lab work. (6) Given alcohol use, ensure she knows not to stop abruptly if consumption has been heavy — withdrawal can be dangerous.",
        resources: [
          { label: 'CPT — Cognitive Processing Therapy', url: 'https://cptforptsd.com/' },
          { label: 'SAMHSA — Harm Reduction Framework', url: 'https://www.samhsa.gov/find-help/harm-reduction' },
          { label: 'NICE — PTSD Treatment Guidelines', url: 'https://www.nice.org.uk/guidance/ng116' }
        ],
        reveal: "Maria agrees to weekly CPT sessions and will talk to her sister, who she's closest to. She's open to a psychiatry referral for medication but wants to 'try therapy first.' She asks one more question: 'The guilt about the other driver — is that something we'll work on? Because I know it wasn't my fault but I can't stop feeling like it was.'"
      },
      {
        stage: 10, stageLabel: 'Clinical Decision Point',
        prompt: "Maria is describing cognitive distortions about the accident — self-blame despite knowing the other driver was at fault. How do you address this therapeutically, and how does it fit into your treatment framework?",
        targetConcepts: ['cognitive stuck points in CPT', 'self-blame as common PTSD cognition', 'assimilation vs accommodation', 'trauma-related guilt', 'this is exactly what CPT addresses', 'validate without reinforcing distortion', 'informed consent for treatment approach'],
        rationale: "Maria's guilt is a textbook CPT 'stuck point' — an assimilated belief where she altered her understanding of HERSELF ('I must have done something wrong') rather than accommodating the reality of WHAT HAPPENED ('the other driver ran the light'). Self-blame is one of the most common PTSD-related cognitions and directly predicts symptom severity. CPT is specifically designed to identify and process these stuck points through Socratic dialogue and cognitive worksheets. The therapeutic response: validate that the feeling is real and common without reinforcing the distortion. 'That guilt makes complete sense as a trauma response — your mind is trying to make sense of something senseless by taking responsibility. That's exactly what we'll work on together.' This also serves as informed consent: she now understands what CPT will target and why.",
        resources: [
          { label: 'CPT for PTSD — Stuck Points', url: 'https://cptforptsd.com/' },
          { label: 'Resick et al. — CPT Manual', url: 'https://www.apa.org/ptsd-guideline/treatments/cognitive-processing-therapy' },
          { label: 'ACA Code of Ethics — Informed Consent (A.2)', url: 'https://www.counseling.org/ethics/aca-code-of-ethics' },
          { label: 'Seeking Safety — Integrated Model', url: 'https://www.treatment-innovations.org/seeking-safety.html' }
        ]
      }
    ]
  },
  {
    id: 'an2',
    clientName: 'James',
    demographics: '45, Black male',
    category: 'Crisis/Safety',
    difficulty: 'hard',
    intakeVignette: "James, 45, Black male, self-referred after his wife suggested he 'talk to someone.' He reports feeling overwhelmed at work — recently passed over for a promotion he expected. He describes himself as 'just tired of everything' and says he came mostly to get his wife off his back.",
    rounds: [
      {
        stage: 1, stageLabel: 'Engagement and Initial Read',
        prompt: "James is reluctant and minimizing. Before jumping to assessment, how do you approach this moment clinically?",
        targetConcepts: ['alliance building with reluctant client', 'validate autonomy', 'meet resistance with curiosity not confrontation', 'normalize ambivalence about therapy', 'cultural considerations for Black men in therapy'],
        rationale: "A reluctant client who showed up anyway is already doing something meaningful — acknowledge that. 'You came in even though this wasn't really your idea. That takes something.' Resistance isn't opposition; it's often self-protection. Black men face specific barriers to mental health engagement: stigma, masculinity norms around emotional expression, and historical mistrust of helping systems. Meeting reluctance with warmth and autonomy validation — rather than pushing — builds the alliance that makes honest assessment possible. Without alliance, the safety screen will produce false negatives.",
        resources: [
          { label: 'APA — Working With African American Men', url: 'https://www.apa.org/pi/oema/resources/ethnicity-health/african-american/article-male-depression' },
          { label: 'Miller & Rollnick — MI with Reluctant Clients', url: 'https://motivationalinterviewing.org/' }
        ],
        reveal: "James relaxes slightly when you acknowledge he chose to come. He says: 'Yeah, well. My wife worries.' He talks more easily about work — 20 years at the same company, passed over for a younger guy. 'I gave them everything.' He's more guarded about feelings: 'I'm fine. Just tired.'"
      },
      {
        stage: 2, stageLabel: 'Safety Screening',
        prompt: "James has said he's 'tired of everything' and 'just tired.' How do you assess for safety without damaging the fragile alliance?",
        targetConcepts: ['direct safety assessment', 'do not skip because of alliance concerns', 'tired of everything warrants direct inquiry', 'normalize the question', 'collaborative framing not interrogation'],
        rationale: "'Tired of everything' warrants direct safety assessment. The temptation is to protect the alliance by skirting the question — but that's a clinical error. The priority ladder is absolute: safety first. The skill is asking directly while normalizing: 'When people tell me they're tired of everything, sometimes they mean they've had thoughts about not wanting to be here anymore. Has that crossed your mind?' This is collaborative, not accusatory. The exam tests whether you screen for safety even when the client doesn't look like a safety concern.",
        resources: [
          { label: 'C-SSRS', url: 'https://cssrs.columbia.edu/' },
          { label: 'AFSP — Risk Factors', url: 'https://afsp.org/risk-factors-protective-factors-and-warning-signs' }
        ],
        reveal: "James pauses. 'I don't mean like that. I'm not going to do anything stupid. I just... sometimes I wonder what the point is.' He denies a plan or intent. He looks away when he says it."
      },
      {
        stage: 3, stageLabel: 'Exploring Passive Ideation',
        prompt: "James has expressed passive ideation — 'wonder what the point is' — while denying plan or intent. What is your next step?",
        targetConcepts: ['do not accept denial at face value', 'explore frequency duration intensity', 'passive ideation is on the continuum', 'when did these thoughts start', 'what do the thoughts sound like', 'middle-aged men highest risk demographic'],
        rationale: "Passive suicidal ideation is not safe ideation. 'What's the point' exists on a continuum that can escalate — and middle-aged men are the demographic with the highest rate of completed suicide. The assessment must go deeper than yes/no for plan and intent: How often do these thoughts come? When did they start? How long do they last? What do they sound like in his head? Has he thought about what 'not being here' would look like? Each question moves from vague to specific without being leading. His looking away while answering is body language worth noting — possible shame, possible minimization.",
        resources: [
          { label: 'Joiner — Interpersonal Theory of Suicide', url: 'https://www.apa.org/science/about/psa/2009/06/sci-brief' },
          { label: 'CDC — Suicide Facts and Statistics', url: 'https://www.cdc.gov/suicide/risk-factors.html' }
        ],
        reveal: "The thoughts started a few weeks ago, after the promotion was announced. They come mostly at night, when he can't sleep. He says: 'It's not like I'm planning anything. It's more like... I just feel heavy. Like what's the point of any of it.' He reports poor sleep, irritability, withdrawing from friends, and losing interest in coaching his son's basketball team — 'I told them I was busy but I just didn't want to go.'"
      },
      {
        stage: 4, stageLabel: 'Risk Factor Assessment',
        prompt: "You need to assess specific risk factors. What do you ask about next and why?",
        targetConcepts: ['access to lethal means', 'firearms — leading method for male suicide', 'prior attempts', 'family history of suicide', 'substance use', 'protective factors', 'recent losses or stressors'],
        rationale: "Specific risk factors must be assessed individually. Access to lethal means is the single strongest environmental predictor of completed suicide — firearms are the leading method for men, and their presence in the home increases risk regardless of stated intent. Prior attempts are the strongest individual predictor. Family history of suicide elevates risk. Substance use lowers inhibition and impairs judgment. Protective factors (reasons for living, social connections, religious beliefs) are weighed against risk factors but do not cancel them. Recent losses compound: job identity loss + role withdrawal + sleep disruption create cumulative vulnerability.",
        resources: [
          { label: 'Means Matter — Harvard', url: 'https://www.hsph.harvard.edu/means-matter/' },
          { label: 'VA — Suicide Risk Factors', url: 'https://www.mentalhealth.va.gov/suicide_prevention/' },
          { label: 'NIMH — Suicide Prevention', url: 'https://www.nimh.nih.gov/health/topics/suicide-prevention' }
        ],
        reveal: "No prior attempts. Owns two firearms — hunting rifles locked in a gun safe. He says his son and wife are reasons he'd 'never do anything.' Drinks 2-3 beers on weekends, no change. No family suicide history. No mental health history — 'Never needed it before.' When you ask if the thoughts have gotten more specific, he becomes quiet."
      },
      {
        stage: 5, stageLabel: 'Escalation Assessment',
        prompt: "James went quiet when asked if thoughts have gotten more specific. What do you do?",
        targetConcepts: ['sit with the silence', 'do not fill silence with reassurance', 'he is deciding whether to trust you', 'gentle direct follow-up', 'this is a critical clinical moment'],
        rationale: "Silence after a direct question is often the client deciding whether to disclose. Filling it with reassurance or moving on communicates that you don't really want to hear the answer. The clinical skill: wait. If he doesn't speak after 15-20 seconds, follow gently: 'It seems like something came up for you just now.' This is the moment the alliance investment pays off — or doesn't. If he trusts you enough, he'll share what the silence holds.",
        resources: [
          { label: 'Stanley-Brown Safety Planning', url: 'https://suicidesafetyplan.com/' },
          { label: 'SPRC — Assessing Risk', url: 'https://sprc.org/online-library/safety-planning-guide-quick-guide-clinicians/' }
        ],
        reveal: "After a long pause, James says: 'Last week I sat in my truck in the driveway for 40 minutes before going inside. I was thinking about how everyone would manage fine without me. My wife would get the insurance. My son would have his coaches. I just sat there.' He looks at you directly for the first time: 'That scared me a little.'"
      },
      {
        stage: 6, stageLabel: 'Risk Stratification',
        prompt: "James has disclosed escalating ideation with perceived burdensomeness and specific thinking. How do you assess his current risk level? What factors are you weighing?",
        targetConcepts: ['perceived burdensomeness — Joiner theory', 'shift from passive to specific ideation', 'firearms access even if locked', 'insurance mention is concerning', 'he said it scared him — insight is protective', 'moderate risk not imminent but not dismissible', 'means restriction conversation needed'],
        rationale: "'Everyone would manage fine without me' is perceived burdensomeness — one of Joiner's three components of suicidal desire. The insurance thought adds specificity. This is a qualitative shift from 'what's the point' to imagining a concrete world without him. Firearms in the home are the strongest environmental risk factor even when locked. BUT: he said 'that scared me' — his alarm at his own thinking is a protective factor indicating he hasn't normalized the ideation. Risk level: moderate. Not imminent (no plan, no stated intent, presence of alarm), but escalating ideation with lethal means access. The response is safety planning with means restriction — not hospitalization for someone who doesn't meet that threshold.",
        resources: [
          { label: 'Means Matter — Clinician Recommendations', url: 'https://www.hsph.harvard.edu/means-matter/means-matter/recommendations/clinicians/' },
          { label: 'VA Suicide Risk Assessment Guide', url: 'https://www.mentalhealth.va.gov/suicide_prevention/docs/VA_Suicide_Risk_Assessment_Guide.pdf' }
        ],
        reveal: "You reflect that it took courage to share that, and that his being scared by his own thinking tells you something important — he doesn't want those thoughts. James nods: 'I don't. I just don't know how to make them stop.' He's willing to work on a safety plan. He asks: 'Do you have to tell my wife about this? She'll panic.'"
      },
      {
        stage: 7, stageLabel: 'Confidentiality Navigation',
        prompt: "James asks if you have to tell his wife. How do you navigate this ethically and clinically?",
        targetConcepts: ['no duty to warn — risk to self', 'Tarasoff is threat to identifiable third party', 'breaching confidentiality would damage alliance', 'encourage voluntary disclosure', 'frame as recruiting support', 'help him plan the conversation', 'means restriction through voluntary cooperation'],
        rationale: "This is NOT a duty-to-warn situation. Tarasoff applies to imminent threats against identifiable third parties. James is at risk to himself and does not meet involuntary hold criteria. Breaching confidentiality would destroy the alliance with a client who was already reluctant — and could prevent him from ever returning to therapy. The ethical and effective approach: encourage voluntary disclosure, frame his wife as a support person rather than a surveillance system, and help him plan how to have the conversation. Means restriction (having her secure the gun safe key) works best when it's his choice, not imposed.",
        resources: [
          { label: 'ACA Code of Ethics — Confidentiality (B.1, B.2)', url: 'https://www.counseling.org/ethics/aca-code-of-ethics' },
          { label: '988 Suicide & Crisis Lifeline', url: 'https://988lifeline.org/' }
        ],
        reveal: "When you explain that this is his decision to share, not yours to report, James visibly relaxes. He agrees his wife probably already knows something is wrong. He says: 'I could ask her to hold the key to the gun safe. She wouldn't ask too many questions.' He's willing to tell her he's 'been struggling.'"
      },
      {
        stage: 8, stageLabel: 'Safety Planning',
        prompt: "James is engaged and willing to safety plan. What does the Stanley-Brown Safety Plan include, and how do you build it collaboratively?",
        targetConcepts: ['warning signs he recognizes', 'internal coping strategies', 'social contacts for distraction', 'people to ask for help', 'crisis resources — 988', 'means restriction — wife holds key', 'reasons for living', 'collaborative not prescriptive'],
        rationale: "The Stanley-Brown Safety Plan has six components: (1) Warning signs — the internal cues that signal a crisis building (for James: sitting alone, thoughts about insurance, withdrawal from activities). (2) Internal coping strategies — things he can do alone (walk, music, exercise). (3) People and social settings for distraction. (4) People he can call for help. (5) Professional contacts and crisis services (your number, 988 Lifeline, local ER). (6) Making the environment safe — wife securing gun safe key. The plan must be collaborative: he knows his warning signs better than you do. Write it on a physical card or paper. The research shows safety plans reduce suicide attempts and deaths.",
        resources: [
          { label: 'Stanley-Brown Safety Plan Template', url: 'https://suicidesafetyplan.com/' },
          { label: '988 Lifeline', url: 'https://988lifeline.org/' },
          { label: 'SPRC — Safety Planning', url: 'https://sprc.org/online-library/safety-planning-guide-quick-guide-clinicians/' }
        ],
        reveal: "You build the plan together. Warning signs: sitting alone in his truck, thoughts about 'managing without me,' pulling away from his son. Coping: going to the gym, calling his brother. Help: wife, brother, his pastor. Crisis: 988, your number, the ER. Means: wife holds gun safe key. Reason: his son's face. James folds the plan and puts it in his wallet. 'I actually feel a little better just saying this stuff out loud.'"
      },
      {
        stage: 9, stageLabel: 'Working Diagnosis',
        prompt: "What is your working diagnosis for James, and what is the treatment plan beyond the safety plan?",
        targetConcepts: ['MDD single episode moderate-severe with suicidal ideation', 'weekly sessions initially', 'behavioral activation', 'cognitive work on perceived burdensomeness', 'medication referral consideration', 'reassess safety every session', 'identity and role loss as contributing factors'],
        rationale: "Working diagnosis: Major Depressive Disorder, single episode, moderate to severe, with suicidal ideation. Evidence: anhedonia (lost interest in coaching), sleep disruption, irritability, withdrawal, passive-to-specific suicidal ideation, impaired functioning. Treatment: weekly sessions with safety reassessment at every contact. Behavioral activation targeting valued activities (the coaching was meaningful — reengagement is both treatment and monitoring). Cognitive work on perceived burdensomeness. Medication discussion — combined therapy plus SSRI has stronger evidence for moderate-severe depression than either alone. Monitor means restriction follow-through. Explore identity and role loss: 20 years of loyalty and being passed over strikes at his sense of worth and purpose.",
        resources: [
          { label: 'APA — Depression Guideline', url: 'https://www.apa.org/depression-guideline' },
          { label: 'Behavioral Activation — Div 12', url: 'https://div12.org/treatment/behavioral-activation-for-depression/' },
          { label: 'NIMH — Depression Treatment', url: 'https://www.nimh.nih.gov/health/topics/depression' }
        ],
        reveal: "James agrees to come back next week. He's not ready for medication — 'I want to try this first.' He says he might go to his son's next game: 'He keeps asking why I'm not there.' You schedule the appointment and confirm he has the safety plan and your number."
      },
      {
        stage: 10, stageLabel: 'Documentation and Follow-Up Planning',
        prompt: "James is leaving. What do you document, and what would change your clinical plan at the next session?",
        targetConcepts: ['document risk assessment thoroughly', 'document safety plan and means restriction', 'document clinical reasoning for outpatient vs higher care', 'what triggers plan change — ideation escalates, means restriction not followed, substance increase, protective factor loss', 'cultural considerations in documentation', 'coordinate if he consents to PCP involvement'],
        rationale: "Documentation protects the client and the clinician. Document: (1) The full risk assessment — risk factors, protective factors, and your clinical reasoning for moderate risk level. (2) Safety plan contents and that it was completed collaboratively. (3) Means restriction agreement and plan for wife to hold key. (4) Rationale for outpatient treatment rather than higher level of care (engaged, agreed to safety plan, alarm at own ideation, agreed to return, no plan/intent). (5) Follow-up plan. What changes the plan: if means restriction wasn't followed through, if ideation escalates to plan or intent, if he starts drinking more, if he stops attending his son's activities (protective factor erosion), or if he misses the next appointment without contact. Any of these triggers reassessment of level of care.",
        resources: [
          { label: 'SAMHSA — Behavioral Health Equity', url: 'https://www.samhsa.gov/behavioral-health-equity' },
          { label: 'ACA — Documentation Standards', url: 'https://www.counseling.org/ethics/aca-code-of-ethics' },
          { label: 'Joint Commission — Suicide Risk Documentation', url: 'https://www.jointcommission.org/resources/patient-safety-topics/suicide-prevention/' }
        ]
      }
    ]
  },
  {
    id: 'an3',
    clientName: 'Aiden',
    demographics: '9, White male (parents present)',
    category: 'Child/Adolescent',
    difficulty: 'hard',
    intakeVignette: "Aiden's mother and stepfather bring him in because school recommended counseling. He's been fighting, refusing rules, and grades dropped from B's to D's. Mother: 'He used to be such a sweet kid. I don't know what happened.' Aiden sits arms crossed, won't look at you.",
    rounds: [
      {
        stage: 1, stageLabel: 'Building Rapport',
        prompt: "Before formal assessment, how do you approach a 9-year-old who clearly doesn't want to be here? What's your first move?",
        targetConcepts: ['meet the child where they are', 'rapport before assessment', 'age-appropriate engagement', 'let him lead initially', 'do not start with problem talk', 'play or activity based entry'],
        rationale: "With children, alliance determines everything that follows. A 9-year-old with crossed arms is communicating: 'I didn't choose this.' Starting with assessment questions will produce silence or hostility. The clinical skill: enter his world first. Ask about games, school subjects he likes, pets, anything non-threatening. Let him lead. Once he's talking voluntarily — even about video games — you've established that this room is safe enough to speak in. That foundation makes later clinical inquiry possible. The exam rewards clinicians who recognize that child engagement IS clinical work, not a delay.",
        resources: [
          { label: 'AAP — Engaging Children in Therapy', url: 'https://www.aap.org/en/patient-care/mental-health-initiatives/' },
          { label: 'ACA — Counseling Children', url: 'https://www.counseling.org/knowledge-center' }
        ],
        reveal: "Aiden shrugs at most questions. You ask about video games — he perks up, talks about Minecraft. He's animated for a few minutes. When conversation shifts toward school, he shuts down again: 'It's stupid.' You notice he's more relaxed physically — uncrossed his arms."
      },
      {
        stage: 2, stageLabel: 'Parent Intake',
        prompt: "You need background information. How do you gather it, and what specific questions are priorities?",
        targetConcepts: ['separate parent interview', 'family structure and changes', 'timeline of behavior change', 'developmental milestones', 'prior mental health or medical issues', 'what changed and when'],
        rationale: "Parents provide essential context a guarded child can't or won't. The most critical question: what changed and when? 'He used to be sweet' means something happened. Map the timeline of behavioral change against life events. Family structure questions: Who lives in the home? How long? Any recent transitions? This isn't interrogation — it's building a developmental timeline. Ask about birth history, milestones, prior evaluations, and medical concerns. Also observe: how do the parents interact with each other and with Aiden? Who speaks? Who defers?",
        resources: [
          { label: 'NCTSN — Child Assessment', url: 'https://www.nctsn.org/treatments-and-practices/screening-and-assessments' },
          { label: 'CDC — Child Development', url: 'https://www.cdc.gov/child-development/' }
        ],
        reveal: "Bio father left when Aiden was 4. Mother remarried 18 months ago. Stepfather moved in 2 years ago. Behavior problems started about a year ago, worsened past 6 months. No prior MH history, normal development, healthy per pediatrician. Mother does most talking. Stepfather says: 'He just needs discipline. I've tried, but he won't listen to me.' Aiden flinched slightly when stepfather said 'I've tried.'"
      },
      {
        stage: 3, stageLabel: 'Individual Child Session',
        prompt: "You've noticed Aiden flinched when his stepfather spoke about discipline. Now you're alone with Aiden. How do you approach this session?",
        targetConcepts: ['age-appropriate safety screening', 'use play or drawing', 'do not lead the child', 'ask open questions about home', 'observe nonverbal responses', 'the flinch is clinical data'],
        rationale: "The flinch is a somatic marker — involuntary, unrehearsed, and clinically significant. In individual session, use developmentally appropriate methods: drawing, play, storytelling. These give children a way to communicate what they can't put into words. Open-ended prompts ('Draw your family,' 'Tell me about your house') provide structure without leading. Age-appropriate safety screening: 'Does anyone at home ever make you feel scared?' asked naturally, not interrogatively. Do not lead — do not say 'Does your stepdad hurt you?' Ask open questions and let the child fill them.",
        resources: [
          { label: 'Child Welfare — Recognizing Abuse', url: 'https://www.childwelfare.gov/topics/can/identifying/' },
          { label: 'CDC — ACEs', url: 'https://www.cdc.gov/aces/' }
        ],
        reveal: "Aiden draws his family. Puts himself and his mom together. Puts stepfather in a separate room with the door closed. 'He's always in his room. I stay out of there.' When asked about school: 'My teacher picks on me.' About home: 'It's fine' — jaw tightens. About feeling scared: long pause, then 'sometimes.'"
      },
      {
        stage: 4, stageLabel: 'Collateral Information',
        prompt: "You have concerning observations from Aiden. What collateral information do you seek, and from whom?",
        targetConcepts: ['teacher report — second setting', 'behavioral patterns at school', 'startle response or hypervigilance', 'peer relationships', 'changes in behavior timeline', 'drawings or written work changes'],
        rationale: "Collateral from the school provides a second setting and observational data from someone who sees Aiden daily. Teachers notice patterns a guarded child won't verbalize and parents may not see. Specific questions: Has his behavior changed, and when? How does he respond to physical proximity or unexpected touch? Is he hypervigilant or easily startled? How does he interact with peers? Has his artwork, writing, or play content changed? Two-setting observation is also diagnostically relevant — ODD and ADHD present across settings, while trauma responses may present differently at school versus home.",
        resources: [
          { label: 'NCTSN — Trauma in Schools', url: 'https://www.nctsn.org/trauma-informed-care/trauma-informed-systems/schools' }
        ],
        reveal: "Teacher report: Aiden startles easily, reacts aggressively to unexpected touch — even a tap on the shoulder. He's been drawing violent pictures (new behavior). He was well-liked before last year. He has trouble concentrating and sometimes 'zones out' for minutes at a time. Teacher says: 'Something is wrong. I just don't know what.'"
      },
      {
        stage: 5, stageLabel: 'Pattern Recognition',
        prompt: "You now have data from three sources — Aiden, parents, and teacher. What pattern is emerging? What is your clinical concern?",
        targetConcepts: ['convergent indicators of possible abuse', 'startle to touch', 'violent drawings', 'avoidance of stepfather', 'hypervigilance', 'flinch at discipline mention', 'jaw tightening', 'timeline correlates with stepfather', 'dissociative zoning out'],
        rationale: "Individual indicators could each be explained by adjustment to a new family structure. But convergence tells a different story: startle response to unexpected touch, violent drawings (new behavior), avoidance of stepfather in drawings and discussion, hypervigilance at school, flinch when stepfather mentioned discipline, jaw tightening when asked about home, 'sometimes' feeling scared, zoning out (possible dissociation), and behavioral deterioration correlating with stepfather's arrival. Together, this pattern is consistent with trauma exposure — specifically, possible physical abuse. The clinical concern is no longer 'behavior problems.' It's child safety.",
        resources: [
          { label: 'NCTSN — Physical Abuse Indicators', url: 'https://www.nctsn.org/what-is-child-trauma/trauma-types/physical-abuse' },
          { label: 'Child Welfare — Signs of Abuse', url: 'https://www.childwelfare.gov/topics/can/identifying/' }
        ],
        reveal: "You are now holding a clinical picture that raises serious concern. Aiden has another session scheduled. You need to determine your obligations before that session."
      },
      {
        stage: 6, stageLabel: 'Ethical and Legal Obligations',
        prompt: "Before the next session: what are your legal obligations at this point? What is the threshold for mandated reporting, and has it been met?",
        targetConcepts: ['mandated reporter in all 50 states', 'threshold is reasonable suspicion', 'not proof not certainty', 'you are not the investigator', 'document observations', 'consult supervisor', 'do not confront parents before reporting', 'do not wait for explicit disclosure'],
        rationale: "Every licensed counselor is a mandated reporter. The threshold is reasonable suspicion of abuse or neglect — NOT proof, NOT certainty, NOT a child's explicit statement. The convergent indicators already meet reasonable suspicion. Many clinicians make the mistake of waiting for a clear verbal disclosure. That's a higher standard than the law requires and leaves children in danger. Steps: (1) Consult supervisor if available — consultation supports you but does not transfer reporting obligation. (2) Do not confront stepfather or alert parents before reporting. (3) Do not conduct a forensic interview — that's CPS's job. (4) Document your observations in clinical notes. (5) If you get additional information, it strengthens the report but is not required to make one.",
        resources: [
          { label: 'Child Welfare — Mandatory Reporters', url: 'https://www.childwelfare.gov/topics/systemwide/laws-policies/statutes/manda/' },
          { label: 'ACA Code of Ethics — Mandated Reporting (B.2.a)', url: 'https://www.counseling.org/ethics/aca-code-of-ethics' }
        ],
        reveal: "You consult with your supervisor, who agrees the pattern meets reasonable suspicion. You plan to continue clinical contact with Aiden while being alert for additional information. In the next session, Aiden makes a disclosure."
      },
      {
        stage: 7, stageLabel: 'Disclosure',
        prompt: "In session, Aiden builds a block house in play therapy and says: 'Sometimes the dad gets really mad and breaks things. The boy has to be really quiet or he gets in trouble too.' What kind of trouble? 'The hitting kind.' Then he knocks the blocks down: 'I don't want to play this anymore.' What do you do right now?",
        targetConcepts: ['stay calm', 'do not react with visible alarm', 'do not ask leading questions', 'do not ask for details beyond what he offers', 'tell him he was brave', 'do not promise confidentiality', 'this confirms the report', 'document verbatim'],
        rationale: "The disclosure has happened. Clinical priorities in this moment: (1) Stay calm — your reaction teaches him whether it was safe to tell. Visible alarm or horror communicates danger. (2) Brief validation: 'Thank you for telling me that. That was really brave.' (3) Do NOT ask investigative follow-up questions ('How many times?', 'Where does he hit you?', 'Show me where'). That's CPS's job, and clinician questions can contaminate forensic interviews. (4) Do NOT promise confidentiality: 'My job is to make sure kids are safe, and sometimes that means I have to tell people whose job it is to help.' (5) Document his exact words, including the play context. (6) Assess immediate safety: is he safe to go home tonight?",
        resources: [
          { label: 'NCTSN — After Disclosure', url: 'https://www.nctsn.org/what-is-child-trauma/trauma-types/physical-abuse' },
          { label: 'Childhelp Hotline', url: 'https://www.childhelp.org/hotline/' },
          { label: 'Child Welfare — How to Report', url: 'https://www.childwelfare.gov/topics/responding/reporting/how/' }
        ],
        reveal: "You validate Aiden without alarm. He watches your face carefully. You tell him your job is to make sure kids are safe. He asks: 'Am I in trouble?' You assure him he is not. You file the CPS report. CPS opens an investigation. Mother is initially defensive, then tearful — she suspected stepfather was 'too rough.' Stepfather is ordered out of the home."
      },
      {
        stage: 8, stageLabel: 'Post-Report Clinical Response',
        prompt: "Aiden returns to counseling after the CPS report. He's quieter than before. He says: 'Are you going to tell on me again?' How do you respond?",
        targetConcepts: ['he experienced reporting as punishment for talking', 'address perceived betrayal', 'do not apologize for reporting', 'validate his bravery', 'clarify adults are responsible', 'be honest about your role', 'rebuild alliance through consistency'],
        rationale: "'Tell on me again' reveals how Aiden processed the event: the CPS investigation happened BECAUSE he talked, not because the abuse happened. This is a common child response and must be addressed directly. (1) Validate: 'What you told me was the bravest thing you could have done.' (2) Clarify responsibility: 'What happened was not your fault, and telling me about it was not wrong. The grown-ups are responsible for what happened, not you.' (3) Be honest about your role without apologizing for it: 'My job is always to make sure kids are safe. That hasn't changed.' (4) Rebuilding trust happens through consistency, not promises — showing up, being predictable, doing what you say you'll do.",
        resources: [
          { label: 'TF-CBT — Post-Disclosure Work', url: 'https://tfcbt.org/' },
          { label: 'NCTSN — Supporting Children', url: 'https://www.nctsn.org/what-is-child-trauma/trauma-types/physical-abuse' }
        ],
        reveal: "Aiden listens. He doesn't respond immediately but comes back the next week. Over several sessions he starts to reengage — first through play, then gradually through conversation. His mother is attending parent sessions and learning about trauma responses. She says: 'I feel terrible that I didn't see it.'"
      },
      {
        stage: 9, stageLabel: 'Diagnosis and Treatment',
        prompt: "What is your working diagnosis for Aiden, and what evidence-based treatment do you implement?",
        targetConcepts: ['PTSD or trauma response not ODD or CD', 'behavior was trauma communication', 'TF-CBT evidence-based for child trauma', 'parent component essential', 'do not pathologize survival behavior', 'school coordination', 'ongoing safety monitoring'],
        rationale: "Working diagnosis: PTSD (or if subthreshold, Other Specified Trauma and Stressor-Related Disorder) — NOT ODD, NOT CD. His fighting, defiance, and academic decline were trauma responses: hyperarousal manifesting as aggression, avoidance of authority figures who remind him of the stepfather, concentration problems from hypervigilance. Labeling this as a conduct disorder pathologizes his survival. TF-CBT (Trauma-Focused CBT) is the gold-standard treatment for child trauma. It includes a parent component — work with mother on understanding trauma responses, providing safety, processing her own guilt, and not inadvertently communicating that the disclosure caused problems. Coordinate with school: behavioral support plan, not disciplinary response.",
        resources: [
          { label: 'TF-CBT', url: 'https://tfcbt.org/' },
          { label: 'NCTSN — TF-CBT', url: 'https://www.nctsn.org/interventions/trauma-focused-cognitive-behavioral-therapy' },
          { label: 'DSM-5-TR — PTSD in Children', url: 'https://www.ptsd.va.gov/professional/treat/essentials/dsm5_ptsd.asp' }
        ],
        reveal: "Aiden begins TF-CBT. Over weeks, his aggression at school decreases. Mother learns to respond to his outbursts with 'I see you're having a hard time' instead of punishment. She asks about what happens if the stepfather wants to come back."
      },
      {
        stage: 10, stageLabel: 'Safety and Ethical Considerations',
        prompt: "Mother asks about the stepfather returning. What are the clinical, ethical, and safety considerations?",
        targetConcepts: ['child safety is paramount', 'CPS determines reunification not counselor', 'counselor role is to assess child readiness and safety', 'document recommendations', 'if stepfather returns without treatment child is at risk', 'coordinate with CPS', 'mother as protective parent — support her decision-making', 'ongoing safety monitoring plan'],
        rationale: "Reunification decisions belong to CPS and the family court, not the counselor. The counselor's role: (1) Assess Aiden's readiness — is he stable enough for the stress of stepfather's return? (2) Communicate clinical recommendations to CPS: the stepfather should complete anger management and parenting intervention before any contact. (3) Support the mother's decision-making as the protective parent — help her think through safety indicators, not make the decision for her. (4) If the stepfather returns without treatment, document your concerns and communicate them to CPS. (5) Develop a safety monitoring plan with Aiden: what does he do if he feels unsafe? Who does he tell? (6) Continue TF-CBT regardless of family configuration changes. The child's safety is the clinician's primary obligation.",
        resources: [
          { label: 'Child Welfare — Family Reunification', url: 'https://www.childwelfare.gov/topics/permanency/reunification/' },
          { label: 'ACA Code of Ethics — Client Safety', url: 'https://www.counseling.org/ethics/aca-code-of-ethics' },
          { label: 'NCTSN — Complex Trauma', url: 'https://www.nctsn.org/what-is-child-trauma/trauma-types/complex-trauma' }
        ]
      }
    ]
  },
  {
    id: 'an4',
    clientName: 'Denise',
    demographics: '52, White female',
    category: 'Substance',
    difficulty: 'hard',
    intakeVignette: "Denise, 52, White female, presents requesting help with anxiety — heart racing, difficulty breathing, constant worry, inability to relax. Recently divorced real estate agent; says anxiety is 'ruining my career.' Appears put-together but fidgets constantly, hands trembling slightly.",
    rounds: [
      {
        stage: 1, stageLabel: 'Safety and Initial Observation',
        prompt: "What do you assess first, and what do you notice about Denise's presentation that might warrant further exploration beyond what she's reporting?",
        targetConcepts: ['safety screening', 'observe trembling hands', 'tremor could be anxiety or withdrawal or medical', 'do not assume presenting concern is the full picture', 'physical symptoms need differential consideration'],
        rationale: "Safety first. Then: the trembling hands are a critical clinical observation that Denise hasn't mentioned as a concern. While tremor can be anxiety-related, it is also a sign of substance withdrawal (alcohol, benzodiazepines), hyperthyroidism, essential tremor, or caffeine excess. The clinician who notices what the client doesn't report is gathering data the client may be minimizing or genuinely unaware of. Ask about the trembling directly — her explanation will be informative.",
        resources: [
          { label: 'GAD-7', url: 'https://www.phqscreeners.com/select-screener' },
          { label: 'NIMH — Anxiety', url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders' }
        ],
        reveal: "Safety: no SI/HI. Denise says the anxiety started 8 months ago around the divorce. When you point out her trembling hands, she says: 'Oh — I haven't taken my Xanax today, maybe that's why.' She says it casually, as if it's unremarkable."
      },
      {
        stage: 2, stageLabel: 'Anxiety Assessment',
        prompt: "You need to quantify the anxiety. But Denise just said her trembling is because she missed her Xanax. What does that tell you clinically, and what do you assess next?",
        targetConcepts: ['withdrawal symptom appearing same day = dependence', 'GAD-7 for severity', 'but GAD-7 score may reflect withdrawal not primary anxiety', 'do not treat the score at face value until substance is clarified', 'timeline of Xanax use'],
        rationale: "The trembling she attributes to a missed dose IS the clinical finding. If benzodiazepine withdrawal symptoms appear within hours of a missed dose, that indicates physiological dependence — the body has adapted to expect the drug. A GAD-7 is still useful for baseline severity, but critically: the score may be measuring rebound anxiety from the benzo dependence cycle rather than primary GAD. You need to quantify the anxiety AND understand the Xanax use before interpreting either. Timeline questions: when did she start Xanax, how often does she take it, has the dose changed?",
        resources: [
          { label: 'FDA — Benzodiazepine Warning', url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-requiring-boxed-warning-updated-improve-safe-use-benzodiazepine-drug-products' },
          { label: 'SAMHSA — Benzo Information', url: 'https://store.samhsa.gov/product/protracted-withdrawal/sma10-4554' }
        ],
        reveal: "GAD-7: 18 (severe anxiety). Denise was prescribed Xanax by her PCP during the divorce, about 7 months ago. Started at 0.5mg 'as needed.' She says she takes it 'every day now — it's the only thing that helps.' She also drinks wine with dinner most nights — 'just one or two glasses, nothing crazy.'"
      },
      {
        stage: 3, stageLabel: 'Substance Use Deep Dive',
        prompt: "You now know Denise is on daily benzodiazepines and nightly alcohol. What specific information do you need about each, and why does the combination matter?",
        targetConcepts: ['exact benzo dose and frequency', 'tolerance — needing more', 'escalation pattern', 'alcohol quantity and frequency', 'benzo plus alcohol = compounded CNS depression', 'both have potentially fatal withdrawal', 'AUDIT for alcohol'],
        rationale: "'As needed' that became 'every day' is dose escalation. Both benzodiazepines and alcohol are CNS depressants. The combination is dangerous for two reasons: (1) concurrent use compounds sedation, respiratory depression, and overdose risk, and (2) both produce potentially life-threatening withdrawal syndromes. If she is physically dependent on both, the withdrawal risk is significantly elevated. Specific information needed: exact current dose and frequency, whether the dose has increased, whether she's obtained prescriptions from more than one provider, and exact alcohol consumption (not 'one or two' — how many ounces, how many nights).",
        resources: [
          { label: 'NIDA — CNS Depressants', url: 'https://nida.nih.gov/publications/drugfacts/prescription-cns-depressants' },
          { label: 'AUDIT — WHO', url: 'https://www.who.int/publications/i/item/audit-the-alcohol-use-disorders-identification-test-guidelines-for-use-in-primary-health-care' }
        ],
        reveal: "Current dose: alprazolam 2mg three times daily — up from the original 0.5mg as needed. She ran out early this month and got a second prescription from an urgent care doctor because her PCP wouldn't refill early. 'The regular dose stopped working so I just take a little more.' Wine: 2-3 glasses nightly, sometimes more on weekends. AUDIT: 14 (hazardous use). She says: 'It's prescribed. My doctor gave it to me.'"
      },
      {
        stage: 4, stageLabel: 'Diagnostic Reframing',
        prompt: "The clinical picture has shifted significantly from the presenting concern of 'anxiety.' What is actually happening, and what do you need to communicate to Denise?",
        targetConcepts: ['sedative use disorder — meets criteria', 'tolerance escalation multiple prescribers', 'concurrent AUD', 'rebound anxiety maintaining the cycle', 'her anxiety may be withdrawal not GAD', 'doctor shopping as symptom', 'benzo withdrawal can be fatal'],
        rationale: "Denise meets DSM-5-TR criteria for Sedative, Hypnotic, or Anxiolytic Use Disorder: tolerance (dose escalation from 0.5mg to 6mg daily), withdrawal (trembling), using in larger amounts than intended, obtaining from multiple prescribers, and continued use despite mounting problems. Her 'anxiety' is now likely substantially rebound anxiety — each dose wears off, producing worse anxiety than baseline, driving the next dose in a self-perpetuating cycle. She genuinely cannot tell the difference between her original anxiety and the withdrawal-driven anxiety. This reframe must be communicated with compassion, not judgment. 'It's prescribed' is a common cognitive barrier — psychoeducation about physical dependence (your body adapted) versus addiction as a character flaw reduces shame.",
        resources: [
          { label: 'DSM-5-TR — Sedative Use Disorder', url: 'https://www.psychiatry.org/psychiatrists/practice/dsm' },
          { label: 'Ashton Manual — Benzo Tapering', url: 'https://www.benzo.org.uk/manual/' }
        ],
        reveal: "Denise becomes defensive: 'I'm not an addict. I'm a professional. My doctor prescribed this.' After you validate her concern and explain the difference between physical dependence and addiction, she softens. She admits she's terrified of running out because 'the anxiety comes back ten times worse.' You identify this as rebound anxiety."
      },
      {
        stage: 5, stageLabel: 'Medical Urgency',
        prompt: "What is the most urgent clinical action you need to take, and what must you NOT do?",
        targetConcepts: ['medical referral for supervised taper', 'this is URGENT not elective', 'do NOT advise abrupt discontinuation', 'benzo withdrawal seizures can be fatal', 'alcohol compounds the danger', 'psychiatrist referral not PCP', 'counselor does not manage the taper'],
        rationale: "The most urgent action: refer to psychiatry for a medically supervised benzodiazepine taper. This is not an elective recommendation — it's a medical necessity. At her current dose (6mg alprazolam daily for 7 months), abrupt discontinuation could produce seizures, and seizures from benzo withdrawal can be fatal. The concurrent alcohol use compounds this risk because alcohol withdrawal is ALSO seizure-producing. Do NOT tell her to 'stop taking it' or 'cut down on her own.' Do NOT try to manage this as the counselor — it's a medical decision. The role: make the referral urgently, explain why, and coordinate care.",
        resources: [
          { label: 'ASAM — Withdrawal Management', url: 'https://www.asam.org/quality-care/clinical-guidelines' },
          { label: 'SAMHSA — Find Treatment', url: 'https://www.samhsa.gov/find-treatment' }
        ],
        reveal: "Denise is alarmed: 'Is it really that serious?' When you explain the seizure risk calmly and clearly, she says: 'Oh my God. I had no idea.' She agrees to see a psychiatrist. She asks: 'So what am I supposed to do? I can't function without something.'"
      },
      {
        stage: 6, stageLabel: 'Treatment Approach',
        prompt: "Denise asks what she's supposed to do instead. What is the treatment plan?",
        targetConcepts: ['psychiatrist for supervised taper', 'SSRI may be appropriate for underlying GAD', 'CBT for anxiety concurrent with taper', 'CBT is as effective as benzos long-term', 'address alcohol concurrently', 'harm reduction given benzo-alcohol interaction', 'do not promise comfort during taper'],
        rationale: "The treatment plan has multiple coordinated pieces: (1) Psychiatrist-managed benzo taper — gradual dose reduction over weeks to months, possibly switching to a longer-acting benzo (diazepam) first for smoother tapering. (2) CBT for the underlying anxiety — which is as effective as benzos long-term and more effective after medication stops. This gives her tools that don't produce dependence. (3) SSRI consideration — sertraline, escitalopram, or duloxetine are appropriate long-term pharmacotherapy for GAD without dependence risk. (4) Alcohol reduction — at minimum harm reduction, because alcohol during benzo tapering is medically dangerous. (5) Be honest: tapering will be uncomfortable. Don't promise it won't be. Credibility rupture during a difficult taper is worse than honest preparation.",
        resources: [
          { label: 'APA — GAD Guideline', url: 'https://www.apa.org/guideline/generalized-anxiety-disorder.pdf' },
          { label: 'NICE — GAD Management', url: 'https://www.nice.org.uk/guidance/cg113' },
          { label: 'Ashton Manual', url: 'https://www.benzo.org.uk/manual/' }
        ],
        reveal: "Denise is relieved there are alternatives. She's willing to try CBT. She's nervous about the taper: 'What if the anxiety is unbearable?' She also admits hiding her drinking: 'I pour wine into a coffee mug so no one at open houses notices.' She starts crying: 'I think things have gotten worse than I realized.'"
      },
      {
        stage: 7, stageLabel: 'Therapeutic Response to Insight',
        prompt: "Denise is having a moment of clarity — crying, recognizing the severity. How do you respond therapeutically?",
        targetConcepts: ['validate courage of recognition', 'change talk moment in MI', 'do not rush past the emotion', 'do not jump to logistics', 'reflect the significance', 'this is where trust deepens'],
        rationale: "This is a change talk moment — Denise is seeing her situation clearly for the first time. The therapeutic response: stay with the emotion. Don't rush to the plan. 'That took real honesty to see, and to say out loud.' Reflect what you see: a competent professional who used a prescribed medication exactly as directed, whose body adapted, and who coped with a painful divorce the best way she knew how. This is not a character failure — it's a medical situation that developed gradually. The alliance deepens in this moment if you honor it. The exam rewards clinicians who recognize change talk and respond with validation, not logistics.",
        resources: [
          { label: 'Motivational Interviewing', url: 'https://motivationalinterviewing.org/' }
        ],
        reveal: "Denise collects herself. She says: 'Nobody knows. My clients think I have it all together.' She agrees to the psychiatry referral and weekly therapy. She asks: 'What level of care are we talking about here? Can I still work?'"
      },
      {
        stage: 8, stageLabel: 'Level of Care Determination',
        prompt: "Denise asks about level of care. How do you determine what she needs?",
        targetConcepts: ['outpatient if stable with support and medical monitoring', 'IOP if insufficient structure', 'PHP or residential if medically complex taper', 'ASAM criteria for placement', 'does she have social support', 'can she maintain safety during taper', 'the alcohol complicates placement'],
        rationale: "Level of care depends on medical stability, social support, and ability to maintain safety. ASAM criteria guide placement. Outpatient: appropriate if she has adequate social support, stable housing, can attend weekly appointments, and the psychiatrist determines the taper can be managed in outpatient (lower doses, longer-acting substitution). IOP (Intensive Outpatient): if she needs more structure — 3x/week groups plus individual, while maintaining work. PHP (Partial Hospitalization): if the taper is medically complex or she has insufficient support. Residential: if she cannot maintain safety, if prior outpatient attempts failed, or if the combined benzo-alcohol withdrawal requires 24-hour medical monitoring. The alcohol complicates the picture: if she's drinking heavily enough for alcohol withdrawal risk ON TOP of benzo withdrawal, medical monitoring is essential.",
        resources: [
          { label: 'ASAM Criteria — Levels of Care', url: 'https://www.asam.org/quality-care/clinical-guidelines/the-asam-criteria' },
          { label: 'SAMHSA — Levels of Care', url: 'https://www.samhsa.gov/find-treatment' }
        ],
        reveal: "Denise has stable housing, employment, and one close friend. She has no prior treatment history. The psychiatrist determines outpatient taper is appropriate given her willingness to engage and that her alcohol use, while concerning, is at hazardous rather than dependent levels. She starts the taper and begins weekly CBT for anxiety."
      },
      {
        stage: 9, stageLabel: 'Treatment Coordination',
        prompt: "What coordination is needed between you, the psychiatrist, and any other providers? What do you monitor in ongoing sessions?",
        targetConcepts: ['coordinate taper timeline with therapy', 'CBT skills before hardest taper weeks', 'monitor withdrawal symptoms', 'monitor alcohol use', 'AUDIT periodically', 'watch for new symptoms as benzo clears', 'the original GAD may emerge differently', 'relapse prevention'],
        rationale: "Coordination matters because therapy and taper interact: (1) The psychiatrist needs to know what anxiety management skills Denise is learning in CBT, so the taper pace accounts for her coping capacity. (2) You need to know the taper schedule so you can prepare her — the hardest weeks are when the dose drops through the dependence threshold. (3) Monitor: withdrawal symptoms (insomnia, increased anxiety, irritability), alcohol use (does it increase as benzo decreases?), and new symptoms (as the benzo clears, the original GAD may present differently — or may be milder than expected, since much of the 'anxiety' was rebound). (4) Relapse prevention: what happens when she has a very anxious day? What's her plan besides a pill?",
        resources: [
          { label: 'NIAAA — Rethinking Drinking', url: 'https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/treatment-alcohol-problems-finding-and-getting-help' },
          { label: 'ACA Code of Ethics — Coordination of Care', url: 'https://www.counseling.org/ethics/aca-code-of-ethics' }
        ],
        reveal: "Over several weeks, Denise is tapering gradually. She reports increased anxiety on dose-reduction days but uses the breathing and grounding techniques from CBT. She cut wine to weekdays only. She says: 'I'm starting to feel things again. It's uncomfortable but also kind of... real?'"
      },
      {
        stage: 10, stageLabel: 'Identity and Long-Term Recovery',
        prompt: "Denise says she's starting to 'feel things again.' She's also worried about her professional identity. How do you address this, and what does the long-term plan look like?",
        targetConcepts: ['address shame about professional identity', 'recovery fits with competence not against it', 'the coffee mug detail — shame drove hiding', 'long-term anxiety management without benzos', 'SSRI if GAD persists', 'relapse triggers and plan', 'ongoing monitoring', 'when to step down from weekly sessions'],
        rationale: "Denise's professional identity ('I'm a professional, not an addict') was both a barrier to recognition and a source of shame once she saw the problem. Therapy must address this: recovery is not the opposite of competence — it's an expression of it. The woman who hid wine in a coffee mug was in pain and coping alone. The woman who recognized the problem, sought help, and is tapering under medical supervision is showing exactly the strength she was afraid she'd lost. Long-term plan: (1) Complete taper with psychiatric monitoring. (2) Ongoing CBT for GAD. (3) SSRI if anxiety persists after taper completion — the original GAD was real even if the benzo cycle amplified it. (4) Relapse prevention: identify triggers (high-stress closings, loneliness, divorce anniversaries), develop alternative responses. (5) Step down from weekly to biweekly sessions once stable for 2-3 months.",
        resources: [
          { label: 'SAMHSA — Recovery and Wellness', url: 'https://www.samhsa.gov/find-help' },
          { label: 'Motivational Interviewing', url: 'https://motivationalinterviewing.org/' },
          { label: 'APA — Anxiety Treatment', url: 'https://www.apa.org/topics/anxiety' }
        ]
      }
    ]
  },
  {
    id: 'an5',
    clientName: 'Tyler',
    demographics: '22, biracial male (Black/White)',
    category: 'Differential Diagnosis',
    difficulty: 'medium',
    intakeVignette: "Tyler, 22, biracial male, college senior referred by campus counseling. Reports 'my brain won't cooperate' — concentration problems, missing assignments, mood swings, conflict with girlfriend. At risk of not graduating. Says he's 'always been like this' but it's gotten worse.",
    rounds: [
      {
        stage: 1, stageLabel: 'Safety and Presenting Concern',
        prompt: "What do you assess first, and what about Tyler's description raises multiple diagnostic possibilities?",
        targetConcepts: ['safety screening', 'always been like this = lifelong pattern', 'getting worse = recent change', 'both could be true simultaneously', 'concentration plus mood = wide differential', 'do not anchor on one diagnosis too early'],
        rationale: "Safety first. Then: 'always been like this' vs. 'getting worse' is the single most important diagnostic clue. A lifelong pattern of inattention suggests ADHD. Recent worsening or cycling suggests a mood disorder. Both can be true — ADHD and bipolar have ~20% comorbidity. 'My brain won't cooperate' could be ADHD (executive function), depression (cognitive slowing), hypomania (racing thoughts), anxiety (worry loops), substance effects, or sleep deprivation. The trap is anchoring on one possibility. The exam rewards holding multiple hypotheses open.",
        resources: [
          { label: 'NIMH — ADHD', url: 'https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd' },
          { label: 'NIMH — Bipolar', url: 'https://www.nimh.nih.gov/health/topics/bipolar-disorder' }
        ],
        reveal: "Safety: no SI/HI. Tyler says he was 'the class clown' growing up, always losing things and getting in trouble for not paying attention. Never evaluated: 'My mom said I just needed to try harder.' College has been harder, especially the thesis. His mood swings: some weeks he's 'on fire,' other weeks he can't get out of bed."
      },
      {
        stage: 2, stageLabel: 'Developmental History',
        prompt: "Tyler describes a lifelong pattern of inattention. What specific developmental history do you need for an ADHD evaluation?",
        targetConcepts: ['symptoms before age 12', 'two or more settings — home school social', 'specific examples not just labels', 'academic accommodations or lack thereof', 'report cards or teacher comments', 'family response to his struggles', 'never evaluated is common in Black boys'],
        rationale: "ADHD diagnosis requires: onset before age 12, symptoms in 2+ settings, and functional impairment. Specific examples matter more than labels: 'I couldn't sit still' is less informative than 'teachers moved my desk away from other kids in every grade.' Ask about report card comments — they're contemporaneous documentation. The fact that Tyler was never evaluated despite years of classroom problems is diagnostically AND socially significant. Black boys are less likely to be referred for ADHD evaluation and more likely to be disciplined for the same behaviors that get White peers referred. His mother's 'try harder' response is common in families where neurodevelopmental disorders aren't part of the cultural framework.",
        resources: [
          { label: 'DSM-5-TR — ADHD Criteria', url: 'https://www.cdc.gov/adhd/diagnosis/index.html' },
          { label: 'ASRS — Adult ADHD Screener', url: 'https://www.hcp.med.harvard.edu/ncs/asrs.php' },
          { label: 'CHADD — ADHD and Race', url: 'https://chadd.org/about-adhd/general-prevalence/' }
        ],
        reveal: "Teachers consistently noted 'doesn't pay attention' and 'talks too much' from 1st grade on. Never completed homework without a parent sitting with him. Lost jackets, lunchboxes, assignments constantly. Two settings confirmed — home and school. He compensated through intelligence: crammed for tests, relied on charm, scraped by. College removed the scaffolding."
      },
      {
        stage: 3, stageLabel: 'Substance Screening',
        prompt: "Before going deeper into mood, what substance use do you screen for and why does it matter for this differential?",
        targetConcepts: ['marijuana can mimic both ADHD and bipolar symptoms', 'stimulant misuse common in college', 'alcohol as self-medication', 'caffeine and sleep patterns', 'substance use complicates every differential', 'screen before attributing symptoms to a disorder'],
        rationale: "Substance screening before diagnostic conclusions — because marijuana mimics ADHD (impaired concentration, motivation) and can trigger or mask mood episodes. Stimulant misuse is common among undiagnosed college students who self-medicate attention problems. Alcohol as a sleep aid or social coping distorts mood patterns. Even caffeine patterns matter: heavy caffeine produces concentration variability and sleep disruption that look like ADHD or mood cycling. The question isn't whether he uses — it's whether substance use could explain or contribute to the symptoms you'd otherwise attribute to a disorder.",
        resources: [
          { label: 'NIDA — Marijuana and Mental Health', url: 'https://nida.nih.gov/publications/research-reports/marijuana/there-link-between-marijuana-use-psychiatric-disorders' },
          { label: 'SAMHSA — SBIRT', url: 'https://www.samhsa.gov/sbirt' }
        ],
        reveal: "Tyler smokes marijuana 2-3 times per week 'to chill out.' Started at 19. No other drug use. Drinks socially on weekends — 3-4 drinks. No stimulant misuse, though 'my roommate takes Adderall and keeps telling me to try it.' He drinks coffee 'all day' during thesis work. Sleep: highly irregular — sometimes 3 hours, sometimes 12."
      },
      {
        stage: 4, stageLabel: 'Mood Episode Assessment',
        prompt: "Tyler describes weeks of being 'on fire' alternating with weeks of being unable to get out of bed. What specific questions differentiate mood episodes from ADHD variability?",
        targetConcepts: ['episode duration — days/weeks vs hours', 'distinct onset and offset', 'decreased need for sleep vs insomnia', 'grandiosity vs normal confidence', 'goal-directed activity increase', 'spending or impulsive behavior beyond ADHD baseline', 'family psychiatric history', 'mood charting'],
        rationale: "ADHD produces daily variability — good days and bad days with attention. Mood episodes have distinct onset, sustained duration (days to weeks), and qualitative shifts in energy, sleep need, and behavior. The key questions: (1) Duration — hypomania is at least 4 days (DSM) but often 5-7+ clinically. (2) Sleep: decreased NEED (feels rested on 3-4 hours) is hypomanic. Can't sleep but feels exhausted is insomnia/anxiety. (3) Grandiosity: starting projects beyond capacity, believing in unrealistic outcomes. (4) Spending or impulsive behavior that exceeds his ADHD baseline impulsivity. (5) Family history is the strongest bipolar risk predictor. Mood charting over 2+ weeks captures patterns retrospective reporting misses.",
        resources: [
          { label: 'DSM-5-TR — Hypomanic Episode Criteria', url: 'https://www.nimh.nih.gov/health/topics/bipolar-disorder' },
          { label: 'MDQ — Mood Disorder Questionnaire', url: 'https://www.ohsu.edu/sites/default/files/2019-06/cms-quality-bipolar_disorder_702.pdf' }
        ],
        reveal: "The 'on fire' weeks last 5-7 days with clear onset. During them: sleeps 3-4 hours and feels great, starts multiple projects simultaneously, talks rapidly (girlfriend says 'it's like you can't stop'), and spent $800 on music equipment he can't afford. Then crashes for a week or more: hypersomnia, no motivation, hopelessness. Family history: mother has bipolar II, diagnosed in her 30s."
      },
      {
        stage: 5, stageLabel: 'Formal Assessment',
        prompt: "What formal assessment tools do you administer, and what are you looking for from each?",
        targetConcepts: ['ASRS for ADHD', 'MDQ for mood', 'mood chart prospective data', 'collateral from girlfriend or mother', 'childhood records if available', 'PHQ-9 during down period'],
        rationale: "Structured assessment adds rigor to clinical impressions. ASRS (Adult ADHD Self-Report Scale): screens for current ADHD symptoms and can prompt recall of childhood patterns. MDQ (Mood Disorder Questionnaire): screens for lifetime hypomanic/manic episodes. Mood chart (2+ weeks): prospective data is more reliable than retrospective report for mood patterns. Collateral: girlfriend's observations ('he can't stop talking') are valuable — people close to the client often see the episodes more clearly than the client does. Mother can confirm childhood ADHD patterns and may share family history details Tyler doesn't know. PHQ-9 during a down period quantifies depressive severity. Together, these build the evidence base for differential diagnosis.",
        resources: [
          { label: 'ASRS v1.1', url: 'https://www.hcp.med.harvard.edu/ncs/asrs.php' },
          { label: 'APA Div 12 — ADHD Assessment', url: 'https://div12.org/diagnosis/adult-attention-deficithyperactivity-disorder/' }
        ],
        reveal: "ASRS: elevated across inattention and hyperactivity/impulsivity domains. Childhood patterns confirmed by mother. Mood charting over 2 weeks captures a distinct shift: he was in a 'down' period when he started (PHQ-9: 14), then shifted into an energized period — reorganized his apartment at 3 AM and texted his ex-girlfriend 47 times. Tyler says: 'See? That's when I feel like myself. That's the real me.'"
      },
      {
        stage: 6, stageLabel: 'Differential Diagnosis',
        prompt: "You have assessment data. What are your differential diagnoses, and what evidence supports or rules out each?",
        targetConcepts: ['ADHD combined — confirmed', 'bipolar II — probable', 'comorbidity likely', 'cannabis complicating', 'distinguish ADHD impulsivity from hypomanic impulsivity', 'MDD ruled out by up episodes', 'cyclothymia less likely given severity'],
        rationale: "ADHD, Combined Presentation: confirmed. Childhood onset, multiple settings, pervasive inattention and impulsivity, functional impairment, never treated. This is a textbook missed diagnosis. Bipolar II: probable. Hypomanic episodes lasting 5-7 days with cardinal features: decreased need for sleep, grandiosity (multiple simultaneous projects), pressured speech, impulsive spending. Family history (mother with Bipolar II) significantly elevates risk. The depressive episodes (hypersomnia, hopelessness, withdrawal) complete the bipolar II picture. ADHD + Bipolar II comorbidity: approximately 20% co-occurrence. Cannabis use: complicates both conditions — worsens attention, can trigger mood episodes, masks hypomanic symptoms. MDD: ruled out — the distinct 'up' episodes are inconsistent with unipolar depression. Cyclothymia: less likely given the severity of both hypomanic and depressive episodes.",
        resources: [
          { label: 'ADHD-Bipolar Comorbidity', url: 'https://pubmed.ncbi.nlm.nih.gov/16139175/' },
          { label: 'DSM-5-TR — Bipolar II', url: 'https://www.nimh.nih.gov/health/topics/bipolar-disorder' }
        ],
        reveal: "You share your clinical formulation with Tyler. He accepts the ADHD immediately: 'Finally. I've been saying this for years.' He resists the bipolar: 'I'm not bipolar. My mom is bipolar and she was a mess. The up times are the only time I feel good.'"
      },
      {
        stage: 7, stageLabel: 'Navigating Diagnostic Resistance',
        prompt: "Tyler accepts ADHD but rejects bipolar. How do you navigate this without damaging the alliance or colluding with denial?",
        targetConcepts: ['validate his experience', 'hypomania genuinely feels good', 'do not argue the label', 'explore the costs of up periods', 'address mother identification', 'MI not confrontation', 'early identification is different from his mothers path'],
        rationale: "Tyler's resistance has two layers: (1) Hypomania feels GOOD — it's the only time he feels productive and alive. Calling it a symptom feels like you're taking away the best version of himself. (2) His mother's bipolar was associated with dysfunction ('a mess'), so accepting the label feels like accepting her fate. Address both with MI, not argumentation. For (1): validate the genuine positive experience while exploring costs — '$800 you can't afford, 47 texts to your ex at 3 AM, the crash that follows. How do the weeks AFTER the on-fire weeks go?' The evidence lives in the consequences, not the experience. For (2): 'You're not your mom. Knowing about this at 22 means you get choices she didn't have at 30.' Differentiate his trajectory from hers.",
        resources: [
          { label: 'MI — Motivational Interviewing', url: 'https://motivationalinterviewing.org/' },
          { label: 'DBSA — Bipolar Self-Advocacy', url: 'https://www.dbsalliance.org/education/bipolar-disorder/' }
        ],
        reveal: "Tyler is quiet. He says: 'The crash is bad. I missed two weeks of thesis work after the last one.' He admits the $800 was his rent money. He says: 'I don't want to be like her.' You reflect: 'You're not her. And you're finding out now, not after years of not knowing.' He's not fully convinced but agrees to 'keep an open mind.'"
      },
      {
        stage: 8, stageLabel: 'Treatment Planning — Medication Sequencing',
        prompt: "Tyler asks about Adderall — his roommate says it 'changes everything.' What is the critical safety issue, and how do you address it?",
        targetConcepts: ['stimulants can trigger mania in bipolar', 'mood stabilization MUST come first', 'this is standard of care', 'not counselor prescription decision but must communicate the risk', 'psychiatric referral with both diagnoses communicated', 'coordinate with psychiatrist'],
        rationale: "This is the highest-stakes medication sequencing question in this case. Stimulant medications (amphetamines, methylphenidate) can trigger or worsen manic/hypomanic episodes in people with bipolar disorder. Starting Adderall without mood stabilization first is a well-documented clinical danger. This isn't an optional precaution — it's the standard of care. The counselor doesn't prescribe, but MUST: (1) communicate the risk clearly to Tyler, (2) ensure the psychiatric referral includes both diagnoses so the psychiatrist sequences medication appropriately — mood stabilizer first, then reassess ADHD symptoms (some improve with mood stabilization), then consider a carefully monitored stimulant trial only after mood is stable.",
        resources: [
          { label: 'Stimulant Use in Bipolar — Goldberg', url: 'https://pubmed.ncbi.nlm.nih.gov/26060048/' },
          { label: 'APA — Bipolar Treatment', url: 'https://psychiatryonline.org/doi/book/10.1176/appi.books.9780890424865' },
          { label: 'CHADD — Medication and Comorbidity', url: 'https://chadd.org/about-adhd/medication-management/' }
        ],
        reveal: "Tyler is frustrated: 'So I can't even get the one thing that might help?' You explain that treating ADHD without stabilizing mood first could make everything worse. He says: 'Fine. What CAN I do in the meantime?' He agrees to the psychiatry referral."
      },
      {
        stage: 9, stageLabel: 'Non-Medication Treatment',
        prompt: "While waiting for mood stabilization, what can you offer Tyler in therapy? What about academic support?",
        targetConcepts: ['CBT for mood regulation', 'behavioral strategies for ADHD', 'organizational systems', 'sleep hygiene critical', 'cannabis reduction', 'academic accommodations through disability office', 'thesis timeline planning', 'psychoeducation about both conditions'],
        rationale: "Tyler doesn't have to wait passively. Therapy targets: (1) CBT for mood — recognizing early signs of hypomanic episodes, implementing behavioral brakes (sleep protection, spending limits, delay rules before impulsive decisions). (2) ADHD behavioral strategies that don't require medication: external organizational systems (digital calendars, task breakdown, body doubling), environmental modifications (study location, phone management), and structured routines. (3) Sleep hygiene is critical — sleep disruption destabilizes bipolar AND worsens ADHD. (4) Cannabis reduction — it worsens both conditions and complicates medication response. (5) Academic accommodations: his university disability office can provide extended deadlines, testing accommodations, and thesis timeline adjustments with documentation. These aren't charity — they're legal rights under the ADA.",
        resources: [
          { label: 'CHADD — ADHD Strategies', url: 'https://chadd.org/about-adhd/managing-your-adult-adhd/' },
          { label: 'ADA — Academic Accommodations', url: 'https://www.ada.gov/topics/disability-rights-101/' },
          { label: 'DBSA — Mood Monitoring', url: 'https://www.dbsalliance.org/wellness-tracker/' }
        ],
        reveal: "Tyler starts using a planner for the first time — 'I hate it but it works.' He registers with the disability office and gets a thesis extension. He cuts marijuana to weekends only. He says: 'I think the weed was making the crashes worse.' His mood has been more stable with better sleep. He asks: 'When can we revisit the Adderall conversation?'"
      },
      {
        stage: 10, stageLabel: 'Ongoing Coordination and Monitoring',
        prompt: "Tyler is stabilizing. The psychiatrist has started a mood stabilizer. What do you monitor, and when is it appropriate to revisit the stimulant question?",
        targetConcepts: ['mood stability over 2-3 months before stimulant trial', 'ADHD symptoms may partially improve with mood stabilization', 'residual ADHD symptoms after mood stable = stimulant trial', 'psychiatrist makes the medication call', 'monitor for hypomania breakthrough', 'cannabis as relapse risk', 'graduation timeline as stressor', 'ongoing mood charting'],
        rationale: "The medication sequencing timeline: mood stabilizer first, observe for 2-3 months of stability (no hypomanic or depressive episodes), then reassess. Some ADHD symptoms (distractibility, impulsivity, disorganization) may improve with mood stabilization because they were being driven or amplified by the mood cycling. Residual ADHD symptoms that persist despite stable mood are the appropriate target for a stimulant trial — carefully monitored, at the lowest effective dose, with mood charting continuing. The counselor's monitoring role: (1) Mood charting at every session. (2) Watch for hypomania breakthrough, especially during stressful periods (graduation). (3) Cannabis use — increases relapse risk for both conditions. (4) The stimulant conversation belongs to the psychiatrist, but the counselor can advocate for the referral when mood is stable. (5) Graduation is a major transition — anticipate increased stress and plan for it.",
        resources: [
          { label: 'NIMH — Bipolar Treatment', url: 'https://www.nimh.nih.gov/health/topics/bipolar-disorder' },
          { label: 'CHADD — ADHD and Coexisting Conditions', url: 'https://chadd.org/about-adhd/coexisting-conditions/' },
          { label: 'NIDA — Marijuana Research', url: 'https://nida.nih.gov/publications/research-reports/marijuana/there-link-between-marijuana-use-psychiatric-disorders' }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ASSESS_NEXT_CASES };
}
