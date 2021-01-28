const express = require("express");
const app = express();
const port = 3000;

const routingExemple = require("./routing-example");
const middlewareExample = require("./middleware-example");
const errorHandling = require("./error-handling");
const cookieModule = require("./cookie");

app.set("view engine", "pug");
app.set("views", "./views");

app.use("/public", express.static(`${__dirname}/public`));

app.get("/", function (req, res) {
  res.render("index", { title: "HomePageTitle", message: "Hello there!" });
});

app.use("/routing-example", routingExemple);
app.use("/middleware-example", middlewareExample);
app.use("/error-handling", errorHandling);
app.use("/cookie", cookieModule);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
