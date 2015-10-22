angular.module('admin')
    .factory('Main', function($resource) {
        return $resource('/api/main/:id.json', null, {
            update: {
                method: 'PUT'
            }
        });
    });