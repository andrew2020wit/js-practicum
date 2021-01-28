const express = require("express");
const app = express();
const port = 3000;

const routingExemple = require("./routing-example");
const middlewareExample = require("./middleware-example");
const errorHandling = require("./error-handling");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index", { title: "HomePageTitle", message: "Hello there!" });
});

app.use("/routing-example", routingExemple);
app.use("/middleware-example", middlewareExample);
app.use("/error-handling", errorHandling);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
