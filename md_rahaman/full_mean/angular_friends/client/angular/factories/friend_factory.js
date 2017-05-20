app.factory('FriendFactory', function($http){
	var factory = {}

	factory.index = function(callback){
		$http.get('/friends').then(callback)
	}
	return factory
})