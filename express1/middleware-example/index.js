var express = require("express");
var router = express.Router();

var myLogger = function (req, res, next) {
  console.log("myLogger: LOGGED");
  next();
};

var requestTime = function (req, res, next) {
  req.requestTime = new Date().toLocaleString();
  next();
};

router.use(myLogger);

router.use(requestTime);

router.get("/", function (req, res) {
  res.render("middleware-example", {
    title: "middleware-example",
    requestTime: req.requestTime,
  });
});

module.exports = router;
