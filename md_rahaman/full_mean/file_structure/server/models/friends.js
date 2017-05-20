var mongoose = require('mongoose')

var FriendSchema= new mongoose.Schema({
	first_name: {
		type: String, 
		required: [true, 'First name field cannot be blank'],
		maxlength: [120, 'First name cannot exceed 120 characters']
	},
	last_name: {
		type: String,
		required: [true, 'last name field cannot be blank'],
		maxlength: [120, 'last name cannot exceed 120 characters']
	},
	birthday: {
		type: Date,
		required: [true, 'birthday field cannot be blank']
	}

}, {timestamps: true})

mongoose.model('Friend', FriendSchema)