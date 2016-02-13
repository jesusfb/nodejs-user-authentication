// Dependencies
var express = require('express');
var	mongoose = require('mongoose');
var	bodyParser = require('body-parser');
//jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens;

// MongoDB
mongoose.connect('mongodb://localhost/user_service_dev');



// Express
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// Routes
app.use('/api/v0', require('../api'));


// Start server
app.listen(40000);
console.log("go to http://localhost:40000");