//jshint esversion:6

//new server building sintax
const express = require("express");

const app = express();

//req = request
//res = response
app.get("/", function(req, res) {
    response.send("<h1>Hello</h1>");
});

app.listen(3000, function() {
    console.log("Server started at port 3000");
});