const express = require('express');
const app = express();

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// API endpoint
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' }
  ]);
});

// POST endpoint
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  res.status(201).json({
    id: 3,
    name: name
  });
});

const PORT = process.env.PORT || 3000;

// ✅ यह add करो
let server;
if (require.main === module) {
  // अगर directly run हो रहा है तो server start करो
  server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} else {
  // अगर tests से import हो रहा है तो server न बनाओ
  server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;