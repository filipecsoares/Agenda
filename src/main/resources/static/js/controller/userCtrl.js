angular.module("agenda").controller("userCtrl", function($scope, $location, userAPI) {
	$scope.users = [];
	$scope.saveSuccess = false;
	
	var findUsers = function() {

		userAPI.getUsers().then(function(res) {
			$scope.users = res.data;
		}, function(res) {
			$scope.message = "Problema: " + data;
		});
	};

	$scope.saveUser = function(userForm) {
		userForm.created = new Date();
		
		userAPI.saveUser(userForm).then(function(data) {
			delete $scope.user;
			$scope.userForm = {};
			$scope.saveSuccess = true;
		});
	};
	
	$scope.deleteUser = function(id) {
		userAPI.deleteUser(id).then(function(data) {
			findUsers();
			$location.path("/user");
		});
	};

	$scope.ordenarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	$scope.atualizar = function() {
		$scope.criterioDeOrdenacao = "";
		$scope.criterioDeBusca = "";
		$location.path("/user");
	};
	findUsers();
});