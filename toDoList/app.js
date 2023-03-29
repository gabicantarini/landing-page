//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    
    let today = new Date();
    
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    const day = today.toLocaleDateString("en-US", options);   

    res.render("lists", {listTitle: day, tasks: tasks});

});

const tasks = [];
const workTasks = [];

app.post("/", (req, res) => {
    const task = req.body.newItem;
    tasks.push(task);
    res.redirect("/");
})

app.get("/work", (req, res) => {
    res.render("lists", { listTitle: "Work List", tasks: workTasks });
})

app.post("/work", (req, res) => {
    const tasks = req.body.newItem;
    workTasks.push(tasks);
    res.redirect("/work");
})


app.listen(3000, () => {
    console.log("Server started on portal 3000.");
});

