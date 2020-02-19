require("dotenv").config();

const express = require('express');
  
const app = express();

const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");

const helmet = require('helmet');

const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(helmet());
    
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/src/index.html')
});

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/src/contact.html')
});

app.get('/team', function(req, res) {
  res.sendFile(__dirname + '/src/team.html')
});

app.get('/mission', function(req, res) {
  res.sendFile(__dirname + '/src/mission.html')
});

app.get('/portfolio', function(req, res) {
  res.sendFile(__dirname + '/src/portfolio.html')
});

app.listen(port);
