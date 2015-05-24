'use strict';

/**
* @ngdoc function
* @name webApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the webApp
*/
angular.module('webApp')
.controller('MainCtrl', function ($scope, APIservice) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  
  var self = this;
  $scope.todosList = [];
  
  function sendTodo(todo) {
    APIservice.postTodo(todo).then(function() {
      APIservice.getTodos().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.todosList = response;
      });
    });
  }
  
  self.sendTodo = sendTodo;
  
  function submit() {
    console.log('submit function');
    
    var todo = {
      title: $scope.todo.title,
      description: $scope.todo.description
    };
    
    self.sendTodo(todo);
  }
  
  $scope.submit = submit;
  
  APIservice.getTodos().success(function (response) {
    //Dig into the responde to get the relevant data
    $scope.todosList = response;
  });
});