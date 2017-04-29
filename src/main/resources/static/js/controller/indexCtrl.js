angular.module("agenda").controller("indexCtrl", function($scope, $location){
	$scope.welcome = "Bem-vindo!";
	
	$scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});