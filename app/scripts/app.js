'use strict';

angular.module('uploadApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('fallbackSrc', function () {
    var fallbackSrc = {
      link: function postLink(scope, iElement, iAttrs) {
        iElement.bind('error', function() {
          angular.element(this).attr('src', iAttrs.fallbackSrc);
        });
      }
    };
    return fallbackSrc;
  });
