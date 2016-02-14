// Dependencies
var encryption = require('./encryption');

// Encrypting password
module.exports = function (req, res, next) {
	encryption.cryptPassword(req.body.password, function (err, hashPassword){
		if (err) throw err;
		if (!hashPassword) {
	      	res.status(500).json({ success: false, message: 'Theres no hash for password' });
	    } 
	    else if (hashPassword) {
			req.body.password = hashPassword;
  			next();
		}
	});
}