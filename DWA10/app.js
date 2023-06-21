const updateCounterValue = () => {
    const number = document.querySelector('sl-input[data-key="number"]');
    if (number) {
  
    }
  };
  
  const subtract = document.querySelector('sl-button[data-key="subtract"]');
  const add = document.querySelector('sl-button[data-key="add"]');
  const reset = document.querySelector('sl-button[data-key="reset"]');
  
  const subtractHandler = () => {
    const number = document.querySelector('sl-input[data-key="number"]');
    if (number) {
      const newValue = parseInt(number.value) - 1;
      number.value = newValue;
    }
  };
  
  const addHandler = () => {
    const number = document.querySelector('sl-input[data-key="number"]');
    if (number) {
      const newValue = parseInt(number.value) + 1;
      number.value = newValue;
    }
  };
  
  const resetHandler = () => {
    const number = document.querySelector('sl-input[data-key="number"]');
    if (number) {
      number.value = 0;
    }
  };
  
  subtract.addEventListener('click', subtractHandler);
  add.addEventListener('click', addHandler);
  reset.addEventListener('click', resetHandler);
  