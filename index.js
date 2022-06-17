// - The `receivesAFunction` function should:

//   - take a _callback function_ as an argument
//   - call the callback function
//   - it doesn't matter what this function returns, so long as it calls the
//     callback function
function receivesAFunction(callback) {
  callback();
}

// - The `returnsANamedFunction` function should:

//   - take no arguments
//   - return a _named function_

function returnsANamedFunction() {
  return function fnName () {
    console.log("returns a named function");
  };
}

// - The `returnsAnAnonymousFunction` function should:
//   - take no arguments
//   - return an _anonymous function_

function returnsAnAnonymousFunction() {
  return function() {
    console.log("returns an anonymous function");
  };
}

