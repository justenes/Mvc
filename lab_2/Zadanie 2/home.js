function renderPage() {
    return `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ana Sayfa</title>
        </head>
        <body>
            <h2>Kullanıcı Bilgi Formu</h2>
            <form action="/submit" method="POST">
                <div>
                    <label for="ad">Ad:</label>
                    <input type="text" id="ad" name="ad">
                </div>
                <div>
                    <label for="soyad">Soyadı:</label>
                    <input type="text" id="soyad" name="soyad">
                </div>
                <div>
                    <label for="yas">Yaş:</label>
                    <input type="number" id="yas" name="yas">
                </div>
                <div>
                    <label for="cinsiyet">Cinsiyet:</label>
                    <select id="cinsiyet" name="cinsiyet">
                        <option value="erkek">Erkek</option>
                        <option value="kadın">Kadın</option>
                        <option value="diğer">Diğer</option>
                    </select>
                </div>
                <div>
                    <label for="albumNo">Albüm Numarası:</label>
                    <input type="number" id="albumNo" name="albumNo">
                </div>
                <div>
                    <label for="yön">Yön:</label>
                    <input type="text" id="yön" name="yön">
                </div>
                <button type="submit">Gönder</button>
            </form>
        </body>
        </html>
    `;
}

module.exports = renderPage;
