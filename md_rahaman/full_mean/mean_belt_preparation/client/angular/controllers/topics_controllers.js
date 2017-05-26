app.controller('TopicController', function(TopicFactory,$cookies, $location, $routeParams){
	console.log('Initializing TopicController...')

	var self = this
	self.topics = []
	self.errors = []
	self.topic = []

	self.index = function(){
		TopicFactory.index(function(res){
			// console.log(res)
			self.topics = res.data
		})
	}

	self.createTopic = function(newTopic){
		// console.log(newTopic)
		self.errors = []
		newTopic.user = $cookies.get('user_id')
		TopicFactory.createTopic(newTopic, function(res){
			self.topics = {}
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

	self.show = function(){
		TopicFactory.show($routeParams.id, function(res){
			self.topic = res.data
			console.log(res)
		})
	}

	self.createAnswer = function(newAnswer, id){

		newAnswer.user = $cookies.get('user_id')
		// console.log(newAnswer)
		TopicFactory.createAnswer(newAnswer, id, function(res){
			self.newAnswer = {}
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.errors.push(error)
				}
			}else{
				self.show()
			}
		})
	}

	self.createComment = function(newComment, id, index){
		// console.log(newComment)
		// console.log(id)
		// console.log(index)
		self.newComment = {}
		var newComment_m = {}
		newComment_m.content = newComment.content[index]
		newComment_m.user = $cookies.get('user_id')
		console.log(newComment_m)
		newComment.user = $cookies.get('user_id')
		TopicFactory.createComment(newComment_m, id, function(res){
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.errors.push(error)
				}
			}else{
				self.show()
			}
		})
	}

	self.likes = function(answerId){
		console.log(answerId)
		TopicFactory.likes(answerId, function(res){
			console.log(res)
			if(res.data.errors){
				console.log('could not add like, something went wront')
			}
			else{
				self.show()
			}
		})
	}
	self.dislikes = function(answerId){
		console.log(answerId)
		TopicFactory.dislikes(answerId, function(res){
			console.log(res)
			if(res.data.errors){
				console.log('could not add dislike, something went wront')
			}
			else{
				self.show()
			}
		})
	}
})


