var app = angular.module("app", ['ui.router','angularUtils.directives.dirPagination','angular-jwt', 'ui.bootstrap', 'ngFileUpload', 'ngCookies', 'ngSanitize', 'ngCsv', 'ngCsvImport', 'fCsv', 'ngAnimate', 'ngRoute', 'ngMaterial', 'uiGmapgoogle-maps', 'ngFileUpload', 'signature'])

    })
    .filter('yesNo', function() {
        return function(input) {
            return input ? 'yes' : 'no';
        }
    })