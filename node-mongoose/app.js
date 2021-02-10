const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auth: {
    authSource: "admin",
  },
  user: "mongoadmin",
  pass: "secret",
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("We`re connected!");
});
