//public/js/app/header/Header.js

;(function() {

	angular.module('Alperina.controllers')
		.service('Header', Header);

	function Header() {

		var self = this,
			observerCallbacks = [],
			tags = [
				{
					alias: 'Актеры',
					name: 'actors',
					id: 1
				},
				{
					alias: 'Режиссеры',
					name: 'directors',
					id: 2
				},
				{
					alias: 'Продюсеры',
					name: 'producers',
					id: 3
				},
				{
					alias: 'Писатели',
					name: 'writers',
					id: 4
				},
				{
					alias: 'Шоу-бизнес',
					name: 'show_business',
					id: 5
				},
				{
					alias: 'Русский Голливуд',
					name: 'russian_hollywood',
					id: 6
				}
			],
			i = null;

		self.title = '';
		self.tags = tags;

		self.showTags = false;


		self.setTitle = setTitle;
		self.setQuote = setQuote;
		self.setShowTags = setShowTags;
		self.setTags = setTags;
		self.registerObserverCallback = registerObserverCallback;
		self.notifyObservers = notifyObservers;

		function setTitle(title) {
			self.title = title;
			self.quote = null;
			return self.notifyObservers();
		}

		function setQuote(quote) {
			self.quote = quote;
			self.title = null;
			console.log(self.quote);
			return self.notifyObservers();
		}

		function setShowTags(set) {
			self.showTags = set;
			return self.notifyObservers();
		}

		function setTags(tag) {
			self.tags = tag ?
				(function(tag) {
					for(i in tags) {
						if(tags[i].name == tag) {
							return [tags[i]];
						}
					}
				})(tag) :
				tags;
			return self.notifyObservers();
		}

		//register an observer
		function registerObserverCallback(callback){
			observerCallbacks.push(callback);
		};

		//call this when you know 'foo' has been changed
		function notifyObservers(){
			angular.forEach(observerCallbacks, function(callback){
				callback();
			});

			return self;
		};
	}

})();