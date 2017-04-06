'use strict';
angular
    .module('app.services', [])
    
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('BearerAuthInterceptor');
    }])

    .factory('BearerAuthInterceptor', function ($window, $q, $location) {
    return {
        request: function(config) {
            config.headers = config.headers || {};
            if ($window.localStorage.getItem('token')) {
          
                config.headers.Authorization = 'Bearer ' + $window.localStorage.getItem('token');
            }
            return config || $q.when(config);
        },
        responseError: function(response) {
            if (response.status === 401 || response.status === 400) {
                $location.path('/');
            }
            return response || $q.when(response);
            }
        };
    });
