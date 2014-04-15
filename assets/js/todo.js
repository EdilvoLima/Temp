var todoList = angular.module('todo-list', []);
var url_default = 'http://localhost:1337/';
function TodoCtrl($scope) {
  $scope.todos = [
    {text:'learn angular', date:'2013-01-01', done:true},
    {text:'build an angular app', date:'2013-01-01', done:false}
    ];

  $scope.addTodo = function() {
      var newTodo = {
        done:false,
        text: $scope.todo_text,
        date: $scope.todo_date,
      };
    //$scope.todos.push({text:$scope.todo_text, date:$scope.todo_date, done:false});
    $scope.todos.push(newTodo);
    $scope.todo_Text = '';
    $scope.todo_Date = '';
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
  
  $scope.removeTodo = function(start){
    $scope.todos.splice(start, 1);
  }
  
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
  
};

