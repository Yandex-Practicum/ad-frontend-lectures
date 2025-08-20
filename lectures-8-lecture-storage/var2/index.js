// Получаем ссылки на элементы DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Загружаем задачи из localStorage или создаем пустой массив
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Функция для отображения задач
function renderTasks() {
  taskList.innerHTML = ''; // Очищаем список
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    // Создаем кнопку для удаления задачи
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => {
      tasks.splice(index, 1); // Удаляем задачу из массива
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Обновляем localStorage
      renderTasks(); // Перерисовываем список
    };

    li.appendChild(deleteButton); // Добавляем кнопку в элемент списка
    taskList.appendChild(li); // Добавляем задачу в список
  });
}

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push(taskText); // Добавляем задачу в массив
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Сохраняем в localStorage
    taskInput.value = ''; // Очищаем поле ввода
    renderTasks(); // Перерисовываем список
  } else {
    alert('Введите задачу!');
  }
});
// Инициализация приложения
renderTasks();