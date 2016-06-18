var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compression = require('compression')
var http = require("http");

// const port = process.env.VCAP_APP_PORT || 3000;
const port = process.env.PORT || 3000;

//301 Redirect
app.use(function(req,res,next){
        var host = req.get('host');
        if(/^www\./.test(host)){
            host = host.substring(4, host.length);
            res.writeHead(301, {'Location':req.protocol + '://' + host + req.originalUrl,
                'Expires': new Date().toGMTString()});
            res.end();
        } else {
            next();
        }
    });

app.use(compression({threshold: 0}));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.render('index');
});    

app.listen(port);
console.log('listening at:', port);
