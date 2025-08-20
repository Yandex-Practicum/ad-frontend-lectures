import { getTodos, getTaskCount } from "./store.js";

// Функция для отображения задач
export function displayTodos() {
  const todoList = document.getElementById("todo-list");
  const countDisplay = document.getElementById("task-count");

  todoList.innerHTML = ""; // Очищаем список
  const todos = getTodos(); // Получаем задачи из хранилища
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  });

  // Отображаем количество задач
  countDisplay.textContent = `Общее количество задач: ${getTaskCount()}`;
}