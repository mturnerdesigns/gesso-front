'use strict';
angular
    .module('app.core')
    .controller('ProjectsEditController', function($scope, $http, $routeParams, $rootScope, $route, ionicToast, $location) {
    	$rootScope.noShow = false;

    $http.get('http://gesso-back.dev/api/projects/'+$routeParams.id+'/edit').then(function(data){
      console.log(data.data);
      $scope.editProject = data.data;
    

    $scope.color = randomColor({luminosity: 'light'}); 

    $scope.updateProject = function(editProject){
      $http.patch('http://gesso-back.dev/api/projects/'+$routeParams.id+'/update', $scope.editProject,
      { headers: {'X-Requested-With': 'XMLHttpRequest'}})
      .success(function (response) {
              console.log(response);
              $scope.showToast = ionicToast.show(response.message, 'bottom', false, 2500);
              $location.path('/projects');
            })
            .error(function (response) {
              console.log(response);
            });
      };

    $scope.deleteProject = function() {
        $http.delete('http://gesso-back.dev/api/projects/'+$routeParams.id+'/delete', $scope.editProject,
         { headers: {'X-Requested-With': 'XMLHttpRequest'}})
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
});
