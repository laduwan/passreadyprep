// Pass Guarantee timing rules shared by the payment routes and the access gates.
//
// After a non-passing result is approved, the member has 90 days from that
// exam to make their next request (an appointment confirmation or a new
// result). If they don't, the guarantee is forfeited (policies.html#guarantee).
const DAY = 24 * 60 * 60 * 1000;
const RESULT_WINDOW_DAYS = 14;   // report a result within 14 days of the exam
const NEXT_REQUEST_DAYS = 90;    // after a verified fail, next request within 90 days

// sr: the plan's scoreReport. True once the window after an approved fail has
// closed with no newer request (a newer request replaces scoreReport).
// An admin reopen (sr.reopenedAt) restarts the 90 days from that day.
function nextRequestDue(sr) {
  if (!sr || sr.status !== 'approved_extension' || sr.result !== 'fail' || !sr.examDate) return null;
  const from = Math.max(new Date(sr.examDate).getTime(), sr.reopenedAt ? new Date(sr.reopenedAt).getTime() : 0);
  return new Date(from + NEXT_REQUEST_DAYS * DAY);
}

function isForfeited(sr, now = new Date()) {
  const due = nextRequestDue(sr);
  return !!due && now.getTime() > due.getTime();
}

module.exports = { isForfeited, nextRequestDue, RESULT_WINDOW_DAYS, NEXT_REQUEST_DAYS };
