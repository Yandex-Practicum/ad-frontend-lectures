// Все данные хранятся в глобальной области видимости
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];

// Функция для отображения пользователей
function displayUsers() {
  const userList = document.getElementById("user-list");
  userList.innerHTML = ""; // Очищаем список
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} (${user.age} лет)`;
    userList.appendChild(li);
  });
}

// Функция для добавления нового пользователя
function addUser(name, age) {
  const newUser = { id: users.length + 1, name, age };
  users.push(newUser);
  displayUsers(); // Обновляем интерфейс
}

// Инициализация приложения
document.getElementById("add-user-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name-input").value;
  const age = document.getElementById("age-input").value;
  addUser(name, parseInt(age));
});

 displayUsers();