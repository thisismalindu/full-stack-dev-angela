const express = require("express")
const bodyParser = require("body-parser")
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function (req, res){
    var name = req.body.name;
    var email = req.body.email;
})

app.listen(3000, function (){
    console.log("Server running on port 3000");
})