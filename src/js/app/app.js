//public/js/app/app.js

;(function() {

	angular.module('Alperina',[
		'ngRoute',
		'ngSanitize',
		'ngAnimate',
		'youtube-embed',
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
				controller: 'SanListController',
				controllerAs: 'MaterialList'
			},
			
			scince: {
				templateUrl: 'tmpl/san.html',
/*				controller: 'MaterialController',
				controllerAs: 'Material'*/
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
		};

		$routeProvider

			.when('/', routes.home)
			.when('/articles/:rubric/:id', routes.material)
			.when('/articles/:rubric', routes.materials)
			.when('/club/materials/:rubric', routes.materials)
			.when('/club/materials/:rubric/:id', routes.material)
			.when('/club/photos/:rubric', routes.photos)
			.when('/san/:rubric', routes.san)
			.when('/scince/:rubric', routes.scince)
			.when('/photos/:rubric', routes.photos)
			.when('/videos/:rubric', routes.videos)
			.when('/feedback', routes.feedback)

			.otherwise({ redirectTo: '/' });
	}

})();