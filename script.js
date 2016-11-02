// Code goes here

// MODULE
var computerApp = angular.module('computerApp', ['ngRoute']);

//Configure Routes
computerApp.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl:"main.html",
    controller:"MainController"
  })
   .when("/services",{
    templateUrl:"services.html",
    controller:"ServiceController"
  })
   .when("/about",{
    templateUrl:"about.html",
    controller:"AboutController"
  })
   .when("/contact",{
    templateUrl:"contact.html",
    controller:"ContactController"
  })
  .otherwise({redirectTo:"/main"})
});

//Controllers
computerApp.controller("MainController",['$scope','$http',function($scope,$http){
  console.log("This is main controller");
   $http.get('services.json').then(function(response){
    $scope.services=response.data;
  });
}]);
computerApp.controller("ServiceController",['$scope','$http',function($scope,$http){
  console.log("This is Service controller");
  $http.get('services.json').then(function(response){
    $scope.services=response.data;
  });
}]);
computerApp.controller("AboutController",['$scope',function($scope){
  console.log("This is About controller");
  
}]);
computerApp.controller("ContactController",['$scope','$http',function($scope,$http){
  $http.get('location.json').then(function(response){
    $scope.location=response.data;
  });
  
}]);