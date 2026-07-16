// ============================================================================
// deep-cases-batch-20.js — Difficulty-gap fill: easy cases + Crisis cases
//
// Fills the two most acute gaps in the deep-case bank's difficulty mix:
// (1) 10 easy cases in high-prevalence categories (Depressive, Anxiety, Trauma,
//     Substance) so the bank stops being ~55% hard with almost no easy cases.
// (2) 6 Crisis cases (the bank held only 2 in exam format against a 10-case
//     blueprint target), each keyed to a distinct exam-tested decision: means
//     restriction, duty-to-protect vs. diffuse anger, mandated reporting,
//     a buried medical emergency, IPV/contraindicated conjoint therapy, and
//     NSSI function-vs-intent.
// ============================================================================

const D199 = {
  "id": "ncmhce-D199",
  "title": "Low mood and lost purpose after retiring from teaching",
  "category": "Depressive",
  "difficulty": "easy",
  "primaryDiagnosis": {
    "name": "Major Depressive Disorder, Moderate",
    "code": "F33.1"
  },
  "diagnosis": {
    "name": "Major Depressive Disorder, Moderate",
    "code": "F33.1"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Major Depressive Disorder, Moderate",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Adjustment Disorder, with Depressed Mood",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Persistent Depressive Disorder",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Bipolar II Disorder",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Carol Whitfield, a 58-year-old retired elementary school teacher, presents to outpatient counseling reporting eight weeks of low mood, tearfulness, and loss of interest in gardening and reading since retiring from a 32-year teaching career.",
    "session1": "She describes waking most nights around 3 a.m. and being unable to fall back asleep, a ten-pound appetite-related weight loss, low energy most of the day, and trouble concentrating on simple tasks such as sorting the mail. She denies any past period of elevated mood, decreased need for sleep, or unusually high energy.",
    "session2": "She reports feeling worthless and like a burden to her husband since she stopped bringing in income, but she denies any thoughts of death, suicide, or self-harm, has no history of a prior attempt, and is willing to begin treatment collaboratively."
  },
  "diagnosticRationale": "Carol meets DSM-5-TR criteria for a moderate major depressive episode: depressed mood, anhedonia, early-morning awakening, appetite loss with weight change, fatigue, poor concentration, and worthlessness are present nearly every day for at least two weeks with clear functional impairment. Her symptom count and severity exceed an adjustment reaction to retirement, her episode duration is well under the two years required for persistent depressive disorder, and she denies any history of hypomanic or manic symptoms, ruling out bipolar II disorder.",
  "references": [
    {
      "id": "R1",
      "source": "DSM-5-TR",
      "detail": "MDD Criterion A: 5+ of 9 symptoms nearly daily for 2+ weeks, including depressed mood or anhedonia, with impairment"
    },
    {
      "id": "R2",
      "source": "APA CPG",
      "detail": "Depression guideline: CBT, behavioral activation, and IPT recommended as first-line psychotherapies"
    },
    {
      "id": "R3",
      "source": "C-SSRS",
      "detail": "Structured screening of ideation severity, intent, plan, and prior behavior at intake"
    },
    {
      "id": "R4",
      "source": "VA/DoD CPG",
      "detail": "MDD measurement-based stepped care using repeated PHQ-9 administration to guide adjustments"
    },
    {
      "id": "R5",
      "source": "ACA Code of Ethics",
      "detail": "A.1., A.2., and B.1.: informed consent, referral practices, and limits of confidentiality"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "What should the counselor confirm first to anchor the major depressive episode diagnosis at intake?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "That her low mood, anhedonia, and related symptoms have persisted nearly every day for nine or more weeks with clear impairment",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Duration and impairment anchor the episode",
          "explanation": {
            "approach": "Confirm the diagnostic threshold",
            "rationale": "DSM-5-TR requires a two-week span of nearly daily symptoms with functional impairment",
            "keyIndicators": [
              "eight weeks of symptoms",
              "loss of interest in gardening and reading"
            ],
            "commonMistake": "Diagnosing MDD from a single tearful moment in session"
          }
        },
        {
          "id": "b",
          "text": "That she can name the exact date her retirement became official on the school district’s administrative calendar",
          "isCorrect": false,
          "weight": 0,
          "rationale": "An exact date does not establish the diagnosis",
          "explanation": {
            "approach": "Stressor-date hunting",
            "rationale": "The precise onset date is not a Criterion A requirement",
            "keyIndicators": [
              "recent retirement"
            ],
            "commonMistake": "Treating a calendar date as the diagnostic test"
          }
        },
        {
          "id": "c",
          "text": "That at least one first-degree relative has previously been formally diagnosed and treated for a depressive or mood disorder",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Family history supports but does not confirm the diagnosis",
          "explanation": {
            "approach": "Over-weighting heredity",
            "rationale": "Family history informs risk but is not part of the current-episode criteria",
            "keyIndicators": [
              "no family history gathered yet"
            ],
            "commonMistake": "Requiring a family history before diagnosing"
          }
        },
        {
          "id": "d",
          "text": "That her symptoms today are clearly more severe than they were when they first began roughly eight weeks ago",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Worsening over time is not required for the diagnosis",
          "explanation": {
            "approach": "Trajectory framing",
            "rationale": "A progressively worsening course is not a Criterion A element",
            "keyIndicators": [
              "stable symptom pattern"
            ],
            "commonMistake": "Demanding a worsening trend to diagnose"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "What additional history is most important to gather to avoid misattributing Carol’s presentation?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "A review of her current medications, substance use, and any thyroid or other medical conditions that can mimic depression",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Rule out medical and substance causes before finalizing",
          "explanation": {
            "approach": "Screen for organic contributors",
            "rationale": "DSM-5-TR requires excluding medical conditions and substances as the cause of the mood episode",
            "keyIndicators": [
              "no medical review completed yet"
            ],
            "commonMistake": "Skipping the organic and medication rule-out"
          }
        },
        {
          "id": "b",
          "text": "A detailed account of every lesson plan and classroom strategy she used across her three decades of teaching",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Exhaustive career detail is low yield for the diagnosis",
          "explanation": {
            "approach": "Vocational cataloging",
            "rationale": "This history does not address organic mimics or diagnostic criteria",
            "keyIndicators": [
              "one relevant career transition"
            ],
            "commonMistake": "Collecting low-yield occupational detail"
          }
        },
        {
          "id": "c",
          "text": "A genogram mapping emotional patterns and relationship dynamics across at least three generations of her family",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Useful later in treatment, not the priority now",
          "explanation": {
            "approach": "Family-systems mapping",
            "rationale": "It does not address ruling out medical or substance causes",
            "keyIndicators": [
              "no urgent systemic data needed"
            ],
            "commonMistake": "Prioritizing depth history over safety and medical rule-outs"
          }
        },
        {
          "id": "d",
          "text": "A list of every hobby she has ever tried so the counselor can rule each one out as a possible coping strategy",
          "isCorrect": false,
          "weight": -1,
          "rationale": "An exhaustive hobby inventory is not the priority",
          "explanation": {
            "approach": "Coping inventory",
            "rationale": "It does not exclude medical or substance causes of the episode",
            "keyIndicators": [
              "treatment-planning data, not a rule-out"
            ],
            "commonMistake": "Confusing planning data with diagnostic rule-outs"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "Although Carol has not raised safety concerns, what should the counselor do during the intake regarding suicide risk?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Use a structured suicide-risk screen to formally document ideation, intent, plan, and any prior behavior",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Structured screening documents an unambiguous risk picture",
          "explanation": {
            "approach": "Screen systematically at intake",
            "rationale": "C-SSRS structures a consistent assessment of severity, intent, plan, and history",
            "keyIndicators": [
              "denies death or suicidal thoughts",
              "no prior attempts reported"
            ],
            "commonMistake": "Skipping a structured screen because she seems low risk"
          }
        },
        {
          "id": "b",
          "text": "Skip any direct questions about suicide since she has not brought up the topic on her own during the interview",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Omitting a screen leaves risk undocumented and unassessed",
          "explanation": {
            "approach": "Avoid the topic entirely",
            "rationale": "Standard practice screens every client regardless of spontaneous disclosure",
            "keyIndicators": [
              "no formal screen completed"
            ],
            "commonMistake": "Assuming silence means the topic is unnecessary"
          }
        },
        {
          "id": "c",
          "text": "Ask her to sign a written agreement promising she will not harm herself before the next scheduled appointment",
          "isCorrect": false,
          "weight": -2,
          "rationale": "No-suicide contracts are not an evidence-based substitute for screening",
          "explanation": {
            "approach": "No-harm contract",
            "rationale": "Contracts do not reduce risk and are not a replacement for structured assessment",
            "keyIndicators": [
              "needs a real screening tool, not a promise"
            ],
            "commonMistake": "Substituting a contract for an actual risk assessment"
          }
        },
        {
          "id": "d",
          "text": "Wait until a later session once more rapport has been built before asking her anything about safety at all",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Delaying a baseline safety screen is unnecessary and unsafe practice",
          "explanation": {
            "approach": "Defer to build rapport first",
            "rationale": "A baseline risk screen belongs in the intake regardless of rapport level",
            "keyIndicators": [
              "intake is the standard screening point"
            ],
            "commonMistake": "Postponing a routine safety screen"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "Which finding best distinguishes Carol’s presentation as major depression rather than an adjustment disorder tied to retirement?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "The presence of pervasive anhedonia together with neurovegetative signs that meet the full symptom count and duration",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Meeting full criteria exceeds an adjustment reaction",
          "explanation": {
            "approach": "Apply the full symptom count and duration",
            "rationale": "Adjustment disorder is diagnosed only when full MDD criteria are not met",
            "keyIndicators": [
              "anhedonia",
              "early awakening and weight loss"
            ],
            "commonMistake": "Labeling any stress-related reaction as adjustment disorder"
          }
        },
        {
          "id": "b",
          "text": "The fact that her low mood began only after a clearly identifiable life transition, namely leaving her teaching job",
          "isCorrect": false,
          "weight": -1,
          "rationale": "An identifiable trigger does not rule out major depression",
          "explanation": {
            "approach": "Trigger equals adjustment",
            "rationale": "A major depressive episode can also be precipitated by a life transition",
            "keyIndicators": [
              "retirement preceded symptom onset"
            ],
            "commonMistake": "Equating any precipitating event with adjustment disorder"
          }
        },
        {
          "id": "c",
          "text": "The observation that her distress seems somewhat greater than most people would feel after a planned retirement",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Proportionality alone is an adjustment-disorder feature, not an MDD marker",
          "explanation": {
            "approach": "Proportionality test",
            "rationale": "This observation points toward, not away from, an adjustment-disorder read",
            "keyIndicators": [
              "subjective distress level"
            ],
            "commonMistake": "Using disproportionate distress to confirm MDD instead of adjustment"
          }
        },
        {
          "id": "d",
          "text": "The likelihood that her symptoms will resolve on their own within about six months as she adapts to retired life",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Anticipated course does not define the current episode",
          "explanation": {
            "approach": "Prognosis framing",
            "rationale": "A self-limited expected course suggests adjustment rather than MDD",
            "keyIndicators": [
              "uncertain future course"
            ],
            "commonMistake": "Diagnosing based on a predicted future trajectory"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "Before finalizing a unipolar depression diagnosis, what must the counselor specifically rule out?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Any past episode of elevated or irritable mood with decreased need for sleep, marking a hypomanic or manic history",
          "isCorrect": true,
          "weight": 3,
          "rationale": "A past hypomanic or manic episode would reframe the diagnosis",
          "explanation": {
            "approach": "Screen for bipolarity",
            "rationale": "A history of mania or hypomania changes the diagnosis to a bipolar spectrum disorder",
            "keyIndicators": [
              "denies elevated mood",
              "denies decreased need for sleep"
            ],
            "commonMistake": "Skipping the bipolar screen before diagnosing unipolar depression"
          }
        },
        {
          "id": "b",
          "text": "Whether she has ever experienced a sudden panic attack with a racing heart while grocery shopping or driving",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Panic history is a different clinical rule-out",
          "explanation": {
            "approach": "Anxiety screening",
            "rationale": "Panic symptoms do not change whether the episode is unipolar or bipolar",
            "keyIndicators": [
              "no panic symptoms reported"
            ],
            "commonMistake": "Confusing a comorbidity screen with the differential at hand"
          }
        },
        {
          "id": "c",
          "text": "Whether her concentration problems are better explained by a long-standing attention difficulty dating to childhood",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A childhood attention history is a low-priority rule-out here",
          "explanation": {
            "approach": "Neurodevelopmental framing",
            "rationale": "Adult onset alongside other depressive symptoms points to a mood episode",
            "keyIndicators": [
              "adult-onset concentration change"
            ],
            "commonMistake": "Chasing an attention-deficit explanation before the mood history"
          }
        },
        {
          "id": "d",
          "text": "Whether her feelings of being a burden have reached a fixed, unshakeable, clearly delusional level of conviction",
          "isCorrect": false,
          "weight": 0,
          "rationale": "A psychosis screen matters but is a secondary consideration here",
          "explanation": {
            "approach": "Psychosis framing",
            "rationale": "Nothing in the presentation suggests fixed delusional beliefs",
            "keyIndicators": [
              "guilt and worthlessness without delusion"
            ],
            "commonMistake": "Over-reading ordinary depressive guilt as a psychotic symptom"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "What is the most appropriate first-line, within-scope treatment recommendation for Carol?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Offer evidence-based psychotherapy such as cognitive behavioral therapy or behavioral activation for depression",
          "isCorrect": true,
          "weight": 3,
          "rationale": "First-line psychotherapy fits both severity and scope",
          "explanation": {
            "approach": "Match the guideline recommendation to counselor scope",
            "rationale": "APA CPG lists CBT and behavioral activation as first-line for moderate depression",
            "keyIndicators": [
              "moderate severity",
              "within counselor scope of practice"
            ],
            "commonMistake": "Defaulting to a medication recommendation instead"
          }
        },
        {
          "id": "b",
          "text": "Recommend she begin taking a daily antidepressant right away and gradually increase the dose over several weeks",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Prescribing and titrating medication is outside counselor scope",
          "explanation": {
            "approach": "Prescribe medication directly",
            "rationale": "Counselors do not prescribe or adjust medication dosages",
            "keyIndicators": [
              "no prescriptive authority"
            ],
            "commonMistake": "Acting outside the counselor scope of practice"
          }
        },
        {
          "id": "c",
          "text": "Suggest she wait and simply monitor her own mood for a couple of months before starting any formal treatment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Watchful waiting under-treats a moderate depressive episode",
          "explanation": {
            "approach": "Watchful waiting",
            "rationale": "Moderate MDD with functional impairment warrants active treatment now",
            "keyIndicators": [
              "clear functional impairment already present"
            ],
            "commonMistake": "Delaying indicated care for an already-impairing episode"
          }
        },
        {
          "id": "d",
          "text": "Encourage her to focus mainly on daily exercise and a new sleep routine instead of starting formal therapy",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Lifestyle changes alone are an insufficient first-line plan",
          "explanation": {
            "approach": "Lifestyle substitution",
            "rationale": "Exercise and sleep hygiene are useful adjuncts, not a replacement for first-line therapy",
            "keyIndicators": [
              "moderate symptom severity"
            ],
            "commonMistake": "Offering adjunct strategies in place of the primary treatment"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "How should the counselor track whether Carol’s treatment is actually working over the coming months?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Re-administer a validated symptom measure such as the PHQ-9 at regular intervals to guide measurement-based care",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Repeated standardized measurement guides treatment decisions",
          "explanation": {
            "approach": "Use repeated standardized measures",
            "rationale": "VA/DoD CPG endorses measurement-based care using repeated PHQ-9 administration",
            "keyIndicators": [
              "need for an objective way to track change"
            ],
            "commonMistake": "Relying only on general clinical impressions over time"
          }
        },
        {
          "id": "b",
          "text": "Simply ask her at each session whether she feels things are generally going better than they were before",
          "isCorrect": false,
          "weight": -1,
          "rationale": "An unstructured global impression is an unreliable outcome measure",
          "explanation": {
            "approach": "Informal check-in only",
            "rationale": "This lacks a standardized benchmark for comparing progress over time",
            "keyIndicators": [
              "no objective anchor for change"
            ],
            "commonMistake": "Trusting an unstandardized verbal report alone"
          }
        },
        {
          "id": "c",
          "text": "Wait until the full agreed course of therapy has ended and then evaluate her overall response in one review",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A single end-of-treatment review misses early non-response",
          "explanation": {
            "approach": "Terminal evaluation only",
            "rationale": "Waiting until the end prevents timely adjustment of an underperforming plan",
            "keyIndicators": [
              "need for interim progress data"
            ],
            "commonMistake": "Skipping interim monitoring throughout treatment"
          }
        },
        {
          "id": "d",
          "text": "Track only whether she is consistently attending her scheduled sessions and completing weekly homework assignments",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Engagement is necessary but does not measure symptom change",
          "explanation": {
            "approach": "Adherence as a proxy for outcome",
            "rationale": "Attendance and homework completion do not directly measure depressive symptoms",
            "keyIndicators": [
              "process measure versus outcome measure"
            ],
            "commonMistake": "Mistaking session adherence for symptom improvement"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "Carol asks the counselor whether she should also be taking medication for her depression. What is the most appropriate action?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Provide general information and, with her consent, coordinate a referral to a prescriber for a full medication evaluation",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Coordinating a referral keeps the counselor within scope",
          "explanation": {
            "approach": "Coordinate care through referral",
            "rationale": "Counselors provide general information and refer rather than prescribe",
            "keyIndicators": [
              "client interest in medication",
              "consent to a referral"
            ],
            "commonMistake": "Giving specific medication or dosage advice directly"
          }
        },
        {
          "id": "b",
          "text": "Tell her exactly which antidepressant tends to work best for women with her particular pattern of symptoms",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Naming a specific medication exceeds counselor scope",
          "explanation": {
            "approach": "Give prescriptive advice directly",
            "rationale": "Selecting medications is a prescriber decision, not a counselor one",
            "keyIndicators": [
              "no prescriptive authority"
            ],
            "commonMistake": "Overstepping the professional scope of practice"
          }
        },
        {
          "id": "c",
          "text": "Advise her that medication is generally unnecessary as long as she stays fully committed to weekly therapy sessions",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Discouraging medication overreaches into a medical decision",
          "explanation": {
            "approach": "Discourage medication outright",
            "rationale": "Whether to pursue medication is a decision that belongs with a prescriber and the client",
            "keyIndicators": [
              "client autonomy over medical choices"
            ],
            "commonMistake": "Steering a decision that is outside counselor authority"
          }
        },
        {
          "id": "d",
          "text": "Suggest she research antidepressant options online herself and bring a preferred choice to a future appointment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Outsourcing the decision to self-research is poor coordination of care",
          "explanation": {
            "approach": "Defer to unguided self-research",
            "rationale": "This bypasses proper coordination with a qualified prescriber",
            "keyIndicators": [
              "needs a professional medication evaluation"
            ],
            "commonMistake": "Replacing a referral with unguided self-directed research"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "Which initial behavioral activation step best fits Carol’s presentation?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Collaboratively schedule a small, valued activity such as tending part of her garden for fifteen minutes to rebuild reward",
          "isCorrect": true,
          "weight": 3,
          "rationale": "A small, graded, valued activity rebuilds a sense of reward",
          "explanation": {
            "approach": "Schedule a graded, reinforcing activity",
            "rationale": "Behavioral activation pairs manageable activity with valued reinforcement",
            "keyIndicators": [
              "withdrew from gardening",
              "pervasive anhedonia"
            ],
            "commonMistake": "Waiting for motivation to return before scheduling any activity"
          }
        },
        {
          "id": "b",
          "text": "Direct her to resume every prior household and social responsibility immediately to prove she can still manage them",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Too much activity at once invites early failure",
          "explanation": {
            "approach": "All-at-once activation",
            "rationale": "Behavioral activation grades activity gradually rather than flooding her with tasks",
            "keyIndicators": [
              "currently low energy"
            ],
            "commonMistake": "Ignoring the need for gradual, paced activity"
          }
        },
        {
          "id": "c",
          "text": "Have her keep a detailed daily log of every negative automatic thought before introducing any change to her routine",
          "isCorrect": false,
          "weight": 0,
          "rationale": "A thought log is a cognitive technique, not the first behavioral activation step",
          "explanation": {
            "approach": "Cognitive logging first",
            "rationale": "Behavioral activation leads with scheduling activity, not thought monitoring",
            "keyIndicators": [
              "behavioral focus is the priority now"
            ],
            "commonMistake": "Confusing behavioral activation with cognitive restructuring work"
          }
        },
        {
          "id": "d",
          "text": "Encourage her to wait until she genuinely feels her interest and energy return before resuming any activities",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Waiting for motivation first reverses the logic of behavioral activation",
          "explanation": {
            "approach": "Mood-dependent action",
            "rationale": "Behavioral activation acts before motivation returns rather than after",
            "keyIndicators": [
              "anhedonia is maintaining her avoidance"
            ],
            "commonMistake": "Letting mood gate behavior instead of the reverse"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "Carol says she feels lazy and useless now that she no longer has a job to go to. How can the counselor best address this belief?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Offer psychoeducation framing depression as a common, treatable condition while validating how difficult this adjustment feels",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Psychoeducation paired with validation reframes self-blame",
          "explanation": {
            "approach": "Normalize the illness while validating her experience",
            "rationale": "Framing depression as a treatable condition counters the belief that she is simply lazy",
            "keyIndicators": [
              "worthlessness",
              "self-as-useless belief"
            ],
            "commonMistake": "Either lecturing about depression or only offering sympathy"
          }
        },
        {
          "id": "b",
          "text": "Firmly challenge the belief as irrational and present a detailed list of evidence showing she is objectively productive",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Immediate disputation can feel invalidating this early",
          "explanation": {
            "approach": "Confront the cognition head-on",
            "rationale": "Early direct disputation risks rupturing the alliance before trust is built",
            "keyIndicators": [
              "fragile self-view"
            ],
            "commonMistake": "Disputing a belief before first validating the feeling"
          }
        },
        {
          "id": "c",
          "text": "Agree that not having a job to structure her day is a real problem and focus the work on finding new part-time employment",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Endorsing the belief that she needs a job to have worth deepens the distortion",
          "explanation": {
            "approach": "Validate the distorted belief",
            "rationale": "Agreeing that her worth depends on employment reinforces the depressive cognition",
            "keyIndicators": [
              "cognitive distortion tied to identity"
            ],
            "commonMistake": "Colluding with a client’s hopeless or distorted belief"
          }
        },
        {
          "id": "d",
          "text": "Redirect the conversation away from the topic entirely and focus instead on practical scheduling for the coming week",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the topic leaves the underlying belief unaddressed",
          "explanation": {
            "approach": "Topic redirection",
            "rationale": "This bypasses a core cognitive target that is central to her depression",
            "keyIndicators": [
              "unaddressed distorted belief"
            ],
            "commonMistake": "Avoiding emotionally significant material instead of engaging it"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "Carol says she is not sure what her purpose is now that teaching, which defined her for decades, is over. What is the most therapeutic response?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Explore what she valued most about teaching and collaboratively identify a small activity that reflects that same value now",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Connecting to underlying values supports a renewed sense of purpose",
          "explanation": {
            "approach": "Explore values and translate them into present action",
            "rationale": "Identifying the values behind teaching helps rebuild meaning through new activity",
            "keyIndicators": [
              "thirty-two years defined by teaching",
              "loss of role"
            ],
            "commonMistake": "Treating the loss of a job title as unrelated to her depression"
          }
        },
        {
          "id": "b",
          "text": "Tell her firmly that she has plenty to be grateful for after a long and successful career and should not dwell on this",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Dismissing the loss of role invalidates her experience",
          "explanation": {
            "approach": "Minimize and redirect to gratitude",
            "rationale": "This overrides her stated feelings rather than exploring them",
            "keyIndicators": [
              "expressed sense of lost identity"
            ],
            "commonMistake": "Telling a client how she should feel about a real loss"
          }
        },
        {
          "id": "c",
          "text": "Agree that a career of that length is hard to replace and suggest she may never find a comparable sense of purpose again",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Confirming that purpose is unattainable deepens hopelessness",
          "explanation": {
            "approach": "Concede hopelessness about purpose",
            "rationale": "This reinforces despair rather than opening a path toward renewed meaning",
            "keyIndicators": [
              "therapeutic pessimism"
            ],
            "commonMistake": "Adopting the client’s hopeless framing instead of exploring alternatives"
          }
        },
        {
          "id": "d",
          "text": "Move the discussion along to a review of her sleep log for the week rather than staying with this identity question",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Shifting away from the topic leaves a central concern unaddressed",
          "explanation": {
            "approach": "Topic avoidance",
            "rationale": "This bypasses a theme that is closely tied to her depressive symptoms",
            "keyIndicators": [
              "unaddressed identity concern"
            ],
            "commonMistake": "Redirecting away from emotionally central material"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "When reviewing informed consent with Carol at the outset of treatment, what must the counselor be sure she understands?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "The limits of confidentiality, including the circumstances under which information may need to be disclosed to protect her",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Confidentiality limits must be disclosed as part of informed consent",
          "explanation": {
            "approach": "Clarify consent and its limits up front",
            "rationale": "ACA B.1. requires explaining the limits of confidentiality before treatment begins",
            "keyIndicators": [
              "new client",
              "start of treatment"
            ],
            "commonMistake": "Omitting the limits of confidentiality during intake"
          }
        },
        {
          "id": "b",
          "text": "That everything she chooses to share in session will remain completely confidential under every possible circumstance",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Promising absolute confidentiality is inaccurate and unethical",
          "explanation": {
            "approach": "Overpromise unconditional privacy",
            "rationale": "This misstates the legal and ethical limits that actually apply",
            "keyIndicators": [
              "safety-related exceptions exist"
            ],
            "commonMistake": "Guaranteeing secrecy without any exceptions"
          }
        },
        {
          "id": "c",
          "text": "That the counselor alone will decide which specific treatment goals are appropriate for her to pursue going forward",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Treatment goals should be set collaboratively, not imposed",
          "explanation": {
            "approach": "Clinician-imposed goals",
            "rationale": "Informed consent includes the client’s role in collaborative goal-setting",
            "keyIndicators": [
              "client autonomy in planning"
            ],
            "commonMistake": "Removing the client from the goal-setting process"
          }
        },
        {
          "id": "d",
          "text": "That once she agrees to begin, she is obligated to complete the entire recommended course of therapy without exception",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Clients retain the right to withdraw consent at any time",
          "explanation": {
            "approach": "Mandate completion of treatment",
            "rationale": "Consent is ongoing and can be revoked by the client at any point",
            "keyIndicators": [
              "right to discontinue treatment"
            ],
            "commonMistake": "Treating initial consent as an unbreakable commitment"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "Carol’s husband calls the office before the next session asking for an update on how she is doing in treatment. What is the appropriate response?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Explain that details of her treatment cannot be shared without her written consent, and offer to discuss involving him with her",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Protecting confidentiality while offering a consent-based path forward",
          "explanation": {
            "approach": "Protect confidentiality and offer a consent pathway",
            "rationale": "ACA B.1. requires protecting client information absent the client’s consent to disclose",
            "keyIndicators": [
              "third-party request",
              "no consent on file"
            ],
            "commonMistake": "Sharing treatment details with a family member without consent"
          }
        },
        {
          "id": "b",
          "text": "Give him a brief general summary of how her sessions have gone so far since he is her husband and clearly cares about her",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Disclosing treatment information without consent breaches confidentiality",
          "explanation": {
            "approach": "Disclose informally to a family member",
            "rationale": "Marital status alone does not authorize sharing protected treatment information",
            "keyIndicators": [
              "no signed release present"
            ],
            "commonMistake": "Assuming a spouse is automatically entitled to session details"
          }
        },
        {
          "id": "c",
          "text": "Tell him she is doing fine and that he has nothing at all to worry about regarding her mood or her progress",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Offering reassurance about her status still discloses treatment information improperly",
          "explanation": {
            "approach": "Reassure without consent",
            "rationale": "Even a brief status statement discloses protected information without authorization",
            "keyIndicators": [
              "unauthorized disclosure risk"
            ],
            "commonMistake": "Treating a vague reassurance as harmless disclosure"
          }
        },
        {
          "id": "d",
          "text": "Avoid returning his call at all so that the question of confidentiality never has to come up directly with him",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding contact is unprofessional and does not address the request appropriately",
          "explanation": {
            "approach": "Avoid the interaction entirely",
            "rationale": "A professional, boundaried response is preferable to simply not responding",
            "keyIndicators": [
              "requires a clear professional reply"
            ],
            "commonMistake": "Ignoring a legitimate contact instead of setting a boundary"
          }
        }
      ]
    }
  ]
};

const D200 = {
  "id": "ncmhce-D200",
  "title": "Twenty years of feeling \"flat\" in a small hardware-store town",
  "category": "Depressive",
  "difficulty": "easy",
  "primaryDiagnosis": {
    "name": "Persistent Depressive Disorder",
    "code": "F34.1"
  },
  "diagnosis": {
    "name": "Persistent Depressive Disorder",
    "code": "F34.1"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Persistent Depressive Disorder",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Major Depressive Disorder, Recurrent, Moderate",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Adjustment Disorder, with Depressed Mood",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Cyclothymic Disorder",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Walt Higby, a 41-year-old man who has worked at Pruitt's Hardware and Supply in his small rural town for eighteen years, presents reporting that he has felt \"down\" or \"flat\" for as long as he can remember, dating back to his early twenties, with no stretch of feeling fully like himself lasting more than about six weeks.",
    "session1": "He describes chronically low energy, a poor appetite most days, trouble falling asleep, and a nagging sense that he is not good enough, though he still opens the store most mornings and rarely misses a shift. Friends have called him the \"quiet, steady one\" for two decades, and he assumed this flatness was simply his personality.",
    "session2": "He denies any lifetime period of elevated or irritable mood, decreased need for sleep, or reckless spending, and he denies any current thoughts of suicide, a plan, or intent, saying he has \"never gotten that low.\" His wife recently urged him to seek help after noticing him withdraw further from their weekend routines."
  },
  "diagnosticRationale": "Depressed mood present most of the day, more days than not, for at least two years, accompanied by two or more of low energy, poor appetite, sleep disturbance, and low self-esteem, with no symptom-free interval longer than two months, meets DSM-5-TR criteria for Persistent Depressive Disorder. The continuous, non-remitting course rules out Adjustment Disorder, the absence of any lifetime manic or hypomanic episode rules out Cyclothymic Disorder, and the low-grade, below-full-episode-threshold pattern distinguishes it from Recurrent Major Depressive Disorder.",
  "references": [
    {
      "id": "R1",
      "source": "DSM-5-TR",
      "detail": "PDD Criteria A-C: depressed mood most of day, more days than not, 2+ years, with 2+ associated symptoms and no symptom-free gap over 2 months"
    },
    {
      "id": "R2",
      "source": "DSM-5-TR",
      "detail": "PDD Criteria E-F exclusions: no lifetime manic/hypomanic episode, not cyclothymic, not better explained by psychotic, substance, or medical cause"
    },
    {
      "id": "R3",
      "source": "APA CPG",
      "detail": "Depression guideline: CBT, behavioral activation, and IPT as first-line psychotherapies for persistent depressive presentations"
    },
    {
      "id": "R4",
      "source": "VA/DoD CPG",
      "detail": "Depression measurement-based stepped care using repeated validated symptom measures such as the PHQ-9"
    },
    {
      "id": "R5",
      "source": "C-SSRS",
      "detail": "Structured screening of ideation severity, intent, plan, and behavior, applied even when denial is unremarkable"
    },
    {
      "id": "R6",
      "source": "ACA Code of Ethics",
      "detail": "A.1. client welfare and appropriate referral, B.1. confidentiality limits, and A.6. managing unavoidable boundary extensions in small/rural communities"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "What intake detail is most essential to document to support the working diagnosis of Persistent Depressive Disorder?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "That his low mood has been present most of the day, more days than not, for at least two years, without a symptom-free stretch longer than two months",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Chronic duration is the defining PDD criterion",
          "explanation": {
            "approach": "Anchor the chronicity criterion",
            "rationale": "DSM-5-TR requires a 2-year chronic course with no gap over two months",
            "keyIndicators": [
              "symptoms since his early twenties",
              "no remission longer than six weeks"
            ],
            "commonMistake": "Treating chronic low mood as simply a personality trait"
          }
        },
        {
          "id": "b",
          "text": "That he can name the exact week his low mood first began after finishing high school",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A precise onset date does not establish chronicity",
          "explanation": {
            "approach": "Pinpoint an exact onset",
            "rationale": "The diagnosis rests on duration and course, not a precise start date",
            "keyIndicators": [
              "vague recalled onset"
            ],
            "commonMistake": "Requiring an exact onset before assessing duration"
          }
        },
        {
          "id": "c",
          "text": "That a first-degree relative, such as a parent or sibling, was also treated at some point in the past for a chronic low-mood condition resembling his own",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Family history supports but does not confirm the diagnosis",
          "explanation": {
            "approach": "Over-weighting heredity",
            "rationale": "Family history informs risk but is not a diagnostic criterion",
            "keyIndicators": [
              "no family history collected yet"
            ],
            "commonMistake": "Requiring family history to confirm a chronic mood disorder"
          }
        },
        {
          "id": "d",
          "text": "That his mood tends to feel somewhat heavier on workdays at the store than it does on the weekends when he is off",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Day-to-day variation is not the diagnostic anchor",
          "explanation": {
            "approach": "Track situational variation",
            "rationale": "Minor situational shifts do not establish or rule out the chronic course required for the diagnosis",
            "keyIndicators": [
              "mild day-to-day fluctuation"
            ],
            "commonMistake": "Focusing on situational triggers instead of overall course"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "What additional history is most important to gather before finalizing the diagnosis?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "A review of his medications, substance use, and any thyroid or other medical conditions that could mimic chronic low mood",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Medical and substance causes must be excluded",
          "explanation": {
            "approach": "Screen organic contributors",
            "rationale": "DSM-5-TR requires ruling out substance or medical causes before diagnosing PDD",
            "keyIndicators": [
              "no medical review completed yet"
            ],
            "commonMistake": "Skipping the organic rule-out for a chronic presentation"
          }
        },
        {
          "id": "b",
          "text": "A full inventory of every hobby he has ever tried so the counselor understands his complete leisure history",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Exhaustive hobby history is low yield here",
          "explanation": {
            "approach": "Leisure cataloging",
            "rationale": "It does not address a needed diagnostic rule-out",
            "keyIndicators": [
              "low-yield detail"
            ],
            "commonMistake": "Collecting detail unrelated to the differential"
          }
        },
        {
          "id": "c",
          "text": "A detailed account of his coworkers' opinions about his mood and work performance over the years",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Third-party opinion is not a diagnostic priority",
          "explanation": {
            "approach": "Collateral opinion gathering",
            "rationale": "It does not exclude medical or substance causes",
            "keyIndicators": [
              "indirect, secondhand information"
            ],
            "commonMistake": "Prioritizing collateral impressions over rule-outs"
          }
        },
        {
          "id": "d",
          "text": "A complete list of every store inventory task he currently manages so his daily workload can be mapped",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Workload mapping does not inform the diagnosis",
          "explanation": {
            "approach": "Occupational task inventory",
            "rationale": "This is unrelated to differential diagnosis or safety",
            "keyIndicators": [
              "irrelevant to clinical picture"
            ],
            "commonMistake": "Gathering administrative detail instead of clinical history"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "Which line of questioning is most important to rule out a bipolar-spectrum course before confirming Persistent Depressive Disorder?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Asking whether he has ever had a period of elevated or irritable mood with decreased need for sleep or increased energy",
          "isCorrect": true,
          "weight": 3,
          "rationale": "A lifetime manic/hypomanic history changes the diagnosis",
          "explanation": {
            "approach": "Screen for any hypomanic or manic history",
            "rationale": "DSM-5-TR excludes PDD if a manic or hypomanic episode has ever occurred",
            "keyIndicators": [
              "denies elevated mood",
              "denies decreased need for sleep"
            ],
            "commonMistake": "Skipping the lifetime bipolar screen"
          }
        },
        {
          "id": "b",
          "text": "Asking whether he has ever experienced a panic attack with a racing heart in the store's crowded checkout line",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Panic history is a different rule-out",
          "explanation": {
            "approach": "Screen for panic symptoms",
            "rationale": "Panic does not change the unipolar-versus-bipolar differential",
            "keyIndicators": [
              "no panic symptoms reported"
            ],
            "commonMistake": "Confusing an anxiety screen with the mood differential"
          }
        },
        {
          "id": "c",
          "text": "Asking whether his concentration problems have been present since childhood in a pattern consistent with attention-deficit disorder",
          "isCorrect": false,
          "weight": -1,
          "rationale": "ADHD screening is a lower priority here",
          "explanation": {
            "approach": "Neurodevelopmental screening",
            "rationale": "Adult-onset chronic mood symptoms point to a mood disorder first",
            "keyIndicators": [
              "symptom onset in early adulthood"
            ],
            "commonMistake": "Chasing a neurodevelopmental explanation before the mood history"
          }
        },
        {
          "id": "d",
          "text": "Asking whether he has ever held beliefs about himself that reached a fixed, delusional level of conviction",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Psychosis screening matters but is secondary here",
          "explanation": {
            "approach": "Psychotic-features screening",
            "rationale": "No psychotic features are described in his presentation",
            "keyIndicators": [
              "low self-esteem without delusional content"
            ],
            "commonMistake": "Over-reading ordinary low self-esteem as psychosis"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "Which combination of findings best satisfies the associated-symptom criterion required alongside his chronic low mood?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "His chronically low energy, poor appetite, and sleep-onset difficulty occurring alongside the low mood most days",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Two or more associated symptoms meet Criterion B",
          "explanation": {
            "approach": "Match symptoms to the associated-symptom list",
            "rationale": "DSM-5-TR requires 2+ of six associated symptoms while depressed",
            "keyIndicators": [
              "low energy",
              "poor appetite",
              "trouble falling asleep"
            ],
            "commonMistake": "Overlooking that low mood alone is not sufficient"
          }
        },
        {
          "id": "b",
          "text": "His steady attendance record and his reputation among coworkers as dependable and even-tempered",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Reliable functioning is not an associated depressive symptom",
          "explanation": {
            "approach": "Treat coping capacity as pathology",
            "rationale": "Functioning well despite symptoms is not itself diagnostic evidence",
            "keyIndicators": [
              "preserved occupational functioning"
            ],
            "commonMistake": "Confusing resilience with diagnostic criteria"
          }
        },
        {
          "id": "c",
          "text": "His preference for quiet evenings at home rather than socializing at the town's weekend events",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A quiet preference alone is not a listed criterion symptom",
          "explanation": {
            "approach": "Treat introversion as pathology",
            "rationale": "Social preference is not one of the six associated symptoms",
            "keyIndicators": [
              "longstanding personal preference"
            ],
            "commonMistake": "Pathologizing temperament rather than symptoms"
          }
        },
        {
          "id": "d",
          "text": "His tendency to double-check the store's cash drawer twice before closing each night",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A checking habit is not part of the symptom list",
          "explanation": {
            "approach": "Treat a work habit as a mood symptom",
            "rationale": "This behavior does not map onto the associated-symptom criteria",
            "keyIndicators": [
              "routine, non-distressing checking"
            ],
            "commonMistake": "Mistaking an unrelated habit for a diagnostic symptom"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "Given his denial of any current suicidal thoughts, what is the most appropriate assessment step?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Use a structured suicide-risk screen to confirm and document the absence of ideation, intent, plan, or prior behavior",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Structured screening confirms and documents low risk",
          "explanation": {
            "approach": "Apply a structured risk screen regardless of denial",
            "rationale": "C-SSRS structures severity, intent, and plan even with unremarkable denial",
            "keyIndicators": [
              "denies current ideation",
              "no prior attempts reported"
            ],
            "commonMistake": "Skipping a structured screen because risk seems low"
          }
        },
        {
          "id": "b",
          "text": "Skip any risk questions entirely since he denies current thoughts and appears calm during the session",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Skipping the screen leaves risk undocumented",
          "explanation": {
            "approach": "Forgo assessment based on presentation",
            "rationale": "A denial of ideation still warrants a brief structured check",
            "keyIndicators": [
              "unassessed baseline risk"
            ],
            "commonMistake": "Assuming calm demeanor rules out the need to screen"
          }
        },
        {
          "id": "c",
          "text": "Ask him to sign a written agreement promising not to harm himself before the next scheduled appointment",
          "isCorrect": false,
          "weight": -2,
          "rationale": "No-suicide contracts are not evidence-based practice",
          "explanation": {
            "approach": "Use an outdated no-harm contract",
            "rationale": "Contracts do not reduce risk and are not a substitute for assessment",
            "keyIndicators": [
              "needs structured screening, not a pledge"
            ],
            "commonMistake": "Substituting a written promise for real assessment"
          }
        },
        {
          "id": "d",
          "text": "Wait until several sessions of rapport-building have passed before ever raising the topic of safety",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Delaying a baseline safety check is unnecessary and unsafe practice",
          "explanation": {
            "approach": "Defer safety screening for rapport",
            "rationale": "A brief structured screen belongs in the initial assessment",
            "keyIndicators": [
              "standard intake practice"
            ],
            "commonMistake": "Postponing a routine safety baseline"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "What is the most appropriate first-line, within-scope treatment recommendation for his chronic presentation?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Offer evidence-based psychotherapy such as cognitive behavioral therapy or behavioral activation adapted for chronic depression",
          "isCorrect": true,
          "weight": 3,
          "rationale": "First-line psychotherapy fits both the evidence base and scope",
          "explanation": {
            "approach": "Match guideline-recommended therapy to the chronic course",
            "rationale": "APA CPG lists CBT and behavioral activation as first-line for persistent depression",
            "keyIndicators": [
              "chronic low-grade course",
              "counselor scope of practice"
            ],
            "commonMistake": "Defaulting to a medication recommendation"
          }
        },
        {
          "id": "b",
          "text": "Tell him to begin a daily antidepressant right away and adjust the dose himself based on how he feels each week",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Prescribing and dose adjustment are outside counselor scope",
          "explanation": {
            "approach": "Direct medication use",
            "rationale": "Counselors do not prescribe or manage medication dosing",
            "keyIndicators": [
              "no prescriptive authority"
            ],
            "commonMistake": "Acting outside the scope of counseling practice"
          }
        },
        {
          "id": "c",
          "text": "Suggest he simply wait another year or two to see whether the flat mood eventually lifts on its own",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Watchful waiting is inappropriate for a chronic, treatable condition",
          "explanation": {
            "approach": "Watchful waiting",
            "rationale": "A two-decade chronic course warrants active, evidence-based treatment",
            "keyIndicators": [
              "long-standing untreated course"
            ],
            "commonMistake": "Delaying indicated psychotherapy"
          }
        },
        {
          "id": "d",
          "text": "Recommend he focus mainly on a stricter sleep schedule and daily exercise instead of starting formal counseling",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Lifestyle changes alone are not a sufficient first-line plan",
          "explanation": {
            "approach": "Lifestyle substitution",
            "rationale": "Adjuncts support but do not replace first-line psychotherapy",
            "keyIndicators": [
              "chronic symptom burden"
            ],
            "commonMistake": "Offering adjunct steps as the entire treatment plan"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "How should the counselor track whether treatment is producing meaningful change over the coming months?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Re-administer a validated symptom measure such as the PHQ-9 at regular intervals to guide measurement-based care",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Repeated standardized measures guide treatment decisions",
          "explanation": {
            "approach": "Use measurement-based care",
            "rationale": "VA/DoD CPG endorses repeated validated measures to track depression treatment",
            "keyIndicators": [
              "chronic course needs objective tracking"
            ],
            "commonMistake": "Relying only on subjective impressions of progress"
          }
        },
        {
          "id": "b",
          "text": "Simply ask him at each visit whether he generally feels a little better than he did the week before",
          "isCorrect": false,
          "weight": -1,
          "rationale": "An informal check-in lacks a standardized benchmark",
          "explanation": {
            "approach": "Informal verbal check-in",
            "rationale": "This lacks the consistency of a validated repeated measure",
            "keyIndicators": [
              "no objective anchor point"
            ],
            "commonMistake": "Trusting unstandardized self-report alone"
          }
        },
        {
          "id": "c",
          "text": "Wait until an entire year of sessions has passed and then evaluate his overall response in one single review",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A single end-point review misses early lack of progress",
          "explanation": {
            "approach": "Terminal, single-point evaluation",
            "rationale": "It prevents timely adjustment of the treatment plan",
            "keyIndicators": [
              "need for interim data"
            ],
            "commonMistake": "Skipping interim outcome monitoring"
          }
        },
        {
          "id": "d",
          "text": "Track only whether he keeps showing up to sessions on time and completes the homework assigned each week",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Attendance and adherence are necessary but not sufficient",
          "explanation": {
            "approach": "Adherence proxy for outcome",
            "rationale": "Attendance does not directly measure symptom change",
            "keyIndicators": [
              "process measure, not outcome measure"
            ],
            "commonMistake": "Mistaking engagement for symptom improvement"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "Walt asks whether he should also be evaluated for medication. What is the most appropriate counselor action?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Provide general information and, with his consent, coordinate a referral to a prescriber for a medication evaluation",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Referral and coordination stay within counselor scope",
          "explanation": {
            "approach": "Coordinate care through referral",
            "rationale": "ACA A.1. supports referring for services outside the counselor's scope",
            "keyIndicators": [
              "client interest in medication",
              "consent to refer"
            ],
            "commonMistake": "Offering specific medication advice directly"
          }
        },
        {
          "id": "b",
          "text": "Tell him exactly which antidepressant tends to work best for people with a chronic, low-grade symptom pattern like his",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Naming a specific medication exceeds counselor scope",
          "explanation": {
            "approach": "Offer prescriptive advice",
            "rationale": "Counselors do not select or recommend specific medications",
            "keyIndicators": [
              "no prescriptive authority"
            ],
            "commonMistake": "Overstepping into medical decision-making"
          }
        },
        {
          "id": "c",
          "text": "Advise him that medication is generally unnecessary as long as he keeps attending his counseling sessions",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Discouraging a medical evaluation overreaches the counselor's role",
          "explanation": {
            "approach": "Discourage a medical evaluation",
            "rationale": "That decision belongs with the client and a prescriber",
            "keyIndicators": [
              "client autonomy regarding medical care"
            ],
            "commonMistake": "Steering a medical decision away from a prescriber"
          }
        },
        {
          "id": "d",
          "text": "Suggest he research antidepressants online himself and bring back his preferred choice at a later appointment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Outsourcing to self-research replaces proper coordination of care",
          "explanation": {
            "approach": "Defer entirely to client self-research",
            "rationale": "This abandons the counselor's role in coordinating a referral",
            "keyIndicators": [
              "needs a qualified prescriber evaluation"
            ],
            "commonMistake": "Replacing referral with unsupervised self-research"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "Which initial treatment-planning goal best fits Walt's chronic, low-grade presentation?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Collaboratively schedule one or two small, valued activities each week, such as a fishing trip he used to enjoy",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Graded valued activity is an appropriate first behavioral activation step",
          "explanation": {
            "approach": "Set a graded behavioral activation goal",
            "rationale": "Behavioral activation pairs small activities with valued reinforcement",
            "keyIndicators": [
              "reduced engagement in prior interests",
              "chronic low energy"
            ],
            "commonMistake": "Waiting for motivation to return before scheduling activity"
          }
        },
        {
          "id": "b",
          "text": "Set a goal for him to resume every hobby and social role he has ever held, all within the first two weeks of treatment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Too much change too quickly invites early failure",
          "explanation": {
            "approach": "All-at-once activation",
            "rationale": "Behavioral activation grades activity rather than flooding the schedule",
            "keyIndicators": [
              "chronically low energy"
            ],
            "commonMistake": "Ignoring the need for graded pacing"
          }
        },
        {
          "id": "c",
          "text": "Have him complete a detailed daily log of every automatic negative thought before any other treatment goal is set",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Thought logging is useful but is not the first behavioral step here",
          "explanation": {
            "approach": "Lead with cognitive logging",
            "rationale": "An initial behavioral activation goal fits his presentation first",
            "keyIndicators": [
              "behavioral withdrawal is prominent"
            ],
            "commonMistake": "Confusing cognitive work with the initial behavioral step"
          }
        },
        {
          "id": "d",
          "text": "Encourage him to wait to re-engage in any valued activities until his energy and motivation naturally return on their own",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Waiting for motivation reverses behavioral activation logic",
          "explanation": {
            "approach": "Mood-dependent action",
            "rationale": "Behavioral activation acts before motivation returns, not after",
            "keyIndicators": [
              "longstanding avoidance pattern"
            ],
            "commonMistake": "Letting mood gate all behavioral change"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "How can the counselor best respond to Walt's belief that his flat mood is simply his personality rather than something treatable?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Offer psychoeducation that chronic low mood is a treatable condition, while validating how normal it felt to him for years",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Psychoeducation reframes an ego-syntonic belief without dismissing his experience",
          "explanation": {
            "approach": "Normalize the experience while introducing treatability",
            "rationale": "Framing chronic low mood as a condition, not identity, opens engagement",
            "keyIndicators": [
              "describes flatness as \"just his personality\""
            ],
            "commonMistake": "Either lecturing him or only agreeing that it is just who he is"
          }
        },
        {
          "id": "b",
          "text": "Firmly tell him his belief is wrong and present a list of facts proving that his personality is not actually flat",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Blunt correction risks feeling invalidating this early",
          "explanation": {
            "approach": "Directly confront the belief",
            "rationale": "Early confrontation can rupture the emerging alliance",
            "keyIndicators": [
              "long-held, ego-syntonic belief"
            ],
            "commonMistake": "Disputing before validating the client's experience"
          }
        },
        {
          "id": "c",
          "text": "Agree that this is simply how he has always been and focus sessions only on coping strategies rather than change",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Agreeing that it is unchangeable forecloses treatment",
          "explanation": {
            "approach": "Endorse the ego-syntonic framing",
            "rationale": "This reinforces the belief that the condition is untreatable",
            "keyIndicators": [
              "treatable chronic condition being misread as trait"
            ],
            "commonMistake": "Colluding with the client's mistaken belief"
          }
        },
        {
          "id": "d",
          "text": "Change the subject and move the conversation toward scheduling next week's appointment time instead",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the belief leaves a central misconception unaddressed",
          "explanation": {
            "approach": "Redirect away from the topic",
            "rationale": "This bypasses an important treatment target",
            "keyIndicators": [
              "unaddressed core belief"
            ],
            "commonMistake": "Avoiding material central to engagement in treatment"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "Walt says he doubts anything can really change after twenty years of feeling this way. What is the most therapeutic response?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Acknowledge his doubt as understandable and collaboratively set one small, achievable goal to test it against",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Naming the doubt and testing it behaviorally builds realistic hope",
          "explanation": {
            "approach": "Instill hope through a small collaborative test",
            "rationale": "A small early success can counter longstanding skepticism",
            "keyIndicators": [
              "expressed doubt about change",
              "long untreated course"
            ],
            "commonMistake": "Trying to argue him out of his doubt"
          }
        },
        {
          "id": "b",
          "text": "Promise him confidently that his mood is guaranteed to improve within a set number of weeks of treatment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Guaranteeing an outcome risks credibility if progress is gradual",
          "explanation": {
            "approach": "Guarantee a specific outcome",
            "rationale": "Unrealistic promises can undermine trust if not met on schedule",
            "keyIndicators": [
              "skeptical, long-standing client"
            ],
            "commonMistake": "Making promises that cannot reliably be kept"
          }
        },
        {
          "id": "c",
          "text": "Agree that twenty years is likely too long for real change and shift the focus to simply accepting the mood",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Agreeing with hopelessness abandons a treatable target",
          "explanation": {
            "approach": "Concede to therapeutic pessimism",
            "rationale": "This adopts the client's hopeless stance rather than addressing it",
            "keyIndicators": [
              "treatable chronic condition"
            ],
            "commonMistake": "Matching the client's hopelessness instead of gently challenging it"
          }
        },
        {
          "id": "d",
          "text": "Spend the session explaining the neurobiology of chronic depression in detail to convince him change is possible",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A lecture rarely shifts longstanding skepticism by itself",
          "explanation": {
            "approach": "Rely on didactic persuasion",
            "rationale": "Experiential success tends to work better than facts alone",
            "keyIndicators": [
              "skepticism rooted in lived experience"
            ],
            "commonMistake": "Substituting information for a concrete experience of change"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "When reviewing informed consent at the outset of treatment, what must the counselor be sure Walt understands?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "The limits of confidentiality, including the circumstances under which information must be disclosed to others",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Confidentiality limits must be disclosed as part of informed consent",
          "explanation": {
            "approach": "Clarify consent and its limits",
            "rationale": "ACA B.1. requires explaining the limits of confidentiality up front",
            "keyIndicators": [
              "new client to counseling",
              "beginning treatment"
            ],
            "commonMistake": "Omitting the limits of confidentiality during consent"
          }
        },
        {
          "id": "b",
          "text": "That everything he says in session will remain completely confidential under every possible circumstance",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Promising absolute confidentiality misstates the actual limits",
          "explanation": {
            "approach": "Overstate the promise of privacy",
            "rationale": "This misrepresents the legal and ethical limits of confidentiality",
            "keyIndicators": [
              "exceptions to confidentiality always exist"
            ],
            "commonMistake": "Guaranteeing unconditional secrecy to the client"
          }
        },
        {
          "id": "c",
          "text": "That the counselor alone will decide which treatment goals he is allowed to pursue during their work together",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Treatment goals are set collaboratively, not unilaterally",
          "explanation": {
            "approach": "Present goals as clinician-imposed",
            "rationale": "Informed consent includes the client's role in collaborative goal-setting",
            "keyIndicators": [
              "client autonomy in treatment planning"
            ],
            "commonMistake": "Removing the client's voice from goal-setting"
          }
        },
        {
          "id": "d",
          "text": "That once he agrees to begin, he is obligated to complete the full recommended course of treatment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Consent to treatment remains ongoing and revocable",
          "explanation": {
            "approach": "Frame consent as binding and irreversible",
            "rationale": "Clients retain the right to withdraw consent at any time",
            "keyIndicators": [
              "right to discontinue treatment"
            ],
            "commonMistake": "Treating initial consent as a permanent commitment"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "The counselor realizes Walt is a regular customer-facing employee at the only hardware store in their shared small town. What is the most appropriate way to manage this?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Discuss the likelihood of unavoidable public encounters with him in advance and agree on how to handle them respectfully",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Proactively addressing unavoidable overlap protects the client and the relationship",
          "explanation": {
            "approach": "Plan ahead for unavoidable boundary crossings",
            "rationale": "ACA A.6. addresses managing unavoidable interactions common in small/rural communities",
            "keyIndicators": [
              "small town",
              "shared public spaces"
            ],
            "commonMistake": "Ignoring foreseeable overlap until it happens unexpectedly"
          }
        },
        {
          "id": "b",
          "text": "Decline to continue working with him and refer him elsewhere simply because he works at a public-facing local business",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Automatic termination is unnecessary and may not be feasible in a rural area",
          "explanation": {
            "approach": "Reflexively terminate the relationship",
            "rationale": "Rural practice often requires managing overlap rather than avoiding all contact",
            "keyIndicators": [
              "limited local provider access"
            ],
            "commonMistake": "Refusing rural clients over any foreseeable public overlap"
          }
        },
        {
          "id": "c",
          "text": "Say nothing about it and simply hope that the two of them never happen to cross paths anywhere in town",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Avoiding the topic leaves the client unprepared for a foreseeable situation",
          "explanation": {
            "approach": "Avoid planning altogether",
            "rationale": "Unaddressed overlap can create confusion or a breach of privacy in public",
            "keyIndicators": [
              "foreseeable small-town encounter"
            ],
            "commonMistake": "Failing to plan for a predictable boundary issue"
          }
        },
        {
          "id": "d",
          "text": "Ask him to stop working his usual shifts at the store so that the two of them are less likely to ever encounter each other",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Asking the client to change his livelihood is an inappropriate boundary solution",
          "explanation": {
            "approach": "Shift the burden onto the client's employment",
            "rationale": "This oversteps the counselor's role and harms the client's welfare",
            "keyIndicators": [
              "client's job is his livelihood"
            ],
            "commonMistake": "Placing the burden of boundary management on the client's job"
          }
        }
      ]
    }
  ]
};

const D201 = {
  "id": "ncmhce-D201",
  "title": "Tearful and doubting her competence six weeks after childbirth",
  "category": "Depressive",
  "difficulty": "easy",
  "primaryDiagnosis": {
    "name": "Major Depressive Disorder, with Peripartum Onset",
    "code": "F53.0"
  },
  "diagnosis": {
    "name": "Major Depressive Disorder, with Peripartum Onset",
    "code": "F53.0"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Major Depressive Disorder, with Peripartum Onset",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Postpartum Blues (Baby Blues)",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Postpartum Psychosis",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Adjustment Disorder, with Depressed Mood",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Danielle Marsh, a 27-year-old woman who is 6 weeks postpartum with her first child, joins for an intake session by telehealth from her living room while her daughter naps nearby. She reports that low mood, tearfulness, and exhaustion began about ten days after delivery and have steadily worsened, leaving her convinced she is failing as a new mother.",
    "session1": "She describes crying multiple times most days, little interest in things she used to enjoy such as cooking or calling friends, waking well before the baby stirs and being unable to fall back asleep, a poor appetite, and trouble concentrating even on simple tasks like reading a bottle label. She denies any past period of elevated mood, decreased need for sleep, or unusually high energy.",
    "session2": "When asked directly, she denies any thoughts of harming her daughter or herself, any plan or intent, and any voices, visions, or beliefs that feel unreal; she says she feels warmly bonded to her daughter and is frightened by how incapable she feels, wanting help to feel like herself again."
  },
  "diagnosticRationale": "Danielle meets DSM-5-TR criteria for a major depressive episode—depressed mood, anhedonia, insomnia, appetite loss, poor concentration, and pervasive guilt about her mothering—present nearly daily for more than two weeks with clear functional impairment, and her symptoms began within four weeks of delivery, meeting the peripartum onset specifier. This is distinguished from postpartum blues, which is milder and resolves within two weeks; from adjustment disorder, which would not meet the full symptom count; and from postpartum psychosis, which requires hallucinations, delusions, or grossly disorganized behavior that are explicitly absent here.",
  "references": [
    {
      "id": "R1",
      "source": "DSM-5-TR",
      "detail": "MDD Criterion A (5+ symptoms, 2-week duration) with peripartum onset specifier: onset during pregnancy or within 4 weeks postpartum"
    },
    {
      "id": "R2",
      "source": "APA CPG",
      "detail": "Perinatal depression guideline: CBT and IPT as first-line psychotherapy for postpartum depression"
    },
    {
      "id": "R3",
      "source": "C-SSRS",
      "detail": "Structured risk interview adapted to screen ideation severity, intent, and any thoughts of harm to self or infant"
    },
    {
      "id": "R4",
      "source": "Hays (Assessment)",
      "detail": "Standardized perinatal screening measures (e.g., Edinburgh Postnatal Depression Scale) for intake and monitoring"
    },
    {
      "id": "R5",
      "source": "ACA Code of Ethics",
      "detail": "A.1., A.4., B.1.: client welfare, avoiding harm, and limits of confidentiality in informed consent"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "What should the counselor confirm first at intake to anchor the diagnosis of a major depressive episode with peripartum onset?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "That her depressive symptoms began within four weeks of delivery and have persisted nearly daily for over two weeks with impairment",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Onset window plus duration and impairment anchor the episode",
          "explanation": {
            "approach": "Confirm the diagnostic threshold and specifier",
            "rationale": "DSM-5-TR requires a 2-week span with impairment and onset within 4 weeks postpartum for the specifier",
            "keyIndicators": [
              "symptoms began ten days after delivery",
              "now six weeks postpartum and worsening"
            ],
            "commonMistake": "Diagnosing from a single tearful moment without confirming duration"
          }
        },
        {
          "id": "b",
          "text": "That she can identify a single specific event during the pregnancy or delivery that she believes triggered all of her symptoms",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A specific trigger does not establish the diagnosis",
          "explanation": {
            "approach": "Stressor hunting",
            "rationale": "Etiology is not a Criterion A requirement for MDD",
            "keyIndicators": [
              "no single triggering event described"
            ],
            "commonMistake": "Treating an identifiable trigger as the diagnostic test"
          }
        },
        {
          "id": "c",
          "text": "That a family member has previously been diagnosed with a mood disorder at some earlier point in their own life",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Family history supports but does not confirm the diagnosis",
          "explanation": {
            "approach": "Over-weighting heredity",
            "rationale": "Family history informs risk, not the current diagnostic criteria",
            "keyIndicators": [
              "no family history data yet gathered"
            ],
            "commonMistake": "Requiring family history before confirming a current episode"
          }
        },
        {
          "id": "d",
          "text": "That her symptoms are noticeably worse this week than when she first noticed them roughly ten days after delivery",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Worsening trajectory is not required for the diagnosis",
          "explanation": {
            "approach": "Trajectory framing",
            "rationale": "Severity trend is not a Criterion A element",
            "keyIndicators": [
              "steady, persistent symptoms described"
            ],
            "commonMistake": "Demanding a worsening course before diagnosing"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "What additional history is most important to gather to avoid misattributing Danielle's presentation to another cause?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "A review of her thyroid function, medications, and substance use, since postpartum medical factors can mimic depression",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Rule out medical and substance contributors first",
          "explanation": {
            "approach": "Screen organic and postpartum-specific contributors",
            "rationale": "DSM-5-TR requires excluding medical and substance causes before diagnosing MDD",
            "keyIndicators": [
              "no medical review yet completed"
            ],
            "commonMistake": "Skipping the postpartum thyroid and medical rule-out"
          }
        },
        {
          "id": "b",
          "text": "A complete account of every prenatal appointment she attended so the counselor can verify her obstetric care was adequate",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Exhaustive appointment history is low yield here",
          "explanation": {
            "approach": "Vocational-style cataloging of visits",
            "rationale": "It does not address organic mimics of depression",
            "keyIndicators": [
              "no urgent care-quality concern raised"
            ],
            "commonMistake": "Collecting low-yield detail instead of a medical rule-out"
          }
        },
        {
          "id": "c",
          "text": "A detailed genogram tracing mood and relationship patterns across at least three generations of her extended family",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Useful later, but not the immediate priority",
          "explanation": {
            "approach": "Family-systems mapping",
            "rationale": "It does not rule out medical contributors to the current episode",
            "keyIndicators": [
              "no urgent systemic data needed now"
            ],
            "commonMistake": "Prioritizing depth history over the medical rule-out"
          }
        },
        {
          "id": "d",
          "text": "A full list of every parenting book and resource she has read since delivery so the counselor can assess her preparation",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Reading history is not diagnostically relevant",
          "explanation": {
            "approach": "Preparation inventory",
            "rationale": "It does not change the differential or rule out medical causes",
            "keyIndicators": [
              "not a clinical rule-out item"
            ],
            "commonMistake": "Confusing preparation review with a medical screen"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "As part of routine peripartum risk assessment, what must the counselor screen for directly, regardless of how mild Danielle's presentation appears?",
      "evidenceRef": [
        "R1",
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Any thoughts of harming her daughter or herself, and any hallucinations, delusions, or disorganized thinking",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Direct infant-harm and psychosis screening is essential",
          "explanation": {
            "approach": "Screen safety and reality testing directly",
            "rationale": "Peripartum risk assessment always screens for infant-harm ideation and psychotic features, even when mild",
            "keyIndicators": [
              "denies harm thoughts",
              "denies hallucinations or delusions"
            ],
            "commonMistake": "Skipping direct safety questions because the presentation seems mild"
          }
        },
        {
          "id": "b",
          "text": "Whether she feels confident she can breastfeed exclusively for the recommended duration without ever supplementing",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Feeding preference is not a safety screen",
          "explanation": {
            "approach": "Feeding-plan framing",
            "rationale": "It does not address infant-harm ideation or psychotic features",
            "keyIndicators": [
              "not a risk item"
            ],
            "commonMistake": "Substituting lifestyle questions for a safety screen"
          }
        },
        {
          "id": "c",
          "text": "Whether her partner agrees that hiring outside childcare help would be an appropriate next step for the family",
          "isCorrect": false,
          "weight": -2,
          "rationale": "This bypasses the required safety screen entirely",
          "explanation": {
            "approach": "Logistics-only framing",
            "rationale": "Deferring to logistics instead of screening safety is unsafe practice",
            "keyIndicators": [
              "safety questions unasked"
            ],
            "commonMistake": "Replacing a safety screen with a childcare-logistics discussion"
          }
        },
        {
          "id": "d",
          "text": "Whether she has already scheduled her daughter's upcoming pediatric wellness visits for the next several months",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Scheduling is administrative, not a safety screen",
          "explanation": {
            "approach": "Administrative framing",
            "rationale": "It does not address infant-harm ideation or psychosis",
            "keyIndicators": [
              "not a clinical safety item"
            ],
            "commonMistake": "Confusing administrative follow-up with risk assessment"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "Danielle denies any hallucinations, delusions, or disorganized behavior. How does this shape the differential from postpartum psychosis?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "It rules out postpartum psychosis, since that diagnosis requires psychotic features or grossly disorganized behavior",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Absence of psychotic features rules out psychosis",
          "explanation": {
            "approach": "Apply the psychosis differential directly",
            "rationale": "Postpartum psychosis requires hallucinations, delusions, or disorganization, none of which are present",
            "keyIndicators": [
              "denies hallucinations, delusions, disorganized thinking"
            ],
            "commonMistake": "Treating ordinary maternal guilt as a psychotic symptom"
          }
        },
        {
          "id": "b",
          "text": "It confirms she could not possibly develop psychotic features later, since the two conditions never occur together",
          "isCorrect": false,
          "weight": -2,
          "rationale": "This overstates certainty and is clinically inaccurate",
          "explanation": {
            "approach": "Overgeneralized reassurance",
            "rationale": "A current negative screen does not guarantee no future emergence of psychosis",
            "keyIndicators": [
              "ongoing monitoring is still needed"
            ],
            "commonMistake": "Assuming a single negative screen rules out future risk permanently"
          }
        },
        {
          "id": "c",
          "text": "It suggests her guilt and self-doubt are less clinically significant than they would be if psychotic features were present",
          "isCorrect": false,
          "weight": -1,
          "rationale": "This minimizes a genuine depressive symptom",
          "explanation": {
            "approach": "Severity-minimizing framing",
            "rationale": "Guilt without psychosis is still a clinically significant MDD symptom",
            "keyIndicators": [
              "pervasive guilt present"
            ],
            "commonMistake": "Dismissing non-psychotic symptoms as unimportant"
          }
        },
        {
          "id": "d",
          "text": "It means her case can be managed identically whether or not psychotic features ever emerge in the future",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Emergent psychosis would change the care pathway",
          "explanation": {
            "approach": "Static-management framing",
            "rationale": "New psychotic features would require urgent psychiatric referral, changing the plan",
            "keyIndicators": [
              "differential requires ongoing reassessment"
            ],
            "commonMistake": "Assuming the initial plan never needs updating"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "Before finalizing a unipolar depression diagnosis, what history must the counselor rule out?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Any past episode of elevated or irritable mood with decreased need for sleep, indicating a hypomanic or manic history",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Past hypomania or mania would change the diagnosis",
          "explanation": {
            "approach": "Screen for a bipolar spectrum history",
            "rationale": "A manic or hypomanic history reframes a peripartum episode as bipolar rather than unipolar",
            "keyIndicators": [
              "denies elevated mood",
              "denies decreased need for sleep"
            ],
            "commonMistake": "Skipping the bipolar screen before finalizing unipolar MDD"
          }
        },
        {
          "id": "b",
          "text": "Any history of gestational diabetes or other pregnancy complications documented in her obstetric records",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Obstetric complications are a separate medical concern",
          "explanation": {
            "approach": "Obstetric-history framing",
            "rationale": "It does not distinguish unipolar from bipolar presentations",
            "keyIndicators": [
              "not a mood-history item"
            ],
            "commonMistake": "Confusing pregnancy complications with a psychiatric rule-out"
          }
        },
        {
          "id": "c",
          "text": "Any prior experience of mild worry before medical appointments that resolved without any formal treatment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Situational worry is unrelated to the bipolar rule-out",
          "explanation": {
            "approach": "Anxiety-adjacent framing",
            "rationale": "Mild situational worry does not change unipolar versus bipolar status",
            "keyIndicators": [
              "not indicative of mania or hypomania"
            ],
            "commonMistake": "Chasing minor anxiety instead of the relevant mood history"
          }
        },
        {
          "id": "d",
          "text": "Any family history of postpartum depression reported by her mother or older sisters during their own pregnancies",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Family history is informative but not the required rule-out",
          "explanation": {
            "approach": "Family-pattern framing",
            "rationale": "It supports risk assessment but does not rule out a personal manic history",
            "keyIndicators": [
              "secondary, not primary, rule-out"
            ],
            "commonMistake": "Substituting family history for a personal mania screen"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "What is the most appropriate first-line, within-scope treatment recommendation for Danielle?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Offer evidence-based psychotherapy such as cognitive behavioral therapy or interpersonal therapy for postpartum depression",
          "isCorrect": true,
          "weight": 3,
          "rationale": "First-line psychotherapy fits counselor scope",
          "explanation": {
            "approach": "Match the guideline to scope of practice",
            "rationale": "APA CPG lists CBT and IPT as first-line for perinatal depression",
            "keyIndicators": [
              "mild-to-moderate presentation",
              "counselor scope of practice"
            ],
            "commonMistake": "Defaulting to a medication recommendation instead"
          }
        },
        {
          "id": "b",
          "text": "Recommend she begin a specific antidepressant today and describe exactly how to adjust the dose over coming weeks",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Prescribing is outside counselor scope",
          "explanation": {
            "approach": "Prescribe and titrate medication",
            "rationale": "Counselors do not prescribe or adjust medication dosing",
            "keyIndicators": [
              "no prescriptive authority"
            ],
            "commonMistake": "Acting outside scope of practice"
          }
        },
        {
          "id": "c",
          "text": "Suggest she wait several months to see if her mood improves naturally before starting any formal treatment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Watchful waiting under-treats an active episode",
          "explanation": {
            "approach": "Watchful waiting",
            "rationale": "An active episode with impairment warrants active treatment now",
            "keyIndicators": [
              "functional impairment present"
            ],
            "commonMistake": "Delaying indicated psychotherapy"
          }
        },
        {
          "id": "d",
          "text": "Encourage her to rely mainly on extended family support and postpone therapy until the baby sleeps through the night",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Informal support alone is not first-line treatment",
          "explanation": {
            "approach": "Lifestyle-substitution framing",
            "rationale": "Family support is a helpful adjunct, not a substitute for first-line therapy",
            "keyIndicators": [
              "treatable episode present now"
            ],
            "commonMistake": "Offering an adjunct in place of the primary plan"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "How should the counselor track whether treatment is actually working over the coming weeks?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Re-administer a validated perinatal measure such as the Edinburgh Postnatal Depression Scale at regular intervals",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Standardized repeated measurement guides care",
          "explanation": {
            "approach": "Use a validated, repeated measure",
            "rationale": "Standardized perinatal screening supports measurement-based monitoring of progress",
            "keyIndicators": [
              "need for objective, repeatable tracking"
            ],
            "commonMistake": "Relying on impressions instead of a validated measure"
          }
        },
        {
          "id": "b",
          "text": "Ask her casually at each session whether she generally feels a bit better than she did the previous week",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Informal check-ins lack a standardized benchmark",
          "explanation": {
            "approach": "Informal verbal check-in",
            "rationale": "It lacks the reliability of a validated repeated measure",
            "keyIndicators": [
              "no standardized anchor used"
            ],
            "commonMistake": "Trusting an unstandardized impression alone"
          }
        },
        {
          "id": "c",
          "text": "Wait until the full course of therapy has ended before evaluating whether her symptoms have changed at all",
          "isCorrect": false,
          "weight": -1,
          "rationale": "End-only review misses early non-response",
          "explanation": {
            "approach": "Terminal-only evaluation",
            "rationale": "It delays needed adjustments to the treatment plan",
            "keyIndicators": [
              "interim data needed sooner"
            ],
            "commonMistake": "Skipping interim progress monitoring"
          }
        },
        {
          "id": "d",
          "text": "Track only whether she is attending sessions consistently and completing any assigned between-session tasks",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Engagement alone does not measure symptom change",
          "explanation": {
            "approach": "Adherence-only proxy",
            "rationale": "Attendance is necessary but does not substitute for symptom measurement",
            "keyIndicators": [
              "process versus outcome distinction"
            ],
            "commonMistake": "Mistaking adherence for clinical improvement"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "Danielle asks whether she should also be evaluated for medication. What is the most appropriate counselor action?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Provide general information and, with her consent, coordinate a referral to a prescriber for a medication evaluation",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Referral and coordination stay within scope",
          "explanation": {
            "approach": "Coordinate care with a prescriber",
            "rationale": "Counselors refer for medical evaluation rather than prescribing",
            "keyIndicators": [
              "client-initiated interest in medication"
            ],
            "commonMistake": "Giving specific medication advice directly"
          }
        },
        {
          "id": "b",
          "text": "Tell her which specific antidepressant is typically best for new mothers with her particular symptom pattern",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Naming a specific medication exceeds scope",
          "explanation": {
            "approach": "Prescriptive advice",
            "rationale": "Counselors do not select or recommend specific medications",
            "keyIndicators": [
              "no prescriptive authority"
            ],
            "commonMistake": "Overstepping professional scope of practice"
          }
        },
        {
          "id": "c",
          "text": "Advise her that medication is unnecessary as long as she remains fully committed to attending therapy",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Discouraging medication overreaches",
          "explanation": {
            "approach": "Discourage medication",
            "rationale": "That decision belongs with a prescriber, not the counselor",
            "keyIndicators": [
              "client autonomy over medical decisions"
            ],
            "commonMistake": "Steering a medical decision unilaterally"
          }
        },
        {
          "id": "d",
          "text": "Suggest she research antidepressant options herself online and bring a preferred choice to a future appointment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Outsourcing to self-research is poor coordination",
          "explanation": {
            "approach": "Defer to self-directed research",
            "rationale": "It abandons proper professional coordination of care",
            "keyIndicators": [
              "needs a professional referral instead"
            ],
            "commonMistake": "Replacing referral with unguided self-research"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "Which initial step best supports Danielle's re-engagement with valued activities while accounting for her new role as a mother?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Collaboratively schedule small, manageable activities such as a short walk with the baby or a brief call to a friend",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Graded, valued activity rebuilds reward",
          "explanation": {
            "approach": "Schedule graded, reinforcing activity",
            "rationale": "Behavioral activation pairs small valued activities with reinforcement",
            "keyIndicators": [
              "withdrew from cooking and calling friends"
            ],
            "commonMistake": "Waiting for motivation to return before scheduling activity"
          }
        },
        {
          "id": "b",
          "text": "Direct her to resume her full pre-baby schedule immediately to prove to herself that she can still manage everything",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Too much too soon invites failure",
          "explanation": {
            "approach": "All-at-once activation",
            "rationale": "Behavioral activation grades activity rather than flooding the schedule",
            "keyIndicators": [
              "low energy and exhaustion present"
            ],
            "commonMistake": "Ignoring graded pacing in favor of an abrupt full schedule"
          }
        },
        {
          "id": "c",
          "text": "Have her keep a detailed log of every negative thought about her parenting before introducing any change to her routine",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Thought logs fit cognitive work, not the first behavioral step",
          "explanation": {
            "approach": "Cognitive-logging-first framing",
            "rationale": "Behavioral activation leads with scheduling activity, not thought logs",
            "keyIndicators": [
              "behavioral focus is the priority"
            ],
            "commonMistake": "Confusing behavioral activation with cognitive restructuring"
          }
        },
        {
          "id": "d",
          "text": "Encourage her to wait until she genuinely feels motivated again before attempting to resume any prior activities",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Waiting on motivation reverses the intervention logic",
          "explanation": {
            "approach": "Mood-dependent action",
            "rationale": "Behavioral activation acts before motivation returns, not after",
            "keyIndicators": [
              "anhedonia is maintaining avoidance"
            ],
            "commonMistake": "Letting mood gate behavior instead of scheduling it"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "How can the counselor best address Danielle's belief that her depression makes her a bad mother?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Offer psychoeducation framing postpartum depression as common and treatable while validating how exhausting this feels",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Psychoeducation reframes self-blame with validation",
          "explanation": {
            "approach": "Normalize and validate together",
            "rationale": "Framing the condition as common and treatable counters self-blame without dismissing distress",
            "keyIndicators": [
              "belief that she is a bad mother",
              "genuine exhaustion described"
            ],
            "commonMistake": "Either only lecturing on facts or only sympathizing without information"
          }
        },
        {
          "id": "b",
          "text": "Firmly challenge the belief as irrational and present objective evidence that she is clearly a capable mother",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Premature disputation can feel invalidating",
          "explanation": {
            "approach": "Confront the cognition directly",
            "rationale": "Direct disputation before validation risks rupturing early rapport",
            "keyIndicators": [
              "fragile early self-view"
            ],
            "commonMistake": "Disputing a belief before validating the feeling behind it"
          }
        },
        {
          "id": "c",
          "text": "Agree that her exhaustion and low mood are affecting her daughter and focus on helping her accept this reality",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Endorsing the self-blame deepens the distortion",
          "explanation": {
            "approach": "Validate the cognitive distortion",
            "rationale": "Agreeing with the distorted belief reinforces rather than treats it",
            "keyIndicators": [
              "baby is described as well-bonded and cared for"
            ],
            "commonMistake": "Colluding with a client's harshest self-judgment"
          }
        },
        {
          "id": "d",
          "text": "Redirect the conversation away from the topic and refocus entirely on practical scheduling for the coming week",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoidance leaves the belief unaddressed",
          "explanation": {
            "approach": "Topic redirection",
            "rationale": "Avoiding the belief bypasses a core treatment target",
            "keyIndicators": [
              "emotionally central material unaddressed"
            ],
            "commonMistake": "Steering away from emotionally central material"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "Danielle says she doubts therapy will help her feel like a good mother again. What is the most therapeutic response?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Acknowledge the doubt as understandable and collaboratively set one small, achievable goal to test it against",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Name the doubt and test it behaviorally together",
          "explanation": {
            "approach": "Instill hope through collaborative testing",
            "rationale": "Small collaborative successes counter doubt more effectively than argument",
            "keyIndicators": [
              "expressed doubt about therapy's usefulness"
            ],
            "commonMistake": "Trying to argue the client out of her doubt"
          }
        },
        {
          "id": "b",
          "text": "Promise her confidently that therapy is guaranteed to work as long as she attends every scheduled session",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Overpromising risks credibility",
          "explanation": {
            "approach": "Guarantee an outcome",
            "rationale": "Unrealistic guarantees can undermine trust if progress is slow",
            "keyIndicators": [
              "skeptical client"
            ],
            "commonMistake": "Making promises the counselor cannot keep"
          }
        },
        {
          "id": "c",
          "text": "Accept her prediction that treatment is unlikely to help and shift the focus to simply managing daily tasks",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Agreeing confirms the doubt and abandons treatment",
          "explanation": {
            "approach": "Concede to hopeless prediction",
            "rationale": "It abandons a genuinely treatable target rather than engaging with it",
            "keyIndicators": [
              "therapeutic pessimism expressed"
            ],
            "commonMistake": "Adopting the client's pessimistic stance as fact"
          }
        },
        {
          "id": "d",
          "text": "Explain the neurobiology of postpartum hormonal shifts in detail to convince her that recovery is fully possible",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Lecturing rarely shifts emotional doubt",
          "explanation": {
            "approach": "Didactic persuasion",
            "rationale": "Experiential success tends to move doubt more than a lecture does",
            "keyIndicators": [
              "doubt rooted in emotional experience"
            ],
            "commonMistake": "Substituting facts for an experiential intervention"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "When reviewing informed consent, what must the counselor ensure Danielle understands?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "The limits of confidentiality, including circumstances that would require the counselor to act to prevent serious harm",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Confidentiality limits must be disclosed up front",
          "explanation": {
            "approach": "Clarify consent and its limits",
            "rationale": "ACA standards require explaining confidentiality limits as part of informed consent",
            "keyIndicators": [
              "telehealth intake in progress"
            ],
            "commonMistake": "Omitting the limits of confidentiality from consent"
          }
        },
        {
          "id": "b",
          "text": "That everything she shares in telehealth sessions will remain completely confidential under all circumstances",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Absolute confidentiality is an inaccurate promise",
          "explanation": {
            "approach": "Overpromise privacy",
            "rationale": "It misstates the ethical and legal limits on confidentiality",
            "keyIndicators": [
              "safety exceptions always exist"
            ],
            "commonMistake": "Guaranteeing unconditional secrecy"
          }
        },
        {
          "id": "c",
          "text": "That the counselor will decide which specific treatment goals are appropriate for her to pursue in therapy",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Goals are set collaboratively, not imposed",
          "explanation": {
            "approach": "Clinician-imposed goals",
            "rationale": "Informed consent includes collaborative goal-setting with the client",
            "keyIndicators": [
              "client autonomy in planning"
            ],
            "commonMistake": "Removing the client from her own treatment planning"
          }
        },
        {
          "id": "d",
          "text": "That she is required to complete the entire recommended course of therapy once she agrees to begin today",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Clients may withdraw consent at any time",
          "explanation": {
            "approach": "Mandate completion",
            "rationale": "Consent is ongoing and can be revoked by the client",
            "keyIndicators": [
              "right to discontinue treatment"
            ],
            "commonMistake": "Treating initial consent as a binding, irrevocable contract"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "Danielle asks whether it is appropriate to keep having sessions by telehealth while caring for a newborn at home. What is the appropriate response?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Confirm she has a private space and stable connection, review telehealth consent and confidentiality limits, and proceed",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Verify privacy and consent, then continue telehealth",
          "explanation": {
            "approach": "Verify telehealth conditions before proceeding",
            "rationale": "Ethical telehealth practice confirms privacy, connectivity, and consent before each session",
            "keyIndicators": [
              "sessions conducted from her living room"
            ],
            "commonMistake": "Assuming telehealth suitability without checking privacy each time"
          }
        },
        {
          "id": "b",
          "text": "Tell her telehealth is never appropriate for a new mother and she must switch to in-person sessions immediately",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A blanket rule against telehealth is unsupported",
          "explanation": {
            "approach": "Blanket-restriction framing",
            "rationale": "Telehealth can be entirely appropriate once privacy and consent are confirmed",
            "keyIndicators": [
              "no barrier to telehealth identified"
            ],
            "commonMistake": "Ruling out an appropriate modality without justification"
          }
        },
        {
          "id": "c",
          "text": "Proceed with sessions without addressing privacy or confidentiality since she already agreed to telehealth at intake",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Skipping the ongoing privacy check is unethical",
          "explanation": {
            "approach": "Treat consent as a one-time formality",
            "rationale": "Telehealth privacy and consent should be reconfirmed, not assumed permanently settled",
            "keyIndicators": [
              "household with a newborn and shared space"
            ],
            "commonMistake": "Failing to reverify privacy conditions on an ongoing basis"
          }
        },
        {
          "id": "d",
          "text": "Suggest she pause therapy altogether until her daughter is older and telehealth sessions are less likely to be interrupted",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Pausing indicated treatment is not necessary",
          "explanation": {
            "approach": "Delay-treatment framing",
            "rationale": "An active, treatable episode does not warrant pausing care over interruptions",
            "keyIndicators": [
              "active depressive episode needing treatment now"
            ],
            "commonMistake": "Delaying needed treatment for a manageable logistical issue"
          }
        }
      ]
    }
  ]
};

const D202 = {
  "id": "ncmhce-D202",
  "title": "Six months of hard-to-control worry about work, money, and family safety",
  "category": "Anxiety",
  "difficulty": "easy",
  "primaryDiagnosis": {
    "name": "Generalized Anxiety Disorder",
    "code": "F41.1"
  },
  "diagnosis": {
    "name": "Generalized Anxiety Disorder",
    "code": "F41.1"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Generalized Anxiety Disorder",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Adjustment Disorder, with Anxiety",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Illness Anxiety Disorder",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Panic Disorder",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Marisol Reyes, a 45-year-old office manager, presents to outpatient counseling reporting six months of persistent, hard-to-control worry about her job performance, household finances, and her husband and teenage son's health and safety. She says the worry follows her from her desk at work into bed at night.",
    "session1": "She reports near-daily muscle tension in her neck and shoulders, trouble falling asleep because her mind runs through worst-case scenarios, and difficulty concentrating on budget reports at work. She says the worry jumps from one topic to another and she cannot set it aside even when reassured that things are fine.",
    "session2": "She denies panic attacks, denies any thoughts of self-harm or harm to others, denies a medical explanation after a recent normal physical exam and bloodwork, and denies substance use. She is frustrated the worry persists despite knowing her family is safe and her job is secure, and she wants to learn skills to manage it."
  },
  "diagnosticRationale": "Marisol shows excessive, difficult-to-control worry about multiple domains (work, finances, family health and safety) present more days than not for six months, plus muscle tension, sleep disturbance, and concentration trouble causing clinically significant distress, meeting DSM-5-TR criteria for GAD. A normal medical work-up and denied substance use rule out a general medical or substance cause, and the absence of panic attacks, illness-specific preoccupation, or a single discrete precipitant argues against panic disorder, illness anxiety disorder, or an adjustment reaction.",
  "references": [
    {
      "id": "R1",
      "source": "DSM-5-TR",
      "detail": "GAD Criteria A-B: excessive, hard-to-control worry about multiple events/activities, more days than not for 6+ months"
    },
    {
      "id": "R2",
      "source": "DSM-5-TR",
      "detail": "GAD Criterion C: 3+ of 6 symptoms (restlessness, fatigue, concentration trouble, irritability, muscle tension, sleep disturbance)"
    },
    {
      "id": "R3",
      "source": "DSM-5-TR",
      "detail": "GAD Criteria D-F: clinically significant impairment; not attributable to a substance/medical condition or another disorder"
    },
    {
      "id": "R4",
      "source": "APA CPG",
      "detail": "Anxiety disorder guideline: CBT with cognitive restructuring and relaxation training as first-line psychotherapy"
    },
    {
      "id": "R5",
      "source": "VA/DoD CPG",
      "detail": "Anxiety measurement-based care using a repeated validated worry/anxiety measure such as the GAD-7"
    },
    {
      "id": "R6",
      "source": "ACA Code of Ethics",
      "detail": "A.1., A.2., B.1.: informed consent, professional disclosure, and limits of confidentiality and scope"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "What should the counselor confirm first to establish that Marisol's presentation meets the duration and pervasiveness threshold for GAD?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "That the excessive worry has occurred more days than not for at least six months and spans multiple life domains",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Duration and pervasiveness anchor the GAD threshold",
          "explanation": {
            "approach": "Confirm the diagnostic threshold directly",
            "rationale": "DSM-5-TR requires worry most days for 6+ months across several areas",
            "keyIndicators": [
              "six months of worry",
              "work, finances, and family all named"
            ],
            "commonMistake": "Diagnosing GAD from a single worried conversation"
          }
        },
        {
          "id": "b",
          "text": "That she can identify one single recent event at home or at work that explains why the worry suddenly began this year",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A single trigger points toward adjustment disorder, not GAD",
          "explanation": {
            "approach": "Stressor hunting",
            "rationale": "GAD worry is not confined to one precipitating event",
            "keyIndicators": [
              "worry spans multiple unrelated topics"
            ],
            "commonMistake": "Requiring a single trigger to diagnose an anxiety disorder"
          }
        },
        {
          "id": "c",
          "text": "That a close family member has also received a formal diagnosis of an anxiety disorder from a physician",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Family history supports but does not establish the diagnosis",
          "explanation": {
            "approach": "Over-weighting heredity",
            "rationale": "Family history informs risk, not the current diagnostic criteria",
            "keyIndicators": [
              "no family history data reported"
            ],
            "commonMistake": "Requiring family history before diagnosing"
          }
        },
        {
          "id": "d",
          "text": "That her worry today feels clearly more severe than it did when it first started six months ago",
          "isCorrect": false,
          "weight": 0,
          "rationale": "A worsening trend is not required for the diagnosis",
          "explanation": {
            "approach": "Trajectory framing",
            "rationale": "Symptom trend is not a Criterion A element for GAD",
            "keyIndicators": [
              "stable, ongoing worry pattern"
            ],
            "commonMistake": "Demanding a worsening course to diagnose"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "What additional intake information is most important to gather to avoid misattributing Marisol’s presentation?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "A review of her medications, caffeine and substance use, and any thyroid or other medical conditions that mimic anxiety",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Ruling out medical and substance causes is required before diagnosing GAD",
          "explanation": {
            "approach": "Screen organic and substance contributors",
            "rationale": "DSM-5-TR requires excluding a medical condition or substance as the cause",
            "keyIndicators": [
              "recent normal physical exam and bloodwork",
              "denies substance use"
            ],
            "commonMistake": "Skipping the medical and substance rule-out"
          }
        },
        {
          "id": "b",
          "text": "A complete genogram tracing relationship patterns across at least three generations of her extended family",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Useful later, but not the intake priority now",
          "explanation": {
            "approach": "Family-systems mapping",
            "rationale": "It does not address organic or substance mimics of anxiety",
            "keyIndicators": [
              "no urgent systemic data needed yet"
            ],
            "commonMistake": "Prioritizing depth history over medical rule-outs"
          }
        },
        {
          "id": "c",
          "text": "A full list of every job she has held so the counselor understands her entire occupational history in detail",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Exhaustive work history is low yield at this point",
          "explanation": {
            "approach": "Vocational cataloging",
            "rationale": "It does not change the differential or rule out organic causes",
            "keyIndicators": [
              "one current, relevant job role"
            ],
            "commonMistake": "Collecting low-yield detail instead of rule-outs"
          }
        },
        {
          "id": "d",
          "text": "A list of every coping strategy that has already failed her so each approach can be formally ruled out",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Coping review is secondary to the medical rule-out here",
          "explanation": {
            "approach": "Coping inventory",
            "rationale": "It is treatment-planning data, not a diagnostic rule-out",
            "keyIndicators": [
              "planning-stage information"
            ],
            "commonMistake": "Confusing planning data with required rule-outs"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "How should the counselor characterize Marisol’s sleep difficulty during the intake assessment?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "As one of the associated GAD symptoms, since it began alongside the worry rather than as a separate sleep disorder",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Sleep disturbance tied to worry is a listed GAD symptom",
          "explanation": {
            "approach": "Link the symptom to the worry criterion",
            "rationale": "DSM-5-TR lists sleep disturbance among the six associated GAD symptoms",
            "keyIndicators": [
              "trouble falling asleep from worst-case thinking"
            ],
            "commonMistake": "Treating every sleep complaint as a distinct sleep disorder"
          }
        },
        {
          "id": "b",
          "text": "As clear evidence that a separate primary insomnia disorder needs its own distinct diagnosis right away today",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Nothing suggests sleep problems independent of the worry",
          "explanation": {
            "approach": "Separate-disorder framing",
            "rationale": "The sleep complaint is directly tied to worry content, not independent",
            "keyIndicators": [
              "sleep problem described as worry-driven"
            ],
            "commonMistake": "Adding an unsupported second diagnosis prematurely"
          }
        },
        {
          "id": "c",
          "text": "As a low-priority detail that can reasonably wait until several sessions of rapport-building have occurred",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Sleep disturbance is diagnostically relevant now, not later",
          "explanation": {
            "approach": "Deferral framing",
            "rationale": "Associated symptoms should be characterized at intake, not delayed",
            "keyIndicators": [
              "symptom relevant to the current criteria"
            ],
            "commonMistake": "Postponing relevant diagnostic detail"
          }
        },
        {
          "id": "d",
          "text": "As most likely explained by an irregular caffeine schedule that has not yet been discussed with her at all",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Caffeine is worth screening but is not the leading explanation here",
          "explanation": {
            "approach": "Substance-first framing",
            "rationale": "The described pattern tracks with worry content, not caffeine timing",
            "keyIndicators": [
              "sleep trouble tied to worst-case scenarios, not stimulant timing"
            ],
            "commonMistake": "Assuming a substance cause without supporting data"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "Which finding best distinguishes Marisol’s presentation as GAD rather than an adjustment disorder with anxiety?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Her worry has lasted six months across multiple unrelated domains rather than following one identifiable stressor",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Duration and cross-domain spread exceed an adjustment reaction",
          "explanation": {
            "approach": "Apply the duration and breadth criteria",
            "rationale": "Adjustment disorder does not meet the six-month, multi-domain GAD threshold",
            "keyIndicators": [
              "work, finances, and family all worried about",
              "six-month course"
            ],
            "commonMistake": "Labeling any stress-linked worry as adjustment disorder"
          }
        },
        {
          "id": "b",
          "text": "The fact that her worry began sometime after ordinary daily work and family stressors were already present",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Everyday stressors do not rule GAD out",
          "explanation": {
            "approach": "Trigger-equals-adjustment framing",
            "rationale": "GAD worry can also coexist with everyday stress",
            "keyIndicators": [
              "ongoing job and family stressors"
            ],
            "commonMistake": "Equating any surrounding stress with adjustment disorder"
          }
        },
        {
          "id": "c",
          "text": "The observation that her level of concern seems somewhat out of proportion to her actual job performance reviews",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Proportionality alone does not establish the diagnosis",
          "explanation": {
            "approach": "Proportionality test",
            "rationale": "Disproportionate worry fits GAD but is not the distinguishing feature by itself",
            "keyIndicators": [
              "worry exceeds objective job risk"
            ],
            "commonMistake": "Using proportionality as the sole diagnostic marker"
          }
        },
        {
          "id": "d",
          "text": "The likelihood that her symptoms would resolve within a few months if her financial situation happened to improve",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Anticipated course does not define the current episode",
          "explanation": {
            "approach": "Prognosis framing",
            "rationale": "Expected resolution is not a diagnostic criterion for GAD",
            "keyIndicators": [
              "uncertain future course"
            ],
            "commonMistake": "Diagnosing based on anticipated improvement"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "Which feature most clearly argues against illness anxiety disorder as the better-fitting diagnosis?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Her worry spans work performance and finances as much as family health, rather than centering on having a serious illness",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Broad, multi-domain worry is inconsistent with illness-focused preoccupation",
          "explanation": {
            "approach": "Compare the focus and breadth of the worry",
            "rationale": "Illness anxiety disorder centers on fear of having a serious illness, not multiple life domains",
            "keyIndicators": [
              "worry named for work, money, and family safety alike"
            ],
            "commonMistake": "Assuming any health-related worry means illness anxiety disorder"
          }
        },
        {
          "id": "b",
          "text": "She recently completed a physical exam and bloodwork that both came back within normal limits overall",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A normal work-up helps rule out a medical cause but does not itself separate the two anxiety diagnoses",
          "explanation": {
            "approach": "Medical rule-out framing",
            "rationale": "This addresses Criterion E, not the illness anxiety differential specifically",
            "keyIndicators": [
              "normal recent labs and exam"
            ],
            "commonMistake": "Conflating the medical rule-out with the illness anxiety differential"
          }
        },
        {
          "id": "c",
          "text": "She has not sought out repeated reassurance from multiple different physicians about her physical symptoms",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Absence of doctor-shopping is supportive but is not the clearest distinguishing feature",
          "explanation": {
            "approach": "Reassurance-seeking framing",
            "rationale": "Doctor-shopping absence is secondary to the breadth-of-worry distinction",
            "keyIndicators": [
              "no repeated medical visits described"
            ],
            "commonMistake": "Overweighting a secondary behavioral detail"
          }
        },
        {
          "id": "d",
          "text": "She is 45 years old, which is an age at which illness anxiety disorder is considered clinically less probable overall",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Age alone does not rule a diagnosis in or out",
          "explanation": {
            "approach": "Demographic-only framing",
            "rationale": "Illness anxiety disorder is not primarily excluded by age",
            "keyIndicators": [
              "no age-based exclusion criterion exists"
            ],
            "commonMistake": "Using demographics instead of clinical criteria to differentiate"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "What is the most appropriate first-line, within-scope treatment recommendation for Marisol?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Offer cognitive behavioral therapy with cognitive restructuring and relaxation training targeted at her worry",
          "isCorrect": true,
          "weight": 3,
          "rationale": "CBT with relaxation training is first-line for GAD and fits counselor scope",
          "explanation": {
            "approach": "Match the guideline to scope of practice",
            "rationale": "APA CPG lists CBT with cognitive restructuring and relaxation training as first-line for GAD",
            "keyIndicators": [
              "muscle tension",
              "excessive, hard-to-control worry"
            ],
            "commonMistake": "Defaulting to a medication recommendation instead"
          }
        },
        {
          "id": "b",
          "text": "Recommend she start a daily anti-anxiety medication right away and increase the dose over the coming weeks",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Prescribing and titrating medication is outside counselor scope",
          "explanation": {
            "approach": "Prescribe medication",
            "rationale": "Counselors do not prescribe or adjust medication dosing",
            "keyIndicators": [
              "no prescriptive authority"
            ],
            "commonMistake": "Acting outside the counselor scope of practice"
          }
        },
        {
          "id": "c",
          "text": "Suggest she wait a couple of months to see whether the worry resolves on its own before starting formal treatment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Watchful waiting under-treats a persistent, impairing pattern",
          "explanation": {
            "approach": "Watchful waiting",
            "rationale": "Six months of impairing worry warrants active treatment now",
            "keyIndicators": [
              "ongoing functional impairment"
            ],
            "commonMistake": "Delaying indicated, available care"
          }
        },
        {
          "id": "d",
          "text": "Encourage her to focus mainly on a stricter diet and exercise routine in place of any formal counseling sessions",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Lifestyle changes alone are not first-line for GAD",
          "explanation": {
            "approach": "Lifestyle substitution",
            "rationale": "Diet and exercise are adjuncts, not a substitute for first-line therapy",
            "keyIndicators": [
              "clinically significant worry and impairment"
            ],
            "commonMistake": "Offering adjuncts as if they were the primary plan"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "How should the counselor track whether Marisol’s treatment is working over the coming months?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Re-administer a validated worry measure such as the GAD-7 at regular intervals to guide measurement-based care",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Repeated standardized measures support measurement-based care",
          "explanation": {
            "approach": "Use repeated standardized measures",
            "rationale": "VA/DoD CPG endorses measurement-based care using tools like the GAD-7",
            "keyIndicators": [
              "need for objective progress tracking"
            ],
            "commonMistake": "Relying only on session-to-session impressions"
          }
        },
        {
          "id": "b",
          "text": "Ask her casually at each visit whether she feels generally better than she did the week before overall",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Unstructured impressions lack a standardized benchmark",
          "explanation": {
            "approach": "Informal check-in",
            "rationale": "It does not provide a consistent, comparable measure over time",
            "keyIndicators": [
              "no standardized anchor used"
            ],
            "commonMistake": "Trusting vague subjective report alone"
          }
        },
        {
          "id": "c",
          "text": "Wait until the full course of therapy has ended and then evaluate her overall progress in one final review",
          "isCorrect": false,
          "weight": -1,
          "rationale": "An end-only review misses opportunities for early adjustment",
          "explanation": {
            "approach": "Terminal evaluation only",
            "rationale": "It prevents timely changes to the treatment plan",
            "keyIndicators": [
              "need for interim progress data"
            ],
            "commonMistake": "Skipping interim monitoring of symptoms"
          }
        },
        {
          "id": "d",
          "text": "Track only whether she attends her scheduled sessions and completes the homework assigned each week",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Engagement is necessary but does not measure symptom change",
          "explanation": {
            "approach": "Adherence proxy",
            "rationale": "Attendance and homework completion do not substitute for outcome data",
            "keyIndicators": [
              "process measure, not outcome measure"
            ],
            "commonMistake": "Mistaking adherence for symptom improvement"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "Marisol asks whether she should also see a prescriber about medication for her anxiety. What is the most appropriate response?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Provide general information and coordinate a referral to a prescriber for an evaluation, with her consent",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Referring and coordinating care stays within counselor scope",
          "explanation": {
            "approach": "Coordinate care rather than prescribe",
            "rationale": "ACA guidance supports referring for services outside the counselor’s scope",
            "keyIndicators": [
              "client-initiated interest in medication"
            ],
            "commonMistake": "Giving specific medication advice directly"
          }
        },
        {
          "id": "b",
          "text": "Tell her which particular anti-anxiety medication tends to work best for people with her exact symptom pattern",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Naming a specific drug exceeds counselor scope of practice",
          "explanation": {
            "approach": "Prescriptive advice",
            "rationale": "Counselors do not select or recommend specific medications",
            "keyIndicators": [
              "no prescriptive authority"
            ],
            "commonMistake": "Overstepping the professional scope of practice"
          }
        },
        {
          "id": "c",
          "text": "Advise her that medication is unnecessary as long as she stays fully committed to attending every session",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Discouraging a medical evaluation overreaches beyond counselor scope",
          "explanation": {
            "approach": "Discourage medication evaluation",
            "rationale": "That decision belongs with a qualified prescriber, not the counselor",
            "keyIndicators": [
              "client autonomy over medical decisions"
            ],
            "commonMistake": "Steering a medical decision the counselor is not qualified to make"
          }
        },
        {
          "id": "d",
          "text": "Suggest she research medication options online herself and bring a preferred choice to a later appointment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Outsourcing to self-research is a poor substitute for coordinated referral",
          "explanation": {
            "approach": "Defer to self-directed research",
            "rationale": "It abandons proper coordination with a qualified prescriber",
            "keyIndicators": [
              "need for professional medical evaluation"
            ],
            "commonMistake": "Replacing a referral with self-directed searching"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "Which initial relaxation technique best fits Marisol’s reported muscle tension and racing worry at bedtime?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Teach progressive muscle relaxation paired with brief psychoeducation about how worry maintains physical tension",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Progressive muscle relaxation directly targets her reported tension",
          "explanation": {
            "approach": "Match the technique to the reported symptom",
            "rationale": "APA CPG supports relaxation training such as progressive muscle relaxation for GAD",
            "keyIndicators": [
              "neck and shoulder tension",
              "racing thoughts at bedtime"
            ],
            "commonMistake": "Introducing an unrelated technique before targeting the tension directly"
          }
        },
        {
          "id": "b",
          "text": "Direct her to resume every prior work and household responsibility at once so she proves to herself she can cope",
          "isCorrect": false,
          "weight": -1,
          "rationale": "This ignores the tension symptom and risks overwhelming her",
          "explanation": {
            "approach": "All-at-once activation",
            "rationale": "It does not address the physical tension the technique should target",
            "keyIndicators": [
              "reported physical tension unaddressed"
            ],
            "commonMistake": "Skipping a symptom-matched intervention entirely"
          }
        },
        {
          "id": "c",
          "text": "Have her keep a detailed nightly log of every worry thought before introducing any relaxation-based skill at all",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Thought logging is useful later but is not the best first step for tension",
          "explanation": {
            "approach": "Cognitive logging first",
            "rationale": "It delays a directly symptom-matched relaxation intervention",
            "keyIndicators": [
              "tension symptom present now"
            ],
            "commonMistake": "Sequencing cognitive work before an available physical-symptom skill"
          }
        },
        {
          "id": "d",
          "text": "Encourage her to simply wait until the muscle tension fades naturally once her finances feel more secure again",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Passive waiting leaves an available, treatable symptom unaddressed",
          "explanation": {
            "approach": "Passive waiting",
            "rationale": "Relaxation training is an available, active intervention for tension now",
            "keyIndicators": [
              "ongoing, treatable tension"
            ],
            "commonMistake": "Withholding an indicated intervention while waiting on outside events"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "Marisol says her worry is just \"being a responsible adult\" and questions why it needs treatment. What is the best counselor response?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Offer psychoeducation distinguishing everyday responsible concern from excessive, hard-to-control worry, while validating her intent",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Psychoeducation reframes the worry without dismissing her values",
          "explanation": {
            "approach": "Normalize responsibility while clarifying the clinical distinction",
            "rationale": "Distinguishing ordinary concern from excessive worry supports engagement in treatment",
            "keyIndicators": [
              "worry described as constant and hard to set aside"
            ],
            "commonMistake": "Either lecturing her or simply agreeing treatment is unnecessary"
          }
        },
        {
          "id": "b",
          "text": "Firmly tell her she is wrong and that her way of thinking about responsibility is clearly an unhealthy distortion",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Confrontation this early risks rupturing the alliance",
          "explanation": {
            "approach": "Confront the belief directly",
            "rationale": "Early, blunt disputation can feel invalidating and reduce engagement",
            "keyIndicators": [
              "client is questioning, not refusing, treatment"
            ],
            "commonMistake": "Disputing a belief before validating the underlying concern"
          }
        },
        {
          "id": "c",
          "text": "Agree that her worry is simply a normal part of being responsible and shift the focus entirely to unrelated goals",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Agreeing dismisses a clinically significant, impairing symptom",
          "explanation": {
            "approach": "Validate the minimization",
            "rationale": "This reinforces avoidance of a symptom that is causing real impairment",
            "keyIndicators": [
              "tension, sleep loss, and concentration trouble all reported"
            ],
            "commonMistake": "Colluding with a client’s minimization of impairing symptoms"
          }
        },
        {
          "id": "d",
          "text": "Redirect the conversation away from the topic and focus instead on scheduling next week’s appointment logistics",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the question leaves an important engagement barrier unaddressed",
          "explanation": {
            "approach": "Topic redirection",
            "rationale": "It bypasses a core barrier to her buy-in for treatment",
            "keyIndicators": [
              "unaddressed ambivalence about treatment"
            ],
            "commonMistake": "Sidestepping a question central to engagement"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "Marisol says she knows intellectually that her family is safe but cannot stop the worry anyway. What is the most therapeutic response?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Normalize that difficulty controlling worry despite knowing it is excessive is a core feature of GAD, and begin building coping skills together",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Naming the pattern as a core GAD feature validates her while opening skill-building",
          "explanation": {
            "approach": "Name the pattern and move toward collaborative skill-building",
            "rationale": "Difficulty controlling worry despite insight is a defining GAD feature, not a personal failing",
            "keyIndicators": [
              "worry persists despite recognizing it is unwarranted"
            ],
            "commonMistake": "Treating her frustration as evidence she is not trying hard enough"
          }
        },
        {
          "id": "b",
          "text": "Repeat logical reassurances that her family is genuinely safe until she is fully convinced and stops worrying",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Repeated reassurance tends to reinforce the worry cycle rather than resolve it",
          "explanation": {
            "approach": "Reassurance loop",
            "rationale": "Excess reassurance can maintain worry instead of reducing it",
            "keyIndicators": [
              "already intellectually aware family is safe"
            ],
            "commonMistake": "Substituting reassurance for skill-building"
          }
        },
        {
          "id": "c",
          "text": "Tell her that if logical reassurance has not stopped the worry already, there is probably very little that ongoing counseling sessions can realistically do to help her feel better",
          "isCorrect": false,
          "weight": -2,
          "rationale": "This concedes hopelessness about a highly treatable presentation",
          "explanation": {
            "approach": "Concede hopelessness",
            "rationale": "GAD responds well to CBT-based skills; hopelessness here is unwarranted",
            "keyIndicators": [
              "no evidence-based treatment attempted yet"
            ],
            "commonMistake": "Abandoning a treatable target prematurely"
          }
        },
        {
          "id": "d",
          "text": "Suggest she simply try harder to think positively about her family’s safety before their next scheduled session",
          "isCorrect": false,
          "weight": -1,
          "rationale": "This oversimplifies the pattern and offers no structured skill",
          "explanation": {
            "approach": "Willpower framing",
            "rationale": "Effort alone rarely resolves a well-established worry pattern",
            "keyIndicators": [
              "pattern has persisted for six months already"
            ],
            "commonMistake": "Prescribing effort instead of a structured coping skill"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "When reviewing informed consent with Marisol, what must the counselor be sure she understands?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "The limits of confidentiality, including the circumstances under which information might need to be disclosed",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Disclosing confidentiality limits up front is required for informed consent",
          "explanation": {
            "approach": "Clarify consent and its limits",
            "rationale": "ACA guidance requires explaining the limits of confidentiality at the outset of care",
            "keyIndicators": [
              "new outpatient intake",
              "no prior consent process described"
            ],
            "commonMistake": "Omitting the limits of confidentiality during consent"
          }
        },
        {
          "id": "b",
          "text": "That everything she shares in session will be kept completely private under every possible circumstance",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Promising absolute confidentiality misstates ethical and legal limits",
          "explanation": {
            "approach": "Overpromise privacy",
            "rationale": "This misrepresents the actual, limited scope of confidentiality",
            "keyIndicators": [
              "confidentiality exceptions always exist"
            ],
            "commonMistake": "Guaranteeing unconditional secrecy to a client"
          }
        },
        {
          "id": "c",
          "text": "That the counselor alone will decide which specific treatment goals she should pursue during their work together",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Goals should be set collaboratively, not imposed by the counselor",
          "explanation": {
            "approach": "Clinician-imposed goals",
            "rationale": "Informed consent includes the client’s role in collaborative goal-setting",
            "keyIndicators": [
              "client autonomy in treatment planning"
            ],
            "commonMistake": "Removing the client from the goal-setting process"
          }
        },
        {
          "id": "d",
          "text": "That once she agrees to begin, she is required to complete the entire recommended course of treatment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Clients retain the right to withdraw consent at any time",
          "explanation": {
            "approach": "Mandate completion",
            "rationale": "Consent is ongoing and may be withdrawn by the client at any point",
            "keyIndicators": [
              "right to discontinue treatment"
            ],
            "commonMistake": "Treating initial consent as binding for the full course"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "Marisol asks the counselor to simply tell her that her finances are definitely fine so she can stop worrying about them. What is the most appropriate response?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Explain that financial guarantees fall outside counseling scope, and instead work with her on coping skills for the worry itself",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Staying within scope while addressing the underlying worry is the appropriate ethical response",
          "explanation": {
            "approach": "Clarify scope and redirect to the clinical target",
            "rationale": "Counselors work within scope of practice and address the anxiety rather than the unrelated content",
            "keyIndicators": [
              "request for reassurance outside counselor expertise"
            ],
            "commonMistake": "Offering an opinion on a matter outside counselor scope"
          }
        },
        {
          "id": "b",
          "text": "Tell her confidently that her finances are certainly fine so she can feel reassured and move past the topic",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Offering an unqualified guarantee exceeds scope and reinforces reassurance-seeking",
          "explanation": {
            "approach": "Provide an unqualified guarantee",
            "rationale": "This exceeds counselor expertise and can reinforce the worry cycle",
            "keyIndicators": [
              "no financial data available to the counselor"
            ],
            "commonMistake": "Making a confident claim outside professional expertise"
          }
        },
        {
          "id": "c",
          "text": "Recommend she meet with a financial planner right away and postpone any further counseling work until that occurs",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Halting counseling is unnecessary; a referral can be offered alongside continued treatment",
          "explanation": {
            "approach": "Pause treatment for referral",
            "rationale": "The clinical target is the worry pattern, which can be addressed while any referral proceeds",
            "keyIndicators": [
              "ongoing GAD symptoms requiring treatment"
            ],
            "commonMistake": "Stopping indicated treatment while awaiting an unrelated referral"
          }
        },
        {
          "id": "d",
          "text": "Decline to respond to the question at all and quickly move the session on to an unrelated discussion topic",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the question misses a chance to clarify scope and redirect productively",
          "explanation": {
            "approach": "Avoid the question",
            "rationale": "It leaves both the scope issue and the worry pattern unaddressed",
            "keyIndicators": [
              "direct question left unanswered"
            ],
            "commonMistake": "Sidestepping instead of clarifying scope and redirecting"
          }
        }
      ]
    }
  ]
};

const D203 = {
  "id": "ncmhce-D203",
  "title": "Recurrent panic attacks and gym avoidance in a college student",
  "category": "Anxiety",
  "difficulty": "easy",
  "primaryDiagnosis": {
    "name": "Panic Disorder",
    "code": "F41.0"
  },
  "diagnosis": {
    "name": "Panic Disorder",
    "code": "F41.0"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Panic Disorder",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Generalized Anxiety Disorder",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Social Anxiety Disorder",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Illness Anxiety Disorder",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Marcus Delgado, a 22-year-old college senior attending by telehealth from his dorm room, reports that six weeks ago he had a sudden episode of a racing heart, chest tightness, dizziness, and a terrifying fear that he was dying while lifting weights at the campus gym. He has since had three more unexpected episodes, each peaking within about ten minutes, and a recent cardiology visit through student health found no cardiac abnormality.",
    "session1": "Marcus says that for the past month he has worried almost every day about when the next attack will hit, checks his pulse frequently during class, and has stopped going to the campus gym entirely since his first attack happened there, though he still goes to classes, the dining hall, and parties without difficulty.",
    "session2": "He describes the attacks as coming out of nowhere, with no clear trigger he can identify, and says the in-between worry and gym avoidance are now affecting his exercise routine and his sense of control, though he denies any thoughts of self-harm and is motivated to get the panic attacks under control before the semester ends."
  },
  "diagnosticRationale": "Marcus has had recurrent, unexpected panic attacks (racing heart, chest tightness, dizziness, fear of dying) followed by more than a month of persistent worry about additional attacks and a significant behavioral change (avoiding the gym), meeting DSM-5-TR Criterion A and B for Panic Disorder. A cardiac cause has already been ruled out by student health, GAD is excluded because the worry is specifically about panic attacks rather than diffuse life domains, social anxiety is excluded because his avoidance is not about social scrutiny, and illness anxiety disorder is excluded because he is not preoccupied with having an undiagnosed serious illness.",
  "references": [
    {
      "id": "R1",
      "source": "DSM-5-TR",
      "detail": "Panic Disorder Criterion A/B: recurrent unexpected panic attacks plus 1+ month of worry about additional attacks or maladaptive behavioral change"
    },
    {
      "id": "R2",
      "source": "Barlow PCT",
      "detail": "Panic control treatment: interoceptive exposure to reduce fear of bodily sensations"
    },
    {
      "id": "R3",
      "source": "C-SSRS",
      "detail": "Brief structured screen to confirm absence of suicidal ideation before treatment planning"
    },
    {
      "id": "R4",
      "source": "ACA Code of Ethics",
      "detail": "A.1., A.2., and H.: informed consent and telehealth-specific disclosures"
    },
    {
      "id": "R5",
      "source": "Hays (Assessment)",
      "detail": "Culturally responsive assessment attends to client context when interpreting somatic complaints"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "What intake information most directly supports meeting the duration requirement for Panic Disorder?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "That he has worried almost daily about further attacks for over a month since the first episode",
          "isCorrect": true,
          "weight": 3,
          "rationale": "One month of anticipatory worry meets Criterion B",
          "explanation": {
            "approach": "Confirm the duration threshold",
            "rationale": "DSM-5-TR requires 1+ month of worry or behavioral change after attacks",
            "keyIndicators": [
              "worries almost every day",
              "six weeks since first attack"
            ],
            "commonMistake": "Diagnosing from the attacks alone without the follow-on worry"
          }
        },
        {
          "id": "b",
          "text": "That his most recent panic attack happened only a few days before this first telehealth intake session",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Recency alone does not establish the duration criterion",
          "explanation": {
            "approach": "Focus on the most recent event",
            "rationale": "Criterion B needs sustained worry, not a recent single event",
            "keyIndicators": [
              "single recent episode"
            ],
            "commonMistake": "Treating recency as equivalent to duration"
          }
        },
        {
          "id": "c",
          "text": "That cardiology ruled out a cardiac cause during his recent visit through the student health clinic",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Medical rule-out supports safety, not the duration criterion",
          "explanation": {
            "approach": "Cite the medical work-up",
            "rationale": "This addresses etiology, not the 1-month duration requirement",
            "keyIndicators": [
              "medical clearance already obtained"
            ],
            "commonMistake": "Confusing a rule-out with a diagnostic criterion"
          }
        },
        {
          "id": "d",
          "text": "That his first panic attack occurred specifically while he was lifting weights at the campus gym",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Attack location does not establish duration",
          "explanation": {
            "approach": "Emphasize the triggering context",
            "rationale": "Location informs avoidance, not the duration criterion",
            "keyIndicators": [
              "gym as attack location"
            ],
            "commonMistake": "Substituting context detail for the duration criterion"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "Which intake finding confirms that Marcus's panic attacks are unexpected rather than situationally cued?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "He reports the attacks come out of nowhere and he cannot identify a consistent trigger beforehand",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Unpredictable onset defines an unexpected panic attack",
          "explanation": {
            "approach": "Establish the unexpected qualifier",
            "rationale": "DSM-5-TR Panic Disorder requires at least some unexpected attacks",
            "keyIndicators": [
              "no clear trigger he can identify",
              "comes out of nowhere"
            ],
            "commonMistake": "Assuming any attack near the gym is situationally bound"
          }
        },
        {
          "id": "b",
          "text": "He avoided the campus gym completely after his first attack occurred there while lifting weights",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoidance describes behavior, not attack predictability",
          "explanation": {
            "approach": "Point to avoidance behavior",
            "rationale": "Avoidance is Criterion B, not evidence of unexpectedness",
            "keyIndicators": [
              "stopped going to the gym"
            ],
            "commonMistake": "Conflating avoidance with the unexpected qualifier"
          }
        },
        {
          "id": "c",
          "text": "He continues attending classes, the dining hall, and parties without any difficulty or hesitation",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Preserved functioning elsewhere does not address predictability",
          "explanation": {
            "approach": "Cite intact functioning",
            "rationale": "This shows limited avoidance, not attack unexpectedness",
            "keyIndicators": [
              "functioning well outside the gym"
            ],
            "commonMistake": "Using unrelated functioning to answer a different question"
          }
        },
        {
          "id": "d",
          "text": "He checks his pulse frequently during class as a way of monitoring for early signs of another attack",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Pulse-checking is hypervigilance, not proof of unexpectedness",
          "explanation": {
            "approach": "Point to monitoring behavior",
            "rationale": "Hypervigilance reflects worry, a separate criterion element",
            "keyIndicators": [
              "checks pulse in class"
            ],
            "commonMistake": "Treating a worry behavior as evidence of attack pattern"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "What is the most appropriate next intake step regarding Marcus's safety before treatment planning begins?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Complete a brief structured suicide risk screen to confirm there is no ideation despite his distress",
          "isCorrect": true,
          "weight": 3,
          "rationale": "A structured screen confirms the safety picture is clear",
          "explanation": {
            "approach": "Screen for risk before planning",
            "rationale": "C-SSRS provides a brief, structured way to document safety",
            "keyIndicators": [
              "denies self-harm thoughts",
              "reports distress"
            ],
            "commonMistake": "Skipping a formal screen because distress seems mild"
          }
        },
        {
          "id": "b",
          "text": "Ask him to sign a written statement promising he will not act on any distressing thoughts going forward",
          "isCorrect": false,
          "weight": -2,
          "rationale": "No-harm contracts are not an evidence-based safety practice",
          "explanation": {
            "approach": "Use a written promise",
            "rationale": "Contracts do not substitute for a structured risk assessment",
            "keyIndicators": [
              "no evidence base for contracts"
            ],
            "commonMistake": "Replacing assessment with a contract"
          }
        },
        {
          "id": "c",
          "text": "Skip a formal risk screen since he denies self-harm thoughts and appears motivated to engage in treatment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Denial alone should not replace a brief structured screen",
          "explanation": {
            "approach": "Rely on client denial",
            "rationale": "A brief structured screen still documents the safety picture",
            "keyIndicators": [
              "denial without documentation"
            ],
            "commonMistake": "Omitting routine safety screening"
          }
        },
        {
          "id": "d",
          "text": "Refer him back to student health cardiology for a repeat cardiac work-up before any counseling proceeds",
          "isCorrect": false,
          "weight": -1,
          "rationale": "The cardiac work-up is already complete per the intake record",
          "explanation": {
            "approach": "Repeat the medical work-up",
            "rationale": "A cardiac cause was already ruled out; repeating it delays care",
            "keyIndicators": [
              "cardiology already cleared him"
            ],
            "commonMistake": "Re-ordering a rule-out that is already documented"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "Which feature of Marcus's presentation most clearly differentiates Panic Disorder from Generalized Anxiety Disorder?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "His worry is focused specifically on having another panic attack rather than spread across many life domains",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Focused worry about attacks points to Panic Disorder",
          "explanation": {
            "approach": "Compare the focus of the worry",
            "rationale": "GAD worry spans multiple domains; his worry centers on panic itself",
            "keyIndicators": [
              "worries about when the next attack will hit"
            ],
            "commonMistake": "Treating any daily worry as GAD"
          }
        },
        {
          "id": "b",
          "text": "He reports feeling generally tense and keyed up during most of his classes and study sessions each week",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Diffuse tension is not part of his reported picture",
          "explanation": {
            "approach": "Highlight general tension",
            "rationale": "This symptom is not described in the case and would suggest GAD if present",
            "keyIndicators": [
              "no diffuse tension reported"
            ],
            "commonMistake": "Inferring symptoms not present in the narrative"
          }
        },
        {
          "id": "c",
          "text": "He experiences dizziness and a racing heart during the attacks themselves rather than only mild nervousness",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Physical symptom intensity alone does not separate the two disorders",
          "explanation": {
            "approach": "Point to symptom severity",
            "rationale": "GAD can include some somatic tension; intensity alone is not the key differentiator",
            "keyIndicators": [
              "somatic symptoms during attacks"
            ],
            "commonMistake": "Assuming symptom severity is diagnostic by itself"
          }
        },
        {
          "id": "d",
          "text": "He has avoided one specific location where his first panic attack occurred rather than avoiding many places",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Avoidance pattern is relevant but is not the core differentiator from GAD",
          "explanation": {
            "approach": "Cite the avoidance pattern",
            "rationale": "Limited avoidance matters for agoraphobia screening, not GAD differentiation",
            "keyIndicators": [
              "single avoided location"
            ],
            "commonMistake": "Using avoidance scope to rule out GAD"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "How should the counselor conceptualize Marcus's gym avoidance within the Panic Disorder diagnosis?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "As the maladaptive behavioral change required by Criterion B, limited to the single site of his first attack",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Single-site avoidance fits Criterion B without meeting agoraphobia",
          "explanation": {
            "approach": "Map avoidance to the correct criterion",
            "rationale": "Avoiding the attack site satisfies Criterion B behavioral change",
            "keyIndicators": [
              "stopped going to the gym",
              "otherwise attends classes and parties"
            ],
            "commonMistake": "Over-reading limited avoidance as agoraphobia"
          }
        },
        {
          "id": "b",
          "text": "As evidence that he also meets full criteria for Agoraphobia across two or more avoided settings",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Agoraphobia requires fear across two or more distinct situations",
          "explanation": {
            "approach": "Add an agoraphobia diagnosis",
            "rationale": "He avoids only the gym and still attends class, dining hall, and parties",
            "keyIndicators": [
              "only one avoided setting"
            ],
            "commonMistake": "Diagnosing agoraphobia from a single avoided location"
          }
        },
        {
          "id": "c",
          "text": "As a sign of social anxiety since he may fear other students noticing him during a future attack",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Nothing in the narrative points to fear of social scrutiny",
          "explanation": {
            "approach": "Reframe as social fear",
            "rationale": "His concern is about the attack itself, not being judged by peers",
            "keyIndicators": [
              "no social scrutiny concerns reported"
            ],
            "commonMistake": "Assuming avoidance always implies social anxiety"
          }
        },
        {
          "id": "d",
          "text": "As an unrelated lifestyle choice that has no diagnostic significance for his anxiety presentation",
          "isCorrect": false,
          "weight": -1,
          "rationale": "The avoidance is diagnostically meaningful, not incidental",
          "explanation": {
            "approach": "Dismiss the avoidance as irrelevant",
            "rationale": "Behavioral change tied to attacks is a core diagnostic criterion",
            "keyIndicators": [
              "avoidance began right after the first attack"
            ],
            "commonMistake": "Overlooking Criterion B behavioral change"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "What is the most appropriate first-line, within-scope treatment approach for Marcus's Panic Disorder?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Cognitive behavioral panic control treatment that includes interoceptive exposure to feared bodily sensations",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Interoceptive exposure directly targets fear of physical sensations",
          "explanation": {
            "approach": "Apply first-line panic control treatment",
            "rationale": "Barlow PCT pairs psychoeducation with interoceptive exposure for panic",
            "keyIndicators": [
              "fear of racing heart and dizziness",
              "clear panic disorder presentation"
            ],
            "commonMistake": "Defaulting to general relaxation without exposure work"
          }
        },
        {
          "id": "b",
          "text": "Immediate referral for an antidepressant prescription as the sole treatment before any counseling begins",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Prescribing is outside counselor scope and is not the sole plan",
          "explanation": {
            "approach": "Lead with medication",
            "rationale": "Counselors do not prescribe; psychotherapy is first-line and within scope",
            "keyIndicators": [
              "no prescriptive authority"
            ],
            "commonMistake": "Substituting medication referral for indicated therapy"
          }
        },
        {
          "id": "c",
          "text": "A plan to simply wait and monitor his symptoms for another month before starting any active intervention",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Watchful waiting delays indicated, effective treatment",
          "explanation": {
            "approach": "Delay treatment to observe the course",
            "rationale": "An established diagnosis with functional impact warrants active treatment now",
            "keyIndicators": [
              "already impairing his exercise routine"
            ],
            "commonMistake": "Postponing care that is already indicated"
          }
        },
        {
          "id": "d",
          "text": "General stress-management coaching focused broadly on time management and study habits for the semester",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Generic coaching does not target the panic mechanism",
          "explanation": {
            "approach": "Offer generic lifestyle coaching",
            "rationale": "This does not address fear of bodily sensations driving the attacks",
            "keyIndicators": [
              "needs a panic-specific intervention"
            ],
            "commonMistake": "Choosing a non-specific intervention over an indicated protocol"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "How should the counselor sequence exposure work to address Marcus's gym avoidance?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Build a graded hierarchy that starts with lower-anxiety steps toward the gym before a full return to lifting",
          "isCorrect": true,
          "weight": 3,
          "rationale": "A graded hierarchy supports manageable, sustained exposure",
          "explanation": {
            "approach": "Use graded in vivo exposure",
            "rationale": "PCT pairs interoceptive work with a stepwise hierarchy for avoided settings",
            "keyIndicators": [
              "avoids the gym specifically",
              "motivated to resume exercise"
            ],
            "commonMistake": "Jumping straight to the hardest step"
          }
        },
        {
          "id": "b",
          "text": "Have him return to a full weightlifting session at the gym immediately during the very first treatment week",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Flooding without preparation risks reinforcing avoidance",
          "explanation": {
            "approach": "Use immediate flooding",
            "rationale": "PCT builds toward exposure gradually rather than all at once",
            "keyIndicators": [
              "single-site avoidance, six weeks duration"
            ],
            "commonMistake": "Skipping graded pacing for a full-intensity exposure"
          }
        },
        {
          "id": "c",
          "text": "Postpone any discussion of the gym until his generalized worry has fully resolved through therapy alone",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Delaying exposure leaves the avoidance target unaddressed",
          "explanation": {
            "approach": "Defer exposure indefinitely",
            "rationale": "Avoidance is a maintaining factor and should be addressed directly",
            "keyIndicators": [
              "avoidance maintains the fear cycle"
            ],
            "commonMistake": "Waiting for worry to disappear before targeting avoidance"
          }
        },
        {
          "id": "d",
          "text": "Suggest he permanently switch to a different gym across town so he never has to face the original location",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Substituting a new avoidance strategy reinforces the fear cycle",
          "explanation": {
            "approach": "Recommend avoidance substitution",
            "rationale": "Replacing one avoidance with another maintains the disorder",
            "keyIndicators": [
              "avoidance is the treatment target, not a workaround"
            ],
            "commonMistake": "Endorsing an alternative avoidance strategy"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "Marcus asks whether medication could help with his panic attacks. What is the most appropriate counselor response?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Provide general information and, with his consent, coordinate a referral to a prescriber for evaluation",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Coordinating referral respects scope and his interest",
          "explanation": {
            "approach": "Coordinate care within scope",
            "rationale": "Counselors refer to prescribers rather than recommending specific medications",
            "keyIndicators": [
              "client-initiated medication question"
            ],
            "commonMistake": "Naming a specific medication directly"
          }
        },
        {
          "id": "b",
          "text": "Tell him which specific anti-anxiety medication tends to work best for panic attacks like his",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Naming a specific medication exceeds counselor scope",
          "explanation": {
            "approach": "Recommend a specific drug",
            "rationale": "Medication selection is a prescriber decision, not a counselor's",
            "keyIndicators": [
              "outside scope of practice"
            ],
            "commonMistake": "Acting as though the counselor can prescribe"
          }
        },
        {
          "id": "c",
          "text": "Discourage him from considering medication since therapy alone should be sufficient for his symptoms",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Steering him away from a medical option overreaches",
          "explanation": {
            "approach": "Discourage medication outright",
            "rationale": "That decision belongs with the client and a prescriber, not the counselor",
            "keyIndicators": [
              "client autonomy over medical choices"
            ],
            "commonMistake": "Making a medical recommendation on the client's behalf"
          }
        },
        {
          "id": "d",
          "text": "Suggest he research medication options online independently and decide without further discussion",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Leaving him to self-research skips appropriate coordination of care",
          "explanation": {
            "approach": "Defer entirely to self-research",
            "rationale": "Proper coordination with a prescriber is preferable to self-directed searching",
            "keyIndicators": [
              "needs professional evaluation, not just information"
            ],
            "commonMistake": "Avoiding the counselor's coordination role"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "What is the most appropriate way to track Marcus's progress across sessions?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Use a brief validated panic symptom measure at regular intervals alongside a log of attack frequency",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Standardized, repeated measurement tracks change objectively",
          "explanation": {
            "approach": "Apply measurement-based tracking",
            "rationale": "Repeated standardized measures document symptom change over time",
            "keyIndicators": [
              "needs objective progress data"
            ],
            "commonMistake": "Relying only on subjective impressions each week"
          }
        },
        {
          "id": "b",
          "text": "Ask him casually at each session whether he feels like things are going better overall than before",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Informal global impressions lack a standardized benchmark",
          "explanation": {
            "approach": "Use an informal check-in only",
            "rationale": "Casual questions do not provide a consistent measurement anchor",
            "keyIndicators": [
              "no standardized data collected"
            ],
            "commonMistake": "Trusting vague self-report without a measure"
          }
        },
        {
          "id": "c",
          "text": "Wait until the full course of therapy concludes and then review his overall progress in one final session",
          "isCorrect": false,
          "weight": -1,
          "rationale": "End-only review misses opportunities for early plan adjustment",
          "explanation": {
            "approach": "Evaluate only at termination",
            "rationale": "Interim monitoring allows the plan to be adjusted sooner",
            "keyIndicators": [
              "need ongoing interim data"
            ],
            "commonMistake": "Skipping interim progress checks"
          }
        },
        {
          "id": "d",
          "text": "Track only whether he attends each scheduled session and completes his homework assignments weekly",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Attendance and homework reflect engagement, not symptom change",
          "explanation": {
            "approach": "Track adherence alone",
            "rationale": "Engagement is necessary but does not measure the actual outcome",
            "keyIndicators": [
              "process measure only"
            ],
            "commonMistake": "Equating adherence with symptom improvement"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "Marcus says he is afraid the racing heart during an attack means something is seriously wrong with him. What is the most therapeutic response?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Provide psychoeducation linking his cleared cardiac work-up to the panic cycle and normalize the sensations",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Psychoeducation reduces fear of sensations while validating his experience",
          "explanation": {
            "approach": "Normalize and educate",
            "rationale": "Linking cleared medical findings to the panic cycle reduces catastrophic fear",
            "keyIndicators": [
              "fear of dying during attacks",
              "cardiac cause already ruled out"
            ],
            "commonMistake": "Dismissing the fear without explaining the physiology"
          }
        },
        {
          "id": "b",
          "text": "Suggest he schedule another cardiology appointment to be fully certain nothing has been overlooked",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Reinforcing repeat medical checks fuels the panic and worry cycle",
          "explanation": {
            "approach": "Encourage repeat medical reassurance-seeking",
            "rationale": "This reinforces health anxiety patterns rather than addressing panic directly",
            "keyIndicators": [
              "work-up already completed and clear"
            ],
            "commonMistake": "Feeding reassurance-seeking instead of treating the fear"
          }
        },
        {
          "id": "c",
          "text": "Tell him firmly that his fear is irrational and that he simply needs to stop worrying about his heart",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Blunt dismissal without explanation can feel invalidating",
          "explanation": {
            "approach": "Confront the fear bluntly",
            "rationale": "Directive dismissal without psychoeducation can rupture rapport",
            "keyIndicators": [
              "client seeking understanding, not correction"
            ],
            "commonMistake": "Correcting without validating or educating"
          }
        },
        {
          "id": "d",
          "text": "Change the subject to his schoolwork so he does not dwell further on the frightening physical sensations",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the topic leaves the catastrophic fear unaddressed",
          "explanation": {
            "approach": "Redirect away from the fear",
            "rationale": "This bypasses a core treatment target central to panic disorder",
            "keyIndicators": [
              "central fear left unexamined"
            ],
            "commonMistake": "Avoiding emotionally central material"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "How can the counselor best respond when Marcus expresses discouragement that the attacks feel unpredictable and beyond his control?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Validate his frustration and collaboratively frame skill-building as a way to build a growing sense of control",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Validation paired with collaborative goal-setting builds engagement",
          "explanation": {
            "approach": "Validate and build self-efficacy collaboratively",
            "rationale": "Naming the frustration while framing skills as building mastery supports engagement",
            "keyIndicators": [
              "feels attacks are unpredictable",
              "motivated to get better"
            ],
            "commonMistake": "Rushing past the discouragement to give advice"
          }
        },
        {
          "id": "b",
          "text": "Reassure him confidently that the attacks will definitely stop completely within just a few weeks of therapy",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Overpromising a specific timeline risks undermining credibility",
          "explanation": {
            "approach": "Guarantee a fast outcome",
            "rationale": "Unrealistic promises can backfire if progress is slower than stated",
            "keyIndicators": [
              "discouraged but engaged client"
            ],
            "commonMistake": "Making guarantees about the pace of recovery"
          }
        },
        {
          "id": "c",
          "text": "Agree that the attacks are indeed unpredictable and that there is little he can do to influence them directly",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Agreeing with helplessness undermines the rationale for treatment",
          "explanation": {
            "approach": "Concede helplessness",
            "rationale": "This reinforces the belief that panic cannot be influenced, discouraging engagement",
            "keyIndicators": [
              "treatable condition with an evidence base"
            ],
            "commonMistake": "Adopting the client's hopeless framing"
          }
        },
        {
          "id": "d",
          "text": "Move on quickly to scheduling next week's appointment without addressing his discouraged statement",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Bypassing his discouragement misses an alliance-building moment",
          "explanation": {
            "approach": "Skip past the disclosure",
            "rationale": "Ignoring the statement misses a chance to build engagement and hope",
            "keyIndicators": [
              "unaddressed discouragement"
            ],
            "commonMistake": "Failing to respond to an emotionally relevant disclosure"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "What telehealth-specific element must the counselor address as part of informed consent with Marcus?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "The limits and risks of telehealth technology, confidentiality safeguards, and a plan for technology failures",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Telehealth consent must cover technology-specific risks and contingencies",
          "explanation": {
            "approach": "Disclose telehealth-specific consent elements",
            "rationale": "ACA standard H requires informing clients of telehealth risks and procedures",
            "keyIndicators": [
              "sessions conducted via telehealth from his dorm"
            ],
            "commonMistake": "Using the same consent process as in-person without telehealth additions"
          }
        },
        {
          "id": "b",
          "text": "A guarantee that the video platform being used is completely immune to any possible technical problems",
          "isCorrect": false,
          "weight": -2,
          "rationale": "No platform can be guaranteed free of technical failure",
          "explanation": {
            "approach": "Overstate technology reliability",
            "rationale": "Promising a guarantee misrepresents real telehealth risk",
            "keyIndicators": [
              "dorm-based internet connection"
            ],
            "commonMistake": "Making an unrealistic reliability promise"
          }
        },
        {
          "id": "c",
          "text": "An explanation that telehealth sessions cannot legally be used for anxiety-related treatment of any kind",
          "isCorrect": false,
          "weight": -1,
          "rationale": "This statement is factually inaccurate for this context",
          "explanation": {
            "approach": "Misstate telehealth eligibility",
            "rationale": "Telehealth is an appropriate modality for panic disorder treatment",
            "keyIndicators": [
              "telehealth is being used successfully already"
            ],
            "commonMistake": "Giving inaccurate information about telehealth scope"
          }
        },
        {
          "id": "d",
          "text": "A requirement that he must switch to in-person sessions before any treatment planning can begin",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Requiring an in-person switch is unnecessary and unsupported",
          "explanation": {
            "approach": "Mandate in-person transition",
            "rationale": "Telehealth is a valid modality here and does not require conversion",
            "keyIndicators": [
              "telehealth appropriate for this presentation"
            ],
            "commonMistake": "Imposing an unneeded modality requirement"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "Marcus asks the counselor to just tell him he is not \"crazy\" and to keep this diagnosis out of any written records. What is the most appropriate response?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Normalize his concern, explain accurate diagnosis supports proper care, and clarify standard documentation practices",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Honest explanation of documentation supports informed, ethical practice",
          "explanation": {
            "approach": "Educate and document accurately",
            "rationale": "Accurate records are required for sound, ethical clinical care",
            "keyIndicators": [
              "worried about stigma",
              "requests altered records"
            ],
            "commonMistake": "Agreeing to omit clinically necessary documentation"
          }
        },
        {
          "id": "b",
          "text": "Agree to leave the diagnosis out of his chart entirely since he specifically requested it be kept private",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Omitting a required diagnosis from records is improper documentation",
          "explanation": {
            "approach": "Falsify or omit the record",
            "rationale": "Accurate clinical documentation is an ethical and professional requirement",
            "keyIndicators": [
              "clinically confirmed diagnosis"
            ],
            "commonMistake": "Altering records to satisfy a client request"
          }
        },
        {
          "id": "c",
          "text": "Tell him bluntly that his request is inappropriate and that the diagnosis will be documented regardless of his concerns",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A blunt dismissal misses the chance to validate his underlying worry",
          "explanation": {
            "approach": "Dismiss the request without explanation",
            "rationale": "Addressing the stigma concern supports rapport while still documenting accurately",
            "keyIndicators": [
              "stigma-related worry behind the request"
            ],
            "commonMistake": "Responding to a reasonable worry with only a flat refusal"
          }
        },
        {
          "id": "d",
          "text": "Postpone documenting the diagnosis until he feels more comfortable with the idea over several future sessions",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Delaying accurate documentation is not appropriate practice",
          "explanation": {
            "approach": "Delay accurate documentation",
            "rationale": "Records should reflect the clinical picture in a timely, accurate manner",
            "keyIndicators": [
              "diagnosis already established"
            ],
            "commonMistake": "Postponing required documentation to manage client comfort"
          }
        }
      ]
    }
  ]
};

const D204 = {
  "id": "ncmhce-D204",
  "title": "A 16-year-old who avoids the cafeteria and dreads speaking in class",
  "category": "Anxiety",
  "difficulty": "easy",
  "primaryDiagnosis": {
    "name": "Social Anxiety Disorder",
    "code": "F40.10"
  },
  "diagnosis": {
    "name": "Social Anxiety Disorder",
    "code": "F40.10"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Social Anxiety Disorder",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Generalized Anxiety Disorder",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Separation Anxiety Disorder",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Selective Mutism",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Maya Torres, a 16-year-old high school sophomore, is referred to the school-based counseling program by her English teacher, who noticed Maya eats lunch alone in a bathroom stall and asked to be excused from an upcoming class presentation.",
    "session1": "Maya reports that for over a year she has felt intense fear of being judged or embarrassed in front of peers, worrying her voice will shake or her face will turn red when called on in class. She avoids the cafeteria, eating lunch in a quiet stairwell instead, and has skipped every school dance and pep rally this year.",
    "session2": "She says she recognizes the fear is stronger than the situation calls for, and that it has cost her a chance to join the yearbook club because meetings involve introducing herself to new people. In familiar one-on-one settings, like talking with her older cousin or her school counselor, she reports feeling completely at ease."
  },
  "diagnosticRationale": "Maya shows marked, out-of-proportion fear of scrutiny across multiple social and performance situations (cafeteria, class speaking, school events) present for over a year, with recognition that the fear is excessive and active avoidance causing functional impairment (missed club membership, social withdrawal), meeting DSM-5-TR criteria for Social Anxiety Disorder; the situational specificity and intact comfort in familiar one-on-one settings argue against Generalized Anxiety Disorder, Separation Anxiety Disorder, and Selective Mutism.",
  "references": [
    {
      "id": "R1",
      "source": "DSM-5-TR",
      "detail": "SAD Criterion A-C: marked fear of scrutiny in social situations, avoidance, 6+ months, out of proportion"
    },
    {
      "id": "R2",
      "source": "APA CPG",
      "detail": "Anxiety disorders guideline: CBT with graded exposure as first-line psychotherapy"
    },
    {
      "id": "R3",
      "source": "Hays (Assessment)",
      "detail": "Structured clinical interview procedures for adolescent anxiety presentations"
    },
    {
      "id": "R4",
      "source": "ACA Code of Ethics",
      "detail": "B.5.: confidentiality and informed consent for minors; involving parents/guardians appropriately"
    },
    {
      "id": "R5",
      "source": "Barlow PCT",
      "detail": "CBT model applying graded exposure hierarchies to feared social situations"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "What should the counselor confirm first to anchor a Social Anxiety Disorder diagnosis at intake?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "That the fear of scrutiny occurs across multiple social situations, has lasted six months or more, and impairs functioning",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Duration, breadth, and impairment anchor the diagnosis",
          "explanation": {
            "approach": "Confirm the diagnostic threshold",
            "rationale": "DSM-5-TR requires marked fear across social situations lasting 6+ months with impairment",
            "keyIndicators": [
              "over a year of symptoms",
              "cafeteria and class avoidance"
            ],
            "commonMistake": "Diagnosing from a single avoided situation"
          }
        },
        {
          "id": "b",
          "text": "That she can name the one specific classmate she believes is most likely to judge or embarrass her",
          "isCorrect": false,
          "weight": 0,
          "rationale": "A specific target person is not required for the diagnosis",
          "explanation": {
            "approach": "Target-person hunting",
            "rationale": "The fear is of scrutiny generally, not one individual",
            "keyIndicators": [
              "generalized fear of judgment"
            ],
            "commonMistake": "Treating one feared peer as the diagnostic test"
          }
        },
        {
          "id": "c",
          "text": "That a parent or guardian has also independently observed and reported the same pattern of social avoidance at home",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Collateral report is helpful but not required to anchor the diagnosis",
          "explanation": {
            "approach": "Over-weighting collateral confirmation",
            "rationale": "Self-report of criteria is sufficient to begin the diagnostic picture",
            "keyIndicators": [
              "no collateral gathered yet"
            ],
            "commonMistake": "Requiring parent confirmation before assessing criteria"
          }
        },
        {
          "id": "d",
          "text": "That her fear has grown noticeably more intense this month compared to when it first began over a year ago",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Worsening trajectory is not a diagnostic requirement",
          "explanation": {
            "approach": "Trajectory framing",
            "rationale": "Severity trend is not part of the Criterion A-C threshold",
            "keyIndicators": [
              "stable, chronic pattern"
            ],
            "commonMistake": "Demanding recent escalation to diagnose"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "What additional history is most important to gather to avoid misattributing Maya’s presentation?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Whether her avoidance is limited to social/performance situations or also includes fear of separating from caregivers",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Clarifying the object of fear separates social anxiety from separation anxiety",
          "explanation": {
            "approach": "Clarify the focus of the fear",
            "rationale": "SAD centers on scrutiny by others, not separation from attachment figures",
            "keyIndicators": [
              "comfort with cousin and counselor one-on-one"
            ],
            "commonMistake": "Assuming any school avoidance is separation-driven"
          }
        },
        {
          "id": "b",
          "text": "A complete account of her academic grades in every subject over the past three full years of school",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Exhaustive grade history is low yield for this differential",
          "explanation": {
            "approach": "Academic cataloging",
            "rationale": "It does not clarify the diagnostic picture",
            "keyIndicators": [
              "low-yield detail"
            ],
            "commonMistake": "Collecting data that does not inform the differential"
          }
        },
        {
          "id": "c",
          "text": "A detailed list of every extracurricular activity she has ever considered joining since starting high school",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A full activity inventory is not the priority rule-out",
          "explanation": {
            "approach": "Activity cataloging",
            "rationale": "It does not distinguish among anxiety differentials",
            "keyIndicators": [
              "tangential to diagnosis"
            ],
            "commonMistake": "Prioritizing breadth over targeted differential questions"
          }
        },
        {
          "id": "d",
          "text": "Whether she has ever completely stopped speaking in specific settings while speaking normally in others",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Worth screening but secondary since she speaks normally one-on-one",
          "explanation": {
            "approach": "Selective mutism screen",
            "rationale": "She does speak in familiar settings, making this lower priority",
            "keyIndicators": [
              "speaks comfortably with cousin and counselor"
            ],
            "commonMistake": "Over-weighting a rule-out already partly answered"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "Given that Maya is a 16-year-old seen through the school, what is an essential intake step?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Review informed consent with Maya and coordinate appropriate parent/guardian notification per school and state policy",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Minors require guardian involvement alongside the client’s assent",
          "explanation": {
            "approach": "Establish informed consent properly",
            "rationale": "ACA B.5. requires balancing minor assent with guardian involvement",
            "keyIndicators": [
              "minor client",
              "school-based referral"
            ],
            "commonMistake": "Treating the minor’s consent as fully sufficient alone"
          }
        },
        {
          "id": "b",
          "text": "Proceed with counseling exactly as with an adult client, since Maya is old enough to consent to her own care",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Skipping guardian involvement ignores minor consent requirements",
          "explanation": {
            "approach": "Adult-consent framing",
            "rationale": "Minors generally require guardian involvement in consent",
            "keyIndicators": [
              "16-year-old client"
            ],
            "commonMistake": "Applying adult consent standards to a minor"
          }
        },
        {
          "id": "c",
          "text": "Wait to begin any counseling contact until a full written consent form has been mailed home and returned by post",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Delaying all contact is unnecessarily rigid for a routine referral",
          "explanation": {
            "approach": "Rigid procedural delay",
            "rationale": "School protocols typically allow prompt, documented consent processes",
            "keyIndicators": [
              "routine teacher referral"
            ],
            "commonMistake": "Confusing thoroughness with unnecessary delay"
          }
        },
        {
          "id": "d",
          "text": "Ask Maya to keep the counseling contact private from her parents so she feels free to speak openly at school",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Concealing services from guardians conflicts with consent obligations",
          "explanation": {
            "approach": "Conceal from guardians",
            "rationale": "Appropriate guardian notification is part of ethical practice with minors",
            "keyIndicators": [
              "minor requiring guardian involvement"
            ],
            "commonMistake": "Prioritizing secrecy over proper consent procedure"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "Which finding best distinguishes Maya’s presentation as Social Anxiety Disorder rather than Generalized Anxiety Disorder?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Her fear and avoidance are specifically tied to social and performance situations rather than a broad range of everyday worries",
          "isCorrect": true,
          "weight": 3,
          "rationale": "A focused social/performance fear points to SAD over diffuse GAD worry",
          "explanation": {
            "approach": "Compare the focus of the anxiety",
            "rationale": "SAD centers on scrutiny; GAD involves excessive worry across many domains",
            "keyIndicators": [
              "cafeteria, class speaking, school events"
            ],
            "commonMistake": "Labeling any teen anxiety as generalized worry"
          }
        },
        {
          "id": "b",
          "text": "The fact that she reports feeling anxious on most days rather than only occasionally during the school week",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Frequency alone does not distinguish the two disorders",
          "explanation": {
            "approach": "Frequency framing",
            "rationale": "Both disorders can involve near-daily anxiety; focus is the key differentiator",
            "keyIndicators": [
              "daily anticipatory anxiety"
            ],
            "commonMistake": "Using frequency instead of content to differentiate"
          }
        },
        {
          "id": "c",
          "text": "The observation that her anxiety is somewhat out of proportion to the actual likelihood that peers are judging her",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Disproportionate fear is a shared SAD/GAD feature, not a distinguishing one",
          "explanation": {
            "approach": "Proportionality framing",
            "rationale": "Excessive fear appears in several anxiety disorders, so it does not differentiate",
            "keyIndicators": [
              "excessive fear noted"
            ],
            "commonMistake": "Treating proportionality as diagnosis-specific"
          }
        },
        {
          "id": "d",
          "text": "The likelihood that her anxiety symptoms will improve naturally once she graduates and leaves the high school environment",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Anticipated future course does not define the current differential",
          "explanation": {
            "approach": "Prognosis framing",
            "rationale": "Future course is not a Criterion-based differentiator",
            "keyIndicators": [
              "uncertain future trajectory"
            ],
            "commonMistake": "Diagnosing from anticipated outcome rather than present criteria"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "What safety-related step is still appropriate even though Maya’s presentation shows no indication of risk?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Briefly and routinely screen for mood symptoms and any thoughts of self-harm as part of a complete intake assessment",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Routine screening is standard even when risk appears low",
          "explanation": {
            "approach": "Complete the standard intake screen",
            "rationale": "A thorough assessment routinely includes a brief safety screen",
            "keyIndicators": [
              "no risk indicators reported",
              "thorough intake still needed"
            ],
            "commonMistake": "Skipping routine screening because risk seems unlikely"
          }
        },
        {
          "id": "b",
          "text": "Skip any mention of mood or self-harm entirely since her presentation is clearly limited to social anxiety alone",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Omitting a routine safety screen is poor practice regardless of presenting concern",
          "explanation": {
            "approach": "Assume no screen is needed",
            "rationale": "A complete intake always includes a baseline safety check",
            "keyIndicators": [
              "presenting concern looks focal"
            ],
            "commonMistake": "Assuming a clear presentation means no screening is needed"
          }
        },
        {
          "id": "c",
          "text": "Immediately involve crisis services as a precaution even though nothing in the interview suggests any current risk",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Invoking crisis services without indicators is disproportionate",
          "explanation": {
            "approach": "Over-escalate",
            "rationale": "Crisis response should match actual risk indicators, which are absent here",
            "keyIndicators": [
              "no risk indicators present"
            ],
            "commonMistake": "Escalating response beyond what the data supports"
          }
        },
        {
          "id": "d",
          "text": "Postpone any safety-related questions until several sessions of rapport-building have occurred with Maya",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Delaying a routine screen unnecessarily removes a standard intake element",
          "explanation": {
            "approach": "Delay for rapport",
            "rationale": "A brief, routine screen belongs at intake, not deferred indefinitely",
            "keyIndicators": [
              "standard intake practice"
            ],
            "commonMistake": "Postponing routine screening past the initial assessment"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "What is the most appropriate first-line, within-scope treatment recommendation for Maya?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Offer cognitive behavioral therapy with graded exposure to feared social situations such as the cafeteria and class speaking",
          "isCorrect": true,
          "weight": 3,
          "rationale": "CBT with graded exposure is first-line for social anxiety",
          "explanation": {
            "approach": "Match guideline to presentation",
            "rationale": "APA CPG identifies CBT with exposure as first-line for anxiety disorders",
            "keyIndicators": [
              "avoidance of specific situations",
              "adolescent client"
            ],
            "commonMistake": "Defaulting to medication as the first recommendation"
          }
        },
        {
          "id": "b",
          "text": "Recommend that she begin taking an anti-anxiety medication daily and coordinate the specific dosage herself",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Prescribing and dosing is outside counselor scope",
          "explanation": {
            "approach": "Prescribe medication",
            "rationale": "Counselors do not prescribe or set dosages",
            "keyIndicators": [
              "no prescriptive authority"
            ],
            "commonMistake": "Acting outside scope of practice"
          }
        },
        {
          "id": "c",
          "text": "Suggest she simply avoid the situations that make her anxious until she naturally feels ready to face them on her own",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Encouraging continued avoidance maintains the disorder",
          "explanation": {
            "approach": "Endorse avoidance",
            "rationale": "Avoidance reinforces social anxiety rather than treating it",
            "keyIndicators": [
              "avoidance is the core problem"
            ],
            "commonMistake": "Reinforcing the very pattern that needs to change"
          }
        },
        {
          "id": "d",
          "text": "Wait several months to see whether her anxiety symptoms resolve naturally before considering any formal treatment plan",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Watchful waiting under-treats a year-long, impairing pattern",
          "explanation": {
            "approach": "Watchful waiting",
            "rationale": "A chronic, impairing presentation warrants active treatment now",
            "keyIndicators": [
              "over a year of impairment"
            ],
            "commonMistake": "Delaying indicated care for a clear presentation"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "How should the counselor structure the exposure component of treatment for Maya?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Build a graded hierarchy of feared situations, starting with a lower-anxiety step and progressing collaboratively to harder ones",
          "isCorrect": true,
          "weight": 3,
          "rationale": "A graded hierarchy is the standard exposure structure",
          "explanation": {
            "approach": "Build a graded exposure hierarchy",
            "rationale": "Exposure-based CBT sequences situations from easiest to hardest",
            "keyIndicators": [
              "multiple feared situations of varying intensity"
            ],
            "commonMistake": "Starting with the most feared situation first"
          }
        },
        {
          "id": "b",
          "text": "Have her give a full class presentation in front of the entire school as the very first exposure exercise",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Starting at the top of the hierarchy risks flooding and dropout",
          "explanation": {
            "approach": "Flood with the hardest item first",
            "rationale": "Beginning at peak difficulty undermines graded exposure principles",
            "keyIndicators": [
              "most feared situation"
            ],
            "commonMistake": "Skipping graded pacing entirely"
          }
        },
        {
          "id": "c",
          "text": "Focus first on lengthy discussion of her childhood experiences before introducing any exposure exercises",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Extended historical exploration delays the indicated exposure work",
          "explanation": {
            "approach": "Lead with history-taking",
            "rationale": "CBT for SAD prioritizes present-focused exposure over lengthy history review",
            "keyIndicators": [
              "clear present-day target behaviors"
            ],
            "commonMistake": "Substituting history review for active treatment"
          }
        },
        {
          "id": "d",
          "text": "Encourage her to wait until her anxiety naturally decreases before attempting any of the feared situations",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Waiting for anxiety to subside first reverses exposure logic",
          "explanation": {
            "approach": "Mood-dependent action",
            "rationale": "Exposure works by approaching feared situations before anxiety fully subsides",
            "keyIndicators": [
              "avoidance maintains the fear"
            ],
            "commonMistake": "Letting anxiety level gate behavioral steps"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "Maya’s mother asks the counselor how she can help at home. What is the most appropriate counselor action?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "With Maya’s consent, coach the mother to encourage gradual approach rather than accommodating avoidance of feared situations",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Reducing family accommodation supports exposure-based progress",
          "explanation": {
            "approach": "Involve the caregiver appropriately",
            "rationale": "Coaching caregivers to support approach behavior reinforces CBT gains",
            "keyIndicators": [
              "parent asking how to help",
              "avoidance pattern"
            ],
            "commonMistake": "Leaving the caregiver with no concrete role"
          }
        },
        {
          "id": "b",
          "text": "Advise the mother to write excuse notes so Maya can be exempted from any class presentations for the rest of the year",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Facilitating avoidance undermines treatment",
          "explanation": {
            "approach": "Facilitate avoidance",
            "rationale": "Accommodating avoidance reinforces the disorder rather than treating it",
            "keyIndicators": [
              "ongoing avoidance pattern"
            ],
            "commonMistake": "Supporting the exact behavior treatment targets for change"
          }
        },
        {
          "id": "c",
          "text": "Tell the mother that her involvement is unnecessary and that this is entirely a matter for Maya to work through alone",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Dismissing the caregiver misses a useful support resource",
          "explanation": {
            "approach": "Exclude the caregiver",
            "rationale": "Appropriately involved caregivers can reinforce treatment progress",
            "keyIndicators": [
              "caregiver willing to help"
            ],
            "commonMistake": "Declining a helpful support resource"
          }
        },
        {
          "id": "d",
          "text": "Suggest the mother closely monitor and report back on every social interaction Maya has throughout each school day",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Excessive monitoring can increase self-consciousness and undermine autonomy",
          "explanation": {
            "approach": "Over-monitor",
            "rationale": "Constant surveillance can heighten anxiety rather than reduce it",
            "keyIndicators": [
              "adolescent autonomy needs"
            ],
            "commonMistake": "Recommending intrusive oversight instead of graded support"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "How should the counselor track whether Maya’s treatment is actually working over time?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Use a validated anxiety measure at regular intervals alongside tracking her completion of hierarchy steps",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Standardized measurement plus behavioral tracking guides care",
          "explanation": {
            "approach": "Use repeated, standardized measurement",
            "rationale": "Structured assessment procedures support monitoring progress over time",
            "keyIndicators": [
              "need objective tracking of exposure progress"
            ],
            "commonMistake": "Relying on impressions alone"
          }
        },
        {
          "id": "b",
          "text": "Ask her at each session whether she generally feels things are going better than before without further detail",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A vague global impression lacks a standardized benchmark",
          "explanation": {
            "approach": "Informal check-in only",
            "rationale": "Unstructured self-report is a weaker basis for tracking progress",
            "keyIndicators": [
              "no objective anchor"
            ],
            "commonMistake": "Trusting unstandardized impressions alone"
          }
        },
        {
          "id": "c",
          "text": "Wait until the full course of therapy has ended and then evaluate her overall response in a single final review",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Reviewing only at the end misses the chance to adjust the plan early",
          "explanation": {
            "approach": "Terminal evaluation only",
            "rationale": "Interim monitoring allows timely adjustments to the exposure hierarchy",
            "keyIndicators": [
              "need for interim data"
            ],
            "commonMistake": "Skipping interim progress checks"
          }
        },
        {
          "id": "d",
          "text": "Track only whether Maya attends her scheduled sessions on time each week without assessing symptom change",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Attendance is necessary but does not measure symptom change",
          "explanation": {
            "approach": "Adherence proxy",
            "rationale": "Attendance alone does not capture whether anxiety is decreasing",
            "keyIndicators": [
              "process versus outcome"
            ],
            "commonMistake": "Mistaking attendance for treatment outcome"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "How can the counselor best respond when Maya says she will \"never\" be able to speak in class without embarrassing herself?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Validate how difficult it feels right now while gently exploring the evidence for and against that all-or-nothing prediction",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Validation paired with gentle cognitive exploration addresses the distortion collaboratively",
          "explanation": {
            "approach": "Validate and gently examine the thought",
            "rationale": "Collaborative examination of catastrophic predictions is a core CBT skill",
            "keyIndicators": [
              "all-or-nothing prediction",
              "expressed distress"
            ],
            "commonMistake": "Either only sympathizing or immediately disputing"
          }
        },
        {
          "id": "b",
          "text": "Firmly tell her that her prediction is completely irrational and list several clear reasons why she is simply wrong",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Blunt confrontation without validation can feel invalidating",
          "explanation": {
            "approach": "Confront the cognition directly",
            "rationale": "Leading with confrontation risks rupturing the alliance",
            "keyIndicators": [
              "adolescent client",
              "fragile self-view"
            ],
            "commonMistake": "Disputing before validating the feeling"
          }
        },
        {
          "id": "c",
          "text": "Agree that speaking in class probably will go badly for her and suggest she keep requesting to be excused from it",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Agreeing with the catastrophic prediction reinforces avoidance",
          "explanation": {
            "approach": "Validate the distortion",
            "rationale": "Endorsing the fear reinforces avoidance rather than treating it",
            "keyIndicators": [
              "cognitive distortion present"
            ],
            "commonMistake": "Colluding with the client’s catastrophic belief"
          }
        },
        {
          "id": "d",
          "text": "Change the subject to something lighter so the session does not dwell on an uncomfortable topic for too long",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the topic leaves the core belief unaddressed",
          "explanation": {
            "approach": "Topic redirection",
            "rationale": "Avoidance in-session bypasses a central treatment target",
            "keyIndicators": [
              "unaddressed core belief"
            ],
            "commonMistake": "Sidestepping emotionally central material"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "Maya hesitates and says she is not sure counseling will actually change how people see her. What is the most therapeutic response?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Normalize her doubt as common early in treatment and collaboratively set one small, achievable exposure goal to test it",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Normalizing doubt and testing it behaviorally builds engagement and hope",
          "explanation": {
            "approach": "Build engagement through a small collaborative test",
            "rationale": "A small success helps counter doubt with direct experience",
            "keyIndicators": [
              "expressed skepticism",
              "early in treatment"
            ],
            "commonMistake": "Arguing her out of the doubt verbally"
          }
        },
        {
          "id": "b",
          "text": "Promise her with certainty that treatment will completely change how her classmates see her within a few weeks",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Overpromising a specific outcome risks damaging credibility later",
          "explanation": {
            "approach": "Guarantee outcomes",
            "rationale": "Unrealistic guarantees can backfire when progress is gradual",
            "keyIndicators": [
              "skeptical client"
            ],
            "commonMistake": "Making promises that cannot be kept"
          }
        },
        {
          "id": "c",
          "text": "Accept her doubt as likely accurate and shift the focus toward helping her simply cope with ongoing avoidance instead",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Conceding to the doubt abandons a treatable target",
          "explanation": {
            "approach": "Concede to doubt",
            "rationale": "Agreeing with hopeless framing abandons active treatment",
            "keyIndicators": [
              "therapeutic pessimism"
            ],
            "commonMistake": "Adopting the client’s doubtful stance as fact"
          }
        },
        {
          "id": "d",
          "text": "Explain in detail the neuroscience research behind exposure therapy to convince her scientifically that it works",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A lengthy scientific lecture rarely shifts an adolescent’s doubt as effectively as direct experience",
          "explanation": {
            "approach": "Didactic persuasion",
            "rationale": "Experiential success tends to build engagement more than lecturing",
            "keyIndicators": [
              "adolescent client",
              "emotional reasoning"
            ],
            "commonMistake": "Substituting facts for experiential evidence"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "When reviewing informed consent and confidentiality with Maya and her mother, what must the counselor be sure they both understand?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "The general limits of confidentiality in the school setting, including when safety concerns would require disclosure",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Confidentiality limits must be disclosed to both the minor and guardian up front",
          "explanation": {
            "approach": "Clarify consent and confidentiality limits",
            "rationale": "ACA guidance requires explaining confidentiality limits to minors and guardians",
            "keyIndicators": [
              "minor client",
              "school-based setting"
            ],
            "commonMistake": "Omitting the limits of confidentiality"
          }
        },
        {
          "id": "b",
          "text": "That everything Maya shares in session will always remain completely private from her mother under every circumstance",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Promising absolute confidentiality from a guardian misstates the actual limits",
          "explanation": {
            "approach": "Overpromise privacy from the guardian",
            "rationale": "Guardian involvement and safety exceptions limit absolute confidentiality",
            "keyIndicators": [
              "guardian consent role"
            ],
            "commonMistake": "Guaranteeing unconditional secrecy from a parent"
          }
        },
        {
          "id": "c",
          "text": "That the school counselor alone will decide all treatment goals without needing input from Maya or her mother",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Goals should be collaborative, not unilaterally imposed",
          "explanation": {
            "approach": "Clinician-imposed goals",
            "rationale": "Informed consent includes collaborative goal-setting with client and guardian",
            "keyIndicators": [
              "collaborative planning expected"
            ],
            "commonMistake": "Removing the client and family from planning"
          }
        },
        {
          "id": "d",
          "text": "That Maya must complete an entire semester of sessions once she agrees to begin, regardless of how she later feels",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Consent is ongoing and can be withdrawn",
          "explanation": {
            "approach": "Mandate completion",
            "rationale": "Consent remains revocable throughout treatment",
            "keyIndicators": [
              "right to discontinue"
            ],
            "commonMistake": "Treating initial consent as binding for a fixed duration"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "Maya asks the counselor not to tell her mother any specifics about what they discuss in their school sessions. What is the most appropriate response?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Explain that general updates may go to her mother per the consent agreement, while routine session content stays private absent safety concerns",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Balancing minor privacy with guardian involvement per the consent agreement is appropriate",
          "explanation": {
            "approach": "Balance minor privacy with guardian rights",
            "rationale": "Ethical practice with minors balances confidentiality with appropriate guardian involvement",
            "keyIndicators": [
              "minor requesting privacy",
              "guardian consent role"
            ],
            "commonMistake": "Either promising full secrecy or disclosing everything without limits"
          }
        },
        {
          "id": "b",
          "text": "Agree to keep every detail of their sessions completely secret from her mother for the rest of the current school year without exception",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Promising total secrecy from the consenting guardian conflicts with consent obligations",
          "explanation": {
            "approach": "Promise total secrecy",
            "rationale": "It misrepresents the actual limits established at consent",
            "keyIndicators": [
              "guardian consent on file"
            ],
            "commonMistake": "Making a confidentiality promise the counselor cannot ethically keep"
          }
        },
        {
          "id": "c",
          "text": "Tell Maya that her mother will automatically receive a full written transcript of everything discussed in each individual session",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Full transcripts exceed the appropriate level of disclosure for routine sessions",
          "explanation": {
            "approach": "Over-disclose routine content",
            "rationale": "Routine session content does not require full disclosure absent safety concerns",
            "keyIndicators": [
              "no safety concern present"
            ],
            "commonMistake": "Disclosing far more than necessary or appropriate"
          }
        },
        {
          "id": "d",
          "text": "Avoid answering her question directly and change the subject so that today’s session can continue without addressing it",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Dodging the question undermines clear informed consent",
          "explanation": {
            "approach": "Evade the question",
            "rationale": "Confidentiality limits should be explained clearly, not avoided",
            "keyIndicators": [
              "direct question about limits"
            ],
            "commonMistake": "Failing to give a clear, honest answer about confidentiality"
          }
        }
      ]
    }
  ]
};

const D205 = {
  "id": "ncmhce-D205",
  "title": "Sad and discouraged three weeks after a layoff",
  "category": "Trauma",
  "difficulty": "easy",
  "primaryDiagnosis": {
    "name": "Adjustment Disorder, with Depressed Mood",
    "code": "F43.21"
  },
  "diagnosis": {
    "name": "Adjustment Disorder, with Depressed Mood",
    "code": "F43.21"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Adjustment Disorder, with Depressed Mood",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Major Depressive Disorder, Mild",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Posttraumatic Stress Disorder",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Acute Stress Disorder",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Marcus Whitfield, a 39-year-old father of two, presents to outpatient counseling through his former employer's EAP three weeks after being laid off from his assembly-line supervisor role at an auto-parts plant. He reports feeling sad, discouraged, and 'stuck,' with trouble falling asleep and little motivation to do much beyond searching for work.",
    "session1": "He describes lying awake most nights running through bills and job applications, waking unrefreshed, and losing interest in his usual pickup basketball games, though he still gets his kids ready for school, cooks dinner, and has submitted applications to six employers this week. He denies any change in appetite and says his mood lifts somewhat when he is with his children.",
    "session2": "He denies any nightmares, intrusive memories, or flashbacks about the layoff, any avoidance of his old workplace or former coworkers, and any hypervigilance or exaggerated startle response. He denies current thoughts of self-harm or suicide, says he feels embarrassed but not hopeless, and states he believes 'this will get better once I land something new.'"
  },
  "diagnosticRationale": "Marcus's sadness, discouragement, sleep disruption, and reduced motivation began within three weeks of an identifiable stressor (the layoff) and are causing distress without meeting full DSM-5-TR criteria for a major depressive episode, since he denies appetite change, guilt, and enough concurrent symptoms to reach the five-symptom threshold, and without the trauma exposure or the intrusion, avoidance, or hyperarousal cluster required for PTSD or Acute Stress Disorder, which together support Adjustment Disorder, with Depressed Mood.",
  "references": [
    {
      "id": "R1",
      "source": "DSM-5-TR",
      "detail": "Adjustment Disorder Criteria A-C: onset within 3 months of an identifiable stressor, with distress or impairment out of proportion, not meeting criteria for another disorder"
    },
    {
      "id": "R2",
      "source": "DSM-5-TR",
      "detail": "MDD Criterion A requires 5+ symptoms present nearly every day for 2+ weeks; subthreshold presentations do not meet the episode threshold"
    },
    {
      "id": "R3",
      "source": "DSM-5-TR",
      "detail": "PTSD/Acute Stress Disorder Criterion A requires exposure to actual or threatened death, serious injury, or sexual violence, plus intrusion, avoidance, and arousal clusters"
    },
    {
      "id": "R4",
      "source": "ACA Code of Ethics",
      "detail": "A.2. and B.1.: informed consent and confidentiality limits, including boundaries on releasing information to a third-party EAP referral source"
    },
    {
      "id": "R5",
      "source": "C-SSRS",
      "detail": "Structured, routine suicide-risk screening at intake regardless of the apparent severity of the presenting concern"
    },
    {
      "id": "R6",
      "source": "Corey (Theory & Practice)",
      "detail": "Brief, present-focused, solution-focused and problem-solving approaches are indicated for stressor-reactive presentations"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "What is the most important timeline detail to establish during Marcus's intake?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "That his sadness, sleep trouble, and low motivation began within three months of the layoff and track closely with it",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Onset tied to the stressor anchors the diagnosis",
          "explanation": {
            "approach": "Confirm stressor-linked onset",
            "rationale": "DSM-5-TR requires symptom onset within 3 months of an identifiable stressor",
            "keyIndicators": [
              "symptoms began three weeks post-layoff",
              "clear precipitant"
            ],
            "commonMistake": "Skipping the timeline link between stressor and symptoms"
          }
        },
        {
          "id": "b",
          "text": "Whether any of his first-degree relatives have ever been formally diagnosed with a depressive or anxiety disorder",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Family history is secondary to onset timing",
          "explanation": {
            "approach": "Heredity framing",
            "rationale": "Family history informs risk, not the current diagnostic threshold",
            "keyIndicators": [
              "no family history collected yet"
            ],
            "commonMistake": "Requiring family history before establishing onset"
          }
        },
        {
          "id": "c",
          "text": "A full chronological inventory of every position he has held across his entire manufacturing career to date",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Exhaustive work history is low yield here",
          "explanation": {
            "approach": "Vocational cataloging",
            "rationale": "It does not clarify the stressor-symptom link",
            "keyIndicators": [
              "one relevant, recent layoff"
            ],
            "commonMistake": "Collecting low-yield background instead of the timeline"
          }
        },
        {
          "id": "d",
          "text": "How he would numerically rate the layoff's severity compared with other stressful events earlier in his life",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Comparative severity ratings are not diagnostic",
          "explanation": {
            "approach": "Severity ranking",
            "rationale": "Relative ranking does not establish onset or impairment",
            "keyIndicators": [
              "subjective comparison only"
            ],
            "commonMistake": "Substituting a rating scale for timeline history"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "Given Marcus denies feeling hopeless, what is still the appropriate intake safety step?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Complete a structured suicide-risk screen as a routine part of intake regardless of how mild his presentation seems",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Routine structured screening applies to every intake",
          "explanation": {
            "approach": "Screen routinely, not selectively",
            "rationale": "C-SSRS-style screening is standard practice even for lower-risk presentations",
            "keyIndicators": [
              "denies SI but distress is present",
              "new client intake"
            ],
            "commonMistake": "Skipping risk screening because the case looks straightforward"
          }
        },
        {
          "id": "b",
          "text": "Skip any direct risk questions today since he appears to be coping well and clearly denies feeling hopeless",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Omitting screening based on appearance is unsafe practice",
          "explanation": {
            "approach": "Assume safety from presentation",
            "rationale": "Screening should not be waived based on impression alone",
            "keyIndicators": [
              "distress present at intake"
            ],
            "commonMistake": "Judging risk by demeanor instead of asking directly"
          }
        },
        {
          "id": "c",
          "text": "Wait until a later session, once more rapport has been built, before asking him any direct safety-related questions",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Deferring routine screening delays needed data",
          "explanation": {
            "approach": "Delay for rapport",
            "rationale": "Standard screening belongs at intake, not a later session",
            "keyIndicators": [
              "first session with a new client"
            ],
            "commonMistake": "Postponing baseline safety screening"
          }
        },
        {
          "id": "d",
          "text": "Have him complete a written pledge stating he will contact the office before acting on any distressing thoughts",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A pledge is not a substitute for structured screening",
          "explanation": {
            "approach": "No-harm pledge",
            "rationale": "Pledges are not evidence-based and skip real assessment",
            "keyIndicators": [
              "needs structured screening, not a promise"
            ],
            "commonMistake": "Using a written pledge instead of screening"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "What functional information is most useful to gather to gauge the impact of Marcus's symptoms?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "How his sleep, mood, and motivation are affecting his job search and his ability to care for his two children",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Functional impact across domains reflects impairment",
          "explanation": {
            "approach": "Assess impairment across roles",
            "rationale": "DSM-5-TR ties adjustment disorder to distress or impairment in functioning",
            "keyIndicators": [
              "still job-searching and parenting",
              "some motivation loss"
            ],
            "commonMistake": "Focusing only on mood words instead of functional impact"
          }
        },
        {
          "id": "b",
          "text": "A detailed accounting of his monthly household budget so the counselor can calculate his exact severance runway",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Budget arithmetic is not a clinical priority",
          "explanation": {
            "approach": "Financial accounting",
            "rationale": "It does not clarify diagnostic impairment",
            "keyIndicators": [
              "financial stress is a stressor, not the target data"
            ],
            "commonMistake": "Treating budgeting detail as clinical assessment"
          }
        },
        {
          "id": "c",
          "text": "A description of the exact machinery and daily tasks he performed in his prior assembly-line supervisor position",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Job-task detail does not inform current impairment",
          "explanation": {
            "approach": "Occupational task inventory",
            "rationale": "It is low yield for gauging present functioning",
            "keyIndicators": [
              "past role detail, not current impact"
            ],
            "commonMistake": "Gathering job description detail over functional impact"
          }
        },
        {
          "id": "d",
          "text": "Whether he believes his former employer treated him fairly when the decision to lay him off was made",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Fairness perceptions do not measure impairment",
          "explanation": {
            "approach": "Fairness appraisal",
            "rationale": "It is tangential to functional assessment",
            "keyIndicators": [
              "opinion about employer, not functioning"
            ],
            "commonMistake": "Exploring grievance instead of functional impact"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "Which finding best supports Adjustment Disorder over Major Depressive Disorder in Marcus's case?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "His symptom count and duration fall short of the five concurrent symptoms nearly daily for two weeks that MDD requires",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Subthreshold symptoms rule out an MDD episode",
          "explanation": {
            "approach": "Apply the MDD symptom count",
            "rationale": "He denies appetite change and guilt, leaving too few symptoms for MDD",
            "keyIndicators": [
              "denies appetite change",
              "mood lifts with his children"
            ],
            "commonMistake": "Diagnosing MDD from mood and sleep symptoms alone"
          }
        },
        {
          "id": "b",
          "text": "The fact that his distress began only after a clearly identifiable and upsetting workplace event occurred recently",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A trigger does not rule out MDD by itself",
          "explanation": {
            "approach": "Trigger equals adjustment",
            "rationale": "MDD can also follow a stressor, so this alone is not decisive",
            "keyIndicators": [
              "layoff preceded symptoms"
            ],
            "commonMistake": "Assuming any precipitant automatically means adjustment"
          }
        },
        {
          "id": "c",
          "text": "His report that he still enjoys spending time with his children and feels somewhat better when he is with them",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Preserved pleasure supports it but is not the deciding factor",
          "explanation": {
            "approach": "Anhedonia framing",
            "rationale": "Retained pleasure is supportive, but the symptom count is the key test",
            "keyIndicators": [
              "partial mood reactivity"
            ],
            "commonMistake": "Treating one preserved pleasure as the whole differential"
          }
        },
        {
          "id": "d",
          "text": "The likelihood that his current symptoms will resolve fully within about six months once he secures new work",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Expected course does not define the current episode",
          "explanation": {
            "approach": "Prognosis framing",
            "rationale": "Anticipated resolution suggests adjustment but does not itself rule out MDD",
            "keyIndicators": [
              "uncertain future course"
            ],
            "commonMistake": "Diagnosing from anticipated outcome rather than current criteria"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "Which finding best rules out PTSD or Acute Stress Disorder for Marcus?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "He denies any qualifying trauma exposure and shows no intrusion, avoidance, or hyperarousal symptoms of any kind",
          "isCorrect": true,
          "weight": 3,
          "rationale": "No Criterion A stressor or symptom cluster present",
          "explanation": {
            "approach": "Screen for the trauma criterion and clusters",
            "rationale": "PTSD/ASD require a qualifying stressor plus intrusion, avoidance, and arousal symptoms",
            "keyIndicators": [
              "no flashbacks",
              "no avoidance of the workplace",
              "no startle response"
            ],
            "commonMistake": "Treating any distressing life event as qualifying trauma exposure"
          }
        },
        {
          "id": "b",
          "text": "He was laid off only three weeks ago, which is too recent a timeframe for any trauma-related disorder to appear",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Recency alone does not rule out ASD",
          "explanation": {
            "approach": "Recency framing",
            "rationale": "Acute Stress Disorder can appear within days, so timing alone is not the rule-out",
            "keyIndicators": [
              "symptom content, not just timing, is the key test"
            ],
            "commonMistake": "Assuming trauma disorders require a longer elapsed time"
          }
        },
        {
          "id": "c",
          "text": "He is male, and trauma-related disorders are understood to occur far less often in men than in women overall",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Gender prevalence is not a valid individual rule-out",
          "explanation": {
            "approach": "Demographic assumption",
            "rationale": "Population prevalence does not rule out a diagnosis in an individual",
            "keyIndicators": [
              "case-specific symptoms are the test, not demographics"
            ],
            "commonMistake": "Using group statistics to rule out an individual diagnosis"
          }
        },
        {
          "id": "d",
          "text": "He continues to function fairly well, still applying for jobs and caring for his children day to day right now",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Preserved functioning alone does not rule out ASD",
          "explanation": {
            "approach": "Functioning framing",
            "rationale": "Some ASD presentations preserve functioning, so this is not the deciding feature",
            "keyIndicators": [
              "symptom cluster is the deciding test"
            ],
            "commonMistake": "Equating preserved functioning with an absent trauma disorder"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "What is the most appropriate first-line treatment approach for Marcus?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Brief, present-focused, solution-focused or problem-solving counseling centered on coping with the job loss",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Brief stressor-focused approaches fit adjustment disorder",
          "explanation": {
            "approach": "Match approach to a stressor-reactive presentation",
            "rationale": "Present-focused, solution-oriented work is indicated for adjustment disorders",
            "keyIndicators": [
              "clear identifiable stressor",
              "otherwise intact functioning"
            ],
            "commonMistake": "Defaulting to a lengthy trauma-processing protocol"
          }
        },
        {
          "id": "b",
          "text": "An extended trauma-processing protocol involving repeated, detailed exposure to memories of the layoff itself",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Trauma exposure work is not indicated without a trauma diagnosis",
          "explanation": {
            "approach": "Trauma-processing default",
            "rationale": "Exposure protocols target PTSD/ASD symptom clusters, which are absent here",
            "keyIndicators": [
              "no intrusion or avoidance symptoms"
            ],
            "commonMistake": "Applying trauma-focused therapy to a non-trauma presentation"
          }
        },
        {
          "id": "c",
          "text": "A recommendation that he begin taking a daily antidepressant right away before any counseling sessions start",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Recommending medication is outside counselor scope",
          "explanation": {
            "approach": "Prescribe medication",
            "rationale": "Counselors refer for medication evaluation rather than prescribing",
            "keyIndicators": [
              "no prescriptive authority"
            ],
            "commonMistake": "Acting outside scope of practice"
          }
        },
        {
          "id": "d",
          "text": "Advise him to wait and monitor his mood on his own for a couple of months before starting any formal counseling",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Watchful waiting delays indicated brief treatment",
          "explanation": {
            "approach": "Watchful waiting",
            "rationale": "Active, brief treatment is appropriate now rather than delaying care",
            "keyIndicators": [
              "current distress and some impairment"
            ],
            "commonMistake": "Delaying indicated brief treatment"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "How should the counselor and Marcus set initial treatment goals?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Collaboratively identify concrete, achievable goals tied to coping with the job loss, such as structuring his days",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Collaborative, concrete goals fit brief stressor-focused work",
          "explanation": {
            "approach": "Set collaborative, concrete goals",
            "rationale": "Solution-focused work uses specific, achievable, client-driven goals",
            "keyIndicators": [
              "client is engaged and job-searching already"
            ],
            "commonMistake": "Setting vague, counselor-imposed goals"
          }
        },
        {
          "id": "b",
          "text": "Have the counselor independently decide the full treatment plan and simply inform Marcus of it at the next visit",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Unilateral planning removes client input",
          "explanation": {
            "approach": "Clinician-imposed plan",
            "rationale": "Goal-setting should be collaborative, not dictated",
            "keyIndicators": [
              "client capable of participating"
            ],
            "commonMistake": "Excluding the client from goal-setting"
          }
        },
        {
          "id": "c",
          "text": "Focus the entire treatment plan on exploring his childhood relationship with his own father's work history",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Deep historical exploration is not the priority goal",
          "explanation": {
            "approach": "Historical exploration",
            "rationale": "It does not address the present stressor-reactive symptoms",
            "keyIndicators": [
              "current, situational presentation"
            ],
            "commonMistake": "Prioritizing depth work over present-focused goals"
          }
        },
        {
          "id": "d",
          "text": "Postpone any goal-setting until his mood has fully returned to baseline on its own without any structured plan",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Delaying goals removes an active treatment structure",
          "explanation": {
            "approach": "Delay goal-setting",
            "rationale": "Active goal-setting should begin now to guide brief treatment",
            "keyIndicators": [
              "client ready to engage"
            ],
            "commonMistake": "Waiting for spontaneous improvement instead of planning"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "Marcus asks for help finding concrete job-search and financial resources. What is the best response?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Incorporate problem-solving around concrete resources such as job-placement and financial-counseling referrals",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Concrete problem-solving supports the treatment goal",
          "explanation": {
            "approach": "Integrate practical problem-solving",
            "rationale": "Addressing the concrete stressor supports symptom resolution",
            "keyIndicators": [
              "stressor is job loss",
              "client requests practical help"
            ],
            "commonMistake": "Treating concrete resource needs as outside the counseling scope"
          }
        },
        {
          "id": "b",
          "text": "Tell him that discussing practical job-search resources is not appropriate work for a counseling session",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Refusing to engage practical needs is overly rigid",
          "explanation": {
            "approach": "Rigid scope refusal",
            "rationale": "Problem-solving around the stressor fits brief treatment for adjustment disorder",
            "keyIndicators": [
              "stressor-focused case"
            ],
            "commonMistake": "Excluding practical problem-solving entirely"
          }
        },
        {
          "id": "c",
          "text": "Personally review his resume in detail and coach him directly on interview technique during each session",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Direct career coaching exceeds the counselor's role",
          "explanation": {
            "approach": "Take on a career-coach role",
            "rationale": "Referral to appropriate resources fits scope better than direct coaching",
            "keyIndicators": [
              "specialized service better suited elsewhere"
            ],
            "commonMistake": "Substituting counselor time for specialized vocational services"
          }
        },
        {
          "id": "d",
          "text": "Redirect the conversation away from finances entirely and keep every session focused only on his sleep pattern",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Ignoring the stressor narrows treatment too much",
          "explanation": {
            "approach": "Narrow topic focus",
            "rationale": "The concrete stressor is central and should not be avoided",
            "keyIndicators": [
              "stressor drives the presentation"
            ],
            "commonMistake": "Avoiding the client's stated practical concern"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "How should the counselor monitor Marcus's course over the coming weeks?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Track his symptoms at each session and reassess if they persist or worsen well beyond the stressor resolving",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Ongoing monitoring flags a need to reassess the diagnosis",
          "explanation": {
            "approach": "Monitor course against expected resolution",
            "rationale": "Adjustment disorder symptoms typically resolve within 6 months of the stressor ending",
            "keyIndicators": [
              "recent onset",
              "expected time-limited course"
            ],
            "commonMistake": "Assuming the diagnosis is fixed with no need to reassess"
          }
        },
        {
          "id": "b",
          "text": "Assume the diagnosis will not change and stop asking about his mood once the initial treatment plan is set",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Failing to monitor risks missing a worsening course",
          "explanation": {
            "approach": "Set and forget",
            "rationale": "Ongoing monitoring is needed to catch symptoms that fail to resolve",
            "keyIndicators": [
              "need for interim tracking"
            ],
            "commonMistake": "Treating the initial diagnosis as permanently fixed"
          }
        },
        {
          "id": "c",
          "text": "Wait until the full course of sessions has ended and then evaluate his overall progress in one final review",
          "isCorrect": false,
          "weight": -1,
          "rationale": "End-only review misses a worsening course early",
          "explanation": {
            "approach": "Terminal evaluation only",
            "rationale": "Interim monitoring allows timely adjustment of the plan",
            "keyIndicators": [
              "need for interim data"
            ],
            "commonMistake": "Skipping interim check-ins"
          }
        },
        {
          "id": "d",
          "text": "Track only whether he attends sessions consistently, without asking directly about his mood or sleep pattern",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Attendance alone does not capture symptom course",
          "explanation": {
            "approach": "Adherence proxy",
            "rationale": "Attendance does not substitute for tracking actual symptoms",
            "keyIndicators": [
              "process versus outcome"
            ],
            "commonMistake": "Mistaking attendance for symptom monitoring"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "Marcus says he feels embarrassed that a layoff has hit him this hard. What is the most therapeutic response?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Validate that job loss is a significant stressor and normalize his reaction as a common, understandable response",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Validation and normalization counter self-blame",
          "explanation": {
            "approach": "Normalize and validate",
            "rationale": "Framing his reaction as a common response to a real stressor reduces shame",
            "keyIndicators": [
              "embarrassment about his reaction",
              "self-critical framing"
            ],
            "commonMistake": "Minimizing his feelings or rushing past them"
          }
        },
        {
          "id": "b",
          "text": "Agree that most people would have handled a layoff like this with far more composure and resilience than he has",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Agreeing with the self-critical comparison deepens shame",
          "explanation": {
            "approach": "Validate the self-criticism",
            "rationale": "It reinforces the belief that his reaction is abnormal",
            "keyIndicators": [
              "shame-based comparison"
            ],
            "commonMistake": "Colluding with the client's harsh self-judgment"
          }
        },
        {
          "id": "c",
          "text": "Quickly change the subject to his job-search progress so the conversation does not dwell on his feelings",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Redirecting away avoids the emotional content",
          "explanation": {
            "approach": "Topic redirection",
            "rationale": "It bypasses a feeling that is central to his distress",
            "keyIndicators": [
              "unaddressed shame"
            ],
            "commonMistake": "Avoiding emotionally significant material"
          }
        },
        {
          "id": "d",
          "text": "Tell him firmly that his embarrassment is irrational and that he has no real reason to feel that way at all",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Blunt disputation can feel invalidating",
          "explanation": {
            "approach": "Confront the feeling directly",
            "rationale": "Dismissing the feeling as irrational can rupture rapport",
            "keyIndicators": [
              "fragile early alliance"
            ],
            "commonMistake": "Disputing a feeling before validating it"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "How can the counselor best support Marcus's motivation to re-engage in activities he has pulled back from?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Collaboratively schedule a small, valued activity, like one pickup basketball game, to rebuild a sense of momentum",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Graded, valued activity rebuilds engagement",
          "explanation": {
            "approach": "Schedule a small valued activity",
            "rationale": "Pairing a manageable activity with something he values supports re-engagement",
            "keyIndicators": [
              "withdrew from basketball",
              "some motivation loss"
            ],
            "commonMistake": "Waiting for motivation to return before suggesting activity"
          }
        },
        {
          "id": "b",
          "text": "Tell him to resume his full prior schedule of activities all at once to prove to himself that he can still cope",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Too much too soon risks setting him up to fail",
          "explanation": {
            "approach": "All-at-once activation",
            "rationale": "Graded steps work better than an abrupt full return",
            "keyIndicators": [
              "currently lower energy"
            ],
            "commonMistake": "Skipping graded pacing"
          }
        },
        {
          "id": "c",
          "text": "Advise him to set activities aside completely until his mood and motivation have fully returned to normal",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Waiting on mood reverses the usual sequence",
          "explanation": {
            "approach": "Mood-dependent action",
            "rationale": "Acting before motivation fully returns tends to work better",
            "keyIndicators": [
              "motivation follows action here"
            ],
            "commonMistake": "Letting mood gate all behavior"
          }
        },
        {
          "id": "d",
          "text": "Spend the session having him list, in detail, every reason his motivation has declined since the layoff happened",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Cataloging causes delays actual behavioral change",
          "explanation": {
            "approach": "Cause cataloging",
            "rationale": "Understanding causes is useful but does not itself rebuild engagement",
            "keyIndicators": [
              "needs an action step, not just analysis"
            ],
            "commonMistake": "Substituting analysis for a concrete next step"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "What must the counselor address during informed consent given the EAP referral?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "The limits of confidentiality, including exactly what information, if any, will be shared back with the EAP or employer",
          "isCorrect": true,
          "weight": 3,
          "rationale": "EAP referrals require explicit disclosure of what is shared",
          "explanation": {
            "approach": "Clarify consent and third-party limits",
            "rationale": "ACA A.2. and B.1. require explaining confidentiality limits, including third-party referrals",
            "keyIndicators": [
              "referred through the former employer's EAP"
            ],
            "commonMistake": "Omitting the EAP disclosure limits from informed consent"
          }
        },
        {
          "id": "b",
          "text": "An assurance that everything he discusses in session will be reported back to the EAP as part of routine follow-up",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Assuming automatic reporting misstates confidentiality",
          "explanation": {
            "approach": "Overstate disclosure",
            "rationale": "Session content is not automatically shared without proper authorization",
            "keyIndicators": [
              "confidentiality still applies with an EAP referral"
            ],
            "commonMistake": "Treating an EAP referral as removing confidentiality"
          }
        },
        {
          "id": "c",
          "text": "A promise that absolutely nothing about his case will ever be disclosed to anyone under any circumstance at all",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Absolute confidentiality is not accurate",
          "explanation": {
            "approach": "Overpromise privacy",
            "rationale": "It misstates legal and ethical limits such as imminent risk",
            "keyIndicators": [
              "standard safety exceptions still apply"
            ],
            "commonMistake": "Guaranteeing unconditional secrecy"
          }
        },
        {
          "id": "d",
          "text": "A requirement that he complete the entire recommended course of sessions once he agrees to begin treatment today",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Consent is ongoing and does not bind him to completion",
          "explanation": {
            "approach": "Mandate completion",
            "rationale": "Clients retain the right to withdraw consent at any time",
            "keyIndicators": [
              "right to discontinue"
            ],
            "commonMistake": "Treating initial consent as irrevocable"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "The EAP case manager emails asking for an update on Marcus's progress. What is the appropriate action?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Decline to share any information unless Marcus has signed a specific, informed release authorizing that disclosure",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Disclosure requires a valid signed release",
          "explanation": {
            "approach": "Require a signed release before disclosing",
            "rationale": "ACA B.1. and B.3. require client authorization before sharing information with third parties",
            "keyIndicators": [
              "unsolicited third-party request",
              "no release on file yet"
            ],
            "commonMistake": "Sharing progress information without a signed release"
          }
        },
        {
          "id": "b",
          "text": "Reply immediately with a full summary of Marcus's symptoms and diagnosis since the EAP made the referral",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Disclosing without authorization breaches confidentiality",
          "explanation": {
            "approach": "Disclose without authorization",
            "rationale": "Making the referral does not itself authorize ongoing disclosure",
            "keyIndicators": [
              "no consent obtained for this disclosure"
            ],
            "commonMistake": "Assuming a referral implies open information sharing"
          }
        },
        {
          "id": "c",
          "text": "Ignore the email entirely and never respond to the EAP case manager about the request at any point going forward",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Ignoring the request avoids proper handling of it",
          "explanation": {
            "approach": "Non-response",
            "rationale": "The request should be addressed by explaining the release requirement",
            "keyIndicators": [
              "professional communication expected"
            ],
            "commonMistake": "Avoiding the issue instead of clarifying the process"
          }
        },
        {
          "id": "d",
          "text": "Ask Marcus informally in passing whether it is fine to talk to the EAP, without documenting his answer anywhere",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Informal, undocumented consent is insufficient",
          "explanation": {
            "approach": "Informal verbal consent",
            "rationale": "A documented, informed release is needed, not an undocumented verbal check-in",
            "keyIndicators": [
              "needs a proper documented release"
            ],
            "commonMistake": "Relying on undocumented verbal permission"
          }
        }
      ]
    }
  ]
};

const D206 = {
  "id": "ncmhce-D206",
  "title": "Dazed and hypervigilant three weeks after a car crash",
  "category": "Trauma",
  "difficulty": "easy",
  "primaryDiagnosis": {
    "name": "Acute Stress Disorder",
    "code": "F43.0"
  },
  "diagnosis": {
    "name": "Acute Stress Disorder",
    "code": "F43.0"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Acute Stress Disorder",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Posttraumatic Stress Disorder",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Adjustment Disorder, Unspecified",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Specific Phobia, Situational Type",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Emily Navarro, a 24-year-old dental hygienist, presents for outpatient counseling two and a half weeks after being T-boned at an intersection near her apartment while stopped at a red light. She was referred by the emergency department after treatment for minor injuries and reports intrusive memories of the crash, nightmares, and a dazed, 'unreal' feeling that comes and goes.",
    "session1": "She describes driving the long way to work every day to avoid the intersection where the crash occurred, scanning cross-traffic obsessively at every light, and startling badly at horns or screeching brakes. She has trouble concentrating on patient charts at the dental office and reports two or three nightmares about the collision each week.",
    "session2": "Emily denies any current suicidal ideation, self-harm, or substance use, and her emergency department workup showed no ongoing medical injury requiring further treatment. She is unsettled by how 'unlike herself' she feels during the dazed episodes but is motivated, has supportive family nearby, and is willing to begin trauma-focused counseling right away."
  },
  "diagnosticRationale": "Emily meets DSM-5-TR Criterion A through direct exposure to the threatened serious injury of the collision, and she reports intrusive memories, nightmares, derealization, avoidance of the intersection, hypervigilance while driving, and impaired concentration, exceeding the nine symptoms required across the intrusion, negative mood, dissociative, avoidance, and arousal clusters. Onset was within days of the crash and duration is two and a half weeks, placing her squarely inside the three-day-to-one-month Acute Stress Disorder window and short of the one-month threshold that would instead point to Posttraumatic Stress Disorder. Because her reaction includes both the qualifying traumatic exposure and the specific symptom cluster that Adjustment Disorder does not require, and because the avoidance is trauma-linked rather than a free-standing fear of driving itself, Acute Stress Disorder, F43.0, is the correct diagnosis.",
  "references": [
    {
      "id": "R1",
      "source": "DSM-5-TR",
      "detail": "ASD Criterion A exposure plus 9+ of 14 symptoms across intrusion, mood, dissociation, avoidance, arousal clusters, lasting 3 days to 1 month"
    },
    {
      "id": "R2",
      "source": "DSM-5-TR",
      "detail": "ASD is reclassified as PTSD only if the qualifying symptom cluster persists one month or longer after the trauma"
    },
    {
      "id": "R3",
      "source": "DSM-5-TR",
      "detail": "Adjustment Disorder does not require Criterion A trauma exposure or the ASD symptom cluster; used only when those criteria are unmet"
    },
    {
      "id": "R4",
      "source": "C-SSRS",
      "detail": "Structured, routine suicide risk screening is included in every trauma-focused intake regardless of presenting risk level"
    },
    {
      "id": "R5",
      "source": "ACA Code of Ethics",
      "detail": "A.1.a and B.1.c: client welfare, informed consent, and confidentiality limits including coordination with other providers"
    },
    {
      "id": "R6",
      "source": "APA CPG",
      "detail": "Trauma guideline: trauma-focused psychotherapy, psychoeducation, grounding, and gradual exposure as first-line, with ongoing symptom monitoring"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "What should the counselor confirm first at intake to anchor a working diagnosis of Acute Stress Disorder?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "That she directly experienced the threatened injury of the crash and that it has been under one month since it happened",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Exposure plus the ASD time window anchors the diagnosis",
          "explanation": {
            "approach": "Confirm Criterion A and the duration window",
            "rationale": "DSM-5-TR requires direct trauma exposure and a 3-day-to-1-month course for ASD",
            "keyIndicators": [
              "T-boned in the collision",
              "two and a half weeks since the crash"
            ],
            "commonMistake": "Diagnosing from symptom count alone without confirming exposure and timing"
          }
        },
        {
          "id": "b",
          "text": "That she can recall the exact speed of both vehicles and the precise sequence of events leading up to the collision itself",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Precise recall of the crash mechanics is not diagnostic",
          "explanation": {
            "approach": "Detail-accuracy framing",
            "rationale": "Criterion A concerns exposure, not accurate recall of details",
            "keyIndicators": [
              "fragmented memory is common after trauma"
            ],
            "commonMistake": "Treating narrative precision as a diagnostic requirement"
          }
        },
        {
          "id": "c",
          "text": "That a family member also witnessed the crash and can independently corroborate every detail of what actually happened",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Third-party corroboration is not required to diagnose",
          "explanation": {
            "approach": "Corroboration framing",
            "rationale": "Self-report of direct exposure is sufficient for Criterion A",
            "keyIndicators": [
              "client was the driver directly involved"
            ],
            "commonMistake": "Requiring outside witnesses before accepting the client's report"
          }
        },
        {
          "id": "d",
          "text": "That her auto insurance claim regarding the collision has already been fully processed and formally resolved",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Insurance status is irrelevant to the diagnosis",
          "explanation": {
            "approach": "Administrative framing",
            "rationale": "Claim status has no bearing on clinical criteria",
            "keyIndicators": [
              "unrelated administrative detail"
            ],
            "commonMistake": "Confusing administrative closure with clinical readiness"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "Emily mentions feeling 'unreal' and dazed at times. What should the counselor specifically assess about this?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Whether this reflects a dissociative symptom such as derealization, one of the symptom clusters counted toward ASD",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Derealization is a counted ASD dissociative symptom",
          "explanation": {
            "approach": "Identify the dissociative cluster",
            "rationale": "DSM-5-TR lists derealization among the ASD symptom categories",
            "keyIndicators": [
              "dazed, unreal feeling that comes and goes"
            ],
            "commonMistake": "Dismissing derealization as vague or unimportant"
          }
        },
        {
          "id": "b",
          "text": "Whether this dazed quality means she likely sustained an undiagnosed traumatic brain injury that the ED overlooked entirely",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Assuming a missed brain injury is not the counselor's call",
          "explanation": {
            "approach": "Unlicensed medical inference",
            "rationale": "Medical causes were already screened by the ED; this exceeds scope",
            "keyIndicators": [
              "ED workup showed no ongoing injury"
            ],
            "commonMistake": "Making a medical diagnosis outside the counselor's scope"
          }
        },
        {
          "id": "c",
          "text": "Whether this feeling means she is exaggerating her distress to strengthen a personal injury claim from the crash",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Assuming malingering is unwarranted and harmful",
          "explanation": {
            "approach": "Malingering suspicion",
            "rationale": "No evidence supports secondary gain; this damages rapport",
            "keyIndicators": [
              "consistent, distressing symptom report"
            ],
            "commonMistake": "Defaulting to suspicion instead of clinical assessment"
          }
        },
        {
          "id": "d",
          "text": "Whether she has ever felt this exact way before, at any point earlier across her entire life, unrelated to any stressor",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Lifetime history is secondary to characterizing the current episode",
          "explanation": {
            "approach": "Lifetime-history framing",
            "rationale": "Current episode characterization takes priority at this point",
            "keyIndicators": [
              "new onset tied to the collision"
            ],
            "commonMistake": "Chasing lifetime history before scoping the presenting episode"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "Given her presentation, what safety screening is appropriate at this intake?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "A structured suicide risk screen covering ideation, intent, plan, and behavior, done routinely regardless of apparent risk",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Routine structured screening is standard practice",
          "explanation": {
            "approach": "Screen routinely and structurally",
            "rationale": "C-SSRS-style screening is standard at every trauma intake",
            "keyIndicators": [
              "new trauma presentation",
              "no risk mentioned yet"
            ],
            "commonMistake": "Skipping safety screening because risk seems unlikely"
          }
        },
        {
          "id": "b",
          "text": "No formal risk screening is needed since she denies distress about the dazed episodes and appears to be coping well overall",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Skipping screening based on appearance is unsafe practice",
          "explanation": {
            "approach": "Skip screening on impression",
            "rationale": "Routine screening should not depend on clinical impression alone",
            "keyIndicators": [
              "standard-of-care omission"
            ],
            "commonMistake": "Assuming a calm presentation rules out risk"
          }
        },
        {
          "id": "c",
          "text": "A screening focused only on whether she has ever previously been hospitalized psychiatrically for any reason at all",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Prior hospitalization alone does not assess current risk",
          "explanation": {
            "approach": "Hospitalization-history-only framing",
            "rationale": "Current ideation, intent, and plan must be assessed directly",
            "keyIndicators": [
              "no current risk data gathered"
            ],
            "commonMistake": "Substituting history for a current risk assessment"
          }
        },
        {
          "id": "d",
          "text": "A screening deferred until the third or fourth session once the counselor has built more rapport with her over time",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Deferring routine safety screening is inappropriate",
          "explanation": {
            "approach": "Delay for rapport",
            "rationale": "Baseline safety screening belongs at intake, not later",
            "keyIndicators": [
              "first clinical contact"
            ],
            "commonMistake": "Postponing a standard safety screen"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "What single factor would most clearly shift this diagnosis from Acute Stress Disorder to Posttraumatic Stress Disorder?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "The qualifying symptom cluster persisting for one month or longer after the crash rather than resolving before then",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Duration past one month is the reclassifying factor",
          "explanation": {
            "approach": "Apply the duration criterion",
            "rationale": "ASD becomes PTSD if the symptom cluster lasts a month or more",
            "keyIndicators": [
              "currently two and a half weeks post-crash"
            ],
            "commonMistake": "Believing symptom severity, not duration, drives the switch"
          }
        },
        {
          "id": "b",
          "text": "The nightmares becoming somewhat more vivid and disturbing in their content than they have been up to this point",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Content intensity does not reclassify the disorder",
          "explanation": {
            "approach": "Severity-of-content framing",
            "rationale": "PTSD reclassification hinges on duration, not vividness",
            "keyIndicators": [
              "duration is the differentiator"
            ],
            "commonMistake": "Equating worsening symptoms with a diagnostic switch"
          }
        },
        {
          "id": "c",
          "text": "Her decision to permanently stop driving altogether rather than only avoiding the specific intersection where the crash occurred",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Broader avoidance alone does not reclassify the diagnosis",
          "explanation": {
            "approach": "Avoidance-scope framing",
            "rationale": "Expanded avoidance does not substitute for the duration criterion",
            "keyIndicators": [
              "avoidance is one symptom among several"
            ],
            "commonMistake": "Using symptom breadth instead of duration to reclassify"
          }
        },
        {
          "id": "d",
          "text": "The other driver being found legally at fault for causing the collision once the police investigation concludes",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Fault determination has no diagnostic relevance",
          "explanation": {
            "approach": "Legal-fault framing",
            "rationale": "Legal findings do not factor into the clinical criteria",
            "keyIndicators": [
              "unrelated legal detail"
            ],
            "commonMistake": "Conflating legal outcomes with clinical diagnosis"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "Why is Adjustment Disorder not the better fit for Emily's presentation?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Her reaction meets Criterion A trauma exposure and the specific ASD symptom cluster that Adjustment Disorder does not require",
          "isCorrect": true,
          "weight": 3,
          "rationale": "ASD requires exposure and cluster criteria Adjustment lacks",
          "explanation": {
            "approach": "Apply the exclusionary hierarchy",
            "rationale": "Adjustment Disorder applies only when a full trauma-disorder cluster is not met",
            "keyIndicators": [
              "life-threatening collision",
              "9+ qualifying symptoms present"
            ],
            "commonMistake": "Defaulting to Adjustment Disorder for any stressor-linked distress"
          }
        },
        {
          "id": "b",
          "text": "Her distress began very soon after a single identifiable stressor rather than building up gradually over several months",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Rapid onset does not rule out Adjustment Disorder by itself",
          "explanation": {
            "approach": "Onset-speed framing",
            "rationale": "Adjustment Disorder can also follow a single acute stressor",
            "keyIndicators": [
              "onset alone is not the distinguishing feature"
            ],
            "commonMistake": "Using onset speed as the sole differential test"
          }
        },
        {
          "id": "c",
          "text": "Her level of distress appears somewhat greater than what most people would experience after a similar car accident",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Proportionality of distress is not the deciding factor here",
          "explanation": {
            "approach": "Proportionality framing",
            "rationale": "The presence of the qualifying symptom cluster, not distress magnitude, differentiates",
            "keyIndicators": [
              "symptom cluster is the deciding factor"
            ],
            "commonMistake": "Judging severity instead of applying the symptom criteria"
          }
        },
        {
          "id": "d",
          "text": "She is expected to return to her usual functioning within about six months once the stressor itself has fully passed",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Anticipated recovery time does not establish the diagnosis",
          "explanation": {
            "approach": "Prognosis framing",
            "rationale": "Expected course does not substitute for meeting current criteria",
            "keyIndicators": [
              "current symptom cluster already qualifies for ASD"
            ],
            "commonMistake": "Diagnosing from anticipated recovery rather than present criteria"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "What is the most appropriate first-line, within-scope treatment recommendation for Emily?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Begin trauma-focused psychotherapy incorporating psychoeducation, grounding skills, and gradual exposure to driving cues",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Trauma-focused therapy is the first-line, within-scope approach",
          "explanation": {
            "approach": "Match the guideline to scope",
            "rationale": "APA CPG identifies trauma-focused psychotherapy as first-line for acute trauma reactions",
            "keyIndicators": [
              "easy diagnosis, no comorbidity",
              "counselor scope"
            ],
            "commonMistake": "Defaulting to a medication recommendation instead"
          }
        },
        {
          "id": "b",
          "text": "Recommend she begin a daily anti-anxiety medication right away and follow up on the dosage in a few weeks",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Prescribing is outside counselor scope of practice",
          "explanation": {
            "approach": "Prescribe medication",
            "rationale": "Counselors do not prescribe or adjust medication dosing",
            "keyIndicators": [
              "no prescriptive authority"
            ],
            "commonMistake": "Acting outside scope of practice"
          }
        },
        {
          "id": "c",
          "text": "Suggest she wait several more weeks to see whether the symptoms resolve naturally before starting any formal treatment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Watchful waiting delays indicated early intervention",
          "explanation": {
            "approach": "Watchful waiting",
            "rationale": "Early trauma-focused treatment is indicated now, not deferred",
            "keyIndicators": [
              "functional impairment already present"
            ],
            "commonMistake": "Delaying indicated care while symptoms are active"
          }
        },
        {
          "id": "d",
          "text": "Encourage her to avoid discussing the crash directly for now and instead focus sessions on unrelated relaxation topics",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the trauma content undercuts effective treatment",
          "explanation": {
            "approach": "Avoidance-based planning",
            "rationale": "Trauma-focused work requires engaging, not avoiding, the trauma material",
            "keyIndicators": [
              "avoidance is already a presenting symptom"
            ],
            "commonMistake": "Reinforcing avoidance instead of addressing it"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "How should the counselor monitor Emily's progress over the coming weeks?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Track her symptom cluster and functioning at each session to note whether it resolves or persists past one month",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Ongoing tracking clarifies whether ASD resolves or persists",
          "explanation": {
            "approach": "Monitor the symptom trajectory",
            "rationale": "APA CPG supports ongoing monitoring to guide the evolving treatment plan",
            "keyIndicators": [
              "currently inside the ASD window"
            ],
            "commonMistake": "Setting the plan once and never reassessing it"
          }
        },
        {
          "id": "b",
          "text": "Ask her only once, at the very final session of the whole course of treatment, how she generally feels she has done",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A single end-point check misses the ASD-to-PTSD window",
          "explanation": {
            "approach": "Terminal-only evaluation",
            "rationale": "Interim tracking is needed to catch symptoms crossing the one-month mark",
            "keyIndicators": [
              "need interim data before treatment ends"
            ],
            "commonMistake": "Skipping interim monitoring entirely"
          }
        },
        {
          "id": "c",
          "text": "Track only how many sessions she attends and whether she arrives on time, without reviewing her symptoms directly",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Attendance alone does not measure clinical progress",
          "explanation": {
            "approach": "Adherence-only proxy",
            "rationale": "Attendance does not substitute for symptom monitoring",
            "keyIndicators": [
              "process versus outcome"
            ],
            "commonMistake": "Mistaking attendance for clinical improvement"
          }
        },
        {
          "id": "d",
          "text": "Rely on her employer's occasional comments about her work performance as the main indicator of her clinical progress",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Third-party workplace comments are an unreliable clinical measure",
          "explanation": {
            "approach": "External-informant proxy",
            "rationale": "Direct clinical tracking is needed, not secondhand workplace impressions",
            "keyIndicators": [
              "unstandardized, indirect source"
            ],
            "commonMistake": "Substituting outside opinions for direct assessment"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "Emily asks whether she should also see a prescriber about medication for her sleep and anxiety. What is the most appropriate counselor action?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Provide general information and, with her consent, coordinate a referral to a prescriber for a full evaluation",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Referral and coordination stay within scope",
          "explanation": {
            "approach": "Coordinate care appropriately",
            "rationale": "ACA Code of Ethics supports referral and coordination rather than prescribing",
            "keyIndicators": [
              "client interest in medication",
              "consent to refer"
            ],
            "commonMistake": "Offering specific medication recommendations directly"
          }
        },
        {
          "id": "b",
          "text": "Tell her which specific sleep medication tends to work best for people going through a stressful period like hers",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Naming a specific medication exceeds scope",
          "explanation": {
            "approach": "Prescriptive advice",
            "rationale": "Counselors do not select or recommend specific medications",
            "keyIndicators": [
              "no prescriptive authority"
            ],
            "commonMistake": "Overstepping professional scope of practice"
          }
        },
        {
          "id": "c",
          "text": "Advise her that medication is unnecessary at this early stage as long as she keeps attending therapy sessions consistently",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Discouraging a medical evaluation overreaches",
          "explanation": {
            "approach": "Discourage evaluation",
            "rationale": "That determination belongs to a prescriber, not the counselor",
            "keyIndicators": [
              "client autonomy in seeking care"
            ],
            "commonMistake": "Steering a client away from a medical decision"
          }
        },
        {
          "id": "d",
          "text": "Suggest she look into over-the-counter sleep aids on her own and report back on how well they seem to be working",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Self-directed medication research is poor care coordination",
          "explanation": {
            "approach": "Defer to self-directed research",
            "rationale": "It substitutes for a proper referral and professional evaluation",
            "keyIndicators": [
              "needs professional medical input"
            ],
            "commonMistake": "Outsourcing a medical question instead of referring"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "Which initial intervention best targets Emily's dazed, derealized episodes?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Teach brief grounding techniques, such as naming sensory details in the room, to use during dazed or unreal moments",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Grounding directly targets dissociative episodes",
          "explanation": {
            "approach": "Introduce grounding skills",
            "rationale": "APA CPG-consistent early trauma care uses grounding for dissociative symptoms",
            "keyIndicators": [
              "dazed, unreal quality reported"
            ],
            "commonMistake": "Jumping to exposure before she can ground herself"
          }
        },
        {
          "id": "b",
          "text": "Begin detailed, repeated exposure to the full narrative of the crash before teaching her any coping skills first",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Exposure before stabilization skips a needed step",
          "explanation": {
            "approach": "Exposure-first sequencing",
            "rationale": "Early sessions typically build stabilization skills before deeper exposure work",
            "keyIndicators": [
              "no coping skills established yet"
            ],
            "commonMistake": "Skipping stabilization before trauma processing"
          }
        },
        {
          "id": "c",
          "text": "Explain to her at length that derealization is not a real medical concern and that she should simply try to ignore it",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Dismissing the symptom is invalidating and unhelpful",
          "explanation": {
            "approach": "Dismiss and minimize",
            "rationale": "Invalidating a distressing symptom undermines the therapeutic alliance",
            "keyIndicators": [
              "client describes it as unsettling"
            ],
            "commonMistake": "Telling a client to ignore a distressing symptom"
          }
        },
        {
          "id": "d",
          "text": "Recommend she avoid driving altogether until the dazed feelings stop occurring completely on their own over time",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Blanket avoidance reinforces the symptom pattern",
          "explanation": {
            "approach": "Avoidance-based recommendation",
            "rationale": "Encouraging total avoidance reinforces rather than reduces symptoms",
            "keyIndicators": [
              "avoidance already a presenting symptom"
            ],
            "commonMistake": "Prescribing more avoidance instead of coping skills"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "Emily says she feels weak for still avoiding the intersection three weeks later. How should the counselor respond?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Normalize the avoidance as a common, treatable stress response rather than a personal weakness, and validate her frustration",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Psychoeducation reframes self-blame around avoidance",
          "explanation": {
            "approach": "Normalize and validate",
            "rationale": "Framing avoidance as a treatable symptom counters self-blame",
            "keyIndicators": [
              "self-critical about avoidance",
              "still within ASD window"
            ],
            "commonMistake": "Either lecturing her or only sympathizing without information"
          }
        },
        {
          "id": "b",
          "text": "Agree that avoiding one intersection for three weeks does seem like an overreaction to a routine traffic accident",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Endorsing the self-blame deepens it",
          "explanation": {
            "approach": "Validate the distortion",
            "rationale": "Agreeing with the self-critical framing reinforces it",
            "keyIndicators": [
              "cognitive distortion about weakness"
            ],
            "commonMistake": "Colluding with a client's harsh self-judgment"
          }
        },
        {
          "id": "c",
          "text": "Firmly challenge the belief as irrational and present a logical argument for why she should not feel this way",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Premature confrontation can feel invalidating",
          "explanation": {
            "approach": "Confront the cognition",
            "rationale": "Early confrontation risks rupturing the alliance before rapport is built",
            "keyIndicators": [
              "fragile self-view about coping"
            ],
            "commonMistake": "Disputing before validating the client's experience"
          }
        },
        {
          "id": "d",
          "text": "Redirect the conversation away from the topic and refocus entirely on scheduling next week's session logistics",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoidance of the topic leaves the belief unaddressed",
          "explanation": {
            "approach": "Topic redirection",
            "rationale": "Bypassing emotionally central material misses a treatment target",
            "keyIndicators": [
              "unaddressed self-critical belief"
            ],
            "commonMistake": "Avoiding material that feels clinically important"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "What is the most therapeutic way to respond when Emily describes a nightmare in vivid detail during session?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Listen empathically, reflect her distress, and gently pace the discussion so she does not feel overwhelmed or flooded",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Paced empathic listening supports processing without flooding",
          "explanation": {
            "approach": "Pace the disclosure empathically",
            "rationale": "Trauma-focused work balances engagement with the material and titrated pacing",
            "keyIndicators": [
              "vivid, distressing nightmare content"
            ],
            "commonMistake": "Letting the client become overwhelmed without pacing"
          }
        },
        {
          "id": "b",
          "text": "Quickly change the subject to something lighter so the session does not become too heavy or emotionally difficult",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the material leaves it unprocessed",
          "explanation": {
            "approach": "Topic avoidance",
            "rationale": "Sidestepping trauma content bypasses the clinical work needed",
            "keyIndicators": [
              "unaddressed trauma material"
            ],
            "commonMistake": "Steering away from distressing content out of discomfort"
          }
        },
        {
          "id": "c",
          "text": "Ask her to describe the nightmare again in even more graphic detail so the counselor can fully picture every element",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Pushing for more graphic detail risks flooding her",
          "explanation": {
            "approach": "Push for maximal detail",
            "rationale": "Unpaced elaboration can overwhelm rather than help process the material",
            "keyIndicators": [
              "risk of re-traumatization without pacing"
            ],
            "commonMistake": "Prioritizing narrative detail over clinical pacing"
          }
        },
        {
          "id": "d",
          "text": "Tell her that nightmares like this are meaningless and will stop mattering once enough time has simply passed",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Dismissing the nightmare's significance is invalidating",
          "explanation": {
            "approach": "Dismiss and minimize",
            "rationale": "Minimizing distressing symptoms undermines trust and misses clinical relevance",
            "keyIndicators": [
              "client actively distressed by the content"
            ],
            "commonMistake": "Telling a client their symptom does not matter"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "When reviewing informed consent with Emily, what must the counselor be sure she understands?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "The limits of confidentiality, including when serious foreseeable harm to self or others would require disclosure",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Disclosing confidentiality limits is required at consent",
          "explanation": {
            "approach": "Clarify consent and its limits",
            "rationale": "ACA Code of Ethics requires explaining confidentiality limits up front",
            "keyIndicators": [
              "new trauma-focused treatment beginning"
            ],
            "commonMistake": "Omitting the limits of confidentiality from the consent discussion"
          }
        },
        {
          "id": "b",
          "text": "That everything she discusses in every session will be held in absolute confidence under all circumstances whatsoever",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Absolute confidentiality is an inaccurate statement",
          "explanation": {
            "approach": "Overpromise privacy",
            "rationale": "This misstates legal and ethical limits on confidentiality",
            "keyIndicators": [
              "safety exceptions always exist"
            ],
            "commonMistake": "Guaranteeing unconditional secrecy to a client"
          }
        },
        {
          "id": "c",
          "text": "That the counselor alone will decide which specific treatment goals she is permitted to pursue during their work together",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Goals should be set collaboratively, not imposed",
          "explanation": {
            "approach": "Clinician-imposed goals",
            "rationale": "Informed consent includes collaborative goal-setting with the client",
            "keyIndicators": [
              "client autonomy in treatment planning"
            ],
            "commonMistake": "Removing the client's voice from goal-setting"
          }
        },
        {
          "id": "d",
          "text": "That once she agrees to begin, she is required to complete the entire recommended course of therapy without exception",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Consent to treatment is ongoing and revocable",
          "explanation": {
            "approach": "Mandate completion",
            "rationale": "Clients may withdraw consent to treatment at any point",
            "keyIndicators": [
              "right to discontinue treatment"
            ],
            "commonMistake": "Treating initial consent as binding for the full course"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "Emily mentions she has retained an attorney regarding the crash and asks the counselor to send her full session notes directly to the attorney's office. What is the appropriate response?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Explain the release-of-information process, obtain her signed written authorization, and coordinate the disclosure appropriately",
          "isCorrect": true,
          "weight": 3,
          "rationale": "A signed release properly authorizes any disclosure",
          "explanation": {
            "approach": "Follow proper release-of-information procedure",
            "rationale": "ACA Code of Ethics requires written authorization before releasing records to a third party",
            "keyIndicators": [
              "client requests records go to an attorney"
            ],
            "commonMistake": "Sending records out without a proper signed authorization"
          }
        },
        {
          "id": "b",
          "text": "Send the complete session notes to the attorney's office right away since she is the one who requested it verbally",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Releasing records without written authorization is improper",
          "explanation": {
            "approach": "Release without authorization",
            "rationale": "A verbal request alone does not satisfy proper consent procedures",
            "keyIndicators": [
              "no signed release obtained yet"
            ],
            "commonMistake": "Skipping the required written authorization step"
          }
        },
        {
          "id": "c",
          "text": "Refuse to release any information at all and tell her that session notes can never be shared with an attorney",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A blanket refusal misstates how disclosures work",
          "explanation": {
            "approach": "Blanket refusal",
            "rationale": "Records can be released with the client's proper written authorization",
            "keyIndicators": [
              "client has a right to authorize release"
            ],
            "commonMistake": "Refusing outright instead of following the proper process"
          }
        },
        {
          "id": "d",
          "text": "Summarize her progress from memory over the phone to the attorney rather than sharing any written documentation",
          "isCorrect": false,
          "weight": -1,
          "rationale": "An informal verbal summary bypasses proper documentation procedure",
          "explanation": {
            "approach": "Informal verbal disclosure",
            "rationale": "Disclosures should follow the same authorization and documentation standards",
            "keyIndicators": [
              "needs a formal, authorized process"
            ],
            "commonMistake": "Substituting an informal verbal account for a proper release"
          }
        }
      ]
    }
  ]
};

const D207 = {
  "id": "ncmhce-D207",
  "title": "Escalating evening drinking after the kids leave home",
  "category": "Substance",
  "difficulty": "easy",
  "primaryDiagnosis": {
    "name": "Alcohol Use Disorder, Moderate",
    "code": "F10.20"
  },
  "diagnosis": {
    "name": "Alcohol Use Disorder, Moderate",
    "code": "F10.20"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Alcohol Use Disorder, Moderate",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Alcohol Use Disorder, Mild",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Alcohol Use Disorder, Severe",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Adjustment Disorder, with Anxiety",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Marcus Delgado, a 50-year-old accountant, self-refers to outpatient counseling reporting that his evening drinking has crept up steadily over the past year since both of his adult children moved out, leaving long, unstructured evenings at home.",
    "session1": "He describes intending to have one or two beers most nights but often ending up with four or five to feel any relaxing effect, and needing noticeably more alcohol than a year ago for the same effect; he denies morning shakiness, sweating, nausea, or any legal or medical problems tied to drinking.",
    "session2": "He reports two attempts in the past six months to cut back to one or two drinks a night, each lasting only a few days, and a strong urge to pour a drink soon after dinner; his drinking now fills two to three hours of his evening compared with under one hour a year ago."
  },
  "diagnosticRationale": "Marcus endorses five DSM-5-TR Alcohol Use Disorder Criterion A symptoms within the past year: drinking more than intended on many evenings, a great deal of time spent drinking, two unsuccessful attempts to cut down, tolerance requiring more alcohol for the same effect, and craving before he begins drinking. Five symptoms meet the moderate specifier (4-5 symptoms), which is more severe than mild (2-3) and less severe than severe (6+). No withdrawal symptoms, medical complications, legal involvement, or mood/anxiety symptoms beyond ordinary situational stress are present, so an alcohol-induced disorder or an adjustment disorder is not supported.",
  "references": [
    {
      "id": "R1",
      "source": "DSM-5-TR",
      "detail": "AUD Criterion A: 2-3 symptoms mild, 4-5 moderate, 6+ severe within a 12-month period"
    },
    {
      "id": "R2",
      "source": "SAMHSA TIP 35",
      "detail": "Stage-matched motivational strategies for ambivalence in substance use treatment"
    },
    {
      "id": "R3",
      "source": "Miller & Rollnick (MI)",
      "detail": "OARS skills and evoking change talk to resolve ambivalence"
    },
    {
      "id": "R4",
      "source": "ASAM Criteria",
      "detail": "Dimension 1 withdrawal risk and level-of-care placement criteria"
    },
    {
      "id": "R5",
      "source": "Transtheoretical Model",
      "detail": "Contemplation-stage intervention matched to readiness for change"
    },
    {
      "id": "R6",
      "source": "ACA Code of Ethics",
      "detail": "A.1.a and B.1.d: informed consent, confidentiality limits, and referral within scope"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "What is the most important focus for the intake interview to establish Marcus's alcohol use pattern?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Systematically review the past 12 months for Criterion A symptoms: amount, tolerance, cut-down attempts, and time spent",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Structured criterion review anchors the diagnosis",
          "explanation": {
            "approach": "Apply the DSM-5-TR symptom checklist directly",
            "rationale": "AUD severity is determined by counting Criterion A symptoms over 12 months",
            "keyIndicators": [
              "drinking more than intended",
              "needing more to feel the same effect"
            ],
            "commonMistake": "Diagnosing from a general impression instead of counting symptoms"
          }
        },
        {
          "id": "b",
          "text": "Ask mainly about any past legal consequences such as arrests or citations connected to his drinking history",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Legal history is not present and not central",
          "explanation": {
            "approach": "Legal-history framing",
            "rationale": "Criterion A does not require legal involvement",
            "keyIndicators": [
              "no legal problems reported"
            ],
            "commonMistake": "Assuming legal trouble is required for AUD"
          }
        },
        {
          "id": "c",
          "text": "Focus mainly on his extended family's history of alcohol problems across several prior generations",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Family history informs risk, not the diagnosis itself",
          "explanation": {
            "approach": "Heredity-first framing",
            "rationale": "Family history is not a Criterion A element",
            "keyIndicators": [
              "no family data yet gathered"
            ],
            "commonMistake": "Requiring family history to diagnose AUD"
          }
        },
        {
          "id": "d",
          "text": "Rely mainly on a short report from his wife about his drinking rather than interviewing Marcus about his own use",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Bypassing the client's own report undermines assessment",
          "explanation": {
            "approach": "Collateral-only assessment",
            "rationale": "Self-report from the client anchors an accurate symptom count",
            "keyIndicators": [
              "client is present and self-referred"
            ],
            "commonMistake": "Substituting collateral report for direct interview"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "Given his reported drinking, what routine intake screening step should the counselor take?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Screen for withdrawal risk and medical complications, referring for a medical evaluation if any signs emerge",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Routine withdrawal and medical screening is standard practice",
          "explanation": {
            "approach": "Screen, then refer only if indicated",
            "rationale": "ASAM Dimension 1 calls for a routine withdrawal risk check before outpatient planning",
            "keyIndicators": [
              "denies shakiness or sweating",
              "no medical complaints reported"
            ],
            "commonMistake": "Skipping the routine screen because none are expected"
          }
        },
        {
          "id": "b",
          "text": "Begin managing any withdrawal symptoms directly in session using relaxation and grounding techniques",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Managing withdrawal is outside counselor scope",
          "explanation": {
            "approach": "Counselor-managed withdrawal",
            "rationale": "Withdrawal management requires medical oversight, not counseling techniques",
            "keyIndicators": [
              "no withdrawal symptoms present"
            ],
            "commonMistake": "Treating a medical concern as a counseling task"
          }
        },
        {
          "id": "c",
          "text": "Skip any withdrawal screening entirely since he denies morning shakiness, sweating, or nausea at intake",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Screening should still be documented routinely",
          "explanation": {
            "approach": "Skip screening based on denial alone",
            "rationale": "A brief documented screen is standard even when symptoms seem unlikely",
            "keyIndicators": [
              "no withdrawal history reported"
            ],
            "commonMistake": "Omitting a routine screen based on assumption"
          }
        },
        {
          "id": "d",
          "text": "Require inpatient medical detoxification before any outpatient counseling sessions can begin with him",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Inpatient detox is not indicated without withdrawal risk",
          "explanation": {
            "approach": "Default to the highest level of care",
            "rationale": "No withdrawal signs support only an outpatient level of care",
            "keyIndicators": [
              "no withdrawal symptoms",
              "stable functioning"
            ],
            "commonMistake": "Over-placing a client into a higher level of care"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "What else should the counselor gather at intake to guide a stage-matched treatment approach?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "His current readiness and motivation to change his drinking, including how he views the pros and cons",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Readiness data guides stage-matched intervention",
          "explanation": {
            "approach": "Assess stage of change",
            "rationale": "The Transtheoretical Model matches intervention to the client's current stage",
            "keyIndicators": [
              "ambivalent about cutting back",
              "two prior unsuccessful attempts"
            ],
            "commonMistake": "Assuming every client is ready for action-stage goals"
          }
        },
        {
          "id": "b",
          "text": "A full inventory of every beverage brand and price point he typically purchases during his weekly shopping",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Purchase detail is low clinical yield",
          "explanation": {
            "approach": "Consumer-detail framing",
            "rationale": "Brand and price do not inform stage of change or severity",
            "keyIndicators": [
              "low-yield detail"
            ],
            "commonMistake": "Collecting detail unrelated to treatment planning"
          }
        },
        {
          "id": "c",
          "text": "A detailed account of his daily schedule for the past ten years to map how his routine has evolved",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A decade-long schedule review is excessive",
          "explanation": {
            "approach": "Exhaustive history framing",
            "rationale": "Only the recent pattern change is clinically relevant",
            "keyIndicators": [
              "recent one-year change"
            ],
            "commonMistake": "Over-collecting historical detail"
          }
        },
        {
          "id": "d",
          "text": "Whether he would agree right now to commit permanently to total abstinence as the only acceptable goal",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Demanding abstinence upfront ignores his readiness",
          "explanation": {
            "approach": "Impose an abstinence goal immediately",
            "rationale": "Premature goal imposition conflicts with stage-matched, client-centered planning",
            "keyIndicators": [
              "ambivalence about change"
            ],
            "commonMistake": "Insisting on abstinence before assessing readiness"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "Which finding set most clearly supports a moderate, rather than mild, severity specifier?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Five endorsed symptoms: drinking more than intended, time spent, two failed cut-down attempts, tolerance, and craving",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Five symptoms fall in the moderate range",
          "explanation": {
            "approach": "Count symptoms against the severity thresholds",
            "rationale": "DSM-5-TR sets moderate at four to five endorsed Criterion A symptoms",
            "keyIndicators": [
              "five distinct symptoms identified"
            ],
            "commonMistake": "Estimating severity without counting symptoms"
          }
        },
        {
          "id": "b",
          "text": "The single fact that his drinking increased sometime after his children moved out of the family home",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A precipitant does not establish severity",
          "explanation": {
            "approach": "Trigger-equals-severity framing",
            "rationale": "Severity is set by symptom count, not by the presence of a stressor",
            "keyIndicators": [
              "empty-nest timing"
            ],
            "commonMistake": "Using a life event to estimate severity"
          }
        },
        {
          "id": "c",
          "text": "His own subjective sense that his drinking feels somewhat heavier than it did when he was younger",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Subjective comparison is not a diagnostic count",
          "explanation": {
            "approach": "Subjective-impression framing",
            "rationale": "Severity requires a specific symptom tally, not a general impression",
            "keyIndicators": [
              "vague self-comparison"
            ],
            "commonMistake": "Substituting impression for symptom count"
          }
        },
        {
          "id": "d",
          "text": "The observation that he now drinks beer most evenings instead of only on weekends as he once did",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Frequency alone does not set the specifier",
          "explanation": {
            "approach": "Frequency-only framing",
            "rationale": "Frequency is context but not itself a counted criterion",
            "keyIndicators": [
              "daily pattern noted"
            ],
            "commonMistake": "Equating frequency change with severity level"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "What distinguishes Marcus's presentation from Adjustment Disorder, with Anxiety?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "He meets full Criterion A symptom criteria for a substance use disorder rather than only a stress reaction",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Meeting AUD criteria rules out adjustment disorder",
          "explanation": {
            "approach": "Apply the diagnostic hierarchy",
            "rationale": "A disorder that fully explains the picture is diagnosed instead of adjustment disorder",
            "keyIndicators": [
              "five AUD symptoms present",
              "no separate anxiety syndrome"
            ],
            "commonMistake": "Defaulting to adjustment disorder whenever a stressor is present"
          }
        },
        {
          "id": "b",
          "text": "The fact that his drinking pattern changed only after an identifiable life stressor took place",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A stressor can precede either diagnosis",
          "explanation": {
            "approach": "Trigger-equals-adjustment framing",
            "rationale": "AUD can also emerge following a life stressor",
            "keyIndicators": [
              "empty-nest precipitant"
            ],
            "commonMistake": "Assuming any stressor points to adjustment disorder"
          }
        },
        {
          "id": "c",
          "text": "His distress appears somewhat out of proportion to how significant the actual life change really was",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Proportionality points toward adjustment, not away from it",
          "explanation": {
            "approach": "Proportionality framing",
            "rationale": "This feature would favor adjustment disorder, not argue against it",
            "keyIndicators": [
              "subjective distress"
            ],
            "commonMistake": "Using proportionality to support AUD"
          }
        },
        {
          "id": "d",
          "text": "The likelihood that his symptoms will resolve on their own within about six months without any treatment",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Anticipated course does not define the current diagnosis",
          "explanation": {
            "approach": "Prognosis framing",
            "rationale": "A self-limited expected course is an adjustment-disorder feature, not a rule-out test",
            "keyIndicators": [
              "uncertain future course"
            ],
            "commonMistake": "Diagnosing from anticipated outcome"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "Given Marcus's ambivalence, what is the most appropriate treatment-planning approach?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Use a motivational, stage-matched approach that meets him at his current level of readiness to change",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Stage-matched motivational work fits ambivalence",
          "explanation": {
            "approach": "Match the plan to readiness",
            "rationale": "SAMHSA TIP 35 recommends motivational strategies tailored to the client's stage",
            "keyIndicators": [
              "two failed self-directed attempts",
              "ambivalent about change"
            ],
            "commonMistake": "Prescribing an action-stage plan to an ambivalent client"
          }
        },
        {
          "id": "b",
          "text": "Insist that he commit to complete abstinence starting immediately as a condition of continuing treatment",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Mandating abstinence conflicts with his readiness level",
          "explanation": {
            "approach": "Impose an abstinence mandate",
            "rationale": "Conditioning care on an unready goal undermines engagement and autonomy",
            "keyIndicators": [
              "not yet in the action stage"
            ],
            "commonMistake": "Making treatment contingent on premature commitment"
          }
        },
        {
          "id": "c",
          "text": "Tell him to simply try harder using the same approach that already failed him on two prior occasions",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Repeating a failed strategy is not indicated",
          "explanation": {
            "approach": "Repeat the failed strategy",
            "rationale": "A new stage-matched approach is needed rather than repeating what did not work",
            "keyIndicators": [
              "two unsuccessful attempts already"
            ],
            "commonMistake": "Recycling an approach that already failed"
          }
        },
        {
          "id": "d",
          "text": "Wait passively without any active planning until he independently decides on his own that change is necessary",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Passive waiting under-serves a moderate use disorder",
          "explanation": {
            "approach": "Passive waiting",
            "rationale": "Active, stage-matched engagement is indicated rather than waiting",
            "keyIndicators": [
              "moderate symptom count",
              "functional evening impact"
            ],
            "commonMistake": "Withholding active intervention for a diagnosable disorder"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "Which level-of-care determination is most appropriate for Marcus at this point?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Outpatient counseling, since he has no withdrawal risk, medical complications, or safety concerns present",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Outpatient care matches his low-risk profile",
          "explanation": {
            "approach": "Match level of care to assessed risk",
            "rationale": "ASAM dimensions support outpatient placement absent withdrawal or medical risk",
            "keyIndicators": [
              "no withdrawal symptoms",
              "stable medical and safety picture"
            ],
            "commonMistake": "Defaulting to a higher level of care without indication"
          }
        },
        {
          "id": "b",
          "text": "Medically managed inpatient withdrawal, since any regular drinking pattern always requires hospital admission",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Inpatient withdrawal care is not indicated here",
          "explanation": {
            "approach": "Automatic inpatient placement",
            "rationale": "No withdrawal risk factors support this level of care",
            "keyIndicators": [
              "denies withdrawal symptoms"
            ],
            "commonMistake": "Over-placing a client without withdrawal risk"
          }
        },
        {
          "id": "c",
          "text": "A residential program lasting several months so he is fully removed from his home drinking environment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Residential care exceeds what his profile requires",
          "explanation": {
            "approach": "Residential-first framing",
            "rationale": "A moderate, uncomplicated presentation does not require residential removal",
            "keyIndicators": [
              "intact functioning"
            ],
            "commonMistake": "Choosing a more restrictive setting than needed"
          }
        },
        {
          "id": "d",
          "text": "No formal level-of-care placement at all, since he can simply be told to monitor his own drinking informally",
          "isCorrect": false,
          "weight": -1,
          "rationale": "An unplanned, informal approach under-serves a diagnosable disorder",
          "explanation": {
            "approach": "No structured placement",
            "rationale": "A moderate use disorder still warrants a defined outpatient plan",
            "keyIndicators": [
              "five symptoms present"
            ],
            "commonMistake": "Leaving a diagnosed disorder without a structured plan"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "How should the counselor best set an initial drinking-related goal with Marcus?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Collaboratively explore his goals and readiness together, rather than the counselor selecting the goal alone",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Collaborative goal-setting matches his current stage",
          "explanation": {
            "approach": "Set goals collaboratively",
            "rationale": "Stage-matched planning invites the client into deciding the target",
            "keyIndicators": [
              "ambivalence",
              "self-directed prior attempts"
            ],
            "commonMistake": "Selecting the goal for the client unilaterally"
          }
        },
        {
          "id": "b",
          "text": "Assign lifelong total abstinence as the only treatment goal without first discussing his own preferences",
          "isCorrect": false,
          "weight": -2,
          "rationale": "A unilateral abstinence mandate disregards readiness",
          "explanation": {
            "approach": "Counselor-imposed abstinence goal",
            "rationale": "Imposing a goal without collaboration undermines engagement",
            "keyIndicators": [
              "not asked about his own preference"
            ],
            "commonMistake": "Dictating the goal instead of collaborating"
          }
        },
        {
          "id": "c",
          "text": "Postpone any goal discussion indefinitely until he raises the topic of drinking again entirely on his own",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Indefinite postponement stalls treatment planning",
          "explanation": {
            "approach": "Indefinite delay",
            "rationale": "Active, timely goal-setting is part of stage-matched planning",
            "keyIndicators": [
              "self-referred for this concern"
            ],
            "commonMistake": "Avoiding goal-setting altogether"
          }
        },
        {
          "id": "d",
          "text": "Set a goal based only on what worked well for a different client the counselor treated in the past",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Borrowing another client's goal ignores individual readiness",
          "explanation": {
            "approach": "Template another client's plan",
            "rationale": "Goals should reflect this client's own readiness and values",
            "keyIndicators": [
              "individualized planning needed"
            ],
            "commonMistake": "Copying a plan instead of individualizing it"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "What is the best way to monitor Marcus's progress once treatment begins?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Have him track daily drinks consumed and urges using a simple log reviewed together at each session",
          "isCorrect": true,
          "weight": 3,
          "rationale": "A structured drinking log gives objective tracking",
          "explanation": {
            "approach": "Use structured self-monitoring",
            "rationale": "Daily tracking gives an objective way to follow Criterion A symptoms over time",
            "keyIndicators": [
              "evening pattern to track",
              "craving noted"
            ],
            "commonMistake": "Relying only on vague verbal check-ins"
          }
        },
        {
          "id": "b",
          "text": "Ask him only once, at the very end of treatment, whether he generally feels his drinking has improved",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A single end-point check misses interim data",
          "explanation": {
            "approach": "End-only evaluation",
            "rationale": "Ongoing tracking allows the plan to be adjusted along the way",
            "keyIndicators": [
              "need interim monitoring"
            ],
            "commonMistake": "Skipping interim progress checks"
          }
        },
        {
          "id": "c",
          "text": "Track only whether he attends each scheduled session, without discussing his drinking pattern directly",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Attendance alone does not measure the target symptom",
          "explanation": {
            "approach": "Attendance as the sole measure",
            "rationale": "Attendance is necessary but does not capture actual drinking change",
            "keyIndicators": [
              "process versus outcome"
            ],
            "commonMistake": "Mistaking attendance for symptom improvement"
          }
        },
        {
          "id": "d",
          "text": "Have his wife independently report on his drinking each week instead of asking Marcus directly himself",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Bypassing the client's own report is inappropriate",
          "explanation": {
            "approach": "Third-party monitoring only",
            "rationale": "Progress should be tracked with the client, not routed around him",
            "keyIndicators": [
              "client is the identified client"
            ],
            "commonMistake": "Replacing client self-monitoring with a third party"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "Marcus says, \"I don't know if I really have a problem, I just drink to relax.\" Best response?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Reflect his ambivalence and gently explore the gap between his goals and his current drinking pattern",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Reflective listening develops discrepancy",
          "explanation": {
            "approach": "Use reflection to develop discrepancy",
            "rationale": "MI uses reflection to help the client notice the gap without confrontation",
            "keyIndicators": [
              "ambivalent statement",
              "minimizing language"
            ],
            "commonMistake": "Arguing that he does have a problem"
          }
        },
        {
          "id": "b",
          "text": "Tell him directly that he is clearly wrong and that his drinking is obviously a serious problem",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Direct confrontation increases resistance",
          "explanation": {
            "approach": "Confront the denial",
            "rationale": "Confrontation tends to increase defensiveness rather than open change talk",
            "keyIndicators": [
              "ambivalence, not defiance"
            ],
            "commonMistake": "Arguing the client into agreement"
          }
        },
        {
          "id": "c",
          "text": "Agree with him that relaxing after a long day with a drink is a completely normal and harmless habit",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Agreeing forecloses further exploration",
          "explanation": {
            "approach": "Validate the minimization",
            "rationale": "Agreeing with the minimization abandons the clinical target",
            "keyIndicators": [
              "five endorsed AUD symptoms"
            ],
            "commonMistake": "Colluding with the client's minimization"
          }
        },
        {
          "id": "d",
          "text": "Change the subject to something lighter so the conversation does not feel uncomfortable for either person",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the topic leaves ambivalence unaddressed",
          "explanation": {
            "approach": "Topic avoidance",
            "rationale": "Ambivalence is the material MI works with, not something to sidestep",
            "keyIndicators": [
              "core clinical material"
            ],
            "commonMistake": "Redirecting away from ambivalence"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "Marcus becomes defensive when asked about his two failed attempts to cut back. Best counselor move?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Roll with the resistance, affirm his effort in trying, and invite him to explore what got in the way",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Rolling with resistance keeps him engaged",
          "explanation": {
            "approach": "Roll with resistance and affirm",
            "rationale": "MI avoids pushing against resistance and instead affirms effort already made",
            "keyIndicators": [
              "defensive reaction",
              "two genuine prior attempts"
            ],
            "commonMistake": "Pushing harder against the defensiveness"
          }
        },
        {
          "id": "b",
          "text": "Point out firmly that failing twice already proves he cannot manage this without more intensive treatment",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Framing failure this way increases defensiveness and shame",
          "explanation": {
            "approach": "Use failure to pressure the client",
            "rationale": "This confrontational framing damages rapport and increases resistance",
            "keyIndicators": [
              "defensive response building"
            ],
            "commonMistake": "Using past attempts as leverage or blame"
          }
        },
        {
          "id": "c",
          "text": "Drop the subject immediately and avoid ever bringing up his prior cut-down attempts again in future sessions",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the topic forfeits useful clinical material",
          "explanation": {
            "approach": "Permanent topic avoidance",
            "rationale": "The prior attempts hold useful information about what did not work",
            "keyIndicators": [
              "relevant treatment-planning data"
            ],
            "commonMistake": "Abandoning a clinically useful topic after one defensive moment"
          }
        },
        {
          "id": "d",
          "text": "Minimize the importance of the topic by saying it does not really matter and is not worth discussing further",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Dismissing the topic devalues his disclosure",
          "explanation": {
            "approach": "Dismiss the disclosure",
            "rationale": "Minimizing his effort can feel invalidating rather than supportive",
            "keyIndicators": [
              "genuine disclosed effort"
            ],
            "commonMistake": "Brushing past a meaningful client disclosure"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "What must the counselor ensure Marcus understands during informed consent at intake?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "The limits of confidentiality and the scope of counseling, including referral for any needed medical evaluation",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Consent must cover confidentiality limits and scope",
          "explanation": {
            "approach": "Clarify consent, limits, and scope together",
            "rationale": "ACA A.1.a and B.1.d require explaining confidentiality limits and the counselor's scope",
            "keyIndicators": [
              "substance use presenting concern",
              "possible medical referral"
            ],
            "commonMistake": "Omitting scope-of-practice limits from consent"
          }
        },
        {
          "id": "b",
          "text": "That everything he discusses in every session will be kept completely private under any circumstance",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Absolute confidentiality is an inaccurate promise",
          "explanation": {
            "approach": "Overpromise confidentiality",
            "rationale": "This misstates the legal and ethical limits that must be disclosed",
            "keyIndicators": [
              "standard exceptions apply"
            ],
            "commonMistake": "Guaranteeing unconditional privacy"
          }
        },
        {
          "id": "c",
          "text": "That the counselor alone will decide which specific drinking-related goals he is required to pursue",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Goal-setting is collaborative, not counselor-imposed",
          "explanation": {
            "approach": "Clinician-imposed goals",
            "rationale": "Informed consent should reflect collaborative planning, not unilateral goal-setting",
            "keyIndicators": [
              "client autonomy in planning"
            ],
            "commonMistake": "Removing the client from goal-setting"
          }
        },
        {
          "id": "d",
          "text": "That once he agrees to begin, he is obligated to complete the entire recommended course of treatment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Consent is ongoing and may be withdrawn",
          "explanation": {
            "approach": "Mandate treatment completion",
            "rationale": "Clients retain the right to withdraw consent at any point",
            "keyIndicators": [
              "voluntary, self-referred client"
            ],
            "commonMistake": "Treating consent as a binding, irrevocable contract"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "Marcus asks whether he needs to see a physician about his drinking. Best counselor response?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Explain that a brief medical evaluation is a reasonable step and offer to coordinate a referral with his consent",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Referral and coordination stay within scope",
          "explanation": {
            "approach": "Coordinate care within scope",
            "rationale": "Counselors refer for medical evaluation rather than making medical determinations themselves",
            "keyIndicators": [
              "client open to referral",
              "counselor scope of practice"
            ],
            "commonMistake": "Assessing or ruling out medical issues personally"
          }
        },
        {
          "id": "b",
          "text": "Tell him confidently that a physician visit is completely unnecessary since he denies any withdrawal symptoms",
          "isCorrect": false,
          "weight": -2,
          "rationale": "A definitive medical ruling exceeds counselor scope",
          "explanation": {
            "approach": "Rule out medical need personally",
            "rationale": "Determining that no medical evaluation is ever needed is a medical judgment outside scope",
            "keyIndicators": [
              "no prescriptive or diagnostic medical authority"
            ],
            "commonMistake": "Making a medical determination as a counselor"
          }
        },
        {
          "id": "c",
          "text": "Suggest he research his own symptoms online and independently decide for himself whether a visit is warranted",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Outsourcing to self-research is poor coordination of care",
          "explanation": {
            "approach": "Defer to self-research",
            "rationale": "This avoids the counselor's role in coordinating appropriate referrals",
            "keyIndicators": [
              "client asked the counselor directly"
            ],
            "commonMistake": "Replacing professional coordination with self-directed searching"
          }
        },
        {
          "id": "d",
          "text": "Avoid answering his question directly and instead redirect the conversation back to his drinking goals",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Deflecting a direct question undermines informed care",
          "explanation": {
            "approach": "Deflect the question",
            "rationale": "A direct client question about medical evaluation deserves a direct, honest response",
            "keyIndicators": [
              "client asked directly"
            ],
            "commonMistake": "Avoiding a straightforward clinical question"
          }
        }
      ]
    }
  ]
};

const D208 = {
  "id": "ncmhce-D208",
  "title": "Daily cannabis use and a dropped dance class in a college sophomore",
  "category": "Substance",
  "difficulty": "easy",
  "primaryDiagnosis": {
    "name": "Cannabis Use Disorder, Moderate",
    "code": "F12.20"
  },
  "diagnosis": {
    "name": "Cannabis Use Disorder, Moderate",
    "code": "F12.20"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Cannabis Use Disorder, Moderate",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Cannabis Use Disorder, Mild",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Cannabis Use Disorder, Severe",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Cannabis Withdrawal",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Maya Torres, a 19-year-old woman and sophomore at a community college, meets by telehealth from her apartment and reports daily cannabis use over the past eight months. She used to attend a modern dance class three evenings a week but stopped going because she would rather stay home and get high, and she often spends several hours a day using or recovering from its effects.",
    "session1": "She describes vaping cannabis most evenings, sometimes still feeling foggy into the next morning, and says she has fallen behind on reading assignments and turned in two papers late because she loses track of time while high. She has tried skipping a day here and there, but mild cravings and restlessness make it hard to stick with it, so she returns to her usual pattern within a day.",
    "session2": "She says quitting the dance class bothers her, since it used to be something she loved, but she is not sure she wants to give up cannabis entirely because it helps her unwind after a stressful week. She denies anxiety, low mood, physical withdrawal symptoms, legal trouble, or family pressure to stop, and she is open and engaged throughout the session."
  },
  "diagnosticRationale": "Maya endorses five DSM-5-TR Cannabis Use Disorder Criterion A symptoms: unsuccessful efforts to cut down, a great deal of time spent using or recovering from cannabis, craving, giving up a previously important activity (her dance class), and failure to fulfill academic role obligations (late assignments), meeting the four-to-five symptom threshold for moderate severity. This is distinct from mild (two to three symptoms), severe (six or more symptoms), and cannabis withdrawal, since she reports no physiological withdrawal symptoms such as irritability, sleep disturbance, or appetite change when she cuts back.",
  "references": [
    {
      "id": "R1",
      "source": "DSM-5-TR",
      "detail": "Cannabis Use Disorder Criterion A: 4-5 of 11 symptoms within 12 months defines moderate severity"
    },
    {
      "id": "R2",
      "source": "SAMHSA TIP 35",
      "detail": "Enhancing motivation for change by matching intervention to the client stage of readiness"
    },
    {
      "id": "R3",
      "source": "Miller & Rollnick (MI)",
      "detail": "OARS and eliciting change talk to work with ambivalence about substance use"
    },
    {
      "id": "R4",
      "source": "ASAM Criteria",
      "detail": "Six-dimensional assessment used to match level of care to severity and risk"
    },
    {
      "id": "R5",
      "source": "ACA Code of Ethics",
      "detail": "A.2. and H.2.: informed consent, confidentiality limits, and telehealth-specific consent"
    },
    {
      "id": "R6",
      "source": "Transtheoretical Model",
      "detail": "Stages of change: contemplation reflects ambivalence without committed action"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "What should the counselor confirm first to anchor the moderate Cannabis Use Disorder diagnosis at intake?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "That the pattern of daily use has persisted for months and is producing real impairment such as lost time and missed work",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Duration and impairment anchor the diagnosis",
          "explanation": {
            "approach": "Confirm the diagnostic threshold",
            "rationale": "DSM-5-TR requires a persistent pattern with functional impairment across at least four criteria",
            "keyIndicators": [
              "eight months of daily use",
              "late assignments"
            ],
            "commonMistake": "Diagnosing from a single report of getting high"
          }
        },
        {
          "id": "b",
          "text": "That she can name the one specific stressful event that first led her to start using cannabis regularly after she arrived at college",
          "isCorrect": false,
          "weight": 0,
          "rationale": "A triggering event does not establish the diagnosis",
          "explanation": {
            "approach": "Origin-story framing",
            "rationale": "Etiology is not part of the Criterion A count",
            "keyIndicators": [
              "no single precipitant needed"
            ],
            "commonMistake": "Treating a backstory as the diagnostic test"
          }
        },
        {
          "id": "c",
          "text": "That a family member has also struggled with heavy cannabis or other substance use at some point in the past",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Family history supports but does not confirm",
          "explanation": {
            "approach": "Over-weighting heredity",
            "rationale": "Family history informs risk, not the current criteria count",
            "keyIndicators": [
              "no family history reported yet"
            ],
            "commonMistake": "Requiring family history to diagnose"
          }
        },
        {
          "id": "d",
          "text": "That her use today is visibly heavier than it was the very first week she ever tried cannabis at a party",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Comparing to the very first use is not required",
          "explanation": {
            "approach": "Trajectory-from-onset framing",
            "rationale": "Escalation since the first exposure is not a Criterion A element",
            "keyIndicators": [
              "pattern over past year matters, not first use"
            ],
            "commonMistake": "Anchoring diagnosis to the earliest use episode"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "What additional intake history is most important to gather to complete the clinical picture?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Prior attempts to cut down or stop, any other substance use, and a brief mental health and medical history",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Rounds out the use history and rules out other contributors",
          "explanation": {
            "approach": "Complete the substance and mental health history",
            "rationale": "DSM-5-TR assessment includes control attempts, co-use, and ruling out other explanations",
            "keyIndicators": [
              "tried skipping a day",
              "no other symptoms reported"
            ],
            "commonMistake": "Skipping the broader substance and mental health screen"
          }
        },
        {
          "id": "b",
          "text": "A full account of every class she has taken since starting college so the counselor understands her entire transcript",
          "isCorrect": false,
          "weight": -1,
          "rationale": "An exhaustive academic history is low yield",
          "explanation": {
            "approach": "Academic cataloging",
            "rationale": "It does not add diagnostic or treatment-relevant information",
            "keyIndicators": [
              "one relevant academic impact already noted"
            ],
            "commonMistake": "Collecting low-yield detail instead of clinical history"
          }
        },
        {
          "id": "c",
          "text": "A detailed description of the choreography and technique used in the dance classes she attended before stopping",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Activity detail does not inform the diagnosis",
          "explanation": {
            "approach": "Hobby-detail framing",
            "rationale": "The relevant fact is that she gave the activity up, not its content",
            "keyIndicators": [
              "activity already lost, detail not needed"
            ],
            "commonMistake": "Gathering vivid but clinically low-yield detail"
          }
        },
        {
          "id": "d",
          "text": "Whether her roommates or classmates have ever personally commented on how often she seems to be using cannabis",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Others’ opinions are secondary to her own history",
          "explanation": {
            "approach": "Collateral-opinion framing",
            "rationale": "Self-report of use pattern and impairment is the priority",
            "keyIndicators": [
              "self-reported pattern already clear"
            ],
            "commonMistake": "Prioritizing secondhand opinion over direct history"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "How should the counselor assess whether Maya needs more than routine outpatient counseling?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Use a multidimensional assessment of use severity, risk, and functioning to match her to the appropriate level of care",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Dimensional assessment determines level of care",
          "explanation": {
            "approach": "Apply a level-of-care framework",
            "rationale": "ASAM Criteria use six dimensions to match severity and risk to setting",
            "keyIndicators": [
              "no withdrawal",
              "no medical or safety complications"
            ],
            "commonMistake": "Assuming a setting without a structured assessment"
          }
        },
        {
          "id": "b",
          "text": "Recommend inpatient detoxification right away since any daily cannabis use always requires a medical admission",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Inpatient detox is not indicated by this presentation",
          "explanation": {
            "approach": "Reflexive higher level of care",
            "rationale": "No withdrawal or medical complication is present to justify admission",
            "keyIndicators": [
              "denies withdrawal symptoms"
            ],
            "commonMistake": "Over-triaging a stable outpatient presentation"
          }
        },
        {
          "id": "c",
          "text": "Decide that no further assessment is needed and simply schedule her for weekly sessions without any structured review",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Skipping structured assessment overlooks risk factors",
          "explanation": {
            "approach": "Skip the assessment step",
            "rationale": "A brief structured review still confirms the setting is appropriate",
            "keyIndicators": [
              "assessment not yet documented"
            ],
            "commonMistake": "Assuming outpatient fits without checking"
          }
        },
        {
          "id": "d",
          "text": "Ask only whether she personally would prefer inpatient or outpatient care and follow her preference without further review",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Preference alone does not determine clinical need",
          "explanation": {
            "approach": "Preference-only framing",
            "rationale": "Level of care is a clinical determination informed by preference, not preference alone",
            "keyIndicators": [
              "clinical judgment still required"
            ],
            "commonMistake": "Letting preference replace assessment"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "Which finding best supports a moderate rather than a mild severity specifier for her Cannabis Use Disorder?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "She endorses five criteria: unsuccessful cutting-down attempts, heavy time cost, craving, activity loss, and role failure",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Five criteria place her in the moderate range",
          "explanation": {
            "approach": "Count the Criterion A symptoms",
            "rationale": "DSM-5-TR sets four to five symptoms as the moderate threshold",
            "keyIndicators": [
              "five criteria documented"
            ],
            "commonMistake": "Estimating severity without counting criteria"
          }
        },
        {
          "id": "b",
          "text": "She has been using cannabis for a period of roughly eight months rather than for only a few scattered weeks",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Duration alone does not set the severity specifier",
          "explanation": {
            "approach": "Duration-only framing",
            "rationale": "Severity is defined by symptom count, not length of use alone",
            "keyIndicators": [
              "eight-month history noted"
            ],
            "commonMistake": "Equating longer duration with higher severity"
          }
        },
        {
          "id": "c",
          "text": "Her preferred method of use is vaping cannabis rather than smoking it in a more traditional hand-rolled joint form",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Route of administration does not determine severity",
          "explanation": {
            "approach": "Method-of-use framing",
            "rationale": "Severity specifiers rest on the criteria met, not delivery method",
            "keyIndicators": [
              "route is not a Criterion A item"
            ],
            "commonMistake": "Confusing route of use with clinical severity"
          }
        },
        {
          "id": "d",
          "text": "She attends her sessions consistently and communicates clearly throughout, which suggests her cannabis use is probably not really that serious",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Good session engagement does not lower severity",
          "explanation": {
            "approach": "Engagement-equals-mild framing",
            "rationale": "Session presentation does not substitute for the criteria count",
            "keyIndicators": [
              "engagement is unrelated to severity specifier"
            ],
            "commonMistake": "Reading good rapport as evidence of lower severity"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "Maya mentions feeling restless when she skips a day. Why does this not point to Cannabis Withdrawal instead?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "She reports only mild craving, without the irritability, sleep disruption, or appetite change that withdrawal requires",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Craving alone does not meet withdrawal criteria",
          "explanation": {
            "approach": "Differentiate craving from withdrawal",
            "rationale": "DSM-5-TR withdrawal requires a cluster of physiological symptoms beyond craving",
            "keyIndicators": [
              "denies irritability, sleep, or appetite change"
            ],
            "commonMistake": "Treating any discomfort on cutting back as withdrawal"
          }
        },
        {
          "id": "b",
          "text": "She only occasionally skips a day of use, so withdrawal could never technically apply to someone with her pattern",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Frequency of abstinence attempts is not the deciding factor",
          "explanation": {
            "approach": "Frequency-of-abstinence framing",
            "rationale": "The relevant question is symptom cluster, not how often she tries",
            "keyIndicators": [
              "symptom pattern is the key test"
            ],
            "commonMistake": "Using attempt frequency instead of symptoms to rule out withdrawal"
          }
        },
        {
          "id": "c",
          "text": "She is only nineteen years old, and withdrawal syndromes are understood to occur solely in older, long-term users",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Age does not determine whether withdrawal can occur",
          "explanation": {
            "approach": "Age-based exclusion",
            "rationale": "Withdrawal is defined by symptoms, not by the client’s age",
            "keyIndicators": [
              "age is not a withdrawal criterion"
            ],
            "commonMistake": "Assuming young age rules out a withdrawal syndrome"
          }
        },
        {
          "id": "d",
          "text": "She attends sessions by telehealth, and withdrawal syndromes can realistically only be properly confirmed during an in-person clinic visit",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Session modality does not affect the diagnostic rule-out",
          "explanation": {
            "approach": "Modality framing",
            "rationale": "Withdrawal is ruled out by reported symptoms, not by visit format",
            "keyIndicators": [
              "telehealth does not limit history-taking"
            ],
            "commonMistake": "Treating telehealth as a barrier to a symptom-based rule-out"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "Which stage of change best describes Maya’s current readiness regarding her cannabis use?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Contemplation, since she recognizes the loss of dance and the academic impact but remains unsure about changing",
          "isCorrect": true,
          "weight": 3,
          "rationale": "She sees the downside but has not committed to change",
          "explanation": {
            "approach": "Map the stage of change",
            "rationale": "Transtheoretical Model contemplation involves ambivalence without committed action",
            "keyIndicators": [
              "bothered by losing dance",
              "not sure she wants to quit"
            ],
            "commonMistake": "Assuming she is ready for an action-stage plan"
          }
        },
        {
          "id": "b",
          "text": "Action, because she has already begun successfully cutting back her cannabis use on a fairly regular basis",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Her cutting-down attempts have not been sustained or successful",
          "explanation": {
            "approach": "Overestimating readiness",
            "rationale": "Action requires sustained behavior change, which is not present",
            "keyIndicators": [
              "returns to usual pattern within a day"
            ],
            "commonMistake": "Reading brief attempts as an action-stage change"
          }
        },
        {
          "id": "c",
          "text": "Precontemplation, because she has never once thought about how her cannabis use might be affecting her life",
          "isCorrect": false,
          "weight": -2,
          "rationale": "She already recognizes real downsides of her use",
          "explanation": {
            "approach": "Underestimating awareness",
            "rationale": "She names specific losses, which precontemplation would not include",
            "keyIndicators": [
              "names dance loss and late papers"
            ],
            "commonMistake": "Ignoring expressed awareness of consequences"
          }
        },
        {
          "id": "d",
          "text": "Maintenance, since she has clearly sustained a stable pattern of noticeably reduced cannabis use for several months now",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Her use has not been reduced or stabilized at a lower level",
          "explanation": {
            "approach": "Misreading stability as maintenance",
            "rationale": "Daily use has continued largely unchanged, not been maintained at a lower level",
            "keyIndicators": [
              "daily use over eight months"
            ],
            "commonMistake": "Confusing consistency of use with maintenance of change"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "What is the most appropriate first-line, within-scope treatment approach for Maya?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Outpatient counseling using motivational and cognitive-behavioral strategies matched to her current readiness to change",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Stage-matched outpatient therapy fits her presentation and scope",
          "explanation": {
            "approach": "Match intervention to readiness and scope",
            "rationale": "SAMHSA TIP 35 supports motivational strategies matched to stage of change",
            "keyIndicators": [
              "contemplation stage",
              "no medical complication"
            ],
            "commonMistake": "Defaulting to a medication-focused plan"
          }
        },
        {
          "id": "b",
          "text": "Refer her right away to a prescriber to start a medication specifically intended to reduce her cannabis cravings and use",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Prescribing decisions and medication selection are outside counselor scope",
          "explanation": {
            "approach": "Medication-first framing",
            "rationale": "Counselors coordinate care rather than direct medication choices",
            "keyIndicators": [
              "no prescriptive authority"
            ],
            "commonMistake": "Leading with a medication plan the counselor cannot direct"
          }
        },
        {
          "id": "c",
          "text": "Tell her that she must commit to complete abstinence starting today before any further counseling can continue",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Demanding immediate abstinence ignores her ambivalence",
          "explanation": {
            "approach": "Abstinence-only ultimatum",
            "rationale": "Forcing action-stage commitment onto a contemplative client is not client-centered",
            "keyIndicators": [
              "expressed ambivalence"
            ],
            "commonMistake": "Imposing a goal the client has not chosen"
          }
        },
        {
          "id": "d",
          "text": "Suggest she simply wait several months to see if her motivation to change increases on its own before any plan",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Passive waiting misses an opportunity to build motivation now",
          "explanation": {
            "approach": "Watchful waiting",
            "rationale": "Stage-matched engagement can begin at contemplation rather than waiting",
            "keyIndicators": [
              "functional impairment already present"
            ],
            "commonMistake": "Delaying indicated engagement"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "How should the counselor set an initial treatment goal given Maya’s ambivalence?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Collaboratively explore her ambivalence and let her help define an initial, personally meaningful goal for change",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Collaborative goal-setting respects her autonomy and ambivalence",
          "explanation": {
            "approach": "Use a client-centered, collaborative process",
            "rationale": "Miller and Rollnick emphasize partnership rather than counselor-imposed goals",
            "keyIndicators": [
              "ambivalent about quitting entirely"
            ],
            "commonMistake": "Setting a fixed goal without her input"
          }
        },
        {
          "id": "b",
          "text": "Set complete cannabis abstinence as the only acceptable treatment goal and inform her that this is non-negotiable",
          "isCorrect": false,
          "weight": -2,
          "rationale": "A unilateral abstinence mandate disregards her stated ambivalence",
          "explanation": {
            "approach": "Counselor-imposed goal",
            "rationale": "This overrides autonomy and is likely to disengage a contemplative client",
            "keyIndicators": [
              "expressed reluctance to quit entirely"
            ],
            "commonMistake": "Dictating the goal instead of collaborating"
          }
        },
        {
          "id": "c",
          "text": "Postpone any discussion of goals for several sessions until she brings the topic of cannabis use up on her own",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Delaying goal-setting misses a chance to build motivation",
          "explanation": {
            "approach": "Passive delay",
            "rationale": "Early collaborative goal-setting can proceed even amid ambivalence",
            "keyIndicators": [
              "client already engaged and talking openly"
            ],
            "commonMistake": "Waiting indefinitely instead of engaging now"
          }
        },
        {
          "id": "d",
          "text": "Focus the entire initial goal only on getting her back into the dance class and set the cannabis use aside for now",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Bypassing the use pattern leaves the primary target unaddressed",
          "explanation": {
            "approach": "Symptom-substitution framing",
            "rationale": "The goal should address the use pattern driving the losses, not just one consequence",
            "keyIndicators": [
              "dance loss is one consequence among several"
            ],
            "commonMistake": "Treating a downstream effect as the treatment target"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "Which outpatient plan element best fits the ASAM dimensional picture the counselor has gathered?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Weekly outpatient sessions with periodic review of use pattern and functioning, since no acute risk dimension is present",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Routine outpatient care fits her low-acuity dimensional profile",
          "explanation": {
            "approach": "Match plan intensity to dimensional risk",
            "rationale": "ASAM Criteria support standard outpatient care absent acute risk dimensions",
            "keyIndicators": [
              "no withdrawal",
              "stable functioning outside academics"
            ],
            "commonMistake": "Over-intensifying a stable outpatient case"
          }
        },
        {
          "id": "b",
          "text": "Daily monitored check-ins through a residential program, because any noticeable academic impact automatically requires intensive care",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Residential intensity is not supported by her risk profile",
          "explanation": {
            "approach": "Over-intensified plan",
            "rationale": "Academic impact alone does not meet residential-level criteria",
            "keyIndicators": [
              "single functional domain affected"
            ],
            "commonMistake": "Escalating care disproportionate to assessed risk"
          }
        },
        {
          "id": "c",
          "text": "No structured plan at all, since she is managing her coursework well enough that formal treatment is not warranted",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Documented impairment supports an active plan",
          "explanation": {
            "approach": "No-treatment framing",
            "rationale": "Late assignments and lost activity show impairment needing a plan",
            "keyIndicators": [
              "late papers reported"
            ],
            "commonMistake": "Under-treating a moderate use disorder"
          }
        },
        {
          "id": "d",
          "text": "A referral to a medical detoxification unit before any counseling begins, given the daily nature of her cannabis use",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Detox is not indicated without withdrawal or medical risk",
          "explanation": {
            "approach": "Detox-first framing",
            "rationale": "No withdrawal or medical complication supports skipping to detox",
            "keyIndicators": [
              "denies withdrawal symptoms"
            ],
            "commonMistake": "Requiring detox before appropriate outpatient counseling"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "Maya says, \"I don't even know if I want to stop.\" What is the best motivational interviewing response?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Reflect her uncertainty and gently explore what she would gain and lose from changing her cannabis use",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Reflection and exploration honor ambivalence and elicit change talk",
          "explanation": {
            "approach": "Reflective listening with decisional exploration",
            "rationale": "MI works with ambivalence rather than resolving it for the client",
            "keyIndicators": [
              "stated uncertainty about stopping"
            ],
            "commonMistake": "Rushing past ambivalence toward a decision"
          }
        },
        {
          "id": "b",
          "text": "Tell her directly that she clearly does need to stop and explain exactly why continuing use is a bad idea",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Direct persuasion invites resistance rather than change talk",
          "explanation": {
            "approach": "Confrontational persuasion",
            "rationale": "The righting reflex tends to increase resistance in MI",
            "keyIndicators": [
              "client already ambivalent"
            ],
            "commonMistake": "Arguing the client into agreement"
          }
        },
        {
          "id": "c",
          "text": "Agree with her that stopping does not sound necessary and move the conversation on to another topic",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Agreeing away the ambivalence abandons the clinical opening",
          "explanation": {
            "approach": "Premature closure",
            "rationale": "This forecloses exploring her own reasons for change",
            "keyIndicators": [
              "unexplored ambivalence"
            ],
            "commonMistake": "Sidestepping a clinically important disclosure"
          }
        },
        {
          "id": "d",
          "text": "Stay silent and wait for her to keep talking without offering any reflection or response to what she just said",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Silence alone misses the chance to reflect and deepen exploration",
          "explanation": {
            "approach": "Passive non-response",
            "rationale": "Active reflection, not silence, is the MI skill indicated here",
            "keyIndicators": [
              "open disclosure inviting engagement"
            ],
            "commonMistake": "Withholding reflection when engagement is needed"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "Maya says, \"Everyone smokes, it's really not a big deal.\" How should the counselor respond?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Reflect her view and then explore the discrepancy between that view and the dance class and coursework she has lost",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Developing discrepancy is a core MI skill that stays client-centered",
          "explanation": {
            "approach": "Develop discrepancy without confrontation",
            "rationale": "MI highlights the gap between stated values and behavior to build motivation",
            "keyIndicators": [
              "minimizes use",
              "has lost valued activity"
            ],
            "commonMistake": "Either accepting the minimization or arguing against it directly"
          }
        },
        {
          "id": "b",
          "text": "Correct her directly by stating that her comparison to peers is inaccurate and that her own use is objectively more serious",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Direct correction invites defensiveness rather than reflection",
          "explanation": {
            "approach": "Confrontational correction",
            "rationale": "Arguing against a minimizing statement tends to increase resistance",
            "keyIndicators": [
              "minimizing statement offered"
            ],
            "commonMistake": "Debating the client instead of exploring discrepancy"
          }
        },
        {
          "id": "c",
          "text": "Agree that peer comparisons are a fair way to judge whether her own cannabis use is actually a problem",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Endorsing the comparison reinforces the minimization",
          "explanation": {
            "approach": "Collude with minimization",
            "rationale": "This reinforces the belief that her use is not a concern",
            "keyIndicators": [
              "functional losses already documented"
            ],
            "commonMistake": "Validating a distortion that avoids clinical evidence"
          }
        },
        {
          "id": "d",
          "text": "Move on quickly to a different topic so the session does not turn into an argument about her cannabis use",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the statement leaves an important opening unexplored",
          "explanation": {
            "approach": "Topic avoidance",
            "rationale": "This bypasses a chance to build motivation through discrepancy",
            "keyIndicators": [
              "clinically relevant statement made"
            ],
            "commonMistake": "Sidestepping material central to treatment"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "What is essential for the counselor to cover when obtaining informed consent for this telehealth case?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Confidentiality limits, telehealth-specific risks, and confirmation of her physical location during each session",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Telehealth consent must cover confidentiality limits, risks, and location",
          "explanation": {
            "approach": "Cover standard and telehealth-specific consent elements",
            "rationale": "ACA H.2. requires disclosing telehealth risks and confirming client location",
            "keyIndicators": [
              "adult client",
              "telehealth session format"
            ],
            "commonMistake": "Treating telehealth consent as identical to in-person consent"
          }
        },
        {
          "id": "b",
          "text": "Written confirmation that her parents have already been told that she is beginning counseling for her cannabis use at college",
          "isCorrect": false,
          "weight": -2,
          "rationale": "As an adult, her consent does not require parental notification",
          "explanation": {
            "approach": "Unnecessary parental involvement",
            "rationale": "Adult clients direct their own consent absent a specific exception",
            "keyIndicators": [
              "nineteen years old",
              "legal adult"
            ],
            "commonMistake": "Assuming parental notification is required for adult clients"
          }
        },
        {
          "id": "c",
          "text": "A guarantee that nothing she discusses in session will ever be shared with anyone under any circumstances",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Absolute confidentiality promises misstate real ethical limits",
          "explanation": {
            "approach": "Overpromise privacy",
            "rationale": "Confidentiality has recognized limits that must be disclosed accurately",
            "keyIndicators": [
              "limits of confidentiality must be explained"
            ],
            "commonMistake": "Guaranteeing unconditional secrecy"
          }
        },
        {
          "id": "d",
          "text": "A brief mention that sessions are online, without detailing any of the specific risks unique to that format",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A brief mention alone does not meet telehealth consent standards",
          "explanation": {
            "approach": "Minimal disclosure",
            "rationale": "Telehealth consent requires explaining format-specific risks, not just noting the format",
            "keyIndicators": [
              "telehealth-specific detail required"
            ],
            "commonMistake": "Treating format disclosure as sufficient consent"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "Maya asks whether the counselor will tell her parents about her cannabis use. What is the appropriate response?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Explain that as an adult client her information is confidential and would only be shared under narrow legal or safety limits",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Accurately describes confidentiality as an adult client with its limits",
          "explanation": {
            "approach": "Clarify confidentiality accurately",
            "rationale": "ACA confidentiality standards apply fully to adult clients, with defined exceptions",
            "keyIndicators": [
              "adult client",
              "no safety exception present"
            ],
            "commonMistake": "Implying that parents are automatically informed"
          }
        },
        {
          "id": "b",
          "text": "Tell her that parents are always automatically notified whenever any college student discloses cannabis use during counseling sessions",
          "isCorrect": false,
          "weight": -2,
          "rationale": "This misstates confidentiality for an adult client",
          "explanation": {
            "approach": "False blanket disclosure rule",
            "rationale": "No automatic parental notification exists for a consenting adult client",
            "keyIndicators": [
              "nineteen-year-old adult"
            ],
            "commonMistake": "Inventing a disclosure rule that does not exist"
          }
        },
        {
          "id": "c",
          "text": "Say that the decision depends entirely on how the counselor personally feels about her level of cannabis use",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Confidentiality is governed by ethical and legal standards, not personal feeling",
          "explanation": {
            "approach": "Personal-discretion framing",
            "rationale": "Disclosure decisions follow defined ethical and legal limits, not preference",
            "keyIndicators": [
              "need for a standards-based answer"
            ],
            "commonMistake": "Presenting confidentiality as a matter of personal opinion"
          }
        },
        {
          "id": "d",
          "text": "Avoid answering the question directly so she does not become anxious about continuing to discuss her use",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the question undermines informed consent",
          "explanation": {
            "approach": "Evade the question",
            "rationale": "Clear answers about confidentiality limits are part of informed consent",
            "keyIndicators": [
              "direct client question about confidentiality"
            ],
            "commonMistake": "Dodging a straightforward consent-related question"
          }
        }
      ]
    }
  ]
};

const D209 = {
  "id": "ncmhce-D209",
  "title": "Minimized suicidal thoughts and an accessible firearm after job loss and separation",
  "category": "Crisis",
  "difficulty": "hard",
  "primaryDiagnosis": {
    "name": "Suicidal Behavior / Acute Risk",
    "code": "R45.851"
  },
  "diagnosis": {
    "name": "Suicidal Behavior / Acute Risk",
    "code": "R45.851"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Suicidal Behavior / Acute Risk",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Adjustment Disorder, with Depressed Mood",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Major Depressive Disorder, Moderate",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Nonsuicidal Self-Injury",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Marcus Ridgeway, a 45-year-old Army veteran, presents to outpatient counseling two weeks after his wife moved out and five weeks after being laid off from his warehouse management job. He reports feeling numb and having occasional thoughts of not waking up, but denies any specific plan when asked directly.",
    "session1": "He describes broken sleep, drinking most nights alone, and feeling like a burden to his two teenage children. Asked about safety, he says, \"I think about it sometimes, but I'd never actually do it — I'm not that guy.\" Almost in passing, he mentions he keeps his old service pistol loaded in the nightstand \"just in case,\" and that he took it apart and cleaned it last week to make sure it still worked, out of habit.",
    "session2": "He continues to minimize, calling the thoughts \"just background noise,\" but reports growing hopelessness about reconciling with his wife and describes rehearsing what he would say in a note to his children \"just to get it out of his head.\" His weekend drinking has increased, and he is reluctant to discuss the firearm directly, saying he has \"always been careful with guns.\""
  },
  "diagnosticRationale": "Active suicidal ideation that Marcus minimizes verbally, paired with an accessible, loaded firearm he recently confirmed was functional, layered with recent divorce, job loss, escalating alcohol use, hopelessness, and rehearsing a note to his children, constitutes an acute, high-risk suicidal crisis requiring immediate lethal-means counseling and collaborative safety planning — distinct from an uncomplicated depressive episode, an adjustment reaction, or self-injury without intent to die.",
  "references": [
    {
      "id": "R1",
      "source": "C-SSRS",
      "detail": "Structured assessment of ideation severity, intent, plan, and prior suicidal behavior"
    },
    {
      "id": "R2",
      "source": "Stanley-Brown SPI",
      "detail": "Collaborative safety plan with warning signs, coping, contacts, and means restriction"
    },
    {
      "id": "R3",
      "source": "VA/DoD CPG",
      "detail": "Suicide-risk management: risk stratification, means safety, and level-of-care decisions"
    },
    {
      "id": "R4",
      "source": "ACA Code of Ethics",
      "detail": "B.2.: disclosure to protect from serious and foreseeable harm; informed consent"
    },
    {
      "id": "R5",
      "source": "DSM-5-TR",
      "detail": "Assessment of co-occurring depressive symptoms and substance use in suicide risk"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "Marcus says, \"I think about it sometimes, but I'd never actually do it,\" then quickly changes the subject. What is the most appropriate first step?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Conduct a structured suicide risk assessment covering ideation, intent, plan, and access to means, without accepting his reassurance at face value",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Structured risk assessment comes first, not the reassurance",
          "explanation": {
            "approach": "Assess risk directly and structurally",
            "rationale": "C-SSRS structures the data needed to stratify acute risk even when a client minimizes",
            "keyIndicators": [
              "passing mention of thoughts",
              "quick topic change"
            ],
            "commonMistake": "Letting a client's reassurance substitute for a structured screen"
          }
        },
        {
          "id": "b",
          "text": "Accept that he would never act on the thoughts since he stated this clearly, and move the conversation toward his current job search and daily routine instead",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Taking the reassurance at face value skips assessment",
          "explanation": {
            "approach": "Minimize and move on",
            "rationale": "Verbal reassurance does not rule out acute risk and must not end the inquiry",
            "keyIndicators": [
              "denial-style reassurance"
            ],
            "commonMistake": "Trusting a minimizing statement instead of assessing further"
          }
        },
        {
          "id": "c",
          "text": "Begin teaching grounding and relaxation exercises right away so he has tools to manage the thoughts before anything else",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Intervening before assessing is premature",
          "explanation": {
            "approach": "Skill-first framing",
            "rationale": "Risk must be characterized before any intervention is selected",
            "keyIndicators": [
              "unassessed risk"
            ],
            "commonMistake": "Jumping to coping skills before a risk assessment"
          }
        },
        {
          "id": "d",
          "text": "Refer him immediately to a psychiatrist for a medication evaluation and postpone talking further about the thoughts until that visit",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Deferring the assessment to another provider is unsafe",
          "explanation": {
            "approach": "Defer to medication",
            "rationale": "Acute risk is assessed now by the counselor, not outsourced",
            "keyIndicators": [
              "active disclosure today"
            ],
            "commonMistake": "Outsourcing an acute safety assessment"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "Marcus mentions, almost in passing, that he keeps his sidearm loaded in the nightstand and checked recently that it still worked, then adds that he'd \"never actually do it.\" What should the counselor do?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Explore the disclosure directly, asking follow-up questions about the firearm's accessibility and his recent thoughts about it, rather than accepting his reassurance",
          "isCorrect": true,
          "weight": 3,
          "rationale": "The buried disclosure must be followed up, not skipped",
          "explanation": {
            "approach": "Follow the disclosure, not the reassurance",
            "rationale": "A minimizing statement wrapped around a disclosed lethal means is exactly what a risk screen must surface",
            "keyIndicators": [
              "loaded firearm mentioned in passing",
              "recently checked it worked"
            ],
            "commonMistake": "Hearing the reassurance and missing the buried disclosure of means"
          }
        },
        {
          "id": "b",
          "text": "Take his reassurance that he would never act on the thoughts at face value and continue gathering his employment and relationship history for the intake",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Ignoring the disclosed means after a reassurance is the core trap",
          "explanation": {
            "approach": "Accept the reassurance, ignore the means",
            "rationale": "Failing to probe a disclosed loaded firearm because of a minimizing comment leaves acute lethal risk unaddressed",
            "keyIndicators": [
              "accessible, functional firearm"
            ],
            "commonMistake": "Letting reassuring language override a disclosed lethal means"
          }
        },
        {
          "id": "c",
          "text": "Note the comment for later in the chart and continue with the standard intake questions in the order originally planned for today",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Deferring a means disclosure is unsafe",
          "explanation": {
            "approach": "Defer and continue the checklist",
            "rationale": "A disclosed accessible firearm needs follow-up at the moment it surfaces",
            "keyIndicators": [
              "needs immediate follow-up"
            ],
            "commonMistake": "Sticking rigidly to a planned question order"
          }
        },
        {
          "id": "d",
          "text": "Ask his estranged wife by phone to remove the firearm from the home without first discussing the disclosure further with Marcus himself",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Bypassing Marcus without exploring the disclosure first is premature",
          "explanation": {
            "approach": "Outsource to a third party immediately",
            "rationale": "The disclosure needs direct clinical follow-up with Marcus before any third-party action",
            "keyIndicators": [
              "collaborative approach needed"
            ],
            "commonMistake": "Acting on a third party before assessing with the client"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "What does Marcus's disclosure about the loaded, recently checked firearm most significantly indicate for the risk assessment?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Immediate access to a highly lethal method, independent of his verbal reassurance, which sharply elevates acute risk",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Accessible, functional means is a major acute risk driver",
          "explanation": {
            "approach": "Assess access to lethal means",
            "rationale": "A loaded, working firearm within reach markedly raises lethality regardless of stated intent",
            "keyIndicators": [
              "loaded firearm at bedside",
              "recently confirmed functional"
            ],
            "commonMistake": "Weighing his reassurance more heavily than the disclosed means"
          }
        },
        {
          "id": "b",
          "text": "A need for a detailed history of every firearm he has ever owned so the record fully documents his background with weapons",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Exhaustive ownership history is low yield right now",
          "explanation": {
            "approach": "Inventory framing",
            "rationale": "Current access, not ownership history, drives acute risk",
            "keyIndicators": [
              "current access is the priority"
            ],
            "commonMistake": "Collecting low-yield background detail instead of acting on current access"
          }
        },
        {
          "id": "c",
          "text": "A signal to explore in depth the childhood experiences that shaped how he learned to cope with painful emotions",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Depth history is not the priority right now",
          "explanation": {
            "approach": "Origins framing",
            "rationale": "Acute means assessment takes priority over historical exploration today",
            "keyIndicators": [
              "acute risk present"
            ],
            "commonMistake": "Prioritizing depth work over an acute safety concern"
          }
        },
        {
          "id": "d",
          "text": "A prompt to precisely calculate how many drinks he consumes on an average night so his alcohol use can be quantified",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Quantifying drinks is not the priority the disclosure raises",
          "explanation": {
            "approach": "Quantification framing",
            "rationale": "It does not address the lethal-means risk the disclosure raises",
            "keyIndicators": [
              "means risk is central"
            ],
            "commonMistake": "Substituting a different data point for the means question"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "Marcus mentions his teenage children as a reason he has not acted, but also that he keeps rehearsing a note to them. What is most important for a balanced risk formulation?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Weigh both his risk factors, such as the accessible firearm and hopelessness, against protective factors like his children, rather than reading either alone",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Balanced formulation weighs risk and protective factors together",
          "explanation": {
            "approach": "Form a balanced formulation",
            "rationale": "The same relationship (his children) functions as both a protective factor and a focus of the note-rehearsal, so both must be weighed together",
            "keyIndicators": [
              "names children as a reason to live",
              "rehearsing a note to them"
            ],
            "commonMistake": "Treating the mention of his children as reassuring without weighing the note-rehearsal"
          }
        },
        {
          "id": "b",
          "text": "Focus only on the fact that he has not yet written or sent an actual note, since no completed note means the risk is currently low",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Absence of a finished note does not lower acute risk",
          "explanation": {
            "approach": "Single-factor reassurance",
            "rationale": "Rehearsing a note is itself a warning sign, not a reassuring absence of risk",
            "keyIndicators": [
              "rehearsing content of a note"
            ],
            "commonMistake": "Treating an unfinished note as evidence that risk is low"
          }
        },
        {
          "id": "c",
          "text": "Determine whether his distress is objectively proportionate to the severity of the divorce and job loss he has experienced recently",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Proportionality is not a risk metric",
          "explanation": {
            "approach": "Proportionality framing",
            "rationale": "Proportionality judgments do not gauge suicide risk",
            "keyIndicators": [
              "acute distress present"
            ],
            "commonMistake": "Judging risk by whether distress seems proportionate"
          }
        },
        {
          "id": "d",
          "text": "Ask him to rate his overall mood on a simple numeric scale each session so the trend can be tracked over the coming weeks",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A mood scale alone does not formulate acute risk",
          "explanation": {
            "approach": "Mood-tracking framing",
            "rationale": "A single mood number does not capture the interacting risk and protective factors",
            "keyIndicators": [
              "needs a fuller formulation"
            ],
            "commonMistake": "Substituting a mood scale for a full risk formulation"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "What co-occurring factor is most important to screen for that also raises Marcus's acute risk this week?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "His increased weekend drinking, which can heighten impulsivity and lower the threshold for acting on suicidal thoughts",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Escalating alcohol use raises acute risk",
          "explanation": {
            "approach": "Screen acute substance use",
            "rationale": "Increased drinking heightens impulsivity and disinhibition alongside access to a firearm",
            "keyIndicators": [
              "drinking most nights alone",
              "weekend drinking increased"
            ],
            "commonMistake": "Ignoring escalating alcohol use in a suicide risk assessment"
          }
        },
        {
          "id": "b",
          "text": "A previously undetected primary psychotic disorder that could better explain his numbness and withdrawal from others",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Psychosis is not indicated here",
          "explanation": {
            "approach": "Psychosis framing",
            "rationale": "Nothing in the presentation suggests a psychotic process",
            "keyIndicators": [
              "reality testing intact"
            ],
            "commonMistake": "Pursuing an unsupported rule-out instead of the indicated one"
          }
        },
        {
          "id": "c",
          "text": "A long-standing eating disorder that might be contributing to his poor sleep and his withdrawal from his children this month",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Eating pathology is not indicated",
          "explanation": {
            "approach": "Eating-disorder framing",
            "rationale": "No eating concerns are reported anywhere in the case",
            "keyIndicators": [
              "no eating data present"
            ],
            "commonMistake": "Inventing an unsupported rule-out"
          }
        },
        {
          "id": "d",
          "text": "An emerging neurocognitive decline that could explain why he has trouble concentrating during the current crisis",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Cognitive decline is an improbable explanation here",
          "explanation": {
            "approach": "Neurocognitive framing",
            "rationale": "Acute grief, job loss, and stress are simpler explanations for his concentration trouble",
            "keyIndicators": [
              "acute stressors present"
            ],
            "commonMistake": "Over-attributing acute distress to cognitive decline"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "What is the most appropriate cornerstone of Marcus's safety plan?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "A collaborative safety plan identifying his warning signs, coping strategies, supports, and crisis contacts, built together with him",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Collaborative safety planning is the evidence-based cornerstone",
          "explanation": {
            "approach": "Build a Stanley-Brown plan",
            "rationale": "Collaborative safety planning is evidence-based for acute suicide risk",
            "keyIndicators": [
              "willing to keep talking"
            ],
            "commonMistake": "Relying on a no-suicide contract instead"
          }
        },
        {
          "id": "b",
          "text": "A signed no-suicide contract in which Marcus formally promises in writing that he will not harm himself before the next appointment",
          "isCorrect": false,
          "weight": -2,
          "rationale": "No-suicide contracts are not evidence-based",
          "explanation": {
            "approach": "No-harm contract",
            "rationale": "Contracts do not reduce risk or reliably ensure safety",
            "keyIndicators": [
              "outdated intervention"
            ],
            "commonMistake": "Using a contract in place of a real safety plan"
          }
        },
        {
          "id": "c",
          "text": "A detailed weekly schedule of pleasant activities intended to lift his mood enough that the suicidal thoughts eventually fade",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Activity scheduling alone is insufficient",
          "explanation": {
            "approach": "Behavioral-activation-only",
            "rationale": "It does not address acute means or crisis steps on its own",
            "keyIndicators": [
              "acute risk present"
            ],
            "commonMistake": "Substituting mood work for a full safety plan"
          }
        },
        {
          "id": "d",
          "text": "A firm instruction that Marcus must call the counselor's personal phone the moment any suicidal thought enters his mind",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A single contact rule is not a full plan",
          "explanation": {
            "approach": "Single-contact framing",
            "rationale": "A safety plan layers warning signs, coping, supports, and means safety together",
            "keyIndicators": [
              "needs a full layered plan"
            ],
            "commonMistake": "Reducing safety planning to one instruction"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "Marcus is willing to build a safety plan but says he'd rather \"get into the counseling stuff first\" before talking about the gun. How should the counselor proceed?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Address means restriction for the firearm now, alongside starting the broader safety plan, rather than delaying it to a future session",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Means restriction must happen alongside deeper work, not after it",
          "explanation": {
            "approach": "Sequence means restriction first or in parallel",
            "rationale": "With an accessible, loaded firearm disclosed, means restriction cannot wait for rapport-building or deeper exploration to finish",
            "keyIndicators": [
              "loaded firearm currently accessible"
            ],
            "commonMistake": "Letting the client's preference to defer the topic delay urgent means restriction"
          }
        },
        {
          "id": "b",
          "text": "Follow his lead and postpone the firearm conversation until rapport has developed further over the next several sessions",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Deferring means restriction leaves lethal access in place",
          "explanation": {
            "approach": "Defer to build rapport first",
            "rationale": "Waiting on an accessible, loaded firearm before addressing it leaves acute lethal risk unmanaged",
            "keyIndicators": [
              "accessible means unaddressed"
            ],
            "commonMistake": "Sequencing deeper exploration before urgent means restriction"
          }
        },
        {
          "id": "c",
          "text": "Spend the current session exploring the roots of his depression in depth and revisit the firearm only if it comes up again naturally",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Leaving the firearm to chance is unsafe sequencing",
          "explanation": {
            "approach": "Depth-first framing",
            "rationale": "A disclosed lethal means needs a deliberate follow-up, not a hope it resurfaces",
            "keyIndicators": [
              "needs deliberate follow-up"
            ],
            "commonMistake": "Hoping a safety topic reappears instead of raising it"
          }
        },
        {
          "id": "d",
          "text": "Tell him firmly that counseling cannot continue at all until the firearm is completely removed from the home today",
          "isCorrect": false,
          "weight": -1,
          "rationale": "An ultimatum is coercive and can rupture engagement",
          "explanation": {
            "approach": "Ultimatum framing",
            "rationale": "Means restriction should be collaborative, not an all-or-nothing demand",
            "keyIndicators": [
              "needs a collaborative approach"
            ],
            "commonMistake": "Issuing a rigid ultimatum instead of collaborating"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "What is the most appropriate way for the counselor to address the firearm itself?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Counsel collaboratively on means restriction, such as temporarily storing the firearm with a trusted person away from the home or using a lock",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Collaborative means restriction is the central intervention",
          "explanation": {
            "approach": "Reduce access to lethal means collaboratively",
            "rationale": "Means restriction, done with the client rather than to him, reduces suicide risk during a crisis",
            "keyIndicators": [
              "accessible loaded firearm"
            ],
            "commonMistake": "Leaving the disclosed lethal means unaddressed in the plan"
          }
        },
        {
          "id": "b",
          "text": "Contact local police directly to have the firearm confiscated from his home without first discussing the plan with Marcus",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Unilateral confiscation without collaboration is inappropriate",
          "explanation": {
            "approach": "Confiscate via police unilaterally",
            "rationale": "Means restriction should be collaborative and is not the counselor directing police action as a first step",
            "keyIndicators": [
              "no collaborative discussion yet"
            ],
            "commonMistake": "Escalating to police confiscation before working with the client"
          }
        },
        {
          "id": "c",
          "text": "Suggest he simply unload the firearm and keep the ammunition stored in a separate drawer within the very same bedroom",
          "isCorrect": false,
          "weight": -1,
          "rationale": "In-home storage still leaves ready access",
          "explanation": {
            "approach": "Half-measure framing",
            "rationale": "Keeping the firearm and ammunition in the same home retains meaningful access",
            "keyIndicators": [
              "retained in-home access"
            ],
            "commonMistake": "Settling for an inadequate in-home storage measure"
          }
        },
        {
          "id": "d",
          "text": "Respect his autonomy and leave the decision about the firearm entirely up to him without raising the topic again",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Deferring entirely abandons means-restriction counseling",
          "explanation": {
            "approach": "Autonomy-only framing",
            "rationale": "Means-restriction counseling is indicated during an acute crisis, not optional to raise",
            "keyIndicators": [
              "acute risk present"
            ],
            "commonMistake": "Using autonomy as a reason to avoid the conversation"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "On what basis should the counselor decide whether Marcus needs a higher level of care, such as psychiatric hospitalization?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "A clinical judgment weighing his intent, access to means, protective factors, and his ability to engage safely with a collaborative plan",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Stratified clinical judgment drives the disposition decision",
          "explanation": {
            "approach": "Match level of care to assessed risk",
            "rationale": "Disposition decisions weigh intent, means, protective factors, and capacity to engage with safety planning",
            "keyIndicators": [
              "accessible means",
              "some protective factors present"
            ],
            "commonMistake": "Using a single factor alone to decide the disposition"
          }
        },
        {
          "id": "b",
          "text": "Hospitalizing him automatically today simply because he disclosed both suicidal thoughts and access to a firearm in the same session",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Reflexive admission bypasses individualized judgment",
          "explanation": {
            "approach": "Over-hospitalization",
            "rationale": "Not every disclosure of ideation and means alone requires inpatient admission without a fuller assessment",
            "keyIndicators": [
              "needs a stratified decision"
            ],
            "commonMistake": "Admitting reflexively without weighing the full picture"
          }
        },
        {
          "id": "c",
          "text": "Leaving the hospitalization decision entirely up to Marcus himself, since he denies any current intent to act on the thoughts",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Disposition is a clinical judgment, not the client's alone",
          "explanation": {
            "approach": "Client-request framing",
            "rationale": "Level of care is clinically determined even when the client denies intent",
            "keyIndicators": [
              "clinical judgment needed"
            ],
            "commonMistake": "Deferring the disposition decision to the client alone"
          }
        },
        {
          "id": "d",
          "text": "Avoiding any discussion of hospitalization at all so as not to damage the therapeutic relationship being built with him",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Refusing to consider hospitalization ignores acute danger",
          "explanation": {
            "approach": "Avoid the topic entirely",
            "rationale": "Higher levels of care must remain on the table when acuity warrants it",
            "keyIndicators": [
              "possible imminent risk"
            ],
            "commonMistake": "Ruling out hospitalization regardless of assessed risk"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "Marcus says the thoughts are \"just background noise\" but also mentions he's been rehearsing what he'd say in a note to his kids. What is the most therapeutic response?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Gently name the discrepancy between his minimizing language and the note-rehearsal, and explore its meaning and urgency with empathy",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Naming the discrepancy with empathy opens the disclosure further",
          "explanation": {
            "approach": "Reflect the discrepancy empathically",
            "rationale": "Gently surfacing the gap between his words and his disclosure invites fuller, safer exploration",
            "keyIndicators": [
              "minimizing language",
              "rehearsing a note"
            ],
            "commonMistake": "Letting the minimizing label pass without exploring the note-rehearsal"
          }
        },
        {
          "id": "b",
          "text": "Reassure him that rehearsing a note is a common, low-risk habit that does not need much further attention today",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Reassurance here forecloses needed exploration",
          "explanation": {
            "approach": "Reassure and move on",
            "rationale": "Rehearsing a note to loved ones is a warning sign that warrants exploration, not reassurance",
            "keyIndicators": [
              "needs exploration, not reassurance"
            ],
            "commonMistake": "Minimizing a warning sign the same way the client does"
          }
        },
        {
          "id": "c",
          "text": "Accept his description of background noise and shift the conversation to lighter, less distressing topics for the rest of the session",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Avoiding the disclosure leaves acute risk unexplored",
          "explanation": {
            "approach": "Avoid the disclosure",
            "rationale": "Shifting away from a note-rehearsal disclosure sidesteps the central safety issue",
            "keyIndicators": [
              "active disclosure present"
            ],
            "commonMistake": "Redirecting away from a safety disclosure to reduce discomfort"
          }
        },
        {
          "id": "d",
          "text": "Firmly tell him that writing a note to his children is dangerous and that he must stop thinking about it immediately",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A firm command can shut down further disclosure",
          "explanation": {
            "approach": "Command and shut down",
            "rationale": "Directive confrontation risks discouraging him from disclosing further",
            "keyIndicators": [
              "needs continued open disclosure"
            ],
            "commonMistake": "Commanding rather than exploring with empathy"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "Marcus expresses hopelessness that his marriage and career will ever be okay again. How can the counselor best instill hope without dismissing his pain?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Validate how overwhelming the losses feel right now while helping him see the current crisis and his options as changeable over time",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Validating pain while framing the crisis as changeable supports hope",
          "explanation": {
            "approach": "Balance validation with hope",
            "rationale": "Framing the crisis as time-limited and changeable supports safety without dismissing his pain",
            "keyIndicators": [
              "acute hopelessness expressed"
            ],
            "commonMistake": "Either only sympathizing or only reassuring him"
          }
        },
        {
          "id": "b",
          "text": "Promise him confidently that his wife will likely return and that a new job will come soon if he just stays positive",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Overpromising outcomes can ring hollow and backfire",
          "explanation": {
            "approach": "Guarantee outcomes",
            "rationale": "Unrealistic guarantees about his marriage and job can undercut credibility",
            "keyIndicators": [
              "acute despair present"
            ],
            "commonMistake": "Making promises about outcomes you cannot control"
          }
        },
        {
          "id": "c",
          "text": "Agree that his situation does look genuinely hopeless right now and focus only on getting him through the next few hours",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Endorsing hopelessness reinforces the despair driving the crisis",
          "explanation": {
            "approach": "Concede hopelessness",
            "rationale": "Agreeing that the situation is hopeless reinforces the very belief driving his risk",
            "keyIndicators": [
              "therapeutic pessimism"
            ],
            "commonMistake": "Adopting the client's hopeless stance"
          }
        },
        {
          "id": "d",
          "text": "Redirect the conversation to practical job-search tasks whenever his hopelessness about the marriage and career comes up",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Redirecting away from despair leaves it unaddressed",
          "explanation": {
            "approach": "Topic redirection",
            "rationale": "It bypasses the central emotional material driving the crisis",
            "keyIndicators": [
              "unaddressed hopelessness"
            ],
            "commonMistake": "Avoiding emotionally central material with a task list"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "Marcus asks whether anything he says about the gun or his thoughts will ever leave the room. What is the most appropriate response?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Explain the limits of confidentiality, including that a serious and foreseeable risk of harm may require disclosure to keep him safe",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Confidentiality has safety-based limits that must be explained",
          "explanation": {
            "approach": "Clarify confidentiality and its limits",
            "rationale": "ACA B.2. permits disclosure to protect a client from serious, foreseeable harm",
            "keyIndicators": [
              "asks about absolute secrecy",
              "accessible means disclosed"
            ],
            "commonMistake": "Promising unconditional confidentiality"
          }
        },
        {
          "id": "b",
          "text": "Promise him that nothing he discloses about the firearm or his thoughts will ever be shared with anyone under any circumstances",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Absolute confidentiality is inaccurate and unethical here",
          "explanation": {
            "approach": "Overpromise privacy",
            "rationale": "It misstates the safety-based limits that actually apply",
            "keyIndicators": [
              "danger exception applies"
            ],
            "commonMistake": "Guaranteeing unconditional secrecy"
          }
        },
        {
          "id": "c",
          "text": "Tell him that because he mentioned a firearm, the counselor must call the police right now regardless of how the full risk assessment turns out",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Disclosure should follow the completed risk assessment, not precede it",
          "explanation": {
            "approach": "Reflexive disclosure",
            "rationale": "Disclosure decisions follow a careful, completed risk assessment",
            "keyIndicators": [
              "needs a proportionate response"
            ],
            "commonMistake": "Escalating to police before the assessment is complete"
          }
        },
        {
          "id": "d",
          "text": "Avoid answering his question directly so that he keeps feeling comfortable continuing to disclose further details",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Dodging the question undermines informed consent",
          "explanation": {
            "approach": "Evade the question",
            "rationale": "Confidentiality limits are part of informed consent and should not be dodged",
            "keyIndicators": [
              "informed consent owed"
            ],
            "commonMistake": "Concealing the limits of confidentiality to keep him talking"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "Marcus agrees to a collaborative safety plan and to temporarily store the firearm with his brother. How should the counselor document this session?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Document the risk assessment findings, the means-restriction steps agreed to, the safety plan, and the clinical rationale for the disposition",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Thorough documentation captures assessment, plan, and rationale",
          "explanation": {
            "approach": "Keep thorough crisis documentation",
            "rationale": "Sound records capture the assessment, the means-restriction agreement, and the reasoning behind the disposition",
            "keyIndicators": [
              "means-restriction agreement reached",
              "safety plan in place"
            ],
            "commonMistake": "Documenting only that he denied a plan"
          }
        },
        {
          "id": "b",
          "text": "Record only that Marcus promised he would not harm himself before the next scheduled appointment with the counselor",
          "isCorrect": false,
          "weight": -2,
          "rationale": "A promise-only note is inadequate and misleading",
          "explanation": {
            "approach": "Contract-as-record",
            "rationale": "A bare promise is not evidence-based and does not document the actual risk care provided",
            "keyIndicators": [
              "ineffective, incomplete record"
            ],
            "commonMistake": "Substituting a promise note for real documentation"
          }
        },
        {
          "id": "c",
          "text": "Write a brief note stating simply that the client is fine now and that no further risk monitoring is needed going forward",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Minimizing the record is unsafe and inaccurate",
          "explanation": {
            "approach": "Minimize the record",
            "rationale": "It omits the assessment findings and the ongoing risk monitoring plan",
            "keyIndicators": [
              "ongoing risk still present"
            ],
            "commonMistake": "Understating risk in the clinical record"
          }
        },
        {
          "id": "d",
          "text": "Leave the details of the suicide risk assessment out of the chart entirely to protect his privacy as a veteran",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Omitting the assessment from the record is improper",
          "explanation": {
            "approach": "Privacy-by-omission",
            "rationale": "The risk assessment and safety plan must be documented accurately regardless of veteran status",
            "keyIndicators": [
              "record integrity required"
            ],
            "commonMistake": "Omitting essential clinical information from the chart"
          }
        }
      ]
    }
  ]
};

const D210 = {
  "id": "ncmhce-D210",
  "title": "Workplace anger that narrows into a named, specific threat",
  "category": "Crisis",
  "difficulty": "hard",
  "primaryDiagnosis": {
    "name": "Homicidal Ideation / Threat Assessment",
    "code": "R45.850"
  },
  "diagnosis": {
    "name": "Homicidal Ideation / Threat Assessment",
    "code": "R45.850"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Homicidal Ideation / Threat Assessment",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Intermittent Explosive Disorder",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Adjustment Disorder, with Disturbance of Conduct",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Paranoid Personality Disorder",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Marcus Webb, a 34-year-old logistics coordinator, is referred through his employer's Employee Assistance Program after a heated confrontation with a supervisor led to a written disciplinary warning. He reports chronic frustration with what he calls unfair treatment at work and agrees to short-term EAP counseling to manage his anger.",
    "session1": "In the first session, Marcus vents broadly that 'everyone at that company is against him' and that management as a whole is corrupt and out to get him. He paces and raises his voice, but when asked directly he denies any specific person he wants to harm, any plan, and any access to a weapon; his statements stay global and non-specific.",
    "session2": "Two weeks later, Marcus's anger has narrowed onto his supervisor, whom he names as Gary Holt. He says Gary 'is going to regret what he did to me,' mentions he still has an active keycard to the building from before his suspension, and notes he knows Gary's usual parking spot and the evenings Gary works late alone."
  },
  "diagnosticRationale": "Marcus's presentation escalates from diffuse, non-specific anger with no identifiable target to homicidal ideation naming a specific, identifiable victim (Gary Holt), a stated intent, and means (retained keycard access, knowledge of the victim's parking location and late-work schedule). This combination of an identifiable victim plus apparent intent and access to means meets the threshold for a homicidal ideation/threat assessment requiring duty-to-protect analysis, distinguishing it from Intermittent Explosive Disorder's recurrent impulsive outbursts, Adjustment Disorder's diffuse and disproportionate stress reaction, or Paranoid Personality Disorder's chronic, non-acute suspiciousness.",
  "references": [
    {
      "id": "R1",
      "source": "ACA Code of Ethics",
      "detail": "B.2.c: disclosure permitted without consent for serious and foreseeable harm to an identifiable third party"
    },
    {
      "id": "R2",
      "source": "State law",
      "detail": "Tarasoff-style duty-to-protect statute: identifiable victim plus apparent intent and means triggers warning/notification duty"
    },
    {
      "id": "R3",
      "source": "DSM-5-TR",
      "detail": "R45.850 homicidal ideation as a focus of clinical attention, differentiated from IED and adjustment disorder"
    },
    {
      "id": "R4",
      "source": "NBCC Content Outline",
      "detail": "Crisis intervention and the counselor's legal/ethical duty to protect identifiable third parties"
    },
    {
      "id": "R5",
      "source": "Wiger (Documentation)",
      "detail": "Standards for documenting risk assessments, consultations, and duty-to-protect actions taken"
    },
    {
      "id": "R6",
      "source": "Corey (Theory & Practice)",
      "detail": "Ethical decision-making models for boundary and duty-to-warn dilemmas in the counseling relationship"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "In session one, Marcus vents broadly that 'everyone at that company is against him' but denies any specific person, plan, or weapon when asked directly. What is the most appropriate counselor response?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Continue exploring the anger with open-ended questions, watching for any narrowing toward a specific target, plan, or means",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Diffuse venting alone does not meet a warning threshold",
          "explanation": {
            "approach": "Assess further without breaching confidentiality",
            "rationale": "No identifiable victim, intent, or means is present, so continued exploration is indicated rather than disclosure",
            "keyIndicators": [
              "global, non-specific anger",
              "denies target, plan, or weapon"
            ],
            "commonMistake": "Treating any expression of anger as an automatic trigger to warn someone"
          }
        },
        {
          "id": "b",
          "text": "Call his employer immediately to warn staff that Marcus may become violent toward people at the company, since he voiced strong anger toward it",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Breaching confidentiality here is premature and unjustified",
          "explanation": {
            "approach": "Disclose based on emotion rather than criteria",
            "rationale": "No identifiable victim, intent, or means exists yet, so disclosure violates confidentiality without meeting the legal/ethical threshold",
            "keyIndicators": [
              "no identifiable target named"
            ],
            "commonMistake": "Over-triggering duty-to-protect on vague, diffuse venting"
          }
        },
        {
          "id": "c",
          "text": "Note the venting as ordinary workplace stress and close the topic without asking any further questions about his anger",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Dropping the topic forgoes needed ongoing assessment",
          "explanation": {
            "approach": "Minimize and disengage from the topic",
            "rationale": "Anger this intense still warrants continued clinical attention even though it is not yet actionable",
            "keyIndicators": [
              "intense affect present"
            ],
            "commonMistake": "Dismissing anger entirely instead of monitoring it"
          }
        },
        {
          "id": "d",
          "text": "Teach a breathing exercise for anger management right away and postpone asking about the target of the anger until a later session",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Skill-building before assessment is premature",
          "explanation": {
            "approach": "Intervene before assessing",
            "rationale": "Clarifying the object and specificity of the anger should come before teaching coping skills",
            "keyIndicators": [
              "assessment incomplete"
            ],
            "commonMistake": "Jumping to intervention before the anger is characterized"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "What additional intake history is most important to gather given Marcus's presenting anger, even while his statements remain diffuse?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "A structured history of past aggression or violence, current access to weapons, and any substance use that could affect impulse control",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Baseline violence-risk history informs future assessment",
          "explanation": {
            "approach": "Gather structured violence-risk history",
            "rationale": "History of aggression, weapon access, and substance use are standard baseline data for later risk stratification",
            "keyIndicators": [
              "escalating conflict at work",
              "disciplinary warning"
            ],
            "commonMistake": "Skipping baseline risk history because the client seems calm today"
          }
        },
        {
          "id": "b",
          "text": "A complete inventory of every job Marcus has held so the counselor can fully understand his entire occupational history",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Exhaustive job history is low yield here",
          "explanation": {
            "approach": "Collect broad but low-relevance detail",
            "rationale": "This does not inform risk or the presenting concern",
            "keyIndicators": [
              "low clinical yield"
            ],
            "commonMistake": "Gathering detail that does not serve the assessment"
          }
        },
        {
          "id": "c",
          "text": "A detailed exploration of his childhood relationship with his parents in order to trace the origins of his anger over many years",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Origins work is secondary to acute risk data now",
          "explanation": {
            "approach": "Prioritize depth history over current risk",
            "rationale": "Current risk factors take priority in an EAP crisis referral",
            "keyIndicators": [
              "acute referral context"
            ],
            "commonMistake": "Prioritizing depth history over acute risk screening"
          }
        },
        {
          "id": "d",
          "text": "Whether Marcus's coworkers generally like him and how his overall reputation is perceived across the office",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Coworker opinion is not a risk indicator",
          "explanation": {
            "approach": "Focus on social reputation",
            "rationale": "Reputation among peers does not inform violence risk",
            "keyIndicators": [
              "not a risk factor"
            ],
            "commonMistake": "Confusing likability with risk assessment"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "Applying duty-to-protect criteria to Marcus's diffuse statements in session one, what is the correct conclusion at this point?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "No duty-to-protect action is triggered yet, since there is no identifiable victim, stated intent, or means; confidentiality is maintained while monitoring continues",
          "isCorrect": true,
          "weight": 3,
          "rationale": "The legal threshold requires an identifiable victim",
          "explanation": {
            "approach": "Apply the identifiable-victim standard",
            "rationale": "State duty-to-protect statutes generally require a specific, identifiable victim plus apparent intent and means before disclosure is warranted",
            "keyIndicators": [
              "no named target",
              "no plan or means described"
            ],
            "commonMistake": "Assuming any anger toward a group meets the legal threshold"
          }
        },
        {
          "id": "b",
          "text": "The duty to protect is triggered now because Marcus already received a formal disciplinary warning for a prior confrontation at work",
          "isCorrect": false,
          "weight": -2,
          "rationale": "A disciplinary record alone does not create a duty to warn",
          "explanation": {
            "approach": "Trigger disclosure from workplace history alone",
            "rationale": "A prior write-up is not the same as an identifiable victim with intent and means",
            "keyIndicators": [
              "confuses history with active threat"
            ],
            "commonMistake": "Treating past conflict as equivalent to an active, specific threat"
          }
        },
        {
          "id": "c",
          "text": "The duty to protect can never be triggered for Marcus going forward, since he already denied a plan or weapon in this first session",
          "isCorrect": false,
          "weight": -2,
          "rationale": "The threshold must be reassessed at every session",
          "explanation": {
            "approach": "Treat the first denial as permanent",
            "rationale": "Risk is dynamic and must be reassessed as new information emerges in later sessions",
            "keyIndicators": [
              "risk can change over time"
            ],
            "commonMistake": "Assuming an early low-risk finding rules out future risk"
          }
        },
        {
          "id": "d",
          "text": "It is unclear, so the safest course is to notify law enforcement now as a precaution regardless of what the criteria actually require",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Precautionary notification without meeting criteria is inappropriate",
          "explanation": {
            "approach": "Notify preemptively out of caution",
            "rationale": "Disclosure decisions should follow the legal/ethical criteria, not generalized caution",
            "keyIndicators": [
              "criteria not met"
            ],
            "commonMistake": "Substituting caution for a criteria-based judgment"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "In session two, Marcus names his supervisor Gary Holt, says Gary 'is going to regret what he did to me,' and mentions his retained keycard and knowledge of Gary's parking spot and late-work schedule. What is the most critical clinical task right now?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Conduct a focused threat assessment clarifying the specificity, intent, means, and imminence of the threat toward Gary Holt",
          "isCorrect": true,
          "weight": 3,
          "rationale": "A structured threat assessment is now required",
          "explanation": {
            "approach": "Assess the newly specific threat directly",
            "rationale": "A named victim plus stated intent plus means requires immediate, structured clarification of imminence before any action",
            "keyIndicators": [
              "names Gary Holt",
              "keycard access",
              "knows schedule and parking spot"
            ],
            "commonMistake": "Failing to recognize the shift from diffuse to specific, actionable content"
          }
        },
        {
          "id": "b",
          "text": "Treat this the same way as the session-one venting and continue with general anger-management coping skills as previously planned",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Treating this as unchanged venting misses the escalation",
          "explanation": {
            "approach": "Continue the prior treatment plan unchanged",
            "rationale": "The presentation now includes an identifiable victim, intent, and means, which is qualitatively different from the earlier diffuse anger",
            "keyIndicators": [
              "specific victim now named"
            ],
            "commonMistake": "Failing to distinguish escalation from ongoing baseline anger"
          }
        },
        {
          "id": "c",
          "text": "Call the police immediately without first clarifying any further details about intent, means, or imminence with Marcus",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Acting before assessing is premature, though the concern is valid",
          "explanation": {
            "approach": "Escalate to law enforcement before assessing",
            "rationale": "A brief focused assessment of intent, means, and imminence should occur first to inform an appropriate, proportionate response",
            "keyIndicators": [
              "assessment not yet completed"
            ],
            "commonMistake": "Skipping assessment and jumping straight to notification"
          }
        },
        {
          "id": "d",
          "text": "Redirect the session to Marcus's original workplace complaints about unfair treatment and set that as today's primary agenda",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Redirecting away from the threat avoids the central issue",
          "explanation": {
            "approach": "Refocus on the original grievance",
            "rationale": "The newly specific threat must be addressed directly rather than set aside for the broader complaint",
            "keyIndicators": [
              "unaddressed specific threat"
            ],
            "commonMistake": "Avoiding the most urgent clinical content in the session"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "What specific features distinguish Marcus's session-two statements from his earlier diffuse venting and establish the duty-to-protect trigger?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "The presence of an identifiable, named victim combined with apparent intent and access to a means of carrying it out",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Identifiability plus intent plus means is the Tarasoff-style trigger",
          "explanation": {
            "approach": "Apply the three-part identifiability standard",
            "rationale": "Naming Gary Holt, stating intent, and describing keycard access and schedule knowledge together meet the standard, unlike the earlier diffuse comments",
            "keyIndicators": [
              "named victim",
              "stated intent",
              "keycard and schedule knowledge"
            ],
            "commonMistake": "Treating intensity of anger alone as the deciding factor"
          }
        },
        {
          "id": "b",
          "text": "The fact that Marcus is now visibly angrier in tone than he was during the earlier, diffuse session with the counselor",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Affect intensity alone does not establish the trigger",
          "explanation": {
            "approach": "Use emotional intensity as the criterion",
            "rationale": "Anger level was already present earlier; specificity and means are what changed",
            "keyIndicators": [
              "affect is not the deciding factor"
            ],
            "commonMistake": "Equating stronger emotion with higher actionable risk"
          }
        },
        {
          "id": "c",
          "text": "The fact that Marcus previously received a written disciplinary warning from his employer for the original confrontation",
          "isCorrect": false,
          "weight": -1,
          "rationale": "The disciplinary history is background, not the trigger",
          "explanation": {
            "approach": "Use employment history as the criterion",
            "rationale": "This history existed before the specific threat and does not itself establish identifiability or means",
            "keyIndicators": [
              "background context only"
            ],
            "commonMistake": "Conflating employment consequences with threat specificity"
          }
        },
        {
          "id": "d",
          "text": "The trigger only applies once Marcus is holding an actual weapon in his hand during a session with the counselor present",
          "isCorrect": false,
          "weight": -2,
          "rationale": "This overly narrow standard is clinically incorrect",
          "explanation": {
            "approach": "Require a weapon physically present to act",
            "rationale": "Duty-to-protect analysis relies on stated intent, identifiability, and access to means, not a weapon being visibly present",
            "keyIndicators": [
              "means can be described, not shown"
            ],
            "commonMistake": "Setting an unrealistically high bar before acting"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "Immediately after the focused threat assessment in session two confirms a specific, identifiable threat, what is the most appropriate next treatment-planning step?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Promptly consult with a supervisor and, as needed, legal counsel to determine the appropriate duty-to-protect pathway under state law",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Consultation guides a defensible, correct pathway",
          "explanation": {
            "approach": "Consult before acting unilaterally",
            "rationale": "Working within ethical and legal limits means confirming the correct notification pathway through consultation rather than acting alone",
            "keyIndicators": [
              "identifiable victim confirmed",
              "counselor working within scope"
            ],
            "commonMistake": "Acting alone without consultation on a high-stakes disclosure decision"
          }
        },
        {
          "id": "b",
          "text": "Drive to Gary Holt's home personally that evening to warn him directly before doing anything else about the situation",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Unilateral, out-of-scope action bypasses proper channels",
          "explanation": {
            "approach": "Act unilaterally outside professional channels",
            "rationale": "Notification should go through appropriate legal/professional channels, not a counselor personally intervening",
            "keyIndicators": [
              "exceeds counselor scope"
            ],
            "commonMistake": "Taking personal, unsupervised action instead of following the proper pathway"
          }
        },
        {
          "id": "c",
          "text": "End the session and tell Marcus that treatment can no longer continue with this agency, effective immediately, without any referral",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Abrupt termination without referral abandons the client",
          "explanation": {
            "approach": "Terminate care abruptly",
            "rationale": "Abandoning a high-risk client without referral or continuity of care is inappropriate",
            "keyIndicators": [
              "client abandonment risk"
            ],
            "commonMistake": "Discharging a high-risk client instead of engaging the proper process"
          }
        },
        {
          "id": "d",
          "text": "Continue with the originally planned anger-management curriculum for this session and revisit the threat at the next visit",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Delaying to a future session is unsafe given imminence concerns",
          "explanation": {
            "approach": "Defer the issue to a later session",
            "rationale": "A confirmed specific threat needs prompt consultation now, not deferral",
            "keyIndicators": [
              "imminence concern"
            ],
            "commonMistake": "Postponing action on a confirmed, specific threat"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "As part of the treatment plan, how should the counselor decide whether Marcus needs a higher level of care versus continued outpatient EAP sessions?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Base the decision on a clinical judgment weighing the imminence, specificity, and means of the threat along with Marcus's ability to stay safe",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Level-of-care decisions rest on a weighed clinical judgment",
          "explanation": {
            "approach": "Match level of care to assessed imminence and risk",
            "rationale": "Disposition should weigh intent, means, imminence, and Marcus's capacity to manage the impulse safely",
            "keyIndicators": [
              "named victim and means present",
              "imminence still being clarified"
            ],
            "commonMistake": "Using a single factor instead of a weighed formulation for disposition"
          }
        },
        {
          "id": "b",
          "text": "Base the decision entirely on whether Marcus himself requests a higher level of care during today's session with the counselor",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Disposition is a clinical judgment, not solely client-driven",
          "explanation": {
            "approach": "Let the client decide the disposition",
            "rationale": "Level-of-care decisions in an active threat situation are clinically determined, not left entirely to client preference",
            "keyIndicators": [
              "clinical judgment required"
            ],
            "commonMistake": "Deferring a safety-critical decision entirely to the client"
          }
        },
        {
          "id": "c",
          "text": "Automatically arrange inpatient hospitalization for Marcus, since any mention of harming a specific person always requires admission",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Reflexive hospitalization is not the standard",
          "explanation": {
            "approach": "Hospitalize automatically regardless of formulation",
            "rationale": "Not every specific statement automatically requires inpatient admission; a weighed assessment should guide it",
            "keyIndicators": [
              "stratified decision needed"
            ],
            "commonMistake": "Skipping individualized assessment in favor of a blanket rule"
          }
        },
        {
          "id": "d",
          "text": "Avoid considering hospitalization at all, since raising it might damage the working relationship the counselor has built with Marcus",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Ruling out a higher level of care ignores possible danger",
          "explanation": {
            "approach": "Avoid the topic to protect rapport",
            "rationale": "Safety needs must be assessed and addressed even if the topic is uncomfortable",
            "keyIndicators": [
              "possible imminent risk"
            ],
            "commonMistake": "Prioritizing rapport over a needed safety evaluation"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "Once consultation confirms the duty-to-protect pathway applies, what is the most appropriate way to carry out the notification itself?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Warn the identifiable victim and/or notify appropriate law enforcement per the applicable state law, sharing only the information necessary",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Notification should follow the state-law pathway with minimal necessary disclosure",
          "explanation": {
            "approach": "Follow the legal notification pathway narrowly",
            "rationale": "Disclosure should be limited to what is needed to protect the identifiable victim, made through the correct legal channel",
            "keyIndicators": [
              "identifiable victim named",
              "means and intent confirmed"
            ],
            "commonMistake": "Disclosing more information than necessary or through an improper channel"
          }
        },
        {
          "id": "b",
          "text": "Say nothing to anyone and maintain complete confidentiality, since Marcus has not yet actually harmed Gary Holt in any way",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Failing to act once the threshold is met is unsafe",
          "explanation": {
            "approach": "Withhold disclosure entirely despite the confirmed threat",
            "rationale": "Once specificity, intent, and means are confirmed, failing to notify fails the duty-to-protect obligation",
            "keyIndicators": [
              "threshold already met"
            ],
            "commonMistake": "Waiting for actual harm before acting on a confirmed threat"
          }
        },
        {
          "id": "c",
          "text": "Have Marcus call Gary Holt himself during the session to apologize directly as a way of resolving the situation informally",
          "isCorrect": false,
          "weight": -2,
          "rationale": "This creates unsafe, unmediated contact instead of proper notification",
          "explanation": {
            "approach": "Arrange direct client-to-victim contact",
            "rationale": "This bypasses the required protective notification and could increase danger",
            "keyIndicators": [
              "unsafe informal resolution"
            ],
            "commonMistake": "Substituting client-arranged contact for the required protective action"
          }
        },
        {
          "id": "d",
          "text": "Post a general public warning on social media describing Marcus's statements without naming him, to alert anyone who might be affected",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Public, non-specific disclosure is an improper channel",
          "explanation": {
            "approach": "Use public disclosure instead of a proper channel",
            "rationale": "Notification should go to the identifiable victim and/or law enforcement, not a public posting",
            "keyIndicators": [
              "improper disclosure channel"
            ],
            "commonMistake": "Choosing an informal public channel over the proper legal pathway"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "After the notification steps are taken, how should the counselor handle documentation and continued treatment planning for Marcus?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Document the risk assessment, consultation, notification actions, and rationale in detail, and continue engaging Marcus in treatment with a safety plan",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Thorough documentation and continued engagement are both required",
          "explanation": {
            "approach": "Document fully and maintain continuity of care",
            "rationale": "Sound records capture the assessment, consultation, and actions, while ongoing engagement continues to address risk",
            "keyIndicators": [
              "notification completed",
              "ongoing risk to monitor"
            ],
            "commonMistake": "Documenting only the final action while omitting the reasoning"
          }
        },
        {
          "id": "b",
          "text": "Write a brief note stating only that Marcus is now fine and that no further clinical concern or follow-up is needed going forward",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Minimizing the record after a duty-to-protect action is unsafe",
          "explanation": {
            "approach": "Minimize the record after acting",
            "rationale": "The chart must reflect ongoing risk and the plan for continued monitoring, not a premature all-clear",
            "keyIndicators": [
              "ongoing risk after notification"
            ],
            "commonMistake": "Understating risk in the record after taking protective action"
          }
        },
        {
          "id": "c",
          "text": "Leave the specific details of the threat out of the chart entirely in order to protect Marcus's privacy going forward",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Omitting essential clinical detail is improper",
          "explanation": {
            "approach": "Omit sensitive detail from the record",
            "rationale": "The assessment, consultation, and notification must be documented accurately for continuity and accountability",
            "keyIndicators": [
              "record integrity needed"
            ],
            "commonMistake": "Withholding essential clinical information from the chart"
          }
        },
        {
          "id": "d",
          "text": "Discontinue treatment with Marcus immediately after notification, since the counselor's obligation ends once the warning has been made",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Ending care right after notification abandons ongoing risk needs",
          "explanation": {
            "approach": "Treat notification as the end of the counselor's role",
            "rationale": "Continued engagement and safety planning remain necessary after a protective disclosure",
            "keyIndicators": [
              "risk work still needed"
            ],
            "commonMistake": "Assuming the clinical relationship ends once a warning is issued"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "As Marcus describes wanting Gary to 'regret what he did,' what is the most therapeutic way for the counselor to respond within the session?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Validate the underlying hurt and frustration while directly and non-judgmentally asking Marcus to say more about what he means by 'regret'",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Empathic validation paired with direct clarification is therapeutic",
          "explanation": {
            "approach": "Balance empathy with direct clarification",
            "rationale": "Validating the emotion keeps Marcus engaged while directly clarifying intent is clinically necessary",
            "keyIndicators": [
              "ambiguous statement of intent",
              "strong underlying hurt"
            ],
            "commonMistake": "Either only sympathizing or only interrogating without empathy"
          }
        },
        {
          "id": "b",
          "text": "Tell Marcus firmly that what he is saying sounds illegal and that he needs to stop talking about Gary Holt immediately",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Shutting down disclosure loses needed clinical information",
          "explanation": {
            "approach": "Shut down the disclosure abruptly",
            "rationale": "Cutting off the conversation prevents the assessment needed to determine actual risk",
            "keyIndicators": [
              "assessment still incomplete"
            ],
            "commonMistake": "Silencing disclosure instead of exploring it further"
          }
        },
        {
          "id": "c",
          "text": "Agree with Marcus that Gary deserves whatever consequences come his way after how he treated Marcus at work",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Endorsing retaliation reinforces dangerous ideation",
          "explanation": {
            "approach": "Validate the retaliatory content itself",
            "rationale": "Agreeing that the target deserves harm reinforces rather than assesses or de-escalates the ideation",
            "keyIndicators": [
              "retaliatory statement present"
            ],
            "commonMistake": "Colluding with the client's retaliatory framing"
          }
        },
        {
          "id": "d",
          "text": "Change the subject to Marcus's weekend plans so the session ends on a lighter, less confrontational note before he leaves",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the topic leaves it unassessed",
          "explanation": {
            "approach": "Redirect away from the disclosure",
            "rationale": "This bypasses the most clinically urgent content of the session",
            "keyIndicators": [
              "unaddressed threat content"
            ],
            "commonMistake": "Avoiding difficult material instead of engaging it"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "After the counselor has notified the identifiable victim and law enforcement, how should the therapeutic relationship with Marcus be handled at the next session?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Transparently explain to Marcus what was disclosed and why, consistent with the informed-consent limits discussed earlier, while continuing supportive engagement",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Transparency about the disclosure supports the alliance and consent",
          "explanation": {
            "approach": "Be transparent about the disclosure made",
            "rationale": "Explaining what was shared and why is consistent with informed consent and helps preserve the working relationship",
            "keyIndicators": [
              "disclosure already made",
              "consent limits explained earlier"
            ],
            "commonMistake": "Leaving the client unaware of what was disclosed and why"
          }
        },
        {
          "id": "b",
          "text": "Avoid mentioning the notification at all and act as though the previous session never happened, moving straight into unrelated new treatment material",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the topic undermines trust and transparency",
          "explanation": {
            "approach": "Avoid addressing the disclosure entirely",
            "rationale": "Failing to acknowledge the action taken can damage trust and leaves Marcus without needed context",
            "keyIndicators": [
              "client likely aware something occurred"
            ],
            "commonMistake": "Pretending a significant clinical action did not happen"
          }
        },
        {
          "id": "c",
          "text": "Apologize repeatedly to Marcus for having to notify anyone and offer to keep any future disclosures private going forward instead",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Promising future secrecy misrepresents ongoing legal/ethical limits",
          "explanation": {
            "approach": "Promise unconditional future confidentiality",
            "rationale": "This misstates the counselor's ongoing duty and could suppress future necessary disclosures",
            "keyIndicators": [
              "ongoing confidentiality limits still apply"
            ],
            "commonMistake": "Overpromising secrecy to repair the relationship"
          }
        },
        {
          "id": "d",
          "text": "End the counseling relationship immediately, since trust has clearly been broken and further sessions would not be productive",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Ending care abandons a client who still needs support and monitoring",
          "explanation": {
            "approach": "Terminate the relationship after disclosure",
            "rationale": "Continued engagement, not termination, supports Marcus's ongoing safety and treatment needs",
            "keyIndicators": [
              "ongoing clinical need"
            ],
            "commonMistake": "Assuming disclosure automatically ends the working relationship"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "Comparing session one's diffuse venting with session two's specific statements about Gary Holt, when does breaching confidentiality become ethically and legally justified?",
      "evidenceRef": [
        "R1",
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Only once the threat becomes specific, identifiable, and imminent, as in session two, not during the earlier diffuse venting in session one",
          "isCorrect": true,
          "weight": 3,
          "rationale": "The threshold is met only with specificity, identifiability, and imminence",
          "explanation": {
            "approach": "Apply the identifiability-and-imminence threshold consistently",
            "rationale": "ACA ethics and state duty-to-protect law both require an identifiable victim with apparent intent and means, present only in session two",
            "keyIndicators": [
              "diffuse in session one",
              "named victim with means in session two"
            ],
            "commonMistake": "Treating either both sessions or neither session as meeting the threshold"
          }
        },
        {
          "id": "b",
          "text": "Breaching confidentiality was already justified back in session one, since Marcus was clearly angry at his employer even then",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Anger alone in session one did not meet the threshold",
          "explanation": {
            "approach": "Apply the threshold too early",
            "rationale": "Diffuse anger without an identifiable victim, intent, or means does not justify disclosure",
            "keyIndicators": [
              "no identifiable target in session one"
            ],
            "commonMistake": "Over-triggering duty-to-protect on early, non-specific venting"
          }
        },
        {
          "id": "c",
          "text": "Confidentiality should never be breached in either session, since counselors must keep all client disclosures private no matter what",
          "isCorrect": false,
          "weight": -2,
          "rationale": "This ignores the legal and ethical duty to protect identifiable victims",
          "explanation": {
            "approach": "Treat confidentiality as absolute",
            "rationale": "Confidentiality has recognized exceptions for serious, foreseeable harm to an identifiable third party",
            "keyIndicators": [
              "identifiable victim present in session two"
            ],
            "commonMistake": "Failing to recognize the duty-to-protect exception at all"
          }
        },
        {
          "id": "d",
          "text": "The decision should be based solely on how uncomfortable the counselor personally feels after hearing Marcus's statements",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Personal discomfort is not the legal/ethical standard",
          "explanation": {
            "approach": "Use subjective counselor discomfort as the criterion",
            "rationale": "The decision should rest on identifiability, intent, and means, not the counselor's personal comfort level",
            "keyIndicators": [
              "criteria-based standard needed"
            ],
            "commonMistake": "Substituting personal reaction for the clinical/legal criteria"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "A colleague suggests simply maintaining strict confidentiality about Gary Holt because Marcus has not yet actually harmed anyone. How should the counselor respond?",
      "evidenceRef": [
        "R2",
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Explain that once an identifiable victim, apparent intent, and means are present, the duty to protect requires acting before any harm occurs",
          "isCorrect": true,
          "weight": 3,
          "rationale": "The duty to protect is preventive, not dependent on actual harm",
          "explanation": {
            "approach": "Act preventively once the threshold is met",
            "rationale": "Duty-to-protect obligations exist precisely to prevent harm, so waiting for actual injury defeats their purpose",
            "keyIndicators": [
              "identifiable victim named",
              "means and intent confirmed"
            ],
            "commonMistake": "Waiting for actual harm before fulfilling a duty meant to prevent it"
          }
        },
        {
          "id": "b",
          "text": "Agree with the colleague and maintain strict confidentiality until Marcus actually attempts to harm Gary Holt in some way",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Waiting for actual harm fails the duty to protect",
          "explanation": {
            "approach": "Wait for actual harm before acting",
            "rationale": "This fails the duty-to-protect trigger once specificity, intent, and means are already confirmed",
            "keyIndicators": [
              "threshold already met"
            ],
            "commonMistake": "Failing to act once an identifiable, imminent threat has been established"
          }
        },
        {
          "id": "c",
          "text": "Tell the colleague that the decision is entirely a matter of personal preference and either approach would be equally acceptable here",
          "isCorrect": false,
          "weight": -1,
          "rationale": "This is not a matter of preference once criteria are met",
          "explanation": {
            "approach": "Frame the decision as optional preference",
            "rationale": "Once identifiability, intent, and means are established, the response is guided by clear ethical and legal standards",
            "keyIndicators": [
              "standards-based decision, not preference"
            ],
            "commonMistake": "Treating a criteria-based duty as a matter of personal opinion"
          }
        },
        {
          "id": "d",
          "text": "Suggest waiting until the next scheduled session with Marcus before deciding anything further about the situation with Gary Holt",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Delaying action given imminence concerns is unsafe",
          "explanation": {
            "approach": "Defer the decision to a later date",
            "rationale": "A confirmed specific, identifiable threat with means warrants a timely response, not delay to the next appointment",
            "keyIndicators": [
              "imminence concern present"
            ],
            "commonMistake": "Postponing a time-sensitive protective decision"
          }
        }
      ]
    }
  ]
};

const D211 = {
  "id": "ncmhce-D211",
  "title": "Child abuse disclosure during school-based counseling with an 8-year-old",
  "category": "Crisis",
  "difficulty": "medium",
  "primaryDiagnosis": {
    "name": "Acute Crisis / Decompensation",
    "code": "F43.0"
  },
  "diagnosis": {
    "name": "Acute Crisis / Decompensation",
    "code": "F43.0"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Acute Crisis / Decompensation",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Adjustment Disorder, with Mixed Disturbance of Emotions and Conduct",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Persistent Depressive Disorder (Dysthymia)",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Generalized Anxiety Disorder",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Maya R., an 8-year-old girl in third grade, is referred for school-based counseling after her teacher reports three weeks of increased irritability, tearfulness at small frustrations, withdrawal from peers at recess, and a noticeable drop in completed classwork. Maya lives at home with her mother and her mother's live-in partner, along with a younger 4-year-old brother.",
    "session1": "During a second rapport-building session using drawing and a dollhouse, Maya is initially quiet and gives short answers. While drawing a picture of her house, she pauses and says, in her own words, that her mom's boyfriend 'gets really mad and hits me sometimes,' then pulls up her sleeve to show a yellow-green bruise on her upper arm.",
    "session2": "After the counselor promptly reports the disclosure to the state child-abuse hotline using Maya's exact words, a caseworker visits the school the next day. Maya returns to her regular counseling session appearing relieved but anxious, asking whether she 'got him in trouble,' and the counselor continues supportive, developmentally appropriate sessions while coordinating with the assigned caseworker."
  },
  "diagnosticRationale": "Maya's abrupt shift into an unfolding safety crisis, triggered by a disclosure of suspected physical abuse by a caregiver's partner, reflects acute crisis/decompensation requiring an immediate mandated-reporting response rather than a standalone mood or anxiety diagnosis; her irritability, withdrawal, and academic decline are best understood as trauma-reactive symptoms secondary to the disclosed maltreatment and ongoing safety concern, not evidence of a separate primary depressive or anxiety disorder to be worked up before the report is made.",
  "references": [
    {
      "id": "R1",
      "source": "DSM-5-TR",
      "detail": "Other Conditions That May Be a Focus of Clinical Attention: confirmed or suspected child physical abuse"
    },
    {
      "id": "R2",
      "source": "ACA Code of Ethics",
      "detail": "B.2.a: disclosure required to protect an identifiable third party from serious, foreseeable harm, including suspected child abuse"
    },
    {
      "id": "R3",
      "source": "State law",
      "detail": "Mandated-reporter statute: reasonable suspicion of child abuse must be reported to CPS or law enforcement promptly, without proof"
    },
    {
      "id": "R4",
      "source": "NBCC Content Outline",
      "detail": "Crisis, trauma, and disaster intervention: recognizing abuse indicators and mandated-reporting obligations for minors"
    },
    {
      "id": "R5",
      "source": "Wiger (Documentation)",
      "detail": "Verbatim documentation standards: record a minor client's exact words and observed indicators without leading language"
    },
    {
      "id": "R6",
      "source": "Hays (Assessment)",
      "detail": "Developmentally appropriate, play-based assessment and rapport-building methods for young children"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "Before meeting individually with Maya, what is the most appropriate way for the counselor to use the teacher's referral information?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Treat the teacher's report of irritability, withdrawal, and falling grades as useful behavioral observations that inform, but do not replace, a direct conversation with Maya",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Collateral data informs but does not replace direct contact",
          "explanation": {
            "approach": "Integrate collateral information appropriately",
            "rationale": "Teacher observations guide the assessment but the counselor still needs Maya's own perspective",
            "keyIndicators": [
              "teacher referral",
              "three weeks of behavior change"
            ],
            "commonMistake": "Treating collateral reports as a substitute for meeting the child"
          }
        },
        {
          "id": "b",
          "text": "Rely solely on the teacher's account of the situation at home and skip meeting individually with Maya at all",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Skipping direct contact leaves the child unheard",
          "explanation": {
            "approach": "Over-rely on secondhand report",
            "rationale": "The counselor still must engage Maya directly to assess her experience",
            "keyIndicators": [
              "no direct contact planned"
            ],
            "commonMistake": "Substituting collateral data for direct assessment"
          }
        },
        {
          "id": "c",
          "text": "Disregard the teacher's referral entirely, since only Maya's own statements during a session can count as valid clinical information",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Collateral information has real clinical value",
          "explanation": {
            "approach": "Dismiss collateral data",
            "rationale": "Behavioral observations from school staff are a legitimate part of the picture",
            "keyIndicators": [
              "ignoring referral context"
            ],
            "commonMistake": "Undervaluing collateral observations"
          }
        },
        {
          "id": "d",
          "text": "Ask the teacher to question Maya directly about her home life and any recent changes at home in front of her classmates during regular class time, so the counselor can review the teacher's notes on her answers before the first individual session",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Untrained questioning by school staff can contaminate a disclosure",
          "explanation": {
            "approach": "Delegate questioning to an untrained party",
            "rationale": "A teacher probing for abuse-related detail risks leading questions and improper handling",
            "keyIndicators": [
              "non-clinician interrogating a child"
            ],
            "commonMistake": "Outsourcing sensitive questioning to unqualified staff"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "Which approach is most appropriate for building initial rapport with Maya given her age and the referral concerns?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Use developmentally appropriate play and drawing activities paired with simple, open-ended prompts, letting Maya set the pace",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Play-based, child-paced methods fit her developmental level",
          "explanation": {
            "approach": "Use developmentally matched rapport-building",
            "rationale": "Play and drawing lower the demand of direct verbal disclosure for a young child",
            "keyIndicators": [
              "age 8",
              "guarded at first"
            ],
            "commonMistake": "Using adult-style interviewing with young children"
          }
        },
        {
          "id": "b",
          "text": "Begin with the same structured, direct-question clinical interview format typically used with adult clients",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Adult interview formats are not developmentally suited",
          "explanation": {
            "approach": "Apply an adult framework to a child",
            "rationale": "Direct structured questioning can overwhelm and shut down a young child",
            "keyIndicators": [
              "mismatched developmental approach"
            ],
            "commonMistake": "Ignoring developmental level when selecting methods"
          }
        },
        {
          "id": "c",
          "text": "Have Maya complete a written self-report symptom checklist on her own before any conversation takes place",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A written checklist is a poor fit for an 8-year-old",
          "explanation": {
            "approach": "Rely on a self-report instrument",
            "rationale": "Reading-dependent tools poorly capture a young child's experience",
            "keyIndicators": [
              "third-grade reading level"
            ],
            "commonMistake": "Defaulting to adult-oriented assessment tools"
          }
        },
        {
          "id": "d",
          "text": "Spend the first session explaining the full legal language of confidentiality law before any other conversation begins",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Full legal language is not developmentally accessible",
          "explanation": {
            "approach": "Over-formalize informed consent",
            "rationale": "Consent discussions with children should be simplified, not legalistic",
            "keyIndicators": [
              "needs simplified language"
            ],
            "commonMistake": "Using adult legal terminology with a young child"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "What should the counselor tell Maya, in age-appropriate terms, about the limits of privacy in their conversations?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "That most of what she shares stays private, but if she tells the counselor someone is hurting her, the counselor must tell a helper adult",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Accurately and simply states the confidentiality limit",
          "explanation": {
            "approach": "Explain confidentiality limits in child-friendly terms",
            "rationale": "Minors deserve an accurate, simplified explanation of the safety exception before disclosure occurs",
            "keyIndicators": [
              "age 8",
              "school-based setting"
            ],
            "commonMistake": "Skipping or overstating confidentiality with young clients"
          }
        },
        {
          "id": "b",
          "text": "That everything she says will always be kept completely secret from every other adult, no matter what she shares",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Absolute confidentiality is false and unethical to promise",
          "explanation": {
            "approach": "Overpromise total secrecy",
            "rationale": "Promising unconditional secrecy misrepresents the mandated-reporting duty",
            "keyIndicators": [
              "safety exception exists"
            ],
            "commonMistake": "Guaranteeing unconditional confidentiality to a minor"
          }
        },
        {
          "id": "c",
          "text": "That the counselor will decide on a session-by-session basis whether to tell her teacher what she talked about",
          "isCorrect": false,
          "weight": -1,
          "rationale": "This misstates the actual, safety-based limit",
          "explanation": {
            "approach": "Frame disclosure as arbitrary",
            "rationale": "Confidentiality limits are tied to safety, not casual case-by-case sharing",
            "keyIndicators": [
              "inaccurate framing"
            ],
            "commonMistake": "Describing confidentiality limits inaccurately"
          }
        },
        {
          "id": "d",
          "text": "Skip any discussion of privacy altogether, since a child this age cannot understand the concept of confidentiality",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Omitting the topic denies her a basic, simplified explanation",
          "explanation": {
            "approach": "Assume incapacity and omit consent discussion",
            "rationale": "A simple, concrete explanation is developmentally accessible to an 8-year-old",
            "keyIndicators": [
              "assent still matters at age 8"
            ],
            "commonMistake": "Assuming young children cannot grasp any consent information"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "During the drawing activity, Maya says her mom's boyfriend 'gets really mad and hits me sometimes' and shows a bruise. How should the counselor conceptualize this moment?",
      "evidenceRef": [
        "R3",
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "As a reasonable-suspicion disclosure of possible child physical abuse that triggers an immediate mandated-reporting duty",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Meets the reasonable-suspicion threshold for reporting",
          "explanation": {
            "approach": "Apply the reasonable-suspicion standard",
            "rationale": "State mandated-reporting law is triggered by reasonable suspicion, not proof or full corroboration",
            "keyIndicators": [
              "own words disclosure",
              "visible bruise"
            ],
            "commonMistake": "Waiting for certainty before recognizing a report is required"
          }
        },
        {
          "id": "b",
          "text": "As an ambiguous statement that needs more clarifying detail and corroboration from Maya before it can be treated as reportable",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Reasonable suspicion, not certainty, is the legal threshold",
          "explanation": {
            "approach": "Demand corroboration before acting",
            "rationale": "Requiring proof before reporting delays a mandated duty and endangers the child",
            "keyIndicators": [
              "threshold already met"
            ],
            "commonMistake": "Treating reasonable suspicion as insufficient to report"
          }
        },
        {
          "id": "c",
          "text": "As primarily a symptom of an underlying mood disorder that should be diagnosed and treated before any other action is taken",
          "isCorrect": false,
          "weight": -1,
          "rationale": "This misses the safety issue driving the presentation",
          "explanation": {
            "approach": "Reframe disclosure as a mood symptom",
            "rationale": "The disclosure itself is a safety event, not primarily a diagnostic puzzle",
            "keyIndicators": [
              "explicit abuse disclosure"
            ],
            "commonMistake": "Pathologizing a disclosure instead of acting on it"
          }
        },
        {
          "id": "d",
          "text": "As a possible exaggeration common among young children seeking attention, best weighed against her overall behavior pattern",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Minimizing a disclosure is inappropriate and risky",
          "explanation": {
            "approach": "Minimize as attention-seeking",
            "rationale": "Dismissing a child's disclosure as exaggeration ignores the mandated duty it creates",
            "keyIndicators": [
              "bruise observed directly"
            ],
            "commonMistake": "Discounting a disclosure as attention-seeking behavior"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "What is the most important reason the counselor should avoid asking Maya detailed follow-up questions such as how many times this has happened or exactly how she was hit?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Detailed follow-up questioning risks contaminating Maya's account and falls outside the counselor's role; trained investigators handle that",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Forensic interviewing belongs to CPS/law enforcement",
          "explanation": {
            "approach": "Stay within scope and preserve the account",
            "rationale": "Counselors document what a child spontaneously discloses rather than conducting forensic interviews",
            "keyIndicators": [
              "counselor is not a forensic investigator"
            ],
            "commonMistake": "Attempting to gather investigative detail before reporting"
          }
        },
        {
          "id": "b",
          "text": "Because a child this age is simply too young to answer any specific factual questions about her own experience",
          "isCorrect": false,
          "weight": -1,
          "rationale": "This reasoning is inaccurate and not the real concern",
          "explanation": {
            "approach": "Assume incapacity rather than scope",
            "rationale": "The concern is role and contamination, not the child's basic capacity to answer",
            "keyIndicators": [
              "age-based assumption"
            ],
            "commonMistake": "Misattributing the reason to the child's ability"
          }
        },
        {
          "id": "c",
          "text": "Because additional questioning would take up session time better used with the counselor's other scheduled clients",
          "isCorrect": false,
          "weight": -2,
          "rationale": "This trivializes a serious safety concern",
          "explanation": {
            "approach": "Prioritize scheduling over safety",
            "rationale": "Time management is not a valid rationale in an active safety disclosure",
            "keyIndicators": [
              "misplaced priority"
            ],
            "commonMistake": "Letting scheduling concerns override child safety"
          }
        },
        {
          "id": "d",
          "text": "Because the topic should be discussed further only once Maya's parent is present in the room to help clarify events",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Involving the parent before reporting risks the child's safety",
          "explanation": {
            "approach": "Bring the parent in prematurely",
            "rationale": "Discussing the disclosure with the parent before reporting can endanger the child",
            "keyIndicators": [
              "potential abuser in the household"
            ],
            "commonMistake": "Looping in family before making a required report"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "Immediately after Maya's disclosure, what is the counselor's most appropriate in-session response to her?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Calmly thank Maya for telling, affirm that she did the right thing, and explain simply that this must be shared with helper adults",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Validates the disclosure without promising secrecy",
          "explanation": {
            "approach": "Validate and prepare the child honestly",
            "rationale": "Affirming her courage while being honest about next steps supports both trust and safety",
            "keyIndicators": [
              "child just disclosed",
              "needs honest support"
            ],
            "commonMistake": "Reacting with alarm or making false promises"
          }
        },
        {
          "id": "b",
          "text": "Promise Maya that what she said will stay just between the two of them so she continues to feel safe talking",
          "isCorrect": false,
          "weight": -2,
          "rationale": "A secrecy promise is false and cannot be kept",
          "explanation": {
            "approach": "Promise absolute secrecy",
            "rationale": "This directly contradicts the mandated-reporting duty and misleads the child",
            "keyIndicators": [
              "duty to report already triggered"
            ],
            "commonMistake": "Making a confidentiality promise that will be broken"
          }
        },
        {
          "id": "c",
          "text": "Ask Maya to repeat her account with more specific detail so the counselor has a fuller record before the session ends",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Pressing for more detail risks contaminating the disclosure",
          "explanation": {
            "approach": "Press for additional detail",
            "rationale": "Repeated probing can shape or distort a young child's account",
            "keyIndicators": [
              "sufficient information already given"
            ],
            "commonMistake": "Over-questioning to build a fuller record"
          }
        },
        {
          "id": "d",
          "text": "Tell Maya the topic is closed for today and that it will be revisited more calmly at a later session before any decision is made",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Deferring the topic delays required action",
          "explanation": {
            "approach": "Postpone and revisit later",
            "rationale": "Reasonable suspicion is already established and must be acted on promptly, not later",
            "keyIndicators": [
              "report already required"
            ],
            "commonMistake": "Delaying a decision that is already required"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "What is the most appropriate next step for the counselor to take regarding a formal child-abuse report?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Contact the state child-abuse hotline or child protective services promptly, using Maya's own words and the observed bruise",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Prompt reporting at reasonable suspicion is the mandated duty",
          "explanation": {
            "approach": "Report promptly to the proper authority",
            "rationale": "State law requires prompt reporting once reasonable suspicion exists",
            "keyIndicators": [
              "child's own words",
              "visible bruise"
            ],
            "commonMistake": "Treating reporting as optional or something to schedule later"
          }
        },
        {
          "id": "b",
          "text": "Wait until the end of the school week to see whether Maya brings the topic up again before deciding whether to report",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Waiting delays a mandated, time-sensitive duty",
          "explanation": {
            "approach": "Wait and see before reporting",
            "rationale": "The duty to report arises now, at the point of reasonable suspicion",
            "keyIndicators": [
              "threshold already met"
            ],
            "commonMistake": "Delaying a required report to gather more evidence"
          }
        },
        {
          "id": "c",
          "text": "Contact Maya's mother first to ask about the bruise and hear her explanation before deciding whether a report is warranted",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Alerting the family first can endanger the child",
          "explanation": {
            "approach": "Confirm with the parent first",
            "rationale": "Contacting the family before reporting can tip off a potential abuser",
            "keyIndicators": [
              "live-in partner named as alleged abuser"
            ],
            "commonMistake": "Seeking parental confirmation before making a required report"
          }
        },
        {
          "id": "d",
          "text": "Informally ask a colleague whether the bruise sounds serious enough to meet the threshold for filing a report",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Informal gatekeeping is unnecessary and delays action",
          "explanation": {
            "approach": "Seek informal peer sign-off",
            "rationale": "Reasonable suspicion alone is sufficient; a colleague's opinion is not required",
            "keyIndicators": [
              "threshold already clearly met"
            ],
            "commonMistake": "Adding unnecessary steps before a required report"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "What threshold must be met before the counselor is legally obligated to file the report?",
      "evidenceRef": [
        "R3",
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Reasonable suspicion that abuse may have occurred, based on the child's statement and observed indicators, not proof or corroboration",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Reasonable suspicion is the statutory standard",
          "explanation": {
            "approach": "Apply the correct legal standard",
            "rationale": "Mandated-reporter statutes use a reasonable-suspicion, not a proof, standard",
            "keyIndicators": [
              "credible disclosure",
              "physical indicator observed"
            ],
            "commonMistake": "Requiring proof instead of reasonable suspicion"
          }
        },
        {
          "id": "b",
          "text": "Clear physical evidence, such as a bruise formally confirmed through a medical examination, before any report can be filed",
          "isCorrect": false,
          "weight": -2,
          "rationale": "This raises the bar above the legal standard",
          "explanation": {
            "approach": "Require medical confirmation first",
            "rationale": "Demanding medical proof before reporting is not the legal standard and is unsafe",
            "keyIndicators": [
              "threshold already met without exam"
            ],
            "commonMistake": "Substituting a proof standard for reasonable suspicion"
          }
        },
        {
          "id": "c",
          "text": "A signed statement from Maya herself confirming that she wants a formal report to be made on her behalf",
          "isCorrect": false,
          "weight": -2,
          "rationale": "A child's consent is not required to trigger reporting",
          "explanation": {
            "approach": "Require the child's consent",
            "rationale": "Mandated reporting does not depend on the minor agreeing to it",
            "keyIndicators": [
              "duty is counselor's, not the child's choice"
            ],
            "commonMistake": "Making the report contingent on the child's agreement"
          }
        },
        {
          "id": "d",
          "text": "Agreement from a clinical supervisor that the disclosure sounds credible enough to justify filing a report",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Supervisor sign-off is not a legal precondition",
          "explanation": {
            "approach": "Require supervisor approval first",
            "rationale": "The duty to report attaches individually once reasonable suspicion exists",
            "keyIndicators": [
              "individual mandated-reporter duty"
            ],
            "commonMistake": "Treating a report as needing prior approval"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "How should the counselor document Maya's disclosure in the clinical record?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Record Maya's exact words, the bruise and its location, and the date and time of the disclosure and report, without paraphrase",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Verbatim, factual documentation preserves the record",
          "explanation": {
            "approach": "Document verbatim and factually",
            "rationale": "Exact wording and observed indicators create an accurate, defensible clinical record",
            "keyIndicators": [
              "specific quoted language",
              "visible bruise"
            ],
            "commonMistake": "Paraphrasing or interpreting instead of quoting directly"
          }
        },
        {
          "id": "b",
          "text": "Summarize the disclosure loosely in general clinical language, such as noting a history of physical abuse, to keep the note brief",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Loose paraphrasing loses important detail",
          "explanation": {
            "approach": "Paraphrase for brevity",
            "rationale": "General summaries lose the specific, child's-own-words detail that matters most",
            "keyIndicators": [
              "precision needed in a legal matter"
            ],
            "commonMistake": "Sacrificing precision for a shorter note"
          }
        },
        {
          "id": "c",
          "text": "Leave the disclosure out of the official record entirely until the CPS investigation concludes, to avoid influencing it",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Omitting the disclosure undermines clinical and legal accountability",
          "explanation": {
            "approach": "Omit the disclosure from the record",
            "rationale": "A prompt, accurate record is required regardless of the investigation's outcome",
            "keyIndicators": [
              "documentation duty is independent of the outcome"
            ],
            "commonMistake": "Withholding clinical documentation pending outside findings"
          }
        },
        {
          "id": "d",
          "text": "Include the counselor's own personal opinion about whether the mother's partner is guilty of causing the bruise",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Speculative opinion about guilt is outside scope",
          "explanation": {
            "approach": "Record a personal guilt opinion",
            "rationale": "Determining guilt is the role of investigators, not something to assert in the chart",
            "keyIndicators": [
              "counselor is not the investigator"
            ],
            "commonMistake": "Recording speculative conclusions instead of observed facts"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "The next day, Maya asks the counselor, 'Did I get him in trouble?' and appears anxious. What is the most therapeutic response?",
      "evidenceRef": [
        "R6"
      ],
      "options": [
        {
          "id": "a",
          "text": "Validate her anxiety, explain simply that telling the truth was the right thing to do, and that keeping her safe is the adults' job",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Validates feelings without assigning blame to the child",
          "explanation": {
            "approach": "Validate and reassure without blame",
            "rationale": "This response supports her emotionally while keeping responsibility with the adults involved",
            "keyIndicators": [
              "anxious about consequences",
              "asks direct question"
            ],
            "commonMistake": "Letting the child feel responsible for the outcome"
          }
        },
        {
          "id": "b",
          "text": "Tell her not to worry about it and quickly change the subject to something more pleasant for the rest of the session",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoidance leaves her anxiety unaddressed",
          "explanation": {
            "approach": "Redirect away from the topic",
            "rationale": "Dismissing the question bypasses a meaningful emotional need",
            "keyIndicators": [
              "unaddressed anxiety"
            ],
            "commonMistake": "Avoiding a child's direct emotional question"
          }
        },
        {
          "id": "c",
          "text": "Explain in detail what will likely happen to her mother's partner as a result of the ongoing CPS investigation",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Speculating about outcomes is outside scope and unhelpful",
          "explanation": {
            "approach": "Predict investigative or legal outcomes",
            "rationale": "Speculating about another person's consequences is inappropriate and could increase her anxiety or risk",
            "keyIndicators": [
              "investigation still in progress"
            ],
            "commonMistake": "Making predictions about a case outside the counselor's knowledge"
          }
        },
        {
          "id": "d",
          "text": "Reassure her confidently that the investigation will surely find nothing happened and everything will return to normal soon",
          "isCorrect": false,
          "weight": -2,
          "rationale": "False reassurance misrepresents an uncertain outcome",
          "explanation": {
            "approach": "Offer false reassurance",
            "rationale": "Promising a specific, unknown outcome can mislead and later undermine trust",
            "keyIndicators": [
              "outcome not yet known"
            ],
            "commonMistake": "Guaranteeing an outcome the counselor cannot know"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "Over the following weeks, how should the counselor approach ongoing sessions with Maya while the CPS investigation proceeds?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Continue regular, supportive sessions focused on coping and stability, coordinating with the caseworker while avoiding investigative probing",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Maintains stable support while staying within counselor scope",
          "explanation": {
            "approach": "Maintain supportive, coordinated care",
            "rationale": "Ongoing therapeutic support and appropriate coordination fit the counselor's role during a pending investigation",
            "keyIndicators": [
              "investigation in progress",
              "ongoing supportive relationship"
            ],
            "commonMistake": "Either withdrawing support or overstepping into investigation"
          }
        },
        {
          "id": "b",
          "text": "Pause all counseling sessions until the investigation concludes so the sessions do not interfere with the CPS process",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Suspending support is unnecessary and unhelpful",
          "explanation": {
            "approach": "Suspend services during the investigation",
            "rationale": "Ongoing counseling support does not conflict with a CPS investigation",
            "keyIndicators": [
              "child benefits from continuity of care"
            ],
            "commonMistake": "Withdrawing needed support without cause"
          }
        },
        {
          "id": "c",
          "text": "Use sessions to ask Maya for updates on what investigators have found so far so the counselor can stay informed",
          "isCorrect": false,
          "weight": -2,
          "rationale": "This crosses into an investigative role outside scope",
          "explanation": {
            "approach": "Probe the child for investigation updates",
            "rationale": "Repeatedly asking about the investigation risks recontamination and role confusion",
            "keyIndicators": [
              "counselor is not the investigator"
            ],
            "commonMistake": "Using therapy sessions to gather investigative information"
          }
        },
        {
          "id": "d",
          "text": "Shift session focus to helping Maya rehearse and refine detailed testimony in case she is asked to describe events again",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Coaching testimony contaminates the account and is inappropriate",
          "explanation": {
            "approach": "Coach the child's future testimony",
            "rationale": "Rehearsing testimony is outside the counselor's role and can compromise the investigation",
            "keyIndicators": [
              "forensic process belongs to investigators"
            ],
            "commonMistake": "Using therapy to prepare a child's account for legal proceedings"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "Maya's mother contacts the school and asks the counselor to confirm exactly what Maya said about the home situation. How should the counselor respond?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Explain that session information is confidential and cannot be shared without proper authorization, and direct her to the CPS caseworker",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Protects confidentiality while redirecting appropriately",
          "explanation": {
            "approach": "Uphold confidentiality and redirect properly",
            "rationale": "Confidentiality limits protect the child, and the caseworker is the appropriate contact for the report",
            "keyIndicators": [
              "mother requesting session details",
              "active CPS involvement"
            ],
            "commonMistake": "Disclosing session content directly to a parent under investigation"
          }
        },
        {
          "id": "b",
          "text": "Confirm to the mother exactly what Maya disclosed in the session, since she is Maya's legal guardian and has a right to know",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Disclosing details to the family can endanger the child",
          "explanation": {
            "approach": "Fully disclose to the parent",
            "rationale": "Sharing disclosure details with the household during an active concern can put the child at further risk",
            "keyIndicators": [
              "alleged abuser is in the home"
            ],
            "commonMistake": "Treating parental access as automatic in an active abuse concern"
          }
        },
        {
          "id": "c",
          "text": "Deny to the mother that any report was ever made, in order to avoid conflict with the family",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Dishonesty about the report is unethical",
          "explanation": {
            "approach": "Deny the report was made",
            "rationale": "Lying to a parent about a filed report is dishonest and improper professional conduct",
            "keyIndicators": [
              "report already filed"
            ],
            "commonMistake": "Concealing a report to avoid family conflict"
          }
        },
        {
          "id": "d",
          "text": "Tell the mother the counselor cannot discuss anything at all and end the conversation immediately without further guidance",
          "isCorrect": false,
          "weight": -1,
          "rationale": "An abrupt non-answer misses a chance to redirect appropriately",
          "explanation": {
            "approach": "Refuse to engage at all",
            "rationale": "A brief, respectful redirection to the proper contact is more appropriate than an abrupt refusal",
            "keyIndicators": [
              "parent left without guidance"
            ],
            "commonMistake": "Providing no direction instead of a proper redirect"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "Which statement best reflects the counselor's mandated-reporting duty in Maya's case?",
      "evidenceRef": [
        "R2",
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "The duty is triggered by reasonable suspicion from the disclosure and observed bruise, applies regardless of parental consent, and requires prompt notification",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Accurately states the trigger, consent status, and timing",
          "explanation": {
            "approach": "Apply the full mandated-reporting standard correctly",
            "rationale": "Reasonable suspicion, no parental consent requirement, and promptness together define the duty",
            "keyIndicators": [
              "disclosure plus visible indicator",
              "no parental veto"
            ],
            "commonMistake": "Adding conditions the statute does not require"
          }
        },
        {
          "id": "b",
          "text": "The duty applies only once the counselor has independently verified the details of Maya's account through additional investigation",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Independent verification is not a legal precondition",
          "explanation": {
            "approach": "Require independent verification first",
            "rationale": "The counselor's role is to report, not to investigate or verify",
            "keyIndicators": [
              "verification belongs to CPS"
            ],
            "commonMistake": "Believing counselors must confirm allegations before reporting"
          }
        },
        {
          "id": "c",
          "text": "The duty can be satisfied by documenting the disclosure in the chart and revisiting the topic at Maya's next scheduled session",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Documentation alone does not satisfy the reporting duty",
          "explanation": {
            "approach": "Substitute charting for reporting",
            "rationale": "A chart note does not fulfill the legal obligation to notify the authorities",
            "keyIndicators": [
              "report to authorities still required"
            ],
            "commonMistake": "Treating internal documentation as equivalent to reporting"
          }
        },
        {
          "id": "d",
          "text": "The duty requires the counselor to obtain written parental consent before any information can be shared with child protective services",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Parental consent is not required to make a report",
          "explanation": {
            "approach": "Require parental consent before reporting",
            "rationale": "Mandated reporting overrides the usual consent process specifically to protect the child",
            "keyIndicators": [
              "consent-independent duty"
            ],
            "commonMistake": "Believing a parent can block a mandated report"
          }
        }
      ]
    }
  ]
};

const D212 = {
  "id": "ncmhce-D212",
  "title": "New low mood in a 74-year-old after hospital discharge",
  "category": "Crisis",
  "difficulty": "hard",
  "primaryDiagnosis": {
    "name": "Acute Crisis / Decompensation",
    "code": "F43.0"
  },
  "diagnosis": {
    "name": "Acute Crisis / Decompensation",
    "code": "F43.0"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Acute Crisis / Decompensation",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Delirium Due to Another Medical Condition",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Major Depressive Disorder, Moderate",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Adjustment Disorder, with Depressed Mood",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Walter Higgins, a 74-year-old widower, is referred to outpatient counseling by his adult daughter, Denise, one week after his hospital discharge for a urinary tract infection and a change to his blood pressure medication. Denise says he has been 'just really depressed since he got home' and wants 'someone to talk to him.' Walter reports feeling tired and uninterested in his usual crossword puzzles, and mentions almost in passing that he has 'lost track of the days a bit' since coming home, which he attributes to being worn out from the hospital stay.",
    "session1": "During the session, Walter describes low mood and low energy consistent with his daughter's account. Partway through, he pauses and seems unsure what day of the week it is, then a few minutes later answers correctly and picks the conversation back up without noticing the gap. He mentions, almost as an aside, that he sometimes sees 'shadows moving in the corner of the room' that are not there, and shrugs it off as 'just my eyes acting up' rather than something worth discussing further.",
    "session2": "Denise joins briefly at the end of the session and, while describing his routine, mentions that 'he's been more confused in the evenings than in the mornings' and that this only started after he came home from the hospital; before that, she says, 'he was sharp as ever.' Walter agrees things feel foggier at night but downplays it, returning to talking about missing his late wife and feeling low since the hospital stay."
  },
  "diagnosticRationale": "Although the daughter frames this as depression following hospitalization, the operative concern is delirium: Walter's attention and awareness fluctuate within the same session, he reports visual misperceptions, and his daughter describes worse confusion in the evenings, all developing acutely within days of a urinary tract infection and a blood pressure medication change. Per DSM-5-TR, delirium involves an acute, fluctuating disturbance in attention and awareness plus an additional cognitive disturbance attributable to a medical condition or substance, a pattern not accounted for by a stable major depressive episode; this requires urgent medical evaluation rather than psychotherapy alone, framing the presentation as an acute crisis/decompensation requiring immediate coordination with medical providers.",
  "references": [
    {
      "id": "R1",
      "source": "DSM-5-TR",
      "detail": "Delirium criteria: acute-onset, fluctuating disturbance in attention/awareness plus cognitive change tied to a medical condition"
    },
    {
      "id": "R2",
      "source": "Hays (Assessment)",
      "detail": "Comprehensive assessment screens medical and cognitive status before assuming a primary mood disorder in older adults"
    },
    {
      "id": "R3",
      "source": "ACA Code of Ethics",
      "detail": "Scope-of-practice duty to refer and coordinate care when a presentation may reflect a medical condition"
    },
    {
      "id": "R4",
      "source": "NICE guidelines",
      "detail": "Delirium: prompt recognition and urgent medical assessment in older adults after infection or medication change"
    },
    {
      "id": "R5",
      "source": "Wiger (Documentation)",
      "detail": "Accurate, timely documentation of urgent referrals and the clinical reasoning behind them"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "What should the counselor prioritize during Walter's intake, given how the referral was framed?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Conduct a mental status exam tracking his attention, orientation, and alertness across the session rather than accepting the referral's depression framing",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Attention and orientation must be tracked directly",
          "explanation": {
            "approach": "Assess mental status directly rather than anchoring on the referral label",
            "rationale": "Older adults post-hospitalization need attention/orientation screened before a mood diagnosis is assumed",
            "keyIndicators": [
              "recent hospitalization",
              "'lost track of the days a bit'"
            ],
            "commonMistake": "Accepting the daughter's depression framing without a direct mental status check"
          }
        },
        {
          "id": "b",
          "text": "Begin the standard depression intake packet and proceed with a typical grief-and-loss assessment, since his daughter's referral letter already frames this in straightforward mood terms",
          "isCorrect": false,
          "weight": -2,
          "rationale": "This skips screening for a medical cause",
          "explanation": {
            "approach": "Accept the family's depression framing at face value",
            "rationale": "Proceeding straight into depression intake overlooks the fluctuating orientation clue",
            "keyIndicators": [
              "family label of depression",
              "recent medical event"
            ],
            "commonMistake": "Treating a family member's label as a confirmed diagnosis"
          }
        },
        {
          "id": "c",
          "text": "Spend the bulk of the intake asking about his relationship with his daughter and any family history of mood disorders",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Family history is secondary to the presenting risk",
          "explanation": {
            "approach": "Lead with relational and family-history questions",
            "rationale": "This delays the more urgent mental status and medical-history data",
            "keyIndicators": [
              "recent discharge",
              "unclear cognitive status"
            ],
            "commonMistake": "Prioritizing background history over present-state screening"
          }
        },
        {
          "id": "d",
          "text": "Focus entirely on building rapport this session and postpone any structured clinical assessment until a later visit",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Delaying assessment is not appropriate here",
          "explanation": {
            "approach": "Defer all assessment to build alliance first",
            "rationale": "A recent hospitalization with cognitive fluctuation warrants prompt assessment, not delay",
            "keyIndicators": [
              "acute post-discharge timeline"
            ],
            "commonMistake": "Postponing assessment when acute change is present"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "Mid-session, Walter is briefly unsure what day it is, then minutes later answers correctly and resumes the conversation without noticing the gap. What does this pattern most suggest?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "A fluctuating disturbance in attention and awareness that waxes and wanes within the same session, atypical for a stable depressive episode",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Fluctuation within a session is a delirium hallmark",
          "explanation": {
            "approach": "Recognize fluctuating attention as a distinct clinical pattern",
            "rationale": "DSM-5-TR delirium criteria emphasize a disturbance that fluctuates in severity during the day",
            "keyIndicators": [
              "momentary disorientation",
              "later full recovery within minutes"
            ],
            "commonMistake": "Overlooking within-session fluctuation as clinically insignificant"
          }
        },
        {
          "id": "b",
          "text": "Normal age-related forgetfulness that requires no particular follow-up at this point in the intake",
          "isCorrect": false,
          "weight": -1,
          "rationale": "This is more than ordinary forgetfulness",
          "explanation": {
            "approach": "Normalize the lapse as typical aging",
            "rationale": "The rapid fluctuation and full recovery pattern is not simple age-related forgetfulness",
            "keyIndicators": [
              "rapid full recovery"
            ],
            "commonMistake": "Attributing a fluctuating course to normal aging"
          }
        },
        {
          "id": "c",
          "text": "A single lapse in concentration caused by ordinary fatigue from sitting through the intake interview itself",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Fatigue alone does not explain the pattern",
          "explanation": {
            "approach": "Attribute the lapse to interview fatigue",
            "rationale": "The abrupt disorientation and recovery pattern points beyond simple tiredness",
            "keyIndicators": [
              "abrupt onset and resolution"
            ],
            "commonMistake": "Explaining away a fluctuating course with a mundane cause"
          }
        },
        {
          "id": "d",
          "text": "An intentional strategy Walter is using to avoid engaging with questions about his low mood, similar to how some clients deflect during difficult sessions",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Reading this as avoidance misses a medical sign",
          "explanation": {
            "approach": "Interpret the disorientation as psychological avoidance",
            "rationale": "Treating a possible cognitive sign as intentional avoidance risks missing delirium",
            "keyIndicators": [
              "involuntary disorientation",
              "no discussion of avoidance"
            ],
            "commonMistake": "Reframing a medical warning sign as a defense mechanism"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "Walter mentions seeing 'shadows moving in the corner of the room' that are not there. What is the most appropriate next step?",
      "evidenceRef": [
        "R1",
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Gently explore the onset and timing of the visual disturbance, noting it as a possible sign warranting prompt medical evaluation",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Visual misperceptions need timing detail and flagging",
          "explanation": {
            "approach": "Explore and flag the perceptual disturbance",
            "rationale": "New visual misperceptions in an older adult after a medical event are a red flag for delirium",
            "keyIndicators": [
              "'shadows moving in the corner'",
              "recent hospitalization"
            ],
            "commonMistake": "Letting a new perceptual symptom pass without follow-up"
          }
        },
        {
          "id": "b",
          "text": "Accept Walter's own explanation that it is 'just my eyes acting up' and move on to discussing his mood symptoms",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Dismissing the report misses a key sign",
          "explanation": {
            "approach": "Take the client's minimization at face value",
            "rationale": "Accepting the self-explanation forecloses recognizing a possible medical emergency",
            "keyIndicators": [
              "client minimizes symptom"
            ],
            "commonMistake": "Letting client minimization override clinical follow-up"
          }
        },
        {
          "id": "c",
          "text": "Interpret the report as a symptom of severe depression with psychotic features and begin planning cognitive restructuring",
          "isCorrect": false,
          "weight": -1,
          "rationale": "This jumps to a mood-disorder explanation prematurely",
          "explanation": {
            "approach": "Frame the symptom as depressive psychosis",
            "rationale": "Nothing yet supports a primary psychotic depression over a medical cause",
            "keyIndicators": [
              "recent infection and medication change"
            ],
            "commonMistake": "Assuming a psychiatric cause before medical causes are considered"
          }
        },
        {
          "id": "d",
          "text": "Note the comment in the chart and plan to revisit the topic in more detail at the next scheduled session",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Waiting a week is too slow for this sign",
          "explanation": {
            "approach": "Defer follow-up to a future visit",
            "rationale": "A new perceptual disturbance after hospitalization should be explored now, not deferred",
            "keyIndicators": [
              "acute post-discharge window"
            ],
            "commonMistake": "Delaying follow-up on an urgent-appearing sign"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "Which feature of Walter's presentation most clearly distinguishes it from a primary major depressive episode?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "The acute onset within days of hospitalization together with attention and orientation that fluctuate across the session and worsen at night",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Acute, fluctuating, evening-worsening course points away from MDD",
          "explanation": {
            "approach": "Compare course and fluctuation pattern to MDD's stable presentation",
            "rationale": "DSM-5-TR delirium is marked by acute onset and a fluctuating course, unlike the persistent picture of MDD",
            "keyIndicators": [
              "onset within one week of discharge",
              "worse confusion in evenings"
            ],
            "commonMistake": "Treating any post-hospital low mood as a straightforward depressive episode"
          }
        },
        {
          "id": "b",
          "text": "The fact that he was recently hospitalized, since a recent hospitalization by itself generally indicates depression",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Hospitalization alone does not indicate depression",
          "explanation": {
            "approach": "Treat hospitalization as diagnostic of mood disorder",
            "rationale": "A hospital stay is a nonspecific stressor, not evidence for MDD specifically",
            "keyIndicators": [
              "nonspecific stressor"
            ],
            "commonMistake": "Equating any recent medical stressor with depression"
          }
        },
        {
          "id": "c",
          "text": "His reduced interest in crossword puzzles and lower energy, which strongly indicate a depressive episode is present",
          "isCorrect": false,
          "weight": -1,
          "rationale": "These overlapping symptoms do not rule delirium out",
          "explanation": {
            "approach": "Weight anhedonia and low energy as decisive for MDD",
            "rationale": "Low interest and energy can occur in both delirium and depression and are not distinguishing",
            "keyIndicators": [
              "overlapping symptom"
            ],
            "commonMistake": "Using nonspecific symptoms to settle the differential"
          }
        },
        {
          "id": "d",
          "text": "His daughter's description of him as 'really depressed,' which confirms that the clinical picture is a mood disorder",
          "isCorrect": false,
          "weight": -2,
          "rationale": "A lay label does not establish the diagnosis",
          "explanation": {
            "approach": "Accept the family's lay diagnostic label as clinical confirmation",
            "rationale": "Family impressions are useful history but cannot substitute for clinical differentiation",
            "keyIndicators": [
              "lay description, not clinical finding"
            ],
            "commonMistake": "Letting a family member's label override the clinical picture"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "What additional history is most critical for the counselor to gather next?",
      "evidenceRef": [
        "R2",
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "A clear timeline connecting the recent urinary tract infection treatment and blood pressure medication change to the onset of his confusion",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Timeline linking the medical event to onset is decisive",
          "explanation": {
            "approach": "Build a precise medical-cognitive timeline",
            "rationale": "Correlating onset with infection treatment and medication change supports a medical, not purely mood, explanation",
            "keyIndicators": [
              "UTI treatment one week ago",
              "blood pressure medication change"
            ],
            "commonMistake": "Gathering psychosocial history while skipping the medical timeline"
          }
        },
        {
          "id": "b",
          "text": "A detailed account of his relationship with his late wife and any unresolved grief themes from that loss",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Grief history is not the priority right now",
          "explanation": {
            "approach": "Prioritize grief exploration first",
            "rationale": "This does not address the acute cognitive and medical picture that needs urgent clarification",
            "keyIndicators": [
              "acute presentation takes priority"
            ],
            "commonMistake": "Pursuing depth history before ruling out an acute medical cause"
          }
        },
        {
          "id": "c",
          "text": "His baseline personality traits and typical temperament before retirement so his current mood can be compared against his longstanding usual functioning",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Baseline temperament is useful but not urgent",
          "explanation": {
            "approach": "Gather longstanding personality baseline",
            "rationale": "This is lower yield than the medical timeline for the acute picture at hand",
            "keyIndicators": [
              "long-term comparison data"
            ],
            "commonMistake": "Prioritizing longstanding traits over an acute medical timeline"
          }
        },
        {
          "id": "d",
          "text": "A record of how many social activities he has attended each month over the past several years of retirement",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Activity counts do not clarify the acute picture",
          "explanation": {
            "approach": "Quantify long-term social activity levels",
            "rationale": "This low-yield data does not address the acute onset or its medical trigger",
            "keyIndicators": [
              "low-yield historical detail"
            ],
            "commonMistake": "Collecting low-yield data instead of the acute medical timeline"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "What is the most appropriate immediate treatment-planning action at this point?",
      "evidenceRef": [
        "R3",
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Contact his physician the same day to request an urgent medical evaluation, given the fluctuating attention and evening worsening in an older adult",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Same-day medical contact matches the acute risk",
          "explanation": {
            "approach": "Initiate urgent medical referral first",
            "rationale": "Fluctuating cognition after infection and medication change in an older adult is a medical emergency needing prompt evaluation",
            "keyIndicators": [
              "fluctuating attention",
              "evenings worse"
            ],
            "commonMistake": "Treating the case as routine outpatient mood work"
          }
        },
        {
          "id": "b",
          "text": "Begin a standard course of grief-and-depression-focused psychotherapy this week, since his daughter described him as depressed and eager for someone to talk to him",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Starting psychotherapy first ignores the medical emergency",
          "explanation": {
            "approach": "Start psychotherapy-as-usual immediately",
            "rationale": "Proceeding directly into grief/depression therapy bypasses the urgent medical picture, the central trap in this case",
            "keyIndicators": [
              "unaddressed cognitive fluctuation"
            ],
            "commonMistake": "Treating a possible delirium as ordinary depression needing therapy"
          }
        },
        {
          "id": "c",
          "text": "Schedule weekly counseling sessions and plan to revisit the confusion in a few weeks if it has not resolved on its own",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Waiting weeks is unsafe for a possible acute medical issue",
          "explanation": {
            "approach": "Watchful waiting over several weeks",
            "rationale": "A possible delirium needs same-day, not delayed, evaluation",
            "keyIndicators": [
              "acute timeline"
            ],
            "commonMistake": "Deferring urgent medical concerns to a future check-in"
          }
        },
        {
          "id": "d",
          "text": "Recommend Walter keep a daily mood journal at home and plan to reassess his symptoms again in about a month",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A month-long delay is unsafe here",
          "explanation": {
            "approach": "Assign self-monitoring and delay reassessment",
            "rationale": "Journaling does not address the possible acute medical cause requiring prompt evaluation",
            "keyIndicators": [
              "needs urgent action, not monitoring"
            ],
            "commonMistake": "Substituting self-monitoring for urgent referral"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "How should the counselor communicate with Walter's medical team about these findings?",
      "evidenceRef": [
        "R3",
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Coordinate directly with his physician, sharing the observed fluctuating attention, evening worsening, and visual disturbances with consent",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Direct, specific coordination supports urgent evaluation",
          "explanation": {
            "approach": "Communicate specific clinical observations directly",
            "rationale": "Sharing concrete findings with the physician, with consent, supports a timely and accurate medical work-up",
            "keyIndicators": [
              "specific observed signs",
              "consent to coordinate"
            ],
            "commonMistake": "Relaying vague concerns instead of specific clinical observations"
          }
        },
        {
          "id": "b",
          "text": "Wait for Denise to informally mention the concerns to the physician herself without any direct counselor involvement",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Leaving it to the family is too passive",
          "explanation": {
            "approach": "Delegate communication entirely to the family",
            "rationale": "Clinical detail is best conveyed directly by the counselor who observed it",
            "keyIndicators": [
              "needs direct clinical communication"
            ],
            "commonMistake": "Relying on an informal, secondhand relay of clinical observations"
          }
        },
        {
          "id": "c",
          "text": "Send a general referral letter describing only 'depressive symptoms' without detailing the fluctuating attention or visual disturbances",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Omitting the key findings obscures the urgent concern",
          "explanation": {
            "approach": "Write a vague, mood-only referral",
            "rationale": "A vague depression-only referral fails to convey the urgency of a suspected delirium",
            "keyIndicators": [
              "omits fluctuating attention"
            ],
            "commonMistake": "Under-describing the medical urgency in a referral communication"
          }
        },
        {
          "id": "d",
          "text": "Ask Walter to describe his own symptoms to the physician himself at his next scheduled follow-up appointment in a month",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Relying on the client alone delays urgent care",
          "explanation": {
            "approach": "Defer communication to the client at a future visit",
            "rationale": "Given fluctuating attention, relying solely on Walter to relay findings a month later is unsafe",
            "keyIndicators": [
              "fluctuating recall"
            ],
            "commonMistake": "Assuming the client can reliably self-report later"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "What is the appropriate disposition regarding psychotherapy at this time?",
      "evidenceRef": [
        "R3",
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Pause starting standalone grief or depression psychotherapy until the urgent medical evaluation clarifies the cause of his confusion",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Sequencing medical evaluation first is essential",
          "explanation": {
            "approach": "Sequence care: medical evaluation before psychotherapy",
            "rationale": "Correct sequencing requires ruling out or treating a medical cause before mood-focused therapy proceeds",
            "keyIndicators": [
              "unresolved medical question",
              "pending referral"
            ],
            "commonMistake": "Beginning therapy before the medical picture is clarified"
          }
        },
        {
          "id": "b",
          "text": "Proceed immediately with cognitive behavioral therapy for depression as the primary intervention starting this week",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Starting CBT first bypasses the urgent medical need",
          "explanation": {
            "approach": "Begin CBT for depression right away",
            "rationale": "This repeats the core trap of treating an emergent medical picture as routine depression",
            "keyIndicators": [
              "fluctuating cognition unaddressed"
            ],
            "commonMistake": "Defaulting to standard depression treatment despite red flags"
          }
        },
        {
          "id": "c",
          "text": "Terminate services altogether, since this now appears to be an entirely medical matter outside of counseling",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Full termination abandons the counselor's coordinating role",
          "explanation": {
            "approach": "End counseling involvement entirely",
            "rationale": "The counselor should remain involved to support the family and coordinate care, not disengage",
            "keyIndicators": [
              "ongoing coordinating role needed"
            ],
            "commonMistake": "Dropping the case instead of coordinating care"
          }
        },
        {
          "id": "d",
          "text": "Offer only supportive listening indefinitely and never revisit the question of a medical referral going forward",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Indefinite supportive listening leaves the referral unresolved",
          "explanation": {
            "approach": "Provide open-ended supportive listening only",
            "rationale": "This never resolves the pending urgent referral question",
            "keyIndicators": [
              "referral left unresolved"
            ],
            "commonMistake": "Substituting indefinite support for a concrete referral plan"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "What additional safety-related step is also appropriate given Walter's fluctuating cognition?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Assess his home safety and current level of supervision, since fluctuating alertness raises fall and safety risk while the referral is pending",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Home safety and supervision matter during the pending workup",
          "explanation": {
            "approach": "Assess immediate home safety alongside the medical referral",
            "rationale": "Fluctuating alertness raises practical safety risks that need attention while medical evaluation is arranged",
            "keyIndicators": [
              "fluctuating alertness",
              "lives with intermittent supervision"
            ],
            "commonMistake": "Focusing only on mood and overlooking immediate safety needs"
          }
        },
        {
          "id": "b",
          "text": "Advise Walter to resume driving right away, since his low mood is the main concern and his occasional confusion is probably just leftover fatigue from the hospital stay",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Encouraging driving is unsafe given fluctuating cognition",
          "explanation": {
            "approach": "Minimize the cognitive fluctuation and clear him for driving",
            "rationale": "Recommending driving with unassessed fluctuating cognition creates serious safety risk",
            "keyIndicators": [
              "unresolved cognitive fluctuation"
            ],
            "commonMistake": "Clearing an activity that requires sustained attention before it is safe"
          }
        },
        {
          "id": "c",
          "text": "Focus solely on scheduling future weekly counseling sessions without addressing his current home safety situation",
          "isCorrect": false,
          "weight": -1,
          "rationale": "This overlooks the immediate safety question",
          "explanation": {
            "approach": "Plan future sessions only",
            "rationale": "Scheduling alone does not address the present safety risk from fluctuating cognition",
            "keyIndicators": [
              "present-moment risk unaddressed"
            ],
            "commonMistake": "Prioritizing future scheduling over current safety"
          }
        },
        {
          "id": "d",
          "text": "Recommend Walter live entirely independently with no check-ins at all while the medical workup is still pending",
          "isCorrect": false,
          "weight": -1,
          "rationale": "No supervision at all is unsafe during a pending workup",
          "explanation": {
            "approach": "Remove all supervision during the pending evaluation",
            "rationale": "Some level of check-in or support is warranted until the cause of his fluctuating cognition is clarified",
            "keyIndicators": [
              "pending medical evaluation"
            ],
            "commonMistake": "Removing supervision precisely when it is most needed"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "Denise asks the counselor to just 'talk him out of' the sadness. How should the counselor respond?",
      "evidenceRef": [
        "R2",
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Explain that the fluctuating confusion and other observations point to a possible medical cause needing urgent evaluation before mood work begins",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Reframe the referral around the urgent medical concern",
          "explanation": {
            "approach": "Educate and redirect toward urgent evaluation",
            "rationale": "Sharing the clinical rationale helps the family understand why medical evaluation precedes mood-focused work",
            "keyIndicators": [
              "family frames it as sadness",
              "counselor observes fluctuation"
            ],
            "commonMistake": "Accepting the family's mood-only framing without explanation"
          }
        },
        {
          "id": "b",
          "text": "Agree to focus every session only on cognitive-behavioral mood work and set that expectation clearly with Denise today, since that is what she is asking for",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Committing to mood-only work ignores the medical concern",
          "explanation": {
            "approach": "Commit exclusively to mood-focused sessions",
            "rationale": "This locks the plan into psychotherapy despite the unresolved medical red flags",
            "keyIndicators": [
              "unresolved fluctuating cognition"
            ],
            "commonMistake": "Letting the family's request set the treatment plan"
          }
        },
        {
          "id": "c",
          "text": "Tell Denise that her observations about his evenings are not clinically relevant and should not be discussed further",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Dismissing her observation loses key data",
          "explanation": {
            "approach": "Dismiss the family's evening-confusion observation",
            "rationale": "Her observation is a key piece of evidence and should not be dismissed",
            "keyIndicators": [
              "evening worsening reported by daughter"
            ],
            "commonMistake": "Discounting collateral information that carries diagnostic weight"
          }
        },
        {
          "id": "d",
          "text": "Suggest that Denise simply spend more time with her father instead of pursuing any further evaluation right now",
          "isCorrect": false,
          "weight": -1,
          "rationale": "This substitutes company for needed evaluation",
          "explanation": {
            "approach": "Recommend increased family time instead of evaluation",
            "rationale": "More visiting time does not address the suspected underlying medical cause",
            "keyIndicators": [
              "needs medical evaluation, not just company"
            ],
            "commonMistake": "Offering a social fix for a medical concern"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "How should the counselor engage Walter directly about the plan, given his fluctuating attention during the session?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Use simple, concrete language, repeat key points, confirm his understanding, and involve Denise given his intermittent difficulty tracking details",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Concrete, repeated, confirmed communication fits fluctuating attention",
          "explanation": {
            "approach": "Adapt communication to fluctuating attention",
            "rationale": "Simple language with repetition and confirmation improves understanding when attention is inconsistent",
            "keyIndicators": [
              "momentary disorientation earlier in session"
            ],
            "commonMistake": "Communicating as if attention were fully stable throughout"
          }
        },
        {
          "id": "b",
          "text": "Deliver one long, detailed explanation of depression theory in a single uninterrupted block without checking his understanding",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Long uninterrupted explanations do not fit fluctuating attention",
          "explanation": {
            "approach": "Deliver lengthy didactic content in one pass",
            "rationale": "A single long explanation is hard to track with intermittent attention lapses",
            "keyIndicators": [
              "attention lapses noted earlier"
            ],
            "commonMistake": "Assuming a lengthy explanation will be retained without checking"
          }
        },
        {
          "id": "c",
          "text": "Assume Walter will remember the plan clearly afterward without needing it repeated, written down, or confirmed",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Assuming full retention is risky here",
          "explanation": {
            "approach": "Assume full and stable retention of the plan",
            "rationale": "Given the observed fluctuation, assuming retention without reinforcement is unreliable",
            "keyIndicators": [
              "observed memory gap earlier in session"
            ],
            "commonMistake": "Skipping reinforcement because retention is assumed"
          }
        },
        {
          "id": "d",
          "text": "Avoid involving Denise in any part of the plan discussion in order to preserve strict confidentiality about today's session",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Excluding the daughter entirely is unsafe here",
          "explanation": {
            "approach": "Exclude the family entirely from the plan",
            "rationale": "Given fluctuating attention and the urgency of the referral, appropriate involvement of a trusted support person, with consent, is warranted",
            "keyIndicators": [
              "fluctuating attention",
              "urgent referral pending"
            ],
            "commonMistake": "Applying blanket exclusion of family when safety coordination is needed"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "What ethical duty is most relevant to the counselor's decision to pursue an urgent medical referral for Walter?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "The scope-of-practice duty to recognize when a presentation may reflect a medical condition and to refer to and coordinate with appropriate providers",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Scope-of-practice and referral duty apply directly",
          "explanation": {
            "approach": "Apply the scope-of-practice and referral duty",
            "rationale": "Counselors must recognize the limits of their competence and refer when a medical cause is suspected",
            "keyIndicators": [
              "possible medical etiology",
              "counselor competence limits"
            ],
            "commonMistake": "Treating the presentation as fully within counseling scope"
          }
        },
        {
          "id": "b",
          "text": "The duty to maintain a strict fifty-minute session length regardless of the clinical urgency present today",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Session length is not the relevant duty here",
          "explanation": {
            "approach": "Focus on session-length policy",
            "rationale": "This administrative detail does not address the referral obligation at issue",
            "keyIndicators": [
              "irrelevant administrative detail"
            ],
            "commonMistake": "Substituting a procedural rule for the substantive ethical duty"
          }
        },
        {
          "id": "c",
          "text": "The duty to never contact any other provider about a client without first receiving a formal court subpoena",
          "isCorrect": false,
          "weight": -2,
          "rationale": "This misstates coordination-of-care obligations",
          "explanation": {
            "approach": "Claim provider contact requires a subpoena",
            "rationale": "Coordinating with medical providers with client consent does not require a subpoena and is expected here",
            "keyIndicators": [
              "consent-based coordination is appropriate"
            ],
            "commonMistake": "Misunderstanding when provider communication is permitted"
          }
        },
        {
          "id": "d",
          "text": "The duty to complete an entire agreed course of psychotherapy before any referral to another type of medical or specialty provider may ever be considered appropriate at all",
          "isCorrect": false,
          "weight": -1,
          "rationale": "No such duty exists, especially given urgency",
          "explanation": {
            "approach": "Require finishing therapy before any referral",
            "rationale": "Urgent referrals are made when indicated, not deferred until a course of therapy concludes",
            "keyIndicators": [
              "urgent presentation now"
            ],
            "commonMistake": "Inventing a barrier to a timely referral"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "How should the counselor document this session and the referral decision?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Document the specific observed findings, fluctuating attention, visual disturbance, and evening worsening, the clinical reasoning, and the referral made",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Specific findings and reasoning must be documented",
          "explanation": {
            "approach": "Document findings, reasoning, and action taken",
            "rationale": "Complete documentation supports continuity of care and reflects the clinical reasoning behind the urgent referral",
            "keyIndicators": [
              "multiple specific findings",
              "referral action taken"
            ],
            "commonMistake": "Recording only a vague mood impression instead of specific findings"
          }
        },
        {
          "id": "b",
          "text": "Document only that the client 'seems depressed,' as his daughter described, and note plans to begin a standard course of psychotherapy going forward starting next week",
          "isCorrect": false,
          "weight": -2,
          "rationale": "This under-documents the actual medical concern",
          "explanation": {
            "approach": "Write a brief mood-only note",
            "rationale": "This omits the fluctuating attention and referral reasoning that justify the urgent action taken",
            "keyIndicators": [
              "omits key findings"
            ],
            "commonMistake": "Under-documenting the medical urgency present in the session"
          }
        },
        {
          "id": "c",
          "text": "Omit the visual disturbance from the record entirely in order to avoid alarming Walter or his family",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Omitting clinical findings is improper",
          "explanation": {
            "approach": "Leave out a clinically significant finding",
            "rationale": "Accurate records must include clinically significant findings, not selectively omit them",
            "keyIndicators": [
              "record integrity"
            ],
            "commonMistake": "Removing relevant findings to manage family reaction"
          }
        },
        {
          "id": "d",
          "text": "Record general session content without noting the specific timeline of onset or the referral that was actually made",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Missing timeline and referral detail is incomplete",
          "explanation": {
            "approach": "Write a general, non-specific note",
            "rationale": "Timeline and referral detail are essential to justify and track the urgent action taken",
            "keyIndicators": [
              "missing timeline detail"
            ],
            "commonMistake": "Leaving out the timeline that supports the clinical decision"
          }
        }
      ]
    }
  ]
};

const D213 = {
  "id": "ncmhce-D213",
  "title": "Individual disclosure of intimate partner violence and a partner's request to join therapy",
  "category": "Crisis",
  "difficulty": "medium",
  "primaryDiagnosis": {
    "name": "Acute Crisis / Decompensation",
    "code": "F43.0"
  },
  "diagnosis": {
    "name": "Acute Crisis / Decompensation",
    "code": "F43.0"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Acute Crisis / Decompensation",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Generalized Anxiety Disorder",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Adjustment Disorder, with Mixed Anxiety and Depressed Mood",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Posttraumatic Stress Disorder",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Maria Delgado, a 31-year-old marketing coordinator, presents for individual outpatient counseling reporting six weeks of anxiety, poor concentration, and disrupted sleep that she links to increasing tension at home with her live-in partner of fourteen months, Danny.",
    "session1": "In session she discloses that Danny has pushed her against a wall on two occasions in the past three months and, two weeks ago, choked her with both hands during an argument until her vision blurred; she also reports that he monitors her text messages, checks her location throughout the day, and has pressured her to stop seeing her sister and two close friends.",
    "session2": "Before Maria's next appointment, Danny calls the front desk and asks to be added to her 'next session, so we can work on this together as a couple'; when told about the call, Maria appears frightened, says Danny does not know she disclosed the choking incident, and reports he has since questioned why she left the house for two hours the previous afternoon."
  },
  "diagnosticRationale": "Maria's anxiety, hypervigilance, and disrupted sleep and concentration emerged and intensified in direct response to escalating, recent partner violence culminating in a choking incident two weeks ago, reflecting an acute crisis reaction to ongoing danger rather than a chronic anxiety disorder, a proportionate adjustment reaction, or full PTSD criteria, and requiring immediate danger assessment and collaborative safety planning rather than relationship-repair-focused treatment.",
  "references": [
    {
      "id": "R1",
      "source": "DSM-5-TR",
      "detail": "Differentiates an acute crisis/stress reaction from GAD, adjustment disorder, and PTSD by stressor, timing, and symptom pattern"
    },
    {
      "id": "R2",
      "source": "Hays (Assessment)",
      "detail": "Structured, private psychosocial intake procedures, including routine safety and relationship screening"
    },
    {
      "id": "R3",
      "source": "C-SSRS",
      "detail": "Structured screening for suicide risk as part of a comprehensive danger assessment in IPV cases"
    },
    {
      "id": "R4",
      "source": "Stanley-Brown SPI",
      "detail": "Collaborative, individualized safety planning adapted to intimate partner violence and lethality risk"
    },
    {
      "id": "R5",
      "source": "ACA Code of Ethics",
      "detail": "Client welfare and autonomy (A.1), informed consent (A.2), and confidentiality limits (B.1-B.2)"
    },
    {
      "id": "R6",
      "source": "State law",
      "detail": "State-specific IPV resources, confidentiality and reporting thresholds, and the civil protective order process"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "Maria presents with six weeks of anxiety, poor concentration, and disrupted sleep but has not yet mentioned her relationship. What is the most appropriate intake step?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Include direct, private questions about relationship safety as a routine part of the psychosocial intake",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Routine private screening surfaces unreported danger",
          "explanation": {
            "approach": "Screen for safety routinely and privately",
            "rationale": "Universal, private safety screening at intake catches IPV that clients rarely volunteer unprompted",
            "keyIndicators": [
              "anxiety and hypervigilance without a named cause",
              "recent cohabitation with a partner"
            ],
            "commonMistake": "Waiting for the client to volunteer relationship concerns unprompted"
          }
        },
        {
          "id": "b",
          "text": "Wait until Maria raises any relationship concerns herself before asking anything about her partner or home life",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Passive waiting can delay needed screening",
          "explanation": {
            "approach": "Defer to client-initiated disclosure",
            "rationale": "Many clients do not disclose IPV unless directly and privately asked",
            "keyIndicators": [
              "undisclosed relationship stress"
            ],
            "commonMistake": "Assuming silence means there is nothing to screen for"
          }
        },
        {
          "id": "c",
          "text": "Invite Danny to join part of the intake so the counselor can get a fuller picture of their home environment together",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Involving the partner early blocks honest disclosure",
          "explanation": {
            "approach": "Bring the partner into assessment",
            "rationale": "A partner's presence during screening suppresses honest reporting of any unsafe dynamic",
            "keyIndicators": [
              "undisclosed safety concerns",
              "need for a private space to disclose"
            ],
            "commonMistake": "Assuming a fuller picture requires the partner present"
          }
        },
        {
          "id": "d",
          "text": "Concentrate the entire intake on her sleep and concentration complaints and postpone psychosocial history to a later date",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Deferring psychosocial history delays context",
          "explanation": {
            "approach": "Symptom-only intake",
            "rationale": "Focusing only on vegetative symptoms misses the psychosocial context driving them",
            "keyIndicators": [
              "symptoms tied to a relationship context"
            ],
            "commonMistake": "Treating symptoms in isolation from psychosocial history"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "After Maria discloses that Danny choked her two weeks ago, what should the counselor prioritize next in the assessment?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "A structured danger assessment covering the frequency, severity, and escalation pattern of the violence, including access to weapons",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Structured danger assessment anchors risk level",
          "explanation": {
            "approach": "Assess danger directly and structurally",
            "rationale": "Escalation pattern, severity, and weapon access are established predictors of increased IPV lethality",
            "keyIndicators": [
              "choking disclosed",
              "prior pushing incidents"
            ],
            "commonMistake": "Moving to intervention before characterizing the danger"
          }
        },
        {
          "id": "b",
          "text": "A detailed account of every disagreement the couple has had since they moved in together fourteen months ago",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Exhaustive conflict history is low yield now",
          "explanation": {
            "approach": "Catalog relationship conflict",
            "rationale": "A full conflict history does not establish current danger level",
            "keyIndicators": [
              "low-yield historical detail"
            ],
            "commonMistake": "Collecting broad history instead of targeted risk data"
          }
        },
        {
          "id": "c",
          "text": "An immediate call to Danny to hear his account of the argument before proceeding further with Maria",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Contacting the partner breaches confidentiality and safety",
          "explanation": {
            "approach": "Seek the partner's account",
            "rationale": "Contacting Danny without consent breaches confidentiality and could increase danger to Maria",
            "keyIndicators": [
              "active violence",
              "undisclosed session content"
            ],
            "commonMistake": "Verifying a client's disclosure with the abusive partner"
          }
        },
        {
          "id": "d",
          "text": "A referral to a couples communication skills class so the two of them can address the conflict pattern together",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Couples referral is premature and misdirected",
          "explanation": {
            "approach": "Refer to conjoint skills-building",
            "rationale": "Conjoint intervention is premature before danger has even been assessed",
            "keyIndicators": [
              "unassessed lethality risk"
            ],
            "commonMistake": "Jumping to a relationship fix before assessing safety"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "Danny's choking of Maria is a well-established indicator of increased lethality risk in intimate partner violence. What follow-up is most important to include in the intake?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Specifically ask about any prior strangulation, threats with weapons, and whether the violence has increased in frequency or severity",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Strangulation history strongly predicts future lethality",
          "explanation": {
            "approach": "Target known lethality markers",
            "rationale": "Prior strangulation, weapon threats, and escalation are among the strongest predictors of IPV homicide",
            "keyIndicators": [
              "choking with both hands",
              "vision blurred"
            ],
            "commonMistake": "Treating the choking as an isolated event rather than a lethality marker"
          }
        },
        {
          "id": "b",
          "text": "Ask Maria to rate on a scale of one to ten how committed she currently feels to the relationship overall",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Commitment rating does not measure danger",
          "explanation": {
            "approach": "Rate relationship commitment",
            "rationale": "A commitment scale does not capture lethality risk or escalation history",
            "keyIndicators": [
              "risk data still missing"
            ],
            "commonMistake": "Substituting a feelings check for a danger assessment"
          }
        },
        {
          "id": "c",
          "text": "Focus only on the most recent incident and avoid asking about any earlier acts of violence to reduce her distress",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Avoiding history-taking hides escalation and worsens risk",
          "explanation": {
            "approach": "Limit inquiry to the latest incident",
            "rationale": "Skipping the escalation history can miss a rapidly worsening, high-lethality pattern",
            "keyIndicators": [
              "pattern of escalating severity"
            ],
            "commonMistake": "Avoiding distressing questions that are clinically necessary"
          }
        },
        {
          "id": "d",
          "text": "Refer her immediately to couples counseling so that Danny can learn healthier ways of managing his anger toward her",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Couples referral bypasses the lethality assessment",
          "explanation": {
            "approach": "Refer to conjoint anger work",
            "rationale": "Conjoint referral skips the lethality assessment this disclosure requires",
            "keyIndicators": [
              "unassessed escalation pattern"
            ],
            "commonMistake": "Reframing lethal violence as a communication problem"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "Which finding best supports Acute Crisis / Decompensation rather than Generalized Anxiety Disorder in Maria's case?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Her anxiety and hypervigilance emerged and sharply escalated in direct response to specific, ongoing violence and control",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Onset tied to a specific active danger fits a crisis",
          "explanation": {
            "approach": "Anchor the diagnosis to the precipitant",
            "rationale": "A crisis reaction is tied to an identifiable, ongoing danger rather than diffuse, longstanding worry",
            "keyIndicators": [
              "symptoms began with cohabitation and violence",
              "recent sharp escalation"
            ],
            "commonMistake": "Diagnosing GAD from anxiety symptoms without weighing the acute precipitant"
          }
        },
        {
          "id": "b",
          "text": "Her worry spans multiple areas of daily life, including work performance and finances, in addition to the relationship",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Diffuse worry across domains fits GAD better",
          "explanation": {
            "approach": "Weigh breadth of worry",
            "rationale": "Multi-domain, free-floating worry is more characteristic of GAD than a crisis reaction",
            "keyIndicators": [
              "worry not confined to the danger itself"
            ],
            "commonMistake": "Ignoring how broadly the worry actually spreads"
          }
        },
        {
          "id": "c",
          "text": "Her anxiety has persisted for longer than six months and is accompanied by muscle tension and restlessness",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A longer chronic course points away from an acute crisis",
          "explanation": {
            "approach": "Weigh chronicity",
            "rationale": "A six-month-plus chronic course is more consistent with GAD than an acute reaction",
            "keyIndicators": [
              "six-week, not six-month, course reported"
            ],
            "commonMistake": "Overlooking the actual reported duration"
          }
        },
        {
          "id": "d",
          "text": "Her symptoms are severe enough to interfere significantly with her concentration and daily functioning at work",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Impairment alone does not distinguish the two",
          "explanation": {
            "approach": "Weigh functional impairment",
            "rationale": "Impairment can occur in either presentation, so it does not differentiate them",
            "keyIndicators": [
              "impairment present in both conditions"
            ],
            "commonMistake": "Using severity of impairment as the differentiator"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "Beyond the presenting anxiety symptoms, what else is essential to assess given Maria's exposure to recent near-lethal violence?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Her own current risk for suicide or self-harm, using a structured screen, since intimate partner violence significantly raises that risk",
          "isCorrect": true,
          "weight": 3,
          "rationale": "IPV exposure independently elevates suicide risk",
          "explanation": {
            "approach": "Screen the client's own safety directly",
            "rationale": "A structured suicide-risk screen is indicated because IPV survivors carry markedly elevated suicide risk",
            "keyIndicators": [
              "near-lethal violence disclosed",
              "acute crisis presentation"
            ],
            "commonMistake": "Assessing only the partner's danger and skipping the client's own risk"
          }
        },
        {
          "id": "b",
          "text": "Whether her anxiety symptoms meet full criteria for panic disorder with recurrent, unexpected panic attacks",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Panic disorder is a lower-priority rule-out here",
          "explanation": {
            "approach": "Screen for panic disorder",
            "rationale": "No unexpected panic attacks are described, so this is not the priority",
            "keyIndicators": [
              "no reported panic attacks"
            ],
            "commonMistake": "Chasing a comorbidity before the client's own safety"
          }
        },
        {
          "id": "c",
          "text": "Whether she has a family history of anxiety disorders that could help explain her current presentation",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Family history does not address acute risk",
          "explanation": {
            "approach": "Explore family history",
            "rationale": "Heredity does not address the acute risk this disclosure raises",
            "keyIndicators": [
              "acute precipitant already identified"
            ],
            "commonMistake": "Prioritizing etiology over an urgent safety screen"
          }
        },
        {
          "id": "d",
          "text": "Whether her sleep problems are better explained by an untreated primary sleep disorder such as chronic insomnia disorder unrelated to any relationship stress",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Sleep disorder rule-out is secondary right now",
          "explanation": {
            "approach": "Rule out a primary sleep disorder",
            "rationale": "Sleep disruption here is well explained by the acute crisis and is a lower priority",
            "keyIndicators": [
              "sleep disruption tied to recent violence"
            ],
            "commonMistake": "Pursuing a low-yield rule-out ahead of a suicide-risk screen"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "What should be the cornerstone of the initial treatment plan for Maria at this point?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "A collaborative, individualized safety plan covering warning signs, coping steps, safe contacts, and options for leaving or staying",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Collaborative safety planning fits an active-danger case",
          "explanation": {
            "approach": "Build an individualized safety plan with her",
            "rationale": "A Stanley-Brown-style plan adapted to IPV gives structure without dictating her decision",
            "keyIndicators": [
              "active, escalating violence",
              "client willing to engage"
            ],
            "commonMistake": "Substituting a directive plan for collaborative planning"
          }
        },
        {
          "id": "b",
          "text": "A directive plan requiring her to end the relationship with Danny and move out within the next two weeks",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Directing her to leave overrides her autonomy",
          "explanation": {
            "approach": "Mandate leaving the relationship",
            "rationale": "Directing a departure timeline removes her autonomy and can itself heighten danger",
            "keyIndicators": [
              "leaving is often the most dangerous period"
            ],
            "commonMistake": "Telling a client she must leave rather than planning with her"
          }
        },
        {
          "id": "c",
          "text": "A structured anger-management referral for Danny that Maria can encourage him to attend on his own so the relationship can continue unchanged",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Managing the partner's care is not the client's plan",
          "explanation": {
            "approach": "Route treatment through the partner",
            "rationale": "Danny's treatment is not the counselor's plan for Maria and does not ensure her safety",
            "keyIndicators": [
              "plan should center on Maria's safety"
            ],
            "commonMistake": "Making the abusive partner's treatment the centerpiece of her plan"
          }
        },
        {
          "id": "d",
          "text": "A plan focused mainly on improving her sleep hygiene and daily relaxation practice to reduce her anxiety",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Symptom-focused planning ignores the active danger",
          "explanation": {
            "approach": "Treat symptoms without addressing danger",
            "rationale": "Relaxation and sleep work do not address the active violence driving her symptoms",
            "keyIndicators": [
              "active safety concern unaddressed"
            ],
            "commonMistake": "Treating anxiety symptoms while leaving danger unaddressed"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "Danny has called asking to be included in Maria's next session 'so we can work on this together as a couple.' What is the most appropriate treatment-planning response?",
      "evidenceRef": [
        "R4",
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Decline the joint session and continue individual treatment, since conjoint work during active violence can raise danger and suppress disclosure",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Conjoint therapy is contraindicated during active IPV",
          "explanation": {
            "approach": "Decline conjoint work and stay individual",
            "rationale": "Bringing an actively violent partner into session risks retaliation for disclosures and silences honest reporting",
            "keyIndicators": [
              "choking disclosed two weeks ago",
              "Danny unaware of the disclosure"
            ],
            "commonMistake": "Treating a request for couples work as automatically reasonable"
          }
        },
        {
          "id": "b",
          "text": "Agree to bring Danny into the next session to begin building healthier communication between the two of them",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Conjoint sessions with an active abuser endanger the client",
          "explanation": {
            "approach": "Grant the conjoint request for communication-building",
            "rationale": "This is the classic trap: it exposes Maria's disclosures to retaliation and frames abuse as a communication problem",
            "keyIndicators": [
              "active, escalating violence",
              "unequal power and control"
            ],
            "commonMistake": "Mistaking a well-intentioned-sounding request as clinically safe"
          }
        },
        {
          "id": "c",
          "text": "Tell Danny that Maria can decide for herself and let her choose whether he joins without first discussing the risks with her",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Deciding without clinical input on risk is incomplete",
          "explanation": {
            "approach": "Defer entirely to an uninformed choice",
            "rationale": "Respecting autonomy still requires first informing her of the specific dangers of conjoint work",
            "keyIndicators": [
              "client needs risk information first"
            ],
            "commonMistake": "Confusing autonomy with skipping informed discussion of risk"
          }
        },
        {
          "id": "d",
          "text": "Decline the joint session but offer to schedule Danny his own separate individual appointment with the same counselor",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Seeing the partner individually creates a conflict of interest",
          "explanation": {
            "approach": "Take on the partner as a separate client",
            "rationale": "Treating both partners individually creates competing loyalties and confidentiality risk",
            "keyIndicators": [
              "existing client relationship with Maria"
            ],
            "commonMistake": "Overlooking the dual-relationship risk of also treating the partner"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "What is the most appropriate way to help Maria access additional support while respecting her autonomy?",
      "evidenceRef": [
        "R6",
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Offer information about IPV-specific resources such as a hotline and a local advocate, and let her decide what steps to take and when",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Offering resources without mandating action respects autonomy",
          "explanation": {
            "approach": "Connect her to specialized resources collaboratively",
            "rationale": "IPV advocates and hotlines provide expertise while the pace and choice remain hers",
            "keyIndicators": [
              "client engaged but frightened",
              "no children reported"
            ],
            "commonMistake": "Withholding IPV-specific resources out of caution"
          }
        },
        {
          "id": "b",
          "text": "Insist that she call a domestic violence hotline before the end of today's session as a condition of continuing treatment",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Conditioning care on compliance is coercive",
          "explanation": {
            "approach": "Mandate a hotline call as a condition of care",
            "rationale": "Making continued treatment contingent on an action removes her autonomy and can rupture trust",
            "keyIndicators": [
              "coercive condition on treatment"
            ],
            "commonMistake": "Pressuring immediate action instead of offering informed choice"
          }
        },
        {
          "id": "c",
          "text": "Give her a general community resource list without any information specific to intimate partner violence",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Generic resources miss IPV-specific expertise",
          "explanation": {
            "approach": "Offer only generic referrals",
            "rationale": "A generic list omits the specialized safety expertise an IPV advocate provides",
            "keyIndicators": [
              "need for specialized, not generic, referral"
            ],
            "commonMistake": "Treating any resource list as sufficiently specific"
          }
        },
        {
          "id": "d",
          "text": "Wait for her to ask about resources on her own rather than proactively raising the option of an IPV advocate",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Passive waiting can leave her without key information",
          "explanation": {
            "approach": "Wait for the client to request resources",
            "rationale": "Many clients do not know IPV-specific resources exist unless the counselor raises them",
            "keyIndicators": [
              "client unaware of advocate resources"
            ],
            "commonMistake": "Assuming she will ask if she wants information"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "How should the safety plan specifically address the choking incident and its elevated lethality risk?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Include specific warning signs preceding escalation and an immediate physical-safety plan for recurrence, built collaboratively with Maria",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Targeted warning-sign and safety steps address lethality",
          "explanation": {
            "approach": "Build in targeted escalation and physical-safety steps",
            "rationale": "Naming her specific warning signs and a concrete physical-safety response addresses the elevated strangulation risk",
            "keyIndicators": [
              "choking is a strong lethality predictor",
              "recurrence risk present"
            ],
            "commonMistake": "Leaving the plan generic rather than tailored to the choking risk"
          }
        },
        {
          "id": "b",
          "text": "Advise Maria to try to physically restrain Danny herself the next time she senses he is becoming angry",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Instructing her to restrain him endangers her further",
          "explanation": {
            "approach": "Direct her to physically intervene",
            "rationale": "Advising physical intervention against an actively violent partner increases her risk of serious injury",
            "keyIndicators": [
              "history of choking and pushing"
            ],
            "commonMistake": "Giving advice that places the client in greater physical danger"
          }
        },
        {
          "id": "c",
          "text": "Recommend that Maria simply avoid arguments with Danny so the situation does not escalate to that point again",
          "isCorrect": false,
          "weight": -1,
          "rationale": "This places responsibility for his violence on her",
          "explanation": {
            "approach": "Advise conflict avoidance as the solution",
            "rationale": "This implicitly shifts responsibility for Danny's violence onto Maria's behavior",
            "keyIndicators": [
              "risk of victim-blaming framing"
            ],
            "commonMistake": "Framing avoidance of conflict as a safety plan"
          }
        },
        {
          "id": "d",
          "text": "Focus the plan solely on long-term relationship counseling goals for the couple rather than any immediate physical-safety steps for Maria",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Long-term goals alone ignore acute lethality risk",
          "explanation": {
            "approach": "Prioritize long-term relationship goals",
            "rationale": "Immediate physical-safety steps must come before longer-term relationship-focused goals",
            "keyIndicators": [
              "acute, unresolved lethality risk"
            ],
            "commonMistake": "Deferring urgent safety steps in favor of long-term goals"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "Maria says, 'He's just really stressed at work, I don't think he means to hurt me.' What is the most therapeutic response?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Validate her feelings toward Danny without judgment while gently naming the behaviors as unsafe, at a pace she can tolerate",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Validating feelings while naming danger keeps her engaged",
          "explanation": {
            "approach": "Validate and gently name the behavior",
            "rationale": "Non-judgmental validation paired with clear naming of unsafe behavior preserves alliance and honest disclosure",
            "keyIndicators": [
              "ambivalence toward the partner",
              "minimizing language used"
            ],
            "commonMistake": "Either confronting too hard or colluding with the minimization"
          }
        },
        {
          "id": "b",
          "text": "Firmly tell her that she is minimizing serious abuse and that she needs to see the relationship for what it really is",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Confrontation risks alliance rupture and withdrawal",
          "explanation": {
            "approach": "Confront the minimization directly",
            "rationale": "Forceful confrontation this early can rupture trust and reduce future disclosure",
            "keyIndicators": [
              "fragile trust around the disclosure"
            ],
            "commonMistake": "Pushing insight before the alliance can support it"
          }
        },
        {
          "id": "c",
          "text": "Agree that work stress likely explains his behavior and focus the conversation on how he can better manage that stress",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Endorsing the excuse reinforces minimization of violence",
          "explanation": {
            "approach": "Accept the stress explanation",
            "rationale": "Agreeing with the excuse reinforces her minimization and reframes violence as a stress problem",
            "keyIndicators": [
              "pattern of controlling and violent behavior"
            ],
            "commonMistake": "Colluding with an excuse for dangerous behavior"
          }
        },
        {
          "id": "d",
          "text": "Change the subject to her sleep and anxiety symptoms so she does not feel pressured to discuss the relationship further",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the topic leaves the belief unexamined",
          "explanation": {
            "approach": "Redirect away from the relationship topic",
            "rationale": "Avoidance bypasses a core clinical target and leaves the minimization unaddressed",
            "keyIndicators": [
              "central disclosure left unexplored"
            ],
            "commonMistake": "Sidestepping emotionally difficult but essential material"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "Maria says she sometimes 'pushes his buttons' and wonders if the violence is partly her fault. What is the best counselor response?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Gently normalize that self-blame is common after abuse and clarify that Danny alone is responsible for his violent behavior",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Naming responsibility counters self-blame directly",
          "explanation": {
            "approach": "Normalize self-blame and place responsibility with Danny",
            "rationale": "Clarifying accountability counters a common trauma response without shaming Maria for feeling it",
            "keyIndicators": [
              "self-blame statement",
              "recent violence disclosed"
            ],
            "commonMistake": "Leaving the responsibility question unaddressed"
          }
        },
        {
          "id": "b",
          "text": "Explore what she does that seems to trigger Danny so she can learn to avoid provoking him in the future",
          "isCorrect": false,
          "weight": -2,
          "rationale": "This reinforces the belief that she causes the violence",
          "explanation": {
            "approach": "Analyze her triggering behaviors",
            "rationale": "Framing her behavior as the cause of his violence reinforces harmful self-blame",
            "keyIndicators": [
              "risk of deepening self-blame"
            ],
            "commonMistake": "Treating the victim's behavior as the explanation for abuse"
          }
        },
        {
          "id": "c",
          "text": "Reassure her that the relationship will likely improve once she works out these behavior patterns in therapy",
          "isCorrect": false,
          "weight": -1,
          "rationale": "This implies her change will resolve his violence",
          "explanation": {
            "approach": "Promise improvement through her own change",
            "rationale": "This implies fixing her patterns will stop his violence, which is inaccurate and unsafe",
            "keyIndicators": [
              "responsibility misattributed to the client"
            ],
            "commonMistake": "Suggesting the client's change controls the partner's violence"
          }
        },
        {
          "id": "d",
          "text": "Avoid directly addressing the self-blame and instead redirect the conversation toward practical coping skills",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the belief leaves it unchallenged",
          "explanation": {
            "approach": "Redirect to coping skills",
            "rationale": "Skipping the self-blame statement leaves a harmful belief unaddressed",
            "keyIndicators": [
              "unaddressed distorted belief"
            ],
            "commonMistake": "Moving to skills before addressing a core distortion"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "When the counselor returns Danny's call, what is the appropriate ethical response regarding confidentiality?",
      "evidenceRef": [
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Decline to confirm or discuss whether Maria is a client, or share any session information, without her explicit consent",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Confidentiality requires consent before any disclosure",
          "explanation": {
            "approach": "Protect confidentiality absent consent",
            "rationale": "Even confirming client status without consent can breach confidentiality and endanger Maria",
            "keyIndicators": [
              "Danny unaware of the choking disclosure",
              "no consent to disclose obtained"
            ],
            "commonMistake": "Confirming a client relationship to a third party without consent"
          }
        },
        {
          "id": "b",
          "text": "Confirm that Maria is a client and explain that the counselor recommends individual rather than couples work",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Confirming client status without consent breaches confidentiality",
          "explanation": {
            "approach": "Confirm status and explain the clinical recommendation",
            "rationale": "This discloses protected information to a potentially dangerous third party without consent",
            "keyIndicators": [
              "active safety risk to the client"
            ],
            "commonMistake": "Explaining clinical reasoning to someone who is not an authorized party"
          }
        },
        {
          "id": "c",
          "text": "Tell Danny that Maria discussed him in session but withhold the specific content of what she said",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Partial disclosure still breaches confidentiality without consent",
          "explanation": {
            "approach": "Give a partial disclosure",
            "rationale": "Any acknowledgment of session content without consent violates confidentiality and heightens danger",
            "keyIndicators": [
              "undisclosed session content"
            ],
            "commonMistake": "Believing a vague disclosure is safe because it lacks detail"
          }
        },
        {
          "id": "d",
          "text": "Avoid returning the call at all and let Maria explain the situation to Danny on her own without further guidance",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Leaving it entirely to the client misses a needed boundary",
          "explanation": {
            "approach": "Do not respond and leave it to the client",
            "rationale": "The counselor still needs a clear, professional boundary response rather than silence",
            "keyIndicators": [
              "ongoing contact from the partner"
            ],
            "commonMistake": "Assuming no response avoids the ethical issue"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "How should the counselor document the session and support Maria's decision-making about her options going forward?",
      "evidenceRef": [
        "R6",
        "R5"
      ],
      "options": [
        {
          "id": "a",
          "text": "Document the danger assessment and safety plan thoroughly, and offer protective order information while leaving the timing to Maria",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Thorough documentation plus informed autonomy is standard",
          "explanation": {
            "approach": "Document fully and support informed choice",
            "rationale": "Complete documentation protects continuity of care while the decision to pursue legal protection stays with Maria",
            "keyIndicators": [
              "ongoing danger",
              "client capable of deciding for herself"
            ],
            "commonMistake": "Either under-documenting risk or directing her legal choices"
          }
        },
        {
          "id": "b",
          "text": "Document that Maria must file a protective order and file the paperwork on her behalf to ensure her safety",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Acting on her behalf removes her autonomy",
          "explanation": {
            "approach": "File the protective order for her",
            "rationale": "Taking legal action on her behalf overrides her autonomy and is outside the counselor's role",
            "keyIndicators": [
              "client autonomy over legal decisions"
            ],
            "commonMistake": "Taking over a legal decision that belongs to the client"
          }
        },
        {
          "id": "c",
          "text": "Omit details of the violence from the record to protect Maria's privacy from any future disclosure",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Omitting risk data undermines safe, continuous care",
          "explanation": {
            "approach": "Leave violence details out of the chart",
            "rationale": "Omitting the assessment and plan compromises safety and continuity of care",
            "keyIndicators": [
              "need for accurate risk documentation"
            ],
            "commonMistake": "Sacrificing accurate records for perceived privacy protection"
          }
        },
        {
          "id": "d",
          "text": "Note only that general relationship stress was discussed in session, without recording any of the specific safety concerns that Maria raised",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Vague notes obscure the actual risk present",
          "explanation": {
            "approach": "Keep a vague, general note",
            "rationale": "A vague note fails to capture the danger assessment needed for safe ongoing care",
            "keyIndicators": [
              "specific risk details left unrecorded"
            ],
            "commonMistake": "Under-specifying documentation of a safety-relevant disclosure"
          }
        }
      ]
    }
  ]
};

const D214 = {
  "id": "ncmhce-D214",
  "title": "Superficial forearm cuts in a 15-year-old after his parents' divorce",
  "category": "Crisis",
  "difficulty": "easy",
  "primaryDiagnosis": {
    "name": "Nonsuicidal Self-Injury",
    "code": "R45.88"
  },
  "diagnosis": {
    "name": "Nonsuicidal Self-Injury",
    "code": "R45.88"
  },
  "differentialOptions": [
    {
      "id": "do1",
      "name": "Nonsuicidal Self-Injury",
      "isCorrect": true
    },
    {
      "id": "do2",
      "name": "Suicidal Behavior / Acute Risk",
      "isCorrect": false
    },
    {
      "id": "do3",
      "name": "Adjustment Disorder, with Mixed Anxiety and Depressed Mood",
      "isCorrect": false
    },
    {
      "id": "do4",
      "name": "Excoriation (Skin-Picking) Disorder",
      "isCorrect": false
    }
  ],
  "narrative": {
    "intake": "Mason Whitfield, a 15-year-old high school freshman, is referred to the school-based counselor after his PE teacher noticed several superficial cuts on his forearm while he changed for class. Mason is quiet but cooperative and agrees to talk.",
    "session1": "Mason discloses he has cut his forearm with a pencil sharpener blade on more than five days over the past two months, saying it helps him 'let some of the pressure out' when schoolwork and his parents' recent divorce feel overwhelming.",
    "session2": "When asked directly, Mason consistently and clearly denies any wish to die, any suicidal plan, and any intent to kill himself, explaining that the cutting is 'the opposite'—it is what keeps him from feeling like giving up entirely."
  },
  "diagnosticRationale": "Mason's repeated, deliberate self-inflicted cutting on 5+ days in the past year, done to regulate overwhelming emotion and relieve tension, meets DSM-5-TR criteria for Nonsuicidal Self-Injury. His clear, consistent, and direct denial of any wish to die, plan, or intent—paired with a stated function of relief rather than escape from life—distinguishes this from suicidal behavior, even though his NSSI history is associated with elevated future suicide risk and warrants ongoing monitoring rather than dismissal.",
  "references": [
    {
      "id": "R1",
      "source": "DSM-5-TR",
      "detail": "NSSI: 5+ days of self-inflicted harm in a year, done for relief, without suicidal intent"
    },
    {
      "id": "R2",
      "source": "C-SSRS",
      "detail": "Structured direct questioning of wish to die, intent, and plan distinguishes NSSI from suicidality"
    },
    {
      "id": "R3",
      "source": "ACA Code of Ethics",
      "detail": "B.5.: confidentiality and informed consent with minor clients, balanced against safety"
    },
    {
      "id": "R4",
      "source": "VA/DoD CPG",
      "detail": "NSSI history is a risk factor associated with elevated future suicide risk requiring monitoring"
    },
    {
      "id": "R5",
      "source": "Wiger (Documentation)",
      "detail": "Standards for documenting risk assessment, safety monitoring, and treatment rationale"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "What is the most appropriate first step when opening the intake interview with Mason about the cuts his teacher observed?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Ask him directly and nonjudgmentally to describe what happened and what he was feeling when he cut himself",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Open, nonjudgmental inquiry builds trust and yields data",
          "explanation": {
            "approach": "Open with direct, nonjudgmental inquiry",
            "rationale": "Engaging the client openly gathers accurate history and models safety",
            "keyIndicators": [
              "quiet but cooperative",
              "recent teacher referral"
            ],
            "commonMistake": "Assuming the worst before hearing his account"
          }
        },
        {
          "id": "b",
          "text": "Call his parents immediately, before speaking with Mason at all, to inform them of the referral",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Notification before assessment skips needed clinical steps",
          "explanation": {
            "approach": "Notify parents before engaging the client",
            "rationale": "Assessment with the client should precede parent contact in most cases",
            "keyIndicators": [
              "no immediate danger described"
            ],
            "commonMistake": "Bypassing the client to contact caregivers first"
          }
        },
        {
          "id": "c",
          "text": "Focus the entire first contact on cataloguing the exact size, depth, and location of every visible wound",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Wound cataloguing is low yield for initial engagement",
          "explanation": {
            "approach": "Lead with physical documentation",
            "rationale": "Clinical history and function matter more than wound inventory",
            "keyIndicators": [
              "superficial cuts only"
            ],
            "commonMistake": "Prioritizing physical detail over clinical engagement"
          }
        },
        {
          "id": "d",
          "text": "Assume the disclosure signals an active suicidal crisis and begin arranging hospitalization right away",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Escalating before any assessment is premature and unsafe practice",
          "explanation": {
            "approach": "Escalate to hospitalization before assessing",
            "rationale": "Self-injury alone does not establish suicidal crisis without assessment",
            "keyIndicators": [
              "no intent data gathered yet"
            ],
            "commonMistake": "Treating self-injury as automatically equivalent to a suicide attempt"
          }
        }
      ]
    },
    {
      "id": "q2",
      "domain": "intake",
      "question": "What history is most important to gather next to characterize the pattern of Mason's cutting?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "The frequency, duration, method, and triggers of the cutting over the past year",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Frequency and method establish the diagnostic pattern",
          "explanation": {
            "approach": "Characterize the behavioral pattern",
            "rationale": "DSM-5-TR anchors NSSI to a frequency and duration threshold",
            "keyIndicators": [
              "more than five days in two months"
            ],
            "commonMistake": "Diagnosing from a single observed incident"
          }
        },
        {
          "id": "b",
          "text": "A complete list of every psychiatric diagnosis or hospitalization anywhere in his extended family history",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Exhaustive family history is not the priority now",
          "explanation": {
            "approach": "Collect extended family psychiatric history",
            "rationale": "This does not clarify the current behavioral pattern",
            "keyIndicators": [
              "no urgent family psychiatric data"
            ],
            "commonMistake": "Gathering low-yield background before the presenting pattern"
          }
        },
        {
          "id": "c",
          "text": "Whether he still feels sad that his parents chose to get divorced last year",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A single feeling check misses the behavioral pattern",
          "explanation": {
            "approach": "Ask only about the divorce reaction",
            "rationale": "This narrows focus away from the needed behavioral history",
            "keyIndicators": [
              "divorce is one of several stressors"
            ],
            "commonMistake": "Substituting a feelings check for a pattern history"
          }
        },
        {
          "id": "d",
          "text": "How his classmates would describe his overall personality to other students at school",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Peer perception is not diagnostically relevant here",
          "explanation": {
            "approach": "Gather peer-perception data",
            "rationale": "It does not inform the frequency or function of the behavior",
            "keyIndicators": [
              "irrelevant to pattern"
            ],
            "commonMistake": "Chasing tangential social information"
          }
        }
      ]
    },
    {
      "id": "q3",
      "domain": "intake",
      "question": "Mason mentions school stress and his parents' divorce. What should the counselor explore next at intake?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "How he understands the connection between these specific stressors and his urge to cut",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Linking stressors to the urge clarifies the behavior's function",
          "explanation": {
            "approach": "Explore the stressor-to-behavior link",
            "rationale": "Understanding triggers supports formulation and later planning",
            "keyIndicators": [
              "names school and divorce as pressures"
            ],
            "commonMistake": "Noting stressors without exploring their link to cutting"
          }
        },
        {
          "id": "b",
          "text": "Whether his parents' divorce proceedings were finalized through mediation or through litigation",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Legal process detail is not clinically relevant",
          "explanation": {
            "approach": "Explore divorce legal mechanics",
            "rationale": "This detail does not inform the behavioral formulation",
            "keyIndicators": [
              "low clinical yield"
            ],
            "commonMistake": "Pursuing legal detail instead of clinical meaning"
          }
        },
        {
          "id": "c",
          "text": "Which of his two parents he privately blames more for causing the divorce",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Assigning blame is not a needed assessment target",
          "explanation": {
            "approach": "Ask him to assign parental blame",
            "rationale": "This risks alliance strain without clarifying his coping pattern",
            "keyIndicators": [
              "no indication of blame focus"
            ],
            "commonMistake": "Steering toward blame rather than function"
          }
        },
        {
          "id": "d",
          "text": "Whether his grades have ever qualified him for the school's honor roll in any past semester",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Academic honors are unrelated to the presenting concern",
          "explanation": {
            "approach": "Review academic achievement history",
            "rationale": "Achievement history does not clarify the cutting pattern",
            "keyIndicators": [
              "tangential to presenting concern"
            ],
            "commonMistake": "Collecting unrelated background detail"
          }
        }
      ]
    },
    {
      "id": "q4",
      "domain": "core",
      "question": "Given Mason's disclosure that cutting helps him 'let the pressure out,' what is the most appropriate next safety step?",
      "evidenceRef": [
        "R2"
      ],
      "options": [
        {
          "id": "a",
          "text": "Directly ask him, using structured questions, about any current wish to die, plan, or intent to kill himself",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Direct structured questioning clarifies intent",
          "explanation": {
            "approach": "Assess intent directly and structurally",
            "rationale": "C-SSRS-style questioning distinguishes NSSI from suicidal intent",
            "keyIndicators": [
              "function described as relief, not escape"
            ],
            "commonMistake": "Assuming safety or danger from the behavior's appearance"
          }
        },
        {
          "id": "b",
          "text": "Conclude that since he says the cutting relieves pressure, no suicide questions are needed at all",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Skipping direct questioning risks missing real risk",
          "explanation": {
            "approach": "Infer safety from the stated function alone",
            "rationale": "Function does not substitute for a direct intent assessment",
            "keyIndicators": [
              "intent not yet directly assessed"
            ],
            "commonMistake": "Dismissing risk because self-injury looks purposeful"
          }
        },
        {
          "id": "c",
          "text": "Treat the visible cuts as evidence of a suicide attempt and proceed as though he intended to die",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Equating self-injury with a suicide attempt overreacts",
          "explanation": {
            "approach": "Assume suicidal intent from wound presence",
            "rationale": "Self-injury is not automatically equivalent to a suicide attempt",
            "keyIndicators": [
              "superficial, relief-oriented cutting"
            ],
            "commonMistake": "Overreacting to NSSI as if it were suicidal behavior"
          }
        },
        {
          "id": "d",
          "text": "Ask his parents privately whether they believe he intends to harm himself, instead of asking Mason",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A secondary source does not replace direct assessment",
          "explanation": {
            "approach": "Rely on parent report instead of the client",
            "rationale": "Intent must be assessed directly with the client himself",
            "keyIndicators": [
              "client is present and cooperative"
            ],
            "commonMistake": "Substituting collateral report for direct questioning"
          }
        }
      ]
    },
    {
      "id": "q5",
      "domain": "core",
      "question": "Mason denies any current wish to die, plan, or intent. How should the counselor integrate this with what is known about NSSI and future risk?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Recognize this is not an acute suicidal crisis, but that NSSI is linked to elevated future risk warranting monitoring",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Both truths must be held together in the formulation",
          "explanation": {
            "approach": "Hold current safety and future risk together",
            "rationale": "NSSI history elevates future suicide risk even without present intent",
            "keyIndicators": [
              "clear denial of intent",
              "history of repeated cutting"
            ],
            "commonMistake": "Picking one truth and ignoring the other"
          }
        },
        {
          "id": "b",
          "text": "Conclude that no suicide risk exists now or at any point in the future, so no further monitoring is warranted",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Dismissing future risk ignores the research on NSSI",
          "explanation": {
            "approach": "Treat the negative screen as permanently reassuring",
            "rationale": "This ignores the known association with elevated future risk",
            "keyIndicators": [
              "single-point-in-time screen only"
            ],
            "commonMistake": "Dismissing risk entirely because intent is currently absent"
          }
        },
        {
          "id": "c",
          "text": "Reclassify this as an acute suicidal crisis anyway, since self-injury statistically raises suicide risk",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Relabeling as acute crisis contradicts the clear denial of intent",
          "explanation": {
            "approach": "Override the intent denial with population statistics",
            "rationale": "A statistical association does not override a clear current denial",
            "keyIndicators": [
              "consistent, direct denial of intent"
            ],
            "commonMistake": "Letting base rates overrule the individual assessment"
          }
        },
        {
          "id": "d",
          "text": "Wait until suicidal ideation actually emerges before ever raising the topic of risk again",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A purely reactive stance neglects proactive monitoring",
          "explanation": {
            "approach": "Defer all future risk discussion indefinitely",
            "rationale": "Ongoing proactive monitoring is indicated given the NSSI history",
            "keyIndicators": [
              "elevated future-risk association"
            ],
            "commonMistake": "Only revisiting risk after it has already escalated"
          }
        }
      ]
    },
    {
      "id": "q6",
      "domain": "treatment",
      "question": "Which treatment recommendation best fits Mason's presentation once suicidal intent has been ruled out?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Outpatient, skills-based treatment for emotion regulation, with continued monitoring of mood and safety",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Skills-based outpatient care matches the risk level",
          "explanation": {
            "approach": "Match the treatment intensity to the assessed risk",
            "rationale": "Outpatient emotion-regulation work fits a non-acute NSSI presentation",
            "keyIndicators": [
              "no current intent",
              "clear emotion-regulation function"
            ],
            "commonMistake": "Selecting a level of care mismatched to actual risk"
          }
        },
        {
          "id": "b",
          "text": "Immediate involuntary psychiatric hospitalization based on the presence of visible self-injury",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Hospitalization is unnecessarily restrictive for this presentation",
          "explanation": {
            "approach": "Escalate to inpatient care for any self-injury",
            "rationale": "Hospitalization is reserved for acute suicidal risk, not present here",
            "keyIndicators": [
              "denies wish to die, plan, or intent"
            ],
            "commonMistake": "Treating any self-injury as requiring hospitalization"
          }
        },
        {
          "id": "c",
          "text": "Discharge him from services entirely since he denied suicidal intent and the cutting is not a concern",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Discharging ignores the ongoing NSSI needing treatment",
          "explanation": {
            "approach": "Close the case because intent is absent",
            "rationale": "NSSI itself still warrants treatment despite a negative intent screen",
            "keyIndicators": [
              "repeated cutting over two months"
            ],
            "commonMistake": "Treating a negative suicide screen as meaning no care is needed"
          }
        },
        {
          "id": "d",
          "text": "Refer him to a residential substance use program based on the emotional dysregulation he describes",
          "isCorrect": false,
          "weight": -1,
          "rationale": "No substance use is present to justify this referral",
          "explanation": {
            "approach": "Refer for an unrelated presenting problem",
            "rationale": "Nothing in the case indicates a substance use disorder",
            "keyIndicators": [
              "no substance use reported"
            ],
            "commonMistake": "Recommending a service that does not match the case"
          }
        }
      ]
    },
    {
      "id": "q7",
      "domain": "treatment",
      "question": "Given the link between NSSI and elevated future suicide risk, how should risk be tracked across upcoming sessions?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Reassess ideation, intent, and NSSI frequency briefly at each session rather than assuming stability",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Ongoing brief reassessment supports proactive monitoring",
          "explanation": {
            "approach": "Build in recurring, structured risk check-ins",
            "rationale": "Repeated brief screening tracks the elevated future-risk association",
            "keyIndicators": [
              "known association with future risk"
            ],
            "commonMistake": "Assuming one clean screen holds true indefinitely"
          }
        },
        {
          "id": "b",
          "text": "Assess risk once at intake and assume that finding remains accurate for the rest of treatment",
          "isCorrect": false,
          "weight": -1,
          "rationale": "A single assessment cannot capture changing risk over time",
          "explanation": {
            "approach": "Rely on the intake screen alone",
            "rationale": "Risk status can shift and needs repeated evaluation",
            "keyIndicators": [
              "ongoing stressors present"
            ],
            "commonMistake": "Treating an intake finding as permanent"
          }
        },
        {
          "id": "c",
          "text": "Reassess risk only if Mason happens to bring the topic up on his own in a session",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Passive waiting misses risk changes he may not disclose",
          "explanation": {
            "approach": "Wait for spontaneous client disclosure",
            "rationale": "Clients may not raise risk unprompted even when it changes",
            "keyIndicators": [
              "counselor-initiated monitoring is expected"
            ],
            "commonMistake": "Relying on the client to initiate every risk check"
          }
        },
        {
          "id": "d",
          "text": "Ask his PE teacher to watch for new cuts instead of assessing risk directly with Mason",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Delegating monitoring to a teacher bypasses clinical assessment",
          "explanation": {
            "approach": "Delegate risk monitoring to school staff",
            "rationale": "Direct clinical assessment cannot be replaced by informal observation",
            "keyIndicators": [
              "clinical responsibility for monitoring"
            ],
            "commonMistake": "Outsourcing risk assessment to a non-clinical adult"
          }
        }
      ]
    },
    {
      "id": "q8",
      "domain": "treatment",
      "question": "What is the most appropriate initial skill to target the pressure Mason describes before he reaches for cutting?",
      "evidenceRef": [
        "R4"
      ],
      "options": [
        {
          "id": "a",
          "text": "Teach concrete, in-the-moment distress-tolerance skills he can use as a replacement when pressure builds",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Replacement skills target the same relief function safely",
          "explanation": {
            "approach": "Introduce distress-tolerance replacement skills",
            "rationale": "Skills that serve the same relief function reduce reliance on cutting",
            "keyIndicators": [
              "cutting functions as pressure release"
            ],
            "commonMistake": "Removing the behavior without offering a replacement skill"
          }
        },
        {
          "id": "b",
          "text": "Have him journal extensively about the divorce every night before any coping skills are introduced",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Delaying skills work leaves him without an immediate alternative",
          "explanation": {
            "approach": "Lead with extended journaling before skills",
            "rationale": "In-the-moment skills should be prioritized given the current risk pattern",
            "keyIndicators": [
              "active cutting pattern ongoing"
            ],
            "commonMistake": "Postponing practical coping tools for insight work"
          }
        },
        {
          "id": "c",
          "text": "Instruct him to simply avoid thinking about school and family stress until the feelings pass",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Thought suppression is not an evidence-based coping strategy",
          "explanation": {
            "approach": "Recommend avoidance and suppression",
            "rationale": "Suppression tends to increase distress rather than resolve it",
            "keyIndicators": [
              "stress remains present and unaddressed"
            ],
            "commonMistake": "Advising avoidance instead of active coping skills"
          }
        },
        {
          "id": "d",
          "text": "Focus treatment exclusively on childhood-origin insight work before introducing any coping skills",
          "isCorrect": false,
          "weight": 0,
          "rationale": "Insight work alone delays needed practical coping tools",
          "explanation": {
            "approach": "Lead with exclusively insight-oriented work",
            "rationale": "Practical skills are indicated alongside any deeper exploration",
            "keyIndicators": [
              "ongoing urge to cut under pressure"
            ],
            "commonMistake": "Deferring coping skills for depth work alone"
          }
        }
      ]
    },
    {
      "id": "q9",
      "domain": "treatment",
      "question": "Given the recent divorce, how should the counselor approach involving Mason's parents in the treatment plan?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Collaboratively involve both parents in supporting the plan in a way Mason helps shape, fitting his developmental stage",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Collaborative involvement respects autonomy while adding support",
          "explanation": {
            "approach": "Build a collaborative, developmentally fitting family plan",
            "rationale": "Involving parents with the client's input supports safety and autonomy together",
            "keyIndicators": [
              "15-year-old client",
              "two involved parents post-divorce"
            ],
            "commonMistake": "Either excluding parents entirely or overriding client input"
          }
        },
        {
          "id": "b",
          "text": "Exclude both parents entirely from any involvement to protect Mason's sense of independence",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Total exclusion removes needed support and oversight",
          "explanation": {
            "approach": "Keep parents completely uninvolved",
            "rationale": "Some parental involvement supports safety for a minor client",
            "keyIndicators": [
              "minor client with ongoing safety needs"
            ],
            "commonMistake": "Treating parental involvement as entirely optional"
          }
        },
        {
          "id": "c",
          "text": "Involve only whichever parent the counselor personally finds easier to work with",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Choosing a parent by personal preference is not clinically sound",
          "explanation": {
            "approach": "Select a parent based on counselor preference",
            "rationale": "Involvement should be based on the client's needs, not counselor convenience",
            "keyIndicators": [
              "both parents remain involved in his life"
            ],
            "commonMistake": "Letting personal ease drive a clinical decision"
          }
        },
        {
          "id": "d",
          "text": "Ask the parents to supervise him constantly around the clock and remove every sharp household object indefinitely, regardless of his assessed risk level",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Constant surveillance is disproportionate to the assessed risk",
          "explanation": {
            "approach": "Impose indefinite constant supervision",
            "rationale": "This response is more restrictive than the current risk level warrants",
            "keyIndicators": [
              "no current suicidal intent identified"
            ],
            "commonMistake": "Over-restricting a client whose risk does not require it"
          }
        }
      ]
    },
    {
      "id": "q10",
      "domain": "counseling",
      "question": "Mason says the cutting is 'the opposite' of wanting to give up. What is the most therapeutic response?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Validate that the behavior currently helps him cope, while gently exploring safer alternatives serving the same function",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Validating function while introducing alternatives supports change",
          "explanation": {
            "approach": "Validate the function, then explore alternatives",
            "rationale": "Acknowledging the coping function builds alliance for skill substitution",
            "keyIndicators": [
              "cutting described as relief, not escape"
            ],
            "commonMistake": "Ignoring the function the behavior currently serves"
          }
        },
        {
          "id": "b",
          "text": "Correct him firmly that cutting is dangerous and unacceptable, and insist he agree to stop completely before discussing anything else in the session",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Leading with confrontation can rupture the alliance",
          "explanation": {
            "approach": "Confront and demand immediate cessation",
            "rationale": "Confrontation before understanding the function can disengage him",
            "keyIndicators": [
              "cooperative but sensitive disclosure"
            ],
            "commonMistake": "Demanding change before building understanding"
          }
        },
        {
          "id": "c",
          "text": "Avoid discussing what the cutting does for him so as not to seem like you condone it",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Avoiding the function leaves the core issue unaddressed",
          "explanation": {
            "approach": "Sidestep discussion of the behavior's function",
            "rationale": "Understanding function is necessary for effective replacement skills",
            "keyIndicators": [
              "function directly relevant to treatment"
            ],
            "commonMistake": "Avoiding clinically necessary but sensitive material"
          }
        },
        {
          "id": "d",
          "text": "Agree that cutting is an effective long-term coping strategy and encourage him to keep using it",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Endorsing the behavior reinforces a harmful coping pattern",
          "explanation": {
            "approach": "Endorse continued use of the behavior",
            "rationale": "Reinforcing NSSI as a long-term strategy is clinically inappropriate",
            "keyIndicators": [
              "treatment goal is safer alternatives"
            ],
            "commonMistake": "Colluding with continued self-injury"
          }
        }
      ]
    },
    {
      "id": "q11",
      "domain": "counseling",
      "question": "How should the counselor respond to Mason's visible embarrassment that his teacher and now the counselor know about the cuts?",
      "evidenceRef": [
        "R1"
      ],
      "options": [
        {
          "id": "a",
          "text": "Normalize his experience with nonjudgmental language and reassure him that disclosing was a sign of strength",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Normalizing reduces shame and supports continued openness",
          "explanation": {
            "approach": "Normalize and reduce shame directly",
            "rationale": "Reframing disclosure as strength supports ongoing engagement",
            "keyIndicators": [
              "visible embarrassment about the disclosure"
            ],
            "commonMistake": "Leaving shame unaddressed after disclosure"
          }
        },
        {
          "id": "b",
          "text": "Tell him the teacher was wrong to report what she observed and should not have gotten involved",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Criticizing the referral undermines appropriate reporting",
          "explanation": {
            "approach": "Criticize the teacher's appropriate referral",
            "rationale": "The teacher's action was appropriate and should not be undermined",
            "keyIndicators": [
              "referral led to needed assessment"
            ],
            "commonMistake": "Discouraging future appropriate adult reporting"
          }
        },
        {
          "id": "c",
          "text": "Minimize his embarrassment by quickly changing the subject to something unrelated and lighter",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Deflecting leaves his emotional reaction unprocessed",
          "explanation": {
            "approach": "Deflect to an unrelated, lighter topic",
            "rationale": "Avoidance does not help him process the shame he is feeling",
            "keyIndicators": [
              "emotion left unaddressed"
            ],
            "commonMistake": "Avoiding an emotionally central reaction"
          }
        },
        {
          "id": "d",
          "text": "Point out that his embarrassment is unnecessary since many teenagers engage in self-injury",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Dismissing the feeling as unnecessary is invalidating",
          "explanation": {
            "approach": "Dismiss the feeling as unwarranted",
            "rationale": "Telling him his feeling is unnecessary can feel invalidating",
            "keyIndicators": [
              "needs validation, not correction"
            ],
            "commonMistake": "Minimizing a client's stated emotional reaction"
          }
        }
      ]
    },
    {
      "id": "q12",
      "domain": "ethics",
      "question": "What must the counselor address regarding informed consent when beginning school-based counseling with Mason, a 15-year-old?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Explain confidentiality and its limits in age-appropriate terms, including that safety concerns may require some disclosure",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Age-appropriate limits are a core informed consent element",
          "explanation": {
            "approach": "Clarify confidentiality limits in age-appropriate terms",
            "rationale": "ACA guidance requires explaining limits, especially for minors with safety issues",
            "keyIndicators": [
              "minor client",
              "self-injury disclosed"
            ],
            "commonMistake": "Omitting the limits of confidentiality with a minor"
          }
        },
        {
          "id": "b",
          "text": "Promise Mason that nothing he discloses in counseling will ever be shared with his parents",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Absolute confidentiality promises are inaccurate for minors",
          "explanation": {
            "approach": "Guarantee unconditional confidentiality",
            "rationale": "This misstates the actual limits that apply to minor clients",
            "keyIndicators": [
              "safety-related disclosure likely needed"
            ],
            "commonMistake": "Promising secrecy that cannot ethically be kept"
          }
        },
        {
          "id": "c",
          "text": "Skip informed consent since school-based counseling for minors does not require it",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Informed consent is required regardless of setting",
          "explanation": {
            "approach": "Omit informed consent entirely",
            "rationale": "Consent processes are required in school-based counseling too",
            "keyIndicators": [
              "new counseling relationship beginning"
            ],
            "commonMistake": "Assuming school settings are exempt from consent"
          }
        },
        {
          "id": "d",
          "text": "Tell Mason his parents will automatically receive a full written transcript of everything discussed in every counseling session he attends",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Full transcripts overstate the actual disclosure limits",
          "explanation": {
            "approach": "Describe blanket, complete parental disclosure",
            "rationale": "Disclosure is limited to safety needs, not a full transcript",
            "keyIndicators": [
              "disclosure should be need-based, not blanket"
            ],
            "commonMistake": "Overstating how much detail parents will receive"
          }
        }
      ]
    },
    {
      "id": "q13",
      "domain": "ethics",
      "question": "Following Mason's disclosure of self-injury, how should the counselor approach parental notification?",
      "evidenceRef": [
        "R3"
      ],
      "options": [
        {
          "id": "a",
          "text": "Notify his parents of the self-injury and safety plan while involving Mason in how that conversation happens",
          "isCorrect": true,
          "weight": 3,
          "rationale": "Notifying while including the client balances safety and autonomy",
          "explanation": {
            "approach": "Notify parents collaboratively with the client",
            "rationale": "Ethical duty to minors supports notification handled with client input",
            "keyIndicators": [
              "self-injury disclosed by a minor"
            ],
            "commonMistake": "Either fully excluding or fully bypassing the client in this process"
          }
        },
        {
          "id": "b",
          "text": "Keep the disclosure entirely confidential from his parents since he is old enough to consent to his own care",
          "isCorrect": false,
          "weight": -2,
          "rationale": "Full confidentiality here does not meet the ethical duty to minors",
          "explanation": {
            "approach": "Withhold the disclosure from parents entirely",
            "rationale": "Self-injury in a minor generally requires some parental notification",
            "keyIndicators": [
              "15-year-old minor client"
            ],
            "commonMistake": "Treating a minor's consent as equivalent to an adult's"
          }
        },
        {
          "id": "c",
          "text": "Notify the parents but exclude Mason entirely from any part of that conversation or planning",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Excluding the client undermines his role in his own care",
          "explanation": {
            "approach": "Notify parents without any client involvement",
            "rationale": "Client involvement in the process supports engagement and autonomy",
            "keyIndicators": [
              "cooperative, engaged client"
            ],
            "commonMistake": "Leaving the client out of decisions that affect him directly"
          }
        },
        {
          "id": "d",
          "text": "Delay notifying his parents indefinitely until Mason personally feels ready to tell them himself",
          "isCorrect": false,
          "weight": -1,
          "rationale": "Indefinite delay does not meet the counselor's ethical duty",
          "explanation": {
            "approach": "Postpone notification indefinitely at the client's pace",
            "rationale": "Safety-related notification should not be delayed without limit",
            "keyIndicators": [
              "ongoing self-injury pattern"
            ],
            "commonMistake": "Letting the client's readiness override a needed notification"
          }
        }
      ]
    }
  ]
};

module.exports = { CASES: [D199, D200, D201, D202, D203, D204, D205, D206, D207, D208, D209, D210, D211, D212, D213, D214] };
