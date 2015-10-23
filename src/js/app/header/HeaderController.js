//public/js/app/header/HeaderContrller.js

;(function() {

	angular.module('Alperina.controllers')
		.controller('HeaderContrller', HeaderContrller);

	function HeaderContrller($rootScope, $scope, $location, $interval, $http, $timeout, Header) {

		var self = this,
			observers = {
				update: function() {
					self.title = Header.title;
					self.quote = Header.quote;
					self.showTags = Header.showTags;
					self.tags = Header.tags;
					self.quotesShown = Header.quotesShown;
				}
			},
			method = null;/*,
			quotes = [
				{
					id: 1,
					content: '<p>Чуть – чуть литературы,</p><p>И музыки немного,</p><p>И чертова натура,</p><p>И лирика – от Бога</p>'
				},
				{
					id: 2,
					content: '<p>Тест,</p><p>И музыки немного,</p><p>Чуть чуть</p><p>Ещё</p>'
				},
			];*/

		for (method in observers) {
			Header.registerObserverCallback(observers[method]);
		}

		self.path = $location.path();

		$rootScope.$on('$routeChangeSuccess', function () {
			var q = $location.search();
			if(q.hasOwnProperty('tag')) Header.setTags(q.tag);
		});

		$scope.quoteClass = 'quote_show';

		var List = function List(list) {

			var cList = function cList(list) {
				this.position = 0;
				this.list = list || [];
			};

			cList.prototype.next = function next() {

				var pos = this.position,
					ln = this.list.length;

				pos += 1;
				
				if(pos >= ln) pos = 0;
		
				this.position = pos;

				return this.list[pos];
			};

			cList.prototype.first = function first() {
				return this.list[0];
			};

			var ls = new cList(list);


			return ls;
		};

		var setQuoteRotation = function(quotes) {
			var list = List(quotes);

			Header.setQuote(list.first().content);

			$scope.quoteClass = 'quote_show';
			$interval(function() {

		    	$scope.quoteClass = 'quote_hide';
	    	
		    	$timeout(function() {
			    	
		    		var nextContent = list.next().content;

			    	Header.setQuote(nextContent);
			    	$scope.quoteClass = 'quote_show';
			    	
			    	nextQoute = nextContent;
			    }, 2000);
	    	}, 10000);
		};

		 $http.get('/api/quotes/').then(function(data) {
	        //self.main = data.data;
			setQuoteRotation(data.data);
	    });
	}
})();