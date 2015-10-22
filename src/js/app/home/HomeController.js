//public/js/app/home/HomeController.js

angular.module('Alperina.controllers')
	.controller('HomeController', HomeController);

function HomeController($rootScope, $sce, $http, Header) {

    Header.setQuoteRotation();

	var self = this;

    $http.get('/api/main/1').then(function(data) {
        console.log(data.data);
        self.main = data.data;
    });
}