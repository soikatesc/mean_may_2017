// *******AS FUNCTIONS THAT TAKE VARIABLES******
function sumLoop(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum);
}
sumLoop([1,3,5,7,5,6,4,6,8,987,55,7,4])

function minVal(arr) {
    var min = arr[0]
    for(var i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i]
        }
    }console.log(min)
}
minVal([4,30,-67])

function avgLoop(arr) {
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    console.log(sum/arr.length);
}
avgLoop([65,23,6,3])


// *******AS ANONYMOS FUNCTIONS ASSIGNED TO  VARIABLES******
var one = function sumLoop(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum);
}
sumLoop([1,3,5,7,5,6,4,6,8,987,55,7,4])
// console.log(one);

var two = function minVal(arr) {
    var min = arr[0]
    for(var i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i]
        }
    }console.log(min)
}
minVal([4,30,-67])
// console.log(two);

var three = function avgLoop(arr) {
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    console.log(sum/arr.length);
}
avgLoop([65,23,6,3])
// console.log(three);


// *******AS ANONYMOS FUNCTIONS ASSIGNED TO  VARIABLES******
var methodMadness = {
    sumLoop: function sumLoop(arr) {
        var sum = 0;
        for(var i = 0; i < arr.length; i++){
            sum = sum + arr[i];
        }
        // console.log(sum);
    },
    minVal: function minVal(arr) {
        var min = arr[0]
        for(var i = 1; i < arr.length; i++){
            if(min > arr[i]){
                min = arr[i]
            }
        }
        // console.log(min);
    },
    avgLoop: function avgLoop(arr) {
        var sum = 0
        for(var i = 0; i < arr.length; i++){
            sum = sum + arr[i]
        }
        // console.log(sum/arr.length);
    }
}

console.log(sumLoop([1,3,5,7,5,6,4,6,8,987,55,7,4]));
console.log(minVal([4,30,-67]));
console.log(avgLoop([65,23,6,3]));
// ********************MY OWN OBJECT THAT OBJECTIFIES ME *******
var person = {
    name: 'Shawn',
    distance_traveled: 0,
    say_my_name: function say_name() {
        console.log(this.name);
    },
    say_something: function say_it(str) {
        console.log(this.name +  ' says ' + str)
    },
    walk: function walkAlert() {
        console.log(this.name + ' is walking');
    },
    run: function runAlert() {
        console.log(this.name + ' is running');
        distance_traveled = 10;
    },
    crawl: function crawlAlert() {
        console.log(this.name + ' is crawling');
        distance_traveled = 10;
    },
}
// METHODS
person.say_my_name();
person.say_something('I am cool');
console.log(person.distance_traveled);
person.walk();
person.distance_traveled = person.distance_traveled + 3
console.log(person.distance_traveled);
person.run();
person.distance_traveled = person.distance_traveled + 10
console.log(person.distance_traveled);
person.crawl();
person.distance_traveled = person.distance_traveled + 1
console.log(person.distance_traveled);
