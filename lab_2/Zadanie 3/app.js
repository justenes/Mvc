

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const routes = require('./routes/index');
app.use('/', routes);

app.use((req, res, next) => {
    res.status(404).send('<h1>404 Bulunamadı</h1>');
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} numaralı portta başlatıldı.`);
});
