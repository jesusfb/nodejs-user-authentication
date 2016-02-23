// Dependencies
//var encryption = require('./encryption');

// Cleaning Functions
module.exports.cleanPasswords = function (responses) {
	if(Array.isArray(responses)===true){
		var cleanResponses = [];
  		if(responses.length>0){
  			for (var i = 0; i < responses.length; i++) {
  				responses[i].password=undefined;
  				cleanResponses[i] = responses[i]; 
  			}
  		}
  	}
  	else{
  		var cleanResponses = [];
  		responses.password=undefined;
  		var cleanResponses = responses; 
  	}
	return cleanResponses;
};