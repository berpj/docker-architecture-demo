'use strict';

angular.module('webApp.services', []).
factory('APIservice', function($http, ENV) {
  
  var APIservice = {};
  
  APIservice.getTodos = function() {
    return $http({
      method: 'GET',
      url: ENV.apiUrl + '/todos.json'
    });
  };
  
  APIservice.postTodo = function(todo) {
    return $http({
      method: 'POST',
      url: ENV.apiUrl + '/todos.json',
      headers: {
        'Content-Type': 'application/json'
      },
      data: { todo }
    });
  };
  
  return APIservice;
});
