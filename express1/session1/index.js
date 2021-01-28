var express = require("express");
var router = express.Router();
// session

const bodyParser = require("body-parser");
const session = require("express-session");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(
  session({
    secret: "you secret key",
    saveUninitialized: true,
  })
);

router.get("/", (req, res) => {
  res.render("session1", {
    title: "session1",
    sessionValue: req.session.sessionValue1,
  });
});
router.get("/set-on", (req, res) => {
  req.session.sessionValue1 = "set-on";
  res.send("set-on");
});
router.get("/set-of", (req, res) => {
  req.session.sessionValue1 = "set-of";
  res.send("set-of");
});

module.exports = router;
