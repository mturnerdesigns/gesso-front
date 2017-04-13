'use strict';
angular
    .module('app.core')
    .controller('ProjectsPhotosAddController', function($scope, $http, $stateParams, 
    	$rootScope, $route, ionicToast, $location, ApiService, Upload) {
    	$rootScope.noShow = false;

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
            	} else {
            		$state.reload();
            	}
            })

            // file.upload.then(function (response) {
            //     console.log(response);
            // });
        }   
    }

  //   	$scope.uploadFile = function(files) {
		// 	var fileupload = new FormData();
		// 	//Take the first selected file
		// 	fileupload.append("file", files[0]);

		// 	$http.post(ApiService.URL+'project/'+$stateParams.id+'/photos/post', fileupload, {
		// 	    headers: {'Content-Type': 'form-data' },
		// 	    transformRequest: angular.identity
		// 	})
		// 	.success(function(response){
		// 		console.log(response);
		// 	})
		// 	.error(function(response){
		// 		console.log(response);
		// 	});

		// };
    
});