/*global angular, $*/

var whfDirectives = angular.module('whfDirectives', []);

whfDirectives.directive('navbarcollapse', function () {
    'use strict';
    
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.bind('click', function () {
                scope.$on('$routeChangeSuccess', function () {
                    $('.navbar-collapse').collapse('hide');
                });
                
                element.unbind('click');
            });
        }
    };
});