'use strict';
angular
    .module('app.core')
    .controller('ListItemAddController', function($scope, $http, $stateParams,
       $rootScope, $route, $location, ionicToast, $window, ApiService) {
    	$rootScope.noShow = false;
		$http.get(ApiService.URL+'cards/'+$stateParams.id+'/details').then(function(data){
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
            $http.post(ApiService.URL+'cards/'+$stateParams.id+'/items', $scope.newItem[0],
          { headers: {'X-Requested-With': 'XMLHttpRequest'}})
          .success(function (response) {
            console.log(response);
            if(response.status == 400){
               $scope.errorMessage = response.error;
            } else {
              $scope.showToast = ionicToast.show(response.message, 'bottom', false, 2500);
              $location.path('/tab/list/'+$stateParams.id);
            }
          });
        };

        $http.get(ApiService.URL+'suggested-reminders').then(function(data){
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
        }
	});    	

});