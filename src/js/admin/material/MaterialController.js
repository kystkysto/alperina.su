angular.module('admin')

    .controller('MaterialController', function($scope, $routeParams, $location, $log, growl, Material) {
        
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
                        $location.path('/admin/materials');
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
                        material.published = new Date(material.published);
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
                id: 1,
                name: 'Звёзды',
                alias: 'celebrity'
            },
            {
                id: 2,
                name: 'Актёры',
                alias: 'actors'
            },
            {
                id: 3,
                name: 'Режисёры',
                alias: 'Directors'
            }
        ];



/*        $scope.orightml = '';
        $scope.htmlcontent = $scope.orightml;
        $scope.disabled = false;*/
    });