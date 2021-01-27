var express = require("express");
var router = express.Router();

const birds = require("./birds");

router.get("/", function (req, res) {
  res.send("This is routing-example");
});

router.get("/users/:userId/books/:bookId", function (req, res) {
  res.send(req.params);
});

router.get("/flights/:from-:to", function (req, res) {
  res.send(req.params);
});

router.get("/plantae/:genus.:species", function (req, res) {
  res.send(req.params);
});

router.get(
  "/example/b",
  function (req, res, next) {
    console.log("the response will be sent by the next function ...");
    next();
  },
  function (req, res) {
    res.send("Hello from B!");
  }
);

var cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};

var cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

var cb2 = function (req, res) {
  res.send("Hello from C!");
};

router.get("/example/c", [cb0, cb1, cb2]);

router.use("/birds", birds);

module.exports = router;
