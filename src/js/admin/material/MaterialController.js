angular.module('admin')

.directive("csDateToIso", function () {

    var linkFunction = function (scope, element, attrs, ngModelCtrl) {

        ngModelCtrl.$parsers.push(function (datepickerValue) {
            return moment(datepickerValue).format("YYYY-MM-DD");
        });
    };
    

    return {
        restrict: "A",
        require: "ngModel",
        link: linkFunction
    };
})

    .controller('MaterialController', function($scope, $routeParams, $location, $log, growl, Material) {
        
        $scope.material = {};

        $log.info('MaterialController');

        $scope.showPhotosWindow = false;
        $scope.selectedTags = [];

        var material = {};
        $scope.file = '';
        //$scope.materialChanged = false;

        if(!isNaN(parseFloat($routeParams.id))) {

            material = Material.get({ id: $routeParams.id }, function(data) {
                data.material.published = new Date(data.material.published);
                $scope.selectedTags = data.tags;
                $scope.material = data.material;
            });
        } else {
            $scope.material.published = new Date();
        }

        /*var modalInstance = $modal.open({
            animation: true,
            templateUrl: '/api/photo/overlay.html',
            controller: 'PhotosWindowController',
            size: 'lg'
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
        */
        $scope.deleteMaterial = function deleteMaterial() {
            Material.delete({id:$scope.material.id}, function(res) {
                    growl.addSuccessMessage('Материал удалён', {ttl: 2000});

                    $scope.material.id = null;
                    setTimeout(function() {
                        $location.path('/materials');
                    }, 1000);
                }, function(res) {
                    growl.addErrorMessage('Ошибка при удалении', {ttl: 2000});
                });

        };

        $scope.saveMaterial = function saveMaterial() {

            var material = $scope.material;
            
            if(material.rubric === 'persons') {

                material.tags = $scope.selectedTags;
            } else {
                $scope.selectedTags = [];
            }

            if($scope.material.id) {

                Material.update({id:$scope.material.id}, {material: material},
                    function(material) {
                        material.published = new Date(material.published);//new Date(material.published);
                        $scope.material = material;
                        growl.addSuccessMessage('Материал сохранён', {ttl: 2000});
                    }, function(res) {
                        growl.addErrorMessage('Произошла ошибка', {ttl: 2000});
                    });
            } else {

                Material.save({material: material}, function(material) {
                    material.published = new Date(material.published);
                    $scope.material = material;
                    $location.path('/material/' + material.id);
                    growl.addSuccessMessage('Материал добавлен', {ttl: 2000});
                }, function(res) {
                    growl.addErrorMessage('Произошла ошибка', {ttl: 2000});
                });
            }
            //$scope.materialChanged = false;
        };


/*        $scope.$watch(function() {
            return $scope.material;
        }, checkMaterial, true);

        function checkMaterial(next, prev) {
            if(next!==prev) {
                $scope.materialChanged = true;
            }
        }*/

        $scope.materialRubrics = [
            {
                name: 'Персоны',
                value: 'persons'
            },
            {
                name: 'Рецензии',
                value: 'reviews'
            },
            {
                name: 'Путешечтвия',
                value: 'travel'
            },
            {
                name: 'Новости Клуба',
                value: 'news'
            },
            {
                name: 'Стихи',
                value: 'poetry'
            },
            {
                name: 'Песни',
                value: 'songs'
            },
            {
                name: 'Рассказы',
                value: 'stories'
            },
            {
                name: 'Мысли',
                value: 'thoughts'
            }
        ];

        $scope.materialTags = [
          {
            "id": 1,
            "name": "Звёзды",
            "created_at": "2015-09-27T10:00:25.642Z",
            "updated_at": "2015-09-28T19:59:55.681Z",
            "alias": "celebrity"
          },
          {
            "id": 2,
            "name": "Режисеры",
            "created_at": "2015-10-04T17:19:17.065Z",
            "updated_at": "2015-10-04T17:19:17.065Z",
            "alias": "directors"
          },
          {
            "id": 3,
            "name": "Актёры",
            "created_at": "2015-10-04T17:19:35.249Z",
            "updated_at": "2015-10-04T17:19:35.249Z",
            "alias": "actors"
          },
          {
            "id": 4,
            "name": "Продюсеры",
            "created_at": "2015-10-04T17:20:21.887Z",
            "updated_at": "2015-10-04T17:20:21.887Z",
            "alias": "producers"
          },
          {
            "id": 5,
            "name": "Писатели",
            "created_at": "2015-10-04T17:20:35.006Z",
            "updated_at": "2015-10-04T17:20:35.006Z",
            "alias": "writers"
          },
          {
            "id": 6,
            "name": "Шоу-бизнес",
            "created_at": "2015-10-04T17:20:51.705Z",
            "updated_at": "2015-10-04T17:20:51.705Z",
            "alias": "show_business"
          }
        ];



/*        $scope.orightml = '';
        $scope.htmlcontent = $scope.orightml;
        $scope.disabled = false;*/
    });