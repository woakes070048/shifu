// APP 1
// This app is used when the user is logged in
//
angular
  .module('shifuProfile', [
    'lbServices',
    'ui.router',
    'ui.bootstrap',
    'angularFileUpload'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        templateUrl: 'views/user.html',
        controller: 'ProfileController'
      })

      .state('restaurant', {
        url: '',
        templateUrl: 'views/application.html',
        controller: 'RestaurantController'
      });

    $urlRouterProvider.otherwise('/');
  }]);

// APP 2
// This app is used when the user is not logged in, e.x. on the index page
//
  angular
    .module('shifu', [
      'lbServices',
      'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
        $urlRouterProvider) {
      $stateProvider
        .state('app', {
          url: '',
          templateUrl: 'views/home.html',
          controller: 'IndexController'
        });

      $urlRouterProvider.otherwise('/');
    }]);
