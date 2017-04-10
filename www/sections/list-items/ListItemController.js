'use strict';
angular
    .module('app.core')
    .controller('ListItemController',  function($scope, $http, $routeParams, $rootScope, $route, ionicToast) {
    	$rootScope.noShow = false;
		$http.get('http://gesso-back.dev/api/cards/'+$routeParams.id+'/details').then(function(data){
		console.log(data.data);
		$scope.items = data.data.item;
		$scope.list = data.data;
		
		$scope.colors = [];       
        $scope.colors.push({ color: randomColor({luminosity: 'light'}) });

        
    	$scope.update = function(item) {
    		$http.patch('http://gesso-back.dev/api/items/'+item.id, {completed: item.completed},
    		//because we are passing the item in the function we dont have to access it through the scope object.	
           	{ headers: {'X-Requested-With': 'XMLHttpRequest'}})
           	.success(function (response) {
              console.log(response);
              $route.reload();
            })
            .error(function (response) {
              console.log(response);
            });
    	};

      $scope.deleteCard = function(id) {
          $http.delete('http://gesso-back.dev/api/items/'+id+'/delete', $scope.item,
           { headers: {'X-Requested-With': 'XMLHttpRequest'}})
           .success(function (response) {
              console.log(response);
              $scope.showToast = ionicToast.show(response.message, 'bottom', false, 2500);
              $route.reload();
            })
            .error(function (response) {
              console.log(response);
            });
        };

       

	});    	

});