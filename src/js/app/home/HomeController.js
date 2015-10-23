//public/js/app/home/HomeController.js

angular.module('Alperina.controllers')
	.controller('HomeController', HomeController);

function HomeController($rootScope, $sce, $http, Header) {

    Header.showQuotes();

	var self = this;

    $http.get('/api/main/1').then(function(data) {
        self.main = data.data;
    });
}