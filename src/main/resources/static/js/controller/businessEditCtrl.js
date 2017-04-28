angular.module("agenda").controller("businessEditCtrl", function($scope, businessAPI, businessForm, $location, users){
	if(businessForm != null){
		$scope.businessForm = businessForm.data;
	}
	$scope.users = users.data;
	
	$scope.saveBusiness = function(businessForm) {
		businessAPI.saveBusiness(businessForm).then(function(data) {
			delete $scope.business;
			$scope.businessForm = {};
			$scope.saveSuccess = 'Salvo com sucesso';
		});
	};
});