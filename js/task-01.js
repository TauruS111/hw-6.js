//Напиши скрипт, який:

//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.//
//Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку//
//елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).//
//Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.//

//В результаті, в консолі будуть виведені наступні повідомлення.//

//Number of categories: 3//

//Category: Animals//
//Elements: 4//

//Category: Products//
//Elements: 3//

//Category: Technologies//
//Elements: 5//


//const categoriesList = document.querySelector('#categories');

//const numberOfCategories = categoriesList.children.length;
//console.log('Number of categories:', numberOfCategories);

//const categories = document.querySelectorAll('.item');
//categories.forEach((category) => {
  
//const categoryName = category.querySelector('h2').textContent;
//const elements = category.querySelectorAll('li');

//const numberOfElements = elements.length;

  //console.log('Category:', categoryName);
  //console.log('Elements:', numberOfElements);
//});

// Створення змінной з id "categories"
const categoriesList = document.querySelector('#categories');

// Підрахунок кількості категорій
const numberOfCategories = categoriesList.children.length;

// Консоль кількості категорій
console.log('Number of categories:', numberOfCategories);

// Відбір усіх категорій
const categories = document.querySelectorAll('.item');

// Ітервція кожной категорій
categories.forEach((category) => {
  // Вибір  елементів <h2> у категорії
  const categoryName = category.querySelector('h2').textContent;

  // Вибір усіх елементів <li> в категорії
  const elements = category.querySelectorAll('li');

  // Підрахунок елементів
  const numberOfElements = elements.length;

  // Консоль категорій та кількість елементів
  console.log('Category:', categoryName);
  console.log('Elements:', numberOfElements);
});
