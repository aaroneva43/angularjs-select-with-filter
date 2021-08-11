(function () {
    var app = angular.module('Demo', ['AxelSoft']);

    app.controller('DemoController', ['$scope', '$timeout', '$q', function ($scope, $timeout, $q) {
        $scope.nestedItemsLevel1 = ['Item 1', 'Item 2', 'Item 3'];
        $scope.level1 = $scope.nestedItemsLevel1[0];
    }]);

})();