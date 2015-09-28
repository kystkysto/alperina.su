angular.module('admin')

    .controller('MaterialController', function($scope, $routeParams, Material) {
        
        console.log('MaterialController');
        console.log($routeParams.id);

        var material = {};

        if(!isNaN(parseFloat($routeParams.id))) {

            material = Material.get({ id: $routeParams.id }, function(material) {
                material.published = new Date(material.published);
                console.log(material);
                $scope.material = material;
            });


        }

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