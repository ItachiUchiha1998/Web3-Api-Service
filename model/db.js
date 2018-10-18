const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User_Details_Schema = new Schema({
	
	username: String,
	email: String,
	meterId: String,
	walletAddress: String,
	resident_address: String
})

module.exports =  {
	User_Details: User_Details,
};
