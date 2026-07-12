// Elfaria — local dev server.
//
// On Vercel this file is NOT used — Vercel auto-detects index.html/assets
// at the repo root as static files, and everything in /api/ as serverless
// functions automatically (zero-config, no vercel.json needed).
//
// This file exists purely so you can also run the exact same site locally
// with `npm start`, reusing the same /api handlers.

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/api/track', require('./api/track'));
app.get('/api/cards', require('./api/cards'));
app.get('/api/visit', require('./api/visit'));
app.post('/api/visit', require('./api/visit'));

app.listen(PORT, () => {
  console.log(`Elfaria running at http://localhost:${PORT}`);
});
