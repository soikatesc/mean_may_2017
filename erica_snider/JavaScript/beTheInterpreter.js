
// // PROBLEM
// var hello = "interesting";
// function example() {
//   var hello = "hi!";
//   console.log(hello);
// }
// example();
// console.log(hello);
//
// // ANSWER
// //declarations get hoisted
// var hello;
// function example() {
//   var hello;
//   hello = "hi";
//   console.log(hello);
// }
// //assignments and invocation maintain order
// hello = "interesting";
// example();
// console.log(hello);



// // PROBLEM
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);
//
// // prints:
// // undefined
// // Yipee I was first!
//
//
// // ANSWER
// var first_variable;
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// first_variable = "Yipee I was first!";
// console.log(first_variable);
//
// // prints:
// // Yippe I was first!



// // PROBLEM
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);
//
// // prints:
// // half-chicken
// // gone
// // Chicken
//
//
// // ANSWER
// var food;
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// food = "Chicken";
// eat();
// console.log(food);
//
// // prints:
// // half-chicken
// // gone
// // Chicken



// // PROBLEM
// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);
//
// // prints:
// // NEW!
// 
// // ANSWER
// var new_word;
// function lastFunc() {
//   new_word = "old";
// }
// new_word = "NEW!";
// console.log(new_word);
