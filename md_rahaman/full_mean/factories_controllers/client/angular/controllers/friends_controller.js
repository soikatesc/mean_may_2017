app.controller('FriendsController', function(FriendFactory){
	console.log('initializing FriendsController...')

	var self = this
	self.friends = []

	self.index = function(){
		FriendFactory.index(function(res){
			// console.log(res)
			self.friends = res.data
		})
	}
	self.destroy = function(friend){
		FriendFactory.destroy(friend, function(res){
			self.index()
		})
	}
	self.create = function(newFriend){
		console.log(newFriend)
		self.errors = []
		FriendFactory.create(newFriend, function(res){
			self.newFriend = {}
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.errors.push(error.message)
				}
			}else{
				self.index()
			}
		})
	}

})