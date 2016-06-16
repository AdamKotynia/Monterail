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

.controller('QuestionsCtrl', [function() {

}]);