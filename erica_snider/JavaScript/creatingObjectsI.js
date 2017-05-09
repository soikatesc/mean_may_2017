
// Object Constructors are just functions that act as blueprints for creating particular objects.
// Object Constructor Architecture:
// private vars: declared with `var`
// private methods: declared with `function`; just console.logs, no logic
// public properties:  object.property = from_parameters
// public methods:     object.method = function(){}
//                     showPrivateVariables: console.logs our private variables
// on run: run whatever functions you want by calling them in the constuctor
// returns: whatever object it made, for example

function VehicleConstructor(name, numberOfWheels, numberOfPassengers){
  // private vars
  var vehicle = {};

  // public properties
  vehicle.name = name;
  vehicle.numberOfWheels = numberOfWheels;
  vehicle.numberOfPassengers = numberOfPassengers;

  // public methods
  vehicle.makeNoise = function(){
    console.log('noise!');
  }

  return vehicle;
}

Bike = VehicleConstructor("My Bike", 2, 1);
console.log(Bike);
Bike.makeNoise();
Bike.makeNoise = function(){
  console.log('ring ring!');
}
Bike.makeNoise();
Sedan = VehicleConstructor("Beige Sedan", 4, 5);
Sedan.makeNoise = function(){
  console.log('Honk Honk!');
}
Sedan.makeNoise();
Bus = VehicleConstructor("Big Bus", 14, 20);
Bus.passengerCount = 0;
Bus.pickUp = function(number){
  this.passengerCount += number;
}
console.log(Bus.passengerCount);
Bus.pickUp(5);
console.log(Bus.passengerCount);





////////////////////////////////////////////////////////////////////////
// PLATFORM SOLUTION ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

/* Vehicle Constructor declares an initial variable, vehicle as an object.
  public properties that can be set:
    name, wheels, passengersNumber
  public method:
    makeNoise
  returns vehicle.
*/

function VehicleConstructor(name, wheels, passengerNumber){
  var vehicle = {};
/*
  Properties
*/
  vehicle.name = name || "unicycle";
  vehicle.wheels = wheels || 1;
  vehicle.passengerNumber = passengerNumber || 0;
  /*
    methods
  */
  vehicle.makeNoise = function(noise){
    var noise = noise || "Honk Honk";
    console.log(noise)
  }
  /*
  return
  */
  return vehicle;
}

var unicycle = VehicleConstructor();

var bike = VehicleConstructor("bicycle", 2, 0);
bike.makeNoise = function(){
  console.log('ring, ring');
}
// or simply: bike.makenoise("ring, ring");
var sedan = VehicleConstructor("sedan", 4, 4);
sedan.makeNoise = function(){
  console.log('Honk Honk');
}

var bus = VehicleConstructor('bus',6, 0);
bus.pickupPassengers = function(newPassengers){
  bus.passengerNumber += newPassengers;
}

console.log(bus.passengerNumber);
bus.pickupPassengers(6);
console.log(bus.passengerNumber);

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
