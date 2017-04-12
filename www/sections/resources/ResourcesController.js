'use strict';
angular
    .module('app.core')
    .controller('ResourcesController', function($scope, $http, $routeParams, $rootScope, $route, ApiService) {
    	$rootScope.noShow = false;
    	$http.get(ApiService.URL+'resources').then(function(data){
    		console.log(data.data);
    		$scope.grants = data.data.grants;
            $scope.employs = data.data.employment;
            $scope.careers = data.data.career;
            $scope.openings = data.data.openings;

    	})
});