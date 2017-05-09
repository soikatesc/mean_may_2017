// Rewrite the code to mimic how the interpreter would rearrange it before running.

// PROBLEM 1
// Declarations get hoisted
var first_variable
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
// Assignments and invocation maintain order
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);

// PROBLEM 2
// Declarations get hoisted
var food;
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";
  console.log(food);
}
// Assignments and invocation maintain order
food = "Chicken";
eat();
console.log(food);

// PROBLEM 3
// Declarations get hoisted
var new_word;
function lastFunc() {
  new_word = "old";
}
// Assignments and invocation maintain order
new_word = "NEW!";
console.log(new_word);
