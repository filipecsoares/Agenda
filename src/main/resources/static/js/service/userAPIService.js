angular.module("agenda").service("userAPI", function($http, config) {
	this.getUsers = function(){
		return $http.get(config.baseUrl + "/user");
	};
	this.getUser = function(userId){
		return $http.get(config.baseUrl + "/user/" + userId);
	};
	this.saveUser = function(user){
		return $http.post(config.baseUrl + "/user", user);
	};
	this.deleteUser = function(userId){
		return $http.delete(config.baseUrl + "/user/" + userId);
	};
});