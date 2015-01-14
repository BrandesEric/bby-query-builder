'use strict';

angular.module('bby-query-mixer.productSearch', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/productSearch', {
            templateUrl: 'productSearch/productSearch.html',
            controller: 'ProductSearchCtrl'
        });
    }]
);
