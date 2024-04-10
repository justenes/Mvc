const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>HOME</title>
            </head>
            <body>
                <p>Nazwa tej podstrony duzymi literami: HOME</p>
            </body>
        </html>
    `);
});

app.get('/student', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>STUDENT</title>
            </head>
            <body>
                <p>Nazwa tej podstrony duzymi literami: STUDENT</p>
            </body>
        </html>
    `);
});

app.get('/add-student', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>ADD STUDENT</title>
            </head>
            <body>
                <p>Nazwa tej podstrony duzymi literami: ADD-STUDENT</p>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
