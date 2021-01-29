const express = require("express");
const app = express();

// local-passport, single-user

const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");

const host = "127.0.0.1";
const port = 3000;

app.use("/public", express.static(`${__dirname}/public`));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "secret key", cookie: { maxAge: 3600 * 24 } }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.set("views", "./views");
app.set("view engine", "pug");

passport.use(
  new localStrategy((user, password, done) => {
    if (user !== "user1") {
      console.log("User not found");
      return done(null, false, { message: "User not found" });
    } else if (password !== "pas1") {
      console.log("Wrong password");
      return done(null, false, { message: "Wrong password" });
    }
    console.log("auth ok");
    return done(null, { id: 1, name: "UserName", age: 21 });
  })
);

// function checkAuth() {
//   return app.use((req, res, next) => {
//     if (req.user) next();
//     else res.redirect("/login");
//   });
// }

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/protect",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/login", (req, res) => {
  const x = req.flash("error")[0];
  console.log("flash", x);
  res.render("login", { errorMessage: x });
});

app.use((req, res, next) => {
  if (req.user) next();
  else res.redirect("/login");
});

app.get("/protect", (req, res) => {
  res.render("protect");
});

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`);
});
