'use strict';

module.exports=function(app) {
  app.controller('boardCtrl', ['$http', 'AuthService', '$scope',  function($http, AuthService, $scope) {
    const boardRoute = 'http://ec2-52-37-2-103.us-west-2.compute.amazonaws.com/api/v1.0/board_data/';

    $scope.selects = [
      'mlb',
      'nhl',
      'nfl',
      'headlines',
      'weather'
    ];
    $scope.checks = [];

    $scope.createJson = function() {
      var temp = {};
      $scope.selects.forEach(function(el) {
        if ($scope.checks.indexOf(el) != -1) {
          temp[el] = true;
        } else {
          temp[el] = false;
        };
      });
      temp.token=AuthService.getToken();
      console.log(temp);
      //Gives token to post request
      $http.post(boardRoute, temp)
      .then(function() {
        console.log("Board Data Request Sent");
      }, function(err) {
        console.log(err);
      });
    };
  }]);
}
