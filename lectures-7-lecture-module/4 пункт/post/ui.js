// Функция для отображения пользователей
export function displayUsers(users) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = ""; // Очищаем список
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} (${user.age} лет)`;
    userList.appendChild(li);
  });
}