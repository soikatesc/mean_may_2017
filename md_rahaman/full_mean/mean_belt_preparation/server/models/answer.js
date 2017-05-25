var mongoose = require('mongoose')


var AnswerSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	_topic: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Topic'
	},
	content: {
		type: String,
		required: [true, "Answer cannot be empty"],
		minlength: [5, 'Your answer is too short']
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	likes: {
		type: Number,
		default: 0
	},
	dislikes: {
		type: Number,
		default: 0
	}
}, { timestamps: true })

mongoose.model('Answer', AnswerSchema)

