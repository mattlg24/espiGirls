var app = angular.module('espiGirlsApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../views/landing.html',
    controller: 'MainController'
  })
  .when('/signup', {
    templateUrl: '../views/signup.html',
    controller: 'SignupController'
  })
  .when('/posts', {
    templateUrl: '../view/posts.html',
    controller: 'PostsController'
  })
})
