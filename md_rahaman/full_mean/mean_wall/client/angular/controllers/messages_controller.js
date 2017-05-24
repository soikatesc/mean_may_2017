app.controller('MessagesController', function(MessageFactory, $cookies){
	console.log('Initializing MessagesController')

	var self = this
	self.messages = []
	self.errors = []

	self.index = function(){
		MessageFactory.index(function(res){
			self.messages = res.data
		})
	}

	self.createMessage = function(newMessage){
		self.errors = []
		newMessage.user = $cookies.get('user_id')
		console.log(newMessage)
		MessageFactory.createMessage(newMessage, function(res){
			self.messages = {}
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.errors.push(error)
				}
			}else{
				self.index()
			}
		})
	}

	self.createComment = function(newComment, message_id, index){
		// self.newComment ={}
		// console.log(newComment)
		// console.log(message_id)
		// console.log(index)

		var newComment = newComment[index]
		// newComment._message = message_id
		newComment.user = $cookies.get('user_id')
		// console.log('after:', newComment)

		MessageFactory.createComment(newComment, message_id, function(res){
			self.newComment ={}
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.errors.push(error)
				}
			}else{
				self.index()
			}
		})
	}

	self.addingLike = function(commentId){
		console.log(commentId)
		MessageFactory.addingLike(commentId, function(res){
			console.log(res)
			if(res.data.errors){
				console.log('could not add like, something went wront')
			}
			else{
				self.index()
			}
		})
	}
	self.deleteMessage = function(messageId){
		console.log(messageId)
		MessageFactory.deleteMessage(messageId, function(res){
			if(res.data.errors){
				console.log('Could not delete')
			}else{
				self.index()
			}
		})
	}

	self.deleteComment = function(commentId){
		console.log(commentId)
		MessageFactory.deleteComment(commentId, function(res){
			if(res.data.errors){
				console.log('Could not delete comment')
			}
			else{
				self.index()
			}
		})
	}

})

