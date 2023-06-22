// Actions
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case SUBTRACT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}

// Store
const store = Redux.createStore(counterReducer);

// Subscriber (Console Logger)
function consoleLogger() {
  const newState = store.getState();
  console.log('New state:', newState);
}

// Subscribe the console logger to the store
store.subscribe(consoleLogger);

// Scenario 1: Increment the counter by one
console.log('Scenario 1:');
console.log('Initial state:', store.getState()); // Expected: { count: 0 }

// Scenario 2: Increment the counter by one
console.log('Scenario 2:');
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });
// Expected console output:
// New state: { count: 2 }

// Scenario 3: Increment the counter by one
console.log('Scenario 3:');
store.dispatch({ type: SUBTRACT });
// Expected console output:
// New state: { count: 1 }

// Scenario 4: Resetting the Tally Counter
console.log('Scenario 4:');
store.dispatch({ type: RESET });
// Expected console output:
// New state: { count: 0 }
