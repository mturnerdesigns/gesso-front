'use strict';
angular
    .module('app.core')
    .controller('SignupController', function ($scope, $http, $state, $window, $location, $rootScope) {	
      $rootScope.noShow = true;
	$scope.user = {};
  $scope.register = function () {
    $http
      .post('http://gesso-back.dev/api/register', $scope.user,
      { headers: {'X-Requested-With': 'XMLHttpRequest'}})
        .success(function (response) {
          if(response.status == 422){
            console.log(response) 
            $scope.errorMessage = response.error;
            delete $window.localStorage.token;
          } else if(response.status == 200){
            $window.localStorage.token = response.token;
            $location.path('/tab/dash')
          }     
        });
    };
}); 		

  

    	
    