// Получаем ссылки на элементы DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Массив для хранения задач (временно в памяти)
let tasks = [];

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
      renderTasks(); // Перерисовываем список
    };

    li.appendChild(deleteButton); // Добавляем кнопку в элемент списка
    taskList.appendChild(li); // Добавляем задачу в список
  });
}

// Обработчик для кнопки "Добавить"
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push(taskText); // Добавляем задачу в массив
    taskInput.value = ''; // Очищаем поле ввода
    renderTasks(); // Перерисовываем список
  } else {
    alert('Введите задачу!');
  }
});

// Инициализация приложения
renderTasks();