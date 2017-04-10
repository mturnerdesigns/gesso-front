'use strict';
angular
    .module('app.core')
    .controller('ProjectsPhotosController', function($scope, $http, $routeParams, $rootScope, $route, ionicToast, $location) {
    	$rootScope.noShow = false;
    $http.get('http://gesso-back.dev/api/projects/'+$routeParams.id+'/details').then(function(data){
		console.log(data.data);
		$scope.project = data.data;
		$scope.projectPhotos = data.data.project_photos;
	});

	$scope.colors = [];       
        $scope.colors.push({ color: randomColor({luminosity: 'light'}) });


});