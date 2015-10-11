angular.module('admin')

    .controller('VideosController', function($rootScope, $scope, $http, $routeParams, $timeout, Video) {
       console.log('VideosController');

        $scope.fullList = [];

        $scope.pages = [];

        $scope.changePage = function changePage(page) {
            if(page === 1) {

                $scope.list = $scope.fullList.slice(0, 11);
            } else {

                var tok = page * 10,
                    from = tok - 10 + 1,
                    to = tok + 1;
                $scope.list = $scope.fullList.slice(from, to);
            }
        };

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


        Video.query({rubric: $scope.rubric}, function(list) {
            paginate(list);
        });

        function paginate(list) {
            $scope.fullList = list;
            var length = Math.ceil($scope.fullList.length / 10),
                i = 1;
            $scope.pages = Array.apply(null, Array(length)).map(function() { return i++; });
            $scope.list = $scope.fullList.slice(0,11);
        }

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