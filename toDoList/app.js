//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const today = new Date();
    const curDay = today.getDay();
    let day = "";

   switch (new Date().getDay()) {
    case 0:
        day = "Sunday";        
        break;
    case 1:
        day = "Monday";        
        break;
    case 2:
        day = "Tuesday";        
        break;
    case 3:
        day = "Wednesday";        
        break;
    case 4:
        day = "Thursday";        
        break;
    case 5:
        day = "Friday";        
        break;
    case 6:
        day = "Saturday"; 
    default:
        console.log("Error: current day is equal to: " + curDay);

   }

    res.render("lists", {kindOfDay: day});
});



app.listen(3000, () => {
    console.log("Server started on portal 3000.");
});

