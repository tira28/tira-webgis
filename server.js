var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

var app = express();

app.use(morgan('dev'));
var jsonParser = bodyParser.json();
var urlEncodedParser = bodyParser.urlencoded({ extended:false });

app.use(express.static(path.join(__dirname + '/web-gis-app')));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + '/web-gis-app'+ '/index.html'));
});

var listener = app.listen(3000, function(){
  console.log('App is running on port: ' + listener.address().port );
});
