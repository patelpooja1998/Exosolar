'use strict';

angular.module('Webapp.Homescreen.html',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
      $routeProvider.when('/Homescreen.html', {
          templateUrl:'Homescreen.html',
          controller:'HomescreenCtrl'


      });



}])

.controller('HomescreenCtrl',['$scope','CommonProp', function($scope,CommonProp){
  $scope.username = CommonProp.getUser();


}])
