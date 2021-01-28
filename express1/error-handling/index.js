var express = require("express");
var router = express.Router();
// error-handling

router.get("/", function (req, res) {
  res.render("error-handling", {
    title: "error-handlinge",
  });
});

router.get("/throw-error", function (req, res) {
  throw new Error("BROKEN"); // Express will catch this on its own.
});

module.exports = router;
