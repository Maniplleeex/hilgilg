const fs = require('fs');
const path = require('path');

const COUNTER_FILE = path.join('/tmp', 'elfaria-visits.json');

function readVisits() {
  try {
    return JSON.parse(fs.readFileSync(COUNTER_FILE, 'utf8')).count || 0;
  } catch {
    return 0;
  }
}

function writeVisits(count) {
  fs.writeFileSync(COUNTER_FILE, JSON.stringify({ count }));
}

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const count = readVisits() + 1;
    writeVisits(count);
    return res.status(200).json({ count });
  }
  return res.status(200).json({ count: readVisits() });
};
