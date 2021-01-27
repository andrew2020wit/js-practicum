const express = require("express");
const app = express();
const port = 3000;

const routingExemple = require("./routing-example");

app.get("/", (req, res) => {
  res.send("This is Home Page.");
});

app.use("/routing-example", routingExemple);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
