angular.module('admin')

    .controller('PhotosWindowController', function($rootScope, $scope, $modalInstance) {
        $scope.closeWindow = function closeWindow() {
            $modalInstance.dismiss('cancel');
        };

        $rootScope.$on('photoSelected', function(e, path) {
            $modalInstance.close(path);
        });
    });