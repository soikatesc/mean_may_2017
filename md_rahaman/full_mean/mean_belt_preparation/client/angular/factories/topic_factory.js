app.factory('TopicFactory', function($http, $cookies){
	var factory = {}

	factory.index = function(callback){
		$http.get('/topics').then(callback)
	}

	factory.createTopic = function(newTopic, callback){
		console.log(newTopic)
		$http.post('/topics', newTopic).then(callback)
	}

	factory.show = function(id, callback){
		$http.get('/topics/show/' + id).then(callback)
	}

	factory.createAnswer = function(newAnswer,id, callback){
		// console.log(newAnswer)
		// console.log(id)
		$http.post('/answers/' + id, newAnswer).then(callback)
	}

	factory.createComment = function(newComment, id, callback){
		// console.log(newComment)
		// console.log(id)
		$http.post('/comments/' + id, newComment).then(callback)
	}

	factory.likes = function(answersId, callback){
		$http.put('/answers/likes/' + answersId, { user: $cookies.get('user_id')}).then(callback)
	}

	factory.dislikes = function(answersId, callback){
		$http.put('/answers/dislikes/' + answersId, { user: $cookies.get('user_id')}).then(callback)
	}

	return factory

})