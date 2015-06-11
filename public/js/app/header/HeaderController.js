//public/js/app/header/HeaderContrller.js

;(function() {

	angular.module('Alperina.controllers')
		.controller('HeaderContrller', HeaderContrller);

	function HeaderContrller($rootScope, $location, Header) {

		var self = this,
			observers = {
				updateTitle: function() {
					self.title = Header.title;
				},
				updatequote: function() {
					self.quote = Header.quote;
				},
				updateShowTags: function() {
					self.showTags = Header.showTags;
				},
				updateTags: function() {
					self.tags = Header.tags;
				}
			},
			method = null;

		for (method in observers) {
			Header.registerObserverCallback(observers[method]);
		}

		self.path = $location.path();

		$rootScope.$on('$routeChangeSuccess', function () {
			var q = $location.search();
			if(q.hasOwnProperty('tag')) Header.setTags(q.tag);
		});

	}

})();