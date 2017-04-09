'use strict';
angular
    .module('app.core')
    .controller('ProjectsPhotosController', function($scope, $http, $routeParams, $rootScope, $route, ionicToast, $location) {
    	$rootScope.noShow = false;
    $http.get('http://gesso-back.dev/api/project/'+$routeParams.id+'/photos').then(function(data){
		console.log(data.data);
		$scope.projectPhotos = data.data;
	});
});