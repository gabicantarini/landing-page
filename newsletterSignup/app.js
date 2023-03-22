
const express = require("express");
//const https = require("https");
const bodyParser = require("body-parser");
//const request = require("request");
const { dirname } = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // get html body information
app.use(express.static("public")); // refer to our static files

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

const apiKey = "b951f97577aa6f7d301d796b93dcc7c8-us21";
const server = "us21";
const audienceId = "fc788a18d5";


app.post("/", (req, res) => {

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

    

    if (!response.client) {
      res.sendFile(dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    console.log(response);

    
  };
  run();

});

app.post("/failure", (req, res) => {
  res.redirect("/");
}); 




app.listen(3000, function () {
    console.log("Server is running on port 3000");
});


//API KEY
//59b04bbf69228c28d54485c56474ebbe-us21

//list ID
//fc788a18d5

//const jsonData = JSON.stringify(data) => pass data as json format



