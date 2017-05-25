var app = angular.module('app', ['ngRoute', 'ngCookies'])

console.log('loading config file....')

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/registration_user.html',
		controller: 'UsersController as UC'
	})
	.when('/login', {
		templateUrl: 'partials/login_user.html',
		controller: 'UsersController as UC'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'UsersController as UC'

	})
	.when('/userProfile/:id', {
		templateUrl: 'partials/user_profile.html',
		controller: 'UsersController as UC'
	})
	.when('/topic/:id', {
		templateUrl: 'partials/topic.html',
		controller: 'TopicController as TC'
	})
	.otherwise({
		redirectTo: '/'
	})
})