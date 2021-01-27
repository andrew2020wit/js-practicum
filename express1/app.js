const express = require("express");
const app = express();
const port = 3000;

const routingExemple = require("./routing-example");

var myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(myLogger);

app.use(requestTime);

app.get("/", function (req, res) {
  var responseText = "Hello World!<br>";
  responseText += "<small>Requested at: " + req.requestTime + "</small>";
  res.send(responseText);
});

app.use("/routing-example", routingExemple);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
