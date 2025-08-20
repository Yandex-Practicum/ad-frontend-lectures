import { getUsers, addUser } from "./data.js";
import { displayUsers } from "./ui.js";

// Инициализация приложения
document.addEventListener("DOMContentLoaded", () => {
  // Отображаем пользователей при загрузке страницы
  displayUsers(getUsers());

  // Добавление нового пользователя
  document.getElementById("add-user-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name-input").value;
    const age = parseInt(document.getElementById("age-input").value);
    addUser(name, age); // Добавляем пользователя
    displayUsers(getUsers()); // Обновляем интерфейс
  });
});