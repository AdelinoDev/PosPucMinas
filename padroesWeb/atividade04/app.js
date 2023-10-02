// Model
const model = {
  todos: [], // local storage, db
  addTodo: function (todo) {
    this.todos.push(todo);
  },
  deleteTodo: function (index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1); // Remove a tarefa na posição 'index' do array 'todos'
    }
  },
};

// View
const view = {
  todoList: document.getElementById("todo-list"),
  renderTodo: function (todo, index) {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Adiciona um evento de clique ao botão "Delete" que chama o método controller.deleteTodo(index)
    deleteButton.addEventListener("click", function () {
      controller.deleteTodo(index);
    });

    todoItem.appendChild(deleteButton);
    this.todoList.appendChild(todoItem);
  },
  clearTodoList: function () {
    this.todoList.innerHTML = ""; // Limpa a lista de tarefas no DOM
  },
};

// Controller
const controller = {
  init: function () {
    const todoForm = document.getElementById("todo-form");
    todoForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const todoInput = document.getElementById("todo-input");
      const todo = todoInput.value;
      if (todo.trim() !== "") {
        model.addTodo(todo); // Adiciona a tarefa ao modelo
        view.clearTodoList(); // Limpa a lista de tarefas no DOM
        controller.renderTodos(); // Renderiza novamente a lista de tarefas atualizada
        todoInput.value = "";
      }
    });
    this.renderTodos();
  },
  renderTodos: function () {
    model.todos.forEach(function (todo, index) {
      view.renderTodo(todo, index); // Renderiza cada tarefa na visualização
    });
  },
  deleteTodo: function (index) {
    model.deleteTodo(index); // Remove a tarefa do modelo
    view.clearTodoList(); // Limpa a lista de tarefas no DOM
    this.renderTodos(); // Renderiza novamente a lista de tarefas atualizada
  },
};

controller.init(); // Inicializa o controlador e a aplicação

