var express = require("express");
var bodyParser = require('body-parser');
var expressValidator = require("express-valiidator");
var randomString = require("randomstring");
var db = require("./dbconnect");
var User = require("./models/user");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressValidator());

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,April 9, 2019,
    secure: true,
 
 
})
