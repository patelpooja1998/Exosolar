'use strict';

angular.module('Webapp.Home',['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){
      $routeProvider.when('/Home', {
          templateUrl:'Home/Home.html',
          controller:'HomeCtrl'


      });



}])

.controller('HomeCtrl' ,['$scope', '$firebaseAuth', '$location','CommonProp',function($scope,$firebaseAuth,$location, CommonProp) {
  $scope.username = CommonProp.getUser();
$scope.signIn = function(){
      var username = $scope.user.email;
      var password = $scope.user.password;
      var auth = $firebaseAuth();

      auth.$signInWithEmailAndPassword(username,password).then(function(){

        console.log("user login successful");
        CommonProp.setUser($scope.user.email);
        $location.path("/Homescreen.html")

      }).catch(function(error){
        $scope.errMsg = true;
        $scope.errorMessage = error.message;

      });

}


}])

.service('CommonProp', ['$location',function($location){
var user = "";

return{

  getUser:function(){

    return user;
  },
  setUser: function(value){
    user = value;
  }
};

}]);
