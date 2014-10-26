angular.module('sw', ['ui.bootstrap', 'ngSanitize'])
  .controller('MainCtrl', ['$scope', 'projects', '$anchorScroll', '$location', '$timeout', function ($scope, projects, $anchorScroll, $location, $timeout) {
    $scope.projects = projects;

    $scope.viewProject = function (project) {
      $scope.currentProject = project;

      $timeout(function() {
        var easeDurationInMiliseconds = 0;
        $('html, body').animate({
          scrollTop: angular.element('.current-project').offset().top
        }, easeDurationInMiliseconds);
      }, 0);
    };

  }]);
