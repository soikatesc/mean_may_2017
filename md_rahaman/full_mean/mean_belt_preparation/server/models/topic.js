var mongoose = require('mongoose')

var TopicSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	title: {
		type: String,
		required: [true, "Title cannot be empty"],
		minlength: [5, 'Your Topic is too short']
	},
	description: {
		type: String,
		required: [true, "Title description cannot be empty"],
		minlength: [5, "Your description is too short"]
	},
	category: {
		type: String,
		required: [true, "Choose a category"]
	},
	answers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref : 'Answer'
	}]
}, { timestamps: true })

mongoose.model('Topic', TopicSchema)
var Topic = mongoose.model('Topic')