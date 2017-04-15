'use strict';
angular
    .module('app.core')
    .controller('ProjectsPhotosController', function($scope, $state, $http, $stateParams, $rootScope,
        ionicToast, $location, ApiService, Upload) {
    	$rootScope.noShow = false;
        $scope.imageURL = ApiService.URLimage;

    $http.get(ApiService.URL+'projects/'+$stateParams.id+'/details').then(function(data){
		console.log(data.data);
		$scope.project = data.data;
		$scope.projectPhotos = data.data.project_photos;
	});

	$scope.colors = [];       
        $scope.colors.push({ color: randomColor({ hue: 'blue'}) });

    $scope.uploadFiles = function(file) {
        if (file) {
            file.upload = Upload.upload({
                url: ApiService.URL+'project/'+$stateParams.id+'/photos/post',
                data: {file: file}
            })
            .success(function(response){
                console.log(response);
                if(response.status == 422){
                    console.log(response);
                    $scope.showToast = ionicToast.show(response.error.file, 'middle', false, 2500);
                } else {
                    $state.reload();
                }
            })
        }   
    }

});