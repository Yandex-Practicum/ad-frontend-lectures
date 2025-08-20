// Файл app.js
const todos = ["Купить продукты", "Помыть посуду"]; // Глобальный массив задач
let taskCount = todos.length; // Отдельная переменная для количества задач

// Функция для отображения задач
function displayTodos() {
  const todoList = document.getElementById("todo-list");
  const countDisplay = document.getElementById("task-count");

  todoList.innerHTML = ""; // Очищаем список
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  });

  countDisplay.textContent = `Общее количество задач: ${taskCount}`;
}

// Функция для добавления задачи
function addTodo(task) {
  todos.push(task); // Добавляем задачу в массив
  taskCount++; // Увеличиваем счетчик задач
  displayTodos(); // Обновляем интерфейс
}

// Инициализация приложения
document.getElementById("add-todo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.getElementById("task-input").value;
  addTodo(task);
});

// Отображаем задачи при загрузке страницы
displayTodos();