'use strict';
angular
    .module('app.core')
    .controller('ResourcesController', function($scope, $http, $routeParams, $rootScope, $route) {
    	$rootScope.noShow = false;
    	$http.get('http://gesso-back.dev/api/resources').then(function(data){
    		console.log(data.data);
    		$scope.grants = data.data.grants;
            $scope.employs = data.data.employment;
            $scope.careers = data.data.career;
            $scope.openings = data.data.openings;

    	})
});