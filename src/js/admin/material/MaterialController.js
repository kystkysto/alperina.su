angular.module('admin')

    .controller('MaterialController', function($scope, $routeParams, $log, Material) {
        
        $log.info('MaterialController');

        $scope.showPhotosWindow = false;

        var material = {};
        $scope.file = '';
        //$scope.materialChanged = false;

        if(!isNaN(parseFloat($routeParams.id))) {

            material = Material.get({ id: $routeParams.id }, function(material) {
                material.published = new Date(material.published);
                $scope.material = material;
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

        $scope.saveMaterial = function saveMaterial() {

            var material = $scope.material;

            material.tags = $scope.selectedTags;

            if($scope.material.id) {

                Material.update({id:$scope.material.id}, {material: material}, function(material) {
                    material.published = new Date(material.published);
                    $scope.material = material;
                });
            } else {
                Material.save({material: material}, function(material) {
                    material.published = new Date(material.published);
                    $scope.material = material;
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
                name: 'Новости',
                value: 'news'
            }
        ];

        $scope.materialTags = [
            {
                name: 'Звёзды',
                alias: 'celebrity'
            },
            {
                name: 'Актёры',
                alias: 'actors'
            },
            {
                name: 'Режисёры',
                alias: 'Directors'
            }
        ];



/*        $scope.orightml = '';
        $scope.htmlcontent = $scope.orightml;
        $scope.disabled = false;*/
    });