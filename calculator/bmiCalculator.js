
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

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
     
    let bmi = weight / (height * height);
    res.send("Your BMI is " + bmi.toFixed(2));
});


app.listen(3000, function(){
    console.log("Listening portal 3000");
});