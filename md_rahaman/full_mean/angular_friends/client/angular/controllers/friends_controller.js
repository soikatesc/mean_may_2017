app.controller('FriendsController', function(FriendFactory){
	console.log('initializing FriendsController...')

	var self = this
	self.friends = []

	self.index = function(){
		FriendFactory.index(function(res){
			console.log(res)
			self.friends = res.data
		})
	}

})