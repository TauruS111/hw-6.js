//Напиши скрипт створення і очищення колекції елементів.//
 //Користувач вводить кількість елементів в input і натискає кнопку Створити,//
 //після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.//

//<div id="controls">
  //<input type="number" min="1" max="100" step="1" />//
  //<button type="button" data-create>Create</button>//
  //<button type="button" data-destroy>Destroy</button>//
//</div>//

//<div id="boxes"></div>//

  //Створи функцію createBoxes(amount), яка приймає один параметр - число. 
  //Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.//

//Розміри найпершого <div> - 30px на 30px.//
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.//
//Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй //
//готову функцію getRandomHexColor для отримання кольору.//

//Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.//

// ФУНКЦІЯ
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//  Створення змінних
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBoxes = controls.querySelector('[data-create]');
const destroyBoxes = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Створенн BOX
createBoxes.addEventListener('click', function() {
  const amount = Number(input.value);
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes); 
});

// Видалення BOX
destroyBoxes.addEventListener('click', function() {
  boxesContainer.innerHTML = '';
  });



