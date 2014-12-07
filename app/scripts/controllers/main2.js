'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:Main2Ctrl
 * @description
 * # Main2Ctrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
    .controller('Main2Ctrl', function ($scope, $http) {

        $http.get('data/internet/bzwbk_globals.json').success(function (data2) {
            $scope.bzwbk_globals = data2;
        });

        $http.get('data/main2/features.json').success(function (data2) {
            $scope.features = data2;
        });

        $http.get('data/main2/informacje.json').success(function (data2) {
            $scope.informacje = data2;
        });

        $http.get('data/main2/transakcje.json').success(function (data2) {
            $scope.transakcje = data2;
        });

        $http.get('data/main2/wewnetrzna.json').success(function (data2) {
            $scope.wewnetrzna = data2;
        });

        $http.get('data/feeds.json').success(function (data2) {
            $scope.feeds = data2;
        });

        $http.get('data/banks.json').success(function (data2) {
            $scope.banks = data2;
        });

    });