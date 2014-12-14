'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
    .controller('CategoryCtrl', function ($scope, $http, $routeParams) {

        console.log($routeParams.type);

        $http.get('data/internet/' + $routeParams.type + '/bzwbk.json').success(function (data) {
            $scope.bzwbk = data;
        });

        $http.get('data/internet/' + $routeParams.type + '/orange.json').success(function (data2) {
            $scope.orange = data2;
        });

        $http.get('data/internet/' + $routeParams.type + '/ing.json').success(function (data2) {
            $scope.ing = data2;
        });

        $http.get('data/internet/' + $routeParams.type + '/smart.json').success(function (data2) {
            $scope.smart = data2;
        });

        $http.get('data/internet/' + $routeParams.type + '/millenium.json').success(function (data2) {
            $scope.millenium = data2;
        });

        $scope.category = $routeParams.type;

    });