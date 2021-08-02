
// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

 app.use(express.static("public"));
 app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html");
});


app.post("/", function(req, res) {


  // ----------BELOW LINE I AM TESTING-----------
   if(res.statusCode===200){
     res.sendFile(__dirname + "/success.html");
   } else {
     res.sendFile(__dirname + "/Failure.html");
   }

   // console.log(res.statusCode);
   // ----------ABOVE LINE I AM TESTING-----------

  var data = {
    members: [{
      email_address: req.body.email,
      status: "subscribed",
      merge_fields: {
        FNAME: req.body.fName,
        LNAME:  req.body.lName
      },
    }
  ]
  };
  mailchimp.setConfig({
    apiKey: "bd5cbd47621f512699120e7653caa75d-us6",
    server: "us6",
  });
  const run = async () => {

    const response = await mailchimp.lists.batchListMembers("f660c49623", {
      members: data.members,
    });
    console.log(response);


  };
  run();
});


app.listen(3000, function(){
  console.log("Server is running on port 3000");
});

const mailchimp = require("@mailchimp/mailchimp_marketing");




















// API KEY
// dfda9775d22e76808c36c529f31ecea0-us6

// LIST ID OR AUDIENCE
// f660c49623
