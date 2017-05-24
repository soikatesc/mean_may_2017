var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')

var UserSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: [true, "First name field cannot be blank"],
	},
	last_name: {
		type: String,
		required: [true, "Last name field cannot be blank"]
	},
	birthday: {
		type: Date,
		required: [true, "birthday field cannot be empty"]
	},
	email: {
		type: String,
		required: [true, "Email cannot be blank"]
	},
	username: {
		type: String,
		required: [true, "User name cannot be blank"]
	},
	password: {
		type: String,
		required: [true, "password canot be blank"]
	}
}, {timestamps: true})

UserSchema.methods.hashPassword = function(password){
	this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

UserSchema.methods.authenticate = function(password){
	console.log(password)
	return bcrypt.compareSync(password, this.password)
}

UserSchema.pre('save', function(callback){
	this.hashPassword(this.password)
	callback()
})

mongoose.model('User', UserSchema)

