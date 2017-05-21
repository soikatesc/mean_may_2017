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
	factory.show = function(id, callback){
		$http.get('/friends/' + id).then(callback)
	}
	factory.edit = function(updateFriend, id, callback){
		$http.put('/friends/'+id, updateFriend).then(callback)
	}
	return factory
})