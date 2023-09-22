const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//Напиши скрипт, який для кожного елемента масиву ingredients://

//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().//
//Додасть назву інгредієнта як його текстовий вміст.//
//Додасть елементу клас item.//
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.//

// Створення змінной з id "ingredients"
const ingredientsList = document.querySelector('#ingredients');

// Перебирання кожного інгредієнта у масиві «ingredients».
ingredients.forEach((ingredient) => {

  // Створення нового елемента <li>
  const listItem = document.createElement('li');

  // Додавання класу "item" елементу <li>
  listItem.classList.add('item');

  // Встановлення тексту елемента <li> для поточного інгредієнта
  listItem.textContent = ingredient;

  // Додавання <li> у <ul>
  ingredientsList.appendChild(listItem);
});