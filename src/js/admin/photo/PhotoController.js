angular.module('admin')

    .controller('PhotoController', function($scope, Photo) {
        console.log('PhotoController');
        console.log($scope.photo);
        $scope.photoChanged = false;

        $scope.savePhoto = function savePhoto() {
            Photo.update({id:$scope.photo.id}, {photo: $scope.photo});
            $scope.photoChanged = false;
        };

        $scope.deletePhoto = function savePhoto($index) {
            Photo.delete({id:$scope.photo.id});
            delete $scope.list[$index];
        };

        $scope.$watch(function() {
            return $scope.photo;
        }, checkPhoto, true);

        function checkPhoto(next, prev) {
            if(next!==prev) {
                $scope.photoChanged = true;
            }
        }

    });