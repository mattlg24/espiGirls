var app = angular.module('espiGirlsApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../views/landing.html',
    controller: 'MainController'
  })
})
