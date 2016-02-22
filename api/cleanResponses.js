// Dependencies
//var encryption = require('./encryption');

// Encrypting password
module.exports.cleanPasswords = function (responses) {
	var cleanResponses = [];
  	if(responses.length>0){
  		for (var i = 0; i < responses.length; i++) {
  			responses[i].password=null;
  			cleanResponses[i] = responses[i]; 
  		}
  	}
  	return cleanResponses;
}