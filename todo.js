function TodoCtrl($scope) {
  $scope.todos = [
    {text:'learn angular', date:'2013-01-01', done:true},
    {text:'build an angular app', date:'2013-01-01', done:false}];

  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, date:$scope.todoDate, done:false});
    $scope.todoText = '';
    $scope.todoDate = '';
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}