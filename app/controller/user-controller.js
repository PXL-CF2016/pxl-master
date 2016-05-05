'use strict';

module.exports = function(app) {
  app.controller('UserController', ['$http', 'AuthService', '$location', function($http, AuthService, $location) {
    const userRoute = 'http://ec2-52-37-2-103.us-west-2.compute.amazonaws.com/api/v1.0/registration/';
    const self = this;
    self.users = ['user'];
    self.submit = function() {
      if(self.users) {
        self.users.push(self.users);
        self.users = '';
      }
    };
    // GET USER
    self.getUser = function() {
      $http.get(userRoute)
        .then((result) => {
          self.users = result.data;
        }, (error) => {
          return error;
        });
    };
    // UPDATE USER
    self.updateUser = function(user) {
      $http.put(userRoute, user.id, {
        headers: AuthService.getToken()
      })
      .then((result) => {
        self.users = self.users.map((u) => {
          if(u.id === user.id) {
            return user;
          } else {
            return u;
          }
        });
      });
    };
    // REMOVE USER
    self.removeUser = function(user) {
      $http.delete(userRoute, user.id, {
        headers: AuthService.getToken()
      })
      .then((result) => {
        self.users = self.users.filter((u) => u.id !=u.id);
      });
    };
    // SIGN UP
    self.createUser = function(user) {
      AuthService.createUser(user, (err, res) => {
        if(err) return console.log(err);
        console.log('hitting ' + res);
      });
    };
    // LOGIN
    self.login = function(user) {
      AuthService.signIn(user, (err, res) => {
        if(err) return console.log(err);
        console.log('Login res.body: ' + angular.toJson(res.body));
        console.log('Login res: ' + angular.toJson(res));
        $location.path('/dashboard');
      });
    };
  }]);
};
