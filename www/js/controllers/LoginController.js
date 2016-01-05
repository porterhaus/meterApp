(function(){

  var app = angular.module('meterApp');

  app.controller('LoginController', function($scope, $rootScope, $state, $ionicModal) {
    console.log("Login.");

    $scope.data = {};

    $ionicModal.fromTemplateUrl('templates/forgot.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal){
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
  });

}());
