const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/", function (req, res) {

// });

app.post("/", function (req, res) {
  var weatherCity = req.body.city;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid=21daff034827e66d5e45e6f844b326d9&q=" +
    weatherCity +
    "&units=metric";

  https.get(url, function (response) {
      response.on("data", function (data) {
        const weatherData = JSON.parse(data);
        res.write(
          "<h1>Weather in " +
            weatherCity +
            " is: " +
            weatherData.weather[0].main +
            ", " +
            weatherData.main.temp +
            "C </h1>"
        );
        res.write(
          '<img src="https://openweathermap.org/img/wn/' +
            weatherData.weather[0].icon +
            '@2x.png" >'
        );
        res.send();
      });
    })
    .on("error", function (error) {
      console.log(error);
    });
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
