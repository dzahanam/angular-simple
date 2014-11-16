'use strict';

/**
 * @ngdoc overview
 * @name angularSimpleApp
 * @description
 * # angularSimpleApp
 *
 * Main module of the application.
 */
angular
    .module('angularSimpleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
 'ui.bootstrap'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/main2', {
                templateUrl: 'views/main2.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/bank', {
                templateUrl: 'views/bank.html',
                controller: 'BankCtrl'
            })
            .when('/category/:type', {
                templateUrl: 'views/category.html',
                controller: 'CategoryCtrl'
            })
            .when('/process', {
                templateUrl: 'views/process.html',
                controller: 'ProcessCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });