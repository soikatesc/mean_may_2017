var mongoose = require('mongoose')
var Message = mongoose.model('Message')
// populate('comments').
module.exports = {
	index: function(req, res){
		console.log('hitting message.index route')
		Message.find({}).populate('user').populate('comments').populate({
			path: 'comments',
			model: 'Comment',
			populate: {
				path: 'user',
				model: 'User'
			}

		}).sort().exec(function(err, messages){
			if(err){
				return res.json(err)
			}
			console.log(messages)
			return res.json(messages)
		})
	},

	create: function(req, res){
		console.log(req.body)
		console.log('hitting creating message route')
		Message.create(req.body, function(err, message){
			if(err){
				return res.json(err)
			}
			return res.json(message)
		})
	},
	destroy: function(req, res){
		Message.findByIdAndRemove(req.params.id, function(err, message){
			if(err){
				return res.json(err)
			}
			return res.json(message)
		})
	}
}
