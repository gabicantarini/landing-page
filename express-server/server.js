//jshint esversion:6

//new server building sintax
const { response } = require("express");
const express = require("express");

const app = express();

//req = request
//res = response
app.get("/", function(request, response){
    response.send("<h1>Hello</h1>");
});

/*app.get("/contact", function(req, res){
    res.send("Contact: gabriela.cantarini@html.com");
});*/

app.listen(3000, function(){
    console.log("Server started at port 3000");
});