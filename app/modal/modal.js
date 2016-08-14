"use strict";
angular.module('myApp.modal', ['ui.router', 'ngAnimate', 'ui.bootstrap']).

controller('ModalCtrl', ['$scope', '$rootScope', 'userDataService', '$uibModal', function($scope, $rootScope,  userDataService, $uibModal){
    $scope.questions = userDataService.questions;
    $scope.users = userDataService.users;

    $scope.open = function(user) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: './modal/modal.html',
            controller: 'ModalInstanceCtrl',
            backdrop: true
        });

        $rootScope.user = user;
    };

}]).

controller('ModalInstanceCtrl',['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    }
}]);