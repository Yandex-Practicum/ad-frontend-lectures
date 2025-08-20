    // Пример 1: Синтаксическая ошибка
    document.getElementById('syntaxErrorButton').addEventListener('click', function () {
      try {
        eval("console.log('Hello world';"); // Пропущена закрывающая скобка
      } catch (error) {
        document.getElementById('syntaxErrorOutput').innerHTML = `<div class="error">Ошибка: ${error.message}</div>`;
      }
    });

    // Пример 2: Логическая ошибка
    document.getElementById('logicalErrorButton').addEventListener('click', function () {
      const numbers = [1, 2, 3, 4, 5];
      let sum = 0;

      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * 0; // Логическая ошибка: умножение на 0
      }

      document.getElementById('logicalErrorOutput').innerHTML = `<p>Сумма чисел: ${sum}</p>`;
    });

    // Пример 3: Ошибка времени выполнения
    document.getElementById('runtimeErrorButton').addEventListener('click', function () {
      try {
        const user = null;
        console.log(user.name); // Ошибка времени выполнения: обращение к свойству null
      } catch (error) {
        document.getElementById('runtimeErrorOutput').innerHTML = `<div class="error">Ошибка: ${error.message}</div>`;
      }
    });
