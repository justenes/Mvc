
const express = require('express');
const app = express();

const PORT = 3000;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/öğrenci', (req, res) => {
    res.sendFile(__dirname + '/views/student.html');
});


app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} üzerinde çalışıyor`);
});
