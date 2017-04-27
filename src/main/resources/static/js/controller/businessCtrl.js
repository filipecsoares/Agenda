angular.module("agenda").controller("businessCtrl", function($scope, $location, businessAPI) {
	$scope.businesses = [];
	
	var findBusinesses = function() {

		businessAPI.getBusinesses().then(function(res) {
			$scope.businesses = res.data;
		}, function(res) {
			$scope.message = "Problema: " + data;
		});
	};

	$scope.saveBusiness = function(businessForm) {
		businessAPI.saveBusiness(businessForm).then(function(data) {
			delete $scope.business;
			$scope.businessForm = {};
			$scope.saveSuccess = 'Salvo com sucesso';
		});
	};
	
	$scope.deleteBusiness = function(id) {
		businessAPI.deleteBusiness(id).then(function(data) {
			findBusinesses();
			$location.path("/business");
		});
	};

	$scope.ordenarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	$scope.atualizar = function() {
		$scope.criterioDeOrdenacao = "";
		$scope.criterioDeBusca = "";
		$location.path("/business");
	};
	findBusinesses();
});