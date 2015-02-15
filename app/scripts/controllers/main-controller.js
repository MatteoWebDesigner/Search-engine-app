'use strict';

/**
 * @ngdoc function
 * @name searchEngineAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the searchEngineAppApp
 */
angular
	.module('searchEngineApp')
	.controller('MainCtrl', function ($scope, IkeaService) {
		$scope.Products = [];
		$scope.query = '';

		$scope.search = function () {
			
			IkeaService
				.query($scope.query)
				.then(
					function (data) {
						$scope.Products = data;
					}, 
					function (error) {
						$scope.Products = error;
				});

		};
	});