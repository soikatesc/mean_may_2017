var mongoose = require('mongoose')
var Comment = mongoose.model('Comment')
var Message = mongoose.model('Message')

module.exports = {
	create: function(req, res){
		console.log('hitting creating comment route')
		Message.findById(req.params.id).exec(function(err, message){
			if(err){
				return res.json(err)
			}
			if(!message){
				return res.json({
					"errors": "404 - Message not found"
				})
			}
			var comment = new Comment(req.body)
			comment._message = message._id
			comment.save(function(err, comment){
				if(err){
					return res.json(err)
				}
				message.comments.push(comment._id)
				message.save(function(err, message){
					if(err){
						return res.json(err)
					}
					return res.json(message)
				})
			})
		})
	},
	addingLikes: function(req, res){
		console.log('hitting like route')
		Comment.findById(req.params.id).exec(function(err, comment){
			if(err){
				return res.json(err)
			}
			if(!comment){
				return res.json({
					"errors": "404 - comment not found"
				})
			}
			comment.likes++
			comment.save(function(err, comment){
				if(err){
					return res.json(err)
				}
				return res.json(comment)
			})
		})
	},
	destroy: function(req, res){
		Comment.findByIdAndRemove(req.params.id, function(err, comment){
			if(err){
				return res.json(err)
			}
			else{
				return res.json(comment)
			}
		})
	}
}


