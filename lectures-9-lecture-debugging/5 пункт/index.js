    // Задание 1: Синтаксическая ошибка
    document.getElementById('syntaxErrorButton').addEventListener('click', function () {
      try {
        for (let i = 1; i <= 5; i++ { 
          console.log(i);
        }
      } catch (error) {
        document.getElementById('syntaxErrorOutput').innerHTML = `<div class="error">Ошибка: ${error.message}</div>`;
      }
    });

    // Задание 2: Логическая ошибка
    document.getElementById('logicalErrorButton').addEventListener('click', function () {
      const number = 4; // Четное число
      let isEven = false;

      if (number % 2 == 1) { 
        isEven = true;
      }

      document.getElementById('logicalErrorOutput').innerHTML = `<p class="output">Число ${number} ${isEven ? 'четное' : 'нечетное'}</p>`;
    });

    // Задание 3: Ошибка времени выполнения
    document.getElementById('runtimeErrorButton').addEventListener('click', function () {
      try {
        const user = {
          name: "Alice",
          age: 25,
          address: {
            city: "Wonderland"
          }
        };

        console.log(user.address.street); 
      } catch (error) {
        document.getElementById('runtimeErrorOutput').innerHTML = `<div class="error">Ошибка: ${error.message}</div>`;
      }
    });