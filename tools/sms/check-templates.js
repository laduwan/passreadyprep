#!/usr/bin/env node
/**
 * Checks every template in utils/sms.js against the rules that keep the A2P
 * 10DLC campaign healthy. Run it after editing any message text:
 *
 *   node tools/sms/check-templates.js
 *
 * Exits non-zero on a failure, so it can go in a pre-deploy check later.
 *
 * What it checks, and why each one matters:
 *
 *   GSM-7 only       A message made only of GSM 03.38 characters fits 160
 *                    chars per segment. One character outside it (a curly
 *                    quote from a word processor, an em dash, an emoji)
 *                    switches the whole message to UCS-2 and the segment
 *                    drops to 70 — so a 150-character message silently
 *                    becomes three segments, costing 3x and arriving split.
 *   One segment      Multi-segment messages get reassembled by the handset,
 *                    not the carrier; order is not guaranteed and some
 *                    carriers filter them harder.
 *   Brand present    An unidentified marketing/notification text is a
 *                    CTIA violation and the top cause of spam reports.
 *   STOP present     Opt-out must be in the message. The confirmation also
 *                    needs HELP, frequency and rate disclosure.
 *   No shortener     Shared short domains (bit.ly, tinyurl…) are blocked by
 *                    carrier filters because spammers share the domain
 *                    reputation. Always the full passreadyprep.com link.
 */

const { TEMPLATES } = require('../../utils/sms');

// GSM 03.38 basic character set.
const GSM_BASIC =
  '@£$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ !"#¤%&\'()*+,-./0123456789:;<=>?'
  + '¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà';
// Characters that are GSM-7 but cost two septets (escape + char).
const GSM_EXTENDED = '^{}\\[~]|€';

const SHORTENERS = /\b(bit\.ly|tinyurl\.com|t\.co|goo\.gl|ow\.ly|buff\.ly|rb\.gy|is\.gd|cutt\.ly)\b/i;

/** Septet cost, or null if the string is not GSM-7 encodable. */
function septets(text) {
  let n = 0;
  for (const ch of text) {
    if (GSM_BASIC.includes(ch)) n += 1;
    else if (GSM_EXTENDED.includes(ch)) n += 2;
    else return null;
  }
  return n;
}

function badChars(text) {
  return [...new Set([...text].filter((ch) => !GSM_BASIC.includes(ch) && !GSM_EXTENDED.includes(ch)))];
}

// name -> rendered text. Templates taking an argument get a representative one.
const RENDERED = {
  optInConfirm: TEMPLATES.optInConfirm(),
  trialEndingSoon: TEMPLATES.trialEndingSoon(),
  paymentFailed: TEMPLATES.paymentFailed(),
  examApproaching: TEMPLATES.examApproaching(14),
};

let failures = 0;
const fail = (name, msg) => { failures++; console.log(`  FAIL  ${name}: ${msg}`); };

console.log('\nSMS template check\n');

for (const [name, text] of Object.entries(RENDERED)) {
  const cost = septets(text);
  const encoding = cost === null ? 'UCS-2' : 'GSM-7';
  const limit = 160;
  console.log(`${name}`);
  console.log(`  ${text.length} chars, ${encoding}${cost === null ? '' : `, ${cost} septets`}`);
  console.log(`  "${text}"`);

  if (cost === null) {
    fail(name, `not GSM-7 — offending characters: ${badChars(text).map((c) => JSON.stringify(c)).join(' ')}`);
  } else if (cost > limit) {
    fail(name, `${cost} septets exceeds one ${limit}-septet segment`);
  }
  if (!/PassReady Prep/.test(text)) fail(name, 'does not name the brand');
  if (!/\bSTOP\b/.test(text)) fail(name, 'has no STOP instruction');
  if (SHORTENERS.test(text)) fail(name, 'uses a link shortener');

  // The opt-in confirmation carries the full CTIA disclosure set.
  if (name === 'optInConfirm') {
    if (!/\bHELP\b/.test(text)) fail(name, 'confirmation must offer HELP');
    if (!/freq/i.test(text)) fail(name, 'confirmation must state message frequency');
    if (!/rates may apply/i.test(text)) fail(name, 'confirmation must state that rates may apply');
  }
  console.log('');
}

if (failures) {
  console.log(`${failures} check(s) failed.\n`);
  process.exit(1);
}
console.log(`All ${Object.keys(RENDERED).length} templates pass.\n`);
