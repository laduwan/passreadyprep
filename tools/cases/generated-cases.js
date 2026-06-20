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
      "intake": "A 68-year-old African American retired postal worker presents at his daughter's urging, voicing distrust of clinics after past dismissive care, and reporting six weeks of low mood, fatigue, and lost interest in church choir.",
      "session1": "He describes early-morning waking, guilt over 'failing' his late wife, poor concentration, and weight loss, while insisting his pastor and prayer should be enough and questioning whether counseling respects his faith.",
      "session2": "He acknowledges recurrent depressive episodes since his wife's death two years ago, denies active suicidal intent but admits passive wishes, and agrees to involve his faith community as a support resource."
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
      "intake": "A 41-year-old Spanish-dominant Latina woman attends with her teenage son interpreting, reporting eight months of constant worry about family, finances, and health that she cannot control or quiet.",
      "session1": "With a qualified interpreter she describes muscle tension, restlessness, irritability, fatigue, and trouble sleeping, noting she prioritizes family needs over her own and feels guilty for seeking help.",
      "session2": "She reports the worry spans many domains most days, denies discrete panic attacks, and identifies familismo and her faith as sources of strength she wants honored in treatment."
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
      "intake": "A 29-year-old transgender man seeks counseling after an assault eight months ago, reporting nightmares, hypervigilance, and avoidance, and asks directly whether the clinician offers affirming care.",
      "session1": "He describes intrusive memories, exaggerated startle, emotional numbing, and avoidance of places resembling the assault, alongside chronic minority stress from misgendering and prior invalidating providers.",
      "session2": "He reports negative beliefs about safety and self-blame, sleep disruption, and concentration problems persisting well beyond a month, and expresses fear that disclosing his identity will compromise his care."
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
      "intake": "A 37-year-old first-generation immigrant from West Africa presents after a workplace referral, reluctant and worried about stigma, reporting heavy daily drinking that began amid acculturative stress.",
      "session1": "He describes tolerance, morning drinking to steady himself, failed attempts to cut down, neglected work duties, and cravings, while fearing his community would shame him for seeking help.",
      "session2": "He reports continued use despite marital and liver-health consequences, withdrawal shakes when abstinent, and ambivalence about change, noting he feels isolated far from extended family supports."
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
      "intake": "A 26-year-old low-income woman in a rural county seeks telehealth counseling, reporting intense unstable relationships, fears of abandonment, and rapid mood shifts, with no DBT specialist within driving distance.",
      "session1": "She describes chronic emptiness, impulsive spending and conflict, identity confusion, and recurrent self-harm urges, noting that the nearest specialty clinic is hours away and unaffordable.",
      "session2": "She reports mood swings that last hours and reset with interpersonal events, a long-standing pattern since adolescence, and asks whether meaningful treatment is even possible over video."
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
      "intake": "A 34-year-old military veteran is brought by his spouse, reporting a week of little sleep, racing thoughts, grandiose business plans, and rapid speech, while resisting VA care due to stigma.",
      "session1": "He describes elevated mood, increased goal-directed activity, distractibility, impulsive large purchases, and inflated self-esteem, insisting nothing is wrong and that seeking help signals weakness.",
      "session2": "His spouse reports the change is marked and uncharacteristic, lasting over a week with functional impairment, and notes a prior depressive period two years earlier following deployment."
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
      "intake": "A 24-year-old Asian American man presents with his parents, who emphasize headaches and stomach problems, while he describes persistent voices and a belief that neighbors monitor him through his body.",
      "session1": "He reports auditory hallucinations, persecutory delusions, disorganized speech, and social withdrawal over eight months, with the family framing distress somatically and voicing shame about mental illness.",
      "session2": "Symptoms have persisted well beyond six months with marked functional decline in work and relationships, and the family asks whether help can avoid bringing shame to the household."
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
      "intake": "A 31-year-old Native American woman seeks help for intrusive contamination thoughts and hours of washing, expressing concern that counseling might conflict with her cultural ceremonies and healing practices.",
      "session1": "She describes recurrent unwanted thoughts she recognizes as excessive, compulsive cleaning rituals that consume hours, and distress, noting that traditional ceremony brings her meaning amid historical trauma.",
      "session2": "She reports the rituals interfere with work and family, that she resists but cannot stop them, and asks whether treatment can coexist with her community's ceremonial healing."
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
      "intake": "A 28-year-old adult who uses a wheelchair seeks help for lifelong inattention and restlessness affecting work, and asks whether the office and process are accessible to him.",
      "session1": "He describes childhood-onset distractibility, disorganization, fidgeting, interrupting, and difficulty sustaining attention, noting prior clinicians focused on his disability rather than his attention concerns.",
      "session2": "He reports symptoms across home and work settings since childhood, significant functional impact, and frustration that accessibility barriers and assumptions have delayed an accurate evaluation."
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
      "intake": "A 22-year-old observant religious young woman is referred by her physician for concerns about her eating, expressing that her practices feel tied to discipline and devotion within her faith community.",
      "session1": "She describes intense fear of gaining weight, a distorted body image, and an overvaluation of control, framing food restriction in spiritual language while denying any clinical problem.",
      "session2": "She reports significant health worries raised by her physician, distress about losing control, and openness to support that respects her faith and involves trusted spiritual mentors."
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
      "intake": "A 71-year-old African American woman presents after a bereavement, voicing distrust of mental health services, disclosing recent thoughts of not wanting to live, and emphasizing her faith and church family.",
      "session1": "She describes passive and emerging active suicidal thoughts, hopelessness, and isolation since her husband's death, while questioning whether the counselor understands her community and her faith.",
      "session2": "On structured screening she endorses ideation with some intent but no specific plan, identifies her pastor and grandchildren as reasons for living, and agrees to collaborative safety planning."
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
      "intake": "Rosa, a 41-year-old Spanish-dominant Latina woman, reports feeling down on most days for over four years, with low energy and poor self-esteem but no clear onset.",
      "session1": "Rosa describes chronic fatigue, hopelessness, and difficulty concentrating that she frames as her normal way of being. She prioritizes family obligations over her own needs and avoids discussing distress openly.",
      "session2": "Rosa states symptoms have never fully lifted for more than a few weeks. She prefers sessions in Spanish and worries that involving her family may bring shame."
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
      "intake": "Jordan, a 26-year-old non-binary person, reports intense fear in social and performance situations and avoids classes and meetings due to fear of being judged or scrutinized.",
      "session1": "Jordan describes blushing, racing heart, and dread before speaking in groups, plus heightened vigilance about how others perceive their gender presentation.",
      "session2": "Jordan links some anxiety to minority stress and past experiences of judgment, while also noting fear of evaluation predates and exceeds identity-related concerns."
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
      "intake": "Maria, a 33-year-old first-generation immigrant from Central America, presents two weeks after a violent robbery with intrusive memories, nightmares, hypervigilance, and a sense of detachment.",
      "session1": "Maria reports trouble sleeping, startle responses, and avoidance of the area where the event occurred. She is wary of institutions and hesitant to share details with authorities.",
      "session2": "Maria worries about confidentiality and immigration consequences. Her symptoms began within days of the event and have persisted for two weeks."
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
      "intake": "Daniel, a 38-year-old low-income man in a rural county, reports daily opioid use, failed efforts to cut down, tolerance, withdrawal, and use despite job loss and family strain.",
      "session1": "Daniel endorses cravings, continued use despite harm, and at least eight criteria. The nearest methadone clinic is two hours away and he has no reliable transportation.",
      "session2": "Daniel is motivated but discouraged by limited MAT access and cost. He fears withdrawal and worries about being judged in his small community."
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
      "intake": "Marcus, a 45-year-old military veteran, seeks help after civilian job conflicts. He describes himself as superior to coworkers and entitled to leadership roles he has not earned.",
      "session1": "Marcus shows grandiosity, need for admiration, and limited empathy. He reacts to criticism with anger and devalues others, struggling to adapt to civilian hierarchy.",
      "session2": "Marcus reports longstanding patterns across settings, predating service. He minimizes others' contributions and feels civilians fail to recognize his exceptional abilities."
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
      "intake": "Linh, a 29-year-old Asian American woman, reports recurrent depression and periods of elevated energy and reduced sleep, often presenting her distress through headaches and fatigue.",
      "session1": "Linh describes discrete hypomanic periods lasting several days with increased activity and confidence, never requiring hospitalization, alternating with longer depressive episodes.",
      "session2": "Linh feels pressure to meet family expectations and frames symptoms somatically. Her hypomanic episodes are noticeable to others but never markedly impairing or psychotic."
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
      "intake": "Joseph, a 34-year-old Indigenous man, reports manic and depressive episodes alongside hallucinations and delusions that persist even when his mood is stable for weeks at a time.",
      "session1": "Joseph describes auditory hallucinations during euthymic periods plus distinct mood episodes. He references historical trauma and disconnection from community healing practices.",
      "session2": "Joseph values traditional healing and community ties. Psychotic symptoms occur both with and independent of mood episodes, persisting beyond mood disturbances."
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
      "intake": "An adult son who uses a wheelchair brings his 78-year-old mother, who shows progressive memory loss, disorientation, and declining independence over two years, interfering with daily living.",
      "session1": "The mother shows gradual, insidious cognitive decline without fluctuating attention. The son reports significant caregiver burden and accessibility challenges in providing daily care.",
      "session2": "Cognitive deficits are persistent and progressive, not better explained by depression or delirium. The son feels overwhelmed and isolated managing care with his own disability."
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
      "intake": "David, a 52-year-old observant religious man, reports persistent stomach and back pain with disproportionate worry and time devoted to his symptoms despite reassuring medical evaluations.",
      "session1": "David describes excessive thoughts about his symptoms and high health anxiety. He interprets his suffering through his faith and frames symptoms as spiritual tests.",
      "session2": "David's symptoms are real and distressing, with persistent disproportionate concern for over six months. He wants his faith respected within treatment."
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
      "intake": "Andre, a 16-year-old African American adolescent, is referred after a pattern of fighting, truancy, and rule violations beginning after age ten, amid harsh school discipline.",
      "session1": "Andre shows a repetitive pattern of behavior violating others' rights and norms over the past year. He describes mistrust of school staff and experiences of unfair treatment.",
      "session2": "Andre's behaviors began in adolescence, not early childhood. He reports systemic pressures, racial bias in discipline, and feeling misunderstood by adults around him."
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
      "intake": "Sofia, a 15-year-old Spanish-dominant Latina adolescent, presents after a teacher noticed signs of self-injury. She reports using self-harm to cope with emotional distress without intent to die.",
      "session1": "Sofia describes self-injury to regulate overwhelming emotions and denies suicidal intent. She fears bringing shame to her family and prefers communicating in Spanish.",
      "session2": "Sofia's behavior functions to relieve distress, not to end her life. She worries about confidentiality, family reactions, and being misunderstood due to language barriers."
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
      "intake": "A 32-year-old lesbian woman presents six weeks after the birth of her child, carried by her wife. She reports persistent low mood, tearfulness, anhedonia, guilt about not bonding, and disrupted sleep beyond infant care demands.",
      "session1": "She describes feeling invisible as the non-gestational parent and minority stress from family who question her role. She denies prior mood episodes but endorses worthlessness, fatigue, and passive thoughts that her family would be fine without her.",
      "session2": "Symptoms have persisted daily for over two weeks with functional impairment. She denies active suicidal plan or intent. She expresses isolation from affirming support and fear of being judged as an unfit parent if she discloses her struggles."
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
      "intake": "A 38-year-old first-generation man from Southeast Asia reports an intense, persistent fear of dogs that interferes with walking to work. He immigrated three years ago and describes ongoing acculturative stress and reluctance to seek care.",
      "session1": "He explains that exposure to any dog provokes immediate panic, sweating, and avoidance, and that his fear is tied to childhood beliefs in his culture of origin. He worries that seeking counseling marks him as weak among his community.",
      "session2": "The fear has persisted for years, is recognized by him as excessive, and is cued specifically by dogs rather than general worry. He avoids parks and certain streets, limiting his daily functioning and increasing his isolation."
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
      "intake": "A 68-year-old low-income woman in a remote rural area presents 18 months after her husband's death. She reports intense daily yearning, preoccupation with him, and difficulty accepting the loss, with few local grief services available.",
      "session1": "She describes emotional numbness, avoidance of reminders, and a sense that life is meaningless without him. Geographic isolation limits her contact with others, and she drives over an hour to reach any mental health provider.",
      "session2": "Her grief reactions have persisted far beyond cultural expectations and impair her daily functioning. She denies pervasive mood disturbance unrelated to the loss and reports her distress is centered specifically on her husband's death."
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
      "intake": "A 41-year-old high-functioning military veteran reports escalating cocaine use to manage work stress. He maintains employment but describes craving, tolerance, and failed attempts to cut down, and is reluctant to engage with VA services.",
      "session1": "He reports using more than intended, continued use despite conflict with his spouse, and significant time spent obtaining and recovering from the substance. He frames use as stress relief and is ambivalent about changing.",
      "session2": "He acknowledges the pattern is harming his health and marriage but is not yet ready to commit to abstinence. He expresses distrust of the VA system and prefers community-based options, weighing pros and cons of change."
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
      "intake": "A 29-year-old Asian American man is referred after legal trouble. He reports a longstanding pattern of deceit, impulsivity, irritability, and disregard for others' rights since adolescence, alongside intense pressure from his family to conform.",
      "session1": "He describes repeated rule violations, lack of remorse, and exploitation of others, with documented conduct problems before age 15. He frames his behavior partly as rebellion against rigid collectivist family expectations.",
      "session2": "He shows little genuine concern for the harm caused and externalizes blame. He is over 18 with evidence of conduct disorder onset before 15, and his pattern is pervasive across settings rather than limited to discrete episodes."
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
      "intake": "A 72-year-old Indigenous elder is referred by a concerned relative because possessions fill the living space. The elder reports persistent difficulty discarding items and significant distress at the thought of parting with them.",
      "session1": "Some items hold cultural and ceremonial meaning, while many others are unused and create clutter that limits use of rooms. The elder describes strong community ties and reluctance to involve outside agencies due to historical mistrust.",
      "session2": "The accumulation is driven by perceived need to save and distress on discarding, not by intrusive obsessions or memory loss. Functional areas of the home are congested, and the elder recognizes the situation strains family relationships."
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
      "intake": "A 27-year-old adult with a physical disability presents with recurrent episodes of loss-of-control eating followed by compensatory behaviors. They describe significant distress about body image shaped by both disability and appearance-related messages.",
      "session1": "They report that episodes occur regularly and are tied to self-worth being unduly influenced by body shape. They describe feeling that their body is judged through an ableist lens, intensifying shame and secrecy around eating.",
      "session2": "Their weight is within a typical range, and the pattern reflects binge episodes with compensatory behavior rather than restriction-driven low weight. They express readiness to address the cycle in an affirming, non-stigmatizing environment."
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
      "intake": "A 34-year-old observant religious client reports distinct shifts in identity, recurrent memory gaps, and finding unfamiliar items they cannot recall acquiring. They interpret some experiences through a faith-based lens and fear being misunderstood.",
      "session1": "They describe two or more distinct personality states with discontinuity in sense of self and agency, plus amnesia for everyday events. They worry that integration would conflict with their religious understanding of the self.",
      "session2": "The presentation reflects identity disruption and dissociative amnesia rather than psychosis or solely mood-driven identity instability. They value co-consciousness language and want care that respects their faith while addressing trauma history."
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
      "intake": "A 66-year-old African American woman reports difficulty initiating and maintaining sleep most nights for the past year. She experiences daytime fatigue and irritability and feels stigma about discussing mental health concerns.",
      "session1": "She describes dissatisfaction with sleep occurring at least three nights weekly, with adequate opportunity to sleep. She draws strength from her faith community but has not shared her struggles, fearing she will be seen as weak.",
      "session2": "The difficulty is not better explained by pervasive low mood, generalized worry, or a shifted sleep-wake schedule. She is open to behavioral strategies and values approaches that honor her faith and community supports."
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
      "intake": "A 16-year-old Spanish-dominant Latina transgender adolescent presents with marked distress about incongruence between experienced gender and assigned sex. She reports a strong, persistent cross-gender identity and fears rejection from her religious family.",
      "session1": "She describes longstanding discomfort with assigned-sex characteristics and a deep desire to be recognized as her affirmed gender. Family tension and possible rejection heighten her distress, and language access shapes her engagement.",
      "session2": "Her distress reflects gender incongruence and associated impairment rather than appearance-focused preoccupation or a brief stressor reaction. She expresses interest in affirming support and safety planning amid family rejection risk."
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
      "intake": "A 30-year-old gay man presents in acute distress after a relationship betrayal. During the session he voices a credible, specific threat to harm an identifiable former partner, naming the person and describing intent and means.",
      "session1": "He reports access to means and a clear plan, expressing serious intent to act soon. He also describes minority stress and prior reluctance to seek care, but the immediate clinical concern is the specific, credible threat he has disclosed.",
      "session2": "The counselor must weigh confidentiality against the duty to protect an identifiable third party under applicable law. The presentation is an ethical dilemma rather than a primary anxiety, adjustment, or impulse-control disorder."
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
  }
];

module.exports = { GENERATED_CASES };
