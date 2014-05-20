var messapp = angular.module('messapp', ['ngRoute'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: ''
      })
      .when('/dd', {
        templateUrl: 'genesis.html',
        controller: ''
      })
      .when('/sor', {
        templateUrl: 'genesis.html',
        controller: ''
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5mode(true);
  });