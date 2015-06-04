//public/js/app/app.js

;(function() {

	angular.module('Alperina',[
		'ngRoute',
		'ngSanitize',
		'Alperina.controllers',
		'Alperina.services'
	]);

	angular.module('Alperina.controllers',[]);
	angular.module('Alperina.services',[]);
	
	angular.module('Alperina')

		.config(config);

	function config ($routeProvider, $locationProvider) {

		$locationProvider.html5Mode({
			enabled: true
		});

		var routes = {
			home: {
				templateUrl: 'tmpl/home.html',
				controller: 'HomeController',
				controllerAs: 'Home'
			},

			material: {
				templateUrl: 'tmpl/material.html',
				controller: 'MaterialController',
				controllerAs: 'Material'
			},

			materials: {
				templateUrl: 'tmpl/materials.html',
				controller: 'MaterialListController',
				controllerAs: 'MaterialList'
			},

			san: {
				templateUrl: 'tmpl/san.html',
				controller: 'MaterialController',
				controllerAs: 'Material'
			},

			photos: {
				templateUrl: 'tmpl/photos.html',
				controller: 'PhotosController',
				controllerAs: 'Photos'
			},

			videos: {
				templateUrl: 'tmpl/videos.html',
				controller: 'VideosController',
				controllerAs: 'Videos'
			},

			feedback: {
				templateUrl: 'tmpl/feedback.html',
				controller: 'FeedbackController',
				controllerAs: 'Feedback'
			}
		}

		$routeProvider

			.when('/', routes.home)
			.when('/articles/:type/:id', routes.material)
			.when('/articles/:type', routes.materials)
			.when('/club/news', routes.materials)
			.when('/club/photos', routes.photos)
			.when('/san/:type', routes.san)
			.when('/scince/:type', routes.material)
			.when('/photos/:type', routes.photos)
			.when('/videos/:type', routes.videos)
			.when('/feedback', routes.feedback)

			.otherwise({ redirectTo: '/' });
	}

})();