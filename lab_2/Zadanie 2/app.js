

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Port numarasını 3000 olarak ayarladık, ancak ortam değişkeni üzerinden de alabiliriz.


app.get('/', (req, res) => {
    res.send('Home');
});


app.get('/student', (req, res) => {
    res.send('Students Page');
});


app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} numaralı portta başlatıldı.`);
});
