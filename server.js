const express = require("express");
const path = require("path");

const app = express();

// Serwowanie statycznych plików z folderu 'build'
app.use(express.static(path.join(__dirname, "build")));

// Przekierowanie wszystkich tras do index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Nasłuch na porcie (Heroku ustawia PORT w zmiennych środowiskowych)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});