'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
  .controller('MainCtrl', function ($scope, $http) {
  
	$http.get('data/features.json').success(function(data) {
		$scope.features = data;
	});
	
	$http.get('data/banks.json').success(function(data2) {
		$scope.banks = data2;
	});

	$http.get('data/bzwbk_globals.json').success(function(data2) {
		$scope.bzwbk_globals = data2;
	});
	
	$http.get('data/feeds.json').success(function(data2) {
		$scope.feeds = data2;
	});
	
  });
