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
      	console.log(response);
        $window.localStorage.token = response.token;
        $location.path('/dash')
      })
      .error(function (response) {
      	console.log(response);
        // Erase the token if the user fails to log in
        delete $window.localStorage.token;

        // Handle login errors here
        //$scope.message = 'Error: Invalid user or password';
      });
  };
});  		


    	
    