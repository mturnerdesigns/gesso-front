'use strict';
angular
    .module('app.core')
    .controller('ListItemEditController', function($scope, $http, $routeParams, $rootScope, $route, ionicToast) {
    	$rootScope.noShow = false;
    	$http.get('http://gesso-back.dev/api/items/'+$routeParams.id+'/edit').then(function(data){
		console.log(data.data);
		$scope.items = data.data;


		$scope.updateListItems = function(items){
			$http.patch('http://gesso-back.dev/api/items/'+$routeParams.id, $scope.items,
			{ headers: {'X-Requested-With': 'XMLHttpRequest'}})
			.success(function (response) {
              console.log(response);
              $scope.showToast = ionicToast.show(response.message, 'bottom', false, 2500);
              //$location.path('/dash');
            })
            .error(function (response) {
              console.log(response);
            });
		};   
        $scope.deleteCardItems = function() {
          $http.delete('http://gesso-back.dev/api/items/'+$routeParams.id+'/delete', $scope.items,
           { headers: {'X-Requested-With': 'XMLHttpRequest'}})
           .success(function (response) {
              console.log(response);
              $scope.showToast = ionicToast.show(response.message, 'bottom', false, 2500);
              $location.path('/dash');
            })
            .error(function (response) {
              console.log(response);
            });
        };   
	});    	
});