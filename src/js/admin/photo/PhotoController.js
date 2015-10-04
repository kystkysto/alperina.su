angular.module('admin')

    .controller('PhotoController', function($rootScope, $scope, Photo) {
        console.log('PhotoController');
        /*console.log($scope.photo);*/
        $scope.photoChanged = false;

        $scope.choosePhoto = function choosePhoto(path) {
            $rootScope.$emit('photoSelected', path);
        };

        $scope.savePhoto = function savePhoto() {
            Photo.update({id:$scope.photo.id}, {photo: $scope.photo});
            $scope.photoChanged = false;
        };

        $scope.deletePhoto = function savePhoto($index) {
            Photo.delete({id:$scope.photo.id});
            $scope.list.splice($index, 1);
        };

        $scope.$watch(function() {
            return $scope.photo;
        }, checkPhoto, true);

        function checkPhoto(next, prev) {
            if(next !== prev) {
                $scope.photoChanged = true;
            }
        }
    });