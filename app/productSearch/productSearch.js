'use strict';

angular.module('bby-query-mixer.productSearch').controller('ProductSearchCtrl', [
    '$scope',
    'categoryConfig',
    '$http',
    function ($scope, categoryConfig, $http) {
        $scope.categories = angular.copy(categoryConfig);
        $scope.category = $scope.categories[0];
        $scope.sortBy = 'none';
        $scope.sortOrder = 'asc';

        $scope.buildRemixQuery = function () {
            var baseUrl = 'https://api.remix.bestbuy.com/v1/products' + ($scope.category.value ? '(categoryPath.id=' + $scope.category.value + ')' : '');
            return baseUrl + $scope.buildParams();
        };

        $scope.buildParams = function () {
            var paramArgs = [];

            if ($scope.apiKey) {
                paramArgs.push('apiKey=' + $scope.apiKey);
            }

            if ($scope.sortBy && $scope.sortBy != 'none') {
                paramArgs.push('sort=' + $scope.sortBy + '.' + $scope.sortOrder);
            }

            paramArgs.push('format=json');

            if (paramArgs.length > 0) {
                return '?' + paramArgs.join('&');
            } else {
                return '';
            }
        };

        $scope.showOptions = [
            { text: 'SKU', value: 'SKU' },
            { text: 'name', value: 'name' },
            { text: 'price', value: 'price' },
            { text: 'description', value: 'description' },
            { text: 'weight', value: 'weight' },
            { text: 'sale price', value: 'sale price' },
            { text: 'batteries included', value: 'batteries included' },
            { text: 'customer review average', value:'customer review average' }
        ];

        $scope.option = {
            showOptions: ['SKU', 'name']
        };

        $scope.showOpts = function () {
            console.log($scope.option.showOptions);
        };

    }
]);