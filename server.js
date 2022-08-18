const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'))
  });

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

  app.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    console.log(data);
  });

  app.get("/api/notes", (req, res) => {
    fs.readFile(".db/db.json", "utf-8", (err, data) => {
      if(err) {

      } else {

      } 
    })
  })












  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
