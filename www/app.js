angular
    .module('app', [
      'ionic',
      'app.core', 
      'app.routes', 
      'app.services',
      'ui.router',
      'ngRoute',
      'ngSanitize', 
      'ngStorage',
      '720kb.datepicker', 
      'ionic-toast',
      'ngFileUpload',
      ])


.run(function($ionicPlatform,$rootScope, $location) {

  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(0);
})
