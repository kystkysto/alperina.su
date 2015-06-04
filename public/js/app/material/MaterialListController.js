//public/js/app/material/MaterialListController.js

;(function() {

	angular.module('Alperina.controllers')
		.controller('MaterialListController', MaterialListController);

	function MaterialListController($rootScope, $location, Header) {

		var self = this,
			materials = [
				{
					id: 1,
					title: '"Миллион голосов" Полины Гагариной',
					date: '11.03.2015',
					text: 'В этом году объявление участника песенного конкурса "Евровидение" от России было беспрецедентным. Кандидатуру назвали не в результате народного голосования, не как итог телевизионного конкурса, и даже не просто как решение канала - эффектно в программе "Время", как бывало в предыдущие годы...',
					tags: [
						{
							alias: 'Шоу-бизнес',
							name: 'show_business',
							id: 5
						}
					]
				},
				{
					id: 2,
					title: 'НТВ запускает шоу "Все будет хорошо!" с Эвелиной Бледанс',
					date: '09.03.2015',
					text: 'На канале НТВ с 10 марта ежедневно по будням в 18:00 будет выходить новое ток-шоу "Все будет хорошо!". Его девиз - мир не без добрых людей. О том...',
					tags: [
						{
							alias: 'Шоу-бизнес',
							name: 'show_business',
							id: 5
						},
						{
							alias: 'Актеры',
							name: 'actors',
							id: 1
						}
					]
				},
				{
					id: 3,
					title: 'Козловский снова споет в Большом. (Интервью с Данилой Козловским)',
					date: '09.03.2015',
					text: 'В прокат выходит фильм "ДухLess 2" - продолжение одного из самых успешных российских фильмов. Первый, снятый по одноименной книге Сергея Минаева, стал в 2012 году не просто фильмом-открытия Московского международного кинофестиваля, но и самой кассовой...',
					tags: [
						{
							alias: 'Шоу-бизнес',
							name: 'show_business',
							id: 5
						},
						{
							alias: 'Актеры',
							name: 'actors',
							id: 1
						}
					]
				}
			];
		
		self.materials = materials;

		self.showTags = Header.showTags;

		self.path = $location.path();
		
	}

})();