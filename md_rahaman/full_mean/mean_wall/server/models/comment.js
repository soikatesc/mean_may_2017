var mongoose = require('mongoose')

//comment table
var CommentSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	comments: {
		type: String,
		minglength: [3, 'Your comment is too short']
	},
	likes: {
		type: Number,
		default: 0
	},
	_message: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Message'
	}
},{ timestamps: true})

mongoose.model('Comment', CommentSchema)
var Comment = mongoose.model('Comment')