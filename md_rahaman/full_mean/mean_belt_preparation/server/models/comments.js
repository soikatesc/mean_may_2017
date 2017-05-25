var mongoose = require('mongoose')


var CommentSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	content: {
		type: String,
		minglength: [3, 'Your comment is too short']
	},
	_answer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Answer'
	}

},{ timestamps: true})

mongoose.model('Comment', CommentSchema)