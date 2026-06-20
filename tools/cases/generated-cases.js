const GENERATED_CASES = [
  {
    "id": "ncmhce-G045",
    "title": "Faith, Fatigue, and the Weight of Years",
    "category": "Depressive",
    "difficulty": "medium",
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
        "id": "d1",
        "name": "Major Depressive Disorder, Moderate",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Persistent Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Adjustment Disorder with Depressed Mood",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Major Neurocognitive Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Walter, a 68-year-old African American retired postal worker, arrives at his daughter's urging in a pressed but loosely fitting suit, sitting with rounded shoulders and offering only brief, guarded eye contact. He speaks slowly and softly, voicing distrust of clinics after past dismissive care, and reports six weeks of low mood, fatigue, and lost interest in church choir. 'I only came because my girl wouldn't let it go,' he says flatly, his affect constricted and weary.",
      "session1": "Walter's grooming is noticeably less kept this week, and his psychomotor movements are slowed as he describes early-morning waking, poor concentration, and weight loss. His voice tightens with emotion when he speaks of 'failing' his late wife, and he leans forward to insist, 'My pastor and my prayers ought to be enough for this,' questioning whether counseling respects his faith. He pauses often, eyes welling but unspilled, his tone shifting between defensiveness and quiet sorrow.",
      "session2": "Walter sits more openly today, hands folded, his affect sad but more reactive as he acknowledges recurrent depressive episodes since his wife's death two years ago. Speaking in a low, measured tone with longer pauses, he denies active suicidal intent but admits passive wishes that 'sometimes I wouldn't mind the Lord calling me home.' He nods slowly and agrees to involve his faith community as a support resource."
    },
    "diagnosticRationale": "He meets five-plus criteria over two weeks: depressed mood, anhedonia, insomnia, fatigue, guilt, poor concentration, and weight loss, with a prior episode, supporting recurrent Major Depressive Disorder, moderate severity.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "MDD recurrent criteria and episode specifiers"
      },
      {
        "id": "R2",
        "source": "Hays (Assessment)",
        "detail": "ADDRESSING framework and cultural mistrust"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Respecting client spirituality and values"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "What is the most appropriate way to build rapport given his stated mistrust of clinical care?",
        "evidenceRef": [
          "R2",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Name his prior negative care experiences directly and invite his terms for a respectful working relationship",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Validates mistrust and shares power",
            "explanation": {
              "approach": "Acknowledge ruptures and collaborate on trust",
              "rationale": "Cultural mistrust is realistic, not pathology",
              "keyIndicators": [
                "history of dismissive care",
                "expressed wariness"
              ],
              "commonMistake": "Treating mistrust as resistance to confront"
            }
          },
          {
            "id": "b",
            "text": "Reassure him that this clinic is different and that he should simply trust the process",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismisses legitimate concern",
            "explanation": {
              "approach": "Premature reassurance",
              "rationale": "Glosses over valid history",
              "keyIndicators": [
                "earned mistrust"
              ],
              "commonMistake": "Telling clients how to feel"
            }
          },
          {
            "id": "c",
            "text": "Proceed quickly with a standardized intake to demonstrate clinical competence and save him time",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Skips relational foundation",
            "explanation": {
              "approach": "Task focus over alliance",
              "rationale": "Efficiency cannot substitute for trust",
              "keyIndicators": [
                "fragile alliance"
              ],
              "commonMistake": "Rushing structure"
            }
          },
          {
            "id": "d",
            "text": "Suggest he may be more comfortable seeing a counselor who shares his racial background",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Deflects responsibility prematurely",
            "explanation": {
              "approach": "Premature referral",
              "rationale": "Abandons rather than adapts",
              "keyIndicators": [
                "client engaged here"
              ],
              "commonMistake": "Outsourcing cultural humility"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "He says prayer should heal him. How should the counselor respond to his faith?",
        "evidenceRef": [
          "R3",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Explain that counseling is evidence-based and faith alone rarely resolves clinical depression in older adults",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Devalues his worldview",
            "explanation": {
              "approach": "Dismissing spirituality",
              "rationale": "Erodes alliance and dignity",
              "keyIndicators": [
                "faith centrality"
              ],
              "commonMistake": "Positioning science against faith"
            }
          },
          {
            "id": "b",
            "text": "Affirm faith as a strength and frame counseling as a complement his pastor's support can reinforce",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Integrates spirituality respectfully",
            "explanation": {
              "approach": "Faith as ally to treatment",
              "rationale": "Aligns with values and ethics",
              "keyIndicators": [
                "choir",
                "pastor support"
              ],
              "commonMistake": "Forcing a faith-versus-therapy choice"
            }
          },
          {
            "id": "c",
            "text": "Avoid the topic of religion entirely to maintain professional neutrality during the assessment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Ignores key resource",
            "explanation": {
              "approach": "Excessive neutrality",
              "rationale": "Faith is clinically relevant here",
              "keyIndicators": [
                "spiritual coping"
              ],
              "commonMistake": "Treating faith as off-limits"
            }
          },
          {
            "id": "d",
            "text": "Agree that prayer is sufficient and propose ending counseling if his church feels adequate",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Abandons clinical duty",
            "explanation": {
              "approach": "Over-accommodation",
              "rationale": "Neglects depressive severity",
              "keyIndicators": [
                "passive ideation"
              ],
              "commonMistake": "Confusing respect with withdrawal"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature best distinguishes his presentation from a major neurocognitive disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "His concentration problems began with depressed mood and grief rather than progressive memory decline",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Mood-linked, not degenerative",
            "explanation": {
              "approach": "Trace symptom onset and course",
              "rationale": "Pseudodementia tracks with mood",
              "keyIndicators": [
                "recent onset",
                "grief context"
              ],
              "commonMistake": "Equating concentration loss with dementia"
            }
          },
          {
            "id": "b",
            "text": "He is older than sixty-five, which makes a neurocognitive disorder the more likely explanation",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ageist assumption",
            "explanation": {
              "approach": "Age stereotyping",
              "rationale": "Age alone is not diagnostic",
              "keyIndicators": [
                "affective symptoms"
              ],
              "commonMistake": "Defaulting to dementia in elders"
            }
          },
          {
            "id": "c",
            "text": "His weight loss is the only symptom that reliably separates depression from cognitive decline",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Overstates one sign",
            "explanation": {
              "approach": "Single-symptom focus",
              "rationale": "Weight loss is nonspecific",
              "keyIndicators": [
                "multiple criteria"
              ],
              "commonMistake": "Anchoring on one feature"
            }
          },
          {
            "id": "d",
            "text": "His ability to attend sessions rules out any cognitive impairment of clinical significance",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Faulty inference",
            "explanation": {
              "approach": "Overgeneralizing function",
              "rationale": "Attendance is not a cognitive screen",
              "keyIndicators": [
                "need for screening"
              ],
              "commonMistake": "Assuming function equals intact cognition"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Which initial treatment plan best fits his presentation and values?",
        "evidenceRef": [
          "R1",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Long-term psychodynamic therapy exploring unconscious childhood conflicts before addressing current depressive symptoms",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Mismatched and slow",
            "explanation": {
              "approach": "Insight-only delay",
              "rationale": "Defers symptom relief",
              "keyIndicators": [
                "active depression"
              ],
              "commonMistake": "Choosing depth over fit"
            }
          },
          {
            "id": "b",
            "text": "Behavioral activation with structured pleasant activities, integrating choir and faith-based supports he already values",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Evidence-based and culturally fit",
            "explanation": {
              "approach": "Behavioral activation plus supports",
              "rationale": "Targets anhedonia with his resources",
              "keyIndicators": [
                "lost choir interest",
                "faith ties"
              ],
              "commonMistake": "Ignoring existing supports"
            }
          },
          {
            "id": "c",
            "text": "Watchful waiting with no formal intervention until symptoms either worsen or resolve naturally",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Under-treats moderate MDD",
            "explanation": {
              "approach": "Passive monitoring",
              "rationale": "Risks deterioration",
              "keyIndicators": [
                "functional impairment"
              ],
              "commonMistake": "Delaying needed care"
            }
          },
          {
            "id": "d",
            "text": "Immediate inpatient hospitalization to stabilize mood given his age and reported weight loss",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Overly restrictive",
            "explanation": {
              "approach": "Excessive level of care",
              "rationale": "No acute risk warrants this",
              "keyIndicators": [
                "passive ideation only"
              ],
              "commonMistake": "Over-escalating care"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "His daughter requests detailed updates on his progress. What is the most ethical response?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Provide the updates since family involvement clearly benefits the depressed older client's recovery",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Breaches confidentiality",
            "explanation": {
              "approach": "Disclosure without consent",
              "rationale": "Violates client autonomy",
              "keyIndicators": [
                "competent adult client"
              ],
              "commonMistake": "Assuming family entitlement"
            }
          },
          {
            "id": "b",
            "text": "Decline all contact with the daughter to firmly protect the client's private clinical information",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Rigid and unhelpful",
            "explanation": {
              "approach": "Absolute refusal",
              "rationale": "Ignores possible consented role",
              "keyIndicators": [
                "client may want support"
              ],
              "commonMistake": "Confusing rigidity with ethics"
            }
          },
          {
            "id": "c",
            "text": "Discuss with the client whether and what he wishes shared, then document his informed consent",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Centers client autonomy",
            "explanation": {
              "approach": "Consent-driven disclosure",
              "rationale": "Respects self-determination",
              "keyIndicators": [
                "competent client",
                "documentation"
              ],
              "commonMistake": "Bypassing the client"
            }
          },
          {
            "id": "d",
            "text": "Share only positive information with the daughter to keep the family encouraged about treatment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Still a breach",
            "explanation": {
              "approach": "Selective disclosure",
              "rationale": "Partial breach is still a breach",
              "keyIndicators": [
                "no consent"
              ],
              "commonMistake": "Rationalizing 'harmless' sharing"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G046",
    "title": "The Worry That Will Not Rest",
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
        "id": "d1",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Panic Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Adjustment Disorder with Anxiety",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Social Anxiety Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Rosa, a 41-year-old Spanish-dominant Latina woman, arrives with her teenage son interpreting, perched at the edge of her chair with a tightly clasped purse and tense, fidgeting hands. Her speech is rapid and pressured in Spanish, her brow furrowed, as she reports eight months of constant worry about family, finances, and health that she cannot control or quiet. 'No puedo apagar mi mente,' she tells her son to relay, her voice trembling slightly.",
      "session1": "With a qualified interpreter present, Rosa appears neatly dressed but visibly fatigued, rubbing her neck and shoulders as she describes muscle tension, restlessness, irritability, fatigue, and trouble sleeping. Her tone softens with guilt when she admits, 'I always put my family first\u2014it feels selfish to be here for myself,' and she glances down, hesitating before each disclosure. Her affect is anxious and apologetic, eye contact intermittent.",
      "session2": "Rosa speaks more steadily this session, though her hands still pick at a tissue as she reports the worry spans many domains most days and denies discrete panic attacks. Her voice warms and her posture eases when she names familismo and her faith, saying, 'My family and God give me strength\u2014I want that respected here.' Her affect brightens momentarily before the worried tension returns."
    },
    "diagnosticRationale": "Excessive, uncontrollable worry across multiple domains for more than six months with restlessness, fatigue, irritability, muscle tension, and sleep disturbance meets criteria for Generalized Anxiety Disorder.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "GAD criteria and six-month duration"
      },
      {
        "id": "R2",
        "source": "ACA Code of Ethics",
        "detail": "Language access and competent interpreters"
      },
      {
        "id": "R3",
        "source": "Barlow PCT",
        "detail": "Worry exposure and cognitive strategies"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "What is the most appropriate way to handle language access in this case?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Continue using her teenage son as interpreter because he understands the family context best",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Inappropriate interpreter",
            "explanation": {
              "approach": "Family-member interpreting",
              "rationale": "Compromises privacy and accuracy",
              "keyIndicators": [
                "minor child interpreting"
              ],
              "commonMistake": "Convenience over competence"
            }
          },
          {
            "id": "b",
            "text": "Arrange a trained professional interpreter and provide materials in her preferred language",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Ensures access and accuracy",
            "explanation": {
              "approach": "Professional language access",
              "rationale": "Protects accuracy and dignity",
              "keyIndicators": [
                "Spanish-dominant"
              ],
              "commonMistake": "Relying on ad hoc interpreters"
            }
          },
          {
            "id": "c",
            "text": "Proceed in English slowly and ask her to clarify whenever she does not understand",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Inadequate access",
            "explanation": {
              "approach": "Burdening the client",
              "rationale": "Risks miscommunication",
              "keyIndicators": [
                "language barrier"
              ],
              "commonMistake": "Assuming partial English suffices"
            }
          },
          {
            "id": "d",
            "text": "Use a translation phone app during sessions to manage costs and scheduling efficiently",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Unreliable for clinical nuance",
            "explanation": {
              "approach": "Tool over trained interpreter",
              "rationale": "Apps miss clinical meaning",
              "keyIndicators": [
                "complex emotional content"
              ],
              "commonMistake": "Trusting apps for therapy"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "She feels guilty putting her own needs before family. How should the counselor respond?",
        "evidenceRef": [
          "R2",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Tell her she must prioritize herself first and set firm boundaries with her family",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Imposes values",
            "explanation": {
              "approach": "Value imposition",
              "rationale": "Ignores familismo",
              "keyIndicators": [
                "family-centered values"
              ],
              "commonMistake": "Pushing individualism"
            }
          },
          {
            "id": "b",
            "text": "Frame self-care as strengthening her capacity to care for the family she values",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Honors familismo",
            "explanation": {
              "approach": "Reframe within her values",
              "rationale": "Aligns care with culture",
              "keyIndicators": [
                "familismo",
                "caretaker role"
              ],
              "commonMistake": "Treating family ties as the problem"
            }
          },
          {
            "id": "c",
            "text": "Explore the childhood origins of her guilt before addressing any current worry symptoms",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Delays relief",
            "explanation": {
              "approach": "Premature depth focus",
              "rationale": "Defers practical help",
              "keyIndicators": [
                "active symptoms"
              ],
              "commonMistake": "Over-historicizing"
            }
          },
          {
            "id": "d",
            "text": "Reassure her that the guilt will fade naturally once her anxiety improves with time",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismissive reassurance",
            "explanation": {
              "approach": "Empty reassurance",
              "rationale": "Misses cultural meaning",
              "keyIndicators": [
                "value-laden guilt"
              ],
              "commonMistake": "Minimizing client concerns"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature best distinguishes her presentation from panic disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Her symptoms include muscle tension, which never occurs in panic disorder presentations",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Inaccurate claim",
            "explanation": {
              "approach": "False discriminator",
              "rationale": "Tension is not exclusive",
              "keyIndicators": [
                "overlap symptoms"
              ],
              "commonMistake": "Using nonspecific signs"
            }
          },
          {
            "id": "b",
            "text": "Her worry is chronic and diffuse rather than centered on sudden discrete attacks",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Core GAD versus panic distinction",
            "explanation": {
              "approach": "Contrast course and focus",
              "rationale": "GAD is persistent, panic episodic",
              "keyIndicators": [
                "no discrete attacks"
              ],
              "commonMistake": "Confusing worry with panic"
            }
          },
          {
            "id": "c",
            "text": "She denies any fear of dying, which by itself confirms generalized anxiety disorder",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Overstated single sign",
            "explanation": {
              "approach": "Single-symptom logic",
              "rationale": "One denial is insufficient",
              "keyIndicators": [
                "full pattern needed"
              ],
              "commonMistake": "Anchoring on one item"
            }
          },
          {
            "id": "d",
            "text": "Her eight-month duration automatically excludes panic disorder from any clinical consideration",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Duration not exclusionary",
            "explanation": {
              "approach": "Misusing duration",
              "rationale": "Panic can also be chronic",
              "keyIndicators": [
                "symptom quality matters"
              ],
              "commonMistake": "Over-relying on timeline"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Which intervention is most appropriate for her generalized worry?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Cognitive restructuring with worry exposure and relaxation skills she can practice daily",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Evidence-based for GAD",
            "explanation": {
              "approach": "CBT for worry",
              "rationale": "Targets uncontrollable worry",
              "keyIndicators": [
                "chronic worry"
              ],
              "commonMistake": "Skipping structured skills"
            }
          },
          {
            "id": "b",
            "text": "Interoceptive exposure repeatedly inducing physical panic sensations until they no longer frighten her",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Panic-specific, mismatched",
            "explanation": {
              "approach": "Wrong exposure target",
              "rationale": "She lacks panic attacks",
              "keyIndicators": [
                "no panic"
              ],
              "commonMistake": "Applying panic protocol to GAD"
            }
          },
          {
            "id": "c",
            "text": "Supportive listening alone without teaching any specific anxiety-management strategies or skills",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Insufficient for GAD",
            "explanation": {
              "approach": "Support without structure",
              "rationale": "Misses skill acquisition",
              "keyIndicators": [
                "need for tools"
              ],
              "commonMistake": "Relying only on empathy"
            }
          },
          {
            "id": "d",
            "text": "Prolonged exposure focused on processing a traumatic memory underlying her chronic worry",
            "isCorrect": false,
            "weight": -2,
            "rationale": "No trauma indicated",
            "explanation": {
              "approach": "Trauma protocol misfit",
              "rationale": "No trauma is present",
              "keyIndicators": [
                "no trauma history"
              ],
              "commonMistake": "Assuming trauma drives anxiety"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Which best reflects culturally responsive case conceptualization for this client?",
        "evidenceRef": [
          "R1",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Treat familismo and faith as obstacles to overcome on the path toward recovery",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Pathologizes culture",
            "explanation": {
              "approach": "Deficit framing",
              "rationale": "Misreads strengths as barriers",
              "keyIndicators": [
                "cultural strengths"
              ],
              "commonMistake": "Pathologizing values"
            }
          },
          {
            "id": "b",
            "text": "Integrate her family and faith strengths while addressing the diagnostic features of her worry",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Strengths plus clinical accuracy",
            "explanation": {
              "approach": "Strengths-informed formulation",
              "rationale": "Combines culture and criteria",
              "keyIndicators": [
                "familismo",
                "faith"
              ],
              "commonMistake": "Ignoring cultural assets"
            }
          },
          {
            "id": "c",
            "text": "Focus solely on symptom checklists and set aside any cultural context entirely",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Context-free assessment",
            "explanation": {
              "approach": "Decontextualized view",
              "rationale": "Misses meaning and supports",
              "keyIndicators": [
                "cultural relevance"
              ],
              "commonMistake": "Checklist-only thinking"
            }
          },
          {
            "id": "d",
            "text": "Assume her culture causes the anxiety and recommend distancing from her community ties",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Harmful and inaccurate",
            "explanation": {
              "approach": "Cultural blame",
              "rationale": "Severs supportive ties",
              "keyIndicators": [
                "protective community"
              ],
              "commonMistake": "Blaming culture for disorder"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G047",
    "title": "Carrying What Was Survived",
    "category": "Trauma",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Posttraumatic Stress Disorder",
      "code": "F43.10"
    },
    "diagnosis": {
      "name": "Posttraumatic Stress Disorder",
      "code": "F43.10"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Posttraumatic Stress Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Acute Stress Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Adjustment Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Devin, a 29-year-old transgender man, arrives early and sits with his back to the wall, scanning the room with watchful, darting eyes and a rigid posture. His speech is clipped and cautious as he reports nightmares, hypervigilance, and avoidance following an assault eight months ago. Before settling in, he asks directly, 'Do you actually offer affirming care, or am I going to have to explain myself the whole time?'\u2014his tone measured but braced for disappointment.",
      "session1": "Devin appears well-groomed but tense, flinching at a sudden hallway noise as he describes intrusive memories, exaggerated startle, emotional numbing, and avoidance of places resembling the assault. His voice flattens into a monotone when recounting chronic minority stress from misgendering and prior invalidating providers. 'I've learned to expect to be misread,' he says quietly, his affect guarded with brief flashes of frustration.",
      "session2": "Devin maintains slightly steadier eye contact today, though his jaw tightens as he reports negative beliefs about safety, self-blame, sleep disruption, and concentration problems persisting well beyond a month. His tone drops and slows when he confides, 'Part of me is scared that being honest about who I am will cost me decent care.' His affect is anxious and vulnerable, with moments of cautious relief."
    },
    "diagnosticRationale": "Exposure to a traumatic event with intrusion, avoidance, negative cognitions and mood, and arousal symptoms persisting beyond one month meets PTSD criteria; duration exceeds the acute stress window.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "PTSD criteria and one-month duration"
      },
      {
        "id": "R2",
        "source": "VA/DoD CPG",
        "detail": "Trauma-focused therapies for PTSD"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Nondiscrimination and affirming practice"
      },
      {
        "id": "R4",
        "source": "Hays (Assessment)",
        "detail": "Minority stress in assessment"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "He asks whether you provide affirming care. What is the best initial response?",
        "evidenceRef": [
          "R3",
          "R4"
        ],
        "options": [
          {
            "id": "a",
            "text": "Confirm your affirming stance, invite his pronouns and name, and ask what affirming care means to him",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Affirms and collaborates",
            "explanation": {
              "approach": "Affirm and ask",
              "rationale": "Establishes safety and respect",
              "keyIndicators": [
                "direct question",
                "prior invalidation"
              ],
              "commonMistake": "Assuming you know his needs"
            }
          },
          {
            "id": "b",
            "text": "Reassure him that you treat all clients exactly the same regardless of their identity",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Color-blind invalidation",
            "explanation": {
              "approach": "Sameness framing",
              "rationale": "Ignores minority stress",
              "keyIndicators": [
                "identity-specific harm"
              ],
              "commonMistake": "Equating fairness with sameness"
            }
          },
          {
            "id": "c",
            "text": "Explain that his identity is not relevant to treating his trauma symptoms here",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dismisses identity",
            "explanation": {
              "approach": "Identity dismissal",
              "rationale": "Severs context from symptoms",
              "keyIndicators": [
                "minority stress"
              ],
              "commonMistake": "Separating identity from care"
            }
          },
          {
            "id": "d",
            "text": "Refer him elsewhere so he can find a specialized gender-affirming trauma program nearby",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature referral",
            "explanation": {
              "approach": "Unneeded handoff",
              "rationale": "Abandons rather than affirms",
              "keyIndicators": [
                "client chose you"
              ],
              "commonMistake": "Outsourcing affirming care"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "How should the counselor address minority stress alongside his trauma symptoms?",
        "evidenceRef": [
          "R4",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Attribute all of his symptoms to gender dysphoria rather than the assault he survived",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Misattributes etiology",
            "explanation": {
              "approach": "Over-attributing to identity",
              "rationale": "Erases the trauma",
              "keyIndicators": [
                "clear assault"
              ],
              "commonMistake": "Reducing distress to identity"
            }
          },
          {
            "id": "b",
            "text": "Recognize minority stress as a compounding context while treating the trauma he presents with",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Integrates both accurately",
            "explanation": {
              "approach": "Both/and formulation",
              "rationale": "Holds context and diagnosis",
              "keyIndicators": [
                "misgendering",
                "PTSD signs"
              ],
              "commonMistake": "Treating one and ignoring the other"
            }
          },
          {
            "id": "c",
            "text": "Ignore minority stress to keep the trauma work focused and uncomplicated for now",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Decontextualizes",
            "explanation": {
              "approach": "Stripping context",
              "rationale": "Misses chronic stressors",
              "keyIndicators": [
                "ongoing invalidation"
              ],
              "commonMistake": "Oversimplifying the picture"
            }
          },
          {
            "id": "d",
            "text": "Advise him to avoid disclosing his identity to reduce the discrimination he encounters",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Harmful concealment advice",
            "explanation": {
              "approach": "Counseling concealment",
              "rationale": "Reinforces stigma and shame",
              "keyIndicators": [
                "identity pride"
              ],
              "commonMistake": "Recommending hiding identity"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature most clearly distinguishes his diagnosis from acute stress disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "His symptoms have persisted for eight months, exceeding the acute stress disorder time frame",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Duration is decisive",
            "explanation": {
              "approach": "Apply duration threshold",
              "rationale": "ASD resolves within one month",
              "keyIndicators": [
                "eight-month course"
              ],
              "commonMistake": "Overlooking timeline"
            }
          },
          {
            "id": "b",
            "text": "He experiences nightmares, which occur only in posttraumatic stress disorder and never in acute stress",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Inaccurate exclusivity",
            "explanation": {
              "approach": "False discriminator",
              "rationale": "Nightmares occur in both",
              "keyIndicators": [
                "shared symptoms"
              ],
              "commonMistake": "Using nonspecific signs"
            }
          },
          {
            "id": "c",
            "text": "His avoidance behavior is severe enough that acute stress disorder can be ruled out",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Severity not the key",
            "explanation": {
              "approach": "Severity over duration",
              "rationale": "Severity does not separate them",
              "keyIndicators": [
                "timeline is key"
              ],
              "commonMistake": "Confusing severity with chronicity"
            }
          },
          {
            "id": "d",
            "text": "His trauma involved interpersonal violence, which categorically excludes acute stress disorder",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Trauma type not exclusionary",
            "explanation": {
              "approach": "Misusing trauma type",
              "rationale": "Both follow similar events",
              "keyIndicators": [
                "duration matters"
              ],
              "commonMistake": "Relying on event type"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Which treatment approach is best supported for his PTSD?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Open-ended supportive counseling without any structured trauma processing component over many months",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Lacks trauma focus",
            "explanation": {
              "approach": "Support without protocol",
              "rationale": "Misses first-line care",
              "keyIndicators": [
                "clear PTSD"
              ],
              "commonMistake": "Avoiding trauma work"
            }
          },
          {
            "id": "b",
            "text": "Trauma-focused cognitive processing therapy delivered within an affirming and collaborative relationship",
            "isCorrect": true,
            "weight": 3,
            "rationale": "First-line and affirming",
            "explanation": {
              "approach": "CPT in affirming frame",
              "rationale": "Strong evidence for PTSD",
              "keyIndicators": [
                "intrusions",
                "negative cognitions"
              ],
              "commonMistake": "Choosing nonspecific support"
            }
          },
          {
            "id": "c",
            "text": "Immediate medication management as the sole intervention before any psychotherapy is considered",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Psychotherapy preferred first-line",
            "explanation": {
              "approach": "Medication-only path",
              "rationale": "Bypasses trauma-focused therapy",
              "keyIndicators": [
                "therapy indicated"
              ],
              "commonMistake": "Defaulting to meds alone"
            }
          },
          {
            "id": "d",
            "text": "Group exposure therapy beginning immediately without first building safety and a working alliance",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Premature and unsafe",
            "explanation": {
              "approach": "Rushed exposure",
              "rationale": "Skips stabilization and trust",
              "keyIndicators": [
                "fragile safety"
              ],
              "commonMistake": "Forcing exposure too early"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "You realize you lack experience with transgender clients' specific needs. What is most ethical?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Continue treating him without changes since trauma care is broadly the same for everyone",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Ignores competence gap",
            "explanation": {
              "approach": "Ignoring limits",
              "rationale": "Overlooks needed competence",
              "keyIndicators": [
                "affirming needs"
              ],
              "commonMistake": "Assuming generic skills suffice"
            }
          },
          {
            "id": "b",
            "text": "Seek consultation and affirming-care training while maintaining the relationship he chose",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Builds competence responsibly",
            "explanation": {
              "approach": "Consult and upskill",
              "rationale": "Ethical boundary of competence",
              "keyIndicators": [
                "existing alliance"
              ],
              "commonMistake": "Either abandoning or coasting"
            }
          },
          {
            "id": "c",
            "text": "Transfer him to a colleague immediately to avoid any possibility of providing harmful care",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Abandons unnecessarily",
            "explanation": {
              "approach": "Reflexive transfer",
              "rationale": "Disrupts a wanted alliance",
              "keyIndicators": [
                "consultation possible"
              ],
              "commonMistake": "Over-referring"
            }
          },
          {
            "id": "d",
            "text": "Ask him to teach you about transgender experiences so you can adapt your treatment",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Burdens the client",
            "explanation": {
              "approach": "Offloading education",
              "rationale": "Competence is the clinician's duty",
              "keyIndicators": [
                "client in distress"
              ],
              "commonMistake": "Making the client the teacher"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G048",
    "title": "A Long Way From Home",
    "category": "Substance",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Alcohol Use Disorder, Severe",
      "code": "F10.20"
    },
    "diagnosis": {
      "name": "Alcohol Use Disorder, Severe",
      "code": "F10.20"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Alcohol Use Disorder, Severe",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Alcohol Use Disorder, Mild",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Adjustment Disorder with Depressed Mood",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Emmanuel, a 37-year-old first-generation immigrant from West Africa, arrives after a workplace referral, seated stiffly with arms crossed and minimal eye contact, his expression closed and wary. He speaks in a low, reluctant voice, frequently pausing, as he reports heavy daily drinking that began amid acculturative stress. 'If people back home knew I was here, the shame would follow my whole family,' he says quietly, his tone heavy with worry.",
      "session1": "Emmanuel appears tired and slightly disheveled, his hands faintly unsteady as he describes tolerance, morning drinking to steady himself, failed attempts to cut down, neglected work duties, and cravings. His speech is halting and his affect tense, brightening only briefly before he admits, 'I keep telling myself I can stop whenever I want, but I can't.' He avoids the clinician's gaze when discussing his community's potential judgment.",
      "session2": "Emmanuel sits with shoulders slumped, his affect somber, reporting continued use despite marital and liver-health consequences and withdrawal shakes when abstinent. His voice grows quiet and uncertain as he weighs change, confiding, 'I feel so alone here, so far from my family.' He hesitates between resignation and faint hope, his eye contact flickering up only when he speaks of missing home."
    },
    "diagnosticRationale": "He endorses six or more criteria including tolerance, withdrawal, craving, failed control efforts, role failure, and use despite harm, indicating Alcohol Use Disorder of severe severity.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "AUD criteria count and severity thresholds"
      },
      {
        "id": "R2",
        "source": "Miller & Rollnick (MI)",
        "detail": "Ambivalence and change talk"
      },
      {
        "id": "R3",
        "source": "SAMHSA TIP 35",
        "detail": "Enhancing motivation for change"
      },
      {
        "id": "R4",
        "source": "Hays (Assessment)",
        "detail": "Acculturative stress and stigma"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "He is reluctant and fears community shame. What is the best counseling stance?",
        "evidenceRef": [
          "R2",
          "R4"
        ],
        "options": [
          {
            "id": "a",
            "text": "Use a confrontational style to break through his denial about the seriousness of drinking",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Increases resistance",
            "explanation": {
              "approach": "Confrontation",
              "rationale": "Evokes defensiveness",
              "keyIndicators": [
                "ambivalence"
              ],
              "commonMistake": "Trying to argue someone into change"
            }
          },
          {
            "id": "b",
            "text": "Use motivational interviewing to explore ambivalence while validating his fears of stigma",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Reduces resistance, honors context",
            "explanation": {
              "approach": "MI with cultural sensitivity",
              "rationale": "Elicits his own change talk",
              "keyIndicators": [
                "reluctance",
                "stigma fear"
              ],
              "commonMistake": "Pushing instead of evoking"
            }
          },
          {
            "id": "c",
            "text": "Insist on immediate abstinence and a signed commitment before continuing any further sessions",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature demand",
            "explanation": {
              "approach": "Forcing commitment",
              "rationale": "Ignores his stage of change",
              "keyIndicators": [
                "ambivalent stage"
              ],
              "commonMistake": "Demanding readiness he lacks"
            }
          },
          {
            "id": "d",
            "text": "Minimize his concerns about stigma so he can focus only on the drinking problem",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismisses real barrier",
            "explanation": {
              "approach": "Dismissing stigma",
              "rationale": "Stigma blocks engagement",
              "keyIndicators": [
                "community shame"
              ],
              "commonMistake": "Sidelining cultural concerns"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "He says he is unsure he even wants to change. How should the counselor respond?",
        "evidenceRef": [
          "R2",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Warn him that without change he will lose his job, marriage, and health",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Scare tactics",
            "explanation": {
              "approach": "Fear induction",
              "rationale": "Tends to harden ambivalence",
              "keyIndicators": [
                "ambivalence"
              ],
              "commonMistake": "Using threats to motivate"
            }
          },
          {
            "id": "b",
            "text": "Reflect his ambivalence and explore both the costs and benefits he perceives in drinking",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Develops discrepancy",
            "explanation": {
              "approach": "Decisional exploration",
              "rationale": "Lets him voice change talk",
              "keyIndicators": [
                "mixed feelings"
              ],
              "commonMistake": "Resolving ambivalence for him"
            }
          },
          {
            "id": "c",
            "text": "Tell him that ambivalence means he is not ready and end the session early",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Misreads ambivalence",
            "explanation": {
              "approach": "Premature termination",
              "rationale": "Ambivalence is normal and workable",
              "keyIndicators": [
                "engageable"
              ],
              "commonMistake": "Treating ambivalence as refusal"
            }
          },
          {
            "id": "d",
            "text": "Provide detailed education on liver disease until he feels sufficiently frightened to quit",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Information dump",
            "explanation": {
              "approach": "Over-educating",
              "rationale": "Facts alone rarely shift ambivalence",
              "keyIndicators": [
                "needs evocation"
              ],
              "commonMistake": "Lecturing instead of listening"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which finding best supports a severe rather than mild specifier?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "He reports only two clear symptoms, which still warrants the severe classification given their intensity",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Misapplies thresholds",
            "explanation": {
              "approach": "Severity by intensity",
              "rationale": "Severity is by symptom count",
              "keyIndicators": [
                "count matters"
              ],
              "commonMistake": "Equating intensity with count"
            }
          },
          {
            "id": "b",
            "text": "He endorses six or more criteria including tolerance, withdrawal, craving, and use despite harm",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Meets severe threshold",
            "explanation": {
              "approach": "Count the criteria",
              "rationale": "Six-plus equals severe",
              "keyIndicators": [
                "multiple criteria"
              ],
              "commonMistake": "Undercounting symptoms"
            }
          },
          {
            "id": "c",
            "text": "He drinks every morning, and morning use alone is sufficient to assign the severe specifier",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Single feature insufficient",
            "explanation": {
              "approach": "One-symptom logic",
              "rationale": "Severity needs the full count",
              "keyIndicators": [
                "pattern needed"
              ],
              "commonMistake": "Anchoring on one behavior"
            }
          },
          {
            "id": "d",
            "text": "His workplace referral by itself establishes that the disorder must be severe in nature",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Referral not diagnostic",
            "explanation": {
              "approach": "Referral as severity proxy",
              "rationale": "Referral source is irrelevant to count",
              "keyIndicators": [
                "criteria-based"
              ],
              "commonMistake": "Confusing context with severity"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Given probable withdrawal, what is the most appropriate next step?",
        "evidenceRef": [
          "R1",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Begin weekly insight-oriented therapy and defer any medical evaluation until he is fully abstinent",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ignores withdrawal risk",
            "explanation": {
              "approach": "Deferring medical review",
              "rationale": "Withdrawal can be dangerous",
              "keyIndicators": [
                "shakes when abstinent"
              ],
              "commonMistake": "Overlooking detox needs"
            }
          },
          {
            "id": "b",
            "text": "Refer for medical evaluation of withdrawal and coordinate a level-of-care decision collaboratively",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Safety-first coordination",
            "explanation": {
              "approach": "Medical eval and placement",
              "rationale": "Withdrawal requires assessment",
              "keyIndicators": [
                "withdrawal signs"
              ],
              "commonMistake": "Skipping medical safety"
            }
          },
          {
            "id": "c",
            "text": "Advise him to stop drinking abruptly at home and call only if he feels unwell",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Unsafe abrupt cessation",
            "explanation": {
              "approach": "Unsupervised cessation",
              "rationale": "Risks severe withdrawal",
              "keyIndicators": [
                "physiologic dependence"
              ],
              "commonMistake": "Recommending cold-turkey stop"
            }
          },
          {
            "id": "d",
            "text": "Recommend he taper on his own gradually using a schedule he designs without supervision",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Unsupervised taper",
            "explanation": {
              "approach": "Self-managed taper",
              "rationale": "Needs medical oversight",
              "keyIndicators": [
                "withdrawal risk"
              ],
              "commonMistake": "Leaving taper unsupervised"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "His employer who referred him requests treatment details. What is most ethical?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Release the requested clinical details since the employer paid for and initiated the referral",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Breaches confidentiality",
            "explanation": {
              "approach": "Disclosure to payer",
              "rationale": "Referral is not consent",
              "keyIndicators": [
                "no release signed"
              ],
              "commonMistake": "Assuming employer access"
            }
          },
          {
            "id": "b",
            "text": "Obtain his written authorization specifying what limited information may be shared with the employer",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Consent-based disclosure",
            "explanation": {
              "approach": "Authorized release",
              "rationale": "Protects autonomy and privacy",
              "keyIndicators": [
                "client consent",
                "scope limits"
              ],
              "commonMistake": "Sharing without a release"
            }
          },
          {
            "id": "c",
            "text": "Provide a general verbal summary by phone to avoid creating a written record",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Still a breach",
            "explanation": {
              "approach": "Informal disclosure",
              "rationale": "Verbal sharing also violates privacy",
              "keyIndicators": [
                "no authorization"
              ],
              "commonMistake": "Thinking verbal is exempt"
            }
          },
          {
            "id": "d",
            "text": "Decline any communication and avoid informing the client that his employer reached out",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Withholds relevant info",
            "explanation": {
              "approach": "Concealing contact",
              "rationale": "Client should know and decide",
              "keyIndicators": [
                "client agency"
              ],
              "commonMistake": "Keeping the client uninformed"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G049",
    "title": "Storms and Steadiness in a Small Town",
    "category": "Personality",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Borderline Personality Disorder",
      "code": "F60.3"
    },
    "diagnosis": {
      "name": "Borderline Personality Disorder",
      "code": "F60.3"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Borderline Personality Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Bipolar II Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Post-Traumatic Stress Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Brittany, a 26-year-old low-income woman in a rural county, joins by telehealth from a dim room, her camera framing a restless posture as she shifts and tucks her knees up. Her speech is fast and emotionally charged as she reports intense unstable relationships, fears of abandonment, and rapid mood shifts, noting no DBT specialist within driving distance. 'Everyone always leaves eventually, so why would this be different?' she says, her tone sharp and testing.",
      "session1": "Brittany appears casually dressed and visibly fatigued on screen, picking at her sleeves as she describes chronic emptiness, impulsive spending and conflict, identity confusion, and recurrent self-harm urges. Her voice oscillates between flat detachment and sudden heat when she adds, 'The nearest place that could actually help me is hours away and I can't afford it anyway.' Her affect is labile, eye contact to the camera intermittent.",
      "session2": "Brittany leans closer to the camera this session, her expression more open though still guarded, reporting mood swings that last hours and reset with interpersonal events in a pattern present since adolescence. Her tone softens to something almost pleading as she asks, 'Is real treatment even possible for someone like me, over a screen?' Her affect shifts from skepticism to a flicker of hope."
    },
    "diagnosticRationale": "A pervasive pattern of unstable relationships, abandonment fears, identity disturbance, impulsivity, affective instability reactive to interpersonal events, chronic emptiness, and self-harm urges supports Borderline Personality Disorder.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "BPD criteria and pervasive pattern"
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "Structured psychotherapy for BPD"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Telehealth competence and access"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "She fears abandonment and tests the relationship early. What stance is most therapeutic?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Provide consistent, clear boundaries while validating her emotions and maintaining a reliable session structure",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Validation plus structure",
            "explanation": {
              "approach": "Validate and hold limits",
              "rationale": "Stabilizes the alliance",
              "keyIndicators": [
                "abandonment fear",
                "testing"
              ],
              "commonMistake": "Choosing warmth without limits"
            }
          },
          {
            "id": "b",
            "text": "Offer unlimited availability between sessions to prove that you will never abandon her, without further exploration",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Unsustainable boundary",
            "explanation": {
              "approach": "Boundaryless reassurance",
              "rationale": "Sets up rupture later",
              "keyIndicators": [
                "intensity"
              ],
              "commonMistake": "Promising what you can't keep"
            }
          },
          {
            "id": "c",
            "text": "Keep emotional distance and stay neutral so she does not become dependent on you",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Invalidating distance",
            "explanation": {
              "approach": "Cold neutrality",
              "rationale": "Heightens abandonment fears",
              "keyIndicators": [
                "sensitivity to rejection"
              ],
              "commonMistake": "Withholding warmth"
            }
          },
          {
            "id": "d",
            "text": "Quickly interpret her testing as manipulation so she can see the pattern clearly",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Pejorative framing",
            "explanation": {
              "approach": "Labeling manipulation",
              "rationale": "Shames rather than helps",
              "keyIndicators": [
                "distress-driven behavior"
              ],
              "commonMistake": "Moralizing the behavior"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "During a heated moment she threatens to quit. What is the best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Validate her frustration, stay calm, and collaboratively examine what just occurred between you",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Repairs rupture",
            "explanation": {
              "approach": "Validate and process",
              "rationale": "Models regulation and repair",
              "keyIndicators": [
                "affective instability"
              ],
              "commonMistake": "Reacting defensively"
            }
          },
          {
            "id": "b",
            "text": "Agree that quitting may be best and offer to send her referral information immediately",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Enacts abandonment",
            "explanation": {
              "approach": "Confirming the fear",
              "rationale": "Repeats relational trauma",
              "keyIndicators": [
                "abandonment sensitivity"
              ],
              "commonMistake": "Letting threats end care"
            }
          },
          {
            "id": "c",
            "text": "Point out that quitting would prove she cannot tolerate the work of therapy",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Shaming challenge",
            "explanation": {
              "approach": "Provocative confrontation",
              "rationale": "Escalates the rupture",
              "keyIndicators": [
                "heightened affect"
              ],
              "commonMistake": "Issuing a challenge mid-crisis"
            }
          },
          {
            "id": "d",
            "text": "End the session early to let her cool down and resume only when she is calmer",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoids the moment",
            "explanation": {
              "approach": "Premature exit",
              "rationale": "Misses the repair opportunity",
              "keyIndicators": [
                "live rupture"
              ],
              "commonMistake": "Withdrawing under tension"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature best distinguishes her presentation from bipolar II disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Her mood shifts last days to weeks and occur independent of any interpersonal triggers",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes bipolar, not BPD",
            "explanation": {
              "approach": "Mischaracterizing course",
              "rationale": "BPD shifts are brief and reactive",
              "keyIndicators": [
                "hours-long shifts"
              ],
              "commonMistake": "Reversing the distinction"
            }
          },
          {
            "id": "b",
            "text": "Her mood shifts are brief, reactive to relationships, and tied to chronic emptiness and identity disturbance",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Captures BPD instability",
            "explanation": {
              "approach": "Reactivity and duration",
              "rationale": "BPD affect tracks interpersonal events",
              "keyIndicators": [
                "reactive shifts",
                "emptiness"
              ],
              "commonMistake": "Calling reactivity a mood episode"
            }
          },
          {
            "id": "c",
            "text": "Her impulsive spending alone confirms a manic episode and therefore a bipolar diagnosis, without further exploration",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Single sign misread",
            "explanation": {
              "approach": "Symptom in isolation",
              "rationale": "Impulsivity occurs in both",
              "keyIndicators": [
                "pattern needed"
              ],
              "commonMistake": "Equating impulsivity with mania"
            }
          },
          {
            "id": "d",
            "text": "Her young age makes bipolar II the more probable explanation for her symptoms",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Age not diagnostic",
            "explanation": {
              "approach": "Age-based guessing",
              "rationale": "Onset overlaps both",
              "keyIndicators": [
                "pattern over age"
              ],
              "commonMistake": "Using age to decide"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "With no local DBT specialist, what is the most appropriate plan?",
        "evidenceRef": [
          "R2",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Tell her effective treatment is impossible without in-person DBT and place her on a distant waitlist",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Denies access",
            "explanation": {
              "approach": "All-or-nothing access",
              "rationale": "Abandons feasible options",
              "keyIndicators": [
                "rural barriers"
              ],
              "commonMistake": "Treating DBT as the only option"
            }
          },
          {
            "id": "b",
            "text": "Deliver structured skills-based telehealth care and pursue consultation to strengthen your competence",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Feasible, evidence-aligned",
            "explanation": {
              "approach": "Telehealth plus consultation",
              "rationale": "Expands access responsibly",
              "keyIndicators": [
                "no local specialist"
              ],
              "commonMistake": "Refusing to adapt care"
            }
          },
          {
            "id": "c",
            "text": "Provide only supportive listening since structured therapy cannot be done over video",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Underestimates telehealth",
            "explanation": {
              "approach": "Support-only via video",
              "rationale": "Structured work is teleable",
              "keyIndicators": [
                "skills deficits"
              ],
              "commonMistake": "Selling telehealth short"
            }
          },
          {
            "id": "d",
            "text": "Require her to travel hours each week to the specialty clinic despite cost barriers",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Ignores access reality",
            "explanation": {
              "approach": "Imposing travel burden",
              "rationale": "Ignores cost and distance",
              "keyIndicators": [
                "low income",
                "rural"
              ],
              "commonMistake": "Disregarding access barriers"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "She discloses recurrent self-harm urges over telehealth. What is the most ethical step?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Continue as usual without altering the plan because telehealth limits your ability to intervene",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Neglects safety duty",
            "explanation": {
              "approach": "Ignoring risk",
              "rationale": "Self-harm needs a safety plan",
              "keyIndicators": [
                "self-harm urges"
              ],
              "commonMistake": "Treating risk passively"
            }
          },
          {
            "id": "b",
            "text": "Develop a safety plan and confirm local emergency resources appropriate to her rural location",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Telehealth safety planning",
            "explanation": {
              "approach": "Safety plan plus local resources",
              "rationale": "Required for remote risk",
              "keyIndicators": [
                "rural location",
                "urges"
              ],
              "commonMistake": "Skipping local resource mapping"
            }
          },
          {
            "id": "c",
            "text": "Immediately dispatch police for a welfare check to ensure she stays physically safe",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Over-escalation",
            "explanation": {
              "approach": "Reflexive police call",
              "rationale": "No imminent danger indicated",
              "keyIndicators": [
                "urges not intent"
              ],
              "commonMistake": "Escalating without indication"
            }
          },
          {
            "id": "d",
            "text": "End telehealth services and insist she find in-person care for any further treatment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Abandons client",
            "explanation": {
              "approach": "Discontinuing care",
              "rationale": "Removes her only access",
              "keyIndicators": [
                "no local options"
              ],
              "commonMistake": "Dropping risky clients"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G050",
    "title": "Running Hot After Service",
    "category": "Bipolar",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Bipolar I Disorder, Current Episode Manic",
      "code": "F31.13"
    },
    "diagnosis": {
      "name": "Bipolar I Disorder, Current Episode Manic",
      "code": "F31.13"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Bipolar I Disorder, Current Episode Manic",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "ADHD",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Tyler, a 34-year-old military veteran, is brought in by his spouse, striding into the room with rapid, expansive gestures and bright, darting eyes that struggle to settle. His speech is loud, fast, and hard to interrupt as he reports a week of little sleep, racing thoughts, and grandiose business plans while resisting VA care. 'I've never thought more clearly in my life\u2014everyone else just can't keep up with me,' he announces, his affect elevated and irritable when questioned.",
      "session1": "Tyler paces near his chair, unable to stay seated, his grooming slightly haphazard as he describes elevated mood, increased goal-directed activity, distractibility, impulsive large purchases, and inflated self-esteem. His speech remains pressured and tangential, and he waves off concern, insisting, 'Seeking help is for weak people\u2014there's nothing wrong with me.' His affect is expansive with flashes of irritation when contradicted.",
      "session2": "Tyler is still restless but slightly more contained, his eye contact intense though fleeting, while his spouse reports the change is marked, uncharacteristic, and has lasted over a week with functional impairment. He interjects rapidly and minimizes, yet quiets when his spouse mentions a prior depressive period two years earlier following deployment. His tone briefly flattens at that memory before re-escalating into energized speech."
    },
    "diagnosticRationale": "A distinct week-long period of elevated mood with decreased need for sleep, grandiosity, pressured speech, distractibility, increased activity, and impulsivity causing impairment meets criteria for a manic episode in Bipolar I.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Manic episode criteria and duration"
      },
      {
        "id": "R2",
        "source": "VA/DoD CPG",
        "detail": "Bipolar management in veterans"
      },
      {
        "id": "R3",
        "source": "IPSRT",
        "detail": "Social rhythm stabilization"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "He insists nothing is wrong and resists help. What stance is most effective?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Engage him respectfully, acknowledge military stigma, and focus on his own stated goals",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Reduces defensiveness",
            "explanation": {
              "approach": "Stigma-aware engagement",
              "rationale": "Builds an alliance through his goals",
              "keyIndicators": [
                "help-seeking stigma"
              ],
              "commonMistake": "Confronting his denial head-on"
            }
          },
          {
            "id": "b",
            "text": "Insist he accept that he is manic before any further conversation can proceed",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Power struggle",
            "explanation": {
              "approach": "Forcing insight",
              "rationale": "Provokes resistance during mania",
              "keyIndicators": [
                "limited insight"
              ],
              "commonMistake": "Demanding agreement first"
            }
          },
          {
            "id": "c",
            "text": "Tell him that refusing care proves he is unwell and needs immediate treatment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Coercive framing",
            "explanation": {
              "approach": "Circular argument",
              "rationale": "Alienates the veteran",
              "keyIndicators": [
                "stigma"
              ],
              "commonMistake": "Weaponizing the diagnosis"
            }
          },
          {
            "id": "d",
            "text": "Agree that he is fine to avoid conflict and reschedule for a later date",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Colludes with denial",
            "explanation": {
              "approach": "Avoidant collusion",
              "rationale": "Misses an acute episode",
              "keyIndicators": [
                "active mania"
              ],
              "commonMistake": "Avoiding hard topics"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "His spouse is frightened and overwhelmed. How should the counselor respond?",
        "evidenceRef": [
          "R2",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Direct the spouse to manage his behavior at home until symptoms resolve on their own",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Unsafe and unsupportive",
            "explanation": {
              "approach": "Offloading to spouse",
              "rationale": "Mania needs clinical care",
              "keyIndicators": [
                "acute episode"
              ],
              "commonMistake": "Making family the treatment"
            }
          },
          {
            "id": "b",
            "text": "Validate the spouse's distress, provide psychoeducation, and clarify the next clinical steps",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Supports and informs",
            "explanation": {
              "approach": "Educate and support family",
              "rationale": "Engages a key support",
              "keyIndicators": [
                "overwhelmed spouse"
              ],
              "commonMistake": "Ignoring caregiver needs"
            }
          },
          {
            "id": "c",
            "text": "Ask the spouse to leave so the client can speak freely without any interference",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismisses collateral",
            "explanation": {
              "approach": "Excluding the spouse",
              "rationale": "Loses vital information",
              "keyIndicators": [
                "limited self-report"
              ],
              "commonMistake": "Discarding collateral input"
            }
          },
          {
            "id": "d",
            "text": "Reassure the spouse that manic episodes are harmless and typically resolve without intervention",
            "isCorrect": false,
            "weight": -2,
            "rationale": "False reassurance",
            "explanation": {
              "approach": "Minimizing risk",
              "rationale": "Mania carries real risks",
              "keyIndicators": [
                "impulsive spending"
              ],
              "commonMistake": "Downplaying severity"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature most clearly supports a manic episode over ADHD?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "His distractibility has been lifelong and stable rather than emerging in a discrete period",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes ADHD",
            "explanation": {
              "approach": "Reversing the marker",
              "rationale": "Mania is episodic, not lifelong",
              "keyIndicators": [
                "recent onset"
              ],
              "commonMistake": "Confusing chronic with episodic"
            }
          },
          {
            "id": "b",
            "text": "His symptoms emerged as a distinct week-long change with decreased need for sleep and grandiosity",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Episodic with hallmark signs",
            "explanation": {
              "approach": "Episodic course plus features",
              "rationale": "Mania is a discrete episode",
              "keyIndicators": [
                "one-week change",
                "reduced sleep"
              ],
              "commonMistake": "Missing the episodic frame"
            }
          },
          {
            "id": "c",
            "text": "His impulsive spending alone confirms ADHD because both conditions share impulsivity equally",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Misleading equivalence",
            "explanation": {
              "approach": "Symptom overlap trap",
              "rationale": "Context separates them",
              "keyIndicators": [
                "episodic context"
              ],
              "commonMistake": "Stopping at shared symptoms"
            }
          },
          {
            "id": "d",
            "text": "His military service history makes ADHD the more likely diagnosis to consider first",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Irrelevant inference",
            "explanation": {
              "approach": "Service-based guessing",
              "rationale": "Service does not point to ADHD",
              "keyIndicators": [
                "symptom pattern"
              ],
              "commonMistake": "Letting history bias diagnosis"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the most appropriate immediate treatment priority?",
        "evidenceRef": [
          "R1",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Begin weekly cognitive therapy for grandiose beliefs while deferring any medical or psychiatric evaluation",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Misses acute need",
            "explanation": {
              "approach": "Therapy before stabilization",
              "rationale": "Acute mania needs medical care",
              "keyIndicators": [
                "active mania"
              ],
              "commonMistake": "Delaying psychiatric referral"
            }
          },
          {
            "id": "b",
            "text": "Coordinate urgent psychiatric evaluation and safety assessment given his acute manic presentation",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Stabilization first",
            "explanation": {
              "approach": "Urgent evaluation and safety",
              "rationale": "Mania requires prompt care",
              "keyIndicators": [
                "impulsivity",
                "no sleep"
              ],
              "commonMistake": "Treating mania as outpatient-only"
            }
          },
          {
            "id": "c",
            "text": "Schedule routine follow-up in several weeks to monitor whether the symptoms continue to worsen",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dangerous delay",
            "explanation": {
              "approach": "Passive monitoring",
              "rationale": "Acute risk needs action now",
              "keyIndicators": [
                "functional impairment"
              ],
              "commonMistake": "Under-responding to mania"
            }
          },
          {
            "id": "d",
            "text": "Recommend social rhythm tracking as the sole intervention until his sleep gradually normalizes",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Insufficient alone acutely",
            "explanation": {
              "approach": "Adjunct used as primary",
              "rationale": "IPSRT supports but does not stabilize acute mania",
              "keyIndicators": [
                "acute episode"
              ],
              "commonMistake": "Using adjuncts as standalone"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Which best reflects sound clinical reasoning about his diagnosis and stigma?",
        "evidenceRef": [
          "R1",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Withhold the diagnosis indefinitely so the veteran does not feel any additional shame",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoids needed clarity",
            "explanation": {
              "approach": "Concealing the diagnosis",
              "rationale": "Undermines informed care",
              "keyIndicators": [
                "need for treatment"
              ],
              "commonMistake": "Confusing kindness with omission"
            }
          },
          {
            "id": "b",
            "text": "Frame the diagnosis accurately and compassionately, addressing stigma as part of the engagement plan",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Accurate and humane",
            "explanation": {
              "approach": "Honest, stigma-aware framing",
              "rationale": "Supports informed engagement",
              "keyIndicators": [
                "stigma",
                "Bipolar I"
              ],
              "commonMistake": "Either hiding or bluntly labeling"
            }
          },
          {
            "id": "c",
            "text": "Tell him his symptoms are simply combat stress to make the diagnosis easier to accept",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Inaccurate reframe",
            "explanation": {
              "approach": "Misnaming the condition",
              "rationale": "Distorts the clinical picture",
              "keyIndicators": [
                "manic features"
              ],
              "commonMistake": "Softening with wrong labels"
            }
          },
          {
            "id": "d",
            "text": "Avoid discussing diagnosis entirely and focus only on his immediate business plans",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Sidesteps the issue",
            "explanation": {
              "approach": "Deflecting from diagnosis",
              "rationale": "Neglects the clinical reality",
              "keyIndicators": [
                "grandiose plans"
              ],
              "commonMistake": "Following the mania's agenda"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G051",
    "title": "When the Body Speaks for the Mind",
    "category": "Psychotic",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Schizophrenia",
      "code": "F20.9"
    },
    "diagnosis": {
      "name": "Schizophrenia",
      "code": "F20.9"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Schizophrenia",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Schizophreniform Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Brief Psychotic Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Somatic Symptom Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Kevin, a 24-year-old Asian American man, presents with his parents, who emphasize his headaches and stomach problems while he sits hunched and still, his gaze fixed on the floor. His speech is sparse and at times difficult to follow as he describes persistent voices and a belief that neighbors monitor him through his body. 'They put something in me so they can watch,' he murmurs, his affect flat and his expression detached.",
      "session1": "Kevin appears unkempt, with slowed psychomotor activity and minimal eye contact, as he reports auditory hallucinations, persecutory delusions, disorganized speech, and social withdrawal over eight months. His tone is monotone and his sentences occasionally derail mid-thought, while his parents frame his distress somatically and voice shame about mental illness. He glances warily toward the door, murmuring, 'I can hear them even now.'",
      "session2": "Kevin sits rigidly, his affect blunted and his responses delayed, as the history confirms symptoms persisting well beyond six months with marked functional decline in work and relationships. His speech remains halting and tangential, and he says quietly, 'The voices don't stop, no matter where I go.' His parents lean forward to ask whether help can avoid bringing shame to the household, their worry contrasting with his detachment."
    },
    "diagnosticRationale": "Persistent hallucinations, delusions, disorganized speech, and negative symptoms with functional decline lasting more than six months meets criteria for Schizophrenia rather than the shorter-duration psychotic disorders.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Schizophrenia criteria and six-month duration"
      },
      {
        "id": "R2",
        "source": "APA CPG",
        "detail": "Coordinated care for schizophrenia"
      },
      {
        "id": "R3",
        "source": "Hays (Assessment)",
        "detail": "Somatic idioms and family shame"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "The family frames his distress as physical illness. What stance is most helpful?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Correct the family firmly that the problem is psychiatric, not physical, before proceeding",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dismisses their idiom",
            "explanation": {
              "approach": "Correcting bluntly",
              "rationale": "Alienates a shame-sensitive family",
              "keyIndicators": [
                "somatic framing"
              ],
              "commonMistake": "Overriding cultural idioms"
            }
          },
          {
            "id": "b",
            "text": "Join the family's language of bodily distress while gently broadening the conversation toward his experiences",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Builds bridge respectfully",
            "explanation": {
              "approach": "Meet then expand",
              "rationale": "Honors somatic idiom and shame",
              "keyIndicators": [
                "headaches",
                "family shame"
              ],
              "commonMistake": "Forcing a psychiatric frame"
            }
          },
          {
            "id": "c",
            "text": "Focus only on the physical complaints and refer him exclusively to a medical clinic",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misses psychosis",
            "explanation": {
              "approach": "Somatic-only path",
              "rationale": "Overlooks clear psychotic symptoms",
              "keyIndicators": [
                "hallucinations"
              ],
              "commonMistake": "Following somatic framing literally"
            }
          },
          {
            "id": "d",
            "text": "Tell the family their shame is unwarranted and they should think differently about illness",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Invalidates feelings",
            "explanation": {
              "approach": "Lecturing on stigma",
              "rationale": "Shaming the shame backfires",
              "keyIndicators": [
                "cultural shame"
              ],
              "commonMistake": "Moralizing about beliefs"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "He reports voices and believes neighbors monitor him. How should you respond?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Directly dispute the delusion with evidence so he recognizes the neighbors are not watching",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Confronting delusions",
            "explanation": {
              "approach": "Argue against belief",
              "rationale": "Erodes trust and rarely works",
              "keyIndicators": [
                "fixed delusion"
              ],
              "commonMistake": "Debating the content"
            }
          },
          {
            "id": "b",
            "text": "Acknowledge how distressing the experiences feel and explore their impact without endorsing or attacking them",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Empathic, non-colluding",
            "explanation": {
              "approach": "Validate distress, not content",
              "rationale": "Maintains alliance and safety",
              "keyIndicators": [
                "persecutory beliefs"
              ],
              "commonMistake": "Either agreeing or arguing"
            }
          },
          {
            "id": "c",
            "text": "Agree that the neighbors are indeed watching him to build immediate rapport and trust",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Colludes with delusion",
            "explanation": {
              "approach": "Endorsing the belief",
              "rationale": "Reinforces the delusion",
              "keyIndicators": [
                "delusion present"
              ],
              "commonMistake": "Faking agreement"
            }
          },
          {
            "id": "d",
            "text": "Change the subject whenever he mentions the voices to keep the session calm and focused",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoidant",
            "explanation": {
              "approach": "Topic avoidance",
              "rationale": "Signals his experience is taboo",
              "keyIndicators": [
                "active symptoms"
              ],
              "commonMistake": "Steering away from psychosis"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature best distinguishes his diagnosis from schizophreniform disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "His somatic complaints are prominent, which by itself rules out schizophreniform disorder",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Somatic signs nonspecific",
            "explanation": {
              "approach": "False discriminator",
              "rationale": "Somatic framing does not separate them",
              "keyIndicators": [
                "duration matters"
              ],
              "commonMistake": "Using nonspecific features"
            }
          },
          {
            "id": "b",
            "text": "His symptoms have persisted beyond six months, exceeding the schizophreniform duration limit",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Duration is decisive",
            "explanation": {
              "approach": "Apply duration threshold",
              "rationale": "Schizophreniform is under six months",
              "keyIndicators": [
                "eight-month course"
              ],
              "commonMistake": "Ignoring the timeline"
            }
          },
          {
            "id": "c",
            "text": "His delusions are persecutory in nature, which never appear in schizophreniform disorder",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Inaccurate exclusivity",
            "explanation": {
              "approach": "Content-based error",
              "rationale": "Delusion type is not the divider",
              "keyIndicators": [
                "duration over content"
              ],
              "commonMistake": "Relying on symptom content"
            }
          },
          {
            "id": "d",
            "text": "His family involvement confirms a chronic course and therefore the schizophrenia diagnosis",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Irrelevant factor",
            "explanation": {
              "approach": "Context as criterion",
              "rationale": "Family role is not diagnostic",
              "keyIndicators": [
                "timeline-based"
              ],
              "commonMistake": "Conflating context with course"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the most appropriate treatment approach for him?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Coordinated specialty care with psychiatric referral, psychoeducation, and culturally sensitive family involvement",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Evidence-based and culturally fit",
            "explanation": {
              "approach": "Coordinated specialty care",
              "rationale": "Best outcomes for early psychosis",
              "keyIndicators": [
                "functional decline"
              ],
              "commonMistake": "Offering therapy alone"
            }
          },
          {
            "id": "b",
            "text": "Weekly insight-oriented psychotherapy alone to resolve the unconscious roots of his delusions",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Inappropriate as sole care",
            "explanation": {
              "approach": "Insight-only treatment",
              "rationale": "Insufficient for schizophrenia",
              "keyIndicators": [
                "psychotic symptoms"
              ],
              "commonMistake": "Treating psychosis with insight alone"
            }
          },
          {
            "id": "c",
            "text": "Brief supportive counseling with no medication referral until the family fully accepts the diagnosis",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Delays needed care",
            "explanation": {
              "approach": "Conditioning care on acceptance",
              "rationale": "Withholds first-line treatment",
              "keyIndicators": [
                "active psychosis"
              ],
              "commonMistake": "Waiting for family buy-in"
            }
          },
          {
            "id": "d",
            "text": "Refer solely to medical providers to address the headaches and stomach problems first",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misses psychiatric need",
            "explanation": {
              "approach": "Medical-only referral",
              "rationale": "Neglects the psychotic disorder",
              "keyIndicators": [
                "voices",
                "delusions"
              ],
              "commonMistake": "Treating only somatic complaints"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "The parents ask you to keep the diagnosis secret to protect family honor. What is most ethical?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Agree to conceal the diagnosis from the client to preserve the family's standing in their community",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Violates client rights",
            "explanation": {
              "approach": "Hiding from the client",
              "rationale": "Denies informed participation",
              "keyIndicators": [
                "adult client"
              ],
              "commonMistake": "Privileging family over client"
            }
          },
          {
            "id": "b",
            "text": "Honor the client's right to information while respectfully exploring the family's honor concerns",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Balances autonomy and culture",
            "explanation": {
              "approach": "Client autonomy plus cultural respect",
              "rationale": "Upholds rights and engages family",
              "keyIndicators": [
                "honor concerns"
              ],
              "commonMistake": "Choosing one party only"
            }
          },
          {
            "id": "c",
            "text": "Refuse to discuss the family's concerns and proceed strictly by standard clinical protocol",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Culturally dismissive",
            "explanation": {
              "approach": "Ignoring family context",
              "rationale": "Loses an essential support",
              "keyIndicators": [
                "family involvement"
              ],
              "commonMistake": "Disregarding cultural meaning"
            }
          },
          {
            "id": "d",
            "text": "Tell the parents that honor concerns are irrational and have no place in clinical care",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Invalidating and harmful",
            "explanation": {
              "approach": "Dismissing values",
              "rationale": "Damages the alliance",
              "keyIndicators": [
                "cultural shame"
              ],
              "commonMistake": "Belittling cultural beliefs"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G052",
    "title": "Rituals, Roots, and Relief",
    "category": "OCD-Related",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Obsessive-Compulsive Disorder",
      "code": "F42.2"
    },
    "diagnosis": {
      "name": "Obsessive-Compulsive Disorder",
      "code": "F42.2"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Obsessive-Compulsive Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Obsessive-Compulsive Personality Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Illness Anxiety Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Aiyana, a 31-year-old Native American woman, arrives with reddened, chapped hands that she keeps clasped tightly, her posture upright but tense and her eye contact brief and careful. Her speech is soft and deliberate as she seeks help for intrusive contamination thoughts and hours of washing. 'I need to know this won't ask me to give up my ceremonies,' she says early on, her tone protective and her affect anxious.",
      "session1": "Aiyana shifts in her seat and glances at her raw hands as she describes recurrent unwanted thoughts she recognizes as excessive and compulsive cleaning rituals that consume hours. Her voice steadies and warms when she speaks of tradition, noting, 'Ceremony gives me meaning, especially carrying what my people have carried.' Her affect moves between distress over the rituals and grounded pride in her culture.",
      "session2": "Aiyana appears slightly more at ease, though she wrings her hands when reporting that the rituals interfere with work and family and that she resists but cannot stop them. Her tone is earnest and searching as she asks, 'Can this treatment live alongside my community's healing, not replace it?' Her affect is hopeful but cautious, her eye contact steadier than before."
    },
    "diagnosticRationale": "Recurrent intrusive obsessions recognized as excessive and time-consuming compulsions performed to reduce anxiety, causing distress and impairment, meets criteria for Obsessive-Compulsive Disorder.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "OCD criteria with obsessions and compulsions"
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "Exposure and response prevention for OCD"
      },
      {
        "id": "R3",
        "source": "Hays (Assessment)",
        "detail": "Historical trauma and ceremony as resource"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "She worries treatment may conflict with her ceremonies. What is the best response?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Explore how ceremony supports her and frame treatment as compatible with her cultural healing",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Integrates cultural strengths",
            "explanation": {
              "approach": "Ceremony as ally",
              "rationale": "Honors meaning and reduces conflict",
              "keyIndicators": [
                "ceremony",
                "historical trauma"
              ],
              "commonMistake": "Framing them as opposed"
            }
          },
          {
            "id": "b",
            "text": "Advise her to pause ceremonies during treatment so the clinical work stays uncomplicated",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Severs a key support",
            "explanation": {
              "approach": "Removing cultural practice",
              "rationale": "Disrespects healing traditions",
              "keyIndicators": [
                "ceremony valued"
              ],
              "commonMistake": "Treating culture as interference"
            }
          },
          {
            "id": "c",
            "text": "Reassure her that ceremonies are irrelevant to her clinical symptoms and outcomes",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismisses meaning",
            "explanation": {
              "approach": "Minimizing culture",
              "rationale": "Misses an important resource",
              "keyIndicators": [
                "cultural significance"
              ],
              "commonMistake": "Bracketing culture out"
            }
          },
          {
            "id": "d",
            "text": "Tell her that ceremony likely worsens the rituals and should be limited during care",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Inaccurate and harmful",
            "explanation": {
              "approach": "Pathologizing ceremony",
              "rationale": "Confuses ritual with compulsion",
              "keyIndicators": [
                "ceremony is cultural"
              ],
              "commonMistake": "Conflating ceremony with OCD"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "She feels ashamed of her washing rituals. How should the counselor respond?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Tell her the rituals are simply a bad habit she can stop with willpower",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Minimizes OCD",
            "explanation": {
              "approach": "Willpower framing",
              "rationale": "Misunderstands compulsions",
              "keyIndicators": [
                "cannot stop"
              ],
              "commonMistake": "Treating OCD as a choice"
            }
          },
          {
            "id": "b",
            "text": "Normalize the symptoms, explain the obsession-compulsion cycle, and reduce her sense of shame",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Psychoeducation reduces shame",
            "explanation": {
              "approach": "Normalize and educate",
              "rationale": "Externalizes the disorder",
              "keyIndicators": [
                "shame",
                "insight"
              ],
              "commonMistake": "Letting shame go unaddressed"
            }
          },
          {
            "id": "c",
            "text": "Encourage her to perform the rituals more carefully so they feel less distressing",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reinforces compulsions",
            "explanation": {
              "approach": "Accommodating rituals",
              "rationale": "Strengthens the OCD cycle",
              "keyIndicators": [
                "compulsions"
              ],
              "commonMistake": "Helping perfect the ritual"
            }
          },
          {
            "id": "d",
            "text": "Move quickly past the shame to focus only on scheduling her next appointment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoids the affect",
            "explanation": {
              "approach": "Bypassing emotion",
              "rationale": "Leaves shame unprocessed",
              "keyIndicators": [
                "expressed shame"
              ],
              "commonMistake": "Skipping emotional content"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature best distinguishes OCD from generalized anxiety disorder here?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Her worries center on realistic everyday concerns rather than intrusive contamination thoughts",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes GAD",
            "explanation": {
              "approach": "Reversing the marker",
              "rationale": "OCD worries are ego-dystonic and odd",
              "keyIndicators": [
                "contamination obsessions"
              ],
              "commonMistake": "Confusing worry with obsessions"
            }
          },
          {
            "id": "b",
            "text": "Her intrusive obsessions are paired with ritualized compulsions performed to neutralize anxiety",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Obsession-compulsion link is key",
            "explanation": {
              "approach": "Identify obsessions plus compulsions",
              "rationale": "Compulsions define OCD",
              "keyIndicators": [
                "washing rituals"
              ],
              "commonMistake": "Missing the compulsion component"
            }
          },
          {
            "id": "c",
            "text": "Her symptoms cause distress, which alone is enough to separate OCD from anxiety disorders",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Distress is nonspecific",
            "explanation": {
              "approach": "Distress as discriminator",
              "rationale": "Both involve distress",
              "keyIndicators": [
                "need specific features"
              ],
              "commonMistake": "Using a shared feature"
            }
          },
          {
            "id": "d",
            "text": "Her cultural background makes generalized anxiety the more probable diagnosis to assign",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Irrelevant inference",
            "explanation": {
              "approach": "Culture-based guessing",
              "rationale": "Culture does not decide diagnosis",
              "keyIndicators": [
                "symptom pattern"
              ],
              "commonMistake": "Letting bias drive diagnosis"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Which intervention is best supported for her OCD?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Exposure and response prevention introduced gradually within a culturally respectful collaborative plan",
            "isCorrect": true,
            "weight": 3,
            "rationale": "First-line for OCD",
            "explanation": {
              "approach": "ERP, culturally integrated",
              "rationale": "Strong evidence for OCD",
              "keyIndicators": [
                "compulsions"
              ],
              "commonMistake": "Avoiding exposure work"
            }
          },
          {
            "id": "b",
            "text": "Relaxation training alone to lower anxiety so that the rituals naturally fade away over time",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Insufficient for OCD",
            "explanation": {
              "approach": "Relaxation-only",
              "rationale": "Does not target compulsions",
              "keyIndicators": [
                "ritual maintenance"
              ],
              "commonMistake": "Treating OCD like generic anxiety"
            }
          },
          {
            "id": "c",
            "text": "Encouraging avoidance of all contamination triggers to keep her anxiety as low as possible",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reinforces OCD",
            "explanation": {
              "approach": "Promoting avoidance",
              "rationale": "Maintains the disorder",
              "keyIndicators": [
                "contamination fears"
              ],
              "commonMistake": "Accommodating avoidance"
            }
          },
          {
            "id": "d",
            "text": "Open-ended exploration of childhood experiences before addressing the current rituals at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Delays effective care",
            "explanation": {
              "approach": "Insight before exposure",
              "rationale": "Defers the active ingredient",
              "keyIndicators": [
                "active compulsions"
              ],
              "commonMistake": "Over-historicizing OCD"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "She asks you to consult with her traditional healer. What is most ethical?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Refuse the consultation because traditional healing falls outside evidence-based clinical practice",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Culturally dismissive",
            "explanation": {
              "approach": "Rejecting collaboration",
              "rationale": "Disregards her support system",
              "keyIndicators": [
                "healer valued"
              ],
              "commonMistake": "Privileging only Western care"
            }
          },
          {
            "id": "b",
            "text": "Obtain her consent and collaborate respectfully with the healer to support coordinated care",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Consent-based collaboration",
            "explanation": {
              "approach": "Consent and coordinate",
              "rationale": "Integrates cultural and clinical care",
              "keyIndicators": [
                "healer",
                "consent"
              ],
              "commonMistake": "Excluding cultural providers"
            }
          },
          {
            "id": "c",
            "text": "Contact the healer directly without telling her in order to gather useful background",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Breaches confidentiality",
            "explanation": {
              "approach": "Unauthorized contact",
              "rationale": "Violates consent and privacy",
              "keyIndicators": [
                "no release"
              ],
              "commonMistake": "Acting without authorization"
            }
          },
          {
            "id": "d",
            "text": "Agree in principle but indefinitely delay the consultation to focus on clinical work",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Passive avoidance",
            "explanation": {
              "approach": "Stalling collaboration",
              "rationale": "Undermines her stated wishes",
              "keyIndicators": [
                "client request"
              ],
              "commonMistake": "Deprioritizing cultural care"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G053",
    "title": "Focus, Function, and Fair Access",
    "category": "Neurodevelopmental",
    "difficulty": "easy",
    "primaryDiagnosis": {
      "name": "Attention-Deficit/Hyperactivity Disorder, Combined",
      "code": "F90.2"
    },
    "diagnosis": {
      "name": "Attention-Deficit/Hyperactivity Disorder, Combined",
      "code": "F90.2"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Attention-Deficit/Hyperactivity Disorder, Combined",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Specific Learning Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Adjustment Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Marcus, a 28-year-old man who uses a wheelchair, rolls into the office and immediately scans for clearance and seating, his manner energetic but slightly distracted. His speech is quick and tangential as he seeks help for lifelong inattention and restlessness affecting work. 'First things though\u2014is this whole process actually accessible to me?' he asks, his tone direct and a little wary, his affect engaged but restless.",
      "session1": "Marcus fidgets with a pen and shifts frequently in his chair, his eye contact warm but fleeting, as he describes childhood-onset distractibility, disorganization, fidgeting, interrupting, and difficulty sustaining attention. His speech is rapid and occasionally jumps topics mid-sentence, and he notes with frustration, 'Every clinician before you just stared at the chair and skipped right past my actual problem.' His affect is animated with undercurrents of exasperation.",
      "session2": "Marcus arrives organized with notes he keeps losing track of, his restlessness evident in his tapping hand, as he reports symptoms across home and work settings since childhood with significant functional impact. His tone sharpens with frustration when he says, 'Their assumptions about me delayed getting a real answer for years.' His affect is candid and a touch indignant, easing into relief as the evaluation finally centers his attention concerns."
    },
    "diagnosticRationale": "Childhood-onset, cross-setting inattention and hyperactivity-impulsivity with clear functional impairment, not better explained by another condition, supports ADHD, combined presentation.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "ADHD criteria, onset, and cross-setting impairment"
      },
      {
        "id": "R2",
        "source": "ACA Code of Ethics",
        "detail": "Accessibility and nondiscrimination"
      },
      {
        "id": "R3",
        "source": "NBCC Content Outline",
        "detail": "Assessment and treatment planning"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "He asks whether the process is accessible. What is the best initial response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Assure him that accommodations are standard and that he should not worry about access",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismissive reassurance",
            "explanation": {
              "approach": "Generic reassurance",
              "rationale": "Skips genuine collaboration",
              "keyIndicators": [
                "access concern"
              ],
              "commonMistake": "Brushing off the question"
            }
          },
          {
            "id": "b",
            "text": "Invite him to describe his access needs and collaborate on accommodations for the work",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Centers his expertise",
            "explanation": {
              "approach": "Ask and accommodate",
              "rationale": "Respects autonomy and access",
              "keyIndicators": [
                "wheelchair use",
                "prior barriers"
              ],
              "commonMistake": "Assuming what he needs"
            }
          },
          {
            "id": "c",
            "text": "Explain that his disability will be the main focus of your work together going forward",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Repeats past error",
            "explanation": {
              "approach": "Centering disability",
              "rationale": "Ignores his actual concern",
              "keyIndicators": [
                "wants ADHD help"
              ],
              "commonMistake": "Making disability the agenda"
            }
          },
          {
            "id": "d",
            "text": "Suggest a different clinic that specializes in disability before beginning any attention assessment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Unneeded referral",
            "explanation": {
              "approach": "Premature referral",
              "rationale": "Conflates disability with ADHD care",
              "keyIndicators": [
                "seeking ADHD eval"
              ],
              "commonMistake": "Deflecting accessible care"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "He is frustrated that past clinicians overlooked his attention concerns. How should you respond?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Validate his frustration and commit to focusing on the attention concerns he is raising",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Affirms and redirects to his goals",
            "explanation": {
              "approach": "Validate and refocus",
              "rationale": "Counters prior dismissal",
              "keyIndicators": [
                "past overshadowing"
              ],
              "commonMistake": "Repeating the dismissal"
            }
          },
          {
            "id": "b",
            "text": "Explain that prior clinicians likely had good reasons to prioritize his physical needs",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Defends ableism",
            "explanation": {
              "approach": "Justifying past bias",
              "rationale": "Invalidates his experience",
              "keyIndicators": [
                "diagnostic overshadowing"
              ],
              "commonMistake": "Excusing prior neglect"
            }
          },
          {
            "id": "c",
            "text": "Tell him to let go of the past so the two of you can move forward",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismisses valid feelings",
            "explanation": {
              "approach": "Premature redirection",
              "rationale": "Skips validation",
              "keyIndicators": [
                "frustration"
              ],
              "commonMistake": "Rushing past emotion"
            }
          },
          {
            "id": "d",
            "text": "Focus only on collecting symptoms and avoid discussing his prior care experiences",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misses rapport chance",
            "explanation": {
              "approach": "Task-only stance",
              "rationale": "Neglects relational repair",
              "keyIndicators": [
                "prior mistrust"
              ],
              "commonMistake": "Ignoring past harm"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature most supports ADHD over a specific learning disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "His difficulties are limited to reading and math achievement rather than broad attention regulation",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes learning disorder",
            "explanation": {
              "approach": "Reversing the marker",
              "rationale": "ADHD spans attention broadly",
              "keyIndicators": [
                "cross-setting inattention"
              ],
              "commonMistake": "Confusing the two conditions"
            }
          },
          {
            "id": "b",
            "text": "His inattention and hyperactivity appear across multiple settings with childhood onset and impairment",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Cross-setting onset is key",
            "explanation": {
              "approach": "Onset and pervasiveness",
              "rationale": "ADHD requires multi-setting impact",
              "keyIndicators": [
                "home and work",
                "childhood onset"
              ],
              "commonMistake": "Missing cross-setting criterion"
            }
          },
          {
            "id": "c",
            "text": "His restlessness alone is enough to confirm ADHD without further history gathering",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Single sign insufficient",
            "explanation": {
              "approach": "One-symptom logic",
              "rationale": "Full criteria are required",
              "keyIndicators": [
                "need full picture"
              ],
              "commonMistake": "Anchoring on one symptom"
            }
          },
          {
            "id": "d",
            "text": "His disability status makes a specific learning disorder the more likely diagnosis here",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Biased inference",
            "explanation": {
              "approach": "Disability-based guessing",
              "rationale": "Disability does not indicate diagnosis",
              "keyIndicators": [
                "symptom pattern"
              ],
              "commonMistake": "Letting bias drive conclusions"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Which treatment plan best fits his presentation?",
        "evidenceRef": [
          "R1",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Open-ended exploration of childhood emotions before addressing any current organizational difficulties he reports",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Mismatched focus",
            "explanation": {
              "approach": "Insight-first delay",
              "rationale": "Defers practical skills",
              "keyIndicators": [
                "organization problems"
              ],
              "commonMistake": "Over-historicizing"
            }
          },
          {
            "id": "b",
            "text": "Skills-based coaching for organization and attention, plus referral for medication evaluation and accommodations",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Practical, evidence-based",
            "explanation": {
              "approach": "Skills plus medical referral",
              "rationale": "Targets functional impairment",
              "keyIndicators": [
                "disorganization"
              ],
              "commonMistake": "Skipping practical strategies"
            }
          },
          {
            "id": "c",
            "text": "Watchful waiting with no intervention until he demonstrates that his symptoms are truly impairing",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Under-treats clear impairment",
            "explanation": {
              "approach": "Passive waiting",
              "rationale": "Impairment is already evident",
              "keyIndicators": [
                "work impact"
              ],
              "commonMistake": "Delaying needed help"
            }
          },
          {
            "id": "d",
            "text": "Relaxation training alone to reduce restlessness without addressing attention or organizational skills",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Insufficient scope",
            "explanation": {
              "approach": "Relaxation-only",
              "rationale": "Misses core ADHD targets",
              "keyIndicators": [
                "inattention"
              ],
              "commonMistake": "Treating only restlessness"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "He requests written summaries due to attention difficulties. What is the best response?",
        "evidenceRef": [
          "R2",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Provide written session summaries and other supports as a reasonable, individualized accommodation",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Supports accessibility",
            "explanation": {
              "approach": "Reasonable accommodation",
              "rationale": "Improves engagement and recall",
              "keyIndicators": [
                "attention difficulty"
              ],
              "commonMistake": "Treating accommodations as optional"
            }
          },
          {
            "id": "b",
            "text": "Decline the request to keep the treatment uniform and consistent across all of your clients",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ignores access need",
            "explanation": {
              "approach": "Uniformity over access",
              "rationale": "Denies a reasonable accommodation",
              "keyIndicators": [
                "functional need"
              ],
              "commonMistake": "Refusing to individualize"
            }
          },
          {
            "id": "c",
            "text": "Tell him he should learn to take his own notes to build independence over time",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismisses need",
            "explanation": {
              "approach": "Independence framing",
              "rationale": "Misreads accommodation as crutch",
              "keyIndicators": [
                "attention impairment"
              ],
              "commonMistake": "Withholding support"
            }
          },
          {
            "id": "d",
            "text": "Agree but provide the summaries inconsistently depending on how busy your schedule is",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Unreliable support",
            "explanation": {
              "approach": "Inconsistent follow-through",
              "rationale": "Undermines the accommodation",
              "keyIndicators": [
                "needs reliability"
              ],
              "commonMistake": "Half-implementing supports"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G054",
    "title": "Devotion, Discipline, and the Body",
    "category": "Eating",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Anorexia Nervosa, Restricting Type",
      "code": "F50.01"
    },
    "diagnosis": {
      "name": "Anorexia Nervosa, Restricting Type",
      "code": "F50.01"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Anorexia Nervosa, Restricting Type",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Bulimia Nervosa",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Avoidant/Restrictive Food Intake Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Sarah, a 22-year-old observant religious young woman, is referred by her physician and sits very upright in modest dress, her frame visibly thin and her hands folded with rigid composure. Her speech is calm and measured, her affect controlled, as she explains that her eating practices feel tied to discipline and devotion within her faith community. 'This is about devotion, not a disorder,' she states evenly, maintaining steady, almost rehearsed eye contact.",
      "session1": "Sarah's grooming is meticulous and her posture stiff as she describes intense fear of gaining weight, a distorted body image, and an overvaluation of control. She frames food restriction in spiritual language, her tone serene but firm, insisting, 'Restraint brings me closer to God\u2014there's nothing wrong here.' Her affect is guarded and minimizing, with a flicker of tension when her physical health is raised.",
      "session2": "Sarah sits with slightly less rigidity, her composure thinning as she reports the significant health worries her physician raised and distress about losing control. Her voice wavers for the first time when she admits, 'I'm scared of what happens if I can't keep this control.' Her affect softens toward openness, and she expresses willingness to accept support that respects her faith and involves trusted spiritual mentors."
    },
    "diagnosticRationale": "Persistent restriction of intake, intense fear of weight gain, and disturbance in body image without binge-purge behaviors, alongside medical concern, supports Anorexia Nervosa, restricting type.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Anorexia nervosa criteria and restricting subtype"
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "Eating disorder treatment and coordination"
      },
      {
        "id": "R3",
        "source": "Hays (Assessment)",
        "detail": "Faith-based framing and spiritual support"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "She frames restriction as spiritual discipline. What is the best counseling stance?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Tell her that her faith is being misused and the behavior is purely a disorder",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Attacks her faith",
            "explanation": {
              "approach": "Dismissing spirituality",
              "rationale": "Alienates a devout client",
              "keyIndicators": [
                "faith framing"
              ],
              "commonMistake": "Pitting faith against care"
            }
          },
          {
            "id": "b",
            "text": "Explore her faith respectfully while gently distinguishing devotion from the health concerns at hand",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Respects faith, names concern",
            "explanation": {
              "approach": "Honor faith, clarify harm",
              "rationale": "Builds trust and reality-tests",
              "keyIndicators": [
                "devotion language"
              ],
              "commonMistake": "Either attacking or colluding"
            }
          },
          {
            "id": "c",
            "text": "Agree that her restriction is a valid spiritual practice and avoid raising any concerns",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Colludes with the disorder",
            "explanation": {
              "approach": "Endorsing the behavior",
              "rationale": "Reinforces the illness",
              "keyIndicators": [
                "medical concern"
              ],
              "commonMistake": "Mislabeling symptoms as devotion"
            }
          },
          {
            "id": "d",
            "text": "Avoid the topic of faith entirely and focus strictly on her physician's medical concerns",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Ignores central meaning",
            "explanation": {
              "approach": "Excluding faith",
              "rationale": "Misses her core framework",
              "keyIndicators": [
                "faith centrality"
              ],
              "commonMistake": "Bracketing spirituality out"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "She denies any problem despite her physician's concern. How should you respond?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Confront her denial firmly so she understands the seriousness of her medical situation",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Increases defensiveness",
            "explanation": {
              "approach": "Confrontation",
              "rationale": "Hardens denial",
              "keyIndicators": [
                "denial"
              ],
              "commonMistake": "Arguing about the problem"
            }
          },
          {
            "id": "b",
            "text": "Use empathic, motivational dialogue to explore her values and any concerns she does hold",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Builds engagement",
            "explanation": {
              "approach": "Motivational exploration",
              "rationale": "Elicits her own concerns",
              "keyIndicators": [
                "ambivalence"
              ],
              "commonMistake": "Forcing acknowledgment"
            }
          },
          {
            "id": "c",
            "text": "Accept her denial and end the session since she does not see a problem",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Abandons clinical duty",
            "explanation": {
              "approach": "Premature termination",
              "rationale": "Neglects medical risk",
              "keyIndicators": [
                "health concern"
              ],
              "commonMistake": "Letting denial close care"
            }
          },
          {
            "id": "d",
            "text": "Warn her that without immediate change she will face severe medical consequences soon",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Scare tactics",
            "explanation": {
              "approach": "Fear induction",
              "rationale": "Tends to entrench resistance",
              "keyIndicators": [
                "denial"
              ],
              "commonMistake": "Using threats to motivate"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature best distinguishes her presentation from avoidant/restrictive food intake disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Her restriction stems from sensory aversions and lack of interest rather than body image concerns",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes ARFID",
            "explanation": {
              "approach": "Reversing the marker",
              "rationale": "ARFID lacks body image disturbance",
              "keyIndicators": [
                "body image fear"
              ],
              "commonMistake": "Confusing the two disorders"
            }
          },
          {
            "id": "b",
            "text": "Her restriction is driven by intense fear of weight gain and a disturbed body image",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Body image fear is key",
            "explanation": {
              "approach": "Identify body image driver",
              "rationale": "Distinguishes anorexia from ARFID",
              "keyIndicators": [
                "fear of weight gain"
              ],
              "commonMistake": "Overlooking the cognitive feature"
            }
          },
          {
            "id": "c",
            "text": "Her religious observance by itself indicates avoidant/restrictive food intake disorder in this case",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Irrelevant inference",
            "explanation": {
              "approach": "Faith-based guessing",
              "rationale": "Observance does not indicate ARFID",
              "keyIndicators": [
                "body image present"
              ],
              "commonMistake": "Letting religion drive diagnosis"
            }
          },
          {
            "id": "d",
            "text": "Her physician referral confirms ARFID because medical concern defines that particular diagnosis",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Faulty logic",
            "explanation": {
              "approach": "Referral as criterion",
              "rationale": "Referral source is not diagnostic",
              "keyIndicators": [
                "clinical features"
              ],
              "commonMistake": "Confusing referral with diagnosis"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the most appropriate treatment approach for her?",
        "evidenceRef": [
          "R2",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Coordinated medical, nutritional, and psychological care that respectfully integrates her faith and mentors",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Multidisciplinary and culturally fit",
            "explanation": {
              "approach": "Coordinated team, faith-integrated",
              "rationale": "Standard for anorexia",
              "keyIndicators": [
                "medical risk",
                "faith"
              ],
              "commonMistake": "Using talk therapy alone"
            }
          },
          {
            "id": "b",
            "text": "Weekly individual counseling alone without any medical monitoring or coordinated nutritional support",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Unsafe in isolation",
            "explanation": {
              "approach": "Counseling-only",
              "rationale": "Anorexia needs medical oversight",
              "keyIndicators": [
                "physician concern"
              ],
              "commonMistake": "Ignoring medical risk"
            }
          },
          {
            "id": "c",
            "text": "Encourage her to continue her spiritual practices and revisit treatment only if she worsens",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Delays needed care",
            "explanation": {
              "approach": "Wait-and-see",
              "rationale": "Risks deterioration",
              "keyIndicators": [
                "active illness"
              ],
              "commonMistake": "Deferring intervention"
            }
          },
          {
            "id": "d",
            "text": "Refer her solely to a spiritual mentor and discontinue clinical involvement in her care",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Abandons clinical role",
            "explanation": {
              "approach": "Outsourcing to clergy",
              "rationale": "Neglects the disorder",
              "keyIndicators": [
                "medical concern"
              ],
              "commonMistake": "Replacing care with referral"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Which best reflects culturally responsive conceptualization of her case?",
        "evidenceRef": [
          "R1",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "View her faith as the cause of the disorder and recommend distancing from her community",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Blames faith",
            "explanation": {
              "approach": "Faith as pathology",
              "rationale": "Severs protective ties",
              "keyIndicators": [
                "supportive community"
              ],
              "commonMistake": "Blaming culture for illness"
            }
          },
          {
            "id": "b",
            "text": "Hold the diagnosis accurately while engaging her faith and mentors as supports in recovery",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Accurate and integrative",
            "explanation": {
              "approach": "Diagnosis plus faith supports",
              "rationale": "Balances clinical and cultural",
              "keyIndicators": [
                "faith",
                "anorexia"
              ],
              "commonMistake": "Choosing one lens only"
            }
          },
          {
            "id": "c",
            "text": "Set aside the cultural context and rely strictly on the diagnostic checklist alone",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Decontextualized",
            "explanation": {
              "approach": "Checklist-only",
              "rationale": "Misses meaning and supports",
              "keyIndicators": [
                "faith centrality"
              ],
              "commonMistake": "Ignoring cultural assets"
            }
          },
          {
            "id": "d",
            "text": "Assume her religion fully explains the eating concerns and forgo any clinical diagnosis",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Misses the disorder",
            "explanation": {
              "approach": "Over-attributing to faith",
              "rationale": "Overlooks a serious illness",
              "keyIndicators": [
                "clinical features"
              ],
              "commonMistake": "Mistaking culture for cause"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G055",
    "title": "Holding On Through the Night",
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
        "id": "d1",
        "name": "Suicidal Behavior / Acute Risk",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Adjustment Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Eleanor, a 71-year-old African American woman, arrives after a recent bereavement dressed with quiet dignity, her posture frail and her eye contact reserved and measuring. Her speech is slow and soft, weighted with grief, as she voices distrust of mental health services and discloses recent thoughts of not wanting to live. 'I've been wondering why the Lord hasn't taken me too,' she says gently, emphasizing her faith and church family.",
      "session1": "Eleanor sits with folded hands and a heavy, sorrowful affect, her grooming neat but her movements weary, as she describes passive and emerging active suicidal thoughts, hopelessness, and isolation since her husband's death. Her voice catches and her gaze lifts searchingly when she asks, 'Do you really understand a woman like me, my community, my faith?' Her tone alternates between grief and guarded testing.",
      "session2": "Eleanor appears slightly steadier, her eye contact warmer as she works through a structured screening and endorses ideation with some intent but no specific plan. Her voice strengthens with feeling when she names her reasons for living, saying, 'My pastor and my grandbabies still need me here.' Her affect lifts from despair toward cautious resolve as she agrees to collaborative safety planning."
    },
    "diagnosticRationale": "Recent emergence of active suicidal ideation with some intent following bereavement, in the context of hopelessness and isolation, indicates acute suicide risk requiring immediate safety-focused intervention.",
    "references": [
      {
        "id": "R1",
        "source": "C-SSRS",
        "detail": "Structured suicide risk screening"
      },
      {
        "id": "R2",
        "source": "Stanley-Brown SPI",
        "detail": "Collaborative safety planning steps"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Duty to protect and cultural respect"
      },
      {
        "id": "R4",
        "source": "Hays (Assessment)",
        "detail": "Cultural mistrust and faith resources"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "She voices distrust and asks if you understand her community. What is the best response?",
        "evidenceRef": [
          "R4",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Reassure her that you treat everyone the same and her background will not affect care",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Color-blind invalidation",
            "explanation": {
              "approach": "Sameness framing",
              "rationale": "Dismisses her real concern",
              "keyIndicators": [
                "cultural mistrust"
              ],
              "commonMistake": "Equating fairness with sameness"
            }
          },
          {
            "id": "b",
            "text": "Acknowledge her mistrust as understandable and invite her faith and community into the conversation",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Validates and engages culture",
            "explanation": {
              "approach": "Honor mistrust and faith",
              "rationale": "Builds trust at a critical moment",
              "keyIndicators": [
                "distrust",
                "church family"
              ],
              "commonMistake": "Defending the system instead"
            }
          },
          {
            "id": "c",
            "text": "Explain that her distrust may be getting in the way of receiving effective help",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Blames the client",
            "explanation": {
              "approach": "Pathologizing mistrust",
              "rationale": "Frames realism as resistance",
              "keyIndicators": [
                "earned mistrust"
              ],
              "commonMistake": "Making mistrust her fault"
            }
          },
          {
            "id": "d",
            "text": "Move quickly past her concern to begin the formal risk assessment without delay",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misses rapport",
            "explanation": {
              "approach": "Skipping engagement",
              "rationale": "Trust enables honest disclosure",
              "keyIndicators": [
                "fragile alliance"
              ],
              "commonMistake": "Rushing past her question"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "She discloses thoughts of not wanting to live. What is the most therapeutic response?",
        "evidenceRef": [
          "R1",
          "R4"
        ],
        "options": [
          {
            "id": "a",
            "text": "Respond calmly with empathy and ask directly and respectfully about her suicidal thoughts",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Direct, compassionate inquiry",
            "explanation": {
              "approach": "Ask directly with empathy",
              "rationale": "Direct questions enhance safety",
              "keyIndicators": [
                "ideation disclosed"
              ],
              "commonMistake": "Avoiding the word suicide"
            }
          },
          {
            "id": "b",
            "text": "Quickly reassure her that things will improve and her faith will carry her through",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Premature reassurance",
            "explanation": {
              "approach": "Minimizing the disclosure",
              "rationale": "Shuts down honest sharing",
              "keyIndicators": [
                "acute risk"
              ],
              "commonMistake": "Rushing to comfort"
            }
          },
          {
            "id": "c",
            "text": "Change the subject to her grandchildren so she focuses on her reasons for living",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoids the risk",
            "explanation": {
              "approach": "Deflecting from ideation",
              "rationale": "Skips needed assessment",
              "keyIndicators": [
                "disclosed thoughts"
              ],
              "commonMistake": "Steering away from risk"
            }
          },
          {
            "id": "d",
            "text": "Tell her such thoughts are common in grief and usually resolve without any intervention",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dangerously minimizing",
            "explanation": {
              "approach": "Normalizing away risk",
              "rationale": "Underestimates acute danger",
              "keyIndicators": [
                "emerging intent"
              ],
              "commonMistake": "Dismissing suicidal thoughts"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which approach best assesses her current level of suicide risk?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Rely on her calm demeanor and faith involvement to conclude she is at low risk",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Unreliable inference",
            "explanation": {
              "approach": "Appearance-based judgment",
              "rationale": "Demeanor can mask risk",
              "keyIndicators": [
                "active ideation"
              ],
              "commonMistake": "Reading calm as safety"
            }
          },
          {
            "id": "b",
            "text": "Use a structured screening tool to assess ideation, intent, plan, and protective factors",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Structured, comprehensive",
            "explanation": {
              "approach": "Structured risk screening",
              "rationale": "Captures intent and protective factors",
              "keyIndicators": [
                "ideation with intent"
              ],
              "commonMistake": "Skipping structured assessment"
            }
          },
          {
            "id": "c",
            "text": "Ask only whether she has a specific plan and end the assessment if she says no",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Incomplete assessment",
            "explanation": {
              "approach": "Plan-only screening",
              "rationale": "Misses ideation and intent",
              "keyIndicators": [
                "intent present"
              ],
              "commonMistake": "Equating no plan with safety"
            }
          },
          {
            "id": "d",
            "text": "Defer the risk assessment to a later session to first strengthen the therapeutic alliance",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dangerous delay",
            "explanation": {
              "approach": "Postponing assessment",
              "rationale": "Acute risk needs assessment now",
              "keyIndicators": [
                "acute presentation"
              ],
              "commonMistake": "Delaying urgent screening"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Given her ideation with intent but no plan, what is the safest next step?",
        "evidenceRef": [
          "R2",
          "R4"
        ],
        "options": [
          {
            "id": "a",
            "text": "Schedule a routine follow-up next week and encourage her to lean on her church",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Under-responds to risk",
            "explanation": {
              "approach": "Routine follow-up",
              "rationale": "Acute risk needs action now",
              "keyIndicators": [
                "intent present"
              ],
              "commonMistake": "Treating acute risk routinely"
            }
          },
          {
            "id": "b",
            "text": "Collaboratively develop a safety plan that incorporates her pastor, family, and crisis resources",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Safe, collaborative, culturally fit",
            "explanation": {
              "approach": "Collaborative safety planning",
              "rationale": "Reduces risk using her supports",
              "keyIndicators": [
                "reasons for living",
                "intent"
              ],
              "commonMistake": "Skipping a written plan"
            }
          },
          {
            "id": "c",
            "text": "Immediately hospitalize her involuntarily to guarantee her safety regardless of her wishes",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Over-restrictive here",
            "explanation": {
              "approach": "Reflexive hospitalization",
              "rationale": "No plan and supports allow less restriction",
              "keyIndicators": [
                "no plan",
                "protective factors"
              ],
              "commonMistake": "Defaulting to the most restrictive option"
            }
          },
          {
            "id": "d",
            "text": "Provide a crisis hotline number and end the session once she agrees to call if needed",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Insufficient alone",
            "explanation": {
              "approach": "Hotline-only handoff",
              "rationale": "Lacks a structured plan",
              "keyIndicators": [
                "acute risk"
              ],
              "commonMistake": "Substituting a number for planning"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "She asks you not to tell her family about her suicidal thoughts. What is most ethical?",
        "evidenceRef": [
          "R3",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Agree to full secrecy and exclude family entirely to fully respect her stated wishes",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ignores safety duty",
            "explanation": {
              "approach": "Absolute confidentiality",
              "rationale": "Risk may require disclosure",
              "keyIndicators": [
                "acute risk"
              ],
              "commonMistake": "Overriding safety for privacy"
            }
          },
          {
            "id": "b",
            "text": "Explain confidentiality limits and collaboratively decide who can support her safety plan",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Balances privacy and protection",
            "explanation": {
              "approach": "Limits plus collaboration",
              "rationale": "Respects autonomy within safety duty",
              "keyIndicators": [
                "family as support"
              ],
              "commonMistake": "Promising total secrecy"
            }
          },
          {
            "id": "c",
            "text": "Immediately notify her family of everything she disclosed without discussing it with her",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Erodes trust",
            "explanation": {
              "approach": "Unilateral disclosure",
              "rationale": "Bypasses collaboration",
              "keyIndicators": [
                "fragile trust"
              ],
              "commonMistake": "Disclosing without dialogue"
            }
          },
          {
            "id": "d",
            "text": "Avoid the topic of confidentiality entirely to keep her comfortable and willing to talk",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Neglects informed consent",
            "explanation": {
              "approach": "Skipping limits discussion",
              "rationale": "She deserves to know the limits",
              "keyIndicators": [
                "disclosure risk"
              ],
              "commonMistake": "Hiding confidentiality limits"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G056",
    "title": "Long-Standing Low Mood in a Spanish-Dominant Client",
    "category": "Depressive",
    "difficulty": "medium",
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
        "id": "d1",
        "name": "Persistent Depressive Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Major Depressive Disorder, single episode",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Adjustment Disorder with Depressed Mood",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Bipolar II Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Rosa, a 41-year-old Spanish-dominant Latina woman, sits with slumped shoulders and downcast eyes, her grooming neat but effortful and her affect flat. In a quiet, slow voice she reports feeling down on most days for over four years, with low energy and poor self-esteem but no clear onset, murmuring 'asi soy yo, asi he sido siempre' (this is how I am, how I have always been).",
      "session1": "Rosa speaks softly and haltingly, with little spontaneous movement and minimal eye contact, describing chronic fatigue, hopelessness, and difficulty concentrating that she frames as her normal way of being. She prioritizes family obligations over her own needs and avoids discussing distress openly, glancing away and saying 'no quiero molestar a nadie con esto' (I do not want to bother anyone with this).",
      "session2": "With a resigned tone and occasional sighs, Rosa states symptoms have never fully lifted for more than a few weeks. She prefers sessions in Spanish, her voice steadier when speaking it, and worries that involving her family may bring shame, her eyes welling briefly before she composes herself."
    },
    "diagnosticRationale": "Depressed mood for most of the day, more days than not, for over two years with associated symptoms and no symptom-free interval exceeding two months supports persistent depressive disorder.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Persistent depressive disorder diagnostic criteria and duration"
      },
      {
        "id": "R2",
        "source": "Hays (Assessment)",
        "detail": "ADDRESSING framework and culturally responsive assessment"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Language access and informed consent obligations"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "How should the clinician build rapport with Rosa in the first session?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Acknowledge familismo, validate her caretaking role, and explore distress at a pace that respects cultural framing",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Honors cultural values while opening dialogue.",
            "explanation": {
              "approach": "Culturally responsive engagement.",
              "rationale": "Familismo shapes her presentation and trust.",
              "keyIndicators": [
                "family priority",
                "Spanish preference"
              ],
              "commonMistake": "Ignoring cultural framing of distress."
            }
          },
          {
            "id": "b",
            "text": "Confront her minimization directly, telling her that calling depression normal delays needed evidence-based treatment",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Confrontation ruptures early rapport.",
            "explanation": {
              "approach": "Premature confrontation.",
              "rationale": "Damages trust with a reserved client.",
              "keyIndicators": [
                "reserved",
                "shame concern"
              ],
              "commonMistake": "Pushing insight too fast."
            }
          },
          {
            "id": "c",
            "text": "Focus the intake narrowly on symptom checklists, gathering data efficiently before any relational engagement begins",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Neglects alliance building.",
            "explanation": {
              "approach": "Checklist-only intake.",
              "rationale": "Misses relational and cultural context.",
              "keyIndicators": [
                "chronic distress"
              ],
              "commonMistake": "Data over rapport."
            }
          },
          {
            "id": "d",
            "text": "Recommend she bring her whole family to every session so they can describe her mood for her",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Ignores her shame concern.",
            "explanation": {
              "approach": "Forced family involvement.",
              "rationale": "She fears family shame.",
              "keyIndicators": [
                "shame worry"
              ],
              "commonMistake": "Assuming family inclusion is always wanted."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "Rosa says her sadness is just who she is. What is the best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Tell her that her belief is irrational and must be disputed before therapy can move forward",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dismissive and confrontational.",
            "explanation": {
              "approach": "Labeling belief irrational.",
              "rationale": "Alienates the client.",
              "keyIndicators": [
                "identity framing"
              ],
              "commonMistake": "Disputing identity prematurely."
            }
          },
          {
            "id": "b",
            "text": "Reflect her experience, gently distinguish enduring mood from her core identity, and invite collaborative exploration",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Validates while separating symptom from self.",
            "explanation": {
              "approach": "Reflective reframing.",
              "rationale": "Opens space for change without shame.",
              "keyIndicators": [
                "chronic mood",
                "identity fusion"
              ],
              "commonMistake": "Accepting symptom as fixed identity."
            }
          },
          {
            "id": "c",
            "text": "Agree that some people are simply melancholic by nature and refocus only on daily functioning",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reinforces hopelessness.",
            "explanation": {
              "approach": "Colluding with hopelessness.",
              "rationale": "Forecloses treatment hope.",
              "keyIndicators": [
                "hopelessness"
              ],
              "commonMistake": "Validating fixed-trait view."
            }
          },
          {
            "id": "d",
            "text": "Move quickly to medication referral, framing her statement as proof she needs pharmacology immediately",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Premature and dismissive of counseling.",
            "explanation": {
              "approach": "Rushed referral.",
              "rationale": "Skips collaborative work.",
              "keyIndicators": [
                "no med eval data"
              ],
              "commonMistake": "Defaulting to meds."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature most supports persistent depressive disorder over major depression?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Acute severe symptoms emerging suddenly within the past three weeks after a clear stressor",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Suggests adjustment or MDD.",
            "explanation": {
              "approach": "Acute-onset framing.",
              "rationale": "Contradicts chronic course.",
              "keyIndicators": [
                "sudden onset"
              ],
              "commonMistake": "Confusing acute with chronic."
            }
          },
          {
            "id": "b",
            "text": "Distinct manic episodes alternating with depressive periods over the preceding several years",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Points to bipolar.",
            "explanation": {
              "approach": "Mania framing.",
              "rationale": "No mania present.",
              "keyIndicators": [
                "no mania"
              ],
              "commonMistake": "Misreading chronicity as bipolar."
            }
          },
          {
            "id": "c",
            "text": "Chronic depressed mood more days than not for over two years without lasting remission",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Matches the duration criterion.",
            "explanation": {
              "approach": "Duration-based reasoning.",
              "rationale": "Defines the disorder.",
              "keyIndicators": [
                "four-year course",
                "no remission"
              ],
              "commonMistake": "Overlooking duration."
            }
          },
          {
            "id": "d",
            "text": "Full symptom remission lasting many months between brief recurring episodes of severe depression",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Describes recurrent MDD.",
            "explanation": {
              "approach": "Remission framing.",
              "rationale": "No sustained remission here.",
              "keyIndicators": [
                "persistent symptoms"
              ],
              "commonMistake": "Allowing long remissions."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What initial treatment approach best fits Rosa?",
        "evidenceRef": [
          "R1",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Long-term psychoanalysis exploring unconscious childhood conflict before any present-day coping skills are introduced",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Slow and poorly matched.",
            "explanation": {
              "approach": "Analytic-only.",
              "rationale": "Delays functional relief.",
              "keyIndicators": [
                "chronic impairment"
              ],
              "commonMistake": "Ignoring practical needs."
            }
          },
          {
            "id": "b",
            "text": "Cognitive behavioral therapy with behavioral activation delivered in Spanish and attentive to cultural values",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Evidence-based and culturally accessible.",
            "explanation": {
              "approach": "Culturally adapted CBT.",
              "rationale": "Addresses mood and access.",
              "keyIndicators": [
                "Spanish preference",
                "chronic mood"
              ],
              "commonMistake": "Ignoring language access."
            }
          },
          {
            "id": "c",
            "text": "Brief solution-focused coaching aimed only at quick goal-setting without addressing entrenched depressive cognition",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Insufficient for chronicity.",
            "explanation": {
              "approach": "Brief coaching.",
              "rationale": "Too shallow for PDD.",
              "keyIndicators": [
                "entrenched mood"
              ],
              "commonMistake": "Underdosing care."
            }
          },
          {
            "id": "d",
            "text": "Supportive listening with no structured intervention, simply offering empathy session after session indefinitely",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Lacks active treatment.",
            "explanation": {
              "approach": "Support-only.",
              "rationale": "No active change agent.",
              "keyIndicators": [
                "need for structure"
              ],
              "commonMistake": "Mistaking support for treatment."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "Rosa is Spanish-dominant and the clinician speaks limited Spanish. What is required?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Proceed in English and ask Rosa to bring a bilingual relative to interpret each session",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Family interpreters risk bias and breach.",
            "explanation": {
              "approach": "Family interpreter.",
              "rationale": "Compromises accuracy and privacy.",
              "keyIndicators": [
                "shame concern"
              ],
              "commonMistake": "Using relatives to interpret."
            }
          },
          {
            "id": "b",
            "text": "Arrange a qualified interpreter or appropriate referral so Rosa receives services in her dominant language",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Ensures meaningful informed participation.",
            "explanation": {
              "approach": "Qualified language access.",
              "rationale": "Required for valid consent and care.",
              "keyIndicators": [
                "Spanish dominant"
              ],
              "commonMistake": "Ad hoc interpretation."
            }
          },
          {
            "id": "c",
            "text": "Continue treatment in English while using a translation app silently during portions of each clinical session",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Unreliable for clinical care.",
            "explanation": {
              "approach": "App reliance.",
              "rationale": "Inaccurate and not confidential.",
              "keyIndicators": [
                "dominant language"
              ],
              "commonMistake": "Trusting unverified tools."
            }
          },
          {
            "id": "d",
            "text": "Decline to treat and simply tell Rosa that her case is outside available scope entirely",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Abandons without referral.",
            "explanation": {
              "approach": "Outright refusal.",
              "rationale": "Fails duty to refer.",
              "keyIndicators": [
                "access need"
              ],
              "commonMistake": "Abandonment."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G057",
    "title": "Intense Fear of Judgment in a Non-Binary Client",
    "category": "Anxiety",
    "difficulty": "medium",
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
        "id": "d1",
        "name": "Social Anxiety Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Avoidant Personality Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Panic Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Jordan, a 26-year-old non-binary person, arrives early and sits rigidly at the edge of the chair, fidgeting with a sleeve cuff, eye contact fleeting and posture guarded. Speaking quickly and quietly, Jordan reports intense fear in social and performance situations and avoids classes and meetings, noting 'I'm sure everyone's just waiting for me to mess up.'",
      "session1": "Jordan's speech speeds and breath shortens when recalling group settings, cheeks flushing visibly as they describe blushing, racing heart, and dread before speaking in groups. Their hands tremble slightly and their voice drops as they add heightened vigilance about how others perceive their gender presentation.",
      "session2": "More settled but still watchful, Jordan links some anxiety to minority stress and past experiences of judgment, voice softening with emotion. They note, after a thoughtful pause, that the fear of evaluation 'was there long before I had the words for who I am,' predating and exceeding identity-related concerns."
    },
    "diagnosticRationale": "Marked, persistent fear of social situations where scrutiny is possible, with avoidance and out-of-proportion anxiety lasting over six months, supports social anxiety disorder, distinct from minority stress alone.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Social anxiety disorder criteria and avoidance"
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "CBT as first-line for social anxiety disorder"
      },
      {
        "id": "R3",
        "source": "Hays (Assessment)",
        "detail": "Minority stress and affirming assessment"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "How should the clinician respond to Jordan's fear of judgment in session?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Use affirming language, validate minority stress, and create explicit safety to discuss fear of scrutiny",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Builds trust and reduces evaluative threat.",
            "explanation": {
              "approach": "Affirming, safety-building stance.",
              "rationale": "Reduces evaluative threat in session.",
              "keyIndicators": [
                "fear of judgment",
                "minority stress"
              ],
              "commonMistake": "Ignoring identity-based stress."
            }
          },
          {
            "id": "b",
            "text": "Avoid any mention of identity, keeping the focus strictly on symptoms to prevent discomfort",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Erases relevant context.",
            "explanation": {
              "approach": "Identity avoidance.",
              "rationale": "Misses key stressor.",
              "keyIndicators": [
                "minority stress"
              ],
              "commonMistake": "Color/identity blindness."
            }
          },
          {
            "id": "c",
            "text": "Tell Jordan their fears are exaggerated and that most people are not actually judging them",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Invalidating reassurance.",
            "explanation": {
              "approach": "Dismissive reassurance.",
              "rationale": "Increases shame.",
              "keyIndicators": [
                "fear of scrutiny"
              ],
              "commonMistake": "Reassurance over validation."
            }
          },
          {
            "id": "d",
            "text": "Assign immediate public-speaking homework before any rapport or rationale has been established with Jordan",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Premature exposure.",
            "explanation": {
              "approach": "Unprepared exposure.",
              "rationale": "No alliance or rationale yet.",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Skipping preparation."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "Jordan asks whether their anxiety is just because they are non-binary. Best reply?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Confirm that being non-binary directly causes the disorder and reframe identity as the core problem",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Pathologizes identity.",
            "explanation": {
              "approach": "Pathologizing identity.",
              "rationale": "Harmful and inaccurate.",
              "keyIndicators": [
                "affirming need"
              ],
              "commonMistake": "Blaming identity."
            }
          },
          {
            "id": "b",
            "text": "Explain that minority stress contributes, while the anxiety itself is a treatable condition distinct from identity",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Separates stress from identity accurately.",
            "explanation": {
              "approach": "Distinguishing stress from identity.",
              "rationale": "Accurate and affirming.",
              "keyIndicators": [
                "minority stress",
                "fear of evaluation"
              ],
              "commonMistake": "Conflating identity with disorder."
            }
          },
          {
            "id": "c",
            "text": "State that identity is irrelevant and that social anxiety has only biological, never environmental causes",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismisses real stressors.",
            "explanation": {
              "approach": "Biological-only framing.",
              "rationale": "Ignores environment.",
              "keyIndicators": [
                "minority stress"
              ],
              "commonMistake": "Denying context."
            }
          },
          {
            "id": "d",
            "text": "Redirect to medication options without addressing the question Jordan actually asked about their experience",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Avoids the concern.",
            "explanation": {
              "approach": "Avoidant redirect.",
              "rationale": "Fails to engage question.",
              "keyIndicators": [
                "client question"
              ],
              "commonMistake": "Deflecting."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which finding best distinguishes social anxiety disorder from panic disorder here?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Unexpected panic attacks arising suddenly without any identifiable trigger or social context",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes panic disorder.",
            "explanation": {
              "approach": "Unexpected-attack framing.",
              "rationale": "Not Jordan's pattern.",
              "keyIndicators": [
                "cued fear"
              ],
              "commonMistake": "Confusing cued and uncued."
            }
          },
          {
            "id": "b",
            "text": "Anxiety consistently cued by social or performance situations involving possible scrutiny by others",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Matches social-evaluative cueing.",
            "explanation": {
              "approach": "Situational cueing.",
              "rationale": "Hallmark of social anxiety.",
              "keyIndicators": [
                "performance fear",
                "scrutiny"
              ],
              "commonMistake": "Missing the social cue."
            }
          },
          {
            "id": "c",
            "text": "Persistent worry across many unrelated life domains most days for the past several months",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Suggests GAD.",
            "explanation": {
              "approach": "Generalized-worry framing.",
              "rationale": "Worry is social-specific here.",
              "keyIndicators": [
                "focused fear"
              ],
              "commonMistake": "Overgeneralizing worry."
            }
          },
          {
            "id": "d",
            "text": "Fear of contamination leading to repetitive checking and washing rituals throughout the day",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Describes OCD.",
            "explanation": {
              "approach": "Compulsion framing.",
              "rationale": "No rituals present.",
              "keyIndicators": [
                "no compulsions"
              ],
              "commonMistake": "Misattributing symptoms."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the recommended first-line treatment for Jordan?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Cognitive behavioral therapy with graded exposure and cognitive restructuring in an affirming context",
            "isCorrect": true,
            "weight": 3,
            "rationale": "First-line and affirming.",
            "explanation": {
              "approach": "Affirming CBT with exposure.",
              "rationale": "Strong evidence base.",
              "keyIndicators": [
                "avoidance",
                "evaluative fear"
              ],
              "commonMistake": "Skipping exposure."
            }
          },
          {
            "id": "b",
            "text": "Indefinite supportive counseling that avoids any exposure so Jordan never feels socially uncomfortable",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoidance maintains anxiety.",
            "explanation": {
              "approach": "Exposure-avoidant support.",
              "rationale": "Reinforces avoidance.",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Accommodating avoidance."
            }
          },
          {
            "id": "c",
            "text": "Psychodynamic exploration of early attachment with no present-focused skills for managing social situations",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Not first-line.",
            "explanation": {
              "approach": "Insight-only.",
              "rationale": "Less effective for social anxiety.",
              "keyIndicators": [
                "functional fear"
              ],
              "commonMistake": "Ignoring skills."
            }
          },
          {
            "id": "d",
            "text": "Immediate inpatient hospitalization to remove Jordan from all stressful social settings entirely",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Disproportionate.",
            "explanation": {
              "approach": "Overrestrictive care.",
              "rationale": "No acuity indication.",
              "keyIndicators": [
                "outpatient appropriate"
              ],
              "commonMistake": "Over-treating."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Which intake practice best honors Jordan's identity from the start?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Record only legal name and binary sex, deferring identity questions until much later in treatment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misgendering risk.",
            "explanation": {
              "approach": "Deferred identity.",
              "rationale": "Signals non-affirmation.",
              "keyIndicators": [
                "affirming need"
              ],
              "commonMistake": "Ignoring chosen name."
            }
          },
          {
            "id": "b",
            "text": "Ask for and consistently use Jordan's correct name and pronouns throughout the documentation and sessions",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Affirming and standard of care.",
            "explanation": {
              "approach": "Affirming intake practice.",
              "rationale": "Builds trust and accuracy.",
              "keyIndicators": [
                "non-binary",
                "judgment fear"
              ],
              "commonMistake": "Assuming pronouns."
            }
          },
          {
            "id": "c",
            "text": "Assume pronouns from appearance and avoid asking so the question does not seem intrusive",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Assumption causes harm.",
            "explanation": {
              "approach": "Pronoun assumption.",
              "rationale": "Frequently inaccurate.",
              "keyIndicators": [
                "identity"
              ],
              "commonMistake": "Guessing."
            }
          },
          {
            "id": "d",
            "text": "Ask Jordan to explain non-binary identity in detail to educate the clinician before proceeding",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Burdens client to educate.",
            "explanation": {
              "approach": "Client-as-educator.",
              "rationale": "Places undue burden.",
              "keyIndicators": [
                "minority stress"
              ],
              "commonMistake": "Tokenizing."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G058",
    "title": "Recent Overwhelming Stress After a Frightening Event",
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
        "id": "d1",
        "name": "Acute Stress Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Posttraumatic Stress Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Adjustment Disorder with Anxiety",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Maria, a 33-year-old first-generation immigrant from Central America, presents two weeks after a violent robbery, scanning the room repeatedly and startling at a hallway noise, her affect tense and tearful. In a hushed, tremulous voice she reports intrusive memories, nightmares, hypervigilance, and a sense of detachment, saying 'I keep seeing it, even with my eyes open.'",
      "session1": "Maria sits with arms crossed and shoulders raised, eye contact brief and wary, reporting trouble sleeping, startle responses, and avoidance of the area where the event occurred. Her speech is clipped and she lowers her voice, hesitant to share details with authorities, stating 'I don't know who I can trust here.'",
      "session2": "Maria's voice tightens and she leans back when confidentiality is raised, worrying aloud about immigration consequences. She speaks more slowly as she confirms her symptoms began within days of the event and have persisted for two weeks, her hands clasped tightly in her lap."
    },
    "diagnosticRationale": "Symptoms of intrusion, avoidance, arousal, and dissociation lasting from three days to one month after a traumatic event, within the acute window, support acute stress disorder rather than PTSD.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Acute stress disorder criteria and one-month window"
      },
      {
        "id": "R2",
        "source": "SAMHSA TIP 35",
        "detail": "Engaging clients and building trust"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Confidentiality and informed consent"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "How should the clinician approach Maria given her institutional mistrust?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Insist she report the crime to authorities immediately before therapy can address her symptoms",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Coercive and deepens mistrust.",
            "explanation": {
              "approach": "Coercive reporting demand.",
              "rationale": "Ignores her fears.",
              "keyIndicators": [
                "institutional mistrust"
              ],
              "commonMistake": "Forcing reporting."
            }
          },
          {
            "id": "b",
            "text": "Offer transparent, paced engagement, clarify confidentiality limits, and let Maria control disclosure pacing",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Builds safety and trust.",
            "explanation": {
              "approach": "Trauma-informed transparency.",
              "rationale": "Restores sense of control.",
              "keyIndicators": [
                "mistrust",
                "confidentiality worry"
              ],
              "commonMistake": "Rushing disclosure."
            }
          },
          {
            "id": "c",
            "text": "Gather every detail of the robbery in session one to complete the assessment thoroughly and quickly",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Risks retraumatization.",
            "explanation": {
              "approach": "Exhaustive early probing.",
              "rationale": "Can retraumatize.",
              "keyIndicators": [
                "intrusions"
              ],
              "commonMistake": "Over-probing detail."
            }
          },
          {
            "id": "d",
            "text": "Reassure her that nothing bad will ever happen again so she can stop worrying",
            "isCorrect": false,
            "weight": 0,
            "rationale": "False reassurance.",
            "explanation": {
              "approach": "False reassurance.",
              "rationale": "Undermines credibility.",
              "keyIndicators": [
                "hypervigilance"
              ],
              "commonMistake": "Promising safety."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "Maria becomes tearful describing nightmares. What is the best in-session response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Validate her distress, offer grounding, and check her readiness before continuing the discussion",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Supports regulation and safety.",
            "explanation": {
              "approach": "Grounding and pacing.",
              "rationale": "Keeps her within tolerance.",
              "keyIndicators": [
                "nightmares",
                "distress"
              ],
              "commonMistake": "Pushing through distress."
            }
          },
          {
            "id": "b",
            "text": "Encourage her to relive the full event in vivid detail right now to process it",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Premature exposure.",
            "explanation": {
              "approach": "Forced reliving.",
              "rationale": "Overwhelms early on.",
              "keyIndicators": [
                "acute phase"
              ],
              "commonMistake": "Exposure too soon."
            }
          },
          {
            "id": "c",
            "text": "Change the subject quickly to lighter topics so she will not feel any sadness",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoids her emotion.",
            "explanation": {
              "approach": "Emotional avoidance.",
              "rationale": "Invalidates experience.",
              "keyIndicators": [
                "tearfulness"
              ],
              "commonMistake": "Deflecting affect."
            }
          },
          {
            "id": "d",
            "text": "End the session early and reschedule, telling her she is too upset to continue",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Abrupt and dismissive.",
            "explanation": {
              "approach": "Premature termination.",
              "rationale": "Conveys she is too much.",
              "keyIndicators": [
                "distress"
              ],
              "commonMistake": "Cutting off support."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "What feature most supports acute stress disorder rather than PTSD?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Symptoms present for two weeks following a clearly traumatic event within the past month",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Fits the acute time window.",
            "explanation": {
              "approach": "Time-window reasoning.",
              "rationale": "ASD spans 3 days to 1 month.",
              "keyIndicators": [
                "two-week duration"
              ],
              "commonMistake": "Diagnosing PTSD early."
            }
          },
          {
            "id": "b",
            "text": "Symptoms persisting continuously for more than three months after the original traumatic event",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Indicates PTSD.",
            "explanation": {
              "approach": "Chronic-duration framing.",
              "rationale": "Exceeds ASD window.",
              "keyIndicators": [
                "duration"
              ],
              "commonMistake": "Misjudging timeframe."
            }
          },
          {
            "id": "c",
            "text": "A gradual onset of worry without any identifiable traumatic precipitating event at all",
            "isCorrect": false,
            "weight": -2,
            "rationale": "No trauma criterion met.",
            "explanation": {
              "approach": "No-trauma framing.",
              "rationale": "ASD requires trauma exposure.",
              "keyIndicators": [
                "clear trauma"
              ],
              "commonMistake": "Ignoring stressor."
            }
          },
          {
            "id": "d",
            "text": "Mild adjustment difficulties to a non-traumatic life change occurring over recent months",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Suggests adjustment disorder.",
            "explanation": {
              "approach": "Adjustment framing.",
              "rationale": "No trauma exposure.",
              "keyIndicators": [
                "traumatic event"
              ],
              "commonMistake": "Underrating severity."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the most appropriate early treatment for Maria?",
        "evidenceRef": [
          "R1",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Single-session critical incident debriefing requiring her to recount the trauma fully one time",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Not supported and may harm.",
            "explanation": {
              "approach": "Debriefing.",
              "rationale": "Lacks evidence; possible harm.",
              "keyIndicators": [
                "acute phase"
              ],
              "commonMistake": "Mandatory debrief."
            }
          },
          {
            "id": "b",
            "text": "Trauma-focused cognitive behavioral support with stabilization, psychoeducation, and culturally responsive engagement",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Evidence-based and respectful.",
            "explanation": {
              "approach": "Trauma-focused CBT support.",
              "rationale": "Reduces ASD and prevents PTSD.",
              "keyIndicators": [
                "intrusions",
                "arousal"
              ],
              "commonMistake": "Skipping stabilization."
            }
          },
          {
            "id": "c",
            "text": "Long-term insight-oriented therapy exploring childhood with no focus on the recent event itself, without further exploration",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misses presenting trauma.",
            "explanation": {
              "approach": "Childhood-only focus.",
              "rationale": "Neglects acute trauma.",
              "keyIndicators": [
                "recent trauma"
              ],
              "commonMistake": "Off-target focus."
            }
          },
          {
            "id": "d",
            "text": "Watchful waiting alone with no contact for several months to see if symptoms resolve",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Too passive for active distress.",
            "explanation": {
              "approach": "Passive waiting.",
              "rationale": "Misses active need.",
              "keyIndicators": [
                "current symptoms"
              ],
              "commonMistake": "Under-engagement."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "Maria fears information could reach immigration authorities. What should the clinician do?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Tell her the clinic shares all records with government agencies upon any request received",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Inaccurate and harmful.",
            "explanation": {
              "approach": "Misstating confidentiality.",
              "rationale": "False and damaging.",
              "keyIndicators": [
                "mistrust"
              ],
              "commonMistake": "Misinforming."
            }
          },
          {
            "id": "b",
            "text": "Avoid the topic entirely, hoping she forgets her concern about immigration consequences",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Leaves fear unaddressed.",
            "explanation": {
              "approach": "Avoidance.",
              "rationale": "Fails informed consent.",
              "keyIndicators": [
                "confidentiality worry"
              ],
              "commonMistake": "Dodging the question."
            }
          },
          {
            "id": "c",
            "text": "Clearly explain confidentiality protections and their specific limits so Maria can give informed consent",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Supports informed, autonomous decisions.",
            "explanation": {
              "approach": "Transparent informed consent.",
              "rationale": "Honors autonomy and ethics.",
              "keyIndicators": [
                "confidentiality",
                "mistrust"
              ],
              "commonMistake": "Vagueness about limits."
            }
          },
          {
            "id": "d",
            "text": "Promise absolute secrecy with no exceptions whatsoever to put her mind fully at ease",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Overpromises beyond limits.",
            "explanation": {
              "approach": "Absolute promise.",
              "rationale": "Ignores mandated limits.",
              "keyIndicators": [
                "limits exist"
              ],
              "commonMistake": "Overpromising."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G059",
    "title": "Limited Treatment Access in a Rural Setting",
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
        "id": "d1",
        "name": "Opioid Use Disorder, Severe",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Opioid Use Disorder, Moderate",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Sedative Use Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Adjustment Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Daniel, a 38-year-old low-income man in a rural county, arrives in worn work clothes, appearing fatigued and restless, his leg bouncing and eye contact intermittent. In a flat, tired voice he reports daily opioid use, failed efforts to cut down, tolerance, withdrawal, and use despite job loss and family strain, muttering 'I keep telling myself I'll stop, and I don't.'",
      "session1": "Daniel shifts often in his seat and rubs his arms as he endorses cravings, continued use despite harm, and at least eight criteria, his tone discouraged and resigned. He notes the nearest methadone clinic is two hours away and he has no reliable transportation, his voice trailing off.",
      "session2": "Daniel makes steadier eye contact and his tone lifts slightly when discussing change, though he remains discouraged by limited MAT access and cost. He admits, with audible apprehension, that he fears withdrawal and worries about being judged in his small community where 'everybody knows everybody.'"
    },
    "diagnosticRationale": "Presence of six or more criteria including tolerance, withdrawal, cravings, and continued use despite harm meets severe opioid use disorder; treatment planning must account for rural access barriers.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Opioid use disorder criteria and severity"
      },
      {
        "id": "R2",
        "source": "SAMHSA TIP 63",
        "detail": "Medications for opioid use disorder"
      },
      {
        "id": "R3",
        "source": "ASAM Criteria",
        "detail": "Level of care and access considerations"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "Daniel feels hopeless about access. What is the best counseling response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Use motivational interviewing to affirm his goals and collaboratively explore feasible access options",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Sustains motivation and problem-solves.",
            "explanation": {
              "approach": "Motivational, collaborative stance.",
              "rationale": "Strengthens change talk.",
              "keyIndicators": [
                "motivated",
                "access barriers"
              ],
              "commonMistake": "Ignoring ambivalence."
            }
          },
          {
            "id": "b",
            "text": "Tell him recovery is impossible without a nearby clinic so he should lower expectations",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Deepens hopelessness.",
            "explanation": {
              "approach": "Discouraging stance.",
              "rationale": "Undercuts motivation.",
              "keyIndicators": [
                "hopelessness"
              ],
              "commonMistake": "Conveying futility."
            }
          },
          {
            "id": "c",
            "text": "Lecture him about the dangers of opioids until he agrees to immediately stop using",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Confrontation breeds resistance.",
            "explanation": {
              "approach": "Lecturing.",
              "rationale": "Evokes resistance.",
              "keyIndicators": [
                "ambivalence"
              ],
              "commonMistake": "Righting reflex."
            }
          },
          {
            "id": "d",
            "text": "Wait for him to bring up solutions himself before offering any guidance at all",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Too passive given barriers.",
            "explanation": {
              "approach": "Passive waiting.",
              "rationale": "Misses needed support.",
              "keyIndicators": [
                "barriers"
              ],
              "commonMistake": "Under-engaging."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "Daniel says he should be able to quit on willpower alone. Best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Agree fully and discourage medication, framing MAT as merely trading one drug for another",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Stigmatizing misinformation.",
            "explanation": {
              "approach": "MAT stigma.",
              "rationale": "Contradicts evidence.",
              "keyIndicators": [
                "severe OUD"
              ],
              "commonMistake": "Endorsing willpower myth."
            }
          },
          {
            "id": "b",
            "text": "Explore his beliefs and share that medication plus counseling is effective evidence-based treatment",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Corrects myth respectfully.",
            "explanation": {
              "approach": "Reflective psychoeducation.",
              "rationale": "Aligns with evidence.",
              "keyIndicators": [
                "withdrawal",
                "cravings"
              ],
              "commonMistake": "Dismissing his view."
            }
          },
          {
            "id": "c",
            "text": "Insist he is wrong and demand he start medication today regardless of his readiness",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Coercive.",
            "explanation": {
              "approach": "Coercion.",
              "rationale": "Ignores autonomy.",
              "keyIndicators": [
                "readiness"
              ],
              "commonMistake": "Forcing decisions."
            }
          },
          {
            "id": "d",
            "text": "Tell him willpower is the only proven path and document his refusal of services",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Abandons evidence-based care.",
            "explanation": {
              "approach": "Endorsing myth.",
              "rationale": "Unsupported.",
              "keyIndicators": [
                "evidence base"
              ],
              "commonMistake": "Premature documentation of refusal."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which finding most supports a severe specifier for opioid use disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Two diagnostic criteria present over the past year with minimal functional impairment overall",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Indicates mild.",
            "explanation": {
              "approach": "Two-criteria framing.",
              "rationale": "Mild, not severe.",
              "keyIndicators": [
                "criteria count"
              ],
              "commonMistake": "Undercounting."
            }
          },
          {
            "id": "b",
            "text": "Six or more criteria including tolerance, withdrawal, cravings, and use despite clear harm",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Meets severe threshold.",
            "explanation": {
              "approach": "Criteria-count reasoning.",
              "rationale": "Six-plus equals severe.",
              "keyIndicators": [
                "eight criteria"
              ],
              "commonMistake": "Ignoring severity count."
            }
          },
          {
            "id": "c",
            "text": "Occasional recreational use without tolerance, withdrawal, or any loss of control reported",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Not a disorder.",
            "explanation": {
              "approach": "Non-pathological use.",
              "rationale": "No criteria met.",
              "keyIndicators": [
                "no impairment"
              ],
              "commonMistake": "Overlabeling use."
            }
          },
          {
            "id": "d",
            "text": "Four diagnostic criteria with moderate impairment but no physiological tolerance or withdrawal",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Indicates moderate.",
            "explanation": {
              "approach": "Moderate framing.",
              "rationale": "Below severe threshold.",
              "keyIndicators": [
                "criteria count"
              ],
              "commonMistake": "Underrating severity."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Given rural barriers, what treatment plan best fits Daniel?",
        "evidenceRef": [
          "R2",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Counseling only, deferring any medication until he can travel to a distant clinic",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Delays effective MAT.",
            "explanation": {
              "approach": "Counseling-only delay.",
              "rationale": "Misses MAT benefit.",
              "keyIndicators": [
                "severe OUD"
              ],
              "commonMistake": "Withholding medication."
            }
          },
          {
            "id": "b",
            "text": "Office-based buprenorphine via telehealth plus counseling, coordinating transport and local supports",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Maximizes access and evidence.",
            "explanation": {
              "approach": "Telehealth MAT with supports.",
              "rationale": "Overcomes rural barriers.",
              "keyIndicators": [
                "access limits",
                "transportation"
              ],
              "commonMistake": "Assuming MAT is unavailable."
            }
          },
          {
            "id": "c",
            "text": "Immediate residential placement two hours away despite his transportation and financial constraints",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Ignores feasibility.",
            "explanation": {
              "approach": "Inaccessible residential.",
              "rationale": "Not feasible for him.",
              "keyIndicators": [
                "no transport"
              ],
              "commonMistake": "Ignoring access."
            }
          },
          {
            "id": "d",
            "text": "Brief education session and discharge, advising him to seek help if symptoms worsen",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Inadequate for severe OUD.",
            "explanation": {
              "approach": "Minimal intervention.",
              "rationale": "Undertreats severity.",
              "keyIndicators": [
                "severe OUD"
              ],
              "commonMistake": "Premature discharge."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "Daniel worries the small community will learn he is in treatment. What applies?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Explain heightened confidentiality protections for substance treatment and how his information will be safeguarded",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Addresses valid privacy concern.",
            "explanation": {
              "approach": "Confidentiality education.",
              "rationale": "Builds trust and meets law.",
              "keyIndicators": [
                "community stigma"
              ],
              "commonMistake": "Minimizing privacy."
            }
          },
          {
            "id": "b",
            "text": "Tell him privacy cannot be guaranteed in small towns so he should expect disclosure",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Discourages and misstates.",
            "explanation": {
              "approach": "Discouraging misstatement.",
              "rationale": "Inaccurate and harmful.",
              "keyIndicators": [
                "stigma fear"
              ],
              "commonMistake": "Undermining privacy."
            }
          },
          {
            "id": "c",
            "text": "Suggest he keep treatment secret from everyone, including his own treating medical providers",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Harms care coordination.",
            "explanation": {
              "approach": "Over-secrecy.",
              "rationale": "Impairs safe care.",
              "keyIndicators": [
                "coordination need"
              ],
              "commonMistake": "Encouraging concealment."
            }
          },
          {
            "id": "d",
            "text": "Avoid discussing confidentiality and proceed directly into the treatment plan without addressing it",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Skips informed consent.",
            "explanation": {
              "approach": "Skipping consent.",
              "rationale": "Fails ethical duty.",
              "keyIndicators": [
                "privacy worry"
              ],
              "commonMistake": "Omitting consent."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G060",
    "title": "Entitlement and Transition Struggles in a Veteran",
    "category": "Personality",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Narcissistic Personality Disorder",
      "code": "F60.81"
    },
    "diagnosis": {
      "name": "Narcissistic Personality Disorder",
      "code": "F60.81"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Narcissistic Personality Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Antisocial Personality Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Adjustment Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Posttraumatic Stress Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Marcus, a 45-year-old military veteran, enters with an upright, commanding posture, firm handshake, and immaculate grooming, his affect confident bordering on irritable. He seeks help after civilian job conflicts and describes himself in a loud, assured voice as superior to coworkers and entitled to leadership roles he has not earned, stating 'they don't have a clue what real leadership looks like.'",
      "session1": "Marcus speaks rapidly and emphatically, leaning forward and gesturing, displaying grandiosity, need for admiration, and limited empathy. His jaw tightens and his volume rises when he describes criticism, reacting with anger and devaluing others as he struggles to adapt to civilian hierarchy.",
      "session2": "With a dismissive tone and a faint smirk, Marcus reports longstanding patterns across settings, predating service. He minimizes others' contributions and, sitting back with arms folded, asserts that civilians fail to recognize his exceptional abilities."
    },
    "diagnosticRationale": "A pervasive, longstanding pattern of grandiosity, need for admiration, entitlement, and lack of empathy across contexts, not limited to a stress reaction, supports narcissistic personality disorder.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Narcissistic personality disorder criteria"
      },
      {
        "id": "R2",
        "source": "Corey (Theory & Practice)",
        "detail": "Managing alliance and counter-transference"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Nonjudgmental respect for client dignity"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "Marcus devalues the clinician's credentials early on. Best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Defend your qualifications at length to establish authority before any further clinical work begins",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Power struggle harms alliance.",
            "explanation": {
              "approach": "Defensive posturing.",
              "rationale": "Fuels conflict.",
              "keyIndicators": [
                "devaluation"
              ],
              "commonMistake": "Taking the bait."
            }
          },
          {
            "id": "b",
            "text": "Stay nondefensive, manage counter-transference, and gently explore what prompts his devaluing remarks",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Preserves alliance and insight.",
            "explanation": {
              "approach": "Nondefensive exploration.",
              "rationale": "Keeps the alliance intact.",
              "keyIndicators": [
                "devaluation",
                "criticism sensitivity"
              ],
              "commonMistake": "Reacting defensively."
            }
          },
          {
            "id": "c",
            "text": "Confront his arrogance bluntly so he understands how off-putting his attitude is",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Provokes rupture.",
            "explanation": {
              "approach": "Blunt confrontation.",
              "rationale": "Triggers rage and dropout.",
              "keyIndicators": [
                "anger to criticism"
              ],
              "commonMistake": "Shaming."
            }
          },
          {
            "id": "d",
            "text": "Agree he is more capable than most so he will feel validated and stay engaged",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Colludes with grandiosity.",
            "explanation": {
              "approach": "Colluding.",
              "rationale": "Reinforces pathology.",
              "keyIndicators": [
                "grandiosity"
              ],
              "commonMistake": "Excessive flattery."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "Marcus expresses contempt for coworkers. How should the clinician proceed?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Validate that everyone beneath him truly is incompetent and focus on changing his workplace",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reinforces distortion.",
            "explanation": {
              "approach": "Endorsing contempt.",
              "rationale": "Maintains dysfunction.",
              "keyIndicators": [
                "devaluation"
              ],
              "commonMistake": "Validating distortion."
            }
          },
          {
            "id": "b",
            "text": "Reflect his frustration and curiously explore how these patterns affect his relationships and goals",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Builds insight gently.",
            "explanation": {
              "approach": "Empathic curiosity.",
              "rationale": "Links pattern to consequences.",
              "keyIndicators": [
                "contempt",
                "conflict"
              ],
              "commonMistake": "Lecturing on empathy."
            }
          },
          {
            "id": "c",
            "text": "Tell him he must immediately apologize to coworkers before the next therapy session occurs",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature directive.",
            "explanation": {
              "approach": "Premature directive.",
              "rationale": "No buy-in yet.",
              "keyIndicators": [
                "limited empathy"
              ],
              "commonMistake": "Forcing behavior change."
            }
          },
          {
            "id": "d",
            "text": "Ignore the contempt and redirect to unrelated topics to avoid any tension in session",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Misses clinical material.",
            "explanation": {
              "approach": "Avoidance.",
              "rationale": "Bypasses core issue.",
              "keyIndicators": [
                "interpersonal pattern"
              ],
              "commonMistake": "Sidestepping."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which finding best distinguishes NPD from an adjustment reaction to civilian transition?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Symptoms emerging only after discharge and limited strictly to the new civilian workplace, without further exploration",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Suggests adjustment.",
            "explanation": {
              "approach": "Situational-onset framing.",
              "rationale": "Too narrow for NPD.",
              "keyIndicators": [
                "recent onset"
              ],
              "commonMistake": "Confusing adjustment."
            }
          },
          {
            "id": "b",
            "text": "Pervasive longstanding grandiosity and entitlement across many settings, predating his military service",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Trait pervasiveness supports NPD.",
            "explanation": {
              "approach": "Pervasiveness reasoning.",
              "rationale": "Personality is enduring and broad.",
              "keyIndicators": [
                "predates service",
                "across settings"
              ],
              "commonMistake": "Mistaking traits for adjustment."
            }
          },
          {
            "id": "c",
            "text": "Brief low mood resolving within weeks once he secures a satisfying new position",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Indicates adjustment.",
            "explanation": {
              "approach": "Transient framing.",
              "rationale": "Not enduring pattern.",
              "keyIndicators": [
                "short course"
              ],
              "commonMistake": "Underdiagnosing trait."
            }
          },
          {
            "id": "d",
            "text": "A pattern of deceit and rule-breaking with disregard for the rights of others",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Suggests antisocial PD.",
            "explanation": {
              "approach": "Antisocial framing.",
              "rationale": "Different pattern.",
              "keyIndicators": [
                "no criminality"
              ],
              "commonMistake": "Confusing personality disorders."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What treatment focus best fits Marcus?",
        "evidenceRef": [
          "R1",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "A steady alliance addressing vulnerability beneath grandiosity, building empathy and adaptive coping over time",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Targets core dynamics realistically.",
            "explanation": {
              "approach": "Alliance-focused depth work.",
              "rationale": "Reaches underlying fragility.",
              "keyIndicators": [
                "grandiosity",
                "criticism sensitivity"
              ],
              "commonMistake": "Expecting quick change."
            }
          },
          {
            "id": "b",
            "text": "Short skills-only program eliminating narcissistic traits within a handful of brief structured sessions",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Unrealistic for personality work.",
            "explanation": {
              "approach": "Quick-fix skills.",
              "rationale": "Underestimates difficulty.",
              "keyIndicators": [
                "enduring traits"
              ],
              "commonMistake": "Overpromising speed."
            }
          },
          {
            "id": "c",
            "text": "Confrontational group therapy designed to forcefully break down his defenses as fast as possible",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Risks rupture and dropout.",
            "explanation": {
              "approach": "Confrontational group.",
              "rationale": "Triggers narcissistic injury.",
              "keyIndicators": [
                "fragile self"
              ],
              "commonMistake": "Harsh confrontation."
            }
          },
          {
            "id": "d",
            "text": "Medication management alone, assuming pharmacology will resolve the personality pattern without therapy",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Meds do not treat the disorder.",
            "explanation": {
              "approach": "Medication-only.",
              "rationale": "No primary pharmacotherapy.",
              "keyIndicators": [
                "personality disorder"
              ],
              "commonMistake": "Over-relying on meds."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "The clinician feels irritation toward Marcus. What is the ethical course?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Let the irritation guide subtle confrontations to teach Marcus how others experience him",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Acting on countertransference.",
            "explanation": {
              "approach": "Acting out reactions.",
              "rationale": "Harms the client.",
              "keyIndicators": [
                "countertransference"
              ],
              "commonMistake": "Punitive responses."
            }
          },
          {
            "id": "b",
            "text": "Maintain respect for his dignity, seek supervision, and manage reactions to preserve effective care",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Upholds dignity and competence.",
            "explanation": {
              "approach": "Supervision and self-management.",
              "rationale": "Protects client welfare.",
              "keyIndicators": [
                "irritation",
                "dignity"
              ],
              "commonMistake": "Ignoring countertransference."
            }
          },
          {
            "id": "c",
            "text": "Transfer him immediately to another clinician without discussion because he is difficult to like",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature abandonment.",
            "explanation": {
              "approach": "Reactive transfer.",
              "rationale": "Avoids growth and duty.",
              "keyIndicators": [
                "difficult client"
              ],
              "commonMistake": "Dumping clients."
            }
          },
          {
            "id": "d",
            "text": "Suppress all feelings and proceed without reflection so the work continues uninterrupted",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Unexamined reactions leak.",
            "explanation": {
              "approach": "Suppression.",
              "rationale": "Reactions still influence care.",
              "keyIndicators": [
                "self-awareness"
              ],
              "commonMistake": "Ignoring inner reactions."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G061",
    "title": "Mood Swings and Somatic Complaints Amid Family Expectations",
    "category": "Bipolar",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Bipolar II Disorder",
      "code": "F31.81"
    },
    "diagnosis": {
      "name": "Bipolar II Disorder",
      "code": "F31.81"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Bipolar II Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Bipolar I Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Cyclothymic Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Linh, a 29-year-old Asian American woman, sits composed but visibly tired, her grooming neat and affect somewhat constricted, eye contact polite and brief. She reports recurrent depression and periods of elevated energy and reduced sleep, often presenting her distress through headaches and fatigue, noting quietly 'mostly my body just hurts and I can't sleep.'",
      "session1": "Linh's speech is measured and soft, with a slight animation when she describes discrete hypomanic periods lasting several days with increased activity and confidence, never requiring hospitalization, alternating with longer depressive episodes. She tends to frame these shifts in physical rather than emotional terms.",
      "session2": "Linh's tone grows tense and her gaze drops when discussing family, voicing pressure to meet their expectations and framing symptoms somatically. She acknowledges, with a faint reluctant smile, that her hypomanic episodes are noticeable to others but never markedly impairing or psychotic."
    },
    "diagnosticRationale": "A history of major depressive episodes plus at least one hypomanic episode without full mania, marked change observable by others but without severe impairment or psychosis, supports bipolar II disorder.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Bipolar II disorder and hypomania criteria"
      },
      {
        "id": "R2",
        "source": "IPSRT",
        "detail": "Social rhythm stabilization for bipolar disorder"
      },
      {
        "id": "R3",
        "source": "Hays (Assessment)",
        "detail": "Somatic expression and cultural context"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "Linh presents distress as headaches and fatigue. Best counseling response?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Validate her somatic experience while gently exploring linked mood and energy patterns over time",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Respects cultural expression and gathers data.",
            "explanation": {
              "approach": "Validate then bridge to mood.",
              "rationale": "Honors somatic framing.",
              "keyIndicators": [
                "somatic presentation",
                "family pressure"
              ],
              "commonMistake": "Dismissing somatic complaints."
            }
          },
          {
            "id": "b",
            "text": "Tell her the headaches are not real and her true problem is purely psychological",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Invalidating and inaccurate.",
            "explanation": {
              "approach": "Dismissing symptoms.",
              "rationale": "Alienates client.",
              "keyIndicators": [
                "somatic framing"
              ],
              "commonMistake": "Mind-body dualism."
            }
          },
          {
            "id": "c",
            "text": "Refer her only to medical providers and avoid discussing mood concerns altogether in counseling",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misses mood component.",
            "explanation": {
              "approach": "Medical-only referral.",
              "rationale": "Overlooks bipolar pattern.",
              "keyIndicators": [
                "mood swings"
              ],
              "commonMistake": "Splitting care prematurely."
            }
          },
          {
            "id": "d",
            "text": "Insist she stop focusing on physical symptoms and only describe her emotions in session",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Disregards her framework.",
            "explanation": {
              "approach": "Forcing emotional focus.",
              "rationale": "Ignores cultural expression.",
              "keyIndicators": [
                "somatic emphasis"
              ],
              "commonMistake": "Imposing framework."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "Linh fears family will see therapy as failure. Best response?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Dismiss her worry, insisting that her family's views should not matter to her decisions",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Invalidates cultural value.",
            "explanation": {
              "approach": "Dismissing family role.",
              "rationale": "Ignores collectivist context.",
              "keyIndicators": [
                "family expectations"
              ],
              "commonMistake": "Imposing individualism."
            }
          },
          {
            "id": "b",
            "text": "Explore the meaning of family expectations and collaborate on how she wishes to involve them",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Respects values and autonomy.",
            "explanation": {
              "approach": "Collaborative exploration.",
              "rationale": "Honors cultural context.",
              "keyIndicators": [
                "family pressure",
                "shame concern"
              ],
              "commonMistake": "Ignoring family meaning."
            }
          },
          {
            "id": "c",
            "text": "Recommend she immediately disclose her diagnosis to her entire family to reduce her secrecy",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature and risky.",
            "explanation": {
              "approach": "Forced disclosure.",
              "rationale": "May increase harm.",
              "keyIndicators": [
                "family shame"
              ],
              "commonMistake": "Pushing disclosure."
            }
          },
          {
            "id": "d",
            "text": "Advise her to hide treatment permanently from family so she avoids any possible conflict",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Reinforces shame.",
            "explanation": {
              "approach": "Encouraging concealment.",
              "rationale": "Maintains shame.",
              "keyIndicators": [
                "secrecy"
              ],
              "commonMistake": "Defaulting to hiding."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which finding best distinguishes bipolar II from bipolar I disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Hypomanic episodes lasting days with noticeable change but no marked impairment or psychosis",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Hypomania defines bipolar II.",
            "explanation": {
              "approach": "Hypomania-versus-mania reasoning.",
              "rationale": "No full mania present.",
              "keyIndicators": [
                "no hospitalization",
                "no psychosis"
              ],
              "commonMistake": "Mislabeling hypomania as mania."
            }
          },
          {
            "id": "b",
            "text": "Full manic episodes with severe impairment requiring hospitalization at least once before",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Indicates bipolar I.",
            "explanation": {
              "approach": "Mania framing.",
              "rationale": "Not present here.",
              "keyIndicators": [
                "no mania"
              ],
              "commonMistake": "Overcalling mania."
            }
          },
          {
            "id": "c",
            "text": "Chronic mild mood fluctuations for two years never meeting full episode criteria",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Suggests cyclothymia.",
            "explanation": {
              "approach": "Subthreshold framing.",
              "rationale": "Episodes here meet criteria.",
              "keyIndicators": [
                "full depressive episodes"
              ],
              "commonMistake": "Underdiagnosing."
            }
          },
          {
            "id": "d",
            "text": "Depressive episodes only, with no history of any elevated or expansive mood periods",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Indicates unipolar depression.",
            "explanation": {
              "approach": "Unipolar framing.",
              "rationale": "Misses hypomania.",
              "keyIndicators": [
                "hypomanic history"
              ],
              "commonMistake": "Missing elevated periods."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Which psychosocial intervention best supports Linh's stability?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Open-ended supportive talk with no attention to sleep, routines, or daily rhythm patterns",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misses rhythm regulation.",
            "explanation": {
              "approach": "Unstructured support.",
              "rationale": "Ignores rhythm stability.",
              "keyIndicators": [
                "reduced sleep"
              ],
              "commonMistake": "Neglecting routines."
            }
          },
          {
            "id": "b",
            "text": "Interpersonal and social rhythm therapy stabilizing daily routines, sleep, and interpersonal stressors",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Evidence-based for bipolar.",
            "explanation": {
              "approach": "Social rhythm stabilization.",
              "rationale": "Regulates rhythms and mood.",
              "keyIndicators": [
                "sleep change",
                "mood cycling"
              ],
              "commonMistake": "Ignoring rhythm work."
            }
          },
          {
            "id": "c",
            "text": "Exposure therapy targeting feared situations as the central focus of her ongoing treatment",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Mismatched to bipolar.",
            "explanation": {
              "approach": "Exposure focus.",
              "rationale": "Not indicated here.",
              "keyIndicators": [
                "mood disorder"
              ],
              "commonMistake": "Wrong modality."
            }
          },
          {
            "id": "d",
            "text": "Stimulant-based activation strategies to push her energy higher during depressive low periods",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Risks destabilization.",
            "explanation": {
              "approach": "Activation overdrive.",
              "rationale": "Could trigger hypomania.",
              "keyIndicators": [
                "mood instability"
              ],
              "commonMistake": "Destabilizing approach."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "What is essential when documenting Linh's hypomanic episodes?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Record only her depressive symptoms since those bring her into treatment most often",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Incomplete and risks misdiagnosis.",
            "explanation": {
              "approach": "Depression-only record.",
              "rationale": "Misses bipolar pattern.",
              "keyIndicators": [
                "hypomania"
              ],
              "commonMistake": "Omitting elevation."
            }
          },
          {
            "id": "b",
            "text": "Document episode duration, observable change, functioning, and absence of psychosis to support accurate diagnosis",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Captures criteria for diagnosis.",
            "explanation": {
              "approach": "Criterion-based documentation.",
              "rationale": "Supports accurate coding.",
              "keyIndicators": [
                "duration",
                "no psychosis"
              ],
              "commonMistake": "Vague notes."
            }
          },
          {
            "id": "c",
            "text": "Note simply that she seems moody without specifying duration, severity, or functional impact, without further exploration",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Too vague to be clinically useful.",
            "explanation": {
              "approach": "Vague labeling.",
              "rationale": "Lacks diagnostic value.",
              "keyIndicators": [
                "specificity needed"
              ],
              "commonMistake": "Imprecise documentation."
            }
          },
          {
            "id": "d",
            "text": "Defer documentation until later sessions so the record stays uncluttered for now",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Delays accurate care.",
            "explanation": {
              "approach": "Delayed documentation.",
              "rationale": "Risks lost detail.",
              "keyIndicators": [
                "timely records"
              ],
              "commonMistake": "Postponing notes."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G062",
    "title": "Mood Episodes with Psychosis and Community Disconnection",
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
        "id": "d1",
        "name": "Schizoaffective Disorder, Bipolar Type",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Bipolar I Disorder with psychotic features",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Schizophrenia",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Major Depressive Disorder with psychotic features",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Joseph, a 34-year-old Indigenous man, sits quietly with a calm but watchful demeanor, eye contact steady yet reserved, his affect measured. In an even, deliberate voice he reports manic and depressive episodes alongside hallucinations and delusions that persist even when his mood is stable for weeks at a time, noting 'the voices don't wait for my moods.'",
      "session1": "Joseph speaks thoughtfully and at a slow pace, occasionally pausing to choose words, describing auditory hallucinations during euthymic periods plus distinct mood episodes. His tone deepens with feeling as he references historical trauma and disconnection from community healing practices.",
      "session2": "Joseph's expression softens and his voice warms when he speaks of traditional healing and community ties. He clarifies calmly that psychotic symptoms occur both with and independent of mood episodes, persisting beyond mood disturbances."
    },
    "diagnosticRationale": "Mood episodes meeting criteria for mania and depression, combined with psychotic symptoms occurring for two or more weeks absent prominent mood symptoms, supports schizoaffective disorder, bipolar type.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Schizoaffective disorder criteria"
      },
      {
        "id": "R2",
        "source": "Hays (Assessment)",
        "detail": "Historical trauma and culturally grounded care"
      },
      {
        "id": "R3",
        "source": "APA CPG",
        "detail": "Integrated treatment for psychotic disorders"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "Joseph values traditional healing. How should the clinician respond?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Discourage traditional practices, warning they will interfere with the effectiveness of clinical treatment",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dismisses cultural strengths.",
            "explanation": {
              "approach": "Dismissing tradition.",
              "rationale": "Harms trust and engagement.",
              "keyIndicators": [
                "community healing"
              ],
              "commonMistake": "Pathologizing culture."
            }
          },
          {
            "id": "b",
            "text": "Respect his healing practices and collaboratively integrate community supports alongside evidence-based clinical care",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Integrates strengths and evidence.",
            "explanation": {
              "approach": "Integrative, respectful care.",
              "rationale": "Honors culture and treatment.",
              "keyIndicators": [
                "traditional healing",
                "community ties"
              ],
              "commonMistake": "Forcing one model."
            }
          },
          {
            "id": "c",
            "text": "Tell him to choose between traditional healing and counseling because the two cannot coexist",
            "isCorrect": false,
            "weight": -1,
            "rationale": "False dichotomy.",
            "explanation": {
              "approach": "Either-or framing.",
              "rationale": "Alienates the client.",
              "keyIndicators": [
                "cultural values"
              ],
              "commonMistake": "Forcing a choice."
            }
          },
          {
            "id": "d",
            "text": "Ignore the cultural content and focus only on medication adherence throughout every session",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Neglects key context.",
            "explanation": {
              "approach": "Culture-blind focus.",
              "rationale": "Misses engagement lever.",
              "keyIndicators": [
                "historical trauma"
              ],
              "commonMistake": "Overlooking culture."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "Joseph mentions historical trauma affecting his community. Best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Acknowledge historical trauma's impact and explore how it shapes his experience and supports",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Validates and contextualizes.",
            "explanation": {
              "approach": "Contextual validation.",
              "rationale": "Connects history to present.",
              "keyIndicators": [
                "historical trauma",
                "disconnection"
              ],
              "commonMistake": "Ignoring collective trauma."
            }
          },
          {
            "id": "b",
            "text": "Tell him historical events are in the past and have no bearing on his symptoms",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Invalidating and inaccurate.",
            "explanation": {
              "approach": "Dismissing history.",
              "rationale": "Erases real impact.",
              "keyIndicators": [
                "historical trauma"
              ],
              "commonMistake": "Minimizing context."
            }
          },
          {
            "id": "c",
            "text": "Redirect immediately to symptom checklists without acknowledging the meaning of what he shared",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misses relational moment.",
            "explanation": {
              "approach": "Checklist redirect.",
              "rationale": "Breaks connection.",
              "keyIndicators": [
                "disclosure"
              ],
              "commonMistake": "Ignoring disclosure."
            }
          },
          {
            "id": "d",
            "text": "Promise to single-handedly resolve his community's historical wounds through individual therapy alone",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Overreaching and unrealistic.",
            "explanation": {
              "approach": "Savior framing.",
              "rationale": "Beyond scope.",
              "keyIndicators": [
                "collective issue"
              ],
              "commonMistake": "Overpromising."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature best distinguishes schizoaffective disorder from bipolar with psychotic features?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Psychotic symptoms occurring only during the height of full manic or depressive episodes",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That is mood disorder with psychosis.",
            "explanation": {
              "approach": "Mood-bound psychosis.",
              "rationale": "Points to bipolar with features.",
              "keyIndicators": [
                "timing"
              ],
              "commonMistake": "Confusing the two."
            }
          },
          {
            "id": "b",
            "text": "Persistent hallucinations and delusions present for weeks while mood symptoms are absent",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Independent psychosis defines schizoaffective.",
            "explanation": {
              "approach": "Independent-psychosis reasoning.",
              "rationale": "Psychosis outlasts mood episodes.",
              "keyIndicators": [
                "psychosis when euthymic"
              ],
              "commonMistake": "Missing independent psychosis."
            }
          },
          {
            "id": "c",
            "text": "Complete absence of any mood episodes throughout the entire course of illness",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Suggests schizophrenia.",
            "explanation": {
              "approach": "No-mood framing.",
              "rationale": "Mood episodes are present.",
              "keyIndicators": [
                "mood episodes"
              ],
              "commonMistake": "Overcalling schizophrenia."
            }
          },
          {
            "id": "d",
            "text": "Brief psychotic symptoms lasting under one day that resolve completely without any treatment",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Suggests brief psychosis.",
            "explanation": {
              "approach": "Brief-psychosis framing.",
              "rationale": "Duration too short.",
              "keyIndicators": [
                "persistent psychosis"
              ],
              "commonMistake": "Underrating duration."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What treatment approach best fits Joseph?",
        "evidenceRef": [
          "R3",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Psychotherapy alone without medication, relying solely on insight to address his psychotic symptoms",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Insufficient for psychosis.",
            "explanation": {
              "approach": "Therapy-only.",
              "rationale": "Inadequate for psychosis.",
              "keyIndicators": [
                "hallucinations"
              ],
              "commonMistake": "Withholding medication."
            }
          },
          {
            "id": "b",
            "text": "Integrated care combining medication, psychosocial support, and culturally grounded community healing resources",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Comprehensive and culturally responsive.",
            "explanation": {
              "approach": "Integrated, culturally grounded care.",
              "rationale": "Addresses illness and context.",
              "keyIndicators": [
                "psychosis",
                "community healing"
              ],
              "commonMistake": "Neglecting culture or meds."
            }
          },
          {
            "id": "c",
            "text": "Medication management only, with no attention to psychosocial needs or cultural connection at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misses recovery supports.",
            "explanation": {
              "approach": "Meds-only.",
              "rationale": "Ignores psychosocial factors.",
              "keyIndicators": [
                "disconnection"
              ],
              "commonMistake": "Narrow biomedical focus."
            }
          },
          {
            "id": "d",
            "text": "Indefinite hospitalization regardless of his stability, removing him from community and healing supports",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Overrestrictive.",
            "explanation": {
              "approach": "Overrestriction.",
              "rationale": "Severs community ties.",
              "keyIndicators": [
                "periods of stability"
              ],
              "commonMistake": "Defaulting to inpatient."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "Joseph requests including a traditional healer in his care. What is appropriate?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Refuse outright, telling him only licensed clinicians may take part in his treatment",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Disrespects culture and autonomy.",
            "explanation": {
              "approach": "Outright refusal.",
              "rationale": "Ignores client values.",
              "keyIndicators": [
                "traditional healing"
              ],
              "commonMistake": "Rigid gatekeeping."
            }
          },
          {
            "id": "b",
            "text": "Support his autonomy, coordinate respectfully with consent, and integrate the healer into collaborative care",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Honors autonomy and culture ethically.",
            "explanation": {
              "approach": "Collaborative coordination.",
              "rationale": "Respects client and ethics.",
              "keyIndicators": [
                "client request",
                "community healing"
              ],
              "commonMistake": "Excluding cultural healers."
            }
          },
          {
            "id": "c",
            "text": "Agree but secretly disregard the healer's input when planning his actual treatment goals",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Disingenuous and disrespectful.",
            "explanation": {
              "approach": "Tokenism.",
              "rationale": "Undermines trust.",
              "keyIndicators": [
                "respect"
              ],
              "commonMistake": "Performative inclusion."
            }
          },
          {
            "id": "d",
            "text": "Defer the decision indefinitely, avoiding any commitment about involving the healer in care",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Evades the request.",
            "explanation": {
              "approach": "Indefinite deferral.",
              "rationale": "Fails to engage.",
              "keyIndicators": [
                "client autonomy"
              ],
              "commonMistake": "Stalling."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G063",
    "title": "Progressive Memory Decline and Caregiver Strain",
    "category": "Neurocognitive",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Major Neurocognitive Disorder due to Alzheimer's Disease",
      "code": "F02.80"
    },
    "diagnosis": {
      "name": "Major Neurocognitive Disorder due to Alzheimer's Disease",
      "code": "F02.80"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Major Neurocognitive Disorder due to Alzheimer's Disease",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Mild Neurocognitive Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Delirium",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "An adult son who uses a wheelchair brings his 78-year-old mother, Dorothy, who appears disheveled and disoriented, glancing around uncertainly with a perplexed, flat affect. She shows progressive memory loss, disorientation, and declining independence over two years, interfering with daily living, and answers questions slowly with vague, repetitive phrasing.",
      "session1": "Dorothy shows gradual, insidious cognitive decline without fluctuating attention, her speech halting and tangential as she loses the thread of questions. The son, speaking in a strained, weary tone, reports significant caregiver burden and accessibility challenges in providing daily care, his eyes tired.",
      "session2": "Dorothy's deficits are persistent and progressive, not better explained by depression or delirium, and she remains pleasantly vague throughout. The son's voice catches as he admits, shoulders sagging, that he feels overwhelmed and isolated managing care with his own disability."
    },
    "diagnosticRationale": "Insidious, progressive decline in memory and other cognitive domains causing loss of independence, without fluctuating consciousness, supports major neurocognitive disorder due to Alzheimer's disease.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Major neurocognitive disorder due to Alzheimer's criteria"
      },
      {
        "id": "R2",
        "source": "Corey (Theory & Practice)",
        "detail": "Caregiver support and family systems"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Accessibility and accommodation"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "The son appears exhausted and overwhelmed. Best counseling response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Tell him caregiving is his duty and he should simply manage his stress alone",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dismissive of burden.",
            "explanation": {
              "approach": "Dismissing burden.",
              "rationale": "Increases isolation.",
              "keyIndicators": [
                "caregiver burden"
              ],
              "commonMistake": "Minimizing strain."
            }
          },
          {
            "id": "b",
            "text": "Validate his caregiver burden, assess support needs, and explore accessible respite and resources",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Addresses burden and supports.",
            "explanation": {
              "approach": "Burden assessment and support.",
              "rationale": "Targets caregiver wellbeing.",
              "keyIndicators": [
                "exhaustion",
                "isolation"
              ],
              "commonMistake": "Ignoring the caregiver."
            }
          },
          {
            "id": "c",
            "text": "Focus exclusively on the mother's symptoms and disregard the son's emotional state entirely",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Neglects the caregiver.",
            "explanation": {
              "approach": "Patient-only focus.",
              "rationale": "Misses caregiver needs.",
              "keyIndicators": [
                "caregiver strain"
              ],
              "commonMistake": "Overlooking caregiver."
            }
          },
          {
            "id": "d",
            "text": "Suggest he place his mother in a facility today to eliminate his stress immediately",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Premature directive.",
            "explanation": {
              "approach": "Premature placement advice.",
              "rationale": "Skips assessment and values.",
              "keyIndicators": [
                "complex decision"
              ],
              "commonMistake": "Rushing decisions."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "The son feels guilty about needing help due to his own disability. Best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Reassure him his disability does not matter and he must simply push through regardless, without further exploration",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismisses real limits.",
            "explanation": {
              "approach": "Dismissing limits.",
              "rationale": "Invalidates his reality.",
              "keyIndicators": [
                "disability"
              ],
              "commonMistake": "Ignoring constraints."
            }
          },
          {
            "id": "b",
            "text": "Normalize seeking support, validate his efforts, and reframe help-seeking as responsible and sustainable care",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Reduces guilt and supports planning.",
            "explanation": {
              "approach": "Normalizing support.",
              "rationale": "Counters caregiver guilt.",
              "keyIndicators": [
                "guilt",
                "accessibility"
              ],
              "commonMistake": "Reinforcing guilt."
            }
          },
          {
            "id": "c",
            "text": "Agree that he is failing his mother and should try harder to cope independently",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Shaming and harmful.",
            "explanation": {
              "approach": "Shaming.",
              "rationale": "Worsens guilt.",
              "keyIndicators": [
                "guilt"
              ],
              "commonMistake": "Blaming caregiver."
            }
          },
          {
            "id": "d",
            "text": "Change the topic to avoid his uncomfortable feelings about needing outside assistance",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Avoids the concern.",
            "explanation": {
              "approach": "Avoidance.",
              "rationale": "Leaves guilt unaddressed.",
              "keyIndicators": [
                "emotional disclosure"
              ],
              "commonMistake": "Deflecting."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature best distinguishes this disorder from delirium?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Acute onset with markedly fluctuating attention and altered consciousness over hours to days",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Describes delirium.",
            "explanation": {
              "approach": "Fluctuation framing.",
              "rationale": "Points to delirium.",
              "keyIndicators": [
                "no fluctuation"
              ],
              "commonMistake": "Confusing the two."
            }
          },
          {
            "id": "b",
            "text": "Gradual, persistent cognitive decline over two years without fluctuating attention or consciousness",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Insidious course fits Alzheimer's.",
            "explanation": {
              "approach": "Course-based reasoning.",
              "rationale": "Steady progression, stable attention.",
              "keyIndicators": [
                "insidious",
                "progressive"
              ],
              "commonMistake": "Missing the course difference."
            }
          },
          {
            "id": "c",
            "text": "Cognitive complaints fully explained by low mood that resolve once depression is treated",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Suggests depression.",
            "explanation": {
              "approach": "Depression framing.",
              "rationale": "Decline is not mood-driven.",
              "keyIndicators": [
                "persistent deficits"
              ],
              "commonMistake": "Overcalling pseudodementia."
            }
          },
          {
            "id": "d",
            "text": "Mild deficits not interfering with independence in everyday activities of daily living",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Suggests mild NCD.",
            "explanation": {
              "approach": "Mild framing.",
              "rationale": "Independence is lost here.",
              "keyIndicators": [
                "loss of independence"
              ],
              "commonMistake": "Underrating severity."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the most appropriate care plan focus?",
        "evidenceRef": [
          "R1",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Curative cognitive remediation promising full reversal of her progressive memory loss over time",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Unrealistic for Alzheimer's.",
            "explanation": {
              "approach": "Cure promise.",
              "rationale": "No reversal available.",
              "keyIndicators": [
                "progressive decline"
              ],
              "commonMistake": "Overpromising cure."
            }
          },
          {
            "id": "b",
            "text": "Supportive care, safety planning, caregiver support, and connection to accessible community resources",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Realistic and dyad-focused.",
            "explanation": {
              "approach": "Supportive dyadic care.",
              "rationale": "Addresses patient and caregiver.",
              "keyIndicators": [
                "caregiver burden",
                "decline"
              ],
              "commonMistake": "Ignoring caregiver supports."
            }
          },
          {
            "id": "c",
            "text": "Intensive insight-oriented psychotherapy with the mother to process her childhood experiences in depth",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Mismatched to cognitive decline.",
            "explanation": {
              "approach": "Insight therapy.",
              "rationale": "Not suited to severe NCD.",
              "keyIndicators": [
                "memory loss"
              ],
              "commonMistake": "Wrong modality."
            }
          },
          {
            "id": "d",
            "text": "No intervention at all, since neurocognitive decline cannot be influenced by any support",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Nihilistic and false.",
            "explanation": {
              "approach": "Therapeutic nihilism.",
              "rationale": "Support still helps.",
              "keyIndicators": [
                "support needs"
              ],
              "commonMistake": "Giving up prematurely."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "The son uses a wheelchair and the office has stairs. What is required?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Ask him to manage the stairs himself or find another provider on his own",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Fails accessibility duty.",
            "explanation": {
              "approach": "Shifting burden.",
              "rationale": "Violates accommodation duty.",
              "keyIndicators": [
                "accessibility"
              ],
              "commonMistake": "Ignoring access."
            }
          },
          {
            "id": "b",
            "text": "Provide reasonable accommodations such as an accessible space or telehealth to ensure equitable access",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Meets accessibility obligation.",
            "explanation": {
              "approach": "Reasonable accommodation.",
              "rationale": "Ensures equitable access.",
              "keyIndicators": [
                "wheelchair use",
                "stairs"
              ],
              "commonMistake": "Overlooking accommodations."
            }
          },
          {
            "id": "c",
            "text": "Hold sessions only when staff can carry him up the stairs each time",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Undignified and unsafe.",
            "explanation": {
              "approach": "Improvised access.",
              "rationale": "Unsafe and demeaning.",
              "keyIndicators": [
                "dignity"
              ],
              "commonMistake": "Ad hoc solutions."
            }
          },
          {
            "id": "d",
            "text": "Continue as is and hope he does not raise concerns about the inaccessible office, without further exploration",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Ignores the barrier.",
            "explanation": {
              "approach": "Ignoring barrier.",
              "rationale": "Fails proactive duty.",
              "keyIndicators": [
                "access barrier"
              ],
              "commonMistake": "Passivity."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G064",
    "title": "Persistent Physical Concerns and Faith-Based Meaning",
    "category": "Somatic",
    "difficulty": "easy",
    "primaryDiagnosis": {
      "name": "Somatic Symptom Disorder",
      "code": "F45.1"
    },
    "diagnosis": {
      "name": "Somatic Symptom Disorder",
      "code": "F45.1"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Somatic Symptom Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Illness Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "David, a 52-year-old observant religious man, sits tensely with a hand resting on his abdomen, his grooming careful and affect anxious, eye contact frequent and searching. He reports persistent stomach and back pain with disproportionate worry and time devoted to his symptoms despite reassuring medical evaluations, saying earnestly 'the doctors say I'm fine, but my body tells me otherwise.'",
      "session1": "David speaks rapidly and circles back repeatedly to bodily details, his brow furrowed, describing excessive thoughts about his symptoms and high health anxiety. His tone steadies and softens when he interprets his suffering through his faith, framing symptoms as spiritual tests.",
      "session2": "David's voice remains earnest and slightly pleading as he conveys that his symptoms are real and distressing, with persistent disproportionate concern for over six months. He leans forward, making firm eye contact, to ask that his faith be respected within treatment."
    },
    "diagnosticRationale": "One or more distressing somatic symptoms with excessive thoughts, feelings, and behaviors and persistent disproportionate concern lasting over six months supports somatic symptom disorder.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Somatic symptom disorder criteria"
      },
      {
        "id": "R2",
        "source": "Hays (Assessment)",
        "detail": "Integrating spirituality in assessment"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Respect for client values and beliefs"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "David frames his pain as a spiritual test. Best counseling response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Tell him his faith-based explanation is mistaken and that his symptoms are purely psychological",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Disrespects beliefs.",
            "explanation": {
              "approach": "Dismissing faith.",
              "rationale": "Damages alliance.",
              "keyIndicators": [
                "faith framing"
              ],
              "commonMistake": "Invalidating spirituality."
            }
          },
          {
            "id": "b",
            "text": "Respect his faith framework and explore how spiritual meaning and symptom coping can work together",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Integrates faith respectfully.",
            "explanation": {
              "approach": "Spiritually integrative stance.",
              "rationale": "Honors values and engages care.",
              "keyIndicators": [
                "spiritual meaning",
                "health anxiety"
              ],
              "commonMistake": "Ignoring faith."
            }
          },
          {
            "id": "c",
            "text": "Avoid all mention of his religion to keep the focus strictly on physical symptoms",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Excludes meaningful context.",
            "explanation": {
              "approach": "Avoiding faith.",
              "rationale": "Misses coping resource.",
              "keyIndicators": [
                "religious values"
              ],
              "commonMistake": "Sidelining beliefs."
            }
          },
          {
            "id": "d",
            "text": "Encourage him to abandon medical care entirely and rely solely on prayer for healing",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Unsafe and inappropriate.",
            "explanation": {
              "approach": "Discouraging care.",
              "rationale": "Risks harm.",
              "keyIndicators": [
                "real symptoms"
              ],
              "commonMistake": "Overstepping into faith directives."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "David seeks repeated reassurance about his physical symptoms. Best response?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Provide detailed medical reassurance repeatedly until he feels completely certain nothing is wrong",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reinforces reassurance-seeking.",
            "explanation": {
              "approach": "Repeated reassurance.",
              "rationale": "Maintains the cycle.",
              "keyIndicators": [
                "reassurance seeking"
              ],
              "commonMistake": "Feeding the loop."
            }
          },
          {
            "id": "b",
            "text": "Validate his distress while gently shifting focus toward coping and functioning rather than certainty",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Breaks reassurance cycle compassionately.",
            "explanation": {
              "approach": "Validate then redirect.",
              "rationale": "Targets the maintaining cycle.",
              "keyIndicators": [
                "excessive worry",
                "real symptoms"
              ],
              "commonMistake": "Over-reassuring."
            }
          },
          {
            "id": "c",
            "text": "Tell him bluntly that nothing is wrong and he should stop worrying altogether now",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Invalidating and ineffective.",
            "explanation": {
              "approach": "Blunt dismissal.",
              "rationale": "Increases distress.",
              "keyIndicators": [
                "distress"
              ],
              "commonMistake": "Dismissing symptoms."
            }
          },
          {
            "id": "d",
            "text": "Order extensive additional medical tests to finally prove there is no disease present",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Outside scope and reinforces fears.",
            "explanation": {
              "approach": "Excessive testing.",
              "rationale": "Feeds health anxiety.",
              "keyIndicators": [
                "prior reassurance"
              ],
              "commonMistake": "Over-investigating."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature best distinguishes somatic symptom disorder from illness anxiety disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Prominent distressing somatic symptoms accompanied by excessive thoughts and behaviors about them",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Somatic symptoms are central here.",
            "explanation": {
              "approach": "Symptom-presence reasoning.",
              "rationale": "SSD requires distressing somatic symptoms.",
              "keyIndicators": [
                "real pain",
                "excessive concern"
              ],
              "commonMistake": "Confusing with illness anxiety."
            }
          },
          {
            "id": "b",
            "text": "Preoccupation with having an illness despite few or no actual somatic symptoms present",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes illness anxiety disorder.",
            "explanation": {
              "approach": "No-symptom framing.",
              "rationale": "Points to illness anxiety.",
              "keyIndicators": [
                "symptoms present"
              ],
              "commonMistake": "Mislabeling."
            }
          },
          {
            "id": "c",
            "text": "Worry spread across many life domains unrelated to any physical health concerns",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Suggests GAD.",
            "explanation": {
              "approach": "Generalized-worry framing.",
              "rationale": "Worry is health-focused here.",
              "keyIndicators": [
                "somatic focus"
              ],
              "commonMistake": "Overgeneralizing."
            }
          },
          {
            "id": "d",
            "text": "Intentional production of symptoms to obtain external incentives or tangible rewards",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Suggests malingering.",
            "explanation": {
              "approach": "Feigning framing.",
              "rationale": "Symptoms are genuine.",
              "keyIndicators": [
                "genuine distress"
              ],
              "commonMistake": "Assuming feigning."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What treatment approach best fits David?",
        "evidenceRef": [
          "R1",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Cognitive behavioral therapy addressing symptom-focused thoughts and behaviors while respecting his faith",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Evidence-based and value-congruent.",
            "explanation": {
              "approach": "Faith-respectful CBT.",
              "rationale": "Targets maintaining factors.",
              "keyIndicators": [
                "excessive thoughts",
                "spiritual meaning"
              ],
              "commonMistake": "Ignoring faith integration."
            }
          },
          {
            "id": "b",
            "text": "Repeated medical workups continuing indefinitely until every conceivable physical cause is fully excluded",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reinforces the disorder.",
            "explanation": {
              "approach": "Endless workup.",
              "rationale": "Perpetuates anxiety.",
              "keyIndicators": [
                "prior reassurance"
              ],
              "commonMistake": "Over-medicalizing."
            }
          },
          {
            "id": "c",
            "text": "Supportive counseling alone with no structured strategies for managing his symptom-related worry",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Lacks active method.",
            "explanation": {
              "approach": "Support-only.",
              "rationale": "No active change agent.",
              "keyIndicators": [
                "maintaining cycle"
              ],
              "commonMistake": "Underdosing care."
            }
          },
          {
            "id": "d",
            "text": "Immediate psychiatric hospitalization to monitor his physical complaints around the clock for safety",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Disproportionate.",
            "explanation": {
              "approach": "Over-restriction.",
              "rationale": "No acuity warrants it.",
              "keyIndicators": [
                "outpatient appropriate"
              ],
              "commonMistake": "Over-treating."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "David wants his religious beliefs respected in treatment. What applies?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Impose the clinician's own views about religion to correct his interpretation of suffering",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Imposes values.",
            "explanation": {
              "approach": "Value imposition.",
              "rationale": "Violates client autonomy.",
              "keyIndicators": [
                "faith values"
              ],
              "commonMistake": "Imposing beliefs."
            }
          },
          {
            "id": "b",
            "text": "Respect his beliefs, avoid imposing values, and integrate his faith where clinically appropriate",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Honors autonomy and values.",
            "explanation": {
              "approach": "Respect and integration.",
              "rationale": "Ethical and effective.",
              "keyIndicators": [
                "religious values",
                "respect request"
              ],
              "commonMistake": "Ignoring beliefs."
            }
          },
          {
            "id": "c",
            "text": "Refuse to discuss religion at all, declaring it irrelevant to mental health treatment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismisses key context.",
            "explanation": {
              "approach": "Excluding faith.",
              "rationale": "Disregards client values.",
              "keyIndicators": [
                "faith importance"
              ],
              "commonMistake": "Sidelining spirituality."
            }
          },
          {
            "id": "d",
            "text": "Promote his religion enthusiastically and join him in religious practices during every session",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Boundary and role confusion.",
            "explanation": {
              "approach": "Over-involvement.",
              "rationale": "Blurs clinical role.",
              "keyIndicators": [
                "scope"
              ],
              "commonMistake": "Overstepping role."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G065",
    "title": "Rule-Breaking Behavior and Systemic Pressures",
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
        "id": "d1",
        "name": "Conduct Disorder, Adolescent-Onset Type",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Oppositional Defiant Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Adjustment Disorder with Conduct Disturbance",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Intermittent Explosive Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Andre, a 16-year-old African American adolescent, slouches in his chair with arms crossed and a guarded, flat expression, eye contact minimal and wary. Referred after a pattern of fighting, truancy, and rule violations beginning after age ten amid harsh school discipline, he answers in short, clipped phrases, muttering 'they always come at me first.'",
      "session1": "Andre's tone is defensive and his speech terse, warming slightly when he feels heard, as he shows a repetitive pattern of behavior violating others' rights and norms over the past year. He describes, with rising edge in his voice, mistrust of school staff and experiences of unfair treatment.",
      "session2": "Andre relaxes marginally and makes more eye contact as the alliance grows, clarifying that his behaviors began in adolescence, not early childhood. With quiet frustration he reports systemic pressures, racial bias in discipline, and feeling misunderstood by adults around him, adding 'nobody ever asks why.'"
    },
    "diagnosticRationale": "A repetitive, persistent pattern violating others' rights and major age-appropriate norms with onset after age ten supports conduct disorder, adolescent-onset type; assessment must weigh systemic context.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Conduct disorder criteria and subtypes"
      },
      {
        "id": "R2",
        "source": "Hays (Assessment)",
        "detail": "Systemic racism and contextual assessment"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Advocacy and avoiding bias"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "Andre is guarded and mistrustful of the clinician. Best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Demand he show respect and cooperate fully before any counseling work can begin",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Replicates authoritarian dynamics.",
            "explanation": {
              "approach": "Authoritarian demand.",
              "rationale": "Confirms his mistrust.",
              "keyIndicators": [
                "mistrust"
              ],
              "commonMistake": "Power struggle."
            }
          },
          {
            "id": "b",
            "text": "Acknowledge valid reasons for mistrust, build trust patiently, and convey genuine respect and curiosity",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Earns trust authentically.",
            "explanation": {
              "approach": "Trust-building with validation.",
              "rationale": "Addresses justified wariness.",
              "keyIndicators": [
                "cultural mistrust",
                "unfair treatment"
              ],
              "commonMistake": "Ignoring valid mistrust."
            }
          },
          {
            "id": "c",
            "text": "Warn him that his attitude will lead to serious consequences if it continues unchanged",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Threatening and alienating.",
            "explanation": {
              "approach": "Threats.",
              "rationale": "Escalates resistance.",
              "keyIndicators": [
                "guardedness"
              ],
              "commonMistake": "Coercion."
            }
          },
          {
            "id": "d",
            "text": "Proceed with a standard intake quickly, ignoring his guardedness to save session time",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Misses rapport opportunity.",
            "explanation": {
              "approach": "Ignoring guardedness.",
              "rationale": "Undermines engagement.",
              "keyIndicators": [
                "mistrust"
              ],
              "commonMistake": "Rushing past affect."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "Andre describes racial bias in school discipline. Best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Tell him to stop blaming the system and take full responsibility for his choices, without further exploration",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dismisses systemic reality.",
            "explanation": {
              "approach": "Blame redirection.",
              "rationale": "Invalidates real bias.",
              "keyIndicators": [
                "systemic racism"
              ],
              "commonMistake": "Ignoring context."
            }
          },
          {
            "id": "b",
            "text": "Validate his experience of bias while collaboratively exploring choices within an unfair system",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Holds both context and agency.",
            "explanation": {
              "approach": "Validate context and agency.",
              "rationale": "Honors reality and growth.",
              "keyIndicators": [
                "racial bias",
                "school discipline"
              ],
              "commonMistake": "Choosing context or agency alone."
            }
          },
          {
            "id": "c",
            "text": "Agree the system is hopeless so there is no point in changing his behavior",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Removes agency.",
            "explanation": {
              "approach": "Hopeless framing.",
              "rationale": "Forecloses growth.",
              "keyIndicators": [
                "agency"
              ],
              "commonMistake": "Over-externalizing."
            }
          },
          {
            "id": "d",
            "text": "Change the topic to avoid the discomfort of discussing race in the session",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Avoids key issue.",
            "explanation": {
              "approach": "Avoidance.",
              "rationale": "Signals discomfort with race.",
              "keyIndicators": [
                "disclosure"
              ],
              "commonMistake": "Deflecting race talk."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature best distinguishes conduct disorder from oppositional defiant disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Angry, argumentative, and defiant behavior without serious violation of others' basic rights",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes ODD.",
            "explanation": {
              "approach": "Defiance-only framing.",
              "rationale": "Points to ODD.",
              "keyIndicators": [
                "rights violation"
              ],
              "commonMistake": "Confusing ODD and CD."
            }
          },
          {
            "id": "b",
            "text": "A repetitive pattern violating others' basic rights and major age-appropriate societal norms",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Rights violation defines conduct disorder.",
            "explanation": {
              "approach": "Rights-violation reasoning.",
              "rationale": "Hallmark of conduct disorder.",
              "keyIndicators": [
                "fighting",
                "norm violations"
              ],
              "commonMistake": "Underrating severity."
            }
          },
          {
            "id": "c",
            "text": "Isolated explosive aggressive outbursts grossly out of proportion to any provocation present",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Suggests intermittent explosive disorder.",
            "explanation": {
              "approach": "Explosive framing.",
              "rationale": "Different pattern.",
              "keyIndicators": [
                "sustained pattern"
              ],
              "commonMistake": "Confusing IED."
            }
          },
          {
            "id": "d",
            "text": "Behavior changes occurring only in direct response to a single recent identifiable stressor",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Suggests adjustment disorder.",
            "explanation": {
              "approach": "Stressor-bound framing.",
              "rationale": "Pattern is persistent here.",
              "keyIndicators": [
                "year-long pattern"
              ],
              "commonMistake": "Underdiagnosing."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What treatment approach best fits Andre?",
        "evidenceRef": [
          "R1",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Punitive behavior contracts emphasizing strict consequences without addressing family or systemic context",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Ignores context and engagement.",
            "explanation": {
              "approach": "Punitive-only.",
              "rationale": "Replicates harsh discipline.",
              "keyIndicators": [
                "systemic pressure"
              ],
              "commonMistake": "Punishment focus."
            }
          },
          {
            "id": "b",
            "text": "Evidence-based family and community intervention addressing skills, relationships, and systemic supports together",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Multisystemic approaches fit conduct disorder.",
            "explanation": {
              "approach": "Family and community intervention.",
              "rationale": "Targets multiple systems.",
              "keyIndicators": [
                "norm violations",
                "systemic context"
              ],
              "commonMistake": "Individual-only focus."
            }
          },
          {
            "id": "c",
            "text": "Individual insight therapy alone, exploring his feelings without involving family or school systems",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Insufficient for conduct disorder.",
            "explanation": {
              "approach": "Insight-only.",
              "rationale": "Misses systemic levers.",
              "keyIndicators": [
                "family role"
              ],
              "commonMistake": "Ignoring systems."
            }
          },
          {
            "id": "d",
            "text": "Immediate referral to juvenile detention as the primary intervention for his rule-breaking behavior",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Harmful and inappropriate.",
            "explanation": {
              "approach": "Carceral referral.",
              "rationale": "Worsens outcomes.",
              "keyIndicators": [
                "adolescent"
              ],
              "commonMistake": "Criminalizing."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "What is essential to avoid bias when diagnosing Andre?",
        "evidenceRef": [
          "R2",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Apply the diagnosis quickly based on referral information to expedite his treatment planning",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Risks biased misdiagnosis.",
            "explanation": {
              "approach": "Rushed labeling.",
              "rationale": "Amplifies referral bias.",
              "keyIndicators": [
                "systemic bias"
              ],
              "commonMistake": "Premature diagnosis."
            }
          },
          {
            "id": "b",
            "text": "Carefully assess systemic and cultural context to distinguish disorder from responses to an unjust environment",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Reduces diagnostic bias.",
            "explanation": {
              "approach": "Context-sensitive assessment.",
              "rationale": "Guards against overdiagnosis.",
              "keyIndicators": [
                "racial bias",
                "systemic pressure"
              ],
              "commonMistake": "Ignoring context."
            }
          },
          {
            "id": "c",
            "text": "Rely solely on school reports without gathering the adolescent's own account of events",
            "isCorrect": false,
            "weight": -1,
            "rationale": "One-sided and biased.",
            "explanation": {
              "approach": "Single-source data.",
              "rationale": "Misses his perspective.",
              "keyIndicators": [
                "mistrust"
              ],
              "commonMistake": "Over-trusting institutions."
            }
          },
          {
            "id": "d",
            "text": "Avoid the diagnosis entirely regardless of clear evidence, to sidestep any appearance of bias",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Withholds accurate care.",
            "explanation": {
              "approach": "Diagnostic avoidance.",
              "rationale": "Denies needed services.",
              "keyIndicators": [
                "clear pattern"
              ],
              "commonMistake": "Overcorrecting."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G066",
    "title": "Self-Injury Amid Family Shame and Language Barriers",
    "category": "Crisis",
    "difficulty": "hard",
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
        "id": "d1",
        "name": "Nonsuicidal Self-Injury",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Borderline Personality Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Adjustment Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Sofia, a 15-year-old Spanish-dominant Latina adolescent, sits with sleeves pulled over her wrists, shoulders hunched, eye contact fleeting and affect anxious. Presenting after a teacher noticed signs of self-injury, she speaks softly and haltingly, reporting using self-harm to cope with emotional distress without intent to die, whispering 'it just makes the feelings stop for a minute.'",
      "session1": "Sofia's voice is quiet and tremulous, with long pauses, as she describes self-injury to regulate overwhelming emotions and denies suicidal intent. She glances toward the door and lowers her voice further, saying she fears bringing shame to her family and prefers communicating in Spanish.",
      "session2": "Sofia speaks more freely in Spanish, her posture loosening slightly though she still avoids sustained eye contact, clarifying that her behavior functions to relieve distress, not to end her life. She worries aloud about confidentiality, family reactions, and being misunderstood due to language barriers."
    },
    "diagnosticRationale": "Repeated self-inflicted bodily harm used to regulate emotion without suicidal intent, causing distress and impairment, supports nonsuicidal self-injury; thorough risk assessment and safety planning remain essential.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Nonsuicidal self-injury features and intent"
      },
      {
        "id": "R2",
        "source": "C-SSRS",
        "detail": "Suicide risk screening and assessment"
      },
      {
        "id": "R3",
        "source": "Stanley-Brown SPI",
        "detail": "Collaborative safety planning"
      },
      {
        "id": "R4",
        "source": "ACA Code of Ethics",
        "detail": "Confidentiality with minors and language access"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "Sofia discloses self-injury and seems anxious. Best initial response?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Express alarm and tell her that her behavior is dangerous and must stop right now",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Shaming reaction shuts down trust.",
            "explanation": {
              "approach": "Alarmed reaction.",
              "rationale": "Increases shame and secrecy.",
              "keyIndicators": [
                "shame fear"
              ],
              "commonMistake": "Reacting with alarm."
            }
          },
          {
            "id": "b",
            "text": "Respond calmly and nonjudgmentally, validating her distress and exploring the function of her self-injury",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Builds safety and understanding.",
            "explanation": {
              "approach": "Calm, nonjudgmental inquiry.",
              "rationale": "Encourages openness.",
              "keyIndicators": [
                "emotion regulation",
                "shame fear"
              ],
              "commonMistake": "Overreacting."
            }
          },
          {
            "id": "c",
            "text": "Immediately inform her parents of everything before discussing the situation further with Sofia",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature and breaches trust.",
            "explanation": {
              "approach": "Immediate disclosure.",
              "rationale": "Skips assessment and rapport.",
              "keyIndicators": [
                "confidentiality worry"
              ],
              "commonMistake": "Rushing to notify."
            }
          },
          {
            "id": "d",
            "text": "Minimize the behavior, telling her many teenagers do this and it is nothing serious",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Dismisses her distress.",
            "explanation": {
              "approach": "Minimizing.",
              "rationale": "Invalidates and overlooks risk.",
              "keyIndicators": [
                "distress"
              ],
              "commonMistake": "Downplaying."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "Sofia fears her family will be ashamed. Best response?",
        "evidenceRef": [
          "R4"
        ],
        "options": [
          {
            "id": "a",
            "text": "Validate her fear, explore family meaning, and plan involvement collaboratively at a careful pace",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Respects culture and builds trust.",
            "explanation": {
              "approach": "Collaborative, paced planning.",
              "rationale": "Honors family and safety.",
              "keyIndicators": [
                "family shame",
                "Spanish preference"
              ],
              "commonMistake": "Ignoring family context."
            }
          },
          {
            "id": "b",
            "text": "Tell her family shame is irrational and she should not worry about their reaction",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Invalidates cultural value.",
            "explanation": {
              "approach": "Dismissing shame.",
              "rationale": "Ignores cultural context.",
              "keyIndicators": [
                "familismo"
              ],
              "commonMistake": "Minimizing culture."
            }
          },
          {
            "id": "c",
            "text": "Promise she will never have to tell her family anything about her self-injury",
            "isCorrect": false,
            "weight": -1,
            "rationale": "May exceed confidentiality limits.",
            "explanation": {
              "approach": "Overpromising secrecy.",
              "rationale": "Conflicts with safety and limits.",
              "keyIndicators": [
                "safety needs"
              ],
              "commonMistake": "Absolute promises."
            }
          },
          {
            "id": "d",
            "text": "Insist she tell her family today regardless of her readiness or the consequences involved",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Coercive and risky.",
            "explanation": {
              "approach": "Forced disclosure.",
              "rationale": "Ignores her readiness.",
              "keyIndicators": [
                "shame fear"
              ],
              "commonMistake": "Pushing disclosure."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "What is the priority during Sofia's intake assessment?",
        "evidenceRef": [
          "R1",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Catalog every detail of her self-injury methods before assessing anything about her safety",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Method focus is unhelpful and risky.",
            "explanation": {
              "approach": "Method cataloging.",
              "rationale": "Misses risk priorities.",
              "keyIndicators": [
                "safety first"
              ],
              "commonMistake": "Focusing on methods."
            }
          },
          {
            "id": "b",
            "text": "Carefully assess suicidal ideation and intent to distinguish self-injury from suicidal behavior",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Differentiates NSSI from suicidality safely.",
            "explanation": {
              "approach": "Risk-focused assessment.",
              "rationale": "Clarifies intent and safety.",
              "keyIndicators": [
                "denies suicidal intent",
                "self-injury"
              ],
              "commonMistake": "Assuming intent."
            }
          },
          {
            "id": "c",
            "text": "Focus only on academic functioning since a teacher made the initial referral about her",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Ignores clinical priority.",
            "explanation": {
              "approach": "Academic-only focus.",
              "rationale": "Neglects risk.",
              "keyIndicators": [
                "self-injury"
              ],
              "commonMistake": "Off-target intake."
            }
          },
          {
            "id": "d",
            "text": "Defer any risk assessment until trust has fully developed over several future sessions",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Delays essential safety evaluation.",
            "explanation": {
              "approach": "Deferred assessment.",
              "rationale": "Leaves risk unevaluated.",
              "keyIndicators": [
                "current self-injury"
              ],
              "commonMistake": "Postponing risk screen."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the most appropriate next step in Sofia's care?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Develop a collaborative safety plan and teach distress-tolerance coping skills in her preferred language",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Safe, evidence-based, culturally accessible.",
            "explanation": {
              "approach": "Collaborative safety planning.",
              "rationale": "Builds coping and safety.",
              "keyIndicators": [
                "emotion regulation",
                "Spanish preference"
              ],
              "commonMistake": "Skipping safety planning."
            }
          },
          {
            "id": "b",
            "text": "Require her to sign a no-harm contract promising she will never self-injure again",
            "isCorrect": false,
            "weight": -2,
            "rationale": "No-harm contracts are ineffective.",
            "explanation": {
              "approach": "No-harm contract.",
              "rationale": "Not evidence-based.",
              "keyIndicators": [
                "coping needs"
              ],
              "commonMistake": "Relying on contracts."
            }
          },
          {
            "id": "c",
            "text": "Refer her directly to inpatient care without first assessing her actual level of risk, without further exploration",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature and overrestrictive.",
            "explanation": {
              "approach": "Unassessed referral.",
              "rationale": "Skips risk evaluation.",
              "keyIndicators": [
                "no suicidal intent"
              ],
              "commonMistake": "Over-escalating."
            }
          },
          {
            "id": "d",
            "text": "Provide general advice to relax more and discharge her until a future appointment",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Inadequate for active self-injury.",
            "explanation": {
              "approach": "Vague advice.",
              "rationale": "Undertreats the concern.",
              "keyIndicators": [
                "active self-injury"
              ],
              "commonMistake": "Underresponding."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "Sofia is a Spanish-dominant minor worried about confidentiality. What applies?",
        "evidenceRef": [
          "R4"
        ],
        "options": [
          {
            "id": "a",
            "text": "Promise complete confidentiality from parents with no exceptions to gain her full cooperation",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ignores safety and legal limits.",
            "explanation": {
              "approach": "Absolute confidentiality.",
              "rationale": "Misrepresents limits.",
              "keyIndicators": [
                "minor",
                "safety"
              ],
              "commonMistake": "Overpromising privacy."
            }
          },
          {
            "id": "b",
            "text": "Explain confidentiality and its limits in her language, and arrange a qualified interpreter as needed",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Ensures informed, accessible consent.",
            "explanation": {
              "approach": "Language-accessible consent.",
              "rationale": "Meets ethical and access duties.",
              "keyIndicators": [
                "Spanish dominant",
                "minor status"
              ],
              "commonMistake": "Skipping language access."
            }
          },
          {
            "id": "c",
            "text": "Proceed in English and assume she understands the confidentiality limits well enough already",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Compromises informed consent.",
            "explanation": {
              "approach": "Assumed comprehension.",
              "rationale": "Risks invalid consent.",
              "keyIndicators": [
                "language barrier"
              ],
              "commonMistake": "Assuming understanding."
            }
          },
          {
            "id": "d",
            "text": "Avoid discussing confidentiality so she will not become more anxious about disclosure",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Omits required informed consent.",
            "explanation": {
              "approach": "Avoiding consent talk.",
              "rationale": "Fails ethical duty.",
              "keyIndicators": [
                "confidentiality worry"
              ],
              "commonMistake": "Skipping consent."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G067",
    "title": "New Parent Facing Postpartum Distress",
    "category": "Depressive",
    "difficulty": "medium",
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
        "id": "d1",
        "name": "Major Depressive Disorder, with Peripartum Onset",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Adjustment Disorder with Depressed Mood",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Bipolar II Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Amanda, a 32-year-old lesbian woman, presents six weeks after the birth of her child, carried by her wife, appearing exhausted with dark circles, flat affect, and tearful eyes, her grooming minimal. She reports persistent low mood, tearfulness, anhedonia, guilt about not bonding, and disrupted sleep beyond infant care demands, saying quietly 'I keep waiting to feel like her mother.'",
      "session1": "Amanda's voice wavers and breaks as she describes feeling invisible as the non-gestational parent and minority stress from family who question her role. She denies prior mood episodes but, with downcast eyes, endorses worthlessness, fatigue, and passive thoughts that her family would be fine without her.",
      "session2": "Amanda speaks slowly and flatly, occasionally wiping tears, confirming symptoms have persisted daily for over two weeks with functional impairment, while denying active suicidal plan or intent. Her shoulders curl inward as she expresses isolation from affirming support and fear of being judged as an unfit parent if she discloses her struggles."
    },
    "diagnosticRationale": "Five or more depressive symptoms persisting at least two weeks with onset during the peripartum period, including anhedonia, guilt, fatigue, and passive ideation, causing impairment and not better explained by bipolar history.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Depressive disorders criteria and peripartum-onset specifier"
      },
      {
        "id": "R2",
        "source": "C-SSRS",
        "detail": "Structured suicide-risk screening for passive ideation"
      },
      {
        "id": "R3",
        "source": "Hays (Assessment)",
        "detail": "ADDRESSING framework and minority-stress considerations"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "What is the most appropriate initial counseling response to her disclosure of distress?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Validate her parenting role, normalize peripartum distress, and explore minority-stress factors affecting her experience",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Affirming validation builds alliance and surfaces context.",
            "explanation": {
              "approach": "Affirm role and explore stressors",
              "rationale": "Validation reduces shame and engages the client",
              "keyIndicators": [
                "minority stress",
                "non-gestational parent role"
              ],
              "commonMistake": "Centering only the infant and ignoring her identity"
            }
          },
          {
            "id": "b",
            "text": "Reassure her that these feelings will pass naturally and recommend she simply rest more often",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature reassurance minimizes clinical symptoms.",
            "explanation": {
              "approach": "Reassure and dismiss",
              "rationale": "Minimizes a treatable depressive episode",
              "keyIndicators": [
                "dismissal"
              ],
              "commonMistake": "Treating depression as ordinary tiredness"
            }
          },
          {
            "id": "c",
            "text": "Focus the session on her wife's recovery and the practical logistics of infant feeding schedules, without further exploration",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Redirects away from the client's presenting concern.",
            "explanation": {
              "approach": "Redirect to logistics",
              "rationale": "Avoids the client's emotional needs",
              "keyIndicators": [
                "misdirected focus"
              ],
              "commonMistake": "Ignoring the identified client"
            }
          },
          {
            "id": "d",
            "text": "Confront her guilt as an irrational cognitive distortion before any rapport has been established",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Premature confrontation harms alliance.",
            "explanation": {
              "approach": "Confront cognitions early",
              "rationale": "Damages trust before safety is built",
              "keyIndicators": [
                "premature challenge"
              ],
              "commonMistake": "Skipping rapport-building"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "How should the counselor best address her sense of invisibility as the non-gestational parent?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Encourage her to suppress these feelings so she can stay strong for her growing family without addressing it further at all",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Suppression worsens depressive symptoms.",
            "explanation": {
              "approach": "Encourage suppression",
              "rationale": "Invalidates and compounds distress",
              "keyIndicators": [
                "emotional avoidance"
              ],
              "commonMistake": "Promoting stoicism"
            }
          },
          {
            "id": "b",
            "text": "Explore how external invalidation shapes her parenting identity and collaboratively affirm her legitimacy as a parent",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Names systemic stressors and affirms identity.",
            "explanation": {
              "approach": "Explore and affirm identity",
              "rationale": "Targets minority-stress mechanisms",
              "keyIndicators": [
                "external invalidation",
                "parenting legitimacy"
              ],
              "commonMistake": "Treating distress as purely internal"
            }
          },
          {
            "id": "c",
            "text": "Suggest the feelings reflect a hormonal imbalance unrelated to her social context",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reduces a contextual issue to biology.",
            "explanation": {
              "approach": "Reduce to biology",
              "rationale": "Ignores documented minority stress",
              "keyIndicators": [
                "oversimplification"
              ],
              "commonMistake": "Dismissing social context"
            }
          },
          {
            "id": "d",
            "text": "Advise her to limit all contact with extended family members who express any doubt",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Prescriptive advice bypasses exploration.",
            "explanation": {
              "approach": "Prescribe cutoff",
              "rationale": "Directive and premature",
              "keyIndicators": [
                "advice-giving"
              ],
              "commonMistake": "Solving before understanding"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which assessment step most clearly distinguishes peripartum MDD from an adjustment disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Counting the number of supportive people currently available in her immediate household network",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Support level does not set the threshold.",
            "explanation": {
              "approach": "Count supports",
              "rationale": "Not the diagnostic discriminator",
              "keyIndicators": [
                "irrelevant metric"
              ],
              "commonMistake": "Confusing risk with diagnosis"
            }
          },
          {
            "id": "b",
            "text": "Confirming five or more depressive symptoms persisting at least two weeks with marked impairment",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Meets MDD symptom and duration threshold.",
            "explanation": {
              "approach": "Apply symptom-count criteria",
              "rationale": "Distinguishes MDD from subthreshold adjustment",
              "keyIndicators": [
                "five symptoms",
                "two-week duration"
              ],
              "commonMistake": "Defaulting to adjustment disorder"
            }
          },
          {
            "id": "c",
            "text": "Asking whether her wife also experienced mood changes after the delivery",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Partner status is not diagnostic.",
            "explanation": {
              "approach": "Assess partner",
              "rationale": "Irrelevant to her criteria",
              "keyIndicators": [
                "misplaced focus"
              ],
              "commonMistake": "Diagnosing by proxy"
            }
          },
          {
            "id": "d",
            "text": "Determining whether the identified stressor will resolve within the next six months",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Stressor course does not confirm MDD.",
            "explanation": {
              "approach": "Estimate stressor course",
              "rationale": "Confuses adjustment framing with MDD",
              "keyIndicators": [
                "wrong criterion"
              ],
              "commonMistake": "Applying adjustment logic"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the most appropriate evidence-based treatment plan for this client?",
        "evidenceRef": [
          "R1",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Brief solution-focused coaching limited to sleep scheduling without any mood-symptom monitoring",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Too narrow for a depressive episode.",
            "explanation": {
              "approach": "Sleep coaching only",
              "rationale": "Ignores core depressive symptoms",
              "keyIndicators": [
                "incomplete scope"
              ],
              "commonMistake": "Treating a symptom not the disorder"
            }
          },
          {
            "id": "b",
            "text": "Psychoeducation, structured therapy, ongoing risk monitoring, and coordinated referral for medical evaluation",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Comprehensive, safety-aware, collaborative care.",
            "explanation": {
              "approach": "Integrated therapy and monitoring",
              "rationale": "Matches MDD severity and passive ideation",
              "keyIndicators": [
                "risk monitoring",
                "care coordination"
              ],
              "commonMistake": "Omitting suicide-risk follow-up"
            }
          },
          {
            "id": "c",
            "text": "Open-ended supportive talk sessions with no goals, structure, or outcome tracking over time",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Lacks structure and monitoring.",
            "explanation": {
              "approach": "Unstructured support",
              "rationale": "Insufficient for moderate MDD",
              "keyIndicators": [
                "no structure"
              ],
              "commonMistake": "Equating empathy with treatment"
            }
          },
          {
            "id": "d",
            "text": "Immediate inpatient hospitalization based solely on her report of passive ideation",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Passive ideation without plan rarely warrants inpatient.",
            "explanation": {
              "approach": "Hospitalize immediately",
              "rationale": "Overreacts to passive ideation",
              "keyIndicators": [
                "disproportionate response"
              ],
              "commonMistake": "Escalating without risk stratification"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "She fears disclosure could lead to her being judged an unfit parent. What is the ethical response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Clarify confidentiality limits, normalize help-seeking, and continue collaborative safety assessment without breaching trust",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Transparent limits preserve autonomy and safety.",
            "explanation": {
              "approach": "Clarify limits and continue care",
              "rationale": "Balances confidentiality with safety duty",
              "keyIndicators": [
                "informed consent",
                "ongoing risk assessment"
              ],
              "commonMistake": "Either over-promising secrecy or over-reporting"
            }
          },
          {
            "id": "b",
            "text": "Promise her that nothing she says will ever be shared with anyone under any circumstance",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ignores legal limits to confidentiality.",
            "explanation": {
              "approach": "Promise absolute secrecy",
              "rationale": "Violates duty and informed-consent standards",
              "keyIndicators": [
                "false guarantee"
              ],
              "commonMistake": "Overstating confidentiality"
            }
          },
          {
            "id": "c",
            "text": "Notify child protective services immediately because she reported passive thoughts of death without addressing it further at all",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Passive ideation alone is not reportable abuse.",
            "explanation": {
              "approach": "Report to authorities",
              "rationale": "No abuse threshold is met",
              "keyIndicators": [
                "unwarranted report"
              ],
              "commonMistake": "Confusing depression with neglect"
            }
          },
          {
            "id": "d",
            "text": "Avoid the topic of safety entirely to keep her comfortable in the session",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoiding risk assessment is unsafe.",
            "explanation": {
              "approach": "Avoid safety topic",
              "rationale": "Neglects standard-of-care risk screening",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Prioritizing comfort over safety"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G068",
    "title": "Immigrant Client With Intense Specific Fear",
    "category": "Anxiety",
    "difficulty": "easy",
    "primaryDiagnosis": {
      "name": "Specific Phobia",
      "code": "F40.218"
    },
    "diagnosis": {
      "name": "Specific Phobia",
      "code": "F40.218"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Specific Phobia",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Panic Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Adjustment Disorder with Anxiety",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Bao, a 38-year-old first-generation man from Southeast Asia, sits stiffly with a tense, alert posture and reserved affect, eye contact brief and deferential. He reports an intense, persistent fear of dogs that interferes with walking to work, and, having immigrated three years ago, describes ongoing acculturative stress and reluctance to seek care, noting 'in my village we learned dogs bring danger.'",
      "session1": "Bao's breathing quickens and his hands grip his knees as he explains that exposure to any dog provokes immediate panic, sweating, and avoidance, tying his fear to childhood beliefs in his culture of origin. In a lowered, hesitant voice he worries that seeking counseling marks him as weak among his community.",
      "session2": "Bao speaks more steadily, with occasional anxious pauses, confirming the fear has persisted for years, is recognized by him as excessive, and is cued specifically by dogs rather than general worry. His expression tightens as he describes avoiding parks and certain streets, limiting his daily functioning and increasing his isolation."
    },
    "diagnosticRationale": "Marked, persistent fear cued by a specific object (dogs), with immediate anxiety, active avoidance, recognition of excessiveness, duration over six months, and functional impairment, distinguishing it from generalized or panic presentations.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Specific phobia criteria and cued-fear features"
      },
      {
        "id": "R2",
        "source": "Hays (Assessment)",
        "detail": "Culturally responsive assessment of fear meaning"
      },
      {
        "id": "R3",
        "source": "NICE guidelines",
        "detail": "Exposure-based treatment for specific phobia"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "What is the most culturally responsive way to open the conversation about his fear?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Explore the meaning his fear carries within his cultural background while validating his decision to seek help",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Centers cultural meaning and reduces stigma.",
            "explanation": {
              "approach": "Explore cultural meaning",
              "rationale": "Honors context and lowers stigma",
              "keyIndicators": [
                "cultural meaning",
                "help-seeking validation"
              ],
              "commonMistake": "Treating the fear as context-free"
            }
          },
          {
            "id": "b",
            "text": "Tell him his fear is irrational and that adults should not be frightened by dogs",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Shaming language harms alliance.",
            "explanation": {
              "approach": "Label as irrational",
              "rationale": "Increases shame and stigma",
              "keyIndicators": [
                "judgmental framing"
              ],
              "commonMistake": "Dismissing the client's experience"
            }
          },
          {
            "id": "c",
            "text": "Recommend he avoid all dogs permanently so the anxiety never gets triggered again",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoidance reinforces the phobia.",
            "explanation": {
              "approach": "Endorse avoidance",
              "rationale": "Maintains the fear long-term",
              "keyIndicators": [
                "avoidance reinforcement"
              ],
              "commonMistake": "Accommodating instead of treating"
            }
          },
          {
            "id": "d",
            "text": "Move quickly to medication referral before exploring his concerns about counseling stigma, without further exploration",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Skips rapport and exploration.",
            "explanation": {
              "approach": "Refer for medication first",
              "rationale": "Bypasses engagement and assessment",
              "keyIndicators": [
                "premature referral"
              ],
              "commonMistake": "Ignoring stigma concerns"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "He says seeking counseling makes him feel weak. How should the counselor respond?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Agree that counseling is unusual for men and suggest he keep it secret from everyone",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reinforces stigma and shame.",
            "explanation": {
              "approach": "Endorse secrecy",
              "rationale": "Strengthens stigma",
              "keyIndicators": [
                "shame reinforcement"
              ],
              "commonMistake": "Colluding with stigma"
            }
          },
          {
            "id": "b",
            "text": "Reframe help-seeking as a strength and explore how community values shape his concerns",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Reframes stigma while honoring values.",
            "explanation": {
              "approach": "Reframe and explore values",
              "rationale": "Reduces stigma respectfully",
              "keyIndicators": [
                "strengths reframe",
                "community values"
              ],
              "commonMistake": "Ignoring the cultural weight of stigma"
            }
          },
          {
            "id": "c",
            "text": "Insist that his community's beliefs about strength are simply wrong and outdated",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Devalues his cultural frame.",
            "explanation": {
              "approach": "Dismiss community beliefs",
              "rationale": "Alienates the client",
              "keyIndicators": [
                "cultural invalidation"
              ],
              "commonMistake": "Imposing the counselor's values"
            }
          },
          {
            "id": "d",
            "text": "Change the subject and proceed directly to scheduling structured exposure tasks",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Skips the stigma concern.",
            "explanation": {
              "approach": "Skip to exposure",
              "rationale": "Leaves engagement barrier unaddressed",
              "keyIndicators": [
                "avoidance of concern"
              ],
              "commonMistake": "Rushing into intervention"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which finding best supports specific phobia over panic disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "His anxiety arises predictably only when he encounters or anticipates encountering a dog",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Cued, object-specific fear defines phobia.",
            "explanation": {
              "approach": "Identify the cue",
              "rationale": "Cued fear distinguishes phobia from panic",
              "keyIndicators": [
                "object-specific cue",
                "predictable trigger"
              ],
              "commonMistake": "Confusing cued and uncued panic"
            }
          },
          {
            "id": "b",
            "text": "He experiences unexpected surges of fear without any identifiable situational trigger",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes uncued panic, not phobia.",
            "explanation": {
              "approach": "Note uncued attacks",
              "rationale": "Points to panic disorder",
              "keyIndicators": [
                "uncued panic"
              ],
              "commonMistake": "Mislabeling panic as phobia"
            }
          },
          {
            "id": "c",
            "text": "He worries excessively about many different areas of his daily life",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Suggests generalized anxiety.",
            "explanation": {
              "approach": "Note broad worry",
              "rationale": "Indicates GAD instead",
              "keyIndicators": [
                "diffuse worry"
              ],
              "commonMistake": "Overlooking the single cue"
            }
          },
          {
            "id": "d",
            "text": "His symptoms began only after a recent identifiable major life stressor",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Stressor onset suggests adjustment disorder.",
            "explanation": {
              "approach": "Note stressor onset",
              "rationale": "Fits adjustment framing",
              "keyIndicators": [
                "recent stressor"
              ],
              "commonMistake": "Ignoring chronic course"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the recommended first-line treatment approach for his presentation?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Long-term insight-oriented therapy exploring unconscious childhood meanings of animals, without further exploration",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Not first-line for specific phobia.",
            "explanation": {
              "approach": "Insight therapy",
              "rationale": "Slower and less effective than exposure",
              "keyIndicators": [
                "non-first-line"
              ],
              "commonMistake": "Choosing depth over exposure"
            }
          },
          {
            "id": "b",
            "text": "Graded exposure therapy delivered collaboratively with culturally adapted pacing and psychoeducation",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Exposure is first-line and culturally adapted.",
            "explanation": {
              "approach": "Graded exposure",
              "rationale": "Evidence-based and adaptable",
              "keyIndicators": [
                "graded exposure",
                "cultural adaptation"
              ],
              "commonMistake": "Skipping exposure entirely"
            }
          },
          {
            "id": "c",
            "text": "Encouraging complete avoidance of dogs paired with relaxation training only",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Avoidance undermines treatment.",
            "explanation": {
              "approach": "Avoidance plus relaxation",
              "rationale": "Maintains the phobia",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Relaxation without exposure"
            }
          },
          {
            "id": "d",
            "text": "Immediate flooding with prolonged contact before any preparation or consent",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Unprepared flooding risks dropout.",
            "explanation": {
              "approach": "Unprepared flooding",
              "rationale": "Overwhelms without buy-in",
              "keyIndicators": [
                "no preparation"
              ],
              "commonMistake": "Skipping graded hierarchy"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Which statement best reflects the core clinical features of his diagnosis?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "A persistent, cued fear that is recognized as excessive, prompting avoidance and functional impairment",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Captures core phobia criteria.",
            "explanation": {
              "approach": "Summarize criteria",
              "rationale": "Aligns with DSM definition",
              "keyIndicators": [
                "cued fear",
                "avoidance",
                "impairment"
              ],
              "commonMistake": "Omitting the impairment requirement"
            }
          },
          {
            "id": "b",
            "text": "A pervasive, uncontrollable worry spanning work, finances, health, and relationships",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes GAD.",
            "explanation": {
              "approach": "Describe diffuse worry",
              "rationale": "Wrong diagnostic picture",
              "keyIndicators": [
                "diffuse worry"
              ],
              "commonMistake": "Confusing GAD with phobia"
            }
          },
          {
            "id": "c",
            "text": "Recurrent unexpected attacks followed by persistent worry about future attacks",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes panic disorder.",
            "explanation": {
              "approach": "Describe panic",
              "rationale": "Wrong diagnostic picture",
              "keyIndicators": [
                "unexpected attacks"
              ],
              "commonMistake": "Confusing panic with phobia"
            }
          },
          {
            "id": "d",
            "text": "Distress emerging within three months of a clear stressor and resolving once it ends",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Describes adjustment disorder.",
            "explanation": {
              "approach": "Describe adjustment",
              "rationale": "Wrong diagnostic picture",
              "keyIndicators": [
                "stressor-bound"
              ],
              "commonMistake": "Mislabeling chronic phobia"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G069",
    "title": "Rural Widow Struggling After Loss",
    "category": "Trauma",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Prolonged Grief Disorder",
      "code": "F43.81"
    },
    "diagnosis": {
      "name": "Prolonged Grief Disorder",
      "code": "F43.81"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Prolonged Grief Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Posttraumatic Stress Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Adjustment Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Wilma, a 68-year-old low-income woman in a remote rural area, presents 18 months after her husband's death, appearing frail and tearful, her clothing plain and affect sorrowful, eye contact soft and downcast. She reports intense daily yearning, preoccupation with him, and difficulty accepting the loss, murmuring 'I still set two cups out in the morning.'",
      "session1": "Wilma's voice is thin and trembling, frequently trailing into silence, as she describes emotional numbness, avoidance of reminders, and a sense that life is meaningless without him. She notes, with a weary sigh, that geographic isolation limits her contact with others and that she drives over an hour to reach any mental health provider.",
      "session2": "Wilma weeps quietly at times and speaks slowly, confirming her grief reactions have persisted far beyond cultural expectations and impair her daily functioning. She clarifies, steadying her voice, that she denies pervasive mood disturbance unrelated to the loss and that her distress is centered specifically on her husband's death."
    },
    "diagnosticRationale": "Persistent, intense yearning and preoccupation with the deceased beyond twelve months, with identity disruption, avoidance, and impairment exceeding cultural norms, distinguishing prolonged grief from depression or PTSD.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Prolonged grief disorder criteria and duration"
      },
      {
        "id": "R2",
        "source": "Hays (Assessment)",
        "detail": "Cultural and contextual norms for grief"
      },
      {
        "id": "R3",
        "source": "NBCC Content Outline",
        "detail": "Access-to-care and rural service considerations"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "What is the most therapeutic initial response to her ongoing yearning?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Tell her it is time to move on now that more than a year has passed",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dismisses grief and breaks alliance.",
            "explanation": {
              "approach": "Urge moving on",
              "rationale": "Invalidates persistent grief",
              "keyIndicators": [
                "dismissal"
              ],
              "commonMistake": "Imposing a timeline"
            }
          },
          {
            "id": "b",
            "text": "Validate the depth of her bond and gently explore how the loss reshaped her daily life",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Validation supports grief processing.",
            "explanation": {
              "approach": "Validate and explore",
              "rationale": "Honors the attachment and opens processing",
              "keyIndicators": [
                "validation",
                "meaning exploration"
              ],
              "commonMistake": "Rushing toward resolution"
            }
          },
          {
            "id": "c",
            "text": "Redirect her immediately to discussing practical financial planning for her future",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoids the grief content.",
            "explanation": {
              "approach": "Redirect to logistics",
              "rationale": "Bypasses emotional needs",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Problem-solving prematurely"
            }
          },
          {
            "id": "d",
            "text": "Interpret her yearning as an unconscious wish to avoid forming new relationships",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature interpretation.",
            "explanation": {
              "approach": "Offer interpretation",
              "rationale": "Speculative and alienating",
              "keyIndicators": [
                "premature insight"
              ],
              "commonMistake": "Interpreting before rapport"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "How should the counselor address her geographic isolation in the work?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Acknowledge access barriers and collaboratively explore telehealth and local supports to sustain connection",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Addresses real access limits collaboratively.",
            "explanation": {
              "approach": "Address barriers collaboratively",
              "rationale": "Improves continuity of care",
              "keyIndicators": [
                "telehealth",
                "local supports"
              ],
              "commonMistake": "Ignoring access realities"
            }
          },
          {
            "id": "b",
            "text": "Suggest she relocate to a city so she can attend weekly in-person sessions",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Unrealistic and ignores her circumstances.",
            "explanation": {
              "approach": "Suggest relocation",
              "rationale": "Impractical for a low-income widow",
              "keyIndicators": [
                "unrealistic advice"
              ],
              "commonMistake": "Ignoring socioeconomic context"
            }
          },
          {
            "id": "c",
            "text": "Tell her isolation is unfortunate but cannot be part of the counseling work",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismisses a key contextual factor.",
            "explanation": {
              "approach": "Dismiss the issue",
              "rationale": "Misses a clinically relevant barrier",
              "keyIndicators": [
                "dismissal"
              ],
              "commonMistake": "Treating context as irrelevant"
            }
          },
          {
            "id": "d",
            "text": "Reduce session frequency immediately to lower her travel burden without discussion, without further exploration",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Unilateral and not collaborative.",
            "explanation": {
              "approach": "Cut frequency unilaterally",
              "rationale": "Skips shared decision-making",
              "keyIndicators": [
                "non-collaborative"
              ],
              "commonMistake": "Deciding without the client"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature most clearly supports prolonged grief over major depression?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Her distress reflects pervasive low mood unrelated to any specific person or event",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes MDD, not grief.",
            "explanation": {
              "approach": "Note pervasive mood",
              "rationale": "Points to depression",
              "keyIndicators": [
                "non-specific mood"
              ],
              "commonMistake": "Confusing MDD with grief"
            }
          },
          {
            "id": "b",
            "text": "Her symptoms center on intense yearning and preoccupation specifically tied to her late husband",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Grief-specific yearning defines PGD.",
            "explanation": {
              "approach": "Identify loss-focused yearning",
              "rationale": "Distinguishes PGD from depression",
              "keyIndicators": [
                "yearning",
                "preoccupation with deceased"
              ],
              "commonMistake": "Overlooking the loss focus"
            }
          },
          {
            "id": "c",
            "text": "She reports intrusive flashbacks and hyperarousal following a life-threatening event",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes PTSD.",
            "explanation": {
              "approach": "Note trauma symptoms",
              "rationale": "Points to PTSD",
              "keyIndicators": [
                "flashbacks"
              ],
              "commonMistake": "Confusing PTSD with grief"
            }
          },
          {
            "id": "d",
            "text": "Her reactions emerged within three months and are expected to resolve soon",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Describes adjustment disorder.",
            "explanation": {
              "approach": "Note brief course",
              "rationale": "Fits adjustment framing",
              "keyIndicators": [
                "short duration"
              ],
              "commonMistake": "Ignoring the 12-month threshold"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What treatment approach is most appropriate for prolonged grief disorder?",
        "evidenceRef": [
          "R1",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Targeted grief-focused therapy addressing yearning, avoidance, and meaning, adapted for rural access",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Grief-focused and access-adapted.",
            "explanation": {
              "approach": "Grief-focused therapy",
              "rationale": "Targets PGD mechanisms with access in mind",
              "keyIndicators": [
                "grief-focused",
                "access adaptation"
              ],
              "commonMistake": "Using generic supportive talk only"
            }
          },
          {
            "id": "b",
            "text": "Standard antidepressant medication alone with no accompanying grief-focused intervention, without further exploration",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Medication alone is insufficient.",
            "explanation": {
              "approach": "Medication only",
              "rationale": "Misses grief-specific processing",
              "keyIndicators": [
                "incomplete plan"
              ],
              "commonMistake": "Treating PGD as plain depression"
            }
          },
          {
            "id": "c",
            "text": "Exposure therapy for a traumatic memory she has not actually reported",
            "isCorrect": false,
            "weight": -1,
            "rationale": "No trauma criterion is met.",
            "explanation": {
              "approach": "Trauma exposure",
              "rationale": "Misapplies a PTSD protocol",
              "keyIndicators": [
                "wrong protocol"
              ],
              "commonMistake": "Assuming trauma"
            }
          },
          {
            "id": "d",
            "text": "Brief reassurance that grief naturally fades and no further sessions are needed",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Abandons a client with impairing grief.",
            "explanation": {
              "approach": "Reassure and discharge",
              "rationale": "Neglects persistent impairment",
              "keyIndicators": [
                "premature discharge"
              ],
              "commonMistake": "Minimizing prolonged grief"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "Given limited rural services, what is the ethically sound course of action?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Decline to treat her because specialized grief services are unavailable nearby",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Abandonment without alternatives.",
            "explanation": {
              "approach": "Decline outright",
              "rationale": "Leaves the client without care",
              "keyIndicators": [
                "abandonment"
              ],
              "commonMistake": "Refusing within scope"
            }
          },
          {
            "id": "b",
            "text": "Provide competent care within scope while arranging telehealth or consultation to address access gaps",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Balances competence and access.",
            "explanation": {
              "approach": "Treat within scope and bridge gaps",
              "rationale": "Upholds access and competence duties",
              "keyIndicators": [
                "within scope",
                "telehealth bridging"
              ],
              "commonMistake": "Either abandoning or overreaching"
            }
          },
          {
            "id": "c",
            "text": "Practice well beyond her competence area rather than refer the client elsewhere",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Exceeds competence.",
            "explanation": {
              "approach": "Exceed competence",
              "rationale": "Risks harm",
              "keyIndicators": [
                "scope violation"
              ],
              "commonMistake": "Overreaching to fill gaps"
            }
          },
          {
            "id": "d",
            "text": "Delay all treatment indefinitely until a local specialist eventually becomes available",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Indefinite delay denies care.",
            "explanation": {
              "approach": "Delay indefinitely",
              "rationale": "Withholds needed services",
              "keyIndicators": [
                "unnecessary delay"
              ],
              "commonMistake": "Waiting instead of acting"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G070",
    "title": "Veteran Using Stimulants Under Stress",
    "category": "Substance",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Stimulant Use Disorder (Cocaine)",
      "code": "F14.20"
    },
    "diagnosis": {
      "name": "Stimulant Use Disorder (Cocaine)",
      "code": "F14.20"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Stimulant Use Disorder (Cocaine)",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Posttraumatic Stress Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Bipolar I Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Eric, a 41-year-old high-functioning military veteran, arrives well-groomed and composed in business attire, his posture controlled but his leg restless, eye contact steady. He reports escalating cocaine use to manage work stress and, in a measured, matter-of-fact tone, describes craving, tolerance, and failed attempts to cut down, adding 'it just takes the edge off so I can keep performing.'",
      "session1": "Eric speaks fluently and confidently, minimizing as he goes, reporting using more than intended, continued use despite conflict with his spouse, and significant time spent obtaining and recovering from the substance. He frames use as stress relief and, with a shrug, voices ambivalence about changing.",
      "session2": "Eric's tone grows more reflective and his gaze drops briefly as he acknowledges the pattern is harming his health and marriage but states he is not yet ready to commit to abstinence. He expresses distrust of the VA system, preferring community-based options, and weighs the pros and cons of change aloud."
    },
    "diagnosticRationale": "Multiple criteria including tolerance, craving, using more than intended, unsuccessful efforts to cut down, and continued use despite interpersonal problems support a stimulant use disorder rather than a primary mood or trauma disorder.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Stimulant use disorder diagnostic criteria"
      },
      {
        "id": "R2",
        "source": "SAMHSA TIP 35",
        "detail": "Enhancing motivation for change in treatment"
      },
      {
        "id": "R3",
        "source": "Transtheoretical Model",
        "detail": "Stages of change and readiness assessment"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "Given his ambivalence, what is the most appropriate counseling stance?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Confront his denial directly and insist he commit to abstinence before the next session",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Confrontation increases resistance.",
            "explanation": {
              "approach": "Confront denial",
              "rationale": "Heightens resistance in ambivalence",
              "keyIndicators": [
                "confrontation"
              ],
              "commonMistake": "Demanding readiness prematurely"
            }
          },
          {
            "id": "b",
            "text": "Use reflective listening to explore ambivalence and elicit his own reasons for change",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Motivational stance fits ambivalence.",
            "explanation": {
              "approach": "Explore ambivalence reflectively",
              "rationale": "Aligns with motivational interviewing",
              "keyIndicators": [
                "reflective listening",
                "change talk"
              ],
              "commonMistake": "Pushing for commitment too soon"
            }
          },
          {
            "id": "c",
            "text": "Provide a detailed warning about long-term medical harms to frighten him into stopping",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Scare tactics rarely sustain change.",
            "explanation": {
              "approach": "Use fear appeals",
              "rationale": "Ineffective and alienating",
              "keyIndicators": [
                "scare tactics"
              ],
              "commonMistake": "Relying on fear"
            }
          },
          {
            "id": "d",
            "text": "Agree his use is harmless stress relief and postpone any discussion of change",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Colludes with minimization.",
            "explanation": {
              "approach": "Minimize the problem",
              "rationale": "Reinforces avoidance",
              "keyIndicators": [
                "collusion"
              ],
              "commonMistake": "Avoiding the concern"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "Which response best evokes change talk from this client?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Ask him what concerns he has about his use and what a better situation might look like",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Open evocative questions elicit change talk.",
            "explanation": {
              "approach": "Evoke with open questions",
              "rationale": "Draws out the client's own motivation",
              "keyIndicators": [
                "evocation",
                "open questions"
              ],
              "commonMistake": "Lecturing instead of asking"
            }
          },
          {
            "id": "b",
            "text": "Tell him exactly why he must quit and list the steps he should follow",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Directive prescribing bypasses motivation.",
            "explanation": {
              "approach": "Prescribe steps",
              "rationale": "Skips the client's autonomy",
              "keyIndicators": [
                "directing"
              ],
              "commonMistake": "Imposing the plan"
            }
          },
          {
            "id": "c",
            "text": "Point out that other veterans have successfully quit and he should too",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Comparison pressures rather than evokes.",
            "explanation": {
              "approach": "Compare to others",
              "rationale": "Externalizes motivation",
              "keyIndicators": [
                "comparison pressure"
              ],
              "commonMistake": "Borrowing others' reasons"
            }
          },
          {
            "id": "d",
            "text": "Express disappointment that he has not already decided to change his behavior",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Judgment damages alliance.",
            "explanation": {
              "approach": "Express disappointment",
              "rationale": "Shaming and counterproductive",
              "keyIndicators": [
                "judgment"
              ],
              "commonMistake": "Conveying disapproval"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which assessment finding most directly supports a stimulant use disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "He reports a distinct period of elevated mood and reduced need for sleep lasting a week",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Suggests a manic episode.",
            "explanation": {
              "approach": "Note mood elevation",
              "rationale": "Points to bipolar disorder",
              "keyIndicators": [
                "manic features"
              ],
              "commonMistake": "Confusing intoxication with mania"
            }
          },
          {
            "id": "b",
            "text": "He describes craving, tolerance, and continued use despite recurrent conflict with his spouse",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Core SUD criteria are present.",
            "explanation": {
              "approach": "Identify SUD criteria",
              "rationale": "Maps to diagnostic criteria",
              "keyIndicators": [
                "craving",
                "tolerance",
                "interpersonal harm"
              ],
              "commonMistake": "Overlooking the criteria set"
            }
          },
          {
            "id": "c",
            "text": "He reports re-experiencing a combat event with nightmares and avoidance of reminders",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Suggests PTSD.",
            "explanation": {
              "approach": "Note trauma symptoms",
              "rationale": "Points to PTSD",
              "keyIndicators": [
                "re-experiencing"
              ],
              "commonMistake": "Defaulting to trauma"
            }
          },
          {
            "id": "d",
            "text": "He worries persistently about numerous unrelated daily life concerns",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Suggests GAD.",
            "explanation": {
              "approach": "Note diffuse worry",
              "rationale": "Points to anxiety disorder",
              "keyIndicators": [
                "diffuse worry"
              ],
              "commonMistake": "Mislabeling worry"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Considering his readiness, what is the best initial treatment focus?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Mandate immediate residential treatment regardless of his stated readiness to change",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Mismatched to his stage of change.",
            "explanation": {
              "approach": "Mandate residential care",
              "rationale": "Ignores readiness level",
              "keyIndicators": [
                "stage mismatch"
              ],
              "commonMistake": "Overshooting readiness"
            }
          },
          {
            "id": "b",
            "text": "Build motivation and a decisional balance while respecting his current stage of change",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Matches contemplation-stage work.",
            "explanation": {
              "approach": "Stage-matched motivation",
              "rationale": "Fits the transtheoretical model",
              "keyIndicators": [
                "decisional balance",
                "stage matching"
              ],
              "commonMistake": "Jumping to action tasks"
            }
          },
          {
            "id": "c",
            "text": "Require complete abstinence and discharge him if he uses again at all",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Punitive and premature.",
            "explanation": {
              "approach": "Demand abstinence",
              "rationale": "Sets up failure and dropout",
              "keyIndicators": [
                "punitive stance"
              ],
              "commonMistake": "All-or-nothing demands"
            }
          },
          {
            "id": "d",
            "text": "Wait passively until he independently decides he is fully ready to change",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Passivity misses the counselor's role.",
            "explanation": {
              "approach": "Wait passively",
              "rationale": "Neglects active engagement",
              "keyIndicators": [
                "passivity"
              ],
              "commonMistake": "Doing nothing"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Which statement best reflects his current stage of change?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "He is in precontemplation, denying any problem and seeing no reason to consider change",
            "isCorrect": false,
            "weight": -1,
            "rationale": "He acknowledges harm, so not precontemplation.",
            "explanation": {
              "approach": "Label precontemplation",
              "rationale": "Mismatches his awareness",
              "keyIndicators": [
                "awareness present"
              ],
              "commonMistake": "Underestimating readiness"
            }
          },
          {
            "id": "b",
            "text": "He is in contemplation, aware of harms and weighing change yet not committed to action",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Ambivalence with awareness fits contemplation.",
            "explanation": {
              "approach": "Label contemplation",
              "rationale": "Matches ambivalence and awareness",
              "keyIndicators": [
                "ambivalence",
                "weighing change"
              ],
              "commonMistake": "Confusing it with action"
            }
          },
          {
            "id": "c",
            "text": "He is in action, having already implemented sustained abstinence and new routines",
            "isCorrect": false,
            "weight": -2,
            "rationale": "No behavior change yet.",
            "explanation": {
              "approach": "Label action",
              "rationale": "Overstates his progress",
              "keyIndicators": [
                "no change yet"
              ],
              "commonMistake": "Overestimating readiness"
            }
          },
          {
            "id": "d",
            "text": "He is in maintenance, working to prevent relapse after long-term change",
            "isCorrect": false,
            "weight": -2,
            "rationale": "No established change to maintain.",
            "explanation": {
              "approach": "Label maintenance",
              "rationale": "Far ahead of his actual stage",
              "keyIndicators": [
                "premature labeling"
              ],
              "commonMistake": "Skipping stages"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G071",
    "title": "Young Man With Persistent Rule-Breaking",
    "category": "Personality",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Antisocial Personality Disorder",
      "code": "F60.2"
    },
    "diagnosis": {
      "name": "Antisocial Personality Disorder",
      "code": "F60.2"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Antisocial Personality Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Narcissistic Personality Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Intermittent Explosive Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Conduct Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Kevin, a 29-year-old Asian American man, sits with a casual, indifferent posture and a guarded, faintly defiant affect, eye contact direct but cool. Referred after legal trouble, he reports in a flat, unbothered tone a longstanding pattern of deceit, impulsivity, irritability, and disregard for others' rights since adolescence, noting 'rules were always just my family's way of controlling me.'",
      "session1": "Kevin speaks smoothly and without visible remorse, occasionally smirking, describing repeated rule violations, lack of remorse, and exploitation of others, with documented conduct problems before age 15. He frames his behavior partly as rebellion against rigid collectivist family expectations.",
      "session2": "Kevin's affect remains shallow and his tone dismissive as he shows little genuine concern for the harm caused and externalizes blame. He confirms, with a careless wave, that he is over 18 with evidence of conduct disorder onset before 15, and his pattern is pervasive across settings rather than limited to discrete episodes."
    },
    "diagnosticRationale": "A pervasive pattern of disregard for and violation of others' rights since age 15, with deceit, impulsivity, irritability, and lack of remorse in an adult with prior conduct disorder, supports antisocial personality disorder.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Antisocial personality disorder criteria and onset"
      },
      {
        "id": "R2",
        "source": "Hays (Assessment)",
        "detail": "Cultural framing of rule-breaking and family pressure"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Nonjudgmental stance and client welfare"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "What is the most effective counseling stance with this client?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Adopt a firm, consistent, nonjudgmental stance with clear limits while maintaining genuine engagement",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Structure plus nonjudgment fits this presentation.",
            "explanation": {
              "approach": "Firm and nonjudgmental",
              "rationale": "Limits with respect support engagement",
              "keyIndicators": [
                "clear limits",
                "nonjudgmental"
              ],
              "commonMistake": "Becoming punitive or permissive"
            }
          },
          {
            "id": "b",
            "text": "Express moral disapproval of his actions to motivate immediate behavioral change, without further exploration",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Moralizing damages alliance.",
            "explanation": {
              "approach": "Moralize",
              "rationale": "Provokes defensiveness",
              "keyIndicators": [
                "moral judgment"
              ],
              "commonMistake": "Lecturing the client"
            }
          },
          {
            "id": "c",
            "text": "Accept all his justifications without setting any boundaries on session conduct",
            "isCorrect": false,
            "weight": -1,
            "rationale": "No limits undermines the work.",
            "explanation": {
              "approach": "Set no limits",
              "rationale": "Permits manipulation",
              "keyIndicators": [
                "boundaryless"
              ],
              "commonMistake": "Avoiding structure"
            }
          },
          {
            "id": "d",
            "text": "Mirror his irritability to demonstrate that you will not be intimidated",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Escalation harms safety.",
            "explanation": {
              "approach": "Mirror irritability",
              "rationale": "Escalates conflict",
              "keyIndicators": [
                "escalation"
              ],
              "commonMistake": "Engaging in power struggle"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "How should the counselor handle his framing of behavior as cultural rebellion?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Accept rebellion as a full explanation and avoid examining the pervasive behavioral pattern",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Overlooks the broader pattern.",
            "explanation": {
              "approach": "Accept rebellion framing",
              "rationale": "Excuses pervasive behavior",
              "keyIndicators": [
                "over-attribution to culture"
              ],
              "commonMistake": "Mistaking pattern for protest"
            }
          },
          {
            "id": "b",
            "text": "Explore family-pressure context while still assessing the pervasive, cross-setting pattern of behavior",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Holds culture and pattern simultaneously.",
            "explanation": {
              "approach": "Explore context and pattern",
              "rationale": "Balances cultural and clinical lenses",
              "keyIndicators": [
                "family pressure",
                "pervasive pattern"
              ],
              "commonMistake": "Choosing only one lens"
            }
          },
          {
            "id": "c",
            "text": "Dismiss his cultural framing as merely an excuse to avoid taking responsibility",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismisses relevant cultural context.",
            "explanation": {
              "approach": "Dismiss culture",
              "rationale": "Ignores meaningful context",
              "keyIndicators": [
                "cultural dismissal"
              ],
              "commonMistake": "Discounting context"
            }
          },
          {
            "id": "d",
            "text": "Conclude his family's expectations are the sole cause of all his difficulties",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Over-attributes to family alone.",
            "explanation": {
              "approach": "Blame family solely",
              "rationale": "Ignores his pervasive pattern",
              "keyIndicators": [
                "over-attribution"
              ],
              "commonMistake": "Single-cause thinking"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which finding is required to diagnose antisocial personality disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Evidence of conduct disorder with onset before the age of fifteen",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Conduct disorder onset is required.",
            "explanation": {
              "approach": "Confirm conduct disorder onset",
              "rationale": "A mandatory criterion for ASPD",
              "keyIndicators": [
                "onset before 15",
                "conduct disorder"
              ],
              "commonMistake": "Skipping the developmental history"
            }
          },
          {
            "id": "b",
            "text": "A grandiose need for admiration and sense of personal entitlement",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes narcissistic features.",
            "explanation": {
              "approach": "Note grandiosity",
              "rationale": "Points to NPD",
              "keyIndicators": [
                "grandiosity"
              ],
              "commonMistake": "Confusing NPD with ASPD"
            }
          },
          {
            "id": "c",
            "text": "Discrete episodes of aggressive outbursts grossly out of proportion to provocation",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes intermittent explosive disorder.",
            "explanation": {
              "approach": "Note episodic aggression",
              "rationale": "Points to IED",
              "keyIndicators": [
                "episodic outbursts"
              ],
              "commonMistake": "Mislabeling episodic anger"
            }
          },
          {
            "id": "d",
            "text": "Current age under eighteen with recent onset of conduct problems",
            "isCorrect": false,
            "weight": -2,
            "rationale": "ASPD requires age 18 or older.",
            "explanation": {
              "approach": "Note minor age",
              "rationale": "Disqualifies ASPD",
              "keyIndicators": [
                "under 18"
              ],
              "commonMistake": "Diagnosing ASPD in minors"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the most realistic treatment goal for this client?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Promise a full personality transformation within a brief, time-limited course of therapy",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Unrealistic for ASPD.",
            "explanation": {
              "approach": "Promise transformation",
              "rationale": "Sets unattainable expectations",
              "keyIndicators": [
                "overpromising"
              ],
              "commonMistake": "Ignoring chronicity"
            }
          },
          {
            "id": "b",
            "text": "Target specific behaviors and harm reduction with structured, consistent, and realistic goals",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Behavior-focused goals are realistic.",
            "explanation": {
              "approach": "Target behaviors",
              "rationale": "Pragmatic and achievable",
              "keyIndicators": [
                "harm reduction",
                "behavioral goals"
              ],
              "commonMistake": "Aiming at full personality change"
            }
          },
          {
            "id": "c",
            "text": "Focus exclusively on building deep empathy he is expected to lack",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Unlikely primary leverage point.",
            "explanation": {
              "approach": "Build empathy only",
              "rationale": "Low-yield as a sole focus",
              "keyIndicators": [
                "narrow focus"
              ],
              "commonMistake": "Targeting traits over behaviors"
            }
          },
          {
            "id": "d",
            "text": "Discharge him because clients with this diagnosis cannot benefit from any treatment",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Therapeutic nihilism is inaccurate.",
            "explanation": {
              "approach": "Discharge as untreatable",
              "rationale": "Behavioral gains remain possible",
              "keyIndicators": [
                "nihilism"
              ],
              "commonMistake": "Writing the client off"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "He reveals plans involving potential harm to others. What is the ethical priority?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Keep all disclosures confidential to preserve the therapeutic relationship at all costs",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Confidentiality is not absolute.",
            "explanation": {
              "approach": "Maintain absolute confidentiality",
              "rationale": "Ignores duty to protect",
              "keyIndicators": [
                "false absolute"
              ],
              "commonMistake": "Overstating confidentiality"
            }
          },
          {
            "id": "b",
            "text": "Assess the threat carefully and act to protect identifiable others while documenting decisions",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Risk assessment and protection are required.",
            "explanation": {
              "approach": "Assess and protect",
              "rationale": "Balances confidentiality with safety duties",
              "keyIndicators": [
                "threat assessment",
                "duty to protect"
              ],
              "commonMistake": "Acting without assessment or not at all"
            }
          },
          {
            "id": "c",
            "text": "Immediately terminate services to avoid any further involvement with him",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Abandonment without process.",
            "explanation": {
              "approach": "Terminate abruptly",
              "rationale": "Neglects safety and abandonment rules",
              "keyIndicators": [
                "abandonment"
              ],
              "commonMistake": "Avoiding rather than acting"
            }
          },
          {
            "id": "d",
            "text": "Report every statement he makes to authorities regardless of credibility or specificity",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Over-reporting without assessment.",
            "explanation": {
              "approach": "Report everything",
              "rationale": "Ignores credibility threshold",
              "keyIndicators": [
                "over-reporting"
              ],
              "commonMistake": "Skipping clinical judgment"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G072",
    "title": "Elder Whose Home Is Filling Up",
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
        "id": "d1",
        "name": "Hoarding Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Obsessive-Compulsive Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Major Neurocognitive Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Margaret, a 72-year-old Indigenous elder, is referred by a concerned relative because possessions fill the living space, and she presents calm and dignified but somewhat anxious, eye contact warm yet guarded. In a steady, soft-spoken voice she reports persistent difficulty discarding items and significant distress at the thought of parting with them, saying 'each thing holds a story I cannot let go.'",
      "session1": "Margaret speaks deliberately and protectively about her belongings, her tone tightening when discarding is mentioned, explaining that some items hold cultural and ceremonial meaning while many others are unused and create clutter that limits use of rooms. She describes strong community ties and, with quiet wariness, reluctance to involve outside agencies due to historical mistrust.",
      "session2": "Margaret's voice remains measured and her affect anxious as she clarifies that the accumulation is driven by perceived need to save and distress on discarding, not by intrusive obsessions or memory loss. She acknowledges, with a regretful pause and lowered eyes, that functional areas of the home are congested and that the situation strains family relationships."
    },
    "diagnosticRationale": "Persistent difficulty discarding possessions due to perceived need to save and distress on discarding, resulting in congested living areas and impairment, distinguishes hoarding disorder from OCD, depression, or neurocognitive decline.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Hoarding disorder criteria and clutter features"
      },
      {
        "id": "R2",
        "source": "Hays (Assessment)",
        "detail": "Distinguishing cultural items from clinical hoarding"
      },
      {
        "id": "R3",
        "source": "NBCC Content Outline",
        "detail": "Community resources and collaborative care"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "What is the most respectful way to begin addressing the clutter?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Insist the elder begin discarding most items immediately to clear the living space without addressing it further at all",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Forced discarding harms alliance.",
            "explanation": {
              "approach": "Demand discarding",
              "rationale": "Triggers distress and resistance",
              "keyIndicators": [
                "forced discarding"
              ],
              "commonMistake": "Pushing too fast"
            }
          },
          {
            "id": "b",
            "text": "Collaboratively explore the meaning of items, distinguishing culturally significant belongings from distressing clutter",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Honors meaning and builds collaboration.",
            "explanation": {
              "approach": "Explore meaning collaboratively",
              "rationale": "Separates culture from pathology",
              "keyIndicators": [
                "item meaning",
                "cultural significance"
              ],
              "commonMistake": "Labeling all items as clutter"
            }
          },
          {
            "id": "c",
            "text": "Treat every saved possession as clinically meaningless and a target for removal",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Ignores cultural significance.",
            "explanation": {
              "approach": "Devalue all items",
              "rationale": "Disrespects cultural meaning",
              "keyIndicators": [
                "cultural blindness"
              ],
              "commonMistake": "Overgeneralizing pathology"
            }
          },
          {
            "id": "d",
            "text": "Avoid the topic entirely to keep the elder comfortable during early sessions",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Avoidance delays needed work.",
            "explanation": {
              "approach": "Avoid the topic",
              "rationale": "Neglects the presenting problem",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Sidestepping the concern"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "How should the counselor respond to the elder's mistrust of outside agencies?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Acknowledge historical mistrust and explore community-based, culturally grounded supports the elder finds acceptable",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Validates history and centers community.",
            "explanation": {
              "approach": "Acknowledge and center community",
              "rationale": "Respects historical trauma",
              "keyIndicators": [
                "historical mistrust",
                "community supports"
              ],
              "commonMistake": "Ignoring the source of mistrust"
            }
          },
          {
            "id": "b",
            "text": "Insist the elder accept formal agency involvement despite the expressed reluctance without addressing it further at all",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ignores autonomy and history.",
            "explanation": {
              "approach": "Insist on agencies",
              "rationale": "Disregards valid concerns",
              "keyIndicators": [
                "coercion"
              ],
              "commonMistake": "Overriding the client"
            }
          },
          {
            "id": "c",
            "text": "Tell the elder the mistrust is unfounded and should simply be set aside",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismisses legitimate history.",
            "explanation": {
              "approach": "Dismiss mistrust",
              "rationale": "Invalidates historical trauma",
              "keyIndicators": [
                "dismissal"
              ],
              "commonMistake": "Minimizing real harm"
            }
          },
          {
            "id": "d",
            "text": "Drop the issue of support resources and proceed without any external collaboration",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Misses helpful resources.",
            "explanation": {
              "approach": "Drop resources",
              "rationale": "Forgoes useful supports",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Working in isolation"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature best distinguishes hoarding disorder from OCD here?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Saving is driven by perceived need and distress on discarding rather than intrusive obsessions",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Defines hoarding versus OCD.",
            "explanation": {
              "approach": "Identify saving motive",
              "rationale": "Distinguishes hoarding from OCD",
              "keyIndicators": [
                "perceived need",
                "no obsessions"
              ],
              "commonMistake": "Assuming OCD drives saving"
            }
          },
          {
            "id": "b",
            "text": "The behavior is performed to neutralize unwanted intrusive thoughts and reduce anxiety, without further exploration",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes OCD compulsions.",
            "explanation": {
              "approach": "Note neutralizing",
              "rationale": "Points to OCD",
              "keyIndicators": [
                "compulsion"
              ],
              "commonMistake": "Confusing OCD with hoarding"
            }
          },
          {
            "id": "c",
            "text": "Pervasive low mood and anhedonia better account for the accumulation",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Points to depression.",
            "explanation": {
              "approach": "Note depressed mood",
              "rationale": "Points to MDD",
              "keyIndicators": [
                "mood-driven"
              ],
              "commonMistake": "Mislabeling as depression"
            }
          },
          {
            "id": "d",
            "text": "Progressive memory decline explains the inability to manage possessions",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Points to neurocognitive disorder.",
            "explanation": {
              "approach": "Note memory loss",
              "rationale": "Points to a neurocognitive cause",
              "keyIndicators": [
                "cognitive decline"
              ],
              "commonMistake": "Overlooking the saving motive"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the most appropriate treatment approach for this elder?",
        "evidenceRef": [
          "R1",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Arrange a forced cleanout of the home while the elder is away from the residence",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Forced cleanouts cause trauma and relapse.",
            "explanation": {
              "approach": "Force a cleanout",
              "rationale": "Harmful and ineffective",
              "keyIndicators": [
                "forced removal"
              ],
              "commonMistake": "Removing items without the client"
            }
          },
          {
            "id": "b",
            "text": "Skills-based therapy targeting sorting, decision-making, and discarding at a pace the elder accepts",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Evidence-based, paced, collaborative.",
            "explanation": {
              "approach": "Skills-based, paced therapy",
              "rationale": "Matches hoarding treatment evidence",
              "keyIndicators": [
                "sorting skills",
                "client-paced"
              ],
              "commonMistake": "Rushing the process"
            }
          },
          {
            "id": "c",
            "text": "Prescribe exposure with response prevention as though intrusive obsessions were present",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misapplies an OCD protocol.",
            "explanation": {
              "approach": "Apply ERP for OCD",
              "rationale": "Wrong protocol for hoarding",
              "keyIndicators": [
                "protocol mismatch"
              ],
              "commonMistake": "Treating it as OCD"
            }
          },
          {
            "id": "d",
            "text": "Provide only general supportive listening with no structured discarding plan",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Lacks structure for hoarding.",
            "explanation": {
              "approach": "Support only",
              "rationale": "Insufficient for hoarding disorder",
              "keyIndicators": [
                "no structure"
              ],
              "commonMistake": "Omitting skills work"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "The relative requests the counselor disclose details about sessions. What is appropriate?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Share full session content with the relative since they made the original referral, without further exploration",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Breaches client confidentiality.",
            "explanation": {
              "approach": "Disclose to relative",
              "rationale": "Violates confidentiality",
              "keyIndicators": [
                "unauthorized disclosure"
              ],
              "commonMistake": "Treating the referrer as the client"
            }
          },
          {
            "id": "b",
            "text": "Protect confidentiality, involve the relative only with the elder's informed consent and collaboration",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Consent governs family involvement.",
            "explanation": {
              "approach": "Require consent first",
              "rationale": "Upholds confidentiality and autonomy",
              "keyIndicators": [
                "informed consent",
                "client autonomy"
              ],
              "commonMistake": "Disclosing without consent"
            }
          },
          {
            "id": "c",
            "text": "Refuse all family involvement permanently regardless of the elder's own wishes",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Ignores possible consented collaboration.",
            "explanation": {
              "approach": "Bar all involvement",
              "rationale": "Overlooks the client's preferences",
              "keyIndicators": [
                "rigid refusal"
              ],
              "commonMistake": "Ignoring client autonomy"
            }
          },
          {
            "id": "d",
            "text": "Let the relative attend every session without first discussing it with the elder",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Bypasses the client's consent.",
            "explanation": {
              "approach": "Admit relative unilaterally",
              "rationale": "Skips consent",
              "keyIndicators": [
                "no consent"
              ],
              "commonMistake": "Deciding for the client"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G073",
    "title": "Client Navigating Body Image and Eating",
    "category": "Eating",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Bulimia Nervosa",
      "code": "F50.2"
    },
    "diagnosis": {
      "name": "Bulimia Nervosa",
      "code": "F50.2"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Bulimia Nervosa",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Anorexia Nervosa, Binge-Eating/Purging Type",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Binge-Eating Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Riley, a 27-year-old adult with a physical disability, presents with neat grooming but a tense, downcast demeanor, eye contact intermittent and affect ashamed. They describe recurrent episodes of loss-of-control eating followed by compensatory behaviors and, in a quiet, hesitant voice, significant distress about body image shaped by both disability and appearance-related messages, noting 'I feel like my body is never mine to judge fairly.'",
      "session1": "Riley speaks haltingly with frequent self-critical asides, their voice dropping with shame, reporting that episodes occur regularly and are tied to self-worth being unduly influenced by body shape. They describe feeling that their body is judged through an ableist lens, which intensifies the secrecy around their eating.",
      "session2": "Riley's posture eases slightly and their tone steadies as trust builds, clarifying that their weight is within a typical range and the pattern reflects binge episodes with compensatory behavior rather than restriction-driven low weight. With cautious hope they express readiness to address the cycle in an affirming, non-stigmatizing environment."
    },
    "diagnosticRationale": "Recurrent loss-of-control eating with compensatory behaviors, self-evaluation unduly influenced by body shape, and weight within a typical range support bulimia nervosa rather than anorexia, binge-eating disorder, or depression.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Bulimia nervosa criteria and self-evaluation feature"
      },
      {
        "id": "R2",
        "source": "Hays (Assessment)",
        "detail": "Anti-ableist, intersectional body-image framing"
      },
      {
        "id": "R3",
        "source": "NICE guidelines",
        "detail": "Evidence-based eating disorder treatment"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "What is the most affirming initial response to their body-image distress?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Reassure them their body looks fine and that they have nothing to worry about",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reassurance bypasses the concern.",
            "explanation": {
              "approach": "Reassure appearance",
              "rationale": "Dismisses underlying distress",
              "keyIndicators": [
                "empty reassurance"
              ],
              "commonMistake": "Minimizing body-image pain"
            }
          },
          {
            "id": "b",
            "text": "Validate their experience and explore how ableist messages intersect with their body-image concerns",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Affirming, intersectional validation.",
            "explanation": {
              "approach": "Validate and explore intersection",
              "rationale": "Names ableism shaping body image",
              "keyIndicators": [
                "ableist messages",
                "intersectionality"
              ],
              "commonMistake": "Ignoring the disability context"
            }
          },
          {
            "id": "c",
            "text": "Focus the session on their disability as the single root of all distress",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Over-attributes to disability.",
            "explanation": {
              "approach": "Center disability solely",
              "rationale": "Oversimplifies the picture",
              "keyIndicators": [
                "single-cause"
              ],
              "commonMistake": "Reducing the client to one factor"
            }
          },
          {
            "id": "d",
            "text": "Challenge their body-image beliefs as distortions before any trust is established, without further exploration",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Premature challenge harms alliance.",
            "explanation": {
              "approach": "Challenge early",
              "rationale": "Damages rapport",
              "keyIndicators": [
                "premature confrontation"
              ],
              "commonMistake": "Skipping validation"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "How should the counselor address the secrecy and shame surrounding eating?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Normalize the shame, build safety, and gently explore the function of the eating cycle",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Reducing shame supports disclosure.",
            "explanation": {
              "approach": "Normalize and build safety",
              "rationale": "Lowers shame to enable change",
              "keyIndicators": [
                "shame reduction",
                "function of behavior"
              ],
              "commonMistake": "Increasing shame inadvertently"
            }
          },
          {
            "id": "b",
            "text": "Express alarm about the behavior to convey how serious the situation truly is",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Alarm heightens shame.",
            "explanation": {
              "approach": "Express alarm",
              "rationale": "Reinforces secrecy",
              "keyIndicators": [
                "shaming reaction"
              ],
              "commonMistake": "Reacting with alarm"
            }
          },
          {
            "id": "c",
            "text": "Request a detailed account of the specific methods they use after eating",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Method detail is unnecessary and harmful.",
            "explanation": {
              "approach": "Probe methods",
              "rationale": "Seeks harmful how-to detail",
              "keyIndicators": [
                "inappropriate detail"
              ],
              "commonMistake": "Eliciting method specifics"
            }
          },
          {
            "id": "d",
            "text": "Tell them to simply stop the behavior through stronger willpower and discipline",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Willpower framing is stigmatizing.",
            "explanation": {
              "approach": "Invoke willpower",
              "rationale": "Misunderstands the disorder",
              "keyIndicators": [
                "moralizing"
              ],
              "commonMistake": "Framing it as a choice"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature best supports bulimia nervosa over anorexia nervosa?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Their body weight is significantly below the minimally expected range for their context",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Low weight points to anorexia.",
            "explanation": {
              "approach": "Note low weight",
              "rationale": "Points to anorexia",
              "keyIndicators": [
                "low weight"
              ],
              "commonMistake": "Confusing the two disorders"
            }
          },
          {
            "id": "b",
            "text": "Their weight is within a typical range alongside recurrent binge and compensatory cycles",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Typical weight with cycles fits bulimia.",
            "explanation": {
              "approach": "Note typical weight",
              "rationale": "Distinguishes bulimia from anorexia",
              "keyIndicators": [
                "typical weight",
                "binge-compensatory cycle"
              ],
              "commonMistake": "Overlooking the weight criterion"
            }
          },
          {
            "id": "c",
            "text": "They report binge episodes without any compensatory behaviors at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Points to binge-eating disorder.",
            "explanation": {
              "approach": "Note absent compensation",
              "rationale": "Points to BED",
              "keyIndicators": [
                "no compensation"
              ],
              "commonMistake": "Confusing BED with bulimia"
            }
          },
          {
            "id": "d",
            "text": "Their primary disturbance is pervasive sad mood unrelated to eating or shape",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Points to depression.",
            "explanation": {
              "approach": "Note mood focus",
              "rationale": "Points to MDD",
              "keyIndicators": [
                "mood-driven"
              ],
              "commonMistake": "Mislabeling as depression"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the recommended evidence-based treatment for this presentation?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Eating-disorder-focused CBT addressing the binge cycle, body image, and accessible affirming care",
            "isCorrect": true,
            "weight": 3,
            "rationale": "CBT-ED is first-line and adaptable.",
            "explanation": {
              "approach": "CBT for eating disorders",
              "rationale": "First-line evidence-based care",
              "keyIndicators": [
                "CBT-ED",
                "accessible affirming care"
              ],
              "commonMistake": "Choosing nonspecific therapy"
            }
          },
          {
            "id": "b",
            "text": "Long-term insight therapy exploring early conflicts with no eating-cycle focus",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Not first-line for bulimia.",
            "explanation": {
              "approach": "Insight therapy only",
              "rationale": "Omits the eating-cycle target",
              "keyIndicators": [
                "non-first-line"
              ],
              "commonMistake": "Ignoring the behavior pattern"
            }
          },
          {
            "id": "c",
            "text": "Strict dietary rules and rigid meal monitoring imposed without the client's input",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Rigid control can worsen the cycle.",
            "explanation": {
              "approach": "Impose rigid rules",
              "rationale": "Reinforces dietary restraint",
              "keyIndicators": [
                "rigid control"
              ],
              "commonMistake": "Increasing restriction"
            }
          },
          {
            "id": "d",
            "text": "Brief reassurance and discharge once the client reports feeling slightly better",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature discharge.",
            "explanation": {
              "approach": "Reassure and discharge",
              "rationale": "Neglects ongoing treatment needs",
              "keyIndicators": [
                "premature discharge"
              ],
              "commonMistake": "Ending care too soon"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "How should the counselor ensure ethical, accessible care for this client?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Assume their disability prevents meaningful participation and lower the treatment goals accordingly, without further exploration",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ableist assumption violates ethics.",
            "explanation": {
              "approach": "Lower expectations",
              "rationale": "Reflects ableist bias",
              "keyIndicators": [
                "ableism"
              ],
              "commonMistake": "Underestimating capacity"
            }
          },
          {
            "id": "b",
            "text": "Provide accommodations, affirming language, and individualized care respecting the client's autonomy and goals",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Accessible, autonomy-respecting care.",
            "explanation": {
              "approach": "Accommodate and affirm",
              "rationale": "Upholds accessibility and dignity",
              "keyIndicators": [
                "accommodations",
                "autonomy"
              ],
              "commonMistake": "Failing to individualize"
            }
          },
          {
            "id": "c",
            "text": "Refer the client elsewhere solely because they have a physical disability",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Discriminatory referral.",
            "explanation": {
              "approach": "Refer due to disability",
              "rationale": "Discriminatory and unethical",
              "keyIndicators": [
                "discrimination"
              ],
              "commonMistake": "Refusing within competence"
            }
          },
          {
            "id": "d",
            "text": "Proceed identically to any other case without considering accessibility at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Ignores accessibility needs.",
            "explanation": {
              "approach": "Ignore accessibility",
              "rationale": "Misses individualized adaptation",
              "keyIndicators": [
                "one-size-fits-all"
              ],
              "commonMistake": "Overlooking accommodations"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G074",
    "title": "Devout Client Reporting Shifts in Self",
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
        "id": "d1",
        "name": "Dissociative Identity Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Posttraumatic Stress Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Borderline Personality Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Schizophrenia",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Naomi, a 34-year-old observant religious client, presents with modest, careful grooming and a watchful, uneasy affect, eye contact variable and at times noticeably shifting. She reports distinct shifts in identity, recurrent memory gaps, and finding unfamiliar items she cannot recall acquiring, interpreting some experiences through a faith-based lens and saying softly 'I'm afraid you'll think I'm not faithful, or that I'm crazy.'",
      "session1": "Naomi's voice and demeanor shift noticeably during the session, her tone and posture changing as she describes two or more distinct personality states with discontinuity in sense of self and agency, plus amnesia for everyday events. She speaks with quiet worry that integration would conflict with her religious understanding of the self.",
      "session2": "Naomi speaks more openly though still guardedly, her affect steadier, clarifying that her presentation reflects identity disruption and dissociative amnesia rather than psychosis or solely mood-driven identity instability. She states earnestly that she values co-consciousness language and wants care that respects her faith while addressing her trauma history."
    },
    "diagnosticRationale": "Two or more distinct personality states with marked discontinuity in self and agency, recurrent gaps in recall of everyday events, and significant distress support dissociative identity disorder over PTSD, borderline personality, or schizophrenia.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Dissociative identity disorder criteria"
      },
      {
        "id": "R2",
        "source": "Hays (Assessment)",
        "detail": "Faith-sensitive interpretation of dissociation"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Respect for client values and informed consent"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "How should the counselor respond to the client's faith-based interpretation?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Respect their faith framework while collaboratively integrating it with trauma-informed understanding of dissociation",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Integrates faith and clinical care.",
            "explanation": {
              "approach": "Respect faith and integrate",
              "rationale": "Honors values within sound care",
              "keyIndicators": [
                "faith framework",
                "trauma-informed"
              ],
              "commonMistake": "Pitting faith against treatment"
            }
          },
          {
            "id": "b",
            "text": "Tell the client their religious interpretation is mistaken and must be set aside",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dismisses core values.",
            "explanation": {
              "approach": "Dismiss faith",
              "rationale": "Alienates and disrespects values",
              "keyIndicators": [
                "value dismissal"
              ],
              "commonMistake": "Overriding beliefs"
            }
          },
          {
            "id": "c",
            "text": "Adopt the client's faith explanation fully and avoid any clinical conceptualization without addressing it further at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Abandons clinical responsibility.",
            "explanation": {
              "approach": "Abandon clinical frame",
              "rationale": "Forgoes appropriate care",
              "keyIndicators": [
                "over-accommodation"
              ],
              "commonMistake": "Dropping the clinical lens"
            }
          },
          {
            "id": "d",
            "text": "Refer the client to clergy and end the counseling relationship right away",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Abandonment without process.",
            "explanation": {
              "approach": "Refer out abruptly",
              "rationale": "Neglects the client's needs",
              "keyIndicators": [
                "abandonment"
              ],
              "commonMistake": "Avoiding the work"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "The client prefers co-consciousness over integration. How should the counselor proceed?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Insist integration is the only valid goal and disregard the client's stated preference without addressing it further at all",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ignores client autonomy.",
            "explanation": {
              "approach": "Insist on integration",
              "rationale": "Overrides autonomy",
              "keyIndicators": [
                "autonomy violation"
              ],
              "commonMistake": "Imposing a single goal"
            }
          },
          {
            "id": "b",
            "text": "Explore goals collaboratively, supporting safety and functioning while respecting their preference for co-consciousness",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Honors autonomy and safety.",
            "explanation": {
              "approach": "Collaborate on goals",
              "rationale": "Respects autonomy within safe care",
              "keyIndicators": [
                "client preference",
                "safety and functioning"
              ],
              "commonMistake": "Forcing integration"
            }
          },
          {
            "id": "c",
            "text": "Agree to any goal the client names without assessing safety or functioning",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Skips safety considerations.",
            "explanation": {
              "approach": "Agree without assessment",
              "rationale": "Neglects safety",
              "keyIndicators": [
                "no safety check"
              ],
              "commonMistake": "Dropping clinical judgment"
            }
          },
          {
            "id": "d",
            "text": "Delay all goal-setting until the client abandons their preference for co-consciousness",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Coercive and stalling.",
            "explanation": {
              "approach": "Delay until they comply",
              "rationale": "Pressures the client",
              "keyIndicators": [
                "coercion"
              ],
              "commonMistake": "Withholding care to force agreement"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature most clearly supports dissociative identity disorder over schizophrenia?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "The presence of fixed delusions and persistent disorganized speech across all settings",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes psychosis.",
            "explanation": {
              "approach": "Note psychotic features",
              "rationale": "Points to schizophrenia",
              "keyIndicators": [
                "delusions"
              ],
              "commonMistake": "Confusing dissociation with psychosis"
            }
          },
          {
            "id": "b",
            "text": "Distinct personality states with discontinuity of self plus recurrent amnesia for everyday events",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Defines DID core criteria.",
            "explanation": {
              "approach": "Identify states and amnesia",
              "rationale": "Maps to DID criteria",
              "keyIndicators": [
                "distinct states",
                "dissociative amnesia"
              ],
              "commonMistake": "Overlooking the amnesia feature"
            }
          },
          {
            "id": "c",
            "text": "Chronic instability of relationships and frantic efforts to avoid abandonment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes borderline features.",
            "explanation": {
              "approach": "Note relational instability",
              "rationale": "Points to BPD",
              "keyIndicators": [
                "abandonment fears"
              ],
              "commonMistake": "Confusing BPD with DID"
            }
          },
          {
            "id": "d",
            "text": "Intrusive trauma memories and hyperarousal without any identity discontinuity",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Describes PTSD.",
            "explanation": {
              "approach": "Note trauma symptoms",
              "rationale": "Points to PTSD",
              "keyIndicators": [
                "no identity disruption"
              ],
              "commonMistake": "Stopping at PTSD"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the most appropriate early treatment focus for this client?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Begin intensive trauma memory processing immediately before any stabilization work, without further exploration",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Premature processing destabilizes.",
            "explanation": {
              "approach": "Process trauma first",
              "rationale": "Skips needed stabilization",
              "keyIndicators": [
                "premature processing"
              ],
              "commonMistake": "Rushing phase work"
            }
          },
          {
            "id": "b",
            "text": "Establish safety, stabilization, and trust before phased, trauma-informed work respecting client values",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Phase-oriented care is standard.",
            "explanation": {
              "approach": "Stabilize first",
              "rationale": "Follows phase-oriented DID care",
              "keyIndicators": [
                "safety",
                "stabilization"
              ],
              "commonMistake": "Skipping stabilization"
            }
          },
          {
            "id": "c",
            "text": "Prescribe exposure therapy as the sole intervention from the first session onward",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Single-modality exposure is premature.",
            "explanation": {
              "approach": "Exposure only",
              "rationale": "Inappropriate as a starting point",
              "keyIndicators": [
                "protocol mismatch"
              ],
              "commonMistake": "Ignoring stabilization"
            }
          },
          {
            "id": "d",
            "text": "Focus only on managing relationship conflicts and ignore the dissociative symptoms",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misses the core presentation.",
            "explanation": {
              "approach": "Ignore dissociation",
              "rationale": "Neglects the primary issue",
              "keyIndicators": [
                "misdirected focus"
              ],
              "commonMistake": "Overlooking DID"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "Which action best upholds ethical practice with this faith-observant client?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Impose the counselor's own views about identity and faith onto the treatment plan",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Imposing values is unethical.",
            "explanation": {
              "approach": "Impose personal views",
              "rationale": "Violates value-neutrality",
              "keyIndicators": [
                "value imposition"
              ],
              "commonMistake": "Pushing counselor beliefs"
            }
          },
          {
            "id": "b",
            "text": "Provide informed consent, respect the client's values, and seek consultation on complex DID care",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Consent, respect, and consultation align with ethics.",
            "explanation": {
              "approach": "Consent and consult",
              "rationale": "Upholds autonomy and competence",
              "keyIndicators": [
                "informed consent",
                "consultation"
              ],
              "commonMistake": "Working beyond competence alone"
            }
          },
          {
            "id": "c",
            "text": "Avoid documenting the dissociative symptoms to protect the client from any stigma",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Inadequate documentation is unethical.",
            "explanation": {
              "approach": "Skip documentation",
              "rationale": "Breaches record-keeping standards",
              "keyIndicators": [
                "poor documentation"
              ],
              "commonMistake": "Omitting clinical records"
            }
          },
          {
            "id": "d",
            "text": "Proceed with complex care without consultation despite limited experience with dissociation",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Exceeds competence without support.",
            "explanation": {
              "approach": "Practice without consultation",
              "rationale": "Risks competence violation",
              "keyIndicators": [
                "scope concern"
              ],
              "commonMistake": "Forgoing consultation"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G075",
    "title": "Older Client Who Cannot Stay Asleep",
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
        "id": "d1",
        "name": "Insomnia Disorder, Chronic",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Circadian Rhythm Sleep-Wake Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Gloria, a 66-year-old African American woman, presents well-groomed but visibly fatigued, with shadowed eyes and a subdued, slightly irritable affect, eye contact polite. She reports difficulty initiating and maintaining sleep most nights for the past year, experiencing daytime fatigue and irritability, and admits with some hesitation 'I don't usually talk about things like this.'",
      "session1": "Gloria speaks in a tired, measured voice, occasionally sighing, describing dissatisfaction with sleep occurring at least three nights weekly despite adequate opportunity to sleep. Her tone softens with pride when she mentions drawing strength from her faith community, though she lowers her voice to admit she has not shared her struggles for fear of being seen as weak.",
      "session2": "Gloria's affect brightens slightly as she engages, clarifying that the difficulty is not better explained by pervasive low mood, generalized worry, or a shifted sleep-wake schedule. She states warmly that she is open to behavioral strategies and values approaches that honor her faith and community supports."
    },
    "diagnosticRationale": "Dissatisfaction with sleep initiation and maintenance at least three nights weekly for over three months, with adequate sleep opportunity and daytime impairment, not better explained by another disorder, supports chronic insomnia disorder.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Insomnia disorder criteria and chronic specifier"
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "Cognitive behavioral therapy for insomnia"
      },
      {
        "id": "R3",
        "source": "Hays (Assessment)",
        "detail": "Faith community supports and mental health stigma"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "What is the most appropriate response to her stigma about seeking help?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Validate her concerns, normalize help-seeking, and explore how her faith community can be supportive",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Reduces stigma using her supports.",
            "explanation": {
              "approach": "Validate and engage faith supports",
              "rationale": "Lowers stigma respectfully",
              "keyIndicators": [
                "stigma reduction",
                "faith community"
              ],
              "commonMistake": "Ignoring community resources"
            }
          },
          {
            "id": "b",
            "text": "Tell her stigma is outdated and that she should ignore her community's views, without further exploration",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismisses her cultural context.",
            "explanation": {
              "approach": "Dismiss community views",
              "rationale": "Alienates the client",
              "keyIndicators": [
                "cultural dismissal"
              ],
              "commonMistake": "Discounting community"
            }
          },
          {
            "id": "c",
            "text": "Avoid the topic of stigma and proceed directly to listing sleep rules",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Skips a key engagement barrier.",
            "explanation": {
              "approach": "Skip the stigma topic",
              "rationale": "Leaves the barrier unaddressed",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Rushing to technique"
            }
          },
          {
            "id": "d",
            "text": "Agree that seeking help signals weakness and suggest she keep it private",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reinforces harmful stigma.",
            "explanation": {
              "approach": "Endorse secrecy",
              "rationale": "Strengthens stigma",
              "keyIndicators": [
                "stigma reinforcement"
              ],
              "commonMistake": "Colluding with stigma"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "Which approach best supports her engagement in sleep-focused work?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Lecture her on the dangers of poor sleep to motivate quick behavioral change, without further exploration",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Lecturing reduces engagement.",
            "explanation": {
              "approach": "Lecture on dangers",
              "rationale": "Less effective than collaboration",
              "keyIndicators": [
                "lecturing"
              ],
              "commonMistake": "Relying on warnings"
            }
          },
          {
            "id": "b",
            "text": "Collaborate on goals that respect her values and build on her existing strengths and supports",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Collaboration and strengths boost engagement.",
            "explanation": {
              "approach": "Collaborate and build strengths",
              "rationale": "Enhances motivation and fit",
              "keyIndicators": [
                "collaboration",
                "strengths-based"
              ],
              "commonMistake": "Imposing a generic plan"
            }
          },
          {
            "id": "c",
            "text": "Hand her a printed list of rules and ask her to follow them exactly",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Rigid prescribing lowers buy-in.",
            "explanation": {
              "approach": "Hand over rules",
              "rationale": "Reduces ownership",
              "keyIndicators": [
                "prescriptive"
              ],
              "commonMistake": "One-way instruction"
            }
          },
          {
            "id": "d",
            "text": "Tell her improvement depends solely on her personal willpower and effort",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Willpower framing is unhelpful.",
            "explanation": {
              "approach": "Invoke willpower",
              "rationale": "Misframes a treatable condition",
              "keyIndicators": [
                "moralizing"
              ],
              "commonMistake": "Blaming the client"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which finding best supports chronic insomnia disorder over depression?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Sleep difficulty occurs at least three nights weekly for months with adequate sleep opportunity",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Meets insomnia frequency and duration.",
            "explanation": {
              "approach": "Apply insomnia criteria",
              "rationale": "Distinguishes insomnia from depression",
              "keyIndicators": [
                "three nights weekly",
                "adequate opportunity"
              ],
              "commonMistake": "Defaulting to depression"
            }
          },
          {
            "id": "b",
            "text": "She reports pervasive anhedonia and depressed mood most of the day for weeks, without further exploration",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Points to depression.",
            "explanation": {
              "approach": "Note mood symptoms",
              "rationale": "Points to MDD",
              "keyIndicators": [
                "anhedonia"
              ],
              "commonMistake": "Confusing MDD with insomnia"
            }
          },
          {
            "id": "c",
            "text": "She describes excessive worry across many domains that is hard to control",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Points to GAD.",
            "explanation": {
              "approach": "Note diffuse worry",
              "rationale": "Points to anxiety",
              "keyIndicators": [
                "diffuse worry"
              ],
              "commonMistake": "Mislabeling as GAD"
            }
          },
          {
            "id": "d",
            "text": "Her sleep timing is simply shifted later but otherwise sound and restorative",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Points to circadian disorder.",
            "explanation": {
              "approach": "Note shifted timing",
              "rationale": "Points to a circadian disorder",
              "keyIndicators": [
                "phase shift"
              ],
              "commonMistake": "Overlooking adequate opportunity"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the recommended first-line treatment for chronic insomnia?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Long-term sedative medication as the sole intervention without behavioral strategies",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Not first-line for chronic insomnia.",
            "explanation": {
              "approach": "Medication only",
              "rationale": "Behavioral therapy is preferred first",
              "keyIndicators": [
                "non-first-line"
              ],
              "commonMistake": "Defaulting to medication"
            }
          },
          {
            "id": "b",
            "text": "Cognitive behavioral therapy for insomnia with stimulus control and sleep restriction methods",
            "isCorrect": true,
            "weight": 3,
            "rationale": "CBT-I is first-line and effective.",
            "explanation": {
              "approach": "CBT for insomnia",
              "rationale": "Recommended first-line treatment",
              "keyIndicators": [
                "CBT-I",
                "stimulus control"
              ],
              "commonMistake": "Skipping behavioral therapy"
            }
          },
          {
            "id": "c",
            "text": "Encouraging long daytime naps to make up for lost nighttime sleep",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Naps worsen night sleep.",
            "explanation": {
              "approach": "Encourage napping",
              "rationale": "Undermines sleep drive",
              "keyIndicators": [
                "counterproductive"
              ],
              "commonMistake": "Increasing daytime sleep"
            }
          },
          {
            "id": "d",
            "text": "Brief reassurance that sleep will improve on its own without any intervention",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Inaction neglects a treatable disorder.",
            "explanation": {
              "approach": "Reassure only",
              "rationale": "Misses effective treatment",
              "keyIndicators": [
                "inaction"
              ],
              "commonMistake": "Minimizing the problem"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Which statement best captures the core features of her diagnosis?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Pervasive depressed mood and loss of interest accounting for her sleep complaints",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes depression.",
            "explanation": {
              "approach": "Describe mood disorder",
              "rationale": "Wrong diagnostic picture",
              "keyIndicators": [
                "mood-driven"
              ],
              "commonMistake": "Confusing MDD with insomnia"
            }
          },
          {
            "id": "b",
            "text": "Excessive uncontrollable worry across multiple life domains driving her difficulties, without further exploration",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes GAD.",
            "explanation": {
              "approach": "Describe anxiety",
              "rationale": "Wrong diagnostic picture",
              "keyIndicators": [
                "diffuse worry"
              ],
              "commonMistake": "Mislabeling as GAD"
            }
          },
          {
            "id": "c",
            "text": "Dissatisfaction with sleep despite adequate opportunity, with frequent, chronic, and impairing difficulty",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Captures insomnia core criteria.",
            "explanation": {
              "approach": "Summarize insomnia criteria",
              "rationale": "Aligns with DSM definition",
              "keyIndicators": [
                "sleep dissatisfaction",
                "daytime impairment"
              ],
              "commonMistake": "Omitting adequate opportunity"
            }
          },
          {
            "id": "d",
            "text": "A shifted but otherwise healthy sleep-wake schedule misaligned with social demands",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Describes circadian disorder.",
            "explanation": {
              "approach": "Describe circadian shift",
              "rationale": "Wrong diagnostic picture",
              "keyIndicators": [
                "phase shift"
              ],
              "commonMistake": "Confusing timing with insomnia"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G076",
    "title": "Teen Seeking Affirmation of Identity",
    "category": "Sexual-Gender",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Gender Dysphoria in Adolescents/Adults",
      "code": "F64.0"
    },
    "diagnosis": {
      "name": "Gender Dysphoria in Adolescents/Adults",
      "code": "F64.0"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Gender Dysphoria in Adolescents/Adults",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Body Dysmorphic Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Adjustment Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Valentina, a 16-year-old Spanish-dominant Latina transgender adolescent, sits tensely with arms drawn close, her affect distressed and eye contact tentative. She presents with marked distress about incongruence between her experienced gender and assigned sex, reporting in a low, emotional voice a strong, persistent cross-gender identity and fearing rejection from her religious family, saying 'I've always known who I am, but my family can't see it.'",
      "session1": "Valentina speaks more comfortably in Spanish, her voice steadier yet thick with feeling, describing longstanding discomfort with assigned-sex characteristics and a deep desire to be recognized as her affirmed gender. Her eyes fill as she conveys that family tension and possible rejection heighten her distress, and language access shapes her willingness to engage.",
      "session2": "Valentina's tone carries both fear and quiet determination as she clarifies that her distress reflects gender incongruence and associated impairment rather than appearance-focused preoccupation or a brief stressor reaction. With cautious hope she expresses interest in affirming support and, glancing down, in safety planning amid the risk of family rejection."
    },
    "diagnosticRationale": "Marked incongruence between experienced and assigned gender lasting at least six months with strong cross-gender identification and clinically significant distress supports gender dysphoria over body dysmorphic, adjustment, or depressive disorders.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Gender dysphoria criteria in adolescents"
      },
      {
        "id": "R2",
        "source": "Hays (Assessment)",
        "detail": "Affirming, language-accessible, family-context care"
      },
      {
        "id": "R3",
        "source": "C-SSRS",
        "detail": "Risk screening amid family rejection"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "What is the most affirming initial counseling stance?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Use her affirmed name and pronouns while exploring her experience and family-context concerns",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Affirmation builds safety and alliance.",
            "explanation": {
              "approach": "Affirm identity and explore",
              "rationale": "Affirming care is the standard",
              "keyIndicators": [
                "affirmed name",
                "family context"
              ],
              "commonMistake": "Misgendering the client"
            }
          },
          {
            "id": "b",
            "text": "Encourage her to wait until she is older before exploring her gender identity",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Delaying affirmation is harmful.",
            "explanation": {
              "approach": "Urge waiting",
              "rationale": "Invalidates her identity",
              "keyIndicators": [
                "delay tactic"
              ],
              "commonMistake": "Gatekeeping inappropriately"
            }
          },
          {
            "id": "c",
            "text": "Focus the session primarily on changing her family's religious beliefs about gender",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misdirects from the client.",
            "explanation": {
              "approach": "Target family beliefs",
              "rationale": "Shifts focus away from the client",
              "keyIndicators": [
                "misdirected focus"
              ],
              "commonMistake": "Centering the family"
            }
          },
          {
            "id": "d",
            "text": "Question whether her identity is genuine before establishing any rapport with her",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Invalidating and harmful.",
            "explanation": {
              "approach": "Question authenticity",
              "rationale": "Damages safety and trust",
              "keyIndicators": [
                "invalidation"
              ],
              "commonMistake": "Doubting the client"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "How should the counselor address the language-access and family rejection context?",
        "evidenceRef": [
          "R2",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Proceed only in English and assume family rejection will not affect her safety",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ignores access and safety.",
            "explanation": {
              "approach": "Ignore language and safety",
              "rationale": "Neglects access and risk",
              "keyIndicators": [
                "access barrier"
              ],
              "commonMistake": "Overlooking rejection risk"
            }
          },
          {
            "id": "b",
            "text": "Provide Spanish-accessible support, assess safety, and plan for possible family rejection collaboratively",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Access plus safety planning is appropriate.",
            "explanation": {
              "approach": "Ensure access and safety",
              "rationale": "Addresses language and rejection risk",
              "keyIndicators": [
                "language access",
                "safety planning"
              ],
              "commonMistake": "Skipping safety assessment"
            }
          },
          {
            "id": "c",
            "text": "Tell her family rejection is unlikely and that no planning is needed",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Minimizes real risk.",
            "explanation": {
              "approach": "Minimize rejection",
              "rationale": "Underestimates documented risk",
              "keyIndicators": [
                "minimization"
              ],
              "commonMistake": "Dismissing safety needs"
            }
          },
          {
            "id": "d",
            "text": "Rely on the client to interpret for herself rather than arranging language access, without further exploration",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Inadequate language support.",
            "explanation": {
              "approach": "Skip interpretation",
              "rationale": "Compromises understanding",
              "keyIndicators": [
                "access failure"
              ],
              "commonMistake": "Ignoring language needs"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which feature best supports gender dysphoria over body dysmorphic disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Preoccupation centers on a perceived flaw in a specific body feature she wants corrected",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes body dysmorphic disorder.",
            "explanation": {
              "approach": "Note perceived flaw",
              "rationale": "Points to BDD",
              "keyIndicators": [
                "perceived defect"
              ],
              "commonMistake": "Confusing BDD with dysphoria"
            }
          },
          {
            "id": "b",
            "text": "Distress arises specifically from a recent identifiable stressor and is expected to resolve",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Describes adjustment disorder.",
            "explanation": {
              "approach": "Note stressor onset",
              "rationale": "Points to adjustment disorder",
              "keyIndicators": [
                "stressor-bound"
              ],
              "commonMistake": "Ignoring the chronic identity"
            }
          },
          {
            "id": "c",
            "text": "Marked, persistent incongruence between experienced and assigned gender with strong cross-gender identity",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Defines gender dysphoria.",
            "explanation": {
              "approach": "Identify gender incongruence",
              "rationale": "Maps to dysphoria criteria",
              "keyIndicators": [
                "gender incongruence",
                "cross-gender identity"
              ],
              "commonMistake": "Reducing it to appearance"
            }
          },
          {
            "id": "d",
            "text": "Pervasive low mood and anhedonia best account for her overall presentation",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes depression.",
            "explanation": {
              "approach": "Note mood symptoms",
              "rationale": "Points to MDD",
              "keyIndicators": [
                "mood-driven"
              ],
              "commonMistake": "Confusing comorbid mood with cause"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the most appropriate treatment approach for this adolescent?",
        "evidenceRef": [
          "R1",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Attempt to align her gender identity with her assigned sex through corrective methods, without further exploration",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Conversion approaches are unethical and harmful.",
            "explanation": {
              "approach": "Attempt to change identity",
              "rationale": "Conversion practices cause harm",
              "keyIndicators": [
                "conversion"
              ],
              "commonMistake": "Pursuing identity change"
            }
          },
          {
            "id": "b",
            "text": "Affirming, supportive care with risk monitoring and coordinated, developmentally appropriate referrals",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Affirming, safety-aware care is standard.",
            "explanation": {
              "approach": "Affirming supportive care",
              "rationale": "Matches best-practice guidance",
              "keyIndicators": [
                "affirming care",
                "risk monitoring"
              ],
              "commonMistake": "Omitting safety follow-up"
            }
          },
          {
            "id": "c",
            "text": "Postpone all support until her family fully agrees with her gender identity",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Conditioning care on family is harmful.",
            "explanation": {
              "approach": "Wait for family approval",
              "rationale": "Withholds needed support",
              "keyIndicators": [
                "conditional care"
              ],
              "commonMistake": "Letting family gatekeep"
            }
          },
          {
            "id": "d",
            "text": "Focus only on appearance concerns as though body dysmorphic disorder were present",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misapplies a BDD focus.",
            "explanation": {
              "approach": "Treat as BDD",
              "rationale": "Wrong conceptualization",
              "keyIndicators": [
                "protocol mismatch"
              ],
              "commonMistake": "Mislabeling dysphoria"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Which statement best reflects the core clinical picture of her diagnosis?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "A brief stress reaction expected to resolve once the identified stressor passes",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Describes adjustment disorder.",
            "explanation": {
              "approach": "Describe adjustment",
              "rationale": "Wrong diagnostic picture",
              "keyIndicators": [
                "stressor-bound"
              ],
              "commonMistake": "Underestimating chronicity"
            }
          },
          {
            "id": "b",
            "text": "Persistent gender incongruence with cross-gender identity and clinically significant associated distress",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Captures dysphoria core features.",
            "explanation": {
              "approach": "Summarize dysphoria criteria",
              "rationale": "Aligns with DSM definition",
              "keyIndicators": [
                "incongruence",
                "significant distress"
              ],
              "commonMistake": "Omitting the distress criterion"
            }
          },
          {
            "id": "c",
            "text": "Preoccupation with a perceived physical defect driving repetitive checking behaviors, without further exploration",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes BDD.",
            "explanation": {
              "approach": "Describe BDD",
              "rationale": "Wrong diagnostic picture",
              "keyIndicators": [
                "perceived defect"
              ],
              "commonMistake": "Confusing BDD with dysphoria"
            }
          },
          {
            "id": "d",
            "text": "Pervasive depressed mood and anhedonia present most of the day, nearly daily",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Describes depression.",
            "explanation": {
              "approach": "Describe depression",
              "rationale": "Wrong diagnostic picture",
              "keyIndicators": [
                "mood-driven"
              ],
              "commonMistake": "Confusing comorbidity with cause"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G077",
    "title": "Client Voicing a Threat in Session",
    "category": "Ethics",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Confidentiality / Duty-to-Warn Dilemma",
      "code": "Z65.3"
    },
    "diagnosis": {
      "name": "Confidentiality / Duty-to-Warn Dilemma",
      "code": "Z65.3"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Confidentiality / Duty-to-Warn Dilemma",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Adjustment Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Intermittent Explosive Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Stephen, a 30-year-old gay man, presents in acute distress, agitated and pacing, his affect intense and angry, eye contact piercing and breathing rapid. After a relationship betrayal he voices a credible, specific threat to harm an identifiable former partner during the session, naming the person and describing intent and means, stating with cold conviction 'he's going to pay for what he did to me.'",
      "session1": "Stephen's speech is rapid, pressured, and laced with anger as he reports access to means and a clear plan, expressing serious intent to act soon. His voice cracks momentarily when he also describes minority stress and prior reluctance to seek care, though the immediate clinical concern remains the specific, credible threat he has disclosed.",
      "session2": "As the counselor weighs confidentiality against the duty to protect an identifiable third party under applicable law, Stephen remains tense and volatile, his jaw clenched. The presentation is an ethical dilemma rather than a primary anxiety, adjustment, or impulse-control disorder, and his agitation underscores the urgency of the safety decision."
    },
    "diagnosticRationale": "A credible, specific threat toward an identifiable person triggers duty-to-protect obligations that must be balanced against confidentiality under applicable law, framing the case as an ethical dilemma rather than a discrete mental disorder.",
    "references": [
      {
        "id": "R1",
        "source": "ACA Code of Ethics",
        "detail": "Confidentiality limits and duty to protect"
      },
      {
        "id": "R2",
        "source": "State law",
        "detail": "Duty-to-warn and protect statutory requirements"
      },
      {
        "id": "R3",
        "source": "C-SSRS",
        "detail": "Structured assessment of risk and means"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "What is the most appropriate immediate counseling response to the threat?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Change the subject to his minority stress to de-escalate the conversation gently",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoids assessing imminent risk.",
            "explanation": {
              "approach": "Redirect away",
              "rationale": "Neglects risk assessment",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Sidestepping the threat"
            }
          },
          {
            "id": "b",
            "text": "Calmly assess intent, plan, and access to means while maintaining engagement and safety",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Structured risk assessment comes first.",
            "explanation": {
              "approach": "Assess risk calmly",
              "rationale": "Establishes credibility and severity",
              "keyIndicators": [
                "intent and means",
                "safety focus"
              ],
              "commonMistake": "Acting before assessing"
            }
          },
          {
            "id": "c",
            "text": "Immediately end the session and contact authorities before any risk assessment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Acts before assessing the threat.",
            "explanation": {
              "approach": "Act before assessing",
              "rationale": "Skips needed evaluation",
              "keyIndicators": [
                "premature action"
              ],
              "commonMistake": "Reporting without assessment"
            }
          },
          {
            "id": "d",
            "text": "Reassure him the feelings will pass and that no action is necessary",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dangerously minimizes the threat.",
            "explanation": {
              "approach": "Minimize the threat",
              "rationale": "Ignores a credible danger",
              "keyIndicators": [
                "minimization"
              ],
              "commonMistake": "Dismissing serious risk"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "How should the counselor maintain alliance while addressing the threat?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Express alarm and judgment to convey how unacceptable his threat truly is",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Judgment ruptures alliance.",
            "explanation": {
              "approach": "Express judgment",
              "rationale": "Damages the relationship",
              "keyIndicators": [
                "judgment"
              ],
              "commonMistake": "Shaming the client"
            }
          },
          {
            "id": "b",
            "text": "Acknowledge his pain, be transparent about limits, and collaborate on reducing risk",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Transparency and empathy preserve alliance.",
            "explanation": {
              "approach": "Empathize and be transparent",
              "rationale": "Balances care and duty",
              "keyIndicators": [
                "transparency",
                "collaboration"
              ],
              "commonMistake": "Hiding the duty to act"
            }
          },
          {
            "id": "c",
            "text": "Promise him that nothing he said will leave the room under any circumstance",
            "isCorrect": false,
            "weight": -2,
            "rationale": "False promise breaches duty.",
            "explanation": {
              "approach": "Promise secrecy",
              "rationale": "Violates duty to protect",
              "keyIndicators": [
                "false guarantee"
              ],
              "commonMistake": "Overstating confidentiality"
            }
          },
          {
            "id": "d",
            "text": "Quietly proceed with reporting without discussing it with him at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Covert action harms trust unnecessarily.",
            "explanation": {
              "approach": "Act covertly",
              "rationale": "Undermines transparency where possible",
              "keyIndicators": [
                "lack of transparency"
              ],
              "commonMistake": "Skipping disclosure of limits"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Which factor most clearly establishes a duty to protect in this case?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "A credible, specific threat of serious harm directed at an identifiable named person",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Identifiable victim and credible threat trigger duty.",
            "explanation": {
              "approach": "Identify threat criteria",
              "rationale": "Meets the duty-to-protect threshold",
              "keyIndicators": [
                "identifiable victim",
                "credible threat"
              ],
              "commonMistake": "Overlooking specificity"
            }
          },
          {
            "id": "b",
            "text": "His general feelings of anger after experiencing a painful relationship betrayal",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Vague anger does not meet threshold.",
            "explanation": {
              "approach": "Note general anger",
              "rationale": "Lacks specificity for duty",
              "keyIndicators": [
                "nonspecific affect"
              ],
              "commonMistake": "Confusing anger with threat"
            }
          },
          {
            "id": "c",
            "text": "His longstanding reluctance to seek mental health care in the past",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Irrelevant to duty to protect.",
            "explanation": {
              "approach": "Note reluctance",
              "rationale": "Unrelated to the threshold",
              "keyIndicators": [
                "irrelevant factor"
              ],
              "commonMistake": "Mixing unrelated history"
            }
          },
          {
            "id": "d",
            "text": "His report of diffuse worry about many areas of his daily life",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Worry is not a threat.",
            "explanation": {
              "approach": "Note diffuse worry",
              "rationale": "Does not establish duty",
              "keyIndicators": [
                "diffuse worry"
              ],
              "commonMistake": "Confusing anxiety with risk"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "After assessing high, credible risk, what is the appropriate clinical action?",
        "evidenceRef": [
          "R2",
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Maintain strict confidentiality and document the threat without taking any protective steps",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Fails the duty to protect.",
            "explanation": {
              "approach": "Stay silent",
              "rationale": "Neglects protective duty",
              "keyIndicators": [
                "inaction"
              ],
              "commonMistake": "Prioritizing confidentiality over safety"
            }
          },
          {
            "id": "b",
            "text": "Take reasonable protective steps, including warning and notifying, consistent with applicable law",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Lawful protective action is required.",
            "explanation": {
              "approach": "Take protective steps",
              "rationale": "Fulfills duty under law",
              "keyIndicators": [
                "warn and notify",
                "lawful action"
              ],
              "commonMistake": "Either inaction or unlawful overreach"
            }
          },
          {
            "id": "c",
            "text": "Wait several days to see whether his stated intent diminishes on its own",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Delay endangers the third party.",
            "explanation": {
              "approach": "Delay action",
              "rationale": "Leaves the victim at risk",
              "keyIndicators": [
                "dangerous delay"
              ],
              "commonMistake": "Hoping risk resolves"
            }
          },
          {
            "id": "d",
            "text": "Disclose every detail of his history broadly to as many parties as possible",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Over-disclosure violates minimum-necessary.",
            "explanation": {
              "approach": "Over-disclose",
              "rationale": "Exceeds the minimum necessary",
              "keyIndicators": [
                "over-disclosure"
              ],
              "commonMistake": "Sharing beyond what is needed"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "Which principle best guides the counselor's handling of this dilemma?",
        "evidenceRef": [
          "R1",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Confidentiality is absolute and overrides any concern for a third party's safety, without further exploration",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Confidentiality has legal and ethical limits.",
            "explanation": {
              "approach": "Treat confidentiality as absolute",
              "rationale": "Ignores limits and duty",
              "keyIndicators": [
                "false absolute"
              ],
              "commonMistake": "Overstating confidentiality"
            }
          },
          {
            "id": "b",
            "text": "Confidentiality yields to the duty to protect identifiable others when credible serious risk exists",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Duty to protect can limit confidentiality.",
            "explanation": {
              "approach": "Balance duty and confidentiality",
              "rationale": "Reflects ethics and statutory duty",
              "keyIndicators": [
                "duty to protect",
                "credible risk"
              ],
              "commonMistake": "Treating confidentiality as unlimited"
            }
          },
          {
            "id": "c",
            "text": "The counselor should always defer entirely to whatever the client prefers",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Autonomy does not override safety duty.",
            "explanation": {
              "approach": "Defer to client wishes",
              "rationale": "Ignores third-party safety",
              "keyIndicators": [
                "misapplied autonomy"
              ],
              "commonMistake": "Over-prioritizing preference"
            }
          },
          {
            "id": "d",
            "text": "Personal discomfort should determine whether the counselor reports the threat",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Feelings do not govern legal duty.",
            "explanation": {
              "approach": "Decide by comfort",
              "rationale": "Not an ethical or legal basis",
              "keyIndicators": [
                "arbitrary basis"
              ],
              "commonMistake": "Letting emotion drive decisions"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G078",
    "title": "Fluctuating Confusion After Hospital Discharge",
    "category": "Neurocognitive",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Delirium",
      "code": "F05"
    },
    "diagnosis": {
      "name": "Delirium",
      "code": "F05"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Delirium",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Major Neurocognitive Disorder due to Alzheimer\u2019s Disease",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Mild Neurocognitive Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Major Depressive Disorder with cognitive features",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Harold, a 79-year-old retired engineer, is brought in by his daughter three days after discharge from a urinary tract infection admission; he sits slumped, unshaven, plucking restlessly at his shirt buttons with darting, unfocused eyes. She reports he is suddenly disoriented, mistakes the time of day, and was lucid this morning but agitated and rambling by afternoon, muttering \"the cat keeps moving on the curtains\" as he points at an empty wall. He cannot sustain attention long enough to finish a sentence, sees a cat that is not there, and his speech trails off into fragments. His baseline, she insists, was sharp and independent only one week ago; he is on a new anticholinergic bladder medication and has slept poorly since returning home.",
      "session1": "On examination Harold is inattentive and drowsy, unable to recite the days of the week backward, drifting off mid-task with his gaze sliding to the window. His alertness waxes and wanes within the hour, and he abruptly grips the clinician's arm, fearful, calling him \"Walter\" and asking why his brother has come; his speech is disorganized and his volume swings from a whisper to sudden agitation. Vital signs show a low-grade fever. The daughter denies any prior memory complaints, getting-lost episodes, or word-finding trouble before the hospitalization.",
      "session2": "Collateral from the primary physician confirms an acute change over days, not months, and a medication review flags the anticholinergic agent and residual infection. By this visit Harold sits upright with restored grooming, makes steady eye contact, and remarks with a wry, even tone, \"I gave everyone quite a scare, didn't I.\" With treatment of the infection, discontinuation of the offending drug, reorientation, and restored sleep, his attention and orientation substantially clear over the following week, returning toward his prior baseline."
    },
    "diagnosticRationale": "Acute onset over days, fluctuating course, prominent inattention, disturbed alertness, perceptual disturbance, and an identifiable medical and medication cause meet criteria for delirium. The recovery to baseline and absence of a prior gradual cognitive decline argue against a major neurocognitive disorder; the acute medical precipitant and reversibility distinguish it from mild NCD and from depression.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Delirium: acute onset, fluctuating course, inattention, and evidence of a medical/substance etiology"
      },
      {
        "id": "R2",
        "source": "Hays (Assessment)",
        "detail": "Use of collateral history and baseline functioning to interpret an acute cognitive change"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "A.1 / consultation with treating providers to coordinate care for medically complex clients"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which feature most strongly distinguishes this presentation from a major neurocognitive disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "The acute onset over days with a clearly fluctuating level of attention and alertness",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Acuity and fluctuation are the hallmark of delirium versus dementia.",
            "explanation": {
              "approach": "Course analysis",
              "rationale": "Delirium is acute and fluctuating, dementia gradual",
              "keyIndicators": [
                "acute onset",
                "fluctuating attention"
              ],
              "commonMistake": "Assuming any confusion in an elder is dementia"
            }
          },
          {
            "id": "b",
            "text": "The presence of visual hallucinations, which by themselves confirm an irreversible cognitive disorder",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Hallucinations occur in both and do not confirm dementia.",
            "explanation": {
              "approach": "Single-symptom error",
              "rationale": "Hallucinations are nonspecific",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Treating one symptom as pathognomonic"
            }
          },
          {
            "id": "c",
            "text": "His advanced age of seventy-nine, which makes a chronic degenerative dementia the most probable explanation here",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Age alone is not diagnostic and ignores the acute course.",
            "explanation": {
              "approach": "Base-rate bias",
              "rationale": "Age is not a criterion",
              "keyIndicators": [
                "ageism"
              ],
              "commonMistake": "Letting age override the timeline"
            }
          },
          {
            "id": "d",
            "text": "The word-finding and memory complaints his daughter described as present for many months before admission",
            "isCorrect": false,
            "weight": -1,
            "rationale": "She explicitly denied any prior cognitive complaints.",
            "explanation": {
              "approach": "Fabricated history",
              "rationale": "Contradicts the collateral",
              "keyIndicators": [
                "inattention to data"
              ],
              "commonMistake": "Inventing a chronic history"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "intake",
        "question": "What is the most appropriate next assessment step?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Obtain collateral on his exact baseline functioning and review his recent medication and infection history",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Baseline and precipitants anchor the delirium workup.",
            "explanation": {
              "approach": "Collateral and workup",
              "rationale": "Establishes acuity and cause",
              "keyIndicators": [
                "baseline",
                "medication review"
              ],
              "commonMistake": "Skipping collateral in cognitive assessment"
            }
          },
          {
            "id": "b",
            "text": "Administer a lengthy standardized neuropsychological battery this afternoon to map his long-term decline in a ",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Inattention invalidates testing; wrong timing.",
            "explanation": {
              "approach": "Mistimed testing",
              "rationale": "Delirium confounds cognitive testing",
              "keyIndicators": [
                "confounded data"
              ],
              "commonMistake": "Testing through delirium"
            }
          },
          {
            "id": "c",
            "text": "Begin individual insight-oriented psychotherapy to address the emotional distress driving his confusion now",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Confusion is medical, not psychodynamic.",
            "explanation": {
              "approach": "Wrong modality",
              "rationale": "Misframes a medical state",
              "keyIndicators": [
                "misformulation"
              ],
              "commonMistake": "Psychologizing a medical delirium"
            }
          },
          {
            "id": "d",
            "text": "Reassure the family that the symptoms are a normal part of aging and schedule a routine follow-up visit",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Minimizes an acute medical emergency.",
            "explanation": {
              "approach": "Minimization",
              "rationale": "Delirium needs urgent care",
              "keyIndicators": [
                "undertriage"
              ],
              "commonMistake": "Normalizing acute confusion"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "core",
        "question": "He misidentifies the clinician and becomes fearful. What is the best in-session response?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Calmly reorient him, reduce environmental stimulation, and keep communication simple and reassuring",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Reorientation and low stimulation are first-line for delirium.",
            "explanation": {
              "approach": "Supportive reorientation",
              "rationale": "Reduces agitation safely",
              "keyIndicators": [
                "reorientation",
                "calm"
              ],
              "commonMistake": "Confronting or arguing with the client"
            }
          },
          {
            "id": "b",
            "text": "Firmly correct each misperception and insist he acknowledge the clinician\u2019s real identity before proceeding",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Confrontation escalates fear.",
            "explanation": {
              "approach": "Confrontation",
              "rationale": "Increases agitation",
              "keyIndicators": [
                "escalation"
              ],
              "commonMistake": "Arguing with delirious misperceptions"
            }
          },
          {
            "id": "c",
            "text": "Interpret the misidentification as transference of unresolved feelings toward his estranged brother figure",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Psychodynamic framing is inappropriate here.",
            "explanation": {
              "approach": "Over-interpretation",
              "rationale": "Ignores medical etiology",
              "keyIndicators": [
                "misformulation"
              ],
              "commonMistake": "Interpreting organic confusion"
            }
          },
          {
            "id": "d",
            "text": "End the session abruptly and document that he is uncooperative and refusing to engage in the evaluation",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Mislabels a medical symptom as refusal.",
            "explanation": {
              "approach": "Mislabeling",
              "rationale": "Penalizes a sick patient",
              "keyIndicators": [
                "blaming"
              ],
              "commonMistake": "Charting symptoms as noncompliance"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "ethics",
        "question": "The daughter asks the clinician to coordinate with his physician about the medication. What is most appropriate?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Obtain consent and consult the treating physician about the suspected medication-induced contribution",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Coordinated care with consent serves the client.",
            "explanation": {
              "approach": "Consented consultation",
              "rationale": "Aligns with continuity of care",
              "keyIndicators": [
                "consent",
                "consultation"
              ],
              "commonMistake": "Acting without authorization or in isolation"
            }
          },
          {
            "id": "b",
            "text": "Advise the family to stop the bladder medication immediately on the counselor\u2019s own clinical authority",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Outside scope; prescribers must decide.",
            "explanation": {
              "approach": "Scope violation",
              "rationale": "Counselors do not adjust medications",
              "keyIndicators": [
                "scope"
              ],
              "commonMistake": "Practicing outside competence"
            }
          },
          {
            "id": "c",
            "text": "Decline any contact with the physician, citing confidentiality, and proceed with counseling in isolation",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Consent enables appropriate coordination.",
            "explanation": {
              "approach": "Over-restriction",
              "rationale": "Misapplies confidentiality",
              "keyIndicators": [
                "siloing"
              ],
              "commonMistake": "Refusing warranted coordination"
            }
          },
          {
            "id": "d",
            "text": "Tell the daughter to seek a malpractice attorney regarding the hospital\u2019s prescribing of the medication",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Inappropriate and outside the clinical role.",
            "explanation": {
              "approach": "Role confusion",
              "rationale": "Not a clinical function",
              "keyIndicators": [
                "boundary"
              ],
              "commonMistake": "Giving legal advice"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "As his infection resolves and the drug is stopped, his cognition clears. What does this course support?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "A delirium diagnosis, given symptom resolution once the underlying medical causes were treated",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Reversibility with treatment confirms delirium.",
            "explanation": {
              "approach": "Course confirmation",
              "rationale": "Reversibility is diagnostic",
              "keyIndicators": [
                "resolution",
                "reversible"
              ],
              "commonMistake": "Holding a dementia label despite recovery"
            }
          },
          {
            "id": "b",
            "text": "An early Alzheimer\u2019s dementia that happened to improve temporarily because of the supportive hospital routine",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Alzheimer\u2019s does not reverse to baseline.",
            "explanation": {
              "approach": "Misattribution",
              "rationale": "Ignores full recovery",
              "keyIndicators": [
                "misreading course"
              ],
              "commonMistake": "Explaining away recovery"
            }
          },
          {
            "id": "c",
            "text": "A major depressive episode with cognitive features that lifted once his sleep and appetite were restored",
            "isCorrect": false,
            "weight": -1,
            "rationale": "No mood syndrome; cause was medical.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Mood not primary",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Defaulting to depression"
            }
          },
          {
            "id": "d",
            "text": "A mild neurocognitive disorder that should now be monitored with serial annual cognitive screenings only",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Acute reversible course is not mild NCD.",
            "explanation": {
              "approach": "Wrong category",
              "rationale": "Mild NCD is chronic",
              "keyIndicators": [
                "miscategorization"
              ],
              "commonMistake": "Mislabeling a resolved delirium"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G079",
    "title": "A Phone Call After the Layoff",
    "category": "Crisis",
    "difficulty": "medium",
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
        "id": "d1",
        "name": "Suicidal Behavior / Acute Risk",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Major Depressive Disorder, Single Episode",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Adjustment Disorder, with Depressed Mood",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Nonsuicidal Self-Injury",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Raymond, a 47-year-old divorced man, calls the clinic the evening he was laid off after twenty-two years at a manufacturing plant, his voice flat, slowed, and slurred slightly at the edges from drinking since noon. He says he feels like a failure and that \"my kids would honestly be better off without me,\" pausing for long stretches between sentences. He states he has thought about ending his life and has his late father's firearm in the closet. He has no prior counseling history and reports no current support beyond a brother two states away.",
      "session1": "On the call Raymond endorses active suicidal ideation with a method available, some intent, and a vague plan to act tonight, his tone resigned and his words coming in low, heavy fragments. He admits the alcohol has lowered his resolve to stay safe, conceding quietly, \"I don't know how much fight I've got left.\" He reports a brief prior period two years ago of feeling hopeless after his divorce but never made an attempt. He is reachable, oriented, and willing to keep talking, though he minimizes how serious he feels.",
      "session2": "With collaborative engagement Raymond's voice steadies and warms slightly as he agrees to remove the firearm by having his brother take it, identifies his children as a reason for living, and consents to a same-evening crisis evaluation. A safety plan is developed identifying warning signs, internal coping, and crisis contacts. He agrees to reduce access to alcohol tonight and to a follow-up call the next morning."
    },
    "diagnosticRationale": "Active suicidal ideation with intent, an available lethal method, acute precipitant, and disinhibiting alcohol use constitute an acute suicide risk requiring immediate intervention regardless of any underlying mood diagnosis. The presentation is coded as acute suicidal behavior/risk; a mood or adjustment disorder may coexist but does not capture the imminent safety concern that drives clinical priority.",
    "references": [
      {
        "id": "R1",
        "source": "C-SSRS",
        "detail": "Severity of ideation, intent, plan, and access to means in stratifying acute suicide risk"
      },
      {
        "id": "R2",
        "source": "Stanley-Brown SPI",
        "detail": "Collaborative safety planning including means restriction and crisis contacts"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "B.2.a disclosure to protect a client from serious and foreseeable harm"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "core",
        "question": "What is the most important first assessment priority on this call?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Directly assess his suicidal ideation, intent, plan, and access to the firearm",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Risk stratification with means assessment comes first.",
            "explanation": {
              "approach": "Direct risk assessment",
              "rationale": "Establishes imminence and lethality",
              "keyIndicators": [
                "ideation",
                "means access"
              ],
              "commonMistake": "Avoiding direct questions about suicide"
            }
          },
          {
            "id": "b",
            "text": "Explore the developmental roots of his self-worth before any discussion of the present suicidal thoughts",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Delays urgent safety assessment.",
            "explanation": {
              "approach": "Misprioritization",
              "rationale": "Insight work is not the priority",
              "keyIndicators": [
                "delay"
              ],
              "commonMistake": "Pursuing depth over safety"
            }
          },
          {
            "id": "c",
            "text": "Focus first on his recent alcohol use and refer him to a substance program before addressing the crisis",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Substance referral does not address imminent risk.",
            "explanation": {
              "approach": "Wrong sequence",
              "rationale": "Risk precedes referral",
              "keyIndicators": [
                "mis-sequence"
              ],
              "commonMistake": "Treating substance use ahead of safety"
            }
          },
          {
            "id": "d",
            "text": "Schedule an intake appointment for next week and encourage him to call back if the feelings get worse",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dangerously defers an acute crisis.",
            "explanation": {
              "approach": "Undertriage",
              "rationale": "Misses imminent danger",
              "keyIndicators": [
                "deferral"
              ],
              "commonMistake": "Routinizing an emergency"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "core",
        "question": "He has a firearm at home. What is the most appropriate intervention?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Collaboratively arrange means restriction so the firearm is removed from his access tonight",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Means restriction is core to safety planning.",
            "explanation": {
              "approach": "Means restriction",
              "rationale": "Lethal-means counseling lowers risk",
              "keyIndicators": [
                "means restriction"
              ],
              "commonMistake": "Ignoring lethal means"
            }
          },
          {
            "id": "b",
            "text": "Accept his verbal promise that he will not use the firearm and proceed without arranging removal",
            "isCorrect": false,
            "weight": -2,
            "rationale": "No-harm promises are not protective.",
            "explanation": {
              "approach": "Reliance on promise",
              "rationale": "Contracts do not ensure safety",
              "keyIndicators": [
                "false reassurance"
              ],
              "commonMistake": "Substituting a promise for action"
            }
          },
          {
            "id": "c",
            "text": "Tell him you must immediately notify the police to seize the weapon before continuing any conversation",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature; collaboration is preferred when feasible.",
            "explanation": {
              "approach": "Premature escalation",
              "rationale": "Bypasses collaboration",
              "keyIndicators": [
                "over-coercion"
              ],
              "commonMistake": "Jumping to coercion first"
            }
          },
          {
            "id": "d",
            "text": "Suggest he simply lock the firearm in the same closet and keep the key in a separate kitchen drawer",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Keeps the means accessible to him.",
            "explanation": {
              "approach": "Inadequate restriction",
              "rationale": "Means still accessible",
              "keyIndicators": [
                "weak barrier"
              ],
              "commonMistake": "Token means restriction"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "core",
        "question": "He agrees to keep talking but minimizes his risk. What response best balances empathy and safety?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Validate his pain while clearly stating your concern for his safety and the need for an evaluation tonight",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Empathy plus a clear safety stance.",
            "explanation": {
              "approach": "Empathic directness",
              "rationale": "Holds connection and urgency",
              "keyIndicators": [
                "validation",
                "clear stance"
              ],
              "commonMistake": "Either colluding with minimization or being cold"
            }
          },
          {
            "id": "b",
            "text": "Accept his reassurance that things are not that bad and shift the conversation to job-search resources in a ma",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Colludes with minimization.",
            "explanation": {
              "approach": "Collusion",
              "rationale": "Drops the safety thread",
              "keyIndicators": [
                "minimization"
              ],
              "commonMistake": "Following the client away from risk"
            }
          },
          {
            "id": "c",
            "text": "Warn him that if he is not honest about his intent you will be forced to end the supportive phone call",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Threatening rupture undermines engagement.",
            "explanation": {
              "approach": "Coercive threat",
              "rationale": "Damages alliance",
              "keyIndicators": [
                "threat"
              ],
              "commonMistake": "Threatening the client into disclosure"
            }
          },
          {
            "id": "d",
            "text": "Tell him many people feel this way after a layoff and that the distress will likely fade within a few weeks",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Normalizing dismisses active risk.",
            "explanation": {
              "approach": "Over-normalizing",
              "rationale": "Minimizes danger",
              "keyIndicators": [
                "dismissal"
              ],
              "commonMistake": "Normalizing acute suicidality"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "ethics",
        "question": "Given his risk, what does ethical practice require regarding confidentiality?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Disclose as needed to arrange emergency evaluation to protect him from serious, foreseeable harm",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Imminent-harm exception permits disclosure.",
            "explanation": {
              "approach": "Protective disclosure",
              "rationale": "Safety overrides routine confidentiality",
              "keyIndicators": [
                "foreseeable harm"
              ],
              "commonMistake": "Treating confidentiality as absolute in a crisis"
            }
          },
          {
            "id": "b",
            "text": "Maintain strict confidentiality and take no action without his fully documented written consent first",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Misapplies confidentiality during imminent danger.",
            "explanation": {
              "approach": "Rigid confidentiality",
              "rationale": "Ignores the harm exception",
              "keyIndicators": [
                "over-restriction"
              ],
              "commonMistake": "Letting confidentiality block rescue"
            }
          },
          {
            "id": "c",
            "text": "Disclose his entire clinical history to his distant brother and former employer to mobilize broad support",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Discloses beyond what is necessary.",
            "explanation": {
              "approach": "Over-disclosure",
              "rationale": "Breach exceeds minimum needed",
              "keyIndicators": [
                "over-sharing"
              ],
              "commonMistake": "Disclosing more than required"
            }
          },
          {
            "id": "d",
            "text": "Post about the situation in an anonymized way in a professional online forum to crowdsource guidance fast",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Risks identification and is inappropriate.",
            "explanation": {
              "approach": "Inappropriate channel",
              "rationale": "Violates privacy",
              "keyIndicators": [
                "exposure"
              ],
              "commonMistake": "Seeking help in unsafe venues"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "After the call, what should documentation prioritize?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Record the risk assessment, the safety plan, means restriction, and the agreed follow-up steps",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Contemporaneous risk and plan documentation is essential.",
            "explanation": {
              "approach": "Risk documentation",
              "rationale": "Captures assessment and plan",
              "keyIndicators": [
                "risk note",
                "safety plan"
              ],
              "commonMistake": "Vague or absent crisis documentation"
            }
          },
          {
            "id": "b",
            "text": "Write only a brief note that the client called and seemed upset and will follow up at his convenience",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Omits the required risk detail.",
            "explanation": {
              "approach": "Insufficient note",
              "rationale": "Fails the standard of care",
              "keyIndicators": [
                "under-documentation"
              ],
              "commonMistake": "Minimal crisis charting"
            }
          },
          {
            "id": "c",
            "text": "Document a detailed psychosocial and family genogram while deferring the risk and safety details for later",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misprioritizes content in a crisis note.",
            "explanation": {
              "approach": "Misprioritized note",
              "rationale": "Buries the critical risk data",
              "keyIndicators": [
                "mis-emphasis"
              ],
              "commonMistake": "Charting background over risk"
            }
          },
          {
            "id": "d",
            "text": "Record your personal opinion that the client was likely exaggerating his suicidal statements for attention",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Judgmental and clinically unsound.",
            "explanation": {
              "approach": "Biased note",
              "rationale": "Improper and unsafe",
              "keyIndicators": [
                "bias"
              ],
              "commonMistake": "Editorializing in the record"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G080",
    "title": "The Patient Who Cannot Be Reassured",
    "category": "Somatic",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Somatic Symptom Disorder",
      "code": "F45.1"
    },
    "diagnosis": {
      "name": "Somatic Symptom Disorder",
      "code": "F45.1"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Somatic Symptom Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Illness Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Functional Neurological Symptom Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Jennifer, a 38-year-old woman, is referred by her primary physician after years of visits for chronic abdominal pain, fatigue, and migrating aches; she arrives meticulously groomed, clutching a thick binder of medical records, and leans forward tensely. Extensive workups have been negative, yet she remains convinced something serious is being missed, her speech rapid and pressured as she insists, \"I know my own body, and no one is taking this seriously.\" She spends hours daily researching her symptoms, keeps a detailed symptom diary, and has seen nine specialists; she is tearful and frustrated. The somatic symptoms themselves are real and impairing, and her preoccupation with them dominates her days.",
      "session1": "Jennifer describes persistent, genuinely felt physical symptoms and disproportionate thoughts about their seriousness, high health anxiety, and excessive time and energy devoted to them for over a year, her affect anxious and her eyes welling as she recounts each specialist's dismissal. Reassurance from doctors calms her only briefly. She denies a fixed belief in one specific undiagnosed disease and acknowledges multiple bodily symptoms rather than fear of a single future illness, adding, \"It's not just one thing, it's everything.\" There is no neurological deficit inconsistent with anatomy.",
      "session2": "Over sessions Jennifer's posture loosens and her speech slows as she connects symptom flares to periods of stress and begins to tolerate the idea that distress and bodily sensation interact. She agrees to a single coordinating physician, scheduled rather than symptom-driven visits, and a focus on functioning rather than chasing tests. Her catastrophic interpretations soften as she practices refocusing attention and reducing reassurance-seeking."
    },
    "diagnosticRationale": "One or more distressing somatic symptoms accompanied by disproportionate and persistent thoughts, high anxiety about health, and excessive time and energy devoted to symptoms for over six months meet criteria for somatic symptom disorder. It differs from illness anxiety disorder, where somatic symptoms are minimal and fear centers on having a disease, and from a conversion presentation, which shows neurological symptoms incompatible with recognized conditions.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Somatic Symptom Disorder: distressing somatic symptoms plus excessive thoughts, feelings, behaviors"
      },
      {
        "id": "R2",
        "source": "Corey (Theory & Practice)",
        "detail": "Therapeutic alliance and validating the client\u2019s experience before reframing"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "A.1.c collaboration and coordination of care with the referring physician"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which feature best distinguishes this from illness anxiety disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "She has multiple genuinely distressing somatic symptoms, not merely fear of having a disease",
            "isCorrect": true,
            "weight": 3,
            "rationale": "SSD centers on actual symptoms; IAD on disease fear with minimal symptoms.",
            "explanation": {
              "approach": "Symptom focus",
              "rationale": "SSD has prominent somatic symptoms",
              "keyIndicators": [
                "somatic symptoms",
                "preoccupation"
              ],
              "commonMistake": "Confusing the two disorders"
            }
          },
          {
            "id": "b",
            "text": "She holds one fixed delusional conviction about a specific rare disease that no physician can disprove",
            "isCorrect": false,
            "weight": -1,
            "rationale": "She does not hold a single fixed disease belief.",
            "explanation": {
              "approach": "Misread belief",
              "rationale": "Not delusional or single-disease",
              "keyIndicators": [
                "mischaracterization"
              ],
              "commonMistake": "Adding delusional features"
            }
          },
          {
            "id": "c",
            "text": "Her physical symptoms are entirely absent and her distress is driven only by anticipatory health worry",
            "isCorrect": false,
            "weight": -2,
            "rationale": "That describes IAD, not her real symptoms.",
            "explanation": {
              "approach": "Wrong profile",
              "rationale": "Symptoms are present and real",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Erasing genuine symptoms"
            }
          },
          {
            "id": "d",
            "text": "She shows a neurological deficit, such as weakness, that is incompatible with known anatomical pathways",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That points to conversion, which she lacks.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "No incompatible deficit",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Importing conversion features"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "She feels dismissed by prior providers. What is the best initial stance?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Validate that her symptoms and suffering are real before gently exploring the role of stress",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Validation precedes reframing in SSD.",
            "explanation": {
              "approach": "Validate then reframe",
              "rationale": "Builds alliance with a mistrustful client",
              "keyIndicators": [
                "validation",
                "alliance"
              ],
              "commonMistake": "Implying the symptoms are imaginary"
            }
          },
          {
            "id": "b",
            "text": "Explain early that the tests are all normal so her symptoms are clearly caused by psychological factors",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dismissive framing ruptures the alliance.",
            "explanation": {
              "approach": "Premature reframe",
              "rationale": "Feels invalidating",
              "keyIndicators": [
                "dismissal"
              ],
              "commonMistake": "Telling clients it is all in their head"
            }
          },
          {
            "id": "c",
            "text": "Encourage her to seek a tenth specialist opinion to be completely certain nothing physical was overlooked",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reinforces reassurance-seeking and over-investigation.",
            "explanation": {
              "approach": "Reinforcing avoidance",
              "rationale": "Feeds the cycle",
              "keyIndicators": [
                "reassurance-seeking"
              ],
              "commonMistake": "Endorsing endless workups"
            }
          },
          {
            "id": "d",
            "text": "Advise her to stop keeping the detailed symptom diary immediately because it is the cause of her distress",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature, directive, and alliance-damaging.",
            "explanation": {
              "approach": "Premature directive",
              "rationale": "Skips collaboration",
              "keyIndicators": [
                "over-directing"
              ],
              "commonMistake": "Removing coping before alliance"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "What treatment structure best fits somatic symptom disorder?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "A single coordinating physician with regular scheduled visits and a focus on functioning",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Care coordination and scheduled visits reduce symptom-driven care-seeking.",
            "explanation": {
              "approach": "Coordinated care",
              "rationale": "Limits fragmentation and reinforcement",
              "keyIndicators": [
                "coordination",
                "scheduled visits"
              ],
              "commonMistake": "Fragmented, symptom-driven care"
            }
          },
          {
            "id": "b",
            "text": "Open-ended access to multiple specialists so every new bodily symptom can be investigated right away",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Encourages doctor-shopping and over-testing.",
            "explanation": {
              "approach": "Fragmentation",
              "rationale": "Reinforces the cycle",
              "keyIndicators": [
                "over-testing"
              ],
              "commonMistake": "Unlimited specialist referrals"
            }
          },
          {
            "id": "c",
            "text": "A strict instruction to never discuss any physical symptoms during her counseling sessions going forward",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Suppressing symptom talk is invalidating.",
            "explanation": {
              "approach": "Avoidant rule",
              "rationale": "Damages alliance",
              "keyIndicators": [
                "suppression"
              ],
              "commonMistake": "Forbidding symptom discussion"
            }
          },
          {
            "id": "d",
            "text": "Discharge from counseling until her physicians can first identify a definitive organic medical diagnosis",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Withholds appropriate psychological care.",
            "explanation": {
              "approach": "Inappropriate gatekeeping",
              "rationale": "Denies indicated care",
              "keyIndicators": [
                "denial of care"
              ],
              "commonMistake": "Gating therapy on a medical finding"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "She becomes anxious whenever a new sensation appears. Which intervention is most appropriate?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Teach attention-refocusing and reduce reassurance-seeking while reframing catastrophic interpretations",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Targets the maintaining cognitive-behavioral cycle.",
            "explanation": {
              "approach": "CBT skills",
              "rationale": "Addresses maintenance factors",
              "keyIndicators": [
                "refocusing",
                "reframing"
              ],
              "commonMistake": "Leaving the catastrophizing cycle intact"
            }
          },
          {
            "id": "b",
            "text": "Provide detailed medical reassurance about each new sensation so she feels fully calmed in the moment in a",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reassurance gives only brief relief and reinforces seeking.",
            "explanation": {
              "approach": "Reassurance trap",
              "rationale": "Short-lived and reinforcing",
              "keyIndicators": [
                "reassurance"
              ],
              "commonMistake": "Over-reassuring"
            }
          },
          {
            "id": "c",
            "text": "Recommend she avoid all physical activity and rest completely until every uncomfortable sensation fades",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Promotes deconditioning and avoidance.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "Worsens functioning",
              "keyIndicators": [
                "deconditioning"
              ],
              "commonMistake": "Prescribing rest and avoidance"
            }
          },
          {
            "id": "d",
            "text": "Interpret each new sensation as a symbolic expression of an unconscious childhood conflict to be analyzed",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Speculative and not evidence-based here.",
            "explanation": {
              "approach": "Over-interpretation",
              "rationale": "Lacks support",
              "keyIndicators": [
                "speculation"
              ],
              "commonMistake": "Forcing symbolic meaning"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "The referring physician requests an update. What is most appropriate?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Share relevant information with the client\u2019s consent to coordinate her ongoing care",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Consented coordination supports integrated treatment.",
            "explanation": {
              "approach": "Consented coordination",
              "rationale": "Improves continuity",
              "keyIndicators": [
                "consent",
                "coordination"
              ],
              "commonMistake": "Acting without consent or refusing to coordinate"
            }
          },
          {
            "id": "b",
            "text": "Refuse to communicate at all, asserting that any contact would inevitably damage the therapeutic frame",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Coordination with consent is appropriate.",
            "explanation": {
              "approach": "Over-restriction",
              "rationale": "Misapplies the frame",
              "keyIndicators": [
                "siloing"
              ],
              "commonMistake": "Refusing warranted coordination"
            }
          },
          {
            "id": "c",
            "text": "Send the physician your complete process notes including all personal reflections and clinical hypotheses",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Discloses more than necessary.",
            "explanation": {
              "approach": "Over-disclosure",
              "rationale": "Exceeds minimum necessary",
              "keyIndicators": [
                "over-sharing"
              ],
              "commonMistake": "Sending raw process notes"
            }
          },
          {
            "id": "d",
            "text": "Tell the physician verbally that the client is exaggerating and should be managed as a difficult patient",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Biased, stigmatizing, and harmful.",
            "explanation": {
              "approach": "Stigmatizing",
              "rationale": "Undermines care",
              "keyIndicators": [
                "bias"
              ],
              "commonMistake": "Labeling the client pejoratively"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G081",
    "title": "Explosions Out of Proportion",
    "category": "Disruptive",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Intermittent Explosive Disorder",
      "code": "F63.81"
    },
    "diagnosis": {
      "name": "Intermittent Explosive Disorder",
      "code": "F63.81"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Intermittent Explosive Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Conduct Disorder, Adolescent-Onset Type",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Oppositional Defiant Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Bipolar I Disorder, Current Episode Manic",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Tyler, a 16-year-old boy, is referred after punching a hole in a classroom wall when a teacher asked him to put away his phone; he slouches in the chair with arms crossed, avoiding eye contact, jaw clenched. His mother describes recurrent, sudden verbal outbursts and occasional property destruction several times a week, each lasting minutes and followed by genuine remorse and embarrassment. Tyler mutters, \"It's like something just snaps before I can stop it,\" his voice low and ashamed. Between episodes he is described as warm, has stable friendships, does his chores, and shows no pattern of lying, stealing, or cruelty.",
      "session1": "Tyler reports the outbursts are impulsive and grossly out of proportion to the trigger, not premeditated, and not aimed at obtaining an object or advantage; he speaks haltingly at first, then more openly, fidgeting with his sleeve. They have occurred more than twice weekly for over three months. He denies a period of elevated or expansive mood, decreased need for sleep, or grandiosity, and his tone turns earnest as he says, \"I really do feel terrible after.\" He denies any pattern of violating others' rights, truancy, or serious rule-breaking outside these eruptions.",
      "session2": "Functional analysis links Tyler's outbursts to a low frustration threshold and physiological arousal he does not notice until it peaks; his affect brightens and his eye contact improves as he grasps the pattern. He learns to recognize early body cues, use a brief time-out, and practice paced breathing. His parents are coached to reduce escalation and reinforce calm. Outbursts decline in frequency as he builds an early-warning vocabulary and coping repertoire."
    },
    "diagnosticRationale": "Recurrent, impulsive aggressive outbursts grossly out of proportion to provocation, not premeditated and not committed to achieve a tangible goal, occurring twice weekly for more than three months, with remorse between episodes, meet criteria for intermittent explosive disorder. The absence of a broader pattern of rights-violations rules out conduct disorder; the impulsive non-defiant quality and lack of a pervasive negativistic pattern distinguish it from ODD; and the absence of mood elevation rules out mania.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Intermittent Explosive Disorder: impulsive aggression out of proportion, not premeditated or instrumental"
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "Skills-based interventions for impulsive aggression including arousal recognition and parent coaching"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "B.5 confidentiality with minors and involving parents appropriately"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which feature most distinguishes this presentation from conduct disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "His aggression is impulsive and remorseful, without a broader pattern of violating others\u2019 rights",
            "isCorrect": true,
            "weight": 3,
            "rationale": "IED lacks the pervasive rights-violation pattern of conduct disorder.",
            "explanation": {
              "approach": "Pattern analysis",
              "rationale": "IED is impulsive and remorseful",
              "keyIndicators": [
                "impulsive",
                "remorse"
              ],
              "commonMistake": "Equating any aggression with conduct disorder"
            }
          },
          {
            "id": "b",
            "text": "He carefully premeditates each outburst in order to intimidate teachers and gain a clear social advantage",
            "isCorrect": false,
            "weight": -2,
            "rationale": "IED outbursts are impulsive and non-instrumental.",
            "explanation": {
              "approach": "Misread motive",
              "rationale": "Not instrumental",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Reading planning into impulsive acts"
            }
          },
          {
            "id": "c",
            "text": "He shows a long pattern of stealing, truancy, and deliberate cruelty toward peers and to neighborhood animals",
            "isCorrect": false,
            "weight": -1,
            "rationale": "No such pattern; that would indicate conduct disorder.",
            "explanation": {
              "approach": "Fabricated pattern",
              "rationale": "Contradicts the history",
              "keyIndicators": [
                "inattention"
              ],
              "commonMistake": "Inventing conduct features"
            }
          },
          {
            "id": "d",
            "text": "His outbursts only ever occur during clearly defined periods of elevated, expansive, and grandiose mood",
            "isCorrect": false,
            "weight": -1,
            "rationale": "No mood elevation; that suggests mania.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "No mood episode",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Importing manic features"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "intake",
        "question": "To rule out a manic episode, what should the clinician screen for?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "A distinct period of elevated mood with decreased need for sleep and grandiosity",
            "isCorrect": true,
            "weight": 3,
            "rationale": "These define a manic episode versus episodic aggression.",
            "explanation": {
              "approach": "Mania screen",
              "rationale": "Targets the bipolar differential",
              "keyIndicators": [
                "elevated mood",
                "reduced sleep"
              ],
              "commonMistake": "Skipping mood-elevation screening"
            }
          },
          {
            "id": "b",
            "text": "A single dramatic outburst of property destruction occurring after an unusually stressful school examination",
            "isCorrect": false,
            "weight": -1,
            "rationale": "One stressor-linked event does not address mania.",
            "explanation": {
              "approach": "Off-target",
              "rationale": "Does not screen mania",
              "keyIndicators": [
                "mis-screen"
              ],
              "commonMistake": "Confusing a trigger with an episode"
            }
          },
          {
            "id": "c",
            "text": "Whether his friends have noticed that he tends to keep his bedroom and his school locker unusually messy",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Irrelevant to the manic differential.",
            "explanation": {
              "approach": "Irrelevant data",
              "rationale": "No diagnostic value",
              "keyIndicators": [
                "noise"
              ],
              "commonMistake": "Collecting irrelevant detail"
            }
          },
          {
            "id": "d",
            "text": "Whether his outbursts are consistently planned in advance to obtain money or other tangible rewards from peers",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Addresses instrumentality, not mania.",
            "explanation": {
              "approach": "Wrong target",
              "rationale": "Mismatched differential",
              "keyIndicators": [
                "mis-screen"
              ],
              "commonMistake": "Screening the wrong dimension"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "What is the most appropriate evidence-based intervention focus?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Help him recognize early arousal cues and apply coping skills before the outburst peaks",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Early-warning recognition and coping target impulsive aggression.",
            "explanation": {
              "approach": "Arousal recognition",
              "rationale": "Interrupts the escalation cycle",
              "keyIndicators": [
                "early cues",
                "coping skills"
              ],
              "commonMistake": "Waiting until the outburst to intervene"
            }
          },
          {
            "id": "b",
            "text": "Use consistent harsh consequences and removal of privileges as the central and primary intervention strategy",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Punishment alone does not build regulation skills.",
            "explanation": {
              "approach": "Punishment-only",
              "rationale": "Misses skill-building",
              "keyIndicators": [
                "over-punitive"
              ],
              "commonMistake": "Relying on consequences alone"
            }
          },
          {
            "id": "c",
            "text": "Focus the work on uncovering and resolving repressed early childhood trauma believed to fuel each eruption",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Speculative and not first-line here.",
            "explanation": {
              "approach": "Speculative depth",
              "rationale": "Lacks evidence",
              "keyIndicators": [
                "speculation"
              ],
              "commonMistake": "Defaulting to trauma uncovering"
            }
          },
          {
            "id": "d",
            "text": "Recommend immediate residential placement away from the family home until all of the outbursts fully cease",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Disproportionate to an outpatient-manageable problem.",
            "explanation": {
              "approach": "Over-restriction",
              "rationale": "Unwarranted level of care",
              "keyIndicators": [
                "overtreatment"
              ],
              "commonMistake": "Escalating care unnecessarily"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "His parents escalate during outbursts. What coaching is most appropriate?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Coach parents to stay calm, avoid escalating, and reinforce his calming attempts",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Reducing parental escalation lowers the aggression cycle.",
            "explanation": {
              "approach": "Parent coaching",
              "rationale": "De-escalation and reinforcement",
              "keyIndicators": [
                "de-escalation",
                "reinforcement"
              ],
              "commonMistake": "Matching the child\u2019s escalation"
            }
          },
          {
            "id": "b",
            "text": "Advise the parents to match his intensity firmly so he learns they cannot ever be intimidated by him",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Escalation worsens the cycle.",
            "explanation": {
              "approach": "Counter-escalation",
              "rationale": "Fuels conflict",
              "keyIndicators": [
                "escalation"
              ],
              "commonMistake": "Out-escalating the child"
            }
          },
          {
            "id": "c",
            "text": "Tell the parents to remove themselves entirely from any involvement and let the school manage all behavior",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Disengagement abandons a key intervention lever.",
            "explanation": {
              "approach": "Disengagement",
              "rationale": "Loses parental role",
              "keyIndicators": [
                "withdrawal"
              ],
              "commonMistake": "Offloading all responsibility"
            }
          },
          {
            "id": "d",
            "text": "Instruct the parents to negotiate and grant whatever he demands during an outburst to keep the peace at home",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reinforces outbursts through capitulation.",
            "explanation": {
              "approach": "Capitulation",
              "rationale": "Rewards aggression",
              "keyIndicators": [
                "reinforcement of aggression"
              ],
              "commonMistake": "Giving in during outbursts"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "He asks that his parents not be told what he shares. How should the clinician respond?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Explain the limits of confidentiality for a minor and how parents will be appropriately involved",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Clarifying minor-confidentiality limits up front is ethical.",
            "explanation": {
              "approach": "Informed limits",
              "rationale": "Sets realistic expectations",
              "keyIndicators": [
                "minor confidentiality",
                "transparency"
              ],
              "commonMistake": "Promising absolute secrecy to a minor"
            }
          },
          {
            "id": "b",
            "text": "Promise the teen complete and unconditional confidentiality so he will feel safe enough to disclose everything",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Cannot guarantee absolute confidentiality for a minor.",
            "explanation": {
              "approach": "Overpromise",
              "rationale": "Unworkable guarantee",
              "keyIndicators": [
                "false promise"
              ],
              "commonMistake": "Guaranteeing total secrecy"
            }
          },
          {
            "id": "c",
            "text": "Tell him that, because he is a minor, his parents are legally entitled to a full transcript of every session",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Overstates parental access and harms the alliance.",
            "explanation": {
              "approach": "Overstatement",
              "rationale": "Discourages disclosure",
              "keyIndicators": [
                "over-disclosure"
              ],
              "commonMistake": "Exaggerating parental rights"
            }
          },
          {
            "id": "d",
            "text": "Refuse to discuss confidentiality at all and simply proceed, hoping the issue will not come up again later",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoids a required informed-consent conversation.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "Skips informed consent",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Ducking the confidentiality talk"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G082",
    "title": "Wide Awake at Three in the Morning",
    "category": "Sleep",
    "difficulty": "medium",
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
        "id": "d1",
        "name": "Insomnia Disorder, Chronic",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Major Depressive Disorder, Single Episode",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Circadian Rhythm Sleep-Wake Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Diane, a 52-year-old high school teacher, reports four months of difficulty falling and staying asleep at least five nights a week; she appears tired and drawn, with dark circles, stifling a yawn as she settles into the chair. She lies awake for over an hour, wakes at three a.m. and cannot return to sleep, and feels exhausted and irritable at work, her voice tinged with weary frustration as she says, \"I dread getting into bed now.\" She has started drinking coffee through the afternoon, naps after school, and lies in bed scrolling her phone for hours hoping sleep will come. She feels increasing dread about bedtime itself.",
      "session1": "Diane reports the sleep difficulty is present despite adequate opportunity and causes clear daytime impairment, her speech a little slowed and her concentration visibly effortful during the interview. It is not better explained by a substance, and she keeps a regular sleep-wake timing rather than a shifted schedule. She denies pervasive low mood, anhedonia, or excessive worry across many life domains, clarifying, \"It's really just the sleep that's eating me alive.\" Her preoccupation is specifically about sleep and its consequences for her teaching.",
      "session2": "A sleep diary reveals an irregular schedule, long time in bed awake, afternoon caffeine, and napping; Diane arrives looking more rested and speaks with renewed energy. She begins stimulus control and sleep restriction, fixes her rise time, removes the phone from bed, and limits caffeine after noon, learning to leave the bed when unable to sleep. Within weeks her sleep consolidates and bedtime dread eases as her sleep efficiency improves."
    },
    "diagnosticRationale": "Dissatisfaction with sleep quantity and quality, with difficulty initiating and maintaining sleep, at least three nights weekly for more than three months despite adequate opportunity, causing daytime impairment, meets criteria for chronic insomnia disorder. The absence of a full mood syndrome rules out depression, the lack of pervasive multi-domain worry distinguishes it from GAD, and the preserved conventional sleep timing rules out a circadian rhythm disorder.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Insomnia Disorder: difficulty initiating/maintaining sleep \u22653 nights/week for \u22653 months with impairment"
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "Cognitive behavioral therapy for insomnia (CBT-I) as first-line treatment"
      },
      {
        "id": "R3",
        "source": "APA CPG",
        "detail": "Stimulus control and sleep restriction as core behavioral components"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which finding best distinguishes this from a major depressive episode?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Her distress centers on sleep itself, without pervasive low mood or anhedonia",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Isolated sleep complaint without a mood syndrome favors insomnia disorder.",
            "explanation": {
              "approach": "Syndrome check",
              "rationale": "No full depressive syndrome",
              "keyIndicators": [
                "no anhedonia",
                "sleep-focused"
              ],
              "commonMistake": "Assuming insomnia always means depression"
            }
          },
          {
            "id": "b",
            "text": "She reports a persistently sad and empty mood nearly every day along with a marked loss of interest in activities",
            "isCorrect": false,
            "weight": -2,
            "rationale": "That describes depression, which she denies.",
            "explanation": {
              "approach": "Wrong profile",
              "rationale": "Contradicts the history",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Inventing depressive symptoms"
            }
          },
          {
            "id": "c",
            "text": "Her sleep schedule is shifted several hours later than conventional times despite an otherwise normal sleep ability",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That points to a circadian disorder, not depression.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Circadian, not mood",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Confusing differentials"
            }
          },
          {
            "id": "d",
            "text": "She worries excessively and uncontrollably about many areas of her life, including finances, health, and family",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That describes GAD, which she denies.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "GAD features absent",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Importing GAD worry"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "What is the recommended first-line treatment?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Cognitive behavioral therapy for insomnia rather than starting with sleep medication",
            "isCorrect": true,
            "weight": 3,
            "rationale": "CBT-I is first-line for chronic insomnia.",
            "explanation": {
              "approach": "CBT-I first",
              "rationale": "Durable and evidence-based",
              "keyIndicators": [
                "CBT-I",
                "first-line"
              ],
              "commonMistake": "Defaulting to hypnotics"
            }
          },
          {
            "id": "b",
            "text": "A long-term nightly prescription hypnotic as the primary and indefinite treatment for her chronic insomnia",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Medication is not first-line and risks dependence.",
            "explanation": {
              "approach": "Medication-first",
              "rationale": "Not recommended initially",
              "keyIndicators": [
                "over-medicating"
              ],
              "commonMistake": "Leading with hypnotics"
            }
          },
          {
            "id": "c",
            "text": "Encouraging her to spend much more total time in bed each night so she has more opportunity to fall asleep",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Excess time in bed worsens insomnia.",
            "explanation": {
              "approach": "Counterproductive",
              "rationale": "Lowers sleep efficiency",
              "keyIndicators": [
                "extended time in bed"
              ],
              "commonMistake": "Increasing time in bed"
            }
          },
          {
            "id": "d",
            "text": "Advising regular long afternoon naps to make up the lost nighttime sleep and restore her daytime alertness",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Napping undermines sleep drive.",
            "explanation": {
              "approach": "Napping advice",
              "rationale": "Reduces homeostatic pressure",
              "keyIndicators": [
                "napping"
              ],
              "commonMistake": "Endorsing daytime naps"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "Which behavioral instruction reflects stimulus control?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Leave the bed when unable to sleep and reserve the bed only for sleep",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Stimulus control re-links bed with sleep.",
            "explanation": {
              "approach": "Stimulus control",
              "rationale": "Strengthens bed-sleep association",
              "keyIndicators": [
                "leave bed",
                "bed for sleep"
              ],
              "commonMistake": "Staying in bed awake for hours"
            }
          },
          {
            "id": "b",
            "text": "Stay lying in bed even while fully awake so the body can rest and gradually drift back into natural sleep",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Opposite of stimulus control.",
            "explanation": {
              "approach": "Anti-control",
              "rationale": "Conditions wakefulness to bed",
              "keyIndicators": [
                "lying awake"
              ],
              "commonMistake": "Remaining in bed awake"
            }
          },
          {
            "id": "c",
            "text": "Keep the phone nearby in bed for a calming activity to do during the long middle-of-the-night awakenings",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Screen use in bed undermines sleep.",
            "explanation": {
              "approach": "Screen exposure",
              "rationale": "Reinforces arousal",
              "keyIndicators": [
                "phone in bed"
              ],
              "commonMistake": "Using screens in bed"
            }
          },
          {
            "id": "d",
            "text": "Vary the daily wake-up time widely depending on how tired she feels on each particular morning of the week",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Irregular rise time destabilizes the rhythm.",
            "explanation": {
              "approach": "Irregular schedule",
              "rationale": "Disrupts consolidation",
              "keyIndicators": [
                "variable wake"
              ],
              "commonMistake": "Allowing a drifting rise time"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "She fears she will never sleep normally again. What is the best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Normalize her frustration and explain how the behavioral plan rebuilds healthy sleep over time",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Validation plus psychoeducation supports adherence.",
            "explanation": {
              "approach": "Validate and educate",
              "rationale": "Builds hope and buy-in",
              "keyIndicators": [
                "validation",
                "psychoeducation"
              ],
              "commonMistake": "Dismissing fears or overpromising"
            }
          },
          {
            "id": "b",
            "text": "Reassure her flatly that her insomnia will completely vanish within just two or three nights of any treatment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Overpromises a rapid cure.",
            "explanation": {
              "approach": "Overpromise",
              "rationale": "Sets up disappointment",
              "keyIndicators": [
                "false reassurance"
              ],
              "commonMistake": "Guaranteeing fast results"
            }
          },
          {
            "id": "c",
            "text": "Tell her that chronic insomnia at her age is generally permanent and that she should learn to live with it",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Inaccurate and demoralizing.",
            "explanation": {
              "approach": "Hopelessness",
              "rationale": "Discourages treatment",
              "keyIndicators": [
                "nihilism"
              ],
              "commonMistake": "Telling clients it is hopeless"
            }
          },
          {
            "id": "d",
            "text": "Suggest she avoid the topic of sleep entirely in sessions so she does not reinforce her nighttime anxiety further",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoidance blocks the core treatment target.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "Cannot treat what is avoided",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Sidestepping the presenting problem"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "intake",
        "question": "A sleep diary is recommended. What is its primary clinical purpose here?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "To track sleep patterns and behaviors that maintain the insomnia and guide the plan",
            "isCorrect": true,
            "weight": 3,
            "rationale": "The diary identifies modifiable maintaining factors.",
            "explanation": {
              "approach": "Functional tracking",
              "rationale": "Reveals patterns and triggers",
              "keyIndicators": [
                "monitoring",
                "maintaining factors"
              ],
              "commonMistake": "Collecting data without using it"
            }
          },
          {
            "id": "b",
            "text": "To definitively diagnose an underlying neurological seizure disorder occurring silently during her deep sleep stages",
            "isCorrect": false,
            "weight": -2,
            "rationale": "A diary cannot diagnose seizures.",
            "explanation": {
              "approach": "Wrong purpose",
              "rationale": "Not a neurological test",
              "keyIndicators": [
                "misuse"
              ],
              "commonMistake": "Overreaching the tool"
            }
          },
          {
            "id": "c",
            "text": "To document her caffeine spending each week so the clinician can build a detailed monthly household budget plan",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Irrelevant to clinical purpose.",
            "explanation": {
              "approach": "Off-target",
              "rationale": "No clinical value",
              "keyIndicators": [
                "noise"
              ],
              "commonMistake": "Misusing the diary"
            }
          },
          {
            "id": "d",
            "text": "To prove to her skeptical employer that her daytime fatigue is genuine and warrants a formal accommodation request",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Not the diary\u2019s clinical purpose.",
            "explanation": {
              "approach": "Wrong aim",
              "rationale": "Administrative, not clinical",
              "keyIndicators": [
                "misframe"
              ],
              "commonMistake": "Repurposing the tool"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G083",
    "title": "Becoming Who She Has Always Been",
    "category": "Sexual-Gender",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Gender Dysphoria in Adolescents/Adults",
      "code": "F64.0"
    },
    "diagnosis": {
      "name": "Gender Dysphoria in Adolescents/Adults",
      "code": "F64.0"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Gender Dysphoria in Adolescents/Adults",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Body Dysmorphic Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Adjustment Disorder, with Depressed Mood",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Other Specified Sexual Dysfunction",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Sofia, a 24-year-old assigned male at birth, presents seeking support around a long-standing experience of being female; she sits composed and makes warm, steady eye contact, though her shoulders tense when describing recent family conflict. Since childhood she has felt a marked incongruence between her experienced gender and her assigned sex, with distress about secondary sex characteristics and a strong desire to be seen and treated as a woman. She reports relief and rightness when using her chosen name and pronouns, saying softly, \"When someone calls me Sofia, it finally feels like me.\" The distress intensifies with family rejection and workplace misgendering, not from any disgust with her body's appearance per se.",
      "session1": "Sofia describes a persistent cross-gender identification and discomfort with her assigned sex characteristics lasting well over six months, with clinically significant distress and impairment; her tone is clear and certain, her affect steady until her voice catches recounting being misgendered at work. She denies a preoccupation with a perceived defect in her appearance unrelated to gender, and her distress is not a transient reaction to a single recent stressor. Her sense of being a woman is stable, coherent, and lifelong.",
      "session2": "Using an affirmative framework, the counselor explores Sofia's goals, supports her in social transition, and coordinates a referral for gender-affirming medical care per established standards; she smiles more readily and sits more openly across sessions. They process minority stress and family dynamics, and she remarks, \"For the first time I feel like I'm moving toward something instead of hiding.\" Her mood lifts as affirmation increases, and the work centers her self-defined goals rather than questioning the validity of her identity."
    },
    "diagnosticRationale": "A marked incongruence between experienced and assigned gender for more than six months, with a strong desire to be the other gender and significant distress, meets criteria for gender dysphoria. The distress is identity-based, not a preoccupation with a perceived appearance defect as in body dysmorphic disorder, not a transient stressor reaction as in adjustment disorder, and unrelated to a sexual dysfunction. Affirmative care, not identity change, is indicated.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Gender Dysphoria: marked incongruence \u22656 months with clinically significant distress"
      },
      {
        "id": "R2",
        "source": "ACA Code of Ethics",
        "detail": "C.5 nondiscrimination and A.4.b avoiding imposition of counselor values"
      },
      {
        "id": "R3",
        "source": "NICE guidelines",
        "detail": "Affirmative, collaborative care and appropriate referral for gender-affirming services"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which feature best distinguishes gender dysphoria from body dysmorphic disorder here?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Her distress is about gender incongruence, not a perceived defect in appearance",
            "isCorrect": true,
            "weight": 3,
            "rationale": "GD centers on gender identity; BDD on a perceived appearance flaw.",
            "explanation": {
              "approach": "Focus distinction",
              "rationale": "Identity vs appearance defect",
              "keyIndicators": [
                "gender incongruence",
                "identity"
              ],
              "commonMistake": "Conflating gender distress with BDD"
            }
          },
          {
            "id": "b",
            "text": "She is preoccupied for hours each day with a specific perceived flaw in her nose and skin unrelated to gender",
            "isCorrect": false,
            "weight": -2,
            "rationale": "That describes BDD, which she denies.",
            "explanation": {
              "approach": "Wrong profile",
              "rationale": "Not an appearance-defect preoccupation",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Mapping BDD onto GD"
            }
          },
          {
            "id": "c",
            "text": "Her distress arose suddenly within the past month entirely as a reaction to one specific identifiable stressor",
            "isCorrect": false,
            "weight": -1,
            "rationale": "GD is long-standing, not a transient reaction.",
            "explanation": {
              "approach": "Wrong course",
              "rationale": "Identity is lifelong",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Treating identity as a stress reaction"
            }
          },
          {
            "id": "d",
            "text": "Her concern is primarily about difficulty with sexual arousal and performance rather than her gender identity",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That points to a sexual dysfunction, not GD.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Not a dysfunction",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Confusing the differentials"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "What is the most appropriate therapeutic stance?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Affirm her identity and center her self-defined goals for transition",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Affirmative care is the ethical standard.",
            "explanation": {
              "approach": "Affirmative stance",
              "rationale": "Respects autonomy and identity",
              "keyIndicators": [
                "affirmation",
                "client goals"
              ],
              "commonMistake": "Questioning the validity of identity"
            }
          },
          {
            "id": "b",
            "text": "Gently encourage her to explore whether she might feel more comfortable living in her originally assigned gender",
            "isCorrect": false,
            "weight": -2,
            "rationale": "This is conversion-oriented and unethical.",
            "explanation": {
              "approach": "Conversion framing",
              "rationale": "Harmful and prohibited",
              "keyIndicators": [
                "identity change"
              ],
              "commonMistake": "Steering toward assigned gender"
            }
          },
          {
            "id": "c",
            "text": "Remain strictly neutral by avoiding her chosen name and pronouns until a formal diagnosis is fully confirmed",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Withholding affirmation is harmful misgendering.",
            "explanation": {
              "approach": "False neutrality",
              "rationale": "Misgendering causes harm",
              "keyIndicators": [
                "misgendering"
              ],
              "commonMistake": "Withholding basic affirmation"
            }
          },
          {
            "id": "d",
            "text": "Focus the sessions on persuading her family to accept her before addressing any of her own personal goals",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Centers others over the client\u2019s goals.",
            "explanation": {
              "approach": "Misplaced focus",
              "rationale": "Decenter the client",
              "keyIndicators": [
                "mis-prioritization"
              ],
              "commonMistake": "Prioritizing family over client"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "She wishes to pursue gender-affirming medical care. What is most appropriate?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Provide a collaborative referral for gender-affirming care per established standards",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Coordinated referral follows accepted standards of care.",
            "explanation": {
              "approach": "Standards-based referral",
              "rationale": "Connects to appropriate care",
              "keyIndicators": [
                "referral",
                "standards of care"
              ],
              "commonMistake": "Obstructing or gatekeeping inappropriately"
            }
          },
          {
            "id": "b",
            "text": "Tell her she must first complete at least two full years of counseling before any referral can be considered",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Imposes an arbitrary, non-standard barrier.",
            "explanation": {
              "approach": "Arbitrary gatekeeping",
              "rationale": "Not standard",
              "keyIndicators": [
                "barrier"
              ],
              "commonMistake": "Inventing prerequisites"
            }
          },
          {
            "id": "c",
            "text": "Refuse to make any referral, explaining that affirming her request would violate your own personal beliefs",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Imposing values and discriminating is unethical.",
            "explanation": {
              "approach": "Value imposition",
              "rationale": "Discriminatory refusal",
              "keyIndicators": [
                "discrimination"
              ],
              "commonMistake": "Letting personal beliefs deny care"
            }
          },
          {
            "id": "d",
            "text": "Advise her to obtain hormones independently online so she can avoid the cost and delay of a formal referral",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Endorses unsafe, unsupervised care.",
            "explanation": {
              "approach": "Unsafe advice",
              "rationale": "Bypasses medical oversight",
              "keyIndicators": [
                "unsafe care"
              ],
              "commonMistake": "Recommending unsupervised treatment"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "She describes minority stress from workplace misgendering. Best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Validate the harm of minority stress and explore coping and support resources",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Naming minority stress and building coping is appropriate.",
            "explanation": {
              "approach": "Minority-stress framing",
              "rationale": "Validates and equips",
              "keyIndicators": [
                "validation",
                "coping"
              ],
              "commonMistake": "Treating distress as internal pathology"
            }
          },
          {
            "id": "b",
            "text": "Suggest she could avoid the stress simply by not disclosing her gender identity to anyone at her workplace",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Promotes concealment and self-erasure.",
            "explanation": {
              "approach": "Concealment advice",
              "rationale": "Harmful and invalidating",
              "keyIndicators": [
                "concealment"
              ],
              "commonMistake": "Advising her to hide"
            }
          },
          {
            "id": "c",
            "text": "Interpret her distress about misgendering as evidence of an underlying unresolved attachment wound from childhood",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Pathologizes an external stressor.",
            "explanation": {
              "approach": "Pathologizing",
              "rationale": "Misattributes the cause",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Internalizing external harm"
            }
          },
          {
            "id": "d",
            "text": "Reassure her that her coworkers almost certainly mean no harm and that she should try to let the comments go",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Minimizes the real impact of misgendering.",
            "explanation": {
              "approach": "Minimization",
              "rationale": "Dismisses harm",
              "keyIndicators": [
                "dismissal"
              ],
              "commonMistake": "Excusing the misgendering"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "A counselor feels personal discomfort with gender-affirming work. What is the ethical course?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Set aside personal values, provide competent affirmative care, and seek consultation or training",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Counselors must not impose values; they build competence.",
            "explanation": {
              "approach": "Values bracketing",
              "rationale": "Maintains competent, nondiscriminatory care",
              "keyIndicators": [
                "nondiscrimination",
                "consultation"
              ],
              "commonMistake": "Referring out due to bias"
            }
          },
          {
            "id": "b",
            "text": "Refer the client elsewhere immediately on the grounds that her identity conflicts with the counselor\u2019s values",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Values-based referral is discriminatory.",
            "explanation": {
              "approach": "Value-based referral",
              "rationale": "Ethically prohibited",
              "keyIndicators": [
                "discrimination"
              ],
              "commonMistake": "Refusing service over identity"
            }
          },
          {
            "id": "c",
            "text": "Continue the work but subtly share the counselor\u2019s reservations so the client can weigh them in her decision",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Imposes counselor values on the client.",
            "explanation": {
              "approach": "Value imposition",
              "rationale": "Undermines autonomy",
              "keyIndicators": [
                "imposition"
              ],
              "commonMistake": "Injecting personal beliefs"
            }
          },
          {
            "id": "d",
            "text": "Avoid the topic of gender entirely in sessions and redirect to safer issues until the discomfort passes on its own",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoidance fails the client\u2019s actual needs.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "Neglects the presenting concern",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Dodging the central issue"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G084",
    "title": "The Client Who Is Also a Neighbor",
    "category": "Ethics",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Boundary / Dual-Relationship Dilemma",
      "code": "Z65.8"
    },
    "diagnosis": {
      "name": "Boundary / Dual-Relationship Dilemma",
      "code": "Z65.8"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Boundary / Dual-Relationship Dilemma",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Confidentiality / Duty-to-Warn Dilemma",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Informed Consent / Competence Dilemma",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Mandated Reporting Decision",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "A counselor in a small rural town is contacted by a prospective client, Brenda, who turns out to be a member of the same tight-knit community association the counselor chairs; Brenda's voice on the phone is tight and apologetic, hesitating before she explains her situation. They see each other regularly at meetings and share several mutual friends. Brenda is in genuine distress with anxiety and wants to begin therapy, noting, \"You're really the only person I'd trust, and there's no one else for ninety minutes.\" The counselor recognizes the overlapping roles and the potential for a harmful dual relationship.",
      "session1": "In supervision the counselor weighs the risks: impaired objectivity, confidentiality strain in a small community, and role confusion at association meetings, picturing how she and Brenda will face each other across the meeting table. She considers the limited access to alternative providers and Brenda's real need. She reviews her code of ethics on managing unavoidable multiple relationships, documenting the rationale, and setting clear boundaries when a dual relationship cannot be avoided.",
      "session2": "She decides to discuss the overlap openly with Brenda, document the safeguards, clarify how they will interact outside sessions, and arrange consultation; in that conversation Brenda nods with visible relief and says, \"It helps to know we've thought this through.\" She considers stepping back from a direct supervisory role over Brenda in the association. The plan centers client welfare, informed consent about the risks, and ongoing monitoring of the boundary."
    },
    "diagnosticRationale": "The central issue is a potential dual relationship in a small community where roles overlap, raising risks to objectivity, confidentiality, and the client\u2019s welfare. This is a boundary and multiple-relationship dilemma rather than a duty-to-warn, informed-consent competence, or mandated-reporting question. Ethical management requires transparency, documented safeguards, consultation, and centering client welfare when the relationship cannot reasonably be avoided.",
    "references": [
      {
        "id": "R1",
        "source": "ACA Code of Ethics",
        "detail": "A.6 managing and documenting unavoidable multiple relationships to minimize harm"
      },
      {
        "id": "R2",
        "source": "ACA Code of Ethics",
        "detail": "A.2 informed consent including risks of the counseling relationship"
      },
      {
        "id": "R3",
        "source": "Corey (Theory & Practice)",
        "detail": "Ethical decision-making and use of consultation for boundary dilemmas"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "ethics",
        "question": "How should the counselor frame this situation ethically?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "As a potentially unavoidable multiple relationship requiring documented safeguards",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Small-community overlap is a multiple-relationship issue.",
            "explanation": {
              "approach": "Boundary framing",
              "rationale": "Identifies the dual-relationship risk",
              "keyIndicators": [
                "multiple relationship",
                "safeguards"
              ],
              "commonMistake": "Ignoring the role overlap"
            }
          },
          {
            "id": "b",
            "text": "As a duty-to-warn situation that immediately requires notifying an identifiable third party of imminent danger",
            "isCorrect": false,
            "weight": -2,
            "rationale": "No threat of harm exists here.",
            "explanation": {
              "approach": "Wrong category",
              "rationale": "Not a duty-to-warn case",
              "keyIndicators": [
                "miscategorization"
              ],
              "commonMistake": "Misreading the dilemma"
            }
          },
          {
            "id": "c",
            "text": "As a mandated-reporting decision that obligates the counselor to file a report with the appropriate state agency",
            "isCorrect": false,
            "weight": -1,
            "rationale": "No abuse or reportable condition is present.",
            "explanation": {
              "approach": "Wrong category",
              "rationale": "Not a reporting matter",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Forcing a reporting frame"
            }
          },
          {
            "id": "d",
            "text": "As a competence-and-consent problem stemming from doubt about the client\u2019s capacity to consent to the treatment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Capacity is not in question here.",
            "explanation": {
              "approach": "Wrong category",
              "rationale": "Capacity not at issue",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Mislabeling the issue"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "core",
        "question": "What is the most appropriate first step before deciding to proceed?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Seek consultation and weigh client welfare, risks, and the lack of alternative providers",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Consultation and a welfare analysis guide the decision.",
            "explanation": {
              "approach": "Consultation first",
              "rationale": "Structured ethical reasoning",
              "keyIndicators": [
                "consultation",
                "welfare"
              ],
              "commonMistake": "Deciding alone without consultation"
            }
          },
          {
            "id": "b",
            "text": "Decline the client outright with no further discussion because any overlap whatsoever is strictly forbidden always",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Multiple relationships are not categorically banned.",
            "explanation": {
              "approach": "Over-rigid rule",
              "rationale": "Misstates the standard",
              "keyIndicators": [
                "rigidity"
              ],
              "commonMistake": "Treating all overlap as prohibited"
            }
          },
          {
            "id": "c",
            "text": "Begin therapy immediately and simply avoid ever mentioning the obvious community overlap during their sessions",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ignoring the issue invites harm.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "No safeguards or consent",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Proceeding without addressing risk"
            }
          },
          {
            "id": "d",
            "text": "Ask several mutual friends in the association whether they think the counseling arrangement would be acceptable",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Breaches confidentiality and is improper.",
            "explanation": {
              "approach": "Confidentiality breach",
              "rationale": "Improper consultation source",
              "keyIndicators": [
                "breach"
              ],
              "commonMistake": "Consulting the client\u2019s social circle"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "ethics",
        "question": "If she proceeds, what best protects the client?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Transparent informed consent about the risks plus clear boundaries for outside contact",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Consent and explicit boundaries protect the client.",
            "explanation": {
              "approach": "Informed consent",
              "rationale": "Discloses risks and sets limits",
              "keyIndicators": [
                "informed consent",
                "boundaries"
              ],
              "commonMistake": "Skipping risk disclosure"
            }
          },
          {
            "id": "b",
            "text": "A private personal agreement that they will both simply pretend not to know one another at any public gathering",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Unrealistic and not a true safeguard.",
            "explanation": {
              "approach": "Pseudo-safeguard",
              "rationale": "Not a real protection",
              "keyIndicators": [
                "weak boundary"
              ],
              "commonMistake": "Relying on pretending"
            }
          },
          {
            "id": "c",
            "text": "A signed waiver in which the client gives up the right to raise any future ethics complaint about the overlap",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Clients cannot waive ethical protections.",
            "explanation": {
              "approach": "Improper waiver",
              "rationale": "Unenforceable and coercive",
              "keyIndicators": [
                "coercion"
              ],
              "commonMistake": "Demanding a rights waiver"
            }
          },
          {
            "id": "d",
            "text": "A decision to keep no documentation of the arrangement so the dual relationship leaves no discoverable record",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Failing to document is itself unethical.",
            "explanation": {
              "approach": "No documentation",
              "rationale": "Violates the standard",
              "keyIndicators": [
                "under-documentation"
              ],
              "commonMistake": "Hiding the arrangement"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "How should she handle her supervisory role over the client in the association?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Step back from directly supervising the client to reduce the role conflict",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Reducing overlapping authority limits the conflict.",
            "explanation": {
              "approach": "Role reduction",
              "rationale": "Minimizes power-based overlap",
              "keyIndicators": [
                "role conflict",
                "recusal"
              ],
              "commonMistake": "Keeping conflicting authority roles"
            }
          },
          {
            "id": "b",
            "text": "Keep both roles but promise herself she will remain perfectly fair and objective in all association decisions",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Self-assurance does not remove the conflict.",
            "explanation": {
              "approach": "Self-reliance",
              "rationale": "Overestimates objectivity",
              "keyIndicators": [
                "bias risk"
              ],
              "commonMistake": "Trusting willpower over structure"
            }
          },
          {
            "id": "c",
            "text": "Use her association authority to give the client preferential treatment so the therapy alliance is strengthened",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Exploits the dual role and harms fairness.",
            "explanation": {
              "approach": "Exploitation",
              "rationale": "Abuses the role",
              "keyIndicators": [
                "favoritism"
              ],
              "commonMistake": "Leveraging power inappropriately"
            }
          },
          {
            "id": "d",
            "text": "Resign entirely from the community association immediately, abandoning all her other unrelated civic commitments",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Disproportionate; recusal from the role suffices.",
            "explanation": {
              "approach": "Overreaction",
              "rationale": "Excessive response",
              "keyIndicators": [
                "overcorrection"
              ],
              "commonMistake": "Overcorrecting unnecessarily"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "What ongoing practice best manages the boundary over time?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Periodic consultation and documentation reviewing the boundary and client welfare",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Ongoing monitoring sustains ethical safeguards.",
            "explanation": {
              "approach": "Ongoing monitoring",
              "rationale": "Maintains accountability",
              "keyIndicators": [
                "consultation",
                "documentation"
              ],
              "commonMistake": "A one-time fix without follow-up"
            }
          },
          {
            "id": "b",
            "text": "Assuming that once the initial consent form is signed no further attention to the boundary is ever needed again",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Boundaries require continued attention.",
            "explanation": {
              "approach": "Set-and-forget",
              "rationale": "Neglects monitoring",
              "keyIndicators": [
                "complacency"
              ],
              "commonMistake": "Treating consent as a one-time event"
            }
          },
          {
            "id": "c",
            "text": "Quietly discontinuing all documentation about the relationship to avoid creating a paper trail that could be misread",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Avoiding documentation is unethical.",
            "explanation": {
              "approach": "No record",
              "rationale": "Undermines accountability",
              "keyIndicators": [
                "concealment"
              ],
              "commonMistake": "Erasing the record"
            }
          },
          {
            "id": "d",
            "text": "Sharing details of the arrangement informally with colleagues at social events to get their casual reactions to it",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Risks confidentiality and is improper.",
            "explanation": {
              "approach": "Improper disclosure",
              "rationale": "Casual breach risk",
              "keyIndicators": [
                "breach"
              ],
              "commonMistake": "Discussing cases socially"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G085",
    "title": "Heavy Mornings and Quiet Evenings",
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
        "id": "d1",
        "name": "Major Depressive Disorder, Moderate",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Persistent Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Adjustment Disorder, with Depressed Mood",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Bipolar II Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Emily, a 29-year-old graduate student, reports six weeks of low mood, loss of interest in friends and hobbies, poor sleep with early waking, low energy, difficulty concentrating on coursework, and feelings of worthlessness; she sits with slumped shoulders, downcast eyes, and slowed, soft-spoken speech. She has had two similar episodes in the past that each lifted after several months. She denies any period of unusually elevated mood or decreased need for sleep, saying tearfully, \"I just feel like I'm letting everyone down.\" She is withdrawn and worried she is falling behind in her program.",
      "session1": "Emily endorses five depressive symptoms present nearly every day for over two weeks, with clear impairment in school and relationships; her affect is flat and her responses come slowly, with long pauses. She reports passive thoughts that life is not worth it but denies any plan or intent, adding quietly, \"I'd never actually do anything, I just feel so heavy.\" There is no recent single identifiable stressor that fully explains the onset, and the symptoms exceed an expected reaction. She has no history of mania or hypomania.",
      "session2": "Reviewing her history, the recurrent nature of Emily's episodes and full remission between them become clear; she makes a little more eye contact and her voice carries faint hope as she discusses next steps. She is open to therapy and possibly a medication referral, and a safety check is documented. Behavioral activation and cognitive work are introduced, and she identifies small, achievable steps to re-engage with valued activities."
    },
    "diagnosticRationale": "Five or more depressive symptoms present nearly every day for at least two weeks with significant impairment, in a recurrent pattern with prior full remissions and no history of mania or hypomania, support recurrent major depressive disorder, moderate. The episodic course distinguishes it from persistent depressive disorder, the severity and full criteria distinguish it from adjustment disorder, and the absence of hypomania rules out bipolar II.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "MDD: five+ symptoms for two weeks with impairment; recurrent course with remissions"
      },
      {
        "id": "R2",
        "source": "C-SSRS",
        "detail": "Routine screening for suicidal ideation, plan, and intent in depression"
      },
      {
        "id": "R3",
        "source": "APA CPG",
        "detail": "Behavioral activation and cognitive therapy as first-line for moderate MDD"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "What is the most important safety step at intake?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Screen directly for suicidal ideation, plan, and intent",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Suicide screening is essential in depression.",
            "explanation": {
              "approach": "Risk screening",
              "rationale": "Standard in any depressive intake",
              "keyIndicators": [
                "ideation",
                "intent"
              ],
              "commonMistake": "Skipping suicide screening"
            }
          },
          {
            "id": "b",
            "text": "Wait until a strong therapeutic alliance has clearly formed over several sessions before raising any safety topics",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Risk screening cannot be deferred.",
            "explanation": {
              "approach": "Deferred screening",
              "rationale": "Unsafe delay",
              "keyIndicators": [
                "delay"
              ],
              "commonMistake": "Postponing the risk question"
            }
          },
          {
            "id": "c",
            "text": "Assume she is at no risk because she is a high-functioning graduate student with a promising academic future ahead",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Functioning does not rule out risk.",
            "explanation": {
              "approach": "False assumption",
              "rationale": "Status is not protective",
              "keyIndicators": [
                "bias"
              ],
              "commonMistake": "Assuming low risk from achievement"
            }
          },
          {
            "id": "d",
            "text": "Ask her roommate to quietly monitor her at home instead of conducting a direct clinical suicide assessment yourself",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Outsourcing replaces direct assessment.",
            "explanation": {
              "approach": "Outsourced screening",
              "rationale": "Avoids the clinical task",
              "keyIndicators": [
                "deflection"
              ],
              "commonMistake": "Delegating the assessment"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "intake",
        "question": "Which feature best distinguishes this from persistent depressive disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Her depression is episodic with full remission between distinct episodes",
            "isCorrect": true,
            "weight": 3,
            "rationale": "PDD is chronic for two-plus years; hers remits.",
            "explanation": {
              "approach": "Course distinction",
              "rationale": "Episodic vs chronic",
              "keyIndicators": [
                "episodic",
                "remission"
              ],
              "commonMistake": "Confusing MDD with PDD"
            }
          },
          {
            "id": "b",
            "text": "She has experienced a continuous low-grade depressed mood every single day for the last several uninterrupted years",
            "isCorrect": false,
            "weight": -2,
            "rationale": "That describes PDD, not her course.",
            "explanation": {
              "approach": "Wrong course",
              "rationale": "Contradicts the history",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Inventing chronicity"
            }
          },
          {
            "id": "c",
            "text": "Her symptoms began abruptly right after a single clearly identifiable and overwhelming recent academic stressor",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That suggests adjustment disorder.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Not stressor-bound",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Importing adjustment features"
            }
          },
          {
            "id": "d",
            "text": "She has had repeated distinct episodes of clearly elevated, expansive mood with a markedly decreased need for sleep",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That would indicate bipolar, which she denies.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "No hypomania present",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Adding bipolar features"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "What is an appropriate first-line treatment focus?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Behavioral activation to re-engage her with valued activities",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Behavioral activation is first-line for moderate MDD.",
            "explanation": {
              "approach": "Behavioral activation",
              "rationale": "Evidence-based and practical",
              "keyIndicators": [
                "activation",
                "valued activity"
              ],
              "commonMistake": "Waiting passively for mood to lift"
            }
          },
          {
            "id": "b",
            "text": "Long-term intensive psychoanalysis focused chiefly on uncovering repressed early childhood developmental conflicts",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Not first-line for moderate MDD.",
            "explanation": {
              "approach": "Wrong modality",
              "rationale": "Not first-line",
              "keyIndicators": [
                "mismatch"
              ],
              "commonMistake": "Defaulting to depth work"
            }
          },
          {
            "id": "c",
            "text": "Strict and indefinite bed rest at home along with a complete withdrawal from all of her demanding coursework",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Withdrawal and inactivity worsen depression.",
            "explanation": {
              "approach": "Inactivity",
              "rationale": "Reinforces depression",
              "keyIndicators": [
                "withdrawal"
              ],
              "commonMistake": "Prescribing rest and avoidance"
            }
          },
          {
            "id": "d",
            "text": "Telling her the episode will simply pass on its own and that no specific treatment or follow-up is really needed",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Withholds indicated care.",
            "explanation": {
              "approach": "Undertreatment",
              "rationale": "Denies effective care",
              "keyIndicators": [
                "neglect"
              ],
              "commonMistake": "Minimizing the need for treatment"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "She says she feels worthless. What is the best reflective response?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Reflect her pain and note that worthlessness is a recognized symptom of depression",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Empathy plus psychoeducation reframes the symptom.",
            "explanation": {
              "approach": "Reflect and educate",
              "rationale": "Validates and contextualizes",
              "keyIndicators": [
                "reflection",
                "psychoeducation"
              ],
              "commonMistake": "Either minimizing or only arguing"
            }
          },
          {
            "id": "b",
            "text": "List several of her concrete recent academic accomplishments so she can rationally dispute the negative belief herself",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature disputation bypasses empathy.",
            "explanation": {
              "approach": "Premature disputing",
              "rationale": "Skips validation",
              "keyIndicators": [
                "disputing"
              ],
              "commonMistake": "Arguing with the feeling"
            }
          },
          {
            "id": "c",
            "text": "Tell her that everyone in graduate school feels worthless sometimes and that the feeling will fade with more time",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Over-normalizing minimizes a clinical symptom.",
            "explanation": {
              "approach": "Over-normalizing",
              "rationale": "Misses the symptom",
              "keyIndicators": [
                "minimizing"
              ],
              "commonMistake": "Normalizing worthlessness"
            }
          },
          {
            "id": "d",
            "text": "Quickly change the subject to a more positive topic so that she does not dwell on the painful negative thoughts",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Avoidance shuts down disclosure.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "Suppresses affect",
              "keyIndicators": [
                "redirection"
              ],
              "commonMistake": "Steering away from feelings"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "She is hesitant about a medication referral. What is the best response?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Explore her concerns and present medication as one collaborative option among several",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Collaborative, informed decision-making respects autonomy.",
            "explanation": {
              "approach": "Collaborative option",
              "rationale": "Honors client choice",
              "keyIndicators": [
                "collaboration",
                "autonomy"
              ],
              "commonMistake": "Pressuring or dismissing medication"
            }
          },
          {
            "id": "b",
            "text": "Insist firmly that she will not improve at all unless she immediately starts a prescribed antidepressant medication",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Coercive and inaccurate.",
            "explanation": {
              "approach": "Coercion",
              "rationale": "Removes autonomy",
              "keyIndicators": [
                "pressure"
              ],
              "commonMistake": "Forcing medication"
            }
          },
          {
            "id": "c",
            "text": "Agree with her that medication is generally harmful and advise her to avoid considering it under any circumstances",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Biased advice outside scope.",
            "explanation": {
              "approach": "Biased steering",
              "rationale": "Improper steering",
              "keyIndicators": [
                "misinformation"
              ],
              "commonMistake": "Discouraging an evidence-based option"
            }
          },
          {
            "id": "d",
            "text": "Drop the subject permanently and never raise the possibility of a medication referral again during the treatment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Forecloses a reasonable option.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "Closes a valid path",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Abandoning the discussion"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G086",
    "title": "The Racing Heart in the Grocery Aisle",
    "category": "Anxiety",
    "difficulty": "hard",
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
        "id": "d1",
        "name": "Panic Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Agoraphobia",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Social Anxiety Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Miguel, a 34-year-old delivery driver, reports recurrent, unexpected surges of intense fear that peak within minutes, with pounding heart, shortness of breath, sweating, dizziness, and a terror of dying or losing control; he sits on the edge of his seat, leg bouncing, hands clasped tightly. The first attack struck while driving and felt like a heart attack, and cardiac workups were normal. He now worries constantly about the next attack and has begun avoiding driving alone, saying with urgency, \"I was sure I was dying right there in the truck.\" He describes persistent concern about additional attacks and their meaning.",
      "session1": "Miguel endorses recurrent unexpected panic attacks followed by at least a month of persistent worry about further attacks and a change in behavior to avoid them; his speech is rapid and his breathing quickens as he recounts an episode in the grocery aisle. The attacks are not triggered only by social scrutiny or by a single specific feared object. His worry is focused on the attacks themselves rather than spread across many unrelated life domains, and the avoidance is just beginning rather than pervasive across situations.",
      "session2": "Psychoeducation reframes panic as a false alarm of the fight-or-flight system, and Miguel's posture relaxes as he says, \"So my body's just sounding an alarm with no real fire.\" He learns interoceptive exposure to feared bodily sensations, drops safety behaviors like gripping the wheel, and practices remaining in situations until anxiety subsides, beginning gradually to drive alone again. His catastrophic misinterpretation of bodily cues decreases as he tests his feared predictions."
    },
    "diagnosticRationale": "Recurrent unexpected panic attacks with a month or more of persistent worry about additional attacks and maladaptive behavioral change meet criteria for panic disorder. The attacks are not bound to social evaluation as in social anxiety, not cued by a single phobic object as in specific phobia, and the worry is centered on panic rather than diffuse across domains as in GAD. Avoidance is early and not yet the pervasive multi-situation pattern defining agoraphobia.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Panic Disorder: recurrent unexpected panic attacks plus \u22651 month of worry or behavior change"
      },
      {
        "id": "R2",
        "source": "Barlow PCT",
        "detail": "Interoceptive exposure and dropping safety behaviors in panic control treatment"
      },
      {
        "id": "R3",
        "source": "APA CPG",
        "detail": "Cognitive behavioral therapy as first-line for panic disorder"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which feature best distinguishes panic disorder from social anxiety disorder here?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "His attacks are unexpected and not bound to fear of social scrutiny",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Panic disorder features uncued attacks; social anxiety is evaluation-cued.",
            "explanation": {
              "approach": "Cue analysis",
              "rationale": "Unexpected vs socially cued",
              "keyIndicators": [
                "unexpected attacks",
                "no social cue"
              ],
              "commonMistake": "Assuming all anxiety is social"
            }
          },
          {
            "id": "b",
            "text": "His attacks occur only when he is being directly observed or judged by other people in clearly public settings",
            "isCorrect": false,
            "weight": -2,
            "rationale": "That describes social anxiety, which he denies.",
            "explanation": {
              "approach": "Wrong profile",
              "rationale": "Not socially cued",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Forcing a social-anxiety frame"
            }
          },
          {
            "id": "c",
            "text": "His fear is triggered exclusively by one specific feared object or animal that he reliably encounters at his work",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That suggests specific phobia.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Not object-specific",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Importing phobia features"
            }
          },
          {
            "id": "d",
            "text": "His anxiety is spread evenly across finances, health, family, and work without any clear discrete panic episodes",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That describes GAD, not panic disorder.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Not diffuse worry",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Confusing with GAD"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "intake",
        "question": "He had a normal cardiac workup. How should this inform assessment?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Use the negative workup to support reframing the attacks as non-dangerous panic",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Medical rule-out enables a panic reframe.",
            "explanation": {
              "approach": "Medical context",
              "rationale": "Supports the panic formulation",
              "keyIndicators": [
                "rule-out",
                "reframe"
              ],
              "commonMistake": "Continuing to fear a missed cardiac cause"
            }
          },
          {
            "id": "b",
            "text": "Recommend that he pursue several additional cardiology opinions until a hidden heart abnormality is finally found",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reinforces health anxiety and over-testing.",
            "explanation": {
              "approach": "Over-testing",
              "rationale": "Feeds reassurance-seeking",
              "keyIndicators": [
                "over-investigation"
              ],
              "commonMistake": "Endorsing endless workups"
            }
          },
          {
            "id": "c",
            "text": "Conclude that because his heart is healthy his frightening symptoms must be entirely imagined and not really real",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismissive; panic symptoms are real.",
            "explanation": {
              "approach": "Dismissal",
              "rationale": "Invalidates the experience",
              "keyIndicators": [
                "dismissal"
              ],
              "commonMistake": "Telling him it is imaginary"
            }
          },
          {
            "id": "d",
            "text": "Advise him to avoid all physical exertion permanently so that his heart rate never rises and triggers another attack",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Promotes avoidance and deconditioning.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "Reinforces fear of arousal",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Prescribing exertion avoidance"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "What is a core component of panic-focused CBT?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Interoceptive exposure to feared bodily sensations while dropping safety behaviors",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Interoceptive exposure targets the fear of sensations.",
            "explanation": {
              "approach": "Interoceptive exposure",
              "rationale": "Disconfirms catastrophic beliefs",
              "keyIndicators": [
                "exposure",
                "safety behaviors"
              ],
              "commonMistake": "Avoiding the feared sensations"
            }
          },
          {
            "id": "b",
            "text": "Teaching him to carry and rely on numerous safety objects so he always feels protected during any future attack",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Safety behaviors maintain panic.",
            "explanation": {
              "approach": "Safety behaviors",
              "rationale": "Prevent disconfirmation",
              "keyIndicators": [
                "safety crutch"
              ],
              "commonMistake": "Reinforcing safety behaviors"
            }
          },
          {
            "id": "c",
            "text": "Instructing him to immediately leave any situation the instant he notices the very first physical sign of anxiety",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Escape reinforces the panic cycle.",
            "explanation": {
              "approach": "Escape pattern",
              "rationale": "Strengthens avoidance",
              "keyIndicators": [
                "escape"
              ],
              "commonMistake": "Encouraging escape"
            }
          },
          {
            "id": "d",
            "text": "Focusing entirely on relaxation breathing used specifically to suppress and eliminate every uncomfortable sensation",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Using breathing to avoid sensations becomes a safety behavior.",
            "explanation": {
              "approach": "Misused relaxation",
              "rationale": "Becomes avoidance",
              "keyIndicators": [
                "safety behavior"
              ],
              "commonMistake": "Turning coping into avoidance"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "He fears another attack means he is going crazy. Best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Provide psychoeducation that panic is a harmless false alarm of the body\u2019s alarm system",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Reframing panic reduces catastrophic appraisal.",
            "explanation": {
              "approach": "Psychoeducation",
              "rationale": "Corrects the misappraisal",
              "keyIndicators": [
                "false alarm",
                "psychoeducation"
              ],
              "commonMistake": "Leaving the catastrophic belief intact"
            }
          },
          {
            "id": "b",
            "text": "Agree that frequent panic attacks like his often do progress over time into a serious and lasting mental illness",
            "isCorrect": false,
            "weight": -2,
            "rationale": "False and frightening.",
            "explanation": {
              "approach": "Misinformation",
              "rationale": "Increases fear",
              "keyIndicators": [
                "catastrophizing"
              ],
              "commonMistake": "Confirming the feared belief"
            }
          },
          {
            "id": "c",
            "text": "Suggest that he simply try his best to never think about the attacks at all so that they will eventually disappear",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Thought suppression backfires.",
            "explanation": {
              "approach": "Suppression",
              "rationale": "Paradoxically increases focus",
              "keyIndicators": [
                "suppression"
              ],
              "commonMistake": "Recommending thought suppression"
            }
          },
          {
            "id": "d",
            "text": "Tell him that as long as he avoids stressful situations completely he will be guaranteed to never panic ever again",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Promotes avoidance and false certainty.",
            "explanation": {
              "approach": "Avoidance promise",
              "rationale": "Reinforces avoidance",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Promising safety through avoidance"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "He is starting to avoid driving alone. What is the priority?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Use graded exposure to prevent the avoidance from generalizing into agoraphobia",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Early exposure stops avoidance from spreading.",
            "explanation": {
              "approach": "Graded exposure",
              "rationale": "Blocks avoidance escalation",
              "keyIndicators": [
                "exposure",
                "prevention"
              ],
              "commonMistake": "Allowing avoidance to expand"
            }
          },
          {
            "id": "b",
            "text": "Support his decision to stop driving alone for now and arrange for others to drive him everywhere he needs to go",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Accommodating avoidance worsens it.",
            "explanation": {
              "approach": "Accommodation",
              "rationale": "Entrenches avoidance",
              "keyIndicators": [
                "accommodation"
              ],
              "commonMistake": "Reinforcing the avoidance"
            }
          },
          {
            "id": "c",
            "text": "Wait passively until his panic attacks have fully stopped on their own before introducing any driving exposure work",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Delays the key intervention.",
            "explanation": {
              "approach": "Delaying",
              "rationale": "Avoidance consolidates",
              "keyIndicators": [
                "delay"
              ],
              "commonMistake": "Postponing exposure"
            }
          },
          {
            "id": "d",
            "text": "Recommend he change careers to a job that never requires driving so that he can permanently sidestep the trigger",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reinforces avoidance at great cost.",
            "explanation": {
              "approach": "Life avoidance",
              "rationale": "Costly accommodation",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Reshaping life around fear"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G087",
    "title": "Echoes of the Convoy",
    "category": "Trauma",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Posttraumatic Stress Disorder",
      "code": "F43.10"
    },
    "diagnosis": {
      "name": "Posttraumatic Stress Disorder",
      "code": "F43.10"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Posttraumatic Stress Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Acute Stress Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Adjustment Disorder, with Mixed Anxiety and Depressed Mood",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Major Depressive Disorder, Single Episode",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Marcus, a 41-year-old veteran, presents eight months after a roadside explosion during deployment that killed a fellow soldier; he sits rigidly facing the door, scanning the room, his jaw tight and his startle visible when a chair scrapes outside. He reports intrusive memories, nightmares, and flashbacks, intense reactions to loud noises and traffic, and avoidance of driving and crowds. He feels emotionally numb, detached from his family, irritable, and hypervigilant, and his voice flattens as he says, \"I keep asking myself why I walked away and Davis didn't.\" He sleeps poorly, startles easily, and says he has not felt like himself since coming home.",
      "session1": "Marcus endorses exposure to a life-threatening event, recurrent intrusions, persistent avoidance of reminders, negative alterations in mood and cognition including detachment and guilt, and marked hyperarousal, all lasting more than one month with significant impairment; he speaks haltingly, clenching his fists when describing the convoy. The symptoms have persisted well beyond the first month after the trauma rather than resolving, and they are clearly anchored to the traumatic event rather than to a general life stressor.",
      "session2": "Building safety and trust, the counselor introduces psychoeducation about trauma responses and grounding skills for hyperarousal; Marcus's shoulders ease and he holds eye contact longer, remarking, \"I didn't know my brain was stuck in that day on purpose.\" They plan trauma-focused work, pacing exposure to memories and reminders as tolerance grows, and survivor guilt and avoidance are addressed gradually. He begins reconnecting with his family as numbing eases and he practices staying present during triggers."
    },
    "diagnosticRationale": "Exposure to a life-threatening event followed by intrusions, avoidance, negative cognitions and mood, and hyperarousal persisting more than one month with impairment meets criteria for PTSD. Persistence beyond one month rules out acute stress disorder, the clear traumatic anchor and symptom profile exceed an adjustment disorder, and the breadth of intrusion, avoidance, and arousal symptoms distinguishes it from a primary depressive episode.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "PTSD: trauma exposure with intrusion, avoidance, negative cognition/mood, arousal >1 month"
      },
      {
        "id": "R2",
        "source": "VA/DoD CPG",
        "detail": "Trauma-focused psychotherapy as first-line treatment for PTSD"
      },
      {
        "id": "R3",
        "source": "SAMHSA TIP 35",
        "detail": "Building safety, trust, and readiness before trauma processing"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which feature distinguishes PTSD from acute stress disorder here?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "His symptoms have persisted for more than one month after the trauma",
            "isCorrect": true,
            "weight": 3,
            "rationale": "ASD is diagnosed within the first month; PTSD beyond.",
            "explanation": {
              "approach": "Duration analysis",
              "rationale": "Timeframe separates the two",
              "keyIndicators": [
                "duration",
                "one month"
              ],
              "commonMistake": "Confusing ASD and PTSD by timing"
            }
          },
          {
            "id": "b",
            "text": "His distressing symptoms began and fully resolved entirely within just the first three days after the explosion",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Contradicts the chronic course described.",
            "explanation": {
              "approach": "Wrong course",
              "rationale": "Misreads the timeline",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Inventing a rapid resolution"
            }
          },
          {
            "id": "c",
            "text": "His symptoms are a mild and clearly proportionate reaction to an ordinary, non-life-threatening everyday life stressor",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That describes adjustment disorder, not PTSD.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Trauma criterion met",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Downgrading the stressor"
            }
          },
          {
            "id": "d",
            "text": "His presentation consists only of low mood and anhedonia without any intrusions, avoidance, or hyperarousal symptoms",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That suggests depression, not PTSD.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Trauma cluster present",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Reducing PTSD to depression"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "core",
        "question": "What should the counselor prioritize in early sessions?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Establish safety, trust, and grounding skills before processing the trauma",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Stabilization precedes trauma processing.",
            "explanation": {
              "approach": "Phase-based care",
              "rationale": "Safety before processing",
              "keyIndicators": [
                "safety",
                "stabilization"
              ],
              "commonMistake": "Rushing into trauma exposure"
            }
          },
          {
            "id": "b",
            "text": "Immediately have him recount every graphic detail of the explosion in full during the very first intake session",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Premature exposure can retraumatize.",
            "explanation": {
              "approach": "Premature exposure",
              "rationale": "Destabilizing",
              "keyIndicators": [
                "flooding"
              ],
              "commonMistake": "Forcing early disclosure"
            }
          },
          {
            "id": "c",
            "text": "Focus exclusively on his current marital communication problems and defer any discussion of the trauma indefinitely",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoids the central clinical issue.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "Sidesteps the trauma",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Neglecting the core problem"
            }
          },
          {
            "id": "d",
            "text": "Encourage him to suppress and push away all intrusive memories so that they stop interrupting his daily routine",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Suppression worsens intrusions.",
            "explanation": {
              "approach": "Suppression",
              "rationale": "Increases intrusions",
              "keyIndicators": [
                "suppression"
              ],
              "commonMistake": "Recommending suppression"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "What is the recommended first-line treatment for PTSD?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Trauma-focused psychotherapy such as prolonged exposure or cognitive processing therapy",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Trauma-focused therapies are first-line.",
            "explanation": {
              "approach": "Trauma-focused therapy",
              "rationale": "Strongest evidence base",
              "keyIndicators": [
                "CPT/PE",
                "first-line"
              ],
              "commonMistake": "Defaulting to non-trauma approaches"
            }
          },
          {
            "id": "b",
            "text": "Indefinite supportive counseling that carefully avoids any direct discussion of the traumatic event itself entirely",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoidant supportive therapy is not first-line.",
            "explanation": {
              "approach": "Avoidant support",
              "rationale": "Misses active ingredient",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Relying on avoidance-based support"
            }
          },
          {
            "id": "c",
            "text": "Long-term benzodiazepine prescription as the central and primary treatment to suppress all of his anxiety symptoms",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Benzodiazepines are not recommended for PTSD.",
            "explanation": {
              "approach": "Inappropriate medication",
              "rationale": "Not indicated",
              "keyIndicators": [
                "over-medicating"
              ],
              "commonMistake": "Leading with benzodiazepines"
            }
          },
          {
            "id": "d",
            "text": "A single brief stress-management workshop on relaxation techniques expected to fully resolve his chronic symptoms",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Insufficient for established PTSD.",
            "explanation": {
              "approach": "Undertreatment",
              "rationale": "Too low intensity",
              "keyIndicators": [
                "undertreatment"
              ],
              "commonMistake": "Underdosing the intervention"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "He expresses guilt that he survived. What is the best response?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Validate his survivor guilt and explore it gently within a trauma framework",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Survivor guilt warrants empathic, paced exploration.",
            "explanation": {
              "approach": "Validate and explore",
              "rationale": "Addresses moral injury",
              "keyIndicators": [
                "validation",
                "survivor guilt"
              ],
              "commonMistake": "Dismissing or arguing the guilt away"
            }
          },
          {
            "id": "b",
            "text": "Quickly reassure him that the death was clearly not his fault and then promptly move on to a different topic entirely",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature reassurance shuts down processing.",
            "explanation": {
              "approach": "Premature reassurance",
              "rationale": "Closes exploration",
              "keyIndicators": [
                "reassurance"
              ],
              "commonMistake": "Rushing past the guilt"
            }
          },
          {
            "id": "c",
            "text": "Tell him that dwelling at all on the soldier who died is unhealthy and that he should focus only on the future now",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Invalidating and avoidant.",
            "explanation": {
              "approach": "Dismissal",
              "rationale": "Suppresses grief",
              "keyIndicators": [
                "dismissal"
              ],
              "commonMistake": "Forbidding the grief"
            }
          },
          {
            "id": "d",
            "text": "Interpret his guilt as a sign that he secretly wished harm upon his fellow soldier before the explosion occurred",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Harmful, unfounded interpretation.",
            "explanation": {
              "approach": "Harmful interpretation",
              "rationale": "Baseless and damaging",
              "keyIndicators": [
                "speculation"
              ],
              "commonMistake": "Imposing a destructive meaning"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "He becomes triggered by traffic noise during a session. Best in-session response?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Use grounding techniques to help him reorient to the present and the safe room",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Grounding manages acute hyperarousal.",
            "explanation": {
              "approach": "Grounding",
              "rationale": "Reduces dissociative arousal",
              "keyIndicators": [
                "grounding",
                "present focus"
              ],
              "commonMistake": "Pushing through without stabilizing"
            }
          },
          {
            "id": "b",
            "text": "Direct him to keep talking through the full traumatic memory right now while the intense distress is at its peak",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Pushing through peak distress can retraumatize.",
            "explanation": {
              "approach": "Flooding",
              "rationale": "Overwhelms the client",
              "keyIndicators": [
                "flooding"
              ],
              "commonMistake": "Forcing processing at peak arousal"
            }
          },
          {
            "id": "c",
            "text": "End the session right away and send him home alone to recover by himself until he feels completely calm again later",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Abandons him in a triggered state.",
            "explanation": {
              "approach": "Premature ending",
              "rationale": "Leaves him dysregulated",
              "keyIndicators": [
                "abandonment"
              ],
              "commonMistake": "Discharging a triggered client"
            }
          },
          {
            "id": "d",
            "text": "Tell him the noise is harmless and that he is simply overreacting and needs to learn to ignore such ordinary sounds",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Invalidating and unhelpful.",
            "explanation": {
              "approach": "Invalidation",
              "rationale": "Dismisses the trigger",
              "keyIndicators": [
                "dismissal"
              ],
              "commonMistake": "Minimizing the trauma response"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G088",
    "title": "One More Drink to Take the Edge Off",
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
        "id": "d1",
        "name": "Alcohol Use Disorder, Moderate",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Alcohol Use Disorder, Severe",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Major Depressive Disorder, Single Episode",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "David, a 45-year-old accountant, comes in at his wife's urging, concerned about his drinking; he is neatly dressed but guarded, arms folded, with a tight half-smile and minimal eye contact. Over the past year he has been drinking more than he intends, failed several times to cut back, and needs more alcohol to get the same effect. He drinks to unwind after work, has missed two deadlines after heavy nights, and continues despite arguments at home, saying with a dismissive shrug, \"It's really not as bad as she's making it out to be.\" He spends time recovering from hangovers, minimizes the problem, but admits he feels uneasy about it.",
      "session1": "David endorses about five of the eleven criteria: impaired control, craving, tolerance, use despite social problems, and continued use despite knowing it causes trouble; his tone is defensive at first, then quieter as he concedes, \"Maybe I have noticed it takes more to get there lately.\" He denies withdrawal symptoms such as tremor or seizures and has not given up major activities entirely. His drinking is not solely a way to manage a primary mood or anxiety disorder; rather, it has taken on a life of its own with mounting consequences.",
      "session2": "Using a motivational stance, the counselor reflects David's ambivalence, explores the discrepancy between his values and his drinking, and avoids arguing; he leans forward and speaks more openly, his guardedness softening. He moves from precontemplation toward contemplation, voicing his own reasons to change. They discuss reducing harm and building support, and he agrees to track his drinking and to consider his goals without feeling judged or pushed."
    },
    "diagnosticRationale": "Meeting roughly four to five of the eleven criteria within a twelve-month period, including impaired control, tolerance, craving, and continued use despite social and occupational problems, indicates a moderate alcohol use disorder. The criterion count places it as moderate rather than severe, and the disorder is primary rather than secondary to a mood or anxiety condition, which are not the driving diagnoses here.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Alcohol Use Disorder: criterion count of 4\u20135 indicates moderate severity over 12 months"
      },
      {
        "id": "R2",
        "source": "Miller & Rollnick (MI)",
        "detail": "Rolling with resistance and developing discrepancy rather than confronting"
      },
      {
        "id": "R3",
        "source": "Transtheoretical Model",
        "detail": "Stages of change guiding stage-matched intervention"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "How is the moderate severity specifier determined?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "By counting four to five of the eleven criteria met within twelve months",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Severity is set by criterion count.",
            "explanation": {
              "approach": "Criterion count",
              "rationale": "Severity follows the count",
              "keyIndicators": [
                "criterion count",
                "severity"
              ],
              "commonMistake": "Judging severity by gut impression"
            }
          },
          {
            "id": "b",
            "text": "By measuring the exact number of standard alcoholic drinks he consumes on each and every single drinking occasion",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Quantity alone does not set severity.",
            "explanation": {
              "approach": "Wrong metric",
              "rationale": "Not quantity-based",
              "keyIndicators": [
                "misapplication"
              ],
              "commonMistake": "Using volume instead of criteria"
            }
          },
          {
            "id": "c",
            "text": "By determining whether his spouse and his employer personally consider his current drinking to be a serious problem",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Others\u2019 opinions do not define the specifier.",
            "explanation": {
              "approach": "Wrong basis",
              "rationale": "Not based on others\u2019 views",
              "keyIndicators": [
                "misframe"
              ],
              "commonMistake": "Outsourcing the diagnosis"
            }
          },
          {
            "id": "d",
            "text": "By confirming the presence of physical withdrawal seizures, which alone automatically classify the disorder as severe",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Withdrawal is one criterion, not the whole specifier.",
            "explanation": {
              "approach": "Single-criterion error",
              "rationale": "Overweights one sign",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Equating one symptom with severity"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "He minimizes the problem. What is the best motivational response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Reflect his ambivalence and develop discrepancy without arguing",
            "isCorrect": true,
            "weight": 3,
            "rationale": "MI rolls with resistance rather than confronting.",
            "explanation": {
              "approach": "Roll with resistance",
              "rationale": "Avoids the confrontation trap",
              "keyIndicators": [
                "reflection",
                "discrepancy"
              ],
              "commonMistake": "Arguing the client into change"
            }
          },
          {
            "id": "b",
            "text": "Confront him directly with a detailed list of all the serious consequences his drinking has clearly already caused",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Confrontation increases resistance.",
            "explanation": {
              "approach": "Confrontation",
              "rationale": "Hardens defenses",
              "keyIndicators": [
                "confrontation"
              ],
              "commonMistake": "Pushing against ambivalence"
            }
          },
          {
            "id": "c",
            "text": "Warn him sternly that if he refuses to quit drinking completely today his wife will almost certainly leave him soon",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Coercive scare tactics backfire.",
            "explanation": {
              "approach": "Scare tactic",
              "rationale": "Coercive and counterproductive",
              "keyIndicators": [
                "coercion"
              ],
              "commonMistake": "Threatening the client"
            }
          },
          {
            "id": "d",
            "text": "Agree with his view that his drinking is probably not really a problem and reassure him there is nothing to address",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Colludes with minimization.",
            "explanation": {
              "approach": "Collusion",
              "rationale": "Reinforces denial",
              "keyIndicators": [
                "collusion"
              ],
              "commonMistake": "Validating the minimization"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "He is in precontemplation. What is a stage-matched intervention?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Raise awareness and explore ambivalence rather than pushing an action plan",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Precontemplation calls for consciousness-raising.",
            "explanation": {
              "approach": "Stage matching",
              "rationale": "Fits the change stage",
              "keyIndicators": [
                "precontemplation",
                "awareness"
              ],
              "commonMistake": "Forcing action prematurely"
            }
          },
          {
            "id": "b",
            "text": "Hand him a detailed structured relapse-prevention plan with daily homework and require him to begin it immediately",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Action tools mismatch precontemplation.",
            "explanation": {
              "approach": "Mismatch",
              "rationale": "Too advanced for the stage",
              "keyIndicators": [
                "mis-stage"
              ],
              "commonMistake": "Skipping ahead of readiness"
            }
          },
          {
            "id": "c",
            "text": "Insist that he commit right now to lifelong total abstinence before he is permitted to continue any further sessions",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Coercive and stage-mismatched.",
            "explanation": {
              "approach": "Coercion",
              "rationale": "Ignores readiness",
              "keyIndicators": [
                "coercion"
              ],
              "commonMistake": "Demanding commitment"
            }
          },
          {
            "id": "d",
            "text": "Tell him that since he is not yet ready to change there is really no point in continuing counseling with him at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Disengaging abandons the client.",
            "explanation": {
              "approach": "Disengagement",
              "rationale": "Drops the client",
              "keyIndicators": [
                "withdrawal"
              ],
              "commonMistake": "Giving up too early"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "intake",
        "question": "Which finding best distinguishes this from a primary anxiety disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "His drinking has independent consequences and criteria, not just relief of anxiety",
            "isCorrect": true,
            "weight": 3,
            "rationale": "AUD stands on its own criteria beyond self-medication.",
            "explanation": {
              "approach": "Primary vs secondary",
              "rationale": "Disorder is independent",
              "keyIndicators": [
                "criteria met",
                "independent"
              ],
              "commonMistake": "Reducing AUD to self-medication"
            }
          },
          {
            "id": "b",
            "text": "He reports persistent uncontrollable worry across many life domains that long predates any of his current drinking",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That points to GAD, which he denies.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "GAD pattern absent",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Importing GAD features"
            }
          },
          {
            "id": "c",
            "text": "His only symptom is a calm and relaxed feeling that appears reliably after he drinks and never causes any problems",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ignores the documented consequences.",
            "explanation": {
              "approach": "Wrong profile",
              "rationale": "Consequences are present",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Erasing the harms"
            }
          },
          {
            "id": "d",
            "text": "He experiences daily panic attacks with chest pain and dizziness that occur completely independently of his drinking",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That suggests panic disorder, not present here.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "No panic disorder",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Adding panic features"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "counseling",
        "question": "He says he wants to cut down but not quit entirely. Best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Explore his own goals collaboratively and discuss harm reduction options",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Honoring client-defined goals supports engagement.",
            "explanation": {
              "approach": "Client-centered goals",
              "rationale": "Respects autonomy",
              "keyIndicators": [
                "autonomy",
                "harm reduction"
              ],
              "commonMistake": "Insisting on one fixed goal"
            }
          },
          {
            "id": "b",
            "text": "Tell him firmly that moderation never works for anyone and that complete abstinence is the only acceptable option here",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Rigid and alliance-damaging.",
            "explanation": {
              "approach": "Rigidity",
              "rationale": "Removes autonomy",
              "keyIndicators": [
                "rigidity"
              ],
              "commonMistake": "Imposing a single goal"
            }
          },
          {
            "id": "c",
            "text": "Agree to whatever he says without any further exploration and end the session early since the matter seems fully settled",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Skips meaningful exploration.",
            "explanation": {
              "approach": "Under-engagement",
              "rationale": "Misses the work",
              "keyIndicators": [
                "passivity"
              ],
              "commonMistake": "Failing to explore goals"
            }
          },
          {
            "id": "d",
            "text": "Warn him that wanting to merely cut down rather than quit clearly proves he is still in deep and total denial about it",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Labeling increases resistance.",
            "explanation": {
              "approach": "Labeling",
              "rationale": "Provokes defensiveness",
              "keyIndicators": [
                "labeling"
              ],
              "commonMistake": "Pathologizing the goal"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G089",
    "title": "Three Days Without Sleep",
    "category": "Bipolar",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Bipolar I Disorder, Current Episode Manic",
      "code": "F31.13"
    },
    "diagnosis": {
      "name": "Bipolar I Disorder, Current Episode Manic",
      "code": "F31.13"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Bipolar I Disorder, Current Episode Manic",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Bipolar II Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Major Depressive Disorder, Single Episode",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Stimulant Intoxication",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Ethan, a 27-year-old startup founder, is brought in by his sister, who is alarmed by a week of dramatic change; he paces the office, gesturing expansively, dressed in mismatched bright clothing and unable to stay seated. He has barely slept for three days yet feels boundless energy, talks rapidly and is hard to interrupt, and has launched four new ventures overnight, declaring loudly, \"I'm going to completely rewrite this entire industry by next month.\" He maxed out a credit card on equipment, believes he is destined to revolutionize his field, and is irritable when questioned; his thoughts race and he jumps between topics. He sees nothing wrong and resents being brought in.",
      "session1": "Ethan shows elevated and expansive mood with marked irritability for over a week, decreased need for sleep, grandiosity, pressured speech, flight of ideas, distractibility, and excessive involvement in risky financial activities; his speech is so rapid the clinician struggles to redirect, and he snaps, \"Why does everyone want to slow me down?\" The disturbance is severe enough to impair functioning and has caused conflict at work. The sister reports a past episode of deep depression two years ago, and he denies recent stimulant or other drug use, with a negative screen.",
      "session2": "Collateral confirms a clear manic episode with functional impairment, not a milder hypomania; Ethan remains restless and tangential, his volume high. Safety, risk of harm from impulsive decisions, and need for a higher level of care are assessed. The counselor coordinates urgent psychiatric evaluation, addresses the financial risk, and engages the family. Psychoeducation about the illness and the importance of sleep and routine is introduced once he is stabilized."
    },
    "diagnosticRationale": "A distinct period of elevated, expansive, and irritable mood lasting at least one week with decreased need for sleep, grandiosity, pressured speech, flight of ideas, distractibility, and high-risk activity, causing marked impairment, defines a manic episode and Bipolar I disorder. The severity and impairment exceed hypomania, ruling out bipolar II; the prior depressive episode and current mania rule out unipolar depression; and a negative substance screen rules out stimulant intoxication.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Manic episode: \u22651 week of elevated/irritable mood with three+ B-criteria and marked impairment"
      },
      {
        "id": "R2",
        "source": "IPSRT",
        "detail": "Stabilizing social rhythms and sleep to manage bipolar disorder"
      },
      {
        "id": "R3",
        "source": "APA CPG",
        "detail": "Urgent psychiatric referral and safety assessment in acute mania"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which feature distinguishes this manic episode from hypomania?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "The marked functional impairment and one-week duration of his elevated mood",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Mania requires impairment and a week; hypomania does not.",
            "explanation": {
              "approach": "Severity and duration",
              "rationale": "Impairment defines mania",
              "keyIndicators": [
                "impairment",
                "one week"
              ],
              "commonMistake": "Mistaking severe mania for hypomania"
            }
          },
          {
            "id": "b",
            "text": "The mere presence of any elevated mood at all, which by itself is always sufficient to confirm a full manic episode",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Elevated mood alone does not distinguish the two.",
            "explanation": {
              "approach": "Oversimplified",
              "rationale": "Ignores impairment threshold",
              "keyIndicators": [
                "misapplication"
              ],
              "commonMistake": "Reducing the distinction to mood"
            }
          },
          {
            "id": "c",
            "text": "His relatively young age of twenty-seven, which strongly indicates the milder bipolar II form of the illness instead",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Age does not determine the episode type.",
            "explanation": {
              "approach": "Base-rate error",
              "rationale": "Age is not a criterion",
              "keyIndicators": [
                "bias"
              ],
              "commonMistake": "Letting age decide the diagnosis"
            }
          },
          {
            "id": "d",
            "text": "The fact that he denies any drug use, which on its own is enough to fully confirm a manic rather than hypomanic state",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Substance status is a rule-out, not the mania/hypomania line.",
            "explanation": {
              "approach": "Wrong basis",
              "rationale": "Confuses differentials",
              "keyIndicators": [
                "misframe"
              ],
              "commonMistake": "Conflating rule-out with severity"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "intake",
        "question": "Why is collateral information especially important here?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "He lacks insight, so family corroboration clarifies severity and duration",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Impaired insight in mania makes collateral essential.",
            "explanation": {
              "approach": "Collateral value",
              "rationale": "Compensates for poor insight",
              "keyIndicators": [
                "insight",
                "corroboration"
              ],
              "commonMistake": "Relying solely on self-report in mania"
            }
          },
          {
            "id": "b",
            "text": "Collateral is needed only so the clinician can later bill the family directly for the additional time that it requires",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Irrelevant and improper rationale.",
            "explanation": {
              "approach": "Improper rationale",
              "rationale": "No clinical basis",
              "keyIndicators": [
                "noise"
              ],
              "commonMistake": "Misstating the purpose"
            }
          },
          {
            "id": "c",
            "text": "Collateral should be gathered mainly so the counselor can decide which specific medication and dose to prescribe today",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Counselors do not prescribe; wrong purpose.",
            "explanation": {
              "approach": "Scope confusion",
              "rationale": "Not a prescribing role",
              "keyIndicators": [
                "scope"
              ],
              "commonMistake": "Overstepping scope"
            }
          },
          {
            "id": "d",
            "text": "Collateral matters here only because the client is young and therefore his own account can simply never be trusted at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Overgeneralizes and is not the reason.",
            "explanation": {
              "approach": "Overgeneralization",
              "rationale": "Wrong justification",
              "keyIndicators": [
                "bias"
              ],
              "commonMistake": "Dismissing all self-report"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "core",
        "question": "What is the most urgent clinical priority?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Assess safety and risk from impulsive behavior and arrange urgent psychiatric evaluation",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Acute mania needs safety assessment and higher-level care.",
            "explanation": {
              "approach": "Safety and referral",
              "rationale": "Mania carries acute risk",
              "keyIndicators": [
                "safety",
                "psychiatric referral"
              ],
              "commonMistake": "Treating acute mania as routine outpatient work"
            }
          },
          {
            "id": "b",
            "text": "Begin long-term weekly insight-oriented psychotherapy this week to explore the early roots of his grandiose self-image",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Inappropriate during acute mania.",
            "explanation": {
              "approach": "Premature depth work",
              "rationale": "Wrong phase of care",
              "keyIndicators": [
                "mistiming"
              ],
              "commonMistake": "Insight work during mania"
            }
          },
          {
            "id": "c",
            "text": "Encourage him to channel his abundant new energy into launching even more ambitious business ventures right away",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reinforces dangerous risk-taking.",
            "explanation": {
              "approach": "Reinforcing risk",
              "rationale": "Amplifies harm",
              "keyIndicators": [
                "risk"
              ],
              "commonMistake": "Fueling manic activity"
            }
          },
          {
            "id": "d",
            "text": "Schedule a routine follow-up in several weeks and simply advise him to try to get a bit more sleep in the meantime",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Undertriages an acute episode.",
            "explanation": {
              "approach": "Undertriage",
              "rationale": "Misses acuity",
              "keyIndicators": [
                "deferral"
              ],
              "commonMistake": "Routinizing an emergency"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Once stabilized, what does IPSRT emphasize for relapse prevention?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Stabilizing daily routines and sleep-wake rhythms to reduce relapse",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Social rhythm regularity protects against episodes.",
            "explanation": {
              "approach": "Rhythm stabilization",
              "rationale": "Regularity prevents relapse",
              "keyIndicators": [
                "social rhythms",
                "sleep"
              ],
              "commonMistake": "Ignoring routine and sleep regularity"
            }
          },
          {
            "id": "b",
            "text": "Deliberately keeping his schedule highly variable and spontaneous so that he never feels boxed in by any daily structure",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Irregularity destabilizes bipolar illness.",
            "explanation": {
              "approach": "Irregularity",
              "rationale": "Triggers episodes",
              "keyIndicators": [
                "instability"
              ],
              "commonMistake": "Promoting chaotic routines"
            }
          },
          {
            "id": "c",
            "text": "Encouraging him to stay up late working whenever inspiration strikes because productivity should always take priority",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Sleep loss precipitates mania.",
            "explanation": {
              "approach": "Sleep disruption",
              "rationale": "Provokes relapse",
              "keyIndicators": [
                "sleep loss"
              ],
              "commonMistake": "Sacrificing sleep for work"
            }
          },
          {
            "id": "d",
            "text": "Focusing the work entirely on confronting and disputing his grandiose beliefs while ignoring his daily rhythm patterns",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Misses the rhythm-based core of IPSRT.",
            "explanation": {
              "approach": "Wrong focus",
              "rationale": "Neglects rhythms",
              "keyIndicators": [
                "mis-emphasis"
              ],
              "commonMistake": "Overlooking routine stabilization"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "He wants to make a large impulsive financial decision. How should the counselor respond?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Express concern, encourage delaying major decisions, and involve supports with consent",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Protecting him from impulsive harm is appropriate.",
            "explanation": {
              "approach": "Protective guidance",
              "rationale": "Reduces impulsive harm",
              "keyIndicators": [
                "delay",
                "supports"
              ],
              "commonMistake": "Standing by during high-risk decisions"
            }
          },
          {
            "id": "b",
            "text": "Encourage him to trust his confident instincts fully and proceed with the major financial decision without any delay",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Endorses harmful impulsivity.",
            "explanation": {
              "approach": "Endorsing risk",
              "rationale": "Amplifies harm",
              "keyIndicators": [
                "risk"
              ],
              "commonMistake": "Cheering on the impulse"
            }
          },
          {
            "id": "c",
            "text": "Take direct control of his bank accounts and personally manage his finances for him until the manic episode resolves",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Far outside the counselor\u2019s role.",
            "explanation": {
              "approach": "Role violation",
              "rationale": "Improper overreach",
              "keyIndicators": [
                "boundary"
              ],
              "commonMistake": "Assuming control of finances"
            }
          },
          {
            "id": "d",
            "text": "Stay completely neutral and silent about the decision, since commenting at all would risk imposing the counselor\u2019s values",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Silence neglects a safety concern.",
            "explanation": {
              "approach": "False neutrality",
              "rationale": "Ignores risk",
              "keyIndicators": [
                "passivity"
              ],
              "commonMistake": "Withholding needed concern"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G090",
    "title": "The Voices Behind the Walls",
    "category": "Psychotic",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Schizophrenia",
      "code": "F20.9"
    },
    "diagnosis": {
      "name": "Schizophrenia",
      "code": "F20.9"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Schizophrenia",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Schizoaffective Disorder, Bipolar Type",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Brief Psychotic Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Schizophreniform Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Daniel, a 23-year-old man, is brought by his parents, who describe an eighteen-month decline; he sits hunched and guarded, with disheveled hair, stained clothing, and a flat, expressionless face, glancing warily toward the corners of the room. He hears voices commenting on his actions, believes neighbors are broadcasting his thoughts, and has withdrawn from college and friends. His speech is at times derailed and hard to follow, and he murmurs, \"They can hear what I'm thinking through the walls.\" He stopped attending classes, neglects hygiene, and shows little emotional expression; he is suspicious during the interview but cooperative. There is no evidence of substance use or a medical cause for the symptoms.",
      "session1": "Daniel endorses persistent auditory hallucinations, delusions of reference and thought broadcasting, disorganized speech, and prominent negative symptoms, continuously for well over six months; his affect is blunted, his eye contact fleeting, and his answers drift off-topic. His parents report the decline has been steady, not episodic. There is no sustained period of a major mood episode running alongside the psychosis, and the duration far exceeds the one- to six-month windows of brief or schizophreniform presentations.",
      "session2": "The counselor focuses on rapport, safety, and engagement, coordinating urgent psychiatric referral for evaluation and medication; Daniel remains guarded but tolerates the conversation, his speech still loosely organized. Psychoeducation is offered to the family, and the counselor avoids directly challenging delusions while maintaining a supportive, reality-grounded stance. The treatment plan emphasizes continuity of care, monitoring, and gradual psychosocial rehabilitation alongside medical treatment."
    },
    "diagnosticRationale": "Two or more active-phase symptoms including hallucinations, delusions, disorganized speech, and negative symptoms, with continuous signs of disturbance for at least six months and marked functional decline, meet criteria for schizophrenia. The absence of a concurrent major mood episode for the majority of the illness rules out schizoaffective disorder, and the duration well beyond six months excludes brief psychotic and schizophreniform disorders.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Schizophrenia: two+ active symptoms with continuous disturbance \u22656 months"
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "Early intervention, engagement, and coordinated care in psychosis"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "A.1 client welfare and appropriate referral for medical evaluation"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which feature distinguishes schizophrenia from schizoaffective disorder here?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "No major mood episode runs alongside his psychosis for most of the illness",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Schizoaffective requires a concurrent mood episode for much of the course.",
            "explanation": {
              "approach": "Mood-psychosis link",
              "rationale": "Absence of concurrent mood episode",
              "keyIndicators": [
                "no mood episode",
                "psychosis"
              ],
              "commonMistake": "Confusing the two diagnoses"
            }
          },
          {
            "id": "b",
            "text": "He experiences continuous and severe manic and depressive mood episodes that fully dominate the entire clinical picture",
            "isCorrect": false,
            "weight": -2,
            "rationale": "That points to schizoaffective, which he lacks.",
            "explanation": {
              "approach": "Wrong profile",
              "rationale": "Mood does not dominate",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Imposing mood features"
            }
          },
          {
            "id": "c",
            "text": "His full set of psychotic symptoms began suddenly and then completely resolved within just under one single month",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That describes brief psychotic disorder.",
            "explanation": {
              "approach": "Wrong duration",
              "rationale": "Course is chronic",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Importing brief-psychosis course"
            }
          },
          {
            "id": "d",
            "text": "His symptoms have lasted somewhere between one and six months and are expected to remit fully within that short window",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That describes schizophreniform, not his course.",
            "explanation": {
              "approach": "Wrong duration",
              "rationale": "Exceeds six months",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Misjudging duration"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "core",
        "question": "He shares a delusion that neighbors broadcast his thoughts. Best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Maintain a supportive stance, neither confirming nor directly arguing the delusion",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Avoiding confrontation preserves the alliance.",
            "explanation": {
              "approach": "Supportive neutrality",
              "rationale": "Neither colludes nor argues",
              "keyIndicators": [
                "alliance",
                "non-confrontation"
              ],
              "commonMistake": "Debating the delusion"
            }
          },
          {
            "id": "b",
            "text": "Firmly and repeatedly insist that the neighbors are obviously not broadcasting anything until he finally admits the truth",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Arguing damages rapport.",
            "explanation": {
              "approach": "Confrontation",
              "rationale": "Erodes trust",
              "keyIndicators": [
                "argument"
              ],
              "commonMistake": "Disputing the delusion"
            }
          },
          {
            "id": "c",
            "text": "Enthusiastically agree that the neighbors really are broadcasting his thoughts so that he feels fully understood and safe",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Colluding reinforces the delusion.",
            "explanation": {
              "approach": "Collusion",
              "rationale": "Reinforces psychosis",
              "keyIndicators": [
                "collusion"
              ],
              "commonMistake": "Validating the delusion"
            }
          },
          {
            "id": "d",
            "text": "Change the subject abruptly every time he mentions the neighbors so that the delusional content is never discussed at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoidant deflection harms engagement.",
            "explanation": {
              "approach": "Deflection",
              "rationale": "Avoids his experience",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Shutting down disclosure"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "What is the most appropriate treatment-planning step?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Coordinate urgent psychiatric referral while maintaining engagement and support",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Medical evaluation plus engagement is essential.",
            "explanation": {
              "approach": "Coordinated referral",
              "rationale": "Links to needed care",
              "keyIndicators": [
                "referral",
                "engagement"
              ],
              "commonMistake": "Attempting to treat psychosis with counseling alone"
            }
          },
          {
            "id": "b",
            "text": "Provide intensive insight-oriented talk therapy as the sole treatment, expecting it to fully resolve the psychotic symptoms",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Counseling alone is insufficient for schizophrenia.",
            "explanation": {
              "approach": "Inadequate plan",
              "rationale": "Misses medical care",
              "keyIndicators": [
                "undertreatment"
              ],
              "commonMistake": "Omitting psychiatric referral"
            }
          },
          {
            "id": "c",
            "text": "Wait several more months without any referral to confirm the diagnosis is truly stable before involving any psychiatrist",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Delays needed evaluation.",
            "explanation": {
              "approach": "Delaying care",
              "rationale": "Postpones care",
              "keyIndicators": [
                "deferral"
              ],
              "commonMistake": "Withholding referral"
            }
          },
          {
            "id": "d",
            "text": "Discharge him from services entirely, explaining that his condition is far too severe for any outpatient counseling support",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Abandons the client.",
            "explanation": {
              "approach": "Abandonment",
              "rationale": "Drops the client",
              "keyIndicators": [
                "abandonment"
              ],
              "commonMistake": "Refusing supportive care"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "His parents feel overwhelmed and confused. What is most helpful?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Offer psychoeducation about psychosis and connect them with family support",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Family psychoeducation improves outcomes.",
            "explanation": {
              "approach": "Family psychoeducation",
              "rationale": "Builds understanding and support",
              "keyIndicators": [
                "psychoeducation",
                "family support"
              ],
              "commonMistake": "Leaving the family without guidance"
            }
          },
          {
            "id": "b",
            "text": "Tell the parents that the illness was most likely caused by specific parenting mistakes they made during his childhood",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Blaming and inaccurate.",
            "explanation": {
              "approach": "Family blame",
              "rationale": "Stigmatizing and false",
              "keyIndicators": [
                "blame"
              ],
              "commonMistake": "Blaming the family"
            }
          },
          {
            "id": "c",
            "text": "Advise the parents to conceal the diagnosis from him indefinitely so that he is never burdened by knowing his condition",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Concealment undermines care and autonomy.",
            "explanation": {
              "approach": "Concealment",
              "rationale": "Harms trust",
              "keyIndicators": [
                "concealment"
              ],
              "commonMistake": "Hiding the diagnosis"
            }
          },
          {
            "id": "d",
            "text": "Reassure the parents firmly that the symptoms will almost certainly disappear completely on their own within a few weeks",
            "isCorrect": false,
            "weight": -1,
            "rationale": "False reassurance about a chronic illness.",
            "explanation": {
              "approach": "False reassurance",
              "rationale": "Misleads the family",
              "keyIndicators": [
                "minimization"
              ],
              "commonMistake": "Minimizing a serious illness"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "intake",
        "question": "What is essential to rule out before confirming the diagnosis?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "A substance-induced or medical cause for the psychotic symptoms",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Medical and substance causes must be excluded.",
            "explanation": {
              "approach": "Medical rule-out",
              "rationale": "Excludes organic causes",
              "keyIndicators": [
                "rule-out",
                "medical"
              ],
              "commonMistake": "Skipping the organic workup"
            }
          },
          {
            "id": "b",
            "text": "Whether he has recently experienced any normal short-lived sadness following an ordinary and expected life disappointment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Irrelevant to ruling out psychosis causes.",
            "explanation": {
              "approach": "Off-target",
              "rationale": "Not a rule-out",
              "keyIndicators": [
                "noise"
              ],
              "commonMistake": "Chasing irrelevant data"
            }
          },
          {
            "id": "c",
            "text": "Whether his beliefs are shared by a few close friends, which would automatically prove that they are not delusional at all",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Misunderstands delusion assessment.",
            "explanation": {
              "approach": "Misconception",
              "rationale": "Faulty reasoning",
              "keyIndicators": [
                "misframe"
              ],
              "commonMistake": "Misapplying the criterion"
            }
          },
          {
            "id": "d",
            "text": "Whether he has any family history of high intelligence, which some assume can fully explain unusual or eccentric thinking",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Irrelevant and unfounded.",
            "explanation": {
              "approach": "Irrelevant factor",
              "rationale": "No diagnostic value",
              "keyIndicators": [
                "noise"
              ],
              "commonMistake": "Using a spurious factor"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G091",
    "title": "The Endless Ritual of Reassurance",
    "category": "OCD-Related",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Obsessive-Compulsive Disorder",
      "code": "F42.2"
    },
    "diagnosis": {
      "name": "Obsessive-Compulsive Disorder",
      "code": "F42.2"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Obsessive-Compulsive Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Obsessive-Compulsive Personality Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Illness Anxiety Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Aisha, a 31-year-old nurse, describes intrusive, unwanted thoughts that she might have contaminated patients or left a door unlocked, causing harm; she sits tensely, her hands visibly chapped and reddened from washing, picking at her cuticles. The thoughts feel senseless to her, yet they trigger intense anxiety, and to neutralize them she washes repeatedly, checks locks dozens of times, and seeks reassurance from coworkers, consuming over three hours daily. She recognizes the rituals are excessive but cannot stop, admitting in a strained voice, \"I know it's irrational, but I can't leave until I've checked again.\" The behaviors are interfering with her shifts and exhausting her.",
      "session1": "Aisha reports recurrent intrusive obsessions experienced as intrusive and unwanted, paired with compulsions performed to reduce distress, occupying more than an hour a day and causing significant impairment; her speech is quick and anxious, and she wrings her hands while describing her checking routines. She has good insight that the thoughts are products of her own mind and that the feared outcomes are unlikely, noting, \"Part of me knows the door is locked, but the doubt just won't let go.\" The worries are tied to specific obsessions with ritualized neutralizing behaviors rather than free-floating worry across many topics.",
      "session2": "The counselor introduces exposure and response prevention, explaining the rationale for facing feared cues without performing rituals; Aisha is apprehensive but cooperative, her breathing steadying as she practices. They build a hierarchy, start with manageable exposures, and target reassurance-seeking as a compulsion to be eliminated. She learns to tolerate uncertainty and distress until it subsides naturally, and over sessions her ritual time decreases as she resists neutralizing and her catastrophic appraisals weaken."
    },
    "diagnosticRationale": "Recurrent intrusive obsessions and repetitive compulsions performed to neutralize distress, consuming more than an hour daily and causing impairment, with good insight, meet criteria for OCD. The presence of true obsessions and ritualized compulsions distinguishes it from GAD's free-floating worry, the ego-dystonic intrusions and rituals distinguish it from the ego-syntonic perfectionism of OCPD, and the broad contamination and checking themes distinguish it from illness anxiety disorder.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "OCD: obsessions and compulsions consuming >1 hour/day with impairment"
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "Exposure and response prevention as first-line for OCD"
      },
      {
        "id": "R3",
        "source": "APA CPG",
        "detail": "Eliminating reassurance-seeking and rituals as part of ERP"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which feature best distinguishes OCD from generalized anxiety disorder here?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Her anxiety is driven by specific intrusive obsessions neutralized by rituals",
            "isCorrect": true,
            "weight": 3,
            "rationale": "OCD pairs obsessions with compulsions, unlike GAD\u2019s diffuse worry.",
            "explanation": {
              "approach": "Obsession-compulsion link",
              "rationale": "Ritualized neutralizing is key",
              "keyIndicators": [
                "obsessions",
                "compulsions"
              ],
              "commonMistake": "Equating OCD with general worry"
            }
          },
          {
            "id": "b",
            "text": "Her worries are spread broadly and evenly across finances, health, work, and family without any ritualized behaviors at all",
            "isCorrect": false,
            "weight": -2,
            "rationale": "That describes GAD, not her presentation.",
            "explanation": {
              "approach": "Wrong profile",
              "rationale": "No rituals in GAD",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Forcing a GAD frame"
            }
          },
          {
            "id": "c",
            "text": "Her perfectionism and orderliness feel entirely comfortable and consistent with her values rather than distressing to her",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That describes ego-syntonic OCPD.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Hers is ego-dystonic",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Confusing OCD with OCPD"
            }
          },
          {
            "id": "d",
            "text": "Her central fear is specifically that she already has a serious undiagnosed disease despite repeated negative medical tests",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That points to illness anxiety disorder.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Not illness anxiety",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Importing health-anxiety features"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "What is the first-line treatment for OCD?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Exposure and response prevention targeting her obsessions and rituals",
            "isCorrect": true,
            "weight": 3,
            "rationale": "ERP is the evidence-based first-line therapy.",
            "explanation": {
              "approach": "ERP therapy",
              "rationale": "Strongest evidence for OCD",
              "keyIndicators": [
                "exposure",
                "response prevention"
              ],
              "commonMistake": "Avoiding exposure-based work"
            }
          },
          {
            "id": "b",
            "text": "Open-ended supportive talk therapy that helps her feel calmer but never directly confronts her feared situations at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Supportive therapy alone is not first-line.",
            "explanation": {
              "approach": "Non-exposure support",
              "rationale": "Misses active ingredient",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Relying on support alone"
            }
          },
          {
            "id": "c",
            "text": "Teaching her additional and more efficient checking and washing routines so the rituals take up far less of her daily time",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Optimizing rituals reinforces OCD.",
            "explanation": {
              "approach": "Ritual reinforcement",
              "rationale": "Strengthens compulsions",
              "keyIndicators": [
                "reinforcement"
              ],
              "commonMistake": "Improving rather than removing rituals"
            }
          },
          {
            "id": "d",
            "text": "Providing thorough and repeated reassurance about each specific feared outcome so that her anxiety is fully relieved each time",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reassurance is itself a compulsion to eliminate.",
            "explanation": {
              "approach": "Reassurance",
              "rationale": "Feeds the cycle",
              "keyIndicators": [
                "reassurance"
              ],
              "commonMistake": "Giving reassurance"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "She constantly seeks reassurance in session. How should the counselor respond?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Identify reassurance-seeking as a compulsion and gently decline to provide it",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Withholding reassurance is part of ERP.",
            "explanation": {
              "approach": "Reassurance as compulsion",
              "rationale": "Refusing to reinforce",
              "keyIndicators": [
                "compulsion",
                "non-reinforcement"
              ],
              "commonMistake": "Repeatedly reassuring the client"
            }
          },
          {
            "id": "b",
            "text": "Provide detailed and thorough reassurance every single time she asks so that the therapeutic alliance is kept strong and warm",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reinforces the compulsion.",
            "explanation": {
              "approach": "Over-reassurance",
              "rationale": "Maintains OCD",
              "keyIndicators": [
                "reassurance"
              ],
              "commonMistake": "Feeding reassurance-seeking"
            }
          },
          {
            "id": "c",
            "text": "Ignore her requests for reassurance entirely and stay silent without ever explaining why you are choosing not to respond",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Withholding without rationale harms alliance.",
            "explanation": {
              "approach": "Unexplained withholding",
              "rationale": "Confuses the client",
              "keyIndicators": [
                "poor framing"
              ],
              "commonMistake": "Withholding without psychoeducation"
            }
          },
          {
            "id": "d",
            "text": "Tell her sternly that continuing to ask for reassurance proves she is simply not trying hard enough to get better at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Shaming undermines treatment.",
            "explanation": {
              "approach": "Shaming client",
              "rationale": "Damages alliance",
              "keyIndicators": [
                "shaming"
              ],
              "commonMistake": "Blaming the client"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "She is anxious about starting exposures. What is the best approach?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Collaboratively build a graded hierarchy and start with manageable exposures",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Graded, collaborative exposure builds tolerance.",
            "explanation": {
              "approach": "Graded hierarchy",
              "rationale": "Paces exposure collaboratively",
              "keyIndicators": [
                "hierarchy",
                "graded"
              ],
              "commonMistake": "Starting with the hardest exposure"
            }
          },
          {
            "id": "b",
            "text": "Begin immediately with her single most terrifying feared situation so that she can prove to herself she can handle anything",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Flooding without pacing risks dropout.",
            "explanation": {
              "approach": "Flooding",
              "rationale": "Overwhelms the client",
              "keyIndicators": [
                "flooding"
              ],
              "commonMistake": "Skipping the hierarchy"
            }
          },
          {
            "id": "c",
            "text": "Postpone any exposure work indefinitely until she reports that she feels completely free of all anxiety about doing it first",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Waiting for zero anxiety prevents treatment.",
            "explanation": {
              "approach": "Endless delay",
              "rationale": "Avoidance maintained",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Waiting for anxiety to vanish"
            }
          },
          {
            "id": "d",
            "text": "Allow her to keep performing a few small rituals during the exposures so that the overall experience feels less distressing",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Permitting rituals undermines response prevention.",
            "explanation": {
              "approach": "Partial rituals",
              "rationale": "Weakens ERP",
              "keyIndicators": [
                "safety behavior"
              ],
              "commonMistake": "Allowing rituals during exposure"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "intake",
        "question": "Her insight that the fears are senseless is intact. What does this indicate?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Good insight, a specifier that supports the OCD diagnosis and prognosis",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Insight level is an OCD specifier.",
            "explanation": {
              "approach": "Insight specifier",
              "rationale": "Documents the insight level",
              "keyIndicators": [
                "good insight",
                "specifier"
              ],
              "commonMistake": "Ignoring the insight specifier"
            }
          },
          {
            "id": "b",
            "text": "That the diagnosis is almost certainly a primary psychotic disorder, since only psychosis produces such fixed strange beliefs",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Good insight argues against psychosis.",
            "explanation": {
              "approach": "Wrong conclusion",
              "rationale": "Misreads insight",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Confusing OCD with psychosis"
            }
          },
          {
            "id": "c",
            "text": "That she does not really meet the threshold for OCD at all because true OCD always involves a complete loss of all insight",
            "isCorrect": false,
            "weight": -1,
            "rationale": "OCD can occur with good insight.",
            "explanation": {
              "approach": "Misconception",
              "rationale": "Insight varies in OCD",
              "keyIndicators": [
                "misframe"
              ],
              "commonMistake": "Requiring absent insight"
            }
          },
          {
            "id": "d",
            "text": "That her presentation is best explained as ordinary everyday conscientiousness rather than any diagnosable clinical disorder",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Ignores the impairment and ritual time.",
            "explanation": {
              "approach": "Minimization",
              "rationale": "Overlooks impairment",
              "keyIndicators": [
                "minimization"
              ],
              "commonMistake": "Normalizing the symptoms"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G092",
    "title": "The Weight of Control",
    "category": "Eating",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Anorexia Nervosa, Restricting Type",
      "code": "F50.01"
    },
    "diagnosis": {
      "name": "Anorexia Nervosa, Restricting Type",
      "code": "F50.01"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Anorexia Nervosa, Restricting Type",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Bulimia Nervosa",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Avoidant/Restrictive Food Intake Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Body Dysmorphic Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Olivia, an 18-year-old dancer, is referred by her physician after significant weight loss and a fainting episode; she appears markedly underweight and pale, wrapped in oversized layers, sitting stiffly with guarded, downcast eyes. She restricts her intake severely, exercises compulsively, and is intensely afraid of gaining weight, seeing herself as too large despite being dangerously thin, with her self-worth dominated by her body shape. Her periods have stopped, and she insists, with a thin, controlled voice, \"I really am fine, everyone is overreacting.\" Her family is frightened by the changes.",
      "session1": "Olivia presents with restriction leading to significantly low body weight, an intense fear of weight gain, and a disturbance in how she experiences her body, with denial of the seriousness of her low weight; her affect is flat and her tone defensive, and she avoids eye contact when weight is mentioned. She does not report recurrent binge eating followed by compensatory purging, and her food avoidance is driven by fear of weight gain and body-image disturbance rather than sensory aversion or lack of interest in eating, as she states, \"Controlling what I eat is the one thing that feels like mine.\"",
      "session2": "Given the medical risk, the counselor coordinates urgent medical monitoring and a team-based approach, prioritizing medical stability and weight restoration alongside psychotherapy; Olivia remains guarded but engages slightly more, her tone less brittle. The counselor builds a nonjudgmental alliance, addresses ambivalence, and avoids power struggles over food. Family involvement and a higher level of care are considered, and the focus stays on safety, medical risk, and engagement rather than on appearance or specifics of intake."
    },
    "diagnosticRationale": "Restriction of energy intake leading to significantly low body weight, intense fear of weight gain, and a disturbance in body image with denial of medical seriousness meet criteria for anorexia nervosa, restricting type. The absence of recurrent binge-purge cycles distinguishes it from bulimia nervosa, the weight-and-shape-driven fear distinguishes it from the non-body-image avoidance of ARFID, and the global body-image disturbance differs from a circumscribed appearance preoccupation in BDD.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Anorexia Nervosa: restriction, low weight, fear of weight gain, body-image disturbance"
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "Medical monitoring and team-based care with weight restoration in anorexia"
      },
      {
        "id": "R3",
        "source": "Miller & Rollnick (MI)",
        "detail": "Engaging ambivalence and avoiding confrontation in low-readiness clients"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which feature distinguishes this from bulimia nervosa?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "She restricts to a low weight without recurrent binge-purge cycles",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Restricting-type anorexia lacks the binge-purge pattern of bulimia.",
            "explanation": {
              "approach": "Behavior pattern",
              "rationale": "Restriction vs binge-purge",
              "keyIndicators": [
                "restriction",
                "low weight"
              ],
              "commonMistake": "Confusing the two eating disorders"
            }
          },
          {
            "id": "b",
            "text": "She reports frequent episodes of eating very large amounts of food followed by deliberate self-induced compensatory purging",
            "isCorrect": false,
            "weight": -2,
            "rationale": "That describes bulimia, which she denies.",
            "explanation": {
              "approach": "Wrong profile",
              "rationale": "No binge-purge cycle",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Imposing bulimia features"
            }
          },
          {
            "id": "c",
            "text": "Her food avoidance stems entirely from a strong sensory aversion to textures with no concern at all about her body weight",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That describes ARFID, not anorexia.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Body-image driven",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Confusing with ARFID"
            }
          },
          {
            "id": "d",
            "text": "Her distress is limited to one specific perceived flaw in a single facial feature unrelated to her overall body weight or shape",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That points to BDD, not anorexia.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Global body image",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Importing BDD features"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "core",
        "question": "What is the most urgent clinical priority given her presentation?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Coordinate urgent medical monitoring and team-based care for her safety",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Medical instability requires immediate attention.",
            "explanation": {
              "approach": "Medical priority",
              "rationale": "Low weight is dangerous",
              "keyIndicators": [
                "medical risk",
                "team care"
              ],
              "commonMistake": "Treating it as routine outpatient therapy"
            }
          },
          {
            "id": "b",
            "text": "Begin long-term weekly insight-oriented psychotherapy alone, expecting it to gradually resolve the restriction over many months",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ignores acute medical danger.",
            "explanation": {
              "approach": "Misprioritization",
              "rationale": "Overlooks medical risk",
              "keyIndicators": [
                "undertriage"
              ],
              "commonMistake": "Deferring medical care"
            }
          },
          {
            "id": "c",
            "text": "Set a strict daily eating schedule and firmly require her to follow it exactly, enforcing consequences if she fails to comply",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Coercive control invites power struggles.",
            "explanation": {
              "approach": "Coercive control",
              "rationale": "Provokes resistance",
              "keyIndicators": [
                "power struggle"
              ],
              "commonMistake": "Battling over food"
            }
          },
          {
            "id": "d",
            "text": "Reassure her family that the weight loss is most likely just a temporary phase that will correct itself without intervention",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dangerously minimizes a medical emergency.",
            "explanation": {
              "approach": "Minimization",
              "rationale": "Underestimates risk",
              "keyIndicators": [
                "minimization"
              ],
              "commonMistake": "Normalizing the danger"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "She is highly resistant and minimizes the problem. Best stance?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Use a nonjudgmental motivational stance and explore her ambivalence",
            "isCorrect": true,
            "weight": 3,
            "rationale": "MI engages low-readiness clients without confrontation.",
            "explanation": {
              "approach": "Motivational stance",
              "rationale": "Rolls with resistance",
              "keyIndicators": [
                "ambivalence",
                "nonjudgmental"
              ],
              "commonMistake": "Confronting her into compliance"
            }
          },
          {
            "id": "b",
            "text": "Confront her directly and repeatedly with the frightening medical facts until she is finally forced to admit she is very ill",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Confrontation increases resistance.",
            "explanation": {
              "approach": "Confrontation",
              "rationale": "Hardens denial",
              "keyIndicators": [
                "confrontation"
              ],
              "commonMistake": "Forcing insight"
            }
          },
          {
            "id": "c",
            "text": "Agree with her view that her weight is actually perfectly fine for now so that she will feel comfortable continuing to attend",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Colludes with denial of a dangerous condition.",
            "explanation": {
              "approach": "Collusion",
              "rationale": "Reinforces denial",
              "keyIndicators": [
                "collusion"
              ],
              "commonMistake": "Validating the minimization"
            }
          },
          {
            "id": "d",
            "text": "Focus the entire session on praising her dedication, discipline, and impressive self-control around her eating and exercise",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reinforces the disorder\u2019s values.",
            "explanation": {
              "approach": "Reinforcing pathology",
              "rationale": "Praises the symptom",
              "keyIndicators": [
                "reinforcement"
              ],
              "commonMistake": "Admiring the restriction"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "In session she wants to discuss her appearance in detail. What is best?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Gently redirect toward feelings and function rather than weight and appearance specifics",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Avoiding appearance focus reduces reinforcement.",
            "explanation": {
              "approach": "Redirect focus",
              "rationale": "Shifts from shape to function",
              "keyIndicators": [
                "function",
                "feelings"
              ],
              "commonMistake": "Engaging in detailed weight talk"
            }
          },
          {
            "id": "b",
            "text": "Discuss her exact target weight and detailed daily food amounts at length so that she feels fully heard and understood here",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Detailed numbers can reinforce the disorder.",
            "explanation": {
              "approach": "Numbers focus",
              "rationale": "Reinforces preoccupation",
              "keyIndicators": [
                "numbers"
              ],
              "commonMistake": "Dwelling on figures"
            }
          },
          {
            "id": "c",
            "text": "Agree with her stated belief that she still appears noticeably overweight and help her plan further changes to her appearance",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Colludes with body-image distortion.",
            "explanation": {
              "approach": "Collusion",
              "rationale": "Validates distortion",
              "keyIndicators": [
                "collusion"
              ],
              "commonMistake": "Endorsing the distortion"
            }
          },
          {
            "id": "d",
            "text": "Tell her firmly that her appearance is completely irrelevant and refuse to let her bring up the topic at any point in sessions",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismissive and alliance-damaging.",
            "explanation": {
              "approach": "Dismissal",
              "rationale": "Shuts down the client",
              "keyIndicators": [
                "dismissal"
              ],
              "commonMistake": "Forbidding the topic"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "When is a higher level of care most clearly indicated?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "When she is medically unstable or unable to restore weight as an outpatient",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Medical instability drives the level-of-care decision.",
            "explanation": {
              "approach": "Level of care",
              "rationale": "Instability warrants escalation",
              "keyIndicators": [
                "medical instability",
                "escalation"
              ],
              "commonMistake": "Keeping an unstable client outpatient"
            }
          },
          {
            "id": "b",
            "text": "Only once she personally feels completely ready and fully motivated to enter a more intensive treatment program on her own",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Readiness does not override medical danger.",
            "explanation": {
              "approach": "Readiness gating",
              "rationale": "Ignores acute risk",
              "keyIndicators": [
                "mis-gating"
              ],
              "commonMistake": "Waiting for motivation"
            }
          },
          {
            "id": "c",
            "text": "Only after she has clearly failed at least five separate full courses of outpatient therapy with several different providers",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Arbitrary threshold ignores acute risk.",
            "explanation": {
              "approach": "Arbitrary threshold",
              "rationale": "Delays needed escalation",
              "keyIndicators": [
                "delay"
              ],
              "commonMistake": "Inventing prerequisites"
            }
          },
          {
            "id": "d",
            "text": "Never, since anorexia should always be managed in outpatient counseling regardless of how dangerously low her weight becomes",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Ignores indications for higher care.",
            "explanation": {
              "approach": "Rigid stance",
              "rationale": "Misses escalation criteria",
              "keyIndicators": [
                "rigidity"
              ],
              "commonMistake": "Refusing to escalate"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G093",
    "title": "Watching Life From Behind Glass",
    "category": "Dissociative",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Depersonalization/Derealization Disorder",
      "code": "F48.1"
    },
    "diagnosis": {
      "name": "Depersonalization/Derealization Disorder",
      "code": "F48.1"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Depersonalization/Derealization Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Panic Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Posttraumatic Stress Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Dissociative Identity Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Hannah, a 26-year-old graduate student, reports persistent feelings of being detached from herself, as if observing her own thoughts and actions from outside her body; she sits very still, her affect distant and her gaze slightly unfocused, speaking in a measured, faintly puzzled tone. The world looks foggy, flat, and dreamlike, and these experiences have occurred most days for over a year, are deeply distressing, and make her fear she is losing her mind, as she says, \"It's like I'm watching my whole life from behind glass.\" Throughout, she knows the experiences are not literally real and remains oriented, with no memory gaps and no separate identities.",
      "session1": "Hannah describes persistent depersonalization and derealization with intact reality testing and significant distress and impairment; her speech is calm but her brow furrows as she searches for words to convey the unreality. The experiences are not confined to discrete panic attacks, and she denies the re-experiencing, avoidance, and hyperarousal cluster that would indicate a trauma disorder as primary, adding, \"I always know it's not real, which somehow makes it scarier.\" She reports no amnesia for personal information and no shifts between distinct identity states, distinguishing this from a dissociative identity presentation.",
      "session2": "The counselor provides psychoeducation normalizing the symptoms as a recognized dissociative response, reducing the fear of going crazy that intensifies the experience; Hannah's face relaxes and her voice steadies as the explanation lands. Grounding techniques, stress reduction, and addressing maintaining factors such as anxious self-monitoring are introduced. As her fear of the symptoms decreases, their intensity lessens, and she practices re-engaging attention with the external present."
    },
    "diagnosticRationale": "Persistent or recurrent depersonalization and derealization with intact reality testing, causing significant distress for more than a brief period and not better explained by another disorder, meet criteria for depersonalization/derealization disorder. The experiences are not confined to panic attacks, lack the full trauma cluster of PTSD, and occur without the amnesia or distinct identity states that define dissociative identity disorder.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Depersonalization/Derealization Disorder: persistent detachment with intact reality testing"
      },
      {
        "id": "R2",
        "source": "Corey (Theory & Practice)",
        "detail": "Psychoeducation and normalization to reduce symptom-related fear"
      },
      {
        "id": "R3",
        "source": "SAMHSA TIP 35",
        "detail": "Grounding and stabilization for dissociative symptoms"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which feature distinguishes this from dissociative identity disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "She has no amnesia and no shifts between distinct separate identity states",
            "isCorrect": true,
            "weight": 3,
            "rationale": "DID requires identity disruption and amnesia, which she lacks.",
            "explanation": {
              "approach": "Identity criterion",
              "rationale": "No identity states or amnesia",
              "keyIndicators": [
                "no amnesia",
                "single identity"
              ],
              "commonMistake": "Confusing detachment with DID"
            }
          },
          {
            "id": "b",
            "text": "She reports recurrent gaps in memory for important events and describes several entirely separate identities taking control",
            "isCorrect": false,
            "weight": -2,
            "rationale": "That describes DID, which she denies.",
            "explanation": {
              "approach": "Wrong profile",
              "rationale": "No identity disruption",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Imposing DID features"
            }
          },
          {
            "id": "c",
            "text": "Her detachment occurs strictly and only during brief discrete panic attacks with pounding heart and a fear of dying",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That suggests panic disorder.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Not panic-bound",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Confusing with panic disorder"
            }
          },
          {
            "id": "d",
            "text": "She shows clear intrusive trauma memories, marked avoidance of reminders, and persistent hypervigilance and exaggerated startle",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That points to PTSD, not present.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "No trauma cluster",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Importing PTSD features"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "She fears she is going crazy. What is the most helpful response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Normalize the symptoms as a recognized dissociative response with intact reality testing",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Psychoeducation reduces the secondary fear that amplifies symptoms.",
            "explanation": {
              "approach": "Normalization",
              "rationale": "Reduces catastrophic fear",
              "keyIndicators": [
                "psychoeducation",
                "reality testing"
              ],
              "commonMistake": "Confirming the fear of going crazy"
            }
          },
          {
            "id": "b",
            "text": "Confirm her worry that these unusual experiences are very likely an early warning sign of an emerging psychotic illness",
            "isCorrect": false,
            "weight": -2,
            "rationale": "False and frightening.",
            "explanation": {
              "approach": "Misinformation",
              "rationale": "Heightens fear",
              "keyIndicators": [
                "catastrophizing"
              ],
              "commonMistake": "Confirming a psychosis fear"
            }
          },
          {
            "id": "c",
            "text": "Tell her to simply try her hardest to ignore the strange feelings completely so that they will eventually fade on their own",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Suppression and dismissal are unhelpful.",
            "explanation": {
              "approach": "Dismissal",
              "rationale": "Invalidates distress",
              "keyIndicators": [
                "dismissal"
              ],
              "commonMistake": "Telling her to ignore it"
            }
          },
          {
            "id": "d",
            "text": "Suggest the sensations are probably caused by an undiagnosed serious neurological brain tumor that requires urgent imaging",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Unfounded and alarming.",
            "explanation": {
              "approach": "Alarmism",
              "rationale": "Baseless escalation",
              "keyIndicators": [
                "catastrophizing"
              ],
              "commonMistake": "Inventing a dire cause"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "Which intervention directly targets the symptom cycle?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Grounding techniques and reducing anxious self-monitoring that maintains the symptoms",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Grounding and lowering self-focus break the maintaining cycle.",
            "explanation": {
              "approach": "Grounding",
              "rationale": "Re-engages the present",
              "keyIndicators": [
                "grounding",
                "self-monitoring"
              ],
              "commonMistake": "Ignoring maintaining factors"
            }
          },
          {
            "id": "b",
            "text": "Encouraging her to monitor and analyze every fleeting detachment sensation closely throughout the entire day to understand it",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Increased self-monitoring worsens symptoms.",
            "explanation": {
              "approach": "Hypervigilance",
              "rationale": "Amplifies the symptom",
              "keyIndicators": [
                "self-focus"
              ],
              "commonMistake": "Increasing symptom monitoring"
            }
          },
          {
            "id": "c",
            "text": "Advising her to withdraw from school and all social activities until the detachment feelings have completely disappeared first",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Avoidance and withdrawal worsen the condition.",
            "explanation": {
              "approach": "Withdrawal",
              "rationale": "Reinforces avoidance",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Prescribing withdrawal"
            }
          },
          {
            "id": "d",
            "text": "Recommending she consume large amounts of caffeine to feel more alert and forcefully snap herself back into full reality",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Caffeine can heighten anxiety and symptoms.",
            "explanation": {
              "approach": "Counterproductive",
              "rationale": "May worsen anxiety",
              "keyIndicators": [
                "stimulant"
              ],
              "commonMistake": "Using caffeine as a fix"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "intake",
        "question": "What should the counselor assess given the symptom onset?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Stressors, substance use, and any trauma history that may contribute",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Identifying precipitants and rule-outs guides care.",
            "explanation": {
              "approach": "Contextual assessment",
              "rationale": "Identifies contributors and rule-outs",
              "keyIndicators": [
                "stressors",
                "rule-out"
              ],
              "commonMistake": "Skipping the contextual assessment"
            }
          },
          {
            "id": "b",
            "text": "Whether her experiences are shared and validated by close friends, which would automatically prove the symptoms are not real",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Misunderstands the assessment goal.",
            "explanation": {
              "approach": "Misconception",
              "rationale": "Faulty reasoning",
              "keyIndicators": [
                "misframe"
              ],
              "commonMistake": "Misapplying validation"
            }
          },
          {
            "id": "c",
            "text": "Whether she has any family history of exceptional creativity, which some assume can fully account for vivid unusual perceptions",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Irrelevant and unfounded.",
            "explanation": {
              "approach": "Irrelevant factor",
              "rationale": "No diagnostic value",
              "keyIndicators": [
                "noise"
              ],
              "commonMistake": "Using a spurious factor"
            }
          },
          {
            "id": "d",
            "text": "Whether she prefers her current graduate program, which is unrelated to evaluating the cause of her dissociative symptoms",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Off-target for the assessment.",
            "explanation": {
              "approach": "Off-target value",
              "rationale": "Not relevant",
              "keyIndicators": [
                "noise"
              ],
              "commonMistake": "Collecting irrelevant detail"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "counseling",
        "question": "She asks whether these symptoms mean permanent damage. Best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Explain that the symptoms are distressing but treatable and not a sign of permanent damage",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Accurate, hopeful psychoeducation supports engagement.",
            "explanation": {
              "approach": "Accurate reassurance",
              "rationale": "Hopeful and truthful",
              "keyIndicators": [
                "treatable",
                "psychoeducation"
              ],
              "commonMistake": "Either alarming or falsely dismissing"
            }
          },
          {
            "id": "b",
            "text": "Tell her honestly that depersonalization symptoms of this kind are generally permanent and that she will need to learn to cope",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Inaccurate and demoralizing.",
            "explanation": {
              "approach": "Hopelessness",
              "rationale": "Discourages treatment",
              "keyIndicators": [
                "nihilism"
              ],
              "commonMistake": "Telling her it is permanent"
            }
          },
          {
            "id": "c",
            "text": "Promise her firmly that the symptoms will completely vanish within just a few days once she begins any form of treatment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Overpromises a rapid cure.",
            "explanation": {
              "approach": "Overpromise",
              "rationale": "Sets up disappointment",
              "keyIndicators": [
                "false reassurance"
              ],
              "commonMistake": "Guaranteeing a fast cure"
            }
          },
          {
            "id": "d",
            "text": "Avoid answering her direct question and quickly change the topic so she does not dwell on her uncertainty about recovery",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoidance fails to address her concern.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "Dodges the question",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Sidestepping a direct concern"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G094",
    "title": "Always on the Edge of Abandonment",
    "category": "Personality",
    "difficulty": "easy",
    "primaryDiagnosis": {
      "name": "Borderline Personality Disorder",
      "code": "F60.3"
    },
    "diagnosis": {
      "name": "Borderline Personality Disorder",
      "code": "F60.3"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Borderline Personality Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Bipolar II Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Histrionic Personality Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Major Depressive Disorder, Single Episode",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Jasmine, a 24-year-old woman, seeks help after a breakup, describing a long-standing pattern of intense, unstable relationships, frantic efforts to avoid abandonment, and rapid shifts between idealizing and devaluing others; her affect swings within the session from tearful to angry, and she gestures sharply as she speaks in a fast, emotionally charged tone. She reports chronic emptiness, identity confusion, impulsive spending and risky behavior, and intense mood swings that last hours, saying, \"One minute someone's everything to me and the next I can't stand them.\" She has a history of self-harm during emotional crises. The pattern has been present since adolescence across many relationships and settings, not just the recent breakup.",
      "session1": "Jasmine endorses five or more borderline features: abandonment fears, unstable relationships, identity disturbance, impulsivity, recurrent self-harm, affective instability reactive to events, chronic emptiness, and intense anger; her emotion shifts visibly as she recounts the breakup, voice rising then breaking. The mood shifts are brief and interpersonally triggered rather than sustained multi-day episodes, and she adds, \"I just feel hollow when I'm alone.\" There is no history of distinct hypomanic episodes with decreased need for sleep, distinguishing this from a bipolar pattern.",
      "session2": "The counselor validates Jasmine's distress, establishes a clear and consistent frame, and introduces emotion-regulation and distress-tolerance skills; she is initially testing and reactive but settles as the steadiness holds. Self-harm is assessed and a safety plan is reviewed. The counselor models steady, nonreactive boundaries to avoid the idealization-devaluation cycle, and focuses on building skills rather than crisis-to-crisis reaction, with validation balanced with change strategies anchoring the work."
    },
    "diagnosticRationale": "A pervasive pattern of unstable relationships, self-image, and affect with marked impulsivity beginning by early adulthood, including abandonment fears, identity disturbance, recurrent self-harm, affective instability, chronic emptiness, and intense anger, meets criteria for borderline personality disorder. The brief, reactive mood shifts distinguish it from the sustained episodes of bipolar II, and the enduring trait pattern distinguishes it from a single depressive episode.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "BPD: pervasive instability of relationships, self-image, affect, and marked impulsivity"
      },
      {
        "id": "R2",
        "source": "C-SSRS",
        "detail": "Assessment of self-harm and suicide risk in personality-disordered clients"
      },
      {
        "id": "R3",
        "source": "Corey (Theory & Practice)",
        "detail": "Consistent boundaries and validation balanced with change"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which feature distinguishes BPD from bipolar II disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Her mood shifts are brief and triggered by interpersonal events, not sustained episodes",
            "isCorrect": true,
            "weight": 3,
            "rationale": "BPD affect is reactive and short; bipolar episodes last days.",
            "explanation": {
              "approach": "Affect pattern",
              "rationale": "Reactive shifts vs episodes",
              "keyIndicators": [
                "reactive mood",
                "brief"
              ],
              "commonMistake": "Confusing mood reactivity with bipolar"
            }
          },
          {
            "id": "b",
            "text": "She has clearly experienced several distinct multi-day hypomanic episodes with a markedly decreased need for sleep recently",
            "isCorrect": false,
            "weight": -2,
            "rationale": "That points to bipolar II, which she denies.",
            "explanation": {
              "approach": "Wrong profile",
              "rationale": "No hypomania",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Imposing bipolar features"
            }
          },
          {
            "id": "c",
            "text": "Her dramatic and attention-seeking emotional expression is the single most central and defining feature of her clinical picture",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That leans toward histrionic, missing the core instability.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Misses BPD core",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Confusing with histrionic PD"
            }
          },
          {
            "id": "d",
            "text": "Her presentation consists solely of a single discrete episode of low mood that began precisely at the time of the recent breakup",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Ignores the lifelong trait pattern.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Pattern is enduring",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Reducing traits to one episode"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "core",
        "question": "She discloses recent self-harm. What is the priority?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Assess self-harm and suicide risk and review a safety plan",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Risk assessment and safety planning come first.",
            "explanation": {
              "approach": "Risk assessment",
              "rationale": "Safety is the priority",
              "keyIndicators": [
                "risk",
                "safety plan"
              ],
              "commonMistake": "Overlooking self-harm risk"
            }
          },
          {
            "id": "b",
            "text": "Interpret the self-harm primarily as a manipulative attempt to gain the counselor\u2019s attention and then move on quickly",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Stigmatizing and dismisses genuine risk.",
            "explanation": {
              "approach": "Stigmatizing",
              "rationale": "Dismisses real risk",
              "keyIndicators": [
                "bias"
              ],
              "commonMistake": "Labeling self-harm as manipulation"
            }
          },
          {
            "id": "c",
            "text": "Avoid discussing the self-harm at all for now so that the client does not feel judged or pressured early in treatment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoiding risk assessment is unsafe.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "Skips safety work",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Ducking the risk topic"
            }
          },
          {
            "id": "d",
            "text": "Immediately arrange involuntary hospitalization based solely on the history of self-harm without any current risk assessment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature without current assessment.",
            "explanation": {
              "approach": "Overreaction",
              "rationale": "Skips assessment",
              "keyIndicators": [
                "overtriage"
              ],
              "commonMistake": "Escalating without assessing"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "She idealizes the counselor in session. What is the best stance?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Maintain consistent, steady boundaries to avoid the idealization-devaluation cycle",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Stable boundaries prevent splitting dynamics.",
            "explanation": {
              "approach": "Consistent frame",
              "rationale": "Steady boundaries reduce splitting",
              "keyIndicators": [
                "boundaries",
                "consistency"
              ],
              "commonMistake": "Being inconsistent or over-gratifying"
            }
          },
          {
            "id": "b",
            "text": "Enthusiastically accept the idealization and offer her special exceptions and extra access to strengthen the budding alliance",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Special treatment feeds the cycle.",
            "explanation": {
              "approach": "Boundary loosening",
              "rationale": "Fuels idealization",
              "keyIndicators": [
                "special treatment"
              ],
              "commonMistake": "Granting exceptions"
            }
          },
          {
            "id": "c",
            "text": "Coldly reject her positive feelings outright and tell her plainly that such admiration has no place at all in any therapy",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Harsh rejection ruptures the alliance.",
            "explanation": {
              "approach": "Harsh rejection",
              "rationale": "Damages rapport",
              "keyIndicators": [
                "coldness"
              ],
              "commonMistake": "Rejecting her feelings"
            }
          },
          {
            "id": "d",
            "text": "Interpret the idealization to her at length as clear proof of a deep underlying narcissistic disturbance she must confront now",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Premature, mislabeling interpretation.",
            "explanation": {
              "approach": "Mislabeling",
              "rationale": "Premature interpretation",
              "keyIndicators": [
                "misframe"
              ],
              "commonMistake": "Over-interpreting prematurely"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Which treatment focus is most appropriate?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Building emotion-regulation and distress-tolerance skills",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Skills-based work targets the core dysregulation.",
            "explanation": {
              "approach": "Skills training",
              "rationale": "Targets dysregulation",
              "keyIndicators": [
                "emotion regulation",
                "distress tolerance"
              ],
              "commonMistake": "Staying in crisis-to-crisis mode"
            }
          },
          {
            "id": "b",
            "text": "Reacting intensively to each successive crisis as it arises without ever building any longer-term coping skills in between them",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Crisis-only work neglects skill-building.",
            "explanation": {
              "approach": "Crisis-only mode",
              "rationale": "No durable change",
              "keyIndicators": [
                "reactivity"
              ],
              "commonMistake": "Living crisis to crisis"
            }
          },
          {
            "id": "c",
            "text": "Focusing the entire treatment exclusively on analyzing her early childhood while ignoring her present coping and safety needs",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Neglects present skills and safety.",
            "explanation": {
              "approach": "Imbalanced focus",
              "rationale": "Ignores the present",
              "keyIndicators": [
                "mis-emphasis"
              ],
              "commonMistake": "Overlooking current needs"
            }
          },
          {
            "id": "d",
            "text": "Discouraging her from ever expressing strong emotions in session so that the therapy can stay calm and orderly throughout",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Suppressing affect is countertherapeutic.",
            "explanation": {
              "approach": "Affect suppression",
              "rationale": "Blocks the work",
              "keyIndicators": [
                "suppression"
              ],
              "commonMistake": "Forbidding emotion"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "counseling",
        "question": "She becomes angry when a session must be rescheduled. Best response?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Validate her feelings while calmly holding the boundary about scheduling",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Validation plus a steady boundary models regulation.",
            "explanation": {
              "approach": "Validate and hold",
              "rationale": "Empathy with consistency",
              "keyIndicators": [
                "validation",
                "boundary"
              ],
              "commonMistake": "Either capitulating or reacting harshly"
            }
          },
          {
            "id": "b",
            "text": "Apologize profusely and immediately rearrange your entire schedule for her so that she does not become any more upset at all",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Capitulating reinforces dysregulation.",
            "explanation": {
              "approach": "Capitulation",
              "rationale": "Rewards the reaction",
              "keyIndicators": [
                "boundary collapse"
              ],
              "commonMistake": "Caving to the anger"
            }
          },
          {
            "id": "c",
            "text": "Respond to her anger with matching frustration and point out firmly that she is being unreasonable and far too demanding now",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reactivity escalates conflict.",
            "explanation": {
              "approach": "Counter-reactivity",
              "rationale": "Escalates conflict",
              "keyIndicators": [
                "escalation"
              ],
              "commonMistake": "Matching the anger"
            }
          },
          {
            "id": "d",
            "text": "Stay completely silent and offer no response to her anger at all, hoping that she will eventually calm down by herself soon",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Withholding validation feels rejecting.",
            "explanation": {
              "approach": "Withholding",
              "rationale": "Feels dismissive",
              "keyIndicators": [
                "passivity"
              ],
              "commonMistake": "Offering no validation"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G095",
    "title": "Restless Minds in the Back Row",
    "category": "Neurodevelopmental",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Attention-Deficit/Hyperactivity Disorder, Combined",
      "code": "F90.2"
    },
    "diagnosis": {
      "name": "Attention-Deficit/Hyperactivity Disorder, Combined",
      "code": "F90.2"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Attention-Deficit/Hyperactivity Disorder, Combined",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Oppositional Defiant Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Specific Learning Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Caleb, a 9-year-old boy, is referred by his teacher for ongoing difficulties in school; he squirms and swivels in his chair throughout the interview, fiddling with everything within reach and popping up to look out the window. He cannot stay seated, blurts out answers, loses materials, fails to finish work, and is easily distracted, and his mother reports the same pattern at home: he forgets chores, cannot wait his turn, and is constantly on the go, interjecting, \"Can we be done now? I want to go play!\" Teachers note the behaviors have been present since early grades and across multiple settings. He is well-liked and not deliberately defiant, but his impulsivity and inattention cause real problems.",
      "session1": "Collateral from home and school documents six or more symptoms of inattention and six or more of hyperactivity-impulsivity, present before age twelve, across two or more settings, causing clear impairment; Caleb is restless and distractible during the session, his attention drifting mid-task, his speech bubbly and quick. The behaviors are not primarily a refusal to comply with authority, and reading and math skills are age-appropriate when he can attend. His difficulties are not better explained by pervasive worry, which his parents do not report.",
      "session2": "The counselor coordinates with the school for classroom accommodations, supports behavioral parent training, and recommends a comprehensive evaluation including medical consultation; Caleb responds eagerly to a structured token activity, beaming when praised. Psychoeducation about ADHD reframes the behaviors as a regulation difficulty rather than willful misbehavior. Structure, consistent routines, and positive reinforcement are emphasized, and the family is connected with resources."
    },
    "diagnosticRationale": "Six or more symptoms each of inattention and hyperactivity-impulsivity, with onset before age twelve, present in two or more settings and causing functional impairment, meet criteria for ADHD, combined presentation. The absence of a pervasive defiant, hostile pattern rules out oppositional defiant disorder, intact academic skills argue against a specific learning disorder, and the lack of pervasive worry distinguishes it from generalized anxiety.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "ADHD: six+ inattentive and hyperactive symptoms before age 12 in two+ settings"
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "Behavioral parent training and school support as part of ADHD management"
      },
      {
        "id": "R3",
        "source": "Hays (Assessment)",
        "detail": "Multi-informant, cross-setting data in child assessment"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Why is gathering information from both home and school essential?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "ADHD requires symptoms across two or more settings to meet criteria",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Cross-setting impairment is a diagnostic requirement.",
            "explanation": {
              "approach": "Cross-setting data",
              "rationale": "Confirms pervasiveness",
              "keyIndicators": [
                "two settings",
                "multi-informant"
              ],
              "commonMistake": "Relying on a single source"
            }
          },
          {
            "id": "b",
            "text": "Information is gathered from multiple settings only so the counselor can decide which specific stimulant medication to start",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Counselors do not prescribe; wrong purpose.",
            "explanation": {
              "approach": "Scope confusion",
              "rationale": "Not a prescribing decision",
              "keyIndicators": [
                "scope"
              ],
              "commonMistake": "Overstepping the role"
            }
          },
          {
            "id": "c",
            "text": "Multiple settings matter mainly so the counselor can determine which one of his two parents is the more reliable historian here",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Mischaracterizes the purpose entirely.",
            "explanation": {
              "approach": "Wrong purpose",
              "rationale": "Not about ranking parents",
              "keyIndicators": [
                "misframe"
              ],
              "commonMistake": "Misstating the rationale"
            }
          },
          {
            "id": "d",
            "text": "Cross-setting data is collected primarily so the school can be persuaded to remove him from the classroom for good behavior",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Not the purpose and is punitive.",
            "explanation": {
              "approach": "Wrong aim",
              "rationale": "Punitive misuse",
              "keyIndicators": [
                "misuse"
              ],
              "commonMistake": "Repurposing the data"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "intake",
        "question": "Which feature distinguishes ADHD from oppositional defiant disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "His difficulties stem from impulsivity and inattention, not deliberate defiance",
            "isCorrect": true,
            "weight": 3,
            "rationale": "ODD is defined by a defiant, hostile pattern; ADHD by regulation deficits.",
            "explanation": {
              "approach": "Behavior origin",
              "rationale": "Dysregulation vs defiance",
              "keyIndicators": [
                "impulsivity",
                "not defiant"
              ],
              "commonMistake": "Reading impulsivity as defiance"
            }
          },
          {
            "id": "b",
            "text": "He shows a pervasive, persistent pattern of angry, argumentative, and vindictive behavior aimed squarely at all authority figures",
            "isCorrect": false,
            "weight": -2,
            "rationale": "That describes ODD, which he lacks.",
            "explanation": {
              "approach": "Wrong profile",
              "rationale": "No defiant pattern",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Imposing ODD features"
            }
          },
          {
            "id": "c",
            "text": "His core problem is a specific and marked difficulty with reading and mathematics that persists even when he is paying attention",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That suggests a learning disorder.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Skills are intact",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Confusing with SLD"
            }
          },
          {
            "id": "d",
            "text": "His behaviors are driven mainly by constant and uncontrollable worry about many different areas of his daily school and home life",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That points to anxiety, not reported.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "No pervasive worry",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Importing anxiety features"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "His mother feels he is just being bad. What is the best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Reframe the behaviors as a self-regulation difficulty rather than willful misbehavior",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Psychoeducation reduces blame and supports management.",
            "explanation": {
              "approach": "Reframing",
              "rationale": "Shifts from blame to skills",
              "keyIndicators": [
                "psychoeducation",
                "regulation"
              ],
              "commonMistake": "Confirming that he is simply being bad"
            }
          },
          {
            "id": "b",
            "text": "Agree firmly with the mother that he is indeed choosing to misbehave and recommend much stricter and harsher punishment at home",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Blaming framing worsens outcomes.",
            "explanation": {
              "approach": "Blame framing",
              "rationale": "Increases conflict",
              "keyIndicators": [
                "blame"
              ],
              "commonMistake": "Endorsing harsh punishment"
            }
          },
          {
            "id": "c",
            "text": "Tell the mother that his behavior is entirely the direct result of her own inconsistent parenting choices over the past few years",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Parent-blaming is inaccurate and harmful.",
            "explanation": {
              "approach": "Parent blame",
              "rationale": "Stigmatizing",
              "keyIndicators": [
                "blame"
              ],
              "commonMistake": "Blaming the parent"
            }
          },
          {
            "id": "d",
            "text": "Reassure the mother that he will almost certainly grow out of all of these behaviors completely on his own without any support",
            "isCorrect": false,
            "weight": -1,
            "rationale": "False reassurance delays needed help.",
            "explanation": {
              "approach": "False reassurance",
              "rationale": "Delays intervention",
              "keyIndicators": [
                "minimization"
              ],
              "commonMistake": "Minimizing the need for support"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is an appropriate evidence-based intervention focus?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Behavioral parent training and school accommodations with consistent structure",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Behavioral and educational supports are first-line for children.",
            "explanation": {
              "approach": "Behavioral support",
              "rationale": "Structure and reinforcement",
              "keyIndicators": [
                "parent training",
                "accommodations"
              ],
              "commonMistake": "Relying on punishment alone"
            }
          },
          {
            "id": "b",
            "text": "Long-term insight-oriented play therapy as the sole intervention, expecting it to fully resolve the attention and activity problems",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Insufficient as a standalone for ADHD.",
            "explanation": {
              "approach": "Insufficient modality",
              "rationale": "Misses behavioral core",
              "keyIndicators": [
                "mismatch"
              ],
              "commonMistake": "Defaulting to insight work"
            }
          },
          {
            "id": "c",
            "text": "Removing him from the regular classroom permanently and placing him in isolation whenever he is unable to sit still and focus",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Punitive exclusion is harmful and inappropriate.",
            "explanation": {
              "approach": "Exclusion",
              "rationale": "Harmful and punitive",
              "keyIndicators": [
                "exclusion"
              ],
              "commonMistake": "Isolating the child"
            }
          },
          {
            "id": "d",
            "text": "Advising the parents to eliminate all structure and routine at home so that he feels less pressured and constrained each day",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Removing structure worsens ADHD symptoms.",
            "explanation": {
              "approach": "Structure removal",
              "rationale": "Worsens regulation",
              "keyIndicators": [
                "inconsistency"
              ],
              "commonMistake": "Stripping away routine"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "The school asks the counselor to share the evaluation. What is appropriate?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Share relevant information with parental consent to support his education",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Consented coordination supports the child\u2019s needs.",
            "explanation": {
              "approach": "Consented sharing",
              "rationale": "Coordinates school support",
              "keyIndicators": [
                "consent",
                "coordination"
              ],
              "commonMistake": "Sharing without consent or refusing to coordinate"
            }
          },
          {
            "id": "b",
            "text": "Send the school the full clinical file including all family history and process notes without first obtaining parental consent at all",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Discloses without consent and beyond need.",
            "explanation": {
              "approach": "Unconsented disclosure",
              "rationale": "Violates confidentiality",
              "keyIndicators": [
                "breach"
              ],
              "commonMistake": "Releasing records improperly"
            }
          },
          {
            "id": "c",
            "text": "Refuse any communication with the school whatsoever, insisting that all educational matters are completely outside the clinical role",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Coordination with consent is appropriate.",
            "explanation": {
              "approach": "Over-restriction",
              "rationale": "Misapplies confidentiality",
              "keyIndicators": [
                "siloing"
              ],
              "commonMistake": "Refusing warranted coordination"
            }
          },
          {
            "id": "d",
            "text": "Discuss the case informally with a teacher at a community event so that the school can begin planning supports more quickly",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Improper, unconsented social disclosure.",
            "explanation": {
              "approach": "Social disclosure",
              "rationale": "Improper channel",
              "keyIndicators": [
                "breach"
              ],
              "commonMistake": "Discussing cases socially"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G096",
    "title": "Years of Gray With a Darker Week",
    "category": "Depressive",
    "difficulty": "hard",
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
        "id": "d1",
        "name": "Persistent Depressive Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Major Depressive Disorder, Single Episode",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Bipolar II Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Cyclothymic Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Margaret, a 38-year-old librarian, describes feeling persistently low for as long as she can remember, certainly for more than two years without relief lasting more than a few weeks; she speaks in a flat, subdued monotone, with slumped posture and a resigned half-smile. She has low energy, poor self-esteem, difficulty concentrating, and a sense of hopelessness that has become part of who she is, and recently a layoff triggered a worse two-week stretch with additional symptoms. She has always functioned, but joylessly, wondering aloud, \"I sometimes think this gray feeling is just who I am.\"",
      "session1": "Margaret reports depressed mood most of the day, more days than not, for over two years, with at least two associated symptoms and no symptom-free period exceeding two months; her affect is dull and her voice quiet, with little inflection as she describes the recent worsening. The recent intensification meets full episode criteria superimposed on the chronic baseline, and she notes, \"The layoff just made the heaviness even heavier.\" She denies any history of hypomanic or manic episodes, and her low periods are not interspersed with the numerous hypomanic-like upswings that would suggest a cyclothymic pattern.",
      "session2": "The counselor frames the chronic course with a recent superimposed episode, validating that long-standing low mood is treatable rather than fixed personality; Margaret looks up with cautious interest, her tone lifting slightly as she considers the idea. They set realistic, paced goals, target hopelessness cognitions, and build behavioral activation, and a medication consultation is discussed. The chronicity informs expectations for a longer treatment course and attention to demoralization."
    },
    "diagnosticRationale": "Depressed mood most of the day for more than two years with associated symptoms and no extended symptom-free interval meets criteria for persistent depressive disorder, with a recent superimposed major depressive episode. The chronic two-year course distinguishes it from a single depressive episode, the absence of any hypomania rules out bipolar II, and the lack of numerous hypomanic-like periods rules out cyclothymia.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Persistent Depressive Disorder: depressed mood \u22652 years with no relief >2 months"
      },
      {
        "id": "R2",
        "source": "APA CPG",
        "detail": "Cognitive therapy and behavioral activation for chronic depression"
      },
      {
        "id": "R3",
        "source": "C-SSRS",
        "detail": "Ongoing suicide-risk monitoring in chronic depression"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which feature distinguishes this from a single major depressive episode?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Her depressed mood has persisted chronically for more than two years",
            "isCorrect": true,
            "weight": 3,
            "rationale": "PDD requires a two-year chronic course, unlike a discrete episode.",
            "explanation": {
              "approach": "Chronicity",
              "rationale": "Two-year course is key",
              "keyIndicators": [
                "chronic",
                "two years"
              ],
              "commonMistake": "Treating chronic depression as a single episode"
            }
          },
          {
            "id": "b",
            "text": "Her symptoms began suddenly only two weeks ago with no prior history of any low mood at any earlier point in her life",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Contradicts the chronic history she reports.",
            "explanation": {
              "approach": "Wrong course",
              "rationale": "Ignores chronicity",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Erasing the chronic baseline"
            }
          },
          {
            "id": "c",
            "text": "Her low periods are regularly interrupted by distinct multi-day hypomanic episodes with elevated mood and reduced need for sleep",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That suggests bipolar II, which she denies.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "No hypomania",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Importing bipolar features"
            }
          },
          {
            "id": "d",
            "text": "Her mood alternates frequently between numerous brief hypomanic-like highs and mild depressive lows across the two-year span",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That describes cyclothymia, not her course.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "No cyclothymic pattern",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Confusing with cyclothymia"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "intake",
        "question": "How should the recent two-week worsening be conceptualized?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "As a major depressive episode superimposed on her persistent depressive disorder",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Double depression captures the layered course.",
            "explanation": {
              "approach": "Double depression",
              "rationale": "Episode on chronic baseline",
              "keyIndicators": [
                "superimposed",
                "double depression"
              ],
              "commonMistake": "Missing the superimposed episode"
            }
          },
          {
            "id": "b",
            "text": "As clear and definitive evidence that her actual underlying condition has always been bipolar disorder rather than depression",
            "isCorrect": false,
            "weight": -2,
            "rationale": "No manic or hypomanic history supports this.",
            "explanation": {
              "approach": "Wrong conclusion",
              "rationale": "No bipolar evidence",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Inventing bipolarity"
            }
          },
          {
            "id": "c",
            "text": "As an entirely ordinary and expected stress reaction to the layoff that requires no specific clinical attention or treatment now",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Minimizes a full superimposed episode.",
            "explanation": {
              "approach": "Minimization",
              "rationale": "Overlooks the episode",
              "keyIndicators": [
                "minimization"
              ],
              "commonMistake": "Dismissing the worsening"
            }
          },
          {
            "id": "d",
            "text": "As proof that her chronic low mood is simply her fixed personality and therefore cannot meaningfully respond to any treatment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Inaccurate and demoralizing.",
            "explanation": {
              "approach": "Nihilism",
              "rationale": "Discourages treatment",
              "keyIndicators": [
                "hopelessness"
              ],
              "commonMistake": "Framing it as untreatable"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "She says feeling low is just who she is. What is the best response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Validate her experience while explaining that chronic depression is treatable, not fixed identity",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Reframing chronicity counters demoralization.",
            "explanation": {
              "approach": "Hopeful reframe",
              "rationale": "Separates illness from identity",
              "keyIndicators": [
                "validation",
                "treatable"
              ],
              "commonMistake": "Agreeing it is unchangeable personality"
            }
          },
          {
            "id": "b",
            "text": "Agree with her conclusion that this is simply her permanent personality and that she should focus on accepting it fully instead",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reinforces hopelessness.",
            "explanation": {
              "approach": "Confirming nihilism",
              "rationale": "Removes hope",
              "keyIndicators": [
                "nihilism"
              ],
              "commonMistake": "Endorsing the hopeless belief"
            }
          },
          {
            "id": "c",
            "text": "Quickly insist that she will feel completely better within just a week or two once she starts thinking far more positively daily",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Overpromises and minimizes.",
            "explanation": {
              "approach": "Overpromise",
              "rationale": "Unrealistic and dismissive",
              "keyIndicators": [
                "false reassurance"
              ],
              "commonMistake": "Guaranteeing a fast fix"
            }
          },
          {
            "id": "d",
            "text": "Change the subject away from her self-view and instead focus only on practical scheduling and logistical matters for the session",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoids an important therapeutic moment.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "Misses the opening",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Sidestepping the belief"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What does the chronicity imply for treatment planning?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "A longer treatment course with paced goals and attention to demoralization",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Chronic depression needs realistic, sustained planning.",
            "explanation": {
              "approach": "Paced planning",
              "rationale": "Matches the chronic course",
              "keyIndicators": [
                "longer course",
                "demoralization"
              ],
              "commonMistake": "Expecting a quick resolution"
            }
          },
          {
            "id": "b",
            "text": "That a single brief intervention of just two or three sessions should be entirely sufficient to fully resolve years of symptoms",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Unrealistic for chronic depression.",
            "explanation": {
              "approach": "Underdosing",
              "rationale": "Too brief for chronicity",
              "keyIndicators": [
                "undertreatment"
              ],
              "commonMistake": "Underestimating the course"
            }
          },
          {
            "id": "c",
            "text": "That treatment is essentially pointless and should be discontinued because chronic depression rarely improves with any therapy at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Inaccurate and nihilistic.",
            "explanation": {
              "approach": "Nihilism",
              "rationale": "Discourages care",
              "keyIndicators": [
                "hopelessness"
              ],
              "commonMistake": "Abandoning treatment"
            }
          },
          {
            "id": "d",
            "text": "That she should set extremely ambitious goals immediately and push herself hard to overcome everything within the first few weeks",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Overambitious pacing risks failure and demoralization.",
            "explanation": {
              "approach": "Overpacing",
              "rationale": "Sets up failure",
              "keyIndicators": [
                "unrealistic goals"
              ],
              "commonMistake": "Ignoring realistic pacing"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Given chronic hopelessness, what should be monitored throughout treatment?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Ongoing suicide risk, since chronic hopelessness elevates long-term risk",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Persistent hopelessness warrants continued risk monitoring.",
            "explanation": {
              "approach": "Risk monitoring",
              "rationale": "Chronic hopelessness raises risk",
              "keyIndicators": [
                "risk",
                "hopelessness"
              ],
              "commonMistake": "Assuming chronic clients are low risk"
            }
          },
          {
            "id": "b",
            "text": "Only her overall medication adherence, since once she takes medication consistently no further safety monitoring is ever required",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Adherence does not replace risk monitoring.",
            "explanation": {
              "approach": "Narrow focus",
              "rationale": "Neglects risk",
              "keyIndicators": [
                "mis-emphasis"
              ],
              "commonMistake": "Equating adherence with safety"
            }
          },
          {
            "id": "c",
            "text": "Mainly her punctuality and attendance at sessions, which are the clearest and most reliable indicators of her true clinical progress",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Attendance is not a risk measure.",
            "explanation": {
              "approach": "Wrong metric",
              "rationale": "Not a safety indicator",
              "keyIndicators": [
                "misframe"
              ],
              "commonMistake": "Tracking the wrong variable"
            }
          },
          {
            "id": "d",
            "text": "Primarily whether she keeps her living space tidy and organized, which some assume directly reflects her underlying mood state",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Not a valid risk indicator.",
            "explanation": {
              "approach": "Spurious metric",
              "rationale": "No risk validity",
              "keyIndicators": [
                "noise"
              ],
              "commonMistake": "Using an unrelated proxy"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G097",
    "title": "The Worry That Never Rests",
    "category": "Anxiety",
    "difficulty": "medium",
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
        "id": "d1",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Panic Disorder",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Social Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Major Depressive Disorder, Single Episode",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Karen, a 44-year-old project manager, describes excessive worry about work deadlines, her children's safety, finances, and health, occurring more days than not for over six months; she sits tensely upright, shoulders raised, speaking quickly and circling back to new worries before finishing the last. She finds the worry difficult to control, feels restless and keyed up, tires easily, has trouble concentrating, is irritable, and sleeps poorly, confessing, \"My mind just races from one disaster to the next and I can't shut it off.\" The worry jumps from topic to topic and is out of proportion to actual circumstances. She has no discrete panic attacks and her anxiety is not limited to social situations.",
      "session1": "Karen endorses chronic, uncontrollable worry across multiple domains with three or more associated symptoms for more than six months and clear impairment; she fidgets and her speech stays rapid as she lists each domain of concern. The anxiety is not focused on having a panic attack, not confined to fear of social evaluation, and not better accounted for by low mood, which she does not primarily report, and she adds, \"Even when one thing is fine, my brain finds the next thing to dread.\" Her difficulty controlling the worry and the breadth of topics are central features.",
      "session2": "The counselor introduces cognitive restructuring of catastrophic predictions, worry-postponement strategies, and relaxation training; Karen's posture loosens and her pace slows as she practices in session. They examine intolerance of uncertainty as a maintaining factor and practice tolerating not-knowing, and behavioral experiments test feared outcomes. Her worry becomes less all-consuming as she builds skills and reduces reassurance-seeking and avoidance."
    },
    "diagnosticRationale": "Excessive, difficult-to-control worry across multiple domains occurring more days than not for at least six months, with at least three associated symptoms and significant impairment, meets criteria for generalized anxiety disorder. The diffuse multi-domain worry distinguishes it from the panic-focused fear of panic disorder, the non-social breadth distinguishes it from social anxiety, and the predominance of worry over low mood distinguishes it from depression.",
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "GAD: excessive uncontrollable worry \u22656 months with three+ associated symptoms"
      },
      {
        "id": "R2",
        "source": "APA CPG",
        "detail": "Cognitive behavioral therapy as first-line for generalized anxiety"
      },
      {
        "id": "R3",
        "source": "Barlow PCT",
        "detail": "Addressing intolerance of uncertainty and worry behaviors"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Which feature distinguishes GAD from panic disorder?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Her anxiety is diffuse worry across domains, not fear of discrete panic attacks",
            "isCorrect": true,
            "weight": 3,
            "rationale": "GAD is broad worry; panic disorder centers on attacks.",
            "explanation": {
              "approach": "Worry breadth",
              "rationale": "Diffuse vs panic-focused",
              "keyIndicators": [
                "multi-domain worry",
                "no attacks"
              ],
              "commonMistake": "Conflating worry with panic"
            }
          },
          {
            "id": "b",
            "text": "Her anxiety consists almost entirely of sudden recurrent surges of intense fear that peak within minutes and feel catastrophic",
            "isCorrect": false,
            "weight": -2,
            "rationale": "That describes panic disorder, which she denies.",
            "explanation": {
              "approach": "Wrong profile",
              "rationale": "No panic attacks",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Imposing panic features"
            }
          },
          {
            "id": "c",
            "text": "Her worry is narrowly confined only to situations where she might be judged or negatively evaluated by other people watching",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That describes social anxiety.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Not social-only",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Confusing with social anxiety"
            }
          },
          {
            "id": "d",
            "text": "Her main presentation is pervasive low mood and loss of interest, with worry being only a very minor and secondary background concern",
            "isCorrect": false,
            "weight": -1,
            "rationale": "That suggests depression, not primary here.",
            "explanation": {
              "approach": "Wrong differential",
              "rationale": "Worry is primary",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Reducing GAD to depression"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "What is the recommended first-line treatment?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Cognitive behavioral therapy targeting worry and avoidance",
            "isCorrect": true,
            "weight": 3,
            "rationale": "CBT is first-line for GAD.",
            "explanation": {
              "approach": "CBT therapy",
              "rationale": "Evidence-based for GAD",
              "keyIndicators": [
                "CBT",
                "first-line"
              ],
              "commonMistake": "Defaulting to medication or avoidance"
            }
          },
          {
            "id": "b",
            "text": "Long-term daily benzodiazepine use as the central and primary treatment intended to keep her anxiety fully suppressed at all times",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Not first-line and risks dependence.",
            "explanation": {
              "approach": "Medication-first",
              "rationale": "Dependence risk",
              "keyIndicators": [
                "over-medicating"
              ],
              "commonMistake": "Leading with benzodiazepines"
            }
          },
          {
            "id": "c",
            "text": "Advising her to avoid all of the situations and topics that tend to trigger her worry so she experiences far less anxiety overall",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoidance maintains anxiety.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "Reinforces the disorder",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Promoting avoidance"
            }
          },
          {
            "id": "d",
            "text": "Providing repeated detailed reassurance about each specific worry so that she feels completely calmed and settled after every session",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reassurance reinforces the worry cycle.",
            "explanation": {
              "approach": "Reassurance",
              "rationale": "Feeds the cycle",
              "keyIndicators": [
                "reassurance"
              ],
              "commonMistake": "Over-reassuring"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "She seeks constant reassurance that her fears will not come true. Best response?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Help her tolerate uncertainty rather than providing repeated reassurance",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Targeting intolerance of uncertainty is key in GAD.",
            "explanation": {
              "approach": "Uncertainty tolerance",
              "rationale": "Reduces reassurance dependence",
              "keyIndicators": [
                "uncertainty",
                "non-reinforcement"
              ],
              "commonMistake": "Supplying endless reassurance"
            }
          },
          {
            "id": "b",
            "text": "Offer her thorough, detailed, and definitive reassurance about every single worry she raises so that her anxiety is fully relieved",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reinforces reassurance-seeking.",
            "explanation": {
              "approach": "Over-reassurance",
              "rationale": "Maintains the cycle",
              "keyIndicators": [
                "reassurance"
              ],
              "commonMistake": "Feeding the reassurance loop"
            }
          },
          {
            "id": "c",
            "text": "Tell her firmly that her worries are completely irrational and that she should simply decide to stop thinking about them at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismissive and unhelpful.",
            "explanation": {
              "approach": "Dismissal",
              "rationale": "Invalidates and suppresses",
              "keyIndicators": [
                "dismissal"
              ],
              "commonMistake": "Telling her to just stop"
            }
          },
          {
            "id": "d",
            "text": "Encourage her to research each of her feared outcomes online in great detail until she feels she has gathered enough information",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Information-seeking becomes a worry behavior.",
            "explanation": {
              "approach": "Checking",
              "rationale": "Reinforces worry behavior",
              "keyIndicators": [
                "checking"
              ],
              "commonMistake": "Promoting reassurance research"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "Which technique directly targets a key maintaining factor?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Worry-postponement and behavioral experiments testing feared predictions",
            "isCorrect": true,
            "weight": 3,
            "rationale": "These reduce worry time and disconfirm catastrophic beliefs.",
            "explanation": {
              "approach": "Worry skills",
              "rationale": "Limits and tests worry",
              "keyIndicators": [
                "postponement",
                "experiments"
              ],
              "commonMistake": "Leaving worry processes untouched"
            }
          },
          {
            "id": "b",
            "text": "Encouraging her to set aside several long unstructured hours each day specifically devoted to thinking through every possible worry",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Expanding worry time worsens GAD.",
            "explanation": {
              "approach": "Worry expansion",
              "rationale": "Amplifies rumination",
              "keyIndicators": [
                "rumination"
              ],
              "commonMistake": "Increasing worry time"
            }
          },
          {
            "id": "c",
            "text": "Recommending she keep a detailed written list of every catastrophe that could possibly happen so she always feels fully prepared",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reinforces catastrophizing.",
            "explanation": {
              "approach": "Catastrophizing",
              "rationale": "Feeds the worry",
              "keyIndicators": [
                "catastrophizing"
              ],
              "commonMistake": "Cataloguing disasters"
            }
          },
          {
            "id": "d",
            "text": "Advising her to seek frequent reassurance from her family members whenever a new worry arises so she can feel calmer right away",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reassurance-seeking maintains the cycle.",
            "explanation": {
              "approach": "Reassurance-seeking",
              "rationale": "Maintains anxiety",
              "keyIndicators": [
                "reassurance"
              ],
              "commonMistake": "Outsourcing reassurance"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "intake",
        "question": "She reports poor sleep and irritability. How should these be understood?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "As associated symptoms of GAD rather than a separate primary disorder",
            "isCorrect": true,
            "weight": 3,
            "rationale": "These are part of the GAD symptom cluster.",
            "explanation": {
              "approach": "Symptom cluster",
              "rationale": "Part of GAD criteria",
              "keyIndicators": [
                "associated symptoms",
                "GAD"
              ],
              "commonMistake": "Treating each symptom as a new disorder"
            }
          },
          {
            "id": "b",
            "text": "As definitive proof that she has a primary independent sleep disorder that must be diagnosed and treated entirely on its own first",
            "isCorrect": false,
            "weight": -1,
            "rationale": "They are part of GAD here, not a separate disorder.",
            "explanation": {
              "approach": "Over-splitting",
              "rationale": "Misattributes the cluster",
              "keyIndicators": [
                "fragmenting"
              ],
              "commonMistake": "Splitting off normal GAD features"
            }
          },
          {
            "id": "c",
            "text": "As clear and unmistakable evidence that the correct underlying diagnosis is actually bipolar disorder rather than an anxiety condition",
            "isCorrect": false,
            "weight": -2,
            "rationale": "No mood-elevation history supports this.",
            "explanation": {
              "approach": "Wrong conclusion",
              "rationale": "No bipolar evidence",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Inventing bipolarity"
            }
          },
          {
            "id": "d",
            "text": "As entirely unrelated background complaints that have nothing to do with her anxiety and can therefore be safely ignored for now",
            "isCorrect": false,
            "weight": -1,
            "rationale": "They are core associated features, not irrelevant.",
            "explanation": {
              "approach": "Dismissal",
              "rationale": "Ignores criteria",
              "keyIndicators": [
                "minimization"
              ],
              "commonMistake": "Overlooking associated symptoms"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G098",
    "title": "A Note Left on the Kitchen Table",
    "category": "Crisis",
    "difficulty": "easy",
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
        "id": "d1",
        "name": "Suicidal Behavior / Acute Risk",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Nonsuicidal Self-Injury",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Major Depressive Disorder, Single Episode",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Adjustment Disorder, with Depressed Mood",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Chloe, a 19-year-old college student, is brought to the counseling center by a roommate who found a note suggesting she did not want to live; she sits curled inward, eyes red and downcast, dabbing at tears and speaking in a small, halting voice. She has been overwhelmed by academic pressure and a recent romantic loss, and she acknowledges thoughts of suicide over the past week, says she has considered taking pills, and admits she has been stockpiling them. She is tearful and ambivalent, whispering, \"Part of me just wants the pain to stop, and part of me is so scared.\"",
      "session1": "On assessment Chloe reports active suicidal ideation with a method in mind and some preparatory behavior, but expresses ambivalence and willingness to engage; her voice wavers and she pauses often, but she maintains intermittent eye contact. She denies a history of non-suicidal self-injury done for tension relief without suicidal intent, clarifying, \"This isn't about feeling something, it's that I didn't want to be here anymore.\" She has supportive roommates and a close relationship with her sister, who lives nearby.",
      "session2": "Using a collaborative approach, the counselor completes a safety plan, arranges for the pills to be removed and secured, identifies reasons for living and coping strategies, and connects her with crisis resources and a follow-up appointment; Chloe's breathing steadies and she nods, saying quietly, \"I think I do want help.\" Her sister is engaged with consent. The counselor balances empathy with a clear focus on safety and an appropriate level of care."
    },
    "diagnosticRationale": "Active suicidal ideation with a chosen method and preparatory behavior such as stockpiling pills constitutes acute suicide risk requiring immediate safety intervention. This is distinguished from non-suicidal self-injury, which lacks suicidal intent, and is the priority concern regardless of any co-occurring depressive or adjustment symptoms, which do not capture the imminent safety issue driving the clinical response.",
    "references": [
      {
        "id": "R1",
        "source": "C-SSRS",
        "detail": "Assessing ideation, intent, plan, and preparatory behavior for risk stratification"
      },
      {
        "id": "R2",
        "source": "Stanley-Brown SPI",
        "detail": "Collaborative safety planning and means restriction"
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "B.2.a disclosure to protect from serious and foreseeable harm"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "core",
        "question": "What is the first assessment priority?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Directly assess her ideation, intent, plan, and preparatory behavior",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Risk stratification comes first.",
            "explanation": {
              "approach": "Risk assessment",
              "rationale": "Establishes acuity",
              "keyIndicators": [
                "ideation",
                "plan"
              ],
              "commonMistake": "Avoiding direct suicide questions"
            }
          },
          {
            "id": "b",
            "text": "Begin a detailed exploration of her early family history and attachment patterns before raising any of the suicide-related concerns",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Delays urgent safety assessment.",
            "explanation": {
              "approach": "Misprioritization",
              "rationale": "Defers safety",
              "keyIndicators": [
                "delay"
              ],
              "commonMistake": "Pursuing history over safety"
            }
          },
          {
            "id": "c",
            "text": "Focus first on practical academic accommodations and study strategies to relieve the school pressure that triggered her distress",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Does not address imminent risk.",
            "explanation": {
              "approach": "Wrong focus",
              "rationale": "Skips risk",
              "keyIndicators": [
                "mis-sequence"
              ],
              "commonMistake": "Problem-solving before safety"
            }
          },
          {
            "id": "d",
            "text": "Reassure her that the romantic breakup will hurt less with time and schedule a routine follow-up appointment for next week instead",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dangerously minimizes acute risk.",
            "explanation": {
              "approach": "Undertriage",
              "rationale": "Misses the emergency",
              "keyIndicators": [
                "minimization"
              ],
              "commonMistake": "Routinizing a crisis"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "core",
        "question": "She has stockpiled pills. What is the priority intervention?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Arrange for the pills to be removed and secured to restrict means",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Means restriction is central to safety.",
            "explanation": {
              "approach": "Means restriction",
              "rationale": "Reduces lethal access",
              "keyIndicators": [
                "means restriction"
              ],
              "commonMistake": "Ignoring access to means"
            }
          },
          {
            "id": "b",
            "text": "Accept her verbal promise that she will not take the pills tonight and proceed without arranging for them to be removed at all",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Promises are not protective.",
            "explanation": {
              "approach": "Reliance on promise",
              "rationale": "Not protective",
              "keyIndicators": [
                "false reassurance"
              ],
              "commonMistake": "Trusting a promise over action"
            }
          },
          {
            "id": "c",
            "text": "Tell her she should simply move the stockpiled pills to a different and less visible location somewhere else in her dorm room",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Keeps the means accessible.",
            "explanation": {
              "approach": "Weak restriction",
              "rationale": "Means still accessible",
              "keyIndicators": [
                "weak barrier"
              ],
              "commonMistake": "Token means restriction"
            }
          },
          {
            "id": "d",
            "text": "Wait to address the pills until after several sessions of building rapport so she does not feel pressured or controlled too soon",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Delays urgent means restriction.",
            "explanation": {
              "approach": "Delaying",
              "rationale": "Unsafe deferral",
              "keyIndicators": [
                "delay"
              ],
              "commonMistake": "Postponing means restriction"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "core",
        "question": "What collaborative tool best supports her safety?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "A safety plan identifying warning signs, coping strategies, and crisis contacts",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Safety planning is evidence-based for acute risk.",
            "explanation": {
              "approach": "Safety planning",
              "rationale": "Structured coping and contacts",
              "keyIndicators": [
                "safety plan",
                "crisis contacts"
              ],
              "commonMistake": "Relying on a no-suicide contract"
            }
          },
          {
            "id": "b",
            "text": "A signed no-suicide contract in which she formally promises in writing never to attempt suicide under any circumstances at all",
            "isCorrect": false,
            "weight": -2,
            "rationale": "No-suicide contracts are not effective.",
            "explanation": {
              "approach": "No-suicide contract",
              "rationale": "Not evidence-based",
              "keyIndicators": [
                "ineffective tool"
              ],
              "commonMistake": "Using a contract for safety"
            }
          },
          {
            "id": "c",
            "text": "A detailed long-term academic plan mapping out all of her coursework for the next two years to relieve her future school stress",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Does not address immediate safety.",
            "explanation": {
              "approach": "Wrong tool",
              "rationale": "Not a safety tool",
              "keyIndicators": [
                "mis-tool"
              ],
              "commonMistake": "Substituting planning for safety"
            }
          },
          {
            "id": "d",
            "text": "A daily mood-tracking journal that she will complete privately and bring to review at her next scheduled session in a few weeks",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Too slow for acute risk.",
            "explanation": {
              "approach": "Insufficient",
              "rationale": "Not immediate",
              "keyIndicators": [
                "mis-timing"
              ],
              "commonMistake": "Using a slow tool in a crisis"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "ethics",
        "question": "Her sister lives nearby. How should the counselor involve her?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Engage the sister with consent to support safety and means restriction",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Consented support strengthens the safety net.",
            "explanation": {
              "approach": "Consented support",
              "rationale": "Mobilizes support safely",
              "keyIndicators": [
                "consent",
                "support"
              ],
              "commonMistake": "Either ignoring supports or disclosing without consent"
            }
          },
          {
            "id": "b",
            "text": "Refuse any contact with the sister at all, citing strict confidentiality, even though doing so leaves the client without any support",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Over-restricts during a safety concern.",
            "explanation": {
              "approach": "Over-restriction",
              "rationale": "Misapplies confidentiality",
              "keyIndicators": [
                "siloing"
              ],
              "commonMistake": "Blocking helpful support"
            }
          },
          {
            "id": "c",
            "text": "Contact the sister immediately and disclose the client\u2019s entire detailed clinical and romantic history without seeking any consent first",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Discloses far beyond what is necessary.",
            "explanation": {
              "approach": "Over-disclosure",
              "rationale": "Exceeds minimum necessary",
              "keyIndicators": [
                "over-sharing"
              ],
              "commonMistake": "Disclosing too much"
            }
          },
          {
            "id": "d",
            "text": "Tell the client she must handle the situation entirely on her own and discourage her from involving any family members at all for now",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Isolates the client from protective support.",
            "explanation": {
              "approach": "Isolation",
              "rationale": "Removes support",
              "keyIndicators": [
                "isolation"
              ],
              "commonMistake": "Discouraging support"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "intake",
        "question": "Which finding distinguishes her risk from non-suicidal self-injury?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Her thoughts and actions are aimed at ending her life, not relieving tension",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Suicidal intent distinguishes acute risk from NSSI.",
            "explanation": {
              "approach": "Intent distinction",
              "rationale": "Intent to die vs tension relief",
              "keyIndicators": [
                "suicidal intent",
                "not NSSI"
              ],
              "commonMistake": "Confusing suicidal intent with self-injury"
            }
          },
          {
            "id": "b",
            "text": "She reports a long pattern of cutting herself specifically to relieve emotional tension and without any intention of ending her life",
            "isCorrect": false,
            "weight": -2,
            "rationale": "That describes NSSI, which she denies.",
            "explanation": {
              "approach": "Wrong profile",
              "rationale": "Not NSSI here",
              "keyIndicators": [
                "misattribution"
              ],
              "commonMistake": "Mislabeling as NSSI"
            }
          },
          {
            "id": "c",
            "text": "Her distress is best understood as a perfectly ordinary and proportionate short-term reaction to a common everyday life stressor",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Minimizes active suicidal risk.",
            "explanation": {
              "approach": "Minimization",
              "rationale": "Underestimates risk",
              "keyIndicators": [
                "minimization"
              ],
              "commonMistake": "Downplaying the danger"
            }
          },
          {
            "id": "d",
            "text": "Her presentation is limited only to persistent low mood and anhedonia without any thoughts at all about death, dying, or suicide",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Contradicts her reported ideation.",
            "explanation": {
              "approach": "Wrong profile",
              "rationale": "Ideation is present",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Erasing the ideation"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ncmhce-G099",
    "title": "When a Teen Discloses Danger at Home",
    "category": "Ethics",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Mandated Reporting Decision",
      "code": "Z65.8"
    },
    "diagnosis": {
      "name": "Mandated Reporting Decision",
      "code": "Z65.8"
    },
    "differentialOptions": [
      {
        "id": "d1",
        "name": "Mandated Reporting Decision",
        "isCorrect": true
      },
      {
        "id": "d2",
        "name": "Confidentiality / Duty-to-Warn Dilemma",
        "isCorrect": false
      },
      {
        "id": "d3",
        "name": "Boundary / Dual-Relationship Dilemma",
        "isCorrect": false
      },
      {
        "id": "d4",
        "name": "Informed Consent / Competence Dilemma",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Maya, a 14-year-old client in ongoing therapy for anxiety, discloses midway through a session that her stepfather has been hitting her, leaving bruises, and that she is afraid to go home; she suddenly grows quiet and tense, picking at her sleeve and avoiding eye contact, her voice dropping to a near-whisper. She asks the counselor not to tell anyone, pleading, \"Please don't say anything, it'll only make everything worse,\" her eyes welling with fear. The counselor has a strong therapeutic alliance with the teen and recognizes both the legal obligation and the relational stakes of how this disclosure is handled.",
      "session1": "Maya's disclosure describes suspected physical abuse of a minor, which triggers a mandated-reporting obligation regardless of the client's request for secrecy; she watches the counselor warily, shoulders hunched, bracing for the response. The situation is not primarily a duty-to-warn matter about a threat to an identifiable third party, not a dual-relationship boundary issue, and not a question about the client's capacity to consent to treatment. The reporting duty is the central ethical and legal requirement.",
      "session2": "The counselor responds with empathy, explains the limits of confidentiality in an age-appropriate way, and frames the report as a step to keep her safe rather than a betrayal; Maya's tension eases slightly and she exhales, murmuring, \"So you're not doing this to get me in trouble.\" The counselor follows mandated-reporting law, makes the required report, documents the process, and continues to support the teen, attending to safety and the therapeutic relationship throughout."
    },
    "diagnosticRationale": "Disclosure of suspected physical abuse of a minor invokes a mandated-reporting obligation that overrides the routine confidentiality the client requests. This is distinct from a duty-to-warn scenario involving a threat to a third party, a multiple-relationship boundary dilemma, and a competence-and-consent question. The required action is to make the report per state law while maintaining the therapeutic relationship.",
    "references": [
      {
        "id": "R1",
        "source": "State law",
        "detail": "Mandated reporting of suspected child abuse by licensed counselors"
      },
      {
        "id": "R2",
        "source": "ACA Code of Ethics",
        "detail": "B.2.a confidentiality limits when disclosure is required to protect a minor"
      },
      {
        "id": "R3",
        "source": "Wiger (Documentation)",
        "detail": "Documenting the disclosure, the report, and follow-up actions"
      }
    ],
    "questions": [
      {
        "id": "q1",
        "domain": "ethics",
        "question": "How should the counselor frame this situation?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "As a mandated report of suspected child abuse required regardless of the request for secrecy",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Suspected abuse of a minor triggers mandatory reporting.",
            "explanation": {
              "approach": "Reporting frame",
              "rationale": "Abuse disclosure mandates a report",
              "keyIndicators": [
                "mandated report",
                "minor"
              ],
              "commonMistake": "Treating confidentiality as overriding"
            }
          },
          {
            "id": "b",
            "text": "As a duty-to-warn situation that requires the counselor to notify a specific identifiable third party about an imminent violent threat",
            "isCorrect": false,
            "weight": -2,
            "rationale": "No third-party threat; this is abuse reporting.",
            "explanation": {
              "approach": "Wrong category",
              "rationale": "Not duty-to-warn",
              "keyIndicators": [
                "miscategorization"
              ],
              "commonMistake": "Misapplying the wrong duty"
            }
          },
          {
            "id": "c",
            "text": "As a boundary and multiple-relationship dilemma that primarily concerns the counselor\u2019s overlapping roles with the client and family",
            "isCorrect": false,
            "weight": -1,
            "rationale": "No dual relationship is present.",
            "explanation": {
              "approach": "Wrong category",
              "rationale": "Not a boundary issue",
              "keyIndicators": [
                "misframing"
              ],
              "commonMistake": "Misreading the dilemma"
            }
          },
          {
            "id": "d",
            "text": "As a question about the minor client\u2019s legal capacity and competence to provide her own fully informed consent to the treatment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Capacity is not the issue here.",
            "explanation": {
              "approach": "Wrong category",
              "rationale": "Capacity not at issue",
              "keyIndicators": [
                "misdirection"
              ],
              "commonMistake": "Mislabeling the situation"
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "ethics",
        "question": "The teen asks the counselor to keep it secret. What is the appropriate response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Empathically explain the limits of confidentiality and the duty to report for her safety",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Honest, age-appropriate explanation respects the client and the law.",
            "explanation": {
              "approach": "Transparent limits",
              "rationale": "Honors duty and alliance",
              "keyIndicators": [
                "confidentiality limits",
                "transparency"
              ],
              "commonMistake": "Promising secrecy that cannot be kept"
            }
          },
          {
            "id": "b",
            "text": "Promise her firmly that you will keep the disclosure completely secret so that she continues to feel safe enough to keep talking",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Cannot promise to withhold a mandated report.",
            "explanation": {
              "approach": "False promise",
              "rationale": "Violates the duty",
              "keyIndicators": [
                "overpromise"
              ],
              "commonMistake": "Guaranteeing impossible secrecy"
            }
          },
          {
            "id": "c",
            "text": "Tell her bluntly that you are legally required to report and then immediately end the session without any further support or explanation",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Abrupt and unsupportive handling.",
            "explanation": {
              "approach": "Cold handling",
              "rationale": "Neglects the alliance",
              "keyIndicators": [
                "abruptness"
              ],
              "commonMistake": "Reporting without support"
            }
          },
          {
            "id": "d",
            "text": "Avoid giving her any answer at all about confidentiality and quickly steer the conversation back to her original anxiety symptoms",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Evades a necessary conversation.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "Dodges the duty",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Sidestepping the disclosure"
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "ethics",
        "question": "What is the counselor obligated to do regarding the report?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Make the required report to the appropriate authorities per state law",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Mandated reporters must file the report.",
            "explanation": {
              "approach": "Mandatory report",
              "rationale": "Legal obligation to file",
              "keyIndicators": [
                "mandated reporter",
                "report"
              ],
              "commonMistake": "Deciding not to report"
            }
          },
          {
            "id": "b",
            "text": "Wait to file any report until the counselor has personally gathered enough independent proof to fully confirm that the abuse occurred",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reporting is based on reasonable suspicion, not proof.",
            "explanation": {
              "approach": "Proof error",
              "rationale": "Suspicion is the standard",
              "keyIndicators": [
                "misstandard"
              ],
              "commonMistake": "Requiring proof before reporting"
            }
          },
          {
            "id": "c",
            "text": "Leave the decision about whether to report entirely up to the teenage client, since she is the one most directly affected by it",
            "isCorrect": false,
            "weight": -1,
            "rationale": "The duty is the counselor\u2019s, not the client\u2019s.",
            "explanation": {
              "approach": "Misplaced duty",
              "rationale": "Counselor must report",
              "keyIndicators": [
                "abdication"
              ],
              "commonMistake": "Deferring the duty to the client"
            }
          },
          {
            "id": "d",
            "text": "Report the matter only if the client\u2019s mother independently confirms the abuse first, otherwise treating it as an unverified claim",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Conditioning the report on confirmation is improper.",
            "explanation": {
              "approach": "Conditional report",
              "rationale": "Improper precondition",
              "keyIndicators": [
                "gatekeeping"
              ],
              "commonMistake": "Adding conditions to the duty"
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "core",
        "question": "How can the counselor preserve the therapeutic relationship through this?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Frame the report as a step toward safety and continue to support her afterward",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Maintaining support sustains the alliance.",
            "explanation": {
              "approach": "Supportive framing",
              "rationale": "Safety, not betrayal",
              "keyIndicators": [
                "safety framing",
                "continued support"
              ],
              "commonMistake": "Treating the report as the end of the relationship"
            }
          },
          {
            "id": "b",
            "text": "Distance yourself from the client after filing the report so that she does not come to associate you with the upsetting outcome at all",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Withdrawing abandons her when she needs support.",
            "explanation": {
              "approach": "Withdrawal",
              "rationale": "Abandons the client",
              "keyIndicators": [
                "abandonment"
              ],
              "commonMistake": "Pulling away after reporting"
            }
          },
          {
            "id": "c",
            "text": "Tell her plainly that the therapeutic relationship simply cannot continue any further now that you have been required to report the abuse",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Unnecessarily terminates needed care.",
            "explanation": {
              "approach": "Termination",
              "rationale": "Drops needed care",
              "keyIndicators": [
                "termination"
              ],
              "commonMistake": "Ending therapy prematurely"
            }
          },
          {
            "id": "d",
            "text": "Avoid mentioning the report ever again in future sessions and act as though the disclosure and report had never actually happened",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoidance undermines trust.",
            "explanation": {
              "approach": "Avoidance",
              "rationale": "Erodes honesty",
              "keyIndicators": [
                "avoidance"
              ],
              "commonMistake": "Pretending it did not occur"
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "What should documentation include?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "The disclosure, the report made, and the follow-up safety actions taken",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Thorough documentation records the process and rationale.",
            "explanation": {
              "approach": "Process documentation",
              "rationale": "Records disclosure and report",
              "keyIndicators": [
                "documentation",
                "report record"
              ],
              "commonMistake": "Failing to document the report"
            }
          },
          {
            "id": "b",
            "text": "Only a vague single line noting that the session went well and that the client appeared somewhat more anxious than usual that day",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Omits the required reporting detail.",
            "explanation": {
              "approach": "Insufficient note",
              "rationale": "Fails the standard",
              "keyIndicators": [
                "under-documentation"
              ],
              "commonMistake": "Minimal charting"
            }
          },
          {
            "id": "c",
            "text": "A lengthy personal opinion piece speculating at length about whether the stepfather is truly guilty of the abuse the client described",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Speculative and inappropriate content.",
            "explanation": {
              "approach": "Speculation",
              "rationale": "Improper content",
              "keyIndicators": [
                "editorializing"
              ],
              "commonMistake": "Editorializing in the record"
            }
          },
          {
            "id": "d",
            "text": "A detailed account of every other unrelated topic discussed in the session while leaving out the disclosure and the report entirely",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Omits the critical event.",
            "explanation": {
              "approach": "Misprioritized note",
              "rationale": "Buries the key event",
              "keyIndicators": [
                "mis-emphasis"
              ],
              "commonMistake": "Charting around the disclosure"
            }
          }
        ]
      }
    ]
  }
];

module.exports = { GENERATED_CASES };
