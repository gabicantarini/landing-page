
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // get html body information
app.use(express.static("public")); // refer to our static files

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                //id: "string",
                email_address: email,                
                status: "subscribed",                
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]

    };

    const jsonData = JSON.stringify(data);

    const url = "https://mandrillapp.com/api/1.0/users/ping" 

    https.request(url, options, function(response){
        
    })

    console.log(firstName, lastName, email);
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});


//API KEY
//59b04bbf69228c28d54485c56474ebbe-us21

//list ID
//fc788a18d5

//const jsonData = JSON.stringify(data) => pass data as json format



