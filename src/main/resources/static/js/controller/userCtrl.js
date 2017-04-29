angular.module("agenda").controller("userCtrl", function($scope, $location, userAPI) {
	$scope.users = [];
	$scope.messageErro = "";
	
	var findUsers = function() {

		userAPI.getUsers().then(function(res) {
			$scope.users = res.data;
		}, function(res) {
			$scope.messageErro = "Erro ao listar usuários";
		});
	};

	$scope.saveUser = function(userForm) {
		userForm.created = new Date();
		
		userAPI.saveUser(userForm).then(function(data) {
			delete $scope.user;
			$scope.userForm = {};
			$scope.saveSuccess = 'Salvo com sucesso';
		});
	};
	
	$scope.deleteUser = function(id) {
		userAPI.deleteUser(id).then(function(data) {
			findUsers();
			$scope.messageErro = "";
			$location.path("/user");
		}, function(data){
			$scope.messageErro = "Erro ao excluir. O usuário está sendo utilizado.";
		});
	};

	$scope.ordenarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	$scope.atualizar = function() {
		$scope.criterioDeOrdenacao = "";
		$scope.criterioDeBusca = "";
		$scope.messageErro = "";
		$location.path("/user");
	};
	findUsers();
});