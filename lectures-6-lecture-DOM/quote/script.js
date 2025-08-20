// Массив с цитатами
const quotes = [
    {text: "Всё, что нас не убивает, делает нас сильнее.", author: "Фридрих Ницше"},
    {text: "Не важно, как медленно ты продвигаешься, главное — не останавливаться.", author: "Конфуций"},
    {text: "Дорогу осилит идущий.", author: "Народная мудрость"},
    {text: "Лучший способ предсказать будущее — создать его.", author: "Питер Друкер"},
    {text: "Будь собой, все остальные роли уже заняты.", author: "Оскар Уайльд"},
    {
        text: "Успех — это способность терпеть поражение за поражением без потери энтузиазма.",
        author: "Уинстон Черчилль"
    },
    {text: "Ты должен быть тем изменением, которое хочешь видеть в мире.", author: "Махатма Ганди"},
    {text: "Самое трудное в жизни — это решить, какой мост нужно перейти, а какой сжечь.", author: "Дэвид Рассел"},
    {text: "Жизнь — это то, что с тобой происходит, пока ты строишь другие планы.", author: "Джон Леннон"},
    {text: "Только тот, кто попробует, совершит открытие.", author: "Альберт Эйнштейн"},
    {text: "Если ты можешь мечтать об этом, ты можешь это сделать.", author: "Уолт Дисней"},
    {text: "Никогда не позволяй страху сделать первый шаг.", author: "Роберт Х. Шуллер"},
    {text: "Ты никогда не поймёшь, на что способен, пока не попробуешь.", author: "Марк Твен"},
    {text: "Чтобы дойти до цели, надо прежде всего идти.", author: "Оноре де Бальзак"},
    {
        text: "Счастье — это когда то, что ты думаешь, говоришь и делаешь, находится в гармонии.",
        author: "Махатма Ганди"
    },
    {text: "Все наши мечты могут стать реальностью, если у нас хватит смелости их осуществить.", author: "Уолт Дисней"},
    {text: "Не бойся идти медленно, бойся стоять на месте.", author: "Китайская пословица"},
    {text: "Ты становишься тем, о чем больше всего думаешь.", author: "Будда"},
    {text: "Самое важное — не переставать задавать вопросы.", author: "Альберт Эйнштейн"},
    {text: "Секрет успеха — это постоянство цели.", author: "Бенджамин Дизраэли"},
    {
        text: "Только тот достоин жизни и свободы, кто каждый день за них готов биться.",
        author: "Иоганн Вольфганг фон Гёте"
    },
    {text: "Если ты хочешь жить счастливо, привяжи себя к цели, а не к людям или вещам.", author: "Альберт Эйнштейн"},
    {text: "Самая большая слабость — это колебание; самая большая сила — это решимость.", author: "Джозеф Ротшильд"},
    {text: "Единственный способ сделать отличную работу — любить то, что ты делаешь.", author: "Стив Джобс"},
    {text: "Ты можешь всё, если веришь в себя.", author: "Маргарет Тэтчер"},
    {
        text: "Сделай сегодня то, что другие не хотят, завтра будешь жить так, как другие не могут.",
        author: "Джаред Лето"
    },
    {text: "Лучший способ начать — это прекратить говорить и начать делать.", author: "Уолт Дисней"},
    {text: "Кто владеет информацией, тот владеет миром.", author: "Наполеон Хилл"},
    {text: "Ты всегда будешь тем, кем мог бы быть, только если начинаешь действовать.", author: "Джордж Бернард Шоу"},
    {text: "Успех — это сумма маленьких усилий, повторяемых день за днем.", author: "Роберт Кольер"}
];

// DOM-элементы
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');
const addToFavoritesBtn = document.getElementById('add-to-favorites-btn');
const favoritesList = document.getElementById('favorites-list');
const clearFavoritesBtn = document.getElementById('clear-favorites-btn');
const favoriteTemplate = document.getElementById('favorite-template');


// Функция для генерации случайной цитаты
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];
    quoteText.textContent = `"${currentQuote.text}"`;
    quoteAuthor.textContent = `- ${currentQuote.author}`;
}

// Функция для добавления цитаты в избранное
function addQuoteToFavorites() {

    // Клонируем шаблон
    const templateClone = favoriteTemplate.content.firstElementChild.cloneNode(true);
    const favoriteText = templateClone.querySelector('.blockquote__text');
    const removeButton = templateClone.querySelector('.button_type_remove-quote');

    // Заполняем текст цитаты
    favoriteText.textContent = `${quoteText.textContent} ${quoteAuthor.textContent}`;

    // Добавляем обработчик для удаления цитаты
    removeButton.addEventListener('click', () => {
        templateClone.remove();
    });

    // Добавляем элемент в список избранных
    favoritesList.append(templateClone);
}

// Функция для очистки списка избранных цитат
function clearFavorites() {
    favoritesList.innerHTML = '';
}

// Обработчики событий
generateBtn.addEventListener('click', generateRandomQuote);
addToFavoritesBtn.addEventListener('click', addQuoteToFavorites);
clearFavoritesBtn.addEventListener('click', clearFavorites);

// Генерация первой цитаты при загрузке страницы
generateRandomQuote();