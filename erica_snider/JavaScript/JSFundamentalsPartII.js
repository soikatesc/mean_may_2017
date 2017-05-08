function sum(x,y){
  var sum = 0;
  for(var i = x; i<=y; i++){
    sum += i;
  }
  return sum;
}

function min(arr){
  var min = arr[0];
  for(var i=1; i<arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

function avg(arr){
  var sum = 0;
  for(var i=1; i<arr.length; i++){
    sum += arr[i];
  }
  return sum/arr.length;
}

console.log(sum(7,14));
console.log(min([7,14,21,42]));
console.log(avg([7,14,21,42]));

// Rewrite these 3 as anonymous functions assigned to variables.

var anonSum = function(x,y){
  var sum = 0;
  for(var i = x; i<=y; i++){
    sum += i;
  }
  return sum;
}

var anonMin = function(arr){
  var min = arr[0];
  for(var i=1; i<arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

var anonAvg = function(arr){
  var sum = 0;
  for(var i=1; i<arr.length; i++){
    sum += i;
  }
  return sum/arr.length;
}

console.log(anonSum(7,14));
console.log(anonMin([7,14,21,42]));
console.log(anonAvg([7,14,21,42]));

// Rewrite these as methods of an object

var functionObject = {
  anonSum: function(x,y){
    var sum = 0;
    for(var i = x; i<=y; i++){
      sum += i;
    }
    return sum;
  },
  anonMin: function(arr){
    var min = arr[0];
    for(var i=1; i<arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  },
  anonAvg: function(arr){
    var sum = 0;
    for(var i=1; i<arr.length; i++){
      sum += i;
    }
    return sum/arr.length;
  }
}

console.log(functionObject.anonSum(7,14));
console.log(functionObject.anonMin([7,14,21,42]));
console.log(functionObject.anonAvg([7,14,21,42]));


// Create a JavaScript object called person with the following properties/methods

var person = {
  name: 'Erica',
  distance_traveled: 0,
  say_name: function(param){
    console.log(this.name);
  },
  say_something: function(param){
    console.log(this.name + " says '" + param + "'");
  },
  walk: function(){
    console.log(this.name + " is walking");
    this.distance_traveled += 3;
  },
  run: function(){
    console.log(this.name + " is running");
    this.distance_traveled += 10;
  },
  crawl: function(){
    console.log(this.name + " is crawling");
    this.distance_traveled += 1;
  }
};

console.log(person.say_name());
console.log(person.distance_traveled);
console.log(person.say_something("I'm at the Dojo"));
console.log(person.distance_traveled);
console.log(person.walk());
console.log(person.distance_traveled);
console.log(person.run());
console.log(person.distance_traveled);
console.log(person.crawl());
console.log(person.distance_traveled);
