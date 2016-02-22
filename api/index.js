// Dependencies
var express = require('express');
var router = express.Router();
var app = express();
var authenticate = require('./authenticate'); //Customized config for jwt authentication
var authenticated = require('./authenticated'); // Customized jwt token verification used as a middleware here
var currentUser = require('./currentUser'); // Customized code for verifying the current user when logged in
var hash_password = require('./hashPassword'); // Customized code for password encrypting
var cleanResponses = require('./cleanResponses');

// Models
var User = require('./models/user');


// Routes
router.get('/authenticate', function (req, res) {
	res.send('api/v0/authenticate is working!');
});

router.post('/authenticate', authenticate);

// route middleware to verify a token
router.use(authenticated);

router.get('/me', currentUser);

User.methods(['get','put','post','delete']);

User.before('post', hash_password)
  .before('put', hash_password);

User.after('get', function(req, res, next) {
  res.locals.bundle = cleanResponses.cleanPasswords(res.locals.bundle);
  next();
});



User.register(router, '/users');





module.exports = router;