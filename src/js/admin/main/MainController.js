angular.module('admin')

    .controller('MainController', function($scope, $routeParams, $location, $http, $log, growl, Main) {
        
        $scope.main = {};

        $log.info('MainController');

        Main.get({ id: 1 }, function(data) {
            console.log(data);
            $scope.main = data;
        });

        $scope.saveMain = function saveMain() {

            var main = $scope.main;
        
            Main.update({id:1}, {main: main},
                function(material) {
                    $scope.main = main;
                    growl.addSuccessMessage('Описание сохранёно', {ttl: 2000});
                }, function(res) {
                    growl.addErrorMessage('Произошла ошибка', {ttl: 2000});
                });
        };
    });