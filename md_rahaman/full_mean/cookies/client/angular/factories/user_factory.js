app.factory('UserFactory', function($http, $cookies){
	var factory = {}

	factory.create = function(newUser, callback){
		$http.post('/users', newUser).then(callback)
	}
	factory.session = function(){
		return $cookies.get('user_id')
	}
	factory.login = function(loginUser, callback){
		$http.post('/sessions', loginUser).then(callback)
	}

	return factory;
})