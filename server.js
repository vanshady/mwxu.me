var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compression = require('compression');
var path = require('path');

const port = process.env.PORT || 3000;

app.use(compression({ threshold: 0 }));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log('listening at:', port);
