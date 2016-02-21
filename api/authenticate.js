// Dependencies

var jwt    = require('jsonwebtoken');
var User = require('./models/user');
var config = require('../server/config');
var encryption = require('./encryption');


// Authentication code

module.exports=function (req, res) {
	User.findOne({email: req.body.email}, function(err, user) {
		if (err) throw err;

	    if (!user) {
	      res.status(403).json({ message: 'Authentication failed. Wrong user or password.[0x001]' });
	    } 
	    else if (user) {
	    	// check if password matches
	    	encryption.comparePassword(req.body.password, user.password, function(err, match){
	    		if (err) throw err;
	    		if (!match) {
        			res.status(403).json({ message: 'Authentication failed. Wrong user or password.[0x011]' });
	      		} else {

			        // if user is found and password is right
			        // create a token
			        var token = jwt.sign(user, config.jwtSecret, {
			          expiresIn: 24*60*60 // expires in 24 hours
			        });

			        // return the information including token as JSON
			        res.status(200).json({
			          message: 'Enjoy your token!',
			          token: token
			        });
		      	} 


	    	})
	    }
    });
}