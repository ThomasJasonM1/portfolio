const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/contact.html"));
});

app.get("/portfolio", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/portfolio.html"));
});

app.get("/pdf", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/assets/files/Profile.pdf"));
});

app.listen(PORT, function () {
    console.log(`Now listening on port: ${PORT}`);
});