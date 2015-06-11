//public/js/app/manu/MenuController.js

;(function() {

	angular.module('Alperina.controllers')
		.controller('MenuController',MenuController);

	function MenuController ($rootScope, $location, Header) {

		var self = this,
			item = null,
			path = $location.path();

		self.titles = {
				'/articles/persons': 'Персоны',
				'/articles/reviews': 'Рецензии',
				'/articles/travel': 'Путешествия',
				'/club/news': 'Клуб одесситов - Новости',
				'/club/photos': 'Клуб одесситов - Фото',
				'/san/poetry': 'Стихи',
				'/san/songs': 'Песни',
				'/san/stories': 'Рассказы',
				'/san/thoughts': 'Мысли',
				'/scince/synopsis': 'Автореферат',
				'/san/thoughts': 'Мысли',
				'/scince/thesis': 'Диссертация',
				'/photos/self': 'Фото - САНолюбование',
				'/photos/other': 'Фото - САН техника',
				'/videos/self': 'Видео - САНолюбование',
				'/videos/other': 'Видео - КлипС.А.',
				'/feedback': 'Обратная связь'
			};

		updateHeader();

		self.items = {
			articles: false,
			club: false,
			san: false,
			scince: false,
			photos: false,
			videos: false
		};

		for(item in self.items) {
			if(path.indexOf(item) > -1) expandSubMenu(item);
		}

		self.expandSubMenu = expandSubMenu;
		self.selectedItem = selectedItem;

		function expandSubMenu(item) {
			
			var i = null;

			for(i in self.items) {

				if(i === item) {
					self.items[i] = !self.items[i];
				} else {
					self.items[i] = false;
				}
			}
		}

		function selectedItem(item) {
			var path = $location.path();

			if(path.indexOf(item) > -1) {
				return true;
			}

			return false;
		}

		function updateHeader() {
			var q = $location.search(),
				path = $location.path();

			Header.setShowTags((path == '/articles/persons'))
				.setTitle(self.titles[path]);
			if(!q.hasOwnProperty('tag')) Header.setTags();
		}

		$rootScope.$on('$routeChangeSuccess', function () {
			updateHeader();
		});
	}

})();