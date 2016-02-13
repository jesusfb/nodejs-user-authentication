// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
	email: {type:String, required:true},
	password: String,
	type: {type:String, required:true}
},
{strict:false}
);


// Return model
module.exports = restful.model('Users', userSchema);