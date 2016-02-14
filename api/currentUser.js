// Query the current user

module.exports=function (req, res) {
	if(req.decoded){
		var current = req.decoded._doc;
		delete current.password;

		res.status(200).json(current);	
	}
}