// ============================================================================
// migrated-cases.js — Cases ported from the v4 React prototype into the
// current dual-mode + documentary-evidence schema. Imported as 'sme_review'
// (pending your verification) so references get an SME pass before publishing.
// Conforms to caseSchema.js. IDs use the G-namespace (G035+) to avoid collisions.
// ============================================================================

const MIGRATED_CASES = [
  {
    id: 'ncmhce-G035',
    title: 'Adult Depression with Caregiver Stress',
    category: 'Depressive',
    difficulty: 'medium',
    primaryDiagnosis: { name: 'Major Depressive Disorder, Single Episode, Moderate', code: 'F32.1' },
    diagnosis: { name: 'Major Depressive Disorder, Single Episode, Moderate', code: 'F32.1' },
    differentialOptions: [
      { id: 'mdd', name: 'Major Depressive Disorder', isCorrect: true },
      { id: 'gad', name: 'Generalized Anxiety Disorder', isCorrect: false },
      { id: 'adjustment', name: 'Adjustment Disorder with Depressed Mood', isCorrect: false },
      { id: 'pdd', name: 'Persistent Depressive Disorder', isCorrect: false },
    ],
    narrative: {
      intake: 'Maria, 34, a married Latina elementary teacher and mother of two (ages 6 and 9), is referred by her PCP for three months of persistent sadness and declining work function. Symptoms began after her mother was diagnosed with Alzheimer\'s. She is tearful, makes limited eye contact, and speaks softly.',
      session1: 'Maria reports depressed mood, anhedonia, fatigue, poor concentration, worthlessness, an 8-pound weight loss, and insomnia. She describes passive suicidal ideation ("it would be easier if I didn\'t wake up") but denies intent or plan and says she would never act because of her children. Her marriage is supportive, but there is sibling conflict over her mother\'s care.',
      session2: 'She attempted behavioral activation but found it hard, managing one walk before fatigue stopped her, and called in sick twice. Her husband has taken on more and seems frustrated; Maria feels guilty and worries she is a burden. She remains tearful but engaged in the work.',
    },
    diagnosticRationale: 'Maria meets MDD criteria: five or more symptoms present for at least two weeks at moderate severity, including depressed mood and anhedonia. It is not Adjustment Disorder because full MDD criteria are met, and not Persistent Depressive Disorder because the course is only three months. Generalized worry is secondary to the mood episode rather than free-floating.',
    questions: [
      {
        id: 'q1', domain: 'treatment',
        question: 'Which treatment approach is MOST appropriate for moderate MDD?',
        options: [
          { id: 'a', text: 'CBT with behavioral activation, scheduling mastery and pleasure activities', isCorrect: true, weight: 3,
            rationale: 'Behavioral activation is a first-line, evidence-based approach for moderate MDD.',
            explanation: {
              approach: 'Use structured CBT and schedule rewarding, mastery-building activities.',
              rationale: 'Behavioral activation directly counters withdrawal and anhedonia and is well supported for moderate depression.',
              keyIndicators: ['Anhedonia and social withdrawal', 'Functioning declining at work and home'],
              commonMistake: 'Choosing an unstructured or insight-only therapy when a protocol-driven approach is indicated.',
            } },
          { id: 'b', text: 'Psychoanalytic therapy focused on early childhood conflict and transference', isCorrect: false, weight: -2,
            rationale: 'Insight-oriented analysis is not first-line for moderate MDD and delays relief.',
            explanation: {
              approach: 'Pursue long-term exploration of unconscious conflict.',
              rationale: 'This lacks first-line evidence for moderate MDD and postpones active symptom relief.',
              keyIndicators: ['Acute functional impairment needing timely help'],
              commonMistake: 'Defaulting to depth work when an active, structured protocol is indicated.',
            } },
          { id: 'c', text: 'Supportive counseling alone, providing empathy without a structured protocol', isCorrect: false, weight: -1,
            rationale: 'Support is necessary but insufficient as the sole treatment here.',
            explanation: {
              approach: 'Offer warmth and validation without a specific protocol.',
              rationale: 'Empathy aids engagement but does not deliver the active ingredients depression care requires.',
              keyIndicators: ['Clear, treatable depressive episode'],
              commonMistake: 'Mistaking rapport for treatment of a protocol-responsive condition.',
            } },
          { id: 'd', text: 'Immediate referral to intensive outpatient programming for daily structure', isCorrect: false, weight: 0,
            rationale: 'IOP is a higher level of care than this moderate, outpatient case requires.',
            explanation: {
              approach: 'Escalate to a daily structured program.',
              rationale: 'Moderate MDD with protective factors is appropriately treated in routine outpatient care.',
              keyIndicators: ['Moderate severity with no acute risk'],
              commonMistake: 'Over-escalating level of care without an acuity indication.',
            } },
        ],
        evidenceRef: ['R2', 'R1'],
      },
      {
        id: 'q2', domain: 'counseling',
        question: 'Maria reports passive suicidal ideation with strong protective factors. What is the BEST next step?',
        options: [
          { id: 'a', text: 'Arrange immediate involuntary hospitalization for any suicidal ideation present', isCorrect: false, weight: -2,
            rationale: 'Reflexive hospitalization for passive ideation is disproportionate and harms rapport.',
            explanation: {
              approach: 'Escalate to inpatient on the basis of ideation alone.',
              rationale: 'Passive ideation with protective factors does not meet criteria for involuntary care and can damage the alliance.',
              keyIndicators: ['Passive ideation without intent or plan', 'Children as a protective factor'],
              commonMistake: 'Equating any ideation with imminent risk.',
            } },
          { id: 'b', text: 'Complete a collaborative safety assessment and build a safety plan', isCorrect: true, weight: 3,
            rationale: 'Collaborative assessment and safety planning fit passive ideation with protective factors.',
            explanation: {
              approach: 'Assess risk together and co-create a written safety plan.',
              rationale: 'Stepped risk assessment and safety planning are the guideline-concordant response to passive ideation.',
              keyIndicators: ['Passive SI without intent', 'Identifiable protective factors'],
              commonMistake: 'Skipping a structured assessment in either direction.',
            } },
          { id: 'c', text: 'Document the passive ideation and continue the session as planned', isCorrect: false, weight: -1,
            rationale: 'Documenting without assessing or planning leaves the risk unaddressed.',
            explanation: {
              approach: 'Note the statement and move on.',
              rationale: 'Disclosed ideation warrants active assessment, not passive documentation.',
              keyIndicators: ['Disclosed suicidal ideation'],
              commonMistake: 'Treating documentation as a substitute for a risk response.',
            } },
          { id: 'd', text: 'Defer all action and refer her to a psychiatrist before proceeding', isCorrect: false, weight: 0,
            rationale: 'Deferring the counselor\'s own risk response is not appropriate here.',
            explanation: {
              approach: 'Hand off risk to a prescriber.',
              rationale: 'Risk assessment and safety planning are within the counselor\'s scope and should not be deferred.',
              keyIndicators: ['Counselor can assess and plan now'],
              commonMistake: 'Outsourcing immediate risk steps that are within scope.',
            } },
        ],
        evidenceRef: ['R4'],
      },
      {
        id: 'q3', domain: 'counseling',
        question: 'Maria struggles to complete her behavioral activation homework. What is the MOST therapeutic response?',
        options: [
          { id: 'a', text: 'Explore the barriers together and break the task into smaller steps', isCorrect: true, weight: 3,
            rationale: 'Collaborative problem-solving with graded tasks addresses the barrier directly.',
            explanation: {
              approach: 'Examine the obstacles and scale tasks down to achievable steps.',
              rationale: 'Grading tasks and exploring barriers is the standard way to restore behavioral activation.',
              keyIndicators: ['Fatigue limiting activity', 'Engaged but stuck on homework'],
              commonMistake: 'Pushing the same task harder instead of grading it.',
            } },
          { id: 'b', text: 'Tell her she simply needs to try harder before the next session', isCorrect: false, weight: -2,
            rationale: 'Exhortation increases guilt and ignores the actual barriers.',
            explanation: {
              approach: 'Apply pressure to comply.',
              rationale: 'Blaming effort worsens self-criticism and does not solve the obstacle.',
              keyIndicators: ['Existing guilt and self-blame'],
              commonMistake: 'Confusing motivation with capacity in depression.',
            } },
          { id: 'c', text: 'Drop the homework approach since it is clearly not working yet', isCorrect: false, weight: -1,
            rationale: 'Abandoning a first-line technique after one setback is premature.',
            explanation: {
              approach: 'Discard behavioral activation.',
              rationale: 'A single difficulty calls for adjustment, not abandonment of an evidence-based method.',
              keyIndicators: ['Early in the course of treatment'],
              commonMistake: 'Dropping a sound technique at the first obstacle.',
            } },
          { id: 'd', text: 'Reinterpret the difficulty as evidence of a more severe depressive episode', isCorrect: false, weight: 0,
            rationale: 'Reframing a normal setback as worsening is an unsupported leap.',
            explanation: {
              approach: 'Upgrade the severity label.',
              rationale: 'Homework difficulty is expected in depression and is not by itself a severity marker.',
              keyIndicators: ['Expected ambivalence and fatigue'],
              commonMistake: 'Over-pathologizing ordinary treatment friction.',
            } },
        ],
        evidenceRef: ['R2'],
      },
      {
        id: 'q4', domain: 'ethics',
        question: 'Maria asks you to speak with her husband about her care. What should you do FIRST?',
        options: [
          { id: 'a', text: 'Schedule a joint session with her husband at the next visit', isCorrect: false, weight: 0,
            rationale: 'Acting before consent and scope are clarified skips a required step.',
            explanation: {
              approach: 'Move straight to a joint meeting.',
              rationale: 'A joint session may be reasonable later, but only after consent and scope are addressed.',
              keyIndicators: ['No written consent on file yet'],
              commonMistake: 'Proceeding to contact before authorization.',
            } },
          { id: 'b', text: 'Discuss the request, obtain written consent, and clarify its scope', isCorrect: true, weight: 3,
            rationale: 'Written, informed consent must precede any third-party contact.',
            explanation: {
              approach: 'Talk through the request and document authorization and limits.',
              rationale: 'Informed consent and a clear scope are required before disclosing to or working with family.',
              keyIndicators: ['Client-initiated third-party contact'],
              commonMistake: 'Treating verbal agreement as sufficient authorization.',
            } },
          { id: 'c', text: 'Explain that you are ethically barred from any family contact', isCorrect: false, weight: -1,
            rationale: 'A blanket prohibition misstates the ethics; contact is allowed with consent.',
            explanation: {
              approach: 'Refuse all family involvement.',
              rationale: 'Family contact is permissible with the client\'s informed, written consent.',
              keyIndicators: ['Client wants appropriate involvement'],
              commonMistake: 'Overstating confidentiality as an absolute bar.',
            } },
          { id: 'd', text: 'Decline and suggest she share the session materials herself instead', isCorrect: false, weight: 0,
            rationale: 'Deflecting avoids the consent process the client actually requested.',
            explanation: {
              approach: 'Redirect the task back to the client.',
              rationale: 'This sidesteps a legitimate, consent-based request rather than handling it properly.',
              keyIndicators: ['Reasonable request for coordination'],
              commonMistake: 'Avoiding the consent conversation altogether.',
            } },
        ],
        evidenceRef: ['R3'],
      },
      {
        id: 'q5', domain: 'treatment',
        question: 'After three weeks of CBT, improvement is limited. What is the BEST adjustment?',
        options: [
          { id: 'a', text: 'Switch your theoretical orientation and restart treatment from scratch', isCorrect: false, weight: -1,
            rationale: 'Abandoning a first-line approach after three weeks is premature.',
            explanation: {
              approach: 'Replace the whole treatment model.',
              rationale: 'Three weeks is too early to judge CBT a failure or to discard it wholesale.',
              keyIndicators: ['Only three weeks elapsed'],
              commonMistake: 'Switching models before an adequate trial.',
            } },
          { id: 'b', text: 'Add a psychiatric consultation to consider adjunctive medication', isCorrect: true, weight: 3,
            rationale: 'Combined treatment improves outcomes for partial response in moderate MDD.',
            explanation: {
              approach: 'Augment therapy with a medication evaluation.',
              rationale: 'Adding pharmacotherapy is guideline-concordant when psychotherapy yields a partial response.',
              keyIndicators: ['Partial response so far', 'Moderate severity'],
              commonMistake: 'Persisting with monotherapy despite limited gains.',
            } },
          { id: 'c', text: 'Increase session frequency to twice weekly without other changes', isCorrect: false, weight: 0,
            rationale: 'More sessions alone may help but is not the best-supported next step.',
            explanation: {
              approach: 'Intensify the same intervention.',
              rationale: 'Frequency can be adjusted, but augmentation has stronger support for partial response.',
              keyIndicators: ['Limited gains after three weeks'],
              commonMistake: 'Adding more of the same approach instead of augmenting.',
            } },
          { id: 'd', text: 'Continue unchanged, since CBT typically needs twelve to sixteen weeks', isCorrect: false, weight: 0,
            rationale: 'Watchful waiting is defensible but passive given residual ideation.',
            explanation: {
              approach: 'Stay the course without changes.',
              rationale: 'Continuing is reasonable, but with residual passive ideation an active augmentation step is preferable.',
              keyIndicators: ['Residual passive ideation'],
              commonMistake: 'Waiting passively when augmentation is indicated.',
            } },
        ],
        evidenceRef: ['R2', 'R4'],
      },
    ],
    references: [
      { id: 'R1', source: 'DSM-5-TR', detail: 'MDD: five or more symptoms over two-plus weeks including depressed mood or anhedonia; moderate severity; rule out Adjustment Disorder and Persistent Depressive Disorder.' },
      { id: 'R2', source: 'APA CPG', detail: 'Depression: cognitive behavioral therapy with behavioral activation is first-line; add pharmacotherapy when psychotherapy yields a partial response.' },
      { id: 'R3', source: 'ACA Code of Ethics', detail: 'Informed, written consent and clear scope of services are required before disclosing to or coordinating with third parties (A.2, B.6).' },
      { id: 'R4', source: 'VA/DoD CPG', detail: 'Suicide risk: use collaborative assessment and safety planning; reserve higher levels of care for acute risk rather than passive ideation with strong protective factors.' },
    ],
  },
];

module.exports = { MIGRATED_CASES };
