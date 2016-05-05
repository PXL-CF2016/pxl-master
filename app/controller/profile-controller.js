'use strict';

module.exports = function(app) {
  app.controller('ProfileController', ['$http', '$scope', function($http, $scope) {
    const profileRoute = 'http://ec2-52-37-2-103.us-west-2.compute.amazonaws.com/api/v1.0/profiles/1/'
    $scope.profiles = ['profile'];
    $scope.editingProfile = false;
    $scope.newProfile = {};
    console.log('hit profile');

    $scope.getProfile = function() {
      $http.get(profileRoute)
        .then((result) => {
          $scope.profiles = result.data;
        }, function(error) {
          console.log(error);
        });
    };

    $scope.updateProfile = function(profile) {
      $http.put(profileRoute + profile.id)
        .then((result) => {
          $scope.profiles = $scope.profiles.map((p) => {
            if(p.id === profile.id) {
              return profile;
            } else {
              return p;
            }
          });
        });
    };

    $scope.editButtonShow = function() {
      $scope.editingProfile = true;
    };

    $scope.submit = function(profile) {
      if($scope.profiles) {
        $scope.profiles.push(this.profiles);
        $scope.profiles = '';
      }
    };
  }]);
};
