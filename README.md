# PassReady Prep — Step 1: the front door

This is the foundation of the platform: **accounts, login, and saved progress.**
Nothing about cases or voice yet — just the part that lets a person make an
account, sign in, and have their work remembered across devices.

## What's in here

- `server.js` — the main file that starts everything.
- `models/User.js` — an account (email, password, preferences).
- `models/Exam.js` — one exam (NCMHCE first); progress attaches to it.
- `models/Attempt.js` — one saved attempt; this is what remembers progress.
- `routes/auth.js` — sign up, sign in, and "who am I".
- `routes/progress.js` — save progress and load it back.
- `middleware/auth.js` — the gatekeeper that checks you're signed in.

## What it can already do

- `POST /api/auth/register` — create an account
- `POST /api/auth/login` — sign in (returns a token)
- `GET /api/auth/me` — confirm who's signed in
- `POST /api/progress` — save a finished attempt
- `GET /api/progress` — load this person's saved attempts
- `GET /api/health` — a heartbeat to confirm the server is running

## To run it

1. `npm install`
2. Copy `.env.example` to `.env` and fill in your MongoDB Atlas string and a
   random `JWT_SECRET`.
3. `npm start`
4. Visit `http://localhost:4000/api/health` — you should see `{ "ok": true }`.

It's built the same way as CounselorReady (Express + Mongoose + JWT), so it drops
straight onto Render with MongoDB Atlas when you're ready.

## What's next

Step 2 — load your NCMHCE practice cases in. Step 3 — the study screen where
someone reads a case, answers, and sees the explanation.
