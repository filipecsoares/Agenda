angular.module("agenda").controller("businessEditCtrl", function($scope, businessAPI, businessForm, $location, userAPI){
	$scope.businessForm = businessForm.data;
	$scope.users = [];
	
	var findUsers = function() {

		userAPI.getUsers().then(function(res) {
			$scope.users = res.data;
		}, function(res) {
			$scope.message = "Problema: " + data;
		});
	};
	
	$scope.saveBusiness = function(businessForm) {
		businessAPI.saveBusiness(businessForm).then(function(data) {
			delete $scope.business;
			$scope.businessForm = {};
			$location.path("/businessEdit");
			$scope.saveSuccess = 'Salvo com sucesso';
		});
	};
	findUsers();
});