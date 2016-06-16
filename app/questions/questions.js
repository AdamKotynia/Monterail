'use strict';

angular.module('myApp.questions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/questions', {
    templateUrl: 'questions/questions.html',
    controller: 'QuestionsCtrl'
  });
}])

.controller('QuestionsCtrl', [function() {

}]);