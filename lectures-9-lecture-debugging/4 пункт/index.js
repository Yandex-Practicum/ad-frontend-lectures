    document.getElementById('runButton').addEventListener('click', function () {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let sum = 0;

      // Цикл для подсчета суммы чисел
      for (let i = 0; i <= numbers.length; i++) { 
        sum += numbers[i]; 
      }

      // Вывод результата
      document.getElementById('output').innerHTML = `<p class="output">Сумма чисел: ${sum}</p>`;
    });

