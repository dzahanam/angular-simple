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

        $http.get('data/internet/bzwbk_globals.json').success(function (data2) {
            $scope.bzwbk_globals = data2;
        });

        $http.get('data/internet/orange_globals.json').success(function (data2) {
            $scope.orange = data2;
        });

        $http.get('data/internet/ing_globals.json').success(function (data2) {
            $scope.ing = data2;
        });

        $http.get('data/internet/smart_globals.json').success(function (data2) {
            $scope.smart = data2;
        });

        $http.get('data/internet/millenium_globals.json').success(function (data2) {
            $scope.millenium = data2;
        });

        $http.get('data/feeds.json').success(function (data2) {
            $scope.feeds = data2;
        });

        //main2
        $http.get('data/banks.json').success(function (data2) {
            $scope.banks = data2;
        });

    });