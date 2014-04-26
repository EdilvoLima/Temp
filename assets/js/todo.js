var todoList = angular.module('todoList', []);

todoList.controller('todoListCtrl', function ($scope, $http) {
  $scope.todos = [
  ];
  
  $http.get('/todo').success(function(data) {
    $scope.todos = data;
  });
  
});

