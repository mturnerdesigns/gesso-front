'use strict';
angular
    .module('app.core')
    .controller('PortfoliosDetailsInfoAddController', function($scope, $http, $stateParams, 
    	$rootScope, $state, ionicToast, $location, ApiService, Upload) {
    	$rootScope.noShow = false;
    	$scope.form = {};
    	$scope.uploadForm = function(file) {
    		file.upload = Upload.upload({
      			url: ApiService.URL+'portfolios/'+$stateParams.id+'/portfolio-photos/post',
      			data: $scope.form, file,
      			headers:{'X-Requested-With': 'XMLHttpRequest'}
      		})
    		.success(function(response){
                if(response.status == 422){
                    console.log(response);
                    $scope.showToast = ionicToast.show(response.error.file, 'middle', false, 2500);
                } else {
                    $location.path('/tab/portfolios/'+$stateParams.id+'/details');
                }
            })
    	}

    	$scope.cancel = function() {
    		$location.path('/tab/portfolios/'+$stateParams.id+'/details');
    	}

});