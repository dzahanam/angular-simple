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
	
	$http.get('data/internet/informacje/bzwbk.json').success(function(data) {
		$scope.bzwbk = data;
	});
	
	$http.get('data/internet/informacje/orange.json').success(function(data2) {
		$scope.orange = data2;
	});
	
	$http.get('data/internet/informacje/ing.json').success(function(data2) {
		$scope.ing = data2;
	});
	
	$http.get('data/internet/informacje/smart.json').success(function(data2) {
		$scope.smart = data2;
	});
	
	$http.get('data/internet/informacje/millenium.json').success(function(data2) {
		$scope.millenium = data2;
	});

  });
