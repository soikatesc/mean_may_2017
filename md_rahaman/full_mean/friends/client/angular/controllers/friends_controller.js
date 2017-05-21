app.controller('FriendsController', function(FriendFactory, $routeParams){
	console.log('initializing FriendsController...')

	var self = this
	self.friends = []
	self.friend = []

	self.index = function(){
		FriendFactory.index(function(res){
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
	self.show = function(){
		FriendFactory.show($routeParams.id, function(res){
			self.friend = res.data
		})
	}
	self.edit = function(updateFriend){
		FriendFactory.edit(updateFriend,$routeParams.id, function(res){
			//why do i need this index function. It is working without that
			self.index()
		})
	}

})

