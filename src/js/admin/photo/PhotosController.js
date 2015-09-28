angular.module('admin')

    .controller('PhotosController', function($scope, $http, $routeParams, Photo) {
        console.log('PhotosController');

        if($routeParams.rubric) {
            $scope.rubric = $routeParams.rubric;
        }

        $scope.list = {};

        $scope.photoRubrics = [
            {
                name: 'Свои',
                value: 'self'
            },
            {
                name: 'Другие',
                value: 'other'
            },
            {
                name: 'Клуб',
                value: 'club'
            },
            {
                name: 'Материалы',
                value: 'material'
            },

        ];

        $scope.list = Photo.query({rubric: $scope.rubric}, function(list) {
            console.log(list);
        });
    });