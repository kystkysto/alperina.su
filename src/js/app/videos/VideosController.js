//public/js/app/videos/VideosController.js
angular.module('Alperina.controllers').directive('youtube', function() {
  return {
    scope: { code:'@' },
    template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="http://www.youtube.com/embed/{{code}}" frameborder="0" allowfullscreen></iframe>'
  };
});

;(function() {

    angular.module('Alperina.controllers')
        .controller('VideosController', VideosController);

    function VideosController($rootScope, $routeParams, $location, $sce, Header, $http) {

        var rubric = $routeParams.rubric;

        $http.get('/api/video.json?rubric=' + rubric).then(function(list) {
            var videos = [];
            list.data.forEach(function(video) {
                //console.log(video);
                video.content = video.content.split('/').pop(-1);
                videos.push(video);
            });
            this.videos = videos;
        }.bind(this));

        this.showTags = Header.showTags;

        this.path = $location.path();
        
    }

})();