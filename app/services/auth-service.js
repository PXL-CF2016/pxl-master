'use strict';

module.exports = function(app) {
  app.factory('AuthService', ['$http', '$window', function($http, $window) {
    var token;
    var url = 'http://ec2-52-37-2-103.us-west-2.compute.amazonaws.com/api/v1.0/';
    var auth = {
      createUser(user, cb){
        console.log('Grabbing user data: ' + user);
        cb || function(){};
        $http.post(url + 'registration/', {}, {
          headers: {
            'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
          }
        })
          .then((res) => {
            token = $window.localStorage.token = res.data.token;
            cb(null, res);
            console.log('This is the token: ' + token);
          }, (err) => {
            console.log('Error obj: ' + err);
            cb(err);
          });
      },
      getToken(){
        return token || $window.localStorage.token;
      },
      signOut(cb){
        token = null;
        $window.localStorage.token = null;
        if(cb) cb();
      },
      signIn(user, cb){
        console.log('Auth sign in: ' + angular.toJson(user));
        cb || function(){};
        $http.post(url + 'login/', {},{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
          }
        }).then((res) => {
          console.log('here' + res.body);
          token = $window.localStorage.token = res.data.token;
          cb(null, res);
        }, (err) => {
          console.log(err);
          cb(err);
        });
      }
    };
    return auth;
  }]);
};
