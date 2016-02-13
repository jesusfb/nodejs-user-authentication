var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.send("it's working!");
});

app.listen(40000);
console.log("go to http://localhost:40000");