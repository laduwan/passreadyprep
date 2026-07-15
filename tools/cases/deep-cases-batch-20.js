// ============================================================================
// deep-cases-batch-20.js — NCMHCE deep cases, batch 20 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Four exam-deep clinical simulations (13 items each, sections [5,4,4]). These
// cover the Ethics category of the blueprint, where the GIVEN "clinical focus"
// is an ethical dilemma the counselor must reason through (the same
// clinical-focus pattern used for the non-categorical Crisis cases). Items test
// ethical decision-making across the three derived sections
// (Assessment -> Planning -> Process). On the reserved id block ncmhce-D199+:
//   ncmhce-D199  Confidentiality / Duty-to-Warn Dilemma   (Z65.3)
//   ncmhce-D200  Boundary / Dual-Relationship Dilemma      (Z65.8)
//   ncmhce-D201  Mandated Reporting Decision               (Z65.8)
//   ncmhce-D202  Informed Consent / Competence Dilemma     (Z65.8)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-20.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-20');console.log(validateExamDepthSet(CASES))"
//
// Standalone deliverable for SME review. Do NOT auto-import — importing into the
// live DB is a separate, human-run step.
// ============================================================================

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
// D199 — Confidentiality / Duty-to-Warn Dilemma (Z65.3) — Ethics — hard
// ============================================================================
const D199 = {
  id: 'ncmhce-D199',
  title: 'Weighing confidentiality against a serious risk to a third party',
  category: 'Ethics',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Confidentiality / Duty-to-Warn Dilemma', code: 'Z65.3' },
  diagnosis: { name: 'Confidentiality / Duty-to-Warn Dilemma', code: 'Z65.3' },
  differentialOptions: [
    { id: 'do1', name: 'Confidentiality / Duty-to-Warn Dilemma', isCorrect: true },
    { id: 'do2', name: 'Mandated Reporting Decision', isCorrect: false },
    { id: 'do3', name: 'Boundary / Dual-Relationship Dilemma', isCorrect: false },
    { id: 'do4', name: 'Informed Consent / Competence Dilemma', isCorrect: false },
  ],
  narrative: {
    intake:
      'Raymond Ellis, a 34-year-old, discloses in session that he has a serious communicable illness and has not told his current partner, and that ' +
      'he continues behavior that places that identifiable partner at foreseeable risk. He asks the counselor to keep this completely confidential.',
    session1:
      'The clinical focus is a confidentiality-versus-duty-to-protect dilemma: the counselor must weigh the client’s confidentiality against a ' +
      'serious, foreseeable risk to an identifiable third party, working through a careful ethical decision-making process rather than reflexively keeping or breaking confidence.',
    session2:
      'Raymond has decision-making capacity and understood the informed-consent limits at intake, and there is no overlapping outside relationship. ' +
      'The counselor recognizes an ethical duty to assess the risk, consult, and pursue the least-intrusive path—ideally the client’s own disclosure—before considering any breach.',
  },
  diagnosticRationale:
    'A serious, foreseeable risk to an identifiable third party, disclosed in confidence by a client with capacity, defines a confidentiality-versus-' +
    'duty-to-protect dilemma calling for a structured ethical decision-making process, distinct from a mandated-reporting decision about a protected ' +
    'category, a boundary/dual-relationship dilemma, or an informed-consent/competence dilemma.',
  references: [
    { id: 'R1', source: 'ACA Code of Ethics', detail: 'B.1. and B.2.: confidentiality and serious/foreseeable harm as an exception; duty to protect' },
    { id: 'R2', source: 'State law', detail: 'Jurisdictional duty-to-warn/protect statutes and case law regarding identifiable third parties' },
    { id: 'R3', source: 'NBCC Content Outline', detail: 'Ethical and legal practice: confidentiality, its limits, and decision-making' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Ethical decision-making models and maintaining the alliance during mandated disclosures' },
    { id: 'R5', source: 'C-SSRS', detail: 'Structured risk-screening principles applied to risk of harm to others' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to recognize about the ethical focus here?', ['R1'], [
      O('a', 'It is a confidentiality-versus-duty-to-protect dilemma requiring a structured ethical decision-making process', 3,
        { r: 'Confidentiality-versus-duty-to-protect dilemma', approach: 'Frame the dilemma accurately', why: 'A serious, foreseeable risk to an identifiable third party creates a confidentiality-versus-duty-to-protect dilemma requiring structured ethical reasoning', keys: ['serious communicable illness', 'identifiable partner at risk'], mistake: 'Treating it as a simple keep-or-break choice instead of a structured ethical decision-making process' }),
      O('b', 'That the counselor should decide the whole thing right away based mainly on a quick personal gut feeling about what seems easiest to do in the moment here', -2,
        { r: 'A gut reaction is not ethical reasoning', approach: 'Snap-judgment framing', why: 'The dilemma calls for a structured decision-making process, not a snap personal judgment', keys: ['structured process'], mistake: 'Substituting a gut reaction for ethical decision-making' }),
      O('c', 'That the counselor can simply pinpoint the single past event that first made Raymond secretive', -1,
        { r: 'A remote origin is not the focus', approach: 'Origin framing', why: 'The current ethical dilemma and safety, not a remote origin, are the focus', keys: ['dilemma focus'], mistake: 'Chasing a remote origin instead of reasoning through the dilemma' }),
      O('d', 'That Raymond currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is an ethical dilemma, not a diagnostic count', keys: ['ethics-focused'], mistake: 'Applying diagnostic criteria to an ethics question' }),
    ]),
    Q('q2', 'core', 'Which feature best identifies this as a confidentiality/duty-to-warn dilemma rather than a mandated-reporting decision?', ['R1'], [
      O('a', 'The concern is a foreseeable risk to an identifiable third party, not a statutorily protected category reported to authorities', 3,
        { r: 'Third-party risk, not a mandated report', approach: 'Contrast the two ethical issues', why: 'Mandated reporting concerns protected categories reported to authorities; here the issue is a foreseeable risk to an identifiable third party', keys: ['identifiable partner', 'no protected reporting category'], mistake: 'Collapsing a duty-to-protect dilemma into a mandated-reporting decision' }),
      O('b', 'The fact that Raymond has told the counselor something serious and rather sensitive that clearly feels weighty and important for everyone involved to think carefully about', -1,
        { r: 'Seriousness alone does not identify the issue', approach: 'Seriousness framing', why: 'Both involve serious disclosures; the specific structure of the risk differs', keys: ['shared seriousness'], mistake: 'Using general seriousness to classify the dilemma' }),
      O('c', 'The distress and the worry that Raymond feels while he is talking this over', -1,
        { r: 'Client distress is nonspecific', approach: 'Distress framing', why: 'Client distress occurs in many dilemmas and does not identify this one', keys: ['shared distress'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way the issue tends to feel a little more pressing later in the session than at the start', 0,
        { r: 'Timing is not diagnostic of the issue', approach: 'Timing framing', why: 'When it feels pressing does not identify the ethical issue', keys: ['nonspecific timing'], mistake: 'Over-reading the moment it surfaced' }),
    ]),
    Q('q3', 'core', 'How does this differ from a boundary/dual-relationship dilemma?', ['R1'], [
      O('a', 'The tension is confidentiality against protecting a third party, with no overlapping outside role between counselor and client', 3,
        { r: 'Third-party protection, no role overlap', approach: 'Contrast the ethical structure', why: 'A boundary dilemma involves overlapping roles; here there is none—the tension is confidentiality versus protecting a third party', keys: ['no outside relationship', 'third-party risk'], mistake: 'Reframing a duty-to-protect dilemma as a boundary problem' }),
      O('b', 'The fact that the counselor is going to have to think carefully and use good ethical judgment about the right and responsible way to handle the whole delicate situation with Raymond', -1,
        { r: 'Careful judgment is required in both', approach: 'Judgment framing', why: 'Careful ethical judgment applies to both; the structure of the dilemma differs', keys: ['shared feature'], mistake: 'Using the need for judgment to differentiate' }),
      O('c', 'The concern and the responsibility that the counselor feels about doing right by Raymond', -1,
        { r: 'Felt responsibility is nonspecific', approach: 'Responsibility framing', why: 'Felt responsibility occurs in both; the ethical structure differs', keys: ['shared concern'], mistake: 'Reading felt responsibility as decisive' }),
      O('d', 'The way the dilemma seems a little heavier on a busier clinic day than on a quieter one', 0,
        { r: 'Workload is not diagnostic', approach: 'Workload framing', why: 'How heavy it feels by workload does not identify the ethical issue', keys: ['nonspecific factor'], mistake: 'Over-reading a workload effect' }),
    ]),
    Q('q4', 'core', 'How does this differ from an informed-consent/competence dilemma?', ['R1'], [
      O('a', 'Raymond has capacity and understood the consented limits; the issue is disclosure to protect a third party, not his competence', 3,
        { r: 'Capacity intact; issue is third-party disclosure', approach: 'Contrast against a competence question', why: 'An informed-consent dilemma turns on capacity or understanding; here Raymond has capacity, so the issue is protective disclosure', keys: ['has decision-making capacity', 'understood intake limits'], mistake: 'Reframing a duty-to-protect dilemma as a competence or consent problem' }),
      O('b', 'The fact that there are a number of different considerations and competing values that the counselor is going to have to weigh thoughtfully and carefully before deciding what to actually do here', -1,
        { r: 'Weighing values occurs in both', approach: 'Weighing framing', why: 'Weighing competing values applies to both; the specific issue differs', keys: ['shared feature'], mistake: 'Using the presence of competing values to differentiate' }),
      O('c', 'The seriousness and the sensitivity of what Raymond has shared in the session', -1,
        { r: 'Seriousness is nonspecific', approach: 'Seriousness framing', why: 'Serious content occurs in both; the ethical structure differs', keys: ['shared seriousness'], mistake: 'Reading seriousness as decisive' }),
      O('d', 'The way the decision tends to feel a little harder near the end of a long day', 0,
        { r: 'Fatigue is not diagnostic', approach: 'Fatigue framing', why: 'How hard it feels when tired does not identify the ethical issue', keys: ['nonspecific factor'], mistake: 'Over-reading a fatigue effect' }),
    ]),
    Q('q5', 'intake', 'What is most important to assess before deciding on any action?', ['R5'], [
      O('a', 'The seriousness, foreseeability, and imminence of the risk and how identifiable the third party is', 3,
        { r: 'Assess seriousness, foreseeability, identifiability', approach: 'Gauge the risk systematically', why: 'The duty-to-protect standard turns on how serious, foreseeable, and imminent the risk is and how identifiable the third party is', keys: ['identifiable partner', 'ongoing risk behavior'], mistake: 'Deciding whether to disclose without first assessing the actual seriousness and foreseeability of the risk' }),
      O('b', 'Mainly whether Raymond seems like a generally likable and cooperative sort of person that the counselor happens to get along with pretty easily in the room over the course of the sessions', -2,
        { r: 'Likability is not the standard', approach: 'Likability framing', why: 'The assessment turns on the risk, not on how likable or agreeable the client is', keys: ['risk-based standard'], mistake: 'Substituting rapport for a risk assessment' }),
      O('c', 'Whether his secrecy can be traced to one single event that fully explains all of his current choices', -1,
        { r: 'A single origin is not the priority', approach: 'Origin framing', why: 'The immediate priority is assessing the risk, not tracing a single origin', keys: ['assess the risk'], mistake: 'Hunting for an origin instead of assessing risk' }),
      O('d', 'His general hobbies and preferences so the sessions can be arranged around what he most enjoys', 0,
        { r: 'Preferences are secondary', approach: 'Preference framing', why: 'Useful for rapport but not the immediate risk-assessment priority', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over the risk assessment' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate next step in the ethical decision-making process?', ['R1'], [
      O('a', 'Assess the risk, consult, review the legal duty, and first try to resolve it within the relationship by encouraging his own disclosure', 3,
        { r: 'Assess, consult, and pursue the least-intrusive path', approach: 'Follow a structured ethical process', why: 'Good practice assesses the risk, seeks consultation, reviews the legal duty, and pursues the least-intrusive resolution—ideally the client’s own disclosure—first', keys: ['ongoing risk', 'client can disclose'], mistake: 'Jumping straight to breaking or absolutely keeping confidentiality without the structured process' }),
      O('b', 'Simply promise Raymond that whatever he decides, the counselor will never ever tell anyone anything about any of this at all, no matter what ends up happening down the line with his partner or anyone else', -2,
        { r: 'An absolute promise ignores the duty', approach: 'Absolute-secrecy framing', why: 'A blanket promise ignores a possible duty to protect an identifiable third party', keys: ['duty to protect'], mistake: 'Guaranteeing confidentiality you may not be able to keep' }),
      O('c', 'Immediately contact the partner and the authorities before assessing the risk or consulting anyone at all', -2,
        { r: 'Reflexive disclosure skips the process', approach: 'Reflexive-disclosure framing', why: 'Protective steps follow assessment and consultation, not a reflexive breach', keys: ['assess first'], mistake: 'Disclosing before assessing and consulting' }),
      O('d', 'Avoid the topic entirely from now on so the counselor never has to make any decision about it', -1,
        { r: 'Avoidance abdicates the duty', approach: 'Avoidance framing', why: 'The dilemma must be engaged and reasoned through, not avoided', keys: ['engage the dilemma'], mistake: 'Dodging a decision the situation requires' }),
    ]),
    Q('q7', 'treatment', 'If disclosure becomes necessary, how should it be handled?', ['R2'], [
      O('a', 'Limit it to what is necessary to protect, follow the legal standard, and where possible inform Raymond first', 3,
        { r: 'Minimum necessary, lawful, client informed', approach: 'Disclose narrowly and transparently', why: 'A necessary disclosure is limited to what protects the third party, follows the legal standard, and, where possible, informs the client first', keys: ['identifiable partner', 'legal duty'], mistake: 'Either disclosing far more than necessary or breaching without following the legal standard' }),
      O('b', 'Share Raymond’s entire clinical history and every private detail he has ever mentioned with as many people as possible, on the general theory that more information shared always has to be safer for everybody in the end', -2,
        { r: 'Unlimited disclosure over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure is limited to what is necessary to protect, not the client’s entire history', keys: ['minimum necessary'], mistake: 'Over-disclosing beyond what protection requires' }),
      O('c', 'Disclose secretly and make sure Raymond never learns that anything was shared about him at all', -1,
        { r: 'Concealment undermines transparency', approach: 'Concealment framing', why: 'Where possible the client is informed; secret disclosure erodes trust unnecessarily', keys: ['inform where possible'], mistake: 'Hiding a disclosure that could be handled transparently' }),
      O('d', 'Refuse to disclose anything at all even where the law clearly requires a protective step', -2,
        { r: 'Refusing a lawful duty is improper', approach: 'Refusal framing', why: 'Where the law requires a protective step, refusing to act is not an option', keys: ['legal duty'], mistake: 'Ignoring a clear legal obligation' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor use consultation and documentation here?', ['R3'], [
      O('a', 'Seek supervision or legal-ethical consultation and document the reasoning and actions carefully', 3,
        { r: 'Consult and document the reasoning', approach: 'Consult and document', why: 'A high-stakes dilemma calls for consultation and careful documentation of the reasoning and any actions taken', keys: ['high-stakes dilemma', 'legal exposure'], mistake: 'Deciding alone without consultation or a documented rationale' }),
      O('b', 'Keep absolutely no notes of any kind about the situation or the decision, on the theory that having no paper trail whatsoever is somehow the safest possible option for the counselor to protect themselves later', -2,
        { r: 'Failing to document is improper', approach: 'No-records framing', why: 'Careful documentation of the reasoning is required, especially in duty-to-protect situations', keys: ['document carefully'], mistake: 'Failing to document a serious ethical decision' }),
      O('c', 'Ask several friends outside the field for their casual personal opinions instead of a proper consultation', -1,
        { r: 'Casual opinions are not consultation', approach: 'Casual-advice framing', why: 'Proper supervision or legal-ethical consultation, not casual outside opinions, is appropriate', keys: ['proper consultation'], mistake: 'Substituting casual advice for real consultation' }),
      O('d', 'Delay any consultation for several weeks so there is plenty of time to think it over alone first', -1,
        { r: 'Delaying consultation is risky', approach: 'Delay framing', why: 'Timely consultation matters when a foreseeable risk is ongoing', keys: ['timely consultation'], mistake: 'Postponing needed consultation on an active risk' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate any protective action?', ['R2'], [
      O('a', 'Match the action to the assessed risk and the applicable legal duty, using the least-intrusive effective step', 3,
        { r: 'Proportionate, lawful, least-intrusive action', approach: 'Coordinate proportionately and lawfully', why: 'Protective action is matched to the assessed risk and legal duty and uses the least-intrusive effective step', keys: ['assessed risk', 'jurisdictional duty'], mistake: 'Applying a one-size-fits-all response instead of one matched to risk and the applicable law' }),
      O('b', 'Always pick the single most dramatic and far-reaching response that is available in every case, regardless of how serious or minor the assessed level of risk in the particular situation actually turns out to be', -1,
        { r: 'Maximal response ignores proportionality', approach: 'Maximalist framing', why: 'The response is proportionate to the assessed risk, not automatically the most drastic option', keys: ['proportionate response'], mistake: 'Ignoring proportionality' }),
      O('c', 'Do nothing at all and hope the risk resolves on its own without any action from the counselor', -2,
        { r: 'Inaction ignores the duty', approach: 'Inaction framing', why: 'A serious, foreseeable, identifiable risk requires action, not inaction', keys: ['duty to act'], mistake: 'Failing to act on a foreseeable risk' }),
      O('d', 'Decide based only on how the counselor personally feels about Raymond rather than the risk and the law', -1,
        { r: 'Personal feelings are not the standard', approach: 'Subjective framing', why: 'The response follows the assessed risk and applicable law, not personal feelings', keys: ['objective standard'], mistake: 'Basing protective steps on personal feelings' }),
    ]),
    Q('q10', 'counseling', 'Raymond becomes upset when the counselor explains the limits of confidentiality. The most therapeutic response is to:', ['R4'], [
      O('a', 'Stay calm, be transparent about the limits, and keep engaging him about his fears and his choices', 3,
        { r: 'Calm transparency, keep engaging', approach: 'Be transparent while holding the alliance', why: 'Calm transparency about the limits, while continuing to engage his fears and choices, manages the ethics without rupturing the alliance', keys: ['upset when limits raised', 'wants secrecy'], mistake: 'Either hiding the limits from him or reacting in a way that ends the engagement' }),
      O('b', 'Quietly hide from Raymond the fact that the counselor might ever have to act on any of this, just so that he keeps on talking openly and does not get upset or feel in any way betrayed by the counselor', -2,
        { r: 'Concealing the limits is not transparent', approach: 'Conceal framing', why: 'Confidentiality limits are disclosed transparently, not hidden to keep him talking', keys: ['transparent limits'], mistake: 'Concealing the limits of confidentiality' }),
      O('c', 'Warn him sharply that he had better cooperate right now or the counselor will report everything immediately', -1,
        { r: 'Threatening him escalates and ruptures', approach: 'Threat framing', why: 'Threatening the client tends to escalate and rupture the alliance; a calm, transparent stance is appropriate', keys: ['de-escalation'], mistake: 'Escalating with threats' }),
      O('d', 'End the session immediately rather than engaging with how upset and frightened he is right now', -1,
        { r: 'Ending abruptly misses the work', approach: 'Escape framing', why: 'His fear can be engaged and supported, not avoided by ending the session', keys: ['engage the fear'], mistake: 'Avoiding a meaningful therapeutic moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Raymond toward a safer, ethical resolution?', ['R4'], [
      O('a', 'Explore his fears and support him toward voluntarily informing his partner and reducing the risk himself', 3,
        { r: 'Support voluntary disclosure and risk reduction', approach: 'Empower the least-intrusive path', why: 'Exploring his fears and supporting his own disclosure and risk reduction is the least-intrusive, most collaborative resolution', keys: ['can disclose himself', 'afraid of the fallout'], mistake: 'Moving to disclose for him without first supporting his own capacity to act' }),
      O('b', 'Firmly tell Raymond that he is simply a bad and irresponsible person for what he has been doing, and keep repeating that to him until he finally feels ashamed enough to promise that he will change everything', -2,
        { r: 'Shaming him is counter-therapeutic', approach: 'Shame framing', why: 'Shaming the client damages the alliance and tends to reduce engagement rather than support change', keys: ['engage, do not shame'], mistake: 'Using shame as a motivator' }),
      O('c', 'Focus the sessions mainly on cataloguing every past instance of his behavior in exhaustive detail every week', -1,
        { r: 'Cataloguing is not the work', approach: 'Catalogue framing', why: 'Rehashing past behavior does not support a safer, ethical resolution', keys: ['forward-focused work'], mistake: 'Centering sessions on past behavior' }),
      O('d', 'Tell him counseling cannot help him at all unless he first fixes the entire situation on his own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Support and engagement proceed now, not contingent on him first resolving everything alone', keys: ['engagement matters'], mistake: 'Making care contingent on prior resolution' }),
    ]),
    Q('q12', 'ethics', 'Raymond directly asks whether the counselor will "tell anyone." The most appropriate response is to:', ['R1'], [
      O('a', 'Honestly explain confidentiality and its limits, including the duty to protect an identifiable person from serious harm', 3,
        { r: 'Explain confidentiality and its limits honestly', approach: 'Be transparent about the duty', why: 'The counselor honestly explains confidentiality and the duty-to-protect limits that can apply to a serious, identifiable risk', keys: ['asks if you will tell', 'foreseeable third-party risk'], mistake: 'Either promising absolute secrecy or being evasive about the duty to protect' }),
      O('b', 'Reassure him warmly and repeatedly that absolutely everything he says in this room is going to stay one hundred percent private forever, no matter what he ever tells the counselor about his partner or his behavior', -2,
        { r: 'Absolute secrecy ignores the duty', approach: 'Absolute-secrecy framing', why: 'A blanket promise ignores the duty to protect an identifiable person from serious harm', keys: ['duty to protect'], mistake: 'Guaranteeing confidentiality you cannot ethically keep' }),
      O('c', 'Refuse to answer the question at all and simply change the subject whenever he raises it again', -1,
        { r: 'Evasion undermines transparency', approach: 'Evasion framing', why: 'Confidentiality and its limits are explained honestly, not evaded', keys: ['transparent limits'], mistake: 'Being evasive about the limits' }),
      O('d', 'Tell him you will definitely report everything no matter what, before you have even assessed the actual risk', -1,
        { r: 'Premature certainty preempts assessment', approach: 'Premature-disclosure framing', why: 'Protective steps follow a careful assessment; declaring a report before assessing preempts that', keys: ['assess first'], mistake: 'Declaring a report before assessing the risk' }),
    ]),
    Q('q13', 'ethics', 'The counselor is unsure of the specific duty-to-warn law in the jurisdiction. The most ethical course of action is to:', ['R2'], [
      O('a', 'Seek immediate legal-ethical consultation and guidance while ensuring safety, rather than guessing alone', 3,
        { r: 'Consult and get guidance while ensuring safety', approach: 'Practice within competence and law', why: 'Uncertainty about the specific legal duty calls for immediate consultation and guidance while ensuring safety', keys: ['unsure of the law', 'foreseeable serious risk'], mistake: 'Guessing at the legal duty alone instead of seeking immediate consultation and guidance' }),
      O('b', 'Simply do nothing further about any of it until the counselor has personally found the time to research every relevant statute and case in complete detail entirely alone over the course of the next several weeks', -2,
        { r: 'Delaying action on a serious risk is unsafe', approach: 'Delay framing', why: 'A foreseeable serious risk requires prompt action and consultation, not weeks of solo research', keys: ['prompt action'], mistake: 'Delaying action on an ongoing risk' }),
      O('c', 'Assume there is no duty at all and keep everything confidential to avoid any risk to the relationship', -2,
        { r: 'Assuming no duty is unsafe', approach: 'Assume-no-duty framing', why: 'Assuming no duty in order to protect the relationship endangers an identifiable person', keys: ['duty to protect'], mistake: 'Assuming away a possible duty to protect' }),
      O('d', 'Transfer the case at once with no explanation, coordination, or attention to the immediate safety risk', -1,
        { r: 'Abrupt transfer mishandles the risk', approach: 'Uncoordinated handoff', why: 'A serious risk requires coordinated action and consultation, not an abrupt, uncommunicated transfer', keys: ['coordinated response'], mistake: 'Dropping the case without addressing the safety risk' }),
    ]),
  ],
};

// ============================================================================
// D200 — Boundary / Dual-Relationship Dilemma (Z65.8) — Ethics — medium
// ============================================================================
const D200 = {
  id: 'ncmhce-D200',
  title: 'A discovered overlapping relationship with an ongoing client',
  category: 'Ethics',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Boundary / Dual-Relationship Dilemma', code: 'Z65.8' },
  diagnosis: { name: 'Boundary / Dual-Relationship Dilemma', code: 'Z65.8' },
  differentialOptions: [
    { id: 'do1', name: 'Boundary / Dual-Relationship Dilemma', isCorrect: true },
    { id: 'do2', name: 'Confidentiality / Duty-to-Warn Dilemma', isCorrect: false },
    { id: 'do3', name: 'Mandated Reporting Decision', isCorrect: false },
    { id: 'do4', name: 'Informed Consent / Competence Dilemma', isCorrect: false },
  ],
  narrative: {
    intake:
      'Karen Delgado, a 45-year-old, has been in counseling for two months when the counselor realizes she is the newly hired manager at the ' +
      'counselor’s spouse’s small workplace, creating an overlapping outside relationship. Karen also offers the counselor a valuable business referral.',
    session1:
      'The clinical focus is a boundary and dual-relationship dilemma: an overlapping non-clinical role has emerged alongside the counseling ' +
      'relationship, creating a risk of impaired objectivity, conflicts of interest, and potential harm that must be managed thoughtfully.',
    session2:
      'There is no third-party safety risk and Karen has full capacity and understood consent; the issue is the overlapping role and the offered ' +
      'referral. The counselor recognizes the need to manage the boundary carefully—clarifying roles, consulting, and prioritizing Karen’s welfare.',
  },
  diagnosticRationale:
    'An emerging overlapping non-clinical role, together with an offered material benefit, defines a boundary/dual-relationship dilemma centered on ' +
    'objectivity, conflict of interest, and client welfare, distinct from a confidentiality/duty-to-warn dilemma, a mandated-reporting decision, or ' +
    'an informed-consent/competence dilemma.',
  references: [
    { id: 'R1', source: 'ACA Code of Ethics', detail: 'A.6. and C.6.: managing/avoiding harmful multiple relationships, boundaries, and conflicts of interest' },
    { id: 'R2', source: 'NBCC Content Outline', detail: 'Ethical practice: dual relationships, boundaries, and professional conduct' },
    { id: 'R3', source: 'State law', detail: 'Regulatory standards governing multiple relationships and conflicts of interest' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Boundary management and preserving the working alliance and client welfare' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1.: primacy of client welfare in resolving boundary questions' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to recognize about the ethical focus here?', ['R1'], [
      O('a', 'It is a boundary/dual-relationship dilemma centered on objectivity, conflict of interest, and Karen’s welfare', 3,
        { r: 'Boundary/dual-relationship dilemma', approach: 'Frame the dilemma accurately', why: 'An overlapping outside role plus an offered benefit creates a boundary/dual-relationship dilemma about objectivity and client welfare', keys: ['overlapping workplace role', 'offered business referral'], mistake: 'Treating an emerging dual relationship as a trivial coincidence rather than an ethical dilemma to manage' }),
      O('b', 'That the counselor should just wait and see for a good long while and hope the whole overlapping-role situation somehow quietly sorts itself out on its own without anyone ever really needing to talk about it or do anything at all', -2,
        { r: 'Passive waiting is not management', approach: 'Wait-and-see framing', why: 'A dual-relationship dilemma is actively managed, not left to resolve itself', keys: ['active management'], mistake: 'Passively hoping the boundary issue disappears' }),
      O('c', 'That the counselor can simply pinpoint the single past event that first drew Karen to counseling', -1,
        { r: 'A remote origin is not the focus', approach: 'Origin framing', why: 'The current boundary dilemma, not a remote origin, is the focus', keys: ['dilemma focus'], mistake: 'Chasing a remote origin instead of managing the boundary' }),
      O('d', 'That Karen currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is an ethical dilemma, not a diagnostic count', keys: ['ethics-focused'], mistake: 'Applying diagnostic criteria to an ethics question' }),
    ]),
    Q('q2', 'core', 'Which feature best identifies this as a boundary/dual-relationship dilemma rather than a confidentiality dilemma?', ['R1'], [
      O('a', 'An overlapping non-clinical role and a possible conflict of interest have emerged, with no third-party safety risk at issue', 3,
        { r: 'Overlapping role and conflict of interest', approach: 'Contrast the two ethical issues', why: 'A confidentiality dilemma turns on protective disclosure; here the issue is an overlapping role and conflict of interest', keys: ['manager at spouse’s workplace', 'offered referral'], mistake: 'Collapsing a boundary dilemma into a confidentiality question' }),
      O('b', 'The fact that this is clearly the sort of situation where the counselor is going to have to stop and think pretty carefully and thoughtfully about the responsible and professional thing to do for everyone involved here', -1,
        { r: 'Careful thought is required in both', approach: 'Judgment framing', why: 'Careful judgment applies to both; the structure of the dilemma differs', keys: ['shared feature'], mistake: 'Using the need for judgment to differentiate' }),
      O('c', 'The concern and the mild awkwardness that the counselor feels about the situation', -1,
        { r: 'Awkwardness is nonspecific', approach: 'Awkwardness framing', why: 'Awkwardness occurs in many dilemmas and does not identify this one', keys: ['shared feeling'], mistake: 'Reading awkwardness as decisive' }),
      O('d', 'The way the issue tends to feel a little more pressing later in the session than at the start', 0,
        { r: 'Timing is not diagnostic', approach: 'Timing framing', why: 'When it feels pressing does not identify the ethical issue', keys: ['nonspecific timing'], mistake: 'Over-reading the moment it surfaced' }),
    ]),
    Q('q3', 'core', 'How does this differ from a mandated-reporting decision?', ['R1'], [
      O('a', 'No protected reporting category is involved; the issue is managing an overlapping role and conflict of interest', 3,
        { r: 'No mandated report; a boundary to manage', approach: 'Contrast the ethical structure', why: 'A mandated report concerns protected categories reported to authorities; here the issue is managing a boundary and conflict of interest', keys: ['no reportable category', 'dual role'], mistake: 'Reframing a boundary dilemma as a reporting decision' }),
      O('b', 'The fact that the counselor is going to have to use careful and responsible professional judgment about the right way to handle a genuinely tricky and somewhat delicate situation that has come up with Karen in the course of the work', -1,
        { r: 'Careful judgment is required in both', approach: 'Judgment framing', why: 'Careful judgment applies to both; the ethical structure differs', keys: ['shared feature'], mistake: 'Using the need for judgment to differentiate' }),
      O('c', 'The concern and the responsibility that the counselor feels about doing right by Karen', -1,
        { r: 'Felt responsibility is nonspecific', approach: 'Responsibility framing', why: 'Felt responsibility occurs in both; the ethical structure differs', keys: ['shared concern'], mistake: 'Reading felt responsibility as decisive' }),
      O('d', 'The way the dilemma seems a little heavier on a busier clinic day than on a quieter one', 0,
        { r: 'Workload is not diagnostic', approach: 'Workload framing', why: 'How heavy it feels by workload does not identify the ethical issue', keys: ['nonspecific factor'], mistake: 'Over-reading a workload effect' }),
    ]),
    Q('q4', 'core', 'How does this differ from an informed-consent/competence dilemma?', ['R1'], [
      O('a', 'Karen has capacity and understood the consented terms; the issue is the overlapping role, not her competence', 3,
        { r: 'Capacity intact; issue is the overlapping role', approach: 'Contrast against a competence question', why: 'An informed-consent dilemma turns on capacity or understanding; here Karen has capacity, so the issue is the dual role', keys: ['full capacity', 'understood consent'], mistake: 'Reframing a boundary dilemma as a competence or consent problem' }),
      O('b', 'The fact that there are several different considerations and competing professional values that the counselor is really going to have to weigh very carefully and thoughtfully before settling on what the right course of action actually is', -1,
        { r: 'Weighing values occurs in both', approach: 'Weighing framing', why: 'Weighing competing values applies to both; the specific issue differs', keys: ['shared feature'], mistake: 'Using the presence of competing values to differentiate' }),
      O('c', 'The sensitivity and the mild discomfort of the situation Karen has raised', -1,
        { r: 'Discomfort is nonspecific', approach: 'Discomfort framing', why: 'Discomfort occurs in both; the ethical structure differs', keys: ['shared feeling'], mistake: 'Reading discomfort as decisive' }),
      O('d', 'The way the decision tends to feel a little harder near the end of a long day', 0,
        { r: 'Fatigue is not diagnostic', approach: 'Fatigue framing', why: 'How hard it feels when tired does not identify the ethical issue', keys: ['nonspecific factor'], mistake: 'Over-reading a fatigue effect' }),
    ]),
    Q('q5', 'intake', 'What is most important to consider before deciding how to proceed?', ['R1'], [
      O('a', 'How the overlapping role could impair objectivity or harm Karen, and how her welfare is best protected', 3,
        { r: 'Objectivity, potential harm, and client welfare', approach: 'Center client welfare', why: 'The key considerations are how the dual role could impair objectivity or harm the client and how her welfare is best protected', keys: ['overlapping role', 'client welfare first'], mistake: 'Deciding based on convenience or the offered benefit rather than objectivity and client welfare' }),
      O('b', 'Mainly how valuable and genuinely useful that business referral Karen has offered could end up being for the counselor’s own practice and finances over the longer term if the counseling relationship simply carries on as it is', -2,
        { r: 'Self-interest is not the standard', approach: 'Self-interest framing', why: 'The decision centers on client welfare and objectivity, not the counselor’s potential gain', keys: ['client-welfare standard'], mistake: 'Letting a personal benefit drive the decision' }),
      O('c', 'Whether Karen’s reasons for seeking counseling trace to one single event that explains everything', -1,
        { r: 'A single origin is not the priority', approach: 'Origin framing', why: 'The immediate priority is managing the boundary, not tracing a single origin', keys: ['manage the boundary'], mistake: 'Hunting for an origin instead of addressing the boundary' }),
      O('d', 'Her general hobbies and preferences so the sessions can be arranged around what she most enjoys', 0,
        { r: 'Preferences are secondary', approach: 'Preference framing', why: 'Useful for rapport but not the immediate boundary-management priority', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over the boundary issue' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate way to handle the offered business referral?', ['R1'], [
      O('a', 'Decline the referral to preserve objectivity and openly discuss the boundary with Karen', 3,
        { r: 'Decline the benefit; discuss the boundary', approach: 'Protect objectivity transparently', why: 'Declining the material benefit preserves objectivity and the boundary is discussed openly to protect the relationship', keys: ['offered referral', 'objectivity at risk'], mistake: 'Accepting a material benefit that compromises objectivity, or ignoring the boundary entirely' }),
      O('b', 'Go ahead and gratefully accept the valuable referral from Karen and simply keep working with her exactly as before, and just quietly trust that it is very unlikely to ever really affect the counseling or the counselor’s judgment in any way at all', -2,
        { r: 'Accepting the benefit compromises objectivity', approach: 'Accept-benefit framing', why: 'Accepting a material benefit from a client compromises objectivity and blurs the boundary', keys: ['conflict of interest'], mistake: 'Taking a benefit that impairs objectivity' }),
      O('c', 'Accept the referral but never mention the boundary issue to Karen at all so it does not become awkward', -1,
        { r: 'Silence plus acceptance is worse', approach: 'Conceal framing', why: 'Accepting the benefit and concealing the boundary compounds the conflict of interest', keys: ['transparent boundary'], mistake: 'Hiding a boundary issue while taking the benefit' }),
      O('d', 'Abruptly end all contact with Karen the moment the referral is offered, with no discussion or plan', -1,
        { r: 'Abrupt termination is not the answer', approach: 'Abrupt-exit framing', why: 'The boundary is managed thoughtfully; an abrupt cutoff is not a substitute for careful handling', keys: ['manage carefully'], mistake: 'Overreacting with an abrupt, unplanned cutoff' }),
    ]),
    Q('q7', 'treatment', 'What is the most appropriate overall way to manage the dual relationship?', ['R1'], [
      O('a', 'Clarify and separate the roles, consult, and if the overlap cannot be managed, arrange an appropriate referral', 3,
        { r: 'Clarify roles, consult, refer if needed', approach: 'Manage or, if needed, transfer care', why: 'Good practice clarifies and separates the roles, consults, and—if the overlap cannot be managed—arranges an appropriate referral to protect the client', keys: ['overlapping role', 'client welfare'], mistake: 'Either ignoring the overlap or dropping the client without an appropriate, planned referral' }),
      O('b', 'Simply carry on with the counseling exactly as before and make absolutely no changes of any kind whatsoever to how the sessions are handled, on the assumption that the overlapping outside role is really not going to matter to the work at all in practice', -2,
        { r: 'Ignoring the overlap is improper', approach: 'Business-as-usual framing', why: 'The dual relationship must be actively managed, not ignored', keys: ['active management'], mistake: 'Failing to manage a real conflict of interest' }),
      O('c', 'Ask Karen to simply keep the whole overlap a secret from everyone so nobody ever has to address it', -2,
        { r: 'Secrecy compounds the problem', approach: 'Secrecy framing', why: 'Concealment does not manage the boundary and can harm the client', keys: ['transparent management'], mistake: 'Hiding rather than managing the conflict' }),
      O('d', 'Refer Karen out immediately with no explanation or coordinated transition of any kind at all', -1,
        { r: 'An abrupt handoff is inadequate', approach: 'Uncoordinated-exit framing', why: 'Where referral is needed it is done with explanation and a coordinated transition, not abruptly', keys: ['coordinated referral'], mistake: 'Dropping the client without a planned transition' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor use consultation and documentation here?', ['R2'], [
      O('a', 'Seek supervision or ethics consultation and document the boundary, the reasoning, and the plan', 3,
        { r: 'Consult and document the reasoning', approach: 'Consult and document', why: 'A boundary dilemma is best handled with consultation and documentation of the boundary, the reasoning, and the plan', keys: ['dual relationship', 'conflict of interest'], mistake: 'Deciding alone without consultation or a documented rationale' }),
      O('b', 'Deliberately keep no record at all of the boundary issue or of any of the reasoning behind whatever gets decided, and just handle the entire thing informally and privately so that there is never any documentation of it existing anywhere', -2,
        { r: 'Failing to document is improper', approach: 'No-records framing', why: 'Documentation of the boundary, reasoning, and plan is part of sound practice', keys: ['document carefully'], mistake: 'Failing to document an ethical decision' }),
      O('c', 'Ask a few friends outside the field for their casual opinions instead of a proper consultation', -1,
        { r: 'Casual opinions are not consultation', approach: 'Casual-advice framing', why: 'Proper supervision or ethics consultation, not casual outside opinions, is appropriate', keys: ['proper consultation'], mistake: 'Substituting casual advice for real consultation' }),
      O('d', 'Avoid consulting anyone at all so no one else ever becomes aware that the situation happened', -1,
        { r: 'Avoiding consultation is a mistake', approach: 'Avoidance framing', why: 'Consultation strengthens a sound boundary decision and should not be avoided', keys: ['seek consultation'], mistake: 'Avoiding helpful consultation' }),
    ]),
    Q('q9', 'treatment', 'If a referral becomes necessary, how should it be arranged?', ['R4'], [
      O('a', 'Explain the reason, give appropriate notice, and coordinate a smooth transition that protects Karen’s continuity of care', 3,
        { r: 'Explain, give notice, coordinate transition', approach: 'Refer responsibly', why: 'A necessary referral is arranged with explanation, appropriate notice, and a coordinated transition that protects continuity of care', keys: ['overlap unmanageable', 'client continuity'], mistake: 'Referring abruptly without explanation, notice, or a coordinated transition' }),
      O('b', 'Just abruptly tell Karen at the very end of a session one day that she cannot ever come back again, and offer her no explanation whatsoever and no referral options and no plan of any kind for continuing the care she still needs', -2,
        { r: 'An abrupt cutoff harms the client', approach: 'Abrupt-cutoff framing', why: 'An abrupt cutoff with no explanation or plan harms the client and is not an appropriate referral', keys: ['coordinated referral'], mistake: 'Abandoning the client without a plan' }),
      O('c', 'Refer her only to someone the counselor knows will send lucrative referrals back in return', -2,
        { r: 'Self-serving referral is a conflict', approach: 'Kickback framing', why: 'Referrals are made in the client’s interest, not for the counselor’s gain', keys: ['client interest'], mistake: 'Referring for personal benefit' }),
      O('d', 'Delay the referral for many months so nothing has to change for as long as possible first', -1,
        { r: 'Undue delay prolongs the conflict', approach: 'Delay framing', why: 'Where a referral is needed it is arranged in a timely way, not indefinitely delayed', keys: ['timely referral'], mistake: 'Prolonging an unmanaged conflict' }),
    ]),
    Q('q10', 'counseling', 'Karen feels hurt when the counselor raises the boundary and worries she did something wrong. The most therapeutic response is to:', ['R4'], [
      O('a', 'Reassure her she did nothing wrong, explain the boundary is about protecting her, and keep the alliance intact', 3,
        { r: 'Reassure, explain, protect the alliance', approach: 'Frame the boundary as protective', why: 'Reassuring her that she did nothing wrong and explaining the boundary is about protecting her preserves the alliance', keys: ['feels hurt', 'worries she erred'], mistake: 'Either making her feel blamed or dropping the boundary to avoid her discomfort' }),
      O('b', 'Tell Karen in a rather blunt way that this whole awkward and uncomfortable situation is really entirely her own fault for having brought up the referral in the first place, and that she should have known much better than to do that', -2,
        { r: 'Blaming her is harmful', approach: 'Blame framing', why: 'Blaming the client for a boundary issue harms her and the alliance', keys: ['no blame'], mistake: 'Assigning blame to the client' }),
      O('c', 'Drop the boundary discussion entirely as soon as she looks upset so that she does not feel any discomfort', -1,
        { r: 'Dropping the boundary is a mistake', approach: 'Avoidance framing', why: 'The boundary is addressed supportively, not abandoned to avoid discomfort', keys: ['hold the boundary'], mistake: 'Abandoning a needed boundary to avoid discomfort' }),
      O('d', 'End the session immediately rather than talking through how hurt and worried she is right now', -1,
        { r: 'Ending abruptly misses the work', approach: 'Escape framing', why: 'Her feelings can be engaged and supported, not avoided by ending the session', keys: ['engage the feeling'], mistake: 'Avoiding a meaningful therapeutic moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best preserve Karen’s trust while managing the boundary?', ['R4'], [
      O('a', 'Be transparent and collaborative about the plan and keep her welfare and continuity of care at the center', 3,
        { r: 'Transparent, collaborative, welfare-centered', approach: 'Collaborate transparently', why: 'Transparency and collaboration about the plan, centered on her welfare and continuity, preserve trust while managing the boundary', keys: ['wants to keep working', 'trust at stake'], mistake: 'Handling the boundary in a way that feels secretive or dismissive of her welfare' }),
      O('b', 'Just quietly make all of the decisions about the boundary and any possible referral entirely on the counselor’s own and never actually explain any of the reasoning to Karen or involve her in the process in any real way at all', -2,
        { r: 'Excluding her erodes trust', approach: 'Unilateral framing', why: 'Deciding unilaterally without explaining or involving her erodes trust', keys: ['collaborate'], mistake: 'Excluding the client from decisions about her own care' }),
      O('c', 'Focus the sessions mainly on rehashing the awkwardness in exhaustive detail every single week', -1,
        { r: 'Rehashing is not the work', approach: 'Rehash framing', why: 'Dwelling on the awkwardness does not preserve trust or move the work forward', keys: ['forward-focused'], mistake: 'Centering sessions on the awkwardness' }),
      O('d', 'Tell her counseling cannot continue at all unless she first resolves the workplace overlap herself', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Managing the boundary is the counselor’s responsibility, not a precondition placed on the client', keys: ['counselor manages it'], mistake: 'Putting the burden of the boundary on the client' }),
    ]),
    Q('q12', 'ethics', 'Karen asks the counselor to also give her spouse’s manager some informal advice about her at work. The most appropriate response is to:', ['R1'], [
      O('a', 'Decline the added role, explain why it would create a harmful conflict, and keep the counseling relationship clear', 3,
        { r: 'Decline the added role; keep it clear', approach: 'Refuse a harmful added role', why: 'Taking on an added workplace-advisory role would deepen the conflict of interest, so it is declined and the boundary explained', keys: ['requests added role', 'conflict of interest'], mistake: 'Agreeing to an added role that compounds the dual relationship and harms objectivity' }),
      O('b', 'Go ahead and agree to quietly give the manager some informal advice about Karen on the side, and just assume that being helpful in this small way is very unlikely to ever actually cause any real problem for the counseling relationship or for Karen herself', -2,
        { r: 'Taking the added role deepens the conflict', approach: 'Accept-role framing', why: 'Adding a workplace-advisory role deepens the conflict of interest and can harm the client', keys: ['avoid added roles'], mistake: 'Compounding the dual relationship' }),
      O('c', 'Refuse but give no explanation at all, leaving Karen confused about why the request was declined', -1,
        { r: 'Declining without explanation is unclear', approach: 'No-explanation framing', why: 'The refusal is explained so Karen understands it protects her, rather than leaving her confused', keys: ['explain the boundary'], mistake: 'Declining without a clear, supportive explanation' }),
      O('d', 'Tell Karen you will think about maybe doing it later, leaving the boundary vague and unresolved', -1,
        { r: 'Leaving it vague is a mistake', approach: 'Vague framing', why: 'The boundary is addressed clearly, not left ambiguous', keys: ['clear boundary'], mistake: 'Leaving the boundary unresolved' }),
    ]),
    Q('q13', 'ethics', 'The counselor is unsure whether the overlap can be ethically managed at all. The most ethical course of action is to:', ['R2'], [
      O('a', 'Seek supervision or ethics consultation to decide whether to manage the overlap or refer, keeping Karen’s welfare central', 3,
        { r: 'Consult to decide manage-versus-refer', approach: 'Practice within competence', why: 'Uncertainty about whether the overlap can be managed calls for consultation to decide between managing it and referring, centered on client welfare', keys: ['unsure it can be managed', 'client welfare'], mistake: 'Guessing alone about a genuine conflict instead of seeking consultation' }),
      O('b', 'Simply keep on going exactly as things are for now and put off making any real decision about the overlap for as long as humanly possible, and just hope that the whole thing somehow quietly works itself out on its own before it ever becomes a genuine problem', -2,
        { r: 'Indefinite delay is improper', approach: 'Delay framing', why: 'A genuine conflict is addressed promptly with consultation, not indefinitely deferred', keys: ['prompt action'], mistake: 'Deferring a decision on a real conflict' }),
      O('c', 'Assume the overlap is fine and continue without consulting anyone or documenting any reasoning at all', -2,
        { r: 'Assuming it is fine is unsafe', approach: 'Assume-fine framing', why: 'A real conflict is evaluated through consultation, not assumed away', keys: ['evaluate the conflict'], mistake: 'Assuming away a genuine conflict of interest' }),
      O('d', 'Transfer Karen at once with no explanation, coordination, or plan for continuing her care', -1,
        { r: 'Abrupt transfer harms the client', approach: 'Uncoordinated handoff', why: 'Where a transfer is needed it is coordinated with explanation and a plan, not done abruptly', keys: ['coordinated referral'], mistake: 'Dropping the client without a plan' }),
    ]),
  ],
};

// ============================================================================
// D201 — Mandated Reporting Decision (Z65.8) — Ethics — hard
// ============================================================================
const D201 = {
  id: 'ncmhce-D201',
  title: 'Weighing a possible mandated report of suspected child maltreatment',
  category: 'Ethics',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Mandated Reporting Decision', code: 'Z65.8' },
  diagnosis: { name: 'Mandated Reporting Decision', code: 'Z65.8' },
  differentialOptions: [
    { id: 'do1', name: 'Mandated Reporting Decision', isCorrect: true },
    { id: 'do2', name: 'Confidentiality / Duty-to-Warn Dilemma', isCorrect: false },
    { id: 'do3', name: 'Boundary / Dual-Relationship Dilemma', isCorrect: false },
    { id: 'do4', name: 'Informed Consent / Competence Dilemma', isCorrect: false },
  ],
  narrative: {
    intake:
      'Tanya Brooks, a 29-year-old parent, discloses in session details suggesting a young child in her home may be experiencing neglect and possible ' +
      'physical maltreatment. The information raises a reasonable suspicion within a legally protected reporting category involving a minor.',
    session1:
      'The clinical focus is a mandated-reporting decision: the disclosure raises a reasonable suspicion of child maltreatment, which as a counselor ' +
      'triggers a legal mandated-reporting obligation to the appropriate authority, distinct from a discretionary duty-to-warn judgment.',
    session2:
      'Tanya is not herself in danger and has capacity, and there is no overlapping outside relationship; the issue is the mandated report about a ' +
      'child. The counselor recognizes the obligation to report reasonable suspicion while handling the therapeutic relationship with care.',
  },
  diagnosticRationale:
    'A reasonable suspicion of child maltreatment within a legally protected category triggers a mandated-reporting obligation to the appropriate ' +
    'authority, a decision distinct from a discretionary confidentiality/duty-to-warn dilemma, a boundary/dual-relationship dilemma, or an informed-' +
    'consent/competence dilemma.',
  references: [
    { id: 'R1', source: 'State law', detail: 'Mandatory reporting statutes: reasonable suspicion of child abuse/neglect and reporting to the appropriate authority' },
    { id: 'R2', source: 'ACA Code of Ethics', detail: 'B.2.: confidentiality exceptions and legal requirements such as mandated reporting' },
    { id: 'R3', source: 'NBCC Content Outline', detail: 'Ethical and legal practice: mandated reporting and confidentiality limits' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Managing the alliance while meeting mandated-reporting obligations' },
    { id: 'R5', source: 'DSM-5-TR', detail: 'Child maltreatment as a clinical concern (V/Z codes) warranting assessment and appropriate action' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to recognize about the ethical focus here?', ['R1'], [
      O('a', 'It is a mandated-reporting decision triggered by a reasonable suspicion of child maltreatment', 3,
        { r: 'Mandated-reporting decision', approach: 'Frame the obligation accurately', why: 'A reasonable suspicion of child maltreatment triggers a legal mandated-reporting obligation for a counselor', keys: ['possible child neglect and harm', 'legally protected category'], mistake: 'Treating a mandated report as an optional judgment call rather than a legal obligation' }),
      O('b', 'That the counselor really ought to first spend a great deal of time personally gathering absolute definitive proof that the maltreatment is genuinely occurring, entirely on their own, before ever telling anyone else about any of it at all', -2,
        { r: 'Certainty is not the threshold', approach: 'Proof-first framing', why: 'The reporting threshold is reasonable suspicion, not proof the counselor gathers alone', keys: ['reasonable suspicion standard'], mistake: 'Requiring proof before meeting a reasonable-suspicion obligation' }),
      O('c', 'That the counselor can simply pinpoint the single past event that first led Tanya into difficulty', -1,
        { r: 'A remote origin is not the focus', approach: 'Origin framing', why: 'The current reporting obligation, not a remote origin, is the focus', keys: ['reporting focus'], mistake: 'Chasing a remote origin instead of addressing the obligation' }),
      O('d', 'That Tanya currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is a reporting obligation, not a diagnostic count', keys: ['ethics-focused'], mistake: 'Applying diagnostic criteria to an ethics question' }),
    ]),
    Q('q2', 'core', 'Which feature best identifies this as a mandated-reporting decision rather than a discretionary duty-to-warn dilemma?', ['R1'], [
      O('a', 'A reasonable suspicion of child maltreatment falls in a legally protected category with a defined reporting duty', 3,
        { r: 'Protected category with a defined duty', approach: 'Contrast the two ethical issues', why: 'A duty-to-warn dilemma is a discretionary judgment; child maltreatment is a legally protected category with a defined mandated-reporting duty', keys: ['minor in the home', 'reasonable suspicion'], mistake: 'Treating a legally mandated report as a discretionary duty-to-warn judgment' }),
      O('b', 'The fact that this is very clearly one of those genuinely serious and rather sensitive kinds of situations that pretty much anyone would agree the counselor needs to stop and think about quite carefully and responsibly before acting', -1,
        { r: 'Seriousness alone does not identify the issue', approach: 'Seriousness framing', why: 'Both involve serious disclosures; the legal mandated-reporting category differs', keys: ['shared seriousness'], mistake: 'Using general seriousness to classify the dilemma' }),
      O('c', 'The distress and the worry that Tanya feels while she is talking this over', -1,
        { r: 'Client distress is nonspecific', approach: 'Distress framing', why: 'Client distress occurs in many dilemmas and does not identify this one', keys: ['shared distress'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way the issue tends to feel a little more pressing later in the session than at the start', 0,
        { r: 'Timing is not diagnostic', approach: 'Timing framing', why: 'When it feels pressing does not identify the ethical issue', keys: ['nonspecific timing'], mistake: 'Over-reading the moment it surfaced' }),
    ]),
    Q('q3', 'core', 'How does this differ from a boundary/dual-relationship dilemma?', ['R1'], [
      O('a', 'There is no overlapping outside role; the issue is a legal duty to report a reasonable suspicion about a child', 3,
        { r: 'No role overlap; a legal reporting duty', approach: 'Contrast the ethical structure', why: 'A boundary dilemma involves overlapping roles; here the issue is a legal duty to report a reasonable suspicion about a child', keys: ['no outside relationship', 'reporting duty'], mistake: 'Reframing a reporting obligation as a boundary problem' }),
      O('b', 'The fact that the counselor is going to have to exercise careful and responsible professional judgment about the right and appropriate way to handle a difficult and delicate situation involving Tanya and her family', -1,
        { r: 'Careful judgment is required in both', approach: 'Judgment framing', why: 'Careful judgment applies to both; the ethical structure differs', keys: ['shared feature'], mistake: 'Using the need for judgment to differentiate' }),
      O('c', 'The concern and the responsibility that the counselor feels about doing right by Tanya', -1,
        { r: 'Felt responsibility is nonspecific', approach: 'Responsibility framing', why: 'Felt responsibility occurs in both; the ethical structure differs', keys: ['shared concern'], mistake: 'Reading felt responsibility as decisive' }),
      O('d', 'The way the dilemma seems a little heavier on a busier clinic day than on a quieter one', 0,
        { r: 'Workload is not diagnostic', approach: 'Workload framing', why: 'How heavy it feels by workload does not identify the ethical issue', keys: ['nonspecific factor'], mistake: 'Over-reading a workload effect' }),
    ]),
    Q('q4', 'core', 'How does this differ from an informed-consent/competence dilemma?', ['R1'], [
      O('a', 'Tanya has capacity and understood consent; the issue is a legal duty to report a suspicion about a child', 3,
        { r: 'Capacity intact; issue is the reporting duty', approach: 'Contrast against a competence question', why: 'An informed-consent dilemma turns on capacity; here Tanya has capacity, so the issue is the mandated report', keys: ['has capacity', 'understood consent'], mistake: 'Reframing a reporting obligation as a competence or consent problem' }),
      O('b', 'The fact that there are quite a few different considerations and competing values that the counselor really does have to weigh very thoughtfully and carefully before finally deciding on exactly what the right thing to do here is', -1,
        { r: 'Weighing values occurs in both', approach: 'Weighing framing', why: 'Weighing competing values applies to both; the specific issue differs', keys: ['shared feature'], mistake: 'Using the presence of competing values to differentiate' }),
      O('c', 'The seriousness and the sensitivity of what Tanya has shared in the session', -1,
        { r: 'Seriousness is nonspecific', approach: 'Seriousness framing', why: 'Serious content occurs in both; the ethical structure differs', keys: ['shared seriousness'], mistake: 'Reading seriousness as decisive' }),
      O('d', 'The way the decision tends to feel a little harder near the end of a long day', 0,
        { r: 'Fatigue is not diagnostic', approach: 'Fatigue framing', why: 'How hard it feels when tired does not identify the ethical issue', keys: ['nonspecific factor'], mistake: 'Over-reading a fatigue effect' }),
    ]),
    Q('q5', 'intake', 'What is most important to clarify before acting?', ['R1'], [
      O('a', 'Whether the information rises to the reasonable-suspicion threshold and what the jurisdiction requires', 3,
        { r: 'Reasonable-suspicion threshold and legal duty', approach: 'Confirm the threshold and duty', why: 'The key is whether the information meets the reasonable-suspicion threshold and what the jurisdiction’s reporting law requires', keys: ['possible maltreatment', 'legal threshold'], mistake: 'Reporting reflexively without clarifying the threshold, or dismissing it without checking the standard' }),
      O('b', 'Mainly whether making a report might end up making Tanya somewhat upset or unhappy with the counselor, and whether it could possibly strain the counseling relationship that the two of them have been building together over the past several sessions', -2,
        { r: 'Client displeasure does not override the duty', approach: 'Relationship-preservation framing', why: 'The mandated report is not waived to avoid the client’s displeasure', keys: ['legal obligation'], mistake: 'Letting fear of upsetting the client override a legal duty' }),
      O('c', 'Whether Tanya’s difficulties can be traced to one single event that fully explains all of them', -1,
        { r: 'A single origin is not the priority', approach: 'Origin framing', why: 'The immediate priority is the reporting threshold and duty, not tracing a single origin', keys: ['clarify the duty'], mistake: 'Hunting for an origin instead of clarifying the obligation' }),
      O('d', 'Her general hobbies and preferences so the sessions can be arranged around what she most enjoys', 0,
        { r: 'Preferences are secondary', approach: 'Preference framing', why: 'Useful for rapport but not the immediate reporting-decision priority', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over the reporting decision' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate action given a reasonable suspicion?', ['R1'], [
      O('a', 'Make the mandated report to the appropriate authority within the required timeframe', 3,
        { r: 'Make the mandated report as required', approach: 'Meet the legal obligation', why: 'A reasonable suspicion of child maltreatment requires making the mandated report to the appropriate authority within the required timeframe', keys: ['reasonable suspicion', 'protected minor'], mistake: 'Withholding a legally required report because of discomfort or a wish to keep confidence' }),
      O('b', 'Just decide to keep the whole thing entirely confidential no matter what, on the general principle that everything a client ever says to a counselor in the privacy of a session must always stay completely private under absolutely all circumstances with no exceptions', -2,
        { r: 'Absolute confidentiality ignores the law', approach: 'Absolutist framing', why: 'Mandated reporting is a legal exception to confidentiality that cannot be waived', keys: ['legal exception'], mistake: 'Treating confidentiality as absolute against a legal duty' }),
      O('c', 'Investigate the family situation personally and gather proof yourself before involving any authority at all', -2,
        { r: 'Personal investigation is not the role', approach: 'Investigate-first framing', why: 'The counselor reports reasonable suspicion; investigating is the authority’s role, not the counselor’s', keys: ['report, not investigate'], mistake: 'Taking on an investigative role instead of reporting' }),
      O('d', 'Wait several weeks to see whether more information turns up before deciding whether to report', -1,
        { r: 'Delaying a required report is improper', approach: 'Delay framing', why: 'A mandated report is made within the required timeframe, not indefinitely delayed', keys: ['timely report'], mistake: 'Delaying a legally required report' }),
    ]),
    Q('q7', 'treatment', 'How should confidentiality be handled around the report?', ['R2'], [
      O('a', 'Limit disclosure to what the report requires and, where appropriate, tell Tanya about the report', 3,
        { r: 'Minimum necessary; inform where appropriate', approach: 'Report narrowly and, where appropriate, transparently', why: 'Disclosure is limited to what the mandated report requires, and where appropriate the client is told about the report', keys: ['mandated report', 'ongoing relationship'], mistake: 'Either disclosing far more than the report requires or concealing the report when it could be shared appropriately' }),
      O('b', 'Take the opportunity to share Tanya’s entire clinical file and every private thing she has ever told the counselor with everyone who might conceivably have any involvement at all, on the theory that sharing as much as possible is always the safest choice', -2,
        { r: 'Unlimited disclosure over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure is limited to what the report requires, not the client’s entire history', keys: ['minimum necessary'], mistake: 'Over-disclosing beyond what the report requires' }),
      O('c', 'Report but actively hide from Tanya that any report was ever made, even where telling her would be appropriate', -1,
        { r: 'Concealment can harm the alliance', approach: 'Concealment framing', why: 'Where appropriate the client is informed; hiding the report unnecessarily can damage the alliance', keys: ['inform where appropriate'], mistake: 'Concealing a report that could be handled transparently' }),
      O('d', 'Refuse to disclose even the minimum the mandated report legally requires', -2,
        { r: 'Refusing the required report is improper', approach: 'Refusal framing', why: 'The mandated report’s required disclosure cannot be refused', keys: ['legal requirement'], mistake: 'Withholding legally required information' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor use consultation and documentation here?', ['R3'], [
      O('a', 'Consult as needed on the threshold and process and document the suspicion, reasoning, and report', 3,
        { r: 'Consult and document the reasoning', approach: 'Consult and document', why: 'A reporting decision is supported by consultation as needed and careful documentation of the suspicion, reasoning, and report', keys: ['reporting threshold', 'legal process'], mistake: 'Deciding alone without consultation or documenting the basis for the report' }),
      O('b', 'Make absolutely sure to keep no notes or records of any kind at all about the suspicion, the reasoning, or the report itself, on the theory that having no documentation whatsoever anywhere is somehow the safest way to protect everyone', -2,
        { r: 'Failing to document is improper', approach: 'No-records framing', why: 'Careful documentation of the suspicion, reasoning, and report is part of sound practice', keys: ['document carefully'], mistake: 'Failing to document a mandated report' }),
      O('c', 'Ask a few friends outside the field for their casual opinions instead of a proper consultation', -1,
        { r: 'Casual opinions are not consultation', approach: 'Casual-advice framing', why: 'Proper consultation, not casual outside opinions, supports a reporting decision', keys: ['proper consultation'], mistake: 'Substituting casual advice for real consultation' }),
      O('d', 'Delay any documentation for weeks so there is time to think it over alone first', -1,
        { r: 'Delayed documentation is a mistake', approach: 'Delay framing', why: 'Documentation is completed in a timely way around a mandated report', keys: ['timely documentation'], mistake: 'Postponing needed documentation' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the reporting authority?', ['R1'], [
      O('a', 'Follow the required process, provide the information the report calls for, and cooperate within the legal framework', 3,
        { r: 'Follow the process within the legal framework', approach: 'Coordinate lawfully', why: 'The counselor follows the required reporting process, provides the called-for information, and cooperates within the legal framework', keys: ['mandated report', 'appropriate authority'], mistake: 'Either bypassing the required process or acting outside the legal framework' }),
      O('b', 'Personally take over the entire situation and try to handle the whole child-protection matter single-handedly by the counselor’s own means, rather than actually reporting it to and coordinating with the authority whose job and role this genuinely is', -2,
        { r: 'Taking over the case exceeds the role', approach: 'Overreach framing', why: 'Child protection is the authority’s role; the counselor reports and coordinates rather than taking over', keys: ['report and coordinate'], mistake: 'Assuming a role outside the counselor’s scope' }),
      O('c', 'Do nothing further at all and simply hope the authority somehow finds out about the situation on its own', -2,
        { r: 'Inaction ignores the duty', approach: 'Inaction framing', why: 'A mandated report requires active reporting, not hoping others find out', keys: ['duty to report'], mistake: 'Failing to actually make the report' }),
      O('d', 'Decide what to share based only on personal feelings rather than what the report and law require', -1,
        { r: 'Personal feelings are not the standard', approach: 'Subjective framing', why: 'What is shared follows the report and legal requirements, not personal feelings', keys: ['legal standard'], mistake: 'Basing the report on personal feelings' }),
    ]),
    Q('q10', 'counseling', 'Tanya becomes frightened and angry when the counselor explains the reporting duty. The most therapeutic response is to:', ['R4'], [
      O('a', 'Stay calm and empathic, explain the duty honestly, and keep engaging her and supporting the family’s needs', 3,
        { r: 'Calm, honest, keep engaging', approach: 'Be transparent while holding the alliance', why: 'Calm empathy and honesty about the duty, while continuing to engage and support her, manages the obligation without abandoning her', keys: ['frightened and angry', 'ongoing family needs'], mistake: 'Either hiding the duty from her or reacting in a way that ends the engagement' }),
      O('b', 'Quietly avoid ever telling Tanya anything at all about the reporting duty or the report, just so that she does not get frightened or angry and so that she will keep coming to her sessions and keep talking openly with the counselor', -2,
        { r: 'Concealing the duty is not transparent', approach: 'Conceal framing', why: 'Where appropriate the client is told about the duty honestly, not kept in the dark to avoid her reaction', keys: ['honest transparency'], mistake: 'Concealing the reporting duty to manage her reaction' }),
      O('c', 'Warn her sharply that she had better not get angry or the counselor will make things far worse for her', -2,
        { r: 'Threatening her is harmful', approach: 'Threat framing', why: 'Threatening the client is harmful and escalating; a calm, honest stance is appropriate', keys: ['de-escalation'], mistake: 'Escalating with threats' }),
      O('d', 'End the session immediately rather than engaging with how frightened and angry she is right now', -1,
        { r: 'Ending abruptly misses the work', approach: 'Escape framing', why: 'Her fear and anger can be engaged and supported, not avoided by ending the session', keys: ['engage the feeling'], mistake: 'Avoiding a meaningful therapeutic moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Tanya and the family through this?', ['R4'], [
      O('a', 'Frame the report as part of getting the family support and connect her to appropriate services and resources', 3,
        { r: 'Frame as support; connect to resources', approach: 'Orient toward help, not punishment', why: 'Framing the report as a route to support and connecting the family to services keeps the work constructive and centered on their needs', keys: ['family needs support', 'wants help'], mistake: 'Framing the report purely as punishment rather than a route to help, or abandoning the family afterward' }),
      O('b', 'Tell Tanya in a rather blunt and unsparing way that she is simply a bad and unfit parent for whatever has been happening in the home, and keep on saying it until she finally feels ashamed enough to promise the counselor that she will do better', -2,
        { r: 'Shaming her is counter-therapeutic', approach: 'Shame framing', why: 'Shaming the parent damages the alliance and undermines support for the family', keys: ['support, not shame'], mistake: 'Using shame as a motivator' }),
      O('c', 'Focus the sessions mainly on cataloguing every past incident in the home in exhaustive detail every week', -1,
        { r: 'Cataloguing is not the work', approach: 'Catalogue framing', why: 'Rehashing past incidents does not support the family moving forward', keys: ['forward-focused work'], mistake: 'Centering sessions on past incidents' }),
      O('d', 'Tell her counseling cannot help her at all unless she first resolves the entire situation on her own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Support and engagement proceed now, not contingent on her first resolving everything alone', keys: ['engagement matters'], mistake: 'Making care contingent on prior resolution' }),
    ]),
    Q('q12', 'ethics', 'Tanya begs the counselor not to report and threatens to quit counseling. The most appropriate response is to:', ['R2'], [
      O('a', 'Empathize, explain the report is a legal obligation, and invite her to keep working together through it', 3,
        { r: 'Empathize; honor the duty; invite continued work', approach: 'Hold the duty and the alliance together', why: 'The mandated report is a legal obligation that cannot be waived, and it is handled with empathy and an invitation to continue the work', keys: ['begs you not to report', 'threatens to quit'], mistake: 'Either agreeing not to report in order to keep her, or handling the duty coldly and losing her' }),
      O('b', 'Go ahead and quietly agree not to make the report after all, mainly so that Tanya will not be upset and will decide to stay in counseling, and just tell yourself that keeping her engaged in the work is probably the more helpful thing for everyone in the long run anyway', -2,
        { r: 'Waiving the report is not permitted', approach: 'Appease framing', why: 'A mandated report cannot be waived to retain the client', keys: ['legal obligation'], mistake: 'Trading a legal duty for the client’s continued attendance' }),
      O('c', 'Coldly tell her the report is being made and that whether she stays or quits is entirely her own problem', -1,
        { r: 'A cold response damages the alliance', approach: 'Cold framing', why: 'The duty is met with empathy and an invitation to continue, not coldly', keys: ['empathic honesty'], mistake: 'Meeting the obligation without any empathy' }),
      O('d', 'Tell her you might report and might not, leaving it vague so she stays calm for now', -1,
        { r: 'Vagueness is not honest', approach: 'Vague framing', why: 'The obligation is explained honestly and clearly, not left deliberately vague', keys: ['clear honesty'], mistake: 'Being deliberately vague about a legal duty' }),
    ]),
    Q('q13', 'ethics', 'The counselor is unsure whether the information meets the reporting threshold in the jurisdiction. The most ethical course of action is to:', ['R1'], [
      O('a', 'Consult promptly on the threshold and process, erring toward protecting the child while following the law', 3,
        { r: 'Consult promptly; err toward protection', approach: 'Practice within competence and law', why: 'Uncertainty about the threshold calls for prompt consultation, erring toward child protection while following the reporting law', keys: ['unsure of the threshold', 'possible maltreatment'], mistake: 'Guessing alone about the threshold instead of consulting promptly' }),
      O('b', 'Simply do nothing at all about it for now and put off the whole question until the counselor has personally had enough time to research every relevant reporting statute in complete detail entirely on their own over the coming weeks', -2,
        { r: 'Delaying is unsafe for the child', approach: 'Delay framing', why: 'A possible child-protection concern requires prompt consultation, not weeks of solo research', keys: ['prompt action'], mistake: 'Delaying action on a possible maltreatment concern' }),
      O('c', 'Assume it does not meet the threshold and keep everything confidential to avoid upsetting Tanya', -2,
        { r: 'Assuming no duty is unsafe', approach: 'Assume-no-duty framing', why: 'Assuming the threshold is not met in order to avoid upset can leave a child unprotected', keys: ['protect the child'], mistake: 'Assuming away a possible reporting duty' }),
      O('d', 'Transfer the case at once with no explanation, coordination, or attention to the possible child concern', -1,
        { r: 'Abrupt transfer mishandles the concern', approach: 'Uncoordinated handoff', why: 'A possible child-protection concern requires action and consultation, not an abrupt, uncommunicated transfer', keys: ['coordinated response'], mistake: 'Dropping the case without addressing the concern' }),
    ]),
  ],
};

// ============================================================================
// D202 — Informed Consent / Competence Dilemma (Z65.8) — Ethics — medium
// ============================================================================
const D202 = {
  id: 'ncmhce-D202',
  title: 'Questioned capacity to give informed consent for treatment',
  category: 'Ethics',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Informed Consent / Competence Dilemma', code: 'Z65.8' },
  diagnosis: { name: 'Informed Consent / Competence Dilemma', code: 'Z65.8' },
  differentialOptions: [
    { id: 'do1', name: 'Informed Consent / Competence Dilemma', isCorrect: true },
    { id: 'do2', name: 'Confidentiality / Duty-to-Warn Dilemma', isCorrect: false },
    { id: 'do3', name: 'Boundary / Dual-Relationship Dilemma', isCorrect: false },
    { id: 'do4', name: 'Mandated Reporting Decision', isCorrect: false },
  ],
  narrative: {
    intake:
      'Walter Kim, a 72-year-old, presents for counseling with early memory and comprehension difficulties, and during the intake he struggles to ' +
      'follow and retain the explanation of consent, the limits of confidentiality, and the nature of the services being offered.',
    session1:
      'The clinical focus is an informed-consent and capacity dilemma: it is unclear whether Walter can adequately understand and give informed ' +
      'consent for treatment, which the counselor must assess and address rather than simply proceeding or turning him away.',
    session2:
      'There is no third-party safety risk, no reportable category, and no overlapping outside relationship; the issue is Walter’s capacity to ' +
      'consent. The counselor recognizes the duty to assess understanding, adapt the consent process, and involve appropriate supports as needed.',
  },
  diagnosticRationale:
    'Uncertain capacity to understand and give informed consent, arising from early cognitive difficulties, defines an informed-consent/competence ' +
    'dilemma requiring assessment of understanding and an adapted consent process, distinct from a confidentiality/duty-to-warn dilemma, a boundary/' +
    'dual-relationship dilemma, or a mandated-reporting decision.',
  references: [
    { id: 'R1', source: 'ACA Code of Ethics', detail: 'A.2. and A.2.d.: informed consent and working with clients who have difficulty giving consent' },
    { id: 'R2', source: 'NBCC Content Outline', detail: 'Ethical practice: informed consent, capacity, and client autonomy' },
    { id: 'R3', source: 'State law', detail: 'Standards for consent, capacity, and surrogate/guardian involvement where applicable' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Respecting autonomy while ensuring genuine understanding and voluntary consent' },
    { id: 'R5', source: 'DSM-5-TR', detail: 'Neurocognitive concerns as a clinical consideration warranting appropriate assessment and referral' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to recognize about the ethical focus here?', ['R1'], [
      O('a', 'It is an informed-consent/capacity dilemma requiring assessment of his understanding and an adapted consent process', 3,
        { r: 'Informed-consent/capacity dilemma', approach: 'Frame the dilemma accurately', why: 'Uncertain capacity to understand consent creates an informed-consent/capacity dilemma requiring assessment and an adapted process', keys: ['early memory difficulties', 'struggles to follow consent'], mistake: 'Either proceeding as if consent were fully valid or simply turning him away without assessing capacity' }),
      O('b', 'That the counselor should really just go right ahead and have Walter quickly sign the standard consent form as usual and then simply move straight on into the treatment, and not spend any real time worrying about whether he has genuinely understood any of it', -2,
        { r: 'A signature is not genuine consent', approach: 'Signature framing', why: 'A signed form without genuine understanding is not valid informed consent', keys: ['genuine understanding'], mistake: 'Treating a signature as sufficient consent' }),
      O('c', 'That the counselor can simply pinpoint the single past event that first led Walter into difficulty', -1,
        { r: 'A remote origin is not the focus', approach: 'Origin framing', why: 'The current consent/capacity dilemma, not a remote origin, is the focus', keys: ['consent focus'], mistake: 'Chasing a remote origin instead of addressing capacity' }),
      O('d', 'That Walter currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is a consent/capacity dilemma, not a diagnostic count', keys: ['ethics-focused'], mistake: 'Applying diagnostic criteria to an ethics question' }),
    ]),
    Q('q2', 'core', 'Which feature best identifies this as an informed-consent/competence dilemma rather than a confidentiality dilemma?', ['R1'], [
      O('a', 'The uncertainty is about his capacity to understand and consent, not about disclosing to protect a third party', 3,
        { r: 'Capacity to consent, not disclosure', approach: 'Contrast the two ethical issues', why: 'A confidentiality dilemma turns on protective disclosure; here the issue is his capacity to understand and give consent', keys: ['struggles to understand consent', 'no third-party risk'], mistake: 'Collapsing a capacity/consent dilemma into a confidentiality question' }),
      O('b', 'The fact that this is very clearly the kind of genuinely delicate and somewhat difficult situation where the counselor really is going to have to slow down and think quite carefully and responsibly about the right and proper thing to do for Walter', -1,
        { r: 'Careful thought is required in both', approach: 'Judgment framing', why: 'Careful judgment applies to both; the structure of the dilemma differs', keys: ['shared feature'], mistake: 'Using the need for judgment to differentiate' }),
      O('c', 'The concern and the uncertainty that the counselor feels about the situation', -1,
        { r: 'Uncertainty is nonspecific', approach: 'Uncertainty framing', why: 'Uncertainty occurs in many dilemmas and does not identify this one', keys: ['shared feeling'], mistake: 'Reading uncertainty as decisive' }),
      O('d', 'The way the issue tends to feel a little more pressing later in the session than at the start', 0,
        { r: 'Timing is not diagnostic', approach: 'Timing framing', why: 'When it feels pressing does not identify the ethical issue', keys: ['nonspecific timing'], mistake: 'Over-reading the moment it surfaced' }),
    ]),
    Q('q3', 'core', 'How does this differ from a boundary/dual-relationship dilemma?', ['R1'], [
      O('a', 'There is no overlapping outside role; the issue is whether Walter can genuinely understand and consent', 3,
        { r: 'No role overlap; a capacity question', approach: 'Contrast the ethical structure', why: 'A boundary dilemma involves overlapping roles; here there is none—the issue is capacity to understand and consent', keys: ['no outside relationship', 'capacity in question'], mistake: 'Reframing a capacity/consent dilemma as a boundary problem' }),
      O('b', 'The fact that the counselor is going to have to bring careful and responsible professional judgment to bear on the right and appropriate way to handle a genuinely delicate and somewhat challenging situation that has arisen with Walter', -1,
        { r: 'Careful judgment is required in both', approach: 'Judgment framing', why: 'Careful judgment applies to both; the ethical structure differs', keys: ['shared feature'], mistake: 'Using the need for judgment to differentiate' }),
      O('c', 'The concern and the responsibility that the counselor feels about doing right by Walter', -1,
        { r: 'Felt responsibility is nonspecific', approach: 'Responsibility framing', why: 'Felt responsibility occurs in both; the ethical structure differs', keys: ['shared concern'], mistake: 'Reading felt responsibility as decisive' }),
      O('d', 'The way the dilemma seems a little heavier on a busier clinic day than on a quieter one', 0,
        { r: 'Workload is not diagnostic', approach: 'Workload framing', why: 'How heavy it feels by workload does not identify the ethical issue', keys: ['nonspecific factor'], mistake: 'Over-reading a workload effect' }),
    ]),
    Q('q4', 'core', 'How does this differ from a mandated-reporting decision?', ['R1'], [
      O('a', 'No protected reporting category is involved; the issue is his capacity to understand and give informed consent', 3,
        { r: 'No mandated report; a capacity question', approach: 'Contrast against a reporting duty', why: 'A mandated report concerns protected categories; here the issue is Walter’s capacity to understand and consent', keys: ['no reportable category', 'capacity in question'], mistake: 'Reframing a capacity/consent dilemma as a reporting decision' }),
      O('b', 'The fact that there are several different considerations and competing professional values that the counselor really is going to need to weigh very thoughtfully and carefully before finally settling on what the right course of action actually is', -1,
        { r: 'Weighing values occurs in both', approach: 'Weighing framing', why: 'Weighing competing values applies to both; the specific issue differs', keys: ['shared feature'], mistake: 'Using the presence of competing values to differentiate' }),
      O('c', 'The sensitivity and the mild discomfort of the situation Walter has raised', -1,
        { r: 'Discomfort is nonspecific', approach: 'Discomfort framing', why: 'Discomfort occurs in both; the ethical structure differs', keys: ['shared feeling'], mistake: 'Reading discomfort as decisive' }),
      O('d', 'The way the decision tends to feel a little harder near the end of a long day', 0,
        { r: 'Fatigue is not diagnostic', approach: 'Fatigue framing', why: 'How hard it feels when tired does not identify the ethical issue', keys: ['nonspecific factor'], mistake: 'Over-reading a fatigue effect' }),
    ]),
    Q('q5', 'intake', 'What is most important to assess before proceeding with treatment?', ['R1'], [
      O('a', 'Whether Walter can understand, retain, and weigh the key information well enough to give genuine informed consent', 3,
        { r: 'Assess understanding for genuine consent', approach: 'Assess decisional capacity', why: 'The key is whether he can understand, retain, and weigh the information well enough to give genuine informed consent', keys: ['comprehension difficulty', 'consent in question'], mistake: 'Proceeding without assessing whether he can genuinely understand and consent' }),
      O('b', 'Mainly whether it would be quicker and a good deal more convenient for the counselor to simply skip most of the usual consent explanation entirely and just get straight into the actual treatment work with Walter as soon as possible', -2,
        { r: 'Convenience is not the standard', approach: 'Convenience framing', why: 'The consent process centers on genuine understanding, not the counselor’s convenience', keys: ['genuine understanding'], mistake: 'Prioritizing convenience over valid consent' }),
      O('c', 'Whether his difficulties can be traced to one single event that fully explains all of them', -1,
        { r: 'A single origin is not the priority', approach: 'Origin framing', why: 'The immediate priority is assessing capacity to consent, not tracing a single origin', keys: ['assess capacity'], mistake: 'Hunting for an origin instead of assessing capacity' }),
      O('d', 'His general hobbies and preferences so the sessions can be arranged around what he most enjoys', 0,
        { r: 'Preferences are secondary', approach: 'Preference framing', why: 'Useful for rapport but not the immediate capacity-assessment priority', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over the capacity question' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate way to handle the consent process?', ['R1'], [
      O('a', 'Adapt the process—use plain language, check understanding, and take the time he needs to genuinely consent', 3,
        { r: 'Adapt the process to support understanding', why: 'The consent process is adapted with plain language, checks of understanding, and adequate time so he can give genuine consent', approach: 'Support capacity to consent', keys: ['comprehension difficulty', 'wants to engage'], mistake: 'Rushing a standard consent process he cannot follow, or abandoning consent altogether' }),
      O('b', 'Just have Walter go ahead and sign the standard consent form in the usual way as quickly as possible, and simply assume without really checking that he has understood all of the various parts of it perfectly well, so the session can move along', -2,
        { r: 'A rushed signature is not consent', approach: 'Signature framing', why: 'A quick signature without checked understanding is not valid informed consent', keys: ['genuine understanding'], mistake: 'Treating a signature as sufficient consent' }),
      O('c', 'Decide the consent process does not really matter here and simply skip it so treatment can begin sooner', -2,
        { r: 'Skipping consent is improper', approach: 'Skip framing', why: 'Informed consent is required, not optional, even when it takes more effort', keys: ['consent required'], mistake: 'Omitting the consent process' }),
      O('d', 'Turn Walter away immediately without any attempt to adapt the process or arrange appropriate support', -1,
        { r: 'Turning him away is not the answer', approach: 'Refuse-care framing', why: 'The process is adapted and supports involved where needed, rather than simply refusing him', keys: ['adapt and support'], mistake: 'Refusing care instead of adapting the process' }),
    ]),
    Q('q7', 'treatment', 'If Walter’s capacity remains genuinely in doubt, what is the most appropriate step?', ['R3'], [
      O('a', 'Involve appropriate supports or a surrogate/guardian per law and arrange a capacity evaluation as needed', 3,
        { r: 'Involve supports and evaluate capacity lawfully', approach: 'Bring in appropriate supports', why: 'Where capacity remains in doubt, appropriate supports or a legal surrogate are involved per law and a capacity evaluation is arranged as needed', keys: ['capacity still unclear', 'supports available'], mistake: 'Either proceeding on doubtful consent or turning him away without arranging supports or evaluation' }),
      O('b', 'Simply go ahead and proceed with the full course of treatment anyway on the basis of the doubtful and uncertain consent, and just quietly hope that Walter has probably understood more than enough of it for everything to be perfectly fine in the end', -2,
        { r: 'Proceeding on doubtful consent is improper', approach: 'Proceed-anyway framing', why: 'Treatment does not proceed on doubtful consent; capacity is clarified and supports involved', keys: ['valid consent'], mistake: 'Proceeding without valid consent' }),
      O('c', 'Have a family member simply decide everything without any regard to Walter’s own wishes or input at all', -2,
        { r: 'Ignoring his wishes is improper', approach: 'Override framing', why: 'Even with supports, his own wishes and input are respected as far as possible, not ignored', keys: ['respect autonomy'], mistake: 'Overriding the client’s voice entirely' }),
      O('d', 'Delay any decision for many months while doing nothing to clarify capacity or involve supports', -1,
        { r: 'Undue delay leaves him unserved', approach: 'Delay framing', why: 'Capacity is clarified and supports involved in a timely way, not indefinitely delayed', keys: ['timely action'], mistake: 'Leaving the question unresolved' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor use consultation and documentation here?', ['R2'], [
      O('a', 'Consult as needed on capacity and document the assessment, the adapted process, and the consent obtained', 3,
        { r: 'Consult and document the reasoning', approach: 'Consult and document', why: 'A capacity question is supported by consultation as needed and documentation of the assessment, the adapted process, and the consent obtained', keys: ['capacity in question', 'adapted consent'], mistake: 'Deciding alone without consultation or documenting the capacity assessment and consent process' }),
      O('b', 'Deliberately keep no record whatsoever of the capacity concern, the adapted consent process, or the reasoning behind any of it, and just handle the entire matter informally so that nothing about it is ever written down anywhere at all', -2,
        { r: 'Failing to document is improper', approach: 'No-records framing', why: 'Documentation of the capacity assessment, adapted process, and consent is part of sound practice', keys: ['document carefully'], mistake: 'Failing to document a capacity assessment' }),
      O('c', 'Ask a few friends outside the field for their casual opinions instead of a proper consultation', -1,
        { r: 'Casual opinions are not consultation', approach: 'Casual-advice framing', why: 'Proper consultation, not casual outside opinions, supports a capacity decision', keys: ['proper consultation'], mistake: 'Substituting casual advice for real consultation' }),
      O('d', 'Avoid consulting anyone at all so the concern about his capacity is never raised with others', -1,
        { r: 'Avoiding consultation is a mistake', approach: 'Avoidance framing', why: 'Consultation strengthens a sound capacity decision and should not be avoided', keys: ['seek consultation'], mistake: 'Avoiding helpful consultation' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor involve family or supports, if appropriate?', ['R3'], [
      O('a', 'With Walter’s consent and per law, involve supports while keeping him as central to decisions as possible', 3,
        { r: 'Involve supports with consent, keep him central', approach: 'Coordinate within consent and law', why: 'Supports are involved with his consent and per law, while keeping him as central to decisions about his own care as possible', keys: ['supports available', 'respect autonomy'], mistake: 'Either involving family without consent or excluding appropriate supports entirely' }),
      O('b', 'Simply contact all of Walter’s family members right away and share every detail of his situation with them, and let them make all of the decisions about his care entirely on their own, without involving Walter himself in the process at all', -2,
        { r: 'Bypassing him and consent is improper', approach: 'Bypass framing', why: 'Supports are involved with consent and Walter stays central; bypassing him and disclosing freely is improper', keys: ['consent and autonomy'], mistake: 'Disclosing and deciding without the client' }),
      O('c', 'Refuse to involve any supports at all even when doing so would clearly help Walter understand and decide', -1,
        { r: 'Excluding helpful supports is a mistake', approach: 'Isolation framing', why: 'Appropriate, consented supports can help him understand and decide and should not be refused', keys: ['appropriate supports'], mistake: 'Excluding helpful, consented supports' }),
      O('d', 'Decide about supports based only on personal convenience rather than his consent and the law', -1,
        { r: 'Convenience is not the standard', approach: 'Convenience framing', why: 'Involving supports follows his consent and the law, not the counselor’s convenience', keys: ['consent and law'], mistake: 'Basing the decision on convenience' }),
    ]),
    Q('q10', 'counseling', 'Walter becomes embarrassed and frustrated about his difficulty understanding. The most therapeutic response is to:', ['R4'], [
      O('a', 'Respond with patience and respect, normalize taking more time, and support his dignity and autonomy', 3,
        { r: 'Patience, respect, dignity, autonomy', approach: 'Protect dignity while supporting understanding', why: 'Patience, normalizing the extra time, and supporting his dignity and autonomy help him engage without shame', keys: ['embarrassed and frustrated', 'wants to understand'], mistake: 'Either rushing him in a way that shames him or taking over and stripping his autonomy' }),
      O('b', 'Tell Walter in a rather blunt and impatient way that if he simply cannot manage to follow and understand the standard explanation the way that everybody else usually does, then perhaps counseling is really just not going to be the right sort of thing for him at all', -2,
        { r: 'Shaming him is harmful', approach: 'Shame framing', why: 'Shaming or dismissing him damages his dignity and the alliance', keys: ['protect dignity'], mistake: 'Shaming the client for his difficulty' }),
      O('c', 'Quickly take over and make all the decisions for him so he does not have to feel frustrated anymore', -1,
        { r: 'Taking over strips autonomy', approach: 'Takeover framing', why: 'His autonomy is supported, not removed to spare him frustration', keys: ['support autonomy'], mistake: 'Stripping autonomy rather than supporting it' }),
      O('d', 'End the session immediately rather than engaging with how embarrassed and frustrated he is right now', -1,
        { r: 'Ending abruptly misses the work', approach: 'Escape framing', why: 'His feelings can be engaged and supported, not avoided by ending the session', keys: ['engage the feeling'], mistake: 'Avoiding a meaningful therapeutic moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Walter’s autonomy through this?', ['R4'], [
      O('a', 'Maximize his participation, offer choices he can understand, and honor his preferences as much as possible', 3,
        { r: 'Maximize participation and honor preferences', approach: 'Center his voice', why: 'Maximizing his participation, offering understandable choices, and honoring his preferences keeps him central to his own care', keys: ['wants a say', 'capacity partly intact'], mistake: 'Sidelining his voice rather than maximizing his participation and honoring his preferences' }),
      O('b', 'Simply go ahead and make every single decision about Walter’s care entirely on the counselor’s own from now on, and just assume that this must obviously be the easiest and kindest thing for everyone given how much difficulty he seems to be having with it all', -2,
        { r: 'Deciding for him removes autonomy', approach: 'Paternalism framing', why: 'Deciding everything for him removes his autonomy rather than supporting it', keys: ['support autonomy'], mistake: 'Substituting paternalism for supported decision-making' }),
      O('c', 'Focus the sessions mainly on repeatedly testing his memory in exhaustive detail every single week', -1,
        { r: 'Repeated testing is not the work', approach: 'Testing framing', why: 'Endless memory testing does not support his autonomy or the therapeutic work', keys: ['support, not test'], mistake: 'Turning sessions into repeated testing' }),
      O('d', 'Tell him counseling cannot help him at all unless he first fully resolves his memory difficulties himself', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Support proceeds now with an adapted process, not contingent on resolving his cognitive difficulties first', keys: ['adapt and support'], mistake: 'Making care contingent on resolving the difficulty' }),
    ]),
    Q('q12', 'ethics', 'A family member asks the counselor to share everything and let them decide, before capacity has been assessed. The most appropriate response is to:', ['R1'], [
      O('a', 'Explain consent and capacity, assess Walter’s capacity first, and involve the family only per his consent and the law', 3,
        { r: 'Assess capacity first; involve family lawfully', approach: 'Protect autonomy pending assessment', why: 'Before deferring to family, the counselor assesses Walter’s capacity and involves the family only with his consent and per law', keys: ['family wants to decide', 'capacity not yet assessed'], mistake: 'Handing decisions and disclosures to family before assessing capacity or obtaining consent' }),
      O('b', 'Just go ahead and immediately share all of Walter’s information with the family member and let that person make all of the decisions about his care from here on, simply because they happen to be family and are the ones now asking to do so', -2,
        { r: 'Deferring to family prematurely is improper', approach: 'Premature-deference framing', why: 'Capacity is assessed and consent obtained before deferring to family', keys: ['assess first'], mistake: 'Disclosing and deferring without assessment or consent' }),
      O('c', 'Refuse to speak with the family member at all and give no explanation of consent or capacity', -1,
        { r: 'A flat refusal without explanation is unhelpful', approach: 'Stonewall framing', why: 'The counselor explains consent and capacity rather than simply stonewalling the family', keys: ['explain the process'], mistake: 'Refusing without any explanation' }),
      O('d', 'Tell the family you will probably just let them decide later, leaving consent and capacity unresolved', -1,
        { r: 'Leaving it vague is a mistake', approach: 'Vague framing', why: 'Consent and capacity are addressed clearly, not left vaguely deferred', keys: ['clear process'], mistake: 'Leaving consent and capacity unresolved' }),
    ]),
    Q('q13', 'ethics', 'The counselor is unsure how to handle consent given Walter’s uncertain capacity. The most ethical course of action is to:', ['R2'], [
      O('a', 'Seek consultation on capacity and consent, adapt the process, and follow the law while protecting his autonomy', 3,
        { r: 'Consult, adapt, follow law, protect autonomy', approach: 'Practice within competence and law', why: 'Uncertainty about consent and capacity calls for consultation, an adapted process, and following the law while protecting his autonomy', keys: ['unsure how to proceed', 'capacity in question'], mistake: 'Guessing alone about capacity and consent instead of seeking consultation and following the law' }),
      O('b', 'Simply keep going with the treatment for now exactly as if nothing were unusual at all, and just put off dealing with the whole difficult consent-and-capacity question entirely until some much later point when there is finally more time to think it all through', -2,
        { r: 'Proceeding while deferring is improper', approach: 'Defer framing', why: 'Consent and capacity are addressed before proceeding, not deferred while treatment rolls on', keys: ['address consent first'], mistake: 'Proceeding while leaving consent unresolved' }),
      O('c', 'Assume his consent is perfectly valid and continue without consulting anyone or documenting the concern', -2,
        { r: 'Assuming valid consent is unsafe', approach: 'Assume-valid framing', why: 'Uncertain capacity is evaluated, not assumed to be valid consent', keys: ['evaluate capacity'], mistake: 'Assuming away a genuine capacity question' }),
      O('d', 'Transfer the case at once with no explanation, coordination, or plan for his continuing care', -1,
        { r: 'Abrupt transfer harms the client', approach: 'Uncoordinated handoff', why: 'Where a transfer is needed it is coordinated with explanation and a plan, not done abruptly', keys: ['coordinated referral'], mistake: 'Dropping the client without a plan' }),
    ]),
  ],
};

module.exports = { CASES: [D199, D200, D201, D202] };
