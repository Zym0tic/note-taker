const express = require('express');
const path = require('path');
const fs = require('fs');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/api/notes', (req, res) => {
    res.status(200).json(`${req.method} request received to get notes`);
    console.info(`${req.method} request received to get notes`);
  });
  












  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
