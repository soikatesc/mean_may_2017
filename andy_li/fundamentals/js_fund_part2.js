// Turn the following problems from JS Fundamentals Part I into functions that take variable inputs
//
// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
// Write a loop that will go through an array, find the minimum value, and then return it.
// Write a loop that will go through an array, find the average of all of the values, and then return it.
function sum_loop(x, y){
  sum = 0;
  for (var i = x; i <= y; i++) {
    sum += i;
  }

  console.log(sum);
}

function min_arr(arr){
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min
}

function avg_arr(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (sum / arr.length);
}

// Rewrite these 3 as anonymous functions assigned to variables.
var sum_loop = function(x, y){
  sum = 0;
  for (var i = x; i <= y; i++) {
    sum += i;
  }

  console.log(sum);
}

var min_arr = function(arr){
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min
}

var avg_arr = function(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (sum / arr.length);
}

// Rewrite these as methods of an object
myObj = {
  "sum_loop": sum_loop,
  "min_arr": min_arr,
  "avg_arr": avg_arr,
}

// Create a JavaScript object called person with the following properties/methods
//
// Properties
// name - set this as your own namedistance_traveled - set this initially as zero
// Methods
// say_name - should alert the object’s name property
// say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1
person = {
  name: "Andy",
  distance_traveled: 0,
  say_name: function() {
    console.log(this.name);
    return this;
  },
  say_something: function(str) {
    console.log(this.name + " says " + str);
    return this;
  },
  walk: function() {
    console.log(this.name + " is walking");
    this.distance_traveled += 3;
    return this;
  },
  run: function() {
    console.log(this.name + " is running");
    this.distance_traveled += 10;
    return this;
  },
  crawl: function() {
    console.log(this.name + " is crawling");
    this.distance_traveled += 1;
    return this;
  }
}
