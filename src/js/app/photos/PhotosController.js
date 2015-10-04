//public/js/app/photos/PhotosController.js

angular.module('Alperina.controllers')
	.controller('PhotosController', PhotosController);

function PhotosController($http) {

    $http.get('/api/photo/?rubric=all').then(function(list) {

        this.photos = list.data;
    }.bind(this));

}