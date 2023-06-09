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

    //If the inputs are not a number then the screen should show an error across the screen
    if (isNaN(dividend) || isNaN(divider)) {
      replaceScreenWithError("Something critical went wrong. Please reload the page");
      console.error("Invalid input provided");
      return;
    }
    //When a divider is less than 0 which in this case is negative
    if (divider < 0) {
      displayError("Division not performed. Invalid number provided. Try again");
      console.error("Division by a negative number");
      return;
    }
    //When the input is empty
    if (!dividendInput.value || !dividerInput.value) {
      displayError("Division not performed. Both values are required in inputs. Try again");
      console.error("Missing input values");
      return;
    }
    //Used to convert a decimal form into a whole number
    const result = Math.floor(dividend / divider);
    resultElement.textContent = result.toString();
  });

  function displayError(message) {
    resultElement.textContent = message;
  }

  //Used html and css styling
  function replaceScreenWithError(errorMessage) {
    document.body.innerHTML = `
      <style>
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }
      </style>
      <div class="error-container">
        <h1>Error</h1>
        <p>${errorMessage}</p>
      </div>
    `;
    console.error(errorMessage);
  }
  
});
