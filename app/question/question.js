'use strict';

angular.module('myApp.question', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('/question', {
    url: '/question/?{foo}',
    params: {
        foo: null
    },
    templateUrl: 'question/question.html',
    controller: 'QuestionCtrl'
  });
}])

.controller('QuestionCtrl', ['$scope', 'userDataService', '$stateParams', function($scope, userDataService, $stateParams) {
    $scope.questions = userDataService.questions;
    $scope.users = userDataService.users;

    $scope.foo = $stateParams.foo;

    $scope.upvote = function(post) {
        $scope.questions[0].votes++;
        console.log($scope.foo);
    };

    $scope.downvote = function(post) {
        $scope.questions[0].votes--;
    };
}]);