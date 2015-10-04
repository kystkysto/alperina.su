angular.module('admin')

    .controller('MaterialsController', function($scope, Material) {
        console.log('MaterialsController');

        $scope.list = Material.query({rubric: $scope.rubric}, function(list) {
            console.log(list);
        });
    });