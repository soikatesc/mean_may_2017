var mongoose = require('mongoose')
var Topic = mongoose.model('Topic')
var User = mongoose.model('User')

module.exports = {
	index: function(req, res){
		console.log('hitting topics index route')
		Topic.find({}).populate('user').populate({
			path: 'answers',
			model: 'Answer',
			populate: {
				path: 'user',
				model: 'User'
			}, 
			populate: {
				path: 'comments',
				model: 'Comment',
				populate: {
					path: 'user',
					model: 'User'
				}
			}
		}).sort().exec(function(err, topics){
			if(err){
				return res.json(err)
			}
			return res.json(topics)
		})
	},

	create: function(req, res){
		console.log(req.body)
		Topic.create(req.body, function(err, topic){
			if(err){
				return res.json(err)
			}
			User.findById(req.body.user, function(err, user){
				if(err){
					return res.json(err)
				}
				user.topics.push(topic._id)
				user.save(function(err, user){
					if(err){
						return res.json(err)
					}
					return res.json(topic)
				})
			})			
		})
	},

	destroy: function(req, res){
		Topic.findByIdAndRemove(req.params.id, function(err, topic){
			if(err){
				return res.json(err)
			}
			
			return res.json(topic)
		})
	},

	show: function(req, res){
		Topic.findById(req.params.id).populate('user').populate({
			path: 'answers',
			model: 'Answer',
			populate: {
				path: 'user',
				model: 'User'
			}, 
			populate: {
				path: 'comments',
				model: 'Comment',
				populate: {
					path: 'user',
					model: 'User'
				}
			}
		}).exec(function(err, topic){
			if(err){
				return res.json(err)
			}
			if(!topic){
				return res.json({
					'errors': '404 - Topic not found!'
				})
			}
			return res.json(topic)
		})
	}
}