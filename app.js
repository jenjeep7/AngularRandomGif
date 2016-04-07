
var app = angular.module("gifApp", []);

app.controller('CallController', function($scope, $http){
  $scope.buttonClicked= false;
  $scope.randomGif = {};

  $scope.getGif = function(){


    $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').then(function(response){
      $scope.buttonClicked=true;
      console.log("works");
      $scope.randomGif= response.data.data;



    });
  };

});
