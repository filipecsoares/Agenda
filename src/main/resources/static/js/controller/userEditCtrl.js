angular.module("agenda").controller("userEditCtrl", function($scope, userAPI, userForm){
	$scope.saveSuccess = false;
	$scope.userForm = userForm.data;
	
	$scope.saveUser = function(userForm) {
		userForm.created = new Date();
		
		userAPI.saveUser(userForm).then(function(data) {
			delete $scope.user;
			$scope.userForm = {};
			$scope.saveSuccess = true;
		});
	};
});