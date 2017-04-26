angular.module("agenda").config(function($routeProvider) {
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
	
	$routeProvider.otherwise({redirectTo: "/"});
});