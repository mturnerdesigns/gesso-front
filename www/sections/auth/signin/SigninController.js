'use strict';
angular
    .module('app.core')
    .controller('SigninController', function ($scope, $state, $http, $window, $location, $rootScope, ApiService) {
      $rootScope.noShow = true;
	$scope.user = {};
	$scope.login = function () {
    $http
      .post(ApiService.URL+'login', $scope.user,
      { headers: {'X-Requested-With': 'XMLHttpRequest'}})
      .success(function (response) {
        if(response.status == 422){
          console.log(response);
            $scope.errorMessage = response;
            $scope.invalidMessage = response.error;
            delete $window.localStorage.token;
        } else {
            $window.localStorage.token = response.token;
            $location.path('/tab/dash')
        }
      });
  };

  $scope.logout = function(){
    delete $window.localStorage.token;
      $location.path('/');
  }
}); 
