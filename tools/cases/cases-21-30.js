const CASES_21_30 = [
  {
    "id": "case21",
    "title": "Prescription Pain Medication Dependence",
    "category": "Substance",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Opioid Use Disorder, Severe",
      "code": "F11.20"
    },
    "diagnosis": {
      "name": "Opioid Use Disorder, Severe",
      "code": "F11.20"
    },
    "differentialOptions": [
      {
        "id": "oud",
        "name": "Opioid Use Disorder",
        "isCorrect": true
      },
      {
        "id": "chronic",
        "name": "Chronic Pain Syndrome",
        "isCorrect": false
      },
      {
        "id": "mdd",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "iatrogenic",
        "name": "Iatrogenic Dependence (not OUD)",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Lisa, 41, White female former office manager. Started oxycodone 4 years ago after back surgery. Now taking 3x prescribed dose, obtaining from multiple doctors and buying from others. Lost job, marriage ending. \"I need them for pain but also can't function without them.\"",
      "session1": "Describes intense cravings, using more than intended, spending significant time obtaining pills. Withdrawal: muscle aches, nausea, anxiety. Has used heroin twice when pills unavailable. Acknowledges problem but terrified of withdrawal. History of childhood sexual abuse, never treated.",
      "session2": "Missed last appointment - was sick (withdrawal). Today obtained pills, more stable. Doctor-shopping discovered, primary care terminated her. Asks about Suboxone. Ambivalent: \"Is that just trading one addiction for another?\""
    },
    "diagnosticRationale": "Severe OUD: tolerance, withdrawal, craving, continued despite consequences, failed efforts to cut down, significant time obtaining, giving up activities. Heroin use indicates progression. Trauma history relevant but OUD is primary.",
    "questions": [
      {
        "id": "q1",
        "domain": "treatment",
        "question": "Lisa asks if Suboxone is \"trading one addiction for another.\" BEST response?",
        "options": [
          {
            "id": "a",
            "text": "Yes, but it's safer",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Address stigma about MAT. Medication-Assisted Treatment has strongest evidence for OUD.",
              "keyIndicators": [],
              "commonMistake": "Yes, but it's safer"
            }
          },
          {
            "id": "b",
            "text": "Explore her concerns; provide psychoeducation that MAT is evidence-based treatment, not substitution",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Address stigma about MAT. Medication-Assisted Treatment has strongest evidence for OUD.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "She should try abstinence first",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Address stigma about MAT. Medication-Assisted Treatment has strongest evidence for OUD.",
              "keyIndicators": [],
              "commonMistake": "She should try abstinence first"
            }
          },
          {
            "id": "d",
            "text": "Refer to addiction specialist without discussion",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Address stigma about MAT. Medication-Assisted Treatment has strongest evidence for OUD.",
              "keyIndicators": [],
              "commonMistake": "Refer to addiction specialist without discussion"
            }
          }
        ],
        "rationale": "Address stigma about MAT. Medication-Assisted Treatment has strongest evidence for OUD."
      },
      {
        "id": "q2",
        "domain": "intake",
        "question": "Lisa's childhood trauma history should be addressed?",
        "options": [
          {
            "id": "a",
            "text": "Immediately through trauma-focused therapy",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Stabilization first. Trauma-informed care acknowledges history without premature processing.",
              "keyIndicators": [],
              "commonMistake": "Immediately through trauma-focused therapy"
            }
          },
          {
            "id": "b",
            "text": "After stabilization of OUD; trauma increases relapse risk if addressed prematurely",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Stabilization first. Trauma-informed care acknowledges history without premature processing.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Not relevant to current treatment",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Stabilization first. Trauma-informed care acknowledges history without premature processing.",
              "keyIndicators": [],
              "commonMistake": "Not relevant to current treatment"
            }
          },
          {
            "id": "d",
            "text": "Only if she brings it up",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Stabilization first. Trauma-informed care acknowledges history without premature processing.",
              "keyIndicators": [],
              "commonMistake": "Only if she brings it up"
            }
          }
        ],
        "rationale": "Stabilization first. Trauma-informed care acknowledges history without premature processing."
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "Lisa has used heroin when pills unavailable. This indicates?",
        "options": [
          {
            "id": "a",
            "text": "She has two separate disorders",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Heroin use signals escalation and fentanyl overdose risk. Increases urgency for MAT.",
              "keyIndicators": [],
              "commonMistake": "She has two separate disorders"
            }
          },
          {
            "id": "b",
            "text": "Progression of OUD and increased overdose risk requiring urgent intervention",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Heroin use signals escalation and fentanyl overdose risk. Increases urgency for MAT.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Treatment resistance",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Heroin use signals escalation and fentanyl overdose risk. Increases urgency for MAT.",
              "keyIndicators": [],
              "commonMistake": "Treatment resistance"
            }
          },
          {
            "id": "d",
            "text": "Need to focus only on heroin",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Heroin use signals escalation and fentanyl overdose risk. Increases urgency for MAT.",
              "keyIndicators": [],
              "commonMistake": "Need to focus only on heroin"
            }
          }
        ],
        "rationale": "Heroin use signals escalation and fentanyl overdose risk. Increases urgency for MAT."
      },
      {
        "id": "q4",
        "domain": "ethics",
        "question": "Lisa's doctor-shopping was discovered. As her counselor, you should?",
        "options": [
          {
            "id": "a",
            "text": "Report to authorities",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Doctor-shopping is OUD symptom, not character flaw. Non-judgmental, treatment-focused response.",
              "keyIndicators": [],
              "commonMistake": "Report to authorities"
            }
          },
          {
            "id": "b",
            "text": "Address as symptom of OUD; coordinate care for MAT access",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Doctor-shopping is OUD symptom, not character flaw. Non-judgmental, treatment-focused response.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Confront the deception",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Doctor-shopping is OUD symptom, not character flaw. Non-judgmental, treatment-focused response.",
              "keyIndicators": [],
              "commonMistake": "Confront the deception"
            }
          },
          {
            "id": "d",
            "text": "Terminate for dishonesty",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Doctor-shopping is OUD symptom, not character flaw. Non-judgmental, treatment-focused response.",
              "keyIndicators": [],
              "commonMistake": "Terminate for dishonesty"
            }
          }
        ],
        "rationale": "Doctor-shopping is OUD symptom, not character flaw. Non-judgmental, treatment-focused response."
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "Comprehensive OUD treatment should include?",
        "options": [
          {
            "id": "a",
            "text": "MAT alone",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Multimodal treatment: MAT + behavioral therapy + support systems produces best outcomes.",
              "keyIndicators": [],
              "commonMistake": "MAT alone"
            }
          },
          {
            "id": "b",
            "text": "MAT combined with counseling, peer support, and addressing social determinants",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Multimodal treatment: MAT + behavioral therapy + support systems produces best outcomes.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Counseling with abstinence goal only",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Multimodal treatment: MAT + behavioral therapy + support systems produces best outcomes.",
              "keyIndicators": [],
              "commonMistake": "Counseling with abstinence goal only"
            }
          },
          {
            "id": "d",
            "text": "Residential treatment mandatory",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Multimodal treatment: MAT + behavioral therapy + support systems produces best outcomes.",
              "keyIndicators": [],
              "commonMistake": "Residential treatment mandatory"
            }
          }
        ],
        "rationale": "Multimodal treatment: MAT + behavioral therapy + support systems produces best outcomes."
      }
    ]
  },
  {
    "id": "case22",
    "title": "Identity Confusion and Memory Gaps",
    "category": "Dissociative",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Dissociative Identity Disorder",
      "code": "F44.81"
    },
    "diagnosis": {
      "name": "Dissociative Identity Disorder",
      "code": "F44.81"
    },
    "differentialOptions": [
      {
        "id": "did",
        "name": "Dissociative Identity Disorder",
        "isCorrect": true
      },
      {
        "id": "bpd",
        "name": "Borderline Personality Disorder",
        "isCorrect": false
      },
      {
        "id": "ptsd",
        "name": "PTSD with Dissociative Features",
        "isCorrect": false
      },
      {
        "id": "psychotic",
        "name": "Psychotic Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Crystal, 33, biracial female artist. Referred after ER visit for self-harm she doesn't remember. Reports \"losing time,\" finding writings/drawings she doesn't recall making. Others say she acts like \"different people.\" Extensive childhood abuse history.",
      "session1": "Describes hearing internal voices commenting, arguing. Different \"parts\" with distinct names, ages, functions. Child part holds trauma memories. Protector part hostile toward therapy. Host (Crystal) exhausted from \"keeping everyone together.\"",
      "session2": "Arrived appearing younger, speaking differently, called self \"Lily.\" Later \"switched\" back, no memory of session beginning. Asks if she's \"crazy\" or \"making this up.\" History: 5 previous therapists, 2 hospitalizations."
    },
    "diagnosticRationale": "DID: disruption of identity with 2+ distinct personality states, recurrent amnesia. Internal voices are parts, not psychotic hallucinations. Trauma history typical. Not BPD (identity disturbance present but distinct states/amnesia key).",
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "Crystal asks if she's \"crazy\" or \"making this up.\" BEST response?",
        "options": [
          {
            "id": "a",
            "text": "Reassure she's not crazy",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Frame DID as adaptive response to trauma, not pathology. Reduces shame, builds alliance.",
              "keyIndicators": [],
              "commonMistake": "Reassure she's not crazy"
            }
          },
          {
            "id": "b",
            "text": "Validate her confusion; explain DID as creative survival response to overwhelming trauma",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Frame DID as adaptive response to trauma, not pathology. Reduces shame, builds alliance.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Cannot confirm diagnosis yet",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Frame DID as adaptive response to trauma, not pathology. Reduces shame, builds alliance.",
              "keyIndicators": [],
              "commonMistake": "Cannot confirm diagnosis yet"
            }
          },
          {
            "id": "d",
            "text": "Explore secondary gain",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Frame DID as adaptive response to trauma, not pathology. Reduces shame, builds alliance.",
              "keyIndicators": [],
              "commonMistake": "Explore secondary gain"
            }
          }
        ],
        "rationale": "Frame DID as adaptive response to trauma, not pathology. Reduces shame, builds alliance."
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "A \"protector part\" is hostile toward therapy. BEST approach?",
        "options": [
          {
            "id": "a",
            "text": "Work around this part",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Protector parts served survival function. Validation and respect builds internal system trust.",
              "keyIndicators": [],
              "commonMistake": "Work around this part"
            }
          },
          {
            "id": "b",
            "text": "Acknowledge protector's role; communicate respect for its function while building trust",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Protector parts served survival function. Validation and respect builds internal system trust.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Integrate this part first",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Protector parts served survival function. Validation and respect builds internal system trust.",
              "keyIndicators": [],
              "commonMistake": "Integrate this part first"
            }
          },
          {
            "id": "d",
            "text": "Set boundaries against hostility",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Protector parts served survival function. Validation and respect builds internal system trust.",
              "keyIndicators": [],
              "commonMistake": "Set boundaries against hostility"
            }
          }
        ],
        "rationale": "Protector parts served survival function. Validation and respect builds internal system trust."
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "Phase-oriented treatment for DID prioritizes?",
        "options": [
          {
            "id": "a",
            "text": "Immediate trauma processing",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Phase 1: stabilization. Premature trauma work destabilizes and retraumatizes.",
              "keyIndicators": [],
              "commonMistake": "Immediate trauma processing"
            }
          },
          {
            "id": "b",
            "text": "Safety, stabilization, and building internal communication before trauma work",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Phase 1: stabilization. Premature trauma work destabilizes and retraumatizes.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Rapid integration of parts",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Phase 1: stabilization. Premature trauma work destabilizes and retraumatizes.",
              "keyIndicators": [],
              "commonMistake": "Rapid integration of parts"
            }
          },
          {
            "id": "d",
            "text": "Hypnosis to access memories",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Phase 1: stabilization. Premature trauma work destabilizes and retraumatizes.",
              "keyIndicators": [],
              "commonMistake": "Hypnosis to access memories"
            }
          }
        ],
        "rationale": "Phase 1: stabilization. Premature trauma work destabilizes and retraumatizes."
      },
      {
        "id": "q4",
        "domain": "core",
        "question": "Crystal's internal voices differ from psychotic hallucinations because?",
        "options": [
          {
            "id": "a",
            "text": "She knows they're not real",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "DID voices are internal, part of self-system. Psychotic hallucinations experienced as external.",
              "keyIndicators": [],
              "commonMistake": "She knows they're not real"
            }
          },
          {
            "id": "b",
            "text": "Experienced as internal parts of self, often with distinct identities and functions",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "DID voices are internal, part of self-system. Psychotic hallucinations experienced as external.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "They're not command hallucinations",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "DID voices are internal, part of self-system. Psychotic hallucinations experienced as external.",
              "keyIndicators": [],
              "commonMistake": "They're not command hallucinations"
            }
          },
          {
            "id": "d",
            "text": "No difference - both are psychotic",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "DID voices are internal, part of self-system. Psychotic hallucinations experienced as external.",
              "keyIndicators": [],
              "commonMistake": "No difference - both are psychotic"
            }
          }
        ],
        "rationale": "DID voices are internal, part of self-system. Psychotic hallucinations experienced as external."
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "Crystal has had 5 previous therapists. This pattern suggests?",
        "options": [
          {
            "id": "a",
            "text": "She's untreatable",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "DID requires specialized treatment. Relationship disruptions often due to system dynamics, not \"resistance.\"",
              "keyIndicators": [],
              "commonMistake": "She's untreatable"
            }
          },
          {
            "id": "b",
            "text": "Need for DID-specialized treatment with focus on therapeutic relationship stability",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "DID requires specialized treatment. Relationship disruptions often due to system dynamics, not \"resistance.\"",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Therapists were incompetent",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "DID requires specialized treatment. Relationship disruptions often due to system dynamics, not \"resistance.\"",
              "keyIndicators": [],
              "commonMistake": "Therapists were incompetent"
            }
          },
          {
            "id": "d",
            "text": "Borderline splitting pattern",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "DID requires specialized treatment. Relationship disruptions often due to system dynamics, not \"resistance.\"",
              "keyIndicators": [],
              "commonMistake": "Borderline splitting pattern"
            }
          }
        ],
        "rationale": "DID requires specialized treatment. Relationship disruptions often due to system dynamics, not \"resistance.\""
      }
    ]
  },
  {
    "id": "case23",
    "title": "Aftermath of Violent Crime",
    "category": "Trauma",
    "difficulty": "medium",
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
        "id": "asd",
        "name": "Acute Stress Disorder",
        "isCorrect": true
      },
      {
        "id": "ptsd",
        "name": "PTSD",
        "isCorrect": false
      },
      {
        "id": "adjustment",
        "name": "Adjustment Disorder",
        "isCorrect": false
      },
      {
        "id": "gad",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Anthony, 26, Black male graduate student. Witnessed armed robbery 2 weeks ago where clerk was shot (survived). Can't stop seeing it. Nightmares nightly, avoiding convenience stores, jumpy, emotionally numb. \"Feel like I'm in a fog.\"",
      "session1": "Describes intrusive images, flashbacks when hears loud noises. Feels detached from self and surroundings. Difficulty remembering details of that night. Startles easily, hypervigilant in public. Can't concentrate on studies. Roommate says he \"zones out.\"",
      "session2": "Symptoms continuing, sleep severely disrupted. Using alcohol to sleep - 3-4 drinks nightly, new pattern. Asking if he'll \"ever be normal again.\" Reluctant to talk details: \"Talking makes it worse.\""
    },
    "diagnosticRationale": "ASD: trauma exposure, intrusion, dissociation, avoidance, arousal symptoms 3 days to 1 month post-trauma. Not PTSD yet (under 1 month). Not Adjustment (meets full trauma criteria). High risk for PTSD development.",
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Anthony's symptoms at 2 weeks post-trauma indicate?",
        "options": [
          {
            "id": "a",
            "text": "PTSD requiring immediate trauma processing",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "ASD diagnosed 3 days to 1 month. Early intervention can prevent PTSD development.",
              "keyIndicators": [],
              "commonMistake": "PTSD requiring immediate trauma processing"
            }
          },
          {
            "id": "b",
            "text": "Acute Stress Disorder with risk for PTSD; early intervention indicated",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "ASD diagnosed 3 days to 1 month. Early intervention can prevent PTSD development.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Normal reaction requiring no treatment",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "ASD diagnosed 3 days to 1 month. Early intervention can prevent PTSD development.",
              "keyIndicators": [],
              "commonMistake": "Normal reaction requiring no treatment"
            }
          },
          {
            "id": "d",
            "text": "Adjustment Disorder",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "ASD diagnosed 3 days to 1 month. Early intervention can prevent PTSD development.",
              "keyIndicators": [],
              "commonMistake": "Adjustment Disorder"
            }
          }
        ],
        "rationale": "ASD diagnosed 3 days to 1 month. Early intervention can prevent PTSD development."
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "Anthony says \"talking makes it worse.\" BEST response?",
        "options": [
          {
            "id": "a",
            "text": "Avoidance will make symptoms worse",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Validate while psychoeducating. Graduated processing, not flooding.",
              "keyIndicators": [],
              "commonMistake": "Avoidance will make symptoms worse"
            }
          },
          {
            "id": "b",
            "text": "Validate concern; explain gradual processing differs from overwhelming re-exposure",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Validate while psychoeducating. Graduated processing, not flooding.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Agree to avoid trauma discussion",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Validate while psychoeducating. Graduated processing, not flooding.",
              "keyIndicators": [],
              "commonMistake": "Agree to avoid trauma discussion"
            }
          },
          {
            "id": "d",
            "text": "He needs exposure therapy immediately",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Validate while psychoeducating. Graduated processing, not flooding.",
              "keyIndicators": [],
              "commonMistake": "He needs exposure therapy immediately"
            }
          }
        ],
        "rationale": "Validate while psychoeducating. Graduated processing, not flooding."
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "Anthony's new alcohol use pattern should be addressed by?",
        "options": [
          {
            "id": "a",
            "text": "Separate substance use treatment first",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Alcohol after trauma is common coping. Address as part of integrated treatment, not separate issue.",
              "keyIndicators": [],
              "commonMistake": "Separate substance use treatment first"
            }
          },
          {
            "id": "b",
            "text": "Identifying as coping attempt; providing alternative strategies while monitoring escalation",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Alcohol after trauma is common coping. Address as part of integrated treatment, not separate issue.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Ignore since it's understandable",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Alcohol after trauma is common coping. Address as part of integrated treatment, not separate issue.",
              "keyIndicators": [],
              "commonMistake": "Ignore since it's understandable"
            }
          },
          {
            "id": "d",
            "text": "Insist on immediate abstinence",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Alcohol after trauma is common coping. Address as part of integrated treatment, not separate issue.",
              "keyIndicators": [],
              "commonMistake": "Insist on immediate abstinence"
            }
          }
        ],
        "rationale": "Alcohol after trauma is common coping. Address as part of integrated treatment, not separate issue."
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "For ASD, which intervention has STRONGEST evidence for preventing PTSD?",
        "options": [
          {
            "id": "a",
            "text": "Psychological debriefing",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Early trauma-focused CBT prevents PTSD. Debriefing not supported, may be harmful.",
              "keyIndicators": [],
              "commonMistake": "Psychological debriefing"
            }
          },
          {
            "id": "b",
            "text": "Brief CBT with trauma-focused elements",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Early trauma-focused CBT prevents PTSD. Debriefing not supported, may be harmful.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Supportive counseling only",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Early trauma-focused CBT prevents PTSD. Debriefing not supported, may be harmful.",
              "keyIndicators": [],
              "commonMistake": "Supportive counseling only"
            }
          },
          {
            "id": "d",
            "text": "Benzodiazepines for sleep",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Early trauma-focused CBT prevents PTSD. Debriefing not supported, may be harmful.",
              "keyIndicators": [],
              "commonMistake": "Benzodiazepines for sleep"
            }
          }
        ],
        "rationale": "Early trauma-focused CBT prevents PTSD. Debriefing not supported, may be harmful."
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Anthony's feeling of being \"in a fog\" and \"zones out\" reflects?",
        "options": [
          {
            "id": "a",
            "text": "Depression",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Dissociation (depersonalization, derealization) is criterion for ASD and predicts PTSD.",
              "keyIndicators": [],
              "commonMistake": "Depression"
            }
          },
          {
            "id": "b",
            "text": "Dissociative symptoms common in acute trauma response",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Dissociation (depersonalization, derealization) is criterion for ASD and predicts PTSD.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Psychotic prodrome",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Dissociation (depersonalization, derealization) is criterion for ASD and predicts PTSD.",
              "keyIndicators": [],
              "commonMistake": "Psychotic prodrome"
            }
          },
          {
            "id": "d",
            "text": "Effect of alcohol use",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Dissociation (depersonalization, derealization) is criterion for ASD and predicts PTSD.",
              "keyIndicators": [],
              "commonMistake": "Effect of alcohol use"
            }
          }
        ],
        "rationale": "Dissociation (depersonalization, derealization) is criterion for ASD and predicts PTSD."
      }
    ]
  },
  {
    "id": "case24",
    "title": "Adolescent Aggression and Rule-Breaking",
    "category": "Disruptive",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Conduct Disorder, Adolescent-Onset Type",
      "code": "F91.2"
    },
    "diagnosis": {
      "name": "Conduct Disorder, Adolescent-Onset Type",
      "code": "F91.2"
    },
    "differentialOptions": [
      {
        "id": "cd",
        "name": "Conduct Disorder",
        "isCorrect": true
      },
      {
        "id": "odd",
        "name": "Oppositional Defiant Disorder",
        "isCorrect": false
      },
      {
        "id": "adhd",
        "name": "ADHD",
        "isCorrect": false
      },
      {
        "id": "trauma",
        "name": "PTSD with behavioral symptoms",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Parents of Damon, 15, African American male. School expulsion for fighting and threats. Shoplifting twice, vandalized neighbor's car, stays out past curfew. \"He was a good kid until middle school.\" Parents exhausted, younger siblings scared.",
      "session1": "Damon dismissive, denies problems: \"Everyone's overreacting.\" Shows little remorse. Associates with older peers involved in theft. Some bullying at school before behavior change. Father travels frequently for work, mother overwhelmed.",
      "session2": "Parents report Damon snuck out, came home intoxicated. Found lighter and unknown pills in room. Damon defiant in session: \"What are you gonna do about it?\" Brief moment of engagement when discussing feeling like \"no one cares anyway.\""
    },
    "diagnosticRationale": "Conduct Disorder: aggression to people, property destruction, deceitfulness/theft, serious rule violations. Adolescent-onset (no symptoms before 10). Not ODD (more severe - CD includes aggression, property, theft). ADHD may be comorbid but CD primary.",
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "Damon says \"no one cares anyway.\" BEST therapeutic response?",
        "options": [
          {
            "id": "a",
            "text": "Challenge the distortion",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Moments of vulnerability are therapeutic openings. CD often masks attachment wounds.",
              "keyIndicators": [],
              "commonMistake": "Challenge the distortion"
            }
          },
          {
            "id": "b",
            "text": "Explore this feeling; may reveal underlying attachment needs beneath bravado",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Moments of vulnerability are therapeutic openings. CD often masks attachment wounds.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Remind him people do care",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Moments of vulnerability are therapeutic openings. CD often masks attachment wounds.",
              "keyIndicators": [],
              "commonMistake": "Remind him people do care"
            }
          },
          {
            "id": "d",
            "text": "Return to behavioral issues",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Moments of vulnerability are therapeutic openings. CD often masks attachment wounds.",
              "keyIndicators": [],
              "commonMistake": "Return to behavioral issues"
            }
          }
        ],
        "rationale": "Moments of vulnerability are therapeutic openings. CD often masks attachment wounds."
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "For adolescent Conduct Disorder, which has STRONGEST evidence?",
        "options": [
          {
            "id": "a",
            "text": "Individual insight therapy",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "MST and FFT have strongest evidence. Scared straight programs can worsen outcomes.",
              "keyIndicators": [],
              "commonMistake": "Individual insight therapy"
            }
          },
          {
            "id": "b",
            "text": "Multisystemic Therapy (MST) or Functional Family Therapy",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "MST and FFT have strongest evidence. Scared straight programs can worsen outcomes.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Boot camp / scared straight programs",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "MST and FFT have strongest evidence. Scared straight programs can worsen outcomes.",
              "keyIndicators": [],
              "commonMistake": "Boot camp / scared straight programs"
            }
          },
          {
            "id": "d",
            "text": "Residential treatment",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "MST and FFT have strongest evidence. Scared straight programs can worsen outcomes.",
              "keyIndicators": [],
              "commonMistake": "Residential treatment"
            }
          }
        ],
        "rationale": "MST and FFT have strongest evidence. Scared straight programs can worsen outcomes."
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Father's frequent travel and mother being overwhelmed is MOST relevant because?",
        "options": [
          {
            "id": "a",
            "text": "Explains Damon's behavior",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Family factors are modifiable treatment targets. Supervision and parental consistency improve outcomes.",
              "keyIndicators": [],
              "commonMistake": "Explains Damon's behavior"
            }
          },
          {
            "id": "b",
            "text": "Parental involvement and supervision are key treatment targets",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Family factors are modifiable treatment targets. Supervision and parental consistency improve outcomes.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Father should be blamed",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Family factors are modifiable treatment targets. Supervision and parental consistency improve outcomes.",
              "keyIndicators": [],
              "commonMistake": "Father should be blamed"
            }
          },
          {
            "id": "d",
            "text": "Focus on Damon, not family",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Family factors are modifiable treatment targets. Supervision and parental consistency improve outcomes.",
              "keyIndicators": [],
              "commonMistake": "Focus on Damon, not family"
            }
          }
        ],
        "rationale": "Family factors are modifiable treatment targets. Supervision and parental consistency improve outcomes."
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Damon associates with antisocial peers. This should be addressed by?",
        "options": [
          {
            "id": "a",
            "text": "Forbidding contact",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Deviant peer affiliation maintains CD. Replace with prosocial peers/activities. Avoid grouping antisocial youth.",
              "keyIndicators": [],
              "commonMistake": "Forbidding contact"
            }
          },
          {
            "id": "b",
            "text": "Targeting peer associations while building prosocial activities and connections",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Deviant peer affiliation maintains CD. Replace with prosocial peers/activities. Avoid grouping antisocial youth.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "This will resolve when behavior improves",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Deviant peer affiliation maintains CD. Replace with prosocial peers/activities. Avoid grouping antisocial youth.",
              "keyIndicators": [],
              "commonMistake": "This will resolve when behavior improves"
            }
          },
          {
            "id": "d",
            "text": "Group therapy with similar peers",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Deviant peer affiliation maintains CD. Replace with prosocial peers/activities. Avoid grouping antisocial youth.",
              "keyIndicators": [],
              "commonMistake": "Group therapy with similar peers"
            }
          }
        ],
        "rationale": "Deviant peer affiliation maintains CD. Replace with prosocial peers/activities. Avoid grouping antisocial youth."
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Adolescent-onset CD differs from childhood-onset primarily in?",
        "options": [
          {
            "id": "a",
            "text": "Severity of current symptoms",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Adolescent-onset has better prognosis. Childhood-onset more likely to persist into ASPD.",
              "keyIndicators": [],
              "commonMistake": "Severity of current symptoms"
            }
          },
          {
            "id": "b",
            "text": "Better prognosis and less likely to develop Antisocial Personality Disorder",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Adolescent-onset has better prognosis. Childhood-onset more likely to persist into ASPD.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Treatment approach required",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Adolescent-onset has better prognosis. Childhood-onset more likely to persist into ASPD.",
              "keyIndicators": [],
              "commonMistake": "Treatment approach required"
            }
          },
          {
            "id": "d",
            "text": "Presence of callous-unemotional traits",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Adolescent-onset has better prognosis. Childhood-onset more likely to persist into ASPD.",
              "keyIndicators": [],
              "commonMistake": "Presence of callous-unemotional traits"
            }
          }
        ],
        "rationale": "Adolescent-onset has better prognosis. Childhood-onset more likely to persist into ASPD."
      }
    ]
  },
  {
    "id": "case25",
    "title": "Chronic Sleep Difficulties",
    "category": "Sleep",
    "difficulty": "easy",
    "primaryDiagnosis": {
      "name": "Insomnia Disorder, Chronic",
      "code": "F51.01"
    },
    "diagnosis": {
      "name": "Insomnia Disorder, Chronic",
      "code": "F51.01"
    },
    "differentialOptions": [
      {
        "id": "insomnia",
        "name": "Insomnia Disorder",
        "isCorrect": true
      },
      {
        "id": "mdd",
        "name": "MDD with insomnia",
        "isCorrect": false
      },
      {
        "id": "gad",
        "name": "GAD with sleep disturbance",
        "isCorrect": false
      },
      {
        "id": "circadian",
        "name": "Circadian Rhythm Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Priya, 44, South Asian female marketing executive. \"Haven't slept well in 2 years.\" Takes 1-2 hours to fall asleep, wakes multiple times, mind racing about work. Functioning on 4-5 hours. Tried melatonin, alcohol, nothing works. Daytime fatigue affecting performance.",
      "session1": "Describes bedroom as \"war zone\" - works in bed, watches TV, checks emails. Irregular schedule: late nights on weekdays, sleeps in weekends. Racing thoughts about sleep itself: \"What if I never sleep again?\" Caffeine until 6 PM. No depression/anxiety beyond sleep worry.",
      "session2": "Sleep log shows average 4.5 hours, significant time in bed awake. Frustrated with suggestion to limit bed time: \"I need MORE sleep not less.\" Asks about sleeping pills. Reports sleeping better on vacation but \"can't live on vacation.\""
    },
    "diagnosticRationale": "Insomnia Disorder: difficulty initiating/maintaining, 3+ nights/week, 3+ months, distress/impairment. Not secondary to MDD/GAD (sleep-specific worry, no broader symptoms). Conditioned arousal and poor sleep hygiene maintaining.",
    "questions": [
      {
        "id": "q1",
        "domain": "treatment",
        "question": "For chronic insomnia, FIRST-LINE treatment is?",
        "options": [
          {
            "id": "a",
            "text": "Sleep medication",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "CBT-I is first-line with strong evidence, superior to medication long-term.",
              "keyIndicators": [],
              "commonMistake": "Sleep medication"
            }
          },
          {
            "id": "b",
            "text": "CBT-I (Cognitive Behavioral Therapy for Insomnia)",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "CBT-I is first-line with strong evidence, superior to medication long-term.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Sleep hygiene education only",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "CBT-I is first-line with strong evidence, superior to medication long-term.",
              "keyIndicators": [],
              "commonMistake": "Sleep hygiene education only"
            }
          },
          {
            "id": "d",
            "text": "Relaxation training",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "CBT-I is first-line with strong evidence, superior to medication long-term.",
              "keyIndicators": [],
              "commonMistake": "Relaxation training"
            }
          }
        ],
        "rationale": "CBT-I is first-line with strong evidence, superior to medication long-term."
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "Priya is frustrated about limiting bed time (\"I need MORE sleep\"). BEST response?",
        "options": [
          {
            "id": "a",
            "text": "She's right - she needs more sleep",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Sleep restriction is counterintuitive but effective. Psychoeducation with validation increases compliance.",
              "keyIndicators": [],
              "commonMistake": "She's right - she needs more sleep"
            }
          },
          {
            "id": "b",
            "text": "Validate frustration; explain sleep restriction consolidates sleep and builds drive",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Sleep restriction is counterintuitive but effective. Psychoeducation with validation increases compliance.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "She must follow instructions",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Sleep restriction is counterintuitive but effective. Psychoeducation with validation increases compliance.",
              "keyIndicators": [],
              "commonMistake": "She must follow instructions"
            }
          },
          {
            "id": "d",
            "text": "Skip this component",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Sleep restriction is counterintuitive but effective. Psychoeducation with validation increases compliance.",
              "keyIndicators": [],
              "commonMistake": "Skip this component"
            }
          }
        ],
        "rationale": "Sleep restriction is counterintuitive but effective. Psychoeducation with validation increases compliance."
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "Priya works in bed and watches TV there. This should be addressed by?",
        "options": [
          {
            "id": "a",
            "text": "It's fine if she's comfortable",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Stimulus control breaks association between bed and wakefulness/arousal.",
              "keyIndicators": [],
              "commonMistake": "It's fine if she's comfortable"
            }
          },
          {
            "id": "b",
            "text": "Stimulus control: bed for sleep and sex only to break conditioned arousal",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Stimulus control breaks association between bed and wakefulness/arousal.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Suggest working elsewhere but TV is okay",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Stimulus control breaks association between bed and wakefulness/arousal.",
              "keyIndicators": [],
              "commonMistake": "Suggest working elsewhere but TV is okay"
            }
          },
          {
            "id": "d",
            "text": "Relaxation in bed instead",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Stimulus control breaks association between bed and wakefulness/arousal.",
              "keyIndicators": [],
              "commonMistake": "Relaxation in bed instead"
            }
          }
        ],
        "rationale": "Stimulus control breaks association between bed and wakefulness/arousal."
      },
      {
        "id": "q4",
        "domain": "intake",
        "question": "Priya sleeps better on vacation. This suggests?",
        "options": [
          {
            "id": "a",
            "text": "Her insomnia isn't real",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Better sleep elsewhere confirms conditioned arousal. Indicates treatment can help.",
              "keyIndicators": [],
              "commonMistake": "Her insomnia isn't real"
            }
          },
          {
            "id": "b",
            "text": "Conditioned arousal to home sleep environment; good prognostic sign",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Better sleep elsewhere confirms conditioned arousal. Indicates treatment can help.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Work stress is the only issue",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Better sleep elsewhere confirms conditioned arousal. Indicates treatment can help.",
              "keyIndicators": [],
              "commonMistake": "Work stress is the only issue"
            }
          },
          {
            "id": "d",
            "text": "She should change jobs",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Better sleep elsewhere confirms conditioned arousal. Indicates treatment can help.",
              "keyIndicators": [],
              "commonMistake": "She should change jobs"
            }
          }
        ],
        "rationale": "Better sleep elsewhere confirms conditioned arousal. Indicates treatment can help."
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "Priya asks about sleeping pills. MOST appropriate response?",
        "options": [
          {
            "id": "a",
            "text": "Refuse - pills are never appropriate",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Medication has role short-term but CBT-I provides durable improvement without dependence.",
              "keyIndicators": [],
              "commonMistake": "Refuse - pills are never appropriate"
            }
          },
          {
            "id": "b",
            "text": "Discuss short-term role but emphasize CBT-I for lasting improvement; avoid long-term use",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Medication has role short-term but CBT-I provides durable improvement without dependence.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Refer to psychiatrist for prescription",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Medication has role short-term but CBT-I provides durable improvement without dependence.",
              "keyIndicators": [],
              "commonMistake": "Refer to psychiatrist for prescription"
            }
          },
          {
            "id": "d",
            "text": "Pills are fine long-term",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Medication has role short-term but CBT-I provides durable improvement without dependence.",
              "keyIndicators": [],
              "commonMistake": "Pills are fine long-term"
            }
          }
        ],
        "rationale": "Medication has role short-term but CBT-I provides durable improvement without dependence."
      }
    ]
  },
  {
    "id": "case26",
    "title": "Overwhelming Clutter and Distress",
    "category": "OCD-Related",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Hoarding Disorder",
      "code": "F42.3"
    },
    "diagnosis": {
      "name": "Hoarding Disorder",
      "code": "F42.3"
    },
    "differentialOptions": [
      {
        "id": "hoarding",
        "name": "Hoarding Disorder",
        "isCorrect": true
      },
      {
        "id": "ocd",
        "name": "OCD with hoarding symptoms",
        "isCorrect": false
      },
      {
        "id": "mdd",
        "name": "MDD with self-neglect",
        "isCorrect": false
      },
      {
        "id": "dementia",
        "name": "Early dementia",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Eleanor, 71, White female retired librarian. Adult children mandated treatment after fire department cited home as hazard. Pathways blocked, bathroom unusable, sleeps in chair. Eleanor defensive: \"I know where everything is.\" Collecting books, magazines, newspapers for 30+ years.",
      "session1": "Describes emotional attachment to items: \"Each one has meaning.\" Distressed at thought of discarding. Brings clippings to session as \"gifts.\" Acknowledges embarrassment - hasn't had visitors in 10 years. Health declining, limited mobility makes managing impossible.",
      "session2": "Children threatening guardianship if no progress. Eleanor tearful: \"They don't understand.\" Admits sometimes can't find important things, missed medical appointments due to lost paperwork. Fire hazard worries her but \"can't just throw everything away.\""
    },
    "diagnosticRationale": "Hoarding Disorder: difficulty discarding, perceived need to save, clutter compromises living space, distress/impairment. Not OCD (hoarding not related to obsessions). Not depression self-neglect (active acquisition, attachment to items). Late-life onset less common but occurs.",
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "Eleanor says children \"don't understand.\" BEST response?",
        "options": [
          {
            "id": "a",
            "text": "They're trying to help",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Alliance building through validation. Understanding her attachment is key to treatment.",
              "keyIndicators": [],
              "commonMistake": "They're trying to help"
            }
          },
          {
            "id": "b",
            "text": "Validate her experience; explore what she wishes they understood",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Alliance building through validation. Understanding her attachment is key to treatment.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Focus on the hoarding, not family conflict",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Alliance building through validation. Understanding her attachment is key to treatment.",
              "keyIndicators": [],
              "commonMistake": "Focus on the hoarding, not family conflict"
            }
          },
          {
            "id": "d",
            "text": "Agree children are being unreasonable",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Alliance building through validation. Understanding her attachment is key to treatment.",
              "keyIndicators": [],
              "commonMistake": "Agree children are being unreasonable"
            }
          }
        ],
        "rationale": "Alliance building through validation. Understanding her attachment is key to treatment."
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "For Hoarding Disorder, treatment typically involves?",
        "options": [
          {
            "id": "a",
            "text": "Forced cleanout to motivate change",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Specialized CBT for hoarding. Forced cleanouts typically fail and damage alliance.",
              "keyIndicators": [],
              "commonMistake": "Forced cleanout to motivate change"
            }
          },
          {
            "id": "b",
            "text": "CBT addressing beliefs about possessions, gradual sorting, decision-making skills",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Specialized CBT for hoarding. Forced cleanouts typically fail and damage alliance.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Insight into childhood origins",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Specialized CBT for hoarding. Forced cleanouts typically fail and damage alliance.",
              "keyIndicators": [],
              "commonMistake": "Insight into childhood origins"
            }
          },
          {
            "id": "d",
            "text": "Medication as primary treatment",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Specialized CBT for hoarding. Forced cleanouts typically fail and damage alliance.",
              "keyIndicators": [],
              "commonMistake": "Medication as primary treatment"
            }
          }
        ],
        "rationale": "Specialized CBT for hoarding. Forced cleanouts typically fail and damage alliance."
      },
      {
        "id": "q3",
        "domain": "ethics",
        "question": "Fire hazard presents safety concerns. Counselor's responsibility includes?",
        "options": [
          {
            "id": "a",
            "text": "Report to Adult Protective Services immediately",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Complex ethical balance. Assess capacity, collaborate on safety, APS if indicated.",
              "keyIndicators": [],
              "commonMistake": "Report to Adult Protective Services immediately"
            }
          },
          {
            "id": "b",
            "text": "Assess capacity and self-neglect; balance autonomy with safety; collaborate on harm reduction",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Complex ethical balance. Assess capacity, collaborate on safety, APS if indicated.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Safety is family's responsibility",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Complex ethical balance. Assess capacity, collaborate on safety, APS if indicated.",
              "keyIndicators": [],
              "commonMistake": "Safety is family's responsibility"
            }
          },
          {
            "id": "d",
            "text": "Cannot treat until environment is safe",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Complex ethical balance. Assess capacity, collaborate on safety, APS if indicated.",
              "keyIndicators": [],
              "commonMistake": "Cannot treat until environment is safe"
            }
          }
        ],
        "rationale": "Complex ethical balance. Assess capacity, collaborate on safety, APS if indicated."
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Eleanor brings clippings as \"gifts.\" This should be understood as?",
        "options": [
          {
            "id": "a",
            "text": "Boundary violation to address firmly",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Gifts reflect relationship she has with objects. Opportunity to understand meaning and build alliance.",
              "keyIndicators": [],
              "commonMistake": "Boundary violation to address firmly"
            }
          },
          {
            "id": "b",
            "text": "Attempt at connection reflecting emotional attachment to objects; therapeutic opportunity",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Gifts reflect relationship she has with objects. Opportunity to understand meaning and build alliance.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Sign treatment isn't working",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Gifts reflect relationship she has with objects. Opportunity to understand meaning and build alliance.",
              "keyIndicators": [],
              "commonMistake": "Sign treatment isn't working"
            }
          },
          {
            "id": "d",
            "text": "Ignore to avoid reinforcing",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Gifts reflect relationship she has with objects. Opportunity to understand meaning and build alliance.",
              "keyIndicators": [],
              "commonMistake": "Ignore to avoid reinforcing"
            }
          }
        ],
        "rationale": "Gifts reflect relationship she has with objects. Opportunity to understand meaning and build alliance."
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Eleanor's attachment to items \"each with meaning\" reflects?",
        "options": [
          {
            "id": "a",
            "text": "Cognitive distortion to challenge",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Emotional attachment to objects is core to hoarding. Understanding this guides treatment.",
              "keyIndicators": [],
              "commonMistake": "Cognitive distortion to challenge"
            }
          },
          {
            "id": "b",
            "text": "Core feature: objects carry emotional significance, identity, or perceived utility",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Emotional attachment to objects is core to hoarding. Understanding this guides treatment.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Manipulation to avoid discarding",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Emotional attachment to objects is core to hoarding. Understanding this guides treatment.",
              "keyIndicators": [],
              "commonMistake": "Manipulation to avoid discarding"
            }
          },
          {
            "id": "d",
            "text": "Early dementia symptom",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Emotional attachment to objects is core to hoarding. Understanding this guides treatment.",
              "keyIndicators": [],
              "commonMistake": "Early dementia symptom"
            }
          }
        ],
        "rationale": "Emotional attachment to objects is core to hoarding. Understanding this guides treatment."
      }
    ]
  },
  {
    "id": "case27",
    "title": "Difficulty Making Decisions Alone",
    "category": "Personality",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Dependent Personality Disorder",
      "code": "F60.7"
    },
    "diagnosis": {
      "name": "Dependent Personality Disorder",
      "code": "F60.7"
    },
    "differentialOptions": [
      {
        "id": "dpd",
        "name": "Dependent Personality Disorder",
        "isCorrect": true
      },
      {
        "id": "avoidant",
        "name": "Avoidant Personality Disorder",
        "isCorrect": false
      },
      {
        "id": "mdd",
        "name": "MDD with dependent features",
        "isCorrect": false
      },
      {
        "id": "gad",
        "name": "GAD",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Grace, 35, White female administrative assistant. Seeking help after husband asked for divorce. \"I don't know how to do anything without him.\" Married at 21, husband made all major decisions. Describes self as \"hopeless on my own.\"",
      "session1": "Pattern across life: parents decided college, major, career. Married man who \"knew what he wanted.\" Avoids responsibility, fears making wrong choices. Tolerates critical treatment: \"At least someone is there.\" Few friends - devoted all time to husband.",
      "session2": "Asks therapist what she should do repeatedly. Distressed when encouraged to consider options herself: \"But what do YOU think?\" Mentions ex-boyfriend from before marriage was \"controlling\" but \"at least I felt secure.\""
    },
    "diagnosticRationale": "DPD: needs others to assume responsibility, difficulty making decisions, difficulty expressing disagreement, uncomfortable alone, urgently seeks new relationship when one ends. Not Avoidant (seeks relationships vs. avoids). Pattern predates and extends beyond current relationship.",
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "Grace repeatedly asks \"What do YOU think I should do?\" BEST response?",
        "options": [
          {
            "id": "a",
            "text": "Provide guidance since she needs support",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Balance: don't reinforce dependence but don't be withholding. Build capacity with support.",
              "keyIndicators": [],
              "commonMistake": "Provide guidance since she needs support"
            }
          },
          {
            "id": "b",
            "text": "Gently explore the question; encourage her own thinking while providing support",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Balance: don't reinforce dependence but don't be withholding. Build capacity with support.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Refuse to answer to build independence",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Balance: don't reinforce dependence but don't be withholding. Build capacity with support.",
              "keyIndicators": [],
              "commonMistake": "Refuse to answer to build independence"
            }
          },
          {
            "id": "d",
            "text": "Interpret as resistance",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Balance: don't reinforce dependence but don't be withholding. Build capacity with support.",
              "keyIndicators": [],
              "commonMistake": "Interpret as resistance"
            }
          }
        ],
        "rationale": "Balance: don't reinforce dependence but don't be withholding. Build capacity with support."
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "Grace tolerated critical treatment \"at least someone is there.\" This indicates risk for?",
        "options": [
          {
            "id": "a",
            "text": "Treatment non-compliance",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "DPD vulnerability to mistreatment to maintain relationships. Safety consideration.",
              "keyIndicators": [],
              "commonMistake": "Treatment non-compliance"
            }
          },
          {
            "id": "b",
            "text": "Vulnerability to exploitative or abusive relationships",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "DPD vulnerability to mistreatment to maintain relationships. Safety consideration.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Masochistic personality",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "DPD vulnerability to mistreatment to maintain relationships. Safety consideration.",
              "keyIndicators": [],
              "commonMistake": "Masochistic personality"
            }
          },
          {
            "id": "d",
            "text": "Low self-esteem only",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "DPD vulnerability to mistreatment to maintain relationships. Safety consideration.",
              "keyIndicators": [],
              "commonMistake": "Low self-esteem only"
            }
          }
        ],
        "rationale": "DPD vulnerability to mistreatment to maintain relationships. Safety consideration."
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "Primary treatment goal for DPD is?",
        "options": [
          {
            "id": "a",
            "text": "Total independence",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Goal isn't isolation but balanced autonomy. Healthy interdependence, not dependence or isolation.",
              "keyIndicators": [],
              "commonMistake": "Total independence"
            }
          },
          {
            "id": "b",
            "text": "Increasing self-efficacy and autonomous functioning while maintaining healthy connections",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Goal isn't isolation but balanced autonomy. Healthy interdependence, not dependence or isolation.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Avoiding all relationships",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Goal isn't isolation but balanced autonomy. Healthy interdependence, not dependence or isolation.",
              "keyIndicators": [],
              "commonMistake": "Avoiding all relationships"
            }
          },
          {
            "id": "d",
            "text": "Finding new supportive partner",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Goal isn't isolation but balanced autonomy. Healthy interdependence, not dependence or isolation.",
              "keyIndicators": [],
              "commonMistake": "Finding new supportive partner"
            }
          }
        ],
        "rationale": "Goal isn't isolation but balanced autonomy. Healthy interdependence, not dependence or isolation."
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "Grace says she's \"hopeless on my own.\" Therapeutically address by?",
        "options": [
          {
            "id": "a",
            "text": "Challenge as cognitive distortion",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Graduated autonomy building. Small successes create evidence against \"hopeless\" belief.",
              "keyIndicators": [],
              "commonMistake": "Challenge as cognitive distortion"
            }
          },
          {
            "id": "b",
            "text": "Explore origins; gradually build experiences of competence through small decisions",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Graduated autonomy building. Small successes create evidence against \"hopeless\" belief.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Reassure she's capable",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Graduated autonomy building. Small successes create evidence against \"hopeless\" belief.",
              "keyIndicators": [],
              "commonMistake": "Reassure she's capable"
            }
          },
          {
            "id": "d",
            "text": "Focus on divorce adjustment first",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Graduated autonomy building. Small successes create evidence against \"hopeless\" belief.",
              "keyIndicators": [],
              "commonMistake": "Focus on divorce adjustment first"
            }
          }
        ],
        "rationale": "Graduated autonomy building. Small successes create evidence against \"hopeless\" belief."
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "DPD differs from Avoidant PD primarily in?",
        "options": [
          {
            "id": "a",
            "text": "Severity",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Key distinction: DPD seeks/clings to relationships; Avoidant fears/avoids them.",
              "keyIndicators": [],
              "commonMistake": "Severity"
            }
          },
          {
            "id": "b",
            "text": "DPD seeks relationships for care; Avoidant avoids relationships fearing rejection",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Key distinction: DPD seeks/clings to relationships; Avoidant fears/avoids them.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Treatment response",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Key distinction: DPD seeks/clings to relationships; Avoidant fears/avoids them.",
              "keyIndicators": [],
              "commonMistake": "Treatment response"
            }
          },
          {
            "id": "d",
            "text": "Presence of anxiety",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Key distinction: DPD seeks/clings to relationships; Avoidant fears/avoids them.",
              "keyIndicators": [],
              "commonMistake": "Presence of anxiety"
            }
          }
        ],
        "rationale": "Key distinction: DPD seeks/clings to relationships; Avoidant fears/avoids them."
      }
    ]
  },
  {
    "id": "case28",
    "title": "Extreme Fear Response to Dogs",
    "category": "Anxiety",
    "difficulty": "easy",
    "primaryDiagnosis": {
      "name": "Specific Phobia, Animal Type",
      "code": "F40.218"
    },
    "diagnosis": {
      "name": "Specific Phobia, Animal Type",
      "code": "F40.218"
    },
    "differentialOptions": [
      {
        "id": "specific",
        "name": "Specific Phobia",
        "isCorrect": true
      },
      {
        "id": "gad",
        "name": "GAD",
        "isCorrect": false
      },
      {
        "id": "panic",
        "name": "Panic Disorder",
        "isCorrect": false
      },
      {
        "id": "ptsd",
        "name": "PTSD (dog attack)",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Brian, 31, White male accountant. \"Terrified of dogs\" since childhood. Avoids parks, neighbors' yards, declines invitations to homes with dogs. Panic when sees dog: racing heart, sweating, urge to flee. Recently promoted but new office allows dogs.",
      "session1": "Recalls being chased by loose dog age 6 but not bitten. Knows fear is excessive but can't control. Avoidance increasingly limiting - turned down relationships, won't visit sister with dog. Embarrassed: \"Grown man afraid of dogs.\" Job at risk if can't manage.",
      "session2": "Completed fear hierarchy - seeing photos causes mild anxiety, hearing barking moderate, proximity to small leashed dog severe. Motivated by job. Asks how long treatment takes and if there's medication alternative."
    },
    "diagnosticRationale": "Specific Phobia: marked fear of specific object, immediate anxiety response, avoidance, out of proportion, 6+ months, impairment. Not PTSD (doesn't meet full criteria - no traumatic event per criterion A). Not Panic Disorder (cued, not unexpected).",
    "questions": [
      {
        "id": "q1",
        "domain": "treatment",
        "question": "For Specific Phobia, FIRST-LINE treatment is?",
        "options": [
          {
            "id": "a",
            "text": "Anti-anxiety medication",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Exposure therapy has strongest evidence for specific phobias. Often rapid improvement.",
              "keyIndicators": [],
              "commonMistake": "Anti-anxiety medication"
            }
          },
          {
            "id": "b",
            "text": "Exposure therapy (in vivo, graduated)",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Exposure therapy has strongest evidence for specific phobias. Often rapid improvement.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Cognitive restructuring",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Exposure therapy has strongest evidence for specific phobias. Often rapid improvement.",
              "keyIndicators": [],
              "commonMistake": "Cognitive restructuring"
            }
          },
          {
            "id": "d",
            "text": "Insight into childhood origin",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Exposure therapy has strongest evidence for specific phobias. Often rapid improvement.",
              "keyIndicators": [],
              "commonMistake": "Insight into childhood origin"
            }
          }
        ],
        "rationale": "Exposure therapy has strongest evidence for specific phobias. Often rapid improvement."
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "Brian asks if there's a medication alternative. BEST response?",
        "options": [
          {
            "id": "a",
            "text": "No medication for phobias",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Exposure superior. Medication may facilitate exposure but doesn't replace it.",
              "keyIndicators": [],
              "commonMistake": "No medication for phobias"
            }
          },
          {
            "id": "b",
            "text": "Exposure is most effective; medication has limited role and doesn't produce lasting change",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Exposure superior. Medication may facilitate exposure but doesn't replace it.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Refer to psychiatrist for benzodiazepine",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Exposure superior. Medication may facilitate exposure but doesn't replace it.",
              "keyIndicators": [],
              "commonMistake": "Refer to psychiatrist for benzodiazepine"
            }
          },
          {
            "id": "d",
            "text": "SSRIs work equally well",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Exposure superior. Medication may facilitate exposure but doesn't replace it.",
              "keyIndicators": [],
              "commonMistake": "SSRIs work equally well"
            }
          }
        ],
        "rationale": "Exposure superior. Medication may facilitate exposure but doesn't replace it."
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "Brian is embarrassed about his fear. BEST way to address?",
        "options": [
          {
            "id": "a",
            "text": "Lots of people fear dogs",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Reduce shame while building hope. Embarrassment can delay treatment-seeking.",
              "keyIndicators": [],
              "commonMistake": "Lots of people fear dogs"
            }
          },
          {
            "id": "b",
            "text": "Normalize phobias while validating impact; emphasize treatability",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Reduce shame while building hope. Embarrassment can delay treatment-seeking.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Focus on treatment not feelings",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Reduce shame while building hope. Embarrassment can delay treatment-seeking.",
              "keyIndicators": [],
              "commonMistake": "Focus on treatment not feelings"
            }
          },
          {
            "id": "d",
            "text": "Explore childhood more deeply",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Reduce shame while building hope. Embarrassment can delay treatment-seeking.",
              "keyIndicators": [],
              "commonMistake": "Explore childhood more deeply"
            }
          }
        ],
        "rationale": "Reduce shame while building hope. Embarrassment can delay treatment-seeking."
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Fear hierarchy completed. Next step is?",
        "options": [
          {
            "id": "a",
            "text": "Start with most feared situation",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Graduated exposure: start low, build mastery, progress up hierarchy with therapist support.",
              "keyIndicators": [],
              "commonMistake": "Start with most feared situation"
            }
          },
          {
            "id": "b",
            "text": "Begin graduated exposure starting with lowest items while teaching coping",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Graduated exposure: start low, build mastery, progress up hierarchy with therapist support.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Continue assessment",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Graduated exposure: start low, build mastery, progress up hierarchy with therapist support.",
              "keyIndicators": [],
              "commonMistake": "Continue assessment"
            }
          },
          {
            "id": "d",
            "text": "Assign homework to practice alone",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Graduated exposure: start low, build mastery, progress up hierarchy with therapist support.",
              "keyIndicators": [],
              "commonMistake": "Assign homework to practice alone"
            }
          }
        ],
        "rationale": "Graduated exposure: start low, build mastery, progress up hierarchy with therapist support."
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Brian's childhood dog incident doesn't meet PTSD criteria because?",
        "options": [
          {
            "id": "a",
            "text": "He was too young",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "PTSD requires exposure to actual/threatened death, serious injury, or sexual violence.",
              "keyIndicators": [],
              "commonMistake": "He was too young"
            }
          },
          {
            "id": "b",
            "text": "Being chased without injury doesn't meet Criterion A trauma threshold",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "PTSD requires exposure to actual/threatened death, serious injury, or sexual violence.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Too much time has passed",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "PTSD requires exposure to actual/threatened death, serious injury, or sexual violence.",
              "keyIndicators": [],
              "commonMistake": "Too much time has passed"
            }
          },
          {
            "id": "d",
            "text": "He doesn't have nightmares",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "PTSD requires exposure to actual/threatened death, serious injury, or sexual violence.",
              "keyIndicators": [],
              "commonMistake": "He doesn't have nightmares"
            }
          }
        ],
        "rationale": "PTSD requires exposure to actual/threatened death, serious injury, or sexual violence."
      }
    ]
  },
  {
    "id": "case29",
    "title": "Child School Refusal and Clinginess",
    "category": "Anxiety",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Separation Anxiety Disorder",
      "code": "F93.0"
    },
    "diagnosis": {
      "name": "Separation Anxiety Disorder",
      "code": "F93.0"
    },
    "differentialOptions": [
      {
        "id": "sad",
        "name": "Separation Anxiety Disorder",
        "isCorrect": true
      },
      {
        "id": "gad",
        "name": "GAD (child)",
        "isCorrect": false
      },
      {
        "id": "social",
        "name": "Social Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "school",
        "name": "School Phobia (bullying)",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Parents of Mia, 7, White female. School refusal 6 weeks, started after summer break. Cries, clings to mother at drop-off. Somatic complaints: stomachaches, headaches (pediatrician cleared). Sleeps in parents' bed, follows mother room-to-room.",
      "session1": "Mia quiet initially, then engaged. Draws pictures of family. Worries \"something bad will happen to mommy.\" Asks repeatedly when mother will return. Parents report she calls/texts constantly if apart. Won't go to birthday parties or sleepovers.",
      "session2": "Parents inconsistent: father pushes attendance, mother sometimes keeps her home \"when she's really upset.\" Mia overhead parents arguing about her. School reports she's fine once mother leaves but mornings are \"battles.\""
    },
    "diagnosticRationale": "Separation Anxiety Disorder: excessive fear about separation from attachment figures, worry about harm to them, reluctance to separate, somatic symptoms, 4+ weeks in children. Not Social Anxiety (fear is separation, not social judgment). Not GAD (worry specific to separation).",
    "questions": [
      {
        "id": "q1",
        "domain": "treatment",
        "question": "Parents are inconsistent - mother sometimes keeps Mia home. Address by?",
        "options": [
          {
            "id": "a",
            "text": "Mother is reinforcing anxiety and must stop",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Parental accommodation maintains anxiety. Consistent approach essential. Non-blaming psychoeducation.",
              "keyIndicators": [],
              "commonMistake": "Mother is reinforcing anxiety and must stop"
            }
          },
          {
            "id": "b",
            "text": "Psychoeducation about accommodation cycle; develop consistent plan both parents follow",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Parental accommodation maintains anxiety. Consistent approach essential. Non-blaming psychoeducation.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Father's approach is correct",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Parental accommodation maintains anxiety. Consistent approach essential. Non-blaming psychoeducation.",
              "keyIndicators": [],
              "commonMistake": "Father's approach is correct"
            }
          },
          {
            "id": "d",
            "text": "Focus on Mia, not parents",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Parental accommodation maintains anxiety. Consistent approach essential. Non-blaming psychoeducation.",
              "keyIndicators": [],
              "commonMistake": "Focus on Mia, not parents"
            }
          }
        ],
        "rationale": "Parental accommodation maintains anxiety. Consistent approach essential. Non-blaming psychoeducation."
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "For childhood Separation Anxiety, treatment typically includes?",
        "options": [
          {
            "id": "a",
            "text": "Play therapy exploring attachment",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "CBT with exposure is first-line. Parent involvement and school collaboration essential.",
              "keyIndicators": [],
              "commonMistake": "Play therapy exploring attachment"
            }
          },
          {
            "id": "b",
            "text": "CBT with graduated exposure, parent training, and school coordination",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "CBT with exposure is first-line. Parent involvement and school collaboration essential.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Medication first",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "CBT with exposure is first-line. Parent involvement and school collaboration essential.",
              "keyIndicators": [],
              "commonMistake": "Medication first"
            }
          },
          {
            "id": "d",
            "text": "Allow homeschooling temporarily",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "CBT with exposure is first-line. Parent involvement and school collaboration essential.",
              "keyIndicators": [],
              "commonMistake": "Allow homeschooling temporarily"
            }
          }
        ],
        "rationale": "CBT with exposure is first-line. Parent involvement and school collaboration essential."
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "Mia asks repeatedly when mother will return. BEST response?",
        "options": [
          {
            "id": "a",
            "text": "Reassure repeatedly",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Limited reassurance with redirection. Excessive reassurance reinforces anxiety.",
              "keyIndicators": [],
              "commonMistake": "Reassure repeatedly"
            }
          },
          {
            "id": "b",
            "text": "Validate feeling, provide brief reassurance once, redirect to activity",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Limited reassurance with redirection. Excessive reassurance reinforces anxiety.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Ignore to extinguish behavior",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Limited reassurance with redirection. Excessive reassurance reinforces anxiety.",
              "keyIndicators": [],
              "commonMistake": "Ignore to extinguish behavior"
            }
          },
          {
            "id": "d",
            "text": "Explore what she's worried about each time",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Limited reassurance with redirection. Excessive reassurance reinforces anxiety.",
              "keyIndicators": [],
              "commonMistake": "Explore what she's worried about each time"
            }
          }
        ],
        "rationale": "Limited reassurance with redirection. Excessive reassurance reinforces anxiety."
      },
      {
        "id": "q4",
        "domain": "intake",
        "question": "Mia is \"fine once mother leaves.\" This information suggests?",
        "options": [
          {
            "id": "a",
            "text": "She's manipulating parents",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Anticipatory anxiety common in SAD. Ability to cope post-separation is encouraging for treatment.",
              "keyIndicators": [],
              "commonMistake": "She's manipulating parents"
            }
          },
          {
            "id": "b",
            "text": "Anxiety is anticipatory; once separation occurs, she copes - good prognostic sign",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Anticipatory anxiety common in SAD. Ability to cope post-separation is encouraging for treatment.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "School is not the problem",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Anticipatory anxiety common in SAD. Ability to cope post-separation is encouraging for treatment.",
              "keyIndicators": [],
              "commonMistake": "School is not the problem"
            }
          },
          {
            "id": "d",
            "text": "Diagnosis is incorrect",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Anticipatory anxiety common in SAD. Ability to cope post-separation is encouraging for treatment.",
              "keyIndicators": [],
              "commonMistake": "Diagnosis is incorrect"
            }
          }
        ],
        "rationale": "Anticipatory anxiety common in SAD. Ability to cope post-separation is encouraging for treatment."
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "Parents argue about Mia, and she overheard. This should be addressed by?",
        "options": [
          {
            "id": "a",
            "text": "Family therapy for marital issues",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Parental conflict about child can increase anxiety. United front reduces triangulation.",
              "keyIndicators": [],
              "commonMistake": "Family therapy for marital issues"
            }
          },
          {
            "id": "b",
            "text": "Helping parents present united approach; Mia may feel responsible for conflict",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Parental conflict about child can increase anxiety. United front reduces triangulation.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Focus on Mia's anxiety, not parents' conflict",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Parental conflict about child can increase anxiety. United front reduces triangulation.",
              "keyIndicators": [],
              "commonMistake": "Focus on Mia's anxiety, not parents' conflict"
            }
          },
          {
            "id": "d",
            "text": "Refer parents for couples therapy",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Parental conflict about child can increase anxiety. United front reduces triangulation.",
              "keyIndicators": [],
              "commonMistake": "Refer parents for couples therapy"
            }
          }
        ],
        "rationale": "Parental conflict about child can increase anxiety. United front reduces triangulation."
      }
    ]
  },
  {
    "id": "case30",
    "title": "Mood Episodes with Persistent Psychosis",
    "category": "Psychotic",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Schizoaffective Disorder, Bipolar Type",
      "code": "F25.0"
    },
    "diagnosis": {
      "name": "Schizoaffective Disorder, Bipolar Type",
      "code": "F25.0"
    },
    "differentialOptions": [
      {
        "id": "schizoaffective",
        "name": "Schizoaffective Disorder",
        "isCorrect": true
      },
      {
        "id": "bipolar",
        "name": "Bipolar I with Psychotic Features",
        "isCorrect": false
      },
      {
        "id": "schizophrenia",
        "name": "Schizophrenia",
        "isCorrect": false
      },
      {
        "id": "mdd",
        "name": "MDD with Psychotic Features",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Carmen, 34, Latina female, part-time employed. Long psychiatric history. Currently stable on clozapine and lithium. Referred for therapy by psychiatrist. Reports hearing voices since age 19, mood episodes (manic and depressive) throughout 20s.",
      "session1": "Describes history: first hospitalization at 20 (manic with delusions), multiple since. Voices persist even when mood stable - commenting, sometimes critical. When manic, voices become commanding, grandiose delusions emerge. When depressed, voices more hostile.",
      "session2": "Frustrated by limitations: \"I have two illnesses fighting each other.\" Lost career as teacher, relationships ended. Wants to work more but fears relapse. Compliant with medication but asks \"Will I ever be normal?\""
    },
    "diagnosticRationale": "Schizoaffective: psychotic symptoms (hallucinations) for 2+ weeks WITHOUT mood symptoms (distinguishes from Bipolar/MDD with psychotic features), PLUS mood episodes present majority of total illness duration (distinguishes from Schizophrenia).",
    "questions": [
      {
        "id": "q1",
        "domain": "core",
        "question": "Key feature distinguishing Schizoaffective from Bipolar with Psychotic Features?",
        "options": [
          {
            "id": "a",
            "text": "Severity of symptoms",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Key criterion: psychosis independent of mood episodes. In Bipolar, psychosis only during episodes.",
              "keyIndicators": [],
              "commonMistake": "Severity of symptoms"
            }
          },
          {
            "id": "b",
            "text": "Psychotic symptoms present for 2+ weeks in absence of mood episode",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Key criterion: psychosis independent of mood episodes. In Bipolar, psychosis only during episodes.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Response to medication",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Key criterion: psychosis independent of mood episodes. In Bipolar, psychosis only during episodes.",
              "keyIndicators": [],
              "commonMistake": "Response to medication"
            }
          },
          {
            "id": "d",
            "text": "Type of hallucinations",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Key criterion: psychosis independent of mood episodes. In Bipolar, psychosis only during episodes.",
              "keyIndicators": [],
              "commonMistake": "Type of hallucinations"
            }
          }
        ],
        "rationale": "Key criterion: psychosis independent of mood episodes. In Bipolar, psychosis only during episodes."
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "Carmen asks \"Will I ever be normal?\" BEST response?",
        "options": [
          {
            "id": "a",
            "text": "Define \"normal\"",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Validate loss while instilling hope. Recovery model: meaningful life despite symptoms.",
              "keyIndicators": [],
              "commonMistake": "Define \"normal\""
            }
          },
          {
            "id": "b",
            "text": "Validate grief about illness; explore what meaningful life looks like while being honest about chronicity",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Validate loss while instilling hope. Recovery model: meaningful life despite symptoms.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Focus on stability not normal",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Validate loss while instilling hope. Recovery model: meaningful life despite symptoms.",
              "keyIndicators": [],
              "commonMistake": "Focus on stability not normal"
            }
          },
          {
            "id": "d",
            "text": "Many people recover fully",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Validate loss while instilling hope. Recovery model: meaningful life despite symptoms.",
              "keyIndicators": [],
              "commonMistake": "Many people recover fully"
            }
          }
        ],
        "rationale": "Validate loss while instilling hope. Recovery model: meaningful life despite symptoms."
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "Carmen wants to work more but fears relapse. MOST helpful approach?",
        "options": [
          {
            "id": "a",
            "text": "Advise against working more",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Supported employment effective for SMI. Relapse prevention planning empowers gradual progress.",
              "keyIndicators": [],
              "commonMistake": "Advise against working more"
            }
          },
          {
            "id": "b",
            "text": "Develop relapse prevention plan and explore supported employment options",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Supported employment effective for SMI. Relapse prevention planning empowers gradual progress.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Wait until fully stable",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Supported employment effective for SMI. Relapse prevention planning empowers gradual progress.",
              "keyIndicators": [],
              "commonMistake": "Wait until fully stable"
            }
          },
          {
            "id": "d",
            "text": "Full-time work goal",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Supported employment effective for SMI. Relapse prevention planning empowers gradual progress.",
              "keyIndicators": [],
              "commonMistake": "Full-time work goal"
            }
          }
        ],
        "rationale": "Supported employment effective for SMI. Relapse prevention planning empowers gradual progress."
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "For Schizoaffective Disorder, psychotherapy role includes?",
        "options": [
          {
            "id": "a",
            "text": "Psychotherapy has no role - medication only",
            "isCorrect": false,
            "weight": -2,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Psychotherapy adjunct to medication: CBTp, illness management, recovery focus, social support.",
              "keyIndicators": [],
              "commonMistake": "Psychotherapy has no role - medication only"
            }
          },
          {
            "id": "b",
            "text": "Psychoeducation, CBT for psychosis, relapse prevention, and recovery-oriented support",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Psychotherapy adjunct to medication: CBTp, illness management, recovery focus, social support.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Insight-oriented exploration of symptoms",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Psychotherapy adjunct to medication: CBTp, illness management, recovery focus, social support.",
              "keyIndicators": [],
              "commonMistake": "Insight-oriented exploration of symptoms"
            }
          },
          {
            "id": "d",
            "text": "Family therapy only",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Psychotherapy adjunct to medication: CBTp, illness management, recovery focus, social support.",
              "keyIndicators": [],
              "commonMistake": "Family therapy only"
            }
          }
        ],
        "rationale": "Psychotherapy adjunct to medication: CBTp, illness management, recovery focus, social support."
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "Carmen's voices persist even when stable. This should be understood as?",
        "options": [
          {
            "id": "a",
            "text": "Treatment failure",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Persistent voices common. CBT for psychosis helps change relationship with voices.",
              "keyIndicators": [],
              "commonMistake": "Treatment failure"
            }
          },
          {
            "id": "b",
            "text": "Residual symptoms; therapy can help her cope with and respond differently to voices",
            "isCorrect": true,
            "weight": 3,
            "explanation": {
              "approach": "Evidence-based best practice",
              "rationale": "Persistent voices common. CBT for psychosis helps change relationship with voices.",
              "keyIndicators": [],
              "commonMistake": ""
            }
          },
          {
            "id": "c",
            "text": "Need for medication change",
            "isCorrect": false,
            "weight": 0,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Persistent voices common. CBT for psychosis helps change relationship with voices.",
              "keyIndicators": [],
              "commonMistake": "Need for medication change"
            }
          },
          {
            "id": "d",
            "text": "Evidence against schizoaffective diagnosis",
            "isCorrect": false,
            "weight": -1,
            "explanation": {
              "approach": "Common but suboptimal approach",
              "rationale": "Persistent voices common. CBT for psychosis helps change relationship with voices.",
              "keyIndicators": [],
              "commonMistake": "Evidence against schizoaffective diagnosis"
            }
          }
        ],
        "rationale": "Persistent voices common. CBT for psychosis helps change relationship with voices."
      }
    ]
  }
];

module.exports = { CASES_21_30 };
