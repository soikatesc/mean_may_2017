var x = [3.5, "Dojo", "rocks", "Michael", "Sensei"]
for (var i = 0; i < x.length; i++) {
  console.log(x[i]);
}
x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);
var num = 1;
var sum = 0;
while (num < 501) {
  sum += num;
  num ++;
}
console.log(sum);

var y = [1, 5, 90, 25, -3, 0];
var mn =
function(y){
  var min = y[i];
  for (var i = 1; i < y.length; i++) {
    if (y[i] < min) {
        min = y[i]
    }
  }
  console.log(min)
}

var sm = function(x, y){
  var sum = 0
  for (var i = x; i <= y; i++) {
    sum += i
  }
  console.log(sum)
}
var avg = function(y) {
  var sum = 0;
  for (var i = 0; i < y.length; i++) {
    sum += y[i]
  }
  return sum/y.length;

}

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript',
 dojo: 'Dallas',
}
for (var key in newNinja){
  console.log(key + "->" + newNinja[key])
}
varFunction = function() {
  console.log("How will this get hoisted?")
}
varFunction()

var Person = {
  name : "Emmanuel",
  distance_traveled : 0,
  say_name: function(){console.log(Person.name);},
  say_something: function(arg){console.log(arg);},
  walk: function(){console.log(Person.name + " is walking"); Person.distance_traveled += 3;},
  run: function(){console.log(Person.name + " is running"); Person.distance_traveled += 10;},
  crawl: function(){console.log(Person.name + " is crawling"); Person.distance_traveled += 1;},
}
var math = {
  sum: function(x, y){
        var sum = 0
        for (var i = x; i <= y; i++) {
          sum += i
        }
        console.log(sum)
      },
  min: function(y){
        var min = y[0];
        for (var i = 1; i < y.length; i++) {
          if (y[i] < min) {
              min = y[i]
          }
        }
        console.log(min)
      },
  avg: function(y) {
        var sum = 0;
        for (var i = 0; i < y.length; i++) {
          sum += y[i]
        }
        return sum/y.length;
      },
}
var newPerson = function(name){
  Person = {
    name: name,
    distance_traveled : 0,
    say_name: function(){console.log(Person.name);},
    say_something: function(arg){console.log(arg);},
    walk: function(){console.log(Person.name + " is walking"); Person.distance_traveled += 3;},
    run: function(){console.log(Person.name + " is running"); Person.distance_traveled += 10;},
    crawl: function(){console.log(Person.name + " is crawling"); Person.distance_traveled += 1;},
  };
  return Person
}
newPerson("Bob")

function ninjaConstructor(name, cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
  ninja.levelUp = function(){ if (ninja.beltLevel < 2){ ninja.beltLevel += 1; ninja.belt = belts[ninja.beltLevel];} return ninja}
  ninja.belt = belts[ninja.beltLevel];
  return ninja;
}
