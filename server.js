var express = require("express");
var app = express();

const Time = require("./Middleware/Time");

app.use(express.json());

const PORT = 7000;
app.use(Time);

app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});
app.get("/service", function (req, res) {
  res.sendFile(__dirname + "/service.html");
});
app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`the server is running ${PORT}...`);
});
