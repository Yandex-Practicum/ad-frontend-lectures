// Массив пользователей
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];

// Функция для получения всех пользователей
export function getUsers() {
  return users;
}

// Функция для добавления нового пользователя
export function addUser(name, age) {
  const newUser = { id: users.length + 1, name, age };
  users.push(newUser);
}