const express = require("express");
const app = express();
const port = 3000;

var birds = require("./birds");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users/:userId/books/:bookId", function (req, res) {
  res.send(req.params);
});

app.get("/flights/:from-:to", function (req, res) {
  res.send(req.params);
});

app.get("/plantae/:genus.:species", function (req, res) {
  res.send(req.params);
});

app.get(
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

app.get("/example/c", [cb0, cb1, cb2]);

app.use("/birds", birds);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
