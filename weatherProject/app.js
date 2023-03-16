const express = require("express");
const https = require("https");

const app = express();



app.get("/", function(req, res){


    const query = "London";
    const apiKey = "34acc4e89b63d7659564bbd63bf03c66";
    const unit = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){

           const weatherData =  JSON.parse(data)
           const temp = weatherData.main.temp;
           const weatherDescription = weatherData.weather[0].description;
           const icon = weatherData.weather[0].icon;
           const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
           res.write("<h1>The weather is currently " + weatherDescription + "  </h1>");
           res.write("<h1>The temperature in London is " + temp + " degrees Ceclcius.<h1>");
           res.write("<img src=" + imageURL + ">");
           res.send(); 
           console.log(JSON.stringify(temp));
        });
    });


    
    //res.send("Server is running"); //We can only use one send method at once
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});