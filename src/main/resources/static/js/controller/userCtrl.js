angular.module("agenda").controller("userCtrl", function($scope, userAPI){
	$scope.users = [];
	
	var findUsers = function() {
		userAPI.getUsers().then(function(data) {
			$scope.users = data;
		}).catch(function(data, status) {
			$scope.message = "Problema: " + data;
		});
	};
	
	$scope.saveUser = function (user) {
		user.created = new Date();
		userAPI.saveUser(user).then(function (data) {
			delete $scope.user;
			$scope.userForm.$setPristine();
			findUsers();
		});
	};
	
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	$scope.atualizar = function () {
		
		findUsers();
	};
	
	if($scope.showUser)
	{
		findUsers();
	}
});