//public/js/app/home/HomeController.js

angular.module('Alperina.controllers')
	.controller('HomeController', HomeController);

function HomeController($rootScope, Header) {
    console.log(Header.setQuoteRotation);
    Header.setQuoteRotation();

	var self = this;
}