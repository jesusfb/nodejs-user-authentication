// Dependencies
var express = require('express');
var router = express.Router();
var app = express();
//var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
// Models
var User = require('./models/user');


// Routes
router.get('/authenticate', function (req, res) {
	res.send('api/v0/authenticate is working!');
});

router.post('/authenticate', require('./authenticate'));

// route middleware to verify a token
router.use(require('./authenticated'));

router.get('/me',require('./currentUser'));

User.methods(['get','put','post','delete']);
User.register(router, '/users');

module.exports = router;