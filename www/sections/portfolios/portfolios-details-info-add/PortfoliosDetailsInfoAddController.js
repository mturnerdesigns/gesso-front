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
                	$scope.showToast = ionicToast.show('New Work Added!', 'bottom', false, 2500);
                    $location.path('/tab/portfolios/'+$stateParams.id+'/details');
                }
            })
    	}
    	$http.get(ApiService.URL+'portfolios/'+$stateParams.id+'/details').then(function(data){
          console.log(data.data);
          $scope.portfolioDetails = data.data;

            $scope.colors = [];       
            $scope.colors.push({ color: randomColor({ hue: 'pink' }) });
       
        });

    	$scope.cancel = function() {
    		$location.path('/tab/portfolios/'+$stateParams.id+'/details');
    	}

});