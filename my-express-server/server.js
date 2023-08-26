const express = require("express");
const app = express();

app.get("/", function (req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function (req, res) {
    res.send("Contact Mee");
})

app.listen(3000, function () {
    console.log("Server running on port 3000.");
});

