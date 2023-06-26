// scripts.js

const MAX_NUMBER = 30;
const MIN_NUMBER = -5;

const number = document.querySelector('sl-input[data-key="number"]');
const subtract = document.querySelector('sl-button[data-key="subtract"]');
const add = document.querySelector('sl-button[data-key="add"]');
const resetButton = document.getElementById('resetButton');
const counterValue = document.getElementById('counterValue');
const confirmationMessage = document.getElementById('confirmationMessage');

const subtractHandler = () => {
  const newValue = parseInt(number.value) - 1;
  number.value = newValue.toString();

  if (add.disabled === true) {
    add.disabled = false;
  }

  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};

const addHandler = () => {
  const newValue = parseInt(number.value) + 1;
  number.value = newValue.toString();

  if (subtract.disabled === true) {
    subtract.disabled = false;
  }

  if (newValue >= MAX_NUMBER) {
    add.disabled = true;
  }
};

const resetButtonHandler = () => {
  // Set the counter value to 0
  const reset = parseInt(0)
  const number_value = reset;

  for (let i = number_value; i <= 10; i++) {
    if (i <= 10) {
      number.value = reset
      alert('The counter has been reset.')
    } break
  };
};

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
resetButton.addEventListener('click', resetButtonHandler);
