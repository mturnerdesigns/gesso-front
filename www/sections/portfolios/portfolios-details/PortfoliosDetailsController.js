'use strict';
angular
    .module('app.core')
    .controller('PortfoliosDetailsController', function($scope, $http, $stateParams, $rootScope, 
      $state, ionicToast, $location, ApiService) {
    	$rootScope.noShow = false;
      $scope.imageURL = ApiService.URLimage;

      $scope.colors = [];       
        $scope.colors.push({ color: randomColor({ hue: 'pink'}) });

      $http.get(ApiService.URL+'portfolios/'+$stateParams.id+'/details').then(function(data){
        console.log(data.data);
        $scope.portfolio = data.data;
        $scope.portfolioPhotos = data.data.portfolio_photos;
      });

});