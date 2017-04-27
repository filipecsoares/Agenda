angular.module("agenda").controller("businessEditCtrl", function($scope, businessAPI, businessForm, $location, users){
	$scope.businessForm = businessForm.data;
	$scope.users = users;
	
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