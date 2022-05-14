const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var mysql = require("mysql");

app.use(express.static("views"));
var port = process.env.PORT || 5000;

const connection = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net",
  user: "b3449eedb4dad1",
  password: "ffdb1a08",
  database: "heroku_3cda4829cc2bb1d",
});

// データベースに接続できたらコンソールにConnectedを表示
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

app.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM pokemonzukan ORDER BY RAND() LIMIT 1",
    (error, results) => {
      res.render("hello.ejs", { pokemonzukan: results });
      console.log(results[0].id);
    }
  );
});

app.listen(port, () => {
  console.log("Start server port:5000");
});
