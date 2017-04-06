'use strict';
angular
    .module('app.core', ['ngSanitize', 'ngRoute'])
    .controller('ListController', function($scope, $http, $route, $rootScope, $location, ionicToast) {
      $rootScope.noShow = false;
    	
      $http.get('http://gesso-back.dev/api/cards')
    	.success(function(data){
        console.log(data.cards);
        $scope.lists = data.cards;
        
        $scope.colors = [];
        for( var i = 0; i<data.cards.length; i++){          
          $scope.colors.push({ color: randomColor({luminosity: 'light'}) })
      };  

        $scope.newList = {};
        $scope.addList = function() {
            $http.post('http://gesso-back.dev/api/card/post', $scope.newList,
            { headers: {'X-Requested-With': 'XMLHttpRequest'}})
            .success(function (response) {
              console.log(response);
              $route.reload();
            })
            .error(function (response) {
              console.log(response);
            });
          };

        // $scope.deleteCard = function(id) {
        //   $http.delete('http://gesso-back.dev/api/card/'+id+'/delete', $scope.list,
        //    { headers: {'X-Requested-With': 'XMLHttpRequest'}})
        //    .success(function (response) {
        //       console.log(response);
        //       $scope.showToast = ionicToast.show(response.message, 'bottom', false, 2500);
        //       $route.reload('/dash');
        //     })
        //     .error(function (response) {
        //       console.log(response);
        //     });
        // };
    });     
});

  
