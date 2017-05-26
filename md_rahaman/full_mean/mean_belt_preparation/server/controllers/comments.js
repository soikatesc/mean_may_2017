var mongoose = require('mongoose')
var Answer = mongoose.model('Answer')
var Topic = mongoose.model('Topic')
var Comment = mongoose.model('Comment')
var User = mongoose.model('User')

module.exports = {
	create: function(req, res){
		console.log('hitting creating comment route')
		console.log(req.params.id)
		Answer.findById(req.params.id).exec(function(err, answer){
			if(err){
				return res.json(err)
			}
			if(!answer){
				return res.json({
					"errors": "404 - Answer not found"
				})
			}
			var comment = new Comment(req.body)
			comment._answer = answer._id
			comment.save(function(err, comment){
				if(err){
					return res.json(err)
				}
				answer.comments.push(comment._id)
				answer.save(function(err, answer){
					if(err){
						return res.json(err)
					}
					User.findById(req.body.user, function(err, user){
						if(err){
							return res.json(err)
						}
						user.comments.push(comment._id)
						user.save(function(err, user){
							if(err){
								return res.json(err)
							}
							return res.json(comment)
						})
					})
				})
			})
		})
	},
	destroy: function(req, res){
		Comment.findByIdAndRemove(req.params.id, function(err, comment){
			if(err){
				return res.json(err)
			}
			//deleting from the answer array
			Answer.update(
				// { "comments": req.params.id },
				{ "$pull": { "comments": req.params.id } },
				function(err, res) {
					if (err) {
						return res.json(err);
					}
				}
			);

			return res.json(comment)
		})
	}
}