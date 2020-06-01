const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get("/pdf", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/assets/files/Profile.pdf"));
});

app.listen(PORT, function () {
    console.log(`Now listening on port: ${PORT}`);
});