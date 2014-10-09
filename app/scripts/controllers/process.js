'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:BankCtrl
 * @description
 * # BankCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
  .controller('BankCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
