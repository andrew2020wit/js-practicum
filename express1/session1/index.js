var express = require("express");
var router = express.Router();
// session

const bodyParser = require("body-parser");
const session = require("express-session");

const redisStorage = require("connect-redis")(session);
const redis = require("redis");
const redisClient = redis.createClient({
  host: "localhost",
  port: 6379,
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(
  session({
    store: new redisStorage({
      client: redisClient,
      ttl: 86400,
    }),
    secret: "you secret key",
    name: "_redisPractice",
    cookie: { secure: false },
    resave: false,
    saveUninitialized: true,
  })
);

redisClient.on("error", function (err) {
  console.log("Could not establish a connection with redis. " + err);
});
redisClient.on("connect", function (err) {
  console.log("Connected to redis successfully");
});

router.get("/", (req, res) => {
  console.log("req.sessionID", req.sessionID);
  console.log("req.session", req.session);

  res.render("session1", {
    title: "session1",
    sessionValue: req.session.sessionValue1,
  });
});

router.get("/set-on", (req, res) => {
  console.log("req.sessionID", req.sessionID);
  console.log("req.session", req.session);
  req.session.sessionValue1 = "set-on";
  res.send("set-on");
});
router.get("/set-of", (req, res) => {
  req.session.sessionValue1 = "set-of";
  res.send("set-of");
});

module.exports = router;
