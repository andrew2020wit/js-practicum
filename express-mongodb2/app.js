const express = require("express");
const app = express();

const host = "127.0.0.1";
const port = 3000;

const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient(
  "mongodb://mongoadmin:secret@127.0.0.1:27017/",
  { useUnifiedTopology: true }
);
mongoClient.connect(function (err, client) {
  if (err) {
    return console.log(err);
  }

  const db = client.db("usersdb22");
  const collection = db.collection("users");

  let user = { name: "Tom", age: 23 };

  collection.insertOne(user, function (err, result) {
    if (err) {
      return console.log(err);
    }
    console.log(result.ops);
    client.close();
  });
});

app.get("/", function (req, res) {
  res.end("ok");
});

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`);
});
