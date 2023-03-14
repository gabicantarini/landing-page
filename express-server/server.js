//jshint esversion:6

//new server building sintax
const express = require("express");

const app = express();

//req = request
//res = response
app.get("/", function(req, res){
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact: gabriela.cantarini@html.com");
});

app.get("/about", function(rer, res){
    res.send("I am Gabriela. I am 37 years old.");
})

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Milk</li><li>Choccolat</li><li>gym</li></ul>")
})

app.listen(3000, function(){
    console.log("Server started at port 3000");
});
