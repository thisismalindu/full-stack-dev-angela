const express = require("express");
const https = require("https");
const app = express();

var info = "";

const url = 'https://api.openweathermap.org/data/2.5/weather?appid=21daff034827e66d5e45e6f844b326d9&q=Kurunegala&units=metric';

https.get(url, function (res) {
  res.on("data", function (data){
    const weatherData = JSON.parse(data);
    console.log("Weather in Kurunegala is: " + weatherData.weather[0].main + ", " + weatherData.main.temp + "C");
  });
});

app.get("/", function (req, res) {
  res.send("Weather");
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
