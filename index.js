const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var mysql = require("mysql");

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

// データベースに接続できたらコンソールにConnectedを表示

app.get("/api/pokemon", (req, res) => {
  const connection = mysql.createConnection({
    host: "us-cdbr-east-05.cleardb.net",
    user: "b3449eedb4dad1",
    password: "ffdb1a08",
    database: "heroku_3cda4829cc2bb1d",
  });

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
  });

  connection.query(
    "SELECT * FROM pokemonzukan ORDER BY RAND() LIMIT 6",
    (error, results) => {
      console.log(results);
      res.send(results);
      connection.end();
    }
  );
});

var port = process.env.PORT || 5000;

app.listen(3000, () => {
  console.log("Start server port:5000");
});
