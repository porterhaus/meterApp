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

  app.config(function($stateProvider, $urlRouterProvider) { 

    $stateProvider

    .state('welcome', {
      url: '/welcome',
      templateUrl: 'templates/welcome.html',
      controller: 'WelcomeController'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController'
    })

    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterController'
    })

    .state('forgot', {
      url: '/forgot',
      templateUrl: 'templates/forgot.html',
      controller: 'ForgotController'
    })

    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'MainController'
    })

    .state('settings', {
      url: '/settings',
      templateUrl: 'templates/settings.html',
      controller: 'SettingsController'
    });

    $urlRouterProvider.otherwise('/welcome');
  });

  app.run(function($rootScope, $ionicLoading, $window) {

    $rootScope.showLoading = function(text) {
      $rootScope.loading = $ionicLoading.show({
        template: text ? text : 'Loading...',
        animation: 'fade-up',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
    };

    $rootScope.hideLoading = function() {
      $ionicLoading.hide();
    };

    $rootScope.notify = function(text) {
      $rootScope.showLoading(text);
      $window.setTimeout(function() {
        $rootScope.hide();
      }, 1999);
    };

  });

}());
