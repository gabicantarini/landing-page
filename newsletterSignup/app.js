
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");
const { dirname } = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // get html body information
app.use(express.static("public")); // refer to our static files

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});




app.post("/", function (req, res) {

    const apiKey = "9b778aa07ffd1d0f1ad0fccb4daafc16-us21";
    const server = "us21";
    const audienceId = "fc788a18d5";

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    
    //console.log(firstName, lastName, email);

    const client = require("@mailchimp/mailchimp_marketing");

    client.setConfig({
      apiKey: apiKey,
      server: server,
    });
  
    



 const run = async () => {
    const response = await client.lists.batchListMembers(audienceId, {
      members: [
        {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
        },
      ],
    });

     if(response.statusCode===200) {
         res.send(dirname + "Successfully subscribed!");
     } else {
         res.send(dirname + "There was an error with signing up, please try again!");
     }

     console.log(response);
     const jsonData = JSON.stringify(response);
    
  };
  run();

});



app.listen(3000, function () {
    console.log("Server is running on port 3000");
});


//API KEY
//59b04bbf69228c28d54485c56474ebbe-us21

//list ID
//fc788a18d5

//const jsonData = JSON.stringify(data) => pass data as json format



