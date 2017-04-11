'use strict';
angular
    .module('app.core')
    .controller('ProjectsPhotosDetailsController', function($scope, $http, $stateParams, $rootScope, $route, $ionicModal, $location, ionicToast) {
    	$rootScope.noShow = false;
  		$http.get('http://gesso-back.dev/api/photos/'+$stateParams.id).then(function(data){
  			console.log(data.data);
  			$scope.photoDetails = data.data[0];

  			$scope.delete = function(){
  				$http.delete('http://gesso-back.dev/api/photos/'+$stateParams.id+'/delete',
  				 $scope.photoDetails, { headers: {'X-Requested-With': 'XMLHttpRequest'}})
  					.success(function (response) {
            		console.log(response);
            		$scope.showToast = ionicToast.show(response.message, 'bottom', false, 2500);
            		$location.path('/projects');
          		})
	          		.error(function (response) {
	            	console.log(response);
	          	});
  			};
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