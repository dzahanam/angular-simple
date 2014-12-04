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
            username: 'Username',
            password: 'Password'
        };


        $scope.login = function (credentials) {
            return $http
                .post('/login', credentials);
        };
    });