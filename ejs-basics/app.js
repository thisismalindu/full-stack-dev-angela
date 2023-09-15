const express = require("express")
const bodyParser = require("body-parser")
const https = require("https");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", function (req, res) {

    const weatherCity = "Kurunegala";
    const url =
        "https://api.kanye.rest/"

    https.get(url, function (response) {
        response.on("data", function (data) {
            const quoteData = JSON.parse(data);
            res.render("index", { name:quoteData.quote});
            
        });
    })
        .on("error", function (error) {
            console.log(error);
        });

    
})

app.listen(3000, function () {
    console.log("Server running on port 3000");
})
