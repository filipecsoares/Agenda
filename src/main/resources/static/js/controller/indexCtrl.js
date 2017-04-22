angular.module("agenda").controller("indexCtrl", function($scope){
	$scope.showUser = false;
	$scope.showHome = true;
	
	var openUser = function() {
		$scope.showUser = true;
		$scope.showHome = false;
		console.log(showUser);
	};
});