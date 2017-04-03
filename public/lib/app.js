var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('');

  $routeProvider

  .when("/", {
    templateUrl: "shop.html",
    controller: "mainController"
  })

  .when("/about", {
    templateUrl: "about.html",
    controller: "mainController"
  })

  .when("/learn", {
    templateUrl: "learn.html",
    controller: "secondController"
  })

  .when("/product", {
    templateUrl: "product.html",
    controller: "mainController"
  });

}]);

myApp.service("currentProduct", function(){

});




myApp.controller("mainController", ["$scope", "$http", "currentProduct", function($scope, $http, currentProduct){

  $http.get("/search")
    .then(function successCallback(response) {
      $scope.results = response.data;
    }, function errorCallback(data, status){
      console.log(data);
    });

  $scope.myFilter = function(result) {
     var newSearch = new RegExp($scope.search, "i");
     if(newSearch.test(result.name) || newSearch.test(result.description)){
       return true;
     }
  }

  $scope.currentProduct = currentProduct.result;

  $scope.show = function(){
    currentProduct.result = this.result;
  }



}]);

myApp.controller("secondController", ["$scope", "$sce", function($scope, $sce){

  $scope.currentVideo = 0;
  $scope.videos = ["https://www.youtube.com/embed/F5KgsubkMCA", "https://www.youtube.com/embed/N7KopjbzxjE", "https://www.youtube.com/embed/c3WvgD6wiTA", "https://www.youtube.com/embed/Qm9gUa5VXm4", "https://www.youtube.com/embed/j_I83dlNUWg", "https://www.youtube.com/embed/TFhQ6kdDmfE"];
  $scope.videos[$scope.currentVideo] = $sce.trustAsResourceUrl($scope.videos[$scope.currentVideo]);

  $scope.next = function (){
    $scope.currentVideo ++;
    if($scope.currentVideo > $scope.videos.length - 1){
      $scope.currentVideo = 0;
    }
    $scope.videos[$scope.currentVideo] = $sce.trustAsResourceUrl($scope.videos[$scope.currentVideo]);
  }

  $scope.back = function (){
    $scope.currentVideo --;
    if($scope.currentVideo < 0){
      $scope.currentVideo = $scope.videos.length - 1;
    }
    $scope.videos[$scope.currentVideo] = $sce.trustAsResourceUrl($scope.videos[$scope.currentVideo]);
  }


}]);
