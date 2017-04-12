'use strict';
angular
    .module('app.services')
    .factory('ApiService', function() {
    	return {
        	URL : 'http://gesso-back.dev/api/',
        	URLimage : 'http://gesso-back.dev'
    	};
	});