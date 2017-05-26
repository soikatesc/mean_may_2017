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
		count:{
			type: Number,
			default: 0
		},
		users: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}]
	},
	dislikes: {
		count:{
			type: Number,
			default: 0
		},
		users: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}]
	}
}, { timestamps: true })

mongoose.model('Answer', AnswerSchema)

