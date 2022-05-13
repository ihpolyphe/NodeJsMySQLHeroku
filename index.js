const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var mysql = require("mysql");

const connection = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net",
  user: "b3449eedb4dad1",
  password: "ffdb1a08",
  database: "heroku_3cda4829cc2bb1d",
});
var port = process.env.PORT || 5000;

app.use(express.static("public"));

//Form設定
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/form", urlencodedParser, (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  console.log("name->" + name);
  res.send("こんにちわ!" + name + "さん");
});

// FetchAPI設定
const jsonParser = bodyParser.json();

app.post("/fetch", jsonParser, (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  console.log("name->" + name);
  res.send("こんにちわ!" + name + "さん");
});

connection.query("SELECT * FROM test", (error, results) => {
  res.send("Pokemon No." + result[0].id + "Pokemon Name" + result[0].name);
  console.log(results);
});

app.listen(port, () => {
  console.log("Start server port:5000");
});
