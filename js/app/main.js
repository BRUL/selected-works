angular.module('sw', ['ui.bootstrap', 'ngSanitize', 'ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/:projectId?', {
        controller: 'MainCtrl',
        templateUrl: 'js/app/views/project.html'
      });
  }])

  .controller('MainCtrl', ['$scope', 'projects', '$anchorScroll', '$location', '$timeout', '$route', '$rootScope',
    function ($scope, projects, $anchorScroll, $location, $timeout, $route, $rootScope) {
    $scope.projects = projects;

    function setCurrentProject(projectId) {
      $scope.currentProject = projects[projectId];
    }

    if ($route.current.params.projectId) {
      setCurrentProject($route.current.params.projectId);
    }
    
    $rootScope.$on('$locationChangeSuccess', function () {
      $timeout(function() {
        var projectId = $route.current.params.projectId;
        setCurrentProject(projectId);

        var easeDurationInMiliseconds = 0;
        $('html, body').animate({
          scrollTop: angular.element('.current-project').offset().top
        }, easeDurationInMiliseconds);
      }, 0);
    });
  }]);
