//public/js/app/material/MaterialListController.js

;(function() {

	angular.module('Alperina.controllers')
		.controller('MaterialListController', MaterialListController);

	function MaterialListController($scope, $rootScope, $routeParams, $location, Header, $http) {

		var rubric = $routeParams.rubric,
			tag = null,
			params = {},
			after = 0,
			getMaterials = function getMaterials(after) {

				if(parseInt(after) === after) {
					params.after = after;
				}

				$http.get('/api/material.json', {params: params}).then(function(list) {

					if(list.data.length >= 5) {

						this.showLoadMore = true;
					} else {
						this.showLoadMore = false;
					}
					[].push.apply(this.materials, list.data);
				}.bind(this));
			},
			loadMore = function loadMore() {

				after += 5;
				getMaterials.call(this, after);
			};

		$scope.$on('$routeUpdate', function(){
			tag = $location.search().tag;
			params.tag = tag;
			getMaterials.call(this);
		}.bind(this));

		params.rubric = rubric;

		if(rubric === 'persons') {
			
			tag = $location.search().tag;
			params.tag = tag;
		}

		this.materials = [];

		this.showLoadMore = false;

		this.showTags = Header.showTags;

		this.path = $location.path();

		this.loadMore = loadMore;
		
		getMaterials.call(this);
	}

})();