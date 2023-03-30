//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const tasks = [];
const workTasks = [];

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

    res.render("lists", {listTitle: day, newTaskList: tasks});

});



app.post("/", (req, res) => {
       
    let task = req.body.newItem;
    //let list = req.body.list;
    
    tasks.push(task);
    res.redirect("/");   

});

app.get("/work", (req, res) => {
    res.render("lists", {listTitle: "Work List", newTaskList: workTasks});
});

app.post("/work", (req, res) => {
       
    let task = req.body.newItem;
    //let list = req.body.list;

    workTasks.push(task);
    res.redirect("/work");
  
});


app.listen(3000, () => {
    console.log("Server started on portal 3000.");
});

