// __dirname = search de directory address at any device or server
/* OTHER Body-Parse methods

bodyParser.json
bodyParser.text
bodyParser.urlencoded => to get index.html post information to my server
*/

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    console.log(req.body);
    res.send("LEGAL!");
});


app.listen(3000, function(){
    console.log("Listening portal 3000");
});