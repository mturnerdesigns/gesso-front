'use strict';
angular
    .module('app.core')
    .controller('ListItemAddController', function($scope, $http, $stateParams, $rootScope, $route, $location) {
    	$rootScope.noShow = false;
		$http.get('http://gesso-back.dev/api/cards/'+$stateParams.id+'/details').then(function(data){
		//console.log(data.data);
		$scope.items = data.data.item;
		$scope.list = data.data;
		
    		$scope.colors = [];       
        $scope.colors.push({ color: randomColor({luminosity: 'light'}) });

        $scope.reminderdate = false;
        $scope.toggle = function() {
        $scope.reminderdate = !$scope.reminderdate;
    	};

        $scope.newItem = [];
        $scope.addItem = function() {
            $http.post('http://gesso-back.dev/api/cards/'+$stateParams.id+'/items', $scope.newItem[0],
          { headers: {'X-Requested-With': 'XMLHttpRequest'}})
          .success(function (response) {
            console.log(response);
            $location.path('/tab/list/'+$stateParams.id);
            $scope.errorMessage = response;
          })
          .error(function (response) {
            console.log(response);
          });
        };

        $http.get('http://gesso-back.dev/api/suggested-reminders').then(function(data){
          console.log(data.data);
          $scope.reminders = data.data.reminders;
        });

        $scope.update = function(reminder){
          $scope.newItem.splice(reminder, 1);//removes first object from array if the selected object changes
          $scope.newItem.push({'body':reminder.selectedOption.body, 'reminder_date': reminder.selectedOption.reminder_date});
          console.log($scope.newItem);
        }
        $scope.cancel = function(){
          $location.path('tab/list/'+$stateParams.id);
          $window.location.reload(true);
        }
	});    	

});