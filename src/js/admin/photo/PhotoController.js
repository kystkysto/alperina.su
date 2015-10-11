angular.module('admin')

    .controller('PhotoController', function($rootScope, $scope, growl, Photo) {
        console.log('PhotoController');
        /*console.log($scope.photo);*/
        $scope.photoChanged = false;

        $scope.choosePhoto = function choosePhoto(path) {
            $rootScope.$emit('photoSelected', path);
        };

        $scope.savePhoto = function savePhoto() {
            Photo.update({id:$scope.photo.id}, {photo: $scope.photo},
                function(res) {
                    growl.addSuccessMessage('Фото сохранено', {ttl: 2000});
                    $scope.photoChanged = false;
                }, function(res) {
                    growl.addErrorMessage('Произошла ошибка', {ttl: 2000});
                });
        };

        $scope.deletePhoto = function savePhoto($index) {
            Photo.delete({id:$scope.photo.id}, function(res) {
                growl.addSuccessMessage('Фото удалено', {ttl: 2000});
                $scope.list.splice($index, 1);
            }, function(res) {
                growl.addErrorMessage('Произошла ошибка', {ttl: 2000});
            });
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