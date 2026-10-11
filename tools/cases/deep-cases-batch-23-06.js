// deep-cases-batch-23-06.js — NCMHCE deep case: Constant fighting as one partner's depression returns (focus: Marital/partner communication problems)
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Id block D901–D910 reserved
// for the Oct 2026 Areas-of-Clinical-Focus fill (live DB generator was at D314).

const O = (id, text, weight, ex) => ({
  id,
  text,
  isCorrect: weight === 3,
  weight,
  rationale: ex.r,
  explanation: { approach: ex.approach, rationale: ex.why, keyIndicators: ex.keys, commonMistake: ex.mistake },
});
const Q = (id, domain, question, evidenceRef, options) => ({ id, domain, question, evidenceRef, options });

// ============================================================================
// D906 — Major Depressive Disorder, Moderate (F33.1) — Depressive — medium
// Population: couple_family
// ============================================================================
const D906 = {
  id: 'ncmhce-D906',
  title: 'Constant fighting as one partner’s depression returns',
  category: 'Depressive',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Major Depressive Disorder, Moderate', code: 'F33.1' },
  diagnosis: { name: 'Major Depressive Disorder, Moderate', code: 'F33.1' },
  differentialOptions: [
    { id: 'do1', name: 'Major Depressive Disorder, Moderate', isCorrect: true },
    { id: 'do2', name: 'Persistent Depressive Disorder', isCorrect: false },
    { id: 'do3', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
    { id: 'do4', name: 'Bipolar II Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Andre Baptiste, a 45-year-old Haitian American hospital pharmacist, and his wife Monique Baptiste, a 43-year-old African American paralegal, ' +
      'self-refer to an outpatient group practice for "constant fighting" over the past four months. They have been married 17 years and have two ' +
      'teenagers. Monique says Andre comes home, goes straight to the bedroom, has stopped going to church events with the family, and avoids sex and ' +
      'conversation; she has concluded he "doesn’t want to be married anymore" and admits she "goes after him" about it most evenings. Andre ' +
      'says he feels "flat and heavy" most of the day for about three months, has lost interest in things he used to enjoy, wakes at 4 a.m. unable to ' +
      'return to sleep, is exhausted, is making himself double-check orders at work because he cannot concentrate, and feels like "a burden." At 31, ' +
      'after his father’s death, he had a similar period treated with counseling and a medication from his primary care physician; he recovered ' +
      'fully and was well for more than a decade. Before any joint session, the counselor schedules a separate individual meeting with each partner.',
    session1:
      'In separate individual meetings, each partner is asked privately about physical violence, threats, intimidation, controlling behavior, and ' +
      'fear of the other. Both describe arguments as loud and hurtful but deny any physical violence, threats, coercion, or fear of their partner. ' +
      'Andre scores 15 on the PHQ-9, denies any lifetime period of elevated or expansive mood or decreased need for sleep, and drinks one or two beers ' +
      'on weekends. He says, "Sometimes I think Monique would be better off without me dragging her down." Asked directly, he describes a passive ' +
      'wish not to wake up on bad nights, with no method, plan, intent, or preparatory behavior and no history of attempts; he and the counselor ' +
      'complete a written safety plan, and he agrees to a medication evaluation with his physician. Monique reports frustration and loneliness without ' +
      'a depressive syndrome of her own. Both sign informed consent that defines the couple as the client and adopts a written no-secrets policy.',
    session2:
      'In the first joint session, Monique opens with, "You never talk to me—you just disappear." Andre answers, "I go to work every day, what ' +
      'more do you want," then goes silent, stares at the floor, and later says his heart was pounding and his mind went blank. Monique escalates; ' +
      'Andre shuts down further. The counselor maps the pursue–withdraw cycle with them, links his withdrawal to depressive symptoms and shame ' +
      'rather than indifference, and introduces a softened startup and a timed break when either partner becomes flooded. Two days later Monique calls ' +
      'the counselor, discloses that she consulted a divorce attorney last month, and asks the counselor not to tell Andre.',
  },
  diagnosticRationale:
    'Andre has had at least five depressive symptoms nearly every day for about three months (depressed mood, anhedonia, early-morning awakening, ' +
    'fatigue, impaired concentration, and guilt/worthlessness with passive death wishes) with clear occupational and relational impairment, which ' +
    'meets criteria for a major depressive episode of moderate severity. A prior full episode at 31 with sustained remission makes this a recurrent ' +
    'episode (F33.1), not persistent depressive disorder; full MDE criteria preclude an adjustment disorder even though marital conflict is present; ' +
    'and no lifetime hypomania argues against bipolar II disorder. The marital distress is clinically central but is a focus of attention, not an ' +
    'alternative explanation for the syndrome.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'MDD: 5+ symptoms for 2+ weeks; recurrent episode with interval remission; PDD 2-year course; adjustment disorder excluded when another disorder’s criteria are met; hypomania rule-out' },
    { id: 'R2', source: 'ACA Code of Ethics', detail: 'A.2. informed consent; A.8. multiple clients (clarify who is the client at the outset); B.4.b. couples and family counseling (define the client, written agreement on confidentiality)' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Intimate partner violence screening conducted with each partner separately before conjoint couples work' },
    { id: 'R4', source: 'C-SSRS', detail: 'Structured suicide-risk screening: passive wish versus ideation with method, intent, plan, or behavior' },
    { id: 'R5', source: 'Stanley-Brown SPI', detail: 'Collaborative written safety plan in place of a no-suicide contract' },
    { id: 'R6', source: 'Corey (Theory & Practice)', detail: 'Systemic couples work: Gottman (Four Horsemen and antidotes, softened startup, flooding, repair attempts); EFT pursue–withdraw cycle' },
    { id: 'R7', source: 'NICE guidelines', detail: 'Depression in adults: couples therapy considered when relationship distress contributes to or maintains the depression' },
    { id: 'R8', source: 'APA CPG', detail: 'Depression: psychotherapy and/or antidepressant medication; referral to a prescriber for medication evaluation' },
  ],
  questions: [
    // ---------------- Assessment & Conceptualization (5) ----------------
    Q('q1', 'intake', 'Before the first joint session with Andre and Monique, what is the most important assessment step?', ['R3', 'R2'], [
      O('a', 'Ask both partners together about any pushing, threats, or fear at home during the first joint session', -2,
        { r: 'Joint IPV questioning can endanger a victim', approach: 'Conjoint violence screening', why: 'A partner who is being abused or controlled may not disclose with the other present and may face retaliation for answering honestly', keys: ['partner present during screening', 'safety of disclosure'], mistake: 'Believing violence screening is equally valid when both partners are in the room' }),
      O('b', 'Meet each partner alone to screen for violence, threats, control, and fear of the other before conjoint work', 3,
        { r: 'Separate individual IPV screening first', approach: 'Screen each partner privately', why: 'Conjoint therapy can be unsafe when there is battering or coercive control, so each partner is screened separately before joint sessions begin', keys: ['loud, hurtful arguments', 'couples work about to begin'], mistake: 'Starting conjoint sessions without privately ruling out intimate partner violence' }),
      O('c', 'Have both partners complete a joint relationship-satisfaction inventory and review it together first', 0,
        { r: 'Useful measure, wrong priority', approach: 'Relationship-measure first', why: 'A satisfaction inventory informs treatment but does not establish whether conjoint work is safe; private IPV screening comes first', keys: ['measure helps planning', 'safety precedes planning'], mistake: 'Sequencing a planning measure ahead of the safety screen that decides whether joint work is appropriate' }),
      O('d', 'Skip violence screening because neither partner mentioned anything physical when describing the fights', -1,
        { r: 'Absence of a report is not a screen', approach: 'Rely on spontaneous report', why: 'Partners rarely volunteer violence or control unprompted, so silence at intake does not rule it out', keys: ['no direct questions asked', 'high-conflict presentation'], mistake: 'Treating the lack of a spontaneous disclosure as evidence that no violence exists' }),
    ]),
    Q('q2', 'core', 'Which finding best supports a recurrent major depressive episode rather than persistent depressive disorder?', ['R1'], [
      O('a', 'A discrete episode at 31 with full remission for over a decade, then a new three-month episode', 3,
        { r: 'Episodic course with full interval recovery', approach: 'Use the course of illness', why: 'Persistent depressive disorder requires a chronic course of at least two years; distinct episodes separated by full remission define recurrent MDD', keys: ['well for more than a decade', 'current onset about three months ago'], mistake: 'Equating any history of depression with a chronic persistent course' }),
      O('b', 'His feeling of being a burden and his loss of interest in church and family events lately', -1,
        { r: 'Symptoms occur in both disorders', approach: 'Symptom-content framing', why: 'Guilt and anhedonia can appear in either disorder; duration and course, not symptom content, separate them', keys: ['shared symptoms'], mistake: 'Using symptom content rather than course to distinguish the two disorders' }),
      O('c', 'The PHQ-9 score of 15, which places his current symptoms in the moderate range today', 0,
        { r: 'Severity, not chronicity', approach: 'Severity-score framing', why: 'The score supports moderate severity but says nothing about whether the course is episodic or chronic', keys: ['severity specifier'], mistake: 'Reading a severity score as evidence about the course of illness' }),
      O('d', 'That his low mood seems driven mostly by the fighting, so it is probably a lifelong temperament', -2,
        { r: 'Reverses the logic and misses an episode', approach: 'Attribute to temperament', why: 'Labeling a time-limited, full-syndrome episode as temperament dismisses a treatable recurrent MDD and could delay care', keys: ['clear recent onset'], mistake: 'Attributing a discrete depressive episode to personality or relationship conflict' }),
    ]),
    Q('q3', 'core', 'Monique asks whether Andre is "just reacting to our marriage." Which point best rules out an adjustment disorder?', ['R1'], [
      O('a', 'The fights started before his mood dropped, so the marriage is the stressor and fully explains his symptoms', -1,
        { r: 'Timing does not override criteria', approach: 'Stressor-timing framing', why: 'Even with a stressor, adjustment disorder is not diagnosed when full criteria for another disorder are met', keys: ['stressor present', 'full syndrome present'], mistake: 'Letting the presence of a stressor decide the diagnosis' }),
      O('b', 'His symptoms clearly improve on days when the couple does not argue, which suggests a reaction', -2,
        { r: 'Unsupported and misleading', approach: 'Fluctuation framing', why: 'Day-to-day fluctuation does not negate a major depressive episode and would steer care away from depression treatment', keys: ['symptoms nearly every day'], mistake: 'Using fluctuation to discount a full depressive syndrome' }),
      O('c', 'He meets full criteria for a major depressive episode, which precludes an adjustment disorder diagnosis', 3,
        { r: 'Full MDE criteria take precedence', approach: 'Apply the exclusion rule', why: 'Adjustment disorder is diagnosed only when the disturbance does not meet criteria for another mental disorder; Andre meets full MDE criteria', keys: ['five or more symptoms', 'three months, nearly every day'], mistake: 'Diagnosing adjustment disorder because a relationship stressor is present' }),
      O('d', 'His history of an episode at 31 after his father’s death, which shows he tends to react to stressors', 0,
        { r: 'Relevant history, wrong inference', approach: 'History-of-reactivity framing', why: 'The prior episode supports recurrence; it does not make the current full syndrome a stress reaction', keys: ['prior major episode'], mistake: 'Reading a prior full episode as proof of an adjustment-type reaction' }),
    ]),
    Q('q4', 'intake', 'In his individual meeting Andre says Monique "would be better off without me." What should the counselor do next?', ['R4', 'R5'], [
      O('a', 'Reassure him that Monique clearly still cares and move on to the communication goals for the couple', -2,
        { r: 'Reassurance bypasses a risk statement', approach: 'Reassure and redirect', why: 'A burden statement in a depressed client is a suicide-risk cue that must be assessed, not smoothed over', keys: ['perceived burdensomeness', 'moderate MDD'], mistake: 'Treating a risk cue as a relationship complaint that only needs reassurance' }),
      O('b', 'Ask him to agree in writing that he will not harm himself before the joint sessions with Monique begin', -1,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'No-suicide contracts do not reduce risk and can suppress disclosure; structured assessment and a safety plan are used instead', keys: ['passive wish disclosed'], mistake: 'Substituting a no-harm contract for assessment and safety planning' }),
      O('c', 'Bring the statement into the next joint session so that Monique can respond to it directly with him there', 0,
        { r: 'Involve partner only after assessment and consent', approach: 'Process it conjointly', why: 'Partner support may help later, but risk is assessed privately first and sharing is planned with his consent', keys: ['individual meeting', 'risk not yet assessed'], mistake: 'Moving to relational processing before the risk itself has been assessed' }),
      O('d', 'Ask directly about suicidal thoughts, method, intent, and plan, then build a written safety plan with him', 3,
        { r: 'Structured assessment plus safety plan', approach: 'Assess directly, then safety-plan', why: 'A burden statement warrants a direct, structured risk assessment, and a collaborative written safety plan follows when passive ideation is present', keys: ['"better off without me"', 'early waking, guilt, anhedonia'], mistake: 'Assuming a passive-sounding remark carries no risk and skipping direct inquiry' }),
    ]),
    Q('q5', 'core', 'Which conceptualization best explains how Andre’s depression and the couple’s conflict interact?', ['R6', 'R7'], [
      O('a', 'Monique’s criticism is the underlying cause of his depression, so his symptoms will lift once she stops', -2,
        { r: 'Blames one partner and misreads the illness', approach: 'Single-cause blame', why: 'Recurrent MDD has its own course; blaming the partner is inaccurate and fractures the couple alliance', keys: ['prior episode at 31', 'shared cycle'], mistake: 'Locating the cause of a recurrent depressive disorder in one partner’s behavior' }),
      O('b', 'His depressive withdrawal reads as rejection, she pursues with criticism, he withdraws further, and the cycle feeds both', 3,
        { r: 'Reciprocal pursue–withdraw cycle', approach: 'Systemic, reciprocal conceptualization', why: 'Depression and relationship distress maintain each other: withdrawal prompts pursuit and criticism, which deepens shame and withdrawal', keys: ['Monique reads withdrawal as rejection', 'Andre shuts down when pursued'], mistake: 'Treating the depression and the conflict as unrelated problems' }),
      O('c', 'The conflict is a separate marital problem, so it should be set aside until his depression fully remits', 0,
        { r: 'Misses the bidirectional link', approach: 'Sequential, separate framing', why: 'Depression care is needed, but ignoring the relational cycle leaves a maintaining factor in place and the distress unaddressed', keys: ['cycle maintains distress'], mistake: 'Assuming relationship distress will resolve on its own once mood improves' }),
      O('d', 'Andre is avoiding intimacy on purpose to punish Monique, and his low mood is mostly a reaction to their nightly fights at home', -1,
        { r: 'Misreads symptoms as intent', approach: 'Intentional-withdrawal framing', why: 'Anhedonia, fatigue, and low libido are depressive symptoms, not deliberate punishment', keys: ['anhedonia', 'fatigue'], mistake: 'Interpreting depressive symptoms as hostile motives' }),
    ]),

    // ---------------- Treatment Planning (4) ----------------
    Q('q6', 'treatment', 'Screening is negative for violence. What initial treatment plan best fits this couple?', ['R7', 'R8', 'R6'], [
      O('a', 'Conjoint couples therapy targeting the pursue–withdraw cycle, with coordinated depression treatment for Andre', 3,
        { r: 'Couples work plus coordinated depression care', approach: 'Treat the relationship and the depression together', why: 'Couples therapy is indicated when relationship distress maintains depression, and Andre’s moderate recurrent MDD still needs its own treatment', keys: ['negative IPV screen', 'moderate recurrent MDD'], mistake: 'Choosing either couples work or depression care when the case calls for both' }),
      O('b', 'Individual therapy for Andre only, explaining to Monique that the conflict is purely a symptom of his illness alone', -1,
        { r: 'Drops the relational target', approach: 'Individual-only framing', why: 'Treating only Andre leaves the maintaining cycle in place and labels him the sole problem', keys: ['shared cycle'], mistake: 'Framing a relational cycle as one partner’s illness alone' }),
      O('c', 'Advise Andre to restart the same antidepressant he took at 31 while he waits for a prescriber visit', -2,
        { r: 'Outside counselor scope', approach: 'Medication direction', why: 'Counselors do not direct medication starts; medication decisions belong to a prescriber after evaluation', keys: ['no prescriptive authority'], mistake: 'Giving medication advice because it helped before' }),
      O('d', 'Conjoint couples therapy only, deferring any depression-specific care until the arguing has settled down', 0,
        { r: 'Right modality, incomplete plan', approach: 'Couples-only framing', why: 'Couples work fits, but deferring depression care for a moderate recurrent episode with passive ideation is incomplete', keys: ['passive death wish', 'PHQ-9 of 15'], mistake: 'Sequencing depression treatment behind relationship repair' }),
    ]),
    Q('q7', 'treatment', 'Andre asks to add weekly individual sessions with the same counselor. What is the best way to coordinate care?', ['R2', 'R6'], [
      O('a', 'Stop the couples sessions and see Andre individually until his depression has fully remitted', -1,
        { r: 'Abandons the relational work', approach: 'Switch modalities', why: 'Ending couples work removes treatment for the maintaining cycle and leaves Monique without a place in care', keys: ['couple is the client'], mistake: 'Treating the depression as a reason to drop the couples contract' }),
      O('b', 'Add individual sessions with you after discussing with both partners how this affects balance and secret-keeping', 0,
        { r: 'Possible, but a weaker structure', approach: 'Concurrent sessions with one counselor', why: 'This can be done with joint agreement, but it risks perceived alliance imbalance; a separate individual clinician is usually cleaner', keys: ['alliance balance', 'secrets policy'], mistake: 'Assuming disclosure alone fully resolves the triangulation risk' }),
      O('c', 'Refer Andre to a separate individual therapist and coordinate between treatments with his written release', 3,
        { r: 'Separate clinician, consented coordination', approach: 'Split modalities across clinicians', why: 'A separate individual therapist protects balance in the couples alliance, and a release allows the two treatments to be coordinated', keys: ['couple is the client', 'Andre needs depression care'], mistake: 'Doubling roles in a way that tilts the couples alliance toward one partner' }),
      O('d', 'Refer him to an individual therapist and send that clinician your couples notes without asking first', -2,
        { r: 'Disclosure without consent', approach: 'Assume-consent coordination', why: 'Couples records involve both partners; sharing them requires valid releases, so this breaches confidentiality', keys: ['no release', 'joint record'], mistake: 'Assuming coordination of care excuses disclosure without consent' }),
    ]),
    Q('q8', 'treatment', 'Andre is hesitant about the medication evaluation he agreed to. How should the counselor handle the referral?', ['R8', 'R2'], [
      O('a', 'Tell him that medication is required if he wants to keep attending couples sessions with Monique at this practice', -2,
        { r: 'Coercive and outside scope', approach: 'Make care contingent', why: 'Conditioning couples care on medication is coercive and undermines his autonomy and informed consent', keys: ['client autonomy'], mistake: 'Using access to therapy to pressure a medication decision' }),
      O('b', 'Drop the referral for now since he is engaged in therapy and may improve without any medication', 0,
        { r: 'Prematurely closes an indicated option', approach: 'Defer the referral', why: 'Psychotherapy alone is reasonable for some, but a recurrent moderate episode with prior medication response warrants an evaluation offer', keys: ['prior response at 31', 'moderate recurrent MDD'], mistake: 'Abandoning an indicated referral at the first sign of hesitation' }),
      O('c', 'Ask Monique to make sure he takes whatever his doctor prescribes and to report back to you each week', -1,
        { r: 'Puts the partner in a monitoring role', approach: 'Partner-as-monitor framing', why: 'Making Monique the medication monitor feeds the pursue–withdraw cycle and is set without his consent', keys: ['pursue–withdraw cycle'], mistake: 'Assigning a policing role to the pursuing partner' }),
      O('d', 'Explore his hesitation, explain why an evaluation is indicated, and coordinate with his physician with consent', 3,
        { r: 'Explore, inform, coordinate within scope', approach: 'Support an informed referral', why: 'A recurrent moderate episode with a prior medication response warrants a prescriber evaluation, offered collaboratively and coordinated with his release', keys: ['agreed to evaluation', 'recurrent moderate episode'], mistake: 'Either pressuring medication or letting an indicated referral lapse' }),
    ]),
    Q('q9', 'treatment', 'Which intervention best targets the criticism–stonewalling pattern seen in the first joint session?', ['R6'], [
      O('a', 'Encourage them to keep talking through each fight in session until every grievance has been fully aired', -1,
        { r: 'Venting escalates flooding', approach: 'Ventilation framing', why: 'Pushing on while a partner is flooded intensifies criticism and shutdown rather than resolving conflict', keys: ['racing heart, mind blank'], mistake: 'Believing more venting will resolve an escalating cycle' }),
      O('b', 'Coach a softened startup for Monique and a timed self-soothing break for Andre when flooded, then repair', 3,
        { r: 'Gottman antidotes for criticism and stonewalling', approach: 'Apply the antidotes', why: 'A softened startup counters criticism, and a timed break for physiological self-soothing counters stonewalling, followed by a return and repair attempt', keys: ['"You never talk to me"', 'Andre floods and goes silent'], mistake: 'Teaching general communication tips without targeting the specific horsemen present' }),
      O('c', 'Teach both partners a structured mirroring exercise to use for every disagreement that comes up at home', 0,
        { r: 'Helpful but less targeted', approach: 'Generic listening skill', why: 'Mirroring can help, but it does not address Andre’s flooding or Monique’s harsh startup directly', keys: ['flooding present'], mistake: 'Choosing a generic skill over the antidotes matched to the observed pattern' }),
      O('d', 'Ask Monique to stop raising her concerns for now so the conflict does not worsen Andre’s depression', -2,
        { r: 'Silences a partner and harms the alliance', approach: 'Suppress one partner', why: 'Silencing Monique sacrifices her needs, increases distance, and reinforces the withdrawal cycle', keys: ['both partners are clients'], mistake: 'Protecting the depressed partner by suppressing the other partner’s voice' }),
    ]),

    // ---------------- Counseling & Ethics (4) ----------------
    Q('q10', 'counseling', 'Monique says, "When he goes silent and won’t look at me, it’s like I don’t exist." Andre stares at the floor. The best response is to:', ['R6'], [
      O('a', 'Agree with Monique that his silence shows he has pulled away from the marriage and needs to change', -2,
        { r: 'Sides with one partner', approach: 'Align with the pursuer', why: 'Endorsing her reading of his withdrawal confirms the rejection story and alienates the depressed partner', keys: ['Andre shutting down'], mistake: 'Taking sides in the cycle instead of reframing it' }),
      O('b', 'Pause the exchange now and teach both partners a timeout routine to use when arguments heat up', 0,
        { r: 'Useful later, misses this moment', approach: 'Skill-teaching pivot', why: 'A break skill helps with flooding, but this moment invites slowing down to reach the emotions under the cycle', keys: ['emotion is accessible now'], mistake: 'Moving to a skill when the attachment emotion is available to work with' }),
      O('c', 'Slow down, reflect her fear of disconnection, and gently invite Andre to share what happens inside him', 3,
        { r: 'EFT: reach the attachment emotions', approach: 'De-escalate the pursue–withdraw cycle', why: 'Reflecting her pursuit as fear of disconnection and inviting his inner experience softens both positions in the cycle', keys: ['"like I don’t exist"', 'Andre goes silent'], mistake: 'Treating the content of the complaint instead of the cycle and the feelings under it' }),
      O('d', 'Explain to Monique that she is coming on too strong and that she needs to give him more space', -1,
        { r: 'Blames the pursuer', approach: 'Correct the pursuer', why: 'Telling Monique to back off invalidates her loneliness and shifts blame rather than changing the cycle', keys: ['pursuer’s distress'], mistake: 'Treating one partner’s move in the cycle as the whole problem' }),
    ]),
    Q('q11', 'counseling', 'Later Monique says, "If he still loved me, he would at least try." What is the most helpful response?', ['R6', 'R1'], [
      O('a', 'Explain that withdrawal and low energy are symptoms of his depression while validating how lonely she feels', 3,
        { r: 'Psychoeducation with validation', approach: 'Reframe symptoms, honor her pain', why: 'Explaining that withdrawal, fatigue, and anhedonia are depressive symptoms reduces the rejection story while validating her experience', keys: ['anhedonia read as rejection', 'Monique’s loneliness'], mistake: 'Either excusing everything as illness or leaving the rejection story untouched' }),
      O('b', 'Tell her that his depression means he cannot be expected to try right now and that she should just wait it out', -1,
        { r: 'Removes all agency', approach: 'Illness-as-excuse framing', why: 'Depression limits energy, but Andre can still engage in small, attainable ways; waiting it out leaves Monique alone', keys: ['shared responsibility'], mistake: 'Using the diagnosis to excuse all relational effort' }),
      O('c', 'Ask Andre to state right now whether he still loves her so that the question can finally be settled', -2,
        { r: 'Forces a high-stakes demand on a flooded partner', approach: 'Demand an answer', why: 'Pressuring a depressed, flooded partner for a declaration invites shutdown and escalates the cycle', keys: ['Andre floods under pressure'], mistake: 'Resolving the cycle by forcing a confrontation' }),
      O('d', 'Reflect her hurt and ask what "trying" would look like for her, then return to the couple’s goals', 0,
        { r: 'Supportive, but misses the reframe', approach: 'Reflect and clarify', why: 'Clarifying her needs helps, but without psychoeducation she keeps reading his symptoms as lack of love', keys: ['rejection story'], mistake: 'Leaving the misattribution of depressive symptoms in place' }),
    ]),
    Q('q12', 'ethics', 'At the start of couples work, which step best meets the ACA standards for counseling more than one client?', ['R2'], [
      O('a', 'Treat Andre as the identified client because he has the diagnosis, with Monique attending as a collateral', 0,
        { r: 'A defensible structure, but not this contract', approach: 'Identified-patient framing', why: 'A collateral structure exists, but here the relationship is the focus and both partners need to know who the client is', keys: ['couples work requested'], mistake: 'Defaulting to the diagnosed partner as client without clarifying the arrangement' }),
      O('b', 'Let each partner decide on their own, session by session, what will stay confidential from the other partner', -1,
        { r: 'No clear agreement on confidentiality', approach: 'Ad hoc confidentiality', why: 'Couples work requires a clear, agreed policy at the outset; ad hoc rules invite secrets and triangulation', keys: ['confidentiality must be defined'], mistake: 'Leaving confidentiality rules undefined in multi-client work' }),
      O('c', 'Begin conjoint work and explain the confidentiality rules later, once the first conflicts have been addressed in session', -2,
        { r: 'Informed consent comes first', approach: 'Defer consent', why: 'Informed consent, including who the client is and the limits of confidentiality, is established at the outset, not after work begins', keys: ['start of treatment'], mistake: 'Treating informed consent as optional until problems arise' }),
      O('d', 'Clarify that the couple is the client and get written agreement from both on the confidentiality and secrets policy', 3,
        { r: 'Define the client; written confidentiality agreement', approach: 'Apply A.8 and B.4.b', why: 'Counselors clarify at the outset who the client is and obtain written agreement among all parties on confidentiality and how secrets are handled', keys: ['two partners present', 'individual meetings planned'], mistake: 'Starting multi-client work without defining the client and the confidentiality rules' }),
    ]),
    Q('q13', 'ethics', 'Monique calls to disclose that she consulted a divorce attorney and asks the counselor not to tell Andre. What should the counselor do?', ['R2', 'R4'], [
      O('a', 'Agree to keep it private for now, since she shared it outside a joint session and asked for confidentiality', -1,
        { r: 'Violates the signed policy', approach: 'Honor the private request', why: 'Both partners signed a no-secrets policy; quietly holding the secret aligns the counselor with one partner', keys: ['written no-secrets policy'], mistake: 'Letting a private request override the agreed confidentiality policy' }),
      O('b', 'Remind her of the no-secrets agreement, explain why it matters, and help her plan to raise it in a joint session', 3,
        { r: 'Uphold the agreement; support her disclosure', approach: 'Apply the informed-consent agreement', why: 'The signed no-secrets policy governs; the counselor reminds her of it and helps her bring the information into joint work, with attention to Andre’s safety plan', keys: ['signed no-secrets policy', 'Andre’s passive ideation'], mistake: 'Either keeping the secret or disclosing it abruptly without involving her' }),
      O('c', 'Call Andre today to tell him about the attorney so that no secret is held between the counselor and only one partner', -2,
        { r: 'Abrupt unilateral disclosure', approach: 'Disclose immediately', why: 'Disclosing without first working with Monique bypasses the process both agreed to and drops news on a partner with passive ideation', keys: ['safety plan in place', 'no planning with Monique'], mistake: 'Treating a no-secrets policy as permission for immediate unilateral disclosure' }),
      O('d', 'Refer Monique to her own individual therapist to process the decision and keep the couples work unchanged', 0,
        { r: 'Support is fine, the secret remains', approach: 'Redirect to individual care', why: 'An individual referral can help, but it leaves the counselor holding a secret that conflicts with the couples agreement', keys: ['secret still held'], mistake: 'Assuming a referral resolves the counselor’s secrets-policy conflict' }),
    ]),
  ],
};

module.exports = { CASES: [D906] };
