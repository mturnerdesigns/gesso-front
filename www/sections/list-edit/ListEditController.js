'use strict';
angular
    .module('app.core')
    .controller('ListEditController', function($scope, $window, $http, $stateParams, $rootScope, 
      $state, $location, ionicToast, ApiService) {
    	$rootScope.noShow = false;
		$http.get(ApiService.URL+'card/'+$stateParams.id+'/edit').then(function(data){
		console.log(data.data);
		$scope.editList = data.data;

		$scope.color = randomColor({luminosity: 'light'});   

		$scope.updateList = function(editList){
			$http.patch(ApiService.URL+'card/'+$stateParams.id, $scope.editList,
			{ headers: {'X-Requested-With': 'XMLHttpRequest'}})
			.success(function (response) {
              console.log(response);
              $scope.showToast = ionicToast.show(response.message, 'bottom', false, 2500);
              $location.path('/tab/dash');
              //$location.path('/tab/dash');
            })
            .error(function (response) {
              console.log(response);
            });
		};

		$scope.deleteCard = function() {
          $http.delete(ApiService.URL+'card/'+$stateParams.id+'/delete', $scope.list,
           { headers: {'X-Requested-With': 'XMLHttpRequest'}})
           .success(function (response) {
              console.log(response);
              $scope.showToast = ionicToast.show(response.message, 'bottom', false, 2500);
              $location.path('/tab/dash');
            })
            .error(function (response) {
              console.log(response);
            });
        };
	});  
});