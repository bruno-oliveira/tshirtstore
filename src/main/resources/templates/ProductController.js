var app = angular.module('demo', []);



app.controller('ProductController', function($scope, $http) {
    $http.get('http://localhost:8090/showAllProducts').
        then(function(response) {
            $scope.prods = response.data;
        });
      $scope.remove = function (x) {
            alert($scope.prods[x].product_id);
             const url = new URL('deleteProduct/', 'http://localhost:8090/');
                        url.pathname=url.pathname+$scope.prods[x].product_id;
                        console.log("URL is "+url.href);
                         $http.delete(url.href).then(alert("Item removed"));
            $scope.prods.splice(x, 1);
        }
});