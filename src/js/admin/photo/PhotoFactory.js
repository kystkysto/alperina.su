angular.module('admin')
    .factory('Photo', function($resource) {
        return $resource('/api/photo/:id.json', null, {
            update: {
                method: 'PUT'
            }
        });
    });