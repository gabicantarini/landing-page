// __dirname = search de directory address at any device or server
/* OTHER Body-Parse methods

***body-parse access the http request and return wherever we request
bodyParser.json
bodyParser.text
bodyParser.urlencoded => to get index.html post information to my server
*/

//jshint esversion:6

let calculation = "";

function insertNumber(number) {
  calculation += number;
  document.getElementById("result").value = calculation;
}

function calcOperator(operator) {
  if (calculation.charAt(calculation.length - 1) !== operator) {
    calculation += operator;
    document.getElementById("result").value = calculation;
  }
}

function calculate() {
  const result = eval(calculation);
  document.getElementById("result").value = result;
  calculation = result.toString();
}

function clearAll() {
  calculation = "";
  document.getElementById("result").value = "";
}


const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    res.send();
});


app.listen(3000, function(){
    console.log("Listening portal 3000");
});