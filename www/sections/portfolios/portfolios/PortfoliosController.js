'use strict';
angular
    .module('app.core')
    .controller('PortfoliosController', function($scope, $http, $stateParams, $rootScope, 
      $state, ionicToast, $location, ApiService) {
    	$rootScope.noShow = false;

      $http.get(ApiService.URL+'portfolios').then(function(data){
        console.log(data.data.portfolio);
        $scope.portfolios = data.data.portfolio;

    $scope.colors = [];
        for( var i = 0; i<data.data.portfolio.length; i++){          
          $scope.colors.push({ color: randomColor({hue: 'pink'}) })
        };

        $scope.newPortfolio = {};
        $scope.addPortfolio = function(){
          $http.post(ApiService.URL+'portfolios/post', $scope.newPortfolio,
          { headers: {'X-Requested-With': 'XMLHttpRequest'}})
          .success(function(response){
            if(response.status == 422)
            {
              console.log(response);
              $scope.errorMessage = response.error;
            } else {
              $state.reload();
            }
          });
        };
  });
});