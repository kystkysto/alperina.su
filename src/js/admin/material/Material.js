angular.module('admin')
    .factory('Material', function($resource) {
        return $resource('/api/material/:id.json', null, {
            update: {
                method: 'PUT'
            }
        });
    });