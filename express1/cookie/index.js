var express = require("express");
var router = express.Router();
// cookie

cookieParser = require("cookie-parser");

router.use(cookieParser("secret key"));

router.get("/get-cookie", (req, res) => {
  console.log("Cookie: ", req.cookies);
  res.send("Get Cookie");
});

router.get("/set-cookie", (req, res) => {
  res.cookie("token", "12345ABCDE", {
    maxAge: 3600 * 24,
    secure: false,
  });
  res.send("Set Cookie");
});

module.exports = router;
