angular.module("agenda").controller("userCtrl", function($scope, userAPI) {
	$scope.users = [];

	var findUsers = function() {

		userAPI.getUsers().then(function(res) {
			$scope.users = res.data;
		}, function(res) {
			$scope.message = "Problema: " + data;
		});
	};

	$scope.saveUser = function(user) {
		user.created = new Date();
		userAPI.saveUser(user).then(function(data) {
			delete $scope.user;
			$scope.userForm.$setPristine();
			findUsers();
		});
	};
	
	$scope.deleteUser = function(id) {
		userAPI.deleteUser(id).then(function(data) {
			findUsers();
		});
	};

	$scope.ordenarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	$scope.atualizar = function() {

		findUsers();
	};
	findUsers();
});