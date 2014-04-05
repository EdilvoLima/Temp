function TodoCtrl($scope){
	//Initialize list of todos
	$scope.todos = [
		{done: true, text: 'first'},
		{done: false, text: 'second'}
	];

	// Function to add new Todo
	$scope.addTodo = function() {
		var newTodo = {
			done: false,
			text: $scope.todoText
		};
		$scope.todos.push(newTodo);
		$scope.todoText = '';
	};
	$scope.removeTodos = function(start){
		$scope.todos.splice(start, 1);
	};
}

