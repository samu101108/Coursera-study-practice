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
        var s = $scope.plate;
        // var nonAlpha = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        //   console.log("nonAlpha = " + nonAlpha);
        // var nonSpace= nonAlpha.replace(/\s/g," ");
        //   console.log("nonSpace = " + nonSpace);
        // s = nonSpace;
        // s = nonAlpha;
        s = s.split(",");
          // console.log("split = " + s);
          // console.log(s.length);
        if (s.length <= 3){
        $scope.message = "It is just a bit.";
        var quantity = $scope.message;
      }
        else {
          $scope.message = "It is much!";
          var quantity = $scope.message;
        }
        return quantity;
      };
    });
})();
