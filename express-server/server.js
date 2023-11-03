//jshint esversion:6

//new server building sintax
const express = require("express");

const app = express();

app.get("/", function(request, response) {
    console.log(request);
});

app.listen(3000, function() {
    console.log("Server started ate port 3000");
});