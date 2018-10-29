
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , fs = require('fs')
  , path = require('path')
  , auth = require('./auth')
  , server_proxy = require('./server_proxy.js');


var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 9000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(app.router);
  app.use(auth);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.post('/cmd', server_proxy.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
