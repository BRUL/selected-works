angular.module('sw', ['ui.bootstrap'])
  .controller('MainCtrl', ['$scope', 'projects', '$anchorScroll', '$location', function ($scope, projects, $anchorScroll, $location) {
    $scope.projects = projects;

    $scope.viewProject = function (project) {
      $scope.currentProject = project;

      var easeDurationInMiliseconds = 750;
      $('html, body').animate({
        scrollTop: angular.element('.current-project').offset().top
      }, easeDurationInMiliseconds);
    };

    // slideshow
    $scope.interval = 50000000;
  }]);
