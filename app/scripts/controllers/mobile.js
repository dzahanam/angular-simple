'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:MobileCtrl
 * @description
 * # MobileCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
    .controller('MobileCtrl', function ($scope, $http) {

      $http.get('data/mobile/features.json').success(function (data2) {
            $scope.features = data2;
        });

        $http.get('data/feeds.json').success(function (data2) {
            $scope.feeds = data2;
        });

        //main2
        $http.get('data/banks.json').success(function (data2) {
            $scope.banks = data2;
        });

    });