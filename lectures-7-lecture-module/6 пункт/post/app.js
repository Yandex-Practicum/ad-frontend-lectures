import { addTodo, getTodos } from "./store.js";
import { displayTodos } from "./ui.js";

  // Добавление новой задачи
  document.getElementById("add-todo-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const task = document.getElementById("task-input").value;
    addTodo(task); // Добавляем задачу в хранилище
    displayTodos(); // Обновляем интерфейс
  });

    // Отображаем задачи при загрузке страницы
  displayTodos();