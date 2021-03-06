'use strict';
module.exports = function(app) {

  app.directive('userProfile', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/user-profile.html'
    };
  });

  app.directive('home', function() {
    return {
      restrict: 'E',
      templateUrl: './views/home.html'
    };
  });

  app.directive('userSignin', function() {
    return {
      restrict: 'E',
      templateUrl: './views/signin.html'
    };
  });

  app.directive('userCreateAccount', function() {
    return {
      restrict: 'E',
      templateUrl: './views/createaccount.html'
    };
  });

  app.directive('fileModel', ['$parse', function($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function() {
          scope.$apply(function() {
            modelSetter(scope, element[0].files[0]);
          });
        });
      }
    };
  }]);

  app.directive('customNav', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/tabs.html',
      controller: function() {
        this.tab = 1;
        this.isSet = function(check) {
          return this.tab === check;
        };
        this.setTab = function(active) {
          this.tab = active;
        };
      },
      controllerAs: 'tabCtrl'
    };
  });
};
