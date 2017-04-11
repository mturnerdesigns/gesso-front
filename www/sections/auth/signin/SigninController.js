'use strict';
angular
    .module('app.core')
    .controller('SigninController', function ($scope, $state, $http, $window, $location, $rootScope) {
      $rootScope.noShow = true;
	$scope.user = {};
	$scope.login = function () {
    $http
      .post('http://gesso-back.dev/api/login', $scope.user,
      { headers: {'X-Requested-With': 'XMLHttpRequest'}})
      .success(function (response) {
      	console.log(response);
        $window.localStorage.token = response.token;
        $location.path('/tab/dash')
      })
      .error(function (response) {
      	console.log(response);
        $scope.errorMessage = response.error;
        // Erase the token if the user fails to log in
        delete $window.localStorage.token;

      });
  };

  $scope.logout = function(){
    delete $window.localStorage.token;
      $location.path('/');
  }
}); 
