angular.module('admin')

    .controller('QuotesController', function($rootScope, $scope, $http, $routeParams, $timeout, Quote) {
       console.log('QuotesController');

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

        $scope.clearQuote = function() {
            $scope.quote = {};
        };

        $scope.clearQuote();

        $scope.list = {};

        Quote.query({rubric: $scope.rubric}, function(list) {
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
            return $scope.quote;
        }, checkQuote, true);

        function checkQuote(next, prev) {
            if(next !== prev) {
                //$scope.imgClass = 'img-uploader__img_show';
                $scope.quoteChanged = true;
            }
        }

        //$scope.quote.test = true;

        $scope.log = '';

        $scope.saveQuote = function () {
            var quote = $scope.quote;
            Quote.save({quote: quote}, function(quote) {
                $scope.list.unshift(quote);
            });
        };
    });