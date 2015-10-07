angular.module('admin')

    .controller('VideosController', function($rootScope, $scope, $http, $routeParams, $timeout, Video) {
       console.log('VideosController');

        if($routeParams.rubric) {
            $scope.rubric = $routeParams.rubric;
        }

        $scope.clearVideo = function() {
            $scope.video = {};
        };

        $scope.clearVideo();

        $scope.list = {};

        $scope.videoRubrics = [
            {
                name: 'Свои',
                value: 'self'
            },
            {
                name: 'Другие',
                value: 'other'
            },

        ];


        $scope.list = Video.query({rubric: $scope.rubric}, function(list) {
            /*console.log(list);*/
        });

        $scope.$watch(function() {
            return $scope.video;
        }, checkVideo, true);

        function checkVideo(next, prev) {
            if(next !== prev) {
                //$scope.imgClass = 'img-uploader__img_show';
                $scope.videoChanged = true;
            }
        }

        //$scope.video.test = true;

        $scope.log = '';

        $scope.saveVideo = function () {
            var video = $scope.video;
            Video.save({video: video}, function(video) {
                $scope.list.unshift(video);
            });
        };
    });