angular.module("agenda").controller("businessCtrl", function($scope, $location, businessAPI, userAPI) {
	$scope.businesses = [];
	$scope.users = [];
	
	var findUsers = function() {

		userAPI.getUsers().then(function(res) {
			$scope.users = res.data;
		}, function(res) {
			$scope.message = "Problema: " + data;
		});
	};
	
	var findBusinesses = function() {

		businessAPI.getBusinesses().then(function(res) {
			$scope.businesses = res.data;
		}, function(res) {
			$scope.message = "Problema: " + data;
		});
	};
	
	$scope.deleteBusiness = function(id) {
		businessAPI.deleteBusiness(id).then(function(data) {
			findBusinesses();
			$location.path("/business");
		});
	};
	
	$scope.addBusiness = function() {
		findUsers();
	}

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