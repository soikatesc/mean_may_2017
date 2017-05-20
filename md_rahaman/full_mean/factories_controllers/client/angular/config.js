var app = angular.module('app', ['ngRoute'])
console.log('loading angular config file...')

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/all_friends.html',
		controller: 'FriendsController as FC'
	})
	// .when('/show/:id'){
	// 	templateUrl: 'partials/friend_show',
	// 	controller: 'FriendsController as FC'
	// }
	.when('/new', {
		templateUrl: 'partials/new_friend.html',
		controller: 'FriendsController as FC'
	})
	.otherwise({
		redirectTo: '/'
	})
})