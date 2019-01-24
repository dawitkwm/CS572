const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const MUM = [-91.969179, 41.015748];

const app = express();
const mongoClientUrl = "mongodb://localhost:27017"
const client = new MongoClient(mongoClientUrl);
let db;

app.listen(8080);

app.use(express.json());

app.use((req, res, next) => {
  if (!db) {
    client.connect((err) => {
      if (err) {
        // console.error(err);
        throw err;
      }
      db = client.db('mwa');
      db.collection("locations").createIndex({
        location: "2d"
      });
      req.db = db;
      next();
    });
  } else {
    req.db = db;
    next();
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to location services.");
});

app.get("/near-mum", (req, res) => {
  db.collection("locations")
    .find({
      location: {
        $near: MUM
      }
    })
    .limit(3)
    .toArray((err, data) => {
      res.send(data);
    });
});

app.get("/locations", (req, res) => {
  db.collection("locations")
    .find({})
    .toArray((err, data) => {
      res.send(data);
    });
});

app.post("/locations", (req, res) => {
  console.dir(req.body);
  const {
    name,
    category,
    lng,
    lat
  } = req.body;

  db.collection("locations").insert({
    name,
    category,
    location: [lng, lat]
  });

  res.end("Successful!");
});