var express = require('express'),
    http = require('http'),
    fs = require('fs'),
    path    = require('path'),
    dust = require("dustjs-linkedin"),
    dust_helpers = require("dustjs-helpers"),
    cons = require('consolidate'),
    events = require('events'),
    emitter = new events.EventEmitter(),
    Q = require('q'),
    mysql      = require('mysql');

var done = false;

var connection = mysql.createConnection({
 
});
   

var app = express();
app.use(express.bodyParser({
    keepExtensions: true
}));
app.use(express.cookieParser('pdpcookie'));
app.use(express.session());

//app.use(express.statics(ckStaticsPath));

app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + '/templates');

// For logging requests
// app.use(express.logger('dev'));

// this should always be above the wildcard route


// dashboard
app.get('/', function (req, res) {

  res.render('serviceAndFactory', {});

    
});



app.use("/",express.static(__dirname + "/static"));

app.listen(3000);