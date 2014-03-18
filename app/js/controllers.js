/*global angular*/

var whfControllers = angular.module('whfControllers', []);

whfControllers.controller('HomeCtrl', function ($rootScope, $scope, $http, $location) {
    'use strict';

    $rootScope.currentPage = $location.$$path;

    $http.get('json/artists.json').success(function (data) {
        $scope.artists = data;
    });

    $http.get('json/sponsors.json').success(function (data) {
        $scope.sponsors = data;
    });

    $http.get('json/gallery.json').success(function (data) {
        $scope.gallery = data;
    });
});
