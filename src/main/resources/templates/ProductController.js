angular.module('demo', [])
.controller('ProductController', function($scope, $http) {
    $http.get('http://localhost:8090/showAllProducts').
        then(function(response) {
            $scope.prods = response.data;
            alert($scope.prods[0].name);
        });
});