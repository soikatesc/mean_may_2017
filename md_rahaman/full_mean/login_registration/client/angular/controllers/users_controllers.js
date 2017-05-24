app.controller('UsersController', function(UserFactory, $cookies, $location){
	console.log('Initializing UsersController...')
	var self = this;
	self.registration_errors = [];
	self.current_user = {}
	self.login_errors = []

	self.session = function(){
		var state = UserFactory.session()
		console.log(state)
		if(!state){
			$location.url('/')
		}
	}

	self.logout = function(){
		$cookies.remove('user_id')
		$location.url('/')
	}

	self.login = function(loginUser){
		self.login_errors = []
		UserFactory.login(loginUser, function(res){
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.login_errors.push(error.message)
				}
			}else{
				$cookies.put('user_id', res.data._id)
				$location.url('/dashboard')
			}
		})
	}

	self.create = function(newUser){
		self.registration_errors =[]
		console.log('newUser: ', newUser)
		UserFactory.create(newUser, function(res){
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.registration_errors.push(error.message)
				}
			}else{
				//save the user into session
				var user_id = res.data._id
				$cookies.put('user_id', user_id)
				$location.url('/dashboard')
				//redirect to next part of our app
			}
		})
	}
})