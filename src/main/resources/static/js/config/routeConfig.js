angular.module("agenda").config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'view/home.html',
		controller: 'indexCtrl'
	});
	
	$routeProvider.when('/user', {
		templateUrl: 'view/user.html',
		controller: 'userCtrl'
	});
	
	$routeProvider.when("/userEdit", {
		templateUrl: "view/userEdit.html",
		controller: "userCtrl"
	});
	
	$routeProvider.when("/userEdit/:id", {
		templateUrl: "view/userEdit.html",
		controller: "userEditCtrl",
		resolve: {
			userForm: function (userAPI, $route) {
				return userAPI.getUser($route.current.params.id);
			}
		}
	});
	
	$routeProvider.when('/business', {
		templateUrl: 'view/business.html',
		controller: 'businessCtrl'
	});
	
	$routeProvider.when("/businessEdit", {
		templateUrl: "view/businessEdit.html",
		controller: "businessCtrl"
	});
	
	$routeProvider.when("/businessEdit/:id", {
		templateUrl: "view/businessEdit.html",
		controller: "businessEditCtrl",
		resolve: {
			userForm: function (businessAPI, $route) {
				return businessAPI.getUser($route.current.params.id);
			},
			users: function(userAPI) {
				return userAPI.getUsers();
			}
		}
	});
	
	$routeProvider.otherwise({redirectTo: "/"});
});