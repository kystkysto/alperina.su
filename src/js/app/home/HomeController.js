//public/js/app/home/HomeController.js

angular.module('Alperina.controllers')
	.controller('HomeController', HomeController);

function HomeController($rootScope, Header) {

	Header.setQuote('Чуть – чуть литературы,<br/>И музыки немного,<br/>И чертова натура,<br/>И лирика – от Бога');

	var self = this;
}