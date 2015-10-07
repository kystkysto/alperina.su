//public/js/app/photos/PhotosController.js

angular.module('Alperina.controllers')
	.controller('PhotosController', PhotosController);

function PhotosController($http, $routeParams) {

    var rubric = $routeParams.rubric;

    $http.get('/api/photo/?rubric=' + rubric).then(function(list) {

        this.photos = list.data;
    }.bind(this));

}