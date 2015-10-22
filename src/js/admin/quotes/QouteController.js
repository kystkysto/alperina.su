angular.module('admin')

    .controller('QuoteController', function($rootScope, $scope, $http, $routeParams, $timeout, Quote) {
        console.log('QuoteController');
                /*console.log($scope.quote);*/
        $scope.quoteChanged = false;

        $scope.saveQuote = function saveQuote() {
            Quote.update({id:$scope.quote.id}, {quote: $scope.quote});
            $scope.quoteChanged = false;
        };

        $scope.deleteQuote = function saveQuote($index) {
            Quote.delete({id:$scope.quote.id});
            $scope.list.splice($index, 1);
        };

        $scope.$watch(function() {
            return $scope.quote;
        }, checkQuote, true);

        function checkQuote(next, prev) {
            if(next !== prev) {
                $scope.quoteChanged = true;
            }
        }
    });