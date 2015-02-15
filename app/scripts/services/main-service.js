'use strict';

angular
	.module('searchEngineApp')
	.factory('IkeaService', function ($log, $http, $q, Config) {
		var service = {};

		service.query = function (psQuery) {
			var deferred = $q.defer();

			var query = encodeURIComponent(psQuery);

		    importio.init(Config.importio.init);
			importio.query({
			    "connectorGuids": Config.importio.query["connectorGuids"],
			    "input": {
			        "webpage/url": "http://www.ikea.com/us/en/search/?query=" + query
			    }
			}, {
			    "data": function (data) {
					$log.debug(data);
			    },
			    "done": function (data) {
			    	deferred.resolve(data);
			    },
			    "error": function (error) {
					deferred.reject(error);
			    }
			});

			return deferred.promise;
		};
		
		return service;
	});