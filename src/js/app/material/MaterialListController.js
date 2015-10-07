//public/js/app/material/MaterialListController.js

;(function() {

	angular.module('Alperina.controllers')
		.controller('MaterialListController', MaterialListController);

	function MaterialListController($rootScope, $routeParams, $location, Header, $http) {

		var rubric = $routeParams.rubric;

		$http.get('/api/material.json?rubric=' + rubric).then(function(list) {

	    	this.materials = list.data;
		}.bind(this));

		this.showTags = Header.showTags;

		this.path = $location.path();
		
	}

})();