var todoList = angular.module('todoList', []);

todoList.controller('todoListCtrl', function ($scope, $http) {
  $scope.todos = [
  ];
  
  $http.get('/todo').success(function(data) {
    $scope.todos = data;
  });
  
  $scope.move = function(index, direction){
    
    if (direction === 'up') {
      if (index === 0) {
        return;
      }
      index = index - 1;
    }
    
    if (direction === 'down') {
      if (index === $scope.todos.lenght - 1) {
        return;
      }
    }
    
    var todo = $scope.todos[index];
    $scope.todos.splice(index + 2, 0, todo);
    $scope.todos.splice(index, 1);
  }
  
});

