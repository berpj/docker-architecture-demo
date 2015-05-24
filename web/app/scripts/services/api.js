'use strict';

angular.module('webApp.services', []).
factory('APIservice', function($http) {
  
  var APIservice = {};
  
  APIservice.getTodos = function() {
    return $http({
      method: 'GET', 
      //url: 'http://app:3000/todos.json'
      url: 'http://192.168.99.100:3000/todos.json'
    });
  };
  
  APIservice.postTodo = function(todo) {
    return $http({
      method: 'POST', 
      //url: 'http://app:3000/todos.json'
      url: 'http://192.168.99.100:3000/todos.json',
      headers: {
        'Content-Type': 'application/json'
      },
      data: { todo }
    });
  };
  
  return APIservice;
});
