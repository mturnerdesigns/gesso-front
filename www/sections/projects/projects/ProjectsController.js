'use strict';
angular
    .module('app.core')
    .controller('ProjectsController', function($scope, $http, $stateParams, $rootScope, $state, ionicToast, $location) {
    	$rootScope.noShow = false;
    	$http.get('http://gesso-back.dev/api/projects').then(function(data){
		console.log(data.data.projects);
		$scope.projects = data.data.projects;

		$scope.colors = [];
        for( var i = 0; i<data.data.projects.length; i++){          
          $scope.colors.push({ color: randomColor({luminosity: 'light'}) })
      	};

      	$scope.newProject = {};
      	$scope.addProject = function(){
      		$http.post('http://gesso-back.dev/api/projects/post', $scope.newProject,
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
