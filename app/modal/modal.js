"use strict";
angular.module('myApp.modal', ['ui.router']).

config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('modal', {
            url: '/modal',
            templateUrl: 'modal/modal.html',
            controller: 'ModalCtrl'
        });
    }]).

controller('ModalCtrl', ['$scope', 'userDataService', function($scope, userDataService){
    $scope.questions = userDataService.questions;
    $scope.users = userDataService.users;
}]);