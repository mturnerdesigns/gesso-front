'use strict';
angular
    .module('app.core')
    .controller('ProjectsController', function($scope, $http, $stateParams, $rootScope, 
      $state, ionicToast, $location, ApiService) {
    	$rootScope.noShow = false;
    	$http.get(ApiService.URL+'projects').then(function(data){
    		console.log(data.data.projects);
    		$scope.projects = data.data.projects;

		$scope.colors = [];
        for( var i = 0; i<data.data.projects.length; i++){          
          $scope.colors.push({ color: randomColor({hue: 'blue'}) })
      	};

      	$scope.newProject = {};
      	$scope.addProject = function(){
      		$http.post(ApiService.URL+'projects/post', $scope.newProject,
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
