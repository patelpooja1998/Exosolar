'use  restrict';

angular.module('Webapp.Signup',['ngRoute','firebase'])
.config(['$routeProvider',function($routeProvider){
      $routeProvider.when('/Signup', {
          templateUrl:'Signup/Signup.html',
          controller:'SignupCtrl'


      })
  }])

  .controller('SignupCtrl' , [ '$scope', '$firebaseAuth', '$location', function($scope , $firebaseAuth,$location){

    $scope.signUp = function(){

        var username = $scope.user.email;
        var password = $scope.user.password;

        if(username && password){

          var auth = $firebaseAuth();
          auth.$createUserWithEmailAndPassword(username , password).then(function(){
            console.log("user successfully created");
            $location.path("/Homescreen.html")
          }).catch(function(error){
            $scope.errMsg = true;
            $scope.errorMessage = error.message;
          });
        }
    }


  }])
