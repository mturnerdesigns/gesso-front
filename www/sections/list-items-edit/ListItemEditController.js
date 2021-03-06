'use strict';
angular
    .module('app.core')
    .controller('ListItemEditController', function($scope, $http, $stateParams, $rootScope,
     $state, ionicToast, $location, ApiService) {
    	$rootScope.noShow = false;
    	$http.get(ApiService.URL+'items/'+$stateParams.id+'/edit').then(function(data){
		console.log(data.data);
		$scope.items = data.data;


		$scope.updateListItems = function(items){
			$http.patch(ApiService.URL+'items/'+$stateParams.id, $scope.items,
			{ headers: {'X-Requested-With': 'XMLHttpRequest'}})
			.success(function (response) {
              console.log(response);
              $location.path('/tab/list/'+items.card_id);     
              $scope.showToast = ionicToast.show(response.message, 'bottom', false, 2500);
            })
            .error(function (response) {
              console.log(response);
            });
		};   
        $scope.deleteCardItems = function(items) {
          $http.delete(ApiService.URL+'items/'+$stateParams.id+'/delete', $scope.items,
           { headers: {'X-Requested-With': 'XMLHttpRequest'}})
           .success(function (response) {
              console.log(response);
              $scope.showToast = ionicToast.show(response.message, 'bottom', false, 2500);
              $location.path('/tab/list/'+items.card_id+'');
            })
            .error(function (response) {
              console.log(response);
            });
        };   
	});    	
});