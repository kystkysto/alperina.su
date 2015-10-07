console.log('Starting app');

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

angular.module('admin', [
        'ngRoute',
        'ngSanitize',
        'ngResource',
        'textAngular',
        'ui.bootstrap',
        'ngFileUpload'
    ])

.config(function($routeProvider, $locationProvider, $provide) {

    $provide.decorator('taOptions', function(taRegisterTool, $modal, $delegate) {
        // $delegate is the taOptions we are decorating
        // register the tool with textAngular
        $delegate.toolbar = [
            [
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'p',
                'pre',
                'quote'
            ],
            [
                'bold',
                'italics',
                'underline',
                'strikeThrough',
                'ul',
                'ol'
            ],
            [
                'undo',
                'redo',
                'clear'
            ],
            [
                'justifyLeft',
                'justifyCenter',
                'justifyRight',
                'justifyFull',
                'indent',
                'outdent'
            ],
            [
                'insertLink',
                'insertVideo',
                'html'
            ]
        ];

        taRegisterTool('imageUpload', {
            iconclass: "fa fa-picture-o",
            action: function($deferred) {
                var textAngular = this;
                var savedSelection = rangy.saveSelection();
                var modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/api/photo/overlay.html',
                    size: 'lg',
                    controller: 'PhotosWindowController'
                });

                modalInstance.result.then(function(path) {
                    rangy.restoreSelection(savedSelection);
                    textAngular.$editor().wrapSelection('insertImage', '/img/photos/' + path);
                    $deferred.resolve();
                });
                return false;
            }
        });

        // Now add the button to the default toolbar definition
        // Note: It'll be the last button
        $delegate.toolbar[4].unshift('imageUpload');
        return $delegate;
    });

   $routeProvider
       .when('/', {
           templateUrl: '/api/material/list.html',
           //controller: 'MaterialsController',
           controller: 'MaterialsController',
           controllerAs: 'materials'
       })
       .when('/materials/:rubric', {
           templateUrl: '/api/material/list.html',
           controller: 'MaterialsController',
           //controllerAs: 'materials'
       })
       .when('/materials', {
           templateUrl: '/api/material/list.html',
           controller: 'MaterialsController',
           //controllerAs: 'materials'
       })
       .when('/material/:id', {
           templateUrl: '/api/material/edit.html',
           controller: 'MaterialController',
           //controllerAs: 'material'
       })
       .when('/photos', {
           templateUrl: '/api/photo/list.html',
           controller: 'PhotosController',
           //controllerAs: 'photos'
       })
       .when('/photos/:rubric', {
           templateUrl: '/api/photo/list.html',
           controller: 'PhotosController',
           //controllerAs: 'photo'
       })
       .when('/videos', {
           templateUrl: '/api/video/list.html',
           controller: 'VideosController',
           controllerAs: 'videos'
       })
       .when('/videos/:rubric', {
           templateUrl: '/api/video/list.html',
           controller: 'VideosController',
           controllerAs: 'videos'
       })
       .when('/tags', {
           templateUrl: '/api/tag/list.html',
           controller: 'TagsController',
           controllerAs: 'tags'
       })
       .when('/tags/:id', {
           templateUrl: '/api/tag/edit.html',
           controller: 'TagController',
           controllerAs: 'tag'
       });

       // use the HTML5 History API
       $locationProvider.html5Mode(true);
 });
