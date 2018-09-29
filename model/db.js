const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User_Details_Schema = new Schema({
	
	username: String,
	email: String,
	meterId: String,
	walletAddress: String,
	resident_address: String
})

var Meter_Details_Schema = new Schema({
	
	meterId: String,
	walletAddress: String,
	water_left: Number
})

var User_Details = mongoose.model('user_details',User_Details_Schema);
var Meter_Details = mongoose.model('meter_details',Meter_Details_Schema);

module.exports =  {
	User_Details: User_Details,
	Meter_Details: Meter_Details
};
