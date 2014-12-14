'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
    .controller('LoginCtrl', function ($scope, $http) {
        $scope.credentials = {
            username: '',
            password: ''
        };


        $scope.login = function (credentials) {
            return $http
                .post('/#/main');
        };
    });