// __dirname = search de directory address at any device or server
/* OTHER Body-Parse methods

***body-parse access the http request and return wherever we request
bodyParser.json
bodyParser.text
bodyParser.urlencoded => to get index.html post information to my server
*/

//jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

let num1 = Number(req.body.num1);
let num2 = Number(req.body.num2);
let result = num1 + num2;

    res.send("The result is " + result);
});


app.listen(3000, function(){
    console.log("Listening portal 3000");
});