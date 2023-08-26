const express = require("express")
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function (req, res){
    const weight = req.body.weight; // in kgs
    const height = req.body.height/100; //in meters
    var bmi = weight / (height*height);
    bmi = bmi * 100;
    bmi = Math.round(bmi);
    bmi = bmi /10;
    bmi = Math.round(bmi);
    bmi = bmi /10;

    res.send("<title>BMI Calculator</title> <h1>BMI: "+ bmi + "</h1>");
});

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
    console.log("Server running at port: 3000");
})