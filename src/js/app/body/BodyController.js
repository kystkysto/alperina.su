//public/js/app/body/BodyController.js

angular.module('Alperina.controllers')
    .controller('BodyController', BodyController);

function BodyController() {

    var left = true;

    this.position = 'menu_colapsed';

    this.expand = function expand(){
        
        if(left) {

            left = false;
            //this.position = {left:'0'};
            this.position = 'menu_expanded';

        } else {

            left = true;
            this.position = 'menu_colapsed';
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