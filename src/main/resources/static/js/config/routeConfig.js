angular.module("agenda").config(function($routeProvider) {
	$routeProvider.when('/user', {
		templateUrl: 'view/user.html',
		controller: 'userCtrl'
	});
	
	$routeProvider.when("/userEdit", {
		templateUrl: "view/userEdit.html",
		controller: "userCtrl"
	});
	
	$routeProvider.otherwise({redirectTo: "/"});
});