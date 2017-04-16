'use strict';
angular
    .module('app.core')
    .controller('PortfoliosDetailsInfoController', function($scope, $http, $stateParams, $rootScope, 
      $state, $ionicModal, ionicToast, $location, ApiService) {
    	$rootScope.noShow = false;
      //grabs the URL for image path in gesso-backend
      $scope.imageURL = ApiService.URLimage;

      $http.get(ApiService.URL+'portfolio-photos/'+$stateParams.id).then(function(data){
        console.log(data.data[0]);
        $scope.portfolioPhotoDetails = data.data[0];
        $scope.notes = data.data[0].portfolio_notes[0];

        var photoPortfolio = data.data[0].portfolio_id;

        $scope.delete = function(){
          $http.delete(ApiService.URL+'portfolio-photos/'+$stateParams.id+'/delete',
           $scope.photoDetails, { headers: {'X-Requested-With': 'XMLHttpRequest'}})
            .success(function (response) {
                console.log(response);
                $location.path('/tab/portfolios/'+photoPortfolio+'/details');
                $scope.showToast = ionicToast.show('Work deleted!', 'bottom', false, 2500);
              })
                .error(function (response) {
                console.log(response);
              });
        };

       $http.get(ApiService.URL+'portfolios/'+photoPortfolio+'/details').then(function(data){
          console.log(data.data);
          $scope.portfolioDetails = data.data;

            $scope.colors = [];       
            $scope.colors.push({ color: randomColor({ hue: 'pink' }) });
       
        });

      })
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