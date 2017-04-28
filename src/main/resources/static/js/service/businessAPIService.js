angular.module("agenda").service("businessAPI", function($http, config) {
	this.getBusinesses = function(){
		return $http.get(config.baseUrl + "/business");
	};
	this.getBusiness = function(businessId){
		return $http.get(config.baseUrl + "/business/" + businessId);
	};
	this.saveBusiness = function(business){
		return $http.post(config.baseUrl + "/business", business);
	};
	this.deleteBusiness = function(businessId){
		return $http.delete(config.baseUrl + "/business/" + businessId);
	};
});