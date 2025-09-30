const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 1080;

// Serve static files
app.use(express.static(path.join(__dirname, 'build')));

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`React app serving on port ${PORT}`);
});