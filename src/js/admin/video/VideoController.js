angular.module('admin')

    .controller('VideoController', function($rootScope, $scope, $http, $routeParams, $timeout, Video) {
        console.log('VideoController');
                /*console.log($scope.video);*/
        $scope.videoChanged = false;

        $scope.saveVideo = function saveVideo() {
            Video.update({id:$scope.video.id}, {video: $scope.video});
            $scope.videoChanged = false;
        };

        $scope.deleteVideo = function saveVideo($index) {
            Video.delete({id:$scope.video.id});
            $scope.list.splice($index, 1);
        };

        $scope.$watch(function() {
            return $scope.video;
        }, checkVideo, true);

        function checkVideo(next, prev) {
            if(next !== prev) {
                $scope.videoChanged = true;
            }
        }
    });