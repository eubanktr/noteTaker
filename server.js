const express = require('express');
const path = require('path');
const fs = require('fs');
noteData = require('./db/db.json')
const uuid = require('./helpers/uuid');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => res.json(noteData));

app.post('/api/notes'), (req, res) => {

};


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
