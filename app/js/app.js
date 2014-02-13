/*global angular*/

var whfApp = angular.module('whfApp', [
    'ngRoute',
    'ngAnimate',
    'whfControllers',
    'whfDirectives'
]);

whfApp.config(function ($routeProvider) {
    'use strict';
    
    $routeProvider
        .when('/', {
            templateUrl: 'partials/whf.html',
            controller: 'HomeCtrl'
        })
        .when('/program', {
            templateUrl: 'partials/program.html',
            controller: 'HomeCtrl'
        })
        .when('/information', {
            templateUrl: 'partials/information.html',
            controller: 'HomeCtrl'
        })
        .when('/billet', {
            templateUrl: 'partials/billet.html',
            controller: 'HomeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});