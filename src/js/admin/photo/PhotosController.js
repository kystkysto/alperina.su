angular.module('admin')

    .controller('PhotosController', function($rootScope, $scope, $http, $routeParams, $timeout, growl, Upload, Photo) {
        console.log('PhotosController');

        $scope.fullList = [];

        $scope.pages = [];

        $scope.init = function init(rubric) {
            
            Photo.query({rubric: rubric}, function(list) {
                paginate(list);
            });
        };

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
                value: 'photos'
            },
            {
                name: 'Материалы',
                value: 'material'
            },

        ];

        $scope.list = Photo.query({rubric: $scope.rubric}, function(list) {
            /*console.log(list);*/
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
                }).then(function (resp) {
                
                    $scope.list.unshift(resp.data);
                    growl.addSuccessMessage('Фото добавлено', {ttl: 2000});
                }, function (resp) {
                    growl.addErrorMessage('Произошла ошибка', {ttl: 2000});
                }, function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progressWidth = {width: progressPercentage + '% '};
                    console.log('progress: ' + progressPercentage + '% ');
                });
            }
        };
    });