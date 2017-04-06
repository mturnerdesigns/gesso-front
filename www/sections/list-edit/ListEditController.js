'use strict';
angular
    .module('app.core')
    .controller('ListEditController', function($scope, $http, $routeParams, $rootScope, $route, $location, ionicToast) {
    	$rootScope.noShow = false;
		$http.get('http://gesso-back.dev/api/card/'+$routeParams.id+'/edit').then(function(data){
		console.log(data.data);
		$scope.editList = data.data;

		$scope.color = randomColor({luminosity: 'light'});   

		$scope.updateList = function(editList){
			$http.patch('http://gesso-back.dev/api/card/'+$routeParams.id, $scope.editList,
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

		$scope.deleteCard = function() {
          $http.delete('http://gesso-back.dev/api/card/'+$routeParams.id+'/delete', $scope.list,
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