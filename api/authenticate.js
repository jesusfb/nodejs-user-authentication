var jwt    = require('jsonwebtoken');
var User = require('./models/user');
var config = require('../server/config');


module.exports=function (req, res) {
	User.findOne({email: req.body.email}, function(err, user) {
		if (err) throw err;

	    if (!user) {
	      res.json({ success: false, message: 'Authentication failed. User not found.' });
	    } 
	    else if (user) {
	    	// check if password matches
      		if (user.password != req.body.password) {
        		res.status(404).json({ success: false, message: 'Authentication failed. Wrong password.' });
      		} else {

		        // if user is found and password is right
		        // create a token
		        var token = jwt.sign(user, config.jwtSecret, {
		          expiresIn: 24*60*60 // expires in 24 hours
		        });

		        // return the information including token as JSON
		        res.status(200).json({
		          success: true,
		          message: 'Enjoy your token!',
		          token: token
		        });
	      	}   

    }

  });
}