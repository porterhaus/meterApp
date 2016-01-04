(function () {

  var app = angular.module('meterApp', ['ionic']);

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

  app.config(function($stateProvider, $urlRouterProvider) { //$ionicConfigProvider

    $stateProvider

    .state('welcome', {

    })

    .state('login', {

    })

    .state('register', {

    })

    .state('forgot', {

    })

    .state('main', {

    })

    .state('settings', {
      
    });

  });

}());
