//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let today = new Date();
    
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    const day = today.toLocaleDateString("en-US", options);   

    res.render("lists", {kindOfDay: day, tasks: tasks});

});

const tasks = [];

app.post("/", (req, res) => {
    const tasks = req.body.newItem;
    tasks.push(task);
    res.redirect("/");
})



app.listen(3000, () => {
    console.log("Server started on portal 3000.");
});

