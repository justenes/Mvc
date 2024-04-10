
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Home');
});


router.get('/student', (req, res) => {
    res.send('Studenst Page');
});


router.use((req, res) => {
    res.status(404).send('<h1>404 Bulunamadı</h1>');
});

module.exports = router;
