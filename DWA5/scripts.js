// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-form='data-form']");
  const resultElement = document.querySelector("[data-result='data-result']");


  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dividendInput = document.querySelector("input[name='dividend']");
    const dividerInput = document.querySelector("input[name='divider']");

    const dividend = parseFloat(dividendInput.value);
    const divider = parseFloat(dividerInput.value);

    if (isNaN(dividend) || isNaN(divider)) {
      replaceScreenWithError("Something critical went wrong. Please reload the page");
      console.error("Invalid input provided");
      return;
    }

    if (divider < 0) {
      displayError("Division not performed. Invalid number provided. Try again");
      console.error("Division by a negative number");
      return;
    }

    if (!dividendInput.value || !dividerInput.value) {
      displayError("Division not performed. Both values are required in inputs. Try again");
      console.error("Missing input values");
      return;
    }

    const result = Math.floor(dividend / divider);
    resultElement.textContent = result.toString();
  });

  function displayError(message) {
    resultElement.textContent = message;
  }

  function replaceScreenWithError(errorMessage) {
    document.body.innerHTML = `<h1>Error</h1><p>${errorMessage}</p>`;
    console.error(errorMessage);
  }
});
