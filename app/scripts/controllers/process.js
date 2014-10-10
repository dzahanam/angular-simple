'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:ProcessCtrl
 * @description
 * # ProcessCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
  .controller('ProcessCtrl', function ($scope) {

  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 4 + slides.length;
      image: 'images/data/bzwbk/indywidualny/sprzedaz_wewn/konto_walutowe/4.png',
    slides.push({
      text: ['Extra','Lots of','Extra','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
  
  });
