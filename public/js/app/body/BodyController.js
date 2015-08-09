//public/js/app/body/BodyController.js

angular.module('Alperina.controllers')
    .controller('BodyController', BodyController);

function BodyController() {

    var left = true;

    this.expand = function expand(){
        
        console.log(left);

        
        if(left) {

            left = false;
            return {left:'-242.5px'};

        } else {

            left = true;
            return {};
        }

    };

    this.showMenu = function showMenu() {

        if(window.matchMedia("(max-width: 991px) ").matches) {
            
            return this.expand();
        }
    };

}