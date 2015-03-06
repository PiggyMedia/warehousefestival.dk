/*global angular*/
var whfFilters = angular.module('whfFilters', []);

whfFilters.filter('nl2br', function ($sce) {
    'use strict';

    return function (input) {
        if (input) {
            var output = input.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');

            return $sce.trustAsHtml(output);
        }
    };
});

whfFilters.filter('url', function ($sce) {
    'use strict';

    return function (input) {
        if (input) {
            var output = input;

            return $sce.trustAsResourceUrl(output);
        }
    };
});
