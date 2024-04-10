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

const viewsPath = path.join(__dirname, 'views');

const students = [];

app.get('/', (req, res) => {
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

app.get('/api/students', (req, res) => {
  res.json(students);
});

app.post('/api/students', (req, res) => {
  const { firstName, lastName, major } = req.body;
  const fullName = `${firstName} ${lastName}`;
  const newStudent = { id: students.length + 1, fullName, major };
  students.push(newStudent);
  res.status(201).json({ message: 'Student added successfully', student: newStudent });
});

app.delete('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(student => student.id === id);
  if (index !== -1) {
      students.splice(index, 1);
      res.json({ message: 'Student deleted successfully' });
  } else {
      res.status(404).json({ message: 'Student not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Serwer uruchomiony na porcie ${PORT}`);
});