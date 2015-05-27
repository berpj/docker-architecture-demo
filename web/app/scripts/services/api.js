'use strict';

angular.module('webApp.services', []).
factory('APIservice', function($http, $location) {
  
  var APIservice = {};
  
  APIservice.getTodos = function() {
    return $http({
      method: 'GET',
      url: 'http://' + location.host + ':3000/todos.json'
    });
  };
  
  APIservice.postTodo = function(todo) {
    return $http({
      method: 'POST',
      url: 'http://' + location.host + ':3000/todos.json',
      headers: {
        'Content-Type': 'application/json'
      },
      data: { todo }
    });
  };
  
  return APIservice;
});
