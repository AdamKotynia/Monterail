'use strict';

angular.module('myApp.questions', ['ui.router']).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('questions', {
        url: '/questions',
        templateUrl: 'questions/questions.html',
        controller: 'QuestionsCtrl'
      });
}])

.controller('QuestionsCtrl', ['$scope', 'userDataService', '$window', '$state',  function($scope, userDataService, $window, $state) {
    $scope.questions = userDataService.questions;
    $scope.users = userDataService.users;

    $scope.limit = 4;
    $scope.go = function(question) {
        $state.go('/question', {foo: question});
    };
    
    angular.element($window).bind('resize', function () {
        //console.log($window.innerWidth);
        if ($window.innerWidth >= 992) {
            $scope.limit = 4;
            $scope.$apply();
        }
        else {
            $scope.limit = 1;
            $scope.$apply();
        }

    });

}]);