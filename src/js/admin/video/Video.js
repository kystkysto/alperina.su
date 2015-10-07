angular.module('admin')
    .factory('Video', function($resource) {
        return $resource('/api/video/:id.json', null, {
            update: {
                method: 'PUT'
            }
        });
    });