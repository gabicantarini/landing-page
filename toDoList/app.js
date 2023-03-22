//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

app.express();

app.get("/", (req, res) => {
    res.send("Hello!");
});

app.listen(3000, () => {
    console.log("Server started on portal 3000.");
});