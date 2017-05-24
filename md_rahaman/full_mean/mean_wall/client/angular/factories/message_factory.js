app.factory('MessageFactory', function($http){
	var factory = {}
	
	factory.index = function(callback){
		$http.get('/messages').then(callback)
	}

	factory.createMessage = function(newMessage, callback){
		$http.post('/messages', newMessage).then(callback)
	}

	factory.createComment = function(newComment, message_id, callback){
		// console.log(newComment)
		// console.log(messages_id)
		$http.post('/messages/' + message_id, newComment).then(callback)
	}

	factory.addingLike = function(commentId, callback){
		$http.put('/comments/' + commentId).then(callback)
	}

	factory.deleteMessage = function(messageId){
		$http.delete('/messages/' + messageId).then(callback)
	}

	factory.deleteComment = function(commentId, callback){
		$http.delete('/comments/' + commentId).then(callback)
	}

	return factory
})