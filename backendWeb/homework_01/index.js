// Importing Express
const express = require("express");
var fs = require('fs');
var morgan = require('morgan');
var path = require('path');

// Initializing Express App
const app = express();

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(8090, () => console.log("Server listening on 8090"));