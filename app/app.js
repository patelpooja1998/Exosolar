'use strict';

// Declare app level module which depends on views, and core components
angular.module('Webapp', [
  'ngRoute',
  'Webapp.Home',
  'Webapp.Signup',
  'Webapp.Homescreen.html'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {


  $routeProvider.otherwise({redirectTo: '/Home'});
}]);
