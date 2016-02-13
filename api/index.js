// Dependencies
var express = require('express');
var router = express.Router();


// Routes
router.get('/users', function (req, res) {
	res.send('api/v0/users is working!');
});


module.exports = router;