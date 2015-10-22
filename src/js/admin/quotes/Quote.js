angular.module('admin')
    .factory('Quote', function($resource) {
        return $resource('/api/quotes/:id.json', null, {
            update: {
                method: 'PUT'
            }
        });
    });