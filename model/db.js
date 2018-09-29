const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User_Details_Schema = new Schema({
	
	username: String,
	email: String,
	meterId: String,
	walletAddress: String,
	resident_address: String
})

var User_Details = mongoose.model('user_details',User_Details_Schema);

module.exports =  {
	User_Details: User_Details,
};
