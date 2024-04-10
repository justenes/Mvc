const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`Request ${req.method} on path ${req.url} ${new Date()}`);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

const viewsPath = path.join(__dirname, 'html');

app.get('/homepage', (req, res) => {
  res.sendFile(path.join(viewsPath, 'homepage.html'));
});

app.get('/student', (req, res) => {
  res.sendFile(path.join(viewsPath, 'student.html'));
});

app.get('/dodajstudent', (req, res) => {
  res.sendFile(path.join(viewsPath, 'dodajstudent.html'));
});

app.get('/uzywkownik', (req, res) => {
  res.sendFile(path.join(viewsPath, 'uzywkownik.html'));
});

app.listen(PORT, () => {
  console.log(`Serwer uruchomiony na porcie ${PORT}`);
});