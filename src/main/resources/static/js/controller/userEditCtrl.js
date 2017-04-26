angular.module("agenda").controller("userEditCtrl", function($scope, userAPI, userForm, $location){
	$scope.userForm = userForm.data;
	
	$scope.saveUser = function(userForm) {
		userForm.created = new Date();
		
		userAPI.saveUser(userForm).then(function(data) {
			delete $scope.user;
			$scope.userForm = {};
			$location.path("/userEdit");
			$scope.saveSuccess = 'Salvo com sucesso';
		});
	};
});