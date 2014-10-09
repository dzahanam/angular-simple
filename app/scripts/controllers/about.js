'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
