const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

//Form設定
const urlencodedParser = bodyParser.urlencoded({extended:false});

app.post('/form', urlencodedParser, (req,res) => {
    console.log(req.body);
    const name = req.body.name;
    console.log('name->' + name);
    res.send('こんにちわ!' + name + 'さん');
});

// FetchAPI設定
const jsonParser = bodyParser.json();

app.post('/fetch', jsonParser, (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    console.log('name->' + name);
    res.send('こんにちわ!' + name + 'さん');
});

app.listen(3000, () => {
    console.log('Start server port:3000');
});