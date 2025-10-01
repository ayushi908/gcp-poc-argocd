// app/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from ArgoCD Image Updater PoC 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
