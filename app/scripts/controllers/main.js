'use strict';

angular.module('uploadApp')
  .controller('MainCtrl', function ($scope, $http) {//, $location) {
    $http.get('scripts/files.json').success(function(data) {
      $scope.files = data.files;
    });
    $http.get('scripts/users.json').success(function(data) {
      $scope.users = data;
    });
    $scope.theTime = function() {
      var time;
      var date = new Date();
      time = date.getHours()*3600;
      time += date.getMinutes()*60;
      time += date.getSeconds();
      return time;
    };
    $scope.maxTime = function() {
      return 86400;
    };
    $scope.percentage = function(a, b) {
      return Math.round((a/b)*100);
    };
    $scope.usage = function() {
      //var value = Math.floor((Math.random() * 100) + 1);
      var type, value=50;

      if (value < 25) {
        type = 'success';
      } else if (value < 50) {
        type = 'info';
      } else if (value < 75) {
        type = 'warning';
      } else {
        type = 'danger';
      }

      //$scope.showWarning = (type === 'danger' || type === 'warning');

      //$scope.dynamic = value;
      $scope.type = type;
    };
    $scope.foo = 0;
    console.log('fooooooooo!');
    $scope.selectedFile = false;

    $scope.test = function(file) {
      console.log('haaardogay desu!');
      console.log(file);
    };
    $scope.toggleSelect = function(file) {
      console.log('bidibidi');
      if(file === $scope.selectedFile) {
        console.log('null');
        $scope.selectedFile = null;
      } else {
        console.log('file');
        $scope.selectedFile = file;
      }
    };
//    $scope.preview = function(file) {
      //$location.path = 'preview/' + file;
//      $scope.selectedFile = file;
//    };
    $scope.exists = function(url) {
      if(url){
        var req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.send();
        return req.status===200;
      } else {
        return false;
      }
    };
    $scope.readable = function(size, pr) {
      pr = typeof pr !== 'undefined' ? pr : 1;
      pr = Math.pow(10,pr);
      var kB = Math.pow(1024,1);
      var MB = Math.pow(1024,2);
      var GB = Math.pow(1024,3);
      var TB = Math.pow(1024,4);
      //psize = size*10;
      if (size < kB) {
        size = size + ' B';
      }
      if (size > kB && size < MB) {
        size = (Math.round((size*pr)/kB))/pr + ' kB';
      }
      if (size > MB && size < GB) {
        size = (Math.round((size*pr)/MB))/pr + ' MB';
      }
      if (size > GB && size < TB) {
        size = (Math.round((size*pr)/GB))/pr + ' GB';
      }

      return size;
    };
  });
