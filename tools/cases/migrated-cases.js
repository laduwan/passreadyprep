// migrated-cases.js
// Cases ported from the legacy v4 prototype into the current strict schema.
// Loaded by tools/cases/importCases.js and imported as status 'sme_review'.
// 10 cases: ncmhce-G035, ncmhce-G036, ncmhce-G037, ncmhce-G038, ncmhce-G039, ncmhce-G040, ncmhce-G041, ncmhce-G042, ncmhce-G043, ncmhce-G044
// All pass validateCase() under strictItemQuality:true (zero errors, zero warnings).

const MIGRATED_CASES = [
  {
    "id": "ncmhce-G035",
    "title": "Adult Depression with Caregiver Stress",
    "category": "Depressive",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Major Depressive Disorder, Single Episode, Moderate",
      "code": "F32.1"
    },
    "diagnosis": {
      "name": "Major Depressive Disorder, Single Episode, Moderate",
      "code": "F32.1"
    },
    "differentialOptions": [
      {
        "id": "mdd",
        "name": "Major Depressive Disorder",
        "isCorrect": true
      },
      {
        "id": "gad",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "adjustment",
        "name": "Adjustment Disorder with Depressed Mood",
        "isCorrect": false
      },
      {
        "id": "pdd",
        "name": "Persistent Depressive Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Maria, 34, a married Latina elementary teacher and mother of two (ages 6 and 9), is referred by her PCP for three months of persistent sadness and declining work function. Symptoms began after her mother was diagnosed with Alzheimer's. She is tearful, makes limited eye contact, and speaks softly.",
      "session1": "Maria reports depressed mood, anhedonia, fatigue, poor concentration, worthlessness, an 8-pound weight loss, and insomnia. She describes passive suicidal ideation (\"it would be easier if I didn't wake up\") but denies intent or plan and says she would never act because of her children. Her marriage is supportive, but there is sibling conflict over her mother's care.",
      "session2": "She attempted behavioral activation but found it hard, managing one walk before fatigue stopped her, and called in sick twice. Her husband has taken on more and seems frustrated; Maria feels guilty and worries she is a burden. She remains tearful but engaged in the work."
    },
    "diagnosticRationale": "Maria meets MDD criteria: five or more symptoms present for at least two weeks at moderate severity, including depressed mood and anhedonia. It is not Adjustment Disorder because full MDD criteria are met, and not Persistent Depressive Disorder because the course is only three months. Generalized worry is secondary to the mood episode rather than free-floating.",
    "questions": [
      {
        "id": "q1",
        "domain": "treatment",
        "question": "Which treatment approach is MOST appropriate for moderate MDD?",
        "options": [
          {
            "id": "a",
            "text": "CBT with behavioral activation, scheduling mastery and pleasure activities",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Behavioral activation is a first-line, evidence-based approach for moderate MDD.",
            "explanation": {
              "approach": "Use structured CBT and schedule rewarding, mastery-building activities.",
              "rationale": "Behavioral activation directly counters withdrawal and anhedonia and is well supported for moderate depression.",
              "keyIndicators": [
                "Anhedonia and social withdrawal",
                "Functioning declining at work and home"
              ],
              "commonMistake": "Choosing an unstructured or insight-only therapy when a protocol-driven approach is indicated."
            }
          },
          {
            "id": "b",
            "text": "Psychoanalytic therapy focused on early childhood conflict and transference",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Insight-oriented analysis is not first-line for moderate MDD and delays relief.",
            "explanation": {
              "approach": "Pursue long-term exploration of unconscious conflict.",
              "rationale": "This lacks first-line evidence for moderate MDD and postpones active symptom relief.",
              "keyIndicators": [
                "Acute functional impairment needing timely help"
              ],
              "commonMistake": "Defaulting to depth work when an active, structured protocol is indicated."
            }
          },
          {
            "id": "c",
            "text": "Supportive counseling alone, providing empathy without a structured protocol",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Support is necessary but insufficient as the sole treatment here.",
            "explanation": {
              "approach": "Offer warmth and validation without a specific protocol.",
              "rationale": "Empathy aids engagement but does not deliver the active ingredients depression care requires.",
              "keyIndicators": [
                "Clear, treatable depressive episode"
              ],
              "commonMistake": "Mistaking rapport for treatment of a protocol-responsive condition."
            }
          },
          {
            "id": "d",
            "text": "Immediate referral to intensive outpatient programming for daily structure",
            "isCorrect": false,
            "weight": 0,
            "rationale": "IOP is a higher level of care than this moderate, outpatient case requires.",
            "explanation": {
              "approach": "Escalate to a daily structured program.",
              "rationale": "Moderate MDD with protective factors is appropriately treated in routine outpatient care.",
              "keyIndicators": [
                "Moderate severity with no acute risk"
              ],
              "commonMistake": "Over-escalating level of care without an acuity indication."
            }
          }
        ],
        "evidenceRef": [
          "R2",
          "R1"
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "Maria reports passive suicidal ideation with strong protective factors. What is the BEST next step?",
        "options": [
          {
            "id": "a",
            "text": "Arrange immediate involuntary hospitalization for any suicidal ideation present",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reflexive hospitalization for passive ideation is disproportionate and harms rapport.",
            "explanation": {
              "approach": "Escalate to inpatient on the basis of ideation alone.",
              "rationale": "Passive ideation with protective factors does not meet criteria for involuntary care and can damage the alliance.",
              "keyIndicators": [
                "Passive ideation without intent or plan",
                "Children as a protective factor"
              ],
              "commonMistake": "Equating any ideation with imminent risk."
            }
          },
          {
            "id": "b",
            "text": "Complete a collaborative safety assessment and build a safety plan",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Collaborative assessment and safety planning fit passive ideation with protective factors.",
            "explanation": {
              "approach": "Assess risk together and co-create a written safety plan.",
              "rationale": "Stepped risk assessment and safety planning are the guideline-concordant response to passive ideation.",
              "keyIndicators": [
                "Passive SI without intent",
                "Identifiable protective factors"
              ],
              "commonMistake": "Skipping a structured assessment in either direction."
            }
          },
          {
            "id": "c",
            "text": "Document the passive ideation and continue the session as planned",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Documenting without assessing or planning leaves the risk unaddressed.",
            "explanation": {
              "approach": "Note the statement and move on.",
              "rationale": "Disclosed ideation warrants active assessment, not passive documentation.",
              "keyIndicators": [
                "Disclosed suicidal ideation"
              ],
              "commonMistake": "Treating documentation as a substitute for a risk response."
            }
          },
          {
            "id": "d",
            "text": "Defer all action and refer her to a psychiatrist before proceeding",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Deferring the counselor's own risk response is not appropriate here.",
            "explanation": {
              "approach": "Hand off risk to a prescriber.",
              "rationale": "Risk assessment and safety planning are within the counselor's scope and should not be deferred.",
              "keyIndicators": [
                "Counselor can assess and plan now"
              ],
              "commonMistake": "Outsourcing immediate risk steps that are within scope."
            }
          }
        ],
        "evidenceRef": [
          "R4"
        ]
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "Maria struggles to complete her behavioral activation homework. What is the MOST therapeutic response?",
        "options": [
          {
            "id": "a",
            "text": "Explore the barriers together and break the task into smaller steps",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Collaborative problem-solving with graded tasks addresses the barrier directly.",
            "explanation": {
              "approach": "Examine the obstacles and scale tasks down to achievable steps.",
              "rationale": "Grading tasks and exploring barriers is the standard way to restore behavioral activation.",
              "keyIndicators": [
                "Fatigue limiting activity",
                "Engaged but stuck on homework"
              ],
              "commonMistake": "Pushing the same task harder instead of grading it."
            }
          },
          {
            "id": "b",
            "text": "Tell her she simply needs to try harder before the next session",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Exhortation increases guilt and ignores the actual barriers.",
            "explanation": {
              "approach": "Apply pressure to comply.",
              "rationale": "Blaming effort worsens self-criticism and does not solve the obstacle.",
              "keyIndicators": [
                "Existing guilt and self-blame"
              ],
              "commonMistake": "Confusing motivation with capacity in depression."
            }
          },
          {
            "id": "c",
            "text": "Drop the homework approach since it is clearly not working yet",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Abandoning a first-line technique after one setback is premature.",
            "explanation": {
              "approach": "Discard behavioral activation.",
              "rationale": "A single difficulty calls for adjustment, not abandonment of an evidence-based method.",
              "keyIndicators": [
                "Early in the course of treatment"
              ],
              "commonMistake": "Dropping a sound technique at the first obstacle."
            }
          },
          {
            "id": "d",
            "text": "Reinterpret the difficulty as evidence of a more severe depressive episode",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Reframing a normal setback as worsening is an unsupported leap.",
            "explanation": {
              "approach": "Upgrade the severity label.",
              "rationale": "Homework difficulty is expected in depression and is not by itself a severity marker.",
              "keyIndicators": [
                "Expected ambivalence and fatigue"
              ],
              "commonMistake": "Over-pathologizing ordinary treatment friction."
            }
          }
        ],
        "evidenceRef": [
          "R2"
        ]
      },
      {
        "id": "q4",
        "domain": "ethics",
        "question": "Maria asks you to speak with her husband about her care. What should you do FIRST?",
        "options": [
          {
            "id": "a",
            "text": "Schedule a joint session with her husband at the next visit",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Acting before consent and scope are clarified skips a required step.",
            "explanation": {
              "approach": "Move straight to a joint meeting.",
              "rationale": "A joint session may be reasonable later, but only after consent and scope are addressed.",
              "keyIndicators": [
                "No written consent on file yet"
              ],
              "commonMistake": "Proceeding to contact before authorization."
            }
          },
          {
            "id": "b",
            "text": "Discuss the request, obtain written consent, and clarify its scope",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Written, informed consent must precede any third-party contact.",
            "explanation": {
              "approach": "Talk through the request and document authorization and limits.",
              "rationale": "Informed consent and a clear scope are required before disclosing to or working with family.",
              "keyIndicators": [
                "Client-initiated third-party contact"
              ],
              "commonMistake": "Treating verbal agreement as sufficient authorization."
            }
          },
          {
            "id": "c",
            "text": "Explain that you are ethically barred from any family contact",
            "isCorrect": false,
            "weight": -1,
            "rationale": "A blanket prohibition misstates the ethics; contact is allowed with consent.",
            "explanation": {
              "approach": "Refuse all family involvement.",
              "rationale": "Family contact is permissible with the client's informed, written consent.",
              "keyIndicators": [
                "Client wants appropriate involvement"
              ],
              "commonMistake": "Overstating confidentiality as an absolute bar."
            }
          },
          {
            "id": "d",
            "text": "Decline and suggest she share the session materials herself instead",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Deflecting avoids the consent process the client actually requested.",
            "explanation": {
              "approach": "Redirect the task back to the client.",
              "rationale": "This sidesteps a legitimate, consent-based request rather than handling it properly.",
              "keyIndicators": [
                "Reasonable request for coordination"
              ],
              "commonMistake": "Avoiding the consent conversation altogether."
            }
          }
        ],
        "evidenceRef": [
          "R3"
        ]
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "After three weeks of CBT, improvement is limited. What is the BEST adjustment?",
        "options": [
          {
            "id": "a",
            "text": "Switch your theoretical orientation and restart treatment from scratch",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Abandoning a first-line approach after three weeks is premature.",
            "explanation": {
              "approach": "Replace the whole treatment model.",
              "rationale": "Three weeks is too early to judge CBT a failure or to discard it wholesale.",
              "keyIndicators": [
                "Only three weeks elapsed"
              ],
              "commonMistake": "Switching models before an adequate trial."
            }
          },
          {
            "id": "b",
            "text": "Add a psychiatric consultation to consider adjunctive medication",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Combined treatment improves outcomes for partial response in moderate MDD.",
            "explanation": {
              "approach": "Augment therapy with a medication evaluation.",
              "rationale": "Adding pharmacotherapy is guideline-concordant when psychotherapy yields a partial response.",
              "keyIndicators": [
                "Partial response so far",
                "Moderate severity"
              ],
              "commonMistake": "Persisting with monotherapy despite limited gains."
            }
          },
          {
            "id": "c",
            "text": "Increase session frequency to twice weekly without other changes",
            "isCorrect": false,
            "weight": 0,
            "rationale": "More sessions alone may help but is not the best-supported next step.",
            "explanation": {
              "approach": "Intensify the same intervention.",
              "rationale": "Frequency can be adjusted, but augmentation has stronger support for partial response.",
              "keyIndicators": [
                "Limited gains after three weeks"
              ],
              "commonMistake": "Adding more of the same approach instead of augmenting."
            }
          },
          {
            "id": "d",
            "text": "Continue unchanged, since CBT typically needs twelve to sixteen weeks",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Watchful waiting is defensible but passive given residual ideation.",
            "explanation": {
              "approach": "Stay the course without changes.",
              "rationale": "Continuing is reasonable, but with residual passive ideation an active augmentation step is preferable.",
              "keyIndicators": [
                "Residual passive ideation"
              ],
              "commonMistake": "Waiting passively when augmentation is indicated."
            }
          }
        ],
        "evidenceRef": [
          "R2",
          "R4"
        ]
      }
    ],
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "MDD: five or more symptoms over two-plus weeks including depressed mood or anhedonia; moderate severity; rule out Adjustment Disorder and Persistent Depressive Disorder."
      },
      {
        "id": "R2",
        "source": "APA CPG",
        "detail": "Depression: cognitive behavioral therapy with behavioral activation is first-line; add pharmacotherapy when psychotherapy yields a partial response."
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Informed, written consent and clear scope of services are required before disclosing to or coordinating with third parties (A.2, B.6)."
      },
      {
        "id": "R4",
        "source": "VA/DoD CPG",
        "detail": "Suicide risk: use collaborative assessment and safety planning; reserve higher levels of care for acute risk rather than passive ideation with strong protective factors."
      }
    ]
  },
  {
    "id": "ncmhce-G036",
    "title": "Pervasive Worry with Situational Panic",
    "category": "Anxiety",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Generalized Anxiety Disorder with Panic Attacks",
      "code": "F41.1"
    },
    "diagnosis": {
      "name": "Generalized Anxiety Disorder with Panic Attacks",
      "code": "F41.1"
    },
    "differentialOptions": [
      {
        "id": "gad",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": true
      },
      {
        "id": "panic",
        "name": "Panic Disorder",
        "isCorrect": false
      },
      {
        "id": "social",
        "name": "Social Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "adjustment",
        "name": "Adjustment Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "James, 28, an Asian American software engineer, says constant worrying is ruining his life. For over a year he has had trouble concentrating, muscle tension, irritability, and poor sleep, with worry spanning work, health, finances, and relationships. He has had panic attacks in meetings and now avoids presenting.",
      "session1": "He describes a family culture that prized achievement and a feeling of never being good enough despite excellent reviews. He drinks two to three energy drinks daily and three to four alcoholic drinks several nights a week to take the edge off. He has never sought treatment and feels ashamed of needing help.",
      "session2": "He reports that deep breathing made his anxiety worse because it made him focus on his body. After a panic attack while driving, he now takes back roads, and his alcohol use has risen to four or five drinks. He asks whether you can prescribe medication."
    },
    "diagnosticRationale": "GAD fits: excessive, hard-to-control worry across multiple domains for more than six months with several somatic symptoms. His panic attacks are situationally triggered rather than unexpected, which argues against Panic Disorder, and the worry is diffuse rather than purely social.",
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "What is the PRIORITY assessment area at intake?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "His daily energy-drink and escalating alcohol use",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Substance use can both mimic and maintain anxiety, so assess it first.",
            "explanation": {
              "approach": "Map caffeine and alcohol intake against symptom timing.",
              "rationale": "Heavy caffeine and nightly, rising alcohol can generate and sustain anxiety, making them the first thing to assess.",
              "keyIndicators": [
                "Two to three energy drinks daily",
                "Alcohol use escalating"
              ],
              "commonMistake": "Treating the anxiety while missing an active substance driver."
            }
          },
          {
            "id": "b",
            "text": "A full history of any childhood trauma and early adversity",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Relevant later, but not the first priority given active substance use.",
            "explanation": {
              "approach": "Open an early-history exploration.",
              "rationale": "Trauma history can matter, but it ranks below substances that are actively shaping current symptoms.",
              "keyIndicators": [
                "No trauma cues reported"
              ],
              "commonMistake": "Prioritizing distal history over an active maintaining factor."
            }
          },
          {
            "id": "c",
            "text": "The current state and history of his romantic relationships",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Relationships are one worry domain, not the maintaining factor.",
            "explanation": {
              "approach": "Center the intake on relationship patterns.",
              "rationale": "This chases content rather than the factor maintaining the anxiety.",
              "keyIndicators": [
                "Worry spans many domains"
              ],
              "commonMistake": "Pursuing a content area instead of a maintaining factor."
            }
          },
          {
            "id": "d",
            "text": "His long-term career goals and professional ambitions ahead",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Career goals are tangential to the immediate clinical priority.",
            "explanation": {
              "approach": "Explore vocational planning.",
              "rationale": "Goals are not what is maintaining the anxiety right now.",
              "keyIndicators": [
                "Performing well despite anxiety"
              ],
              "commonMistake": "Drifting into coaching during a clinical intake."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "core",
        "question": "James voices shame about needing help. What is the BEST response?",
        "evidenceRef": [
          "R4"
        ],
        "options": [
          {
            "id": "a",
            "text": "Reassure him there is nothing at all to be ashamed of",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Blanket reassurance can shut down exploration of the shame.",
            "explanation": {
              "approach": "Offer quick reassurance.",
              "rationale": "Telling him not to feel shame dismisses rather than explores its cultural meaning.",
              "keyIndicators": [
                "Shame tied to needing help"
              ],
              "commonMistake": "Reassuring an emotion away instead of exploring it."
            }
          },
          {
            "id": "b",
            "text": "Explore the cultural messages he absorbed about self-reliance",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Exploring the cultural meaning validates him and opens the work.",
            "explanation": {
              "approach": "Invite reflection on family and cultural achievement messages.",
              "rationale": "Naming the cultural roots of the shame validates him and supports engagement.",
              "keyIndicators": [
                "Family culture prized achievement",
                "Feels never good enough"
              ],
              "commonMistake": "Skipping the cultural frame that gives the shame meaning."
            }
          },
          {
            "id": "c",
            "text": "Point out that many high-achievers quietly struggle as well",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Normalizing is gentle but generic and skips his meaning.",
            "explanation": {
              "approach": "Universalize the experience.",
              "rationale": "Normalizing can comfort but bypasses his specific cultural narrative.",
              "keyIndicators": [
                "Pride in achievement"
              ],
              "commonMistake": "Generic normalizing instead of individualized exploration."
            }
          },
          {
            "id": "d",
            "text": "Steer him back to symptoms and away from these feelings",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Avoiding the affect invalidates him and weakens the alliance.",
            "explanation": {
              "approach": "Redirect from emotion to symptom checklists.",
              "rationale": "Cutting off the feeling signals the shame is unwelcome and harms rapport.",
              "keyIndicators": [
                "Already ashamed to seek help"
              ],
              "commonMistake": "Treating emotion as a detour rather than the work."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "Deep breathing \"made it worse.\" What is the BEST approach?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Quietly switch him to a different relaxation technique instead",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Switching without understanding misses the teachable mechanism.",
            "explanation": {
              "approach": "Swap the skill with no explanation.",
              "rationale": "Changing tools without addressing interoceptive sensitivity wastes a learning moment.",
              "keyIndicators": [
                "Body focus increased anxiety"
              ],
              "commonMistake": "Substituting techniques without psychoeducation."
            }
          },
          {
            "id": "b",
            "text": "Explore it, explain interoceptive sensitivity, and consider exposure",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Psychoeducation about interoception turns the setback into treatment.",
            "explanation": {
              "approach": "Normalize the reaction and use it to introduce interoceptive exposure.",
              "rationale": "Heightened body focus worsening anxiety is common and is the entry point for exposure.",
              "keyIndicators": [
                "Anxiety rose when attending to the body"
              ],
              "commonMistake": "Reading the reaction as failure rather than information."
            }
          },
          {
            "id": "c",
            "text": "Tell him he must have performed the technique incorrectly",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Blaming his technique is invalidating and likely inaccurate.",
            "explanation": {
              "approach": "Attribute the result to user error.",
              "rationale": "The worsening reflects interoceptive sensitivity, not poor execution.",
              "keyIndicators": [
                "Genuine effort reported"
              ],
              "commonMistake": "Faulting the client for a predictable response."
            }
          },
          {
            "id": "d",
            "text": "Conclude he needs medication rather than any therapy skills",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Jumping to medication abandons an effective behavioral path.",
            "explanation": {
              "approach": "Reframe the setback as a reason to medicate.",
              "rationale": "One difficult skill attempt does not mean therapy cannot help.",
              "keyIndicators": [
                "Early in skills training"
              ],
              "commonMistake": "Over-reading a setback as treatment failure."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "ethics",
        "question": "James asks whether you can prescribe medication. What is the BEST response?",
        "evidenceRef": [
          "R4"
        ],
        "options": [
          {
            "id": "a",
            "text": "Clarify that you cannot prescribe and offer a psychiatry referral",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Stating scope and referring is the accurate, ethical response.",
            "explanation": {
              "approach": "Name your scope and connect him to a prescriber.",
              "rationale": "Counselors do not prescribe; clarifying scope and referring is correct.",
              "keyIndicators": [
                "Client requesting medication"
              ],
              "commonMistake": "Blurring scope of practice."
            }
          },
          {
            "id": "b",
            "text": "Tell him medication is unnecessary and discourage it outright",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Discouraging medication oversteps both scope and evidence.",
            "explanation": {
              "approach": "Advise against medication.",
              "rationale": "Whether to medicate is a prescriber's decision; discouraging it exceeds scope.",
              "keyIndicators": [
                "Functional impairment present"
              ],
              "commonMistake": "Giving a medication opinion outside scope."
            }
          },
          {
            "id": "c",
            "text": "Suggest he simply ask his primary care provider about it",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Deflecting to the PCP is incomplete though not harmful.",
            "explanation": {
              "approach": "Redirect to primary care.",
              "rationale": "A PCP can help, but a clear scope statement plus a targeted referral serves him better.",
              "keyIndicators": [
                "No prescriber yet"
              ],
              "commonMistake": "Deferring without clarifying scope."
            }
          },
          {
            "id": "d",
            "text": "Warn him that medication will interfere with the therapy work",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Claiming interference is unsupported and discourages care.",
            "explanation": {
              "approach": "Frame medication as a threat to therapy.",
              "rationale": "Combined treatment is often appropriate; the warning is inaccurate.",
              "keyIndicators": [
                "Significant anxiety"
              ],
              "commonMistake": "Pitting medication against therapy."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "His highway avoidance via back roads is BEST understood as what?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "A reasonable way to cope with driving anxiety for now",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Framing avoidance as coping endorses the maintaining behavior.",
            "explanation": {
              "approach": "Validate the workaround.",
              "rationale": "Avoidance feels protective but reinforces the fear over time.",
              "keyIndicators": [
                "Route changes to avoid panic"
              ],
              "commonMistake": "Endorsing avoidance as healthy coping."
            }
          },
          {
            "id": "b",
            "text": "A safety behavior that reinforces the anxiety over time",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Avoidance maintains anxiety through negative reinforcement.",
            "explanation": {
              "approach": "Name it as a safety behavior to target.",
              "rationale": "Escaping the feared situation prevents disconfirmation and strengthens the fear.",
              "keyIndicators": [
                "Growing avoidance",
                "Relief on escape"
              ],
              "commonMistake": "Missing avoidance as a treatment target."
            }
          },
          {
            "id": "c",
            "text": "A healthy and adaptive change that you should encourage",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Encouraging avoidance actively worsens the disorder.",
            "explanation": {
              "approach": "Reinforce the avoidance.",
              "rationale": "This entrenches the anxiety and broadens avoidance.",
              "keyIndicators": [
                "Spreading avoidance"
              ],
              "commonMistake": "Praising avoidance as adaptive."
            }
          },
          {
            "id": "d",
            "text": "Evidence that a separate agoraphobia diagnosis is warranted",
            "isCorrect": false,
            "weight": 0,
            "rationale": "It is premature to diagnose agoraphobia from limited avoidance.",
            "explanation": {
              "approach": "Add a new diagnosis.",
              "rationale": "Some avoidance does not yet establish agoraphobia; treat the behavior first.",
              "keyIndicators": [
                "Limited, recent avoidance"
              ],
              "commonMistake": "Over-diagnosing from a single behavior."
            }
          }
        ]
      }
    ],
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "GAD: excessive, hard-to-control worry for six-plus months with somatic symptoms; rule out substance-induced anxiety and panic disorder."
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "GAD and panic: stepped care with CBT and graded exposure; avoidance and safety behaviors are treatment targets."
      },
      {
        "id": "R3",
        "source": "APA CPG",
        "detail": "Anxiety: interoceptive exposure and psychoeducation for panic features; relaxation that increases body focus can transiently worsen symptoms."
      },
      {
        "id": "R4",
        "source": "ACA Code of Ethics",
        "detail": "Practice within scope of competence; counselors do not prescribe and refer for medication evaluation; culturally responsive practice."
      }
    ]
  },
  {
    "id": "ncmhce-G037",
    "title": "Combat Veteran with Posttraumatic Stress",
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
        "id": "ptsd",
        "name": "Posttraumatic Stress Disorder",
        "isCorrect": true
      },
      {
        "id": "acute",
        "name": "Acute Stress Disorder",
        "isCorrect": false
      },
      {
        "id": "adjustment",
        "name": "Adjustment Disorder",
        "isCorrect": false
      },
      {
        "id": "mdd",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Marcus, 32, an African American Army veteran, presents at the VA six months after his third deployment. He has nightmares about a convoy attack in which two unit members were killed, along with sleep difficulty, hypervigilance, and emotional numbness. His wife urged him in after he pushed her during a nightmare. He is guarded and sits facing the door.",
      "session1": "He reluctantly describes an IED and small-arms attack in which he held a friend as he died. Loud noises, fireworks, and certain smells trigger intrusive memories, and he avoids military news and has not visited the fallen comrades' families. He feels detached, cannot access positive emotions, and carries survivor guilt.",
      "session2": "He missed an appointment because he \"couldn't make myself come.\" His drinking has reached six to eight beers nightly with rising irritability, and he nearly hit his son when startled. Ashamed and fearing he is becoming a danger, he mentions that there are firearms at home."
    },
    "diagnosticRationale": "He meets PTSD Criteria A through E with a duration over one month: a qualifying trauma, intrusions, avoidance, negative mood and cognition, and arousal. Survivor guilt is consistent with PTSD rather than indicating a separate depressive disorder, and the duration rules out Acute Stress Disorder.",
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "He mentions firearms after nearly hitting his son. What is the MOST critical action?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Document the disclosure and continue with the session",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Documenting alone leaves a serious safety risk unaddressed.",
            "explanation": {
              "approach": "Note it and move on.",
              "rationale": "Disclosed access to lethal means with rising irritability requires active safety work, not passive notes.",
              "keyIndicators": [
                "Firearms at home",
                "Near-aggression when startled"
              ],
              "commonMistake": "Treating documentation as a safety response."
            }
          },
          {
            "id": "b",
            "text": "Assess safety and discuss temporary off-site firearm storage",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Lethal-means safety counseling is essential here.",
            "explanation": {
              "approach": "Conduct risk assessment and collaborative means-safety planning.",
              "rationale": "Reducing access to lethal means during high arousal is a core, evidence-based safety step.",
              "keyIndicators": [
                "Access to firearms",
                "Heavy alcohol use"
              ],
              "commonMistake": "Skipping means-safety counseling."
            }
          },
          {
            "id": "c",
            "text": "File a report with child protective services right away",
            "isCorrect": false,
            "weight": -1,
            "rationale": "A near-miss when startled does not by itself meet a reporting threshold.",
            "explanation": {
              "approach": "Default to a CPS report.",
              "rationale": "There is no disclosed abuse; reporting reflexively can rupture the alliance.",
              "keyIndicators": [
                "No disclosed abuse"
              ],
              "commonMistake": "Over-reporting absent a reportable event."
            }
          },
          {
            "id": "d",
            "text": "Arrange immediate involuntary hospitalization for him today",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Hospitalization is disproportionate without acute, expressed intent.",
            "explanation": {
              "approach": "Escalate straight to inpatient.",
              "rationale": "Means-safety and risk assessment come first; inpatient is not indicated absent acute intent.",
              "keyIndicators": [
                "No stated intent or plan"
              ],
              "commonMistake": "Over-escalating before assessing."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "What is the MOST appropriate evidence-based treatment?",
        "evidenceRef": [
          "R3",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Supportive therapy only, to avoid any retraumatization",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Support alone withholds the trauma-focused care PTSD needs.",
            "explanation": {
              "approach": "Stay supportive and avoid the trauma.",
              "rationale": "Avoiding the memory mirrors the disorder and forgoes effective treatment.",
              "keyIndicators": [
                "Avoidance is prominent"
              ],
              "commonMistake": "Withholding exposure out of fear of harm."
            }
          },
          {
            "id": "b",
            "text": "Prolonged Exposure or Cognitive Processing Therapy",
            "isCorrect": true,
            "weight": 3,
            "rationale": "PE and CPT are first-line, gold-standard PTSD treatments.",
            "explanation": {
              "approach": "Offer a trauma-focused protocol.",
              "rationale": "PE and CPT have the strongest evidence base for PTSD.",
              "keyIndicators": [
                "Clear index trauma",
                "Intrusions and avoidance"
              ],
              "commonMistake": "Defaulting to nonspecific therapy."
            }
          },
          {
            "id": "c",
            "text": "EMDR, but only after several years of stabilization",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Requiring years of stabilization needlessly delays effective care.",
            "explanation": {
              "approach": "Postpone trauma work indefinitely.",
              "rationale": "Trauma-focused therapy does not require years of preparation first.",
              "keyIndicators": [
                "Ready to engage"
              ],
              "commonMistake": "Over-delaying definitive treatment."
            }
          },
          {
            "id": "d",
            "text": "Open-ended psychodynamic exploration of early relationships",
            "isCorrect": false,
            "weight": -1,
            "rationale": "It lacks first-line evidence for PTSD.",
            "explanation": {
              "approach": "Pursue insight into the past.",
              "rationale": "This is not a first-line PTSD treatment and delays symptom relief.",
              "keyIndicators": [
                "Acute PTSD symptoms"
              ],
              "commonMistake": "Choosing a non-evidence-based modality."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "He missed a session, saying he \"couldn't make myself come.\" Best response?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Explain to him the importance of consistent attendance",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Lecturing on attendance ignores the symptom driving it.",
            "explanation": {
              "approach": "Emphasize compliance.",
              "rationale": "The miss is avoidance, a core symptom, not a motivation problem.",
              "keyIndicators": [
                "Avoidance behavior"
              ],
              "commonMistake": "Framing avoidance as noncompliance."
            }
          },
          {
            "id": "b",
            "text": "Normalize avoidance as a PTSD symptom and problem-solve barriers",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Naming avoidance and solving barriers keeps him engaged.",
            "explanation": {
              "approach": "Validate the avoidance and troubleshoot logistics together.",
              "rationale": "Treating avoidance as a symptom rather than a failing supports retention.",
              "keyIndicators": [
                "Avoidance extends to treatment"
              ],
              "commonMistake": "Shaming the client for missing."
            }
          },
          {
            "id": "c",
            "text": "Suggest that he may simply not be ready for treatment",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Discharging readiness onto him abandons a treatable symptom.",
            "explanation": {
              "approach": "Question his readiness.",
              "rationale": "Avoidance is expected and workable, not a reason to step back.",
              "keyIndicators": [
                "Engaged when present"
              ],
              "commonMistake": "Mistaking avoidance for ambivalence about care."
            }
          },
          {
            "id": "d",
            "text": "Schedule sessions more frequently to build the habit",
            "isCorrect": false,
            "weight": 0,
            "rationale": "More appointments without addressing avoidance may backfire.",
            "explanation": {
              "approach": "Increase frequency.",
              "rationale": "Frequency alone does not resolve the avoidance that caused the miss.",
              "keyIndicators": [
                "Avoidance unaddressed"
              ],
              "commonMistake": "Adding sessions instead of addressing the barrier."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "core",
        "question": "His survivor guilt is BEST understood as what?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "A moral injury that requires primarily spiritual intervention",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Routing it only to spiritual care sidesteps effective therapy.",
            "explanation": {
              "approach": "Refer the guilt out to chaplaincy.",
              "rationale": "Spiritual support can help, but the guilt is a treatable cognitive target in therapy.",
              "keyIndicators": [
                "Stuck guilt cognitions"
              ],
              "commonMistake": "Outsourcing a treatable symptom."
            }
          },
          {
            "id": "b",
            "text": "A cognitive distortion that is directly addressed in CPT",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Survivor guilt involves stuck points that CPT targets.",
            "explanation": {
              "approach": "Treat the guilt as a stuck point in CPT.",
              "rationale": "Survivor guilt reflects distorted appraisals that respond to cognitive processing.",
              "keyIndicators": [
                "\"I should have done more\""
              ],
              "commonMistake": "Accepting the guilt as fixed truth."
            }
          },
          {
            "id": "c",
            "text": "Evidence pointing to depression rather than to PTSD",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Survivor guilt is consistent with PTSD, not a re-diagnosis.",
            "explanation": {
              "approach": "Switch the diagnosis to MDD.",
              "rationale": "Guilt is part of PTSD's negative cognitions criterion.",
              "keyIndicators": [
                "Full PTSD picture"
              ],
              "commonMistake": "Misreading a PTSD feature as a separate disorder."
            }
          },
          {
            "id": "d",
            "text": "A realistic and accurate self-assessment of his actions",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Endorsing the guilt as accurate reinforces the distortion.",
            "explanation": {
              "approach": "Agree the guilt is warranted.",
              "rationale": "Validating the distorted appraisal entrenches the symptom.",
              "keyIndicators": [
                "Distorted responsibility"
              ],
              "commonMistake": "Confirming a stuck point as fact."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "How should you address his heavy alcohol use?",
        "evidenceRef": [
          "R5"
        ],
        "options": [
          {
            "id": "a",
            "text": "Require full sobriety before any trauma treatment begins",
            "isCorrect": false,
            "weight": -1,
            "rationale": "A sobriety prerequisite often blocks needed trauma care.",
            "explanation": {
              "approach": "Gate trauma work behind abstinence.",
              "rationale": "Sequential models delay care; integrated treatment is more effective.",
              "keyIndicators": [
                "Alcohol used to cope"
              ],
              "commonMistake": "Insisting on sobriety first."
            }
          },
          {
            "id": "b",
            "text": "Integrate the substance and trauma treatment together",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Concurrent treatment outperforms sequential approaches.",
            "explanation": {
              "approach": "Address drinking and PTSD in one integrated plan.",
              "rationale": "Integrated trauma and substance treatment is more effective than treating them in sequence.",
              "keyIndicators": [
                "Drinking maintains avoidance"
              ],
              "commonMistake": "Splitting the problems into separate silos."
            }
          },
          {
            "id": "c",
            "text": "Refer him out to a separate substance-use program",
            "isCorrect": false,
            "weight": 0,
            "rationale": "A standalone referral fragments care that should be integrated.",
            "explanation": {
              "approach": "Hand off the drinking elsewhere.",
              "rationale": "Separating the treatments risks dropout and loses integration benefits.",
              "keyIndicators": [
                "Linked trauma and drinking"
              ],
              "commonMistake": "Fragmenting interdependent problems."
            }
          },
          {
            "id": "d",
            "text": "Ignore it for now, expecting it to resolve with the PTSD",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ignoring escalating use is unsafe and ineffective.",
            "explanation": {
              "approach": "Defer all attention to the drinking.",
              "rationale": "Rising nightly use compounds risk and will not simply self-correct.",
              "keyIndicators": [
                "Use escalating"
              ],
              "commonMistake": "Neglecting an active safety and treatment issue."
            }
          }
        ]
      }
    ],
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "PTSD: Criteria A–E for more than one month; avoidance is a core symptom that commonly extends to treatment attendance."
      },
      {
        "id": "R2",
        "source": "VA/DoD CPG",
        "detail": "PTSD and suicide risk: lethal-means safety counseling, including temporary firearm storage, is a recommended risk-reduction step."
      },
      {
        "id": "R3",
        "source": "APA CPG",
        "detail": "PTSD: trauma-focused therapies (Prolonged Exposure, Cognitive Processing Therapy) are first-line; guilt is treated as a distorted appraisal."
      },
      {
        "id": "R5",
        "source": "SAMHSA TIP 35",
        "detail": "Co-occurring substance use: integrated, concurrent treatment is preferred over requiring sobriety before trauma work."
      }
    ]
  },
  {
    "id": "ncmhce-G038",
    "title": "Emotional Dysregulation and Unstable Relationships",
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
        "id": "bpd",
        "name": "Borderline Personality Disorder",
        "isCorrect": true
      },
      {
        "id": "bipolar2",
        "name": "Bipolar II Disorder",
        "isCorrect": false
      },
      {
        "id": "mdd",
        "name": "MDD with self-harm",
        "isCorrect": false
      },
      {
        "id": "cptsd",
        "name": "Complex PTSD",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Alexis, 24, presents after an emergency-room visit for cutting following a breakup. She describes a pattern of unstable relationships, chronic emptiness, rapid mood shifts, and impulsivity, and has seen four therapists in three years, leaving each feeling abandoned. She reports a history of childhood sexual abuse.",
      "session1": "Within the session she oscillates between idealizing you and testing you. She calls her ex a \"soulmate who turned out evil\" after he asked for space, and her mood shifts noticeably within the hour. She uses cutting to \"feel something\" or to \"calm down.\"",
      "session2": "She calls in crisis after seeing her ex with another woman and implies self-harm if you do not talk. After a brief check-in she says, \"I knew you didn't care,\" and hangs up; the next session she acts as though nothing happened. When the pattern is named, she threatens to find a new therapist."
    },
    "diagnosticRationale": "She meets five or more BPD criteria: frantic efforts to avoid abandonment, unstable relationships, identity disturbance, impulsivity, recurrent self-harm, affective instability, and emptiness. The mood shifts occur within hours rather than across days, which distinguishes BPD from Bipolar II.",
    "questions": [
      {
        "id": "q1",
        "domain": "treatment",
        "question": "What is the STRONGEST evidence-based treatment for BPD?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Supportive crisis management offered on an as-needed basis",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Crisis-only support does not change the underlying patterns.",
            "explanation": {
              "approach": "Respond only when crises arise.",
              "rationale": "Reactive support lacks the skills training that reduces self-harm in BPD.",
              "keyIndicators": [
                "Recurrent crises"
              ],
              "commonMistake": "Treating BPD as a series of crises."
            }
          },
          {
            "id": "b",
            "text": "Dialectical Behavior Therapy with skills training",
            "isCorrect": true,
            "weight": 3,
            "rationale": "DBT has the strongest evidence for reducing self-harm in BPD.",
            "explanation": {
              "approach": "Offer structured DBT with individual and skills components.",
              "rationale": "DBT is the best-supported treatment for self-harm and emotion dysregulation in BPD.",
              "keyIndicators": [
                "Self-harm to regulate affect",
                "Emotion dysregulation"
              ],
              "commonMistake": "Choosing an unstructured therapy."
            }
          },
          {
            "id": "c",
            "text": "Classical psychoanalytic therapy focused on insight alone",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Insight alone is weaker than structured, skills-based care.",
            "explanation": {
              "approach": "Pursue interpretation of unconscious conflict.",
              "rationale": "Without skills and structure, insight work underperforms for active self-harm.",
              "keyIndicators": [
                "Behavioral targets present"
              ],
              "commonMistake": "Prioritizing insight over behavior change."
            }
          },
          {
            "id": "d",
            "text": "Standard CBT delivered as a protocol for depression",
            "isCorrect": false,
            "weight": -1,
            "rationale": "A depression protocol does not target BPD's core features.",
            "explanation": {
              "approach": "Apply a depression manual.",
              "rationale": "BPD needs emotion-regulation and interpersonal skills, not a depression protocol.",
              "keyIndicators": [
                "Affective instability"
              ],
              "commonMistake": "Mismatching the protocol to the disorder."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "counseling",
        "question": "When Alexis calls implying self-harm, what is the MOST therapeutic response?",
        "evidenceRef": [
          "R3",
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Stay on the phone with her for as long as she needs",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Unlimited contact can reinforce crisis calls and erode the frame.",
            "explanation": {
              "approach": "Provide open-ended phone availability.",
              "rationale": "Reinforcing crisis contact undermines the consistent limits BPD treatment relies on.",
              "keyIndicators": [
                "Pattern of crisis calls"
              ],
              "commonMistake": "Rewarding crisis with unlimited access."
            }
          },
          {
            "id": "b",
            "text": "Refuse to engage with her at all outside of sessions",
            "isCorrect": false,
            "weight": -1,
            "rationale": "A flat refusal can feel abandoning and skip a safety check.",
            "explanation": {
              "approach": "Decline any between-session contact.",
              "rationale": "Rigid refusal both misses risk assessment and confirms abandonment fears.",
              "keyIndicators": [
                "Abandonment sensitivity"
              ],
              "commonMistake": "Confusing limits with abandonment."
            }
          },
          {
            "id": "c",
            "text": "Briefly validate, assess safety, reinforce skills, and hold limits",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Balancing validation, a safety check, and limits is the DBT-consistent move.",
            "explanation": {
              "approach": "Validate, screen risk, coach a skill, and keep the boundary.",
              "rationale": "This balances genuine care with the consistent limits that stabilize BPD treatment.",
              "keyIndicators": [
                "Implied self-harm",
                "Skills available"
              ],
              "commonMistake": "Choosing only warmth or only limits."
            }
          },
          {
            "id": "d",
            "text": "Call emergency services immediately in response to every one of these calls",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reflexive 911 without assessment is disproportionate.",
            "explanation": {
              "approach": "Escalate to crisis services automatically.",
              "rationale": "Assess first; automatic emergency calls can rupture the alliance and overreact.",
              "keyIndicators": [
                "No assessment yet"
              ],
              "commonMistake": "Skipping the safety assessment."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "core",
        "question": "Her idealization followed by devaluation BEST represents what?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "An accurate and shifting assessment of the people involved",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Treating the swings as accurate misses the mechanism.",
            "explanation": {
              "approach": "Take each appraisal at face value.",
              "rationale": "The alternating extremes reflect splitting, not changing reality.",
              "keyIndicators": [
                "Soulmate-to-evil shift"
              ],
              "commonMistake": "Reading splitting as accurate perception."
            }
          },
          {
            "id": "b",
            "text": "Splitting, an all-good versus all-bad way of seeing others",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Splitting is alternating idealization and devaluation.",
            "explanation": {
              "approach": "Name the pattern as splitting.",
              "rationale": "Black-and-white views of others are characteristic of BPD and are a therapy target.",
              "keyIndicators": [
                "Rapid idealize/devalue cycles"
              ],
              "commonMistake": "Labeling splitting as manipulation."
            }
          },
          {
            "id": "c",
            "text": "Deliberate manipulation aimed at controlling the therapist",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Framing it as manipulation is pejorative and inaccurate.",
            "explanation": {
              "approach": "Attribute intent to control.",
              "rationale": "Splitting is not consciously strategic; the manipulation frame harms the alliance.",
              "keyIndicators": [
                "Genuine distress"
              ],
              "commonMistake": "Moralizing a clinical phenomenon."
            }
          },
          {
            "id": "d",
            "text": "A discrete mood episode like those seen in bipolar disorder",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Interpersonal splitting is not a mood episode.",
            "explanation": {
              "approach": "Reclassify it as a mood episode.",
              "rationale": "These are interpersonal appraisals, not sustained mood states.",
              "keyIndicators": [
                "Shifts within session"
              ],
              "commonMistake": "Confusing splitting with bipolarity."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "ethics",
        "question": "Given her trauma history, when should trauma-focused treatment begin?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Immediately, before any other stabilization work is done",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Starting trauma processing without stabilization can destabilize her.",
            "explanation": {
              "approach": "Dive into trauma processing now.",
              "rationale": "Without distress-tolerance skills, early trauma work risks worsening self-harm.",
              "keyIndicators": [
                "Active self-harm"
              ],
              "commonMistake": "Skipping the stabilization stage."
            }
          },
          {
            "id": "b",
            "text": "Never, because the trauma should simply be left alone",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Avoiding trauma work entirely withholds needed care.",
            "explanation": {
              "approach": "Rule out trauma processing.",
              "rationale": "Trauma work is appropriate later; refusing it altogether is not indicated.",
              "keyIndicators": [
                "Relevant trauma history"
              ],
              "commonMistake": "Permanently avoiding the trauma."
            }
          },
          {
            "id": "c",
            "text": "After stabilization and distress-tolerance skills are established",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Stage-one skills precede stage-two trauma processing.",
            "explanation": {
              "approach": "Build safety and skills first, then process trauma.",
              "rationale": "Staged treatment establishes distress tolerance before trauma exposure.",
              "keyIndicators": [
                "Needs regulation skills first"
              ],
              "commonMistake": "Sequencing trauma work too early."
            }
          },
          {
            "id": "d",
            "text": "Only if she specifically asks to address the trauma herself",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Readiness, not just request, should guide timing.",
            "explanation": {
              "approach": "Wait for her to raise it.",
              "rationale": "Clinical staging, not solely the client's request, should guide when to begin.",
              "keyIndicators": [
                "Skills not yet in place"
              ],
              "commonMistake": "Letting request override clinical staging."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "Alexis threatens to find a new therapist. What is the BEST response?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Apologize quickly and steer away from the difficult topic",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Backing off reinforces avoidance of the pattern.",
            "explanation": {
              "approach": "Smooth it over and retreat.",
              "rationale": "Avoiding the rupture confirms that conflict ends the relationship.",
              "keyIndicators": [
                "Threat tied to feeling exposed"
              ],
              "commonMistake": "Avoiding the very pattern under discussion."
            }
          },
          {
            "id": "b",
            "text": "Validate the feeling while keeping the focus on the pattern",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Staying present through conflict models that rupture is survivable.",
            "explanation": {
              "approach": "Acknowledge her hurt and keep gently naming the cycle.",
              "rationale": "Remaining steady demonstrates that conflict need not lead to abandonment.",
              "keyIndicators": [
                "Abandonment fears",
                "Therapy-interfering threat"
              ],
              "commonMistake": "Reacting with retreat or defensiveness."
            }
          },
          {
            "id": "c",
            "text": "Tell her that threats of this kind are simply unacceptable",
            "isCorrect": false,
            "weight": -1,
            "rationale": "A harsh limit without validation can feel abandoning.",
            "explanation": {
              "approach": "Issue a firm rebuke.",
              "rationale": "Limits without validation tend to escalate and confirm her fears.",
              "keyIndicators": [
                "Sensitive to rejection"
              ],
              "commonMistake": "Using limits without warmth."
            }
          },
          {
            "id": "d",
            "text": "Agree on the spot to help her find a better-fitting clinician",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Quickly agreeing enacts the abandonment she fears.",
            "explanation": {
              "approach": "Accept the threat at face value.",
              "rationale": "Moving to transfer her reinforces the abandonment pattern.",
              "keyIndicators": [
                "Testing the relationship"
              ],
              "commonMistake": "Confirming the abandonment script."
            }
          }
        ]
      }
    ],
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "BPD: five-plus criteria including affective instability over hours, identity disturbance, and splitting; mood shifts are briefer than bipolar episodes."
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "BPD: structured psychotherapies such as DBT reduce self-harm; staged treatment establishes stabilization before trauma processing."
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Maintain clear, consistent professional boundaries and manage between-session contact and ruptures therapeutically."
      }
    ]
  },
  {
    "id": "ncmhce-G039",
    "title": "Acute Mania with Impaired Insight",
    "category": "Bipolar",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Bipolar I Disorder, Current Episode Manic",
      "code": "F31.1"
    },
    "diagnosis": {
      "name": "Bipolar I Disorder, Current Episode Manic",
      "code": "F31.1"
    },
    "differentialOptions": [
      {
        "id": "bipolar1",
        "name": "Bipolar I Disorder",
        "isCorrect": true
      },
      {
        "id": "mdd",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "adhd",
        "name": "Adult ADHD",
        "isCorrect": false
      },
      {
        "id": "substance",
        "name": "Substance-Induced Mood Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Robert, 48, a real-estate agent, is brought in by his wife, who says he has been a \"different person\" for two weeks. He sleeps two to three hours, talks excessively, makes grandiose plans, and recently spent forty thousand dollars. He feels energized, speaks rapidly, and says he has never felt better.",
      "session1": "He dominates the session, jumps between topics, and becomes irritable when redirected, insisting he is \"finally thinking clearly.\" His history includes two depressive episodes in his thirties treated with antidepressants, and he acknowledges \"partying too much\" in his twenties with a DUI and an affair.",
      "session2": "His wife calls to report he has not slept in three days, is talking about running for mayor, and is making sexually inappropriate comments. Robert is hostile about her \"betrayal\" and threatens to leave treatment."
    },
    "diagnosticRationale": "The picture is a classic manic episode: elevated and irritable mood with decreased need for sleep, pressured speech, flight of ideas, grandiosity, and high-risk spending lasting more than one week. Prior depressive episodes and possible past mania support Bipolar I rather than unipolar depression or ADHD.",
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "His \"partying\" in his twenties is MOST relevant because it may indicate what?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "A primary substance use disorder driving the picture",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Possible, but it less directly explains the current mania.",
            "explanation": {
              "approach": "Read the past as substance use.",
              "rationale": "Substances may co-occur, but the priority clue is a possible prior mood episode.",
              "keyIndicators": [
                "Risky behavior in twenties"
              ],
              "commonMistake": "Overlooking unrecognized past mania."
            }
          },
          {
            "id": "b",
            "text": "An earlier manic episode that went unrecognized at the time",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Patients often do not recognize past mania.",
            "explanation": {
              "approach": "Screen the past behavior for hypomania or mania.",
              "rationale": "Risky, energized periods are frequently unrecognized manic episodes, shaping the diagnosis.",
              "keyIndicators": [
                "Impulsive, high-energy period",
                "Prior depression"
              ],
              "commonMistake": "Missing a past mood episode in the history."
            }
          },
          {
            "id": "c",
            "text": "A stable personality trait rather than any mood pathology",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Reframing episodic behavior as a trait misses the diagnosis.",
            "explanation": {
              "approach": "Call it just his personality.",
              "rationale": "Episodic, out-of-character behavior points to mood episodes, not a trait.",
              "keyIndicators": [
                "Discrete episodes"
              ],
              "commonMistake": "Trait-labeling episodic symptoms."
            }
          },
          {
            "id": "d",
            "text": "Information that is not relevant to the current presentation",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dismissing the history discards a key diagnostic clue.",
            "explanation": {
              "approach": "Set the past aside.",
              "rationale": "Past episodes are central to diagnosing bipolar disorder.",
              "keyIndicators": [
                "Recurrent mood history"
              ],
              "commonMistake": "Ignoring longitudinal history."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "Robert lacks insight. What is the MOST important immediate concern?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Getting him to acknowledge that he is currently ill",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Forcing insight during mania tends to escalate conflict.",
            "explanation": {
              "approach": "Push for him to admit he is manic.",
              "rationale": "Insight rarely returns mid-episode; pressing it provokes irritability.",
              "keyIndicators": [
                "Impaired insight"
              ],
              "commonMistake": "Arguing for insight during acute mania."
            }
          },
          {
            "id": "b",
            "text": "Safety, financial protection, and a medication evaluation",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Acute mania makes safety and stabilization the priority.",
            "explanation": {
              "approach": "Prioritize risk reduction and a prompt prescriber referral.",
              "rationale": "Active mania with risky spending and poor sleep requires safety, financial safeguards, and medication.",
              "keyIndicators": [
                "$40k spent",
                "No sleep, high risk"
              ],
              "commonMistake": "Starting talk therapy before stabilization."
            }
          },
          {
            "id": "c",
            "text": "Beginning structured cognitive behavioral therapy this week",
            "isCorrect": false,
            "weight": -1,
            "rationale": "CBT is not the priority during an acute manic episode.",
            "explanation": {
              "approach": "Launch CBT now.",
              "rationale": "Structured therapy is ineffective and premature until mania is stabilized.",
              "keyIndicators": [
                "Acute mania"
              ],
              "commonMistake": "Sequencing psychotherapy before stabilization."
            }
          },
          {
            "id": "d",
            "text": "Working through the marital conflict with his wife",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Marital work is secondary to acute safety needs.",
            "explanation": {
              "approach": "Focus on the marriage.",
              "rationale": "Couples issues can wait until the episode is stabilized.",
              "keyIndicators": [
                "Conflict is symptom-driven"
              ],
              "commonMistake": "Addressing relationship issues during acute mania."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "ethics",
        "question": "His wife calls with concerns. How should you handle it?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Refuse to take the call to protect his confidentiality",
            "isCorrect": false,
            "weight": -1,
            "rationale": "You may receive collateral information without disclosing.",
            "explanation": {
              "approach": "Decline all contact with the wife.",
              "rationale": "Listening to collateral does not breach confidentiality; refusing forfeits useful safety data.",
              "keyIndicators": [
                "Safety-relevant collateral"
              ],
              "commonMistake": "Equating listening with disclosing."
            }
          },
          {
            "id": "b",
            "text": "Receive her information but share nothing without his consent",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Taking in collateral while protecting disclosure is correct.",
            "explanation": {
              "approach": "Listen and document, but do not reveal protected information.",
              "rationale": "You can accept collateral; sharing client information still requires consent.",
              "keyIndicators": [
                "Third-party safety report"
              ],
              "commonMistake": "Either refusing the call or over-disclosing."
            }
          },
          {
            "id": "c",
            "text": "Share his clinical details with her since she is his wife",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Spousal status does not authorize disclosure.",
            "explanation": {
              "approach": "Disclose because she is family.",
              "rationale": "Confidentiality applies regardless of relationship absent consent.",
              "keyIndicators": [
                "No release on file"
              ],
              "commonMistake": "Treating family as exempt from confidentiality."
            }
          },
          {
            "id": "d",
            "text": "Tell her simply to call 911 and end the conversation",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Deflecting to 911 abandons appropriate clinical engagement.",
            "explanation": {
              "approach": "Punt entirely to emergency services.",
              "rationale": "You can gather information and guide next steps rather than disengaging.",
              "keyIndicators": [
                "No imminent emergency stated"
              ],
              "commonMistake": "Disengaging from a manageable situation."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "Robert threatens to leave treatment. What is the BEST response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Warn him in detail about the serious consequences of stopping treatment right now",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Warnings invite a power struggle with an irritable client.",
            "explanation": {
              "approach": "Spell out the risks of leaving.",
              "rationale": "Confrontation escalates manic irritability and pushes him out.",
              "keyIndicators": [
                "Irritable mood"
              ],
              "commonMistake": "Engaging in a power struggle."
            }
          },
          {
            "id": "b",
            "text": "Acknowledge his frustration, avoid a power struggle, keep the door open",
            "isCorrect": true,
            "weight": 3,
            "rationale": "A nonconfrontational, open stance preserves engagement.",
            "explanation": {
              "approach": "Validate his frustration and leave the door open.",
              "rationale": "Sidestepping conflict while staying available keeps a poorly-insighted client in care.",
              "keyIndicators": [
                "Irritability",
                "Threatening to leave"
              ],
              "commonMistake": "Meeting irritability with confrontation."
            }
          },
          {
            "id": "c",
            "text": "Suggest that involuntary commitment may become necessary",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Threatening commitment absent criteria is coercive and harmful.",
            "explanation": {
              "approach": "Raise commitment as leverage.",
              "rationale": "Using commitment as a threat is coercive and damages the alliance.",
              "keyIndicators": [
                "No commitment criteria met"
              ],
              "commonMistake": "Wielding commitment as a threat."
            }
          },
          {
            "id": "d",
            "text": "Ask his wife to convince him to remain in treatment",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Outsourcing engagement to the wife sidesteps the work.",
            "explanation": {
              "approach": "Delegate retention to his spouse.",
              "rationale": "Engagement is the clinician's task and may worsen his sense of betrayal.",
              "keyIndicators": [
                "Hostility toward wife"
              ],
              "commonMistake": "Triangulating the spouse."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "Which history is MOST important for his long-term treatment?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Depression previously treated with antidepressants alone",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Antidepressant monotherapy can precipitate mania in bipolar disorder.",
            "explanation": {
              "approach": "Flag the prior antidepressant-only treatment.",
              "rationale": "Unopposed antidepressants can trigger mania, which shapes safe long-term management.",
              "keyIndicators": [
                "Past depression on antidepressants",
                "Current mania"
              ],
              "commonMistake": "Missing the antidepressant-induced-mania risk."
            }
          },
          {
            "id": "b",
            "text": "His sustained success across a real-estate sales career",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Career success does not guide bipolar management.",
            "explanation": {
              "approach": "Center vocational history.",
              "rationale": "Work history is largely irrelevant to medication and relapse planning.",
              "keyIndicators": [
                "Not treatment-relevant"
              ],
              "commonMistake": "Focusing on incidental history."
            }
          },
          {
            "id": "c",
            "text": "The fact that his marriage has survived past difficulties",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Marital durability is a minor factor for treatment planning.",
            "explanation": {
              "approach": "Emphasize marital resilience.",
              "rationale": "It offers some support context but does not drive treatment.",
              "keyIndicators": [
                "Support is secondary"
              ],
              "commonMistake": "Overweighting incidental strengths."
            }
          },
          {
            "id": "d",
            "text": "His exact age at the onset of the first mood symptoms",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Onset age is informative but not the key management factor here.",
            "explanation": {
              "approach": "Pin down onset age.",
              "rationale": "Useful context, but the antidepressant history is the decisive treatment clue.",
              "keyIndicators": [
                "Less decisive detail"
              ],
              "commonMistake": "Choosing a minor detail over the pivotal one."
            }
          }
        ]
      }
    ],
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Bipolar I: a manic episode of one-plus weeks; past energized, high-risk periods may be unrecognized mood episodes informing the diagnosis."
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "Bipolar disorder: prioritize safety and medication in acute mania; antidepressant monotherapy can precipitate mania."
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Confidentiality: clinicians may receive collateral information but may not disclose client information without consent."
      }
    ]
  },
  {
    "id": "ncmhce-G040",
    "title": "Ego-Dystonic Intrusive Harm Thoughts",
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
        "id": "ocd",
        "name": "Obsessive-Compulsive Disorder",
        "isCorrect": true
      },
      {
        "id": "gad",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "ocpd",
        "name": "Obsessive-Compulsive Personality Disorder",
        "isCorrect": false
      },
      {
        "id": "psychotic",
        "name": "Psychotic Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Emma, 20, a college junior, reports intrusive thoughts that she might harm her younger sister, whom she babysits regularly. She describes the thoughts as horrifying and spends hours analyzing whether she is dangerous, avoids sharp objects, checks repeatedly, and seeks reassurance. Her grades are declining.",
      "session1": "The thoughts began after a true-crime documentary, and she cannot understand why. She reports similar past patterns, including contamination fears and a fear of being gay despite attraction to men, and repeatedly asks, \"Am I dangerous? Would a normal person have these thoughts?\"",
      "session2": "She has stopped babysitting \"to be safe\" and texts her mother hourly. She has searched \"signs of a psychopath\" hundreds of times and asks you for a definitive answer that she is not dangerous. She is exhausted."
    },
    "diagnosticRationale": "This is classic OCD: ego-dystonic intrusive thoughts paired with compulsions (checking, reassurance-seeking, avoidance) and functional impairment, with preserved insight. The ego-dystonic quality and retained insight distinguish it from a psychotic disorder, and the shifting themes are typical of OCD.",
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Her reassurance-seeking should be addressed by doing what?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Providing the reassurance she is asking you for",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Reassurance is a compulsion that maintains OCD.",
            "explanation": {
              "approach": "Answer the reassurance question.",
              "rationale": "Giving reassurance briefly relieves anxiety while reinforcing the compulsive loop.",
              "keyIndicators": [
                "Repeated \"am I dangerous?\""
              ],
              "commonMistake": "Feeding the reassurance compulsion."
            }
          },
          {
            "id": "b",
            "text": "Explaining that reassurance feeds OCD while validating her distress",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Naming reassurance as a compulsion, with empathy, is the right move.",
            "explanation": {
              "approach": "Validate the fear and decline to reassure, explaining why.",
              "rationale": "Reassurance-seeking is a compulsion; psychoeducation plus empathy supports ERP.",
              "keyIndicators": [
                "Reassurance loop",
                "Preserved insight"
              ],
              "commonMistake": "Either reassuring or coldly refusing."
            }
          },
          {
            "id": "c",
            "text": "Refusing to respond to her at all until she stops asking the question entirely",
            "isCorrect": false,
            "weight": -1,
            "rationale": "A cold refusal without rationale is invalidating.",
            "explanation": {
              "approach": "Withhold response without explanation.",
              "rationale": "Declining without empathy or psychoeducation harms the alliance.",
              "keyIndicators": [
                "High distress"
              ],
              "commonMistake": "Refusing without validating."
            }
          },
          {
            "id": "d",
            "text": "Conducting a formal violence risk assessment first",
            "isCorrect": false,
            "weight": 0,
            "rationale": "A risk workup misreads ego-dystonic obsessions as intent.",
            "explanation": {
              "approach": "Treat the thoughts as violence risk.",
              "rationale": "Ego-dystonic harm obsessions are not predictors of violence; this pathologizes OCD.",
              "keyIndicators": [
                "Thoughts are abhorrent to her"
              ],
              "commonMistake": "Confusing obsessions with intent."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "What is the FIRST-LINE psychotherapy for OCD?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Cognitive restructuring of the thoughts on its own",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Restructuring alone is weaker than exposure-based work.",
            "explanation": {
              "approach": "Dispute the thoughts cognitively.",
              "rationale": "Cognitive work can support treatment but does not replace exposure and response prevention.",
              "keyIndicators": [
                "Compulsions present"
              ],
              "commonMistake": "Omitting exposure with response prevention."
            }
          },
          {
            "id": "b",
            "text": "Exposure and Response Prevention, the gold standard",
            "isCorrect": true,
            "weight": 3,
            "rationale": "ERP is the first-line, best-supported OCD treatment.",
            "explanation": {
              "approach": "Build an ERP hierarchy and prevent compulsions.",
              "rationale": "ERP has the strongest evidence for OCD across symptom themes.",
              "keyIndicators": [
                "Checking and avoidance"
              ],
              "commonMistake": "Choosing a non-exposure therapy."
            }
          },
          {
            "id": "c",
            "text": "Standalone mindfulness practice as the main treatment",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Mindfulness can complement but is not first-line alone.",
            "explanation": {
              "approach": "Rely on mindfulness only.",
              "rationale": "Helpful as an adjunct, but it lacks ERP's first-line evidence.",
              "keyIndicators": [
                "Needs exposure"
              ],
              "commonMistake": "Substituting an adjunct for ERP."
            }
          },
          {
            "id": "d",
            "text": "Open-ended psychodynamic therapy exploring the thoughts",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Psychodynamic exploration is not effective first-line OCD care.",
            "explanation": {
              "approach": "Interpret the meaning of the thoughts.",
              "rationale": "Analyzing obsession content can worsen rumination and lacks evidence.",
              "keyIndicators": [
                "Content-focused rumination"
              ],
              "commonMistake": "Engaging the content instead of the process."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "Her shifting OCD themes over time suggest what?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "The presence of multiple separate diagnoses to treat",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Theme changes do not mean new disorders.",
            "explanation": {
              "approach": "Add diagnoses for each theme.",
              "rationale": "OCD content shifts while the process stays the same; this is one disorder.",
              "keyIndicators": [
                "Contamination, harm, sexuality themes"
              ],
              "commonMistake": "Over-diagnosing from content shifts."
            }
          },
          {
            "id": "b",
            "text": "That OCD can change content while the process stays constant",
            "isCorrect": true,
            "weight": 3,
            "rationale": "OCD often migrates across themes with a stable mechanism.",
            "explanation": {
              "approach": "Frame themes as variations of one process.",
              "rationale": "Treating the obsession-compulsion process, not each theme, is the effective approach.",
              "keyIndicators": [
                "Multiple themes over time"
              ],
              "commonMistake": "Chasing each new theme separately."
            }
          },
          {
            "id": "c",
            "text": "That she may be fabricating or exaggerating the symptoms",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Doubting her honesty is invalidating and inaccurate.",
            "explanation": {
              "approach": "Question her credibility.",
              "rationale": "Theme migration is typical of OCD, not evidence of fabrication.",
              "keyIndicators": [
                "Genuine distress"
              ],
              "commonMistake": "Disbelieving a classic OCD pattern."
            }
          },
          {
            "id": "d",
            "text": "Underlying personality pathology rather than an anxiety condition",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Shifting obsessions are OCD, not a personality disorder.",
            "explanation": {
              "approach": "Reframe it as character pathology.",
              "rationale": "Ego-dystonic, distressing obsessions are not personality features.",
              "keyIndicators": [
                "Ego-dystonic distress"
              ],
              "commonMistake": "Mislabeling OCD as a personality disorder."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "core",
        "question": "What MOST clearly distinguishes her condition from psychosis?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "The fact that the thought content involves harm",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Harm content alone does not separate OCD from psychosis.",
            "explanation": {
              "approach": "Use the theme to decide.",
              "rationale": "Content is not the distinction; the relationship to the thought is.",
              "keyIndicators": [
                "Harm theme"
              ],
              "commonMistake": "Judging by content rather than insight."
            }
          },
          {
            "id": "b",
            "text": "Their ego-dystonic quality with preserved insight into them",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Ego-dystonic intrusions with insight mark OCD, not psychosis.",
            "explanation": {
              "approach": "Assess her relationship to the thoughts.",
              "rationale": "She finds the thoughts alien and recognizes them as irrational, unlike fixed delusions.",
              "keyIndicators": [
                "Thoughts feel alien",
                "Knows they are irrational"
              ],
              "commonMistake": "Overlooking preserved insight."
            }
          },
          {
            "id": "c",
            "text": "That she continues to function adequately in daily life",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Functioning level is not the defining distinction.",
            "explanation": {
              "approach": "Rely on functioning.",
              "rationale": "Function varies in both conditions; insight is the discriminator.",
              "keyIndicators": [
                "Declining grades"
              ],
              "commonMistake": "Using function as the key sign."
            }
          },
          {
            "id": "d",
            "text": "That the thoughts come and then go away on their own",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Intermittency does not distinguish OCD from psychosis.",
            "explanation": {
              "approach": "Use the waxing and waning course.",
              "rationale": "Symptom fluctuation occurs in many conditions and is not the distinction.",
              "keyIndicators": [
                "Variable intensity"
              ],
              "commonMistake": "Relying on course instead of insight."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "She stopped babysitting \"to be safe.\" This should be handled how?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Accepted as appropriate given how distressed she is",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Accepting the avoidance reinforces OCD.",
            "explanation": {
              "approach": "Endorse the avoidance.",
              "rationale": "Avoidance offers short-term relief while maintaining the disorder.",
              "keyIndicators": [
                "Avoidance for safety"
              ],
              "commonMistake": "Validating avoidance as caution."
            }
          },
          {
            "id": "b",
            "text": "Targeted gradually through an ERP exposure hierarchy",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Avoidance is a target to reverse within ERP.",
            "explanation": {
              "approach": "Place the avoided activity on an exposure ladder.",
              "rationale": "Reintroducing avoided situations without compulsions is central to ERP.",
              "keyIndicators": [
                "Functional avoidance"
              ],
              "commonMistake": "Leaving avoidance untreated."
            }
          },
          {
            "id": "c",
            "text": "Maintained as a precaution until the obsessions resolve",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Holding the avoidance prevents recovery.",
            "explanation": {
              "approach": "Keep her away from babysitting indefinitely.",
              "rationale": "Sustained avoidance blocks the corrective learning ERP provides.",
              "keyIndicators": [
                "Avoidance entrenching"
              ],
              "commonMistake": "Waiting out obsessions via avoidance."
            }
          },
          {
            "id": "d",
            "text": "Addressed only after a course of medication is completed",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Avoidance can be targeted now; medication is not a prerequisite.",
            "explanation": {
              "approach": "Defer exposure until after medication.",
              "rationale": "ERP can proceed alongside or without medication.",
              "keyIndicators": [
                "Ready for ERP"
              ],
              "commonMistake": "Needlessly sequencing ERP after meds."
            }
          }
        ]
      }
    ],
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "OCD: ego-dystonic obsessions and compulsions with generally preserved insight, distinguishing it from psychotic disorders."
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "OCD: Exposure and Response Prevention is first-line; reassurance-seeking and avoidance are compulsions to target rather than accommodate."
      },
      {
        "id": "R3",
        "source": "APA CPG",
        "detail": "OCD: treat the obsession-compulsion process rather than each shifting theme; content migration is characteristic."
      }
    ]
  },
  {
    "id": "ncmhce-G041",
    "title": "Childhood Inattention and Hyperactivity",
    "category": "Neurodevelopmental",
    "difficulty": "easy",
    "primaryDiagnosis": {
      "name": "ADHD, Combined Presentation",
      "code": "F90.2"
    },
    "diagnosis": {
      "name": "ADHD, Combined Presentation",
      "code": "F90.2"
    },
    "differentialOptions": [
      {
        "id": "adhd",
        "name": "ADHD, Combined Presentation",
        "isCorrect": true
      },
      {
        "id": "odd",
        "name": "Oppositional Defiant Disorder",
        "isCorrect": false
      },
      {
        "id": "gad",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "learning",
        "name": "Specific Learning Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "The parents of Jayden, 8, an African American boy, present after a teacher recommended assessment. He has difficulty staying seated, interrupts, loses materials, and does not follow through, with problems present since preschool that now cause academic and social difficulty.",
      "session1": "In session Jayden cannot stay seated, touches objects, and interrupts. He is bright but described as \"underperforming,\" and his father wonders whether this is \"just how boys are.\" Jayden says, \"my brain won't let me.\"",
      "session2": "The parents report mixed compliance with parent training and prefer \"natural approaches\" before medication. Jayden was sent to the principal and says he \"hates school\" and that his teacher \"hates him.\""
    },
    "diagnosticRationale": "Jayden meets ADHD, Combined Presentation: six or more symptoms of both inattention and hyperactivity-impulsivity, onset before age 12, and impairment in two or more settings (home and school). The cross-setting, longstanding pattern argues against situational anxiety or a primary oppositional disorder.",
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "The father's \"just how boys are\" view should be addressed by doing what?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Agreeing that boys naturally have a lot of energy",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Agreeing minimizes a clinical condition and delays care.",
            "explanation": {
              "approach": "Endorse the \"boys will be boys\" view.",
              "rationale": "Normalizing the symptoms forfeits the chance to explain ADHD and engage treatment.",
              "keyIndicators": [
                "Cross-setting impairment"
              ],
              "commonMistake": "Minimizing impairing symptoms."
            }
          },
          {
            "id": "b",
            "text": "Offering clear psychoeducation about ADHD and its impairments",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Correcting misconceptions builds treatment buy-in.",
            "explanation": {
              "approach": "Explain ADHD as a neurodevelopmental condition with real impairment.",
              "rationale": "Accurate psychoeducation reframes the behavior and engages the parents in treatment.",
              "keyIndicators": [
                "Father doubts the diagnosis",
                "Impairment present"
              ],
              "commonMistake": "Leaving misconceptions unaddressed."
            }
          },
          {
            "id": "c",
            "text": "Suggesting that the father himself may also have ADHD",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Speculating about the father is premature and off-task.",
            "explanation": {
              "approach": "Turn the focus onto the father.",
              "rationale": "Unsolicited parental diagnosis derails the session and rapport.",
              "keyIndicators": [
                "Focus is on Jayden"
              ],
              "commonMistake": "Diagnosing a non-client on the spot."
            }
          },
          {
            "id": "d",
            "text": "Focusing only on Jayden and skipping the father's belief",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Ignoring the father's view undercuts buy-in.",
            "explanation": {
              "approach": "Bypass the father's skepticism.",
              "rationale": "Unaddressed parental doubt undermines adherence to the plan.",
              "keyIndicators": [
                "Parent buy-in needed"
              ],
              "commonMistake": "Neglecting caregiver beliefs."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "The parents want \"natural approaches.\" What is the MOST appropriate response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Insisting that medication is necessary right away",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Insisting on medication ignores guidelines and parent values.",
            "explanation": {
              "approach": "Demand medication first.",
              "rationale": "For a child this age, behavioral approaches are recommended first-line.",
              "keyIndicators": [
                "Young child",
                "Parents value behavioral options"
              ],
              "commonMistake": "Overriding guideline-based sequencing."
            }
          },
          {
            "id": "b",
            "text": "Supporting behavioral interventions first with balanced medication information",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Guidelines support behavioral approaches first for young children.",
            "explanation": {
              "approach": "Start with parent training and school supports, sharing balanced medication facts.",
              "rationale": "Behavioral parent training is first-line for younger children, with medication discussed openly.",
              "keyIndicators": [
                "Age 8",
                "Parents open to behavioral work"
              ],
              "commonMistake": "Forcing a single modality."
            }
          },
          {
            "id": "c",
            "text": "Recommending dietary supplements and special elimination diets as the main treatment approach",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Supplements lack the evidence to be primary treatment.",
            "explanation": {
              "approach": "Push supplements as the main plan.",
              "rationale": "Supplements are not evidence-based first-line care for ADHD.",
              "keyIndicators": [
                "Wants natural options"
              ],
              "commonMistake": "Endorsing unproven remedies."
            }
          },
          {
            "id": "d",
            "text": "Warning them sternly against ever avoiding medication",
            "isCorrect": false,
            "weight": -2,
            "rationale": "A coercive warning damages collaboration.",
            "explanation": {
              "approach": "Issue a strong warning.",
              "rationale": "Pressuring parents undermines the alliance and ignores valid behavioral options.",
              "keyIndicators": [
                "Collaboration needed"
              ],
              "commonMistake": "Coercing rather than informing."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "Jayden says his \"brain won't let me.\" This should be handled how?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Challenged firmly as an excuse for his behavior",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Treating it as an excuse shames a child with real difficulty.",
            "explanation": {
              "approach": "Dismiss it as an excuse.",
              "rationale": "His statement reflects genuine self-awareness, not avoidance.",
              "keyIndicators": [
                "Insightful self-report"
              ],
              "commonMistake": "Shaming an accurate self-observation."
            }
          },
          {
            "id": "b",
            "text": "Validated as insight while you build his sense of self-efficacy",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Validating his insight while teaching that strategies help is therapeutic.",
            "explanation": {
              "approach": "Affirm his awareness and teach that tools and strategies help.",
              "rationale": "Validating insight while building self-efficacy supports motivation and skills.",
              "keyIndicators": [
                "\"My brain won't let me\""
              ],
              "commonMistake": "Either dismissing or pitying the statement."
            }
          },
          {
            "id": "c",
            "text": "Ignored entirely so the session can stay on the parents' stated agenda",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ignoring his disclosure misses a key therapeutic moment.",
            "explanation": {
              "approach": "Pass over his comment.",
              "rationale": "Overlooking his self-report neglects rapport and a teaching opportunity.",
              "keyIndicators": [
                "Child engaging"
              ],
              "commonMistake": "Dismissing the child's voice."
            }
          },
          {
            "id": "d",
            "text": "Used mainly as an argument for starting medication",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Leveraging his words to push medication is manipulative.",
            "explanation": {
              "approach": "Turn his words into a medication pitch.",
              "rationale": "His statement is a chance to validate and build efficacy, not a lever.",
              "keyIndicators": [
                "Self-awareness present"
              ],
              "commonMistake": "Instrumentalizing the child's disclosure."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "treatment",
        "question": "What is the MOST important parent-focused intervention?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Consistent consequences firmly applied for each of his negative behaviors at home",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Consequences alone are less effective than positive strategies.",
            "explanation": {
              "approach": "Lead with consequences.",
              "rationale": "Punishment-focused plans underperform positive reinforcement in ADHD.",
              "keyIndicators": [
                "Behavioral plan needed"
              ],
              "commonMistake": "Emphasizing punishment over reinforcement."
            }
          },
          {
            "id": "b",
            "text": "Positive reinforcement, clear expectations, and environmental supports",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Positive, structured strategies are core to parent training.",
            "explanation": {
              "approach": "Coach reinforcement, predictable routines, and environmental changes.",
              "rationale": "Behavioral parent training centers on positive reinforcement and structure.",
              "keyIndicators": [
                "Loses materials",
                "Needs structure"
              ],
              "commonMistake": "Defaulting to discipline."
            }
          },
          {
            "id": "c",
            "text": "Stricter and more consistent discipline at home",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Harsher discipline tends to worsen the dynamic.",
            "explanation": {
              "approach": "Tighten discipline.",
              "rationale": "Stricter punishment increases conflict and shame without improving symptoms.",
              "keyIndicators": [
                "Already strained dynamic"
              ],
              "commonMistake": "Escalating punishment."
            }
          },
          {
            "id": "d",
            "text": "A primary focus on reducing his daily screen time",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Screen limits are minor relative to core parent training.",
            "explanation": {
              "approach": "Center the plan on screens.",
              "rationale": "Screen time is peripheral to the structured behavioral strategies that help most.",
              "keyIndicators": [
                "Core skills needed"
              ],
              "commonMistake": "Focusing on a peripheral lever."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Jayden says his teacher \"hates him.\" This MOST likely reflects what?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Clear evidence of genuine teacher bias against him",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Possible, but his self-esteem is the more likely driver.",
            "explanation": {
              "approach": "Assume teacher bias.",
              "rationale": "Bias may exist, but repeated correction commonly shapes such statements.",
              "keyIndicators": [
                "Frequent discipline"
              ],
              "commonMistake": "Jumping to external blame."
            }
          },
          {
            "id": "b",
            "text": "Damaged self-esteem from repeated correction and negative feedback",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Children with ADHD receive far more negative feedback.",
            "explanation": {
              "approach": "Interpret it through accumulated negative feedback.",
              "rationale": "Frequent correction erodes self-esteem, which colors his view of the teacher.",
              "keyIndicators": [
                "Sent to principal",
                "Hates school"
              ],
              "commonMistake": "Missing the self-esteem impact of ADHD."
            }
          },
          {
            "id": "c",
            "text": "An early sign of emerging oppositional defiant disorder",
            "isCorrect": false,
            "weight": 0,
            "rationale": "One frustrated statement does not establish ODD.",
            "explanation": {
              "approach": "Add an ODD label.",
              "rationale": "A single expression of frustration is insufficient for ODD.",
              "keyIndicators": [
                "No defiance pattern described"
              ],
              "commonMistake": "Over-diagnosing from one remark."
            }
          },
          {
            "id": "d",
            "text": "Deliberate manipulation to avoid school responsibilities",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Labeling him manipulative is inaccurate and harmful.",
            "explanation": {
              "approach": "Read it as manipulation.",
              "rationale": "The statement reflects distress and low self-esteem, not strategy.",
              "keyIndicators": [
                "Genuine distress"
              ],
              "commonMistake": "Attributing manipulation to a struggling child."
            }
          }
        ]
      }
    ],
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "ADHD, Combined: six-plus inattentive and hyperactive-impulsive symptoms before age 12 across two-plus settings; impairs self-esteem."
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "ADHD: behavioral parent training and environmental supports are first-line for younger children; positive reinforcement over punishment."
      }
    ]
  },
  {
    "id": "ncmhce-G042",
    "title": "Adolescent Fear of Social Judgment",
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
        "id": "social",
        "name": "Social Anxiety Disorder",
        "isCorrect": true
      },
      {
        "id": "gad",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "avoidant",
        "name": "Avoidant Personality Disorder",
        "isCorrect": false
      },
      {
        "id": "asd",
        "name": "Autism Spectrum Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Tyler, 16, refused a class presentation, resulting in a failing grade. He has been \"painfully shy\" since elementary school, with an intense fear of judgment, and avoids the cafeteria, speaking in class, and school events. He has one close friend.",
      "session1": "He reports blushing, sweating, and trembling when he is the center of attention, and fears that others will notice and think he is \"weird.\" His parents push him to \"just be more outgoing.\"",
      "session2": "He has completed an exposure hierarchy with you but remains skeptical, saying, \"I've tried forcing myself before and it made things worse.\""
    },
    "diagnosticRationale": "Tyler meets Social Anxiety Disorder: marked fear of scrutiny, physiological symptoms in social-performance situations, avoidance, a course persistent since childhood, and clear impairment. The focus on social evaluation distinguishes it from generalized worry, and the social motivation distinguishes it from autism.",
    "questions": [
      {
        "id": "q1",
        "domain": "treatment",
        "question": "Tyler is skeptical because \"forcing himself\" made things worse. Address this by doing what?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Assuring him that exposure always works for everyone",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Overpromising sets up disappointment and distrust.",
            "explanation": {
              "approach": "Guarantee results.",
              "rationale": "Blanket assurances ignore his experience and risk credibility.",
              "keyIndicators": [
                "Past failed attempts"
              ],
              "commonMistake": "Overselling the intervention."
            }
          },
          {
            "id": "b",
            "text": "Validating him and explaining how graduated exposure differs from flooding",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Distinguishing structured exposure from past flooding rebuilds trust.",
            "explanation": {
              "approach": "Validate the past experience and contrast it with planned, graded exposure.",
              "rationale": "His earlier \"forcing\" was unstructured flooding; explaining the difference engages him.",
              "keyIndicators": [
                "\"Forcing made it worse\""
              ],
              "commonMistake": "Dismissing his prior experience."
            }
          },
          {
            "id": "c",
            "text": "Switching him to a completely different approach that avoids any exposure entirely",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dropping exposure removes the most effective ingredient.",
            "explanation": {
              "approach": "Abandon exposure.",
              "rationale": "Exposure is core to social anxiety treatment and should be done well, not avoided.",
              "keyIndicators": [
                "Avoidance maintains fear"
              ],
              "commonMistake": "Removing the active ingredient."
            }
          },
          {
            "id": "d",
            "text": "Telling him his previous attempts were not real exposure",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Flatly invalidating his account weakens the alliance.",
            "explanation": {
              "approach": "Dismiss his prior attempts.",
              "rationale": "Even if technically true, a curt dismissal feels invalidating; validate first.",
              "keyIndicators": [
                "Skeptical adolescent"
              ],
              "commonMistake": "Correcting without validating."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "core",
        "question": "His parents saying \"just be outgoing\" affects treatment how?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "It has essentially no impact on his treatment at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Invalidation from parents meaningfully shapes the work.",
            "explanation": {
              "approach": "Treat the parents' stance as irrelevant.",
              "rationale": "Family invalidation affects shame and help-seeking and cannot be ignored.",
              "keyIndicators": [
                "Parental pressure"
              ],
              "commonMistake": "Underrating family dynamics."
            }
          },
          {
            "id": "b",
            "text": "It increases his shame and reduces his willingness to seek help",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Invalidation raises shame and lowers engagement.",
            "explanation": {
              "approach": "Recognize the comment as invalidating and address it.",
              "rationale": "Being told to simply change deepens shame and discourages help-seeking.",
              "keyIndicators": [
                "Shame about symptoms"
              ],
              "commonMistake": "Ignoring the family's impact on engagement."
            }
          },
          {
            "id": "c",
            "text": "It reflects the correct approach the parents should take",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Endorsing the comment validates a harmful message.",
            "explanation": {
              "approach": "Agree with the parents.",
              "rationale": "\"Just be outgoing\" misunderstands the disorder and worsens shame.",
              "keyIndicators": [
                "Clinical, not willful, avoidance"
              ],
              "commonMistake": "Validating invalidation."
            }
          },
          {
            "id": "d",
            "text": "It means family therapy should replace his individual work",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Family involvement helps but need not replace individual care.",
            "explanation": {
              "approach": "Switch entirely to family therapy.",
              "rationale": "Psychoeducation for the family can complement, not supplant, his exposure work.",
              "keyIndicators": [
                "Individual exposure underway"
              ],
              "commonMistake": "Overcorrecting toward family-only treatment."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "What are the MOST effective components for social anxiety?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Relaxation training delivered on its own",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Relaxation alone is insufficient for social anxiety.",
            "explanation": {
              "approach": "Rely on relaxation only.",
              "rationale": "Without cognitive work and exposure, relaxation does not resolve social anxiety.",
              "keyIndicators": [
                "Avoidance and cognitions"
              ],
              "commonMistake": "Treating arousal but not avoidance."
            }
          },
          {
            "id": "b",
            "text": "Cognitive restructuring, exposure, and social skills as needed",
            "isCorrect": true,
            "weight": 3,
            "rationale": "CBT combining restructuring, exposure, and skills is most effective.",
            "explanation": {
              "approach": "Combine cognitive work, graded exposure, and skills practice.",
              "rationale": "These CBT components together have the strongest evidence for social anxiety.",
              "keyIndicators": [
                "Negative predictions",
                "Avoidance"
              ],
              "commonMistake": "Using a single component in isolation."
            }
          },
          {
            "id": "c",
            "text": "Medication used by itself without any therapy",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Medication alone omits the behavioral change he needs.",
            "explanation": {
              "approach": "Medicate without therapy.",
              "rationale": "Pharmacotherapy can help but leaves avoidance and cognitions unaddressed.",
              "keyIndicators": [
                "Behavioral avoidance"
              ],
              "commonMistake": "Skipping the behavioral work."
            }
          },
          {
            "id": "d",
            "text": "Open-ended insight-oriented exploration of his early childhood and past",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Insight work is not first-line for social anxiety.",
            "explanation": {
              "approach": "Pursue insight into origins.",
              "rationale": "This lacks first-line evidence and delays exposure-based change.",
              "keyIndicators": [
                "Treatable with CBT"
              ],
              "commonMistake": "Choosing a non-evidence-based modality."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "His fear that others notice his blushing represents what?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "A realistic appraisal of how closely others watch him",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Endorsing the appraisal as accurate reinforces the distortion.",
            "explanation": {
              "approach": "Confirm others are watching.",
              "rationale": "The belief overestimates scrutiny; validating it strengthens the fear.",
              "keyIndicators": [
                "Fear of being noticed"
              ],
              "commonMistake": "Confirming a cognitive distortion."
            }
          },
          {
            "id": "b",
            "text": "Negative predictions paired with the spotlight effect",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Overestimating scrutiny and negative outcomes are core distortions.",
            "explanation": {
              "approach": "Name the spotlight effect and negative predictions.",
              "rationale": "These cognitive distortions are central treatment targets in social anxiety.",
              "keyIndicators": [
                "\"Others will think I'm weird\""
              ],
              "commonMistake": "Treating the prediction as fact."
            }
          },
          {
            "id": "c",
            "text": "Body dysmorphic concerns about his physical appearance",
            "isCorrect": false,
            "weight": -1,
            "rationale": "The fear is about scrutiny, not perceived defect.",
            "explanation": {
              "approach": "Reframe as body dysmorphia.",
              "rationale": "His concern is social evaluation, not a preoccupation with a flaw.",
              "keyIndicators": [
                "Fear of judgment"
              ],
              "commonMistake": "Misattributing to BDD."
            }
          },
          {
            "id": "d",
            "text": "Paranoid ideation about the intentions of other people",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Social-evaluative fear is not paranoia.",
            "explanation": {
              "approach": "Label it paranoia.",
              "rationale": "Fear of judgment with insight is not persecutory delusion.",
              "keyIndicators": [
                "Insight retained"
              ],
              "commonMistake": "Confusing social fear with paranoia."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "Tyler is a minor. When may you break confidentiality with his parents?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Whenever his parents request information about sessions",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Parental request alone does not justify disclosure.",
            "explanation": {
              "approach": "Disclose on request.",
              "rationale": "Routine parental requests do not override the minor's therapeutic privacy.",
              "keyIndicators": [
                "No safety issue"
              ],
              "commonMistake": "Treating any request as grounds to disclose."
            }
          },
          {
            "id": "b",
            "text": "When there is risk of harm, abuse, or a legal mandate",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Disclosure is warranted for safety or legal requirements.",
            "explanation": {
              "approach": "Limit disclosure to safety or legal mandates.",
              "rationale": "Confidentiality with minors yields when there is risk of harm, abuse, or a legal duty.",
              "keyIndicators": [
                "Standard limits to confidentiality"
              ],
              "commonMistake": "Disclosing outside the recognized limits."
            }
          },
          {
            "id": "c",
            "text": "Never, because his disclosures are always fully protected",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Confidentiality is not absolute when safety is at stake.",
            "explanation": {
              "approach": "Promise absolute confidentiality.",
              "rationale": "Safety and legal exceptions always apply and must be explained up front.",
              "keyIndicators": [
                "Limits exist"
              ],
              "commonMistake": "Overpromising confidentiality."
            }
          },
          {
            "id": "d",
            "text": "At the end of each and every session as a routine",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Routine disclosure would gut the therapeutic relationship.",
            "explanation": {
              "approach": "Report after every session.",
              "rationale": "Habitual disclosure destroys trust and exceeds ethical limits.",
              "keyIndicators": [
                "Trust is essential"
              ],
              "commonMistake": "Routine over-disclosure to parents."
            }
          }
        ]
      }
    ],
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Social Anxiety Disorder: marked fear of scrutiny with avoidance, persistent and impairing; distinguished from GAD and autism by social-evaluative focus."
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "Social anxiety: CBT with cognitive restructuring and graded exposure is first-line; structured exposure differs from unstructured flooding."
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Minors: clarify limits of confidentiality up front; disclose to parents for risk of harm, abuse, or legal mandate, not on routine request."
      }
    ]
  },
  {
    "id": "ncmhce-G043",
    "title": "Binge-Purge Cycle with Body Concerns",
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
        "id": "bulimia",
        "name": "Bulimia Nervosa",
        "isCorrect": true
      },
      {
        "id": "anorexia",
        "name": "Anorexia Nervosa, Binge-Purge Type",
        "isCorrect": false
      },
      {
        "id": "bed",
        "name": "Binge Eating Disorder",
        "isCorrect": false
      },
      {
        "id": "mdd",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Stephanie, 27, describes feeling \"out of control\" around food, with binges three to four times weekly followed by vomiting. She is of normal weight, fears gaining, has had the pattern for five years, and keeps it secret from her fiancé.",
      "session1": "She describes rigid food rules that she breaks, leading to binges, after which she vomits, feels ashamed, and resolves to restrict more. She exercises two hours daily and has dental problems and throat soreness. She asks for help to \"get control\" and lose ten pounds.",
      "session2": "She told her fiancé, who is supportive but \"doesn't understand\" and thinks she should \"just stop.\" After a work deadline her episodes became daily, and she questions whether therapy is working."
    },
    "diagnosticRationale": "Stephanie meets Bulimia Nervosa: recurrent binge eating with compensatory vomiting and excessive exercise at least weekly for three or more months, with self-evaluation unduly influenced by shape and weight. Normal weight rules out anorexia, and the compensatory behaviors rule out binge eating disorder.",
    "questions": [
      {
        "id": "q1",
        "domain": "intake",
        "question": "Stephanie wants to \"lose ten pounds.\" Address this by doing what?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Agreeing that weight loss will help her feel in control",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Endorsing weight loss reinforces the restrict-binge cycle.",
            "explanation": {
              "approach": "Support the weight-loss goal.",
              "rationale": "Dietary restriction drives the binge-purge cycle; endorsing it worsens the disorder.",
              "keyIndicators": [
                "Rigid rules trigger binges"
              ],
              "commonMistake": "Treating weight loss as the goal."
            }
          },
          {
            "id": "b",
            "text": "Exploring her goals and teaching about the restrict-binge cycle",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Psychoeducation about restriction reframes the real target.",
            "explanation": {
              "approach": "Unpack the goal and explain how restriction fuels bingeing.",
              "rationale": "Helping her see restriction as the driver shifts treatment toward regular eating.",
              "keyIndicators": [
                "Restrict-then-binge pattern"
              ],
              "commonMistake": "Accepting the weight-loss frame uncritically."
            }
          },
          {
            "id": "c",
            "text": "Stating that weight loss is simply not an appropriate goal",
            "isCorrect": false,
            "weight": 0,
            "rationale": "A flat refusal without exploration can rupture rapport.",
            "explanation": {
              "approach": "Reject the goal outright.",
              "rationale": "Correct in spirit, but exploring and educating engages her better than a blunt no.",
              "keyIndicators": [
                "Ambivalent motivation"
              ],
              "commonMistake": "Refusing without exploring meaning."
            }
          },
          {
            "id": "d",
            "text": "Referring her to a nutritionist for a weight-loss plan",
            "isCorrect": false,
            "weight": -1,
            "rationale": "A weight-loss referral reinforces the disorder.",
            "explanation": {
              "approach": "Outsource a diet plan.",
              "rationale": "Sending her for weight loss can entrench restriction and bingeing.",
              "keyIndicators": [
                "Eating-disorder dynamics"
              ],
              "commonMistake": "Referring toward the symptom."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "What has the STRONGEST evidence for bulimia nervosa?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Open-ended psychodynamic psychotherapy over the long term",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Psychodynamic therapy is not first-line for bulimia.",
            "explanation": {
              "approach": "Pursue long-term insight work.",
              "rationale": "It lacks the first-line evidence that enhanced CBT has for bulimia.",
              "keyIndicators": [
                "Active binge-purge cycle"
              ],
              "commonMistake": "Choosing a non-first-line modality."
            }
          },
          {
            "id": "b",
            "text": "Enhanced cognitive behavioral therapy, known as CBT-E",
            "isCorrect": true,
            "weight": 3,
            "rationale": "CBT-E is first-line for adult bulimia.",
            "explanation": {
              "approach": "Deliver enhanced CBT targeting eating and shape concerns.",
              "rationale": "CBT-E has the strongest evidence base for adult bulimia nervosa.",
              "keyIndicators": [
                "Recurrent binge-purge",
                "Shape/weight overvaluation"
              ],
              "commonMistake": "Selecting a weaker modality."
            }
          },
          {
            "id": "c",
            "text": "Family-based treatment as the primary adult intervention",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Family-based treatment is primarily for adolescents.",
            "explanation": {
              "approach": "Apply FBT to an adult.",
              "rationale": "FBT is first-line for adolescents, not the primary adult approach.",
              "keyIndicators": [
                "Adult client"
              ],
              "commonMistake": "Misapplying an adolescent model."
            }
          },
          {
            "id": "d",
            "text": "Nutritional counseling delivered on its own",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Nutrition alone does not address the maintaining cognitions.",
            "explanation": {
              "approach": "Use nutrition counseling only.",
              "rationale": "Useful as a component, but it does not treat the cognitive maintenance of bulimia.",
              "keyIndicators": [
                "Cognitive overvaluation"
              ],
              "commonMistake": "Substituting a component for full treatment."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "intake",
        "question": "Her dental problems and throat soreness require what?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "Documenting the findings and continuing as usual",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Documenting alone neglects real medical risk.",
            "explanation": {
              "approach": "Note and move on.",
              "rationale": "Purging complications need medical evaluation, not just charting.",
              "keyIndicators": [
                "Erosion, throat soreness"
              ],
              "commonMistake": "Ignoring medical sequelae of purging."
            }
          },
          {
            "id": "b",
            "text": "A medical evaluation for the complications of purging",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Purging complications warrant medical monitoring.",
            "explanation": {
              "approach": "Refer for medical assessment of purging effects.",
              "rationale": "Dental erosion and electrolyte risks from purging require medical evaluation.",
              "keyIndicators": [
                "Frequent vomiting"
              ],
              "commonMistake": "Overlooking medical safety."
            }
          },
          {
            "id": "c",
            "text": "Focusing on reducing the purging before anything else",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Reducing purging matters but does not replace a medical check.",
            "explanation": {
              "approach": "Address purging and skip the medical referral.",
              "rationale": "Behavioral change is important, but current complications still need evaluation.",
              "keyIndicators": [
                "Existing physical signs"
              ],
              "commonMistake": "Treating behavior while ignoring the body."
            }
          },
          {
            "id": "d",
            "text": "An immediate inpatient eating-disorder referral now",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Inpatient care is premature absent acute instability.",
            "explanation": {
              "approach": "Escalate to inpatient.",
              "rationale": "Outpatient with medical evaluation is appropriate unless she is medically unstable.",
              "keyIndicators": [
                "No acute instability noted"
              ],
              "commonMistake": "Over-escalating level of care."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "After symptoms increase she asks if therapy is working. BEST response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Reassuring her broadly that recovery simply takes time",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Generic reassurance skips the trigger and her concern.",
            "explanation": {
              "approach": "Offer a time platitude.",
              "rationale": "It soothes briefly but neither validates nor examines the relapse trigger.",
              "keyIndicators": [
                "Deadline-related spike"
              ],
              "commonMistake": "Reassuring without exploring triggers."
            }
          },
          {
            "id": "b",
            "text": "Validating her, normalizing non-linear recovery, and examining triggers",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Normalizing setbacks while analyzing triggers keeps her engaged.",
            "explanation": {
              "approach": "Validate the discouragement, frame recovery as non-linear, and review the deadline trigger.",
              "rationale": "Setbacks are expected; examining triggers turns the lapse into useful data.",
              "keyIndicators": [
                "Symptom spike after stress"
              ],
              "commonMistake": "Treating a lapse as failure."
            }
          },
          {
            "id": "c",
            "text": "Suggesting that she step up to intensive treatment now",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Escalating on one stress-linked spike is premature.",
            "explanation": {
              "approach": "Recommend a higher level of care.",
              "rationale": "A single stress-related increase does not by itself warrant intensive treatment.",
              "keyIndicators": [
                "Identifiable trigger"
              ],
              "commonMistake": "Over-escalating after one setback."
            }
          },
          {
            "id": "d",
            "text": "Reviewing her past treatment successes and then moving the session along as usual",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Highlighting wins alone sidesteps the current trigger.",
            "explanation": {
              "approach": "List prior gains and proceed.",
              "rationale": "Encouraging, but it bypasses examining what drove the increase.",
              "keyIndicators": [
                "Recent relapse"
              ],
              "commonMistake": "Cheerleading instead of analyzing."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "Her fiancé \"doesn't understand.\" What is the MOST helpful step?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Advising her to avoid discussing food or weight with him",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Avoidance does not build the support she needs.",
            "explanation": {
              "approach": "Have her sidestep the topic at home.",
              "rationale": "Avoidance leaves him uninformed and her unsupported.",
              "keyIndicators": [
                "Partner wants to help"
              ],
              "commonMistake": "Encouraging concealment over education."
            }
          },
          {
            "id": "b",
            "text": "With her consent, providing psychoeducation to her fiancé",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Consent-based partner education improves support.",
            "explanation": {
              "approach": "Offer, with her written consent, to educate her fiancé.",
              "rationale": "Informed partners provide better support; consent protects her autonomy.",
              "keyIndicators": [
                "\"Just stop\" misunderstanding"
              ],
              "commonMistake": "Either excluding the partner or sharing without consent."
            }
          },
          {
            "id": "c",
            "text": "Telling her to focus solely on herself and ignore him",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Dismissing the relationship forgoes a support resource.",
            "explanation": {
              "approach": "Cut the partner out.",
              "rationale": "A supportive partner is an asset when properly informed.",
              "keyIndicators": [
                "Supportive fiancé"
              ],
              "commonMistake": "Ignoring available support."
            }
          },
          {
            "id": "d",
            "text": "Referring her to a peer support group as the main step",
            "isCorrect": false,
            "weight": 0,
            "rationale": "A group can help but does not resolve the partner gap.",
            "explanation": {
              "approach": "Send her to a support group instead.",
              "rationale": "Groups are useful, but they do not address the fiancé's misunderstanding directly.",
              "keyIndicators": [
                "Partner misunderstanding"
              ],
              "commonMistake": "Redirecting away from the actual issue."
            }
          }
        ]
      }
    ],
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Bulimia Nervosa: recurrent binge-purge at least weekly for three months; purging can cause dental erosion and electrolyte disturbance requiring medical evaluation."
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "Bulimia: enhanced CBT (CBT-E) is first-line for adults; dietary restriction maintains the binge-purge cycle and is a treatment target."
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Obtain informed, written consent before involving or educating a partner or other third party."
      }
    ]
  },
  {
    "id": "ncmhce-G044",
    "title": "First-Episode Psychosis in a Young Adult",
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
        "id": "schizo",
        "name": "Schizophrenia",
        "isCorrect": true
      },
      {
        "id": "brief",
        "name": "Brief Psychotic Disorder",
        "isCorrect": false
      },
      {
        "id": "bipolar",
        "name": "Bipolar I with Psychotic Features",
        "isCorrect": false
      },
      {
        "id": "substance",
        "name": "Substance-Induced Psychotic Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Daniel, 22, a Latino man, is brought in by his mother. He is withdrawn and suspicious and says things that \"don't make sense.\" He dropped out of school six months ago, rarely leaves his room, and reports that people are monitoring him through his phone and can hear his thoughts. He is disheveled.",
      "session1": "His speech is disorganized, and he hears voices that comment and occasionally command. He believes a professor implanted a chip in him, and his affect is flat. His mother reports an eight-month gradual decline preceding the acute symptoms.",
      "session2": "He has started an antipsychotic with some improvement and remains suspicious but more engaged. He asks whether he is \"going crazy\" and will be normal again, and his mother asks about his prognosis."
    },
    "diagnosticRationale": "Daniel meets Schizophrenia: two or more active-phase symptoms (delusions, hallucinations, disorganized speech, negative symptoms) for at least one month, with continuous signs for six or more months including the prodrome. The duration rules out Brief Psychotic Disorder, and the absence of a mood episode argues against bipolar disorder.",
    "questions": [
      {
        "id": "q1",
        "domain": "treatment",
        "question": "Daniel asks if he will be \"normal again.\" What is the MOST therapeutic response?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Reassuring him confidently that he will make a full and complete recovery soon",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Overpromising recovery is dishonest and risks later distrust.",
            "explanation": {
              "approach": "Guarantee full recovery.",
              "rationale": "False certainty about outcome undermines trust and informed hope.",
              "keyIndicators": [
                "Chronic-course condition"
              ],
              "commonMistake": "Overpromising outcomes."
            }
          },
          {
            "id": "b",
            "text": "Validating him, offering honest hope, and affirming a meaningful life",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Balanced, honest hope supports engagement and recovery.",
            "explanation": {
              "approach": "Acknowledge his fear and give honest, hopeful information about a meaningful life.",
              "rationale": "Honest hope about a chronic but manageable condition supports engagement.",
              "keyIndicators": [
                "\"Am I going crazy?\"",
                "Early treatment response"
              ],
              "commonMistake": "Either false reassurance or grim certainty."
            }
          },
          {
            "id": "c",
            "text": "Telling him plainly that the prognosis is poor",
            "isCorrect": false,
            "weight": -2,
            "rationale": "A bleak message harms hope and engagement.",
            "explanation": {
              "approach": "Deliver a pessimistic verdict.",
              "rationale": "Hopelessness reduces engagement and is not supported by early response.",
              "keyIndicators": [
                "Some early improvement"
              ],
              "commonMistake": "Removing hope."
            }
          },
          {
            "id": "d",
            "text": "Redirecting him away from the question toward symptoms",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Avoiding the question misses a chance to build alliance.",
            "explanation": {
              "approach": "Deflect to a symptom review.",
              "rationale": "Sidestepping his concern forgoes a meaningful, validating exchange.",
              "keyIndicators": [
                "He is reaching out"
              ],
              "commonMistake": "Avoiding the emotional question."
            }
          }
        ]
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "What is the MOST important psychosocial intervention for first-episode psychosis?",
        "evidenceRef": [
          "R2"
        ],
        "options": [
          {
            "id": "a",
            "text": "Insight-oriented psychotherapy offered as the single central treatment approach",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Insight work is not the priority in first-episode psychosis.",
            "explanation": {
              "approach": "Lead with insight-oriented therapy.",
              "rationale": "It is not the evidence-based core for early psychosis.",
              "keyIndicators": [
                "Active psychosis"
              ],
              "commonMistake": "Choosing insight work over coordinated care."
            }
          },
          {
            "id": "b",
            "text": "Coordinated specialty care with case management and family education",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Coordinated specialty care yields the best early-psychosis outcomes.",
            "explanation": {
              "approach": "Provide team-based care: case management, family education, supported employment, and CBT for psychosis.",
              "rationale": "Coordinated specialty care is the evidence-based model with the best first-episode outcomes.",
              "keyIndicators": [
                "First episode",
                "Family involved"
              ],
              "commonMistake": "Relying on a single modality."
            }
          },
          {
            "id": "c",
            "text": "Placement in a long-term residential facility now",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Residential placement is not indicated given his response.",
            "explanation": {
              "approach": "Move him to residential care.",
              "rationale": "He is improving as an outpatient; residential placement is not warranted.",
              "keyIndicators": [
                "Responding to treatment"
              ],
              "commonMistake": "Over-restricting the setting."
            }
          },
          {
            "id": "d",
            "text": "Enrollment in a general group therapy program",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Generic group therapy is not the core early intervention.",
            "explanation": {
              "approach": "Default to a general group.",
              "rationale": "Groups may help later but are not the central first-episode intervention.",
              "keyIndicators": [
                "Needs coordinated care"
              ],
              "commonMistake": "Substituting a generic group for specialty care."
            }
          }
        ]
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "He hears commanding voices. What is the PRIORITY assessment?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "How often the voices tend to occur each day",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Frequency matters less than content and compliance for risk.",
            "explanation": {
              "approach": "Quantify frequency first.",
              "rationale": "Frequency is useful but secondary to what the commands say and whether he obeys.",
              "keyIndicators": [
                "Command hallucinations"
              ],
              "commonMistake": "Prioritizing frequency over content."
            }
          },
          {
            "id": "b",
            "text": "What the voices command and whether he has followed them",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Command content and compliance drive risk assessment.",
            "explanation": {
              "approach": "Ask what the commands instruct and whether he has acted on them.",
              "rationale": "Command content and any history of compliance are the key safety variables.",
              "keyIndicators": [
                "Commanding voices"
              ],
              "commonMistake": "Missing the risk-relevant details."
            }
          },
          {
            "id": "c",
            "text": "Whether he recognizes the voices as belonging to someone",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Voice identity is less urgent than safety content.",
            "explanation": {
              "approach": "Explore whose voices they are.",
              "rationale": "Identity is clinically interesting but not the safety priority.",
              "keyIndicators": [
                "Risk focus needed"
              ],
              "commonMistake": "Pursuing content unrelated to risk."
            }
          },
          {
            "id": "d",
            "text": "When exactly the voices first started for him",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Onset timing is useful history but not the safety priority.",
            "explanation": {
              "approach": "Establish onset timing.",
              "rationale": "Onset informs diagnosis but does not address immediate risk.",
              "keyIndicators": [
                "Safety first"
              ],
              "commonMistake": "Choosing history over risk."
            }
          }
        ]
      },
      {
        "id": "q4",
        "domain": "ethics",
        "question": "His mother asks about his prognosis. What is the BEST response?",
        "evidenceRef": [
          "R3"
        ],
        "options": [
          {
            "id": "a",
            "text": "Sharing the full clinical details with her directly",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Disclosing without consent violates his confidentiality.",
            "explanation": {
              "approach": "Tell her everything.",
              "rationale": "He is an adult; sharing details without consent breaches confidentiality.",
              "keyIndicators": [
                "Adult client"
              ],
              "commonMistake": "Disclosing to family without consent."
            }
          },
          {
            "id": "b",
            "text": "Explaining you need his consent and offering a joint conversation",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Seeking consent and inviting a joint meeting respects confidentiality.",
            "explanation": {
              "approach": "Note the confidentiality limit and propose a consented, joint discussion.",
              "rationale": "Adult confidentiality applies; a joint conversation with consent serves everyone.",
              "keyIndicators": [
                "Family wants to help"
              ],
              "commonMistake": "Either disclosing or shutting the family out."
            }
          },
          {
            "id": "c",
            "text": "Refusing to speak with the mother about anything at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "A blanket refusal needlessly excludes a key support.",
            "explanation": {
              "approach": "Decline all contact.",
              "rationale": "You can engage her with consent and offer general education without disclosing specifics.",
              "keyIndicators": [
                "Supportive mother"
              ],
              "commonMistake": "Over-applying confidentiality."
            }
          },
          {
            "id": "d",
            "text": "Providing only general educational information about the illness",
            "isCorrect": false,
            "weight": 0,
            "rationale": "General education is acceptable but incomplete as the best step.",
            "explanation": {
              "approach": "Give only generic information.",
              "rationale": "Reasonable, but seeking consent for a joint conversation serves the family better.",
              "keyIndicators": [
                "Wants his prognosis"
              ],
              "commonMistake": "Stopping at generic information."
            }
          }
        ]
      },
      {
        "id": "q5",
        "domain": "core",
        "question": "The eight-month decline before acute symptoms is BEST described as what?",
        "evidenceRef": [
          "R1"
        ],
        "options": [
          {
            "id": "a",
            "text": "A progression from depression into psychosis",
            "isCorrect": false,
            "weight": -1,
            "rationale": "No mood episode is described to support this.",
            "explanation": {
              "approach": "Label it depression-to-psychosis.",
              "rationale": "There is no documented depressive episode driving the decline.",
              "keyIndicators": [
                "No mood episode noted"
              ],
              "commonMistake": "Inventing a mood prodrome."
            }
          },
          {
            "id": "b",
            "text": "The prodromal phase preceding frank psychosis",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Gradual functional decline before psychosis is the prodrome.",
            "explanation": {
              "approach": "Name the gradual decline as the prodrome.",
              "rationale": "The prodrome is the period of functional decline that precedes active psychosis.",
              "keyIndicators": [
                "Eight-month withdrawal and decline"
              ],
              "commonMistake": "Overlooking the prodromal phase."
            }
          },
          {
            "id": "c",
            "text": "A stretch of entirely normal young-adult development",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Calling clear decline normal misses the warning phase.",
            "explanation": {
              "approach": "Dismiss it as typical.",
              "rationale": "Months of withdrawal and dropping out are not normal development.",
              "keyIndicators": [
                "Dropped out, withdrew"
              ],
              "commonMistake": "Normalizing a prodrome."
            }
          },
          {
            "id": "d",
            "text": "An emerging avoidant personality disorder pattern",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Prodromal decline is not a personality disorder.",
            "explanation": {
              "approach": "Reframe it as a personality disorder.",
              "rationale": "The trajectory into psychosis is a prodrome, not avoidant personality.",
              "keyIndicators": [
                "Leads into psychosis"
              ],
              "commonMistake": "Mislabeling the prodrome."
            }
          }
        ]
      }
    ],
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Schizophrenia: two-plus active-phase symptoms for one month with six-plus months of continuous signs including a prodrome; assess command-hallucination risk."
      },
      {
        "id": "R2",
        "source": "APA CPG",
        "detail": "First-episode psychosis: coordinated specialty care (case management, family education, supported employment, CBT for psychosis) yields the best outcomes."
      },
      {
        "id": "R3",
        "source": "ACA Code of Ethics",
        "detail": "Adult confidentiality applies; involve family only with the client's consent, offering a joint conversation where appropriate."
      }
    ]
  }
];

module.exports = { MIGRATED_CASES };
