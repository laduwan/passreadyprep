'use strict';

const CUTOVER = new Date('2027-07-01T00:00:00Z');

function examKeyFor(examDate) {
  const d = examDate || new Date();
  return d >= CUTOVER ? 'ncmhce-2027' : 'ncmhce';
}

function outlineFor(key) {
  return key === 'ncmhce-2027' ? '2027' : 'current';
}

module.exports = { CUTOVER, examKeyFor, outlineFor };
