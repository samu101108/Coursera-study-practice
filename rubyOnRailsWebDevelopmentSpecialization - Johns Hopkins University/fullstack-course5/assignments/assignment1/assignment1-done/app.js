(function () {
  'use strict';
angular.module('LunchCheck', [])
  .controller('LunchCheckController', function ($scope) {
      $scope.plate = [];
      $scope.message = "";
      $scope.displayMessage = function () {
          var showMessage = isItMuch();
          $scope.message = showMessage;
      }
      function isItMuch(){
        // feijão, arroz, macarrão, carne
        var quantity = "";
        var s = $scope.plate;
        console.log("THIS IS: " + s);
        // var nonAlpha = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        //   console.log("nonAlpha = " + nonAlpha);
        // var nonSpace= nonAlpha.replace(/\s/g," ");
        //   console.log("nonSpace = " + nonSpace);
        // s = nonSpace;
        // s = nonAlpha;
        if (s.length < 1){
          $scope.message = "Please enter data first";
            quantity = $scope.message;
        }
        s = s.split(",");
          // console.log("split = " + s);
          // console.log(s.length);
          if(s.length >= 1  && s.length <= 3){
            $scope.message = "Enjoy!";
            quantity = $scope.message;
          }
          if (s.length > 3){
            $scope.message = "Too much!";
            quantity = $scope.message;
          }
console.log("quantity = " + quantity);
        return quantity;
      };
    });
})();
