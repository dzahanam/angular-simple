'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
  .controller('CategoryCtrl', function ($scope, $http) {
  
$http.get('data/features.json').success(function(data) {
		$scope.features = data;
	});
	
	$http.get('data/banks.json').success(function(data2) {
		$scope.banks = data2;
	});

	$http.get('data/bzwbk_globals.json').success(function(data2) {
		$scope.bzwbk_globals = data2;
	});
	
	$http.get('data/bzwbk.json').success(function(data) {
		$scope.bzwbk = data;
	});

  });
