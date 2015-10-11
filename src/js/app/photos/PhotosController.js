//public/js/app/photos/PhotosController.js

angular.module('Alperina.controllers')
	.controller('PhotosController', PhotosController);

function PhotosController($http, $routeParams) {

    var rubric = $routeParams.rubric,
        selectedPhoto = null;

    this.deselectPhoto = function deselectPhoto() {
        
        this.photos[selectedPhoto].selected = false;
        selectedPhoto = null;
        this.overlay = false;
    };

    this.selectPhoto = function selectPhoto($index) {

        console.log($index);

        selectedPhoto = $index;
        this.photos[selectedPhoto].selected = true;

        this.overlay = true;
    };

    $http.get('/api/photo/?rubric=' + rubric).then(function(list) {

        this.photos = list.data;
    }.bind(this));

}