const express = require('express');
const path = require('path');
var https = require('https');
var http = require('http');
var fs = require('fs'); 

// Get Post Routes
const routes = require('./lib/routes');

const app = express();

const port = process.env.PORT || 443;

const ip = "https://webappalertit.azurewebsites.net";

// 172.31.25.42
// 10.20.6.118
// 192.168.31.134
var httpOptions =  {
 
 key: fs.readFileSync("./ssl/server.key"),
 
 cert: fs.readFileSync("./ssl/server.crt")

}

// To avoid CORS problem. No chrome extesnion needed.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

// use middleware
app.use(express.static(path.join(__dirname, './www')));
app.use('/latlng', routes);
app.use('/latlng/hosp', routes);
app.use('/latlng/check', routes);
app.use('/latlng/insert', routes);
app.use('/latlng/update', routes);

// Catch all other routes request and return it to the index.
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, './www/index.html'))
});


http.createServer(app).listen(port, ip, () => {
  console.log('We are live on ' + port);
});

/*
https.createServer(httpOptions, app).listen(port, ip, () => {
  console.log('We are live on ' + port);
});
*/