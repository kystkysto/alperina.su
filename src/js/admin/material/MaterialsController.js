angular.module('admin')

    .controller('MaterialsController', function($scope, $routeParams, Material) {
        console.log('MaterialsController');

        var rubric = $routeParams.rubric;

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

        Material.query({
            rubric: rubric,
            after: 'infinity'
        }, function(list) {
            paginate(list);
        });

        function paginate(list) {
            $scope.fullList = list;
            var length = Math.ceil($scope.fullList.length / 10),
                i = 1;
            $scope.pages = Array.apply(null, Array(length)).map(function() { return i++; });
            $scope.list = $scope.fullList.slice(0,11);

            console.log($scope.list);
        }
    });