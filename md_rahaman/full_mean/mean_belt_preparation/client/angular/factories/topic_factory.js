app.factory('TopicFactory', function($http, $cookies){
	var factory = {}

	factory.index = function(callback){
		$http.get('/topics').then(callback)
	}

	factory.createTopic = function(newTopic, callback){
		$http.post('/topics', newTopic).then(callback)
	}

	factory.show = function(id, callback){
		// $http.get('/topics/show/' + id).then(callback)
		console.log(id)
	}

	return factory

})