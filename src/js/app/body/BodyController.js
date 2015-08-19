//public/js/app/body/BodyController.js

angular.module('Alperina.controllers')
    .controller('BodyController', BodyController);

function BodyController() {

    var left = true;

    this.position = {left:'-242.5px'};

    this.expand = function expand(){
        
        if(left) {

            left = false;
            this.position = {left:'0'};

        } else {

            left = true;
            this.position = {left:'-242.5px'};
        }

    };

    this.showMenu = function showMenu() {

            this.expand();
    };

    this.getPosition = function getPosition() {

        if(window.matchMedia("(max-width: 991px) ").matches) {
            return this.position;
        } else {
            return {};
        }
    };

}