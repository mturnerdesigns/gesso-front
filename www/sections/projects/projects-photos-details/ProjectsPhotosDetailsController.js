'use strict';
angular
    .module('app.core')
    .controller('ProjectsPhotosDetailsController', function($scope, $http, $stateParams, $rootScope, 
      $route, $ionicModal, $location, ionicToast, ApiService) {
    	$rootScope.noShow = false;
      //grabs the URL for image path in gesso-backend
      $scope.imageURL = ApiService.URLimage;

  		$http.get(ApiService.URL+'photos/'+$stateParams.id).then(function(data){
  			console.log(data.data);
  			$scope.photoDetails = data.data[0];
        var photoProject = data.data[0].project_id;

  			$scope.delete = function(){
  				$http.delete(ApiService.URL+'photos/'+$stateParams.id+'/delete',
  				 $scope.photoDetails, { headers: {'X-Requested-With': 'XMLHttpRequest'}})
  					.success(function (response) {
            		console.log(response);
                $location.path('/tab/projects/'+photoProject+'/photos');
            		$scope.showToast = ionicToast.show(response.message, 'bottom', false, 2500);
          		})
	          		.error(function (response) {
	            	console.log(response);
	          	});
  			};

       $http.get(ApiService.URL+'projects/'+photoProject+'/details').then(function(data){
          console.log(data.data);
          $scope.projectDetails = data.data;

            $scope.colors = [];       
            $scope.colors.push({ color: randomColor({luminosity: 'light'}) });
       
        });

  		});
  		
  	$ionicModal.fromTemplateUrl('fullscreen.html', function (modal) {
                $scope.fullscreen = modal;
            }, {
                scope: $scope,
                animation: 'slide-in-up'
            })
            $scope.openfullscreen = function (data) {
                $scope.inspectionItem = data;
                $scope.fullscreen.show();
            }
            $scope.closefullscreen = function () {
                $scope.fullscreen.hide();
            }
});