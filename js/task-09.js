//Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на//
//button.change - color і виводить значення кольору в span.color.//

//<div class="widget">//
  //<p>Background color: <span class="color">-</span></p>//
  //<button type="button" class="change-color">Change color</button>//
//</div>//

//Для генерування випадкового кольору використовуй функцію getRandomHexColor.//




// Функція
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Створення змінних
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

//  backgroundColor
changeColorButton.addEventListener('click', function() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
});
