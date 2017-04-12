'use strict';
angular
    .module('app.core', ['ngSanitize'])
    .controller('ListController', function($scope, $state, $http, $stateParams,
     $window, $rootScope, $location, ionicToast, ApiService) {
      $rootScope.noShow = false;
      $http.get(ApiService.URL+'cards')
    	.success(function(data){
        console.log(data.cards);
        $scope.lists = data.cards;
        
        $scope.colors = [];
        for( var i = 0; i<data.cards.length; i++){          
          $scope.colors.push({ color: randomColor({luminosity: 'light'}) })
      };  

        $scope.newList = {};
        $scope.addList = function() {
            $http.post(ApiService.URL+'card/post', $scope.newList,
            { headers: {'X-Requested-With': 'XMLHttpRequest'}})
            .success(function(response){
              if(response.status == 422)
               { 
                $scope.errorMessage = response.error;
               } else {
                $state.reload();
               }
            });
          };
    });     
});
