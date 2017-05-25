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
		console.log(newTopic)
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
		console.log($routeParams.id)
		TopicFactory.show($routeParams.id, function(res){
			self.topic = res.data
		})
	}
})