app.factory('FriendFactory', function($http){
	var factory = {}

	factory.index = function(callback){
		$http.get('/friends').then(callback)
	}
	factory.destroy = function(friend, callback){
		$http.delete('/friends/'+friend._id).then(callback)
	}
	factory.create = function(newFriend, callback){
		console.log(newFriend)
		$http.post('/friends', newFriend).then(callback)
	}
	return factory
})