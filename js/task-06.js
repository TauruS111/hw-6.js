//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),//
//перевіряє його вміст щодо правильної кількості введених символів.//

//<input//
  //type="text"//
  //id="validation-input"//
  //data-length="6"//
  //placeholder="Please enter 6 symbols"//
///>//

//Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.//
//Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.//
//Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.//

//#validation-input {//
  //border: 3px solid #bdbdbd;//
//}//

//#validation-input.valid {//
  //border-color: #4caf50;//
//}//

//#validation-input.invalid {//
  //border-color: #f44336;//
//}//




// Створення змінной
const validationInput = document.querySelector('#validation-input');

// Оновлення стилю коли input втрачая focus
validationInput.addEventListener('blur', function() {
  const length = Number(validationInput.getAttribute('data-length'));
  const value = validationInput.value;

  if (value.length === length) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
