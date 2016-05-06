'use strict';

var angular = require('angular');
require('angular-route');
require('checklist-model');

var app = angular.module('pxlMstr', ['ngRoute', 'checklist-model']);

//CONTROLLER
require(__dirname + '/services/auth-service.js')(app);
// require(__dirname + '/services/refresh-service.js')(app);
require(__dirname + '/directives/app-directives.js')(app);
require(__dirname + '/controller/user-controller.js')(app);
require(__dirname + '/controller/board-controller.js')(app);

//ANGULAR ROUTER
app.config(['$routeProvider', function(routeProvider){
  routeProvider
    .when('/home', {
      templateUrl: './views/home.html'
    })
    .when('/board', {
      templateUrl: './views/boardselect.html'
    })
}]);
