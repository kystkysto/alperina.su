angular.module('admin')

    .controller('MaterialsController', function($scope, $routeParams, Material) {
        console.log('MaterialsController');

        var rubric = $routeParams.rubric;
        $scope.list = Material.query({rubric: rubric}, function(list) {
            console.log(list);
        });
    });