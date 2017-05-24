var mongoose = require('mongoose')


//message table
var MessageSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	content: {
		type: String,
		minlength: [3, 'Your message is too short']
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, { timestamps: true})

mongoose.model('Message', MessageSchema)
var Message = mongoose.model('Message')