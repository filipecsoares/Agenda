angular.module("agenda").service("userAPI", function($http) {
	this.getUsers = function(){
		return $http.get("http://localhost:8080/user");
	};
	this.saveUser = function(user){
		return $http.post("http://localhost:8080/user", user);
	};
	this.deleteUser = function(userId){
		return $http.delete("http://localhost:8080/user/" + userId);
	};
});