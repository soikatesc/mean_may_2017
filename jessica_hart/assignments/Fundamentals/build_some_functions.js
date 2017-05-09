// Make a function that when invoked will console.log('I am running!');
function runningLogger() {
  console.log('I am running!');
}

// Make a function that  multiplies the value of a parameter by 10 before returning the result.
// Give it the name multiplyByTen. Invoke it, passing it the argument 5.
function multiplyByTen(num) {
  return num * 10;
}
console.log(multiplyByTen(5));

// Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string.
function stringReturnOne() {
  return "Super string one.";
}
function stringReturnTwo() {
  return "Super string two.";
}

// Write a function named caller. If the argument provided to caller is a function, invoke it.
function caller(param) {
  if (typeof(param) == 'function') param();
}

// Write a function named myDoubleConsoleLog that has two parameters. if the arguments passed to the function are functions, console.log the value that each function returns when invoked.
function myDoubleConsoleLog(param1, param2) {
  if (typeof(param1) == 'function' && typeof(param2) == 'function'){
    console.log(param1(), param2());
  }
}
