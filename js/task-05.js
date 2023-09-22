//Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),//
//підставляє його поточне значення в span#name - output.//
//Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".//

//<input type="text" id="name-input" placeholder="Please enter your name" />//
//<h1>Hello, <span id="name-output">Anonymous</span>!</h1>//





// Створення змінних
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Оновлює output коли input змінюється
nameInput.addEventListener('input', function() {
  const value = nameInput.value.trim();
  nameOutput.textContent = value ? value : 'Anonimo';
});
