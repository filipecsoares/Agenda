angular.module("agenda").service("userAPI", function($http) {
	this.getUsers = function(){
		return $http.get("localhost:8080/user");
	};
	this.saveUser = function(user){
		return $http.post("localhost:8080/user", user);
	};
});