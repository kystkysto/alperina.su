//public/js/app/material/SanListController.js

;(function() {

    angular.module('Alperina.controllers')
        .controller('SanListController', SanListController);

    function SanListController($rootScope, $routeParams, $location, Header, $http) {

        var rubric = $routeParams.rubric;

        $http.get('/api/material/new.json?rubric=' + rubric).then(function(list) {

            this.materials = list.data;
        }.bind(this));

        this.showTags = Header.showTags;

        this.path = $location.path();
        
    }

})();