// Turn the following problems from JS Fundamentals Part I into functions that take variable inputs
function logArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function pushNum(arr, num) {
  return arr.push(num);
}

function mergeArray(arr1, arr2) {
  return arr1.concat(arr2);
}

function sumToNum(num) {
  var sum = 0;
  for (var i = 1; i < num+1; i++) {
    sum += i;
  }
  return sum;
}

function arrayMin(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

function arrayAvg(arr) {
  sum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum/arr.length;
}

function navigateObject(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log("Key: " + key + "\tValue: " + obj[key]);
    }
  }
}

// Create a simple for loop that sums all the integers between x and y (inclusive).
// Have it console log the final sum.
function sum(x, y) {
  var sum = 0;
  for (var i = x; i < y+1; i++) {
    sum += i;
  }
  return sum;
}

// Write a loop that will go through an array, find the minimum value, and then return it.
function min(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

// Write a loop that will go through an array, find the average of all of the values, and then return it.
function avg(arr) {
  sum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum/arr.length;
}

// Rewrite these 3 as anonymous functions assigned to variables.
var sum = function(x, y) {
  var funcSum = 0;
  for (var i = x; i < y+1; i++) {
    funcSum += i;
  }
  return funcSum;
};

var min = function(arr) {
  var funcMin = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < funcMin) funcMin = arr[i];
  }
  return funcMin;
};

var avg = function(arr) {
  var sum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum/arr.length;
};

// Rewrite these as methods of an object
var array = {
  sum: function(x, y) {
    var funcSum = 0;
    for (var i = x; i < y+1; i++) {
      funcSum += i;
    }
    return funcSum;
  },

  min: function(arr) {
    var funcMin = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < funcMin) funcMin = arr[i];
    }
    return funcMin;
  },

  avg: function(arr) {
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum/arr.length;
  }
};

// Create a JavaScript object called person with the following properties/methods
var person = {
  name: 'Lance',
  distance_traveled: 0,
  say_name: function() {
    console.log(person.name);
    return person;
  },
  say_something: function(say) {
    console.log(person.name + " says '" + say + "'");
    return person;
  },
  walk: function() {
    console.log(person.name + ' is walking');
    person.distance_traveled += 3;
    return person;
  },
  run: function() {
    console.log(person.name + ' is running');
    person.distance_traveled += 10;
    return person;
  },
  crawl: function() {
    console.log(person.name + ' is crawling');
    person.distance_traveled += 1;
    return person;
  }
}

person.say_name().say_something('Pizza is cool').walk().run().crawl();
