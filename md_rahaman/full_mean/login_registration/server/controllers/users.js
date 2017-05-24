var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {
	index: function(req, res){
		User.find({}, function(err, users){
			if(err){
				return res.json(err)
			}
			return res.json(users)
		})
	},
	create: function(req, res){
		User.create(req.body, function(err, user){
			if(err){
				return res.json(err)
			}
			return res.json(user)
		})
	},
	login: function(req, res){
		//lookup the email
		User.findOne({email: req.body.email}, function(err, user){
			if(err){
				return res.json(err)
			}
			//check for null, and authenticate the password
			if(user && user.authenticate(req.body.password)){
				return res.json(user)
			}

			return res.json({
				"errors": {
					"password": {
						"message": "Invalid credentials."
					}
				}
			})
		})
	}
}