console.log('strting app');
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
angular.module('admin', [
        'ngRoute',
        'ngSanitize',
        'ngResource',
        'ui.bootstrap',
        'textAngular',
        'ngFileUpload'
    ])

.config(function($routeProvider, $locationProvider) {

       $routeProvider
           .when('/', {
               templateUrl: '/api/material/list.html',
               //controller: 'MaterialsController',
               controller: 'MaterialsController',
               controllerAs: 'materials'
           })
           .when('/materials', {
               templateUrl: '/api/material/list.html',
               controller: 'MaterialsController',
               //controllerAs: 'materials'
           })
           .when('/materials/:id', {
               templateUrl: '/api/material/edit.html',
               controller: 'MaterialController',
               //controllerAs: 'material'
           })
           .when('/photos', {
               templateUrl: '/api/photo/list.html',
               controller: 'PhotosController',
               //controllerAs: 'photos'
           })
           .when('/photos/:rubric', {
               templateUrl: '/api/photo/list.html',
               controller: 'PhotosController',
               //controllerAs: 'photo'
           })
           .when('/videos', {
               templateUrl: '/api/video/list.html',
               controller: 'VideosController',
               controllerAs: 'videos'
           })
           .when('/videos/:id', {
               templateUrl: '/api/video/edit.html',
               controller: 'VideoController',
               controllerAs: 'video'
           })
           .when('/tags', {
               templateUrl: '/api/tag/list.html',
               controller: 'TagsController',
               controllerAs: 'tags'
           })
           .when('/tags/:id', {
               templateUrl: '/api/tag/edit.html',
               controller: 'TagController',
               controllerAs: 'tag'
           });

       // use the HTML5 History API
       $locationProvider.html5Mode(true);
 });
