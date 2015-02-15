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
		$scope.lengthResults = 0;
		$scope.query = '';
		$scope.numberSearchDone = 0;

		$scope.loading = false;

		$scope.search = function () {
			$scope.loading = true;

			IkeaService
				.query($scope.query)
				.then(
					function (data) {
						$scope.lengthResults = data.length;
						$scope.Products = data;
						$scope.loading = false;
						$scope.numberSearchDone++;
					}, 
					function (error) {
						$scope.lengthResults = data.length;
						$scope.Products = error;
						$scope.loading = false;
						$scope.numberSearchDone++;
				});
		};
	});