//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
    const today = new Date();

    if(today.getDay() === 6 || today.getDay() === 0) {
        res.send("Yay it's the weekend!");
    } else {
        res.send("Boo! I have to work!");
    }
});







app.listen(3000, () => {
    console.log("Server started on portal 3000.");
});