const express = require("express");
const app = express();

const host = "127.0.0.1";
const port = 3000;

app.use("", express.static(`${__dirname}/public`));

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`);
});
