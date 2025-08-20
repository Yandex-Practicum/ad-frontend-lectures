// Центральное хранилище данных
const store = {
  todos: ["Купить продукты", "Помыть посуду"], // Начальные данные
};

// Функция для получения задач
export function getTodos() {
  return store.todos;
}

// Функция для добавления задачи
export function addTodo(task) {
  store.todos.push(task);
}

// Функция для получения количества задач
export function getTaskCount() {
  return store.todos.length;
}