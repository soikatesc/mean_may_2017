var mongoose = require('mongoose')
var Answer = mongoose.model('Answer')
var Topic = mongoose.model('Topic')
var User = mongoose.model('User')

module.exports = {
	index: function(req, res){
		Answer.find({}, function(err, answers){
			if(err){
				return res.json(err)
			}
			return res.json(answers)
		})
	},
	create: function(req, res){
		Topic.findById(req.params.id).exec(function(err, topic){
			if(err){
				return res.json(err)
			}
			if(!topic){
				return res.json({
					"errors:": "404 - Topic not found"
				})
			}
			var answer = new Answer(req.body)
			answer._topic = topic._id
			answer.save(function(err, answer){
				if(err){
					return res.json(err)
				}
				topic.answers.push(answer._id)
				console.log(answer._id)
				topic.save(function(err, topic){
					if(err){
						return res.json(err)
					}					
				})
				User.findById(req.body.user, function(err, user){
					if(err){
						return res.json(err)
					}
					user.answers.push(answer._id)
					user.save(function(err, user){
						if(err){
							return res.json(err)
						}
					})
				})
				return res.json(answer)
			})
		})
	},
	likes: function(req, res){
		Answer.findById(req.params.id).exec(function(err, answer){
			if(err){
				return res.json(err)
			}
			if(!answer){
				return res.json({
					"errors": "404 - answer not found"
				})
			}
			answer.likes++
			answer.save(function(err, answer){
				if(err){
					return res.json(err)
				}
				return res.json(answer)
			})

		})
	},
	dislikes: function(req, res){
		Answer.findById(req.params.id).exec(function(err, answer){
			if(err){
				return res.json(err)
			}
			if(!answer){
				return res.json({
					"errors": "404 - answer not found"
				})
			}
			answer.dislikes++
			answer.save(function(err, answer){
				if(err){
					return res.json(err)
				}
				return res.json(answer)
			})

		})
	},
	destroy: function(req, res){
		Answer.findByIdAndRemove(req.params.id, function(err, answer){
			if(err){
				return res.json(err)
			}
			Topic.update(
				// { "comments": req.params.id },
				{ "$pull": { "answers": req.params.id } },
				function(err, res) {
					if (err) {
						return res.json(err);
					}
				}
			);


			return res.json(answer)
		})
	}
}


