// Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"].
// Log each value.
var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'];
for (var i = 0; i < x.length; i++) {
  console.log(x[i]);
}

// Add a new value (100) in the array x using a push method.
x.push(100);

// Add a new array ["hello", "world", "JavaScript is Fun"] to variable x.
// Log x in the console and analyze how x looks now.
x = x.concat(["hello", "world", "JavaScript is Fun"]);
console.log(x);

// Create a simple for loop that sums all the numbers between 1 to 500.
// Have console log the final sum.
var sum = 0;
for (var i = 1; i < 501; i++) {
  sum += i;
}
console.log("Sum of 1 to 500: " + sum);

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0],
// find the minimum value, and then print it
var y = [1, 5, 90, 25, -3, 0];
var min = y[0];
for (var i = 1; i < y.length; i++) {
  if (y[i] < min) min = y[i];
}
console.log("Minimum of array: " + min);

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0],
// find the average of all of the values, and then print it
var z = [1, 5, 90, 25, -3, 0];
sum = 0;
for (var i = 0; i < z.length; i++) {
  sum += z[i];
}
console.log("Average of array: " + (sum/z.length));

// Write a for-in loop that will navigate through the object below
var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript',
 dojo: 'Dallas'
}
for (var key in newNinja) {
  if (newNinja.hasOwnProperty(key)) {   // If check isn't necessary
    console.log("Key: " + key + "\tValue: " + newNinja[key]);
  }
}
