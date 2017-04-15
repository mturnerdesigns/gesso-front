'use strict';
angular
    .module('app.core')
    .controller('PortfoliosEditController', function($scope, $http, $stateParams, $rootScope, 
      $state, ionicToast, $location, ApiService) {
    	$rootScope.noShow = false;
      $http.get(ApiService.URL+'portfolios/'+$stateParams.id+'/edit').then(function(data){
        console.log(data.data);
        $scope.editPortfolio = data.data;

        $scope.color = randomColor({ hue: 'pink'}); 

        $scope.updatePortfolio = function(){
        $http.patch(ApiService.URL+'portfolios/'+$stateParams.id+'/update', $scope.editPortfolio,
        { headers: {'X-Requested-With': 'XMLHttpRequest'}})
        .success(function (response) {
                console.log(response);
                $scope.showToast = ionicToast.show(response.message, 'bottom', false, 2500);
                $location.path('/tab/portfolios');
              });
        };

        $scope.deletePortfolio = function() {
        $http.delete(ApiService.URL+'portfolios/'+$stateParams.id+'/delete', $scope.editPortfolio,
         { headers: {'X-Requested-With': 'XMLHttpRequest'}})
         .success(function (response) {
            console.log(response);
            $scope.showToast = ionicToast.show(response.message, 'bottom', false, 2500);
            $location.path('/tab/portfolios');
          })
      };
      
      });

});