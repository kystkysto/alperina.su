angular.module('admin')

    .controller('PhotosController', function($rootScope, $scope, $http, $routeParams, $timeout, Upload, Photo) {
        console.log('PhotosController');

        $scope.clearPhoto = function clearPhoto() {
            
            $scope.photo = {};
            $scope.photoFile = '';
            $scope.imgClass = 'img-uploader__img';
            $scope.photoChanged = false;
        };

        $scope.selectPhoto = function selectPhoto(photoFile) {
            $scope.photoFile = photoFile;
            $scope.imgClass = 'img-uploader__img_show';
            $scope.progressWidth = {width: 0};
        };

        $scope.clearPhoto();

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
            /*console.log(list);*/
        });

        $scope.$watch(function() {
            return $scope.photo;
        }, checkPhoto, true);

        function checkPhoto(next, prev) {
            if(next !== prev) {
                //$scope.imgClass = 'img-uploader__img_show';
                $scope.photoChanged = true;
            }
        }

        //$scope.photo.test = true;

        $scope.log = '';

        $scope.savePhoto = function () {

            console.log($scope.photoFile);

            if (!$scope.photoFile.$error) {

                var photo = $scope.photo;
                photo.file = $scope.photoFile;
                $scope.clearPhoto();

                Upload.upload({
                    url: '/api/photo/',
                    data: {
                        photo: photo
                    }
                })
                .progress(function (evt) {

                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progressWidth = {width: progressPercentage + '% '};
                    console.log('progress: ' + progressPercentage + '% ');
                })
                .success(function (data, status, headers, config) {
                    $scope.list.push(data);
                });
            }
        };
    });