'use strict';
angular
    .module('app.core')
    .controller('ProjectsPhotosController', function($scope, $http, $stateParams, $rootScope,
     $route, ionicToast, $location, ApiService) {
    	$rootScope.noShow = false;
        $scope.imageURL = ApiService.URLimage;

    $http.get(ApiService.URL+'projects/'+$stateParams.id+'/details').then(function(data){
		console.log(data.data);
		$scope.project = data.data;
		$scope.projectPhotos = data.data.project_photos;
	});

	$scope.colors = [];       
        $scope.colors.push({ color: randomColor({luminosity: 'light'}) });


});